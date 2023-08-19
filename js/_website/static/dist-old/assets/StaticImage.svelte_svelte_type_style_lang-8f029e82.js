import {
	S as bt,
	i as wt,
	s as yt,
	B as P,
	C as p,
	g as U,
	E as Z,
	F as I,
	q as j,
	G as ct,
	H as je,
	M as re,
	p as W,
	l as jt,
	t as G,
	o as Vt,
	r as Ve,
	u as Ge,
	J as qe,
	a1 as Fe,
	b as Ke,
	e as Gt,
	m as qt,
	n as Ft,
	f as Qe
} from "../lite.js";
/* empty css                                                    */ function Ze(
	a
) {
	let t, e, i;
	return {
		c() {
			(t = P("svg")),
				(e = P("path")),
				(i = P("circle")),
				p(
					e,
					"d",
					"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
				),
				p(i, "cx", "12"),
				p(i, "cy", "13"),
				p(i, "r", "4"),
				p(t, "xmlns", "http://www.w3.org/2000/svg"),
				p(t, "width", "100%"),
				p(t, "height", "100%"),
				p(t, "viewBox", "0 0 24 24"),
				p(t, "fill", "none"),
				p(t, "stroke", "currentColor"),
				p(t, "stroke-width", "1.5"),
				p(t, "stroke-linecap", "round"),
				p(t, "stroke-linejoin", "round"),
				p(t, "class", "feather feather-camera");
		},
		m(n, r) {
			U(n, t, r), Z(t, e), Z(t, i);
		},
		p: I,
		i: I,
		o: I,
		d(n) {
			n && j(t);
		}
	};
}
class Je extends bt {
	constructor(t) {
		super(), wt(this, t, null, Ze, yt, {});
	}
}
function $e(a) {
	let t, e;
	return {
		c() {
			(t = P("svg")),
				(e = P("circle")),
				p(e, "cx", "12"),
				p(e, "cy", "12"),
				p(e, "r", "10"),
				p(t, "xmlns", "http://www.w3.org/2000/svg"),
				p(t, "width", "100%"),
				p(t, "height", "100%"),
				p(t, "viewBox", "0 0 24 24"),
				p(t, "fill", "red"),
				p(t, "stroke", "red"),
				p(t, "stroke-width", "1.5"),
				p(t, "stroke-linecap", "round"),
				p(t, "stroke-linejoin", "round"),
				p(t, "class", "feather feather-circle");
		},
		m(i, n) {
			U(i, t, n), Z(t, e);
		},
		p: I,
		i: I,
		o: I,
		d(i) {
			i && j(t);
		}
	};
}
class ti extends bt {
	constructor(t) {
		super(), wt(this, t, null, $e, yt, {});
	}
}
function ei(a) {
	let t, e;
	return {
		c() {
			(t = P("svg")),
				(e = P("rect")),
				p(e, "x", "3"),
				p(e, "y", "3"),
				p(e, "width", "18"),
				p(e, "height", "18"),
				p(e, "rx", "2"),
				p(e, "ry", "2"),
				p(t, "xmlns", "http://www.w3.org/2000/svg"),
				p(t, "width", "100%"),
				p(t, "height", "100%"),
				p(t, "viewBox", "0 0 24 24"),
				p(t, "fill", "red"),
				p(t, "stroke", "red"),
				p(t, "stroke-width", "1.5"),
				p(t, "stroke-linecap", "round"),
				p(t, "stroke-linejoin", "round"),
				p(t, "class", "feather feather-square");
		},
		m(i, n) {
			U(i, t, n), Z(t, e);
		},
		p: I,
		i: I,
		o: I,
		d(i) {
			i && j(t);
		}
	};
}
class ii extends bt {
	constructor(t) {
		super(), wt(this, t, null, ei, yt, {});
	}
}
function ai(a) {
	let t, e, i;
	return {
		c() {
			(t = P("svg")),
				(e = P("polyline")),
				(i = P("path")),
				p(e, "points", "1 4 1 10 7 10"),
				p(i, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"),
				p(t, "xmlns", "http://www.w3.org/2000/svg"),
				p(t, "width", "100%"),
				p(t, "height", "100%"),
				p(t, "viewBox", "0 0 24 24"),
				p(t, "fill", "none"),
				p(t, "stroke", "currentColor"),
				p(t, "stroke-width", "1.5"),
				p(t, "stroke-linecap", "round"),
				p(t, "stroke-linejoin", "round"),
				p(t, "class", "feather feather-rotate-ccw");
		},
		m(n, r) {
			U(n, t, r), Z(t, e), Z(t, i);
		},
		p: I,
		i: I,
		o: I,
		d(n) {
			n && j(t);
		}
	};
}
class ba extends bt {
	constructor(t) {
		super(), wt(this, t, null, ai, yt, {});
	}
}
/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */ function ne(a, t) {
	var e = Object.keys(a);
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(a);
		t &&
			(i = i.filter(function (n) {
				return Object.getOwnPropertyDescriptor(a, n).enumerable;
			})),
			e.push.apply(e, i);
	}
	return e;
}
function Ee(a) {
	for (var t = 1; t < arguments.length; t++) {
		var e = arguments[t] != null ? arguments[t] : {};
		t % 2
			? ne(Object(e), !0).forEach(function (i) {
					oi(a, i, e[i]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e))
			: ne(Object(e)).forEach(function (i) {
					Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(e, i));
			  });
	}
	return a;
}
function Dt(a) {
	return (
		typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
			? (Dt = function (t) {
					return typeof t;
			  })
			: (Dt = function (t) {
					return t &&
						typeof Symbol == "function" &&
						t.constructor === Symbol &&
						t !== Symbol.prototype
						? "symbol"
						: typeof t;
			  }),
		Dt(a)
	);
}
function ri(a, t) {
	if (!(a instanceof t))
		throw new TypeError("Cannot call a class as a function");
}
function oe(a, t) {
	for (var e = 0; e < t.length; e++) {
		var i = t[e];
		(i.enumerable = i.enumerable || !1),
			(i.configurable = !0),
			"value" in i && (i.writable = !0),
			Object.defineProperty(a, i.key, i);
	}
}
function ni(a, t, e) {
	return t && oe(a.prototype, t), e && oe(a, e), a;
}
function oi(a, t, e) {
	return (
		t in a
			? Object.defineProperty(a, t, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
			  })
			: (a[t] = e),
		a
	);
}
function De(a) {
	return si(a) || hi(a) || ci(a) || li();
}
function si(a) {
	if (Array.isArray(a)) return It(a);
}
function hi(a) {
	if (
		(typeof Symbol < "u" && a[Symbol.iterator] != null) ||
		a["@@iterator"] != null
	)
		return Array.from(a);
}
function ci(a, t) {
	if (a) {
		if (typeof a == "string") return It(a, t);
		var e = Object.prototype.toString.call(a).slice(8, -1);
		if (
			(e === "Object" && a.constructor && (e = a.constructor.name),
			e === "Map" || e === "Set")
		)
			return Array.from(a);
		if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
			return It(a, t);
	}
}
function It(a, t) {
	(t == null || t > a.length) && (t = a.length);
	for (var e = 0, i = new Array(t); e < t; e++) i[e] = a[e];
	return i;
}
function li() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ct = typeof window < "u" && typeof window.document < "u",
	X = Ct ? window : {},
	Kt =
		Ct && X.document.documentElement
			? "ontouchstart" in X.document.documentElement
			: !1,
	Qt = Ct ? "PointerEvent" in X : !1,
	E = "cropper",
	Zt = "all",
	Me = "crop",
	Oe = "move",
	Te = "zoom",
	et = "e",
	it = "w",
	rt = "s",
	F = "n",
	ft = "ne",
	ut = "nw",
	dt = "se",
	pt = "sw",
	Lt = "".concat(E, "-crop"),
	se = "".concat(E, "-disabled"),
	S = "".concat(E, "-hidden"),
	he = "".concat(E, "-hide"),
	fi = "".concat(E, "-invisible"),
	Mt = "".concat(E, "-modal"),
	Bt = "".concat(E, "-move"),
	gt = "".concat(E, "Action"),
	xt = "".concat(E, "Preview"),
	Jt = "crop",
	Ce = "move",
	Re = "none",
	zt = "crop",
	Ht = "cropend",
	Pt = "cropmove",
	Wt = "cropstart",
	ce = "dblclick",
	ui = Kt ? "touchstart" : "mousedown",
	di = Kt ? "touchmove" : "mousemove",
	pi = Kt ? "touchend touchcancel" : "mouseup",
	le = Qt ? "pointerdown" : ui,
	fe = Qt ? "pointermove" : di,
	ue = Qt ? "pointerup pointercancel" : pi,
	de = "ready",
	pe = "resize",
	ve = "wheel",
	Yt = "zoom",
	ge = "image/jpeg",
	vi = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
	gi = /^data:/,
	mi = /^data:image\/jpeg;base64,/,
	bi = /^img|canvas$/i,
	Ae = 200,
	ke = 100,
	me = {
		viewMode: 0,
		dragMode: Jt,
		initialAspectRatio: NaN,
		aspectRatio: NaN,
		data: null,
		preview: "",
		responsive: !0,
		restore: !0,
		checkCrossOrigin: !0,
		checkOrientation: !0,
		modal: !0,
		guides: !0,
		center: !0,
		highlight: !0,
		background: !0,
		autoCrop: !0,
		autoCropArea: 0.8,
		movable: !0,
		rotatable: !0,
		scalable: !0,
		zoomable: !0,
		zoomOnTouch: !0,
		zoomOnWheel: !0,
		wheelZoomRatio: 0.1,
		cropBoxMovable: !0,
		cropBoxResizable: !0,
		toggleDragModeOnDblclick: !0,
		minCanvasWidth: 0,
		minCanvasHeight: 0,
		minCropBoxWidth: 0,
		minCropBoxHeight: 0,
		minContainerWidth: Ae,
		minContainerHeight: ke,
		ready: null,
		cropstart: null,
		cropmove: null,
		cropend: null,
		crop: null,
		zoom: null
	},
	wi =
		'<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
	yi = Number.isNaN || X.isNaN;
