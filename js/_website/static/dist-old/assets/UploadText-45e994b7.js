import {
	S as h,
	i as k,
	s as q,
	G as w,
	I as _,
	H as y,
	C as U,
	g as C,
	E as l,
	K as v,
	F as b,
	q as S,
	Q as T
} from "../lite.js";
import { X as E } from "./Blocks-b77f2878.js";
function F(t) {
	let e,
		o = t[1](t[2][t[0]]) + "",
		n,
		r,
		s,
		i,
		c = t[1]("or") + "",
		d,
		m,
		g,
		f = t[1]("interface.click_to_upload") + "",
		u;
	return {
		c() {
			(e = w("div")),
				(n = _(o)),
				(r = y()),
				(s = w("span")),
				(i = _("- ")),
				(d = _(c)),
				(m = _(" -")),
				(g = y()),
				(u = _(f)),
				U(s, "class", "or svelte-xwlu1w"),
				U(e, "class", "wrap svelte-xwlu1w");
		},
		m(a, p) {
			C(a, e, p),
				l(e, n),
				l(e, r),
				l(e, s),
				l(s, i),
				l(s, d),
				l(s, m),
				l(e, g),
				l(e, u);
		},
		p(a, [p]) {
			p & 3 && o !== (o = a[1](a[2][a[0]]) + "") && v(n, o),
				p & 2 && c !== (c = a[1]("or") + "") && v(d, c),
				p & 2 && f !== (f = a[1]("interface.click_to_upload") + "") && v(u, f);
		},
		i: b,
		o: b,
		d(a) {
			a && S(e);
		}
	};
}
function G(t, e, o) {
	let n;
	T(t, E, (i) => o(1, (n = i)));
	let { type: r = "file" } = e;
	const s = {
		image: "interface.drop_image",
		video: "interface.drop_video",
		audio: "interface.drop_audio",
		file: "interface.drop_file",
		csv: "interface.drop_csv"
	};
	return (
		(t.$$set = (i) => {
			"type" in i && o(0, (r = i.type));
		}),
		[r, n, s]
	);
}
class K extends h {
	constructor(e) {
		super(), k(this, e, G, F, q, { type: 0 });
	}
}
export { K as U };
//# sourceMappingURL=UploadText-45e994b7.js.map
