import {
	S as Y,
	i as Z,
	s as ee,
	G as k,
	I as X,
	C as I,
	M as g,
	g as j,
	E as U,
	K as le,
	F as $,
	q as B,
	N as Ue,
	f as mt,
	u as ec,
	b as tc,
	L as mo,
	J as _e,
	a1 as vo,
	a0 as cr,
	H as Re,
	D as bo,
	B as ho,
	l as Ve,
	t as ae,
	o as ze,
	p as Q,
	r as rc,
	c as Zt,
	e as er,
	m as tr,
	n as rr
} from "../lite.js";
import { g as ac, a as nc } from "./_commonjsHelpers-042e6b4d.js";
import { E as lc } from "./Image-aef6d5f0.js";
import { c as oc } from "./csv-b0b7514a.js";
import { d as ic } from "./dsv-576afacd.js";
import { E as uc } from "./Model3D-909227f7.js";
function sc(e, t) {
	for (var r = 0; r < t.length; r++) {
		const a = t[r];
		if (typeof a != "string" && !Array.isArray(a)) {
			for (const n in a)
				if (n !== "default" && !(n in e)) {
					const o = Object.getOwnPropertyDescriptor(a, n);
					o &&
						Object.defineProperty(
							e,
							n,
							o.get ? o : { enumerable: !0, get: () => a[n] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
	);
}
var cc = ic("	"),
	dc = cc.parseRows,
	Ll = {};
function Ce() {
	return (
		(Ce =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var a in r)
						Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
				}
				return e;
			}),
		Ce.apply(this, arguments)
	);
}
function bl(e, t) {
	if (e == null) return {};
	var r = {},
		a = Object.keys(e),
		n,
		o;
	for (o = 0; o < a.length; o++)
		(n = a[o]), !(t.indexOf(n) >= 0) && (r[n] = e[n]);
	return r;
}
var we = {},
	ar = {},
	fc = {
		get exports() {
			return ar;
		},
		set exports(e) {
			ar = e;
		}
	};
(function (e) {
	const r =
			(o = 0) =>
			(l) =>
				`\x1B[${38 + o};5;${l}m`,
		a =
			(o = 0) =>
			(l, i, u) =>
				`\x1B[${38 + o};2;${l};${i};${u}m`;
	function n() {
		const o = new Map(),
			l = {
				modifier: {
					reset: [0, 0],
					bold: [1, 22],
					dim: [2, 22],
					italic: [3, 23],
					underline: [4, 24],
					overline: [53, 55],
					inverse: [7, 27],
					hidden: [8, 28],
					strikethrough: [9, 29]
				},
				color: {
					black: [30, 39],
					red: [31, 39],
					green: [32, 39],
					yellow: [33, 39],
					blue: [34, 39],
					magenta: [35, 39],
					cyan: [36, 39],
					white: [37, 39],
					blackBright: [90, 39],
					redBright: [91, 39],
					greenBright: [92, 39],
					yellowBright: [93, 39],
					blueBright: [94, 39],
					magentaBright: [95, 39],
					cyanBright: [96, 39],
					whiteBright: [97, 39]
				},
				bgColor: {
					bgBlack: [40, 49],
					bgRed: [41, 49],
					bgGreen: [42, 49],
					bgYellow: [43, 49],
					bgBlue: [44, 49],
					bgMagenta: [45, 49],
					bgCyan: [46, 49],
					bgWhite: [47, 49],
					bgBlackBright: [100, 49],
					bgRedBright: [101, 49],
					bgGreenBright: [102, 49],
					bgYellowBright: [103, 49],
					bgBlueBright: [104, 49],
					bgMagentaBright: [105, 49],
					bgCyanBright: [106, 49],
					bgWhiteBright: [107, 49]
				}
			};
		(l.color.gray = l.color.blackBright),
			(l.bgColor.bgGray = l.bgColor.bgBlackBright),
			(l.color.grey = l.color.blackBright),
			(l.bgColor.bgGrey = l.bgColor.bgBlackBright);
		for (const [i, u] of Object.entries(l)) {
			for (const [s, p] of Object.entries(u))
				(l[s] = { open: `\x1B[${p[0]}m`, close: `\x1B[${p[1]}m` }),
					(u[s] = l[s]),
					o.set(p[0], p[1]);
			Object.defineProperty(l, i, { value: u, enumerable: !1 });
		}
		return (
			Object.defineProperty(l, "codes", { value: o, enumerable: !1 }),
			(l.color.close = "\x1B[39m"),
			(l.bgColor.close = "\x1B[49m"),
			(l.color.ansi256 = r()),
			(l.color.ansi16m = a()),
			(l.bgColor.ansi256 = r(10)),
			(l.bgColor.ansi16m = a(10)),
			Object.defineProperties(l, {
				rgbToAnsi256: {
					value: (i, u, s) =>
						i === u && u === s
							? i < 8
								? 16
								: i > 248
								? 231
								: Math.round(((i - 8) / 247) * 24) + 232
							: 16 +
							  36 * Math.round((i / 255) * 5) +
							  6 * Math.round((u / 255) * 5) +
							  Math.round((s / 255) * 5),
					enumerable: !1
				},
				hexToRgb: {
					value: (i) => {
						const u = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
							i.toString(16)
						);
						if (!u) return [0, 0, 0];
						let { colorString: s } = u.groups;
						s.length === 3 &&
							(s = s
								.split("")
								.map((d) => d + d)
								.join(""));
						const p = Number.parseInt(s, 16);
						return [(p >> 16) & 255, (p >> 8) & 255, p & 255];
					},
					enumerable: !1
				},
				hexToAnsi256: {
					value: (i) => l.rgbToAnsi256(...l.hexToRgb(i)),
					enumerable: !1
				}
			}),
			l
		);
	}
	Object.defineProperty(e, "exports", { enumerable: !0, get: n });
})(fc);
var qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.printIteratorEntries = mc;
qe.printIteratorValues = vc;
qe.printListItems = bc;
qe.printObjectProperties = hc;
const pc = (e, t) => {
	const r = Object.keys(e).sort(t);
	return (
		Object.getOwnPropertySymbols &&
			Object.getOwnPropertySymbols(e).forEach((a) => {
				Object.getOwnPropertyDescriptor(e, a).enumerable && r.push(a);
			}),
		r
	);
};
function mc(e, t, r, a, n, o, l = ": ") {
	let i = "",
		u = e.next();
	if (!u.done) {
		i += t.spacingOuter;
		const s = r + t.indent;
		for (; !u.done; ) {
			const p = o(u.value[0], t, s, a, n),
				d = o(u.value[1], t, s, a, n);
			(i += s + p + l + d),
				(u = e.next()),
				u.done ? t.min || (i += ",") : (i += "," + t.spacingInner);
		}
		i += t.spacingOuter + r;
	}
	return i;
}
function vc(e, t, r, a, n, o) {
	let l = "",
		i = e.next();
	if (!i.done) {
		l += t.spacingOuter;
		const u = r + t.indent;
		for (; !i.done; )
			(l += u + o(i.value, t, u, a, n)),
				(i = e.next()),
				i.done ? t.min || (l += ",") : (l += "," + t.spacingInner);
		l += t.spacingOuter + r;
	}
	return l;
}
function bc(e, t, r, a, n, o) {
	let l = "";
	if (e.length) {
		l += t.spacingOuter;
		const i = r + t.indent;
		for (let u = 0; u < e.length; u++)
			(l += i),
				u in e && (l += o(e[u], t, i, a, n)),
				u < e.length - 1 ? (l += "," + t.spacingInner) : t.min || (l += ",");
		l += t.spacingOuter + r;
	}
	return l;
}
function hc(e, t, r, a, n, o) {
	let l = "";
	const i = pc(e, t.compareKeys);
	if (i.length) {
		l += t.spacingOuter;
		const u = r + t.indent;
		for (let s = 0; s < i.length; s++) {
			const p = i[s],
				d = o(p, t, u, a, n),
				m = o(e[p], t, u, a, n);
			(l += u + d + ": " + m),
				s < i.length - 1 ? (l += "," + t.spacingInner) : t.min || (l += ",");
		}
		l += t.spacingOuter + r;
	}
	return l;
}
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.test = Ie.serialize = Ie.default = void 0;
var yo = qe,
	nr = (function () {
		return typeof globalThis < "u"
			? globalThis
			: typeof nr < "u"
			? nr
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: Function("return this")();
	})(),
	rl = nr["jest-symbol-do-not-touch"] || nr.Symbol;
const yc =
		typeof rl == "function" && rl.for
			? rl.for("jest.asymmetricMatcher")
			: 1267621,
	zt = " ",
	Ai = (e, t, r, a, n, o) => {
		const l = e.toString();
		return l === "ArrayContaining" || l === "ArrayNotContaining"
			? ++a > t.maxDepth
				? "[" + l + "]"
				: l + zt + "[" + (0, yo.printListItems)(e.sample, t, r, a, n, o) + "]"
			: l === "ObjectContaining" || l === "ObjectNotContaining"
			? ++a > t.maxDepth
				? "[" + l + "]"
				: l +
				  zt +
				  "{" +
				  (0, yo.printObjectProperties)(e.sample, t, r, a, n, o) +
				  "}"
			: l === "StringMatching" ||
			  l === "StringNotMatching" ||
			  l === "StringContaining" ||
			  l === "StringNotContaining"
			? l + zt + o(e.sample, t, r, a, n)
			: e.toAsymmetricMatcher();
	};
Ie.serialize = Ai;
const Si = (e) => e && e.$$typeof === yc;
Ie.test = Si;
const gc = { serialize: Ai, test: Si };
var _c = gc;
Ie.default = _c;
var je = {},
	Ec = ({ onlyFirst: e = !1 } = {}) => {
		const t = [
			"[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
			"(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
		].join("|");
		return new RegExp(t, e ? void 0 : "g");
	};
Object.defineProperty(je, "__esModule", { value: !0 });
je.test = je.serialize = je.default = void 0;
var xi = Ni(Ec),
	V = Ni(ar);
function Ni(e) {
	return e && e.__esModule ? e : { default: e };
}
const Rc = (e) =>
		e.replace((0, xi.default)(), (t) => {
			switch (t) {
				case V.default.red.close:
				case V.default.green.close:
				case V.default.cyan.close:
				case V.default.gray.close:
				case V.default.white.close:
				case V.default.yellow.close:
				case V.default.bgRed.close:
				case V.default.bgGreen.close:
				case V.default.bgYellow.close:
				case V.default.inverse.close:
				case V.default.dim.close:
				case V.default.bold.close:
				case V.default.reset.open:
				case V.default.reset.close:
					return "</>";
				case V.default.red.open:
					return "<red>";
				case V.default.green.open:
					return "<green>";
				case V.default.cyan.open:
					return "<cyan>";
				case V.default.gray.open:
					return "<gray>";
				case V.default.white.open:
					return "<white>";
				case V.default.yellow.open:
					return "<yellow>";
				case V.default.bgRed.open:
					return "<bgRed>";
				case V.default.bgGreen.open:
					return "<bgGreen>";
				case V.default.bgYellow.open:
					return "<bgYellow>";
				case V.default.inverse.open:
					return "<inverse>";
				case V.default.dim.open:
					return "<dim>";
				case V.default.bold.open:
					return "<bold>";
				default:
					return "";
			}
		}),
	Ii = (e) => typeof e == "string" && !!e.match((0, xi.default)());
je.test = Ii;
const ji = (e, t, r, a, n, o) => o(Rc(e), t, r, a, n);
je.serialize = ji;
const Cc = { serialize: ji, test: Ii };
var Pc = Cc;
je.default = Pc;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.test = Be.serialize = Be.default = void 0;
var go = qe;
const wc = " ",
	Bi = ["DOMStringMap", "NamedNodeMap"],
	qc = /^(HTML\w*Collection|NodeList)$/,
	Tc = (e) => Bi.indexOf(e) !== -1 || qc.test(e),
	Li = (e) =>
		e && e.constructor && !!e.constructor.name && Tc(e.constructor.name);
Be.test = Li;
const Oc = (e) => e.constructor.name === "NamedNodeMap",
	ki = (e, t, r, a, n, o) => {
		const l = e.constructor.name;
		return ++a > t.maxDepth
			? "[" + l + "]"
			: (t.min ? "" : l + wc) +
					(Bi.indexOf(l) !== -1
						? "{" +
						  (0, go.printObjectProperties)(
								Oc(e)
									? Array.from(e).reduce(
											(i, u) => ((i[u.name] = u.value), i),
											{}
									  )
									: { ...e },
								t,
								r,
								a,
								n,
								o
						  ) +
						  "}"
						: "[" + (0, go.printListItems)(Array.from(e), t, r, a, n, o) + "]");
	};
Be.serialize = ki;
const Mc = { serialize: ki, test: Li };
var Ac = Mc;
Be.default = Ac;
var Le = {},
	re = {},
	kl = {};
Object.defineProperty(kl, "__esModule", { value: !0 });
kl.default = Sc;
function Sc(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(re, "__esModule", { value: !0 });
re.printText =
	re.printProps =
	re.printElementAsLeaf =
	re.printElement =
	re.printComment =
	re.printChildren =
		void 0;
var Fi = xc(kl);
function xc(e) {
	return e && e.__esModule ? e : { default: e };
}
const Nc = (e, t, r, a, n, o, l) => {
	const i = a + r.indent,
		u = r.colors;
	return e
		.map((s) => {
			const p = t[s];
			let d = l(p, r, i, n, o);
			return (
				typeof p != "string" &&
					(d.indexOf(`
`) !== -1 && (d = r.spacingOuter + i + d + r.spacingOuter + a),
					(d = "{" + d + "}")),
				r.spacingInner +
					a +
					u.prop.open +
					s +
					u.prop.close +
					"=" +
					u.value.open +
					d +
					u.value.close
			);
		})
		.join("");
};
re.printProps = Nc;
const Ic = (e, t, r, a, n, o) =>
	e
		.map(
			(l) =>
				t.spacingOuter +
				r +
				(typeof l == "string" ? Di(l, t) : o(l, t, r, a, n))
		)
		.join("");
re.printChildren = Ic;
const Di = (e, t) => {
	const r = t.colors.content;
	return r.open + (0, Fi.default)(e) + r.close;
};
re.printText = Di;
const jc = (e, t) => {
	const r = t.colors.comment;
	return r.open + "<!--" + (0, Fi.default)(e) + "-->" + r.close;
};
re.printComment = jc;
const Bc = (e, t, r, a, n) => {
	const o = a.colors.tag;
	return (
		o.open +
		"<" +
		e +
		(t && o.close + t + a.spacingOuter + n + o.open) +
		(r
			? ">" + o.close + r + a.spacingOuter + n + o.open + "</" + e
			: (t && !a.min ? "" : " ") + "/") +
		">" +
		o.close
	);
};
re.printElement = Bc;
const Lc = (e, t) => {
	const r = t.colors.tag;
	return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
};
re.printElementAsLeaf = Lc;
Object.defineProperty(Le, "__esModule", { value: !0 });
Le.test = Le.serialize = Le.default = void 0;
var rt = re;
const kc = 1,
	$i = 3,
	Ui = 8,
	Hi = 11,
	Fc = /^((HTML|SVG)\w*)?Element$/,
	Dc = (e) => {
		try {
			return typeof e.hasAttribute == "function" && e.hasAttribute("is");
		} catch {
			return !1;
		}
	},
	$c = (e) => {
		const t = e.constructor.name,
			{ nodeType: r, tagName: a } = e,
			n = (typeof a == "string" && a.includes("-")) || Dc(e);
		return (
			(r === kc && (Fc.test(t) || n)) ||
			(r === $i && t === "Text") ||
			(r === Ui && t === "Comment") ||
			(r === Hi && t === "DocumentFragment")
		);
	},
	Vi = (e) => {
		var t;
		return (
			(e == null || (t = e.constructor) === null || t === void 0
				? void 0
				: t.name) && $c(e)
		);
	};
Le.test = Vi;
function Uc(e) {
	return e.nodeType === $i;
}
function Hc(e) {
	return e.nodeType === Ui;
}
function al(e) {
	return e.nodeType === Hi;
}
const zi = (e, t, r, a, n, o) => {
	if (Uc(e)) return (0, rt.printText)(e.data, t);
	if (Hc(e)) return (0, rt.printComment)(e.data, t);
	const l = al(e) ? "DocumentFragment" : e.tagName.toLowerCase();
	return ++a > t.maxDepth
		? (0, rt.printElementAsLeaf)(l, t)
		: (0, rt.printElement)(
				l,
				(0, rt.printProps)(
					al(e)
						? []
						: Array.from(e.attributes)
								.map((i) => i.name)
								.sort(),
					al(e)
						? {}
						: Array.from(e.attributes).reduce(
								(i, u) => ((i[u.name] = u.value), i),
								{}
						  ),
					t,
					r + t.indent,
					a,
					n,
					o
				),
				(0, rt.printChildren)(
					Array.prototype.slice.call(e.childNodes || e.children),
					t,
					r + t.indent,
					a,
					n,
					o
				),
				t,
				r
		  );
};
Le.serialize = zi;
const Vc = { serialize: zi, test: Vi };
var zc = Vc;
Le.default = zc;
var ke = {};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.test = ke.serialize = ke.default = void 0;
var gt = qe;
const Wc = "@@__IMMUTABLE_ITERABLE__@@",
	Gc = "@@__IMMUTABLE_LIST__@@",
	Qc = "@@__IMMUTABLE_KEYED__@@",
	Xc = "@@__IMMUTABLE_MAP__@@",
	_o = "@@__IMMUTABLE_ORDERED__@@",
	Kc = "@@__IMMUTABLE_RECORD__@@",
	Jc = "@@__IMMUTABLE_SEQ__@@",
	Yc = "@@__IMMUTABLE_SET__@@",
	Zc = "@@__IMMUTABLE_STACK__@@",
	dt = (e) => "Immutable." + e,
	dr = (e) => "[" + e + "]",
	_t = " ",
	Eo = "…",
	ed = (e, t, r, a, n, o, l) =>
		++a > t.maxDepth
			? dr(dt(l))
			: dt(l) +
			  _t +
			  "{" +
			  (0, gt.printIteratorEntries)(e.entries(), t, r, a, n, o) +
			  "}";
function td(e) {
	let t = 0;
	return {
		next() {
			if (t < e._keys.length) {
				const r = e._keys[t++];
				return { done: !1, value: [r, e.get(r)] };
			}
			return { done: !0, value: void 0 };
		}
	};
}
const rd = (e, t, r, a, n, o) => {
		const l = dt(e._name || "Record");
		return ++a > t.maxDepth
			? dr(l)
			: l + _t + "{" + (0, gt.printIteratorEntries)(td(e), t, r, a, n, o) + "}";
	},
	ad = (e, t, r, a, n, o) => {
		const l = dt("Seq");
		return ++a > t.maxDepth
			? dr(l)
			: e[Qc]
			? l +
			  _t +
			  "{" +
			  (e._iter || e._object
					? (0, gt.printIteratorEntries)(e.entries(), t, r, a, n, o)
					: Eo) +
			  "}"
			: l +
			  _t +
			  "[" +
			  (e._iter || e._array || e._collection || e._iterable
					? (0, gt.printIteratorValues)(e.values(), t, r, a, n, o)
					: Eo) +
			  "]";
	},
	nl = (e, t, r, a, n, o, l) =>
		++a > t.maxDepth
			? dr(dt(l))
			: dt(l) +
			  _t +
			  "[" +
			  (0, gt.printIteratorValues)(e.values(), t, r, a, n, o) +
			  "]",
	Wi = (e, t, r, a, n, o) =>
		e[Xc]
			? ed(e, t, r, a, n, o, e[_o] ? "OrderedMap" : "Map")
			: e[Gc]
			? nl(e, t, r, a, n, o, "List")
			: e[Yc]
			? nl(e, t, r, a, n, o, e[_o] ? "OrderedSet" : "Set")
			: e[Zc]
			? nl(e, t, r, a, n, o, "Stack")
			: e[Jc]
			? ad(e, t, r, a, n, o)
			: rd(e, t, r, a, n, o);
ke.serialize = Wi;
const Gi = (e) => e && (e[Wc] === !0 || e[Kc] === !0);
ke.test = Gi;
const nd = { serialize: Wi, test: Gi };
var ld = nd;
ke.default = ld;
var Fe = {},
	hl = {},
	od = {
		get exports() {
			return hl;
		},
		set exports(e) {
			hl = e;
		}
	},
	H = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = 60103,
	pr = 60106,
	Ct = 60107,
	Pt = 60108,
	wt = 60114,
	qt = 60109,
	Tt = 60110,
	Ot = 60112,
	Mt = 60113,
	Fl = 60120,
	At = 60115,
	St = 60116,
	Qi = 60121,
	Xi = 60122,
	Ki = 60117,
	Ji = 60129,
	Yi = 60131;
if (typeof Symbol == "function" && Symbol.for) {
	var J = Symbol.for;
	(fr = J("react.element")),
		(pr = J("react.portal")),
		(Ct = J("react.fragment")),
		(Pt = J("react.strict_mode")),
		(wt = J("react.profiler")),
		(qt = J("react.provider")),
		(Tt = J("react.context")),
		(Ot = J("react.forward_ref")),
		(Mt = J("react.suspense")),
		(Fl = J("react.suspense_list")),
		(At = J("react.memo")),
		(St = J("react.lazy")),
		(Qi = J("react.block")),
		(Xi = J("react.server.block")),
		(Ki = J("react.fundamental")),
		(Ji = J("react.debug_trace_mode")),
		(Yi = J("react.legacy_hidden"));
}
function Ee(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case fr:
				switch (((e = e.type), e)) {
					case Ct:
					case wt:
					case Pt:
					case Mt:
					case Fl:
						return e;
					default:
						switch (((e = e && e.$$typeof), e)) {
							case Tt:
							case Ot:
							case St:
							case At:
							case qt:
								return e;
							default:
								return t;
						}
				}
			case pr:
				return t;
		}
	}
}
var id = qt,
	ud = fr,
	sd = Ot,
	cd = Ct,
	dd = St,
	fd = At,
	pd = pr,
	md = wt,
	vd = Pt,
	bd = Mt;
H.ContextConsumer = Tt;
H.ContextProvider = id;
H.Element = ud;
H.ForwardRef = sd;
H.Fragment = cd;
H.Lazy = dd;
H.Memo = fd;
H.Portal = pd;
H.Profiler = md;
H.StrictMode = vd;
H.Suspense = bd;
H.isAsyncMode = function () {
	return !1;
};
H.isConcurrentMode = function () {
	return !1;
};
H.isContextConsumer = function (e) {
	return Ee(e) === Tt;
};
H.isContextProvider = function (e) {
	return Ee(e) === qt;
};
H.isElement = function (e) {
	return typeof e == "object" && e !== null && e.$$typeof === fr;
};
H.isForwardRef = function (e) {
	return Ee(e) === Ot;
};
H.isFragment = function (e) {
	return Ee(e) === Ct;
};
H.isLazy = function (e) {
	return Ee(e) === St;
};
H.isMemo = function (e) {
	return Ee(e) === At;
};
H.isPortal = function (e) {
	return Ee(e) === pr;
};
H.isProfiler = function (e) {
	return Ee(e) === wt;
};
H.isStrictMode = function (e) {
	return Ee(e) === Pt;
};
H.isSuspense = function (e) {
	return Ee(e) === Mt;
};
H.isValidElementType = function (e) {
	return (
		typeof e == "string" ||
		typeof e == "function" ||
		e === Ct ||
		e === wt ||
		e === Ji ||
		e === Pt ||
		e === Mt ||
		e === Fl ||
		e === Yi ||
		(typeof e == "object" &&
			e !== null &&
			(e.$$typeof === St ||
				e.$$typeof === At ||
				e.$$typeof === qt ||
				e.$$typeof === Tt ||
				e.$$typeof === Ot ||
				e.$$typeof === Ki ||
				e.$$typeof === Qi ||
				e[0] === Xi))
	);
};
H.typeOf = Ee;
(function (e) {
	e.exports = H;
})(od);
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.test = Fe.serialize = Fe.default = void 0;
var Qe = hd(hl),
	Wt = re;
function Zi(e) {
	if (typeof WeakMap != "function") return null;
	var t = new WeakMap(),
		r = new WeakMap();
	return (Zi = function (a) {
		return a ? r : t;
	})(e);
}
function hd(e, t) {
	if (!t && e && e.__esModule) return e;
	if (e === null || (typeof e != "object" && typeof e != "function"))
		return { default: e };
	var r = Zi(t);
	if (r && r.has(e)) return r.get(e);
	var a = {},
		n = Object.defineProperty && Object.getOwnPropertyDescriptor;
	for (var o in e)
		if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
			l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
		}
	return (a.default = e), r && r.set(e, a), a;
}
const eu = (e, t = []) => (
		Array.isArray(e)
			? e.forEach((r) => {
					eu(r, t);
			  })
			: e != null && e !== !1 && t.push(e),
		t
	),
	Ro = (e) => {
		const t = e.type;
		if (typeof t == "string") return t;
		if (typeof t == "function") return t.displayName || t.name || "Unknown";
		if (Qe.isFragment(e)) return "React.Fragment";
		if (Qe.isSuspense(e)) return "React.Suspense";
		if (typeof t == "object" && t !== null) {
			if (Qe.isContextProvider(e)) return "Context.Provider";
			if (Qe.isContextConsumer(e)) return "Context.Consumer";
			if (Qe.isForwardRef(e)) {
				if (t.displayName) return t.displayName;
				const r = t.render.displayName || t.render.name || "";
				return r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef";
			}
			if (Qe.isMemo(e)) {
				const r = t.displayName || t.type.displayName || t.type.name || "";
				return r !== "" ? "Memo(" + r + ")" : "Memo";
			}
		}
		return "UNDEFINED";
	},
	yd = (e) => {
		const { props: t } = e;
		return Object.keys(t)
			.filter((r) => r !== "children" && t[r] !== void 0)
			.sort();
	},
	tu = (e, t, r, a, n, o) =>
		++a > t.maxDepth
			? (0, Wt.printElementAsLeaf)(Ro(e), t)
			: (0, Wt.printElement)(
					Ro(e),
					(0, Wt.printProps)(yd(e), e.props, t, r + t.indent, a, n, o),
					(0, Wt.printChildren)(eu(e.props.children), t, r + t.indent, a, n, o),
					t,
					r
			  );
Fe.serialize = tu;
const ru = (e) => e != null && Qe.isElement(e);
Fe.test = ru;
const gd = { serialize: tu, test: ru };
var _d = gd;
Fe.default = _d;
var De = {};
Object.defineProperty(De, "__esModule", { value: !0 });
De.test = De.serialize = De.default = void 0;
var Gt = re,
	lr = (function () {
		return typeof globalThis < "u"
			? globalThis
			: typeof lr < "u"
			? lr
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: Function("return this")();
	})(),
	ll = lr["jest-symbol-do-not-touch"] || lr.Symbol;
const Ed =
		typeof ll == "function" && ll.for ? ll.for("react.test.json") : 245830487,
	Rd = (e) => {
		const { props: t } = e;
		return t
			? Object.keys(t)
					.filter((r) => t[r] !== void 0)
					.sort()
			: [];
	},
	au = (e, t, r, a, n, o) =>
		++a > t.maxDepth
			? (0, Gt.printElementAsLeaf)(e.type, t)
			: (0, Gt.printElement)(
					e.type,
					e.props
						? (0, Gt.printProps)(Rd(e), e.props, t, r + t.indent, a, n, o)
						: "",
					e.children
						? (0, Gt.printChildren)(e.children, t, r + t.indent, a, n, o)
						: "",
					t,
					r
			  );
De.serialize = au;
const nu = (e) => e && e.$$typeof === Ed;
De.test = nu;
const Cd = { serialize: au, test: nu };
var Pd = Cd;
De.default = Pd;
Object.defineProperty(we, "__esModule", { value: !0 });
var lu = (we.default = mu = we.DEFAULT_OPTIONS = void 0),
	ou = (we.format = yu),
	Dl = (we.plugins = void 0),
	wd = We(ar),
	yt = qe,
	qd = We(Ie),
	Td = We(je),
	Od = We(Be),
	Md = We(Le),
	Ad = We(ke),
	Sd = We(Fe),
	xd = We(De);
function We(e) {
	return e && e.__esModule ? e : { default: e };
}
const iu = Object.prototype.toString,
	Nd = Date.prototype.toISOString,
	Id = Error.prototype.toString,
	Co = RegExp.prototype.toString,
	ol = (e) =>
		(typeof e.constructor == "function" && e.constructor.name) || "Object",
	jd = (e) => typeof window < "u" && e === window,
	Bd = /^Symbol\((.*)\)(.*)$/,
	Ld = /\n/gi;
