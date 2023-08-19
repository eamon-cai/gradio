import { C as ge, E as q, L as Pe } from "./index-4910755d.js";
import {
	s as Te,
	t as S,
	p as be,
	L as Ve,
	i as xe,
	f as _e,
	u as ye,
	b as ve,
	v as qe,
	h as z,
	E as G
} from "./index-6d84c79e.js";
import { cssLanguage as F, css as $e } from "./index-3d4c29df.js";
import {
	typescriptLanguage as we,
	jsxLanguage as Ce,
	tsxLanguage as Qe,
	javascriptLanguage as K,
	javascript as Ae
} from "./index-1705961d.js";
import "../lite.js";
import "./Blocks-b77f2878.js";
import "./Button-5b68d65a.js";
import "./BlockLabel-e392131b.js";
import "./Empty-b331fdfe.js";
/* empty css                                                    */ import "./Copy-d120a3d6.js";
import "./Download-604a4bc6.js";
const Xe = 54,
	ke = 1,
	Ye = 55,
	Me = 2,
	Be = 56,
	Ee = 3,
	D = 4,
	Ge = 5,
	y = 6,
	ee = 7,
	te = 8,
	ae = 9,
	le = 10,
	De = 11,
	Re = 12,
	Ze = 13,
	w = 57,
	Ne = 14,
	R = 58,
	We = 20,
	He = 22,
	re = 23,
	Ie = 24,
	k = 26,
	ne = 27,
	Ue = 28,
	je = 31,
	Je = 34,
	se = 36,
	Le = 37,
	ze = 0,
	Fe = 1,
	Ke = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		frame: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
		menuitem: !0
	},
	et = {
		dd: !0,
		li: !0,
		optgroup: !0,
		option: !0,
		p: !0,
		rp: !0,
		rt: !0,
		tbody: !0,
		td: !0,
		tfoot: !0,
		th: !0,
		tr: !0
	},
	Z = {
		dd: { dd: !0, dt: !0 },
		dt: { dd: !0, dt: !0 },
		li: { li: !0 },
		option: { option: !0, optgroup: !0 },
		optgroup: { optgroup: !0 },
		p: {
			address: !0,
			article: !0,
			aside: !0,
			blockquote: !0,
			dir: !0,
			div: !0,
			dl: !0,
			fieldset: !0,
			footer: !0,
			form: !0,
			h1: !0,
			h2: !0,
			h3: !0,
			h4: !0,
			h5: !0,
			h6: !0,
			header: !0,
			hgroup: !0,
			hr: !0,
			menu: !0,
			nav: !0,
			ol: !0,
			p: !0,
			pre: !0,
			section: !0,
			table: !0,
			ul: !0
		},
		rp: { rp: !0, rt: !0 },
		rt: { rp: !0, rt: !0 },
		tbody: { tbody: !0, tfoot: !0 },
		td: { td: !0, th: !0 },
		tfoot: { tbody: !0 },
		th: { td: !0, th: !0 },
		thead: { tbody: !0, tfoot: !0 },
		tr: { tr: !0 }
	};
function tt(e) {
	return (
		e == 45 ||
		e == 46 ||
		e == 58 ||
		(e >= 65 && e <= 90) ||
		e == 95 ||
		(e >= 97 && e <= 122) ||
		e >= 161
	);
}
function oe(e) {
	return e == 9 || e == 10 || e == 13 || e == 32;
}
let N = null,
	W = null,
	H = 0;
function Y(e, t) {
	let l = e.pos + t;
	if (H == l && W == e) return N;
	let a = e.peek(t);
	for (; oe(a); ) a = e.peek(++t);
	let r = "";
	for (; tt(a); ) (r += String.fromCharCode(a)), (a = e.peek(++t));
	return (
		(W = e),
		(H = l),
		(N = r ? r.toLowerCase() : a == at || a == lt ? void 0 : null)
	);
}
const Oe = 60,
	v = 62,
	M = 47,
	at = 63,
	lt = 33,
	rt = 45;
function I(e, t) {
	(this.name = e), (this.parent = t), (this.hash = t ? t.hash : 0);
	for (let l = 0; l < e.length; l++)
		this.hash += (this.hash << 4) + e.charCodeAt(l) + (e.charCodeAt(l) << 8);
}
const nt = [y, le, ee, te, ae],
	st = new ge({
		start: null,
		shift(e, t, l, a) {
			return nt.indexOf(t) > -1 ? new I(Y(a, 1) || "", e) : e;
		},
		reduce(e, t) {
			return t == We && e ? e.parent : e;
		},
		reuse(e, t, l, a) {
			let r = t.type.id;
			return r == y || r == se ? new I(Y(a, 1) || "", e) : e;
		},
		hash(e) {
			return e ? e.hash : 0;
		},
		strict: !1
	}),
	ot = new q(
		(e, t) => {
			if (e.next != Oe) {
				e.next < 0 && t.context && e.acceptToken(w);
				return;
			}
			e.advance();
			let l = e.next == M;
			l && e.advance();
			let a = Y(e, 0);
			if (a === void 0) return;
			if (!a) return e.acceptToken(l ? Ne : y);
			let r = t.context ? t.context.name : null;
			if (l) {
				if (a == r) return e.acceptToken(De);
				if (r && et[r]) return e.acceptToken(w, -2);
				if (t.dialectEnabled(ze)) return e.acceptToken(Re);
				for (let n = t.context; n; n = n.parent) if (n.name == a) return;
				e.acceptToken(Ze);
			} else {
				if (a == "script") return e.acceptToken(ee);
				if (a == "style") return e.acceptToken(te);
				if (a == "textarea") return e.acceptToken(ae);
				if (Ke.hasOwnProperty(a)) return e.acceptToken(le);
				r && Z[r] && Z[r][a] ? e.acceptToken(w, -1) : e.acceptToken(y);
			}
		},
		{ contextual: !0 }
	),
	Ot = new q((e) => {
		for (let t = 0, l = 0; ; l++) {
			if (e.next < 0) {
				l && e.acceptToken(R);
				break;
			}
			if (e.next == rt) t++;
			else if (e.next == v && t >= 2) {
				l > 3 && e.acceptToken(R, -2);
				break;
			} else t = 0;
			e.advance();
		}
	});
