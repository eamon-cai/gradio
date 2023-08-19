import {
	S as J,
	i as P,
	s as q,
	G as E,
	C as F,
	g as U,
	E as z,
	F as C,
	q as j,
	N as fe,
	r as G,
	I,
	H as T,
	M as V,
	J as oe,
	K as W,
	e as A,
	f as K,
	m as v,
	l as L,
	t as g,
	o as R,
	p as h,
	n as y,
	y as O,
	T as ue,
	b as _e,
	a as ce,
	k as me,
	V as be,
	X as de,
	Y as ge,
	Z as he,
	x as ke,
	$ as we,
	h as pe,
	j as Ae
} from "../lite.js";
import { B as ve } from "./Button-5b68d65a.js";
import { B as ee } from "./BlockLabel-e392131b.js";
import { E as ye } from "./Empty-b331fdfe.js";
/* empty css                                                    */ import { F as H } from "./File-33a0d259.js";
import { U as Fe } from "./Upload-09ed31cf.js";
import { M as Be } from "./ModifyUpload-33254150.js";
import {
	n as X,
	b as ze
} from "./ModifyUpload.svelte_svelte_type_style_lang-ba6baa96.js";
import { U as Ue } from "./UploadText-45e994b7.js";
import { Q as je } from "./index-3d04307a.js";
import "./Blocks-b77f2878.js";
const Ee = (t) => {
		let l = ["B", "KB", "MB", "GB", "PB"],
			n = 0;
		for (; t > 1024; ) (t /= 1024), n++;
		let e = l[n];
		return t.toFixed(1) + " " + e;
	},
	Y = (t) => {
		var l;
		return (
			(l = t.orig_name || t.name), l.length > 30 ? `${l.substr(0, 30)}...` : l
		);
	},
	Z = (t) => {
		var l = 0;
		if (Array.isArray(t)) for (var n of t) n.size !== void 0 && (l += n.size);
		else l = t.size || 0;
		return Ee(l);
	};
