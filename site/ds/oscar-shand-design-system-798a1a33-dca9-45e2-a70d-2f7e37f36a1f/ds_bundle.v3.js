/* @ds-bundle: {"format":4,"namespace":"OscarShandDesignSystem_798a1a","components":[{"name":"ArrowMarker","sourcePath":"components/core/ArrowMarker.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"GlassPanel","sourcePath":"components/core/GlassPanel.jsx"},{"name":"Highlight","sourcePath":"components/core/Highlight.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"Parallax","sourcePath":"components/core/Parallax.jsx"},{"name":"ScrollCue","sourcePath":"components/core/ScrollCue.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"SocialRow","sourcePath":"components/core/SocialRow.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FloatingCTA","sourcePath":"components/navigation/FloatingCTA.jsx"},{"name":"FooterCTA","sourcePath":"components/navigation/FooterCTA.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"AboutIntro","sourcePath":"components/work/AboutIntro.jsx"},{"name":"CVEntry","sourcePath":"components/work/CVEntry.jsx"},{"name":"CaseTitle","sourcePath":"components/work/CaseTitle.jsx"},{"name":"MetaRow","sourcePath":"components/work/MetaRow.jsx"},{"name":"ProjectCard","sourcePath":"components/work/ProjectCard.jsx"},{"name":"StatBlock","sourcePath":"components/work/StatBlock.jsx"},{"name":"Icon","sourcePath":"components/v3/core.js"},{"name":"LiquidGlass","sourcePath":"components/v3/glass.js"},{"name":"GlassButton","sourcePath":"components/v3/glass.js"},{"name":"GlassToolbar","sourcePath":"components/v3/glass.js"},{"name":"GlassTabBar","sourcePath":"components/v3/glass.js"},{"name":"SegmentedControl","sourcePath":"components/v3/glass.js"},{"name":"Switch","sourcePath":"components/v3/glass.js"},{"name":"Slider","sourcePath":"components/v3/glass.js"},{"name":"GlassSheet","sourcePath":"components/v3/glass.js"},{"name":"NavIsland","sourcePath":"components/v3/glass.js"},{"name":"Action","sourcePath":"components/v3/core.js"},{"name":"HeroSection","sourcePath":"components/v3/sections.js"},{"name":"PromoTile","sourcePath":"components/v3/sections.js"},{"name":"TileGrid","sourcePath":"components/v3/sections.js"},{"name":"LocalNav","sourcePath":"components/v3/sections.js"},{"name":"FeatureRow","sourcePath":"components/v3/sections.js"},{"name":"DirectoryFooter","sourcePath":"components/v3/sections.js"},{"name":"GalleryCarousel","sourcePath":"components/v3/media.js"},{"name":"VideoBand","sourcePath":"components/v3/media.js"},{"name":"ImageCompare","sourcePath":"components/v3/media.js"}],"inlinedExternals":[],"unexposedExports":[{"name":"fieldLabel","sourcePath":"components/forms/Input.jsx"},{"name":"fieldStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.OscarShandDesignSystem_798a1a = window.OscarShandDesignSystem_798a1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ArrowMarker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The ↘ that opens a section: the real Remix Icon arrow-right-down-line
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
     painted: the ground's ink as the pill, the ground as the text (oscarshand.com).
     solid : black pill, cream ink.  On gold and cream.
     invert: cream pill, black ink.  On black.
     outline / link: the current ground's ink, no fill. Anywhere.
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
    painted: {
      background: live ? "color-mix(in srgb,var(--on-ground) 86%,var(--ground))" : "var(--on-ground)",
      color: "var(--ground)"
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
   inline (default): the vertical ink rule used inside a title, as in
   "Nichols | Polson & Co". Sized in em so it tracks the type it sits in.
   The drawn bar is aria-hidden, so the component also emits a screen-reader
   separator: without it the two halves of a name run together into one word
   in the accessible name ("NicholsPolson & Co").
   rule: a horizontal structural division in solid ink, not a faint
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
   A soft top sheen and a thin cream edge: no refraction, no iridescence.
   Legal on the sticky nav, the menu / overlay, form fields and the floating
   CTA only. Not cards, not sections, not decoration. */