class uu extends Error {
	constructor(t, r) {
		super(t), (this.stack = r), (this.name = this.constructor.name);
	}
}
function kd(e) {
	return (
		e === "[object Array]" ||
		e === "[object ArrayBuffer]" ||
		e === "[object DataView]" ||
		e === "[object Float32Array]" ||
		e === "[object Float64Array]" ||
		e === "[object Int8Array]" ||
		e === "[object Int16Array]" ||
		e === "[object Int32Array]" ||
		e === "[object Uint8Array]" ||
		e === "[object Uint8ClampedArray]" ||
		e === "[object Uint16Array]" ||
		e === "[object Uint32Array]"
	);
}
function Fd(e) {
	return Object.is(e, -0) ? "-0" : String(e);
}
function Dd(e) {
	return `${e}n`;
}
function Po(e, t) {
	return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]";
}
function wo(e) {
	return String(e).replace(Bd, "Symbol($1)");
}
function qo(e) {
	return "[" + Id.call(e) + "]";
}
function su(e, t, r, a) {
	if (e === !0 || e === !1) return "" + e;
	if (e === void 0) return "undefined";
	if (e === null) return "null";
	const n = typeof e;
	if (n === "number") return Fd(e);
	if (n === "bigint") return Dd(e);
	if (n === "string")
		return a ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
	if (n === "function") return Po(e, t);
	if (n === "symbol") return wo(e);
	const o = iu.call(e);
	return o === "[object WeakMap]"
		? "WeakMap {}"
		: o === "[object WeakSet]"
		? "WeakSet {}"
		: o === "[object Function]" || o === "[object GeneratorFunction]"
		? Po(e, t)
		: o === "[object Symbol]"
		? wo(e)
		: o === "[object Date]"
		? isNaN(+e)
			? "Date { NaN }"
			: Nd.call(e)
		: o === "[object Error]"
		? qo(e)
		: o === "[object RegExp]"
		? r
			? Co.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
			: Co.call(e)
		: e instanceof Error
		? qo(e)
		: null;
}
function cu(e, t, r, a, n, o) {
	if (n.indexOf(e) !== -1) return "[Circular]";
	(n = n.slice()), n.push(e);
	const l = ++a > t.maxDepth,
		i = t.min;
	if (t.callToJSON && !l && e.toJSON && typeof e.toJSON == "function" && !o)
		return Ne(e.toJSON(), t, r, a, n, !0);
	const u = iu.call(e);
	return u === "[object Arguments]"
		? l
			? "[Arguments]"
			: (i ? "" : "Arguments ") +
			  "[" +
			  (0, yt.printListItems)(e, t, r, a, n, Ne) +
			  "]"
		: kd(u)
		? l
			? "[" + e.constructor.name + "]"
			: (i || (!t.printBasicPrototype && e.constructor.name === "Array")
					? ""
					: e.constructor.name + " ") +
			  "[" +
			  (0, yt.printListItems)(e, t, r, a, n, Ne) +
			  "]"
		: u === "[object Map]"
		? l
			? "[Map]"
			: "Map {" +
			  (0, yt.printIteratorEntries)(e.entries(), t, r, a, n, Ne, " => ") +
			  "}"
		: u === "[object Set]"
		? l
			? "[Set]"
			: "Set {" + (0, yt.printIteratorValues)(e.values(), t, r, a, n, Ne) + "}"
		: l || jd(e)
		? "[" + ol(e) + "]"
		: (i || (!t.printBasicPrototype && ol(e) === "Object") ? "" : ol(e) + " ") +
		  "{" +
		  (0, yt.printObjectProperties)(e, t, r, a, n, Ne) +
		  "}";
}
function $d(e) {
	return e.serialize != null;
}
function du(e, t, r, a, n, o) {
	let l;
	try {
		l = $d(e)
			? e.serialize(t, r, a, n, o, Ne)
			: e.print(
					t,
					(i) => Ne(i, r, a, n, o),
					(i) => {
						const u = a + r.indent;
						return (
							u +
							i.replace(
								Ld,
								`
` + u
							)
						);
					},
					{ edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
					r.colors
			  );
	} catch (i) {
		throw new uu(i.message, i.stack);
	}
	if (typeof l != "string")
		throw new Error(
			`pretty-format: Plugin must return type "string" but instead returned "${typeof l}".`
		);
	return l;
}
function fu(e, t) {
	for (let r = 0; r < e.length; r++)
		try {
			if (e[r].test(t)) return e[r];
		} catch (a) {
			throw new uu(a.message, a.stack);
		}
	return null;
}
function Ne(e, t, r, a, n, o) {
	const l = fu(t.plugins, e);
	if (l !== null) return du(l, e, t, r, a, n);
	const i = su(e, t.printFunctionName, t.escapeRegex, t.escapeString);
	return i !== null ? i : cu(e, t, r, a, n, o);
}
const $l = {
		comment: "gray",
		content: "reset",
		prop: "yellow",
		tag: "cyan",
		value: "green"
	},
	pu = Object.keys($l),
	he = {
		callToJSON: !0,
		compareKeys: void 0,
		escapeRegex: !1,
		escapeString: !0,
		highlight: !1,
		indent: 2,
		maxDepth: 1 / 0,
		min: !1,
		plugins: [],
		printBasicPrototype: !0,
		printFunctionName: !0,
		theme: $l
	};
var mu = (we.DEFAULT_OPTIONS = he);
function Ud(e) {
	if (
		(Object.keys(e).forEach((t) => {
			if (!he.hasOwnProperty(t))
				throw new Error(`pretty-format: Unknown option "${t}".`);
		}),
		e.min && e.indent !== void 0 && e.indent !== 0)
	)
		throw new Error(
			'pretty-format: Options "min" and "indent" cannot be used together.'
		);
	if (e.theme !== void 0) {
		if (e.theme === null)
			throw new Error('pretty-format: Option "theme" must not be null.');
		if (typeof e.theme != "object")
			throw new Error(
				`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
			);
	}
}
const Hd = (e) =>
		pu.reduce((t, r) => {
			const a = e.theme && e.theme[r] !== void 0 ? e.theme[r] : $l[r],
				n = a && wd.default[a];
			if (n && typeof n.close == "string" && typeof n.open == "string")
				t[r] = n;
			else
				throw new Error(
					`pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`
				);
			return t;
		}, Object.create(null)),
	Vd = () =>
		pu.reduce(
			(e, t) => ((e[t] = { close: "", open: "" }), e),
			Object.create(null)
		),
	vu = (e) =>
		e && e.printFunctionName !== void 0
			? e.printFunctionName
			: he.printFunctionName,
	bu = (e) => (e && e.escapeRegex !== void 0 ? e.escapeRegex : he.escapeRegex),
	hu = (e) =>
		e && e.escapeString !== void 0 ? e.escapeString : he.escapeString,
	To = (e) => {
		var t;
		return {
			callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : he.callToJSON,
			colors: e && e.highlight ? Hd(e) : Vd(),
			compareKeys:
				e && typeof e.compareKeys == "function"
					? e.compareKeys
					: he.compareKeys,
			escapeRegex: bu(e),
			escapeString: hu(e),
			indent:
				e && e.min ? "" : zd(e && e.indent !== void 0 ? e.indent : he.indent),
			maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : he.maxDepth,
			min: e && e.min !== void 0 ? e.min : he.min,
			plugins: e && e.plugins !== void 0 ? e.plugins : he.plugins,
			printBasicPrototype:
				(t = e?.printBasicPrototype) !== null && t !== void 0 ? t : !0,
			printFunctionName: vu(e),
			spacingInner:
				e && e.min
					? " "
					: `
`,
			spacingOuter:
				e && e.min
					? ""
					: `
`
		};
	};
function zd(e) {
	return new Array(e + 1).join(" ");
}
function yu(e, t) {
	if (t && (Ud(t), t.plugins)) {
		const a = fu(t.plugins, e);
		if (a !== null) return du(a, e, To(t), "", 0, []);
	}
	const r = su(e, vu(t), bu(t), hu(t));
	return r !== null ? r : cu(e, To(t), "", 0, []);
}
const Wd = {
	AsymmetricMatcher: qd.default,
	ConvertAnsi: Td.default,
	DOMCollection: Od.default,
	DOMElement: Md.default,
	Immutable: Ad.default,
	ReactElement: Sd.default,
	ReactTestComponent: xd.default
};
Dl = we.plugins = Wd;
var Gd = yu;
lu = we.default = Gd;
const Qd = sc(
	{
		__proto__: null,
		get DEFAULT_OPTIONS() {
			return mu;
		},
		get default() {
			return lu;
		},
		format: ou,
		get plugins() {
			return Dl;
		}
	},
	[we]
);
var Xd = Object.prototype.toString;
function Oo(e) {
	return typeof e == "function" || Xd.call(e) === "[object Function]";
}
function Kd(e) {
	var t = Number(e);
	return isNaN(t)
		? 0
		: t === 0 || !isFinite(t)
		? t
		: (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Jd = Math.pow(2, 53) - 1;
function Yd(e) {
	var t = Kd(e);
	return Math.min(Math.max(t, 0), Jd);
}
function ye(e, t) {
	var r = Array,
		a = Object(e);
	if (e == null)
		throw new TypeError(
			"Array.from requires an array-like object - not null or undefined"
		);
	if (typeof t < "u" && !Oo(t))
		throw new TypeError(
			"Array.from: when provided, the second argument must be a function"
		);
	for (
		var n = Yd(a.length), o = Oo(r) ? Object(new r(n)) : new Array(n), l = 0, i;
		l < n;

	)
		(i = a[l]), t ? (o[l] = t(i, l)) : (o[l] = i), (l += 1);
	return (o.length = n), o;
}
function Zd(e, t) {
	if (!(e instanceof t))
		throw new TypeError("Cannot call a class as a function");
}
function Mo(e, t) {
	for (var r = 0; r < t.length; r++) {
		var a = t[r];
		(a.enumerable = a.enumerable || !1),
			(a.configurable = !0),
			"value" in a && (a.writable = !0),
			Object.defineProperty(e, a.key, a);
	}
}
function ef(e, t, r) {
	return (
		t && Mo(e.prototype, t),
		r && Mo(e, r),
		Object.defineProperty(e, "prototype", { writable: !1 }),
		e
	);
}
function tf(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (e[t] = r),
		e
	);
}
var rf = (function () {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
		Zd(this, e), tf(this, "items", void 0), (this.items = t);
	}
	return (
		ef(e, [
			{
				key: "add",
				value: function (r) {
					return this.has(r) === !1 && this.items.push(r), this;
				}
			},
			{
				key: "clear",
				value: function () {
					this.items = [];
				}
			},
			{
				key: "delete",
				value: function (r) {
					var a = this.items.length;
					return (
						(this.items = this.items.filter(function (n) {
							return n !== r;
						})),
						a !== this.items.length
					);
				}
			},
			{
				key: "forEach",
				value: function (r) {
					var a = this;
					this.items.forEach(function (n) {
						r(n, n, a);
					});
				}
			},
			{
				key: "has",
				value: function (r) {
					return this.items.indexOf(r) !== -1;
				}
			},
			{
				key: "size",
				get: function () {
					return this.items.length;
				}
			}
		]),
		e
	);
})();
const af = typeof Set > "u" ? Set : rf;
function ne(e) {
	var t;
	return (t = e.localName) !== null && t !== void 0
		? t
		: e.tagName.toLowerCase();
}
var nf = {
		article: "article",
		aside: "complementary",
		button: "button",
		datalist: "listbox",
		dd: "definition",
		details: "group",
		dialog: "dialog",
		dt: "term",
		fieldset: "group",
		figure: "figure",
		form: "form",
		footer: "contentinfo",
		h1: "heading",
		h2: "heading",
		h3: "heading",
		h4: "heading",
		h5: "heading",
		h6: "heading",
		header: "banner",
		hr: "separator",
		html: "document",
		legend: "legend",
		li: "listitem",
		math: "math",
		main: "main",
		menu: "list",
		nav: "navigation",
		ol: "list",
		optgroup: "group",
		option: "option",
		output: "status",
		progress: "progressbar",
		section: "region",
		summary: "button",
		table: "table",
		tbody: "rowgroup",
		textarea: "textbox",
		tfoot: "rowgroup",
		td: "cell",
		th: "columnheader",
		thead: "rowgroup",
		tr: "row",
		ul: "list"
	},
	lf = {
		caption: new Set(["aria-label", "aria-labelledby"]),
		code: new Set(["aria-label", "aria-labelledby"]),
		deletion: new Set(["aria-label", "aria-labelledby"]),
		emphasis: new Set(["aria-label", "aria-labelledby"]),
		generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
		insertion: new Set(["aria-label", "aria-labelledby"]),
		paragraph: new Set(["aria-label", "aria-labelledby"]),
		presentation: new Set(["aria-label", "aria-labelledby"]),
		strong: new Set(["aria-label", "aria-labelledby"]),
		subscript: new Set(["aria-label", "aria-labelledby"]),
		superscript: new Set(["aria-label", "aria-labelledby"])
	};
function of(e, t) {
	return [
		"aria-atomic",
		"aria-busy",
		"aria-controls",
		"aria-current",
		"aria-describedby",
		"aria-details",
		"aria-dropeffect",
		"aria-flowto",
		"aria-grabbed",
		"aria-hidden",
		"aria-keyshortcuts",
		"aria-label",
		"aria-labelledby",
		"aria-live",
		"aria-owns",
		"aria-relevant",
		"aria-roledescription"
	].some(function (r) {
		var a;
		return (
			e.hasAttribute(r) && !((a = lf[t]) !== null && a !== void 0 && a.has(r))
		);
	});
}
function gu(e, t) {
	return of(e, t);
}
function uf(e) {
	var t = cf(e);
	if (t === null || t === "presentation") {
		var r = sf(e);
		if (t !== "presentation" || gu(e, r || "")) return r;
	}
	return t;
}
function sf(e) {
	var t = nf[ne(e)];
	if (t !== void 0) return t;
	switch (ne(e)) {
		case "a":
		case "area":
		case "link":
			if (e.hasAttribute("href")) return "link";
			break;
		case "img":
			return e.getAttribute("alt") === "" && !gu(e, "img")
				? "presentation"
				: "img";
		case "input": {
			var r = e,
				a = r.type;
			switch (a) {
				case "button":
				case "image":
				case "reset":
				case "submit":
					return "button";
				case "checkbox":
				case "radio":
					return a;
				case "range":
					return "slider";
				case "email":
				case "tel":
				case "text":
				case "url":
					return e.hasAttribute("list") ? "combobox" : "textbox";
				case "search":
					return e.hasAttribute("list") ? "combobox" : "searchbox";
				case "number":
					return "spinbutton";
				default:
					return null;
			}
		}
		case "select":
			return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
	}
	return null;
}
function cf(e) {
	var t = e.getAttribute("role");
	if (t !== null) {
		var r = t.trim().split(" ")[0];
		if (r.length > 0) return r;
	}
	return null;
}
function G(e) {
	return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function _u(e) {
	return G(e) && ne(e) === "caption";
}
function Jt(e) {
	return G(e) && ne(e) === "input";
}
function df(e) {
	return G(e) && ne(e) === "optgroup";
}
function ff(e) {
	return G(e) && ne(e) === "select";
}
function pf(e) {
	return G(e) && ne(e) === "table";
}
function mf(e) {
	return G(e) && ne(e) === "textarea";
}
function vf(e) {
	var t = e.ownerDocument === null ? e : e.ownerDocument,
		r = t.defaultView;
	if (r === null) throw new TypeError("no window available");
	return r;
}
function bf(e) {
	return G(e) && ne(e) === "fieldset";
}
function hf(e) {
	return G(e) && ne(e) === "legend";
}
function yf(e) {
	return G(e) && ne(e) === "slot";
}
function gf(e) {
	return G(e) && e.ownerSVGElement !== void 0;
}
function _f(e) {
	return G(e) && ne(e) === "svg";
}
function Ef(e) {
	return gf(e) && ne(e) === "title";
}
function yl(e, t) {
	if (G(e) && e.hasAttribute(t)) {
		var r = e.getAttribute(t).split(" ");
		return r
			.map(function (a) {
				return e.ownerDocument.getElementById(a);
			})
			.filter(function (a) {
				return a !== null;
			});
	}
	return [];
}
function Pe(e, t) {
	return G(e) ? t.indexOf(uf(e)) !== -1 : !1;
}
function Rf(e) {
	return e.trim().replace(/\s\s+/g, " ");
}
function Cf(e, t) {
	if (!G(e)) return !1;
	if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
		return !0;
	var r = t(e);
	return (
		r.getPropertyValue("display") === "none" ||
		r.getPropertyValue("visibility") === "hidden"
	);
}
function Pf(e) {
	return Pe(e, ["button", "combobox", "listbox", "textbox"]) || Eu(e, "range");
}
function Eu(e, t) {
	if (!G(e)) return !1;
	switch (t) {
		case "range":
			return Pe(e, [
				"meter",
				"progressbar",
				"scrollbar",
				"slider",
				"spinbutton"
			]);
		default:
			throw new TypeError(
				"No knowledge about abstract role '".concat(
					t,
					"'. This is likely a bug :("
				)
			);
	}
}
function Ao(e, t) {
	var r = ye(e.querySelectorAll(t));
	return (
		yl(e, "aria-owns").forEach(function (a) {
			r.push.apply(r, ye(a.querySelectorAll(t)));
		}),
		r
	);
}
function wf(e) {
	return ff(e)
		? e.selectedOptions || Ao(e, "[selected]")
		: Ao(e, '[aria-selected="true"]');
}
function qf(e) {
	return Pe(e, ["none", "presentation"]);
}
function Tf(e) {
	return _u(e);
}
function Of(e) {
	return Pe(e, [
		"button",
		"cell",
		"checkbox",
		"columnheader",
		"gridcell",
		"heading",
		"label",
		"legend",
		"link",
		"menuitem",
		"menuitemcheckbox",
		"menuitemradio",
		"option",
		"radio",
		"row",
		"rowheader",
		"switch",
		"tab",
		"tooltip",
		"treeitem"
	]);
}
function Mf(e) {
	return !1;
}
function Af(e) {
	return Jt(e) || mf(e) ? e.value : e.textContent || "";
}
function So(e) {
	var t = e.getPropertyValue("content");
	return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Ru(e) {
	var t = ne(e);
	return (
		t === "button" ||
		(t === "input" && e.getAttribute("type") !== "hidden") ||
		t === "meter" ||
		t === "output" ||
		t === "progress" ||
		t === "select" ||
		t === "textarea"
	);
}
function Cu(e) {
	if (Ru(e)) return e;
	var t = null;
	return (
		e.childNodes.forEach(function (r) {
			if (t === null && G(r)) {
				var a = Cu(r);
				a !== null && (t = a);
			}
		}),
		t
	);
}
function Sf(e) {
	if (e.control !== void 0) return e.control;
	var t = e.getAttribute("for");
	return t !== null ? e.ownerDocument.getElementById(t) : Cu(e);
}
function xf(e) {
	var t = e.labels;
	if (t === null) return t;
	if (t !== void 0) return ye(t);
	if (!Ru(e)) return null;
	var r = e.ownerDocument;
	return ye(r.querySelectorAll("label")).filter(function (a) {
		return Sf(a) === e;
	});
}
function Nf(e) {
	var t = e.assignedNodes();
	return t.length === 0 ? ye(e.childNodes) : t;
}
function If(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = new af(),
		a = vf(e),
		n = t.compute,
		o = n === void 0 ? "name" : n,
		l = t.computedStyleSupportsPseudoElements,
		i = l === void 0 ? t.getComputedStyle !== void 0 : l,
		u = t.getComputedStyle,
		s = u === void 0 ? a.getComputedStyle.bind(a) : u,
		p = t.hidden,
		d = p === void 0 ? !1 : p;
	function m(f, R) {
		var E = "";
		if (G(f) && i) {
			var T = s(f, "::before"),
				O = So(T);
			E = "".concat(O, " ").concat(E);
		}
		var A = yf(f) ? Nf(f) : ye(f.childNodes).concat(yl(f, "aria-owns"));
		if (
			(A.forEach(function (w) {
				var q = y(w, {
						isEmbeddedInLabel: R.isEmbeddedInLabel,
						isReferenced: !1,
						recursion: !0
					}),
					z = G(w) ? s(w).getPropertyValue("display") : "inline",
					c = z !== "inline" ? " " : "";
				E += "".concat(c).concat(q).concat(c);
			}),
			G(f) && i)
		) {
			var S = s(f, "::after"),
				b = So(S);
			E = "".concat(E, " ").concat(b);
		}
		return E.trim();
	}
	function v(f) {
		if (!G(f)) return null;
		function R(x, _) {
			var h = x.getAttributeNode(_);
			return h !== null && !r.has(h) && h.value.trim() !== ""
				? (r.add(h), h.value)
				: null;
		}
		if (bf(f)) {
			r.add(f);
			for (var E = ye(f.childNodes), T = 0; T < E.length; T += 1) {
				var O = E[T];
				if (hf(O))
					return y(O, {
						isEmbeddedInLabel: !1,
						isReferenced: !1,
						recursion: !1
					});
			}
		} else if (pf(f)) {
			r.add(f);
			for (var A = ye(f.childNodes), S = 0; S < A.length; S += 1) {
				var b = A[S];
				if (_u(b))
					return y(b, {
						isEmbeddedInLabel: !1,
						isReferenced: !1,
						recursion: !1
					});
			}
		} else if (_f(f)) {
			r.add(f);
			for (var w = ye(f.childNodes), q = 0; q < w.length; q += 1) {
				var z = w[q];
				if (Ef(z)) return z.textContent;
			}
			return null;
		} else if (ne(f) === "img" || ne(f) === "area") {
			var c = R(f, "alt");
			if (c !== null) return c;
		} else if (df(f)) {
			var ie = R(f, "label");
			if (ie !== null) return ie;
		}
		if (
			Jt(f) &&
			(f.type === "button" || f.type === "submit" || f.type === "reset")
		) {
			var pe = R(f, "value");
			if (pe !== null) return pe;
			if (f.type === "submit") return "Submit";
			if (f.type === "reset") return "Reset";
		}
		var F = xf(f);
		if (F !== null && F.length !== 0)
			return (
				r.add(f),
				ye(F)
					.map(function (x) {
						return y(x, {
							isEmbeddedInLabel: !0,
							isReferenced: !1,
							recursion: !0
						});
					})
					.filter(function (x) {
						return x.length > 0;
					})
					.join(" ")
			);
		if (Jt(f) && f.type === "image") {
			var oe = R(f, "alt");
			if (oe !== null) return oe;
			var K = R(f, "title");
			return K !== null ? K : "Submit Query";
		}
		if (Pe(f, ["button"])) {
			var ue = m(f, { isEmbeddedInLabel: !1, isReferenced: !1 });
			return ue !== "" ? ue : R(f, "title");
		}
		return R(f, "title");
	}
	function y(f, R) {
		if (r.has(f)) return "";
		if (!d && Cf(f, s) && !R.isReferenced) return r.add(f), "";
		var E = yl(f, "aria-labelledby");
		if (o === "name" && !R.isReferenced && E.length > 0)
			return E.map(function (b) {
				return y(b, {
					isEmbeddedInLabel: R.isEmbeddedInLabel,
					isReferenced: !0,
					recursion: !1
				});
			}).join(" ");
		var T = R.recursion && Pf(f) && o === "name";
		if (!T) {
			var O = ((G(f) && f.getAttribute("aria-label")) || "").trim();
			if (O !== "" && o === "name") return r.add(f), O;
			if (!qf(f)) {
				var A = v(f);
				if (A !== null) return r.add(f), A;
			}
		}
		if (Pe(f, ["menu"])) return r.add(f), "";
		if (T || R.isEmbeddedInLabel || R.isReferenced) {
			if (Pe(f, ["combobox", "listbox"])) {
				r.add(f);
				var S = wf(f);
				return S.length === 0
					? Jt(f)
						? f.value
						: ""
					: ye(S)
							.map(function (b) {
								return y(b, {
									isEmbeddedInLabel: R.isEmbeddedInLabel,
									isReferenced: !1,
									recursion: !0
								});
							})
							.join(" ");
			}
			if (Eu(f, "range"))
				return (
					r.add(f),
					f.hasAttribute("aria-valuetext")
						? f.getAttribute("aria-valuetext")
						: f.hasAttribute("aria-valuenow")
						? f.getAttribute("aria-valuenow")
						: f.getAttribute("value") || ""
				);
			if (Pe(f, ["textbox"])) return r.add(f), Af(f);
		}
		return Of(f) || (G(f) && R.isReferenced) || Tf(f) || Mf()
			? (r.add(f),
			  m(f, { isEmbeddedInLabel: R.isEmbeddedInLabel, isReferenced: !1 }))
			: f.nodeType === f.TEXT_NODE
			? (r.add(f), f.textContent || "")
			: R.recursion
			? (r.add(f),
			  m(f, { isEmbeddedInLabel: R.isEmbeddedInLabel, isReferenced: !1 }))
			: (r.add(f), "");
	}
	return Rf(
		y(e, {
			isEmbeddedInLabel: !1,
			isReferenced: o === "description",
			recursion: !1
		})
	);
}
function jf(e) {
	return Pe(e, [
		"caption",
		"code",
		"deletion",
		"emphasis",
		"generic",
		"insertion",
		"paragraph",
		"presentation",
		"strong",
		"subscript",
		"superscript"
	]);
}
function Ul(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	return jf(e) ? "" : If(e, t);
}
var ge = {},
	mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.default = void 0;
function xo(e, t) {
	return Ff(e) || kf(e, t) || Lf(e, t) || Bf();
}
function Bf() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lf(e, t) {
	if (e) {
		if (typeof e == "string") return No(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set")
		)
			return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return No(e, t);
	}
}
function No(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
	return a;
}
function kf(e, t) {
	var r =
		e == null
			? null
			: (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r != null) {
		var a = [],
			n = !0,
			o = !1,
			l,
			i;
		try {
			for (
				r = r.call(e);
				!(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
				n = !0
			);
		} catch (u) {
			(o = !0), (i = u);
		} finally {
			try {
				!n && r.return != null && r.return();
			} finally {
				if (o) throw i;
			}
		}
		return a;
	}
}
function Ff(e) {
	if (Array.isArray(e)) return e;
}
var Qt = [
		["aria-activedescendant", { type: "id" }],
		["aria-atomic", { type: "boolean" }],
		[
			"aria-autocomplete",
			{ type: "token", values: ["inline", "list", "both", "none"] }
		],
		["aria-busy", { type: "boolean" }],
		["aria-checked", { type: "tristate" }],
		["aria-colcount", { type: "integer" }],
		["aria-colindex", { type: "integer" }],
		["aria-colspan", { type: "integer" }],
		["aria-controls", { type: "idlist" }],
		[
			"aria-current",
			{
				type: "token",
				values: ["page", "step", "location", "date", "time", !0, !1]
			}
		],
		["aria-describedby", { type: "idlist" }],
		["aria-details", { type: "id" }],
		["aria-disabled", { type: "boolean" }],
		[
			"aria-dropeffect",
			{
				type: "tokenlist",
				values: ["copy", "execute", "link", "move", "none", "popup"]
			}
		],
		["aria-errormessage", { type: "id" }],
		["aria-expanded", { type: "boolean", allowundefined: !0 }],
		["aria-flowto", { type: "idlist" }],
		["aria-grabbed", { type: "boolean", allowundefined: !0 }],
		[
			"aria-haspopup",
			{
				type: "token",
				values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
			}
		],
		["aria-hidden", { type: "boolean", allowundefined: !0 }],
		[
			"aria-invalid",
			{ type: "token", values: ["grammar", !1, "spelling", !0] }
		],
		["aria-keyshortcuts", { type: "string" }],
		["aria-label", { type: "string" }],
		["aria-labelledby", { type: "idlist" }],
		["aria-level", { type: "integer" }],
		["aria-live", { type: "token", values: ["assertive", "off", "polite"] }],
		["aria-modal", { type: "boolean" }],
		["aria-multiline", { type: "boolean" }],
		["aria-multiselectable", { type: "boolean" }],
		[
			"aria-orientation",
			{ type: "token", values: ["vertical", "undefined", "horizontal"] }
		],
		["aria-owns", { type: "idlist" }],
		["aria-placeholder", { type: "string" }],
		["aria-posinset", { type: "integer" }],
		["aria-pressed", { type: "tristate" }],
		["aria-readonly", { type: "boolean" }],
		[
			"aria-relevant",
			{ type: "tokenlist", values: ["additions", "all", "removals", "text"] }
		],
		["aria-required", { type: "boolean" }],
		["aria-roledescription", { type: "string" }],
		["aria-rowcount", { type: "integer" }],
		["aria-rowindex", { type: "integer" }],
		["aria-rowspan", { type: "integer" }],
		["aria-selected", { type: "boolean", allowundefined: !0 }],
		["aria-setsize", { type: "integer" }],
		[
			"aria-sort",
			{ type: "token", values: ["ascending", "descending", "none", "other"] }
		],
		["aria-valuemax", { type: "number" }],
		["aria-valuemin", { type: "number" }],
		["aria-valuenow", { type: "number" }],
		["aria-valuetext", { type: "string" }]
	],
	Df = {
		entries: function () {
			return Qt;
		},
		get: function (t) {
			var r = Qt.find(function (a) {
				return a[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!this.get(t);
		},
		keys: function () {
			return Qt.map(function (t) {
				var r = xo(t, 1),
					a = r[0];
				return a;
			});
		},
		values: function () {
			return Qt.map(function (t) {
				var r = xo(t, 2),
					a = r[1];
				return a;
			});
		}
	},
	$f = Df;
mr.default = $f;
var vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.default = void 0;
function Io(e, t) {
	return zf(e) || Vf(e, t) || Hf(e, t) || Uf();
}
function Uf() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hf(e, t) {
	if (e) {
		if (typeof e == "string") return jo(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set")
		)
			return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return jo(e, t);
	}
}
function jo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
	return a;
}
function Vf(e, t) {
	var r =
		e == null
			? null
			: (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r != null) {
		var a = [],
			n = !0,
			o = !1,
			l,
			i;
		try {
			for (
				r = r.call(e);
				!(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
				n = !0
			);
		} catch (u) {
			(o = !0), (i = u);
		} finally {
			try {
				!n && r.return != null && r.return();
			} finally {
				if (o) throw i;
			}
		}
		return a;
	}
}
function zf(e) {
	if (Array.isArray(e)) return e;
}
var Xt = [
		["a", { reserved: !1 }],
		["abbr", { reserved: !1 }],
		["acronym", { reserved: !1 }],
		["address", { reserved: !1 }],
		["applet", { reserved: !1 }],
		["area", { reserved: !1 }],
		["article", { reserved: !1 }],
		["aside", { reserved: !1 }],
		["audio", { reserved: !1 }],
		["b", { reserved: !1 }],
		["base", { reserved: !0 }],
		["bdi", { reserved: !1 }],
		["bdo", { reserved: !1 }],
		["big", { reserved: !1 }],
		["blink", { reserved: !1 }],
		["blockquote", { reserved: !1 }],
		["body", { reserved: !1 }],
		["br", { reserved: !1 }],
		["button", { reserved: !1 }],
		["canvas", { reserved: !1 }],
		["caption", { reserved: !1 }],
		["center", { reserved: !1 }],
		["cite", { reserved: !1 }],
		["code", { reserved: !1 }],
		["col", { reserved: !0 }],
		["colgroup", { reserved: !0 }],
		["content", { reserved: !1 }],
		["data", { reserved: !1 }],
		["datalist", { reserved: !1 }],
		["dd", { reserved: !1 }],
		["del", { reserved: !1 }],
		["details", { reserved: !1 }],
		["dfn", { reserved: !1 }],
		["dialog", { reserved: !1 }],
		["dir", { reserved: !1 }],
		["div", { reserved: !1 }],
		["dl", { reserved: !1 }],
		["dt", { reserved: !1 }],
		["em", { reserved: !1 }],
		["embed", { reserved: !1 }],
		["fieldset", { reserved: !1 }],
		["figcaption", { reserved: !1 }],
		["figure", { reserved: !1 }],
		["font", { reserved: !1 }],
		["footer", { reserved: !1 }],
		["form", { reserved: !1 }],
		["frame", { reserved: !1 }],
		["frameset", { reserved: !1 }],
		["h1", { reserved: !1 }],
		["h2", { reserved: !1 }],
		["h3", { reserved: !1 }],
		["h4", { reserved: !1 }],
		["h5", { reserved: !1 }],
		["h6", { reserved: !1 }],
		["head", { reserved: !0 }],
		["header", { reserved: !1 }],
		["hgroup", { reserved: !1 }],
		["hr", { reserved: !1 }],
		["html", { reserved: !0 }],
		["i", { reserved: !1 }],
		["iframe", { reserved: !1 }],
		["img", { reserved: !1 }],
		["input", { reserved: !1 }],
		["ins", { reserved: !1 }],
		["kbd", { reserved: !1 }],
		["keygen", { reserved: !1 }],
		["label", { reserved: !1 }],
		["legend", { reserved: !1 }],
		["li", { reserved: !1 }],
		["link", { reserved: !0 }],
		["main", { reserved: !1 }],
		["map", { reserved: !1 }],
		["mark", { reserved: !1 }],
		["marquee", { reserved: !1 }],
		["menu", { reserved: !1 }],
		["menuitem", { reserved: !1 }],
		["meta", { reserved: !0 }],
		["meter", { reserved: !1 }],
		["nav", { reserved: !1 }],
		["noembed", { reserved: !0 }],
		["noscript", { reserved: !0 }],
		["object", { reserved: !1 }],
		["ol", { reserved: !1 }],
		["optgroup", { reserved: !1 }],
		["option", { reserved: !1 }],
		["output", { reserved: !1 }],
		["p", { reserved: !1 }],
		["param", { reserved: !0 }],
		["picture", { reserved: !0 }],
		["pre", { reserved: !1 }],
		["progress", { reserved: !1 }],
		["q", { reserved: !1 }],
		["rp", { reserved: !1 }],
		["rt", { reserved: !1 }],
		["rtc", { reserved: !1 }],
		["ruby", { reserved: !1 }],
		["s", { reserved: !1 }],
		["samp", { reserved: !1 }],
		["script", { reserved: !0 }],
		["section", { reserved: !1 }],
		["select", { reserved: !1 }],
		["small", { reserved: !1 }],
		["source", { reserved: !0 }],
		["spacer", { reserved: !1 }],
		["span", { reserved: !1 }],
		["strike", { reserved: !1 }],
		["strong", { reserved: !1 }],
		["style", { reserved: !0 }],
		["sub", { reserved: !1 }],
		["summary", { reserved: !1 }],
		["sup", { reserved: !1 }],
		["table", { reserved: !1 }],
		["tbody", { reserved: !1 }],
		["td", { reserved: !1 }],
		["textarea", { reserved: !1 }],
		["tfoot", { reserved: !1 }],
		["th", { reserved: !1 }],
		["thead", { reserved: !1 }],
		["time", { reserved: !1 }],
		["title", { reserved: !0 }],
		["tr", { reserved: !1 }],
		["track", { reserved: !0 }],
		["tt", { reserved: !1 }],
		["u", { reserved: !1 }],
		["ul", { reserved: !1 }],
		["var", { reserved: !1 }],
		["video", { reserved: !1 }],
		["wbr", { reserved: !1 }],
		["xmp", { reserved: !1 }]
	],
	Wf = {
		entries: function () {
			return Xt;
		},
		get: function (t) {
			var r = Xt.find(function (a) {
				return a[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!this.get(t);
		},
		keys: function () {
			return Xt.map(function (t) {
				var r = Io(t, 1),
					a = r[0];
				return a;
			});
		},
		values: function () {
			return Xt.map(function (t) {
				var r = Io(t, 2),
					a = r[1];
				return a;
			});
		}
	},
	Gf = Wf;
vr.default = Gf;
var vt = {},
	br = {},
	hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.default = void 0;
var Qf = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "menuitem" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget"]]
	},
	Xf = Qf;
hr.default = Xf;
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.default = void 0;
var Kf = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-activedescendant": null, "aria-disabled": null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget"]]
	},
	Jf = Kf;
yr.default = Jf;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.default = void 0;
var Yf = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-disabled": null },
		relatedConcepts: [{ concept: { name: "input" }, module: "XForms" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget"]]
	},
	Zf = Yf;
gr.default = Zf;
var _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.default = void 0;
var ep = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	tp = ep;
_r.default = tp;
var Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.default = void 0;
var rp = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-valuemax": null,
			"aria-valuemin": null,
			"aria-valuenow": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	ap = rp;
Er.default = ap;
var Rr = {};
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.default = void 0;
var np = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {
			"aria-atomic": null,
			"aria-busy": null,
			"aria-controls": null,
			"aria-current": null,
			"aria-describedby": null,
			"aria-details": null,
			"aria-dropeffect": null,
			"aria-flowto": null,
			"aria-grabbed": null,
			"aria-hidden": null,
			"aria-keyshortcuts": null,
			"aria-label": null,
			"aria-labelledby": null,
			"aria-live": null,
			"aria-owns": null,
			"aria-relevant": null,
			"aria-roledescription": null
		},
		relatedConcepts: [
			{ concept: { name: "rel" }, module: "HTML" },
			{ concept: { name: "role" }, module: "XHTML" },
			{ concept: { name: "type" }, module: "Dublin Core" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: []
	},
	lp = np;
Rr.default = lp;
var Cr = {};
Object.defineProperty(Cr, "__esModule", { value: !0 });
Cr.default = void 0;
var op = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: "frontmatter" }, module: "DTB" },
			{ concept: { name: "level" }, module: "DTB" },
			{ concept: { name: "level" }, module: "SMIL" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	ip = op;
Cr.default = ip;
var Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.default = void 0;
var up = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	sp = up;
Pr.default = sp;
var wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.default = void 0;
var cp = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite"],
			["roletype", "structure", "section", "group"]
		]
	},
	dp = cp;
wr.default = dp;
var qr = {};
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.default = void 0;
var fp = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype"]]
	},
	pp = fp;
qr.default = pp;
var Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.default = void 0;
var mp = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype"]]
	},
	vp = mp;
Tr.default = vp;
var Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.default = void 0;
var bp = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-modal": null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype"]]
	},
	hp = bp;
Or.default = hp;
Object.defineProperty(br, "__esModule", { value: !0 });
br.default = void 0;
var yp = be(hr),
	gp = be(yr),
	_p = be(gr),
	Ep = be(_r),
	Rp = be(Er),
	Cp = be(Rr),
	Pp = be(Cr),
	wp = be(Pr),
	qp = be(wr),
	Tp = be(qr),
	Op = be(Tr),
	Mp = be(Or);
function be(e) {
	return e && e.__esModule ? e : { default: e };
}
var Ap = [
		["command", yp.default],
		["composite", gp.default],
		["input", _p.default],
		["landmark", Ep.default],
		["range", Rp.default],
		["roletype", Cp.default],
		["section", Pp.default],
		["sectionhead", wp.default],
		["select", qp.default],
		["structure", Tp.default],
		["widget", Op.default],
		["window", Mp.default]
	],
	Sp = Ap;
br.default = Sp;
var Mr = {},
	Ar = {};
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.default = void 0;
var xp = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-atomic": "true", "aria-live": "assertive" },
		relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Np = xp;
Ar.default = Np;
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.default = void 0;
var Ip = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "alert" }, module: "XForms" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "section", "alert"],
			["roletype", "window", "dialog"]
		]
	},
	jp = Ip;
Sr.default = jp;
var xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.default = void 0;
var Bp = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "Device Independence Delivery Unit" } }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	Lp = Bp;
xr.default = Lp;
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.default = void 0;
var kp = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-posinset": null, "aria-setsize": null },
		relatedConcepts: [{ concept: { name: "article" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "document"]]
	},
	Fp = kp;
Nr.default = Fp;
var Ir = {};
Object.defineProperty(Ir, "__esModule", { value: !0 });
Ir.default = void 0;
var Dp = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					constraints: ["direct descendant of document"],
					name: "header"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	$p = Dp;
Ir.default = $p;
var jr = {};
Object.defineProperty(jr, "__esModule", { value: !0 });
jr.default = void 0;
var Up = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Hp = Up;
jr.default = Hp;
var Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.default = void 0;
var Vp = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-pressed": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "aria-pressed" },
						{ name: "type", value: "checkbox" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "aria-expanded", value: "false" }],
					name: "summary"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "aria-expanded", value: "true" }],
					constraints: [
						"direct descendant of details element with the open attribute defined"
					],
					name: "summary"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "type", value: "button" }],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "type", value: "image" }],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "type", value: "reset" }],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ name: "type", value: "submit" }],
					name: "input"
				},
				module: "HTML"
			},
			{ concept: { name: "button" }, module: "HTML" },
			{ concept: { name: "trigger" }, module: "XForms" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command"]]
	},
	zp = Vp;
Br.default = zp;
var Lr = {};
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.default = void 0;
var Wp = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: ["figure", "grid", "table"],
		requiredContextRole: ["figure", "grid", "table"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Gp = Wp;
Lr.default = Gp;
var kr = {};
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.default = void 0;
var Qp = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-colindex": null,
			"aria-colspan": null,
			"aria-rowindex": null,
			"aria-rowspan": null
		},
		relatedConcepts: [
			{
				concept: { constraints: ["descendant of table"], name: "td" },
				module: "HTML"
			}
		],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Xp = Qp;
kr.default = Xp;
var Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.default = void 0;
var Kp = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-checked": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ name: "type", value: "checkbox" }],
					name: "input"
				},
				module: "HTML"
			},
			{ concept: { name: "option" }, module: "ARIA" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [["roletype", "widget", "input"]]
	},
	Jp = Kp;
Fr.default = Jp;
var Dr = {};
Object.defineProperty(Dr, "__esModule", { value: !0 });
Dr.default = void 0;
var Yp = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Zp = Yp;
Dr.default = Zp;
var $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
$r.default = void 0;
var em = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-sort": null },
		relatedConcepts: [
			{
				attributes: [{ name: "scope", value: "col" }],
				concept: { name: "th" },
				module: "HTML"
			}
		],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "section", "cell"],
			["roletype", "structure", "section", "cell", "gridcell"],
			["roletype", "widget", "gridcell"],
			["roletype", "structure", "sectionhead"]
		]
	},
	tm = em;
$r.default = tm;
var Ur = {};
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.default = void 0;
var rm = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-autocomplete": null,
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-expanded": "false",
			"aria-haspopup": "listbox"
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "list" },
						{ name: "type", value: "email" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "list" },
						{ name: "type", value: "search" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "list" },
						{ name: "type", value: "tel" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "list" },
						{ name: "type", value: "text" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "list" },
						{ name: "type", value: "url" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["set"], name: "list" },
						{ name: "type", value: "url" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "multiple" },
						{ constraints: ["undefined"], name: "size" }
					],
					name: "select"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "multiple" },
						{ name: "size", value: 1 }
					],
					name: "select"
				},
				module: "HTML"
			},
			{ concept: { name: "select" }, module: "XForms" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-controls": null, "aria-expanded": "false" },
		superClass: [["roletype", "widget", "input"]]
	},
	am = rm;
Ur.default = am;
var Hr = {};
Object.defineProperty(Hr, "__esModule", { value: !0 });
Hr.default = void 0;
var nm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "aside" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	lm = nm;
Hr.default = lm;
var Vr = {};
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.default = void 0;
var om = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					constraints: ["direct descendant of document"],
					name: "footer"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	im = om;
Vr.default = im;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.default = void 0;
var um = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "dd" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	sm = um;
zr.default = sm;
var Wr = {};
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.default = void 0;
var cm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	dm = cm;
Wr.default = dm;
var Gr = {};
Object.defineProperty(Gr, "__esModule", { value: !0 });
Gr.default = void 0;
var fm = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "dialog" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "window"]]
	},
	pm = fm;
Gr.default = pm;
var Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.default = void 0;
var mm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ module: "DAISY Guide" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "list"]]
	},
	vm = mm;
Qr.default = vm;
var Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.default = void 0;
var bm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: "Device Independence Delivery Unit" } },
			{ concept: { name: "body" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	hm = bm;
Xr.default = hm;
var Kr = {};
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.default = void 0;
var ym = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	gm = ym;
Kr.default = gm;
var Jr = {};
Object.defineProperty(Jr, "__esModule", { value: !0 });
Jr.default = void 0;
var _m = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["article"]],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "list"]]
	},
	Em = _m;
Jr.default = Em;
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.default = void 0;
var Rm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "figure" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Cm = Rm;
Yr.default = Cm;
var Zr = {};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.default = void 0;
var Pm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ constraints: ["set"], name: "aria-label" }],
					name: "form"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
					name: "form"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ constraints: ["set"], name: "name" }],
					name: "form"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	wm = Pm;
Zr.default = wm;
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.default = void 0;
var qm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [
			{ concept: { name: "span" }, module: "HTML" },
			{ concept: { name: "div" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	Tm = qm;
ea.default = Tm;
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.default = void 0;
var Om = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-multiselectable": null, "aria-readonly": null },
		relatedConcepts: [
			{
				concept: {
					attributes: [{ name: "role", value: "grid" }],
					name: "table"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["row"], ["row", "rowgroup"]],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite"],
			["roletype", "structure", "section", "table"]
		]
	},
	Mm = Om;
ta.default = Mm;
var ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.default = void 0;
var Am = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-selected": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ name: "role", value: "gridcell" }],
					name: "td"
				},
				module: "HTML"
			}
		],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "section", "cell"],
			["roletype", "widget"]
		]
	},
	Sm = Am;
ra.default = Sm;
var aa = {};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.default = void 0;
var xm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-activedescendant": null, "aria-disabled": null },
		relatedConcepts: [
			{ concept: { name: "details" }, module: "HTML" },
			{ concept: { name: "fieldset" }, module: "HTML" },
			{ concept: { name: "optgroup" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Nm = xm;
aa.default = Nm;
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
na.default = void 0;
var Im = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-level": "2" },
		relatedConcepts: [
			{ concept: { name: "h1" }, module: "HTML" },
			{ concept: { name: "h2" }, module: "HTML" },
			{ concept: { name: "h3" }, module: "HTML" },
			{ concept: { name: "h4" }, module: "HTML" },
			{ concept: { name: "h5" }, module: "HTML" },
			{ concept: { name: "h6" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-level": "2" },
		superClass: [["roletype", "structure", "sectionhead"]]
	},
	jm = Im;
na.default = jm;
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.default = void 0;
var Bm = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ constraints: ["set"], name: "alt" }],
					name: "img"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ constraints: ["undefined"], name: "alt" }],
					name: "img"
				},
				module: "HTML"
			},
			{ concept: { name: "imggroup" }, module: "DTB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Lm = Bm;
la.default = Lm;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.default = void 0;
var km = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Fm = km;
oa.default = Fm;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.default = void 0;
var Dm = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: "href" }], name: "a" },
				module: "HTML"
			},
			{
				concept: { attributes: [{ name: "href" }], name: "area" },
				module: "HTML"
			},
			{
				concept: { attributes: [{ name: "href" }], name: "link" },
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command"]]
	},
	$m = Dm;
ia.default = $m;
var ua = {};
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.default = void 0;
var Um = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: "menu" }, module: "HTML" },
			{ concept: { name: "ol" }, module: "HTML" },
			{ concept: { name: "ul" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["listitem"]],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Hm = Um;
ua.default = Hm;
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.default = void 0;
var Vm = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-invalid": null,
			"aria-multiselectable": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-orientation": "vertical"
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: [">1"], name: "size" },
						{ name: "multiple" }
					],
					name: "select"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ constraints: [">1"], name: "size" }],
					name: "select"
				},
				module: "HTML"
			},
			{
				concept: { attributes: [{ name: "multiple" }], name: "select" },
				module: "HTML"
			},
			{ concept: { name: "datalist" }, module: "HTML" },
			{ concept: { name: "list" }, module: "ARIA" },
			{ concept: { name: "select" }, module: "XForms" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["option", "group"], ["option"]],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite", "select"],
			["roletype", "structure", "section", "group", "select"]
		]
	},
	zm = Vm;
sa.default = zm;
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.default = void 0;
var Wm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-level": null, "aria-posinset": null, "aria-setsize": null },
		relatedConcepts: [
			{
				concept: {
					constraints: ["direct descendant of ol, ul or menu"],
					name: "li"
				},
				module: "HTML"
			},
			{ concept: { name: "item" }, module: "XForms" }
		],
		requireContextRole: ["directory", "list"],
		requiredContextRole: ["directory", "list"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Gm = Wm;
ca.default = Gm;
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.default = void 0;
var Qm = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-live": "polite" },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Xm = Qm;
da.default = Xm;
var fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.default = void 0;
var Km = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "main" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Jm = Km;
fa.default = Jm;
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.default = void 0;
var Ym = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Zm = Ym;
pa.default = Zm;
var ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.default = void 0;
var ev = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "math" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	tv = ev;
ma.default = tv;
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.default = void 0;
var rv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": "vertical" },
		relatedConcepts: [
			{ concept: { name: "MENU" }, module: "JAPI" },
			{ concept: { name: "list" }, module: "ARIA" },
			{ concept: { name: "select" }, module: "XForms" },
			{ concept: { name: "sidebar" }, module: "DTB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			["menuitem", "group"],
			["menuitemradio", "group"],
			["menuitemcheckbox", "group"],
			["menuitem"],
			["menuitemcheckbox"],
			["menuitemradio"]
		],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite", "select"],
			["roletype", "structure", "section", "group", "select"]
		]
	},
	av = rv;
va.default = av;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.default = void 0;
var nv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": "horizontal" },
		relatedConcepts: [{ concept: { name: "toolbar" }, module: "ARIA" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			["menuitem", "group"],
			["menuitemradio", "group"],
			["menuitemcheckbox", "group"],
			["menuitem"],
			["menuitemcheckbox"],
			["menuitemradio"]
		],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite", "select", "menu"],
			["roletype", "structure", "section", "group", "select", "menu"]
		]
	},
	lv = nv;
ba.default = lv;
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.default = void 0;
var ov = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-posinset": null,
			"aria-setsize": null
		},
		relatedConcepts: [
			{ concept: { name: "MENU_ITEM" }, module: "JAPI" },
			{ concept: { name: "listitem" }, module: "ARIA" },
			{ concept: { name: "menuitem" }, module: "HTML" },
			{ concept: { name: "option" }, module: "ARIA" }
		],
		requireContextRole: ["group", "menu", "menubar"],
		requiredContextRole: ["group", "menu", "menubar"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command"]]
	},
	iv = ov;
ha.default = iv;
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.default = void 0;
var uv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
		requireContextRole: ["group", "menu", "menubar"],
		requiredContextRole: ["group", "menu", "menubar"],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [
			["roletype", "widget", "input", "checkbox"],
			["roletype", "widget", "command", "menuitem"]
		]
	},
	sv = uv;
ya.default = sv;
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.default = void 0;
var cv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "menuitem" }, module: "ARIA" }],
		requireContextRole: ["group", "menu", "menubar"],
		requiredContextRole: ["group", "menu", "menubar"],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [
			["roletype", "widget", "input", "checkbox", "menuitemcheckbox"],
			["roletype", "widget", "command", "menuitem", "menuitemcheckbox"],
			["roletype", "widget", "input", "radio"]
		]
	},
	dv = cv;
ga.default = dv;
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.default = void 0;
var fv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-valuetext": null,
			"aria-valuemax": "100",
			"aria-valuemin": "0"
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-valuenow": null },
		superClass: [["roletype", "structure", "range"]]
	},
	pv = fv;
_a.default = pv;
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.default = void 0;
var mv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "nav" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	vv = mv;
Ea.default = vv;
var Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.default = void 0;
var bv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: []
	},
	hv = bv;
Ra.default = hv;
var Ca = {};
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.default = void 0;
var yv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	gv = yv;
Ca.default = gv;
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
Pa.default = void 0;
var _v = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-checked": null,
			"aria-posinset": null,
			"aria-setsize": null,
			"aria-selected": "false"
		},
		relatedConcepts: [
			{ concept: { name: "item" }, module: "XForms" },
			{ concept: { name: "listitem" }, module: "ARIA" },
			{ concept: { name: "option" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-selected": "false" },
		superClass: [["roletype", "widget", "input"]]
	},
	Ev = _v;
Pa.default = Ev;
var wa = {};
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.default = void 0;
var Rv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Cv = Rv;
wa.default = Cv;
var qa = {};
Object.defineProperty(qa, "__esModule", { value: !0 });
qa.default = void 0;
var Pv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	wv = Pv;
qa.default = wv;
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.default = void 0;
var qv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-valuetext": null },
		relatedConcepts: [
			{ concept: { name: "progress" }, module: "HTML" },
			{ concept: { name: "status" }, module: "ARIA" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "range"],
			["roletype", "widget"]
		]
	},
	Tv = qv;
Ta.default = Tv;
var Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.default = void 0;
var Ov = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-checked": null,
			"aria-posinset": null,
			"aria-setsize": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ name: "type", value: "radio" }],
					name: "input"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [["roletype", "widget", "input"]]
	},
	Mv = Ov;
Oa.default = Mv;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.default = void 0;
var Av = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null
		},
		relatedConcepts: [{ concept: { name: "list" }, module: "ARIA" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["radio"]],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite", "select"],
			["roletype", "structure", "section", "group", "select"]
		]
	},
	Sv = Av;
Ma.default = Sv;
var Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.default = void 0;
var xv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ constraints: ["set"], name: "aria-label" }],
					name: "section"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [{ constraints: ["set"], name: "aria-labelledby" }],
					name: "section"
				},
				module: "HTML"
			},
			{ concept: { name: "Device Independence Glossart perceivable unit" } },
			{ concept: { name: "frame" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Nv = xv;
Aa.default = Nv;
var Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
Sa.default = void 0;
var Iv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-colindex": null,
			"aria-expanded": null,
			"aria-level": null,
			"aria-posinset": null,
			"aria-rowindex": null,
			"aria-selected": null,
			"aria-setsize": null
		},
		relatedConcepts: [{ concept: { name: "tr" }, module: "HTML" }],
		requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
		requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
		requiredOwnedElements: [
			["cell"],
			["columnheader"],
			["gridcell"],
			["rowheader"]
		],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "section", "group"],
			["roletype", "widget"]
		]
	},
	jv = Iv;
Sa.default = jv;
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
xa.default = void 0;
var Bv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: "tbody" }, module: "HTML" },
			{ concept: { name: "tfoot" }, module: "HTML" },
			{ concept: { name: "thead" }, module: "HTML" }
		],
		requireContextRole: ["grid", "table", "treegrid"],
		requiredContextRole: ["grid", "table", "treegrid"],
		requiredOwnedElements: [["row"]],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	Lv = Bv;
xa.default = Lv;
var Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
Na.default = void 0;
var kv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-sort": null },
		relatedConcepts: [
			{
				concept: { attributes: [{ name: "scope", value: "row" }], name: "th" },
				module: "HTML"
			}
		],
		requireContextRole: ["row"],
		requiredContextRole: ["row"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "section", "cell"],
			["roletype", "structure", "section", "cell", "gridcell"],
			["roletype", "widget", "gridcell"],
			["roletype", "structure", "sectionhead"]
		]
	},
	Fv = kv;
Na.default = Fv;
var Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
Ia.default = void 0;
var Dv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-valuetext": null,
			"aria-orientation": "vertical",
			"aria-valuemax": "100",
			"aria-valuemin": "0"
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-controls": null, "aria-valuenow": null },
		superClass: [
			["roletype", "structure", "range"],
			["roletype", "widget"]
		]
	},
	$v = Dv;
Ia.default = $v;
var ja = {};
Object.defineProperty(ja, "__esModule", { value: !0 });
ja.default = void 0;
var Uv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Hv = Uv;
ja.default = Hv;
var Ba = {};
Object.defineProperty(Ba, "__esModule", { value: !0 });
Ba.default = void 0;
var Vv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "list" },
						{ name: "type", value: "search" }
					],
					name: "input"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "input", "textbox"]]
	},
	zv = Vv;
Ba.default = zv;
var La = {};
Object.defineProperty(La, "__esModule", { value: !0 });
La.default = void 0;
var Wv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-orientation": "horizontal",
			"aria-valuemax": "100",
			"aria-valuemin": "0",
			"aria-valuenow": null,
			"aria-valuetext": null
		},
		relatedConcepts: [{ concept: { name: "hr" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure"]]
	},
	Gv = Wv;
La.default = Gv;
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.default = void 0;
var Qv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-haspopup": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-valuetext": null,
			"aria-orientation": "horizontal",
			"aria-valuemax": "100",
			"aria-valuemin": "0"
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ name: "type", value: "range" }],
					name: "input"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-valuenow": null },
		superClass: [
			["roletype", "widget", "input"],
			["roletype", "structure", "range"]
		]
	},
	Xv = Qv;
ka.default = Xv;
var Fa = {};
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.default = void 0;
var Kv = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-readonly": null,
			"aria-required": null,
			"aria-valuetext": null,
			"aria-valuenow": "0"
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ name: "type", value: "number" }],
					name: "input"
				},
				module: "HTML"
			}
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite"],
			["roletype", "widget", "input"],
			["roletype", "structure", "range"]
		]
	},
	Jv = Kv;
Fa.default = Jv;
var Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.default = void 0;
var Yv = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-atomic": "true", "aria-live": "polite" },
		relatedConcepts: [{ concept: { name: "output" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Zv = Yv;
Da.default = Zv;
var $a = {};
Object.defineProperty($a, "__esModule", { value: !0 });
$a.default = void 0;
var eb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	tb = eb;
$a.default = tb;
var Ua = {};
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.default = void 0;
var rb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	ab = rb;
Ua.default = ab;
var Ha = {};
Object.defineProperty(Ha, "__esModule", { value: !0 });
Ha.default = void 0;
var nb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["prohibited"],
		prohibitedProps: ["aria-label", "aria-labelledby"],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	lb = nb;
Ha.default = lb;
var Va = {};
Object.defineProperty(Va, "__esModule", { value: !0 });
Va.default = void 0;
var ob = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: "button" }, module: "ARIA" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { "aria-checked": null },
		superClass: [["roletype", "widget", "input", "checkbox"]]
	},
	ib = ob;
Va.default = ib;
var za = {};
Object.defineProperty(za, "__esModule", { value: !0 });
za.default = void 0;
var ub = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-posinset": null,
			"aria-setsize": null,
			"aria-selected": "false"
		},
		relatedConcepts: [],
		requireContextRole: ["tablist"],
		requiredContextRole: ["tablist"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			["roletype", "structure", "sectionhead"],
			["roletype", "widget"]
		]
	},
	sb = ub;
za.default = sb;
var Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.default = void 0;
var cb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-colcount": null, "aria-rowcount": null },
		relatedConcepts: [{ concept: { name: "table" }, module: "HTML" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["row"], ["row", "rowgroup"]],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	db = cb;
Wa.default = db;
var Ga = {};
Object.defineProperty(Ga, "__esModule", { value: !0 });
Ga.default = void 0;
var fb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-level": null,
			"aria-multiselectable": null,
			"aria-orientation": "horizontal"
		},
		relatedConcepts: [{ module: "DAISY", concept: { name: "guide" } }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["tab"]],
		requiredProps: {},
		superClass: [["roletype", "widget", "composite"]]
	},
	pb = fb;
Ga.default = pb;
var Qa = {};
Object.defineProperty(Qa, "__esModule", { value: !0 });
Qa.default = void 0;
var mb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	vb = mb;
Qa.default = vb;
var Xa = {};
Object.defineProperty(Xa, "__esModule", { value: !0 });
Xa.default = void 0;
var bb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: "dfn" }, module: "HTML" },
			{ concept: { name: "dt" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	hb = bb;
Xa.default = hb;
var Ka = {};
Object.defineProperty(Ka, "__esModule", { value: !0 });
Ka.default = void 0;
var yb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-activedescendant": null,
			"aria-autocomplete": null,
			"aria-errormessage": null,
			"aria-haspopup": null,
			"aria-invalid": null,
			"aria-multiline": null,
			"aria-placeholder": null,
			"aria-readonly": null,
			"aria-required": null
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "type" },
						{ constraints: ["undefined"], name: "list" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "list" },
						{ name: "type", value: "email" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "list" },
						{ name: "type", value: "tel" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "list" },
						{ name: "type", value: "text" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{
				concept: {
					attributes: [
						{ constraints: ["undefined"], name: "list" },
						{ name: "type", value: "url" }
					],
					name: "input"
				},
				module: "HTML"
			},
			{ concept: { name: "input" }, module: "XForms" },
			{ concept: { name: "textarea" }, module: "HTML" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "input"]]
	},
	gb = yb;
Ka.default = gb;
var Ja = {};
Object.defineProperty(Ja, "__esModule", { value: !0 });
Ja.default = void 0;
var _b = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Eb = _b;
Ja.default = Eb;
var Ya = {};
Object.defineProperty(Ya, "__esModule", { value: !0 });
Ya.default = void 0;
var Rb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "status"]]
	},
	Cb = Rb;
Ya.default = Cb;
var Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.default = void 0;
var Pb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: { "aria-orientation": "horizontal" },
		relatedConcepts: [{ concept: { name: "menubar" }, module: "ARIA" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "group"]]
	},
	wb = Pb;
Za.default = wb;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
en.default = void 0;
var qb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Tb = qb;
en.default = Tb;
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
tn.default = void 0;
var Ob = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-invalid": null,
			"aria-multiselectable": null,
			"aria-required": null,
			"aria-orientation": "vertical"
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite", "select"],
			["roletype", "structure", "section", "group", "select"]
		]
	},
	Mb = Ob;
tn.default = Mb;
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.default = void 0;
var Ab = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["row"], ["row", "rowgroup"]],
		requiredProps: {},
		superClass: [
			["roletype", "widget", "composite", "grid"],
			["roletype", "structure", "section", "table", "grid"],
			["roletype", "widget", "composite", "select", "tree"],
			["roletype", "structure", "section", "group", "select", "tree"]
		]
	},
	Sb = Ab;
rn.default = Sb;
var an = {};
Object.defineProperty(an, "__esModule", { value: !0 });
an.default = void 0;
var xb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-expanded": null, "aria-haspopup": null },
		relatedConcepts: [],
		requireContextRole: ["group", "tree"],
		requiredContextRole: ["group", "tree"],
		requiredOwnedElements: [],
		requiredProps: { "aria-selected": null },
		superClass: [
			["roletype", "structure", "section", "listitem"],
			["roletype", "widget", "input", "option"]
		]
	},
	Nb = xb;
an.default = Nb;
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.default = void 0;
var Ib = P(Ar),
	jb = P(Sr),
	Bb = P(xr),
	Lb = P(Nr),
	kb = P(Ir),
	Fb = P(jr),
	Db = P(Br),
	$b = P(Lr),
	Ub = P(kr),
	Hb = P(Fr),
	Vb = P(Dr),
	zb = P($r),
	Wb = P(Ur),
	Gb = P(Hr),
	Qb = P(Vr),
	Xb = P(zr),
	Kb = P(Wr),
	Jb = P(Gr),
	Yb = P(Qr),
	Zb = P(Xr),
	eh = P(Kr),
	th = P(Jr),
	rh = P(Yr),
	ah = P(Zr),
	nh = P(ea),
	lh = P(ta),
	oh = P(ra),
	ih = P(aa),
	uh = P(na),
	sh = P(la),
	ch = P(oa),
	dh = P(ia),
	fh = P(ua),
	ph = P(sa),
	mh = P(ca),
	vh = P(da),
	bh = P(fa),
	hh = P(pa),
	yh = P(ma),
	gh = P(va),
	_h = P(ba),
	Eh = P(ha),
	Rh = P(ya),
	Ch = P(ga),
	Ph = P(_a),
	wh = P(Ea),
	qh = P(Ra),
	Th = P(Ca),
	Oh = P(Pa),
	Mh = P(wa),
	Ah = P(qa),
	Sh = P(Ta),
	xh = P(Oa),
	Nh = P(Ma),
	Ih = P(Aa),
	jh = P(Sa),
	Bh = P(xa),
	Lh = P(Na),
	kh = P(Ia),
	Fh = P(ja),
	Dh = P(Ba),
	$h = P(La),
	Uh = P(ka),
	Hh = P(Fa),
	Vh = P(Da),
	zh = P($a),
	Wh = P(Ua),
	Gh = P(Ha),
	Qh = P(Va),
	Xh = P(za),
	Kh = P(Wa),
	Jh = P(Ga),
	Yh = P(Qa),
	Zh = P(Xa),
	ey = P(Ka),
	ty = P(Ja),
	ry = P(Ya),
	ay = P(Za),
	ny = P(en),
	ly = P(tn),
	oy = P(rn),
	iy = P(an);
function P(e) {
	return e && e.__esModule ? e : { default: e };
}
var uy = [
		["alert", Ib.default],
		["alertdialog", jb.default],
		["application", Bb.default],
		["article", Lb.default],
		["banner", kb.default],
		["blockquote", Fb.default],
		["button", Db.default],
		["caption", $b.default],
		["cell", Ub.default],
		["checkbox", Hb.default],
		["code", Vb.default],
		["columnheader", zb.default],
		["combobox", Wb.default],
		["complementary", Gb.default],
		["contentinfo", Qb.default],
		["definition", Xb.default],
		["deletion", Kb.default],
		["dialog", Jb.default],
		["directory", Yb.default],
		["document", Zb.default],
		["emphasis", eh.default],
		["feed", th.default],
		["figure", rh.default],
		["form", ah.default],
		["generic", nh.default],
		["grid", lh.default],
		["gridcell", oh.default],
		["group", ih.default],
		["heading", uh.default],
		["img", sh.default],
		["insertion", ch.default],
		["link", dh.default],
		["list", fh.default],
		["listbox", ph.default],
		["listitem", mh.default],
		["log", vh.default],
		["main", bh.default],
		["marquee", hh.default],
		["math", yh.default],
		["menu", gh.default],
		["menubar", _h.default],
		["menuitem", Eh.default],
		["menuitemcheckbox", Rh.default],
		["menuitemradio", Ch.default],
		["meter", Ph.default],
		["navigation", wh.default],
		["none", qh.default],
		["note", Th.default],
		["option", Oh.default],
		["paragraph", Mh.default],
		["presentation", Ah.default],
		["progressbar", Sh.default],
		["radio", xh.default],
		["radiogroup", Nh.default],
		["region", Ih.default],
		["row", jh.default],
		["rowgroup", Bh.default],
		["rowheader", Lh.default],
		["scrollbar", kh.default],
		["search", Fh.default],
		["searchbox", Dh.default],
		["separator", $h.default],
		["slider", Uh.default],
		["spinbutton", Hh.default],
		["status", Vh.default],
		["strong", zh.default],
		["subscript", Wh.default],
		["superscript", Gh.default],
		["switch", Qh.default],
		["tab", Xh.default],
		["table", Kh.default],
		["tablist", Jh.default],
		["tabpanel", Yh.default],
		["term", Zh.default],
		["textbox", ey.default],
		["time", ty.default],
		["timer", ry.default],
		["toolbar", ay.default],
		["tooltip", ny.default],
		["tree", ly.default],
		["treegrid", oy.default],
		["treeitem", iy.default]
	],
	sy = uy;
Mr.default = sy;
var nn = {},
	ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.default = void 0;
var cy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "abstract [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	dy = cy;
ln.default = dy;
var on = {};
Object.defineProperty(on, "__esModule", { value: !0 });
on.default = void 0;
var fy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "acknowledgments [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	py = fy;
on.default = py;
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.default = void 0;
var my = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "afterword [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	vy = my;
un.default = vy;
var sn = {};
Object.defineProperty(sn, "__esModule", { value: !0 });
sn.default = void 0;
var by = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "appendix [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	hy = by;
sn.default = hy;
var cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.default = void 0;
var yy = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "content"],
		prohibitedProps: [],
		props: { "aria-errormessage": null, "aria-invalid": null },
		relatedConcepts: [
			{ concept: { name: "referrer [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command", "link"]]
	},
	gy = yy;
cn.default = gy;
var dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.default = void 0;
var _y = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "EPUB biblioentry [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: ["doc-bibliography"],
		requiredContextRole: ["doc-bibliography"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "listitem"]]
	},
	Ey = _y;
dn.default = Ey;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.default = void 0;
var Ry = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "bibliography [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["doc-biblioentry"]],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Cy = Ry;
fn.default = Cy;
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.default = void 0;
var Py = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-errormessage": null, "aria-invalid": null },
		relatedConcepts: [
			{ concept: { name: "biblioref [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command", "link"]]
	},
	wy = Py;
pn.default = wy;
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.default = void 0;
var qy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "chapter [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Ty = qy;
mn.default = Ty;
var vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.default = void 0;
var Oy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "colophon [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	My = Oy;
vn.default = My;
var bn = {};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.default = void 0;
var Ay = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "conclusion [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Sy = Ay;
bn.default = Sy;
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.default = void 0;
var xy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "cover [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "img"]]
	},
	Ny = xy;
hn.default = Ny;
var yn = {};
Object.defineProperty(yn, "__esModule", { value: !0 });
yn.default = void 0;
var Iy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "credit [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	jy = Iy;
yn.default = jy;
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.default = void 0;
var By = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "credits [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Ly = By;
gn.default = Ly;
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.default = void 0;
var ky = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "dedication [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Fy = ky;
_n.default = Fy;
var En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.default = void 0;
var Dy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "rearnote [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: ["doc-endnotes"],
		requiredContextRole: ["doc-endnotes"],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "listitem"]]
	},
	$y = Dy;
En.default = $y;
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.default = void 0;
var Uy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "rearnotes [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["doc-endnote"]],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Hy = Uy;
Rn.default = Hy;
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.default = void 0;
var Vy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "epigraph [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	zy = Vy;
Cn.default = zy;
var Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.default = void 0;
var Wy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "epilogue [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Gy = Wy;
Pn.default = Gy;
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.default = void 0;
var Qy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "errata [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Xy = Qy;
wn.default = Xy;
var qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.default = void 0;
var Ky = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Jy = Ky;
qn.default = Jy;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.default = void 0;
var Yy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "footnote [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Zy = Yy;
Tn.default = Zy;
var On = {};
Object.defineProperty(On, "__esModule", { value: !0 });
On.default = void 0;
var eg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "foreword [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	tg = eg;
On.default = tg;
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.default = void 0;
var rg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "glossary [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [["definition"], ["term"]],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	ag = rg;
Mn.default = ag;
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
An.default = void 0;
var ng = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-errormessage": null, "aria-invalid": null },
		relatedConcepts: [
			{ concept: { name: "glossref [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command", "link"]]
	},
	lg = ng;
An.default = lg;
var Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.default = void 0;
var og = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "index [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
	},
	ig = og;
Sn.default = ig;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.default = void 0;
var ug = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "introduction [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	sg = ug;
xn.default = sg;
var Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.default = void 0;
var cg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author", "contents"],
		prohibitedProps: [],
		props: { "aria-errormessage": null, "aria-invalid": null },
		relatedConcepts: [
			{ concept: { name: "noteref [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "widget", "command", "link"]]
	},
	dg = cg;
Nn.default = dg;
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
In.default = void 0;
var fg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "notice [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "note"]]
	},
	pg = fg;
In.default = pg;
var jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.default = void 0;
var mg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "pagebreak [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "separator"]]
	},
	vg = mg;
jn.default = vg;
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.default = void 0;
var bg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "page-list [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
	},
	hg = bg;
Bn.default = hg;
var Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.default = void 0;
var yg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{ concept: { name: "part [EPUB-SSV]" }, module: "EPUB" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	gg = yg;
Ln.default = gg;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.default = void 0;
var _g = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "preface [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Eg = _g;
kn.default = Eg;
var Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.default = void 0;
var Rg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "prologue [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark"]]
	},
	Cg = Rg;
Fn.default = Cg;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.default = void 0;
var Pg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: "pullquote [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["none"]]
	},
	wg = Pg;
Dn.default = wg;
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.default = void 0;
var qg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{ concept: { name: "qna [EPUB-SSV]" }, module: "EPUB" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section"]]
	},
	Tg = qg;
$n.default = Tg;
var Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.default = void 0;
var Og = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [
			{ concept: { name: "subtitle [EPUB-SSV]" }, module: "EPUB" }
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "sectionhead"]]
	},
	Mg = Og;
Un.default = Mg;
var Hn = {};
Object.defineProperty(Hn, "__esModule", { value: !0 });
Hn.default = void 0;
var Ag = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{ concept: { name: "help [EPUB-SSV]" }, module: "EPUB" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "note"]]
	},
	Sg = Ag;
Hn.default = Sg;
var Vn = {};
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.default = void 0;
var xg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ["author"],
		prohibitedProps: [],
		props: {
			"aria-disabled": null,
			"aria-errormessage": null,
			"aria-expanded": null,
			"aria-haspopup": null,
			"aria-invalid": null
		},
		relatedConcepts: [{ concept: { name: "toc [EPUB-SSV]" }, module: "EPUB" }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
	},
	Ng = xg;
Vn.default = Ng;
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.default = void 0;
var Ig = L(ln),
	jg = L(on),
	Bg = L(un),
	Lg = L(sn),
	kg = L(cn),
	Fg = L(dn),
	Dg = L(fn),
	$g = L(pn),
	Ug = L(mn),
	Hg = L(vn),
	Vg = L(bn),
	zg = L(hn),
	Wg = L(yn),
	Gg = L(gn),
	Qg = L(_n),
	Xg = L(En),
	Kg = L(Rn),
	Jg = L(Cn),
	Yg = L(Pn),
	Zg = L(wn),
	e_ = L(qn),
	t_ = L(Tn),
	r_ = L(On),
	a_ = L(Mn),
	n_ = L(An),
	l_ = L(Sn),
	o_ = L(xn),
	i_ = L(Nn),
	u_ = L(In),
	s_ = L(jn),
	c_ = L(Bn),
	d_ = L(Ln),
	f_ = L(kn),
	p_ = L(Fn),
	m_ = L(Dn),
	v_ = L($n),
	b_ = L(Un),
	h_ = L(Hn),
	y_ = L(Vn);
function L(e) {
	return e && e.__esModule ? e : { default: e };
}
var g_ = [
		["doc-abstract", Ig.default],
		["doc-acknowledgments", jg.default],
		["doc-afterword", Bg.default],
		["doc-appendix", Lg.default],
		["doc-backlink", kg.default],
		["doc-biblioentry", Fg.default],
		["doc-bibliography", Dg.default],
		["doc-biblioref", $g.default],
		["doc-chapter", Ug.default],
		["doc-colophon", Hg.default],
		["doc-conclusion", Vg.default],
		["doc-cover", zg.default],
		["doc-credit", Wg.default],
		["doc-credits", Gg.default],
		["doc-dedication", Qg.default],
		["doc-endnote", Xg.default],
		["doc-endnotes", Kg.default],
		["doc-epigraph", Jg.default],
		["doc-epilogue", Yg.default],
		["doc-errata", Zg.default],
		["doc-example", e_.default],
		["doc-footnote", t_.default],
		["doc-foreword", r_.default],
		["doc-glossary", a_.default],
		["doc-glossref", n_.default],
		["doc-index", l_.default],
		["doc-introduction", o_.default],
		["doc-noteref", i_.default],
		["doc-notice", u_.default],
		["doc-pagebreak", s_.default],
		["doc-pagelist", c_.default],
		["doc-part", d_.default],
		["doc-preface", f_.default],
		["doc-prologue", p_.default],
		["doc-pullquote", m_.default],
		["doc-qna", v_.default],
		["doc-subtitle", b_.default],
		["doc-tip", h_.default],
		["doc-toc", y_.default]
	],
	__ = g_;
nn.default = __;
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.default = void 0;
var E_ = Hl(br),
	R_ = Hl(Mr),
	C_ = Hl(nn);
function Hl(e) {
	return e && e.__esModule ? e : { default: e };
}
function P_(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (e[t] = r),
		e
	);
}
function Bo(e, t) {
	var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (!r) {
		if (
			Array.isArray(e) ||
			(r = Pu(e)) ||
			(t && e && typeof e.length == "number")
		) {
			r && (e = r);
			var a = 0,
				n = function () {};
			return {
				s: n,
				n: function () {
					return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
				},
				e: function (s) {
					throw s;
				},
				f: n
			};
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
	}
	var o = !0,
		l = !1,
		i;
	return {
		s: function () {
			r = r.call(e);
		},
		n: function () {
			var s = r.next();
			return (o = s.done), s;
		},
		e: function (s) {
			(l = !0), (i = s);
		},
		f: function () {
			try {
				!o && r.return != null && r.return();
			} finally {
				if (l) throw i;
			}
		}
	};
}
function or(e, t) {
	return T_(e) || q_(e, t) || Pu(e, t) || w_();
}
function w_() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pu(e, t) {
	if (e) {
		if (typeof e == "string") return Lo(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set")
		)
			return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return Lo(e, t);
	}
}
function Lo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
	return a;
}
function q_(e, t) {
	var r =
		e == null
			? null
			: (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r != null) {
		var a = [],
			n = !0,
			o = !1,
			l,
			i;
		try {
			for (
				r = r.call(e);
				!(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
				n = !0
			);
		} catch (u) {
			(o = !0), (i = u);
		} finally {
			try {
				!n && r.return != null && r.return();
			} finally {
				if (o) throw i;
			}
		}
		return a;
	}
}
function T_(e) {
	if (Array.isArray(e)) return e;
}
var nt = [].concat(E_.default, R_.default, C_.default);
nt.forEach(function (e) {
	var t = or(e, 2),
		r = t[1],
		a = Bo(r.superClass),
		n;
	try {
		for (a.s(); !(n = a.n()).done; ) {
			var o = n.value,
				l = Bo(o),
				i;
			try {
				var u = function () {
					var p = i.value,
						d = nt.find(function (R) {
							var E = or(R, 1),
								T = E[0];
							return T === p;
						});
					if (d)
						for (
							var m = d[1], v = 0, y = Object.keys(m.props);
							v < y.length;
							v++
						) {
							var f = y[v];
							Object.prototype.hasOwnProperty.call(r.props, f) ||
								Object.assign(r.props, P_({}, f, m.props[f]));
						}
				};
				for (l.s(); !(i = l.n()).done; ) u();
			} catch (s) {
				l.e(s);
			} finally {
				l.f();
			}
		}
	} catch (s) {
		a.e(s);
	} finally {
		a.f();
	}
});
var O_ = {
		entries: function () {
			return nt;
		},
		get: function (t) {
			var r = nt.find(function (a) {
				return a[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!this.get(t);
		},
		keys: function () {
			return nt.map(function (t) {
				var r = or(t, 1),
					a = r[0];
				return a;
			});
		},
		values: function () {
			return nt.map(function (t) {
				var r = or(t, 2),
					a = r[1];
				return a;
			});
		}
	},
	M_ = O_;
vt.default = M_;
var zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.default = void 0;
var wu = A_(vt);
function A_(e) {
	return e && e.__esModule ? e : { default: e };
}
function ko(e, t) {
	return I_(e) || N_(e, t) || x_(e, t) || S_();
}
function S_() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x_(e, t) {
	if (e) {
		if (typeof e == "string") return Fo(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set")
		)
			return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return Fo(e, t);
	}
}
function Fo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
	return a;
}
function N_(e, t) {
	var r =
		e == null
			? null
			: (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r != null) {
		var a = [],
			n = !0,
			o = !1,
			l,
			i;
		try {
			for (
				r = r.call(e);
				!(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
				n = !0
			);
		} catch (u) {
			(o = !0), (i = u);
		} finally {
			try {
				!n && r.return != null && r.return();
			} finally {
				if (o) throw i;
			}
		}
		return a;
	}
}
function I_(e) {
	if (Array.isArray(e)) return e;
}
var lt = [],
	Do = wu.default.keys();
for (var il = 0; il < Do.length; il++) {
	var ul = Do[il],
		sl = wu.default.get(ul);
	if (sl)
		for (
			var $o = [].concat(sl.baseConcepts, sl.relatedConcepts), cl = 0;
			cl < $o.length;
			cl++
		) {
			var Uo = $o[cl];
			if (Uo.module === "HTML") {
				var dl = Uo.concept;
				dl &&
					(function () {
						var e = JSON.stringify(dl),
							t = lt.find(function (o) {
								return JSON.stringify(o[0]) === e;
							}),
							r = void 0;
						t ? (r = t[1]) : (r = []);
						for (var a = !0, n = 0; n < r.length; n++)
							if (r[n] === ul) {
								a = !1;
								break;
							}
						a && r.push(ul), lt.push([dl, r]);
					})();
			}
		}
}
var j_ = {
		entries: function () {
			return lt;
		},
		get: function (t) {
			var r = lt.find(function (a) {
				return JSON.stringify(a[0]) === JSON.stringify(t);
			});
			return r && r[1];
		},
		has: function (t) {
			return !!this.get(t);
		},
		keys: function () {
			return lt.map(function (t) {
				var r = ko(t, 1),
					a = r[0];
				return a;
			});
		},
		values: function () {
			return lt.map(function (t) {
				var r = ko(t, 2),
					a = r[1];
				return a;
			});
		}
	},
	B_ = j_;
zn.default = B_;
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.default = void 0;
var qu = L_(vt);
function L_(e) {
	return e && e.__esModule ? e : { default: e };
}
function Ho(e, t) {
	return $_(e) || D_(e, t) || F_(e, t) || k_();
}
function k_() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F_(e, t) {
	if (e) {
		if (typeof e == "string") return Vo(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set")
		)
			return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return Vo(e, t);
	}
}
function Vo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
	return a;
}
function D_(e, t) {
	var r =
		e == null
			? null
			: (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r != null) {
		var a = [],
			n = !0,
			o = !1,
			l,
			i;
		try {
			for (
				r = r.call(e);
				!(n = (l = r.next()).done) && (a.push(l.value), !(t && a.length === t));
				n = !0
			);
		} catch (u) {
			(o = !0), (i = u);
		} finally {
			try {
				!n && r.return != null && r.return();
			} finally {
				if (o) throw i;
			}
		}
		return a;
	}
}
function $_(e) {
	if (Array.isArray(e)) return e;
}
var ot = [],
	Tu = qu.default.keys(),
	U_ = function (t) {
		var r = Tu[t],
			a = qu.default.get(r);
		if (a)
			for (
				var n = [].concat(a.baseConcepts, a.relatedConcepts), o = 0;
				o < n.length;
				o++
			) {
				var l = n[o];
				if (l.module === "HTML") {
					var i = l.concept;
					if (i) {
						var u = ot.find(function (p) {
								return p[0] === r;
							}),
							s = void 0;
						u ? (s = u[1]) : (s = []), s.push(i), ot.push([r, s]);
					}
				}
			}
	};
for (var fl = 0; fl < Tu.length; fl++) U_(fl);
var H_ = {
		entries: function () {
			return ot;
		},
		get: function (t) {
			var r = ot.find(function (a) {
				return a[0] === t;
			});
			return r && r[1];
		},
		has: function (t) {
			return !!this.get(t);
		},
		keys: function () {
			return ot.map(function (t) {
				var r = Ho(t, 1),
					a = r[0];
				return a;
			});
		},
		values: function () {
			return ot.map(function (t) {
				var r = Ho(t, 2),
					a = r[1];
				return a;
			});
		}
	},
	V_ = H_;
Wn.default = V_;
Object.defineProperty(ge, "__esModule", { value: !0 });
var Ou =
		(ge.roleElements =
		Mu =
		ge.elementRoles =
		at =
		ge.roles =
		ge.dom =
		ge.aria =
			void 0),
	z_ = xt(mr),
	W_ = xt(vr),
	G_ = xt(vt),
	Q_ = xt(zn),
	X_ = xt(Wn);
function xt(e) {
	return e && e.__esModule ? e : { default: e };
}
var K_ = z_.default;
ge.aria = K_;
var J_ = W_.default;
ge.dom = J_;
var Y_ = G_.default,
	at = (ge.roles = Y_),
	Z_ = Q_.default,
	Mu = (ge.elementRoles = Z_),
	eE = X_.default;
Ou = ge.roleElements = eE;
function zo(e, t, r, a, n, o, l) {
	try {
		var i = e[o](l),
			u = i.value;
	} catch (s) {
		r(s);
		return;
	}
	i.done ? t(u) : Promise.resolve(u).then(a, n);
}
function gl(e) {
	return function () {
		var t = this,
			r = arguments;
		return new Promise(function (a, n) {
			var o = e.apply(t, r);
			function l(u) {
				zo(o, a, n, l, i, "next", u);
			}
			function i(u) {
				zo(o, a, n, l, i, "throw", u);
			}
			l(void 0);
		});
	};
}
var _l = {},
	tE = {
		get exports() {
			return _l;
		},
		set exports(e) {
			_l = e;
		}
	},
	El = {},
	rE = {
		get exports() {
			return El;
		},
		set exports(e) {
			El = e;
		}
	};
(function (e) {
	var t = (function (r) {
		var a = Object.prototype,
			n = a.hasOwnProperty,
			o,
			l = typeof Symbol == "function" ? Symbol : {},
			i = l.iterator || "@@iterator",
			u = l.asyncIterator || "@@asyncIterator",
			s = l.toStringTag || "@@toStringTag";
		function p(_, h, C) {
			return (
				Object.defineProperty(_, h, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}),
				_[h]
			);
		}
		try {
			p({}, "");
		} catch {
			p = function (h, C, N) {
				return (h[C] = N);
			};
		}
		function d(_, h, C, N) {
			var M = h && h.prototype instanceof T ? h : T,
				D = Object.create(M.prototype),
				te = new K(N || []);
			return (D._invoke = ie(_, C, te)), D;
		}
		r.wrap = d;
		function m(_, h, C) {
			try {
				return { type: "normal", arg: _.call(h, C) };
			} catch (N) {
				return { type: "throw", arg: N };
			}
		}
		var v = "suspendedStart",
			y = "suspendedYield",
			f = "executing",
			R = "completed",
			E = {};
		function T() {}
		function O() {}
		function A() {}
		var S = {};
		p(S, i, function () {
			return this;
		});
		var b = Object.getPrototypeOf,
			w = b && b(b(ue([])));
		w && w !== a && n.call(w, i) && (S = w);
		var q = (A.prototype = T.prototype = Object.create(S));
		(O.prototype = A),
			p(q, "constructor", A),
			p(A, "constructor", O),
			(O.displayName = p(A, s, "GeneratorFunction"));
		function z(_) {
			["next", "throw", "return"].forEach(function (h) {
				p(_, h, function (C) {
					return this._invoke(h, C);
				});
			});
		}
		(r.isGeneratorFunction = function (_) {
			var h = typeof _ == "function" && _.constructor;
			return h
				? h === O || (h.displayName || h.name) === "GeneratorFunction"
				: !1;
		}),
			(r.mark = function (_) {
				return (
					Object.setPrototypeOf
						? Object.setPrototypeOf(_, A)
						: ((_.__proto__ = A), p(_, s, "GeneratorFunction")),
					(_.prototype = Object.create(q)),
					_
				);
			}),
			(r.awrap = function (_) {
				return { __await: _ };
			});
		function c(_, h) {
			function C(D, te, se, me) {
				var ce = m(_[D], _, te);
				if (ce.type === "throw") me(ce.arg);
				else {
					var tl = ce.arg,
						ht = tl.value;
					return ht && typeof ht == "object" && n.call(ht, "__await")
						? h.resolve(ht.__await).then(
								function (Ge) {
									C("next", Ge, se, me);
								},
								function (Ge) {
									C("throw", Ge, se, me);
								}
						  )
						: h.resolve(ht).then(
								function (Ge) {
									(tl.value = Ge), se(tl);
								},
								function (Ge) {
									return C("throw", Ge, se, me);
								}
						  );
				}
			}
			var N;
			function M(D, te) {
				function se() {
					return new h(function (me, ce) {
						C(D, te, me, ce);
					});
				}
				return (N = N ? N.then(se, se) : se());
			}
			this._invoke = M;
		}
		z(c.prototype),
			p(c.prototype, u, function () {
				return this;
			}),
			(r.AsyncIterator = c),
			(r.async = function (_, h, C, N, M) {
				M === void 0 && (M = Promise);
				var D = new c(d(_, h, C, N), M);
				return r.isGeneratorFunction(h)
					? D
					: D.next().then(function (te) {
							return te.done ? te.value : D.next();
					  });
			});
		function ie(_, h, C) {
			var N = v;
			return function (D, te) {
				if (N === f) throw new Error("Generator is already running");
				if (N === R) {
					if (D === "throw") throw te;
					return x();
				}
				for (C.method = D, C.arg = te; ; ) {
					var se = C.delegate;
					if (se) {
						var me = pe(se, C);
						if (me) {
							if (me === E) continue;
							return me;
						}
					}
					if (C.method === "next") C.sent = C._sent = C.arg;
					else if (C.method === "throw") {
						if (N === v) throw ((N = R), C.arg);
						C.dispatchException(C.arg);
					} else C.method === "return" && C.abrupt("return", C.arg);
					N = f;
					var ce = m(_, h, C);
					if (ce.type === "normal") {
						if (((N = C.done ? R : y), ce.arg === E)) continue;
						return { value: ce.arg, done: C.done };
					} else
						ce.type === "throw" &&
							((N = R), (C.method = "throw"), (C.arg = ce.arg));
				}
			};
		}
		function pe(_, h) {
			var C = _.iterator[h.method];
			if (C === o) {
				if (((h.delegate = null), h.method === "throw")) {
					if (
						_.iterator.return &&
						((h.method = "return"), (h.arg = o), pe(_, h), h.method === "throw")
					)
						return E;
					(h.method = "throw"),
						(h.arg = new TypeError(
							"The iterator does not provide a 'throw' method"
						));
				}
				return E;
			}
			var N = m(C, _.iterator, h.arg);
			if (N.type === "throw")
				return (h.method = "throw"), (h.arg = N.arg), (h.delegate = null), E;
			var M = N.arg;
			if (!M)
				return (
					(h.method = "throw"),
					(h.arg = new TypeError("iterator result is not an object")),
					(h.delegate = null),
					E
				);
			if (M.done)
				(h[_.resultName] = M.value),
					(h.next = _.nextLoc),
					h.method !== "return" && ((h.method = "next"), (h.arg = o));
			else return M;
			return (h.delegate = null), E;
		}
		z(q),
			p(q, s, "Generator"),
			p(q, i, function () {
				return this;
			}),
			p(q, "toString", function () {
				return "[object Generator]";
			});
		function F(_) {
			var h = { tryLoc: _[0] };
			1 in _ && (h.catchLoc = _[1]),
				2 in _ && ((h.finallyLoc = _[2]), (h.afterLoc = _[3])),
				this.tryEntries.push(h);
		}
		function oe(_) {
			var h = _.completion || {};
			(h.type = "normal"), delete h.arg, (_.completion = h);
		}
		function K(_) {
			(this.tryEntries = [{ tryLoc: "root" }]),
				_.forEach(F, this),
				this.reset(!0);
		}
		r.keys = function (_) {
			var h = [];
			for (var C in _) h.push(C);
			return (
				h.reverse(),
				function N() {
					for (; h.length; ) {
						var M = h.pop();
						if (M in _) return (N.value = M), (N.done = !1), N;
					}
					return (N.done = !0), N;
				}
			);
		};
		function ue(_) {
			if (_) {
				var h = _[i];
				if (h) return h.call(_);
				if (typeof _.next == "function") return _;
				if (!isNaN(_.length)) {
					var C = -1,
						N = function M() {
							for (; ++C < _.length; )
								if (n.call(_, C)) return (M.value = _[C]), (M.done = !1), M;
							return (M.value = o), (M.done = !0), M;
						};
					return (N.next = N);
				}
			}
			return { next: x };
		}
		r.values = ue;
		function x() {
			return { value: o, done: !0 };
		}
		return (
			(K.prototype = {
				constructor: K,
				reset: function (_) {
					if (
						((this.prev = 0),
						(this.next = 0),
						(this.sent = this._sent = o),
						(this.done = !1),
						(this.delegate = null),
						(this.method = "next"),
						(this.arg = o),
						this.tryEntries.forEach(oe),
						!_)
					)
						for (var h in this)
							h.charAt(0) === "t" &&
								n.call(this, h) &&
								!isNaN(+h.slice(1)) &&
								(this[h] = o);
				},
				stop: function () {
					this.done = !0;
					var _ = this.tryEntries[0],
						h = _.completion;
					if (h.type === "throw") throw h.arg;
					return this.rval;
				},
				dispatchException: function (_) {
					if (this.done) throw _;
					var h = this;
					function C(me, ce) {
						return (
							(D.type = "throw"),
							(D.arg = _),
							(h.next = me),
							ce && ((h.method = "next"), (h.arg = o)),
							!!ce
						);
					}
					for (var N = this.tryEntries.length - 1; N >= 0; --N) {
						var M = this.tryEntries[N],
							D = M.completion;
						if (M.tryLoc === "root") return C("end");
						if (M.tryLoc <= this.prev) {
							var te = n.call(M, "catchLoc"),
								se = n.call(M, "finallyLoc");
							if (te && se) {
								if (this.prev < M.catchLoc) return C(M.catchLoc, !0);
								if (this.prev < M.finallyLoc) return C(M.finallyLoc);
							} else if (te) {
								if (this.prev < M.catchLoc) return C(M.catchLoc, !0);
							} else if (se) {
								if (this.prev < M.finallyLoc) return C(M.finallyLoc);
							} else throw new Error("try statement without catch or finally");
						}
					}
				},
				abrupt: function (_, h) {
					for (var C = this.tryEntries.length - 1; C >= 0; --C) {
						var N = this.tryEntries[C];
						if (
							N.tryLoc <= this.prev &&
							n.call(N, "finallyLoc") &&
							this.prev < N.finallyLoc
						) {
							var M = N;
							break;
						}
					}
					M &&
						(_ === "break" || _ === "continue") &&
						M.tryLoc <= h &&
						h <= M.finallyLoc &&
						(M = null);
					var D = M ? M.completion : {};
					return (
						(D.type = _),
						(D.arg = h),
						M
							? ((this.method = "next"), (this.next = M.finallyLoc), E)
							: this.complete(D)
					);
				},
				complete: function (_, h) {
					if (_.type === "throw") throw _.arg;
					return (
						_.type === "break" || _.type === "continue"
							? (this.next = _.arg)
							: _.type === "return"
							? ((this.rval = this.arg = _.arg),
							  (this.method = "return"),
							  (this.next = "end"))
							: _.type === "normal" && h && (this.next = h),
						E
					);
				},
				finish: function (_) {
					for (var h = this.tryEntries.length - 1; h >= 0; --h) {
						var C = this.tryEntries[h];
						if (C.finallyLoc === _)
							return this.complete(C.completion, C.afterLoc), oe(C), E;
					}
				},
				catch: function (_) {
					for (var h = this.tryEntries.length - 1; h >= 0; --h) {
						var C = this.tryEntries[h];
						if (C.tryLoc === _) {
							var N = C.completion;
							if (N.type === "throw") {
								var M = N.arg;
								oe(C);
							}
							return M;
						}
					}
					throw new Error("illegal catch attempt");
				},
				delegateYield: function (_, h, C) {
					return (
						(this.delegate = { iterator: ue(_), resultName: h, nextLoc: C }),
						this.method === "next" && (this.arg = o),
						E
					);
				}
			}),
			r
		);
	})(e.exports);
	try {
		regeneratorRuntime = t;
	} catch {
		typeof globalThis == "object"
			? (globalThis.regeneratorRuntime = t)
			: Function("r", "regeneratorRuntime = r")(t);
	}
})(rE);
(function (e) {
	e.exports = El;
})(tE);
const it = ac(_l);
var Rl = {},
	aE = {
		get exports() {
			return Rl;
		},
		set exports(e) {
			Rl = e;
		}
	};
(function (e) {
	var t = (function () {
		var r = String.fromCharCode,
			a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
			o = {};
		function l(u, s) {
			if (!o[u]) {
				o[u] = {};
				for (var p = 0; p < u.length; p++) o[u][u.charAt(p)] = p;
			}
			return o[u][s];
		}
		var i = {
			compressToBase64: function (u) {
				if (u == null) return "";
				var s = i._compress(u, 6, function (p) {
					return a.charAt(p);
				});
				switch (s.length % 4) {
					default:
					case 0:
						return s;
					case 1:
						return s + "===";
					case 2:
						return s + "==";
					case 3:
						return s + "=";
				}
			},
			decompressFromBase64: function (u) {
				return u == null
					? ""
					: u == ""
					? null
					: i._decompress(u.length, 32, function (s) {
							return l(a, u.charAt(s));
					  });
			},
			compressToUTF16: function (u) {
				return u == null
					? ""
					: i._compress(u, 15, function (s) {
							return r(s + 32);
					  }) + " ";
			},
			decompressFromUTF16: function (u) {
				return u == null
					? ""
					: u == ""
					? null
					: i._decompress(u.length, 16384, function (s) {
							return u.charCodeAt(s) - 32;
					  });
			},
			compressToUint8Array: function (u) {
				for (
					var s = i.compress(u),
						p = new Uint8Array(s.length * 2),
						d = 0,
						m = s.length;
					d < m;
					d++
				) {
					var v = s.charCodeAt(d);
					(p[d * 2] = v >>> 8), (p[d * 2 + 1] = v % 256);
				}
				return p;
			},
			decompressFromUint8Array: function (u) {
				if (u == null) return i.decompress(u);
				for (var s = new Array(u.length / 2), p = 0, d = s.length; p < d; p++)
					s[p] = u[p * 2] * 256 + u[p * 2 + 1];
				var m = [];
				return (
					s.forEach(function (v) {
						m.push(r(v));
					}),
					i.decompress(m.join(""))
				);
			},
			compressToEncodedURIComponent: function (u) {
				return u == null
					? ""
					: i._compress(u, 6, function (s) {
							return n.charAt(s);
					  });
			},
			decompressFromEncodedURIComponent: function (u) {
				return u == null
					? ""
					: u == ""
					? null
					: ((u = u.replace(/ /g, "+")),
					  i._decompress(u.length, 32, function (s) {
							return l(n, u.charAt(s));
					  }));
			},
			compress: function (u) {
				return i._compress(u, 16, function (s) {
					return r(s);
				});
			},
			_compress: function (u, s, p) {
				if (u == null) return "";
				var d,
					m,
					v = {},
					y = {},
					f = "",
					R = "",
					E = "",
					T = 2,
					O = 3,
					A = 2,
					S = [],
					b = 0,
					w = 0,
					q;
				for (q = 0; q < u.length; q += 1)
					if (
						((f = u.charAt(q)),
						Object.prototype.hasOwnProperty.call(v, f) ||
							((v[f] = O++), (y[f] = !0)),
						(R = E + f),
						Object.prototype.hasOwnProperty.call(v, R))
					)
						E = R;
					else {
						if (Object.prototype.hasOwnProperty.call(y, E)) {
							if (E.charCodeAt(0) < 256) {
								for (d = 0; d < A; d++)
									(b = b << 1),
										w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++;
								for (m = E.charCodeAt(0), d = 0; d < 8; d++)
									(b = (b << 1) | (m & 1)),
										w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
										(m = m >> 1);
							} else {
								for (m = 1, d = 0; d < A; d++)
									(b = (b << 1) | m),
										w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
										(m = 0);
								for (m = E.charCodeAt(0), d = 0; d < 16; d++)
									(b = (b << 1) | (m & 1)),
										w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
										(m = m >> 1);
							}
							T--, T == 0 && ((T = Math.pow(2, A)), A++), delete y[E];
						} else
							for (m = v[E], d = 0; d < A; d++)
								(b = (b << 1) | (m & 1)),
									w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
									(m = m >> 1);
						T--,
							T == 0 && ((T = Math.pow(2, A)), A++),
							(v[R] = O++),
							(E = String(f));
					}
				if (E !== "") {
					if (Object.prototype.hasOwnProperty.call(y, E)) {
						if (E.charCodeAt(0) < 256) {
							for (d = 0; d < A; d++)
								(b = b << 1),
									w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++;
							for (m = E.charCodeAt(0), d = 0; d < 8; d++)
								(b = (b << 1) | (m & 1)),
									w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
									(m = m >> 1);
						} else {
							for (m = 1, d = 0; d < A; d++)
								(b = (b << 1) | m),
									w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
									(m = 0);
							for (m = E.charCodeAt(0), d = 0; d < 16; d++)
								(b = (b << 1) | (m & 1)),
									w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
									(m = m >> 1);
						}
						T--, T == 0 && ((T = Math.pow(2, A)), A++), delete y[E];
					} else
						for (m = v[E], d = 0; d < A; d++)
							(b = (b << 1) | (m & 1)),
								w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
								(m = m >> 1);
					T--, T == 0 && ((T = Math.pow(2, A)), A++);
				}
				for (m = 2, d = 0; d < A; d++)
					(b = (b << 1) | (m & 1)),
						w == s - 1 ? ((w = 0), S.push(p(b)), (b = 0)) : w++,
						(m = m >> 1);
				for (;;)
					if (((b = b << 1), w == s - 1)) {
						S.push(p(b));
						break;
					} else w++;
				return S.join("");
			},
			decompress: function (u) {
				return u == null
					? ""
					: u == ""
					? null
					: i._decompress(u.length, 32768, function (s) {
							return u.charCodeAt(s);
					  });
			},
			_decompress: function (u, s, p) {
				var d = [],
					m = 4,
					v = 4,
					y = 3,
					f = "",
					R = [],
					E,
					T,
					O,
					A,
					S,
					b,
					w,
					q = { val: p(0), position: s, index: 1 };
				for (E = 0; E < 3; E += 1) d[E] = E;
				for (O = 0, S = Math.pow(2, 2), b = 1; b != S; )
					(A = q.val & q.position),
						(q.position >>= 1),
						q.position == 0 && ((q.position = s), (q.val = p(q.index++))),
						(O |= (A > 0 ? 1 : 0) * b),
						(b <<= 1);
				switch (O) {
					case 0:
						for (O = 0, S = Math.pow(2, 8), b = 1; b != S; )
							(A = q.val & q.position),
								(q.position >>= 1),
								q.position == 0 && ((q.position = s), (q.val = p(q.index++))),
								(O |= (A > 0 ? 1 : 0) * b),
								(b <<= 1);
						w = r(O);
						break;
					case 1:
						for (O = 0, S = Math.pow(2, 16), b = 1; b != S; )
							(A = q.val & q.position),
								(q.position >>= 1),
								q.position == 0 && ((q.position = s), (q.val = p(q.index++))),
								(O |= (A > 0 ? 1 : 0) * b),
								(b <<= 1);
						w = r(O);
						break;
					case 2:
						return "";
				}
				for (d[3] = w, T = w, R.push(w); ; ) {
					if (q.index > u) return "";
					for (O = 0, S = Math.pow(2, y), b = 1; b != S; )
						(A = q.val & q.position),
							(q.position >>= 1),
							q.position == 0 && ((q.position = s), (q.val = p(q.index++))),
							(O |= (A > 0 ? 1 : 0) * b),
							(b <<= 1);
					switch ((w = O)) {
						case 0:
							for (O = 0, S = Math.pow(2, 8), b = 1; b != S; )
								(A = q.val & q.position),
									(q.position >>= 1),
									q.position == 0 && ((q.position = s), (q.val = p(q.index++))),
									(O |= (A > 0 ? 1 : 0) * b),
									(b <<= 1);
							(d[v++] = r(O)), (w = v - 1), m--;
							break;
						case 1:
							for (O = 0, S = Math.pow(2, 16), b = 1; b != S; )
								(A = q.val & q.position),
									(q.position >>= 1),
									q.position == 0 && ((q.position = s), (q.val = p(q.index++))),
									(O |= (A > 0 ? 1 : 0) * b),
									(b <<= 1);
							(d[v++] = r(O)), (w = v - 1), m--;
							break;
						case 2:
							return R.join("");
					}
					if ((m == 0 && ((m = Math.pow(2, y)), y++), d[w])) f = d[w];
					else if (w === v) f = T + T.charAt(0);
					else return null;
					R.push(f),
						(d[v++] = T + f.charAt(0)),
						m--,
						(T = f),
						m == 0 && ((m = Math.pow(2, y)), y++);
				}
			}
		};
		return i;
	})();
	e != null && (e.exports = t);
})(aE);
function Au(e) {
	return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var nE = function (t, r, a, n, o, l, i) {
		var u = n + a.indent,
			s = a.colors;
		return t
			.map(function (p) {
				var d = r[p],
					m = i(d, a, u, o, l);
				return (
					typeof d != "string" &&
						(m.indexOf(`
`) !== -1 && (m = a.spacingOuter + u + m + a.spacingOuter + n),
						(m = "{" + m + "}")),
					a.spacingInner +
						n +
						s.prop.open +
						p +
						s.prop.close +
						"=" +
						s.value.open +
						m +
						s.value.close
				);
			})
			.join("");
	},
	lE = 3,
	oE = function (t, r, a, n, o, l) {
		return t
			.map(function (i) {
				var u = typeof i == "string" ? Su(i, r) : l(i, r, a, n, o);
				return u === "" &&
					typeof i == "object" &&
					i !== null &&
					i.nodeType !== lE
					? ""
					: r.spacingOuter + a + u;
			})
			.join("");
	},
	Su = function (t, r) {
		var a = r.colors.content;
		return a.open + Au(t) + a.close;
	},
	iE = function (t, r) {
		var a = r.colors.comment;
		return a.open + "<!--" + Au(t) + "-->" + a.close;
	},
	uE = function (t, r, a, n, o) {
		var l = n.colors.tag;
		return (
			l.open +
			"<" +
			t +
			(r && l.close + r + n.spacingOuter + o + l.open) +
			(a
				? ">" + l.close + a + n.spacingOuter + o + l.open + "</" + t
				: (r && !n.min ? "" : " ") + "/") +
			">" +
			l.close
		);
	},
	sE = function (t, r) {
		var a = r.colors.tag;
		return a.open + "<" + t + a.close + " …" + a.open + " />" + a.close;
	},
	cE = 1,
	xu = 3,
	Nu = 8,
	Iu = 11,
	dE = /^((HTML|SVG)\w*)?Element$/,
	fE = function (t) {
		var r = t.constructor.name,
			a = t.nodeType,
			n = t.tagName,
			o =
				(typeof n == "string" && n.includes("-")) ||
				(typeof t.hasAttribute == "function" && t.hasAttribute("is"));
		return (
			(a === cE && (dE.test(r) || o)) ||
			(a === xu && r === "Text") ||
			(a === Nu && r === "Comment") ||
			(a === Iu && r === "DocumentFragment")
		);
	};
function pE(e) {
	return e.nodeType === xu;
}
function mE(e) {
	return e.nodeType === Nu;
}
function pl(e) {
	return e.nodeType === Iu;
}
function vE(e) {
	return {
		test: function (r) {
			var a;
			return (
				(r == null || (a = r.constructor) == null ? void 0 : a.name) && fE(r)
			);
		},
		serialize: function (r, a, n, o, l, i) {
			if (pE(r)) return Su(r.data, a);
			if (mE(r)) return iE(r.data, a);
			var u = pl(r) ? "DocumentFragment" : r.tagName.toLowerCase();
			return ++o > a.maxDepth
				? sE(u, a)
				: uE(
						u,
						nE(
							pl(r)
								? []
								: Array.from(r.attributes)
										.map(function (s) {
											return s.name;
										})
										.sort(),
							pl(r)
								? {}
								: Array.from(r.attributes).reduce(function (s, p) {
										return (s[p.name] = p.value), s;
								  }, {}),
							a,
							n + a.indent,
							o,
							l,
							i
						),
						oE(
							Array.prototype.slice.call(r.childNodes || r.children).filter(e),
							a,
							n + a.indent,
							o,
							l,
							i
						),
						a,
						n
				  );
		}
	};
}
var ju = null,
	Vl = null,
	zl = null;
try {
	var ml = module && module.require;
	(Vl = ml.call(module, "fs").readFileSync),
		(zl = ml.call(module, "@babel/code-frame").codeFrameColumns),
		(ju = ml.call(module, "chalk"));
} catch {}
function bE(e) {
	var t = e.indexOf("(") + 1,
		r = e.indexOf(")"),
		a = e.slice(t, r),
		n = a.split(":"),
		o = [n[0], parseInt(n[1], 10), parseInt(n[2], 10)],
		l = o[0],
		i = o[1],
		u = o[2],
		s = "";
	try {
		s = Vl(l, "utf-8");
	} catch {
		return "";
	}
	var p = zl(
		s,
		{ start: { line: i, column: u } },
		{ highlightCode: !0, linesBelow: 0 }
	);
	return (
		ju.dim(a) +
		`
` +
		p +
		`
`
	);
}
function hE() {
	if (!Vl || !zl) return "";
	var e = new Error(),
		t = e.stack
			.split(
				`
`
			)
			.slice(1)
			.find(function (r) {
				return !r.includes("node_modules/");
			});
	return bE(t);
}
var Bu = 3;
function vl() {
	return typeof jest < "u" && jest !== null
		? setTimeout._isMockFunction === !0 ||
				Object.prototype.hasOwnProperty.call(setTimeout, "clock")
		: !1;
}
function Wl() {
	if (typeof window > "u") throw new Error("Could not find default container");
	return window.document;
}
function Lu(e) {
	if (e.defaultView) return e.defaultView;
	if (e.ownerDocument && e.ownerDocument.defaultView)
		return e.ownerDocument.defaultView;
	if (e.window) return e.window;
	throw e.ownerDocument && e.ownerDocument.defaultView === null
		? new Error(
				"It looks like the window object is not available for the provided node."
		  )
		: e.then instanceof Function
		? new Error(
				"It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
		  )
		: Array.isArray(e)
		? new Error(
				"It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
		  )
		: typeof e.debug == "function" &&
		  typeof e.logTestingPlaygroundURL == "function"
		? new Error(
				"It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
		  )
		: new Error(
				"The given node is not an Element, the node type is: " + typeof e + "."
		  );
}
function Te(e) {
	if (
		!e ||
		typeof e.querySelector != "function" ||
		typeof e.querySelectorAll != "function"
	)
		throw new TypeError(
			"Expected container to be an Element, a Document or a DocumentFragment but got " +
				t(e) +
				"."
		);
	function t(r) {
		return typeof r == "object"
			? r === null
				? "null"
				: r.constructor.name
			: typeof r;
	}
}
var Gl = "script, style",
	yE = ["filterNode"],
	gE = function () {
		return (
			typeof process < "u" &&
			process.versions !== void 0 &&
			process.versions.node !== void 0
		);
	},
	_E = Dl.DOMCollection,
	EE = 1,
	RE = 8;
function CE(e) {
	return e.nodeType !== RE && (e.nodeType !== EE || !e.matches(Gl));
}
function Et(e, t, r) {
	if (
		(r === void 0 && (r = {}),
		e || (e = Wl().body),
		typeof t != "number" &&
			(t = (typeof process < "u" && {}.DEBUG_PRINT_LIMIT) || 7e3),
		t === 0)
	)
		return "";
	e.documentElement && (e = e.documentElement);
	var a = typeof e;
	if (
		(a === "object" ? (a = e.constructor.name) : (e = {}), !("outerHTML" in e))
	)
		throw new TypeError("Expected an element or document but got " + a);
	var n = r,
		o = n.filterNode,
		l = o === void 0 ? CE : o,
		i = bl(n, yE),
		u = ou(
			e,
			Ce({ plugins: [vE(l), _E], printFunctionName: !1, highlight: gE() }, i)
		);
	return t !== void 0 && e.outerHTML.length > t ? u.slice(0, t) + "..." : u;
}
var Cl = function () {
		var t = hE();
		console.log(
			t
				? Et.apply(void 0, arguments) +
						`

` +
						t
				: Et.apply(void 0, arguments)
		);
	},
	ut = {
		testIdAttribute: "data-testid",
		asyncUtilTimeout: 1e3,
		asyncWrapper: function (t) {
			return t();
		},
		unstable_advanceTimersWrapper: function (t) {
			return t();
		},
		eventWrapper: function (t) {
			return t();
		},
		defaultHidden: !1,
		showOriginalStackTrace: !1,
		throwSuggestions: !1,
		getElementError: function (t, r) {
			var a = Et(r),
				n = new Error(
					[
						t,
						`Ignored nodes: comments, <script />, <style />
` + a
					].filter(Boolean).join(`

`)
				);
			return (n.name = "TestingLibraryElementError"), n;
		},
		_disableExpensiveErrorDiagnostics: !1,
		computedStyleSupportsPseudoElements: !1
	};
function PE(e) {
	try {
		return (ut._disableExpensiveErrorDiagnostics = !0), e();
	} finally {
		ut._disableExpensiveErrorDiagnostics = !1;
	}
}
function wE(e) {
	typeof e == "function" && (e = e(ut)), (ut = Ce({}, ut, e));
}
function W() {
	return ut;
}
var qE = [
	"button",
	"meter",
	"output",
	"progress",
	"select",
	"textarea",
	"input"
];
function ku(e) {
	return qE.includes(e.nodeName.toLowerCase())
		? ""
		: e.nodeType === Bu
		? e.textContent
		: Array.from(e.childNodes)
				.map(function (t) {
					return ku(t);
				})
				.join("");
}
function Pl(e) {
	var t;
	return (
		e.tagName.toLowerCase() === "label"
			? (t = ku(e))
			: (t = e.value || e.textContent),
		t
	);
}
function Fu(e) {
	if (e.labels !== void 0) {
		var t;
		return (t = e.labels) != null ? t : [];
	}
	if (!TE(e)) return [];
	var r = e.ownerDocument.querySelectorAll("label");
	return Array.from(r).filter(function (a) {
		return a.control === e;
	});
}
function TE(e) {
	return (
		/BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
		(e.tagName === "INPUT" && e.getAttribute("type") !== "hidden")
	);
}
function Du(e, t, r) {
	var a = r === void 0 ? {} : r,
		n = a.selector,
		o = n === void 0 ? "*" : n,
		l = t.getAttribute("aria-labelledby"),
		i = l ? l.split(" ") : [];
	return i.length
		? i.map(function (u) {
				var s = e.querySelector('[id="' + u + '"]');
				return s
					? { content: Pl(s), formControl: null }
					: { content: "", formControl: null };
		  })
		: Array.from(Fu(t)).map(function (u) {
				var s = Pl(u),
					p = "button, input, meter, output, progress, select, textarea",
					d = Array.from(u.querySelectorAll(p)).filter(function (m) {
						return m.matches(o);
					})[0];
				return { content: s, formControl: d };
		  });
}
function $u(e) {
	if (e == null)
		throw new Error(
			"It looks like " +
				e +
				" was passed instead of a matcher. Did you do something like getByText(" +
				e +
				")?"
		);
}
function Je(e, t, r, a) {
	if (typeof e != "string") return !1;
	$u(r);
	var n = a(e);
	return typeof r == "string" || typeof r == "number"
		? n.toLowerCase().includes(r.toString().toLowerCase())
		: typeof r == "function"
		? r(n, t)
		: r.test(n);
}
function He(e, t, r, a) {
	if (typeof e != "string") return !1;
	$u(r);
	var n = a(e);
	return r instanceof Function
		? r(n, t)
		: r instanceof RegExp
		? r.test(n)
		: n === String(r);
}
function Ql(e) {
	var t = e === void 0 ? {} : e,
		r = t.trim,
		a = r === void 0 ? !0 : r,
		n = t.collapseWhitespace,
		o = n === void 0 ? !0 : n;
	return function (l) {
		var i = l;
		return (i = a ? i.trim() : i), (i = o ? i.replace(/\s+/g, " ") : i), i;
	};
}
function Ye(e) {
	var t = e.trim,
		r = e.collapseWhitespace,
		a = e.normalizer;
	if (a) {
		if (typeof t < "u" || typeof r < "u")
			throw new Error(
				'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
			);
		return a;
	} else return Ql({ trim: t, collapseWhitespace: r });
}
function Nt(e) {
	return e.matches("input[type=submit], input[type=button], input[type=reset]")
		? e.value
		: Array.from(e.childNodes)
				.filter(function (t) {
					return t.nodeType === Bu && !!t.textContent;
				})
				.map(function (t) {
					return t.textContent;
				})
				.join("");
}
function Uu(e, t) {
	var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
	if (r) return (r = r.call(e)).next.bind(r);
	if (
		Array.isArray(e) ||
		(r = OE(e)) ||
		(t && e && typeof e.length == "number")
	) {
		r && (e = r);
		var a = 0;
		return function () {
			return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
		};
	}
	throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OE(e, t) {
	if (e) {
		if (typeof e == "string") return Wo(e, t);
		var r = Object.prototype.toString.call(e).slice(8, -1);
		if (
			(r === "Object" && e.constructor && (r = e.constructor.name),
			r === "Map" || r === "Set")
		)
			return Array.from(e);
		if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
			return Wo(e, t);
	}
}
function Wo(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
	return a;
}
var ME = AE(Mu);
function Hu(e) {
	if (e.hidden === !0 || e.getAttribute("aria-hidden") === "true") return !0;
	var t = e.ownerDocument.defaultView;
	return t.getComputedStyle(e).display === "none";
}
function Gn(e, t) {
	t === void 0 && (t = {});
	var r = t,
		a = r.isSubtreeInaccessible,
		n = a === void 0 ? Hu : a,
		o = e.ownerDocument.defaultView;
	if (o.getComputedStyle(e).visibility === "hidden") return !0;
	for (var l = e; l; ) {
		if (n(l)) return !0;
		l = l.parentElement;
	}
	return !1;
}
function Xl(e) {
	for (var t = Uu(ME), r; !(r = t()).done; ) {
		var a = r.value,
			n = a.match,
			o = a.roles;
		if (n(e)) return [].concat(o);
	}
	return [];
}
function AE(e) {
	function t(d) {
		var m = d.name,
			v = d.attributes;
		return (
			"" +
			m +
			v
				.map(function (y) {
					var f = y.name,
						R = y.value,
						E = y.constraints,
						T = E === void 0 ? [] : E,
						O = T.indexOf("undefined") !== -1;
					return O
						? ":not([" + f + "])"
						: R
						? "[" + f + '="' + R + '"]'
						: "[" + f + "]";
				})
				.join("")
		);
	}
	function r(d) {
		var m = d.attributes,
			v = m === void 0 ? [] : m;
		return v.length;
	}
	function a(d, m) {
		var v = d.specificity,
			y = m.specificity;
		return y - v;
	}
	function n(d) {
		return function (m) {
			var v = d.attributes,
				y = v === void 0 ? [] : v,
				f = y.findIndex(function (R) {
					return R.value && R.name === "type" && R.value === "text";
				});
			return f >= 0 &&
				((y = [].concat(y.slice(0, f), y.slice(f + 1))), m.type !== "text")
				? !1
				: m.matches(t(Ce({}, d, { attributes: y })));
		};
	}
	for (var o = [], l = Uu(e.entries()), i; !(i = l()).done; ) {
		var u = i.value,
			s = u[0],
			p = u[1];
		o = [].concat(o, [
			{ match: n(s), roles: Array.from(p), specificity: r(s) }
		]);
	}
	return o.sort(a);
}
function Vu(e, t) {
	var r = t === void 0 ? {} : t,
		a = r.hidden,
		n = a === void 0 ? !1 : a;
	function o(l) {
		return [l].concat(
			Array.from(l.children).reduce(function (i, u) {
				return [].concat(i, o(u));
			}, [])
		);
	}
	return o(e)
		.filter(function (l) {
			return n === !1 ? Gn(l) === !1 : !0;
		})
		.reduce(function (l, i) {
			var u = [];
			return (
				i.hasAttribute("role")
					? (u = i.getAttribute("role").split(" ").slice(0, 1))
					: (u = Xl(i)),
				u.reduce(function (s, p) {
					var d, m;
					return Array.isArray(s[p])
						? Ce({}, s, ((d = {}), (d[p] = [].concat(s[p], [i])), d))
						: Ce({}, s, ((m = {}), (m[p] = [i]), m));
				}, l)
			);
		}, {});
}
function zu(e, t) {
	var r = t.hidden,
		a = Vu(e, { hidden: r });
	return Object.entries(a)
		.filter(function (n) {
			var o = n[0];
			return o !== "generic";
		})
		.map(function (n) {
			var o = n[0],
				l = n[1],
				i = "-".repeat(50),
				u = l.map(function (s) {
					var p =
							'Name "' +
							Ul(s, {
								computedStyleSupportsPseudoElements:
									W().computedStyleSupportsPseudoElements
							}) +
							`":
`,
						d = Et(s.cloneNode(!1));
					return "" + p + d;
				}).join(`

`);
			return (
				o +
				`:

` +
				u +
				`

` +
				i
			);
		}).join(`
`);
}
var SE = function (t, r) {
	var a = r === void 0 ? {} : r,
		n = a.hidden,
		o = n === void 0 ? !1 : n;
	return console.log(zu(t, { hidden: o }));
};
function xE(e) {
	return e.tagName === "OPTION" ? e.selected : It(e, "aria-selected");
}
function NE(e) {
	if (!("indeterminate" in e && e.indeterminate))
		return "checked" in e ? e.checked : It(e, "aria-checked");
}
function IE(e) {
	return It(e, "aria-pressed");
}
function jE(e) {
	var t, r;
	return (t =
		(r = It(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) !=
		null
		? t
		: !1;
}
function BE(e) {
	return It(e, "aria-expanded");
}
function It(e, t) {
	var r = e.getAttribute(t);
	if (r === "true") return !0;
	if (r === "false") return !1;
}
function LE(e) {
	var t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 },
		r = e.getAttribute("aria-level") && Number(e.getAttribute("aria-level"));
	return r || t[e.tagName];
}
var Go = Ql();
function kE(e) {
	return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Qo(e) {
	return new RegExp(kE(e.toLowerCase()), "i");
}
function Se(e, t, r, a) {
	var n = a.variant,
		o = a.name,
		l = "",
		i = {},
		u = [["Role", "TestId"].includes(e) ? r : Qo(r)];
	o && (i.name = Qo(o)),
		e === "Role" &&
			Gn(t) &&
			((i.hidden = !0),
			(l = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
		Object.keys(i).length > 0 && u.push(i);
	var s = n + "By" + e;
	return {
		queryName: e,
		queryMethod: s,
		queryArgs: u,
		variant: n,
		warning: l,
		toString: function () {
			l && console.warn(l);
			var d = u[0],
				m = u[1];
			return (
				(d = typeof d == "string" ? "'" + d + "'" : d),
				(m = m
					? ", { " +
					  Object.entries(m)
							.map(function (v) {
								var y = v[0],
									f = v[1];
								return y + ": " + f;
							})
							.join(", ") +
					  " }"
					: ""),
				s + "(" + d + m + ")"
			);
		}
	};
}
function xe(e, t, r) {
	return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function ir(e, t, r) {
	var a, n;
	if ((t === void 0 && (t = "get"), !e.matches(Gl))) {
		var o =
			(a = e.getAttribute("role")) != null
				? a
				: (n = Xl(e)) == null
				? void 0
				: n[0];
		if (o !== "generic" && xe("Role", r, o))
			return Se("Role", e, o, {
				variant: t,
				name: Ul(e, {
					computedStyleSupportsPseudoElements:
						W().computedStyleSupportsPseudoElements
				})
			});
		var l = Du(document, e)
			.map(function (m) {
				return m.content;
			})
			.join(" ");
		if (xe("LabelText", r, l)) return Se("LabelText", e, l, { variant: t });
		var i = e.getAttribute("placeholder");
		if (xe("PlaceholderText", r, i))
			return Se("PlaceholderText", e, i, { variant: t });
		var u = Go(Nt(e));
		if (xe("Text", r, u)) return Se("Text", e, u, { variant: t });
		if (xe("DisplayValue", r, e.value))
			return Se("DisplayValue", e, Go(e.value), { variant: t });
		var s = e.getAttribute("alt");
		if (xe("AltText", r, s)) return Se("AltText", e, s, { variant: t });
		var p = e.getAttribute("title");
		if (xe("Title", r, p)) return Se("Title", e, p, { variant: t });
		var d = e.getAttribute(W().testIdAttribute);
		if (xe("TestId", r, d)) return Se("TestId", e, d, { variant: t });
	}
}
function Kt(e, t) {
	e.stack = t.stack.replace(t.message, e.message);
}
function FE(e, t) {
	var r = t.container,
		a = r === void 0 ? Wl() : r,
		n = t.timeout,
		o = n === void 0 ? W().asyncUtilTimeout : n,
		l = t.showOriginalStackTrace,
		i = l === void 0 ? W().showOriginalStackTrace : l,
		u = t.stackTraceError,
		s = t.interval,
		p = s === void 0 ? 50 : s,
		d = t.onTimeout,
		m =
			d === void 0
				? function (f) {
						return (f.message = W().getElementError(f.message, a).message), f;
				  }
				: d,
		v = t.mutationObserverOptions,
		y =
			v === void 0
				? { subtree: !0, childList: !0, attributes: !0, characterData: !0 }
				: v;
	if (typeof e != "function")
		throw new TypeError("Received `callback` arg must be a function");
	return new Promise(
		(function () {
			var f = gl(
				it.mark(function R(E, T) {
					var O, A, S, b, w, q, z, c, ie, pe, F, oe, K, ue, x, _;
					return it.wrap(
						function (C) {
							for (;;)
								switch ((C.prev = C.next)) {
									case 0:
										if (
											((_ = function () {
												var M;
												O
													? ((M = O),
													  !i &&
															M.name === "TestingLibraryElementError" &&
															Kt(M, u))
													: ((M = new Error("Timed out in waitFor.")),
													  i || Kt(M, u)),
													K(m(M), null);
											}),
											(x = function () {
												if (w !== "pending")
													try {
														var M = PE(e);
														typeof M?.then == "function"
															? ((w = "pending"),
															  M.then(
																	function (D) {
																		(w = "resolved"), K(null, D);
																	},
																	function (D) {
																		(w = "rejected"), (O = D);
																	}
															  ))
															: K(null, M);
													} catch (D) {
														O = D;
													}
											}),
											(ue = function () {
												if (vl()) {
													var M = new Error(
														"Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
													);
													return i || Kt(M, u), T(M);
												} else return x();
											}),
											(K = function (M, D) {
												(b = !0),
													clearTimeout(q),
													z || (clearInterval(A), S.disconnect()),
													M ? T(M) : E(D);
											}),
											(b = !1),
											(w = "idle"),
											(q = setTimeout(_, o)),
											(z = vl()),
											!z)
										) {
											C.next = 27;
											break;
										}
										(c = W()), (ie = c.unstable_advanceTimersWrapper), x();
									case 11:
										if (b) {
											C.next = 25;
											break;
										}
										if (vl()) {
											C.next = 17;
											break;
										}
										return (
											(pe = new Error(
												"Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
											)),
											i || Kt(pe, u),
											T(pe),
											C.abrupt("return")
										);
									case 17:
										if (
											(ie(function () {
												jest.advanceTimersByTime(p);
											}),
											x(),
											!b)
										) {
											C.next = 21;
											break;
										}
										return C.abrupt("break", 25);
									case 21:
										return (
											(C.next = 23),
											ie(
												gl(
													it.mark(function N() {
														return it.wrap(function (D) {
															for (;;)
																switch ((D.prev = D.next)) {
																	case 0:
																		return (
																			(D.next = 2),
																			new Promise(function (te) {
																				setTimeout(te, 0),
																					jest.advanceTimersByTime(0);
																			})
																		);
																	case 2:
																	case "end":
																		return D.stop();
																}
														}, N);
													})
												)
											)
										);
									case 23:
										C.next = 11;
										break;
									case 25:
										C.next = 40;
										break;
									case 27:
										(C.prev = 27), Te(a), (C.next = 35);
										break;
									case 31:
										return (
											(C.prev = 31),
											(C.t0 = C.catch(27)),
											T(C.t0),
											C.abrupt("return")
										);
									case 35:
										(A = setInterval(ue, p)),
											(F = Lu(a)),
											(oe = F.MutationObserver),
											(S = new oe(ue)),
											S.observe(a, y),
											x();
									case 40:
									case "end":
										return C.stop();
								}
						},
						R,
						null,
						[[27, 31]]
					);
				})
			);
			return function (R, E) {
				return f.apply(this, arguments);
			};
		})()
	);
}
function Kl(e, t) {
	var r = new Error("STACK_TRACE_MESSAGE");
	return W().asyncWrapper(function () {
		return FE(e, Ce({ stackTraceError: r }, t));
	});
}
function Qn(e, t) {
	return W().getElementError(e, t);
}
function Xn(e, t) {
	return Qn(
		e +
			"\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).",
		t
	);
}
function Ze(e, t, r, a) {
	var n = a === void 0 ? {} : a,
		o = n.exact,
		l = o === void 0 ? !0 : o,
		i = n.collapseWhitespace,
		u = n.trim,
		s = n.normalizer,
		p = l ? He : Je,
		d = Ye({ collapseWhitespace: i, trim: u, normalizer: s });
	return Array.from(t.querySelectorAll("[" + e + "]")).filter(function (m) {
		return p(m.getAttribute(e), m, r, d);
	});
}
function Wu(e, t, r, a) {
	var n = Ze(e, t, r, a);
	if (n.length > 1)
		throw Xn("Found multiple elements by [" + e + "=" + r + "]", t);
	return n[0] || null;
}
function ft(e, t) {
	return function (r) {
		for (
			var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
			o < a;
			o++
		)
			n[o - 1] = arguments[o];
		var l = e.apply(void 0, [r].concat(n));
		if (l.length > 1) {
			var i = l.map(function (u) {
				return Qn(null, u).message;
			}).join(`

`);
			throw Xn(
				t.apply(void 0, [r].concat(n)) +
					`

Here are the matching elements:

` +
					i,
				r
			);
		}
		return l[0] || null;
	};
}
function Gu(e, t) {
	return W().getElementError(
		`A better query is available, try this:
` +
			e.toString() +
			`
`,
		t
	);
}
function Jl(e, t) {
	return function (r) {
		for (
			var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
			o < a;
			o++
		)
			n[o - 1] = arguments[o];
		var l = e.apply(void 0, [r].concat(n));
		if (!l.length) throw W().getElementError(t.apply(void 0, [r].concat(n)), r);
		return l;
	};
}
function pt(e) {
	return function (t, r, a, n) {
		return Kl(
			function () {
				return e(t, r, a);
			},
			Ce({ container: t }, n)
		);
	};
}
var $e = function (t, r, a) {
		return function (n) {
			for (
				var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1;
				i < o;
				i++
			)
				l[i - 1] = arguments[i];
			var u = t.apply(void 0, [n].concat(l)),
				s = l.slice(-1),
				p = s[0];
			p = p === void 0 ? {} : p;
			var d = p.suggest,
				m = d === void 0 ? W().throwSuggestions : d;
			if (u && m) {
				var v = ir(u, a);
				if (v && !r.endsWith(v.queryName)) throw Gu(v.toString(), n);
			}
			return u;
		};
	},
	fe = function (t, r, a) {
		return function (n) {
			for (
				var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1;
				i < o;
				i++
			)
				l[i - 1] = arguments[i];
			var u = t.apply(void 0, [n].concat(l)),
				s = l.slice(-1),
				p = s[0];
			p = p === void 0 ? {} : p;
			var d = p.suggest,
				m = d === void 0 ? W().throwSuggestions : d;
			if (u.length && m) {
				var v = [].concat(
					new Set(
						u.map(function (y) {
							var f;
							return (f = ir(y, a)) == null ? void 0 : f.toString();
						})
					)
				);
				if (v.length === 1 && !r.endsWith(ir(u[0], a).queryName))
					throw Gu(v[0], n);
			}
			return u;
		};
	};
function Oe(e, t, r) {
	var a = $e(ft(e, t), e.name, "query"),
		n = Jl(e, r),
		o = ft(n, t),
		l = $e(o, e.name, "get"),
		i = fe(n, e.name.replace("query", "get"), "getAll"),
		u = pt(fe(n, e.name, "findAll")),
		s = pt($e(o, e.name, "find"));
	return [a, i, l, u, s];
}
var DE = Object.freeze({
	__proto__: null,
	getElementError: Qn,
	wrapAllByQueryWithSuggestion: fe,
	wrapSingleQueryWithSuggestion: $e,
	getMultipleElementsFoundError: Xn,
	queryAllByAttribute: Ze,
	queryByAttribute: Wu,
	makeSingleQuery: ft,
	makeGetAllQuery: Jl,
	makeFindQuery: pt,
	buildQueries: Oe
});
function $E(e) {
	return Array.from(e.querySelectorAll("label,input"))
		.map(function (t) {
			return { node: t, textToMatch: Pl(t) };
		})
		.filter(function (t) {
			var r = t.textToMatch;
			return r !== null;
		});
}
var UE = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.exact,
			l = o === void 0 ? !0 : o,
			i = n.trim,
			u = n.collapseWhitespace,
			s = n.normalizer,
			p = l ? He : Je,
			d = Ye({ collapseWhitespace: u, trim: i, normalizer: s }),
			m = $E(t);
		return m
			.filter(function (v) {
				var y = v.node,
					f = v.textToMatch;
				return p(f, y, r, d);
			})
			.map(function (v) {
				var y = v.node;
				return y;
			});
	},
	Rt = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.selector,
			l = o === void 0 ? "*" : o,
			i = n.exact,
			u = i === void 0 ? !0 : i,
			s = n.collapseWhitespace,
			p = n.trim,
			d = n.normalizer;
		Te(t);
		var m = u ? He : Je,
			v = Ye({ collapseWhitespace: s, trim: p, normalizer: d }),
			y = Array.from(t.querySelectorAll("*"))
				.filter(function (f) {
					return Fu(f).length || f.hasAttribute("aria-labelledby");
				})
				.reduce(function (f, R) {
					var E = Du(t, R, { selector: l });
					E.filter(function (O) {
						return !!O.formControl;
					}).forEach(function (O) {
						m(O.content, O.formControl, r, v) &&
							O.formControl &&
							f.push(O.formControl);
					});
					var T = E.filter(function (O) {
						return !!O.content;
					}).map(function (O) {
						return O.content;
					});
					return (
						m(T.join(" "), R, r, v) && f.push(R),
						T.length > 1 &&
							T.forEach(function (O, A) {
								m(O, R, r, v) && f.push(R);
								var S = [].concat(T);
								S.splice(A, 1),
									S.length > 1 && m(S.join(" "), R, r, v) && f.push(R);
							}),
						f
					);
				}, [])
				.concat(Ze("aria-label", t, r, { exact: u, normalizer: v }));
		return Array.from(new Set(y)).filter(function (f) {
			return f.matches(l);
		});
	},
	Ke = function (t, r) {
		for (
			var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), o = 2;
			o < a;
			o++
		)
			n[o - 2] = arguments[o];
		var l = Rt.apply(void 0, [t, r].concat(n));
		if (!l.length) {
			var i = UE.apply(void 0, [t, r].concat(n));
			if (i.length) {
				var u = i
					.map(function (s) {
						return HE(t, s);
					})
					.filter(function (s) {
						return !!s;
					});
				throw u.length
					? W().getElementError(
							u.map(function (s) {
								return (
									"Found a label with the text of: " +
									r +
									", however the element associated with this label (<" +
									s +
									" />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" +
									s +
									" />, you can use aria-label or aria-labelledby instead."
								);
							}).join(`

`),
							t
					  )
					: W().getElementError(
							"Found a label with the text of: " +
								r +
								`, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
							t
					  );
			} else
				throw W().getElementError(
					"Unable to find a label with the text of: " + r,
					t
				);
		}
		return l;
	};
