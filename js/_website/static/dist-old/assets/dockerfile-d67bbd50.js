function c(n) {
	a(n, "start");
	var t = {},
		e = n.languageData || {},
		s = !1;
	for (var l in n)
		if (l != e && n.hasOwnProperty(l))
			for (var u = (t[l] = []), o = n[l], r = 0; r < o.length; r++) {
				var i = o[r];
				u.push(new w(i, n)), (i.indent || i.dedent) && (s = !0);
			}
	return {
		name: e.name,
		startState: function () {
			return { state: "start", pending: null, indent: s ? [] : null };
		},
		copyState: function (g) {
			var x = {
				state: g.state,
				pending: g.pending,
				indent: g.indent && g.indent.slice(0)
			};
			return g.stack && (x.stack = g.stack.slice(0)), x;
		},
		token: v(t),
		indent: R(t, e),
		languageData: e
	};
}
function a(n, t) {
	if (!n.hasOwnProperty(t))
		throw new Error("Undefined state " + t + " in simple mode");
}
function h(n, t) {
	if (!n) return /(?:)/;
	var e = "";
	return (
		n instanceof RegExp
			? (n.ignoreCase && (e = "i"), (n = n.source))
			: (n = String(n)),
		new RegExp((t === !1 ? "" : "^") + "(?:" + n + ")", e)
	);
}
function y(n) {
	if (!n) return null;
	if (n.apply) return n;
	if (typeof n == "string") return n.replace(/\./g, " ");
	for (var t = [], e = 0; e < n.length; e++)
		t.push(n[e] && n[e].replace(/\./g, " "));
	return t;
}
function w(n, t) {
	(n.next || n.push) && a(t, n.next || n.push),
		(this.regex = h(n.regex)),
		(this.token = y(n.token)),
		(this.data = n);
}
function v(n) {
	return function (t, e) {
		if (e.pending) {
			var s = e.pending.shift();
			return (
				e.pending.length == 0 && (e.pending = null),
				(t.pos += s.text.length),
				s.token
			);
		}
		for (var l = n[e.state], u = 0; u < l.length; u++) {
			var o = l[u],
				r = (!o.data.sol || t.sol()) && t.match(o.regex);
			if (r) {
				o.data.next
					? (e.state = o.data.next)
					: o.data.push
					? ((e.stack || (e.stack = [])).push(e.state), (e.state = o.data.push))
					: o.data.pop &&
					  e.stack &&
					  e.stack.length &&
					  (e.state = e.stack.pop()),
					o.data.indent && e.indent.push(t.indentation() + t.indentUnit),
					o.data.dedent && e.indent.pop();
				var i = o.token;
				if (
					(i && i.apply && (i = i(r)),
					r.length > 2 && o.token && typeof o.token != "string")
				) {
					e.pending = [];
					for (var g = 2; g < r.length; g++)
						r[g] && e.pending.push({ text: r[g], token: o.token[g - 1] });
					return t.backUp(r[0].length - (r[1] ? r[1].length : 0)), i[0];
				} else return i && i.join ? i[0] : i;
			}
		}
		return t.next(), null;
	};
}
function R(n, t) {
	return function (e, s) {
		if (
			e.indent == null ||
			(t.dontIndentStates && t.doneIndentState.indexOf(e.state) > -1)
		)
			return null;
		var l = e.indent.length - 1,
			u = n[e.state];
		n: for (;;) {
			for (var o = 0; o < u.length; o++) {
				var r = u[o];
				if (r.data.dedent && r.data.dedentIfLineStart !== !1) {
					var i = r.regex.exec(s);
					if (i && i[0]) {
						l--,
							(r.next || r.push) && (u = n[r.next || r.push]),
							(s = s.slice(i[0].length));
						continue n;
					}
				}
			}
			break;
		}
		return l < 0 ? 0 : e.indent[l];
	};
}
var p = "from",
	$ = new RegExp("^(\\s*)\\b(" + p + ")\\b", "i"),
	d = ["run", "cmd", "entrypoint", "shell"],
	b = new RegExp("^(\\s*)(" + d.join("|") + ")(\\s+\\[)", "i"),
	f = "expose",
	m = new RegExp("^(\\s*)(" + f + ")(\\s+)", "i"),
	S = [
		"arg",
		"from",
		"maintainer",
		"label",
		"env",
		"add",
		"copy",
		"volume",
		"user",
		"workdir",
		"onbuild",
		"stopsignal",
		"healthcheck",
		"shell"
	],
	E = [p, f].concat(d).concat(S),
	k = "(" + E.join("|") + ")",
	I = new RegExp("^(\\s*)" + k + "(\\s*)(#.*)?$", "i"),
	O = new RegExp("^(\\s*)" + k + "(\\s+)", "i");
const D = c({
	start: [
		{ regex: /^\s*#.*$/, sol: !0, token: "comment" },
		{ regex: $, token: [null, "keyword"], sol: !0, next: "from" },
		{ regex: I, token: [null, "keyword", null, "error"], sol: !0 },
		{ regex: b, token: [null, "keyword", null], sol: !0, next: "array" },
		{ regex: m, token: [null, "keyword", null], sol: !0, next: "expose" },
		{ regex: O, token: [null, "keyword", null], sol: !0, next: "arguments" },
		{ regex: /./, token: null }
	],
	from: [
		{ regex: /\s*$/, token: null, next: "start" },
		{ regex: /(\s*)(#.*)$/, token: [null, "error"], next: "start" },
		{ regex: /(\s*\S+\s+)(as)/i, token: [null, "keyword"], next: "start" },
		{ token: null, next: "start" }
	],
	single: [
		{ regex: /(?:[^\\']|\\.)/, token: "string" },
		{ regex: /'/, token: "string", pop: !0 }
	],
	double: [
		{ regex: /(?:[^\\"]|\\.)/, token: "string" },
		{ regex: /"/, token: "string", pop: !0 }
	],
	array: [
		{ regex: /\]/, token: null, next: "start" },
		{ regex: /"(?:[^\\"]|\\.)*"?/, token: "string" }
	],
	expose: [
		{ regex: /\d+$/, token: "number", next: "start" },
		{ regex: /[^\d]+$/, token: null, next: "start" },
		{ regex: /\d+/, token: "number" },
		{ regex: /[^\d]+/, token: null },
		{ token: null, next: "start" }
	],
	arguments: [
		{ regex: /^\s*#.*$/, sol: !0, token: "comment" },
		{ regex: /"(?:[^\\"]|\\.)*"?$/, token: "string", next: "start" },
		{ regex: /"/, token: "string", push: "double" },
		{ regex: /'(?:[^\\']|\\.)*'?$/, token: "string", next: "start" },
		{ regex: /'/, token: "string", push: "single" },
		{ regex: /[^#"']+[\\`]$/, token: null },
		{ regex: /[^#"']+$/, token: null, next: "start" },
		{ regex: /[^#"']+/, token: null },
		{ token: null, next: "start" }
	],
	languageData: { commentTokens: { line: "#" } }
});
export { D as dockerFile };
//# sourceMappingURL=dockerfile-d67bbd50.js.map
