import {
	S as h,
	i as c,
	s as d,
	B as o,
	C as t,
	g as f,
	E as i,
	F as r,
	q as u
} from "../lite.js";
function g(l) {
	let e, s, a;
	return {
		c() {
			(e = o("svg")),
				(s = o("path")),
				(a = o("polyline")),
				t(s, "d", "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"),
				t(a, "points", "13 2 13 9 20 9"),
				t(e, "xmlns", "http://www.w3.org/2000/svg"),
				t(e, "width", "100%"),
				t(e, "height", "100%"),
				t(e, "viewBox", "0 0 24 24"),
				t(e, "fill", "none"),
				t(e, "stroke", "currentColor"),
				t(e, "stroke-width", "1.5"),
				t(e, "stroke-linecap", "round"),
				t(e, "stroke-linejoin", "round"),
				t(e, "class", "feather feather-file");
		},
		m(n, p) {
			f(n, e, p), i(e, s), i(e, a);
		},
		p: r,
		i: r,
		o: r,
		d(n) {
			n && u(e);
		}
	};
}
class v extends h {
	constructor(e) {
		super(), c(this, e, null, g, d, {});
	}
}
export { v as F };
//# sourceMappingURL=File-33a0d259.js.map