function HE(e, t) {
	var r = t.getAttribute("for");
	if (!r) return null;
	var a = e.querySelector('[id="' + r + '"]');
	return a ? a.tagName.toLowerCase() : null;
}
var Qu = function (t, r) {
		return "Found multiple elements with the text of: " + r;
	},
	Xu = $e(ft(Rt, Qu), Rt.name, "query"),
	Ku = ft(Ke, Qu),
	Ju = pt(fe(Ke, Ke.name, "findAll")),
	Yu = pt($e(Ku, Ke.name, "find")),
	Zu = fe(Ke, Ke.name, "getAll"),
	es = $e(Ku, Ke.name, "get"),
	ts = fe(Rt, Rt.name, "queryAll"),
	wl = function () {
		for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
			r[a] = arguments[a];
		return Te(r[0]), Ze.apply(void 0, ["placeholder"].concat(r));
	},
	VE = function (t, r) {
		return "Found multiple elements with the placeholder text of: " + r;
	},
	zE = function (t, r) {
		return "Unable to find an element with the placeholder text of: " + r;
	},
	rs = fe(wl, wl.name, "queryAll"),
	jt = Oe(wl, VE, zE),
	as = jt[0],
	ns = jt[1],
	ls = jt[2],
	os = jt[3],
	is = jt[4],
	ql = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.selector,
			l = o === void 0 ? "*" : o,
			i = n.exact,
			u = i === void 0 ? !0 : i,
			s = n.collapseWhitespace,
			p = n.trim,
			d = n.ignore,
			m = d === void 0 ? Gl : d,
			v = n.normalizer;
		Te(t);
		var y = u ? He : Je,
			f = Ye({ collapseWhitespace: s, trim: p, normalizer: v }),
			R = [];
		return (
			typeof t.matches == "function" && t.matches(l) && (R = [t]),
			[]
				.concat(R, Array.from(t.querySelectorAll(l)))
				.filter(function (E) {
					return !m || !E.matches(m);
				})
				.filter(function (E) {
					return y(Nt(E), E, r, f);
				})
		);
	},
	WE = function (t, r) {
		return "Found multiple elements with the text: " + r;
	},
	GE = function (t, r) {
		return (
			"Unable to find an element with the text: " +
			r +
			". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible."
		);
	},
	us = fe(ql, ql.name, "queryAll"),
	Bt = Oe(ql, WE, GE),
	ss = Bt[0],
	cs = Bt[1],
	ds = Bt[2],
	fs = Bt[3],
	ps = Bt[4],
	Tl = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.exact,
			l = o === void 0 ? !0 : o,
			i = n.collapseWhitespace,
			u = n.trim,
			s = n.normalizer;
		Te(t);
		var p = l ? He : Je,
			d = Ye({ collapseWhitespace: i, trim: u, normalizer: s });
		return Array.from(t.querySelectorAll("input,textarea,select")).filter(
			function (m) {
				if (m.tagName === "SELECT") {
					var v = Array.from(m.options).filter(function (y) {
						return y.selected;
					});
					return v.some(function (y) {
						return p(Nt(y), y, r, d);
					});
				} else return p(m.value, m, r, d);
			}
		);
	},
	QE = function (t, r) {
		return "Found multiple elements with the display value: " + r + ".";
	},
	XE = function (t, r) {
		return "Unable to find an element with the display value: " + r + ".";
	},
	ms = fe(Tl, Tl.name, "queryAll"),
	Lt = Oe(Tl, QE, XE),
	vs = Lt[0],
	bs = Lt[1],
	hs = Lt[2],
	ys = Lt[3],
	gs = Lt[4],
	KE = /^(img|input|area|.+-.+)$/i,
	Ol = function (t, r, a) {
		return (
			a === void 0 && (a = {}),
			Te(t),
			Ze("alt", t, r, a).filter(function (n) {
				return KE.test(n.tagName);
			})
		);
	},
	JE = function (t, r) {
		return "Found multiple elements with the alt text: " + r;
	},
	YE = function (t, r) {
		return "Unable to find an element with the alt text: " + r;
	},
	_s = fe(Ol, Ol.name, "queryAll"),
	kt = Oe(Ol, JE, YE),
	Es = kt[0],
	Rs = kt[1],
	Cs = kt[2],
	Ps = kt[3],
	ws = kt[4],
	ZE = function (t) {
		var r;
		return (
			t.tagName.toLowerCase() === "title" &&
			((r = t.parentElement) == null ? void 0 : r.tagName.toLowerCase()) ===
				"svg"
		);
	},
	Ml = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.exact,
			l = o === void 0 ? !0 : o,
			i = n.collapseWhitespace,
			u = n.trim,
			s = n.normalizer;
		Te(t);
		var p = l ? He : Je,
			d = Ye({ collapseWhitespace: i, trim: u, normalizer: s });
		return Array.from(t.querySelectorAll("[title], svg > title")).filter(
			function (m) {
				return (
					p(m.getAttribute("title"), m, r, d) || (ZE(m) && p(Nt(m), m, r, d))
				);
			}
		);
	},
	eR = function (t, r) {
		return "Found multiple elements with the title: " + r + ".";
	},
	tR = function (t, r) {
		return "Unable to find an element with the title: " + r + ".";
	},
	qs = fe(Ml, Ml.name, "queryAll"),
	Ft = Oe(Ml, eR, tR),
	Ts = Ft[0],
	Os = Ft[1],
	Ms = Ft[2],
	As = Ft[3],
	Ss = Ft[4];
