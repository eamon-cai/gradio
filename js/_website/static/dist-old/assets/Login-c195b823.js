import {
	S as B,
	i as E,
	s as G,
	G as C,
	e as $,
	C as y,
	M as L,
	g as p,
	m as v,
	p as w,
	t as x,
	q as c,
	n as k,
	H as g,
	I as z,
	E as K,
	K as M,
	b as S,
	a as h,
	k as N
} from "../lite.js";
import { F as O } from "./Form-60c98f5d.js";
import { T } from "./Textbox-41d74eda.js";
import { a as P } from "./Button-5b68d65a.js";
import { C as j } from "./Column-4ca2f558.js";
/* empty css                                                  */ /* empty css                                                    */ import "./BlockTitle-1b9e69db.js";
import "./Info-06b02eda.js";
import "./Copy-d120a3d6.js";
/* empty css                                             */ function q(i) {
	let t, s;
	return {
		c() {
			(t = C("p")), (s = z(i[0])), y(t, "class", "auth svelte-1ogxbi0");
		},
		m(l, o) {
			p(l, t, o), K(t, s);
		},
		p(l, o) {
			o & 1 && M(s, l[0]);
		},
		d(l) {
			l && c(t);
		}
	};
}
function D(i) {
	let t;
	return {
		c() {
			(t = C("p")),
				(t.textContent = `If you are visiting a HuggingFace Space in Incognito mode, you must
				enable third party cookies.`),
				y(t, "class", "auth svelte-1ogxbi0");
		},
		m(s, l) {
			p(s, t, l);
		},
		d(s) {
			s && c(t);
		}
	};
}
function H(i) {
	let t;
	return {
		c() {
			(t = C("p")),
				(t.textContent = "Incorrect Credentials"),
				y(t, "class", "creds svelte-1ogxbi0");
		},
		m(s, l) {
			p(s, t, l);
		},
		d(s) {
			s && c(t);
		}
	};
}
function A(i) {
	let t, s, l, o, r, m;
	function b(n) {
		i[8](n);
	}
	let _ = {
		label: "username",
		lines: 1,
		show_label: !0,
		max_lines: 1,
		mode: "dynamic"
	};
	i[3] !== void 0 && (_.value = i[3]),
		(t = new T({ props: _ })),
		S.push(() => h(t, "value", b)),
		t.$on("submit", i[6]);
	function d(n) {
		i[9](n);
	}
	let u = {
		label: "password",
		lines: 1,
		show_label: !0,
		max_lines: 1,
		mode: "dynamic",
		type: "password"
	};
	return (
		i[4] !== void 0 && (u.value = i[4]),
		(o = new T({ props: u })),
		S.push(() => h(o, "value", d)),
		o.$on("submit", i[6]),
		{
			c() {
				$(t.$$.fragment), (l = g()), $(o.$$.fragment);
			},
			m(n, f) {
				v(t, n, f), p(n, l, f), v(o, n, f), (m = !0);
			},
			p(n, f) {
				const e = {};
				!s && f & 8 && ((s = !0), (e.value = n[3]), N(() => (s = !1))),
					t.$set(e);
				const a = {};
				!r && f & 16 && ((r = !0), (a.value = n[4]), N(() => (r = !1))),
					o.$set(a);
			},
			i(n) {
				m || (w(t.$$.fragment, n), w(o.$$.fragment, n), (m = !0));
			},
			o(n) {
				x(t.$$.fragment, n), x(o.$$.fragment, n), (m = !1);
			},
			d(n) {
				k(t, n), n && c(l), k(o, n);
			}
		}
	);
}
function J(i) {
	let t;
	return {
		c() {
			t = z("Login");
		},
		m(s, l) {
			p(s, t, l);
		},
		d(s) {
			s && c(t);
		}
	};
}
function Q(i) {
	let t,
		s,
		l,
		o,
		r,
		m,
		b,
		_,
		d,
		u = i[0] && q(i),
		n = i[2] && D(),
		f = i[5] && H();
	return (
		(m = new O({ props: { $$slots: { default: [A] }, $$scope: { ctx: i } } })),
		(_ = new P({
			props: {
				size: "lg",
				variant: "primary",
				style: { full_width: !0 },
				$$slots: { default: [J] },
				$$scope: { ctx: i }
			}
		})),
		_.$on("click", i[6]),
		{
			c() {
				(t = C("h2")),
					(t.textContent = "Login"),
					(s = g()),
					u && u.c(),
					(l = g()),
					n && n.c(),
					(o = g()),
					f && f.c(),
					(r = g()),
					$(m.$$.fragment),
					(b = g()),
					$(_.$$.fragment),
					y(t, "class", "svelte-1ogxbi0");
			},
			m(e, a) {
				p(e, t, a),
					p(e, s, a),
					u && u.m(e, a),
					p(e, l, a),
					n && n.m(e, a),
					p(e, o, a),
					f && f.m(e, a),
					p(e, r, a),
					v(m, e, a),
					p(e, b, a),
					v(_, e, a),
					(d = !0);
			},
			p(e, a) {
				e[0]
					? u
						? u.p(e, a)
						: ((u = q(e)), u.c(), u.m(l.parentNode, l))
					: u && (u.d(1), (u = null)),
					e[2]
						? n || ((n = D()), n.c(), n.m(o.parentNode, o))
						: n && (n.d(1), (n = null)),
					e[5]
						? f || ((f = H()), f.c(), f.m(r.parentNode, r))
						: f && (f.d(1), (f = null));
				const F = {};
				a & 1048 && (F.$$scope = { dirty: a, ctx: e }), m.$set(F);
				const I = {};
				a & 1024 && (I.$$scope = { dirty: a, ctx: e }), _.$set(I);
			},
			i(e) {
				d || (w(m.$$.fragment, e), w(_.$$.fragment, e), (d = !0));
			},
			o(e) {
				x(m.$$.fragment, e), x(_.$$.fragment, e), (d = !1);
			},
			d(e) {
				e && c(t),
					e && c(s),
					u && u.d(e),
					e && c(l),
					n && n.d(e),
					e && c(o),
					f && f.d(e),
					e && c(r),
					k(m, e),
					e && c(b),
					k(_, e);
			}
		}
	);
}
function R(i) {
	let t, s, l;
	return (
		(s = new j({
			props: {
				variant: "panel",
				min_width: 480,
				$$slots: { default: [Q] },
				$$scope: { ctx: i }
			}
		})),
		{
			c() {
				(t = C("div")),
					$(s.$$.fragment),
					y(t, "class", "wrap svelte-1ogxbi0"),
					L(t, "min-h-screen", i[1]);
			},
			m(o, r) {
				p(o, t, r), v(s, t, null), (l = !0);
			},
			p(o, [r]) {
				const m = {};
				r & 1085 && (m.$$scope = { dirty: r, ctx: o }),
					s.$set(m),
					(!l || r & 2) && L(t, "min-h-screen", o[1]);
			},
			i(o) {
				l || (w(s.$$.fragment, o), (l = !0));
			},
			o(o) {
				x(s.$$.fragment, o), (l = !1);
			},
			d(o) {
				o && c(t), k(s);
			}
		}
	);
}
function U(i, t, s) {
	let { root: l } = t,
		{ auth_message: o } = t,
		{ app_mode: r } = t,
		{ is_space: m } = t,
		b = "",
		_ = "",
		d = !1;
	const u = async () => {
		const e = new FormData();
		e.append("username", b), e.append("password", _);
		let a = await fetch(l + "/login", { method: "POST", body: e });
		a.status === 400
			? (s(5, (d = !0)), s(3, (b = "")), s(4, (_ = "")))
			: a.status == 200 && location.reload();
	};
	function n(e) {
		(b = e), s(3, b);
	}
	function f(e) {
		(_ = e), s(4, _);
	}
	return (
		(i.$$set = (e) => {
			"root" in e && s(7, (l = e.root)),
				"auth_message" in e && s(0, (o = e.auth_message)),
				"app_mode" in e && s(1, (r = e.app_mode)),
				"is_space" in e && s(2, (m = e.is_space));
		}),
		[o, r, m, b, _, d, u, l, n, f]
	);
}
class ie extends B {
	constructor(t) {
		super(),
			E(this, t, U, R, G, {
				root: 7,
				auth_message: 0,
				app_mode: 1,
				is_space: 2
			});
	}
}
export { ie as default };
//# sourceMappingURL=Login-c195b823.js.map
