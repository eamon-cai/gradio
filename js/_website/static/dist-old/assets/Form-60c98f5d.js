import {
	S as r,
	i as _,
	s as f,
	V as u,
	G as c,
	C as m,
	M as o,
	g as d,
	X as v,
	Y as g,
	Z as b,
	p,
	t as h,
	q as F
} from "../lite.js";
function q(i) {
	let t, l;
	const n = i[2].default,
		s = u(n, i, i[1], null);
	return {
		c() {
			(t = c("div")),
				s && s.c(),
				m(t, "class", "form svelte-b6y5bg"),
				o(t, "hidden", !i[0]);
		},
		m(e, a) {
			d(e, t, a), s && s.m(t, null), (l = !0);
		},
		p(e, [a]) {
			s &&
				s.p &&
				(!l || a & 2) &&
				v(s, n, e, e[1], l ? b(n, e[1], a, null) : g(e[1]), null),
				(!l || a & 1) && o(t, "hidden", !e[0]);
		},
		i(e) {
			l || (p(s, e), (l = !0));
		},
		o(e) {
			h(s, e), (l = !1);
		},
		d(e) {
			e && F(t), s && s.d(e);
		}
	};
}
function y(i, t, l) {
	let { $$slots: n = {}, $$scope: s } = t,
		{ visible: e = !0 } = t;
	return (
		(i.$$set = (a) => {
			"visible" in a && l(0, (e = a.visible)),
				"$$scope" in a && l(1, (s = a.$$scope));
		}),
		[e, s, n]
	);
}
class S extends r {
	constructor(t) {
		super(), _(this, t, y, q, f, { visible: 0 });
	}
}
export { S as F };
//# sourceMappingURL=Form-60c98f5d.js.map