function Al(e, t, r) {
	var a = r === void 0 ? {} : r,
		n = a.exact,
		o = n === void 0 ? !0 : n,
		l = a.collapseWhitespace,
		i = a.hidden,
		u = i === void 0 ? W().defaultHidden : i,
		s = a.name,
		p = a.trim,
		d = a.normalizer,
		m = a.queryFallbacks,
		v = m === void 0 ? !1 : m,
		y = a.selected,
		f = a.checked,
		R = a.pressed,
		E = a.current,
		T = a.level,
		O = a.expanded;
	Te(e);
	var A = o ? He : Je,
		S = Ye({ collapseWhitespace: l, trim: p, normalizer: d });
	if (y !== void 0) {
		var b;
		if (
			((b = at.get(t)) == null ? void 0 : b.props["aria-selected"]) === void 0
		)
			throw new Error('"aria-selected" is not supported on role "' + t + '".');
	}
	if (f !== void 0) {
		var w;
		if (((w = at.get(t)) == null ? void 0 : w.props["aria-checked"]) === void 0)
			throw new Error('"aria-checked" is not supported on role "' + t + '".');
	}
	if (R !== void 0) {
		var q;
		if (((q = at.get(t)) == null ? void 0 : q.props["aria-pressed"]) === void 0)
			throw new Error('"aria-pressed" is not supported on role "' + t + '".');
	}
	if (E !== void 0) {
		var z;
		if (((z = at.get(t)) == null ? void 0 : z.props["aria-current"]) === void 0)
			throw new Error('"aria-current" is not supported on role "' + t + '".');
	}
	if (T !== void 0 && t !== "heading")
		throw new Error('Role "' + t + '" cannot have "level" property.');
	if (O !== void 0) {
		var c;
		if (
			((c = at.get(t)) == null ? void 0 : c.props["aria-expanded"]) === void 0
		)
			throw new Error('"aria-expanded" is not supported on role "' + t + '".');
	}
	var ie = new WeakMap();
	function pe(F) {
		return ie.has(F) || ie.set(F, Hu(F)), ie.get(F);
	}
	return Array.from(e.querySelectorAll(rR(t, o, d ? S : void 0)))
		.filter(function (F) {
			var oe = F.hasAttribute("role");
			if (oe) {
				var K = F.getAttribute("role");
				if (v)
					return K.split(" ")
						.filter(Boolean)
						.some(function (h) {
							return A(h, F, t, S);
						});
				if (d) return A(K, F, t, S);
				var ue = K.split(" "),
					x = ue[0];
				return A(x, F, t, S);
			}
			var _ = Xl(F);
			return _.some(function (h) {
				return A(h, F, t, S);
			});
		})
		.filter(function (F) {
			return y !== void 0
				? y === xE(F)
				: f !== void 0
				? f === NE(F)
				: R !== void 0
				? R === IE(F)
				: E !== void 0
				? E === jE(F)
				: O !== void 0
				? O === BE(F)
				: T !== void 0
				? T === LE(F)
				: !0;
		})
		.filter(function (F) {
			return s === void 0
				? !0
				: He(
						Ul(F, {
							computedStyleSupportsPseudoElements:
								W().computedStyleSupportsPseudoElements
						}),
						F,
						s,
						function (oe) {
							return oe;
						}
				  );
		})
		.filter(function (F) {
			return u === !1 ? Gn(F, { isSubtreeInaccessible: pe }) === !1 : !0;
		});
}
function rR(e, t, r) {
	var a;
	if (typeof e != "string") return "*";
	var n = t && !r ? '*[role~="' + e + '"]' : "*[role]",
		o = (a = Ou.get(e)) != null ? a : new Set(),
		l = new Set(
			Array.from(o).map(function (i) {
				var u = i.name;
				return u;
			})
		);
	return [n].concat(Array.from(l)).join(",");
}
var aR = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.name,
			l = "";
		return (
			o === void 0
				? (l = "")
				: typeof o == "string"
				? (l = ' and name "' + o + '"')
				: (l = " and name `" + o + "`"),
			'Found multiple elements with the role "' + r + '"' + l
		);
	},
	nR = function (t, r, a) {
		var n = a === void 0 ? {} : a,
			o = n.hidden,
			l = o === void 0 ? W().defaultHidden : o,
			i = n.name;
		if (W()._disableExpensiveErrorDiagnostics)
			return 'Unable to find role="' + r + '"';
		var u = "";
		Array.from(t.children).forEach(function (d) {
			u += zu(d, { hidden: l, includeName: i !== void 0 });
		});
		var s;
		u.length === 0
			? l === !1
				? (s =
						"There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole")
				: (s = "There are no available roles.")
			: (s = (
					`
Here are the ` +
					(l === !1 ? "accessible" : "available") +
					` roles:

  ` +
					u
						.replace(
							/\n/g,
							`
  `
						)
						.replace(
							/\n\s\s\n/g,
							`

`
						) +
					`
`
			  ).trim());
		var p = "";
		return (
			i === void 0
				? (p = "")
				: typeof i == "string"
				? (p = ' and name "' + i + '"')
				: (p = " and name `" + i + "`"),
			(
				`
Unable to find an ` +
				(l === !1 ? "accessible " : "") +
				'element with the role "' +
				r +
				'"' +
				p +
				`

` +
				s
			).trim()
		);
	},
	xs = fe(Al, Al.name, "queryAll"),
	Dt = Oe(Al, aR, nR),
	Ns = Dt[0],
	Is = Dt[1],
	js = Dt[2],
	Bs = Dt[3],
	Ls = Dt[4],
	Yl = function () {
		return W().testIdAttribute;
	},
	Sl = function () {
		for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
			r[a] = arguments[a];
		return Te(r[0]), Ze.apply(void 0, [Yl()].concat(r));
	},
	lR = function (t, r) {
		return "Found multiple elements by: [" + Yl() + '="' + r + '"]';
	},
	oR = function (t, r) {
		return "Unable to find an element by: [" + Yl() + '="' + r + '"]';
	},
	ks = fe(Sl, Sl.name, "queryAll"),
	$t = Oe(Sl, lR, oR),
	Fs = $t[0],
	Ds = $t[1],
	$s = $t[2],
	Us = $t[3],
	Hs = $t[4],
	ur = Object.freeze({
		__proto__: null,
		queryAllByLabelText: ts,
		queryByLabelText: Xu,
		getAllByLabelText: Zu,
		getByLabelText: es,
		findAllByLabelText: Ju,
		findByLabelText: Yu,
		queryByPlaceholderText: as,
		queryAllByPlaceholderText: rs,
		getByPlaceholderText: ls,
		getAllByPlaceholderText: ns,
		findAllByPlaceholderText: os,
		findByPlaceholderText: is,
		queryByText: ss,
		queryAllByText: us,
		getByText: ds,
		getAllByText: cs,
		findAllByText: fs,
		findByText: ps,
		queryByDisplayValue: vs,
		queryAllByDisplayValue: ms,
		getByDisplayValue: hs,
		getAllByDisplayValue: bs,
		findAllByDisplayValue: ys,
		findByDisplayValue: gs,
		queryByAltText: Es,
		queryAllByAltText: _s,
		getByAltText: Cs,
		getAllByAltText: Rs,
		findAllByAltText: Ps,
		findByAltText: ws,
		queryByTitle: Ts,
		queryAllByTitle: qs,
		getByTitle: Ms,
		getAllByTitle: Os,
		findAllByTitle: As,
		findByTitle: Ss,
		queryByRole: Ns,
		queryAllByRole: xs,
		getAllByRole: Is,
		getByRole: js,
		findAllByRole: Bs,
		findByRole: Ls,
		queryByTestId: Fs,
		queryAllByTestId: ks,
		getByTestId: $s,
		getAllByTestId: Ds,
		findAllByTestId: Us,
		findByTestId: Hs
	});
