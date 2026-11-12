/* @ds-bundle: {"format":4,"namespace":"OscarShandDesignSystem_798a1a","components":[{"name":"ArrowMarker","sourcePath":"components/core/ArrowMarker.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"Highlight","sourcePath":"components/core/Highlight.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"Parallax","sourcePath":"components/core/Parallax.jsx"},{"name":"ScrollCue","sourcePath":"components/core/ScrollCue.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"SocialRow","sourcePath":"components/core/SocialRow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FloatingCTA","sourcePath":"components/navigation/FloatingCTA.jsx"},{"name":"FooterCTA","sourcePath":"components/navigation/FooterCTA.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"AboutIntro","sourcePath":"components/work/AboutIntro.jsx"},{"name":"CVEntry","sourcePath":"components/work/CVEntry.jsx"},{"name":"CaseTitle","sourcePath":"components/work/CaseTitle.jsx"},{"name":"MetaRow","sourcePath":"components/work/MetaRow.jsx"},{"name":"ProjectCard","sourcePath":"components/work/ProjectCard.jsx"},{"name":"StatBlock","sourcePath":"components/work/StatBlock.jsx"}],"sourceHashes":{"components/core/ArrowMarker.jsx":"04e0c61e4bb2","components/core/Button.jsx":"b4be93f963b5","components/core/Divider.jsx":"ae108522f160","components/core/GlassPanel.jsx":"8ef27801e4b2","components/core/Highlight.jsx":"8116db71e1ff","components/core/Marquee.jsx":"6895c30a66e4","components/core/Parallax.jsx":"21087af3e42d","components/core/ScrollCue.jsx":"2edb7c30efcb","components/core/SectionLabel.jsx":"91ef040c225b","components/core/SocialRow.jsx":"40ef9ab237ff","components/core/Tag.jsx":"c597bc3ab66e","components/forms/Checkbox.jsx":"2d7877cea37e","components/forms/Input.jsx":"1eb8accdb52c","components/forms/Select.jsx":"5afab90aa60d","components/forms/Textarea.jsx":"d67941b1917f","components/navigation/FloatingCTA.jsx":"cdc9a0b3af56","components/navigation/FooterCTA.jsx":"e387a1a5323b","components/navigation/NavBar.jsx":"aeeac6fcfd06","components/work/AboutIntro.jsx":"3ffa1a98095e","components/work/CVEntry.jsx":"5fe0613a4a56","components/work/CaseTitle.jsx":"b2a85a870bc8","components/work/MetaRow.jsx":"b332bb79b69f","components/work/ProjectCard.jsx":"25cee5e5e71b","components/work/StatBlock.jsx":"ce956ac058c4","documents/doc-page.js":"f52ae9c02fca","ui_kits/oscarshand-site/AboutPage.jsx":"58a9facc60c2","ui_kits/oscarshand-site/App.jsx":"8f7527c48e36","ui_kits/oscarshand-site/ContactPage.jsx":"078a21cb7271","ui_kits/oscarshand-site/Home.jsx":"84634f5eec7f","ui_kits/oscarshand-site/ProjectPage.jsx":"8dc71888b2ad","ui_kits/oscarshand-site/Shell.jsx":"c0390b59daf2","ui_kits/oscarshand-site/WorkIndex.jsx":"7f329e1d2d6e","ui_kits/oscarshand-site/data.js":"70bdf8e20ca7"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldLabel","sourcePath":"components/forms/Input.jsx"},{"name":"fieldStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.OscarShandDesignSystem_798a1a = window.OscarShandDesignSystem_798a1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ArrowMarker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The ↘ that opens a section — the real Remix Icon arrow-right-down-line
   glyph, the same path shipped in assets/icons/arrow-right-down-line.svg.
   The rotation map below assumes ↘ as the 0deg base.
   Decorative: always aria-hidden, never the only cue. */
const GLYPH = "M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z";
function ArrowMarker({
  size = 28,
  direction = "down-right",
  style,
  ...rest
}) {
  const rot = {
    "down-right": 0,
    "up-right": -90,
    "down-left": 90,
    right: -45
  }[direction] ?? 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color: "var(--on-ground)",
      transform: "rotate(" + rot + "deg)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: GLYPH
  })));
}
Object.assign(__ds_scope, { ArrowMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowMarker.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: "0 16px",
    height: 36,
    fontSize: "var(--fs-xs)"
  },
  md: {
    padding: "0 22px",
    height: 44,
    fontSize: "var(--fs-sm)"
  },
  lg: {
    padding: "0 30px",
    height: 56,
    fontSize: "var(--fs-md)"
  }
};

/* Pills, always. Every skin is a legal pairing, so pick the skin by the
   ground you are standing on:
     solid  — black pill, cream ink.  On gold and cream.
     invert — cream pill, black ink.  On black.
     outline / link — the current ground's ink, no fill. Anywhere.
   There is no gold skin: gold is a ground colour and is never a fill. On black
   the primary CTA is `invert`, which is what the old site used. */
function Button({
  children,
  variant = "solid",
  size = "md",
  arrow = false,
  disabled = false,
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const live = hover && !disabled;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: s.height,
    padding: s.padding,
    minWidth: 0,
    borderRadius: "var(--r-pill)",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--fw-medium)",
    fontSize: s.fontSize,
    letterSpacing: "var(--ls-body)",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "none",
    textDecoration: "none",
    whiteSpace: "nowrap",
    opacity: disabled ? .4 : 1,
    transition: "transform var(--dur-2) var(--ease-out),background var(--dur-2) var(--ease-out),box-shadow var(--dur-2) var(--ease-out)",
    transform: live ? "var(--hover-shift)" : "none"
  };
  const skins = {
    solid: {
      background: live ? "color-mix(in srgb,var(--black) 86%,var(--cream))" : "var(--black)",
      color: "var(--cream)"
    },
    invert: {
      background: live ? "color-mix(in srgb,var(--cream) 86%,var(--black))" : "var(--cream)",
      color: "var(--black)"
    },
    outline: {
      background: "transparent",
      color: "var(--on-ground)",
      boxShadow: live ? "inset 0 0 0 1.5px var(--on-ground)" : "inset 0 0 0 1px var(--hairline-strong)"
    },
    link: {
      background: "transparent",
      color: "var(--on-ground)",
      height: "auto",
      padding: 0,
      borderRadius: 0,
      textDecoration: hover ? "underline" : "none",
      textDecorationThickness: "1.5px",
      textUnderlineOffset: "4px",
      transform: "none"
    }
  };
  const El = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(El, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      transition: "transform var(--dur-2) var(--ease-out)",
      transform: hover ? "translate3d(3px,3px,0)" : "none"
    }
  }, "\u2198"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SR = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap"
};

/* Two jobs, one mark.
   inline (default) — the vertical ink rule used inside a title, as in
   "Nichols | Polson & Co". Sized in em so it tracks the type it sits in.
   The drawn bar is aria-hidden, so the component also emits a screen-reader
   separator: without it the two halves of a name run together into one word
   in the accessible name ("NicholsPolson & Co").
   rule — a horizontal structural division in solid ink, not a faint
   hairline: the brutalist rule the layout is actually built on. */
function Divider({
  orientation = "inline",
  weight = 2,
  length = "0.82em",
  srText = " | ",
  style,
  ...rest
}) {
  if (orientation === "rule") return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: weight,
      background: "var(--rule)",
      margin: 0,
      width: "100%",
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("span", rest, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: weight,
      height: length,
      background: "currentColor",
      verticalAlign: "baseline",
      margin: "0 0.26em",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: SR
  }, srText));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Glass. Dark smoked on light grounds, light on black, cream ink on both.
   A soft top sheen and a thin cream edge — no refraction, no iridescence.
   Legal on the sticky nav, the menu / overlay, form fields and the floating
   CTA only. Not cards, not sections, not decoration. */
