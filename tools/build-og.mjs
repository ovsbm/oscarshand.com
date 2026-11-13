// Makes the share image (link preview) for every page, in the master design language.
//   node tools/build-og.mjs            all pages
//   node tools/build-og.mjs 0.20       one catalogue item, by number or id
// Writes 1200 x 630 JPEGs to site/assets/og/. Needs Playwright (npm i -D playwright && npx playwright install chromium).
// The site build uses site/assets/og/<id>.jpg when it exists and site/assets/og-image.jpg otherwise,
// so an item added in the CMS shows the default image until this script is run and the result committed.
import fs from "node:fs"; import path from "node:path"; import { fileURLToPath, pathToFileURL } from "node:url"; import { createRequire } from "node:module";
import { baseCss, templates } from "./social-templates.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tmpDir = path.join(root, ".og-tmp"); fs.mkdirSync(tmpDir, { recursive: true });
const tmp = path.join(tmpDir, "site-data.mjs"); fs.copyFileSync(path.join(root, "site/site-data.js"), tmp);
const D = await import(pathToFileURL(tmp).href + "?" + Date.now());
const dsDir = fs.readdirSync(path.join(root, "site/ds"))[0];
const tokenCss = ["master.css", "project-colours.css"].map((f) => fs.readFileSync(path.join(root, "site", f), "utf8")).join("\n");
const colourOf = (key) => { if (!key || key === "house") return null; const m = new RegExp(`--project-${key}:\\s*([^;}]+)`).exec(tokenCss); return m ? m[1] : null; };
const mon = (d) => { const [y, m] = String(d).split("-"); return m ? ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+m - 1] + " " + y : y; };
const items = [
  ...D.PROJECTS.map((p) => ({ ...p, kind: "Work", tag: p.service, line: p.outcome })),
  ...D.PERSONAL.map((p) => ({ ...p, kind: "Idea", tag: p.service, line: p.outcome })),
  ...D.ARTICLES.map((a) => ({ ...a, kind: "Article", line: a.dek, date: a.sortDate || a.date })),
].map((it) => ({ ...it, colour: colourOf(it.project), date: /^\d{4}-\d{2}$/.test(it.date) ? mon(it.date) : it.date }));
const sections = [
  ["og-image", "Oscar Shand", "Research, development and design for small businesses.", true],
  ["work", "Work", "Client and studio projects: brand, web and the systems behind them."],
  ["ideas", "Ideas", "Self-initiated research, prototypes and maps."],
  ["articles", "Articles", "Short pieces on design, technology and the assumptions behind them."],
  ["about", "About", "A design studio in Christchurch."],
  ["contact", "Contact", "Get in touch about a project or a role."],
  ["archive", "Archive", "Earlier work, 2021 to 2022."],
];
const want = process.argv[2];
let chromium; try { ({ chromium } = await import("playwright")); } catch { ({ chromium } = createRequire(import.meta.url)("playwright")); }
const browser = await chromium.launch(); const outDir = path.join(root, "site/assets/og"); fs.mkdirSync(outDir, { recursive: true });
const shot = async (html, file) => {
  const f = path.join(tmpDir, "p.html"); fs.writeFileSync(f, `<!doctype html><meta charset="utf-8"><style>html,body{margin:0}${baseCss(pathToFileURL(path.join(root, "site/ds", dsDir, "assets/fonts")).href + "/")}</style>${html}`);
  const pg = await browser.newPage({ viewport: { width: 1200, height: 630 } }); await pg.goto(pathToFileURL(f).href); await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: file, type: "jpeg", quality: 86 }); await pg.close();
};
let n = 0; const siteUrl = pathToFileURL(path.join(root, "site")).href + "/";
for (const it of items) { if (want && it.number !== want && it.id !== want) continue; await shot(templates.og(it, siteUrl), path.join(outDir, it.id + ".jpg")); n++; }
if (!want) for (const [name, title, line, home] of sections) { await shot(templates.ogSection(title, line, home), name === "og-image" ? path.join(root, "site/assets/og-image.jpg") : path.join(outDir, name + ".jpg")); n++; }
await browser.close(); fs.rmSync(tmpDir, { recursive: true, force: true });
console.log(`Wrote ${n} share images`);