function xl(e, t, r) {
	return (
		t === void 0 && (t = ur),
		r === void 0 && (r = {}),
		Object.keys(t).reduce(function (a, n) {
			var o = t[n];
			return (a[n] = o.bind(null, e)), a;
		}, r)
	);
}
var Vs = function (t) {
	return !t || (Array.isArray(t) && !t.length);
};
function Xo(e) {
	if (Vs(e))
		throw new Error(
			"The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal."
		);
}
function iR(e, t) {
	return Nl.apply(this, arguments);
}
function Nl() {
	return (
		(Nl = gl(
			it.mark(function e(t, r) {
				var a, n, o;
				return it.wrap(function (i) {
					for (;;)
						switch ((i.prev = i.next)) {
							case 0:
								return (
									(a = new Error("Timed out in waitForElementToBeRemoved.")),
									typeof t != "function" &&
										(Xo(t),
										(n = Array.isArray(t) ? t : [t]),
										(o = n.map(function (u) {
											var s = u.parentElement;
											if (s === null)
												return function () {
													return null;
												};
											for (; s.parentElement; ) s = s.parentElement;
											return function () {
												return s.contains(u) ? u : null;
											};
										})),
										(t = function () {
											return o
												.map(function (s) {
													return s();
												})
												.filter(Boolean);
										})),
									Xo(t()),
									i.abrupt(
										"return",
										Kl(function () {
											var u;
											try {
												u = t();
											} catch (s) {
												if (s.name === "TestingLibraryElementError") return;
												throw s;
											}
											if (!Vs(u)) throw a;
										}, r)
									)
								);
							case 4:
							case "end":
								return i.stop();
						}
				}, e);
			})
		)),
		Nl.apply(this, arguments)
	);
}
var Ko = {
		copy: {
			EventType: "ClipboardEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		cut: {
			EventType: "ClipboardEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		paste: {
			EventType: "ClipboardEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		compositionEnd: {
			EventType: "CompositionEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		compositionStart: {
			EventType: "CompositionEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		compositionUpdate: {
			EventType: "CompositionEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		keyDown: {
			EventType: "KeyboardEvent",
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
		},
		keyPress: {
			EventType: "KeyboardEvent",
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
		},
		keyUp: {
			EventType: "KeyboardEvent",
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
		},
		focus: {
			EventType: "FocusEvent",
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
		},
		blur: {
			EventType: "FocusEvent",
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
		},
		focusIn: {
			EventType: "FocusEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		focusOut: {
			EventType: "FocusEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		change: {
			EventType: "Event",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		input: {
			EventType: "InputEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		invalid: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !0 }
		},
		submit: {
			EventType: "Event",
			defaultInit: { bubbles: !0, cancelable: !0 }
		},
		reset: { EventType: "Event", defaultInit: { bubbles: !0, cancelable: !0 } },
		click: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 }
		},
		contextMenu: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dblClick: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		drag: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dragEnd: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		dragEnter: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dragExit: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		dragLeave: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		dragOver: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		dragStart: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		drop: {
			EventType: "DragEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseDown: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseEnter: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
		},
		mouseLeave: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
		},
		mouseMove: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseOut: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseOver: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		mouseUp: {
			EventType: "MouseEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		select: {
			EventType: "Event",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		touchCancel: {
			EventType: "TouchEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		touchEnd: {
			EventType: "TouchEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		touchMove: {
			EventType: "TouchEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		touchStart: {
			EventType: "TouchEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		resize: {
			EventType: "UIEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		scroll: {
			EventType: "UIEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		wheel: {
			EventType: "WheelEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		abort: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
		canPlay: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		canPlayThrough: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		durationChange: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		emptied: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		encrypted: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		ended: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
		loadedData: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		loadedMetadata: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		loadStart: {
			EventType: "ProgressEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		pause: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
		play: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
		playing: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		progress: {
			EventType: "ProgressEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		rateChange: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		seeked: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		seeking: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		stalled: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		suspend: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		timeUpdate: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		volumeChange: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		waiting: {
			EventType: "Event",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		load: {
			EventType: "UIEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		error: { EventType: "Event", defaultInit: { bubbles: !1, cancelable: !1 } },
		animationStart: {
			EventType: "AnimationEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		animationEnd: {
			EventType: "AnimationEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		animationIteration: {
			EventType: "AnimationEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		transitionCancel: {
			EventType: "TransitionEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		transitionEnd: {
			EventType: "TransitionEvent",
			defaultInit: { bubbles: !0, cancelable: !0 }
		},
		transitionRun: {
			EventType: "TransitionEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		transitionStart: {
			EventType: "TransitionEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		},
		pointerOver: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerEnter: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		pointerDown: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerMove: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerUp: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerCancel: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		pointerOut: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
		},
		pointerLeave: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !1, cancelable: !1 }
		},
		gotPointerCapture: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		lostPointerCapture: {
			EventType: "PointerEvent",
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
		},
		popState: {
			EventType: "PopStateEvent",
			defaultInit: { bubbles: !0, cancelable: !1 }
		}
	},
	Jo = { doubleClick: "dblClick" },
	uR = ["value", "files"],
	sR = ["bubbles", "cancelable", "detail"];
function st(e, t) {
	return W().eventWrapper(function () {
		if (!t)
			throw new Error(
				"Unable to fire an event - please provide an event object."
			);
		if (!e)
			throw new Error(
				'Unable to fire a "' +
					t.type +
					'" event - please provide a DOM element.'
			);
		return e.dispatchEvent(t);
	});
}
function Yt(e, t, r, a) {
	var n = a === void 0 ? {} : a,
		o = n.EventType,
		l = o === void 0 ? "Event" : o,
		i = n.defaultInit,
		u = i === void 0 ? {} : i;
	if (!t)
		throw new Error(
			'Unable to fire a "' + e + '" event - please provide a DOM element.'
		);
	var s = Ce({}, u, r),
		p = s.target;
	p = p === void 0 ? {} : p;
	var d = p.value,
		m = p.files,
		v = bl(p, uR);
	d !== void 0 && cR(t, d),
		m !== void 0 &&
			Object.defineProperty(t, "files", {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				value: m
			}),
		Object.assign(t, v);
	var y = Lu(t),
		f = y[l] || y.Event,
		R;
	if (typeof f == "function") R = new f(e, s);
	else {
		R = y.document.createEvent(l);
		var E = s.bubbles,
			T = s.cancelable,
			O = s.detail,
			A = bl(s, sR);
		R.initEvent(e, E, T, O),
			Object.keys(A).forEach(function (b) {
				R[b] = A[b];
			});
	}
	var S = ["dataTransfer", "clipboardData"];
	return (
		S.forEach(function (b) {
			var w = s[b];
			typeof w == "object" &&
				(typeof y.DataTransfer == "function"
					? Object.defineProperty(R, b, {
							value: Object.getOwnPropertyNames(w).reduce(function (q, z) {
								return Object.defineProperty(q, z, { value: w[z] }), q;
							}, new y.DataTransfer())
					  })
					: Object.defineProperty(R, b, { value: w }));
		}),
		R
	);
}
Object.keys(Ko).forEach(function (e) {
	var t = Ko[e],
		r = t.EventType,
		a = t.defaultInit,
		n = e.toLowerCase();
	(Yt[e] = function (o, l) {
		return Yt(n, o, l, { EventType: r, defaultInit: a });
	}),
		(st[e] = function (o, l) {
			return st(o, Yt[e](o, l));
		});
});
function cR(e, t) {
	var r = Object.getOwnPropertyDescriptor(e, "value") || {},
		a = r.set,
		n = Object.getPrototypeOf(e),
		o = Object.getOwnPropertyDescriptor(n, "value") || {},
		l = o.set;
	if (l && a !== l) l.call(e, t);
	else if (a) a.call(e, t);
	else throw new Error("The given element does not have a value setter");
}
Object.keys(Jo).forEach(function (e) {
	var t = Jo[e];
	st[e] = function () {
		return st[t].apply(st, arguments);
	};
});
function dR(e) {
	return e.replace(
		/[ \t]*[\n][ \t]*/g,
		`
`
	);
}
function fR(e) {
	return Rl.compressToEncodedURIComponent(dR(e));
}
function pR(e) {
	return "https://testing-playground.com/#markup=" + fR(e);
}
var mR = function (t, r, a) {
		return Array.isArray(t)
			? t.forEach(function (n) {
					return Cl(n, r, a);
			  })
			: Cl(t, r, a);
	},
	vR = function (t) {
		if ((t === void 0 && (t = Wl().body), !t || !("innerHTML" in t))) {
			console.log("The element you're providing isn't a valid DOM element.");
			return;
		}
		if (!t.innerHTML) {
			console.log("The provided element doesn't have any children.");
			return;
		}
		console.log(
			`Open this URL in your browser

` + pR(t.innerHTML)
		);
	},
	Yo = { debug: mR, logTestingPlaygroundURL: vR },
	bR =
		typeof document < "u" && document.body
			? xl(document.body, ur, Yo)
			: Object.keys(ur).reduce(function (e, t) {
					return (
						(e[t] = function () {
							throw new TypeError(
								"For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error"
							);
						}),
						e
					);
			  }, Yo);
const hR = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				buildQueries: Oe,
				configure: wE,
				createEvent: Yt,
				findAllByAltText: Ps,
				findAllByDisplayValue: ys,
				findAllByLabelText: Ju,
				findAllByPlaceholderText: os,
				findAllByRole: Bs,
				findAllByTestId: Us,
				findAllByText: fs,
				findAllByTitle: As,
				findByAltText: ws,
				findByDisplayValue: gs,
				findByLabelText: Yu,
				findByPlaceholderText: is,
				findByRole: Ls,
				findByTestId: Hs,
				findByText: ps,
				findByTitle: Ss,
				fireEvent: st,
				getAllByAltText: Rs,
				getAllByDisplayValue: bs,
				getAllByLabelText: Zu,
				getAllByPlaceholderText: ns,
				getAllByRole: Is,
				getAllByTestId: Ds,
				getAllByText: cs,
				getAllByTitle: Os,
				getByAltText: Cs,
				getByDisplayValue: hs,
				getByLabelText: es,
				getByPlaceholderText: ls,
				getByRole: js,
				getByTestId: $s,
				getByText: ds,
				getByTitle: Ms,
				getConfig: W,
				getDefaultNormalizer: Ql,
				getElementError: Qn,
				getMultipleElementsFoundError: Xn,
				getNodeText: Nt,
				getQueriesForElement: xl,
				getRoles: Vu,
				getSuggestedQuery: ir,
				isInaccessible: Gn,
				logDOM: Cl,
				logRoles: SE,
				makeFindQuery: pt,
				makeGetAllQuery: Jl,
				makeSingleQuery: ft,
				prettyDOM: Et,
				prettyFormat: Qd,
				queries: ur,
				queryAllByAltText: _s,
				queryAllByAttribute: Ze,
				queryAllByDisplayValue: ms,
				queryAllByLabelText: ts,
				queryAllByPlaceholderText: rs,
				queryAllByRole: xs,
				queryAllByTestId: ks,
				queryAllByText: us,
				queryAllByTitle: qs,
				queryByAltText: Es,
				queryByAttribute: Wu,
				queryByDisplayValue: vs,
				queryByLabelText: Xu,
				queryByPlaceholderText: as,
				queryByRole: Ns,
				queryByTestId: Fs,
				queryByText: ss,
				queryByTitle: Ts,
				queryHelpers: DE,
				screen: bR,
				waitFor: Kl,
				waitForElementToBeRemoved: iR,
				within: xl,
				wrapAllByQueryWithSuggestion: fe,
				wrapSingleQueryWithSuggestion: $e
			},
			Symbol.toStringTag,
			{ value: "Module" }
		)
	),
	zs = nc(hR);
