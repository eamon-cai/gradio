import {
	S as o,
	i as d,
	s as u,
	G as _,
	I as g,
	C as r,
	M as i,
	g as v,
	E as y,
	K as m,
	F as c,
	q as b
} from "../lite.js";
function M(a) {
	let e, s;
	return {
		c() {
			(e = _("div")),
				(s = g(a[0])),
				r(e, "class", "svelte-1ayixqk"),
				i(e, "table", a[1] === "table"),
				i(e, "gallery", a[1] === "gallery"),
				i(e, "selected", a[2]);
		},
		m(t, l) {
			v(t, e, l), y(e, s);
		},
		p(t, [l]) {
			l & 1 && m(s, t[0]),
				l & 2 && i(e, "table", t[1] === "table"),
				l & 2 && i(e, "gallery", t[1] === "gallery"),
				l & 4 && i(e, "selected", t[2]);
		},
		i: c,
		o: c,
		d(t) {
			t && b(e);
		}
	};
}
function q(a, e, s) {
	let { value: t } = e,
		{ type: l } = e,
		{ selected: f = !1 } = e;
	return (
		(a.$$set = (n) => {
			"value" in n && s(0, (t = n.value)),
				"type" in n && s(1, (l = n.type)),
				"selected" in n && s(2, (f = n.selected));
		}),
		[t, l, f]
	);
}
class D extends o {
	constructor(e) {
		super(), d(this, e, q, M, u, { value: 0, type: 1, selected: 2 });
	}
}
const h = D;
export { h as E };
//# sourceMappingURL=Model3D-909227f7.js.map
