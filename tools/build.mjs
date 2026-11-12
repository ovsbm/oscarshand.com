// The whole build, as Netlify runs it: content → site-data.js → one page per route → sitemap.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
// Route pages are generated; clear them so a deleted or renamed item leaves nothing behind
for (const d of ["work", "ideas", "articles", "archive", "about", "contact"]) fs.rmSync(path.join(root, "site", d), { recursive: true, force: true });
const run = (f) => execFileSync(process.execPath, [path.join(root, "tools", f)], { stdio: "inherit" });
run("build-content.mjs");
run("build-pages.mjs");
