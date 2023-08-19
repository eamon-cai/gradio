import {
	S as he,
	i as pe,
	s as ke,
	B as Ve,
	C as d,
	g as S,
	E as I,
	F as G,
	q as E,
	G as T,
	H as J,
	M as A,
	J as H,
	a1 as ge,
	a2 as Ee,
	a0 as ue,
	I as j,
	K as Y,
	f as oe,
	N as ul,
	p as V,
	l as _e,
	t as P,
	o as me,
	r as Re,
	a3 as Tl,
	e as D,
	m as N,
	n as O,
	a4 as Bl,
	b as He,
	a5 as Fl,
	_ as ze,
	y as Z,
	L as Pe,
	a6 as Il,
	a as ol,
	k as _l,
	V as Ll,
	X as Ul,
	Y as zl,
	Z as Cl,
	x as Dl,
	$ as Nl,
	h as Ol,
	j as jl
} from "../lite.js";
import "./Blocks-b77f2878.js";
import { U as Kl } from "./UploadText-45e994b7.js";
import { a as ml, B as Yl } from "./Button-5b68d65a.js";
import { U as ql } from "./Upload-09ed31cf.js";
import { M as Ql } from "./ModifyUpload-33254150.js";
import { B as dl } from "./BlockLabel-e392131b.js";
/* empty css                                                    */ import { E as Xl } from "./Empty-b331fdfe.js";
import { n as Zl } from "./ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js";
function Gl(l) {
	let e, i, n, a;
	return {
		c() {
			(e = Ve("svg")),
				(i = Ve("path")),
				(n = Ve("circle")),
				(a = Ve("circle")),
				d(i, "d", "M9 18V5l12-2v13"),
				d(n, "cx", "6"),
				d(n, "cy", "18"),
				d(n, "r", "3"),
				d(a, "cx", "18"),
				d(a, "cy", "16"),
				d(a, "r", "3"),
				d(e, "xmlns", "http://www.w3.org/2000/svg"),
				d(e, "width", "100%"),
				d(e, "height", "100%"),
				d(e, "viewBox", "0 0 24 24"),
				d(e, "fill", "none"),
				d(e, "stroke", "currentColor"),
				d(e, "stroke-width", "1.5"),
				d(e, "stroke-linecap", "round"),
				d(e, "stroke-linejoin", "round"),
				d(e, "class", "feather feather-music");
		},
		m(f, t) {
			S(f, e, t), I(e, i), I(e, n), I(e, a);
		},
		p: G,
		i: G,
		o: G,
		d(f) {
			f && E(e);
		}
	};
}
class Ie extends he {
	constructor(e) {
		super(), pe(this, e, null, Gl, ke, {});
	}
}
function Ce(l, e, i) {
	const n = l.slice();
	return (n[27] = e[i]), (n[29] = i), n;
}
function De(l) {
	let e,
		i,
		n,
		a,
		f = (l[6] === "label" || l[7] === "label") && Ne(l);
	return {
		c() {
			(e = T("span")),
				f && f.c(),
				d(e, "class", "pip first"),
				d(e, "style", (i = l[14] + ": 0%;")),
				A(e, "selected", l[17](l[0])),
				A(e, "in-range", l[16](l[0]));
		},
		m(t, u) {
			S(t, e, u),
				f && f.m(e, null),
				n ||
					((a = [
						H(e, "click", function () {
							ge(l[20](l[0])) && l[20](l[0]).apply(this, arguments);
						}),
						H(
							e,
							"touchend",
							Ee(function () {
								ge(l[20](l[0])) && l[20](l[0]).apply(this, arguments);
							})
						)
					]),
					(n = !0));
		},
		p(t, u) {
			(l = t),
				l[6] === "label" || l[7] === "label"
					? f
						? f.p(l, u)
						: ((f = Ne(l)), f.c(), f.m(e, null))
					: f && (f.d(1), (f = null)),
				u & 16384 && i !== (i = l[14] + ": 0%;") && d(e, "style", i),
				u & 131073 && A(e, "selected", l[17](l[0])),
				u & 65537 && A(e, "in-range", l[16](l[0]));
		},
		d(t) {
			t && E(e), f && f.d(), (n = !1), ue(a);
		}
	};
}
function Ne(l) {
	let e,
		i = l[12](l[0], 0, 0) + "",
		n,
		a = l[10] && Oe(l),
		f = l[11] && je(l);
	return {
		c() {
			(e = T("span")),
				a && a.c(),
				(n = j(i)),
				f && f.c(),
				d(e, "class", "pipVal");
		},
		m(t, u) {
			S(t, e, u), a && a.m(e, null), I(e, n), f && f.m(e, null);
		},
		p(t, u) {
			t[10]
				? a
					? a.p(t, u)
					: ((a = Oe(t)), a.c(), a.m(e, n))
				: a && (a.d(1), (a = null)),
				u & 4097 && i !== (i = t[12](t[0], 0, 0) + "") && Y(n, i),
				t[11]
					? f
						? f.p(t, u)
						: ((f = je(t)), f.c(), f.m(e, null))
					: f && (f.d(1), (f = null));
		},
		d(t) {
			t && E(e), a && a.d(), f && f.d();
		}
	};
}
function Oe(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[10])), d(e, "class", "pipVal-prefix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a & 1024 && Y(i, n[10]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function je(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[11])), d(e, "class", "pipVal-suffix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a & 2048 && Y(i, n[11]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function Ke(l) {
	let e,
		i = Array(l[19] + 1),
		n = [];
	for (let a = 0; a < i.length; a += 1) n[a] = Ze(Ce(l, i, a));
	return {
		c() {
			for (let a = 0; a < n.length; a += 1) n[a].c();
			e = oe();
		},
		m(a, f) {
			for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(a, f);
			S(a, e, f);
		},
		p(a, f) {
			if (f & 2088515) {
				i = Array(a[19] + 1);
				let t;
				for (t = 0; t < i.length; t += 1) {
					const u = Ce(a, i, t);
					n[t]
						? n[t].p(u, f)
						: ((n[t] = Ze(u)), n[t].c(), n[t].m(e.parentNode, e));
				}
				for (; t < n.length; t += 1) n[t].d(1);
				n.length = i.length;
			}
		},
		d(a) {
			ul(n, a), a && E(e);
		}
	};
}
function Ye(l) {
	let e,
		i,
		n,
		a,
		f,
		t = (l[6] === "label" || l[9] === "label") && qe(l);
	return {
		c() {
			(e = T("span")),
				t && t.c(),
				(i = J()),
				d(e, "class", "pip"),
				d(e, "style", (n = l[14] + ": " + l[15](l[18](l[29])) + "%;")),
				A(e, "selected", l[17](l[18](l[29]))),
				A(e, "in-range", l[16](l[18](l[29])));
		},
		m(u, _) {
			S(u, e, _),
				t && t.m(e, null),
				I(e, i),
				a ||
					((f = [
						H(e, "click", function () {
							ge(l[20](l[18](l[29]))) &&
								l[20](l[18](l[29])).apply(this, arguments);
						}),
						H(
							e,
							"touchend",
							Ee(function () {
								ge(l[20](l[18](l[29]))) &&
									l[20](l[18](l[29])).apply(this, arguments);
							})
						)
					]),
					(a = !0));
		},
		p(u, _) {
			(l = u),
				l[6] === "label" || l[9] === "label"
					? t
						? t.p(l, _)
						: ((t = qe(l)), t.c(), t.m(e, i))
					: t && (t.d(1), (t = null)),
				_ & 311296 &&
					n !== (n = l[14] + ": " + l[15](l[18](l[29])) + "%;") &&
					d(e, "style", n),
				_ & 393216 && A(e, "selected", l[17](l[18](l[29]))),
				_ & 327680 && A(e, "in-range", l[16](l[18](l[29])));
		},
		d(u) {
			u && E(e), t && t.d(), (a = !1), ue(f);
		}
	};
}
function qe(l) {
	let e,
		i = l[12](l[18](l[29]), l[29], l[15](l[18](l[29]))) + "",
		n,
		a = l[10] && Qe(l),
		f = l[11] && Xe(l);
	return {
		c() {
			(e = T("span")),
				a && a.c(),
				(n = j(i)),
				f && f.c(),
				d(e, "class", "pipVal");
		},
		m(t, u) {
			S(t, e, u), a && a.m(e, null), I(e, n), f && f.m(e, null);
		},
		p(t, u) {
			t[10]
				? a
					? a.p(t, u)
					: ((a = Qe(t)), a.c(), a.m(e, n))
				: a && (a.d(1), (a = null)),
				u & 299008 &&
					i !== (i = t[12](t[18](t[29]), t[29], t[15](t[18](t[29]))) + "") &&
					Y(n, i),
				t[11]
					? f
						? f.p(t, u)
						: ((f = Xe(t)), f.c(), f.m(e, null))
					: f && (f.d(1), (f = null));
		},
		d(t) {
			t && E(e), a && a.d(), f && f.d();
		}
	};
}
function Qe(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[10])), d(e, "class", "pipVal-prefix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a & 1024 && Y(i, n[10]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function Xe(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[11])), d(e, "class", "pipVal-suffix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a & 2048 && Y(i, n[11]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function Ze(l) {
	let e = l[18](l[29]) !== l[0] && l[18](l[29]) !== l[1],
		i,
		n = e && Ye(l);
	return {
		c() {
			n && n.c(), (i = oe());
		},
		m(a, f) {
			n && n.m(a, f), S(a, i, f);
		},
		p(a, f) {
			f & 262147 && (e = a[18](a[29]) !== a[0] && a[18](a[29]) !== a[1]),
				e
					? n
						? n.p(a, f)
						: ((n = Ye(a)), n.c(), n.m(i.parentNode, i))
					: n && (n.d(1), (n = null));
		},
		d(a) {
			n && n.d(a), a && E(i);
		}
	};
}
function Ge(l) {
	let e,
		i,
		n,
		a,
		f = (l[6] === "label" || l[8] === "label") && Je(l);
	return {
		c() {
			(e = T("span")),
				f && f.c(),
				d(e, "class", "pip last"),
				d(e, "style", (i = l[14] + ": 100%;")),
				A(e, "selected", l[17](l[1])),
				A(e, "in-range", l[16](l[1]));
		},
		m(t, u) {
			S(t, e, u),
				f && f.m(e, null),
				n ||
					((a = [
						H(e, "click", function () {
							ge(l[20](l[1])) && l[20](l[1]).apply(this, arguments);
						}),
						H(
							e,
							"touchend",
							Ee(function () {
								ge(l[20](l[1])) && l[20](l[1]).apply(this, arguments);
							})
						)
					]),
					(n = !0));
		},
		p(t, u) {
			(l = t),
				l[6] === "label" || l[8] === "label"
					? f
						? f.p(l, u)
						: ((f = Je(l)), f.c(), f.m(e, null))
					: f && (f.d(1), (f = null)),
				u & 16384 && i !== (i = l[14] + ": 100%;") && d(e, "style", i),
				u & 131074 && A(e, "selected", l[17](l[1])),
				u & 65538 && A(e, "in-range", l[16](l[1]));
		},
		d(t) {
			t && E(e), f && f.d(), (n = !1), ue(a);
		}
	};
}
function Je(l) {
	let e,
		i = l[12](l[1], l[19], 100) + "",
		n,
		a = l[10] && We(l),
		f = l[11] && xe(l);
	return {
		c() {
			(e = T("span")),
				a && a.c(),
				(n = j(i)),
				f && f.c(),
				d(e, "class", "pipVal");
		},
		m(t, u) {
			S(t, e, u), a && a.m(e, null), I(e, n), f && f.m(e, null);
		},
		p(t, u) {
			t[10]
				? a
					? a.p(t, u)
					: ((a = We(t)), a.c(), a.m(e, n))
				: a && (a.d(1), (a = null)),
				u & 528386 && i !== (i = t[12](t[1], t[19], 100) + "") && Y(n, i),
				t[11]
					? f
						? f.p(t, u)
						: ((f = xe(t)), f.c(), f.m(e, null))
					: f && (f.d(1), (f = null));
		},
		d(t) {
			t && E(e), a && a.d(), f && f.d();
		}
	};
}
function We(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[10])), d(e, "class", "pipVal-prefix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a & 1024 && Y(i, n[10]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function xe(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[11])), d(e, "class", "pipVal-suffix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a & 2048 && Y(i, n[11]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function Jl(l) {
	let e,
		i,
		n,
		a = ((l[6] && l[7] !== !1) || l[7]) && De(l),
		f = ((l[6] && l[9] !== !1) || l[9]) && Ke(l),
		t = ((l[6] && l[8] !== !1) || l[8]) && Ge(l);
	return {
		c() {
			(e = T("div")),
				a && a.c(),
				(i = J()),
				f && f.c(),
				(n = J()),
				t && t.c(),
				d(e, "class", "rangePips"),
				A(e, "disabled", l[5]),
				A(e, "hoverable", l[4]),
				A(e, "vertical", l[2]),
				A(e, "reversed", l[3]),
				A(e, "focus", l[13]);
		},
		m(u, _) {
			S(u, e, _),
				a && a.m(e, null),
				I(e, i),
				f && f.m(e, null),
				I(e, n),
				t && t.m(e, null);
		},
		p(u, [_]) {
			(u[6] && u[7] !== !1) || u[7]
				? a
					? a.p(u, _)
					: ((a = De(u)), a.c(), a.m(e, i))
				: a && (a.d(1), (a = null)),
				(u[6] && u[9] !== !1) || u[9]
					? f
						? f.p(u, _)
						: ((f = Ke(u)), f.c(), f.m(e, n))
					: f && (f.d(1), (f = null)),
				(u[6] && u[8] !== !1) || u[8]
					? t
						? t.p(u, _)
						: ((t = Ge(u)), t.c(), t.m(e, null))
					: t && (t.d(1), (t = null)),
				_ & 32 && A(e, "disabled", u[5]),
				_ & 16 && A(e, "hoverable", u[4]),
				_ & 4 && A(e, "vertical", u[2]),
				_ & 8 && A(e, "reversed", u[3]),
				_ & 8192 && A(e, "focus", u[13]);
		},
		i: G,
		o: G,
		d(u) {
			u && E(e), a && a.d(), f && f.d(), t && t.d();
		}
	};
}
function Wl(l, e, i) {
	let n,
		a,
		f,
		t,
		u,
		{ range: _ = !1 } = e,
		{ min: g = 0 } = e,
		{ max: o = 100 } = e,
		{ step: s = 1 } = e,
		{ values: m = [(o + g) / 2] } = e,
		{ vertical: c = !1 } = e,
		{ reversed: b = !1 } = e,
		{ hoverable: y = !0 } = e,
		{ disabled: F = !1 } = e,
		{ pipstep: k = void 0 } = e,
		{ all: C = !0 } = e,
		{ first: q = void 0 } = e,
		{ last: L = void 0 } = e,
		{ rest: Q = void 0 } = e,
		{ prefix: U = "" } = e,
		{ suffix: x = "" } = e,
		{ formatter: z = (p, se) => p } = e,
		{ focus: X = void 0 } = e,
		{ orientationStart: $ = void 0 } = e,
		{ percentOf: ee = void 0 } = e,
		{ moveHandle: W = void 0 } = e;
	function w(p) {
		W(void 0, p);
	}
	return (
		(l.$$set = (p) => {
			"range" in p && i(21, (_ = p.range)),
				"min" in p && i(0, (g = p.min)),
				"max" in p && i(1, (o = p.max)),
				"step" in p && i(22, (s = p.step)),
				"values" in p && i(23, (m = p.values)),
				"vertical" in p && i(2, (c = p.vertical)),
				"reversed" in p && i(3, (b = p.reversed)),
				"hoverable" in p && i(4, (y = p.hoverable)),
				"disabled" in p && i(5, (F = p.disabled)),
				"pipstep" in p && i(24, (k = p.pipstep)),
				"all" in p && i(6, (C = p.all)),
				"first" in p && i(7, (q = p.first)),
				"last" in p && i(8, (L = p.last)),
				"rest" in p && i(9, (Q = p.rest)),
				"prefix" in p && i(10, (U = p.prefix)),
				"suffix" in p && i(11, (x = p.suffix)),
				"formatter" in p && i(12, (z = p.formatter)),
				"focus" in p && i(13, (X = p.focus)),
				"orientationStart" in p && i(14, ($ = p.orientationStart)),
				"percentOf" in p && i(15, (ee = p.percentOf)),
				"moveHandle" in p && i(25, (W = p.moveHandle));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 20971527 &&
				i(
					26,
					(n =
						k || ((o - g) / s >= (c ? 50 : 100) ? (o - g) / (c ? 10 : 20) : 1))
				),
				l.$$.dirty & 71303171 && i(19, (a = parseInt((o - g) / (s * n), 10))),
				l.$$.dirty & 71303169 &&
					i(
						18,
						(f = function (p) {
							return g + p * s * n;
						})
					),
				l.$$.dirty & 8388608 &&
					i(
						17,
						(t = function (p) {
							return m.some((se) => se === p);
						})
					),
				l.$$.dirty & 10485760 &&
					i(
						16,
						(u = function (p) {
							if (_ === "min") return m[0] > p;
							if (_ === "max") return m[0] < p;
							if (_) return m[0] < p && m[1] > p;
						})
					);
		}),
		[
			g,
			o,
			c,
			b,
			y,
			F,
			C,
			q,
			L,
			Q,
			U,
			x,
			z,
			X,
			$,
			ee,
			u,
			t,
			f,
			a,
			w,
			_,
			s,
			m,
			k,
			W,
			n
		]
	);
}
class xl extends he {
	constructor(e) {
		super(),
			pe(this, e, Wl, Jl, ke, {
				range: 21,
				min: 0,
				max: 1,
				step: 22,
				values: 23,
				vertical: 2,
				reversed: 3,
				hoverable: 4,
				disabled: 5,
				pipstep: 24,
				all: 6,
				first: 7,
				last: 8,
				rest: 9,
				prefix: 10,
				suffix: 11,
				formatter: 12,
				focus: 13,
				orientationStart: 14,
				percentOf: 15,
				moveHandle: 25
			});
	}
}
function $e(l, e, i) {
	const n = l.slice();
	return (n[63] = e[i]), (n[65] = i), n;
}
function el(l) {
	let e,
		i = l[21](l[63], l[65], l[23](l[63])) + "",
		n,
		a = l[18] && ll(l),
		f = l[19] && nl(l);
	return {
		c() {
			(e = T("span")),
				a && a.c(),
				(n = j(i)),
				f && f.c(),
				d(e, "class", "rangeFloat");
		},
		m(t, u) {
			S(t, e, u), a && a.m(e, null), I(e, n), f && f.m(e, null);
		},
		p(t, u) {
			t[18]
				? a
					? a.p(t, u)
					: ((a = ll(t)), a.c(), a.m(e, n))
				: a && (a.d(1), (a = null)),
				u[0] & 10485761 &&
					i !== (i = t[21](t[63], t[65], t[23](t[63])) + "") &&
					Y(n, i),
				t[19]
					? f
						? f.p(t, u)
						: ((f = nl(t)), f.c(), f.m(e, null))
					: f && (f.d(1), (f = null));
		},
		d(t) {
			t && E(e), a && a.d(), f && f.d();
		}
	};
}
function ll(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[18])), d(e, "class", "rangeFloat-prefix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a[0] & 262144 && Y(i, n[18]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function nl(l) {
	let e, i;
	return {
		c() {
			(e = T("span")), (i = j(l[19])), d(e, "class", "rangeFloat-suffix");
		},
		m(n, a) {
			S(n, e, a), I(e, i);
		},
		p(n, a) {
			a[0] & 524288 && Y(i, n[19]);
		},
		d(n) {
			n && E(e);
		}
	};
}
function il(l) {
	let e,
		i,
		n,
		a,
		f,
		t,
		u,
		_,
		g,
		o,
		s,
		m,
		c = l[7] && el(l);
	return {
		c() {
			(e = T("span")),
				(i = T("span")),
				(n = J()),
				c && c.c(),
				d(i, "class", "rangeNub"),
				d(e, "role", "slider"),
				d(e, "class", "rangeHandle"),
				d(e, "data-handle", l[65]),
				d(
					e,
					"style",
					(a =
						l[28] +
						": " +
						l[29][l[65]] +
						"%; z-index: " +
						(l[26] === l[65] ? 3 : 2) +
						";")
				),
				d(
					e,
					"aria-valuemin",
					(f = l[2] === !0 && l[65] === 1 ? l[0][0] : l[3])
				),
				d(
					e,
					"aria-valuemax",
					(t = l[2] === !0 && l[65] === 0 ? l[0][1] : l[4])
				),
				d(e, "aria-valuenow", (u = l[63])),
				d(
					e,
					"aria-valuetext",
					(_ = "" + (l[18] + l[21](l[63], l[65], l[23](l[63])) + l[19]))
				),
				d(e, "aria-orientation", (g = l[6] ? "vertical" : "horizontal")),
				d(e, "aria-disabled", l[10]),
				d(e, "disabled", l[10]),
				d(e, "tabindex", (o = l[10] ? -1 : 0)),
				A(e, "active", l[24] && l[26] === l[65]),
				A(e, "press", l[25] && l[26] === l[65]);
		},
		m(b, y) {
			S(b, e, y),
				I(e, i),
				I(e, n),
				c && c.m(e, null),
				s ||
					((m = [
						H(e, "blur", l[33]),
						H(e, "focus", l[34]),
						H(e, "keydown", l[35])
					]),
					(s = !0));
		},
		p(b, y) {
			b[7]
				? c
					? c.p(b, y)
					: ((c = el(b)), c.c(), c.m(e, null))
				: c && (c.d(1), (c = null)),
				y[0] & 872415232 &&
					a !==
						(a =
							b[28] +
							": " +
							b[29][b[65]] +
							"%; z-index: " +
							(b[26] === b[65] ? 3 : 2) +
							";") &&
					d(e, "style", a),
				y[0] & 13 &&
					f !== (f = b[2] === !0 && b[65] === 1 ? b[0][0] : b[3]) &&
					d(e, "aria-valuemin", f),
				y[0] & 21 &&
					t !== (t = b[2] === !0 && b[65] === 0 ? b[0][1] : b[4]) &&
					d(e, "aria-valuemax", t),
				y[0] & 1 && u !== (u = b[63]) && d(e, "aria-valuenow", u),
				y[0] & 11272193 &&
					_ !==
						(_ = "" + (b[18] + b[21](b[63], b[65], b[23](b[63])) + b[19])) &&
					d(e, "aria-valuetext", _),
				y[0] & 64 &&
					g !== (g = b[6] ? "vertical" : "horizontal") &&
					d(e, "aria-orientation", g),
				y[0] & 1024 && d(e, "aria-disabled", b[10]),
				y[0] & 1024 && d(e, "disabled", b[10]),
				y[0] & 1024 && o !== (o = b[10] ? -1 : 0) && d(e, "tabindex", o),
				y[0] & 83886080 && A(e, "active", b[24] && b[26] === b[65]),
				y[0] & 100663296 && A(e, "press", b[25] && b[26] === b[65]);
		},
		d(b) {
			b && E(e), c && c.d(), (s = !1), ue(m);
		}
	};
}
function al(l) {
	let e, i;
	return {
		c() {
			(e = T("span")),
				d(e, "class", "rangeBar"),
				d(
					e,
					"style",
					(i =
						l[28] +
						": " +
						l[31](l[29]) +
						"%; " +
						l[27] +
						": " +
						l[32](l[29]) +
						"%;")
				);
		},
		m(n, a) {
			S(n, e, a);
		},
		p(n, a) {
			a[0] & 939524096 &&
				i !==
					(i =
						n[28] +
						": " +
						n[31](n[29]) +
						"%; " +
						n[27] +
						": " +
						n[32](n[29]) +
						"%;") &&
				d(e, "style", i);
		},
		d(n) {
			n && E(e);
		}
	};
}
function fl(l) {
	let e, i;
	return (
		(e = new xl({
			props: {
				values: l[0],
				min: l[3],
				max: l[4],
				step: l[5],
				range: l[2],
				vertical: l[6],
				reversed: l[8],
				orientationStart: l[28],
				hoverable: l[9],
				disabled: l[10],
				all: l[13],
				first: l[14],
				last: l[15],
				rest: l[16],
				pipstep: l[12],
				prefix: l[18],
				suffix: l[19],
				formatter: l[20],
				focus: l[24],
				percentOf: l[23],
				moveHandle: l[30]
			}
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, a) {
				const f = {};
				a[0] & 1 && (f.values = n[0]),
					a[0] & 8 && (f.min = n[3]),
					a[0] & 16 && (f.max = n[4]),
					a[0] & 32 && (f.step = n[5]),
					a[0] & 4 && (f.range = n[2]),
					a[0] & 64 && (f.vertical = n[6]),
					a[0] & 256 && (f.reversed = n[8]),
					a[0] & 268435456 && (f.orientationStart = n[28]),
					a[0] & 512 && (f.hoverable = n[9]),
					a[0] & 1024 && (f.disabled = n[10]),
					a[0] & 8192 && (f.all = n[13]),
					a[0] & 16384 && (f.first = n[14]),
					a[0] & 32768 && (f.last = n[15]),
					a[0] & 65536 && (f.rest = n[16]),
					a[0] & 4096 && (f.pipstep = n[12]),
					a[0] & 262144 && (f.prefix = n[18]),
					a[0] & 524288 && (f.suffix = n[19]),
					a[0] & 1048576 && (f.formatter = n[20]),
					a[0] & 16777216 && (f.focus = n[24]),
					a[0] & 8388608 && (f.percentOf = n[23]),
					e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function $l(l) {
	let e,
		i,
		n,
		a,
		f,
		t,
		u = l[0],
		_ = [];
	for (let s = 0; s < u.length; s += 1) _[s] = il($e(l, u, s));
	let g = l[2] && al(l),
		o = l[11] && fl(l);
	return {
		c() {
			e = T("div");
			for (let s = 0; s < _.length; s += 1) _[s].c();
			(i = J()),
				g && g.c(),
				(n = J()),
				o && o.c(),
				d(e, "id", l[17]),
				d(e, "class", "rangeSlider"),
				A(e, "range", l[2]),
				A(e, "disabled", l[10]),
				A(e, "hoverable", l[9]),
				A(e, "vertical", l[6]),
				A(e, "reversed", l[8]),
				A(e, "focus", l[24]),
				A(e, "min", l[2] === "min"),
				A(e, "max", l[2] === "max"),
				A(e, "pips", l[11]),
				A(
					e,
					"pip-labels",
					l[13] === "label" ||
						l[14] === "label" ||
						l[15] === "label" ||
						l[16] === "label"
				);
		},
		m(s, m) {
			S(s, e, m);
			for (let c = 0; c < _.length; c += 1) _[c] && _[c].m(e, null);
			I(e, i),
				g && g.m(e, null),
				I(e, n),
				o && o.m(e, null),
				l[49](e),
				(a = !0),
				f ||
					((t = [
						H(window, "mousedown", l[38]),
						H(window, "touchstart", l[38]),
						H(window, "mousemove", l[39]),
						H(window, "touchmove", l[39]),
						H(window, "mouseup", l[40]),
						H(window, "touchend", l[41]),
						H(window, "keydown", l[42]),
						H(e, "mousedown", l[36]),
						H(e, "mouseup", l[37]),
						H(e, "touchstart", Ee(l[36])),
						H(e, "touchend", Ee(l[37]))
					]),
					(f = !0));
		},
		p(s, m) {
			if ((m[0] & 934020317) | (m[1] & 28)) {
				u = s[0];
				let c;
				for (c = 0; c < u.length; c += 1) {
					const b = $e(s, u, c);
					_[c] ? _[c].p(b, m) : ((_[c] = il(b)), _[c].c(), _[c].m(e, i));
				}
				for (; c < _.length; c += 1) _[c].d(1);
				_.length = u.length;
			}
			s[2]
				? g
					? g.p(s, m)
					: ((g = al(s)), g.c(), g.m(e, n))
				: g && (g.d(1), (g = null)),
				s[11]
					? o
						? (o.p(s, m), m[0] & 2048 && V(o, 1))
						: ((o = fl(s)), o.c(), V(o, 1), o.m(e, null))
					: o &&
					  (_e(),
					  P(o, 1, 1, () => {
							o = null;
					  }),
					  me()),
				(!a || m[0] & 131072) && d(e, "id", s[17]),
				(!a || m[0] & 4) && A(e, "range", s[2]),
				(!a || m[0] & 1024) && A(e, "disabled", s[10]),
				(!a || m[0] & 512) && A(e, "hoverable", s[9]),
				(!a || m[0] & 64) && A(e, "vertical", s[6]),
				(!a || m[0] & 256) && A(e, "reversed", s[8]),
				(!a || m[0] & 16777216) && A(e, "focus", s[24]),
				(!a || m[0] & 4) && A(e, "min", s[2] === "min"),
				(!a || m[0] & 4) && A(e, "max", s[2] === "max"),
				(!a || m[0] & 2048) && A(e, "pips", s[11]),
				(!a || m[0] & 122880) &&
					A(
						e,
						"pip-labels",
						s[13] === "label" ||
							s[14] === "label" ||
							s[15] === "label" ||
							s[16] === "label"
					);
		},
		i(s) {
			a || (V(o), (a = !0));
		},
		o(s) {
			P(o), (a = !1);
		},
		d(s) {
			s && E(e), ul(_, s), g && g.d(), o && o.d(), l[49](null), (f = !1), ue(t);
		}
	};
}
function tl(l) {
	if (!l) return -1;
	for (var e = 0; (l = l.previousElementSibling); ) e++;
	return e;
}
function Fe(l) {
	return l.type.includes("touch") ? l.touches[0] : l;
}
function en(l, e, i) {
	let n,
		a,
		f,
		t,
		u,
		_,
		g = G,
		o = () => (g(), (g = Bl(re, (r) => i(29, (_ = r)))), re);
	l.$$.on_destroy.push(() => g());
	let { slider: s } = e,
		{ range: m = !1 } = e,
		{ pushy: c = !1 } = e,
		{ min: b = 0 } = e,
		{ max: y = 100 } = e,
		{ step: F = 1 } = e,
		{ values: k = [(y + b) / 2] } = e,
		{ vertical: C = !1 } = e,
		{ float: q = !1 } = e,
		{ reversed: L = !1 } = e,
		{ hoverable: Q = !0 } = e,
		{ disabled: U = !1 } = e,
		{ pips: x = !1 } = e,
		{ pipstep: z = void 0 } = e,
		{ all: X = void 0 } = e,
		{ first: $ = void 0 } = e,
		{ last: ee = void 0 } = e,
		{ rest: W = void 0 } = e,
		{ id: w = void 0 } = e,
		{ prefix: p = "" } = e,
		{ suffix: se = "" } = e,
		{ formatter: we = (r, v, M) => r } = e,
		{ handleFormatter: ae = we } = e,
		{ precision: de = 2 } = e,
		{ springValues: ve = { stiffness: 0.15, damping: 0.4 } } = e;
	const Ae = Re();
	let ye = 0,
		le = !1,
		fe = !1,
		te = !1,
		h = !1,
		B = k.length - 1,
		K,
		ne,
		re;
	function Me(r) {
		const v = s.querySelectorAll(".handle"),
			M = Array.prototype.includes.call(v, r),
			R = Array.prototype.some.call(v, (ie) => ie.contains(r));
		return M || R;
	}
	function Se(r) {
		return m === "min" || m === "max" ? r.slice(0, 1) : m ? r.slice(0, 2) : r;
	}
	function ce() {
		return s.getBoundingClientRect();
	}
	function Te(r) {
		const v = ce();
		let M = 0,
			R = 0,
			ie = 0;
		C
			? ((M = r.clientY - v.top),
			  (R = (M / v.height) * 100),
			  (R = L ? R : 100 - R))
			: ((M = r.clientX - v.left),
			  (R = (M / v.width) * 100),
			  (R = L ? 100 - R : R)),
			(ie = ((y - b) / 100) * R + b);
		let Ue;
		return m === !0 && k[0] === k[1]
			? ie > k[1]
				? 1
				: 0
			: ((Ue = k.indexOf(
					[...k].sort((Hl, Ml) => Math.abs(ie - Hl) - Math.abs(ie - Ml))[0]
			  )),
			  Ue);
	}
	function Be(r) {
		const v = ce();
		let M = 0,
			R = 0,
			ie = 0;
		C
			? ((M = r.clientY - v.top),
			  (R = (M / v.height) * 100),
			  (R = L ? R : 100 - R))
			: ((M = r.clientX - v.left),
			  (R = (M / v.width) * 100),
			  (R = L ? 100 - R : R)),
			(ie = ((y - b) / 100) * R + b),
			be(B, ie);
	}
	function be(r, v) {
		return (
			(v = f(v)),
			typeof r > "u" && (r = B),
			m &&
				(r === 0 && v > k[1]
					? c
						? i(0, (k[1] = v), k)
						: (v = k[1])
					: r === 1 && v < k[0] && (c ? i(0, (k[0] = v), k) : (v = k[0]))),
			k[r] !== v && i(0, (k[r] = v), k),
			ne !== v && (Pl(), (ne = v)),
			v
		);
	}
	function cl(r) {
		return m === "min" ? 0 : r[0];
	}
	function bl(r) {
		return m === "max" ? 0 : m === "min" ? 100 - r[0] : 100 - r[1];
	}
	function gl(r) {
		h && (i(24, (le = !1)), (fe = !1), i(25, (te = !1)));
	}
	function hl(r) {
		U || (i(26, (B = tl(r.target))), i(24, (le = !0)));
	}
	function pl(r) {
		if (!U) {
			const v = tl(r.target);
			let M = r.ctrlKey || r.metaKey || r.shiftKey ? F * 10 : F,
				R = !1;
			switch (r.key) {
				case "PageDown":
					M *= 10;
				case "ArrowRight":
				case "ArrowUp":
					be(v, k[v] + M), (R = !0);
					break;
				case "PageUp":
					M *= 10;
				case "ArrowLeft":
				case "ArrowDown":
					be(v, k[v] - M), (R = !0);
					break;
				case "Home":
					be(v, b), (R = !0);
					break;
				case "End":
					be(v, y), (R = !0);
					break;
			}
			R && (r.preventDefault(), r.stopPropagation());
		}
	}
	function kl(r) {
		if (!U) {
			const v = r.target,
				M = Fe(r);
			i(24, (le = !0)),
				(fe = !0),
				i(25, (te = !0)),
				i(26, (B = Te(M))),
				(K = ne = f(k[B])),
				Vl(),
				r.type === "touchstart" && !v.matches(".pipVal") && Be(M);
		}
	}
	function wl(r) {
		r.type === "touchend" && Le(), i(25, (te = !1));
	}
	function vl(r) {
		(h = !1), le && r.target !== s && !s.contains(r.target) && i(24, (le = !1));
	}
	function Al(r) {
		U || (fe && Be(Fe(r)));
	}
	function yl(r) {
		if (!U) {
			const v = r.target;
			fe &&
				((v === s || s.contains(v)) &&
					(i(24, (le = !0)), !Me(v) && !v.matches(".pipVal") && Be(Fe(r))),
				Le());
		}
		(fe = !1), i(25, (te = !1));
	}
	function Sl(r) {
		(fe = !1), i(25, (te = !1));
	}
	function El(r) {
		U || ((r.target === s || s.contains(r.target)) && (h = !0));
	}
	function Vl() {
		!U &&
			Ae("start", { activeHandle: B, value: K, values: k.map((r) => f(r)) });
	}
	function Le() {
		!U &&
			Ae("stop", {
				activeHandle: B,
				startValue: K,
				value: k[B],
				values: k.map((r) => f(r))
			});
	}
	function Pl() {
		!U &&
			Ae("change", {
				activeHandle: B,
				startValue: K,
				previousValue: typeof ne > "u" ? K : ne,
				value: k[B],
				values: k.map((r) => f(r))
			});
	}
	function Rl(r) {
		He[r ? "unshift" : "push"](() => {
			(s = r), i(1, s);
		});
	}
	return (
		(l.$$set = (r) => {
			"slider" in r && i(1, (s = r.slider)),
				"range" in r && i(2, (m = r.range)),
				"pushy" in r && i(43, (c = r.pushy)),
				"min" in r && i(3, (b = r.min)),
				"max" in r && i(4, (y = r.max)),
				"step" in r && i(5, (F = r.step)),
				"values" in r && i(0, (k = r.values)),
				"vertical" in r && i(6, (C = r.vertical)),
				"float" in r && i(7, (q = r.float)),
				"reversed" in r && i(8, (L = r.reversed)),
				"hoverable" in r && i(9, (Q = r.hoverable)),
				"disabled" in r && i(10, (U = r.disabled)),
				"pips" in r && i(11, (x = r.pips)),
				"pipstep" in r && i(12, (z = r.pipstep)),
				"all" in r && i(13, (X = r.all)),
				"first" in r && i(14, ($ = r.first)),
				"last" in r && i(15, (ee = r.last)),
				"rest" in r && i(16, (W = r.rest)),
				"id" in r && i(17, (w = r.id)),
				"prefix" in r && i(18, (p = r.prefix)),
				"suffix" in r && i(19, (se = r.suffix)),
				"formatter" in r && i(20, (we = r.formatter)),
				"handleFormatter" in r && i(21, (ae = r.handleFormatter)),
				"precision" in r && i(44, (de = r.precision)),
				"springValues" in r && i(45, (ve = r.springValues));
		}),
		(l.$$.update = () => {
			l.$$.dirty[0] & 24 &&
				i(
					48,
					(a = function (r) {
						return r <= b ? b : r >= y ? y : r;
					})
				),
				(l.$$.dirty[0] & 56) | (l.$$.dirty[1] & 139264) &&
					i(
						47,
						(f = function (r) {
							if (r <= b) return b;
							if (r >= y) return y;
							let v = (r - b) % F,
								M = r - v;
							return (
								Math.abs(v) * 2 >= F && (M += v > 0 ? F : -F),
								(M = a(M)),
								parseFloat(M.toFixed(de))
							);
						})
					),
				(l.$$.dirty[0] & 24) | (l.$$.dirty[1] & 8192) &&
					i(
						23,
						(n = function (r) {
							let v = ((r - b) / (y - b)) * 100;
							return isNaN(v) || v <= 0
								? 0
								: v >= 100
								? 100
								: parseFloat(v.toFixed(de));
						})
					),
				(l.$$.dirty[0] & 12582937) | (l.$$.dirty[1] & 114688) &&
					(Array.isArray(k) ||
						(i(0, (k = [(y + b) / 2])),
						console.error(
							"'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)"
						)),
					i(0, (k = Se(k.map((r) => f(r))))),
					ye !== k.length
						? o(
								i(
									22,
									(re = Tl(
										k.map((r) => n(r)),
										ve
									))
								)
						  )
						: re.set(k.map((r) => n(r))),
					i(46, (ye = k.length))),
				l.$$.dirty[0] & 320 &&
					i(28, (t = C ? (L ? "top" : "bottom") : L ? "right" : "left")),
				l.$$.dirty[0] & 320 &&
					i(27, (u = C ? (L ? "bottom" : "top") : L ? "left" : "right"));
		}),
		[
			k,
			s,
			m,
			b,
			y,
			F,
			C,
			q,
			L,
			Q,
			U,
			x,
			z,
			X,
			$,
			ee,
			W,
			w,
			p,
			se,
			we,
			ae,
			re,
			n,
			le,
			te,
			B,
			u,
			t,
			_,
			be,
			cl,
			bl,
			gl,
			hl,
			pl,
			kl,
			wl,
			vl,
			Al,
			yl,
			Sl,
			El,
			c,
			de,
			ve,
			ye,
			f,
			a,
			Rl
		]
	);
}
class ln extends he {
	constructor(e) {
		super(),
			pe(
				this,
				e,
				en,
				$l,
				ke,
				{
					slider: 1,
					range: 2,
					pushy: 43,
					min: 3,
					max: 4,
					step: 5,
					values: 0,
					vertical: 6,
					float: 7,
					reversed: 8,
					hoverable: 9,
					disabled: 10,
					pips: 11,
					pipstep: 12,
					all: 13,
					first: 14,
					last: 15,
					rest: 16,
					id: 17,
					prefix: 18,
					suffix: 19,
					formatter: 20,
					handleFormatter: 21,
					precision: 44,
					springValues: 45
				},
				null,
				[-1, -1, -1]
			);
	}
}
function nn(l) {
	let e, i, n, a, f, t, u, _, g;
	(e = new Ql({ props: { editable: !0, absolute: !0 } })),
		e.$on("clear", l[12]),
		e.$on("edit", l[26]);
	let o = l[7] === "edit" && l[8]?.duration && sl(l);
	return {
		c() {
			D(e.$$.fragment),
				(i = J()),
				(n = T("audio")),
				(f = J()),
				o && o.c(),
				(t = oe()),
				(n.controls = !0),
				d(n, "preload", "metadata"),
				Pe(n.src, (a = l[1].data)) || d(n, "src", a),
				d(n, "class", "svelte-1thnwz");
		},
		m(s, m) {
			N(e, s, m),
				S(s, i, m),
				S(s, n, m),
				l[27](n),
				S(s, f, m),
				o && o.m(s, m),
				S(s, t, m),
				(u = !0),
				_ ||
					((g = [
						Il(l[13].call(null, n)),
						H(n, "play", l[22]),
						H(n, "pause", l[23]),
						H(n, "ended", l[24])
					]),
					(_ = !0));
		},
		p(s, m) {
			(!u || (m[0] & 2 && !Pe(n.src, (a = s[1].data)))) && d(n, "src", a),
				s[7] === "edit" && s[8]?.duration
					? o
						? (o.p(s, m), m[0] & 384 && V(o, 1))
						: ((o = sl(s)), o.c(), V(o, 1), o.m(t.parentNode, t))
					: o &&
					  (_e(),
					  P(o, 1, 1, () => {
							o = null;
					  }),
					  me());
		},
		i(s) {
			u || (V(e.$$.fragment, s), V(o), (u = !0));
		},
		o(s) {
			P(e.$$.fragment, s), P(o), (u = !1);
		},
		d(s) {
			O(e, s),
				s && E(i),
				s && E(n),
				l[27](null),
				s && E(f),
				o && o.d(s),
				s && E(t),
				(_ = !1),
				ue(g);
		}
	};
}
function an(l) {
	let e, i, n, a;
	const f = [tn, fn],
		t = [];
	function u(_, g) {
		return _[4] === "microphone" ? 0 : _[4] === "upload" ? 1 : -1;
	}
	return (
		~(e = u(l)) && (i = t[e] = f[e](l)),
		{
			c() {
				i && i.c(), (n = oe());
			},
			m(_, g) {
				~e && t[e].m(_, g), S(_, n, g), (a = !0);
			},
			p(_, g) {
				let o = e;
				(e = u(_)),
					e === o
						? ~e && t[e].p(_, g)
						: (i &&
								(_e(),
								P(t[o], 1, 1, () => {
									t[o] = null;
								}),
								me()),
						  ~e
								? ((i = t[e]),
								  i ? i.p(_, g) : ((i = t[e] = f[e](_)), i.c()),
								  V(i, 1),
								  i.m(n.parentNode, n))
								: (i = null));
			},
			i(_) {
				a || (V(i), (a = !0));
			},
			o(_) {
				P(i), (a = !1);
			},
			d(_) {
				~e && t[e].d(_), _ && E(n);
			}
		}
	);
}
function sl(l) {
	let e, i, n;
	function a(t) {
		l[28](t);
	}
	let f = { range: !0, min: 0, max: 100, step: 1 };
	return (
		l[9] !== void 0 && (f.values = l[9]),
		(e = new ln({ props: f })),
		He.push(() => ol(e, "values", a)),
		e.$on("change", l[14]),
		{
			c() {
				D(e.$$.fragment);
			},
			m(t, u) {
				N(e, t, u), (n = !0);
			},
			p(t, u) {
				const _ = {};
				!i && u[0] & 512 && ((i = !0), (_.values = t[9]), _l(() => (i = !1))),
					e.$set(_);
			},
			i(t) {
				n || (V(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				O(e, t);
			}
		}
	);
}
function fn(l) {
	let e, i, n;
	function a(t) {
		l[25](t);
	}
	let f = {
		filetype:
			"audio/aac,audio/midi,audio/mpeg,audio/ogg,audio/wav,audio/x-wav,audio/opus,audio/webm,audio/flac,audio/vnd.rn-realaudio,audio/x-ms-wma,audio/x-aiff,audio/amr,audio/*",
		$$slots: { default: [sn] },
		$$scope: { ctx: l }
	};
	return (
		l[0] !== void 0 && (f.dragging = l[0]),
		(e = new ql({ props: f })),
		He.push(() => ol(e, "dragging", a)),
		e.$on("load", l[15]),
		{
			c() {
				D(e.$$.fragment);
			},
			m(t, u) {
				N(e, t, u), (n = !0);
			},
			p(t, u) {
				const _ = {};
				u[0] & 536870912 && (_.$$scope = { dirty: u, ctx: t }),
					!i && u[0] & 1 && ((i = !0), (_.dragging = t[0]), _l(() => (i = !1))),
					e.$set(_);
			},
			i(t) {
				n || (V(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				P(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				O(e, t);
			}
		}
	);
}
function tn(l) {
	let e, i, n, a;
	const f = [un, rn],
		t = [];
	function u(_, g) {
		return _[6] ? 0 : 1;
	}
	return (
		(i = u(l)),
		(n = t[i] = f[i](l)),
		{
			c() {
				(e = T("div")), n.c(), d(e, "class", "mic-wrap svelte-1thnwz");
			},
			m(_, g) {
				S(_, e, g), t[i].m(e, null), (a = !0);
			},
			p(_, g) {
				let o = i;
				(i = u(_)),
					i === o
						? t[i].p(_, g)
						: (_e(),
						  P(t[o], 1, 1, () => {
								t[o] = null;
						  }),
						  me(),
						  (n = t[i]),
						  n ? n.p(_, g) : ((n = t[i] = f[i](_)), n.c()),
						  V(n, 1),
						  n.m(e, null));
			},
			i(_) {
				a || (V(n), (a = !0));
			},
			o(_) {
				P(n), (a = !1);
			},
			d(_) {
				_ && E(e), t[i].d();
			}
		}
	);
}
function sn(l) {
	let e;
	const i = l[21].default,
		n = Ll(i, l, l[29], null);
	return {
		c() {
			n && n.c();
		},
		m(a, f) {
			n && n.m(a, f), (e = !0);
		},
		p(a, f) {
			n &&
				n.p &&
				(!e || f[0] & 536870912) &&
				Ul(n, i, a, a[29], e ? Cl(i, a[29], f, null) : zl(a[29]), null);
		},
		i(a) {
			e || (V(n, a), (e = !0));
		},
		o(a) {
			P(n, a), (e = !1);
		},
		d(a) {
			n && n.d(a);
		}
	};
}
function rn(l) {
	let e, i;
	return (
		(e = new ml({
			props: { size: "sm", $$slots: { default: [on] }, $$scope: { ctx: l } }
		})),
		e.$on("click", l[10]),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, a) {
				const f = {};
				a[0] & 536870912 && (f.$$scope = { dirty: a, ctx: n }), e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function un(l) {
	let e, i;
	return (
		(e = new ml({
			props: { size: "sm", $$slots: { default: [_n] }, $$scope: { ctx: l } }
		})),
		e.$on("click", l[11]),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, a) {
				const f = {};
				a[0] & 536870912 && (f.$$scope = { dirty: a, ctx: n }), e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function on(l) {
	let e, i;
	return {
		c() {
			(e = T("span")),
				(e.innerHTML = '<span class="dot svelte-1thnwz"></span>'),
				(i = j(`
					Record from microphone`)),
				d(e, "class", "record-icon svelte-1thnwz");
		},
		m(n, a) {
			S(n, e, a), S(n, i, a);
		},
		p: G,
		d(n) {
			n && E(e), n && E(i);
		}
	};
}
function _n(l) {
	let e, i;
	return {
		c() {
			(e = T("span")),
				(e.innerHTML = `<span class="pinger svelte-1thnwz"></span> 
						<span class="dot svelte-1thnwz"></span>`),
				(i = j(`
					Stop recording`)),
				d(e, "class", "record-icon svelte-1thnwz");
		},
		m(n, a) {
			S(n, e, a), S(n, i, a);
		},
		p: G,
		d(n) {
			n && E(e), n && E(i);
		}
	};
}
function mn(l) {
	let e, i, n, a, f, t;
	e = new dl({
		props: {
			show_label: l[3],
			Icon: Ie,
			float: l[4] === "upload" && l[1] === null,
			label: l[2] || "Audio"
		}
	});
	const u = [an, nn],
		_ = [];
	function g(o, s) {
		return o[1] === null || o[5] ? 0 : 1;
	}
	return (
		(n = g(l)),
		(a = _[n] = u[n](l)),
		{
			c() {
				D(e.$$.fragment), (i = J()), a.c(), (f = oe());
			},
			m(o, s) {
				N(e, o, s), S(o, i, s), _[n].m(o, s), S(o, f, s), (t = !0);
			},
			p(o, s) {
				const m = {};
				s[0] & 8 && (m.show_label = o[3]),
					s[0] & 18 && (m.float = o[4] === "upload" && o[1] === null),
					s[0] & 4 && (m.label = o[2] || "Audio"),
					e.$set(m);
				let c = n;
				(n = g(o)),
					n === c
						? _[n].p(o, s)
						: (_e(),
						  P(_[c], 1, 1, () => {
								_[c] = null;
						  }),
						  me(),
						  (a = _[n]),
						  a ? a.p(o, s) : ((a = _[n] = u[n](o)), a.c()),
						  V(a, 1),
						  a.m(f.parentNode, f));
			},
			i(o) {
				t || (V(e.$$.fragment, o), V(a), (t = !0));
			},
			o(o) {
				P(e.$$.fragment, o), P(a), (t = !1);
			},
			d(o) {
				O(e, o), o && E(i), _[n].d(o), o && E(f);
			}
		}
	);
}
const dn = 500,
	rl = 44;
function cn(l) {
	return new Promise((e, i) => {
		let n = new FileReader();
		(n.onerror = i), (n.onload = () => e(n.result)), n.readAsDataURL(l);
	});
}
function bn(l, e, i) {
	let { $$slots: n = {}, $$scope: a } = e,
		{ value: f = null } = e,
		{ label: t } = e,
		{ show_label: u = !0 } = e,
		{ name: _ = "" } = e,
		{ source: g } = e,
		{ pending: o = !1 } = e,
		{ streaming: s = !1 } = e,
		m = !1,
		c,
		b = "",
		y,
		F = [],
		k = !1,
		C,
		q = !1,
		L = [0, 100],
		Q = [],
		U;
	function x() {
		U = [
			ze(
				() => import("./module-fcbc0651.js"),
				["./module-fcbc0651.js", "./module-a3cf0cc4.js"],
				import.meta.url
			),
			ze(
				() => import("./module-a5a0afa0.js"),
				["./module-a5a0afa0.js", "./module-a3cf0cc4.js"],
				import.meta.url
			)
		];
	}
	s && x();
	const z = Re(),
		X = async (h, B) => {
			let K = new Blob(h, { type: "audio/wav" });
			i(1, (f = { data: await cn(K), name: "audio.wav" })), z(B, f);
		};
	async function $() {
		let h;
		try {
			h = await navigator.mediaDevices.getUserMedia({ audio: !0 });
		} catch (B) {
			if (B instanceof DOMException && B.name == "NotAllowedError") {
				z("error", "Please allow access to the microphone for recording.");
				return;
			} else throw B;
		}
		if (h != null) {
			if (s) {
				const [{ MediaRecorder: B, register: K }, { connect: ne }] =
					await Promise.all(U);
				await K(await ne()), (c = new B(h, { mimeType: "audio/wav" }));
				async function re(Me) {
					let Se = await Me.data.arrayBuffer(),
						ce = new Uint8Array(Se);
					if (
						(y ||
							(i(18, (y = new Uint8Array(Se.slice(0, rl)))),
							(ce = new Uint8Array(Se.slice(rl)))),
						o)
					)
						F.push(ce);
					else {
						let Te = [y].concat(F, [ce]);
						X(Te, "stream"), i(19, (F = []));
					}
				}
				c.addEventListener("dataavailable", re);
			} else
				(c = new MediaRecorder(h)),
					c.addEventListener("dataavailable", (B) => {
						Q.push(B.data);
					}),
					c.addEventListener("stop", async () => {
						i(6, (m = !1)), await X(Q, "change"), (Q = []);
					});
			q = !0;
		}
	}
	async function ee() {
		i(6, (m = !0)),
			q || (await $()),
			i(18, (y = void 0)),
			s ? c.start(dn) : c.start();
	}
	Fl(() => {
		c && c.state !== "inactive" && c.stop();
	});
	const W = async () => {
		c.stop(), s && (i(6, (m = !1)), o && i(20, (k = !0)));
	};
	function w() {
		z("change"), z("clear"), i(7, (b = "")), i(1, (f = null));
	}
	function p(h) {
		function B() {
			const K = (L[0] / 100) * h.duration,
				ne = (L[1] / 100) * h.duration;
			h.currentTime < K && (h.currentTime = K),
				h.currentTime > ne && ((h.currentTime = K), h.pause());
		}
		return (
			h.addEventListener("timeupdate", B),
			{ destroy: () => h.removeEventListener("timeupdate", B) }
		);
	}
	function se({ detail: { values: h } }) {
		f &&
			(z("change", { data: f.data, name: _, crop_min: h[0], crop_max: h[1] }),
			z("edit"));
	}
	function we({ detail: h }) {
		i(1, (f = h)), z("change", { data: h.data, name: h.name }), z("upload", h);
	}
	let { dragging: ae = !1 } = e;
	function de(h) {
		Z.call(this, l, h);
	}
	function ve(h) {
		Z.call(this, l, h);
	}
	function Ae(h) {
		Z.call(this, l, h);
	}
	function ye(h) {
		(ae = h), i(0, ae);
	}
	const le = () => i(7, (b = "edit"));
	function fe(h) {
		He[h ? "unshift" : "push"](() => {
			(C = h), i(8, C);
		});
	}
	function te(h) {
		(L = h), i(9, L);
	}
	return (
		(l.$$set = (h) => {
			"value" in h && i(1, (f = h.value)),
				"label" in h && i(2, (t = h.label)),
				"show_label" in h && i(3, (u = h.show_label)),
				"name" in h && i(16, (_ = h.name)),
				"source" in h && i(4, (g = h.source)),
				"pending" in h && i(17, (o = h.pending)),
				"streaming" in h && i(5, (s = h.streaming)),
				"dragging" in h && i(0, (ae = h.dragging)),
				"$$scope" in h && i(29, (a = h.$$scope));
		}),
		(l.$$.update = () => {
			if (
				l.$$.dirty[0] & 1966080 &&
				k &&
				o === !1 &&
				(i(20, (k = !1)), y && F)
			) {
				let h = [y].concat(F);
				i(19, (F = [])), X(h, "stream");
			}
			l.$$.dirty[0] & 1 && z("drag", ae);
		}),
		[
			ae,
			f,
			t,
			u,
			g,
			s,
			m,
			b,
			C,
			L,
			ee,
			W,
			w,
			p,
			se,
			we,
			_,
			o,
			y,
			F,
			k,
			n,
			de,
			ve,
			Ae,
			ye,
			le,
			fe,
			te,
			a
		]
	);
}
class gn extends he {
	constructor(e) {
		super(),
			pe(
				this,
				e,
				bn,
				mn,
				ke,
				{
					value: 1,
					label: 2,
					show_label: 3,
					name: 16,
					source: 4,
					pending: 17,
					streaming: 5,
					dragging: 0
				},
				null,
				[-1, -1]
			);
	}
}
function hn(l) {
	let e, i, n, a;
	return {
		c() {
			(e = T("audio")),
				(e.controls = !0),
				d(e, "preload", "metadata"),
				Pe(e.src, (i = l[0].data)) || d(e, "src", i),
				d(e, "class", "svelte-eemfgq");
		},
		m(f, t) {
			S(f, e, t),
				n ||
					((a = [H(e, "play", l[4]), H(e, "pause", l[5]), H(e, "ended", l[6])]),
					(n = !0));
		},
		p(f, t) {
			t & 1 && !Pe(e.src, (i = f[0].data)) && d(e, "src", i);
		},
		i: G,
		o: G,
		d(f) {
			f && E(e), (n = !1), ue(a);
		}
	};
}
function pn(l) {
	let e, i;
	return (
		(e = new Xl({
			props: {
				size: "small",
				unpadded_box: !0,
				$$slots: { default: [kn] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, a) {
				const f = {};
				a & 256 && (f.$$scope = { dirty: a, ctx: n }), e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function kn(l) {
	let e, i;
	return (
		(e = new Ie({})),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function wn(l) {
	let e, i, n, a, f, t;
	e = new dl({
		props: { show_label: l[2], Icon: Ie, float: !1, label: l[1] || "Audio" }
	});
	const u = [pn, hn],
		_ = [];
	function g(o, s) {
		return o[0] === null ? 0 : 1;
	}
	return (
		(n = g(l)),
		(a = _[n] = u[n](l)),
		{
			c() {
				D(e.$$.fragment), (i = J()), a.c(), (f = oe());
			},
			m(o, s) {
				N(e, o, s), S(o, i, s), _[n].m(o, s), S(o, f, s), (t = !0);
			},
			p(o, [s]) {
				const m = {};
				s & 4 && (m.show_label = o[2]),
					s & 2 && (m.label = o[1] || "Audio"),
					e.$set(m);
				let c = n;
				(n = g(o)),
					n === c
						? _[n].p(o, s)
						: (_e(),
						  P(_[c], 1, 1, () => {
								_[c] = null;
						  }),
						  me(),
						  (a = _[n]),
						  a ? a.p(o, s) : ((a = _[n] = u[n](o)), a.c()),
						  V(a, 1),
						  a.m(f.parentNode, f));
			},
			i(o) {
				t || (V(e.$$.fragment, o), V(a), (t = !0));
			},
			o(o) {
				P(e.$$.fragment, o), P(a), (t = !1);
			},
			d(o) {
				O(e, o), o && E(i), _[n].d(o), o && E(f);
			}
		}
	);
}
function vn(l, e, i) {
	let { value: n = null } = e,
		{ label: a } = e,
		{ name: f } = e,
		{ show_label: t = !0 } = e;
	const u = Re();
	function _(s) {
		Z.call(this, l, s);
	}
	function g(s) {
		Z.call(this, l, s);
	}
	function o(s) {
		Z.call(this, l, s);
	}
	return (
		(l.$$set = (s) => {
			"value" in s && i(0, (n = s.value)),
				"label" in s && i(1, (a = s.label)),
				"name" in s && i(3, (f = s.name)),
				"show_label" in s && i(2, (t = s.show_label));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 9 && n && u("change", { name: f, data: n?.data });
		}),
		[n, a, t, f, _, g, o]
	);
}
class An extends he {
	constructor(e) {
		super(),
			pe(this, e, vn, wn, ke, { value: 0, label: 1, name: 3, show_label: 2 });
	}
}
function yn(l) {
	let e, i;
	return (
		(e = new An({
			props: {
				show_label: l[9],
				value: l[12],
				name: l[12]?.name || "audio_file",
				label: l[8]
			}
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, a) {
				const f = {};
				a & 512 && (f.show_label = n[9]),
					a & 4096 && (f.value = n[12]),
					a & 4096 && (f.name = n[12]?.name || "audio_file"),
					a & 256 && (f.label = n[8]),
					e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function Sn(l) {
	let e, i;
	return (
		(e = new gn({
			props: {
				label: l[8],
				show_label: l[9],
				value: l[12],
				name: l[6],
				source: l[7],
				pending: l[10],
				streaming: l[11],
				$$slots: { default: [En] },
				$$scope: { ctx: l }
			}
		})),
		e.$on("change", l[17]),
		e.$on("stream", l[18]),
		e.$on("drag", l[19]),
		e.$on("edit", l[20]),
		e.$on("play", l[21]),
		e.$on("pause", l[22]),
		e.$on("ended", l[23]),
		e.$on("upload", l[24]),
		e.$on("error", l[25]),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, a) {
				const f = {};
				a & 256 && (f.label = n[8]),
					a & 512 && (f.show_label = n[9]),
					a & 4096 && (f.value = n[12]),
					a & 64 && (f.name = n[6]),
					a & 128 && (f.source = n[7]),
					a & 1024 && (f.pending = n[10]),
					a & 2048 && (f.streaming = n[11]),
					a & 67108864 && (f.$$scope = { dirty: a, ctx: n }),
					e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function En(l) {
	let e, i;
	return (
		(e = new Kl({ props: { type: "audio" } })),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p: G,
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function Vn(l) {
	let e, i, n, a, f, t;
	const u = [l[1]];
	let _ = {};
	for (let m = 0; m < u.length; m += 1) _ = Dl(_, u[m]);
	e = new Nl({ props: _ });
	const g = [Sn, yn],
		o = [];
	function s(m, c) {
		return m[5] === "dynamic" ? 0 : 1;
	}
	return (
		(n = s(l)),
		(a = o[n] = g[n](l)),
		{
			c() {
				D(e.$$.fragment), (i = J()), a.c(), (f = oe());
			},
			m(m, c) {
				N(e, m, c), S(m, i, c), o[n].m(m, c), S(m, f, c), (t = !0);
			},
			p(m, c) {
				const b = c & 2 ? Ol(u, [jl(m[1])]) : {};
				e.$set(b);
				let y = n;
				(n = s(m)),
					n === y
						? o[n].p(m, c)
						: (_e(),
						  P(o[y], 1, 1, () => {
								o[y] = null;
						  }),
						  me(),
						  (a = o[n]),
						  a ? a.p(m, c) : ((a = o[n] = g[n](m)), a.c()),
						  V(a, 1),
						  a.m(f.parentNode, f));
			},
			i(m) {
				t || (V(e.$$.fragment, m), V(a), (t = !0));
			},
			o(m) {
				P(e.$$.fragment, m), P(a), (t = !1);
			},
			d(m) {
				O(e, m), m && E(i), o[n].d(m), m && E(f);
			}
		}
	);
}
function Pn(l) {
	let e, i;
	return (
		(e = new Yl({
			props: {
				variant:
					l[5] === "dynamic" && l[0] === null && l[7] === "upload"
						? "dashed"
						: "solid",
				border_mode: l[13] ? "focus" : "base",
				padding: !1,
				elem_id: l[2],
				elem_classes: l[3],
				visible: l[4],
				$$slots: { default: [Vn] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				D(e.$$.fragment);
			},
			m(n, a) {
				N(e, n, a), (i = !0);
			},
			p(n, [a]) {
				const f = {};
				a & 161 &&
					(f.variant =
						n[5] === "dynamic" && n[0] === null && n[7] === "upload"
							? "dashed"
							: "solid"),
					a & 8192 && (f.border_mode = n[13] ? "focus" : "base"),
					a & 4 && (f.elem_id = n[2]),
					a & 8 && (f.elem_classes = n[3]),
					a & 16 && (f.visible = n[4]),
					a & 67125219 && (f.$$scope = { dirty: a, ctx: n }),
					e.$set(f);
			},
			i(n) {
				i || (V(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				P(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				O(e, n);
			}
		}
	);
}
function Rn(l, e, i) {
	const n = Re();
	let { elem_id: a = "" } = e,
		{ elem_classes: f = [] } = e,
		{ visible: t = !0 } = e,
		{ mode: u } = e,
		{ value: _ = null } = e,
		{ name: g } = e,
		{ source: o } = e,
		{ label: s } = e,
		{ root: m } = e,
		{ show_label: c } = e,
		{ pending: b } = e,
		{ streaming: y } = e,
		{ root_url: F } = e,
		{ loading_status: k } = e,
		C,
		q;
	const L = ({ detail: w }) => {
			i(0, (_ = w)), n("change", _);
		},
		Q = ({ detail: w }) => {
			i(0, (_ = w)), n("stream", _);
		},
		U = ({ detail: w }) => i(13, (q = w));
	function x(w) {
		Z.call(this, l, w);
	}
	function z(w) {
		Z.call(this, l, w);
	}
	function X(w) {
		Z.call(this, l, w);
	}
	function $(w) {
		Z.call(this, l, w);
	}
	function ee(w) {
		Z.call(this, l, w);
	}
	const W = ({ detail: w }) => {
		i(1, (k = k || {})),
			i(1, (k.status = "error"), k),
			i(1, (k.message = w), k);
	};
	return (
		(l.$$set = (w) => {
			"elem_id" in w && i(2, (a = w.elem_id)),
				"elem_classes" in w && i(3, (f = w.elem_classes)),
				"visible" in w && i(4, (t = w.visible)),
				"mode" in w && i(5, (u = w.mode)),
				"value" in w && i(0, (_ = w.value)),
				"name" in w && i(6, (g = w.name)),
				"source" in w && i(7, (o = w.source)),
				"label" in w && i(8, (s = w.label)),
				"root" in w && i(15, (m = w.root)),
				"show_label" in w && i(9, (c = w.show_label)),
				"pending" in w && i(10, (b = w.pending)),
				"streaming" in w && i(11, (y = w.streaming)),
				"root_url" in w && i(16, (F = w.root_url)),
				"loading_status" in w && i(1, (k = w.loading_status));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 98305 && i(12, (C = Zl(_, m, F)));
		}),
		[
			_,
			k,
			a,
			f,
			t,
			u,
			g,
			o,
			s,
			c,
			b,
			y,
			C,
			q,
			n,
			m,
			F,
			L,
			Q,
			U,
			x,
			z,
			X,
			$,
			ee,
			W
		]
	);
}
class Hn extends he {
	constructor(e) {
		super(),
			pe(this, e, Rn, Pn, ke, {
				elem_id: 2,
				elem_classes: 3,
				visible: 4,
				mode: 5,
				value: 0,
				name: 6,
				source: 7,
				label: 8,
				root: 15,
				show_label: 9,
				pending: 10,
				streaming: 11,
				root_url: 16,
				loading_status: 1
			});
	}
}
const Nn = Hn,
	On = ["static", "dynamic"],
	jn = () => ({
		type: {
			input_payload: "{ name: string; data: string }",
			response_object: "{ name: string; data: string, is_file: boolean }"
		},
		description: {
			input_payload: "audio data as object with filename and base64 string",
			response_object:
				"object that includes path to audio file. The URL: {ROOT}file={name} contains the data"
		},
		example_data: {
			name: "audio.wav",
			data: "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="
		}
	});
export { Nn as Component, jn as document, On as modes };
//# sourceMappingURL=index-7ec48f47.js.map