function b(a) {
	return typeof a == "number" && !yi(a);
}
var be = function (t) {
	return t > 0 && t < 1 / 0;
};
function Nt(a) {
	return typeof a > "u";
}
function at(a) {
	return Dt(a) === "object" && a !== null;
}
var _i = Object.prototype.hasOwnProperty;
function nt(a) {
	if (!at(a)) return !1;
	try {
		var t = a.constructor,
			e = t.prototype;
		return t && e && _i.call(e, "isPrototypeOf");
	} catch {
		return !1;
	}
}
function N(a) {
	return typeof a == "function";
}
var xi = Array.prototype.slice;
function Ne(a) {
	return Array.from ? Array.from(a) : xi.call(a);
}
function C(a, t) {
	return (
		a &&
			N(t) &&
			(Array.isArray(a) || b(a.length)
				? Ne(a).forEach(function (e, i) {
						t.call(a, e, i, a);
				  })
				: at(a) &&
				  Object.keys(a).forEach(function (e) {
						t.call(a, a[e], e, a);
				  })),
		a
	);
}
var D =
		Object.assign ||
		function (t) {
			for (
				var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
				n < e;
				n++
			)
				i[n - 1] = arguments[n];
			return (
				at(t) &&
					i.length > 0 &&
					i.forEach(function (r) {
						at(r) &&
							Object.keys(r).forEach(function (o) {
								t[o] = r[o];
							});
					}),
				t
			);
		},
	Ei = /\.\d*(?:0|9){12}\d*$/;
function st(a) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
	return Ei.test(a) ? Math.round(a * t) / t : a;
}
var Di = /^width|height|left|top|marginLeft|marginTop$/;
function K(a, t) {
	var e = a.style;
	C(t, function (i, n) {
		Di.test(n) && b(i) && (i = "".concat(i, "px")), (e[n] = i);
	});
}
function Mi(a, t) {
	return a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1;
}
function A(a, t) {
	if (t) {
		if (b(a.length)) {
			C(a, function (i) {
				A(i, t);
			});
			return;
		}
		if (a.classList) {
			a.classList.add(t);
			return;
		}
		var e = a.className.trim();
		e
			? e.indexOf(t) < 0 && (a.className = "".concat(e, " ").concat(t))
			: (a.className = t);
	}
}
function Y(a, t) {
	if (t) {
		if (b(a.length)) {
			C(a, function (e) {
				Y(e, t);
			});
			return;
		}
		if (a.classList) {
			a.classList.remove(t);
			return;
		}
		a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ""));
	}
}
function ot(a, t, e) {
	if (t) {
		if (b(a.length)) {
			C(a, function (i) {
				ot(i, t, e);
			});
			return;
		}
		e ? A(a, t) : Y(a, t);
	}
}
var Oi = /([a-z\d])([A-Z])/g;
function $t(a) {
	return a.replace(Oi, "$1-$2").toLowerCase();
}
function Xt(a, t) {
	return at(a[t])
		? a[t]
		: a.dataset
		? a.dataset[t]
		: a.getAttribute("data-".concat($t(t)));
}
function mt(a, t, e) {
	at(e)
		? (a[t] = e)
		: a.dataset
		? (a.dataset[t] = e)
		: a.setAttribute("data-".concat($t(t)), e);
}
function Ti(a, t) {
	if (at(a[t]))
		try {
			delete a[t];
		} catch {
			a[t] = void 0;
		}
	else if (a.dataset)
		try {
			delete a.dataset[t];
		} catch {
			a.dataset[t] = void 0;
		}
	else a.removeAttribute("data-".concat($t(t)));
}
var Se = /\s\s*/,
	Ie = (function () {
		var a = !1;
		if (Ct) {
			var t = !1,
				e = function () {},
				i = Object.defineProperty({}, "once", {
					get: function () {
						return (a = !0), t;
					},
					set: function (r) {
						t = r;
					}
				});
			X.addEventListener("test", e, i), X.removeEventListener("test", e, i);
		}
		return a;
	})();
