import {
	S as L,
	i as Z,
	s as F,
	B as A,
	C as _,
	g as p,
	E as y,
	F as z,
	q as v,
	G as T,
	r as ne,
	ai as J,
	H as C,
	N as G,
	I as D,
	K as R,
	J as V,
	a0 as ce,
	M as B,
	D as I,
	e as E,
	m as N,
	p as H,
	t as M,
	n as O,
	x as ue,
	$ as _e,
	f as me,
	h as ge,
	j as de,
	l as K,
	o as Y,
	y as he
} from "../lite.js";
import { g as be } from "./color-1d056486.js";
import { B as pe } from "./Button-5b68d65a.js";
import { B as ve } from "./BlockLabel-e392131b.js";
import { E as ke } from "./Empty-b331fdfe.js";
/* empty css                                                    */ function ye(
	t
) {
	let e, n, l;
	return {
		c() {
			(e = A("svg")),
				(n = A("path")),
				(l = A("path")),
				_(n, "fill", "currentColor"),
				_(
					n,
					"d",
					"M12 15H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5V5a1 1 0 0 0-1-1H3V2h6a3 3 0 0 1 3 3zM5 9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5V9zm15 14v2a1 1 0 0 0 1 1h5v-4h-5a1 1 0 0 0-1 1z"
				),
				_(l, "fill", "currentColor"),
				_(
					l,
					"d",
					"M2 30h28V2Zm26-2h-7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h5v-2a1 1 0 0 0-1-1h-6v-2h6a3 3 0 0 1 3 3Z"
				),
				_(e, "xmlns", "http://www.w3.org/2000/svg"),
				_(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
				_(e, "aria-hidden", "true"),
				_(e, "role", "img"),
				_(e, "class", "iconify iconify--carbon"),
				_(e, "width", "100%"),
				_(e, "height", "100%"),
				_(e, "preserveAspectRatio", "xMidYMid meet"),
				_(e, "viewBox", "0 0 32 32");
		},
		m(a, s) {
			p(a, e, s), y(e, n), y(e, l);
		},
		p: z,
		i: z,
		o: z,
		d(a) {
			a && v(e);
		}
	};
}
class oe extends L {
	constructor(e) {
		super(), Z(this, e, null, ye, F, {});
	}
}
function P(t, e, n) {
	const l = t.slice();
	return (l[18] = e[n][0]), (l[24] = e[n][1]), l;
}
function Q(t, e, n) {
	const l = t.slice();
	return (l[18] = e[n][0]), (l[19] = e[n][1]), (l[21] = n), l;
}
function U(t, e, n) {
	const l = t.slice();
	return (l[19] = e[n][0]), (l[22] = e[n][1]), (l[21] = n), l;
}
function we(t) {
	let e,
		n,
		l = t[1] && W(),
		a = t[0],
		s = [];
	for (let o = 0; o < a.length; o += 1) s[o] = X(P(t, a, o));
	return {
		c() {
			l && l.c(), (e = C()), (n = T("div"));
			for (let o = 0; o < s.length; o += 1) s[o].c();
			_(n, "class", "textfield svelte-19on2m6"),
				_(n, "data-testid", "highlighted-text:textfield");
		},
		m(o, r) {
			l && l.m(o, r), p(o, e, r), p(o, n, r);
			for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(n, null);
		},
		p(o, r) {
			if (
				(o[1]
					? l || ((l = W()), l.c(), l.m(e.parentNode, e))
					: l && (l.d(1), (l = null)),
				r & 1)
			) {
				a = o[0];
				let i;
				for (i = 0; i < a.length; i += 1) {
					const c = P(o, a, i);
					s[i] ? s[i].p(c, r) : ((s[i] = X(c)), s[i].c(), s[i].m(n, null));
				}
				for (; i < s.length; i += 1) s[i].d(1);
				s.length = a.length;
			}
		},
		d(o) {
			l && l.d(o), o && v(e), o && v(n), G(s, o);
		}
	};
}
function He(t) {
	let e,
		n,
		l = t[1] && $(t),
		a = t[0],
		s = [];
	for (let o = 0; o < a.length; o += 1) s[o] = le(Q(t, a, o));
	return {
		c() {
			l && l.c(), (e = C()), (n = T("div"));
			for (let o = 0; o < s.length; o += 1) s[o].c();
			_(n, "class", "textfield svelte-19on2m6");
		},
		m(o, r) {
			l && l.m(o, r), p(o, e, r), p(o, n, r);
			for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(n, null);
		},
		p(o, r) {
			if (
				(o[1]
					? l
						? l.p(o, r)
						: ((l = $(o)), l.c(), l.m(e.parentNode, e))
					: l && (l.d(1), (l = null)),
				r & 95)
			) {
				a = o[0];
				let i;
				for (i = 0; i < a.length; i += 1) {
					const c = Q(o, a, i);
					s[i] ? s[i].p(c, r) : ((s[i] = le(c)), s[i].c(), s[i].m(n, null));
				}
				for (; i < s.length; i += 1) s[i].d(1);
				s.length = a.length;
			}
		},
		d(o) {
			l && l.d(o), o && v(e), o && v(n), G(s, o);
		}
	};
}
function W(t) {
	let e;
	return {
		c() {
			(e = T("div")),
				(e.innerHTML = `<span>-1</span> 
				<span>0</span> 
				<span>+1</span>`),
				_(e, "class", "color-legend svelte-19on2m6"),
				_(e, "data-testid", "highlighted-text:color-legend");
		},
		m(n, l) {
			p(n, e, l);
		},
		d(n) {
			n && v(e);
		}
	};
}
function X(t) {
	let e,
		n,
		l = t[18] + "",
		a,
		s,
		o;
	return {
		c() {
			(e = T("span")),
				(n = T("span")),
				(a = D(l)),
				(s = C()),
				_(n, "class", "text svelte-19on2m6"),
				_(e, "class", "textspan score-text svelte-19on2m6"),
				_(
					e,
					"style",
					(o =
						"background-color: rgba(" +
						(t[24] < 0 ? "128, 90, 213," + -t[24] : "239, 68, 60," + t[24]) +
						")")
				);
		},
		m(r, i) {
			p(r, e, i), y(e, n), y(n, a), y(e, s);
		},
		p(r, i) {
			i & 1 && l !== (l = r[18] + "") && R(a, l),
				i & 1 &&
					o !==
						(o =
							"background-color: rgba(" +
							(r[24] < 0 ? "128, 90, 213," + -r[24] : "239, 68, 60," + r[24]) +
							")") &&
					_(e, "style", o);
		},
		d(r) {
			r && v(e);
		}
	};
}
function $(t) {
	let e,
		n = Object.entries(t[3]),
		l = [];
	for (let a = 0; a < n.length; a += 1) l[a] = x(U(t, n, a));
	return {
		c() {
			e = T("div");
			for (let a = 0; a < l.length; a += 1) l[a].c();
			_(e, "class", "category-legend svelte-19on2m6"),
				_(e, "data-testid", "highlighted-text:category-legend");
		},
		m(a, s) {
			p(a, e, s);
			for (let o = 0; o < l.length; o += 1) l[o] && l[o].m(e, null);
		},
		p(a, s) {
			if (s & 392) {
				n = Object.entries(a[3]);
				let o;
				for (o = 0; o < n.length; o += 1) {
					const r = U(a, n, o);
					l[o] ? l[o].p(r, s) : ((l[o] = x(r)), l[o].c(), l[o].m(e, null));
				}
				for (; o < l.length; o += 1) l[o].d(1);
				l.length = n.length;
			}
		},
		d(a) {
			a && v(e), G(l, a);
		}
	};
}
function x(t) {
	let e,
		n = t[19] + "",
		l,
		a,
		s,
		o,
		r;
	function i() {
		return t[10](t[19]);
	}
	function c() {
		return t[11](t[19]);
	}
	return {
		c() {
			(e = T("div")),
				(l = D(n)),
				(a = C()),
				_(e, "class", "category-label svelte-19on2m6"),
				_(e, "style", (s = "background-color:" + t[22].secondary));
		},
		m(u, d) {
			p(u, e, d),
				y(e, l),
				y(e, a),
				o ||
					((r = [
						V(e, "mouseover", i),
						V(e, "focus", c),
						V(e, "mouseout", t[12]),
						V(e, "blur", t[13])
					]),
					(o = !0));
		},
		p(u, d) {
			(t = u),
				d & 8 && n !== (n = t[19] + "") && R(l, n),
				d & 8 &&
					s !== (s = "background-color:" + t[22].secondary) &&
					_(e, "style", s);
		},
		d(u) {
			u && v(e), (o = !1), ce(r);
		}
	};
}
function ee(t) {
	let e,
		n,
		l = t[19] + "",
		a;
	return {
		c() {
			(e = D(` 
						`)),
				(n = T("span")),
				(a = D(l)),
				_(n, "class", "label svelte-19on2m6"),
				I(
					n,
					"background-color",
					t[19] === null || (t[4] && t[4] !== t[19]) ? "" : t[3][t[19]].primary
				);
		},
		m(s, o) {
			p(s, e, o), p(s, n, o), y(n, a);
		},
		p(s, o) {
			o & 1 && l !== (l = s[19] + "") && R(a, l),
				o & 25 &&
					I(
						n,
						"background-color",
						s[19] === null || (s[4] && s[4] !== s[19])
							? ""
							: s[3][s[19]].primary
					);
		},
		d(s) {
			s && v(e), s && v(n);
		}
	};
}
function le(t) {
	let e,
		n,
		l = t[18] + "",
		a,
		s,
		o,
		r,
		i,
		c = !t[1] && t[19] !== null && ee(t);
	function u() {
		return t[14](t[21], t[18], t[19]);
	}
	return {
		c() {
			(e = T("span")),
				(n = T("span")),
				(a = D(l)),
				(s = C()),
				c && c.c(),
				(o = C()),
				_(n, "class", "text svelte-19on2m6"),
				B(n, "no-label", !t[3][t[19]]),
				_(e, "class", "textspan svelte-19on2m6"),
				B(e, "no-cat", t[19] === null || (t[4] && t[4] !== t[19])),
				B(e, "hl", t[19] !== null),
				B(e, "selectable", t[2]),
				I(
					e,
					"background-color",
					t[19] === null || (t[4] && t[4] !== t[19])
						? ""
						: t[3][t[19]].secondary
				);
		},
		m(d, g) {
			p(d, e, g),
				y(e, n),
				y(n, a),
				y(e, s),
				c && c.m(e, null),
				y(e, o),
				r || ((i = V(e, "click", u)), (r = !0));
		},
		p(d, g) {
			(t = d),
				g & 1 && l !== (l = t[18] + "") && R(a, l),
				g & 9 && B(n, "no-label", !t[3][t[19]]),
				!t[1] && t[19] !== null
					? c
						? c.p(t, g)
						: ((c = ee(t)), c.c(), c.m(e, o))
					: c && (c.d(1), (c = null)),
				g & 17 && B(e, "no-cat", t[19] === null || (t[4] && t[4] !== t[19])),
				g & 1 && B(e, "hl", t[19] !== null),
				g & 4 && B(e, "selectable", t[2]),
				g & 25 &&
					I(
						e,
						"background-color",
						t[19] === null || (t[4] && t[4] !== t[19])
							? ""
							: t[3][t[19]].secondary
					);
		},
		d(d) {
			d && v(e), c && c.d(), (r = !1), i();
		}
	};
}
function Te(t) {
	let e;
	function n(s, o) {
		return s[5] === "categories" ? He : we;
	}
	let l = n(t),
		a = l(t);
	return {
		c() {
			(e = T("div")), a.c(), _(e, "class", "container svelte-19on2m6");
		},
		m(s, o) {
			p(s, e, o), a.m(e, null);
		},
		p(s, [o]) {
			l === (l = n(s)) && a
				? a.p(s, o)
				: (a.d(1), (a = l(s)), a && (a.c(), a.m(e, null)));
		},
		i: z,
		o: z,
		d(s) {
			s && v(e), a.d();
		}
	};
}
function Me(t, e, n) {
	const l = typeof document < "u";
	let { value: a = [] } = e,
		{ show_legend: s = !1 } = e,
		{ color_map: o = {} } = e,
		{ selectable: r = !1 } = e,
		i,
		c = {},
		u = "";
	function d(h, k) {
		if (!i) {
			var w = document.createElement("canvas");
			i = w.getContext("2d");
		}
		(i.fillStyle = h), i.fillRect(0, 0, 1, 1);
		const [q, re, fe] = i.getImageData(0, 0, 1, 1).data;
		return i.clearRect(0, 0, 1, 1), `rgba(${q}, ${re}, ${fe}, ${255 / k})`;
	}
	const g = ne();
	let j;
	function f(h) {
		n(4, (u = h));
	}
	function b() {
		n(4, (u = ""));
	}
	const m = (h) => f(h),
		S = (h) => f(h),
		se = () => b(),
		ae = () => b(),
		ie = (h, k, w) => {
			g("select", { index: h, value: [k, w] });
		};
	return (
		(t.$$set = (h) => {
			"value" in h && n(0, (a = h.value)),
				"show_legend" in h && n(1, (s = h.show_legend)),
				"color_map" in h && n(9, (o = h.color_map)),
				"selectable" in h && n(2, (r = h.selectable));
		}),
		(t.$$.update = () => {
			if (t.$$.dirty & 513) {
				let h = function () {
					for (const k in o) {
						const w = o[k].trim();
						w in J
							? n(3, (c[k] = J[w]), c)
							: n(
									3,
									(c[k] = {
										primary: l ? d(o[k], 1) : o[k],
										secondary: l ? d(o[k], 0.5) : o[k]
									}),
									c
							  );
					}
				};
				if ((o || n(9, (o = {})), a.length > 0)) {
					for (let [k, w] of a)
						if (w !== null)
							if (typeof w == "string") {
								if ((n(5, (j = "categories")), !(w in o))) {
									let q = be(Object.keys(o).length);
									n(9, (o[w] = q), o);
								}
							} else n(5, (j = "scores"));
				}
				h();
			}
		}),
		[a, s, r, c, u, j, g, f, b, o, m, S, se, ae, ie]
	);
}
class je extends L {
	constructor(e) {
		super(),
			Z(this, e, Me, Te, F, {
				value: 0,
				show_legend: 1,
				color_map: 9,
				selectable: 2
			});
	}
}
function te(t) {
	let e, n;
	return (
		(e = new ve({
			props: {
				Icon: oe,
				label: t[6],
				float: !1,
				disable: typeof t[0].container == "boolean" && !t[0].container
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, a) {
				N(e, l, a), (n = !0);
			},
			p(l, a) {
				const s = {};
				a & 64 && (s.label = l[6]),
					a & 1 &&
						(s.disable = typeof l[0].container == "boolean" && !l[0].container),
					e.$set(s);
			},
			i(l) {
				n || (H(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				M(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				O(e, l);
			}
		}
	);
}
function Be(t) {
	let e, n;
	return (
		(e = new ke({
			props: { $$slots: { default: [Ee] }, $$scope: { ctx: t } }
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, a) {
				N(e, l, a), (n = !0);
			},
			p(l, a) {
				const s = {};
				a & 8192 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
			},
			i(l) {
				n || (H(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				M(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				O(e, l);
			}
		}
	);
}
function Ce(t) {
	let e, n;
	return (
		(e = new je({
			props: {
				selectable: t[7],
				value: t[4],
				show_legend: t[5],
				color_map: t[0].color_map
			}
		})),
		e.$on("select", t[11]),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, a) {
				N(e, l, a), (n = !0);
			},
			p(l, a) {
				const s = {};
				a & 128 && (s.selectable = l[7]),
					a & 16 && (s.value = l[4]),
					a & 32 && (s.show_legend = l[5]),
					a & 1 && (s.color_map = l[0].color_map),
					e.$set(s);
			},
			i(l) {
				n || (H(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				M(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				O(e, l);
			}
		}
	);
}
function Ee(t) {
	let e, n;
	return (
		(e = new oe({})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, a) {
				N(e, l, a), (n = !0);
			},
			i(l) {
				n || (H(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				M(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				O(e, l);
			}
		}
	);
}
function Ne(t) {
	let e, n, l, a, s, o, r;
	const i = [t[8]];
	let c = {};
	for (let f = 0; f < i.length; f += 1) c = ue(c, i[f]);
	e = new _e({ props: c });
	let u = t[6] && te(t);
	const d = [Ce, Be],
		g = [];
	function j(f, b) {
		return f[4] ? 0 : 1;
	}
	return (
		(a = j(t)),
		(s = g[a] = d[a](t)),
		{
			c() {
				E(e.$$.fragment), (n = C()), u && u.c(), (l = C()), s.c(), (o = me());
			},
			m(f, b) {
				N(e, f, b),
					p(f, n, b),
					u && u.m(f, b),
					p(f, l, b),
					g[a].m(f, b),
					p(f, o, b),
					(r = !0);
			},
			p(f, b) {
				const m = b & 256 ? ge(i, [de(f[8])]) : {};
				e.$set(m),
					f[6]
						? u
							? (u.p(f, b), b & 64 && H(u, 1))
							: ((u = te(f)), u.c(), H(u, 1), u.m(l.parentNode, l))
						: u &&
						  (K(),
						  M(u, 1, 1, () => {
								u = null;
						  }),
						  Y());
				let S = a;
				(a = j(f)),
					a === S
						? g[a].p(f, b)
						: (K(),
						  M(g[S], 1, 1, () => {
								g[S] = null;
						  }),
						  Y(),
						  (s = g[a]),
						  s ? s.p(f, b) : ((s = g[a] = d[a](f)), s.c()),
						  H(s, 1),
						  s.m(o.parentNode, o));
			},
			i(f) {
				r || (H(e.$$.fragment, f), H(u), H(s), (r = !0));
			},
			o(f) {
				M(e.$$.fragment, f), M(u), M(s), (r = !1);
			},
			d(f) {
				O(e, f), f && v(n), u && u.d(f), f && v(l), g[a].d(f), f && v(o);
			}
		}
	);
}
function Oe(t) {
	let e, n;
	return (
		(e = new pe({
			props: {
				test_id: "highlighted-text",
				visible: t[3],
				elem_id: t[1],
				elem_classes: t[2],
				padding: !1,
				disable: typeof t[0].container == "boolean" && !t[0].container,
				$$slots: { default: [Ne] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, a) {
				N(e, l, a), (n = !0);
			},
			p(l, [a]) {
				const s = {};
				a & 8 && (s.visible = l[3]),
					a & 2 && (s.elem_id = l[1]),
					a & 4 && (s.elem_classes = l[2]),
					a & 1 &&
						(s.disable = typeof l[0].container == "boolean" && !l[0].container),
					a & 8689 && (s.$$scope = { dirty: a, ctx: l }),
					e.$set(s);
			},
			i(l) {
				n || (H(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				M(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				O(e, l);
			}
		}
	);
}
function Se(t, e, n) {
	let { elem_id: l = "" } = e,
		{ elem_classes: a = [] } = e,
		{ visible: s = !0 } = e,
		{ value: o } = e,
		r,
		{ show_legend: i } = e,
		{ color_map: c = {} } = e,
		{ label: u = "Highlighted Text" } = e,
		{ style: d = {} } = e,
		{ selectable: g = !1 } = e,
		{ loading_status: j } = e;
	const f = ne();
	function b(m) {
		he.call(this, t, m);
	}
	return (
		(t.$$set = (m) => {
			"elem_id" in m && n(1, (l = m.elem_id)),
				"elem_classes" in m && n(2, (a = m.elem_classes)),
				"visible" in m && n(3, (s = m.visible)),
				"value" in m && n(4, (o = m.value)),
				"show_legend" in m && n(5, (i = m.show_legend)),
				"color_map" in m && n(9, (c = m.color_map)),
				"label" in m && n(6, (u = m.label)),
				"style" in m && n(0, (d = m.style)),
				"selectable" in m && n(7, (g = m.selectable)),
				"loading_status" in m && n(8, (j = m.loading_status));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 513 &&
				!d.color_map &&
				Object.keys(c).length &&
				n(0, (d.color_map = c), d),
				t.$$.dirty & 1040 && o !== r && (n(10, (r = o)), f("change"));
		}),
		[d, l, a, s, o, i, u, g, j, c, r, b]
	);
}
class Ve extends L {
	constructor(e) {
		super(),
			Z(this, e, Se, Oe, F, {
				elem_id: 1,
				elem_classes: 2,
				visible: 3,
				value: 4,
				show_legend: 5,
				color_map: 9,
				label: 6,
				style: 0,
				selectable: 7,
				loading_status: 8
			});
	}
}
const Le = Ve,
	Ze = ["static"],
	Fe = (t) => ({
		type: { payload: "Array<[string, string | number]>" },
		description: {
			payload: "list of text spans and corresponding label / value"
		}
	});
export { Le as Component, Fe as document, Ze as modes };
//# sourceMappingURL=index-c37d98cd.js.map
