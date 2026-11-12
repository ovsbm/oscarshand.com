// Oscar Shand · social templates. One source for the design system previews and the generator.
// Every template is square-cornered, sentence case, gold / black / cream, and carries the catalogue number.
// A project colour is used only when the item is allowed one (client work, or studio work before 2025).

export const FORMATS = {
  post:     { w: 1080, h: 1350, name: "Instagram post",     note: "4:5 feed post. Number, image, title." },
  slide:    { w: 1080, h: 1350, name: "Instagram carousel", note: "4:5 carousel slides: cover, text slides, closing slide." },
  story:    { w: 1080, h: 1920, name: "Instagram story",    note: "9:16. Keep text inside the middle 1420px." },
  statement:{ w: 1080, h: 1350, name: "Statement post",     note: "4:5, type only. The one place Bold is used." },
  linkedin: { w: 1200, h: 627,  name: "LinkedIn link image", note: "1.91:1 for articles and link posts." },
  banner:   { w: 1584, h: 396,  name: "LinkedIn banner",    note: "4:1 profile banner. Left 400px stays clear for the photo." },
};

const GOLD = "#c7a365", BLACK = "#141416", CREAM = "#f1ede4";
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const lum = (hex) => { const n = parseInt(hex.slice(1), 16); const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const inkOn = (bg) => { const o = /oklch\(\s*([\d.]+)(%?)/.exec(bg); if (o) return (o[2] ? +o[1] / 100 : +o[1]) > 0.6 ? BLACK : CREAM; return /^#[0-9a-f]{6}$/i.test(bg) ? (lum(bg) > 0.2 ? BLACK : CREAM) : BLACK; };

export const baseCss = (fontBase) => `
@font-face{font-family:"Neue Haas Grotesk";src:url("${fontBase}NHaasGroteskTXPro-65Md.ttf");font-weight:500}
@font-face{font-family:"Neue Haas Grotesk";src:url("${fontBase}NHaasGroteskTXPro-75Bd.ttf");font-weight:700}
@font-face{font-family:"Inter";src:url("${fontBase}Inter-Variable.ttf");font-weight:100 900}
.os-social{position:relative;box-sizing:border-box;overflow:hidden;display:flex;flex-direction:column;background:var(--g);color:var(--i);font-family:Inter,system-ui,sans-serif;font-feature-settings:"tnum";border-radius:0}
.os-social *{box-sizing:border-box;margin:0;border-radius:0}
.os-social .d{font-family:"Neue Haas Grotesk","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:500;letter-spacing:-0.035em;line-height:0.98}
.os-social .b{font-weight:700}
.os-social .l{font-weight:500;letter-spacing:0}
.os-social .soft{opacity:.74}
.os-social .row{display:flex;justify-content:space-between;align-items:baseline;gap:32px}
.os-social .img{flex:1;min-height:0;background:var(--i) center/cover no-repeat}
.os-social .rule{height:2px;background:var(--i)}
`;

const frame = (f, g, inner, pad) => `<div class="os-social" style="--g:${g};--i:${inkOn(g)};width:${FORMATS[f].w}px;height:${FORMATS[f].h}px;padding:${pad}">${inner}</div>`;
const meta = (it) => [it.number, it.kind, it.tag].filter(Boolean).map(esc).join(" · ");
const img = (it, base) => (it.image ? `<div class="img" style="background-image:url('${base}${esc(it.image)}')"></div>` : "");

export const templates = {
  post: (it, base = "") => frame("post", it.colour || GOLD, `
    <div class="row l" style="font-size:30px"><span>${meta(it)}</span><span>Oscar Shand</span></div>
    <div style="height:40px"></div>${img(it, base)}<div style="height:44px"></div>
    <h1 class="d" style="font-size:${it.title.length > 22 ? 96 : 128}px">${esc(it.title)}</h1>
    <p class="soft" style="font-size:38px;line-height:1.3;margin-top:24px;max-width:860px">${esc(it.line)}</p>
    <div style="height:44px"></div>
    <div class="row l" style="font-size:30px"><span>${esc(it.date)}</span><span>oscarshand.com ↘</span></div>`, "72px"),

  slide: (it, base = "", s = { n: 2, of: 5, label: "Challenge", head: it.line, body: "" }) => frame("slide", CREAM, `
    <div class="row l" style="font-size:30px"><span>${esc(it.number)} · ${esc(it.title)}</span><span>${s.n} / ${s.of}</span></div>
    <div class="rule" style="margin-top:32px"></div>
    <div style="flex:1"></div>
    <p class="l" style="font-size:34px">${esc(s.label)}</p>
    <h2 class="d" style="font-size:92px;margin-top:20px">${esc(s.head)}</h2>
    ${s.body ? `<p class="soft" style="font-size:38px;line-height:1.42;margin-top:36px;max-width:900px">${esc(s.body)}</p>` : ""}
    <div style="height:56px"></div>
    <div class="row l" style="font-size:30px"><span>@ovsbm</span><span>${s.n < s.of ? "Swipe →" : "oscarshand.com ↘"}</span></div>`, "72px"),

  closing: (it) => frame("slide", BLACK, `
    <div class="row l" style="font-size:30px"><span>${esc(it.number)} · ${esc(it.title)}</span><span>Oscar Shand</span></div>
    <div style="flex:1"></div>
    <h2 class="d" style="font-size:120px">Read the full piece.</h2>
    <p style="font-size:42px;line-height:1.3;margin-top:32px;color:${GOLD}">oscarshand.com/${esc(it.path)}</p>
    <div style="height:56px"></div>
    <div class="row l" style="font-size:30px"><span>@ovsbm</span><span>Research, development and design</span></div>`, "72px"),

  story: (it, base = "") => frame("story", it.colour || GOLD, `
    <div class="row l" style="font-size:32px"><span>${meta(it)}</span><span>Oscar Shand</span></div>
    <div style="height:40px"></div>${img(it, base)}<div style="height:48px"></div>
    <p class="l" style="font-size:34px">New on oscarshand.com</p>
    <h1 class="d" style="font-size:${it.title.length > 22 ? 100 : 132}px;margin-top:16px">${esc(it.title)}</h1>
    <p class="soft" style="font-size:40px;line-height:1.3;margin-top:24px">${esc(it.line)}</p>`, "250px 72px 270px"),

  statement: (it) => frame("statement", BLACK, `
    <div class="row l" style="font-size:30px"><span>${esc(it.number)}</span><span>Oscar Shand</span></div>
    <div style="flex:1"></div>
    <h1 class="d b" style="font-size:${it.statement.length > 70 ? 84 : 108}px;line-height:1.02;letter-spacing:-0.03em">${esc(it.statement)}</h1>
    <div style="flex:1"></div>
    <div class="row l" style="font-size:30px"><span style="color:${GOLD}">${esc(it.title)}</span><span>oscarshand.com ↘</span></div>`, "72px"),

  linkedin: (it, base = "") => frame("linkedin", CREAM, `
    <div style="display:flex;gap:48px;flex:1;min-height:0">
      <div style="flex:1;display:flex;flex-direction:column;min-width:0">
        <p class="l" style="font-size:22px">${meta(it)}</p>
        <div style="flex:1"></div>
        <h1 class="d" style="font-size:${it.title.length > 26 ? 60 : 76}px">${esc(it.title)}</h1>
        <p class="soft" style="font-size:25px;line-height:1.35;margin-top:16px">${esc(it.line)}</p>
        <div style="flex:1"></div>
        <div class="row l" style="font-size:22px"><span>Oscar Shand</span><span>oscarshand.com ↘</span></div>
      </div>
      ${it.image ? `<div class="img" style="flex:0 0 46%;background-image:url('${base}${esc(it.image)}')"></div>` : ""}
    </div>`, "48px"),

  banner: () => frame("banner", GOLD, `
    <div style="flex:1"></div>
    <div class="row" style="align-items:flex-end;padding-left:400px">
      <h1 class="d" style="font-size:104px;white-space:nowrap">Oscar Shand</h1>
      <p class="l" style="font-size:26px;line-height:1.35;text-align:right;white-space:nowrap">Research, development and design<br>oscarshand.com</p>
    </div>`, "48px 64px"),
};