function it(e) {
	for (; e; e = e.parent) if (e.name == "svg" || e.name == "math") return !0;
	return !1;
}
const ut = new q((e, t) => {
	if (e.next == M && e.peek(1) == v) {
		let l = t.dialectEnabled(Fe) || it(t.context);
		e.acceptToken(l ? Ge : D, 2);
	} else e.next == v && e.acceptToken(D, 1);
});
function B(e, t, l) {
	let a = 2 + e.length;
	return new q((r) => {
		for (let n = 0, o = 0, O = 0; ; O++) {
			if (r.next < 0) {
				O && r.acceptToken(t);
				break;
			}
			if (
				(n == 0 && r.next == Oe) ||
				(n == 1 && r.next == M) ||
				(n >= 2 && n < a && r.next == e.charCodeAt(n - 2))
			)
				n++, o++;
			else if ((n == 2 || n == a) && oe(r.next)) o++;
			else if (n == a && r.next == v) {
				O > o ? r.acceptToken(t, -o) : r.acceptToken(l, -(o - 2));
				break;
			} else if ((r.next == 10 || r.next == 13) && O) {
				r.acceptToken(t, 1);
				break;
			} else n = o = 0;
			r.advance();
		}
	});
}
const pt = B("script", Xe, ke),
	ct = B("style", Ye, Me),
	dt = B("textarea", Be, Ee),
	ft = Te({
		"Text RawText": S.content,
		"StartTag StartCloseTag SelfClosingEndTag EndTag": S.angleBracket,
		TagName: S.tagName,
		"MismatchedCloseTag/TagName": [S.tagName, S.invalid],
		AttributeName: S.attributeName,
		"AttributeValue UnquotedAttributeValue": S.attributeValue,
		Is: S.definitionOperator,
		"EntityReference CharacterReference": S.character,
		Comment: S.blockComment,
		ProcessingInst: S.processingInstruction,
		DoctypeDecl: S.documentMeta
	}),
	ht = Pe.deserialize({
		version: 14,
		states:
			",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
		stateData:
			"+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
		goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
		nodeNames:
			"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
		maxTerm: 67,
		context: st,
		nodeProps: [
			[
				"closedBy",
				-10,
				1,
				2,
				3,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				"EndTag",
				6,
				"EndTag SelfClosingEndTag",
				-4,
				21,
				30,
				33,
				36,
				"CloseTag"
			],
			[
				"openedBy",
				4,
				"StartTag StartCloseTag",
				5,
				"StartTag",
				-4,
				29,
				32,
				35,
				37,
				"OpenTag"
			],
			[
				"group",
				-9,
				14,
				17,
				18,
				19,
				20,
				39,
				40,
				41,
				42,
				"Entity",
				16,
				"Entity TextContent",
				-3,
				28,
				31,
				34,
				"TextContent Entity"
			]
		],
		propSources: [ft],
		skippedNodes: [0],
		repeatNodeCount: 9,
		tokenData:
			"#%g!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs4ysv-_vw5iwxJ^x}-_}!OKP!O!P-_!P!Q$q!Q![-_![!]!!O!]!^-_!^!_!&W!_!`#$o!`!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U-_4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/echSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0uXhSqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0pS1eP;=`<%l0p[1kP;=`<%l/^!U1wbhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!U3SP;=`<%l1n!V3bchS`P!a`!cpOq&Xqr3Vrs&}sv3Vvw0pwx(tx!P3V!P!Q&X!Q!^3V!^!_1n!_!a&X!a#s3V#s$f&X$f;'S3V;'S;=`4m<%l?Ah3V?Ah?BY&X?BY?Mn3V?MnO&X!V4pP;=`<%l3V!_4vP;=`<%l-_!Z5SV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_5rjhSkWc!ROX7dXZ8qZ[7d[^8q^p7dqr:crs8qst@Ttw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^/^!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!Z7ibkWOX7dXZ8qZ[7d[^8q^p7dqr7drs8qst+Ptw7dwx8qx!]7d!]!^9f!^!a8q!a#S7d#S#T8q#T;'S7d;'S;=`:]<%lO7d!R8tVOp8qqs8qt!]8q!]!^9Z!^;'S8q;'S;=`9`<%lO8q!R9`Oa!R!R9cP;=`<%l8q!Z9mYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z:`P;=`<%l7d!_:jjhSkWOX7dXZ8qZ[7d[^8q^p7dqr:crs8qst/^tw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^<[!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!_<echSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V=udhSOp8qqr=prs8qst0ptw=pwx8qx!P=p!P!Q8q!Q!]=p!]!^?T!^!_=p!_!a8q!a#s=p#s$f8q$f;'S=p;'S;=`?w<%l?Ah=p?Ah?BY8q?BY?Mn=p?MnO8q!V?[XhSa!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!V?zP;=`<%l=p!_@QP;=`<%l:c!_@[ihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^/^!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!ZBOakWOXAyXZCTZ[Ay[^CT^pAyqrAyrsCTswAywxCTx!]Ay!]!^Cu!^!aCT!a#SAy#S#TCT#T;'SAy;'S;=`Dl<%lOAy!RCWUOpCTq!]CT!]!^Cj!^;'SCT;'S;=`Co<%lOCT!RCoOb!R!RCrP;=`<%lCT!ZC|YkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZDoP;=`<%lAy!_DyihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^Fh!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!_FqchSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VHRchSOpCTqrG|rsCTswG|wxCTx!PG|!P!QCT!Q!]G|!]!^I^!^!_G|!_!aCT!a#sG|#s$fCT$f;'SG|;'S;=`JQ<%l?AhG|?Ah?BYCT?BY?MnG|?MnOCT!VIeXhSb!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!VJTP;=`<%lG|!_JZP;=`<%lDr!ZJgW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aK^lhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMU!O!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aMckhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!`&X!`!a! W!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!T! cX`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!!_!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!O!!O!O!P!!O!P!Q$q!Q![!!O![!]!!O!]!^-_!^!_1n!_!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f$}-_$}%O!!O%O%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U!!O4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Je-_$Je$Jg!!O$Jg$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!a!&TP;=`<%l!!O!V!&achS!a`!cpOq*Vqr!'lrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!b!Ey!b#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!'uhhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!)a!O!P1n!P!Q*V!Q!_1n!_!a*V!a!f1n!f!g!,]!g#W1n#W#X!<y#X#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!)jdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!*x!O!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!+TbhS!a`!cp!dPOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!,fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!q1n!q!r!-t!r#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!-}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!e1n!e!f!/]!f#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!/fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!v1n!v!w!0t!w#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!0}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!{1n!{!|!2]!|#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!2fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!r1n!r!s!3t!s#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!3}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!g1n!g!h!5]!h#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!5fchS!a`!cpOq!6qqr!5]rs!7hsv!5]vw!;`wx!9[x!P!5]!P!Q!6q!Q!_!5]!_!`!6q!`!a!:j!a#s!5]#s$f!6q$f;'S!5];'S;=`!<s<%l?Ah!5]?Ah?BY!6q?BY?Mn!5]?MnO!6q!R!6xY!a`!cpOr!6qrs!7hsv!6qvw!8Swx!9[x!`!6q!`!a!:j!a;'S!6q;'S;=`!;Y<%lO!6qq!7mV!cpOv!7hvx!8Sx!`!7h!`!a!8q!a;'S!7h;'S;=`!9U<%lO!7hP!8VTO!`!8S!`!a!8f!a;'S!8S;'S;=`!8k<%lO!8SP!8kO{PP!8nP;=`<%l!8Sq!8xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!9XP;=`<%l!7ha!9aX!a`Or!9[rs!8Ssv!9[vw!8Sw!`!9[!`!a!9|!a;'S!9[;'S;=`!:d<%lO!9[a!:TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!:gP;=`<%l!9[!R!:sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;]P;=`<%l!6qT!;ebhSOq!8Sqr!;`rs!8Ssw!;`wx!8Sx!P!;`!P!Q!8S!Q!_!;`!_!`!8S!`!a!8f!a#s!;`#s$f!8S$f;'S!;`;'S;=`!<m<%l?Ah!;`?Ah?BY!8S?BY?Mn!;`?MnO!8ST!<pP;=`<%l!;`!V!<vP;=`<%l!5]!V!=SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#c1n#c#d!>b#d#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!>kdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#V1n#V#W!?y#W#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!@SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#h1n#h#i!Ab#i#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!AkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#m1n#m#n!By#n#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!CSdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#d1n#d#e!Db#e#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!DkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#X1n#X#Y!5]#Y#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!FSchS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!a!G_!a!b##T!b#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!R!GfY!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!a!G_!a!b!Lv!b;'S!G_;'S;=`!N]<%lO!G_q!HZV!cpOv!HUvx!Hpx!a!HU!a!b!Iq!b;'S!HU;'S;=`!Jp<%lO!HUP!HsTO!a!Hp!a!b!IS!b;'S!Hp;'S;=`!Ik<%lO!HpP!IVTO!`!Hp!`!a!If!a;'S!Hp;'S;=`!Ik<%lO!HpP!IkOxPP!InP;=`<%l!Hpq!IvV!cpOv!HUvx!Hpx!`!HU!`!a!J]!a;'S!HU;'S;=`!Jp<%lO!HUq!JdS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!JsP;=`<%l!HUa!J{X!a`Or!Jvrs!Hpsv!Jvvw!Hpw!a!Jv!a!b!Kh!b;'S!Jv;'S;=`!Lp<%lO!Jva!KmX!a`Or!Jvrs!Hpsv!Jvvw!Hpw!`!Jv!`!a!LY!a;'S!Jv;'S;=`!Lp<%lO!Jva!LaT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!LsP;=`<%l!Jv!R!L}Y!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!`!G_!`!a!Mm!a;'S!G_;'S;=`!N]<%lO!G_!R!MvV!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!N`P;=`<%l!G_T!NhbhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!a!Hp!a!b# p!b#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT# ubhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!`!Hp!`!a!If!a#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT##QP;=`<%l!Nc!V##^chS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!`!G_!`!a!Mm!a#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!V#$lP;=`<%l!Ey!V#$zXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
		tokenizers: [pt, ct, dt, ut, ot, Ot, 0, 1, 2, 3, 4, 5],
		topRules: { Document: [0, 15] },
		dialects: { noMatch: 0, selfClosing: 485 },
		tokenPrec: 487
	});
