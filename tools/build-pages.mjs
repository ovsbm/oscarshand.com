// Builds a static page for every route of oscarshand.com, so search engines, AI crawlers
// and link previews see real titles, descriptions and content instead of {{ }} placeholders.
// Usage: node build-pages.mjs "<path to the deploy folder>"
// Re-run it after editing site-data.js, then deploy the folder as usual.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(process.argv[2] || path.join(path.dirname(new URL(import.meta.url).pathname), "..", "site"));
const SITE = "https://oscarshand.com";
const D = await import(pathToFileURL(path.join(root, "site-data.js")).href + "?v=" + Date.now());
const stamp = new Date().toISOString().replace(/\D/g, "").slice(0, 12);
const tpl = fs.readFileSync(path.join(root, "index.html"), "utf8")
  .replace(/<noscript id="static">[\s\S]*?<\/noscript>\n?/, "")
  // Version the content file so browsers fetch the new copy after each build
  .replace(/import\("\.\/site-data\.js(?:\?v=\w+)?"\)/, `import("./site-data.js?v=${stamp}")`);

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clip = (s, n = 158) => { s = String(s || "").replace(/\s+/g, " ").trim(); if (s.length <= n) return s; const c = s.slice(0, n - 1); return c.slice(0, c.lastIndexOf(" ")) + "…"; };
const projects = D.PROJECTS || [], ideas = D.PERSONAL || [], articles = D.ARTICLES || [], archive = D.ARCHIVE || [];
const urlFor = (p) => (ideas.includes(p) ? "/ideas/" : "/work/") + p.id;

const nav = `<nav><a href="/">Home</a> · <a href="/work">Work</a> · <a href="/ideas">Ideas</a> · <a href="/articles">Articles</a> · <a href="/about">About</a> · <a href="/contact">Contact</a> · <a href="/archive">Archive</a></nav>`;
const list = (items) => `<ul>${items.map((p) => `<li><a href="${urlFor(p)}">${esc(p.number)} ${esc(p.title)}</a>: ${esc(p.outcome)} (${esc(p.service)}, ${esc(p.year)})</li>`).join("")}</ul>`;
const contact = `<p>Email: oscar.shand@gmail.com · <a href="${esc(D.CONTACT.linkedinUrl)}">LinkedIn</a> · ${esc(D.CONTACT.location)}</p>`;

const artList = `<ul>${articles.map((a) => `<li><a href="/articles/${a.id}">${esc(a.number)} ${esc(a.title)}</a>: ${esc(a.dek)} (${esc(a.date)})</li>`).join("")}</ul>`;
const routes = [];
routes.push({ p: "/", title: "Oscar Shand · Design and systems for small businesses. Christchurch, NZ",
  desc: clip(D.HERO.statement + " Selected client work and side projects, 2023–2026."),
  body: `<h1>Oscar Shand</h1><p>${esc(D.HERO.statement)}</p><p>${esc(D.HERO.location)}. ${esc(D.HERO.availability)}.</p><h2>Work</h2>${list(projects)}<h2>Ideas and side projects</h2>${list(ideas)}<h2>Articles</h2>${artList}${contact}` });
routes.push({ p: "/work", title: "Work · Oscar Shand", desc: "Client and studio projects: brand, web, content and the systems behind them.",
  body: `<h1>Work</h1>${list(projects)}` });
routes.push({ p: "/ideas", title: "Ideas · Oscar Shand", desc: "Self-initiated research, prototypes and side projects.",
  body: `<h1>Ideas</h1>${list(ideas)}` });
routes.push({ p: "/articles", title: "Articles · Oscar Shand", desc: "Short pieces on design, systems and how the work gets made.",
  body: `<h1>Articles</h1>${artList}` });
routes.push({ p: "/about", title: "About · Oscar Shand", desc: clip(D.ABOUT.lead),
  body: `<h1>About</h1><p>${esc(D.ABOUT.lead)}</p>${D.ABOUT.paragraphs.map((x) => `<p>${esc(x)}</p>`).join("")}<h2>What I do</h2>${(D.DISCIPLINES || []).map((d) => `<h3>${esc(d.title)}</h3><p>${esc(d.body)}</p>`).join("")}<h2>Worked with</h2><p>${esc((D.ABOUT.references || []).join(", "))}</p>` });
