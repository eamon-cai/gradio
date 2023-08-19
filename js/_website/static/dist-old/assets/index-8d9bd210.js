import {
	S as Z,
	i as $,
	s as x,
	e as E,
	m as q,
	p as I,
	t as y,
	n as C,
	r as ee,
	x as le,
	$ as te,
	H as S,
	G as M,
	C as d,
	g as k,
	h as se,
	j as ne,
	l as oe,
	o as ae,
	q as v,
	f as ie,
	L as D,
	M as A,
	E as L,
	F,
	N as Q,
	I as re,
	D as G,
	J as B,
	K as ue,
	a0 as fe
} from "../lite.js";
import { B as _e } from "./Button-5b68d65a.js";
import { B as me } from "./BlockLabel-e392131b.js";
import { E as ce } from "./Empty-b331fdfe.js";
/* empty css                                                    */ import { I as R } from "./Image-9065c566.js";
import { n as H } from "./ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js";
function J(t, e, s) {
	const l = t.slice();
	return (l[22] = e[s][0]), (l[7] = e[s][1]), (l[24] = s), l;
}
function K(t, e, s) {
	const l = t.slice();
	return (l[25] = e[s][0]), (l[7] = e[s][1]), (l[24] = s), l;
}
function ge(t) {
	let e,
		s,
		l,
		n,
		i,
		o,
		_ = t[8] ? t[8][1] : [],
		m = [];
	for (let a = 0; a < _.length; a += 1) m[a] = T(K(t, _, a));
	let c = t[4] && t[8] && O(t);
	return {
		c() {
			(e = M("div")), (s = M("img")), (n = S());
			for (let a = 0; a < m.length; a += 1) m[a].c();
			(i = S()),
				c && c.c(),
				(o = ie()),
				d(s, "class", "base-image svelte-wgo10s"),
				D(s.src, (l = t[8] ? t[8][0].data : null)) || d(s, "src", l),
				A(s, "fit-height", t[5].height),
				d(e, "class", "image-container svelte-wgo10s");
		},
		m(a, g) {
			k(a, e, g), L(e, s), L(e, n);
			for (let f = 0; f < m.length; f += 1) m[f] && m[f].m(e, null);
			k(a, i, g), c && c.m(a, g), k(a, o, g);
		},
		p(a, g) {
			if (
				(g & 256 &&
					!D(s.src, (l = a[8] ? a[8][0].data : null)) &&
					d(s, "src", l),
				g & 32 && A(s, "fit-height", a[5].height),
				g & 800)
			) {
				_ = a[8] ? a[8][1] : [];
				let f;
				for (f = 0; f < _.length; f += 1) {
					const b = K(a, _, f);
					m[f] ? m[f].p(b, g) : ((m[f] = T(b)), m[f].c(), m[f].m(e, null));
				}
				for (; f < m.length; f += 1) m[f].d(1);
				m.length = _.length;
			}
			a[4] && a[8]
				? c
					? c.p(a, g)
					: ((c = O(a)), c.c(), c.m(o.parentNode, o))
				: c && (c.d(1), (c = null));
		},
		i: F,
		o: F,
		d(a) {
			a && v(e), Q(m, a), a && v(i), c && c.d(a), a && v(o);
		}
	};
}
function he(t) {
	let e, s;
	return (
		(e = new ce({
			props: {
				size: "large",
				unpadded_box: !0,
				$$slots: { default: [de] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, n) {
				q(e, l, n), (s = !0);
			},
			p(l, n) {
				const i = {};
				n & 134217728 && (i.$$scope = { dirty: n, ctx: l }), e.$set(i);
			},
			i(l) {
				s || (I(e.$$.fragment, l), (s = !0));
			},
			o(l) {
				y(e.$$.fragment, l), (s = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function T(t) {
	let e, s, l;
	return {
		c() {
			(e = M("img")),
				d(e, "class", "mask fit-height svelte-wgo10s"),
				D(e.src, (s = t[25].data)) || d(e, "src", s),
				d(
					e,
					"style",
					(l =
						t[5].color_map && t[7] in t[5].color_map
							? null
							: `filter: hue-rotate(${Math.round(
									(t[24] * 360) / t[8][1].length
							  )}deg);`)
				),
				A(e, "active", t[9] == t[7]),
				A(e, "inactive", t[9] != t[7] && t[9] != null);
		},
		m(n, i) {
			k(n, e, i);
		},
		p(n, i) {
			i & 256 && !D(e.src, (s = n[25].data)) && d(e, "src", s),
				i & 288 &&
					l !==
						(l =
							n[5].color_map && n[7] in n[5].color_map
								? null
								: `filter: hue-rotate(${Math.round(
										(n[24] * 360) / n[8][1].length
								  )}deg);`) &&
					d(e, "style", l),
				i & 768 && A(e, "active", n[9] == n[7]),
				i & 768 && A(e, "inactive", n[9] != n[7] && n[9] != null);
		},
		d(n) {
			n && v(e);
		}
	};
}
function O(t) {
	let e,
		s = t[8][1],
		l = [];
	for (let n = 0; n < s.length; n += 1) l[n] = P(J(t, s, n));
	return {
		c() {
			e = M("div");
			for (let n = 0; n < l.length; n += 1) l[n].c();
			d(e, "class", "legend svelte-wgo10s");
		},
		m(n, i) {
			k(n, e, i);
			for (let o = 0; o < l.length; o += 1) l[o] && l[o].m(e, null);
		},
		p(n, i) {
			if (i & 7456) {
				s = n[8][1];
				let o;
				for (o = 0; o < s.length; o += 1) {
					const _ = J(n, s, o);
					l[o] ? l[o].p(_, i) : ((l[o] = P(_)), l[o].c(), l[o].m(e, null));
				}
				for (; o < l.length; o += 1) l[o].d(1);
				l.length = s.length;
			}
		},
		d(n) {
			n && v(e), Q(l, n);
		}
	};
}
function P(t) {
	let e,
		s = t[7] + "",
		l,
		n,
		i,
		o;
	function _() {
		return t[17](t[7]);
	}
	function m() {
		return t[18](t[7]);
	}
	function c() {
		return t[21](t[24], t[7]);
	}
	return {
		c() {
			(e = M("div")),
				(l = re(s)),
				(n = S()),
				d(e, "class", "legend-item svelte-wgo10s"),
				G(
					e,
					"background-color",
					t[5].color_map && t[7] in t[5].color_map
						? t[5].color_map[t[7]] + "88"
						: `hsla(${Math.round(
								(t[24] * 360) / t[8][1].length
						  )}, 100%, 50%, 0.3)`
				);
		},
		m(a, g) {
			k(a, e, g),
				L(e, l),
				L(e, n),
				i ||
					((o = [
						B(e, "mouseover", _),
						B(e, "focus", m),
						B(e, "mouseout", t[19]),
						B(e, "blur", t[20]),
						B(e, "click", c)
					]),
					(i = !0));
		},
		p(a, g) {
			(t = a),
				g & 256 && s !== (s = t[7] + "") && ue(l, s),
				g & 288 &&
					G(
						e,
						"background-color",
						t[5].color_map && t[7] in t[5].color_map
							? t[5].color_map[t[7]] + "88"
							: `hsla(${Math.round(
									(t[24] * 360) / t[8][1].length
							  )}, 100%, 50%, 0.3)`
					);
		},
		d(a) {
			a && v(e), (i = !1), fe(o);
		}
	};
}
function de(t) {
	let e, s;
	return (
		(e = new R({})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, n) {
				q(e, l, n), (s = !0);
			},
			i(l) {
				s || (I(e.$$.fragment, l), (s = !0));
			},
			o(l) {
				y(e.$$.fragment, l), (s = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function be(t) {
	let e, s, l, n, i, o, _, m;
	const c = [t[6]];
	let a = {};
	for (let r = 0; r < c.length; r += 1) a = le(a, c[r]);
	(e = new te({ props: a })),
		(l = new me({
			props: { show_label: t[3], Icon: R, label: t[7] || "Image" }
		}));
	const g = [he, ge],
		f = [];
	function b(r, h) {
		return r[8] == null ? 0 : 1;
	}
	return (
		(o = b(t)),
		(_ = f[o] = g[o](t)),
		{
			c() {
				E(e.$$.fragment),
					(s = S()),
					E(l.$$.fragment),
					(n = S()),
					(i = M("div")),
					_.c(),
					d(i, "class", "container svelte-wgo10s");
			},
			m(r, h) {
				q(e, r, h),
					k(r, s, h),
					q(l, r, h),
					k(r, n, h),
					k(r, i, h),
					f[o].m(i, null),
					(m = !0);
			},
			p(r, h) {
				const j = h & 64 ? se(c, [ne(r[6])]) : {};
				e.$set(j);
				const w = {};
				h & 8 && (w.show_label = r[3]),
					h & 128 && (w.label = r[7] || "Image"),
					l.$set(w);
				let p = o;
				(o = b(r)),
					o === p
						? f[o].p(r, h)
						: (oe(),
						  y(f[p], 1, 1, () => {
								f[p] = null;
						  }),
						  ae(),
						  (_ = f[o]),
						  _ ? _.p(r, h) : ((_ = f[o] = g[o](r)), _.c()),
						  I(_, 1),
						  _.m(i, null));
			},
			i(r) {
				m || (I(e.$$.fragment, r), I(l.$$.fragment, r), I(_), (m = !0));
			},
			o(r) {
				y(e.$$.fragment, r), y(l.$$.fragment, r), y(_), (m = !1);
			},
			d(r) {
				C(e, r), r && v(s), C(l, r), r && v(n), r && v(i), f[o].d();
			}
		}
	);
}
function ke(t) {
	let e, s;
	return (
		(e = new _e({
			props: {
				visible: t[2],
				elem_id: t[0],
				elem_classes: t[1],
				padding: !1,
				style: { height: t[5].height, width: t[5].width },
				allow_overflow: !1,
				$$slots: { default: [be] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				E(e.$$.fragment);
			},
			m(l, n) {
				q(e, l, n), (s = !0);
			},
			p(l, [n]) {
				const i = {};
				n & 4 && (i.visible = l[2]),
					n & 1 && (i.elem_id = l[0]),
					n & 2 && (i.elem_classes = l[1]),
					n & 32 && (i.style = { height: l[5].height, width: l[5].width }),
					n & 134218744 && (i.$$scope = { dirty: n, ctx: l }),
					e.$set(i);
			},
			i(l) {
				s || (I(e.$$.fragment, l), (s = !0));
			},
			o(l) {
				y(e.$$.fragment, l), (s = !1);
			},
			d(l) {
				C(e, l);
			}
		}
	);
}
function ve(t, e, s) {
	let { elem_id: l = "" } = e,
		{ elem_classes: n = [] } = e,
		{ visible: i = !0 } = e,
		{ value: o } = e,
		_,
		m,
		{ label: c = "Annotated Image" } = e,
		{ show_label: a = !0 } = e,
		{ show_legend: g = !0 } = e,
		{ style: f = {} } = e,
		{ root: b } = e,
		{ root_url: r } = e,
		h = null,
		{ loading_status: j } = e;
	const w = ee();
	function p(u) {
		s(9, (h = u));
	}
	function N() {
		s(9, (h = null));
	}
	const U = (u) => p(u),
		V = (u) => p(u),
		W = () => N(),
		X = () => N(),
		Y = (u, z) => w("select", { index: u, value: z });
	return (
		(t.$$set = (u) => {
			"elem_id" in u && s(0, (l = u.elem_id)),
				"elem_classes" in u && s(1, (n = u.elem_classes)),
				"visible" in u && s(2, (i = u.visible)),
				"value" in u && s(13, (o = u.value)),
				"label" in u && s(7, (c = u.label)),
				"show_label" in u && s(3, (a = u.show_label)),
				"show_legend" in u && s(4, (g = u.show_legend)),
				"style" in u && s(5, (f = u.style)),
				"root" in u && s(14, (b = u.root)),
				"root_url" in u && s(15, (r = u.root_url)),
				"loading_status" in u && s(6, (j = u.loading_status));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 122880 &&
				(o !== _ && (s(16, (_ = o)), w("change")),
				o
					? s(8, (m = [H(o[0], b, r), o[1].map(([u, z]) => [H(u, b, r), z])]))
					: s(8, (m = null)));
		}),
		[l, n, i, a, g, f, j, c, m, h, w, p, N, o, b, r, _, U, V, W, X, Y]
	);
}
class we extends Z {
	constructor(e) {
		super(),
			$(this, e, ve, ke, x, {
				elem_id: 0,
				elem_classes: 1,
				visible: 2,
				value: 13,
				label: 7,
				show_label: 3,
				show_legend: 4,
				style: 5,
				root: 14,
				root_url: 15,
				loading_status: 6
			});
	}
}
const qe = we,
	Ce = ["static"],
	Se = (t) => ({
		type: { payload: "[string, Array<[string, string]>]" },
		description: {
			payload:
				"path to base image, followed by a list of tuples [mask image path, label]"
		}
	});
export { qe as Component, Se as document, Ce as modes };
//# sourceMappingURL=index-8d9bd210.js.map