const STRENGTH = {
  thin: "var(--glass-fill-thin)",
  regular: "var(--glass-fill)",
  heavy: "var(--glass-fill-strong)"
};
function GlassPanel({
  children,
  radius = "var(--r-md)",
  strength = "regular",
  padding = "var(--sp-6)",
  cast = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      borderRadius: radius,
      padding,
      backgroundColor: STRENGTH[strength] || STRENGTH.regular,
      backgroundImage: "var(--glass-sheen)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      boxShadow: cast ? "inset 0 0 0 1px var(--glass-edge),var(--glass-cast)" : "inset 0 0 0 1px var(--glass-edge)",
      color: "var(--glass-ink)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/core/Highlight.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Emphasis inside a run of body copy. Colour is not an emphasis channel
   in body copy — gold sets type on black only, and project colours are
   titles and pills — so emphasis is weight, underline or a solid chip. */
function Highlight({
  children,
  tone = "weight",
  style,
  ...rest
}) {
  const tones = {
    weight: {
      fontWeight: "var(--fw-semibold)"
    },
    underline: {
      textDecoration: "underline",
      textDecorationThickness: "1.5px",
      textUnderlineOffset: "4px"
    },
    chip: {
      background: "var(--black)",
      color: "var(--cream)",
      padding: "0.08em 0.36em",
      borderRadius: "var(--r-xs)",
      fontWeight: "var(--fw-medium)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      color: "inherit",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/* The scrolling word band. Neue Haas Bold, set enormous and tight, clipped
   by the viewport so it reads as a cut-off strip rather than a headline.
   By default it runs on its own clock. With `scroll` it is driven by the
   page's scroll position instead: the strip slides left as the reader
   scrolls down and back as they scroll up, so it only moves when they do. */
function Marquee({
  text = "Work",
  repeat = 8,
  speed,
  scroll = false,
  scrollRate = 0.6,
  size = "var(--fs-marquee)",
  style,
  ...rest
}) {
  const id = "mq" + String(text).replace(/\W/g, "");
  const dur = speed ? speed + "s" : "var(--marquee-dur)";
  const track = useRef(null);
  useEffect(() => {
    if (!scroll || !track.current) return;
    const el = track.current;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const half = el.scrollWidth / 2 || 1;
      const x = -(window.scrollY * scrollRate % half);
      el.style.transform = "translate3d(" + x + "px,0,0)";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [scroll, scrollRate, text, repeat]);
  const items = Array.from({
    length: repeat
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      paddingRight: "0.24em"
    }
  }, text));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: "hidden",
      width: "100%",
      ...style
    }
  }, rest), scroll ? null : /*#__PURE__*/React.createElement("style", null, "@keyframes " + id + "{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}"), /*#__PURE__*/React.createElement("div", {
    ref: track,
    style: {
      display: "flex",
      width: "max-content",
      animation: scroll ? "none" : id + " " + dur + " linear infinite",
      willChange: "transform",
      font: "var(--type-marquee)",
      fontSize: size,
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      whiteSpace: "nowrap"
    }
  }, items, items));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/Parallax.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
const parallaxReduced = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Scroll-driven drift and zoom for media. The child is clipped by the
   wrapper and moved with the page: below the viewport centre it lags,
   above it leads, and it is largest exactly as it passes the middle.
   `speed` is the drift at the viewport edges as a fraction of the box
   height (0.12 = 12%); the child is pre-scaled by 1 + 2·speed so its
   edges never show. `zoom` is the extra scale gained at centre. speed 0
   with a small zoom is the "images scale as you scroll" case for
   galleries and card thumbnails. Runs on rAF only while in view; does
   nothing under prefers-reduced-motion. */
function Parallax({
  children,
  speed = 0.12,
  zoom = 0.08,
  radius = 0,
  className,
  style,
  ...rest
}) {
  const outer = useRef(null),
    inner = useRef(null);
  useEffect(() => {
    const o = outer.current,
      el = inner.current;
    if (!o || !el || parallaxReduced()) return;
    let raf = 0,
      on = true;
    const base = 1 + 2 * speed;
    const paint = () => {
      raf = 0;
      const r = o.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2)));
      const y = p * speed * r.height;
      const s = base + zoom * (1 - Math.abs(p));
      el.style.transform = "translate3d(0," + y.toFixed(1) + "px,0) scale(" + s.toFixed(4) + ")";
    };
    const tick = () => {
      if (on && !raf) raf = requestAnimationFrame(paint);
    };
    const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
      on = es[0].isIntersecting;
      tick();
    }, {
      rootMargin: "25% 0px"
    }) : null;
    if (io) io.observe(o);
    window.addEventListener("scroll", tick, {
      passive: true
    });
    window.addEventListener("resize", tick);
    paint();
    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, zoom]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: outer,
    className: className,
    style: {
      overflow: "hidden",
      borderRadius: radius,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: inner,
    style: {
      height: "100%",
      willChange: "transform",
      transformOrigin: "50% 50%"
    }
  }, children));
}
Object.assign(__ds_scope, { Parallax });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Parallax.jsx", error: String((e && e.message) || e) }); }

// components/core/ScrollCue.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The ↘ that opens the page under the hero, with its label. On the old site
   the label reads "Scroll down". Keep the text available to screen readers
   even when it is visually hidden — the arrow alone says nothing. */
function ScrollCue({
  label = "Scroll down",
  showLabel = false,
  size = 30,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ArrowMarker, {
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    style: showLabel ? {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)"
    } : {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small Inter label above a section, parenthesised. The brackets and the text
   sit in one inline child so they wrap as a single run — as three flex items
   they detach and the closing bracket strands on its own line. */
function SectionLabel({
  children,
  parenthetical = true,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "block",
      textAlign: align === "right" ? "right" : align === "center" ? "center" : "left",
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, parenthetical ? "(" : null, children, parenthetical ? ")" : null));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Black circular pills carrying the social marks, as on the old site's
   statement block. Cream glyph on black is a legal pairing, so the row
   works on gold and on cream without changing. */
const ICONS = {
  instagram: "M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z",
  twitter: "M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z",
  dribbble: "M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
};
const DEFAULTS = [{
  icon: "instagram",
  label: "Instagram",
  href: "#"
}, {
  icon: "twitter",
  label: "Twitter",
  href: "#"
}, {
  icon: "dribbble",
  label: "Dribbble",
  href: "#"
}];
function SocialRow({
  items = DEFAULTS,
  size = 38,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: it.href,
    "aria-label": it.label,
    title: it.label,
    style: {
      display: "grid",
      placeItems: "center",
      width: size,
      height: size,
      borderRadius: "var(--r-pill)",
      background: "var(--black)",
      color: "var(--cream)",
      textDecoration: "none",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: Math.round(size * 0.5),
    height: Math.round(size * 0.5),
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[it.icon]
  })))));
}
Object.assign(__ds_scope, { SocialRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The pill that carries discipline and year. `solid` is the ground's own ink
   with the ground as text, so it survives every band (black on gold and
   cream, cream on black). `project` fills with the current project colour
   and black text — the one place a project colour is a fill. `outline` is a
   hairline. Legacy: `ground` = the ground colour with black ink. */
function Tag({
  children,
  tone = "solid",
  size = "md",
  style,
  ...rest
}) {
  const h = size === "sm" ? 24 : 30;
  const tones = {
    solid: {
      background: "var(--on-ground)",
      color: "var(--ground)"
    },
    project: {
      background: "var(--project)",
      color: "var(--project-on-ink,var(--black))"
    },
    ground: {
      background: "var(--ground)",
      color: "var(--black)"
    },
    outline: {
      background: "transparent",
      color: "var(--on-ground)",
      boxShadow: "inset 0 0 0 1px var(--hairline-strong)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: h,
      padding: size === "sm" ? "0 11px" : "0 15px",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)",
      fontSize: size === "sm" ? "var(--fs-3xs)" : "var(--fs-xs)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--ls-body)",
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Glass box when off, cream with a black ✓ when on — cream on black and
   black on cream are both legal, so the pair reads on every ground. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(!!defaultChecked);
  const on = checked !== undefined ? checked : internal;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-4)",
      minHeight: "var(--hit-min)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      setInternal(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "grid",
      placeItems: "center",
      width: 22,
      height: 22,
      borderRadius: "var(--r-xs)",
      backgroundColor: on ? "var(--cream)" : "var(--glass-fill)",
      backgroundImage: on ? "none" : "var(--glass-sheen)",
      backdropFilter: on ? "none" : "var(--glass-blur)",
      WebkitBackdropFilter: on ? "none" : "var(--glass-blur)",
      boxShadow: on ? "none" : "inset 0 0 0 1px var(--glass-edge)",
      color: "var(--black)",
      fontSize: 13,
      fontWeight: "var(--fw-bold)",
      transition: "background-color var(--dur-2) var(--ease-out)"
    }
  }, on ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* Fields are glass: dark smoked on gold and cream, light on black, cream ink
   on both. There is no red in this palette, so an error is carried by a
   doubled ink ring and a bold message rather than by colour. */
const fieldStyle = (focus, error) => ({
  width: "100%",
  minHeight: 48,
  padding: "0 16px",
  borderRadius: "var(--r-sm)",
  border: "none",
  backgroundColor: "var(--glass-fill)",
  backgroundImage: "var(--glass-sheen)",
  backdropFilter: "var(--glass-blur)",
  WebkitBackdropFilter: "var(--glass-blur)",
  color: "var(--glass-ink)",
  font: "var(--type-body)",
  outline: "none",
  transition: "box-shadow var(--dur-2) var(--ease-out)",
  boxShadow: error ? "inset 0 0 0 2.5px var(--glass-ink)" : focus ? "inset 0 0 0 1.5px var(--glass-ink)" : "inset 0 0 0 1px var(--glass-edge)"
});
const fieldLabel = {
  font: "var(--type-label)",
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  color: "var(--on-ground-soft)"
};
function Input({
  label,
  hint,
  error,
  required = false,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: fieldLabel
  }, label, required ? " *" : "") : null, /*#__PURE__*/React.createElement("input", _extends({
    className: "glass-field",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    required: required,
    style: {
      ...fieldStyle(focus, error),
      ...style
    }
  }, rest)), hint || error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-xs)",
      fontWeight: error ? "var(--fw-semibold)" : "var(--fw-regular)",
      color: "var(--on-ground)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { fieldStyle, fieldLabel, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  hint,
  error,
  required = false,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.fieldLabel
  }, label, required ? " *" : "") : null, /*#__PURE__*/React.createElement("select", _extends({
    className: "glass-field",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    required: required,
    style: {
      ...__ds_scope.fieldStyle(focus, error),
      appearance: "none",
      ...style
    }
  }, rest)), hint || error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-xs)",
      fontWeight: error ? "var(--fw-semibold)" : "var(--fw-regular)",
      color: "var(--on-ground)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Textarea({
  label,
  hint,
  error,
  required = false,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      ...wrapperStyle
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.fieldLabel
  }, label, required ? " *" : "") : null, /*#__PURE__*/React.createElement("textarea", _extends({
    className: "glass-field",
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    required: required,
    style: {
      ...__ds_scope.fieldStyle(focus, error),
      minHeight: 128,
      padding: "14px 16px",
      resize: "vertical",
      ...style
    }
  }, rest)), hint || error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--fs-xs)",
      fontWeight: error ? "var(--fw-semibold)" : "var(--fw-regular)",
      color: "var(--on-ground)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FloatingCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
/* The one floating control: a glass "Get in touch" pill pinned bottom-right
   that appears once the reader has scrolled past the hero. Smoked on light
   grounds, light on black, cream ink on both. `visible` forces the state
   (for specimens); otherwise it shows after `after` px of scroll. */