function $(t, l, n) {
	const e = t.slice();
	return (e[4] = l[n]), (e[6] = n), e;
}
function Ne(t) {
	let l;
	return {
		c() {
			l = I("Uploading...");
		},
		m(n, e) {
			U(n, l, e);
		},
		p: C,
		d(n) {
			n && j(l);
		}
	};
}
function Te(t) {
	let l, n, e, a;
	return {
		c() {
			(l = E("a")),
				(n = I("Download")),
				F(l, "href", (e = t[4].data)),
				F(l, "target", "_blank"),
				F(
					l,
					"download",
					(a = window.__is_colab__ ? null : t[4].orig_name || t[4].name)
				),
				F(l, "class", "svelte-xrr240");
		},
		m(s, i) {
			U(s, l, i), z(l, n);
		},
		p(s, i) {
			i & 1 && e !== (e = s[4].data) && F(l, "href", e),
				i & 1 &&
					a !==
						(a = window.__is_colab__ ? null : s[4].orig_name || s[4].name) &&
					F(l, "download", a);
		},
		d(s) {
			s && j(l);
		}
	};
}
function x(t) {
	let l,
		n,
		e = Y(t[4]) + "",
		a,
		s,
		i,
		o = Z(t[4]) + "",
		f,
		d,
		r,
		m,
		u,
		b;
	function B(c, p) {
		return c[4].data ? Te : Ne;
	}
	let k = B(t),
		w = k(t);
	function S() {
		return t[3](t[4], t[6]);
	}
	return {
		c() {
			(l = E("tr")),
				(n = E("td")),
				(a = I(e)),
				(s = T()),
				(i = E("td")),
				(f = I(o)),
				(d = T()),
				(r = E("td")),
				w.c(),
				(m = T()),
				F(n, "class", "svelte-xrr240"),
				F(i, "class", "svelte-xrr240"),
				F(r, "class", "download svelte-xrr240"),
				F(l, "class", "file svelte-xrr240"),
				V(l, "selectable", t[1]);
		},
		m(c, p) {
			U(c, l, p),
				z(l, n),
				z(n, a),
				z(l, s),
				z(l, i),
				z(i, f),
				z(l, d),
				z(l, r),
				w.m(r, null),
				z(l, m),
				u || ((b = oe(l, "click", S)), (u = !0));
		},
		p(c, p) {
			(t = c),
				p & 1 && e !== (e = Y(t[4]) + "") && W(a, e),
				p & 1 && o !== (o = Z(t[4]) + "") && W(f, o),
				k === (k = B(t)) && w
					? w.p(t, p)
					: (w.d(1), (w = k(t)), w && (w.c(), w.m(r, null))),
				p & 2 && V(l, "selectable", t[1]);
		},
		d(c) {
			c && j(l), w.d(), (u = !1), b();
		}
	};
}
function Se(t) {
	let l,
		n,
		e,
		a = Array.isArray(t[0]) ? t[0] : [t[0]],
		s = [];
	for (let i = 0; i < a.length; i += 1) s[i] = x($(t, a, i));
	return {
		c() {
			(l = E("div")), (n = E("table")), (e = E("tbody"));
			for (let i = 0; i < s.length; i += 1) s[i].c();
			F(n, "class", "file-preview svelte-xrr240"),
				F(l, "class", "file-preview-holder svelte-xrr240");
		},
		m(i, o) {
			U(i, l, o), z(l, n), z(n, e);
			for (let f = 0; f < s.length; f += 1) s[f] && s[f].m(e, null);
		},
		p(i, [o]) {
			if (o & 7) {
				a = Array.isArray(i[0]) ? i[0] : [i[0]];
				let f;
				for (f = 0; f < a.length; f += 1) {
					const d = $(i, a, f);
					s[f] ? s[f].p(d, o) : ((s[f] = x(d)), s[f].c(), s[f].m(e, null));
				}
				for (; f < s.length; f += 1) s[f].d(1);
				s.length = a.length;
			}
		},
		i: C,
		o: C,
		d(i) {
			i && j(l), fe(s, i);
		}
	};
}
function Me(t, l, n) {
	const e = G();
	let { value: a } = l,
		{ selectable: s = !1 } = l;
	const i = (o, f) => e("select", { value: o.orig_name || o.name, index: f });
	return (
		(t.$$set = (o) => {
			"value" in o && n(0, (a = o.value)),
				"selectable" in o && n(1, (s = o.selectable));
		}),
		[a, s, e, i]
	);
}
class le extends J {
	constructor(l) {
		super(), P(this, l, Me, Se, q, { value: 0, selectable: 1 });
	}
}
function Oe(t) {
	let l, n;
	return (
		(l = new ye({
			props: {
				size: "large",
				unpadded_box: !0,
				$$slots: { default: [Ie] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			p(e, a) {
				const s = {};
				a & 32 && (s.$$scope = { dirty: a, ctx: e }), l.$set(s);
			},
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function Ce(t) {
	let l, n;
	return (
		(l = new le({ props: { selectable: t[3], value: t[0] } })),
		l.$on("select", t[4]),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			p(e, a) {
				const s = {};
				a & 8 && (s.selectable = e[3]), a & 1 && (s.value = e[0]), l.$set(s);
			},
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function Ie(t) {
	let l, n;
	return (
		(l = new H({})),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function Je(t) {
	let l, n, e, a, s, i;
	l = new ee({
		props: {
			show_label: t[2],
			float: t[0] === null,
			Icon: H,
			label: t[1] || "File"
		}
	});
	const o = [Ce, Oe],
		f = [];
	function d(r, m) {
		return r[0] ? 0 : 1;
	}
	return (
		(e = d(t)),
		(a = f[e] = o[e](t)),
		{
			c() {
				A(l.$$.fragment), (n = T()), a.c(), (s = K());
			},
			m(r, m) {
				v(l, r, m), U(r, n, m), f[e].m(r, m), U(r, s, m), (i = !0);
			},
			p(r, [m]) {
				const u = {};
				m & 4 && (u.show_label = r[2]),
					m & 1 && (u.float = r[0] === null),
					m & 2 && (u.label = r[1] || "File"),
					l.$set(u);
				let b = e;
				(e = d(r)),
					e === b
						? f[e].p(r, m)
						: (L(),
						  g(f[b], 1, 1, () => {
								f[b] = null;
						  }),
						  R(),
						  (a = f[e]),
						  a ? a.p(r, m) : ((a = f[e] = o[e](r)), a.c()),
						  h(a, 1),
						  a.m(s.parentNode, s));
			},
			i(r) {
				i || (h(l.$$.fragment, r), h(a), (i = !0));
			},
			o(r) {
				g(l.$$.fragment, r), g(a), (i = !1);
			},
			d(r) {
				y(l, r), r && j(n), f[e].d(r), r && j(s);
			}
		}
	);
}
function Pe(t, l, n) {
	let { value: e = null } = l,
		{ label: a } = l,
		{ show_label: s = !0 } = l,
		{ selectable: i = !1 } = l;
	function o(f) {
		O.call(this, t, f);
	}
	return (
		(t.$$set = (f) => {
			"value" in f && n(0, (e = f.value)),
				"label" in f && n(1, (a = f.label)),
				"show_label" in f && n(2, (s = f.show_label)),
				"selectable" in f && n(3, (i = f.selectable));
		}),
		[e, a, s, i, o]
	);
}
class qe extends J {
	constructor(l) {
		super(),
			P(this, l, Pe, Je, q, {
				value: 0,
				label: 1,
				show_label: 2,
				selectable: 3
			});
	}
}
function De(t) {
	let l, n, e;
	function a(i) {
		t[12](i);
	}
	let s = {
		filetype: t[6],
		parse_to_data_url: !1,
		file_count: t[3],
		$$slots: { default: [Ke] },
		$$scope: { ctx: t }
	};
	return (
		t[5] !== void 0 && (s.dragging = t[5]),
		(l = new Fe({ props: s })),
		_e.push(() => ce(l, "dragging", a)),
		l.$on("load", t[7]),
		{
			c() {
				A(l.$$.fragment);
			},
			m(i, o) {
				v(l, i, o), (e = !0);
			},
			p(i, o) {
				const f = {};
				o & 64 && (f.filetype = i[6]),
					o & 8 && (f.file_count = i[3]),
					o & 8192 && (f.$$scope = { dirty: o, ctx: i }),
					!n && o & 32 && ((n = !0), (f.dragging = i[5]), me(() => (n = !1))),
					l.$set(f);
			},
			i(i) {
				e || (h(l.$$.fragment, i), (e = !0));
			},
			o(i) {
				g(l.$$.fragment, i), (e = !1);
			},
			d(i) {
				y(l, i);
			}
		}
	);
}
function Ge(t) {
	let l, n, e, a;
	return (
		(l = new Be({ props: { absolute: !0 } })),
		l.$on("clear", t[8]),
		(e = new le({ props: { selectable: t[4], value: t[0] } })),
		e.$on("select", t[11]),
		{
			c() {
				A(l.$$.fragment), (n = T()), A(e.$$.fragment);
			},
			m(s, i) {
				v(l, s, i), U(s, n, i), v(e, s, i), (a = !0);
			},
			p(s, i) {
				const o = {};
				i & 16 && (o.selectable = s[4]), i & 1 && (o.value = s[0]), e.$set(o);
			},
			i(s) {
				a || (h(l.$$.fragment, s), h(e.$$.fragment, s), (a = !0));
			},
			o(s) {
				g(l.$$.fragment, s), g(e.$$.fragment, s), (a = !1);
			},
			d(s) {
				y(l, s), s && j(n), y(e, s);
			}
		}
	);
}
function Ke(t) {
	let l;
	const n = t[10].default,
		e = be(n, t, t[13], null);
	return {
		c() {
			e && e.c();
		},
		m(a, s) {
			e && e.m(a, s), (l = !0);
		},
		p(a, s) {
			e &&
				e.p &&
				(!l || s & 8192) &&
				de(e, n, a, a[13], l ? he(n, a[13], s, null) : ge(a[13]), null);
		},
		i(a) {
			l || (h(e, a), (l = !0));
		},
		o(a) {
			g(e, a), (l = !1);
		},
		d(a) {
			e && e.d(a);
		}
	};
}
function Le(t) {
	let l, n, e, a, s, i;
	l = new ee({
		props: {
			show_label: t[2],
			Icon: H,
			float: t[0] === null,
			label: t[1] || "File"
		}
	});
	const o = [Ge, De],
		f = [];
	function d(r, m) {
		return r[0] ? 0 : 1;
	}
	return (
		(e = d(t)),
		(a = f[e] = o[e](t)),
		{
			c() {
				A(l.$$.fragment), (n = T()), a.c(), (s = K());
			},
			m(r, m) {
				v(l, r, m), U(r, n, m), f[e].m(r, m), U(r, s, m), (i = !0);
			},
			p(r, [m]) {
				const u = {};
				m & 4 && (u.show_label = r[2]),
					m & 1 && (u.float = r[0] === null),
					m & 2 && (u.label = r[1] || "File"),
					l.$set(u);
				let b = e;
				(e = d(r)),
					e === b
						? f[e].p(r, m)
						: (L(),
						  g(f[b], 1, 1, () => {
								f[b] = null;
						  }),
						  R(),
						  (a = f[e]),
						  a ? a.p(r, m) : ((a = f[e] = o[e](r)), a.c()),
						  h(a, 1),
						  a.m(s.parentNode, s));
			},
			i(r) {
				i || (h(l.$$.fragment, r), h(a), (i = !0));
			},
			o(r) {
				g(l.$$.fragment, r), g(a), (i = !1);
			},
			d(r) {
				y(l, r), r && j(n), f[e].d(r), r && j(s);
			}
		}
	);
}
function Re(t, l, n) {
	let { $$slots: e = {}, $$scope: a } = l,
		{ value: s } = l,
		{ label: i } = l,
		{ show_label: o = !0 } = l,
		{ file_count: f = "single" } = l,
		{ file_types: d = null } = l,
		{ selectable: r = !1 } = l;
	async function m({ detail: c }) {
		n(0, (s = c)), await ue(), b("change", s), b("upload", c);
	}
	function u({ detail: c }) {
		n(0, (s = null)), b("change", s), b("clear");
	}
	const b = G();
	let B;
	d == null
		? (B = null)
		: ((d = d.map((c) => (c.startsWith(".") ? c : c + "/*"))),
		  (B = d.join(", ")));
	let k = !1;
	function w(c) {
		O.call(this, t, c);
	}
	function S(c) {
		(k = c), n(5, k);
	}
	return (
		(t.$$set = (c) => {
			"value" in c && n(0, (s = c.value)),
				"label" in c && n(1, (i = c.label)),
				"show_label" in c && n(2, (o = c.show_label)),
				"file_count" in c && n(3, (f = c.file_count)),
				"file_types" in c && n(9, (d = c.file_types)),
				"selectable" in c && n(4, (r = c.selectable)),
				"$$scope" in c && n(13, (a = c.$$scope));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 32 && b("drag", k);
		}),
		[s, i, o, f, r, k, B, m, u, d, e, w, S, a]
	);
}
class He extends J {
	constructor(l) {
		super(),
			P(this, l, Re, Le, q, {
				value: 0,
				label: 1,
				show_label: 2,
				file_count: 3,
				file_types: 9,
				selectable: 4
			});
	}
}
function Qe(t) {
	let l, n;
	return (
		(l = new qe({
			props: { selectable: t[9], value: t[11], label: t[5], show_label: t[6] }
		})),
		l.$on("select", t[21]),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			p(e, a) {
				const s = {};
				a & 512 && (s.selectable = e[9]),
					a & 2048 && (s.value = e[11]),
					a & 32 && (s.label = e[5]),
					a & 64 && (s.show_label = e[6]),
					l.$set(s);
			},
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function Ve(t) {
	let l, n;
	return (
		(l = new He({
			props: {
				label: t[5],
				show_label: t[6],
				value: t[11],
				file_count: t[7],
				file_types: t[8],
				selectable: t[9],
				$$slots: { default: [We] },
				$$scope: { ctx: t }
			}
		})),
		l.$on("change", t[17]),
		l.$on("drag", t[18]),
		l.$on("clear", t[19]),
		l.$on("select", t[20]),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			p(e, a) {
				const s = {};
				a & 32 && (s.label = e[5]),
					a & 64 && (s.show_label = e[6]),
					a & 2048 && (s.value = e[11]),
					a & 128 && (s.file_count = e[7]),
					a & 256 && (s.file_types = e[8]),
					a & 512 && (s.selectable = e[9]),
					a & 8388608 && (s.$$scope = { dirty: a, ctx: e }),
					l.$set(s);
			},
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function We(t) {
	let l, n;
	return (
		(l = new Ue({ props: { type: "file" } })),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			p: C,
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function Xe(t) {
	let l, n, e, a, s, i;
	const o = [
		t[10],
		{ status: t[13] ? "generating" : t[10]?.status || "complete" }
	];
	let f = {};
	for (let u = 0; u < o.length; u += 1) f = ke(f, o[u]);
	l = new we({ props: f });
	const d = [Ve, Qe],
		r = [];
	function m(u, b) {
		return u[4] === "dynamic" ? 0 : 1;
	}
	return (
		(e = m(t)),
		(a = r[e] = d[e](t)),
		{
			c() {
				A(l.$$.fragment), (n = T()), a.c(), (s = K());
			},
			m(u, b) {
				v(l, u, b), U(u, n, b), r[e].m(u, b), U(u, s, b), (i = !0);
			},
			p(u, b) {
				const B =
					b & 9216
						? pe(o, [
								b & 1024 && Ae(u[10]),
								{ status: u[13] ? "generating" : u[10]?.status || "complete" }
						  ])
						: {};
				l.$set(B);
				let k = e;
				(e = m(u)),
					e === k
						? r[e].p(u, b)
						: (L(),
						  g(r[k], 1, 1, () => {
								r[k] = null;
						  }),
						  R(),
						  (a = r[e]),
						  a ? a.p(u, b) : ((a = r[e] = d[e](u)), a.c()),
						  h(a, 1),
						  a.m(s.parentNode, s));
			},
			i(u) {
				i || (h(l.$$.fragment, u), h(a), (i = !0));
			},
			o(u) {
				g(l.$$.fragment, u), g(a), (i = !1);
			},
			d(u) {
				y(l, u), u && j(n), r[e].d(u), u && j(s);
			}
		}
	);
}
function Ye(t) {
	let l, n;
	return (
		(l = new ve({
			props: {
				visible: t[3],
				variant: t[4] === "dynamic" && t[0] === null ? "dashed" : "solid",
				border_mode: t[12] ? "focus" : "base",
				padding: !1,
				elem_id: t[1],
				elem_classes: t[2],
				$$slots: { default: [Xe] },
				$$scope: { ctx: t }
			}
		})),
		{
			c() {
				A(l.$$.fragment);
			},
			m(e, a) {
				v(l, e, a), (n = !0);
			},
			p(e, [a]) {
				const s = {};
				a & 8 && (s.visible = e[3]),
					a & 17 &&
						(s.variant =
							e[4] === "dynamic" && e[0] === null ? "dashed" : "solid"),
					a & 4096 && (s.border_mode = e[12] ? "focus" : "base"),
					a & 2 && (s.elem_id = e[1]),
					a & 4 && (s.elem_classes = e[2]),
					a & 8404977 && (s.$$scope = { dirty: a, ctx: e }),
					l.$set(s);
			},
			i(e) {
				n || (h(l.$$.fragment, e), (n = !0));
			},
			o(e) {
				g(l.$$.fragment, e), (n = !1);
			},
			d(e) {
				y(l, e);
			}
		}
	);
}
function Ze(t, l, n) {
	let e,
		{ elem_id: a = "" } = l,
		{ elem_classes: s = [] } = l,
		{ visible: i = !0 } = l,
		{ value: o } = l,
		f,
		{ mode: d } = l,
		{ root: r } = l,
		{ label: m } = l,
		{ show_label: u } = l,
		{ file_count: b } = l,
		{ file_types: B = ["file"] } = l,
		{ root_url: k } = l,
		{ selectable: w = !1 } = l,
		{ loading_status: S } = l,
		c = !1,
		p = !1;
	const D = G(),
		te = ({ detail: _ }) => n(0, (o = _)),
		ne = ({ detail: _ }) => n(12, (c = _));
	function ae(_) {
		O.call(this, t, _);
	}
	function se(_) {
		O.call(this, t, _);
	}
	function ie(_) {
		O.call(this, t, _);
	}
	return (
		(t.$$set = (_) => {
			"elem_id" in _ && n(1, (a = _.elem_id)),
				"elem_classes" in _ && n(2, (s = _.elem_classes)),
				"visible" in _ && n(3, (i = _.visible)),
				"value" in _ && n(0, (o = _.value)),
				"mode" in _ && n(4, (d = _.mode)),
				"root" in _ && n(14, (r = _.root)),
				"label" in _ && n(5, (m = _.label)),
				"show_label" in _ && n(6, (u = _.show_label)),
				"file_count" in _ && n(7, (b = _.file_count)),
				"file_types" in _ && n(8, (B = _.file_types)),
				"root_url" in _ && n(15, (k = _.root_url)),
				"selectable" in _ && n(9, (w = _.selectable)),
				"loading_status" in _ && n(10, (S = _.loading_status));
		}),
		(t.$$.update = () => {
			if (
				(t.$$.dirty & 49153 && n(11, (e = X(o, r, k))),
				t.$$.dirty & 116753 && JSON.stringify(e) !== JSON.stringify(f))
			) {
				if ((n(16, (f = e)), e === null)) D("change"), n(13, (p = !1));
				else if (!(Array.isArray(e) ? e : [e]).every((_) => _.blob))
					n(13, (p = !1));
				else if (d === "dynamic") {
					let _ = (Array.isArray(e) ? e : [e]).map((M) => M.blob),
						re = e;
					n(13, (p = !0)),
						je(r, _).then((M) => {
							re === e &&
								(n(13, (p = !1)),
								M.error
									? (Array.isArray(e) ? e : [e]).forEach(async (N, Q) => {
											N.data = await ze(N.blob);
									  })
									: ((Array.isArray(e) ? e : [e]).forEach((N, Q) => {
											M.files &&
												((N.orig_name = N.name),
												(N.name = M.files[Q]),
												(N.is_file = !0));
									  }),
									  n(11, (e = X(o, r, k)))),
								D("change"),
								D("upload"));
						});
				}
			}
		}),
		[o, a, s, i, d, m, u, b, B, w, S, e, c, p, r, k, f, te, ne, ae, se, ie]
	);
}
class $e extends J {
	constructor(l) {
		super(),
			P(this, l, Ze, Ye, q, {
				elem_id: 1,
				elem_classes: 2,
				visible: 3,
				value: 0,
				mode: 4,
				root: 14,
				label: 5,
				show_label: 6,
				file_count: 7,
				file_types: 8,
				root_url: 15,
				selectable: 9,
				loading_status: 10
			});
	}
}
const _l = $e,
	cl = ["static", "dynamic"],
	ml = (t) => ({
		type: {
			input_payload: "{ name: string; data: string }",
			response_object:
				"{ orig_name: string; name: string, size: number, data: string, is_file: boolean}"
		},
		description: {
			input_payload: "object with file name and base64 data",
			response_object:
				"object that includes path to file. The URL: {ROOT}file={name} contains the data"
		},
		example_data: {
			name: "zip.zip",
			data: "data:@file/octet-stream;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA=="
		}
	});
export { _l as Component, ml as document, cl as modes };
//# sourceMappingURL=index-e0a12e7c.js.map
