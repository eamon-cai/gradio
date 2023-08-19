import {
	S as q,
	i as A,
	s as D,
	B as V,
	C as m,
	g as k,
	E as v,
	F as E,
	q as w,
	G as y,
	I as N,
	H as L,
	M,
	D as S,
	K as I,
	r as z,
	f as O,
	N as Q,
	J as U,
	e as B,
	m as j,
	p as h,
	t as g,
	n as C,
	x as W,
	$ as X,
	h as $,
	j as x,
	l as F,
	o as G,
	y as ee
} from "../lite.js";
/* empty css                                                    */ import { B as le } from "./Button-5b68d65a.js";
import { B as te } from "./BlockLabel-e392131b.js";
import { E as ne } from "./Empty-b331fdfe.js";
function se(s) {
	let e, t;
	return {
		c() {
			(e = V("svg")),
				(t = V("path")),
				m(t, "fill", "currentColor"),
				m(
					t,
					"d",
					"M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"
				),
				m(e, "xmlns", "http://www.w3.org/2000/svg"),
				m(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
				m(e, "aria-hidden", "true"),
				m(e, "role", "img"),
				m(e, "class", "iconify iconify--carbon"),
				m(e, "width", "100%"),
				m(e, "height", "100%"),
				m(e, "preserveAspectRatio", "xMidYMid meet"),
				m(e, "viewBox", "0 0 32 32");
		},
		m(l, n) {
			k(l, e, n), v(e, t);
		},
		p: E,
		i: E,
		o: E,
		d(l) {
			l && w(e);
		}
	};
}
class P extends q {
	constructor(e) {
		super(), A(this, e, null, se, D, {});
	}
}
function J(s, e, t) {
	const l = s.slice();
	return (l[6] = e[t]), (l[8] = t), l;
}
function K(s) {
	let e,
		t = s[0].confidences,
		l = [];
	for (let n = 0; n < t.length; n += 1) l[n] = T(J(s, t, n));
	return {
		c() {
			for (let n = 0; n < l.length; n += 1) l[n].c();
			e = O();
		},
		m(n, a) {
			for (let i = 0; i < l.length; i += 1) l[i] && l[i].m(n, a);
			k(n, e, a);
		},
		p(n, a) {
			if (a & 25) {
				t = n[0].confidences;
				let i;
				for (i = 0; i < t.length; i += 1) {
					const c = J(n, t, i);
					l[i]
						? l[i].p(c, a)
						: ((l[i] = T(c)), l[i].c(), l[i].m(e.parentNode, e));
				}
				for (; i < l.length; i += 1) l[i].d(1);
				l.length = t.length;
			}
		},
		d(n) {
			Q(l, n), n && w(e);
		}
	};
}
function R(s) {
	let e,
		t,
		l,
		n = Math.round(s[6].confidence * 100) + "",
		a,
		i;
	return {
		c() {
			(e = y("div")),
				(t = L()),
				(l = y("div")),
				(a = N(n)),
				(i = N("%")),
				m(e, "class", "line svelte-1mylvt5"),
				m(l, "class", "confidence svelte-1mylvt5");
		},
		m(c, r) {
			k(c, e, r), k(c, t, r), k(c, l, r), v(l, a), v(l, i);
		},
		p(c, r) {
			r & 1 && n !== (n = Math.round(c[6].confidence * 100) + "") && I(a, n);
		},
		d(c) {
			c && w(e), c && w(t), c && w(l);
		}
	};
}
function T(s) {
	let e,
		t,
		l,
		n,
		a,
		i,
		c = s[6].label + "",
		r,
		_,
		u,
		p,
		d,
		b = s[0].confidences && R(s);
	function f() {
		return s[5](s[8], s[6]);
	}
	return {
		c() {
			(e = y("div")),
				(t = y("div")),
				(l = y("div")),
				(n = L()),
				(a = y("div")),
				(i = y("div")),
				(r = N(c)),
				(_ = L()),
				b && b.c(),
				(u = L()),
				m(l, "class", "bar svelte-1mylvt5"),
				S(l, "width", s[6].confidence * 100 + "%"),
				m(i, "class", "text svelte-1mylvt5"),
				m(a, "class", "label svelte-1mylvt5"),
				m(t, "class", "inner-wrap svelte-1mylvt5"),
				m(e, "class", "confidence-set group svelte-1mylvt5"),
				M(e, "selectable", s[3]);
		},
		m(o, H) {
			k(o, e, H),
				v(e, t),
				v(t, l),
				v(t, n),
				v(t, a),
				v(a, i),
				v(i, r),
				v(a, _),
				b && b.m(a, null),
				v(e, u),
				p || ((d = U(e, "click", f)), (p = !0));
		},
		p(o, H) {
			(s = o),
				H & 1 && S(l, "width", s[6].confidence * 100 + "%"),
				H & 1 && c !== (c = s[6].label + "") && I(r, c),
				s[0].confidences
					? b
						? b.p(s, H)
						: ((b = R(s)), b.c(), b.m(a, null))
					: b && (b.d(1), (b = null)),
				H & 8 && M(e, "selectable", s[3]);
		},
		d(o) {
			o && w(e), b && b.d(), (p = !1), d();
		}
	};
}
function ae(s) {
	let e,
		t,
		l = s[0].label + "",
		n,
		a,
		i = typeof s[0] == "object" && s[0].confidences && K(s);
	return {
		c() {
			(e = y("div")),
				(t = y("div")),
				(n = N(l)),
				(a = L()),
				i && i.c(),
				m(t, "class", "output-class svelte-1mylvt5"),
				M(t, "sr-only", !s[1]),
				M(t, "no-confidence", !("confidences" in s[0])),
				S(t, "background-color", s[2] || "transparent");
		},
		m(c, r) {
			k(c, e, r), v(e, t), v(t, n), v(e, a), i && i.m(e, null);
		},
		p(c, [r]) {
			r & 1 && l !== (l = c[0].label + "") && I(n, l),
				r & 2 && M(t, "sr-only", !c[1]),
				r & 1 && M(t, "no-confidence", !("confidences" in c[0])),
				r & 4 && S(t, "background-color", c[2] || "transparent"),
				typeof c[0] == "object" && c[0].confidences
					? i
						? i.p(c, r)
						: ((i = K(c)), i.c(), i.m(e, null))
					: i && (i.d(1), (i = null));
		},
		i: E,
		o: E,
		d(c) {
			c && w(e), i && i.d();
		}
	};
}
function ie(s, e, t) {
	let { value: l } = e;
	const n = z();
	let { show_label: a = !0 } = e,
		{ color: i = void 0 } = e,
		{ selectable: c = !1 } = e;
	const r = (_, u) => {
		n("select", { index: _, value: u.label });
	};
	return (
		(s.$$set = (_) => {
			"value" in _ && t(0, (l = _.value)),
				"show_label" in _ && t(1, (a = _.show_label)),
				"color" in _ && t(2, (i = _.color)),
				"selectable" in _ && t(3, (c = _.selectable));
		}),
		[l, a, i, c, n, r]
	);
}
class oe extends q {
	constructor(e) {
		super(),
			A(this, e, ie, ae, D, {
				value: 0,
				show_label: 1,
				color: 2,
				selectable: 3
			});
	}
}
function Y(s) {
	let e, t;
	return (
		(e = new te({
			props: {
				Icon: P,
				label: s[5],
				disable: typeof s[6].container == "boolean" && !s[6].container
			}
		})),
		{
			c() {
				B(e.$$.fragment);
			},
			m(l, n) {
				j(e, l, n), (t = !0);
			},
			p(l, n) {
				const a = {};
				n & 32 && (a.label = l[5]),
					n & 64 &&
						(a.disable = typeof l[6].container == "boolean" && !l[6].container),
					e.$set(a);
			},
			i(l) {
				t || (h(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function ce(s) {
	let e, t;
	return (
		(e = new ne({
			props: { $$slots: { default: [re] }, $$scope: { ctx: s } }
		})),
		{
			c() {
				B(e.$$.fragment);
			},
			m(l, n) {
				j(e, l, n), (t = !0);
			},
			p(l, n) {
				const a = {};
				n & 4096 && (a.$$scope = { dirty: n, ctx: l }), e.$set(a);
			},
			i(l) {
				t || (h(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function fe(s) {
	let e, t;
	return (
		(e = new oe({
			props: { selectable: s[9], value: s[4], show_label: s[8], color: s[3] }
		})),
		e.$on("select", s[10]),
		{
			c() {
				B(e.$$.fragment);
			},
			m(l, n) {
				j(e, l, n), (t = !0);
			},
			p(l, n) {
				const a = {};
				n & 512 && (a.selectable = l[9]),
					n & 16 && (a.value = l[4]),
					n & 256 && (a.show_label = l[8]),
					n & 8 && (a.color = l[3]),
					e.$set(a);
			},
			i(l) {
				t || (h(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function re(s) {
	let e, t;
	return (
		(e = new P({})),
		{
			c() {
				B(e.$$.fragment);
			},
			m(l, n) {
				j(e, l, n), (t = !0);
			},
			i(l) {
				t || (h(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function ue(s) {
	let e, t, l, n, a, i, c;
	const r = [s[7]];
	let _ = {};
	for (let f = 0; f < r.length; f += 1) _ = W(_, r[f]);
	e = new X({ props: _ });
	let u = s[8] && Y(s);
	const p = [fe, ce],
		d = [];
	function b(f, o) {
		return typeof f[4] == "object" && f[4] !== void 0 && f[4] !== null ? 0 : 1;
	}
	return (
		(n = b(s)),
		(a = d[n] = p[n](s)),
		{
			c() {
				B(e.$$.fragment), (t = L()), u && u.c(), (l = L()), a.c(), (i = O());
			},
			m(f, o) {
				j(e, f, o),
					k(f, t, o),
					u && u.m(f, o),
					k(f, l, o),
					d[n].m(f, o),
					k(f, i, o),
					(c = !0);
			},
			p(f, o) {
				const H = o & 128 ? $(r, [x(f[7])]) : {};
				e.$set(H),
					f[8]
						? u
							? (u.p(f, o), o & 256 && h(u, 1))
							: ((u = Y(f)), u.c(), h(u, 1), u.m(l.parentNode, l))
						: u &&
						  (F(),
						  g(u, 1, 1, () => {
								u = null;
						  }),
						  G());
				let Z = n;
				(n = b(f)),
					n === Z
						? d[n].p(f, o)
						: (F(),
						  g(d[Z], 1, 1, () => {
								d[Z] = null;
						  }),
						  G(),
						  (a = d[n]),
						  a ? a.p(f, o) : ((a = d[n] = p[n](f)), a.c()),
						  h(a, 1),
						  a.m(i.parentNode, i));
			},
			i(f) {
				c || (h(e.$$.fragment, f), h(u), h(a), (c = !0));
			},
			o(f) {
				g(e.$$.fragment, f), g(u), g(a), (c = !1);
			},
			d(f) {
				C(e, f), f && w(t), u && u.d(f), f && w(l), d[n].d(f), f && w(i);
			}
		}
	);
}
function _e(s) {
	let e, t;
	return (
		(e = new le({
			props: {
				test_id: "label",
				visible: s[2],
				elem_id: s[0],
				elem_classes: s[1],
				disable: typeof s[6].container == "boolean" && !s[6].container,
				$$slots: { default: [ue] },
				$$scope: { ctx: s }
			}
		})),
		{
			c() {
				B(e.$$.fragment);
			},
			m(l, n) {
				j(e, l, n), (t = !0);
			},
			p(l, [n]) {
				const a = {};
				n & 4 && (a.visible = l[2]),
					n & 1 && (a.elem_id = l[0]),
					n & 2 && (a.elem_classes = l[1]),
					n & 64 &&
						(a.disable = typeof l[6].container == "boolean" && !l[6].container),
					n & 5112 && (a.$$scope = { dirty: n, ctx: l }),
					e.$set(a);
			},
			i(l) {
				t || (h(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				g(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function be(s, e, t) {
	let { elem_id: l = "" } = e,
		{ elem_classes: n = [] } = e,
		{ visible: a = !0 } = e,
		{ color: i = void 0 } = e,
		{ value: c } = e,
		{ label: r = "Label" } = e,
		{ style: _ = {} } = e,
		{ loading_status: u } = e,
		{ show_label: p } = e,
		{ selectable: d = !1 } = e;
	const b = z();
	function f(o) {
		ee.call(this, s, o);
	}
	return (
		(s.$$set = (o) => {
			"elem_id" in o && t(0, (l = o.elem_id)),
				"elem_classes" in o && t(1, (n = o.elem_classes)),
				"visible" in o && t(2, (a = o.visible)),
				"color" in o && t(3, (i = o.color)),
				"value" in o && t(4, (c = o.value)),
				"label" in o && t(5, (r = o.label)),
				"style" in o && t(6, (_ = o.style)),
				"loading_status" in o && t(7, (u = o.loading_status)),
				"show_label" in o && t(8, (p = o.show_label)),
				"selectable" in o && t(9, (d = o.selectable));
		}),
		(s.$$.update = () => {
			s.$$.dirty & 16 && b("change");
		}),
		[l, n, a, i, c, r, _, u, p, d, f]
	);
}
class me extends q {
	constructor(e) {
		super(),
			A(this, e, be, _e, D, {
				elem_id: 0,
				elem_classes: 1,
				visible: 2,
				color: 3,
				value: 4,
				label: 5,
				style: 6,
				loading_status: 7,
				show_label: 8,
				selectable: 9
			});
	}
}
const we = me,
	pe = ["static"],
	ye = (s) => ({
		type: {
			payload:
				"{ label: string; confidences?: Array<{ label: string; confidence: number }>"
		},
		description: {
			payload: "output label and optional set of confidences per label"
		}
	});
export { we as Component, ye as document, pe as modes };
//# sourceMappingURL=index-c150fd70.js.map
