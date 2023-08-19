import { c as Jn, a as Qn, g as er } from "./module-a3cf0cc4.js";
const xt = new Set(),
	tr = Jn({
		encode:
			({ call: e }) =>
			async (t, n) => {
				const r = await e("encode", { encoderId: t, timeslice: n });
				return xt.delete(t), r;
			},
		instantiate:
			({ call: e }) =>
			async (t, n) => {
				const r = Qn(xt),
					o = await e("instantiate", {
						encoderId: r,
						mimeType: t,
						sampleRate: n
					});
				return { encoderId: r, port: o };
			},
		register:
			({ call: e }) =>
			(t) =>
				e("register", { port: t }, [t])
	}),
	nr = (e) => {
		const t = new Worker(e);
		return tr(t);
	},
	rr = `(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)s.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(s),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),a=r(906),s=r(344);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:'The requested method called "\${method}" is not supported.',status:o}),s=(0,e.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:t}),i=(0,e.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:t}),c=(0,e.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:n}),u=(e,t)=>async r=>{let{data:{id:n,method:o,params:c}}=r;const u=t[o];try{if(void 0===u)throw a({method:o});const t=void 0===c?u():u(c);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=(0,l.generateUniqueNumber)(d);return d.set(a,(()=>{o(),n.close(),d.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw c({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=u(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>{e.onmessage=null,e.close()},h=new WeakMap,g=new WeakMap,v=(e=>{const t=(r=e,{...r,connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return h.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=h.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var r;return e=>{const r=(e=>{if(g.has(e))return g.get(e);const t=new Map;return g.set(e,t),t})(e);e.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,s)=>{const i=(0,l.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)}))},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),w=async(e,t)=>{const r=v(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},x=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(x),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(x,y),b=new Map,E=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,s,i)}})):n.encode(r,null)})(m,M),A=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(b),_=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):s.record(n,a,r)},c})(m,x,A),I=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);p(self,{encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await I(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=_(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await w(b,t)}}})})()})();`,
	or = new Blob([rr], { type: "application/javascript; charset=utf-8" }),
	nn = URL.createObjectURL(or),
	wt = nr(nn),
	Ue = wt.encode,
	rn = wt.instantiate,
	sr = wt.register;
URL.revokeObjectURL(nn);
const ar = (e) => (t, n) => {
		if (e === null) throw new Error("A native BlobEvent could not be created.");
		return new e(t, n);
	},
	ir = (e, t) => (n, r, o) => {
		const s = [];
		let a = r,
			c = 0;
		for (; c < n.byteLength; )
			if (a === null) {
				const i = t(n, c);
				if (i === null) break;
				const { length: u, type: d } = i;
				(a = d), (c += u);
			} else {
				const i = e(n, c, a, o);
				if (i === null) break;
				const { content: u, length: d } = i;
				(a = null), (c += d), u !== null && s.push(u);
			}
		return { contents: s, currentElementType: a, offset: c };
	},
	cr = (e, t) =>
		class {
			constructor(r = null) {
				(this._listeners = new WeakMap()),
					(this._nativeEventTarget = r === null ? e() : r);
			}
			addEventListener(r, o, s) {
				if (o !== null) {
					let a = this._listeners.get(o);
					a === void 0 &&
						((a = t(this, o)),
						typeof o == "function" && this._listeners.set(o, a)),
						this._nativeEventTarget.addEventListener(r, a, s);
				}
			}
			dispatchEvent(r) {
				return this._nativeEventTarget.dispatchEvent(r);
			}
			removeEventListener(r, o, s) {
				const a = o === null ? void 0 : this._listeners.get(o);
				this._nativeEventTarget.removeEventListener(
					r,
					a === void 0 ? null : a,
					s
				);
			}
		},
	ur = (e) => () => {
		if (e === null)
			throw new Error("A native EventTarget could not be created.");
		return e.document.createElement("p");
	},
	vt = (e = "") => {
		try {
			return new DOMException(e, "InvalidModificationError");
		} catch (t) {
			return (
				(t.code = 13), (t.message = e), (t.name = "InvalidModificationError"), t
			);
		}
	},
	lr = () => {
		try {
			return new DOMException("", "InvalidStateError");
		} catch (e) {
			return (e.code = 11), (e.name = "InvalidStateError"), e;
		}
	},
	dr = (e) =>
		e !== null &&
		e.BlobEvent !== void 0 &&
		e.MediaStream !== void 0 &&
		(e.MediaRecorder === void 0 || e.MediaRecorder.isTypeSupported !== void 0)
			? new Promise((t) => {
					if (e.MediaRecorder === void 0) return t(!0);
					const n = e.document.createElement("canvas");
					if ((n.getContext("2d"), typeof n.captureStream != "function"))
						return t(!1);
					const r = n.captureStream(),
						o = "audio/webm";
					try {
						const s = new e.MediaRecorder(r, { mimeType: o });
						s.addEventListener("dataavailable", ({ data: a }) =>
							t(a.type === o)
						),
							s.start(),
							setTimeout(() => s.stop(), 10);
					} catch (s) {
						t(s.name === "NotSupportedError");
					}
			  })
			: Promise.resolve(!1),
	fr = (e, t, n, r, o, s, a) =>
		class extends s {
			constructor(i, u = {}) {
				const { mimeType: d } = u;
				if (
					a !== null &&
					(d === void 0 ||
						(a.isTypeSupported !== void 0 && a.isTypeSupported(d)))
				) {
					const l = e(a, i, u);
					super(l), (this._internalMediaRecorder = l);
				} else if (d !== void 0 && o.some((l) => l.test(d)))
					super(),
						a !== null &&
						a.isTypeSupported !== void 0 &&
						a.isTypeSupported("audio/webm;codecs=pcm")
							? (this._internalMediaRecorder = r(this, a, i, d))
							: (this._internalMediaRecorder = n(this, i, d));
				else throw (a !== null && e(a, i, u), t());
				(this._ondataavailable = null),
					(this._onerror = null),
					(this._onpause = null),
					(this._onresume = null),
					(this._onstart = null),
					(this._onstop = null);
			}
			get mimeType() {
				return this._internalMediaRecorder.mimeType;
			}
			get ondataavailable() {
				return this._ondataavailable === null
					? this._ondataavailable
					: this._ondataavailable[0];
			}
			set ondataavailable(i) {
				if (
					(this._ondataavailable !== null &&
						this.removeEventListener("dataavailable", this._ondataavailable[1]),
					typeof i == "function")
				) {
					const u = i.bind(this);
					this.addEventListener("dataavailable", u),
						(this._ondataavailable = [i, u]);
				} else this._ondataavailable = null;
			}
			get onerror() {
				return this._onerror === null ? this._onerror : this._onerror[0];
			}
			set onerror(i) {
				if (
					(this._onerror !== null &&
						this.removeEventListener("error", this._onerror[1]),
					typeof i == "function")
				) {
					const u = i.bind(this);
					this.addEventListener("error", u), (this._onerror = [i, u]);
				} else this._onerror = null;
			}
			get onpause() {
				return this._onpause === null ? this._onpause : this._onpause[0];
			}
			set onpause(i) {
				if (
					(this._onpause !== null &&
						this.removeEventListener("pause", this._onpause[1]),
					typeof i == "function")
				) {
					const u = i.bind(this);
					this.addEventListener("pause", u), (this._onpause = [i, u]);
				} else this._onpause = null;
			}
			get onresume() {
				return this._onresume === null ? this._onresume : this._onresume[0];
			}
			set onresume(i) {
				if (
					(this._onresume !== null &&
						this.removeEventListener("resume", this._onresume[1]),
					typeof i == "function")
				) {
					const u = i.bind(this);
					this.addEventListener("resume", u), (this._onresume = [i, u]);
				} else this._onresume = null;
			}
			get onstart() {
				return this._onstart === null ? this._onstart : this._onstart[0];
			}
			set onstart(i) {
				if (
					(this._onstart !== null &&
						this.removeEventListener("start", this._onstart[1]),
					typeof i == "function")
				) {
					const u = i.bind(this);
					this.addEventListener("start", u), (this._onstart = [i, u]);
				} else this._onstart = null;
			}
			get onstop() {
				return this._onstop === null ? this._onstop : this._onstop[0];
			}
			set onstop(i) {
				if (
					(this._onstop !== null &&
						this.removeEventListener("stop", this._onstop[1]),
					typeof i == "function")
				) {
					const u = i.bind(this);
					this.addEventListener("stop", u), (this._onstop = [i, u]);
				} else this._onstop = null;
			}
			get state() {
				return this._internalMediaRecorder.state;
			}
			pause() {
				return this._internalMediaRecorder.pause();
			}
			resume() {
				return this._internalMediaRecorder.resume();
			}
			start(i) {
				return this._internalMediaRecorder.start(i);
			}
			stop() {
				return this._internalMediaRecorder.stop();
			}
			static isTypeSupported(i) {
				return (
					(a !== null &&
						a.isTypeSupported !== void 0 &&
						a.isTypeSupported(i)) ||
					o.some((u) => u.test(i))
				);
			}
		},
	hr = (e) => (e !== null && e.BlobEvent !== void 0 ? e.BlobEvent : null),
	pr = (e, t) => (n, r, o) => {
		const s = [],
			a = new WeakMap(),
			c = new WeakMap(),
			i = new n(r, o),
			u = new WeakMap();
		let d = !0;
		return (
			(i.addEventListener = ((l) => (p, m, w) => {
				let f = m;
				return (
					typeof m == "function" &&
						(p === "dataavailable"
							? ((f = (h) => {
									setTimeout(() => {
										if (d && i.state === "inactive") s.push(h.data);
										else {
											if (s.length > 0) {
												const g = h.data;
												Object.defineProperty(h, "data", {
													value: new Blob([...s, g], { type: g.type })
												}),
													(s.length = 0);
											}
											m.call(i, h);
										}
									});
							  }),
							  a.set(m, f))
							: p === "error"
							? ((f = (h) => {
									if (h.error === void 0)
										m.call(i, new ErrorEvent("error", { error: e() }));
									else if (h.error.name === "UnknownError") {
										const g = h.error.message;
										m.call(i, new ErrorEvent("error", { error: e(g) }));
									} else
										h instanceof ErrorEvent
											? m.call(i, h)
											: m.call(i, new ErrorEvent("error", { error: h.error }));
							  }),
							  c.set(m, f))
							: p === "stop" &&
							  ((f = (h) => {
									(d = !1), setTimeout(() => m.call(i, h));
							  }),
							  u.set(m, f))),
					l.call(i, p, f, w)
				);
			})(i.addEventListener)),
			(i.dispatchEvent = ((l) => (p) => {
				let m;
				setTimeout(() => {
					(m = d), (d = !1);
				});
				const w = l.call(i, p);
				return setTimeout(() => (d = m)), w;
			})(i.dispatchEvent)),
			(i.removeEventListener = ((l) => (p, m, w) => {
				let f = m;
				if (typeof m == "function") {
					if (p === "dataavailable") {
						const h = a.get(m);
						h !== void 0 && (f = h);
					} else if (p === "error") {
						const h = c.get(m);
						h !== void 0 && (f = h);
					} else if (p === "stop") {
						const h = u.get(m);
						h !== void 0 && (f = h);
					}
				}
				return l.call(i, p, f, w);
			})(i.removeEventListener)),
			(i.start = ((l) => (p) => {
				if (
					o.mimeType !== void 0 &&
					o.mimeType.startsWith("audio/") &&
					r.getVideoTracks().length > 0
				)
					throw t();
				return (d = p !== void 0), p === void 0 ? l.call(i) : l.call(i, p);
			})(i.start)),
			i
		);
	},
	mr = (e) =>
		e === null || e.MediaRecorder === void 0 ? null : e.MediaRecorder,
	$e = () => {
		try {
			return new DOMException("", "NotSupportedError");
		} catch (e) {
			return (e.code = 9), (e.name = "NotSupportedError"), e;
		}
	},
	gr =
		(e) =>
		(t, n, r, o = 2) => {
			const s = e(t, n);
			if (s === null) return s;
			const { length: a, value: c } = s;
			if (r === "master") return { content: null, length: a };
			if (n + a + c > t.byteLength) return null;
			if (r === "binary") {
				const i = (c / Float32Array.BYTES_PER_ELEMENT - 1) / o,
					u = Array.from({ length: o }, () => new Float32Array(i));
				for (let d = 0; d < i; d += 1) {
					const l = d * o + 1;
					for (let p = 0; p < o; p += 1)
						u[p][d] = t.getFloat32(
							n + a + (l + p) * Float32Array.BYTES_PER_ELEMENT,
							!0
						);
				}
				return { content: u, length: a + c };
			}
			return { content: null, length: a + c };
		},
	wr = (e) => (t, n) => {
		const r = e(t, n);
		if (r === null) return r;
		const { length: o, value: s } = r;
		return s === 35
			? { length: o, type: "binary" }
			: s === 46 ||
			  s === 97 ||
			  s === 88713574 ||
			  s === 106212971 ||
			  s === 139690087 ||
			  s === 172351395 ||
			  s === 256095861
			? { length: o, type: "master" }
			: { length: o, type: "unknown" };
	},
	vr = (e) => (t, n) => {
		const r = e(t, n);
		if (r === null) return r;
		const o = n + Math.floor((r - 1) / 8);
		if (o + r > t.byteLength) return null;
		let a = t.getUint8(o) & ((1 << (8 - (r % 8))) - 1);
		for (let c = 1; c < r; c += 1) a = (a << 8) + t.getUint8(o + c);
		return { length: r, value: a };
	},
	Pt = Symbol.observable || "@@observable";
function _r(e) {
	return (
		Symbol.observable ||
			(typeof e == "function" && e.prototype && e.prototype[Symbol.observable]
				? ((e.prototype[Pt] = e.prototype[Symbol.observable]),
				  delete e.prototype[Symbol.observable])
				: ((e[Pt] = e[Symbol.observable]), delete e[Symbol.observable])),
		e
	);
}
const ke = () => {},
	Ut = (e) => {
		throw e;
	};
function yr(e) {
	return e
		? e.next && e.error && e.complete
			? e
			: {
					complete: (e.complete ?? ke).bind(e),
					error: (e.error ?? Ut).bind(e),
					next: (e.next ?? ke).bind(e)
			  }
		: { complete: ke, error: Ut, next: ke };
}
const Er = (e) => (t, n, r) =>
		e((o) => {
			const s = (a) => o.next(a);
			return t.addEventListener(n, s, r), () => t.removeEventListener(n, s, r);
		}),
	Ar = (e, t) => {
		const n = () => {},
			r = (o) => typeof o[0] == "function";
		return (o) => {
			const s = (...a) => {
				const c = o(r(a) ? t({ next: a[0] }) : t(...a));
				return c !== void 0 ? c : n;
			};
			return (
				(s[Symbol.observable] = () => ({
					subscribe: (...a) => ({ unsubscribe: s(...a) })
				})),
				e(s)
			);
		};
	},
	br = Ar(_r, yr),
	on = Er(br);
/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var Cr = (e, t) => {
		if (typeof e != "string") throw new TypeError("expected a string");
		return e
			.trim()
			.replace(/([a-z])([A-Z])/g, "$1-$2")
			.replace(/\W/g, (n) => (/[À-ž]/.test(n) ? n : "-"))
			.replace(/^-+|-+$/g, "")
			.replace(/-{2,}/g, (n) => (t && t.condense ? "-" : n))
			.toLowerCase();
	},
	at = {},
	Tr = {
		get exports() {
			return at;
		},
		set exports(e) {
			at = e;
		}
	};
