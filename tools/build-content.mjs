// Turns the CMS content files in /content into site/site-data.js, the one file the site reads.
// Runs on every Netlify build (see netlify.toml), so a save in the CMS goes live on its own.
// Usage: node tools/build-content.mjs
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const read = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const dir = (d) => { const p = path.join(root, "content", d); return fs.existsSync(p) ? fs.readdirSync(p).filter((f) => f.endsWith(".json")).sort().map((f) => ({ ...read(path.join(p, f)), _file: `content/${d}/${f}` })) : []; };

// site.json is edited in the CMS; site-fixed.json holds the CV and navigation, edited by hand
const site = { ...read(path.join(root, "content", "site-fixed.json")), ...read(path.join(root, "content", "site.json")) };
const work = dir("work"), ideas = dir("ideas"), articles = dir("articles"), archive = dir("archive");
const problems = [];

// ── Dates: stored as YYYY-MM (or YYYY when the month isn't known), shown as "May 2026" ──
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const okDate = (d) => /^\d{4}(-(0[1-9]|1[0-2]))?$/.test(String(d || ""));
const month = (d) => { const [y, m] = String(d).split("-"); return m ? `${MONTHS[+m - 1]} ${y}` : y; };
const span = (a, b) => !b ? month(a) : b === "now" ? `${month(a)} – now` : month(a) === month(b) ? month(a) : `${month(a)} – ${month(b)}`;

// ── Colour rule: only client projects and studio work from before 2025 keep their own colour ──
const allowed = (x) => !!x.client || String(x.date) < "2025";
const colourFor = (x) => !allowed(x) || !x.colour ? "house" : x.colour === "own" ? (/^#[0-9a-f]{6}$/i.test(x.colour_hex || "") ? "c-" + x.slug : "house") : x.colour;
// Own colours become CSS: the colour as the case-study ground, with black or cream type, whichever reads better
const ownCss = [];
const lum = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= .03928 ? c / 12.92 : ((c + .055) / 1.055) ** 2.4)).reduce((s, c, i) => s + c * [.2126, .7152, .0722][i], 0);
const contrast = (a, b) => (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
const ink = (hex) => contrast(lum(hex), lum("#141416")) >= contrast(lum(hex), lum("#F1EDE4")) ? "var(--black)" : "var(--cream)";

const live = (list) => list.filter((x) => x.published !== false);
for (const x of [...work, ...ideas, ...articles, ...archive]) {
  if (!x.slug || !/^[a-z0-9-]+$/.test(x.slug)) problems.push(`${x._file}: slug must be lowercase letters, numbers and hyphens`);
  if (!okDate(x.date)) problems.push(`${x._file}: date must look like 2026-11`);
  if (x.end && x.end !== "now" && !okDate(x.end)) problems.push(`${x._file}: end date must look like 2026-11, or "now"`);
}
// ── Catalogue numbers: one sequence across the site, 0.01, 0.02 …; published items need one, and no two can share it ──
const seen = new Map();
for (const x of live([...work, ...ideas, ...articles, ...archive])) {
  if (!x.number) continue;
  if (!/^0\.\d{2,3}$/.test(String(x.number))) problems.push(`${x._file}: number must look like 0.23`);
  else if (seen.has(x.number)) problems.push(`${x._file}: number ${x.number} is already used by ${seen.get(x.number)}`);
  else seen.set(x.number, x._file);
}
// Published items without a number get the next free ones, oldest first
const seq = (k) => parseInt(String(k).slice(2), 10) || 0;
const used = () => [...seen.keys()].map(seq);
for (const x of live([...work, ...ideas, ...articles, ...archive]).filter((x) => !x.number).sort((a, b) => String(a.date).localeCompare(String(b.date)) || String(a.slug).localeCompare(String(b.slug)))) {
  x.number = "0." + String((used().length ? Math.max(...used()) : 0) + 1).padStart(2, "0"); seen.set(x.number, x._file);
}
if (problems.length) { console.error("Content problems, nothing was built:\n- " + problems.join("\n- ")); process.exit(1); }
const next = (() => { const n = used(); return "0." + String((n.length ? Math.max(...n) : 0) + 1).padStart(2, "0"); })();

// Newest first by start date, then by number
const num = (x) => seq(x.number);
const newest = (a, b) => String(b.date).localeCompare(String(a.date)) || num(b) - num(a);

const project = (x) => {
  const when = span(x.date, x.end);
  const meta = (x.meta || []).slice();
  meta.splice(Math.min(1, meta.length), 0, { label: "Date", value: when, numeric: true });
  const o = { id: x.slug, project: colourFor(x), number: x.number, title: x.title, service: x.service, year: when, date: x.date,
    pinned: +x.pinned || 0, large: !!x.large, image: x.image, thumb: x.thumb || x.image, outcome: x.outcome,
    stats: (x.stats || []).map((s) => (s.unit ? s : { value: s.value, label: s.label })), gallery: x.gallery || [], summary: x.summary,
    meta, sections: x.sections || [], points: x.points || [] };
  if (x.live && x.live.href) o.live = { href: x.live.href, label: x.live.label || "Open it" };
  return o;
};

// Article body: plain Markdown paragraphs; "## " starts a heading, "> " a pull quote
const blocks = (md) => String(md || "").replace(/\r/g, "").split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean)
  .map((s) => s.startsWith("## ") ? { h: s.slice(3).trim() } : s.startsWith(">") ? { q: s.replace(/^>\s?/gm, "").trim() } : { p: s.replace(/\s*\n\s*/g, " ") });
const words = (md) => String(md || "").split(/\s+/).filter(Boolean).length;
const article = (x) => ({ id: x.slug, number: x.number, title: x.title, dek: x.dek || "", date: month(x.date), sortDate: x.date,
  read: `${Math.max(1, Math.round(words(x.body) / 220))} min read`, tag: x.tag || "Article", project: "house",
  image: x.image || "", pinned: +x.pinned || 0, related: x.related || "", body: blocks(x.body) });

const PROJECTS = live(work).sort(newest).map(project);
const PERSONAL = live(ideas).sort(newest).map(project);
const ARTICLES = live(articles).sort(newest).map(article);
const ARCHIVE = live(archive).sort((a, b) => num(a) - num(b))
  .map((x) => ({ id: x.slug, number: x.number, src: x.image, alt: x.alt || x.title, title: x.title, caption: x.caption || "", date: month(x.date), project: colourFor(x) }));

const out = `// Generated by tools/build-content.mjs from /content. Edit the content (or the CMS), not this file.
// Next free catalogue number: ${next}
` + Object.entries({ ...site, PROJECTS, PERSONAL, ARTICLES, ARCHIVE, CATALOGUE: { next } })
  .map(([k, v]) => `export const ${k}=${JSON.stringify(v)};`).join("\n") + "\n";
fs.writeFileSync(path.join(root, "site", "site-data.js"), out);
fs.writeFileSync(path.join(root, "site", "next-number.txt"), next + "\n");
for (const x of [...work, ...ideas, ...archive]) { const c = colourFor(x); if (c.startsWith("c-")) ownCss.push(`[data-project="${c}"]{--project:${x.colour_hex}}`, `.ground-project[data-project="${c}"]{--ground:${x.colour_hex};--on-ground:${ink(x.colour_hex)}}`); }
fs.writeFileSync(path.join(root, "site", "project-colours.css"), "/* Generated from the CMS: own colours for client projects */\n" + ownCss.join("\n") + "\n");
console.log(`site-data.js: ${PROJECTS.length} work, ${PERSONAL.length} ideas, ${ARTICLES.length} articles, ${ARCHIVE.length} archive · next number ${next}`);
