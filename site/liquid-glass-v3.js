/* Oscar Shand — Liquid Glass engine (v3).
   A lens for each glass element, built to its exact size and corner radius:
   - refraction: a displacement map from the shape's signed distance field. The rim is a
     convex bezel (squircle profile); light bends inward there, so what's beneath the rim
     curves around the edge. The body stays flat and undistorted.
   - chroma: the red, green and blue channels refract by slightly different amounts at the
     rim, which gives the thin colour fringe real glass has.
   - variants: "regular" (blurred, luminosity-adjusted, for text-heavy glass) and "clear"
     (barely blurred, for controls over photos and video; pair with a dimming layer).
   Refraction runs where backdrop-filter accepts an SVG filter (Chromium). Everywhere else
   the same element falls back to blur + saturation, which the CSS provides by default.
   Classic script: assigns window.LiquidGlass. No network, no dependencies. */
(function () {
  "use strict";
  if (typeof window === "undefined") return;
  if (window.LiquidGlass && window.LiquidGlass.version) return;

  var doc = document;
  var ua = navigator.userAgent || "";
  var isChromium = /Chrome\/\d+|Chromium\/\d+|Edg\/\d+/.test(ua) && !/\bFirefox\//.test(ua);
  var mq = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
  var reducedTransparency = function () { return mq("(prefers-reduced-transparency: reduce)") || mq("(prefers-contrast: more)"); };

  var PRESETS = {
    regular: { blur: 7, refraction: 44, chroma: 0.1, bezel: 0.42, saturate: 1.7, brighten: 1.04 },
    clear:   { blur: 1.2, refraction: 52, chroma: 0.13, bezel: 0.46, saturate: 1.5, brighten: 1.0 }
  };

  var host = null, seq = 0;
  function svgHost() {
    if (host && host.isConnected) return host;
    host = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    host.setAttribute("aria-hidden", "true");
    host.setAttribute("focusable", "false");
    host.setAttribute("width", "0");
    host.setAttribute("height", "0");
    host.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
    host.appendChild(doc.createElementNS("http://www.w3.org/2000/svg", "defs"));
    (doc.body || doc.documentElement).appendChild(host);
    return host;
  }

  /* Signed distance to a rounded rectangle centred at 0, half-size (hw, hh), radius r. Negative inside. */
  function sdRoundRect(px, py, hw, hh, r) {
    var qx = Math.abs(px) - hw + r, qy = Math.abs(py) - hh + r;
    var ox = Math.max(qx, 0), oy = Math.max(qy, 0);
    return Math.sqrt(ox * ox + oy * oy) + Math.min(Math.max(qx, qy), 0) - r;
  }

  /* Displacement map. R = x shift, G = y shift, 128 = none. Built at a capped resolution and
     stretched to the element (the field is smooth, so this loses nothing visible). */
  function buildMap(w, h, r, bezelPx) {
    var maxSide = 320;
    var k = Math.min(1, maxSide / Math.max(w, h));
    var W = Math.max(8, Math.round(w * k)), H = Math.max(8, Math.round(h * k));
    var cv = doc.createElement("canvas"); cv.width = W; cv.height = H;
    var ctx = cv.getContext("2d"); var img = ctx.createImageData(W, H); var d = img.data;
    var hw = w / 2, hh = h / 2, rr = Math.min(r, hw, hh);
    var b = Math.max(2, Math.min(bezelPx, Math.min(hw, hh)));
    var e = 0.5; // finite-difference step, in element px
    for (var j = 0; j < H; j++) {
      for (var i = 0; i < W; i++) {
        var px = (i + 0.5) / W * w - hw, py = (j + 0.5) / H * h - hh;
        var sd = sdRoundRect(px, py, hw, hh, rr);
        var o = (j * W + i) * 4, vx = 0, vy = 0;
        if (sd < 0 && -sd < b) {
          // outward normal from the gradient of the distance field
          var nx = sdRoundRect(px + e, py, hw, hh, rr) - sdRoundRect(px - e, py, hw, hh, rr);
          var ny = sdRoundRect(px, py + e, hw, hh, rr) - sdRoundRect(px, py - e, hw, hh, rr);
          var nl = Math.sqrt(nx * nx + ny * ny) || 1; nx /= nl; ny /= nl;
          // t: 0 at the rim, 1 where the bezel meets the flat body. Squircle height h(t) = (1-(1-t)^4)^(1/4);
          // its slope drives how hard light bends. Normalised so the rim bends fully.
          var t = -sd / b;
          var u = 1 - t, g = 1 - u * u * u * u;
          var slope = g > 0 ? (u * u * u) / Math.pow(g, 0.75) : 4;
          var m = Math.min(1, slope / 4);
          m = m * (1 - t * t); // ease to zero at the body
          vx = -nx * m; vy = -ny * m; // sample inward: the rim shows the content curving round it
        }
        d[o] = Math.round(128 + vx * 127);
        d[o + 1] = Math.round(128 + vy * 127);
        d[o + 2] = 128; d[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
    return cv.toDataURL("image/png");
  }

  function filterMarkup(id, w, h, map, o) {
    var s = o.refraction, c = o.chroma;
    var disp = function (inp, scale, res) {
      return '<feDisplacementMap in="' + inp + '" in2="map" scale="' + scale.toFixed(2) + '" xChannelSelector="R" yChannelSelector="G" result="' + res + '"/>';
    };
    var chan = function (inp, row, res) {
      return '<feColorMatrix in="' + inp + '" type="matrix" values="' + row + '" result="' + res + '"/>';
    };
    var R = "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0";
    var G = "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0";
    var B = "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0";
    var body = '<feGaussianBlur in="SourceGraphic" stdDeviation="' + o.blur + '" edgeMode="duplicate" result="soft"/>' +
      '<feImage href="' + map + '" x="0" y="0" width="' + w + '" height="' + h + '" preserveAspectRatio="none" result="map"/>';
    if (c > 0.001) {
      body += disp("soft", s * (1 + c), "dr") + disp("soft", s, "dg") + disp("soft", s * (1 - c), "db") +
        chan("dr", R, "r") + chan("dg", G, "g") + chan("db", B, "b") +
        '<feComposite in="r" in2="g" operator="arithmetic" k2="1" k3="1" result="rg"/>' +
        '<feComposite in="rg" in2="b" operator="arithmetic" k2="1" k3="1" result="lens"/>';
    } else {
      body += disp("soft", s, "lens");
    }
    body += '<feColorMatrix in="lens" type="saturate" values="' + o.saturate + '" result="sat"/>' +
      '<feComponentTransfer in="sat"><feFuncR type="linear" slope="' + o.brighten + '"/><feFuncG type="linear" slope="' + o.brighten + '"/><feFuncB type="linear" slope="' + o.brighten + '"/></feComponentTransfer>';
    return '<filter id="' + id + '" x="0" y="0" width="' + w + '" height="' + h + '" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' + body + '</filter>';
  }

  function radiusOf(el, w, h) {
    var cs = getComputedStyle(el);
    var r = parseFloat(cs.borderTopLeftRadius) || 0;
    return Math.min(r, w / 2, h / 2);
  }

  /* Options, most specific first: the attach() call, data-lg-* attributes, then the design
     tokens (--lg-regular-blur, --lg-clear-refraction, --lg-bezel …), then the presets above. */
  function readOpts(el, given) {
    var ds = el.dataset || {};
    var variant = given.variant || ds.lgVariant || (ds.glass === "sheet" ? "regular" : ds.glass === "nav" || ds.glass === "float" ? "clear" : "regular");
    if (!PRESETS[variant]) variant = "regular";
    var p = PRESETS[variant], cs = getComputedStyle(el);
    var token = function (k) { var v = parseFloat(cs.getPropertyValue(k === "bezel" ? "--lg-bezel" : "--lg-" + variant + "-" + k)); return isFinite(v) ? v : null; };
    var num = function (k) {
      var v = given[k] != null ? given[k] : ds["lg" + k.charAt(0).toUpperCase() + k.slice(1)];
      v = parseFloat(v); if (isFinite(v)) return v;
      var t = token(k); return t != null ? t : p[k];
    };
    return { variant: variant, blur: num("blur"), refraction: num("refraction"), chroma: num("chroma"), bezel: num("bezel"), saturate: num("saturate"), brighten: num("brighten") };
  }

  var live = new Map();

  function render(el) {
    var st = live.get(el); if (!st) return;
    var w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
    if (w < 4 || h < 4) return;
    var r = radiusOf(el, w, h);
    var o = readOpts(el, st.given);
    var key = [w, h, Math.round(r), o.variant, o.blur, o.refraction, o.chroma, o.bezel, o.saturate, o.brighten].join(",");
    el.dataset.lgVariant = o.variant; st.variant = o.variant;
    if (!LG.refraction || reducedTransparency()) {
      el.dataset.lgMode = reducedTransparency() ? "solid" : "blur";
      el.style.removeProperty("--lg-filter");
      return;
    }
    if (key === st.key) { ensure(el); return; }
    st.key = key;
    // bezel as a share of the short side, so a 44px pill and a 400px sheet both curve believably
    var bezelPx = Math.max(6, Math.min(w, h) * o.bezel * 0.5 + Math.min(r, 24) * 0.25);
    var map = buildMap(w, h, r, bezelPx);
    var defs = svgHost().firstChild;
    var old = st.node; var id = "lg-" + (++seq);
    var tmp = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    tmp.innerHTML = filterMarkup(id, w, h, map, o);
    var node = tmp.firstChild; defs.appendChild(node);
    st.node = node; st.filter = "url(#" + id + ")";
    el.style.setProperty("--lg-filter", st.filter);
    el.dataset.lgMode = "refract";
    if (old && old.parentNode) old.parentNode.removeChild(old);
  }

  /* Host pages that re-render by rewriting attributes (a template engine, innerHTML diffing)
     strip what the engine set. ensure() puts it back without rebuilding the lens. */
  function ensure(el) {
    var st = live.get(el); if (!st) return;
    if (!el.hasAttribute("data-lg")) el.setAttribute("data-lg", "");
    if (st.variant && el.dataset.lgVariant !== st.variant) el.dataset.lgVariant = st.variant;
    if (st.filter && el.dataset.lgMode === "refract" && el.style.getPropertyValue("--lg-filter") !== st.filter) el.style.setProperty("--lg-filter", st.filter);
    if (st.filter && !el.dataset.lgMode) { el.dataset.lgMode = "refract"; el.style.setProperty("--lg-filter", st.filter); }
    if (st.tone && el.dataset.lgTone !== st.tone && !el.hasAttribute("data-lg-tone-fixed")) el.dataset.lgTone = st.tone;
    if (st.need != null && el.style.getPropertyValue("--lg-need") !== st.need && !el.hasAttribute("data-lg-tone-fixed")) el.style.setProperty("--lg-need", st.need);
  }
  var guard = typeof MutationObserver === "function" ? new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) ensure(list[i].target);
  }) : null;

  var ro = typeof ResizeObserver === "function" ? new ResizeObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) schedule(entries[i].target);
  }) : null;
  var pending = new Set(), rafId = 0;
  function schedule(el) {
    pending.add(el);
    if (rafId) return;
    rafId = requestAnimationFrame(function () { rafId = 0; pending.forEach(render); pending.clear(); });
  }

  /* ── Legibility ─────────────────────────────────────────────────────────────
     Glass reads what is underneath it and sets its own ink and dimming so text on it
     holds 4.5:1. Under a photo or video it samples the pixels (same-origin media only);
     under a painted ground it reads that ground's colour. Results:
       data-lg-tone="light"  black ink on lightened glass (flat light content)
       data-lg-tone="dark"   cream ink; --lg-need = the share of black the glass must
                             add so the brightest 4% of what's beneath falls to ≤0.078 (0.099 over a flat ground)
                             luminance: 7:1 for cream ink in theory, so with the sheen, blur and refracted highlights it stays above 4.5:1.            */
  var CREAM_L = 0.8434, BLACK_L = 0.0068; // relative luminance of --cream and --black
  var lin = function (v) { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  var lum = function (r, g, b) { return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); };
  var probe = null;
  function mediaStats(el, media) {
    var mr = media.getBoundingClientRect(), gr = el.getBoundingClientRect();
    var natW = media.videoWidth || media.naturalWidth, natH = media.videoHeight || media.naturalHeight;
    if (!natW || !natH || !mr.width || !mr.height) return null;
    var fit = (getComputedStyle(media).objectFit || "fill");
    var scx = mr.width / natW, scy = mr.height / natH;
    if (fit === "cover") scx = scy = Math.max(scx, scy); else if (fit === "contain") scx = scy = Math.min(scx, scy);
    var ox = (mr.width - natW * scx) / 2, oy = (mr.height - natH * scy) / 2;
    var sx = (gr.left - mr.left - ox) / scx, sy = (gr.top - mr.top - oy) / scy, sw = gr.width / scx, sh = gr.height / scy;
    if (!probe) { probe = doc.createElement("canvas"); probe.width = 32; probe.height = 12; }
    var ctx = probe.getContext("2d", { willReadFrequently: true });
    ctx.clearRect(0, 0, 32, 12);
    ctx.drawImage(media, Math.max(0, sx), Math.max(0, sy), Math.max(1, Math.min(sw, natW)), Math.max(1, Math.min(sh, natH)), 0, 0, 32, 12);
    var px = ctx.getImageData(0, 0, 32, 12).data, Ls = [];
    for (var i = 0; i < px.length; i += 4) if (px[i + 3] > 0) Ls.push(lum(px[i], px[i + 1], px[i + 2]));
    if (!Ls.length) return null;
    Ls.sort(function (x, y) { return x - y; });
    var q = function (f) { return Ls[Math.min(Ls.length - 1, Math.floor(f * Ls.length))]; };
    var mean = 0; for (var k = 0; k < Ls.length; k++) mean += Ls[k]; mean /= Ls.length;
    return { lo: q(0.05), hi: q(0.96), mean: mean, media: true };
  }
  function parseColor(c) {
    var m = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+%?))?/.exec(c || "");
    if (!m) return null;
    var a = m[4] == null ? 1 : (/%$/.test(m[4]) ? parseFloat(m[4]) / 100 : parseFloat(m[4]));
    return { r: +m[1], g: +m[2], b: +m[3], a: a };
  }
  function groundStats(node) {
    for (var n = node; n && n.nodeType === 1; n = n.parentElement) {
      var cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== "none" && /url\(/.test(cs.backgroundImage)) return null; // a CSS image: can't be read, use the dimming rule
      var c = parseColor(cs.backgroundColor);
      if (c && c.a > 0.5) { var L = lum(c.r, c.g, c.b); return { lo: L, hi: L, mean: L, media: false }; }
    }
    var b = parseColor(getComputedStyle(doc.body).backgroundColor);
    if (b && b.a > 0.5) { var Lb = lum(b.r, b.g, b.b); return { lo: Lb, hi: Lb, mean: Lb, media: false }; }
    return null;
  }
  function whatIsUnder(el) {
    var r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight || r.width === 0) return null;
    var y = Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2));
    var xs = [r.left + r.width * 0.5, r.left + r.width * 0.18, r.right - r.width * 0.18];
    for (var p = 0; p < xs.length; p++) {
      var x = Math.min(innerWidth - 1, Math.max(0, xs[p]));
      var stack = doc.elementsFromPoint ? doc.elementsFromPoint(x, y) : [];
      for (var i = 0; i < stack.length; i++) {
        var e = stack[i];
        if (e === el || el.contains(e) || e.closest("[data-lg]")) continue;
        if (e.tagName === "IMG" || e.tagName === "VIDEO") return { media: e };
        return { node: e };
      }
    }
    return null;
  }
  function apply(el, tone, need) {
    var s = live.get(el); if (s) { s.tone = tone; s.need = need.toFixed(3); }
    el.dataset.lgTone = tone; el.style.setProperty("--lg-need", need.toFixed(3));
    return tone;
  }
  function decide(el, st) {
    var o = readOpts(el, (live.get(el) || {}).given || {});
    if (!st) { // unknown (cross-origin media, a CSS background image): dim by half. Apple's 35% isn't enough over a bright photo.
      return apply(el, "dark", 0.5);
    }
    // flat light content takes black ink, as long as its darkest fifth still holds 4.5:1
    var blackOK = (st.lo + 0.05) / (BLACK_L + 0.05) >= 5.5;
    if (blackOK && st.mean > 0.32 && (!st.media || st.hi - st.lo < 0.35)) {
      return apply(el, "light", 0);
    }
    // aim for 6:1 so the specular sheen and refracted highlights still leave text above 4.5:1
    // icon-only controls (data-lg-ink="glyph") need WCAG's 3:1 for graphics; aim for 5:1 there
    var ratio = el.getAttribute("data-lg-ink") === "glyph" ? 5 : (st.media ? 7 : 6);
    var target = (CREAM_L + 0.05) / ratio - 0.05; // 0.078 over media, 0.099 over a flat ground, 0.129 for glyphs
    var need = st.hi <= target ? 0 : 1 - Math.pow(target / st.hi, 1 / 2.2);
    var floor = o.variant === "clear" ? 0.06 : 0;
    need = Math.min(0.74, Math.max(floor, need));
    return apply(el, "dark", need);
  }
  function sampleTone(el, media) {
    var st = null;
    try {
      if (media) st = mediaStats(el, media);
      else {
        var u = whatIsUnder(el);
        if (u && u.media) st = mediaStats(el, u.media);
        else if (u && u.node) st = groundStats(u.node);
        else return null;
      }
    } catch (err) { st = null; } // tainted canvas (cross-origin media): fall back to the dimming rule
    return decide(el, st);
  }
  var followers = new Set(), followRaf = 0, lastFollow = 0;
  function followAll() {
    followRaf = 0; var now = Date.now(); if (now - lastFollow < 90) { followRaf = requestAnimationFrame(followAll); return; }
    lastFollow = now; followers.forEach(function (el) {
      if (!el.isConnected) { LG.detach(el); return; } // removed by its page (a closed menu sheet): let it go
      var s = live.get(el); sampleTone(el, s && s.given.media);
    });
  }
  function onMove() { if (!followRaf) followRaf = requestAnimationFrame(followAll); }
  addEventListener("scroll", onMove, { passive: true, capture: true });
  addEventListener("resize", onMove);
  setInterval(function () { var v = false; followers.forEach(function (el) { var s = live.get(el); if (s && s.video) v = true; }); if (v) onMove(); }, 600);

  var LG = {
    version: "3.0.0",
    refraction: isChromium && typeof CSS !== "undefined" && CSS.supports && CSS.supports("backdrop-filter", "url(#a)"),
    presets: PRESETS,
    /* attach(el, {variant, refraction, chroma, blur, bezel, media, follow}) → detach().
       follow (default true) re-reads what is beneath on scroll, resize and video frames;
       add data-lg-tone-fixed with your own data-lg-tone to opt out. */
    attach: function (el, given) {
      if (!el || live.has(el)) return function () { LG.detach(el); };
      given = given || {};
      live.set(el, { given: given, key: "", node: null });
      el.setAttribute("data-lg", "");
      if (ro) ro.observe(el);
      if (guard) guard.observe(el, { attributes: true, attributeFilter: ["style", "data-lg", "data-lg-mode", "data-lg-tone", "data-lg-variant"] });
      schedule(el);
      var st = live.get(el);
      if (given.follow !== false && !el.hasAttribute("data-lg-tone-fixed")) {
        followers.add(el);
        st.video = !!(given.media && given.media.tagName === "VIDEO") || !!doc.querySelector("video");
        var go = function () { sampleTone(el, given.media); };
        if (given.media && !(given.media.complete || given.media.readyState >= 2)) given.media.addEventListener(given.media.tagName === "VIDEO" ? "loadeddata" : "load", go, { once: true });
        requestAnimationFrame(go);
      }
      return function () { LG.detach(el); };
    },
    detach: function (el) {
      var st = live.get(el); if (!st) return;
      if (ro) ro.unobserve(el);
      followers.delete(el);
      if (st.node && st.node.parentNode) st.node.parentNode.removeChild(st.node);
      el.style.removeProperty("--lg-filter");
      live.delete(el);
    },
    refresh: function (el) { if (el) { var s = live.get(el); if (s) { s.key = ""; schedule(el); } } else live.forEach(function (s, k) { s.key = ""; schedule(k); }); },
    sampleTone: sampleTone,
    sample: function () { followAll(); },
    /* Mount on everything that asks for glass: [data-lg-auto], and the site's nav island, floating pill and menu sheet. */
    auto: function (root) {
      root = root || doc;
      var els = root.querySelectorAll('[data-lg-auto],[data-glass="nav"],[data-glass="float"],[data-glass="sheet"]');
      for (var i = 0; i < els.length; i++) LG.attach(els[i]);
      return els.length;
    }
  };
  window.LiquidGlass = LG;
  if (window.matchMedia) {
    ["(prefers-reduced-transparency: reduce)", "(prefers-contrast: more)"].forEach(function (q) {
      var m = window.matchMedia(q); var f = function () { LG.refresh(); };
      m.addEventListener ? m.addEventListener("change", f) : m.addListener && m.addListener(f);
    });
  }
})();

/* ── oscarshand.com glue ─────────────────────────────────────────────────────
   The page renders its nav island, floating pill and menu sheet with React after
   load and remounts the sheet each time the menu opens, so attach to whatever
   [data-glass="nav|float|sheet"] exists now and to any that appear later. */
(function () {
  var LG = window.LiquidGlass; if (!LG) return;
  var run = function () { LG.auto(document); };
  var mo = new MutationObserver(function (list) {
    for (var i = 0; i < list.length; i++) if (list[i].addedNodes.length) { run(); return; }
  });
  var start = function () {
    run();
    mo.observe(document.body, { childList: true, subtree: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { LG.refresh(); });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
