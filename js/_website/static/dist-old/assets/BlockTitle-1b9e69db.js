import {
	S as d,
	i as h,
	s as g,
	V as k,
	G as w,
	H as $,
	f as I,
	C as q,
	M as _,
	g as m,
	X as B,
	Y as C,
	Z as S,
	p as r,
	l as j,
	t as c,
	o as G,
	q as p,
	e as H,
	m as K,
	n as M,
	I as N,
	K as T
} from "../lite.js";
import { I as V } from "./Info-06b02eda.js";
import "./Button-5b68d65a.js";
function b(f) {
	let e, n;
	return (
		(e = new V({ props: { $$slots: { default: [X] }, $$scope: { ctx: f } } })),
		{
			c() {
				H(e.$$.fragment);
			},
			m(l, o) {
				K(e, l, o), (n = !0);
			},
			p(l, o) {
				const u = {};
				o & 10 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
			},
			i(l) {
				n || (r(e.$$.fragment, l), (n = !0));
			},
			o(l) {
				c(e.$$.fragment, l), (n = !1);
			},
			d(l) {
				M(e, l);
			}
		}
	);
}
function X(f) {
	let e;
	return {
		c() {
			e = N(f[1]);
		},
		m(n, l) {
			m(n, e, l);
		},
		p(n, l) {
			l & 2 && T(e, n[1]);
		},
		d(n) {
			n && p(e);
		}
	};
}
function Y(f) {
	let e, n, l, o;
	const u = f[2].default,
		a = k(u, f, f[3], null);
	let s = f[1] && b(f);
	return {
		c() {
			(e = w("span")),
				a && a.c(),
				(n = $()),
				s && s.c(),
				(l = I()),
				q(e, "class", "svelte-1gfkn6j"),
				_(e, "sr-only", !f[0]),
				_(e, "hide", !f[0]),
				_(e, "has-info", f[1] != null);
		},
		m(t, i) {
			m(t, e, i),
				a && a.m(e, null),
				m(t, n, i),
				s && s.m(t, i),
				m(t, l, i),
				(o = !0);
		},
		p(t, [i]) {
			a &&
				a.p &&
				(!o || i & 8) &&
				B(a, u, t, t[3], o ? S(u, t[3], i, null) : C(t[3]), null),
				(!o || i & 1) && _(e, "sr-only", !t[0]),
				(!o || i & 1) && _(e, "hide", !t[0]),
				(!o || i & 2) && _(e, "has-info", t[1] != null),
				t[1]
					? s
						? (s.p(t, i), i & 2 && r(s, 1))
						: ((s = b(t)), s.c(), r(s, 1), s.m(l.parentNode, l))
					: s &&
					  (j(),
					  c(s, 1, 1, () => {
							s = null;
					  }),
					  G());
		},
		i(t) {
			o || (r(a, t), r(s), (o = !0));
		},
		o(t) {
			c(a, t), c(s), (o = !1);
		},
		d(t) {
			t && p(e), a && a.d(t), t && p(n), s && s.d(t), t && p(l);
		}
	};
}
function Z(f, e, n) {
	let { $$slots: l = {}, $$scope: o } = e,
		{ show_label: u = !0 } = e,
		{ info: a = void 0 } = e;
	return (
		(f.$$set = (s) => {
			"show_label" in s && n(0, (u = s.show_label)),
				"info" in s && n(1, (a = s.info)),
				"$$scope" in s && n(3, (o = s.$$scope));
		}),
		[u, a, l, o]
	);
}
class D extends d {
	constructor(e) {
		super(), h(this, e, Z, Y, g, { show_label: 0, info: 1 });
	}
}
export { D as B };
//# sourceMappingURL=BlockTitle-1b9e69db.js.map