const STRENGTH = {
  thin: "var(--glass-fill-thin)",
  regular: "var(--glass-fill)",
  heavy: "var(--glass-fill-strong)"
};
function GlassPanel({
  children,
  radius = "var(--r-glass)",
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
   in body copy: gold sets type on black only, and project colours are
   titles and pills: so emphasis is weight, underline or a solid chip. */
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
   even when it is visually hidden: the arrow alone says nothing. */
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
      textTransform: "none",
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
   sit in one inline child so they wrap as a single run: as three flex items
   they detach and the closing bracket strands on its own line. */
function SectionLabel({
  children,
  parenthetical = false,
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
      textTransform: "none",
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
   and black text: the one place a project colour is a fill. `outline` is a
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
/* Painted (v3): an ink outline when off, filled with ink and a ground-coloured ✓
   when on, so it reads on every ground without glass. */
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
      backgroundColor: on ? "var(--on-ground)" : "transparent",
      boxShadow: on ? "none" : "inset 0 0 0 1.5px var(--on-ground)",
      color: "var(--ground)",
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
/* Fields are flat (v4): no fill, no radius, the ground's ink as text, on one ink line
   that thickens on focus. A form is content, so it is never a pill and never glass.
   There is no red in this palette, so an error is carried by a 3px line and a bold
   message rather than by colour. */
const fieldStyle = (focus, error) => ({
  width: "100%",
  minHeight: 52,
  padding: 0,
  borderRadius: 0,
  border: "none",
  borderBottom: "1px solid var(--on-ground)",
  backgroundColor: "transparent",
  color: "var(--on-ground)",
  font: "var(--type-body)",
  outline: "none",
  transition: "box-shadow var(--dur-2) var(--ease-out)",
  boxShadow: error ? "0 3px 0 0 var(--on-ground)" : focus ? "0 2px 0 0 var(--on-ground)" : "none"
});
const fieldLabel = {
  font: "var(--type-label)",
  letterSpacing: "var(--ls-label)",
  textTransform: "none",
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
      padding: "12px 0 0",
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
/* Wordmark left, navigation right: the old site's whole navigation. Pass
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
    fontWeight: "var(--fw-display-medium)",
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
      textTransform: "none",
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
      textTransform: "none",
      color: "var(--on-ground-soft)"
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
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
      textTransform: "none",
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
 * <doc-page>: paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates: up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure: any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING: paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden: letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                     : portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"    : the same, landscape
 *   width / height             : explicit fixed size, ONLY when the user
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
 *   <script src="doc-page.js"><\/script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size: letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export -
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it: letter and A4 alike: without
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
 *   <script src="doc-page.js"><\/script>
 * There is no manual page-splitting: the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size   : letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only: it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print): set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height: the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin : printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height: browsers repeat
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
 *   `column-gap`), never side-by-side flex/grid columns: only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead>: browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body -
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
  // Returns NaN for anything safeLen would reject: callers gate on it.
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
       * thead/tfoot spacers, not the sheet padding: they must go too,
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
         * geometry. A model-authored height:100% did exactly that: the
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
     * construction. overflow:hidden makes .fit-box a scroll container -
     * monolithic under fragmentation (css-break-3): so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint: fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip -
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
       * header/footer needs BEYOND it: page 1 would otherwise double its
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
     *  Only the named size swaps: explicit width/height are exact values
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
     *  the mode is off (either attribute missing/invalid/zero: a partial
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
        // A live deck-stage deferred its own print-sizing meta to ours -
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
      // allowed: print transforms are vector, so text and CSS stay crisp
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
      // Numeric w/h ratio for the paginated page cards' aspect-ratio -
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order: the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share: so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all: the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog: so a
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
      // - true-size: the page IS the design: pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size: but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both): card and
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
      // margin area when room exists: margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins: a
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
     *  rules reach the slotted (light DOM) content: shadow styles can't.
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
     *  scales the sheet into view: without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner: the first connected true-size doc-page: and a
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
     *  probes it to decide what true paper size to inject at print time -
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
      // defers to any existing one: take it over, or the document ends
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
     *  page-per-card stack: content edits can add or remove pages at any
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
      textTransform: "none",
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
      textTransform: "none",
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
  /* On a case study the whole app, nav included, sits on black: gold never
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
      textTransform: "none",
      color: "var(--on-ground-soft)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
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
       block was unreplaced Webflow filler (Amazon, Apple, Nike): these are the
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
     of client voice as {text,name,role}: null until a client has said it. */
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
      body: "Bared was growing quickly, new stores, new product lines, a lot happening at once. Alongside that, they were migrating their eCommerce platform from Lightspeed to Shopify, which touched everything from inventory to reporting."
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
    summary: "A full rebrand and website build for a three-photographer school and sports studio, giving a busy, boots-on-the-ground operation a brand that finally matches the quality of their work.",
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
      body: "Three photographers shooting schools and sports, high volume, tight turnarounds, lots of moving parts. No consistent visual identity, nothing tying the three of them together, and no website that could represent what they offer or make it easy to get in touch."
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
    summary: "A brand refresh and ongoing digital marketing retainer built around a leadership transition, helping Zani step out from the broader Holmwood structure and build something that's properly hers.",
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
      body: "Establish the team as a self-sufficient brand that could stand confidently outside the Holmwood umbrella while remaining part of the network, redesigned collateral, a consistent Instagram presence, and internal tools to support day-to-day operations."
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
    summary: "Rebuilding my own brand from the ground up, moving from a student portfolio into something that actually reflects how I work and what I offer.",
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
      body: "Something considered and minimal, credible enough to send to a client with no explanation needed. Strip the portfolio back to only what matters, be more intentional with the copy, and give the identity a clear point of view without overdoing it."
    }, {
      kind: "Result",
      head: "A cleaner, more confident presence",
      body: "The site is quieter, more focused, and a better reflection of how I approach the work. It's an ongoing project, the brand evolves as the business does, and it's now being rebuilt again as oscarshand.com."
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
    summary: "An experimental online store built around an A/W 2023 collection of custom AI-designed clothing and prints, conceived, launched, and sold out in three months.",
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
      body: "The AI-generated work had been building for a while, surrealist architecture, editorial fashion, metallic figure studies, but it was all sitting in folders. The question was whether there was an audience, and how to get to market without a production team or a warehouse."
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
    summary: "Designer and digital marketing specialist running my own studio, with a corporate background in legal operations and IT support. I move between creative execution and the practical side of a business, billing, systems, reporting, process, which is a combination I'm comfortable being hired for either way.",
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
      dates: "Apr 2023, Present",
      location: "Christchurch, NZ · Hybrid",
      points: ["Run my own creative studio: web design, social media management, photography, videography and marketing materials.", "Design and build websites, portfolios and Shopify stores for small businesses, creatives and real estate teams.", "Build content systems, templates and workflows so client output stays consistent.", "Scope, deliver and refine projects directly with clients."]
    }, {
      role: "Business Development",
      org: "BF Property",
      type: "Contract",
      dates: "May 2026, Jul 2026",
      location: "Christchurch, NZ",
      points: ["Rebrand across print, digital and signage.", "Webflow site build with CMS-managed listings.", "Marketing infrastructure: enquiry capture, templates and reporting."]
    }, {
      role: "Business Development",
      org: "Pronto Coffee",
      type: "Contract",
      dates: "Feb 2026, Jul 2026",
      location: "Christchurch, NZ · On-site",
      points: ["Hand-coded website with custom JavaScript interactions for a nationwide self-serve coffee rollout.", "Dual-path structure serving B2B venues and retail customers from one page.", "Proposal flow built to qualify venue enquiries."]
    }, {
      role: "Social Media Manager",
      org: "Nichols | Polson & Co, Harcourts Holmwood",
      type: "Contract",
      dates: "Mar 2025, Jul 2026",
      location: "Christchurch, NZ · Hybrid",
      points: ["Content strategy, graphic design and social media for a leading Christchurch real estate agency.", "Weekly posting aligned to campaign activity, caption writing and content planning.", "Property video filming, listing photo editing, and a custom internal listings database."]
    }, {
      role: "Team Assistant",
      org: "Ashurst",
      type: "Full-time",
      dates: "Feb 2024, Feb 2025",
      location: "Melbourne, VIC · On-site",
      points: ["Supported partners and legal teams across expenses, billing, document production, legal searches, reporting, event logistics and onboarding.", "Managed billing for high-profile clients including major banks, government departments and global companies.", "Coordinated lawyer time entries, disbursements and client-specific billing requirements.", "Maintained accuracy and compliance across financial documentation."]
    }, {
      role: "Sales Assistant",
      org: "Bared Footwear",
      type: "Part-time",
      dates: "Apr 2023, Feb 2024",
      location: "Melbourne, VIC · On-site",
      points: ["Tailored fitting and style guidance with a focus on podiatry needs: orthotics, gait and injury support.", "Social content and product photography across Instagram, Facebook and TikTok.", "Contributed to the Lightspeed → Shopify migration, improving inventory and reporting.", "Handled returns, stock queries and customer concerns."]
    }, {
      role: "Census Collector",
      org: "Stats NZ",
      type: "Contract",
      dates: "Feb 2023, Apr 2023",
      location: "Christchurch, NZ",
      points: ["Field-based data collection across diverse communities, managing my own caseload.", "Supported teammates with systems and troubleshooting.", "Tracked non-response patterns to improve follow-up."]
    }, {
      role: "Helpdesk Support Analyst",
      org: "New Zealand Film Commission",
      type: "Contract",
      dates: "May 2022, Dec 2022",
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
    certifications: ["Business Analysis Foundations, LinkedIn, 2024", "Generative AI Productivity Skills, Microsoft & LinkedIn, 2024"],
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

// components/v3/liquid-glass-engine.js
/* Oscar Shand: Liquid Glass engine (v3).
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

// components/v3/components.js
/* ── v3: Liquid Glass components ─────────────────────────────────────────────
   Glass controls, Apple-style page sections and media components, built on the
   Liquid Glass engine above (window.LiquidGlass). Plain React.createElement, no JSX. */
(function () {
  "use strict";
  var ns = (window.OscarShandDesignSystem_798a1a = window.OscarShandDesignSystem_798a1a || {});
  ns.__errors = ns.__errors || [];
  var React = window.React;
  if (!React) { ns.__errors.push({ path: "components/v3", error: "React is not loaded" }); return; }
  var h = React.createElement, useRef = React.useRef, useEffect = React.useEffect, useState = React.useState, useLayoutEffect = React.useLayoutEffect || React.useEffect;
  var reduced = function () { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); };
  var assign = function () { return Object.assign.apply(Object, [{}].concat([].slice.call(arguments))); };
  var omit = function (o, keys) { var r = {}; for (var k in o) if (keys.indexOf(k) < 0) r[k] = o[k]; return r; };
  var SR = { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" };
  var safe = function (path, fn) { try { fn(); } catch (e) { ns.__errors.push({ path: path, error: String((e && e.message) || e) }); } };

  /* ── Icon: Remix Icon paths, line weight, 24 grid ── */
  var ICONS = {"arrow-right-down-line": "M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z", "arrow-right-up-line": "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z", "arrow-left-line": "M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z", "arrow-right-line": "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z", "arrow-left-s-line": "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z", "arrow-right-s-line": "M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z", "arrow-up-s-line": "M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z", "arrow-down-s-line": "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z", "close-line": "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z", "menu-line": "M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z", "search-line": "M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z", "share-forward-line": "M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z", "heart-line": "M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z", "heart-fill": "M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z", "play-fill": "M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z", "pause-fill": "M6 5H8V19H6V5ZM16 5H18V19H16V5Z", "volume-up-line": "M6.60282 10.0001L10 7.22056V16.7796L6.60282 14.0001H3V10.0001H6.60282ZM2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z", "volume-mute-line": "M10 7.22056L6.60282 10.0001H3V14.0001H6.60282L10 16.7796V7.22056ZM5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z", "fullscreen-line": "M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z", "grid-line": "M14 10H10V14H14V10ZM16 10V14H19V10H16ZM14 19V16H10V19H14ZM16 19H19V16H16V19ZM14 5H10V8H14V5ZM16 5V8H19V5H16ZM8 10H5V14H8V10ZM8 19V16H5V19H8ZM8 5H5V8H8V5ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z", "list-unordered": "M8 4H21V6H8V4ZM4.5 6.5C3.67157 6.5 3 5.82843 3 5C3 4.17157 3.67157 3.5 4.5 3.5C5.32843 3.5 6 4.17157 6 5C6 5.82843 5.32843 6.5 4.5 6.5ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5C5.32843 10.5 6 11.1716 6 12C6 12.8284 5.32843 13.5 4.5 13.5ZM4.5 20.4C3.67157 20.4 3 19.7284 3 18.9C3 18.0716 3.67157 17.4 4.5 17.4C5.32843 17.4 6 18.0716 6 18.9C6 19.7284 5.32843 20.4 4.5 20.4ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z", "home-5-line": "M13 19H19V9.97815L12 4.53371L5 9.97815V19H11V13H13V19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20Z", "briefcase-4-line": "M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM9 13H4V19H20V13H15V16H9V13ZM20 7H4V11H9V9H15V11H20V7ZM11 11V14H13V11H11ZM9 3V5H15V3H9Z", "user-3-line": "M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z", "mail-line": "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z", "add-line": "M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z", "subtract-line": "M5 11V13H19V11H5Z", "sun-line": "M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z", "contrast-2-line": "M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM12 19.9967C16.4183 19.9967 20 16.415 20 11.9967C20 7.57843 16.4183 3.9967 12 3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967ZM7.00035 15.316C9.07995 15.1646 11.117 14.2939 12.7071 12.7038C14.2972 11.1137 15.1679 9.07666 15.3193 6.99706C15.6454 7.21408 15.955 7.46642 16.2426 7.75406C18.5858 10.0972 18.5858 13.8962 16.2426 16.2393C13.8995 18.5825 10.1005 18.5825 7.75736 16.2393C7.46971 15.9517 7.21738 15.6421 7.00035 15.316Z", "drop-line": "M12 3.09723L7.05025 8.04697C4.31658 10.7806 4.31658 15.2128 7.05025 17.9465C9.78392 20.6801 14.2161 20.6801 16.9497 17.9465C19.6834 15.2128 19.6834 10.7806 16.9497 8.04697L12 3.09723ZM12 0.268799L18.364 6.63276C21.8787 10.1475 21.8787 15.846 18.364 19.3607C14.8492 22.8754 9.15076 22.8754 5.63604 19.3607C2.12132 15.846 2.12132 10.1475 5.63604 6.63276L12 0.268799Z", "image-line": "M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z", "film-line": "M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 5V19H16V5H8ZM4 5V7H6V5H4ZM18 5V7H20V5H18ZM4 9V11H6V9H4ZM18 9V11H20V9H18ZM4 13V15H6V13H4ZM18 13V15H20V13H18ZM4 17V19H6V17H4ZM18 17V19H20V17H18Z", "check-line": "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z", "arrow-left-right-line": "M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z", "instagram-line": "M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z", "twitter-fill": "M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z", "dribbble-line": "M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z", "linkedin-box-line": "M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z", "map-pin-line": "M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z", "apps-2-line": "M7 11.5C4.51472 11.5 2.5 9.48528 2.5 7C2.5 4.51472 4.51472 2.5 7 2.5C9.48528 2.5 11.5 4.51472 11.5 7C11.5 9.48528 9.48528 11.5 7 11.5ZM7 21.5C4.51472 21.5 2.5 19.4853 2.5 17C2.5 14.5147 4.51472 12.5 7 12.5C9.48528 12.5 11.5 14.5147 11.5 17C11.5 19.4853 9.48528 21.5 7 21.5ZM17 11.5C14.5147 11.5 12.5 9.48528 12.5 7C12.5 4.51472 14.5147 2.5 17 2.5C19.4853 2.5 21.5 4.51472 21.5 7C21.5 9.48528 19.4853 11.5 17 11.5ZM17 21.5C14.5147 21.5 12.5 19.4853 12.5 17C12.5 14.5147 14.5147 12.5 17 12.5C19.4853 12.5 21.5 14.5147 21.5 17C21.5 19.4853 19.4853 21.5 17 21.5ZM7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5ZM7 19.5C8.38071 19.5 9.5 18.3807 9.5 17C9.5 15.6193 8.38071 14.5 7 14.5C5.61929 14.5 4.5 15.6193 4.5 17C4.5 18.3807 5.61929 19.5 7 19.5ZM17 9.5C18.3807 9.5 19.5 8.38071 19.5 7C19.5 5.61929 18.3807 4.5 17 4.5C15.6193 4.5 14.5 5.61929 14.5 7C14.5 8.38071 15.6193 9.5 17 9.5ZM17 19.5C18.3807 19.5 19.5 18.3807 19.5 17C19.5 15.6193 18.3807 14.5 17 14.5C15.6193 14.5 14.5 15.6193 14.5 17C14.5 18.3807 15.6193 19.5 17 19.5Z"};
  function Icon(p) {
    var d = ICONS[p.name] || ICONS["arrow-right-down-line"], size = p.size || 24;
    return h("svg", assign({ viewBox: "0 0 24 24", width: size, height: size, fill: "currentColor", "aria-hidden": p.label ? undefined : "true", role: p.label ? "img" : undefined, "aria-label": p.label, focusable: "false", style: assign({ display: "block", flex: "0 0 auto" }, p.style) }), h("path", { d: d }));
  }
  Icon.names = Object.keys(ICONS);

  /* ── LiquidGlass: the primitive every glass control is built from ── */
  var LIQUID_KEYS = ["as", "variant", "shape", "radius", "refraction", "chroma", "blur", "media", "interactive", "glyph", "tone", "children", "style", "className", "glassRef"];
  function LiquidGlass(p) {
    var variant = p.variant || "regular", shape = p.shape || "rounded";
    var radius = p.radius != null ? p.radius : shape === "capsule" ? "var(--r-pill)" : shape === "circle" ? "50%" : shape === "bar" ? 0 : "var(--r-lg)";
    var ref = useRef(null);
    useEffect(function () {
      var el = ref.current; if (p.glassRef) p.glassRef.current = el;
      if (!el || !window.LiquidGlass) return;
      var m = p.media && Object.prototype.hasOwnProperty.call(p.media, "current") ? p.media.current : p.media;
      return window.LiquidGlass.attach(el, { variant: variant, refraction: p.refraction, chroma: p.chroma, blur: p.blur, media: m || undefined });
    }, [variant, p.refraction, p.chroma, p.blur, p.media]);
    var rest = omit(p, LIQUID_KEYS);
    return h(p.as || "div", assign(rest, {
      ref: ref, className: p.className,
      "data-lg-variant": variant,
      "data-lg-press": p.interactive ? "" : undefined,
      "data-lg-ink": p.glyph ? "glyph" : undefined,
      "data-lg-tone": p.tone, "data-lg-tone-fixed": p.tone ? "" : undefined,
      style: assign({ borderRadius: radius }, p.style)
    }), p.children);
  }

  /* a transparent button that lives on glass and inherits its ink */
  function GlassButton(p) {
    var hover = useState(false), on = hover[0], setOn = hover[1];
    var size = p.size || 44, active = !!p.active;
    var fill = active ? 18 : on ? 10 : 0;
    return h("button", assign(omit(p, ["icon", "iconSize", "label", "showLabel", "active", "size", "style", "toggle"]), {
      type: "button", "aria-label": p.showLabel ? undefined : p.label, "aria-pressed": p.toggle ? active : undefined,
      onMouseEnter: function () { setOn(true); }, onMouseLeave: function () { setOn(false); },
      style: assign({ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, minWidth: size, height: size, padding: p.showLabel ? "0 14px" : 0, border: "none", borderRadius: "var(--r-pill)", cursor: "pointer", color: "inherit", font: "var(--type-body-sm)", fontWeight: "var(--fw-medium)", background: "color-mix(in srgb,currentColor " + fill + "%,transparent)", transition: "background var(--dur-2) var(--ease-out),transform var(--dur-3) var(--ease-spring)" }, p.style)
    }), p.icon ? h(Icon, { name: p.icon, size: p.iconSize || 22 }) : null, p.showLabel ? h("span", null, p.label) : null);
  }

  /* ── GlassToolbar ── */
  function GlassToolbar(p) {
    var groups = p.groups || [p.items || []];
    var kids = [];
    groups.forEach(function (g, gi) {
      if (gi > 0) kids.push(h("span", { key: "sep" + gi, "aria-hidden": "true", style: { width: 1, alignSelf: "stretch", margin: "10px 4px", background: "currentColor", opacity: 0.2 } }));
      g.forEach(function (it, ii) { kids.push(h(GlassButton, assign(it, { key: gi + "-" + ii }))); });
    });
    return h(LiquidGlass, { variant: p.variant || "regular", shape: "capsule", media: p.media, role: "toolbar", "aria-label": p.label || "Toolbar", style: assign({ display: "inline-flex", alignItems: "center", gap: 2, padding: 6 }, p.style) }, kids);
  }

  /* a sliding selection lens shared by the tab bar and the segmented control */
  function useLens(count, index) {
    var track = useRef(null), refs = useRef([]), st = useState(null), box = st[0], setBox = st[1];
    useLayoutEffect(function () {
      var measure = function () { var el = refs.current[index]; if (el) setBox({ left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight }); };
      measure();
      var ro = typeof ResizeObserver === "function" && track.current ? new ResizeObserver(measure) : null;
      if (ro) ro.observe(track.current);
      return function () { if (ro) ro.disconnect(); };
    }, [index, count]);
    return { track: track, refs: refs, box: box };
  }
  function lensStyle(box) {
    return box ? { position: "absolute", left: box.left, top: box.top, width: box.width, height: box.height, borderRadius: "var(--r-pill)", background: "color-mix(in srgb,currentColor 15%,transparent)", boxShadow: "inset 0 0 0 1px color-mix(in srgb,currentColor 16%,transparent),inset 0 1px 0 color-mix(in srgb,var(--cream) 30%,transparent)", transition: reduced() ? "none" : "left var(--dur-3) var(--ease-spring),width var(--dur-3) var(--ease-spring)", pointerEvents: "none", zIndex: 0 } : { display: "none" };
  }

  /* ── GlassTabBar ── */
  function GlassTabBar(p) {
    var items = p.items || [];
    var own = useState(p.defaultValue != null ? p.defaultValue : items[0] && items[0].value), cur = p.value != null ? p.value : own[0];
    var idx = Math.max(0, items.findIndex(function (it) { return it.value === cur; }));
    var lens = useLens(items.length, idx);
    var pick = function (v) { if (p.value == null) own[1](v); if (p.onChange) p.onChange(v); };
    return h(LiquidGlass, { variant: p.variant || "regular", shape: "capsule", media: p.media, style: assign({ display: "inline-flex", padding: 4 }, p.style) },
      h("div", { ref: lens.track, role: "tablist", "aria-label": p.label || "Sections", style: { position: "relative", display: "flex", gap: 2 } },
        h("span", { "aria-hidden": "true", style: lensStyle(lens.box) }),
        items.map(function (it, i) {
          var on = i === idx;
          return h("button", { key: it.value, ref: function (el) { lens.refs.current[i] = el; }, type: "button", role: "tab", "aria-selected": on, onClick: function () { pick(it.value); },
            style: { position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, minWidth: 68, height: 54, padding: "0 12px", border: "none", borderRadius: "var(--r-pill)", background: "transparent", color: "inherit", cursor: "pointer", font: "var(--fw-semibold) 10px/1.2 var(--font-body)", letterSpacing: "0.01em", opacity: on ? 1 : 0.78 } },
            it.icon ? h(Icon, { name: it.icon, size: 24 }) : null, h("span", null, it.label));
        })));
  }

  /* ── SegmentedControl ── */
  function SegmentedControl(p) {
    var opts = p.options || [];
    var own = useState(p.defaultValue != null ? p.defaultValue : opts[0] && opts[0].value), cur = p.value != null ? p.value : own[0];
    var idx = Math.max(0, opts.findIndex(function (o) { return o.value === cur; }));
    var lens = useLens(opts.length, idx);
    var hgt = p.size === "sm" ? 30 : p.size === "lg" ? 44 : 36;
    var pick = function (v) { if (p.value == null) own[1](v); if (p.onChange) p.onChange(v); };
    var key = function (e) { var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!d) return; e.preventDefault(); var n = (idx + d + opts.length) % opts.length; pick(opts[n].value); var el = lens.refs.current[n]; if (el) el.focus(); };
    return h(LiquidGlass, { variant: p.variant || "regular", shape: "capsule", media: p.media, style: assign({ display: "inline-flex", padding: 3 }, p.style) },
      h("div", { ref: lens.track, role: "radiogroup", "aria-label": p.label, onKeyDown: key, style: { position: "relative", display: "flex" } },
        h("span", { "aria-hidden": "true", style: lensStyle(lens.box) }),
        opts.map(function (o, i) {
          var on = i === idx;
          return h("button", { key: o.value, ref: function (el) { lens.refs.current[i] = el; }, type: "button", role: "radio", "aria-checked": on, tabIndex: on ? 0 : -1, onClick: function () { pick(o.value); },
            style: { position: "relative", zIndex: 1, height: hgt, padding: "0 " + (hgt * 0.5) + "px", border: "none", borderRadius: "var(--r-pill)", background: "transparent", color: "inherit", cursor: "pointer", font: "var(--type-body-sm)", fontSize: hgt < 34 ? "var(--fs-xs)" : "var(--fs-sm)", fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)", whiteSpace: "nowrap" } }, o.label);
        })));
  }

  /* ── Switch: painted track; the knob turns to glass while it's held ── */
  function Switch(p) {
    var own = useState(!!p.defaultChecked), on = p.checked != null ? p.checked : own[0];
    var act = useState(false), held = act[0], setHeld = act[1];
    var flip = function () { if (p.disabled) return; var v = !on; if (p.checked == null) own[1](v); if (p.onChange) p.onChange(v); };
    var knobW = held ? 33 : 27;
    return h("label", { style: assign({ display: "inline-flex", alignItems: "center", gap: "var(--sp-4)", minHeight: "var(--hit-min)", cursor: p.disabled ? "not-allowed" : "pointer", opacity: p.disabled ? 0.4 : 1, color: "var(--on-ground)", font: "var(--type-body-sm)" }, p.style) },
      p.label ? h("span", null, p.label) : null,
      h("button", { type: "button", role: "switch", "aria-checked": on, "aria-label": p.label ? undefined : p.ariaLabel, disabled: p.disabled, onClick: flip,
        onPointerDown: function () { setHeld(true); }, onPointerUp: function () { setHeld(false); }, onPointerLeave: function () { setHeld(false); },
        style: { position: "relative", width: 51, height: 31, flex: "0 0 auto", padding: 0, border: "none", borderRadius: "var(--r-pill)", cursor: "inherit", background: on ? "var(--on-ground)" : "transparent", boxShadow: on ? "none" : "inset 0 0 0 1.5px var(--on-ground)", transition: "background var(--dur-2) var(--ease-out)" } },
        h(LiquidGlass, { variant: "clear", shape: "capsule", tone: on ? "dark" : "light", style: { position: "absolute", top: 2, left: on ? 51 - 2 - knobW : 2, width: knobW, height: 27, background: held ? undefined : (on ? "var(--ground)" : "var(--on-ground)"), transform: held ? "scale(1.12)" : "none", transition: reduced() ? "none" : "left var(--dur-3) var(--ease-spring),width var(--dur-3) var(--ease-spring),transform var(--dur-3) var(--ease-spring),background var(--dur-2) var(--ease-out)" } })));
  }

  /* ── Slider: hairline track, ink fill; the knob turns to glass while dragged ── */
  function Slider(p) {
    var min = p.min != null ? p.min : 0, max = p.max != null ? p.max : 100, step = p.step || 1;
    var own = useState(p.defaultValue != null ? p.defaultValue : min), val = p.value != null ? p.value : own[0];
    var act = useState(false), held = act[0], setHeld = act[1];
    var pct = (val - min) / (max - min) * 100;
    var set = function (e) { var v = parseFloat(e.target.value); if (p.value == null) own[1](v); if (p.onChange) p.onChange(v); };
    return h("label", { style: assign({ display: "flex", flexDirection: "column", gap: "var(--sp-3)", color: "var(--on-ground)", width: p.width || 280 }, p.style) },
      p.label ? h("span", { style: { display: "flex", justifyContent: "space-between", font: "var(--type-label)", letterSpacing: "var(--ls-label)", textTransform: "none", color: "var(--on-ground-soft)" } }, h("span", null, p.label), p.format ? h("span", { className: "tabular" }, p.format(val)) : null) : null,
      h("span", { style: { position: "relative", display: "block", height: 30 } },
        h("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, right: 0, top: 13, height: 4, borderRadius: "var(--r-pill)", background: "var(--hairline-strong)" } }),
        h("span", { "aria-hidden": "true", style: { position: "absolute", left: 0, width: pct + "%", top: 13, height: 4, borderRadius: "var(--r-pill)", background: "var(--on-ground)" } }),
        h(LiquidGlass, { variant: "clear", shape: "capsule", tone: "light", "aria-hidden": "true", style: { position: "absolute", top: held ? 1 : 4, left: "calc(" + pct + "% - " + (held ? 22 : 19) * (pct / 100) + "px)", width: held ? 44 : 38, height: held ? 28 : 22, background: held ? undefined : "var(--cream)", boxShadow: held ? undefined : "0 0.5px 2px rgba(20,20,22,.28),0 4px 12px -2px rgba(20,20,22,.22)", pointerEvents: "none", transition: reduced() ? "none" : "width var(--dur-3) var(--ease-spring),height var(--dur-3) var(--ease-spring),top var(--dur-3) var(--ease-spring),background var(--dur-2) var(--ease-out)" } }),
        h("input", { type: "range", min: min, max: max, step: step, value: val, onChange: set, "aria-label": p.label || p.ariaLabel, disabled: p.disabled,
          onPointerDown: function () { setHeld(true); }, onPointerUp: function () { setHeld(false); }, onBlur: function () { setHeld(false); },
          style: { position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "pointer" } })));
  }

  /* ── GlassSheet: a bottom sheet or a popover, regular glass ── */
  function GlassSheet(p) {
    useEffect(function () {
      if (!p.open || p.inline) return;
      var k = function (e) { if (e.key === "Escape" && p.onClose) p.onClose(); };
      window.addEventListener("keydown", k);
      return function () { window.removeEventListener("keydown", k); };
    }, [p.open, p.inline]);
    if (!p.open) return null;
    var pop = p.mode === "popover";
    var panel = h(LiquidGlass, { variant: "regular", radius: "var(--r-glass)", media: p.media, role: "dialog", "aria-modal": p.inline ? undefined : "true", "aria-label": p.title,
      style: assign(pop ? { width: p.width || 320, padding: "var(--sp-5)" } : { width: "min(" + (p.width || 560) + "px, calc(100% - 16px))", padding: "10px var(--sp-6) var(--sp-7)" },
        p.inline ? { position: "relative" } : pop ? { position: "fixed", zIndex: 70 } : { position: "fixed", zIndex: 70, left: "50%", bottom: 8, transform: "translateX(-50%)" }, p.style) },
      pop ? null : h("span", { "aria-hidden": "true", style: { display: "block", width: 36, height: 5, margin: "0 auto var(--sp-4)", borderRadius: "var(--r-pill)", background: "currentColor", opacity: 0.3 } }),
      h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--sp-5)", marginBottom: "var(--sp-4)" } },
        h("span", { style: { font: "var(--type-title)" } }, p.title),
        p.onClose || p.inline ? h(GlassButton, { icon: "close-line", label: "Close", size: 32, iconSize: 18, onClick: p.onClose, autoFocus: !p.inline, style: { background: "color-mix(in srgb,currentColor 12%,transparent)" } }) : null),
      h("div", { style: { font: "var(--type-body-sm)", color: "var(--lg-ink-soft)" } }, p.children));
    if (p.inline || pop) return panel;
    return h(React.Fragment, null, h("div", { "aria-hidden": "true", onClick: p.onClose, style: { position: "fixed", inset: 0, zIndex: 69, background: "color-mix(in srgb,var(--black) 24%,transparent)" } }), panel);
  }

  /* ── NavIsland: the live site's floating capsule nav ── */
  function NavIsland(p) {
    var items = p.items || [];
    var linkStyle = function (on) { return { display: "inline-flex", alignItems: "center", height: 36, padding: "0 14px", borderRadius: "var(--r-pill)", font: "var(--type-body-sm)", fontWeight: "var(--fw-medium)", color: "inherit", textDecoration: "none", background: on ? "color-mix(in srgb,currentColor 15%,transparent)" : "transparent" }; };
    return h(LiquidGlass, { as: "nav", variant: p.variant || "clear", shape: "capsule", media: p.media, "aria-label": p.label || "Primary",
      style: assign({ position: p.sticky === false ? "relative" : "sticky", top: "var(--nav-island-top)", zIndex: 40, display: "flex", alignItems: "center", gap: "var(--sp-5)", width: "fit-content", maxWidth: "calc(100% - 2 * var(--page-gutter))", margin: "var(--nav-island-top) auto 0", padding: "4px 4px 4px 20px", minHeight: "var(--nav-h)" }, p.style) },
      h("a", { href: p.href || "/", style: { font: "var(--fw-display-medium) 17px/1 var(--font-display)", letterSpacing: "var(--ls-heading)", color: "inherit", textDecoration: "none", whiteSpace: "nowrap" } }, p.brand || "Oscar Shand"),
      p.compact || !items.length
        ? h(GlassButton, { label: p.menuLabel || "Menu", showLabel: true, size: 36, onClick: p.onMenu, style: { background: "color-mix(in srgb,currentColor 15%,transparent)" } })
        : h("div", { style: { display: "flex", gap: 2 } }, items.map(function (it) { var on = it.label === p.active; return h("a", { key: it.label, href: it.href, "aria-current": on ? "page" : undefined, style: linkStyle(on) }, it.label); })));
  }

  /* painted action: the ground's ink as the surface, the ground as the text (the live data-glass="btn") */
  function Action(p) {
    var hv = useState(false);
    var link = p.variant === "link";
    var base = link
      ? { display: "inline-flex", alignItems: "center", gap: 8, font: "var(--type-body)", fontWeight: "var(--fw-medium)", color: "var(--on-ground)", textDecoration: hv[0] ? "underline" : "none", textDecorationThickness: "1.5px", textUnderlineOffset: "4px" }
      : { display: "inline-flex", alignItems: "center", gap: 10, height: p.size === "sm" ? 32 : 44, padding: p.size === "sm" ? "0 14px" : "0 22px", borderRadius: "var(--r-pill)", background: "var(--on-ground)", color: "var(--ground)", font: "var(--type-body-sm)", fontSize: p.size === "sm" ? "var(--fs-xs)" : "var(--fs-sm)", fontWeight: "var(--fw-medium)", textDecoration: "none", transform: hv[0] ? "var(--hover-shift)" : "none", transition: "transform var(--dur-2) var(--ease-out)" };
    return h("a", { href: p.href || "#", onClick: p.onClick, onMouseEnter: function () { hv[1](true); }, onMouseLeave: function () { hv[1](false); }, style: assign(base, p.style) },
      p.label, p.arrow === false ? null : h("span", { "aria-hidden": "true", style: { display: "inline-block", transition: "transform var(--dur-2) var(--ease-out)", transform: hv[0] ? "translate3d(3px,3px,0)" : "none" } }, "↘"));
  }

  /* ground props shared by sections and tiles: ground="gold|cream|dark" or project="<key>" */
  function groundProps(p) {
    if (p.project) return { className: "ground-dark ground-project" + (p.className ? " " + p.className : ""), "data-project": p.project };
    if (p.ground) return { className: "ground-" + p.ground + (p.className ? " " + p.className : "") };
    return { className: p.className };
  }

  /* ── HeroSection: centred, product-style ── */
  function HeroSection(p) {
    var gp = groundProps(p), media = p.media, actions = p.actions || [];
    return h("section", assign(gp, { style: assign({ paddingTop: "var(--section-gap)", paddingBottom: media ? 0 : "var(--section-gap)", textAlign: p.align === "left" ? "left" : "center", overflow: "hidden" }, p.style) }),
      h("div", { className: "shell", style: { display: "flex", flexDirection: "column", alignItems: p.align === "left" ? "flex-start" : "center", gap: "var(--sp-4)", maxWidth: "var(--content-narrow)" } },
        p.kicker ? h("p", { style: { font: "var(--type-kicker)", letterSpacing: "var(--ls-intro)", color: p.project ? "var(--on-ground)" : "var(--on-ground)", margin: 0 } }, p.kicker) : null,
        h(p.as || "h2", { style: { font: "var(--type-headline)", letterSpacing: "var(--ls-headline)", color: "var(--on-ground)", margin: 0, textWrap: "balance" } }, p.title),
        p.intro ? h("p", { style: { font: "var(--type-intro)", letterSpacing: "var(--ls-intro)", color: "var(--on-ground-soft)", margin: 0, maxWidth: "34ch", textWrap: "balance" } }, p.intro) : null,
        actions.length ? h("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: p.align === "left" ? "flex-start" : "center", gap: "var(--sp-6)", marginTop: "var(--sp-5)" } }, actions.map(function (a, i) { return h(Action, assign(a, { key: i, variant: i === 0 ? a.variant : a.variant || "link" })); })) : null),
      media ? h("figure", { style: { margin: "var(--sp-9) 0 0" } },
        media.kind === "video"
          ? h("video", { src: media.src, poster: media.poster, muted: true, loop: true, playsInline: true, autoPlay: !reduced(), "aria-label": media.alt, style: { display: "block", width: "100%", maxHeight: media.height || "72vh", objectFit: "cover" } })
          : h("img", { src: media.src, alt: media.alt || "", loading: "lazy", style: { display: "block", width: p.bleed === false ? "min(100% - 2 * var(--page-gutter), var(--page-max))" : "100%", margin: "0 auto", maxHeight: media.height || "72vh", objectFit: "cover", borderRadius: p.bleed === false ? "var(--r-lg)" : 0 } })) : null);
  }

  /* ── PromoTile and TileGrid ── */
  function PromoTile(p) {
    var gp = groundProps(p), actions = p.actions || [];
    return h("article", assign(gp, { style: assign({ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", overflow: "hidden", minHeight: p.height || "clamp(460px, 46vw, 640px)", paddingTop: "var(--sp-9)", borderRadius: p.radius != null ? p.radius : "var(--r-lg)", gridColumn: p.span === 2 ? "1 / -1" : undefined }, p.style) }),
      h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--sp-3)", padding: "0 var(--sp-6)", maxWidth: 640 } },
        p.kicker ? h("p", { style: { font: "var(--type-kicker)", fontSize: "var(--fs-md)", letterSpacing: "var(--ls-intro)", margin: 0, color: "var(--on-ground)" } }, p.kicker) : null,
        h("h3", { style: { font: "var(--type-tile)", letterSpacing: "var(--ls-headline)", margin: 0, color: "var(--on-ground)", textWrap: "balance" } }, p.title),
        p.intro ? h("p", { style: { font: "var(--type-intro)", fontSize: "clamp(17px,1.5vw,21px)", letterSpacing: "var(--ls-intro)", margin: 0, color: "var(--on-ground-soft)", textWrap: "balance" } }, p.intro) : null,
        actions.length ? h("div", { style: { display: "flex", gap: "var(--sp-5)", marginTop: "var(--sp-4)", flexWrap: "wrap", justifyContent: "center" } }, actions.map(function (a, i) { return h(Action, assign(a, { key: i, size: "sm", variant: i === 0 ? a.variant : a.variant || "link", style: i === 0 ? null : { font: "var(--type-body-sm)", fontWeight: "var(--fw-medium)" } })); })) : null),
      p.image ? h("div", { style: { flex: "1 1 auto", width: "100%", marginTop: "var(--sp-7)", minHeight: 200, position: "relative" } },
        h("img", { src: p.image, alt: p.imageAlt || "", loading: "lazy", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: p.fit || "cover", objectPosition: p.position || "center top" } })) : null);
  }
  function TileGrid(p) {
    return h("div", { className: "os-tiles", style: assign({ display: "grid", gridTemplateColumns: "repeat(" + (p.columns || 2) + ", minmax(0,1fr))", gap: "var(--tile-gap)", padding: p.inset === false ? 0 : "0 var(--tile-gap)" }, p.style) }, p.children);
  }

  /* ── LocalNav: the sticky sub-nav; frosted, no refraction (macOS 27's toolbar look) ── */
  function LocalNav(p) {
    var links = p.links || [], st = useState(false), open = st[0], setOpen = st[1];
    var nar = useState(false), narrow = nar[0];
    useEffect(function () { if (!window.matchMedia) return; var m = window.matchMedia("(max-width: 734px)"); var f = function () { nar[1](m.matches); }; f(); m.addEventListener ? m.addEventListener("change", f) : m.addListener(f); return function () { m.removeEventListener ? m.removeEventListener("change", f) : m.removeListener(f); }; }, []);
    var linkEls = links.map(function (l) { return h("a", { key: l.label, href: l.href, "aria-current": l.active ? "page" : undefined, style: { font: "var(--type-caption)", fontSize: "var(--fs-2xs)", color: "inherit", opacity: l.active ? 0.56 : 1, textDecoration: "none", padding: narrow ? "10px 0" : 0 } }, l.label); });
    return h(LiquidGlass, { as: "nav", variant: "regular", shape: "bar", refraction: 0, chroma: 0, "aria-label": p.label || (p.title + " sections"), style: assign({ position: p.sticky === false ? "relative" : "sticky", top: p.top || 0, zIndex: 38, borderBottom: "1px solid var(--hairline)" }, p.style) },
      h("div", { className: "shell", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--sp-6)", height: "var(--subnav-h)" } },
        h("span", { style: { font: "var(--fw-display-medium) 21px/1 var(--font-display)", letterSpacing: "var(--ls-intro)", whiteSpace: "nowrap" } }, p.title),
        h("div", { style: { display: "flex", alignItems: "center", gap: "var(--sp-6)" } },
          narrow ? h("button", { type: "button", "aria-expanded": open, "aria-label": "Show sections", onClick: function () { setOpen(!open); }, style: { border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 4, transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-3) var(--ease-spring)" } }, h(Icon, { name: "arrow-down-s-line", size: 22 })) : linkEls,
          p.cta ? h("a", { href: p.cta.href || "#", style: { display: "inline-flex", alignItems: "center", height: 28, padding: "0 12px", borderRadius: "var(--r-pill)", background: "var(--lg-ink)", color: "color-mix(in srgb,var(--lg-tone) 100%,transparent)", font: "var(--fw-medium) 12px/1 var(--font-body)", textDecoration: "none", textShadow: "none" } }, p.cta.label) : null)),
      narrow && open ? h("div", { className: "shell", style: { display: "flex", flexDirection: "column", paddingBottom: "var(--sp-4)", borderTop: "1px solid var(--hairline)" } }, linkEls) : null);
  }

  /* ── FeatureRow: highlights ── */
  function FeatureRow(p) {
    var items = p.items || [];
    return h("div", { style: assign({ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(" + (p.min || 220) + "px, 1fr))", gap: "var(--sp-8) var(--sp-7)" }, p.style) },
      items.map(function (it, i) {
        return h("div", { key: i, style: { display: "flex", flexDirection: "column", gap: "var(--sp-3)", color: "var(--on-ground)" } },
          it.icon ? h(Icon, { name: it.icon, size: 32, style: { marginBottom: "var(--sp-3)" } }) : null,
          it.value != null ? h("span", { className: "tabular", style: { display: "flex", alignItems: "baseline", gap: 4, fontFamily: "var(--font-display)", fontWeight: "var(--fw-display-medium)", fontSize: "var(--fs-4xl)", lineHeight: 0.95, letterSpacing: "var(--ls-display)" } }, it.value, it.unit ? h("span", { style: { fontSize: "var(--fs-xl)" } }, it.unit) : null) : null,
          it.title ? h("h4", { style: { font: "var(--type-title)", margin: 0 } }, it.title) : null,
          it.body ? h("p", { style: { font: "var(--type-body-sm)", color: "var(--on-ground-soft)", margin: 0, maxWidth: "36ch" } }, it.body) : null);
      }));
  }

  /* ── DirectoryFooter ── */
  function DirectoryFooter(p) {
    var cols = p.columns || [], notes = p.footnotes || [], legal = p.legal || [];
    var small = { font: "var(--type-caption)", color: "var(--on-ground-soft)", margin: 0 };
    return h("footer", assign(groundProps(p), { style: assign({ paddingBlock: "var(--sp-7) var(--sp-6)" }, p.style) }),
      h("div", { className: "shell", style: { display: "flex", flexDirection: "column", gap: "var(--sp-6)" } },
        notes.length ? h("ol", { style: assign({}, small, { paddingLeft: "1.2em", display: "flex", flexDirection: "column", gap: "var(--sp-3)", paddingBottom: "var(--sp-6)", borderBottom: "1px solid var(--hairline)" }) }, notes.map(function (n, i) { return h("li", { key: i }, n); })) : null,
        cols.length ? h("nav", { "aria-label": "Site directory", style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "var(--sp-6)" } },
          cols.map(function (c, i) { return h("div", { key: i, style: { display: "flex", flexDirection: "column", gap: "var(--sp-3)" } }, h("h4", { style: assign({}, small, { color: "var(--on-ground)", fontWeight: "var(--fw-semibold)" }) }, c.title), (c.links || []).map(function (l) { return h("a", { key: l.label, href: l.href, style: assign({}, small, { textDecoration: "none" }) }, l.label); })); })) : null,
        h("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "var(--sp-4)", paddingTop: "var(--sp-5)", borderTop: "1px solid var(--hairline)" } },
          h("p", { style: small }, p.copyright || "© Oscar Shand"),
          legal.length ? h("p", { style: assign({}, small, { display: "flex", gap: "var(--sp-4)" }) }, legal.map(function (l) { return h("a", { key: l.label, href: l.href, style: { color: "inherit" } }, l.label); })) : null,
          p.location ? h("p", { style: small }, p.location) : null)));
  }

  /* ── GalleryCarousel ── */
  function GalleryCarousel(p) {
    var items = p.items || [], track = useRef(null), media = useRef(null);
    var st = useState(0), i = st[0], setI = st[1];
    useEffect(function () {
      var el = track.current; if (!el) return;
      var f = function () { var w = el.firstChild ? el.firstChild.offsetWidth + 12 : 1; setI(Math.max(0, Math.min(items.length - 1, Math.round(el.scrollLeft / w)))); };
      el.addEventListener("scroll", f, { passive: true }); return function () { el.removeEventListener("scroll", f); };
    }, [items.length]);
    var go = function (n) { var el = track.current; if (!el || !el.children[n]) return; var c = el.children[n]; el.scrollTo({ left: c.offsetLeft - (el.clientWidth - c.offsetWidth) / 2, behavior: reduced() ? "auto" : "smooth" }); };
    useEffect(function () { media.current = track.current && track.current.children[i] ? track.current.children[i].querySelector("img") : null; }, [i]);
    return h("div", { role: "region", "aria-roledescription": "carousel", "aria-label": p.label || "Gallery", style: assign({ position: "relative" }, p.style) },
      h("div", { ref: track, tabIndex: 0, className: "os-snap", onKeyDown: function (e) { if (e.key === "ArrowRight") { e.preventDefault(); go(Math.min(items.length - 1, i + 1)); } if (e.key === "ArrowLeft") { e.preventDefault(); go(Math.max(0, i - 1)); } },
        style: { display: "flex", gap: 12, overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", padding: "0 var(--page-gutter)", scrollPaddingInline: "var(--page-gutter)" } },
        items.map(function (it, n) {
          return h("figure", { key: n, "aria-label": (n + 1) + " of " + items.length, style: { flex: "0 0 " + (p.slideWidth || "min(86%, 1080px)"), margin: 0, scrollSnapAlign: "center", position: "relative", aspectRatio: p.aspect || "16 / 9", overflow: "hidden", borderRadius: p.radius != null ? p.radius : "var(--r-lg)", background: "var(--hairline)" } },
            h("img", { src: it.src, alt: it.alt || "", loading: n < 2 ? "eager" : "lazy", style: { width: "100%", height: "100%", objectFit: "cover", transform: n === i ? "scale(1)" : "scale(1.04)", transition: "transform var(--dur-4) var(--ease-out)" } }));
        })),
      h("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--sp-4)", marginTop: "var(--sp-5)" } },
        h(LiquidGlass, { variant: "regular", shape: "capsule", style: { display: "inline-flex", alignItems: "center", gap: 10, height: 44, padding: "0 18px" } },
          items.map(function (it, n) { return h("button", { key: n, type: "button", "aria-label": "Show image " + (n + 1), "aria-current": n === i ? "true" : undefined, onClick: function () { go(n); }, style: { width: n === i ? 24 : 8, height: 8, padding: 0, border: "none", borderRadius: "var(--r-pill)", background: "currentColor", opacity: n === i ? 1 : 0.4, cursor: "pointer", transition: "width var(--dur-3) var(--ease-spring),opacity var(--dur-2) var(--ease-out)" } }); })),
        h(LiquidGlass, { variant: "regular", shape: "capsule", glyph: true, style: { display: "inline-flex", padding: 0 } },
          h(GlassButton, { icon: "arrow-left-s-line", label: "Previous image", disabled: i === 0, onClick: function () { go(i - 1); }, style: { opacity: i === 0 ? 0.4 : 1 } }),
          h(GlassButton, { icon: "arrow-right-s-line", label: "Next image", disabled: i === items.length - 1, onClick: function () { go(i + 1); }, style: { opacity: i === items.length - 1 ? 0.4 : 1 } }))),
      items[i] && items[i].caption ? h("p", { "aria-live": "polite", style: { font: "var(--type-body-sm)", color: "var(--on-ground-soft)", textAlign: "center", margin: "var(--sp-4) auto 0", maxWidth: "60ch", padding: "0 var(--page-gutter)" } }, items[i].caption) : null);
  }

  /* ── VideoBand: full-bleed video with a clear-glass play/pause ── */
  function VideoBand(p) {
    var v = useRef(null), st = useState(false), playing = st[0], setPlaying = st[1];
    useEffect(function () {
      var el = v.current; if (!el) return;
      var on = function () { setPlaying(true); }, off = function () { setPlaying(false); };
      el.addEventListener("play", on); el.addEventListener("pause", off);
      if (p.autoPlay !== false && !reduced()) { var pr = el.play(); if (pr && pr.catch) pr.catch(off); }
      return function () { el.removeEventListener("play", on); el.removeEventListener("pause", off); };
    }, [p.src]);
    var toggle = function () { var el = v.current; if (!el) return; if (el.paused) el.play(); else el.pause(); };
    return h("section", { style: assign({ position: "relative", overflow: "hidden", borderRadius: p.radius || 0, aspectRatio: p.aspect, height: p.aspect ? undefined : (p.height || "min(78vh, 760px)") }, p.style) },
      h("video", { ref: v, src: p.src, poster: p.poster, muted: true, loop: true, playsInline: true, preload: "metadata", "aria-label": p.label, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }),
      h(LiquidGlass, { as: "button", type: "button", variant: "clear", shape: "circle", interactive: true, glyph: true, media: v, onClick: toggle, "aria-label": playing ? "Pause video" : "Play video",
        style: { position: "absolute", right: "var(--page-gutter)", bottom: "var(--sp-6)", width: 52, height: 52, display: "grid", placeItems: "center", border: "none", padding: 0 } },
        h(Icon, { name: playing ? "pause-fill" : "play-fill", size: 24 })));
  }

  /* ── ImageCompare: before / after with a glass handle ── */
  function ImageCompare(p) {
    var st = useState(p.value != null ? p.value : 50), val = st[0], setVal = st[1], after = useRef(null);
    var b = p.before || {}, a = p.after || {};
    var tag = function (t, side) { return t ? h(LiquidGlass, { variant: "clear", shape: "capsule", media: after, style: { position: "absolute", top: "var(--sp-5)", left: side === "l" ? "var(--sp-5)" : "auto", right: side === "r" ? "var(--sp-5)" : "auto", padding: "6px 12px", font: "var(--type-label)", letterSpacing: "var(--ls-label)", textTransform: "none", pointerEvents: "none" } }, t) : null; };
    return h("div", { style: assign({ position: "relative", overflow: "hidden", aspectRatio: p.aspect || "16 / 9", borderRadius: p.radius != null ? p.radius : "var(--r-lg)", userSelect: "none", touchAction: "pan-y" }, p.style) },
      h("img", { ref: after, src: a.src, alt: a.alt || "", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } }),
      h("img", { src: b.src, alt: b.alt || "", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", clipPath: "inset(0 " + (100 - val) + "% 0 0)" } }),
      tag(b.label, "l"), tag(a.label, "r"),
      h("span", { "aria-hidden": "true", style: { position: "absolute", top: 0, bottom: 0, left: "calc(" + val + "% - 1px)", width: 2, background: "var(--cream)", boxShadow: "0 0 0 0.5px rgba(20,20,22,.25)" } }),
      h(LiquidGlass, { variant: "clear", shape: "circle", glyph: true, media: after, "aria-hidden": "true", style: { position: "absolute", top: "50%", left: val + "%", width: 48, height: 48, marginLeft: -24, marginTop: -24, display: "grid", placeItems: "center", pointerEvents: "none" } }, h(Icon, { name: "arrow-left-right-line", size: 22 })),
      h("input", { type: "range", min: 0, max: 100, step: 0.5, value: val, onChange: function (e) { setVal(parseFloat(e.target.value)); }, "aria-label": p.label || "Compare before and after", style: { position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "ew-resize" } }));
  }

  /* ── v3 replacements: GlassPanel and FloatingCTA now run on the engine, same props ── */
  function GlassPanel(p) {
    var variant = p.strength === "thin" ? "clear" : "regular";
    return h(LiquidGlass, assign(omit(p, ["strength", "padding", "cast", "radius"]), { variant: variant, radius: p.radius || "var(--r-md)", style: assign({ padding: p.padding || "var(--sp-6)" }, p.strength === "heavy" ? { "--lg-look": 0.85 } : null, p.cast === false ? { boxShadow: "var(--lg-rim)" } : null, p.style) }), p.children);
  }
  function FloatingCTA(p) {
    var st = useState(false), scrolled = st[0], setScrolled = st[1];
    useEffect(function () {
      if (p.visible !== undefined) return;
      var raf = 0, f = function () { raf = 0; setScrolled(window.scrollY > (p.after || 360)); };
      var on = function () { if (!raf) raf = requestAnimationFrame(f); };
      f(); window.addEventListener("scroll", on, { passive: true });
      return function () { window.removeEventListener("scroll", on); if (raf) cancelAnimationFrame(raf); };
    }, [p.after, p.visible]);
    var show = p.visible !== undefined ? p.visible : scrolled;
    return h(LiquidGlass, assign(omit(p, ["label", "after", "visible", "href", "onClick"]), { as: p.href ? "a" : "button", href: p.href, type: p.href ? undefined : "button", onClick: p.onClick, variant: "clear", shape: "capsule", interactive: true,
      tabIndex: show ? 0 : -1, "aria-hidden": !show,
      style: assign({ position: "fixed", right: "var(--page-gutter)", bottom: "var(--sp-6)", zIndex: 45, display: "inline-flex", alignItems: "center", gap: 10, height: 52, padding: "0 24px", border: "none", font: "var(--type-body-sm)", fontWeight: "var(--fw-medium)", textDecoration: "none", whiteSpace: "nowrap", opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none", transform: show ? undefined : "translate3d(0,18px,0)" }, p.style) }),
      p.label || "Get in touch", h("span", { "aria-hidden": "true" }, "↘"));
  }

  safe("components/v3", function () {
    Object.assign(ns, {
      Icon: Icon, LiquidGlass: LiquidGlass, GlassButton: GlassButton, GlassToolbar: GlassToolbar, GlassTabBar: GlassTabBar, SegmentedControl: SegmentedControl,
      Switch: Switch, Slider: Slider, GlassSheet: GlassSheet, NavIsland: NavIsland, Action: Action,
      HeroSection: HeroSection, PromoTile: PromoTile, TileGrid: TileGrid, LocalNav: LocalNav, FeatureRow: FeatureRow, DirectoryFooter: DirectoryFooter,
      GalleryCarousel: GalleryCarousel, VideoBand: VideoBand, ImageCompare: ImageCompare,
      GlassPanel: GlassPanel, FloatingCTA: FloatingCTA
    });
  });
})();