function FloatingCTA({
  label = "Get in touch",
  href,
  onClick,
  after = 360,
  visible,
  style,
  ...rest
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (visible !== undefined) return;
    let raf = 0;
    const f = () => {
      raf = 0;
      setScrolled(window.scrollY > after);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(f);
    };
    f();
    window.addEventListener("scroll", on, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [after, visible]);
  const show = visible !== undefined ? visible : scrolled;
  const El = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(El, _extends({
    href: href,
    type: href ? undefined : "button",
    onClick: onClick,
    tabIndex: show ? 0 : -1,
    "aria-hidden": !show,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "fixed",
      right: "var(--page-gutter)",
      bottom: "var(--sp-6)",
      zIndex: 45,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      height: 52,
      padding: "0 24px",
      borderRadius: "var(--r-pill)",
      border: "none",
      cursor: "pointer",
      backgroundColor: "var(--glass-fill)",
      backgroundImage: "var(--glass-sheen)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      color: "var(--glass-ink)",
      boxShadow: "inset 0 0 0 1px var(--glass-edge),var(--glass-cast)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-sm)",
      letterSpacing: "var(--ls-body)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      opacity: show ? 1 : 0,
      pointerEvents: show ? "auto" : "none",
      transform: show ? hover ? "var(--hover-shift)" : "none" : "translate3d(0,18px,0)",
      transition: "opacity var(--dur-3) var(--ease-out),transform var(--dur-3) var(--ease-out)",
      ...style
    }
  }, rest), label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      transition: "transform var(--dur-2) var(--ease-out)",
      transform: hover ? "translate3d(3px,3px,0)" : "none"
    }
  }, "\u2198"));
}
Object.assign(__ds_scope, { FloatingCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FloatingCTA.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FooterCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Closes the page on black with cream ink, centred, as on the old site:
   (Connect) → "Let's talk" → a cream pill → the contact lines → a solid rule
   → copyright and links. The CTA is cream, not gold: gold is never a fill.
   `gap` (default true) puts a section gap above the footer so the last
   section of the page breathes before the black; pass gap={false} when the
   footer follows a band that already ends flush. */
function FooterCTA({
  label = "Connect",
  heading = "Let's talk",
  cta = "Get in Touch",
  lines = [],
  email = "oscar.shand@gmail.com",
  links = [],
  copyright = "© Oscar Shand",
  gap = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: "ground-dark",
    style: {
      marginTop: gap ? "var(--section-gap)" : 0,
      paddingBlock: "var(--section-gap) var(--sp-8)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--sp-7)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    align: "center"
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-hero)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, heading), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "invert",
    size: "lg",
    href: "mailto:" + email
  }, cta), lines.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      maxWidth: "52ch"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      font: "var(--type-body)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, l))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      marginTop: "var(--sp-7)",
      paddingTop: "var(--sp-6)",
      borderTop: "2px solid var(--rule)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-6)",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-6)"
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      color: "var(--on-ground-soft)"
    }
  }, l.label))))));
}
Object.assign(__ds_scope, { FooterCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FooterCTA.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect
} = React;
/* Wordmark left, navigation right — the old site's whole navigation. Pass
   items to render inline links; below `collapseAt` they fold into a Menu
   pill that opens a full-screen glass overlay. The bar itself is glass when
   floating: dark smoked on gold and cream, light on black, cream ink on both.
   The active item and the Menu pill are cream with black ink so they read
   against either glass. */
function NavBar({
  brand = "Oscar Shand",
  items = [],
  active,
  menuLabel = "Menu",
  closeLabel = "Close",
  onMenu,
  floating = true,
  frost = true,
  collapseAt = 760,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(null);
  const [menuHover, setMenuHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(max-width:" + collapseAt + "px)");
    const f = () => setNarrow(mq.matches);
    f();
    mq.addEventListener ? mq.addEventListener("change", f) : mq.addListener(f);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", f) : mq.removeListener(f);
    };
  }, [collapseAt]);
  useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = prev;
    };
  }, [open]);
  const inline = items.length > 0 && !narrow;
  const ink = frost ? "var(--glass-ink)" : "var(--on-ground)";
  const glass = frost ? {
    backgroundColor: "var(--glass-fill)",
    backgroundImage: "var(--glass-sheen)",
    backdropFilter: "var(--glass-blur)",
    WebkitBackdropFilter: "var(--glass-blur)",
    boxShadow: "inset 0 -1px 0 var(--glass-edge)"
  } : {
    background: "transparent"
  };
  const cream = {
    background: "var(--cream)",
    color: "var(--black)"
  };
  const menuClick = e => {
    if (onMenu) onMenu(e);
    if (items.length) setOpen(true);
  };
  const brandStyle = {
    font: "var(--type-title)",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--fw-display-bold)",
    letterSpacing: "var(--ls-heading)",
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: floating ? "sticky" : "relative",
      top: 0,
      zIndex: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--sp-6)",
      minHeight: 72,
      padding: "var(--sp-4) var(--page-gutter)",
      color: ink,
      ...glass,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      ...brandStyle,
      color: ink
    }
  }, brand), inline ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-2)"
    }
  }, items.map((it, i) => {
    const isActive = active === it.label;
    const on = isActive || hover === i;
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: it.href,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      style: {
        display: "inline-flex",
        alignItems: "center",
        height: 40,
        padding: "0 16px",
        borderRadius: "var(--r-pill)",
        font: "var(--type-body-sm)",
        fontWeight: "var(--fw-medium)",
        ...(isActive ? cream : {
          background: "transparent",
          color: ink
        }),
        textDecoration: on && !isActive ? "underline" : "none",
        textDecorationThickness: "1.5px",
        textUnderlineOffset: "4px",
        transition: "background var(--dur-2) var(--ease-out)"
      }
    }, it.label);
  })) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: menuClick,
    "aria-expanded": items.length ? open : undefined,
    onMouseEnter: () => setMenuHover(true),
    onMouseLeave: () => setMenuHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 44,
      padding: "0 26px",
      borderRadius: "var(--r-pill)",
      border: "none",
      cursor: "pointer",
      ...cream,
      background: menuHover ? "color-mix(in srgb,var(--cream) 86%,var(--black))" : "var(--cream)",
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-medium)",
      transition: "background var(--dur-2) var(--ease-out)"
    }
  }, menuLabel)), open && items.length ? /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": menuLabel,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      flexDirection: "column",
      padding: "var(--sp-4) var(--page-gutter) var(--sp-9)",
      backgroundColor: "var(--glass-fill-strong)",
      backgroundImage: "var(--glass-sheen)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      color: "var(--glass-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    onClick: () => setOpen(false),
    style: {
      ...brandStyle,
      color: "var(--glass-ink)"
    }
  }, brand), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(false),
    autoFocus: true,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 44,
      padding: "0 26px",
      borderRadius: "var(--r-pill)",
      border: "none",
      cursor: "pointer",
      ...cream,
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-medium)"
    }
  }, closeLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      marginTop: "auto"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: it.href,
    onClick: () => setOpen(false),
    style: {
      font: "var(--type-hero)",
      fontSize: "clamp(40px,10vw,96px)",
      letterSpacing: "var(--ls-mega)",
      color: active === it.label ? "var(--gold)" : "var(--glass-ink)",
      textDecoration: "none"
    }
  }, it.label)))) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/work/AboutIntro.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The stacked paragraph block from the About page: a large lead statement in
   display type, then body paragraphs in the right-hand columns. */
function AboutIntro({
  lead,
  paragraphs = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "grid",
    style: {
      alignItems: "start",
      rowGap: "var(--sp-8)",
      ...style
    }
  }, rest), lead ? /*#__PURE__*/React.createElement("p", {
    className: "span-7",
    style: {
      font: "var(--type-statement)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, lead) : null, /*#__PURE__*/React.createElement("div", {
    className: "span-5 start-8",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)"
    }
  }, paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      font: "var(--type-body)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, p))));
}
Object.assign(__ds_scope, { AboutIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/AboutIntro.jsx", error: String((e && e.message) || e) }); }

// components/work/CVEntry.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CVEntry({
  role,
  org,
  dates,
  location,
  type,
  points = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(140px,190px) 1fr",
      gap: "var(--sp-6)",
      padding: "var(--sp-6) 0",
      borderTop: "1px solid var(--hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-sm)",
      color: "var(--on-ground)"
    }
  }, dates), location ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)"
    }
  }, location) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-subhead)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--on-ground)"
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      color: "var(--on-ground-soft)"
    }
  }, org, type ? " · " + type : "")), points.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "14px 1fr",
      gap: "var(--sp-3)",
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      marginTop: 9,
      background: "var(--on-ground)"
    }
  }), /*#__PURE__*/React.createElement("span", null, p)))) : null));
}
Object.assign(__ds_scope, { CVEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/CVEntry.jsx", error: String((e && e.message) || e) }); }

// components/work/CaseTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The case study header: an enormous Neue Haas Medium title in the left
   seven columns, a short description and its pills in the right four.
   With `project` set the title takes the project colour as type; the ground
   beneath stays black or cream. */
/* "Nichols | Polson & Co" sets a vertical ink rule between the halves of the
   name rather than a literal pipe, which sits at the wrong weight and height. */
function splitTitle(title) {
  const parts = String(title || "").split(" | ");
  if (parts.length < 2) return title;
  return parts.map((p, i) => i === 0 ? p : [/*#__PURE__*/React.createElement(__ds_scope.Divider, {
    key: "d" + i
  }), p]);
}
function CaseTitle({
  title,
  description,
  tags = [],
  project,
  as = "h1",
  style,
  ...rest
}) {
  const H = as;
  return /*#__PURE__*/React.createElement("header", _extends({
    "data-project": project,
    className: "grid",
    style: {
      alignItems: "start",
      rowGap: "var(--sp-7)",
      paddingBlock: "var(--band-gap)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(H, {
    className: "span-7",
    style: {
      font: "var(--type-case)",
      letterSpacing: "var(--ls-mega)",
      color: project ? "var(--project-ink)" : "var(--on-ground)",
      margin: 0
    }
  }, splitTitle(title)), /*#__PURE__*/React.createElement("div", {
    className: "span-4 start-9",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, description) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-3)"
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    tone: project ? "project" : "solid"
  }, t))) : null));
}
Object.assign(__ds_scope, { CaseTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/CaseTitle.jsx", error: String((e && e.message) || e) }); }

// components/work/MetaRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetaRow({
  items = [],
  columns,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: columns || "repeat(auto-fit,minmax(160px,1fr))",
      gap: "var(--sp-6)",
      margin: 0,
      paddingTop: "var(--sp-6)",
      borderTop: "1px solid var(--hairline)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)"
    }
  }, "(", it.label, ")"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      fontWeight: "var(--fw-medium)",
      fontVariantNumeric: it.numeric ? "tabular-nums lining-nums" : "normal",
      color: "var(--on-ground)"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { MetaRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/MetaRow.jsx", error: String((e && e.message) || e) }); }

// components/work/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/* A black or cream block, three across the 12-column grid. The project
   identifies itself by colour, but only as type and pills: the title sets in
   the project colour (bright on black, a deepened cut on cream) and the
   service / year pills fill with it. The ground is never the project colour
   and the card never sits on gold. Flat: hairline, 2px shift, image 1.03 on
   hover and a gentle scale as the card scrolls through the viewport. */
function ProjectCard({
  title,
  subtitle,
  service,
  year,
  image,
  imageAlt = "",
  project,
  href = "#",
  cta = "Read More",
  layout = "stacked",
  tone = "dark",
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pill = {
    display: "inline-flex",
    alignItems: "center",
    height: 26,
    padding: "0 12px",
    borderRadius: "var(--r-pill)",
    background: "var(--project)",
    color: "var(--project-on-ink)",
    font: "var(--type-pill)"
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "data-project": project,
    className: (tone === "light" ? "ground-cream" : "ground-dark") + (className ? " " + className : ""),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      padding: "var(--sp-5)",
      borderRadius: "var(--r-md)",
      textDecoration: "none",
      boxShadow: "inset 0 0 0 1px var(--hairline)",
      transform: hover ? "var(--hover-shift)" : "none",
      transition: "transform var(--dur-2) var(--ease-out),box-shadow var(--dur-2) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Parallax, {
    speed: 0,
    zoom: 0.06,
    radius: "var(--r-sm)",
    style: {
      aspectRatio: layout === "wide" ? "16/9" : "4/3",
      background: "var(--hairline)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top center",
      transform: hover ? "scale(1.03)" : "none",
      transition: "transform var(--dur-4) var(--ease-out)"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-subhead)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--project-ink)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-subhead)",
      fontWeight: "var(--fw-display-medium)",
      color: "var(--on-ground-soft)"
    }
  }, subtitle) : null), (service || year) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-3)"
    }
  }, service ? /*#__PURE__*/React.createElement("span", {
    style: pill
  }, service) : null, year ? /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: pill
  }, year) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-body-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--on-ground)",
      textDecoration: hover ? "underline" : "none",
      textDecorationThickness: "1.5px",
      textUnderlineOffset: "4px"
    }
  }, cta, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? "translate3d(3px,3px,0)" : "none",
      transition: "transform var(--dur-2) var(--ease-out)"
    }
  }, "\u2198"))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/work/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;
