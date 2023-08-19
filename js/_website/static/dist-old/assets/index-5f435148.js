import {
	S as ee,
	i as le,
	s as te,
	aa as ne,
	H as D,
	f as pe,
	g as A,
	J as M,
	p,
	l as J,
	t as z,
	o as K,
	q as C,
	r as ye,
	e as I,
	m as L,
	n as N,
	T as ze,
	b as V,
	G as j,
	C as b,
	M as B,
	E as y,
	ah as Ge,
	N as ie,
	L as H,
	D as F,
	a0 as Be,
	I as se,
	K as oe,
	x as je,
	$ as Ae,
	h as Ce,
	j as De,
	y as Ee
} from "../lite.js";
import { g as Ie, B as Le } from "./Button-5b68d65a.js";
import { B as Ne } from "./BlockLabel-e392131b.js";
import { E as qe } from "./Empty-b331fdfe.js";
import { n as O } from "./ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js";
import { M as He } from "./ModifyUpload-33254150.js";
/* empty css                                                    */ import { I as ae } from "./Image-9065c566.js";
function P(l, t, e) {
	const n = l.slice();
	return (n[31] = t[e][0]), (n[32] = t[e][1]), (n[34] = e), n;
}
function Q(l, t, e) {
	const n = l.slice();
	return (n[31] = t[e]), (n[35] = t), (n[34] = e), n;
}
function W(l) {
	let t, e;
	return (
		(t = new Ne({
			props: {
				show_label: l[0],
				Icon: ae,
				label: l[1] || "Gallery",
				disable: typeof l[3].container == "boolean" && !l[3].container
			}
		})),
		{
			c() {
				I(t.$$.fragment);
			},
			m(n, i) {
				L(t, n, i), (e = !0);
			},
			p(n, i) {
				const a = {};
				i[0] & 1 && (a.show_label = n[0]),
					i[0] & 2 && (a.label = n[1] || "Gallery"),
					i[0] & 8 &&
						(a.disable = typeof n[3].container == "boolean" && !n[3].container),
					t.$set(a);
			},
			i(n) {
				e || (p(t.$$.fragment, n), (e = !0));
			},
			o(n) {
				z(t.$$.fragment, n), (e = !1);
			},
			d(n) {
				N(t, n);
			}
		}
	);
}
function Me(l) {
	let t,
		e,
		n,
		i,
		a,
		g = l[4] !== null && X(l),
		f = l[7],
		s = [];
	for (let o = 0; o < f.length; o += 1) s[o] = x(P(l, f, o));
	return {
		c() {
			g && g.c(), (t = D()), (e = j("div")), (n = j("div"));
			for (let o = 0; o < s.length; o += 1) s[o].c();
			b(n, "class", "grid-container svelte-g4rw9"),
				b(n, "style", l[10]),
				B(n, "pt-6", l[0]),
				b(e, "class", "grid-wrap svelte-g4rw9"),
				ne(() => l[26].call(e)),
				B(e, "fixed-height", !l[3].height || l[3].height == "auto");
		},
		m(o, c) {
			g && g.m(o, c), A(o, t, c), A(o, e, c), y(e, n);
			for (let m = 0; m < s.length; m += 1) s[m] && s[m].m(n, null);
			(i = Ge(e, l[26].bind(e))), (a = !0);
		},
		p(o, c) {
			if (
				(o[4] !== null
					? g
						? (g.p(o, c), c[0] & 16 && p(g, 1))
						: ((g = X(o)), g.c(), p(g, 1), g.m(t.parentNode, t))
					: g &&
					  (J(),
					  z(g, 1, 1, () => {
							g = null;
					  }),
					  K()),
				c[0] & 2192)
			) {
				f = o[7];
				let m;
				for (m = 0; m < f.length; m += 1) {
					const u = P(o, f, m);
					s[m] ? s[m].p(u, c) : ((s[m] = x(u)), s[m].c(), s[m].m(n, null));
				}
				for (; m < s.length; m += 1) s[m].d(1);
				s.length = f.length;
			}
			(!a || c[0] & 1024) && b(n, "style", o[10]),
				(!a || c[0] & 1) && B(n, "pt-6", o[0]),
				(!a || c[0] & 8) &&
					B(e, "fixed-height", !o[3].height || o[3].height == "auto");
		},
		i(o) {
			a || (p(g), (a = !0));
		},
		o(o) {
			z(g), (a = !1);
		},
		d(o) {
			g && g.d(o), o && C(t), o && C(e), ie(s, o), i();
		}
	};
}
function Re(l) {
	let t, e;
	return (
		(t = new qe({
			props: {
				size: "large",
				unpadded_box: !0,
				$$slots: { default: [Se] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				I(t.$$.fragment);
			},
			m(n, i) {
				L(t, n, i), (e = !0);
			},
			p(n, i) {
				const a = {};
				i[1] & 32 && (a.$$scope = { dirty: i, ctx: n }), t.$set(a);
			},
			i(n) {
				e || (p(t.$$.fragment, n), (e = !0));
			},
			o(n) {
				z(t.$$.fragment, n), (e = !1);
			},
			d(n) {
				N(t, n);
			}
		}
	);
}
function X(l) {
	let t, e, n, i, a, g, f, s, o, c, m, u, d;
	(e = new He({})), e.$on("clear", l[20]);
	let _ = l[7][l[4]][1] && Y(l),
		G = l[7],
		w = [];
	for (let r = 0; r < G.length; r += 1) w[r] = Z(Q(l, G, r));
	return {
		c() {
			(t = j("div")),
				I(e.$$.fragment),
				(n = D()),
				(i = j("img")),
				(s = D()),
				_ && _.c(),
				(o = D()),
				(c = j("div"));
			for (let r = 0; r < w.length; r += 1) w[r].c();
			H(i.src, (a = l[7][l[4]][0].data)) || b(i, "src", a),
				b(i, "alt", (g = l[7][l[4]][1] || "")),
				b(i, "title", (f = l[7][l[4]][1] || null)),
				F(
					i,
					"height",
					"calc(100% - " + (l[7][l[4]][1] ? "80px" : "60px") + ")"
				),
				b(i, "class", "svelte-g4rw9"),
				B(i, "with-caption", !!l[7][l[4]][1]),
				b(c, "class", "thumbnails scroll-hide svelte-g4rw9"),
				b(t, "class", "preview svelte-g4rw9"),
				B(t, "fixed-height", l[3].height !== "auto");
		},
		m(r, v) {
			A(r, t, v),
				L(e, t, null),
				y(t, n),
				y(t, i),
				y(t, s),
				_ && _.m(t, null),
				y(t, o),
				y(t, c);
			for (let k = 0; k < w.length; k += 1) w[k] && w[k].m(c, null);
			l[24](c),
				(m = !0),
				u || ((d = [M(i, "click", l[21]), M(t, "keydown", l[13])]), (u = !0));
		},
		p(r, v) {
			if (
				((!m || (v[0] & 144 && !H(i.src, (a = r[7][r[4]][0].data)))) &&
					b(i, "src", a),
				(!m || (v[0] & 144 && g !== (g = r[7][r[4]][1] || ""))) &&
					b(i, "alt", g),
				(!m || (v[0] & 144 && f !== (f = r[7][r[4]][1] || null))) &&
					b(i, "title", f),
				(!m || v[0] & 144) &&
					F(
						i,
						"height",
						"calc(100% - " + (r[7][r[4]][1] ? "80px" : "60px") + ")"
					),
				(!m || v[0] & 144) && B(i, "with-caption", !!r[7][r[4]][1]),
				r[7][r[4]][1]
					? _
						? _.p(r, v)
						: ((_ = Y(r)), _.c(), _.m(t, o))
					: _ && (_.d(1), (_ = null)),
				v[0] & 400)
			) {
				G = r[7];
				let k;
				for (k = 0; k < G.length; k += 1) {
					const E = Q(r, G, k);
					w[k] ? w[k].p(E, v) : ((w[k] = Z(E)), w[k].c(), w[k].m(c, null));
				}
				for (; k < w.length; k += 1) w[k].d(1);
				w.length = G.length;
			}
			(!m || v[0] & 8) && B(t, "fixed-height", r[3].height !== "auto");
		},
		i(r) {
			m || (p(e.$$.fragment, r), (m = !0));
		},
		o(r) {
			z(e.$$.fragment, r), (m = !1);
		},
		d(r) {
			r && C(t), N(e), _ && _.d(), ie(w, r), l[24](null), (u = !1), Be(d);
		}
	};
}
function Y(l) {
	let t,
		e = l[7][l[4]][1] + "",
		n;
	return {
		c() {
			(t = j("div")), (n = se(e)), b(t, "class", "caption svelte-g4rw9");
		},
		m(i, a) {
			A(i, t, a), y(t, n);
		},
		p(i, a) {
			a[0] & 144 && e !== (e = i[7][i[4]][1] + "") && oe(n, e);
		},
		d(i) {
			i && C(t);
		}
	};
}
function Z(l) {
	let t,
		e,
		n,
		i,
		a,
		g,
		f = l[34],
		s,
		o;
	const c = () => l[22](t, f),
		m = () => l[22](null, f);
	function u() {
		return l[23](l[34]);
	}
	return {
		c() {
			(t = j("button")),
				(e = j("img")),
				(g = D()),
				H(e.src, (n = l[31][0].data)) || b(e, "src", n),
				b(e, "title", (i = l[31][1] || null)),
				b(e, "alt", (a = l[31][1] || null)),
				b(e, "class", "svelte-g4rw9"),
				b(t, "class", "thumbnail-item thumbnail-small svelte-g4rw9"),
				B(t, "selected", l[4] === l[34]);
		},
		m(d, _) {
			A(d, t, _),
				y(t, e),
				y(t, g),
				c(),
				s || ((o = M(t, "click", u)), (s = !0));
		},
		p(d, _) {
			(l = d),
				_[0] & 128 && !H(e.src, (n = l[31][0].data)) && b(e, "src", n),
				_[0] & 128 && i !== (i = l[31][1] || null) && b(e, "title", i),
				_[0] & 128 && a !== (a = l[31][1] || null) && b(e, "alt", a),
				f !== l[34] && (m(), (f = l[34]), c()),
				_[0] & 16 && B(t, "selected", l[4] === l[34]);
		},
		d(d) {
			d && C(t), m(), (s = !1), o();
		}
	};
}
function $(l) {
	let t,
		e = l[32] + "",
		n;
	return {
		c() {
			(t = j("div")), (n = se(e)), b(t, "class", "caption-label svelte-g4rw9");
		},
		m(i, a) {
			A(i, t, a), y(t, n);
		},
		p(i, a) {
			a[0] & 128 && e !== (e = i[32] + "") && oe(n, e);
		},
		d(i) {
			i && C(t);
		}
	};
}
function x(l) {
	let t,
		e,
		n,
		i,
		a,
		g,
		f,
		s,
		o = l[32] && $(l);
	function c() {
		return l[25](l[34]);
	}
	return {
		c() {
			(t = j("button")),
				(e = j("img")),
				(a = D()),
				o && o.c(),
				(g = D()),
				b(e, "alt", (n = l[32] || "")),
				H(e.src, (i = typeof l[31] == "string" ? l[31] : l[31].data)) ||
					b(e, "src", i),
				b(e, "class", "svelte-g4rw9"),
				b(t, "class", "thumbnail-item thumbnail-lg svelte-g4rw9"),
				B(t, "selected", l[4] === l[34]);
		},
		m(m, u) {
			A(m, t, u),
				y(t, e),
				y(t, a),
				o && o.m(t, null),
				y(t, g),
				f || ((s = M(t, "click", c)), (f = !0));
		},
		p(m, u) {
			(l = m),
				u[0] & 128 && n !== (n = l[32] || "") && b(e, "alt", n),
				u[0] & 128 &&
					!H(e.src, (i = typeof l[31] == "string" ? l[31] : l[31].data)) &&
					b(e, "src", i),
				l[32]
					? o
						? o.p(l, u)
						: ((o = $(l)), o.c(), o.m(t, g))
					: o && (o.d(1), (o = null)),
				u[0] & 16 && B(t, "selected", l[4] === l[34]);
		},
		d(m) {
			m && C(t), o && o.d(), (f = !1), s();
		}
	};
}
function Se(l) {
	let t, e;
	return (
		(t = new ae({})),
		{
			c() {
				I(t.$$.fragment);
			},
			m(n, i) {
				L(t, n, i), (e = !0);
			},
			i(n) {
				e || (p(t.$$.fragment, n), (e = !0));
			},
			o(n) {
				z(t.$$.fragment, n), (e = !1);
			},
			d(n) {
				N(t, n);
			}
		}
	);
}
function Te(l) {
	let t, e, n, i, a, g, f;
	ne(l[19]);
	let s = l[0] && W(l);
	const o = [Re, Me],
		c = [];
	function m(u, d) {
		return u[2] === null || u[7] === null || u[7].length === 0 ? 0 : 1;
	}
	return (
		(e = m(l)),
		(n = c[e] = o[e](l)),
		{
			c() {
				s && s.c(), (t = D()), n.c(), (i = pe());
			},
			m(u, d) {
				s && s.m(u, d),
					A(u, t, d),
					c[e].m(u, d),
					A(u, i, d),
					(a = !0),
					g || ((f = M(window, "resize", l[19])), (g = !0));
			},
			p(u, d) {
				u[0]
					? s
						? (s.p(u, d), d[0] & 1 && p(s, 1))
						: ((s = W(u)), s.c(), p(s, 1), s.m(t.parentNode, t))
					: s &&
					  (J(),
					  z(s, 1, 1, () => {
							s = null;
					  }),
					  K());
				let _ = e;
				(e = m(u)),
					e === _
						? c[e].p(u, d)
						: (J(),
						  z(c[_], 1, 1, () => {
								c[_] = null;
						  }),
						  K(),
						  (n = c[e]),
						  n ? n.p(u, d) : ((n = c[e] = o[e](u)), n.c()),
						  p(n, 1),
						  n.m(i.parentNode, i));
			},
			i(u) {
				a || (p(s), p(n), (a = !0));
			},
			o(u) {
				z(s), z(n), (a = !1);
			},
			d(u) {
				s && s.d(u), u && C(t), c[e].d(u), u && C(i), (g = !1), f();
			}
		}
	);
}
function Je(l, t, e) {
	let n,
		i,
		a,
		g,
		f,
		{ show_label: s = !0 } = t,
		{ label: o } = t,
		{ root: c = "" } = t,
		{ root_url: m = null } = t,
		{ value: u = null } = t,
		{ style: d = { grid_cols: [2], object_fit: "cover", height: "auto" } } = t;
	const _ = ye();
	let G = !0,
		w = u,
		r = null,
		v = null;
	function k(h) {
		switch (h.code) {
			case "Escape":
				h.preventDefault(), e(4, (r = null));
				break;
			case "ArrowLeft":
				h.preventDefault(), e(4, (r = i));
				break;
			case "ArrowRight":
				h.preventDefault(), e(4, (r = a));
				break;
		}
	}
	let E = [],
		q;
	async function re(h) {
		if (typeof h != "number") return;
		await ze(), E[h].focus();
		const { left: T, width: we } = q.getBoundingClientRect(),
			{ left: ke, width: ve } = E[h].getBoundingClientRect(),
			U = ke - T + ve / 2 - we / 2 + q.scrollLeft;
		q.scrollTo({ left: U < 0 ? 0 : U, behavior: "smooth" });
	}
	function fe(h) {
		return (
			e(10, (f = Ie(h, ["grid_cols", "grid_rows", "object_fit"]).styles)),
			f + ` height: ${h.height}`
		);
	}
	let R = 0,
		S = 0;
	function ue() {
		e(6, (S = window.innerHeight));
	}
	const _e = () => e(4, (r = null)),
		ce = () => e(4, (r = a));
	function me(h, T) {
		V[h ? "unshift" : "push"](() => {
			(E[T] = h), e(8, E);
		});
	}
	const ge = (h) => e(4, (r = h));
	function he(h) {
		V[h ? "unshift" : "push"](() => {
			(q = h), e(9, q);
		});
	}
	const be = (h) => e(4, (r = g ? h : r));
	function de() {
		(R = this.clientHeight), e(5, R);
	}
	return (
		(l.$$set = (h) => {
			"show_label" in h && e(0, (s = h.show_label)),
				"label" in h && e(1, (o = h.label)),
				"root" in h && e(14, (c = h.root)),
				"root_url" in h && e(15, (m = h.root_url)),
				"value" in h && e(2, (u = h.value)),
				"style" in h && e(3, (d = h.style));
		}),
		(l.$$.update = () => {
			l.$$.dirty[0] & 65540 && e(16, (G = u == null || u.length == 0 ? !0 : G)),
				l.$$.dirty[0] & 49156 &&
					e(
						7,
						(n =
							u === null
								? null
								: u.map((h) =>
										Array.isArray(h)
											? [O(h[0], c, m), h[1]]
											: [O(h, c, m), null]
								  ))
					),
				l.$$.dirty[0] & 196636 &&
					w !== u &&
					(G
						? (e(4, (r = d.preview && u?.length ? 0 : null)), e(16, (G = !1)))
						: e(4, (r = r !== null && u !== null && r < u.length ? r : null)),
					e(17, (w = u))),
				l.$$.dirty[0] & 144 &&
					(i = ((r ?? 0) + (n?.length ?? 0) - 1) % (n?.length ?? 0)),
				l.$$.dirty[0] & 144 && e(12, (a = ((r ?? 0) + 1) % (n?.length ?? 0))),
				l.$$.dirty[0] & 262288 &&
					r !== v &&
					(e(18, (v = r)),
					r !== null && _("select", { index: r, value: n?.[r][1] })),
				l.$$.dirty[0] & 16 && re(r),
				l.$$.dirty[0] & 96 && e(11, (g = S >= R)),
				l.$$.dirty[0] & 8 && e(10, (f = fe(d)));
		}),
		[
			s,
			o,
			u,
			d,
			r,
			R,
			S,
			n,
			E,
			q,
			f,
			g,
			a,
			k,
			c,
			m,
			G,
			w,
			v,
			ue,
			_e,
			ce,
			me,
			ge,
			he,
			be,
			de
		]
	);
}
class Ke extends ee {
	constructor(t) {
		super(),
			le(
				this,
				t,
				Je,
				Te,
				te,
				{ show_label: 0, label: 1, root: 14, root_url: 15, value: 2, style: 3 },
				null,
				[-1, -1]
			);
	}
}
function Ue(l) {
	let t, e, n, i;
	const a = [l[0]];
	let g = {};
	for (let f = 0; f < a.length; f += 1) g = je(g, a[f]);
	return (
		(t = new Ae({ props: g })),
		(n = new Ke({
			props: {
				label: l[2],
				value: l[8],
				style: l[9],
				show_label: l[1],
				root: l[3],
				root_url: l[4]
			}
		})),
		n.$on("select", l[10]),
		{
			c() {
				I(t.$$.fragment), (e = D()), I(n.$$.fragment);
			},
			m(f, s) {
				L(t, f, s), A(f, e, s), L(n, f, s), (i = !0);
			},
			p(f, s) {
				const o = s & 1 ? Ce(a, [De(f[0])]) : {};
				t.$set(o);
				const c = {};
				s & 4 && (c.label = f[2]),
					s & 256 && (c.value = f[8]),
					s & 512 && (c.style = f[9]),
					s & 2 && (c.show_label = f[1]),
					s & 8 && (c.root = f[3]),
					s & 16 && (c.root_url = f[4]),
					n.$set(c);
			},
			i(f) {
				i || (p(t.$$.fragment, f), p(n.$$.fragment, f), (i = !0));
			},
			o(f) {
				z(t.$$.fragment, f), z(n.$$.fragment, f), (i = !1);
			},
			d(f) {
				N(t, f), f && C(e), N(n, f);
			}
		}
	);
}
function Ve(l) {
	let t, e;
	return (
		(t = new Le({
			props: {
				visible: l[7],
				variant: "solid",
				padding: !1,
				elem_id: l[5],
				elem_classes: l[6],
				disable: typeof l[9].container == "boolean" && !l[9].container,
				$$slots: { default: [Ue] },
				$$scope: { ctx: l }
			}
		})),
		{
			c() {
				I(t.$$.fragment);
			},
			m(n, i) {
				L(t, n, i), (e = !0);
			},
			p(n, [i]) {
				const a = {};
				i & 128 && (a.visible = n[7]),
					i & 32 && (a.elem_id = n[5]),
					i & 64 && (a.elem_classes = n[6]),
					i & 512 &&
						(a.disable = typeof n[9].container == "boolean" && !n[9].container),
					i & 2847 && (a.$$scope = { dirty: i, ctx: n }),
					t.$set(a);
			},
			i(n) {
				e || (p(t.$$.fragment, n), (e = !0));
			},
			o(n) {
				z(t.$$.fragment, n), (e = !1);
			},
			d(n) {
				N(t, n);
			}
		}
	);
}
function Fe(l, t, e) {
	let { loading_status: n } = t,
		{ show_label: i } = t,
		{ label: a } = t,
		{ root: g } = t,
		{ root_url: f } = t,
		{ elem_id: s = "" } = t,
		{ elem_classes: o = [] } = t,
		{ visible: c = !0 } = t,
		{ value: m = null } = t,
		{ style: u = {} } = t;
	function d(_) {
		Ee.call(this, l, _);
	}
	return (
		(l.$$set = (_) => {
			"loading_status" in _ && e(0, (n = _.loading_status)),
				"show_label" in _ && e(1, (i = _.show_label)),
				"label" in _ && e(2, (a = _.label)),
				"root" in _ && e(3, (g = _.root)),
				"root_url" in _ && e(4, (f = _.root_url)),
				"elem_id" in _ && e(5, (s = _.elem_id)),
				"elem_classes" in _ && e(6, (o = _.elem_classes)),
				"visible" in _ && e(7, (c = _.visible)),
				"value" in _ && e(8, (m = _.value)),
				"style" in _ && e(9, (u = _.style));
		}),
		[n, i, a, g, f, s, o, c, m, u, d]
	);
}
class Oe extends ee {
	constructor(t) {
		super(),
			le(this, t, Fe, Ve, te, {
				loading_status: 0,
				show_label: 1,
				label: 2,
				root: 3,
				root_url: 4,
				elem_id: 5,
				elem_classes: 6,
				visible: 7,
				value: 8,
				style: 9
			});
	}
}
const ll = Oe,
	tl = ["static"],
	nl = (l) => ({
		type: { payload: "Array<{ name: string } | [{ name: string }, string]>" },
		description: {
			payload: "list of objects, with filename and optional caption,"
		}
	});
export { ll as Component, nl as document, tl as modes };
//# sourceMappingURL=index-5f435148.js.map