function ie(e, t) {
	let l = Object.create(null);
	for (let a of e.getChildren(re)) {
		let r = a.getChild(Ie),
			n = a.getChild(k) || a.getChild(ne);
		r &&
			(l[t.read(r.from, r.to)] = n
				? n.type.id == k
					? t.read(n.from + 1, n.to - 1)
					: t.read(n.from, n.to)
				: "");
	}
	return l;
}
function U(e, t) {
	let l = e.getChild(He);
	return l ? t.read(l.from, l.to) : " ";
}
function C(e, t, l) {
	let a;
	for (let r of l)
		if (!r.attrs || r.attrs(a || (a = ie(e.node.parent.firstChild, t))))
			return { parser: r.parser };
	return null;
}
function ue(e = [], t = []) {
	let l = [],
		a = [],
		r = [],
		n = [];
	for (let O of e)
		(O.tag == "script"
			? l
			: O.tag == "style"
			? a
			: O.tag == "textarea"
			? r
			: n
		).push(O);
	let o = t.length ? Object.create(null) : null;
	for (let O of t) (o[O.name] || (o[O.name] = [])).push(O);
	return be((O, p) => {
		let h = O.type.id;
		if (h == Ue) return C(O, p, l);
		if (h == je) return C(O, p, a);
		if (h == Je) return C(O, p, r);
		if (h == se && n.length) {
			let i = O.node,
				u = U(i, p),
				c;
			for (let d of n)
				if (d.tag == u && (!d.attrs || d.attrs(c || (c = ie(i, p))))) {
					let f = i.parent.lastChild;
					return {
						parser: d.parser,
						overlay: [
							{ from: O.to, to: f.type.id == Le ? f.from : i.parent.to }
						]
					};
				}
		}
		if (o && h == re) {
			let i = O.node,
				u;
			if ((u = i.firstChild)) {
				let c = o[p.read(u.from, u.to)];
				if (c)
					for (let d of c) {
						if (d.tagName && d.tagName != U(i.parent, p)) continue;
						let f = i.lastChild;
						if (f.type.id == k) {
							let P = f.from + 1,
								T = f.lastChild,
								x = f.to - (T && T.isError ? 0 : 1);
							if (x > P)
								return { parser: d.parser, overlay: [{ from: P, to: x }] };
						} else if (f.type.id == ne)
							return {
								parser: d.parser,
								overlay: [{ from: f.from, to: f.to }]
							};
					}
			}
		}
		return null;
	});
}
const b = ["_blank", "_self", "_top", "_parent"],
	Q = ["ascii", "utf-8", "utf-16", "latin1", "latin1"],
	A = ["get", "post", "put", "delete"],
	X = [
		"application/x-www-form-urlencoded",
		"multipart/form-data",
		"text/plain"
	],
	m = ["true", "false"],
	s = {},
	mt = {
		a: {
			attrs: {
				href: null,
				ping: null,
				type: null,
				media: null,
				target: b,
				hreflang: null
			}
		},
		abbr: s,
		address: s,
		area: {
			attrs: {
				alt: null,
				coords: null,
				href: null,
				target: null,
				ping: null,
				media: null,
				hreflang: null,
				type: null,
				shape: ["default", "rect", "circle", "poly"]
			}
		},
		article: s,
		aside: s,
		audio: {
			attrs: {
				src: null,
				mediagroup: null,
				crossorigin: ["anonymous", "use-credentials"],
				preload: ["none", "metadata", "auto"],
				autoplay: ["autoplay"],
				loop: ["loop"],
				controls: ["controls"]
			}
		},
		b: s,
		base: { attrs: { href: null, target: b } },
		bdi: s,
		bdo: s,
		blockquote: { attrs: { cite: null } },
		body: s,
		br: s,
		button: {
			attrs: {
				form: null,
				formaction: null,
				name: null,
				value: null,
				autofocus: ["autofocus"],
				disabled: ["autofocus"],
				formenctype: X,
				formmethod: A,
				formnovalidate: ["novalidate"],
				formtarget: b,
				type: ["submit", "reset", "button"]
			}
		},
		canvas: { attrs: { width: null, height: null } },
		caption: s,
		center: s,
		cite: s,
		code: s,
		col: { attrs: { span: null } },
		colgroup: { attrs: { span: null } },
		command: {
			attrs: {
				type: ["command", "checkbox", "radio"],
				label: null,
				icon: null,
				radiogroup: null,
				command: null,
				title: null,
				disabled: ["disabled"],
				checked: ["checked"]
			}
		},
		data: { attrs: { value: null } },
		datagrid: { attrs: { disabled: ["disabled"], multiple: ["multiple"] } },
		datalist: { attrs: { data: null } },
		dd: s,
		del: { attrs: { cite: null, datetime: null } },
		details: { attrs: { open: ["open"] } },
		dfn: s,
		div: s,
		dl: s,
		dt: s,
		em: s,
		embed: { attrs: { src: null, type: null, width: null, height: null } },
		eventsource: { attrs: { src: null } },
		fieldset: { attrs: { disabled: ["disabled"], form: null, name: null } },
		figcaption: s,
		figure: s,
		footer: s,
		form: {
			attrs: {
				action: null,
				name: null,
				"accept-charset": Q,
				autocomplete: ["on", "off"],
				enctype: X,
				method: A,
				novalidate: ["novalidate"],
				target: b
			}
		},
		h1: s,
		h2: s,
		h3: s,
		h4: s,
		h5: s,
		h6: s,
		head: {
			children: [
				"title",
				"base",
				"link",
				"style",
				"meta",
				"script",
				"noscript",
				"command"
			]
		},
		header: s,
		hgroup: s,
		hr: s,
		html: { attrs: { manifest: null } },
		i: s,
		iframe: {
			attrs: {
				src: null,
				srcdoc: null,
				name: null,
				width: null,
				height: null,
				sandbox: [
					"allow-top-navigation",
					"allow-same-origin",
					"allow-forms",
					"allow-scripts"
				],
				seamless: ["seamless"]
			}
		},
		img: {
			attrs: {
				alt: null,
				src: null,
				ismap: null,
				usemap: null,
				width: null,
				height: null,
				crossorigin: ["anonymous", "use-credentials"]
			}
		},
		input: {
			attrs: {
				alt: null,
				dirname: null,
				form: null,
				formaction: null,
				height: null,
				list: null,
				max: null,
				maxlength: null,
				min: null,
				name: null,
				pattern: null,
				placeholder: null,
				size: null,
				src: null,
				step: null,
				value: null,
				width: null,
				accept: ["audio/*", "video/*", "image/*"],
				autocomplete: ["on", "off"],
				autofocus: ["autofocus"],
				checked: ["checked"],
				disabled: ["disabled"],
				formenctype: X,
				formmethod: A,
				formnovalidate: ["novalidate"],
				formtarget: b,
				multiple: ["multiple"],
				readonly: ["readonly"],
				required: ["required"],
				type: [
					"hidden",
					"text",
					"search",
					"tel",
					"url",
					"email",
					"password",
					"datetime",
					"date",
					"month",
					"week",
					"time",
					"datetime-local",
					"number",
					"range",
					"color",
					"checkbox",
					"radio",
					"file",
					"submit",
					"image",
					"reset",
					"button"
				]
			}
		},
		ins: { attrs: { cite: null, datetime: null } },
		kbd: s,
		keygen: {
			attrs: {
				challenge: null,
				form: null,
				name: null,
				autofocus: ["autofocus"],
				disabled: ["disabled"],
				keytype: ["RSA"]
			}
		},
		label: { attrs: { for: null, form: null } },
		legend: s,
		li: { attrs: { value: null } },
		link: {
			attrs: {
				href: null,
				type: null,
				hreflang: null,
				media: null,
				sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
			}
		},
		map: { attrs: { name: null } },
		mark: s,
		menu: { attrs: { label: null, type: ["list", "context", "toolbar"] } },
		meta: {
			attrs: {
				content: null,
				charset: Q,
				name: [
					"viewport",
					"application-name",
					"author",
					"description",
					"generator",
					"keywords"
				],
				"http-equiv": [
					"content-language",
					"content-type",
					"default-style",
					"refresh"
				]
			}
		},
		meter: {
			attrs: {
				value: null,
				min: null,
				low: null,
				high: null,
				max: null,
				optimum: null
			}
		},
		nav: s,
		noscript: s,
		object: {
			attrs: {
				data: null,
				type: null,
				name: null,
				usemap: null,
				form: null,
				width: null,
				height: null,
				typemustmatch: ["typemustmatch"]
			}
		},
		ol: {
			attrs: {
				reversed: ["reversed"],
				start: null,
				type: ["1", "a", "A", "i", "I"]
			},
			children: ["li", "script", "template", "ul", "ol"]
		},
		optgroup: { attrs: { disabled: ["disabled"], label: null } },
		option: {
			attrs: {
				disabled: ["disabled"],
				label: null,
				selected: ["selected"],
				value: null
			}
		},
		output: { attrs: { for: null, form: null, name: null } },
		p: s,
		param: { attrs: { name: null, value: null } },
		pre: s,
		progress: { attrs: { value: null, max: null } },
		q: { attrs: { cite: null } },
		rp: s,
		rt: s,
		ruby: s,
		samp: s,
		script: {
			attrs: {
				type: ["text/javascript"],
				src: null,
				async: ["async"],
				defer: ["defer"],
				charset: Q
			}
		},
		section: s,
		select: {
			attrs: {
				form: null,
				name: null,
				size: null,
				autofocus: ["autofocus"],
				disabled: ["disabled"],
				multiple: ["multiple"]
			}
		},
		slot: { attrs: { name: null } },
		small: s,
		source: { attrs: { src: null, type: null, media: null } },
		span: s,
		strong: s,
		style: { attrs: { type: ["text/css"], media: null, scoped: null } },
		sub: s,
		summary: s,
		sup: s,
		table: s,
		tbody: s,
		td: { attrs: { colspan: null, rowspan: null, headers: null } },
		template: s,
		textarea: {
			attrs: {
				dirname: null,
				form: null,
				maxlength: null,
				name: null,
				placeholder: null,
				rows: null,
				cols: null,
				autofocus: ["autofocus"],
				disabled: ["disabled"],
				readonly: ["readonly"],
				required: ["required"],
				wrap: ["soft", "hard"]
			}
		},
		tfoot: s,
		th: {
			attrs: {
				colspan: null,
				rowspan: null,
				headers: null,
				scope: ["row", "col", "rowgroup", "colgroup"]
			}
		},
		thead: s,
		time: { attrs: { datetime: null } },
		title: s,
		tr: s,
		track: {
			attrs: {
				src: null,
				label: null,
				default: null,
				kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
				srclang: null
			}
		},
		ul: { children: ["li", "script", "template", "ul", "ol"] },
		var: s,
		video: {
			attrs: {
				src: null,
				poster: null,
				width: null,
				height: null,
				crossorigin: ["anonymous", "use-credentials"],
				preload: ["auto", "metadata", "none"],
				autoplay: ["autoplay"],
				mediagroup: ["movie"],
				muted: ["muted"],
				controls: ["controls"]
			}
		},
		wbr: s
	},
	pe = {
		accesskey: null,
		class: null,
		contenteditable: m,
		contextmenu: null,
		dir: ["ltr", "rtl", "auto"],
		draggable: ["true", "false", "auto"],
		dropzone: ["copy", "move", "link", "string:", "file:"],
		hidden: ["hidden"],
		id: null,
		inert: ["inert"],
		itemid: null,
		itemprop: null,
		itemref: null,
		itemscope: ["itemscope"],
		itemtype: null,
		lang: [
			"ar",
			"bn",
			"de",
			"en-GB",
			"en-US",
			"es",
			"fr",
			"hi",
			"id",
			"ja",
			"pa",
			"pt",
			"ru",
			"tr",
			"zh"
		],
		spellcheck: m,
		autocorrect: m,
		autocapitalize: m,
		style: null,
		tabindex: null,
		title: null,
		translate: ["yes", "no"],
		rel: [
			"stylesheet",
			"alternate",
			"author",
			"bookmark",
			"help",
			"license",
			"next",
			"nofollow",
			"noreferrer",
			"prefetch",
			"prev",
			"search",
			"tag"
		],
		role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(
			" "
		),
		"aria-activedescendant": null,
		"aria-atomic": m,
		"aria-autocomplete": ["inline", "list", "both", "none"],
		"aria-busy": m,
		"aria-checked": ["true", "false", "mixed", "undefined"],
		"aria-controls": null,
		"aria-describedby": null,
		"aria-disabled": m,
		"aria-dropeffect": null,
		"aria-expanded": ["true", "false", "undefined"],
		"aria-flowto": null,
		"aria-grabbed": ["true", "false", "undefined"],
		"aria-haspopup": m,
		"aria-hidden": m,
		"aria-invalid": ["true", "false", "grammar", "spelling"],
		"aria-label": null,
		"aria-labelledby": null,
		"aria-level": null,
		"aria-live": ["off", "polite", "assertive"],
		"aria-multiline": m,
		"aria-multiselectable": m,
		"aria-owns": null,
		"aria-posinset": null,
		"aria-pressed": ["true", "false", "mixed", "undefined"],
		"aria-readonly": m,
		"aria-relevant": null,
		"aria-required": m,
		"aria-selected": ["true", "false", "undefined"],
		"aria-setsize": null,
		"aria-sort": ["ascending", "descending", "none", "other"],
		"aria-valuemax": null,
		"aria-valuemin": null,
		"aria-valuenow": null,
		"aria-valuetext": null
	},
	ce =
		"beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload"
			.split(" ")
			.map((e) => "on" + e);