(function (e) {
	var t = function (n) {
		var r,
			o,
			s = /\w+/.exec(n);
		if (s) o = s[0];
		else return "an";
		var a = o.toLowerCase(),
			c = ["honest", "hour", "hono"];
		for (r in c) if (a.indexOf(c[r]) == 0) return "an";
		if (a.length == 1) return "aedhilmnorsx".indexOf(a) >= 0 ? "an" : "a";
		if (
			o.match(
				/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/
			)
		)
			return "an";
		var i = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
		for (r = 0; r < i.length; r++) if (a.match(i[r])) return "a";
		return o.match(/^U[NK][AIEO]/)
			? "a"
			: o == o.toUpperCase()
			? "aedhilmnorsx".indexOf(a[0]) >= 0
				? "an"
				: "a"
			: "aeiou".indexOf(a[0]) >= 0 ||
			  a.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)
			? "an"
			: "a";
	};
	e.exports = t;
})(Tr);
const Mr = at,
	Bt = (e, t) =>
		t === void 0
			? e
			: t.reduce((n, r) => {
					if (r === "capitalize") {
						const o = n.charAt(0).toUpperCase(),
							s = n.slice(1);
						return `${o}${s}`;
					}
					return r === "dashify"
						? Cr(n)
						: r === "prependIndefiniteArticle"
						? `${Mr(n)} ${n}`
						: n;
			  }, e),
	Nr = (e) => {
		const t = e.name + e.modifiers.map((n) => `\\.${n}\\(\\)`).join("");
		return new RegExp(`\\$\\{${t}}`, "g");
	},
	Dt = (e, t) => {
		const n = /\${([^.}]+)((\.[^(]+\(\))*)}/g,
			r = [];
		let o = n.exec(e);
		for (; o !== null; ) {
			const a = { modifiers: [], name: o[1] };
			if (o[3] !== void 0) {
				const c = /\.[^(]+\(\)/g;
				let i = c.exec(o[2]);
				for (; i !== null; )
					a.modifiers.push(i[0].slice(1, -2)), (i = c.exec(o[2]));
			}
			r.push(a), (o = n.exec(e));
		}
		const s = r.reduce(
			(a, c) =>
				a
					.map((i) =>
						typeof i == "string"
							? i
									.split(Nr(c))
									.reduce(
										(u, d, l) =>
											l === 0
												? [d]
												: c.name in t
												? [...u, Bt(t[c.name], c.modifiers), d]
												: [...u, (p) => Bt(p[c.name], c.modifiers), d],
										[]
									)
							: [i]
					)
					.reduce((i, u) => [...i, ...u], []),
			[e]
		);
		return (a) =>
			s
				.reduce((c, i) => (typeof i == "string" ? [...c, i] : [...c, i(a)]), [])
				.join("");
	},
	Ge = (e, t = {}) => {
		const n = e.code === void 0 ? void 0 : Dt(e.code, t),
			r = e.message === void 0 ? void 0 : Dt(e.message, t);
		function o(s = {}, a) {
			const c =
					a === void 0 &&
					(s instanceof Error ||
						(s.code !== void 0 && s.code.slice(-9) === "Exception")),
				{ cause: i, missingParameters: u } = c
					? { cause: s, missingParameters: {} }
					: { cause: a, missingParameters: s },
				d = r === void 0 ? new Error() : new Error(r(u));
			return (
				i !== null && (d.cause = i),
				n !== void 0 && (d.code = n(u)),
				e.status !== void 0 && (d.status = e.status),
				d
			);
		}
		return o;
	},
	qe = {
		INTERNAL_ERROR: -32603,
		INVALID_PARAMS: -32602,
		METHOD_NOT_FOUND: -32601
	};
Ge({
	message: 'The requested method called "${method}" is not supported.',
	status: qe.METHOD_NOT_FOUND
});
Ge({
	message:
		'The handler of the method called "${method}" returned no required result.',
	status: qe.INTERNAL_ERROR
});
Ge({
	message:
		'The handler of the method called "${method}" returned an unexpected result.',
	status: qe.INTERNAL_ERROR
});
Ge({
	message:
		'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
	status: qe.INVALID_PARAMS
});
const Sr = (e, t, n) => async (r) => {
		const o = new e([n], { type: "application/javascript; charset=utf-8" }),
			s = t.createObjectURL(o);
		try {
			await r(s);
		} finally {
			t.revokeObjectURL(s);
		}
	},
	Or =
		(e) =>
		({ data: t }) => {
			const { id: n } = t;
			if (n !== null) {
				const r = e.get(n);
				if (r !== void 0) {
					const { reject: o, resolve: s } = r;
					e.delete(n),
						t.error === void 0 ? s(t.result) : o(new Error(t.error.message));
				}
			}
		},
	Rr =
		(e) =>
		(t, n) =>
		(r, o = []) =>
			new Promise((s, a) => {
				const c = e(t);
				t.set(c, { reject: a, resolve: s }), n.postMessage({ id: c, ...r }, o);
			}),
	Ir =
		(e, t, n, r) =>
		(o, s, a = {}) => {
			const c = new o(s, "recorder-audio-worklet-processor", {
					...a,
					channelCountMode: "explicit",
					numberOfInputs: 1,
					numberOfOutputs: 0
				}),
				i = new Map(),
				u = t(i, c.port),
				d = n(c.port, "message")(e(i));
			c.port.start();
			let l = "inactive";
			return (
				Object.defineProperties(c, {
					pause: {
						get() {
							return async () => (
								r(["recording"], l), (l = "paused"), u({ method: "pause" })
							);
						}
					},
					port: {
						get() {
							throw new Error(
								"The port of a RecorderAudioWorkletNode can't be accessed."
							);
						}
					},
					record: {
						get() {
							return async (p) => (
								r(["inactive"], l),
								(l = "recording"),
								u({ method: "record", params: { encoderPort: p } }, [p])
							);
						}
					},
					resume: {
						get() {
							return async () => (
								r(["paused"], l), (l = "recording"), u({ method: "resume" })
							);
						}
					},
					stop: {
						get() {
							return async () => {
								r(["paused", "recording"], l), (l = "stopped");
								try {
									await u({ method: "stop" });
								} finally {
									d();
								}
							};
						}
					}
				}),
				c
			);
		},
	kr = (e, t) => {
		if (!e.includes(t))
			throw new Error(
				`Expected the state to be ${e
					.map((n) => `"${n}"`)
					.join(" or ")} but it was "${t}".`
			);
	},
	Lr =
		'(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();',
	xr = Sr(Blob, URL, Lr),
	Pr = Ir(Or, Rr(er), on, kr),
	Wt = (e, t, n) => ({
		endTime: t,
		insertTime: n,
		type: "exponentialRampToValue",
		value: e
	}),
	Vt = (e, t, n) => ({
		endTime: t,
		insertTime: n,
		type: "linearRampToValue",
		value: e
	}),
	it = (e, t) => ({ startTime: t, type: "setValue", value: e }),
	sn = (e, t, n) => ({
		duration: n,
		startTime: t,
		type: "setValueCurve",
		values: e
	}),
	an = (e, t, { startTime: n, target: r, timeConstant: o }) =>
		r + (t - r) * Math.exp((n - e) / o),
	me = (e) => e.type === "exponentialRampToValue",
	Be = (e) => e.type === "linearRampToValue",
	re = (e) => me(e) || Be(e),
	_t = (e) => e.type === "setValue",
	ee = (e) => e.type === "setValueCurve",
	De = (e, t, n, r) => {
		const o = e[t];
		return o === void 0
			? r
			: re(o) || _t(o)
			? o.value
			: ee(o)
			? o.values[o.values.length - 1]
			: an(n, De(e, t - 1, o.startTime, r), o);
	},
	Ft = (e, t, n, r, o) =>
		n === void 0
			? [r.insertTime, o]
			: re(n)
			? [n.endTime, n.value]
			: _t(n)
			? [n.startTime, n.value]
			: ee(n)
			? [n.startTime + n.duration, n.values[n.values.length - 1]]
			: [n.startTime, De(e, t - 1, n.startTime, o)],
	ct = (e) => e.type === "cancelAndHold",
	ut = (e) => e.type === "cancelScheduledValues",
	ne = (e) =>
		ct(e) || ut(e) ? e.cancelTime : me(e) || Be(e) ? e.endTime : e.startTime,
	jt = (e, t, n, { endTime: r, value: o }) =>
		n === o
			? o
			: (0 < n && 0 < o) || (n < 0 && o < 0)
			? n * (o / n) ** ((e - t) / (r - t))
			: 0,
	$t = (e, t, n, { endTime: r, value: o }) => n + ((e - t) / (r - t)) * (o - n),
	Ur = (e, t) => {
		const n = Math.floor(t),
			r = Math.ceil(t);
		return n === r ? e[n] : (1 - (t - n)) * e[n] + (1 - (r - t)) * e[r];
	},
	Br = (e, { duration: t, startTime: n, values: r }) => {
		const o = ((e - n) / t) * (r.length - 1);
		return Ur(r, o);
	},
	Le = (e) => e.type === "setTarget";
class Dr {
	constructor(t) {
		(this._automationEvents = []),
			(this._currenTime = 0),
			(this._defaultValue = t);
	}
	[Symbol.iterator]() {
		return this._automationEvents[Symbol.iterator]();
	}
	add(t) {
		const n = ne(t);
		if (ct(t) || ut(t)) {
			const r = this._automationEvents.findIndex((s) =>
					ut(t) && ee(s) ? s.startTime + s.duration >= n : ne(s) >= n
				),
				o = this._automationEvents[r];
			if (
				(r !== -1 &&
					(this._automationEvents = this._automationEvents.slice(0, r)),
				ct(t))
			) {
				const s = this._automationEvents[this._automationEvents.length - 1];
				if (o !== void 0 && re(o)) {
					if (Le(s)) throw new Error("The internal list is malformed.");
					const a = ee(s) ? s.startTime + s.duration : ne(s),
						c = ee(s) ? s.values[s.values.length - 1] : s.value,
						i = me(o) ? jt(n, a, c, o) : $t(n, a, c, o),
						u = me(o) ? Wt(i, n, this._currenTime) : Vt(i, n, this._currenTime);
					this._automationEvents.push(u);
				}
				s !== void 0 &&
					Le(s) &&
					this._automationEvents.push(it(this.getValue(n), n)),
					s !== void 0 &&
						ee(s) &&
						s.startTime + s.duration > n &&
						(this._automationEvents[this._automationEvents.length - 1] = sn(
							new Float32Array([6, 7]),
							s.startTime,
							n - s.startTime
						));
			}
		} else {
			const r = this._automationEvents.findIndex((a) => ne(a) > n),
				o =
					r === -1
						? this._automationEvents[this._automationEvents.length - 1]
						: this._automationEvents[r - 1];
			if (o !== void 0 && ee(o) && ne(o) + o.duration > n) return !1;
			const s = me(t)
				? Wt(t.value, t.endTime, this._currenTime)
				: Be(t)
				? Vt(t.value, n, this._currenTime)
				: t;
			if (r === -1) this._automationEvents.push(s);
			else {
				if (ee(t) && n + t.duration > ne(this._automationEvents[r])) return !1;
				this._automationEvents.splice(r, 0, s);
			}
		}
		return !0;
	}
	flush(t) {
		const n = this._automationEvents.findIndex((r) => ne(r) > t);
		if (n > 1) {
			const r = this._automationEvents.slice(n - 1),
				o = r[0];
			Le(o) &&
				r.unshift(
					it(
						De(this._automationEvents, n - 2, o.startTime, this._defaultValue),
						o.startTime
					)
				),
				(this._automationEvents = r);
		}
	}
	getValue(t) {
		if (this._automationEvents.length === 0) return this._defaultValue;
		const n = this._automationEvents.findIndex((a) => ne(a) > t),
			r = this._automationEvents[n],
			o = (n === -1 ? this._automationEvents.length : n) - 1,
			s = this._automationEvents[o];
		if (s !== void 0 && Le(s) && (r === void 0 || !re(r) || r.insertTime > t))
			return an(
				t,
				De(this._automationEvents, o - 1, s.startTime, this._defaultValue),
				s
			);
		if (s !== void 0 && _t(s) && (r === void 0 || !re(r))) return s.value;
		if (
			s !== void 0 &&
			ee(s) &&
			(r === void 0 || !re(r) || s.startTime + s.duration > t)
		)
			return t < s.startTime + s.duration
				? Br(t, s)
				: s.values[s.values.length - 1];
		if (s !== void 0 && re(s) && (r === void 0 || !re(r))) return s.value;
		if (r !== void 0 && me(r)) {
			const [a, c] = Ft(this._automationEvents, o, s, r, this._defaultValue);
			return jt(t, a, c, r);
		}
		if (r !== void 0 && Be(r)) {
			const [a, c] = Ft(this._automationEvents, o, s, r, this._defaultValue);
			return $t(t, a, c, r);
		}
		return this._defaultValue;
	}
}
const Wr = (e) => ({ cancelTime: e, type: "cancelAndHold" }),
	Vr = (e) => ({ cancelTime: e, type: "cancelScheduledValues" }),
	Fr = (e, t) => ({ endTime: t, type: "exponentialRampToValue", value: e }),
	jr = (e, t) => ({ endTime: t, type: "linearRampToValue", value: e }),
	$r = (e, t, n) => ({
		startTime: t,
		target: e,
		timeConstant: n,
		type: "setTarget"
	}),
	Gr = () => new DOMException("", "AbortError"),
	qr =
		(e) =>
		(t, n, [r, o, s], a) => {
			e(t[o], [n, r, s], (c) => c[0] === n && c[1] === r, a);
		},
	zr = (e) => (t, n, r) => {
		const o = [];
		for (let s = 0; s < r.numberOfInputs; s += 1) o.push(new Set());
		e.set(t, {
			activeInputs: o,
			outputs: new Set(),
			passiveInputs: new WeakMap(),
			renderer: n
		});
	},
	Hr = (e) => (t, n) => {
		e.set(t, {
			activeInputs: new Set(),
			passiveInputs: new WeakMap(),
			renderer: n
		});
	},
	ge = new WeakSet(),
	cn = new WeakMap(),
	un = new WeakMap(),
	ln = new WeakMap(),
	dn = new WeakMap(),
	fn = new WeakMap(),
	hn = new WeakMap(),
	lt = new WeakMap(),
	dt = new WeakMap(),
	ft = new WeakMap(),
	pn = {
		construct() {
			return pn;
		}
	},
	Yr = (e) => {
		try {
			const t = new Proxy(e, pn);
			new t();
		} catch {
			return !1;
		}
		return !0;
	},
	Gt =
		/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
	qt = (e, t) => {
		const n = [];
		let r = e.replace(/^[\s]+/, ""),
			o = r.match(Gt);
		for (; o !== null; ) {
			const s = o[1].slice(1, -1),
				a = o[0]
					.replace(/([\s]+)?;?$/, "")
					.replace(s, new URL(s, t).toString());
			n.push(a),
				(r = r.slice(o[0].length).replace(/^[\s]+/, "")),
				(o = r.match(Gt));
		}
		return [n.join(";"), r];
	},
	zt = (e) => {
		if (e !== void 0 && !Array.isArray(e))
			throw new TypeError(
				"The parameterDescriptors property of given value for processorCtor is not an array."
			);
	},
	Ht = (e) => {
		if (!Yr(e))
			throw new TypeError(
				"The given value for processorCtor should be a constructor."
			);
		if (e.prototype === null || typeof e.prototype != "object")
			throw new TypeError(
				"The given value for processorCtor should have a prototype."
			);
	},
	Xr = (e, t, n, r, o, s, a, c, i, u, d, l, p) => {
		let m = 0;
		return (w, f, h = { credentials: "omit" }) => {
			const g = d.get(w);
			if (g !== void 0 && g.has(f)) return Promise.resolve();
			const _ = u.get(w);
			if (_ !== void 0) {
				const v = _.get(f);
				if (v !== void 0) return v;
			}
			const A = s(w),
				T =
					A.audioWorklet === void 0
						? o(f)
								.then(([v, E]) => {
									const [y, C] = qt(v, E),
										N = `${y};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${C}
})})(window,'_AWGS')`;
									return n(N);
								})
								.then(() => {
									const v = p._AWGS.pop();
									if (v === void 0) throw new SyntaxError();
									r(A.currentTime, A.sampleRate, () =>
										v(
											class {},
											void 0,
											(E, y) => {
												if (E.trim() === "") throw t();
												const C = dt.get(A);
												if (C !== void 0) {
													if (C.has(E)) throw t();
													Ht(y), zt(y.parameterDescriptors), C.set(E, y);
												} else
													Ht(y),
														zt(y.parameterDescriptors),
														dt.set(A, new Map([[E, y]]));
											},
											A.sampleRate,
											void 0,
											void 0
										)
									);
								})
						: Promise.all([o(f), Promise.resolve(e(l, l))]).then(
								([[v, E], y]) => {
									const C = m + 1;
									m = C;
									const [N, I] = qt(v, E),
										B = `${N};((AudioWorkletProcessor,registerProcessor)=>{${I}
})(${
											y
												? "AudioWorkletProcessor"
												: "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"
										},(n,p)=>registerProcessor(n,class extends p{${
											y
												? ""
												: "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"
										}process(i,o,p){${
											y
												? ""
												: "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"
										}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${C}',class extends AudioWorkletProcessor{process(){return !1}})`,
										U = new Blob([B], {
											type: "application/javascript; charset=utf-8"
										}),
										R = URL.createObjectURL(U);
									return A.audioWorklet
										.addModule(R, h)
										.then(() => {
											if (c(A)) return A;
											const P = a(A);
											return P.audioWorklet.addModule(R, h).then(() => P);
										})
										.then((P) => {
											if (i === null) throw new SyntaxError();
											try {
												new i(P, `__sac${C}`);
											} catch {
												throw new SyntaxError();
											}
										})
										.finally(() => URL.revokeObjectURL(R));
								}
						  );
			return (
				_ === void 0 ? u.set(w, new Map([[f, T]])) : _.set(f, T),
				T.then(() => {
					const v = d.get(w);
					v === void 0 ? d.set(w, new Set([f])) : v.add(f);
				}).finally(() => {
					const v = u.get(w);
					v !== void 0 && v.delete(f);
				}),
				T
			);
		};
	},
	K = (e, t) => {
		const n = e.get(t);
		if (n === void 0)
			throw new Error("A value with the given key could not be found.");
		return n;
	},
	ze = (e, t) => {
		const n = Array.from(e).filter(t);
		if (n.length > 1) throw Error("More than one element was found.");
		if (n.length === 0) throw Error("No element was found.");
		const [r] = n;
		return e.delete(r), r;
	},
	mn = (e, t, n, r) => {
		const o = K(e, t),
			s = ze(o, (a) => a[0] === n && a[1] === r);
		return o.size === 0 && e.delete(t), s;
	},
	be = (e) => K(hn, e),
	ye = (e) => {
		if (ge.has(e)) throw new Error("The AudioNode is already stored.");
		ge.add(e), be(e).forEach((t) => t(!0));
	},
	gn = (e) => "port" in e,
	He = (e) => {
		if (!ge.has(e)) throw new Error("The AudioNode is not stored.");
		ge.delete(e), be(e).forEach((t) => t(!1));
	},
	ht = (e, t) => {
		!gn(e) && t.every((n) => n.size === 0) && He(e);
	},
	Zr = (e, t, n, r, o, s, a, c, i, u, d, l, p) => {
		const m = new WeakMap();
		return (w, f, h, g, _) => {
			const { activeInputs: A, passiveInputs: T } = s(f),
				{ outputs: v } = s(w),
				E = c(w),
				y = (C) => {
					const N = i(f),
						I = i(w);
					if (C) {
						const M = mn(T, w, h, g);
						e(A, w, M, !1), !_ && !l(w) && n(I, N, h, g), p(f) && ye(f);
					} else {
						const M = r(A, w, h, g);
						t(T, g, M, !1), !_ && !l(w) && o(I, N, h, g);
						const x = a(f);
						if (x === 0) d(f) && ht(f, A);
						else {
							const k = m.get(f);
							k !== void 0 && clearTimeout(k),
								m.set(
									f,
									setTimeout(() => {
										d(f) && ht(f, A);
									}, x * 1e3)
								);
						}
					}
				};
			return u(v, [f, h, g], (C) => C[0] === f && C[1] === h && C[2] === g, !0)
				? (E.add(y), d(w) ? e(A, w, [h, g, y], !0) : t(T, g, [w, h, y], !0), !0)
				: !1;
		};
	},
	Kr =
		(e) =>
		(t, n, [r, o, s], a) => {
			const c = t.get(r);
			c === void 0
				? t.set(r, new Set([[o, n, s]]))
				: e(c, [o, n, s], (i) => i[0] === o && i[1] === n, a);
		},
	Jr = (e) => (t, n) => {
		const r = e(t, {
			channelCount: 1,
			channelCountMode: "explicit",
			channelInterpretation: "discrete",
			gain: 0
		});
		n.connect(r).connect(t.destination);
		const o = () => {
			n.removeEventListener("ended", o), n.disconnect(r), r.disconnect();
		};
		n.addEventListener("ended", o);
	},
	Qr = (e) => (t, n) => {
		e(t).add(n);
	},
	yt = (e, t) => e.context === t,
	Yt = (e) => {
		try {
			e.copyToChannel(new Float32Array(1), 0, -1);
		} catch {
			return !1;
		}
		return !0;
	},
	ue = () => new DOMException("", "IndexSizeError"),
	eo = (e) => {
		e.getChannelData = ((t) => (n) => {
			try {
				return t.call(e, n);
			} catch (r) {
				throw r.code === 12 ? ue() : r;
			}
		})(e.getChannelData);
	},
	to = { numberOfChannels: 1 },
	no = (e, t, n, r, o, s, a, c) => {
		let i = null;
		return class wn {
			constructor(d) {
				if (o === null)
					throw new Error(
						"Missing the native OfflineAudioContext constructor."
					);
				const {
					length: l,
					numberOfChannels: p,
					sampleRate: m
				} = { ...to, ...d };
				i === null && (i = new o(1, 1, 44100));
				const w =
					r !== null && t(s, s)
						? new r({ length: l, numberOfChannels: p, sampleRate: m })
						: i.createBuffer(p, l, m);
				if (w.numberOfChannels === 0) throw n();
				return (
					typeof w.copyFromChannel != "function"
						? (a(w), eo(w))
						: t(Yt, () => Yt(w)) || c(w),
					e.add(w),
					w
				);
			}
			static [Symbol.hasInstance](d) {
				return (
					(d !== null &&
						typeof d == "object" &&
						Object.getPrototypeOf(d) === wn.prototype) ||
					e.has(d)
				);
			}
		};
	},
	Ce = -34028234663852886e22,
	Ye = -Ce,
	oe = (e) => ge.has(e),
	ro = {
		buffer: null,
		channelCount: 2,
		channelCountMode: "max",
		channelInterpretation: "speakers",
		loop: !1,
		loopEnd: 0,
		loopStart: 0,
		playbackRate: 1
	},
	oo = (e, t, n, r, o, s, a, c) =>
		class extends e {
			constructor(u, d) {
				const l = s(u),
					p = { ...ro, ...d },
					m = o(l, p),
					w = a(l),
					f = w ? t() : null;
				super(u, !1, m, f),
					(this._audioBufferSourceNodeRenderer = f),
					(this._isBufferNullified = !1),
					(this._isBufferSet = p.buffer !== null),
					(this._nativeAudioBufferSourceNode = m),
					(this._onended = null),
					(this._playbackRate = n(this, w, m.playbackRate, Ye, Ce));
			}
			get buffer() {
				return this._isBufferNullified
					? null
					: this._nativeAudioBufferSourceNode.buffer;
			}
			set buffer(u) {
				if (((this._nativeAudioBufferSourceNode.buffer = u), u !== null)) {
					if (this._isBufferSet) throw r();
					this._isBufferSet = !0;
				}
			}
			get loop() {
				return this._nativeAudioBufferSourceNode.loop;
			}
			set loop(u) {
				this._nativeAudioBufferSourceNode.loop = u;
			}
			get loopEnd() {
				return this._nativeAudioBufferSourceNode.loopEnd;
			}
			set loopEnd(u) {
				this._nativeAudioBufferSourceNode.loopEnd = u;
			}
			get loopStart() {
				return this._nativeAudioBufferSourceNode.loopStart;
			}
			set loopStart(u) {
				this._nativeAudioBufferSourceNode.loopStart = u;
			}
			get onended() {
				return this._onended;
			}
			set onended(u) {
				const d = typeof u == "function" ? c(this, u) : null;
				this._nativeAudioBufferSourceNode.onended = d;
				const l = this._nativeAudioBufferSourceNode.onended;
				this._onended = l !== null && l === d ? u : l;
			}
			get playbackRate() {
				return this._playbackRate;
			}
			start(u = 0, d = 0, l) {
				if (
					(this._nativeAudioBufferSourceNode.start(u, d, l),
					this._audioBufferSourceNodeRenderer !== null &&
						(this._audioBufferSourceNodeRenderer.start =
							l === void 0 ? [u, d] : [u, d, l]),
					this.context.state !== "closed")
				) {
					ye(this);
					const p = () => {
						this._nativeAudioBufferSourceNode.removeEventListener("ended", p),
							oe(this) && He(this);
					};
					this._nativeAudioBufferSourceNode.addEventListener("ended", p);
				}
			}
			stop(u = 0) {
				this._nativeAudioBufferSourceNode.stop(u),
					this._audioBufferSourceNodeRenderer !== null &&
						(this._audioBufferSourceNodeRenderer.stop = u);
			}
		},
	so = (e, t, n, r, o) => () => {
		const s = new WeakMap();
		let a = null,
			c = null;
		const i = async (u, d) => {
			let l = n(u);
			const p = yt(l, d);
			if (!p) {
				const m = {
					buffer: l.buffer,
					channelCount: l.channelCount,
					channelCountMode: l.channelCountMode,
					channelInterpretation: l.channelInterpretation,
					loop: l.loop,
					loopEnd: l.loopEnd,
					loopStart: l.loopStart,
					playbackRate: l.playbackRate.value
				};
				(l = t(d, m)), a !== null && l.start(...a), c !== null && l.stop(c);
			}
			return (
				s.set(d, l),
				p
					? await e(d, u.playbackRate, l.playbackRate)
					: await r(d, u.playbackRate, l.playbackRate),
				await o(u, d, l),
				l
			);
		};
		return {
			set start(u) {
				a = u;
			},
			set stop(u) {
				c = u;
			},
			render(u, d) {
				const l = s.get(d);
				return l !== void 0 ? Promise.resolve(l) : i(u, d);
			}
		};
	},
	ao = (e) => "playbackRate" in e,
	io = (e) => "frequency" in e && "gain" in e,
	co = (e) => "offset" in e,
	uo = (e) => !("frequency" in e) && "gain" in e,
	lo = (e) => "detune" in e && "frequency" in e,
	fo = (e) => "pan" in e,
	z = (e) => K(cn, e),
	Te = (e) => K(ln, e),
	pt = (e, t) => {
		const { activeInputs: n } = z(e);
		n.forEach((o) =>
			o.forEach(([s]) => {
				t.includes(e) || pt(s, [...t, e]);
			})
		);
		const r = ao(e)
			? [e.playbackRate]
			: gn(e)
			? Array.from(e.parameters.values())
			: io(e)
			? [e.Q, e.detune, e.frequency, e.gain]
			: co(e)
			? [e.offset]
			: uo(e)
			? [e.gain]
			: lo(e)
			? [e.detune, e.frequency]
			: fo(e)
			? [e.pan]
			: [];
		for (const o of r) {
			const s = Te(o);
			s !== void 0 && s.activeInputs.forEach(([a]) => pt(a, t));
		}
		oe(e) && He(e);
	},
	ho = (e) => {
		pt(e.destination, []);
	},
	po = (e) =>
		e === void 0 ||
		typeof e == "number" ||
		(typeof e == "string" &&
			(e === "balanced" || e === "interactive" || e === "playback")),
	mo = (e, t, n, r, o, s, a, c) =>
		class extends e {
			constructor(u, d) {
				const l = s(u),
					p = a(l),
					m = o(l, d, p),
					w = p ? t(c) : null;
				super(u, !1, m, w),
					(this._isNodeOfNativeOfflineAudioContext = p),
					(this._nativeAudioDestinationNode = m);
			}
			get channelCount() {
				return this._nativeAudioDestinationNode.channelCount;
			}
			set channelCount(u) {
				if (this._isNodeOfNativeOfflineAudioContext) throw r();
				if (u > this._nativeAudioDestinationNode.maxChannelCount) throw n();
				this._nativeAudioDestinationNode.channelCount = u;
			}
			get channelCountMode() {
				return this._nativeAudioDestinationNode.channelCountMode;
			}
			set channelCountMode(u) {
				if (this._isNodeOfNativeOfflineAudioContext) throw r();
				this._nativeAudioDestinationNode.channelCountMode = u;
			}
			get maxChannelCount() {
				return this._nativeAudioDestinationNode.maxChannelCount;
			}
		},
	go = (e) => {
		const t = new WeakMap(),
			n = async (r, o) => {
				const s = o.destination;
				return t.set(o, s), await e(r, o, s), s;
			};
		return {
			render(r, o) {
				const s = t.get(o);
				return s !== void 0 ? Promise.resolve(s) : n(r, o);
			}
		};
	},
	wo = (e, t, n, r, o, s, a, c) => (i, u) => {
		const d = u.listener,
			l = () => {
				const v = new Float32Array(1),
					E = t(u, {
						channelCount: 1,
						channelCountMode: "explicit",
						channelInterpretation: "speakers",
						numberOfInputs: 9
					}),
					y = a(u);
				let C = !1,
					N = [0, 0, -1, 0, 1, 0],
					I = [0, 0, 0];
				const M = () => {
						if (C) return;
						C = !0;
						const U = r(u, 256, 9, 0);
						(U.onaudioprocess = ({ inputBuffer: R }) => {
							const P = [
								s(R, v, 0),
								s(R, v, 1),
								s(R, v, 2),
								s(R, v, 3),
								s(R, v, 4),
								s(R, v, 5)
							];
							P.some((S, L) => S !== N[L]) && (d.setOrientation(...P), (N = P));
							const D = [s(R, v, 6), s(R, v, 7), s(R, v, 8)];
							D.some((S, L) => S !== I[L]) && (d.setPosition(...D), (I = D));
						}),
							E.connect(U);
					},
					x = (U) => (R) => {
						R !== N[U] && ((N[U] = R), d.setOrientation(...N));
					},
					k = (U) => (R) => {
						R !== I[U] && ((I[U] = R), d.setPosition(...I));
					},
					B = (U, R, P) => {
						const D = n(u, {
							channelCount: 1,
							channelCountMode: "explicit",
							channelInterpretation: "discrete",
							offset: R
						});
						D.connect(E, 0, U),
							D.start(),
							Object.defineProperty(D.offset, "defaultValue", {
								get() {
									return R;
								}
							});
						const S = e({ context: i }, y, D.offset, Ye, Ce);
						return (
							c(
								S,
								"value",
								(L) => () => L.call(S),
								(L) => (W) => {
									try {
										L.call(S, W);
									} catch (G) {
										if (G.code !== 9) throw G;
									}
									M(), y && P(W);
								}
							),
							(S.cancelAndHoldAtTime = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.cancelAndHoldAtTime)),
							(S.cancelScheduledValues = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.cancelScheduledValues)),
							(S.exponentialRampToValueAtTime = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.exponentialRampToValueAtTime)),
							(S.linearRampToValueAtTime = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.linearRampToValueAtTime)),
							(S.setTargetAtTime = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.setTargetAtTime)),
							(S.setValueAtTime = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.setValueAtTime)),
							(S.setValueCurveAtTime = ((L) =>
								y
									? () => {
											throw o();
									  }
									: (...W) => {
											const G = L.apply(S, W);
											return M(), G;
									  })(S.setValueCurveAtTime)),
							S
						);
					};
				return {
					forwardX: B(0, 0, x(0)),
					forwardY: B(1, 0, x(1)),
					forwardZ: B(2, -1, x(2)),
					positionX: B(6, 0, k(0)),
					positionY: B(7, 0, k(1)),
					positionZ: B(8, 0, k(2)),
					upX: B(3, 0, x(3)),
					upY: B(4, 1, x(4)),
					upZ: B(5, 0, x(5))
				};
			},
			{
				forwardX: p,
				forwardY: m,
				forwardZ: w,
				positionX: f,
				positionY: h,
				positionZ: g,
				upX: _,
				upY: A,
				upZ: T
			} = d.forwardX === void 0 ? l() : d;
		return {
			get forwardX() {
				return p;
			},
			get forwardY() {
				return m;
			},
			get forwardZ() {
				return w;
			},
			get positionX() {
				return f;
			},
			get positionY() {
				return h;
			},
			get positionZ() {
				return g;
			},
			get upX() {
				return _;
			},
			get upY() {
				return A;
			},
			get upZ() {
				return T;
			}
		};
	},
	We = (e) => "context" in e,
	Me = (e) => We(e[0]),
	le = (e, t, n, r) => {
		for (const o of e)
			if (n(o)) {
				if (r) return !1;
				throw Error("The set contains at least one similar element.");
			}
		return e.add(t), !0;
	},
	Xt = (e, t, [n, r], o) => {
		le(e, [t, n, r], (s) => s[0] === t && s[1] === n, o);
	},
	Zt = (e, [t, n, r], o) => {
		const s = e.get(t);
		s === void 0
			? e.set(t, new Set([[n, r]]))
			: le(s, [n, r], (a) => a[0] === n, o);
	},
	vn = (e) => "inputs" in e,
	mt = (e, t, n, r) => {
		if (vn(t)) {
			const o = t.inputs[r];
			return e.connect(o, n, 0), [o, n, 0];
		}
		return e.connect(t, n, r), [t, n, r];
	},
	_n = (e, t, n) => {
		for (const r of e) if (r[0] === t && r[1] === n) return e.delete(r), r;
		return null;
	},
	vo = (e, t, n) => ze(e, (r) => r[0] === t && r[1] === n),
	yn = (e, t) => {
		if (!be(e).delete(t))
			throw new Error("Missing the expected event listener.");
	},
	En = (e, t, n) => {
		const r = K(e, t),
			o = ze(r, (s) => s[0] === n);
		return r.size === 0 && e.delete(t), o;
	},
	gt = (e, t, n, r) => {
		vn(t) ? e.disconnect(t.inputs[r], n, 0) : e.disconnect(t, n, r);
	},
	X = (e) => K(un, e),
	Ee = (e) => K(dn, e),
	ce = (e) => lt.has(e),
	Pe = (e) => !ge.has(e),
	Kt = (e, t) =>
		new Promise((n) => {
			if (t !== null) n(!0);
			else {
				const r = e.createScriptProcessor(256, 1, 1),
					o = e.createGain(),
					s = e.createBuffer(1, 2, 44100),
					a = s.getChannelData(0);
				(a[0] = 1), (a[1] = 1);
				const c = e.createBufferSource();
				(c.buffer = s),
					(c.loop = !0),
					c.connect(r).connect(e.destination),
					c.connect(o),
					c.disconnect(o),
					(r.onaudioprocess = (i) => {
						const u = i.inputBuffer.getChannelData(0);
						Array.prototype.some.call(u, (d) => d === 1) ? n(!0) : n(!1),
							c.stop(),
							(r.onaudioprocess = null),
							c.disconnect(r),
							r.disconnect(e.destination);
					}),
					c.start();
			}
		}),
	ot = (e, t) => {
		const n = new Map();
		for (const r of e)
			for (const o of r) {
				const s = n.get(o);
				n.set(o, s === void 0 ? 1 : s + 1);
			}
		n.forEach((r, o) => t(o, r));
	},
	Ve = (e) => "context" in e,
	_o = (e) => {
		const t = new Map();
		(e.connect = (
			(n) =>
			(r, o = 0, s = 0) => {
				const a = Ve(r) ? n(r, o, s) : n(r, o),
					c = t.get(r);
				return (
					c === void 0
						? t.set(r, [{ input: s, output: o }])
						: c.every((i) => i.input !== s || i.output !== o) &&
						  c.push({ input: s, output: o }),
					a
				);
			}
		)(e.connect.bind(e))),
			(e.disconnect = ((n) => (r, o, s) => {
				if ((n.apply(e), r === void 0)) t.clear();
				else if (typeof r == "number")
					for (const [a, c] of t) {
						const i = c.filter((u) => u.output !== r);
						i.length === 0 ? t.delete(a) : t.set(a, i);
					}
				else if (t.has(r))
					if (o === void 0) t.delete(r);
					else {
						const a = t.get(r);
						if (a !== void 0) {
							const c = a.filter(
								(i) => i.output !== o && (i.input !== s || s === void 0)
							);
							c.length === 0 ? t.delete(r) : t.set(r, c);
						}
					}
				for (const [a, c] of t)
					c.forEach((i) => {
						Ve(a) ? e.connect(a, i.output, i.input) : e.connect(a, i.output);
					});
			})(e.disconnect));
	},
	yo = (e, t, n, r) => {
		const { activeInputs: o, passiveInputs: s } = Te(t),
			{ outputs: a } = z(e),
			c = be(e),
			i = (u) => {
				const d = X(e),
					l = Ee(t);
				if (u) {
					const p = En(s, e, n);
					Xt(o, e, p, !1), !r && !ce(e) && d.connect(l, n);
				} else {
					const p = vo(o, e, n);
					Zt(s, p, !1), !r && !ce(e) && d.disconnect(l, n);
				}
			};
		return le(a, [t, n], (u) => u[0] === t && u[1] === n, !0)
			? (c.add(i), oe(e) ? Xt(o, e, [n, i], !0) : Zt(s, [e, n, i], !0), !0)
			: !1;
	},
	Eo = (e, t, n, r) => {
		const { activeInputs: o, passiveInputs: s } = z(t),
			a = _n(o[r], e, n);
		return a === null ? [mn(s, e, n, r)[2], !1] : [a[2], !0];
	},
	Ao = (e, t, n) => {
		const { activeInputs: r, passiveInputs: o } = Te(t),
			s = _n(r, e, n);
		return s === null ? [En(o, e, n)[1], !1] : [s[2], !0];
	},
	Et = (e, t, n, r, o) => {
		const [s, a] = Eo(e, n, r, o);
		if (
			(s !== null && (yn(e, s), a && !t && !ce(e) && gt(X(e), X(n), r, o)),
			oe(n))
		) {
			const { activeInputs: c } = z(n);
			ht(n, c);
		}
	},
	At = (e, t, n, r) => {
		const [o, s] = Ao(e, n, r);
		o !== null && (yn(e, o), s && !t && !ce(e) && X(e).disconnect(Ee(n), r));
	},
	bo = (e, t) => {
		const n = z(e),
			r = [];
		for (const o of n.outputs)
			Me(o) ? Et(e, t, ...o) : At(e, t, ...o), r.push(o[0]);
		return n.outputs.clear(), r;
	},
	Co = (e, t, n) => {
		const r = z(e),
			o = [];
		for (const s of r.outputs)
			s[1] === n &&
				(Me(s) ? Et(e, t, ...s) : At(e, t, ...s),
				o.push(s[0]),
				r.outputs.delete(s));
		return o;
	},
	To = (e, t, n, r, o) => {
		const s = z(e);
		return Array.from(s.outputs)
			.filter(
				(a) =>
					a[0] === n &&
					(r === void 0 || a[1] === r) &&
					(o === void 0 || a[2] === o)
			)
			.map(
				(a) => (
					Me(a) ? Et(e, t, ...a) : At(e, t, ...a), s.outputs.delete(a), a[0]
				)
			);
	},
	Mo = (e, t, n, r, o, s, a, c, i, u, d, l, p, m, w, f) =>
		class extends u {
			constructor(g, _, A, T) {
				super(A), (this._context = g), (this._nativeAudioNode = A);
				const v = d(g);
				l(v) && n(Kt, () => Kt(v, f)) !== !0 && _o(A),
					un.set(this, A),
					hn.set(this, new Set()),
					g.state !== "closed" && _ && ye(this),
					e(this, T, A);
			}
			get channelCount() {
				return this._nativeAudioNode.channelCount;
			}
			set channelCount(g) {
				this._nativeAudioNode.channelCount = g;
			}
			get channelCountMode() {
				return this._nativeAudioNode.channelCountMode;
			}
			set channelCountMode(g) {
				this._nativeAudioNode.channelCountMode = g;
			}
			get channelInterpretation() {
				return this._nativeAudioNode.channelInterpretation;
			}
			set channelInterpretation(g) {
				this._nativeAudioNode.channelInterpretation = g;
			}
			get context() {
				return this._context;
			}
			get numberOfInputs() {
				return this._nativeAudioNode.numberOfInputs;
			}
			get numberOfOutputs() {
				return this._nativeAudioNode.numberOfOutputs;
			}
			connect(g, _ = 0, A = 0) {
				if (_ < 0 || _ >= this._nativeAudioNode.numberOfOutputs) throw o();
				const T = d(this._context),
					v = w(T);
				if (p(g) || m(g)) throw s();
				if (We(g)) {
					const C = X(g);
					try {
						const I = mt(this._nativeAudioNode, C, _, A),
							M = Pe(this);
						(v || M) && this._nativeAudioNode.disconnect(...I),
							this.context.state !== "closed" && !M && Pe(g) && ye(g);
					} catch (I) {
						throw I.code === 12 ? s() : I;
					}
					if (t(this, g, _, A, v)) {
						const I = i([this], g);
						ot(I, r(v));
					}
					return g;
				}
				const E = Ee(g);
				if (E.name === "playbackRate" && E.maxValue === 1024) throw a();
				try {
					this._nativeAudioNode.connect(E, _),
						(v || Pe(this)) && this._nativeAudioNode.disconnect(E, _);
				} catch (C) {
					throw C.code === 12 ? s() : C;
				}
				if (yo(this, g, _, v)) {
					const C = i([this], g);
					ot(C, r(v));
				}
			}
			disconnect(g, _, A) {
				let T;
				const v = d(this._context),
					E = w(v);
				if (g === void 0) T = bo(this, E);
				else if (typeof g == "number") {
					if (g < 0 || g >= this.numberOfOutputs) throw o();
					T = Co(this, E, g);
				} else {
					if (
						(_ !== void 0 && (_ < 0 || _ >= this.numberOfOutputs)) ||
						(We(g) && A !== void 0 && (A < 0 || A >= g.numberOfInputs))
					)
						throw o();
					if (((T = To(this, E, g, _, A)), T.length === 0)) throw s();
				}
				for (const y of T) {
					const C = i([this], y);
					ot(C, c);
				}
			}
		},
	No =
		(e, t, n, r, o, s, a, c, i, u, d, l, p) =>
		(m, w, f, h = null, g = null) => {
			const _ = new Dr(f.defaultValue),
				A = w ? r(_) : null,
				T = {
					get defaultValue() {
						return f.defaultValue;
					},
					get maxValue() {
						return h === null ? f.maxValue : h;
					},
					get minValue() {
						return g === null ? f.minValue : g;
					},
					get value() {
						return f.value;
					},
					set value(v) {
						(f.value = v), T.setValueAtTime(v, m.context.currentTime);
					},
					cancelAndHoldAtTime(v) {
						if (typeof f.cancelAndHoldAtTime == "function")
							A === null && _.flush(m.context.currentTime),
								_.add(o(v)),
								f.cancelAndHoldAtTime(v);
						else {
							const E = Array.from(_).pop();
							A === null && _.flush(m.context.currentTime), _.add(o(v));
							const y = Array.from(_).pop();
							f.cancelScheduledValues(v),
								E !== y &&
									y !== void 0 &&
									(y.type === "exponentialRampToValue"
										? f.exponentialRampToValueAtTime(y.value, y.endTime)
										: y.type === "linearRampToValue"
										? f.linearRampToValueAtTime(y.value, y.endTime)
										: y.type === "setValue"
										? f.setValueAtTime(y.value, y.startTime)
										: y.type === "setValueCurve" &&
										  f.setValueCurveAtTime(y.values, y.startTime, y.duration));
						}
						return T;
					},
					cancelScheduledValues(v) {
						return (
							A === null && _.flush(m.context.currentTime),
							_.add(s(v)),
							f.cancelScheduledValues(v),
							T
						);
					},
					exponentialRampToValueAtTime(v, E) {
						if (v === 0) throw new RangeError();
						if (!Number.isFinite(E) || E < 0) throw new RangeError();
						return (
							A === null && _.flush(m.context.currentTime),
							_.add(a(v, E)),
							f.exponentialRampToValueAtTime(v, E),
							T
						);
					},
					linearRampToValueAtTime(v, E) {
						return (
							A === null && _.flush(m.context.currentTime),
							_.add(c(v, E)),
							f.linearRampToValueAtTime(v, E),
							T
						);
					},
					setTargetAtTime(v, E, y) {
						return (
							A === null && _.flush(m.context.currentTime),
							_.add(i(v, E, y)),
							f.setTargetAtTime(v, E, y),
							T
						);
					},
					setValueAtTime(v, E) {
						return (
							A === null && _.flush(m.context.currentTime),
							_.add(u(v, E)),
							f.setValueAtTime(v, E),
							T
						);
					},
					setValueCurveAtTime(v, E, y) {
						const C = v instanceof Float32Array ? v : new Float32Array(v);
						if (l !== null && l.name === "webkitAudioContext") {
							const N = E + y,
								I = m.context.sampleRate,
								M = Math.ceil(E * I),
								x = Math.floor(N * I),
								k = x - M,
								B = new Float32Array(k);
							for (let R = 0; R < k; R += 1) {
								const P = ((C.length - 1) / y) * ((M + R) / I - E),
									D = Math.floor(P),
									S = Math.ceil(P);
								B[R] =
									D === S ? C[D] : (1 - (P - D)) * C[D] + (1 - (S - P)) * C[S];
							}
							A === null && _.flush(m.context.currentTime),
								_.add(d(B, E, y)),
								f.setValueCurveAtTime(B, E, y);
							const U = x / I;
							U < N && p(T, B[B.length - 1], U), p(T, C[C.length - 1], N);
						} else
							A === null && _.flush(m.context.currentTime),
								_.add(d(C, E, y)),
								f.setValueCurveAtTime(C, E, y);
						return T;
					}
				};
			return n.set(T, f), t.set(T, m), e(T, A), T;
		},
	So = (e) => ({
		replay(t) {
			for (const n of e)
				if (n.type === "exponentialRampToValue") {
					const { endTime: r, value: o } = n;
					t.exponentialRampToValueAtTime(o, r);
				} else if (n.type === "linearRampToValue") {
					const { endTime: r, value: o } = n;
					t.linearRampToValueAtTime(o, r);
				} else if (n.type === "setTarget") {
					const { startTime: r, target: o, timeConstant: s } = n;
					t.setTargetAtTime(o, r, s);
				} else if (n.type === "setValue") {
					const { startTime: r, value: o } = n;
					t.setValueAtTime(o, r);
				} else if (n.type === "setValueCurve") {
					const { duration: r, startTime: o, values: s } = n;
					t.setValueCurveAtTime(s, o, r);
				} else throw new Error("Can't apply an unknown automation.");
		}
	});