const STAT_SIZES = {
  sm: "var(--fs-2xl)",
  md: "var(--fs-3xl)",
  lg: "var(--fs-4xl)",
  xl: "var(--fs-5xl)"
};
const statReduced = () => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const asNumber = v => typeof v === "number" ? v : typeof v === "string" && /^\s*\d+(\.\d+)?\s*$/.test(v) ? parseFloat(v) : null;

/* Numerals in Neue Haas Medium, ink only. The figure is large enough to
   carry the emphasis on its own; there is no colour channel to spend here.
   A plain number counts up from 0 the first time it scrolls into view
   (1.1s, ease-out); ranges and text ("2023–2024", "Rev") render as given.
   Tabular figures keep the width steady while it counts. */
function StatBlock({
  value,
  unit,
  label,
  size = "md",
  countUp = true,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const num = asNumber(value);
  const decimals = num === null ? 0 : (String(value).trim().split(".")[1] || "").length;
  const live = countUp && num !== null && !statReduced();
  const [shown, setShown] = useState(() => live ? 0 .toFixed(decimals) : value);
  useEffect(() => {
    if (!live) {
      setShown(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0,
      started = false;
    const run = () => {
      started = true;
      const t0 = performance.now(),
        dur = 1100;
      const step = t => {
        const k = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - k, 3);
        setShown((num * e).toFixed(decimals));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) {
      run();
      return () => {
        if (raf) cancelAnimationFrame(raf);
      };
    }
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting && !started) {
        io.disconnect();
        run();
      }
    }, {
      threshold: .35
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, live, num, decimals]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-display-medium)",
      fontSize: STAT_SIZES[size] || STAT_SIZES.md,
      lineHeight: .9,
      letterSpacing: "var(--ls-display)",
      color: "var(--on-ground)"
    }
  }, shown), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-display-medium)",
      fontSize: "var(--fs-lg)",
      color: "var(--on-ground)"
    }
  }, unit) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/StatBlock.jsx", error: String((e && e.message) || e) }); }

// documents/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "documents/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/AboutPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Page,
  Shell,
  Section,
  NavBar,
  FooterCTA,
  SectionLabel,
  Button,
  Tag,
  Divider,
  ArrowMarker,
  AboutIntro,
  StatBlock,
  CVEntry,
  D
} = window.OS;
function AboutPage({
  go
}) {
  const c = D.cv,
    ab = D.about;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("header", {
    style: {
      paddingTop: "clamp(48px,7vw,96px)"
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About Me"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, "Oscar Shand"), /*#__PURE__*/React.createElement(AboutIntro, {
    lead: ab.lead,
    paragraphs: ab.paragraphs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      flexWrap: "wrap",
      paddingTop: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    href: "../../documents/CV.html"
  }, "Download the CV"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("contact")
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "clamp(32px,6vw,88px)",
      flexWrap: "wrap",
      paddingTop: "var(--sp-6)",
      borderTop: "2px solid var(--rule)"
    }
  }, c.stats.map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
    key: i,
    value: s.value,
    unit: s.unit,
    label: s.label,
    size: "md"
  }))))), /*#__PURE__*/React.createElement(Section, {
    label: "Experience"
  }, /*#__PURE__*/React.createElement("div", null, c.roles.map((r, i) => /*#__PURE__*/React.createElement(CVEntry, _extends({
    key: i
  }, r))))), /*#__PURE__*/React.createElement(Section, {
    label: "Skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, c.skills.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "span-3",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, s.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-3)"
    }
  }, s.items.map((it, k) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    size: "sm"
  }, it))))))), /*#__PURE__*/React.createElement(Section, {
    label: "Education"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, c.education.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "90px 1fr",
      gap: "var(--sp-6)",
      padding: "var(--sp-5) 0",
      borderTop: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-sm)",
      color: "var(--on-ground-soft)"
    }
  }, e.year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body)",
      fontWeight: "var(--fw-medium)",
      color: "var(--on-ground)"
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)"
    }
  }, e.org))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      paddingTop: "var(--sp-5)",
      borderTop: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)"
    }
  }, "Certifications"), c.certifications.map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)"
    }
  }, x)))), /*#__PURE__*/React.createElement(Section, {
    label: "References"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)",
      maxWidth: "52ch",
      margin: 0
    }
  }, "Clients and employers I've worked with directly. Happy to put you in touch on request."), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      rowGap: "var(--sp-5)"
    }
  }, ab.references.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "span-4",
    style: {
      paddingTop: "var(--sp-4)",
      borderTop: "2px solid var(--rule)",
      font: "var(--type-subhead)",
      fontSize: "var(--fs-lg)",
      color: "var(--on-ground)"
    }
  }, String(r).includes(" | ") ? [String(r).split(" | ")[0], /*#__PURE__*/React.createElement(Divider, {
    key: "d"
  }), String(r).split(" | ")[1]] : r)))), ab.awards.length ? /*#__PURE__*/React.createElement(Section, {
    label: "Awards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      rowGap: "var(--sp-5)"
    }
  }, ab.awards.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "span-4",
    style: {
      paddingTop: "var(--sp-4)",
      borderTop: "2px solid var(--rule)",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-subhead)",
      fontSize: "var(--fs-lg)",
      color: "var(--on-ground)"
    }
  }, w.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)"
    }
  }, w.org, w.year ? " (" + w.year + ")" : ""))))) : null, /*#__PURE__*/React.createElement(FooterCTA, {
    heading: "Let's talk",
    lines: ["References available on request. Christchurch based, open to New Zealand and Australia."],
    links: [{
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oscarshand/"
    }]
  }));
}
Object.assign(window.OS, {
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/App.jsx
try { (() => {
const {
  NavBar,
  FloatingCTA
} = window.OS;
const {
  Home,
  WorkIndex,
  ProjectPage,
  AboutPage,
  ContactPage
} = window.OS;
function App() {
  const [route, setRoute] = React.useState({
    name: "home"
  });
  const go = (name, id) => {
    setRoute({
      name,
      id
    });
    window.scrollTo(0, 0);
  };
  const activeMap = {
    home: "Home",
    work: "Work",
    project: "Work",
    about: "About",
    contact: "Contact"
  };
  /* On a case study the whole app, nav included, sits on black — gold never
     shares a screen with a project colour. Everywhere else the ground is gold. */
  return /*#__PURE__*/React.createElement("div", {
    className: route.name === "project" ? "ground-dark" : undefined,
    onClick: e => {
      const a = e.target.closest("a");
      if (!a) return;
      const l = (a.textContent || "").trim();
      if (l === "Home") {
        e.preventDefault();
        go("home");
      } else if (l === "Work") {
        e.preventDefault();
        go("work");
      } else if (l === "About") {
        e.preventDefault();
        go("about");
      } else if (l === "Contact") {
        e.preventDefault();
        go("contact");
      } else if (l === "Oscar Shand") {
        e.preventDefault();
        go("home");
      }
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    brand: "Oscar Shand",
    active: activeMap[route.name],
    items: window.OS_DATA.nav
  }), route.name === "home" && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), route.name === "work" && /*#__PURE__*/React.createElement(WorkIndex, {
    go: go
  }), route.name === "project" && /*#__PURE__*/React.createElement(ProjectPage, {
    id: route.id,
    go: go
  }), route.name === "about" && /*#__PURE__*/React.createElement(AboutPage, {
    go: go
  }), route.name === "contact" && /*#__PURE__*/React.createElement(ContactPage, null), route.name !== "contact" ? /*#__PURE__*/React.createElement(FloatingCTA, {
    onClick: () => go("contact")
  }) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/ContactPage.jsx
try { (() => {
const {
  Page,
  Shell,
  Section,
  NavBar,
  FooterCTA,
  SectionLabel,
  Button,
  Highlight,
  SocialRow,
  Input,
  Textarea,
  Select,
  Checkbox,
  D
} = window.OS;
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const c = D.contact;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("header", {
    style: {
      paddingTop: "clamp(48px,7vw,96px)"
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      letterSpacing: "var(--ls-mega)",
      maxWidth: "10ch",
      color: "var(--on-ground)"
    }
  }, "Let's get", /*#__PURE__*/React.createElement("br", null), "in touch."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      alignItems: "start",
      rowGap: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "span-7"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      minHeight: 280,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-subhead)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, "Thanks \u2014 that's come through."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, "I'll come back to you within a day or two."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "What's this about",
    defaultValue: "Freelance project"
  }, /*#__PURE__*/React.createElement("option", null, "Freelance project"), /*#__PURE__*/React.createElement("option", null, "Full-time role"), /*#__PURE__*/React.createElement("option", null, "Contract role"), /*#__PURE__*/React.createElement("option", null, "Something else"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell me a bit about it",
    rows: 5,
    hint: "A couple of lines is plenty."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me a copy of this message"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    arrow: true
  }, "Send")))), /*#__PURE__*/React.createElement("div", {
    className: "span-4 start-9",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, [["Email", c.email], ["Phone", c.phone], ["Based in", c.location], ["LinkedIn", c.linkedin]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-ground-soft)"
    }
  }, "(", k, ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body)",
      fontWeight: "var(--fw-medium)",
      color: "var(--on-ground)"
    }
  }, v))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)",
      maxWidth: "34ch",
      marginTop: "var(--sp-4)"
    }
  }, "Open to full-time and freelance across New Zealand and Australia, in design and digital as well as legal support, business analysis and operations roles."), /*#__PURE__*/React.createElement(SocialRow, {
    style: {
      marginTop: "var(--sp-4)"
    }
  })))), /*#__PURE__*/React.createElement(FooterCTA, {
    heading: "Or just email me",
    lines: ["Usually the fastest way."],
    links: [{
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oscarshand/"
    }]
  }));
}
Object.assign(window.OS, {
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/Home.jsx
try { (() => {
const {
  Page,
  Shell,
  Section,
  Band,
  NavBar,
  FooterCTA,
  SectionLabel,
  Marquee,
  Button,
  Tag,
  Highlight,
  ArrowMarker,
  ScrollCue,
  SocialRow,
  Divider,
  ProjectCard,
  Parallax,
  D
} = window.OS;
const SOCIALS = [{
  icon: "instagram",
  label: "Instagram",
  href: "#"
}, {
  icon: "twitter",
  label: "Twitter",
  href: "#"
}, {
  icon: "dribbble",
  label: "Dribbble",
  href: "#"
}];

/* Section order follows the old site: hero, band, (About Me) statement,
   (What I do), the Work marquee, then the work itself. */
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      paddingTop: "clamp(40px,6vw,88px)",
      paddingBottom: "var(--band-gap)"
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, D.hero.location), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, D.hero.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--sp-5) var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, D.hero.availability), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("contact")
  }, "Get in touch")), /*#__PURE__*/React.createElement(ScrollCue, {
    label: D.hero.scrollCue
  })));
}
function StatementBand() {
  return /*#__PURE__*/React.createElement(Section, {
    label: "About Me"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      alignItems: "end",
      rowGap: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "span-8",
    style: {
      font: "var(--type-statement)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, D.hero.statement), /*#__PURE__*/React.createElement("div", {
    className: "span-3 start-10",
    style: {
      display: "flex",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SocialRow, {
    items: SOCIALS
  }))));
}