for (let e of ce) pe[e] = null;
class V {
	constructor(t, l) {
		(this.tags = Object.assign(Object.assign({}, mt), t)),
			(this.globalAttrs = Object.assign(Object.assign({}, pe), l)),
			(this.allTags = Object.keys(this.tags)),
			(this.globalAttrNames = Object.keys(this.globalAttrs));
	}
}
V.default = new V();
function g(e, t, l = e.length) {
	if (!t) return "";
	let a = t.firstChild,
		r = a && a.getChild("TagName");
	return r ? e.sliceString(r.from, Math.min(r.to, l)) : "";
}
function $(e, t = !1) {
	for (let l = e.parent; l; l = l.parent)
		if (l.name == "Element")
			if (t) t = !1;
			else return l;
	return null;
}
function de(e, t, l) {
	let a = l.tags[g(e, $(t, !0))];
	return a?.children || l.allTags;
}
function E(e, t) {
	let l = [];
	for (let a = t; (a = $(a)); ) {
		let r = g(e, a);
		if (r && a.lastChild.name == "CloseTag") break;
		r &&
			l.indexOf(r) < 0 &&
			(t.name == "EndTag" || t.from >= a.firstChild.to) &&
			l.push(r);
	}
	return l;
}
const fe = /^[:\-\.\w\u00b7-\uffff]*$/;
function j(e, t, l, a, r) {
	let n = /\s*>/.test(e.sliceDoc(r, r + 5)) ? "" : ">";
	return {
		from: a,
		to: r,
		options: de(e.doc, l, t)
			.map((o) => ({ label: o, type: "type" }))
			.concat(
				E(e.doc, l).map((o, O) => ({
					label: "/" + o,
					apply: "/" + o + n,
					type: "type",
					boost: 99 - O
				}))
			),
		validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
	};
}
function J(e, t, l, a) {
	let r = /\s*>/.test(e.sliceDoc(a, a + 5)) ? "" : ">";
	return {
		from: l,
		to: a,
		options: E(e.doc, t).map((n, o) => ({
			label: n,
			apply: n + r,
			type: "type",
			boost: 99 - o
		})),
		validFor: fe
	};
}
function St(e, t, l, a) {
	let r = [],
		n = 0;
	for (let o of de(e.doc, l, t)) r.push({ label: "<" + o, type: "type" });
	for (let o of E(e.doc, l))
		r.push({ label: "</" + o + ">", type: "type", boost: 99 - n++ });
	return {
		from: a,
		to: a,
		options: r,
		validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
	};
}
function gt(e, t, l, a, r) {
	let n = $(l),
		o = n ? t.tags[g(e.doc, n)] : null,
		O = o && o.attrs ? Object.keys(o.attrs) : [],
		p =
			o && o.globalAttrs === !1
				? O
				: O.length
				? O.concat(t.globalAttrNames)
				: t.globalAttrNames;
	return {
		from: a,
		to: r,
		options: p.map((h) => ({ label: h, type: "property" })),
		validFor: fe
	};
}
function Pt(e, t, l, a, r) {
	var n;
	let o =
			(n = l.parent) === null || n === void 0
				? void 0
				: n.getChild("AttributeName"),
		O = [],
		p;
	if (o) {
		let h = e.sliceDoc(o.from, o.to),
			i = t.globalAttrs[h];
		if (!i) {
			let u = $(l),
				c = u ? t.tags[g(e.doc, u)] : null;
			i = c?.attrs && c.attrs[h];
		}
		if (i) {
			let u = e.sliceDoc(a, r).toLowerCase(),
				c = '"',
				d = '"';
			/^['"]/.test(u)
				? ((p = u[0] == '"' ? /^[^"]*$/ : /^[^']*$/),
				  (c = ""),
				  (d = e.sliceDoc(r, r + 1) == u[0] ? "" : u[0]),
				  (u = u.slice(1)),
				  a++)
				: (p = /^[^\s<>='"]*$/);
			for (let f of i) O.push({ label: f, apply: c + f + d, type: "constant" });
		}
	}
	return { from: a, to: r, options: O, validFor: p };
}
function he(e, t) {
	let { state: l, pos: a } = t,
		r = z(l).resolveInner(a),
		n = r.resolve(a, -1);
	for (let o = a, O; r == n && (O = n.childBefore(o)); ) {
		let p = O.lastChild;
		if (!p || !p.type.isError || p.from < p.to) break;
		(r = n = O), (o = p.from);
	}
	return n.name == "TagName"
		? n.parent && /CloseTag$/.test(n.parent.name)
			? J(l, n, n.from, a)
			: j(l, e, n, n.from, a)
		: n.name == "StartTag"
		? j(l, e, n, a, a)
		: n.name == "StartCloseTag" || n.name == "IncompleteCloseTag"
		? J(l, n, a, a)
		: (t.explicit && (n.name == "OpenTag" || n.name == "SelfClosingTag")) ||
		  n.name == "AttributeName"
		? gt(l, e, n, n.name == "AttributeName" ? n.from : a, a)
		: n.name == "Is" ||
		  n.name == "AttributeValue" ||
		  n.name == "UnquotedAttributeValue"
		? Pt(l, e, n, n.name == "Is" ? a : n.from, a)
		: t.explicit &&
		  (r.name == "Element" || r.name == "Text" || r.name == "Document")
		? St(l, e, n, a)
		: null;
}
function kt(e) {
	return he(V.default, e);
}
function Tt(e) {
	let { extraTags: t, extraGlobalAttributes: l } = e,
		a = l || t ? new V(t, l) : V.default;
	return (r) => he(a, r);
}
const me = [
		{
			tag: "script",
			attrs: (e) => e.type == "text/typescript" || e.lang == "ts",
			parser: we.parser
		},
		{
			tag: "script",
			attrs: (e) => e.type == "text/babel" || e.type == "text/jsx",
			parser: Ce.parser
		},
		{
			tag: "script",
			attrs: (e) => e.type == "text/typescript-jsx",
			parser: Qe.parser
		},
		{
			tag: "script",
			attrs(e) {
				return (
					!e.type ||
					/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(
						e.type
					)
				);
			},
			parser: K.parser
		},
		{
			tag: "style",
			attrs(e) {
				return (
					(!e.lang || e.lang == "css") &&
					(!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))
				);
			},
			parser: F.parser
		}
	],
	Se = [
		{ name: "style", parser: F.parser.configure({ top: "Styles" }) }
	].concat(ce.map((e) => ({ name: e, parser: K.parser }))),
	_ = Ve.define({
		name: "html",
		parser: ht.configure({
			props: [
				xe.add({
					Element(e) {
						let t = /^(\s*)(<\/)?/.exec(e.textAfter);
						return e.node.to <= e.pos + t[0].length
							? e.continue()
							: e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
					},
					"OpenTag CloseTag SelfClosingTag"(e) {
						return e.column(e.node.from) + e.unit;
					},
					Document(e) {
						if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to)
							return e.continue();
						let t = null,
							l;
						for (let a = e.node; ; ) {
							let r = a.lastChild;
							if (!r || r.name != "Element" || r.to != a.to) break;
							t = a = r;
						}
						return t &&
							!(
								(l = t.lastChild) &&
								(l.name == "CloseTag" || l.name == "SelfClosingTag")
							)
							? e.lineIndent(t.from) + e.unit
							: null;
					}
				}),
				_e.add({
					Element(e) {
						let t = e.firstChild,
							l = e.lastChild;
						return !t || t.name != "OpenTag"
							? null
							: { from: t.to, to: l.name == "CloseTag" ? l.from : e.to };
					}
				}),
				ye.add({ "OpenTag CloseTag": (e) => e.getChild("TagName") })
			],
			wrap: ue(me, Se)
		}),
		languageData: {
			commentTokens: { block: { open: "<!--", close: "-->" } },
			indentOnInput: /^\s*<\/\w+\W$/,
			wordChars: "-._"
		}
	});
function Yt(e = {}) {
	let t = "",
		l;
	e.matchClosingTags === !1 && (t = "noMatch"),
		e.selfClosingTags === !0 && (t = (t ? t + " " : "") + "selfClosing"),
		((e.nestedLanguages && e.nestedLanguages.length) ||
			(e.nestedAttributes && e.nestedAttributes.length)) &&
			(l = ue(
				(e.nestedLanguages || []).concat(me),
				(e.nestedAttributes || []).concat(Se)
			));
	let a = l || t ? _.configure({ dialect: t, wrap: l }) : _;
	return new ve(a, [
		_.data.of({ autocomplete: Tt(e) }),
		e.autoCloseTags !== !1 ? bt : [],
		Ae().support,
		$e().support
	]);
}
const L = new Set(
		"area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(
			" "
		)
	),
	bt = qe.inputHandler.of((e, t, l, a) => {
		if (
			e.composing ||
			e.state.readOnly ||
			t != l ||
			(a != ">" && a != "/") ||
			!_.isActiveAt(e.state, t, -1)
		)
			return !1;
		let { state: r } = e,
			n = r.changeByRange((o) => {
				var O, p, h;
				let { head: i } = o,
					u = z(r).resolveInner(i, -1),
					c;
				if (
					((u.name == "TagName" || u.name == "StartTag") && (u = u.parent),
					a == ">" && u.name == "OpenTag")
				) {
					if (
						((p =
							(O = u.parent) === null || O === void 0
								? void 0
								: O.lastChild) === null || p === void 0
							? void 0
							: p.name) != "CloseTag" &&
						(c = g(r.doc, u.parent, i)) &&
						!L.has(c)
					) {
						let d = e.state.doc.sliceString(i, i + 1) === ">",
							f = `${d ? "" : ">"}</${c}>`;
						return {
							range: G.cursor(i + 1),
							changes: { from: i + (d ? 1 : 0), insert: f }
						};
					}
				} else if (a == "/" && u.name == "OpenTag") {
					let d = u.parent,
						f = d?.parent;
					if (
						d.from == i - 1 &&
						((h = f.lastChild) === null || h === void 0 ? void 0 : h.name) !=
							"CloseTag" &&
						(c = g(r.doc, f, i)) &&
						!L.has(c)
					) {
						let P = e.state.doc.sliceString(i, i + 1) === ">",
							T = `/${c}${P ? "" : ">"}`,
							x = i + T.length + (P ? 1 : 0);
						return { range: G.cursor(x), changes: { from: i, insert: T } };
					}
				}
				return { range: o };
			});
		return n.changes.empty
			? !1
			: (e.dispatch(n, { userEvent: "input.type", scrollIntoView: !0 }), !0);
	});
export {
	bt as autoCloseTags,
	Yt as html,
	kt as htmlCompletionSource,
	Tt as htmlCompletionSourceWith,
	_ as htmlLanguage
};
//# sourceMappingURL=index-66490713.js.map