class An {
	constructor(t) {
		this._map = new Map(t);
	}
	get size() {
		return this._map.size;
	}
	entries() {
		return this._map.entries();
	}
	forEach(t, n = null) {
		return this._map.forEach((r, o) => t.call(n, r, o, this));
	}
	get(t) {
		return this._map.get(t);
	}
	has(t) {
		return this._map.has(t);
	}
	keys() {
		return this._map.keys();
	}
	values() {
		return this._map.values();
	}
}
const Oo = {
		channelCount: 2,
		channelCountMode: "explicit",
		channelInterpretation: "speakers",
		numberOfInputs: 1,
		numberOfOutputs: 1,
		parameterData: {},
		processorOptions: {}
	},
	Ro = (e, t, n, r, o, s, a, c, i, u, d, l, p, m) =>
		class extends t {
			constructor(f, h, g) {
				var _;
				const A = c(f),
					T = i(A),
					v = d({ ...Oo, ...g });
				p(v);
				const E = dt.get(A),
					y = E?.get(h),
					C =
						T || A.state !== "closed"
							? A
							: (_ = a(A)) !== null && _ !== void 0
							? _
							: A,
					N = o(C, T ? null : f.baseLatency, u, h, y, v),
					I = T ? r(h, v, y) : null;
				super(f, !0, N, I);
				const M = [];
				N.parameters.forEach((k, B) => {
					const U = n(this, T, k);
					M.push([B, U]);
				}),
					(this._nativeAudioWorkletNode = N),
					(this._onprocessorerror = null),
					(this._parameters = new An(M)),
					T && e(A, this);
				const { activeInputs: x } = s(this);
				l(N, x);
			}
			get onprocessorerror() {
				return this._onprocessorerror;
			}
			set onprocessorerror(f) {
				const h = typeof f == "function" ? m(this, f) : null;
				this._nativeAudioWorkletNode.onprocessorerror = h;
				const g = this._nativeAudioWorkletNode.onprocessorerror;
				this._onprocessorerror = g !== null && g === h ? f : g;
			}
			get parameters() {
				return this._parameters === null
					? this._nativeAudioWorkletNode.parameters
					: this._parameters;
			}
			get port() {
				return this._nativeAudioWorkletNode.port;
			}
		};