var Ws = {},
	Zl = {};
Object.defineProperty(Zl, "__esModule", { value: !0 });
Zl.getMouseEventOptions = yR;
function Zo(e) {
	return (
		e === "mousedown" || e === "mouseup" || e === "click" || e === "dblclick"
	);
}
const ei = { none: 0, primary: 1, secondary: 2, auxiliary: 4 },
	ti = { primary: 0, auxiliary: 1, secondary: 2 };
function ri(e, t) {
	var r;
	const [a, n] = t === "button" ? [ti, ei] : [ei, ti],
		o =
			(r = Object.entries(a).find(([, l]) => l === e)) == null ? void 0 : r[0];
	return o && Object.prototype.hasOwnProperty.call(n, o) ? n[o] : 0;
}
function ai(e, t, r) {
	return Zo(e)
		? typeof t[r] == "number"
			? t[r]
			: r === "button" && typeof t.buttons == "number"
			? ri(t.buttons, "buttons")
			: r === "buttons" && typeof t.button == "number"
			? ri(t.button, "button")
			: r != "button" && Zo(e)
			? 1
			: 0
		: 0;
}
function yR(e, t, r = 0) {
	var a;
	return (
		(t = (a = t) != null ? a : {}),
		{
			...t,
			detail: e === "mousedown" || e === "mouseup" || e === "click" ? 1 + r : r,
			buttons: ai(e, t, "buttons"),
			button: ai(e, t, "button")
		}
	);
}
var eo = {},
	Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.isElementType = gR;