routes.push({ p: "/contact", title: "Contact · Oscar Shand", desc: "Get in touch about a project or a role. Based in Christchurch, working across New Zealand and Australia.",
  body: `<h1>Contact</h1>${contact}` });
routes.push({ p: "/archive", title: "Archive · Oscar Shand", desc: clip(D.HOME.archiveNote || "Earlier work."),
  body: `<h1>Archive</h1><p>${esc(D.HOME.archiveNote || "")}</p>` + archive.map((a) => `<figure><img src="/${esc(a.src)}" alt="${esc(a.alt)}" loading="lazy" width="600"><figcaption>${esc(a.number)} · ${esc(a.date)} · <strong>${esc(a.title)}</strong>. ${esc(a.caption)}</figcaption></figure>`).join("") });
for (const a of articles) {
  routes.push({ p: `/articles/${a.id}`, title: `${a.title} · Oscar Shand`, desc: clip(a.dek || (a.body.find((b) => b.p) || {}).p), image: a.image || undefined,
    body: `<article><h1>${esc(a.title)}</h1><p>${esc(a.dek)}</p><p>${esc(a.number)} · Oscar Shand · ${esc(a.date)} · ${esc(a.read)}</p>`
      + a.body.map((b) => b.h ? `<h2>${esc(b.h)}</h2>` : b.q ? `<blockquote>${esc(b.q)}</blockquote>` : `<p>${esc(b.p)}</p>`).join("") + `</article>` });
}
for (const p of [...projects, ...ideas]) {
  routes.push({ p: urlFor(p), title: `${p.title} · Oscar Shand`, desc: clip(p.summary), image: p.image,
    body: `<h1>${esc(p.title)}</h1><p><strong>${esc(p.outcome)}</strong></p><p>${esc(p.summary)}</p>`
      + `<ul>${(p.meta || []).map((m) => `<li>${esc(m.label)}: ${esc(m.value)}</li>`).join("")}</ul>`
      + `<ul>${(p.stats || []).map((s) => `<li>${esc(s.value)}${esc(s.unit || "")} ${esc(s.label)}</li>`).join("")}</ul>`
      + (p.sections || []).map((s) => `<h2>${esc(s.kind)}: ${esc(s.head)}</h2><p>${esc(s.body)}</p>`).join("")
      + (p.live ? `<p><a href="${esc(p.live.href)}">${esc(p.live.label)}</a></p>` : "")
      + `<ul>${(p.points || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
      + (p.gallery || []).map((g) => `<img src="/${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy" width="800">`).join("") });
}

const setMeta = (html, r) => {
  const url = SITE + (r.p === "/" ? "/" : r.p + "/"), img = SITE + "/" + (r.image || "assets/og-image.jpg");
  const swaps = [
    [/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`],
    [/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(r.desc)}">`],
    [/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(r.title)}">`],
    [/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(r.desc)}">`],
    [/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`],
    [/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${img}">`],
    [/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`],
  ];
  for (const [re, v] of swaps) { if (!re.test(html)) throw new Error("missing tag " + re); html = html.replace(re, v); }
  if (r.image) html = html.replace(/<meta property="og:image:width" content="[^"]*">\n?<meta property="og:image:height" content="[^"]*">\n?/, "");
  return html;
};

const pages = [];
for (const r of routes) {
  let html = setMeta(tpl, r);
  // Subpages get a relative base too, so the browser's preloader fetches assets from the site root
  if (r.p !== "/") html = html.replace('<meta charset="utf-8">', `<meta charset="utf-8">\n<base href="${"../".repeat(r.p.split("/").filter(Boolean).length)}">`);
  html = html.replace("<body>", `<body>\n<noscript id="static"><style>x-dc{display:none}</style>${nav}<main>${r.body}</main>${nav}</noscript>`)
    .replace(/href="(\/(?:work|about|contact|ideas)(?:\/[^"\/]+)?)"/g, 'href="$1/"');
  const file = r.p === "/" ? path.join(root, "index.html") : path.join(root, r.p, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  pages.push(r.p);
}
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  + [...pages.map((p) => p === "/" ? p : p + "/")].map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`).join("\n") + `\n</urlset>\n`);
console.log(`Wrote ${pages.length} pages and sitemap.xml`);
