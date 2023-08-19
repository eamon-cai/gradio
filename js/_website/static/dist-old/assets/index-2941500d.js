import {
	S as R,
	i as V,
	s as W,
	B as S,
	C as u,
	g as L,
	E as w,
	F as I,
	q as E,
	G as O,
	H as X,
	I as K,
	D as F,
	aa as ye,
	ah as we,
	K as P,
	f as G,
	N as Y,
	r as de,
	u as je,
	ai as Z,
	a6 as Le,
	a1 as Ee,
	e as N,
	m as H,
	p as z,
	t as B,
	n as q,
	x as Ae,
	$ as Ce,
	h as Me,
	j as Te,
	l as pe,
	o as ve
} from "../lite.js";
import { U as ze } from "./Upload-09ed31cf.js";
import { M as Be } from "./ModifyUpload-33254150.js";
import { B as Se } from "./Button-5b68d65a.js";
import { B as Ue } from "./BlockLabel-e392131b.js";
import { E as Fe } from "./Empty-b331fdfe.js";
import { g as Ne } from "./color-1d056486.js";
import { a as He } from "./csv-b0b7514a.js";
import { Z as J, _ as Q, l as $ } from "./linear-58a44b5e.js";
import { U as qe } from "./UploadText-45e994b7.js";
import "./Blocks-b77f2878.js";
/* empty css                                                    */ import "./ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js";
import "./dsv-576afacd.js";
function De(l) {
	let e, n, t;
	return {
		c() {
			(e = S("svg")),
				(n = S("path")),
				(t = S("path")),
				u(
					n,
					"d",
					"M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.954 6.954 0 0 0 2 27.242V30h2.756a6.952 6.952 0 0 0 4.95-2.05L28.828 8.829a3.999 3.999 0 0 0 0-5.657zM10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828zm-2.619 8.276A4.966 4.966 0 0 1 4.756 28H4v-.759a4.967 4.967 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828zM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z"
				),
				u(n, "fill", "currentColor"),
				u(
					t,
					"d",
					"M6.5 15a3.5 3.5 0 0 1-2.475-5.974l3.5-3.5a1.502 1.502 0 0 0 0-2.121a1.537 1.537 0 0 0-2.121 0L3.415 5.394L2 3.98l1.99-1.988a3.585 3.585 0 0 1 4.95 0a3.504 3.504 0 0 1 0 4.949L5.439 10.44a1.502 1.502 0 0 0 0 2.121a1.537 1.537 0 0 0 2.122 0l4.024-4.024L13 9.95l-4.025 4.024A3.475 3.475 0 0 1 6.5 15z"
				),
				u(t, "fill", "currentColor"),
				u(e, "width", "1em"),
				u(e, "height", "1em"),
				u(e, "viewBox", "0 0 32 32");
		},
		m(o, a) {
			L(o, e, a), w(e, n), w(e, t);
		},
		p: I,
		i: I,
		o: I,
		d(o) {
			o && E(e);
		}
	};
}
let be = class extends R {
	constructor(e) {
		super(), V(this, e, null, De, W, {});
	}
};
function x(l) {
	let e;
	return (
		Array.isArray(l)
			? (e = l.reduce(
					(n, { values: t }) => [...n, ...t.map(({ y: o }) => o)],
					[]
			  ))
			: (e = l.values),
		[Math.min(...e), Math.max(...e)]
	);
}
function ee(l, e, n) {
	const t = Object.entries(l[0]).reduce(
		(o, a, s) => (
			(!e && s === 0) || (e && a[0] === e)
				? (o.x.name = a[0])
				: (!n || (n && n.includes(a[0]))) &&
				  o.y.push({ name: a[0], values: [] }),
			o
		),
		{ x: { name: "", values: [] }, y: [] }
	);
	for (let o = 0; o < l.length; o++) {
		const a = Object.entries(l[o]);
		for (let s = 0; s < a.length; s++) {
			let [_, r] = a[s];
			_ === t.x.name
				? t.x.values.push(parseFloat(r))
				: t.y[s - 1].values.push({
						y: parseFloat(a[s][1]),
						x: parseFloat(a[0][1])
				  });
		}
	}
	return t;
}
function Ie(l) {
	let e, n, t, o, a;
	return {
		c() {
			(e = O("div")),
				(n = O("span")),
				(t = X()),
				(o = K(l[0])),
				F(n, "background", l[3]),
				u(n, "class", "svelte-1gww5xe"),
				F(e, "top", l[2] - l[5] / 2 + "px"),
				F(e, "left", l[1] - l[4] - 7 + "px"),
				u(e, "class", "svelte-1gww5xe"),
				ye(() => l[6].call(e));
		},
		m(s, _) {
			L(s, e, _), w(e, n), w(e, t), w(e, o), (a = we(e, l[6].bind(e)));
		},
		p(s, [_]) {
			_ & 8 && F(n, "background", s[3]),
				_ & 1 && P(o, s[0]),
				_ & 36 && F(e, "top", s[2] - s[5] / 2 + "px"),
				_ & 18 && F(e, "left", s[1] - s[4] - 7 + "px");
		},
		i: I,
		o: I,
		d(s) {
			s && E(e), a();
		}
	};
}
function Oe(l, e, n) {
	let { text: t } = e,
		{ x: o } = e,
		{ y: a } = e,
		{ color: s } = e,
		_,
		r;
	function p() {
		(_ = this.offsetWidth), (r = this.offsetHeight), n(4, _), n(5, r);
	}
	return (
		(l.$$set = (d) => {
			"text" in d && n(0, (t = d.text)),
				"x" in d && n(1, (o = d.x)),
				"y" in d && n(2, (a = d.y)),
				"color" in d && n(3, (s = d.color));
		}),
		[t, o, a, s, _, r, p]
	);
}
class Xe extends R {
	constructor(e) {
		super(), V(this, e, Oe, Ie, W, { text: 0, x: 1, y: 2, color: 3 });
	}
}
function Ye(l, { color: e, text: n }) {
	let t;
	function o(r) {
		return (
			(t = new Xe({
				props: { text: n, x: r.pageX, y: r.pageY, color: e },
				target: document.body
			})),
			r
		);
	}
	function a(r) {
		t.$set({ x: r.pageX, y: r.pageY });
	}
	function s() {
		t.$destroy();
	}
	const _ = l;
	return (
		_.addEventListener("mouseover", o),
		_.addEventListener("mouseleave", s),
		_.addEventListener("mousemove", a),
		{
			destroy() {
				_.removeEventListener("mouseover", o),
					_.removeEventListener("mouseleave", s),
					_.removeEventListener("mousemove", a);
			}
		}
	);
}
function le(l, e, n) {
	const t = l.slice();
	(t[16] = e[n].name), (t[17] = e[n].values);
	const o = t[8][t[16]];
	return (t[18] = o), t;
}
function te(l, e, n) {
	const t = l.slice();
	return (t[0] = e[n].x), (t[1] = e[n].y), t;
}
function ne(l, e, n) {
	const t = l.slice();
	(t[16] = e[n].name), (t[17] = e[n].values);
	const o = t[8][t[16]];
	return (t[18] = o), t;
}
function oe(l, e, n) {
	const t = l.slice();
	return (t[0] = e[n].x), (t[1] = e[n].y), t;
}
function se(l, e, n) {
	const t = l.slice();
	return (t[27] = e[n]), t;
}
function ae(l, e, n) {
	const t = l.slice();
	return (t[27] = e[n]), t;
}
function re(l, e, n) {
	const t = l.slice();
	return (t[16] = e[n].name), t;
}
function ie(l) {
	let e,
		n,
		t,
		o = l[16] + "",
		a,
		s;
	return {
		c() {
			(e = O("div")),
				(n = O("span")),
				(t = X()),
				(a = K(o)),
				(s = X()),
				u(n, "class", "legend-box svelte-1mjxput"),
				F(n, "background-color", l[8][l[16]]),
				u(e, "class", "legend-item svelte-1mjxput");
		},
		m(_, r) {
			L(_, e, r), w(e, n), w(e, t), w(e, a), w(e, s);
		},
		p(_, r) {
			r[0] & 260 && F(n, "background-color", _[8][_[16]]),
				r[0] & 4 && o !== (o = _[16] + "") && P(a, o);
		},
		d(_) {
			_ && E(e);
		}
	};
}
function fe(l) {
	let e,
		n,
		t,
		o,
		a,
		s,
		_ = l[27] + "",
		r,
		p,
		d;
	return {
		c() {
			(e = S("line")),
				(s = S("text")),
				(r = K(_)),
				u(e, "stroke-width", "0.5"),
				u(e, "x1", (n = l[5](l[27]))),
				u(e, "x2", (t = l[5](l[27]))),
				u(e, "y1", (o = l[4](l[9][0] < l[6][0] ? l[9][0] : l[6][0]) + 10)),
				u(
					e,
					"y2",
					(a = l[4](
						l[6][1] > l[9][l[9].length - 1] ? l[6][1] : l[9][l[9].length - 1]
					))
				),
				u(e, "stroke", "#aaa"),
				u(s, "class", "label-text svelte-1mjxput"),
				u(s, "text-anchor", "middle"),
				u(s, "x", (p = l[5](l[27]))),
				u(s, "y", (d = l[4](l[9][0]) + 30));
		},
		m(i, h) {
			L(i, e, h), L(i, s, h), w(s, r);
		},
		p(i, h) {
			h[0] & 1056 && n !== (n = i[5](i[27])) && u(e, "x1", n),
				h[0] & 1056 && t !== (t = i[5](i[27])) && u(e, "x2", t),
				h[0] & 592 &&
					o !== (o = i[4](i[9][0] < i[6][0] ? i[9][0] : i[6][0]) + 10) &&
					u(e, "y1", o),
				h[0] & 592 &&
					a !==
						(a = i[4](
							i[6][1] > i[9][i[9].length - 1] ? i[6][1] : i[9][i[9].length - 1]
						)) &&
					u(e, "y2", a),
				h[0] & 1024 && _ !== (_ = i[27] + "") && P(r, _),
				h[0] & 1056 && p !== (p = i[5](i[27])) && u(s, "x", p),
				h[0] & 528 && d !== (d = i[4](i[9][0]) + 30) && u(s, "y", d);
		},
		d(i) {
			i && E(e), i && E(s);
		}
	};
}
function _e(l) {
	let e,
		n,
		t,
		o,
		a,
		s,
		_ = l[27] + "",
		r,
		p,
		d;
	return {
		c() {
			(e = S("line")),
				(s = S("text")),
				(r = K(_)),
				u(e, "stroke-width", "0.5"),
				u(e, "y1", (n = l[4](l[27]))),
				u(e, "y2", (t = l[4](l[27]))),
				u(e, "x1", (o = l[5](l[10][0] < l[7][0] ? l[10][0] : l[7][0]) - 10)),
				u(
					e,
					"x2",
					(a = l[5](
						l[7][1] > l[10][l[10].length - 1]
							? l[7][1]
							: l[10][l[10].length - 1]
					))
				),
				u(e, "stroke", "#aaa"),
				u(s, "class", "label-text svelte-1mjxput"),
				u(s, "text-anchor", "end"),
				u(s, "y", (p = l[4](l[27]) + 4)),
				u(s, "x", (d = l[5](l[10][0]) - 20));
		},
		m(i, h) {
			L(i, e, h), L(i, s, h), w(s, r);
		},
		p(i, h) {
			h[0] & 528 && n !== (n = i[4](i[27])) && u(e, "y1", n),
				h[0] & 528 && t !== (t = i[4](i[27])) && u(e, "y2", t),
				h[0] & 1184 &&
					o !== (o = i[5](i[10][0] < i[7][0] ? i[10][0] : i[7][0]) - 10) &&
					u(e, "x1", o),
				h[0] & 1184 &&
					a !==
						(a = i[5](
							i[7][1] > i[10][i[10].length - 1]
								? i[7][1]
								: i[10][i[10].length - 1]
						)) &&
					u(e, "x2", a),
				h[0] & 512 && _ !== (_ = i[27] + "") && P(r, _),
				h[0] & 528 && p !== (p = i[4](i[27]) + 4) && u(s, "y", p),
				h[0] & 1056 && d !== (d = i[5](i[10][0]) - 20) && u(s, "x", d);
		},
		d(i) {
			i && E(e), i && E(s);
		}
	};
}
function ue(l) {
	let e,
		n,
		t,
		o,
		a,
		s,
		_ = l[6][1] + "",
		r,
		p,
		d;
	return {
		c() {
			(e = S("line")),
				(s = S("text")),
				(r = K(_)),
				u(e, "stroke-width", "0.5"),
				u(e, "y1", (n = l[4](l[6][1]))),
				u(e, "y2", (t = l[4](l[6][1]))),
				u(e, "x1", (o = l[5](l[10][0]))),
				u(e, "x2", (a = l[5](l[7][1]))),
				u(e, "stroke", "#aaa"),
				u(s, "class", "label-text svelte-1mjxput"),
				u(s, "text-anchor", "end"),
				u(s, "y", (p = l[4](l[6][1]) + 4)),
				u(s, "x", (d = l[5](l[10][0]) - 20));
		},
		m(i, h) {
			L(i, e, h), L(i, s, h), w(s, r);
		},
		p(i, h) {
			h[0] & 80 && n !== (n = i[4](i[6][1])) && u(e, "y1", n),
				h[0] & 80 && t !== (t = i[4](i[6][1])) && u(e, "y2", t),
				h[0] & 1056 && o !== (o = i[5](i[10][0])) && u(e, "x1", o),
				h[0] & 160 && a !== (a = i[5](i[7][1])) && u(e, "x2", a),
				h[0] & 64 && _ !== (_ = i[6][1] + "") && P(r, _),
				h[0] & 80 && p !== (p = i[4](i[6][1]) + 4) && u(s, "y", p),
				h[0] & 1056 && d !== (d = i[5](i[10][0]) - 20) && u(s, "x", d);
		},
		d(i) {
			i && E(e), i && E(s);
		}
	};
}
function ce(l) {
	let e, n, t, o;
	return {
		c() {
			(e = S("circle")),
				u(e, "r", "3.5"),
				u(e, "cx", (n = l[5](l[0]))),
				u(e, "cy", (t = l[4](l[1]))),
				u(e, "stroke-width", "1.5"),
				u(e, "stroke", (o = l[18])),
				u(e, "fill", "none");
		},
		m(a, s) {
			L(a, e, s);
		},
		p(a, s) {
			s[0] & 36 && n !== (n = a[5](a[0])) && u(e, "cx", n),
				s[0] & 20 && t !== (t = a[4](a[1])) && u(e, "cy", t),
				s[0] & 260 && o !== (o = a[18]) && u(e, "stroke", o);
		},
		d(a) {
			a && E(e);
		}
	};
}
function me(l) {
	let e,
		n,
		t,
		o = l[17],
		a = [];
	for (let s = 0; s < o.length; s += 1) a[s] = ce(oe(l, o, s));
	return {
		c() {
			for (let s = 0; s < a.length; s += 1) a[s].c();
			(e = S("path")),
				u(e, "d", (n = Q().curve($)(l[17].map(l[13])))),
				u(e, "fill", "none"),
				u(e, "stroke", (t = l[18])),
				u(e, "stroke-width", "3");
		},
		m(s, _) {
			for (let r = 0; r < a.length; r += 1) a[r] && a[r].m(s, _);
			L(s, e, _);
		},
		p(s, _) {
			if (_[0] & 308) {
				o = s[17];
				let r;
				for (r = 0; r < o.length; r += 1) {
					const p = oe(s, o, r);
					a[r]
						? a[r].p(p, _)
						: ((a[r] = ce(p)), a[r].c(), a[r].m(e.parentNode, e));
				}
				for (; r < a.length; r += 1) a[r].d(1);
				a.length = o.length;
			}
			_[0] & 52 && n !== (n = Q().curve($)(s[17].map(s[13]))) && u(e, "d", n),
				_[0] & 260 && t !== (t = s[18]) && u(e, "stroke", t);
		},
		d(s) {
			Y(a, s), s && E(e);
		}
	};
}
function he(l) {
	let e, n, t, o, a, s;
	return {
		c() {
			(e = S("circle")),
				u(e, "r", "7"),
				u(e, "cx", (n = l[5](l[0]))),
				u(e, "cy", (t = l[4](l[1]))),
				u(e, "stroke", "black"),
				u(e, "fill", "black"),
				F(e, "cursor", "pointer"),
				F(e, "opacity", "0");
		},
		m(_, r) {
			L(_, e, r),
				a ||
					((s = Le(
						(o = Ye.call(null, e, { color: l[18], text: `(${l[0]}, ${l[1]})` }))
					)),
					(a = !0));
		},
		p(_, r) {
			(l = _),
				r[0] & 36 && n !== (n = l[5](l[0])) && u(e, "cx", n),
				r[0] & 20 && t !== (t = l[4](l[1])) && u(e, "cy", t),
				o &&
					Ee(o.update) &&
					r[0] & 260 &&
					o.update.call(null, { color: l[18], text: `(${l[0]}, ${l[1]})` });
		},
		d(_) {
			_ && E(e), (a = !1), s();
		}
	};
}
function ge(l) {
	let e,
		n = l[17],
		t = [];
	for (let o = 0; o < n.length; o += 1) t[o] = he(te(l, n, o));
	return {
		c() {
			for (let o = 0; o < t.length; o += 1) t[o].c();
			e = G();
		},
		m(o, a) {
			for (let s = 0; s < t.length; s += 1) t[s] && t[s].m(o, a);
			L(o, e, a);
		},
		p(o, a) {
			if (a[0] & 308) {
				n = o[17];
				let s;
				for (s = 0; s < n.length; s += 1) {
					const _ = te(o, n, s);
					t[s]
						? t[s].p(_, a)
						: ((t[s] = he(_)), t[s].c(), t[s].m(e.parentNode, e));
				}
				for (; s < t.length; s += 1) t[s].d(1);
				t.length = n.length;
			}
		},
		d(o) {
			Y(t, o), o && E(e);
		}
	};
}
function Ge(l) {
	let e,
		n,
		t,
		o,
		a,
		s,
		_,
		r,
		p,
		d,
		i = l[3].name + "",
		h,
		A = l[2],
		m = [];
	for (let c = 0; c < A.length; c += 1) m[c] = ie(re(l, A, c));
	let k = l[10],
		v = [];
	for (let c = 0; c < k.length; c += 1) v[c] = fe(ae(l, k, c));
	let U = l[9],
		y = [];
	for (let c = 0; c < U.length; c += 1) y[c] = _e(se(l, U, c));
	let b = l[6][1] > l[9][l[9].length - 1] && ue(l),
		C = l[2],
		j = [];
	for (let c = 0; c < C.length; c += 1) j[c] = me(ne(l, C, c));
	let D = l[2],
		g = [];
	for (let c = 0; c < D.length; c += 1) g[c] = ge(le(l, D, c));
	return {
		c() {
			(e = O("div")), (n = O("div"));
			for (let c = 0; c < m.length; c += 1) m[c].c();
			(t = X()), (o = S("svg")), (a = S("g"));
			for (let c = 0; c < v.length; c += 1) v[c].c();
			s = G();
			for (let c = 0; c < y.length; c += 1) y[c].c();
			(_ = G()), b && b.c();
			for (let c = 0; c < j.length; c += 1) j[c].c();
			r = G();
			for (let c = 0; c < g.length; c += 1) g[c].c();
			(p = X()),
				(d = O("div")),
				(h = K(i)),
				u(n, "class", "legend svelte-1mjxput"),
				u(o, "class", "w-full svelte-1mjxput"),
				u(o, "viewBox", "-70 -20 700 420"),
				u(d, "class", "main-label svelte-1mjxput"),
				u(e, "class", "wrap svelte-1mjxput");
		},
		m(c, M) {
			L(c, e, M), w(e, n);
			for (let f = 0; f < m.length; f += 1) m[f] && m[f].m(n, null);
			w(e, t), w(e, o), w(o, a);
			for (let f = 0; f < v.length; f += 1) v[f] && v[f].m(a, null);
			w(a, s);
			for (let f = 0; f < y.length; f += 1) y[f] && y[f].m(a, null);
			w(a, _), b && b.m(a, null);
			for (let f = 0; f < j.length; f += 1) j[f] && j[f].m(o, null);
			w(o, r);
			for (let f = 0; f < g.length; f += 1) g[f] && g[f].m(o, null);
			w(e, p), w(e, d), w(d, h);
		},
		p(c, M) {
			if (M[0] & 260) {
				A = c[2];
				let f;
				for (f = 0; f < A.length; f += 1) {
					const T = re(c, A, f);
					m[f] ? m[f].p(T, M) : ((m[f] = ie(T)), m[f].c(), m[f].m(n, null));
				}
				for (; f < m.length; f += 1) m[f].d(1);
				m.length = A.length;
			}
			if (M[0] & 1648) {
				k = c[10];
				let f;
				for (f = 0; f < k.length; f += 1) {
					const T = ae(c, k, f);
					v[f] ? v[f].p(T, M) : ((v[f] = fe(T)), v[f].c(), v[f].m(a, s));
				}
				for (; f < v.length; f += 1) v[f].d(1);
				v.length = k.length;
			}
			if (M[0] & 1712) {
				U = c[9];
				let f;
				for (f = 0; f < U.length; f += 1) {
					const T = se(c, U, f);
					y[f] ? y[f].p(T, M) : ((y[f] = _e(T)), y[f].c(), y[f].m(a, _));
				}
				for (; f < y.length; f += 1) y[f].d(1);
				y.length = U.length;
			}
			if (
				(c[6][1] > c[9][c[9].length - 1]
					? b
						? b.p(c, M)
						: ((b = ue(c)), b.c(), b.m(a, null))
					: b && (b.d(1), (b = null)),
				M[0] & 308)
			) {
				C = c[2];
				let f;
				for (f = 0; f < C.length; f += 1) {
					const T = ne(c, C, f);
					j[f] ? j[f].p(T, M) : ((j[f] = me(T)), j[f].c(), j[f].m(o, r));
				}
				for (; f < j.length; f += 1) j[f].d(1);
				j.length = C.length;
			}
			if (M[0] & 308) {
				D = c[2];
				let f;
				for (f = 0; f < D.length; f += 1) {
					const T = le(c, D, f);
					g[f] ? g[f].p(T, M) : ((g[f] = ge(T)), g[f].c(), g[f].m(o, null));
				}
				for (; f < g.length; f += 1) g[f].d(1);
				g.length = D.length;
			}
			M[0] & 8 && i !== (i = c[3].name + "") && P(h, i);
		},
		i: I,
		o: I,
		d(c) {
			c && E(e), Y(m, c), Y(v, c), Y(y, c), b && b.d(), Y(j, c), Y(g, c);
		}
	};
}
function Ke(l, e, n) {
	let t,
		o,
		a,
		s,
		_,
		r,
		p,
		d,
		{ value: i } = e,
		{ x: h = void 0 } = e,
		{ y: A = void 0 } = e,
		{ colors: m = [] } = e;
	const k = de();
	let v;
	function U(b) {
		let C = m[b % m.length];
		return C && C in Z ? Z[C]?.primary : C || Z[Ne(b)].primary;
	}
	je(() => {
		k("process", { x: t, y: o });
	});
	const y = ({ x: b, y: C }) => [_(b), r(C)];
	return (
		(l.$$set = (b) => {
			"value" in b && n(11, (i = b.value)),
				"x" in b && n(0, (h = b.x)),
				"y" in b && n(1, (A = b.y)),
				"colors" in b && n(12, (m = b.colors));
		}),
		(l.$$.update = () => {
			l.$$.dirty[0] & 2051 &&
				n(
					3,
					({ x: t, y: o } = ee(typeof i == "string" ? He(i) : i, h, A)),
					t,
					(n(2, o), n(11, i), n(0, h), n(1, A))
				),
				l.$$.dirty[0] & 8 && n(7, (a = x(t))),
				l.$$.dirty[0] & 4 && n(6, (s = x(o))),
				l.$$.dirty[0] & 128 && n(5, (_ = J(a, [0, 600]).nice())),
				l.$$.dirty[0] & 64 && n(4, (r = J(s, [350, 0]).nice())),
				l.$$.dirty[0] & 32 && n(10, (p = _.ticks(8))),
				l.$$.dirty[0] & 16 && n(9, (d = r.ticks(8))),
				l.$$.dirty[0] & 4 &&
					n(8, (v = o.reduce((b, C, j) => ({ ...b, [C.name]: U(j) }), {})));
		}),
		[h, A, o, t, r, _, s, a, v, d, p, i, m, y]
	);
}
class ke extends R {
	constructor(e) {
		super(),
			V(
				this,
				e,
				Ke,
				Ge,
				W,
				{ value: 11, x: 0, y: 1, colors: 12 },
				null,
				[-1, -1]
			);
	}
}
function Pe(l) {
	let e, n;
	return (
		(e = new ze({
			props: {
				filetype: "text/csv",
				include_file_metadata: !1,
				$$slots: { default: [We] },
				$$scope: { ctx: l }
			}
		})),
		e.$on("load", l[16]),
		{
			c() {
				N(e.$$.fragment);
			},
			m(t, o) {
				H(e, t, o), (n = !0);
			},
			p(t, o) {
				const a = {};
				o & 1048576 && (a.$$scope = { dirty: o, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				B(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function Re(l) {
	let e, n, t, o, a;
	return (
		(n = new Be({})),
		n.$on("clear", l[14]),
		(o = new ke({ props: { value: l[11], y: l[4], x: l[5], colors: l[9] } })),
		o.$on("process", l[15]),
		{
			c() {
				(e = O("div")),
					N(n.$$.fragment),
					(t = X()),
					N(o.$$.fragment),
					u(e, "class", "chart svelte-etmurc");
			},
			m(s, _) {
				L(s, e, _), H(n, e, null), w(e, t), H(o, e, null), (a = !0);
			},
			p(s, _) {
				const r = {};
				_ & 2048 && (r.value = s[11]),
					_ & 16 && (r.y = s[4]),
					_ & 32 && (r.x = s[5]),
					_ & 512 && (r.colors = s[9]),
					o.$set(r);
			},
			i(s) {
				a || (z(n.$$.fragment, s), z(o.$$.fragment, s), (a = !0));
			},
			o(s) {
				B(n.$$.fragment, s), B(o.$$.fragment, s), (a = !1);
			},
			d(s) {
				s && E(e), q(n), q(o);
			}
		}
	);
}
function Ve(l) {
	let e, n, t, o;
	const a = [Je, Ze],
		s = [];
	function _(r, p) {
		return r[12] ? 0 : 1;
	}
	return (
		(e = _(l)),
		(n = s[e] = a[e](l)),
		{
			c() {
				n.c(), (t = G());
			},
			m(r, p) {
				s[e].m(r, p), L(r, t, p), (o = !0);
			},
			p(r, p) {
				let d = e;
				(e = _(r)),
					e === d
						? s[e].p(r, p)
						: (pe(),
						  B(s[d], 1, 1, () => {
								s[d] = null;
						  }),
						  ve(),
						  (n = s[e]),
						  n ? n.p(r, p) : ((n = s[e] = a[e](r)), n.c()),
						  z(n, 1),
						  n.m(t.parentNode, t));
			},
			i(r) {
				o || (z(n), (o = !0));
			},
			o(r) {
				B(n), (o = !1);
			},
			d(r) {
				s[e].d(r), r && E(t);
			}
		}
	);
}
function We(l) {
	let e, n;
	return (
		(e = new qe({ props: { type: "csv" } })),
		{
			c() {
				N(e.$$.fragment);
			},
			m(t, o) {
				H(e, t, o), (n = !0);
			},
			p: I,
			i(t) {
				n || (z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				B(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function Ze(l) {
	let e, n;
	return (
		(e = new Fe({
			props: {
				size: "large",
				unpadded_box: !0,
				$$slots: { default: [Qe] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				N(e.$$.fragment);
			},
			m(t, o) {
				H(e, t, o), (n = !0);
			},
			p(t, o) {
				const a = {};
				o & 1048576 && (a.$$scope = { dirty: o, ctx: t }), e.$set(a);
			},
			i(t) {
				n || (z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				B(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function Je(l) {
	let e, n;
	return (
		(e = new ke({ props: { value: l[12], colors: l[9] } })),
		{
			c() {
				N(e.$$.fragment);
			},
			m(t, o) {
				H(e, t, o), (n = !0);
			},
			p(t, o) {
				const a = {};
				o & 4096 && (a.value = t[12]), o & 512 && (a.colors = t[9]), e.$set(a);
			},
			i(t) {
				n || (z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				B(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function Qe(l) {
	let e, n;
	return (
		(e = new be({})),
		{
			c() {
				N(e.$$.fragment);
			},
			m(t, o) {
				H(e, t, o), (n = !0);
			},
			i(t) {
				n || (z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				B(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function $e(l) {
	let e, n, t, o, a, s, _, r;
	e = new Ue({
		props: { show_label: l[8], Icon: be, label: l[7] || "TimeSeries" }
	});
	const p = [l[10]];
	let d = {};
	for (let m = 0; m < p.length; m += 1) d = Ae(d, p[m]);
	t = new Ce({ props: d });
	const i = [Ve, Re, Pe],
		h = [];
	function A(m, k) {
		return m[6] === "static"
			? 0
			: m[11]
			? 1
			: m[0] === void 0 || m[0] === null
			? 2
			: -1;
	}
	return (
		~(a = A(l)) && (s = h[a] = i[a](l)),
		{
			c() {
				N(e.$$.fragment),
					(n = X()),
					N(t.$$.fragment),
					(o = X()),
					s && s.c(),
					(_ = G());
			},
			m(m, k) {
				H(e, m, k),
					L(m, n, k),
					H(t, m, k),
					L(m, o, k),
					~a && h[a].m(m, k),
					L(m, _, k),
					(r = !0);
			},
			p(m, k) {
				const v = {};
				k & 256 && (v.show_label = m[8]),
					k & 128 && (v.label = m[7] || "TimeSeries"),
					e.$set(v);
				const U = k & 1024 ? Me(p, [Te(m[10])]) : {};
				t.$set(U);
				let y = a;
				(a = A(m)),
					a === y
						? ~a && h[a].p(m, k)
						: (s &&
								(pe(),
								B(h[y], 1, 1, () => {
									h[y] = null;
								}),
								ve()),
						  ~a
								? ((s = h[a]),
								  s ? s.p(m, k) : ((s = h[a] = i[a](m)), s.c()),
								  z(s, 1),
								  s.m(_.parentNode, _))
								: (s = null));
			},
			i(m) {
				r || (z(e.$$.fragment, m), z(t.$$.fragment, m), z(s), (r = !0));
			},
			o(m) {
				B(e.$$.fragment, m), B(t.$$.fragment, m), B(s), (r = !1);
			},
			d(m) {
				q(e, m), m && E(n), q(t, m), m && E(o), ~a && h[a].d(m), m && E(_);
			}
		}
	);
}
function xe(l) {
	let e, n;
	return (
		(e = new Se({
			props: {
				visible: l[3],
				variant: l[6] === "dynamic" && !l[11] ? "dashed" : "solid",
				padding: !1,
				elem_id: l[1],
				elem_classes: l[2],
				$$slots: { default: [$e] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				N(e.$$.fragment);
			},
			m(t, o) {
				H(e, t, o), (n = !0);
			},
			p(t, [o]) {
				const a = {};
				o & 8 && (a.visible = t[3]),
					o & 2112 &&
						(a.variant = t[6] === "dynamic" && !t[11] ? "dashed" : "solid"),
					o & 2 && (a.elem_id = t[1]),
					o & 4 && (a.elem_classes = t[2]),
					o & 1056753 && (a.$$scope = { dirty: o, ctx: t }),
					e.$set(a);
			},
			i(t) {
				n || (z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				B(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				q(e, t);
			}
		}
	);
}
function el(l) {
	return l.data.map((e) =>
		e.reduce((n, t, o) => ({ ...n, [l.headers[o]]: t }), {})
	);
}
function ll(l) {
	const e = atob(l.split(",")[1]),
		n = l.split(",")[0].split(":")[1].split(";")[0],
		t = new ArrayBuffer(e.length),
		o = new Uint8Array(t);
	for (let a = 0; a < e.length; a++) o[a] = e.charCodeAt(a);
	return new Blob([t], { type: n });
}
function tl(l, e) {
	const n = [],
		t = [];
	n.push(l.name), e.forEach(({ name: o }) => n.push(o));
	for (let o = 0; o < l.values.length; o++) {
		let a = [];
		a.push(l.values[o]),
			e.forEach(({ values: s }) => a.push(s[o].y)),
			t.push(a);
	}
	return { headers: n, data: t };
}
function nl(l, e, n) {
	let t;
	const o = de();
	let { elem_id: a = "" } = e,
		{ elem_classes: s = [] } = e,
		{ visible: _ = !0 } = e,
		{ value: r } = e,
		{ y: p } = e,
		{ x: d } = e,
		{ mode: i } = e,
		{ label: h } = e,
		{ show_label: A } = e,
		{ colors: m } = e,
		{ loading_status: k } = e,
		v;
	function U(g) {
		const c = new FileReader();
		c.addEventListener("loadend", (M) => {
			n(11, (v = M.srcElement.result));
		}),
			c.readAsText(g);
	}
	function y(g) {
		g.headers && n(11, (v = g.headers.join(","))),
			g.data.forEach((M) => {
				n(
					11,
					(v =
						v +
						`
`)
				),
					n(11, (v = v + M.join(",")));
			});
	}
	function b(g) {
		return n(0, (r = { data: g })), g;
	}
	function C({ detail: g }) {
		n(0, (r = null)), o("change"), o("clear");
	}
	const j = ({ detail: { x: g, y: c } }) => n(0, (r = tl(g, c))),
		D = ({ detail: g }) => b(g);
	return (
		(l.$$set = (g) => {
			"elem_id" in g && n(1, (a = g.elem_id)),
				"elem_classes" in g && n(2, (s = g.elem_classes)),
				"visible" in g && n(3, (_ = g.visible)),
				"value" in g && n(0, (r = g.value)),
				"y" in g && n(4, (p = g.y)),
				"x" in g && n(5, (d = g.x)),
				"mode" in g && n(6, (i = g.mode)),
				"label" in g && n(7, (h = g.label)),
				"show_label" in g && n(8, (A = g.show_label)),
				"colors" in g && n(9, (m = g.colors)),
				"loading_status" in g && n(10, (k = g.loading_status));
		}),
		(l.$$.update = () => {
			l.$$.dirty & 1 &&
				(r && r.data && typeof r.data == "string"
					? r
						? U(ll(r.data))
						: n(11, (v = null))
					: r &&
					  r.data &&
					  typeof r.data != "string" &&
					  (r || n(11, (v = null)), y(r))),
				l.$$.dirty & 2049 && n(11, (v = r == null ? null : v)),
				l.$$.dirty & 65 && n(12, (t = i === "static" && r && el(r))),
				l.$$.dirty & 1 && o("change");
		}),
		[r, a, s, _, p, d, i, h, A, m, k, v, t, b, C, j, D]
	);
}
class ol extends R {
	constructor(e) {
		super(),
			V(this, e, nl, xe, W, {
				elem_id: 1,
				elem_classes: 2,
				visible: 3,
				value: 0,
				y: 4,
				x: 5,
				mode: 6,
				label: 7,
				show_label: 8,
				colors: 9,
				loading_status: 10
			});
	}
}
const kl = ol,
	yl = ["static", "dynamic"],
	wl = (l) => ({
		type: {
			payload: "{data: Array<Array<number>> | string; headers?: Array<string>;}"
		},
		description: { payload: "dataset of series" }
	});
export { kl as Component, wl as document, yl as modes };
//# sourceMappingURL=index-2941500d.js.map
