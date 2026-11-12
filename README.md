# oscarshand.com

The studio site of Oscar Shand. Content is edited in the CMS at **oscarshand.com/admin**; every save commits here and Netlify rebuilds the site.

## How it fits together

- `content/` — everything that changes: one JSON file per project, idea, article and archive piece, plus `site.json` (site text, edited in the CMS) and `site-fixed.json` (CV and navigation, edited by hand).
- `site/` — the website itself: `index.html` (the page template), styles, scripts, fonts, images. CMS uploads land in `site/assets/uploads/`.
- `site/admin/` — the CMS (Sveltia CMS) and its `config.yml`.
- `tools/build.mjs` — the build Netlify runs: content → `site/site-data.js` → one static page per route → `sitemap.xml`.

## House rules the build enforces

- **Catalogue numbers.** One sequence across the site (0.01, 0.02 …). Leave the number blank and publishing gives the item the next free one (see `/next-number.txt`). Published numbers never change; a duplicate stops the build and the live site stays as it was.
- **Dates.** `YYYY-MM`, or just the year when the month isn't known. Shown as "May 2026".
- **Colour.** Only client projects and studio work from before 2025 keep their own colour. Everything else uses the house palette: gold `#C7A365`, black `#141416`, cream `#F1EDE4`. A new client colour can be picked in the CMS (Colour → Own colour).
- **Drafts.** Untick Published to keep something in the CMS without putting it on the site.

## Working locally

```
node tools/build.mjs
cd site && python3 -m http.server 8000
```
