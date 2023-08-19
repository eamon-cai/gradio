import {
	S as r,
	i as d,
	s as b,
	e as v,
	m as g,
	p as y,
	t as h,
	n as B,
	Q as k,
	I as q,
	g as C,
	K as S,
	q as w,
	y as I
} from "../lite.js";
import { a as K } from "./Button-5b68d65a.js";
import { X as Q } from "./Blocks-b77f2878.js";
function R(n) {
	let t = n[7](n[4]) + "",
		a;
	return {
		c() {
			a = q(t);
		},
		m(e, i) {
			C(e, a, i);
		},
		p(e, i) {
			i & 144 && t !== (t = e[7](e[4]) + "") && S(a, t);
		},
		d(e) {
			e && w(a);
		}
	};
}
function X(n) {
	let t, a;
	return (
		(t = new K({
			props: {
				variant: n[5],
				elem_id: n[1],
				elem_classes: n[2],
				style: n[0],
				visible: n[3],
				disabled: n[6] === "static",
				$$slots: { default: [R] },
				$$scope: { ctx: n }
			}
		})),
		t.$on("click", n[8]),
		{
			c() {
				v(t.$$.fragment);
			},
			m(e, i) {
				g(t, e, i), (a = !0);
			},
			p(e, [i]) {
				const l = {};
				i & 32 && (l.variant = e[5]),
					i & 2 && (l.elem_id = e[1]),
					i & 4 && (l.elem_classes = e[2]),
					i & 1 && (l.style = e[0]),
					i & 8 && (l.visible = e[3]),
					i & 64 && (l.disabled = e[6] === "static"),
					i & 656 && (l.$$scope = { dirty: i, ctx: e }),
					t.$set(l);
			},
			i(e) {
				a || (y(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				h(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				B(t, e);
			}
		}
	);
}
function j(n, t, a) {
	let e;
	k(n, Q, (s) => a(7, (e = s)));
	let { style: i = {} } = t,
		{ elem_id: l = "" } = t,
		{ elem_classes: m = [] } = t,
		{ visible: o = !0 } = t,
		{ value: u } = t,
		{ variant: c = "secondary" } = t,
		{ mode: _ = "dynamic" } = t;
	function f(s) {
		I.call(this, n, s);
	}
	return (
		(n.$$set = (s) => {
			"style" in s && a(0, (i = s.style)),
				"elem_id" in s && a(1, (l = s.elem_id)),
				"elem_classes" in s && a(2, (m = s.elem_classes)),
				"visible" in s && a(3, (o = s.visible)),
				"value" in s && a(4, (u = s.value)),
				"variant" in s && a(5, (c = s.variant)),
				"mode" in s && a(6, (_ = s.mode));
		}),
		[i, l, m, o, u, c, _, e, f]
	);
}
class z extends r {
	constructor(t) {
		super(),
			d(this, t, j, X, b, {
				style: 0,
				elem_id: 1,
				elem_classes: 2,
				visible: 3,
				value: 4,
				variant: 5,
				mode: 6
			});
	}
}
const F = z,
	G = ["static", "dynamic"],
	H = (n) => ({
		type: { payload: "string" },
		description: { payload: "button label" },
		example_data: n.value || "Run"
	});
export { F as Component, H as document, G as modes };
//# sourceMappingURL=index-5351f981.js.map
