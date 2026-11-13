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

## Social assets

`node tools/build-social.mjs 0.20` makes the Instagram and LinkedIn set for one catalogue item (by number or id); with no argument it makes every published item. Output goes to `social/<number>-<id>/` as HTML, and as PNG when Playwright is installed (`npm i -D playwright && npx playwright install chromium`). The `social/` folder is not committed or published. Templates live in `tools/social-templates.mjs` and are documented in the design system under Social.

## Design language

`site/master.css` is the one token file. It holds every colour, type, spacing and shape value plus the v4 rules (square content, sentence-case labels, Medium display weight, flat fields, glass only on the nav, menu sheet and floating action). Nothing later in the cascade overrides it. The home gallery is the only index; `/work/`, `/ideas/` and `/articles/` are the same gallery, filtered.

## Share images and icons

`node tools/build-og.mjs` makes the link-preview image for every page (1200 x 630, in `site/assets/og/`) from the same templates as the social assets. The site build uses `assets/og/<id>.jpg` when it exists and `assets/og-image.jpg` otherwise, so an item added in the CMS shows the default image until the script is run and the result committed. `site/favicon.png` and `site/apple-touch-icon.png` are the gold square with "OS" in Neue Haas Medium.
