import {
	S as c,
	i as d,
	s as r,
	V as v,
	G as b,
	C as u,
	af as f,
	M as m,
	g,
	X as h,
	Y as G,
	Z as C,
	p as j,
	t as q,
	q as S
} from "../lite.js";
function M(n) {
	let s, a, t;
	const _ = n[4].default,
		l = v(_, n, n[3], null);
	return {
		c() {
			(s = b("div")),
				l && l.c(),
				u(s, "id", n[0]),
				u(s, "class", (a = f(n[1].join(" ")) + " svelte-1oo81b7")),
				m(s, "hidden", !n[2]);
		},
		m(e, i) {
			g(e, s, i), l && l.m(s, null), (t = !0);
		},
		p(e, [i]) {
			l &&
				l.p &&
				(!t || i & 8) &&
				h(l, _, e, e[3], t ? C(_, e[3], i, null) : G(e[3]), null),
				(!t || i & 1) && u(s, "id", e[0]),
				(!t || (i & 2 && a !== (a = f(e[1].join(" ")) + " svelte-1oo81b7"))) &&
					u(s, "class", a),
				(!t || i & 6) && m(s, "hidden", !e[2]);
		},
		i(e) {
			t || (j(l, e), (t = !0));
		},
		o(e) {
			q(l, e), (t = !1);
		},
		d(e) {
			e && S(s), l && l.d(e);
		}
	};
}
function V(n, s, a) {
	let { $$slots: t = {}, $$scope: _ } = s,
		{ elem_id: l = "" } = s,
		{ elem_classes: e = [] } = s,
		{ visible: i = !0 } = s;
	return (
		(n.$$set = (o) => {
			"elem_id" in o && a(0, (l = o.elem_id)),
				"elem_classes" in o && a(1, (e = o.elem_classes)),
				"visible" in o && a(2, (i = o.visible)),
				"$$scope" in o && a(3, (_ = o.$$scope));
		}),
		[l, e, i, _, t]
	);
}
class X extends c {
	constructor(s) {
		super(), d(this, s, V, M, r, { elem_id: 0, elem_classes: 1, visible: 2 });
	}
}
const Z = X,
	k = ["static"];
export { Z as Component, k as modes };
//# sourceMappingURL=index-48037fe2.js.map