function gR(e, t, r) {
	return (e.namespaceURI &&
		e.namespaceURI !== "http://www.w3.org/1999/xhtml") ||
		((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
		? !1
		: r
		? Object.entries(r).every(([a, n]) => e[a] === n)
		: !0;
}
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.isClickableInput = ER;
var ni = Me;
const _R = [
	"button",
	"color",
	"file",
	"image",
	"reset",
	"submit",
	"checkbox",
	"radio"
];
function ER(e) {
	return (
		(0, ni.isElementType)(e, "button") ||
		((0, ni.isElementType)(e, "input") && _R.includes(e.type))
	);
}
var to = {};
Object.defineProperty(to, "__esModule", { value: !0 });
to.buildTimeValue = RR;
function RR(e) {
	const t = e.replace(/\D/g, "");
	if (t.length < 2) return e;
	const r = parseInt(t[0], 10),
		a = parseInt(t[1], 10);
	if (r >= 3 || (r === 2 && a >= 4)) {
		let n;
		return r >= 3 ? (n = 1) : (n = 2), li(t, n);
	}
	return e.length === 2 ? e : li(t, 2);
}
function li(e, t) {
	const r = e.slice(0, t),
		a = Math.min(parseInt(r, 10), 23),
		n = e.slice(t),
		o = parseInt(n, 10),
		l = Math.min(o, 59);
	return `${a.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
}
var ro = {},
	et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.getSelectionRange = Qs;
et.hasSelectionSupport = ao;
et.setSelectionRange = CR;
var ct = Me,
	Il;
(function (e) {
	(e.text = "text"),
		(e.search = "search"),
		(e.url = "url"),
		(e.tel = "tel"),
		(e.password = "password");
})(Il || (Il = {}));
const Gs = Symbol("inputSelection");
function ao(e) {
	return (
		(0, ct.isElementType)(e, "textarea") ||
		((0, ct.isElementType)(e, "input") && !!Il[e.type])
	);
}
function Qs(e) {
	if (ao(e))
		return { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd };
	if ((0, ct.isElementType)(e, "input")) {
		var t;
		return (t = e[Gs]) != null
			? t
			: { selectionStart: null, selectionEnd: null };
	}
	const r = e.ownerDocument.getSelection();
	if (r != null && r.rangeCount && e.contains(r.focusNode)) {
		const a = r.getRangeAt(0);
		return { selectionStart: a.startOffset, selectionEnd: a.endOffset };
	} else return { selectionStart: null, selectionEnd: null };
}
function CR(e, t, r) {
	const { selectionStart: a, selectionEnd: n } = Qs(e);
	if (
		(a === t && n === r) ||
		(ao(e) && e.setSelectionRange(t, r),
		(0, ct.isElementType)(e, "input") &&
			(e[Gs] = { selectionStart: t, selectionEnd: r }),
		(0, ct.isElementType)(e, "input") || (0, ct.isElementType)(e, "textarea"))
	)
		return;
	const o = e.ownerDocument.createRange();
	o.selectNodeContents(e),
		e.firstChild && (o.setStart(e.firstChild, t), o.setEnd(e.firstChild, r));
	const l = e.ownerDocument.getSelection();
	l && (l.removeAllRanges(), l.addRange(o));
}
var bt = {},
	Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.isContentEditable = PR;
function PR(e) {
	return (
		e.hasAttribute("contenteditable") &&
		(e.getAttribute("contenteditable") == "true" ||
			e.getAttribute("contenteditable") == "")
	);
}
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.getValue = qR;
var wR = Ut;
function qR(e) {
	return e ? ((0, wR.isContentEditable)(e) ? e.textContent : e.value) : null;
}
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.isValidDateValue = TR;
function TR(e, t) {
	const r = e.cloneNode();
	return (r.value = t), r.value === t;
}
var Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.isValidInputTimeValue = OR;
function OR(e, t) {
	const r = e.cloneNode();
	return (r.value = t), r.value === t;
}
Object.defineProperty(ro, "__esModule", { value: !0 });
ro.calculateNewValue = xR;
var MR = et,
	AR = bt,
	SR = Kn,
	oi = Jn;
function xR(
	e,
	t,
	r = (() => {
		var o;
		return (o = (0, AR.getValue)(t)) != null ? o : "";
	})(),
	a = (0, MR.getSelectionRange)(t),
	n
) {
	const o = a.selectionStart === null ? r.length : a.selectionStart,
		l = a.selectionEnd === null ? r.length : a.selectionEnd,
		i = Math.max(0, o === l && n === "backward" ? o - 1 : o),
		u = r.substring(0, i),
		s = Math.min(r.length, o === l && n === "forward" ? l + 1 : l),
		p = r.substring(s, r.length);
	let d = `${u}${e}${p}`;
	const m = i + e.length;
	return (
		t.type === "date" && !(0, SR.isValidDateValue)(t, d) && (d = r),
		t.type === "time" &&
			!(0, oi.isValidInputTimeValue)(t, d) &&
			((0, oi.isValidInputTimeValue)(t, e) ? (d = e) : (d = r)),
		{ newValue: d, newSelectionStart: m }
	);
}
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.isCursorAtEnd = IR;
Yn.isCursorAtStart = jR;
var Xs = et,
	NR = bt;
function IR(e) {
	var t;
	const { selectionStart: r, selectionEnd: a } = (0, Xs.getSelectionRange)(e);
	return (
		r === a && (r ?? 0) === ((t = (0, NR.getValue)(e)) != null ? t : "").length
	);
}
function jR(e) {
	const { selectionStart: t, selectionEnd: r } = (0, Xs.getSelectionRange)(e);
	return t === r && (t ?? 0) === 0;
}
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.hasUnreliableEmptyValue = LR;
var BR = Me,
	jl;
(function (e) {
	e.number = "number";
})(jl || (jl = {}));
function LR(e) {
	return (0, BR.isElementType)(e, "input") && !!jl[e.type];
}
var tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.editableInputTypes = void 0;
tt.isEditable = FR;
tt.isEditableInput = Js;
var Ks = Me,
	kR = Ut;
function FR(e) {
	return (
		Js(e) ||
		(0, Ks.isElementType)(e, "textarea", { readOnly: !1 }) ||
		(0, kR.isContentEditable)(e)
	);
}
let sr;
tt.editableInputTypes = sr;
(function (e) {
	(e.text = "text"),
		(e.date = "date"),
		(e["datetime-local"] = "datetime-local"),
		(e.email = "email"),
		(e.month = "month"),
		(e.number = "number"),
		(e.password = "password"),
		(e.search = "search"),
		(e.tel = "tel"),
		(e.time = "time"),
		(e.url = "url"),
		(e.week = "week");
})(sr || (tt.editableInputTypes = sr = {}));
function Js(e) {
	return (0, Ks.isElementType)(e, "input", { readOnly: !1 }) && !!sr[e.type];
}
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.getSpaceUntilMaxLength = $R;
var ii = Me,
	DR = bt,
	Bl;
(function (e) {
	(e.email = "email"),
		(e.password = "password"),
		(e.search = "search"),
		(e.telephone = "telephone"),
		(e.text = "text"),
		(e.url = "url");
})(Bl || (Bl = {}));
function $R(e) {
	const t = (0, DR.getValue)(e);
	if (t === null) return;
	const r = UR(e);
	return r ? r - t.length : void 0;
}
function UR(e) {
	var t;
	if (!HR(e)) return;
	const r = (t = e.getAttribute("maxlength")) != null ? t : "";
	return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function HR(e) {
	return (
		(0, ii.isElementType)(e, "textarea") ||
		((0, ii.isElementType)(e, "input") && !!Bl[e.type])
	);
}
var oo = {},
	Ht = {};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.isDisabled = VR;
function VR(e) {
	return !!(e && e.disabled);
}
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.getActiveElement = Ys;
var zR = Ht;
function Ys(e) {
	const t = e.activeElement;
	return t != null && t.shadowRoot
		? Ys(t.shadowRoot)
		: (0, zR.isDisabled)(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: t;
}
var io = {},
	Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.isLabelWithInternallyDisabledControl = QR;
var WR = Ht,
	GR = Me;
function QR(e) {
	if (!(0, GR.isElementType)(e, "label")) return !1;
	const t = e.control;
	return !!(t && e.contains(t) && (0, WR.isDisabled)(t));
}
var Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.FOCUSABLE_SELECTOR = void 0;
const XR = [
	"input:not([type=hidden]):not([disabled])",
	"button:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	'[contenteditable=""]',
	'[contenteditable="true"]',
	"a[href]",
	"[tabindex]:not([disabled])"
].join(", ");
Vt.FOCUSABLE_SELECTOR = XR;
Object.defineProperty(io, "__esModule", { value: !0 });
io.isFocusable = YR;
var KR = Zn,
	JR = Vt;
function YR(e) {
	return (
		!(0, KR.isLabelWithInternallyDisabledControl)(e) &&
		e.matches(JR.FOCUSABLE_SELECTOR)
	);
}
var uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.eventWrapper = e1;
var ZR = zs;
function e1(e) {
	let t;
	return (
		(0, ZR.getConfig)().eventWrapper(() => {
			t = e();
		}),
		t
	);
}
var so = {},
	Ae = {};
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.TEXT_NODE = void 0;
Ae.checkContainerType = l1;
Ae.getDocument = a1;
Ae.getWindowFromNode = n1;
Ae.jestFakeTimersAreEnabled = r1;
const t1 = 3;
Ae.TEXT_NODE = t1;
function r1() {
	return typeof jest < "u" && jest !== null
		? setTimeout._isMockFunction === !0 ||
				Object.prototype.hasOwnProperty.call(setTimeout, "clock")
		: !1;
}
function a1() {
	if (typeof window > "u") throw new Error("Could not find default container");
	return window.document;
}
function n1(e) {
	if (e.defaultView) return e.defaultView;
	if (e.ownerDocument && e.ownerDocument.defaultView)
		return e.ownerDocument.defaultView;
	if (e.window) return e.window;
	throw e.ownerDocument && e.ownerDocument.defaultView === null
		? new Error(
				"It looks like the window object is not available for the provided node."
		  )
		: e.then instanceof Function
		? new Error(
				"It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?"
		  )
		: Array.isArray(e)
		? new Error(
				"It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?"
		  )
		: typeof e.debug == "function" &&
		  typeof e.logTestingPlaygroundURL == "function"
		? new Error(
				"It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?"
		  )
		: new Error(
				`The given node is not an Element, the node type is: ${typeof e}.`
		  );
}
function l1(e) {
	if (
		!e ||
		typeof e.querySelector != "function" ||
		typeof e.querySelectorAll != "function"
	)
		throw new TypeError(
			`Expected container to be an Element, a Document or a DocumentFragment but got ${t(
				e
			)}.`
		);
	function t(r) {
		return typeof r == "object"
			? r === null
				? "null"
				: r.constructor.name
			: typeof r;
	}
}
Object.defineProperty(so, "__esModule", { value: !0 });
so.isVisible = i1;
var o1 = Ae;
function i1(e) {
	const t = (0, o1.getWindowFromNode)(e);
	for (let a = e; (r = a) != null && r.ownerDocument; a = a.parentElement) {
		var r;
		if (t.getComputedStyle(a).display === "none") return !1;
	}
	return !0;
}
var co = {};
Object.defineProperty(co, "__esModule", { value: !0 });
co.isDocument = u1;
function u1(e) {
	return e.nodeType === e.DOCUMENT_NODE;
}
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.wait = s1;
function s1(e) {
	return new Promise((t) => setTimeout(() => t(), e));
}
var po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.hasPointerEvents = d1;
var c1 = Ae;
function d1(e) {
	const t = (0, c1.getWindowFromNode)(e);
	for (let a = e; (r = a) != null && r.ownerDocument; a = a.parentElement) {
		var r;
		const n = t.getComputedStyle(a).pointerEvents;
		if (n && !["inherit", "unset"].includes(n)) return n !== "none";
	}
	return !0;
}
var el = {};
Object.defineProperty(el, "__esModule", { value: !0 });
el.hasFormSubmit = void 0;
const f1 = (e) =>
	!!(
		e &&
		(e.querySelector('input[type="submit"]') ||
			e.querySelector('button[type="submit"]'))
	);
el.hasFormSubmit = f1;
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Zl;
	Object.keys(t).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === t[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return t[c];
				}
			});
	});
	var r = eo;
	Object.keys(r).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === r[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return r[c];
				}
			});
	});
	var a = to;
	Object.keys(a).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === a[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return a[c];
				}
			});
	});
	var n = ro;
	Object.keys(n).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === n[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return n[c];
				}
			});
	});
	var o = Yn;
	Object.keys(o).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === o[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return o[c];
				}
			});
	});
	var l = bt;
	Object.keys(l).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === l[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return l[c];
				}
			});
	});
	var i = no;
	Object.keys(i).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === i[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return i[c];
				}
			});
	});
	var u = Ut;
	Object.keys(u).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === u[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return u[c];
				}
			});
	});
	var s = tt;
	Object.keys(s).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === s[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return s[c];
				}
			});
	});
	var p = Kn;
	Object.keys(p).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === p[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return p[c];
				}
			});
	});
	var d = Jn;
	Object.keys(d).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === d[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return d[c];
				}
			});
	});
	var m = lo;
	Object.keys(m).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === m[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return m[c];
				}
			});
	});
	var v = et;
	Object.keys(v).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === v[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return v[c];
				}
			});
	});
	var y = oo;
	Object.keys(y).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === y[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return y[c];
				}
			});
	});
	var f = io;
	Object.keys(f).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === f[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return f[c];
				}
			});
	});
	var R = Vt;
	Object.keys(R).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === R[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return R[c];
				}
			});
	});
	var E = uo;
	Object.keys(E).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === E[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return E[c];
				}
			});
	});
	var T = Me;
	Object.keys(T).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === T[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return T[c];
				}
			});
	});
	var O = Zn;
	Object.keys(O).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === O[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return O[c];
				}
			});
	});
	var A = so;
	Object.keys(A).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === A[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return A[c];
				}
			});
	});
	var S = Ht;
	Object.keys(S).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === S[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return S[c];
				}
			});
	});
	var b = co;
	Object.keys(b).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === b[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return b[c];
				}
			});
	});
	var w = fo;
	Object.keys(w).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === w[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return w[c];
				}
			});
	});
	var q = po;
	Object.keys(q).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === q[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return q[c];
				}
			});
	});
	var z = el;
	Object.keys(z).forEach(function (c) {
		c === "default" ||
			c === "__esModule" ||
			(c in e && e[c] === z[c]) ||
			Object.defineProperty(e, c, {
				enumerable: !0,
				get: function () {
					return z[c];
				}
			});
	});
})(Ws);
Object.defineProperty(Ll, "__esModule", { value: !0 });
Ll.hover = p1;
Ll.unhover = m1;
var ve = zs,
	de = Ws;
function Zs(e) {
	const t = [e];
	let r = e;
	for (; (r = r.parentElement) != null; ) t.push(r);
	return t;
}
function p1(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
	if (!r && !(0, de.hasPointerEvents)(e))
		throw new Error(
			'unable to hover element as it has or inherits pointer-events set to "none".'
		);
	if ((0, de.isLabelWithInternallyDisabledControl)(e)) return;
	const a = Zs(e).reverse();
	ve.fireEvent.pointerOver(e, t);
	for (const n of a) ve.fireEvent.pointerEnter(n, t);
	if (!(0, de.isDisabled)(e)) {
		ve.fireEvent.mouseOver(e, (0, de.getMouseEventOptions)("mouseover", t));
		for (const n of a)
			ve.fireEvent.mouseEnter(n, (0, de.getMouseEventOptions)("mouseenter", t));
	}
	ve.fireEvent.pointerMove(e, t),
		(0, de.isDisabled)(e) ||
			ve.fireEvent.mouseMove(e, (0, de.getMouseEventOptions)("mousemove", t));
}
function m1(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
	if (!r && !(0, de.hasPointerEvents)(e))
		throw new Error(
			'unable to unhover element as it has or inherits pointer-events set to "none".'
		);
	if ((0, de.isLabelWithInternallyDisabledControl)(e)) return;
	const a = Zs(e);
	ve.fireEvent.pointerMove(e, t),
		(0, de.isDisabled)(e) ||
			ve.fireEvent.mouseMove(e, (0, de.getMouseEventOptions)("mousemove", t)),
		ve.fireEvent.pointerOut(e, t);
	for (const n of a) ve.fireEvent.pointerLeave(n, t);
	if (!(0, de.isDisabled)(e)) {
		ve.fireEvent.mouseOut(e, (0, de.getMouseEventOptions)("mouseout", t));
		for (const n of a)
			ve.fireEvent.mouseLeave(n, (0, de.getMouseEventOptions)("mouseleave", t));
	}
}
function v1(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function b1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
let h1 = class extends Y {
	constructor(t) {
		super(), Z(this, t, b1, v1, ee, { value: 0, type: 1, selected: 2 });
	}
};
function y1(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function g1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class _1 extends Y {
	constructor(t) {
		super(), Z(this, t, g1, y1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function E1(e) {
	let t,
		r = e[0].toLocaleString() + "",
		a;
	return {
		c() {
			(t = k("div")),
				(a = X(r)),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(n, o) {
			j(n, t, o), U(t, a);
		},
		p(n, [o]) {
			o & 1 && r !== (r = n[0].toLocaleString() + "") && le(a, r),
				o & 2 && g(t, "table", n[1] === "table"),
				o & 2 && g(t, "gallery", n[1] === "gallery"),
				o & 4 && g(t, "selected", n[2]);
		},
		i: $,
		o: $,
		d(n) {
			n && B(t);
		}
	};
}
function R1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class C1 extends Y {
	constructor(t) {
		super(), Z(this, t, R1, E1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function ui(e, t, r) {
	const a = e.slice();
	return (a[3] = t[r]), (a[5] = r), a;
}
function si(e) {
	let t;
	return {
		c() {
			t = X(", ");
		},
		m(r, a) {
			j(r, t, a);
		},
		d(r) {
			r && B(t);
		}
	};
}
function ci(e) {
	let t = e[3].toLocaleString() + "",
		r,
		a,
		n = e[5] !== e[0].length - 1 && si();
	return {
		c() {
			(r = X(t)), n && n.c(), (a = mt());
		},
		m(o, l) {
			j(o, r, l), n && n.m(o, l), j(o, a, l);
		},
		p(o, l) {
			l & 1 && t !== (t = o[3].toLocaleString() + "") && le(r, t),
				o[5] !== o[0].length - 1
					? n || ((n = si()), n.c(), n.m(a.parentNode, a))
					: n && (n.d(1), (n = null));
		},
		d(o) {
			o && B(r), n && n.d(o), o && B(a);
		}
	};
}
function P1(e) {
	let t,
		r = e[0],
		a = [];
	for (let n = 0; n < r.length; n += 1) a[n] = ci(ui(e, r, n));
	return {
		c() {
			t = k("div");
			for (let n = 0; n < a.length; n += 1) a[n].c();
			I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(n, o) {
			j(n, t, o);
			for (let l = 0; l < a.length; l += 1) a[l] && a[l].m(t, null);
		},
		p(n, [o]) {
			if (o & 1) {
				r = n[0];
				let l;
				for (l = 0; l < r.length; l += 1) {
					const i = ui(n, r, l);
					a[l] ? a[l].p(i, o) : ((a[l] = ci(i)), a[l].c(), a[l].m(t, null));
				}
				for (; l < a.length; l += 1) a[l].d(1);
				a.length = r.length;
			}
			o & 2 && g(t, "table", n[1] === "table"),
				o & 2 && g(t, "gallery", n[1] === "gallery"),
				o & 4 && g(t, "selected", n[2]);
		},
		i: $,
		o: $,
		d(n) {
			n && B(t), Ue(a, n);
		}
	};
}
function w1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class q1 extends Y {
	constructor(t) {
		super(), Z(this, t, w1, P1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function T1(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function O1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class M1 extends Y {
	constructor(t) {
		super(), Z(this, t, O1, T1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function A1(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function S1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class x1 extends Y {
	constructor(t) {
		super(), Z(this, t, S1, A1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function N1(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function I1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class j1 extends Y {
	constructor(t) {
		super(), Z(this, t, I1, N1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function B1(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function L1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class k1 extends Y {
	constructor(t) {
		super(), Z(this, t, L1, B1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function F1(e) {
	let t, r, a, n;
	return {
		c() {
			(t = k("video")),
				(t.muted = !0),
				(t.playsInline = !0),
				mo(t.src, (r = e[3] + e[2])) || I(t, "src", r),
				I(t, "class", "svelte-1tntsc1"),
				g(t, "table", e[0] === "table"),
				g(t, "gallery", e[0] === "gallery"),
				g(t, "selected", e[1]);
		},
		m(o, l) {
			j(o, t, l),
				e[5](t),
				a ||
					((n = [
						_e(t, "mouseover", function () {
							vo(e[4].play) && e[4].play.apply(this, arguments);
						}),
						_e(t, "mouseout", function () {
							vo(e[4].pause) && e[4].pause.apply(this, arguments);
						})
					]),
					(a = !0));
		},
		p(o, l) {
			(e = o),
				l & 12 && !mo(t.src, (r = e[3] + e[2])) && I(t, "src", r),
				l & 1 && g(t, "table", e[0] === "table"),
				l & 1 && g(t, "gallery", e[0] === "gallery"),
				l & 2 && g(t, "selected", e[1]);
		},
		d(o) {
			o && B(t), e[5](null), (a = !1), cr(n);
		}
	};
}
function D1(e) {
	let t;
	function r(o, l) {
		return F1;
	}
	let n = r()(e);
	return {
		c() {
			n.c(), (t = mt());
		},
		m(o, l) {
			n.m(o, l), j(o, t, l);
		},
		p(o, [l]) {
			n.p(o, l);
		},
		i: $,
		o: $,
		d(o) {
			n.d(o), o && B(t);
		}
	};
}
function $1(e, t, r) {
	let { type: a } = t,
		{ selected: n = !1 } = t,
		{ value: o } = t,
		{ samples_dir: l } = t,
		i;
	async function u() {
		r(4, (i.muted = !0), i),
			r(4, (i.playsInline = !0), i),
			r(4, (i.controls = !1), i),
			i.setAttribute("muted", ""),
			await i.play(),
			i.pause();
	}
	ec(() => {
		u();
	});
	function s(p) {
		tc[p ? "unshift" : "push"](() => {
			(i = p), r(4, i);
		});
	}
	return (
		(e.$$set = (p) => {
			"type" in p && r(0, (a = p.type)),
				"selected" in p && r(1, (n = p.selected)),
				"value" in p && r(2, (o = p.value)),
				"samples_dir" in p && r(3, (l = p.samples_dir));
		}),
		[a, n, o, l, i, s]
	);
}
class U1 extends Y {
	constructor(t) {
		super(),
			Z(this, t, $1, D1, ee, {
				type: 0,
				selected: 1,
				value: 2,
				samples_dir: 3
			});
	}
}
function H1(e) {
	let t,
		r = (Array.isArray(e[0]) ? e[0].join(", ") : e[0]) + "",
		a;
	return {
		c() {
			(t = k("div")),
				(a = X(r)),
				I(t, "class", "svelte-rgtszb"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(n, o) {
			j(n, t, o), U(t, a);
		},
		p(n, [o]) {
			o & 1 &&
				r !== (r = (Array.isArray(n[0]) ? n[0].join(", ") : n[0]) + "") &&
				le(a, r),
				o & 2 && g(t, "table", n[1] === "table"),
				o & 2 && g(t, "gallery", n[1] === "gallery"),
				o & 4 && g(t, "selected", n[2]);
		},
		i: $,
		o: $,
		d(n) {
			n && B(t);
		}
	};
}
function V1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class z1 extends Y {
	constructor(t) {
		super(), Z(this, t, V1, H1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function di(e, t, r) {
	const a = e.slice();
	return (a[10] = t[r]), (a[12] = r), a;
}
function fi(e, t, r) {
	const a = e.slice();
	return (a[13] = t[r]), (a[15] = r), a;
}
function pi(e) {
	let t, r, a;
	function n(i, u) {
		return typeof i[6] == "string" ? G1 : W1;
	}
	let o = n(e),
		l = o(e);
	return {
		c() {
			(t = k("div")),
				l.c(),
				I(t, "class", "svelte-1cib1xd"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(i, u) {
			j(i, t, u),
				l.m(t, null),
				r ||
					((a = [_e(t, "mouseenter", e[8]), _e(t, "mouseleave", e[9])]),
					(r = !0));
		},
		p(i, u) {
			o === (o = n(i)) && l
				? l.p(i, u)
				: (l.d(1), (l = o(i)), l && (l.c(), l.m(t, null))),
				u & 2 && g(t, "table", i[1] === "table"),
				u & 2 && g(t, "gallery", i[1] === "gallery"),
				u & 4 && g(t, "selected", i[2]);
		},
		d(i) {
			i && B(t), l.d(), (r = !1), cr(a);
		}
	};
}
function W1(e) {
	let t,
		r,
		a = e[6].slice(0, 3),
		n = [];
	for (let l = 0; l < a.length; l += 1) n[l] = bi(di(e, a, l));
	let o = e[0].length > 3 && hi(e);
	return {
		c() {
			t = k("table");
			for (let l = 0; l < n.length; l += 1) n[l].c();
			(r = Re()), o && o.c(), I(t, "class", " svelte-1cib1xd");
		},
		m(l, i) {
			j(l, t, i);
			for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(t, null);
			U(t, r), o && o.m(t, null);
		},
		p(l, i) {
			if (i & 64) {
				a = l[6].slice(0, 3);
				let u;
				for (u = 0; u < a.length; u += 1) {
					const s = di(l, a, u);
					n[u] ? n[u].p(s, i) : ((n[u] = bi(s)), n[u].c(), n[u].m(t, r));
				}
				for (; u < n.length; u += 1) n[u].d(1);
				n.length = a.length;
			}
			l[0].length > 3
				? o
					? o.p(l, i)
					: ((o = hi(l)), o.c(), o.m(t, null))
				: o && (o.d(1), (o = null));
		},
		d(l) {
			l && B(t), Ue(n, l), o && o.d();
		}
	};
}
function G1(e) {
	let t;
	return {
		c() {
			t = X(e[6]);
		},
		m(r, a) {
			j(r, t, a);
		},
		p(r, a) {
			a & 64 && le(t, r[6]);
		},
		d(r) {
			r && B(t);
		}
	};
}
function mi(e) {
	let t,
		r = e[13] + "",
		a;
	return {
		c() {
			(t = k("td")), (a = X(r)), I(t, "class", "svelte-1cib1xd");
		},
		m(n, o) {
			j(n, t, o), U(t, a);
		},
		p(n, o) {
			o & 64 && r !== (r = n[13] + "") && le(a, r);
		},
		d(n) {
			n && B(t);
		}
	};
}
function vi(e) {
	let t;
	return {
		c() {
			(t = k("td")), (t.textContent = "…"), I(t, "class", "svelte-1cib1xd");
		},
		m(r, a) {
			j(r, t, a);
		},
		d(r) {
			r && B(t);
		}
	};
}
function bi(e) {
	let t,
		r,
		a = e[10].slice(0, 3),
		n = [];
	for (let l = 0; l < a.length; l += 1) n[l] = mi(fi(e, a, l));
	let o = e[10].length > 3 && vi();
	return {
		c() {
			t = k("tr");
			for (let l = 0; l < n.length; l += 1) n[l].c();
			(r = Re()), o && o.c();
		},
		m(l, i) {
			j(l, t, i);
			for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(t, null);
			U(t, r), o && o.m(t, null);
		},
		p(l, i) {
			if (i & 64) {
				a = l[10].slice(0, 3);
				let u;
				for (u = 0; u < a.length; u += 1) {
					const s = fi(l, a, u);
					n[u] ? n[u].p(s, i) : ((n[u] = mi(s)), n[u].c(), n[u].m(t, r));
				}
				for (; u < n.length; u += 1) n[u].d(1);
				n.length = a.length;
			}
			l[10].length > 3
				? o || ((o = vi()), o.c(), o.m(t, null))
				: o && (o.d(1), (o = null));
		},
		d(l) {
			l && B(t), Ue(n, l), o && o.d();
		}
	};
}
function hi(e) {
	let t;
	return {
		c() {
			(t = k("div")),
				I(t, "class", "overlay svelte-1cib1xd"),
				g(t, "odd", e[3] % 2 != 0),
				g(t, "even", e[3] % 2 == 0),
				g(t, "button", e[1] === "gallery");
		},
		m(r, a) {
			j(r, t, a);
		},
		p(r, a) {
			a & 8 && g(t, "odd", r[3] % 2 != 0),
				a & 8 && g(t, "even", r[3] % 2 == 0),
				a & 2 && g(t, "button", r[1] === "gallery");
		},
		d(r) {
			r && B(t);
		}
	};
}
function Q1(e) {
	let t,
		r = e[4] && pi(e);
	return {
		c() {
			r && r.c(), (t = mt());
		},
		m(a, n) {
			r && r.m(a, n), j(a, t, n);
		},
		p(a, [n]) {
			a[4]
				? r
					? r.p(a, n)
					: ((r = pi(a)), r.c(), r.m(t.parentNode, t))
				: r && (r.d(1), (r = null));
		},
		i: $,
		o: $,
		d(a) {
			r && r.d(a), a && B(t);
		}
	};
}
function X1(e, t, r) {
	let { value: a } = t,
		{ samples_dir: n } = t,
		{ type: o } = t,
		{ selected: l = !1 } = t,
		{ index: i } = t,
		u = !1,
		s = a,
		p = Array.isArray(s);
	const d = () => r(5, (u = !0)),
		m = () => r(5, (u = !1));
	return (
		(e.$$set = (v) => {
			"value" in v && r(0, (a = v.value)),
				"samples_dir" in v && r(7, (n = v.samples_dir)),
				"type" in v && r(1, (o = v.type)),
				"selected" in v && r(2, (l = v.selected)),
				"index" in v && r(3, (i = v.index));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 145 &&
				!p &&
				typeof a == "string" &&
				/\.[a-zA-Z]+$/.test(a) &&
				fetch(n + a)
					.then((v) => v.text())
					.then((v) => {
						try {
							if (a.endsWith("csv")) {
								const y = v
									.split(
										`
`
									)
									.slice(0, 4)
									.map((f) => f.split(",").slice(0, 4).join(",")).join(`
`);
								r(6, (s = oc(y)));
							} else if (a.endsWith("tsv")) {
								const y = v
									.split(
										`
`
									)
									.slice(0, 4)
									.map((f) => f.split("	").slice(0, 4).join("	")).join(`
`);
								r(6, (s = dc(y)));
							} else
								throw new Error(
									"Incorrect format, only CSV and TSV files are supported"
								);
							r(4, (p = !0));
						} catch (y) {
							console.error(y);
						}
					})
					.catch((v) => {
						r(6, (s = a)), r(4, (p = !0));
					});
		}),
		[a, o, l, i, p, u, s, n, d, m]
	);
}
class K1 extends Y {
	constructor(t) {
		super(),
			Z(this, t, X1, Q1, ee, {
				value: 0,
				samples_dir: 7,
				type: 1,
				selected: 2,
				index: 3
			});
	}
}
function J1(e) {
	let t;
	return {
		c() {
			(t = k("div")),
				bo(t, "background-color", e[0]),
				I(t, "class", "svelte-h6ogpl"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(r, a) {
			j(r, t, a);
		},
		p(r, [a]) {
			a & 1 && bo(t, "background-color", r[0]),
				a & 2 && g(t, "table", r[1] === "table"),
				a & 2 && g(t, "gallery", r[1] === "gallery"),
				a & 4 && g(t, "selected", r[2]);
		},
		i: $,
		o: $,
		d(r) {
			r && B(t);
		}
	};
}
function Y1(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class Z1 extends Y {
	constructor(t) {
		super(), Z(this, t, Y1, J1, ee, { value: 0, type: 1, selected: 2 });
	}
}
function eC(e) {
	let t, r;
	return {
		c() {
			(t = k("div")),
				(r = X(e[0])),
				I(t, "class", "svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function tC(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class rC extends Y {
	constructor(t) {
		super(), Z(this, t, tC, eC, ee, { value: 0, type: 1, selected: 2 });
	}
}
function aC(e) {
	let t;
	return {
		c() {
			(t = k("div")),
				I(t, "class", "prose svelte-1ayixqk"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(r, a) {
			j(r, t, a), (t.innerHTML = e[0]);
		},
		p(r, [a]) {
			a & 1 && (t.innerHTML = r[0]),
				a & 2 && g(t, "table", r[1] === "table"),
				a & 2 && g(t, "gallery", r[1] === "gallery"),
				a & 4 && g(t, "selected", r[2]);
		},
		i: $,
		o: $,
		d(r) {
			r && B(t);
		}
	};
}
function nC(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class lC extends Y {
	constructor(t) {
		super(), Z(this, t, nC, aC, ee, { value: 0, type: 1, selected: 2 });
	}
}
function oC(e) {
	let t;
	return {
		c() {
			(t = k("div")),
				I(t, "class", "prose svelte-zvfedn"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(r, a) {
			j(r, t, a), (t.innerHTML = e[0]);
		},
		p(r, [a]) {
			a & 1 && (t.innerHTML = r[0]),
				a & 2 && g(t, "table", r[1] === "table"),
				a & 2 && g(t, "gallery", r[1] === "gallery"),
				a & 4 && g(t, "selected", r[2]);
		},
		i: $,
		o: $,
		d(r) {
			r && B(t);
		}
	};
}
function iC(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class uC extends Y {
	constructor(t) {
		super(), Z(this, t, iC, oC, ee, { value: 0, type: 1, selected: 2 });
	}
}
function sC(e) {
	let t, r;
	return {
		c() {
			(t = k("pre")),
				(r = X(e[0])),
				I(t, "class", "svelte-agpzo2"),
				g(t, "table", e[1] === "table"),
				g(t, "gallery", e[1] === "gallery"),
				g(t, "selected", e[2]);
		},
		m(a, n) {
			j(a, t, n), U(t, r);
		},
		p(a, [n]) {
			n & 1 && le(r, a[0]),
				n & 2 && g(t, "table", a[1] === "table"),
				n & 2 && g(t, "gallery", a[1] === "gallery"),
				n & 4 && g(t, "selected", a[2]);
		},
		i: $,
		o: $,
		d(a) {
			a && B(t);
		}
	};
}
function cC(e, t, r) {
	let { value: a } = t,
		{ type: n } = t,
		{ selected: o = !1 } = t;
	return (
		(e.$$set = (l) => {
			"value" in l && r(0, (a = l.value)),
				"type" in l && r(1, (n = l.type)),
				"selected" in l && r(2, (o = l.selected));
		}),
		[a, n, o]
	);
}
class dC extends Y {
	constructor(t) {
		super(), Z(this, t, cC, sC, ee, { value: 0, type: 1, selected: 2 });
	}
}
const Xe = {
	dropdown: _1,
	checkbox: C1,
	checkboxgroup: q1,
	number: h1,
	slider: M1,
	radio: x1,
	image: lc,
	textbox: j1,
	audio: k1,
	video: U1,
	file: z1,
	dataframe: K1,
	model3d: uc,
	colorpicker: Z1,
	timeseries: rC,
	markdown: lC,
	html: uC,
	code: dC
};
function yi(e, t, r) {
	const a = e.slice();
	return (a[30] = t[r]), a;
}
function gi(e, t, r) {
	const a = e.slice();
	return (a[33] = t[r]), (a[35] = r), a;
}
function _i(e, t, r) {
	const a = e.slice();
	return (a[0] = t[r].value), (a[37] = t[r].component), (a[39] = r), a;
}
function Ei(e, t, r) {
	const a = e.slice();
	return (a[40] = t[r]), a;
}
function Ri(e, t, r) {
	const a = e.slice();
	return (a[33] = t[r]), (a[35] = r), a;
}
function fC(e) {
	let t,
		r,
		a,
		n,
		o,
		l,
		i,
		u = e[3],
		s = [];
	for (let v = 0; v < u.length; v += 1) s[v] = Ci(Ei(e, u, v));
	let p = e[12],
		d = [];
	for (let v = 0; v < p.length; v += 1) d[v] = qi(gi(e, p, v));
	const m = (v) =>
		ae(d[v], 1, 1, () => {
			d[v] = null;
		});
	return {
		c() {
			(t = k("div")), (r = k("table")), (a = k("thead")), (n = k("tr"));
			for (let v = 0; v < s.length; v += 1) s[v].c();
			(o = Re()), (l = k("tbody"));
			for (let v = 0; v < d.length; v += 1) d[v].c();
			I(n, "class", "tr-head svelte-13hsdno"),
				I(r, "class", "svelte-13hsdno"),
				I(t, "class", "table-wrap svelte-13hsdno");
		},
		m(v, y) {
			j(v, t, y), U(t, r), U(r, a), U(a, n);
			for (let f = 0; f < s.length; f += 1) s[f] && s[f].m(n, null);
			U(r, o), U(r, l);
			for (let f = 0; f < d.length; f += 1) d[f] && d[f].m(l, null);
			i = !0;
		},
		p(v, y) {
			if (y[0] & 8) {
				u = v[3];
				let f;
				for (f = 0; f < u.length; f += 1) {
					const R = Ei(v, u, f);
					s[f] ? s[f].p(R, y) : ((s[f] = Ci(R)), s[f].c(), s[f].m(n, null));
				}
				for (; f < s.length; f += 1) s[f].d(1);
				s.length = u.length;
			}
			if (y[0] & 448899) {
				p = v[12];
				let f;
				for (f = 0; f < p.length; f += 1) {
					const R = gi(v, p, f);
					d[f]
						? (d[f].p(R, y), Q(d[f], 1))
						: ((d[f] = qi(R)), d[f].c(), Q(d[f], 1), d[f].m(l, null));
				}
				for (Ve(), f = p.length; f < d.length; f += 1) m(f);
				ze();
			}
		},
		i(v) {
			if (!i) {
				for (let y = 0; y < p.length; y += 1) Q(d[y]);
				i = !0;
			}
		},
		o(v) {
			d = d.filter(Boolean);
			for (let y = 0; y < d.length; y += 1) ae(d[y]);
			i = !1;
		},
		d(v) {
			v && B(t), Ue(s, v), Ue(d, v);
		}
	};
}
function pC(e) {
	let t,
		r,
		a = e[9],
		n = [];
	for (let l = 0; l < a.length; l += 1) n[l] = Oi(Ri(e, a, l));
	const o = (l) =>
		ae(n[l], 1, 1, () => {
			n[l] = null;
		});
	return {
		c() {
			t = k("div");
			for (let l = 0; l < n.length; l += 1) n[l].c();
			I(t, "class", "gallery svelte-13hsdno");
		},
		m(l, i) {
			j(l, t, i);
			for (let u = 0; u < n.length; u += 1) n[u] && n[u].m(t, null);
			r = !0;
		},
		p(l, i) {
			if (i[0] & 449411) {
				a = l[9];
				let u;
				for (u = 0; u < a.length; u += 1) {
					const s = Ri(l, a, u);
					n[u]
						? (n[u].p(s, i), Q(n[u], 1))
						: ((n[u] = Oi(s)), n[u].c(), Q(n[u], 1), n[u].m(t, null));
				}
				for (Ve(), u = a.length; u < n.length; u += 1) o(u);
				ze();
			}
		},
		i(l) {
			if (!r) {
				for (let i = 0; i < a.length; i += 1) Q(n[i]);
				r = !0;
			}
		},
		o(l) {
			n = n.filter(Boolean);
			for (let i = 0; i < n.length; i += 1) ae(n[i]);
			r = !1;
		},
		d(l) {
			l && B(t), Ue(n, l);
		}
	};
}
function Ci(e) {
	let t,
		r = e[40] + "",
		a,
		n;
	return {
		c() {
			(t = k("th")), (a = X(r)), (n = Re()), I(t, "class", "svelte-13hsdno");
		},
		m(o, l) {
			j(o, t, l), U(t, a), U(t, n);
		},
		p(o, l) {
			l[0] & 8 && r !== (r = o[40] + "") && le(a, r);
		},
		d(o) {
			o && B(t);
		}
	};
}
function Pi(e) {
	let t, r, a;
	var n = e[37];
	function o(l) {
		return {
			props: {
				value: l[0],
				samples_dir: l[15],
				type: "table",
				selected: l[11] === l[35],
				index: l[35]
			}
		};
	}
	return (
		n && (r = Zt(n, o(e))),
		{
			c() {
				(t = k("td")), r && er(r.$$.fragment), I(t, "class", "svelte-13hsdno");
			},
			m(l, i) {
				j(l, t, i), r && tr(r, t, null), (a = !0);
			},
			p(l, i) {
				const u = {};
				if (
					(i[0] & 4096 && (u.value = l[0]),
					i[0] & 2048 && (u.selected = l[11] === l[35]),
					i[0] & 4096 && n !== (n = l[37]))
				) {
					if (r) {
						Ve();
						const s = r;
						ae(s.$$.fragment, 1, 0, () => {
							rr(s, 1);
						}),
							ze();
					}
					n
						? ((r = Zt(n, o(l))),
						  er(r.$$.fragment),
						  Q(r.$$.fragment, 1),
						  tr(r, t, null))
						: (r = null);
				} else n && r.$set(u);
			},
			i(l) {
				a || (r && Q(r.$$.fragment, l), (a = !0));
			},
			o(l) {
				r && ae(r.$$.fragment, l), (a = !1);
			},
			d(l) {
				l && B(t), r && rr(r);
			}
		}
	);
}
function wi(e) {
	let t,
		r,
		a = e[1][e[39]] !== void 0 && Xe[e[1][e[39]]] !== void 0 && Pi(e);
	return {
		c() {
			a && a.c(), (t = mt());
		},
		m(n, o) {
			a && a.m(n, o), j(n, t, o), (r = !0);
		},
		p(n, o) {
			n[1][n[39]] !== void 0 && Xe[n[1][n[39]]] !== void 0
				? a
					? (a.p(n, o), o[0] & 2 && Q(a, 1))
					: ((a = Pi(n)), a.c(), Q(a, 1), a.m(t.parentNode, t))
				: a &&
				  (Ve(),
				  ae(a, 1, 1, () => {
						a = null;
				  }),
				  ze());
		},
		i(n) {
			r || (Q(a), (r = !0));
		},
		o(n) {
			ae(a), (r = !1);
		},
		d(n) {
			a && a.d(n), n && B(t);
		}
	};
}
function qi(e) {
	let t,
		r,
		a,
		n,
		o,
		l = e[33],
		i = [];
	for (let d = 0; d < l.length; d += 1) i[d] = wi(_i(e, l, d));
	const u = (d) =>
		ae(i[d], 1, 1, () => {
			i[d] = null;
		});
	function s() {
		return e[26](e[35]);
	}
	function p() {
		return e[27](e[35]);
	}
	return {
		c() {
			t = k("tr");
			for (let d = 0; d < i.length; d += 1) i[d].c();
			(r = Re()), I(t, "class", "tr-body svelte-13hsdno");
		},
		m(d, m) {
			j(d, t, m);
			for (let v = 0; v < i.length; v += 1) i[v] && i[v].m(t, null);
			U(t, r),
				(a = !0),
				n ||
					((o = [
						_e(t, "click", s),
						_e(t, "mouseenter", p),
						_e(t, "mouseleave", e[28])
					]),
					(n = !0));
		},
		p(d, m) {
			if (((e = d), m[0] & 38914)) {
				l = e[33];
				let v;
				for (v = 0; v < l.length; v += 1) {
					const y = _i(e, l, v);
					i[v]
						? (i[v].p(y, m), Q(i[v], 1))
						: ((i[v] = wi(y)), i[v].c(), Q(i[v], 1), i[v].m(t, r));
				}
				for (Ve(), v = l.length; v < i.length; v += 1) u(v);
				ze();
			}
		},
		i(d) {
			if (!a) {
				for (let m = 0; m < l.length; m += 1) Q(i[m]);
				a = !0;
			}
		},
		o(d) {
			i = i.filter(Boolean);
			for (let m = 0; m < i.length; m += 1) ae(i[m]);
			a = !1;
		},
		d(d) {
			d && B(t), Ue(i, d), (n = !1), cr(o);
		}
	};
}
function Ti(e) {
	let t, r, a;
	var n = e[12][0][0].component;
	function o(l) {
		return {
			props: {
				value: l[33][0],
				samples_dir: l[15],
				type: "gallery",
				selected: l[11] === l[35],
				index: l[35]
			}
		};
	}
	return (
		n && (t = Zt(n, o(e))),
		{
			c() {
				t && er(t.$$.fragment), (r = mt());
			},
			m(l, i) {
				t && tr(t, l, i), j(l, r, i), (a = !0);
			},
			p(l, i) {
				const u = {};
				if (
					(i[0] & 512 && (u.value = l[33][0]),
					i[0] & 2048 && (u.selected = l[11] === l[35]),
					i[0] & 4096 && n !== (n = l[12][0][0].component))
				) {
					if (t) {
						Ve();
						const s = t;
						ae(s.$$.fragment, 1, 0, () => {
							rr(s, 1);
						}),
							ze();
					}
					n
						? ((t = Zt(n, o(l))),
						  er(t.$$.fragment),
						  Q(t.$$.fragment, 1),
						  tr(t, r.parentNode, r))
						: (t = null);
				} else n && t.$set(u);
			},
			i(l) {
				a || (t && Q(t.$$.fragment, l), (a = !0));
			},
			o(l) {
				t && ae(t.$$.fragment, l), (a = !1);
			},
			d(l) {
				l && B(r), t && rr(t, l);
			}
		}
	);
}
function Oi(e) {
	let t,
		r = Object.keys(Xe).includes(e[1][0]) && Xe[e[1][0]],
		a,
		n,
		o,
		l,
		i = r && Ti(e);
	function u() {
		return e[23](e[35], e[33]);
	}
	function s() {
		return e[24](e[35]);
	}
	return {
		c() {
			(t = k("button")),
				i && i.c(),
				(a = Re()),
				I(t, "class", "gallery-item svelte-13hsdno");
		},
		m(p, d) {
			j(p, t, d),
				i && i.m(t, null),
				U(t, a),
				(n = !0),
				o ||
					((l = [
						_e(t, "click", u),
						_e(t, "mouseenter", s),
						_e(t, "mouseleave", e[25])
					]),
					(o = !0));
		},
		p(p, d) {
			(e = p),
				d[0] & 2 && (r = Object.keys(Xe).includes(e[1][0]) && Xe[e[1][0]]),
				r
					? i
						? (i.p(e, d), d[0] & 2 && Q(i, 1))
						: ((i = Ti(e)), i.c(), Q(i, 1), i.m(t, a))
					: i &&
					  (Ve(),
					  ae(i, 1, 1, () => {
							i = null;
					  }),
					  ze());
		},
		i(p) {
			n || (Q(i), (n = !0));
		},
		o(p) {
			ae(i), (n = !1);
		},
		d(p) {
			p && B(t), i && i.d(), (o = !1), cr(l);
		}
	};
}
function mC(e) {
	let t,
		r,
		a = e[10],
		n = [];
	for (let o = 0; o < a.length; o += 1) n[o] = Mi(yi(e, a, o));
	return {
		c() {
			(t = k("div")),
				(r = X(`Pages:
			`));
			for (let o = 0; o < n.length; o += 1) n[o].c();
			I(t, "class", "paginate svelte-13hsdno");
		},
		m(o, l) {
			j(o, t, l), U(t, r);
			for (let i = 0; i < n.length; i += 1) n[i] && n[i].m(t, null);
		},
		p(o, l) {
			if (l[0] & 1280) {
				a = o[10];
				let i;
				for (i = 0; i < a.length; i += 1) {
					const u = yi(o, a, i);
					n[i] ? n[i].p(u, l) : ((n[i] = Mi(u)), n[i].c(), n[i].m(t, null));
				}
				for (; i < n.length; i += 1) n[i].d(1);
				n.length = a.length;
			}
		},
		d(o) {
			o && B(t), Ue(n, o);
		}
	};
}
function vC(e) {
	let t,
		r = e[30] + 1 + "",
		a,
		n,
		o,
		l;
	function i() {
		return e[29](e[30]);
	}
	return {
		c() {
			(t = k("button")),
				(a = X(r)),
				(n = Re()),
				I(t, "class", "svelte-13hsdno"),
				g(t, "current-page", e[8] === e[30]);
		},
		m(u, s) {
			j(u, t, s), U(t, a), U(t, n), o || ((l = _e(t, "click", i)), (o = !0));
		},
		p(u, s) {
			(e = u),
				s[0] & 1024 && r !== (r = e[30] + 1 + "") && le(a, r),
				s[0] & 1280 && g(t, "current-page", e[8] === e[30]);
		},
		d(u) {
			u && B(t), (o = !1), l();
		}
	};
}
function bC(e) {
	let t;
	return {
		c() {
			(t = k("div")), (t.textContent = "...");
		},
		m(r, a) {
			j(r, t, a);
		},
		p: $,
		d(r) {
			r && B(t);
		}
	};
}
function Mi(e) {
	let t;
	function r(o, l) {
		return o[30] === -1 ? bC : vC;
	}
	let a = r(e),
		n = a(e);
	return {
		c() {
			n.c(), (t = mt());
		},
		m(o, l) {
			n.m(o, l), j(o, t, l);
		},
		p(o, l) {
			a === (a = r(o)) && n
				? n.p(o, l)
				: (n.d(1), (n = a(o)), n && (n.c(), n.m(t.parentNode, t)));
		},
		d(o) {
			n.d(o), o && B(t);
		}
	};
}
function hC(e) {
	let t, r, a, n, o, l, i, u, s, p, d, m;
	const v = [pC, fC],
		y = [];
	function f(E, T) {
		return E[13] ? 0 : 1;
	}
	(u = f(e)), (s = y[u] = v[u](e));
	let R = e[16] && mC(e);
	return {
		c() {
			(t = k("div")),
				(r = k("div")),
				(a = ho("svg")),
				(n = ho("path")),
				(o = Re()),
				(l = X(e[2])),
				(i = Re()),
				s.c(),
				(p = Re()),
				R && R.c(),
				I(n, "fill", "currentColor"),
				I(
					n,
					"d",
					"M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"
				),
				I(a, "xmlns", "http://www.w3.org/2000/svg"),
				I(a, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
				I(a, "aria-hidden", "true"),
				I(a, "role", "img"),
				I(a, "width", "1em"),
				I(a, "height", "1em"),
				I(a, "preserveAspectRatio", "xMidYMid meet"),
				I(a, "viewBox", "0 0 32 32"),
				I(a, "class", "svelte-13hsdno"),
				I(r, "class", "label svelte-13hsdno"),
				I(t, "id", e[4]),
				I(t, "class", (d = "wrap " + e[5].join(" ") + " svelte-13hsdno")),
				g(t, "hide", !e[6]);
		},
		m(E, T) {
			j(E, t, T),
				U(t, r),
				U(r, a),
				U(a, n),
				U(r, o),
				U(r, l),
				U(t, i),
				y[u].m(t, null),
				U(t, p),
				R && R.m(t, null),
				(m = !0);
		},
		p(E, T) {
			(!m || T[0] & 4) && le(l, E[2]);
			let O = u;
			(u = f(E)),
				u === O
					? y[u].p(E, T)
					: (Ve(),
					  ae(y[O], 1, 1, () => {
							y[O] = null;
					  }),
					  ze(),
					  (s = y[u]),
					  s ? s.p(E, T) : ((s = y[u] = v[u](E)), s.c()),
					  Q(s, 1),
					  s.m(t, p)),
				E[16] && R.p(E, T),
				(!m || T[0] & 16) && I(t, "id", E[4]),
				(!m ||
					(T[0] & 32 &&
						d !== (d = "wrap " + E[5].join(" ") + " svelte-13hsdno"))) &&
					I(t, "class", d),
				(!m || T[0] & 96) && g(t, "hide", !E[6]);
		},
		i(E) {
			m || (Q(s), (m = !0));
		},
		o(E) {
			ae(s), (m = !1);
		},
		d(E) {
			E && B(t), y[u].d(), R && R.d();
		}
	};
}
function yC(e, t, r) {
	let a,
		n,
		{ components: o } = t,
		{ label: l = "Examples" } = t,
		{ headers: i } = t,
		{ samples: u } = t,
		{ elem_id: s = "" } = t,
		{ elem_classes: p = [] } = t,
		{ visible: d = !0 } = t,
		{ value: m = null } = t,
		{ root: v } = t,
		{ root_url: y } = t,
		{ samples_per_page: f = 10 } = t;
	const R = rc();
	let E = y ? "proxy=" + y + "/file=" : v + "/file=",
		T = 0,
		O = u.length > f,
		A,
		S,
		b = [],
		w = -1;
	function q(x) {
		r(11, (w = x));
	}
	function z() {
		r(11, (w = -1));
	}
	const c = (x, _) => {
			r(0, (m = x + T * f)), R("click", m), R("select", { index: m, value: _ });
		},
		ie = (x) => q(x),
		pe = () => z(),
		F = (x) => {
			r(0, (m = x + T * f)), R("click", m);
		},
		oe = (x) => q(x),
		K = () => z(),
		ue = (x) => r(8, (T = x));
	return (
		(e.$$set = (x) => {
			"components" in x && r(1, (o = x.components)),
				"label" in x && r(2, (l = x.label)),
				"headers" in x && r(3, (i = x.headers)),
				"samples" in x && r(19, (u = x.samples)),
				"elem_id" in x && r(4, (s = x.elem_id)),
				"elem_classes" in x && r(5, (p = x.elem_classes)),
				"visible" in x && r(6, (d = x.visible)),
				"value" in x && r(0, (m = x.value)),
				"root" in x && r(20, (v = x.root)),
				"root_url" in x && r(21, (y = x.root_url)),
				"samples_per_page" in x && r(7, (f = x.samples_per_page));
		}),
		(e.$$.update = () => {
			e.$$.dirty[0] & 2 && r(13, (a = o.length < 2)),
				e.$$.dirty[0] & 472e4 &&
					(O
						? (r(10, (b = [])),
						  r(9, (A = u.slice(T * f, (T + 1) * f))),
						  r(22, (S = Math.ceil(u.length / f))),
						  [0, T, S - 1].forEach((x) => {
								for (let _ = x - 2; _ <= x + 2; _++)
									_ >= 0 &&
										_ < S &&
										!b.includes(_) &&
										(b.length > 0 && _ - b[b.length - 1] > 1 && b.push(-1),
										b.push(_));
						  }))
						: r(9, (A = u.slice()))),
				e.$$.dirty[0] & 514 &&
					r(
						12,
						(n = A.map((x) =>
							x.map((_, h) => ({ value: _, component: Xe[o[h]] }))
						))
					);
		}),
		[
			m,
			o,
			l,
			i,
			s,
			p,
			d,
			f,
			T,
			A,
			b,
			w,
			n,
			a,
			R,
			E,
			O,
			q,
			z,
			u,
			v,
			y,
			S,
			c,
			ie,
			pe,
			F,
			oe,
			K,
			ue
		]
	);
}
class gC extends Y {
	constructor(t) {
		super(),
			Z(
				this,
				t,
				yC,
				hC,
				ee,
				{
					components: 1,
					label: 2,
					headers: 3,
					samples: 19,
					elem_id: 4,
					elem_classes: 5,
					visible: 6,
					value: 0,
					root: 20,
					root_url: 21,
					samples_per_page: 7
				},
				null,
				[-1, -1]
			);
	}
}
const TC = gC,
	OC = ["dynamic"],
	MC = () => ({
		type: { payload: "number" },
		description: { payload: "index of selected row" },
		example_data: 0
	});
export { TC as Component, MC as document, OC as modes };
//# sourceMappingURL=index-3ee78603.js.map