function z(a, t, e) {
	var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
		n = e;
	t.trim()
		.split(Se)
		.forEach(function (r) {
			if (!Ie) {
				var o = a.listeners;
				o &&
					o[r] &&
					o[r][e] &&
					((n = o[r][e]),
					delete o[r][e],
					Object.keys(o[r]).length === 0 && delete o[r],
					Object.keys(o).length === 0 && delete a.listeners);
			}
			a.removeEventListener(r, n, i);
		});
}
function B(a, t, e) {
	var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
		n = e;
	t.trim()
		.split(Se)
		.forEach(function (r) {
			if (i.once && !Ie) {
				var o = a.listeners,
					s = o === void 0 ? {} : o;
				(n = function () {
					delete s[r][e], a.removeEventListener(r, n, i);
					for (var f = arguments.length, h = new Array(f), c = 0; c < f; c++)
						h[c] = arguments[c];
					e.apply(a, h);
				}),
					s[r] || (s[r] = {}),
					s[r][e] && a.removeEventListener(r, s[r][e], i),
					(s[r][e] = n),
					(a.listeners = s);
			}
			a.addEventListener(r, n, i);
		});
}
function ht(a, t, e) {
	var i;
	return (
		N(Event) && N(CustomEvent)
			? (i = new CustomEvent(t, { detail: e, bubbles: !0, cancelable: !0 }))
			: ((i = document.createEvent("CustomEvent")),
			  i.initCustomEvent(t, !0, !0, e)),
		a.dispatchEvent(i)
	);
}
function Le(a) {
	var t = a.getBoundingClientRect();
	return {
		left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
		top: t.top + (window.pageYOffset - document.documentElement.clientTop)
	};
}
var St = X.location,
	Ci = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function we(a) {
	var t = a.match(Ci);
	return (
		t !== null &&
		(t[1] !== St.protocol || t[2] !== St.hostname || t[3] !== St.port)
	);
}
function ye(a) {
	var t = "timestamp=".concat(new Date().getTime());
	return a + (a.indexOf("?") === -1 ? "?" : "&") + t;
}
function vt(a) {
	var t = a.rotate,
		e = a.scaleX,
		i = a.scaleY,
		n = a.translateX,
		r = a.translateY,
		o = [];
	b(n) && n !== 0 && o.push("translateX(".concat(n, "px)")),
		b(r) && r !== 0 && o.push("translateY(".concat(r, "px)")),
		b(t) && t !== 0 && o.push("rotate(".concat(t, "deg)")),
		b(e) && e !== 1 && o.push("scaleX(".concat(e, ")")),
		b(i) && i !== 1 && o.push("scaleY(".concat(i, ")"));
	var s = o.length ? o.join(" ") : "none";
	return { WebkitTransform: s, msTransform: s, transform: s };
}
function Ri(a) {
	var t = Ee({}, a),
		e = 0;
	return (
		C(a, function (i, n) {
			delete t[n],
				C(t, function (r) {
					var o = Math.abs(i.startX - r.startX),
						s = Math.abs(i.startY - r.startY),
						l = Math.abs(i.endX - r.endX),
						f = Math.abs(i.endY - r.endY),
						h = Math.sqrt(o * o + s * s),
						c = Math.sqrt(l * l + f * f),
						u = (c - h) / h;
					Math.abs(u) > Math.abs(e) && (e = u);
				});
		}),
		e
	);
}
function Et(a, t) {
	var e = a.pageX,
		i = a.pageY,
		n = { endX: e, endY: i };
	return t ? n : Ee({ startX: e, startY: i }, n);
}
function Ai(a) {
	var t = 0,
		e = 0,
		i = 0;
	return (
		C(a, function (n) {
			var r = n.startX,
				o = n.startY;
			(t += r), (e += o), (i += 1);
		}),
		(t /= i),
		(e /= i),
		{ pageX: t, pageY: e }
	);
}
function Q(a) {
	var t = a.aspectRatio,
		e = a.height,
		i = a.width,
		n =
			arguments.length > 1 && arguments[1] !== void 0
				? arguments[1]
				: "contain",
		r = be(i),
		o = be(e);
	if (r && o) {
		var s = e * t;
		(n === "contain" && s > i) || (n === "cover" && s < i)
			? (e = i / t)
			: (i = e * t);
	} else r ? (e = i / t) : o && (i = e * t);
	return { width: i, height: e };
}
function ki(a) {
	var t = a.width,
		e = a.height,
		i = a.degree;
	if (((i = Math.abs(i) % 180), i === 90)) return { width: e, height: t };
	var n = ((i % 90) * Math.PI) / 180,
		r = Math.sin(n),
		o = Math.cos(n),
		s = t * o + e * r,
		l = t * r + e * o;
	return i > 90 ? { width: l, height: s } : { width: s, height: l };
}
function Ni(a, t, e, i) {
	var n = t.aspectRatio,
		r = t.naturalWidth,
		o = t.naturalHeight,
		s = t.rotate,
		l = s === void 0 ? 0 : s,
		f = t.scaleX,
		h = f === void 0 ? 1 : f,
		c = t.scaleY,
		u = c === void 0 ? 1 : c,
		v = e.aspectRatio,
		g = e.naturalWidth,
		_ = e.naturalHeight,
		m = i.fillColor,
		x = m === void 0 ? "transparent" : m,
		T = i.imageSmoothingEnabled,
		O = T === void 0 ? !0 : T,
		w = i.imageSmoothingQuality,
		M = w === void 0 ? "low" : w,
		d = i.maxWidth,
		y = d === void 0 ? 1 / 0 : d,
		R = i.maxHeight,
		L = R === void 0 ? 1 / 0 : R,
		V = i.minWidth,
		J = V === void 0 ? 0 : V,
		$ = i.minHeight,
		q = $ === void 0 ? 0 : $,
		H = document.createElement("canvas"),
		k = H.getContext("2d"),
		tt = Q({ aspectRatio: v, width: y, height: L }),
		_t = Q({ aspectRatio: v, width: J, height: q }, "cover"),
		At = Math.min(tt.width, Math.max(_t.width, g)),
		kt = Math.min(tt.height, Math.max(_t.height, _)),
		te = Q({ aspectRatio: n, width: y, height: L }),
		ee = Q({ aspectRatio: n, width: J, height: q }, "cover"),
		ie = Math.min(te.width, Math.max(ee.width, r)),
		ae = Math.min(te.height, Math.max(ee.height, o)),
		Xe = [-ie / 2, -ae / 2, ie, ae];
	return (
		(H.width = st(At)),
		(H.height = st(kt)),
		(k.fillStyle = x),
		k.fillRect(0, 0, At, kt),
		k.save(),
		k.translate(At / 2, kt / 2),
		k.rotate((l * Math.PI) / 180),
		k.scale(h, u),
		(k.imageSmoothingEnabled = O),
		(k.imageSmoothingQuality = M),
		k.drawImage.apply(
			k,
			[a].concat(
				De(
					Xe.map(function (Ue) {
						return Math.floor(st(Ue));
					})
				)
			)
		),
		k.restore(),
		H
	);
}
var Be = String.fromCharCode;
function Si(a, t, e) {
	var i = "";
	e += t;
	for (var n = t; n < e; n += 1) i += Be(a.getUint8(n));
	return i;
}
var Ii = /^data:.*,/;
function Li(a) {
	var t = a.replace(Ii, ""),
		e = atob(t),
		i = new ArrayBuffer(e.length),
		n = new Uint8Array(i);
	return (
		C(n, function (r, o) {
			n[o] = e.charCodeAt(o);
		}),
		i
	);
}
function Bi(a, t) {
	for (var e = [], i = 8192, n = new Uint8Array(a); n.length > 0; )
		e.push(Be.apply(null, Ne(n.subarray(0, i)))), (n = n.subarray(i));
	return "data:".concat(t, ";base64,").concat(btoa(e.join("")));
}
function zi(a) {
	var t = new DataView(a),
		e;
	try {
		var i, n, r;
		if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
			for (var o = t.byteLength, s = 2; s + 1 < o; ) {
				if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
					n = s;
					break;
				}
				s += 1;
			}
		if (n) {
			var l = n + 4,
				f = n + 10;
			if (Si(t, l, 4) === "Exif") {
				var h = t.getUint16(f);
				if (
					((i = h === 18761),
					(i || h === 19789) && t.getUint16(f + 2, i) === 42)
				) {
					var c = t.getUint32(f + 4, i);
					c >= 8 && (r = f + c);
				}
			}
		}
		if (r) {
			var u = t.getUint16(r, i),
				v,
				g;
			for (g = 0; g < u; g += 1)
				if (((v = r + g * 12 + 2), t.getUint16(v, i) === 274)) {
					(v += 8), (e = t.getUint16(v, i)), t.setUint16(v, 1, i);
					break;
				}
		}
	} catch {
		e = 1;
	}
	return e;
}
function Hi(a) {
	var t = 0,
		e = 1,
		i = 1;
	switch (a) {
		case 2:
			e = -1;
			break;
		case 3:
			t = -180;
			break;
		case 4:
			i = -1;
			break;
		case 5:
			(t = 90), (i = -1);
			break;
		case 6:
			t = 90;
			break;
		case 7:
			(t = 90), (e = -1);
			break;
		case 8:
			t = -90;
			break;
	}
	return { rotate: t, scaleX: e, scaleY: i };
}
var Pi = {
		render: function () {
			this.initContainer(),
				this.initCanvas(),
				this.initCropBox(),
				this.renderCanvas(),
				this.cropped && this.renderCropBox();
		},
		initContainer: function () {
			var t = this.element,
				e = this.options,
				i = this.container,
				n = this.cropper,
				r = Number(e.minContainerWidth),
				o = Number(e.minContainerHeight);
			A(n, S), Y(t, S);
			var s = {
				width: Math.max(i.offsetWidth, r >= 0 ? r : Ae),
				height: Math.max(i.offsetHeight, o >= 0 ? o : ke)
			};
			(this.containerData = s),
				K(n, { width: s.width, height: s.height }),
				A(t, S),
				Y(n, S);
		},
		initCanvas: function () {
			var t = this.containerData,
				e = this.imageData,
				i = this.options.viewMode,
				n = Math.abs(e.rotate) % 180 === 90,
				r = n ? e.naturalHeight : e.naturalWidth,
				o = n ? e.naturalWidth : e.naturalHeight,
				s = r / o,
				l = t.width,
				f = t.height;
			t.height * s > t.width
				? i === 3
					? (l = t.height * s)
					: (f = t.width / s)
				: i === 3
				? (f = t.width / s)
				: (l = t.height * s);
			var h = {
				aspectRatio: s,
				naturalWidth: r,
				naturalHeight: o,
				width: l,
				height: f
			};
			(this.canvasData = h),
				(this.limited = i === 1 || i === 2),
				this.limitCanvas(!0, !0),
				(h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth)),
				(h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight)),
				(h.left = (t.width - h.width) / 2),
				(h.top = (t.height - h.height) / 2),
				(h.oldLeft = h.left),
				(h.oldTop = h.top),
				(this.initialCanvasData = D({}, h));
		},
		limitCanvas: function (t, e) {
			var i = this.options,
				n = this.containerData,
				r = this.canvasData,
				o = this.cropBoxData,
				s = i.viewMode,
				l = r.aspectRatio,
				f = this.cropped && o;
			if (t) {
				var h = Number(i.minCanvasWidth) || 0,
					c = Number(i.minCanvasHeight) || 0;
				s > 1
					? ((h = Math.max(h, n.width)),
					  (c = Math.max(c, n.height)),
					  s === 3 && (c * l > h ? (h = c * l) : (c = h / l)))
					: s > 0 &&
					  (h
							? (h = Math.max(h, f ? o.width : 0))
							: c
							? (c = Math.max(c, f ? o.height : 0))
							: f &&
							  ((h = o.width),
							  (c = o.height),
							  c * l > h ? (h = c * l) : (c = h / l)));
				var u = Q({ aspectRatio: l, width: h, height: c });
				(h = u.width),
					(c = u.height),
					(r.minWidth = h),
					(r.minHeight = c),
					(r.maxWidth = 1 / 0),
					(r.maxHeight = 1 / 0);
			}
			if (e)
				if (s > (f ? 0 : 1)) {
					var v = n.width - r.width,
						g = n.height - r.height;
					(r.minLeft = Math.min(0, v)),
						(r.minTop = Math.min(0, g)),
						(r.maxLeft = Math.max(0, v)),
						(r.maxTop = Math.max(0, g)),
						f &&
							this.limited &&
							((r.minLeft = Math.min(o.left, o.left + (o.width - r.width))),
							(r.minTop = Math.min(o.top, o.top + (o.height - r.height))),
							(r.maxLeft = o.left),
							(r.maxTop = o.top),
							s === 2 &&
								(r.width >= n.width &&
									((r.minLeft = Math.min(0, v)), (r.maxLeft = Math.max(0, v))),
								r.height >= n.height &&
									((r.minTop = Math.min(0, g)), (r.maxTop = Math.max(0, g)))));
				} else
					(r.minLeft = -r.width),
						(r.minTop = -r.height),
						(r.maxLeft = n.width),
						(r.maxTop = n.height);
		},
		renderCanvas: function (t, e) {
			var i = this.canvasData,
				n = this.imageData;
			if (e) {
				var r = ki({
						width: n.naturalWidth * Math.abs(n.scaleX || 1),
						height: n.naturalHeight * Math.abs(n.scaleY || 1),
						degree: n.rotate || 0
					}),
					o = r.width,
					s = r.height,
					l = i.width * (o / i.naturalWidth),
					f = i.height * (s / i.naturalHeight);
				(i.left -= (l - i.width) / 2),
					(i.top -= (f - i.height) / 2),
					(i.width = l),
					(i.height = f),
					(i.aspectRatio = o / s),
					(i.naturalWidth = o),
					(i.naturalHeight = s),
					this.limitCanvas(!0, !1);
			}
			(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
				(i.height > i.maxHeight || i.height < i.minHeight) &&
					(i.top = i.oldTop),
				(i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
				(i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
				this.limitCanvas(!1, !0),
				(i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
				(i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
				(i.oldLeft = i.left),
				(i.oldTop = i.top),
				K(
					this.canvas,
					D(
						{ width: i.width, height: i.height },
						vt({ translateX: i.left, translateY: i.top })
					)
				),
				this.renderImage(t),
				this.cropped && this.limited && this.limitCropBox(!0, !0);
		},
		renderImage: function (t) {
			var e = this.canvasData,
				i = this.imageData,
				n = i.naturalWidth * (e.width / e.naturalWidth),
				r = i.naturalHeight * (e.height / e.naturalHeight);
			D(i, {
				width: n,
				height: r,
				left: (e.width - n) / 2,
				top: (e.height - r) / 2
			}),
				K(
					this.image,
					D(
						{ width: i.width, height: i.height },
						vt(D({ translateX: i.left, translateY: i.top }, i))
					)
				),
				t && this.output();
		},
		initCropBox: function () {
			var t = this.options,
				e = this.canvasData,
				i = t.aspectRatio || t.initialAspectRatio,
				n = Number(t.autoCropArea) || 0.8,
				r = { width: e.width, height: e.height };
			i &&
				(e.height * i > e.width
					? (r.height = r.width / i)
					: (r.width = r.height * i)),
				(this.cropBoxData = r),
				this.limitCropBox(!0, !0),
				(r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
				(r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
				(r.width = Math.max(r.minWidth, r.width * n)),
				(r.height = Math.max(r.minHeight, r.height * n)),
				(r.left = e.left + (e.width - r.width) / 2),
				(r.top = e.top + (e.height - r.height) / 2),
				(r.oldLeft = r.left),
				(r.oldTop = r.top),
				(this.initialCropBoxData = D({}, r));
		},
		limitCropBox: function (t, e) {
			var i = this.options,
				n = this.containerData,
				r = this.canvasData,
				o = this.cropBoxData,
				s = this.limited,
				l = i.aspectRatio;
			if (t) {
				var f = Number(i.minCropBoxWidth) || 0,
					h = Number(i.minCropBoxHeight) || 0,
					c = s
						? Math.min(n.width, r.width, r.width + r.left, n.width - r.left)
						: n.width,
					u = s
						? Math.min(n.height, r.height, r.height + r.top, n.height - r.top)
						: n.height;
				(f = Math.min(f, n.width)),
					(h = Math.min(h, n.height)),
					l &&
						(f && h
							? h * l > f
								? (h = f / l)
								: (f = h * l)
							: f
							? (h = f / l)
							: h && (f = h * l),
						u * l > c ? (u = c / l) : (c = u * l)),
					(o.minWidth = Math.min(f, c)),
					(o.minHeight = Math.min(h, u)),
					(o.maxWidth = c),
					(o.maxHeight = u);
			}
			e &&
				(s
					? ((o.minLeft = Math.max(0, r.left)),
					  (o.minTop = Math.max(0, r.top)),
					  (o.maxLeft = Math.min(n.width, r.left + r.width) - o.width),
					  (o.maxTop = Math.min(n.height, r.top + r.height) - o.height))
					: ((o.minLeft = 0),
					  (o.minTop = 0),
					  (o.maxLeft = n.width - o.width),
					  (o.maxTop = n.height - o.height)));
		},
		renderCropBox: function () {
			var t = this.options,
				e = this.containerData,
				i = this.cropBoxData;
			(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft),
				(i.height > i.maxHeight || i.height < i.minHeight) &&
					(i.top = i.oldTop),
				(i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth)),
				(i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight)),
				this.limitCropBox(!1, !0),
				(i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft)),
				(i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop)),
				(i.oldLeft = i.left),
				(i.oldTop = i.top),
				t.movable &&
					t.cropBoxMovable &&
					mt(
						this.face,
						gt,
						i.width >= e.width && i.height >= e.height ? Oe : Zt
					),
				K(
					this.cropBox,
					D(
						{ width: i.width, height: i.height },
						vt({ translateX: i.left, translateY: i.top })
					)
				),
				this.cropped && this.limited && this.limitCanvas(!0, !0),
				this.disabled || this.output();
		},
		output: function () {
			this.preview(), ht(this.element, zt, this.getData());
		}
	},
	Wi = {
		initPreview: function () {
			var t = this.element,
				e = this.crossOrigin,
				i = this.options.preview,
				n = e ? this.crossOriginUrl : this.url,
				r = t.alt || "The image to preview",
				o = document.createElement("img");
			if (
				(e && (o.crossOrigin = e),
				(o.src = n),
				(o.alt = r),
				this.viewBox.appendChild(o),
				(this.viewBoxImage = o),
				!!i)
			) {
				var s = i;
				typeof i == "string"
					? (s = t.ownerDocument.querySelectorAll(i))
					: i.querySelector && (s = [i]),
					(this.previews = s),
					C(s, function (l) {
						var f = document.createElement("img");
						mt(l, xt, {
							width: l.offsetWidth,
							height: l.offsetHeight,
							html: l.innerHTML
						}),
							e && (f.crossOrigin = e),
							(f.src = n),
							(f.alt = r),
							(f.style.cssText =
								'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
							(l.innerHTML = ""),
							l.appendChild(f);
					});
			}
		},
		resetPreview: function () {
			C(this.previews, function (t) {
				var e = Xt(t, xt);
				K(t, { width: e.width, height: e.height }),
					(t.innerHTML = e.html),
					Ti(t, xt);
			});
		},
		preview: function () {
			var t = this.imageData,
				e = this.canvasData,
				i = this.cropBoxData,
				n = i.width,
				r = i.height,
				o = t.width,
				s = t.height,
				l = i.left - e.left - t.left,
				f = i.top - e.top - t.top;
			!this.cropped ||
				this.disabled ||
				(K(
					this.viewBoxImage,
					D(
						{ width: o, height: s },
						vt(D({ translateX: -l, translateY: -f }, t))
					)
				),
				C(this.previews, function (h) {
					var c = Xt(h, xt),
						u = c.width,
						v = c.height,
						g = u,
						_ = v,
						m = 1;
					n && ((m = u / n), (_ = r * m)),
						r && _ > v && ((m = v / r), (g = n * m), (_ = v)),
						K(h, { width: g, height: _ }),
						K(
							h.getElementsByTagName("img")[0],
							D(
								{ width: o * m, height: s * m },
								vt(D({ translateX: -l * m, translateY: -f * m }, t))
							)
						);
				}));
		}
	},
	Yi = {
		bind: function () {
			var t = this.element,
				e = this.options,
				i = this.cropper;
			N(e.cropstart) && B(t, Wt, e.cropstart),
				N(e.cropmove) && B(t, Pt, e.cropmove),
				N(e.cropend) && B(t, Ht, e.cropend),
				N(e.crop) && B(t, zt, e.crop),
				N(e.zoom) && B(t, Yt, e.zoom),
				B(i, le, (this.onCropStart = this.cropStart.bind(this))),
				e.zoomable &&
					e.zoomOnWheel &&
					B(i, ve, (this.onWheel = this.wheel.bind(this)), {
						passive: !1,
						capture: !0
					}),
				e.toggleDragModeOnDblclick &&
					B(i, ce, (this.onDblclick = this.dblclick.bind(this))),
				B(t.ownerDocument, fe, (this.onCropMove = this.cropMove.bind(this))),
				B(t.ownerDocument, ue, (this.onCropEnd = this.cropEnd.bind(this))),
				e.responsive && B(window, pe, (this.onResize = this.resize.bind(this)));
		},
		unbind: function () {
			var t = this.element,
				e = this.options,
				i = this.cropper;
			N(e.cropstart) && z(t, Wt, e.cropstart),
				N(e.cropmove) && z(t, Pt, e.cropmove),
				N(e.cropend) && z(t, Ht, e.cropend),
				N(e.crop) && z(t, zt, e.crop),
				N(e.zoom) && z(t, Yt, e.zoom),
				z(i, le, this.onCropStart),
				e.zoomable &&
					e.zoomOnWheel &&
					z(i, ve, this.onWheel, { passive: !1, capture: !0 }),
				e.toggleDragModeOnDblclick && z(i, ce, this.onDblclick),
				z(t.ownerDocument, fe, this.onCropMove),
				z(t.ownerDocument, ue, this.onCropEnd),
				e.responsive && z(window, pe, this.onResize);
		}
	},
	Xi = {
		resize: function () {
			if (!this.disabled) {
				var t = this.options,
					e = this.container,
					i = this.containerData,
					n = e.offsetWidth / i.width,
					r = e.offsetHeight / i.height,
					o = Math.abs(n - 1) > Math.abs(r - 1) ? n : r;
				if (o !== 1) {
					var s, l;
					t.restore &&
						((s = this.getCanvasData()), (l = this.getCropBoxData())),
						this.render(),
						t.restore &&
							(this.setCanvasData(
								C(s, function (f, h) {
									s[h] = f * o;
								})
							),
							this.setCropBoxData(
								C(l, function (f, h) {
									l[h] = f * o;
								})
							));
				}
			}
		},
		dblclick: function () {
			this.disabled ||
				this.options.dragMode === Re ||
				this.setDragMode(Mi(this.dragBox, Lt) ? Ce : Jt);
		},
		wheel: function (t) {
			var e = this,
				i = Number(this.options.wheelZoomRatio) || 0.1,
				n = 1;
			this.disabled ||
				(t.preventDefault(),
				!this.wheeling &&
					((this.wheeling = !0),
					setTimeout(function () {
						e.wheeling = !1;
					}, 50),
					t.deltaY
						? (n = t.deltaY > 0 ? 1 : -1)
						: t.wheelDelta
						? (n = -t.wheelDelta / 120)
						: t.detail && (n = t.detail > 0 ? 1 : -1),
					this.zoom(-n * i, t)));
		},
		cropStart: function (t) {
			var e = t.buttons,
				i = t.button;
			if (
				!(
					this.disabled ||
					((t.type === "mousedown" ||
						(t.type === "pointerdown" && t.pointerType === "mouse")) &&
						((b(e) && e !== 1) || (b(i) && i !== 0) || t.ctrlKey))
				)
			) {
				var n = this.options,
					r = this.pointers,
					o;
				t.changedTouches
					? C(t.changedTouches, function (s) {
							r[s.identifier] = Et(s);
					  })
					: (r[t.pointerId || 0] = Et(t)),
					Object.keys(r).length > 1 && n.zoomable && n.zoomOnTouch
						? (o = Te)
						: (o = Xt(t.target, gt)),
					vi.test(o) &&
						ht(this.element, Wt, { originalEvent: t, action: o }) !== !1 &&
						(t.preventDefault(),
						(this.action = o),
						(this.cropping = !1),
						o === Me && ((this.cropping = !0), A(this.dragBox, Mt)));
			}
		},
		cropMove: function (t) {
			var e = this.action;
			if (!(this.disabled || !e)) {
				var i = this.pointers;
				t.preventDefault(),
					ht(this.element, Pt, { originalEvent: t, action: e }) !== !1 &&
						(t.changedTouches
							? C(t.changedTouches, function (n) {
									D(i[n.identifier] || {}, Et(n, !0));
							  })
							: D(i[t.pointerId || 0] || {}, Et(t, !0)),
						this.change(t));
			}
		},
		cropEnd: function (t) {
			if (!this.disabled) {
				var e = this.action,
					i = this.pointers;
				t.changedTouches
					? C(t.changedTouches, function (n) {
							delete i[n.identifier];
					  })
					: delete i[t.pointerId || 0],
					e &&
						(t.preventDefault(),
						Object.keys(i).length || (this.action = ""),
						this.cropping &&
							((this.cropping = !1),
							ot(this.dragBox, Mt, this.cropped && this.options.modal)),
						ht(this.element, Ht, { originalEvent: t, action: e }));
			}
		}
	},
	Ui = {
		change: function (t) {
			var e = this.options,
				i = this.canvasData,
				n = this.containerData,
				r = this.cropBoxData,
				o = this.pointers,
				s = this.action,
				l = e.aspectRatio,
				f = r.left,
				h = r.top,
				c = r.width,
				u = r.height,
				v = f + c,
				g = h + u,
				_ = 0,
				m = 0,
				x = n.width,
				T = n.height,
				O = !0,
				w;
			!l && t.shiftKey && (l = c && u ? c / u : 1),
				this.limited &&
					((_ = r.minLeft),
					(m = r.minTop),
					(x = _ + Math.min(n.width, i.width, i.left + i.width)),
					(T = m + Math.min(n.height, i.height, i.top + i.height)));
			var M = o[Object.keys(o)[0]],
				d = { x: M.endX - M.startX, y: M.endY - M.startY },
				y = function (L) {
					switch (L) {
						case et:
							v + d.x > x && (d.x = x - v);
							break;
						case it:
							f + d.x < _ && (d.x = _ - f);
							break;
						case F:
							h + d.y < m && (d.y = m - h);
							break;
						case rt:
							g + d.y > T && (d.y = T - g);
							break;
					}
				};
			switch (s) {
				case Zt:
					(f += d.x), (h += d.y);
					break;
				case et:
					if (d.x >= 0 && (v >= x || (l && (h <= m || g >= T)))) {
						O = !1;
						break;
					}
					y(et),
						(c += d.x),
						c < 0 && ((s = it), (c = -c), (f -= c)),
						l && ((u = c / l), (h += (r.height - u) / 2));
					break;
				case F:
					if (d.y <= 0 && (h <= m || (l && (f <= _ || v >= x)))) {
						O = !1;
						break;
					}
					y(F),
						(u -= d.y),
						(h += d.y),
						u < 0 && ((s = rt), (u = -u), (h -= u)),
						l && ((c = u * l), (f += (r.width - c) / 2));
					break;
				case it:
					if (d.x <= 0 && (f <= _ || (l && (h <= m || g >= T)))) {
						O = !1;
						break;
					}
					y(it),
						(c -= d.x),
						(f += d.x),
						c < 0 && ((s = et), (c = -c), (f -= c)),
						l && ((u = c / l), (h += (r.height - u) / 2));
					break;
				case rt:
					if (d.y >= 0 && (g >= T || (l && (f <= _ || v >= x)))) {
						O = !1;
						break;
					}
					y(rt),
						(u += d.y),
						u < 0 && ((s = F), (u = -u), (h -= u)),
						l && ((c = u * l), (f += (r.width - c) / 2));
					break;
				case ft:
					if (l) {
						if (d.y <= 0 && (h <= m || v >= x)) {
							O = !1;
							break;
						}
						y(F), (u -= d.y), (h += d.y), (c = u * l);
					} else
						y(F),
							y(et),
							d.x >= 0
								? v < x
									? (c += d.x)
									: d.y <= 0 && h <= m && (O = !1)
								: (c += d.x),
							d.y <= 0
								? h > m && ((u -= d.y), (h += d.y))
								: ((u -= d.y), (h += d.y));
					c < 0 && u < 0
						? ((s = pt), (u = -u), (c = -c), (h -= u), (f -= c))
						: c < 0
						? ((s = ut), (c = -c), (f -= c))
						: u < 0 && ((s = dt), (u = -u), (h -= u));
					break;
				case ut:
					if (l) {
						if (d.y <= 0 && (h <= m || f <= _)) {
							O = !1;
							break;
						}
						y(F), (u -= d.y), (h += d.y), (c = u * l), (f += r.width - c);
					} else
						y(F),
							y(it),
							d.x <= 0
								? f > _
									? ((c -= d.x), (f += d.x))
									: d.y <= 0 && h <= m && (O = !1)
								: ((c -= d.x), (f += d.x)),
							d.y <= 0
								? h > m && ((u -= d.y), (h += d.y))
								: ((u -= d.y), (h += d.y));
					c < 0 && u < 0
						? ((s = dt), (u = -u), (c = -c), (h -= u), (f -= c))
						: c < 0
						? ((s = ft), (c = -c), (f -= c))
						: u < 0 && ((s = pt), (u = -u), (h -= u));
					break;
				case pt:
					if (l) {
						if (d.x <= 0 && (f <= _ || g >= T)) {
							O = !1;
							break;
						}
						y(it), (c -= d.x), (f += d.x), (u = c / l);
					} else
						y(rt),
							y(it),
							d.x <= 0
								? f > _
									? ((c -= d.x), (f += d.x))
									: d.y >= 0 && g >= T && (O = !1)
								: ((c -= d.x), (f += d.x)),
							d.y >= 0 ? g < T && (u += d.y) : (u += d.y);
					c < 0 && u < 0
						? ((s = ft), (u = -u), (c = -c), (h -= u), (f -= c))
						: c < 0
						? ((s = dt), (c = -c), (f -= c))
						: u < 0 && ((s = ut), (u = -u), (h -= u));
					break;
				case dt:
					if (l) {
						if (d.x >= 0 && (v >= x || g >= T)) {
							O = !1;
							break;
						}
						y(et), (c += d.x), (u = c / l);
					} else
						y(rt),
							y(et),
							d.x >= 0
								? v < x
									? (c += d.x)
									: d.y >= 0 && g >= T && (O = !1)
								: (c += d.x),
							d.y >= 0 ? g < T && (u += d.y) : (u += d.y);
					c < 0 && u < 0
						? ((s = ut), (u = -u), (c = -c), (h -= u), (f -= c))
						: c < 0
						? ((s = pt), (c = -c), (f -= c))
						: u < 0 && ((s = ft), (u = -u), (h -= u));
					break;
				case Oe:
					this.move(d.x, d.y), (O = !1);
					break;
				case Te:
					this.zoom(Ri(o), t), (O = !1);
					break;
				case Me:
					if (!d.x || !d.y) {
						O = !1;
						break;
					}
					(w = Le(this.cropper)),
						(f = M.startX - w.left),
						(h = M.startY - w.top),
						(c = r.minWidth),
						(u = r.minHeight),
						d.x > 0
							? (s = d.y > 0 ? dt : ft)
							: d.x < 0 && ((f -= c), (s = d.y > 0 ? pt : ut)),
						d.y < 0 && (h -= u),
						this.cropped ||
							(Y(this.cropBox, S),
							(this.cropped = !0),
							this.limited && this.limitCropBox(!0, !0));
					break;
			}
			O &&
				((r.width = c),
				(r.height = u),
				(r.left = f),
				(r.top = h),
				(this.action = s),
				this.renderCropBox()),
				C(o, function (R) {
					(R.startX = R.endX), (R.startY = R.endY);
				});
		}
	},
	ji = {
		crop: function () {
			return (
				this.ready &&
					!this.cropped &&
					!this.disabled &&
					((this.cropped = !0),
					this.limitCropBox(!0, !0),
					this.options.modal && A(this.dragBox, Mt),
					Y(this.cropBox, S),
					this.setCropBoxData(this.initialCropBoxData)),
				this
			);
		},
		reset: function () {
			return (
				this.ready &&
					!this.disabled &&
					((this.imageData = D({}, this.initialImageData)),
					(this.canvasData = D({}, this.initialCanvasData)),
					(this.cropBoxData = D({}, this.initialCropBoxData)),
					this.renderCanvas(),
					this.cropped && this.renderCropBox()),
				this
			);
		},
		clear: function () {
			return (
				this.cropped &&
					!this.disabled &&
					(D(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
					(this.cropped = !1),
					this.renderCropBox(),
					this.limitCanvas(!0, !0),
					this.renderCanvas(),
					Y(this.dragBox, Mt),
					A(this.cropBox, S)),
				this
			);
		},
		replace: function (t) {
			var e =
				arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
			return (
				!this.disabled &&
					t &&
					(this.isImg && (this.element.src = t),
					e
						? ((this.url = t),
						  (this.image.src = t),
						  this.ready &&
								((this.viewBoxImage.src = t),
								C(this.previews, function (i) {
									i.getElementsByTagName("img")[0].src = t;
								})))
						: (this.isImg && (this.replaced = !0),
						  (this.options.data = null),
						  this.uncreate(),
						  this.load(t))),
				this
			);
		},
		enable: function () {
			return (
				this.ready &&
					this.disabled &&
					((this.disabled = !1), Y(this.cropper, se)),
				this
			);
		},
		disable: function () {
			return (
				this.ready &&
					!this.disabled &&
					((this.disabled = !0), A(this.cropper, se)),
				this
			);
		},
		destroy: function () {
			var t = this.element;
			return t[E]
				? ((t[E] = void 0),
				  this.isImg && this.replaced && (t.src = this.originalUrl),
				  this.uncreate(),
				  this)
				: this;
		},
		move: function (t) {
			var e =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
				i = this.canvasData,
				n = i.left,
				r = i.top;
			return this.moveTo(Nt(t) ? t : n + Number(t), Nt(e) ? e : r + Number(e));
		},
		moveTo: function (t) {
			var e =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
				i = this.canvasData,
				n = !1;
			return (
				(t = Number(t)),
				(e = Number(e)),
				this.ready &&
					!this.disabled &&
					this.options.movable &&
					(b(t) && ((i.left = t), (n = !0)),
					b(e) && ((i.top = e), (n = !0)),
					n && this.renderCanvas(!0)),
				this
			);
		},
		zoom: function (t, e) {
			var i = this.canvasData;
			return (
				(t = Number(t)),
				t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
				this.zoomTo((i.width * t) / i.naturalWidth, null, e)
			);
		},
		zoomTo: function (t, e, i) {
			var n = this.options,
				r = this.canvasData,
				o = r.width,
				s = r.height,
				l = r.naturalWidth,
				f = r.naturalHeight;
			if (
				((t = Number(t)), t >= 0 && this.ready && !this.disabled && n.zoomable)
			) {
				var h = l * t,
					c = f * t;
				if (
					ht(this.element, Yt, {
						ratio: t,
						oldRatio: o / l,
						originalEvent: i
					}) === !1
				)
					return this;
				if (i) {
					var u = this.pointers,
						v = Le(this.cropper),
						g =
							u && Object.keys(u).length
								? Ai(u)
								: { pageX: i.pageX, pageY: i.pageY };
					(r.left -= (h - o) * ((g.pageX - v.left - r.left) / o)),
						(r.top -= (c - s) * ((g.pageY - v.top - r.top) / s));
				} else
					nt(e) && b(e.x) && b(e.y)
						? ((r.left -= (h - o) * ((e.x - r.left) / o)),
						  (r.top -= (c - s) * ((e.y - r.top) / s)))
						: ((r.left -= (h - o) / 2), (r.top -= (c - s) / 2));
				(r.width = h), (r.height = c), this.renderCanvas(!0);
			}
			return this;
		},
		rotate: function (t) {
			return this.rotateTo((this.imageData.rotate || 0) + Number(t));
		},
		rotateTo: function (t) {
			return (
				(t = Number(t)),
				b(t) &&
					this.ready &&
					!this.disabled &&
					this.options.rotatable &&
					((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
				this
			);
		},
		scaleX: function (t) {
			var e = this.imageData.scaleY;
			return this.scale(t, b(e) ? e : 1);
		},
		scaleY: function (t) {
			var e = this.imageData.scaleX;
			return this.scale(b(e) ? e : 1, t);
		},
		scale: function (t) {
			var e =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
				i = this.imageData,
				n = !1;
			return (
				(t = Number(t)),
				(e = Number(e)),
				this.ready &&
					!this.disabled &&
					this.options.scalable &&
					(b(t) && ((i.scaleX = t), (n = !0)),
					b(e) && ((i.scaleY = e), (n = !0)),
					n && this.renderCanvas(!0, !0)),
				this
			);
		},
		getData: function () {
			var t =
					arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
				e = this.options,
				i = this.imageData,
				n = this.canvasData,
				r = this.cropBoxData,
				o;
			if (this.ready && this.cropped) {
				o = {
					x: r.left - n.left,
					y: r.top - n.top,
					width: r.width,
					height: r.height
				};
				var s = i.width / i.naturalWidth;
				if (
					(C(o, function (h, c) {
						o[c] = h / s;
					}),
					t)
				) {
					var l = Math.round(o.y + o.height),
						f = Math.round(o.x + o.width);
					(o.x = Math.round(o.x)),
						(o.y = Math.round(o.y)),
						(o.width = f - o.x),
						(o.height = l - o.y);
				}
			} else o = { x: 0, y: 0, width: 0, height: 0 };
			return (
				e.rotatable && (o.rotate = i.rotate || 0),
				e.scalable && ((o.scaleX = i.scaleX || 1), (o.scaleY = i.scaleY || 1)),
				o
			);
		},
		setData: function (t) {
			var e = this.options,
				i = this.imageData,
				n = this.canvasData,
				r = {};
			if (this.ready && !this.disabled && nt(t)) {
				var o = !1;
				e.rotatable &&
					b(t.rotate) &&
					t.rotate !== i.rotate &&
					((i.rotate = t.rotate), (o = !0)),
					e.scalable &&
						(b(t.scaleX) &&
							t.scaleX !== i.scaleX &&
							((i.scaleX = t.scaleX), (o = !0)),
						b(t.scaleY) &&
							t.scaleY !== i.scaleY &&
							((i.scaleY = t.scaleY), (o = !0))),
					o && this.renderCanvas(!0, !0);
				var s = i.width / i.naturalWidth;
				b(t.x) && (r.left = t.x * s + n.left),
					b(t.y) && (r.top = t.y * s + n.top),
					b(t.width) && (r.width = t.width * s),
					b(t.height) && (r.height = t.height * s),
					this.setCropBoxData(r);
			}
			return this;
		},
		getContainerData: function () {
			return this.ready ? D({}, this.containerData) : {};
		},
		getImageData: function () {
			return this.sized ? D({}, this.imageData) : {};
		},
		getCanvasData: function () {
			var t = this.canvasData,
				e = {};
			return (
				this.ready &&
					C(
						["left", "top", "width", "height", "naturalWidth", "naturalHeight"],
						function (i) {
							e[i] = t[i];
						}
					),
				e
			);
		},
		setCanvasData: function (t) {
			var e = this.canvasData,
				i = e.aspectRatio;
			return (
				this.ready &&
					!this.disabled &&
					nt(t) &&
					(b(t.left) && (e.left = t.left),
					b(t.top) && (e.top = t.top),
					b(t.width)
						? ((e.width = t.width), (e.height = t.width / i))
						: b(t.height) && ((e.height = t.height), (e.width = t.height * i)),
					this.renderCanvas(!0)),
				this
			);
		},
		getCropBoxData: function () {
			var t = this.cropBoxData,
				e;
			return (
				this.ready &&
					this.cropped &&
					(e = { left: t.left, top: t.top, width: t.width, height: t.height }),
				e || {}
			);
		},
		setCropBoxData: function (t) {
			var e = this.cropBoxData,
				i = this.options.aspectRatio,
				n,
				r;
			return (
				this.ready &&
					this.cropped &&
					!this.disabled &&
					nt(t) &&
					(b(t.left) && (e.left = t.left),
					b(t.top) && (e.top = t.top),
					b(t.width) && t.width !== e.width && ((n = !0), (e.width = t.width)),
					b(t.height) &&
						t.height !== e.height &&
						((r = !0), (e.height = t.height)),
					i && (n ? (e.height = e.width / i) : r && (e.width = e.height * i)),
					this.renderCropBox()),
				this
			);
		},
		getCroppedCanvas: function () {
			var t =
				arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (!this.ready || !window.HTMLCanvasElement) return null;
			var e = this.canvasData,
				i = Ni(this.image, this.imageData, e, t);
			if (!this.cropped) return i;
			var n = this.getData(),
				r = n.x,
				o = n.y,
				s = n.width,
				l = n.height,
				f = i.width / Math.floor(e.naturalWidth);
			f !== 1 && ((r *= f), (o *= f), (s *= f), (l *= f));
			var h = s / l,
				c = Q({
					aspectRatio: h,
					width: t.maxWidth || 1 / 0,
					height: t.maxHeight || 1 / 0
				}),
				u = Q(
					{ aspectRatio: h, width: t.minWidth || 0, height: t.minHeight || 0 },
					"cover"
				),
				v = Q({
					aspectRatio: h,
					width: t.width || (f !== 1 ? i.width : s),
					height: t.height || (f !== 1 ? i.height : l)
				}),
				g = v.width,
				_ = v.height;
			(g = Math.min(c.width, Math.max(u.width, g))),
				(_ = Math.min(c.height, Math.max(u.height, _)));
			var m = document.createElement("canvas"),
				x = m.getContext("2d");
			(m.width = st(g)),
				(m.height = st(_)),
				(x.fillStyle = t.fillColor || "transparent"),
				x.fillRect(0, 0, g, _);
			var T = t.imageSmoothingEnabled,
				O = T === void 0 ? !0 : T,
				w = t.imageSmoothingQuality;
			(x.imageSmoothingEnabled = O), w && (x.imageSmoothingQuality = w);
			var M = i.width,
				d = i.height,
				y = r,
				R = o,
				L,
				V,
				J,
				$,
				q,
				H;
			y <= -s || y > M
				? ((y = 0), (L = 0), (J = 0), (q = 0))
				: y <= 0
				? ((J = -y), (y = 0), (L = Math.min(M, s + y)), (q = L))
				: y <= M && ((J = 0), (L = Math.min(s, M - y)), (q = L)),
				L <= 0 || R <= -l || R > d
					? ((R = 0), (V = 0), ($ = 0), (H = 0))
					: R <= 0
					? (($ = -R), (R = 0), (V = Math.min(d, l + R)), (H = V))
					: R <= d && (($ = 0), (V = Math.min(l, d - R)), (H = V));
			var k = [y, R, L, V];
			if (q > 0 && H > 0) {
				var tt = g / s;
				k.push(J * tt, $ * tt, q * tt, H * tt);
			}
			return (
				x.drawImage.apply(
					x,
					[i].concat(
						De(
							k.map(function (_t) {
								return Math.floor(st(_t));
							})
						)
					)
				),
				m
			);
		},
		setAspectRatio: function (t) {
			var e = this.options;
			return (
				!this.disabled &&
					!Nt(t) &&
					((e.aspectRatio = Math.max(0, t) || NaN),
					this.ready &&
						(this.initCropBox(), this.cropped && this.renderCropBox())),
				this
			);
		},
		setDragMode: function (t) {
			var e = this.options,
				i = this.dragBox,
				n = this.face;
			if (this.ready && !this.disabled) {
				var r = t === Jt,
					o = e.movable && t === Ce;
				(t = r || o ? t : Re),
					(e.dragMode = t),
					mt(i, gt, t),
					ot(i, Lt, r),
					ot(i, Bt, o),
					e.cropBoxMovable || (mt(n, gt, t), ot(n, Lt, r), ot(n, Bt, o));
			}
			return this;
		}
	},
	Vi = X.Cropper,
	Gi = (function () {
		function a(t) {
			var e =
				arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			if ((ri(this, a), !t || !bi.test(t.tagName)))
				throw new Error(
					"The first argument is required and must be an <img> or <canvas> element."
				);
			(this.element = t),
				(this.options = D({}, me, nt(e) && e)),
				(this.cropped = !1),
				(this.disabled = !1),
				(this.pointers = {}),
				(this.ready = !1),
				(this.reloading = !1),
				(this.replaced = !1),
				(this.sized = !1),
				(this.sizing = !1),
				this.init();
		}
		return (
			ni(
				a,
				[
					{
						key: "init",
						value: function () {
							var e = this.element,
								i = e.tagName.toLowerCase(),
								n;
							if (!e[E]) {
								if (((e[E] = this), i === "img")) {
									if (
										((this.isImg = !0),
										(n = e.getAttribute("src") || ""),
										(this.originalUrl = n),
										!n)
									)
										return;
									n = e.src;
								} else
									i === "canvas" &&
										window.HTMLCanvasElement &&
										(n = e.toDataURL());
								this.load(n);
							}
						}
					},
					{
						key: "load",
						value: function (e) {
							var i = this;
							if (e) {
								(this.url = e), (this.imageData = {});
								var n = this.element,
									r = this.options;
								if (
									(!r.rotatable && !r.scalable && (r.checkOrientation = !1),
									!r.checkOrientation || !window.ArrayBuffer)
								) {
									this.clone();
									return;
								}
								if (gi.test(e)) {
									mi.test(e) ? this.read(Li(e)) : this.clone();
									return;
								}
								var o = new XMLHttpRequest(),
									s = this.clone.bind(this);
								(this.reloading = !0),
									(this.xhr = o),
									(o.onabort = s),
									(o.onerror = s),
									(o.ontimeout = s),
									(o.onprogress = function () {
										o.getResponseHeader("content-type") !== ge && o.abort();
									}),
									(o.onload = function () {
										i.read(o.response);
									}),
									(o.onloadend = function () {
										(i.reloading = !1), (i.xhr = null);
									}),
									r.checkCrossOrigin && we(e) && n.crossOrigin && (e = ye(e)),
									o.open("GET", e, !0),
									(o.responseType = "arraybuffer"),
									(o.withCredentials = n.crossOrigin === "use-credentials"),
									o.send();
							}
						}
					},
					{
						key: "read",
						value: function (e) {
							var i = this.options,
								n = this.imageData,
								r = zi(e),
								o = 0,
								s = 1,
								l = 1;
							if (r > 1) {
								this.url = Bi(e, ge);
								var f = Hi(r);
								(o = f.rotate), (s = f.scaleX), (l = f.scaleY);
							}
							i.rotatable && (n.rotate = o),
								i.scalable && ((n.scaleX = s), (n.scaleY = l)),
								this.clone();
						}
					},
					{
						key: "clone",
						value: function () {
							var e = this.element,
								i = this.url,
								n = e.crossOrigin,
								r = i;
							this.options.checkCrossOrigin &&
								we(i) &&
								(n || (n = "anonymous"), (r = ye(i))),
								(this.crossOrigin = n),
								(this.crossOriginUrl = r);
							var o = document.createElement("img");
							n && (o.crossOrigin = n),
								(o.src = r || i),
								(o.alt = e.alt || "The image to crop"),
								(this.image = o),
								(o.onload = this.start.bind(this)),
								(o.onerror = this.stop.bind(this)),
								A(o, he),
								e.parentNode.insertBefore(o, e.nextSibling);
						}
					},
					{
						key: "start",
						value: function () {
							var e = this,
								i = this.image;
							(i.onload = null), (i.onerror = null), (this.sizing = !0);
							var n =
									X.navigator &&
									/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
										X.navigator.userAgent
									),
								r = function (f, h) {
									D(e.imageData, {
										naturalWidth: f,
										naturalHeight: h,
										aspectRatio: f / h
									}),
										(e.initialImageData = D({}, e.imageData)),
										(e.sizing = !1),
										(e.sized = !0),
										e.build();
								};
							if (i.naturalWidth && !n) {
								r(i.naturalWidth, i.naturalHeight);
								return;
							}
							var o = document.createElement("img"),
								s = document.body || document.documentElement;
							(this.sizingImage = o),
								(o.onload = function () {
									r(o.width, o.height), n || s.removeChild(o);
								}),
								(o.src = i.src),
								n ||
									((o.style.cssText =
										"left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
									s.appendChild(o));
						}
					},
					{
						key: "stop",
						value: function () {
							var e = this.image;
							(e.onload = null),
								(e.onerror = null),
								e.parentNode.removeChild(e),
								(this.image = null);
						}
					},
					{
						key: "build",
						value: function () {
							if (!(!this.sized || this.ready)) {
								var e = this.element,
									i = this.options,
									n = this.image,
									r = e.parentNode,
									o = document.createElement("div");
								o.innerHTML = wi;
								var s = o.querySelector(".".concat(E, "-container")),
									l = s.querySelector(".".concat(E, "-canvas")),
									f = s.querySelector(".".concat(E, "-drag-box")),
									h = s.querySelector(".".concat(E, "-crop-box")),
									c = h.querySelector(".".concat(E, "-face"));
								(this.container = r),
									(this.cropper = s),
									(this.canvas = l),
									(this.dragBox = f),
									(this.cropBox = h),
									(this.viewBox = s.querySelector(".".concat(E, "-view-box"))),
									(this.face = c),
									l.appendChild(n),
									A(e, S),
									r.insertBefore(s, e.nextSibling),
									this.isImg || Y(n, he),
									this.initPreview(),
									this.bind(),
									(i.initialAspectRatio =
										Math.max(0, i.initialAspectRatio) || NaN),
									(i.aspectRatio = Math.max(0, i.aspectRatio) || NaN),
									(i.viewMode =
										Math.max(0, Math.min(3, Math.round(i.viewMode))) || 0),
									A(h, S),
									i.guides ||
										A(h.getElementsByClassName("".concat(E, "-dashed")), S),
									i.center ||
										A(h.getElementsByClassName("".concat(E, "-center")), S),
									i.background && A(s, "".concat(E, "-bg")),
									i.highlight || A(c, fi),
									i.cropBoxMovable && (A(c, Bt), mt(c, gt, Zt)),
									i.cropBoxResizable ||
										(A(h.getElementsByClassName("".concat(E, "-line")), S),
										A(h.getElementsByClassName("".concat(E, "-point")), S)),
									this.render(),
									(this.ready = !0),
									this.setDragMode(i.dragMode),
									i.autoCrop && this.crop(),
									this.setData(i.data),
									N(i.ready) && B(e, de, i.ready, { once: !0 }),
									ht(e, de);
							}
						}
					},
					{
						key: "unbuild",
						value: function () {
							this.ready &&
								((this.ready = !1),
								this.unbind(),
								this.resetPreview(),
								this.cropper.parentNode.removeChild(this.cropper),
								Y(this.element, S));
						}
					},
					{
						key: "uncreate",
						value: function () {
							this.ready
								? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
								: this.sizing
								? ((this.sizingImage.onload = null),
								  (this.sizing = !1),
								  (this.sized = !1))
								: this.reloading
								? ((this.xhr.onabort = null), this.xhr.abort())
								: this.image && this.stop();
						}
					}
				],
				[
					{
						key: "noConflict",
						value: function () {
							return (window.Cropper = Vi), a;
						}
					},
					{
						key: "setDefaults",
						value: function (e) {
							D(me, nt(e) && e);
						}
					}
				]
			),
			a
		);
	})();
D(Gi.prototype, Pi, Wi, Yi, Xi, Ui, ji);
var ze = (function () {
		if (typeof Map < "u") return Map;
		function a(t, e) {
			var i = -1;
			return (
				t.some(function (n, r) {
					return n[0] === e ? ((i = r), !0) : !1;
				}),
				i
			);
		}
		return (function () {
			function t() {
				this.__entries__ = [];
			}
			return (
				Object.defineProperty(t.prototype, "size", {
					get: function () {
						return this.__entries__.length;
					},
					enumerable: !0,
					configurable: !0
				}),
				(t.prototype.get = function (e) {
					var i = a(this.__entries__, e),
						n = this.__entries__[i];
					return n && n[1];
				}),
				(t.prototype.set = function (e, i) {
					var n = a(this.__entries__, e);
					~n ? (this.__entries__[n][1] = i) : this.__entries__.push([e, i]);
				}),
				(t.prototype.delete = function (e) {
					var i = this.__entries__,
						n = a(i, e);
					~n && i.splice(n, 1);
				}),
				(t.prototype.has = function (e) {
					return !!~a(this.__entries__, e);
				}),
				(t.prototype.clear = function () {
					this.__entries__.splice(0);
				}),
				(t.prototype.forEach = function (e, i) {
					i === void 0 && (i = null);
					for (var n = 0, r = this.__entries__; n < r.length; n++) {
						var o = r[n];
						e.call(i, o[1], o[0]);
					}
				}),
				t
			);
		})();
	})(),
	Ut =
		typeof window < "u" &&
		typeof document < "u" &&
		window.document === document,
	Ot = (function () {
		return typeof global < "u" && global.Math === Math
			? global
			: typeof self < "u" && self.Math === Math
			? self
			: typeof window < "u" && window.Math === Math
			? window
			: Function("return this")();
	})(),
	qi = (function () {
		return typeof requestAnimationFrame == "function"
			? requestAnimationFrame.bind(Ot)
			: function (a) {
					return setTimeout(function () {
						return a(Date.now());
					}, 1e3 / 60);
			  };
	})(),
	Fi = 2;
function Ki(a, t) {
	var e = !1,
		i = !1,
		n = 0;
	function r() {
		e && ((e = !1), a()), i && s();
	}
	function o() {
		qi(r);
	}
	function s() {
		var l = Date.now();
		if (e) {
			if (l - n < Fi) return;
			i = !0;
		} else (e = !0), (i = !1), setTimeout(o, t);
		n = l;
	}
	return s;
}
var Qi = 20,
	Zi = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
	Ji = typeof MutationObserver < "u",
	$i = (function () {
		function a() {
			(this.connected_ = !1),
				(this.mutationEventsAdded_ = !1),
				(this.mutationsObserver_ = null),
				(this.observers_ = []),
				(this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
				(this.refresh = Ki(this.refresh.bind(this), Qi));
		}
		return (
			(a.prototype.addObserver = function (t) {
				~this.observers_.indexOf(t) || this.observers_.push(t),
					this.connected_ || this.connect_();
			}),
			(a.prototype.removeObserver = function (t) {
				var e = this.observers_,
					i = e.indexOf(t);
				~i && e.splice(i, 1),
					!e.length && this.connected_ && this.disconnect_();
			}),
			(a.prototype.refresh = function () {
				var t = this.updateObservers_();
				t && this.refresh();
			}),
			(a.prototype.updateObservers_ = function () {
				var t = this.observers_.filter(function (e) {
					return e.gatherActive(), e.hasActive();
				});
				return (
					t.forEach(function (e) {
						return e.broadcastActive();
					}),
					t.length > 0
				);
			}),
			(a.prototype.connect_ = function () {
				!Ut ||
					this.connected_ ||
					(document.addEventListener("transitionend", this.onTransitionEnd_),
					window.addEventListener("resize", this.refresh),
					Ji
						? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
						  this.mutationsObserver_.observe(document, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0
						  }))
						: (document.addEventListener("DOMSubtreeModified", this.refresh),
						  (this.mutationEventsAdded_ = !0)),
					(this.connected_ = !0));
			}),
			(a.prototype.disconnect_ = function () {
				!Ut ||
					!this.connected_ ||
					(document.removeEventListener("transitionend", this.onTransitionEnd_),
					window.removeEventListener("resize", this.refresh),
					this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
					this.mutationEventsAdded_ &&
						document.removeEventListener("DOMSubtreeModified", this.refresh),
					(this.mutationsObserver_ = null),
					(this.mutationEventsAdded_ = !1),
					(this.connected_ = !1));
			}),
			(a.prototype.onTransitionEnd_ = function (t) {
				var e = t.propertyName,
					i = e === void 0 ? "" : e,
					n = Zi.some(function (r) {
						return !!~i.indexOf(r);
					});
				n && this.refresh();
			}),
			(a.getInstance = function () {
				return this.instance_ || (this.instance_ = new a()), this.instance_;
			}),
			(a.instance_ = null),
			a
		);
	})(),
	He = function (a, t) {
		for (var e = 0, i = Object.keys(t); e < i.length; e++) {
			var n = i[e];
			Object.defineProperty(a, n, {
				value: t[n],
				enumerable: !1,
				writable: !1,
				configurable: !0
			});
		}
		return a;
	},
	lt = function (a) {
		var t = a && a.ownerDocument && a.ownerDocument.defaultView;
		return t || Ot;
	},
	Pe = Rt(0, 0, 0, 0);
function Tt(a) {
	return parseFloat(a) || 0;
}
function _e(a) {
	for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
	return t.reduce(function (i, n) {
		var r = a["border-" + n + "-width"];
		return i + Tt(r);
	}, 0);
}
function ta(a) {
	for (
		var t = ["top", "right", "bottom", "left"], e = {}, i = 0, n = t;
		i < n.length;
		i++
	) {
		var r = n[i],
			o = a["padding-" + r];
		e[r] = Tt(o);
	}
	return e;
}
function ea(a) {
	var t = a.getBBox();
	return Rt(0, 0, t.width, t.height);
}
function ia(a) {
	var t = a.clientWidth,
		e = a.clientHeight;
	if (!t && !e) return Pe;
	var i = lt(a).getComputedStyle(a),
		n = ta(i),
		r = n.left + n.right,
		o = n.top + n.bottom,
		s = Tt(i.width),
		l = Tt(i.height);
	if (
		(i.boxSizing === "border-box" &&
			(Math.round(s + r) !== t && (s -= _e(i, "left", "right") + r),
			Math.round(l + o) !== e && (l -= _e(i, "top", "bottom") + o)),
		!ra(a))
	) {
		var f = Math.round(s + r) - t,
			h = Math.round(l + o) - e;
		Math.abs(f) !== 1 && (s -= f), Math.abs(h) !== 1 && (l -= h);
	}
	return Rt(n.left, n.top, s, l);
}
var aa = (function () {
	return typeof SVGGraphicsElement < "u"
		? function (a) {
				return a instanceof lt(a).SVGGraphicsElement;
		  }
		: function (a) {
				return a instanceof lt(a).SVGElement && typeof a.getBBox == "function";
		  };
})();
function ra(a) {
	return a === lt(a).document.documentElement;
}
function na(a) {
	return Ut ? (aa(a) ? ea(a) : ia(a)) : Pe;
}
function oa(a) {
	var t = a.x,
		e = a.y,
		i = a.width,
		n = a.height,
		r = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
		o = Object.create(r.prototype);
	return (
		He(o, {
			x: t,
			y: e,
			width: i,
			height: n,
			top: e,
			right: t + i,
			bottom: n + e,
			left: t
		}),
		o
	);
}
function Rt(a, t, e, i) {
	return { x: a, y: t, width: e, height: i };
}
var sa = (function () {
		function a(t) {
			(this.broadcastWidth = 0),
				(this.broadcastHeight = 0),
				(this.contentRect_ = Rt(0, 0, 0, 0)),
				(this.target = t);
		}
		return (
			(a.prototype.isActive = function () {
				var t = na(this.target);
				return (
					(this.contentRect_ = t),
					t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
				);
			}),
			(a.prototype.broadcastRect = function () {
				var t = this.contentRect_;
				return (
					(this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
				);
			}),
			a
		);
	})(),
	ha = (function () {
		function a(t, e) {
			var i = oa(e);
			He(this, { target: t, contentRect: i });
		}
		return a;
	})(),
	ca = (function () {
		function a(t, e, i) {
			if (
				((this.activeObservations_ = []),
				(this.observations_ = new ze()),
				typeof t != "function")
			)
				throw new TypeError(
					"The callback provided as parameter 1 is not a function."
				);
			(this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = i);
		}
		return (
			(a.prototype.observe = function (t) {
				if (!arguments.length)
					throw new TypeError("1 argument required, but only 0 present.");
				if (!(typeof Element > "u" || !(Element instanceof Object))) {
					if (!(t instanceof lt(t).Element))
						throw new TypeError('parameter 1 is not of type "Element".');
					var e = this.observations_;
					e.has(t) ||
						(e.set(t, new sa(t)),
						this.controller_.addObserver(this),
						this.controller_.refresh());
				}
			}),
			(a.prototype.unobserve = function (t) {
				if (!arguments.length)
					throw new TypeError("1 argument required, but only 0 present.");
				if (!(typeof Element > "u" || !(Element instanceof Object))) {
					if (!(t instanceof lt(t).Element))
						throw new TypeError('parameter 1 is not of type "Element".');
					var e = this.observations_;
					e.has(t) &&
						(e.delete(t), e.size || this.controller_.removeObserver(this));
				}
			}),
			(a.prototype.disconnect = function () {
				this.clearActive(),
					this.observations_.clear(),
					this.controller_.removeObserver(this);
			}),
			(a.prototype.gatherActive = function () {
				var t = this;
				this.clearActive(),
					this.observations_.forEach(function (e) {
						e.isActive() && t.activeObservations_.push(e);
					});
			}),
			(a.prototype.broadcastActive = function () {
				if (this.hasActive()) {
					var t = this.callbackCtx_,
						e = this.activeObservations_.map(function (i) {
							return new ha(i.target, i.broadcastRect());
						});
					this.callback_.call(t, e, t), this.clearActive();
				}
			}),
			(a.prototype.clearActive = function () {
				this.activeObservations_.splice(0);
			}),
			(a.prototype.hasActive = function () {
				return this.activeObservations_.length > 0;
			}),
			a
		);
	})(),
	We = typeof WeakMap < "u" ? new WeakMap() : new ze(),
	Ye = (function () {
		function a(t) {
			if (!(this instanceof a))
				throw new TypeError("Cannot call a class as a function.");
			if (!arguments.length)
				throw new TypeError("1 argument required, but only 0 present.");
			var e = $i.getInstance(),
				i = new ca(t, e, this);
			We.set(this, i);
		}
		return a;
	})();
["observe", "unobserve", "disconnect"].forEach(function (a) {
	Ye.prototype[a] = function () {
		var t;
		return (t = We.get(this))[a].apply(t, arguments);
	};
});
var wa = (function () {
	return typeof Ot.ResizeObserver < "u" ? Ot.ResizeObserver : Ye;
})();
function xe(a) {
	let t, e, i, n, r, o;
	const s = [fa, la],
		l = [];
	function f(h, c) {
		return h[1] === "video" ? 0 : 1;
	}
	return (
		(e = f(a)),
		(i = l[e] = s[e](a)),
		{
			c() {
				(t = ct("button")), i.c(), p(t, "class", "svelte-xbxfke");
			},
			m(h, c) {
				U(h, t, c),
					l[e].m(t, null),
					(n = !0),
					r ||
						((o = qe(t, "click", function () {
							Fe(a[1] === "image" ? a[5] : a[6]) &&
								(a[1] === "image" ? a[5] : a[6]).apply(this, arguments);
						})),
						(r = !0));
			},
			p(h, c) {
				a = h;
				let u = e;
				(e = f(a)),
					e === u
						? l[e].p(a, c)
						: (jt(),
						  G(l[u], 1, 1, () => {
								l[u] = null;
						  }),
						  Vt(),
						  (i = l[e]),
						  i ? i.p(a, c) : ((i = l[e] = s[e](a)), i.c()),
						  W(i, 1),
						  i.m(t, null));
			},
			i(h) {
				n || (W(i), (n = !0));
			},
			o(h) {
				G(i), (n = !1);
			},
			d(h) {
				h && j(t), l[e].d(), (r = !1), o();
			}
		}
	);
}
function la(a) {
	let t, e, i;
	return (
		(e = new Je({})),
		{
			c() {
				(t = ct("div")), Gt(e.$$.fragment), p(t, "class", "icon svelte-xbxfke");
			},
			m(n, r) {
				U(n, t, r), qt(e, t, null), (i = !0);
			},
			p: I,
			i(n) {
				i || (W(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				G(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				n && j(t), Ft(e);
			}
		}
	);
}
function fa(a) {
	let t, e, i, n;
	const r = [da, ua],
		o = [];
	function s(l, f) {
		return l[4] ? 0 : 1;
	}
	return (
		(t = s(a)),
		(e = o[t] = r[t](a)),
		{
			c() {
				e.c(), (i = Qe());
			},
			m(l, f) {
				o[t].m(l, f), U(l, i, f), (n = !0);
			},
			p(l, f) {
				let h = t;
				(t = s(l)),
					t !== h &&
						(jt(),
						G(o[h], 1, 1, () => {
							o[h] = null;
						}),
						Vt(),
						(e = o[t]),
						e || ((e = o[t] = r[t](l)), e.c()),
						W(e, 1),
						e.m(i.parentNode, i));
			},
			i(l) {
				n || (W(e), (n = !0));
			},
			o(l) {
				G(e), (n = !1);
			},
			d(l) {
				o[t].d(l), l && j(i);
			}
		}
	);
}
function ua(a) {
	let t, e, i;
	return (
		(e = new ti({})),
		{
			c() {
				(t = ct("div")), Gt(e.$$.fragment), p(t, "class", "icon svelte-xbxfke");
			},
			m(n, r) {
				U(n, t, r), qt(e, t, null), (i = !0);
			},
			i(n) {
				i || (W(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				G(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				n && j(t), Ft(e);
			}
		}
	);
}
function da(a) {
	let t, e, i;
	return (
		(e = new ii({})),
		{
			c() {
				(t = ct("div")), Gt(e.$$.fragment), p(t, "class", "icon svelte-xbxfke");
			},
			m(n, r) {
				U(n, t, r), qt(e, t, null), (i = !0);
			},
			i(n) {
				i || (W(e.$$.fragment, n), (i = !0));
			},
			o(n) {
				G(e.$$.fragment, n), (i = !1);
			},
			d(n) {
				n && j(t), Ft(e);
			}
		}
	);
}
function pa(a) {
	let t,
		e,
		i,
		n,
		r = !a[0] && xe(a);
	return {
		c() {
			(t = ct("div")),
				(e = ct("video")),
				(i = je()),
				r && r.c(),
				p(e, "class", "svelte-xbxfke"),
				re(e, "flip", a[2]),
				p(t, "class", "wrap svelte-xbxfke");
		},
		m(o, s) {
			U(o, t, s), Z(t, e), a[9](e), Z(t, i), r && r.m(t, null), (n = !0);
		},
		p(o, [s]) {
			(!n || s & 4) && re(e, "flip", o[2]),
				o[0]
					? r &&
					  (jt(),
					  G(r, 1, 1, () => {
							r = null;
					  }),
					  Vt())
					: r
					? (r.p(o, s), s & 1 && W(r, 1))
					: ((r = xe(o)), r.c(), W(r, 1), r.m(t, null));
		},
		i(o) {
			n || (W(r), (n = !0));
		},
		o(o) {
			G(r), (n = !1);
		},
		d(o) {
			o && j(t), a[9](null), r && r.d();
		}
	};
}
function va(a, t, e) {
	let i,
		n,
		{ streaming: r = !1 } = t,
		{ pending: o = !1 } = t,
		{ mode: s = "image" } = t,
		{ mirror_webcam: l } = t,
		{ include_audio: f } = t;
	const h = Ve();
	Ge(() => (n = document.createElement("canvas")));
	async function c() {
		try {
			(_ = await navigator.mediaDevices.getUserMedia({ video: !0, audio: f })),
				e(3, (i.srcObject = _), i),
				e(3, (i.muted = !0), i),
				i.play();
		} catch (w) {
			if (w instanceof DOMException && w.name == "NotAllowedError")
				return (
					h("error", "Please allow access to the webcam for recording."), null
				);
			throw w;
		}
	}
	function u() {
		var w = n.getContext("2d");
		if (i.videoWidth && i.videoHeight) {
			(n.width = i.videoWidth),
				(n.height = i.videoHeight),
				w.drawImage(i, 0, 0, i.videoWidth, i.videoHeight);
			var M = n.toDataURL("image/png");
			h(r ? "stream" : "capture", M);
		}
	}
	let v = !1,
		g = [],
		_,
		m,
		x;
	function T() {
		if (v) {
			x.stop();
			let w = new Blob(g, { type: m }),
				M = new FileReader();
			(M.onload = function (d) {
				d.target &&
					h("capture", {
						data: d.target.result,
						name: "sample." + m.substring(6),
						is_example: !1
					});
			}),
				M.readAsDataURL(w);
		} else {
			g = [];
			let w = ["video/webm", "video/mp4"];
			for (let M of w)
				if (MediaRecorder.isTypeSupported(M)) {
					m = M;
					break;
				}
			if (m === null) {
				console.error("No supported MediaRecorder mimeType");
				return;
			}
			(x = new MediaRecorder(_, { mimeType: m })),
				x.addEventListener("dataavailable", function (M) {
					g.push(M.data);
				}),
				x.start(200);
		}
		e(4, (v = !v));
	}
	c(),
		r &&
			s === "image" &&
			window.setInterval(() => {
				i && !o && u();
			}, 500);
	function O(w) {
		Ke[w ? "unshift" : "push"](() => {
			(i = w), e(3, i);
		});
	}
	return (
		(a.$$set = (w) => {
			"streaming" in w && e(0, (r = w.streaming)),
				"pending" in w && e(7, (o = w.pending)),
				"mode" in w && e(1, (s = w.mode)),
				"mirror_webcam" in w && e(2, (l = w.mirror_webcam)),
				"include_audio" in w && e(8, (f = w.include_audio));
		}),
		[r, s, l, i, v, u, T, o, f, O]
	);
}
class ya extends bt {
	constructor(t) {
		super(),
			wt(this, t, va, pa, yt, {
				streaming: 0,
				pending: 7,
				mode: 1,
				mirror_webcam: 2,
				include_audio: 8
			});
	}
}
export { Gi as C, ba as U, ya as W, wa as i };
//# sourceMappingURL=StaticImage.svelte_svelte_type_style_lang-8f029e82.js.map