/* Project colours never touch gold: cream cards on a black band, the
   marquee above as the section's header. */
function WorkGrid({
  go,
  limit
}) {
  const items = limit ? D.projects.slice(0, limit) : D.projects;
  return /*#__PURE__*/React.createElement(Band, {
    tone: "dark",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, items.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    className: "span-4",
    tone: "light",
    project: p.project,
    title: p.title,
    subtitle: p.outcome || p.subtitle,
    service: p.service,
    year: p.year,
    image: p.thumb || p.image,
    imageAlt: p.title,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("project", p.id);
    }
  })))));
}
function Disciplines() {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, D.disciplines.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "span-3",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      paddingTop: "var(--sp-5)",
      borderTop: "2px solid var(--rule)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-subhead)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, d.body))));
}
function Beyond({
  go,
  style
}) {
  return /*#__PURE__*/React.createElement(Band, {
    tone: "cream",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      alignItems: "start",
      rowGap: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "span-5",
    style: {
      font: "var(--type-section)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, "Not only a design hire."), /*#__PURE__*/React.createElement("div", {
    className: "span-6 start-7",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, "A year at Ashurst running billing, expenses and document production for banks, government departments and global clients. Before that, helpdesk support and Product Owner work on a portal rebuild at the New Zealand Film Commission."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, "Open to ", /*#__PURE__*/React.createElement(Highlight, null, "full-time and freelance"), " across New Zealand and Australia \u2014 design and digital roles, and the legal support, business analysis and operations work alongside them."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    onClick: () => go("about")
  }, "Read the CV"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go("contact")
  }, "Get in touch")))));
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.12,
    zoom: 0.08
  }, /*#__PURE__*/React.createElement("video", {
    src: D.hero.video,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    "aria-label": "Showreel",
    style: {
      width: "100%",
      maxHeight: 520,
      objectFit: "cover",
      display: "block",
      background: "var(--black)"
    }
  })), /*#__PURE__*/React.createElement(StatementBand, null), /*#__PURE__*/React.createElement(Section, {
    label: "What I do"
  }, /*#__PURE__*/React.createElement(Disciplines, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--section-gap)",
      marginBottom: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    text: "Work",
    scroll: true
  })), /*#__PURE__*/React.createElement(WorkGrid, {
    go: go
  }), /*#__PURE__*/React.createElement(Beyond, {
    go: go,
    style: {
      marginTop: 0
    }
  }), /*#__PURE__*/React.createElement(FooterCTA, {
    gap: false,
    lines: ["Open to full-time and freelance across New Zealand and Australia.", "Christchurch based, comfortable remote."],
    links: [{
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oscarshand/"
    }, {
      label: "oscarshand.com",
      href: "#"
    }]
  }));
}
Object.assign(window.OS, {
  Home,
  WorkGrid,
  Disciplines,
  Beyond,
  Hero,
  StatementBand,
  SOCIALS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/ProjectPage.jsx
try { (() => {
const {
  Page,
  Shell,
  Section,
  NavBar,
  FooterCTA,
  SectionLabel,
  Button,
  Tag,
  Highlight,
  ArrowMarker,
  MetaRow,
  StatBlock,
  CaseTitle,
  Parallax,
  D
} = window.OS;
function ProjectPage({
  id,
  go
}) {
  const p = D.projects.find(x => x.id === id) || D.projects[0];
  const i = D.projects.indexOf(p);
  const next = D.projects[(i + 1) % D.projects.length];
  /* The page sits on black; the project's colour arrives as the title and pills.
     The header pins under the nav and everything after it (a solid black
     layer) slides up over the title as the reader scrolls. */
  return /*#__PURE__*/React.createElement(Page, {
    project: p.project
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 72,
      zIndex: 0,
      paddingTop: "clamp(32px,5vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(CaseTitle, {
    as: "h1",
    project: p.project,
    title: p.title,
    description: p.summary,
    tags: [p.service, String(p.year)]
  }), /*#__PURE__*/React.createElement(MetaRow, {
    items: p.meta
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      background: "var(--ground)",
      marginTop: "var(--band-gap)"
    }
  }, /*#__PURE__*/React.createElement(Parallax, {
    speed: 0.12,
    zoom: 0.08
  }, /*#__PURE__*/React.createElement("img", {
    src: p.thumb || p.image,
    alt: p.title,
    style: {
      width: "100%",
      maxHeight: 560,
      objectFit: "cover",
      objectPosition: "top center"
    }
  })), p.stats ? /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "clamp(32px,6vw,96px)",
      flexWrap: "wrap"
    }
  }, p.stats.map((s, k) => /*#__PURE__*/React.createElement(StatBlock, {
    key: k,
    value: s.value,
    unit: s.unit,
    label: s.label,
    size: "lg"
  })))) : null, p.gallery ? /*#__PURE__*/React.createElement(Section, {
    label: "Work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      rowGap: "var(--grid-gap)"
    }
  }, p.gallery.map((g, k) => /*#__PURE__*/React.createElement(Parallax, {
    key: k,
    speed: 0,
    zoom: 0.05,
    radius: "var(--r-sm)",
    className: "span-" + (g.span || 12)
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.alt,
    style: {
      width: "100%",
      display: "block"
    }
  }))))) : null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-9)"
    }
  }, p.sections.map((s, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "grid",
    style: {
      paddingTop: "var(--sp-7)",
      borderTop: "1px solid var(--hairline)",
      rowGap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "span-6",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, s.kind), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--type-statement)",
      fontSize: "clamp(26px,2.8vw,42px)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, s.head)), /*#__PURE__*/React.createElement("p", {
    className: "span-5 start-8",
    style: {
      font: "var(--type-body)",
      color: "var(--on-ground-soft)",
      margin: 0
    }
  }, s.body))))), p.quote ? /*#__PURE__*/React.createElement(Section, {
    label: "Client"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "grid",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "span-9",
    style: {
      font: "var(--type-statement)",
      color: "var(--on-ground)",
      margin: 0
    }
  }, "\u201C", p.quote.text, "\u201D"), /*#__PURE__*/React.createElement("footer", {
    className: "span-9",
    style: {
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)",
      marginTop: "var(--sp-4)"
    }
  }, p.quote.name, p.quote.role ? ", " + p.quote.role : ""))) : null, /*#__PURE__*/React.createElement(Section, {
    label: "Scope"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    },
    className: "grid"
  }, p.points.map((pt, k) => /*#__PURE__*/React.createElement("li", {
    key: k,
    className: "span-4",
    style: {
      display: "grid",
      gridTemplateColumns: "24px 1fr",
      gap: "var(--sp-4)",
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--hairline)",
      font: "var(--type-body-sm)",
      color: "var(--on-ground-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 2,
      marginTop: 10,
      background: "var(--on-ground)"
    }
  }), pt)))), /*#__PURE__*/React.createElement(Section, {
    label: "Next"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("project", next.id);
    },
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "var(--sp-5)",
      font: "var(--type-section)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--on-ground)",
      textDecoration: "none"
    }
  }, next.title, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "var(--fs-2xl)"
    }
  }, "\u2198"))), /*#__PURE__*/React.createElement(FooterCTA, {
    heading: "Let's talk",
    lines: ["Open to full-time and freelance across New Zealand and Australia."],
    links: [{
      label: "All work",
      href: "#"
    }]
  })));
}
Object.assign(window.OS, {
  ProjectPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/ProjectPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/Shell.jsx
try { (() => {
const DS = window.OscarShandDesignSystem_798a1a;
const D = window.OS_DATA;

/* Page is full-width so bands can bleed; Shell contains and gutters;
   Section is a contained block with an optional label. */
/* A project page sits on black; its colour arrives as type and pills, never as ground. */
function Page({
  children,
  project,
  tone,
  style
}) {
  const t = tone || (project ? "dark" : null);
  return /*#__PURE__*/React.createElement("div", {
    "data-project": project,
    className: t ? "ground-" + t : undefined,
    style: {
      minHeight: "100vh",
      ...style
    }
  }, children);
}
function Shell({
  children,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shell" + (className ? " " + className : ""),
    style: style
  }, children);
}
function Section({
  label,
  children,
  style,
  wide
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: "var(--section-gap)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-7)",
      ...(wide ? {
        maxWidth: "none"
      } : null)
    }
  }, label ? /*#__PURE__*/React.createElement(DS.SectionLabel, null, label) : null, children));
}
/* A colour band that runs edge to edge. tone: gold | cream | dark */
function Band({
  tone = "cream",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "ground-" + tone,
    style: {
      paddingBlock: "var(--section-gap)",
      marginTop: "var(--section-gap)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Shell, null, children));
}
function Rule() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--hairline)"
    }
  });
}
window.OS = Object.assign({}, DS, {
  Page,
  Shell,
  Section,
  Band,
  Rule,
  D
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/WorkIndex.jsx
try { (() => {
const {
  Page,
  Shell,
  Section,
  NavBar,
  FooterCTA,
  SectionLabel,
  Button,
  ScrollCue,
  D
} = window.OS;
const {
  WorkGrid
} = window.OS;
function WorkIndex({
  go
}) {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement("header", {
    style: {
      paddingTop: "clamp(48px,7vw,96px)"
    }
  }, /*#__PURE__*/React.createElement(Shell, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-hero)",
      letterSpacing: "var(--ls-mega)",
      maxWidth: "12ch",
      color: "var(--on-ground)",
      margin: 0
    }
  }, "Selected work."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-statement)",
      color: "var(--on-ground)",
      maxWidth: "40ch",
      margin: 0
    }
  }, "Brand, content, websites, and the workflow thinking that holds them together."), /*#__PURE__*/React.createElement(ScrollCue, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(WorkGrid, {
    go: go
  })), /*#__PURE__*/React.createElement(FooterCTA, {
    gap: false,
    heading: "Something in mind?",
    lines: ["Freelance projects and full-time roles both welcome."],
    links: [{
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oscarshand/"
    }]
  }));
}
Object.assign(window.OS, {
  WorkIndex
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/WorkIndex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/oscarshand-site/data.js
try { (() => {
window.OS_DATA = {
  nav: [{
    label: "Home",
    href: "#home"
  }, {
    label: "Work",
    href: "#work"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  hero: {
    lead: "Oscar Shand",
    location: "Christchurch, New Zealand",
    scrollCue: "Scroll down",
    /* verbatim from the old site */
    statement: "Independent creative expertise across brand, content, digital design, and business systems.",
    availability: "Available now · design and digital roles, NZ and AU",
    video: "../../assets/video/home-hero.mp4"
  },
  /* All four descriptions are verbatim from the Webflow export. Do not paraphrase. */
  disciplines: [{
    title: "Brand & Visual Identity",
    body: "Creating refined visual direction and brand assets that build consistency, credibility, and a stronger overall presence."
  }, {
    title: "Content & Marketing Design",
    body: "Designing polished content and marketing materials that communicate clearly and support more consistent brand execution."
  }, {
    title: "Web & Digital Experiences",
    body: "I create user focused applications and websites that ensure your customers & clients can easily interact with your business."
  }, {
    title: "Systems & Workflow Optimisation",
    body: "Improving workflows and internal systems to create more clarity, better structure, and smoother day-to-day delivery."
  }],
  about: {
    /* verbatim from about.html in the export */
    lead: "Christchurch based independent expertise across brand, content, digital design, and systems that help businesses look better and work better.",
    paragraphs: ["I work across branding, content, websites, and workflow optimisation, helping businesses present themselves more clearly and operate more effectively.", "My background sits between creative execution and practical problem-solving. That means I'm not only interested in how something looks, but also how it functions, how it communicates, and how it fits into the wider flow of a business. Whether I'm developing brand assets, designing digital touchpoints, creating marketing content, or improving internal systems, my focus is always on building work that feels considered, useful, and well executed.", "I'm drawn to projects where design and structure need to work together - where stronger visuals, clearer communication, and better workflows can create a more cohesive and effective business presence."],
    /* Real clients and employers, taken from the CV. The old site's References
       block was unreplaced Webflow filler (Amazon, Apple, Nike) — these are the
       actual ones. Set as type: there are no logo files for them. */
    references: ["Bared Footwear", "Harcourts Holmwood", "Ashurst", "New Zealand Film Commission", "Pronto Coffee", "BF Property", "M4 Photography", "Nichols | Polson & Co", "Stats NZ"],
    /* Empty on purpose. The old site's Awards block was template filler
       (Awwwards SOTY, CSS SOTD) and there is no real award data to put here.
       Populate as {title, org, year} and the section renders itself. */
    awards: []
  },
  /* Per project: thumb = a 4:3 detail for the card (the site hero, a bottle);
     image = the full screenshot for the case study; outcome = the one-line
     result that leads the card; stats = real numbers only; quote = one line
     of client voice as {text,name,role} — null until a client has said it. */
  projects: [{
    id: "bf-property",
    project: "bf-property",
    title: "BF Property",
    subtitle: "Rebrand, Webflow build, marketing infrastructure",
    service: "Brand & Web",
    year: "2026",
    image: "../../assets/images/bf-property-site.png",
    thumb: "../../assets/images/thumbs/bf-property.png",
    outcome: "Listings go live without a developer",
    stats: [{
      value: "4",
      label: "Step process, designed and written"
    }, {
      value: "6",
      label: "Projects listed at launch"
    }, {
      value: "1",
      label: "CMS the team runs themselves"
    }],
    quote: null,
    gallery: [{
      src: "../../assets/images/bf-property-site.png",
      alt: "The full BF Property home page: hero, four-step process, recent and current projects, contact form and footer",
      span: 12
    }],
    summary: "An end-to-end job: new identity, a Webflow site the team can run themselves, and the marketing infrastructure sitting behind it.",
    meta: [{
      label: "Client",
      value: "BF Property"
    }, {
      label: "Year",
      value: "2026",
      numeric: true
    }, {
      label: "Role",
      value: "Business Development"
    }, {
      label: "Service",
      value: "Brand & Web"
    }],
    sections: [{
      kind: "Challenge",
      head: "A property business outgrowing its own presentation",
      body: "BF Property were doing good work with a brand that hadn't kept pace. Marketing material was assembled job by job, the website couldn't be updated without help, and there was no consistent way for enquiries to come in and be tracked."
    }, {
      kind: "Goal",
      head: "One identity, one site, one pipeline",
      body: "Build a single visual system that holds across listings, signage and social, put it into a Webflow site the team can edit themselves, and connect the enquiry side so marketing effort turns into something measurable."
    }, {
      kind: "Result",
      head: "A business that presents and operates as one thing",
      body: "The rebrand runs across every touchpoint, the site is CMS-driven so listings and content go up without a developer, and the marketing infrastructure gives the team a clear view of where enquiries come from and what happens next."
    }],
    points: ["Full visual identity refresh across print, digital and signage", "Webflow build with CMS-managed listings and content", "Enquiry capture, templates and reporting", "Ongoing content and campaign support"]
  }, {
    id: "pronto-coffee",
    project: "pronto",
    title: "Pronto Coffee",
    subtitle: "Hand-coded site and custom interactions",
    service: "Web & Digital",
    year: "2026",
    image: "../../assets/images/pronto-coffee-site-full.png",
    thumb: "../../assets/images/thumbs/pronto.png",
    outcome: "Venue enquiries arrive ready to quote",
    quote: null,
    gallery: [{
      src: "../../assets/images/pronto-coffee-site-full.png",
      alt: "The full Pronto Coffee home page: Sip. Smile. Repeat. hero, nearest-Pronto map, venue proposal form, machine specs, FAQ and footer",
      span: 12
    }],
    summary: "A self-serve coffee business rolling out nationwide, needing one site that sells to venues and finds cups for customers.",
    meta: [{
      label: "Client",
      value: "Pronto Coffee NZ"
    }, {
      label: "Year",
      value: "2026",
      numeric: true
    }, {
      label: "Website",
      value: "prontocoffee.co.nz"
    }, {
      label: "Service",
      value: "Web & Digital"
    }],
    stats: [{
      value: "2",
      label: "Audiences, one page"
    }, {
      value: "5",
      label: "Hand-coded interactions"
    }, {
      value: "0",
      label: "Templates or page builders"
    }],
    sections: [{
      kind: "Challenge",
      head: "Two audiences, one page",
      body: "Pronto sells to businesses who host a machine and to people who just want a coffee. Those are different conversations with different proof points, and both had to live on the same site without either getting buried."
    }, {
      kind: "Goal",
      head: "Make the split obvious and the enquiry easy",
      body: "Give each audience a clear path from the first screen, keep the technical detail available for venues without slowing anyone else down, and build the interactions by hand so the site behaves exactly the way it should rather than the way a template allows."
    }, {
      kind: "Result",
      head: "A site that does the qualifying",
      body: "Custom JavaScript drives the location finder, the spec switcher, the scrolling marquees and the proposal form. Venue enquiries arrive with enough detail to quote from, and customers can find their nearest cup in two taps."
    }],
    points: ["Hand-coded interactions: location finder, spec switcher, marquee bands, FAQ", "Dual-path structure for B2B venues and retail customers", "Proposal form built for qualified venue enquiries", "Product photography direction and page composition"]
  }, {
    id: "bared-footwear",
    project: "bared",
    title: "Bared Footwear",
    subtitle: "Content production and an eCommerce migration",
    service: "Content & Systems",
    year: "2023–2024",
    image: "../../assets/images/bared-shoe-care.webp",
    thumb: "../../assets/images/thumbs/bared.png",
    outcome: "Content on three platforms through a Shopify migration",
    stats: [{
      value: "3",
      label: "Platforms managed"
    }, {
      value: "11",
      unit: "mo",
      label: "Through a growth phase"
    }, {
      value: "1",
      label: "Lightspeed → Shopify migration"
    }],
    quote: null,
    gallery: [{
      src: "../../assets/images/bared-instagram-posts.png",
      alt: "Bared Footwear Instagram posts: B Corp month, long weekend trading hours and a vote-to-win sale carousel",
      span: 12
    }, {
      src: "../../assets/images/bared-web.png",
      alt: "baredfootwear.com on three desktop screens: shoe care category, All Day Heels, and a sneaker grid",
      span: 12
    }, {
      src: "../../assets/images/bared-instagram-grids.png",
      alt: "Three baredfootwear Instagram grids across a season of content",
      span: 6
    }, {
      src: "../../assets/images/bared-mobile-store.png",
      alt: "Mobile store after the migration: filtered listing, home page and add-to-cart drawer",
      span: 6
    }],
    summary: "Social media, content production, and a hands-on contribution to a major eCommerce migration during a rapid growth phase for one of Australia's most ambitious footwear brands.",
    meta: [{
      label: "Client",
      value: "Bared Footwear"
    }, {
      label: "Year",
      value: "2023–2024",
      numeric: true
    }, {
      label: "Website",
      value: "baredfootwear.com"
    }, {
      label: "Service",
      value: "Content & Systems"
    }],
    sections: [{
      kind: "Challenge",
      head: "Keeping the brand sharp while scaling fast",
      body: "Bared was growing quickly — new stores, new product lines, a lot happening at once. Alongside that, they were migrating their eCommerce platform from Lightspeed to Shopify, which touched everything from inventory to reporting."
    }, {
      kind: "Goal",
      head: "Consistent content and a cleaner digital foundation",
      body: "Keep the social presence running consistently across Instagram, Facebook and TikTok while helping build the foundations for a more functional eCommerce setup. Content that feels intentional, not churned out to fill a grid."
    }, {
      kind: "Result",
      head: "Stronger content, better systems",
      body: "I produced and managed content across all three platforms, including product photography and video. I contributed directly to the Lightspeed to Shopify migration, improving how the store handled inventory, reporting and overall functionality. Being on the shop floor meant the content was more genuine and the marketing better informed."
    }],
    points: ["Social media management across Instagram, Facebook and TikTok", "Product photography and video content production", "Campaign content aligned to brand direction", "Contribution to the Lightspeed → Shopify migration", "In-store fitting, customer service and product knowledge"]
  }, {
    id: "m4-photography",
    project: "m4",
    title: "M4 Photography",
    subtitle: "Full rebrand and website build",
    service: "Graphic & Web Design",
    year: "2026",
    image: "../../assets/images/m4-photography-site.png",
    thumb: "../../assets/images/thumbs/m4.png",
    outcome: "Three photographers, one brand, a site ready to launch",
    stats: [{
      value: "3",
      label: "Photographers under one identity"
    }, {
      value: "3",
      label: "Services, each with its own order path"
    }, {
      value: "1",
      label: "Site, built and ready to go live"
    }],
    quote: null,
    gallery: [{
      src: "../../assets/images/m4-photography-site.png",
      alt: "The full M4 Photography home page: hero, services, about, gallery, order call-to-action and contact",
      span: 12
    }],
    summary: "A full rebrand and website build for a three-photographer school and sports studio — giving a busy, boots-on-the-ground operation a brand that finally matches the quality of their work.",
    meta: [{
      label: "Client",
      value: "M4 Photography"
    }, {
      label: "Year",
      value: "2026",
      numeric: true
    }, {
      label: "Website",
      value: "Coming soon"
    }, {
      label: "Service",
      value: "Graphic & Web Design"
    }],
    sections: [{
      kind: "Challenge",
      head: "A studio without a brand",
      body: "Three photographers shooting schools and sports — high volume, tight turnarounds, lots of moving parts. No consistent visual identity, nothing tying the three of them together, and no website that could represent what they offer or make it easy to get in touch."
    }, {
      kind: "Goal",
      head: "Build something that does the selling for them",
      body: "A brand identity a school administrator or sports coordinator lands on and immediately feels confident about, a website that communicates the services clearly, and a foundation they can maintain without starting from scratch each time."
    }, {
      kind: "Result",
      head: "A proper studio presence",
      body: "M4 came out with a brand that works across everything, from the website through to how they present on a job. The site is built and ready to go live, and the identity gives all three photographers a consistent look to work from."
    }],
    points: ["Full visual identity for the studio", "Website design and build, ready to launch", "Enquiry flow for schools and clubs", "Ongoing support between seasons"]
  }, {
    id: "nichols-polson",
    project: "nichols",
    title: "Nichols | Polson & Co",
    subtitle: "Brand refresh and marketing retainer",
    service: "Social Media & Marketing Design",
    year: "2025–2026",
    image: "../../assets/images/nichols-social-tiles.webp",
    thumb: "../../assets/images/thumbs/nichols.png",
    outcome: "An Instagram presence and a listings database of their own",
    stats: [{
      value: "17",
      unit: "mo",
      label: "Weekly retainer"
    }, {
      value: "2",
      label: "Instagram accounts managed"
    }, {
      value: "1",
      label: "Custom listings database"
    }],
    quote: null,
    gallery: [{
      src: "../../assets/images/nichols-phones-posts.png",
      alt: "Instagram posts and a story for Nichols | Polson & Co: Sold at auction, Just listed and Open homes",
      span: 12
    }, {
      src: "../../assets/images/nichols-web.png",
      alt: "Harcourts Holmwood agent page, Instagram grid and the Nichols | Polson & Co team page on three desktop screens",
      span: 12
    }, {
      src: "../../assets/images/nichols-phones-profile.png",
      alt: "Link-in-bio page, mobile agent profile and a property video reel",
      span: 6
    }, {
      src: "../../assets/images/nichols-profiles.png",
      alt: "Instagram profiles for Paul and Deb Nichols and Zani Polson, with the Same, same but different announcement",
      span: 6
    }],
    summary: "A brand refresh and ongoing digital marketing retainer built around a leadership transition — helping Zani step out from the broader Holmwood structure and build something that's properly hers.",
    meta: [{
      label: "Client",
      value: "Nichols | Polson & Co"
    }, {
      label: "Year",
      value: "2025–2026",
      numeric: true
    }, {
      label: "Website",
      value: "harcourts.net"
    }, {
      label: "Service",
      value: "Social Media & Marketing Design"
    }],
    sections: [{
      kind: "Challenge",
      head: "Reestablishing an identity through transition",
      body: "When Paul and Deb Nichols stepped back and Zani Polson took the reins, the brand needed to reflect new leadership while keeping decades of credibility. The existing approach was tied to the Harcourts Holmwood internal structure, which no longer suited how Zani wanted to operate."
    }, {
      kind: "Goal",
      head: "An independent, cohesive presence",
      body: "Establish the team as a self-sufficient brand that could stand confidently outside the Holmwood umbrella while remaining part of the network — redesigned collateral, a consistent Instagram presence, and internal tools to support day-to-day operations."
    }, {
      kind: "Result",
      head: "A thriving brand with sustained momentum",
      body: "Weekly social management, campaign-aligned posting, caption writing, property video and photo editing built a consistent Instagram presence. A custom internal database lets the team track listings independently of the Harcourts system."
    }],
    points: ["Brand refresh across all marketing collateral", "Weekly Instagram management and content planning", "Property video filming and listing photo editing", "Custom internal listings database", "Content templates for ongoing consistency"]
  }, {
    id: "ovsbm-design",
    project: "ovsbm",
    title: "OVSBM Design",
    subtitle: "Rebuilding my own brand",
    service: "Digital Design",
    year: "2023–2026",
    image: "../../assets/images/ovsbm-portfolio-site.png",
    thumb: "../../assets/images/thumbs/ovsbm.png",
    outcome: "A studio brand credible enough to send without explanation",
    stats: [{
      value: "3",
      unit: "yr",
      label: "Running the studio"
    }, {
      value: "7",
      label: "Client projects"
    }, {
      value: "2",
      label: "Rebuilds, and counting"
    }],
    quote: null,
    gallery: [{
      src: "../../assets/images/ovsbm-portfolio-site.png",
      alt: "The 2022 OVSBM design portfolio site: numbered index of graphic and UX/UI projects, then each case study in sequence",
      span: 12
    }],
    summary: "Rebuilding my own brand from the ground up — moving from a student portfolio into something that actually reflects how I work and what I offer.",
    meta: [{
      label: "Client",
      value: "OVSBM Design"
    }, {
      label: "Year",
      value: "2023–2026",
      numeric: true
    }, {
      label: "Website",
      value: "ovsbm.design"
    }, {
      label: "Service",
      value: "Digital Design"
    }],
    sections: [{
      kind: "Challenge",
      head: "Outgrowing your own brand",
      body: "My original portfolio was built when I was finishing my diploma. It did its job at the time, but once I was running OVSBM Design as a proper business with real clients and retainers, it had stopped representing what I actually do."
    }, {
      kind: "Goal",
      head: "A brand that works as hard as the work itself",
      body: "Something considered and minimal — credible enough to send to a client with no explanation needed. Strip the portfolio back to only what matters, be more intentional with the copy, and give the identity a clear point of view without overdoing it."
    }, {
      kind: "Result",
      head: "A cleaner, more confident presence",
      body: "The site is quieter, more focused, and a better reflection of how I approach the work. It's an ongoing project — the brand evolves as the business does — and it's now being rebuilt again as oscarshand.com."
    }],
    points: ["Full brand identity refresh", "Portfolio site built in Webflow", "Copywriting across every page", "Case study framework and project page layout", "Visual system and asset library"]
  }, {
    id: "shop-ovsbm",
    project: "shop",
    title: "shop.ovsbm",
    subtitle: "A collection conceived, launched and sold out in three months",
    service: "UX & UI Design",
    year: "2023",
    image: "../../assets/images/shop-gallery-prints.png",
    thumb: "../../assets/images/thumbs/shop.png",
    outcome: "Sold out in three months",
    quote: null,
    gallery: [{
      src: "../../assets/images/shop-poster-no1.png",
      alt: "Print #1 from the A/W 2023 collection: a collage of AI-designed fashion imagery on a black base",
      span: 6
    }, {
      src: "../../assets/images/render-tartan-portrait.png",
      alt: "Tartan portrait from the A/W 2023 collection",
      span: 6
    }],
    summary: "An experimental online store built around an A/W 2023 collection of custom AI-designed clothing and prints — conceived, launched, and sold out in three months.",
    meta: [{
      label: "Client",
      value: "OVSBM Design"
    }, {
      label: "Year",
      value: "2023",
      numeric: true
    }, {
      label: "Website",
      value: "shop.ovsbm.design"
    }, {
      label: "Service",
      value: "UX & UI Design"
    }],
    stats: [{
      value: "3",
      unit: "mo",
      label: "Concept to sold out"
    }, {
      value: "3",
      label: "Design series"
    }, {
      value: "100",
      unit: "%",
      label: "Of stock sold"
    }],
    sections: [{
      kind: "Challenge",
      head: "Turning art into a product",
      body: "The AI-generated work had been building for a while — surrealist architecture, editorial fashion, metallic figure studies — but it was all sitting in folders. The question was whether there was an audience, and how to get to market without a production team or a warehouse."
    }, {
      kind: "Goal",
      head: "Test the concept, move the stock",
      body: "Run a lean, self-contained launch: design the collection, build the store, run the campaigns, and see if it sells. No safety net."
    }, {
      kind: "Result",
      head: "Sold out in three months",
      body: "The A/W 2023 collection launched through a Shopify store with a campaign site matching the aesthetic of the work. All stock sold within three months."
    }],
    points: ["AI artwork direction across three series", "Custom clothing and print design", "Shopify store setup, product management and fulfilment", "Campaign site design and build", "Social campaign management and content"]
  }],
  cv: {
    summary: "Designer and digital marketing specialist running my own studio, with a corporate background in legal operations and IT support. I move between creative execution and the practical side of a business — billing, systems, reporting, process — which is a combination I'm comfortable being hired for either way.",
    stats: [{
      value: "3",
      unit: "yr",
      label: "Running OVSBM"
    }, {
      value: "7",
      label: "Client projects"
    }, {
      value: "12",
      label: "Certifications"
    }],
    roles: [{
      role: "Freelance Graphic & Web Designer",
      org: "OVSBM Design",
      type: "Freelance",
      dates: "Apr 2023 — Present",
      location: "Christchurch, NZ · Hybrid",
      points: ["Run my own creative studio: web design, social media management, photography, videography and marketing materials.", "Design and build websites, portfolios and Shopify stores for small businesses, creatives and real estate teams.", "Build content systems, templates and workflows so client output stays consistent.", "Scope, deliver and refine projects directly with clients."]
    }, {
      role: "Business Development",
      org: "BF Property",
      type: "Contract",
      dates: "May 2026 — Jul 2026",
      location: "Christchurch, NZ",
      points: ["Rebrand across print, digital and signage.", "Webflow site build with CMS-managed listings.", "Marketing infrastructure: enquiry capture, templates and reporting."]
    }, {
      role: "Business Development",
      org: "Pronto Coffee",
      type: "Contract",
      dates: "Feb 2026 — Jul 2026",
      location: "Christchurch, NZ · On-site",
      points: ["Hand-coded website with custom JavaScript interactions for a nationwide self-serve coffee rollout.", "Dual-path structure serving B2B venues and retail customers from one page.", "Proposal flow built to qualify venue enquiries."]
    }, {
      role: "Social Media Manager",
      org: "Nichols | Polson & Co — Harcourts Holmwood",
      type: "Contract",
      dates: "Mar 2025 — Jul 2026",
      location: "Christchurch, NZ · Hybrid",
      points: ["Content strategy, graphic design and social media for a leading Christchurch real estate agency.", "Weekly posting aligned to campaign activity, caption writing and content planning.", "Property video filming, listing photo editing, and a custom internal listings database."]
    }, {
      role: "Team Assistant",
      org: "Ashurst",
      type: "Full-time",
      dates: "Feb 2024 — Feb 2025",
      location: "Melbourne, VIC · On-site",
      points: ["Supported partners and legal teams across expenses, billing, document production, legal searches, reporting, event logistics and onboarding.", "Managed billing for high-profile clients including major banks, government departments and global companies.", "Coordinated lawyer time entries, disbursements and client-specific billing requirements.", "Maintained accuracy and compliance across financial documentation."]
    }, {
      role: "Sales Assistant",
      org: "Bared Footwear",
      type: "Part-time",
      dates: "Apr 2023 — Feb 2024",
      location: "Melbourne, VIC · On-site",
      points: ["Tailored fitting and style guidance with a focus on podiatry needs: orthotics, gait and injury support.", "Social content and product photography across Instagram, Facebook and TikTok.", "Contributed to the Lightspeed → Shopify migration, improving inventory and reporting.", "Handled returns, stock queries and customer concerns."]
    }, {
      role: "Census Collector",
      org: "Stats NZ",
      type: "Contract",
      dates: "Feb 2023 — Apr 2023",
      location: "Christchurch, NZ",
      points: ["Field-based data collection across diverse communities, managing my own caseload.", "Supported teammates with systems and troubleshooting.", "Tracked non-response patterns to improve follow-up."]
    }, {
      role: "Helpdesk Support Analyst",
      org: "New Zealand Film Commission",
      type: "Contract",
      dates: "May 2022 — Dec 2022",
      location: "Wellington, NZ · On-site",
      points: ["IT support for staff and external applicants; managed support inboxes and resolved technical issues.", "Product Owner for the legacy application portal.", "Contributed UX insights and stakeholder mapping to the build of the new portal.", "Produced written and video training material and wireframes."]
    }],
    education: [{
      year: "2021",
      title: "Level 5 Diploma: Graphic Design & Web Design",
      org: "Yoobee College, Christchurch"
    }, {
      year: "2020",
      title: "Level 4 Certificate: Creative Media",
      org: "Yoobee College, Christchurch"
    }, {
      year: "2018",
      title: "NCEA Level 2 with Merit",
      org: "Cashmere High School, Christchurch"
    }, {
      year: "2018",
      title: "Level 3 Certificate: Barista Essentials",
      org: "Ara Institute of Canterbury"
    }, {
      year: "2017",
      title: "NCEA Level 1 with Merit",
      org: "St Andrew's College, Christchurch"
    }],
    certifications: ["Business Analysis Foundations — LinkedIn, 2024", "Generative AI Productivity Skills — Microsoft & LinkedIn, 2024"],
    skills: [{
      group: "Design & content",
      items: ["Graphic design", "UX/UI", "Branding", "Photography", "Videography", "Content production"]
    }, {
      group: "Platforms",
      items: ["Figma", "Adobe Creative Suite", "Webflow", "Shopify", "WordPress", "Microsoft 365", "Microsoft Dynamics 365"]
    }, {
      group: "Business & operations",
      items: ["Billing & invoicing", "Expense management", "Document production", "Reporting", "Process improvement", "Data accuracy"]
    }, {
      group: "Analysis",
      items: ["Requirements gathering", "Stakeholder mapping", "UX research", "Wireframing", "Workflow design", "Training & onboarding"]
    }]
  },
  contact: {
    email: "oscar.shand@gmail.com",
    phone: "",
    location: "Christchurch, New Zealand",
    linkedin: "linkedin.com/in/oscarshand"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/oscarshand-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArrowMarker = __ds_scope.ArrowMarker;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Parallax = __ds_scope.Parallax;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SocialRow = __ds_scope.SocialRow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FloatingCTA = __ds_scope.FloatingCTA;

__ds_ns.FooterCTA = __ds_scope.FooterCTA;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.AboutIntro = __ds_scope.AboutIntro;

__ds_ns.CVEntry = __ds_scope.CVEntry;

__ds_ns.CaseTitle = __ds_scope.CaseTitle;

__ds_ns.MetaRow = __ds_scope.MetaRow;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
