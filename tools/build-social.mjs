// Makes the social set for one catalogue item (or all of them) from the same content the site uses.
//   node tools/build-social.mjs 0.20          one item, by number or id
//   node tools/build-social.mjs               every published item
// Writes HTML to social/<number>-<id>/ and, when Playwright is installed, a PNG beside each one.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath, pathToFileURL } from "node:url";
import { FORMATS, baseCss, templates } from "./social-templates.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tmp = path.join(root, "social", ".site-data.mjs");
fs.mkdirSync(path.dirname(tmp), { recursive: true }); fs.copyFileSync(path.join(root, "site/site-data.js"), tmp);
const D = await import(pathToFileURL(tmp).href + "?" + Date.now());
const cssDir = fs.readdirSync(path.join(root, "site/ds"))[0];
const tokenCss = ["master.css", "project-colours.css"].map((f) => fs.readFileSync(path.join(root, "site", f), "utf8")).join("\n");
const colourOf = (key) => { if (!key || key === "house") return null; const m = new RegExp(`--project-${key}:\\s*([^;}]+)`).exec(tokenCss); return m ? m[1] : null; };
const mon = (d) => { const [y, m] = String(d).split("-"); return m ? ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+m - 1] + " " + y : y; };
const items = [
  ...D.PROJECTS.map((p) => ({ ...p, kind: "Work", tag: p.service, line: p.outcome, path: "work/" + p.id })),
  ...D.PERSONAL.map((p) => ({ ...p, kind: "Idea", tag: p.service, line: p.outcome, path: "ideas/" + p.id })),
  ...D.ARTICLES.map((a) => ({ ...a, kind: "Article", line: a.dek, path: "articles/" + a.id, date: a.sortDate || a.date })),
].map((it) => ({ ...it, colour: colourOf(it.project), date: /^\d{4}-\d{2}$/.test(it.date) ? mon(it.date) : it.date, statement: it.statement || it.line }));
const want = process.argv[2]; const chosen = want ? items.filter((it) => it.number === want || it.id === want) : items;
if (!chosen.length) { console.error("No item matches " + want); process.exit(1); }
let chromium = null; try { ({ chromium } = await import("playwright")); } catch { try { ({ chromium } = (await import("node:module")).createRequire(import.meta.url)("playwright")); } catch {} }
const browser = chromium ? await chromium.launch() : null;
const page = (f, body) => `<!doctype html><meta charset="utf-8"><style>html,body{margin:0}${baseCss("../../site/ds/" + cssDir + "/assets/fonts/")}</style>${body}`;
for (const it of chosen) {
  const dir = path.join(root, "social", `${it.number}-${it.id}`); fs.mkdirSync(dir, { recursive: true });
  const secs = (it.sections || []).slice(0, 3); const of = secs.length + 2;
  const set = { "instagram-post": ["post", templates.post(it, "../../site/")], "instagram-story": ["story", templates.story(it, "../../site/")],
    "statement": ["statement", templates.statement(it)], "linkedin": ["linkedin", templates.linkedin(it, "../../site/")] };
  if (secs.length) { set["carousel-1"] = ["post", templates.post(it, "../../site/")];
    secs.forEach((s, k) => { set[`carousel-${k + 2}`] = ["slide", templates.slide(it, "", { n: k + 2, of, label: s.kind, head: s.head, body: String(s.body || "").split(/(?<=\.)\s/).slice(0, 2).join(" ") })]; });
    set[`carousel-${of}`] = ["slide", templates.closing(it)]; }
  for (const [name, [f, html]] of Object.entries(set)) {
    const file = path.join(dir, name + ".html"); fs.writeFileSync(file, page(f, html));
    if (browser) { const pg = await browser.newPage({ viewport: { width: FORMATS[f].w, height: FORMATS[f].h } }); await pg.goto(pathToFileURL(file).href); await pg.evaluate(() => document.fonts.ready); await pg.screenshot({ path: path.join(dir, name + ".png") }); await pg.close(); }
  }
  console.log(`${it.number} ${it.title}: ${Object.keys(set).length} assets${browser ? " (HTML and PNG)" : " (HTML only; install playwright for PNG)"}`);
}
{ const dir = path.join(root, "social", "profile"); fs.mkdirSync(dir, { recursive: true }); const file = path.join(dir, "linkedin-banner.html"); fs.writeFileSync(file, page("banner", templates.banner()));
  if (browser) { const pg = await browser.newPage({ viewport: { width: 1584, height: 396 } }); await pg.goto(pathToFileURL(file).href); await pg.evaluate(() => document.fonts.ready); await pg.screenshot({ path: path.join(dir, "linkedin-banner.png") }); await pg.close(); } }
if (browser) await browser.close(); fs.rmSync(tmp);
