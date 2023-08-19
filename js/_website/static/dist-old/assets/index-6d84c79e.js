import {
	S as si,
	i as ri,
	s as oi,
	B as io,
	C as se,
	g as Ce,
	E as Yt,
	F as xi,
	q as Ae,
	_ as Pe,
	G as dt,
	r as Xl,
	u as Xc,
	b as vr,
	e as fe,
	H as pt,
	M as yn,
	m as ue,
	J as Zl,
	p as H,
	l as _n,
	t as j,
	o as Vn,
	n as de,
	a5 as Ql,
	aa as ea,
	ab as bn,
	ac as wn,
	f as ta,
	x as ia,
	$ as na,
	a as sa,
	h as ra,
	j as oa,
	k as la
} from "../lite.js";
import "./Blocks-b77f2878.js";
import { B as aa } from "./Button-5b68d65a.js";
import { B as ha } from "./BlockLabel-e392131b.js";
import { E as Zc } from "./Empty-b331fdfe.js";
/* empty css                                                    */ import {
	C as Qc,
	a as ca
} from "./Copy-d120a3d6.js";
import { D as ef } from "./Download-604a4bc6.js";
function tf(n) {
	let e, t;
	return {
		c() {
			(e = io("svg")),
				(t = io("path")),
				se(t, "fill", "currentColor"),
				se(
					t,
					"d",
					"m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7zm11.42 9.484L17.64 6l1.932.517L14.352 26z"
				),
				se(e, "width", "100%"),
				se(e, "height", "100%"),
				se(e, "viewBox", "0 0 32 32");
		},
		m(i, s) {
			Ce(i, e, s), Yt(e, t);
		},
		p: xi,
		i: xi,
		o: xi,
		d(i) {
			i && Ae(e);
		}
	};
}
let Sr = class extends si {
	constructor(e) {
		super(), ri(this, e, null, tf, oi, {});
	}
};
class _ {
	constructor() {}
	lineAt(e) {
		if (e < 0 || e > this.length)
			throw new RangeError(
				`Invalid position ${e} in document of length ${this.length}`
			);
		return this.lineInner(e, !1, 1, 0);
	}
	line(e) {
		if (e < 1 || e > this.lines)
			throw new RangeError(
				`Invalid line number ${e} in ${this.lines}-line document`
			);
		return this.lineInner(e, !0, 1, 0);
	}
	replace(e, t, i) {
		let s = [];
		return (
			this.decompose(0, e, s, 2),
			i.length && i.decompose(0, i.length, s, 3),
			this.decompose(t, this.length, s, 1),
			Ge.from(s, this.length - (t - e) + i.length)
		);
	}
	append(e) {
		return this.replace(this.length, this.length, e);
	}
	slice(e, t = this.length) {
		let i = [];
		return this.decompose(e, t, i, 0), Ge.from(i, t - e);
	}
	eq(e) {
		if (e == this) return !0;
		if (e.length != this.length || e.lines != this.lines) return !1;
		let t = this.scanIdentical(e, 1),
			i = this.length - this.scanIdentical(e, -1),
			s = new vi(this),
			r = new vi(e);
		for (let o = t, l = t; ; ) {
			if (
				(s.next(o),
				r.next(o),
				(o = 0),
				s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
			)
				return !1;
			if (((l += s.value.length), s.done || l >= i)) return !0;
		}
	}
	iter(e = 1) {
		return new vi(this, e);
	}
	iterRange(e, t = this.length) {
		return new fa(this, e, t);
	}
	iterLines(e, t) {
		let i;
		if (e == null) i = this.iter();
		else {
			t == null && (t = this.lines + 1);
			let s = this.line(e).from;
			i = this.iterRange(
				s,
				Math.max(
					s,
					t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to
				)
			);
		}
		return new ua(i);
	}
	toString() {
		return this.sliceString(0);
	}
	toJSON() {
		let e = [];
		return this.flatten(e), e;
	}
	static of(e) {
		if (e.length == 0)
			throw new RangeError("A document must have at least one line");
		return e.length == 1 && !e[0]
			? _.empty
			: e.length <= 32
			? new te(e)
			: Ge.from(te.split(e, []));
	}
}
class te extends _ {
	constructor(e, t = nf(e)) {
		super(), (this.text = e), (this.length = t);
	}
	get lines() {
		return this.text.length;
	}
	get children() {
		return null;
	}
	lineInner(e, t, i, s) {
		for (let r = 0; ; r++) {
			let o = this.text[r],
				l = s + o.length;
			if ((t ? i : l) >= e) return new sf(s, l, i, o);
			(s = l + 1), i++;
		}
	}
	decompose(e, t, i, s) {
		let r =
			e <= 0 && t >= this.length
				? this
				: new te(
						no(this.text, e, t),
						Math.min(t, this.length) - Math.max(0, e)
				  );
		if (s & 1) {
			let o = i.pop(),
				l = fn(r.text, o.text.slice(), 0, r.length);
			if (l.length <= 32) i.push(new te(l, o.length + r.length));
			else {
				let a = l.length >> 1;
				i.push(new te(l.slice(0, a)), new te(l.slice(a)));
			}
		} else i.push(r);
	}
	replace(e, t, i) {
		if (!(i instanceof te)) return super.replace(e, t, i);
		let s = fn(this.text, fn(i.text, no(this.text, 0, e)), t),
			r = this.length + i.length - (t - e);
		return s.length <= 32 ? new te(s, r) : Ge.from(te.split(s, []), r);
	}
	sliceString(
		e,
		t = this.length,
		i = `
`
	) {
		let s = "";
		for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
			let l = this.text[o],
				a = r + l.length;
			r > e && o && (s += i),
				e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)),
				(r = a + 1);
		}
		return s;
	}
	flatten(e) {
		for (let t of this.text) e.push(t);
	}
	scanIdentical() {
		return 0;
	}
	static split(e, t) {
		let i = [],
			s = -1;
		for (let r of e)
			i.push(r),
				(s += r.length + 1),
				i.length == 32 && (t.push(new te(i, s)), (i = []), (s = -1));
		return s > -1 && t.push(new te(i, s)), t;
	}
}
class Ge extends _ {
	constructor(e, t) {
		super(), (this.children = e), (this.length = t), (this.lines = 0);
		for (let i of e) this.lines += i.lines;
	}
	lineInner(e, t, i, s) {
		for (let r = 0; ; r++) {
			let o = this.children[r],
				l = s + o.length,
				a = i + o.lines - 1;
			if ((t ? a : l) >= e) return o.lineInner(e, t, i, s);
			(s = l + 1), (i = a + 1);
		}
	}
	decompose(e, t, i, s) {
		for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
			let l = this.children[r],
				a = o + l.length;
			if (e <= a && t >= o) {
				let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
				o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
			}
			o = a + 1;
		}
	}
	replace(e, t, i) {
		if (i.lines < this.lines)
			for (let s = 0, r = 0; s < this.children.length; s++) {
				let o = this.children[s],
					l = r + o.length;
				if (e >= r && t <= l) {
					let a = o.replace(e - r, t - r, i),
						h = this.lines - o.lines + a.lines;
					if (a.lines < h >> (5 - 1) && a.lines > h >> (5 + 1)) {
						let c = this.children.slice();
						return (c[s] = a), new Ge(c, this.length - (t - e) + i.length);
					}
					return super.replace(r, l, a);
				}
				r = l + 1;
			}
		return super.replace(e, t, i);
	}
	sliceString(
		e,
		t = this.length,
		i = `
`
	) {
		let s = "";
		for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
			let l = this.children[r],
				a = o + l.length;
			o > e && r && (s += i),
				e < a && t > o && (s += l.sliceString(e - o, t - o, i)),
				(o = a + 1);
		}
		return s;
	}
	flatten(e) {
		for (let t of this.children) t.flatten(e);
	}
	scanIdentical(e, t) {
		if (!(e instanceof Ge)) return 0;
		let i = 0,
			[s, r, o, l] =
				t > 0
					? [0, 0, this.children.length, e.children.length]
					: [this.children.length - 1, e.children.length - 1, -1, -1];
		for (; ; s += t, r += t) {
			if (s == o || r == l) return i;
			let a = this.children[s],
				h = e.children[r];
			if (a != h) return i + a.scanIdentical(h, t);
			i += a.length + 1;
		}
	}
	static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
		let i = 0;
		for (let d of e) i += d.lines;
		if (i < 32) {
			let d = [];
			for (let p of e) p.flatten(d);
			return new te(d, t);
		}
		let s = Math.max(32, i >> 5),
			r = s << 1,
			o = s >> 1,
			l = [],
			a = 0,
			h = -1,
			c = [];
		function f(d) {
			let p;
			if (d.lines > r && d instanceof Ge) for (let g of d.children) f(g);
			else
				d.lines > o && (a > o || !a)
					? (u(), l.push(d))
					: d instanceof te &&
					  a &&
					  (p = c[c.length - 1]) instanceof te &&
					  d.lines + p.lines <= 32
					? ((a += d.lines),
					  (h += d.length + 1),
					  (c[c.length - 1] = new te(
							p.text.concat(d.text),
							p.length + 1 + d.length
					  )))
					: (a + d.lines > s && u(),
					  (a += d.lines),
					  (h += d.length + 1),
					  c.push(d));
		}
		function u() {
			a != 0 &&
				(l.push(c.length == 1 ? c[0] : Ge.from(c, h)),
				(h = -1),
				(a = c.length = 0));
		}
		for (let d of e) f(d);
		return u(), l.length == 1 ? l[0] : new Ge(l, t);
	}
}
_.empty = new te([""], 0);
function nf(n) {
	let e = -1;
	for (let t of n) e += t.length + 1;
	return e;
}
function fn(n, e, t = 0, i = 1e9) {
	for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
		let l = n[r],
			a = s + l.length;
		a >= t &&
			(a > i && (l = l.slice(0, i - s)),
			s < t && (l = l.slice(t - s)),
			o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
			(s = a + 1);
	}
	return e;
}
function no(n, e, t) {
	return fn(n, [""], e, t);
}
class vi {
	constructor(e, t = 1) {
		(this.dir = t),
			(this.done = !1),
			(this.lineBreak = !1),
			(this.value = ""),
			(this.nodes = [e]),
			(this.offsets = [
				t > 0 ? 1 : (e instanceof te ? e.text.length : e.children.length) << 1
			]);
	}
	nextInner(e, t) {
		for (this.done = this.lineBreak = !1; ; ) {
			let i = this.nodes.length - 1,
				s = this.nodes[i],
				r = this.offsets[i],
				o = r >> 1,
				l = s instanceof te ? s.text.length : s.children.length;
			if (o == (t > 0 ? l : 0)) {
				if (i == 0) return (this.done = !0), (this.value = ""), this;
				t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
			} else if ((r & 1) == (t > 0 ? 0 : 1)) {
				if (((this.offsets[i] += t), e == 0))
					return (
						(this.lineBreak = !0),
						(this.value = `
`),
						this
					);
				e--;
			} else if (s instanceof te) {
				let a = s.text[o + (t < 0 ? -1 : 0)];
				if (((this.offsets[i] += t), a.length > Math.max(0, e)))
					return (
						(this.value =
							e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)),
						this
					);
				e -= a.length;
			} else {
				let a = s.children[o + (t < 0 ? -1 : 0)];
				e > a.length
					? ((e -= a.length), (this.offsets[i] += t))
					: (t < 0 && this.offsets[i]--,
					  this.nodes.push(a),
					  this.offsets.push(
							t > 0
								? 1
								: (a instanceof te ? a.text.length : a.children.length) << 1
					  ));
			}
		}
	}
	next(e = 0) {
		return (
			e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)),
			this.nextInner(e, this.dir)
		);
	}
}
class fa {
	constructor(e, t, i) {
		(this.value = ""),
			(this.done = !1),
			(this.cursor = new vi(e, t > i ? -1 : 1)),
			(this.pos = t > i ? e.length : 0),
			(this.from = Math.min(t, i)),
			(this.to = Math.max(t, i));
	}
	nextInner(e, t) {
		if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
			return (this.value = ""), (this.done = !0), this;
		e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
		let i = t < 0 ? this.pos - this.from : this.to - this.pos;
		e > i && (e = i), (i -= e);
		let { value: s } = this.cursor.next(e);
		return (
			(this.pos += (s.length + e) * t),
			(this.value =
				s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i)),
			(this.done = !this.value),
			this
		);
	}
	next(e = 0) {
		return (
			e < 0
				? (e = Math.max(e, this.from - this.pos))
				: e > 0 && (e = Math.min(e, this.to - this.pos)),
			this.nextInner(e, this.cursor.dir)
		);
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != "";
	}
}
class ua {
	constructor(e) {
		(this.inner = e),
			(this.afterBreak = !0),
			(this.value = ""),
			(this.done = !1);
	}
	next(e = 0) {
		let { done: t, lineBreak: i, value: s } = this.inner.next(e);
		return (
			t
				? ((this.done = !0), (this.value = ""))
				: i
				? this.afterBreak
					? (this.value = "")
					: ((this.afterBreak = !0), this.next())
				: ((this.value = s), (this.afterBreak = !1)),
			this
		);
	}
	get lineBreak() {
		return !1;
	}
}
typeof Symbol < "u" &&
	((_.prototype[Symbol.iterator] = function () {
		return this.iter();
	}),
	(vi.prototype[Symbol.iterator] =
		fa.prototype[Symbol.iterator] =
		ua.prototype[Symbol.iterator] =
			function () {
				return this;
			}));
class sf {
	constructor(e, t, i, s) {
		(this.from = e), (this.to = t), (this.number = i), (this.text = s);
	}
	get length() {
		return this.to - this.from;
	}
}
let Ut =
	"lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o"
		.split(",")
		.map((n) => (n ? parseInt(n, 36) : 1));
for (let n = 1; n < Ut.length; n++) Ut[n] += Ut[n - 1];
function rf(n) {
	for (let e = 1; e < Ut.length; e += 2) if (Ut[e] > n) return Ut[e - 1] <= n;
	return !1;
}
function so(n) {
	return n >= 127462 && n <= 127487;
}
const ro = 8205;
function Oe(n, e, t = !0, i = !0) {
	return (t ? da : of)(n, e, i);
}
function da(n, e, t) {
	if (e == n.length) return e;
	e && pa(n.charCodeAt(e)) && ma(n.charCodeAt(e - 1)) && e--;
	let i = ge(n, e);
	for (e += Ee(i); e < n.length; ) {
		let s = ge(n, e);
		if (i == ro || s == ro || (t && rf(s))) (e += Ee(s)), (i = s);
		else if (so(s)) {
			let r = 0,
				o = e - 2;
			for (; o >= 0 && so(ge(n, o)); ) r++, (o -= 2);
			if (r % 2 == 0) break;
			e += 2;
		} else break;
	}
	return e;
}
function of(n, e, t) {
	for (; e > 0; ) {
		let i = da(n, e - 2, t);
		if (i < e) return i;
		e--;
	}
	return 0;
}
function pa(n) {
	return n >= 56320 && n < 57344;
}
function ma(n) {
	return n >= 55296 && n < 56320;
}
function ge(n, e) {
	let t = n.charCodeAt(e);
	if (!ma(t) || e + 1 == n.length) return t;
	let i = n.charCodeAt(e + 1);
	return pa(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t;
}
function ga(n) {
	return n <= 65535
		? String.fromCharCode(n)
		: ((n -= 65536),
		  String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function Ee(n) {
	return n < 65536 ? 1 : 2;
}
const Bs = /\r\n?|\n/;
var ce = (function (n) {
	return (
		(n[(n.Simple = 0)] = "Simple"),
		(n[(n.TrackDel = 1)] = "TrackDel"),
		(n[(n.TrackBefore = 2)] = "TrackBefore"),
		(n[(n.TrackAfter = 3)] = "TrackAfter"),
		n
	);
})(ce || (ce = {}));
class Ze {
	constructor(e) {
		this.sections = e;
	}
	get length() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
		return e;
	}
	get newLength() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) {
			let i = this.sections[t + 1];
			e += i < 0 ? this.sections[t] : i;
		}
		return e;
	}
	get empty() {
		return (
			this.sections.length == 0 ||
			(this.sections.length == 2 && this.sections[1] < 0)
		);
	}
	iterGaps(e) {
		for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
			let r = this.sections[t++],
				o = this.sections[t++];
			o < 0 ? (e(i, s, r), (s += r)) : (s += o), (i += r);
		}
	}
	iterChangedRanges(e, t = !1) {
		Ps(this, e, t);
	}
	get invertedDesc() {
		let e = [];
		for (let t = 0; t < this.sections.length; ) {
			let i = this.sections[t++],
				s = this.sections[t++];
			s < 0 ? e.push(i, s) : e.push(s, i);
		}
		return new Ze(e);
	}
	composeDesc(e) {
		return this.empty ? e : e.empty ? this : ya(this, e);
	}
	mapDesc(e, t = !1) {
		return e.empty ? this : Es(this, e, t);
	}
	mapPos(e, t = -1, i = ce.Simple) {
		let s = 0,
			r = 0;
		for (let o = 0; o < this.sections.length; ) {
			let l = this.sections[o++],
				a = this.sections[o++],
				h = s + l;
			if (a < 0) {
				if (h > e) return r + (e - s);
				r += l;
			} else {
				if (
					i != ce.Simple &&
					h >= e &&
					((i == ce.TrackDel && s < e && h > e) ||
						(i == ce.TrackBefore && s < e) ||
						(i == ce.TrackAfter && h > e))
				)
					return null;
				if (h > e || (h == e && t < 0 && !l))
					return e == s || t < 0 ? r : r + a;
				r += a;
			}
			s = h;
		}
		if (e > s)
			throw new RangeError(
				`Position ${e} is out of range for changeset of length ${s}`
			);
		return r;
	}
	touchesRange(e, t = e) {
		for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
			let r = this.sections[i++],
				o = this.sections[i++],
				l = s + r;
			if (o >= 0 && s <= t && l >= e) return s < e && l > t ? "cover" : !0;
			s = l;
		}
		return !1;
	}
	toString() {
		let e = "";
		for (let t = 0; t < this.sections.length; ) {
			let i = this.sections[t++],
				s = this.sections[t++];
			e += (e ? " " : "") + i + (s >= 0 ? ":" + s : "");
		}
		return e;
	}
	toJSON() {
		return this.sections;
	}
	static fromJSON(e) {
		if (
			!Array.isArray(e) ||
			e.length % 2 ||
			e.some((t) => typeof t != "number")
		)
			throw new RangeError("Invalid JSON representation of ChangeDesc");
		return new Ze(e);
	}
	static create(e) {
		return new Ze(e);
	}
}
class ne extends Ze {
	constructor(e, t) {
		super(e), (this.inserted = t);
	}
	apply(e) {
		if (this.length != e.length)
			throw new RangeError(
				"Applying change set to a document with the wrong length"
			);
		return (
			Ps(this, (t, i, s, r, o) => (e = e.replace(s, s + (i - t), o)), !1), e
		);
	}
	mapDesc(e, t = !1) {
		return Es(this, e, t, !0);
	}
	invert(e) {
		let t = this.sections.slice(),
			i = [];
		for (let s = 0, r = 0; s < t.length; s += 2) {
			let o = t[s],
				l = t[s + 1];
			if (l >= 0) {
				(t[s] = l), (t[s + 1] = o);
				let a = s >> 1;
				for (; i.length < a; ) i.push(_.empty);
				i.push(o ? e.slice(r, r + o) : _.empty);
			}
			r += o;
		}
		return new ne(t, i);
	}
	compose(e) {
		return this.empty ? e : e.empty ? this : ya(this, e, !0);
	}
	map(e, t = !1) {
		return e.empty ? this : Es(this, e, t, !0);
	}
	iterChanges(e, t = !1) {
		Ps(this, e, t);
	}
	get desc() {
		return Ze.create(this.sections);
	}
	filter(e) {
		let t = [],
			i = [],
			s = [],
			r = new Di(this);
		e: for (let o = 0, l = 0; ; ) {
			let a = o == e.length ? 1e9 : e[o++];
			for (; l < a || (l == a && r.len == 0); ) {
				if (r.done) break e;
				let c = Math.min(r.len, a - l);
				me(s, c, -1);
				let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
				me(t, c, f), f > 0 && ht(i, t, r.text), r.forward(c), (l += c);
			}
			let h = e[o++];
			for (; l < h; ) {
				if (r.done) break e;
				let c = Math.min(r.len, h - l);
				me(t, c, -1),
					me(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0),
					r.forward(c),
					(l += c);
			}
		}
		return { changes: new ne(t, i), filtered: Ze.create(s) };
	}
	toJSON() {
		let e = [];
		for (let t = 0; t < this.sections.length; t += 2) {
			let i = this.sections[t],
				s = this.sections[t + 1];
			s < 0
				? e.push(i)
				: s == 0
				? e.push([i])
				: e.push([i].concat(this.inserted[t >> 1].toJSON()));
		}
		return e;
	}
	static of(e, t, i) {
		let s = [],
			r = [],
			o = 0,
			l = null;
		function a(c = !1) {
			if (!c && !s.length) return;
			o < t && me(s, t - o, -1);
			let f = new ne(s, r);
			(l = l ? l.compose(f.map(l)) : f), (s = []), (r = []), (o = 0);
		}
		function h(c) {
			if (Array.isArray(c)) for (let f of c) h(f);
			else if (c instanceof ne) {
				if (c.length != t)
					throw new RangeError(
						`Mismatched change set length (got ${c.length}, expected ${t})`
					);
				a(), (l = l ? l.compose(c.map(l)) : c);
			} else {
				let { from: f, to: u = f, insert: d } = c;
				if (f > u || f < 0 || u > t)
					throw new RangeError(
						`Invalid change range ${f} to ${u} (in doc of length ${t})`
					);
				let p = d
						? typeof d == "string"
							? _.of(d.split(i || Bs))
							: d
						: _.empty,
					g = p.length;
				if (f == u && g == 0) return;
				f < o && a(),
					f > o && me(s, f - o, -1),
					me(s, u - f, g),
					ht(r, s, p),
					(o = u);
			}
		}
		return h(e), a(!l), l;
	}
	static empty(e) {
		return new ne(e ? [e, -1] : [], []);
	}
	static fromJSON(e) {
		if (!Array.isArray(e))
			throw new RangeError("Invalid JSON representation of ChangeSet");
		let t = [],
			i = [];
		for (let s = 0; s < e.length; s++) {
			let r = e[s];
			if (typeof r == "number") t.push(r, -1);
			else {
				if (
					!Array.isArray(r) ||
					typeof r[0] != "number" ||
					r.some((o, l) => l && typeof o != "string")
				)
					throw new RangeError("Invalid JSON representation of ChangeSet");
				if (r.length == 1) t.push(r[0], 0);
				else {
					for (; i.length < s; ) i.push(_.empty);
					(i[s] = _.of(r.slice(1))), t.push(r[0], i[s].length);
				}
			}
		}
		return new ne(t, i);
	}
	static createSet(e, t) {
		return new ne(e, t);
	}
}
function me(n, e, t, i = !1) {
	if (e == 0 && t <= 0) return;
	let s = n.length - 2;
	s >= 0 && t <= 0 && t == n[s + 1]
		? (n[s] += e)
		: e == 0 && n[s] == 0
		? (n[s + 1] += t)
		: i
		? ((n[s] += e), (n[s + 1] += t))
		: n.push(e, t);
}
function ht(n, e, t) {
	if (t.length == 0) return;
	let i = (e.length - 2) >> 1;
	if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
	else {
		for (; n.length < i; ) n.push(_.empty);
		n.push(t);
	}
}
function Ps(n, e, t) {
	let i = n.inserted;
	for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
		let l = n.sections[o++],
			a = n.sections[o++];
		if (a < 0) (s += l), (r += l);
		else {
			let h = s,
				c = r,
				f = _.empty;
			for (
				;
				(h += l),
					(c += a),
					a && i && (f = f.append(i[(o - 2) >> 1])),
					!(t || o == n.sections.length || n.sections[o + 1] < 0);

			)
				(l = n.sections[o++]), (a = n.sections[o++]);
			e(s, h, r, c, f), (s = h), (r = c);
		}
	}
}
function Es(n, e, t, i = !1) {
	let s = [],
		r = i ? [] : null,
		o = new Di(n),
		l = new Di(e);
	for (let a = -1; ; )
		if (o.ins == -1 && l.ins == -1) {
			let h = Math.min(o.len, l.len);
			me(s, h, -1), o.forward(h), l.forward(h);
		} else if (
			l.ins >= 0 &&
			(o.ins < 0 ||
				a == o.i ||
				(o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
		) {
			let h = l.len;
			for (me(s, l.ins, -1); h; ) {
				let c = Math.min(o.len, h);
				o.ins >= 0 &&
					a < o.i &&
					o.len <= c &&
					(me(s, 0, o.ins), r && ht(r, s, o.text), (a = o.i)),
					o.forward(c),
					(h -= c);
			}
			l.next();
		} else if (o.ins >= 0) {
			let h = 0,
				c = o.len;
			for (; c; )
				if (l.ins == -1) {
					let f = Math.min(c, l.len);
					(h += f), (c -= f), l.forward(f);
				} else if (l.ins == 0 && l.len < c) (c -= l.len), l.next();
				else break;
			me(s, h, a < o.i ? o.ins : 0),
				r && a < o.i && ht(r, s, o.text),
				(a = o.i),
				o.forward(o.len - c);
		} else {
			if (o.done && l.done) return r ? ne.createSet(s, r) : Ze.create(s);
			throw new Error("Mismatched change set lengths");
		}
}
function ya(n, e, t = !1) {
	let i = [],
		s = t ? [] : null,
		r = new Di(n),
		o = new Di(e);
	for (let l = !1; ; ) {
		if (r.done && o.done) return s ? ne.createSet(i, s) : Ze.create(i);
		if (r.ins == 0) me(i, r.len, 0, l), r.next();
		else if (o.len == 0 && !o.done)
			me(i, 0, o.ins, l), s && ht(s, i, o.text), o.next();
		else {
			if (r.done || o.done) throw new Error("Mismatched change set lengths");
			{
				let a = Math.min(r.len2, o.len),
					h = i.length;
				if (r.ins == -1) {
					let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
					me(i, a, c, l), s && c && ht(s, i, o.text);
				} else
					o.ins == -1
						? (me(i, r.off ? 0 : r.len, a, l), s && ht(s, i, r.textBit(a)))
						: (me(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l),
						  s && !o.off && ht(s, i, o.text));
				(l = (r.ins > a || (o.ins >= 0 && o.len > a)) && (l || i.length > h)),
					r.forward2(a),
					o.forward(a);
			}
		}
	}
}
class Di {
	constructor(e) {
		(this.set = e), (this.i = 0), this.next();
	}
	next() {
		let { sections: e } = this.set;
		this.i < e.length
			? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
			: ((this.len = 0), (this.ins = -2)),
			(this.off = 0);
	}
	get done() {
		return this.ins == -2;
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins;
	}
	get text() {
		let { inserted: e } = this.set,
			t = (this.i - 2) >> 1;
		return t >= e.length ? _.empty : e[t];
	}
	textBit(e) {
		let { inserted: t } = this.set,
			i = (this.i - 2) >> 1;
		return i >= t.length && !e
			? _.empty
			: t[i].slice(this.off, e == null ? void 0 : this.off + e);
	}
	forward(e) {
		e == this.len ? this.next() : ((this.len -= e), (this.off += e));
	}
	forward2(e) {
		this.ins == -1
			? this.forward(e)
			: e == this.ins
			? this.next()
			: ((this.ins -= e), (this.off += e));
	}
}
class Mt {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.flags = i);
	}
	get anchor() {
		return this.flags & 16 ? this.to : this.from;
	}
	get head() {
		return this.flags & 16 ? this.from : this.to;
	}
	get empty() {
		return this.from == this.to;
	}
	get assoc() {
		return this.flags & 4 ? -1 : this.flags & 8 ? 1 : 0;
	}
	get bidiLevel() {
		let e = this.flags & 3;
		return e == 3 ? null : e;
	}
	get goalColumn() {
		let e = this.flags >> 5;
		return e == 33554431 ? void 0 : e;
	}
	map(e, t = -1) {
		let i, s;
		return (
			this.empty
				? (i = s = e.mapPos(this.from, t))
				: ((i = e.mapPos(this.from, 1)), (s = e.mapPos(this.to, -1))),
			i == this.from && s == this.to ? this : new Mt(i, s, this.flags)
		);
	}
	extend(e, t = e) {
		if (e <= this.anchor && t >= this.anchor) return k.range(e, t);
		let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
		return k.range(this.anchor, i);
	}
	eq(e) {
		return this.anchor == e.anchor && this.head == e.head;
	}
	toJSON() {
		return { anchor: this.anchor, head: this.head };
	}
	static fromJSON(e) {
		if (!e || typeof e.anchor != "number" || typeof e.head != "number")
			throw new RangeError("Invalid JSON representation for SelectionRange");
		return k.range(e.anchor, e.head);
	}
	static create(e, t, i) {
		return new Mt(e, t, i);
	}
}
class k {
	constructor(e, t) {
		(this.ranges = e), (this.mainIndex = t);
	}
	map(e, t = -1) {
		return e.empty
			? this
			: k.create(
					this.ranges.map((i) => i.map(e, t)),
					this.mainIndex
			  );
	}
	eq(e) {
		if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex)
			return !1;
		for (let t = 0; t < this.ranges.length; t++)
			if (!this.ranges[t].eq(e.ranges[t])) return !1;
		return !0;
	}
	get main() {
		return this.ranges[this.mainIndex];
	}
	asSingle() {
		return this.ranges.length == 1 ? this : new k([this.main], 0);
	}
	addRange(e, t = !0) {
		return k.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
	}
	replaceRange(e, t = this.mainIndex) {
		let i = this.ranges.slice();
		return (i[t] = e), k.create(i, this.mainIndex);
	}
	toJSON() {
		return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
	}
	static fromJSON(e) {
		if (
			!e ||
			!Array.isArray(e.ranges) ||
			typeof e.main != "number" ||
			e.main >= e.ranges.length
		)
			throw new RangeError("Invalid JSON representation for EditorSelection");
		return new k(
			e.ranges.map((t) => Mt.fromJSON(t)),
			e.main
		);
	}
	static single(e, t = e) {
		return new k([k.range(e, t)], 0);
	}
	static create(e, t = 0) {
		if (e.length == 0)
			throw new RangeError("A selection needs at least one range");
		for (let i = 0, s = 0; s < e.length; s++) {
			let r = e[s];
			if (r.empty ? r.from <= i : r.from < i) return k.normalized(e.slice(), t);
			i = r.to;
		}
		return new k(e, t);
	}
	static cursor(e, t = 0, i, s) {
		return Mt.create(
			e,
			e,
			(t == 0 ? 0 : t < 0 ? 4 : 8) |
				(i == null ? 3 : Math.min(2, i)) |
				((s ?? 33554431) << 5)
		);
	}
	static range(e, t, i) {
		let s = (i ?? 33554431) << 5;
		return t < e
			? Mt.create(t, e, 16 | s | 8)
			: Mt.create(e, t, s | (t > e ? 4 : 0));
	}
	static normalized(e, t = 0) {
		let i = e[t];
		e.sort((s, r) => s.from - r.from), (t = e.indexOf(i));
		for (let s = 1; s < e.length; s++) {
			let r = e[s],
				o = e[s - 1];
			if (r.empty ? r.from <= o.to : r.from < o.to) {
				let l = o.from,
					a = Math.max(r.to, o.to);
				s <= t && t--,
					e.splice(--s, 2, r.anchor > r.head ? k.range(a, l) : k.range(l, a));
			}
		}
		return new k(e, t);
	}
}
function ba(n, e) {
	for (let t of n.ranges)
		if (t.to > e) throw new RangeError("Selection points outside of document");
}
let Cr = 0;
class D {
	constructor(e, t, i, s, r) {
		(this.combine = e),
			(this.compareInput = t),
			(this.compare = i),
			(this.isStatic = s),
			(this.id = Cr++),
			(this.default = e([])),
			(this.extensions = typeof r == "function" ? r(this) : r);
	}
	static define(e = {}) {
		return new D(
			e.combine || ((t) => t),
			e.compareInput || ((t, i) => t === i),
			e.compare || (e.combine ? (t, i) => t === i : Ar),
			!!e.static,
			e.enables
		);
	}
	of(e) {
		return new un([], this, 0, e);
	}
	compute(e, t) {
		if (this.isStatic) throw new Error("Can't compute a static facet");
		return new un(e, this, 1, t);
	}
	computeN(e, t) {
		if (this.isStatic) throw new Error("Can't compute a static facet");
		return new un(e, this, 2, t);
	}
	from(e, t) {
		return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
	}
}
function Ar(n, e) {
	return n == e || (n.length == e.length && n.every((t, i) => t === e[i]));
}
class un {
	constructor(e, t, i, s) {
		(this.dependencies = e),
			(this.facet = t),
			(this.type = i),
			(this.value = s),
			(this.id = Cr++);
	}
	dynamicSlot(e) {
		var t;
		let i = this.value,
			s = this.facet.compareInput,
			r = this.id,
			o = e[r] >> 1,
			l = this.type == 2,
			a = !1,
			h = !1,
			c = [];
		for (let f of this.dependencies)
			f == "doc"
				? (a = !0)
				: f == "selection"
				? (h = !0)
				: ((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1 ||
				  c.push(e[f.id]);
		return {
			create(f) {
				return (f.values[o] = i(f)), 1;
			},
			update(f, u) {
				if (
					(a && u.docChanged) ||
					(h && (u.docChanged || u.selection)) ||
					Rs(f, c)
				) {
					let d = i(f);
					if (l ? !oo(d, f.values[o], s) : !s(d, f.values[o]))
						return (f.values[o] = d), 1;
				}
				return 0;
			},
			reconfigure: (f, u) => {
				let d = i(f),
					p = u.config.address[r];
				if (p != null) {
					let g = xn(u, p);
					if (
						this.dependencies.every((y) =>
							y instanceof D
								? u.facet(y) === f.facet(y)
								: y instanceof Me
								? u.field(y, !1) == f.field(y, !1)
								: !0
						) ||
						(l ? oo(d, g, s) : s(d, g))
					)
						return (f.values[o] = g), 0;
				}
				return (f.values[o] = d), 1;
			}
		};
	}
}
function oo(n, e, t) {
	if (n.length != e.length) return !1;
	for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return !1;
	return !0;
}
function Rs(n, e) {
	let t = !1;
	for (let i of e) Si(n, i) & 1 && (t = !0);
	return t;
}
function lf(n, e, t) {
	let i = t.map((a) => n[a.id]),
		s = t.map((a) => a.type),
		r = i.filter((a) => !(a & 1)),
		o = n[e.id] >> 1;
	function l(a) {
		let h = [];
		for (let c = 0; c < i.length; c++) {
			let f = xn(a, i[c]);
			if (s[c] == 2) for (let u of f) h.push(u);
			else h.push(f);
		}
		return e.combine(h);
	}
	return {
		create(a) {
			for (let h of i) Si(a, h);
			return (a.values[o] = l(a)), 1;
		},
		update(a, h) {
			if (!Rs(a, r)) return 0;
			let c = l(a);
			return e.compare(c, a.values[o]) ? 0 : ((a.values[o] = c), 1);
		},
		reconfigure(a, h) {
			let c = Rs(a, i),
				f = h.config.facets[e.id],
				u = h.facet(e);
			if (f && !c && Ar(t, f)) return (a.values[o] = u), 0;
			let d = l(a);
			return e.compare(d, u) ? ((a.values[o] = u), 0) : ((a.values[o] = d), 1);
		}
	};
}
const lo = D.define({ static: !0 });
class Me {
	constructor(e, t, i, s, r) {
		(this.id = e),
			(this.createF = t),
			(this.updateF = i),
			(this.compareF = s),
			(this.spec = r),
			(this.provides = void 0);
	}
	static define(e) {
		let t = new Me(
			Cr++,
			e.create,
			e.update,
			e.compare || ((i, s) => i === s),
			e
		);
		return e.provide && (t.provides = e.provide(t)), t;
	}
	create(e) {
		let t = e.facet(lo).find((i) => i.field == this);
		return (t?.create || this.createF)(e);
	}
	slot(e) {
		let t = e[this.id] >> 1;
		return {
			create: (i) => ((i.values[t] = this.create(i)), 1),
			update: (i, s) => {
				let r = i.values[t],
					o = this.updateF(r, s);
				return this.compareF(r, o) ? 0 : ((i.values[t] = o), 1);
			},
			reconfigure: (i, s) =>
				s.config.address[this.id] != null
					? ((i.values[t] = s.field(this)), 0)
					: ((i.values[t] = this.create(i)), 1)
		};
	}
	init(e) {
		return [this, lo.of({ field: this, create: e })];
	}
	get extension() {
		return this;
	}
}
const Ct = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function ci(n) {
	return (e) => new wa(e, n);
}
const Vi = {
	highest: ci(Ct.highest),
	high: ci(Ct.high),
	default: ci(Ct.default),
	low: ci(Ct.low),
	lowest: ci(Ct.lowest)
};
class wa {
	constructor(e, t) {
		(this.inner = e), (this.prec = t);
	}
}
class Fn {
	of(e) {
		return new Ls(this, e);
	}
	reconfigure(e) {
		return Fn.reconfigure.of({ compartment: this, extension: e });
	}
	get(e) {
		return e.config.compartments.get(this);
	}
}
class Ls {
	constructor(e, t) {
		(this.compartment = e), (this.inner = t);
	}
}
class kn {
	constructor(e, t, i, s, r, o) {
		for (
			this.base = e,
				this.compartments = t,
				this.dynamicSlots = i,
				this.address = s,
				this.staticValues = r,
				this.facets = o,
				this.statusTemplate = [];
			this.statusTemplate.length < i.length;

		)
			this.statusTemplate.push(0);
	}
	staticFacet(e) {
		let t = this.address[e.id];
		return t == null ? e.default : this.staticValues[t >> 1];
	}
	static resolve(e, t, i) {
		let s = [],
			r = Object.create(null),
			o = new Map();
		for (let u of af(e, t, o))
			u instanceof Me
				? s.push(u)
				: (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
		let l = Object.create(null),
			a = [],
			h = [];
		for (let u of s) (l[u.id] = h.length << 1), h.push((d) => u.slot(d));
		let c = i?.config.facets;
		for (let u in r) {
			let d = r[u],
				p = d[0].facet,
				g = (c && c[u]) || [];
			if (d.every((y) => y.type == 0))
				if (((l[p.id] = (a.length << 1) | 1), Ar(g, d))) a.push(i.facet(p));
				else {
					let y = p.combine(d.map((b) => b.value));
					a.push(i && p.compare(y, i.facet(p)) ? i.facet(p) : y);
				}
			else {
				for (let y of d)
					y.type == 0
						? ((l[y.id] = (a.length << 1) | 1), a.push(y.value))
						: ((l[y.id] = h.length << 1), h.push((b) => y.dynamicSlot(b)));
				(l[p.id] = h.length << 1), h.push((y) => lf(y, p, d));
			}
		}
		let f = h.map((u) => u(l));
		return new kn(e, o, f, l, a, r);
	}
}
function af(n, e, t) {
	let i = [[], [], [], [], []],
		s = new Map();
	function r(o, l) {
		let a = s.get(o);
		if (a != null) {
			if (a <= l) return;
			let h = i[a].indexOf(o);
			h > -1 && i[a].splice(h, 1), o instanceof Ls && t.delete(o.compartment);
		}
		if ((s.set(o, l), Array.isArray(o))) for (let h of o) r(h, l);
		else if (o instanceof Ls) {
			if (t.has(o.compartment))
				throw new RangeError("Duplicate use of compartment in extensions");
			let h = e.get(o.compartment) || o.inner;
			t.set(o.compartment, h), r(h, l);
		} else if (o instanceof wa) r(o.inner, o.prec);
		else if (o instanceof Me) i[l].push(o), o.provides && r(o.provides, l);
		else if (o instanceof un)
			i[l].push(o), o.facet.extensions && r(o.facet.extensions, Ct.default);
		else {
			let h = o.extension;
			if (!h)
				throw new Error(
					`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
				);
			r(h, l);
		}
	}
	return r(n, Ct.default), i.reduce((o, l) => o.concat(l));
}
function Si(n, e) {
	if (e & 1) return 2;
	let t = e >> 1,
		i = n.status[t];
	if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
	if (i & 2) return i;
	n.status[t] = 4;
	let s = n.computeSlot(n, n.config.dynamicSlots[t]);
	return (n.status[t] = 2 | s);
}
function xn(n, e) {
	return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const ka = D.define(),
	xa = D.define({ combine: (n) => n.some((e) => e), static: !0 }),
	va = D.define({ combine: (n) => (n.length ? n[0] : void 0), static: !0 }),
	Sa = D.define(),
	Ca = D.define(),
	Aa = D.define(),
	Ma = D.define({ combine: (n) => (n.length ? n[0] : !1) });
class Nt {
	constructor(e, t) {
		(this.type = e), (this.value = t);
	}
	static define() {
		return new hf();
	}
}
class hf {
	of(e) {
		return new Nt(this, e);
	}
}
class cf {
	constructor(e) {
		this.map = e;
	}
	of(e) {
		return new R(this, e);
	}
}
class R {
	constructor(e, t) {
		(this.type = e), (this.value = t);
	}
	map(e) {
		let t = this.type.map(this.value, e);
		return t === void 0 ? void 0 : t == this.value ? this : new R(this.type, t);
	}
	is(e) {
		return this.type == e;
	}
	static define(e = {}) {
		return new cf(e.map || ((t) => t));
	}
	static mapEffects(e, t) {
		if (!e.length) return e;
		let i = [];
		for (let s of e) {
			let r = s.map(t);
			r && i.push(r);
		}
		return i;
	}
}
R.reconfigure = R.define();
R.appendConfig = R.define();
class re {
	constructor(e, t, i, s, r, o) {
		(this.startState = e),
			(this.changes = t),
			(this.selection = i),
			(this.effects = s),
			(this.annotations = r),
			(this.scrollIntoView = o),
			(this._doc = null),
			(this._state = null),
			i && ba(i, t.newLength),
			r.some((l) => l.type == re.time) ||
				(this.annotations = r.concat(re.time.of(Date.now())));
	}
	static create(e, t, i, s, r, o) {
		return new re(e, t, i, s, r, o);
	}
	get newDoc() {
		return this._doc || (this._doc = this.changes.apply(this.startState.doc));
	}
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes);
	}
	get state() {
		return this._state || this.startState.applyTransaction(this), this._state;
	}
	annotation(e) {
		for (let t of this.annotations) if (t.type == e) return t.value;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get reconfigured() {
		return this.startState.config != this.state.config;
	}
	isUserEvent(e) {
		let t = this.annotation(re.userEvent);
		return !!(
			t &&
			(t == e ||
				(t.length > e.length &&
					t.slice(0, e.length) == e &&
					t[e.length] == "."))
		);
	}
}
re.time = Nt.define();
re.userEvent = Nt.define();
re.addToHistory = Nt.define();
re.remote = Nt.define();
function ff(n, e) {
	let t = [];
	for (let i = 0, s = 0; ; ) {
		let r, o;
		if (i < n.length && (s == e.length || e[s] >= n[i]))
			(r = n[i++]), (o = n[i++]);
		else if (s < e.length) (r = e[s++]), (o = e[s++]);
		else return t;
		!t.length || t[t.length - 1] < r
			? t.push(r, o)
			: t[t.length - 1] < o && (t[t.length - 1] = o);
	}
}
function Da(n, e, t) {
	var i;
	let s, r, o;
	return (
		t
			? ((s = e.changes),
			  (r = ne.empty(e.changes.length)),
			  (o = n.changes.compose(e.changes)))
			: ((s = e.changes.map(n.changes)),
			  (r = n.changes.mapDesc(e.changes, !0)),
			  (o = n.changes.compose(s))),
		{
			changes: o,
			selection: e.selection
				? e.selection.map(r)
				: (i = n.selection) === null || i === void 0
				? void 0
				: i.map(s),
			effects: R.mapEffects(n.effects, s).concat(R.mapEffects(e.effects, r)),
			annotations: n.annotations.length
				? n.annotations.concat(e.annotations)
				: e.annotations,
			scrollIntoView: n.scrollIntoView || e.scrollIntoView
		}
	);
}
function Is(n, e, t) {
	let i = e.selection,
		s = $t(e.annotations);
	return (
		e.userEvent && (s = s.concat(re.userEvent.of(e.userEvent))),
		{
			changes:
				e.changes instanceof ne
					? e.changes
					: ne.of(e.changes || [], t, n.facet(va)),
			selection: i && (i instanceof k ? i : k.single(i.anchor, i.head)),
			effects: $t(e.effects),
			annotations: s,
			scrollIntoView: !!e.scrollIntoView
		}
	);
}
function Ta(n, e, t) {
	let i = Is(n, e.length ? e[0] : {}, n.doc.length);
	e.length && e[0].filter === !1 && (t = !1);
	for (let r = 1; r < e.length; r++) {
		e[r].filter === !1 && (t = !1);
		let o = !!e[r].sequential;
		i = Da(i, Is(n, e[r], o ? i.changes.newLength : n.doc.length), o);
	}
	let s = re.create(
		n,
		i.changes,
		i.selection,
		i.effects,
		i.annotations,
		i.scrollIntoView
	);
	return df(t ? uf(s) : s);
}
function uf(n) {
	let e = n.startState,
		t = !0;
	for (let s of e.facet(Sa)) {
		let r = s(n);
		if (r === !1) {
			t = !1;
			break;
		}
		Array.isArray(r) && (t = t === !0 ? r : ff(t, r));
	}
	if (t !== !0) {
		let s, r;
		if (t === !1) (r = n.changes.invertedDesc), (s = ne.empty(e.doc.length));
		else {
			let o = n.changes.filter(t);
			(s = o.changes), (r = o.filtered.mapDesc(o.changes).invertedDesc);
		}
		n = re.create(
			e,
			s,
			n.selection && n.selection.map(r),
			R.mapEffects(n.effects, r),
			n.annotations,
			n.scrollIntoView
		);
	}
	let i = e.facet(Ca);
	for (let s = i.length - 1; s >= 0; s--) {
		let r = i[s](n);
		r instanceof re
			? (n = r)
			: Array.isArray(r) && r.length == 1 && r[0] instanceof re
			? (n = r[0])
			: (n = Ta(e, $t(r), !1));
	}
	return n;
}
function df(n) {
	let e = n.startState,
		t = e.facet(Aa),
		i = n;
	for (let s = t.length - 1; s >= 0; s--) {
		let r = t[s](n);
		r &&
			Object.keys(r).length &&
			(i = Da(i, Is(e, r, n.changes.newLength), !0));
	}
	return i == n
		? n
		: re.create(
				e,
				n.changes,
				n.selection,
				i.effects,
				i.annotations,
				i.scrollIntoView
		  );
}
const pf = [];
function $t(n) {
	return n == null ? pf : Array.isArray(n) ? n : [n];
}
var Re = (function (n) {
	return (
		(n[(n.Word = 0)] = "Word"),
		(n[(n.Space = 1)] = "Space"),
		(n[(n.Other = 2)] = "Other"),
		n
	);
})(Re || (Re = {}));
const mf =
	/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let Ns;
try {
	Ns = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function gf(n) {
	if (Ns) return Ns.test(n);
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		if (
			/\w/.test(t) ||
			(t > "" && (t.toUpperCase() != t.toLowerCase() || mf.test(t)))
		)
			return !0;
	}
	return !1;
}
function yf(n) {
	return (e) => {
		if (!/\S/.test(e)) return Re.Space;
		if (gf(e)) return Re.Word;
		for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return Re.Word;
		return Re.Other;
	};
}
class N {
	constructor(e, t, i, s, r, o) {
		(this.config = e),
			(this.doc = t),
			(this.selection = i),
			(this.values = s),
			(this.status = e.statusTemplate.slice()),
			(this.computeSlot = r),
			o && (o._state = this);
		for (let l = 0; l < this.config.dynamicSlots.length; l++) Si(this, l << 1);
		this.computeSlot = null;
	}
	field(e, t = !0) {
		let i = this.config.address[e.id];
		if (i == null) {
			if (t) throw new RangeError("Field is not present in this state");
			return;
		}
		return Si(this, i), xn(this, i);
	}
	update(...e) {
		return Ta(this, e, !0);
	}
	applyTransaction(e) {
		let t = this.config,
			{ base: i, compartments: s } = t;
		for (let o of e.effects)
			o.is(Fn.reconfigure)
				? (t &&
						((s = new Map()),
						t.compartments.forEach((l, a) => s.set(a, l)),
						(t = null)),
				  s.set(o.value.compartment, o.value.extension))
				: o.is(R.reconfigure)
				? ((t = null), (i = o.value))
				: o.is(R.appendConfig) && ((t = null), (i = $t(i).concat(o.value)));
		let r;
		t
			? (r = e.startState.values.slice())
			: ((t = kn.resolve(i, s, this)),
			  (r = new N(
					t,
					this.doc,
					this.selection,
					t.dynamicSlots.map(() => null),
					(l, a) => a.reconfigure(l, this),
					null
			  ).values)),
			new N(t, e.newDoc, e.newSelection, r, (o, l) => l.update(o, e), e);
	}
	replaceSelection(e) {
		return (
			typeof e == "string" && (e = this.toText(e)),
			this.changeByRange((t) => ({
				changes: { from: t.from, to: t.to, insert: e },
				range: k.cursor(t.from + e.length)
			}))
		);
	}
	changeByRange(e) {
		let t = this.selection,
			i = e(t.ranges[0]),
			s = this.changes(i.changes),
			r = [i.range],
			o = $t(i.effects);
		for (let l = 1; l < t.ranges.length; l++) {
			let a = e(t.ranges[l]),
				h = this.changes(a.changes),
				c = h.map(s);
			for (let u = 0; u < l; u++) r[u] = r[u].map(c);
			let f = s.mapDesc(h, !0);
			r.push(a.range.map(f)),
				(s = s.compose(c)),
				(o = R.mapEffects(o, c).concat(R.mapEffects($t(a.effects), f)));
		}
		return { changes: s, selection: k.create(r, t.mainIndex), effects: o };
	}
	changes(e = []) {
		return e instanceof ne
			? e
			: ne.of(e, this.doc.length, this.facet(N.lineSeparator));
	}
	toText(e) {
		return _.of(e.split(this.facet(N.lineSeparator) || Bs));
	}
	sliceDoc(e = 0, t = this.doc.length) {
		return this.doc.sliceString(e, t, this.lineBreak);
	}
	facet(e) {
		let t = this.config.address[e.id];
		return t == null ? e.default : (Si(this, t), xn(this, t));
	}
	toJSON(e) {
		let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
		if (e)
			for (let i in e) {
				let s = e[i];
				s instanceof Me &&
					this.config.address[s.id] != null &&
					(t[i] = s.spec.toJSON(this.field(e[i]), this));
			}
		return t;
	}
	static fromJSON(e, t = {}, i) {
		if (!e || typeof e.doc != "string")
			throw new RangeError("Invalid JSON representation for EditorState");
		let s = [];
		if (i) {
			for (let r in i)
				if (Object.prototype.hasOwnProperty.call(e, r)) {
					let o = i[r],
						l = e[r];
					s.push(o.init((a) => o.spec.fromJSON(l, a)));
				}
		}
		return N.create({
			doc: e.doc,
			selection: k.fromJSON(e.selection),
			extensions: t.extensions ? s.concat([t.extensions]) : s
		});
	}
	static create(e = {}) {
		let t = kn.resolve(e.extensions || [], new Map()),
			i =
				e.doc instanceof _
					? e.doc
					: _.of((e.doc || "").split(t.staticFacet(N.lineSeparator) || Bs)),
			s = e.selection
				? e.selection instanceof k
					? e.selection
					: k.single(e.selection.anchor, e.selection.head)
				: k.single(0);
		return (
			ba(s, i.length),
			t.staticFacet(xa) || (s = s.asSingle()),
			new N(
				t,
				i,
				s,
				t.dynamicSlots.map(() => null),
				(r, o) => o.create(r),
				null
			)
		);
	}
	get tabSize() {
		return this.facet(N.tabSize);
	}
	get lineBreak() {
		return (
			this.facet(N.lineSeparator) ||
			`
`
		);
	}
	get readOnly() {
		return this.facet(Ma);
	}
	phrase(e, ...t) {
		for (let i of this.facet(N.phrases))
			if (Object.prototype.hasOwnProperty.call(i, e)) {
				e = i[e];
				break;
			}
		return (
			t.length &&
				(e = e.replace(/\$(\$|\d*)/g, (i, s) => {
					if (s == "$") return "$";
					let r = +(s || 1);
					return !r || r > t.length ? i : t[r - 1];
				})),
			e
		);
	}
	languageDataAt(e, t, i = -1) {
		let s = [];
		for (let r of this.facet(ka))
			for (let o of r(this, t, i))
				Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
		return s;
	}
	charCategorizer(e) {
		return yf(this.languageDataAt("wordChars", e).join(""));
	}
	wordAt(e) {
		let { text: t, from: i, length: s } = this.doc.lineAt(e),
			r = this.charCategorizer(e),
			o = e - i,
			l = e - i;
		for (; o > 0; ) {
			let a = Oe(t, o, !1);
			if (r(t.slice(a, o)) != Re.Word) break;
			o = a;
		}
		for (; l < s; ) {
			let a = Oe(t, l);
			if (r(t.slice(l, a)) != Re.Word) break;
			l = a;
		}
		return o == l ? null : k.range(o + i, l + i);
	}
}
N.allowMultipleSelections = xa;
N.tabSize = D.define({ combine: (n) => (n.length ? n[0] : 4) });
N.lineSeparator = va;
N.readOnly = Ma;
N.phrases = D.define({
	compare(n, e) {
		let t = Object.keys(n),
			i = Object.keys(e);
		return t.length == i.length && t.every((s) => n[s] == e[s]);
	}
});
N.languageData = ka;
N.changeFilter = Sa;
N.transactionFilter = Ca;
N.transactionExtender = Aa;
Fn.reconfigure = R.define();
function _t(n, e, t = {}) {
	let i = {};
	for (let s of n)
		for (let r of Object.keys(s)) {
			let o = s[r],
				l = i[r];
			if (l === void 0) i[r] = o;
			else if (!(l === o || o === void 0))
				if (Object.hasOwnProperty.call(t, r)) i[r] = t[r](l, o);
				else throw new Error("Config merge conflict for field " + r);
		}
	for (let s in e) i[s] === void 0 && (i[s] = e[s]);
	return i;
}
class Bt {
	eq(e) {
		return this == e;
	}
	range(e, t = e) {
		return _s.create(e, t, this);
	}
}
Bt.prototype.startSide = Bt.prototype.endSide = 0;
Bt.prototype.point = !1;
Bt.prototype.mapMode = ce.TrackDel;
let _s = class Oa {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.value = i);
	}
	static create(e, t, i) {
		return new Oa(e, t, i);
	}
};
function Vs(n, e) {
	return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Mr {
	constructor(e, t, i, s) {
		(this.from = e), (this.to = t), (this.value = i), (this.maxPoint = s);
	}
	get length() {
		return this.to[this.to.length - 1];
	}
	findIndex(e, t, i, s = 0) {
		let r = i ? this.to : this.from;
		for (let o = s, l = r.length; ; ) {
			if (o == l) return o;
			let a = (o + l) >> 1,
				h =
					r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
			if (a == o) return h >= 0 ? o : l;
			h >= 0 ? (l = a) : (o = a + 1);
		}
	}
	between(e, t, i, s) {
		for (
			let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r);
			r < o;
			r++
		)
			if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1) return !1;
	}
	map(e, t) {
		let i = [],
			s = [],
			r = [],
			o = -1,
			l = -1;
		for (let a = 0; a < this.value.length; a++) {
			let h = this.value[a],
				c = this.from[a] + e,
				f = this.to[a] + e,
				u,
				d;
			if (c == f) {
				let p = t.mapPos(c, h.startSide, h.mapMode);
				if (
					p == null ||
					((u = d = p),
					h.startSide != h.endSide && ((d = t.mapPos(c, h.endSide)), d < u))
				)
					continue;
			} else if (
				((u = t.mapPos(c, h.startSide)),
				(d = t.mapPos(f, h.endSide)),
				u > d || (u == d && h.startSide > 0 && h.endSide <= 0))
			)
				continue;
			(d - u || h.endSide - h.startSide) < 0 ||
				(o < 0 && (o = u),
				h.point && (l = Math.max(l, d - u)),
				i.push(h),
				s.push(u - o),
				r.push(d - o));
		}
		return { mapped: i.length ? new Mr(s, r, i, l) : null, pos: o };
	}
}
class F {
	constructor(e, t, i, s) {
		(this.chunkPos = e),
			(this.chunk = t),
			(this.nextLayer = i),
			(this.maxPoint = s);
	}
	static create(e, t, i, s) {
		return new F(e, t, i, s);
	}
	get length() {
		let e = this.chunk.length - 1;
		return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
	}
	get size() {
		if (this.isEmpty) return 0;
		let e = this.nextLayer.size;
		for (let t of this.chunk) e += t.value.length;
		return e;
	}
	chunkEnd(e) {
		return this.chunkPos[e] + this.chunk[e].length;
	}
	update(e) {
		let {
				add: t = [],
				sort: i = !1,
				filterFrom: s = 0,
				filterTo: r = this.length
			} = e,
			o = e.filter;
		if (t.length == 0 && !o) return this;
		if ((i && (t = t.slice().sort(Vs)), this.isEmpty))
			return t.length ? F.of(t) : this;
		let l = new Ba(this, null, -1).goto(0),
			a = 0,
			h = [],
			c = new Pt();
		for (; l.value || a < t.length; )
			if (
				a < t.length &&
				(l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0
			) {
				let f = t[a++];
				c.addInner(f.from, f.to, f.value) || h.push(f);
			} else
				l.rangeIndex == 1 &&
				l.chunkIndex < this.chunk.length &&
				(a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
				(!o ||
					s > this.chunkEnd(l.chunkIndex) ||
					r < this.chunkPos[l.chunkIndex]) &&
				c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
					? l.nextChunk()
					: ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) &&
							(c.addInner(l.from, l.to, l.value) ||
								h.push(_s.create(l.from, l.to, l.value))),
					  l.next());
		return c.finishInner(
			this.nextLayer.isEmpty && !h.length
				? F.empty
				: this.nextLayer.update({
						add: h,
						filter: o,
						filterFrom: s,
						filterTo: r
				  })
		);
	}
	map(e) {
		if (e.empty || this.isEmpty) return this;
		let t = [],
			i = [],
			s = -1;
		for (let o = 0; o < this.chunk.length; o++) {
			let l = this.chunkPos[o],
				a = this.chunk[o],
				h = e.touchesRange(l, l + a.length);
			if (h === !1)
				(s = Math.max(s, a.maxPoint)), t.push(a), i.push(e.mapPos(l));
			else if (h === !0) {
				let { mapped: c, pos: f } = a.map(l, e);
				c && ((s = Math.max(s, c.maxPoint)), t.push(c), i.push(f));
			}
		}
		let r = this.nextLayer.map(e);
		return t.length == 0 ? r : new F(i, t, r || F.empty, s);
	}
	between(e, t, i) {
		if (!this.isEmpty) {
			for (let s = 0; s < this.chunk.length; s++) {
				let r = this.chunkPos[s],
					o = this.chunk[s];
				if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1)
					return;
			}
			this.nextLayer.between(e, t, i);
		}
	}
	iter(e = 0) {
		return Ti.from([this]).goto(e);
	}
	get isEmpty() {
		return this.nextLayer == this;
	}
	static iter(e, t = 0) {
		return Ti.from(e).goto(t);
	}
	static compare(e, t, i, s, r = -1) {
		let o = e.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
			l = t.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
			a = ao(o, l, i),
			h = new fi(o, a, r),
			c = new fi(l, a, r);
		i.iterGaps((f, u, d) => ho(h, f, c, u, d, s)),
			i.empty && i.length == 0 && ho(h, 0, c, 0, 0, s);
	}
	static eq(e, t, i = 0, s) {
		s == null && (s = 1e9);
		let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0),
			o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
		if (r.length != o.length) return !1;
		if (!r.length) return !0;
		let l = ao(r, o),
			a = new fi(r, l, 0).goto(i),
			h = new fi(o, l, 0).goto(i);
		for (;;) {
			if (
				a.to != h.to ||
				!Fs(a.active, h.active) ||
				(a.point && (!h.point || !a.point.eq(h.point)))
			)
				return !1;
			if (a.to > s) return !0;
			a.next(), h.next();
		}
	}
	static spans(e, t, i, s, r = -1) {
		let o = new fi(e, null, r).goto(t),
			l = t,
			a = o.openStart;
		for (;;) {
			let h = Math.min(o.to, i);
			if (
				(o.point
					? (s.point(l, h, o.point, o.activeForPoint(o.to), a, o.pointRank),
					  (a = o.openEnd(h) + (o.to > h ? 1 : 0)))
					: h > l && (s.span(l, h, o.active, a), (a = o.openEnd(h))),
				o.to > i)
			)
				break;
			(l = o.to), o.next();
		}
		return a;
	}
	static of(e, t = !1) {
		let i = new Pt();
		for (let s of e instanceof _s ? [e] : t ? bf(e) : e)
			i.add(s.from, s.to, s.value);
		return i.finish();
	}
}
F.empty = new F([], [], null, -1);
function bf(n) {
	if (n.length > 1)
		for (let e = n[0], t = 1; t < n.length; t++) {
			let i = n[t];
			if (Vs(e, i) > 0) return n.slice().sort(Vs);
			e = i;
		}
	return n;
}
F.empty.nextLayer = F.empty;
class Pt {
	constructor() {
		(this.chunks = []),
			(this.chunkPos = []),
			(this.chunkStart = -1),
			(this.last = null),
			(this.lastFrom = -1e9),
			(this.lastTo = -1e9),
			(this.from = []),
			(this.to = []),
			(this.value = []),
			(this.maxPoint = -1),
			(this.setMaxPoint = -1),
			(this.nextLayer = null);
	}
	finishChunk(e) {
		this.chunks.push(new Mr(this.from, this.to, this.value, this.maxPoint)),
			this.chunkPos.push(this.chunkStart),
			(this.chunkStart = -1),
			(this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
			(this.maxPoint = -1),
			e && ((this.from = []), (this.to = []), (this.value = []));
	}
	add(e, t, i) {
		this.addInner(e, t, i) ||
			(this.nextLayer || (this.nextLayer = new Pt())).add(e, t, i);
	}
	addInner(e, t, i) {
		let s = e - this.lastTo || i.startSide - this.last.endSide;
		if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
			throw new Error(
				"Ranges must be added sorted by `from` position and `startSide`"
			);
		return s < 0
			? !1
			: (this.from.length == 250 && this.finishChunk(!0),
			  this.chunkStart < 0 && (this.chunkStart = e),
			  this.from.push(e - this.chunkStart),
			  this.to.push(t - this.chunkStart),
			  (this.last = i),
			  (this.lastFrom = e),
			  (this.lastTo = t),
			  this.value.push(i),
			  i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
			  !0);
	}
	addChunk(e, t) {
		if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0)
			return !1;
		this.from.length && this.finishChunk(!0),
			(this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
			this.chunks.push(t),
			this.chunkPos.push(e);
		let i = t.value.length - 1;
		return (
			(this.last = t.value[i]),
			(this.lastFrom = t.from[i] + e),
			(this.lastTo = t.to[i] + e),
			!0
		);
	}
	finish() {
		return this.finishInner(F.empty);
	}
	finishInner(e) {
		if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0))
			return e;
		let t = F.create(
			this.chunkPos,
			this.chunks,
			this.nextLayer ? this.nextLayer.finishInner(e) : e,
			this.setMaxPoint
		);
		return (this.from = null), t;
	}
}
function ao(n, e, t) {
	let i = new Map();
	for (let r of n)
		for (let o = 0; o < r.chunk.length; o++)
			r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
	let s = new Set();
	for (let r of e)
		for (let o = 0; o < r.chunk.length; o++) {
			let l = i.get(r.chunk[o]);
			l != null &&
				(t ? t.mapPos(l) : l) == r.chunkPos[o] &&
				!t?.touchesRange(l, l + r.chunk[o].length) &&
				s.add(r.chunk[o]);
		}
	return s;
}
class Ba {
	constructor(e, t, i, s = 0) {
		(this.layer = e), (this.skip = t), (this.minPoint = i), (this.rank = s);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	get endSide() {
		return this.value ? this.value.endSide : 0;
	}
	goto(e, t = -1e9) {
		return (
			(this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this
		);
	}
	gotoInner(e, t, i) {
		for (; this.chunkIndex < this.layer.chunk.length; ) {
			let s = this.layer.chunk[this.chunkIndex];
			if (
				!(
					(this.skip && this.skip.has(s)) ||
					this.layer.chunkEnd(this.chunkIndex) < e ||
					s.maxPoint < this.minPoint
				)
			)
				break;
			this.chunkIndex++, (i = !1);
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			let s = this.layer.chunk[this.chunkIndex].findIndex(
				e - this.layer.chunkPos[this.chunkIndex],
				t,
				!0
			);
			(!i || this.rangeIndex < s) && this.setRangeIndex(s);
		}
		this.next();
	}
	forward(e, t) {
		(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
	}
	next() {
		for (;;)
			if (this.chunkIndex == this.layer.chunk.length) {
				(this.from = this.to = 1e9), (this.value = null);
				break;
			} else {
				let e = this.layer.chunkPos[this.chunkIndex],
					t = this.layer.chunk[this.chunkIndex],
					i = e + t.from[this.rangeIndex];
				if (
					((this.from = i),
					(this.to = e + t.to[this.rangeIndex]),
					(this.value = t.value[this.rangeIndex]),
					this.setRangeIndex(this.rangeIndex + 1),
					this.minPoint < 0 ||
						(this.value.point && this.to - this.from >= this.minPoint))
				)
					break;
			}
	}
	setRangeIndex(e) {
		if (e == this.layer.chunk[this.chunkIndex].value.length) {
			if ((this.chunkIndex++, this.skip))
				for (
					;
					this.chunkIndex < this.layer.chunk.length &&
					this.skip.has(this.layer.chunk[this.chunkIndex]);

				)
					this.chunkIndex++;
			this.rangeIndex = 0;
		} else this.rangeIndex = e;
	}
	nextChunk() {
		this.chunkIndex++, (this.rangeIndex = 0), this.next();
	}
	compare(e) {
		return (
			this.from - e.from ||
			this.startSide - e.startSide ||
			this.rank - e.rank ||
			this.to - e.to ||
			this.endSide - e.endSide
		);
	}
}
class Ti {
	constructor(e) {
		this.heap = e;
	}
	static from(e, t = null, i = -1) {
		let s = [];
		for (let r = 0; r < e.length; r++)
			for (let o = e[r]; !o.isEmpty; o = o.nextLayer)
				o.maxPoint >= i && s.push(new Ba(o, t, i, r));
		return s.length == 1 ? s[0] : new Ti(s);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	goto(e, t = -1e9) {
		for (let i of this.heap) i.goto(e, t);
		for (let i = this.heap.length >> 1; i >= 0; i--) es(this.heap, i);
		return this.next(), this;
	}
	forward(e, t) {
		for (let i of this.heap) i.forward(e, t);
		for (let i = this.heap.length >> 1; i >= 0; i--) es(this.heap, i);
		(this.to - e || this.value.endSide - t) < 0 && this.next();
	}
	next() {
		if (this.heap.length == 0)
			(this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
		else {
			let e = this.heap[0];
			(this.from = e.from),
				(this.to = e.to),
				(this.value = e.value),
				(this.rank = e.rank),
				e.value && e.next(),
				es(this.heap, 0);
		}
	}
}
function es(n, e) {
	for (let t = n[e]; ; ) {
		let i = (e << 1) + 1;
		if (i >= n.length) break;
		let s = n[i];
		if (
			(i + 1 < n.length && s.compare(n[i + 1]) >= 0 && ((s = n[i + 1]), i++),
			t.compare(s) < 0)
		)
			break;
		(n[i] = t), (n[e] = s), (e = i);
	}
}
class fi {
	constructor(e, t, i) {
		(this.minPoint = i),
			(this.active = []),
			(this.activeTo = []),
			(this.activeRank = []),
			(this.minActive = -1),
			(this.point = null),
			(this.pointFrom = 0),
			(this.pointRank = 0),
			(this.to = -1e9),
			(this.endSide = 0),
			(this.openStart = -1),
			(this.cursor = Ti.from(e, t, i));
	}
	goto(e, t = -1e9) {
		return (
			this.cursor.goto(e, t),
			(this.active.length = this.activeTo.length = this.activeRank.length = 0),
			(this.minActive = -1),
			(this.to = e),
			(this.endSide = t),
			(this.openStart = -1),
			this.next(),
			this
		);
	}
	forward(e, t) {
		for (
			;
			this.minActive > -1 &&
			(this.activeTo[this.minActive] - e ||
				this.active[this.minActive].endSide - t) < 0;

		)
			this.removeActive(this.minActive);
		this.cursor.forward(e, t);
	}
	removeActive(e) {
		Ki(this.active, e),
			Ki(this.activeTo, e),
			Ki(this.activeRank, e),
			(this.minActive = co(this.active, this.activeTo));
	}
	addActive(e) {
		let t = 0,
			{ value: i, to: s, rank: r } = this.cursor;
		for (; t < this.activeRank.length && this.activeRank[t] <= r; ) t++;
		Ui(this.active, t, i),
			Ui(this.activeTo, t, s),
			Ui(this.activeRank, t, r),
			e && Ui(e, t, this.cursor.from),
			(this.minActive = co(this.active, this.activeTo));
	}
	next() {
		let e = this.to,
			t = this.point;
		this.point = null;
		let i = this.openStart < 0 ? [] : null,
			s = 0;
		for (;;) {
			let r = this.minActive;
			if (
				r > -1 &&
				(this.activeTo[r] - this.cursor.from ||
					this.active[r].endSide - this.cursor.startSide) < 0
			) {
				if (this.activeTo[r] > e) {
					(this.to = this.activeTo[r]), (this.endSide = this.active[r].endSide);
					break;
				}
				this.removeActive(r), i && Ki(i, r);
			} else if (this.cursor.value)
				if (this.cursor.from > e) {
					(this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
					break;
				} else {
					let o = this.cursor.value;
					if (!o.point)
						this.addActive(i),
							this.cursor.from < e && this.cursor.to > e && s++,
							this.cursor.next();
					else if (
						t &&
						this.cursor.to == this.to &&
						this.cursor.from < this.cursor.to
					)
						this.cursor.next();
					else {
						(this.point = o),
							(this.pointFrom = this.cursor.from),
							(this.pointRank = this.cursor.rank),
							(this.to = this.cursor.to),
							(this.endSide = o.endSide),
							this.cursor.from < e && (s = 1),
							this.cursor.next(),
							this.forward(this.to, this.endSide);
						break;
					}
				}
			else {
				this.to = this.endSide = 1e9;
				break;
			}
		}
		if (i) {
			let r = 0;
			for (; r < i.length && i[r] < e; ) r++;
			this.openStart = r + s;
		}
	}
	activeForPoint(e) {
		if (!this.active.length) return this.active;
		let t = [];
		for (
			let i = this.active.length - 1;
			i >= 0 && !(this.activeRank[i] < this.pointRank);
			i--
		)
			(this.activeTo[i] > e ||
				(this.activeTo[i] == e &&
					this.active[i].endSide >= this.point.endSide)) &&
				t.push(this.active[i]);
		return t.reverse();
	}
	openEnd(e) {
		let t = 0;
		for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--)
			t++;
		return t;
	}
}
function ho(n, e, t, i, s, r) {
	n.goto(e), t.goto(i);
	let o = i + s,
		l = i,
		a = i - e;
	for (;;) {
		let h = n.to + a - t.to || n.endSide - t.endSide,
			c = h < 0 ? n.to + a : t.to,
			f = Math.min(c, o);
		if (
			(n.point || t.point
				? (n.point &&
						t.point &&
						(n.point == t.point || n.point.eq(t.point)) &&
						Fs(n.activeForPoint(n.to + a), t.activeForPoint(t.to))) ||
				  r.comparePoint(l, f, n.point, t.point)
				: f > l &&
				  !Fs(n.active, t.active) &&
				  r.compareRange(l, f, n.active, t.active),
			c > o)
		)
			break;
		(l = c), h <= 0 && n.next(), h >= 0 && t.next();
	}
}
function Fs(n, e) {
	if (n.length != e.length) return !1;
	for (let t = 0; t < n.length; t++)
		if (n[t] != e[t] && !n[t].eq(e[t])) return !1;
	return !0;
}
function Ki(n, e) {
	for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
	n.pop();
}
function Ui(n, e, t) {
	for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
	n[e] = t;
}
function co(n, e) {
	let t = -1,
		i = 1e9;
	for (let s = 0; s < e.length; s++)
		(e[s] - i || n[s].endSide - n[t].endSide) < 0 && ((t = s), (i = e[s]));
	return t;
}
function Fi(n, e, t = n.length) {
	let i = 0;
	for (let s = 0; s < t; )
		n.charCodeAt(s) == 9 ? ((i += e - (i % e)), s++) : (i++, (s = Oe(n, s)));
	return i;
}
function Hs(n, e, t, i) {
	for (let s = 0, r = 0; ; ) {
		if (r >= e) return s;
		if (s == n.length) break;
		(r += n.charCodeAt(s) == 9 ? t - (r % t) : 1), (s = Oe(n, s));
	}
	return i === !0 ? -1 : n.length;
}
const Ws = "ͼ",
	fo = typeof Symbol > "u" ? "__" + Ws : Symbol.for(Ws),
	zs =
		typeof Symbol > "u"
			? "__styleSet" + Math.floor(Math.random() * 1e8)
			: Symbol("styleSet"),
	uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class mt {
	constructor(e, t) {
		this.rules = [];
		let { finish: i } = t || {};
		function s(o) {
			return /^@/.test(o) ? [o] : o.split(/,\s*/);
		}
		function r(o, l, a, h) {
			let c = [],
				f = /^@(\w+)\b/.exec(o[0]),
				u = f && f[1] == "keyframes";
			if (f && l == null) return a.push(o[0] + ";");
			for (let d in l) {
				let p = l[d];
				if (/&/.test(d))
					r(
						d
							.split(/,\s*/)
							.map((g) => o.map((y) => g.replace(/&/, y)))
							.reduce((g, y) => g.concat(y)),
						p,
						a
					);
				else if (p && typeof p == "object") {
					if (!f)
						throw new RangeError(
							"The value of a property (" + d + ") should be a primitive value."
						);
					r(s(d), p, c, u);
				} else
					p != null &&
						c.push(
							d
								.replace(/_.*/, "")
								.replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()) +
								": " +
								p +
								";"
						);
			}
			(c.length || u) &&
				a.push(
					(i && !f && !h ? o.map(i) : o).join(", ") + " {" + c.join(" ") + "}"
				);
		}
		for (let o in e) r(s(o), e[o], this.rules);
	}
	getRules() {
		return this.rules.join(`
`);
	}
	static newName() {
		let e = uo[fo] || 1;
		return (uo[fo] = e + 1), Ws + e.toString(36);
	}
	static mount(e, t) {
		(e[zs] || new wf(e)).mount(Array.isArray(t) ? t : [t]);
	}
}
let $i = null;
class wf {
	constructor(e) {
		if (!e.head && e.adoptedStyleSheets && typeof CSSStyleSheet < "u") {
			if ($i)
				return (
					(e.adoptedStyleSheets = [$i.sheet].concat(e.adoptedStyleSheets)),
					(e[zs] = $i)
				);
			(this.sheet = new CSSStyleSheet()),
				(e.adoptedStyleSheets = [this.sheet].concat(e.adoptedStyleSheets)),
				($i = this);
		} else {
			this.styleTag = (e.ownerDocument || e).createElement("style");
			let t = e.head || e;
			t.insertBefore(this.styleTag, t.firstChild);
		}
		(this.modules = []), (e[zs] = this);
	}
	mount(e) {
		let t = this.sheet,
			i = 0,
			s = 0;
		for (let r = 0; r < e.length; r++) {
			let o = e[r],
				l = this.modules.indexOf(o);
			if (
				(l < s && l > -1 && (this.modules.splice(l, 1), s--, (l = -1)), l == -1)
			) {
				if ((this.modules.splice(s++, 0, o), t))
					for (let a = 0; a < o.rules.length; a++)
						t.insertRule(o.rules[a], i++);
			} else {
				for (; s < l; ) i += this.modules[s++].rules.length;
				(i += o.rules.length), s++;
			}
		}
		if (!t) {
			let r = "";
			for (let o = 0; o < this.modules.length; o++)
				r +=
					this.modules[o].getRules() +
					`
`;
			this.styleTag.textContent = r;
		}
	}
}
var gt = {
		8: "Backspace",
		9: "Tab",
		10: "Enter",
		12: "NumLock",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		44: "PrintScreen",
		45: "Insert",
		46: "Delete",
		59: ";",
		61: "=",
		91: "Meta",
		92: "Meta",
		106: "*",
		107: "+",
		108: ",",
		109: "-",
		110: ".",
		111: "/",
		144: "NumLock",
		145: "ScrollLock",
		160: "Shift",
		161: "Shift",
		162: "Control",
		163: "Control",
		164: "Alt",
		165: "Alt",
		173: "-",
		186: ";",
		187: "=",
		188: ",",
		189: "-",
		190: ".",
		191: "/",
		192: "`",
		219: "[",
		220: "\\",
		221: "]",
		222: "'"
	},
	Oi = {
		48: ")",
		49: "!",
		50: "@",
		51: "#",
		52: "$",
		53: "%",
		54: "^",
		55: "&",
		56: "*",
		57: "(",
		59: ":",
		61: "+",
		173: "_",
		186: ":",
		187: "+",
		188: "<",
		189: "_",
		190: ">",
		191: "?",
		192: "~",
		219: "{",
		220: "|",
		221: "}",
		222: '"'
	},
	po = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent),
	kf = typeof navigator < "u" && /Mac/.test(navigator.platform),
	xf =
		typeof navigator < "u" &&
		/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
	vf = kf || (po && +po[1] < 57);
for (var he = 0; he < 10; he++) gt[48 + he] = gt[96 + he] = String(he);
for (var he = 1; he <= 24; he++) gt[he + 111] = "F" + he;
for (var he = 65; he <= 90; he++)
	(gt[he] = String.fromCharCode(he + 32)), (Oi[he] = String.fromCharCode(he));
for (var ts in gt) Oi.hasOwnProperty(ts) || (Oi[ts] = gt[ts]);
function Sf(n) {
	var e =
			(vf && (n.ctrlKey || n.altKey || n.metaKey)) ||
			(xf && n.shiftKey && n.key && n.key.length == 1) ||
			n.key == "Unidentified",
		t =
			(!e && n.key) ||
			(n.shiftKey ? Oi : gt)[n.keyCode] ||
			n.key ||
			"Unidentified";
	return (
		t == "Esc" && (t = "Escape"),
		t == "Del" && (t = "Delete"),
		t == "Left" && (t = "ArrowLeft"),
		t == "Up" && (t = "ArrowUp"),
		t == "Right" && (t = "ArrowRight"),
		t == "Down" && (t = "ArrowDown"),
		t
	);
}
function vn(n) {
	let e;
	return (
		n.nodeType == 11 ? (e = n.getSelection ? n : n.ownerDocument) : (e = n),
		e.getSelection()
	);
}
function Xt(n, e) {
	return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Cf(n) {
	let e = n.activeElement;
	for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
	return e;
}
function dn(n, e) {
	if (!e.anchorNode) return !1;
	try {
		return Xt(n, e.anchorNode);
	} catch {
		return !1;
	}
}
function Bi(n) {
	return n.nodeType == 3
		? Zt(n, 0, n.nodeValue.length).getClientRects()
		: n.nodeType == 1
		? n.getClientRects()
		: [];
}
function Sn(n, e, t, i) {
	return t ? mo(n, e, t, i, -1) || mo(n, e, t, i, 1) : !1;
}
function Cn(n) {
	for (var e = 0; ; e++) if (((n = n.previousSibling), !n)) return e;
}
function mo(n, e, t, i, s) {
	for (;;) {
		if (n == t && e == i) return !0;
		if (e == (s < 0 ? 0 : Pi(n))) {
			if (n.nodeName == "DIV") return !1;
			let r = n.parentNode;
			if (!r || r.nodeType != 1) return !1;
			(e = Cn(n) + (s < 0 ? 0 : 1)), (n = r);
		} else if (n.nodeType == 1) {
			if (
				((n = n.childNodes[e + (s < 0 ? -1 : 0)]),
				n.nodeType == 1 && n.contentEditable == "false")
			)
				return !1;
			e = s < 0 ? Pi(n) : 0;
		} else return !1;
	}
}
function Pi(n) {
	return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
const Pa = { left: 0, right: 0, top: 0, bottom: 0 };
function Dr(n, e) {
	let t = e ? n.left : n.right;
	return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function Af(n) {
	return { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function Mf(n, e, t, i, s, r, o, l) {
	let a = n.ownerDocument,
		h = a.defaultView || window;
	for (let c = n; c; )
		if (c.nodeType == 1) {
			let f,
				u = c == a.body;
			if (u) f = Af(h);
			else {
				if (
					c.scrollHeight <= c.clientHeight &&
					c.scrollWidth <= c.clientWidth
				) {
					c = c.assignedSlot || c.parentNode;
					continue;
				}
				let g = c.getBoundingClientRect();
				f = {
					left: g.left,
					right: g.left + c.clientWidth,
					top: g.top,
					bottom: g.top + c.clientHeight
				};
			}
			let d = 0,
				p = 0;
			if (s == "nearest")
				e.top < f.top
					? ((p = -(f.top - e.top + o)),
					  t > 0 &&
							e.bottom > f.bottom + p &&
							(p = e.bottom - f.bottom + p + o))
					: e.bottom > f.bottom &&
					  ((p = e.bottom - f.bottom + o),
					  t < 0 && e.top - p < f.top && (p = -(f.top + p - e.top + o)));
			else {
				let g = e.bottom - e.top,
					y = f.bottom - f.top;
				p =
					(s == "center" && g <= y
						? e.top + g / 2 - y / 2
						: s == "start" || (s == "center" && t < 0)
						? e.top - o
						: e.bottom - y + o) - f.top;
			}
			if (
				(i == "nearest"
					? e.left < f.left
						? ((d = -(f.left - e.left + r)),
						  t > 0 && e.right > f.right + d && (d = e.right - f.right + d + r))
						: e.right > f.right &&
						  ((d = e.right - f.right + r),
						  t < 0 && e.left < f.left + d && (d = -(f.left + d - e.left + r)))
					: (d =
							(i == "center"
								? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2
								: (i == "start") == l
								? e.left - r
								: e.right - (f.right - f.left) + r) - f.left),
				d || p)
			)
				if (u) h.scrollBy(d, p);
				else {
					let g = 0,
						y = 0;
					if (p) {
						let b = c.scrollTop;
						(c.scrollTop += p), (y = c.scrollTop - b);
					}
					if (d) {
						let b = c.scrollLeft;
						(c.scrollLeft += d), (g = c.scrollLeft - b);
					}
					(e = {
						left: e.left - g,
						top: e.top - y,
						right: e.right - g,
						bottom: e.bottom - y
					}),
						g && Math.abs(g - d) < 1 && (i = "nearest"),
						y && Math.abs(y - p) < 1 && (s = "nearest");
				}
			if (u) break;
			c = c.assignedSlot || c.parentNode;
		} else if (c.nodeType == 11) c = c.host;
		else break;
}
class Df {
	constructor() {
		(this.anchorNode = null),
			(this.anchorOffset = 0),
			(this.focusNode = null),
			(this.focusOffset = 0);
	}
	eq(e) {
		return (
			this.anchorNode == e.anchorNode &&
			this.anchorOffset == e.anchorOffset &&
			this.focusNode == e.focusNode &&
			this.focusOffset == e.focusOffset
		);
	}
	setRange(e) {
		this.set(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset);
	}
	set(e, t, i, s) {
		(this.anchorNode = e),
			(this.anchorOffset = t),
			(this.focusNode = i),
			(this.focusOffset = s);
	}
}
let Ht = null;
function Ea(n) {
	if (n.setActive) return n.setActive();
	if (Ht) return n.focus(Ht);
	let e = [];
	for (
		let t = n;
		t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
		t = t.parentNode
	);
	if (
		(n.focus(
			Ht == null
				? {
						get preventScroll() {
							return (Ht = { preventScroll: !0 }), !0;
						}
				  }
				: void 0
		),
		!Ht)
	) {
		Ht = !1;
		for (let t = 0; t < e.length; ) {
			let i = e[t++],
				s = e[t++],
				r = e[t++];
			i.scrollTop != s && (i.scrollTop = s),
				i.scrollLeft != r && (i.scrollLeft = r);
		}
	}
}
let go;
function Zt(n, e, t = e) {
	let i = go || (go = document.createRange());
	return i.setEnd(n, t), i.setStart(n, e), i;
}
function Gt(n, e, t) {
	let i = { key: e, code: e, keyCode: t, which: t, cancelable: !0 },
		s = new KeyboardEvent("keydown", i);
	(s.synthetic = !0), n.dispatchEvent(s);
	let r = new KeyboardEvent("keyup", i);
	return (
		(r.synthetic = !0),
		n.dispatchEvent(r),
		s.defaultPrevented || r.defaultPrevented
	);
}
function Tf(n) {
	for (; n; ) {
		if (n && (n.nodeType == 9 || (n.nodeType == 11 && n.host))) return n;
		n = n.assignedSlot || n.parentNode;
	}
	return null;
}
function Ra(n) {
	for (; n.attributes.length; ) n.removeAttributeNode(n.attributes[0]);
}
function Of(n, e) {
	let t = e.focusNode,
		i = e.focusOffset;
	if (!t || e.anchorNode != t || e.anchorOffset != i) return !1;
	for (;;)
		if (i) {
			if (t.nodeType != 1) return !1;
			let s = t.childNodes[i - 1];
			s.contentEditable == "false" ? i-- : ((t = s), (i = Pi(t)));
		} else {
			if (t == n) return !0;
			(i = Cn(t)), (t = t.parentNode);
		}
}
class ye {
	constructor(e, t, i = !0) {
		(this.node = e), (this.offset = t), (this.precise = i);
	}
	static before(e, t) {
		return new ye(e.parentNode, Cn(e), t);
	}
	static after(e, t) {
		return new ye(e.parentNode, Cn(e) + 1, t);
	}
}
const Tr = [];
class K {
	constructor() {
		(this.parent = null), (this.dom = null), (this.dirty = 2);
	}
	get editorView() {
		if (!this.parent) throw new Error("Accessing view in orphan content view");
		return this.parent.editorView;
	}
	get overrideDOMText() {
		return null;
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0;
	}
	get posAtEnd() {
		return this.posAtStart + this.length;
	}
	posBefore(e) {
		let t = this.posAtStart;
		for (let i of this.children) {
			if (i == e) return t;
			t += i.length + i.breakAfter;
		}
		throw new RangeError("Invalid child in posBefore");
	}
	posAfter(e) {
		return this.posBefore(e) + e.length;
	}
	coordsAt(e, t) {
		return null;
	}
	sync(e) {
		if (this.dirty & 2) {
			let t = this.dom,
				i = null,
				s;
			for (let r of this.children) {
				if (r.dirty) {
					if (!r.dom && (s = i ? i.nextSibling : t.firstChild)) {
						let o = K.get(s);
						(!o || (!o.parent && o.canReuseDOM(r))) && r.reuseDOM(s);
					}
					r.sync(e), (r.dirty = 0);
				}
				if (
					((s = i ? i.nextSibling : t.firstChild),
					e && !e.written && e.node == t && s != r.dom && (e.written = !0),
					r.dom.parentNode == t)
				)
					for (; s && s != r.dom; ) s = yo(s);
				else t.insertBefore(r.dom, s);
				i = r.dom;
			}
			for (
				s = i ? i.nextSibling : t.firstChild,
					s && e && e.node == t && (e.written = !0);
				s;

			)
				s = yo(s);
		} else if (this.dirty & 1)
			for (let t of this.children) t.dirty && (t.sync(e), (t.dirty = 0));
	}
	reuseDOM(e) {}
	localPosFromDOM(e, t) {
		let i;
		if (e == this.dom) i = this.dom.childNodes[t];
		else {
			let s = Pi(e) == 0 ? 0 : t == 0 ? -1 : 1;
			for (;;) {
				let r = e.parentNode;
				if (r == this.dom) break;
				s == 0 &&
					r.firstChild != r.lastChild &&
					(e == r.firstChild ? (s = -1) : (s = 1)),
					(e = r);
			}
			s < 0 ? (i = e) : (i = e.nextSibling);
		}
		if (i == this.dom.firstChild) return 0;
		for (; i && !K.get(i); ) i = i.nextSibling;
		if (!i) return this.length;
		for (let s = 0, r = 0; ; s++) {
			let o = this.children[s];
			if (o.dom == i) return r;
			r += o.length + o.breakAfter;
		}
	}
	domBoundsAround(e, t, i = 0) {
		let s = -1,
			r = -1,
			o = -1,
			l = -1;
		for (let a = 0, h = i, c = i; a < this.children.length; a++) {
			let f = this.children[a],
				u = h + f.length;
			if (h < e && u > t) return f.domBoundsAround(e, t, h);
			if (
				(u >= e && s == -1 && ((s = a), (r = h)),
				h > t && f.dom.parentNode == this.dom)
			) {
				(o = a), (l = c);
				break;
			}
			(c = u), (h = u + f.breakAfter);
		}
		return {
			from: r,
			to: l < 0 ? i + this.length : l,
			startDOM:
				(s ? this.children[s - 1].dom.nextSibling : null) ||
				this.dom.firstChild,
			endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
		};
	}
	markDirty(e = !1) {
		(this.dirty |= 2), this.markParentsDirty(e);
	}
	markParentsDirty(e) {
		for (let t = this.parent; t; t = t.parent) {
			if ((e && (t.dirty |= 2), t.dirty & 1)) return;
			(t.dirty |= 1), (e = !1);
		}
	}
	setParent(e) {
		this.parent != e &&
			((this.parent = e), this.dirty && this.markParentsDirty(!0));
	}
	setDOM(e) {
		this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this);
	}
	get rootView() {
		for (let e = this; ; ) {
			let t = e.parent;
			if (!t) return e;
			e = t;
		}
	}
	replaceChildren(e, t, i = Tr) {
		this.markDirty();
		for (let s = e; s < t; s++) {
			let r = this.children[s];
			r.parent == this && r.destroy();
		}
		this.children.splice(e, t - e, ...i);
		for (let s = 0; s < i.length; s++) i[s].setParent(this);
	}
	ignoreMutation(e) {
		return !1;
	}
	ignoreEvent(e) {
		return !1;
	}
	childCursor(e = this.length) {
		return new La(this.children, e, this.children.length);
	}
	childPos(e, t = 1) {
		return this.childCursor().findPos(e, t);
	}
	toString() {
		let e = this.constructor.name.replace("View", "");
		return (
			e +
			(this.children.length
				? "(" + this.children.join() + ")"
				: this.length
				? "[" + (e == "Text" ? this.text : this.length) + "]"
				: "") +
			(this.breakAfter ? "#" : "")
		);
	}
	static get(e) {
		return e.cmView;
	}
	get isEditable() {
		return !0;
	}
	merge(e, t, i, s, r, o) {
		return !1;
	}
	become(e) {
		return !1;
	}
	canReuseDOM(e) {
		return e.constructor == this.constructor;
	}
	getSide() {
		return 0;
	}
	destroy() {
		this.parent = null;
	}
}
K.prototype.breakAfter = 0;
function yo(n) {
	let e = n.nextSibling;
	return n.parentNode.removeChild(n), e;
}
class La {
	constructor(e, t, i) {
		(this.children = e), (this.pos = t), (this.i = i), (this.off = 0);
	}
	findPos(e, t = 1) {
		for (;;) {
			if (
				e > this.pos ||
				(e == this.pos &&
					(t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
			)
				return (this.off = e - this.pos), this;
			let i = this.children[--this.i];
			this.pos -= i.length + i.breakAfter;
		}
	}
}
function Ia(n, e, t, i, s, r, o, l, a) {
	let { children: h } = n,
		c = h.length ? h[e] : null,
		f = r.length ? r[r.length - 1] : null,
		u = f ? f.breakAfter : o;
	if (
		!(
			e == i &&
			c &&
			!o &&
			!u &&
			r.length < 2 &&
			c.merge(t, s, r.length ? f : null, t == 0, l, a)
		)
	) {
		if (i < h.length) {
			let d = h[i];
			d && s < d.length
				? (e == i && ((d = d.split(s)), (s = 0)),
				  !u && f && d.merge(0, s, f, !0, 0, a)
						? (r[r.length - 1] = d)
						: (s && d.merge(0, s, null, !1, 0, a), r.push(d)))
				: d?.breakAfter && (f ? (f.breakAfter = 1) : (o = 1)),
				i++;
		}
		for (
			c &&
			((c.breakAfter = o),
			t > 0 &&
				(!o && r.length && c.merge(t, c.length, r[0], !1, l, 0)
					? (c.breakAfter = r.shift().breakAfter)
					: (t < c.length ||
							(c.children.length &&
								c.children[c.children.length - 1].length == 0)) &&
					  c.merge(t, c.length, null, !1, l, 0),
				e++));
			e < i && r.length;

		)
			if (h[i - 1].become(r[r.length - 1]))
				i--, r.pop(), (a = r.length ? 0 : l);
			else if (h[e].become(r[0])) e++, r.shift(), (l = r.length ? 0 : a);
			else break;
		!r.length &&
			e &&
			i < h.length &&
			!h[e - 1].breakAfter &&
			h[i].merge(0, 0, h[e - 1], !1, l, a) &&
			e--,
			(e < i || r.length) && n.replaceChildren(e, i, r);
	}
}
function Na(n, e, t, i, s, r) {
	let o = n.childCursor(),
		{ i: l, off: a } = o.findPos(t, 1),
		{ i: h, off: c } = o.findPos(e, -1),
		f = e - t;
	for (let u of i) f += u.length;
	(n.length += f), Ia(n, h, c, l, a, i, 0, s, r);
}
let Te =
		typeof navigator < "u"
			? navigator
			: { userAgent: "", vendor: "", platform: "" },
	qs = typeof document < "u" ? document : { documentElement: { style: {} } };
const js = /Edge\/(\d+)/.exec(Te.userAgent),
	_a = /MSIE \d/.test(Te.userAgent),
	Ks = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Te.userAgent),
	Hn = !!(_a || Ks || js),
	bo = !Hn && /gecko\/(\d+)/i.test(Te.userAgent),
	is = !Hn && /Chrome\/(\d+)/.exec(Te.userAgent),
	wo = "webkitFontSmoothing" in qs.documentElement.style,
	Va = !Hn && /Apple Computer/.test(Te.vendor),
	ko = Va && (/Mobile\/\w+/.test(Te.userAgent) || Te.maxTouchPoints > 2);
var A = {
	mac: ko || /Mac/.test(Te.platform),
	windows: /Win/.test(Te.platform),
	linux: /Linux|X11/.test(Te.platform),
	ie: Hn,
	ie_version: _a ? qs.documentMode || 6 : Ks ? +Ks[1] : js ? +js[1] : 0,
	gecko: bo,
	gecko_version: bo ? +(/Firefox\/(\d+)/.exec(Te.userAgent) || [0, 0])[1] : 0,
	chrome: !!is,
	chrome_version: is ? +is[1] : 0,
	ios: ko,
	android: /Android\b/.test(Te.userAgent),
	webkit: wo,
	safari: Va,
	webkit_version: wo
		? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
		: 0,
	tabSize:
		qs.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const Bf = 256;
class yt extends K {
	constructor(e) {
		super(), (this.text = e);
	}
	get length() {
		return this.text.length;
	}
	createDOM(e) {
		this.setDOM(e || document.createTextNode(this.text));
	}
	sync(e) {
		this.dom || this.createDOM(),
			this.dom.nodeValue != this.text &&
				(e && e.node == this.dom && (e.written = !0),
				(this.dom.nodeValue = this.text));
	}
	reuseDOM(e) {
		e.nodeType == 3 && this.createDOM(e);
	}
	merge(e, t, i) {
		return i && (!(i instanceof yt) || this.length - (t - e) + i.length > Bf)
			? !1
			: ((this.text =
					this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t)),
			  this.markDirty(),
			  !0);
	}
	split(e) {
		let t = new yt(this.text.slice(e));
		return (this.text = this.text.slice(0, e)), this.markDirty(), t;
	}
	localPosFromDOM(e, t) {
		return e == this.dom ? t : t ? this.text.length : 0;
	}
	domAtPos(e) {
		return new ye(this.dom, e);
	}
	domBoundsAround(e, t, i) {
		return {
			from: i,
			to: i + this.length,
			startDOM: this.dom,
			endDOM: this.dom.nextSibling
		};
	}
	coordsAt(e, t) {
		return Us(this.dom, e, t);
	}
}
class et extends K {
	constructor(e, t = [], i = 0) {
		super(), (this.mark = e), (this.children = t), (this.length = i);
		for (let s of t) s.setParent(this);
	}
	setAttrs(e) {
		if (
			(Ra(e),
			this.mark.class && (e.className = this.mark.class),
			this.mark.attrs)
		)
			for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
		return e;
	}
	reuseDOM(e) {
		e.nodeName == this.mark.tagName.toUpperCase() &&
			(this.setDOM(e), (this.dirty |= 6));
	}
	sync(e) {
		this.dom
			? this.dirty & 4 && this.setAttrs(this.dom)
			: this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
			super.sync(e);
	}
	merge(e, t, i, s, r, o) {
		return i &&
			(!(i instanceof et && i.mark.eq(this.mark)) ||
				(e && r <= 0) ||
				(t < this.length && o <= 0))
			? !1
			: (Na(this, e, t, i ? i.children : [], r - 1, o - 1),
			  this.markDirty(),
			  !0);
	}
	split(e) {
		let t = [],
			i = 0,
			s = -1,
			r = 0;
		for (let l of this.children) {
			let a = i + l.length;
			a > e && t.push(i < e ? l.split(e - i) : l),
				s < 0 && i >= e && (s = r),
				(i = a),
				r++;
		}
		let o = this.length - e;
		return (
			(this.length = e),
			s > -1 && ((this.children.length = s), this.markDirty()),
			new et(this.mark, t, o)
		);
	}
	domAtPos(e) {
		return Wa(this, e);
	}
	coordsAt(e, t) {
		return qa(this, e, t);
	}
}
function Us(n, e, t) {
	let i = n.nodeValue.length;
	e > i && (e = i);
	let s = e,
		r = e,
		o = 0;
	(e == 0 && t < 0) || (e == i && t >= 0)
		? A.chrome || A.gecko || (e ? (s--, (o = 1)) : r < i && (r++, (o = -1)))
		: t < 0
		? s--
		: r < i && r++;
	let l = Zt(n, s, r).getClientRects();
	if (!l.length) return Pa;
	let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
	return (
		A.safari &&
			!o &&
			a.width == 0 &&
			(a = Array.prototype.find.call(l, (h) => h.width) || a),
		o ? Dr(a, o < 0) : a || null
	);
}
class ct extends K {
	constructor(e, t, i) {
		super(),
			(this.widget = e),
			(this.length = t),
			(this.side = i),
			(this.prevWidget = null);
	}
	static create(e, t, i) {
		return new (e.customView || ct)(e, t, i);
	}
	split(e) {
		let t = ct.create(this.widget, this.length - e, this.side);
		return (this.length -= e), t;
	}
	sync() {
		(!this.dom || !this.widget.updateDOM(this.dom)) &&
			(this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
			(this.prevWidget = null),
			this.setDOM(this.widget.toDOM(this.editorView)),
			(this.dom.contentEditable = "false"));
	}
	getSide() {
		return this.side;
	}
	merge(e, t, i, s, r, o) {
		return i &&
			(!(i instanceof ct) ||
				!this.widget.compare(i.widget) ||
				(e > 0 && r <= 0) ||
				(t < this.length && o <= 0))
			? !1
			: ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
	}
	become(e) {
		return e.length == this.length &&
			e instanceof ct &&
			e.side == this.side &&
			this.widget.constructor == e.widget.constructor
			? (this.widget.eq(e.widget) || this.markDirty(!0),
			  this.dom && !this.prevWidget && (this.prevWidget = this.widget),
			  (this.widget = e.widget),
			  !0)
			: !1;
	}
	ignoreMutation() {
		return !0;
	}
	ignoreEvent(e) {
		return this.widget.ignoreEvent(e);
	}
	get overrideDOMText() {
		if (this.length == 0) return _.empty;
		let e = this;
		for (; e.parent; ) e = e.parent;
		let t = e.editorView,
			i = t && t.state.doc,
			s = this.posAtStart;
		return i ? i.slice(s, s + this.length) : _.empty;
	}
	domAtPos(e) {
		return e == 0 ? ye.before(this.dom) : ye.after(this.dom, e == this.length);
	}
	domBoundsAround() {
		return null;
	}
	coordsAt(e, t) {
		let i = this.dom.getClientRects(),
			s = null;
		if (!i.length) return Pa;
		for (
			let r = e > 0 ? i.length - 1 : 0;
			(s = i[r]), !(e > 0 ? r == 0 : r == i.length - 1 || s.top < s.bottom);
			r += e > 0 ? -1 : 1
		);
		return this.length ? s : Dr(s, this.side > 0);
	}
	get isEditable() {
		return !1;
	}
	destroy() {
		super.destroy(), this.dom && this.widget.destroy(this.dom);
	}
}
class Fa extends ct {
	domAtPos(e) {
		let { topView: t, text: i } = this.widget;
		return t
			? $s(
					e,
					0,
					t,
					i,
					(s, r) => s.domAtPos(r),
					(s) => new ye(i, Math.min(s, i.nodeValue.length))
			  )
			: new ye(i, Math.min(e, i.nodeValue.length));
	}
	sync() {
		this.setDOM(this.widget.toDOM());
	}
	localPosFromDOM(e, t) {
		let { topView: i, text: s } = this.widget;
		return i ? Ha(e, t, i, s) : Math.min(t, this.length);
	}
	ignoreMutation() {
		return !1;
	}
	get overrideDOMText() {
		return null;
	}
	coordsAt(e, t) {
		let { topView: i, text: s } = this.widget;
		return i
			? $s(
					e,
					t,
					i,
					s,
					(r, o, l) => r.coordsAt(o, l),
					(r, o) => Us(s, r, o)
			  )
			: Us(s, e, t);
	}
	destroy() {
		var e;
		super.destroy(),
			(e = this.widget.topView) === null || e === void 0 || e.destroy();
	}
	get isEditable() {
		return !0;
	}
	canReuseDOM() {
		return !0;
	}
}
function $s(n, e, t, i, s, r) {
	if (t instanceof et) {
		for (let o = t.dom.firstChild; o; o = o.nextSibling) {
			let l = K.get(o);
			if (!l) return r(n, e);
			let a = Xt(o, i),
				h = l.length + (a ? i.nodeValue.length : 0);
			if (n < h || (n == h && l.getSide() <= 0))
				return a ? $s(n, e, l, i, s, r) : s(l, n, e);
			n -= h;
		}
		return s(t, t.length, -1);
	} else return t.dom == i ? r(n, e) : s(t, n, e);
}
function Ha(n, e, t, i) {
	if (t instanceof et)
		for (let s of t.children) {
			let r = 0,
				o = Xt(s.dom, i);
			if (Xt(s.dom, n))
				return r + (o ? Ha(n, e, s, i) : s.localPosFromDOM(n, e));
			r += o ? i.nodeValue.length : s.length;
		}
	else if (t.dom == i) return Math.min(e, i.nodeValue.length);
	return t.localPosFromDOM(n, e);
}
class Qt extends K {
	constructor(e) {
		super(), (this.side = e);
	}
	get length() {
		return 0;
	}
	merge() {
		return !1;
	}
	become(e) {
		return e instanceof Qt && e.side == this.side;
	}
	split() {
		return new Qt(this.side);
	}
	sync() {
		if (!this.dom) {
			let e = document.createElement("img");
			(e.className = "cm-widgetBuffer"),
				e.setAttribute("aria-hidden", "true"),
				this.setDOM(e);
		}
	}
	getSide() {
		return this.side;
	}
	domAtPos(e) {
		return ye.before(this.dom);
	}
	localPosFromDOM() {
		return 0;
	}
	domBoundsAround() {
		return null;
	}
	coordsAt(e) {
		let t = this.dom.getBoundingClientRect(),
			i = Pf(this, this.side > 0 ? -1 : 1);
		return i && i.top < t.bottom && i.bottom > t.top
			? { left: t.left, right: t.right, top: i.top, bottom: i.bottom }
			: t;
	}
	get overrideDOMText() {
		return _.empty;
	}
}
yt.prototype.children = ct.prototype.children = Qt.prototype.children = Tr;
function Pf(n, e) {
	let t = n.parent,
		i = t ? t.children.indexOf(n) : -1;
	for (; t && i >= 0; )
		if (e < 0 ? i > 0 : i < t.children.length) {
			let s = t.children[i + e];
			if (s instanceof yt) {
				let r = s.coordsAt(e < 0 ? s.length : 0, e);
				if (r) return r;
			}
			i += e;
		} else if (t instanceof et && t.parent)
			(i = t.parent.children.indexOf(t) + (e < 0 ? 0 : 1)), (t = t.parent);
		else {
			let s = t.dom.lastChild;
			if (s && s.nodeName == "BR") return s.getClientRects()[0];
			break;
		}
}
function Wa(n, e) {
	let t = n.dom,
		{ children: i } = n,
		s = 0;
	for (let r = 0; s < i.length; s++) {
		let o = i[s],
			l = r + o.length;
		if (!(l == r && o.getSide() <= 0)) {
			if (e > r && e < l && o.dom.parentNode == t) return o.domAtPos(e - r);
			if (e <= r) break;
			r = l;
		}
	}
	for (let r = s; r > 0; r--) {
		let o = i[r - 1];
		if (o.dom.parentNode == t) return o.domAtPos(o.length);
	}
	for (let r = s; r < i.length; r++) {
		let o = i[r];
		if (o.dom.parentNode == t) return o.domAtPos(0);
	}
	return new ye(t, 0);
}
function za(n, e, t) {
	let i,
		{ children: s } = n;
	t > 0 &&
	e instanceof et &&
	s.length &&
	(i = s[s.length - 1]) instanceof et &&
	i.mark.eq(e.mark)
		? za(i, e.children[0], t - 1)
		: (s.push(e), e.setParent(n)),
		(n.length += e.length);
}
function qa(n, e, t) {
	let i = null,
		s = -1,
		r = null,
		o = -1;
	function l(h, c) {
		for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
			let d = h.children[f],
				p = u + d.length;
			p >= c &&
				(d.children.length
					? l(d, c - u)
					: !r && (p > c || (u == p && d.getSide() > 0))
					? ((r = d), (o = c - u))
					: (u < c || (u == p && d.getSide() < 0)) && ((i = d), (s = c - u))),
				(u = p);
		}
	}
	l(n, e);
	let a = (t < 0 ? i : r) || i || r;
	return a ? a.coordsAt(Math.max(0, a == i ? s : o), t) : Ef(n);
}
function Ef(n) {
	let e = n.dom.lastChild;
	if (!e) return n.dom.getBoundingClientRect();
	let t = Bi(e);
	return t[t.length - 1] || null;
}
function Gs(n, e) {
	for (let t in n)
		t == "class" && e.class
			? (e.class += " " + n.class)
			: t == "style" && e.style
			? (e.style += ";" + n.style)
			: (e[t] = n[t]);
	return e;
}
function Or(n, e) {
	if (n == e) return !0;
	if (!n || !e) return !1;
	let t = Object.keys(n),
		i = Object.keys(e);
	if (t.length != i.length) return !1;
	for (let s of t) if (i.indexOf(s) == -1 || n[s] !== e[s]) return !1;
	return !0;
}
function Js(n, e, t) {
	let i = null;
	if (e) for (let s in e) (t && s in t) || n.removeAttribute((i = s));
	if (t) for (let s in t) (e && e[s] == t[s]) || n.setAttribute((i = s), t[s]);
	return !!i;
}
class tt {
	eq(e) {
		return !1;
	}
	updateDOM(e) {
		return !1;
	}
	compare(e) {
		return this == e || (this.constructor == e.constructor && this.eq(e));
	}
	get estimatedHeight() {
		return -1;
	}
	ignoreEvent(e) {
		return !0;
	}
	get customView() {
		return null;
	}
	destroy(e) {}
}
var W = (function (n) {
	return (
		(n[(n.Text = 0)] = "Text"),
		(n[(n.WidgetBefore = 1)] = "WidgetBefore"),
		(n[(n.WidgetAfter = 2)] = "WidgetAfter"),
		(n[(n.WidgetRange = 3)] = "WidgetRange"),
		n
	);
})(W || (W = {}));
class E extends Bt {
	constructor(e, t, i, s) {
		super(),
			(this.startSide = e),
			(this.endSide = t),
			(this.widget = i),
			(this.spec = s);
	}
	get heightRelevant() {
		return !1;
	}
	static mark(e) {
		return new Wn(e);
	}
	static widget(e) {
		let t = e.side || 0,
			i = !!e.block;
		return (
			(t += i ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
			new Et(e, t, t, i, e.widget || null, !1)
		);
	}
	static replace(e) {
		let t = !!e.block,
			i,
			s;
		if (e.isBlockGap) (i = -5e8), (s = 4e8);
		else {
			let { start: r, end: o } = ja(e, t);
			(i = (r ? (t ? -3e8 : -1) : 5e8) - 1),
				(s = (o ? (t ? 2e8 : 1) : -6e8) + 1);
		}
		return new Et(e, i, s, t, e.widget || null, !0);
	}
	static line(e) {
		return new Hi(e);
	}
	static set(e, t = !1) {
		return F.of(e, t);
	}
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : !1;
	}
}
E.none = F.empty;
class Wn extends E {
	constructor(e) {
		let { start: t, end: i } = ja(e);
		super(t ? -1 : 5e8, i ? 1 : -6e8, null, e),
			(this.tagName = e.tagName || "span"),
			(this.class = e.class || ""),
			(this.attrs = e.attributes || null);
	}
	eq(e) {
		return (
			this == e ||
			(e instanceof Wn &&
				this.tagName == e.tagName &&
				this.class == e.class &&
				Or(this.attrs, e.attrs))
		);
	}
	range(e, t = e) {
		if (e >= t) throw new RangeError("Mark decorations may not be empty");
		return super.range(e, t);
	}
}
Wn.prototype.point = !1;
class Hi extends E {
	constructor(e) {
		super(-2e8, -2e8, null, e);
	}
	eq(e) {
		return e instanceof Hi && Or(this.spec.attributes, e.spec.attributes);
	}
	range(e, t = e) {
		if (t != e)
			throw new RangeError("Line decoration ranges must be zero-length");
		return super.range(e, t);
	}
}
Hi.prototype.mapMode = ce.TrackBefore;
Hi.prototype.point = !0;
class Et extends E {
	constructor(e, t, i, s, r, o) {
		super(t, i, r, e),
			(this.block = s),
			(this.isReplace = o),
			(this.mapMode = s
				? t <= 0
					? ce.TrackBefore
					: ce.TrackAfter
				: ce.TrackDel);
	}
	get type() {
		return this.startSide < this.endSide
			? W.WidgetRange
			: this.startSide <= 0
			? W.WidgetBefore
			: W.WidgetAfter;
	}
	get heightRelevant() {
		return this.block || (!!this.widget && this.widget.estimatedHeight >= 5);
	}
	eq(e) {
		return (
			e instanceof Et &&
			Rf(this.widget, e.widget) &&
			this.block == e.block &&
			this.startSide == e.startSide &&
			this.endSide == e.endSide
		);
	}
	range(e, t = e) {
		if (
			this.isReplace &&
			(e > t || (e == t && this.startSide > 0 && this.endSide <= 0))
		)
			throw new RangeError("Invalid range for replacement decoration");
		if (!this.isReplace && t != e)
			throw new RangeError(
				"Widget decorations can only have zero-length ranges"
			);
		return super.range(e, t);
	}
}
Et.prototype.point = !0;
function ja(n, e = !1) {
	let { inclusiveStart: t, inclusiveEnd: i } = n;
	return (
		t == null && (t = n.inclusive),
		i == null && (i = n.inclusive),
		{ start: t ?? e, end: i ?? e }
	);
}
function Rf(n, e) {
	return n == e || !!(n && e && n.compare(e));
}
function Ys(n, e, t, i = 0) {
	let s = t.length - 1;
	s >= 0 && t[s] + i >= n ? (t[s] = Math.max(t[s], e)) : t.push(n, e);
}
class ke extends K {
	constructor() {
		super(...arguments),
			(this.children = []),
			(this.length = 0),
			(this.prevAttrs = void 0),
			(this.attrs = null),
			(this.breakAfter = 0);
	}
	merge(e, t, i, s, r, o) {
		if (i) {
			if (!(i instanceof ke)) return !1;
			this.dom || i.transferDOM(this);
		}
		return (
			s && this.setDeco(i ? i.attrs : null),
			Na(this, e, t, i ? i.children : [], r, o),
			!0
		);
	}
	split(e) {
		let t = new ke();
		if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
		let { i, off: s } = this.childPos(e);
		s &&
			(t.append(this.children[i].split(s), 0),
			this.children[i].merge(s, this.children[i].length, null, !1, 0, 0),
			i++);
		for (let r = i; r < this.children.length; r++)
			t.append(this.children[r], 0);
		for (; i > 0 && this.children[i - 1].length == 0; )
			this.children[--i].destroy();
		return (this.children.length = i), this.markDirty(), (this.length = e), t;
	}
	transferDOM(e) {
		this.dom &&
			(this.markDirty(),
			e.setDOM(this.dom),
			(e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
			(this.prevAttrs = void 0),
			(this.dom = null));
	}
	setDeco(e) {
		Or(this.attrs, e) ||
			(this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
			(this.attrs = e));
	}
	append(e, t) {
		za(this, e, t);
	}
	addLineDeco(e) {
		let t = e.spec.attributes,
			i = e.spec.class;
		t && (this.attrs = Gs(t, this.attrs || {})),
			i && (this.attrs = Gs({ class: i }, this.attrs || {}));
	}
	domAtPos(e) {
		return Wa(this, e);
	}
	reuseDOM(e) {
		e.nodeName == "DIV" && (this.setDOM(e), (this.dirty |= 6));
	}
	sync(e) {
		var t;
		this.dom
			? this.dirty & 4 &&
			  (Ra(this.dom),
			  (this.dom.className = "cm-line"),
			  (this.prevAttrs = this.attrs ? null : void 0))
			: (this.setDOM(document.createElement("div")),
			  (this.dom.className = "cm-line"),
			  (this.prevAttrs = this.attrs ? null : void 0)),
			this.prevAttrs !== void 0 &&
				(Js(this.dom, this.prevAttrs, this.attrs),
				this.dom.classList.add("cm-line"),
				(this.prevAttrs = void 0)),
			super.sync(e);
		let i = this.dom.lastChild;
		for (; i && K.get(i) instanceof et; ) i = i.lastChild;
		if (
			!i ||
			!this.length ||
			(i.nodeName != "BR" &&
				((t = K.get(i)) === null || t === void 0 ? void 0 : t.isEditable) ==
					!1 &&
				(!A.ios || !this.children.some((s) => s instanceof yt)))
		) {
			let s = document.createElement("BR");
			(s.cmIgnore = !0), this.dom.appendChild(s);
		}
	}
	measureTextSize() {
		if (this.children.length == 0 || this.length > 20) return null;
		let e = 0;
		for (let t of this.children) {
			if (!(t instanceof yt) || /[^ -~]/.test(t.text)) return null;
			let i = Bi(t.dom);
			if (i.length != 1) return null;
			e += i[0].width;
		}
		return e
			? {
					lineHeight: this.dom.getBoundingClientRect().height,
					charWidth: e / this.length
			  }
			: null;
	}
	coordsAt(e, t) {
		return qa(this, e, t);
	}
	become(e) {
		return !1;
	}
	get type() {
		return W.Text;
	}
	static find(e, t) {
		for (let i = 0, s = 0; i < e.children.length; i++) {
			let r = e.children[i],
				o = s + r.length;
			if (o >= t) {
				if (r instanceof ke) return r;
				if (o > t) break;
			}
			s = o + r.breakAfter;
		}
		return null;
	}
}
class Ot extends K {
	constructor(e, t, i) {
		super(),
			(this.widget = e),
			(this.length = t),
			(this.type = i),
			(this.breakAfter = 0),
			(this.prevWidget = null);
	}
	merge(e, t, i, s, r, o) {
		return i &&
			(!(i instanceof Ot) ||
				!this.widget.compare(i.widget) ||
				(e > 0 && r <= 0) ||
				(t < this.length && o <= 0))
			? !1
			: ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
	}
	domAtPos(e) {
		return e == 0 ? ye.before(this.dom) : ye.after(this.dom, e == this.length);
	}
	split(e) {
		let t = this.length - e;
		this.length = e;
		let i = new Ot(this.widget, t, this.type);
		return (i.breakAfter = this.breakAfter), i;
	}
	get children() {
		return Tr;
	}
	sync() {
		(!this.dom || !this.widget.updateDOM(this.dom)) &&
			(this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
			(this.prevWidget = null),
			this.setDOM(this.widget.toDOM(this.editorView)),
			(this.dom.contentEditable = "false"));
	}
	get overrideDOMText() {
		return this.parent
			? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
			: _.empty;
	}
	domBoundsAround() {
		return null;
	}
	become(e) {
		return e instanceof Ot &&
			e.type == this.type &&
			e.widget.constructor == this.widget.constructor
			? (e.widget.eq(this.widget) || this.markDirty(!0),
			  this.dom && !this.prevWidget && (this.prevWidget = this.widget),
			  (this.widget = e.widget),
			  (this.length = e.length),
			  (this.breakAfter = e.breakAfter),
			  !0)
			: !1;
	}
	ignoreMutation() {
		return !0;
	}
	ignoreEvent(e) {
		return this.widget.ignoreEvent(e);
	}
	destroy() {
		super.destroy(), this.dom && this.widget.destroy(this.dom);
	}
}
class Br {
	constructor(e, t, i, s) {
		(this.doc = e),
			(this.pos = t),
			(this.end = i),
			(this.disallowBlockEffectsFor = s),
			(this.content = []),
			(this.curLine = null),
			(this.breakAtStart = 0),
			(this.pendingBuffer = 0),
			(this.atCursorPos = !0),
			(this.openStart = -1),
			(this.openEnd = -1),
			(this.text = ""),
			(this.textOff = 0),
			(this.cursor = e.iter()),
			(this.skip = t);
	}
	posCovered() {
		if (this.content.length == 0)
			return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
		let e = this.content[this.content.length - 1];
		return !e.breakAfter && !(e instanceof Ot && e.type == W.WidgetBefore);
	}
	getLine() {
		return (
			this.curLine ||
				(this.content.push((this.curLine = new ke())), (this.atCursorPos = !0)),
			this.curLine
		);
	}
	flushBuffer(e) {
		this.pendingBuffer &&
			(this.curLine.append(Gi(new Qt(-1), e), e.length),
			(this.pendingBuffer = 0));
	}
	addBlockWidget(e) {
		this.flushBuffer([]), (this.curLine = null), this.content.push(e);
	}
	finish(e) {
		e ? (this.pendingBuffer = 0) : this.flushBuffer([]),
			this.posCovered() || this.getLine();
	}
	buildText(e, t, i) {
		for (; e > 0; ) {
			if (this.textOff == this.text.length) {
				let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
				if (((this.skip = 0), l))
					throw new Error("Ran out of text content when drawing inline views");
				if (o) {
					this.posCovered() || this.getLine(),
						this.content.length
							? (this.content[this.content.length - 1].breakAfter = 1)
							: (this.breakAtStart = 1),
						this.flushBuffer([]),
						(this.curLine = null),
						e--;
					continue;
				} else (this.text = r), (this.textOff = 0);
			}
			let s = Math.min(this.text.length - this.textOff, e, 512);
			this.flushBuffer(t.slice(0, i)),
				this.getLine().append(
					Gi(new yt(this.text.slice(this.textOff, this.textOff + s)), t),
					i
				),
				(this.atCursorPos = !0),
				(this.textOff += s),
				(e -= s),
				(i = 0);
		}
	}
	span(e, t, i, s) {
		this.buildText(t - e, i, s),
			(this.pos = t),
			this.openStart < 0 && (this.openStart = s);
	}
	point(e, t, i, s, r, o) {
		if (this.disallowBlockEffectsFor[o] && i instanceof Et) {
			if (i.block)
				throw new RangeError(
					"Block decorations may not be specified via plugins"
				);
			if (t > this.doc.lineAt(this.pos).to)
				throw new RangeError(
					"Decorations that replace line breaks may not be specified via plugins"
				);
		}
		let l = t - e;
		if (i instanceof Et)
			if (i.block) {
				let { type: a } = i;
				a == W.WidgetAfter && !this.posCovered() && this.getLine(),
					this.addBlockWidget(new Ot(i.widget || new xo("div"), l, a));
			} else {
				let a = ct.create(i.widget || new xo("span"), l, l ? 0 : i.startSide),
					h =
						this.atCursorPos &&
						!a.isEditable &&
						r <= s.length &&
						(e < t || i.startSide > 0),
					c = !a.isEditable && (e < t || i.startSide <= 0),
					f = this.getLine();
				this.pendingBuffer == 2 && !h && (this.pendingBuffer = 0),
					this.flushBuffer(s),
					h &&
						(f.append(Gi(new Qt(1), s), r),
						(r = s.length + Math.max(0, r - s.length))),
					f.append(Gi(a, s), r),
					(this.atCursorPos = c),
					(this.pendingBuffer = c ? (e < t ? 1 : 2) : 0);
			}
		else
			this.doc.lineAt(this.pos).from == this.pos &&
				this.getLine().addLineDeco(i);
		l &&
			(this.textOff + l <= this.text.length
				? (this.textOff += l)
				: ((this.skip += l - (this.text.length - this.textOff)),
				  (this.text = ""),
				  (this.textOff = 0)),
			(this.pos = t)),
			this.openStart < 0 && (this.openStart = r);
	}
	static build(e, t, i, s, r) {
		let o = new Br(e, t, i, r);
		return (
			(o.openEnd = F.spans(s, t, i, o)),
			o.openStart < 0 && (o.openStart = o.openEnd),
			o.finish(o.openEnd),
			o
		);
	}
}
function Gi(n, e) {
	for (let t of e) n = new et(t, [n], n.length);
	return n;
}
class xo extends tt {
	constructor(e) {
		super(), (this.tag = e);
	}
	eq(e) {
		return e.tag == this.tag;
	}
	toDOM() {
		return document.createElement(this.tag);
	}
	updateDOM(e) {
		return e.nodeName.toLowerCase() == this.tag;
	}
}
const Ka = D.define(),
	Ua = D.define(),
	$a = D.define(),
	Ga = D.define(),
	Xs = D.define(),
	Ja = D.define(),
	Ya = D.define({ combine: (n) => n.some((e) => e) }),
	Xa = D.define({ combine: (n) => n.some((e) => e) });
class An {
	constructor(e, t = "nearest", i = "nearest", s = 5, r = 5) {
		(this.range = e),
			(this.y = t),
			(this.x = i),
			(this.yMargin = s),
			(this.xMargin = r);
	}
	map(e) {
		return e.empty
			? this
			: new An(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin);
	}
}
const vo = R.define({ map: (n, e) => n.map(e) });
function He(n, e, t) {
	let i = n.facet(Ga);
	i.length
		? i[0](e)
		: window.onerror
		? window.onerror(String(e), t, void 0, void 0, e)
		: t
		? console.error(t + ":", e)
		: console.error(e);
}
const zn = D.define({ combine: (n) => (n.length ? n[0] : !0) });
let Lf = 0;
const yi = D.define();
class be {
	constructor(e, t, i, s) {
		(this.id = e),
			(this.create = t),
			(this.domEventHandlers = i),
			(this.extension = s(this));
	}
	static define(e, t) {
		const { eventHandlers: i, provide: s, decorations: r } = t || {};
		return new be(Lf++, e, i, (o) => {
			let l = [yi.of(o)];
			return (
				r &&
					l.push(
						Ei.of((a) => {
							let h = a.plugin(o);
							return h ? r(h) : E.none;
						})
					),
				s && l.push(s(o)),
				l
			);
		});
	}
	static fromClass(e, t) {
		return be.define((i) => new e(i), t);
	}
}
class ns {
	constructor(e) {
		(this.spec = e), (this.mustUpdate = null), (this.value = null);
	}
	update(e) {
		if (this.value) {
			if (this.mustUpdate) {
				let t = this.mustUpdate;
				if (((this.mustUpdate = null), this.value.update))
					try {
						this.value.update(t);
					} catch (i) {
						if (
							(He(t.state, i, "CodeMirror plugin crashed"), this.value.destroy)
						)
							try {
								this.value.destroy();
							} catch {}
						this.deactivate();
					}
			}
		} else if (this.spec)
			try {
				this.value = this.spec.create(e);
			} catch (t) {
				He(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
			}
		return this;
	}
	destroy(e) {
		var t;
		if (!((t = this.value) === null || t === void 0) && t.destroy)
			try {
				this.value.destroy();
			} catch (i) {
				He(e.state, i, "CodeMirror plugin crashed");
			}
	}
	deactivate() {
		this.spec = this.value = null;
	}
}
const Za = D.define(),
	Qa = D.define(),
	Ei = D.define(),
	eh = D.define(),
	th = D.define(),
	bi = D.define();
class Qe {
	constructor(e, t, i, s) {
		(this.fromA = e), (this.toA = t), (this.fromB = i), (this.toB = s);
	}
	join(e) {
		return new Qe(
			Math.min(this.fromA, e.fromA),
			Math.max(this.toA, e.toA),
			Math.min(this.fromB, e.fromB),
			Math.max(this.toB, e.toB)
		);
	}
	addToSet(e) {
		let t = e.length,
			i = this;
		for (; t > 0; t--) {
			let s = e[t - 1];
			if (!(s.fromA > i.toA)) {
				if (s.toA < i.fromA) break;
				(i = i.join(s)), e.splice(t - 1, 1);
			}
		}
		return e.splice(t, 0, i), e;
	}
	static extendWithRanges(e, t) {
		if (t.length == 0) return e;
		let i = [];
		for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
			let a = s == e.length ? null : e[s],
				h = o - l,
				c = a ? a.fromB : 1e9;
			for (; r < t.length && t[r] < c; ) {
				let f = t[r],
					u = t[r + 1],
					d = Math.max(l, f),
					p = Math.min(c, u);
				if ((d <= p && new Qe(d + h, p + h, d, p).addToSet(i), u > c)) break;
				r += 2;
			}
			if (!a) return i;
			new Qe(a.fromA, a.toA, a.fromB, a.toB).addToSet(i),
				(o = a.toA),
				(l = a.toB);
		}
	}
}
class Mn {
	constructor(e, t, i) {
		(this.view = e),
			(this.state = t),
			(this.transactions = i),
			(this.flags = 0),
			(this.startState = e.state),
			(this.changes = ne.empty(this.startState.doc.length));
		for (let o of i) this.changes = this.changes.compose(o.changes);
		let s = [];
		this.changes.iterChangedRanges((o, l, a, h) => s.push(new Qe(o, l, a, h))),
			(this.changedRanges = s);
		let r = e.hasFocus;
		r != e.inputState.notifiedFocused &&
			((e.inputState.notifiedFocused = r), (this.flags |= 1));
	}
	static create(e, t, i) {
		return new Mn(e, t, i);
	}
	get viewportChanged() {
		return (this.flags & 4) > 0;
	}
	get heightChanged() {
		return (this.flags & 2) > 0;
	}
	get geometryChanged() {
		return this.docChanged || (this.flags & 10) > 0;
	}
	get focusChanged() {
		return (this.flags & 1) > 0;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get selectionSet() {
		return this.transactions.some((e) => e.selection);
	}
	get empty() {
		return this.flags == 0 && this.transactions.length == 0;
	}
}
var Z = (function (n) {
	return (n[(n.LTR = 0)] = "LTR"), (n[(n.RTL = 1)] = "RTL"), n;
})(Z || (Z = {}));
const Zs = Z.LTR,
	If = Z.RTL;
function ih(n) {
	let e = [];
	for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
	return e;
}
const Nf = ih(
		"88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"
	),
	_f = ih(
		"4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"
	),
	Qs = Object.create(null),
	ze = [];
for (let n of ["()", "[]", "{}"]) {
	let e = n.charCodeAt(0),
		t = n.charCodeAt(1);
	(Qs[e] = t), (Qs[t] = -e);
}
function Vf(n) {
	return n <= 247
		? Nf[n]
		: 1424 <= n && n <= 1524
		? 2
		: 1536 <= n && n <= 1785
		? _f[n - 1536]
		: 1774 <= n && n <= 2220
		? 4
		: 8192 <= n && n <= 8203
		? 256
		: 64336 <= n && n <= 65023
		? 4
		: n == 8204
		? 256
		: 1;
}
const Ff = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Jt {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.level = i);
	}
	get dir() {
		return this.level % 2 ? If : Zs;
	}
	side(e, t) {
		return (this.dir == t) == e ? this.to : this.from;
	}
	static find(e, t, i, s) {
		let r = -1;
		for (let o = 0; o < e.length; o++) {
			let l = e[o];
			if (l.from <= t && l.to >= t) {
				if (l.level == i) return o;
				(r < 0 ||
					(s != 0 ? (s < 0 ? l.from < t : l.to > t) : e[r].level > l.level)) &&
					(r = o);
			}
		}
		if (r < 0) throw new RangeError("Index out of range");
		return r;
	}
}
const X = [];
function Hf(n, e) {
	let t = n.length,
		i = e == Zs ? 1 : 2,
		s = e == Zs ? 2 : 1;
	if (!n || (i == 1 && !Ff.test(n))) return nh(t);
	for (let o = 0, l = i, a = i; o < t; o++) {
		let h = Vf(n.charCodeAt(o));
		h == 512 ? (h = l) : h == 8 && a == 4 && (h = 16),
			(X[o] = h == 4 ? 2 : h),
			h & 7 && (a = h),
			(l = h);
	}
	for (let o = 0, l = i, a = i; o < t; o++) {
		let h = X[o];
		if (h == 128)
			o < t - 1 && l == X[o + 1] && l & 24 ? (h = X[o] = l) : (X[o] = 256);
		else if (h == 64) {
			let c = o + 1;
			for (; c < t && X[c] == 64; ) c++;
			let f = (o && l == 8) || (c < t && X[c] == 8) ? (a == 1 ? 1 : 8) : 256;
			for (let u = o; u < c; u++) X[u] = f;
			o = c - 1;
		} else h == 8 && a == 1 && (X[o] = 1);
		(l = h), h & 7 && (a = h);
	}
	for (let o = 0, l = 0, a = 0, h, c, f; o < t; o++)
		if ((c = Qs[(h = n.charCodeAt(o))]))
			if (c < 0) {
				for (let u = l - 3; u >= 0; u -= 3)
					if (ze[u + 1] == -c) {
						let d = ze[u + 2],
							p = d & 2 ? i : d & 4 ? (d & 1 ? s : i) : 0;
						p && (X[o] = X[ze[u]] = p), (l = u);
						break;
					}
			} else {
				if (ze.length == 189) break;
				(ze[l++] = o), (ze[l++] = h), (ze[l++] = a);
			}
		else if ((f = X[o]) == 2 || f == 1) {
			let u = f == i;
			a = u ? 0 : 1;
			for (let d = l - 3; d >= 0; d -= 3) {
				let p = ze[d + 2];
				if (p & 2) break;
				if (u) ze[d + 2] |= 2;
				else {
					if (p & 4) break;
					ze[d + 2] |= 4;
				}
			}
		}
	for (let o = 0; o < t; o++)
		if (X[o] == 256) {
			let l = o + 1;
			for (; l < t && X[l] == 256; ) l++;
			let a = (o ? X[o - 1] : i) == 1,
				h = (l < t ? X[l] : i) == 1,
				c = a == h ? (a ? 1 : 2) : i;
			for (let f = o; f < l; f++) X[f] = c;
			o = l - 1;
		}
	let r = [];
	if (i == 1)
		for (let o = 0; o < t; ) {
			let l = o,
				a = X[o++] != 1;
			for (; o < t && a == (X[o] != 1); ) o++;
			if (a)
				for (let h = o; h > l; ) {
					let c = h,
						f = X[--h] != 2;
					for (; h > l && f == (X[h - 1] != 2); ) h--;
					r.push(new Jt(h, c, f ? 2 : 1));
				}
			else r.push(new Jt(l, o, 0));
		}
	else
		for (let o = 0; o < t; ) {
			let l = o,
				a = X[o++] == 2;
			for (; o < t && a == (X[o] == 2); ) o++;
			r.push(new Jt(l, o, a ? 1 : 2));
		}
	return r;
}
function nh(n) {
	return [new Jt(0, n, 0)];
}
let sh = "";
function Wf(n, e, t, i, s) {
	var r;
	let o = i.head - n.from,
		l = -1;
	if (o == 0) {
		if (!s || !n.length) return null;
		e[0].level != t && ((o = e[0].side(!1, t)), (l = 0));
	} else if (o == n.length) {
		if (s) return null;
		let u = e[e.length - 1];
		u.level != t && ((o = u.side(!0, t)), (l = e.length - 1));
	}
	l < 0 &&
		(l = Jt.find(
			e,
			o,
			(r = i.bidiLevel) !== null && r !== void 0 ? r : -1,
			i.assoc
		));
	let a = e[l];
	o == a.side(s, t) && ((a = e[(l += s ? 1 : -1)]), (o = a.side(!s, t)));
	let h = s == (a.dir == t),
		c = Oe(n.text, o, h);
	if (((sh = n.text.slice(Math.min(o, c), Math.max(o, c))), c != a.side(s, t)))
		return k.cursor(c + n.from, h ? -1 : 1, a.level);
	let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
	return !f && a.level != t
		? k.cursor(s ? n.to : n.from, s ? -1 : 1, t)
		: f && f.level < a.level
		? k.cursor(f.side(!s, t) + n.from, s ? 1 : -1, f.level)
		: k.cursor(c + n.from, s ? -1 : 1, a.level);
}
const ft = "￿";
class rh {
	constructor(e, t) {
		(this.points = e),
			(this.text = ""),
			(this.lineSeparator = t.facet(N.lineSeparator));
	}
	append(e) {
		this.text += e;
	}
	lineBreak() {
		this.text += ft;
	}
	readRange(e, t) {
		if (!e) return this;
		let i = e.parentNode;
		for (let s = e; ; ) {
			this.findPointBefore(i, s), this.readNode(s);
			let r = s.nextSibling;
			if (r == t) break;
			let o = K.get(s),
				l = K.get(r);
			(o && l
				? o.breakAfter
				: (o ? o.breakAfter : So(s)) ||
				  (So(r) && (s.nodeName != "BR" || s.cmIgnore))) && this.lineBreak(),
				(s = r);
		}
		return this.findPointBefore(i, t), this;
	}
	readTextNode(e) {
		let t = e.nodeValue;
		for (let i of this.points)
			i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
		for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
			let r = -1,
				o = 1,
				l;
			if (
				(this.lineSeparator
					? ((r = t.indexOf(this.lineSeparator, i)),
					  (o = this.lineSeparator.length))
					: (l = s.exec(t)) && ((r = l.index), (o = l[0].length)),
				this.append(t.slice(i, r < 0 ? t.length : r)),
				r < 0)
			)
				break;
			if ((this.lineBreak(), o > 1))
				for (let a of this.points)
					a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
			i = r + o;
		}
	}
	readNode(e) {
		if (e.cmIgnore) return;
		let t = K.get(e),
			i = t && t.overrideDOMText;
		if (i != null) {
			this.findPointInside(e, i.length);
			for (let s = i.iter(); !s.next().done; )
				s.lineBreak ? this.lineBreak() : this.append(s.value);
		} else
			e.nodeType == 3
				? this.readTextNode(e)
				: e.nodeName == "BR"
				? e.nextSibling && this.lineBreak()
				: e.nodeType == 1 && this.readRange(e.firstChild, null);
	}
	findPointBefore(e, t) {
		for (let i of this.points)
			i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
	}
	findPointInside(e, t) {
		for (let i of this.points)
			(e.nodeType == 3 ? i.node == e : e.contains(i.node)) &&
				(i.pos = this.text.length + Math.min(t, i.offset));
	}
}
function So(n) {
	return (
		n.nodeType == 1 &&
		/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName)
	);
}
class Co {
	constructor(e, t) {
		(this.node = e), (this.offset = t), (this.pos = -1);
	}
}
class Ao extends K {
	constructor(e) {
		super(),
			(this.view = e),
			(this.compositionDeco = E.none),
			(this.decorations = []),
			(this.dynamicDecorationMap = []),
			(this.minWidth = 0),
			(this.minWidthFrom = 0),
			(this.minWidthTo = 0),
			(this.impreciseAnchor = null),
			(this.impreciseHead = null),
			(this.forceSelection = !1),
			(this.lastUpdate = Date.now()),
			this.setDOM(e.contentDOM),
			(this.children = [new ke()]),
			this.children[0].setParent(this),
			this.updateDeco(),
			this.updateInner([new Qe(0, 0, 0, e.state.doc.length)], 0);
	}
	get editorView() {
		return this.view;
	}
	get length() {
		return this.view.state.doc.length;
	}
	update(e) {
		let t = e.changedRanges;
		this.minWidth > 0 &&
			t.length &&
			(t.every(
				({ fromA: o, toA: l }) => l < this.minWidthFrom || o > this.minWidthTo
			)
				? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
				  (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
				: (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
			this.view.inputState.composing < 0
				? (this.compositionDeco = E.none)
				: (e.transactions.length || this.dirty) &&
				  (this.compositionDeco = qf(this.view, e.changes)),
			(A.ie || A.chrome) &&
				!this.compositionDeco.size &&
				e &&
				e.state.doc.lines != e.startState.doc.lines &&
				(this.forceSelection = !0);
		let i = this.decorations,
			s = this.updateDeco(),
			r = $f(i, s, e.changes);
		return (
			(t = Qe.extendWithRanges(t, r)),
			this.dirty == 0 && t.length == 0
				? !1
				: (this.updateInner(t, e.startState.doc.length),
				  e.transactions.length && (this.lastUpdate = Date.now()),
				  !0)
		);
	}
	updateInner(e, t) {
		(this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t);
		let { observer: i } = this.view;
		i.ignore(() => {
			(this.dom.style.height = this.view.viewState.contentHeight + "px"),
				(this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "");
			let r =
				A.chrome || A.ios
					? { node: i.selectionRange.focusNode, written: !1 }
					: void 0;
			this.sync(r),
				(this.dirty = 0),
				r &&
					(r.written || i.selectionRange.focusNode != r.node) &&
					(this.forceSelection = !0),
				(this.dom.style.height = "");
		});
		let s = [];
		if (
			this.view.viewport.from ||
			this.view.viewport.to < this.view.state.doc.length
		)
			for (let r of this.children)
				r instanceof Ot && r.widget instanceof Mo && s.push(r.dom);
		i.updateGaps(s);
	}
	updateChildren(e, t) {
		let i = this.childCursor(t);
		for (let s = e.length - 1; ; s--) {
			let r = s >= 0 ? e[s] : null;
			if (!r) break;
			let { fromA: o, toA: l, fromB: a, toB: h } = r,
				{
					content: c,
					breakAtStart: f,
					openStart: u,
					openEnd: d
				} = Br.build(
					this.view.state.doc,
					a,
					h,
					this.decorations,
					this.dynamicDecorationMap
				),
				{ i: p, off: g } = i.findPos(l, 1),
				{ i: y, off: b } = i.findPos(o, -1);
			Ia(this, y, b, p, g, c, f, u, d);
		}
	}
	updateSelection(e = !1, t = !1) {
		if (
			((e || !this.view.observer.selectionRange.focusNode) &&
				this.view.observer.readSelectionRange(),
			!(t || this.mayControlSelection()))
		)
			return;
		let i = this.forceSelection;
		this.forceSelection = !1;
		let s = this.view.state.selection.main,
			r = this.domAtPos(s.anchor),
			o = s.empty ? r : this.domAtPos(s.head);
		if (A.gecko && s.empty && zf(r)) {
			let a = document.createTextNode("");
			this.view.observer.ignore(() =>
				r.node.insertBefore(a, r.node.childNodes[r.offset] || null)
			),
				(r = o = new ye(a, 0)),
				(i = !0);
		}
		let l = this.view.observer.selectionRange;
		(i ||
			!l.focusNode ||
			!Sn(r.node, r.offset, l.anchorNode, l.anchorOffset) ||
			!Sn(o.node, o.offset, l.focusNode, l.focusOffset)) &&
			(this.view.observer.ignore(() => {
				A.android &&
					A.chrome &&
					this.dom.contains(l.focusNode) &&
					Gf(l.focusNode, this.dom) &&
					(this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
				let a = vn(this.view.root);
				if (a)
					if (s.empty) {
						if (A.gecko) {
							let h = Kf(r.node, r.offset);
							if (h && h != 3) {
								let c = lh(r.node, r.offset, h == 1 ? 1 : -1);
								c && (r = new ye(c, h == 1 ? 0 : c.nodeValue.length));
							}
						}
						a.collapse(r.node, r.offset),
							s.bidiLevel != null &&
								l.cursorBidiLevel != null &&
								(l.cursorBidiLevel = s.bidiLevel);
					} else if (a.extend) {
						a.collapse(r.node, r.offset);
						try {
							a.extend(o.node, o.offset);
						} catch {}
					} else {
						let h = document.createRange();
						s.anchor > s.head && ([r, o] = [o, r]),
							h.setEnd(o.node, o.offset),
							h.setStart(r.node, r.offset),
							a.removeAllRanges(),
							a.addRange(h);
					}
			}),
			this.view.observer.setSelectionRange(r, o)),
			(this.impreciseAnchor = r.precise
				? null
				: new ye(l.anchorNode, l.anchorOffset)),
			(this.impreciseHead = o.precise
				? null
				: new ye(l.focusNode, l.focusOffset));
	}
	enforceCursorAssoc() {
		if (this.compositionDeco.size) return;
		let { view: e } = this,
			t = e.state.selection.main,
			i = vn(e.root),
			{ anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
		if (!i || !t.empty || !t.assoc || !i.modify) return;
		let o = ke.find(this, t.head);
		if (!o) return;
		let l = o.posAtStart;
		if (t.head == l || t.head == l + o.length) return;
		let a = this.coordsAt(t.head, -1),
			h = this.coordsAt(t.head, 1);
		if (!a || !h || a.bottom > h.top) return;
		let c = this.domAtPos(t.head + t.assoc);
		i.collapse(c.node, c.offset),
			i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"),
			e.observer.readSelectionRange();
		let f = e.observer.selectionRange;
		e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from &&
			i.collapse(s, r);
	}
	mayControlSelection() {
		let e = this.view.root.activeElement;
		return (
			e == this.dom ||
			(dn(this.dom, this.view.observer.selectionRange) &&
				!(e && this.dom.contains(e)))
		);
	}
	nearest(e) {
		for (let t = e; t; ) {
			let i = K.get(t);
			if (i && i.rootView == this) return i;
			t = t.parentNode;
		}
		return null;
	}
	posFromDOM(e, t) {
		let i = this.nearest(e);
		if (!i)
			throw new RangeError(
				"Trying to find position for a DOM position outside of the document"
			);
		return i.localPosFromDOM(e, t) + i.posAtStart;
	}
	domAtPos(e) {
		let { i: t, off: i } = this.childCursor().findPos(e, -1);
		for (; t < this.children.length - 1; ) {
			let s = this.children[t];
			if (i < s.length || s instanceof ke) break;
			t++, (i = 0);
		}
		return this.children[t].domAtPos(i);
	}
	coordsAt(e, t) {
		for (let i = this.length, s = this.children.length - 1; ; s--) {
			let r = this.children[s],
				o = i - r.breakAfter - r.length;
			if (
				e > o ||
				(e == o &&
					r.type != W.WidgetBefore &&
					r.type != W.WidgetAfter &&
					(!s ||
						t == 2 ||
						this.children[s - 1].breakAfter ||
						(this.children[s - 1].type == W.WidgetBefore && t > -2)))
			)
				return r.coordsAt(e - o, t);
			i = o;
		}
	}
	measureVisibleLineHeights(e) {
		let t = [],
			{ from: i, to: s } = e,
			r = this.view.contentDOM.clientWidth,
			o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
			l = -1,
			a = this.view.textDirection == Z.LTR;
		for (let h = 0, c = 0; c < this.children.length; c++) {
			let f = this.children[c],
				u = h + f.length;
			if (u > s) break;
			if (h >= i) {
				let d = f.dom.getBoundingClientRect();
				if ((t.push(d.height), o)) {
					let p = f.dom.lastChild,
						g = p ? Bi(p) : [];
					if (g.length) {
						let y = g[g.length - 1],
							b = a ? y.right - d.left : d.right - y.left;
						b > l &&
							((l = b),
							(this.minWidth = r),
							(this.minWidthFrom = h),
							(this.minWidthTo = u));
					}
				}
			}
			h = u + f.breakAfter;
		}
		return t;
	}
	textDirectionAt(e) {
		let { i: t } = this.childPos(e, 1);
		return getComputedStyle(this.children[t].dom).direction == "rtl"
			? Z.RTL
			: Z.LTR;
	}
	measureTextSize() {
		for (let s of this.children)
			if (s instanceof ke) {
				let r = s.measureTextSize();
				if (r) return r;
			}
		let e = document.createElement("div"),
			t,
			i;
		return (
			(e.className = "cm-line"),
			(e.style.width = "99999px"),
			(e.textContent = "abc def ghi jkl mno pqr stu"),
			this.view.observer.ignore(() => {
				this.dom.appendChild(e);
				let s = Bi(e.firstChild)[0];
				(t = e.getBoundingClientRect().height),
					(i = s ? s.width / 27 : 7),
					e.remove();
			}),
			{ lineHeight: t, charWidth: i }
		);
	}
	childCursor(e = this.length) {
		let t = this.children.length;
		return t && (e -= this.children[--t].length), new La(this.children, e, t);
	}
	computeBlockGapDeco() {
		let e = [],
			t = this.view.viewState;
		for (let i = 0, s = 0; ; s++) {
			let r = s == t.viewports.length ? null : t.viewports[s],
				o = r ? r.from - 1 : this.length;
			if (o > i) {
				let l = t.lineBlockAt(o).bottom - t.lineBlockAt(i).top;
				e.push(
					E.replace({
						widget: new Mo(l),
						block: !0,
						inclusive: !0,
						isBlockGap: !0
					}).range(i, o)
				);
			}
			if (!r) break;
			i = r.to + 1;
		}
		return E.set(e);
	}
	updateDeco() {
		let e = this.view.state
			.facet(Ei)
			.map((t, i) =>
				(this.dynamicDecorationMap[i] = typeof t == "function")
					? t(this.view)
					: t
			);
		for (let t = e.length; t < e.length + 3; t++)
			this.dynamicDecorationMap[t] = !1;
		return (this.decorations = [
			...e,
			this.compositionDeco,
			this.computeBlockGapDeco(),
			this.view.viewState.lineGapDeco
		]);
	}
	scrollIntoView(e) {
		let { range: t } = e,
			i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
			s;
		if (!i) return;
		!t.empty &&
			(s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
			(i = {
				left: Math.min(i.left, s.left),
				top: Math.min(i.top, s.top),
				right: Math.max(i.right, s.right),
				bottom: Math.max(i.bottom, s.bottom)
			});
		let r = 0,
			o = 0,
			l = 0,
			a = 0;
		for (let c of this.view.state.facet(th).map((f) => f(this.view)))
			if (c) {
				let { left: f, right: u, top: d, bottom: p } = c;
				f != null && (r = Math.max(r, f)),
					u != null && (o = Math.max(o, u)),
					d != null && (l = Math.max(l, d)),
					p != null && (a = Math.max(a, p));
			}
		let h = {
			left: i.left - r,
			top: i.top - l,
			right: i.right + o,
			bottom: i.bottom + a
		};
		Mf(
			this.view.scrollDOM,
			h,
			t.head < t.anchor ? -1 : 1,
			e.x,
			e.y,
			e.xMargin,
			e.yMargin,
			this.view.textDirection == Z.LTR
		);
	}
}
function zf(n) {
	return (
		n.node.nodeType == 1 &&
		n.node.firstChild &&
		(n.offset == 0 ||
			n.node.childNodes[n.offset - 1].contentEditable == "false") &&
		(n.offset == n.node.childNodes.length ||
			n.node.childNodes[n.offset].contentEditable == "false")
	);
}
class Mo extends tt {
	constructor(e) {
		super(), (this.height = e);
	}
	toDOM() {
		let e = document.createElement("div");
		return this.updateDOM(e), e;
	}
	eq(e) {
		return e.height == this.height;
	}
	updateDOM(e) {
		return (e.style.height = this.height + "px"), !0;
	}
	get estimatedHeight() {
		return this.height;
	}
}
function oh(n) {
	let e = n.observer.selectionRange,
		t = e.focusNode && lh(e.focusNode, e.focusOffset, 0);
	if (!t) return null;
	let i = n.docView.nearest(t);
	if (!i) return null;
	if (i instanceof ke) {
		let s = t;
		for (; s.parentNode != i.dom; ) s = s.parentNode;
		let r = s.previousSibling;
		for (; r && !K.get(r); ) r = r.previousSibling;
		let o = r ? K.get(r).posAtEnd : i.posAtStart;
		return { from: o, to: o, node: s, text: t };
	} else {
		for (;;) {
			let { parent: r } = i;
			if (!r) return null;
			if (r instanceof ke) break;
			i = r;
		}
		let s = i.posAtStart;
		return { from: s, to: s + i.length, node: i.dom, text: t };
	}
}
function qf(n, e) {
	let t = oh(n);
	if (!t) return E.none;
	let { from: i, to: s, node: r, text: o } = t,
		l = e.mapPos(i, 1),
		a = Math.max(l, e.mapPos(s, -1)),
		{ state: h } = n,
		c =
			r.nodeType == 3
				? r.nodeValue
				: new rh([], h).readRange(r.firstChild, null).text;
	if (a - l < c.length)
		if (h.doc.sliceString(l, Math.min(h.doc.length, l + c.length), ft) == c)
			a = l + c.length;
		else if (h.doc.sliceString(Math.max(0, a - c.length), a, ft) == c)
			l = a - c.length;
		else return E.none;
	else if (h.doc.sliceString(l, a, ft) != c) return E.none;
	let f = K.get(r);
	return (
		f instanceof Fa ? (f = f.widget.topView) : f && (f.parent = null),
		E.set(E.replace({ widget: new jf(r, o, f), inclusive: !0 }).range(l, a))
	);
}
class jf extends tt {
	constructor(e, t, i) {
		super(), (this.top = e), (this.text = t), (this.topView = i);
	}
	eq(e) {
		return this.top == e.top && this.text == e.text;
	}
	toDOM() {
		return this.top;
	}
	ignoreEvent() {
		return !1;
	}
	get customView() {
		return Fa;
	}
}
function lh(n, e, t) {
	for (;;) {
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && e > 0 && t <= 0)
			(n = n.childNodes[e - 1]), (e = Pi(n));
		else if (n.nodeType == 1 && e < n.childNodes.length && t >= 0)
			(n = n.childNodes[e]), (e = 0);
		else return null;
	}
}
function Kf(n, e) {
	return n.nodeType != 1
		? 0
		: (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) |
				(e < n.childNodes.length && n.childNodes[e].contentEditable == "false"
					? 2
					: 0);
}
class Uf {
	constructor() {
		this.changes = [];
	}
	compareRange(e, t) {
		Ys(e, t, this.changes);
	}
	comparePoint(e, t) {
		Ys(e, t, this.changes);
	}
}
function $f(n, e, t) {
	let i = new Uf();
	return F.compare(n, e, t, i), i.changes;
}
function Gf(n, e) {
	for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
		if (t.nodeType == 1 && t.contentEditable == "false") return !0;
	return !1;
}
function Jf(n, e, t = 1) {
	let i = n.charCategorizer(e),
		s = n.doc.lineAt(e),
		r = e - s.from;
	if (s.length == 0) return k.cursor(e);
	r == 0 ? (t = 1) : r == s.length && (t = -1);
	let o = r,
		l = r;
	t < 0 ? (o = Oe(s.text, r, !1)) : (l = Oe(s.text, r));
	let a = i(s.text.slice(o, l));
	for (; o > 0; ) {
		let h = Oe(s.text, o, !1);
		if (i(s.text.slice(h, o)) != a) break;
		o = h;
	}
	for (; l < s.length; ) {
		let h = Oe(s.text, l);
		if (i(s.text.slice(l, h)) != a) break;
		l = h;
	}
	return k.range(o + s.from, l + s.from);
}
function Yf(n, e) {
	return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function Xf(n, e) {
	return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function ss(n, e) {
	return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Do(n, e) {
	return e < n.top
		? { top: e, left: n.left, right: n.right, bottom: n.bottom }
		: n;
}
function To(n, e) {
	return e > n.bottom
		? { top: n.top, left: n.left, right: n.right, bottom: e }
		: n;
}
function er(n, e, t) {
	let i,
		s,
		r,
		o,
		l = !1,
		a,
		h,
		c,
		f;
	for (let p = n.firstChild; p; p = p.nextSibling) {
		let g = Bi(p);
		for (let y = 0; y < g.length; y++) {
			let b = g[y];
			s && ss(s, b) && (b = Do(To(b, s.bottom), s.top));
			let w = Yf(e, b),
				v = Xf(t, b);
			if (w == 0 && v == 0) return p.nodeType == 3 ? Oo(p, e, t) : er(p, e, t);
			(!i || o > v || (o == v && r > w)) &&
				((i = p),
				(s = b),
				(r = w),
				(o = v),
				(l = !w || (w > 0 ? y < g.length - 1 : y > 0))),
				w == 0
					? t > b.bottom && (!c || c.bottom < b.bottom)
						? ((a = p), (c = b))
						: t < b.top && (!f || f.top > b.top) && ((h = p), (f = b))
					: c && ss(c, b)
					? (c = To(c, b.bottom))
					: f && ss(f, b) && (f = Do(f, b.top));
		}
	}
	if (
		(c && c.bottom >= t
			? ((i = a), (s = c))
			: f && f.top <= t && ((i = h), (s = f)),
		!i)
	)
		return { node: n, offset: 0 };
	let u = Math.max(s.left, Math.min(s.right, e));
	if (i.nodeType == 3) return Oo(i, u, t);
	if (l && i.contentEditable != "false") return er(i, u, t);
	let d =
		Array.prototype.indexOf.call(n.childNodes, i) +
		(e >= (s.left + s.right) / 2 ? 1 : 0);
	return { node: n, offset: d };
}
function Oo(n, e, t) {
	let i = n.nodeValue.length,
		s = -1,
		r = 1e9,
		o = 0;
	for (let l = 0; l < i; l++) {
		let a = Zt(n, l, l + 1).getClientRects();
		for (let h = 0; h < a.length; h++) {
			let c = a[h];
			if (c.top == c.bottom) continue;
			o || (o = e - c.left);
			let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
			if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
				let u = e >= (c.left + c.right) / 2,
					d = u;
				if (
					((A.chrome || A.gecko) &&
						Zt(n, l).getBoundingClientRect().left == c.right &&
						(d = !u),
					f <= 0)
				)
					return { node: n, offset: l + (d ? 1 : 0) };
				(s = l + (d ? 1 : 0)), (r = f);
			}
		}
	}
	return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 };
}
function ah(n, { x: e, y: t }, i, s = -1) {
	var r;
	let o = n.contentDOM.getBoundingClientRect(),
		l = o.top + n.viewState.paddingTop,
		a,
		{ docHeight: h } = n.viewState,
		c = t - l;
	if (c < 0) return 0;
	if (c > h) return n.state.doc.length;
	for (
		let b = n.defaultLineHeight / 2, w = !1;
		(a = n.elementAtHeight(c)), a.type != W.Text;

	)
		for (; (c = s > 0 ? a.bottom + b : a.top - b), !(c >= 0 && c <= h); ) {
			if (w) return i ? null : 0;
			(w = !0), (s = -s);
		}
	t = l + c;
	let f = a.from;
	if (f < n.viewport.from)
		return n.viewport.from == 0 ? 0 : i ? null : Bo(n, o, a, e, t);
	if (f > n.viewport.to)
		return n.viewport.to == n.state.doc.length
			? n.state.doc.length
			: i
			? null
			: Bo(n, o, a, e, t);
	let u = n.dom.ownerDocument,
		d = n.root.elementFromPoint ? n.root : u,
		p = d.elementFromPoint(e, t);
	p && !n.contentDOM.contains(p) && (p = null),
		p ||
			((e = Math.max(o.left + 1, Math.min(o.right - 1, e))),
			(p = d.elementFromPoint(e, t)),
			p && !n.contentDOM.contains(p) && (p = null));
	let g,
		y = -1;
	if (
		p &&
		((r = n.docView.nearest(p)) === null || r === void 0
			? void 0
			: r.isEditable) != !1
	) {
		if (u.caretPositionFromPoint) {
			let b = u.caretPositionFromPoint(e, t);
			b && ({ offsetNode: g, offset: y } = b);
		} else if (u.caretRangeFromPoint) {
			let b = u.caretRangeFromPoint(e, t);
			b &&
				(({ startContainer: g, startOffset: y } = b),
				(!n.contentDOM.contains(g) ||
					(A.safari && Zf(g, y, e)) ||
					(A.chrome && Qf(g, y, e))) &&
					(g = void 0));
		}
	}
	if (!g || !n.docView.dom.contains(g)) {
		let b = ke.find(n.docView, f);
		if (!b) return c > a.top + a.height / 2 ? a.to : a.from;
		({ node: g, offset: y } = er(b.dom, e, t));
	}
	return n.docView.posFromDOM(g, y);
}
function Bo(n, e, t, i, s) {
	let r = Math.round((i - e.left) * n.defaultCharacterWidth);
	if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
		let l = Math.floor((s - t.top) / n.defaultLineHeight);
		r += l * n.viewState.heightOracle.lineLength;
	}
	let o = n.state.sliceDoc(t.from, t.to);
	return t.from + Hs(o, r, n.state.tabSize);
}
function Zf(n, e, t) {
	let i;
	if (n.nodeType != 3 || e != (i = n.nodeValue.length)) return !1;
	for (let s = n.nextSibling; s; s = s.nextSibling)
		if (s.nodeType != 1 || s.nodeName != "BR") return !1;
	return Zt(n, i - 1, i).getBoundingClientRect().left > t;
}
function Qf(n, e, t) {
	if (e != 0) return !1;
	for (let s = n; ; ) {
		let r = s.parentNode;
		if (!r || r.nodeType != 1 || r.firstChild != s) return !1;
		if (r.classList.contains("cm-line")) break;
		s = r;
	}
	let i =
		n.nodeType == 1
			? n.getBoundingClientRect()
			: Zt(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
	return t - i.left > 5;
}
function eu(n, e, t, i) {
	let s = n.state.doc.lineAt(e.head),
		r =
			!i || !n.lineWrapping
				? null
				: n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
	if (r) {
		let a = n.dom.getBoundingClientRect(),
			h = n.textDirectionAt(s.from),
			c = n.posAtCoords({
				x: t == (h == Z.LTR) ? a.right - 1 : a.left + 1,
				y: (r.top + r.bottom) / 2
			});
		if (c != null) return k.cursor(c, t ? -1 : 1);
	}
	let o = ke.find(n.docView, e.head),
		l = o ? (t ? o.posAtEnd : o.posAtStart) : t ? s.to : s.from;
	return k.cursor(l, t ? -1 : 1);
}
function Po(n, e, t, i) {
	let s = n.state.doc.lineAt(e.head),
		r = n.bidiSpans(s),
		o = n.textDirectionAt(s.from);
	for (let l = e, a = null; ; ) {
		let h = Wf(s, r, o, l, t),
			c = sh;
		if (!h) {
			if (s.number == (t ? n.state.doc.lines : 1)) return l;
			(c = `
`),
				(s = n.state.doc.line(s.number + (t ? 1 : -1))),
				(r = n.bidiSpans(s)),
				(h = k.cursor(t ? s.from : s.to));
		}
		if (a) {
			if (!a(c)) return l;
		} else {
			if (!i) return h;
			a = i(c);
		}
		l = h;
	}
}
function tu(n, e, t) {
	let i = n.state.charCategorizer(e),
		s = i(t);
	return (r) => {
		let o = i(r);
		return s == Re.Space && (s = o), s == o;
	};
}
function iu(n, e, t, i) {
	let s = e.head,
		r = t ? 1 : -1;
	if (s == (t ? n.state.doc.length : 0)) return k.cursor(s, e.assoc);
	let o = e.goalColumn,
		l,
		a = n.contentDOM.getBoundingClientRect(),
		h = n.coordsAtPos(s),
		c = n.documentTop;
	if (h) o == null && (o = h.left - a.left), (l = r < 0 ? h.top : h.bottom);
	else {
		let d = n.viewState.lineBlockAt(s);
		o == null &&
			(o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))),
			(l = (r < 0 ? d.top : d.bottom) + c);
	}
	let f = a.left + o,
		u = i ?? n.defaultLineHeight >> 1;
	for (let d = 0; ; d += 10) {
		let p = l + (u + d) * r,
			g = ah(n, { x: f, y: p }, !1, r);
		if (p < a.top || p > a.bottom || (r < 0 ? g < s : g > s))
			return k.cursor(g, e.assoc, void 0, o);
	}
}
function rs(n, e, t) {
	let i = n.state.facet(eh).map((s) => s(n));
	for (;;) {
		let s = !1;
		for (let r of i)
			r.between(t.from - 1, t.from + 1, (o, l, a) => {
				t.from > o &&
					t.from < l &&
					((t = e.head > t.from ? k.cursor(o, 1) : k.cursor(l, -1)), (s = !0));
			});
		if (!s) return t;
	}
}
class nu {
	constructor(e) {
		(this.lastKeyCode = 0),
			(this.lastKeyTime = 0),
			(this.lastTouchTime = 0),
			(this.lastFocusTime = 0),
			(this.lastScrollTop = 0),
			(this.lastScrollLeft = 0),
			(this.chromeScrollHack = -1),
			(this.pendingIOSKey = void 0),
			(this.lastSelectionOrigin = null),
			(this.lastSelectionTime = 0),
			(this.lastEscPress = 0),
			(this.lastContextMenu = 0),
			(this.scrollHandlers = []),
			(this.registeredEvents = []),
			(this.customHandlers = []),
			(this.composing = -1),
			(this.compositionFirstChange = null),
			(this.compositionEndedAt = 0),
			(this.mouseSelection = null);
		for (let t in oe) {
			let i = oe[t];
			e.contentDOM.addEventListener(
				t,
				(s) => {
					!Eo(e, s) ||
						this.ignoreDuringComposition(s) ||
						(t == "keydown" && this.keydown(e, s)) ||
						(this.mustFlushObserver(s) && e.observer.forceFlush(),
						this.runCustomHandlers(t, e, s) ? s.preventDefault() : i(e, s));
				},
				tr[t]
			),
				this.registeredEvents.push(t);
		}
		A.chrome &&
			A.chrome_version == 102 &&
			e.scrollDOM.addEventListener(
				"wheel",
				() => {
					this.chromeScrollHack < 0
						? (e.contentDOM.style.pointerEvents = "none")
						: window.clearTimeout(this.chromeScrollHack),
						(this.chromeScrollHack = setTimeout(() => {
							(this.chromeScrollHack = -1),
								(e.contentDOM.style.pointerEvents = "");
						}, 100));
				},
				{ passive: !0 }
			),
			(this.notifiedFocused = e.hasFocus),
			A.safari && e.contentDOM.addEventListener("input", () => null);
	}
	setSelectionOrigin(e) {
		(this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
	}
	ensureHandlers(e, t) {
		var i;
		let s;
		this.customHandlers = [];
		for (let r of t)
			if (
				(s =
					(i = r.update(e).spec) === null || i === void 0
						? void 0
						: i.domEventHandlers)
			) {
				this.customHandlers.push({ plugin: r.value, handlers: s });
				for (let o in s)
					this.registeredEvents.indexOf(o) < 0 &&
						o != "scroll" &&
						(this.registeredEvents.push(o),
						e.contentDOM.addEventListener(o, (l) => {
							Eo(e, l) && this.runCustomHandlers(o, e, l) && l.preventDefault();
						}));
			}
	}
	runCustomHandlers(e, t, i) {
		for (let s of this.customHandlers) {
			let r = s.handlers[e];
			if (r)
				try {
					if (r.call(s.plugin, i, t) || i.defaultPrevented) return !0;
				} catch (o) {
					He(t.state, o);
				}
		}
		return !1;
	}
	runScrollHandlers(e, t) {
		(this.lastScrollTop = e.scrollDOM.scrollTop),
			(this.lastScrollLeft = e.scrollDOM.scrollLeft);
		for (let i of this.customHandlers) {
			let s = i.handlers.scroll;
			if (s)
				try {
					s.call(i.plugin, t, e);
				} catch (r) {
					He(e.state, r);
				}
		}
	}
	keydown(e, t) {
		if (
			((this.lastKeyCode = t.keyCode),
			(this.lastKeyTime = Date.now()),
			t.keyCode == 9 && Date.now() < this.lastEscPress + 2e3)
		)
			return !0;
		if (
			A.android &&
			A.chrome &&
			!t.synthetic &&
			(t.keyCode == 13 || t.keyCode == 8)
		)
			return e.observer.delayAndroidKey(t.key, t.keyCode), !0;
		let i;
		return A.ios &&
			!t.synthetic &&
			!t.altKey &&
			!t.metaKey &&
			(((i = hh.find((s) => s.keyCode == t.keyCode)) && !t.ctrlKey) ||
				(su.indexOf(t.key) > -1 && t.ctrlKey && !t.shiftKey))
			? ((this.pendingIOSKey = i || t),
			  setTimeout(() => this.flushIOSKey(e), 250),
			  !0)
			: !1;
	}
	flushIOSKey(e) {
		let t = this.pendingIOSKey;
		return t
			? ((this.pendingIOSKey = void 0), Gt(e.contentDOM, t.key, t.keyCode))
			: !1;
	}
	ignoreDuringComposition(e) {
		return /^key/.test(e.type)
			? this.composing > 0
				? !0
				: A.safari && !A.ios && Date.now() - this.compositionEndedAt < 100
				? ((this.compositionEndedAt = 0), !0)
				: !1
			: !1;
	}
	mustFlushObserver(e) {
		return e.type == "keydown" && e.keyCode != 229;
	}
	startMouseSelection(e) {
		this.mouseSelection && this.mouseSelection.destroy(),
			(this.mouseSelection = e);
	}
	update(e) {
		this.mouseSelection && this.mouseSelection.update(e),
			e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
	}
	destroy() {
		this.mouseSelection && this.mouseSelection.destroy();
	}
}
const hh = [
		{ key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
		{ key: "Enter", keyCode: 13, inputType: "insertParagraph" },
		{ key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
	],
	su = "dthko",
	ch = [16, 17, 18, 20, 91, 92, 224, 225];
class ru {
	constructor(e, t, i, s) {
		(this.view = e),
			(this.style = i),
			(this.mustSelect = s),
			(this.lastEvent = t);
		let r = e.contentDOM.ownerDocument;
		r.addEventListener("mousemove", (this.move = this.move.bind(this))),
			r.addEventListener("mouseup", (this.up = this.up.bind(this))),
			(this.extend = t.shiftKey),
			(this.multiple = e.state.facet(N.allowMultipleSelections) && ou(e, t)),
			(this.dragMove = lu(e, t)),
			(this.dragging = au(e, t) && ph(t) == 1 ? null : !1),
			this.dragging === !1 && (t.preventDefault(), this.select(t));
	}
	move(e) {
		if (e.buttons == 0) return this.destroy();
		this.dragging === !1 && this.select((this.lastEvent = e));
	}
	up(e) {
		this.dragging == null && this.select(this.lastEvent),
			this.dragging || e.preventDefault(),
			this.destroy();
	}
	destroy() {
		let e = this.view.contentDOM.ownerDocument;
		e.removeEventListener("mousemove", this.move),
			e.removeEventListener("mouseup", this.up),
			(this.view.inputState.mouseSelection = null);
	}
	select(e) {
		let t = this.style.get(e, this.extend, this.multiple);
		(this.mustSelect ||
			!t.eq(this.view.state.selection) ||
			t.main.assoc != this.view.state.selection.main.assoc) &&
			this.view.dispatch({
				selection: t,
				userEvent: "select.pointer",
				scrollIntoView: !0
			}),
			(this.mustSelect = !1);
	}
	update(e) {
		e.docChanged &&
			this.dragging &&
			(this.dragging = this.dragging.map(e.changes)),
			this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
	}
}
function ou(n, e) {
	let t = n.state.facet(Ka);
	return t.length ? t[0](e) : A.mac ? e.metaKey : e.ctrlKey;
}
function lu(n, e) {
	let t = n.state.facet(Ua);
	return t.length ? t[0](e) : A.mac ? !e.altKey : !e.ctrlKey;
}
function au(n, e) {
	let { main: t } = n.state.selection;
	if (t.empty) return !1;
	let i = vn(n.root);
	if (!i || i.rangeCount == 0) return !0;
	let s = i.getRangeAt(0).getClientRects();
	for (let r = 0; r < s.length; r++) {
		let o = s[r];
		if (
			o.left <= e.clientX &&
			o.right >= e.clientX &&
			o.top <= e.clientY &&
			o.bottom >= e.clientY
		)
			return !0;
	}
	return !1;
}
function Eo(n, e) {
	if (!e.bubbles) return !0;
	if (e.defaultPrevented) return !1;
	for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
		if (!t || t.nodeType == 11 || ((i = K.get(t)) && i.ignoreEvent(e)))
			return !1;
	return !0;
}
const oe = Object.create(null),
	tr = Object.create(null),
	fh = (A.ie && A.ie_version < 15) || (A.ios && A.webkit_version < 604);
function hu(n) {
	let e = n.dom.parentNode;
	if (!e) return;
	let t = e.appendChild(document.createElement("textarea"));
	(t.style.cssText = "position: fixed; left: -10000px; top: 10px"),
		t.focus(),
		setTimeout(() => {
			n.focus(), t.remove(), uh(n, t.value);
		}, 50);
}
function uh(n, e) {
	let { state: t } = n,
		i,
		s = 1,
		r = t.toText(e),
		o = r.lines == t.selection.ranges.length;
	if (
		ir != null &&
		t.selection.ranges.every((a) => a.empty) &&
		ir == r.toString()
	) {
		let a = -1;
		i = t.changeByRange((h) => {
			let c = t.doc.lineAt(h.from);
			if (c.from == a) return { range: h };
			a = c.from;
			let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
			return {
				changes: { from: c.from, insert: f },
				range: k.cursor(h.from + f.length)
			};
		});
	} else
		o
			? (i = t.changeByRange((a) => {
					let h = r.line(s++);
					return {
						changes: { from: a.from, to: a.to, insert: h.text },
						range: k.cursor(a.from + h.length)
					};
			  }))
			: (i = t.replaceSelection(r));
	n.dispatch(i, { userEvent: "input.paste", scrollIntoView: !0 });
}
oe.keydown = (n, e) => {
	n.inputState.setSelectionOrigin("select"),
		e.keyCode == 27
			? (n.inputState.lastEscPress = Date.now())
			: ch.indexOf(e.keyCode) < 0 && (n.inputState.lastEscPress = 0);
};
oe.touchstart = (n, e) => {
	(n.inputState.lastTouchTime = Date.now()),
		n.inputState.setSelectionOrigin("select.pointer");
};
oe.touchmove = (n) => {
	n.inputState.setSelectionOrigin("select.pointer");
};
tr.touchstart = tr.touchmove = { passive: !0 };
oe.mousedown = (n, e) => {
	if ((n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3))
		return;
	let t = null;
	for (let i of n.state.facet($a)) if (((t = i(n, e)), t)) break;
	if ((!t && e.button == 0 && (t = uu(n, e)), t)) {
		let i = n.root.activeElement != n.contentDOM;
		i && n.observer.ignore(() => Ea(n.contentDOM)),
			n.inputState.startMouseSelection(new ru(n, e, t, i));
	}
};
function Ro(n, e, t, i) {
	if (i == 1) return k.cursor(e, t);
	if (i == 2) return Jf(n.state, e, t);
	{
		let s = ke.find(n.docView, e),
			r = n.state.doc.lineAt(s ? s.posAtEnd : e),
			o = s ? s.posAtStart : r.from,
			l = s ? s.posAtEnd : r.to;
		return l < n.state.doc.length && l == r.to && l++, k.range(o, l);
	}
}
let dh = (n, e) => n >= e.top && n <= e.bottom,
	Lo = (n, e, t) => dh(e, t) && n >= t.left && n <= t.right;
function cu(n, e, t, i) {
	let s = ke.find(n.docView, e);
	if (!s) return 1;
	let r = e - s.posAtStart;
	if (r == 0) return 1;
	if (r == s.length) return -1;
	let o = s.coordsAt(r, -1);
	if (o && Lo(t, i, o)) return -1;
	let l = s.coordsAt(r, 1);
	return l && Lo(t, i, l) ? 1 : o && dh(i, o) ? -1 : 1;
}
function Io(n, e) {
	let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
	return { pos: t, bias: cu(n, t, e.clientX, e.clientY) };
}
const fu = A.ie && A.ie_version <= 11;
let No = null,
	_o = 0,
	Vo = 0;
function ph(n) {
	if (!fu) return n.detail;
	let e = No,
		t = Vo;
	return (
		(No = n),
		(Vo = Date.now()),
		(_o =
			!e ||
			(t > Date.now() - 400 &&
				Math.abs(e.clientX - n.clientX) < 2 &&
				Math.abs(e.clientY - n.clientY) < 2)
				? (_o + 1) % 3
				: 1)
	);
}
function uu(n, e) {
	let t = Io(n, e),
		i = ph(e),
		s = n.state.selection,
		r = t,
		o = e;
	return {
		update(l) {
			l.docChanged &&
				((t.pos = l.changes.mapPos(t.pos)), (s = s.map(l.changes)), (o = null));
		},
		get(l, a, h) {
			let c;
			o && l.clientX == o.clientX && l.clientY == o.clientY
				? (c = r)
				: ((c = r = Io(n, l)), (o = l));
			let f = Ro(n, c.pos, c.bias, i);
			if (t.pos != c.pos && !a) {
				let u = Ro(n, t.pos, t.bias, i),
					d = Math.min(u.from, f.from),
					p = Math.max(u.to, f.to);
				f = d < f.from ? k.range(d, p) : k.range(p, d);
			}
			return a
				? s.replaceRange(s.main.extend(f.from, f.to))
				: h && s.ranges.length > 1 && s.ranges.some((u) => u.eq(f))
				? du(s, f)
				: h
				? s.addRange(f)
				: k.create([f]);
		}
	};
}
function du(n, e) {
	for (let t = 0; ; t++)
		if (n.ranges[t].eq(e))
			return k.create(
				n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)),
				n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0)
			);
}
oe.dragstart = (n, e) => {
	let {
			selection: { main: t }
		} = n.state,
		{ mouseSelection: i } = n.inputState;
	i && (i.dragging = t),
		e.dataTransfer &&
			(e.dataTransfer.setData("Text", n.state.sliceDoc(t.from, t.to)),
			(e.dataTransfer.effectAllowed = "copyMove"));
};
function Fo(n, e, t, i) {
	if (!t) return;
	let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
	e.preventDefault();
	let { mouseSelection: r } = n.inputState,
		o =
			i && r && r.dragging && r.dragMove
				? { from: r.dragging.from, to: r.dragging.to }
				: null,
		l = { from: s, insert: t },
		a = n.state.changes(o ? [o, l] : l);
	n.focus(),
		n.dispatch({
			changes: a,
			selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
			userEvent: o ? "move.drop" : "input.drop"
		});
}
oe.drop = (n, e) => {
	if (!e.dataTransfer) return;
	if (n.state.readOnly) return e.preventDefault();
	let t = e.dataTransfer.files;
	if (t && t.length) {
		e.preventDefault();
		let i = Array(t.length),
			s = 0,
			r = () => {
				++s == t.length &&
					Fo(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
			};
		for (let o = 0; o < t.length; o++) {
			let l = new FileReader();
			(l.onerror = r),
				(l.onload = () => {
					/[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
				}),
				l.readAsText(t[o]);
		}
	} else Fo(n, e, e.dataTransfer.getData("Text"), !0);
};
oe.paste = (n, e) => {
	if (n.state.readOnly) return e.preventDefault();
	n.observer.flush();
	let t = fh ? null : e.clipboardData;
	t ? (uh(n, t.getData("text/plain")), e.preventDefault()) : hu(n);
};
function pu(n, e) {
	let t = n.dom.parentNode;
	if (!t) return;
	let i = t.appendChild(document.createElement("textarea"));
	(i.style.cssText = "position: fixed; left: -10000px; top: 10px"),
		(i.value = e),
		i.focus(),
		(i.selectionEnd = e.length),
		(i.selectionStart = 0),
		setTimeout(() => {
			i.remove(), n.focus();
		}, 50);
}
function mu(n) {
	let e = [],
		t = [],
		i = !1;
	for (let s of n.selection.ranges)
		s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
	if (!e.length) {
		let s = -1;
		for (let { from: r } of n.selection.ranges) {
			let o = n.doc.lineAt(r);
			o.number > s &&
				(e.push(o.text),
				t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })),
				(s = o.number);
		}
		i = !0;
	}
	return { text: e.join(n.lineBreak), ranges: t, linewise: i };
}
let ir = null;
oe.copy = oe.cut = (n, e) => {
	let { text: t, ranges: i, linewise: s } = mu(n.state);
	if (!t && !s) return;
	ir = s ? t : null;
	let r = fh ? null : e.clipboardData;
	r
		? (e.preventDefault(), r.clearData(), r.setData("text/plain", t))
		: pu(n, t),
		e.type == "cut" &&
			!n.state.readOnly &&
			n.dispatch({ changes: i, scrollIntoView: !0, userEvent: "delete.cut" });
};
function mh(n) {
	setTimeout(() => {
		n.hasFocus != n.inputState.notifiedFocused && n.update([]);
	}, 10);
}
oe.focus = (n) => {
	(n.inputState.lastFocusTime = Date.now()),
		!n.scrollDOM.scrollTop &&
			(n.inputState.lastScrollTop || n.inputState.lastScrollLeft) &&
			((n.scrollDOM.scrollTop = n.inputState.lastScrollTop),
			(n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft)),
		mh(n);
};
oe.blur = (n) => {
	n.observer.clearSelectionRange(), mh(n);
};
oe.compositionstart = oe.compositionupdate = (n) => {
	n.inputState.compositionFirstChange == null &&
		(n.inputState.compositionFirstChange = !0),
		n.inputState.composing < 0 && (n.inputState.composing = 0);
};
oe.compositionend = (n) => {
	(n.inputState.composing = -1),
		(n.inputState.compositionEndedAt = Date.now()),
		(n.inputState.compositionFirstChange = null),
		A.chrome && A.android && n.observer.flushSoon(),
		setTimeout(() => {
			n.inputState.composing < 0 &&
				n.docView.compositionDeco.size &&
				n.update([]);
		}, 50);
};
oe.contextmenu = (n) => {
	n.inputState.lastContextMenu = Date.now();
};
oe.beforeinput = (n, e) => {
	var t;
	let i;
	if (
		A.chrome &&
		A.android &&
		(i = hh.find((s) => s.inputType == e.inputType)) &&
		(n.observer.delayAndroidKey(i.key, i.keyCode),
		i.key == "Backspace" || i.key == "Delete")
	) {
		let s =
			((t = window.visualViewport) === null || t === void 0
				? void 0
				: t.height) || 0;
		setTimeout(() => {
			var r;
			(((r = window.visualViewport) === null || r === void 0
				? void 0
				: r.height) || 0) >
				s + 10 &&
				n.hasFocus &&
				(n.contentDOM.blur(), n.focus());
		}, 100);
	}
};
const Ho = ["pre-wrap", "normal", "pre-line", "break-spaces"];
class gu {
	constructor() {
		(this.doc = _.empty),
			(this.lineWrapping = !1),
			(this.heightSamples = {}),
			(this.lineHeight = 14),
			(this.charWidth = 7),
			(this.lineLength = 30),
			(this.heightChanged = !1);
	}
	heightForGap(e, t) {
		let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
		return (
			this.lineWrapping &&
				(i += Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength)),
			this.lineHeight * i
		);
	}
	heightForLine(e) {
		return this.lineWrapping
			? (1 +
					Math.max(
						0,
						Math.ceil((e - this.lineLength) / (this.lineLength - 5))
					)) *
					this.lineHeight
			: this.lineHeight;
	}
	setDoc(e) {
		return (this.doc = e), this;
	}
	mustRefreshForWrapping(e) {
		return Ho.indexOf(e) > -1 != this.lineWrapping;
	}
	mustRefreshForHeights(e) {
		let t = !1;
		for (let i = 0; i < e.length; i++) {
			let s = e[i];
			s < 0
				? i++
				: this.heightSamples[Math.floor(s * 10)] ||
				  ((t = !0), (this.heightSamples[Math.floor(s * 10)] = !0));
		}
		return t;
	}
	refresh(e, t, i, s, r) {
		let o = Ho.indexOf(e) > -1,
			l =
				Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != o;
		if (
			((this.lineWrapping = o),
			(this.lineHeight = t),
			(this.charWidth = i),
			(this.lineLength = s),
			l)
		) {
			this.heightSamples = {};
			for (let a = 0; a < r.length; a++) {
				let h = r[a];
				h < 0 ? a++ : (this.heightSamples[Math.floor(h * 10)] = !0);
			}
		}
		return l;
	}
}
class yu {
	constructor(e, t) {
		(this.from = e), (this.heights = t), (this.index = 0);
	}
	get more() {
		return this.index < this.heights.length;
	}
}
class ut {
	constructor(e, t, i, s, r) {
		(this.from = e),
			(this.length = t),
			(this.top = i),
			(this.height = s),
			(this.type = r);
	}
	get to() {
		return this.from + this.length;
	}
	get bottom() {
		return this.top + this.height;
	}
	join(e) {
		let t = (Array.isArray(this.type) ? this.type : [this]).concat(
			Array.isArray(e.type) ? e.type : [e]
		);
		return new ut(
			this.from,
			this.length + e.length,
			this.top,
			this.height + e.height,
			t
		);
	}
}
var q = (function (n) {
	return (
		(n[(n.ByPos = 0)] = "ByPos"),
		(n[(n.ByHeight = 1)] = "ByHeight"),
		(n[(n.ByPosNoHeight = 2)] = "ByPosNoHeight"),
		n
	);
})(q || (q = {}));
const pn = 0.001;
class xe {
	constructor(e, t, i = 2) {
		(this.length = e), (this.height = t), (this.flags = i);
	}
	get outdated() {
		return (this.flags & 2) > 0;
	}
	set outdated(e) {
		this.flags = (e ? 2 : 0) | (this.flags & -3);
	}
	setHeight(e, t) {
		this.height != t &&
			(Math.abs(this.height - t) > pn && (e.heightChanged = !0),
			(this.height = t));
	}
	replace(e, t, i) {
		return xe.of(i);
	}
	decomposeLeft(e, t) {
		t.push(this);
	}
	decomposeRight(e, t) {
		t.push(this);
	}
	applyChanges(e, t, i, s) {
		let r = this;
		for (let o = s.length - 1; o >= 0; o--) {
			let { fromA: l, toA: a, fromB: h, toB: c } = s[o],
				f = r.lineAt(l, q.ByPosNoHeight, t, 0, 0),
				u = f.to >= a ? f : r.lineAt(a, q.ByPosNoHeight, t, 0, 0);
			for (c += u.to - a, a = u.to; o > 0 && f.from <= s[o - 1].toA; )
				(l = s[o - 1].fromA),
					(h = s[o - 1].fromB),
					o--,
					l < f.from && (f = r.lineAt(l, q.ByPosNoHeight, t, 0, 0));
			(h += f.from - l), (l = f.from);
			let d = Pr.build(i, e, h, c);
			r = r.replace(l, a, d);
		}
		return r.updateHeight(i, 0);
	}
	static empty() {
		return new De(0, 0);
	}
	static of(e) {
		if (e.length == 1) return e[0];
		let t = 0,
			i = e.length,
			s = 0,
			r = 0;
		for (;;)
			if (t == i)
				if (s > r * 2) {
					let l = e[t - 1];
					l.break
						? e.splice(--t, 1, l.left, null, l.right)
						: e.splice(--t, 1, l.left, l.right),
						(i += 1 + l.break),
						(s -= l.size);
				} else if (r > s * 2) {
					let l = e[i];
					l.break
						? e.splice(i, 1, l.left, null, l.right)
						: e.splice(i, 1, l.left, l.right),
						(i += 2 + l.break),
						(r -= l.size);
				} else break;
			else if (s < r) {
				let l = e[t++];
				l && (s += l.size);
			} else {
				let l = e[--i];
				l && (r += l.size);
			}
		let o = 0;
		return (
			e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), i++),
			new bu(xe.of(e.slice(0, t)), o, xe.of(e.slice(i)))
		);
	}
}
xe.prototype.size = 1;
class gh extends xe {
	constructor(e, t, i) {
		super(e, t), (this.type = i);
	}
	blockAt(e, t, i, s) {
		return new ut(s, this.length, i, this.height, this.type);
	}
	lineAt(e, t, i, s, r) {
		return this.blockAt(0, i, s, r);
	}
	forEachLine(e, t, i, s, r, o) {
		e <= r + this.length && t >= r && o(this.blockAt(0, i, s, r));
	}
	updateHeight(e, t = 0, i = !1, s) {
		return (
			s && s.from <= t && s.more && this.setHeight(e, s.heights[s.index++]),
			(this.outdated = !1),
			this
		);
	}
	toString() {
		return `block(${this.length})`;
	}
}
class De extends gh {
	constructor(e, t) {
		super(e, t, W.Text), (this.collapsed = 0), (this.widgetHeight = 0);
	}
	replace(e, t, i) {
		let s = i[0];
		return i.length == 1 &&
			(s instanceof De || (s instanceof ae && s.flags & 4)) &&
			Math.abs(this.length - s.length) < 10
			? (s instanceof ae
					? (s = new De(s.length, this.height))
					: (s.height = this.height),
			  this.outdated || (s.outdated = !1),
			  s)
			: xe.of(i);
	}
	updateHeight(e, t = 0, i = !1, s) {
		return (
			s && s.from <= t && s.more
				? this.setHeight(e, s.heights[s.index++])
				: (i || this.outdated) &&
				  this.setHeight(
						e,
						Math.max(
							this.widgetHeight,
							e.heightForLine(this.length - this.collapsed)
						)
				  ),
			(this.outdated = !1),
			this
		);
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${
			this.widgetHeight ? ":" + this.widgetHeight : ""
		})`;
	}
}
class ae extends xe {
	constructor(e) {
		super(e, 0);
	}
	lines(e, t) {
		let i = e.lineAt(t).number,
			s = e.lineAt(t + this.length).number;
		return { firstLine: i, lastLine: s, lineHeight: this.height / (s - i + 1) };
	}
	blockAt(e, t, i, s) {
		let { firstLine: r, lastLine: o, lineHeight: l } = this.lines(t, s),
			a = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))),
			{ from: h, length: c } = t.line(r + a);
		return new ut(h, c, i + l * a, l, W.Text);
	}
	lineAt(e, t, i, s, r) {
		if (t == q.ByHeight) return this.blockAt(e, i, s, r);
		if (t == q.ByPosNoHeight) {
			let { from: f, to: u } = i.lineAt(e);
			return new ut(f, u - f, 0, 0, W.Text);
		}
		let { firstLine: o, lineHeight: l } = this.lines(i, r),
			{ from: a, length: h, number: c } = i.lineAt(e);
		return new ut(a, h, s + l * (c - o), l, W.Text);
	}
	forEachLine(e, t, i, s, r, o) {
		let { firstLine: l, lineHeight: a } = this.lines(i, r);
		for (let h = Math.max(e, r), c = Math.min(r + this.length, t); h <= c; ) {
			let f = i.lineAt(h);
			h == e && (s += a * (f.number - l)),
				o(new ut(f.from, f.length, s, a, W.Text)),
				(s += a),
				(h = f.to + 1);
		}
	}
	replace(e, t, i) {
		let s = this.length - t;
		if (s > 0) {
			let r = i[i.length - 1];
			r instanceof ae
				? (i[i.length - 1] = new ae(r.length + s))
				: i.push(null, new ae(s - 1));
		}
		if (e > 0) {
			let r = i[0];
			r instanceof ae
				? (i[0] = new ae(e + r.length))
				: i.unshift(new ae(e - 1), null);
		}
		return xe.of(i);
	}
	decomposeLeft(e, t) {
		t.push(new ae(e - 1), null);
	}
	decomposeRight(e, t) {
		t.push(null, new ae(this.length - e - 1));
	}
	updateHeight(e, t = 0, i = !1, s) {
		let r = t + this.length;
		if (s && s.from <= t + this.length && s.more) {
			let o = [],
				l = Math.max(t, s.from),
				a = -1,
				h = e.heightChanged;
			for (
				s.from > t && o.push(new ae(s.from - t - 1).updateHeight(e, t));
				l <= r && s.more;

			) {
				let f = e.doc.lineAt(l).length;
				o.length && o.push(null);
				let u = s.heights[s.index++];
				a == -1 ? (a = u) : Math.abs(u - a) >= pn && (a = -2);
				let d = new De(f, u);
				(d.outdated = !1), o.push(d), (l += f + 1);
			}
			l <= r && o.push(null, new ae(r - l).updateHeight(e, l));
			let c = xe.of(o);
			return (
				(e.heightChanged =
					h ||
					a < 0 ||
					Math.abs(c.height - this.height) >= pn ||
					Math.abs(a - this.lines(e.doc, t).lineHeight) >= pn),
				c
			);
		} else
			(i || this.outdated) &&
				(this.setHeight(e, e.heightForGap(t, t + this.length)),
				(this.outdated = !1));
		return this;
	}
	toString() {
		return `gap(${this.length})`;
	}
}
class bu extends xe {
	constructor(e, t, i) {
		super(
			e.length + t + i.length,
			e.height + i.height,
			t | (e.outdated || i.outdated ? 2 : 0)
		),
			(this.left = e),
			(this.right = i),
			(this.size = e.size + i.size);
	}
	get break() {
		return this.flags & 1;
	}
	blockAt(e, t, i, s) {
		let r = i + this.left.height;
		return e < r
			? this.left.blockAt(e, t, i, s)
			: this.right.blockAt(e, t, r, s + this.left.length + this.break);
	}
	lineAt(e, t, i, s, r) {
		let o = s + this.left.height,
			l = r + this.left.length + this.break,
			a = t == q.ByHeight ? e < o : e < l,
			h = a
				? this.left.lineAt(e, t, i, s, r)
				: this.right.lineAt(e, t, i, o, l);
		if (this.break || (a ? h.to < l : h.from > l)) return h;
		let c = t == q.ByPosNoHeight ? q.ByPosNoHeight : q.ByPos;
		return a
			? h.join(this.right.lineAt(l, c, i, o, l))
			: this.left.lineAt(l, c, i, s, r).join(h);
	}
	forEachLine(e, t, i, s, r, o) {
		let l = s + this.left.height,
			a = r + this.left.length + this.break;
		if (this.break)
			e < a && this.left.forEachLine(e, t, i, s, r, o),
				t >= a && this.right.forEachLine(e, t, i, l, a, o);
		else {
			let h = this.lineAt(a, q.ByPos, i, s, r);
			e < h.from && this.left.forEachLine(e, h.from - 1, i, s, r, o),
				h.to >= e && h.from <= t && o(h),
				t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
		}
	}
	replace(e, t, i) {
		let s = this.left.length + this.break;
		if (t < s) return this.balanced(this.left.replace(e, t, i), this.right);
		if (e > this.left.length)
			return this.balanced(this.left, this.right.replace(e - s, t - s, i));
		let r = [];
		e > 0 && this.decomposeLeft(e, r);
		let o = r.length;
		for (let l of i) r.push(l);
		if ((e > 0 && Wo(r, o - 1), t < this.length)) {
			let l = r.length;
			this.decomposeRight(t, r), Wo(r, l);
		}
		return xe.of(r);
	}
	decomposeLeft(e, t) {
		let i = this.left.length;
		if (e <= i) return this.left.decomposeLeft(e, t);
		t.push(this.left),
			this.break && (i++, e >= i && t.push(null)),
			e > i && this.right.decomposeLeft(e - i, t);
	}
	decomposeRight(e, t) {
		let i = this.left.length,
			s = i + this.break;
		if (e >= s) return this.right.decomposeRight(e - s, t);
		e < i && this.left.decomposeRight(e, t),
			this.break && e < s && t.push(null),
			t.push(this.right);
	}
	balanced(e, t) {
		return e.size > 2 * t.size || t.size > 2 * e.size
			? xe.of(this.break ? [e, null, t] : [e, t])
			: ((this.left = e),
			  (this.right = t),
			  (this.height = e.height + t.height),
			  (this.outdated = e.outdated || t.outdated),
			  (this.size = e.size + t.size),
			  (this.length = e.length + this.break + t.length),
			  this);
	}
	updateHeight(e, t = 0, i = !1, s) {
		let { left: r, right: o } = this,
			l = t + r.length + this.break,
			a = null;
		return (
			s && s.from <= t + r.length && s.more
				? (a = r = r.updateHeight(e, t, i, s))
				: r.updateHeight(e, t, i),
			s && s.from <= l + o.length && s.more
				? (a = o = o.updateHeight(e, l, i, s))
				: o.updateHeight(e, l, i),
			a
				? this.balanced(r, o)
				: ((this.height = this.left.height + this.right.height),
				  (this.outdated = !1),
				  this)
		);
	}
	toString() {
		return this.left + (this.break ? " " : "-") + this.right;
	}
}
function Wo(n, e) {
	let t, i;
	n[e] == null &&
		(t = n[e - 1]) instanceof ae &&
		(i = n[e + 1]) instanceof ae &&
		n.splice(e - 1, 3, new ae(t.length + 1 + i.length));
}
const wu = 5;
class Pr {
	constructor(e, t) {
		(this.pos = e),
			(this.oracle = t),
			(this.nodes = []),
			(this.lineStart = -1),
			(this.lineEnd = -1),
			(this.covering = null),
			(this.writtenTo = e);
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
	}
	span(e, t) {
		if (this.lineStart > -1) {
			let i = Math.min(t, this.lineEnd),
				s = this.nodes[this.nodes.length - 1];
			s instanceof De
				? (s.length += i - this.pos)
				: (i > this.pos || !this.isCovered) &&
				  this.nodes.push(new De(i - this.pos, -1)),
				(this.writtenTo = i),
				t > i &&
					(this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
		}
		this.pos = t;
	}
	point(e, t, i) {
		if (e < t || i.heightRelevant) {
			let s = i.widget ? i.widget.estimatedHeight : 0;
			s < 0 && (s = this.oracle.lineHeight);
			let r = t - e;
			i.block
				? this.addBlock(new gh(r, s, i.type))
				: (r || s >= wu) && this.addLineDeco(s, r);
		} else t > e && this.span(e, t);
		this.lineEnd > -1 &&
			this.lineEnd < this.pos &&
			(this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
	}
	enterLine() {
		if (this.lineStart > -1) return;
		let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
		(this.lineStart = e),
			(this.lineEnd = t),
			this.writtenTo < e &&
				((this.writtenTo < e - 1 ||
					this.nodes[this.nodes.length - 1] == null) &&
					this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
				this.nodes.push(null)),
			this.pos > e && this.nodes.push(new De(this.pos - e, -1)),
			(this.writtenTo = this.pos);
	}
	blankContent(e, t) {
		let i = new ae(t - e);
		return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
	}
	ensureLine() {
		this.enterLine();
		let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
		if (e instanceof De) return e;
		let t = new De(0, -1);
		return this.nodes.push(t), t;
	}
	addBlock(e) {
		this.enterLine(),
			e.type == W.WidgetAfter && !this.isCovered && this.ensureLine(),
			this.nodes.push(e),
			(this.writtenTo = this.pos = this.pos + e.length),
			e.type != W.WidgetBefore && (this.covering = e);
	}
	addLineDeco(e, t) {
		let i = this.ensureLine();
		(i.length += t),
			(i.collapsed += t),
			(i.widgetHeight = Math.max(i.widgetHeight, e)),
			(this.writtenTo = this.pos = this.pos + t);
	}
	finish(e) {
		let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
		this.lineStart > -1 && !(t instanceof De) && !this.isCovered
			? this.nodes.push(new De(0, -1))
			: (this.writtenTo < this.pos || t == null) &&
			  this.nodes.push(this.blankContent(this.writtenTo, this.pos));
		let i = e;
		for (let s of this.nodes)
			s instanceof De && s.updateHeight(this.oracle, i),
				(i += s ? s.length : 1);
		return this.nodes;
	}
	static build(e, t, i, s) {
		let r = new Pr(i, e);
		return F.spans(t, i, s, r, 0), r.finish(i);
	}
}
function ku(n, e, t) {
	let i = new xu();
	return F.compare(n, e, t, i, 0), i.changes;
}
class xu {
	constructor() {
		this.changes = [];
	}
	compareRange() {}
	comparePoint(e, t, i, s) {
		(e < t || (i && i.heightRelevant) || (s && s.heightRelevant)) &&
			Ys(e, t, this.changes, 5);
	}
}
function vu(n, e) {
	let t = n.getBoundingClientRect(),
		i = n.ownerDocument,
		s = i.defaultView || window,
		r = Math.max(0, t.left),
		o = Math.min(s.innerWidth, t.right),
		l = Math.max(0, t.top),
		a = Math.min(s.innerHeight, t.bottom);
	for (let h = n.parentNode; h && h != i.body; )
		if (h.nodeType == 1) {
			let c = h,
				f = window.getComputedStyle(c);
			if (
				(c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) &&
				f.overflow != "visible"
			) {
				let u = c.getBoundingClientRect();
				(r = Math.max(r, u.left)),
					(o = Math.min(o, u.right)),
					(l = Math.max(l, u.top)),
					(a = h == n.parentNode ? u.bottom : Math.min(a, u.bottom));
			}
			h =
				f.position == "absolute" || f.position == "fixed"
					? c.offsetParent
					: c.parentNode;
		} else if (h.nodeType == 11) h = h.host;
		else break;
	return {
		left: r - t.left,
		right: Math.max(r, o) - t.left,
		top: l - (t.top + e),
		bottom: Math.max(l, a) - (t.top + e)
	};
}
function Su(n, e) {
	let t = n.getBoundingClientRect();
	return {
		left: 0,
		right: t.right - t.left,
		top: e,
		bottom: t.bottom - (t.top + e)
	};
}
class os {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.size = i);
	}
	static same(e, t) {
		if (e.length != t.length) return !1;
		for (let i = 0; i < e.length; i++) {
			let s = e[i],
				r = t[i];
			if (s.from != r.from || s.to != r.to || s.size != r.size) return !1;
		}
		return !0;
	}
	draw(e) {
		return E.replace({ widget: new Cu(this.size, e) }).range(
			this.from,
			this.to
		);
	}
}
class Cu extends tt {
	constructor(e, t) {
		super(), (this.size = e), (this.vertical = t);
	}
	eq(e) {
		return e.size == this.size && e.vertical == this.vertical;
	}
	toDOM() {
		let e = document.createElement("div");
		return (
			this.vertical
				? (e.style.height = this.size + "px")
				: ((e.style.width = this.size + "px"),
				  (e.style.height = "2px"),
				  (e.style.display = "inline-block")),
			e
		);
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1;
	}
}
class zo {
	constructor(e) {
		(this.state = e),
			(this.pixelViewport = {
				left: 0,
				right: window.innerWidth,
				top: 0,
				bottom: 0
			}),
			(this.inView = !0),
			(this.paddingTop = 0),
			(this.paddingBottom = 0),
			(this.contentDOMWidth = 0),
			(this.contentDOMHeight = 0),
			(this.editorHeight = 0),
			(this.editorWidth = 0),
			(this.heightOracle = new gu()),
			(this.scaler = qo),
			(this.scrollTarget = null),
			(this.printing = !1),
			(this.mustMeasureContent = !0),
			(this.defaultTextDirection = Z.LTR),
			(this.visibleRanges = []),
			(this.mustEnforceCursorAssoc = !1),
			(this.stateDeco = e.facet(Ei).filter((t) => typeof t != "function")),
			(this.heightMap = xe
				.empty()
				.applyChanges(
					this.stateDeco,
					_.empty,
					this.heightOracle.setDoc(e.doc),
					[new Qe(0, 0, 0, e.doc.length)]
				)),
			(this.viewport = this.getViewport(0, null)),
			this.updateViewportLines(),
			this.updateForViewport(),
			(this.lineGaps = this.ensureLineGaps([])),
			(this.lineGapDeco = E.set(this.lineGaps.map((t) => t.draw(!1)))),
			this.computeVisibleRanges();
	}
	updateForViewport() {
		let e = [this.viewport],
			{ main: t } = this.state.selection;
		for (let i = 0; i <= 1; i++) {
			let s = i ? t.head : t.anchor;
			if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
				let { from: r, to: o } = this.lineBlockAt(s);
				e.push(new Ji(r, o));
			}
		}
		(this.viewports = e.sort((i, s) => i.from - s.from)),
			(this.scaler =
				this.heightMap.height <= 7e6
					? qo
					: new Du(this.heightOracle.doc, this.heightMap, this.viewports));
	}
	updateViewportLines() {
		(this.viewportLines = []),
			this.heightMap.forEachLine(
				this.viewport.from,
				this.viewport.to,
				this.state.doc,
				0,
				0,
				(e) => {
					this.viewportLines.push(
						this.scaler.scale == 1 ? e : wi(e, this.scaler)
					);
				}
			);
	}
	update(e, t = null) {
		this.state = e.state;
		let i = this.stateDeco;
		this.stateDeco = this.state.facet(Ei).filter((h) => typeof h != "function");
		let s = e.changedRanges,
			r = Qe.extendWithRanges(
				s,
				ku(i, this.stateDeco, e ? e.changes : ne.empty(this.state.doc.length))
			),
			o = this.heightMap.height;
		(this.heightMap = this.heightMap.applyChanges(
			this.stateDeco,
			e.startState.doc,
			this.heightOracle.setDoc(this.state.doc),
			r
		)),
			this.heightMap.height != o && (e.flags |= 2);
		let l = r.length
			? this.mapViewport(this.viewport, e.changes)
			: this.viewport;
		((t && (t.range.head < l.from || t.range.head > l.to)) ||
			!this.viewportIsAppropriate(l)) &&
			(l = this.getViewport(0, t));
		let a =
			!e.changes.empty ||
			e.flags & 2 ||
			l.from != this.viewport.from ||
			l.to != this.viewport.to;
		(this.viewport = l),
			this.updateForViewport(),
			a && this.updateViewportLines(),
			(this.lineGaps.length ||
				this.viewport.to - this.viewport.from > 2e3 << 1) &&
				this.updateLineGaps(
					this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))
				),
			(e.flags |= this.computeVisibleRanges()),
			t && (this.scrollTarget = t),
			!this.mustEnforceCursorAssoc &&
				e.selectionSet &&
				e.view.lineWrapping &&
				e.state.selection.main.empty &&
				e.state.selection.main.assoc &&
				!e.state.facet(Xa) &&
				(this.mustEnforceCursorAssoc = !0);
	}
	measure(e) {
		let t = e.contentDOM,
			i = window.getComputedStyle(t),
			s = this.heightOracle,
			r = i.whiteSpace;
		this.defaultTextDirection = i.direction == "rtl" ? Z.RTL : Z.LTR;
		let o = this.heightOracle.mustRefreshForWrapping(r),
			l =
				o || this.mustMeasureContent || this.contentDOMHeight != t.clientHeight;
		(this.contentDOMHeight = t.clientHeight), (this.mustMeasureContent = !1);
		let a = 0,
			h = 0,
			c = parseInt(i.paddingTop) || 0,
			f = parseInt(i.paddingBottom) || 0;
		(this.paddingTop != c || this.paddingBottom != f) &&
			((this.paddingTop = c), (this.paddingBottom = f), (a |= 10)),
			this.editorWidth != e.scrollDOM.clientWidth &&
				(s.lineWrapping && (l = !0),
				(this.editorWidth = e.scrollDOM.clientWidth),
				(a |= 8));
		let u = (this.printing ? Su : vu)(t, this.paddingTop),
			d = u.top - this.pixelViewport.top,
			p = u.bottom - this.pixelViewport.bottom;
		this.pixelViewport = u;
		let g =
			this.pixelViewport.bottom > this.pixelViewport.top &&
			this.pixelViewport.right > this.pixelViewport.left;
		if (
			(g != this.inView && ((this.inView = g), g && (l = !0)),
			!this.inView && !this.scrollTarget)
		)
			return 0;
		let y = t.clientWidth;
		if (
			((this.contentDOMWidth != y ||
				this.editorHeight != e.scrollDOM.clientHeight) &&
				((this.contentDOMWidth = y),
				(this.editorHeight = e.scrollDOM.clientHeight),
				(a |= 8)),
			l)
		) {
			let w = e.docView.measureVisibleLineHeights(this.viewport);
			if (
				(s.mustRefreshForHeights(w) && (o = !0),
				o ||
					(s.lineWrapping && Math.abs(y - this.contentDOMWidth) > s.charWidth))
			) {
				let { lineHeight: v, charWidth: S } = e.docView.measureTextSize();
				(o = v > 0 && s.refresh(r, v, S, y / S, w)),
					o && ((e.docView.minWidth = 0), (a |= 8));
			}
			d > 0 && p > 0
				? (h = Math.max(d, p))
				: d < 0 && p < 0 && (h = Math.min(d, p)),
				(s.heightChanged = !1);
			for (let v of this.viewports) {
				let S =
					v.from == this.viewport.from
						? w
						: e.docView.measureVisibleLineHeights(v);
				this.heightMap = o
					? xe
							.empty()
							.applyChanges(this.stateDeco, _.empty, this.heightOracle, [
								new Qe(0, 0, 0, e.state.doc.length)
							])
					: this.heightMap.updateHeight(s, 0, o, new yu(v.from, S));
			}
			s.heightChanged && (a |= 2);
		}
		let b =
			!this.viewportIsAppropriate(this.viewport, h) ||
			(this.scrollTarget &&
				(this.scrollTarget.range.head < this.viewport.from ||
					this.scrollTarget.range.head > this.viewport.to));
		return (
			b && (this.viewport = this.getViewport(h, this.scrollTarget)),
			this.updateForViewport(),
			(a & 2 || b) && this.updateViewportLines(),
			(this.lineGaps.length ||
				this.viewport.to - this.viewport.from > 2e3 << 1) &&
				this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
			(a |= this.computeVisibleRanges()),
			this.mustEnforceCursorAssoc &&
				((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
			a
		);
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top);
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom);
	}
	getViewport(e, t) {
		let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
			s = this.heightMap,
			r = this.state.doc,
			{ visibleTop: o, visibleBottom: l } = this,
			a = new Ji(
				s.lineAt(o - i * 1e3, q.ByHeight, r, 0, 0).from,
				s.lineAt(l + (1 - i) * 1e3, q.ByHeight, r, 0, 0).to
			);
		if (t) {
			let { head: h } = t.range;
			if (h < a.from || h > a.to) {
				let c = Math.min(
						this.editorHeight,
						this.pixelViewport.bottom - this.pixelViewport.top
					),
					f = s.lineAt(h, q.ByPos, r, 0, 0),
					u;
				t.y == "center"
					? (u = (f.top + f.bottom) / 2 - c / 2)
					: t.y == "start" || (t.y == "nearest" && h < a.from)
					? (u = f.top)
					: (u = f.bottom - c),
					(a = new Ji(
						s.lineAt(u - 1e3 / 2, q.ByHeight, r, 0, 0).from,
						s.lineAt(u + c + 1e3 / 2, q.ByHeight, r, 0, 0).to
					));
			}
		}
		return a;
	}
	mapViewport(e, t) {
		let i = t.mapPos(e.from, -1),
			s = t.mapPos(e.to, 1);
		return new Ji(
			this.heightMap.lineAt(i, q.ByPos, this.state.doc, 0, 0).from,
			this.heightMap.lineAt(s, q.ByPos, this.state.doc, 0, 0).to
		);
	}
	viewportIsAppropriate({ from: e, to: t }, i = 0) {
		if (!this.inView) return !0;
		let { top: s } = this.heightMap.lineAt(e, q.ByPos, this.state.doc, 0, 0),
			{ bottom: r } = this.heightMap.lineAt(t, q.ByPos, this.state.doc, 0, 0),
			{ visibleTop: o, visibleBottom: l } = this;
		return (
			(e == 0 || s <= o - Math.max(10, Math.min(-i, 250))) &&
			(t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) &&
			s > o - 2 * 1e3 &&
			r < l + 2 * 1e3
		);
	}
	mapLineGaps(e, t) {
		if (!e.length || t.empty) return e;
		let i = [];
		for (let s of e)
			t.touchesRange(s.from, s.to) ||
				i.push(new os(t.mapPos(s.from), t.mapPos(s.to), s.size));
		return i;
	}
	ensureLineGaps(e, t) {
		let i = this.heightOracle.lineWrapping,
			s = i ? 1e4 : 2e3,
			r = s >> 1,
			o = s << 1;
		if (this.defaultTextDirection != Z.LTR && !i) return [];
		let l = [],
			a = (h, c, f, u) => {
				if (c - h < r) return;
				let d = this.state.selection.main,
					p = [d.from];
				d.empty || p.push(d.to);
				for (let y of p)
					if (y > h && y < c) {
						a(h, y - 10, f, u), a(y + 10, c, f, u);
						return;
					}
				let g = Mu(
					e,
					(y) =>
						y.from >= f.from &&
						y.to <= f.to &&
						Math.abs(y.from - h) < r &&
						Math.abs(y.to - c) < r &&
						!p.some((b) => y.from < b && y.to > b)
				);
				if (!g) {
					if (
						c < f.to &&
						t &&
						i &&
						t.visibleRanges.some((y) => y.from <= c && y.to >= c)
					) {
						let y = t.moveToLineBoundary(k.cursor(c), !1, !0).head;
						y > h && (c = y);
					}
					g = new os(h, c, this.gapSize(f, h, c, u));
				}
				l.push(g);
			};
		for (let h of this.viewportLines) {
			if (h.length < o) continue;
			let c = Au(h.from, h.to, this.stateDeco);
			if (c.total < o) continue;
			let f = this.scrollTarget ? this.scrollTarget.range.head : null,
				u,
				d;
			if (i) {
				let p =
						(s / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
					g,
					y;
				if (f != null) {
					let b = Xi(c, f),
						w = ((this.visibleBottom - this.visibleTop) / 2 + p) / h.height;
					(g = b - w), (y = b + w);
				} else
					(g = (this.visibleTop - h.top - p) / h.height),
						(y = (this.visibleBottom - h.top + p) / h.height);
				(u = Yi(c, g)), (d = Yi(c, y));
			} else {
				let p = c.total * this.heightOracle.charWidth,
					g = s * this.heightOracle.charWidth,
					y,
					b;
				if (f != null) {
					let w = Xi(c, f),
						v =
							((this.pixelViewport.right - this.pixelViewport.left) / 2 + g) /
							p;
					(y = w - v), (b = w + v);
				} else
					(y = (this.pixelViewport.left - g) / p),
						(b = (this.pixelViewport.right + g) / p);
				(u = Yi(c, y)), (d = Yi(c, b));
			}
			u > h.from && a(h.from, u, h, c), d < h.to && a(d, h.to, h, c);
		}
		return l;
	}
	gapSize(e, t, i, s) {
		let r = Xi(s, i) - Xi(s, t);
		return this.heightOracle.lineWrapping
			? e.height * r
			: s.total * this.heightOracle.charWidth * r;
	}
	updateLineGaps(e) {
		os.same(e, this.lineGaps) ||
			((this.lineGaps = e),
			(this.lineGapDeco = E.set(
				e.map((t) => t.draw(this.heightOracle.lineWrapping))
			)));
	}
	computeVisibleRanges() {
		let e = this.stateDeco;
		this.lineGaps.length && (e = e.concat(this.lineGapDeco));
		let t = [];
		F.spans(
			e,
			this.viewport.from,
			this.viewport.to,
			{
				span(s, r) {
					t.push({ from: s, to: r });
				},
				point() {}
			},
			20
		);
		let i =
			t.length != this.visibleRanges.length ||
			this.visibleRanges.some((s, r) => s.from != t[r].from || s.to != t[r].to);
		return (this.visibleRanges = t), i ? 4 : 0;
	}
	lineBlockAt(e) {
		return (
			(e >= this.viewport.from &&
				e <= this.viewport.to &&
				this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
			wi(this.heightMap.lineAt(e, q.ByPos, this.state.doc, 0, 0), this.scaler)
		);
	}
	lineBlockAtHeight(e) {
		return wi(
			this.heightMap.lineAt(
				this.scaler.fromDOM(e),
				q.ByHeight,
				this.state.doc,
				0,
				0
			),
			this.scaler
		);
	}
	elementAtHeight(e) {
		return wi(
			this.heightMap.blockAt(this.scaler.fromDOM(e), this.state.doc, 0, 0),
			this.scaler
		);
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height);
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom;
	}
}
class Ji {
	constructor(e, t) {
		(this.from = e), (this.to = t);
	}
}
function Au(n, e, t) {
	let i = [],
		s = n,
		r = 0;
	return (
		F.spans(
			t,
			n,
			e,
			{
				span() {},
				point(o, l) {
					o > s && (i.push({ from: s, to: o }), (r += o - s)), (s = l);
				}
			},
			20
		),
		s < e && (i.push({ from: s, to: e }), (r += e - s)),
		{ total: r, ranges: i }
	);
}
function Yi({ total: n, ranges: e }, t) {
	if (t <= 0) return e[0].from;
	if (t >= 1) return e[e.length - 1].to;
	let i = Math.floor(n * t);
	for (let s = 0; ; s++) {
		let { from: r, to: o } = e[s],
			l = o - r;
		if (i <= l) return r + i;
		i -= l;
	}
}
function Xi(n, e) {
	let t = 0;
	for (let { from: i, to: s } of n.ranges) {
		if (e <= s) {
			t += e - i;
			break;
		}
		t += s - i;
	}
	return t / n.total;
}
function Mu(n, e) {
	for (let t of n) if (e(t)) return t;
}
const qo = {
	toDOM(n) {
		return n;
	},
	fromDOM(n) {
		return n;
	},
	scale: 1
};
class Du {
	constructor(e, t, i) {
		let s = 0,
			r = 0,
			o = 0;
		(this.viewports = i.map(({ from: l, to: a }) => {
			let h = t.lineAt(l, q.ByPos, e, 0, 0).top,
				c = t.lineAt(a, q.ByPos, e, 0, 0).bottom;
			return (
				(s += c - h),
				{ from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 }
			);
		})),
			(this.scale = (7e6 - s) / (t.height - s));
		for (let l of this.viewports)
			(l.domTop = o + (l.top - r) * this.scale),
				(o = l.domBottom = l.domTop + (l.bottom - l.top)),
				(r = l.bottom);
	}
	toDOM(e) {
		for (let t = 0, i = 0, s = 0; ; t++) {
			let r = t < this.viewports.length ? this.viewports[t] : null;
			if (!r || e < r.top) return s + (e - i) * this.scale;
			if (e <= r.bottom) return r.domTop + (e - r.top);
			(i = r.bottom), (s = r.domBottom);
		}
	}
	fromDOM(e) {
		for (let t = 0, i = 0, s = 0; ; t++) {
			let r = t < this.viewports.length ? this.viewports[t] : null;
			if (!r || e < r.domTop) return i + (e - s) / this.scale;
			if (e <= r.domBottom) return r.top + (e - r.domTop);
			(i = r.bottom), (s = r.domBottom);
		}
	}
}
function wi(n, e) {
	if (e.scale == 1) return n;
	let t = e.toDOM(n.top),
		i = e.toDOM(n.bottom);
	return new ut(
		n.from,
		n.length,
		t,
		i - t,
		Array.isArray(n.type) ? n.type.map((s) => wi(s, e)) : n.type
	);
}
const Zi = D.define({ combine: (n) => n.join(" ") }),
	nr = D.define({ combine: (n) => n.indexOf(!0) > -1 }),
	sr = mt.newName(),
	yh = mt.newName(),
	bh = mt.newName(),
	wh = { "&light": "." + yh, "&dark": "." + bh };
function rr(n, e, t) {
	return new mt(e, {
		finish(i) {
			return /&/.test(i)
				? i.replace(/&\w*/, (s) => {
						if (s == "&") return n;
						if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`);
						return t[s];
				  })
				: n + " " + i;
		}
	});
}
const Tu = rr(
	"." + sr,
	{
		"&.cm-editor": {
			position: "relative !important",
			boxSizing: "border-box",
			"&.cm-focused": { outline: "1px dotted #212121" },
			display: "flex !important",
			flexDirection: "column"
		},
		".cm-scroller": {
			display: "flex !important",
			alignItems: "flex-start !important",
			fontFamily: "monospace",
			lineHeight: 1.4,
			height: "100%",
			overflowX: "auto",
			position: "relative",
			zIndex: 0
		},
		".cm-content": {
			margin: 0,
			flexGrow: 2,
			flexShrink: 0,
			minHeight: "100%",
			display: "block",
			whiteSpace: "pre",
			wordWrap: "normal",
			boxSizing: "border-box",
			padding: "4px 0",
			outline: "none",
			"&[contenteditable=true]": {
				WebkitUserModify: "read-write-plaintext-only"
			}
		},
		".cm-lineWrapping": {
			whiteSpace_fallback: "pre-wrap",
			whiteSpace: "break-spaces",
			wordBreak: "break-word",
			overflowWrap: "anywhere",
			flexShrink: 1
		},
		"&light .cm-content": { caretColor: "black" },
		"&dark .cm-content": { caretColor: "white" },
		".cm-line": { display: "block", padding: "0 2px 0 4px" },
		".cm-selectionLayer": { zIndex: -1, contain: "size style" },
		".cm-selectionBackground": { position: "absolute" },
		"&light .cm-selectionBackground": { background: "#d9d9d9" },
		"&dark .cm-selectionBackground": { background: "#222" },
		"&light.cm-focused .cm-selectionBackground": { background: "#d7d4f0" },
		"&dark.cm-focused .cm-selectionBackground": { background: "#233" },
		".cm-cursorLayer": {
			zIndex: 100,
			contain: "size style",
			pointerEvents: "none"
		},
		"&.cm-focused .cm-cursorLayer": {
			animation: "steps(1) cm-blink 1.2s infinite"
		},
		"@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
		"@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
		".cm-cursor, .cm-dropCursor": {
			position: "absolute",
			borderLeft: "1.2px solid black",
			marginLeft: "-0.6px",
			pointerEvents: "none"
		},
		".cm-cursor": { display: "none" },
		"&dark .cm-cursor": { borderLeftColor: "#444" },
		"&.cm-focused .cm-cursor": { display: "block" },
		"&light .cm-activeLine": { backgroundColor: "#cceeff44" },
		"&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
		"&light .cm-specialChar": { color: "red" },
		"&dark .cm-specialChar": { color: "#f78" },
		".cm-gutters": {
			flexShrink: 0,
			display: "flex",
			height: "100%",
			boxSizing: "border-box",
			left: 0,
			zIndex: 200
		},
		"&light .cm-gutters": {
			backgroundColor: "#f5f5f5",
			color: "#6c6c6c",
			borderRight: "1px solid #ddd"
		},
		"&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" },
		".cm-gutter": {
			display: "flex !important",
			flexDirection: "column",
			flexShrink: 0,
			boxSizing: "border-box",
			minHeight: "100%",
			overflow: "hidden"
		},
		".cm-gutterElement": { boxSizing: "border-box" },
		".cm-lineNumbers .cm-gutterElement": {
			padding: "0 3px 0 5px",
			minWidth: "20px",
			textAlign: "right",
			whiteSpace: "nowrap"
		},
		"&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
		"&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
		".cm-panels": {
			boxSizing: "border-box",
			position: "sticky",
			left: 0,
			right: 0
		},
		"&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" },
		"&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
		"&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
		"&dark .cm-panels": { backgroundColor: "#333338", color: "white" },
		".cm-tab": {
			display: "inline-block",
			overflow: "hidden",
			verticalAlign: "bottom"
		},
		".cm-widgetBuffer": {
			verticalAlign: "text-top",
			height: "1em",
			width: 0,
			display: "inline"
		},
		".cm-placeholder": {
			color: "#888",
			display: "inline-block",
			verticalAlign: "top"
		},
		".cm-button": {
			verticalAlign: "middle",
			color: "inherit",
			fontSize: "70%",
			padding: ".2em 1em",
			borderRadius: "1px"
		},
		"&light .cm-button": {
			backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
			border: "1px solid #888",
			"&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" }
		},
		"&dark .cm-button": {
			backgroundImage: "linear-gradient(#393939, #111)",
			border: "1px solid #888",
			"&:active": { backgroundImage: "linear-gradient(#111, #333)" }
		},
		".cm-textfield": {
			verticalAlign: "middle",
			color: "inherit",
			fontSize: "70%",
			border: "1px solid silver",
			padding: ".2em .5em"
		},
		"&light .cm-textfield": { backgroundColor: "white" },
		"&dark .cm-textfield": {
			border: "1px solid #555",
			backgroundColor: "inherit"
		}
	},
	wh
);
class Ou {
	constructor(e, t, i, s) {
		(this.typeOver = s), (this.bounds = null), (this.text = "");
		let { impreciseHead: r, impreciseAnchor: o } = e.docView;
		if (
			t > -1 &&
			!e.state.readOnly &&
			(this.bounds = e.docView.domBoundsAround(t, i, 0))
		) {
			let l = r || o ? [] : Pu(e),
				a = new rh(l, e.state);
			a.readRange(this.bounds.startDOM, this.bounds.endDOM),
				(this.text = a.text),
				(this.newSel = Eu(l, this.bounds.from));
		} else {
			let l = e.observer.selectionRange,
				a =
					(r && r.node == l.focusNode && r.offset == l.focusOffset) ||
					!Xt(e.contentDOM, l.focusNode)
						? e.state.selection.main.head
						: e.docView.posFromDOM(l.focusNode, l.focusOffset),
				h =
					(o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
					!Xt(e.contentDOM, l.anchorNode)
						? e.state.selection.main.anchor
						: e.docView.posFromDOM(l.anchorNode, l.anchorOffset);
			this.newSel = k.single(h, a);
		}
	}
}
function kh(n, e) {
	let t,
		{ newSel: i } = e,
		s = n.state.selection.main;
	if (e.bounds) {
		let { from: r, to: o } = e.bounds,
			l = s.from,
			a = null;
		((n.inputState.lastKeyCode === 8 &&
			n.inputState.lastKeyTime > Date.now() - 100) ||
			(A.android && e.text.length < o - r)) &&
			((l = s.to), (a = "end"));
		let h = Bu(n.state.doc.sliceString(r, o, ft), e.text, l - r, a);
		h &&
			(A.chrome &&
				n.inputState.lastKeyCode == 13 &&
				h.toB == h.from + 2 &&
				e.text.slice(h.from, h.toB) == ft + ft &&
				h.toB--,
			(t = {
				from: r + h.from,
				to: r + h.toA,
				insert: _.of(e.text.slice(h.from, h.toB).split(ft))
			}));
	} else i && (!n.hasFocus || !n.state.facet(zn) || i.main.eq(s)) && (i = null);
	if (!t && !i) return !1;
	if (
		(!t && e.typeOver && !s.empty && i && i.main.empty
			? (t = {
					from: s.from,
					to: s.to,
					insert: n.state.doc.slice(s.from, s.to)
			  })
			: t &&
			  t.from >= s.from &&
			  t.to <= s.to &&
			  (t.from != s.from || t.to != s.to) &&
			  s.to - s.from - (t.to - t.from) <= 4
			? (t = {
					from: s.from,
					to: s.to,
					insert: n.state.doc
						.slice(s.from, t.from)
						.append(t.insert)
						.append(n.state.doc.slice(t.to, s.to))
			  })
			: (A.mac || A.android) &&
			  t &&
			  t.from == t.to &&
			  t.from == s.head - 1 &&
			  /^\. ?$/.test(t.insert.toString())
			? (i &&
					t.insert.length == 2 &&
					(i = k.single(i.main.anchor - 1, i.main.head - 1)),
			  (t = { from: s.from, to: s.to, insert: _.of([" "]) }))
			: A.chrome &&
			  t &&
			  t.from == t.to &&
			  t.from == s.head &&
			  t.insert.toString() ==
					`
 ` &&
			  n.lineWrapping &&
			  (i && (i = k.single(i.main.anchor - 1, i.main.head - 1)),
			  (t = { from: s.from, to: s.to, insert: _.of([" "]) })),
		t)
	) {
		let r = n.state;
		if (
			(A.ios && n.inputState.flushIOSKey(n)) ||
			(A.android &&
				((t.from == s.from &&
					t.to == s.to &&
					t.insert.length == 1 &&
					t.insert.lines == 2 &&
					Gt(n.contentDOM, "Enter", 13)) ||
					(t.from == s.from - 1 &&
						t.to == s.to &&
						t.insert.length == 0 &&
						Gt(n.contentDOM, "Backspace", 8)) ||
					(t.from == s.from &&
						t.to == s.to + 1 &&
						t.insert.length == 0 &&
						Gt(n.contentDOM, "Delete", 46))))
		)
			return !0;
		let o = t.insert.toString();
		if (n.state.facet(Ja).some((h) => h(n, t.from, t.to, o))) return !0;
		n.inputState.composing >= 0 && n.inputState.composing++;
		let l;
		if (
			t.from >= s.from &&
			t.to <= s.to &&
			t.to - t.from >= (s.to - s.from) / 3 &&
			(!i || (i.main.empty && i.main.from == t.from + t.insert.length)) &&
			n.inputState.composing < 0
		) {
			let h = s.from < t.from ? r.sliceDoc(s.from, t.from) : "",
				c = s.to > t.to ? r.sliceDoc(t.to, s.to) : "";
			l = r.replaceSelection(
				n.state.toText(
					h + t.insert.sliceString(0, void 0, n.state.lineBreak) + c
				)
			);
		} else {
			let h = r.changes(t),
				c =
					i && !r.selection.main.eq(i.main) && i.main.to <= h.newLength
						? i.main
						: void 0;
			if (
				r.selection.ranges.length > 1 &&
				n.inputState.composing >= 0 &&
				t.to <= s.to &&
				t.to >= s.to - 10
			) {
				let f = n.state.sliceDoc(t.from, t.to),
					u = oh(n) || n.state.doc.lineAt(s.head),
					d = s.to - t.to,
					p = s.to - s.from;
				l = r.changeByRange((g) => {
					if (g.from == s.from && g.to == s.to)
						return { changes: h, range: c || g.map(h) };
					let y = g.to - d,
						b = y - f.length;
					if (
						g.to - g.from != p ||
						n.state.sliceDoc(b, y) != f ||
						(u && g.to >= u.from && g.from <= u.to)
					)
						return { range: g };
					let w = r.changes({ from: b, to: y, insert: t.insert }),
						v = g.to - s.to;
					return {
						changes: w,
						range: c
							? k.range(Math.max(0, c.anchor + v), Math.max(0, c.head + v))
							: g.map(w)
					};
				});
			} else l = { changes: h, selection: c && r.selection.replaceRange(c) };
		}
		let a = "input.type";
		return (
			n.composing &&
				((a += ".compose"),
				n.inputState.compositionFirstChange &&
					((a += ".start"), (n.inputState.compositionFirstChange = !1))),
			n.dispatch(l, { scrollIntoView: !0, userEvent: a }),
			!0
		);
	} else if (i && !i.main.eq(s)) {
		let r = !1,
			o = "select";
		return (
			n.inputState.lastSelectionTime > Date.now() - 50 &&
				(n.inputState.lastSelectionOrigin == "select" && (r = !0),
				(o = n.inputState.lastSelectionOrigin)),
			n.dispatch({ selection: i, scrollIntoView: r, userEvent: o }),
			!0
		);
	} else return !1;
}
function Bu(n, e, t, i) {
	let s = Math.min(n.length, e.length),
		r = 0;
	for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); ) r++;
	if (r == s && n.length == e.length) return null;
	let o = n.length,
		l = e.length;
	for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
		o--, l--;
	if (i == "end") {
		let a = Math.max(0, r - Math.min(o, l));
		t -= o + a - r;
	}
	if (o < r && n.length < e.length) {
		let a = t <= r && t >= o ? r - t : 0;
		(r -= a), (l = r + (l - o)), (o = r);
	} else if (l < r) {
		let a = t <= r && t >= l ? r - t : 0;
		(r -= a), (o = r + (o - l)), (l = r);
	}
	return { from: r, toA: o, toB: l };
}
function Pu(n) {
	let e = [];
	if (n.root.activeElement != n.contentDOM) return e;
	let {
		anchorNode: t,
		anchorOffset: i,
		focusNode: s,
		focusOffset: r
	} = n.observer.selectionRange;
	return (
		t && (e.push(new Co(t, i)), (s != t || r != i) && e.push(new Co(s, r))), e
	);
}
function Eu(n, e) {
	if (n.length == 0) return null;
	let t = n[0].pos,
		i = n.length == 2 ? n[1].pos : t;
	return t > -1 && i > -1 ? k.single(t + e, i + e) : null;
}
const Ru = {
		childList: !0,
		characterData: !0,
		subtree: !0,
		attributes: !0,
		characterDataOldValue: !0
	},
	ls = A.ie && A.ie_version <= 11;
class Lu {
	constructor(e) {
		(this.view = e),
			(this.active = !1),
			(this.selectionRange = new Df()),
			(this.selectionChanged = !1),
			(this.delayedFlush = -1),
			(this.resizeTimeout = -1),
			(this.queue = []),
			(this.delayedAndroidKey = null),
			(this.flushingAndroidKey = -1),
			(this.lastChange = 0),
			(this.scrollTargets = []),
			(this.intersection = null),
			(this.resize = null),
			(this.intersecting = !1),
			(this.gapIntersection = null),
			(this.gaps = []),
			(this.parentCheck = -1),
			(this.dom = e.contentDOM),
			(this.observer = new MutationObserver((t) => {
				for (let i of t) this.queue.push(i);
				((A.ie && A.ie_version <= 11) || (A.ios && e.composing)) &&
				t.some(
					(i) =>
						(i.type == "childList" && i.removedNodes.length) ||
						(i.type == "characterData" &&
							i.oldValue.length > i.target.nodeValue.length)
				)
					? this.flushSoon()
					: this.flush();
			})),
			ls &&
				(this.onCharData = (t) => {
					this.queue.push({
						target: t.target,
						type: "characterData",
						oldValue: t.prevValue
					}),
						this.flushSoon();
				}),
			(this.onSelectionChange = this.onSelectionChange.bind(this)),
			(this.onResize = this.onResize.bind(this)),
			(this.onPrint = this.onPrint.bind(this)),
			(this.onScroll = this.onScroll.bind(this)),
			typeof ResizeObserver == "function" &&
				((this.resize = new ResizeObserver(() => {
					var t;
					((t = this.view.docView) === null || t === void 0
						? void 0
						: t.lastUpdate) <
						Date.now() - 75 && this.onResize();
				})),
				this.resize.observe(e.scrollDOM)),
			this.addWindowListeners((this.win = e.win)),
			this.start(),
			typeof IntersectionObserver == "function" &&
				((this.intersection = new IntersectionObserver((t) => {
					this.parentCheck < 0 &&
						(this.parentCheck = setTimeout(
							this.listenForScroll.bind(this),
							1e3
						)),
						t.length > 0 &&
							t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
							((this.intersecting = !this.intersecting),
							this.intersecting != this.view.inView &&
								this.onScrollChanged(document.createEvent("Event")));
				}, {})),
				this.intersection.observe(this.dom),
				(this.gapIntersection = new IntersectionObserver((t) => {
					t.length > 0 &&
						t[t.length - 1].intersectionRatio > 0 &&
						this.onScrollChanged(document.createEvent("Event"));
				}, {}))),
			this.listenForScroll(),
			this.readSelectionRange();
	}
	onScrollChanged(e) {
		this.view.inputState.runScrollHandlers(this.view, e),
			this.intersecting && this.view.measure();
	}
	onScroll(e) {
		this.intersecting && this.flush(!1), this.onScrollChanged(e);
	}
	onResize() {
		this.resizeTimeout < 0 &&
			(this.resizeTimeout = setTimeout(() => {
				(this.resizeTimeout = -1), this.view.requestMeasure();
			}, 50));
	}
	onPrint() {
		(this.view.viewState.printing = !0),
			this.view.measure(),
			setTimeout(() => {
				(this.view.viewState.printing = !1), this.view.requestMeasure();
			}, 500);
	}
	updateGaps(e) {
		if (
			this.gapIntersection &&
			(e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))
		) {
			this.gapIntersection.disconnect();
			for (let t of e) this.gapIntersection.observe(t);
			this.gaps = e;
		}
	}
	onSelectionChange(e) {
		let t = this.selectionChanged;
		if (!this.readSelectionRange() || this.delayedAndroidKey) return;
		let { view: i } = this,
			s = this.selectionRange;
		if (i.state.facet(zn) ? i.root.activeElement != this.dom : !dn(i.dom, s))
			return;
		let r = s.anchorNode && i.docView.nearest(s.anchorNode);
		if (r && r.ignoreEvent(e)) {
			t || (this.selectionChanged = !1);
			return;
		}
		((A.ie && A.ie_version <= 11) || (A.android && A.chrome)) &&
		!i.state.selection.main.empty &&
		s.focusNode &&
		Sn(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
			? this.flushSoon()
			: this.flush(!1);
	}
	readSelectionRange() {
		let { view: e } = this,
			t =
				(A.safari &&
					e.root.nodeType == 11 &&
					Cf(this.dom.ownerDocument) == this.dom &&
					Iu(this.view)) ||
				vn(e.root);
		if (!t || this.selectionRange.eq(t)) return !1;
		let i = dn(this.dom, t);
		return i &&
			!this.selectionChanged &&
			e.inputState.lastFocusTime > Date.now() - 200 &&
			e.inputState.lastTouchTime < Date.now() - 300 &&
			Of(this.dom, t)
			? ((this.view.inputState.lastFocusTime = 0),
			  e.docView.updateSelection(),
			  !1)
			: (this.selectionRange.setRange(t),
			  i && (this.selectionChanged = !0),
			  !0);
	}
	setSelectionRange(e, t) {
		this.selectionRange.set(e.node, e.offset, t.node, t.offset),
			(this.selectionChanged = !1);
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0);
	}
	listenForScroll() {
		this.parentCheck = -1;
		let e = 0,
			t = null;
		for (let i = this.dom; i; )
			if (i.nodeType == 1)
				!t && e < this.scrollTargets.length && this.scrollTargets[e] == i
					? e++
					: t || (t = this.scrollTargets.slice(0, e)),
					t && t.push(i),
					(i = i.assignedSlot || i.parentNode);
			else if (i.nodeType == 11) i = i.host;
			else break;
		if (
			(e < this.scrollTargets.length &&
				!t &&
				(t = this.scrollTargets.slice(0, e)),
			t)
		) {
			for (let i of this.scrollTargets)
				i.removeEventListener("scroll", this.onScroll);
			for (let i of (this.scrollTargets = t))
				i.addEventListener("scroll", this.onScroll);
		}
	}
	ignore(e) {
		if (!this.active) return e();
		try {
			return this.stop(), e();
		} finally {
			this.start(), this.clear();
		}
	}
	start() {
		this.active ||
			(this.observer.observe(this.dom, Ru),
			ls &&
				this.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
			(this.active = !0));
	}
	stop() {
		this.active &&
			((this.active = !1),
			this.observer.disconnect(),
			ls &&
				this.dom.removeEventListener(
					"DOMCharacterDataModified",
					this.onCharData
				));
	}
	clear() {
		this.processRecords(),
			(this.queue.length = 0),
			(this.selectionChanged = !1);
	}
	delayAndroidKey(e, t) {
		var i;
		if (!this.delayedAndroidKey) {
			let s = () => {
				let r = this.delayedAndroidKey;
				r &&
					(this.clearDelayedAndroidKey(),
					!this.flush() && r.force && Gt(this.dom, r.key, r.keyCode));
			};
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
		}
		(!this.delayedAndroidKey || e == "Enter") &&
			(this.delayedAndroidKey = {
				key: e,
				keyCode: t,
				force:
					this.lastChange < Date.now() - 50 ||
					!!(
						!((i = this.delayedAndroidKey) === null || i === void 0) && i.force
					)
			});
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey),
			(this.delayedAndroidKey = null),
			(this.flushingAndroidKey = -1);
	}
	flushSoon() {
		this.delayedFlush < 0 &&
			(this.delayedFlush = this.view.win.requestAnimationFrame(() => {
				(this.delayedFlush = -1), this.flush();
			}));
	}
	forceFlush() {
		this.delayedFlush >= 0 &&
			(this.view.win.cancelAnimationFrame(this.delayedFlush),
			(this.delayedFlush = -1)),
			this.flush();
	}
	processRecords() {
		let e = this.queue;
		for (let r of this.observer.takeRecords()) e.push(r);
		e.length && (this.queue = []);
		let t = -1,
			i = -1,
			s = !1;
		for (let r of e) {
			let o = this.readMutation(r);
			o &&
				(o.typeOver && (s = !0),
				t == -1
					? ({ from: t, to: i } = o)
					: ((t = Math.min(o.from, t)), (i = Math.max(o.to, i))));
		}
		return { from: t, to: i, typeOver: s };
	}
	readChange() {
		let { from: e, to: t, typeOver: i } = this.processRecords(),
			s = this.selectionChanged && dn(this.dom, this.selectionRange);
		return e < 0 && !s
			? null
			: (e > -1 && (this.lastChange = Date.now()),
			  (this.view.inputState.lastFocusTime = 0),
			  (this.selectionChanged = !1),
			  new Ou(this.view, e, t, i));
	}
	flush(e = !0) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
		e && this.readSelectionRange();
		let t = this.readChange();
		if (!t) return !1;
		let i = this.view.state,
			s = kh(this.view, t);
		return this.view.state == i && this.view.update([]), s;
	}
	readMutation(e) {
		let t = this.view.docView.nearest(e.target);
		if (!t || t.ignoreMutation(e)) return null;
		if (
			(t.markDirty(e.type == "attributes"),
			e.type == "attributes" && (t.dirty |= 4),
			e.type == "childList")
		) {
			let i = jo(t, e.previousSibling || e.target.previousSibling, -1),
				s = jo(t, e.nextSibling || e.target.nextSibling, 1);
			return {
				from: i ? t.posAfter(i) : t.posAtStart,
				to: s ? t.posBefore(s) : t.posAtEnd,
				typeOver: !1
			};
		} else
			return e.type == "characterData"
				? {
						from: t.posAtStart,
						to: t.posAtEnd,
						typeOver: e.target.nodeValue == e.oldValue
				  }
				: null;
	}
	setWindow(e) {
		e != this.win &&
			(this.removeWindowListeners(this.win),
			(this.win = e),
			this.addWindowListeners(this.win));
	}
	addWindowListeners(e) {
		e.addEventListener("resize", this.onResize),
			e.addEventListener("beforeprint", this.onPrint),
			e.addEventListener("scroll", this.onScroll),
			e.document.addEventListener("selectionchange", this.onSelectionChange);
	}
	removeWindowListeners(e) {
		e.removeEventListener("scroll", this.onScroll),
			e.removeEventListener("resize", this.onResize),
			e.removeEventListener("beforeprint", this.onPrint),
			e.document.removeEventListener("selectionchange", this.onSelectionChange);
	}
	destroy() {
		var e, t, i;
		this.stop(),
			(e = this.intersection) === null || e === void 0 || e.disconnect(),
			(t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
			(i = this.resize) === null || i === void 0 || i.disconnect();
		for (let s of this.scrollTargets)
			s.removeEventListener("scroll", this.onScroll);
		this.removeWindowListeners(this.win),
			clearTimeout(this.parentCheck),
			clearTimeout(this.resizeTimeout),
			this.win.cancelAnimationFrame(this.delayedFlush),
			this.win.cancelAnimationFrame(this.flushingAndroidKey);
	}
}
function jo(n, e, t) {
	for (; e; ) {
		let i = K.get(e);
		if (i && i.parent == n) return i;
		let s = e.parentNode;
		e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
	}
	return null;
}
function Iu(n) {
	let e = null;
	function t(a) {
		a.preventDefault(),
			a.stopImmediatePropagation(),
			(e = a.getTargetRanges()[0]);
	}
	if (
		(n.contentDOM.addEventListener("beforeinput", t, !0),
		n.dom.ownerDocument.execCommand("indent"),
		n.contentDOM.removeEventListener("beforeinput", t, !0),
		!e)
	)
		return null;
	let i = e.startContainer,
		s = e.startOffset,
		r = e.endContainer,
		o = e.endOffset,
		l = n.docView.domAtPos(n.state.selection.main.anchor);
	return (
		Sn(l.node, l.offset, r, o) && ([i, s, r, o] = [r, o, i, s]),
		{ anchorNode: i, anchorOffset: s, focusNode: r, focusOffset: o }
	);
}
class O {
	constructor(e = {}) {
		(this.plugins = []),
			(this.pluginMap = new Map()),
			(this.editorAttrs = {}),
			(this.contentAttrs = {}),
			(this.bidiCache = []),
			(this.destroyed = !1),
			(this.updateState = 2),
			(this.measureScheduled = -1),
			(this.measureRequests = []),
			(this.contentDOM = document.createElement("div")),
			(this.scrollDOM = document.createElement("div")),
			(this.scrollDOM.tabIndex = -1),
			(this.scrollDOM.className = "cm-scroller"),
			this.scrollDOM.appendChild(this.contentDOM),
			(this.announceDOM = document.createElement("div")),
			(this.announceDOM.style.cssText = "position: absolute; top: -10000px"),
			this.announceDOM.setAttribute("aria-live", "polite"),
			(this.dom = document.createElement("div")),
			this.dom.appendChild(this.announceDOM),
			this.dom.appendChild(this.scrollDOM),
			(this._dispatch = e.dispatch || ((t) => this.update([t]))),
			(this.dispatch = this.dispatch.bind(this)),
			(this._root = e.root || Tf(e.parent) || document),
			(this.viewState = new zo(e.state || N.create(e))),
			(this.plugins = this.state.facet(yi).map((t) => new ns(t)));
		for (let t of this.plugins) t.update(this);
		(this.observer = new Lu(this)),
			(this.inputState = new nu(this)),
			this.inputState.ensureHandlers(this, this.plugins),
			(this.docView = new Ao(this)),
			this.mountStyles(),
			this.updateAttrs(),
			(this.updateState = 0),
			this.requestMeasure(),
			e.parent && e.parent.appendChild(this.dom);
	}
	get state() {
		return this.viewState.state;
	}
	get viewport() {
		return this.viewState.viewport;
	}
	get visibleRanges() {
		return this.viewState.visibleRanges;
	}
	get inView() {
		return this.viewState.inView;
	}
	get composing() {
		return this.inputState.composing > 0;
	}
	get compositionStarted() {
		return this.inputState.composing >= 0;
	}
	get root() {
		return this._root;
	}
	get win() {
		return this.dom.ownerDocument.defaultView || window;
	}
	dispatch(...e) {
		this._dispatch(
			e.length == 1 && e[0] instanceof re ? e[0] : this.state.update(...e)
		);
	}
	update(e) {
		if (this.updateState != 0)
			throw new Error(
				"Calls to EditorView.update are not allowed while an update is in progress"
			);
		let t = !1,
			i = !1,
			s,
			r = this.state;
		for (let h of e) {
			if (h.startState != r)
				throw new RangeError(
					"Trying to update state with a transaction that doesn't start from the previous state."
				);
			r = h.state;
		}
		if (this.destroyed) {
			this.viewState.state = r;
			return;
		}
		let o = this.observer.delayedAndroidKey,
			l = null;
		if (
			(o
				? (this.observer.clearDelayedAndroidKey(),
				  (l = this.observer.readChange()),
				  ((l && !this.state.doc.eq(r.doc)) ||
						!this.state.selection.eq(r.selection)) &&
						(l = null))
				: this.observer.clear(),
			r.facet(N.phrases) != this.state.facet(N.phrases))
		)
			return this.setState(r);
		s = Mn.create(this, r, e);
		let a = this.viewState.scrollTarget;
		try {
			this.updateState = 2;
			for (let h of e) {
				if ((a && (a = a.map(h.changes)), h.scrollIntoView)) {
					let { main: c } = h.state.selection;
					a = new An(
						c.empty ? c : k.cursor(c.head, c.head > c.anchor ? -1 : 1)
					);
				}
				for (let c of h.effects) c.is(vo) && (a = c.value);
			}
			this.viewState.update(s, a),
				(this.bidiCache = Dn.update(this.bidiCache, s.changes)),
				s.empty || (this.updatePlugins(s), this.inputState.update(s)),
				(t = this.docView.update(s)),
				this.state.facet(bi) != this.styleModules && this.mountStyles(),
				(i = this.updateAttrs()),
				this.showAnnouncements(e),
				this.docView.updateSelection(
					t,
					e.some((h) => h.isUserEvent("select.pointer"))
				);
		} finally {
			this.updateState = 0;
		}
		if (
			(s.startState.facet(Zi) != s.state.facet(Zi) &&
				(this.viewState.mustMeasureContent = !0),
			(t ||
				i ||
				a ||
				this.viewState.mustEnforceCursorAssoc ||
				this.viewState.mustMeasureContent) &&
				this.requestMeasure(),
			!s.empty)
		)
			for (let h of this.state.facet(Xs)) h(s);
		l && !kh(this, l) && o.force && Gt(this.contentDOM, o.key, o.keyCode);
	}
	setState(e) {
		if (this.updateState != 0)
			throw new Error(
				"Calls to EditorView.setState are not allowed while an update is in progress"
			);
		if (this.destroyed) {
			this.viewState.state = e;
			return;
		}
		this.updateState = 2;
		let t = this.hasFocus;
		try {
			for (let i of this.plugins) i.destroy(this);
			(this.viewState = new zo(e)),
				(this.plugins = e.facet(yi).map((i) => new ns(i))),
				this.pluginMap.clear();
			for (let i of this.plugins) i.update(this);
			(this.docView = new Ao(this)),
				this.inputState.ensureHandlers(this, this.plugins),
				this.mountStyles(),
				this.updateAttrs(),
				(this.bidiCache = []);
		} finally {
			this.updateState = 0;
		}
		t && this.focus(), this.requestMeasure();
	}
	updatePlugins(e) {
		let t = e.startState.facet(yi),
			i = e.state.facet(yi);
		if (t != i) {
			let s = [];
			for (let r of i) {
				let o = t.indexOf(r);
				if (o < 0) s.push(new ns(r));
				else {
					let l = this.plugins[o];
					(l.mustUpdate = e), s.push(l);
				}
			}
			for (let r of this.plugins) r.mustUpdate != e && r.destroy(this);
			(this.plugins = s),
				this.pluginMap.clear(),
				this.inputState.ensureHandlers(this, this.plugins);
		} else for (let s of this.plugins) s.mustUpdate = e;
		for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
	}
	measure(e = !0) {
		if (this.destroyed) return;
		this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
			(this.measureScheduled = 0),
			e && this.observer.forceFlush();
		let t = null,
			{ scrollHeight: i, scrollTop: s, clientHeight: r } = this.scrollDOM,
			o = s > i - r - 4 ? i : s;
		try {
			for (let l = 0; ; l++) {
				this.updateState = 1;
				let a = this.viewport,
					h = this.viewState.lineBlockAtHeight(o),
					c = this.viewState.measure(this);
				if (
					!c &&
					!this.measureRequests.length &&
					this.viewState.scrollTarget == null
				)
					break;
				if (l > 5) {
					console.warn(
						this.measureRequests.length
							? "Measure loop restarted more than 5 times"
							: "Viewport failed to stabilize"
					);
					break;
				}
				let f = [];
				c & 4 || ([this.measureRequests, f] = [f, this.measureRequests]);
				let u = f.map((y) => {
						try {
							return y.read(this);
						} catch (b) {
							return He(this.state, b), Ko;
						}
					}),
					d = Mn.create(this, this.state, []),
					p = !1,
					g = !1;
				(d.flags |= c),
					t ? (t.flags |= c) : (t = d),
					(this.updateState = 2),
					d.empty ||
						(this.updatePlugins(d),
						this.inputState.update(d),
						this.updateAttrs(),
						(p = this.docView.update(d)));
				for (let y = 0; y < f.length; y++)
					if (u[y] != Ko)
						try {
							let b = f[y];
							b.write && b.write(u[y], this);
						} catch (b) {
							He(this.state, b);
						}
				if (this.viewState.editorHeight)
					if (this.viewState.scrollTarget)
						this.docView.scrollIntoView(this.viewState.scrollTarget),
							(this.viewState.scrollTarget = null),
							(g = !0);
					else {
						let y = this.viewState.lineBlockAt(h.from).top - h.top;
						(y > 1 || y < -1) && ((this.scrollDOM.scrollTop += y), (g = !0));
					}
				if (
					(p && this.docView.updateSelection(!0),
					this.viewport.from == a.from &&
						this.viewport.to == a.to &&
						!g &&
						this.measureRequests.length == 0)
				)
					break;
			}
		} finally {
			(this.updateState = 0), (this.measureScheduled = -1);
		}
		if (t && !t.empty) for (let l of this.state.facet(Xs)) l(t);
	}
	get themeClasses() {
		return (
			sr + " " + (this.state.facet(nr) ? bh : yh) + " " + this.state.facet(Zi)
		);
	}
	updateAttrs() {
		let e = Uo(this, Za, {
				class:
					"cm-editor" +
					(this.hasFocus ? " cm-focused " : " ") +
					this.themeClasses
			}),
			t = {
				spellcheck: "false",
				autocorrect: "off",
				autocapitalize: "off",
				translate: "no",
				contenteditable: this.state.facet(zn) ? "true" : "false",
				class: "cm-content",
				style: `${A.tabSize}: ${this.state.tabSize}`,
				role: "textbox",
				"aria-multiline": "true"
			};
		this.state.readOnly && (t["aria-readonly"] = "true"), Uo(this, Qa, t);
		let i = this.observer.ignore(() => {
			let s = Js(this.contentDOM, this.contentAttrs, t),
				r = Js(this.dom, this.editorAttrs, e);
			return s || r;
		});
		return (this.editorAttrs = e), (this.contentAttrs = t), i;
	}
	showAnnouncements(e) {
		let t = !0;
		for (let i of e)
			for (let s of i.effects)
				if (s.is(O.announce)) {
					t && (this.announceDOM.textContent = ""), (t = !1);
					let r = this.announceDOM.appendChild(document.createElement("div"));
					r.textContent = s.value;
				}
	}
	mountStyles() {
		(this.styleModules = this.state.facet(bi)),
			mt.mount(this.root, this.styleModules.concat(Tu).reverse());
	}
	readMeasured() {
		if (this.updateState == 2)
			throw new Error(
				"Reading the editor layout isn't allowed during an update"
			);
		this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
	}
	requestMeasure(e) {
		if (
			(this.measureScheduled < 0 &&
				(this.measureScheduled = this.win.requestAnimationFrame(() =>
					this.measure()
				)),
			e)
		) {
			if (e.key != null) {
				for (let t = 0; t < this.measureRequests.length; t++)
					if (this.measureRequests[t].key === e.key) {
						this.measureRequests[t] = e;
						return;
					}
			}
			this.measureRequests.push(e);
		}
	}
	plugin(e) {
		let t = this.pluginMap.get(e);
		return (
			(t === void 0 || (t && t.spec != e)) &&
				this.pluginMap.set(
					e,
					(t = this.plugins.find((i) => i.spec == e) || null)
				),
			t && t.update(this).value
		);
	}
	get documentTop() {
		return (
			this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
		);
	}
	get documentPadding() {
		return {
			top: this.viewState.paddingTop,
			bottom: this.viewState.paddingBottom
		};
	}
	elementAtHeight(e) {
		return this.readMeasured(), this.viewState.elementAtHeight(e);
	}
	lineBlockAtHeight(e) {
		return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
	}
	get viewportLineBlocks() {
		return this.viewState.viewportLines;
	}
	lineBlockAt(e) {
		return this.viewState.lineBlockAt(e);
	}
	get contentHeight() {
		return this.viewState.contentHeight;
	}
	moveByChar(e, t, i) {
		return rs(this, e, Po(this, e, t, i));
	}
	moveByGroup(e, t) {
		return rs(
			this,
			e,
			Po(this, e, t, (i) => tu(this, e.head, i))
		);
	}
	moveToLineBoundary(e, t, i = !0) {
		return eu(this, e, t, i);
	}
	moveVertically(e, t, i) {
		return rs(this, e, iu(this, e, t, i));
	}
	domAtPos(e) {
		return this.docView.domAtPos(e);
	}
	posAtDOM(e, t = 0) {
		return this.docView.posFromDOM(e, t);
	}
	posAtCoords(e, t = !0) {
		return this.readMeasured(), ah(this, e, t);
	}
	coordsAtPos(e, t = 1) {
		this.readMeasured();
		let i = this.docView.coordsAt(e, t);
		if (!i || i.left == i.right) return i;
		let s = this.state.doc.lineAt(e),
			r = this.bidiSpans(s),
			o = r[Jt.find(r, e - s.from, -1, t)];
		return Dr(i, (o.dir == Z.LTR) == t > 0);
	}
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth;
	}
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight;
	}
	get textDirection() {
		return this.viewState.defaultTextDirection;
	}
	textDirectionAt(e) {
		return !this.state.facet(Ya) ||
			e < this.viewport.from ||
			e > this.viewport.to
			? this.textDirection
			: (this.readMeasured(), this.docView.textDirectionAt(e));
	}
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping;
	}
	bidiSpans(e) {
		if (e.length > Nu) return nh(e.length);
		let t = this.textDirectionAt(e.from);
		for (let s of this.bidiCache)
			if (s.from == e.from && s.dir == t) return s.order;
		let i = Hf(e.text, t);
		return this.bidiCache.push(new Dn(e.from, e.to, t, i)), i;
	}
	get hasFocus() {
		var e;
		return (
			(this.dom.ownerDocument.hasFocus() ||
				(A.safari &&
					((e = this.inputState) === null || e === void 0
						? void 0
						: e.lastContextMenu) >
						Date.now() - 3e4)) &&
			this.root.activeElement == this.contentDOM
		);
	}
	focus() {
		this.observer.ignore(() => {
			Ea(this.contentDOM), this.docView.updateSelection();
		});
	}
	setRoot(e) {
		this._root != e &&
			((this._root = e),
			this.observer.setWindow(
				(e.nodeType == 9 ? e : e.ownerDocument).defaultView || window
			),
			this.mountStyles());
	}
	destroy() {
		for (let e of this.plugins) e.destroy(this);
		(this.plugins = []),
			this.inputState.destroy(),
			this.dom.remove(),
			this.observer.destroy(),
			this.measureScheduled > -1 && cancelAnimationFrame(this.measureScheduled),
			(this.destroyed = !0);
	}
	static scrollIntoView(e, t = {}) {
		return vo.of(
			new An(
				typeof e == "number" ? k.cursor(e) : e,
				t.y,
				t.x,
				t.yMargin,
				t.xMargin
			)
		);
	}
	static domEventHandlers(e) {
		return be.define(() => ({}), { eventHandlers: e });
	}
	static theme(e, t) {
		let i = mt.newName(),
			s = [Zi.of(i), bi.of(rr(`.${i}`, e))];
		return t && t.dark && s.push(nr.of(!0)), s;
	}
	static baseTheme(e) {
		return Vi.lowest(bi.of(rr("." + sr, e, wh)));
	}
	static findFromDOM(e) {
		var t;
		let i = e.querySelector(".cm-content"),
			s = (i && K.get(i)) || K.get(e);
		return (
			((t = s?.rootView) === null || t === void 0 ? void 0 : t.view) || null
		);
	}
}
O.styleModule = bi;
O.inputHandler = Ja;
O.perLineTextDirection = Ya;
O.exceptionSink = Ga;
O.updateListener = Xs;
O.editable = zn;
O.mouseSelectionStyle = $a;
O.dragMovesSelection = Ua;
O.clickAddsSelectionRange = Ka;
O.decorations = Ei;
O.atomicRanges = eh;
O.scrollMargins = th;
O.darkTheme = nr;
O.contentAttributes = Qa;
O.editorAttributes = Za;
O.lineWrapping = O.contentAttributes.of({ class: "cm-lineWrapping" });
O.announce = R.define();
const Nu = 4096,
	Ko = {};
class Dn {
	constructor(e, t, i, s) {
		(this.from = e), (this.to = t), (this.dir = i), (this.order = s);
	}
	static update(e, t) {
		if (t.empty) return e;
		let i = [],
			s = e.length ? e[e.length - 1].dir : Z.LTR;
		for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
			let o = e[r];
			o.dir == s &&
				!t.touchesRange(o.from, o.to) &&
				i.push(new Dn(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.order));
		}
		return i;
	}
}
function Uo(n, e, t) {
	for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
		let r = i[s],
			o = typeof r == "function" ? r(n) : r;
		o && Gs(o, t);
	}
	return t;
}
const _u = A.mac ? "mac" : A.windows ? "win" : A.linux ? "linux" : "key";
function Vu(n, e) {
	const t = n.split(/-(?!$)/);
	let i = t[t.length - 1];
	i == "Space" && (i = " ");
	let s, r, o, l;
	for (let a = 0; a < t.length - 1; ++a) {
		const h = t[a];
		if (/^(cmd|meta|m)$/i.test(h)) l = !0;
		else if (/^a(lt)?$/i.test(h)) s = !0;
		else if (/^(c|ctrl|control)$/i.test(h)) r = !0;
		else if (/^s(hift)?$/i.test(h)) o = !0;
		else if (/^mod$/i.test(h)) e == "mac" ? (l = !0) : (r = !0);
		else throw new Error("Unrecognized modifier name: " + h);
	}
	return (
		s && (i = "Alt-" + i),
		r && (i = "Ctrl-" + i),
		l && (i = "Meta-" + i),
		o && (i = "Shift-" + i),
		i
	);
}
function Qi(n, e, t) {
	return (
		e.altKey && (n = "Alt-" + n),
		e.ctrlKey && (n = "Ctrl-" + n),
		e.metaKey && (n = "Meta-" + n),
		t !== !1 && e.shiftKey && (n = "Shift-" + n),
		n
	);
}
const Fu = Vi.default(
		O.domEventHandlers({
			keydown(n, e) {
				return qu(Hu(e.state), n, e, "editor");
			}
		})
	),
	qn = D.define({ enables: Fu }),
	$o = new WeakMap();
function Hu(n) {
	let e = n.facet(qn),
		t = $o.get(e);
	return t || $o.set(e, (t = zu(e.reduce((i, s) => i.concat(s), [])))), t;
}
let at = null;
const Wu = 4e3;
function zu(n, e = _u) {
	let t = Object.create(null),
		i = Object.create(null),
		s = (o, l) => {
			let a = i[o];
			if (a == null) i[o] = l;
			else if (a != l)
				throw new Error(
					"Key binding " +
						o +
						" is used both as a regular binding and as a multi-stroke prefix"
				);
		},
		r = (o, l, a, h) => {
			var c, f;
			let u = t[o] || (t[o] = Object.create(null)),
				d = l.split(/ (?!$)/).map((y) => Vu(y, e));
			for (let y = 1; y < d.length; y++) {
				let b = d.slice(0, y).join(" ");
				s(b, !0),
					u[b] ||
						(u[b] = {
							preventDefault: !0,
							run: [
								(w) => {
									let v = (at = { view: w, prefix: b, scope: o });
									return (
										setTimeout(() => {
											at == v && (at = null);
										}, Wu),
										!0
									);
								}
							]
						});
			}
			let p = d.join(" ");
			s(p, !1);
			let g =
				u[p] ||
				(u[p] = {
					preventDefault: !1,
					run:
						((f = (c = u._any) === null || c === void 0 ? void 0 : c.run) ===
							null || f === void 0
							? void 0
							: f.slice()) || []
				});
			a && g.run.push(a), h && (g.preventDefault = !0);
		};
	for (let o of n) {
		let l = o.scope ? o.scope.split(" ") : ["editor"];
		if (o.any)
			for (let h of l) {
				let c = t[h] || (t[h] = Object.create(null));
				c._any || (c._any = { preventDefault: !1, run: [] });
				for (let f in c) c[f].run.push(o.any);
			}
		let a = o[e] || o.key;
		if (a)
			for (let h of l)
				r(h, a, o.run, o.preventDefault),
					o.shift && r(h, "Shift-" + a, o.shift, o.preventDefault);
	}
	return t;
}
function qu(n, e, t, i) {
	let s = Sf(e),
		r = ge(s, 0),
		o = Ee(r) == s.length && s != " ",
		l = "",
		a = !1;
	at &&
		at.view == t &&
		at.scope == i &&
		((l = at.prefix + " "), (a = ch.indexOf(e.keyCode) < 0) && (at = null));
	let h = new Set(),
		c = (p) => {
			if (p) {
				for (let g of p.run) if (!h.has(g) && (h.add(g), g(t, e))) return !0;
				p.preventDefault && (a = !0);
			}
			return !1;
		},
		f = n[i],
		u,
		d;
	if (f) {
		if (c(f[l + Qi(s, e, !o)])) return !0;
		if (
			o &&
			(e.shiftKey || e.altKey || e.metaKey || r > 127) &&
			(u = gt[e.keyCode]) &&
			u != s
		) {
			if (c(f[l + Qi(u, e, !0)])) return !0;
			if (
				e.shiftKey &&
				(d = Oi[e.keyCode]) != s &&
				d != u &&
				c(f[l + Qi(d, e, !1)])
			)
				return !0;
		} else if (o && e.shiftKey && c(f[l + Qi(s, e, !0)])) return !0;
		if (c(f._any)) return !0;
	}
	return a;
}
const xh = !A.ios,
	ki = D.define({
		combine(n) {
			return _t(
				n,
				{ cursorBlinkRate: 1200, drawRangeCursor: !0 },
				{
					cursorBlinkRate: (e, t) => Math.min(e, t),
					drawRangeCursor: (e, t) => e || t
				}
			);
		}
	});
function ju(n = {}) {
	return [ki.of(n), Ku, Uu, Xa.of(!0)];
}
class vh {
	constructor(e, t, i, s, r) {
		(this.left = e),
			(this.top = t),
			(this.width = i),
			(this.height = s),
			(this.className = r);
	}
	draw() {
		let e = document.createElement("div");
		return (e.className = this.className), this.adjust(e), e;
	}
	adjust(e) {
		(e.style.left = this.left + "px"),
			(e.style.top = this.top + "px"),
			this.width >= 0 && (e.style.width = this.width + "px"),
			(e.style.height = this.height + "px");
	}
	eq(e) {
		return (
			this.left == e.left &&
			this.top == e.top &&
			this.width == e.width &&
			this.height == e.height &&
			this.className == e.className
		);
	}
}
const Ku = be.fromClass(
		class {
			constructor(n) {
				(this.view = n),
					(this.rangePieces = []),
					(this.cursors = []),
					(this.measureReq = {
						read: this.readPos.bind(this),
						write: this.drawSel.bind(this)
					}),
					(this.selectionLayer = n.scrollDOM.appendChild(
						document.createElement("div")
					)),
					(this.selectionLayer.className = "cm-selectionLayer"),
					this.selectionLayer.setAttribute("aria-hidden", "true"),
					(this.cursorLayer = n.scrollDOM.appendChild(
						document.createElement("div")
					)),
					(this.cursorLayer.className = "cm-cursorLayer"),
					this.cursorLayer.setAttribute("aria-hidden", "true"),
					n.requestMeasure(this.measureReq),
					this.setBlinkRate();
			}
			setBlinkRate() {
				this.cursorLayer.style.animationDuration =
					this.view.state.facet(ki).cursorBlinkRate + "ms";
			}
			update(n) {
				let e = n.startState.facet(ki) != n.state.facet(ki);
				(e || n.selectionSet || n.geometryChanged || n.viewportChanged) &&
					this.view.requestMeasure(this.measureReq),
					n.transactions.some((t) => t.scrollIntoView) &&
						(this.cursorLayer.style.animationName =
							this.cursorLayer.style.animationName == "cm-blink"
								? "cm-blink2"
								: "cm-blink"),
					e && this.setBlinkRate();
			}
			readPos() {
				let { state: n } = this.view,
					e = n.facet(ki),
					t = n.selection.ranges
						.map((s) => (s.empty ? [] : $u(this.view, s)))
						.reduce((s, r) => s.concat(r)),
					i = [];
				for (let s of n.selection.ranges) {
					let r = s == n.selection.main;
					if (s.empty ? !r || xh : e.drawRangeCursor) {
						let o = Gu(this.view, s, r);
						o && i.push(o);
					}
				}
				return { rangePieces: t, cursors: i };
			}
			drawSel({ rangePieces: n, cursors: e }) {
				if (
					n.length != this.rangePieces.length ||
					n.some((t, i) => !t.eq(this.rangePieces[i]))
				) {
					this.selectionLayer.textContent = "";
					for (let t of n) this.selectionLayer.appendChild(t.draw());
					this.rangePieces = n;
				}
				if (
					e.length != this.cursors.length ||
					e.some((t, i) => !t.eq(this.cursors[i]))
				) {
					let t = this.cursorLayer.children;
					if (t.length !== e.length) {
						this.cursorLayer.textContent = "";
						for (const i of e) this.cursorLayer.appendChild(i.draw());
					} else e.forEach((i, s) => i.adjust(t[s]));
					this.cursors = e;
				}
			}
			destroy() {
				this.selectionLayer.remove(), this.cursorLayer.remove();
			}
		}
	),
	Sh = {
		".cm-line": {
			"& ::selection": { backgroundColor: "transparent !important" },
			"&::selection": { backgroundColor: "transparent !important" }
		}
	};
xh && (Sh[".cm-line"].caretColor = "transparent !important");
const Uu = Vi.highest(O.theme(Sh));
function Ch(n) {
	let e = n.scrollDOM.getBoundingClientRect();
	return {
		left:
			(n.textDirection == Z.LTR ? e.left : e.right - n.scrollDOM.clientWidth) -
			n.scrollDOM.scrollLeft,
		top: e.top - n.scrollDOM.scrollTop
	};
}
function Go(n, e, t) {
	let i = k.cursor(e);
	return {
		from: Math.max(t.from, n.moveToLineBoundary(i, !1, !0).from),
		to: Math.min(t.to, n.moveToLineBoundary(i, !0, !0).from),
		type: W.Text
	};
}
function Jo(n, e) {
	let t = n.lineBlockAt(e);
	if (Array.isArray(t.type)) {
		for (let i of t.type)
			if (i.to > e || (i.to == e && (i.to == t.to || i.type == W.Text)))
				return i;
	}
	return t;
}
function $u(n, e) {
	if (e.to <= n.viewport.from || e.from >= n.viewport.to) return [];
	let t = Math.max(e.from, n.viewport.from),
		i = Math.min(e.to, n.viewport.to),
		s = n.textDirection == Z.LTR,
		r = n.contentDOM,
		o = r.getBoundingClientRect(),
		l = Ch(n),
		a = window.getComputedStyle(r.firstChild),
		h = o.left + parseInt(a.paddingLeft) + Math.min(0, parseInt(a.textIndent)),
		c = o.right - parseInt(a.paddingRight),
		f = Jo(n, t),
		u = Jo(n, i),
		d = f.type == W.Text ? f : null,
		p = u.type == W.Text ? u : null;
	if (
		(n.lineWrapping && (d && (d = Go(n, t, d)), p && (p = Go(n, i, p))),
		d && p && d.from == p.from)
	)
		return y(b(e.from, e.to, d));
	{
		let v = d ? b(e.from, null, d) : w(f, !1),
			S = p ? b(null, e.to, p) : w(u, !0),
			C = [];
		return (
			(d || f).to < (p || u).from - 1
				? C.push(g(h, v.bottom, c, S.top))
				: v.bottom < S.top &&
				  n.elementAtHeight((v.bottom + S.top) / 2).type == W.Text &&
				  (v.bottom = S.top = (v.bottom + S.top) / 2),
			y(v).concat(C).concat(y(S))
		);
	}
	function g(v, S, C, T) {
		return new vh(
			v - l.left,
			S - l.top - 0.01,
			C - v,
			T - S + 0.01,
			"cm-selectionBackground"
		);
	}
	function y({ top: v, bottom: S, horizontal: C }) {
		let T = [];
		for (let B = 0; B < C.length; B += 2) T.push(g(C[B], v, C[B + 1], S));
		return T;
	}
	function b(v, S, C) {
		let T = 1e9,
			B = -1e9,
			U = [];
		function I($, Q, M, G, Y) {
			let le = n.coordsAtPos($, $ == C.to ? -2 : 2),
				J = n.coordsAtPos(M, M == C.from ? 2 : -2);
			(T = Math.min(le.top, J.top, T)),
				(B = Math.max(le.bottom, J.bottom, B)),
				Y == Z.LTR
					? U.push(s && Q ? h : le.left, s && G ? c : J.right)
					: U.push(!s && G ? h : J.left, !s && Q ? c : le.right);
		}
		let P = v ?? C.from,
			V = S ?? C.to;
		for (let $ of n.visibleRanges)
			if ($.to > P && $.from < V)
				for (let Q = Math.max($.from, P), M = Math.min($.to, V); ; ) {
					let G = n.state.doc.lineAt(Q);
					for (let Y of n.bidiSpans(G)) {
						let le = Y.from + G.from,
							J = Y.to + G.from;
						if (le >= M) break;
						J > Q &&
							I(
								Math.max(le, Q),
								v == null && le <= P,
								Math.min(J, M),
								S == null && J >= V,
								Y.dir
							);
					}
					if (((Q = G.to + 1), Q >= M)) break;
				}
		return (
			U.length == 0 && I(P, v == null, V, S == null, n.textDirection),
			{ top: T, bottom: B, horizontal: U }
		);
	}
	function w(v, S) {
		let C = o.top + (S ? v.top : v.bottom);
		return { top: C, bottom: C, horizontal: [] };
	}
}
function Gu(n, e, t) {
	let i = n.coordsAtPos(e.head, e.assoc || 1);
	if (!i) return null;
	let s = Ch(n);
	return new vh(
		i.left - s.left,
		i.top - s.top,
		-1,
		i.bottom - i.top,
		t ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary"
	);
}
function Yo(n, e, t, i, s) {
	e.lastIndex = 0;
	for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length)
		if (!r.lineBreak) for (; (l = e.exec(r.value)); ) s(o + l.index, l);
}
function Ju(n, e) {
	let t = n.visibleRanges;
	if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to)
		return t;
	let i = [];
	for (let { from: s, to: r } of t)
		(s = Math.max(n.state.doc.lineAt(s).from, s - e)),
			(r = Math.min(n.state.doc.lineAt(r).to, r + e)),
			i.length && i[i.length - 1].to >= s
				? (i[i.length - 1].to = r)
				: i.push({ from: s, to: r });
	return i;
}
class Yu {
	constructor(e) {
		const {
			regexp: t,
			decoration: i,
			decorate: s,
			boundary: r,
			maxLength: o = 1e3
		} = e;
		if (!t.global)
			throw new RangeError(
				"The regular expression given to MatchDecorator should have its 'g' flag set"
			);
		if (((this.regexp = t), s))
			this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
		else if (typeof i == "function")
			this.addMatch = (l, a, h, c) => {
				let f = i(l, a, h);
				f && c(h, h + l[0].length, f);
			};
		else if (i) this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
		else
			throw new RangeError(
				"Either 'decorate' or 'decoration' should be provided to MatchDecorator"
			);
		(this.boundary = r), (this.maxLength = o);
	}
	createDeco(e) {
		let t = new Pt(),
			i = t.add.bind(t);
		for (let { from: s, to: r } of Ju(e, this.maxLength))
			Yo(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
		return t.finish();
	}
	updateDeco(e, t) {
		let i = 1e9,
			s = -1;
		return (
			e.docChanged &&
				e.changes.iterChanges((r, o, l, a) => {
					a > e.view.viewport.from &&
						l < e.view.viewport.to &&
						((i = Math.min(l, i)), (s = Math.max(a, s)));
				}),
			e.viewportChanged || s - i > 1e3
				? this.createDeco(e.view)
				: s > -1
				? this.updateRange(e.view, t.map(e.changes), i, s)
				: t
		);
	}
	updateRange(e, t, i, s) {
		for (let r of e.visibleRanges) {
			let o = Math.max(r.from, i),
				l = Math.min(r.to, s);
			if (l > o) {
				let a = e.state.doc.lineAt(o),
					h = a.to < l ? e.state.doc.lineAt(l) : a,
					c = Math.max(r.from, a.from),
					f = Math.min(r.to, h.to);
				if (this.boundary) {
					for (; o > a.from; o--)
						if (this.boundary.test(a.text[o - 1 - a.from])) {
							c = o;
							break;
						}
					for (; l < h.to; l++)
						if (this.boundary.test(h.text[l - h.from])) {
							f = l;
							break;
						}
				}
				let u = [],
					d,
					p = (g, y, b) => u.push(b.range(g, y));
				if (a == h)
					for (
						this.regexp.lastIndex = c - a.from;
						(d = this.regexp.exec(a.text)) && d.index < f - a.from;

					)
						this.addMatch(d, e, d.index + a.from, p);
				else
					Yo(e.state.doc, this.regexp, c, f, (g, y) =>
						this.addMatch(y, e, g, p)
					);
				t = t.update({
					filterFrom: c,
					filterTo: f,
					filter: (g, y) => g < c || y > f,
					add: u
				});
			}
		}
		return t;
	}
}
const or = /x/.unicode != null ? "gu" : "g",
	Xu = new RegExp(
		`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,
		or
	),
	Zu = {
		0: "null",
		7: "bell",
		8: "backspace",
		10: "newline",
		11: "vertical tab",
		13: "carriage return",
		27: "escape",
		8203: "zero width space",
		8204: "zero width non-joiner",
		8205: "zero width joiner",
		8206: "left-to-right mark",
		8207: "right-to-left mark",
		8232: "line separator",
		8237: "left-to-right override",
		8238: "right-to-left override",
		8294: "left-to-right isolate",
		8295: "right-to-left isolate",
		8297: "pop directional isolate",
		8233: "paragraph separator",
		65279: "zero width no-break space",
		65532: "object replacement"
	};
let as = null;
function Qu() {
	var n;
	if (as == null && typeof document < "u" && document.body) {
		let e = document.body.style;
		as = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
	}
	return as || !1;
}
const mn = D.define({
	combine(n) {
		let e = _t(n, { render: null, specialChars: Xu, addSpecialChars: null });
		return (
			(e.replaceTabs = !Qu()) &&
				(e.specialChars = new RegExp("	|" + e.specialChars.source, or)),
			e.addSpecialChars &&
				(e.specialChars = new RegExp(
					e.specialChars.source + "|" + e.addSpecialChars.source,
					or
				)),
			e
		);
	}
});
function ed(n = {}) {
	return [mn.of(n), td()];
}
let Xo = null;
function td() {
	return (
		Xo ||
		(Xo = be.fromClass(
			class {
				constructor(n) {
					(this.view = n),
						(this.decorations = E.none),
						(this.decorationCache = Object.create(null)),
						(this.decorator = this.makeDecorator(n.state.facet(mn))),
						(this.decorations = this.decorator.createDeco(n));
				}
				makeDecorator(n) {
					return new Yu({
						regexp: n.specialChars,
						decoration: (e, t, i) => {
							let { doc: s } = t.state,
								r = ge(e[0], 0);
							if (r == 9) {
								let o = s.lineAt(i),
									l = t.state.tabSize,
									a = Fi(o.text, l, i - o.from);
								return E.replace({
									widget: new rd(
										(l - (a % l)) * this.view.defaultCharacterWidth
									)
								});
							}
							return (
								this.decorationCache[r] ||
								(this.decorationCache[r] = E.replace({ widget: new sd(n, r) }))
							);
						},
						boundary: n.replaceTabs ? void 0 : /[^]/
					});
				}
				update(n) {
					let e = n.state.facet(mn);
					n.startState.facet(mn) != e
						? ((this.decorator = this.makeDecorator(e)),
						  (this.decorations = this.decorator.createDeco(n.view)))
						: (this.decorations = this.decorator.updateDeco(
								n,
								this.decorations
						  ));
				}
			},
			{ decorations: (n) => n.decorations }
		))
	);
}
const id = "•";
function nd(n) {
	return n >= 32 ? id : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class sd extends tt {
	constructor(e, t) {
		super(), (this.options = e), (this.code = t);
	}
	eq(e) {
		return e.code == this.code;
	}
	toDOM(e) {
		let t = nd(this.code),
			i =
				e.state.phrase("Control character") +
				" " +
				(Zu[this.code] || "0x" + this.code.toString(16)),
			s = this.options.render && this.options.render(this.code, i, t);
		if (s) return s;
		let r = document.createElement("span");
		return (
			(r.textContent = t),
			(r.title = i),
			r.setAttribute("aria-label", i),
			(r.className = "cm-specialChar"),
			r
		);
	}
	ignoreEvent() {
		return !1;
	}
}
class rd extends tt {
	constructor(e) {
		super(), (this.width = e);
	}
	eq(e) {
		return e.width == this.width;
	}
	toDOM() {
		let e = document.createElement("span");
		return (
			(e.textContent = "	"),
			(e.className = "cm-tab"),
			(e.style.width = this.width + "px"),
			e
		);
	}
	ignoreEvent() {
		return !1;
	}
}
class od extends tt {
	constructor(e) {
		super(), (this.content = e);
	}
	toDOM() {
		let e = document.createElement("span");
		return (
			(e.className = "cm-placeholder"),
			(e.style.pointerEvents = "none"),
			e.appendChild(
				typeof this.content == "string"
					? document.createTextNode(this.content)
					: this.content
			),
			typeof this.content == "string"
				? e.setAttribute("aria-label", "placeholder " + this.content)
				: e.setAttribute("aria-hidden", "true"),
			e
		);
	}
	ignoreEvent() {
		return !1;
	}
}
function ld(n) {
	return be.fromClass(
		class {
			constructor(e) {
				(this.view = e),
					(this.placeholder = E.set([
						E.widget({ widget: new od(n), side: 1 }).range(0)
					]));
			}
			get decorations() {
				return this.view.state.doc.length ? E.none : this.placeholder;
			}
		},
		{ decorations: (e) => e.decorations }
	);
}
const lr = 2e3;
function ad(n, e, t) {
	let i = Math.min(e.line, t.line),
		s = Math.max(e.line, t.line),
		r = [];
	if (e.off > lr || t.off > lr || e.col < 0 || t.col < 0) {
		let o = Math.min(e.off, t.off),
			l = Math.max(e.off, t.off);
		for (let a = i; a <= s; a++) {
			let h = n.doc.line(a);
			h.length <= l && r.push(k.range(h.from + o, h.to + l));
		}
	} else {
		let o = Math.min(e.col, t.col),
			l = Math.max(e.col, t.col);
		for (let a = i; a <= s; a++) {
			let h = n.doc.line(a),
				c = Hs(h.text, o, n.tabSize, !0);
			if (c < 0) r.push(k.cursor(h.to));
			else {
				let f = Hs(h.text, l, n.tabSize);
				r.push(k.range(h.from + c, h.from + f));
			}
		}
	}
	return r;
}
function hd(n, e) {
	let t = n.coordsAtPos(n.viewport.from);
	return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function Zo(n, e) {
	let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
		i = n.state.doc.lineAt(t),
		s = t - i.from,
		r =
			s > lr
				? -1
				: s == i.length
				? hd(n, e.clientX)
				: Fi(i.text, n.state.tabSize, t - i.from);
	return { line: i.number, col: r, off: s };
}
function cd(n, e) {
	let t = Zo(n, e),
		i = n.state.selection;
	return t
		? {
				update(s) {
					if (s.docChanged) {
						let r = s.changes.mapPos(s.startState.doc.line(t.line).from),
							o = s.state.doc.lineAt(r);
						(t = {
							line: o.number,
							col: t.col,
							off: Math.min(t.off, o.length)
						}),
							(i = i.map(s.changes));
					}
				},
				get(s, r, o) {
					let l = Zo(n, s);
					if (!l) return i;
					let a = ad(n.state, t, l);
					return a.length
						? o
							? k.create(a.concat(i.ranges))
							: k.create(a)
						: i;
				}
		  }
		: null;
}
function fd(n) {
	let e = n?.eventFilter || ((t) => t.altKey && t.button == 0);
	return O.mouseSelectionStyle.of((t, i) => (e(i) ? cd(t, i) : null));
}
const ud = {
		Alt: [18, (n) => n.altKey],
		Control: [17, (n) => n.ctrlKey],
		Shift: [16, (n) => n.shiftKey],
		Meta: [91, (n) => n.metaKey]
	},
	dd = { style: "cursor: crosshair" };
function pd(n = {}) {
	let [e, t] = ud[n.key || "Alt"],
		i = be.fromClass(
			class {
				constructor(s) {
					(this.view = s), (this.isDown = !1);
				}
				set(s) {
					this.isDown != s && ((this.isDown = s), this.view.update([]));
				}
			},
			{
				eventHandlers: {
					keydown(s) {
						this.set(s.keyCode == e || t(s));
					},
					keyup(s) {
						(s.keyCode == e || !t(s)) && this.set(!1);
					},
					mousemove(s) {
						this.set(t(s));
					}
				}
			}
		);
	return [
		i,
		O.contentAttributes.of((s) => {
			var r;
			return !((r = s.plugin(i)) === null || r === void 0) && r.isDown
				? dd
				: null;
		})
	];
}
const hs = "-10000px";
class Ah {
	constructor(e, t, i) {
		(this.facet = t),
			(this.createTooltipView = i),
			(this.input = e.state.facet(t)),
			(this.tooltips = this.input.filter((s) => s)),
			(this.tooltipViews = this.tooltips.map(i));
	}
	update(e) {
		var t;
		let i = e.state.facet(this.facet),
			s = i.filter((o) => o);
		if (i === this.input) {
			for (let o of this.tooltipViews) o.update && o.update(e);
			return !1;
		}
		let r = [];
		for (let o = 0; o < s.length; o++) {
			let l = s[o],
				a = -1;
			if (l) {
				for (let h = 0; h < this.tooltips.length; h++) {
					let c = this.tooltips[h];
					c && c.create == l.create && (a = h);
				}
				if (a < 0) r[o] = this.createTooltipView(l);
				else {
					let h = (r[o] = this.tooltipViews[a]);
					h.update && h.update(e);
				}
			}
		}
		for (let o of this.tooltipViews)
			r.indexOf(o) < 0 &&
				(o.dom.remove(), (t = o.destroy) === null || t === void 0 || t.call(o));
		return (this.input = i), (this.tooltips = s), (this.tooltipViews = r), !0;
	}
}
function md(n) {
	let { win: e } = n;
	return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const cs = D.define({
		combine: (n) => {
			var e, t, i;
			return {
				position: A.ios
					? "absolute"
					: ((e = n.find((s) => s.position)) === null || e === void 0
							? void 0
							: e.position) || "fixed",
				parent:
					((t = n.find((s) => s.parent)) === null || t === void 0
						? void 0
						: t.parent) || null,
				tooltipSpace:
					((i = n.find((s) => s.tooltipSpace)) === null || i === void 0
						? void 0
						: i.tooltipSpace) || md
			};
		}
	}),
	Mh = be.fromClass(
		class {
			constructor(n) {
				(this.view = n),
					(this.inView = !0),
					(this.lastTransaction = 0),
					(this.measureTimeout = -1);
				let e = n.state.facet(cs);
				(this.position = e.position),
					(this.parent = e.parent),
					(this.classes = n.themeClasses),
					this.createContainer(),
					(this.measureReq = {
						read: this.readMeasure.bind(this),
						write: this.writeMeasure.bind(this),
						key: this
					}),
					(this.manager = new Ah(n, Er, (t) => this.createTooltip(t))),
					(this.intersectionObserver =
						typeof IntersectionObserver == "function"
							? new IntersectionObserver(
									(t) => {
										Date.now() > this.lastTransaction - 50 &&
											t.length > 0 &&
											t[t.length - 1].intersectionRatio < 1 &&
											this.measureSoon();
									},
									{ threshold: [1] }
							  )
							: null),
					this.observeIntersection(),
					n.win.addEventListener(
						"resize",
						(this.measureSoon = this.measureSoon.bind(this))
					),
					this.maybeMeasure();
			}
			createContainer() {
				this.parent
					? ((this.container = document.createElement("div")),
					  (this.container.style.position = "relative"),
					  (this.container.className = this.view.themeClasses),
					  this.parent.appendChild(this.container))
					: (this.container = this.view.dom);
			}
			observeIntersection() {
				if (this.intersectionObserver) {
					this.intersectionObserver.disconnect();
					for (let n of this.manager.tooltipViews)
						this.intersectionObserver.observe(n.dom);
				}
			}
			measureSoon() {
				this.measureTimeout < 0 &&
					(this.measureTimeout = setTimeout(() => {
						(this.measureTimeout = -1), this.maybeMeasure();
					}, 50));
			}
			update(n) {
				n.transactions.length && (this.lastTransaction = Date.now());
				let e = this.manager.update(n);
				e && this.observeIntersection();
				let t = e || n.geometryChanged,
					i = n.state.facet(cs);
				if (i.position != this.position) {
					this.position = i.position;
					for (let s of this.manager.tooltipViews)
						s.dom.style.position = this.position;
					t = !0;
				}
				if (i.parent != this.parent) {
					this.parent && this.container.remove(),
						(this.parent = i.parent),
						this.createContainer();
					for (let s of this.manager.tooltipViews)
						this.container.appendChild(s.dom);
					t = !0;
				} else
					this.parent &&
						this.view.themeClasses != this.classes &&
						(this.classes = this.container.className = this.view.themeClasses);
				t && this.maybeMeasure();
			}
			createTooltip(n) {
				let e = n.create(this.view);
				if (
					(e.dom.classList.add("cm-tooltip"),
					n.arrow && !e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow"))
				) {
					let t = document.createElement("div");
					(t.className = "cm-tooltip-arrow"), e.dom.appendChild(t);
				}
				return (
					(e.dom.style.position = this.position),
					(e.dom.style.top = hs),
					this.container.appendChild(e.dom),
					e.mount && e.mount(this.view),
					e
				);
			}
			destroy() {
				var n, e;
				this.view.win.removeEventListener("resize", this.measureSoon);
				for (let t of this.manager.tooltipViews)
					t.dom.remove(), (n = t.destroy) === null || n === void 0 || n.call(t);
				(e = this.intersectionObserver) === null ||
					e === void 0 ||
					e.disconnect(),
					clearTimeout(this.measureTimeout);
			}
			readMeasure() {
				let n = this.view.dom.getBoundingClientRect();
				return {
					editor: n,
					parent: this.parent ? this.container.getBoundingClientRect() : n,
					pos: this.manager.tooltips.map((e, t) => {
						let i = this.manager.tooltipViews[t];
						return i.getCoords
							? i.getCoords(e.pos)
							: this.view.coordsAtPos(e.pos);
					}),
					size: this.manager.tooltipViews.map(({ dom: e }) =>
						e.getBoundingClientRect()
					),
					space: this.view.state.facet(cs).tooltipSpace(this.view)
				};
			}
			writeMeasure(n) {
				let { editor: e, space: t } = n,
					i = [];
				for (let s = 0; s < this.manager.tooltips.length; s++) {
					let r = this.manager.tooltips[s],
						o = this.manager.tooltipViews[s],
						{ dom: l } = o,
						a = n.pos[s],
						h = n.size[s];
					if (
						!a ||
						a.bottom <= Math.max(e.top, t.top) ||
						a.top >= Math.min(e.bottom, t.bottom) ||
						a.right < Math.max(e.left, t.left) - 0.1 ||
						a.left > Math.min(e.right, t.right) + 0.1
					) {
						l.style.top = hs;
						continue;
					}
					let c = r.arrow ? o.dom.querySelector(".cm-tooltip-arrow") : null,
						f = c ? 7 : 0,
						u = h.right - h.left,
						d = h.bottom - h.top,
						p = o.offset || yd,
						g = this.view.textDirection == Z.LTR,
						y =
							h.width > t.right - t.left
								? g
									? t.left
									: t.right - h.width
								: g
								? Math.min(a.left - (c ? 14 : 0) + p.x, t.right - u)
								: Math.max(t.left, a.left - u + (c ? 14 : 0) - p.x),
						b = !!r.above;
					!r.strictSide &&
						(b
							? a.top - (h.bottom - h.top) - p.y < t.top
							: a.bottom + (h.bottom - h.top) + p.y > t.bottom) &&
						b == t.bottom - a.bottom > a.top - t.top &&
						(b = !b);
					let w = b ? a.top - d - f - p.y : a.bottom + f + p.y,
						v = y + u;
					if (o.overlap !== !0)
						for (let S of i)
							S.left < v &&
								S.right > y &&
								S.top < w + d &&
								S.bottom > w &&
								(w = b ? S.top - d - 2 - f : S.bottom + f + 2);
					this.position == "absolute"
						? ((l.style.top = w - n.parent.top + "px"),
						  (l.style.left = y - n.parent.left + "px"))
						: ((l.style.top = w + "px"), (l.style.left = y + "px")),
						c &&
							(c.style.left = `${a.left + (g ? p.x : -p.x) - (y + 14 - 7)}px`),
						o.overlap !== !0 &&
							i.push({ left: y, top: w, right: v, bottom: w + d }),
						l.classList.toggle("cm-tooltip-above", b),
						l.classList.toggle("cm-tooltip-below", !b),
						o.positioned && o.positioned();
				}
			}
			maybeMeasure() {
				if (
					this.manager.tooltips.length &&
					(this.view.inView && this.view.requestMeasure(this.measureReq),
					this.inView != this.view.inView &&
						((this.inView = this.view.inView), !this.inView))
				)
					for (let n of this.manager.tooltipViews) n.dom.style.top = hs;
			}
		},
		{
			eventHandlers: {
				scroll() {
					this.maybeMeasure();
				}
			}
		}
	),
	gd = O.baseTheme({
		".cm-tooltip": { zIndex: 100 },
		"&light .cm-tooltip": {
			border: "1px solid #bbb",
			backgroundColor: "#f5f5f5"
		},
		"&light .cm-tooltip-section:not(:first-child)": {
			borderTop: "1px solid #bbb"
		},
		"&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" },
		".cm-tooltip-arrow": {
			height: "7px",
			width: `${7 * 2}px`,
			position: "absolute",
			zIndex: -1,
			overflow: "hidden",
			"&:before, &:after": {
				content: "''",
				position: "absolute",
				width: 0,
				height: 0,
				borderLeft: "7px solid transparent",
				borderRight: "7px solid transparent"
			},
			".cm-tooltip-above &": {
				bottom: "-7px",
				"&:before": { borderTop: "7px solid #bbb" },
				"&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" }
			},
			".cm-tooltip-below &": {
				top: "-7px",
				"&:before": { borderBottom: "7px solid #bbb" },
				"&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" }
			}
		},
		"&dark .cm-tooltip .cm-tooltip-arrow": {
			"&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" },
			"&:after": {
				borderTopColor: "transparent",
				borderBottomColor: "transparent"
			}
		}
	}),
	yd = { x: 0, y: 0 },
	Er = D.define({ enables: [Mh, gd] }),
	Tn = D.define();
class Rr {
	constructor(e) {
		(this.view = e),
			(this.mounted = !1),
			(this.dom = document.createElement("div")),
			this.dom.classList.add("cm-tooltip-hover"),
			(this.manager = new Ah(e, Tn, (t) => this.createHostedView(t)));
	}
	static create(e) {
		return new Rr(e);
	}
	createHostedView(e) {
		let t = e.create(this.view);
		return (
			t.dom.classList.add("cm-tooltip-section"),
			this.dom.appendChild(t.dom),
			this.mounted && t.mount && t.mount(this.view),
			t
		);
	}
	mount(e) {
		for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
		this.mounted = !0;
	}
	positioned() {
		for (let e of this.manager.tooltipViews) e.positioned && e.positioned();
	}
	update(e) {
		this.manager.update(e);
	}
}
const bd = Er.compute([Tn], (n) => {
	let e = n.facet(Tn).filter((t) => t);
	return e.length === 0
		? null
		: {
				pos: Math.min(...e.map((t) => t.pos)),
				end: Math.max(...e.filter((t) => t.end != null).map((t) => t.end)),
				create: Rr.create,
				above: e[0].above,
				arrow: e.some((t) => t.arrow)
		  };
});
class wd {
	constructor(e, t, i, s, r) {
		(this.view = e),
			(this.source = t),
			(this.field = i),
			(this.setHover = s),
			(this.hoverTime = r),
			(this.hoverTimeout = -1),
			(this.restartTimeout = -1),
			(this.pending = null),
			(this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
			(this.checkHover = this.checkHover.bind(this)),
			e.dom.addEventListener(
				"mouseleave",
				(this.mouseleave = this.mouseleave.bind(this))
			),
			e.dom.addEventListener(
				"mousemove",
				(this.mousemove = this.mousemove.bind(this))
			);
	}
	update() {
		this.pending &&
			((this.pending = null),
			clearTimeout(this.restartTimeout),
			(this.restartTimeout = setTimeout(() => this.startHover(), 20)));
	}
	get active() {
		return this.view.state.field(this.field);
	}
	checkHover() {
		if (((this.hoverTimeout = -1), this.active)) return;
		let e = Date.now() - this.lastMove.time;
		e < this.hoverTime
			? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
			: this.startHover();
	}
	startHover() {
		clearTimeout(this.restartTimeout);
		let { lastMove: e } = this,
			t = this.view.contentDOM.contains(e.target)
				? this.view.posAtCoords(e)
				: null;
		if (t == null) return;
		let i = this.view.coordsAtPos(t);
		if (
			i == null ||
			e.y < i.top ||
			e.y > i.bottom ||
			e.x < i.left - this.view.defaultCharacterWidth ||
			e.x > i.right + this.view.defaultCharacterWidth
		)
			return;
		let s = this.view
				.bidiSpans(this.view.state.doc.lineAt(t))
				.find((l) => l.from <= t && l.to >= t),
			r = s && s.dir == Z.RTL ? -1 : 1,
			o = this.source(this.view, t, e.x < i.left ? -r : r);
		if (o?.then) {
			let l = (this.pending = { pos: t });
			o.then(
				(a) => {
					this.pending == l &&
						((this.pending = null),
						a && this.view.dispatch({ effects: this.setHover.of(a) }));
				},
				(a) => He(this.view.state, a, "hover tooltip")
			);
		} else o && this.view.dispatch({ effects: this.setHover.of(o) });
	}
	mousemove(e) {
		var t;
		(this.lastMove = {
			x: e.clientX,
			y: e.clientY,
			target: e.target,
			time: Date.now()
		}),
			this.hoverTimeout < 0 &&
				(this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
		let i = this.active;
		if ((i && !kd(this.lastMove.target)) || this.pending) {
			let { pos: s } = i || this.pending,
				r = (t = i?.end) !== null && t !== void 0 ? t : s;
			(s == r
				? this.view.posAtCoords(this.lastMove) != s
				: !xd(this.view, s, r, e.clientX, e.clientY, 6)) &&
				(this.view.dispatch({ effects: this.setHover.of(null) }),
				(this.pending = null));
		}
	}
	mouseleave() {
		clearTimeout(this.hoverTimeout),
			(this.hoverTimeout = -1),
			this.active && this.view.dispatch({ effects: this.setHover.of(null) });
	}
	destroy() {
		clearTimeout(this.hoverTimeout),
			this.view.dom.removeEventListener("mouseleave", this.mouseleave),
			this.view.dom.removeEventListener("mousemove", this.mousemove);
	}
}
function kd(n) {
	for (let e = n; e; e = e.parentNode)
		if (e.nodeType == 1 && e.classList.contains("cm-tooltip")) return !0;
	return !1;
}
function xd(n, e, t, i, s, r) {
	let o = document.createRange(),
		l = n.domAtPos(e),
		a = n.domAtPos(t);
	o.setEnd(a.node, a.offset), o.setStart(l.node, l.offset);
	let h = o.getClientRects();
	o.detach();
	for (let c = 0; c < h.length; c++) {
		let f = h[c];
		if (Math.max(f.top - s, s - f.bottom, f.left - i, i - f.right) <= r)
			return !0;
	}
	return !1;
}
function vd(n, e = {}) {
	let t = R.define(),
		i = Me.define({
			create() {
				return null;
			},
			update(s, r) {
				if (
					s &&
					((e.hideOnChange && (r.docChanged || r.selection)) ||
						(e.hideOn && e.hideOn(r, s)))
				)
					return null;
				if (s && r.docChanged) {
					let o = r.changes.mapPos(s.pos, -1, ce.TrackDel);
					if (o == null) return null;
					let l = Object.assign(Object.create(null), s);
					(l.pos = o),
						s.end != null && (l.end = r.changes.mapPos(s.end)),
						(s = l);
				}
				for (let o of r.effects)
					o.is(t) && (s = o.value), o.is(Cd) && (s = null);
				return s;
			},
			provide: (s) => Tn.from(s)
		});
	return [i, be.define((s) => new wd(s, n, i, t, e.hoverTime || 300)), bd];
}
function Sd(n, e) {
	let t = n.plugin(Mh);
	if (!t) return null;
	let i = t.manager.tooltips.indexOf(e);
	return i < 0 ? null : t.manager.tooltipViews[i];
}
const Cd = R.define(),
	Qo = D.define({
		combine(n) {
			let e, t;
			for (let i of n) (e = e || i.topContainer), (t = t || i.bottomContainer);
			return { topContainer: e, bottomContainer: t };
		}
	});
function Ad(n, e) {
	let t = n.plugin(Dh),
		i = t ? t.specs.indexOf(e) : -1;
	return i > -1 ? t.panels[i] : null;
}
const Dh = be.fromClass(
	class {
		constructor(n) {
			(this.input = n.state.facet(ar)),
				(this.specs = this.input.filter((t) => t)),
				(this.panels = this.specs.map((t) => t(n)));
			let e = n.state.facet(Qo);
			(this.top = new en(n, !0, e.topContainer)),
				(this.bottom = new en(n, !1, e.bottomContainer)),
				this.top.sync(this.panels.filter((t) => t.top)),
				this.bottom.sync(this.panels.filter((t) => !t.top));
			for (let t of this.panels)
				t.dom.classList.add("cm-panel"), t.mount && t.mount();
		}
		update(n) {
			let e = n.state.facet(Qo);
			this.top.container != e.topContainer &&
				(this.top.sync([]), (this.top = new en(n.view, !0, e.topContainer))),
				this.bottom.container != e.bottomContainer &&
					(this.bottom.sync([]),
					(this.bottom = new en(n.view, !1, e.bottomContainer))),
				this.top.syncClasses(),
				this.bottom.syncClasses();
			let t = n.state.facet(ar);
			if (t != this.input) {
				let i = t.filter((a) => a),
					s = [],
					r = [],
					o = [],
					l = [];
				for (let a of i) {
					let h = this.specs.indexOf(a),
						c;
					h < 0
						? ((c = a(n.view)), l.push(c))
						: ((c = this.panels[h]), c.update && c.update(n)),
						s.push(c),
						(c.top ? r : o).push(c);
				}
				(this.specs = i),
					(this.panels = s),
					this.top.sync(r),
					this.bottom.sync(o);
				for (let a of l) a.dom.classList.add("cm-panel"), a.mount && a.mount();
			} else for (let i of this.panels) i.update && i.update(n);
		}
		destroy() {
			this.top.sync([]), this.bottom.sync([]);
		}
	},
	{
		provide: (n) =>
			O.scrollMargins.of((e) => {
				let t = e.plugin(n);
				return (
					t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() }
				);
			})
	}
);
class en {
	constructor(e, t, i) {
		(this.view = e),
			(this.top = t),
			(this.container = i),
			(this.dom = void 0),
			(this.classes = ""),
			(this.panels = []),
			this.syncClasses();
	}
	sync(e) {
		for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
		(this.panels = e), this.syncDOM();
	}
	syncDOM() {
		if (this.panels.length == 0) {
			this.dom && (this.dom.remove(), (this.dom = void 0));
			return;
		}
		if (!this.dom) {
			(this.dom = document.createElement("div")),
				(this.dom.className = this.top
					? "cm-panels cm-panels-top"
					: "cm-panels cm-panels-bottom"),
				(this.dom.style[this.top ? "top" : "bottom"] = "0");
			let t = this.container || this.view.dom;
			t.insertBefore(this.dom, this.top ? t.firstChild : null);
		}
		let e = this.dom.firstChild;
		for (let t of this.panels)
			if (t.dom.parentNode == this.dom) {
				for (; e != t.dom; ) e = el(e);
				e = e.nextSibling;
			} else this.dom.insertBefore(t.dom, e);
		for (; e; ) e = el(e);
	}
	scrollMargin() {
		return !this.dom || this.container
			? 0
			: Math.max(
					0,
					this.top
						? this.dom.getBoundingClientRect().bottom -
								Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
						: Math.min(
								innerHeight,
								this.view.scrollDOM.getBoundingClientRect().bottom
						  ) - this.dom.getBoundingClientRect().top
			  );
	}
	syncClasses() {
		if (!(!this.container || this.classes == this.view.themeClasses)) {
			for (let e of this.classes.split(" "))
				e && this.container.classList.remove(e);
			for (let e of (this.classes = this.view.themeClasses).split(" "))
				e && this.container.classList.add(e);
		}
	}
}
function el(n) {
	let e = n.nextSibling;
	return n.remove(), e;
}
const ar = D.define({ enables: Dh });
class bt extends Bt {
	compare(e) {
		return this == e || (this.constructor == e.constructor && this.eq(e));
	}
	eq(e) {
		return !1;
	}
	destroy(e) {}
}
bt.prototype.elementClass = "";
bt.prototype.toDOM = void 0;
bt.prototype.mapMode = ce.TrackBefore;
bt.prototype.startSide = bt.prototype.endSide = -1;
bt.prototype.point = !0;
const fs = D.define(),
	Md = {
		class: "",
		renderEmptyElements: !1,
		elementStyle: "",
		markers: () => F.empty,
		lineMarker: () => null,
		lineMarkerChange: null,
		initialSpacer: null,
		updateSpacer: null,
		domEventHandlers: {}
	},
	Ci = D.define();
function Dd(n) {
	return [Th(), Ci.of(Object.assign(Object.assign({}, Md), n))];
}
const hr = D.define({ combine: (n) => n.some((e) => e) });
function Th(n) {
	let e = [Td];
	return n && n.fixed === !1 && e.push(hr.of(!0)), e;
}
const Td = be.fromClass(
	class {
		constructor(n) {
			(this.view = n),
				(this.prevViewport = n.viewport),
				(this.dom = document.createElement("div")),
				(this.dom.className = "cm-gutters"),
				this.dom.setAttribute("aria-hidden", "true"),
				(this.dom.style.minHeight = this.view.contentHeight + "px"),
				(this.gutters = n.state.facet(Ci).map((e) => new il(n, e)));
			for (let e of this.gutters) this.dom.appendChild(e.dom);
			(this.fixed = !n.state.facet(hr)),
				this.fixed && (this.dom.style.position = "sticky"),
				this.syncGutters(!1),
				n.scrollDOM.insertBefore(this.dom, n.contentDOM);
		}
		update(n) {
			if (this.updateGutters(n)) {
				let e = this.prevViewport,
					t = n.view.viewport,
					i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
				this.syncGutters(i < (t.to - t.from) * 0.8);
			}
			n.geometryChanged &&
				(this.dom.style.minHeight = this.view.contentHeight + "px"),
				this.view.state.facet(hr) != !this.fixed &&
					((this.fixed = !this.fixed),
					(this.dom.style.position = this.fixed ? "sticky" : "")),
				(this.prevViewport = n.view.viewport);
		}
		syncGutters(n) {
			let e = this.dom.nextSibling;
			n && this.dom.remove();
			let t = F.iter(this.view.state.facet(fs), this.view.viewport.from),
				i = [],
				s = this.gutters.map(
					(r) => new Od(r, this.view.viewport, -this.view.documentPadding.top)
				);
			for (let r of this.view.viewportLineBlocks) {
				let o;
				if (Array.isArray(r.type)) {
					for (let l of r.type)
						if (l.type == W.Text) {
							o = l;
							break;
						}
				} else o = r.type == W.Text ? r : void 0;
				if (o) {
					i.length && (i = []), Oh(t, i, r.from);
					for (let l of s) l.line(this.view, o, i);
				}
			}
			for (let r of s) r.finish();
			n && this.view.scrollDOM.insertBefore(this.dom, e);
		}
		updateGutters(n) {
			let e = n.startState.facet(Ci),
				t = n.state.facet(Ci),
				i =
					n.docChanged ||
					n.heightChanged ||
					n.viewportChanged ||
					!F.eq(
						n.startState.facet(fs),
						n.state.facet(fs),
						n.view.viewport.from,
						n.view.viewport.to
					);
			if (e == t) for (let s of this.gutters) s.update(n) && (i = !0);
			else {
				i = !0;
				let s = [];
				for (let r of t) {
					let o = e.indexOf(r);
					o < 0
						? s.push(new il(this.view, r))
						: (this.gutters[o].update(n), s.push(this.gutters[o]));
				}
				for (let r of this.gutters)
					r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
				for (let r of s) this.dom.appendChild(r.dom);
				this.gutters = s;
			}
			return i;
		}
		destroy() {
			for (let n of this.gutters) n.destroy();
			this.dom.remove();
		}
	},
	{
		provide: (n) =>
			O.scrollMargins.of((e) => {
				let t = e.plugin(n);
				return !t || t.gutters.length == 0 || !t.fixed
					? null
					: e.textDirection == Z.LTR
					? { left: t.dom.offsetWidth }
					: { right: t.dom.offsetWidth };
			})
	}
);
function tl(n) {
	return Array.isArray(n) ? n : [n];
}
function Oh(n, e, t) {
	for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class Od {
	constructor(e, t, i) {
		(this.gutter = e),
			(this.height = i),
			(this.localMarkers = []),
			(this.i = 0),
			(this.cursor = F.iter(e.markers, t.from));
	}
	line(e, t, i) {
		this.localMarkers.length && (this.localMarkers = []),
			Oh(this.cursor, this.localMarkers, t.from);
		let s = i.length ? this.localMarkers.concat(i) : this.localMarkers,
			r = this.gutter.config.lineMarker(e, t, s);
		r && s.unshift(r);
		let o = this.gutter;
		if (s.length == 0 && !o.config.renderEmptyElements) return;
		let l = t.top - this.height;
		if (this.i == o.elements.length) {
			let a = new Bh(e, t.height, l, s);
			o.elements.push(a), o.dom.appendChild(a.dom);
		} else o.elements[this.i].update(e, t.height, l, s);
		(this.height = t.bottom), this.i++;
	}
	finish() {
		let e = this.gutter;
		for (; e.elements.length > this.i; ) {
			let t = e.elements.pop();
			e.dom.removeChild(t.dom), t.destroy();
		}
	}
}
class il {
	constructor(e, t) {
		(this.view = e),
			(this.config = t),
			(this.elements = []),
			(this.spacer = null),
			(this.dom = document.createElement("div")),
			(this.dom.className =
				"cm-gutter" + (this.config.class ? " " + this.config.class : ""));
		for (let i in t.domEventHandlers)
			this.dom.addEventListener(i, (s) => {
				let r = e.lineBlockAtHeight(s.clientY - e.documentTop);
				t.domEventHandlers[i](e, r, s) && s.preventDefault();
			});
		(this.markers = tl(t.markers(e))),
			t.initialSpacer &&
				((this.spacer = new Bh(e, 0, 0, [t.initialSpacer(e)])),
				this.dom.appendChild(this.spacer.dom),
				(this.spacer.dom.style.cssText +=
					"visibility: hidden; pointer-events: none"));
	}
	update(e) {
		let t = this.markers;
		if (
			((this.markers = tl(this.config.markers(e.view))),
			this.spacer && this.config.updateSpacer)
		) {
			let s = this.config.updateSpacer(this.spacer.markers[0], e);
			s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
		}
		let i = e.view.viewport;
		return (
			!F.eq(this.markers, t, i.from, i.to) ||
			(this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
		);
	}
	destroy() {
		for (let e of this.elements) e.destroy();
	}
}
class Bh {
	constructor(e, t, i, s) {
		(this.height = -1),
			(this.above = 0),
			(this.markers = []),
			(this.dom = document.createElement("div")),
			(this.dom.className = "cm-gutterElement"),
			this.update(e, t, i, s);
	}
	update(e, t, i, s) {
		this.height != t && (this.dom.style.height = (this.height = t) + "px"),
			this.above != i &&
				(this.dom.style.marginTop = (this.above = i) ? i + "px" : ""),
			Bd(this.markers, s) || this.setMarkers(e, s);
	}
	setMarkers(e, t) {
		let i = "cm-gutterElement",
			s = this.dom.firstChild;
		for (let r = 0, o = 0; ; ) {
			let l = o,
				a = r < t.length ? t[r++] : null,
				h = !1;
			if (a) {
				let c = a.elementClass;
				c && (i += " " + c);
				for (let f = o; f < this.markers.length; f++)
					if (this.markers[f].compare(a)) {
						(l = f), (h = !0);
						break;
					}
			} else l = this.markers.length;
			for (; o < l; ) {
				let c = this.markers[o++];
				if (c.toDOM) {
					c.destroy(s);
					let f = s.nextSibling;
					s.remove(), (s = f);
				}
			}
			if (!a) break;
			a.toDOM &&
				(h ? (s = s.nextSibling) : this.dom.insertBefore(a.toDOM(e), s)),
				h && o++;
		}
		(this.dom.className = i), (this.markers = t);
	}
	destroy() {
		this.setMarkers(null, []);
	}
}
function Bd(n, e) {
	if (n.length != e.length) return !1;
	for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return !1;
	return !0;
}
const Pd = D.define(),
	zt = D.define({
		combine(n) {
			return _t(
				n,
				{ formatNumber: String, domEventHandlers: {} },
				{
					domEventHandlers(e, t) {
						let i = Object.assign({}, e);
						for (let s in t) {
							let r = i[s],
								o = t[s];
							i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
						}
						return i;
					}
				}
			);
		}
	});
class us extends bt {
	constructor(e) {
		super(), (this.number = e);
	}
	eq(e) {
		return this.number == e.number;
	}
	toDOM() {
		return document.createTextNode(this.number);
	}
}
function ds(n, e) {
	return n.state.facet(zt).formatNumber(e, n.state);
}
const Ed = Ci.compute([zt], (n) => ({
	class: "cm-lineNumbers",
	renderEmptyElements: !1,
	markers(e) {
		return e.state.facet(Pd);
	},
	lineMarker(e, t, i) {
		return i.some((s) => s.toDOM)
			? null
			: new us(ds(e, e.state.doc.lineAt(t.from).number));
	},
	lineMarkerChange: (e) => e.startState.facet(zt) != e.state.facet(zt),
	initialSpacer(e) {
		return new us(ds(e, nl(e.state.doc.lines)));
	},
	updateSpacer(e, t) {
		let i = ds(t.view, nl(t.view.state.doc.lines));
		return i == e.number ? e : new us(i);
	},
	domEventHandlers: n.facet(zt).domEventHandlers
}));
function Rd(n = {}) {
	return [zt.of(n), Th(), Ed];
}
function nl(n) {
	let e = 9;
	for (; e < n; ) e = e * 10 + 9;
	return e;
}
const Ld = 1024;
let Id = 0;
class Le {
	constructor(e, t) {
		(this.from = e), (this.to = t);
	}
}
class L {
	constructor(e = {}) {
		(this.id = Id++),
			(this.perNode = !!e.perNode),
			(this.deserialize =
				e.deserialize ||
				(() => {
					throw new Error(
						"This node type doesn't define a deserialize function"
					);
				}));
	}
	add(e) {
		if (this.perNode)
			throw new RangeError("Can't add per-node props to node types");
		return (
			typeof e != "function" && (e = ve.match(e)),
			(t) => {
				let i = e(t);
				return i === void 0 ? null : [this, i];
			}
		);
	}
}
L.closedBy = new L({ deserialize: (n) => n.split(" ") });
L.openedBy = new L({ deserialize: (n) => n.split(" ") });
L.group = new L({ deserialize: (n) => n.split(" ") });
L.contextHash = new L({ perNode: !0 });
L.lookAhead = new L({ perNode: !0 });
L.mounted = new L({ perNode: !0 });
class Nd {
	constructor(e, t, i) {
		(this.tree = e), (this.overlay = t), (this.parser = i);
	}
}
const _d = Object.create(null);
class ve {
	constructor(e, t, i, s = 0) {
		(this.name = e), (this.props = t), (this.id = i), (this.flags = s);
	}
	static define(e) {
		let t = e.props && e.props.length ? Object.create(null) : _d,
			i =
				(e.top ? 1 : 0) |
				(e.skipped ? 2 : 0) |
				(e.error ? 4 : 0) |
				(e.name == null ? 8 : 0),
			s = new ve(e.name || "", t, e.id, i);
		if (e.props) {
			for (let r of e.props)
				if ((Array.isArray(r) || (r = r(s)), r)) {
					if (r[0].perNode)
						throw new RangeError("Can't store a per-node prop on a node type");
					t[r[0].id] = r[1];
				}
		}
		return s;
	}
	prop(e) {
		return this.props[e.id];
	}
	get isTop() {
		return (this.flags & 1) > 0;
	}
	get isSkipped() {
		return (this.flags & 2) > 0;
	}
	get isError() {
		return (this.flags & 4) > 0;
	}
	get isAnonymous() {
		return (this.flags & 8) > 0;
	}
	is(e) {
		if (typeof e == "string") {
			if (this.name == e) return !0;
			let t = this.prop(L.group);
			return t ? t.indexOf(e) > -1 : !1;
		}
		return this.id == e;
	}
	static match(e) {
		let t = Object.create(null);
		for (let i in e) for (let s of i.split(" ")) t[s] = e[i];
		return (i) => {
			for (let s = i.prop(L.group), r = -1; r < (s ? s.length : 0); r++) {
				let o = t[r < 0 ? i.name : s[r]];
				if (o) return o;
			}
		};
	}
}
ve.none = new ve("", Object.create(null), 0, 8);
class Lr {
	constructor(e) {
		this.types = e;
		for (let t = 0; t < e.length; t++)
			if (e[t].id != t)
				throw new RangeError(
					"Node type ids should correspond to array positions when creating a node set"
				);
	}
	extend(...e) {
		let t = [];
		for (let i of this.types) {
			let s = null;
			for (let r of e) {
				let o = r(i);
				o && (s || (s = Object.assign({}, i.props)), (s[o[0].id] = o[1]));
			}
			t.push(s ? new ve(i.name, s, i.id, i.flags) : i);
		}
		return new Lr(t);
	}
}
const tn = new WeakMap(),
	sl = new WeakMap();
var ee;
(function (n) {
	(n[(n.ExcludeBuffers = 1)] = "ExcludeBuffers"),
		(n[(n.IncludeAnonymous = 2)] = "IncludeAnonymous"),
		(n[(n.IgnoreMounts = 4)] = "IgnoreMounts"),
		(n[(n.IgnoreOverlays = 8)] = "IgnoreOverlays");
})(ee || (ee = {}));
class z {
	constructor(e, t, i, s, r) {
		if (
			((this.type = e),
			(this.children = t),
			(this.positions = i),
			(this.length = s),
			(this.props = null),
			r && r.length)
		) {
			this.props = Object.create(null);
			for (let [o, l] of r) this.props[typeof o == "number" ? o : o.id] = l;
		}
	}
	toString() {
		let e = this.prop(L.mounted);
		if (e && !e.overlay) return e.tree.toString();
		let t = "";
		for (let i of this.children) {
			let s = i.toString();
			s && (t && (t += ","), (t += s));
		}
		return this.type.name
			? (/\W/.test(this.type.name) && !this.type.isError
					? JSON.stringify(this.type.name)
					: this.type.name) + (t.length ? "(" + t + ")" : "")
			: t;
	}
	cursor(e = 0) {
		return new Ri(this.topNode, e);
	}
	cursorAt(e, t = 0, i = 0) {
		let s = tn.get(this) || this.topNode,
			r = new Ri(s);
		return r.moveTo(e, t), tn.set(this, r._tree), r;
	}
	get topNode() {
		return new _e(this, 0, 0, null);
	}
	resolve(e, t = 0) {
		let i = ei(tn.get(this) || this.topNode, e, t, !1);
		return tn.set(this, i), i;
	}
	resolveInner(e, t = 0) {
		let i = ei(sl.get(this) || this.topNode, e, t, !0);
		return sl.set(this, i), i;
	}
	iterate(e) {
		let { enter: t, leave: i, from: s = 0, to: r = this.length } = e;
		for (let o = this.cursor((e.mode || 0) | ee.IncludeAnonymous); ; ) {
			let l = !1;
			if (o.from <= r && o.to >= s && (o.type.isAnonymous || t(o) !== !1)) {
				if (o.firstChild()) continue;
				l = !0;
			}
			for (; l && i && !o.type.isAnonymous && i(o), !o.nextSibling(); ) {
				if (!o.parent()) return;
				l = !0;
			}
		}
	}
	prop(e) {
		return e.perNode
			? this.props
				? this.props[e.id]
				: void 0
			: this.type.prop(e);
	}
	get propValues() {
		let e = [];
		if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
		return e;
	}
	balance(e = {}) {
		return this.children.length <= 8
			? this
			: _r(
					ve.none,
					this.children,
					this.positions,
					0,
					this.children.length,
					0,
					this.length,
					(t, i, s) => new z(this.type, t, i, s, this.propValues),
					e.makeTree || ((t, i, s) => new z(ve.none, t, i, s))
			  );
	}
	static build(e) {
		return Fd(e);
	}
}
z.empty = new z(ve.none, [], [], 0);
class Ir {
	constructor(e, t) {
		(this.buffer = e), (this.index = t);
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	get pos() {
		return this.index;
	}
	next() {
		this.index -= 4;
	}
	fork() {
		return new Ir(this.buffer, this.index);
	}
}
class Vt {
	constructor(e, t, i) {
		(this.buffer = e), (this.length = t), (this.set = i);
	}
	get type() {
		return ve.none;
	}
	toString() {
		let e = [];
		for (let t = 0; t < this.buffer.length; )
			e.push(this.childString(t)), (t = this.buffer[t + 3]);
		return e.join(",");
	}
	childString(e) {
		let t = this.buffer[e],
			i = this.buffer[e + 3],
			s = this.set.types[t],
			r = s.name;
		if (
			(/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), (e += 4), i == e)
		)
			return r;
		let o = [];
		for (; e < i; ) o.push(this.childString(e)), (e = this.buffer[e + 3]);
		return r + "(" + o.join(",") + ")";
	}
	findChild(e, t, i, s, r) {
		let { buffer: o } = this,
			l = -1;
		for (
			let a = e;
			a != t && !(Ph(r, s, o[a + 1], o[a + 2]) && ((l = a), i > 0));
			a = o[a + 3]
		);
		return l;
	}
	slice(e, t, i) {
		let s = this.buffer,
			r = new Uint16Array(t - e),
			o = 0;
		for (let l = e, a = 0; l < t; ) {
			(r[a++] = s[l++]), (r[a++] = s[l++] - i);
			let h = (r[a++] = s[l++] - i);
			(r[a++] = s[l++] - e), (o = Math.max(o, h));
		}
		return new Vt(r, o, this.set);
	}
}
function Ph(n, e, t, i) {
	switch (n) {
		case -2:
			return t < e;
		case -1:
			return i >= e && t < e;
		case 0:
			return t < e && i > e;
		case 1:
			return t <= e && i > e;
		case 2:
			return i > e;
		case 4:
			return !0;
	}
}
function Eh(n, e) {
	let t = n.childBefore(e);
	for (; t; ) {
		let i = t.lastChild;
		if (!i || i.to != t.to) break;
		i.type.isError && i.from == i.to ? ((n = t), (t = i.prevSibling)) : (t = i);
	}
	return n;
}
function ei(n, e, t, i) {
	for (
		var s;
		n.from == n.to ||
		(t < 1 ? n.from >= e : n.from > e) ||
		(t > -1 ? n.to <= e : n.to < e);

	) {
		let o = !i && n instanceof _e && n.index < 0 ? null : n.parent;
		if (!o) return n;
		n = o;
	}
	let r = i ? 0 : ee.IgnoreOverlays;
	if (i)
		for (let o = n, l = o.parent; l; o = l, l = o.parent)
			o instanceof _e &&
				o.index < 0 &&
				((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) !=
					o.from &&
				(n = l);
	for (;;) {
		let o = n.enter(e, t, r);
		if (!o) return n;
		n = o;
	}
}
class _e {
	constructor(e, t, i, s) {
		(this._tree = e), (this.from = t), (this.index = i), (this._parent = s);
	}
	get type() {
		return this._tree.type;
	}
	get name() {
		return this._tree.type.name;
	}
	get to() {
		return this.from + this._tree.length;
	}
	nextChild(e, t, i, s, r = 0) {
		for (let o = this; ; ) {
			for (
				let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1;
				e != h;
				e += t
			) {
				let c = l[e],
					f = a[e] + o.from;
				if (Ph(s, i, f, f + c.length)) {
					if (c instanceof Vt) {
						if (r & ee.ExcludeBuffers) continue;
						let u = c.findChild(0, c.buffer.length, t, i - f, s);
						if (u > -1) return new Ye(new Vd(o, c, e, f), null, u);
					} else if (r & ee.IncludeAnonymous || !c.type.isAnonymous || Nr(c)) {
						let u;
						if (
							!(r & ee.IgnoreMounts) &&
							c.props &&
							(u = c.prop(L.mounted)) &&
							!u.overlay
						)
							return new _e(u.tree, f, e, o);
						let d = new _e(c, f, e, o);
						return r & ee.IncludeAnonymous || !d.type.isAnonymous
							? d
							: d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s);
					}
				}
			}
			if (
				r & ee.IncludeAnonymous ||
				!o.type.isAnonymous ||
				(o.index >= 0
					? (e = o.index + t)
					: (e = t < 0 ? -1 : o._parent._tree.children.length),
				(o = o._parent),
				!o)
			)
				return null;
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4);
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
	}
	childAfter(e) {
		return this.nextChild(0, 1, e, 2);
	}
	childBefore(e) {
		return this.nextChild(this._tree.children.length - 1, -1, e, -2);
	}
	enter(e, t, i = 0) {
		let s;
		if (
			!(i & ee.IgnoreOverlays) &&
			(s = this._tree.prop(L.mounted)) &&
			s.overlay
		) {
			let r = e - this.from;
			for (let { from: o, to: l } of s.overlay)
				if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
					return new _e(s.tree, s.overlay[0].from + this.from, -1, this);
		}
		return this.nextChild(0, 1, e, t, i);
	}
	nextSignificantParent() {
		let e = this;
		for (; e.type.isAnonymous && e._parent; ) e = e._parent;
		return e;
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null;
	}
	get nextSibling() {
		return this._parent && this.index >= 0
			? this._parent.nextChild(this.index + 1, 1, 0, 4)
			: null;
	}
	get prevSibling() {
		return this._parent && this.index >= 0
			? this._parent.nextChild(this.index - 1, -1, 0, 4)
			: null;
	}
	cursor(e = 0) {
		return new Ri(this, e);
	}
	get tree() {
		return this._tree;
	}
	toTree() {
		return this._tree;
	}
	resolve(e, t = 0) {
		return ei(this, e, t, !1);
	}
	resolveInner(e, t = 0) {
		return ei(this, e, t, !0);
	}
	enterUnfinishedNodesBefore(e) {
		return Eh(this, e);
	}
	getChild(e, t = null, i = null) {
		let s = On(this, e, t, i);
		return s.length ? s[0] : null;
	}
	getChildren(e, t = null, i = null) {
		return On(this, e, t, i);
	}
	toString() {
		return this._tree.toString();
	}
	get node() {
		return this;
	}
	matchContext(e) {
		return Bn(this, e);
	}
}
function On(n, e, t, i) {
	let s = n.cursor(),
		r = [];
	if (!s.firstChild()) return r;
	if (t != null) {
		for (; !s.type.is(t); ) if (!s.nextSibling()) return r;
	}
	for (;;) {
		if (i != null && s.type.is(i)) return r;
		if ((s.type.is(e) && r.push(s.node), !s.nextSibling()))
			return i == null ? r : [];
	}
}
function Bn(n, e, t = e.length - 1) {
	for (let i = n.parent; t >= 0; i = i.parent) {
		if (!i) return !1;
		if (!i.type.isAnonymous) {
			if (e[t] && e[t] != i.name) return !1;
			t--;
		}
	}
	return !0;
}
class Vd {
	constructor(e, t, i, s) {
		(this.parent = e), (this.buffer = t), (this.index = i), (this.start = s);
	}
}
class Ye {
	get name() {
		return this.type.name;
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1];
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2];
	}
	constructor(e, t, i) {
		(this.context = e),
			(this._parent = t),
			(this.index = i),
			(this.type = e.buffer.set.types[e.buffer.buffer[i]]);
	}
	child(e, t, i) {
		let { buffer: s } = this.context,
			r = s.findChild(
				this.index + 4,
				s.buffer[this.index + 3],
				e,
				t - this.context.start,
				i
			);
		return r < 0 ? null : new Ye(this.context, this, r);
	}
	get firstChild() {
		return this.child(1, 0, 4);
	}
	get lastChild() {
		return this.child(-1, 0, 4);
	}
	childAfter(e) {
		return this.child(1, e, 2);
	}
	childBefore(e) {
		return this.child(-1, e, -2);
	}
	enter(e, t, i = 0) {
		if (i & ee.ExcludeBuffers) return null;
		let { buffer: s } = this.context,
			r = s.findChild(
				this.index + 4,
				s.buffer[this.index + 3],
				t > 0 ? 1 : -1,
				e - this.context.start,
				t
			);
		return r < 0 ? null : new Ye(this.context, this, r);
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent();
	}
	externalSibling(e) {
		return this._parent
			? null
			: this.context.parent.nextChild(this.context.index + e, e, 0, 4);
	}
	get nextSibling() {
		let { buffer: e } = this.context,
			t = e.buffer[this.index + 3];
		return t <
			(this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
			? new Ye(this.context, this._parent, t)
			: this.externalSibling(1);
	}
	get prevSibling() {
		let { buffer: e } = this.context,
			t = this._parent ? this._parent.index + 4 : 0;
		return this.index == t
			? this.externalSibling(-1)
			: new Ye(
					this.context,
					this._parent,
					e.findChild(t, this.index, -1, 0, 4)
			  );
	}
	cursor(e = 0) {
		return new Ri(this, e);
	}
	get tree() {
		return null;
	}
	toTree() {
		let e = [],
			t = [],
			{ buffer: i } = this.context,
			s = this.index + 4,
			r = i.buffer[this.index + 3];
		if (r > s) {
			let o = i.buffer[this.index + 1];
			e.push(i.slice(s, r, o)), t.push(0);
		}
		return new z(this.type, e, t, this.to - this.from);
	}
	resolve(e, t = 0) {
		return ei(this, e, t, !1);
	}
	resolveInner(e, t = 0) {
		return ei(this, e, t, !0);
	}
	enterUnfinishedNodesBefore(e) {
		return Eh(this, e);
	}
	toString() {
		return this.context.buffer.childString(this.index);
	}
	getChild(e, t = null, i = null) {
		let s = On(this, e, t, i);
		return s.length ? s[0] : null;
	}
	getChildren(e, t = null, i = null) {
		return On(this, e, t, i);
	}
	get node() {
		return this;
	}
	matchContext(e) {
		return Bn(this, e);
	}
}
class Ri {
	get name() {
		return this.type.name;
	}
	constructor(e, t = 0) {
		if (
			((this.mode = t),
			(this.buffer = null),
			(this.stack = []),
			(this.index = 0),
			(this.bufferNode = null),
			e instanceof _e)
		)
			this.yieldNode(e);
		else {
			(this._tree = e.context.parent), (this.buffer = e.context);
			for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index);
			(this.bufferNode = e), this.yieldBuf(e.index);
		}
	}
	yieldNode(e) {
		return e
			? ((this._tree = e),
			  (this.type = e.type),
			  (this.from = e.from),
			  (this.to = e.to),
			  !0)
			: !1;
	}
	yieldBuf(e, t) {
		this.index = e;
		let { start: i, buffer: s } = this.buffer;
		return (
			(this.type = t || s.set.types[s.buffer[e]]),
			(this.from = i + s.buffer[e + 1]),
			(this.to = i + s.buffer[e + 2]),
			!0
		);
	}
	yield(e) {
		return e
			? e instanceof _e
				? ((this.buffer = null), this.yieldNode(e))
				: ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
			: !1;
	}
	toString() {
		return this.buffer
			? this.buffer.buffer.childString(this.index)
			: this._tree.toString();
	}
	enterChild(e, t, i) {
		if (!this.buffer)
			return this.yield(
				this._tree.nextChild(
					e < 0 ? this._tree._tree.children.length - 1 : 0,
					e,
					t,
					i,
					this.mode
				)
			);
		let { buffer: s } = this.buffer,
			r = s.findChild(
				this.index + 4,
				s.buffer[this.index + 3],
				e,
				t - this.buffer.start,
				i
			);
		return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
	}
	firstChild() {
		return this.enterChild(1, 0, 4);
	}
	lastChild() {
		return this.enterChild(-1, 0, 4);
	}
	childAfter(e) {
		return this.enterChild(1, e, 2);
	}
	childBefore(e) {
		return this.enterChild(-1, e, -2);
	}
	enter(e, t, i = this.mode) {
		return this.buffer
			? i & ee.ExcludeBuffers
				? !1
				: this.enterChild(1, e, t)
			: this.yield(this._tree.enter(e, t, i));
	}
	parent() {
		if (!this.buffer)
			return this.yieldNode(
				this.mode & ee.IncludeAnonymous ? this._tree._parent : this._tree.parent
			);
		if (this.stack.length) return this.yieldBuf(this.stack.pop());
		let e =
			this.mode & ee.IncludeAnonymous
				? this.buffer.parent
				: this.buffer.parent.nextSignificantParent();
		return (this.buffer = null), this.yieldNode(e);
	}
	sibling(e) {
		if (!this.buffer)
			return this._tree._parent
				? this.yield(
						this._tree.index < 0
							? null
							: this._tree._parent.nextChild(
									this._tree.index + e,
									e,
									0,
									4,
									this.mode
							  )
				  )
				: !1;
		let { buffer: t } = this.buffer,
			i = this.stack.length - 1;
		if (e < 0) {
			let s = i < 0 ? 0 : this.stack[i] + 4;
			if (this.index != s)
				return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
		} else {
			let s = t.buffer[this.index + 3];
			if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3]))
				return this.yieldBuf(s);
		}
		return i < 0
			? this.yield(
					this.buffer.parent.nextChild(
						this.buffer.index + e,
						e,
						0,
						4,
						this.mode
					)
			  )
			: !1;
	}
	nextSibling() {
		return this.sibling(1);
	}
	prevSibling() {
		return this.sibling(-1);
	}
	atLastNode(e) {
		let t,
			i,
			{ buffer: s } = this;
		if (s) {
			if (e > 0) {
				if (this.index < s.buffer.buffer.length) return !1;
			} else
				for (let r = 0; r < this.index; r++)
					if (s.buffer.buffer[r + 3] < this.index) return !1;
			({ index: t, parent: i } = s);
		} else ({ index: t, _parent: i } = this._tree);
		for (; i; { index: t, _parent: i } = i)
			if (t > -1)
				for (
					let r = t + e, o = e < 0 ? -1 : i._tree.children.length;
					r != o;
					r += e
				) {
					let l = i._tree.children[r];
					if (
						this.mode & ee.IncludeAnonymous ||
						l instanceof Vt ||
						!l.type.isAnonymous ||
						Nr(l)
					)
						return !1;
				}
		return !0;
	}
	move(e, t) {
		if (t && this.enterChild(e, 0, 4)) return !0;
		for (;;) {
			if (this.sibling(e)) return !0;
			if (this.atLastNode(e) || !this.parent()) return !1;
		}
	}
	next(e = !0) {
		return this.move(1, e);
	}
	prev(e = !0) {
		return this.move(-1, e);
	}
	moveTo(e, t = 0) {
		for (
			;
			(this.from == this.to ||
				(t < 1 ? this.from >= e : this.from > e) ||
				(t > -1 ? this.to <= e : this.to < e)) &&
			this.parent();

		);
		for (; this.enterChild(1, e, t); );
		return this;
	}
	get node() {
		if (!this.buffer) return this._tree;
		let e = this.bufferNode,
			t = null,
			i = 0;
		if (e && e.context == this.buffer)
			e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
				for (let o = e; o; o = o._parent)
					if (o.index == s) {
						if (s == this.index) return o;
						(t = o), (i = r + 1);
						break e;
					}
				s = this.stack[--r];
			}
		for (let s = i; s < this.stack.length; s++)
			t = new Ye(this.buffer, t, this.stack[s]);
		return (this.bufferNode = new Ye(this.buffer, t, this.index));
	}
	get tree() {
		return this.buffer ? null : this._tree._tree;
	}
	iterate(e, t) {
		for (let i = 0; ; ) {
			let s = !1;
			if (this.type.isAnonymous || e(this) !== !1) {
				if (this.firstChild()) {
					i++;
					continue;
				}
				this.type.isAnonymous || (s = !0);
			}
			for (
				;
				s && t && t(this), (s = this.type.isAnonymous), !this.nextSibling();

			) {
				if (!i) return;
				this.parent(), i--, (s = !0);
			}
		}
	}
	matchContext(e) {
		if (!this.buffer) return Bn(this.node, e);
		let { buffer: t } = this.buffer,
			{ types: i } = t.set;
		for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
			if (r < 0) return Bn(this.node, e, s);
			let o = i[t.buffer[this.stack[r]]];
			if (!o.isAnonymous) {
				if (e[s] && e[s] != o.name) return !1;
				s--;
			}
		}
		return !0;
	}
}
function Nr(n) {
	return n.children.some(
		(e) => e instanceof Vt || !e.type.isAnonymous || Nr(e)
	);
}
function Fd(n) {
	var e;
	let {
			buffer: t,
			nodeSet: i,
			maxBufferLength: s = Ld,
			reused: r = [],
			minRepeatType: o = i.types.length
		} = n,
		l = Array.isArray(t) ? new Ir(t, t.length) : t,
		a = i.types,
		h = 0,
		c = 0;
	function f(S, C, T, B, U) {
		let { id: I, start: P, end: V, size: $ } = l,
			Q = c;
		for (; $ < 0; )
			if ((l.next(), $ == -1)) {
				let J = r[I];
				T.push(J), B.push(P - S);
				return;
			} else if ($ == -3) {
				h = I;
				return;
			} else if ($ == -4) {
				c = I;
				return;
			} else throw new RangeError(`Unrecognized record size: ${$}`);
		let M = a[I],
			G,
			Y,
			le = P - S;
		if (V - P <= s && (Y = g(l.pos - C, U))) {
			let J = new Uint16Array(Y.size - Y.skip),
				ie = l.pos - Y.size,
				nt = J.length;
			for (; l.pos > ie; ) nt = y(Y.start, J, nt);
			(G = new Vt(J, V - Y.start, i)), (le = Y.start - S);
		} else {
			let J = l.pos - $;
			l.next();
			let ie = [],
				nt = [],
				xt = I >= o ? I : -1,
				Ft = 0,
				ji = V;
			for (; l.pos > J; )
				xt >= 0 && l.id == xt && l.size >= 0
					? (l.end <= ji - s &&
							(d(ie, nt, P, Ft, l.end, ji, xt, Q),
							(Ft = ie.length),
							(ji = l.end)),
					  l.next())
					: f(P, J, ie, nt, xt);
			if (
				(xt >= 0 && Ft > 0 && Ft < ie.length && d(ie, nt, P, Ft, P, ji, xt, Q),
				ie.reverse(),
				nt.reverse(),
				xt > -1 && Ft > 0)
			) {
				let to = u(M);
				G = _r(M, ie, nt, 0, ie.length, 0, V - P, to, to);
			} else G = p(M, ie, nt, V - P, Q - V);
		}
		T.push(G), B.push(le);
	}
	function u(S) {
		return (C, T, B) => {
			let U = 0,
				I = C.length - 1,
				P,
				V;
			if (I >= 0 && (P = C[I]) instanceof z) {
				if (!I && P.type == S && P.length == B) return P;
				(V = P.prop(L.lookAhead)) && (U = T[I] + P.length + V);
			}
			return p(S, C, T, B, U);
		};
	}
	function d(S, C, T, B, U, I, P, V) {
		let $ = [],
			Q = [];
		for (; S.length > B; ) $.push(S.pop()), Q.push(C.pop() + T - U);
		S.push(p(i.types[P], $, Q, I - U, V - I)), C.push(U - T);
	}
	function p(S, C, T, B, U = 0, I) {
		if (h) {
			let P = [L.contextHash, h];
			I = I ? [P].concat(I) : [P];
		}
		if (U > 25) {
			let P = [L.lookAhead, U];
			I = I ? [P].concat(I) : [P];
		}
		return new z(S, C, T, B, I);
	}
	function g(S, C) {
		let T = l.fork(),
			B = 0,
			U = 0,
			I = 0,
			P = T.end - s,
			V = { size: 0, start: 0, skip: 0 };
		e: for (let $ = T.pos - S; T.pos > $; ) {
			let Q = T.size;
			if (T.id == C && Q >= 0) {
				(V.size = B), (V.start = U), (V.skip = I), (I += 4), (B += 4), T.next();
				continue;
			}
			let M = T.pos - Q;
			if (Q < 0 || M < $ || T.start < P) break;
			let G = T.id >= o ? 4 : 0,
				Y = T.start;
			for (T.next(); T.pos > M; ) {
				if (T.size < 0)
					if (T.size == -3) G += 4;
					else break e;
				else T.id >= o && (G += 4);
				T.next();
			}
			(U = Y), (B += Q), (I += G);
		}
		return (
			(C < 0 || B == S) && ((V.size = B), (V.start = U), (V.skip = I)),
			V.size > 4 ? V : void 0
		);
	}
	function y(S, C, T) {
		let { id: B, start: U, end: I, size: P } = l;
		if ((l.next(), P >= 0 && B < o)) {
			let V = T;
			if (P > 4) {
				let $ = l.pos - (P - 4);
				for (; l.pos > $; ) T = y(S, C, T);
			}
			(C[--T] = V), (C[--T] = I - S), (C[--T] = U - S), (C[--T] = B);
		} else P == -3 ? (h = B) : P == -4 && (c = B);
		return T;
	}
	let b = [],
		w = [];
	for (; l.pos > 0; ) f(n.start || 0, n.bufferStart || 0, b, w, -1);
	let v =
		(e = n.length) !== null && e !== void 0
			? e
			: b.length
			? w[0] + b[0].length
			: 0;
	return new z(a[n.topID], b.reverse(), w.reverse(), v);
}
const rl = new WeakMap();
function gn(n, e) {
	if (!n.isAnonymous || e instanceof Vt || e.type != n) return 1;
	let t = rl.get(e);
	if (t == null) {
		t = 1;
		for (let i of e.children) {
			if (i.type != n || !(i instanceof z)) {
				t = 1;
				break;
			}
			t += gn(n, i);
		}
		rl.set(e, t);
	}
	return t;
}
function _r(n, e, t, i, s, r, o, l, a) {
	let h = 0;
	for (let p = i; p < s; p++) h += gn(n, e[p]);
	let c = Math.ceil((h * 1.5) / 8),
		f = [],
		u = [];
	function d(p, g, y, b, w) {
		for (let v = y; v < b; ) {
			let S = v,
				C = g[v],
				T = gn(n, p[v]);
			for (v++; v < b; v++) {
				let B = gn(n, p[v]);
				if (T + B >= c) break;
				T += B;
			}
			if (v == S + 1) {
				if (T > c) {
					let B = p[S];
					d(B.children, B.positions, 0, B.children.length, g[S] + w);
					continue;
				}
				f.push(p[S]);
			} else {
				let B = g[v - 1] + p[v - 1].length - C;
				f.push(_r(n, p, g, S, v, C, B, null, a));
			}
			u.push(C + w - r);
		}
	}
	return d(e, t, i, s, 0), (l || a)(f, u, o);
}
class ty {
	constructor() {
		this.map = new WeakMap();
	}
	setBuffer(e, t, i) {
		let s = this.map.get(e);
		s || this.map.set(e, (s = new Map())), s.set(t, i);
	}
	getBuffer(e, t) {
		let i = this.map.get(e);
		return i && i.get(t);
	}
	set(e, t) {
		e instanceof Ye
			? this.setBuffer(e.context.buffer, e.index, t)
			: e instanceof _e && this.map.set(e.tree, t);
	}
	get(e) {
		return e instanceof Ye
			? this.getBuffer(e.context.buffer, e.index)
			: e instanceof _e
			? this.map.get(e.tree)
			: void 0;
	}
	cursorSet(e, t) {
		e.buffer
			? this.setBuffer(e.buffer.buffer, e.index, t)
			: this.map.set(e.tree, t);
	}
	cursorGet(e) {
		return e.buffer
			? this.getBuffer(e.buffer.buffer, e.index)
			: this.map.get(e.tree);
	}
}
class rt {
	constructor(e, t, i, s, r = !1, o = !1) {
		(this.from = e),
			(this.to = t),
			(this.tree = i),
			(this.offset = s),
			(this.open = (r ? 1 : 0) | (o ? 2 : 0));
	}
	get openStart() {
		return (this.open & 1) > 0;
	}
	get openEnd() {
		return (this.open & 2) > 0;
	}
	static addTree(e, t = [], i = !1) {
		let s = [new rt(0, e.length, e, 0, !1, i)];
		for (let r of t) r.to > e.length && s.push(r);
		return s;
	}
	static applyChanges(e, t, i = 128) {
		if (!t.length) return e;
		let s = [],
			r = 1,
			o = e.length ? e[0] : null;
		for (let l = 0, a = 0, h = 0; ; l++) {
			let c = l < t.length ? t[l] : null,
				f = c ? c.fromA : 1e9;
			if (f - a >= i)
				for (; o && o.from < f; ) {
					let u = o;
					if (a >= u.from || f <= u.to || h) {
						let d = Math.max(u.from, a) - h,
							p = Math.min(u.to, f) - h;
						u = d >= p ? null : new rt(d, p, u.tree, u.offset + h, l > 0, !!c);
					}
					if ((u && s.push(u), o.to > f)) break;
					o = r < e.length ? e[r++] : null;
				}
			if (!c) break;
			(a = c.toA), (h = c.toA - c.toB);
		}
		return s;
	}
}
class Rh {
	startParse(e, t, i) {
		return (
			typeof e == "string" && (e = new Hd(e)),
			(i = i
				? i.length
					? i.map((s) => new Le(s.from, s.to))
					: [new Le(0, 0)]
				: [new Le(0, e.length)]),
			this.createParse(e, t || [], i)
		);
	}
	parse(e, t, i) {
		let s = this.startParse(e, t, i);
		for (;;) {
			let r = s.advance();
			if (r) return r;
		}
	}
}
class Hd {
	constructor(e) {
		this.string = e;
	}
	get length() {
		return this.string.length;
	}
	chunk(e) {
		return this.string.slice(e);
	}
	get lineChunks() {
		return !1;
	}
	read(e, t) {
		return this.string.slice(e, t);
	}
}
function iy(n) {
	return (e, t, i, s) => new zd(e, n, t, i, s);
}
class ol {
	constructor(e, t, i, s, r) {
		(this.parser = e),
			(this.parse = t),
			(this.overlay = i),
			(this.target = s),
			(this.ranges = r);
	}
}
class Wd {
	constructor(e, t, i, s, r, o, l) {
		(this.parser = e),
			(this.predicate = t),
			(this.mounts = i),
			(this.index = s),
			(this.start = r),
			(this.target = o),
			(this.prev = l),
			(this.depth = 0),
			(this.ranges = []);
	}
}
const cr = new L({ perNode: !0 });
class zd {
	constructor(e, t, i, s, r) {
		(this.nest = t),
			(this.input = i),
			(this.fragments = s),
			(this.ranges = r),
			(this.inner = []),
			(this.innerDone = 0),
			(this.baseTree = null),
			(this.stoppedAt = null),
			(this.baseParse = e);
	}
	advance() {
		if (this.baseParse) {
			let i = this.baseParse.advance();
			if (!i) return null;
			if (
				((this.baseParse = null),
				(this.baseTree = i),
				this.startInner(),
				this.stoppedAt != null)
			)
				for (let s of this.inner) s.parse.stopAt(this.stoppedAt);
		}
		if (this.innerDone == this.inner.length) {
			let i = this.baseTree;
			return (
				this.stoppedAt != null &&
					(i = new z(
						i.type,
						i.children,
						i.positions,
						i.length,
						i.propValues.concat([[cr, this.stoppedAt]])
					)),
				i
			);
		}
		let e = this.inner[this.innerDone],
			t = e.parse.advance();
		if (t) {
			this.innerDone++;
			let i = Object.assign(Object.create(null), e.target.props);
			(i[L.mounted.id] = new Nd(t, e.overlay, e.parser)), (e.target.props = i);
		}
		return null;
	}
	get parsedPos() {
		if (this.baseParse) return 0;
		let e = this.input.length;
		for (let t = this.innerDone; t < this.inner.length; t++)
			this.inner[t].ranges[0].from < e &&
				(e = Math.min(e, this.inner[t].parse.parsedPos));
		return e;
	}
	stopAt(e) {
		if (((this.stoppedAt = e), this.baseParse)) this.baseParse.stopAt(e);
		else
			for (let t = this.innerDone; t < this.inner.length; t++)
				this.inner[t].parse.stopAt(e);
	}
	startInner() {
		let e = new Kd(this.fragments),
			t = null,
			i = null,
			s = new Ri(
				new _e(this.baseTree, this.ranges[0].from, 0, null),
				ee.IncludeAnonymous | ee.IgnoreMounts
			);
		e: for (let r, o; this.stoppedAt == null || s.from < this.stoppedAt; ) {
			let l = !0,
				a;
			if (e.hasNode(s)) {
				if (t) {
					let h = t.mounts.find(
						(c) => c.frag.from <= s.from && c.frag.to >= s.to && c.mount.overlay
					);
					if (h)
						for (let c of h.mount.overlay) {
							let f = c.from + h.pos,
								u = c.to + h.pos;
							f >= s.from &&
								u <= s.to &&
								!t.ranges.some((d) => d.from < u && d.to > f) &&
								t.ranges.push({ from: f, to: u });
						}
				}
				l = !1;
			} else if (i && (o = qd(i.ranges, s.from, s.to))) l = o != 2;
			else if (
				!s.type.isAnonymous &&
				s.from < s.to &&
				(r = this.nest(s, this.input))
			) {
				s.tree || jd(s);
				let h = e.findMounts(s.from, r.parser);
				if (typeof r.overlay == "function")
					t = new Wd(
						r.parser,
						r.overlay,
						h,
						this.inner.length,
						s.from,
						s.tree,
						t
					);
				else {
					let c = hl(this.ranges, r.overlay || [new Le(s.from, s.to)]);
					c.length &&
						this.inner.push(
							new ol(
								r.parser,
								r.parser.startParse(this.input, cl(h, c), c),
								r.overlay
									? r.overlay.map((f) => new Le(f.from - s.from, f.to - s.from))
									: null,
								s.tree,
								c
							)
						),
						r.overlay
							? c.length && (i = { ranges: c, depth: 0, prev: i })
							: (l = !1);
				}
			} else
				t &&
					(a = t.predicate(s)) &&
					(a === !0 && (a = new Le(s.from, s.to)),
					a.from < a.to && t.ranges.push(a));
			if (l && s.firstChild()) t && t.depth++, i && i.depth++;
			else
				for (; !s.nextSibling(); ) {
					if (!s.parent()) break e;
					if (t && !--t.depth) {
						let h = hl(this.ranges, t.ranges);
						h.length &&
							this.inner.splice(
								t.index,
								0,
								new ol(
									t.parser,
									t.parser.startParse(this.input, cl(t.mounts, h), h),
									t.ranges.map((c) => new Le(c.from - t.start, c.to - t.start)),
									t.target,
									h
								)
							),
							(t = t.prev);
					}
					i && !--i.depth && (i = i.prev);
				}
		}
	}
}
function qd(n, e, t) {
	for (let i of n) {
		if (i.from >= t) break;
		if (i.to > e) return i.from <= e && i.to >= t ? 2 : 1;
	}
	return 0;
}
function ll(n, e, t, i, s, r) {
	if (e < t) {
		let o = n.buffer[e + 1];
		i.push(n.slice(e, t, o)), s.push(o - r);
	}
}
function jd(n) {
	let { node: e } = n,
		t = 0;
	do n.parent(), t++;
	while (!n.tree);
	let i = 0,
		s = n.tree,
		r = 0;
	for (
		;
		(r = s.positions[i] + n.from),
			!(r <= e.from && r + s.children[i].length >= e.to);
		i++
	);
	let o = s.children[i],
		l = o.buffer;
	function a(h, c, f, u, d) {
		let p = h;
		for (; l[p + 2] + r <= e.from; ) p = l[p + 3];
		let g = [],
			y = [];
		ll(o, h, p, g, y, u);
		let b = l[p + 1],
			w = l[p + 2],
			v = b + r == e.from && w + r == e.to && l[p] == e.type.id;
		return (
			g.push(v ? e.toTree() : a(p + 4, l[p + 3], o.set.types[l[p]], b, w - b)),
			y.push(b - u),
			ll(o, l[p + 3], c, g, y, u),
			new z(f, g, y, d)
		);
	}
	s.children[i] = a(0, l.length, ve.none, 0, o.length);
	for (let h = 0; h <= t; h++) n.childAfter(e.from);
}
class al {
	constructor(e, t) {
		(this.offset = t),
			(this.done = !1),
			(this.cursor = e.cursor(ee.IncludeAnonymous | ee.IgnoreMounts));
	}
	moveTo(e) {
		let { cursor: t } = this,
			i = e - this.offset;
		for (; !this.done && t.from < i; )
			(t.to >= e && t.enter(i, 1, ee.IgnoreOverlays | ee.ExcludeBuffers)) ||
				t.next(!1) ||
				(this.done = !0);
	}
	hasNode(e) {
		if (
			(this.moveTo(e.from),
			!this.done &&
				this.cursor.from + this.offset == e.from &&
				this.cursor.tree)
		)
			for (let t = this.cursor.tree; ; ) {
				if (t == e.tree) return !0;
				if (
					t.children.length &&
					t.positions[0] == 0 &&
					t.children[0] instanceof z
				)
					t = t.children[0];
				else break;
			}
		return !1;
	}
}
class Kd {
	constructor(e) {
		var t;
		if (((this.fragments = e), (this.curTo = 0), (this.fragI = 0), e.length)) {
			let i = (this.curFrag = e[0]);
			(this.curTo = (t = i.tree.prop(cr)) !== null && t !== void 0 ? t : i.to),
				(this.inner = new al(i.tree, -i.offset));
		} else this.curFrag = this.inner = null;
	}
	hasNode(e) {
		for (; this.curFrag && e.from >= this.curTo; ) this.nextFrag();
		return (
			this.curFrag &&
			this.curFrag.from <= e.from &&
			this.curTo >= e.to &&
			this.inner.hasNode(e)
		);
	}
	nextFrag() {
		var e;
		if ((this.fragI++, this.fragI == this.fragments.length))
			this.curFrag = this.inner = null;
		else {
			let t = (this.curFrag = this.fragments[this.fragI]);
			(this.curTo = (e = t.tree.prop(cr)) !== null && e !== void 0 ? e : t.to),
				(this.inner = new al(t.tree, -t.offset));
		}
	}
	findMounts(e, t) {
		var i;
		let s = [];
		if (this.inner) {
			this.inner.cursor.moveTo(e, 1);
			for (let r = this.inner.cursor.node; r; r = r.parent) {
				let o =
					(i = r.tree) === null || i === void 0 ? void 0 : i.prop(L.mounted);
				if (o && o.parser == t)
					for (let l = this.fragI; l < this.fragments.length; l++) {
						let a = this.fragments[l];
						if (a.from >= r.to) break;
						a.tree == this.curFrag.tree &&
							s.push({ frag: a, pos: r.from - a.offset, mount: o });
					}
			}
		}
		return s;
	}
}
function hl(n, e) {
	let t = null,
		i = e;
	for (let s = 1, r = 0; s < n.length; s++) {
		let o = n[s - 1].to,
			l = n[s].from;
		for (; r < i.length; r++) {
			let a = i[r];
			if (a.from >= l) break;
			a.to <= o ||
				(t || (i = t = e.slice()),
				a.from < o
					? ((t[r] = new Le(a.from, o)),
					  a.to > l && t.splice(r + 1, 0, new Le(l, a.to)))
					: a.to > l
					? (t[r--] = new Le(l, a.to))
					: t.splice(r--, 1));
		}
	}
	return i;
}
function Ud(n, e, t, i) {
	let s = 0,
		r = 0,
		o = !1,
		l = !1,
		a = -1e9,
		h = [];
	for (;;) {
		let c = s == n.length ? 1e9 : o ? n[s].to : n[s].from,
			f = r == e.length ? 1e9 : l ? e[r].to : e[r].from;
		if (o != l) {
			let u = Math.max(a, t),
				d = Math.min(c, f, i);
			u < d && h.push(new Le(u, d));
		}
		if (((a = Math.min(c, f)), a == 1e9)) break;
		c == a && (o ? ((o = !1), s++) : (o = !0)),
			f == a && (l ? ((l = !1), r++) : (l = !0));
	}
	return h;
}
function cl(n, e) {
	let t = [];
	for (let { pos: i, mount: s, frag: r } of n) {
		let o = i + (s.overlay ? s.overlay[0].from : 0),
			l = o + s.tree.length,
			a = Math.max(r.from, o),
			h = Math.min(r.to, l);
		if (s.overlay) {
			let c = s.overlay.map((u) => new Le(u.from + i, u.to + i)),
				f = Ud(e, c, a, h);
			for (let u = 0, d = a; ; u++) {
				let p = u == f.length,
					g = p ? h : f[u].from;
				if (
					(g > d &&
						t.push(
							new rt(
								d,
								g,
								s.tree,
								-o,
								r.from >= d || r.openStart,
								r.to <= g || r.openEnd
							)
						),
					p)
				)
					break;
				d = f[u].to;
			}
		} else
			t.push(
				new rt(
					a,
					h,
					s.tree,
					-o,
					r.from >= o || r.openStart,
					r.to <= l || r.openEnd
				)
			);
	}
	return t;
}
let $d = 0;
class $e {
	constructor(e, t, i) {
		(this.set = e), (this.base = t), (this.modified = i), (this.id = $d++);
	}
	static define(e) {
		if (e?.base) throw new Error("Can not derive from a modified tag");
		let t = new $e([], null, []);
		if ((t.set.push(t), e)) for (let i of e.set) t.set.push(i);
		return t;
	}
	static defineModifier() {
		let e = new Pn();
		return (t) =>
			t.modified.indexOf(e) > -1
				? t
				: Pn.get(
						t.base || t,
						t.modified.concat(e).sort((i, s) => i.id - s.id)
				  );
	}
}
let Gd = 0;
class Pn {
	constructor() {
		(this.instances = []), (this.id = Gd++);
	}
	static get(e, t) {
		if (!t.length) return e;
		let i = t[0].instances.find((l) => l.base == e && Jd(t, l.modified));
		if (i) return i;
		let s = [],
			r = new $e(s, e, t);
		for (let l of t) l.instances.push(r);
		let o = Yd(t);
		for (let l of e.set)
			if (!l.modified.length) for (let a of o) s.push(Pn.get(l, a));
		return r;
	}
}
function Jd(n, e) {
	return n.length == e.length && n.every((t, i) => t == e[i]);
}
function Yd(n) {
	let e = [[]];
	for (let t = 0; t < n.length; t++)
		for (let i = 0, s = e.length; i < s; i++) e.push(e[i].concat(n[t]));
	return e.sort((t, i) => i.length - t.length);
}
function Xd(n) {
	let e = Object.create(null);
	for (let t in n) {
		let i = n[t];
		Array.isArray(i) || (i = [i]);
		for (let s of t.split(" "))
			if (s) {
				let r = [],
					o = 2,
					l = s;
				for (let f = 0; ; ) {
					if (l == "..." && f > 0 && f + 3 == s.length) {
						o = 1;
						break;
					}
					let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
					if (!u) throw new RangeError("Invalid path: " + s);
					if (
						(r.push(
							u[0] == "*" ? "" : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]
						),
						(f += u[0].length),
						f == s.length)
					)
						break;
					let d = s[f++];
					if (f == s.length && d == "!") {
						o = 0;
						break;
					}
					if (d != "/") throw new RangeError("Invalid path: " + s);
					l = s.slice(f);
				}
				let a = r.length - 1,
					h = r[a];
				if (!h) throw new RangeError("Invalid path: " + s);
				let c = new En(i, o, a > 0 ? r.slice(0, a) : null);
				e[h] = c.sort(e[h]);
			}
	}
	return Lh.add(e);
}
const Lh = new L();
class En {
	constructor(e, t, i, s) {
		(this.tags = e), (this.mode = t), (this.context = i), (this.next = s);
	}
	get opaque() {
		return this.mode == 0;
	}
	get inherit() {
		return this.mode == 1;
	}
	sort(e) {
		return !e || e.depth < this.depth
			? ((this.next = e), this)
			: ((e.next = this.sort(e.next)), e);
	}
	get depth() {
		return this.context ? this.context.length : 0;
	}
}
En.empty = new En([], 2, null);
function Ih(n, e) {
	let t = Object.create(null);
	for (let r of n)
		if (!Array.isArray(r.tag)) t[r.tag.id] = r.class;
		else for (let o of r.tag) t[o.id] = r.class;
	let { scope: i, all: s = null } = e || {};
	return {
		style: (r) => {
			let o = s;
			for (let l of r)
				for (let a of l.set) {
					let h = t[a.id];
					if (h) {
						o = o ? o + " " + h : h;
						break;
					}
				}
			return o;
		},
		scope: i
	};
}
function Zd(n, e) {
	let t = null;
	for (let i of n) {
		let s = i.style(e);
		s && (t = t ? t + " " + s : s);
	}
	return t;
}
function Qd(n, e, t, i = 0, s = n.length) {
	let r = new ep(i, Array.isArray(e) ? e : [e], t);
	r.highlightRange(n.cursor(), i, s, "", r.highlighters), r.flush(s);
}
class ep {
	constructor(e, t, i) {
		(this.at = e), (this.highlighters = t), (this.span = i), (this.class = "");
	}
	startSpan(e, t) {
		t != this.class &&
			(this.flush(e), e > this.at && (this.at = e), (this.class = t));
	}
	flush(e) {
		e > this.at && this.class && this.span(this.at, e, this.class);
	}
	highlightRange(e, t, i, s, r) {
		let { type: o, from: l, to: a } = e;
		if (l >= i || a <= t) return;
		o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
		let h = s,
			c = tp(e) || En.empty,
			f = Zd(r, c.tags);
		if (
			(f &&
				(h && (h += " "), (h += f), c.mode == 1 && (s += (s ? " " : "") + f)),
			this.startSpan(e.from, h),
			c.opaque)
		)
			return;
		let u = e.tree && e.tree.prop(L.mounted);
		if (u && u.overlay) {
			let d = e.node.enter(u.overlay[0].from + l, 1),
				p = this.highlighters.filter((y) => !y.scope || y.scope(u.tree.type)),
				g = e.firstChild();
			for (let y = 0, b = l; ; y++) {
				let w = y < u.overlay.length ? u.overlay[y] : null,
					v = w ? w.from + l : a,
					S = Math.max(t, b),
					C = Math.min(i, v);
				if (S < C && g)
					for (
						;
						e.from < C &&
						(this.highlightRange(e, S, C, s, r),
						this.startSpan(Math.min(C, e.to), h),
						!(e.to >= v || !e.nextSibling()));

					);
				if (!w || v > i) break;
				(b = w.to + l),
					b > t &&
						(this.highlightRange(
							d.cursor(),
							Math.max(t, w.from + l),
							Math.min(i, b),
							s,
							p
						),
						this.startSpan(b, h));
			}
			g && e.parent();
		} else if (e.firstChild()) {
			do
				if (!(e.to <= t)) {
					if (e.from >= i) break;
					this.highlightRange(e, t, i, s, r),
						this.startSpan(Math.min(i, e.to), h);
				}
			while (e.nextSibling());
			e.parent();
		}
	}
}
function tp(n) {
	let e = n.type.prop(Lh);
	for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
	return e || null;
}
const x = $e.define,
	nn = x(),
	ot = x(),
	fl = x(ot),
	ul = x(ot),
	lt = x(),
	sn = x(lt),
	ps = x(lt),
	Ke = x(),
	vt = x(Ke),
	qe = x(),
	je = x(),
	fr = x(),
	ui = x(fr),
	rn = x(),
	m = {
		comment: nn,
		lineComment: x(nn),
		blockComment: x(nn),
		docComment: x(nn),
		name: ot,
		variableName: x(ot),
		typeName: fl,
		tagName: x(fl),
		propertyName: ul,
		attributeName: x(ul),
		className: x(ot),
		labelName: x(ot),
		namespace: x(ot),
		macroName: x(ot),
		literal: lt,
		string: sn,
		docString: x(sn),
		character: x(sn),
		attributeValue: x(sn),
		number: ps,
		integer: x(ps),
		float: x(ps),
		bool: x(lt),
		regexp: x(lt),
		escape: x(lt),
		color: x(lt),
		url: x(lt),
		keyword: qe,
		self: x(qe),
		null: x(qe),
		atom: x(qe),
		unit: x(qe),
		modifier: x(qe),
		operatorKeyword: x(qe),
		controlKeyword: x(qe),
		definitionKeyword: x(qe),
		moduleKeyword: x(qe),
		operator: je,
		derefOperator: x(je),
		arithmeticOperator: x(je),
		logicOperator: x(je),
		bitwiseOperator: x(je),
		compareOperator: x(je),
		updateOperator: x(je),
		definitionOperator: x(je),
		typeOperator: x(je),
		controlOperator: x(je),
		punctuation: fr,
		separator: x(fr),
		bracket: ui,
		angleBracket: x(ui),
		squareBracket: x(ui),
		paren: x(ui),
		brace: x(ui),
		content: Ke,
		heading: vt,
		heading1: x(vt),
		heading2: x(vt),
		heading3: x(vt),
		heading4: x(vt),
		heading5: x(vt),
		heading6: x(vt),
		contentSeparator: x(Ke),
		list: x(Ke),
		quote: x(Ke),
		emphasis: x(Ke),
		strong: x(Ke),
		link: x(Ke),
		monospace: x(Ke),
		strikethrough: x(Ke),
		inserted: x(),
		deleted: x(),
		changed: x(),
		invalid: x(),
		meta: rn,
		documentMeta: x(rn),
		annotation: x(rn),
		processingInstruction: x(rn),
		definition: $e.defineModifier(),
		constant: $e.defineModifier(),
		function: $e.defineModifier(),
		standard: $e.defineModifier(),
		local: $e.defineModifier(),
		special: $e.defineModifier()
	};
Ih([
	{ tag: m.link, class: "tok-link" },
	{ tag: m.heading, class: "tok-heading" },
	{ tag: m.emphasis, class: "tok-emphasis" },
	{ tag: m.strong, class: "tok-strong" },
	{ tag: m.keyword, class: "tok-keyword" },
	{ tag: m.atom, class: "tok-atom" },
	{ tag: m.bool, class: "tok-bool" },
	{ tag: m.url, class: "tok-url" },
	{ tag: m.labelName, class: "tok-labelName" },
	{ tag: m.inserted, class: "tok-inserted" },
	{ tag: m.deleted, class: "tok-deleted" },
	{ tag: m.literal, class: "tok-literal" },
	{ tag: m.string, class: "tok-string" },
	{ tag: m.number, class: "tok-number" },
	{ tag: [m.regexp, m.escape, m.special(m.string)], class: "tok-string2" },
	{ tag: m.variableName, class: "tok-variableName" },
	{ tag: m.local(m.variableName), class: "tok-variableName tok-local" },
	{
		tag: m.definition(m.variableName),
		class: "tok-variableName tok-definition"
	},
	{ tag: m.special(m.variableName), class: "tok-variableName2" },
	{
		tag: m.definition(m.propertyName),
		class: "tok-propertyName tok-definition"
	},
	{ tag: m.typeName, class: "tok-typeName" },
	{ tag: m.namespace, class: "tok-namespace" },
	{ tag: m.className, class: "tok-className" },
	{ tag: m.macroName, class: "tok-macroName" },
	{ tag: m.propertyName, class: "tok-propertyName" },
	{ tag: m.operator, class: "tok-operator" },
	{ tag: m.comment, class: "tok-comment" },
	{ tag: m.meta, class: "tok-meta" },
	{ tag: m.invalid, class: "tok-invalid" },
	{ tag: m.punctuation, class: "tok-punctuation" }
]);
var ms;
const Dt = new L();
function Nh(n) {
	return D.define({ combine: n ? (e) => e.concat(n) : void 0 });
}
const ip = new L();
class Ie {
	constructor(e, t, i = [], s = "") {
		(this.data = e),
			(this.name = s),
			N.prototype.hasOwnProperty("tree") ||
				Object.defineProperty(N.prototype, "tree", {
					get() {
						return pe(this);
					}
				}),
			(this.parser = t),
			(this.extension = [
				wt.of(this),
				N.languageData.of((r, o, l) => {
					let a = dl(r, o, l),
						h = a.type.prop(Dt);
					if (!h) return [];
					let c = r.facet(h),
						f = a.type.prop(ip);
					if (f) {
						let u = a.resolve(o - a.from, l);
						for (let d of f)
							if (d.test(u, r)) {
								let p = r.facet(d.facet);
								return d.type == "replace" ? p : p.concat(c);
							}
					}
					return c;
				})
			].concat(i));
	}
	isActiveAt(e, t, i = -1) {
		return dl(e, t, i).type.prop(Dt) == this.data;
	}
	findRegions(e) {
		let t = e.facet(wt);
		if (t?.data == this.data) return [{ from: 0, to: e.doc.length }];
		if (!t || !t.allowsNesting) return [];
		let i = [],
			s = (r, o) => {
				if (r.prop(Dt) == this.data) {
					i.push({ from: o, to: o + r.length });
					return;
				}
				let l = r.prop(L.mounted);
				if (l) {
					if (l.tree.prop(Dt) == this.data) {
						if (l.overlay)
							for (let a of l.overlay)
								i.push({ from: a.from + o, to: a.to + o });
						else i.push({ from: o, to: o + r.length });
						return;
					} else if (l.overlay) {
						let a = i.length;
						if ((s(l.tree, l.overlay[0].from + o), i.length > a)) return;
					}
				}
				for (let a = 0; a < r.children.length; a++) {
					let h = r.children[a];
					h instanceof z && s(h, r.positions[a] + o);
				}
			};
		return s(pe(e), 0), i;
	}
	get allowsNesting() {
		return !0;
	}
}
Ie.setState = R.define();
function dl(n, e, t) {
	let i = n.facet(wt),
		s = pe(n).topNode;
	if (!i || i.allowsNesting)
		for (let r = s; r; r = r.enter(e, t, ee.ExcludeBuffers))
			r.type.isTop && (s = r);
	return s;
}
class ur extends Ie {
	constructor(e, t, i) {
		super(e, t, [], i), (this.parser = t);
	}
	static define(e) {
		let t = Nh(e.languageData);
		return new ur(
			t,
			e.parser.configure({ props: [Dt.add((i) => (i.isTop ? t : void 0))] }),
			e.name
		);
	}
	configure(e, t) {
		return new ur(this.data, this.parser.configure(e), t || this.name);
	}
	get allowsNesting() {
		return this.parser.hasWrappers();
	}
}
function pe(n) {
	let e = n.field(Ie.state, !1);
	return e ? e.tree : z.empty;
}
class np {
	constructor(e) {
		(this.doc = e),
			(this.cursorPos = 0),
			(this.string = ""),
			(this.cursor = e.iter());
	}
	get length() {
		return this.doc.length;
	}
	syncTo(e) {
		return (
			(this.string = this.cursor.next(e - this.cursorPos).value),
			(this.cursorPos = e + this.string.length),
			this.cursorPos - this.string.length
		);
	}
	chunk(e) {
		return this.syncTo(e), this.string;
	}
	get lineChunks() {
		return !0;
	}
	read(e, t) {
		let i = this.cursorPos - this.string.length;
		return e < i || t >= this.cursorPos
			? this.doc.sliceString(e, t)
			: this.string.slice(e - i, t - i);
	}
}
let di = null;
class ti {
	constructor(e, t, i = [], s, r, o, l, a) {
		(this.parser = e),
			(this.state = t),
			(this.fragments = i),
			(this.tree = s),
			(this.treeLen = r),
			(this.viewport = o),
			(this.skipped = l),
			(this.scheduleOn = a),
			(this.parse = null),
			(this.tempSkipped = []);
	}
	static create(e, t, i) {
		return new ti(e, t, [], z.empty, 0, i, [], null);
	}
	startParse() {
		return this.parser.startParse(new np(this.state.doc), this.fragments);
	}
	work(e, t) {
		return (
			t != null && t >= this.state.doc.length && (t = void 0),
			this.tree != z.empty && this.isDone(t ?? this.state.doc.length)
				? (this.takeTree(), !0)
				: this.withContext(() => {
						var i;
						if (typeof e == "number") {
							let s = Date.now() + e;
							e = () => Date.now() > s;
						}
						for (
							this.parse || (this.parse = this.startParse()),
								t != null &&
									(this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
									t < this.state.doc.length &&
									this.parse.stopAt(t);
							;

						) {
							let s = this.parse.advance();
							if (s)
								if (
									((this.fragments = this.withoutTempSkipped(
										rt.addTree(s, this.fragments, this.parse.stoppedAt != null)
									)),
									(this.treeLen =
										(i = this.parse.stoppedAt) !== null && i !== void 0
											? i
											: this.state.doc.length),
									(this.tree = s),
									(this.parse = null),
									this.treeLen < (t ?? this.state.doc.length))
								)
									this.parse = this.startParse();
								else return !0;
							if (e()) return !1;
						}
				  })
		);
	}
	takeTree() {
		let e, t;
		this.parse &&
			(e = this.parse.parsedPos) >= this.treeLen &&
			((this.parse.stoppedAt == null || this.parse.stoppedAt > e) &&
				this.parse.stopAt(e),
			this.withContext(() => {
				for (; !(t = this.parse.advance()); );
			}),
			(this.treeLen = e),
			(this.tree = t),
			(this.fragments = this.withoutTempSkipped(
				rt.addTree(this.tree, this.fragments, !0)
			)),
			(this.parse = null));
	}
	withContext(e) {
		let t = di;
		di = this;
		try {
			return e();
		} finally {
			di = t;
		}
	}
	withoutTempSkipped(e) {
		for (let t; (t = this.tempSkipped.pop()); ) e = pl(e, t.from, t.to);
		return e;
	}
	changes(e, t) {
		let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
		if ((this.takeTree(), !e.empty)) {
			let a = [];
			if (
				(e.iterChangedRanges((h, c, f, u) =>
					a.push({ fromA: h, toA: c, fromB: f, toB: u })
				),
				(i = rt.applyChanges(i, a)),
				(s = z.empty),
				(r = 0),
				(o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
				this.skipped.length)
			) {
				l = [];
				for (let h of this.skipped) {
					let c = e.mapPos(h.from, 1),
						f = e.mapPos(h.to, -1);
					c < f && l.push({ from: c, to: f });
				}
			}
		}
		return new ti(this.parser, t, i, s, r, o, l, this.scheduleOn);
	}
	updateViewport(e) {
		if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
		this.viewport = e;
		let t = this.skipped.length;
		for (let i = 0; i < this.skipped.length; i++) {
			let { from: s, to: r } = this.skipped[i];
			s < e.to &&
				r > e.from &&
				((this.fragments = pl(this.fragments, s, r)),
				this.skipped.splice(i--, 1));
		}
		return this.skipped.length >= t ? !1 : (this.reset(), !0);
	}
	reset() {
		this.parse && (this.takeTree(), (this.parse = null));
	}
	skipUntilInView(e, t) {
		this.skipped.push({ from: e, to: t });
	}
	static getSkippingParser(e) {
		return new (class extends Rh {
			createParse(t, i, s) {
				let r = s[0].from,
					o = s[s.length - 1].to;
				return {
					parsedPos: r,
					advance() {
						let a = di;
						if (a) {
							for (let h of s) a.tempSkipped.push(h);
							e &&
								(a.scheduleOn = a.scheduleOn
									? Promise.all([a.scheduleOn, e])
									: e);
						}
						return (this.parsedPos = o), new z(ve.none, [], [], o - r);
					},
					stoppedAt: null,
					stopAt() {}
				};
			}
		})();
	}
	isDone(e) {
		e = Math.min(e, this.state.doc.length);
		let t = this.fragments;
		return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
	}
	static get() {
		return di;
	}
}
function pl(n, e, t) {
	return rt.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ii {
	constructor(e) {
		(this.context = e), (this.tree = e.tree);
	}
	apply(e) {
		if (!e.docChanged && this.tree == this.context.tree) return this;
		let t = this.context.changes(e.changes, e.state),
			i =
				this.context.treeLen == e.startState.doc.length
					? void 0
					: Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
		return t.work(20, i) || t.takeTree(), new ii(t);
	}
	static init(e) {
		let t = Math.min(3e3, e.doc.length),
			i = ti.create(e.facet(wt).parser, e, { from: 0, to: t });
		return i.work(20, t) || i.takeTree(), new ii(i);
	}
}
Ie.state = Me.define({
	create: ii.init,
	update(n, e) {
		for (let t of e.effects) if (t.is(Ie.setState)) return t.value;
		return e.startState.facet(wt) != e.state.facet(wt)
			? ii.init(e.state)
			: n.apply(e);
	}
});
let _h = (n) => {
	let e = setTimeout(() => n(), 500);
	return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" &&
	(_h = (n) => {
		let e = -1,
			t = setTimeout(() => {
				e = requestIdleCallback(n, { timeout: 500 - 100 });
			}, 100);
		return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e));
	});
const gs =
		typeof navigator < "u" &&
		!((ms = navigator.scheduling) === null || ms === void 0) &&
		ms.isInputPending
			? () => navigator.scheduling.isInputPending()
			: null,
	sp = be.fromClass(
		class {
			constructor(e) {
				(this.view = e),
					(this.working = null),
					(this.workScheduled = 0),
					(this.chunkEnd = -1),
					(this.chunkBudget = -1),
					(this.work = this.work.bind(this)),
					this.scheduleWork();
			}
			update(e) {
				let t = this.view.state.field(Ie.state).context;
				(t.updateViewport(e.view.viewport) ||
					this.view.viewport.to > t.treeLen) &&
					this.scheduleWork(),
					e.docChanged &&
						(this.view.hasFocus && (this.chunkBudget += 50),
						this.scheduleWork()),
					this.checkAsyncSchedule(t);
			}
			scheduleWork() {
				if (this.working) return;
				let { state: e } = this.view,
					t = e.field(Ie.state);
				(t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
					(this.working = _h(this.work));
			}
			work(e) {
				this.working = null;
				let t = Date.now();
				if (
					(this.chunkEnd < t &&
						(this.chunkEnd < 0 || this.view.hasFocus) &&
						((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
					this.chunkBudget <= 0)
				)
					return;
				let {
						state: i,
						viewport: { to: s }
					} = this.view,
					r = i.field(Ie.state);
				if (r.tree == r.context.tree && r.context.isDone(s + 1e5)) return;
				let o =
						Date.now() +
						Math.min(
							this.chunkBudget,
							100,
							e && !gs ? Math.max(25, e.timeRemaining() - 5) : 1e9
						),
					l = r.context.treeLen < s && i.doc.length > s + 1e3,
					a = r.context.work(
						() => (gs && gs()) || Date.now() > o,
						s + (l ? 0 : 1e5)
					);
				(this.chunkBudget -= Date.now() - t),
					(a || this.chunkBudget <= 0) &&
						(r.context.takeTree(),
						this.view.dispatch({ effects: Ie.setState.of(new ii(r.context)) })),
					this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(),
					this.checkAsyncSchedule(r.context);
			}
			checkAsyncSchedule(e) {
				e.scheduleOn &&
					(this.workScheduled++,
					e.scheduleOn
						.then(() => this.scheduleWork())
						.catch((t) => He(this.view.state, t))
						.then(() => this.workScheduled--),
					(e.scheduleOn = null));
			}
			destroy() {
				this.working && this.working();
			}
			isWorking() {
				return !!(this.working || this.workScheduled > 0);
			}
		},
		{
			eventHandlers: {
				focus() {
					this.scheduleWork();
				}
			}
		}
	),
	wt = D.define({
		combine(n) {
			return n.length ? n[0] : null;
		},
		enables: (n) => [
			Ie.state,
			sp,
			O.contentAttributes.compute([n], (e) => {
				let t = e.facet(n);
				return t && t.name ? { "data-language": t.name } : {};
			})
		]
	});
class sy {
	constructor(e, t = []) {
		(this.language = e), (this.support = t), (this.extension = [e, t]);
	}
}
class Vh {
	constructor(e, t, i, s, r, o = void 0) {
		(this.name = e),
			(this.alias = t),
			(this.extensions = i),
			(this.filename = s),
			(this.loadFunc = r),
			(this.support = o),
			(this.loading = null);
	}
	load() {
		return (
			this.loading ||
			(this.loading = this.loadFunc().then(
				(e) => (this.support = e),
				(e) => {
					throw ((this.loading = null), e);
				}
			))
		);
	}
	static of(e) {
		let { load: t, support: i } = e;
		if (!t) {
			if (!i)
				throw new RangeError(
					"Must pass either 'load' or 'support' to LanguageDescription.of"
				);
			t = () => Promise.resolve(i);
		}
		return new Vh(
			e.name,
			(e.alias || []).concat(e.name).map((s) => s.toLowerCase()),
			e.extensions || [],
			e.filename,
			t,
			i
		);
	}
	static matchFilename(e, t) {
		for (let s of e) if (s.filename && s.filename.test(t)) return s;
		let i = /\.([^.]+)$/.exec(t);
		if (i) {
			for (let s of e) if (s.extensions.indexOf(i[1]) > -1) return s;
		}
		return null;
	}
	static matchLanguageName(e, t, i = !0) {
		t = t.toLowerCase();
		for (let s of e) if (s.alias.some((r) => r == t)) return s;
		if (i)
			for (let s of e)
				for (let r of s.alias) {
					let o = t.indexOf(r);
					if (
						o > -1 &&
						(r.length > 2 ||
							(!/\w/.test(t[o - 1]) && !/\w/.test(t[o + r.length])))
					)
						return s;
				}
		return null;
	}
}
const Fh = D.define(),
	jn = D.define({
		combine: (n) => {
			if (!n.length) return "  ";
			let e = n[0];
			if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
				throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
			return e;
		}
	});
function Rt(n) {
	let e = n.facet(jn);
	return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Li(n, e) {
	let t = "",
		i = n.tabSize,
		s = n.facet(jn)[0];
	if (s == "	") {
		for (; e >= i; ) (t += "	"), (e -= i);
		s = " ";
	}
	for (let r = 0; r < e; r++) t += s;
	return t;
}
function Vr(n, e) {
	n instanceof N && (n = new Kn(n));
	for (let i of n.state.facet(Fh)) {
		let s = i(n, e);
		if (s !== void 0) return s;
	}
	let t = pe(n.state);
	return t ? op(n, t, e) : null;
}
class Kn {
	constructor(e, t = {}) {
		(this.state = e), (this.options = t), (this.unit = Rt(e));
	}
	lineAt(e, t = 1) {
		let i = this.state.doc.lineAt(e),
			{ simulateBreak: s, simulateDoubleBreak: r } = this.options;
		return s != null && s >= i.from && s <= i.to
			? r && s == e
				? { text: "", from: e }
				: (t < 0 ? s < e : s <= e)
				? { text: i.text.slice(s - i.from), from: s }
				: { text: i.text.slice(0, s - i.from), from: i.from }
			: i;
	}
	textAfterPos(e, t = 1) {
		if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
			return "";
		let { text: i, from: s } = this.lineAt(e, t);
		return i.slice(e - s, Math.min(i.length, e + 100 - s));
	}
	column(e, t = 1) {
		let { text: i, from: s } = this.lineAt(e, t),
			r = this.countColumn(i, e - s),
			o = this.options.overrideIndentation
				? this.options.overrideIndentation(s)
				: -1;
		return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
	}
	countColumn(e, t = e.length) {
		return Fi(e, this.state.tabSize, t);
	}
	lineIndent(e, t = 1) {
		let { text: i, from: s } = this.lineAt(e, t),
			r = this.options.overrideIndentation;
		if (r) {
			let o = r(s);
			if (o > -1) return o;
		}
		return this.countColumn(i, i.search(/\S|$/));
	}
	get simulatedBreak() {
		return this.options.simulateBreak || null;
	}
}
const rp = new L();
function op(n, e, t) {
	return Hh(e.resolveInner(t).enterUnfinishedNodesBefore(t), t, n);
}
function lp(n) {
	return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function ap(n) {
	let e = n.type.prop(rp);
	if (e) return e;
	let t = n.firstChild,
		i;
	if (t && (i = t.type.prop(L.closedBy))) {
		let s = n.lastChild,
			r = s && i.indexOf(s.name) > -1;
		return (o) => Wh(o, !0, 1, void 0, r && !lp(o) ? s.from : void 0);
	}
	return n.parent == null ? hp : null;
}
function Hh(n, e, t) {
	for (; n; n = n.parent) {
		let i = ap(n);
		if (i) return i(Fr.create(t, e, n));
	}
	return null;
}
function hp() {
	return 0;
}
class Fr extends Kn {
	constructor(e, t, i) {
		super(e.state, e.options), (this.base = e), (this.pos = t), (this.node = i);
	}
	static create(e, t, i) {
		return new Fr(e, t, i);
	}
	get textAfter() {
		return this.textAfterPos(this.pos);
	}
	get baseIndent() {
		let e = this.state.doc.lineAt(this.node.from);
		for (;;) {
			let t = this.node.resolve(e.from);
			for (; t.parent && t.parent.from == t.from; ) t = t.parent;
			if (cp(t, this.node)) break;
			e = this.state.doc.lineAt(t.from);
		}
		return this.lineIndent(e.from);
	}
	continue() {
		let e = this.node.parent;
		return e ? Hh(e, this.pos, this.base) : 0;
	}
}
function cp(n, e) {
	for (let t = e; t; t = t.parent) if (n == t) return !0;
	return !1;
}
function fp(n) {
	let e = n.node,
		t = e.childAfter(e.from),
		i = e.lastChild;
	if (!t) return null;
	let s = n.options.simulateBreak,
		r = n.state.doc.lineAt(t.from),
		o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
	for (let l = t.to; ; ) {
		let a = e.childAfter(l);
		if (!a || a == i) return null;
		if (!a.type.isSkipped) return a.from < o ? t : null;
		l = a.to;
	}
}
function ry({ closing: n, align: e = !0, units: t = 1 }) {
	return (i) => Wh(i, e, t, n);
}
function Wh(n, e, t, i, s) {
	let r = n.textAfter,
		o = r.match(/^\s*/)[0].length,
		l = (i && r.slice(o, o + i.length) == i) || s == n.pos + o,
		a = e ? fp(n) : null;
	return a
		? l
			? n.column(a.from)
			: n.column(a.to)
		: n.baseIndent + (l ? 0 : n.unit * t);
}
const oy = (n) => n.baseIndent;
function ly({ except: n, units: e = 1 } = {}) {
	return (t) => {
		let i = n && n.test(t.textAfter);
		return t.baseIndent + (i ? 0 : e * t.unit);
	};
}
const up = 200;
function dp() {
	return N.transactionFilter.of((n) => {
		if (
			!n.docChanged ||
			(!n.isUserEvent("input.type") && !n.isUserEvent("input.complete"))
		)
			return n;
		let e = n.startState.languageDataAt(
			"indentOnInput",
			n.startState.selection.main.head
		);
		if (!e.length) return n;
		let t = n.newDoc,
			{ head: i } = n.newSelection.main,
			s = t.lineAt(i);
		if (i > s.from + up) return n;
		let r = t.sliceString(s.from, i);
		if (!e.some((h) => h.test(r))) return n;
		let { state: o } = n,
			l = -1,
			a = [];
		for (let { head: h } of o.selection.ranges) {
			let c = o.doc.lineAt(h);
			if (c.from == l) continue;
			l = c.from;
			let f = Vr(o, c.from);
			if (f == null) continue;
			let u = /^\s*/.exec(c.text)[0],
				d = Li(o, f);
			u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
		}
		return a.length ? [n, { changes: a, sequential: !0 }] : n;
	});
}
const pp = D.define(),
	mp = new L();
function ay(n) {
	let e = n.firstChild,
		t = n.lastChild;
	return e && e.to < t.from
		? { from: e.to, to: t.type.isError ? n.to : t.from }
		: null;
}
function gp(n, e, t) {
	let i = pe(n);
	if (i.length < t) return null;
	let s = i.resolveInner(t, 1),
		r = null;
	for (let o = s; o; o = o.parent) {
		if (o.to <= t || o.from > t) continue;
		if (r && o.from < e) break;
		let l = o.type.prop(mp);
		if (l && (o.to < i.length - 50 || i.length == n.doc.length || !yp(o))) {
			let a = l(o, n);
			a && a.from <= t && a.from >= e && a.to > t && (r = a);
		}
	}
	return r;
}
function yp(n) {
	let e = n.lastChild;
	return e && e.to == n.to && e.type.isError;
}
function Rn(n, e, t) {
	for (let i of n.facet(pp)) {
		let s = i(n, e, t);
		if (s) return s;
	}
	return gp(n, e, t);
}
function zh(n, e) {
	let t = e.mapPos(n.from, 1),
		i = e.mapPos(n.to, -1);
	return t >= i ? void 0 : { from: t, to: i };
}
const Un = R.define({ map: zh }),
	Wi = R.define({ map: zh });
function qh(n) {
	let e = [];
	for (let { head: t } of n.state.selection.ranges)
		e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
	return e;
}
const Lt = Me.define({
	create() {
		return E.none;
	},
	update(n, e) {
		n = n.map(e.changes);
		for (let t of e.effects)
			t.is(Un) && !bp(n, t.value.from, t.value.to)
				? (n = n.update({ add: [ml.range(t.value.from, t.value.to)] }))
				: t.is(Wi) &&
				  (n = n.update({
						filter: (i, s) => t.value.from != i || t.value.to != s,
						filterFrom: t.value.from,
						filterTo: t.value.to
				  }));
		if (e.selection) {
			let t = !1,
				{ head: i } = e.selection.main;
			n.between(i, i, (s, r) => {
				s < i && r > i && (t = !0);
			}),
				t &&
					(n = n.update({
						filterFrom: i,
						filterTo: i,
						filter: (s, r) => r <= i || s >= i
					}));
		}
		return n;
	},
	provide: (n) => O.decorations.from(n),
	toJSON(n, e) {
		let t = [];
		return (
			n.between(0, e.doc.length, (i, s) => {
				t.push(i, s);
			}),
			t
		);
	},
	fromJSON(n) {
		if (!Array.isArray(n) || n.length % 2)
			throw new RangeError("Invalid JSON for fold state");
		let e = [];
		for (let t = 0; t < n.length; ) {
			let i = n[t++],
				s = n[t++];
			if (typeof i != "number" || typeof s != "number")
				throw new RangeError("Invalid JSON for fold state");
			e.push(ml.range(i, s));
		}
		return E.set(e, !0);
	}
});
function Ln(n, e, t) {
	var i;
	let s = null;
	return (
		(i = n.field(Lt, !1)) === null ||
			i === void 0 ||
			i.between(e, t, (r, o) => {
				(!s || s.from > r) && (s = { from: r, to: o });
			}),
		s
	);
}
function bp(n, e, t) {
	let i = !1;
	return (
		n.between(e, e, (s, r) => {
			s == e && r == t && (i = !0);
		}),
		i
	);
}
function jh(n, e) {
	return n.field(Lt, !1) ? e : e.concat(R.appendConfig.of($h()));
}
const wp = (n) => {
		for (let e of qh(n)) {
			let t = Rn(n.state, e.from, e.to);
			if (t)
				return n.dispatch({ effects: jh(n.state, [Un.of(t), Kh(n, t)]) }), !0;
		}
		return !1;
	},
	kp = (n) => {
		if (!n.state.field(Lt, !1)) return !1;
		let e = [];
		for (let t of qh(n)) {
			let i = Ln(n.state, t.from, t.to);
			i && e.push(Wi.of(i), Kh(n, i, !1));
		}
		return e.length && n.dispatch({ effects: e }), e.length > 0;
	};
function Kh(n, e, t = !0) {
	let i = n.state.doc.lineAt(e.from).number,
		s = n.state.doc.lineAt(e.to).number;
	return O.announce.of(
		`${n.state.phrase(
			t ? "Folded lines" : "Unfolded lines"
		)} ${i} ${n.state.phrase("to")} ${s}.`
	);
}
const xp = (n) => {
		let { state: e } = n,
			t = [];
		for (let i = 0; i < e.doc.length; ) {
			let s = n.lineBlockAt(i),
				r = Rn(e, s.from, s.to);
			r && t.push(Un.of(r)), (i = (r ? n.lineBlockAt(r.to) : s).to + 1);
		}
		return t.length && n.dispatch({ effects: jh(n.state, t) }), !!t.length;
	},
	vp = (n) => {
		let e = n.state.field(Lt, !1);
		if (!e || !e.size) return !1;
		let t = [];
		return (
			e.between(0, n.state.doc.length, (i, s) => {
				t.push(Wi.of({ from: i, to: s }));
			}),
			n.dispatch({ effects: t }),
			!0
		);
	},
	Sp = [
		{ key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: wp },
		{ key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: kp },
		{ key: "Ctrl-Alt-[", run: xp },
		{ key: "Ctrl-Alt-]", run: vp }
	],
	Cp = { placeholderDOM: null, placeholderText: "…" },
	Uh = D.define({
		combine(n) {
			return _t(n, Cp);
		}
	});
function $h(n) {
	let e = [Lt, Dp];
	return n && e.push(Uh.of(n)), e;
}
const ml = E.replace({
		widget: new (class extends tt {
			toDOM(n) {
				let { state: e } = n,
					t = e.facet(Uh),
					i = (r) => {
						let o = n.lineBlockAt(n.posAtDOM(r.target)),
							l = Ln(n.state, o.from, o.to);
						l && n.dispatch({ effects: Wi.of(l) }), r.preventDefault();
					};
				if (t.placeholderDOM) return t.placeholderDOM(n, i);
				let s = document.createElement("span");
				return (
					(s.textContent = t.placeholderText),
					s.setAttribute("aria-label", e.phrase("folded code")),
					(s.title = e.phrase("unfold")),
					(s.className = "cm-foldPlaceholder"),
					(s.onclick = i),
					s
				);
			}
		})()
	}),
	Ap = {
		openText: "⌄",
		closedText: "›",
		markerDOM: null,
		domEventHandlers: {},
		foldingChanged: () => !1
	};
class ys extends bt {
	constructor(e, t) {
		super(), (this.config = e), (this.open = t);
	}
	eq(e) {
		return this.config == e.config && this.open == e.open;
	}
	toDOM(e) {
		if (this.config.markerDOM) return this.config.markerDOM(this.open);
		let t = document.createElement("span");
		return (
			(t.textContent = this.open
				? this.config.openText
				: this.config.closedText),
			(t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line")),
			t
		);
	}
}
function Mp(n = {}) {
	let e = Object.assign(Object.assign({}, Ap), n),
		t = new ys(e, !0),
		i = new ys(e, !1),
		s = be.fromClass(
			class {
				constructor(o) {
					(this.from = o.viewport.from), (this.markers = this.buildMarkers(o));
				}
				update(o) {
					(o.docChanged ||
						o.viewportChanged ||
						o.startState.facet(wt) != o.state.facet(wt) ||
						o.startState.field(Lt, !1) != o.state.field(Lt, !1) ||
						pe(o.startState) != pe(o.state) ||
						e.foldingChanged(o)) &&
						(this.markers = this.buildMarkers(o.view));
				}
				buildMarkers(o) {
					let l = new Pt();
					for (let a of o.viewportLineBlocks) {
						let h = Ln(o.state, a.from, a.to)
							? i
							: Rn(o.state, a.from, a.to)
							? t
							: null;
						h && l.add(a.from, a.from, h);
					}
					return l.finish();
				}
			}
		),
		{ domEventHandlers: r } = e;
	return [
		s,
		Dd({
			class: "cm-foldGutter",
			markers(o) {
				var l;
				return (
					((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) ||
					F.empty
				);
			},
			initialSpacer() {
				return new ys(e, !1);
			},
			domEventHandlers: Object.assign(Object.assign({}, r), {
				click: (o, l, a) => {
					if (r.click && r.click(o, l, a)) return !0;
					let h = Ln(o.state, l.from, l.to);
					if (h) return o.dispatch({ effects: Wi.of(h) }), !0;
					let c = Rn(o.state, l.from, l.to);
					return c ? (o.dispatch({ effects: Un.of(c) }), !0) : !1;
				}
			})
		}),
		$h()
	];
}
const Dp = O.baseTheme({
	".cm-foldPlaceholder": {
		backgroundColor: "#eee",
		border: "1px solid #ddd",
		color: "#888",
		borderRadius: ".2em",
		margin: "0 1px",
		padding: "0 1px",
		cursor: "pointer"
	},
	".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" }
});
class li {
	constructor(e, t) {
		this.specs = e;
		let i;
		function s(l) {
			let a = mt.newName();
			return ((i || (i = Object.create(null)))["." + a] = l), a;
		}
		const r = typeof t.all == "string" ? t.all : t.all ? s(t.all) : void 0,
			o = t.scope;
		(this.scope =
			o instanceof Ie
				? (l) => l.prop(Dt) == o.data
				: o
				? (l) => l == o
				: void 0),
			(this.style = Ih(
				e.map((l) => ({
					tag: l.tag,
					class: l.class || s(Object.assign({}, l, { tag: null }))
				})),
				{ all: r }
			).style),
			(this.module = i ? new mt(i) : null),
			(this.themeType = t.themeType);
	}
	static define(e, t) {
		return new li(e, t || {});
	}
}
const dr = D.define(),
	Gh = D.define({
		combine(n) {
			return n.length ? [n[0]] : null;
		}
	});
function bs(n) {
	let e = n.facet(dr);
	return e.length ? e : n.facet(Gh);
}
function Hr(n, e) {
	let t = [Op],
		i;
	return (
		n instanceof li &&
			(n.module && t.push(O.styleModule.of(n.module)), (i = n.themeType)),
		e?.fallback
			? t.push(Gh.of(n))
			: i
			? t.push(
					dr.computeN([O.darkTheme], (s) =>
						s.facet(O.darkTheme) == (i == "dark") ? [n] : []
					)
			  )
			: t.push(dr.of(n)),
		t
	);
}
class Tp {
	constructor(e) {
		(this.markCache = Object.create(null)),
			(this.tree = pe(e.state)),
			(this.decorations = this.buildDeco(e, bs(e.state)));
	}
	update(e) {
		let t = pe(e.state),
			i = bs(e.state),
			s = i != bs(e.startState);
		t.length < e.view.viewport.to && !s && t.type == this.tree.type
			? (this.decorations = this.decorations.map(e.changes))
			: (t != this.tree || e.viewportChanged || s) &&
			  ((this.tree = t), (this.decorations = this.buildDeco(e.view, i)));
	}
	buildDeco(e, t) {
		if (!t || !this.tree.length) return E.none;
		let i = new Pt();
		for (let { from: s, to: r } of e.visibleRanges)
			Qd(
				this.tree,
				t,
				(o, l, a) => {
					i.add(
						o,
						l,
						this.markCache[a] || (this.markCache[a] = E.mark({ class: a }))
					);
				},
				s,
				r
			);
		return i.finish();
	}
}
const Op = Vi.high(be.fromClass(Tp, { decorations: (n) => n.decorations })),
	Bp = li.define([
		{ tag: m.meta, color: "#404740" },
		{ tag: m.link, textDecoration: "underline" },
		{ tag: m.heading, textDecoration: "underline", fontWeight: "bold" },
		{ tag: m.emphasis, fontStyle: "italic" },
		{ tag: m.strong, fontWeight: "bold" },
		{ tag: m.strikethrough, textDecoration: "line-through" },
		{ tag: m.keyword, color: "#708" },
		{
			tag: [m.atom, m.bool, m.url, m.contentSeparator, m.labelName],
			color: "#219"
		},
		{ tag: [m.literal, m.inserted], color: "#164" },
		{ tag: [m.string, m.deleted], color: "#a11" },
		{ tag: [m.regexp, m.escape, m.special(m.string)], color: "#e40" },
		{ tag: m.definition(m.variableName), color: "#00f" },
		{ tag: m.local(m.variableName), color: "#30a" },
		{ tag: [m.typeName, m.namespace], color: "#085" },
		{ tag: m.className, color: "#167" },
		{ tag: [m.special(m.variableName), m.macroName], color: "#256" },
		{ tag: m.definition(m.propertyName), color: "#00c" },
		{ tag: m.comment, color: "#940" },
		{ tag: m.invalid, color: "#f00" }
	]),
	Pp = 1e4,
	Ep = "()[]{}",
	Rp = new L();
function pr(n, e, t) {
	let i = n.prop(e < 0 ? L.openedBy : L.closedBy);
	if (i) return i;
	if (n.name.length == 1) {
		let s = t.indexOf(n.name);
		if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) return [t[s + e]];
	}
	return null;
}
function mr(n) {
	let e = n.type.prop(Rp);
	return e ? e(n.node) : n;
}
function qt(n, e, t, i = {}) {
	let s = i.maxScanDistance || Pp,
		r = i.brackets || Ep,
		o = pe(n),
		l = o.resolveInner(e, t);
	for (let a = l; a; a = a.parent) {
		let h = pr(a.type, t, r);
		if (h && a.from < a.to) {
			let c = mr(a);
			if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
				return Lp(n, e, t, a, c, h, r);
		}
	}
	return Ip(n, e, t, o, l.type, s, r);
}
function Lp(n, e, t, i, s, r, o) {
	let l = i.parent,
		a = { from: s.from, to: s.to },
		h = 0,
		c = l?.cursor();
	if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
		do
			if (t < 0 ? c.to <= i.from : c.from >= i.to) {
				if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
					let f = mr(c);
					return {
						start: a,
						end: f ? { from: f.from, to: f.to } : void 0,
						matched: !0
					};
				} else if (pr(c.type, t, o)) h++;
				else if (pr(c.type, -t, o)) {
					if (h == 0) {
						let f = mr(c);
						return {
							start: a,
							end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
							matched: !1
						};
					}
					h--;
				}
			}
		while (t < 0 ? c.prevSibling() : c.nextSibling());
	return { start: a, matched: !1 };
}
function Ip(n, e, t, i, s, r, o) {
	let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1),
		a = o.indexOf(l);
	if (a < 0 || (a % 2 == 0) != t > 0) return null;
	let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
		c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0),
		f = 0;
	for (let u = 0; !c.next().done && u <= r; ) {
		let d = c.value;
		t < 0 && (u += d.length);
		let p = e + u * t;
		for (
			let g = t > 0 ? 0 : d.length - 1, y = t > 0 ? d.length : -1;
			g != y;
			g += t
		) {
			let b = o.indexOf(d[g]);
			if (!(b < 0 || i.resolveInner(p + g, 1).type != s))
				if ((b % 2 == 0) == t > 0) f++;
				else {
					if (f == 1)
						return {
							start: h,
							end: { from: p + g, to: p + g + 1 },
							matched: b >> 1 == a >> 1
						};
					f--;
				}
		}
		t > 0 && (u += d.length);
	}
	return c.done ? { start: h, matched: !1 } : null;
}
function gl(n, e, t, i = 0, s = 0) {
	e == null && ((e = n.search(/[^\s\u00a0]/)), e == -1 && (e = n.length));
	let r = s;
	for (let o = i; o < e; o++) n.charCodeAt(o) == 9 ? (r += t - (r % t)) : r++;
	return r;
}
class Jh {
	constructor(e, t, i, s) {
		(this.string = e),
			(this.tabSize = t),
			(this.indentUnit = i),
			(this.overrideIndent = s),
			(this.pos = 0),
			(this.start = 0),
			(this.lastColumnPos = 0),
			(this.lastColumnValue = 0);
	}
	eol() {
		return this.pos >= this.string.length;
	}
	sol() {
		return this.pos == 0;
	}
	peek() {
		return this.string.charAt(this.pos) || void 0;
	}
	next() {
		if (this.pos < this.string.length) return this.string.charAt(this.pos++);
	}
	eat(e) {
		let t = this.string.charAt(this.pos),
			i;
		if (
			(typeof e == "string"
				? (i = t == e)
				: (i = t && (e instanceof RegExp ? e.test(t) : e(t))),
			i)
		)
			return ++this.pos, t;
	}
	eatWhile(e) {
		let t = this.pos;
		for (; this.eat(e); );
		return this.pos > t;
	}
	eatSpace() {
		let e = this.pos;
		for (; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
		return this.pos > e;
	}
	skipToEnd() {
		this.pos = this.string.length;
	}
	skipTo(e) {
		let t = this.string.indexOf(e, this.pos);
		if (t > -1) return (this.pos = t), !0;
	}
	backUp(e) {
		this.pos -= e;
	}
	column() {
		return (
			this.lastColumnPos < this.start &&
				((this.lastColumnValue = gl(
					this.string,
					this.start,
					this.tabSize,
					this.lastColumnPos,
					this.lastColumnValue
				)),
				(this.lastColumnPos = this.start)),
			this.lastColumnValue
		);
	}
	indentation() {
		var e;
		return (e = this.overrideIndent) !== null && e !== void 0
			? e
			: gl(this.string, null, this.tabSize);
	}
	match(e, t, i) {
		if (typeof e == "string") {
			let s = (o) => (i ? o.toLowerCase() : o),
				r = this.string.substr(this.pos, e.length);
			return s(r) == s(e) ? (t !== !1 && (this.pos += e.length), !0) : null;
		} else {
			let s = this.string.slice(this.pos).match(e);
			return s && s.index > 0
				? null
				: (s && t !== !1 && (this.pos += s[0].length), s);
		}
	}
	current() {
		return this.string.slice(this.start, this.pos);
	}
}
function Np(n) {
	return {
		name: n.name || "",
		token: n.token,
		blankLine: n.blankLine || (() => {}),
		startState: n.startState || (() => !0),
		copyState: n.copyState || _p,
		indent: n.indent || (() => null),
		languageData: n.languageData || {},
		tokenTable: n.tokenTable || zr
	};
}
function _p(n) {
	if (typeof n != "object") return n;
	let e = {};
	for (let t in n) {
		let i = n[t];
		e[t] = i instanceof Array ? i.slice() : i;
	}
	return e;
}
const yl = new WeakMap();
class jt extends Ie {
	constructor(e) {
		let t = Nh(e.languageData),
			i = Np(e),
			s,
			r = new (class extends Rh {
				createParse(o, l, a) {
					return new Fp(s, o, l, a);
				}
			})();
		super(t, r, [Fh.of((o, l) => this.getIndent(o, l))], e.name),
			(this.topNode = zp(t)),
			(s = this),
			(this.streamParser = i),
			(this.stateAfter = new L({ perNode: !0 })),
			(this.tokenTable = e.tokenTable ? new Qh(i.tokenTable) : Wp);
	}
	static define(e) {
		return new jt(e);
	}
	getIndent(e, t) {
		let i = pe(e.state),
			s = i.resolve(t);
		for (; s && s.type != this.topNode; ) s = s.parent;
		if (!s) return null;
		let r,
			{ overrideIndentation: o } = e.options;
		o && ((r = yl.get(e.state)), r != null && r < t - 1e4 && (r = void 0));
		let l = Wr(this, i, 0, s.from, r ?? t),
			a,
			h;
		if (
			(l
				? ((h = l.state), (a = l.pos + 1))
				: ((h = this.streamParser.startState(e.unit)), (a = 0)),
			t - a > 1e4)
		)
			return null;
		for (; a < t; ) {
			let f = e.state.doc.lineAt(a),
				u = Math.min(t, f.to);
			if (f.length) {
				let d = o ? o(f.from) : -1,
					p = new Jh(f.text, e.state.tabSize, e.unit, d < 0 ? void 0 : d);
				for (; p.pos < u - f.from; ) Xh(this.streamParser.token, p, h);
			} else this.streamParser.blankLine(h, e.unit);
			if (u == t) break;
			a = f.to + 1;
		}
		let c = e.lineAt(t);
		return (
			o && r == null && yl.set(e.state, c.from),
			this.streamParser.indent(h, /^\s*(.*)/.exec(c.text)[1], e)
		);
	}
	get allowsNesting() {
		return !1;
	}
}
function Wr(n, e, t, i, s) {
	let r = t >= i && t + e.length <= s && e.prop(n.stateAfter);
	if (r) return { state: n.streamParser.copyState(r), pos: t + e.length };
	for (let o = e.children.length - 1; o >= 0; o--) {
		let l = e.children[o],
			a = t + e.positions[o],
			h = l instanceof z && a < s && Wr(n, l, a, i, s);
		if (h) return h;
	}
	return null;
}
function Yh(n, e, t, i, s) {
	if (s && t <= 0 && i >= e.length) return e;
	!s && e.type == n.topNode && (s = !0);
	for (let r = e.children.length - 1; r >= 0; r--) {
		let o = e.positions[r],
			l = e.children[r],
			a;
		if (o < i && l instanceof z) {
			if (!(a = Yh(n, l, t - o, i - o, s))) break;
			return s
				? new z(
						e.type,
						e.children.slice(0, r).concat(a),
						e.positions.slice(0, r + 1),
						o + a.length
				  )
				: a;
		}
	}
	return null;
}
function Vp(n, e, t, i) {
	for (let s of e) {
		let r = s.from + (s.openStart ? 25 : 0),
			o = s.to - (s.openEnd ? 25 : 0),
			l = r <= t && o > t && Wr(n, s.tree, 0 - s.offset, t, o),
			a;
		if (l && (a = Yh(n, s.tree, t + s.offset, l.pos + s.offset, !1)))
			return { state: l.state, tree: a };
	}
	return { state: n.streamParser.startState(i ? Rt(i) : 4), tree: z.empty };
}
class Fp {
	constructor(e, t, i, s) {
		(this.lang = e),
			(this.input = t),
			(this.fragments = i),
			(this.ranges = s),
			(this.stoppedAt = null),
			(this.chunks = []),
			(this.chunkPos = []),
			(this.chunk = []),
			(this.chunkReused = void 0),
			(this.rangeIndex = 0),
			(this.to = s[s.length - 1].to);
		let r = ti.get(),
			o = s[0].from,
			{ state: l, tree: a } = Vp(e, i, o, r?.state);
		(this.state = l), (this.parsedPos = this.chunkStart = o + a.length);
		for (let h = 0; h < a.children.length; h++)
			this.chunks.push(a.children[h]), this.chunkPos.push(a.positions[h]);
		r &&
			this.parsedPos < r.viewport.from - 1e5 &&
			((this.state = this.lang.streamParser.startState(Rt(r.state))),
			r.skipUntilInView(this.parsedPos, r.viewport.from),
			(this.parsedPos = r.viewport.from)),
			this.moveRangeIndex();
	}
	advance() {
		let e = ti.get(),
			t = this.stoppedAt == null ? this.to : Math.min(this.to, this.stoppedAt),
			i = Math.min(t, this.chunkStart + 2048);
		for (e && (i = Math.min(i, e.viewport.to)); this.parsedPos < i; )
			this.parseLine(e);
		return (
			this.chunkStart < this.parsedPos && this.finishChunk(),
			this.parsedPos >= t
				? this.finish()
				: e && this.parsedPos >= e.viewport.to
				? (e.skipUntilInView(this.parsedPos, t), this.finish())
				: null
		);
	}
	stopAt(e) {
		this.stoppedAt = e;
	}
	lineAfter(e) {
		let t = this.input.chunk(e);
		if (this.input.lineChunks)
			t ==
				`
` && (t = "");
		else {
			let i = t.indexOf(`
`);
			i > -1 && (t = t.slice(0, i));
		}
		return e + t.length <= this.to ? t : t.slice(0, this.to - e);
	}
	nextLine() {
		let e = this.parsedPos,
			t = this.lineAfter(e),
			i = e + t.length;
		for (let s = this.rangeIndex; ; ) {
			let r = this.ranges[s].to;
			if (
				r >= i ||
				((t = t.slice(0, r - (i - t.length))), s++, s == this.ranges.length)
			)
				break;
			let o = this.ranges[s].from,
				l = this.lineAfter(o);
			(t += l), (i = o + l.length);
		}
		return { line: t, end: i };
	}
	skipGapsTo(e, t, i) {
		for (;;) {
			let s = this.ranges[this.rangeIndex].to,
				r = e + t;
			if (i > 0 ? s > r : s >= r) break;
			let o = this.ranges[++this.rangeIndex].from;
			t += o - s;
		}
		return t;
	}
	moveRangeIndex() {
		for (; this.ranges[this.rangeIndex].to < this.parsedPos; )
			this.rangeIndex++;
	}
	emitToken(e, t, i, s, r) {
		if (this.ranges.length > 1) {
			(r = this.skipGapsTo(t, r, 1)), (t += r);
			let o = this.chunk.length;
			(r = this.skipGapsTo(i, r, -1)), (i += r), (s += this.chunk.length - o);
		}
		return this.chunk.push(e, t, i, s), r;
	}
	parseLine(e) {
		let { line: t, end: i } = this.nextLine(),
			s = 0,
			{ streamParser: r } = this.lang,
			o = new Jh(t, e ? e.state.tabSize : 4, e ? Rt(e.state) : 2);
		if (o.eol()) r.blankLine(this.state, o.indentUnit);
		else
			for (; !o.eol(); ) {
				let l = Xh(r.token, o, this.state);
				if (
					(l &&
						(s = this.emitToken(
							this.lang.tokenTable.resolve(l),
							this.parsedPos + o.start,
							this.parsedPos + o.pos,
							4,
							s
						)),
					o.start > 1e4)
				)
					break;
			}
		(this.parsedPos = i),
			this.moveRangeIndex(),
			this.parsedPos < this.to && this.parsedPos++;
	}
	finishChunk() {
		let e = z.build({
			buffer: this.chunk,
			start: this.chunkStart,
			length: this.parsedPos - this.chunkStart,
			nodeSet: Hp,
			topID: 0,
			maxBufferLength: 2048,
			reused: this.chunkReused
		});
		(e = new z(e.type, e.children, e.positions, e.length, [
			[this.lang.stateAfter, this.lang.streamParser.copyState(this.state)]
		])),
			this.chunks.push(e),
			this.chunkPos.push(this.chunkStart - this.ranges[0].from),
			(this.chunk = []),
			(this.chunkReused = void 0),
			(this.chunkStart = this.parsedPos);
	}
	finish() {
		return new z(
			this.lang.topNode,
			this.chunks,
			this.chunkPos,
			this.parsedPos - this.ranges[0].from
		).balance();
	}
}
function Xh(n, e, t) {
	e.start = e.pos;
	for (let i = 0; i < 10; i++) {
		let s = n(e, t);
		if (e.pos > e.start) return s;
	}
	throw new Error("Stream parser failed to advance stream.");
}
const zr = Object.create(null),
	Ii = [ve.none],
	Hp = new Lr(Ii),
	bl = [],
	Zh = Object.create(null);
for (let [n, e] of [
	["variable", "variableName"],
	["variable-2", "variableName.special"],
	["string-2", "string.special"],
	["def", "variableName.definition"],
	["tag", "tagName"],
	["attribute", "attributeName"],
	["type", "typeName"],
	["builtin", "variableName.standard"],
	["qualifier", "modifier"],
	["error", "invalid"],
	["header", "heading"],
	["property", "propertyName"]
])
	Zh[n] = ec(zr, e);
class Qh {
	constructor(e) {
		(this.extra = e), (this.table = Object.assign(Object.create(null), Zh));
	}
	resolve(e) {
		return e ? this.table[e] || (this.table[e] = ec(this.extra, e)) : 0;
	}
}
const Wp = new Qh(zr);
function ws(n, e) {
	bl.indexOf(n) > -1 || (bl.push(n), console.warn(e));
}
function ec(n, e) {
	let t = null;
	for (let r of e.split(".")) {
		let o = n[r] || m[r];
		o
			? typeof o == "function"
				? t
					? (t = o(t))
					: ws(r, `Modifier ${r} used at start of tag`)
				: t
				? ws(r, `Tag ${r} used as modifier`)
				: (t = o)
			: ws(r, `Unknown highlighting tag ${r}`);
	}
	if (!t) return 0;
	let i = e.replace(/ /g, "_"),
		s = ve.define({ id: Ii.length, name: i, props: [Xd({ [i]: t })] });
	return Ii.push(s), s.id;
}
function zp(n) {
	let e = ve.define({
		id: Ii.length,
		name: "Document",
		props: [Dt.add(() => n)]
	});
	return Ii.push(e), e;
}
const qp = (n) => {
	let e = jr(n.state);
	return e.line ? jp(n) : e.block ? Up(n) : !1;
};
function qr(n, e) {
	return ({ state: t, dispatch: i }) => {
		if (t.readOnly) return !1;
		let s = n(e, t);
		return s ? (i(t.update(s)), !0) : !1;
	};
}
const jp = qr(Jp, 0),
	Kp = qr(tc, 0),
	Up = qr((n, e) => tc(n, e, Gp(e)), 0);
function jr(n, e = n.selection.main.head) {
	let t = n.languageDataAt("commentTokens", e);
	return t.length ? t[0] : {};
}
const pi = 50;
function $p(n, { open: e, close: t }, i, s) {
	let r = n.sliceDoc(i - pi, i),
		o = n.sliceDoc(s, s + pi),
		l = /\s*$/.exec(r)[0].length,
		a = /^\s*/.exec(o)[0].length,
		h = r.length - l;
	if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
		return {
			open: { pos: i - l, margin: l && 1 },
			close: { pos: s + a, margin: a && 1 }
		};
	let c, f;
	s - i <= 2 * pi
		? (c = f = n.sliceDoc(i, s))
		: ((c = n.sliceDoc(i, i + pi)), (f = n.sliceDoc(s - pi, s)));
	let u = /^\s*/.exec(c)[0].length,
		d = /\s*$/.exec(f)[0].length,
		p = f.length - d - t.length;
	return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t
		? {
				open: {
					pos: i + u + e.length,
					margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0
				},
				close: {
					pos: s - d - t.length,
					margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
				}
		  }
		: null;
}
function Gp(n) {
	let e = [];
	for (let t of n.selection.ranges) {
		let i = n.doc.lineAt(t.from),
			s = t.to <= i.to ? i : n.doc.lineAt(t.to),
			r = e.length - 1;
		r >= 0 && e[r].to > i.from
			? (e[r].to = s.to)
			: e.push({ from: i.from, to: s.to });
	}
	return e;
}
function tc(n, e, t = e.selection.ranges) {
	let i = t.map((r) => jr(e, r.from).block);
	if (!i.every((r) => r)) return null;
	let s = t.map((r, o) => $p(e, i[o], r.from, r.to));
	if (n != 2 && !s.every((r) => r))
		return {
			changes: e.changes(
				t.map((r, o) =>
					s[o]
						? []
						: [
								{ from: r.from, insert: i[o].open + " " },
								{ from: r.to, insert: " " + i[o].close }
						  ]
				)
			)
		};
	if (n != 1 && s.some((r) => r)) {
		let r = [];
		for (let o = 0, l; o < s.length; o++)
			if ((l = s[o])) {
				let a = i[o],
					{ open: h, close: c } = l;
				r.push(
					{ from: h.pos - a.open.length, to: h.pos + h.margin },
					{ from: c.pos - c.margin, to: c.pos + a.close.length }
				);
			}
		return { changes: r };
	}
	return null;
}
function Jp(n, e, t = e.selection.ranges) {
	let i = [],
		s = -1;
	for (let { from: r, to: o } of t) {
		let l = i.length,
			a = 1e9;
		for (let h = r; h <= o; ) {
			let c = e.doc.lineAt(h);
			if (c.from > s && (r == o || o > c.from)) {
				s = c.from;
				let f = jr(e, h).line;
				if (!f) continue;
				let u = /^\s*/.exec(c.text)[0].length,
					d = u == c.length,
					p = c.text.slice(u, u + f.length) == f ? u : -1;
				u < c.text.length && u < a && (a = u),
					i.push({
						line: c,
						comment: p,
						token: f,
						indent: u,
						empty: d,
						single: !1
					});
			}
			h = c.to + 1;
		}
		if (a < 1e9)
			for (let h = l; h < i.length; h++)
				i[h].indent < i[h].line.text.length && (i[h].indent = a);
		i.length == l + 1 && (i[l].single = !0);
	}
	if (n != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
		let r = [];
		for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
			(f || !c) && r.push({ from: l.from + h, insert: a + " " });
		let o = e.changes(r);
		return { changes: o, selection: e.selection.map(o, 1) };
	} else if (n != 1 && i.some((r) => r.comment >= 0)) {
		let r = [];
		for (let { line: o, comment: l, token: a } of i)
			if (l >= 0) {
				let h = o.from + l,
					c = h + a.length;
				o.text[c - o.from] == " " && c++, r.push({ from: h, to: c });
			}
		return { changes: r };
	}
	return null;
}
const gr = Nt.define(),
	Yp = Nt.define(),
	Xp = D.define(),
	ic = D.define({
		combine(n) {
			return _t(
				n,
				{ minDepth: 100, newGroupDelay: 500 },
				{ minDepth: Math.max, newGroupDelay: Math.min }
			);
		}
	});
function Zp(n) {
	let e = 0;
	return n.iterChangedRanges((t, i) => (e = i)), e;
}
const nc = Me.define({
	create() {
		return Xe.empty;
	},
	update(n, e) {
		let t = e.state.facet(ic),
			i = e.annotation(gr);
		if (i) {
			let a = e.docChanged ? k.single(Zp(e.changes)) : void 0,
				h = Se.fromTransaction(e, a),
				c = i.side,
				f = c == 0 ? n.undone : n.done;
			return (
				h
					? (f = In(f, f.length, t.minDepth, h))
					: (f = oc(f, e.startState.selection)),
				new Xe(c == 0 ? i.rest : f, c == 0 ? f : i.rest)
			);
		}
		let s = e.annotation(Yp);
		if (
			((s == "full" || s == "before") && (n = n.isolate()),
			e.annotation(re.addToHistory) === !1)
		)
			return e.changes.empty ? n : n.addMapping(e.changes.desc);
		let r = Se.fromTransaction(e),
			o = e.annotation(re.time),
			l = e.annotation(re.userEvent);
		return (
			r
				? (n = n.addChanges(r, o, l, t.newGroupDelay, t.minDepth))
				: e.selection &&
				  (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)),
			(s == "full" || s == "after") && (n = n.isolate()),
			n
		);
	},
	toJSON(n) {
		return {
			done: n.done.map((e) => e.toJSON()),
			undone: n.undone.map((e) => e.toJSON())
		};
	},
	fromJSON(n) {
		return new Xe(n.done.map(Se.fromJSON), n.undone.map(Se.fromJSON));
	}
});
function Qp(n = {}) {
	return [
		nc,
		ic.of(n),
		O.domEventHandlers({
			beforeinput(e, t) {
				let i =
					e.inputType == "historyUndo"
						? sc
						: e.inputType == "historyRedo"
						? yr
						: null;
				return i ? (e.preventDefault(), i(t)) : !1;
			}
		})
	];
}
function $n(n, e) {
	return function ({ state: t, dispatch: i }) {
		if (!e && t.readOnly) return !1;
		let s = t.field(nc, !1);
		if (!s) return !1;
		let r = s.pop(n, t, e);
		return r ? (i(r), !0) : !1;
	};
}
const sc = $n(0, !1),
	yr = $n(1, !1),
	em = $n(0, !0),
	tm = $n(1, !0);
class Se {
	constructor(e, t, i, s, r) {
		(this.changes = e),
			(this.effects = t),
			(this.mapped = i),
			(this.startSelection = s),
			(this.selectionsAfter = r);
	}
	setSelAfter(e) {
		return new Se(
			this.changes,
			this.effects,
			this.mapped,
			this.startSelection,
			e
		);
	}
	toJSON() {
		var e, t, i;
		return {
			changes:
				(e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
			mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
			startSelection:
				(i = this.startSelection) === null || i === void 0
					? void 0
					: i.toJSON(),
			selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
		};
	}
	static fromJSON(e) {
		return new Se(
			e.changes && ne.fromJSON(e.changes),
			[],
			e.mapped && Ze.fromJSON(e.mapped),
			e.startSelection && k.fromJSON(e.startSelection),
			e.selectionsAfter.map(k.fromJSON)
		);
	}
	static fromTransaction(e, t) {
		let i = Ne;
		for (let s of e.startState.facet(Xp)) {
			let r = s(e);
			r.length && (i = i.concat(r));
		}
		return !i.length && e.changes.empty
			? null
			: new Se(
					e.changes.invert(e.startState.doc),
					i,
					void 0,
					t || e.startState.selection,
					Ne
			  );
	}
	static selection(e) {
		return new Se(void 0, Ne, void 0, void 0, e);
	}
}
function In(n, e, t, i) {
	let s = e + 1 > t + 20 ? e - t - 1 : 0,
		r = n.slice(s, e);
	return r.push(i), r;
}
function im(n, e) {
	let t = [],
		i = !1;
	return (
		n.iterChangedRanges((s, r) => t.push(s, r)),
		e.iterChangedRanges((s, r, o, l) => {
			for (let a = 0; a < t.length; ) {
				let h = t[a++],
					c = t[a++];
				l >= h && o <= c && (i = !0);
			}
		}),
		i
	);
}
function nm(n, e) {
	return (
		n.ranges.length == e.ranges.length &&
		n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0
	);
}
function rc(n, e) {
	return n.length ? (e.length ? n.concat(e) : n) : e;
}
const Ne = [],
	sm = 200;
function oc(n, e) {
	if (n.length) {
		let t = n[n.length - 1],
			i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - sm));
		return i.length && i[i.length - 1].eq(e)
			? n
			: (i.push(e), In(n, n.length - 1, 1e9, t.setSelAfter(i)));
	} else return [Se.selection([e])];
}
function rm(n) {
	let e = n[n.length - 1],
		t = n.slice();
	return (
		(t[n.length - 1] = e.setSelAfter(
			e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)
		)),
		t
	);
}
function ks(n, e) {
	if (!n.length) return n;
	let t = n.length,
		i = Ne;
	for (; t; ) {
		let s = om(n[t - 1], e, i);
		if ((s.changes && !s.changes.empty) || s.effects.length) {
			let r = n.slice(0, t);
			return (r[t - 1] = s), r;
		} else (e = s.mapped), t--, (i = s.selectionsAfter);
	}
	return i.length ? [Se.selection(i)] : Ne;
}
function om(n, e, t) {
	let i = rc(
		n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Ne,
		t
	);
	if (!n.changes) return Se.selection(i);
	let s = n.changes.map(e),
		r = e.mapDesc(n.changes, !0),
		o = n.mapped ? n.mapped.composeDesc(r) : r;
	return new Se(s, R.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const lm = /^(input\.type|delete)($|\.)/;
class Xe {
	constructor(e, t, i = 0, s = void 0) {
		(this.done = e),
			(this.undone = t),
			(this.prevTime = i),
			(this.prevUserEvent = s);
	}
	isolate() {
		return this.prevTime ? new Xe(this.done, this.undone) : this;
	}
	addChanges(e, t, i, s, r) {
		let o = this.done,
			l = o[o.length - 1];
		return (
			l &&
			l.changes &&
			!l.changes.empty &&
			e.changes &&
			(!i || lm.test(i)) &&
			((!l.selectionsAfter.length &&
				t - this.prevTime < s &&
				im(l.changes, e.changes)) ||
				i == "input.type.compose")
				? (o = In(
						o,
						o.length - 1,
						r,
						new Se(
							e.changes.compose(l.changes),
							rc(e.effects, l.effects),
							l.mapped,
							l.startSelection,
							Ne
						)
				  ))
				: (o = In(o, o.length, r, e)),
			new Xe(o, Ne, t, i)
		);
	}
	addSelection(e, t, i, s) {
		let r = this.done.length
			? this.done[this.done.length - 1].selectionsAfter
			: Ne;
		return r.length > 0 &&
			t - this.prevTime < s &&
			i == this.prevUserEvent &&
			i &&
			/^select($|\.)/.test(i) &&
			nm(r[r.length - 1], e)
			? this
			: new Xe(oc(this.done, e), this.undone, t, i);
	}
	addMapping(e) {
		return new Xe(
			ks(this.done, e),
			ks(this.undone, e),
			this.prevTime,
			this.prevUserEvent
		);
	}
	pop(e, t, i) {
		let s = e == 0 ? this.done : this.undone;
		if (s.length == 0) return null;
		let r = s[s.length - 1];
		if (i && r.selectionsAfter.length)
			return t.update({
				selection: r.selectionsAfter[r.selectionsAfter.length - 1],
				annotations: gr.of({ side: e, rest: rm(s) }),
				userEvent: e == 0 ? "select.undo" : "select.redo",
				scrollIntoView: !0
			});
		if (r.changes) {
			let o = s.length == 1 ? Ne : s.slice(0, s.length - 1);
			return (
				r.mapped && (o = ks(o, r.mapped)),
				t.update({
					changes: r.changes,
					selection: r.startSelection,
					effects: r.effects,
					annotations: gr.of({ side: e, rest: o }),
					filter: !1,
					userEvent: e == 0 ? "undo" : "redo",
					scrollIntoView: !0
				})
			);
		} else return null;
	}
}
Xe.empty = new Xe(Ne, Ne);
const am = [
	{ key: "Mod-z", run: sc, preventDefault: !0 },
	{ key: "Mod-y", mac: "Mod-Shift-z", run: yr, preventDefault: !0 },
	{ linux: "Ctrl-Shift-z", run: yr, preventDefault: !0 },
	{ key: "Mod-u", run: em, preventDefault: !0 },
	{ key: "Alt-u", mac: "Mod-Shift-u", run: tm, preventDefault: !0 }
];
function ai(n, e) {
	return k.create(n.ranges.map(e), n.mainIndex);
}
function it(n, e) {
	return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function We({ state: n, dispatch: e }, t) {
	let i = ai(n.selection, t);
	return i.eq(n.selection) ? !1 : (e(it(n, i)), !0);
}
function Gn(n, e) {
	return k.cursor(e ? n.to : n.from);
}
function lc(n, e) {
	return We(n, (t) => (t.empty ? n.moveByChar(t, e) : Gn(t, e)));
}
function we(n) {
	return n.textDirectionAt(n.state.selection.main.head) == Z.LTR;
}
const ac = (n) => lc(n, !we(n)),
	hc = (n) => lc(n, we(n));
function cc(n, e) {
	return We(n, (t) => (t.empty ? n.moveByGroup(t, e) : Gn(t, e)));
}
const hm = (n) => cc(n, !we(n)),
	cm = (n) => cc(n, we(n));
function fm(n, e, t) {
	if (e.type.prop(t)) return !0;
	let i = e.to - e.from;
	return (
		(i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to)))) || e.firstChild
	);
}
function Jn(n, e, t) {
	let i = pe(n).resolveInner(e.head),
		s = t ? L.closedBy : L.openedBy;
	for (let a = e.head; ; ) {
		let h = t ? i.childAfter(a) : i.childBefore(a);
		if (!h) break;
		fm(n, h, s) ? (i = h) : (a = t ? h.to : h.from);
	}
	let r = i.type.prop(s),
		o,
		l;
	return (
		r && (o = t ? qt(n, i.from, 1) : qt(n, i.to, -1)) && o.matched
			? (l = t ? o.end.to : o.end.from)
			: (l = t ? i.to : i.from),
		k.cursor(l, t ? -1 : 1)
	);
}
const um = (n) => We(n, (e) => Jn(n.state, e, !we(n))),
	dm = (n) => We(n, (e) => Jn(n.state, e, we(n)));
function fc(n, e) {
	return We(n, (t) => {
		if (!t.empty) return Gn(t, e);
		let i = n.moveVertically(t, e);
		return i.head != t.head ? i : n.moveToLineBoundary(t, e);
	});
}
const uc = (n) => fc(n, !1),
	dc = (n) => fc(n, !0);
function pc(n) {
	return Math.max(
		n.defaultLineHeight,
		Math.min(n.dom.clientHeight, innerHeight) - 5
	);
}
function mc(n, e) {
	let { state: t } = n,
		i = ai(t.selection, (l) =>
			l.empty ? n.moveVertically(l, e, pc(n)) : Gn(l, e)
		);
	if (i.eq(t.selection)) return !1;
	let s = n.coordsAtPos(t.selection.main.head),
		r = n.scrollDOM.getBoundingClientRect(),
		o;
	return (
		s &&
			s.top > r.top &&
			s.bottom < r.bottom &&
			s.top - r.top <=
				n.scrollDOM.scrollHeight -
					n.scrollDOM.scrollTop -
					n.scrollDOM.clientHeight &&
			(o = O.scrollIntoView(i.main.head, {
				y: "start",
				yMargin: s.top - r.top
			})),
		n.dispatch(it(t, i), { effects: o }),
		!0
	);
}
const wl = (n) => mc(n, !1),
	br = (n) => mc(n, !0);
function kt(n, e, t) {
	let i = n.lineBlockAt(e.head),
		s = n.moveToLineBoundary(e, t);
	if (
		(s.head == e.head &&
			s.head != (t ? i.to : i.from) &&
			(s = n.moveToLineBoundary(e, t, !1)),
		!t && s.head == i.from && i.length)
	) {
		let r = /^\s*/.exec(
			n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to))
		)[0].length;
		r && e.head != i.from + r && (s = k.cursor(i.from + r));
	}
	return s;
}
const pm = (n) => We(n, (e) => kt(n, e, !0)),
	mm = (n) => We(n, (e) => kt(n, e, !1)),
	gm = (n) => We(n, (e) => kt(n, e, !we(n))),
	ym = (n) => We(n, (e) => kt(n, e, we(n))),
	bm = (n) => We(n, (e) => k.cursor(n.lineBlockAt(e.head).from, 1)),
	wm = (n) => We(n, (e) => k.cursor(n.lineBlockAt(e.head).to, -1));
function km(n, e, t) {
	let i = !1,
		s = ai(n.selection, (r) => {
			let o =
				qt(n, r.head, -1) ||
				qt(n, r.head, 1) ||
				(r.head > 0 && qt(n, r.head - 1, 1)) ||
				(r.head < n.doc.length && qt(n, r.head + 1, -1));
			if (!o || !o.end) return r;
			i = !0;
			let l = o.start.from == r.head ? o.end.to : o.end.from;
			return t ? k.range(r.anchor, l) : k.cursor(l);
		});
	return i ? (e(it(n, s)), !0) : !1;
}
const xm = ({ state: n, dispatch: e }) => km(n, e, !1);
function Ve(n, e) {
	let t = ai(n.state.selection, (i) => {
		let s = e(i);
		return k.range(i.anchor, s.head, s.goalColumn);
	});
	return t.eq(n.state.selection) ? !1 : (n.dispatch(it(n.state, t)), !0);
}
function gc(n, e) {
	return Ve(n, (t) => n.moveByChar(t, e));
}
const yc = (n) => gc(n, !we(n)),
	bc = (n) => gc(n, we(n));
function wc(n, e) {
	return Ve(n, (t) => n.moveByGroup(t, e));
}
const vm = (n) => wc(n, !we(n)),
	Sm = (n) => wc(n, we(n)),
	Cm = (n) => Ve(n, (e) => Jn(n.state, e, !we(n))),
	Am = (n) => Ve(n, (e) => Jn(n.state, e, we(n)));
function kc(n, e) {
	return Ve(n, (t) => n.moveVertically(t, e));
}
const xc = (n) => kc(n, !1),
	vc = (n) => kc(n, !0);
function Sc(n, e) {
	return Ve(n, (t) => n.moveVertically(t, e, pc(n)));
}
const kl = (n) => Sc(n, !1),
	xl = (n) => Sc(n, !0),
	Mm = (n) => Ve(n, (e) => kt(n, e, !0)),
	Dm = (n) => Ve(n, (e) => kt(n, e, !1)),
	Tm = (n) => Ve(n, (e) => kt(n, e, !we(n))),
	Om = (n) => Ve(n, (e) => kt(n, e, we(n))),
	Bm = (n) => Ve(n, (e) => k.cursor(n.lineBlockAt(e.head).from)),
	Pm = (n) => Ve(n, (e) => k.cursor(n.lineBlockAt(e.head).to)),
	vl = ({ state: n, dispatch: e }) => (e(it(n, { anchor: 0 })), !0),
	Sl = ({ state: n, dispatch: e }) => (e(it(n, { anchor: n.doc.length })), !0),
	Cl = ({ state: n, dispatch: e }) => (
		e(it(n, { anchor: n.selection.main.anchor, head: 0 })), !0
	),
	Al = ({ state: n, dispatch: e }) => (
		e(it(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0
	),
	Em = ({ state: n, dispatch: e }) => (
		e(
			n.update({
				selection: { anchor: 0, head: n.doc.length },
				userEvent: "select"
			})
		),
		!0
	),
	Rm = ({ state: n, dispatch: e }) => {
		let t = Xn(n).map(({ from: i, to: s }) =>
			k.range(i, Math.min(s + 1, n.doc.length))
		);
		return e(n.update({ selection: k.create(t), userEvent: "select" })), !0;
	},
	Lm = ({ state: n, dispatch: e }) => {
		let t = ai(n.selection, (i) => {
			var s;
			let r = pe(n).resolveInner(i.head, 1);
			for (
				;
				!(
					(r.from < i.from && r.to >= i.to) ||
					(r.to > i.to && r.from <= i.from) ||
					!(!((s = r.parent) === null || s === void 0) && s.parent)
				);

			)
				r = r.parent;
			return k.range(r.to, r.from);
		});
		return e(it(n, t)), !0;
	},
	Im = ({ state: n, dispatch: e }) => {
		let t = n.selection,
			i = null;
		return (
			t.ranges.length > 1
				? (i = k.create([t.main]))
				: t.main.empty || (i = k.create([k.cursor(t.main.head)])),
			i ? (e(it(n, i)), !0) : !1
		);
	};
function Yn(n, e) {
	if (n.state.readOnly) return !1;
	let t = "delete.selection",
		{ state: i } = n,
		s = i.changeByRange((r) => {
			let { from: o, to: l } = r;
			if (o == l) {
				let a = e(o);
				a < o
					? ((t = "delete.backward"), (a = on(n, a, !1)))
					: a > o && ((t = "delete.forward"), (a = on(n, a, !0))),
					(o = Math.min(o, a)),
					(l = Math.max(l, a));
			} else (o = on(n, o, !1)), (l = on(n, l, !0));
			return o == l
				? { range: r }
				: { changes: { from: o, to: l }, range: k.cursor(o) };
		});
	return s.changes.empty
		? !1
		: (n.dispatch(
				i.update(s, {
					scrollIntoView: !0,
					userEvent: t,
					effects:
						t == "delete.selection"
							? O.announce.of(i.phrase("Selection deleted"))
							: void 0
				})
		  ),
		  !0);
}
function on(n, e, t) {
	if (n instanceof O)
		for (let i of n.state.facet(O.atomicRanges).map((s) => s(n)))
			i.between(e, e, (s, r) => {
				s < e && r > e && (e = t ? r : s);
			});
	return e;
}
const Cc = (n, e) =>
		Yn(n, (t) => {
			let { state: i } = n,
				s = i.doc.lineAt(t),
				r,
				o;
			if (
				!e &&
				t > s.from &&
				t < s.from + 200 &&
				!/[^ \t]/.test((r = s.text.slice(0, t - s.from)))
			) {
				if (r[r.length - 1] == "	") return t - 1;
				let l = Fi(r, i.tabSize),
					a = l % Rt(i) || Rt(i);
				for (let h = 0; h < a && r[r.length - 1 - h] == " "; h++) t--;
				o = t;
			} else
				(o = Oe(s.text, t - s.from, e, e) + s.from),
					o == t && s.number != (e ? i.doc.lines : 1) && (o += e ? 1 : -1);
			return o;
		}),
	wr = (n) => Cc(n, !1),
	Ac = (n) => Cc(n, !0),
	Mc = (n, e) =>
		Yn(n, (t) => {
			let i = t,
				{ state: s } = n,
				r = s.doc.lineAt(i),
				o = s.charCategorizer(i);
			for (let l = null; ; ) {
				if (i == (e ? r.to : r.from)) {
					i == t && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
					break;
				}
				let a = Oe(r.text, i - r.from, e) + r.from,
					h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from),
					c = o(h);
				if (l != null && c != l) break;
				(h != " " || i != t) && (l = c), (i = a);
			}
			return i;
		}),
	Dc = (n) => Mc(n, !1),
	Nm = (n) => Mc(n, !0),
	Tc = (n) =>
		Yn(n, (e) => {
			let t = n.lineBlockAt(e).to;
			return e < t ? t : Math.min(n.state.doc.length, e + 1);
		}),
	_m = (n) =>
		Yn(n, (e) => {
			let t = n.lineBlockAt(e).from;
			return e > t ? t : Math.max(0, e - 1);
		}),
	Vm = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let t = n.changeByRange((i) => ({
			changes: { from: i.from, to: i.to, insert: _.of(["", ""]) },
			range: k.cursor(i.from)
		}));
		return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
	},
	Fm = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let t = n.changeByRange((i) => {
			if (!i.empty || i.from == 0 || i.from == n.doc.length)
				return { range: i };
			let s = i.from,
				r = n.doc.lineAt(s),
				o = s == r.from ? s - 1 : Oe(r.text, s - r.from, !1) + r.from,
				l = s == r.to ? s + 1 : Oe(r.text, s - r.from, !0) + r.from;
			return {
				changes: {
					from: o,
					to: l,
					insert: n.doc.slice(s, l).append(n.doc.slice(o, s))
				},
				range: k.cursor(l)
			};
		});
		return t.changes.empty
			? !1
			: (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })),
			  !0);
	};
function Xn(n) {
	let e = [],
		t = -1;
	for (let i of n.selection.ranges) {
		let s = n.doc.lineAt(i.from),
			r = n.doc.lineAt(i.to);
		if (
			(!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)),
			t >= s.number)
		) {
			let o = e[e.length - 1];
			(o.to = r.to), o.ranges.push(i);
		} else e.push({ from: s.from, to: r.to, ranges: [i] });
		t = r.number + 1;
	}
	return e;
}
function Oc(n, e, t) {
	if (n.readOnly) return !1;
	let i = [],
		s = [];
	for (let r of Xn(n)) {
		if (t ? r.to == n.doc.length : r.from == 0) continue;
		let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1),
			l = o.length + 1;
		if (t) {
			i.push(
				{ from: r.to, to: o.to },
				{ from: r.from, insert: o.text + n.lineBreak }
			);
			for (let a of r.ranges)
				s.push(
					k.range(
						Math.min(n.doc.length, a.anchor + l),
						Math.min(n.doc.length, a.head + l)
					)
				);
		} else {
			i.push(
				{ from: o.from, to: r.from },
				{ from: r.to, insert: n.lineBreak + o.text }
			);
			for (let a of r.ranges) s.push(k.range(a.anchor - l, a.head - l));
		}
	}
	return i.length
		? (e(
				n.update({
					changes: i,
					scrollIntoView: !0,
					selection: k.create(s, n.selection.mainIndex),
					userEvent: "move.line"
				})
		  ),
		  !0)
		: !1;
}
const Hm = ({ state: n, dispatch: e }) => Oc(n, e, !1),
	Wm = ({ state: n, dispatch: e }) => Oc(n, e, !0);
function Bc(n, e, t) {
	if (n.readOnly) return !1;
	let i = [];
	for (let s of Xn(n))
		t
			? i.push({
					from: s.from,
					insert: n.doc.slice(s.from, s.to) + n.lineBreak
			  })
			: i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
	return (
		e(
			n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })
		),
		!0
	);
}
const zm = ({ state: n, dispatch: e }) => Bc(n, e, !1),
	qm = ({ state: n, dispatch: e }) => Bc(n, e, !0),
	jm = (n) => {
		if (n.state.readOnly) return !1;
		let { state: e } = n,
			t = e.changes(
				Xn(e).map(
					({ from: s, to: r }) => (
						s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }
					)
				)
			),
			i = ai(e.selection, (s) => n.moveVertically(s, !0)).map(t);
		return (
			n.dispatch({
				changes: t,
				selection: i,
				scrollIntoView: !0,
				userEvent: "delete.line"
			}),
			!0
		);
	};
function Km(n, e) {
	if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1)))
		return { from: e, to: e };
	let t = pe(n).resolveInner(e),
		i = t.childBefore(e),
		s = t.childAfter(e),
		r;
	return i &&
		s &&
		i.to <= e &&
		s.from >= e &&
		(r = i.type.prop(L.closedBy)) &&
		r.indexOf(s.name) > -1 &&
		n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from
		? { from: i.to, to: s.from }
		: null;
}
const Um = Pc(!1),
	$m = Pc(!0);
function Pc(n) {
	return ({ state: e, dispatch: t }) => {
		if (e.readOnly) return !1;
		let i = e.changeByRange((s) => {
			let { from: r, to: o } = s,
				l = e.doc.lineAt(r),
				a = !n && r == o && Km(e, r);
			n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
			let h = new Kn(e, { simulateBreak: r, simulateDoubleBreak: !!a }),
				c = Vr(h, r);
			for (
				c == null && (c = /^\s*/.exec(e.doc.lineAt(r).text)[0].length);
				o < l.to && /\s/.test(l.text[o - l.from]);

			)
				o++;
			a
				? ({ from: r, to: o } = a)
				: r > l.from &&
				  r < l.from + 100 &&
				  !/\S/.test(l.text.slice(0, r)) &&
				  (r = l.from);
			let f = ["", Li(e, c)];
			return (
				a && f.push(Li(e, h.lineIndent(l.from, -1))),
				{
					changes: { from: r, to: o, insert: _.of(f) },
					range: k.cursor(r + 1 + f[1].length)
				}
			);
		});
		return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
	};
}
function Kr(n, e) {
	let t = -1;
	return n.changeByRange((i) => {
		let s = [];
		for (let o = i.from; o <= i.to; ) {
			let l = n.doc.lineAt(o);
			l.number > t &&
				(i.empty || i.to > l.from) &&
				(e(l, s, i), (t = l.number)),
				(o = l.to + 1);
		}
		let r = n.changes(s);
		return {
			changes: s,
			range: k.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1))
		};
	});
}
const Gm = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let t = Object.create(null),
			i = new Kn(n, {
				overrideIndentation: (r) => {
					let o = t[r];
					return o ?? -1;
				}
			}),
			s = Kr(n, (r, o, l) => {
				let a = Vr(i, r.from);
				if (a == null) return;
				/\S/.test(r.text) || (a = 0);
				let h = /^\s*/.exec(r.text)[0],
					c = Li(n, a);
				(h != c || l.from < r.from + h.length) &&
					((t[r.from] = a),
					o.push({ from: r.from, to: r.from + h.length, insert: c }));
			});
		return s.changes.empty || e(n.update(s, { userEvent: "indent" })), !0;
	},
	Ec = ({ state: n, dispatch: e }) =>
		n.readOnly
			? !1
			: (e(
					n.update(
						Kr(n, (t, i) => {
							i.push({ from: t.from, insert: n.facet(jn) });
						}),
						{ userEvent: "input.indent" }
					)
			  ),
			  !0),
	Rc = ({ state: n, dispatch: e }) =>
		n.readOnly
			? !1
			: (e(
					n.update(
						Kr(n, (t, i) => {
							let s = /^\s*/.exec(t.text)[0];
							if (!s) return;
							let r = Fi(s, n.tabSize),
								o = 0,
								l = Li(n, Math.max(0, r - Rt(n)));
							for (
								;
								o < s.length &&
								o < l.length &&
								s.charCodeAt(o) == l.charCodeAt(o);

							)
								o++;
							i.push({
								from: t.from + o,
								to: t.from + s.length,
								insert: l.slice(o)
							});
						}),
						{ userEvent: "delete.dedent" }
					)
			  ),
			  !0),
	Jm = [
		{ key: "Ctrl-b", run: ac, shift: yc, preventDefault: !0 },
		{ key: "Ctrl-f", run: hc, shift: bc },
		{ key: "Ctrl-p", run: uc, shift: xc },
		{ key: "Ctrl-n", run: dc, shift: vc },
		{ key: "Ctrl-a", run: bm, shift: Bm },
		{ key: "Ctrl-e", run: wm, shift: Pm },
		{ key: "Ctrl-d", run: Ac },
		{ key: "Ctrl-h", run: wr },
		{ key: "Ctrl-k", run: Tc },
		{ key: "Ctrl-Alt-h", run: Dc },
		{ key: "Ctrl-o", run: Vm },
		{ key: "Ctrl-t", run: Fm },
		{ key: "Ctrl-v", run: br }
	],
	Ym = [
		{ key: "ArrowLeft", run: ac, shift: yc, preventDefault: !0 },
		{
			key: "Mod-ArrowLeft",
			mac: "Alt-ArrowLeft",
			run: hm,
			shift: vm,
			preventDefault: !0
		},
		{ mac: "Cmd-ArrowLeft", run: gm, shift: Tm, preventDefault: !0 },
		{ key: "ArrowRight", run: hc, shift: bc, preventDefault: !0 },
		{
			key: "Mod-ArrowRight",
			mac: "Alt-ArrowRight",
			run: cm,
			shift: Sm,
			preventDefault: !0
		},
		{ mac: "Cmd-ArrowRight", run: ym, shift: Om, preventDefault: !0 },
		{ key: "ArrowUp", run: uc, shift: xc, preventDefault: !0 },
		{ mac: "Cmd-ArrowUp", run: vl, shift: Cl },
		{ mac: "Ctrl-ArrowUp", run: wl, shift: kl },
		{ key: "ArrowDown", run: dc, shift: vc, preventDefault: !0 },
		{ mac: "Cmd-ArrowDown", run: Sl, shift: Al },
		{ mac: "Ctrl-ArrowDown", run: br, shift: xl },
		{ key: "PageUp", run: wl, shift: kl },
		{ key: "PageDown", run: br, shift: xl },
		{ key: "Home", run: mm, shift: Dm, preventDefault: !0 },
		{ key: "Mod-Home", run: vl, shift: Cl },
		{ key: "End", run: pm, shift: Mm, preventDefault: !0 },
		{ key: "Mod-End", run: Sl, shift: Al },
		{ key: "Enter", run: Um },
		{ key: "Mod-a", run: Em },
		{ key: "Backspace", run: wr, shift: wr },
		{ key: "Delete", run: Ac },
		{ key: "Mod-Backspace", mac: "Alt-Backspace", run: Dc },
		{ key: "Mod-Delete", mac: "Alt-Delete", run: Nm },
		{ mac: "Mod-Backspace", run: _m },
		{ mac: "Mod-Delete", run: Tc }
	].concat(Jm.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))),
	Xm = [
		{ key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: um, shift: Cm },
		{ key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: dm, shift: Am },
		{ key: "Alt-ArrowUp", run: Hm },
		{ key: "Shift-Alt-ArrowUp", run: zm },
		{ key: "Alt-ArrowDown", run: Wm },
		{ key: "Shift-Alt-ArrowDown", run: qm },
		{ key: "Escape", run: Im },
		{ key: "Mod-Enter", run: $m },
		{ key: "Alt-l", mac: "Ctrl-l", run: Rm },
		{ key: "Mod-i", run: Lm, preventDefault: !0 },
		{ key: "Mod-[", run: Rc },
		{ key: "Mod-]", run: Ec },
		{ key: "Mod-Alt-\\", run: Gm },
		{ key: "Shift-Mod-k", run: jm },
		{ key: "Shift-Mod-\\", run: xm },
		{ key: "Mod-/", run: qp },
		{ key: "Alt-A", run: Kp }
	].concat(Ym),
	Zm = { key: "Tab", run: Ec, shift: Rc },
	Qm = "#2E3235",
	Ue = "#DDDDDD",
	Ai = "#B9D2FF",
	ln = "#b0b0b0",
	eg = "#e0e0e0",
	Lc = "#808080",
	xs = "#000000",
	tg = "#A54543",
	Ic = "#fc6d24",
	St = "#fda331",
	vs = "#8abeb7",
	Ml = "#b5bd68",
	mi = "#6fb3d2",
	gi = "#cc99cc",
	ig = "#6987AF",
	Dl = Ic,
	Tl = "#292d30",
	an = Ai + "30",
	ng = Qm,
	Ss = Ue,
	sg = "#202325",
	Ol = Ue,
	rg = O.theme(
		{
			"&": { color: Ue, backgroundColor: ng },
			".cm-content": { caretColor: Ol },
			".cm-cursor, .cm-dropCursor": { borderLeftColor: Ol },
			"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
				{ backgroundColor: sg },
			".cm-panels": { backgroundColor: Tl, color: ln },
			".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
			".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
			".cm-searchMatch": {
				backgroundColor: Ai,
				outline: `1px solid ${ln}`,
				color: xs
			},
			".cm-searchMatch.cm-searchMatch-selected": {
				backgroundColor: eg,
				color: xs
			},
			".cm-activeLine": { backgroundColor: an },
			".cm-selectionMatch": { backgroundColor: an },
			"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
				outline: `1px solid ${ln}`
			},
			"&.cm-focused .cm-matchingBracket": { backgroundColor: Ai, color: xs },
			".cm-gutters": {
				borderRight: "1px solid #ffffff10",
				color: Lc,
				backgroundColor: Tl
			},
			".cm-activeLineGutter": { backgroundColor: an },
			".cm-foldPlaceholder": {
				backgroundColor: "transparent",
				border: "none",
				color: Ai
			},
			".cm-tooltip": { border: "none", backgroundColor: Ss },
			".cm-tooltip .cm-tooltip-arrow:before": {
				borderTopColor: "transparent",
				borderBottomColor: "transparent"
			},
			".cm-tooltip .cm-tooltip-arrow:after": {
				borderTopColor: Ss,
				borderBottomColor: Ss
			},
			".cm-tooltip-autocomplete": {
				"& > ul > li[aria-selected]": { backgroundColor: an, color: ln }
			}
		},
		{ dark: !0 }
	),
	og = li.define([
		{ tag: m.keyword, color: St },
		{
			tag: [m.name, m.deleted, m.character, m.propertyName, m.macroName],
			color: Ml
		},
		{ tag: [m.variableName], color: mi },
		{ tag: [m.function(m.variableName)], color: St },
		{ tag: [m.labelName], color: Ic },
		{ tag: [m.color, m.constant(m.name), m.standard(m.name)], color: St },
		{ tag: [m.definition(m.name), m.separator], color: gi },
		{ tag: [m.brace], color: gi },
		{ tag: [m.annotation], color: Dl },
		{
			tag: [m.number, m.changed, m.annotation, m.modifier, m.self, m.namespace],
			color: St
		},
		{ tag: [m.typeName, m.className], color: mi },
		{ tag: [m.operator, m.operatorKeyword], color: gi },
		{ tag: [m.tagName], color: St },
		{ tag: [m.squareBracket], color: gi },
		{ tag: [m.angleBracket], color: gi },
		{ tag: [m.attributeName], color: mi },
		{ tag: [m.regexp], color: St },
		{ tag: [m.quote], color: Ue },
		{ tag: [m.string], color: Ml },
		{
			tag: m.link,
			color: ig,
			textDecoration: "underline",
			textUnderlinePosition: "under"
		},
		{ tag: [m.url, m.escape, m.special(m.string)], color: vs },
		{ tag: [m.meta], color: tg },
		{ tag: [m.comment], color: Lc, fontStyle: "italic" },
		{ tag: m.monospace, color: Ue },
		{ tag: m.strong, fontWeight: "bold", color: St },
		{ tag: m.emphasis, fontStyle: "italic", color: mi },
		{ tag: m.strikethrough, textDecoration: "line-through" },
		{ tag: m.heading, fontWeight: "bold", color: Ue },
		{ tag: m.special(m.heading1), fontWeight: "bold", color: Ue },
		{ tag: m.heading1, fontWeight: "bold", color: Ue },
		{
			tag: [m.heading2, m.heading3, m.heading4],
			fontWeight: "bold",
			color: Ue
		},
		{ tag: [m.heading5, m.heading6], color: Ue },
		{ tag: [m.atom, m.bool, m.special(m.variableName)], color: vs },
		{ tag: [m.processingInstruction, m.inserted], color: vs },
		{ tag: [m.contentSeparator], color: mi },
		{ tag: m.invalid, color: Ai, borderBottom: `1px dotted ${Dl}` }
	]),
	lg = [rg, Hr(og)],
	Bl = "#2e3440",
	Ur = "#3b4252",
	Pl = "#434c5e",
	hn = "#4c566a",
	El = "#e5e9f0",
	kr = "#eceff4",
	Cs = "#8fbcbb",
	Rl = "#88c0d0",
	ag = "#81a1c1",
	Fe = "#5e81ac",
	hg = "#bf616a",
	Wt = "#d08770",
	As = "#ebcb8b",
	Ll = "#a3be8c",
	cg = "#b48ead",
	Il = "#d30102",
	$r = kr,
	Ms = $r,
	fg = "#ffffff",
	Ds = Ur,
	ug = $r,
	Nl = Ur,
	dg = O.theme(
		{
			"&": { color: Bl, backgroundColor: fg },
			".cm-content": { caretColor: Nl },
			".cm-cursor, .cm-dropCursor": { borderLeftColor: Nl },
			"&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
				{ backgroundColor: ug },
			".cm-panels": { backgroundColor: $r, color: hn },
			".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
			".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
			".cm-searchMatch": {
				backgroundColor: "#72a1ff59",
				outline: `1px solid ${hn}`
			},
			".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: El },
			".cm-activeLine": { backgroundColor: Ms },
			".cm-selectionMatch": { backgroundColor: El },
			"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
				outline: `1px solid ${hn}`
			},
			"&.cm-focused .cm-matchingBracket": { backgroundColor: kr },
			".cm-gutters": { backgroundColor: kr, color: Bl, border: "none" },
			".cm-activeLineGutter": { backgroundColor: Ms },
			".cm-foldPlaceholder": {
				backgroundColor: "transparent",
				border: "none",
				color: "#ddd"
			},
			".cm-tooltip": { border: "none", backgroundColor: Ds },
			".cm-tooltip .cm-tooltip-arrow:before": {
				borderTopColor: "transparent",
				borderBottomColor: "transparent"
			},
			".cm-tooltip .cm-tooltip-arrow:after": {
				borderTopColor: Ds,
				borderBottomColor: Ds
			},
			".cm-tooltip-autocomplete": {
				"& > ul > li[aria-selected]": { backgroundColor: Ms, color: hn }
			}
		},
		{ dark: !1 }
	),
	pg = li.define([
		{ tag: m.keyword, color: Fe },
		{
			tag: [m.name, m.deleted, m.character, m.propertyName, m.macroName],
			color: Wt
		},
		{ tag: [m.variableName], color: Wt },
		{ tag: [m.function(m.variableName)], color: Fe },
		{ tag: [m.labelName], color: ag },
		{ tag: [m.color, m.constant(m.name), m.standard(m.name)], color: Fe },
		{ tag: [m.definition(m.name), m.separator], color: Ll },
		{ tag: [m.brace], color: Cs },
		{ tag: [m.annotation], color: Il },
		{
			tag: [m.number, m.changed, m.annotation, m.modifier, m.self, m.namespace],
			color: Rl
		},
		{ tag: [m.typeName, m.className], color: As },
		{ tag: [m.operator, m.operatorKeyword], color: Ll },
		{ tag: [m.tagName], color: cg },
		{ tag: [m.squareBracket], color: hg },
		{ tag: [m.angleBracket], color: Wt },
		{ tag: [m.attributeName], color: As },
		{ tag: [m.regexp], color: Fe },
		{ tag: [m.quote], color: Ur },
		{ tag: [m.string], color: Wt },
		{
			tag: m.link,
			color: Cs,
			textDecoration: "underline",
			textUnderlinePosition: "under"
		},
		{ tag: [m.url, m.escape, m.special(m.string)], color: Wt },
		{ tag: [m.meta], color: Rl },
		{ tag: [m.comment], color: Pl, fontStyle: "italic" },
		{ tag: m.strong, fontWeight: "bold", color: Fe },
		{ tag: m.emphasis, fontStyle: "italic", color: Fe },
		{ tag: m.strikethrough, textDecoration: "line-through" },
		{ tag: m.heading, fontWeight: "bold", color: Fe },
		{ tag: m.special(m.heading1), fontWeight: "bold", color: Fe },
		{ tag: m.heading1, fontWeight: "bold", color: Fe },
		{
			tag: [m.heading2, m.heading3, m.heading4],
			fontWeight: "bold",
			color: Fe
		},
		{ tag: [m.heading5, m.heading6], color: Fe },
		{ tag: [m.atom, m.bool, m.special(m.variableName)], color: Wt },
		{ tag: [m.processingInstruction, m.inserted], color: Cs },
		{ tag: [m.contentSeparator], color: As },
		{ tag: m.invalid, color: Pl, borderBottom: `1px dotted ${Il}` }
	]),
	mg = [dg, Hr(pg)];
function _l(n) {
	let e = Object.keys(n).join(""),
		t = /\w/.test(e);
	return (
		t && (e = e.replace(/\w/g, "")),
		`[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`
	);
}
function gg(n) {
	let e = Object.create(null),
		t = Object.create(null);
	for (let { label: s } of n) {
		e[s[0]] = !0;
		for (let r = 1; r < s.length; r++) t[s[r]] = !0;
	}
	let i = _l(e) + _l(t) + "*$";
	return [new RegExp("^" + i), new RegExp(i)];
}
function yg(n) {
	let e = n.map((s) => (typeof s == "string" ? { label: s } : s)),
		[t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : gg(e);
	return (s) => {
		let r = s.matchBefore(i);
		return r || s.explicit
			? { from: r ? r.from : s.pos, options: e, validFor: t }
			: null;
	};
}
function hy(n, e) {
	return (t) => {
		for (let i = pe(t.state).resolveInner(t.pos, -1); i; i = i.parent)
			if (n.indexOf(i.name) > -1) return null;
		return e(t);
	};
}
class Vl {
	constructor(e, t, i) {
		(this.completion = e), (this.source = t), (this.match = i);
	}
}
function xr(n) {
	return n.selection.main.head;
}
function bg(n, e, t, i) {
	return Object.assign(
		Object.assign(
			{},
			n.changeByRange((s) => {
				if (s == n.selection.main)
					return {
						changes: { from: t, to: i, insert: e },
						range: k.cursor(t + e.length)
					};
				let r = i - t;
				return !s.empty ||
					(r && n.sliceDoc(s.from - r, s.from) != n.sliceDoc(t, i))
					? { range: s }
					: {
							changes: { from: s.from - r, to: s.from, insert: e },
							range: k.cursor(s.from - r + e.length)
					  };
			})
		),
		{ userEvent: "input.complete" }
	);
}
function Nc(n, e) {
	const t = e.completion.apply || e.completion.label;
	let i = e.source;
	typeof t == "string"
		? n.dispatch(bg(n.state, t, i.from, i.to))
		: t(n, e.completion, i.from, i.to);
}
const Fl = new WeakMap();
function wg(n) {
	if (!Array.isArray(n)) return n;
	let e = Fl.get(n);
	return e || Fl.set(n, (e = yg(n))), e;
}
class kg {
	constructor(e) {
		(this.pattern = e),
			(this.chars = []),
			(this.folded = []),
			(this.any = []),
			(this.precise = []),
			(this.byWord = []);
		for (let t = 0; t < e.length; ) {
			let i = ge(e, t),
				s = Ee(i);
			this.chars.push(i);
			let r = e.slice(t, t + s),
				o = r.toUpperCase();
			this.folded.push(ge(o == r ? r.toLowerCase() : o, 0)), (t += s);
		}
		this.astral = e.length != this.chars.length;
	}
	match(e) {
		if (this.pattern.length == 0) return [0];
		if (e.length < this.pattern.length) return null;
		let { chars: t, folded: i, any: s, precise: r, byWord: o } = this;
		if (t.length == 1) {
			let w = ge(e, 0);
			return w == t[0] ? [0, 0, Ee(w)] : w == i[0] ? [-200, 0, Ee(w)] : null;
		}
		let l = e.indexOf(this.pattern);
		if (l == 0) return [0, 0, this.pattern.length];
		let a = t.length,
			h = 0;
		if (l < 0) {
			for (let w = 0, v = Math.min(e.length, 200); w < v && h < a; ) {
				let S = ge(e, w);
				(S == t[h] || S == i[h]) && (s[h++] = w), (w += Ee(S));
			}
			if (h < a) return null;
		}
		let c = 0,
			f = 0,
			u = !1,
			d = 0,
			p = -1,
			g = -1,
			y = /[a-z]/.test(e),
			b = !0;
		for (let w = 0, v = Math.min(e.length, 200), S = 0; w < v && f < a; ) {
			let C = ge(e, w);
			l < 0 &&
				(c < a && C == t[c] && (r[c++] = w),
				d < a &&
					(C == t[d] || C == i[d]
						? (d == 0 && (p = w), (g = w + 1), d++)
						: (d = 0)));
			let T,
				B =
					C < 255
						? (C >= 48 && C <= 57) || (C >= 97 && C <= 122)
							? 2
							: C >= 65 && C <= 90
							? 1
							: 0
						: (T = ga(C)) != T.toLowerCase()
						? 1
						: T != T.toUpperCase()
						? 2
						: 0;
			(!w || (B == 1 && y) || (S == 0 && B != 0)) &&
				(t[f] == C || (i[f] == C && (u = !0))
					? (o[f++] = w)
					: o.length && (b = !1)),
				(S = B),
				(w += Ee(C));
		}
		return f == a && o[0] == 0 && b
			? this.result(-100 + (u ? -200 : 0), o, e)
			: d == a && p == 0
			? [-200 - e.length, 0, g]
			: l > -1
			? [-700 - e.length, l, l + this.pattern.length]
			: d == a
			? [-200 + -700 - e.length, p, g]
			: f == a
			? this.result(-100 + (u ? -200 : 0) + -700 + (b ? 0 : -1100), o, e)
			: t.length == 2
			? null
			: this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
	}
	result(e, t, i) {
		let s = [e - i.length],
			r = 1;
		for (let o of t) {
			let l = o + (this.astral ? Ee(ge(i, o)) : 1);
			r > 1 && s[r - 1] == o ? (s[r - 1] = l) : ((s[r++] = o), (s[r++] = l));
		}
		return s;
	}
}
const It = D.define({
	combine(n) {
		return _t(
			n,
			{
				activateOnTyping: !0,
				selectOnOpen: !0,
				override: null,
				closeOnBlur: !0,
				maxRenderedOptions: 100,
				defaultKeymap: !0,
				optionClass: () => "",
				aboveCursor: !1,
				icons: !0,
				addToOptions: [],
				compareCompletions: (e, t) => e.label.localeCompare(t.label),
				interactionDelay: 75
			},
			{
				defaultKeymap: (e, t) => e && t,
				closeOnBlur: (e, t) => e && t,
				icons: (e, t) => e && t,
				optionClass: (e, t) => (i) => xg(e(i), t(i)),
				addToOptions: (e, t) => e.concat(t)
			}
		);
	}
});
function xg(n, e) {
	return n ? (e ? n + " " + e : n) : e;
}
function vg(n) {
	let e = n.addToOptions.slice();
	return (
		n.icons &&
			e.push({
				render(t) {
					let i = document.createElement("div");
					return (
						i.classList.add("cm-completionIcon"),
						t.type &&
							i.classList.add(
								...t.type.split(/\s+/g).map((s) => "cm-completionIcon-" + s)
							),
						i.setAttribute("aria-hidden", "true"),
						i
					);
				},
				position: 20
			}),
		e.push(
			{
				render(t, i, s) {
					let r = document.createElement("span");
					r.className = "cm-completionLabel";
					let { label: o } = t,
						l = 0;
					for (let a = 1; a < s.length; ) {
						let h = s[a++],
							c = s[a++];
						h > l && r.appendChild(document.createTextNode(o.slice(l, h)));
						let f = r.appendChild(document.createElement("span"));
						f.appendChild(document.createTextNode(o.slice(h, c))),
							(f.className = "cm-completionMatchedText"),
							(l = c);
					}
					return (
						l < o.length && r.appendChild(document.createTextNode(o.slice(l))),
						r
					);
				},
				position: 50
			},
			{
				render(t) {
					if (!t.detail) return null;
					let i = document.createElement("span");
					return (
						(i.className = "cm-completionDetail"), (i.textContent = t.detail), i
					);
				},
				position: 80
			}
		),
		e.sort((t, i) => t.position - i.position).map((t) => t.render)
	);
}
function Hl(n, e, t) {
	if (n <= t) return { from: 0, to: n };
	if ((e < 0 && (e = 0), e <= n >> 1)) {
		let s = Math.floor(e / t);
		return { from: s * t, to: (s + 1) * t };
	}
	let i = Math.floor((n - e) / t);
	return { from: n - (i + 1) * t, to: n - i * t };
}
class Sg {
	constructor(e, t) {
		(this.view = e),
			(this.stateField = t),
			(this.info = null),
			(this.placeInfo = {
				read: () => this.measureInfo(),
				write: (l) => this.positionInfo(l),
				key: this
			});
		let i = e.state.field(t),
			{ options: s, selected: r } = i.open,
			o = e.state.facet(It);
		(this.optionContent = vg(o)),
			(this.optionClass = o.optionClass),
			(this.range = Hl(s.length, r, o.maxRenderedOptions)),
			(this.dom = document.createElement("div")),
			(this.dom.className = "cm-tooltip-autocomplete"),
			this.dom.addEventListener("mousedown", (l) => {
				for (let a = l.target, h; a && a != this.dom; a = a.parentNode)
					if (
						a.nodeName == "LI" &&
						(h = /-(\d+)$/.exec(a.id)) &&
						+h[1] < s.length
					) {
						Nc(e, s[+h[1]]), l.preventDefault();
						return;
					}
			}),
			(this.list = this.dom.appendChild(
				this.createListBox(s, i.id, this.range)
			)),
			this.list.addEventListener("scroll", () => {
				this.info && this.view.requestMeasure(this.placeInfo);
			});
	}
	mount() {
		this.updateSel();
	}
	update(e) {
		e.state.field(this.stateField) != e.startState.field(this.stateField) &&
			this.updateSel();
	}
	positioned() {
		this.info && this.view.requestMeasure(this.placeInfo);
	}
	updateSel() {
		let e = this.view.state.field(this.stateField),
			t = e.open;
		if (
			(((t.selected > -1 && t.selected < this.range.from) ||
				t.selected >= this.range.to) &&
				((this.range = Hl(
					t.options.length,
					t.selected,
					this.view.state.facet(It).maxRenderedOptions
				)),
				this.list.remove(),
				(this.list = this.dom.appendChild(
					this.createListBox(t.options, e.id, this.range)
				)),
				this.list.addEventListener("scroll", () => {
					this.info && this.view.requestMeasure(this.placeInfo);
				})),
			this.updateSelectedOption(t.selected))
		) {
			this.info && (this.info.remove(), (this.info = null));
			let { completion: i } = t.options[t.selected],
				{ info: s } = i;
			if (!s) return;
			let r = typeof s == "string" ? document.createTextNode(s) : s(i);
			if (!r) return;
			"then" in r
				? r
						.then((o) => {
							o &&
								this.view.state.field(this.stateField, !1) == e &&
								this.addInfoPane(o);
						})
						.catch((o) => He(this.view.state, o, "completion info"))
				: this.addInfoPane(r);
		}
	}
	addInfoPane(e) {
		let t = (this.info = document.createElement("div"));
		(t.className = "cm-tooltip cm-completionInfo"),
			t.appendChild(e),
			this.dom.appendChild(t),
			this.view.requestMeasure(this.placeInfo);
	}
	updateSelectedOption(e) {
		let t = null;
		for (
			let i = this.list.firstChild, s = this.range.from;
			i;
			i = i.nextSibling, s++
		)
			s == e
				? i.hasAttribute("aria-selected") ||
				  (i.setAttribute("aria-selected", "true"), (t = i))
				: i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
		return t && Ag(this.list, t), t;
	}
	measureInfo() {
		let e = this.dom.querySelector("[aria-selected]");
		if (!e || !this.info) return null;
		let t = this.dom.ownerDocument.defaultView || window,
			i = this.dom.getBoundingClientRect(),
			s = this.info.getBoundingClientRect(),
			r = e.getBoundingClientRect();
		if (
			r.top > Math.min(t.innerHeight, i.bottom) - 10 ||
			r.bottom < Math.max(0, i.top) + 10
		)
			return null;
		let o = this.view.textDirection == Z.RTL,
			l = o,
			a = !1,
			h,
			c = "",
			f = "",
			u = i.left,
			d = t.innerWidth - i.right;
		if (
			(l && u < Math.min(s.width, d)
				? (l = !1)
				: !l && d < Math.min(s.width, u) && (l = !0),
			s.width <= (l ? u : d))
		)
			(c =
				Math.max(0, Math.min(r.top, t.innerHeight - s.height)) - i.top + "px"),
				(h = Math.min(400, l ? u : d) + "px");
		else {
			(a = !0),
				(h = Math.min(400, (o ? i.right : t.innerWidth - i.left) - 30) + "px");
			let p = t.innerHeight - i.bottom;
			p >= s.height || p > i.top
				? (c = r.bottom - i.top + "px")
				: (f = i.bottom - r.top + "px");
		}
		return {
			top: c,
			bottom: f,
			maxWidth: h,
			class: a ? (o ? "left-narrow" : "right-narrow") : l ? "left" : "right"
		};
	}
	positionInfo(e) {
		this.info &&
			(e
				? ((this.info.style.top = e.top),
				  (this.info.style.bottom = e.bottom),
				  (this.info.style.maxWidth = e.maxWidth),
				  (this.info.className =
						"cm-tooltip cm-completionInfo cm-completionInfo-" + e.class))
				: (this.info.style.top = "-1e6px"));
	}
	createListBox(e, t, i) {
		const s = document.createElement("ul");
		(s.id = t),
			s.setAttribute("role", "listbox"),
			s.setAttribute("aria-expanded", "true"),
			s.setAttribute("aria-label", this.view.state.phrase("Completions"));
		for (let r = i.from; r < i.to; r++) {
			let { completion: o, match: l } = e[r];
			const a = s.appendChild(document.createElement("li"));
			(a.id = t + "-" + r), a.setAttribute("role", "option");
			let h = this.optionClass(o);
			h && (a.className = h);
			for (let c of this.optionContent) {
				let f = c(o, this.view.state, l);
				f && a.appendChild(f);
			}
		}
		return (
			i.from && s.classList.add("cm-completionListIncompleteTop"),
			i.to < e.length && s.classList.add("cm-completionListIncompleteBottom"),
			s
		);
	}
}
function Cg(n) {
	return (e) => new Sg(e, n);
}
function Ag(n, e) {
	let t = n.getBoundingClientRect(),
		i = e.getBoundingClientRect();
	i.top < t.top
		? (n.scrollTop -= t.top - i.top)
		: i.bottom > t.bottom && (n.scrollTop += i.bottom - t.bottom);
}
function Wl(n) {
	return (
		(n.boost || 0) * 100 +
		(n.apply ? 10 : 0) +
		(n.info ? 5 : 0) +
		(n.type ? 1 : 0)
	);
}
function Mg(n, e) {
	let t = [],
		i = 0;
	for (let l of n)
		if (l.hasResult())
			if (l.result.filter === !1) {
				let a = l.result.getMatch;
				for (let h of l.result.options) {
					let c = [1e9 - i++];
					if (a) for (let f of a(h)) c.push(f);
					t.push(new Vl(h, l, c));
				}
			} else {
				let a = new kg(e.sliceDoc(l.from, l.to)),
					h;
				for (let c of l.result.options)
					(h = a.match(c.label)) &&
						(c.boost != null && (h[0] += c.boost), t.push(new Vl(c, l, h)));
			}
	let s = [],
		r = null,
		o = e.facet(It).compareCompletions;
	for (let l of t.sort(
		(a, h) => h.match[0] - a.match[0] || o(a.completion, h.completion)
	))
		!r ||
		r.label != l.completion.label ||
		r.detail != l.completion.detail ||
		(r.type != null &&
			l.completion.type != null &&
			r.type != l.completion.type) ||
		r.apply != l.completion.apply
			? s.push(l)
			: Wl(l.completion) > Wl(r) && (s[s.length - 1] = l),
			(r = l.completion);
	return s;
}
class Mi {
	constructor(e, t, i, s, r) {
		(this.options = e),
			(this.attrs = t),
			(this.tooltip = i),
			(this.timestamp = s),
			(this.selected = r);
	}
	setSelected(e, t) {
		return e == this.selected || e >= this.options.length
			? this
			: new Mi(this.options, zl(t, e), this.tooltip, this.timestamp, e);
	}
	static build(e, t, i, s, r) {
		let o = Mg(e, t);
		if (!o.length) return null;
		let l = t.facet(It).selectOnOpen ? 0 : -1;
		if (s && s.selected != l && s.selected != -1) {
			let a = s.options[s.selected].completion;
			for (let h = 0; h < o.length; h++)
				if (o[h].completion == a) {
					l = h;
					break;
				}
		}
		return new Mi(
			o,
			zl(i, l),
			{
				pos: e.reduce((a, h) => (h.hasResult() ? Math.min(a, h.from) : a), 1e8),
				create: Cg(zi),
				above: r.aboveCursor
			},
			s ? s.timestamp : Date.now(),
			l
		);
	}
	map(e) {
		return new Mi(
			this.options,
			this.attrs,
			Object.assign(Object.assign({}, this.tooltip), {
				pos: e.mapPos(this.tooltip.pos)
			}),
			this.timestamp,
			this.selected
		);
	}
}
class Nn {
	constructor(e, t, i) {
		(this.active = e), (this.id = t), (this.open = i);
	}
	static start() {
		return new Nn(
			Og,
			"cm-ac-" + Math.floor(Math.random() * 2e6).toString(36),
			null
		);
	}
	update(e) {
		let { state: t } = e,
			i = t.facet(It),
			r = (i.override || t.languageDataAt("autocomplete", xr(t)).map(wg)).map(
				(l) =>
					(
						this.active.find((h) => h.source == l) ||
						new st(l, this.active.some((h) => h.state != 0) ? 1 : 0)
					).update(e, i)
			);
		r.length == this.active.length &&
			r.every((l, a) => l == this.active[a]) &&
			(r = this.active);
		let o =
			e.selection ||
			r.some((l) => l.hasResult() && e.changes.touchesRange(l.from, l.to)) ||
			!Dg(r, this.active)
				? Mi.build(r, t, this.id, this.open, i)
				: this.open && e.docChanged
				? this.open.map(e.changes)
				: this.open;
		!o &&
			r.every((l) => l.state != 1) &&
			r.some((l) => l.hasResult()) &&
			(r = r.map((l) => (l.hasResult() ? new st(l.source, 0) : l)));
		for (let l of e.effects)
			l.is(Fc) && (o = o && o.setSelected(l.value, this.id));
		return r == this.active && o == this.open ? this : new Nn(r, this.id, o);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : Tg;
	}
}
function Dg(n, e) {
	if (n == e) return !0;
	for (let t = 0, i = 0; ; ) {
		for (; t < n.length && !n[t].hasResult; ) t++;
		for (; i < e.length && !e[i].hasResult; ) i++;
		let s = t == n.length,
			r = i == e.length;
		if (s || r) return s == r;
		if (n[t++].result != e[i++].result) return !1;
	}
}
const Tg = { "aria-autocomplete": "list" };
function zl(n, e) {
	let t = {
		"aria-autocomplete": "list",
		"aria-haspopup": "listbox",
		"aria-controls": n
	};
	return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const Og = [];
function Bg(n) {
	return n.isUserEvent("input.type")
		? "input"
		: n.isUserEvent("delete.backward")
		? "delete"
		: null;
}
class st {
	constructor(e, t, i = -1) {
		(this.source = e), (this.state = t), (this.explicitPos = i);
	}
	hasResult() {
		return !1;
	}
	update(e, t) {
		let i = Bg(e),
			s = this;
		i
			? (s = s.handleUserEvent(e, i, t))
			: e.docChanged
			? (s = s.handleChange(e))
			: e.selection && s.state != 0 && (s = new st(s.source, 0));
		for (let r of e.effects)
			if (r.is(_c)) s = new st(s.source, 1, r.value ? xr(e.state) : -1);
			else if (r.is(Vc)) s = new st(s.source, 0);
			else if (r.is(Pg)) for (let o of r.value) o.source == s.source && (s = o);
		return s;
	}
	handleUserEvent(e, t, i) {
		return t == "delete" || !i.activateOnTyping
			? this.map(e.changes)
			: new st(this.source, 1);
	}
	handleChange(e) {
		return e.changes.touchesRange(xr(e.startState))
			? new st(this.source, 0)
			: this.map(e.changes);
	}
	map(e) {
		return e.empty || this.explicitPos < 0
			? this
			: new st(this.source, this.state, e.mapPos(this.explicitPos));
	}
}
const _c = R.define(),
	Vc = R.define(),
	Pg = R.define({
		map(n, e) {
			return n.map((t) => t.map(e));
		}
	}),
	Fc = R.define(),
	zi = Me.define({
		create() {
			return Nn.start();
		},
		update(n, e) {
			return n.update(e);
		},
		provide: (n) => [
			Er.from(n, (e) => e.tooltip),
			O.contentAttributes.from(n, (e) => e.attrs)
		]
	});
function cn(n, e = "option") {
	return (t) => {
		let i = t.state.field(zi, !1);
		if (
			!i ||
			!i.open ||
			Date.now() - i.open.timestamp < t.state.facet(It).interactionDelay
		)
			return !1;
		let s = 1,
			r;
		e == "page" &&
			(r = Sd(t, i.open.tooltip)) &&
			(s = Math.max(
				2,
				Math.floor(
					r.dom.offsetHeight / r.dom.querySelector("li").offsetHeight
				) - 1
			));
		let { length: o } = i.open.options,
			l =
				i.open.selected > -1
					? i.open.selected + s * (n ? 1 : -1)
					: n
					? 0
					: o - 1;
		return (
			l < 0
				? (l = e == "page" ? 0 : o - 1)
				: l >= o && (l = e == "page" ? o - 1 : 0),
			t.dispatch({ effects: Fc.of(l) }),
			!0
		);
	};
}
const Eg = (n) => {
		let e = n.state.field(zi, !1);
		return n.state.readOnly ||
			!e ||
			!e.open ||
			e.open.selected < 0 ||
			Date.now() - e.open.timestamp < n.state.facet(It).interactionDelay
			? !1
			: (Nc(n, e.open.options[e.open.selected]), !0);
	},
	Rg = (n) =>
		n.state.field(zi, !1) ? (n.dispatch({ effects: _c.of(!0) }), !0) : !1,
	Lg = (n) => {
		let e = n.state.field(zi, !1);
		return !e || !e.active.some((t) => t.state != 0)
			? !1
			: (n.dispatch({ effects: Vc.of(null) }), !0);
	},
	Ig = O.baseTheme({
		".cm-tooltip.cm-tooltip-autocomplete": {
			"& > ul": {
				fontFamily: "monospace",
				whiteSpace: "nowrap",
				overflow: "hidden auto",
				maxWidth_fallback: "700px",
				maxWidth: "min(700px, 95vw)",
				minWidth: "250px",
				maxHeight: "10em",
				listStyle: "none",
				margin: 0,
				padding: 0,
				"& > li": {
					overflowX: "hidden",
					textOverflow: "ellipsis",
					cursor: "pointer",
					padding: "1px 3px",
					lineHeight: 1.2
				}
			}
		},
		"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
			background: "#17c",
			color: "white"
		},
		"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
			background: "#347",
			color: "white"
		},
		".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":
			{ content: '"···"', opacity: 0.5, display: "block", textAlign: "center" },
		".cm-tooltip.cm-completionInfo": {
			position: "absolute",
			padding: "3px 9px",
			width: "max-content",
			maxWidth: "400px",
			boxSizing: "border-box"
		},
		".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
		".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
		".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
		".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
		"&light .cm-snippetField": { backgroundColor: "#00000022" },
		"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
		".cm-snippetFieldPosition": {
			verticalAlign: "text-top",
			width: 0,
			height: "1.15em",
			display: "inline-block",
			margin: "0 -0.7px -.7em",
			borderLeft: "1.4px dotted #888"
		},
		".cm-completionMatchedText": { textDecoration: "underline" },
		".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" },
		".cm-completionIcon": {
			fontSize: "90%",
			width: ".8em",
			display: "inline-block",
			textAlign: "center",
			paddingRight: ".6em",
			opacity: "0.6"
		},
		".cm-completionIcon-function, .cm-completionIcon-method": {
			"&:after": { content: "'ƒ'" }
		},
		".cm-completionIcon-class": { "&:after": { content: "'○'" } },
		".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
		".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
		".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
		".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
		".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
		".cm-completionIcon-property": { "&:after": { content: "'□'" } },
		".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
		".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
		".cm-completionIcon-text": {
			"&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
		}
	});
class Ng {
	constructor(e, t, i, s) {
		(this.field = e), (this.line = t), (this.from = i), (this.to = s);
	}
}
class Gr {
	constructor(e, t, i) {
		(this.field = e), (this.from = t), (this.to = i);
	}
	map(e) {
		let t = e.mapPos(this.from, -1, ce.TrackDel),
			i = e.mapPos(this.to, 1, ce.TrackDel);
		return t == null || i == null ? null : new Gr(this.field, t, i);
	}
}
class Jr {
	constructor(e, t) {
		(this.lines = e), (this.fieldPositions = t);
	}
	instantiate(e, t) {
		let i = [],
			s = [t],
			r = e.doc.lineAt(t),
			o = /^\s*/.exec(r.text)[0];
		for (let a of this.lines) {
			if (i.length) {
				let h = o,
					c = /^\t*/.exec(a)[0].length;
				for (let f = 0; f < c; f++) h += e.facet(jn);
				s.push(t + h.length - c), (a = h + a.slice(c));
			}
			i.push(a), (t += a.length + 1);
		}
		let l = this.fieldPositions.map(
			(a) => new Gr(a.field, s[a.line] + a.from, s[a.line] + a.to)
		);
		return { text: i, ranges: l };
	}
	static parse(e) {
		let t = [],
			i = [],
			s = [],
			r;
		for (let o of e.split(/\r\n?|\n/)) {
			for (; (r = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(o)); ) {
				let l = r[1] ? +r[1] : null,
					a = r[2] || r[3] || "",
					h = -1;
				for (let c = 0; c < t.length; c++)
					(l != null ? t[c].seq == l : a && t[c].name == a) && (h = c);
				if (h < 0) {
					let c = 0;
					for (
						;
						c < t.length && (l == null || (t[c].seq != null && t[c].seq < l));

					)
						c++;
					t.splice(c, 0, { seq: l, name: a }), (h = c);
					for (let f of s) f.field >= h && f.field++;
				}
				s.push(new Ng(h, i.length, r.index, r.index + a.length)),
					(o = o.slice(0, r.index) + a + o.slice(r.index + r[0].length));
			}
			for (let l; (l = /([$#])\\{/.exec(o)); ) {
				o = o.slice(0, l.index) + l[1] + "{" + o.slice(l.index + l[0].length);
				for (let a of s)
					a.line == i.length && a.from > l.index && (a.from--, a.to--);
			}
			i.push(o);
		}
		return new Jr(i, s);
	}
}
let _g = E.widget({
		widget: new (class extends tt {
			toDOM() {
				let n = document.createElement("span");
				return (n.className = "cm-snippetFieldPosition"), n;
			}
			ignoreEvent() {
				return !1;
			}
		})()
	}),
	Vg = E.mark({ class: "cm-snippetField" });
class hi {
	constructor(e, t) {
		(this.ranges = e),
			(this.active = t),
			(this.deco = E.set(
				e.map((i) => (i.from == i.to ? _g : Vg).range(i.from, i.to))
			));
	}
	map(e) {
		let t = [];
		for (let i of this.ranges) {
			let s = i.map(e);
			if (!s) return null;
			t.push(s);
		}
		return new hi(t, this.active);
	}
	selectionInsideField(e) {
		return e.ranges.every((t) =>
			this.ranges.some(
				(i) => i.field == this.active && i.from <= t.from && i.to >= t.to
			)
		);
	}
}
const qi = R.define({
		map(n, e) {
			return n && n.map(e);
		}
	}),
	Fg = R.define(),
	Ni = Me.define({
		create() {
			return null;
		},
		update(n, e) {
			for (let t of e.effects) {
				if (t.is(qi)) return t.value;
				if (t.is(Fg) && n) return new hi(n.ranges, t.value);
			}
			return (
				n && e.docChanged && (n = n.map(e.changes)),
				n && e.selection && !n.selectionInsideField(e.selection) && (n = null),
				n
			);
		},
		provide: (n) => O.decorations.from(n, (e) => (e ? e.deco : E.none))
	});
function Yr(n, e) {
	return k.create(
		n.filter((t) => t.field == e).map((t) => k.range(t.from, t.to))
	);
}
function Hg(n) {
	let e = Jr.parse(n);
	return (t, i, s, r) => {
		let { text: o, ranges: l } = e.instantiate(t.state, s),
			a = { changes: { from: s, to: r, insert: _.of(o) }, scrollIntoView: !0 };
		if ((l.length && (a.selection = Yr(l, 0)), l.length > 1)) {
			let h = new hi(l, 0),
				c = (a.effects = [qi.of(h)]);
			t.state.field(Ni, !1) === void 0 &&
				c.push(R.appendConfig.of([Ni, Kg, Ug, Ig]));
		}
		t.dispatch(t.state.update(a));
	};
}
function Hc(n) {
	return ({ state: e, dispatch: t }) => {
		let i = e.field(Ni, !1);
		if (!i || (n < 0 && i.active == 0)) return !1;
		let s = i.active + n,
			r = n > 0 && !i.ranges.some((o) => o.field == s + n);
		return (
			t(
				e.update({
					selection: Yr(i.ranges, s),
					effects: qi.of(r ? null : new hi(i.ranges, s))
				})
			),
			!0
		);
	};
}
const Wg = ({ state: n, dispatch: e }) =>
		n.field(Ni, !1) ? (e(n.update({ effects: qi.of(null) })), !0) : !1,
	zg = Hc(1),
	qg = Hc(-1),
	jg = [
		{ key: "Tab", run: zg, shift: qg },
		{ key: "Escape", run: Wg }
	],
	ql = D.define({
		combine(n) {
			return n.length ? n[0] : jg;
		}
	}),
	Kg = Vi.highest(qn.compute([ql], (n) => n.facet(ql)));
function cy(n, e) {
	return Object.assign(Object.assign({}, e), { apply: Hg(n) });
}
const Ug = O.domEventHandlers({
		mousedown(n, e) {
			let t = e.state.field(Ni, !1),
				i;
			if (!t || (i = e.posAtCoords({ x: n.clientX, y: n.clientY })) == null)
				return !1;
			let s = t.ranges.find((r) => r.from <= i && r.to >= i);
			return !s || s.field == t.active
				? !1
				: (e.dispatch({
						selection: Yr(t.ranges, s.field),
						effects: qi.of(
							t.ranges.some((r) => r.field > s.field)
								? new hi(t.ranges, s.field)
								: null
						)
				  }),
				  !0);
		}
	}),
	_i = {
		brackets: ["(", "[", "{", "'", '"'],
		before: ")]}:;>",
		stringPrefixes: []
	},
	Tt = R.define({
		map(n, e) {
			let t = e.mapPos(n, -1, ce.TrackAfter);
			return t ?? void 0;
		}
	}),
	Xr = R.define({
		map(n, e) {
			return e.mapPos(n);
		}
	}),
	Zr = new (class extends Bt {})();
Zr.startSide = 1;
Zr.endSide = -1;
const Wc = Me.define({
	create() {
		return F.empty;
	},
	update(n, e) {
		if (e.selection) {
			let t = e.state.doc.lineAt(e.selection.main.head).from,
				i = e.startState.doc.lineAt(e.startState.selection.main.head).from;
			t != e.changes.mapPos(i, -1) && (n = F.empty);
		}
		n = n.map(e.changes);
		for (let t of e.effects)
			t.is(Tt)
				? (n = n.update({ add: [Zr.range(t.value, t.value + 1)] }))
				: t.is(Xr) && (n = n.update({ filter: (i) => i != t.value }));
		return n;
	}
});
function $g() {
	return [Jg, Wc];
}
const Ts = "()[]{}<>";
function zc(n) {
	for (let e = 0; e < Ts.length; e += 2)
		if (Ts.charCodeAt(e) == n) return Ts.charAt(e + 1);
	return ga(n < 128 ? n : n + 1);
}
function qc(n, e) {
	return n.languageDataAt("closeBrackets", e)[0] || _i;
}
const Gg =
		typeof navigator == "object" && /Android\b/.test(navigator.userAgent),
	Jg = O.inputHandler.of((n, e, t, i) => {
		if ((Gg ? n.composing : n.compositionStarted) || n.state.readOnly)
			return !1;
		let s = n.state.selection.main;
		if (
			i.length > 2 ||
			(i.length == 2 && Ee(ge(i, 0)) == 1) ||
			e != s.from ||
			t != s.to
		)
			return !1;
		let r = Zg(n.state, i);
		return r ? (n.dispatch(r), !0) : !1;
	}),
	Yg = ({ state: n, dispatch: e }) => {
		if (n.readOnly) return !1;
		let i = qc(n, n.selection.main.head).brackets || _i.brackets,
			s = null,
			r = n.changeByRange((o) => {
				if (o.empty) {
					let l = Qg(n.doc, o.head);
					for (let a of i)
						if (a == l && Zn(n.doc, o.head) == zc(ge(a, 0)))
							return {
								changes: { from: o.head - a.length, to: o.head + a.length },
								range: k.cursor(o.head - a.length)
							};
				}
				return { range: (s = o) };
			});
		return (
			s || e(n.update(r, { scrollIntoView: !0, userEvent: "delete.backward" })),
			!s
		);
	},
	Xg = [{ key: "Backspace", run: Yg }];
function Zg(n, e) {
	let t = qc(n, n.selection.main.head),
		i = t.brackets || _i.brackets;
	for (let s of i) {
		let r = zc(ge(s, 0));
		if (e == s)
			return r == s
				? i0(n, s, i.indexOf(s + s + s) > -1, t)
				: e0(n, s, r, t.before || _i.before);
		if (e == r && jc(n, n.selection.main.from)) return t0(n, s, r);
	}
	return null;
}
function jc(n, e) {
	let t = !1;
	return (
		n.field(Wc).between(0, n.doc.length, (i) => {
			i == e && (t = !0);
		}),
		t
	);
}
function Zn(n, e) {
	let t = n.sliceString(e, e + 2);
	return t.slice(0, Ee(ge(t, 0)));
}
function Qg(n, e) {
	let t = n.sliceString(e - 2, e);
	return Ee(ge(t, 0)) == t.length ? t : t.slice(1);
}
function e0(n, e, t, i) {
	let s = null,
		r = n.changeByRange((o) => {
			if (!o.empty)
				return {
					changes: [
						{ insert: e, from: o.from },
						{ insert: t, from: o.to }
					],
					effects: Tt.of(o.to + e.length),
					range: k.range(o.anchor + e.length, o.head + e.length)
				};
			let l = Zn(n.doc, o.head);
			return !l || /\s/.test(l) || i.indexOf(l) > -1
				? {
						changes: { insert: e + t, from: o.head },
						effects: Tt.of(o.head + e.length),
						range: k.cursor(o.head + e.length)
				  }
				: { range: (s = o) };
		});
	return s
		? null
		: n.update(r, { scrollIntoView: !0, userEvent: "input.type" });
}
function t0(n, e, t) {
	let i = null,
		s = n.selection.ranges.map((r) =>
			r.empty && Zn(n.doc, r.head) == t ? k.cursor(r.head + t.length) : (i = r)
		);
	return i
		? null
		: n.update({
				selection: k.create(s, n.selection.mainIndex),
				scrollIntoView: !0,
				effects: n.selection.ranges.map(({ from: r }) => Xr.of(r))
		  });
}
function i0(n, e, t, i) {
	let s = i.stringPrefixes || _i.stringPrefixes,
		r = null,
		o = n.changeByRange((l) => {
			if (!l.empty)
				return {
					changes: [
						{ insert: e, from: l.from },
						{ insert: e, from: l.to }
					],
					effects: Tt.of(l.to + e.length),
					range: k.range(l.anchor + e.length, l.head + e.length)
				};
			let a = l.head,
				h = Zn(n.doc, a),
				c;
			if (h == e) {
				if (jl(n, a))
					return {
						changes: { insert: e + e, from: a },
						effects: Tt.of(a + e.length),
						range: k.cursor(a + e.length)
					};
				if (jc(n, a)) {
					let f = t && n.sliceDoc(a, a + e.length * 3) == e + e + e;
					return {
						range: k.cursor(a + e.length * (f ? 3 : 1)),
						effects: Xr.of(a)
					};
				}
			} else {
				if (
					t &&
					n.sliceDoc(a - 2 * e.length, a) == e + e &&
					(c = Kl(n, a - 2 * e.length, s)) > -1 &&
					jl(n, c)
				)
					return {
						changes: { insert: e + e + e + e, from: a },
						effects: Tt.of(a + e.length),
						range: k.cursor(a + e.length)
					};
				if (
					n.charCategorizer(a)(h) != Re.Word &&
					Kl(n, a, s) > -1 &&
					!n0(n, a, e, s)
				)
					return {
						changes: { insert: e + e, from: a },
						effects: Tt.of(a + e.length),
						range: k.cursor(a + e.length)
					};
			}
			return { range: (r = l) };
		});
	return r
		? null
		: n.update(o, { scrollIntoView: !0, userEvent: "input.type" });
}
function jl(n, e) {
	let t = pe(n).resolveInner(e + 1);
	return t.parent && t.from == e;
}
function n0(n, e, t, i) {
	let s = pe(n).resolveInner(e, -1),
		r = i.reduce((o, l) => Math.max(o, l.length), 0);
	for (let o = 0; o < 5; o++) {
		let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)),
			a = l.indexOf(t);
		if (!a || (a > -1 && i.indexOf(l.slice(0, a)) > -1)) {
			let c = s.firstChild;
			for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
				if (n.sliceDoc(c.to - t.length, c.to) == t) return !1;
				c = c.firstChild;
			}
			return !0;
		}
		let h = s.to == e && s.parent;
		if (!h) break;
		s = h;
	}
	return !1;
}
function Kl(n, e, t) {
	let i = n.charCategorizer(e);
	if (i(n.sliceDoc(e - 1, e)) != Re.Word) return e;
	for (let s of t) {
		let r = e - s.length;
		if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != Re.Word) return r;
	}
	return -1;
}
const s0 = [
	{ key: "Ctrl-Space", run: Rg },
	{ key: "Escape", run: Lg },
	{ key: "ArrowDown", run: cn(!0) },
	{ key: "ArrowUp", run: cn(!1) },
	{ key: "PageDown", run: cn(!0, "page") },
	{ key: "PageUp", run: cn(!1, "page") },
	{ key: "Enter", run: Eg }
];
function Je() {
	var n = arguments[0];
	typeof n == "string" && (n = document.createElement(n));
	var e = 1,
		t = arguments[1];
	if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
		for (var i in t)
			if (Object.prototype.hasOwnProperty.call(t, i)) {
				var s = t[i];
				typeof s == "string" ? n.setAttribute(i, s) : s != null && (n[i] = s);
			}
		e++;
	}
	for (; e < arguments.length; e++) Kc(n, arguments[e]);
	return n;
}
function Kc(n, e) {
	if (typeof e == "string") n.appendChild(document.createTextNode(e));
	else if (e != null)
		if (e.nodeType != null) n.appendChild(e);
		else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Kc(n, e[t]);
		else throw new RangeError("Unsupported child node: " + e);
}
class r0 {
	constructor(e, t, i) {
		(this.from = e), (this.to = t), (this.diagnostic = i);
	}
}
class At {
	constructor(e, t, i) {
		(this.diagnostics = e), (this.panel = t), (this.selected = i);
	}
	static init(e, t, i) {
		let s = e,
			r = i.facet(Kt).markerFilter;
		r && (s = r(s));
		let o = E.set(
			s.map((l) =>
				l.from == l.to ||
				(l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from)
					? E.widget({ widget: new m0(l), diagnostic: l }).range(l.from)
					: E.mark({
							attributes: { class: "cm-lintRange cm-lintRange-" + l.severity },
							diagnostic: l
					  }).range(l.from, l.to)
			),
			!0
		);
		return new At(o, t, ni(o));
	}
}
function ni(n, e = null, t = 0) {
	let i = null;
	return (
		n.between(t, 1e9, (s, r, { spec: o }) => {
			if (!(e && o.diagnostic != e))
				return (i = new r0(s, r, o.diagnostic)), !1;
		}),
		i
	);
}
function o0(n, e) {
	return !!(n.effects.some((t) => t.is(Qr)) || n.changes.touchesRange(e.pos));
}
function Uc(n, e) {
	return n.field(Be, !1)
		? e
		: e.concat(
				R.appendConfig.of([
					Be,
					O.decorations.compute([Be], (t) => {
						let { selected: i, panel: s } = t.field(Be);
						return !i || !s || i.from == i.to
							? E.none
							: E.set([a0.range(i.from, i.to)]);
					}),
					vd(h0, { hideOn: o0 }),
					y0
				])
		  );
}
function l0(n, e) {
	return { effects: Uc(n, [Qr.of(e)]) };
}
const Qr = R.define(),
	eo = R.define(),
	$c = R.define(),
	Be = Me.define({
		create() {
			return new At(E.none, null, null);
		},
		update(n, e) {
			if (e.docChanged) {
				let t = n.diagnostics.map(e.changes),
					i = null;
				if (n.selected) {
					let s = e.changes.mapPos(n.selected.from, 1);
					i = ni(t, n.selected.diagnostic, s) || ni(t, null, s);
				}
				n = new At(t, n.panel, i);
			}
			for (let t of e.effects)
				t.is(Qr)
					? (n = At.init(t.value, n.panel, e.state))
					: t.is(eo)
					? (n = new At(n.diagnostics, t.value ? Qn.open : null, n.selected))
					: t.is($c) && (n = new At(n.diagnostics, n.panel, t.value));
			return n;
		},
		provide: (n) => [
			ar.from(n, (e) => e.panel),
			O.decorations.from(n, (e) => e.diagnostics)
		]
	}),
	a0 = E.mark({ class: "cm-lintRange cm-lintRange-active" });
function h0(n, e, t) {
	let { diagnostics: i } = n.state.field(Be),
		s = [],
		r = 2e8,
		o = 0;
	i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
		e >= a &&
			e <= h &&
			(a == h || ((e > a || t > 0) && (e < h || t < 0))) &&
			(s.push(c.diagnostic), (r = Math.min(a, r)), (o = Math.max(h, o)));
	});
	let l = n.state.facet(Kt).tooltipFilter;
	return (
		l && (s = l(s)),
		s.length
			? {
					pos: r,
					end: o,
					above: n.state.doc.lineAt(r).to < o,
					create() {
						return { dom: c0(n, s) };
					}
			  }
			: null
	);
}
function c0(n, e) {
	return Je(
		"ul",
		{ class: "cm-tooltip-lint" },
		e.map((t) => Jc(n, t, !1))
	);
}
const f0 = (n) => {
		let e = n.state.field(Be, !1);
		(!e || !e.panel) && n.dispatch({ effects: Uc(n.state, [eo.of(!0)]) });
		let t = Ad(n, Qn.open);
		return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
	},
	Ul = (n) => {
		let e = n.state.field(Be, !1);
		return !e || !e.panel ? !1 : (n.dispatch({ effects: eo.of(!1) }), !0);
	},
	u0 = (n) => {
		let e = n.state.field(Be, !1);
		if (!e) return !1;
		let t = n.state.selection.main,
			i = e.diagnostics.iter(t.to + 1);
		return !i.value &&
			((i = e.diagnostics.iter(0)),
			!i.value || (i.from == t.from && i.to == t.to))
			? !1
			: (n.dispatch({
					selection: { anchor: i.from, head: i.to },
					scrollIntoView: !0
			  }),
			  !0);
	},
	d0 = [
		{ key: "Mod-Shift-m", run: f0 },
		{ key: "F8", run: u0 }
	],
	p0 = be.fromClass(
		class {
			constructor(n) {
				(this.view = n), (this.timeout = -1), (this.set = !0);
				let { delay: e } = n.state.facet(Kt);
				(this.lintTime = Date.now() + e),
					(this.run = this.run.bind(this)),
					(this.timeout = setTimeout(this.run, e));
			}
			run() {
				let n = Date.now();
				if (n < this.lintTime - 10) setTimeout(this.run, this.lintTime - n);
				else {
					this.set = !1;
					let { state: e } = this.view,
						{ sources: t } = e.facet(Kt);
					Promise.all(t.map((i) => Promise.resolve(i(this.view)))).then(
						(i) => {
							let s = i.reduce((r, o) => r.concat(o));
							this.view.state.doc == e.doc &&
								this.view.dispatch(l0(this.view.state, s));
						},
						(i) => {
							He(this.view.state, i);
						}
					);
				}
			}
			update(n) {
				let e = n.state.facet(Kt);
				(n.docChanged || e != n.startState.facet(Kt)) &&
					((this.lintTime = Date.now() + e.delay),
					this.set ||
						((this.set = !0), (this.timeout = setTimeout(this.run, e.delay))));
			}
			force() {
				this.set && ((this.lintTime = Date.now()), this.run());
			}
			destroy() {
				clearTimeout(this.timeout);
			}
		}
	),
	Kt = D.define({
		combine(n) {
			return Object.assign(
				{ sources: n.map((e) => e.source) },
				_t(
					n.map((e) => e.config),
					{ delay: 750, markerFilter: null, tooltipFilter: null }
				)
			);
		},
		enables: p0
	});
function Gc(n) {
	let e = [];
	if (n)
		e: for (let { name: t } of n) {
			for (let i = 0; i < t.length; i++) {
				let s = t[i];
				if (
					/[a-zA-Z]/.test(s) &&
					!e.some((r) => r.toLowerCase() == s.toLowerCase())
				) {
					e.push(s);
					continue e;
				}
			}
			e.push("");
		}
	return e;
}
function Jc(n, e, t) {
	var i;
	let s = t ? Gc(e.actions) : [];
	return Je(
		"li",
		{ class: "cm-diagnostic cm-diagnostic-" + e.severity },
		Je(
			"span",
			{ class: "cm-diagnosticText" },
			e.renderMessage ? e.renderMessage() : e.message
		),
		(i = e.actions) === null || i === void 0
			? void 0
			: i.map((r, o) => {
					let l = (f) => {
							f.preventDefault();
							let u = ni(n.state.field(Be).diagnostics, e);
							u && r.apply(n, u.from, u.to);
						},
						{ name: a } = r,
						h = s[o] ? a.indexOf(s[o]) : -1,
						c =
							h < 0
								? a
								: [a.slice(0, h), Je("u", a.slice(h, h + 1)), a.slice(h + 1)];
					return Je(
						"button",
						{
							type: "button",
							class: "cm-diagnosticAction",
							onclick: l,
							onmousedown: l,
							"aria-label": ` Action: ${a}${
								h < 0 ? "" : ` (access key "${s[o]})"`
							}.`
						},
						c
					);
			  }),
		e.source && Je("div", { class: "cm-diagnosticSource" }, e.source)
	);
}
class m0 extends tt {
	constructor(e) {
		super(), (this.diagnostic = e);
	}
	eq(e) {
		return e.diagnostic == this.diagnostic;
	}
	toDOM() {
		return Je("span", {
			class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
		});
	}
}
class $l {
	constructor(e, t) {
		(this.diagnostic = t),
			(this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16)),
			(this.dom = Jc(e, t, !0)),
			(this.dom.id = this.id),
			this.dom.setAttribute("role", "option");
	}
}
class Qn {
	constructor(e) {
		(this.view = e), (this.items = []);
		let t = (s) => {
				if (s.keyCode == 27) Ul(this.view), this.view.focus();
				else if (s.keyCode == 38 || s.keyCode == 33)
					this.moveSelection(
						(this.selectedIndex - 1 + this.items.length) % this.items.length
					);
				else if (s.keyCode == 40 || s.keyCode == 34)
					this.moveSelection((this.selectedIndex + 1) % this.items.length);
				else if (s.keyCode == 36) this.moveSelection(0);
				else if (s.keyCode == 35) this.moveSelection(this.items.length - 1);
				else if (s.keyCode == 13) this.view.focus();
				else if (
					s.keyCode >= 65 &&
					s.keyCode <= 90 &&
					this.selectedIndex >= 0
				) {
					let { diagnostic: r } = this.items[this.selectedIndex],
						o = Gc(r.actions);
					for (let l = 0; l < o.length; l++)
						if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
							let a = ni(this.view.state.field(Be).diagnostics, r);
							a && r.actions[l].apply(e, a.from, a.to);
						}
				} else return;
				s.preventDefault();
			},
			i = (s) => {
				for (let r = 0; r < this.items.length; r++)
					this.items[r].dom.contains(s.target) && this.moveSelection(r);
			};
		(this.list = Je("ul", {
			tabIndex: 0,
			role: "listbox",
			"aria-label": this.view.state.phrase("Diagnostics"),
			onkeydown: t,
			onclick: i
		})),
			(this.dom = Je(
				"div",
				{ class: "cm-panel-lint" },
				this.list,
				Je(
					"button",
					{
						type: "button",
						name: "close",
						"aria-label": this.view.state.phrase("close"),
						onclick: () => Ul(this.view)
					},
					"×"
				)
			)),
			this.update();
	}
	get selectedIndex() {
		let e = this.view.state.field(Be).selected;
		if (!e) return -1;
		for (let t = 0; t < this.items.length; t++)
			if (this.items[t].diagnostic == e.diagnostic) return t;
		return -1;
	}
	update() {
		let { diagnostics: e, selected: t } = this.view.state.field(Be),
			i = 0,
			s = !1,
			r = null;
		for (
			e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
				let h = -1,
					c;
				for (let f = i; f < this.items.length; f++)
					if (this.items[f].diagnostic == a.diagnostic) {
						h = f;
						break;
					}
				h < 0
					? ((c = new $l(this.view, a.diagnostic)),
					  this.items.splice(i, 0, c),
					  (s = !0))
					: ((c = this.items[h]),
					  h > i && (this.items.splice(i, h - i), (s = !0))),
					t && c.diagnostic == t.diagnostic
						? c.dom.hasAttribute("aria-selected") ||
						  (c.dom.setAttribute("aria-selected", "true"), (r = c))
						: c.dom.hasAttribute("aria-selected") &&
						  c.dom.removeAttribute("aria-selected"),
					i++;
			});
			i < this.items.length &&
			!(this.items.length == 1 && this.items[0].diagnostic.from < 0);

		)
			(s = !0), this.items.pop();
		this.items.length == 0 &&
			(this.items.push(
				new $l(this.view, {
					from: -1,
					to: -1,
					severity: "info",
					message: this.view.state.phrase("No diagnostics")
				})
			),
			(s = !0)),
			r
				? (this.list.setAttribute("aria-activedescendant", r.id),
				  this.view.requestMeasure({
						key: this,
						read: () => ({
							sel: r.dom.getBoundingClientRect(),
							panel: this.list.getBoundingClientRect()
						}),
						write: ({ sel: o, panel: l }) => {
							o.top < l.top
								? (this.list.scrollTop -= l.top - o.top)
								: o.bottom > l.bottom &&
								  (this.list.scrollTop += o.bottom - l.bottom);
						}
				  }))
				: this.selectedIndex < 0 &&
				  this.list.removeAttribute("aria-activedescendant"),
			s && this.sync();
	}
	sync() {
		let e = this.list.firstChild;
		function t() {
			let i = e;
			(e = i.nextSibling), i.remove();
		}
		for (let i of this.items)
			if (i.dom.parentNode == this.list) {
				for (; e != i.dom; ) t();
				e = i.dom.nextSibling;
			} else this.list.insertBefore(i.dom, e);
		for (; e; ) t();
	}
	moveSelection(e) {
		if (this.selectedIndex < 0) return;
		let t = this.view.state.field(Be),
			i = ni(t.diagnostics, this.items[e].diagnostic);
		i &&
			this.view.dispatch({
				selection: { anchor: i.from, head: i.to },
				scrollIntoView: !0,
				effects: $c.of(i)
			});
	}
	static open(e) {
		return new Qn(e);
	}
}
function g0(n, e = 'viewBox="0 0 40 40"') {
	return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(
		n
	)}</svg>')`;
}
function Os(n) {
	return g0(
		`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`,
		'width="6" height="3"'
	);
}
const y0 = O.baseTheme({
		".cm-diagnostic": {
			padding: "3px 6px 3px 8px",
			marginLeft: "-1px",
			display: "block",
			whiteSpace: "pre-wrap"
		},
		".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
		".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
		".cm-diagnostic-info": { borderLeft: "5px solid #999" },
		".cm-diagnosticAction": {
			font: "inherit",
			border: "none",
			padding: "2px 4px",
			backgroundColor: "#444",
			color: "white",
			borderRadius: "3px",
			marginLeft: "8px"
		},
		".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 },
		".cm-lintRange": {
			backgroundPosition: "left bottom",
			backgroundRepeat: "repeat-x",
			paddingBottom: "0.7px"
		},
		".cm-lintRange-error": { backgroundImage: Os("#d11") },
		".cm-lintRange-warning": { backgroundImage: Os("orange") },
		".cm-lintRange-info": { backgroundImage: Os("#999") },
		".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
		".cm-tooltip-lint": { padding: 0, margin: 0 },
		".cm-lintPoint": {
			position: "relative",
			"&:after": {
				content: '""',
				position: "absolute",
				bottom: 0,
				left: "-2px",
				borderLeft: "3px solid transparent",
				borderRight: "3px solid transparent",
				borderBottom: "4px solid #d11"
			}
		},
		".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } },
		".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
		".cm-panel.cm-panel-lint": {
			position: "relative",
			"& ul": {
				maxHeight: "100px",
				overflowY: "auto",
				"& [aria-selected]": {
					backgroundColor: "#ddd",
					"& u": { textDecoration: "underline" }
				},
				"&:focus [aria-selected]": {
					background_fallback: "#bdf",
					backgroundColor: "Highlight",
					color_fallback: "white",
					color: "HighlightText"
				},
				"& u": { textDecoration: "none" },
				padding: 0,
				margin: 0
			},
			"& [name=close]": {
				position: "absolute",
				top: "0",
				right: "2px",
				background: "inherit",
				border: "none",
				font: "inherit",
				padding: 0,
				margin: 0
			}
		}
	}),
	b0 = (() => [
		Rd(),
		ed(),
		Qp(),
		Mp(),
		ju(),
		N.allowMultipleSelections.of(!0),
		dp(),
		Hr(Bp, { fallback: !0 }),
		$g(),
		fd(),
		pd(),
		qn.of([...Xg, ...Xm, ...am, ...Sp, ...s0, ...d0])
	])(),
	Gl = {
		python: () =>
			Pe(
				() => import("./index-c79bbad5.js"),
				[
					"./index-c79bbad5.js",
					"./index-4910755d.js",
					"../lite.js",
					"../lite.css",
					"./Blocks-b77f2878.js",
					"./Button-5b68d65a.js",
					"./Button-4cd12e76.css",
					"./Blocks-005a10ea.css",
					"./BlockLabel-e392131b.js",
					"./Empty-b331fdfe.js",
					"./Copy-d120a3d6.js",
					"./Download-604a4bc6.js",
					"./DropdownArrow-5fa4dd09.css"
				],
				import.meta.url
			).then((n) => n.python()),
		markdown: async () => {
			const [n, e] = await Promise.all([
				Pe(
					() => import("./index-e459d48b.js"),
					[
						"./index-e459d48b.js",
						"./index-66490713.js",
						"./index-4910755d.js",
						"./index-3d4c29df.js",
						"../lite.js",
						"../lite.css",
						"./Blocks-b77f2878.js",
						"./Button-5b68d65a.js",
						"./Button-4cd12e76.css",
						"./Blocks-005a10ea.css",
						"./BlockLabel-e392131b.js",
						"./Empty-b331fdfe.js",
						"./Copy-d120a3d6.js",
						"./Download-604a4bc6.js",
						"./DropdownArrow-5fa4dd09.css",
						"./index-1705961d.js"
					],
					import.meta.url
				),
				Pe(
					() => import("./frontmatter-66ca1c2f.js"),
					[
						"./frontmatter-66ca1c2f.js",
						"./yaml-95012b83.js",
						"../lite.js",
						"../lite.css",
						"./Blocks-b77f2878.js",
						"./Button-5b68d65a.js",
						"./Button-4cd12e76.css",
						"./Blocks-005a10ea.css",
						"./BlockLabel-e392131b.js",
						"./Empty-b331fdfe.js",
						"./Copy-d120a3d6.js",
						"./Download-604a4bc6.js",
						"./DropdownArrow-5fa4dd09.css"
					],
					import.meta.url
				)
			]);
			return n.markdown({ extensions: [e.frontmatter] });
		},
		json: () =>
			Pe(
				() => import("./index-f33fc562.js"),
				[
					"./index-f33fc562.js",
					"./index-4910755d.js",
					"../lite.js",
					"../lite.css",
					"./Blocks-b77f2878.js",
					"./Button-5b68d65a.js",
					"./Button-4cd12e76.css",
					"./Blocks-005a10ea.css",
					"./BlockLabel-e392131b.js",
					"./Empty-b331fdfe.js",
					"./Copy-d120a3d6.js",
					"./Download-604a4bc6.js",
					"./DropdownArrow-5fa4dd09.css"
				],
				import.meta.url
			).then((n) => n.json()),
		html: () =>
			Pe(
				() => import("./index-66490713.js"),
				[
					"./index-66490713.js",
					"./index-4910755d.js",
					"./index-3d4c29df.js",
					"../lite.js",
					"../lite.css",
					"./Blocks-b77f2878.js",
					"./Button-5b68d65a.js",
					"./Button-4cd12e76.css",
					"./Blocks-005a10ea.css",
					"./BlockLabel-e392131b.js",
					"./Empty-b331fdfe.js",
					"./Copy-d120a3d6.js",
					"./Download-604a4bc6.js",
					"./DropdownArrow-5fa4dd09.css",
					"./index-1705961d.js"
				],
				import.meta.url
			).then((n) => n.html()),
		css: () =>
			Pe(
				() => import("./index-3d4c29df.js"),
				[
					"./index-3d4c29df.js",
					"./index-4910755d.js",
					"../lite.js",
					"../lite.css",
					"./Blocks-b77f2878.js",
					"./Button-5b68d65a.js",
					"./Button-4cd12e76.css",
					"./Blocks-005a10ea.css",
					"./BlockLabel-e392131b.js",
					"./Empty-b331fdfe.js",
					"./Copy-d120a3d6.js",
					"./Download-604a4bc6.js",
					"./DropdownArrow-5fa4dd09.css"
				],
				import.meta.url
			).then((n) => n.css()),
		javascript: () =>
			Pe(
				() => import("./index-1705961d.js"),
				[
					"./index-1705961d.js",
					"./index-4910755d.js",
					"../lite.js",
					"../lite.css",
					"./Blocks-b77f2878.js",
					"./Button-5b68d65a.js",
					"./Button-4cd12e76.css",
					"./Blocks-005a10ea.css",
					"./BlockLabel-e392131b.js",
					"./Empty-b331fdfe.js",
					"./Copy-d120a3d6.js",
					"./Download-604a4bc6.js",
					"./DropdownArrow-5fa4dd09.css"
				],
				import.meta.url
			).then((n) => n.javascript()),
		typescript: () =>
			Pe(
				() => import("./index-1705961d.js"),
				[
					"./index-1705961d.js",
					"./index-4910755d.js",
					"../lite.js",
					"../lite.css",
					"./Blocks-b77f2878.js",
					"./Button-5b68d65a.js",
					"./Button-4cd12e76.css",
					"./Blocks-005a10ea.css",
					"./BlockLabel-e392131b.js",
					"./Empty-b331fdfe.js",
					"./Copy-d120a3d6.js",
					"./Download-604a4bc6.js",
					"./DropdownArrow-5fa4dd09.css"
				],
				import.meta.url
			).then((n) => n.javascript({ typescript: !0 })),
		yaml: () =>
			Pe(() => import("./yaml-95012b83.js"), [], import.meta.url).then((n) =>
				jt.define(n.yaml)
			),
		dockerfile: () =>
			Pe(() => import("./dockerfile-d67bbd50.js"), [], import.meta.url).then(
				(n) => jt.define(n.dockerFile)
			),
		shell: () =>
			Pe(() => import("./shell-86dd1d99.js"), [], import.meta.url).then((n) =>
				jt.define(n.shell)
			),
		r: () =>
			Pe(() => import("./r-3ca97919.js"), [], import.meta.url).then((n) =>
				jt.define(n.r)
			)
	},
	w0 = {
		py: "python",
		md: "markdown",
		js: "javascript",
		ts: "typescript",
		sh: "shell"
	};
async function k0(n) {
	const e = Gl[n] || Gl[w0[n]] || void 0;
	if (e) return e();
}
function x0(n) {
	let e, t, i;
	return {
		c() {
			(e = dt("div")),
				(t = dt("div")),
				se(t, "class", (i = "codemirror-wrapper " + n[0] + " svelte-1sc8eck")),
				se(e, "class", "wrap svelte-1sc8eck");
		},
		m(s, r) {
			Ce(s, e, r), Yt(e, t), n[12](t);
		},
		p(s, [r]) {
			r & 1 &&
				i !== (i = "codemirror-wrapper " + s[0] + " svelte-1sc8eck") &&
				se(t, "class", i);
		},
		i: xi,
		o: xi,
		d(s) {
			s && Ae(e), n[12](null);
		}
	};
}
function v0(n) {
	let e = n.dom.querySelectorAll(".cm-gutterElement");
	if (e.length === 0) return null;
	for (var t = 0; t < e.length; t++) {
		let i = e[t],
			s = getComputedStyle(i)?.height ?? "0px";
		if (s != "0px") return s;
	}
	return null;
}
function S0(n, e, t) {
	let { classNames: i = "" } = e,
		{ value: s = "" } = e,
		{ dark_mode: r } = e,
		{ basic: o = !0 } = e,
		{ language: l } = e,
		{ lines: a = 5 } = e,
		{ extensions: h = [] } = e,
		{ useTab: c = !0 } = e,
		{ readonly: f = !1 } = e,
		{ placeholder: u = void 0 } = e;
	const d = Xl();
	let p, g, y;
	async function b(M) {
		const G = await k0(M);
		t(11, (p = G));
	}
	function w(M) {
		y &&
			M !== y.state.doc.toString() &&
			y.dispatch({ changes: { from: 0, to: y.state.doc.length, insert: M } });
	}
	function v(M) {
		y && y.requestMeasure({ read: C });
	}
	function S() {
		return new O({ parent: g, state: I(s) });
	}
	function C(M) {
		let G = M.dom.querySelectorAll(".cm-gutter"),
			Y = a + 1,
			le = v0(M);
		if (!le) return null;
		for (var J = 0; J < G.length; J++) {
			let ie = G[J];
			ie.style.minHeight = `calc(${le} * ${Y})`;
		}
		return null;
	}
	function T(M) {
		if (M.docChanged) {
			const Y = M.state.doc.toString();
			t(2, (s = Y)), d("change", Y);
		}
		y.requestMeasure({ read: C });
	}
	function B() {
		return [...P(o, c, u, f, p), U, ...V(), ...h];
	}
	const U = O.theme({
		"&": {
			fontSize: "var(--text-sm)",
			backgroundColor: "var(--border-color-secondary)"
		},
		".cm-content": {
			paddingTop: "5px",
			paddingBottom: "5px",
			color: "var(--body-text-color)",
			fontFamily: "var(--font-mono)",
			minHeight: "100%"
		},
		".cm-gutters": {
			marginRight: "1px",
			borderRight: "1px solid var(--border-color-primary)",
			backgroundColor: "transparent",
			color: "var(--body-text-color-subdued)"
		},
		".cm-focused": { outline: "none" },
		".cm-scroller": { height: "auto" },
		".cm-cursor": { borderLeftColor: "var(--body-text-color)" }
	});
	function I(M) {
		return N.create({ doc: M ?? void 0, extensions: B() });
	}
	function P(M, G, Y, le, J) {
		const ie = [O.editable.of(!le), N.readOnly.of(le)];
		return (
			M && ie.push(b0),
			G && ie.push(qn.of([Zm])),
			Y && ie.push(ld(Y)),
			J && ie.push(J),
			ie.push(O.updateListener.of(T)),
			ie
		);
	}
	function V() {
		const M = [];
		return r ? M.push(lg) : M.push(mg), M;
	}
	function $() {
		y?.dispatch({ effects: R.reconfigure.of(B()) });
	}
	Xc(() => ((y = S()), () => y?.destroy()));
	function Q(M) {
		vr[M ? "unshift" : "push"](() => {
			(g = M), t(1, g);
		});
	}
	return (
		(n.$$set = (M) => {
			"classNames" in M && t(0, (i = M.classNames)),
				"value" in M && t(2, (s = M.value)),
				"dark_mode" in M && t(3, (r = M.dark_mode)),
				"basic" in M && t(4, (o = M.basic)),
				"language" in M && t(5, (l = M.language)),
				"lines" in M && t(6, (a = M.lines)),
				"extensions" in M && t(7, (h = M.extensions)),
				"useTab" in M && t(8, (c = M.useTab)),
				"readonly" in M && t(9, (f = M.readonly)),
				"placeholder" in M && t(10, (u = M.placeholder));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 32 && b(l),
				n.$$.dirty & 2048 && $(),
				n.$$.dirty & 4 && w(s),
				n.$$.dirty & 64 && v();
		}),
		[i, g, s, r, o, l, a, h, c, f, u, p, Q]
	);
}
class Yc extends si {
	constructor(e) {
		super(),
			ri(this, e, S0, x0, oi, {
				classNames: 0,
				value: 2,
				dark_mode: 3,
				basic: 4,
				language: 5,
				lines: 6,
				extensions: 7,
				useTab: 8,
				readonly: 9,
				placeholder: 10
			});
	}
}
function Jl(n) {
	let e, t, i, s;
	return (
		(t = new ca({})),
		{
			c() {
				(e = dt("span")),
					fe(t.$$.fragment),
					se(e, "class", "check svelte-qi7jcw");
			},
			m(r, o) {
				Ce(r, e, o), ue(t, e, null), (s = !0);
			},
			i(r) {
				s ||
					(H(t.$$.fragment, r),
					ea(() => {
						s && (i || (i = bn(e, wn, {}, !0)), i.run(1));
					}),
					(s = !0));
			},
			o(r) {
				j(t.$$.fragment, r), i || (i = bn(e, wn, {}, !1)), i.run(0), (s = !1);
			},
			d(r) {
				r && Ae(e), de(t), r && i && i.end();
			}
		}
	);
}
function C0(n) {
	let e, t, i, s, r, o, l;
	i = new Qc({});
	let a = n[0] && Jl();
	return {
		c() {
			(e = dt("button")),
				(t = dt("span")),
				fe(i.$$.fragment),
				(s = pt()),
				a && a.c(),
				se(t, "class", "copy-text"),
				yn(t, "copied", n[0]),
				se(e, "title", "copy"),
				se(e, "class", "svelte-qi7jcw");
		},
		m(h, c) {
			Ce(h, e, c),
				Yt(e, t),
				ue(i, t, null),
				Yt(e, s),
				a && a.m(e, null),
				(r = !0),
				o || ((l = Zl(e, "click", n[1])), (o = !0));
		},
		p(h, [c]) {
			(!r || c & 1) && yn(t, "copied", h[0]),
				h[0]
					? a
						? c & 1 && H(a, 1)
						: ((a = Jl()), a.c(), H(a, 1), a.m(e, null))
					: a &&
					  (_n(),
					  j(a, 1, 1, () => {
							a = null;
					  }),
					  Vn());
		},
		i(h) {
			r || (H(i.$$.fragment, h), H(a), (r = !0));
		},
		o(h) {
			j(i.$$.fragment, h), j(a), (r = !1);
		},
		d(h) {
			h && Ae(e), de(i), a && a.d(), (o = !1), l();
		}
	};
}
function A0(n, e, t) {
	let i = !1,
		{ value: s } = e,
		r;
	function o() {
		t(0, (i = !0)),
			r && clearTimeout(r),
			(r = setTimeout(() => {
				t(0, (i = !1));
			}, 2e3));
	}
	async function l() {
		"clipboard" in navigator && (await navigator.clipboard.writeText(s), o());
	}
	return (
		Ql(() => {
			r && clearTimeout(r);
		}),
		(n.$$set = (a) => {
			"value" in a && t(2, (s = a.value));
		}),
		[i, l, s]
	);
}
class M0 extends si {
	constructor(e) {
		super(), ri(this, e, A0, C0, oi, { value: 2 });
	}
}
function Yl(n) {
	let e, t, i, s;
	return (
		(t = new ca({})),
		{
			c() {
				(e = dt("span")),
					fe(t.$$.fragment),
					se(e, "class", "check svelte-14d303a");
			},
			m(r, o) {
				Ce(r, e, o), ue(t, e, null), (s = !0);
			},
			i(r) {
				s ||
					(H(t.$$.fragment, r),
					ea(() => {
						s && (i || (i = bn(e, wn, {}, !0)), i.run(1));
					}),
					(s = !0));
			},
			o(r) {
				j(t.$$.fragment, r), i || (i = bn(e, wn, {}, !1)), i.run(0), (s = !1);
			},
			d(r) {
				r && Ae(e), de(t), r && i && i.end();
			}
		}
	);
}
function D0(n) {
	let e, t, i, s, r, o, l;
	t = new ef({});
	let a = n[0] && Yl();
	return {
		c() {
			(e = dt("a")),
				fe(t.$$.fragment),
				(i = pt()),
				a && a.c(),
				se(e, "download", (s = "file." + n[2])),
				se(e, "href", n[1]),
				se(e, "class", "svelte-14d303a"),
				yn(e, "copied", n[0]);
		},
		m(h, c) {
			Ce(h, e, c),
				ue(t, e, null),
				Yt(e, i),
				a && a.m(e, null),
				(r = !0),
				o || ((l = Zl(e, "click", n[3])), (o = !0));
		},
		p(h, [c]) {
			h[0]
				? a
					? c & 1 && H(a, 1)
					: ((a = Yl()), a.c(), H(a, 1), a.m(e, null))
				: a &&
				  (_n(),
				  j(a, 1, 1, () => {
						a = null;
				  }),
				  Vn()),
				(!r || (c & 4 && s !== (s = "file." + h[2]))) && se(e, "download", s),
				(!r || c & 2) && se(e, "href", h[1]),
				(!r || c & 1) && yn(e, "copied", h[0]);
		},
		i(h) {
			r || (H(t.$$.fragment, h), H(a), (r = !0));
		},
		o(h) {
			j(t.$$.fragment, h), j(a), (r = !1);
		},
		d(h) {
			h && Ae(e), de(t), a && a.d(), (o = !1), l();
		}
	};
}
function T0(n) {
	return (
		{
			py: "py",
			python: "py",
			md: "md",
			markdown: "md",
			json: "json",
			html: "html",
			css: "css",
			js: "js",
			javascript: "js",
			ts: "ts",
			typescript: "ts",
			yaml: "yaml",
			yml: "yml",
			dockerfile: "dockerfile",
			sh: "sh",
			shell: "sh",
			r: "r"
		}[n] || "txt"
	);
}
function O0(n, e, t) {
	let i,
		s,
		{ value: r } = e,
		{ language: o } = e,
		l = !1,
		a;
	function h() {
		t(0, (l = !0)),
			a && clearTimeout(a),
			(a = setTimeout(() => {
				t(0, (l = !1));
			}, 2e3));
	}
	return (
		Ql(() => {
			a && clearTimeout(a);
		}),
		(n.$$set = (c) => {
			"value" in c && t(4, (r = c.value)),
				"language" in c && t(5, (o = c.language));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 32 && t(2, (i = T0(o))),
				n.$$.dirty & 16 && t(1, (s = URL.createObjectURL(new Blob([r]))));
		}),
		[l, s, i, h, r, o]
	);
}
class B0 extends si {
	constructor(e) {
		super(), ri(this, e, O0, D0, oi, { value: 4, language: 5 });
	}
}
function P0(n) {
	let e, t, i, s, r;
	return (
		(t = new B0({ props: { value: n[0], language: n[1] } })),
		(s = new M0({ props: { value: n[0] } })),
		{
			c() {
				(e = dt("div")),
					fe(t.$$.fragment),
					(i = pt()),
					fe(s.$$.fragment),
					se(e, "class", "svelte-1yin446");
			},
			m(o, l) {
				Ce(o, e, l), ue(t, e, null), Yt(e, i), ue(s, e, null), (r = !0);
			},
			p(o, [l]) {
				const a = {};
				l & 1 && (a.value = o[0]), l & 2 && (a.language = o[1]), t.$set(a);
				const h = {};
				l & 1 && (h.value = o[0]), s.$set(h);
			},
			i(o) {
				r || (H(t.$$.fragment, o), H(s.$$.fragment, o), (r = !0));
			},
			o(o) {
				j(t.$$.fragment, o), j(s.$$.fragment, o), (r = !1);
			},
			d(o) {
				o && Ae(e), de(t), de(s);
			}
		}
	);
}
function E0(n, e, t) {
	let { value: i } = e,
		{ language: s } = e;
	return (
		(n.$$set = (r) => {
			"value" in r && t(0, (i = r.value)),
				"language" in r && t(1, (s = r.language));
		}),
		[i, s]
	);
}
class R0 extends si {
	constructor(e) {
		super(), ri(this, e, E0, P0, oi, { value: 0, language: 1 });
	}
}
function L0(n) {
	let e, t;
	return (
		(e = new aa({
			props: {
				variant: "solid",
				padding: !1,
				elem_id: n[3],
				elem_classes: n[4],
				visible: n[5],
				$$slots: { default: [N0] },
				$$scope: { ctx: n }
			}
		})),
		{
			c() {
				fe(e.$$.fragment);
			},
			m(i, s) {
				ue(e, i, s), (t = !0);
			},
			p(i, s) {
				const r = {};
				s & 8 && (r.elem_id = i[3]),
					s & 16 && (r.elem_classes = i[4]),
					s & 32 && (r.visible = i[5]),
					s & 33671 && (r.$$scope = { dirty: s, ctx: i }),
					e.$set(r);
			},
			i(i) {
				t || (H(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				j(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				de(e, i);
			}
		}
	);
}
function I0(n) {
	let e, t;
	return (
		(e = new aa({
			props: {
				variant: "solid",
				padding: !1,
				elem_id: n[3],
				elem_classes: n[4],
				visible: n[5],
				$$slots: { default: [H0] },
				$$scope: { ctx: n }
			}
		})),
		{
			c() {
				fe(e.$$.fragment);
			},
			m(i, s) {
				ue(e, i, s), (t = !0);
			},
			p(i, s) {
				const r = {};
				s & 8 && (r.elem_id = i[3]),
					s & 16 && (r.elem_classes = i[4]),
					s & 32 && (r.visible = i[5]),
					s & 33671 && (r.$$scope = { dirty: s, ctx: i }),
					e.$set(r);
			},
			i(i) {
				t || (H(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				j(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				de(e, i);
			}
		}
	);
}
function N0(n) {
	let e, t, i, s, r, o, l;
	const a = [n[9]];
	let h = {};
	for (let u = 0; u < a.length; u += 1) h = ia(h, a[u]);
	(e = new na({ props: h })),
		(i = new ha({
			props: { Icon: Sr, show_label: n[8], label: n[7], float: !1 }
		}));
	function c(u) {
		n[13](u);
	}
	let f = { language: n[1], lines: n[2], dark_mode: n[10] };
	return (
		n[0] !== void 0 && (f.value = n[0]),
		(r = new Yc({ props: f })),
		vr.push(() => sa(r, "value", c)),
		{
			c() {
				fe(e.$$.fragment),
					(t = pt()),
					fe(i.$$.fragment),
					(s = pt()),
					fe(r.$$.fragment);
			},
			m(u, d) {
				ue(e, u, d),
					Ce(u, t, d),
					ue(i, u, d),
					Ce(u, s, d),
					ue(r, u, d),
					(l = !0);
			},
			p(u, d) {
				const p = d & 512 ? ra(a, [oa(u[9])]) : {};
				e.$set(p);
				const g = {};
				d & 256 && (g.show_label = u[8]),
					d & 128 && (g.label = u[7]),
					i.$set(g);
				const y = {};
				d & 2 && (y.language = u[1]),
					d & 4 && (y.lines = u[2]),
					!o && d & 1 && ((o = !0), (y.value = u[0]), la(() => (o = !1))),
					r.$set(y);
			},
			i(u) {
				l ||
					(H(e.$$.fragment, u),
					H(i.$$.fragment, u),
					H(r.$$.fragment, u),
					(l = !0));
			},
			o(u) {
				j(e.$$.fragment, u), j(i.$$.fragment, u), j(r.$$.fragment, u), (l = !1);
			},
			d(u) {
				de(e, u), u && Ae(t), de(i, u), u && Ae(s), de(r, u);
			}
		}
	);
}
function _0(n) {
	let e, t, i, s, r;
	e = new R0({ props: { language: n[1], value: n[0] } });
	function o(a) {
		n[12](a);
	}
	let l = { language: n[1], lines: n[2], dark_mode: n[10], readonly: !0 };
	return (
		n[0] !== void 0 && (l.value = n[0]),
		(i = new Yc({ props: l })),
		vr.push(() => sa(i, "value", o)),
		{
			c() {
				fe(e.$$.fragment), (t = pt()), fe(i.$$.fragment);
			},
			m(a, h) {
				ue(e, a, h), Ce(a, t, h), ue(i, a, h), (r = !0);
			},
			p(a, h) {
				const c = {};
				h & 2 && (c.language = a[1]), h & 1 && (c.value = a[0]), e.$set(c);
				const f = {};
				h & 2 && (f.language = a[1]),
					h & 4 && (f.lines = a[2]),
					!s && h & 1 && ((s = !0), (f.value = a[0]), la(() => (s = !1))),
					i.$set(f);
			},
			i(a) {
				r || (H(e.$$.fragment, a), H(i.$$.fragment, a), (r = !0));
			},
			o(a) {
				j(e.$$.fragment, a), j(i.$$.fragment, a), (r = !1);
			},
			d(a) {
				de(e, a), a && Ae(t), de(i, a);
			}
		}
	);
}
function V0(n) {
	let e, t;
	return (
		(e = new Zc({
			props: {
				size: "large",
				unpadded_box: !0,
				$$slots: { default: [F0] },
				$$scope: { ctx: n }
			}
		})),
		{
			c() {
				fe(e.$$.fragment);
			},
			m(i, s) {
				ue(e, i, s), (t = !0);
			},
			p(i, s) {
				const r = {};
				s & 32768 && (r.$$scope = { dirty: s, ctx: i }), e.$set(r);
			},
			i(i) {
				t || (H(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				j(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				de(e, i);
			}
		}
	);
}
function F0(n) {
	let e, t;
	return (
		(e = new Sr({})),
		{
			c() {
				fe(e.$$.fragment);
			},
			m(i, s) {
				ue(e, i, s), (t = !0);
			},
			i(i) {
				t || (H(e.$$.fragment, i), (t = !0));
			},
			o(i) {
				j(e.$$.fragment, i), (t = !1);
			},
			d(i) {
				de(e, i);
			}
		}
	);
}
function H0(n) {
	let e, t, i, s, r, o, l, a;
	const h = [n[9]];
	let c = {};
	for (let p = 0; p < h.length; p += 1) c = ia(c, h[p]);
	(e = new na({ props: c })),
		(i = new ha({
			props: { Icon: Sr, show_label: n[8], label: n[7], float: !1 }
		}));
	const f = [V0, _0],
		u = [];
	function d(p, g) {
		return p[0] ? 1 : 0;
	}
	return (
		(r = d(n)),
		(o = u[r] = f[r](n)),
		{
			c() {
				fe(e.$$.fragment),
					(t = pt()),
					fe(i.$$.fragment),
					(s = pt()),
					o.c(),
					(l = ta());
			},
			m(p, g) {
				ue(e, p, g),
					Ce(p, t, g),
					ue(i, p, g),
					Ce(p, s, g),
					u[r].m(p, g),
					Ce(p, l, g),
					(a = !0);
			},
			p(p, g) {
				const y = g & 512 ? ra(h, [oa(p[9])]) : {};
				e.$set(y);
				const b = {};
				g & 256 && (b.show_label = p[8]),
					g & 128 && (b.label = p[7]),
					i.$set(b);
				let w = r;
				(r = d(p)),
					r === w
						? u[r].p(p, g)
						: (_n(),
						  j(u[w], 1, 1, () => {
								u[w] = null;
						  }),
						  Vn(),
						  (o = u[r]),
						  o ? o.p(p, g) : ((o = u[r] = f[r](p)), o.c()),
						  H(o, 1),
						  o.m(l.parentNode, l));
			},
			i(p) {
				a || (H(e.$$.fragment, p), H(i.$$.fragment, p), H(o), (a = !0));
			},
			o(p) {
				j(e.$$.fragment, p), j(i.$$.fragment, p), j(o), (a = !1);
			},
			d(p) {
				de(e, p), p && Ae(t), de(i, p), p && Ae(s), u[r].d(p), p && Ae(l);
			}
		}
	);
}
function W0(n) {
	let e, t, i, s;
	const r = [I0, L0],
		o = [];
	function l(a, h) {
		return a[6] === "static" ? 0 : 1;
	}
	return (
		(e = l(n)),
		(t = o[e] = r[e](n)),
		{
			c() {
				t.c(), (i = ta());
			},
			m(a, h) {
				o[e].m(a, h), Ce(a, i, h), (s = !0);
			},
			p(a, [h]) {
				let c = e;
				(e = l(a)),
					e === c
						? o[e].p(a, h)
						: (_n(),
						  j(o[c], 1, 1, () => {
								o[c] = null;
						  }),
						  Vn(),
						  (t = o[e]),
						  t ? t.p(a, h) : ((t = o[e] = r[e](a)), t.c()),
						  H(t, 1),
						  t.m(i.parentNode, i));
			},
			i(a) {
				s || (H(t), (s = !0));
			},
			o(a) {
				j(t), (s = !1);
			},
			d(a) {
				o[e].d(a), a && Ae(i);
			}
		}
	);
}
function z0(n, e, t) {
	const i = Xl();
	let { value: s = "" } = e,
		{ language: r = "" } = e,
		{ lines: o = 5 } = e,
		{ target: l } = e,
		{ elem_id: a = "" } = e,
		{ elem_classes: h = [] } = e,
		{ visible: c = !0 } = e,
		{ mode: f } = e,
		{ label: u = "Code" } = e,
		{ show_label: d = !0 } = e,
		{ loading_status: p } = e,
		g = l.classList.contains("dark");
	function y(w) {
		(s = w), t(0, s);
	}
	function b(w) {
		(s = w), t(0, s);
	}
	return (
		(n.$$set = (w) => {
			"value" in w && t(0, (s = w.value)),
				"language" in w && t(1, (r = w.language)),
				"lines" in w && t(2, (o = w.lines)),
				"target" in w && t(11, (l = w.target)),
				"elem_id" in w && t(3, (a = w.elem_id)),
				"elem_classes" in w && t(4, (h = w.elem_classes)),
				"visible" in w && t(5, (c = w.visible)),
				"mode" in w && t(6, (f = w.mode)),
				"label" in w && t(7, (u = w.label)),
				"show_label" in w && t(8, (d = w.show_label)),
				"loading_status" in w && t(9, (p = w.loading_status));
		}),
		(n.$$.update = () => {
			n.$$.dirty & 1 && i("change", s);
		}),
		[s, r, o, a, h, c, f, u, d, p, g, l, y, b]
	);
}
class q0 extends si {
	constructor(e) {
		super(),
			ri(this, e, z0, W0, oi, {
				value: 0,
				language: 1,
				lines: 2,
				target: 11,
				elem_id: 3,
				elem_classes: 4,
				visible: 5,
				mode: 6,
				label: 7,
				show_label: 8,
				loading_status: 9
			});
	}
}
const j0 = q0,
	K0 = ["static", "dynamic"],
	fy = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, Component: j0, modes: K0 },
			Symbol.toStringTag,
			{ value: "Module" }
		)
	);
export {
	ip as A,
	hy as B,
	yg as C,
	Ld as D,
	k as E,
	fy as F,
	ee as I,
	ur as L,
	Lr as N,
	Rh as P,
	jt as S,
	z as T,
	ay as a,
	sy as b,
	ve as c,
	ry as d,
	L as e,
	mp as f,
	$e as g,
	pe as h,
	rp as i,
	Vi as j,
	qn as k,
	Ie as l,
	Nh as m,
	Dt as n,
	pp as o,
	iy as p,
	Vh as q,
	ti as r,
	Xd as s,
	m as t,
	Rp as u,
	O as v,
	ly as w,
	ty as x,
	cy as y,
	oy as z
};
//# sourceMappingURL=index-6d84c79e.js.map
