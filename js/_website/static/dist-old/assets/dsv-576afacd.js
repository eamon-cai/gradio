var D = {},
	A = {},
	E = 34,
	m = 10,
	R = 13;
function I(r) {
	return new Function(
		"d",
		"return {" +
			r
				.map(function (t, e) {
					return JSON.stringify(t) + ": d[" + e + '] || ""';
				})
				.join(",") +
			"}"
	);
}
function B(r, t) {
	var e = I(r);
	return function (a, c) {
		return t(e(a), c, r);
	};
}
function F(r) {
	var t = Object.create(null),
		e = [];
	return (
		r.forEach(function (a) {
			for (var c in a) c in t || e.push((t[c] = c));
		}),
		e
	);
}
function f(r, t) {
	var e = r + "",
		a = e.length;
	return a < t ? new Array(t - a + 1).join(0) + e : e;
}
function L(r) {
	return r < 0 ? "-" + f(-r, 6) : r > 9999 ? "+" + f(r, 6) : f(r, 4);
}
function S(r) {
	var t = r.getUTCHours(),
		e = r.getUTCMinutes(),
		a = r.getUTCSeconds(),
		c = r.getUTCMilliseconds();
	return isNaN(r)
		? "Invalid Date"
		: L(r.getUTCFullYear()) +
				"-" +
				f(r.getUTCMonth() + 1, 2) +
				"-" +
				f(r.getUTCDate(), 2) +
				(c
					? "T" + f(t, 2) + ":" + f(e, 2) + ":" + f(a, 2) + "." + f(c, 3) + "Z"
					: a
					? "T" + f(t, 2) + ":" + f(e, 2) + ":" + f(a, 2) + "Z"
					: e || t
					? "T" + f(t, 2) + ":" + f(e, 2) + "Z"
					: "");
}
function Z(r) {
	var t = new RegExp(
			'["' +
				r +
				`
\r]`
		),
		e = r.charCodeAt(0);
	function a(n, o) {
		var s,
			i,
			u = c(n, function (h, l) {
				if (s) return s(h, l - 1);
				(i = h), (s = o ? B(h, o) : I(h));
			});
		return (u.columns = i || []), u;
	}
	function c(n, o) {
		var s = [],
			i = n.length,
			u = 0,
			h = 0,
			l,
			v = i <= 0,
			C = !1;
		n.charCodeAt(i - 1) === m && --i, n.charCodeAt(i - 1) === R && --i;
		function w() {
			if (v) return A;
			if (C) return (C = !1), D;
			var j,
				d = u,
				p;
			if (n.charCodeAt(d) === E) {
				for (; (u++ < i && n.charCodeAt(u) !== E) || n.charCodeAt(++u) === E; );
				return (
					(j = u) >= i
						? (v = !0)
						: (p = n.charCodeAt(u++)) === m
						? (C = !0)
						: p === R && ((C = !0), n.charCodeAt(u) === m && ++u),
					n.slice(d + 1, j - 1).replace(/""/g, '"')
				);
			}
			for (; u < i; ) {
				if ((p = n.charCodeAt((j = u++))) === m) C = !0;
				else if (p === R) (C = !0), n.charCodeAt(u) === m && ++u;
				else if (p !== e) continue;
				return n.slice(d, j);
			}
			return (v = !0), n.slice(d, i);
		}
		for (; (l = w()) !== A; ) {
			for (var T = []; l !== D && l !== A; ) T.push(l), (l = w());
			(o && (T = o(T, h++)) == null) || s.push(T);
		}
		return s;
	}
	function U(n, o) {
		return n.map(function (s) {
			return o
				.map(function (i) {
					return g(s[i]);
				})
				.join(r);
		});
	}
	function O(n, o) {
		return (
			o == null && (o = F(n)),
			[o.map(g).join(r)].concat(U(n, o)).join(`
`)
		);
	}
	function M(n, o) {
		return (
			o == null && (o = F(n)),
			U(n, o).join(`
`)
		);
	}
	function b(n) {
		return n.map(N).join(`
`);
	}
	function N(n) {
		return n.map(g).join(r);
	}
	function g(n) {
		return n == null
			? ""
			: n instanceof Date
			? S(n)
			: t.test((n += ""))
			? '"' + n.replace(/"/g, '""') + '"'
			: n;
	}
	return {
		parse: a,
		parseRows: c,
		format: O,
		formatBody: M,
		formatRows: b,
		formatRow: N,
		formatValue: g
	};
}
export { Z as d };
//# sourceMappingURL=dsv-576afacd.js.map