function Fe(e, t, n, r, o) {
	if (typeof e.copyFromChannel == "function")
		t[n].byteLength === 0 && (t[n] = new Float32Array(128)),
			e.copyFromChannel(t[n], r, o);
	else {
		const s = e.getChannelData(r);
		if (t[n].byteLength === 0) t[n] = s.slice(o, o + 128);
		else {
			const a = new Float32Array(
				s.buffer,
				o * Float32Array.BYTES_PER_ELEMENT,
				128
			);
			t[n].set(a);
		}
	}
}
const bn = (e, t, n, r, o) => {
		typeof e.copyToChannel == "function"
			? t[n].byteLength !== 0 && e.copyToChannel(t[n], r, o)
			: t[n].byteLength !== 0 && e.getChannelData(r).set(t[n], o);
	},
	je = (e, t) => {
		const n = [];
		for (let r = 0; r < e; r += 1) {
			const o = [],
				s = typeof t == "number" ? t : t[r];
			for (let a = 0; a < s; a += 1) o.push(new Float32Array(128));
			n.push(o);
		}
		return n;
	},
	Io = (e, t) => {
		const n = K(ft, e),
			r = X(t);
		return K(n, r);
	},
	ko = async (e, t, n, r, o, s, a) => {
		const c = t === null ? Math.ceil(e.context.length / 128) * 128 : t.length,
			i = r.channelCount * r.numberOfInputs,
			u = o.reduce((h, g) => h + g, 0),
			d = u === 0 ? null : n.createBuffer(u, c, n.sampleRate);
		if (s === void 0) throw new Error("Missing the processor constructor.");
		const l = z(e),
			p = await Io(n, e),
			m = je(r.numberOfInputs, r.channelCount),
			w = je(r.numberOfOutputs, o),
			f = Array.from(e.parameters.keys()).reduce(
				(h, g) => ({ ...h, [g]: new Float32Array(128) }),
				{}
			);
		for (let h = 0; h < c; h += 128) {
			if (r.numberOfInputs > 0 && t !== null)
				for (let g = 0; g < r.numberOfInputs; g += 1)
					for (let _ = 0; _ < r.channelCount; _ += 1) Fe(t, m[g], _, _, h);
			s.parameterDescriptors !== void 0 &&
				t !== null &&
				s.parameterDescriptors.forEach(({ name: g }, _) => {
					Fe(t, f, g, i + _, h);
				});
			for (let g = 0; g < r.numberOfInputs; g += 1)
				for (let _ = 0; _ < o[g]; _ += 1)
					w[g][_].byteLength === 0 && (w[g][_] = new Float32Array(128));
			try {
				const g = m.map((A, T) => (l.activeInputs[T].size === 0 ? [] : A)),
					_ = a(h / n.sampleRate, n.sampleRate, () => p.process(g, w, f));
				if (d !== null)
					for (let A = 0, T = 0; A < r.numberOfOutputs; A += 1) {
						for (let v = 0; v < o[A]; v += 1) bn(d, w[A], v, T + v, h);
						T += o[A];
					}
				if (!_) break;
			} catch (g) {
				e.dispatchEvent(
					new ErrorEvent("processorerror", {
						colno: g.colno,
						filename: g.filename,
						lineno: g.lineno,
						message: g.message
					})
				);
				break;
			}
		}
		return d;
	},
	Lo = (e, t, n, r, o, s, a, c, i, u, d, l, p, m, w, f) => (h, g, _) => {
		const A = new WeakMap();
		let T = null;
		const v = async (E, y) => {
			let C = d(E),
				N = null;
			const I = yt(C, y),
				M = Array.isArray(g.outputChannelCount)
					? g.outputChannelCount
					: Array.from(g.outputChannelCount);
			if (l === null) {
				const x = M.reduce((R, P) => R + P, 0),
					k = o(y, {
						channelCount: Math.max(1, x),
						channelCountMode: "explicit",
						channelInterpretation: "discrete",
						numberOfOutputs: Math.max(1, x)
					}),
					B = [];
				for (let R = 0; R < E.numberOfOutputs; R += 1)
					B.push(
						r(y, {
							channelCount: 1,
							channelCountMode: "explicit",
							channelInterpretation: "speakers",
							numberOfInputs: M[R]
						})
					);
				const U = a(y, {
					channelCount: g.channelCount,
					channelCountMode: g.channelCountMode,
					channelInterpretation: g.channelInterpretation,
					gain: 1
				});
				(U.connect = t.bind(null, B)),
					(U.disconnect = i.bind(null, B)),
					(N = [k, B, U]);
			} else I || (C = new l(y, h));
			if ((A.set(y, N === null ? C : N[2]), N !== null)) {
				if (T === null) {
					if (_ === void 0)
						throw new Error("Missing the processor constructor.");
					if (p === null)
						throw new Error(
							"Missing the native OfflineAudioContext constructor."
						);
					const P = E.channelCount * E.numberOfInputs,
						D =
							_.parameterDescriptors === void 0
								? 0
								: _.parameterDescriptors.length,
						S = P + D;
					T = ko(
						E,
						S === 0
							? null
							: await (async () => {
									const W = new p(
											S,
											Math.ceil(E.context.length / 128) * 128,
											y.sampleRate
										),
										G = [],
										fe = [];
									for (let j = 0; j < g.numberOfInputs; j += 1)
										G.push(
											a(W, {
												channelCount: g.channelCount,
												channelCountMode: g.channelCountMode,
												channelInterpretation: g.channelInterpretation,
												gain: 1
											})
										),
											fe.push(
												o(W, {
													channelCount: g.channelCount,
													channelCountMode: "explicit",
													channelInterpretation: "discrete",
													numberOfOutputs: g.channelCount
												})
											);
									const he = await Promise.all(
											Array.from(E.parameters.values()).map(async (j) => {
												const H = s(W, {
													channelCount: 1,
													channelCountMode: "explicit",
													channelInterpretation: "discrete",
													offset: j.value
												});
												return await m(W, j, H.offset), H;
											})
										),
										pe = r(W, {
											channelCount: 1,
											channelCountMode: "explicit",
											channelInterpretation: "speakers",
											numberOfInputs: Math.max(1, P + D)
										});
									for (let j = 0; j < g.numberOfInputs; j += 1) {
										G[j].connect(fe[j]);
										for (let H = 0; H < g.channelCount; H += 1)
											fe[j].connect(pe, H, j * g.channelCount + H);
									}
									for (const [j, H] of he.entries())
										H.connect(pe, 0, P + j), H.start(0);
									return (
										pe.connect(W.destination),
										await Promise.all(G.map((j) => w(E, W, j))),
										f(W)
									);
							  })(),
						y,
						g,
						M,
						_,
						u
					);
				}
				const x = await T,
					k = n(y, {
						buffer: null,
						channelCount: 2,
						channelCountMode: "max",
						channelInterpretation: "speakers",
						loop: !1,
						loopEnd: 0,
						loopStart: 0,
						playbackRate: 1
					}),
					[B, U, R] = N;
				x !== null && ((k.buffer = x), k.start(0)), k.connect(B);
				for (let P = 0, D = 0; P < E.numberOfOutputs; P += 1) {
					const S = U[P];
					for (let L = 0; L < M[P]; L += 1) B.connect(S, D + L, L);
					D += M[P];
				}
				return R;
			}
			if (I)
				for (const [x, k] of E.parameters.entries())
					await e(y, k, C.parameters.get(x));
			else
				for (const [x, k] of E.parameters.entries())
					await m(y, k, C.parameters.get(x));
			return await w(E, y, C), C;
		};
		return {
			render(E, y) {
				c(y, E);
				const C = A.get(y);
				return C !== void 0 ? Promise.resolve(C) : v(E, y);
			}
		};
	},
	xo = (e, t) => (n, r) => {
		const o = t.get(n);
		if (o !== void 0) return o;
		const s = e.get(n);
		if (s !== void 0) return s;
		try {
			const a = r();
			return a instanceof Promise
				? (e.set(n, a),
				  a.catch(() => !1).then((c) => (e.delete(n), t.set(n, c), c)))
				: (t.set(n, a), a);
		} catch {
			return t.set(n, !1), !1;
		}
	},
	Po = (e) => (t, n, r) => e(n, t, r),
	Uo =
		(e) =>
		(t, n, r = 0, o = 0) => {
			const s = t[r];
			if (s === void 0) throw e();
			return Ve(n) ? s.connect(n, 0, o) : s.connect(n, 0);
		},
	Bo = {
		channelCount: 2,
		channelCountMode: "max",
		channelInterpretation: "speakers",
		offset: 1
	},
	Do = (e, t, n, r, o, s, a) =>
		class extends e {
			constructor(i, u) {
				const d = o(i),
					l = { ...Bo, ...u },
					p = r(d, l),
					m = s(d),
					w = m ? n() : null;
				super(i, !1, p, w),
					(this._constantSourceNodeRenderer = w),
					(this._nativeConstantSourceNode = p),
					(this._offset = t(this, m, p.offset, Ye, Ce)),
					(this._onended = null);
			}
			get offset() {
				return this._offset;
			}
			get onended() {
				return this._onended;
			}
			set onended(i) {
				const u = typeof i == "function" ? a(this, i) : null;
				this._nativeConstantSourceNode.onended = u;
				const d = this._nativeConstantSourceNode.onended;
				this._onended = d !== null && d === u ? i : d;
			}
			start(i = 0) {
				if (
					(this._nativeConstantSourceNode.start(i),
					this._constantSourceNodeRenderer !== null &&
						(this._constantSourceNodeRenderer.start = i),
					this.context.state !== "closed")
				) {
					ye(this);
					const u = () => {
						this._nativeConstantSourceNode.removeEventListener("ended", u),
							oe(this) && He(this);
					};
					this._nativeConstantSourceNode.addEventListener("ended", u);
				}
			}
			stop(i = 0) {
				this._nativeConstantSourceNode.stop(i),
					this._constantSourceNodeRenderer !== null &&
						(this._constantSourceNodeRenderer.stop = i);
			}
		},
	Wo = (e, t, n, r, o) => () => {
		const s = new WeakMap();
		let a = null,
			c = null;
		const i = async (u, d) => {
			let l = n(u);
			const p = yt(l, d);
			if (!p) {
				const m = {
					channelCount: l.channelCount,
					channelCountMode: l.channelCountMode,
					channelInterpretation: l.channelInterpretation,
					offset: l.offset.value
				};
				(l = t(d, m)), a !== null && l.start(a), c !== null && l.stop(c);
			}
			return (
				s.set(d, l),
				p ? await e(d, u.offset, l.offset) : await r(d, u.offset, l.offset),
				await o(u, d, l),
				l
			);
		};
		return {
			set start(u) {
				a = u;
			},
			set stop(u) {
				c = u;
			},
			render(u, d) {
				const l = s.get(d);
				return l !== void 0 ? Promise.resolve(l) : i(u, d);
			}
		};
	},
	Vo = (e) => (t) => ((e[0] = t), e[0]),
	Fo = (e, t, n, r, o, s, a, c) => (i, u) => {
		const d = t.get(i);
		if (d === void 0) throw new Error("Missing the expected cycle count.");
		const l = s(i.context),
			p = c(l);
		if (d === u) {
			if ((t.delete(i), !p && a(i))) {
				const m = r(i),
					{ outputs: w } = n(i);
				for (const f of w)
					if (Me(f)) {
						const h = r(f[0]);
						e(m, h, f[1], f[2]);
					} else {
						const h = o(f[0]);
						m.connect(h, f[1]);
					}
			}
		} else t.set(i, d - u);
	},
	jo = (e) => (t, n, r, o) => e(t[o], (s) => s[0] === n && s[1] === r),
	$o = (e) => (t, n) => {
		e(t).delete(n);
	},
	Go = (e) => "delayTime" in e,
	qo = (e, t, n) =>
		function r(o, s) {
			const a = We(s) ? s : n(e, s);
			if (Go(a)) return [];
			if (o[0] === a) return [o];
			if (o.includes(a)) return [];
			const { outputs: c } = t(a);
			return Array.from(c)
				.map((i) => r([...o, a], i[0]))
				.reduce((i, u) => i.concat(u), []);
		},
	xe = (e, t, n) => {
		const r = t[n];
		if (r === void 0) throw e();
		return r;
	},
	zo =
		(e) =>
		(t, n = void 0, r = void 0, o = 0) =>
			n === void 0
				? t.forEach((s) => s.disconnect())
				: typeof n == "number"
				? xe(e, t, n).disconnect()
				: Ve(n)
				? r === void 0
					? t.forEach((s) => s.disconnect(n))
					: o === void 0
					? xe(e, t, r).disconnect(n, 0)
					: xe(e, t, r).disconnect(n, 0, o)
				: r === void 0
				? t.forEach((s) => s.disconnect(n))
				: xe(e, t, r).disconnect(n, 0),
	Ho = (e) => (t) =>
		new Promise((n, r) => {
			if (e === null) {
				r(new SyntaxError());
				return;
			}
			const o = e.document.head;
			if (o === null) r(new SyntaxError());
			else {
				const s = e.document.createElement("script"),
					a = new Blob([t], { type: "application/javascript" }),
					c = URL.createObjectURL(a),
					i = e.onerror,
					u = () => {
						(e.onerror = i), URL.revokeObjectURL(c);
					};
				(e.onerror = (d, l, p, m, w) => {
					if (l === c || (l === e.location.href && p === 1 && m === 1))
						return u(), r(w), !1;
					if (i !== null) return i(d, l, p, m, w);
				}),
					(s.onerror = () => {
						u(), r(new SyntaxError());
					}),
					(s.onload = () => {
						u(), n();
					}),
					(s.src = c),
					(s.type = "module"),
					o.appendChild(s);
			}
		}),
	Yo = (e) =>
		class {
			constructor(n) {
				(this._nativeEventTarget = n), (this._listeners = new WeakMap());
			}
			addEventListener(n, r, o) {
				if (r !== null) {
					let s = this._listeners.get(r);
					s === void 0 &&
						((s = e(this, r)),
						typeof r == "function" && this._listeners.set(r, s)),
						this._nativeEventTarget.addEventListener(n, s, o);
				}
			}
			dispatchEvent(n) {
				return this._nativeEventTarget.dispatchEvent(n);
			}
			removeEventListener(n, r, o) {
				const s = r === null ? void 0 : this._listeners.get(r);
				this._nativeEventTarget.removeEventListener(
					n,
					s === void 0 ? null : s,
					o
				);
			}
		},
	Xo = (e) => (t, n, r) => {
		Object.defineProperties(e, {
			currentFrame: {
				configurable: !0,
				get() {
					return Math.round(t * n);
				}
			},
			currentTime: {
				configurable: !0,
				get() {
					return t;
				}
			}
		});
		try {
			return r();
		} finally {
			e !== null && (delete e.currentFrame, delete e.currentTime);
		}
	},
	Zo = (e) => async (t) => {
		try {
			const n = await fetch(t);
			if (n.ok) return [await n.text(), n.url];
		} catch {}
		throw e();
	},
	Ko = (e, t) => (n) => t(e, n),
	Jo = (e) => (t) => {
		const n = e(t);
		if (n.renderer === null)
			throw new Error(
				"Missing the renderer of the given AudioNode in the audio graph."
			);
		return n.renderer;
	},
	Qo = (e) => (t) => {
		var n;
		return (n = e.get(t)) !== null && n !== void 0 ? n : 0;
	},
	es = (e) => (t) => {
		const n = e(t);
		if (n.renderer === null)
			throw new Error(
				"Missing the renderer of the given AudioParam in the audio graph."
			);
		return n.renderer;
	},
	ts = (e) => (t) => e.get(t),
	Z = () => new DOMException("", "InvalidStateError"),
	ns = (e) => (t) => {
		const n = e.get(t);
		if (n === void 0) throw Z();
		return n;
	},
	rs = (e, t) => (n) => {
		let r = e.get(n);
		if (r !== void 0) return r;
		if (t === null)
			throw new Error("Missing the native OfflineAudioContext constructor.");
		return (r = new t(1, 1, 44100)), e.set(n, r), r;
	},
	os = (e) => (t) => {
		const n = e.get(t);
		if (n === void 0)
			throw new Error("The context has no set of AudioWorkletNodes.");
		return n;
	},
	ss = () => new DOMException("", "InvalidAccessError"),
	as = (e, t, n, r, o, s) => (a) => (c, i) => {
		const u = e.get(c);
		if (u === void 0) {
			if (!a && s(c)) {
				const d = r(c),
					{ outputs: l } = n(c);
				for (const p of l)
					if (Me(p)) {
						const m = r(p[0]);
						t(d, m, p[1], p[2]);
					} else {
						const m = o(p[0]);
						d.disconnect(m, p[1]);
					}
			}
			e.set(c, i);
		} else e.set(c, u + i);
	},
	is = (e) => (t) => e !== null && t instanceof e,
	cs = (e) => (t) =>
		e !== null && typeof e.AudioNode == "function" && t instanceof e.AudioNode,
	us = (e) => (t) =>
		e !== null &&
		typeof e.AudioParam == "function" &&
		t instanceof e.AudioParam,
	ls = (e) => (t) => e !== null && t instanceof e,
	ds = (e) => e !== null && e.isSecureContext,
	fs = (e, t, n, r) =>
		class extends e {
			constructor(s, a) {
				const c = n(s),
					i = t(c, a);
				if (r(c)) throw new TypeError();
				super(s, !0, i, null), (this._nativeMediaStreamAudioSourceNode = i);
			}
			get mediaStream() {
				return this._nativeMediaStreamAudioSourceNode.mediaStream;
			}
		},
	hs = (e, t, n, r, o) =>
		class extends r {
			constructor(a = {}) {
				if (o === null)
					throw new Error("Missing the native AudioContext constructor.");
				let c;
				try {
					c = new o(a);
				} catch (d) {
					throw d.code === 12 && d.message === "sampleRate is not in range"
						? t()
						: d;
				}
				if (c === null) throw n();
				if (!po(a.latencyHint))
					throw new TypeError(
						`The provided value '${a.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
					);
				if (a.sampleRate !== void 0 && c.sampleRate !== a.sampleRate) throw t();
				super(c, 2);
				const { latencyHint: i } = a,
					{ sampleRate: u } = c;
				if (
					((this._baseLatency =
						typeof c.baseLatency == "number"
							? c.baseLatency
							: i === "balanced"
							? 512 / u
							: i === "interactive" || i === void 0
							? 256 / u
							: i === "playback"
							? 1024 / u
							: (Math.max(2, Math.min(128, Math.round((i * u) / 128))) * 128) /
							  u),
					(this._nativeAudioContext = c),
					o.name === "webkitAudioContext"
						? ((this._nativeGainNode = c.createGain()),
						  (this._nativeOscillatorNode = c.createOscillator()),
						  (this._nativeGainNode.gain.value = 1e-37),
						  this._nativeOscillatorNode
								.connect(this._nativeGainNode)
								.connect(c.destination),
						  this._nativeOscillatorNode.start())
						: ((this._nativeGainNode = null),
						  (this._nativeOscillatorNode = null)),
					(this._state = null),
					c.state === "running")
				) {
					this._state = "suspended";
					const d = () => {
						this._state === "suspended" && (this._state = null),
							c.removeEventListener("statechange", d);
					};
					c.addEventListener("statechange", d);
				}
			}
			get baseLatency() {
				return this._baseLatency;
			}
			get state() {
				return this._state !== null
					? this._state
					: this._nativeAudioContext.state;
			}
			close() {
				return this.state === "closed"
					? this._nativeAudioContext.close().then(() => {
							throw e();
					  })
					: (this._state === "suspended" && (this._state = null),
					  this._nativeAudioContext.close().then(() => {
							this._nativeGainNode !== null &&
								this._nativeOscillatorNode !== null &&
								(this._nativeOscillatorNode.stop(),
								this._nativeGainNode.disconnect(),
								this._nativeOscillatorNode.disconnect()),
								ho(this);
					  }));
			}
			resume() {
				return this._state === "suspended"
					? new Promise((a, c) => {
							const i = () => {
								this._nativeAudioContext.removeEventListener("statechange", i),
									this._nativeAudioContext.state === "running"
										? a()
										: this.resume().then(a, c);
							};
							this._nativeAudioContext.addEventListener("statechange", i);
					  })
					: this._nativeAudioContext.resume().catch((a) => {
							throw a === void 0 || a.code === 15 ? e() : a;
					  });
			}
			suspend() {
				return this._nativeAudioContext.suspend().catch((a) => {
					throw a === void 0 ? e() : a;
				});
			}
		},
	ps = (e, t, n, r, o, s) =>
		class extends n {
			constructor(c, i) {
				super(c),
					(this._nativeContext = c),
					fn.set(this, c),
					r(c) && o.set(c, new Set()),
					(this._destination = new e(this, i)),
					(this._listener = t(this, c)),
					(this._onstatechange = null);
			}
			get currentTime() {
				return this._nativeContext.currentTime;
			}
			get destination() {
				return this._destination;
			}
			get listener() {
				return this._listener;
			}
			get onstatechange() {
				return this._onstatechange;
			}
			set onstatechange(c) {
				const i = typeof c == "function" ? s(this, c) : null;
				this._nativeContext.onstatechange = i;
				const u = this._nativeContext.onstatechange;
				this._onstatechange = u !== null && u === i ? c : u;
			}
			get sampleRate() {
				return this._nativeContext.sampleRate;
			}
			get state() {
				return this._nativeContext.state;
			}
		},
	Jt = (e) => {
		const t = new Uint32Array([
			1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580,
			1635017060, 4, 0
		]);
		try {
			const n = e.decodeAudioData(t.buffer, () => {});
			return n === void 0 ? !1 : (n.catch(() => {}), !0);
		} catch {}
		return !1;
	},
	ms = (e, t) => (n, r, o) => {
		const s = new Set();
		return (
			(n.connect = (
				(a) =>
				(c, i = 0, u = 0) => {
					const d = s.size === 0;
					if (t(c))
						return (
							a.call(n, c, i, u),
							e(
								s,
								[c, i, u],
								(l) => l[0] === c && l[1] === i && l[2] === u,
								!0
							),
							d && r(),
							c
						);
					a.call(n, c, i),
						e(s, [c, i], (l) => l[0] === c && l[1] === i, !0),
						d && r();
				}
			)(n.connect)),
			(n.disconnect = ((a) => (c, i, u) => {
				const d = s.size > 0;
				if (c === void 0) a.apply(n), s.clear();
				else if (typeof c == "number") {
					a.call(n, c);
					for (const p of s) p[1] === c && s.delete(p);
				} else {
					t(c) ? a.call(n, c, i, u) : a.call(n, c, i);
					for (const p of s)
						p[0] === c &&
							(i === void 0 || p[1] === i) &&
							(u === void 0 || p[2] === u) &&
							s.delete(p);
				}
				const l = s.size === 0;
				d && l && o();
			})(n.disconnect)),
			n
		);
	},
	ie = (e, t, n) => {
		const r = t[n];
		r !== void 0 && r !== e[n] && (e[n] = r);
	},
	Ne = (e, t) => {
		ie(e, t, "channelCount"),
			ie(e, t, "channelCountMode"),
			ie(e, t, "channelInterpretation");
	},
	gs = (e) =>
		e === null ? null : e.hasOwnProperty("AudioBuffer") ? e.AudioBuffer : null,
	bt = (e, t, n) => {
		const r = t[n];
		r !== void 0 && r !== e[n].value && (e[n].value = r);
	},
	ws = (e) => {
		e.start = ((t) => {
			let n = !1;
			return (r = 0, o = 0, s) => {
				if (n) throw Z();
				t.call(e, r, o, s), (n = !0);
			};
		})(e.start);
	},
	Cn = (e) => {
		e.start = (
			(t) =>
			(n = 0, r = 0, o) => {
				if ((typeof o == "number" && o < 0) || r < 0 || n < 0)
					throw new RangeError("The parameters can't be negative.");
				t.call(e, n, r, o);
			}
		)(e.start);
	},
	Tn = (e) => {
		e.stop = (
			(t) =>
			(n = 0) => {
				if (n < 0) throw new RangeError("The parameter can't be negative.");
				t.call(e, n);
			}
		)(e.stop);
	},
	vs = (e, t, n, r, o, s, a, c, i, u, d) => (l, p) => {
		const m = l.createBufferSource();
		return (
			Ne(m, p),
			bt(m, p, "playbackRate"),
			ie(m, p, "buffer"),
			ie(m, p, "loop"),
			ie(m, p, "loopEnd"),
			ie(m, p, "loopStart"),
			t(n, () => n(l)) || ws(m),
			t(r, () => r(l)) || i(m),
			t(o, () => o(l)) || u(m, l),
			t(s, () => s(l)) || Cn(m),
			t(a, () => a(l)) || d(m, l),
			t(c, () => c(l)) || Tn(m),
			e(l, m),
			m
		);
	},
	_s = (e) =>
		e === null
			? null
			: e.hasOwnProperty("AudioContext")
			? e.AudioContext
			: e.hasOwnProperty("webkitAudioContext")
			? e.webkitAudioContext
			: null,
	ys = (e, t) => (n, r, o) => {
		const s = n.destination;
		if (s.channelCount !== r)
			try {
				s.channelCount = r;
			} catch {}
		o && s.channelCountMode !== "explicit" && (s.channelCountMode = "explicit"),
			s.maxChannelCount === 0 &&
				Object.defineProperty(s, "maxChannelCount", { value: r });
		const a = e(n, {
			channelCount: r,
			channelCountMode: s.channelCountMode,
			channelInterpretation: s.channelInterpretation,
			gain: 1
		});
		return (
			t(
				a,
				"channelCount",
				(c) => () => c.call(a),
				(c) => (i) => {
					c.call(a, i);
					try {
						s.channelCount = i;
					} catch (u) {
						if (i > s.maxChannelCount) throw u;
					}
				}
			),
			t(
				a,
				"channelCountMode",
				(c) => () => c.call(a),
				(c) => (i) => {
					c.call(a, i), (s.channelCountMode = i);
				}
			),
			t(
				a,
				"channelInterpretation",
				(c) => () => c.call(a),
				(c) => (i) => {
					c.call(a, i), (s.channelInterpretation = i);
				}
			),
			Object.defineProperty(a, "maxChannelCount", {
				get: () => s.maxChannelCount
			}),
			a.connect(s),
			a
		);
	},
	Es = (e) =>
		e === null
			? null
			: e.hasOwnProperty("AudioWorkletNode")
			? e.AudioWorkletNode
			: null,
	As = (e) => {
		const { port1: t } = new MessageChannel();
		try {
			t.postMessage(e);
		} finally {
			t.close();
		}
	},
	bs = (e, t, n, r, o) => (s, a, c, i, u, d) => {
		if (c !== null)
			try {
				const l = new c(s, i, d),
					p = new Map();
				let m = null;
				if (
					(Object.defineProperties(l, {
						channelCount: {
							get: () => d.channelCount,
							set: () => {
								throw e();
							}
						},
						channelCountMode: {
							get: () => "explicit",
							set: () => {
								throw e();
							}
						},
						onprocessorerror: {
							get: () => m,
							set: (w) => {
								typeof m == "function" &&
									l.removeEventListener("processorerror", m),
									(m = typeof w == "function" ? w : null),
									typeof m == "function" &&
										l.addEventListener("processorerror", m);
							}
						}
					}),
					(l.addEventListener = (
						(w) =>
						(...f) => {
							if (f[0] === "processorerror") {
								const h =
									typeof f[1] == "function"
										? f[1]
										: typeof f[1] == "object" &&
										  f[1] !== null &&
										  typeof f[1].handleEvent == "function"
										? f[1].handleEvent
										: null;
								if (h !== null) {
									const g = p.get(f[1]);
									g !== void 0
										? (f[1] = g)
										: ((f[1] = (_) => {
												_.type === "error"
													? (Object.defineProperties(_, {
															type: { value: "processorerror" }
													  }),
													  h(_))
													: h(new ErrorEvent(f[0], { ..._ }));
										  }),
										  p.set(h, f[1]));
								}
							}
							return w.call(l, "error", f[1], f[2]), w.call(l, ...f);
						}
					)(l.addEventListener)),
					(l.removeEventListener = (
						(w) =>
						(...f) => {
							if (f[0] === "processorerror") {
								const h = p.get(f[1]);
								h !== void 0 && (p.delete(f[1]), (f[1] = h));
							}
							return (
								w.call(l, "error", f[1], f[2]), w.call(l, f[0], f[1], f[2])
							);
						}
					)(l.removeEventListener)),
					d.numberOfOutputs !== 0)
				) {
					const w = n(s, {
						channelCount: 1,
						channelCountMode: "explicit",
						channelInterpretation: "discrete",
						gain: 0
					});
					return (
						l.connect(w).connect(s.destination),
						o(
							l,
							() => w.disconnect(),
							() => w.connect(s.destination)
						)
					);
				}
				return l;
			} catch (l) {
				throw l.code === 11 ? r() : l;
			}
		if (u === void 0) throw r();
		return As(d), t(s, a, u, d);
	},
	Cs = (e, t) =>
		e === null
			? 512
			: Math.max(
					512,
					Math.min(16384, Math.pow(2, Math.round(Math.log2(e * t))))
			  ),
	Ts = (e) =>
		new Promise((t, n) => {
			const { port1: r, port2: o } = new MessageChannel();
			(r.onmessage = ({ data: s }) => {
				r.close(), o.close(), t(s);
			}),
				(r.onmessageerror = ({ data: s }) => {
					r.close(), o.close(), n(s);
				}),
				o.postMessage(e);
		}),
	Ms = async (e, t) => {
		const n = await Ts(t);
		return new e(n);
	},
	Ns = (e, t, n, r) => {
		let o = ft.get(e);
		o === void 0 && ((o = new WeakMap()), ft.set(e, o));
		const s = Ms(n, r);
		return o.set(t, s), s;
	},
	Ss = (e, t, n, r, o, s, a, c, i, u, d, l, p) => (m, w, f, h) => {
		if (h.numberOfInputs === 0 && h.numberOfOutputs === 0) throw i();
		const g = Array.isArray(h.outputChannelCount)
			? h.outputChannelCount
			: Array.from(h.outputChannelCount);
		if (g.some((b) => b < 1)) throw i();
		if (g.length !== h.numberOfOutputs) throw t();
		if (h.channelCountMode !== "explicit") throw i();
		const _ = h.channelCount * h.numberOfInputs,
			A = g.reduce((b, O) => b + O, 0),
			T = f.parameterDescriptors === void 0 ? 0 : f.parameterDescriptors.length;
		if (_ + T > 6 || A > 6) throw i();
		const v = new MessageChannel(),
			E = [],
			y = [];
		for (let b = 0; b < h.numberOfInputs; b += 1)
			E.push(
				a(m, {
					channelCount: h.channelCount,
					channelCountMode: h.channelCountMode,
					channelInterpretation: h.channelInterpretation,
					gain: 1
				})
			),
				y.push(
					o(m, {
						channelCount: h.channelCount,
						channelCountMode: "explicit",
						channelInterpretation: "discrete",
						numberOfOutputs: h.channelCount
					})
				);
		const C = [];
		if (f.parameterDescriptors !== void 0)
			for (const {
				defaultValue: b,
				maxValue: O,
				minValue: q,
				name: F
			} of f.parameterDescriptors) {
				const V = s(m, {
					channelCount: 1,
					channelCountMode: "explicit",
					channelInterpretation: "discrete",
					offset:
						h.parameterData[F] !== void 0
							? h.parameterData[F]
							: b === void 0
							? 0
							: b
				});
				Object.defineProperties(V.offset, {
					defaultValue: { get: () => (b === void 0 ? 0 : b) },
					maxValue: { get: () => (O === void 0 ? Ye : O) },
					minValue: { get: () => (q === void 0 ? Ce : q) }
				}),
					C.push(V);
			}
		const N = r(m, {
				channelCount: 1,
				channelCountMode: "explicit",
				channelInterpretation: "speakers",
				numberOfInputs: Math.max(1, _ + T)
			}),
			I = Cs(w, m.sampleRate),
			M = c(m, I, _ + T, Math.max(1, A)),
			x = o(m, {
				channelCount: Math.max(1, A),
				channelCountMode: "explicit",
				channelInterpretation: "discrete",
				numberOfOutputs: Math.max(1, A)
			}),
			k = [];
		for (let b = 0; b < h.numberOfOutputs; b += 1)
			k.push(
				r(m, {
					channelCount: 1,
					channelCountMode: "explicit",
					channelInterpretation: "speakers",
					numberOfInputs: g[b]
				})
			);
		for (let b = 0; b < h.numberOfInputs; b += 1) {
			E[b].connect(y[b]);
			for (let O = 0; O < h.channelCount; O += 1)
				y[b].connect(N, O, b * h.channelCount + O);
		}
		const B = new An(
			f.parameterDescriptors === void 0
				? []
				: f.parameterDescriptors.map(({ name: b }, O) => {
						const q = C[O];
						return q.connect(N, 0, _ + O), q.start(0), [b, q.offset];
				  })
		);
		N.connect(M);
		let U = h.channelInterpretation,
			R = null;
		const P = h.numberOfOutputs === 0 ? [M] : k,
			D = {
				get bufferSize() {
					return I;
				},
				get channelCount() {
					return h.channelCount;
				},
				set channelCount(b) {
					throw n();
				},
				get channelCountMode() {
					return h.channelCountMode;
				},
				set channelCountMode(b) {
					throw n();
				},
				get channelInterpretation() {
					return U;
				},
				set channelInterpretation(b) {
					for (const O of E) O.channelInterpretation = b;
					U = b;
				},
				get context() {
					return M.context;
				},
				get inputs() {
					return E;
				},
				get numberOfInputs() {
					return h.numberOfInputs;
				},
				get numberOfOutputs() {
					return h.numberOfOutputs;
				},
				get onprocessorerror() {
					return R;
				},
				set onprocessorerror(b) {
					typeof R == "function" && D.removeEventListener("processorerror", R),
						(R = typeof b == "function" ? b : null),
						typeof R == "function" && D.addEventListener("processorerror", R);
				},
				get parameters() {
					return B;
				},
				get port() {
					return v.port2;
				},
				addEventListener(...b) {
					return M.addEventListener(b[0], b[1], b[2]);
				},
				connect: e.bind(null, P),
				disconnect: u.bind(null, P),
				dispatchEvent(...b) {
					return M.dispatchEvent(b[0]);
				},
				removeEventListener(...b) {
					return M.removeEventListener(b[0], b[1], b[2]);
				}
			},
			S = new Map();
		(v.port1.addEventListener = (
			(b) =>
			(...O) => {
				if (O[0] === "message") {
					const q =
						typeof O[1] == "function"
							? O[1]
							: typeof O[1] == "object" &&
							  O[1] !== null &&
							  typeof O[1].handleEvent == "function"
							? O[1].handleEvent
							: null;
					if (q !== null) {
						const F = S.get(O[1]);
						F !== void 0
							? (O[1] = F)
							: ((O[1] = (V) => {
									d(m.currentTime, m.sampleRate, () => q(V));
							  }),
							  S.set(q, O[1]));
					}
				}
				return b.call(v.port1, O[0], O[1], O[2]);
			}
		)(v.port1.addEventListener)),
			(v.port1.removeEventListener = (
				(b) =>
				(...O) => {
					if (O[0] === "message") {
						const q = S.get(O[1]);
						q !== void 0 && (S.delete(O[1]), (O[1] = q));
					}
					return b.call(v.port1, O[0], O[1], O[2]);
				}
			)(v.port1.removeEventListener));
		let L = null;
		Object.defineProperty(v.port1, "onmessage", {
			get: () => L,
			set: (b) => {
				typeof L == "function" && v.port1.removeEventListener("message", L),
					(L = typeof b == "function" ? b : null),
					typeof L == "function" &&
						(v.port1.addEventListener("message", L), v.port1.start());
			}
		}),
			(f.prototype.port = v.port1);
		let W = null;
		Ns(m, D, f, h).then((b) => (W = b));
		const fe = je(h.numberOfInputs, h.channelCount),
			he = je(h.numberOfOutputs, g),
			pe =
				f.parameterDescriptors === void 0
					? []
					: f.parameterDescriptors.reduce(
							(b, { name: O }) => ({ ...b, [O]: new Float32Array(128) }),
							{}
					  );
		let j = !0;
		const H = () => {
				h.numberOfOutputs > 0 && M.disconnect(x);
				for (let b = 0, O = 0; b < h.numberOfOutputs; b += 1) {
					const q = k[b];
					for (let F = 0; F < g[b]; F += 1) x.disconnect(q, O + F, F);
					O += g[b];
				}
			},
			Ie = new Map();
		M.onaudioprocess = ({ inputBuffer: b, outputBuffer: O }) => {
			if (W !== null) {
				const q = l(D);
				for (let F = 0; F < I; F += 128) {
					for (let V = 0; V < h.numberOfInputs; V += 1)
						for (let $ = 0; $ < h.channelCount; $ += 1) Fe(b, fe[V], $, $, F);
					f.parameterDescriptors !== void 0 &&
						f.parameterDescriptors.forEach(({ name: V }, $) => {
							Fe(b, pe, V, _ + $, F);
						});
					for (let V = 0; V < h.numberOfInputs; V += 1)
						for (let $ = 0; $ < g[V]; $ += 1)
							he[V][$].byteLength === 0 && (he[V][$] = new Float32Array(128));
					try {
						const V = fe.map((Y, te) => {
							if (q[te].size > 0) return Ie.set(te, I / 128), Y;
							const rt = Ie.get(te);
							return rt === void 0
								? []
								: (Y.every((Zn) => Zn.every((Kn) => Kn === 0)) &&
										(rt === 1 ? Ie.delete(te) : Ie.set(te, rt - 1)),
								  Y);
						});
						j = d(m.currentTime + F / m.sampleRate, m.sampleRate, () =>
							W.process(V, he, pe)
						);
						for (let Y = 0, te = 0; Y < h.numberOfOutputs; Y += 1) {
							for (let _e = 0; _e < g[Y]; _e += 1) bn(O, he[Y], _e, te + _e, F);
							te += g[Y];
						}
					} catch (V) {
						(j = !1),
							D.dispatchEvent(
								new ErrorEvent("processorerror", {
									colno: V.colno,
									filename: V.filename,
									lineno: V.lineno,
									message: V.message
								})
							);
					}
					if (!j) {
						for (let V = 0; V < h.numberOfInputs; V += 1) {
							E[V].disconnect(y[V]);
							for (let $ = 0; $ < h.channelCount; $ += 1)
								y[F].disconnect(N, $, V * h.channelCount + $);
						}
						if (f.parameterDescriptors !== void 0) {
							const V = f.parameterDescriptors.length;
							for (let $ = 0; $ < V; $ += 1) {
								const Y = C[$];
								Y.disconnect(N, 0, _ + $), Y.stop();
							}
						}
						N.disconnect(M), (M.onaudioprocess = null), tt ? H() : Lt();
						break;
					}
				}
			}
		};
		let tt = !1;
		const nt = a(m, {
				channelCount: 1,
				channelCountMode: "explicit",
				channelInterpretation: "discrete",
				gain: 0
			}),
			kt = () => M.connect(nt).connect(m.destination),
			Lt = () => {
				M.disconnect(nt), nt.disconnect();
			},
			Yn = () => {
				if (j) {
					Lt(), h.numberOfOutputs > 0 && M.connect(x);
					for (let b = 0, O = 0; b < h.numberOfOutputs; b += 1) {
						const q = k[b];
						for (let F = 0; F < g[b]; F += 1) x.connect(q, O + F, F);
						O += g[b];
					}
				}
				tt = !0;
			},
			Xn = () => {
				j && (kt(), H()), (tt = !1);
			};
		return kt(), p(D, Yn, Xn);
	},
	Os = (e, t) => (n, r) => {
		const o = n.createChannelMerger(r.numberOfInputs);
		return (
			e !== null && e.name === "webkitAudioContext" && t(n, o), Ne(o, r), o
		);
	},
	Rs = (e) => {
		const t = e.numberOfOutputs;
		Object.defineProperty(e, "channelCount", {
			get: () => t,
			set: (n) => {
				if (n !== t) throw Z();
			}
		}),
			Object.defineProperty(e, "channelCountMode", {
				get: () => "explicit",
				set: (n) => {
					if (n !== "explicit") throw Z();
				}
			}),
			Object.defineProperty(e, "channelInterpretation", {
				get: () => "discrete",
				set: (n) => {
					if (n !== "discrete") throw Z();
				}
			});
	},
	Mn = (e, t) => {
		const n = e.createChannelSplitter(t.numberOfOutputs);
		return Ne(n, t), Rs(n), n;
	},
	Is = (e, t, n, r, o) => (s, a) => {
		if (s.createConstantSource === void 0) return n(s, a);
		const c = s.createConstantSource();
		return (
			Ne(c, a),
			bt(c, a, "offset"),
			t(r, () => r(s)) || Cn(c),
			t(o, () => o(s)) || Tn(c),
			e(s, c),
			c
		);
	},
	Nn = (e, t) => (
		(e.connect = t.connect.bind(t)), (e.disconnect = t.disconnect.bind(t)), e
	),
	ks =
		(e, t, n, r) =>
		(o, { offset: s, ...a }) => {
			const c = o.createBuffer(1, 2, 44100),
				i = t(o, {
					buffer: null,
					channelCount: 2,
					channelCountMode: "max",
					channelInterpretation: "speakers",
					loop: !1,
					loopEnd: 0,
					loopStart: 0,
					playbackRate: 1
				}),
				u = n(o, { ...a, gain: s }),
				d = c.getChannelData(0);
			(d[0] = 1), (d[1] = 1), (i.buffer = c), (i.loop = !0);
			const l = {
					get bufferSize() {},
					get channelCount() {
						return u.channelCount;
					},
					set channelCount(w) {
						u.channelCount = w;
					},
					get channelCountMode() {
						return u.channelCountMode;
					},
					set channelCountMode(w) {
						u.channelCountMode = w;
					},
					get channelInterpretation() {
						return u.channelInterpretation;
					},
					set channelInterpretation(w) {
						u.channelInterpretation = w;
					},
					get context() {
						return u.context;
					},
					get inputs() {
						return [];
					},
					get numberOfInputs() {
						return i.numberOfInputs;
					},
					get numberOfOutputs() {
						return u.numberOfOutputs;
					},
					get offset() {
						return u.gain;
					},
					get onended() {
						return i.onended;
					},
					set onended(w) {
						i.onended = w;
					},
					addEventListener(...w) {
						return i.addEventListener(w[0], w[1], w[2]);
					},
					dispatchEvent(...w) {
						return i.dispatchEvent(w[0]);
					},
					removeEventListener(...w) {
						return i.removeEventListener(w[0], w[1], w[2]);
					},
					start(w = 0) {
						i.start.call(i, w);
					},
					stop(w = 0) {
						i.stop.call(i, w);
					}
				},
				p = () => i.connect(u),
				m = () => i.disconnect(u);
			return e(o, i), r(Nn(l, u), p, m);
		},
	se = (e, t) => {
		const n = e.createGain();
		return Ne(n, t), bt(n, t, "gain"), n;
	},
	Ls = (e, { mediaStream: t }) => {
		const n = t.getAudioTracks();
		n.sort((s, a) => (s.id < a.id ? -1 : s.id > a.id ? 1 : 0));
		const r = n.slice(0, 1),
			o = e.createMediaStreamSource(new MediaStream(r));
		return Object.defineProperty(o, "mediaStream", { value: t }), o;
	},
	xs = (e) =>
		e === null
			? null
			: e.hasOwnProperty("OfflineAudioContext")
			? e.OfflineAudioContext
			: e.hasOwnProperty("webkitOfflineAudioContext")
			? e.webkitOfflineAudioContext
			: null,
	Ct = (e, t, n, r) => e.createScriptProcessor(t, n, r),
	de = () => new DOMException("", "NotSupportedError"),
	Ps = (e, t) => (n, r, o) => (e(r).replay(o), t(r, n, o)),
	Us = (e, t, n) => async (r, o, s) => {
		const a = e(r);
		await Promise.all(
			a.activeInputs
				.map((c, i) =>
					Array.from(c).map(async ([u, d]) => {
						const p = await t(u).render(u, o),
							m = r.context.destination;
						!n(u) && (r !== m || !n(r)) && p.connect(s, d, i);
					})
				)
				.reduce((c, i) => [...c, ...i], [])
		);
	},
	Bs = (e, t, n) => async (r, o, s) => {
		const a = t(r);
		await Promise.all(
			Array.from(a.activeInputs).map(async ([c, i]) => {
				const d = await e(c).render(c, o);
				n(c) || d.connect(s, i);
			})
		);
	},
	Ds = (e, t, n, r) => (o) =>
		e(Jt, () => Jt(o))
			? Promise.resolve(e(r, r)).then((s) => {
					if (!s) {
						const a = n(o, 512, 0, 1);
						(o.oncomplete = () => {
							(a.onaudioprocess = null), a.disconnect();
						}),
							(a.onaudioprocess = () => o.currentTime),
							a.connect(o.destination);
					}
					return o.startRendering();
			  })
			: new Promise((s) => {
					const a = t(o, {
						channelCount: 1,
						channelCountMode: "explicit",
						channelInterpretation: "discrete",
						gain: 0
					});
					(o.oncomplete = (c) => {
						a.disconnect(), s(c.renderedBuffer);
					}),
						a.connect(o.destination),
						o.startRendering();
			  }),
	Ws = (e) => (t, n) => {
		e.set(t, n);
	},
	Vs = (e) => () => {
		if (e === null) return !1;
		try {
			new e({ length: 1, sampleRate: 44100 });
		} catch {
			return !1;
		}
		return !0;
	},
	Fs = (e, t) => async () => {
		if (e === null) return !0;
		if (t === null) return !1;
		const n = new Blob(
				[
					'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'
				],
				{ type: "application/javascript; charset=utf-8" }
			),
			r = new t(1, 128, 44100),
			o = URL.createObjectURL(n);
		let s = !1,
			a = !1;
		try {
			await r.audioWorklet.addModule(o);
			const c = new e(r, "a", { numberOfOutputs: 0 }),
				i = r.createOscillator();
			(c.port.onmessage = () => (s = !0)),
				(c.onprocessorerror = () => (a = !0)),
				i.connect(c),
				i.start(0),
				await r.startRendering();
		} catch {
		} finally {
			URL.revokeObjectURL(o);
		}
		return s && !a;
	},
	js = (e, t) => () => {
		if (t === null) return Promise.resolve(!1);
		const n = new t(1, 1, 44100),
			r = e(n, {
				channelCount: 1,
				channelCountMode: "explicit",
				channelInterpretation: "discrete",
				gain: 0
			});
		return new Promise((o) => {
			(n.oncomplete = () => {
				r.disconnect(), o(n.currentTime !== 0);
			}),
				n.startRendering();
		});
	},
	$s = () => new DOMException("", "UnknownError"),
	Gs = () => (typeof window > "u" ? null : window),
	qs = (e, t) => (n) => {
		(n.copyFromChannel = (r, o, s = 0) => {
			const a = e(s),
				c = e(o);
			if (c >= n.numberOfChannels) throw t();
			const i = n.length,
				u = n.getChannelData(c),
				d = r.length;
			for (let l = a < 0 ? -a : 0; l + a < i && l < d; l += 1) r[l] = u[l + a];
		}),
			(n.copyToChannel = (r, o, s = 0) => {
				const a = e(s),
					c = e(o);
				if (c >= n.numberOfChannels) throw t();
				const i = n.length,
					u = n.getChannelData(c),
					d = r.length;
				for (let l = a < 0 ? -a : 0; l + a < i && l < d; l += 1)
					u[l + a] = r[l];
			});
	},
	zs = (e) => (t) => {
		(t.copyFromChannel = (
			(n) =>
			(r, o, s = 0) => {
				const a = e(s),
					c = e(o);
				if (a < t.length) return n.call(t, r, c, a);
			}
		)(t.copyFromChannel)),
			(t.copyToChannel = (
				(n) =>
				(r, o, s = 0) => {
					const a = e(s),
						c = e(o);
					if (a < t.length) return n.call(t, r, c, a);
				}
			)(t.copyToChannel));
	},
	Hs = (e) => (t, n) => {
		const r = n.createBuffer(1, 1, 44100);
		t.buffer === null && (t.buffer = r),
			e(
				t,
				"buffer",
				(o) => () => {
					const s = o.call(t);
					return s === r ? null : s;
				},
				(o) => (s) => o.call(t, s === null ? r : s)
			);
	},
	Ys = (e, t) => (n, r) => {
		(r.channelCount = 1),
			(r.channelCountMode = "explicit"),
			Object.defineProperty(r, "channelCount", {
				get: () => 1,
				set: () => {
					throw e();
				}
			}),
			Object.defineProperty(r, "channelCountMode", {
				get: () => "explicit",
				set: () => {
					throw e();
				}
			});
		const o = n.createBufferSource();
		t(
			r,
			() => {
				const c = r.numberOfInputs;
				for (let i = 0; i < c; i += 1) o.connect(r, 0, i);
			},
			() => o.disconnect(r)
		);
	},
	Xs = (e, t, n) =>
		e.copyFromChannel === void 0
			? e.getChannelData(n)[0]
			: (e.copyFromChannel(t, n), t[0]),
	Tt = (e, t, n, r) => {
		let o = e;
		for (; !o.hasOwnProperty(t); ) o = Object.getPrototypeOf(o);
		const { get: s, set: a } = Object.getOwnPropertyDescriptor(o, t);
		Object.defineProperty(e, t, { get: n(s), set: r(a) });
	},
	Zs = (e) => ({
		...e,
		outputChannelCount:
			e.outputChannelCount !== void 0
				? e.outputChannelCount
				: e.numberOfInputs === 1 && e.numberOfOutputs === 1
				? [e.channelCount]
				: Array.from({ length: e.numberOfOutputs }, () => 1)
	}),
	Sn = (e, t, n) => {
		try {
			e.setValueAtTime(t, n);
		} catch (r) {
			if (r.code !== 9) throw r;
			Sn(e, t, n + 1e-7);
		}
	},
	Ks = (e) => {
		const t = e.createBufferSource();
		t.start();
		try {
			t.start();
		} catch {
			return !0;
		}
		return !1;
	},
	Js = (e) => {
		const t = e.createBufferSource(),
			n = e.createBuffer(1, 1, 44100);
		t.buffer = n;
		try {
			t.start(0, 1);
		} catch {
			return !1;
		}
		return !0;
	},
	Qs = (e) => {
		const t = e.createBufferSource();
		t.start();
		try {
			t.stop();
		} catch {
			return !1;
		}
		return !0;
	},
	On = (e) => {
		const t = e.createOscillator();
		try {
			t.start(-1);
		} catch (n) {
			return n instanceof RangeError;
		}
		return !1;
	},
	ea = (e) => {
		const t = e.createBuffer(1, 1, 44100),
			n = e.createBufferSource();
		(n.buffer = t), n.start(), n.stop();
		try {
			return n.stop(), !0;
		} catch {
			return !1;
		}
	},
	Rn = (e) => {
		const t = e.createOscillator();
		try {
			t.stop(-1);
		} catch (n) {
			return n instanceof RangeError;
		}
		return !1;
	},
	ta = (e) => {
		const { port1: t, port2: n } = new MessageChannel();
		try {
			t.postMessage(e);
		} finally {
			t.close(), n.close();
		}
	},
	na = (e) => {
		e.start = (
			(t) =>
			(n = 0, r = 0, o) => {
				const s = e.buffer,
					a = s === null ? r : Math.min(s.duration, r);
				s !== null && a > s.duration - 0.5 / e.context.sampleRate
					? t.call(e, n, 0, 0)
					: t.call(e, n, a, o);
			}
		)(e.start);
	},
	ra = (e, t) => {
		const n = t.createGain();
		e.connect(n);
		const r = ((o) => () => {
			o.call(e, n), e.removeEventListener("ended", r);
		})(e.disconnect);
		e.addEventListener("ended", r),
			Nn(e, n),
			(e.stop = ((o) => {
				let s = !1;
				return (a = 0) => {
					if (s)
						try {
							o.call(e, a);
						} catch {
							n.gain.setValueAtTime(0, a);
						}
					else o.call(e, a), (s = !0);
				};
			})(e.stop));
	},
	Se = (e, t) => (n) => {
		const r = { value: e };
		return (
			Object.defineProperties(n, { currentTarget: r, target: r }),
			typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
		);
	},
	oa = qr(le),
	sa = Kr(le),
	aa = jo(ze),
	ia = new WeakMap(),
	ca = Qo(ia),
	we = xo(new Map(), new WeakMap()),
	J = Gs(),
	In = Jo(z),
	Xe = Us(z, In, ce),
	ae = ns(fn),
	ve = xs(J),
	Q = ls(ve),
	kn = new WeakMap(),
	Ln = Yo(Se),
	Ze = _s(J),
	ua = is(Ze),
	xn = cs(J),
	la = us(J),
	Ae = Es(J),
	Oe = Mo(
		zr(cn),
		Zr(oa, sa, mt, aa, gt, z, ca, be, X, le, oe, ce, Pe),
		we,
		as(lt, gt, z, X, Ee, oe),
		ue,
		ss,
		de,
		Fo(mt, lt, z, X, Ee, ae, oe, Q),
		qo(kn, z, K),
		Ln,
		ae,
		ua,
		xn,
		la,
		Q,
		Ae
	),
	da = new WeakSet(),
	Qt = gs(J),
	Pn = Vo(new Uint32Array(1)),
	fa = qs(Pn, ue),
	ha = zs(Pn),
	pa = no(da, we, de, Qt, ve, Vs(Qt), fa, ha),
	Mt = Jr(se),
	Un = Bs(In, Te, ce),
	Nt = Po(Un),
	Ke = vs(Mt, we, Ks, Js, Qs, On, ea, Rn, na, Hs(Tt), ra),
	St = Ps(es(Te), Un),
	ma = so(Nt, Ke, X, St, Xe),
	Je = No(Hr(ln), kn, dn, So, Wr, Vr, Fr, jr, $r, it, sn, Ze, Sn),
	ga = oo(Oe, ma, Je, Z, Ke, ae, Q, Se),
	wa = mo(Oe, go, ue, Z, ys(se, Tt), ae, Q, Xe),
	Qe = ms(le, xn),
	va = Ys(Z, Qe),
	Ot = Os(Ze, va),
	_a = ks(Mt, Ke, se, Qe),
	Re = Is(Mt, we, _a, On, Rn),
	ya = Wo(Nt, Re, X, St, Xe),
	Ea = Do(Oe, Je, ya, Re, ae, Q, Se),
	Aa = Ds(we, se, Ct, js(se, ve)),
	ba = wo(Je, Ot, Re, Ct, de, Xs, Q, Tt),
	Bn = new WeakMap(),
	Ca = ps(wa, ba, Ln, Q, Bn, Se),
	Dn = ds(J),
	Rt = Xo(J),
	Wn = new WeakMap(),
	Ta = rs(Wn, ve),
	en = Dn
		? Xr(
				we,
				de,
				Ho(J),
				Rt,
				Zo(Gr),
				ae,
				Ta,
				Q,
				Ae,
				new WeakMap(),
				new WeakMap(),
				Fs(Ae, ve),
				J
		  )
		: void 0,
	Ma = fs(Oe, Ls, ae, Q),
	Vn = os(Bn),
	Na = Qr(Vn),
	Fn = Uo(ue),
	Sa = $o(Vn),
	jn = zo(ue),
	$n = new WeakMap(),
	Oa = Ko($n, K),
	Ra = Ss(Fn, ue, Z, Ot, Mn, Re, se, Ct, de, jn, Rt, Oa, Qe),
	Ia = bs(Z, Ra, se, de, Qe),
	ka = Lo(Nt, Fn, Ke, Ot, Mn, Re, se, Sa, jn, Rt, X, Ae, ve, St, Xe, Aa),
	La = ts(Wn),
	xa = Ws($n),
	tn = Dn ? Ro(Na, Oe, Je, ka, Ia, z, La, ae, Q, Ae, Zs, xa, ta, Se) : void 0,
	Pa = hs(Z, de, $s, Ca, Ze),
	Gn =
		"Missing AudioWorklet support. Maybe this is not running in a secure context.",
	Ua = async (e, t, n, r, o) => {
		const { encoderId: s, port: a } = await rn(o, t.sampleRate);
		if (tn === void 0) throw new Error(Gn);
		const c = new ga(t, { buffer: e }),
			i = new Ma(t, { mediaStream: r }),
			u = Pr(tn, t, { channelCount: n });
		return {
			audioBufferSourceNode: c,
			encoderId: s,
			mediaStreamAudioSourceNode: i,
			port: a,
			recorderAudioWorkletNode: u
		};
	},
	Ba = (e, t, n, r) => (o, s, a) => {
		var c;
		const i =
				(c = s.getAudioTracks()[0]) === null || c === void 0
					? void 0
					: c.getSettings().sampleRate,
			u = new Pa({ latencyHint: "playback", sampleRate: i }),
			d = Math.max(1024, Math.ceil(u.baseLatency * u.sampleRate)),
			l = new pa({ length: d, sampleRate: u.sampleRate }),
			p = [],
			m = xr((C) => {
				if (en === void 0) throw new Error(Gn);
				return en(u, C);
			});
		let w = null,
			f = null,
			h = null,
			g = null,
			_ = !0;
		const A = (C) => {
				o.dispatchEvent(e("dataavailable", { data: new Blob(C, { type: a }) }));
			},
			T = async (C, N) => {
				const I = await Ue(C, N);
				h === null ? p.push(...I) : (A(I), (g = T(C, N)));
			},
			v = () => ((_ = !0), u.resume()),
			E = () => {
				h !== null &&
					(w !== null &&
						(s.removeEventListener("addtrack", w),
						s.removeEventListener("removetrack", w)),
					f !== null && clearTimeout(f),
					h.then(
						async ({
							constantSourceNode: C,
							encoderId: N,
							mediaStreamAudioSourceNode: I,
							recorderAudioWorkletNode: M
						}) => {
							g !== null && (g.catch(() => {}), (g = null)),
								await M.stop(),
								I.disconnect(M),
								C.stop();
							const x = await Ue(N, null);
							h === null && (await y()),
								A([...p, ...x]),
								(p.length = 0),
								o.dispatchEvent(new Event("stop"));
						}
					),
					(h = null));
			},
			y = () => ((_ = !1), u.suspend());
		return (
			y(),
			{
				get mimeType() {
					return a;
				},
				get state() {
					return h === null ? "inactive" : _ ? "recording" : "paused";
				},
				pause() {
					if (h === null) throw n();
					_ && (y(), o.dispatchEvent(new Event("pause")));
				},
				resume() {
					if (h === null) throw n();
					_ || (v(), o.dispatchEvent(new Event("resume")));
				},
				start(C) {
					var N;
					if (h !== null) throw n();
					if (s.getVideoTracks().length > 0) throw r();
					o.dispatchEvent(new Event("start"));
					const I = s.getAudioTracks(),
						M =
							I.length === 0
								? 2
								: (N = I[0].getSettings().channelCount) !== null && N !== void 0
								? N
								: 2;
					h = Promise.all([v(), m.then(() => Ua(l, u, M, s, a))]).then(
						async ([
							,
							{
								audioBufferSourceNode: k,
								encoderId: B,
								mediaStreamAudioSourceNode: U,
								port: R,
								recorderAudioWorkletNode: P
							}
						]) => {
							U.connect(P),
								await new Promise((S) => {
									(k.onended = S),
										k.connect(P),
										k.start(u.currentTime + d / u.sampleRate);
								}),
								k.disconnect(P);
							const D = new Ea(u, { offset: 0 });
							return (
								(D.onended = () => D.disconnect()),
								D.connect(u.destination),
								D.start(),
								await P.record(R),
								C !== void 0 && (g = T(B, C)),
								{
									constantSourceNode: D,
									encoderId: B,
									mediaStreamAudioSourceNode: U,
									recorderAudioWorkletNode: P
								}
							);
						}
					);
					const x = s.getTracks();
					(w = () => {
						E(), o.dispatchEvent(new ErrorEvent("error", { error: t() }));
					}),
						s.addEventListener("addtrack", w),
						s.addEventListener("removetrack", w),
						(f = setInterval(() => {
							const k = s.getTracks();
							(k.length !== x.length || k.some((B, U) => B !== x[U])) &&
								w !== null &&
								w();
						}, 1e3));
				},
				stop: E
			}
		);
	};
class st {
	constructor(t, n = 0, r) {
		if (n < 0 || (r !== void 0 && r < 0)) throw new RangeError();
		const o = t.reduce((d, l) => d + l.byteLength, 0);
		if (n > o || (r !== void 0 && n + r > o)) throw new RangeError();
		const s = [],
			a = r === void 0 ? o - n : r,
			c = [];
		let i = 0,
			u = n;
		for (const d of t)
			if (c.length === 0)
				if (d.byteLength > u) {
					i = d.byteLength - u;
					const l = i > a ? a : i;
					s.push(new DataView(d, u, l)), c.push(d);
				} else u -= d.byteLength;
			else if (i < a) {
				i += d.byteLength;
				const l = i > a ? d.byteLength - i + a : d.byteLength;
				s.push(new DataView(d, 0, l)), c.push(d);
			}
		(this._buffers = c),
			(this._byteLength = a),
			(this._byteOffset = u),
			(this._dataViews = s),
			(this._internalBuffer = new DataView(new ArrayBuffer(8)));
	}
	get buffers() {
		return this._buffers;
	}
	get byteLength() {
		return this._byteLength;
	}
	get byteOffset() {
		return this._byteOffset;
	}
	getFloat32(t, n) {
		return (
			this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
			this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
			this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
			this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
			this._internalBuffer.getFloat32(0, n)
		);
	}
	getFloat64(t, n) {
		return (
			this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
			this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
			this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
			this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
			this._internalBuffer.setUint8(4, this.getUint8(t + 4)),
			this._internalBuffer.setUint8(5, this.getUint8(t + 5)),
			this._internalBuffer.setUint8(6, this.getUint8(t + 6)),
			this._internalBuffer.setUint8(7, this.getUint8(t + 7)),
			this._internalBuffer.getFloat64(0, n)
		);
	}
	getInt16(t, n) {
		return (
			this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
			this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
			this._internalBuffer.getInt16(0, n)
		);
	}
	getInt32(t, n) {
		return (
			this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
			this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
			this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
			this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
			this._internalBuffer.getInt32(0, n)
		);
	}
	getInt8(t) {
		const [n, r] = this._findDataViewWithOffset(t);
		return n.getInt8(t - r);
	}
	getUint16(t, n) {
		return (
			this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
			this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
			this._internalBuffer.getUint16(0, n)
		);
	}
	getUint32(t, n) {
		return (
			this._internalBuffer.setUint8(0, this.getUint8(t + 0)),
			this._internalBuffer.setUint8(1, this.getUint8(t + 1)),
			this._internalBuffer.setUint8(2, this.getUint8(t + 2)),
			this._internalBuffer.setUint8(3, this.getUint8(t + 3)),
			this._internalBuffer.getUint32(0, n)
		);
	}
	getUint8(t) {
		const [n, r] = this._findDataViewWithOffset(t);
		return n.getUint8(t - r);
	}
	setFloat32(t, n, r) {
		this._internalBuffer.setFloat32(0, n, r),
			this.setUint8(t, this._internalBuffer.getUint8(0)),
			this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
			this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
			this.setUint8(t + 3, this._internalBuffer.getUint8(3));
	}
	setFloat64(t, n, r) {
		this._internalBuffer.setFloat64(0, n, r),
			this.setUint8(t, this._internalBuffer.getUint8(0)),
			this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
			this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
			this.setUint8(t + 3, this._internalBuffer.getUint8(3)),
			this.setUint8(t + 4, this._internalBuffer.getUint8(4)),
			this.setUint8(t + 5, this._internalBuffer.getUint8(5)),
			this.setUint8(t + 6, this._internalBuffer.getUint8(6)),
			this.setUint8(t + 7, this._internalBuffer.getUint8(7));
	}
	setInt16(t, n, r) {
		this._internalBuffer.setInt16(0, n, r),
			this.setUint8(t, this._internalBuffer.getUint8(0)),
			this.setUint8(t + 1, this._internalBuffer.getUint8(1));
	}
	setInt32(t, n, r) {
		this._internalBuffer.setInt32(0, n, r),
			this.setUint8(t, this._internalBuffer.getUint8(0)),
			this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
			this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
			this.setUint8(t + 3, this._internalBuffer.getUint8(3));
	}
	setInt8(t, n) {
		const [r, o] = this._findDataViewWithOffset(t);
		r.setInt8(t - o, n);
	}
	setUint16(t, n, r) {
		this._internalBuffer.setUint16(0, n, r),
			this.setUint8(t, this._internalBuffer.getUint8(0)),
			this.setUint8(t + 1, this._internalBuffer.getUint8(1));
	}
	setUint32(t, n, r) {
		this._internalBuffer.setUint32(0, n, r),
			this.setUint8(t, this._internalBuffer.getUint8(0)),
			this.setUint8(t + 1, this._internalBuffer.getUint8(1)),
			this.setUint8(t + 2, this._internalBuffer.getUint8(2)),
			this.setUint8(t + 3, this._internalBuffer.getUint8(3));
	}
	setUint8(t, n) {
		const [r, o] = this._findDataViewWithOffset(t);
		r.setUint8(t - o, n);
	}
	_findDataViewWithOffset(t) {
		let n = 0;
		for (const r of this._dataViews) {
			const o = n + r.byteLength;
			if (t >= n && t < o) return [r, n];
			n = o;
		}
		throw new RangeError();
	}
}
const Da = (e, t, n, r, o) => (s, a, c, i) => {
		const u = c.getAudioTracks(),
			d = [],
			l = u.length === 0 ? void 0 : u[0].getSettings().channelCount,
			p = new a(c, { mimeType: "audio/webm;codecs=pcm" }),
			m = u.length === 0 ? void 0 : u[0].getSettings().sampleRate;
		let w = null,
			f = () => {};
		const h = (A) => {
				s.dispatchEvent(e("dataavailable", { data: new Blob(A, { type: i }) }));
			},
			g = async (A, T) => {
				const v = await Ue(A, T);
				p.state === "inactive" ? d.push(...v) : (h(v), (w = g(A, T)));
			},
			_ = () => {
				p.state !== "inactive" &&
					(w !== null && (w.catch(() => {}), (w = null)),
					f(),
					(f = () => {}),
					p.stop());
			};
		return (
			p.addEventListener("error", () => {
				_(), s.dispatchEvent(new ErrorEvent("error", { error: t() }));
			}),
			p.addEventListener("start", () => s.dispatchEvent(new Event("start"))),
			{
				get mimeType() {
					return i;
				},
				get state() {
					return p.state;
				},
				pause() {
					return p.pause();
				},
				resume() {
					return p.resume();
				},
				start(A) {
					if (c.getVideoTracks().length > 0) throw n();
					if (p.state === "inactive") {
						if (m === void 0) throw new Error("The sampleRate is not defined.");
						let T = !1,
							v = !1,
							E = 0,
							y = rn(i, m);
						f = () => {
							v = !0;
						};
						const C = on(
							p,
							"dataavailable"
						)(({ data: N }) => {
							(E += 1),
								(y = y.then(
									async ({
										dataView: I = null,
										elementType: M = null,
										encoderId: x,
										port: k
									}) => {
										const B = await N.arrayBuffer();
										E -= 1;
										const U =
											I === null
												? new st([B])
												: new st([...I.buffers, B], I.byteOffset);
										if (!T && p.state === "recording" && !v) {
											const L = o(U, 0);
											if (L === null)
												return {
													dataView: U,
													elementType: M,
													encoderId: x,
													port: k
												};
											const { value: W } = L;
											if (W !== 172351395)
												return {
													dataView: I,
													elementType: M,
													encoderId: x,
													port: k
												};
											T = !0;
										}
										const {
												currentElementType: R,
												offset: P,
												contents: D
											} = r(U, M, l),
											S =
												P < U.byteLength
													? new st(U.buffers, U.byteOffset + P)
													: null;
										return (
											D.forEach((L) =>
												k.postMessage(
													L,
													L.map(({ buffer: W }) => W)
												)
											),
											E === 0 &&
												(p.state === "inactive" || v) &&
												(Ue(x, null).then((L) => {
													h([...d, ...L]),
														(d.length = 0),
														s.dispatchEvent(new Event("stop"));
												}),
												k.postMessage([]),
												k.close(),
												C()),
											{ dataView: S, elementType: R, encoderId: x, port: k }
										);
									}
								));
						});
						A !== void 0 && y.then(({ encoderId: N }) => (w = g(N, A)));
					}
					p.start(100);
				},
				stop: _
			}
		);
	},
	Wa = () => (typeof window > "u" ? null : window),
	qn = (e, t) => {
		if (t >= e.byteLength) return null;
		const n = e.getUint8(t);
		if (n > 127) return 1;
		if (n > 63) return 2;
		if (n > 31) return 3;
		if (n > 15) return 4;
		if (n > 7) return 5;
		if (n > 3) return 6;
		if (n > 1) return 7;
		if (n > 0) return 8;
		const r = qn(e, t + 1);
		return r === null ? null : r + 8;
	},
	Va = (e, t) => (n) => {
		const r = { value: e };
		return (
			Object.defineProperties(n, { currentTarget: r, target: r }),
			typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
		);
	},
	zn = [],
	et = Wa(),
	Fa = hr(et),
	Hn = ar(Fa),
	ja = Ba(Hn, vt, lr, $e),
	It = vr(qn),
	$a = gr(It),
	Ga = wr(It),
	qa = ir($a, Ga),
	za = Da(Hn, vt, $e, qa, It),
	Ha = ur(et),
	Ya = mr(et),
	Xa = pr(vt, $e),
	ui = fr(Xa, $e, ja, za, zn, cr(Ha, Va), Ya),
	li = () => dr(et),
	di = async (e) => {
		zn.push(await sr(e));
	};
export { ui as MediaRecorder, li as isSupported, di as register };
//# sourceMappingURL=module-fcbc0651.js.map
