"use strict";
(() => {
  var Ut = Object.create;
  var H = Object.defineProperty;
  var wt = Object.getOwnPropertyDescriptor;
  var Mt = Object.getOwnPropertyNames;
  var Nt = Object.getPrototypeOf,
    Ct = Object.prototype.hasOwnProperty;
  var kt = (e, t, r) =>
    t in e
      ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  var Bt = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var Dt = (e, t, r, s) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of Mt(t))
        !Ct.call(e, n) &&
          n !== r &&
          H(e, n, {
            get: () => t[n],
            enumerable: !(s = wt(t, n)) || s.enumerable,
          });
    return e;
  };
  var Ht = (e, t, r) => (
    (r = e != null ? Ut(Nt(e)) : {}),
    Dt(
      t || !e || !e.__esModule
        ? H(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var z = (e, t, r) => (kt(e, typeof t != "symbol" ? t + "" : t, r), r);
  var it = Bt((ar, ot) => {
    ot.exports = Gt;
    function Gt(e, t, r, s) {
      var n, o, i;
      return function () {
        if (
          ((i = this),
          (o = Array.prototype.slice.call(arguments)),
          n && (r || s))
        )
          return;
        if (!r) return l(), (n = setTimeout(u, t)), n;
        (n = setTimeout(l, t)), e.apply(i, o);
        function u() {
          l(), e.apply(i, o);
        }
        function l() {
          clearTimeout(n), (n = null);
        }
      };
    }
  });
  var V = "fs-attributes";
  var Q = "cmsattribute";
  var L = "rangeslider";
  var J = async (...e) => {
    var r;
    let t = [];
    for (let s of e) {
      let n = await ((r = window.fsAttributes[s]) == null ? void 0 : r.loading);
      t.push(n);
    }
    return t;
  };
  var T = class {
    static activateAlerts() {
      this.alertsActivated = !0;
    }
    static alert(t, r) {
      if ((this.alertsActivated && window.alert(t), r === "error"))
        throw new Error(t);
    }
  };
  z(T, "alertsActivated", !1);
  var h = () => {};
  function x(e, t, r, s) {
    return e
      ? (e.addEventListener(t, r, s), () => e.removeEventListener(t, r, s))
      : h;
  }
  var P = (e, t) => (
    Array.isArray(t) || (t = [t]),
    t.map((s) => e.dispatchEvent(new Event(s, { bubbles: !0 }))).every((s) => s)
  );
  var O = (e) => {
    if (K(e)) return;
    let t = e,
      r = ({ parentElement: s }) => {
        !s || K(s) || ((t = s), r(s));
      };
    return r(e), t;
  };
  var K = (e) =>
    !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  var Y = (e, t) => {
    let { type: r } = e,
      s = r === "radio";
    if (s || r === "checkbox") {
      if (
        !(e instanceof HTMLInputElement) ||
        typeof t != "boolean" ||
        t === e.checked ||
        (s && t === !1)
      )
        return;
      e.checked = t;
    } else {
      if (e.value === t) return;
      e.value = t.toString();
    }
    P(e, ["click", "input", "change"]);
  };
  var $ = (e) =>
    e instanceof HTMLInputElement ||
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement;
  var R = (e) => e != null;
  function Z(e, t, r) {
    var n;
    let s = window.fsAttributes[e];
    return (s.destroy = r || h), (n = s.resolve) == null || n.call(s, t), t;
  }
  var Pt = `${V}-support`,
    Ot =
      "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
    tt = async () => {
      let { fsAttributes: e, location: t } = window,
        { host: r, searchParams: s } = new URL(t.href);
      e.support || (e.support = {});
      let { support: n } = e;
      if (!r.includes("webflow.io") || !s.has(Pt)) return !1;
      if (n.import) return n.import;
      try {
        n.import = new Promise((o, i) => {
          let a = document.createElement("script");
          (a.src = Ot),
            (a.onload = () => o(!0)),
            (a.onerror = i),
            document.head.append(a);
        });
      } catch (o) {
        return !1;
      }
      return n.import;
    };
  var C = (e) => {
    let t = (s, n, o) => {
      let i = e[s],
        { key: a, values: u } = i,
        l;
      if (!n) return `[${a}]`;
      let d = u == null ? void 0 : u[n];
      typeof d == "string"
        ? (l = d)
        : (l = d(o && "instanceIndex" in o ? o.instanceIndex : void 0));
      let p = o && "caseInsensitive" in o && o.caseInsensitive ? "i" : "";
      if (!(o != null && o.operator)) return `[${a}="${l}"${p}]`;
      switch (o.operator) {
        case "prefixed":
          return `[${a}^="${l}"${p}]`;
        case "suffixed":
          return `[${a}$="${l}"${p}]`;
        case "contains":
          return `[${a}*="${l}"${p}]`;
      }
    };
    function r(s, n) {
      let o = t("element", s, n),
        i = (n == null ? void 0 : n.scope) || document;
      return n != null && n.all
        ? [...i.querySelectorAll(o)]
        : i.querySelector(o);
    }
    return [t, r];
  };
  var w = {
      preventLoad: { key: `${V}-preventload` },
      debugMode: { key: `${V}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${V}-dev` },
    },
    [F, Je] = C(w);
  var et = (e) => {
    let { currentScript: t } = document,
      r = {};
    if (!t) return { attributes: r, preventsLoad: !1 };
    let n = {
      preventsLoad: typeof t.getAttribute(w.preventLoad.key) == "string",
      attributes: r,
    };
    for (let o in e) {
      let i = t.getAttribute(e[o]);
      n.attributes[o] = i;
    }
    return n;
  };
  var nt = ({ scriptAttributes: e, attributeKey: t, version: r, init: s }) => {
      var a;
      Yt(), (a = window.fsAttributes)[t] || (a[t] = {});
      let { preventsLoad: n, attributes: o } = et(e),
        i = window.fsAttributes[t];
      (i.version = r),
        (i.init = s),
        n ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => s(o)));
    },
    Yt = () => {
      let e = $t();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        rt(window.fsAttributes, e);
        return;
      }
      let t = {
        cms: {},
        push(...r) {
          var s, n;
          for (let [o, i] of r)
            (n = (s = this[o]) == null ? void 0 : s.loading) == null ||
              n.then(i);
        },
        destroy() {
          var r, s;
          for (let n of e)
            (s = (r = window.fsAttributes[n]) == null ? void 0 : r.destroy) ==
              null || s.call(r);
        },
      };
      rt(t, e),
        Ft(t),
        (window.fsAttributes = t),
        (window.FsAttributes = window.fsAttributes),
        tt();
    },
    $t = () => {
      let e = F("src", "finsweet", { operator: "contains" }),
        t = F("dev");
      return [...document.querySelectorAll(`script${e}, script${t}`)].reduce(
        (n, o) => {
          var a;
          let i =
            o.getAttribute(w.dev.key) ||
            ((a = o.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : a[0]);
          return i && !n.includes(i) && n.push(i), n;
        },
        []
      );
    },
    rt = (e, t) => {
      for (let r of t) {
        if (e[r]) continue;
        e[r] = {};
        let s = e[r];
        s.loading = new Promise((n) => {
          s.resolve = (o) => {
            n(o), delete s.resolve;
          };
        });
      }
    },
    Ft = (e) => {
      let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      e.push(...t);
    };
  var st = "1.8.0";
  var vt = Ht(it(), 1);
  var W = (e) => (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX);
  var at = "ArrowUp",
    lt = "ArrowDown",
    ut = "ArrowRight",
    ct = "ArrowLeft";
  var _ = `fs-${L}`,
    Xt = "wrapper",
    jt = "track",
    qt = "fill",
    zt = "handle",
    Qt = "display-value",
    Jt = "min",
    Zt = "max",
    te = "start",
    ee = "step",
    re = "formatdisplay",
    ne = { true: "true" },
    se = "update",
    oe = { move: "move", release: "release" },
    M = {
      element: {
        key: `${_}-element`,
        values: {
          wrapper: Xt,
          track: jt,
          fill: qt,
          handle: zt,
          displayValue: Qt,
        },
      },
      min: { key: `${_}-${Jt}` },
      max: { key: `${_}-${Zt}` },
      start: { key: `${_}-${te}` },
      step: { key: `${_}-${ee}` },
      formatDisplay: { key: `${_}-${re}`, values: ne },
      updateAction: { key: `${_}-${se}`, values: oe },
    },
    [N, G] = C(M),
    X = [at, ut],
    ie = [lt, ct],
    pt = [...X, ...ie];
  var dt = (e) => {
      if (!isFinite(e)) return 0;
      let t = 1,
        r = 0;
      for (; Math.round(e * t) / t !== e; ) (t *= 10), (r += 1);
      return r;
    },
    mt = (e, t) => {
      let r = Math.pow(10, t);
      return Math.round(e * r) / r;
    },
    U = (e, t, r, s) => {
      let n = s > 1 ? s % t : 0,
        o = e % t,
        i = n + e - o;
      return o > t / 2 ? mt(i + t, r) : mt(i, r);
    },
    Et = (e, [t, r]) => {
      let s = t.getValue(),
        n = r == null ? void 0 : r.getValue(),
        o = ae(e, [s, n]);
      if (typeof o != "number") return;
      let [i, a] = t.getConstraints();
      if (o === s && e >= i && e <= a) return t;
      if (!r || o !== n) return;
      let [u, l] = r.getConstraints();
      if (e >= u && e <= l) return r;
    },
    ae = (e, t) => {
      let r = t.filter(R);
      return r.length
        ? r.reduce((n, o) => (Math.abs(o - e) < Math.abs(n - e) ? o : n))
        : void 0;
    };
  var {
      min: { key: le },
      max: { key: ue },
      step: { key: ce },
      formatDisplay: { key: pe, values: me },
      updateAction: { key: de, values: Ee },
    } = M,
    ft = (e) => {
      let t = G("track", { operator: "prefixed", scope: e }),
        r = G("fill", { operator: "prefixed", scope: e }),
        s = [...e.querySelectorAll("input")].filter($),
        n = [
          ...e.querySelectorAll(
            N("element", "handle", { operator: "prefixed" })
          ),
        ],
        o = [
          ...e.querySelectorAll(
            N("element", "displayValue", { operator: "prefixed" })
          ),
        ],
        i = e.getAttribute(pe) === me.true,
        a = e.getAttribute(de) === Ee.release;
      if (!n.length || !t) {
        T.alert(
          "The rangeslider is missing a Track element or a Handle element.",
          "error"
        );
        return;
      }
      let { left: u, right: l } = t.getBoundingClientRect(),
        d = t.clientWidth;
      t.style.position = "relative";
      let p = parseFloat(e.getAttribute(le) || "0"),
        E = parseFloat(e.getAttribute(ue) || `${p + 1}`),
        c = E - p;
      if (Number.isNaN(c)) {
        T.alert("Please make sure min and max are numbers.", "error");
        return;
      }
      if (Math.sign(c) === -1) {
        T.alert("The min can't be greater than the max.", "error");
        return;
      }
      let b = parseFloat(e.getAttribute(ce) || `${c / 100}`),
        f = dt(b);
      return (
        c % b > 0 &&
          T.alert(
            `The provided step [${b}] doesn't fit the range [${p},${E}], are you sure you want to use this value?`,
            "info"
          ),
        {
          trackElement: t,
          fillElement: r,
          handleElements: n,
          inputElements: s,
          displayValueElements: o,
          formatValueDisplay: i,
          trackLeft: u,
          trackRight: l,
          trackWidth: d,
          minRange: p,
          maxRange: E,
          totalRange: c,
          step: b,
          precision: f,
          updateOnRelease: a,
        }
      );
    };
  var k = class {
    constructor(t, { minRange: r, maxRange: s, handles: n, trackWidth: o }) {
      this.element = t;
      (t.style.position = "absolute"),
        (t.style.right = "unset"),
        (this.minRange = r),
        (this.totalRange = s - r),
        (this.handles = n),
        (this.trackWidth = o),
        this.update();
    }
    updateTrackWidth(t) {
      this.trackWidth = t;
    }
    update() {
      let {
          element: t,
          trackWidth: r,
          minRange: s,
          totalRange: n,
          handles: [o, i],
        } = this,
        a,
        u,
        l = ((o.getValue() - s) * r) / n;
      i
        ? ((a = l), (u = ((i.getValue() - o.getValue()) * r) / n))
        : ((a = 0), (u = l)),
        (t.style.left = `${a}px`),
        (t.style.width = `${u}px`);
    }
  };
  var At = "role",
    Tt = {
      slider: "slider",
      listbox: "listbox",
      option: "option",
      columnheader: "columnheader",
      link: "link",
    },
    bt = "tabindex",
    j = "aria-label",
    yt = "aria-labelledby",
    xt = "aria-valuenow",
    ht = "aria-valuemin",
    Rt = "aria-valuemax";
  var _t = (e, t) => {
    e.setAttribute(At, Tt.slider),
      e.setAttribute(bt, "0"),
      ![j, yt].some((r) => e.getAttribute(r)) && t && e.setAttribute(j, t.name);
  };
  var gt = (e) => {
    (e.style.position = "absolute"),
      (e.style.right = "unset"),
      (e.style.top = "50%"),
      (e.style.transform = "translate(-50%, -50%)");
  };
  var B = class {
    constructor(
      t,
      {
        index: r,
        minRange: s,
        maxRange: n,
        trackWidth: o,
        step: i,
        precision: a,
        startValue: u,
        inputElement: l,
        displayValueElement: d,
        formatValueDisplay: p,
      }
    ) {
      this.element = t;
      this.updatingInput = !1;
      this.getValue = () => this.currentValue;
      this.getConstraints = () => [this.minValue, this.maxValue];
      (this.inputElement = l),
        (this.displayValueElement = d),
        (this.formatValueDisplay = p),
        (this.index = r),
        (this.minRange = s),
        (this.maxRange = n),
        (this.totalRange = n - s),
        (this.step = i),
        (this.precision = a),
        (this.minValue = s),
        (this.maxValue = n),
        (this.trackWidth = o),
        gt(t),
        _t(t, l),
        this.setValue(u),
        (this.destroy = this.listenEvents());
    }
    listenEvents() {
      let { element: t, inputElement: r } = this,
        s = [
          x(t, "keydown", (n) => this.handleKeyDown(n)),
          x(r, "change", () => this.handleInputChange()),
        ];
      return () => {
        for (let n of s) n();
      };
    }
    handleKeyDown(t) {
      let { step: r, currentValue: s } = this,
        { key: n } = t;
      !pt.includes(n) ||
        (t.preventDefault(),
        X.includes(n) ? this.setValue(s + r) : this.setValue(s - r));
    }
    handleInputChange() {
      let {
        inputElement: t,
        index: r,
        minRange: s,
        maxRange: n,
        step: o,
        precision: i,
        updatingInput: a,
      } = this;
      if (!t || a) return;
      let { value: u } = t,
        l = parseFloat(u);
      if (l) {
        this.setValue(U(l, o, i, s));
        return;
      }
      this.setValue(r === 0 ? s : n, !1);
    }
    formatValue(t) {
      var r, s;
      try {
        return t.toLocaleString(
          (r = document.documentElement) == null ? void 0 : r.lang
        );
      } catch (n) {
        return t.toLocaleString(
          ((s = window.navigator) == null ? void 0 : s.language) || void 0
        );
      }
    }
    updatePosition() {
      let {
          currentValue: t,
          element: r,
          trackWidth: s,
          minRange: n,
          totalRange: o,
          fill: i,
        } = this,
        a = ((t - n) * s) / o;
      (r.style.left = `${a}px`), i == null || i.update();
    }
    setValue(t, r = !0) {
      let {
        currentValue: s,
        element: n,
        minValue: o,
        maxValue: i,
        displayValueElement: a,
        formatValueDisplay: u,
      } = this;
      if (s === t || t < o || t > i) return !1;
      (this.currentValue = t),
        this.updatePosition(),
        this.updateSiblingConstraints();
      let l = `${t}`;
      return (
        n.setAttribute(xt, l),
        a && (a.textContent = u ? this.formatValue(t) : l),
        r && this.updateInputElement(),
        !0
      );
    }
    updateInputElement() {
      this.updatingInput = !0;
      let { currentValue: t, inputElement: r } = this;
      !r || (Y(r, `${t}`), (this.updatingInput = !1));
    }
    setConstraints(t, r) {
      let { element: s } = this;
      s.setAttribute(ht, `${t}`),
        s.setAttribute(Rt, `${r}`),
        (this.minValue = t),
        (this.maxValue = r);
    }
    updateSiblingConstraints() {
      let {
        index: t,
        sibling: r,
        step: s,
        minRange: n,
        maxRange: o,
        currentValue: i,
      } = this;
      !r || (t === 0 ? r.setConstraints(i + s, o) : r.setConstraints(n, i - s));
    }
    updateTrackWidth(t) {
      var r;
      (this.trackWidth = t),
        (r = this.fill) == null || r.updateTrackWidth(t),
        this.updatePosition();
    }
    addFill(t) {
      this.fill = t;
    }
    addSibling(t) {
      (this.sibling = t), this.updateSiblingConstraints();
    }
  };
  var It = ({
      handleElements: e,
      inputElements: t,
      displayValueElements: r,
      formatValueDisplay: s,
      minRange: n,
      maxRange: o,
      trackWidth: i,
      step: a,
      precision: u,
    }) => {
      let l = e
        .slice(0, 2)
        .map((E, c) => {
          let b = parseFloat(
              E.getAttribute(M.start.key) || `${c === 0 ? n : o}`
            ),
            f = U(b, a, u, n),
            g = t[c],
            I = r[c];
          return (
            f < n &&
              (T.alert(
                `The Handle start value [${f}] doesn't match the range, so it has been set to the min value [${n}].`,
                "info"
              ),
              (f = n)),
            f > o &&
              (T.alert(
                `The Handle start value [${f}] doesn't match the range, so it has been set to the max value [${o}].`,
                "info"
              ),
              (f = o)),
            new B(E, {
              index: c,
              minRange: n,
              maxRange: o,
              trackWidth: i,
              step: a,
              precision: u,
              startValue: f,
              inputElement: g,
              displayValueElement: I,
              formatValueDisplay: s,
            })
          );
        })
        .filter(R);
      if (!l.length) return;
      l.length > 1 && l.sort((E, c) => E.getValue() - c.getValue());
      let [d, p] = l;
      return (
        p ? (d.addSibling(p), p.addSibling(d)) : d.setConstraints(n, o), [d, p]
      );
    },
    St = ({ fillElement: e, minRange: t, maxRange: r, trackWidth: s }, n) => {
      if (!e) return;
      let o = new k(e, { minRange: t, maxRange: r, trackWidth: s, handles: n }),
        [i, a] = n;
      i.addFill(o), a == null || a.addFill(o);
    };
  var Vt = async () => {
      await J(Q);
      let t = [
          ...document.querySelectorAll(
            N("element", "wrapper", { operator: "prefixed" })
          ),
        ]
          .map(fe)
          .filter(R),
        r = t.map(({ handles: s }) => s);
      return Z(L, r, () => {
        for (let { destroy: s } of t) s();
      });
    },
    fe = (e) => {
      let t = ft(e);
      if (!t) return;
      let r = It(t);
      if (!r) return;
      St(t, r);
      let {
          maxRange: s,
          minRange: n,
          step: o,
          precision: i,
          totalRange: a,
          trackElement: u,
          updateOnRelease: l,
        } = t,
        { trackWidth: d, trackLeft: p, trackRight: E } = t,
        c,
        b = !1,
        f = (m) => {
          let A = n + ((m - p) * a) / d;
          return U(A, o, i, n);
        },
        g = (m) => {
          if (!c) return;
          m instanceof MouseEvent && m.preventDefault();
          let A = W(m),
            [y, S] = c.getConstraints(),
            v;
          p > A ? (v = y) : E < A ? (v = S) : (v = f(A));
          let Kt = c.setValue(v, !l);
          b || (b = Kt);
        },
        I = (m) => {
          m.cancelable && m.preventDefault(),
            document.removeEventListener("mousemove", g),
            document.removeEventListener("touchmove", g),
            document.removeEventListener("mouseup", I),
            document.removeEventListener("touchend", I),
            l && b && (c == null || c.updateInputElement()),
            (b = !1),
            c == null || c.element.blur(),
            (c = void 0);
        },
        D = (m) => {
          m.cancelable && m.preventDefault();
          let A = W(m);
          document.addEventListener("mousemove", g),
            document.addEventListener("touchmove", g, { passive: !0 }),
            document.addEventListener("mouseup", I),
            document.addEventListener("touchend", I);
          let y;
          p > A ? (y = n) : E < A ? (y = s) : (y = f(A));
          let S = Et(y, r);
          if (!S) return;
          S.element.focus(), (c = S);
          let v = S.setValue(y, !l);
          b || (b = v);
        },
        q = () => {
          (d = u.clientWidth),
            ({ left: p, right: E } = u.getBoundingClientRect());
          for (let m of r) m && m.updateTrackWidth(d);
        },
        Lt = [
          (() => {
            let m = O(e);
            if (!m) return h;
            let A = new MutationObserver(() => {
              K(m) && q();
            });
            return (
              A.observe(m, {
                attributes: !0,
                attributeFilter: ["style", "class"],
              }),
              () => A.disconnect()
            );
          })(),
          x(u, "mousedown", D),
          x(u, "touchstart", D, { passive: !0 }),
          x(window, "resize", (0, vt.default)(q, 50)),
        ];
      return {
        handles: r,
        destroy: () => {
          for (let m of Lt) m();
        },
      };
    };
  nt({ init: Vt, version: st, attributeKey: L });
})();
