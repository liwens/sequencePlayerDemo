(()=>{var E0={231:function(_t){(function(lt,et){_t.exports=et()})(this,function(){return function(bt){var lt={};function et(p){if(lt[p])return lt[p].exports;var K=lt[p]={exports:{},id:p,loaded:!1};return bt[p].call(K.exports,K,K.exports,et),K.loaded=!0,K.exports}return et.m=bt,et.c=lt,et.p="",et(0)}([function(bt,lt,et){"use strict";Object.defineProperty(lt,"__esModule",{value:!0}),lt.isNotPNG=Y,lt.isNotAPNG=H,lt.default=D;var p=et(1),K=O(p),m=et(2);function O(P){return P&&P.__esModule?P:{default:P}}var E=new Error("Not a PNG"),$=new Error("Not an animated PNG");function Y(P){return P===E}function H(P){return P===$}var X=new Uint8Array([137,80,78,71,13,10,26,10]);function D(P){var C=new Uint8Array(P);if(Array.prototype.some.call(X,function(Xt,Gt){return Xt!==C[Gt]}))return E;var Z=!1;if(it(C,function(Xt){return!(Z=Xt==="acTL")}),!Z)return $;var tt=[],dt=[],pt=null,U=null,rt=0,ht=new m.APNG;if(it(C,function(Xt,Gt,Ct,le){var qt=new DataView(Gt.buffer);switch(Xt){case"IHDR":pt=Gt.subarray(Ct+8,Ct+8+le),ht.width=qt.getUint32(Ct+8),ht.height=qt.getUint32(Ct+12);break;case"acTL":ht.numPlays=qt.getUint32(Ct+8+4);break;case"fcTL":U&&(ht.frames.push(U),rt++),U=new m.Frame,U.width=qt.getUint32(Ct+8+4),U.height=qt.getUint32(Ct+8+8),U.left=qt.getUint32(Ct+8+12),U.top=qt.getUint32(Ct+8+16);var ve=qt.getUint16(Ct+8+20),Tt=qt.getUint16(Ct+8+22);Tt===0&&(Tt=100),U.delay=1e3*ve/Tt,U.delay<=10&&(U.delay=100),ht.playTime+=U.delay,U.disposeOp=qt.getUint8(Ct+8+24),U.blendOp=qt.getUint8(Ct+8+25),U.dataParts=[],rt===0&&U.disposeOp===2&&(U.disposeOp=1);break;case"fdAT":U&&U.dataParts.push(Gt.subarray(Ct+8+4,Ct+8+le));break;case"IDAT":U&&U.dataParts.push(Gt.subarray(Ct+8,Ct+8+le));break;case"IEND":dt.push(d(Gt,Ct,12+le));break;default:tt.push(d(Gt,Ct,12+le))}}),U&&ht.frames.push(U),ht.frames.length==0)return $;var ot=new Blob(tt),re=new Blob(dt);return ht.frames.forEach(function(Xt){var Gt=[];Gt.push(X),pt.set(R(Xt.width),0),pt.set(R(Xt.height),4),Gt.push(I("IHDR",pt)),Gt.push(ot),Xt.dataParts.forEach(function(Ct){return Gt.push(I("IDAT",Ct))}),Gt.push(re),Xt.imageData=new Blob(Gt,{type:"image/png"}),delete Xt.dataParts,Gt=null}),ht}function it(P,C){var Z=new DataView(P.buffer),tt=8,dt=void 0,pt=void 0,U=void 0;do pt=Z.getUint32(tt),dt=s(P,tt+4,4),U=C(dt,P,tt,pt),tt+=12+pt;while(U!==!1&&dt!="IEND"&&tt<P.length)}function s(P,C,Z){var tt=Array.prototype.slice.call(P.subarray(C,C+Z));return String.fromCharCode.apply(String,tt)}function l(P){for(var C=new Uint8Array(P.length),Z=0;Z<P.length;Z++)C[Z]=P.charCodeAt(Z);return C}function d(P,C,Z){var tt=new Uint8Array(Z);return tt.set(P.subarray(C,C+Z)),tt}var I=function(C,Z){var tt=C.length+Z.length,dt=new Uint8Array(tt+8),pt=new DataView(dt.buffer);pt.setUint32(0,Z.length),dt.set(l(C),4),dt.set(Z,8);var U=(0,K.default)(dt,4,tt);return pt.setUint32(tt+4,U),dt},R=function(C){return new Uint8Array([C>>>24&255,C>>>16&255,C>>>8&255,C&255])}},function(bt,lt){"use strict";Object.defineProperty(lt,"__esModule",{value:!0}),lt.default=function(O){for(var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,$=arguments.length>2&&arguments[2]!==void 0?arguments[2]:O.length-E,Y=-1,H=E,X=E+$;H<X;H++)Y=Y>>>8^et[(Y^O[H])&255];return Y^-1};for(var et=new Uint32Array(256),p=0;p<256;p++){for(var K=p,m=0;m<8;m++)K=K&1?3988292384^K>>>1:K>>>1;et[p]=K}},function(bt,lt,et){"use strict";Object.defineProperty(lt,"__esModule",{value:!0}),lt.Frame=lt.APNG=void 0;var p=function(){function H(X,D){for(var it=0;it<D.length;it++){var s=D[it];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(X,s.key,s)}}return function(X,D,it){return D&&H(X.prototype,D),it&&H(X,it),X}}(),K=et(3),m=O(K);function O(H){return H&&H.__esModule?H:{default:H}}function E(H,X){if(!(H instanceof X))throw new TypeError("Cannot call a class as a function")}var $=lt.APNG=function(){function H(){E(this,H),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return p(H,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(D){return D.createImage()}))}},{key:"getPlayer",value:function(D){var it=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return this.createImages().then(function(){return new m.default(it,D,s)})}}]),H}(),Y=lt.Frame=function(){function H(){E(this,H),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return p(H,[{key:"createImage",value:function(){var D=this;return this.imageElement?Promise.resolve():new Promise(function(it,s){var l=URL.createObjectURL(D.imageData);D.imageElement=document.createElement("img"),D.imageElement.onload=function(){URL.revokeObjectURL(l),it()},D.imageElement.onerror=function(){URL.revokeObjectURL(l),D.imageElement=null,s(new Error("Image creation error"))},D.imageElement.src=l})}}]),H}()},function(bt,lt,et){"use strict";Object.defineProperty(lt,"__esModule",{value:!0});var p=function(){function X(D,it){for(var s=0;s<it.length;s++){var l=it[s];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(D,l.key,l)}}return function(D,it,s){return it&&X(D.prototype,it),s&&X(D,s),D}}(),K=et(4),m=O(K);function O(X){return X&&X.__esModule?X:{default:X}}function E(X,D){if(!(X instanceof D))throw new TypeError("Cannot call a class as a function")}function $(X,D){if(!X)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return D&&(typeof D=="object"||typeof D=="function")?D:X}function Y(X,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof D);X.prototype=Object.create(D&&D.prototype,{constructor:{value:X,enumerable:!1,writable:!0,configurable:!0}}),D&&(Object.setPrototypeOf?Object.setPrototypeOf(X,D):X.__proto__=D)}var H=function(X){Y(D,X);function D(it,s,l){E(this,D);var d=$(this,(D.__proto__||Object.getPrototypeOf(D)).call(this));return d.playbackRate=1,d._currentFrameNumber=0,d._ended=!1,d._paused=!0,d._numPlays=0,d._apng=it,d.context=s,d.stop(),l&&d.play(),d}return p(D,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,this._apng.numPlays!==0&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&this._prevFrame.disposeOp==1?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&this._prevFrame.disposeOp==2&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var s=this.currentFrame;this._prevFrame=s,this._prevFrameData=null,s.disposeOp==2&&(this._prevFrameData=this.context.getImageData(s.left,s.top,s.width,s.height)),s.blendOp==0&&this.context.clearRect(s.left,s.top,s.width,s.height),this.context.drawImage(s.imageElement,s.left,s.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var s=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var l=performance.now()+this.currentFrame.delay/this.playbackRate,d=function I(R){if(!(s._ended||s._paused)){if(R>=l){for(;R-l>=s._apng.playTime/s.playbackRate;)l+=s._apng.playTime/s.playbackRate,s._numPlays++;do s.renderNextFrame(),l+=s.currentFrame.delay/s.playbackRate;while(!s._ended&&R>l)}requestAnimationFrame(I)}};requestAnimationFrame(d)}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),D}(m.default);lt.default=H},function(bt,lt){function et(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}bt.exports=et,et.EventEmitter=et,et.prototype._events=void 0,et.prototype._maxListeners=void 0,et.defaultMaxListeners=10,et.prototype.setMaxListeners=function(E){if(!K(E)||E<0||isNaN(E))throw TypeError("n must be a positive number");return this._maxListeners=E,this},et.prototype.emit=function(E){var $,Y,H,X,D,it;if(this._events||(this._events={}),E==="error"&&(!this._events.error||m(this._events.error)&&!this._events.error.length)){if($=arguments[1],$ instanceof Error)throw $;var s=new Error('Uncaught, unspecified "error" event. ('+$+")");throw s.context=$,s}if(Y=this._events[E],O(Y))return!1;if(p(Y))switch(arguments.length){case 1:Y.call(this);break;case 2:Y.call(this,arguments[1]);break;case 3:Y.call(this,arguments[1],arguments[2]);break;default:X=Array.prototype.slice.call(arguments,1),Y.apply(this,X)}else if(m(Y))for(X=Array.prototype.slice.call(arguments,1),it=Y.slice(),H=it.length,D=0;D<H;D++)it[D].apply(this,X);return!0},et.prototype.addListener=function(E,$){var Y;if(!p($))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",E,p($.listener)?$.listener:$),this._events[E]?m(this._events[E])?this._events[E].push($):this._events[E]=[this._events[E],$]:this._events[E]=$,m(this._events[E])&&!this._events[E].warned&&(O(this._maxListeners)?Y=et.defaultMaxListeners:Y=this._maxListeners,Y&&Y>0&&this._events[E].length>Y&&(this._events[E].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[E].length),typeof console.trace=="function"&&console.trace())),this},et.prototype.on=et.prototype.addListener,et.prototype.once=function(E,$){if(!p($))throw TypeError("listener must be a function");var Y=!1;function H(){this.removeListener(E,H),Y||(Y=!0,$.apply(this,arguments))}return H.listener=$,this.on(E,H),this},et.prototype.removeListener=function(E,$){var Y,H,X,D;if(!p($))throw TypeError("listener must be a function");if(!this._events||!this._events[E])return this;if(Y=this._events[E],X=Y.length,H=-1,Y===$||p(Y.listener)&&Y.listener===$)delete this._events[E],this._events.removeListener&&this.emit("removeListener",E,$);else if(m(Y)){for(D=X;D-- >0;)if(Y[D]===$||Y[D].listener&&Y[D].listener===$){H=D;break}if(H<0)return this;Y.length===1?(Y.length=0,delete this._events[E]):Y.splice(H,1),this._events.removeListener&&this.emit("removeListener",E,$)}return this},et.prototype.removeAllListeners=function(E){var $,Y;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[E]&&delete this._events[E],this;if(arguments.length===0){for($ in this._events)$!=="removeListener"&&this.removeAllListeners($);return this.removeAllListeners("removeListener"),this._events={},this}if(Y=this._events[E],p(Y))this.removeListener(E,Y);else if(Y)for(;Y.length;)this.removeListener(E,Y[Y.length-1]);return delete this._events[E],this},et.prototype.listeners=function(E){var $;return!this._events||!this._events[E]?$=[]:p(this._events[E])?$=[this._events[E]]:$=this._events[E].slice(),$},et.prototype.listenerCount=function(E){if(this._events){var $=this._events[E];if(p($))return 1;if($)return $.length}return 0},et.listenerCount=function(E,$){return E.listenerCount($)};function p(E){return typeof E=="function"}function K(E){return typeof E=="number"}function m(E){return typeof E=="object"&&E!==null}function O(E){return E===void 0}}])})},594:function(_t){(function(lt,et){_t.exports=et()})(this,function(){return function(){var bt={686:function(p,K,m){"use strict";m.d(K,{default:function(){return ve}});var O=m(279),E=m.n(O),$=m(370),Y=m.n($),H=m(817),X=m.n(H);function D(Tt){try{return document.execCommand(Tt)}catch(gt){return!1}}var it=function(gt){var ct=X()(gt);return D("cut"),ct},s=it;function l(Tt){var gt=document.documentElement.getAttribute("dir")==="rtl",ct=document.createElement("textarea");ct.style.fontSize="12pt",ct.style.border="0",ct.style.padding="0",ct.style.margin="0",ct.style.position="absolute",ct.style[gt?"right":"left"]="-9999px";var nt=window.pageYOffset||document.documentElement.scrollTop;return ct.style.top="".concat(nt,"px"),ct.setAttribute("readonly",""),ct.value=Tt,ct}var d=function(gt,ct){var nt=l(gt);ct.container.appendChild(nt);var at=X()(nt);return D("copy"),nt.remove(),at},I=function(gt){var ct=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},nt="";return typeof gt=="string"?nt=d(gt,ct):gt instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(gt==null?void 0:gt.type)?nt=d(gt.value,ct):(nt=X()(gt),D("copy")),nt},R=I;function P(Tt){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(ct){return typeof ct}:P=function(ct){return ct&&typeof Symbol=="function"&&ct.constructor===Symbol&&ct!==Symbol.prototype?"symbol":typeof ct},P(Tt)}var C=function(){var gt=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ct=gt.action,nt=ct===void 0?"copy":ct,at=gt.container,mt=gt.target,wt=gt.text;if(nt!=="copy"&&nt!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(mt!==void 0)if(mt&&P(mt)==="object"&&mt.nodeType===1){if(nt==="copy"&&mt.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(nt==="cut"&&(mt.hasAttribute("readonly")||mt.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(wt)return R(wt,{container:at});if(mt)return nt==="cut"?s(mt):R(mt,{container:at})},Z=C;function tt(Tt){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tt=function(ct){return typeof ct}:tt=function(ct){return ct&&typeof Symbol=="function"&&ct.constructor===Symbol&&ct!==Symbol.prototype?"symbol":typeof ct},tt(Tt)}function dt(Tt,gt){if(!(Tt instanceof gt))throw new TypeError("Cannot call a class as a function")}function pt(Tt,gt){for(var ct=0;ct<gt.length;ct++){var nt=gt[ct];nt.enumerable=nt.enumerable||!1,nt.configurable=!0,"value"in nt&&(nt.writable=!0),Object.defineProperty(Tt,nt.key,nt)}}function U(Tt,gt,ct){return gt&&pt(Tt.prototype,gt),ct&&pt(Tt,ct),Tt}function rt(Tt,gt){if(typeof gt!="function"&&gt!==null)throw new TypeError("Super expression must either be null or a function");Tt.prototype=Object.create(gt&&gt.prototype,{constructor:{value:Tt,writable:!0,configurable:!0}}),gt&&ht(Tt,gt)}function ht(Tt,gt){return ht=Object.setPrototypeOf||function(nt,at){return nt.__proto__=at,nt},ht(Tt,gt)}function ot(Tt){var gt=Gt();return function(){var nt=Ct(Tt),at;if(gt){var mt=Ct(this).constructor;at=Reflect.construct(nt,arguments,mt)}else at=nt.apply(this,arguments);return re(this,at)}}function re(Tt,gt){return gt&&(tt(gt)==="object"||typeof gt=="function")?gt:Xt(Tt)}function Xt(Tt){if(Tt===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Tt}function Gt(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(Tt){return!1}}function Ct(Tt){return Ct=Object.setPrototypeOf?Object.getPrototypeOf:function(ct){return ct.__proto__||Object.getPrototypeOf(ct)},Ct(Tt)}function le(Tt,gt){var ct="data-clipboard-".concat(Tt);if(gt.hasAttribute(ct))return gt.getAttribute(ct)}var qt=function(Tt){rt(ct,Tt);var gt=ot(ct);function ct(nt,at){var mt;return dt(this,ct),mt=gt.call(this),mt.resolveOptions(at),mt.listenClick(nt),mt}return U(ct,[{key:"resolveOptions",value:function(){var at=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof at.action=="function"?at.action:this.defaultAction,this.target=typeof at.target=="function"?at.target:this.defaultTarget,this.text=typeof at.text=="function"?at.text:this.defaultText,this.container=tt(at.container)==="object"?at.container:document.body}},{key:"listenClick",value:function(at){var mt=this;this.listener=Y()(at,"click",function(wt){return mt.onClick(wt)})}},{key:"onClick",value:function(at){var mt=at.delegateTarget||at.currentTarget,wt=this.action(mt)||"copy",Lt=Z({action:wt,container:this.container,target:this.target(mt),text:this.text(mt)});this.emit(Lt?"success":"error",{action:wt,text:Lt,trigger:mt,clearSelection:function(){mt&&mt.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(at){return le("action",at)}},{key:"defaultTarget",value:function(at){var mt=le("target",at);if(mt)return document.querySelector(mt)}},{key:"defaultText",value:function(at){return le("text",at)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(at){var mt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(at,mt)}},{key:"cut",value:function(at){return s(at)}},{key:"isSupported",value:function(){var at=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],mt=typeof at=="string"?[at]:at,wt=!!document.queryCommandSupported;return mt.forEach(function(Lt){wt=wt&&!!document.queryCommandSupported(Lt)}),wt}}]),ct}(E()),ve=qt},828:function(p){var K=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var m=Element.prototype;m.matches=m.matchesSelector||m.mozMatchesSelector||m.msMatchesSelector||m.oMatchesSelector||m.webkitMatchesSelector}function O(E,$){for(;E&&E.nodeType!==K;){if(typeof E.matches=="function"&&E.matches($))return E;E=E.parentNode}}p.exports=O},438:function(p,K,m){var O=m(828);function E(H,X,D,it,s){var l=Y.apply(this,arguments);return H.addEventListener(D,l,s),{destroy:function(){H.removeEventListener(D,l,s)}}}function $(H,X,D,it,s){return typeof H.addEventListener=="function"?E.apply(null,arguments):typeof D=="function"?E.bind(null,document).apply(null,arguments):(typeof H=="string"&&(H=document.querySelectorAll(H)),Array.prototype.map.call(H,function(l){return E(l,X,D,it,s)}))}function Y(H,X,D,it){return function(s){s.delegateTarget=O(s.target,X),s.delegateTarget&&it.call(H,s)}}p.exports=$},879:function(p,K){K.node=function(m){return m!==void 0&&m instanceof HTMLElement&&m.nodeType===1},K.nodeList=function(m){var O=Object.prototype.toString.call(m);return m!==void 0&&(O==="[object NodeList]"||O==="[object HTMLCollection]")&&"length"in m&&(m.length===0||K.node(m[0]))},K.string=function(m){return typeof m=="string"||m instanceof String},K.fn=function(m){var O=Object.prototype.toString.call(m);return O==="[object Function]"}},370:function(p,K,m){var O=m(879),E=m(438);function $(D,it,s){if(!D&&!it&&!s)throw new Error("Missing required arguments");if(!O.string(it))throw new TypeError("Second argument must be a String");if(!O.fn(s))throw new TypeError("Third argument must be a Function");if(O.node(D))return Y(D,it,s);if(O.nodeList(D))return H(D,it,s);if(O.string(D))return X(D,it,s);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function Y(D,it,s){return D.addEventListener(it,s),{destroy:function(){D.removeEventListener(it,s)}}}function H(D,it,s){return Array.prototype.forEach.call(D,function(l){l.addEventListener(it,s)}),{destroy:function(){Array.prototype.forEach.call(D,function(l){l.removeEventListener(it,s)})}}}function X(D,it,s){return E(document.body,D,it,s)}p.exports=$},817:function(p){function K(m){var O;if(m.nodeName==="SELECT")m.focus(),O=m.value;else if(m.nodeName==="INPUT"||m.nodeName==="TEXTAREA"){var E=m.hasAttribute("readonly");E||m.setAttribute("readonly",""),m.select(),m.setSelectionRange(0,m.value.length),E||m.removeAttribute("readonly"),O=m.value}else{m.hasAttribute("contenteditable")&&m.focus();var $=window.getSelection(),Y=document.createRange();Y.selectNodeContents(m),$.removeAllRanges(),$.addRange(Y),O=$.toString()}return O}p.exports=K},279:function(p){function K(){}K.prototype={on:function(m,O,E){var $=this.e||(this.e={});return($[m]||($[m]=[])).push({fn:O,ctx:E}),this},once:function(m,O,E){var $=this;function Y(){$.off(m,Y),O.apply(E,arguments)}return Y._=O,this.on(m,Y,E)},emit:function(m){var O=[].slice.call(arguments,1),E=((this.e||(this.e={}))[m]||[]).slice(),$=0,Y=E.length;for($;$<Y;$++)E[$].fn.apply(E[$].ctx,O);return this},off:function(m,O){var E=this.e||(this.e={}),$=E[m],Y=[];if($&&O)for(var H=0,X=$.length;H<X;H++)$[H].fn!==O&&$[H].fn._!==O&&Y.push($[H]);return Y.length?E[m]=Y:delete E[m],this}},p.exports=K,p.exports.TinyEmitter=K}},lt={};function et(p){if(lt[p])return lt[p].exports;var K=lt[p]={exports:{}};return bt[p](K,K.exports,et),K.exports}return function(){et.n=function(p){var K=p&&p.__esModule?function(){return p.default}:function(){return p};return et.d(K,{a:K}),K}}(),function(){et.d=function(p,K){for(var m in K)et.o(K,m)&&!et.o(p,m)&&Object.defineProperty(p,m,{enumerable:!0,get:K[m]})}}(),function(){et.o=function(p,K){return Object.prototype.hasOwnProperty.call(p,K)}}(),et(686)}().default})},187:(_t,bt,lt)=>{"use strict";lt.d(bt,{Z:()=>E});var et=lt(93),p=lt.n(et),K=lt(466),m=lt.n(K),O=m()(p());O.push([_t.id,"",""]);const E=O},466:_t=>{"use strict";_t.exports=function(bt){var lt=[];return lt.toString=function(){return this.map(function(p){var K="",m=typeof p[5]!="undefined";return p[4]&&(K+="@supports (".concat(p[4],") {")),p[2]&&(K+="@media ".concat(p[2]," {")),m&&(K+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),K+=bt(p),m&&(K+="}"),p[2]&&(K+="}"),p[4]&&(K+="}"),K}).join("")},lt.i=function(p,K,m,O,E){typeof p=="string"&&(p=[[null,p,void 0]]);var $={};if(m)for(var Y=0;Y<this.length;Y++){var H=this[Y][0];H!=null&&($[H]=!0)}for(var X=0;X<p.length;X++){var D=[].concat(p[X]);m&&$[D[0]]||(typeof E!="undefined"&&(typeof D[5]=="undefined"||(D[1]="@layer".concat(D[5].length>0?" ".concat(D[5]):""," {").concat(D[1],"}")),D[5]=E),K&&(D[2]&&(D[1]="@media ".concat(D[2]," {").concat(D[1],"}")),D[2]=K),O&&(D[4]?(D[1]="@supports (".concat(D[4],") {").concat(D[1],"}"),D[4]=O):D[4]="".concat(O)),lt.push(D))}},lt}},93:_t=>{"use strict";_t.exports=function(bt){return bt[1]}},959:(_t,bt,lt)=>{var et;(function(p,K,m,O){"use strict";var E=["","webkit","Moz","MS","ms","o"],$=K.createElement("div"),Y="function",H=Math.round,X=Math.abs,D=Date.now;function it(h,w,x){return setTimeout(Z(h,x),w)}function s(h,w,x){return Array.isArray(h)?(l(h,x[w],x),!0):!1}function l(h,w,x){var z;if(h)if(h.forEach)h.forEach(w,x);else if(h.length!==O)for(z=0;z<h.length;)w.call(x,h[z],z,h),z++;else for(z in h)h.hasOwnProperty(z)&&w.call(x,h[z],z,h)}function d(h,w,x){var z="DEPRECATED METHOD: "+w+`
`+x+` AT 
`;return function(){var j=new Error("get-stack-trace"),ut=j&&j.stack?j.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",Dt=p.console&&(p.console.warn||p.console.log);return Dt&&Dt.call(p.console,z,ut),h.apply(this,arguments)}}var I;typeof Object.assign!="function"?I=function(w){if(w===O||w===null)throw new TypeError("Cannot convert undefined or null to object");for(var x=Object(w),z=1;z<arguments.length;z++){var j=arguments[z];if(j!==O&&j!==null)for(var ut in j)j.hasOwnProperty(ut)&&(x[ut]=j[ut])}return x}:I=Object.assign;var R=d(function(w,x,z){for(var j=Object.keys(x),ut=0;ut<j.length;)(!z||z&&w[j[ut]]===O)&&(w[j[ut]]=x[j[ut]]),ut++;return w},"extend","Use `assign`."),P=d(function(w,x){return R(w,x,!0)},"merge","Use `assign`.");function C(h,w,x){var z=w.prototype,j;j=h.prototype=Object.create(z),j.constructor=h,j._super=z,x&&I(j,x)}function Z(h,w){return function(){return h.apply(w,arguments)}}function tt(h,w){return typeof h==Y?h.apply(w&&w[0]||O,w):h}function dt(h,w){return h===O?w:h}function pt(h,w,x){l(ot(w),function(z){h.addEventListener(z,x,!1)})}function U(h,w,x){l(ot(w),function(z){h.removeEventListener(z,x,!1)})}function rt(h,w){for(;h;){if(h==w)return!0;h=h.parentNode}return!1}function ht(h,w){return h.indexOf(w)>-1}function ot(h){return h.trim().split(/\s+/g)}function re(h,w,x){if(h.indexOf&&!x)return h.indexOf(w);for(var z=0;z<h.length;){if(x&&h[z][x]==w||!x&&h[z]===w)return z;z++}return-1}function Xt(h){return Array.prototype.slice.call(h,0)}function Gt(h,w,x){for(var z=[],j=[],ut=0;ut<h.length;){var Dt=w?h[ut][w]:h[ut];re(j,Dt)<0&&z.push(h[ut]),j[ut]=Dt,ut++}return x&&(w?z=z.sort(function(we,xe){return we[w]>xe[w]}):z=z.sort()),z}function Ct(h,w){for(var x,z,j=w[0].toUpperCase()+w.slice(1),ut=0;ut<E.length;){if(x=E[ut],z=x?x+j:w,z in h)return z;ut++}return O}var le=1;function qt(){return le++}function ve(h){var w=h.ownerDocument||h;return w.defaultView||w.parentWindow||p}var Tt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in p,ct=Ct(p,"PointerEvent")!==O,nt=gt&&Tt.test(navigator.userAgent),at="touch",mt="pen",wt="mouse",Lt="kinect",oe=25,At=1,Yt=2,Jt=4,Qt=8,Oe=1,Ae=2,F=4,fn=8,_n=16,ce=Ae|F,wn=fn|_n,Di=ce|wn,Hn=["x","y"],Le=["clientX","clientY"];function Q(h,w){var x=this;this.manager=h,this.callback=w,this.element=h.element,this.target=h.options.inputTarget,this.domHandler=function(z){tt(h.options.enable,[h])&&x.handler(z)},this.init()}Q.prototype={handler:function(){},init:function(){this.evEl&&pt(this.element,this.evEl,this.domHandler),this.evTarget&&pt(this.target,this.evTarget,this.domHandler),this.evWin&&pt(ve(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&U(this.element,this.evEl,this.domHandler),this.evTarget&&U(this.target,this.evTarget,this.domHandler),this.evWin&&U(ve(this.element),this.evWin,this.domHandler)}};function Wn(h){var w,x=h.options.inputClass;return x?w=x:ct?w=ni:nt?w=Pr:gt?w=Dr:w=kr,new w(h,sr)}function sr(h,w,x){var z=x.pointers.length,j=x.changedPointers.length,ut=w&At&&z-j===0,Dt=w&(Jt|Qt)&&z-j===0;x.isFirst=!!ut,x.isFinal=!!Dt,ut&&(h.session={}),x.eventType=w,ur(h,x),h.emit("hammer.input",x),h.recognize(x),h.session.prevInput=x}function ur(h,w){var x=h.session,z=w.pointers,j=z.length;x.firstInput||(x.firstInput=Zt(w)),j>1&&!x.firstMultiple?x.firstMultiple=Zt(w):j===1&&(x.firstMultiple=!1);var ut=x.firstInput,Dt=x.firstMultiple,fe=Dt?Dt.center:ut.center,we=w.center=lr(z);w.timeStamp=D(),w.deltaTime=w.timeStamp-ut.timeStamp,w.angle=Gn(fe,we),w.distance=dn(fe,we),Ri(x,w),w.offsetDirection=cr(w.deltaX,w.deltaY);var xe=ie(w.deltaTime,w.deltaX,w.deltaY);w.overallVelocityX=xe.x,w.overallVelocityY=xe.y,w.overallVelocity=X(xe.x)>X(xe.y)?xe.x:xe.y,w.scale=Dt?fr(Dt.pointers,z):1,w.rotation=Dt?qn(Dt.pointers,z):0,w.maxPointers=x.prevInput?w.pointers.length>x.prevInput.maxPointers?w.pointers.length:x.prevInput.maxPointers:w.pointers.length,xn(x,w);var Ke=h.element;rt(w.srcEvent.target,Ke)&&(Ke=w.srcEvent.target),w.target=Ke}function Ri(h,w){var x=w.center,z=h.offsetDelta||{},j=h.prevDelta||{},ut=h.prevInput||{};(w.eventType===At||ut.eventType===Jt)&&(j=h.prevDelta={x:ut.deltaX||0,y:ut.deltaY||0},z=h.offsetDelta={x:x.x,y:x.y}),w.deltaX=j.x+(x.x-z.x),w.deltaY=j.y+(x.y-z.y)}function xn(h,w){var x=h.lastInterval||w,z=w.timeStamp-x.timeStamp,j,ut,Dt,fe;if(w.eventType!=Qt&&(z>oe||x.velocity===O)){var we=w.deltaX-x.deltaX,xe=w.deltaY-x.deltaY,Ke=ie(z,we,xe);ut=Ke.x,Dt=Ke.y,j=X(Ke.x)>X(Ke.y)?Ke.x:Ke.y,fe=cr(we,xe),h.lastInterval=w}else j=x.velocity,ut=x.velocityX,Dt=x.velocityY,fe=x.direction;w.velocity=j,w.velocityX=ut,w.velocityY=Dt,w.direction=fe}function Zt(h){for(var w=[],x=0;x<h.pointers.length;)w[x]={clientX:H(h.pointers[x].clientX),clientY:H(h.pointers[x].clientY)},x++;return{timeStamp:D(),pointers:w,center:lr(w),deltaX:h.deltaX,deltaY:h.deltaY}}function lr(h){var w=h.length;if(w===1)return{x:H(h[0].clientX),y:H(h[0].clientY)};for(var x=0,z=0,j=0;j<w;)x+=h[j].clientX,z+=h[j].clientY,j++;return{x:H(x/w),y:H(z/w)}}function ie(h,w,x){return{x:w/h||0,y:x/h||0}}function cr(h,w){return h===w?Oe:X(h)>=X(w)?h<0?Ae:F:w<0?fn:_n}function dn(h,w,x){x||(x=Hn);var z=w[x[0]]-h[x[0]],j=w[x[1]]-h[x[1]];return Math.sqrt(z*z+j*j)}function Gn(h,w,x){x||(x=Hn);var z=w[x[0]]-h[x[0]],j=w[x[1]]-h[x[1]];return Math.atan2(j,z)*180/Math.PI}function qn(h,w){return Gn(w[1],w[0],Le)+Gn(h[1],h[0],Le)}function fr(h,w){return dn(w[0],w[1],Le)/dn(h[0],h[1],Le)}var Cr={mousedown:At,mousemove:Yt,mouseup:Jt},be="mousedown",Bi="mousemove mouseup";function kr(){this.evEl=be,this.evWin=Bi,this.pressed=!1,Q.apply(this,arguments)}C(kr,Q,{handler:function(w){var x=Cr[w.type];x&At&&w.button===0&&(this.pressed=!0),x&Yt&&w.which!==1&&(x=Jt),this.pressed&&(x&Jt&&(this.pressed=!1),this.callback(this.manager,x,{pointers:[w],changedPointers:[w],pointerType:wt,srcEvent:w}))}});var Ma={pointerdown:At,pointermove:Yt,pointerup:Jt,pointercancel:Qt,pointerout:Qt},Ni={2:at,3:mt,4:wt,5:Lt},Or="pointerdown",Mi="pointermove pointerup pointercancel";p.MSPointerEvent&&!p.PointerEvent&&(Or="MSPointerDown",Mi="MSPointerMove MSPointerUp MSPointerCancel");function ni(){this.evEl=Or,this.evWin=Mi,Q.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}C(ni,Q,{handler:function(w){var x=this.store,z=!1,j=w.type.toLowerCase().replace("ms",""),ut=Ma[j],Dt=Ni[w.pointerType]||w.pointerType,fe=Dt==at,we=re(x,w.pointerId,"pointerId");ut&At&&(w.button===0||fe)?we<0&&(x.push(w),we=x.length-1):ut&(Jt|Qt)&&(z=!0),!(we<0)&&(x[we]=w,this.callback(this.manager,ut,{pointers:x,changedPointers:[w],pointerType:Dt,srcEvent:w}),z&&x.splice(we,1))}});var Fi={touchstart:At,touchmove:Yt,touchend:Jt,touchcancel:Qt},Fa="touchstart",zi="touchstart touchmove touchend touchcancel";function ri(){this.evTarget=Fa,this.evWin=zi,this.started=!1,Q.apply(this,arguments)}C(ri,Q,{handler:function(w){var x=Fi[w.type];if(x===At&&(this.started=!0),!!this.started){var z=ii.call(this,w,x);x&(Jt|Qt)&&z[0].length-z[1].length===0&&(this.started=!1),this.callback(this.manager,x,{pointers:z[0],changedPointers:z[1],pointerType:at,srcEvent:w})}}});function ii(h,w){var x=Xt(h.touches),z=Xt(h.changedTouches);return w&(Jt|Qt)&&(x=Gt(x.concat(z),"identifier",!0)),[x,z]}var za={touchstart:At,touchmove:Yt,touchend:Jt,touchcancel:Qt},Lr="touchstart touchmove touchend touchcancel";function Pr(){this.evTarget=Lr,this.targetIds={},Q.apply(this,arguments)}C(Pr,Q,{handler:function(w){var x=za[w.type],z=ai.call(this,w,x);z&&this.callback(this.manager,x,{pointers:z[0],changedPointers:z[1],pointerType:at,srcEvent:w})}});function ai(h,w){var x=Xt(h.touches),z=this.targetIds;if(w&(At|Yt)&&x.length===1)return z[x[0].identifier]=!0,[x,x];var j,ut,Dt=Xt(h.changedTouches),fe=[],we=this.target;if(ut=x.filter(function(xe){return rt(xe.target,we)}),w===At)for(j=0;j<ut.length;)z[ut[j].identifier]=!0,j++;for(j=0;j<Dt.length;)z[Dt[j].identifier]&&fe.push(Dt[j]),w&(Jt|Qt)&&delete z[Dt[j].identifier],j++;if(fe.length)return[Gt(ut.concat(fe),"identifier",!0),fe]}var Ui=2500,Vi=25;function Dr(){Q.apply(this,arguments);var h=Z(this.handler,this);this.touch=new Pr(this.manager,h),this.mouse=new kr(this.manager,h),this.primaryTouch=null,this.lastTouches=[]}C(Dr,Q,{handler:function(w,x,z){var j=z.pointerType==at,ut=z.pointerType==wt;if(!(ut&&z.sourceCapabilities&&z.sourceCapabilities.firesTouchEvents)){if(j)Yi.call(this,x,z);else if(ut&&Hi.call(this,z))return;this.callback(w,x,z)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function Yi(h,w){h&At?(this.primaryTouch=w.changedPointers[0].identifier,Xi.call(this,w)):h&(Jt|Qt)&&Xi.call(this,w)}function Xi(h){var w=h.changedPointers[0];if(w.identifier===this.primaryTouch){var x={x:w.clientX,y:w.clientY};this.lastTouches.push(x);var z=this.lastTouches,j=function(){var ut=z.indexOf(x);ut>-1&&z.splice(ut,1)};setTimeout(j,Ui)}}function Hi(h){for(var w=h.srcEvent.clientX,x=h.srcEvent.clientY,z=0;z<this.lastTouches.length;z++){var j=this.lastTouches[z],ut=Math.abs(w-j.x),Dt=Math.abs(x-j.y);if(ut<=Vi&&Dt<=Vi)return!0}return!1}var Wi=Ct($.style,"touchAction"),Gi=Wi!==O,Rr="compute",qi="auto",oi="manipulation",bn="none",dr="pan-x",pr="pan-y",hr=gr();function Zn(h,w){this.manager=h,this.set(w)}Zn.prototype={set:function(h){h==Rr&&(h=this.compute()),Gi&&this.manager.element.style&&hr[h]&&(this.manager.element.style[Wi]=h),this.actions=h.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var h=[];return l(this.manager.recognizers,function(w){tt(w.options.enable,[w])&&(h=h.concat(w.getTouchAction()))}),Ua(h.join(" "))},preventDefaults:function(h){var w=h.srcEvent,x=h.offsetDirection;if(this.manager.session.prevented){w.preventDefault();return}var z=this.actions,j=ht(z,bn)&&!hr[bn],ut=ht(z,pr)&&!hr[pr],Dt=ht(z,dr)&&!hr[dr];if(j){var fe=h.pointers.length===1,we=h.distance<2,xe=h.deltaTime<250;if(fe&&we&&xe)return}if(!(Dt&&ut)&&(j||ut&&x&ce||Dt&&x&wn))return this.preventSrc(w)},preventSrc:function(h){this.manager.session.prevented=!0,h.preventDefault()}};function Ua(h){if(ht(h,bn))return bn;var w=ht(h,dr),x=ht(h,pr);return w&&x?bn:w||x?w?dr:pr:ht(h,oi)?oi:qi}function gr(){if(!Gi)return!1;var h={},w=p.CSS&&p.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(x){h[x]=w?p.CSS.supports("touch-action",x):!0}),h}var Br=1,Ye=2,Cn=4,pn=8,tn=pn,kn=16,en=32;function hn(h){this.options=I({},this.defaults,h||{}),this.id=qt(),this.manager=null,this.options.enable=dt(this.options.enable,!0),this.state=Br,this.simultaneous={},this.requireFail=[]}hn.prototype={defaults:{},set:function(h){return I(this.options,h),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(h){if(s(h,"recognizeWith",this))return this;var w=this.simultaneous;return h=mr(h,this),w[h.id]||(w[h.id]=h,h.recognizeWith(this)),this},dropRecognizeWith:function(h){return s(h,"dropRecognizeWith",this)?this:(h=mr(h,this),delete this.simultaneous[h.id],this)},requireFailure:function(h){if(s(h,"requireFailure",this))return this;var w=this.requireFail;return h=mr(h,this),re(w,h)===-1&&(w.push(h),h.requireFailure(this)),this},dropRequireFailure:function(h){if(s(h,"dropRequireFailure",this))return this;h=mr(h,this);var w=re(this.requireFail,h);return w>-1&&this.requireFail.splice(w,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(h){return!!this.simultaneous[h.id]},emit:function(h){var w=this,x=this.state;function z(j){w.manager.emit(j,h)}x<pn&&z(w.options.event+si(x)),z(w.options.event),h.additionalEvent&&z(h.additionalEvent),x>=pn&&z(w.options.event+si(x))},tryEmit:function(h){if(this.canEmit())return this.emit(h);this.state=en},canEmit:function(){for(var h=0;h<this.requireFail.length;){if(!(this.requireFail[h].state&(en|Br)))return!1;h++}return!0},recognize:function(h){var w=I({},h);if(!tt(this.options.enable,[this,w])){this.reset(),this.state=en;return}this.state&(tn|kn|en)&&(this.state=Br),this.state=this.process(w),this.state&(Ye|Cn|pn|kn)&&this.tryEmit(w)},process:function(h){},getTouchAction:function(){},reset:function(){}};function si(h){return h&kn?"cancel":h&pn?"end":h&Cn?"move":h&Ye?"start":""}function Zi(h){return h==_n?"down":h==fn?"up":h==Ae?"left":h==F?"right":""}function mr(h,w){var x=w.manager;return x?x.get(h):h}function Ne(){hn.apply(this,arguments)}C(Ne,hn,{defaults:{pointers:1},attrTest:function(h){var w=this.options.pointers;return w===0||h.pointers.length===w},process:function(h){var w=this.state,x=h.eventType,z=w&(Ye|Cn),j=this.attrTest(h);return z&&(x&Qt||!j)?w|kn:z||j?x&Jt?w|pn:w&Ye?w|Cn:Ye:en}});function yr(){Ne.apply(this,arguments),this.pX=null,this.pY=null}C(yr,Ne,{defaults:{event:"pan",threshold:10,pointers:1,direction:Di},getTouchAction:function(){var h=this.options.direction,w=[];return h&ce&&w.push(pr),h&wn&&w.push(dr),w},directionTest:function(h){var w=this.options,x=!0,z=h.distance,j=h.direction,ut=h.deltaX,Dt=h.deltaY;return j&w.direction||(w.direction&ce?(j=ut===0?Oe:ut<0?Ae:F,x=ut!=this.pX,z=Math.abs(h.deltaX)):(j=Dt===0?Oe:Dt<0?fn:_n,x=Dt!=this.pY,z=Math.abs(h.deltaY))),h.direction=j,x&&z>w.threshold&&j&w.direction},attrTest:function(h){return Ne.prototype.attrTest.call(this,h)&&(this.state&Ye||!(this.state&Ye)&&this.directionTest(h))},emit:function(h){this.pX=h.deltaX,this.pY=h.deltaY;var w=Zi(h.direction);w&&(h.additionalEvent=this.options.event+w),this._super.emit.call(this,h)}});function vr(){Ne.apply(this,arguments)}C(vr,Ne,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bn]},attrTest:function(h){return this._super.attrTest.call(this,h)&&(Math.abs(h.scale-1)>this.options.threshold||this.state&Ye)},emit:function(h){if(h.scale!==1){var w=h.scale<1?"in":"out";h.additionalEvent=this.options.event+w}this._super.emit.call(this,h)}});function ui(){hn.apply(this,arguments),this._timer=null,this._input=null}C(ui,hn,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[qi]},process:function(h){var w=this.options,x=h.pointers.length===w.pointers,z=h.distance<w.threshold,j=h.deltaTime>w.time;if(this._input=h,!z||!x||h.eventType&(Jt|Qt)&&!j)this.reset();else if(h.eventType&At)this.reset(),this._timer=it(function(){this.state=tn,this.tryEmit()},w.time,this);else if(h.eventType&Jt)return tn;return en},reset:function(){clearTimeout(this._timer)},emit:function(h){this.state===tn&&(h&&h.eventType&Jt?this.manager.emit(this.options.event+"up",h):(this._input.timeStamp=D(),this.manager.emit(this.options.event,this._input)))}});function Se(){Ne.apply(this,arguments)}C(Se,Ne,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bn]},attrTest:function(h){return this._super.attrTest.call(this,h)&&(Math.abs(h.rotation)>this.options.threshold||this.state&Ye)}});function On(){Ne.apply(this,arguments)}C(On,Ne,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:ce|wn,pointers:1},getTouchAction:function(){return yr.prototype.getTouchAction.call(this)},attrTest:function(h){var w=this.options.direction,x;return w&(ce|wn)?x=h.overallVelocity:w&ce?x=h.overallVelocityX:w&wn&&(x=h.overallVelocityY),this._super.attrTest.call(this,h)&&w&h.offsetDirection&&h.distance>this.options.threshold&&h.maxPointers==this.options.pointers&&X(x)>this.options.velocity&&h.eventType&Jt},emit:function(h){var w=Zi(h.offsetDirection);w&&this.manager.emit(this.options.event+w,h),this.manager.emit(this.options.event,h)}});function Nt(){hn.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}C(Nt,hn,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[oi]},process:function(h){var w=this.options,x=h.pointers.length===w.pointers,z=h.distance<w.threshold,j=h.deltaTime<w.time;if(this.reset(),h.eventType&At&&this.count===0)return this.failTimeout();if(z&&j&&x){if(h.eventType!=Jt)return this.failTimeout();var ut=this.pTime?h.timeStamp-this.pTime<w.interval:!0,Dt=!this.pCenter||dn(this.pCenter,h.center)<w.posThreshold;this.pTime=h.timeStamp,this.pCenter=h.center,!Dt||!ut?this.count=1:this.count+=1,this._input=h;var fe=this.count%w.taps;if(fe===0)return this.hasRequireFailures()?(this._timer=it(function(){this.state=tn,this.tryEmit()},w.interval,this),Ye):tn}return en},failTimeout:function(){return this._timer=it(function(){this.state=en},this.options.interval,this),en},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==tn&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function _e(h,w){return w=w||{},w.recognizers=dt(w.recognizers,_e.defaults.preset),new xt(h,w)}_e.VERSION="2.0.7",_e.defaults={domEvents:!1,touchAction:Rr,enable:!0,inputTarget:null,inputClass:null,preset:[[Se,{enable:!1}],[vr,{enable:!1},["rotate"]],[On,{direction:ce}],[yr,{direction:ce},["swipe"]],[Nt],[Nt,{event:"doubletap",taps:2},["tap"]],[ui]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var nn=1,jt=2;function xt(h,w){this.options=I({},_e.defaults,w||{}),this.options.inputTarget=this.options.inputTarget||h,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=h,this.input=Wn(this),this.touchAction=new Zn(this,this.options.touchAction),Me(this,!0),l(this.options.recognizers,function(x){var z=this.add(new x[0](x[1]));x[2]&&z.recognizeWith(x[2]),x[3]&&z.requireFailure(x[3])},this)}xt.prototype={set:function(h){return I(this.options,h),h.touchAction&&this.touchAction.update(),h.inputTarget&&(this.input.destroy(),this.input.target=h.inputTarget,this.input.init()),this},stop:function(h){this.session.stopped=h?jt:nn},recognize:function(h){var w=this.session;if(!w.stopped){this.touchAction.preventDefaults(h);var x,z=this.recognizers,j=w.curRecognizer;(!j||j&&j.state&tn)&&(j=w.curRecognizer=null);for(var ut=0;ut<z.length;)x=z[ut],w.stopped!==jt&&(!j||x==j||x.canRecognizeWith(j))?x.recognize(h):x.reset(),!j&&x.state&(Ye|Cn|pn)&&(j=w.curRecognizer=x),ut++}},get:function(h){if(h instanceof hn)return h;for(var w=this.recognizers,x=0;x<w.length;x++)if(w[x].options.event==h)return w[x];return null},add:function(h){if(s(h,"add",this))return this;var w=this.get(h.options.event);return w&&this.remove(w),this.recognizers.push(h),h.manager=this,this.touchAction.update(),h},remove:function(h){if(s(h,"remove",this))return this;if(h=this.get(h),h){var w=this.recognizers,x=re(w,h);x!==-1&&(w.splice(x,1),this.touchAction.update())}return this},on:function(h,w){if(h!==O&&w!==O){var x=this.handlers;return l(ot(h),function(z){x[z]=x[z]||[],x[z].push(w)}),this}},off:function(h,w){if(h!==O){var x=this.handlers;return l(ot(h),function(z){w?x[z]&&x[z].splice(re(x[z],w),1):delete x[z]}),this}},emit:function(h,w){this.options.domEvents&&li(h,w);var x=this.handlers[h]&&this.handlers[h].slice();if(!(!x||!x.length)){w.type=h,w.preventDefault=function(){w.srcEvent.preventDefault()};for(var z=0;z<x.length;)x[z](w),z++}},destroy:function(){this.element&&Me(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Me(h,w){var x=h.element;if(x.style){var z;l(h.options.cssProps,function(j,ut){z=Ct(x.style,ut),w?(h.oldCssProps[z]=x.style[z],x.style[z]=j):x.style[z]=h.oldCssProps[z]||""}),w||(h.oldCssProps={})}}function li(h,w){var x=K.createEvent("Event");x.initEvent(h,!0,!0),x.gesture=w,w.target.dispatchEvent(x)}I(_e,{INPUT_START:At,INPUT_MOVE:Yt,INPUT_END:Jt,INPUT_CANCEL:Qt,STATE_POSSIBLE:Br,STATE_BEGAN:Ye,STATE_CHANGED:Cn,STATE_ENDED:pn,STATE_RECOGNIZED:tn,STATE_CANCELLED:kn,STATE_FAILED:en,DIRECTION_NONE:Oe,DIRECTION_LEFT:Ae,DIRECTION_RIGHT:F,DIRECTION_UP:fn,DIRECTION_DOWN:_n,DIRECTION_HORIZONTAL:ce,DIRECTION_VERTICAL:wn,DIRECTION_ALL:Di,Manager:xt,Input:Q,TouchAction:Zn,TouchInput:Pr,MouseInput:kr,PointerEventInput:ni,TouchMouseInput:Dr,SingleTouchInput:ri,Recognizer:hn,AttrRecognizer:Ne,Tap:Nt,Pan:yr,Swipe:On,Pinch:vr,Rotate:Se,Press:ui,on:pt,off:U,each:l,merge:P,extend:R,assign:I,inherit:C,bindFn:Z,prefixed:Ct});var Ki=typeof p!="undefined"?p:typeof self!="undefined"?self:{};Ki.Hammer=_e,et=function(){return _e}.call(bt,lt,bt,_t),et!==O&&(_t.exports=et)})(window,document,"Hammer")},431:(_t,bt,lt)=>{var et,p;(function(){"use strict";var K=function(){this.init()};K.prototype={init:function(){var s=this||m;return s._counter=1e3,s._html5AudioPool=[],s.html5PoolSize=10,s._codecs={},s._howls=[],s._muted=!1,s._volume=1,s._canPlayEvent="canplaythrough",s._navigator=typeof window!="undefined"&&window.navigator?window.navigator:null,s.masterGain=null,s.noAudio=!1,s.usingWebAudio=!0,s.autoSuspend=!0,s.ctx=null,s.autoUnlock=!0,s._setup(),s},volume:function(s){var l=this||m;if(s=parseFloat(s),l.ctx||it(),typeof s!="undefined"&&s>=0&&s<=1){if(l._volume=s,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(s,m.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var I=l._howls[d]._getSoundIds(),R=0;R<I.length;R++){var P=l._howls[d]._soundById(I[R]);P&&P._node&&(P._node.volume=P._volume*s)}return l}return l._volume},mute:function(s){var l=this||m;l.ctx||it(),l._muted=s,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(s?0:l._volume,m.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var I=l._howls[d]._getSoundIds(),R=0;R<I.length;R++){var P=l._howls[d]._soundById(I[R]);P&&P._node&&(P._node.muted=s?!0:P._muted)}return l},stop:function(){for(var s=this||m,l=0;l<s._howls.length;l++)s._howls[l].stop();return s},unload:function(){for(var s=this||m,l=s._howls.length-1;l>=0;l--)s._howls[l].unload();return s.usingWebAudio&&s.ctx&&typeof s.ctx.close!="undefined"&&(s.ctx.close(),s.ctx=null,it()),s},codecs:function(s){return(this||m)._codecs[s.replace(/^x-/,"")]},_setup:function(){var s=this||m;if(s.state=s.ctx&&s.ctx.state||"suspended",s._autoSuspend(),!s.usingWebAudio)if(typeof Audio!="undefined")try{var l=new Audio;typeof l.oncanplaythrough=="undefined"&&(s._canPlayEvent="canplay")}catch(d){s.noAudio=!0}else s.noAudio=!0;try{var l=new Audio;l.muted&&(s.noAudio=!0)}catch(d){}return s.noAudio||s._setupCodecs(),s},_setupCodecs:function(){var s=this||m,l=null;try{l=typeof Audio!="undefined"?new Audio:null}catch(dt){return s}if(!l||typeof l.canPlayType!="function")return s;var d=l.canPlayType("audio/mpeg;").replace(/^no$/,""),I=s._navigator?s._navigator.userAgent:"",R=I.match(/OPR\/([0-6].)/g),P=R&&parseInt(R[0].split("/")[1],10)<33,C=I.indexOf("Safari")!==-1&&I.indexOf("Chrome")===-1,Z=I.match(/Version\/(.*?) /),tt=C&&Z&&parseInt(Z[1],10)<15;return s._codecs={mp3:!!(!P&&(d||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!tt&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!tt&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},s},_unlockAudio:function(){var s=this||m;if(!(s._audioUnlocked||!s.ctx)){s._audioUnlocked=!1,s.autoUnlock=!1,!s._mobileUnloaded&&s.ctx.sampleRate!==44100&&(s._mobileUnloaded=!0,s.unload()),s._scratchBuffer=s.ctx.createBuffer(1,1,22050);var l=function(d){for(;s._html5AudioPool.length<s.html5PoolSize;)try{var I=new Audio;I._unlocked=!0,s._releaseHtml5Audio(I)}catch(dt){s.noAudio=!0;break}for(var R=0;R<s._howls.length;R++)if(!s._howls[R]._webAudio)for(var P=s._howls[R]._getSoundIds(),C=0;C<P.length;C++){var Z=s._howls[R]._soundById(P[C]);Z&&Z._node&&!Z._node._unlocked&&(Z._node._unlocked=!0,Z._node.load())}s._autoResume();var tt=s.ctx.createBufferSource();tt.buffer=s._scratchBuffer,tt.connect(s.ctx.destination),typeof tt.start=="undefined"?tt.noteOn(0):tt.start(0),typeof s.ctx.resume=="function"&&s.ctx.resume(),tt.onended=function(){tt.disconnect(0),s._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var dt=0;dt<s._howls.length;dt++)s._howls[dt]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),s}},_obtainHtml5Audio:function(){var s=this||m;if(s._html5AudioPool.length)return s._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise!="undefined"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(s){var l=this||m;return s._unlocked&&l._html5AudioPool.push(s),l},_autoSuspend:function(){var s=this;if(!(!s.autoSuspend||!s.ctx||typeof s.ctx.suspend=="undefined"||!m.usingWebAudio)){for(var l=0;l<s._howls.length;l++)if(s._howls[l]._webAudio){for(var d=0;d<s._howls[l]._sounds.length;d++)if(!s._howls[l]._sounds[d]._paused)return s}return s._suspendTimer&&clearTimeout(s._suspendTimer),s._suspendTimer=setTimeout(function(){if(s.autoSuspend){s._suspendTimer=null,s.state="suspending";var I=function(){s.state="suspended",s._resumeAfterSuspend&&(delete s._resumeAfterSuspend,s._autoResume())};s.ctx.suspend().then(I,I)}},3e4),s}},_autoResume:function(){var s=this;if(!(!s.ctx||typeof s.ctx.resume=="undefined"||!m.usingWebAudio))return s.state==="running"&&s.ctx.state!=="interrupted"&&s._suspendTimer?(clearTimeout(s._suspendTimer),s._suspendTimer=null):s.state==="suspended"||s.state==="running"&&s.ctx.state==="interrupted"?(s.ctx.resume().then(function(){s.state="running";for(var l=0;l<s._howls.length;l++)s._howls[l]._emit("resume")}),s._suspendTimer&&(clearTimeout(s._suspendTimer),s._suspendTimer=null)):s.state==="suspending"&&(s._resumeAfterSuspend=!0),s}};var m=new K,O=function(s){var l=this;if(!s.src||s.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(s)};O.prototype={init:function(s){var l=this;return m.ctx||it(),l._autoplay=s.autoplay||!1,l._format=typeof s.format!="string"?s.format:[s.format],l._html5=s.html5||!1,l._muted=s.mute||!1,l._loop=s.loop||!1,l._pool=s.pool||5,l._preload=typeof s.preload=="boolean"||s.preload==="metadata"?s.preload:!0,l._rate=s.rate||1,l._sprite=s.sprite||{},l._src=typeof s.src!="string"?s.src:[s.src],l._volume=s.volume!==void 0?s.volume:1,l._xhr={method:s.xhr&&s.xhr.method?s.xhr.method:"GET",headers:s.xhr&&s.xhr.headers?s.xhr.headers:null,withCredentials:s.xhr&&s.xhr.withCredentials?s.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=s.onend?[{fn:s.onend}]:[],l._onfade=s.onfade?[{fn:s.onfade}]:[],l._onload=s.onload?[{fn:s.onload}]:[],l._onloaderror=s.onloaderror?[{fn:s.onloaderror}]:[],l._onplayerror=s.onplayerror?[{fn:s.onplayerror}]:[],l._onpause=s.onpause?[{fn:s.onpause}]:[],l._onplay=s.onplay?[{fn:s.onplay}]:[],l._onstop=s.onstop?[{fn:s.onstop}]:[],l._onmute=s.onmute?[{fn:s.onmute}]:[],l._onvolume=s.onvolume?[{fn:s.onvolume}]:[],l._onrate=s.onrate?[{fn:s.onrate}]:[],l._onseek=s.onseek?[{fn:s.onseek}]:[],l._onunlock=s.onunlock?[{fn:s.onunlock}]:[],l._onresume=[],l._webAudio=m.usingWebAudio&&!l._html5,typeof m.ctx!="undefined"&&m.ctx&&m.autoUnlock&&m._unlockAudio(),m._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var s=this,l=null;if(m.noAudio){s._emit("loaderror",null,"No audio support.");return}typeof s._src=="string"&&(s._src=[s._src]);for(var d=0;d<s._src.length;d++){var I,R;if(s._format&&s._format[d])I=s._format[d];else{if(R=s._src[d],typeof R!="string"){s._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}I=/^data:audio\/([^;,]+);/i.exec(R),I||(I=/\.([^.]+)$/.exec(R.split("?",1)[0])),I&&(I=I[1].toLowerCase())}if(I||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),I&&m.codecs(I)){l=s._src[d];break}}if(!l){s._emit("loaderror",null,"No codec support for selected audio sources.");return}return s._src=l,s._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(s._html5=!0,s._webAudio=!1),new E(s),s._webAudio&&Y(s),s},play:function(s,l){var d=this,I=null;if(typeof s=="number")I=s,s=null;else{if(typeof s=="string"&&d._state==="loaded"&&!d._sprite[s])return null;if(typeof s=="undefined"&&(s="__default",!d._playLock)){for(var R=0,P=0;P<d._sounds.length;P++)d._sounds[P]._paused&&!d._sounds[P]._ended&&(R++,I=d._sounds[P]._id);R===1?s=null:I=null}}var C=I?d._soundById(I):d._inactiveSound();if(!C)return null;if(I&&!s&&(s=C._sprite||"__default"),d._state!=="loaded"){C._sprite=s,C._ended=!1;var Z=C._id;return d._queue.push({event:"play",action:function(){d.play(Z)}}),Z}if(I&&!C._paused)return l||d._loadQueue("play"),C._id;d._webAudio&&m._autoResume();var tt=Math.max(0,C._seek>0?C._seek:d._sprite[s][0]/1e3),dt=Math.max(0,(d._sprite[s][0]+d._sprite[s][1])/1e3-tt),pt=dt*1e3/Math.abs(C._rate),U=d._sprite[s][0]/1e3,rt=(d._sprite[s][0]+d._sprite[s][1])/1e3;C._sprite=s,C._ended=!1;var ht=function(){C._paused=!1,C._seek=tt,C._start=U,C._stop=rt,C._loop=!!(C._loop||d._sprite[s][2])};if(tt>=rt){d._ended(C);return}var ot=C._node;if(d._webAudio){var re=function(){d._playLock=!1,ht(),d._refreshBuffer(C);var le=C._muted||d._muted?0:C._volume;ot.gain.setValueAtTime(le,m.ctx.currentTime),C._playStart=m.ctx.currentTime,typeof ot.bufferSource.start=="undefined"?C._loop?ot.bufferSource.noteGrainOn(0,tt,86400):ot.bufferSource.noteGrainOn(0,tt,dt):C._loop?ot.bufferSource.start(0,tt,86400):ot.bufferSource.start(0,tt,dt),pt!==1/0&&(d._endTimers[C._id]=setTimeout(d._ended.bind(d,C),pt)),l||setTimeout(function(){d._emit("play",C._id),d._loadQueue()},0)};m.state==="running"&&m.ctx.state!=="interrupted"?re():(d._playLock=!0,d.once("resume",re),d._clearTimer(C._id))}else{var Xt=function(){ot.currentTime=tt,ot.muted=C._muted||d._muted||m._muted||ot.muted,ot.volume=C._volume*m.volume(),ot.playbackRate=C._rate;try{var le=ot.play();if(le&&typeof Promise!="undefined"&&(le instanceof Promise||typeof le.then=="function")?(d._playLock=!0,ht(),le.then(function(){d._playLock=!1,ot._unlocked=!0,l?d._loadQueue():d._emit("play",C._id)}).catch(function(){d._playLock=!1,d._emit("playerror",C._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),C._ended=!0,C._paused=!0})):l||(d._playLock=!1,ht(),d._emit("play",C._id)),ot.playbackRate=C._rate,ot.paused){d._emit("playerror",C._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}s!=="__default"||C._loop?d._endTimers[C._id]=setTimeout(d._ended.bind(d,C),pt):(d._endTimers[C._id]=function(){d._ended(C),ot.removeEventListener("ended",d._endTimers[C._id],!1)},ot.addEventListener("ended",d._endTimers[C._id],!1))}catch(qt){d._emit("playerror",C._id,qt)}};ot.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(ot.src=d._src,ot.load());var Gt=window&&window.ejecta||!ot.readyState&&m._navigator.isCocoonJS;if(ot.readyState>=3||Gt)Xt();else{d._playLock=!0,d._state="loading";var Ct=function(){d._state="loaded",Xt(),ot.removeEventListener(m._canPlayEvent,Ct,!1)};ot.addEventListener(m._canPlayEvent,Ct,!1),d._clearTimer(C._id)}}return C._id},pause:function(s){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(s)}}),l;for(var d=l._getSoundIds(s),I=0;I<d.length;I++){l._clearTimer(d[I]);var R=l._soundById(d[I]);if(R&&!R._paused&&(R._seek=l.seek(d[I]),R._rateSeek=0,R._paused=!0,l._stopFade(d[I]),R._node))if(l._webAudio){if(!R._node.bufferSource)continue;typeof R._node.bufferSource.stop=="undefined"?R._node.bufferSource.noteOff(0):R._node.bufferSource.stop(0),l._cleanBuffer(R._node)}else(!isNaN(R._node.duration)||R._node.duration===1/0)&&R._node.pause();arguments[1]||l._emit("pause",R?R._id:null)}return l},stop:function(s,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(s)}}),d;for(var I=d._getSoundIds(s),R=0;R<I.length;R++){d._clearTimer(I[R]);var P=d._soundById(I[R]);P&&(P._seek=P._start||0,P._rateSeek=0,P._paused=!0,P._ended=!0,d._stopFade(I[R]),P._node&&(d._webAudio?P._node.bufferSource&&(typeof P._node.bufferSource.stop=="undefined"?P._node.bufferSource.noteOff(0):P._node.bufferSource.stop(0),d._cleanBuffer(P._node)):(!isNaN(P._node.duration)||P._node.duration===1/0)&&(P._node.currentTime=P._start||0,P._node.pause(),P._node.duration===1/0&&d._clearSound(P._node))),l||d._emit("stop",P._id))}return d},mute:function(s,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(s,l)}}),d;if(typeof l=="undefined")if(typeof s=="boolean")d._muted=s;else return d._muted;for(var I=d._getSoundIds(l),R=0;R<I.length;R++){var P=d._soundById(I[R]);P&&(P._muted=s,P._interval&&d._stopFade(P._id),d._webAudio&&P._node?P._node.gain.setValueAtTime(s?0:P._volume,m.ctx.currentTime):P._node&&(P._node.muted=m._muted?!0:s),d._emit("mute",P._id))}return d},volume:function(){var s=this,l=arguments,d,I;if(l.length===0)return s._volume;if(l.length===1||l.length===2&&typeof l[1]=="undefined"){var R=s._getSoundIds(),P=R.indexOf(l[0]);P>=0?I=parseInt(l[0],10):d=parseFloat(l[0])}else l.length>=2&&(d=parseFloat(l[0]),I=parseInt(l[1],10));var C;if(typeof d!="undefined"&&d>=0&&d<=1){if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"volume",action:function(){s.volume.apply(s,l)}}),s;typeof I=="undefined"&&(s._volume=d),I=s._getSoundIds(I);for(var Z=0;Z<I.length;Z++)C=s._soundById(I[Z]),C&&(C._volume=d,l[2]||s._stopFade(I[Z]),s._webAudio&&C._node&&!C._muted?C._node.gain.setValueAtTime(d,m.ctx.currentTime):C._node&&!C._muted&&(C._node.volume=d*m.volume()),s._emit("volume",C._id))}else return C=I?s._soundById(I):s._sounds[0],C?C._volume:0;return s},fade:function(s,l,d,I){var R=this;if(R._state!=="loaded"||R._playLock)return R._queue.push({event:"fade",action:function(){R.fade(s,l,d,I)}}),R;s=Math.min(Math.max(0,parseFloat(s)),1),l=Math.min(Math.max(0,parseFloat(l)),1),d=parseFloat(d),R.volume(s,I);for(var P=R._getSoundIds(I),C=0;C<P.length;C++){var Z=R._soundById(P[C]);if(Z){if(I||R._stopFade(P[C]),R._webAudio&&!Z._muted){var tt=m.ctx.currentTime,dt=tt+d/1e3;Z._volume=s,Z._node.gain.setValueAtTime(s,tt),Z._node.gain.linearRampToValueAtTime(l,dt)}R._startFadeInterval(Z,s,l,d,P[C],typeof I=="undefined")}}return R},_startFadeInterval:function(s,l,d,I,R,P){var C=this,Z=l,tt=d-l,dt=Math.abs(tt/.01),pt=Math.max(4,dt>0?I/dt:I),U=Date.now();s._fadeTo=d,s._interval=setInterval(function(){var rt=(Date.now()-U)/I;U=Date.now(),Z+=tt*rt,Z=Math.round(Z*100)/100,tt<0?Z=Math.max(d,Z):Z=Math.min(d,Z),C._webAudio?s._volume=Z:C.volume(Z,s._id,!0),P&&(C._volume=Z),(d<l&&Z<=d||d>l&&Z>=d)&&(clearInterval(s._interval),s._interval=null,s._fadeTo=null,C.volume(d,s._id),C._emit("fade",s._id))},pt)},_stopFade:function(s){var l=this,d=l._soundById(s);return d&&d._interval&&(l._webAudio&&d._node.gain.cancelScheduledValues(m.ctx.currentTime),clearInterval(d._interval),d._interval=null,l.volume(d._fadeTo,s),d._fadeTo=null,l._emit("fade",s)),l},loop:function(){var s=this,l=arguments,d,I,R;if(l.length===0)return s._loop;if(l.length===1)if(typeof l[0]=="boolean")d=l[0],s._loop=d;else return R=s._soundById(parseInt(l[0],10)),R?R._loop:!1;else l.length===2&&(d=l[0],I=parseInt(l[1],10));for(var P=s._getSoundIds(I),C=0;C<P.length;C++)R=s._soundById(P[C]),R&&(R._loop=d,s._webAudio&&R._node&&R._node.bufferSource&&(R._node.bufferSource.loop=d,d&&(R._node.bufferSource.loopStart=R._start||0,R._node.bufferSource.loopEnd=R._stop,s.playing(P[C])&&(s.pause(P[C],!0),s.play(P[C],!0)))));return s},rate:function(){var s=this,l=arguments,d,I;if(l.length===0)I=s._sounds[0]._id;else if(l.length===1){var R=s._getSoundIds(),P=R.indexOf(l[0]);P>=0?I=parseInt(l[0],10):d=parseFloat(l[0])}else l.length===2&&(d=parseFloat(l[0]),I=parseInt(l[1],10));var C;if(typeof d=="number"){if(s._state!=="loaded"||s._playLock)return s._queue.push({event:"rate",action:function(){s.rate.apply(s,l)}}),s;typeof I=="undefined"&&(s._rate=d),I=s._getSoundIds(I);for(var Z=0;Z<I.length;Z++)if(C=s._soundById(I[Z]),C){s.playing(I[Z])&&(C._rateSeek=s.seek(I[Z]),C._playStart=s._webAudio?m.ctx.currentTime:C._playStart),C._rate=d,s._webAudio&&C._node&&C._node.bufferSource?C._node.bufferSource.playbackRate.setValueAtTime(d,m.ctx.currentTime):C._node&&(C._node.playbackRate=d);var tt=s.seek(I[Z]),dt=(s._sprite[C._sprite][0]+s._sprite[C._sprite][1])/1e3-tt,pt=dt*1e3/Math.abs(C._rate);(s._endTimers[I[Z]]||!C._paused)&&(s._clearTimer(I[Z]),s._endTimers[I[Z]]=setTimeout(s._ended.bind(s,C),pt)),s._emit("rate",C._id)}}else return C=s._soundById(I),C?C._rate:s._rate;return s},seek:function(){var s=this,l=arguments,d,I;if(l.length===0)s._sounds.length&&(I=s._sounds[0]._id);else if(l.length===1){var R=s._getSoundIds(),P=R.indexOf(l[0]);P>=0?I=parseInt(l[0],10):s._sounds.length&&(I=s._sounds[0]._id,d=parseFloat(l[0]))}else l.length===2&&(d=parseFloat(l[0]),I=parseInt(l[1],10));if(typeof I=="undefined")return 0;if(typeof d=="number"&&(s._state!=="loaded"||s._playLock))return s._queue.push({event:"seek",action:function(){s.seek.apply(s,l)}}),s;var C=s._soundById(I);if(C)if(typeof d=="number"&&d>=0){var Z=s.playing(I);Z&&s.pause(I,!0),C._seek=d,C._ended=!1,s._clearTimer(I),!s._webAudio&&C._node&&!isNaN(C._node.duration)&&(C._node.currentTime=d);var tt=function(){Z&&s.play(I,!0),s._emit("seek",I)};if(Z&&!s._webAudio){var dt=function(){s._playLock?setTimeout(dt,0):tt()};setTimeout(dt,0)}else tt()}else if(s._webAudio){var pt=s.playing(I)?m.ctx.currentTime-C._playStart:0,U=C._rateSeek?C._rateSeek-C._seek:0;return C._seek+(U+pt*Math.abs(C._rate))}else return C._node.currentTime;return s},playing:function(s){var l=this;if(typeof s=="number"){var d=l._soundById(s);return d?!d._paused:!1}for(var I=0;I<l._sounds.length;I++)if(!l._sounds[I]._paused)return!0;return!1},duration:function(s){var l=this,d=l._duration,I=l._soundById(s);return I&&(d=l._sprite[I._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var s=this,l=s._sounds,d=0;d<l.length;d++)l[d]._paused||s.stop(l[d]._id),s._webAudio||(s._clearSound(l[d]._node),l[d]._node.removeEventListener("error",l[d]._errorFn,!1),l[d]._node.removeEventListener(m._canPlayEvent,l[d]._loadFn,!1),l[d]._node.removeEventListener("ended",l[d]._endFn,!1),m._releaseHtml5Audio(l[d]._node)),delete l[d]._node,s._clearTimer(l[d]._id);var I=m._howls.indexOf(s);I>=0&&m._howls.splice(I,1);var R=!0;for(d=0;d<m._howls.length;d++)if(m._howls[d]._src===s._src||s._src.indexOf(m._howls[d]._src)>=0){R=!1;break}return $&&R&&delete $[s._src],m.noAudio=!1,s._state="unloaded",s._sounds=[],s=null,null},on:function(s,l,d,I){var R=this,P=R["_on"+s];return typeof l=="function"&&P.push(I?{id:d,fn:l,once:I}:{id:d,fn:l}),R},off:function(s,l,d){var I=this,R=I["_on"+s],P=0;if(typeof l=="number"&&(d=l,l=null),l||d)for(P=0;P<R.length;P++){var C=d===R[P].id;if(l===R[P].fn&&C||!l&&C){R.splice(P,1);break}}else if(s)I["_on"+s]=[];else{var Z=Object.keys(I);for(P=0;P<Z.length;P++)Z[P].indexOf("_on")===0&&Array.isArray(I[Z[P]])&&(I[Z[P]]=[])}return I},once:function(s,l,d){var I=this;return I.on(s,l,d,1),I},_emit:function(s,l,d){for(var I=this,R=I["_on"+s],P=R.length-1;P>=0;P--)(!R[P].id||R[P].id===l||s==="load")&&(setTimeout(function(C){C.call(this,l,d)}.bind(I,R[P].fn),0),R[P].once&&I.off(s,R[P].fn,R[P].id));return I._loadQueue(s),I},_loadQueue:function(s){var l=this;if(l._queue.length>0){var d=l._queue[0];d.event===s&&(l._queue.shift(),l._loadQueue()),s||d.action()}return l},_ended:function(s){var l=this,d=s._sprite;if(!l._webAudio&&s._node&&!s._node.paused&&!s._node.ended&&s._node.currentTime<s._stop)return setTimeout(l._ended.bind(l,s),100),l;var I=!!(s._loop||l._sprite[d][2]);if(l._emit("end",s._id),!l._webAudio&&I&&l.stop(s._id,!0).play(s._id),l._webAudio&&I){l._emit("play",s._id),s._seek=s._start||0,s._rateSeek=0,s._playStart=m.ctx.currentTime;var R=(s._stop-s._start)*1e3/Math.abs(s._rate);l._endTimers[s._id]=setTimeout(l._ended.bind(l,s),R)}return l._webAudio&&!I&&(s._paused=!0,s._ended=!0,s._seek=s._start||0,s._rateSeek=0,l._clearTimer(s._id),l._cleanBuffer(s._node),m._autoSuspend()),!l._webAudio&&!I&&l.stop(s._id,!0),l},_clearTimer:function(s){var l=this;if(l._endTimers[s]){if(typeof l._endTimers[s]!="function")clearTimeout(l._endTimers[s]);else{var d=l._soundById(s);d&&d._node&&d._node.removeEventListener("ended",l._endTimers[s],!1)}delete l._endTimers[s]}return l},_soundById:function(s){for(var l=this,d=0;d<l._sounds.length;d++)if(s===l._sounds[d]._id)return l._sounds[d];return null},_inactiveSound:function(){var s=this;s._drain();for(var l=0;l<s._sounds.length;l++)if(s._sounds[l]._ended)return s._sounds[l].reset();return new E(s)},_drain:function(){var s=this,l=s._pool,d=0,I=0;if(!(s._sounds.length<l)){for(I=0;I<s._sounds.length;I++)s._sounds[I]._ended&&d++;for(I=s._sounds.length-1;I>=0;I--){if(d<=l)return;s._sounds[I]._ended&&(s._webAudio&&s._sounds[I]._node&&s._sounds[I]._node.disconnect(0),s._sounds.splice(I,1),d--)}}},_getSoundIds:function(s){var l=this;if(typeof s=="undefined"){for(var d=[],I=0;I<l._sounds.length;I++)d.push(l._sounds[I]._id);return d}else return[s]},_refreshBuffer:function(s){var l=this;return s._node.bufferSource=m.ctx.createBufferSource(),s._node.bufferSource.buffer=$[l._src],s._panner?s._node.bufferSource.connect(s._panner):s._node.bufferSource.connect(s._node),s._node.bufferSource.loop=s._loop,s._loop&&(s._node.bufferSource.loopStart=s._start||0,s._node.bufferSource.loopEnd=s._stop||0),s._node.bufferSource.playbackRate.setValueAtTime(s._rate,m.ctx.currentTime),l},_cleanBuffer:function(s){var l=this,d=m._navigator&&m._navigator.vendor.indexOf("Apple")>=0;if(m._scratchBuffer&&s.bufferSource&&(s.bufferSource.onended=null,s.bufferSource.disconnect(0),d))try{s.bufferSource.buffer=m._scratchBuffer}catch(I){}return s.bufferSource=null,l},_clearSound:function(s){var l=/MSIE |Trident\//.test(m._navigator&&m._navigator.userAgent);l||(s.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var E=function(s){this._parent=s,this.init()};E.prototype={init:function(){var s=this,l=s._parent;return s._muted=l._muted,s._loop=l._loop,s._volume=l._volume,s._rate=l._rate,s._seek=0,s._paused=!0,s._ended=!0,s._sprite="__default",s._id=++m._counter,l._sounds.push(s),s.create(),s},create:function(){var s=this,l=s._parent,d=m._muted||s._muted||s._parent._muted?0:s._volume;return l._webAudio?(s._node=typeof m.ctx.createGain=="undefined"?m.ctx.createGainNode():m.ctx.createGain(),s._node.gain.setValueAtTime(d,m.ctx.currentTime),s._node.paused=!0,s._node.connect(m.masterGain)):m.noAudio||(s._node=m._obtainHtml5Audio(),s._errorFn=s._errorListener.bind(s),s._node.addEventListener("error",s._errorFn,!1),s._loadFn=s._loadListener.bind(s),s._node.addEventListener(m._canPlayEvent,s._loadFn,!1),s._endFn=s._endListener.bind(s),s._node.addEventListener("ended",s._endFn,!1),s._node.src=l._src,s._node.preload=l._preload===!0?"auto":l._preload,s._node.volume=d*m.volume(),s._node.load()),s},reset:function(){var s=this,l=s._parent;return s._muted=l._muted,s._loop=l._loop,s._volume=l._volume,s._rate=l._rate,s._seek=0,s._rateSeek=0,s._paused=!0,s._ended=!0,s._sprite="__default",s._id=++m._counter,s},_errorListener:function(){var s=this;s._parent._emit("loaderror",s._id,s._node.error?s._node.error.code:0),s._node.removeEventListener("error",s._errorFn,!1)},_loadListener:function(){var s=this,l=s._parent;l._duration=Math.ceil(s._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),s._node.removeEventListener(m._canPlayEvent,s._loadFn,!1)},_endListener:function(){var s=this,l=s._parent;l._duration===1/0&&(l._duration=Math.ceil(s._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(s)),s._node.removeEventListener("ended",s._endFn,!1)}};var $={},Y=function(s){var l=s._src;if($[l]){s._duration=$[l].duration,D(s);return}if(/^data:[^;]+;base64,/.test(l)){for(var d=atob(l.split(",")[1]),I=new Uint8Array(d.length),R=0;R<d.length;++R)I[R]=d.charCodeAt(R);X(I.buffer,s)}else{var P=new XMLHttpRequest;P.open(s._xhr.method,l,!0),P.withCredentials=s._xhr.withCredentials,P.responseType="arraybuffer",s._xhr.headers&&Object.keys(s._xhr.headers).forEach(function(C){P.setRequestHeader(C,s._xhr.headers[C])}),P.onload=function(){var C=(P.status+"")[0];if(C!=="0"&&C!=="2"&&C!=="3"){s._emit("loaderror",null,"Failed loading audio file with status: "+P.status+".");return}X(P.response,s)},P.onerror=function(){s._webAudio&&(s._html5=!0,s._webAudio=!1,s._sounds=[],delete $[l],s.load())},H(P)}},H=function(s){try{s.send()}catch(l){s.onerror()}},X=function(s,l){var d=function(){l._emit("loaderror",null,"Decoding audio data failed.")},I=function(R){R&&l._sounds.length>0?($[l._src]=R,D(l,R)):d()};typeof Promise!="undefined"&&m.ctx.decodeAudioData.length===1?m.ctx.decodeAudioData(s).then(I).catch(d):m.ctx.decodeAudioData(s,I,d)},D=function(s,l){l&&!s._duration&&(s._duration=l.duration),Object.keys(s._sprite).length===0&&(s._sprite={__default:[0,s._duration*1e3]}),s._state!=="loaded"&&(s._state="loaded",s._emit("load"),s._loadQueue())},it=function(){if(m.usingWebAudio){try{typeof AudioContext!="undefined"?m.ctx=new AudioContext:typeof webkitAudioContext!="undefined"?m.ctx=new webkitAudioContext:m.usingWebAudio=!1}catch(R){m.usingWebAudio=!1}m.ctx||(m.usingWebAudio=!1);var s=/iP(hone|od|ad)/.test(m._navigator&&m._navigator.platform),l=m._navigator&&m._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=l?parseInt(l[1],10):null;if(s&&d&&d<9){var I=/safari/.test(m._navigator&&m._navigator.userAgent.toLowerCase());m._navigator&&!I&&(m.usingWebAudio=!1)}m.usingWebAudio&&(m.masterGain=typeof m.ctx.createGain=="undefined"?m.ctx.createGainNode():m.ctx.createGain(),m.masterGain.gain.setValueAtTime(m._muted?0:m._volume,m.ctx.currentTime),m.masterGain.connect(m.ctx.destination)),m._setup()}};et=[],p=function(){return{Howler:m,Howl:O}}.apply(bt,et),p!==void 0&&(_t.exports=p),bt.Howler=m,bt.Howl=O,typeof lt.g!="undefined"?(lt.g.HowlerGlobal=K,lt.g.Howler=m,lt.g.Howl=O,lt.g.Sound=E):typeof window!="undefined"&&(window.HowlerGlobal=K,window.Howler=m,window.Howl=O,window.Sound=E)})();(function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(m){var O=this;if(!O.ctx||!O.ctx.listener)return O;for(var E=O._howls.length-1;E>=0;E--)O._howls[E].stereo(m);return O},HowlerGlobal.prototype.pos=function(m,O,E){var $=this;if(!$.ctx||!$.ctx.listener)return $;if(O=typeof O!="number"?$._pos[1]:O,E=typeof E!="number"?$._pos[2]:E,typeof m=="number")$._pos=[m,O,E],typeof $.ctx.listener.positionX!="undefined"?($.ctx.listener.positionX.setTargetAtTime($._pos[0],Howler.ctx.currentTime,.1),$.ctx.listener.positionY.setTargetAtTime($._pos[1],Howler.ctx.currentTime,.1),$.ctx.listener.positionZ.setTargetAtTime($._pos[2],Howler.ctx.currentTime,.1)):$.ctx.listener.setPosition($._pos[0],$._pos[1],$._pos[2]);else return $._pos;return $},HowlerGlobal.prototype.orientation=function(m,O,E,$,Y,H){var X=this;if(!X.ctx||!X.ctx.listener)return X;var D=X._orientation;if(O=typeof O!="number"?D[1]:O,E=typeof E!="number"?D[2]:E,$=typeof $!="number"?D[3]:$,Y=typeof Y!="number"?D[4]:Y,H=typeof H!="number"?D[5]:H,typeof m=="number")X._orientation=[m,O,E,$,Y,H],typeof X.ctx.listener.forwardX!="undefined"?(X.ctx.listener.forwardX.setTargetAtTime(m,Howler.ctx.currentTime,.1),X.ctx.listener.forwardY.setTargetAtTime(O,Howler.ctx.currentTime,.1),X.ctx.listener.forwardZ.setTargetAtTime(E,Howler.ctx.currentTime,.1),X.ctx.listener.upX.setTargetAtTime($,Howler.ctx.currentTime,.1),X.ctx.listener.upY.setTargetAtTime(Y,Howler.ctx.currentTime,.1),X.ctx.listener.upZ.setTargetAtTime(H,Howler.ctx.currentTime,.1)):X.ctx.listener.setOrientation(m,O,E,$,Y,H);else return D;return X},Howl.prototype.init=function(m){return function(O){var E=this;return E._orientation=O.orientation||[1,0,0],E._stereo=O.stereo||null,E._pos=O.pos||null,E._pannerAttr={coneInnerAngle:typeof O.coneInnerAngle!="undefined"?O.coneInnerAngle:360,coneOuterAngle:typeof O.coneOuterAngle!="undefined"?O.coneOuterAngle:360,coneOuterGain:typeof O.coneOuterGain!="undefined"?O.coneOuterGain:0,distanceModel:typeof O.distanceModel!="undefined"?O.distanceModel:"inverse",maxDistance:typeof O.maxDistance!="undefined"?O.maxDistance:1e4,panningModel:typeof O.panningModel!="undefined"?O.panningModel:"HRTF",refDistance:typeof O.refDistance!="undefined"?O.refDistance:1,rolloffFactor:typeof O.rolloffFactor!="undefined"?O.rolloffFactor:1},E._onstereo=O.onstereo?[{fn:O.onstereo}]:[],E._onpos=O.onpos?[{fn:O.onpos}]:[],E._onorientation=O.onorientation?[{fn:O.onorientation}]:[],m.call(this,O)}}(Howl.prototype.init),Howl.prototype.stereo=function(m,O){var E=this;if(!E._webAudio)return E;if(E._state!=="loaded")return E._queue.push({event:"stereo",action:function(){E.stereo(m,O)}}),E;var $=typeof Howler.ctx.createStereoPanner=="undefined"?"spatial":"stereo";if(typeof O=="undefined")if(typeof m=="number")E._stereo=m,E._pos=[m,0,0];else return E._stereo;for(var Y=E._getSoundIds(O),H=0;H<Y.length;H++){var X=E._soundById(Y[H]);if(X)if(typeof m=="number")X._stereo=m,X._pos=[m,0,0],X._node&&(X._pannerAttr.panningModel="equalpower",(!X._panner||!X._panner.pan)&&K(X,$),$==="spatial"?typeof X._panner.positionX!="undefined"?(X._panner.positionX.setValueAtTime(m,Howler.ctx.currentTime),X._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),X._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):X._panner.setPosition(m,0,0):X._panner.pan.setValueAtTime(m,Howler.ctx.currentTime)),E._emit("stereo",X._id);else return X._stereo}return E},Howl.prototype.pos=function(m,O,E,$){var Y=this;if(!Y._webAudio)return Y;if(Y._state!=="loaded")return Y._queue.push({event:"pos",action:function(){Y.pos(m,O,E,$)}}),Y;if(O=typeof O!="number"?0:O,E=typeof E!="number"?-.5:E,typeof $=="undefined")if(typeof m=="number")Y._pos=[m,O,E];else return Y._pos;for(var H=Y._getSoundIds($),X=0;X<H.length;X++){var D=Y._soundById(H[X]);if(D)if(typeof m=="number")D._pos=[m,O,E],D._node&&((!D._panner||D._panner.pan)&&K(D,"spatial"),typeof D._panner.positionX!="undefined"?(D._panner.positionX.setValueAtTime(m,Howler.ctx.currentTime),D._panner.positionY.setValueAtTime(O,Howler.ctx.currentTime),D._panner.positionZ.setValueAtTime(E,Howler.ctx.currentTime)):D._panner.setPosition(m,O,E)),Y._emit("pos",D._id);else return D._pos}return Y},Howl.prototype.orientation=function(m,O,E,$){var Y=this;if(!Y._webAudio)return Y;if(Y._state!=="loaded")return Y._queue.push({event:"orientation",action:function(){Y.orientation(m,O,E,$)}}),Y;if(O=typeof O!="number"?Y._orientation[1]:O,E=typeof E!="number"?Y._orientation[2]:E,typeof $=="undefined")if(typeof m=="number")Y._orientation=[m,O,E];else return Y._orientation;for(var H=Y._getSoundIds($),X=0;X<H.length;X++){var D=Y._soundById(H[X]);if(D)if(typeof m=="number")D._orientation=[m,O,E],D._node&&(D._panner||(D._pos||(D._pos=Y._pos||[0,0,-.5]),K(D,"spatial")),typeof D._panner.orientationX!="undefined"?(D._panner.orientationX.setValueAtTime(m,Howler.ctx.currentTime),D._panner.orientationY.setValueAtTime(O,Howler.ctx.currentTime),D._panner.orientationZ.setValueAtTime(E,Howler.ctx.currentTime)):D._panner.setOrientation(m,O,E)),Y._emit("orientation",D._id);else return D._orientation}return Y},Howl.prototype.pannerAttr=function(){var m=this,O=arguments,E,$,Y;if(!m._webAudio)return m;if(O.length===0)return m._pannerAttr;if(O.length===1)if(typeof O[0]=="object")E=O[0],typeof $=="undefined"&&(E.pannerAttr||(E.pannerAttr={coneInnerAngle:E.coneInnerAngle,coneOuterAngle:E.coneOuterAngle,coneOuterGain:E.coneOuterGain,distanceModel:E.distanceModel,maxDistance:E.maxDistance,refDistance:E.refDistance,rolloffFactor:E.rolloffFactor,panningModel:E.panningModel}),m._pannerAttr={coneInnerAngle:typeof E.pannerAttr.coneInnerAngle!="undefined"?E.pannerAttr.coneInnerAngle:m._coneInnerAngle,coneOuterAngle:typeof E.pannerAttr.coneOuterAngle!="undefined"?E.pannerAttr.coneOuterAngle:m._coneOuterAngle,coneOuterGain:typeof E.pannerAttr.coneOuterGain!="undefined"?E.pannerAttr.coneOuterGain:m._coneOuterGain,distanceModel:typeof E.pannerAttr.distanceModel!="undefined"?E.pannerAttr.distanceModel:m._distanceModel,maxDistance:typeof E.pannerAttr.maxDistance!="undefined"?E.pannerAttr.maxDistance:m._maxDistance,refDistance:typeof E.pannerAttr.refDistance!="undefined"?E.pannerAttr.refDistance:m._refDistance,rolloffFactor:typeof E.pannerAttr.rolloffFactor!="undefined"?E.pannerAttr.rolloffFactor:m._rolloffFactor,panningModel:typeof E.pannerAttr.panningModel!="undefined"?E.pannerAttr.panningModel:m._panningModel});else return Y=m._soundById(parseInt(O[0],10)),Y?Y._pannerAttr:m._pannerAttr;else O.length===2&&(E=O[0],$=parseInt(O[1],10));for(var H=m._getSoundIds($),X=0;X<H.length;X++)if(Y=m._soundById(H[X]),Y){var D=Y._pannerAttr;D={coneInnerAngle:typeof E.coneInnerAngle!="undefined"?E.coneInnerAngle:D.coneInnerAngle,coneOuterAngle:typeof E.coneOuterAngle!="undefined"?E.coneOuterAngle:D.coneOuterAngle,coneOuterGain:typeof E.coneOuterGain!="undefined"?E.coneOuterGain:D.coneOuterGain,distanceModel:typeof E.distanceModel!="undefined"?E.distanceModel:D.distanceModel,maxDistance:typeof E.maxDistance!="undefined"?E.maxDistance:D.maxDistance,refDistance:typeof E.refDistance!="undefined"?E.refDistance:D.refDistance,rolloffFactor:typeof E.rolloffFactor!="undefined"?E.rolloffFactor:D.rolloffFactor,panningModel:typeof E.panningModel!="undefined"?E.panningModel:D.panningModel};var it=Y._panner;it?(it.coneInnerAngle=D.coneInnerAngle,it.coneOuterAngle=D.coneOuterAngle,it.coneOuterGain=D.coneOuterGain,it.distanceModel=D.distanceModel,it.maxDistance=D.maxDistance,it.refDistance=D.refDistance,it.rolloffFactor=D.rolloffFactor,it.panningModel=D.panningModel):(Y._pos||(Y._pos=m._pos||[0,0,-.5]),K(Y,"spatial"))}return m},Sound.prototype.init=function(m){return function(){var O=this,E=O._parent;O._orientation=E._orientation,O._stereo=E._stereo,O._pos=E._pos,O._pannerAttr=E._pannerAttr,m.call(this),O._stereo?E.stereo(O._stereo):O._pos&&E.pos(O._pos[0],O._pos[1],O._pos[2],O._id)}}(Sound.prototype.init),Sound.prototype.reset=function(m){return function(){var O=this,E=O._parent;return O._orientation=E._orientation,O._stereo=E._stereo,O._pos=E._pos,O._pannerAttr=E._pannerAttr,O._stereo?E.stereo(O._stereo):O._pos?E.pos(O._pos[0],O._pos[1],O._pos[2],O._id):O._panner&&(O._panner.disconnect(0),O._panner=void 0,E._refreshBuffer(O)),m.call(this)}}(Sound.prototype.reset);var K=function(m,O){O=O||"spatial",O==="spatial"?(m._panner=Howler.ctx.createPanner(),m._panner.coneInnerAngle=m._pannerAttr.coneInnerAngle,m._panner.coneOuterAngle=m._pannerAttr.coneOuterAngle,m._panner.coneOuterGain=m._pannerAttr.coneOuterGain,m._panner.distanceModel=m._pannerAttr.distanceModel,m._panner.maxDistance=m._pannerAttr.maxDistance,m._panner.refDistance=m._pannerAttr.refDistance,m._panner.rolloffFactor=m._pannerAttr.rolloffFactor,m._panner.panningModel=m._pannerAttr.panningModel,typeof m._panner.positionX!="undefined"?(m._panner.positionX.setValueAtTime(m._pos[0],Howler.ctx.currentTime),m._panner.positionY.setValueAtTime(m._pos[1],Howler.ctx.currentTime),m._panner.positionZ.setValueAtTime(m._pos[2],Howler.ctx.currentTime)):m._panner.setPosition(m._pos[0],m._pos[1],m._pos[2]),typeof m._panner.orientationX!="undefined"?(m._panner.orientationX.setValueAtTime(m._orientation[0],Howler.ctx.currentTime),m._panner.orientationY.setValueAtTime(m._orientation[1],Howler.ctx.currentTime),m._panner.orientationZ.setValueAtTime(m._orientation[2],Howler.ctx.currentTime)):m._panner.setOrientation(m._orientation[0],m._orientation[1],m._orientation[2])):(m._panner=Howler.ctx.createStereoPanner(),m._panner.pan.setValueAtTime(m._stereo,Howler.ctx.currentTime)),m._panner.connect(m._node),m._paused||m._parent.pause(m._id,!0).play(m._id,!0)}})()},392:function(_t,bt,lt){_t=lt.nmd(_t);var et;(function(){var p,K="4.17.21",m=200,O="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",E="Expected a function",$="Invalid `variable` option passed into `_.template`",Y="__lodash_hash_undefined__",H=500,X="__lodash_placeholder__",D=1,it=2,s=4,l=1,d=2,I=1,R=2,P=4,C=8,Z=16,tt=32,dt=64,pt=128,U=256,rt=512,ht=30,ot="...",re=800,Xt=16,Gt=1,Ct=2,le=3,qt=1/0,ve=9007199254740991,Tt=17976931348623157e292,gt=0/0,ct=4294967295,nt=ct-1,at=ct>>>1,mt=[["ary",pt],["bind",I],["bindKey",R],["curry",C],["curryRight",Z],["flip",rt],["partial",tt],["partialRight",dt],["rearg",U]],wt="[object Arguments]",Lt="[object Array]",oe="[object AsyncFunction]",At="[object Boolean]",Yt="[object Date]",Jt="[object DOMException]",Qt="[object Error]",Oe="[object Function]",Ae="[object GeneratorFunction]",F="[object Map]",fn="[object Number]",_n="[object Null]",ce="[object Object]",wn="[object Promise]",Di="[object Proxy]",Hn="[object RegExp]",Le="[object Set]",Q="[object String]",Wn="[object Symbol]",sr="[object Undefined]",ur="[object WeakMap]",Ri="[object WeakSet]",xn="[object ArrayBuffer]",Zt="[object DataView]",lr="[object Float32Array]",ie="[object Float64Array]",cr="[object Int8Array]",dn="[object Int16Array]",Gn="[object Int32Array]",qn="[object Uint8Array]",fr="[object Uint8ClampedArray]",Cr="[object Uint16Array]",be="[object Uint32Array]",Bi=/\b__p \+= '';/g,kr=/\b(__p \+=) '' \+/g,Ma=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ni=/&(?:amp|lt|gt|quot|#39);/g,Or=/[&<>"']/g,Mi=RegExp(Ni.source),ni=RegExp(Or.source),Fi=/<%-([\s\S]+?)%>/g,Fa=/<%([\s\S]+?)%>/g,zi=/<%=([\s\S]+?)%>/g,ri=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ii=/^\w*$/,za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lr=/[\\^$.*+?()[\]{}|]/g,Pr=RegExp(Lr.source),ai=/^\s+/,Ui=/\s/,Vi=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Dr=/\{\n\/\* \[wrapped with (.+)\] \*/,Yi=/,? & /,Xi=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Hi=/[()=,{}\[\]\/\s]/,Wi=/\\(\\)?/g,Gi=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Rr=/\w*$/,qi=/^[-+]0x[0-9a-f]+$/i,oi=/^0b[01]+$/i,bn=/^\[object .+?Constructor\]$/,dr=/^0o[0-7]+$/i,pr=/^(?:0|[1-9]\d*)$/,hr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zn=/($^)/,Ua=/['\n\r\u2028\u2029\\]/g,gr="\\ud800-\\udfff",Br="\\u0300-\\u036f",Ye="\\ufe20-\\ufe2f",Cn="\\u20d0-\\u20ff",pn=Br+Ye+Cn,tn="\\u2700-\\u27bf",kn="a-z\\xdf-\\xf6\\xf8-\\xff",en="\\xac\\xb1\\xd7\\xf7",hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",si="\\u2000-\\u206f",Zi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",mr="A-Z\\xc0-\\xd6\\xd8-\\xde",Ne="\\ufe0e\\ufe0f",yr=en+hn+si+Zi,vr="['\u2019]",ui="["+gr+"]",Se="["+yr+"]",On="["+pn+"]",Nt="\\d+",_e="["+tn+"]",nn="["+kn+"]",jt="[^"+gr+yr+Nt+tn+kn+mr+"]",xt="\\ud83c[\\udffb-\\udfff]",Me="(?:"+On+"|"+xt+")",li="[^"+gr+"]",Ki="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",w="["+mr+"]",x="\\u200d",z="(?:"+nn+"|"+jt+")",j="(?:"+w+"|"+jt+")",ut="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Dt="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",fe=Me+"?",we="["+Ne+"]?",xe="(?:"+x+"(?:"+[li,Ki,h].join("|")+")"+we+fe+")*",Ke="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",s0="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ns=we+fe+xe,Va="(?:"+[_e,Ki,h].join("|")+")"+ns,ul="(?:"+[li+On+"?",On,Ki,h,ui].join("|")+")",ll=RegExp(vr,"g"),cl=RegExp(On,"g"),Ya=RegExp(xt+"(?="+xt+")|"+ul+ns,"g"),fl=RegExp([w+"?"+nn+"+"+ut+"(?="+[Se,w,"$"].join("|")+")",j+"+"+Dt+"(?="+[Se,w+z,"$"].join("|")+")",w+"?"+z+"+"+ut,w+"+"+Dt,s0,Ke,Nt,Va].join("|"),"g"),Nr=RegExp("["+x+gr+pn+Ne+"]"),Xa=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ha=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],dl=-1,te={};te[lr]=te[ie]=te[cr]=te[dn]=te[Gn]=te[qn]=te[fr]=te[Cr]=te[be]=!0,te[wt]=te[Lt]=te[xn]=te[At]=te[Zt]=te[Yt]=te[Qt]=te[Oe]=te[F]=te[fn]=te[ce]=te[Hn]=te[Le]=te[Q]=te[ur]=!1;var ne={};ne[wt]=ne[Lt]=ne[xn]=ne[Zt]=ne[At]=ne[Yt]=ne[lr]=ne[ie]=ne[cr]=ne[dn]=ne[Gn]=ne[F]=ne[fn]=ne[ce]=ne[Hn]=ne[Le]=ne[Q]=ne[Wn]=ne[qn]=ne[fr]=ne[Cr]=ne[be]=!0,ne[Qt]=ne[Oe]=ne[ur]=!1;var pl={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},hl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u0={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},y={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},gl=parseFloat,ml=parseInt,Wa=typeof lt.g=="object"&&lt.g&&lt.g.Object===Object&&lt.g,yl=typeof self=="object"&&self&&self.Object===Object&&self,Ie=Wa||yl||Function("return this")(),rs=bt&&!bt.nodeType&&bt,Mr=rs&&!0&&_t&&!_t.nodeType&&_t,is=Mr&&Mr.exports===rs,Ga=is&&Wa.process,Ce=function(){try{var B=Mr&&Mr.require&&Mr.require("util").types;return B||Ga&&Ga.binding&&Ga.binding("util")}catch(W){}}(),Ji=Ce&&Ce.isArrayBuffer,vl=Ce&&Ce.isDate,Qi=Ce&&Ce.isMap,_l=Ce&&Ce.isRegExp,qa=Ce&&Ce.isSet,Za=Ce&&Ce.isTypedArray;function rn(B,W,V){switch(V.length){case 0:return B.call(W);case 1:return B.call(W,V[0]);case 2:return B.call(W,V[0],V[1]);case 3:return B.call(W,V[0],V[1],V[2])}return B.apply(W,V)}function wl(B,W,V,ft){for(var kt=-1,Ht=B==null?0:B.length;++kt<Ht;){var Ee=B[kt];W(ft,Ee,V(Ee),B)}return ft}function Fe(B,W){for(var V=-1,ft=B==null?0:B.length;++V<ft&&W(B[V],V,B)!==!1;);return B}function l0(B,W){for(var V=B==null?0:B.length;V--&&W(B[V],V,B)!==!1;);return B}function Ka(B,W){for(var V=-1,ft=B==null?0:B.length;++V<ft;)if(!W(B[V],V,B))return!1;return!0}function Kn(B,W){for(var V=-1,ft=B==null?0:B.length,kt=0,Ht=[];++V<ft;){var Ee=B[V];W(Ee,V,B)&&(Ht[kt++]=Ee)}return Ht}function _r(B,W){var V=B==null?0:B.length;return!!V&&ci(B,W,0)>-1}function as(B,W,V){for(var ft=-1,kt=B==null?0:B.length;++ft<kt;)if(V(W,B[ft]))return!0;return!1}function de(B,W){for(var V=-1,ft=B==null?0:B.length,kt=Array(ft);++V<ft;)kt[V]=W(B[V],V,B);return kt}function Ln(B,W){for(var V=-1,ft=W.length,kt=B.length;++V<ft;)B[kt+V]=W[V];return B}function Ja(B,W,V,ft){var kt=-1,Ht=B==null?0:B.length;for(ft&&Ht&&(V=B[++kt]);++kt<Ht;)V=W(V,B[kt],kt,B);return V}function bl(B,W,V,ft){var kt=B==null?0:B.length;for(ft&&kt&&(V=B[--kt]);kt--;)V=W(V,B[kt],kt,B);return V}function Fr(B,W){for(var V=-1,ft=B==null?0:B.length;++V<ft;)if(W(B[V],V,B))return!0;return!1}var c0=Qa("length");function Sl(B){return B.split("")}function Il(B){return B.match(Xi)||[]}function os(B,W,V){var ft;return V(B,function(kt,Ht,Ee){if(W(kt,Ht,Ee))return ft=Ht,!1}),ft}function ji(B,W,V,ft){for(var kt=B.length,Ht=V+(ft?1:-1);ft?Ht--:++Ht<kt;)if(W(B[Ht],Ht,B))return Ht;return-1}function ci(B,W,V){return W===W?Pl(B,W,V):ji(B,ss,V)}function ta(B,W,V,ft){for(var kt=V-1,Ht=B.length;++kt<Ht;)if(ft(B[kt],W))return kt;return-1}function ss(B){return B!==B}function us(B,W){var V=B==null?0:B.length;return V?yt(B,W)/V:gt}function Qa(B){return function(W){return W==null?p:W[B]}}function ls(B){return function(W){return B==null?p:B[W]}}function ja(B,W,V,ft,kt){return kt(B,function(Ht,Ee,ee){V=ft?(ft=!1,Ht):W(V,Ht,Ee,ee)}),V}function El(B,W){var V=B.length;for(B.sort(W);V--;)B[V]=B[V].value;return B}function yt(B,W){for(var V,ft=-1,kt=B.length;++ft<kt;){var Ht=W(B[ft]);Ht!==p&&(V=V===p?Ht:V+Ht)}return V}function to(B,W){for(var V=-1,ft=Array(B);++V<B;)ft[V]=W(V);return ft}function cs(B,W){return de(W,function(V){return[V,B[V]]})}function se(B){return B&&B.slice(0,ro(B)+1).replace(ai,"")}function Xe(B){return function(W){return B(W)}}function eo(B,W){return de(W,function(V){return B[V]})}function fi(B,W){return B.has(W)}function fs(B,W){for(var V=-1,ft=B.length;++V<ft&&ci(W,B[V],0)>-1;);return V}function ds(B,W){for(var V=B.length;V--&&ci(W,B[V],0)>-1;);return V}function Tl(B,W){for(var V=B.length,ft=0;V--;)B[V]===W&&++ft;return ft}var Al=ls(pl),$l=ls(hl);function xl(B){return"\\"+y[B]}function Cl(B,W){return B==null?p:B[W]}function zr(B){return Nr.test(B)}function kl(B){return Xa.test(B)}function Ol(B){for(var W,V=[];!(W=B.next()).done;)V.push(W.value);return V}function no(B){var W=-1,V=Array(B.size);return B.forEach(function(ft,kt){V[++W]=[kt,ft]}),V}function ps(B,W){return function(V){return B(W(V))}}function Jn(B,W){for(var V=-1,ft=B.length,kt=0,Ht=[];++V<ft;){var Ee=B[V];(Ee===W||Ee===X)&&(B[V]=X,Ht[kt++]=V)}return Ht}function ea(B){var W=-1,V=Array(B.size);return B.forEach(function(ft){V[++W]=ft}),V}function Ll(B){var W=-1,V=Array(B.size);return B.forEach(function(ft){V[++W]=[ft,ft]}),V}function Pl(B,W,V){for(var ft=V-1,kt=B.length;++ft<kt;)if(B[ft]===W)return ft;return-1}function f0(B,W,V){for(var ft=V+1;ft--;)if(B[ft]===W)return ft;return ft}function di(B){return zr(B)?Dl(B):c0(B)}function Sn(B){return zr(B)?Rl(B):Sl(B)}function ro(B){for(var W=B.length;W--&&Ui.test(B.charAt(W)););return W}var hs=ls(u0);function Dl(B){for(var W=Ya.lastIndex=0;Ya.test(B);)++W;return W}function Rl(B){return B.match(Ya)||[]}function gs(B){return B.match(fl)||[]}var Bl=function B(W){W=W==null?Ie:pi.defaults(Ie.Object(),W,pi.pick(Ie,Ha));var V=W.Array,ft=W.Date,kt=W.Error,Ht=W.Function,Ee=W.Math,ee=W.Object,io=W.RegExp,Nl=W.String,an=W.TypeError,na=V.prototype,ms=Ht.prototype,wr=ee.prototype,ra=W["__core-js_shared__"],hi=ms.toString,Kt=wr.hasOwnProperty,Ml=0,ys=function(){var e=/[^.]+$/.exec(ra&&ra.keys&&ra.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ia=wr.toString,Fl=hi.call(ee),zl=Ie._,Ul=io("^"+hi.call(Kt).replace(Lr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gi=is?W.Buffer:p,Pn=W.Symbol,Dn=W.Uint8Array,Vl=gi?gi.allocUnsafe:p,ao=ps(ee.getPrototypeOf,ee),vs=ee.create,Yl=wr.propertyIsEnumerable,aa=na.splice,Xl=Pn?Pn.isConcatSpreadable:p,oa=Pn?Pn.iterator:p,Rn=Pn?Pn.toStringTag:p,sa=function(){try{var e=Ar(ee,"defineProperty");return e({},"",{}),e}catch(n){}}(),_s=W.clearTimeout!==Ie.clearTimeout&&W.clearTimeout,ws=ft&&ft.now!==Ie.Date.now&&ft.now,Ur=W.setTimeout!==Ie.setTimeout&&W.setTimeout,ua=Ee.ceil,la=Ee.floor,oo=ee.getOwnPropertySymbols,Hl=gi?gi.isBuffer:p,ca=W.isFinite,Wl=na.join,bs=ps(ee.keys,ee),Te=Ee.max,Pe=Ee.min,Gl=ft.now,ql=W.parseInt,Ss=Ee.random,so=na.reverse,mi=Ar(W,"DataView"),yi=Ar(W,"Map"),uo=Ar(W,"Promise"),Vr=Ar(W,"Set"),fa=Ar(W,"WeakMap"),da=Ar(ee,"create"),lo=fa&&new fa,br={},Is=$n(mi),Zl=$n(yi),Yr=$n(uo),vi=$n(Vr),pa=$n(fa),co=Pn?Pn.prototype:p,_i=co?co.valueOf:p,Es=co?co.toString:p;function g(e){if(ge(e)&&!Ot(e)&&!(e instanceof zt)){if(e instanceof on)return e;if(Kt.call(e,"__wrapped__"))return Tu(e)}return new on(e)}var Xr=function(){function e(){}return function(n){if(!pe(n))return{};if(vs)return vs(n);e.prototype=n;var o=new e;return e.prototype=p,o}}();function ha(){}function on(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=p}g.templateSettings={escape:Fi,evaluate:Fa,interpolate:zi,variable:"",imports:{_:g}},g.prototype=ha.prototype,g.prototype.constructor=g,on.prototype=Xr(ha.prototype),on.prototype.constructor=on;function zt(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function ga(){var e=new zt(this.__wrapped__);return e.__actions__=Re(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Re(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Re(this.__views__),e}function Kl(){if(this.__filtered__){var e=new zt(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function fo(){var e=this.__wrapped__.value(),n=this.__dir__,o=Ot(e),i=n<0,f=o?e.length:0,v=m0(0,f,this.__views__),A=v.start,L=v.end,M=L-A,G=i?L:A-1,q=this.__iteratees__,J=q.length,st=0,vt=Pe(M,this.__takeCount__);if(!o||!i&&f==M&&vt==M)return eu(e,this.__actions__);var $t=[];t:for(;M--&&st<vt;){G+=n;for(var Bt=-1,St=e[G];++Bt<J;){var Mt=q[Bt],Ut=Mt.iteratee,qe=Mt.type,Be=Ut(St);if(qe==Ct)St=Be;else if(!Be){if(qe==Gt)continue t;break t}}$t[st++]=St}return $t}zt.prototype=Xr(ha.prototype),zt.prototype.constructor=zt;function Hr(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var i=e[n];this.set(i[0],i[1])}}function d0(){this.__data__=da?da(null):{},this.size=0}function Jl(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function Ts(e){var n=this.__data__;if(da){var o=n[e];return o===Y?p:o}return Kt.call(n,e)?n[e]:p}function Ql(e){var n=this.__data__;return da?n[e]!==p:Kt.call(n,e)}function jl(e,n){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=da&&n===p?Y:n,this}Hr.prototype.clear=d0,Hr.prototype.delete=Jl,Hr.prototype.get=Ts,Hr.prototype.has=Ql,Hr.prototype.set=jl;function Qn(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var i=e[n];this.set(i[0],i[1])}}function p0(){this.__data__=[],this.size=0}function h0(e){var n=this.__data__,o=wi(n,e);if(o<0)return!1;var i=n.length-1;return o==i?n.pop():aa.call(n,o,1),--this.size,!0}function As(e){var n=this.__data__,o=wi(n,e);return o<0?p:n[o][1]}function tc(e){return wi(this.__data__,e)>-1}function ma(e,n){var o=this.__data__,i=wi(o,e);return i<0?(++this.size,o.push([e,n])):o[i][1]=n,this}Qn.prototype.clear=p0,Qn.prototype.delete=h0,Qn.prototype.get=As,Qn.prototype.has=tc,Qn.prototype.set=ma;function In(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var i=e[n];this.set(i[0],i[1])}}function $s(){this.size=0,this.__data__={hash:new Hr,map:new(yi||Qn),string:new Hr}}function ec(e){var n=zn(this,e).delete(e);return this.size-=n?1:0,n}function po(e){return zn(this,e).get(e)}function nc(e){return zn(this,e).has(e)}function xs(e,n){var o=zn(this,e),i=o.size;return o.set(e,n),this.size+=o.size==i?0:1,this}In.prototype.clear=$s,In.prototype.delete=ec,In.prototype.get=po,In.prototype.has=nc,In.prototype.set=xs;function jn(e){var n=-1,o=e==null?0:e.length;for(this.__data__=new In;++n<o;)this.add(e[n])}function rc(e){return this.__data__.set(e,Y),this}function Wr(e){return this.__data__.has(e)}jn.prototype.add=jn.prototype.push=rc,jn.prototype.has=Wr;function gn(e){var n=this.__data__=new Qn(e);this.size=n.size}function Cs(){this.__data__=new Qn,this.size=0}function ic(e){var n=this.__data__,o=n.delete(e);return this.size=n.size,o}function ac(e){return this.__data__.get(e)}function ks(e){return this.__data__.has(e)}function oc(e,n){var o=this.__data__;if(o instanceof Qn){var i=o.__data__;if(!yi||i.length<m-1)return i.push([e,n]),this.size=++o.size,this;o=this.__data__=new In(i)}return o.set(e,n),this.size=o.size,this}gn.prototype.clear=Cs,gn.prototype.delete=ic,gn.prototype.get=ac,gn.prototype.has=ks,gn.prototype.set=oc;function sc(e,n){var o=Ot(e),i=!o&&xr(e),f=!o&&!i&&or(e),v=!o&&!i&&!f&&jr(e),A=o||i||f||v,L=A?to(e.length,Nl):[],M=L.length;for(var G in e)(n||Kt.call(e,G))&&!(A&&(G=="length"||f&&(G=="offset"||G=="parent")||v&&(G=="buffer"||G=="byteLength"||G=="byteOffset")||Un(G,M)))&&L.push(G);return L}function ho(e){var n=e.length;return n?e[Eo(0,n-1)]:p}function Sr(e,n){return Ca(Re(e),Ir(n,0,e.length))}function Os(e){return Ca(Re(e))}function ya(e,n,o){(o!==p&&!yn(e[n],o)||o===p&&!(n in e))&&Bn(e,n,o)}function Gr(e,n,o){var i=e[n];(!(Kt.call(e,n)&&yn(i,o))||o===p&&!(n in e))&&Bn(e,n,o)}function wi(e,n){for(var o=e.length;o--;)if(yn(e[o][0],n))return o;return-1}function Ls(e,n,o,i){return Nn(e,function(f,v,A){n(i,f,o(f),A)}),i}function go(e,n){return e&&Tn(n,$e(n),e)}function uc(e,n){return e&&Tn(n,We(n),e)}function Bn(e,n,o){n=="__proto__"&&sa?sa(e,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[n]=o}function mo(e,n){for(var o=-1,i=n.length,f=V(i),v=e==null;++o<i;)f[o]=v?p:Go(e,n[o]);return f}function Ir(e,n,o){return e===e&&(o!==p&&(e=e<=o?e:o),n!==p&&(e=e>=n?e:n)),e}function sn(e,n,o,i,f,v){var A,L=n&D,M=n&it,G=n&s;if(o&&(A=f?o(e,i,f,v):o(e)),A!==p)return A;if(!pe(e))return e;var q=Ot(e);if(q){if(A=v0(e),!L)return Re(e,A)}else{var J=ze(e),st=J==Oe||J==Ae;if(or(e))return Oo(e,L);if(J==ce||J==wt||st&&!f){if(A=M||st?{}:Uc(e),!L)return M?Pc(e,uc(A,e)):Lc(e,go(A,e))}else{if(!ne[J])return f?e:{};A=_0(e,J,L)}}v||(v=new gn);var vt=v.get(e);if(vt)return vt;v.set(e,A),Wu(e)?e.forEach(function(St){A.add(sn(St,n,o,St,e,v))}):Xu(e)&&e.forEach(function(St,Mt){A.set(Mt,sn(St,n,o,Mt,e,v))});var $t=G?M?Bo:Ta:M?We:$e,Bt=q?p:$t(e);return Fe(Bt||e,function(St,Mt){Bt&&(Mt=St,St=e[Mt]),Gr(A,Mt,sn(St,n,o,Mt,e,v))}),A}function Ps(e){var n=$e(e);return function(o){return Er(o,e,n)}}function Er(e,n,o){var i=o.length;if(e==null)return!i;for(e=ee(e);i--;){var f=o[i],v=n[f],A=e[f];if(A===p&&!(f in e)||!v(A))return!1}return!0}function lc(e,n,o){if(typeof e!="function")throw new an(E);return Li(function(){e.apply(p,o)},n)}function bi(e,n,o,i){var f=-1,v=_r,A=!0,L=e.length,M=[],G=n.length;if(!L)return M;o&&(n=de(n,Xe(o))),i?(v=as,A=!1):n.length>=m&&(v=fi,A=!1,n=new jn(n));t:for(;++f<L;){var q=e[f],J=o==null?q:o(q);if(q=i||q!==0?q:0,A&&J===J){for(var st=G;st--;)if(n[st]===J)continue t;M.push(q)}else v(n,J,i)||M.push(q)}return M}var Nn=su(En),yo=su(wo,!0);function cc(e,n){var o=!0;return Nn(e,function(i,f,v){return o=!!n(i,f,v),o}),o}function Si(e,n,o){for(var i=-1,f=e.length;++i<f;){var v=e[i],A=n(v);if(A!=null&&(L===p?A===A&&!je(A):o(A,L)))var L=A,M=v}return M}function fc(e,n,o,i){var f=e.length;for(o=Pt(o),o<0&&(o=-o>f?0:f+o),i=i===p||i>f?f:Pt(i),i<0&&(i+=f),i=o>i?0:qu(i);o<i;)e[o++]=n;return e}function Ds(e,n){var o=[];return Nn(e,function(i,f,v){n(i,f,v)&&o.push(i)}),o}function ke(e,n,o,i,f){var v=-1,A=e.length;for(o||(o=b0),f||(f=[]);++v<A;){var L=e[v];n>0&&o(L)?n>1?ke(L,n-1,o,i,f):Ln(f,L):i||(f[f.length]=L)}return f}var vo=rr(),_o=rr(!0);function En(e,n){return e&&vo(e,n,$e)}function wo(e,n){return e&&_o(e,n,$e)}function Ii(e,n){return Kn(n,function(o){return Vn(e[o])})}function Tr(e,n){n=er(n,e);for(var o=0,i=n.length;e!=null&&o<i;)e=e[An(n[o++])];return o&&o==i?e:p}function Rs(e,n,o){var i=n(e);return Ot(e)?i:Ln(i,o(e))}function De(e){return e==null?e===p?sr:_n:Rn&&Rn in ee(e)?zc(e):qc(e)}function Bs(e,n){return e>n}function Mn(e,n){return e!=null&&Kt.call(e,n)}function Ns(e,n){return e!=null&&n in ee(e)}function Ms(e,n,o){return e>=Pe(n,o)&&e<Te(n,o)}function Fs(e,n,o){for(var i=o?as:_r,f=e[0].length,v=e.length,A=v,L=V(v),M=1/0,G=[];A--;){var q=e[A];A&&n&&(q=de(q,Xe(n))),M=Pe(q.length,M),L[A]=!o&&(n||f>=120&&q.length>=120)?new jn(A&&q):p}q=e[0];var J=-1,st=L[0];t:for(;++J<f&&G.length<M;){var vt=q[J],$t=n?n(vt):vt;if(vt=o||vt!==0?vt:0,!(st?fi(st,$t):i(G,$t,o))){for(A=v;--A;){var Bt=L[A];if(!(Bt?fi(Bt,$t):i(e[A],$t,o)))continue t}st&&st.push($t),G.push(vt)}}return G}function dc(e,n,o,i){return En(e,function(f,v,A){n(i,o(f),v,A)}),i}function qr(e,n,o){n=er(n,e),e=bu(e,n);var i=e==null?e:e[An(ln(n))];return i==null?p:rn(i,e,o)}function zs(e){return ge(e)&&De(e)==wt}function pc(e){return ge(e)&&De(e)==xn}function hc(e){return ge(e)&&De(e)==Yt}function Ei(e,n,o,i,f){return e===n?!0:e==null||n==null||!ge(e)&&!ge(n)?e!==e&&n!==n:gc(e,n,o,i,Ei,f)}function gc(e,n,o,i,f,v){var A=Ot(e),L=Ot(n),M=A?Lt:ze(e),G=L?Lt:ze(n);M=M==wt?ce:M,G=G==wt?ce:G;var q=M==ce,J=G==ce,st=M==G;if(st&&or(e)){if(!or(n))return!1;A=!0,q=!1}if(st&&!q)return v||(v=new gn),A||jr(e)?mu(e,n,o,i,f,v):Mc(e,n,M,o,i,f,v);if(!(o&l)){var vt=q&&Kt.call(e,"__wrapped__"),$t=J&&Kt.call(n,"__wrapped__");if(vt||$t){var Bt=vt?e.value():e,St=$t?n.value():n;return v||(v=new gn),f(Bt,St,o,i,v)}}return st?(v||(v=new gn),Fc(e,n,o,i,f,v)):!1}function mc(e){return ge(e)&&ze(e)==F}function bo(e,n,o,i){var f=o.length,v=f,A=!i;if(e==null)return!v;for(e=ee(e);f--;){var L=o[f];if(A&&L[2]?L[1]!==e[L[0]]:!(L[0]in e))return!1}for(;++f<v;){L=o[f];var M=L[0],G=e[M],q=L[1];if(A&&L[2]){if(G===p&&!(M in e))return!1}else{var J=new gn;if(i)var st=i(G,q,M,e,n,J);if(!(st===p?Ei(q,G,l|d,i,J):st))return!1}}return!0}function Us(e){if(!pe(e)||Yc(e))return!1;var n=Vn(e)?Ul:bn;return n.test($n(e))}function yc(e){return ge(e)&&De(e)==Hn}function Vs(e){return ge(e)&&ze(e)==Le}function un(e){return ge(e)&&Ra(e.length)&&!!te[De(e)]}function va(e){return typeof e=="function"?e:e==null?Ge:typeof e=="object"?Ot(e)?Hs(e[0],e[1]):Xs(e):al(e)}function Ti(e){if(!Oi(e))return bs(e);var n=[];for(var o in ee(e))Kt.call(e,o)&&o!="constructor"&&n.push(o);return n}function vc(e){if(!pe(e))return Gc(e);var n=Oi(e),o=[];for(var i in e)i=="constructor"&&(n||!Kt.call(e,i))||o.push(i);return o}function So(e,n){return e<n}function Ys(e,n){var o=-1,i=He(e)?V(e.length):[];return Nn(e,function(f,v,A){i[++o]=n(f,v,A)}),i}function Xs(e){var n=ki(e);return n.length==1&&n[0][2]?_u(n[0][0],n[0][1]):function(o){return o===e||bo(o,e,n)}}function Hs(e,n){return Aa(e)&&vu(n)?_u(An(e),n):function(o){var i=Go(o,e);return i===p&&i===n?qo(o,e):Ei(n,i,l|d)}}function _a(e,n,o,i,f){e!==n&&vo(n,function(v,A){if(f||(f=new gn),pe(v))_c(e,n,A,o,_a,i,f);else{var L=i?i($a(e,A),v,A+"",e,n,f):p;L===p&&(L=v),ya(e,A,L)}},We)}function _c(e,n,o,i,f,v,A){var L=$a(e,o),M=$a(n,o),G=A.get(M);if(G){ya(e,o,G);return}var q=v?v(L,M,o+"",e,n,A):p,J=q===p;if(J){var st=Ot(M),vt=!st&&or(M),$t=!st&&!vt&&jr(M);q=M,st||vt||$t?Ot(L)?q=L:ye(L)?q=Re(L):vt?(J=!1,q=Oo(M,!0)):$t?(J=!1,q=iu(M,!0)):q=[]:Pi(M)||xr(M)?(q=L,xr(L)?q=Zu(L):(!pe(L)||Vn(L))&&(q=Uc(M))):J=!1}J&&(A.set(M,q),f(q,M,i,v,A),A.delete(M)),ya(e,o,q)}function Ws(e,n){var o=e.length;if(o)return n+=n<0?o:0,Un(n,o)?e[n]:p}function Gs(e,n,o){n.length?n=de(n,function(v){return Ot(v)?function(A){return Tr(A,v.length===1?v[0]:v)}:v}):n=[Ge];var i=-1;n=de(n,Xe(Et()));var f=Ys(e,function(v,A,L){var M=de(n,function(G){return G(v)});return{criteria:M,index:++i,value:v}});return El(f,function(v,A){return Oc(v,A,o)})}function wc(e,n){return qs(e,n,function(o,i){return qo(e,i)})}function qs(e,n,o){for(var i=-1,f=n.length,v={};++i<f;){var A=n[i],L=Tr(e,A);o(L,A)&&Ai(v,er(A,e),L)}return v}function bc(e){return function(n){return Tr(n,e)}}function Io(e,n,o,i){var f=i?ta:ci,v=-1,A=n.length,L=e;for(e===n&&(n=Re(n)),o&&(L=de(e,Xe(o)));++v<A;)for(var M=0,G=n[v],q=o?o(G):G;(M=f(L,q,M,i))>-1;)L!==e&&aa.call(L,M,1),aa.call(e,M,1);return e}function Zs(e,n){for(var o=e?n.length:0,i=o-1;o--;){var f=n[o];if(o==i||f!==v){var v=f;Un(f)?aa.call(e,f,1):$o(e,f)}}return e}function Eo(e,n){return e+la(Ss()*(n-e+1))}function Sc(e,n,o,i){for(var f=-1,v=Te(ua((n-e)/(o||1)),0),A=V(v);v--;)A[i?v:++f]=e,e+=o;return A}function To(e,n){var o="";if(!e||n<1||n>ve)return o;do n%2&&(o+=e),n=la(n/2),n&&(e+=e);while(n);return o}function Rt(e,n){return xa(wu(e,n,Ge),e+"")}function Ic(e){return ho(ti(e))}function Ec(e,n){var o=ti(e);return Ca(o,Ir(n,0,o.length))}function Ai(e,n,o,i){if(!pe(e))return e;n=er(n,e);for(var f=-1,v=n.length,A=v-1,L=e;L!=null&&++f<v;){var M=An(n[f]),G=o;if(M==="__proto__"||M==="constructor"||M==="prototype")return e;if(f!=A){var q=L[M];G=i?i(q,M,L):p,G===p&&(G=pe(q)?q:Un(n[f+1])?[]:{})}Gr(L,M,G),L=L[M]}return e}var Ks=lo?function(e,n){return lo.set(e,n),e}:Ge,Tc=sa?function(e,n){return sa(e,"toString",{configurable:!0,enumerable:!1,value:Ko(n),writable:!0})}:Ge;function Js(e){return Ca(ti(e))}function Je(e,n,o){var i=-1,f=e.length;n<0&&(n=-n>f?0:f+n),o=o>f?f:o,o<0&&(o+=f),f=n>o?0:o-n>>>0,n>>>=0;for(var v=V(f);++i<f;)v[i]=e[i+n];return v}function Ac(e,n){var o;return Nn(e,function(i,f,v){return o=n(i,f,v),!o}),!!o}function wa(e,n,o){var i=0,f=e==null?i:e.length;if(typeof n=="number"&&n===n&&f<=at){for(;i<f;){var v=i+f>>>1,A=e[v];A!==null&&!je(A)&&(o?A<=n:A<n)?i=v+1:f=v}return f}return Ao(e,n,Ge,o)}function Ao(e,n,o,i){var f=0,v=e==null?0:e.length;if(v===0)return 0;n=o(n);for(var A=n!==n,L=n===null,M=je(n),G=n===p;f<v;){var q=la((f+v)/2),J=o(e[q]),st=J!==p,vt=J===null,$t=J===J,Bt=je(J);if(A)var St=i||$t;else G?St=$t&&(i||st):L?St=$t&&st&&(i||!vt):M?St=$t&&st&&!vt&&(i||!Bt):vt||Bt?St=!1:St=i?J<=n:J<n;St?f=q+1:v=q}return Pe(v,nt)}function Qs(e,n){for(var o=-1,i=e.length,f=0,v=[];++o<i;){var A=e[o],L=n?n(A):A;if(!o||!yn(L,M)){var M=L;v[f++]=A===0?0:A}}return v}function js(e){return typeof e=="number"?e:je(e)?gt:+e}function Qe(e){if(typeof e=="string")return e;if(Ot(e))return de(e,Qe)+"";if(je(e))return Es?Es.call(e):"";var n=e+"";return n=="0"&&1/e==-qt?"-0":n}function tr(e,n,o){var i=-1,f=_r,v=e.length,A=!0,L=[],M=L;if(o)A=!1,f=as;else if(v>=m){var G=n?null:Rc(e);if(G)return ea(G);A=!1,f=fi,M=new jn}else M=n?[]:L;t:for(;++i<v;){var q=e[i],J=n?n(q):q;if(q=o||q!==0?q:0,A&&J===J){for(var st=M.length;st--;)if(M[st]===J)continue t;n&&M.push(J),L.push(q)}else f(M,J,o)||(M!==L&&M.push(J),L.push(q))}return L}function $o(e,n){return n=er(n,e),e=bu(e,n),e==null||delete e[An(ln(n))]}function tu(e,n,o,i){return Ai(e,n,o(Tr(e,n)),i)}function ba(e,n,o,i){for(var f=e.length,v=i?f:-1;(i?v--:++v<f)&&n(e[v],v,e););return o?Je(e,i?0:v,i?v+1:f):Je(e,i?v+1:0,i?f:v)}function eu(e,n){var o=e;return o instanceof zt&&(o=o.value()),Ja(n,function(i,f){return f.func.apply(f.thisArg,Ln([i],f.args))},o)}function xo(e,n,o){var i=e.length;if(i<2)return i?tr(e[0]):[];for(var f=-1,v=V(i);++f<i;)for(var A=e[f],L=-1;++L<i;)L!=f&&(v[f]=bi(v[f]||A,e[L],n,o));return tr(ke(v,1),n,o)}function nu(e,n,o){for(var i=-1,f=e.length,v=n.length,A={};++i<f;){var L=i<v?n[i]:p;o(A,e[i],L)}return A}function Co(e){return ye(e)?e:[]}function ko(e){return typeof e=="function"?e:Ge}function er(e,n){return Ot(e)?e:Aa(e,n)?[e]:Eu(Wt(e))}var $c=Rt;function nr(e,n,o){var i=e.length;return o=o===p?i:o,!n&&o>=i?e:Je(e,n,o)}var ru=_s||function(e){return Ie.clearTimeout(e)};function Oo(e,n){if(n)return e.slice();var o=e.length,i=Vl?Vl(o):new e.constructor(o);return e.copy(i),i}function Lo(e){var n=new e.constructor(e.byteLength);return new Dn(n).set(new Dn(e)),n}function xc(e,n){var o=n?Lo(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function Cc(e){var n=new e.constructor(e.source,Rr.exec(e));return n.lastIndex=e.lastIndex,n}function kc(e){return _i?ee(_i.call(e)):{}}function iu(e,n){var o=n?Lo(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function mn(e,n){if(e!==n){var o=e!==p,i=e===null,f=e===e,v=je(e),A=n!==p,L=n===null,M=n===n,G=je(n);if(!L&&!G&&!v&&e>n||v&&A&&M&&!L&&!G||i&&A&&M||!o&&M||!f)return 1;if(!i&&!v&&!G&&e<n||G&&o&&f&&!i&&!v||L&&o&&f||!A&&f||!M)return-1}return 0}function Oc(e,n,o){for(var i=-1,f=e.criteria,v=n.criteria,A=f.length,L=o.length;++i<A;){var M=mn(f[i],v[i]);if(M){if(i>=L)return M;var G=o[i];return M*(G=="desc"?-1:1)}}return e.index-n.index}function au(e,n,o,i){for(var f=-1,v=e.length,A=o.length,L=-1,M=n.length,G=Te(v-A,0),q=V(M+G),J=!i;++L<M;)q[L]=n[L];for(;++f<A;)(J||f<v)&&(q[o[f]]=e[f]);for(;G--;)q[L++]=e[f++];return q}function ou(e,n,o,i){for(var f=-1,v=e.length,A=-1,L=o.length,M=-1,G=n.length,q=Te(v-L,0),J=V(q+G),st=!i;++f<q;)J[f]=e[f];for(var vt=f;++M<G;)J[vt+M]=n[M];for(;++A<L;)(st||f<v)&&(J[vt+o[A]]=e[f++]);return J}function Re(e,n){var o=-1,i=e.length;for(n||(n=V(i));++o<i;)n[o]=e[o];return n}function Tn(e,n,o,i){var f=!o;o||(o={});for(var v=-1,A=n.length;++v<A;){var L=n[v],M=i?i(o[L],e[L],L,o,e):p;M===p&&(M=e[L]),f?Bn(o,L,M):Gr(o,L,M)}return o}function Lc(e,n){return Tn(e,yu(e),n)}function Pc(e,n){return Tn(e,$r(e),n)}function Sa(e,n){return function(o,i){var f=Ot(o)?wl:Ls,v=n?n():{};return f(o,e,Et(i,2),v)}}function Zr(e){return Rt(function(n,o){var i=-1,f=o.length,v=f>1?o[f-1]:p,A=f>2?o[2]:p;for(v=e.length>3&&typeof v=="function"?(f--,v):p,A&&Ue(o[0],o[1],A)&&(v=f<3?p:v,f=1),n=ee(n);++i<f;){var L=o[i];L&&e(n,L,i,v)}return n})}function su(e,n){return function(o,i){if(o==null)return o;if(!He(o))return e(o,i);for(var f=o.length,v=n?f:-1,A=ee(o);(n?v--:++v<f)&&i(A[v],v,A)!==!1;);return o}}function rr(e){return function(n,o,i){for(var f=-1,v=ee(n),A=i(n),L=A.length;L--;){var M=A[e?L:++f];if(o(v[M],M,v)===!1)break}return n}}function Po(e,n,o){var i=n&I,f=$i(e);function v(){var A=this&&this!==Ie&&this instanceof v?f:e;return A.apply(i?o:this,arguments)}return v}function uu(e){return function(n){n=Wt(n);var o=zr(n)?Sn(n):p,i=o?o[0]:n.charAt(0),f=o?nr(o,1).join(""):n.slice(1);return i[e]()+f}}function Kr(e){return function(n){return Ja(rl(nl(n).replace(ll,"")),e,"")}}function $i(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var o=Xr(e.prototype),i=e.apply(o,n);return pe(i)?i:o}}function lu(e,n,o){var i=$i(e);function f(){for(var v=arguments.length,A=V(v),L=v,M=Jr(f);L--;)A[L]=arguments[L];var G=v<3&&A[0]!==M&&A[v-1]!==M?[]:Jn(A,M);if(v-=G.length,v<o)return hu(e,n,ir,f.placeholder,p,A,G,p,p,o-v);var q=this&&this!==Ie&&this instanceof f?i:e;return rn(q,this,A)}return f}function cu(e){return function(n,o,i){var f=ee(n);if(!He(n)){var v=Et(o,3);n=$e(n),o=function(L){return v(f[L],L,f)}}var A=e(n,o,i);return A>-1?f[v?n[A]:A]:p}}function fu(e){return Fn(function(n){var o=n.length,i=o,f=on.prototype.thru;for(e&&n.reverse();i--;){var v=n[i];if(typeof v!="function")throw new an(E);if(f&&!A&&Ci(v)=="wrapper")var A=new on([],!0)}for(i=A?i:o;++i<o;){v=n[i];var L=Ci(v),M=L=="wrapper"?No(v):p;M&&Fo(M[0])&&M[1]==(pt|C|tt|U)&&!M[4].length&&M[9]==1?A=A[Ci(M[0])].apply(A,M[3]):A=v.length==1&&Fo(v)?A[L]():A.thru(v)}return function(){var G=arguments,q=G[0];if(A&&G.length==1&&Ot(q))return A.plant(q).value();for(var J=0,st=o?n[J].apply(this,G):q;++J<o;)st=n[J].call(this,st);return st}})}function ir(e,n,o,i,f,v,A,L,M,G){var q=n&pt,J=n&I,st=n&R,vt=n&(C|Z),$t=n&rt,Bt=st?p:$i(e);function St(){for(var Mt=arguments.length,Ut=V(Mt),qe=Mt;qe--;)Ut[qe]=arguments[qe];if(vt)var Be=Jr(St),Ze=Tl(Ut,Be);if(i&&(Ut=au(Ut,i,f,vt)),v&&(Ut=ou(Ut,v,A,vt)),Mt-=Ze,vt&&Mt<G){var me=Jn(Ut,Be);return hu(e,n,ir,St.placeholder,o,Ut,me,L,M,G-Mt)}var vn=J?o:this,Xn=st?vn[e]:e;return Mt=Ut.length,L?Ut=Zc(Ut,L):$t&&Mt>1&&Ut.reverse(),q&&M<Mt&&(Ut.length=M),this&&this!==Ie&&this instanceof St&&(Xn=Bt||$i(Xn)),Xn.apply(vn,Ut)}return St}function du(e,n){return function(o,i){return dc(o,e,n(i),{})}}function Ia(e,n){return function(o,i){var f;if(o===p&&i===p)return n;if(o!==p&&(f=o),i!==p){if(f===p)return i;typeof o=="string"||typeof i=="string"?(o=Qe(o),i=Qe(i)):(o=js(o),i=js(i)),f=e(o,i)}return f}}function Do(e){return Fn(function(n){return n=de(n,Xe(Et())),Rt(function(o){var i=this;return e(n,function(f){return rn(f,i,o)})})})}function xi(e,n){n=n===p?" ":Qe(n);var o=n.length;if(o<2)return o?To(n,e):n;var i=To(n,ua(e/di(n)));return zr(n)?nr(Sn(i),0,e).join(""):i.slice(0,e)}function Dc(e,n,o,i){var f=n&I,v=$i(e);function A(){for(var L=-1,M=arguments.length,G=-1,q=i.length,J=V(q+M),st=this&&this!==Ie&&this instanceof A?v:e;++G<q;)J[G]=i[G];for(;M--;)J[G++]=arguments[++L];return rn(st,f?o:this,J)}return A}function pu(e){return function(n,o,i){return i&&typeof i!="number"&&Ue(n,o,i)&&(o=i=p),n=Yn(n),o===p?(o=n,n=0):o=Yn(o),i=i===p?n<o?1:-1:Yn(i),Sc(n,o,i,e)}}function Ea(e){return function(n,o){return typeof n=="string"&&typeof o=="string"||(n=cn(n),o=cn(o)),e(n,o)}}function hu(e,n,o,i,f,v,A,L,M,G){var q=n&C,J=q?A:p,st=q?p:A,vt=q?v:p,$t=q?p:v;n|=q?tt:dt,n&=~(q?dt:tt),n&P||(n&=~(I|R));var Bt=[e,n,f,vt,J,$t,st,L,M,G],St=o.apply(p,Bt);return Fo(e)&&Su(St,Bt),St.placeholder=i,Qr(St,e,n)}function Ro(e){var n=Ee[e];return function(o,i){if(o=cn(o),i=i==null?0:Pe(Pt(i),292),i&&ca(o)){var f=(Wt(o)+"e").split("e"),v=n(f[0]+"e"+(+f[1]+i));return f=(Wt(v)+"e").split("e"),+(f[0]+"e"+(+f[1]-i))}return n(o)}}var Rc=Vr&&1/ea(new Vr([,-0]))[1]==qt?function(e){return new Vr(e)}:jo;function gu(e){return function(n){var o=ze(n);return o==F?no(n):o==Le?Ll(n):cs(n,e(n))}}function ar(e,n,o,i,f,v,A,L){var M=n&R;if(!M&&typeof e!="function")throw new an(E);var G=i?i.length:0;if(G||(n&=~(tt|dt),i=f=p),A=A===p?A:Te(Pt(A),0),L=L===p?L:Pt(L),G-=f?f.length:0,n&dt){var q=i,J=f;i=f=p}var st=M?p:No(e),vt=[e,n,o,i,f,q,J,v,A,L];if(st&&Wc(vt,st),e=vt[0],n=vt[1],o=vt[2],i=vt[3],f=vt[4],L=vt[9]=vt[9]===p?M?0:e.length:Te(vt[9]-G,0),!L&&n&(C|Z)&&(n&=~(C|Z)),!n||n==I)var $t=Po(e,n,o);else n==C||n==Z?$t=lu(e,n,L):(n==tt||n==(I|tt))&&!f.length?$t=Dc(e,n,o,i):$t=ir.apply(p,vt);var Bt=st?Ks:Su;return Qr(Bt($t,vt),e,n)}function Bc(e,n,o,i){return e===p||yn(e,wr[o])&&!Kt.call(i,o)?n:e}function Nc(e,n,o,i,f,v){return pe(e)&&pe(n)&&(v.set(n,e),_a(e,n,p,Nc,v),v.delete(n)),e}function g0(e){return Pi(e)?p:e}function mu(e,n,o,i,f,v){var A=o&l,L=e.length,M=n.length;if(L!=M&&!(A&&M>L))return!1;var G=v.get(e),q=v.get(n);if(G&&q)return G==n&&q==e;var J=-1,st=!0,vt=o&d?new jn:p;for(v.set(e,n),v.set(n,e);++J<L;){var $t=e[J],Bt=n[J];if(i)var St=A?i(Bt,$t,J,n,e,v):i($t,Bt,J,e,n,v);if(St!==p){if(St)continue;st=!1;break}if(vt){if(!Fr(n,function(Mt,Ut){if(!fi(vt,Ut)&&($t===Mt||f($t,Mt,o,i,v)))return vt.push(Ut)})){st=!1;break}}else if(!($t===Bt||f($t,Bt,o,i,v))){st=!1;break}}return v.delete(e),v.delete(n),st}function Mc(e,n,o,i,f,v,A){switch(o){case Zt:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case xn:return!(e.byteLength!=n.byteLength||!v(new Dn(e),new Dn(n)));case At:case Yt:case fn:return yn(+e,+n);case Qt:return e.name==n.name&&e.message==n.message;case Hn:case Q:return e==n+"";case F:var L=no;case Le:var M=i&l;if(L||(L=ea),e.size!=n.size&&!M)return!1;var G=A.get(e);if(G)return G==n;i|=d,A.set(e,n);var q=mu(L(e),L(n),i,f,v,A);return A.delete(e),q;case Wn:if(_i)return _i.call(e)==_i.call(n)}return!1}function Fc(e,n,o,i,f,v){var A=o&l,L=Ta(e),M=L.length,G=Ta(n),q=G.length;if(M!=q&&!A)return!1;for(var J=M;J--;){var st=L[J];if(!(A?st in n:Kt.call(n,st)))return!1}var vt=v.get(e),$t=v.get(n);if(vt&&$t)return vt==n&&$t==e;var Bt=!0;v.set(e,n),v.set(n,e);for(var St=A;++J<M;){st=L[J];var Mt=e[st],Ut=n[st];if(i)var qe=A?i(Ut,Mt,st,n,e,v):i(Mt,Ut,st,e,n,v);if(!(qe===p?Mt===Ut||f(Mt,Ut,o,i,v):qe)){Bt=!1;break}St||(St=st=="constructor")}if(Bt&&!St){var Be=e.constructor,Ze=n.constructor;Be!=Ze&&"constructor"in e&&"constructor"in n&&!(typeof Be=="function"&&Be instanceof Be&&typeof Ze=="function"&&Ze instanceof Ze)&&(Bt=!1)}return v.delete(e),v.delete(n),Bt}function Fn(e){return xa(wu(e,p,Cu),e+"")}function Ta(e){return Rs(e,$e,yu)}function Bo(e){return Rs(e,We,$r)}var No=lo?function(e){return lo.get(e)}:jo;function Ci(e){for(var n=e.name+"",o=br[n],i=Kt.call(br,n)?o.length:0;i--;){var f=o[i],v=f.func;if(v==null||v==e)return f.name}return n}function Jr(e){var n=Kt.call(g,"placeholder")?g:e;return n.placeholder}function Et(){var e=g.iteratee||Jo;return e=e===Jo?va:e,arguments.length?e(arguments[0],arguments[1]):e}function zn(e,n){var o=e.__data__;return Vc(n)?o[typeof n=="string"?"string":"hash"]:o.map}function ki(e){for(var n=$e(e),o=n.length;o--;){var i=n[o],f=e[i];n[o]=[i,f,vu(f)]}return n}function Ar(e,n){var o=Cl(e,n);return Us(o)?o:p}function zc(e){var n=Kt.call(e,Rn),o=e[Rn];try{e[Rn]=p;var i=!0}catch(v){}var f=ia.call(e);return i&&(n?e[Rn]=o:delete e[Rn]),f}var yu=oo?function(e){return e==null?[]:(e=ee(e),Kn(oo(e),function(n){return Yl.call(e,n)}))}:ts,$r=oo?function(e){for(var n=[];e;)Ln(n,yu(e)),e=ao(e);return n}:ts,ze=De;(mi&&ze(new mi(new ArrayBuffer(1)))!=Zt||yi&&ze(new yi)!=F||uo&&ze(uo.resolve())!=wn||Vr&&ze(new Vr)!=Le||fa&&ze(new fa)!=ur)&&(ze=function(e){var n=De(e),o=n==ce?e.constructor:p,i=o?$n(o):"";if(i)switch(i){case Is:return Zt;case Zl:return F;case Yr:return wn;case vi:return Le;case pa:return ur}return n});function m0(e,n,o){for(var i=-1,f=o.length;++i<f;){var v=o[i],A=v.size;switch(v.type){case"drop":e+=A;break;case"dropRight":n-=A;break;case"take":n=Pe(n,e+A);break;case"takeRight":e=Te(e,n-A);break}}return{start:e,end:n}}function y0(e){var n=e.match(Dr);return n?n[1].split(Yi):[]}function Mo(e,n,o){n=er(n,e);for(var i=-1,f=n.length,v=!1;++i<f;){var A=An(n[i]);if(!(v=e!=null&&o(e,A)))break;e=e[A]}return v||++i!=f?v:(f=e==null?0:e.length,!!f&&Ra(f)&&Un(A,f)&&(Ot(e)||xr(e)))}function v0(e){var n=e.length,o=new e.constructor(n);return n&&typeof e[0]=="string"&&Kt.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function Uc(e){return typeof e.constructor=="function"&&!Oi(e)?Xr(ao(e)):{}}function _0(e,n,o){var i=e.constructor;switch(n){case xn:return Lo(e);case At:case Yt:return new i(+e);case Zt:return xc(e,o);case lr:case ie:case cr:case dn:case Gn:case qn:case fr:case Cr:case be:return iu(e,o);case F:return new i;case fn:case Q:return new i(e);case Hn:return Cc(e);case Le:return new i;case Wn:return kc(e)}}function w0(e,n){var o=n.length;if(!o)return e;var i=o-1;return n[i]=(o>1?"& ":"")+n[i],n=n.join(o>2?", ":" "),e.replace(Vi,`{
/* [wrapped with `+n+`] */
`)}function b0(e){return Ot(e)||xr(e)||!!(Xl&&e&&e[Xl])}function Un(e,n){var o=typeof e;return n=n==null?ve:n,!!n&&(o=="number"||o!="symbol"&&pr.test(e))&&e>-1&&e%1==0&&e<n}function Ue(e,n,o){if(!pe(o))return!1;var i=typeof n;return(i=="number"?He(o)&&Un(n,o.length):i=="string"&&n in o)?yn(o[n],e):!1}function Aa(e,n){if(Ot(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||je(e)?!0:ii.test(e)||!ri.test(e)||n!=null&&e in ee(n)}function Vc(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function Fo(e){var n=Ci(e),o=g[n];if(typeof o!="function"||!(n in zt.prototype))return!1;if(e===o)return!0;var i=No(o);return!!i&&e===i[0]}function Yc(e){return!!ys&&ys in e}var Xc=ra?Vn:es;function Oi(e){var n=e&&e.constructor,o=typeof n=="function"&&n.prototype||wr;return e===o}function vu(e){return e===e&&!pe(e)}function _u(e,n){return function(o){return o==null?!1:o[e]===n&&(n!==p||e in ee(o))}}function Hc(e){var n=Pa(e,function(i){return o.size===H&&o.clear(),i}),o=n.cache;return n}function Wc(e,n){var o=e[1],i=n[1],f=o|i,v=f<(I|R|pt),A=i==pt&&o==C||i==pt&&o==U&&e[7].length<=n[8]||i==(pt|U)&&n[7].length<=n[8]&&o==C;if(!(v||A))return e;i&I&&(e[2]=n[2],f|=o&I?0:P);var L=n[3];if(L){var M=e[3];e[3]=M?au(M,L,n[4]):L,e[4]=M?Jn(e[3],X):n[4]}return L=n[5],L&&(M=e[5],e[5]=M?ou(M,L,n[6]):L,e[6]=M?Jn(e[5],X):n[6]),L=n[7],L&&(e[7]=L),i&pt&&(e[8]=e[8]==null?n[8]:Pe(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=f,e}function Gc(e){var n=[];if(e!=null)for(var o in ee(e))n.push(o);return n}function qc(e){return ia.call(e)}function wu(e,n,o){return n=Te(n===p?e.length-1:n,0),function(){for(var i=arguments,f=-1,v=Te(i.length-n,0),A=V(v);++f<v;)A[f]=i[n+f];f=-1;for(var L=V(n+1);++f<n;)L[f]=i[f];return L[n]=o(A),rn(e,this,L)}}function bu(e,n){return n.length<2?e:Tr(e,Je(n,0,-1))}function Zc(e,n){for(var o=e.length,i=Pe(n.length,o),f=Re(e);i--;){var v=n[i];e[i]=Un(v,o)?f[v]:p}return e}function $a(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Su=Iu(Ks),Li=Ur||function(e,n){return Ie.setTimeout(e,n)},xa=Iu(Tc);function Qr(e,n,o){var i=n+"";return xa(e,w0(i,Kc(y0(i),o)))}function Iu(e){var n=0,o=0;return function(){var i=Gl(),f=Xt-(i-o);if(o=i,f>0){if(++n>=re)return arguments[0]}else n=0;return e.apply(p,arguments)}}function Ca(e,n){var o=-1,i=e.length,f=i-1;for(n=n===p?i:n;++o<n;){var v=Eo(o,f),A=e[v];e[v]=e[o],e[o]=A}return e.length=n,e}var Eu=Hc(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(za,function(o,i,f,v){n.push(f?v.replace(Wi,"$1"):i||o)}),n});function An(e){if(typeof e=="string"||je(e))return e;var n=e+"";return n=="0"&&1/e==-qt?"-0":n}function $n(e){if(e!=null){try{return hi.call(e)}catch(n){}try{return e+""}catch(n){}}return""}function Kc(e,n){return Fe(mt,function(o){var i="_."+o[0];n&o[1]&&!_r(e,i)&&e.push(i)}),e.sort()}function Tu(e){if(e instanceof zt)return e.clone();var n=new on(e.__wrapped__,e.__chain__);return n.__actions__=Re(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Jc(e,n,o){(o?Ue(e,n,o):n===p)?n=1:n=Te(Pt(n),0);var i=e==null?0:e.length;if(!i||n<1)return[];for(var f=0,v=0,A=V(ua(i/n));f<i;)A[v++]=Je(e,f,f+=n);return A}function Qc(e){for(var n=-1,o=e==null?0:e.length,i=0,f=[];++n<o;){var v=e[n];v&&(f[i++]=v)}return f}function jc(){var e=arguments.length;if(!e)return[];for(var n=V(e-1),o=arguments[0],i=e;i--;)n[i-1]=arguments[i];return Ln(Ot(o)?Re(o):[o],ke(n,1))}var Au=Rt(function(e,n){return ye(e)?bi(e,ke(n,1,ye,!0)):[]}),tf=Rt(function(e,n){var o=ln(n);return ye(o)&&(o=p),ye(e)?bi(e,ke(n,1,ye,!0),Et(o,2)):[]}),zo=Rt(function(e,n){var o=ln(n);return ye(o)&&(o=p),ye(e)?bi(e,ke(n,1,ye,!0),p,o):[]});function ef(e,n,o){var i=e==null?0:e.length;return i?(n=o||n===p?1:Pt(n),Je(e,n<0?0:n,i)):[]}function nf(e,n,o){var i=e==null?0:e.length;return i?(n=o||n===p?1:Pt(n),n=i-n,Je(e,0,n<0?0:n)):[]}function S0(e,n){return e&&e.length?ba(e,Et(n,3),!0,!0):[]}function rf(e,n){return e&&e.length?ba(e,Et(n,3),!0):[]}function af(e,n,o,i){var f=e==null?0:e.length;return f?(o&&typeof o!="number"&&Ue(e,n,o)&&(o=0,i=f),fc(e,n,o,i)):[]}function $u(e,n,o){var i=e==null?0:e.length;if(!i)return-1;var f=o==null?0:Pt(o);return f<0&&(f=Te(i+f,0)),ji(e,Et(n,3),f)}function xu(e,n,o){var i=e==null?0:e.length;if(!i)return-1;var f=i-1;return o!==p&&(f=Pt(o),f=o<0?Te(i+f,0):Pe(f,i-1)),ji(e,Et(n,3),f,!0)}function Cu(e){var n=e==null?0:e.length;return n?ke(e,1):[]}function of(e){var n=e==null?0:e.length;return n?ke(e,qt):[]}function sf(e,n){var o=e==null?0:e.length;return o?(n=n===p?1:Pt(n),ke(e,n)):[]}function uf(e){for(var n=-1,o=e==null?0:e.length,i={};++n<o;){var f=e[n];i[f[0]]=f[1]}return i}function ku(e){return e&&e.length?e[0]:p}function lf(e,n,o){var i=e==null?0:e.length;if(!i)return-1;var f=o==null?0:Pt(o);return f<0&&(f=Te(i+f,0)),ci(e,n,f)}function cf(e){var n=e==null?0:e.length;return n?Je(e,0,-1):[]}var ff=Rt(function(e){var n=de(e,Co);return n.length&&n[0]===e[0]?Fs(n):[]}),df=Rt(function(e){var n=ln(e),o=de(e,Co);return n===ln(o)?n=p:o.pop(),o.length&&o[0]===e[0]?Fs(o,Et(n,2)):[]}),pf=Rt(function(e){var n=ln(e),o=de(e,Co);return n=typeof n=="function"?n:p,n&&o.pop(),o.length&&o[0]===e[0]?Fs(o,p,n):[]});function hf(e,n){return e==null?"":Wl.call(e,n)}function ln(e){var n=e==null?0:e.length;return n?e[n-1]:p}function gf(e,n,o){var i=e==null?0:e.length;if(!i)return-1;var f=i;return o!==p&&(f=Pt(o),f=f<0?Te(i+f,0):Pe(f,i-1)),n===n?f0(e,n,f):ji(e,ss,f,!0)}function mf(e,n){return e&&e.length?Ws(e,Pt(n)):p}var yf=Rt(Ou);function Ou(e,n){return e&&e.length&&n&&n.length?Io(e,n):e}function vf(e,n,o){return e&&e.length&&n&&n.length?Io(e,n,Et(o,2)):e}function _f(e,n,o){return e&&e.length&&n&&n.length?Io(e,n,p,o):e}var wf=Fn(function(e,n){var o=e==null?0:e.length,i=mo(e,n);return Zs(e,de(n,function(f){return Un(f,o)?+f:f}).sort(mn)),i});function bf(e,n){var o=[];if(!(e&&e.length))return o;var i=-1,f=[],v=e.length;for(n=Et(n,3);++i<v;){var A=e[i];n(A,i,e)&&(o.push(A),f.push(i))}return Zs(e,f),o}function Uo(e){return e==null?e:so.call(e)}function Sf(e,n,o){var i=e==null?0:e.length;return i?(o&&typeof o!="number"&&Ue(e,n,o)?(n=0,o=i):(n=n==null?0:Pt(n),o=o===p?i:Pt(o)),Je(e,n,o)):[]}function If(e,n){return wa(e,n)}function Ef(e,n,o){return Ao(e,n,Et(o,2))}function Tf(e,n){var o=e==null?0:e.length;if(o){var i=wa(e,n);if(i<o&&yn(e[i],n))return i}return-1}function Af(e,n){return wa(e,n,!0)}function $f(e,n,o){return Ao(e,n,Et(o,2),!0)}function xf(e,n){var o=e==null?0:e.length;if(o){var i=wa(e,n,!0)-1;if(yn(e[i],n))return i}return-1}function Cf(e){return e&&e.length?Qs(e):[]}function kf(e,n){return e&&e.length?Qs(e,Et(n,2)):[]}function Of(e){var n=e==null?0:e.length;return n?Je(e,1,n):[]}function Lf(e,n,o){return e&&e.length?(n=o||n===p?1:Pt(n),Je(e,0,n<0?0:n)):[]}function Pf(e,n,o){var i=e==null?0:e.length;return i?(n=o||n===p?1:Pt(n),n=i-n,Je(e,n<0?0:n,i)):[]}function Df(e,n){return e&&e.length?ba(e,Et(n,3),!1,!0):[]}function Rf(e,n){return e&&e.length?ba(e,Et(n,3)):[]}var Bf=Rt(function(e){return tr(ke(e,1,ye,!0))}),Nf=Rt(function(e){var n=ln(e);return ye(n)&&(n=p),tr(ke(e,1,ye,!0),Et(n,2))}),Mf=Rt(function(e){var n=ln(e);return n=typeof n=="function"?n:p,tr(ke(e,1,ye,!0),p,n)});function Ff(e){return e&&e.length?tr(e):[]}function zf(e,n){return e&&e.length?tr(e,Et(n,2)):[]}function Uf(e,n){return n=typeof n=="function"?n:p,e&&e.length?tr(e,p,n):[]}function Vo(e){if(!(e&&e.length))return[];var n=0;return e=Kn(e,function(o){if(ye(o))return n=Te(o.length,n),!0}),to(n,function(o){return de(e,Qa(o))})}function Lu(e,n){if(!(e&&e.length))return[];var o=Vo(e);return n==null?o:de(o,function(i){return rn(n,p,i)})}var Vf=Rt(function(e,n){return ye(e)?bi(e,n):[]}),Yf=Rt(function(e){return xo(Kn(e,ye))}),Xf=Rt(function(e){var n=ln(e);return ye(n)&&(n=p),xo(Kn(e,ye),Et(n,2))}),Hf=Rt(function(e){var n=ln(e);return n=typeof n=="function"?n:p,xo(Kn(e,ye),p,n)}),Wf=Rt(Vo);function Gf(e,n){return nu(e||[],n||[],Gr)}function qf(e,n){return nu(e||[],n||[],Ai)}var Zf=Rt(function(e){var n=e.length,o=n>1?e[n-1]:p;return o=typeof o=="function"?(e.pop(),o):p,Lu(e,o)});function Pu(e){var n=g(e);return n.__chain__=!0,n}function Kf(e,n){return n(e),e}function ka(e,n){return n(e)}var Jf=Fn(function(e){var n=e.length,o=n?e[0]:0,i=this.__wrapped__,f=function(v){return mo(v,e)};return n>1||this.__actions__.length||!(i instanceof zt)||!Un(o)?this.thru(f):(i=i.slice(o,+o+(n?1:0)),i.__actions__.push({func:ka,args:[f],thisArg:p}),new on(i,this.__chain__).thru(function(v){return n&&!v.length&&v.push(p),v}))});function Qf(){return Pu(this)}function jf(){return new on(this.value(),this.__chain__)}function td(){this.__values__===p&&(this.__values__=Gu(this.value()));var e=this.__index__>=this.__values__.length,n=e?p:this.__values__[this.__index__++];return{done:e,value:n}}function ed(){return this}function nd(e){for(var n,o=this;o instanceof ha;){var i=Tu(o);i.__index__=0,i.__values__=p,n?f.__wrapped__=i:n=i;var f=i;o=o.__wrapped__}return f.__wrapped__=e,n}function rd(){var e=this.__wrapped__;if(e instanceof zt){var n=e;return this.__actions__.length&&(n=new zt(this)),n=n.reverse(),n.__actions__.push({func:ka,args:[Uo],thisArg:p}),new on(n,this.__chain__)}return this.thru(Uo)}function id(){return eu(this.__wrapped__,this.__actions__)}var ad=Sa(function(e,n,o){Kt.call(e,o)?++e[o]:Bn(e,o,1)});function od(e,n,o){var i=Ot(e)?Ka:cc;return o&&Ue(e,n,o)&&(n=p),i(e,Et(n,3))}function sd(e,n){var o=Ot(e)?Kn:Ds;return o(e,Et(n,3))}var ud=cu($u),ld=cu(xu);function cd(e,n){return ke(Oa(e,n),1)}function fd(e,n){return ke(Oa(e,n),qt)}function dd(e,n,o){return o=o===p?1:Pt(o),ke(Oa(e,n),o)}function Du(e,n){var o=Ot(e)?Fe:Nn;return o(e,Et(n,3))}function Ru(e,n){var o=Ot(e)?l0:yo;return o(e,Et(n,3))}var pd=Sa(function(e,n,o){Kt.call(e,o)?e[o].push(n):Bn(e,o,[n])});function hd(e,n,o,i){e=He(e)?e:ti(e),o=o&&!i?Pt(o):0;var f=e.length;return o<0&&(o=Te(f+o,0)),Ba(e)?o<=f&&e.indexOf(n,o)>-1:!!f&&ci(e,n,o)>-1}var gd=Rt(function(e,n,o){var i=-1,f=typeof n=="function",v=He(e)?V(e.length):[];return Nn(e,function(A){v[++i]=f?rn(n,A,o):qr(A,n,o)}),v}),md=Sa(function(e,n,o){Bn(e,o,n)});function Oa(e,n){var o=Ot(e)?de:Ys;return o(e,Et(n,3))}function yd(e,n,o,i){return e==null?[]:(Ot(n)||(n=n==null?[]:[n]),o=i?p:o,Ot(o)||(o=o==null?[]:[o]),Gs(e,n,o))}var vd=Sa(function(e,n,o){e[o?0:1].push(n)},function(){return[[],[]]});function _d(e,n,o){var i=Ot(e)?Ja:ja,f=arguments.length<3;return i(e,Et(n,4),o,f,Nn)}function wd(e,n,o){var i=Ot(e)?bl:ja,f=arguments.length<3;return i(e,Et(n,4),o,f,yo)}function bd(e,n){var o=Ot(e)?Kn:Ds;return o(e,Da(Et(n,3)))}function Sd(e){var n=Ot(e)?ho:Ic;return n(e)}function Id(e,n,o){(o?Ue(e,n,o):n===p)?n=1:n=Pt(n);var i=Ot(e)?Sr:Ec;return i(e,n)}function Ed(e){var n=Ot(e)?Os:Js;return n(e)}function Td(e){if(e==null)return 0;if(He(e))return Ba(e)?di(e):e.length;var n=ze(e);return n==F||n==Le?e.size:Ti(e).length}function Ad(e,n,o){var i=Ot(e)?Fr:Ac;return o&&Ue(e,n,o)&&(n=p),i(e,Et(n,3))}var $d=Rt(function(e,n){if(e==null)return[];var o=n.length;return o>1&&Ue(e,n[0],n[1])?n=[]:o>2&&Ue(n[0],n[1],n[2])&&(n=[n[0]]),Gs(e,ke(n,1),[])}),La=ws||function(){return Ie.Date.now()};function xd(e,n){if(typeof n!="function")throw new an(E);return e=Pt(e),function(){if(--e<1)return n.apply(this,arguments)}}function Bu(e,n,o){return n=o?p:n,n=e&&n==null?e.length:n,ar(e,pt,p,p,p,p,n)}function Nu(e,n){var o;if(typeof n!="function")throw new an(E);return e=Pt(e),function(){return--e>0&&(o=n.apply(this,arguments)),e<=1&&(n=p),o}}var Yo=Rt(function(e,n,o){var i=I;if(o.length){var f=Jn(o,Jr(Yo));i|=tt}return ar(e,i,n,o,f)}),Mu=Rt(function(e,n,o){var i=I|R;if(o.length){var f=Jn(o,Jr(Mu));i|=tt}return ar(n,i,e,o,f)});function Fu(e,n,o){n=o?p:n;var i=ar(e,C,p,p,p,p,p,n);return i.placeholder=Fu.placeholder,i}function zu(e,n,o){n=o?p:n;var i=ar(e,Z,p,p,p,p,p,n);return i.placeholder=zu.placeholder,i}function Uu(e,n,o){var i,f,v,A,L,M,G=0,q=!1,J=!1,st=!0;if(typeof e!="function")throw new an(E);n=cn(n)||0,pe(o)&&(q=!!o.leading,J="maxWait"in o,v=J?Te(cn(o.maxWait)||0,n):v,st="trailing"in o?!!o.trailing:st);function vt(me){var vn=i,Xn=f;return i=f=p,G=me,A=e.apply(Xn,vn),A}function $t(me){return G=me,L=Li(Mt,n),q?vt(me):A}function Bt(me){var vn=me-M,Xn=me-G,sl=n-vn;return J?Pe(sl,v-Xn):sl}function St(me){var vn=me-M,Xn=me-G;return M===p||vn>=n||vn<0||J&&Xn>=v}function Mt(){var me=La();if(St(me))return Ut(me);L=Li(Mt,Bt(me))}function Ut(me){return L=p,st&&i?vt(me):(i=f=p,A)}function qe(){L!==p&&ru(L),G=0,i=M=f=L=p}function Be(){return L===p?A:Ut(La())}function Ze(){var me=La(),vn=St(me);if(i=arguments,f=this,M=me,vn){if(L===p)return $t(M);if(J)return ru(L),L=Li(Mt,n),vt(M)}return L===p&&(L=Li(Mt,n)),A}return Ze.cancel=qe,Ze.flush=Be,Ze}var Cd=Rt(function(e,n){return lc(e,1,n)}),kd=Rt(function(e,n,o){return lc(e,cn(n)||0,o)});function Od(e){return ar(e,rt)}function Pa(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new an(E);var o=function(){var i=arguments,f=n?n.apply(this,i):i[0],v=o.cache;if(v.has(f))return v.get(f);var A=e.apply(this,i);return o.cache=v.set(f,A)||v,A};return o.cache=new(Pa.Cache||In),o}Pa.Cache=In;function Da(e){if(typeof e!="function")throw new an(E);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function Ld(e){return Nu(2,e)}var Pd=$c(function(e,n){n=n.length==1&&Ot(n[0])?de(n[0],Xe(Et())):de(ke(n,1),Xe(Et()));var o=n.length;return Rt(function(i){for(var f=-1,v=Pe(i.length,o);++f<v;)i[f]=n[f].call(this,i[f]);return rn(e,this,i)})}),Xo=Rt(function(e,n){var o=Jn(n,Jr(Xo));return ar(e,tt,p,n,o)}),Vu=Rt(function(e,n){var o=Jn(n,Jr(Vu));return ar(e,dt,p,n,o)}),Dd=Fn(function(e,n){return ar(e,U,p,p,p,n)});function Rd(e,n){if(typeof e!="function")throw new an(E);return n=n===p?n:Pt(n),Rt(e,n)}function Bd(e,n){if(typeof e!="function")throw new an(E);return n=n==null?0:Te(Pt(n),0),Rt(function(o){var i=o[n],f=nr(o,0,n);return i&&Ln(f,i),rn(e,this,f)})}function Nd(e,n,o){var i=!0,f=!0;if(typeof e!="function")throw new an(E);return pe(o)&&(i="leading"in o?!!o.leading:i,f="trailing"in o?!!o.trailing:f),Uu(e,n,{leading:i,maxWait:n,trailing:f})}function Md(e){return Bu(e,1)}function Fd(e,n){return Xo(ko(n),e)}function zd(){if(!arguments.length)return[];var e=arguments[0];return Ot(e)?e:[e]}function Ud(e){return sn(e,s)}function Vd(e,n){return n=typeof n=="function"?n:p,sn(e,s,n)}function Yd(e){return sn(e,D|s)}function Xd(e,n){return n=typeof n=="function"?n:p,sn(e,D|s,n)}function Hd(e,n){return n==null||Er(e,n,$e(n))}function yn(e,n){return e===n||e!==e&&n!==n}var Wd=Ea(Bs),Gd=Ea(function(e,n){return e>=n}),xr=zs(function(){return arguments}())?zs:function(e){return ge(e)&&Kt.call(e,"callee")&&!Yl.call(e,"callee")},Ot=V.isArray,qd=Ji?Xe(Ji):pc;function He(e){return e!=null&&Ra(e.length)&&!Vn(e)}function ye(e){return ge(e)&&He(e)}function Zd(e){return e===!0||e===!1||ge(e)&&De(e)==At}var or=Hl||es,Kd=vl?Xe(vl):hc;function Jd(e){return ge(e)&&e.nodeType===1&&!Pi(e)}function Qd(e){if(e==null)return!0;if(He(e)&&(Ot(e)||typeof e=="string"||typeof e.splice=="function"||or(e)||jr(e)||xr(e)))return!e.length;var n=ze(e);if(n==F||n==Le)return!e.size;if(Oi(e))return!Ti(e).length;for(var o in e)if(Kt.call(e,o))return!1;return!0}function jd(e,n){return Ei(e,n)}function tp(e,n,o){o=typeof o=="function"?o:p;var i=o?o(e,n):p;return i===p?Ei(e,n,p,o):!!i}function Ho(e){if(!ge(e))return!1;var n=De(e);return n==Qt||n==Jt||typeof e.message=="string"&&typeof e.name=="string"&&!Pi(e)}function ep(e){return typeof e=="number"&&ca(e)}function Vn(e){if(!pe(e))return!1;var n=De(e);return n==Oe||n==Ae||n==oe||n==Di}function Yu(e){return typeof e=="number"&&e==Pt(e)}function Ra(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ve}function pe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ge(e){return e!=null&&typeof e=="object"}var Xu=Qi?Xe(Qi):mc;function np(e,n){return e===n||bo(e,n,ki(n))}function rp(e,n,o){return o=typeof o=="function"?o:p,bo(e,n,ki(n),o)}function ip(e){return Hu(e)&&e!=+e}function ap(e){if(Xc(e))throw new kt(O);return Us(e)}function op(e){return e===null}function sp(e){return e==null}function Hu(e){return typeof e=="number"||ge(e)&&De(e)==fn}function Pi(e){if(!ge(e)||De(e)!=ce)return!1;var n=ao(e);if(n===null)return!0;var o=Kt.call(n,"constructor")&&n.constructor;return typeof o=="function"&&o instanceof o&&hi.call(o)==Fl}var Wo=_l?Xe(_l):yc;function up(e){return Yu(e)&&e>=-ve&&e<=ve}var Wu=qa?Xe(qa):Vs;function Ba(e){return typeof e=="string"||!Ot(e)&&ge(e)&&De(e)==Q}function je(e){return typeof e=="symbol"||ge(e)&&De(e)==Wn}var jr=Za?Xe(Za):un;function lp(e){return e===p}function cp(e){return ge(e)&&ze(e)==ur}function fp(e){return ge(e)&&De(e)==Ri}var dp=Ea(So),pp=Ea(function(e,n){return e<=n});function Gu(e){if(!e)return[];if(He(e))return Ba(e)?Sn(e):Re(e);if(oa&&e[oa])return Ol(e[oa]());var n=ze(e),o=n==F?no:n==Le?ea:ti;return o(e)}function Yn(e){if(!e)return e===0?e:0;if(e=cn(e),e===qt||e===-qt){var n=e<0?-1:1;return n*Tt}return e===e?e:0}function Pt(e){var n=Yn(e),o=n%1;return n===n?o?n-o:n:0}function qu(e){return e?Ir(Pt(e),0,ct):0}function cn(e){if(typeof e=="number")return e;if(je(e))return gt;if(pe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=pe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=se(e);var o=oi.test(e);return o||dr.test(e)?ml(e.slice(2),o?2:8):qi.test(e)?gt:+e}function Zu(e){return Tn(e,We(e))}function hp(e){return e?Ir(Pt(e),-ve,ve):e===0?e:0}function Wt(e){return e==null?"":Qe(e)}var gp=Zr(function(e,n){if(Oi(n)||He(n)){Tn(n,$e(n),e);return}for(var o in n)Kt.call(n,o)&&Gr(e,o,n[o])}),Ku=Zr(function(e,n){Tn(n,We(n),e)}),Na=Zr(function(e,n,o,i){Tn(n,We(n),e,i)}),mp=Zr(function(e,n,o,i){Tn(n,$e(n),e,i)}),yp=Fn(mo);function vp(e,n){var o=Xr(e);return n==null?o:go(o,n)}var _p=Rt(function(e,n){e=ee(e);var o=-1,i=n.length,f=i>2?n[2]:p;for(f&&Ue(n[0],n[1],f)&&(i=1);++o<i;)for(var v=n[o],A=We(v),L=-1,M=A.length;++L<M;){var G=A[L],q=e[G];(q===p||yn(q,wr[G])&&!Kt.call(e,G))&&(e[G]=v[G])}return e}),wp=Rt(function(e){return e.push(p,Nc),rn(Ju,p,e)});function bp(e,n){return os(e,Et(n,3),En)}function Sp(e,n){return os(e,Et(n,3),wo)}function Ip(e,n){return e==null?e:vo(e,Et(n,3),We)}function Ep(e,n){return e==null?e:_o(e,Et(n,3),We)}function Tp(e,n){return e&&En(e,Et(n,3))}function Ap(e,n){return e&&wo(e,Et(n,3))}function $p(e){return e==null?[]:Ii(e,$e(e))}function xp(e){return e==null?[]:Ii(e,We(e))}function Go(e,n,o){var i=e==null?p:Tr(e,n);return i===p?o:i}function Cp(e,n){return e!=null&&Mo(e,n,Mn)}function qo(e,n){return e!=null&&Mo(e,n,Ns)}var kp=du(function(e,n,o){n!=null&&typeof n.toString!="function"&&(n=ia.call(n)),e[n]=o},Ko(Ge)),Op=du(function(e,n,o){n!=null&&typeof n.toString!="function"&&(n=ia.call(n)),Kt.call(e,n)?e[n].push(o):e[n]=[o]},Et),Lp=Rt(qr);function $e(e){return He(e)?sc(e):Ti(e)}function We(e){return He(e)?sc(e,!0):vc(e)}function Pp(e,n){var o={};return n=Et(n,3),En(e,function(i,f,v){Bn(o,n(i,f,v),i)}),o}function Dp(e,n){var o={};return n=Et(n,3),En(e,function(i,f,v){Bn(o,f,n(i,f,v))}),o}var Rp=Zr(function(e,n,o){_a(e,n,o)}),Ju=Zr(function(e,n,o,i){_a(e,n,o,i)}),Bp=Fn(function(e,n){var o={};if(e==null)return o;var i=!1;n=de(n,function(v){return v=er(v,e),i||(i=v.length>1),v}),Tn(e,Bo(e),o),i&&(o=sn(o,D|it|s,g0));for(var f=n.length;f--;)$o(o,n[f]);return o});function Np(e,n){return Qu(e,Da(Et(n)))}var Mp=Fn(function(e,n){return e==null?{}:wc(e,n)});function Qu(e,n){if(e==null)return{};var o=de(Bo(e),function(i){return[i]});return n=Et(n),qs(e,o,function(i,f){return n(i,f[0])})}function Fp(e,n,o){n=er(n,e);var i=-1,f=n.length;for(f||(f=1,e=p);++i<f;){var v=e==null?p:e[An(n[i])];v===p&&(i=f,v=o),e=Vn(v)?v.call(e):v}return e}function zp(e,n,o){return e==null?e:Ai(e,n,o)}function Up(e,n,o,i){return i=typeof i=="function"?i:p,e==null?e:Ai(e,n,o,i)}var ju=gu($e),tl=gu(We);function Vp(e,n,o){var i=Ot(e),f=i||or(e)||jr(e);if(n=Et(n,4),o==null){var v=e&&e.constructor;f?o=i?new v:[]:pe(e)?o=Vn(v)?Xr(ao(e)):{}:o={}}return(f?Fe:En)(e,function(A,L,M){return n(o,A,L,M)}),o}function Yp(e,n){return e==null?!0:$o(e,n)}function Xp(e,n,o){return e==null?e:tu(e,n,ko(o))}function Hp(e,n,o,i){return i=typeof i=="function"?i:p,e==null?e:tu(e,n,ko(o),i)}function ti(e){return e==null?[]:eo(e,$e(e))}function Wp(e){return e==null?[]:eo(e,We(e))}function Gp(e,n,o){return o===p&&(o=n,n=p),o!==p&&(o=cn(o),o=o===o?o:0),n!==p&&(n=cn(n),n=n===n?n:0),Ir(cn(e),n,o)}function qp(e,n,o){return n=Yn(n),o===p?(o=n,n=0):o=Yn(o),e=cn(e),Ms(e,n,o)}function Zp(e,n,o){if(o&&typeof o!="boolean"&&Ue(e,n,o)&&(n=o=p),o===p&&(typeof n=="boolean"?(o=n,n=p):typeof e=="boolean"&&(o=e,e=p)),e===p&&n===p?(e=0,n=1):(e=Yn(e),n===p?(n=e,e=0):n=Yn(n)),e>n){var i=e;e=n,n=i}if(o||e%1||n%1){var f=Ss();return Pe(e+f*(n-e+gl("1e-"+((f+"").length-1))),n)}return Eo(e,n)}var Kp=Kr(function(e,n,o){return n=n.toLowerCase(),e+(o?el(n):n)});function el(e){return Zo(Wt(e).toLowerCase())}function nl(e){return e=Wt(e),e&&e.replace(hr,Al).replace(cl,"")}function Jp(e,n,o){e=Wt(e),n=Qe(n);var i=e.length;o=o===p?i:Ir(Pt(o),0,i);var f=o;return o-=n.length,o>=0&&e.slice(o,f)==n}function Qp(e){return e=Wt(e),e&&ni.test(e)?e.replace(Or,$l):e}function jp(e){return e=Wt(e),e&&Pr.test(e)?e.replace(Lr,"\\$&"):e}var th=Kr(function(e,n,o){return e+(o?"-":"")+n.toLowerCase()}),eh=Kr(function(e,n,o){return e+(o?" ":"")+n.toLowerCase()}),nh=uu("toLowerCase");function rh(e,n,o){e=Wt(e),n=Pt(n);var i=n?di(e):0;if(!n||i>=n)return e;var f=(n-i)/2;return xi(la(f),o)+e+xi(ua(f),o)}function ih(e,n,o){e=Wt(e),n=Pt(n);var i=n?di(e):0;return n&&i<n?e+xi(n-i,o):e}function ah(e,n,o){e=Wt(e),n=Pt(n);var i=n?di(e):0;return n&&i<n?xi(n-i,o)+e:e}function oh(e,n,o){return o||n==null?n=0:n&&(n=+n),ql(Wt(e).replace(ai,""),n||0)}function sh(e,n,o){return(o?Ue(e,n,o):n===p)?n=1:n=Pt(n),To(Wt(e),n)}function uh(){var e=arguments,n=Wt(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var lh=Kr(function(e,n,o){return e+(o?"_":"")+n.toLowerCase()});function ch(e,n,o){return o&&typeof o!="number"&&Ue(e,n,o)&&(n=o=p),o=o===p?ct:o>>>0,o?(e=Wt(e),e&&(typeof n=="string"||n!=null&&!Wo(n))&&(n=Qe(n),!n&&zr(e))?nr(Sn(e),0,o):e.split(n,o)):[]}var fh=Kr(function(e,n,o){return e+(o?" ":"")+Zo(n)});function dh(e,n,o){return e=Wt(e),o=o==null?0:Ir(Pt(o),0,e.length),n=Qe(n),e.slice(o,o+n.length)==n}function ph(e,n,o){var i=g.templateSettings;o&&Ue(e,n,o)&&(n=p),e=Wt(e),n=Na({},n,i,Bc);var f=Na({},n.imports,i.imports,Bc),v=$e(f),A=eo(f,v),L,M,G=0,q=n.interpolate||Zn,J="__p += '",st=io((n.escape||Zn).source+"|"+q.source+"|"+(q===zi?Gi:Zn).source+"|"+(n.evaluate||Zn).source+"|$","g"),vt="//# sourceURL="+(Kt.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++dl+"]")+`
`;e.replace(st,function(St,Mt,Ut,qe,Be,Ze){return Ut||(Ut=qe),J+=e.slice(G,Ze).replace(Ua,xl),Mt&&(L=!0,J+=`' +
__e(`+Mt+`) +
'`),Be&&(M=!0,J+=`';
`+Be+`;
__p += '`),Ut&&(J+=`' +
((__t = (`+Ut+`)) == null ? '' : __t) +
'`),G=Ze+St.length,St}),J+=`';
`;var $t=Kt.call(n,"variable")&&n.variable;if(!$t)J=`with (obj) {
`+J+`
}
`;else if(Hi.test($t))throw new kt($);J=(M?J.replace(Bi,""):J).replace(kr,"$1").replace(Ma,"$1;"),J="function("+($t||"obj")+`) {
`+($t?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(L?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+J+`return __p
}`;var Bt=il(function(){return Ht(v,vt+"return "+J).apply(p,A)});if(Bt.source=J,Ho(Bt))throw Bt;return Bt}function hh(e){return Wt(e).toLowerCase()}function gh(e){return Wt(e).toUpperCase()}function mh(e,n,o){if(e=Wt(e),e&&(o||n===p))return se(e);if(!e||!(n=Qe(n)))return e;var i=Sn(e),f=Sn(n),v=fs(i,f),A=ds(i,f)+1;return nr(i,v,A).join("")}function yh(e,n,o){if(e=Wt(e),e&&(o||n===p))return e.slice(0,ro(e)+1);if(!e||!(n=Qe(n)))return e;var i=Sn(e),f=ds(i,Sn(n))+1;return nr(i,0,f).join("")}function vh(e,n,o){if(e=Wt(e),e&&(o||n===p))return e.replace(ai,"");if(!e||!(n=Qe(n)))return e;var i=Sn(e),f=fs(i,Sn(n));return nr(i,f).join("")}function _h(e,n){var o=ht,i=ot;if(pe(n)){var f="separator"in n?n.separator:f;o="length"in n?Pt(n.length):o,i="omission"in n?Qe(n.omission):i}e=Wt(e);var v=e.length;if(zr(e)){var A=Sn(e);v=A.length}if(o>=v)return e;var L=o-di(i);if(L<1)return i;var M=A?nr(A,0,L).join(""):e.slice(0,L);if(f===p)return M+i;if(A&&(L+=M.length-L),Wo(f)){if(e.slice(L).search(f)){var G,q=M;for(f.global||(f=io(f.source,Wt(Rr.exec(f))+"g")),f.lastIndex=0;G=f.exec(q);)var J=G.index;M=M.slice(0,J===p?L:J)}}else if(e.indexOf(Qe(f),L)!=L){var st=M.lastIndexOf(f);st>-1&&(M=M.slice(0,st))}return M+i}function wh(e){return e=Wt(e),e&&Mi.test(e)?e.replace(Ni,hs):e}var bh=Kr(function(e,n,o){return e+(o?" ":"")+n.toUpperCase()}),Zo=uu("toUpperCase");function rl(e,n,o){return e=Wt(e),n=o?p:n,n===p?kl(e)?gs(e):Il(e):e.match(n)||[]}var il=Rt(function(e,n){try{return rn(e,p,n)}catch(o){return Ho(o)?o:new kt(o)}}),Sh=Fn(function(e,n){return Fe(n,function(o){o=An(o),Bn(e,o,Yo(e[o],e))}),e});function Ih(e){var n=e==null?0:e.length,o=Et();return e=n?de(e,function(i){if(typeof i[1]!="function")throw new an(E);return[o(i[0]),i[1]]}):[],Rt(function(i){for(var f=-1;++f<n;){var v=e[f];if(rn(v[0],this,i))return rn(v[1],this,i)}})}function Eh(e){return Ps(sn(e,D))}function Ko(e){return function(){return e}}function Th(e,n){return e==null||e!==e?n:e}var Ah=fu(),$h=fu(!0);function Ge(e){return e}function Jo(e){return va(typeof e=="function"?e:sn(e,D))}function xh(e){return Xs(sn(e,D))}function Ch(e,n){return Hs(e,sn(n,D))}var kh=Rt(function(e,n){return function(o){return qr(o,e,n)}}),Oh=Rt(function(e,n){return function(o){return qr(e,o,n)}});function Qo(e,n,o){var i=$e(n),f=Ii(n,i);o==null&&!(pe(n)&&(f.length||!i.length))&&(o=n,n=e,e=this,f=Ii(n,$e(n)));var v=!(pe(o)&&"chain"in o)||!!o.chain,A=Vn(e);return Fe(f,function(L){var M=n[L];e[L]=M,A&&(e.prototype[L]=function(){var G=this.__chain__;if(v||G){var q=e(this.__wrapped__),J=q.__actions__=Re(this.__actions__);return J.push({func:M,args:arguments,thisArg:e}),q.__chain__=G,q}return M.apply(e,Ln([this.value()],arguments))})}),e}function Lh(){return Ie._===this&&(Ie._=zl),this}function jo(){}function Ph(e){return e=Pt(e),Rt(function(n){return Ws(n,e)})}var Dh=Do(de),Rh=Do(Ka),Bh=Do(Fr);function al(e){return Aa(e)?Qa(An(e)):bc(e)}function Nh(e){return function(n){return e==null?p:Tr(e,n)}}var Mh=pu(),Fh=pu(!0);function ts(){return[]}function es(){return!1}function zh(){return{}}function Uh(){return""}function Vh(){return!0}function Yh(e,n){if(e=Pt(e),e<1||e>ve)return[];var o=ct,i=Pe(e,ct);n=Et(n),e-=ct;for(var f=to(i,n);++o<e;)n(o);return f}function Xh(e){return Ot(e)?de(e,An):je(e)?[e]:Re(Eu(Wt(e)))}function Hh(e){var n=++Ml;return Wt(e)+n}var Wh=Ia(function(e,n){return e+n},0),Gh=Ro("ceil"),qh=Ia(function(e,n){return e/n},1),Zh=Ro("floor");function Kh(e){return e&&e.length?Si(e,Ge,Bs):p}function Jh(e,n){return e&&e.length?Si(e,Et(n,2),Bs):p}function Qh(e){return us(e,Ge)}function jh(e,n){return us(e,Et(n,2))}function t0(e){return e&&e.length?Si(e,Ge,So):p}function e0(e,n){return e&&e.length?Si(e,Et(n,2),So):p}var n0=Ia(function(e,n){return e*n},1),r0=Ro("round"),i0=Ia(function(e,n){return e-n},0);function ol(e){return e&&e.length?yt(e,Ge):0}function a0(e,n){return e&&e.length?yt(e,Et(n,2)):0}return g.after=xd,g.ary=Bu,g.assign=gp,g.assignIn=Ku,g.assignInWith=Na,g.assignWith=mp,g.at=yp,g.before=Nu,g.bind=Yo,g.bindAll=Sh,g.bindKey=Mu,g.castArray=zd,g.chain=Pu,g.chunk=Jc,g.compact=Qc,g.concat=jc,g.cond=Ih,g.conforms=Eh,g.constant=Ko,g.countBy=ad,g.create=vp,g.curry=Fu,g.curryRight=zu,g.debounce=Uu,g.defaults=_p,g.defaultsDeep=wp,g.defer=Cd,g.delay=kd,g.difference=Au,g.differenceBy=tf,g.differenceWith=zo,g.drop=ef,g.dropRight=nf,g.dropRightWhile=S0,g.dropWhile=rf,g.fill=af,g.filter=sd,g.flatMap=cd,g.flatMapDeep=fd,g.flatMapDepth=dd,g.flatten=Cu,g.flattenDeep=of,g.flattenDepth=sf,g.flip=Od,g.flow=Ah,g.flowRight=$h,g.fromPairs=uf,g.functions=$p,g.functionsIn=xp,g.groupBy=pd,g.initial=cf,g.intersection=ff,g.intersectionBy=df,g.intersectionWith=pf,g.invert=kp,g.invertBy=Op,g.invokeMap=gd,g.iteratee=Jo,g.keyBy=md,g.keys=$e,g.keysIn=We,g.map=Oa,g.mapKeys=Pp,g.mapValues=Dp,g.matches=xh,g.matchesProperty=Ch,g.memoize=Pa,g.merge=Rp,g.mergeWith=Ju,g.method=kh,g.methodOf=Oh,g.mixin=Qo,g.negate=Da,g.nthArg=Ph,g.omit=Bp,g.omitBy=Np,g.once=Ld,g.orderBy=yd,g.over=Dh,g.overArgs=Pd,g.overEvery=Rh,g.overSome=Bh,g.partial=Xo,g.partialRight=Vu,g.partition=vd,g.pick=Mp,g.pickBy=Qu,g.property=al,g.propertyOf=Nh,g.pull=yf,g.pullAll=Ou,g.pullAllBy=vf,g.pullAllWith=_f,g.pullAt=wf,g.range=Mh,g.rangeRight=Fh,g.rearg=Dd,g.reject=bd,g.remove=bf,g.rest=Rd,g.reverse=Uo,g.sampleSize=Id,g.set=zp,g.setWith=Up,g.shuffle=Ed,g.slice=Sf,g.sortBy=$d,g.sortedUniq=Cf,g.sortedUniqBy=kf,g.split=ch,g.spread=Bd,g.tail=Of,g.take=Lf,g.takeRight=Pf,g.takeRightWhile=Df,g.takeWhile=Rf,g.tap=Kf,g.throttle=Nd,g.thru=ka,g.toArray=Gu,g.toPairs=ju,g.toPairsIn=tl,g.toPath=Xh,g.toPlainObject=Zu,g.transform=Vp,g.unary=Md,g.union=Bf,g.unionBy=Nf,g.unionWith=Mf,g.uniq=Ff,g.uniqBy=zf,g.uniqWith=Uf,g.unset=Yp,g.unzip=Vo,g.unzipWith=Lu,g.update=Xp,g.updateWith=Hp,g.values=ti,g.valuesIn=Wp,g.without=Vf,g.words=rl,g.wrap=Fd,g.xor=Yf,g.xorBy=Xf,g.xorWith=Hf,g.zip=Wf,g.zipObject=Gf,g.zipObjectDeep=qf,g.zipWith=Zf,g.entries=ju,g.entriesIn=tl,g.extend=Ku,g.extendWith=Na,Qo(g,g),g.add=Wh,g.attempt=il,g.camelCase=Kp,g.capitalize=el,g.ceil=Gh,g.clamp=Gp,g.clone=Ud,g.cloneDeep=Yd,g.cloneDeepWith=Xd,g.cloneWith=Vd,g.conformsTo=Hd,g.deburr=nl,g.defaultTo=Th,g.divide=qh,g.endsWith=Jp,g.eq=yn,g.escape=Qp,g.escapeRegExp=jp,g.every=od,g.find=ud,g.findIndex=$u,g.findKey=bp,g.findLast=ld,g.findLastIndex=xu,g.findLastKey=Sp,g.floor=Zh,g.forEach=Du,g.forEachRight=Ru,g.forIn=Ip,g.forInRight=Ep,g.forOwn=Tp,g.forOwnRight=Ap,g.get=Go,g.gt=Wd,g.gte=Gd,g.has=Cp,g.hasIn=qo,g.head=ku,g.identity=Ge,g.includes=hd,g.indexOf=lf,g.inRange=qp,g.invoke=Lp,g.isArguments=xr,g.isArray=Ot,g.isArrayBuffer=qd,g.isArrayLike=He,g.isArrayLikeObject=ye,g.isBoolean=Zd,g.isBuffer=or,g.isDate=Kd,g.isElement=Jd,g.isEmpty=Qd,g.isEqual=jd,g.isEqualWith=tp,g.isError=Ho,g.isFinite=ep,g.isFunction=Vn,g.isInteger=Yu,g.isLength=Ra,g.isMap=Xu,g.isMatch=np,g.isMatchWith=rp,g.isNaN=ip,g.isNative=ap,g.isNil=sp,g.isNull=op,g.isNumber=Hu,g.isObject=pe,g.isObjectLike=ge,g.isPlainObject=Pi,g.isRegExp=Wo,g.isSafeInteger=up,g.isSet=Wu,g.isString=Ba,g.isSymbol=je,g.isTypedArray=jr,g.isUndefined=lp,g.isWeakMap=cp,g.isWeakSet=fp,g.join=hf,g.kebabCase=th,g.last=ln,g.lastIndexOf=gf,g.lowerCase=eh,g.lowerFirst=nh,g.lt=dp,g.lte=pp,g.max=Kh,g.maxBy=Jh,g.mean=Qh,g.meanBy=jh,g.min=t0,g.minBy=e0,g.stubArray=ts,g.stubFalse=es,g.stubObject=zh,g.stubString=Uh,g.stubTrue=Vh,g.multiply=n0,g.nth=mf,g.noConflict=Lh,g.noop=jo,g.now=La,g.pad=rh,g.padEnd=ih,g.padStart=ah,g.parseInt=oh,g.random=Zp,g.reduce=_d,g.reduceRight=wd,g.repeat=sh,g.replace=uh,g.result=Fp,g.round=r0,g.runInContext=B,g.sample=Sd,g.size=Td,g.snakeCase=lh,g.some=Ad,g.sortedIndex=If,g.sortedIndexBy=Ef,g.sortedIndexOf=Tf,g.sortedLastIndex=Af,g.sortedLastIndexBy=$f,g.sortedLastIndexOf=xf,g.startCase=fh,g.startsWith=dh,g.subtract=i0,g.sum=ol,g.sumBy=a0,g.template=ph,g.times=Yh,g.toFinite=Yn,g.toInteger=Pt,g.toLength=qu,g.toLower=hh,g.toNumber=cn,g.toSafeInteger=hp,g.toString=Wt,g.toUpper=gh,g.trim=mh,g.trimEnd=yh,g.trimStart=vh,g.truncate=_h,g.unescape=wh,g.uniqueId=Hh,g.upperCase=bh,g.upperFirst=Zo,g.each=Du,g.eachRight=Ru,g.first=ku,Qo(g,function(){var e={};return En(g,function(n,o){Kt.call(g.prototype,o)||(e[o]=n)}),e}(),{chain:!1}),g.VERSION=K,Fe(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){g[e].placeholder=g}),Fe(["drop","take"],function(e,n){zt.prototype[e]=function(o){o=o===p?1:Te(Pt(o),0);var i=this.__filtered__&&!n?new zt(this):this.clone();return i.__filtered__?i.__takeCount__=Pe(o,i.__takeCount__):i.__views__.push({size:Pe(o,ct),type:e+(i.__dir__<0?"Right":"")}),i},zt.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Fe(["filter","map","takeWhile"],function(e,n){var o=n+1,i=o==Gt||o==le;zt.prototype[e]=function(f){var v=this.clone();return v.__iteratees__.push({iteratee:Et(f,3),type:o}),v.__filtered__=v.__filtered__||i,v}}),Fe(["head","last"],function(e,n){var o="take"+(n?"Right":"");zt.prototype[e]=function(){return this[o](1).value()[0]}}),Fe(["initial","tail"],function(e,n){var o="drop"+(n?"":"Right");zt.prototype[e]=function(){return this.__filtered__?new zt(this):this[o](1)}}),zt.prototype.compact=function(){return this.filter(Ge)},zt.prototype.find=function(e){return this.filter(e).head()},zt.prototype.findLast=function(e){return this.reverse().find(e)},zt.prototype.invokeMap=Rt(function(e,n){return typeof e=="function"?new zt(this):this.map(function(o){return qr(o,e,n)})}),zt.prototype.reject=function(e){return this.filter(Da(Et(e)))},zt.prototype.slice=function(e,n){e=Pt(e);var o=this;return o.__filtered__&&(e>0||n<0)?new zt(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),n!==p&&(n=Pt(n),o=n<0?o.dropRight(-n):o.take(n-e)),o)},zt.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},zt.prototype.toArray=function(){return this.take(ct)},En(zt.prototype,function(e,n){var o=/^(?:filter|find|map|reject)|While$/.test(n),i=/^(?:head|last)$/.test(n),f=g[i?"take"+(n=="last"?"Right":""):n],v=i||/^find/.test(n);f&&(g.prototype[n]=function(){var A=this.__wrapped__,L=i?[1]:arguments,M=A instanceof zt,G=L[0],q=M||Ot(A),J=function(Mt){var Ut=f.apply(g,Ln([Mt],L));return i&&st?Ut[0]:Ut};q&&o&&typeof G=="function"&&G.length!=1&&(M=q=!1);var st=this.__chain__,vt=!!this.__actions__.length,$t=v&&!st,Bt=M&&!vt;if(!v&&q){A=Bt?A:new zt(this);var St=e.apply(A,L);return St.__actions__.push({func:ka,args:[J],thisArg:p}),new on(St,st)}return $t&&Bt?e.apply(this,L):(St=this.thru(J),$t?i?St.value()[0]:St.value():St)})}),Fe(["pop","push","shift","sort","splice","unshift"],function(e){var n=na[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);g.prototype[e]=function(){var f=arguments;if(i&&!this.__chain__){var v=this.value();return n.apply(Ot(v)?v:[],f)}return this[o](function(A){return n.apply(Ot(A)?A:[],f)})}}),En(zt.prototype,function(e,n){var o=g[n];if(o){var i=o.name+"";Kt.call(br,i)||(br[i]=[]),br[i].push({name:n,func:o})}}),br[ir(p,R).name]=[{name:"wrapper",func:p}],zt.prototype.clone=ga,zt.prototype.reverse=Kl,zt.prototype.value=fo,g.prototype.at=Jf,g.prototype.chain=Qf,g.prototype.commit=jf,g.prototype.next=td,g.prototype.plant=nd,g.prototype.reverse=rd,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=id,g.prototype.first=g.prototype.head,oa&&(g.prototype[oa]=ed),g},pi=Bl();Ie._=pi,et=function(){return pi}.call(bt,lt,bt,_t),et!==p&&(_t.exports=et)}).call(this)},689:(_t,bt,lt)=>{var et;(function(p,K,m){if(!p)return;for(var O={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},E={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},$={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},Y={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},H,X=1;X<20;++X)O[111+X]="f"+X;for(X=0;X<=9;++X)O[X+96]=X.toString();function D(U,rt,ht){if(U.addEventListener){U.addEventListener(rt,ht,!1);return}U.attachEvent("on"+rt,ht)}function it(U){if(U.type=="keypress"){var rt=String.fromCharCode(U.which);return U.shiftKey||(rt=rt.toLowerCase()),rt}return O[U.which]?O[U.which]:E[U.which]?E[U.which]:String.fromCharCode(U.which).toLowerCase()}function s(U,rt){return U.sort().join(",")===rt.sort().join(",")}function l(U){var rt=[];return U.shiftKey&&rt.push("shift"),U.altKey&&rt.push("alt"),U.ctrlKey&&rt.push("ctrl"),U.metaKey&&rt.push("meta"),rt}function d(U){if(U.preventDefault){U.preventDefault();return}U.returnValue=!1}function I(U){if(U.stopPropagation){U.stopPropagation();return}U.cancelBubble=!0}function R(U){return U=="shift"||U=="ctrl"||U=="alt"||U=="meta"}function P(){if(!H){H={};for(var U in O)U>95&&U<112||O.hasOwnProperty(U)&&(H[O[U]]=U)}return H}function C(U,rt,ht){return ht||(ht=P()[U]?"keydown":"keypress"),ht=="keypress"&&rt.length&&(ht="keydown"),ht}function Z(U){return U==="+"?["+"]:(U=U.replace(/\+{2}/g,"+plus"),U.split("+"))}function tt(U,rt){var ht,ot,re,Xt=[];for(ht=Z(U),re=0;re<ht.length;++re)ot=ht[re],Y[ot]&&(ot=Y[ot]),rt&&rt!="keypress"&&$[ot]&&(ot=$[ot],Xt.push("shift")),R(ot)&&Xt.push(ot);return rt=C(ot,Xt,rt),{key:ot,modifiers:Xt,action:rt}}function dt(U,rt){return U===null||U===K?!1:U===rt?!0:dt(U.parentNode,rt)}function pt(U){var rt=this;if(U=U||K,!(rt instanceof pt))return new pt(U);rt.target=U,rt._callbacks={},rt._directMap={};var ht={},ot,re=!1,Xt=!1,Gt=!1;function Ct(nt){nt=nt||{};var at=!1,mt;for(mt in ht){if(nt[mt]){at=!0;continue}ht[mt]=0}at||(Gt=!1)}function le(nt,at,mt,wt,Lt,oe){var At,Yt,Jt=[],Qt=mt.type;if(!rt._callbacks[nt])return[];for(Qt=="keyup"&&R(nt)&&(at=[nt]),At=0;At<rt._callbacks[nt].length;++At)if(Yt=rt._callbacks[nt][At],!(!wt&&Yt.seq&&ht[Yt.seq]!=Yt.level)&&Qt==Yt.action&&(Qt=="keypress"&&!mt.metaKey&&!mt.ctrlKey||s(at,Yt.modifiers))){var Oe=!wt&&Yt.combo==Lt,Ae=wt&&Yt.seq==wt&&Yt.level==oe;(Oe||Ae)&&rt._callbacks[nt].splice(At,1),Jt.push(Yt)}return Jt}function qt(nt,at,mt,wt){rt.stopCallback(at,at.target||at.srcElement,mt,wt)||nt(at,mt)===!1&&(d(at),I(at))}rt._handleKey=function(nt,at,mt){var wt=le(nt,at,mt),Lt,oe={},At=0,Yt=!1;for(Lt=0;Lt<wt.length;++Lt)wt[Lt].seq&&(At=Math.max(At,wt[Lt].level));for(Lt=0;Lt<wt.length;++Lt){if(wt[Lt].seq){if(wt[Lt].level!=At)continue;Yt=!0,oe[wt[Lt].seq]=1,qt(wt[Lt].callback,mt,wt[Lt].combo,wt[Lt].seq);continue}Yt||qt(wt[Lt].callback,mt,wt[Lt].combo)}var Jt=mt.type=="keypress"&&Xt;mt.type==Gt&&!R(nt)&&!Jt&&Ct(oe),Xt=Yt&&mt.type=="keydown"};function ve(nt){typeof nt.which!="number"&&(nt.which=nt.keyCode);var at=it(nt);if(at){if(nt.type=="keyup"&&re===at){re=!1;return}rt.handleKey(at,l(nt),nt)}}function Tt(){clearTimeout(ot),ot=setTimeout(Ct,1e3)}function gt(nt,at,mt,wt){ht[nt]=0;function Lt(Qt){return function(){Gt=Qt,++ht[nt],Tt()}}function oe(Qt){qt(mt,Qt,nt),wt!=="keyup"&&(re=it(Qt)),setTimeout(Ct,10)}for(var At=0;At<at.length;++At){var Yt=At+1===at.length,Jt=Yt?oe:Lt(wt||tt(at[At+1]).action);ct(at[At],Jt,wt,nt,At)}}function ct(nt,at,mt,wt,Lt){rt._directMap[nt+":"+mt]=at,nt=nt.replace(/\s+/g," ");var oe=nt.split(" "),At;if(oe.length>1){gt(nt,oe,at,mt);return}At=tt(nt,mt),rt._callbacks[At.key]=rt._callbacks[At.key]||[],le(At.key,At.modifiers,{type:At.action},wt,nt,Lt),rt._callbacks[At.key][wt?"unshift":"push"]({callback:at,modifiers:At.modifiers,action:At.action,seq:wt,level:Lt,combo:nt})}rt._bindMultiple=function(nt,at,mt){for(var wt=0;wt<nt.length;++wt)ct(nt[wt],at,mt)},D(U,"keypress",ve),D(U,"keydown",ve),D(U,"keyup",ve)}pt.prototype.bind=function(U,rt,ht){var ot=this;return U=U instanceof Array?U:[U],ot._bindMultiple.call(ot,U,rt,ht),ot},pt.prototype.unbind=function(U,rt){var ht=this;return ht.bind.call(ht,U,function(){},rt)},pt.prototype.trigger=function(U,rt){var ht=this;return ht._directMap[U+":"+rt]&&ht._directMap[U+":"+rt]({},U),ht},pt.prototype.reset=function(){var U=this;return U._callbacks={},U._directMap={},U},pt.prototype.stopCallback=function(U,rt){var ht=this;if((" "+rt.className+" ").indexOf(" mousetrap ")>-1||dt(rt,ht.target))return!1;if("composedPath"in U&&typeof U.composedPath=="function"){var ot=U.composedPath()[0];ot!==U.target&&(rt=ot)}return rt.tagName=="INPUT"||rt.tagName=="SELECT"||rt.tagName=="TEXTAREA"||rt.isContentEditable},pt.prototype.handleKey=function(){var U=this;return U._handleKey.apply(U,arguments)},pt.addKeycodes=function(U){for(var rt in U)U.hasOwnProperty(rt)&&(O[rt]=U[rt]);H=null},pt.init=function(){var U=pt(K);for(var rt in U)rt.charAt(0)!=="_"&&(pt[rt]=function(ht){return function(){return U[ht].apply(U,arguments)}}(rt))},pt.init(),p.Mousetrap=pt,_t.exports&&(_t.exports=pt),et=function(){return pt}.call(bt,lt,bt,_t),et!==m&&(_t.exports=et)})(typeof window!="undefined"?window:null,typeof window!="undefined"?document:null)},980:function(_t,bt,lt){_t=lt.nmd(_t),function(et,p){"use strict";var K={};et.PubSub?(K=et.PubSub,console.warn("PubSub already loaded, using existing version")):(et.PubSub=K,p(K)),_t!==void 0&&_t.exports&&(bt=_t.exports=K),bt.PubSub=K,_t.exports=bt=K}(typeof window=="object"&&window||this,function(et){"use strict";var p={},K=-1,m="*";function O(l){var d;for(d in l)if(Object.prototype.hasOwnProperty.call(l,d))return!0;return!1}function E(l){return function(){throw l}}function $(l,d,I){try{l(d,I)}catch(R){setTimeout(E(R),0)}}function Y(l,d,I){l(d,I)}function H(l,d,I,R){var P=p[d],C=R?Y:$,Z;if(Object.prototype.hasOwnProperty.call(p,d))for(Z in P)Object.prototype.hasOwnProperty.call(P,Z)&&C(P[Z],l,I)}function X(l,d,I){return function(){var P=String(l),C=P.lastIndexOf(".");for(H(l,l,d,I);C!==-1;)P=P.substr(0,C),C=P.lastIndexOf("."),H(l,P,d,I);H(l,m,d,I)}}function D(l){var d=String(l),I=Boolean(Object.prototype.hasOwnProperty.call(p,d)&&O(p[d]));return I}function it(l){for(var d=String(l),I=D(d)||D(m),R=d.lastIndexOf(".");!I&&R!==-1;)d=d.substr(0,R),R=d.lastIndexOf("."),I=D(d);return I}function s(l,d,I,R){l=typeof l=="symbol"?l.toString():l;var P=X(l,d,R),C=it(l);return C?(I===!0?P():setTimeout(P,0),!0):!1}et.publish=function(l,d){return s(l,d,!1,et.immediateExceptions)},et.publishSync=function(l,d){return s(l,d,!0,et.immediateExceptions)},et.subscribe=function(l,d){if(typeof d!="function")return!1;l=typeof l=="symbol"?l.toString():l,Object.prototype.hasOwnProperty.call(p,l)||(p[l]={});var I="uid_"+String(++K);return p[l][I]=d,I},et.subscribeAll=function(l){return et.subscribe(m,l)},et.subscribeOnce=function(l,d){var I=et.subscribe(l,function(){et.unsubscribe(I),d.apply(this,arguments)});return et},et.clearAllSubscriptions=function(){p={}},et.clearSubscriptions=function(d){var I;for(I in p)Object.prototype.hasOwnProperty.call(p,I)&&I.indexOf(d)===0&&delete p[I]},et.countSubscriptions=function(d){var I,R,P=0;for(I in p)if(Object.prototype.hasOwnProperty.call(p,I)&&I.indexOf(d)===0){for(R in p[I])P++;break}return P},et.getSubscriptions=function(d){var I,R=[];for(I in p)Object.prototype.hasOwnProperty.call(p,I)&&I.indexOf(d)===0&&R.push(I);return R},et.unsubscribe=function(l){var d=function(pt){var U;for(U in p)if(Object.prototype.hasOwnProperty.call(p,U)&&U.indexOf(pt)===0)return!0;return!1},I=typeof l=="string"&&(Object.prototype.hasOwnProperty.call(p,l)||d(l)),R=!I&&typeof l=="string",P=typeof l=="function",C=!1,Z,tt,dt;if(I){et.clearSubscriptions(l);return}for(Z in p)if(Object.prototype.hasOwnProperty.call(p,Z)){if(tt=p[Z],R&&tt[l]){delete tt[l],C=l;break}if(P)for(dt in tt)Object.prototype.hasOwnProperty.call(tt,dt)&&tt[dt]===l&&(delete tt[dt],C=!0)}return C}})},574:(_t,bt,lt)=>{"use strict";var et=function(){var d;return function(){return typeof d=="undefined"&&(d=Boolean(window&&document&&document.all&&!window.atob)),d}}(),p=function(){var d={};return function(R){if(typeof d[R]=="undefined"){var P=document.querySelector(R);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch(C){P=null}d[R]=P}return d[R]}}(),K=[];function m(l){for(var d=-1,I=0;I<K.length;I++)if(K[I].identifier===l){d=I;break}return d}function O(l,d){for(var I={},R=[],P=0;P<l.length;P++){var C=l[P],Z=d.base?C[0]+d.base:C[0],tt=I[Z]||0,dt="".concat(Z," ").concat(tt);I[Z]=tt+1;var pt=m(dt),U={css:C[1],media:C[2],sourceMap:C[3]};pt!==-1?(K[pt].references++,K[pt].updater(U)):K.push({identifier:dt,updater:s(U,d),references:1}),R.push(dt)}return R}function E(l){var d=document.createElement("style"),I=l.attributes||{};if(typeof I.nonce=="undefined"){var R=lt.nc;R&&(I.nonce=R)}if(Object.keys(I).forEach(function(C){d.setAttribute(C,I[C])}),typeof l.insert=="function")l.insert(d);else{var P=p(l.insert||"head");if(!P)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");P.appendChild(d)}return d}function $(l){if(l.parentNode===null)return!1;l.parentNode.removeChild(l)}var Y=function(){var d=[];return function(R,P){return d[R]=P,d.filter(Boolean).join(`
`)}}();function H(l,d,I,R){var P=I?"":R.media?"@media ".concat(R.media," {").concat(R.css,"}"):R.css;if(l.styleSheet)l.styleSheet.cssText=Y(d,P);else{var C=document.createTextNode(P),Z=l.childNodes;Z[d]&&l.removeChild(Z[d]),Z.length?l.insertBefore(C,Z[d]):l.appendChild(C)}}function X(l,d,I){var R=I.css,P=I.media,C=I.sourceMap;if(P?l.setAttribute("media",P):l.removeAttribute("media"),C&&typeof btoa!="undefined"&&(R+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(C))))," */")),l.styleSheet)l.styleSheet.cssText=R;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(R))}}var D=null,it=0;function s(l,d){var I,R,P;if(d.singleton){var C=it++;I=D||(D=E(d)),R=H.bind(null,I,C,!1),P=H.bind(null,I,C,!0)}else I=E(d),R=X.bind(null,I,d),P=function(){$(I)};return R(l),function(tt){if(tt){if(tt.css===l.css&&tt.media===l.media&&tt.sourceMap===l.sourceMap)return;R(l=tt)}else P()}}_t.exports=function(l,d){d=d||{},!d.singleton&&typeof d.singleton!="boolean"&&(d.singleton=et()),l=l||[];var I=O(l,d);return function(P){if(P=P||[],Object.prototype.toString.call(P)==="[object Array]"){for(var C=0;C<I.length;C++){var Z=I[C],tt=m(Z);K[tt].references--}for(var dt=O(P,d),pt=0;pt<I.length;pt++){var U=I[pt],rt=m(U);K[rt].references===0&&(K[rt].updater(),K.splice(rt,1))}I=dt}}}}},o0={};function ae(_t){var bt=o0[_t];if(bt!==void 0)return bt.exports;var lt=o0[_t]={id:_t,loaded:!1,exports:{}};return E0[_t].call(lt.exports,lt,lt.exports,ae),lt.loaded=!0,lt.exports}ae.n=_t=>{var bt=_t&&_t.__esModule?()=>_t.default:()=>_t;return ae.d(bt,{a:bt}),bt},ae.d=(_t,bt)=>{for(var lt in bt)ae.o(bt,lt)&&!ae.o(_t,lt)&&Object.defineProperty(_t,lt,{enumerable:!0,get:bt[lt]})},ae.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(_t){if(typeof window=="object")return window}}(),ae.o=(_t,bt)=>Object.prototype.hasOwnProperty.call(_t,bt),ae.nmd=_t=>(_t.paths=[],_t.children||(_t.children=[]),_t),ae.nc=void 0;var k0={};(()=>{"use strict";var _t=ae(980),bt=ae.n(_t),lt=ae(594),et=ae.n(lt);class p{constructor(r){this.cid=r.cid,this.stageCID=r.stageCID,this.type=r.type,this.groupCID=r.groupCID,this.isAvailable=r.isAvailable,this.isActionEnable=r.isActionEnable,this.isShow=r.isShow,this.materialCID=r.materialCID,this.style=r.style,this.countdown=r.countdown,this.isAutoPlay=r.isAutoPlay,this.isLoop=r.isLoop,this.isBorderEnabled=r.isBorderEnabled,this.isBackgroundEnabled=r.isBackgroundEnabled,this.autoTiming=r.autoTiming,this.text=r.text,this.audioVolume=r.audioVolume,this.isShadowEnabled=r.isShadowEnabled,this.shadowBlur=r.shadowBlur,this.shadowColor=r.shadowColor,this.shadowX=r.shadowX,this.shadowY=r.shadowY,this.initialValue=r.initialValue,this.resetLocked=r.resetLocked,this.valueLocked=r.valueLocked,this.initialValueEndRange=r.initialValueEndRange,this.initialValueStartRange=r.initialValueStartRange,this.autoThrow=r.autoThrow,this.cycleTiming=r.cycleTiming,this.name=r.name,this.resourceID=r.resourceID}}class K{constructor(){this._list=[]}get list(){return this._list}setList(r){this._list=r.map(a=>new p(a))}getByStageCID(r){return this.list.filter(a=>a.stageCID===r)}getById(r){return this.list.find(a=>a.cid===r)}getByType(r){return typeof r=="string"&&(r=[r]),this.list.filter(a=>r.includes(a.type))}}const O=new K;var E=(t=>(t.Image="IMAGE",t.Gif="GIF",t.Sequence="SEQUENCE",t.Hotspot="HOTSPOT",t.Rect="RECT",t.Mask="MASK",t.Video="VIDEO",t.Audio="AUDIO",t.Interval="INTERVAL",t.Number="NUMBER",t.Text="TEXT",t.Group="GROUP",t.Line="LINE",t.Scene="SCENE",t.Handle="HANDLE",t.Placeholder="PLACEHOLDER",t))(E||{});const $=E;var Y=(t=>(t.OverlayStage="OVERLAYSTAGE",t.LoadingStage="LOADING_STAGE",t.StartStage="START",t.NormalStage="NORMAL",t.ExceptionStage="EXCEPTIONSTAGE",t.RotateStage="ROTATESTAGE",t.Finish="FINISH",t))(Y||{});const H=Y;class X{constructor(r){this.startTime=0,this.isStop=!0;var a;this.cid=r.cid,this.countdown=r.countdown,this.remaining=r.countdown,this.cycleTiming=r.cycleTiming,this.stageCID=r.stageCID,this.callback=()=>{this.cycleTiming?(this.replay(this.cid),this.start()):(r.callback(this.cid),y.timerManager.remove(this.cid))},this.replay=(a=r.replay)!=null?a:function(){},this.start()}start(){var r;(r=y.timerManager.getById(this.cid))==null||r.stop(),this.isStop=!1,this.startTime=Date.now(),this.timerId=window.setTimeout(this.callback,this.remaining)}pause(){return this.isStop?!1:(window.clearTimeout(this.timerId),this.timerId=void 0,this.remaining-=Date.now()-this.startTime,this.isStop=!0,!0)}stop(){return this.isStop||this.timerId===void 0?!1:(window.clearTimeout(this.timerId),this.isStop=!0,this.remaining=this.countdown,!0)}continue(){return this.isStop?(this.startTime=Date.now(),this.timerId=window.setTimeout(this.callback,this.remaining),!0):!1}changeCountdown(r){this.countdown=Number(r),this.remaining=this.countdown}changeLoop(r){this.cycleTiming=r}}class D{constructor(){this.data=new Map}push(r){this.data.set(r.cid,new X(r))}pause(r){const a=this.getById(r);return a===void 0?!1:a.pause()}pauseAll(){this.data.forEach(r=>{r.pause()})}stop(r){if(r===void 0)return this.pauseAll(),!0;{const a=this.getById(r);return a===void 0?!1:a.stop()}}continueAll(){this.data.forEach(r=>{r.continue()})}continue(r){if(r===void 0)return this.continueAll(),!0;{const a=this.getById(r);return a===void 0?!1:a.continue()}}remove(r){const a=this.getById(r);a==null||a.stop(),this.data.delete(r)}removeByStageCID(r){this.data.forEach(a=>{a.stageCID===r&&(a.stop(),this.data.delete(a.cid))})}getById(r){return this.data.get(r)}}const s={videoRefs:new Map,videoPlays:new Map,currentPlayingId:""};class l{constructor(){this.list=new Map}getById(r){return this.list.get(r)}getByStageCID(r){var a;const u=[];this.list.forEach(b=>{b.stageCID===r&&u.push(b)});const c=y.stages.getById(r);if((a=c==null?void 0:c.isOverlyingStageEnabled)!=null&&a){const b=y.stages.getOverlayStage();this.list.forEach(k=>{k.stageCID===(b==null?void 0:b.cid)&&u.push(k)})}return u}}const d=new l;class I{constructor(){this._list=[]}setList(r){this._list=r}get list(){return this._list}getById(r){return this.list.find(a=>a.id===r)}getByResourceID(r){return this.list.find(a=>a.resourceID===r)}}const P=new I;var C=(t=>(t.ScreenAd="SCREEN_AD",t.ScreenPage="SCREEN_PAGE",t.CreativeApp="CREATIVE_APP",t.ScreenTrinket="SCREEN_TRINKET",t))(C||{});const Z=C,dt={channel:"douyin_live",name:"",kind:Z.ScreenAd,ratio:"16:9",isPortrait:!0,scale:1,isMuted:!1,resourcesLoaded:!1,inited:!1,loadingStageConfig:{components:{},main:{loadingStageAutoJumpStage:!0,processFloorComponentId:""}},adNetwork:""};class pt{constructor(r){this.cid=r.cid,this.index=r.index,this.isLocked=r.isLocked,this.isOverlyingStageEnabled=r.isOverlyingStageEnabled,this.overlyingStageIndex=r.overlyingStageIndex,this.stageType=r.stageType,this.title=r.title,this.isPortrait=r.isPortrait,this.fillColorEnable=r.fillColorEnable,this.fillColor=r.fillColor}get widgets(){return O.getByStageCID(this.cid)}}class U{constructor(){this._list=[],this.currentStageCID=""}setList(r){this._list=r.map(a=>new pt(a))}get list(){return this._list}getNormalStages(){return this.list.filter(r=>[H.NormalStage,H.StartStage].includes(r.stageType)).sort((r,a)=>r.index-a.index)}getById(r){return this.list.find(a=>a.cid===r)}getByType(r){return this.list.filter(a=>a.stageType===r)}getLoadingStage(){return this.getByType(H.LoadingStage)[0]}getRotateStage(){return this.getByType(H.RotateStage)[0]}getOverlayStage(){return this.getByType(H.OverlayStage)[0]}getCurrentStage(){return this.getById(this.currentStageCID)}getStartStage(){return this.getByType(H.StartStage)[0]}getExceptionStage(){return this.getByType(H.ExceptionStage)[0]}}const ht=new U;var ot=ae(392),re=ae.n(ot);class Xt{constructor(){this._list=[],this.pointerEnterHotspot=new Set,this.pageX=0,this.pageY=0,this.deltaX=0,this.deltaY=0,this.isDragging=!1}reset(r){this.getByStageId(r).forEach(a=>{a.usedTriggerCount=0})}setList(r){this._list=r}getByID(r){return this.list.find(a=>a.cid===r)}getByStageId(r){return this.list.filter(a=>a.sourceStageCID===r)}get list(){return this._list.sort((r,a)=>r.index-a.index)}get group(){return(0,ot.groupBy)(this.list,r=>`${r.name}.${r.sourceCID}`)}}const Ct=new Xt;class le{constructor(){this.list=new Map}getById(r){return this.list.get(r)}}const qt=new le;var ve=(t=>(t.TriggerTypeClick="TRIGGER_TYPE_CLICK",t.TriggerTypeSwipe="TRIGGER_TYPE_SWIPE",t.TriggerTypeHover="TRIGGER_TYPE_HOVER",t.SwipeUp="SWIPEUP",t.SwipeDown="SWIPEDOWN",t.SwipeLeft="SWIPELEFT",t.SwipeRight="SWIPERIGHT",t.SwipeLeftUp="SWIPELEFTUP",t.SwipeLeftDown="SWIPELEFTDOWN",t.SwipeRightUp="SWIPERIGHTUP",t.SwipeRightDown="SWIPERIGHTDOWN",t.Tap="TAP",t.DoubleTap="DOUBLETAP",t.Press="PRESS",t.AudioEnd="AUDIOEND",t.AudioStart="AUDIOSTART",t.AudioPause="AUDIOPAUSE",t.AudioStop="AUDIOSTOP",t.AudioContinue="AUDIOCONTINUE",t.VideoEnd="VIDEOEND",t.VideoStart="VIDEOSTART",t.VideoContinue="VIDEOCONTINUE",t.VideoPause="VIDEOPAUSE",t.VideoStop="VIDEOSTOP",t.SequenceEnd="SEQUENCEEND",t.SequenceStart="SEQUENCESTART",t.SequenceContinue="SEQUENCECONTINUE",t.SequencePause="SEQUENCEPAUSE",t.SequenceStop="SEQUENCESTOP",t.Replay="PLAYING_REPLAY",t.Onload="ONLOAD",t.OnLoadingStart="ONLOADINGSTART",t.OnLoadingFinish="ONLOADINGFINISH",t.OnLoadingAllFinish="ONLOADINGALLFINISH",t.JumpOtherStage="JUMPOTHERSTAGE",t.LinkAddress="LINKADDRESS",t.Dragging="DRAGGING",t.DistanceSmall="DISTANCE_SMALL",t.DistanceMedium="DISTANCE_MEDIUM",t.DistanceLarge="DISTANCE_LARGE",t.DragreLease="DRAGRELEASE",t.CompareComponentInputNumber="COMPARECOMPONENTINPUTNUMBER",t.IntervalStart="INTERVALSTART",t.IntervalFinished="INTERVALFINISHED",t.IntervalStop="INTERVALSTOP",t.IntervalPause="INTERVALPAUSE",t.IntervalContinue="INTERVALCONTINUE",t.IntervalReplay="TIMING_REPLAY",t.PassiveEventChange="PASSIVEEVENTCHANGE",t.PassiveShow="PASSIVESHOW",t.PassiveHide="PASSIVEHIDE",t.Command="COMMAND",t.Release="RELEASE",t.OnFinish="ONFINISH",t.OnDeviceRotation="DIFFDIRECTION",t.Mute="MUTE",t.NumberCompare="NUMBER_COMPARE",t.ChangeInit="INIT_VALUE",t.ChangePrev="PREV_VALUE",t.ReceiveGift="RECEIVE_GIFT",t.ReceiveBullet="RECEIVE_BULLET",t.DeviceOperation="DEVICE_OPERATION",t.KeyboardInput="KEYBOARD_INPUT",t))(ve||{}),Tt=(t=>(t.Tap="TAP",t.DoubleTap="DOUBLETAP",t.Press="PRESS",t))(Tt||{}),gt=(t=>(t.AudioEnd="AUDIOEND",t.VideoEnd="VIDEOEND",t))(gt||{}),ct=(t=>(t.AudioStart="AUDIOSTART",t))(ct||{}),nt=(t=>(t.Enter="ENTER",t.Out="OUT",t))(nt||{}),at=(t=>(t.ReleaseAll="RELEASEALL",t.ReleaseDrag="RELEASEDRAG",t.ReleasePress="RELEASEPRESS",t.ReleaseTap="RELEASETAP",t.ReleaseDoubleTap="RELEASEDOUBLETAP",t.ReleaseSwiper="RELEASESWIPER",t))(at||{}),mt=(t=>(t.overturnToReverse="OVERTURN_TO_REVERSE",t.overtrunToSame="OVERTURN_TO_SAME",t.acrossToVertical="ACROSS_TO_VERTICAL",t.acrossToAcross="VERTICAL_TO_ACROSS",t))(mt||{}),wt=(t=>(t.CompareInput="COMPARE_COMPONENT_INPUT_NUMBER",t.CompareOtherComponent="COMPARE_OTHER_COMPONENT",t.CompareSelf="COMPARE_SELF",t))(wt||{}),Lt=(t=>(t.anyBullet="ANY_BULLET",t.fuzzyMatch="FUZZY_MATCH",t.excatMatch="EXACT_MATCH",t.deviceRotaion="DIFFDIRECTION",t.swipe="SWIPE",t.Any="ANY",t.Singel="SINGLE",t.Combos="COMBOS",t))(Lt||{});const oe=at,At=nt,Yt=Tt,Jt=null,Qt=null,Oe=mt,Ae=wt,F=ve;function fn(t,r){const{sourceAttr:a,sourceAttrCondition:u}=r;switch(a){case F.Tap:case F.Release:case F.Press:_n(t,a);break;case Lt.deviceRotaion:_n(t,a,u);break;case Lt.swipe:_n(t,a,u),_n(t,a,Lt.Any);break}}function _n(t,r,a){a===void 0?yt.publish(`${F.DeviceOperation}.${r}.${t}`,{cid:t}):yt.publish(`${F.DeviceOperation}.${r}.${a}.${t}`,{cid:t})}function ce(t,r){if(r===void 0||r.sourceAttr===void 0)return;const{sourceAttr:a,liveMessage:u,repeat:c,eventId:b}=r;yt.publish(`${F.ReceiveBullet}.${a}.${b}.${t}`,{cid:t,liveMessage:u,repeat:c})}function wn(t,r){const a=r==null?void 0:r.liveMessage;a!==void 0&&yt.publish(`${F.ReceiveGift}.${t}`,{cid:t,liveMessage:a})}function Di(t,r){const{sourceAttr:a,sourceAttrCondition:u,eventId:c,key:b}=r;a===void 0||u===void 0||c===void 0||yt.publish(`${F.KeyboardInput}.${a}.${u}.${c}.${t}`,{cid:t,key:b})}var Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le=window.device,Q={},Wn=[];window.device=Q;var sr=window.document.documentElement,ur=window.navigator.userAgent.toLowerCase(),Ri=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];Q.macos=function(){return Zt("mac")},Q.ios=function(){return Q.iphone()||Q.ipod()||Q.ipad()},Q.iphone=function(){return!Q.windows()&&Zt("iphone")},Q.ipod=function(){return Zt("ipod")},Q.ipad=function(){var t=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return Zt("ipad")||t},Q.android=function(){return!Q.windows()&&Zt("android")},Q.androidPhone=function(){return Q.android()&&Zt("mobile")},Q.androidTablet=function(){return Q.android()&&!Zt("mobile")},Q.blackberry=function(){return Zt("blackberry")||Zt("bb10")},Q.blackberryPhone=function(){return Q.blackberry()&&!Zt("tablet")},Q.blackberryTablet=function(){return Q.blackberry()&&Zt("tablet")},Q.windows=function(){return Zt("windows")},Q.windowsPhone=function(){return Q.windows()&&Zt("phone")},Q.windowsTablet=function(){return Q.windows()&&Zt("touch")&&!Q.windowsPhone()},Q.fxos=function(){return(Zt("(mobile")||Zt("(tablet"))&&Zt(" rv:")},Q.fxosPhone=function(){return Q.fxos()&&Zt("mobile")},Q.fxosTablet=function(){return Q.fxos()&&Zt("tablet")},Q.meego=function(){return Zt("meego")},Q.cordova=function(){return window.cordova&&location.protocol==="file:"},Q.nodeWebkit=function(){return Hn(window.process)==="object"},Q.mobile=function(){return Q.androidPhone()||Q.iphone()||Q.ipod()||Q.windowsPhone()||Q.blackberryPhone()||Q.fxosPhone()||Q.meego()},Q.tablet=function(){return Q.ipad()||Q.androidTablet()||Q.blackberryTablet()||Q.windowsTablet()||Q.fxosTablet()},Q.desktop=function(){return!Q.tablet()&&!Q.mobile()},Q.television=function(){for(var t=0;t<Ri.length;){if(Zt(Ri[t]))return!0;t++}return!1},Q.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?xn(screen.orientation.type,"portrait"):Q.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1},Q.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?xn(screen.orientation.type,"landscape"):Q.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1},Q.noConflict=function(){return window.device=Le,this};function xn(t,r){return t.indexOf(r)!==-1}function Zt(t){return xn(ur,t)}function lr(t){return sr.className.match(new RegExp(t,"i"))}function ie(t){var r=null;lr(t)||(r=sr.className.replace(/^\s+|\s+$/g,""),sr.className=r+" "+t)}function cr(t){lr(t)&&(sr.className=sr.className.replace(" "+t,""))}Q.ios()?Q.ipad()?ie("ios ipad tablet"):Q.iphone()?ie("ios iphone mobile"):Q.ipod()&&ie("ios ipod mobile"):Q.macos()?ie("macos desktop"):Q.android()?Q.androidTablet()?ie("android tablet"):ie("android mobile"):Q.blackberry()?Q.blackberryTablet()?ie("blackberry tablet"):ie("blackberry mobile"):Q.windows()?Q.windowsTablet()?ie("windows tablet"):Q.windowsPhone()?ie("windows mobile"):ie("windows desktop"):Q.fxos()?Q.fxosTablet()?ie("fxos tablet"):ie("fxos mobile"):Q.meego()?ie("meego mobile"):Q.nodeWebkit()?ie("node-webkit"):Q.television()?ie("television"):Q.desktop()&&ie("desktop"),Q.cordova()&&ie("cordova");function dn(){Q.landscape()?(cr("portrait"),ie("landscape"),Gn("landscape")):(cr("landscape"),ie("portrait"),Gn("portrait")),Cr()}function Gn(t){for(var r=0;r<Wn.length;r++)Wn[r](t)}Q.onChangeOrientation=function(t){typeof t=="function"&&Wn.push(t)};var qn="resize";Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(qn="orientationchange"),window.addEventListener?window.addEventListener(qn,dn,!1):window.attachEvent?window.attachEvent(qn,dn):window[qn]=dn,dn();function fr(t){for(var r=0;r<t.length;r++)if(Q[t[r]]())return t[r];return"unknown"}Q.type=fr(["mobile","tablet","desktop"]),Q.os=fr(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]);function Cr(){Q.orientation=fr(["portrait","landscape"])}Cr();const be=Q;var Bi=(t=>(t.Moderate="moderate",t.Mild="mild",t.Severe="severe",t))(Bi||{});const kr=Bi;var Ma=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Ni(){return Ma(this,null,function*(){return yield new Promise(t=>{t(document.visibilityState==="visible")})})}let Or;Or=Ni;const Mi=Or;function ni(t){document.addEventListener("visibilitychange",()=>{t(document.visibilityState==="visible")})}let Fi;Fi=ni;const Fa=Fi;function zi(){const t=window.innerWidth,r=window.innerHeight;return{width:t,height:r}}let ri;ri=zi;const ii=ri;function za(){return"ready"}let Lr;Lr=za;const Pr=Lr;function ai(t){window.addEventListener("resize",()=>{const{width:r,height:a}=ii();t(r,a)})}let Ui;Ui=ai;const Vi=Ui;var Dr=(t=>(t.Landscape="landscape",t.Portrait="portrait",t))(Dr||{});const Yi=Dr;function Xi(t){window.addEventListener("resize",()=>{const r=ii();t(r.width>r.height?Yi.Landscape:Yi.Portrait)},!1)}let Hi;Hi=Xi;const Wi=Hi;function Gi(t){setTimeout(()=>{t()},0)}let Rr;Rr=Gi;const qi=Rr;function oi(){}let bn;bn=oi;const dr=bn;function pr(){}let hr;hr=pr;const Zn=hr;function Ua(t){window.open(t)}let gr;gr=Ua;const Br=gr;function Ye(){}let Cn;Cn=Ye;const pn=Cn;function tn(){}let kn;kn=tn;const en=kn;function hn(){}let si;si=hn;const Zi=si;function mr(){}let Ne;Ne=mr;const yr=Ne;class vr{constructor(){this.events={ready:[],viewableChange:[],sizeChange:[],orientationChange:[]},this.init=Zi,this.isViewable=Mi,this.getState=Pr,this.getScreenSize=ii,this.openAppStore=Br,this.onLoaded=dr,this.onStart=Zn,this.onStartLoading=pn,this.onEnd=en,this.onClose=yr,qi(()=>{this.events.ready.forEach(r=>{r()})}),Fa(r=>{this.events.viewableChange.forEach(a=>{a(r)})}),Vi((r,a)=>{this.events.sizeChange.forEach(u=>{u(r,a)})}),Wi(r=>{this.events.orientationChange.forEach(a=>{a(r)})})}addEventListener(r,a){this.events[r].push(a)}removeEventListener(r,a){a!==void 0?this.events[r].forEach((u,c,b)=>{u===a&&b.splice(c,1)}):this.events[r]=[]}}function ui(){const t=new vr;return window.channelSDK||(window.channelSDK=t),t}const Se=ui();var On=(t=>(t.Input="INPUT",t.Change="CHANGE",t.Visible="VISIBLE",t.InVisible="INVISIBLE",t.Reset="RESET",t.LockNumber="LOCK_NUMBER",t.LockReset="LOCK_RESET",t.Animate="ANIMATE",t.AttrChange="ATTRCHANGE",t.TextFontSize="TEXT_FONT_SIZE",t.VideoPlay="VIDEOPLAY",t.VideoLoop="VIDEOLOOP",t.AudioPlay="AUDIOPLAY",t.AudioLoop="AUDIOLOOP",t.SequencePlay="SEQUENCE_PLAY",t.DraggingFollowing="DRAGGING_FOLLOWING",t.JumpToOtherStage="JUMPTOOTHERSTAGE",t.JumpToLink="JUMPTOLINK",t.IntervalControl="INTERVAL_CONTROL",t.Copy="COPY",t.TriggerCommand="TRIGGER_COMMAND",t.MoveWidget="MOVE_WIDGET",t.ChangeAttributes="CHANGE_ATTRIBUTES",t.triggerValidateEnable="TRIGGER_VALIDATE_ENABLE",t.triggerValidateDisable="TRIGGER_VALIDATE_DISABLE",t.ChangeText="CHANGE_TEXT",t.ChangeNumber="CHANGE_NUMBER_VALUE",t.Random="RANDOM",t))(On||{});const Nt=On;var _e=(t=>(t.Add="ADD",t.AddPre="ADD_PRE",t.EQ="EQ",t.GetText="GET_TEXT",t.Clipboard="CLIPBOARD",t.Bullet="BULLET",t.BulleterName="BULLETER_NAME",t.GiverName="GIVER_NAME",t))(_e||{}),nn=(t=>(t.Add="ADD",t.Sub="SUB",t.Multi="MULTI",t.Div="DIV",t.EQ="EQ",t))(nn||{}),jt=(t=>(t.Up="UP",t.Down="DOWN",t.Left="LEFT",t.Right="RIGHT",t.LeftUp="LEFT_UP",t.leftDown="LEFT_DOWN",t.RightUp="RIGHT_UP",t.RightDown="RIGHT_DOWN",t.Following="FOLLOWING",t.ReverseFollowing="REVERSE_FOLLOWING",t.FollowingXY="X_Y",t.FollowingX="X",t.FollowingY="Y",t.Reset="RESET",t.Retain="RETAIN",t.Random="RANDOM",t.CalcNumber="COMPUTING_NUMBER",t))(jt||{}),xt=(t=>(t.Play="PLAY",t.Pause="PAUSE",t.PlayStart="PLAYSTART",t.Stop="STOP",t.Loop="LOOP",t.Notloop="NOTLOOP",t.LinkToStage="LINKTOSTAGE",t.Lock="LOCK",t.Unlock="UNLOCK",t.Disable="DISABLE",t.Enable="ENABLE",t.Min="MIN",t.Low="LOW",t.Mid="MID",t.High="HIGH",t.Max="MAX",t.PlacedRelativeLow="PLACEDRELATIVE_LOW",t.PlacedRelativeFast="PLACEDRELATIVE_FAST",t.PlacedRelativeFlash="PLACEDRELATIVE_FLASH",t.InitValue="INIT_VALUE",t.PrevValue="PREV_VALUE",t.InputPosition="INPUT_POSITION",t.MoveToTarget="MOVE_TO_TARGET",t.ActionPlaced="ACTION_PLACED",t.MovePosition="MOVE_POSITION",t))(xt||{}),Me=(t=>(t.position="WIDGET_POSITION",t.size="WIDGET_SIZE",t.opacity="OPACITY",t.loop="LOOP",t.rotate="WIDGET_ROTATE",t.textCotext="INPUT",t.fontsize="TEXT_FONT_SIZE",t.volume="CHANGE_VOLUME",t.setValue="SET_VALUE",t.disable="TRIGGER_VALIDATE",t))(Me||{}),li=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Ki(t,r){t.forEach(a=>{const{type:u,style:c}=a,{width:b,height:k,rotate:T,top:S,left:N}=c;u===widgetType.Line?(a.style.left=r-S,a.style.top=N,a.style.rotate=T+90):(a.style.left=r-(S+k/2)-b/2,a.style.top=N+b/2-k/2,a.style.rotate=T!==0?T+90:90)})}function h(t,r){t.forEach(a=>{const{type:u,style:c}=a,{width:b,height:k,rotate:T,top:S,left:N}=c;u===widgetType.Line?(a.style.left=S,a.style.top=r-N,a.style.rotate=T-90):(a.style.left=S+k/2-b/2,a.style.top=r-(N+b/2)-k/2,a.style.rotate=T!==0?T-90:-90)})}function w(){return y.stages.getCurrentStage().isPortrait===fe()}function x(){return y.stages.getCurrentStage().isPortrait===y.config.isPortrait}function z(){const t=document.getElementById("loading-box-parent");t!==null&&(t.style.display="block")}function j(){const t=document.getElementById("loading-box-parent");t!==null&&(t.style.display="none")}function ut(){return top!==self}function Dt(t){const r=atob(t.split(",")[1]),a=t.split(",")[0].split(":")[1].split(";")[0],u=new ArrayBuffer(r.length),c=new Uint8Array(u);for(let k=0;k<r.length;k++)c[k]=r.charCodeAt(k);return new Blob([u],{type:a})}function fe(){const t=Se.getScreenSize();let r=t.width<t.height;return be.desktop()&&(r=y.config.isPortrait),ut()&&be.desktop()&&(r=be.portrait()),r}function we(t){return li(this,null,function*(){return yield new Promise(r=>{window.wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),window.wx.ready(()=>li(this,null,function*(){r()})),window.wx.error(a=>{})})})}function xe(){return window.navigator.userAgent.toLowerCase().includes("micromessenger")}const Ke={taketime:"1000",range:kr.Moderate,easing:"linear",loop:"1",splitTime:0};function s0(t){}function ns(t,r){const{left:a,right:u,top:c,bottom:b}=r.getBoundingClientRect(),{x:k,y:T}=t;return k>a&&k<u&&T>c&&T<b}function Va(){return document.querySelectorAll("video").length===0}function ul(t,r=1){const a=t.targetValue,u=t.targetCID,c=JSON.parse(a);let b="",k;const T=S=>{var N,It,Vt;switch(S.type){case"component":{const Ft=(N=y.stateManager)==null?void 0:N.getById(S.value);if(Ft===void 0)return 0;switch(Ft.widget.type){case $.Number:return(It=Ft.currentState.value)!=null?It:0;case $.Text:return(Vt=Ft.currentState.text)!=null?Vt:""}break}case"number":return Number(S.value);case"string":return S.value}return S.value};return c.forEach((S,N)=>{if(N===0)u!==S.value?b=T(S)*r:b=T(S);else if((N+1)%2===0)k=S.value;else switch(k){case nn.Add:u!==S.value?b+=T(S)*r:b+=T(S);break;case nn.Sub:u!==S.value?b-=T(S)*r:b-=T(S);break;case nn.Multi:u!==S.value?b*=T(S)*r:b*=T(S);break}}),b}function ll(t,r){const a=["",t,""].join(".*");return new RegExp(a).test(r)}function cl(t){return typeof t=="function"&&/native code/.test(t.toString())}const Ya=function(){const t=[];let r=!1,a;function u(){r=!1;const c=t.slice(0);t.length=0;for(let b=0;b<c.length;b++)c[b]()}if(typeof Promise!="undefined"&&cl(Promise)){const c=Promise.resolve(),b=k=>{console.error(k)};a=()=>{c.then(u).catch(b),be.ios()&&setTimeout(fl)}}else a=()=>{setTimeout(u,0)};return function(b){let k;if(t.push(()=>{if(b!=null)try{b()}catch(T){}else k()}),r||(r=!0,a()),b==null&&typeof Promise!="undefined")return new Promise((T,S)=>{k=T})}}();function fl(t,r,a){}const Nr=new Map;let Xa=!1;function Ha(t,r){var a;if(Nr.has(t.cid)){const u=Nr.get(t.cid);if(u===void 0)return;u.count+=1,r!==void 0&&(u.liveMessage=r),Nr.set(t.cid,u)}else{const u={event:t,count:1};r!==void 0&&(u.liveMessage=r),Nr.set(t.cid,u)}Xa||(Xa=!0,(a=Ya(dl))==null||a.then())}function dl(){Nr.forEach(t=>{const r=t.event,a=r.cid,u=t.liveMessage,c=t.count;switch(r.targetAttrAction){case Nt.ChangeNumber:{r.targetAttr===jt.CalcNumber?ce(r.sourceCID,{eventId:a,sourceAttr:r.sourceAttr,liveMessage:u,repeat:c}):te(r,c,u);break}case Nt.ChangeText:{r.targetAttrOperation===_e.EQ?ce(r.sourceCID,{eventId:a,sourceAttr:r.sourceAttr,liveMessage:u}):te(r,c,u);break}default:{te(r,c,u);break}}}),Nr.clear(),Xa=!1}function te(t,r,a){for(let u=0;u<r;u++)ce(t.sourceCID,{eventId:t.cid,sourceAttr:t.sourceAttr,liveMessage:a})}class ne{constructor(r){this.eventEnums=[],this.cid=r.cid,this.stageCID=r.stageCID,this.events=Ct.list.filter(a=>a.sourceCID===r.cid),this.events.forEach(a=>{const u={action:"onLiveMessage",payload:{platform:"DOUYIN",type:"text",username:"\u7528\u6237\u6635\u79F0",content:"\u6211\u662F\u4E00\u6761\u5F39\u5E55\u6D88\u606F",extInfo:{}}};setInterval(()=>{for(let c=0;c<1e4;c++)ce(a.sourceCID,{eventId:"event-1645086341808-28",sourceAttr:a.sourceAttr,liveMessage:u})},100),this.eventEnums.includes(a.sourceEventName)||this.eventEnums.push(a.sourceEventName)})}}class pl{constructor(){this.widgets=new Map,this.events=[]}clear(){this.widgets.clear(),this.events=[]}pushWidgets(r){this.widgets.set(r.cid,new ne(r))}pushEvents(r){this.events=r}publish(r,a){this.widgets.forEach(u=>{if(y.config.kind===Z.CreativeApp)switch(r){case F.ReceiveGift:u.eventEnums.includes(F.ReceiveGift)&&wn(u.cid,a);break;case F.ReceiveBullet:if(a===void 0)return;u.eventEnums.includes(F.ReceiveBullet)&&hl(u,a);break;case F.DeviceOperation:if(a===void 0)return;u.eventEnums.includes(F.DeviceOperation)&&fn(u.cid,a);break;case F.KeyboardInput:if(a===void 0)return;Di(u.cid,a)}})}}function hl(t,r){t.events.forEach(a=>{var u,c;switch(a.sourceAttr){case Lt.anyBullet:Ha(a,r.liveMessage);break;case Lt.fuzzyMatch:{const b=(u=r.liveMessage)==null?void 0:u.payload.content;if(b===void 0)return;ll(a.sourceValue,b)&&Ha(a,r.liveMessage);break}case Lt.excatMatch:{const b=(c=r.liveMessage)==null?void 0:c.payload.content;a.sourceValue.trim()===(b==null?void 0:b.trim())&&Ha(a,r.liveMessage);break}}})}const y={video:s,audio:d,sequence:qt,assets:P,config:dt,widgets:O,stages:ht,events:Ct,emitter:bt(),timerManager:new D,handleManeger:new pl,elementAnimationMap:new Map,outAnimationMap:new Map};function gl(t){yt.publish(`${F.IntervalFinished}.${t}`,{cid:t})}function ml(t){yt.publish(`${F.IntervalReplay}.${t}`,{cid:t})}var Wa=(t=>(t.WebPC="web_pc",t))(Wa||{});const yl=Wa;var Ie=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function rs(t){return Ie(this,null,function*(){return yield new Promise((r,a)=>{const u=new XMLHttpRequest;u.open("GET",t,!0),u.responseType="blob",u.onload=()=>{if(u.status===200){const c=u.response,b=URL.createObjectURL(c);r(b)}else a(new Error("404"))},u.onerror=c=>{a(c)},u.send()})})}function Mr(t){let r="";const a=t.style,u=" translate3d(0,0,0)";let c="";return c=`rotateZ(${a.rotate}deg)${u}`,r+=`
    top: ${a.top}px;
    left: ${a.left}px;
    z-index: ${a.zIndex};
    width: ${a.width}px;
    height: ${a.height}px;
    opacity: ${a.opacity/100};
    transform:${c};
    visibility: ${t.isShow?"visible":"hidden"};
  `,r}function is(t){const r=document.querySelectorAll(".normal-stage, .exception-stage"),a=document.getElementById(t);a!==null&&(r.forEach(u=>{u.classList.remove("active")}),a.classList.add("active"))}function Ga(t){return O.list.find(r=>r.stageCID===t&&r.type===$.Video)}function Ce(t=y.config.isPortrait){const{ratio:r,kind:a}=y.config;let u=[667,375];if(a===Z.CreativeApp)switch(r){case"1:1":u=[320,320];break;case"3:2":u=[480,320];break;case"4:3":u=[800,600];break;case"5:4":u=[400,320];break;case"16:9":u=[667,375];break;case"16:10":u=[800,480];break}else if(a===Z.ScreenTrinket)switch(r){case"16:9":u=[750,420];break;case"5:6":u=[900,750];break;case"1:1":u=[750,750];break}else switch(r){case"16:9":u=[667,375];break;case"15:9":u=[625,375];break;case"4:3":u=[512,384];break;case"3:2":u=[480,320];break;case"1:1":u=[400,400];break}return t&&(u=[u[1],u[0]]),{width:u[0],height:u[1]}}function Ji(){const t=document.createElement("video"),r=document.createElement("source");return t.muted=!0,t.autoplay=!1,t.loop=!1,t.crossOrigin="anonymous",t.setAttribute("playsinline","true"),t.setAttribute("webkit-playsinline","true"),t.setAttribute("x5-video-player-type","h5-page"),t.setAttribute("t7-video-player-type","h5-page"),r.type="video/mp4",t.appendChild(r),t}function vl(t,r=!1){const a=document.createElement("audio");return a.muted=!0,a.autoplay=!1,a.loop=r,a.src=t,a}function Qi(){return y.stages.list.find(t=>t.stageType===H.StartStage)}function _l(){return store.stages.list.find(t=>t.stageType===StageType.OverlayStage)}function qa(t){if(y.video.currentPlayingId!==""){const a=y.video.videoPlays.get(y.video.currentPlayingId);a==null||a.pause()}const r=y.video.videoPlays.get(t);setTimeout(()=>{r==null||r.start()},0)}function Za(t){var r;(r=y.audio.getById(t))==null||r.restart()}function rn(t){return t*store.config.scale}function wl(){const t=Se.getScreenSize(),r=t.width,a=t.height,u=Math.min(r,a),c=Math.max(r,a);return{width:u,height:c}}function Fe(){const{width:t,height:r}=Ce(!0),{width:a,height:u}=wl();let c=Math.min(a/t,u/r);if(!ut()&&be.desktop()&&y.config.adNetwork!==yl.WebPC&&(c=1),ut()&&be.desktop()){let b=window.innerWidth,k=window.innerHeight;b>k&&([b,k]=[k,b]),c=Math.min(b/t,k/r)}return c}function l0(){const{width:t,height:r}=Ce(),a=store.config.scale;return{width:t*a,height:r*a}}function Ka(t,r,a,u){y.timerManager.push({cid:t,stageCID:r,countdown:a,cycleTiming:u,callback:()=>{u||gl(t)},replay:()=>{ml(t)}})}function Kn(t,r,a=!0){return Ie(this,null,function*(){return yield new Promise((u,c)=>{const b=document.createElement("button"),k=new(et())(b,{text:()=>t,action:()=>"copy",container:typeof r=="object"?r:document.body});k.on("success",T=>{k.destroy(),u(T)}),k.on("error",T=>{k.destroy(),c(T)}),a&&document.body.appendChild(b),b.click(),a&&document.body.removeChild(b)})})}function _r(t){y.widgets.getByStageCID(t).filter(a=>a.type===$.Audio).forEach(a=>{const u=y.audio.getById(a.cid);u!==void 0&&u.playing&&u.stop()})}function as(t){store.widgets.getByStageCID(t).filter(a=>a.type===widgetType.Audio).forEach(a=>{const u=store.audio.getById(a.cid);u!==void 0&&u.playing&&u.pause()})}function de(t){store.widgets.getByStageCID(t).filter(a=>a.type===widgetType.Audio).forEach(a=>{const u=store.audio.getById(a.cid);u!==void 0&&u.playing&&u.play()})}function Ln(t){const r=y.video.videoPlays.get(t);r!==void 0&&r.pause()}function Ja(t){y.widgets.getByStageCID(t).filter(a=>a.type===$.Interval).forEach(a=>{var u;(u=y.timerManager.getById(a.cid))==null||u.stop()})}function bl(t){y.timerManager.removeByStageCID(t)}function Fr(t){const r=y.widgets.getByStageCID(t).filter(u=>[$.Audio,$.Gif,$.Image,$.Video,$.Sequence].includes(u.type)).map(u=>u.materialCID);return y.assets.list.filter(u=>r.includes(u.id))}function c0(t,r,a){return t>=r&&t<=a}function Sl(t){const r=y.widgets.getById(t);return r===void 0?!1:r.groupCID!==""}function Il(t){let r,a,u,c,b,k;return t.isBorderEnabled&&(t.type===$.Line?c="border-top:"+String(t.style.borderWidth)+"px "+(t.style.borderStyle!==""?t.style.borderStyle:"solid")+" "+t.style.borderColor:t.type===$.Text?k=`text-stroke:${t.style.borderWidth}px ${t.style.borderColor};-webkit-text-stroke:${t.style.borderWidth}px ${t.style.borderColor}`:r="border:"+String(t.style.borderWidth)+"px "+(t.style.borderStyle!==""?t.style.borderStyle:"solid")+" "+t.style.borderColor),t.isShadowEnabled&&(t.type===$.Text?b=`text-shadow: ${t.shadowX}px ${t.shadowY}px ${t.shadowBlur}px ${t.shadowColor}`:a=`box-shadow: ${t.shadowX}px ${t.shadowY}px ${t.shadowBlur}px ${t.shadowColor}`),t.isBackgroundEnabled&&(u="background:"+t.style.background),`vertical-align: top; width: 100%; height: 100%;
    ${t.style.borderRadius!==""?"border-radius:"+t.style.borderRadius:"0px"};
    ${u!==void 0?u:""};
    ${a!==void 0?a:""};
    ${c!==void 0?c:""};
    ${b!==void 0?b:""};
    ${k!==void 0?k:""};
    ${r!==void 0?r:""};
    ${t.style.lineHeight>0?`line-height: ${t.style.lineHeight}px`:""};
    ${t.style.letterSpacing!==0?`letter-spacing: ${t.style.letterSpacing}px`:""};
    ${t.style.textDecoration!==""?`text-decoration: ${t.style.textDecoration}`:""};
    ${t.style.alignment!==""?`text-align: ${t.style.alignment}`:""};
    ${t.style.typeface!==""?`font-family: ${t.style.typeface}`:""};
    ${t.style.fontSize!==0?`font-size: ${t.style.fontSize}px`:""};
    ${t.style.fontWeight!==0?`font-weight: ${t.style.fontWeight}`:""};
    ${t.style.fontStyle!==""?`font-style: ${t.style.fontStyle}`:""};
    ${t.style.color!==""?`color: ${t.style.color}`:""};
    `}function os(t){_r(t),Ln(y.video.currentPlayingId),Ja(t)}function ji(t){return Ie(this,null,function*(){return yield new Promise(r=>{const a=new FileReader;a.onload=u=>{var c;r((c=u.target)==null?void 0:c.result)},a.readAsDataURL(t)})})}function ci(t,r,a=300){const u=t.style.transition,b=Object.keys(r).map(k=>`${k} ${a}ms`);for(const k in r)t.style.setProperty(k,r[k]);t.style.transition=b.join(","),t.addEventListener("transitionend",()=>{t.style.transition=u},{once:!0})}const ta=300;function ss(t){return t.split(".").pop()}function us(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t);if(a!==void 0)return a==null?void 0:a.currentState.isAvailable}function Qa(t){const r=ss(t);if(r===void 0)return!0;const a=us(r);return a===void 0?!0:a}function ls(t,r){const a=document.createElement("script");a.type="text/javascript",a.src=r,t.appendChild(a)}const ja="root";class El{publish(r,a){Qa(r)&&bt().publish(r,a)}subscribe(r,a){bt().subscribe(r,a)}}const yt=new El;function to(t){yt.subscribe(F.OnLoadingStart,(r,a)=>{t.onStartLoadResource!==void 0&&t.onStartLoadResource()}),yt.subscribe(F.OnLoadingFinish,(r,a)=>{t.onLoadResource!==void 0&&t.onLoadResource()}),yt.subscribe(`${F.Release}.${oe.ReleaseAll}`,(r,a)=>{t.onMouseEvent!==void 0&&t.onMouseEvent(a.cid)}),yt.subscribe(F.LinkAddress,(r,a)=>{t.onJumpToLink!==void 0&&t.onJumpToLink(a.link)}),yt.subscribe(F.JumpOtherStage,(r,a)=>{t.onEnterStage!==void 0&&t.onEnterStage(a.cid)}),yt.subscribe(F.OnFinish,(r,a)=>{t.onFinish!==void 0&&t.onFinish()})}var cs=(t=>(t.Unload="unload",t.Loading="loading",t.Done="done",t.Fail="fail",t))(cs||{});const se=cs;var Xe=(t=>(t.Horizontal="horizontal",t.Vertical="vertical",t))(Xe||{});const eo=Xe;function fi(){y.stages.list.some(t=>t.stageType===H.LoadingStage)||y.stages.list.push({cid:"s1634627993109-123456",index:3,isLocked:!1,isOverlyingStageEnabled:!1,isPortrait:!0,overlyingStageIndex:1,stageType:H.LoadingStage,title:"\u52A0\u8F7D\u821E\u53F0",widgets:[],fillColor:"",fillColorEnable:!1})}function fs(){const t=y.stages.getOverlayStage();t===void 0||t.isOverlyingStageEnabled||y.events.setList(y.events.list.filter(r=>{const a=y.widgets.getById(r.targetCID);return!(a!==void 0&&a.stageCID===t.cid)}))}function ds(){const t=y.stages.getLoadingStage(),r=y.stages.getStartStage(),a=1,u=2,c=6,b=Date.now();if(!t.isOverlyingStageEnabled)return;const k=y.config.loadingStageConfig,{loadTextComponent:T,processComponent:S,loadIconComponent:N,beginButtonComponent:It,backgroundComponent:Vt}=k.components;let Ft=[];if(T.status===c&&T.ids!==null&&T.ids.length>0&&(Ft=Ft.concat(T.ids)),S.ids!==null&&S.ids.length>0&&(Ft=Ft.concat(S.ids)),N.status===a&&N.ids!==null&&N.ids.length>0&&(Ft=Ft.concat(N.ids)),!k.main.loadingStageAutoJumpStage&&Vt.status===c&&Vt.ids!==null&&Vt.ids.length>0&&(Ft=Ft.concat(Vt.ids)),Ft.forEach(he=>{const ue=y.widgets.getById(he);ue!==void 0&&y.events.list.push({cid:`event-${b}-${(0,ot.uniqueId)()}`,index:1,name:`event-name-${b}-${(0,ot.uniqueId)()}`,sourceAttr:"",sourceAttrCondition:"",sourceCID:t.cid,sourceEventName:F.OnLoadingFinish,sourceStageCID:t.cid,sourceType:$.Scene,sourceValue:"",targetActionEffect:"",targetAttr:"",targetAttrAction:Nt.InVisible,targetAttrOperation:"",targetCID:he,targetType:ue.type,targetValue:"",triggerCount:0,usedTriggerCount:0,triggerDelay:ta,addConditions:"[]",continueTrigger:xt.Enable})}),It.status!==u&&It.ids!==null&&It.ids.forEach(he=>{const ue=y.widgets.getById(he);ue!==void 0&&(ue.isShow=!1,!k.main.loadingStageAutoJumpStage&&y.events.list.push({cid:`event-${b}-${(0,ot.uniqueId)()}`,index:1,name:`event-name-${b}-${(0,ot.uniqueId)()}`,sourceAttr:"",sourceAttrCondition:"",sourceCID:t.cid,sourceEventName:F.OnLoadingFinish,sourceStageCID:t.cid,sourceType:$.Scene,sourceValue:"",targetActionEffect:"",targetAttr:"",targetAttrAction:Nt.Visible,targetAttrOperation:"",targetCID:he,targetType:ue.type,targetValue:"",triggerCount:0,usedTriggerCount:0,triggerDelay:ta,addConditions:"[]",continueTrigger:xt.Enable}))}),!k.main.loadingStageAutoJumpStage){const{width:he,height:ue}=Ce(t.isPortrait),Ve=`c${b}-${(0,ot.uniqueId)()}`;y.widgets.list.push({audioVolume:0,autoThrow:!1,autoTiming:!1,cid:Ve,countdown:0,cycleTiming:!1,groupCID:"",initialValue:0,initialValueEndRange:0,initialValueStartRange:0,isAutoPlay:!1,isAvailable:!1,isBackgroundEnabled:!1,isBorderEnabled:!1,isLoop:!1,isShadowEnabled:!1,isShow:!0,materialCID:"",name:"\u70ED\u533A_\u70B9\u51FB\u5F00\u59CB",resetLocked:!1,resourceID:0,shadowBlur:0,shadowColor:"",shadowX:0,shadowY:0,stageCID:t.cid,style:{alignment:"",background:"",borderColor:"",borderRadius:"",borderStyle:"",borderWidth:0,color:"",fontSize:14,fontStyle:"",fontWeight:0,height:ue,left:0,letterSpacing:0,lineHeight:0,opacity:100,rotate:0,textDecoration:"",top:0,typeface:"",width:he,zIndex:Math.max(...y.stages.getLoadingStage().widgets.map(ei=>ei.style.zIndex))+1},text:"",type:$.Hotspot,valueLocked:!1,isActionEnable:!0}),y.events.list.push({cid:`event-${b}-${(0,ot.uniqueId)()}`,index:1,name:`event-name-${b}-${(0,ot.uniqueId)()}`,sourceAttr:"TAP",sourceAttrCondition:"",sourceCID:Ve,sourceEventName:F.TriggerTypeClick,sourceStageCID:t.cid,sourceType:$.Hotspot,sourceValue:"",targetActionEffect:"",targetAttr:"",targetAttrAction:Nt.JumpToOtherStage,targetAttrOperation:"",targetCID:t.cid,targetType:$.Scene,targetValue:r.cid,triggerCount:0,usedTriggerCount:0,triggerDelay:0,addConditions:"[]",continueTrigger:xt.Enable}),y.events.list.push({cid:`event-${b}-${(0,ot.uniqueId)()}`,index:1,name:`event-name-${b}-${(0,ot.uniqueId)()}`,sourceAttr:"",sourceAttrCondition:"",sourceCID:t.cid,sourceEventName:F.OnLoadingFinish,sourceStageCID:t.cid,sourceType:$.Scene,sourceValue:"",targetActionEffect:"",targetAttr:"",targetAttrAction:Nt.triggerValidateEnable,targetAttrOperation:"",targetCID:Ve,targetType:$.Hotspot,targetValue:"",triggerCount:0,usedTriggerCount:0,triggerDelay:ta,addConditions:"[]",continueTrigger:xt.Enable})}}function Tl(){y.events.list.filter(r=>r.sourceEventName===F.Onload&&r.sourceType===$.Scene&&r.targetType===xt.PlayStart).forEach(r=>{const a=y.widgets.getById(r.targetCID);a!==void 0&&(a.type===$.Interval?a.autoTiming&&(a.autoTiming=!1):a.isAutoPlay&&(a.isAutoPlay=!1))})}function Al(){y.widgets.list.forEach(t=>{const r=y.widgets.getById(t.groupCID);r!==void 0&&(t.style.top=t.style.top-r.style.top,t.style.left=t.style.left-r.style.left)})}function $l(){fs(),fi(),ds(),Tl(),Al()}function xl(){typeof window.__ROOT_STATE__=="string"&&(window.__ROOT_STATE__=JSON.parse(window.__ROOT_STATE__));let{STAGE_LIST:t,MATERIAL_LIST:r,COMPONENT_LIST:a,EVENT_LIST:u,PROJECT_CONFIG:c,LOADING_STAGE_CONFIG:b}=window.__ROOT_STATE__;r===null&&(r=[]),no(c),Cl(t),kl(a),zr(r,a),Ol(u),ps(b),document.title===""&&(document.title=c.name),dt.scale=Fe(),window.__ROOT_VIDEO__=null,window.__RESOURCE_MAP__=null,window.__ROOT_STATE__=null,window.store=y,$l(),ht.currentStageCID=ht.getLoadingStage().isOverlyingStageEnabled?ht.getLoadingStage().cid:""}function Cl(t){ht.setList(t.map(r=>({cid:r.cid,index:r.index,isLocked:r.isLocked,isOverlyingStageEnabled:r.isOverlyingStageEnabled,overlyingStageIndex:r.overlyingStageIndex,stageType:r.stageType,title:r.title,isPortrait:r.stageDirection===eo.Vertical,fillColor:r.fillColor,fillColorEnable:r.fillColorEnable})))}function zr(t,r){const a=t.map(u=>{const c=r.filter(b=>b.materialCID===u.cid);return{type:u.type,sizeHeight:u.sizeHeight,sizeWidth:u.sizeWidth,id:u.cid,status:se.Unload,src:window.__RESOURCE_MAP__[u.cid],widgetIds:c.map(b=>b.cid),startRange:u.startRange,endRange:u.endRange,resourceID:u.resourceID,sequenceFPS:u.sequenceFPS,sequenceIndexSlice:u.sequenceIndexSlice,sequenceTime:u.sequenceTime}});P.setList(a)}function kl(t){const r=t.map(a=>({cid:a.cid,stageCID:a.stageCID,type:a.type,groupCID:a.groupCID,isAvailable:a.isAvailable,isActionEnable:a.isActionEnable,isShow:a.isShow,materialCID:a.materialCID,countdown:a.countdown,isAutoPlay:a.isAutoPlay,isLoop:a.isLoop,isBorderEnabled:a.isBorderEnabled,isBackgroundEnabled:a.isBackgroundEnabled,autoTiming:a.autoTiming,text:a.text,audioVolume:a.audioVolume,isShadowEnabled:a.isShadowEnabled,shadowBlur:a.shadowBlur,shadowColor:a.shadowColor,shadowX:a.shadowX,shadowY:a.shadowY,initialValue:a.initialValue,resetLocked:a.resetLocked,valueLocked:a.valueLocked,initialValueEndRange:a.initialValueEndRange,initialValueStartRange:a.initialValueStartRange,autoThrow:a.autoThrow,cycleTiming:a.cycleTiming,name:a.name,resourceID:a.resourceID,style:{top:a.y,left:a.x,zIndex:a.zIndex,width:a.width,height:a.height,rotate:a.rotate,opacity:a.opacity,background:a.background,borderColor:a.borderColor,borderRadius:a.borderRadius,borderStyle:a.borderStyle,borderWidth:a.borderWidth,lineHeight:a.lineHeight,letterSpacing:a.letterSpacing,fontSize:a.fontSize,fontWeight:a.fontWeight,textDecoration:a.textDecoration,alignment:a.alignment,typeface:a.typeface,fontStyle:a.fontStyle,color:a.color}}));O.setList(r)}function Ol(t){Ct.setList(t.map(r=>({cid:r.cid,name:r.name,index:r.index,sourceAttr:r.sourceAttr,sourceAttrCondition:r.sourceAttrCondition,sourceCID:r.sourceCID,sourceEventName:r.sourceEventName,sourceStageCID:r.sourceStageCID,sourceType:r.sourceType,sourceValue:r.sourceValue,targetAttr:r.targetAttr,targetAttrAction:r.targetAttrAction,targetAttrOperation:r.targetAttrOperation,targetCID:r.targetCID,targetType:r.targetType,targetValue:r.targetValue,targetActionEffect:r.targetActionEffect,triggerCount:r.triggerCount,usedTriggerCount:0,triggerDelay:r.triggerDelay,addConditions:r.addConditions,continueTrigger:r.continueTrigger}))),Ct.list}function no(t){dt.name=t.name,dt.isPortrait=t.canvasType!=="LANDSCAPE",dt.ratio=t.aspectRatio,dt.kind=t.kind,dt.adNetwork=t.adNetwork}function ps(t){const r=(0,ot.keyBy)(t.Components,"label");dt.loadingStageConfig.components=r,dt.loadingStageConfig.main={loadingStageAutoJumpStage:t.Main.loadingStageAutoJumpStage,processFloorComponentId:t.Main.processFloorComponentId}}function Jn(t){const r=ht.list,a=document.createDocumentFragment();r.forEach(u=>{const c=document.createElement("div");switch(c.id=u.cid,c.classList.add("app-stage"),u.stageType){case H.ExceptionStage:c.classList.add("exception-stage");break;case H.OverlayStage:c.classList.add("overlay-stage");break;case H.RotateStage:c.classList.add("rotate-stage"),c.classList.add("normal-stage");break;case H.StartStage:c.classList.add("start-stage"),c.classList.add("normal-stage");break;case H.LoadingStage:c.classList.add("loading-stage"),c.classList.add("normal-stage");break;default:c.classList.add("normal-stage");break}u.fillColorEnable&&(c.style.backgroundColor=u.fillColor),a.appendChild(c)}),t.appendChild(a)}function ea(t){const r=document.createDocumentFragment();Ll(t).forEach(k=>{r.appendChild(k)});const u=y.widgets.getByStageCID(t).filter(k=>[$.Image,$.Gif,$.Hotspot,$.Rect,$.Mask,$.Text,$.Line,$.Video,$.Sequence].includes(k.type));if(y.stages.getById(t)===void 0)return;u.forEach(k=>{const T=document.createElement("div"),S=document.createElement("div");switch(T.classList.add("app-widget"),T.id=k.cid,T.style.cssText=Mr(k),S.classList.add("element"),S.style.cssText=Il(k),T.appendChild(S),k.type){case $.Image:case $.Gif:{const N=document.createElement("img");T.classList.add("app-image"),N.classList.add(k.type);const It=P.getById(k.materialCID);It!==void 0&&(N.setAttribute("src",It.src),N.setAttribute("data-src",It.src)),S.appendChild(N);break}case $.Sequence:S.innerHTML=`<canvas class="${$.Sequence}" id="apng-${k.cid}" />`;break;case $.Hotspot:T.classList.add("muses-HOTSPOT");break;case $.Text:{T.classList.add("app-text");const N=document.createElement("span");N.classList.add("inner-text"),N.innerText=k.text,S.appendChild(N);break}case $.Line:T.classList.add("app-line"),S.style.setProperty("transform","scale3d(1, 1, 1)"),S.innerHTML='<span class="inner-line"></span>';break;case $.Video:T.classList.add("app-video"),S.innerHTML=`<canvas id="canvas-${k.cid}" width="${k.style.width}" height="${k.style.height}" />`;break}Sl(k.cid)?r.querySelector(`#${k.groupCID} .element`).appendChild(T):r.appendChild(T)});const b=document.getElementById(t);b!==null&&b.appendChild(r)}function Ll(t){const r=[];return y.widgets.getByStageCID(t).filter(u=>u.type===$.Group).forEach(u=>{const c=document.createElement("div");c.classList.add("app-group"),c.style.cssText=Mr(u),c.id=u.cid,c.style.display=u.isShow?"block":"none",c.style.visibility="visible";const b=document.createElement("div");b.classList.add("element"),c.appendChild(b),r.push(c)}),r}function Pl(){const t=document.getElementById("stage");Jn(t),hs(),ht.list.forEach(r=>{ea(r.cid)})}function f0(){stage.list.forEach(t=>{})}function di(t){ro(t,!0)}function Sn(t){ro(t,!1)}function ro(t,r){const a=document.getElementById(t);a!==null&&(r?a.style.display="block":a.style.display="none")}function hs(){const t=y.stages.list.filter(u=>u.isPortrait!==y.config.isPortrait),{width:r,height:a}=Ce();t.forEach(u=>{const c=document.getElementById(u.cid),b=y.config.isPortrait?90:-90;c!==null&&(c.style.width=`${a}px`,c.style.height=`${r}px`,c.style.top="50%",c.style.left="50%",c.style.transform=`translate(-50%, -50%) rotate(${b}deg)`)})}function Dl(t){yt.publish(`${F.PassiveEventChange}.${t}`,{cid:t})}function Rl(t){yt.publish(`${F.PassiveShow}.${t}`,{cid:t})}function gs(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({isShow:!0}),t.continueTrigger===xt.Enable&&Rl(t.targetCID))}function Bl(t){yt.publish(`${F.PassiveHide}.${t}`,{cid:t})}function pi(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({isShow:!1}),t.continueTrigger===xt.Enable&&Bl(t.targetCID))}function B(t){yt.publish(`${F.IntervalStart}.${t}`,{cid:t})}function W(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(Ka(a.cid,a.stageCID,a.currentState.countdown,a.currentState.cycleTiming),t.continueTrigger===xt.Enable&&B(t.targetCID))}function V(t){yt.publish(`${F.IntervalStop}.${t}`,{cid:t})}function ft(t){y.timerManager.stop(t.targetCID)&&(t.continueTrigger===xt.Enable&&V(t.targetCID))}function kt(t){yt.publish(`${F.IntervalPause}.${t}`,{cid:t})}function Ht(t){y.timerManager.pause(t.targetCID)&&(t.continueTrigger===xt.Enable&&kt(t.targetCID))}function Ee(t){yt.publish(`${F.IntervalContinue}.${t}`,{cid:t})}function ee(t){y.timerManager.continue(t.targetCID)&&(t.continueTrigger===xt.Enable&&Ee(t.targetCID))}function io(t,r){yt.publish(`${F.LinkAddress}.${t}`,{cid:t,link:r})}function Nl(t){Se.openAppStore(t.targetValue),io(t.targetCID,t.targetValue)}function an(t){const r=O.getById(t);if(r!==void 0)switch(r.type){case $.Video:yt.publish(`${F.VideoStart}.${t}`,{cid:t});break;case $.Audio:yt.publish(`${F.AudioStart}.${t}`,{cid:t});break;case $.Sequence:yt.publish(`${F.SequenceStart}.${t}`,{cid:t});break}}function na(t){var r;switch(t.targetType){case $.Video:qa(t.targetCID);break;case $.Audio:Za(t.targetCID);break;case $.Sequence:(r=y.sequence.getById(t.targetCID))==null||r.replay();break}t.continueTrigger===xt.Enable&&an(t.targetCID)}function ms(t){yt.publish(`${F.Onload}.${t}`,{cid:t})}function wr(t){yt.publish(`${F.JumpOtherStage}.${t}`,{cid:t})}function ra(t){yt.publish(`${F.OnFinish}.${t}`,{cid:t})}function hi(t){y.widgets.getByStageCID(t).filter(a=>[$.Video,$.Audio,$.Sequence].includes(a.type)&&a.isAutoPlay).forEach(a=>{var u;switch(a.type){case $.Video:qa(a.cid);break;case $.Audio:Za(a.cid);break;case $.Sequence:(u=y.sequence.getById(a.cid))==null||u.replay();break}})}function Kt(t){var r;const a=(r=y.numericController)==null?void 0:r.getByStageId(t);a!==void 0&&a.forEach(u=>{u.init()})}function Ml(t){const r=y.widgets.getByStageCID(t).filter(u=>$.Handle===u.type);r.forEach(u=>{y.handleManeger.pushWidgets(u)});const a=ia(r);y.handleManeger.pushEvents(a)}function ys(t){y.handleManeger.clear()}function ia(t){const r=[];return t.forEach(a=>{const u=y.events.list.filter(c=>c.sourceCID===a.cid);r.push(...u)}),r}function Fl(t){return t===void 0?!1:Fr(t).filter(a=>a.status===se.Fail).length>0}function zl(){const t=y.stages.getExceptionStage();t.isOverlyingStageEnabled&&Er(t.cid).catch(()=>{})}var Ul=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});let gi;function Pn(t){return Ul(this,null,function*(){const r=y.stages.getRotateStage(),a=y.stages.getCurrentStage();if(!r.isOverlyingStageEnabled||a.stageType===H.LoadingStage||y.stages.getNormalStages().filter(c=>c.isPortrait!==y.config.isPortrait).length>0)return;y.config.isPortrait!==t?(gi=y.stages.currentStageCID,yield Er(r.cid)):yield Er(gi)})}function Dn(){return y.stages.list.find(t=>t.stageType===H.LoadingStage)}function Vl(t,r){const{width:a,height:u}=getAdSize();r?rotateVertical(t,a):rotateHorizontal(t,u)}function ao(t){return store.widgets.getByStageCID(t).find(r=>r.type===WidgetType.Video)}function vs(t){var r;(r=y.video.videoPlays.get(y.video.currentPlayingId))==null||r.stop()}function Yl(t){var r;const a=(r=store.numericController)==null?void 0:r.getByStageId(t);a!==void 0&&a.forEach(u=>{u.reset()})}function aa(t){return y.stages.list.filter(a=>a.stageType===H.Finish).map(a=>a.cid).includes(t)}function Xl(t){var r;(r=store.video.videoPlays.get(store.video.currentPlayingId))==null||r.pause(),pauseAudioByStageId(t),store.timerManager.stop()}function oa(t){var r;(r=store.video.videoPlays.get(store.video.currentPlayingId))==null||r.continue(),continueAudioByStageId(t),store.timerManager.continue()}function Rn(t){const r=y.stages.getById(t);return r===void 0?!1:[H.StartStage,H.Finish,H.NormalStage].includes(r.stageType)}function sa(){Rn(y.stages.currentStageCID)&&(be.desktop()||y.config.isPortrait!==be.portrait()&&Pn(be.portrait()).finally(()=>{}))}function _s(t){y.widgets.getByStageCID(t).filter(a=>$.Interval===a.type&&a.autoTiming).forEach(a=>{var u;const c=(u=y.stateManager)==null?void 0:u.getById(a.cid);c!==void 0&&Ka(c.cid,c.stageCID,c.currentState.countdown,c.currentState.cycleTiming)})}var ws=(t=>(t.Image="IMAGE",t.Audio="AUDIO",t.Video="VIDEO",t.GIF="GIF",t.Sequence="SEQUENCE",t))(ws||{});const Ur=ws;var ua=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function la(t){return ua(this,null,function*(){return yield new Promise((r,a)=>{const u=Ji();t.ref=u,u.addEventListener("canplay",()=>{t.status=se.Done,u.play().then(()=>{}).catch(b=>{u.currentTime=0,u.removeEventListener("timeupdate",c,!1),r(t)})},{once:!0});const c=()=>{u.currentTime>=.1&&u.pause()};u.addEventListener("timeupdate",c,!1),u.addEventListener("pause",()=>{u.removeEventListener("timeupdate",c,!1),u.currentTime=0,r(t)},{once:!0}),u.addEventListener("error",b=>{t.status=se.Fail,a(b)},{once:!0}),u.src=t.src,u.load()})})}var oo=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Hl(t){return oo(this,null,function*(){return yield new Promise((r,a)=>{t.status=se.Loading,rs(t.src).then(u=>{const c=Ji();c.src=u,t.src=u,t.ref=c,c.addEventListener("canplay",()=>{t.status=se.Done,c.play().then(()=>{}).catch(k=>{c.currentTime=0,c.removeEventListener("timeupdate",b,!1),r(t)})},{once:!0});const b=()=>{c.currentTime>=.1&&(c.removeEventListener("timeupdate",b,!1),c.pause(),c.currentTime=0,r(t))};c.addEventListener("timeupdate",b,!1),c.addEventListener("error",k=>{t.status=se.Fail,a(k)},{once:!0}),c.load()}).catch(u=>{t.status=se.Fail,a(u)})})})}let ca;["wechat","xijing","xijing_template","share"].includes("douyin_live")?ca=Hl:ca=la;const Wl=ca;var bs=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Te(t){return bs(this,null,function*(){return yield new Promise((r,a)=>{t.status=se.Loading;const u=new XMLHttpRequest;u.open("GET",t.src,!0),u.responseType="blob",u.onload=()=>bs(this,null,function*(){if(u.status>=200&&u.status<=206){if(t.status=se.Done,t.type===Ur.Video){t.src=URL.createObjectURL(u.response);const c=Ji();c.src=t.src,t.ref=c}else t.src=yield ji(u.response);r(t)}else t.status=se.Fail,a(new Error)}),u.onerror=c=>{t.status=se.Fail,a(c)},u.send()})})}var Pe=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Gl(t){return Pe(this,null,function*(){return yield new Promise((r,a)=>{t.status=se.Loading;const u=new Image;u.addEventListener("load",()=>{t.status=se.Done,t.ref=u,r(t)},{once:!0}),u.addEventListener("error",c=>{t.status=se.Fail,a(c)},{once:!0}),u.src=t.src})})}var ql=ae(231),Ss=ae.n(ql);function so(t){yt.publish(`${F.Replay}.${t}`,{cid:t})}function mi(t){const r=O.getById(t);if(r!==void 0)switch(r.type){case $.Video:yt.publish(`${F.VideoEnd}.${t}`,{cid:t});break;case $.Audio:yt.publish(`${F.AudioEnd}.${t}`,{cid:t});break;case $.Sequence:yt.publish(`${F.SequenceEnd}.${t}`,{cid:t});break}}var yi=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});class uo{constructor(r,a){const u=Ss()(r.slice(0));if(this.cid=a.cid,this.stageCID=a.stageCID,u instanceof Error)throw new Error("Not APNG");this.apng=u,this.apng}initPlayer(){return yi(this,null,function*(){const r=document.getElementById(`apng-${this.cid}`);this.player=yield this.apng.getPlayer(r.getContext("2d")),this.player,this.handleEnd()})}replay(){if(this.player===void 0)return!1;this.player.stop();const r=this.player;return this.timeoutID=setTimeout(()=>{r.play()},100),!0}play(){return this.player===void 0?!1:(this.player.paused&&this.player.play(),!0)}pause(){return this.player===void 0?!1:(this.player.pause(),this.timeoutID!==void 0&&clearTimeout(this.timeoutID),!0)}stop(){return this.player===void 0?!1:(this.player.stop(),this.timeoutID!==void 0&&clearTimeout(this.timeoutID),!0)}handleEnd(){var r;(r=this.player)==null||r.on("end",()=>{var a;const u=(a=y.stateManager)==null?void 0:a.getById(this.cid);u!==void 0&&(u.currentState.isLoop?(this.replay(),so(this.cid)):mi(this.cid))})}}const Vr=uo;class fa{constructor(r,a){this.index=0,this.isPlaying=!1,this.cid=a.cid,this.stageCID=a.stageCID;const u=store.assets.getById(a.materialCID);this.fps=u.sequenceFPS,this.time=u.sequenceTime,this.sequenceIndexSlice=JSON.parse(u.sequenceIndexSlice),this.width=a.style.width,this.height=a.style.height,this.canvas=document.getElementById(`apng-${a.cid}`),this.src=u.src;const c=u.ref,b=this.width/u.sizeWidth;this.canvas.style.setProperty("background-size",`${c.width*b}px ${this.height}px`),this.drawImage()}drawImage(){this.canvas.style.setProperty("background-position",`-${this.width*this.sequenceIndexSlice[this.index]}px 0px`)}draw(){this.drawImage(),this.index>=this.sequenceIndexSlice.length-1?this.handleEnd():(this.index+=1,store.timerManager.push({cid:this.cid,stageCID:this.stageCID,countdown:this.time/this.sequenceIndexSlice.length,cycleTiming:!1,callback:()=>{setTimeout(()=>{this.draw()},0)}}))}replay(){return this.index=0,this.play(),!0}play(){return this.isPlaying||(this.isPlaying=!0,this.draw()),!0}pause(){return this.isPlaying?(store.timerManager.remove(this.cid),this.isPlaying=!1,!0):!1}stop(){return store.timerManager.remove(this.cid),this.index=0,this.isPlaying=!1,this.drawImage(),!0}handleEnd(){var r;this.isPlaying=!1;const a=(r=store.stateManager)==null?void 0:r.getById(this.cid);a!==void 0&&(a.currentState.isLoop?(this.replay(),onPlayingReplay(this.cid)):onPlayingFinish(this.cid))}}const da=null,br=Vr;var Is=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Zl(t){return Is(this,null,function*(){return yield new Promise((r,a)=>{t.status=se.Loading;const u=new XMLHttpRequest;u.open("GET",t.src,!0),u.responseType="arraybuffer",u.onload=()=>Is(this,null,function*(){if(u.status>=200&&u.status<=206){t.status=se.Done;const c=[];t.widgetIds.forEach(b=>{const k=y.widgets.getById(b);if(k!==void 0&&!y.sequence.list.has(b)){const T=new br(u.response,k);y.sequence.list.set(b,T);const S=document.getElementById(`apng-${b}`);S.width=T.apng.width,S.height=T.apng.height,c.push(T.initPlayer())}}),yield Promise.all(c),r(t)}else t.status=se.Fail,a(new Error)}),u.onerror=c=>{t.status=se.Fail,a(c)},u.send()})})}for(var Yr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",vi=typeof Uint8Array=="undefined"?[]:new Uint8Array(256),pa=0;pa<Yr.length;pa++)vi[Yr.charCodeAt(pa)]=pa;var co=function(t){var r=new Uint8Array(t),a,u=r.length,c="";for(a=0;a<u;a+=3)c+=Yr[r[a]>>2],c+=Yr[(r[a]&3)<<4|r[a+1]>>4],c+=Yr[(r[a+1]&15)<<2|r[a+2]>>6],c+=Yr[r[a+2]&63];return u%3===2?c=c.substring(0,c.length-1)+"=":u%3===1&&(c=c.substring(0,c.length-2)+"=="),c},_i=function(t){var r=t.length*.75,a=t.length,u,c=0,b,k,T,S;t[t.length-1]==="="&&(r--,t[t.length-2]==="="&&r--);var N=new ArrayBuffer(r),It=new Uint8Array(N);for(u=0;u<a;u+=4)b=vi[t.charCodeAt(u)],k=vi[t.charCodeAt(u+1)],T=vi[t.charCodeAt(u+2)],S=vi[t.charCodeAt(u+3)],It[c++]=b<<2|k>>4,It[c++]=(k&15)<<4|T>>2,It[c++]=(T&3)<<6|S&63;return N},Es=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function g(t){return Es(this,null,function*(){return yield new Promise((r,a)=>{t.status=se.Loading;try{const u=_i(t.src.replace("data:image/png;base64,","")),c=[];t.widgetIds.forEach(b=>{const k=y.widgets.getById(b);if(k!==void 0&&!y.sequence.list.has(b)){const T=new br(u,k);y.sequence.list.set(b,T);const S=document.getElementById(`apng-${b}`);S.width=T.apng.width,S.height=T.apng.height,c.push(T.initPlayer())}}),Promise.all(c).then(()=>{t.status=se.Done,r(t)}).catch(()=>{})}catch(u){t.status=se.Fail,a(u)}})})}var Xr=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function ha(t){return Xr(this,null,function*(){return t.src.startsWith("data:image")?yield g(t):yield Zl(t)})}const on=ha;class zt{constructor(r){this.el=document.getElementById(`canvas-${r.cid}`),this.ctx=this.el.getContext("2d")}drawImage(r,a,u){this.ctx.drawImage(r,0,0,a,u)}}var ga=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});class Kl{constructor({widgetId:r,width:a,height:u}){this.widgetId=r,this.width=a,this.height=u,this.play=this.play.bind(this),this.draw=this.draw.bind(this),this.canvas=new zt(this.widget),this.startRange=0,this.endRange=0,this.rafRef=0,this.bindEndedEvent()}bindEndedEvent(){this.ref.addEventListener("ended",()=>{this.loop?this.start().finally(()=>{so(this.widgetId)}):(this.drawImage(),this.handleEnded())},!1)}play(){return ga(this,null,function*(){return yield this.ref.play().then(()=>{s.currentPlayingId!==""&&s.currentPlayingId!==this.widgetId&&this.cancel(),this.draw(),s.currentPlayingId=this.widgetId}).catch(r=>{console.info("video play: ",r)})})}continue(){return ga(this,null,function*(){this.paused&&(yield this.play())})}start(){return ga(this,null,function*(){this.ref.currentTime=this.startRange,yield this.play()})}draw(){this.drawImage(),this.raf()}raf(){this.rafRef=requestAnimationFrame(()=>{this.drawImage(),this.raf()})}drawImage(){this.canvas.drawImage(this.ref,this.width,this.height)}renderCover(){return ga(this,null,function*(){return yield new Promise(r=>{be.android()?(this.ref.addEventListener("timeupdate",()=>{setTimeout(()=>{this.drawImage(),r()},10)},{once:!0}),this.ref.currentTime=this.startRange):(this.ref.currentTime=this.startRange,this.drawImage(),r())})})}cancel(){cancelAnimationFrame(this.rafRef)}handleEnded(){y.video.currentPlayingId===this.widgetId&&(mi(y.video.currentPlayingId),this.cancel())}pause(){this.ref.pause(),this.cancel()}stop(){this.ref.pause(),this.ref.currentTime=this.startRange,this.cancel(),this.renderCover().catch(()=>{})}get ref(){return s.videoRefs.get(this.widgetId)}get paused(){return this.ref.paused}get ended(){return this.ref.ended}get widget(){return y.widgets.getById(this.widgetId)}get loop(){var r,a,u;return(u=(a=(r=y.stateManager)==null?void 0:r.getById(this.widgetId))==null?void 0:a.currentState.isLoop)!=null?u:!1}}var fo=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});class Hr extends null{constructor(r){var a,u;super(r),this.startRange=(a=store.assets.getById(this.widget.materialCID))==null?void 0:a.startRange,this.endRange=(u=store.assets.getById(this.widget.materialCID))==null?void 0:u.endRange}bindEndedEvent(){}start(){return fo(this,null,function*(){this.ref.currentTime=this.startRange,yield this.play(),this.checkVideoProcess()})}continue(){return fo(this,null,function*(){this.paused&&(yield this.play(),this.checkVideoProcess())})}checkVideoProcess(){if(this.checkingProcessRAF!==void 0)return;const r=()=>{this.checkingProcessRAF=requestAnimationFrame(()=>{this.ref.currentTime>=this.endRange?(this.ref.currentTime=this.endRange,this.checkingProcessRAF=void 0,this.handleEnded()):r()})};r()}handleEnded(){this.loop?this.start().then(()=>{onPlayingReplay(this.widgetId)}).catch(r=>{}):(this.pause(),this.ref.currentTime=this.endRange,this.drawImage(),onPlayingFinish(this.widgetId))}drawImage(){this.ref.currentTime<=this.endRange&&this.ref.currentTime>=this.startRange&&this.canvas.drawImage(this.ref,this.width,this.height)}renderCover(){return fo(this,null,function*(){return yield new Promise(r=>{this.ref.addEventListener("timeupdate",()=>{this.drawImage(),r()},{once:!0}),this.ref.currentTime=this.startRange})})}get widget(){return store.widgets.getById(this.widgetId)}get ref(){return videoStore.videoRefs.get(this.widgetId)}}const Jl=Kl;var Ts=ae(431);class Ql{constructor(r,a){this.fakePlaying=!1,this.playTimeMs=0,this.cid=a.cid,this.stageCID=a.stageCID;const u=this;this.sound=new Ts.Howl({src:[r],autoplay:!1,loop:!1,volume:a.audioVolume/100,onunlock(){u.sync()},onend(){u.loop||u.stop()}}),this.sound.on("end",this.handleEnded.bind(this))}restart(){this.play()}sync(){if(this.fakePlaying){const r=(Date.now()-this.playTimeMs)/1e3;this.fakePlaying=!1,r<this.duration&&this.sound.seek(r)}}play(){this.playing||(this.sound.play(),this.playTimeMs=Date.now(),this.fakePlaying=!this.playing)}continue(){this.playing||this.sound.play()}stop(){this.playing&&this.sound.stop()}pause(){this.playing&&this.sound.pause()}mute(r){this.sound.mute(r),r||this.sync()}handleEnded(){this.loop?so(this.cid):mi(this.cid)}volume(r){this.sound.volume(r)}changeLoop(r){this.sound.loop(r)}get playing(){return this.sound.playing()}get widget(){return y.widgets.getById(this.cid)}get duration(){return this.sound.duration()}get loop(){var r,a,u;return(u=(a=(r=y.stateManager)==null?void 0:r.getById(this.cid))==null?void 0:a.currentState.isLoop)!=null?u:!1}}const jl=Ql;class Qn{constructor(r,a){this.fakePlaying=!1,this.playTimeMs=0;var u,c;this.cid=a.cid,this.stageCID=a.stageCID,this.startRange=(u=store.assets.getById(this.widget.materialCID))==null?void 0:u.startRange,this.endRange=(c=store.assets.getById(this.widget.materialCID))==null?void 0:c.endRange;const b=this.startRange*1e3,k=this.endRange*1e3,T=this;this.sound=new Howl({src:[r],autoplay:!1,loop:!1,sprite:{fragment:[0,k-b,T.loop]},volume:a.audioVolume/100,onunlock(){T.sync()},onend(){T.loop||T.stop()}}),this.sound.on("end",this.handleEnded.bind(this))}restart(){this.play()}sync(){if(this.fakePlaying){const r=(Date.now()-this.playTimeMs)/1e3;this.fakePlaying=!1,r<this.duration&&this.sound.seek(r,this.soundId)}}play(){this.playing||(this.soundId=this.sound.play("fragment"),this.playTimeMs=Date.now(),this.fakePlaying=!this.playing)}continue(){this.playing||(this.soundId!==void 0?this.sound.play(this.soundId):this.soundId=this.sound.play("fragment"))}stop(){this.playing&&this.sound.stop()}pause(){this.playing&&this.sound.pause()}mute(r){this.sound.mute(r),r||this.sync()}handleEnded(){this.loop?onPlayingReplay(this.cid):onPlayingFinish(this.cid)}volume(r){this.sound.volume(r)}changeLoop(r){this.sound.loop(r,this.soundId)}get playing(){return this.sound.playing(this.soundId)}get widget(){return store.widgets.getById(this.cid)}get duration(){return this.sound.duration(this.soundId)}get loop(){var r,a,u;return(u=(a=(r=store.stateManager)==null?void 0:r.getById(this.cid))==null?void 0:a.currentState.isLoop)!=null?u:!1}}const p0=null,As=jl;var tc=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function ma(t){return tc(this,null,function*(){const r=[];return t.filter(a=>a.status===se.Unload).forEach(a=>{switch(a.type){case Ur.Video:r.push(Wl(a).then(u=>(u.widgetIds.forEach(c=>{const b=y.widgets.getById(c);b!==void 0&&!y.video.videoRefs.has(c)&&a!==void 0&&(y.video.videoRefs.set(c,a.ref),y.video.videoPlays.set(c,new Jl({widgetId:c,width:b.style.width,height:b.style.height})))}),u)));break;case Ur.Audio:a.src.startsWith("data:audio")?a.widgetIds.forEach(u=>{const c=y.widgets.getById(u);c!==void 0&&!y.audio.list.has(u)&&a!==void 0&&y.audio.list.set(u,new As(a.src,c))}):r.push(Te(a).then(u=>(u.widgetIds.forEach(c=>{const b=y.widgets.getById(c);b!==void 0&&!y.audio.list.has(c)&&a!==void 0&&y.audio.list.set(c,new As(a.src,b))}),u)));break;case Ur.Image:case Ur.GIF:r.push(Gl(a).then(u=>u));break;case Ur.Sequence:r.push(on(a).then(u=>u))}}),yield Promise.all(r)})}function In(t){yt.publish(`${F.OnLoadingStart}.${t}`,{cid:t})}function $s(t){yt.publish(`${F.OnLoadingFinish}.${t}`,{cid:t})}var ec=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function po(t){return ec(this,null,function*(){const r=Ga(t);if(r!==void 0){const a=y.video.videoPlays.get(r.cid);a!==void 0&&(yield a.renderCover())}})}var nc=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function xs(){return nc(this,null,function*(){if(y.config.loadingStageConfig.components.loadedBackgroundComponent.status!==6)return;const t=Qi(),r=document.getElementById(t.cid);yield po(t.cid),yo(t.cid),r.classList.add("active")})}function jn(t){const r=y.stages.getById(t);let a=y.widgets.getByStageCID(t);if((r==null?void 0:r.isOverlyingStageEnabled)===!0){const u=y.stages.getOverlayStage();a=a.concat(u!==void 0?u.widgets:[])}return a}function rc(){yt.publish(`${F.OnLoadingAllFinish}`,{})}var Wr=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function gn(){return Wr(this,null,function*(){const t=Dn();if(t===void 0)return;const r=Fr(t.cid);yield ma(r)})}function Cs(){return Wr(this,null,function*(){const t=Qi().cid,r=Dn();if(r===void 0)return;const a=r.cid;In(a);let u=Fr(t);if(y.stages.getById(t).isOverlyingStageEnabled){const b=y.stages.getOverlayStage();b!==void 0&&(u=u.concat(Fr(b.cid)))}try{yield ma(u)}catch(b){}$s(a),r.isOverlyingStageEnabled&&!y.config.loadingStageConfig.main.loadingStageAutoJumpStage&&(yield xs())})}function ic(){return Wr(this,null,function*(){const t=Dn();if(t===void 0)return;const r=t.cid;In(r);try{yield ma(y.assets.list)}catch(a){}y.config.resourcesLoaded=!0,$s(r),t.isOverlyingStageEnabled&&!y.config.loadingStageConfig.main.loadingStageAutoJumpStage&&(yield xs())})}function ac(){return Wr(this,null,function*(){const t=r=>{Cs().then(()=>{r()}).catch(()=>{}),ks().catch(()=>{})};return xe()&&be.ios()&&!ut()?yield we().then(()=>Wr(this,null,function*(){yield new Promise(r=>t(r))})):yield new Promise(r=>t(r))})}function ks(){return Wr(this,null,function*(){try{yield ma(y.assets.list)}catch(t){}y.config.resourcesLoaded=!0,rc()})}function oc(t){jn(t).filter(a=>a.type===$.Gif||a.type===$.Image).forEach(a=>{const u=document.querySelector(`#${a.cid} img`),c=u.getAttribute("data-src");u.src=c})}function sc(t,r){if(t!=null)if(t.src="",r.startsWith("data:image")){const a=dataURLtoBlob(r);t.src=URL.createObjectURL(a)}else if(r.startsWith("http://")||r.startsWith("//")){const a=new URL(r.startsWith("http://")?r:`http:${r}`),u=new URLSearchParams(a.search.slice(1));u.append("v",String(Math.random())),t.src=`${a.origin}${a.pathname}?${u.toString()}`}else t.src=`${r}?v=${Math.random()}`}var ho=(t=>(t.Landscape="landscape",t.Portrait="portrait",t))(ho||{});const Sr=ho;let Os;function ya(t,r=!1){const a=y.stages.getById(t);if(a===void 0)return;const u=fe()?Sr.Portrait:Sr.Landscape;if(Os!==u)if(Os=u,a.isPortrait)switch(u){case Sr.Landscape:Gr(t),go(t,r);break;case Sr.Portrait:wi(t),Ls(t,r);break}else switch(u){case Sr.Landscape:wi(t),go(t,r);break;case Sr.Portrait:Gr(t),Ls(t,r);break}}function Gr(t){yt.publish(`${F.OnDeviceRotation}.${Oe.overturnToReverse}.${t}`,{cid:t})}function wi(t){yt.publish(`${F.OnDeviceRotation}.${Oe.overtrunToSame}.${t}`,{cid:t})}function Ls(t,r){r&&(yt.publish(`${F.OnDeviceRotation}.${Oe.acrossToVertical}.${t}`,{cid:t}),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.OnDeviceRotation,sourceAttrCondition:Oe.acrossToVertical}))}function go(t,r){r&&(yt.publish(`${F.OnDeviceRotation}.${Oe.acrossToAcross}.${t}`,{cid:t}),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.OnDeviceRotation,sourceAttrCondition:Oe.acrossToAcross}))}function uc(t,r){t!==""&&(bl(t),Bn(t),_r(t),vs(t),sn(t),mo(t),Ir(t),ys(t),wr(t))}function Bn(t){var r;(r=y.stateManager)==null||r.resetByStageId(t)}function mo(t){y.elementAnimationMap.forEach((r,a)=>{a.includes(t)&&(r.cancel(),y.elementAnimationMap.delete(a))})}function Ir(t){y.events.getByStageId(t).forEach(r=>{r.usedTriggerCount=0})}function sn(t){y.widgets.getByStageCID(t).filter(a=>a.type===$.Sequence).forEach(a=>{const u=y.sequence.getById(a.cid);u!==void 0&&u.stop()})}var Ps=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Er(t,r=!0){return Ps(this,null,function*(){console.time("showStage: "),y.stages.getById(t)!==void 0&&(t!==y.stages.getStartStage().cid&&!y.config.resourcesLoaded&&(yield cc()),Si(t)&&(Kt(t),oc(t),yield po(t),bi(t),ya(t),hi(t),_s(t),is(t),Ml(t),uc(y.stages.currentStageCID,r),y.stages.currentStageCID=t,ms(t),aa(t)&&ra(t),sa(),console.timeEnd("showStage: ")))})}function lc(t){var r;(r=store.stateManager)==null||r.resetByStageId(t)}function bi(t){const r=y.stages.getOverlayStage();if(!Rn(t)){Nn();return}if(r===void 0||!r.isOverlyingStageEnabled||!Si(r.cid))return;const u=document.getElementById(r.cid).classList.contains("show")&&y.stages.currentStageCID!==y.stages.getLoadingStage().cid,c=y.stages.getById(t);if(c!==void 0){if(Nn(),c.stageType===H.RotateStage||c.stageType===H.LoadingStage){_r(r.cid);return}r.isOverlyingStageEnabled&&c.isOverlyingStageEnabled&&c.isPortrait===y.config.isPortrait?(yo(t),u||(hi(r.cid),_s(r.cid),ms(r.cid))):(_r(r.cid),y.stages.currentStageCID!==""&&y.stages.getLoadingStage().cid!==y.stages.currentStageCID&&wr(r.cid))}}function Nn(){document.querySelectorAll(".overlay-stage").forEach(r=>{r.classList.remove("show"),r.classList.remove("active")})}function yo(t){const r=y.stages.getById(t),a=y.stages.getOverlayStage();if(r!==void 0&&a!==void 0&&a.isOverlyingStageEnabled&&r.isOverlyingStageEnabled&&r.isPortrait===y.config.isPortrait){const u=r.overlyingStageIndex===1,c=document.getElementById(a.cid);c!==null&&(c.classList.add("show"),u?c.classList.remove("is-bottom"):c.classList.add("is-bottom"))}}function cc(){return Ps(this,null,function*(){return yield new Promise(t=>{const r=()=>{y.timerManager.push(a)},a={cid:"resoucres_loaded",stageCID:y.stages.currentStageCID,countdown:100,cycleTiming:!1,callback:()=>{if(!y.config.resourcesLoaded)r();else{const u=document.getElementById("load-effect");u!==null&&(u.style.display="none"),t()}}};if(y.config.resourcesLoaded)t();else{const u=document.getElementById("load-effect");u!==null&&(u.style.display="block"),os(y.stages.currentStageCID),r()}})})}function Si(t){return Fl(t)?(zl(),!1):!0}function fc(t){Er(t.targetValue,t.targetAttr===jt.Reset).catch(()=>{})}var Ds=Object.defineProperty,ke=Object.defineProperties,vo=Object.getOwnPropertyDescriptors,_o=Object.getOwnPropertySymbols,En=Object.prototype.hasOwnProperty,wo=Object.prototype.propertyIsEnumerable,Ii=(t,r,a)=>r in t?Ds(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,Tr=(t,r)=>{for(var a in r||(r={}))En.call(r,a)&&Ii(t,a,r[a]);if(_o)for(var a of _o(r))wo.call(r,a)&&Ii(t,a,r[a]);return t},Rs=(t,r)=>ke(t,vo(r));function De(t,r){const a=document.getElementById(r),u=a!=null?a:document.createElement("style");u.id=r,u.innerHTML=t,a===null&&document.head.appendChild(u)}function Bs(t,r,a,u){var c;const b=document.getElementById(t.targetCID),k=(c=store.stateManager)==null?void 0:c.getById(t.targetCID);if(!(b===null||k===void 0))try{const T=JSON.parse(t.targetActionEffect);if(u(),T.duration===0)return;const S=()=>{const ue=document.getElementById(N),Ve=JSON.parse(JSON.stringify(k.currentState.animation));delete Ve[N],k.setState({animation:Ve}),ue!==null&&ue.remove()};S();const N=`animation-${t.cid}`,It=`${N} ${T.duration}ms ease 0s ${T.loop} normal forwards running`,Vt=[],Ft=[];for(const ue in r)Vt.push(`${ue}: ${r[ue]};`);for(const ue in a)Ft.push(`${ue}: ${a[ue]};`);const he=`
        @keyframes ${N} {
          from {
            ${Vt.join("")}
          }
          to {
            ${Ft.join("")}
          }
        }
      `;De(he,N),k.setState({animation:Rs(Tr({},k.currentState.animation),{[N]:It})}),T.loop!=="infinite"&&store.timerManager.push({cid:N,stageCID:t.sourceStageCID,cycleTiming:!1,countdown:T.duration*Number(T.loop),callback:()=>{S()}})}catch(T){u()}}function Mn(t,r,a,u){var c;const b=document.getElementById(t.targetCID),k=(c=y.stateManager)==null?void 0:c.getById(t.targetCID),T=Ns(t),S=y.elementAnimationMap.get(T);if(!(b===null||k===void 0)){S!==void 0&&S.playState==="running"&&(S.cancel(),y.elementAnimationMap.delete(T));try{const N=JSON.parse(t.targetActionEffect);if(N.duration===0){u();return}const It=b.animate([r,a],{id:t.cid,duration:N.duration,iterations:N.loop==="infinite"?1/0:Number(N.loop),easing:N.easing});It.addEventListener("finish",()=>{y.elementAnimationMap.delete(T),u()},!1),y.elementAnimationMap.set(T,It)}catch(N){u()}}}function Ns(t){const r=y.widgets.getById(t.targetCID);return`${t.targetAttrAction}.${r.stageCID}.${t.targetCID}`}const Ms="-out",dc=[Ms,"-in"],qr=["transparent","move","rotate","zoom"];function zs(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),u=document.querySelector(`#${t.targetCID} .element`),c=Ns(t),b=y.elementAnimationMap.get(c);if(a===void 0||u===null)return;if(a.setState({elementAnimation:"0s none"}),y.outAnimationMap.has(t.targetCID)){const T=y.outAnimationMap.get(t.targetCID);a.setState({opacity:T}),y.outAnimationMap.delete(t.targetCID)}b!==void 0&&b.playState==="running"&&(b.cancel(),y.elementAnimationMap.delete(c));let k="";try{const T=Object.assign(Ke,JSON.parse(t.targetActionEffect)),{taketime:S,easing:N,range:It,loop:Vt}=T;let Ft=Vt==="infinite"?-1:Number(T.loop),he=`${t.targetValue}-${It}`;qr.includes(t.targetValue)&&(pc(t,T),he=`animation-${t.cid}`),k=`${S}ms ${N} 0s 1 normal both running ${he}`;const ue=()=>{a.setState({elementAnimation:k}),Ft>0&&(Ft-=1);const Ve=u.getAnimations()[0];u.getAnimations(),Ve!==void 0&&(y.elementAnimationMap.set(c,Ve),Ve.addEventListener("finish",()=>{t.targetValue.includes(Ms)?(y.outAnimationMap.set(t.targetCID,a.currentState.opacity),a.setState({opacity:0,elementAnimation:"0s none"})):a.setState({elementAnimation:"0s none"}),Ft===-1||Ft>0?setTimeout(()=>{ue()},T.splitTime):y.elementAnimationMap.delete(c)},!1))};ue()}catch(T){}}function pc(t,r){var a;const u=(a=y.stateManager)==null?void 0:a.getById(t.targetCID);let c={},b={};if(u===void 0)return;switch(t.targetValue){case"transparent":{c={opacity:String(u.currentState.opacity/100)},b={opacity:String(r.opacity/100)};break}case"move":{const[It,Vt]=u.currentState.position.split(",");c={transform:"translate(0px, 0px)"},b={transform:`translate(${r.X-Number(It)}px, ${r.Y-Number(Vt)}px)`};break}case"rotate":c={transform:"rotate(0deg)"},b={transform:`rotate(${r.degree}deg)`};break;case"zoom":{const[It,Vt]=u.currentState.size.split(",");c={transform:"scale(1, 1)"},b={transform:`scale(${r.W/Number(It)}, ${r.H/Number(Vt)})`};break}}const k=`animation-${t.cid}`,T=[],S=[];for(const It in c)T.push(`${It}: ${c[It]};`);for(const It in b)S.push(`${It}: ${b[It]};`);const N=`
      @keyframes ${k} {
        from {
          ${T.join("")}
        }
        to {
          ${S.join("")}
        }
      }
    `;De(N,k)}function hc(t){var r,a;const u=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);Kn((a=u==null?void 0:u.currentState.text)!=null?a:"").catch(c=>{console.info(c)})}function Ei(t,r){var a;if(((a=y.stateManager)==null?void 0:a.getById(t.targetCID))!==void 0){if(t.targetAttrOperation===jt.Reset)switch(t.targetValue){case xt.PrevValue:mc(t);break;case xt.InitValue:gc(t);break}t.targetAttr===Me.textCotext?bo(t):t.targetAttrOperation===_e.GetText?yc(t,r):Us(t)}}function gc(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),u=a==null?void 0:a.initialState.text;a==null||a.setState({text:u})}function mc(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),u=a==null?void 0:a.previousState.text;u!==void 0&&(a==null||a.setState({text:u}),void 0)}function bo(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);let u=String(a==null?void 0:a.currentState.text);const c=String(t.targetValue);switch(t.targetAttrOperation){case _e.EQ:u=c;break;case _e.Add:u+=c;break;case _e.AddPre:u=c+u}a==null||a.setState({text:u})}function Us(t){var r,a;const u=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);let c=String(u==null?void 0:u.currentState.text);const b=y.widgets.getById(t.targetValue),k=(a=y.stateManager)==null?void 0:a.getById(t.targetValue);let T="";switch((b==null?void 0:b.type)===$.Text?T=k==null?void 0:k.currentState.text:T=String(k==null?void 0:k.currentState.value),t.targetAttrOperation){case _e.EQ:c=T;break;case _e.Add:c+=T;break;case _e.AddPre:c=T+c;break}u==null||u.setState({text:c})}function yc(t,r){var a;if(r===void 0)return;let u=!0;const c=(a=y.stateManager)==null?void 0:a.getById(t.targetCID),{content:b,username:k}=r.payload;switch(t.targetAttr){case _e.Bullet:{t.sourceEventName===F.ReceiveBullet&&(c==null||c.setState({text:b}),u=!1);break}case _e.BulleterName:{t.sourceEventName===F.ReceiveBullet&&(c==null||c.setState({text:k}),u=!1);break}case _e.GiverName:{t.sourceEventName===F.ReceiveGift&&(c==null||c.setState({text:k}),u=!1);break}}u||void 0}var Vs=(t=>(t.EQ="EQ",t.NEQ="NEQ",t.LT="LT",t.LTE="LTE",t.GT="GT",t.GTE="GTE",t.ChangeBig="CHANGE_BIG",t.ChangeSmall="CHANGE_SMALL",t.ChangeAny="CHANGE_ANY",t.ChangeInit="CHANGE_INIT",t.ChangePrev="CHANGE_PREV",t))(Vs||{});const un=Vs;function va(t,r){const a=[];return t===r&&a.push(un.EQ),t>r&&a.push(un.GT),t>=r&&a.push(un.GTE),t<r&&a.push(un.LT),t<=r&&a.push(un.LTE),t!==r&&a.push(un.NEQ),a}function Ti(t){var r;const a=(r=y.numericController)==null?void 0:r.getById(t);if(a===void 0||a.value===null)return;const u=y.events.list.filter(c=>c.sourceCID===t&&c.sourceEventName===F.NumberCompare);u.forEach(c=>{switch(c.sourceAttr){case Ae.CompareSelf:vc(c,a,t);break;case Ae.CompareOtherComponent:So(c,a,t);break;case Ae.CompareInput:Ys(c,a,t);break}})}function vc(t,r,a){const u=r.value;let c=0;switch(t.sourceValue){case xt.InitValue:c=r.initialValue;break;case xt.PrevValue:c=r.prevValue;break}c!==null&&va(u,c).forEach(b=>{yt.publish(`${F.NumberCompare}.${Ae.CompareSelf}.${b}.${t.cid}.${a}`,{cid:a})})}function So(t,r,a){var u;const c=(u=y.numericController)==null?void 0:u.getById(t.sourceValue);c!==void 0&&c.value!==null&&va(r.value,c.value).forEach(b=>{yt.publish(`${F.NumberCompare}.${Ae.CompareOtherComponent}.${b}.${t.cid}.${a}`,{cid:a})})}function Ys(t,r,a){const u=Number(t.sourceValue);u!==void 0&&va(r.value,u).forEach(c=>{yt.publish(`${F.NumberCompare}.${Ae.CompareInput}.${c}.${t.cid}.${a}`,{cid:a})})}function Xs(t){var r,a;const u=(r=y.numericController)==null?void 0:r.getById(t.targetCID),c=(a=y.numericController)==null?void 0:a.getById(t.targetValue);if(u!==void 0&&c!==void 0){switch(t.targetAttrOperation){case nn.EQ:c.value!==null&&u.changeValue(c.value);break;case nn.Add:c.value!==null&&u.value!==void 0&&u.changeValue(u.value+c.value);break;case nn.Div:c.value!==null&&u.value!==void 0&&u.changeValue(u.value/c.value);break;case nn.Multi:c.value!==null&&u.value!==void 0&&u.changeValue(u.value*c.value);break;case nn.Sub:c.value!==null&&u.value!==void 0&&u.changeValue(u.value-c.value);break}t.continueTrigger===xt.Enable&&Ti(t.targetCID)}}function Hs(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({valueLocked:!0}),void 0)}function _a(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({valueLocked:!1}),void 0)}function _c(t){var r;const a=document.getElementById(t.targetCID),u=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(u===void 0||t.sourceEventName!==F.Dragging)return;const c=()=>{const k=JSON.parse(t.targetActionEffect),T=a.offsetLeft,S=a.offsetTop,[N,It]=u.currentState.position.split(",");k.backorigin?u.setState({position:`${N},${It},${Math.random()}`}):u.setState({position:`${T},${S}`})},b=()=>{requestAnimationFrame(()=>{const k=u.currentState.position,[T,S]=k.split(",");let N=y.events.deltaX,It=y.events.deltaY;y.stages.getCurrentStage().isPortrait!==fe()&&(x()?[N,It]=[-It,N]:[N,It]=[It,-N]);const Vt=t.targetValue===""?1:Number(t.targetValue),Ft=N*Vt,he=It*Vt;if(t.targetAttrOperation===jt.Following)switch(t.targetAttr){case jt.FollowingXY:a.style.left=`${Number(T)+Ft}px`,a.style.top=`${Number(S)+he}px`;break;case jt.FollowingX:a.style.left=`${Number(T)+Ft}px`;break;case jt.FollowingY:a.style.top=`${Number(S)+he}px`;break}else if(t.targetAttrOperation===jt.ReverseFollowing)switch(t.targetAttr){case jt.FollowingX:a.style.left=`${Number(T)-Ft}px`;break;case jt.FollowingY:a.style.top=`${Number(S)-he}px`;break;case jt.FollowingXY:a.style.left=`${Number(T)-Ft}px`,a.style.top=`${Number(S)-he}px`;break}y.events.isDragging?b():c()})};b()}function Ws(t){const r=O.getById(t);if(r!==void 0)switch(r.type){case $.Video:yt.publish(`${F.VideoStop}.${t}`,{cid:t});break;case $.Audio:yt.publish(`${F.AudioStop}.${t}`,{cid:t});break;case $.Sequence:yt.publish(`${F.SequenceStop}.${t}`,{cid:t});break}}function Gs(t){var r,a,u;switch(t.targetType){case $.Video:(r=y.video.videoPlays.get(t.targetCID))==null||r.stop();break;case $.Audio:(a=y.audio.getById(t.targetCID))==null||a.stop();break;case $.Sequence:(u=y.sequence.getById(t.targetCID))==null||u.stop();break}t.continueTrigger===xt.Enable&&Ws(t.targetCID)}function wc(t){const r=O.getById(t);if(r!==void 0)switch(r.type){case $.Video:yt.publish(`${F.VideoPause}.${t}`,{cid:t});break;case $.Audio:yt.publish(`${F.AudioPause}.${t}`,{cid:t});break;case $.Sequence:yt.publish(`${F.SequencePause}.${t}`,{cid:t});break}}function qs(t){var r,a;switch(t.targetType){case $.Video:Ln(t.targetCID);break;case $.Audio:(r=y.audio.getById(t.targetCID))==null||r.pause();break;case $.Sequence:(a=y.sequence.getById(t.targetCID))==null||a.pause();break}t.continueTrigger===xt.Enable&&wc(t.targetCID)}function bc(t){const r=O.getById(t);if(r!==void 0)switch(r.type){case $.Video:yt.publish(`${F.VideoContinue}.${t}`,{cid:t});break;case $.Audio:yt.publish(`${F.AudioContinue}.${t}`,{cid:t});break;case $.Sequence:yt.publish(`${F.SequenceContinue}.${t}`,{cid:t});break}}function Io(t){var r,a,u;switch(t.targetType){case $.Video:(r=y.video.videoPlays.get(t.targetCID))==null||r.continue();break;case $.Audio:(a=y.audio.getById(t.targetCID))==null||a.continue();break;case $.Sequence:(u=y.sequence.getById(t.targetCID))==null||u.play();break}t.continueTrigger===xt.Enable&&bc(t.targetCID)}function Zs(t){var r,a;(a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID))==null||a.setState({fontSize:Number(t.targetValue)})}function Eo(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({resetLocked:!1}),void 0)}function Sc(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({resetLocked:!0}),void 0)}function To(t,r,a){yt.publish(`${F.Command}.${r}.${t}`,{cid:a})}function Rt(t){To(y.stages.currentStageCID,t.targetValue,t.targetCID)}function Ic(t){switch(t.targetAttr){case xt.InputPosition:Ec(t);break;case xt.MoveToTarget:Ai(t);break;case xt.ActionPlaced:Ks(t);break;case xt.MovePosition:Tc(t)}}function Ec(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(a===void 0)return;const u=()=>{a.setState({position:t.targetValue})},[c,b]=a.currentState.position.split(","),[k,T]=t.targetValue.split(","),S=a.currentState.rotate,N={transform:`translate(0, 0) rotateZ(${S}deg)`},It={transform:`translate(${Number(k)-Number(c)}px, ${Number(T)-Number(b)}px) rotateZ(${S}deg)`};Mn(t,N,It,u)}function Ai(t){var r,a;const u=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),c=(a=y.stateManager)==null?void 0:a.getById(t.targetValue);if(u===void 0)return;const[b,k]=u.currentState.position.split(","),[T,S]=c===void 0?[0,0]:c.currentState.position.split(","),N=u.currentState.rotate,It=()=>{u.setState({position:`${T},${S}`})},Vt={transform:`translate(0, 0) rotateZ(${N}deg)`},Ft={transform:`translate(${Number(T)-Number(b)}px, ${Number(S)-Number(k)}px) rotateZ(${N}deg)`};Mn(t,Vt,Ft,It)}function Ks(t){var r,a;const u=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),c=(a=y.stateManager)==null?void 0:a.getById(t.sourceCID);let b=!1;try{b=JSON.parse(t.targetActionEffect).align}catch(ei){}if(u===void 0||c===void 0||t.sourceType!==$.Hotspot)return;let{pageX:k,pageY:T}=y.events;if(!w()){const{width:ei}=Ce();[k,T]=[ei-T,k]}const[S,N]=u.currentState.position.split(","),[It,Vt]=b?c.currentState.position.split(","):[k,T],Ft=u.currentState.rotate,he=()=>{u.setState({position:`${It},${Vt}`})},ue={transform:`translate(0, 0) rotateZ(${Ft}deg)`},Ve={transform:`translate(${Number(It)-Number(S)}px, ${Number(Vt)-Number(N)}px) rotateZ(${Ft}deg)`};Mn(t,ue,Ve,he)}function Tc(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(a===void 0)return;const[u,c]=a.currentState.position.split(","),b=Number(u),k=Number(c);let[T,S]=[b,k];const N=Number(t.targetValue);switch(t.targetAttrOperation){case jt.Up:S-=N;break;case jt.Down:S+=N;break;case jt.Left:T-=N;break;case jt.Right:T+=N;break;case jt.LeftUp:T-=N,S-=N;break;case jt.leftDown:T-=N,S+=N;break;case jt.RightUp:T+=N,S-=N;break;case jt.RightDown:T+=N,S+=N;break}const It=a.currentState.rotate,Vt={transform:`translate(0, 0) rotateZ(${It}deg)`},Ft={transform:`translate(${Number(T)-Number(b)}px, ${Number(S)-Number(k)}px) rotateZ(${It}deg)`};Mn(t,Vt,Ft,()=>{a.setState({position:`${T},${S}`})})}function Js(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({isAvailable:!0}),void 0)}function Je(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);a!==void 0&&(a.setState({isAvailable:!1}),void 0)}function Ac(t){switch(t.targetAttr){case Me.position:wa(t);break;case Me.size:Ao(t);break;case Me.opacity:Qs(t);break;case Me.loop:js(t);break;case Me.rotate:Qe(t);break;case Me.textCotext:tr(t);break;case Me.fontsize:$o(t);break;case Me.volume:tu(t);break;case Me.setValue:ba(t);break;case Me.disable:eu(t);break;case Nt.Visible:xo(t);break}}function wa(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(a===void 0)return;const u=a.currentState.rotate,c=()=>{a.setState({position:t.targetValue})},[b,k]=a.currentState.position.split(","),[T,S]=t.targetValue.split(","),N={transform:`translate(0, 0) rotateZ(${u}deg)`},It={transform:`translate(${Number(T)-Number(b)}px, ${Number(S)-Number(k)}px) rotateZ(${u}deg)`};Mn(t,N,It,c)}function Ao(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(a===void 0)return;const[u,c]=a.currentState.size.split(","),[b,k]=t.targetValue.split(","),[T,S]=a.currentState.position.split(","),N=Number(T)+(Number(u)-Number(b))/2,It=Number(S)+(Number(c)-Number(k))/2,Vt=Number(b)/Number(u),Ft=Number(k)/Number(c),he=a.currentState.rotate,ue={transform:`scaleX(1) scaleY(1) rotateZ(${he}deg)`},Ve={transform:`scaleX(${Vt}) scaleY(${Ft}) rotateZ(${he}deg)`},ei=()=>{a.widget.type===$.Line?a.setState({size:t.targetValue}):a.setState({size:t.targetValue,position:`${N},${It}`})};if(a.widget.type===$.Line){const x0={width:`${u}px`},C0={width:`${b}px`};Mn(t,x0,C0,ei)}else Mn(t,ue,Ve,ei);}function Qs(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(a===void 0)return;y.outAnimationMap.has(t.targetCID)&&y.outAnimationMap.set(t.targetCID,Number(t.targetValue));const u=()=>{a.setState({opacity:Number(t.targetValue)})},c={opacity:String(Number(a.currentState.opacity)/100)},b={opacity:String(Number(t.targetValue)/100)};Mn(t,c,b,u)}function js(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),u=a==null?void 0:a.widget;(u==null?void 0:u.type)===$.Interval?a==null||a.setState({cycleTiming:JSON.parse(t.targetValue)}):a==null||a.setState({isLoop:JSON.parse(t.targetValue)})}function Qe(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);if(a===void 0)return;const u=()=>{a.setState({rotate:Number(t.targetValue)})},c={transform:`rotate(${a.currentState.rotate}deg)`},b={transform:`rotate(${t.targetValue}deg)`};Mn(t,c,b,u)}function tr(t){var r,a;(a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID))==null||a.setState({text:t.targetValue})}function $o(t){var r,a;(a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID))==null||a.setState({fontSize:Number(t.targetValue)})}function tu(t){var r;const a=(r=y.stateManager)==null?void 0:r.getById(t.targetCID),u=Number(t.targetValue)/100;isNaN(u)||a===void 0||(a.setState({audioVolume:u}),void 0)}function ba(t){var r,a,u;const c=(r=y.stateManager)==null?void 0:r.getById(t.targetCID);switch(t.targetType){case $.Number:{const b=Number(t.targetValue);(u=(a=y.numericController)==null?void 0:a.getById(t.targetCID))==null||u.changeValue(b),Ti(t.targetCID);break}case $.Interval:c==null||c.setState({countdown:Number(t.targetValue)});break}}function eu(t){switch(t.targetValue){case xt.Enable:Js(t);break;case xt.Disable:Je(t);break}}function xo(t){switch(t.targetValue){case Nt.Visible:gs(t);break;case Nt.InVisible:pi(t);break}}function nu(t){var r,a,u,c,b,k;const T=(u=(a=(r=y.numericController)==null?void 0:r.getById(t.conditionCID))==null?void 0:a.value)!=null?u:0,S=t.attrAction,N=S.type==="COMPONENT"?(k=(b=(c=y.numericController)==null?void 0:c.getById(t.conditionValue))==null?void 0:b.value)!=null?k:0:Number(t.conditionValue);switch(S.operation){case un.EQ:return T===N;case un.NEQ:return T!==N;case un.LT:return T<N;case un.LTE:return T<=N;case un.GT:return T>N;case un.GTE:return T>=N;default:return!1}}function Co(t){if(t.addConditions===void 0||t.addConditions===""||t.addConditions==="[]")return!0;try{return JSON.parse(t.addConditions).every(a=>{switch(a.attribution){case $.Number:return nu(a);default:return!0}})}catch(r){return!1}}function ko(t,r){let a=!1;switch(t.targetAttr){case jt.Reset:a=er(t);break;case jt.Random:a=$c(t);break;case jt.CalcNumber:a=nr(t,r);break}a&&t.continueTrigger===xt.Enable&&Ti(t.targetCID)}function er(t){var r,a,u,c,b,k;const T=t.targetValue;let S=!1;switch(T){case xt.InitValue:S=(u=(a=(r=y.numericController)==null?void 0:r.getById(t.targetCID))==null?void 0:a.reset())!=null?u:!1;break;case xt.PrevValue:S=(k=(b=(c=y.numericController)==null?void 0:c.getById(t.targetCID))==null?void 0:b.resetToPrevValue())!=null?k:!1;break}return S}function $c(t){var r,a,u;const c=t.targetValue.split(","),b=(0,ot.random)(Number(c[0]),Number(c[1]));let k=!1;return k=(u=(a=(r=y.numericController)==null?void 0:r.getById(t.targetCID))==null?void 0:a.changeValue(b))!=null?u:!1,k}function nr(t,r){var a,u,c;const b=ul(t,r);return(c=(u=(a=y.numericController)==null?void 0:a.getById(t.targetCID))==null?void 0:u.changeValue(b))!=null?c:!1}function ru(t,r){var a,u;if(!Co(t))return;const c=y.widgets.getById(t.targetCID),b=y.stages.getOverlayStage(),k=y.stages.getCurrentStage(),T=(a=y.stateManager)==null?void 0:a.getById(t.targetCID),S=(u=y.stateManager)==null?void 0:u.getById(t.sourceCID),N=y.stages.currentStageCID;(S==null?void 0:S.stageCID)===(b==null?void 0:b.cid)&&(T==null?void 0:T.stageCID)!==N&&(T==null?void 0:T.stageCID)!==(b==null?void 0:b.cid)||T!==void 0&&!T.currentState.isActionEnable||r.eventId!==void 0&&t.cid!==r.eventId||c!==void 0&&c.stageCID===(b==null?void 0:b.cid)&&!k.isOverlyingStageEnabled||t.triggerCount>0&&t.triggerCount<=t.usedTriggerCount||(t.triggerCount!==0&&(t.usedTriggerCount+=1),t.triggerDelay===0?Oo(t,r):y.timerManager.push({cid:t.cid,stageCID:t.sourceStageCID,countdown:t.triggerDelay,cycleTiming:!1,callback:()=>{Oo(t,r)}}))}function Oo(t,r){switch(t.targetAttrAction){case Nt.Visible:gs(t);break;case Nt.InVisible:pi(t);break;case Nt.IntervalControl:Lo(t);break;case Nt.JumpToLink:Nl(t);break;case Nt.VideoPlay:case Nt.AudioPlay:case Nt.SequencePlay:switch(t.targetValue){case xt.PlayStart:na(t);break;case xt.Stop:Gs(t);break;case xt.Pause:qs(t);break;case xt.Play:Io(t);break}break;case Nt.JumpToOtherStage:fc(t);break;case Nt.Animate:zs(t);break;case Nt.Copy:hc(t);break;case Nt.Change:Xs(t);break;case Nt.LockNumber:xc(t);break;case Nt.DraggingFollowing:_c(t);break;case Nt.TextFontSize:Zs(t);break;case Nt.TriggerCommand:Rt(t);break;case Nt.LockReset:Cc(t);break;case Nt.MoveWidget:Ic(t);break;case Nt.ChangeAttributes:Ac(t);break;case Nt.triggerValidateEnable:Js(t);break;case Nt.triggerValidateDisable:Je(t);break;case Nt.ChangeText:Ei(t,r.liveMessage);break;case Nt.ChangeNumber:ko(t,r.repeat);break}Dl(t.targetCID)}function Lo(t){switch(t.targetValue){case xt.PlayStart:W(t);break;case xt.Play:ee(t);break;case xt.Stop:ft(t);break;case xt.Pause:Ht(t);break}}function xc(t){switch(t.targetValue){case xt.Unlock:_a(t);break;case xt.Lock:Hs(t);break}}function Cc(t){switch(t.targetValue){case xt.Lock:Sc(t);break;case xt.Unlock:Eo(t);break}}function kc(){(0,ot.forEach)(Ct.group,t=>{t.forEach(r=>{const a=[r.sourceEventName,r.sourceAttr,r.sourceAttrCondition,r.sourceCID];r.sourceEventName===F.NumberCompare&&(r.sourceAttr===Ae.CompareInput||r.sourceAttr===Ae.CompareOtherComponent||r.sourceAttr===Ae.CompareSelf)&&a.splice(a.length-1,0,r.cid),r.sourceEventName===F.ReceiveBullet&&a.splice(a.length-1,0,r.cid),r.sourceEventName===F.KeyboardInput&&a.splice(a.length-1,0,r.cid);const u=a.filter(c=>c!=="").join(".");yt.subscribe(u,(c,b)=>{ru(r,b)})})})}function iu(t,r){yt.publish(`${F.TriggerTypeSwipe}.${t}.${r}`,{cid:r})}function mn(t,r){yt.publish(`${F.Release}.${r}.${t}`,{cid:t})}function Oc(t){let r;const a=new Hammer.Manager(t),u=new Hammer.Swipe({direction:Hammer.DIRECTION_ALL,threshold:0,velocity:.2});a.add(u),a.on("swipe",c=>{c.srcEvent.stopPropagation();const b=ou(c);r.classList.contains("muses-HOTSPOT")&&(iu(b,r.id),mn(r.id,oe.ReleaseSwiper),mn(r.id,oe.ReleaseAll)),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:Lt.swipe,sourceAttrCondition:b}),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Release})}),t.addEventListener("pointerdown",c=>{r=c.target},!1)}function au(t){const r=y.stages.getCurrentStage();switch(t){case F.SwipeRight:t=r.isPortrait?F.SwipeDown:F.SwipeUp;break;case F.SwipeLeft:t=r.isPortrait?F.SwipeUp:F.SwipeDown;break;case F.SwipeUp:t=r.isPortrait?F.SwipeRight:F.SwipeLeft;break;case F.SwipeDown:t=r.isPortrait?F.SwipeLeft:F.SwipeRight;break;case F.SwipeRightUp:t=r.isPortrait?F.SwipeRightDown:F.SwipeLeftUp;break;case F.SwipeLeftUp:t=r.isPortrait?F.SwipeRightUp:F.SwipeLeftDown;break;case F.SwipeRightDown:t=r.isPortrait?F.SwipeLeftDown:F.SwipeRightUp;break;case F.SwipeLeftDown:t=r.isPortrait?F.SwipeLeftUp:F.SwipeRightDown;break}return t}function ou(t){const{angle:r}=t,a=22.5;let u;return r>=-a&&r<a?u=F.SwipeRight:r>=-45-a&&r<-45+a?u=F.SwipeRightUp:r>=180-a&&r<=180||r>=-180&&r<-180+a?u=F.SwipeLeft:r>=-135-a&&r<-135+a?u=F.SwipeLeftUp:r>=-90-a&&r<-90+a?u=F.SwipeUp:r>=90-a&&r<90+a?u=F.SwipeDown:r>=45-a&&r<45+a?u=F.SwipeRightDown:r>=135-a&&r<135+a&&(u=F.SwipeLeftDown),w()||(u=au(u)),u}function Re(t,r){yt.publish(`${F.Dragging}.${t}.${r}`,{cid:r})}function Tn(t,r){y.events.list.filter(u=>u.sourceCID===t&&u.sourceEventName===F.DragreLease).forEach(u=>{u.sourceAttr===""?yt.publish(`${F.DragreLease}.${t}`,{cid:t}):u.sourceAttr===r&&yt.publish(`${F.DragreLease}.${r}.${t}`,{cid:t})})}const Lc=10,Pc=50,Sa=100;function Zr(t){let r;const a=new Hammer.Manager(t);a.add(new Hammer.Pan({threshold:Lc,pointers:0}));const u=new Hammer.Manager(t);u.add(new Hammer.Pan({threshold:Pc,pointers:0}));const c=new Hammer.Manager(t);c.add(new Hammer.Pan({threshold:Sa,pointers:0}));let b;t.addEventListener("pointerdown",k=>{r=k.target,y.events.pageX=(0,ot.floor)(k.x/y.config.scale,2),y.events.pageY=(0,ot.floor)(k.y/y.config.scale,2)},!1),a.on("panstart",k=>{k.srcEvent.stopPropagation(),r.classList.contains("muses-HOTSPOT")&&(y.events.deltaX=k.deltaX/y.config.scale,y.events.deltaY=k.deltaY/y.config.scale,y.events.isDragging=!0,b=r.id,Re(F.DistanceSmall,b))}),u.on("panstart",k=>{k.srcEvent.stopPropagation(),r.classList.contains("muses-HOTSPOT")&&Re(F.DistanceMedium,b)}),c.on("panstart",k=>{k.srcEvent.stopPropagation(),r.classList.contains("muses-HOTSPOT")&&Re(F.DistanceLarge,b)}),a.on("panmove",k=>{k.srcEvent.stopPropagation(),y.events.pageX=(0,ot.floor)(k.center.x/y.config.scale,2),y.events.pageY=(0,ot.floor)(k.center.y/y.config.scale,2),y.events.isDragging&&(y.events.deltaX=k.deltaX/y.config.scale,y.events.deltaY=k.deltaY/y.config.scale)}),a.on("panend pancancel",k=>{k.srcEvent.stopPropagation(),y.events.isDragging=!1,y.events.pointerEnterHotspot.forEach(T=>{requestAnimationFrame(()=>{Tn(T,r.id),mn(T,oe.ReleaseDrag),mn(T,oe.ReleaseAll),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Release})})})})}var su=ae(959),rr=ae.n(su);function Po(t,r){yt.publish(`${F.TriggerTypeClick}.${r}.${t}`,{cid:t})}function uu(t){const r=new(rr()).Manager(t),a=new(rr()).Tap({taps:1});r.add(a),r.on("tap",u=>{u.target.classList.contains("muses-HOTSPOT")&&(Po(u.target.id,Yt.Tap),mn(u.target.id,oe.ReleaseTap),mn(u.target.id,oe.ReleaseAll)),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Tap}),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Release})})}function Kr(t){const r=new(rr()).Manager(t),a=new(rr()).Tap({event:Yt.DoubleTap,taps:2});r.add(a),r.on(Yt.DoubleTap,u=>{u.target.classList.contains("muses-HOTSPOT")&&(Po(u.target.id,Yt.DoubleTap),mn(u.target.id,oe.ReleaseDoubleTap),mn(u.target.id,oe.ReleaseAll)),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Release})})}function $i(t){const r=new(rr()).Manager(t),a=new(rr()).Press({time:500});r.add(a),r.on("press",u=>{u.target.classList.contains("muses-HOTSPOT")&&Po(u.target.id,Yt.Press),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Press})}),r.on("pressup",u=>{u.target.classList.contains("muses-HOTSPOT")&&(mn(u.target.id,oe.ReleasePress),mn(u.target.id,oe.ReleaseAll)),y.handleManeger.publish(F.DeviceOperation,{sourceAttr:F.Release})})}function lu(t,r){yt.publish(`${F.TriggerTypeHover}.${r}.${t}`,{cid:t})}function cu(t){let r=[];yt.subscribe(F.Onload,()=>{r=[],y.events.pointerEnterHotspot.clear(),jn(y.stages.currentStageCID).filter(u=>u.type===$.Hotspot).forEach(u=>{r.push({element:document.getElementById(u.cid),current:!1,cid:u.cid})})}),t.addEventListener("pointermove",a=>{r.forEach(u=>{const c=ns({x:a.clientX,y:a.clientY},u.element);c&&!u.current&&(lu(u.cid,At.Enter),u.current=!0,y.events.pointerEnterHotspot.add(u.cid)),!c&&u.current&&(lu(u.cid,At.Out),u.current=!1,y.events.pointerEnterHotspot.delete(u.cid))})},!1)}function fu(t){uu(t),Kr(t),$i(t),Oc(t),Zr(t),cu(t)}function ir(t=be.orientation){y.config.scale=Fe();const{width:r,height:a}=Ce(),u=document.getElementById(ja);if(u!==null){const b=Se.getScreenSize();be.portrait(),Se.getScreenSize();let k=b.width>b.height?y.config.isPortrait?-90:0:y.config.isPortrait?0:90;be.desktop()&&!ut()&&(k=0),u.style.width=`${r}px`,u.style.height=`${a}px`,u.style.transform=`translate(-50%, -50%) scale(${y.config.scale}) rotate(${k}deg)`}const c=document.getElementById("video-wrap");c!==null&&(c.style.width=`${r}px`,c.style.height=`${a}px`)}function du(){y.config.scale=Fe(),ir(),hs()}function Ia(){be.desktop()&&window.addEventListener("resize",()=>{du()},!1)}function Do(t){yt.publish(`${F.Mute}.${String(t)}`,{})}function xi(t){t||y.audio.list.forEach(r=>{r.sync()}),Ts.Howler.mute(t),Dc(t?"off":"on")}function Dc(t){const r=document.getElementById("globalSwitch");r!==null&&(["volu-off","volu-on","volu-loading"].forEach(a=>{r.classList.remove(a)}),r.classList.add(`volu-${t}`))}function pu(){const t=document.getElementById("globalSwitch");xi(y.config.isMuted),t!==null&&new(rr())(t).on("tap",()=>{y.config.isMuted=!y.config.isMuted,xi(y.config.isMuted),Do(y.config.isMuted)})}class Ea{get state(){var r;return(r=y.stateManager)==null?void 0:r.getById(this.cid)}}class hu extends Ea{constructor(r){super(),this.cid=r.cid,this.stageCID=r.stageCID,this.value=this.initialValue}init(){this.prevValue=null,this.value=this.initialValue}reset(){return this.resetLocked?!1:(this.prevValue=this.value,this.value=this.initialValue,!0)}resetToPrevValue(){return this.resetLocked||this.prevValue===null?!1:([this.value,this.prevValue]=[this.prevValue,this.value],!0)}changeValue(r){return this.valueLocked?!1:(this.value=r,!0)}get resetLocked(){return this.state.currentState.resetLocked}get valueLocked(){return this.state.currentState.valueLocked}get initialValue(){return this.state.initialState.initialValue}get value(){var r;return(r=this.state.currentState.value)!=null?r:this.initialValue}set value(r){this.state.setState({value:r})}get prevValue(){var r;return(r=this.state.previousState.value)!=null?r:this.value}set prevValue(r){this.state.previousState.value=r}}class Ro{constructor(r){this.data=r.map(a=>new hu(a))}getById(r){return this.data.find(a=>a.cid===r)}getByStageId(r){return this.data.filter(a=>a.stageCID===r)}}function Rc(){const t=y.widgets.getByType($.Number);y.numericController=new Ro(t)}var gu=(t=>(t.Input="INPUT",t.Change="CHANGE",t.Merge="MERGE",t.Visible="VISIBLE",t.Reset="RESET",t.LockNumber="LOCK_NUMBER",t.LockReset="LOCK_RESET",t.Random="RANDOM",t.Animate="ANIMATE",t.Opacity="OPACITY",t.AttrChange="ATTRCHANGE",t.WidgetRotate="WIDGETROTATE",t.WidgetSize="WIDGETSIZE",t.WidgetPosition="WIDGETPOSITION",t.WidgetAdjustPosition="WIDGETADJUSTPOSITION",t.TextFontSize="TEXT_FONT_SIZE",t.VideoPlay="VIDEOPLAY",t.VideoLoop="VIDEOLOOP",t.AudioPlay="AUDIOPLAY",t.AudioLoop="AUDIOLOOP",t.AudioVolume="AUDIOVOLUME",t.DraggingFollowing="DRAGGINGFOLLOWING",t.ActionPlaced="ACTIONPLACED",t.JumpToOtherStage="JUMPTOOTHERSTAGE",t.JumpToLink="JUMPTOLINK",t.TriggerValidate="TRIGGER_VALIDATE",t.IntervalControl="INTERVAL_CONTROL",t.Copy="COPY",t))(gu||{});const ar=null,Bc={ADD:"ADD",ADD_PRE:"ADD_PRE",EQ:"EQ"},Nc={ADD:"ADD",SUB:"SUB",MULTI:"MULTI",DIV:"DIV",EQ:"EQ"},g0={FOLLOWING_X:"FOLLOWING_X",FOLLOWING_Y:"FOLLOWING_Y",FOLLOWING_X_Y:"FOLLOWING_X_Y",REVERSE_FOLLOWING_X:"REVERSE_FOLLOWING_X",REVERSE_FOLLOWING_Y:"REVERSE_FOLLOWING_Y",REVERSE_FOLLOWING_X_Y:"REVERSE_FOLLOWING_X_Y"};var mu=(t=>(t.Play="PLAY",t.Pause="PAUSE",t.PlayStart="PLAYSTART",t.Stop="STOP",t.Visible="VISIBLE",t.Invisible="INVISIBLE",t.Loop="LOOP",t.Notloop="NOTLOOP",t.LinkToStage="LINKTOSTAGE",t.Lock="LOCK",t.Unlock="UNLOCK",t.Disable="DISABLE",t.Enable="ENABLE",t.Min="MIN",t.Low="LOW",t.Mid="MID",t.High="HIGH",t.Max="MAX",t.PlacedRelativeLow="PLACEDRELATIVE_LOW",t.PlacedRelativeFast="PLACEDRELATIVE_FAST",t.PlacedRelativeFlash="PLACEDRELATIVE_FLASH",t))(mu||{}),Mc=Object.defineProperty,Fc=Object.defineProperties,Fn=Object.getOwnPropertyDescriptors,Ta=Object.getOwnPropertySymbols,Bo=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,Ci=(t,r,a)=>r in t?Mc(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,Jr=(t,r)=>{for(var a in r||(r={}))Bo.call(r,a)&&Ci(t,a,r[a]);if(Ta)for(var a of Ta(r))No.call(r,a)&&Ci(t,a,r[a]);return t},Et=(t,r)=>Fc(t,Fn(r));function zn(t){if(t!==void 0&&(Boolean(re().startsWith(t,"."))||Boolean(re().startsWith(t,"#")))&&t.length<=1)return null;const r=document.querySelectorAll(t);return r.length===0?null:r.length===1?r[0]:null}function ki(t,r){return t===void 0?!1:t.className.match(new RegExp(r,"i"))!==null}function Ar(t,r){let a=null;ki(t,r)||(a=t.className.replace(/^\s+|\s+$/g,""),t.className=a+" "+r)}function zc(t,r){ki(t,r)&&(t.className=t.className.replace(" "+r,""))}function yu(t,r){ki(t,r)?zc(t,r):Ar(t,r)}function $r(t,r){t==null||_.isEmpty(r)||_.forEach(r,(a,u)=>{if(_.isArrayLike(t)){const c=t.length;for(let b=0,k=c;b<k;b++)t[b].style.setProperty(_.kebabCase(u),a)}else t.style.setProperty(_.kebabCase(u),a)})}function ze(t){const r=zn(t);r!==null&&$r(r,{visibility:"hidden"})}function m0(t){const r=zn(t),a=Mo(`${t}`,".element");if(r===null||a===null)return;const u=a[0];u.style.opacity==="0"?($r(r,{visibility:"visible"}),$r(u,{opacity:1,visibility:"visible"})):$r(r,{visibility:"visible"})}function y0(t,r){t===null||r===""||t.removeAttribute(r)}function Mo(t,r){const a=zn(t);return a===null?null:a.querySelectorAll(r)}function v0(t,r){const a=zn(t);a!==null&&(a.innerHTML=r)}function Uc(t,r,a){const u=zn(t);if(u===null)return;const c=u.innerHTML;switch(a){case ACTION_ATTR_OPERATIONS_TEXT.ADD:u.innerHTML=c+r;break;case ACTION_ATTR_OPERATIONS_TEXT.ADD_PRE:u.innerHTML=r+c;break;case ACTION_ATTR_OPERATIONS_TEXT.EQ:u.innerHTML=r;break;default:break}}function _0(t,r,a=300){const u=zn(t);if(u===null||_.isEmpty(r))return;const c=u.style.transition,b=_.keys(r),k=_.reduce(b,(T,S,N)=>`${S} ${a}ms${N===0?"":", "}`+T,"");$r(u,Et(Jr({},r),{transition:k})),onceEvent(u,"transitionend",()=>{$r(u,{transition:c})})}const w0=3,b0="bg_music",Un="loading_video";function Ue(t,r){let a;if(window.appConfig.isPreview){const u=Mo(`#${t}`,"video");a=u!==null?u[0]:null}else a=document.getElementById(Un);a!==null&&(a.loop=r)}function Aa(t,r=!1){const a={},{currentState:u,previousState:c}=t;for(const k in u)Object.prototype.hasOwnProperty.call(u,k)&&u[k]!==c[k]&&(a[k]=u[k]);const b=t.instance;for(const k in a){const T=a[k];switch(k){case"isShow":Vc(b,T);break;case"animation":Fo(b,T);break;case"elementAnimation":Yc(b,T);break;case"opacity":Xc(b,T);break;case"rotate":Oi(b,T);break;case"size":vu(b,T);break;case"position":_u(b,T);break;case"fontSize":Hc(b,T);break;case"text":Wc(b,T);break;case"audioVolume":Gc(t.cid,T);break;case"isLoop":qc(t,T);break;case"cycleTiming":wu(t.cid,T);break;case"countdown":bu(t.cid,T)}}}function Vc(t,r){t!==null&&(r?t.querySelectorAll(".GIF, .IMAGE").forEach(u=>{u.setAttribute("src",u.getAttribute("data-src"))}):t.querySelectorAll(".GIF, .IMAGE").forEach(u=>{u.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWP4//8/AwAI/AL+hc2rNAAAAABJRU5ErkJggg==")}),t.classList.contains("app-group")?t.style.display=r?"block":"none":t.style.visibility=r?"visible":"hidden")}function Fo(t,r){t!==null&&(t.style.animation=(0,ot.map)(r).join(","))}function Yc(t,r){if(t===null)return;const a=t.querySelector(":scope > .element");a.style.animation=r}function Xc(t,r){t!==null&&(t.style.opacity=String(Number(r)/100))}function Oi(t,r){t!==null&&(t.classList.contains("app-group")||(t.style.transform=`rotate(${r}deg)`))}function vu(t,r){if(t===null||t.classList.contains("app-group"))return;const[a,u]=r.split(",");t.classList.contains("app-line")?t.style.width=`${a}px`:(t.style.width=`${a}px`,t.style.height=`${u}px`)}function _u(t,r){if(t===null)return;const[a,u]=r.split(",");t.style.top=`${u}px`,t.style.left=`${a}px`}function Hc(t,r){if(t!==null){const a=t.querySelector(":scope > .element");a!==null&&(a.style.fontSize=`${r}px`)}}function Wc(t,r){if(t!==null){const a=t.querySelector(":scope > .element .inner-text");a!==null&&(a.innerText=r)}}function Gc(t,r){var a;(a=y.audio.getById(t))==null||a.volume(r)}function qc(t,r){var a,u;const{cid:c}=t;switch(t.widget.type){case $.Video:{Va(),Va()||Ue(c,r);break}case $.Audio:Va()?(a=y.audio.getById(c))==null||a.changeLoop(r):(u=window.audioPlayer)==null||u.changeLoop(c,r);break}}function wu(t,r){var a;(a=y.timerManager.getById(t))==null||a.changeLoop(r)}function bu(t,r){var a;(a=y.timerManager.getById(t))==null||a.changeCountdown(Number(r))}var Zc=Object.defineProperty,$a=Object.getOwnPropertySymbols,Su=Object.prototype.hasOwnProperty,Li=Object.prototype.propertyIsEnumerable,xa=(t,r,a)=>r in t?Zc(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,Qr=(t,r)=>{for(var a in r||(r={}))Su.call(r,a)&&xa(t,a,r[a]);if($a)for(var a of $a(r))Li.call(r,a)&&xa(t,a,r[a]);return t};class Iu{constructor(r){const{isAvailable:a,isActionEnable:u,resetLocked:c,valueLocked:b,isShow:k,cid:T,stageCID:S,isLoop:N,text:It,style:Vt,audioVolume:Ft,initialValue:he,cycleTiming:ue,countdown:Ve}=r;this.cid=T,this.name=r.name,this.stageCID=S,this._instance=null,this.previousState={},this.initialState={isAvailable:a,isActionEnable:u,resetLocked:c,valueLocked:b,hasThrow:!1,isLoop:N,isShow:k,animation:{},elementAnimation:"",opacity:Vt.opacity,rotate:Vt.rotate,size:`${Vt.width},${Vt.height}`,position:`${Vt.left},${Vt.top},0`,fontSize:Vt.fontSize,text:It,audioVolume:Ft,initialValue:he,value:null,cycleTiming:ue,countdown:Ve},this.currentState=Qr({},this.initialState)}reset(){this.previousState={},this.currentState=Qr({},this.initialState),Aa(this,!0)}setState(r){this.previousState=Qr({},this.currentState),this.currentState=Qr(Qr({},this.currentState),r),Aa(this)}get widget(){return y.widgets.getById(this.cid)}get instance(){return this._instance===null&&(this._instance=document.getElementById(this.cid)),this._instance}}class Ca{constructor(r){this.data=r.map(a=>new Iu(a))}getById(r){return this.data.find(a=>a.cid===r)}getByStageId(r){return this.data.filter(a=>a.stageCID===r)}resetByStageId(r){this.getByStageId(r).forEach(u=>{u.reset()})}}const Eu=Ca;function An(){const t=y.widgets.list;y.stateManager=new Eu(t)}let $n;["wechat","xijing","xijing_template","share"].includes("douyin_live")?$n=ac:["unity","mtg","applovin","ironsource","tapjoy","adcolony"].includes("douyin_live")?$n=ic:$n=Cs;const Kc=$n;var Tu=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function Jc(){return Tu(this,null,function*(){const t=Dn();if(t===void 0||!t.isOverlyingStageEnabled){z();return}yield gn();const r=document.getElementById(t.cid);r.classList.add("active");const a=y.config.loadingStageConfig.main.processFloorComponentId;if(a!==""){const u=r.querySelector(`#${a} .element`);u.style.width="0px"}Qc()})}function Qc(){const r=y.config.loadingStageConfig.main.processFloorComponentId;if(r==="")return;const u=y.widgets.getById(r).style.width,c=document.querySelector(`#${r} .element`);if(c===null)return;const b=c.querySelector("img");b!==null&&(b.style.width=`${u}px`),c.classList.add("bar-animate");let k=u*(10/100);const T=setInterval(()=>{parseInt(c.style.width)>=u?clearInterval(T):(c.style.width=`${k}px`,k=k+(u-k)*(10/100))},100)}function jc(){Se.addEventListener("orientationChange",t=>{y.config.scale=Fe(),ir(t),Au(),Pn(t===Sr.Portrait).finally(()=>{})})}function Au(){const t=y.stages.getCurrentStage();Rn(t.cid)&&ya(t.cid,!0)}function tf(){const t={pauseVideo:!1,pauseAudios:[],animations:[]};Se.addEventListener("viewableChange",r=>{const a=y.video.videoPlays.get(y.video.currentPlayingId),u=y.audio.getByStageCID(y.stages.currentStageCID);r?(y.timerManager.continue(),t.pauseVideo&&(a==null||a.continue()),t.pauseAudios.forEach(c=>{c.continue()}),t.animations.forEach(c=>{var b;(b=y.elementAnimationMap.get(c))==null||b.play()}),t.pauseVideo=!1,t.pauseAudios=[],t.animations=[],setTimeout(()=>{ir(),Au()},300)):(a!==void 0&&(a.paused||(t.pauseVideo=!0,a.pause())),u.forEach(c=>{c.playing&&(t.pauseAudios.push(c),c.pause())}),y.timerManager.stop(),y.elementAnimationMap.forEach((c,b)=>{c.playState==="running"&&(t.animations.push(b),c.pause())}))})}var zo=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});function ef(){return zo(this,null,function*(){return yield new Promise(t=>{const r=Dn();r!==void 0&&(r.isOverlyingStageEnabled?((0,ot.delay)(()=>{nf()},10),(0,ot.delay)(()=>zo(this,null,function*(){y.config.loadingStageConfig.main.loadingStageAutoJumpStage?(Er(y.stages.getStartStage().cid).catch(()=>{}),t()):(yield rf(),t())}),ta)):(0,ot.delay)(()=>{t()},300))})})}function nf(){const t=y.config.loadingStageConfig.main.processFloorComponentId;if(t==="")return;const r=document.querySelector(`#${t} .element`),a=y.widgets.getById(t);r!==null&&(r.style.width=`${a.style.width}px`)}function S0(){const t=store.config.loadingStageConfig.components.beginButtonComponent.ids;t==null||t.forEach(r=>{const a=document.getElementById(r);a.style.display="block"})}function rf(){return zo(this,null,function*(){yield po(y.stages.getStartStage().cid),af()})}function af(){const t=y.config.loadingStageConfig.components.backgroundComponent;t!==void 0&&t.ids!==null&&t.ids.forEach(a=>{const u=document.getElementById(a);u!==null&&(u.style.display="none")})}function $u(t){return`
    @keyframes fade-in-${t} {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
`}function xu(t){return`
    @keyframes fade-in-fwd-${t} {
      0% {
        transform: translateZ(-${160*i[t].size}px);
        opacity: 0;
      }
      100% {
        transform: translateZ(0);
        opacity: 1;
      }
    }
  `}function Cu(t){return`
    @keyframes fade-in-bck-${t} {
      0% {
        transform: translateZ(${160*i[t].size}px);
        opacity: 0;
      }
      100% {
        transform: translateZ(0);
        opacity: 1;
      }
    }
  `}function of(t){return`
    @keyframes fade-in-top-${t} {
      0% {
        transform: translateY(-${150*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}function sf(t){return`
    @keyframes fade-in-tr-${t} {
      0% {
        transform: translateX(${105*i[t].layout}px) translateY(-${105*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
  `}function uf(t){return`
    @keyframes fade-in-right-${t} {
      0% {
        transform: translateX(${150*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `}function ku(t){return`
    @keyframes fade-in-br-${t} {
      0% {
        transform: translateX(${105*i[t].layout}px) translateY(${105*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
  `}function lf(t){return`
    @keyframes fade-in-bottom-${t} {
      0% {
        transform: translateY(${150*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}function cf(t){return`
    @keyframes fade-in-bl-${t} {
      0% {
        transform: translateX(-${105*i[t].layout}px) translateY(${105*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
  `}function ff(t){return`
    @keyframes fade-in-left-${t} {
      0% {
        transform: translateX(-${150*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `}function df(t){return`
    @keyframes fade-in-tl-${t} {
      0% {
        transform: translateX(-${105*i[t].layout}px) translateY(-${105*i[t].layout}px);
        opacity: 0;
      }
      100% {
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
    }
  `}const pf={"fade-in":$u,"fade-in-fwd":xu,"fade-in-bck":Cu,"fade-in-top":of,"fade-in-tr":sf,"fade-in-right":uf,"fade-in-br":ku,"fade-in-bottom":lf,"fade-in-bl":cf,"fade-in-left":ff,"fade-in-tl":df};function hf(t){return`
@keyframes slide-in-top-${t} {
  0% {
    transform: translateY(-${150*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
  `}function ln(t){return`
@keyframes slide-in-tr-${t} {
  0% {
    transform: translateY(-${105*i[t].layout}px) translateX(${105*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `}function gf(t){return`
@keyframes slide-in-right-${t} {
  0% {
    transform: translateX(${150*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
  `}function mf(t){return`
@keyframes slide-in-br-${t} {
  0% {
    transform: translateY(${105*i[t].layout}px) translateX(${105*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `}function yf(t){return`
@keyframes slide-in-bottom-${t} {
  0% {
    transform: translateY(${150*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
  `}function Ou(t){return`
@keyframes slide-in-bl-${t} {
  0% {
    transform: translateY(${105*i[t].layout}px) translateX(-${105*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `}function vf(t){return`
@keyframes slide-in-left-${t} {
  0% {
    transform: translateX(-${150*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
  `}function _f(t){return`
@keyframes slide-in-tl-${t} {
  0% {
    transform: translateY(-${105*i[t].layout}px) translateX(-${105*i[t].layout}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
}
  `}const wf={"slide-in-top":hf,"slide-in-tr":ln,"slide-in-right":gf,"slide-in-br":mf,"slide-in-bottom":yf,"slide-in-bl":Ou,"slide-in-left":vf,"slide-in-tl":_f};function bf(t){return`
@keyframes scale-in-center-${t} {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
  `}function Uo(t){return`
@keyframes scale-in-top-${t} {
  0% {
    transform: scale(0);
    transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
}
  `}function Sf(t){return`
@keyframes scale-in-right-${t} {
  0% {
    transform: scale(0);
    transform-origin: 100% 50%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 50%;
    opacity: 1;
  }
}
  `}function If(t){return`
@keyframes scale-in-bottom-${t} {
  0% {
    transform: scale(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
  `}function Ef(t){return`
@keyframes scale-in-left-${t} {
  0% {
    transform: scale(0);
    transform-origin: 0% 50%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 50%;
    opacity: 1;
  }
}
  `}function Tf(t){return`
@keyframes scale-in-tr-${t} {
  0% {
    transform: scale(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
  `}function Af(t){return`
@keyframes scale-in-br-${t} {
  0% {
    transform: scale(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}
  `}function $f(t){return`
@keyframes scale-in-tl-${t} {
  0% {
    transform: scale(0);
    transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 0%;
    opacity: 1;
  }
}
  `}function xf(t){return`
@keyframes scale-in-bl-${t} {
  0% {
    transform: scale(0);
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 100%;
    opacity: 1;
  }
}
  `}const Cf={"scale-in-center":bf,"scale-in-top":Uo,"scale-in-right":Sf,"scale-in-bottom":If,"scale-in-left":Ef,"scale-in-tr":Tf,"scale-in-br":Af,"scale-in-tl":$f,"scale-in-bl":xf};function kf(t){return`
@keyframes rotate-in-center-${t} {
  0% {
    transform: rotate(-360deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
  `}function Of(t){return`
@keyframes rotate-in-top-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
  `}function Lf(t){return`
@keyframes rotate-in-tr-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: top right;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: top right;
    opacity: 1;
  }
}
  `}function Pf(t){return`
@keyframes rotate-in-right-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: right;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: right;
    opacity: 1;
  }
}
  `}function Df(t){return`
@keyframes rotate-in-br-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: bottom right;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: bottom right;
    opacity: 1;
  }
}
  `}function Rf(t){return`
@keyframes rotate-in-bottom-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: bottom;
    opacity: 1;
  }
}
  `}function Bf(t){return`
@keyframes rotate-in-bl-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: bottom left;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: bottom left;
    opacity: 1;
  }
}
  `}function Nf(t){return`
@keyframes rotate-in-left-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: left;
    opacity: 1;
  }
}
  `}function Mf(t){return`
@keyframes rotate-in-tl-${t} {
  0% {
    transform: rotate(-360deg);
    transform-origin: top left;
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: top left;
    opacity: 1;
  }
}
  `}function Ff(t){return`
@keyframes rotate-in-hor-${t} {
  0% {
    transform: rotateX(360deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
  `}function zf(t){return`
@keyframes rotate-in-ver-${t} {
  0% {
    transform: rotateY(-360deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
}
  `}function Uf(t){return`
@keyframes rotate-in-diag-1-${t} {
  0% {
    transform: rotate3d(1, 1, 0, -360deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}
  `}function Vo(t){return`
@keyframes rotate-in-diag-2-${t} {
  0% {
    transform: rotate3d(-1, 1, 0, -360deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(-1, 1, 0, 0deg);
    opacity: 1;
  }
}
  `}function Lu(t){return`
@keyframes rotate-in-2-cw-${t} {
  0% {
    transform: rotate(-${90*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
  `}function Vf(t){return`
@keyframes rotate-in-2-ccw-${t} {
  0% {
    transform: rotate(${90*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    opacity: 1;
  }
}
  `}function Yf(t){return`
@keyframes rotate-in-2-fwd-cw-${t} {
  0% {
    transform: translateZ(-${140*i[t].size}px) rotate(-${90*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
  `}function Xf(t){return`
@keyframes rotate-in-2-fwd-ccw-${t} {
  0% {
    transform: translateZ(-${140*i[t].size}px) rotate(${90*i[t].size}deg),
    opacity: 0;
  }
  100% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
  `}function Hf(t){return`
@keyframes rotate-in-2-bck-cw-${t} {
  0% {
    transform: translateZ(${160*i[t].size}px) rotate(-${90*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
  `}function Wf(t){return`
@keyframes rotate-in-2-bck-ccw-${t} {
  0% {
    transform: translateZ(${160*i[t].size}px) rotate(${90*i[t].size}deg),
    opacity: 0;
  }
  100% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
  `}function Gf(t){return`
@keyframes rotate-in-2-tr-cw-${t} {
  0% {
    transform: rotate(-45deg);
    transform-origin: 100% 0%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
  `}function qf(t){return`
@keyframes rotate-in-2-tr-ccw-${t} {
  0% {
    transform: rotate(45deg);
    transform-origin: 100% 0%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
  `}function Zf(t){return`
@keyframes rotate-in-2-br-cw-${t} {
  0% {
    transform: rotate(-45deg);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}
  `}function Pu(t){return`
@keyframes rotate-in-2-br-ccw-${t} {
  0% {
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}
  `}function Kf(t){return`
@keyframes rotate-in-2-bl-cw-${t} {
  0% {
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 0 100%;
    opacity: 1;
  }
}
  `}function ka(t){return`
@keyframes rotate-in-2-bl-ccw-${t} {
  0% {
    transform: rotate(45deg);
    transform-origin: 0 100%;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 0 100%;
    opacity: 1;
  }
}
  `}function Jf(t){return`
@keyframes rotate-in-2-tl-cw-${t} {
  0% {
    transform: rotate(-45deg);
    transform-origin: 0 0;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 0 0;
    opacity: 1;
  }
}
  `}function Qf(t){return`
@keyframes rotate-in-2-tl-ccw-${t} {
  0% {
    transform: rotate(45deg);
    transform-origin: 0 0;
    opacity: 0;
  }
  100% {
    transform: rotate(0);
    transform-origin: 0 0;
    opacity: 1;
  }
}
  `}const jf={"rotate-in-2-cw":Lu,"rotate-in-2-ccw":Vf,"rotate-in-2-fwd-ccw":Xf,"rotate-in-2-bck-ccw":Wf,"rotate-in-2-fwd-cw":Yf,"rotate-in-2-bck-cw":Hf,"rotate-in-center":kf,"rotate-in-top":Of,"rotate-in-bottom":Rf,"rotate-in-left":Nf,"rotate-in-right":Pf,"rotate-in-tr":Lf,"rotate-in-bl":Bf,"rotate-in-tl":Mf,"rotate-in-br":Df,"rotate-in-hor":Ff,"rotate-in-ver":zf,"rotate-in-diag-1":Uf,"rotate-in-diag-2":Vo,"rotate-in-2-tl-ccw":Qf,"rotate-in-2-tl-cw":Jf,"rotate-in-2-bl-ccw":ka,"rotate-in-2-bl-cw":Kf,"rotate-in-2-tr-cw":Gf,"rotate-in-2-tr-ccw":qf,"rotate-in-2-br-cw":Zf,"rotate-in-2-br-ccw":Pu};function td(t){return`
@keyframes flip-in-hor-bottom-${t} {
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}
  `}function ed(t){return`
@keyframes flip-in-hor-top-${t} {
  0% {
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}
  `}function nd(t){return`
@keyframes flip-in-ver-right-${t} {
  0% {
    transform: rotateY(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}
  `}function rd(t){return`
@keyframes flip-in-ver-left-${t} {
  0% {
    transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}
  `}function id(t){return`
@keyframes flip-in-diag-1-tr-${t} {
  0% {
    transform: rotate3d(1, 1, 0, -80deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}
  `}function ad(t){return`
@keyframes flip-in-diag-1-bl-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 80deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}
  `}function od(t){return`
@keyframes flip-in-diag-2-tl-${t} {
  0% {
    transform: rotate3d(-1, 1, 0, 80deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}
  `}function sd(t){return`
@keyframes flip-in-diag-2-br-${t} {
  0% {
    transform: rotate3d(-1, 1, 0, -80deg);
    opacity: 0;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}
  `}const ud={"flip-in-hor-top":ed,"flip-in-hor-bottom":td,"flip-in-ver-left":rd,"flip-in-ver-right":nd,"flip-in-diag-1-tr":id,"flip-in-diag-1-bl":ad,"flip-in-diag-2-tl":od,"flip-in-diag-2-br":sd};function ld(t){return`
@keyframes bounce-in-top-${t} {
  0% {
    transform: translateY(-${200*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-${65*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-${28*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-${8*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
  `}function cd(t){return`
@keyframes bounce-in-right-${t} {
  0% {
    transform: translateX(${200*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(${68*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(${32*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(${8*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
}
  `}function fd(t){return`
@keyframes bounce-in-bottom-${t} {
  0% {
    transform: translateY(${200*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(${65*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(${28*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(${8*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
  `}function dd(t){return`
@keyframes bounce-in-left-${t} {
  0% {
    transform: translateX(-${200*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(-${68*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(-${28*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(-${8*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
}
  `}function Du(t){return`
@keyframes bounce-in-fwd-${t} {
  0% {
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(${.7*i[t].size});
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(${.84*i[t].size});
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(${.95*i[t].size});
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
  `}function Ru(t){return`
@keyframes bounce-in-bck-${t} {
  0% {
    transform: scale(${7*i[t].size});
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(${1.5*i[t].size});
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(${1.24*i[t].size});
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(${1.04*i[t].size});
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
  `}const pd={"bounce-in-fwd":Du,"bounce-in-bck":Ru,"bounce-in-top":ld,"bounce-in-bottom":fd,"bounce-in-left":dd,"bounce-in-right":cd};function hd(t){return`
@keyframes roll-in-left-${t} {
  0% {
    transform: translateX(-${200*i[t].layout}px) rotate(-${540*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}
  `}function gd(t){return`
@keyframes roll-in-top-${t} {
  0% {
    transform: translateY(-${200*i[t].layout}px) rotate(-${540*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}
  `}function md(t){return`
@keyframes roll-in-right-${t} {
  0% {
    transform: translateX(${200*i[t].layout}px) rotate(${540*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}
  `}function Oa(t){return`
@keyframes roll-in-bottom-${t} {
  0% {
    transform: translateY(${200*i[t].layout}px) rotate(${540*i[t].size}deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
}
  `}const yd={"roll-in-left":hd,"roll-in-top":gd,"roll-in-right":md,"roll-in-bottom":Oa};function vd(t){return`
@keyframes swing-in-top-fwd-${t} {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
  `}function _d(t){return`
@keyframes swing-in-top-bck-${t} {
  0% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
  `}function wd(t){return`
@keyframes swing-in-right-fwd-${t} {
  0% {
    transform: rotateY(-100deg);
    transform-origin: right;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
}
  `}function bd(t){return`
@keyframes swing-in-right-bck-${t} {
  0% {
    transform: rotateY(70deg);
    transform-origin: right;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
}
  `}function Sd(t){return`
@keyframes swing-in-bottom-fwd-${t} {
  0% {
    transform: rotateX(100deg);
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }
}
  `}function Id(t){return`
@keyframes swing-in-bottom-bck-${t} {
  0% {
    transform: rotateX(-70deg);
    transform-origin: bottom;
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }
}
  `}function Ed(t){return`
@keyframes swing-in-left-fwd-${t} {
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
}
  `}function Td(t){return`
@keyframes swing-in-left-bck-${t} {
  0% {
    transform: rotateY(-70deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
}
  `}const Ad={"swing-in-top-fwd":vd,"swing-in-top-bck":_d,"swing-in-right-fwd":wd,"swing-in-right-bck":bd,"swing-in-bottom-fwd":Sd,"swing-in-bottom-bck":Id,"swing-in-left-fwd":Ed,"swing-in-left-bck":Td};function $d(t){return`
@keyframes fade-out-${t} {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
  `}function La(t){return`
@keyframes fade-out-bck-${t} {
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-${160*i[t].size}px);
    opacity: 0;
  }
}
  `}function xd(t){return`
@keyframes fade-out-fwd-${t} {
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(${160*i[t].size}px);
    opacity: 0;
  }
}
  `}function Bu(t){return`
@keyframes fade-out-top-${t} {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-${150*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Nu(t){return`
@keyframes fade-out-tr-${t} {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(${105*i[t].layout}) translateY(-${105*i[t].layout});
    opacity: 0;
  }
}
  `}function Yo(t){return`
@keyframes fade-out-right-${t} {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(${105*i[t].layout});
    opacity: 0;
  }
}
  `}function Mu(t){return`
@keyframes fade-out-br-${t} {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(${105*i[t].layout}) translateY(${105*i[t].layout});
    opacity: 0;
  }
}
  `}function Fu(t){return`
@keyframes fade-out-bottom-${t} {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${105*i[t].layout});
    opacity: 0;
  }
}
  `}function zu(t){return`
@keyframes fade-out-bl-${t} {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-${105*i[t].layout}) translateY(${105*i[t].layout});
    opacity: 0;
  }
}
  `}function Uu(t){return`
@keyframes fade-out-left-${t} {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-${105*i[t].layout});
    opacity: 0;
  }
}
  `}function Cd(t){return`
@keyframes fade-out-tl-${t} {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-${105*i[t].layout}) translateY(-${105*i[t].layout});
    opacity: 0;
  }
}
  `}const kd={"fade-out":$d,"fade-out-bck":La,"fade-out-fwd":xd,"fade-out-top":Bu,"fade-out-tr":Nu,"fade-out-right":Yo,"fade-out-br":Mu,"fade-out-bottom":Fu,"fade-out-bl":zu,"fade-out-left":Uu,"fade-out-tl":Cd};function Od(t){return`
@keyframes slide-out-top-${t} {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-${150*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Pa(t){return`
@keyframes slide-out-tr-${t} {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-${105*i[t].layout}px) translateX(${105*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Da(t){return`
@keyframes slide-out-right-${t} {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(${150*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Ld(t){return`
@keyframes slide-out-br-${t} {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${105*i[t].layout}px) translateX(${105*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Pd(t){return`
@keyframes slide-out-bottom-${t} {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${150*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Xo(t){return`
@keyframes slide-out-bl-${t} {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${105*i[t].layout}px) translateX(-${105*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Vu(t){return`
@keyframes slide-out-left-${t} {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-${150*i[t].layout}px);
    opacity: 0;
  }
}
  `}function Dd(t){return`
@keyframes slide-out-tl-${t} {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-${105*i[t].layout}px) translateX(-${105*i[t].layout}px);
    opacity: 0;
  }
}
  `}const Rd={"slide-out-top":Od,"slide-out-bottom":Pd,"slide-out-left":Vu,"slide-out-right":Da,"slide-out-tl":Dd,"slide-out-tr":Pa,"slide-out-bl":Xo,"slide-out-br":Ld};function Bd(t){return`
@keyframes scale-out-center-${t} {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 1;
  }
}
  `}function Nd(t){return`
@keyframes scale-out-top-${t} {
  0% {
    transform: scale(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 50% 0%;
    opacity: 1;
  }
}
  `}function Md(t){return`
@keyframes scale-out-tr-${t} {
  0% {
    transform: scale(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
  `}function Fd(t){return`
@keyframes scale-out-right-${t} {
  0% {
    transform: scale(1);
    transform-origin: 100% 50%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 100% 50%;
    opacity: 1;
  }
}
  `}function zd(t){return`
@keyframes scale-out-br-${t} {
  0% {
    transform: scale(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}
  `}function Ud(t){return`
@keyframes scale-out-bottom-${t} {
  0% {
    transform: scale(1);
    transform-origin: 50% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 50% 100%;
    opacity: 1;
  }
}
  `}function Vd(t){return`
@keyframes scale-out-bl-${t} {
  0% {
    transform: scale(1);
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 0% 100%;
    opacity: 1;
  }
}
  `}function Yd(t){return`
@keyframes scale-out-left-${t} {
  0% {
    transform: scale(1);
    transform-origin: 0% 50%;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 0% 50%;
    opacity: 1;
  }
}
  `}function Xd(t){return`
@keyframes scale-out-tl-${t} {
  0% {
    transform: scale(1);
    transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    transform: scale(0);
    transform-origin: 0 0;
    opacity: 1;
  }
}
  `}const Hd={"scale-out-center":Bd,"scale-out-top":Nd,"scale-out-right":Fd,"scale-out-bottom":Ud,"scale-out-left":Yd,"scale-out-tr":Md,"scale-out-br":zd,"scale-out-bl":Vd,"scale-out-tl":Xd};function yn(t){return`
@keyframes rotate-out-2-cw-${t} {
  0% {
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform: rotate(${90*i[t].size}deg);
    opacity: 0;
  }
}
  `}function Wd(t){return`
@keyframes rotate-out-2-ccw-${t} {
  0% {
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform: rotate(-${90*i[t].size}deg);
    opacity: 0;
  }
}
  `}function Gd(t){return`
@keyframes rotate-out-2-bck-ccw-${t} {
  0% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-${160*i[t].size}px) rotate(-${90*i[t].size}deg);
    opacity: 0;
  }
}
  `}function xr(t){return`
@keyframes rotate-out-2-bck-cw-${t} {
  0% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-${160*i[t].size}px) rotate(${90*i[t].size}deg);
    opacity: 0;
  }
}
  `}function Ot(t){return`
@keyframes rotate-out-2-fwd-ccw-${t} {
  0% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(${140*i[t].size}px) rotate(-${90*i[t].size}deg);
    opacity: 0;
  }
}
  `}function qd(t){return`
@keyframes rotate-out-2-fwd-cw-${t} {
  0% {
    transform: translateZ(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(${140*i[t].size}px) rotate(${90*i[t].size}deg);
    opacity: 0;
  }
}
  `}function He(t){return`
@keyframes rotate-out-center-${t} {
  0% {
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    opacity: 0;
  }
}
  `}function ye(t){return`
@keyframes rotate-out-top-${t} {
  0% {
    transform: rotate(0);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: top;
    opacity: 0;
  }
}
  `}function Zd(t){return`
@keyframes rotate-out-right-${t} {
  0% {
    transform: rotate(0);
    transform-origin: right;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: right;
    opacity: 0;
  }
}
  `}function or(t){return`
@keyframes rotate-out-bottom-${t} {
  0% {
    transform: rotate(0);
    transform-origin: bottom;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: bottom;
    opacity: 0;
  }
}
  `}function Kd(t){return`
@keyframes rotate-out-left-${t} {
  0% {
    transform: rotate(0);
    transform-origin: left;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: left;
    opacity: 0;
  }
}
  `}function Jd(t){return`
@keyframes rotate-out-tr-${t} {
  0% {
    transform: rotate(0);
    transform-origin: top right;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: top right;
    opacity: 0;
  }
}
  `}function Qd(t){return`
@keyframes rotate-out-br-${t} {
  0% {
    transform: rotate(0);
    transform-origin: bottom right;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: bottom right;
    opacity: 0;
  }
}
  `}function jd(t){return`
@keyframes rotate-out-ver-${t} {
  0% {
    transform: rotateY(360deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 0;
  }
}
  `}function tp(t){return`
@keyframes rotate-out-diag-1-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 360deg);
    opacity: 1;
  }
  100% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 0;
  }
}
  `}function Ho(t){return`
@keyframes rotate-out-hor-${t} {
  0% {
    transform: rotateX(360deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 0;
  }
}
  `}function ep(t){return`
@keyframes rotate-out-tl-${t} {
  0% {
    transform: rotate(0);
    transform-origin: top left;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: top left;
    opacity: 0;
  }
}
  `}function Vn(t){return`
@keyframes rotate-out-bl-${t} {
  0% {
    transform: rotate(0);
    transform-origin: bottom left;
    opacity: 1;
  }
  100% {
    transform: rotate(-360deg);
    transform-origin: bottom left;
    opacity: 0;
  }
}
  `}function Yu(t){return`
@keyframes rotate-out-diag-2-${t} {
  0% {
    transform: rotate3d(-1, 1, 0, 360deg);
    opacity: 1;
  }
  100% {
    transform: rotate3d(-1, 1, 0, 0deg);
    opacity: 0;
  }
}
  `}function Ra(t){return`
@keyframes rotate-out-2-tr-cw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: rotate(45deg);
    transform-origin: 100% 0%;
    opacity: 0;
  }
}
  `}function pe(t){return`
@keyframes rotate-out-2-tr-ccw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg);
    transform-origin: 100% 0%;
    opacity: 0;
  }
}
  `}function ge(t){return`
@keyframes rotate-out-2-tl-ccw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg);
    transform-origin: 0 0;
    opacity: 0;
  }
}
  `}function Xu(t){return`
@keyframes rotate-out-2-tl-cw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    transform: rotate(45deg);
    transform-origin: 0 0;
    opacity: 0;
  }
}
  `}function np(t){return`
@keyframes rotate-out-2-bl-ccw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 0 100%;
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    opacity: 0;
  }
}
  `}function rp(t){return`
@keyframes rotate-out-2-bl-cw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 0 100%;
    opacity: 1;
  }
  100% {
    transform: rotate(45deg);
    transform-origin: 0 100%;
    opacity: 0;
  }
}
  `}function ip(t){return`
@keyframes rotate-out-2-br-ccw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg);
    transform-origin: 100% 100%;
    opacity: 0;
  }
}
  `}function ap(t){return`
@keyframes rotate-out-2-br-cw-${t} {
  0% {
    transform: rotate(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    opacity: 0;
  }
}
  `}const op={"rotate-out-2-cw":yn,"rotate-out-2-ccw":Wd,"rotate-out-2-fwd-ccw":Ot,"rotate-out-2-fwd-cw":qd,"rotate-out-2-bck-ccw":Gd,"rotate-out-2-bck-cw":xr,"rotate-out-center":He,"rotate-out-top":ye,"rotate-out-right":Zd,"rotate-out-bottom":or,"rotate-out-left":Kd,"rotate-out-tr":Jd,"rotate-out-br":Qd,"rotate-out-bl":Vn,"rotate-out-tl":ep,"rotate-out-hor":Ho,"rotate-out-ver":jd,"rotate-out-diag-1":tp,"rotate-out-diag-2":Yu,"rotate-out-2-tr-cw":Ra,"rotate-out-2-tr-ccw":pe,"rotate-out-2-br-cw":ap,"rotate-out-2-br-ccw":ip,"rotate-out-2-bl-cw":rp,"rotate-out-2-bl-ccw":np,"rotate-out-2-tl-cw":Xu,"rotate-out-2-tl-ccw":ge};function sp(t){return`
@keyframes flip-out-hor-top-${t} {
  0% {
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    opacity: 0;
  }
}
  `}function Hu(t){return`
@keyframes flip-out-hor-bottom-${t} {
  0% {
    transform: rotateX(0);
    opacity: 1;
  }
  100% {
    transform: rotateX(-70deg);
    opacity: 0;
  }
}
  `}function Pi(t){return`
@keyframes flip-out-ver-left-${t} {
  0% {
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    transform: rotateY(-70deg);
    opacity: 0;
  }
}
  `}function Wo(t){return`
@keyframes flip-out-ver-right-${t} {
  0% {
    transform: rotateY(0);
    opacity: 1;
  }
  100% {
    transform: rotateY(70deg);
    opacity: 0;
  }
}
  `}function up(t){return`
@keyframes flip-out-diag-1-tr-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
  100% {
    transform: rotate3d(1, 1, 0, 70deg);
    opacity: 0;
  }
}
  `}function Wu(t){return`
@keyframes flip-out-diag-1-bl-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
  100% {
    transform: rotate3d(1, 1, 0, -70deg);
    opacity: 0;
  }
}
  `}function Ba(t){return`
@keyframes flip-out-diag-2-br-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
  100% {
    transform: rotate3d(-1, 1, 0, 70deg);
    opacity: 0;
  }
}
  `}function je(t){return`
@keyframes flip-out-diag-2-tl-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
  100% {
    transform: rotate3d(-1, 1, 0, -70deg);
    opacity: 0;
  }
}
  `}const jr={"flip-out-hor-top":sp,"flip-out-hor-bottom":Hu,"flip-out-ver-left":Pi,"flip-out-ver-right":Wo,"flip-out-diag-1-tr":up,"flip-out-diag-1-bl":Wu,"flip-out-diag-2-tl":je,"flip-out-diag-2-br":Ba};function lp(t){return`
@keyframes bounce-out-top-${t} {
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateY(-${30*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateY(-${38*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateY(-${75*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(-${200*i[t].layout}px);
    opacity: 0;
  }
}
  `}function cp(t){return`
@keyframes bounce-out-right-${t} {
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateX(${30*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateX(${38*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateX(${80*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
}
  `}function fp(t){return`
@keyframes bounce-out-bottom-${t} {
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateY(${30*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateY(${38*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateY(${75*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(${200*i[t].layout}px);
    opacity: 0;
  }
}
  `}function dp(t){return`
@keyframes bounce-out-left-${t} {
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateX(-${30*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateX(-${38*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateX(-${80*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px);
    opacity: 0;
  }
}
  `}function pp(t){return`
@keyframes bounce-out-bck-${t} {
  0% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateZ(-${100*i[t].size}px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateZ(-${110*i[t].size}px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateZ(-${200*i[t].size}px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateZ(0) scale(1);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateZ(-${200*i[t].size}px) scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
}
  `}function Gu(t){return`
@keyframes bounce-out-fwd-${t} {
  0% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateZ(${90*i[t].size}px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateZ(${95*i[t].size}px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateZ(${95*i[t].size}px);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateZ(${200*i[t].size}px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
}
  `}const Yn={"bounce-out-top":lp,"bounce-out-bottom":fp,"bounce-out-right":cp,"bounce-out-left":dp,"bounce-out-bck":pp,"bounce-out-fwd":Gu};function Pt(t){return`
@keyframes roll-out-left-${t} {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(-${200*i[t].layout}px) rotate(-${540*i[t].size}deg);
    opacity: 0;
  }
}
  `}function qu(t){return`
@keyframes roll-out-top-${t} {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-${200*i[t].layout}px) rotate(-${540*i[t].size}deg);
    opacity: 0;
  }
}
  `}function cn(t){return`
@keyframes roll-out-right-${t} {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(${200*i[t].layout}px) rotate(${540*i[t].size}deg);
    opacity: 0;
  }
}
  `}function Zu(t){return`
@keyframes roll-out-bottom-${t} {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(${200*i[t].layout}px) rotate(${540*i[t].size}deg);
    opacity: 0;
  }
}
  `}const hp={"roll-out-left":Pt,"roll-out-top":qu,"roll-out-right":cn,"roll-out-bottom":Zu};function Wt(t){return`
@keyframes swing-out-top-bck-${t} {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
}
  `}function gp(t){return`
@keyframes swing-out-top-fwd-${t} {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
}
  `}function Ku(t){return`
@keyframes swing-out-right-bck-${t} {
  0% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
  100% {
    transform: rotateY(-100deg);
    transform-origin: right;
    opacity: 0;
  }
}
  `}function Na(t){return`
@keyframes swing-out-right-fwd-${t} {
  0% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
  100% {
    transform: rotateY(70deg);
    transform-origin: right;
    opacity: 0;
  }
}
  `}function mp(t){return`
@keyframes swing-out-bottom-bck-${t} {
  0% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }
  100% {
    transform: rotateX(100deg);
    transform-origin: bottom;
    opacity: 0;
  }
}
  `}function yp(t){return`
@keyframes swing-out-bottom-fwd-${t} {
  0% {
    transform: rotateX(0);
    transform-origin: bottom;
    opacity: 1;
  }
  100% {
    transform: rotateX(-70deg);
    transform-origin: bottom;
    opacity: 0;
  }
}
  `}function vp(t){return`
@keyframes swing-out-left-bck-${t} {
  0% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
  100% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
}
  `}function _p(t){return`
@keyframes swing-out-left-fwd-${t} {
  0% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
  100% {
    transform: rotateY(-70deg);
    transform-origin: left;
    opacity: 0;
  }
}
  `}const wp={"swing-out-top-bck":Wt,"swing-out-top-fwd":gp,"swing-out-right-bck":Ku,"swing-out-right-fwd":Na,"swing-out-bottom-bck":mp,"swing-out-bottom-fwd":yp,"swing-out-left-bck":vp,"swing-out-left-fwd":_p};function bp(t){return`
    @keyframes pulse-${t} {
      from {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(${.75/i[t].size}, ${.75/i[t].size}, ${.75/i[t].size});
      }
      to {
        transform: scale3d(1, 1, 1);
      }
    }
  `}function Sp(t){return`
    @keyframes pulse-reverse-${t} {
      from {
        transform: scale3d(1, 1, 1);
      }
      50% {
        transform: scale3d(${1.2*i[t].size}, ${1.2*i[t].size}, ${1.2*i[t].size});
      }
      to {
        transform: scale3d(1, 1, 1);
      }
    }
  `}const Ip={pulse:bp,"pulse-reverse":Sp};function Ep(t){return`
@keyframes heartbeat-${t} {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(${.91*i[t].size});
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(${.98*i[t].size});
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(${.87*i[t].size});
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
  `}function Tp(t){return`
@keyframes heartbeat-reverse-${t} {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(${1.09*i[t].size});
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(${1.02*i[t].size});
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(${1.13*i[t].size});
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
  `}function Ap(t){return`
@keyframes pulsate-bck-${t} {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(${.8*i[t].size});
  }
  100% {
    transform: scale(1);
  }
}
  `}function $p(t){return`
@keyframes pulsate-fwd-${t} {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(${1.2*i[t].size});
  }
  100% {
    transform: scale(1);
  }
}
  `}const xp={"pulsate-bck":Ap,"pulsate-fwd":$p,heartbeat:Ep,"heartbeat-reverse":Tp};function Go(t){return`
@keyframes scale-up-center-${t} {
  0% {
    transform: scale(${.6*i[t].size});
  }
  100% {
    transform: scale(1);
  }
}
  `}function Cp(t){return`
@keyframes scale-up-top-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 50% 0%;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
  }
}
  `}function qo(t){return`
@keyframes scale-up-right-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 100% 50%;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 50%;
  }
}
  `}function kp(t){return`
@keyframes scale-up-bottom-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
}
  `}function Op(t){return`
@keyframes scale-up-left-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 0% 50%;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 50%;
  }
}
  `}function Lp(t){return`
@keyframes scale-up-tr-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 100% 0%;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 0%;
  }
}
  `}function $e(t){return`
@keyframes scale-up-br-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 100% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 100% 100%;
  }
}
  `}function We(t){return`
@keyframes scale-up-tl-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 0% 0%;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 0%;
  }
}
  `}function Pp(t){return`
@keyframes scale-up-bl-${t} {
  0% {
    transform: scale(${.6*i[t].size});
    transform-origin: 0% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 0% 100%;
  }
}
  `}const Dp={"scale-up-center":Go,"scale-up-top":Cp,"scale-up-right":qo,"scale-up-bottom":kp,"scale-up-left":Op,"scale-up-tr":Lp,"scale-up-tl":We,"scale-up-br":$e,"scale-up-bl":Pp};function Rp(t){return`
@keyframes scale-down-center-${t} {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(${.6*i[t].size});
  }
}
  `}function Ju(t){return`
@keyframes scale-down-top-${t} {
  0% {
    transform: scale(1);
    transform-origin: 50% 0%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 50% 0%;
  }
}
  `}function Bp(t){return`
@keyframes scale-down-tr-${t} {
  0% {
    transform: scale(1);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 100% 0%;
  }
}
  `}function Np(t){return`
@keyframes scale-down-right-${t} {
  0% {
    transform: scale(1);
    transform-origin: 100% 50%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 100% 50%;
  }
}
  `}function Mp(t){return`
@keyframes scale-down-br-${t} {
  0% {
    transform: scale(1);
    transform-origin: 100% 100%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 100% 100%;
  }
}
  `}function Qu(t){return`
@keyframes scale-down-bottom-${t} {
  0% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 50% 100%;
  }
}
  `}function Fp(t){return`
@keyframes scale-down-bl-${t} {
  0% {
    transform: scale(1);
    transform-origin: 0% 100%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 0% 100%;
  }
}
  `}function zp(t){return`
@keyframes scale-down-left-${t} {
  0% {
    transform: scale(1);
    transform-origin: 0% 50%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 0% 50%;
  }
}
  `}function Up(t){return`
@keyframes scale-down-tl-${t} {
  0% {
    transform: scale(1);
    transform-origin: 0% 0%;
  }
  100% {
    transform: scale(${.6*i[t].size});
    transform-origin: 0% 0%;
  }
}
  `}const ju={"scale-down-center":Rp,"scale-down-top":Ju,"scale-down-right":Np,"scale-down-bottom":Qu,"scale-down-left":zp,"scale-down-tr":Bp,"scale-down-tl":Up,"scale-down-br":Mp,"scale-down-bl":Fp};function tl(t){return`
@keyframes slide-top-${t} {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-${150*i[t].size}px);
  }
}
  `}function Vp(t){return`
@keyframes slide-tr-${t} {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-${150*i[t].size}px) translateX(${150*i[t].size}px);
  }
}
  `}function Yp(t){return`
@keyframes slide-right-${t} {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(${150*i[t].size}px);
  }
}
  `}function Xp(t){return`
@keyframes slide-br-${t} {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(${150*i[t].size}px) translateX(${150*i[t].size}px);
  }
}
  `}function Hp(t){return`
@keyframes slide-bottom-${t} {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(${150*i[t].size}px);
  }
}
  `}function ti(t){return`
@keyframes slide-bl-${t} {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(${150*i[t].size}px) translateX(-${150*i[t].size}px);
  }
}
  `}function Wp(t){return`
@keyframes slide-left-${t} {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-${150*i[t].size}px);
  }
}
  `}function Gp(t){return`
@keyframes slide-tl-${t} {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-${150*i[t].size}px) translateX(-${150*i[t].size}px);
  }
}
  `}function qp(t){return`
@keyframes slide-fwd-center-${t} {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px);
  }
}
  `}function Zp(t){return`
@keyframes slide-fwd-top-${t} {
  0% {
    transform: translateZ(0) translateY(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateY(-${150*i[t].size}px);
  }
}
  `}function Kp(t){return`
@keyframes slide-fwd-tr-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateY(-${150*i[t].size}px) translateX(${150*i[t].size}px);
  }
}
  `}function el(t){return`
@keyframes slide-fwd-right-${t} {
  0% {
    transform: translateZ(0) translateX(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateX(${150*i[t].size}px);
  }
}
  `}function nl(t){return`
@keyframes slide-fwd-br-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateY(${150*i[t].size}px) translateX(${150*i[t].size}px);
  }
}
  `}function Jp(t){return`
@keyframes slide-fwd-bottom-${t} {
  0% {
    transform: translateZ(0) translateY(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateY(${150*i[t].size}px);
  }
}
  `}function Qp(t){return`
@keyframes slide-fwd-bl-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateY(${150*i[t].size}px) translateX(-${150*i[t].size}px);
  }
}
  `}function jp(t){return`
@keyframes slide-fwd-left-${t} {
  0% {
    transform: translateZ(0) translateX(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateX(-${150*i[t].size}px);
  }
}
  `}function th(t){return`
@keyframes slide-fwd-tl-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(${160*i[t].size}px) translateY(-${150*i[t].size}px) translateX(-${150*i[t].size}px);
  }
}
  `}function eh(t){return`
@keyframes slide-bck-center-${t} {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px);
  }
}
  `}function nh(t){return`
@keyframes slide-bck-top-${t} {
  0% {
    transform: translateZ(0) translateY(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateY(-${105*i[t].size}px);
  }
}
  `}function rh(t){return`
@keyframes slide-bck-tr-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateY(-${105*i[t].size}px) translateX(${105*i[t].size}px);
  }
}
  `}function ih(t){return`
@keyframes slide-bck-right-${t} {
  0% {
    transform: translateZ(0) translateX(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateX(${105*i[t].size}px);
  }
}
  `}function ah(t){return`
@keyframes slide-bck-br-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateY(${105*i[t].size}px) translateX(${105*i[t].size}px);
  }
}
  `}function oh(t){return`
@keyframes slide-bck-bottom-${t} {
  0% {
    transform: translateZ(0) translateY(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateY(${105*i[t].size}px);
  }
}
  `}function sh(t){return`
@keyframes slide-bck-tl-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateY(-${105*i[t].size}px) translateX(-${105*i[t].size}px);
  }
}
  `}function uh(t){return`
@keyframes slide-bck-bl-${t} {
  0% {
    transform: translateZ(0) translateY(0) translateX(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateY(${105*i[t].size}px) translateX(-${105*i[t].size}px);
  }
}
  `}function lh(t){return`
@keyframes slide-bck-left-${t} {
  0% {
    transform: translateZ(0) translateX(0);
  }
  100% {
    transform: translateZ(-${105*i[t].size}px) translateX(-${105*i[t].size}px);
  }
}
  `}const ch={"slide-top":tl,"slide-right":Yp,"slide-bottom":Hp,"slide-left":Wp,"slide-tr":Vp,"slide-br":Xp,"slide-bl":ti,"slide-tl":Gp,"slide-fwd-center":qp,"slide-fwd-top":Zp,"slide-fwd-tr":Kp,"slide-fwd-right":el,"slide-fwd-br":nl,"slide-fwd-bottom":Jp,"slide-fwd-bl":Qp,"slide-fwd-left":jp,"slide-fwd-tl":th,"slide-bck-center":eh,"slide-bck-top":nh,"slide-bck-tr":rh,"slide-bck-right":ih,"slide-bck-br":ah,"slide-bck-bottom":oh,"slide-bck-bl":uh,"slide-bck-left":lh,"slide-bck-tl":sh};function fh(t){return`
@keyframes jello-horizontal-${t} {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(${1.25*i[t].size}, ${.75*i[t].size}, 1);
  }
  40% {
    transform: scale3d(${.75*i[t].size}, ${1.25*i[t].size}, 1);
  }
  50% {
    transform: scale3d(${1.15*i[t].size}, ${.85*i[t].size}, 1);
  }
  65% {
    transform: scale3d(${.95*i[t].size}, ${1.05*i[t].size}, 1);
  }
  75% {
    transform: scale3d(${1.05*i[t].size}, ${.95*i[t].size}, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
  `}function dh(t){return`
@keyframes jello-vertical-${t} {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(${.75*i[t].size}, ${1.25*i[t].size}, 1);
  }
  40% {
    transform: scale3d(${1.25*i[t].size}, ${.75*i[t].size}, 1);
  }
  50% {
    transform: scale3d(${.85*i[t].size}, ${1.15*i[t].size}, 1);
  }
  65% {
    transform: scale3d(${1.05*i[t].size}, ${.95*i[t].size}, 1);
  }
  75% {
    transform: scale3d(${.95*i[t].size}, ${1.05*i[t].size}, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
  `}function ph(t){return`
@keyframes jello-diagonal-1-${t} {
  0% {
    transform: skew(0deg 0deg);
  }
  30% {
    transform: skew(${25*i[t].size}deg ${25*i[t].size}deg);
  }
  40% {
    transform: skew(-${15*i[t].size}deg, -${15*i[t].size}deg);
  }
  50% {
    transform: skew(${15*i[t].size}deg, ${15*i[t].size}deg);
  }
  65% {
    transform: skew(-${5*i[t].size}deg, -${5*i[t].size}deg);
  }
  75% {
    transform: skew(${5*i[t].size}deg, ${5*i[t].size}deg);
  }
  100% {
    transform: skew(0deg 0deg);
  }
}
  `}function hh(t){return`
@keyframes jello-diagonal-2-${t} {
  0% {
    transform: skew(0deg 0deg);
  }
  30% {
    transform: skew(-${25*i[t].size}deg -${25*i[t].size}deg);
  }
  40% {
    transform: skew(${15*i[t].size}deg, ${15*i[t].size}deg);
  }
  50% {
    transform: skew(-${15*i[t].size}deg, -${15*i[t].size}deg);
  }
  65% {
    transform: skew(${5*i[t].size}deg, ${5*i[t].size}deg);
  }
  75% {
    transform: skew(-${5*i[t].size}deg, -${5*i[t].size}deg);
  }
  100% {
    transform: skew(0deg 0deg);
  }
}
  `}const gh={"jello-horizontal":fh,"jello-vertical":dh,"jello-diagonal-1":ph,"jello-diagonal-2":hh};function mh(t){return`
@keyframes bounce-top-${t} {
  0% {
    transform: translateY(-${45*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-${24*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-${12*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-${6*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-${4*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
  `}function yh(t){return`
@keyframes bounce-bottom-${t} {
  0% {
    transform: translateY(${45*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(${24*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(${12*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(${6*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(${4*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
  `}function vh(t){return`
@keyframes bounce-left-${t} {
  0% {
    transform: translateX(-${48*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateX(-2${6*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(-${13*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateX(-${6.5*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateX(-${4*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
  `}function _h(t){return`
@keyframes bounce-right-${t} {
  0% {
    transform: translateX(${48*i[t].layout}px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateX(2${6*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(${13*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateX(${6.5*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateX(${4*i[t].layout}px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
  `}const wh={"bounce-top":mh,"bounce-bottom":yh,"bounce-left":vh,"bounce-right":_h};function bh(t){return`
@keyframes rotate-center-${t} {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
  `}function Zo(t){return`
@keyframes rotate-top-${t} {
  0% {
    transform: rotate(0);
    transform-origin: top;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: top;
  }
}
  `}function rl(t){return`
@keyframes rotate-tr-${t} {
  0% {
    transform: rotate(0);
    transform-origin: top right;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: top right;
  }
}
  `}function il(t){return`
@keyframes rotate-right-${t} {
  0% {
    transform: rotate(0);
    transform-origin: right;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: right;
  }
}
`}function Sh(t){return`
@keyframes rotate-br-${t} {
  0% {
    transform: rotate(0);
    transform-origin: bottom right;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: bottom right;
  }
}
  `}function Ih(t){return`
@keyframes rotate-bottom-${t} {
  0% {
    transform: rotate(0);
    transform-origin: bottom;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: bottom;
  }
}
  `}function Eh(t){return`
@keyframes rotate-bl-${t} {
  0% {
    transform: rotate(0);
    transform-origin: bottom left;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: bottom left;
  }
}
  `}function Ko(t){return`
@keyframes rotate-left-${t} {
  0% {
    transform: rotate(0);
    transform-origin: left;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: left;
  }
}
  `}function Th(t){return`
@keyframes rotate-tl-${t} {
  0% {
    transform: rotate(0);
    transform-origin: top left;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: top left;
  }
}
  `}function Ah(t){return`
@keyframes rotate-hor-center-${t} {
  0% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(-360deg);
  }
}
  `}function $h(t){return`
@keyframes rotate-vert-center-${t} {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
  `}function Ge(t){return`
@keyframes rotate-diagonal-1-${t} {
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
  }
  50% {
    transform: rotate3d(1, 1, 0, -180deg);
  }
  100% {
    transform: rotate3d(1, 1, 0, -360deg);
  }
}
  `}function Jo(t){return`
@keyframes rotate-diagonal-2-${t} {
  0% {
    transform: rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    transform: rotate3d(-1, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(-1, 1, 0, 360deg);
  }
}
  `}const xh={"rotate-center":bh,"rotate-top":Zo,"rotate-right":il,"rotate-left":Ko,"rotate-bottom":Ih,"rotate-tr":rl,"rotate-br":Sh,"rotate-bl":Eh,"rotate-tl":Th,"rotate-hor-center":Ah,"rotate-vert-center":$h,"rotate-diagonal-1":Ge,"rotate-diagonal-2":Jo};function Ch(t){return`
@keyframes flicker-1-${t} {
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  47.99% {
    opacity: 1;
  }
  48% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  49.01% {
    opacity: 1;
  }
}
  `}function kh(t){return`
@keyframes flicker-2-${t} {
  0%,
  100% {
    opacity: 1;
  }
  41.99% {
    opacity: 1;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  43.01% {
    opacity: 1;
  }
  45.99% {
    opacity: 1;
  }
  46% {
    opacity: 0;
  }
  46.9% {
    opacity: 0;
  }
  46.91% {
    opacity: 1;
  }
  51.99% {
    opacity: 1;
  }
  52% {
    opacity: 0;
  }
  52.8% {
    opacity: 0;
  }
  52.81% {
    opacity: 1;
  }
}
  `}function Oh(t){return`
@keyframes flicker-3-${t} {
  0%,
  100% {
    opacity: 1;
  }
  32.98% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  34% {
    opacity: 0;
  }
  34.02% {
    opacity: 1;
  }
  34.98% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  35.9% {
    opacity: 0;
  }
  35.92% {
    opacity: 1;
  }
  38.98% {
    opacity: 1;
  }
  39% {
    opacity: 0;
  }
  39.8% {
    opacity: 0;
  }
  39.82% {
    opacity: 1;
  }
  83.98% {
    opacity: 1;
  }
  84% {
    opacity: 0;
  }
  84.9% {
    opacity: 0;
  }
  84.92% {
    opacity: 1;
  }
}
  `}function Qo(t){return`
@keyframes flicker-4-${t} {
  0%,
  100% {
    opacity: 1;
  }
  31.98% {
    opacity: 1;
  }
  32% {
    opacity: 0;
  }
  32.8% {
    opacity: 0;
  }
  32.82% {
    opacity: 1;
  }
  34.98% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  35.7% {
    opacity: 0;
  }
  35.72% {
    opacity: 1;
  }
  36.98% {
    opacity: 1;
  }
  37% {
    opacity: 0;
  }
  37.6% {
    opacity: 0;
  }
  37.62% {
    opacity: 1;
  }
  67.98% {
    opacity: 1;
  }
  68% {
    opacity: 0;
  }
  68.4% {
    opacity: 0;
  }
  68.42% {
    opacity: 1;
  }
  95.98% {
    opacity: 1;
  }
  96% {
    opacity: 0;
  }
  96.7% {
    opacity: 0;
  }
  96.72% {
    opacity: 1;
  }
  98.98% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  99.6% {
    opacity: 0;
  }
  99.62% {
    opacity: 1;
  }
}
  `}function Lh(t){return`
@keyframes flicker-5-${t} {
  0%,
  100% {
    opacity: 1;
  }
  0% {
    opacity: 1;
  }
  1% {
    opacity: 1;
  }
  1.02% {
    opacity: 1;
  }
  8.98% {
    opacity: 1;
  }
  9% {
    opacity: 0;
  }
  9.8% {
    opacity: 0;
  }
  9.82% {
    opacity: 1;
  }
  9.48% {
    opacity: 1;
  }
  9.5% {
    opacity: 1;
  }
  9.6% {
    opacity: 1;
  }
  9.62% {
    opacity: 1;
  }
  14.98% {
    opacity: 1;
  }
  15% {
    opacity: 0.5;
  }
  15.8% {
    opacity: 0.5;
  }
  15.82% {
    opacity: 1;
  }
  15.18% {
    opacity: 1;
  }
  15.2% {
    opacity: 0.7;
  }
  16% {
    opacity: 0.7;
  }
  16.02% {
    opacity: 1;
  }
  15.48% {
    opacity: 1;
  }
  15.5% {
    opacity: 0.5;
  }
  16.2% {
    opacity: 0.5;
  }
  16.22% {
    opacity: 1;
  }
  16.98% {
    opacity: 1;
  }
  17% {
    opacity: 1;
  }
  17.8% {
    opacity: 1;
  }
  17.82% {
    opacity: 1;
  }
  20.48% {
    opacity: 1;
  }
  20.5% {
    opacity: 0.9;
  }
  21.3% {
    opacity: 0.9;
  }
  21.32% {
    opacity: 1;
  }
  20.98% {
    opacity: 1;
  }
  21% {
    opacity: 1;
  }
  22% {
    opacity: 1;
  }
  22.02% {
    opacity: 1;
  }
  39.98% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  41% {
    opacity: 1;
  }
  41.02% {
    opacity: 1;
  }
  40.48% {
    opacity: 1;
  }
  40.5% {
    opacity: 0.6;
  }
  41.4% {
    opacity: 0.6;
  }
  41.42% {
    opacity: 1;
  }
  41.98% {
    opacity: 1;
  }
  42% {
    opacity: 1;
  }
  42.8% {
    opacity: 1;
  }
  42.82% {
    opacity: 1;
  }
  59.98% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  61% {
    opacity: 1;
  }
  61.02% {
    opacity: 1;
  }
  60.18% {
    opacity: 1;
  }
  60.2% {
    opacity: 0.2;
  }
  61% {
    opacity: 0.2;
  }
  61.02% {
    opacity: 1;
  }
  60.78% {
    opacity: 1;
  }
  60.8% {
    opacity: 0.4;
  }
  61.6% {
    opacity: 0.4;
  }
  61.62% {
    opacity: 1;
  }
  61.38% {
    opacity: 1;
  }
  61.4% {
    opacity: 0;
  }
  62.2% {
    opacity: 0;
  }
  62.22% {
    opacity: 1;
  }
  61.78% {
    opacity: 1;
  }
  61.8% {
    opacity: 1;
  }
  62.8% {
    opacity: 1;
  }
  62.82% {
    opacity: 1;
  }
  75.98% {
    opacity: 1;
  }
  76% {
    opacity: 1;
  }
  77% {
    opacity: 1;
  }
  77.02% {
    opacity: 1;
  }
  77.98% {
    opacity: 1;
  }
  78% {
    opacity: 0.7;
  }
  78.8% {
    opacity: 0.7;
  }
  78.82% {
    opacity: 1;
  }
  78.98% {
    opacity: 1;
  }
  79% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  80.02% {
    opacity: 1;
  }
  99.98% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
  101% {
    opacity: 1;
  }
  101.02% {
    opacity: 1;
  }
}
  `}function jo(t){return`
  @keyframes flicker-6-${t} {
    from,
    50%,
    to {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  `}const Ph={"flicker-1":Ch,"flicker-2":kh,"flicker-3":Oh,"flicker-4":Qo,"flicker-5":Lh,"flicker-6":jo};function Dh(t){return`
@keyframes shake-horizontal-${t} {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-${10*i[t].size}px);
  }
  20%,
  40%,
  60% {
    transform: translateX(${10*i[t].size}px);
  }
  80% {
    transform: translateX(${8*i[t].size}px);
  }
  90% {
    transform: translateX(-${8*i[t].size}px);
  }
}
  `}function Rh(t){return`
@keyframes shake-vertical-${t} {
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-${8*i[t].size}px);
  }
  20%,
  40%,
  60% {
    transform: translateY(${8*i[t].size}px);
  }
  80% {
    transform: translateY(${6.4*i[t].size}px);
  }
  90% {
    transform: translateY(-${6.4*i[t].size}px);
  }
}
  `}function Bh(t){return`
@keyframes shake-lr-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  10% {
    transform: rotate(${6.4*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${10*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${10*i[t].size}deg);
  }
  80% {
    transform: rotate(-${6.4*i[t].size}deg);
  }
  90% {
    transform: rotate(${6.4*i[t].size}deg);
  }
}
  `}function al(t){return`
@keyframes shake-top-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function Nh(t){return`
@keyframes shake-tr-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 100% 0;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function Mh(t){return`
@keyframes shake-right-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 100% 50%;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function Fh(t){return`
@keyframes shake-br-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 100% 100%;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function ts(t){return`
@keyframes shake-bottom-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 100%;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function es(t){return`
@keyframes shake-bl-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 0 100%;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function zh(t){return`
@keyframes shake-left-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 0 50%;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function Uh(t){return`
@keyframes shake-tl-${t} {
  0%,
  100% {
    transform: rotate(0deg);
    transform-origin: 0 0;
  }
  10% {
    transform: rotate(${2*i[t].size}deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-${4*i[t].size}deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(${4*i[t].size}deg);
  }
  80% {
    transform: rotate(-${2*i[t].size}deg);
  }
  90% {
    transform: rotate(${2*i[t].size}deg);
  }
}
  `}function Vh(t){return`
@keyframes shake-${t} {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-${5*i[t].size}px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate3d(${5*i[t].size}px, 0, 0);
  }
}
  `}const Yh={"shake-horizontal":Dh,"shake-vertical":Rh,"shake-lr":Bh,"shake-tr":Nh,"shake-br":Fh,"shake-bl":es,"shake-tl":Uh,"shake-top":al,"shake-right":Mh,"shake-bottom":ts,"shake-left":zh,shake:Vh};function Xh(t){return`
@keyframes vibrate-1-${t} {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-${2*i[t].size}px, ${2*i[t].size}px);
  }
  40% {
    transform: translate(-${2*i[t].size}px, -${2*i[t].size}px);
  }
  60% {
    transform: translate(${2*i[t].size}px, ${2*i[t].size}px);
  }
  80% {
    transform: translate(${2*i[t].size}px, -${2*i[t].size}px);
  }
  100% {
    transform: translate(0);
  }
}
  `}function Hh(t){return`
@keyframes vibrate-2-${t} {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(${2*i[t].size}px, -${2*i[t].size}px);
  }
  40% {
    transform: translate(${2*i[t].size}px, ${2*i[t].size}px);
  }
  60% {
    transform: translate(-${2*i[t].size}px, ${2*i[t].size}px);
  }
  80% {
    transform: translate(-${2*i[t].size}px, -${2*i[t].size}px);
  }
  100% {
    transform: translate(0);
  }
}
  `}function Wh(t){return`
@keyframes vibrate-3-${t} {
  0% {
    transform: translate(0);
  }
  10% {
    transform: translate(-${2*i[t].size}px, -${2*i[t].size}px);
  }
  20% {
    transform: translate(${2*i[t].size}px, -${2*i[t].size}px);
  }
  30% {
    transform: translate(-${2*i[t].size}px, ${2*i[t].size}px);
  }
  40% {
    transform: translate(${2*i[t].size}px, ${2*i[t].size}px);
  }
  50% {
    transform: translate(-${2*i[t].size}px, -${2*i[t].size}px);
  }
  60% {
    transform: translate(${2*i[t].size}px, -${2*i[t].size}px);
  }
  70% {
    transform: translate(-${2*i[t].size}px, ${2*i[t].size}px);
  }
  80% {
    transform: translate(-${2*i[t].size}px, -${2*i[t].size}px);
  }
  90% {
    transform: translate(${2*i[t].size}px, -${2*i[t].size}px);
  }
  100% {
    transform: translate(0);
  }
}
  `}const Gh={"vibrate-1":Xh,"vibrate-2":Hh,"vibrate-3":Wh};function qh(t){return`
@keyframes hor-bottom-${t} {
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-${30*i[t].size}px) rotate(-${6*i[t].size}deg);
  }
  30% {
    transform: translateX(${15*i[t].size}px) rotate(${6*i[t].size}deg);
  }
  45% {
    transform: translateX(-${15*i[t].size}px) rotate(-${3.6*i[t].size}deg);
  }
  60% {
    transform: translateX(${9*i[t].size}px) rotate(${2.4*i[t].size}deg);
  }
  75% {
    transform: translateX(-${6*i[t].size}px) rotate(-${1.2*i[t].size}deg);
  }
}
  `}function Zh(t){return`
@keyframes hor-top-${t} {
  0%,
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-${30*i[t].size}px) rotate(${6*i[t].size}deg);
  }
  30% {
    transform: translateX(${15*i[t].size}px) rotate(-${6*i[t].size}deg);
  }
  45% {
    transform: translateX(-${15*i[t].size}px) rotate(${3.6*i[t].size}deg);
  }
  60% {
    transform: translateX(${9*i[t].size}px) rotate(-${2.4*i[t].size}deg);
  }
  75% {
    transform: translateX(-${6*i[t].size}px) rotate(${1.2*i[t].size}deg);
  }
}
  `}function Kh(t){return`
@keyframes hor-left-${t} {
  0%,
  100% {
    transform: translateY(0) rotate(0);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateY(-${30*i[t].size}px) rotate(-${6*i[t].size}deg);
  }
  30% {
    transform: translateY(${15*i[t].size}px) rotate(${6*i[t].size}deg);
  }
  45% {
    transform: translateY(-${15*i[t].size}px) rotate(-${3.6*i[t].size}deg);
  }
  60% {
    transform: translateY(${9*i[t].size}px) rotate(${2.4*i[t].size}deg);
  }
  75% {
    transform: translateY(-${6*i[t].size}px) rotate(-${1.2*i[t].size}deg);
  }
}
  `}function Jh(t){return`
@keyframes hor-right-${t} {
  0%,
  100% {
    transform: translateY(0) rotate(0);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateY(-${30*i[t].size}px) rotate(${6*i[t].size}deg);
  }
  30% {
    transform: translateY(${15*i[t].size}px) rotate(-${6*i[t].size}deg);
  }
  45% {
    transform: translateY(-${15*i[t].size}px) rotate(${3.6*i[t].size}deg);
  }
  60% {
    transform: translateY(${9*i[t].size}px) rotate(-${2.4*i[t].size}deg);
  }
  75% {
    transform: translateY(-${6*i[t].size}px) rotate(${1.2*i[t].size}deg);
  }
}
  `}const Qh={"hor-bottom":qh,"hor-top":Zh,"hor-left":Kh,"hor-right":Jh};function jh(t){return`
@keyframes rotate-scale-up-${t} {
  0% {
    transform: scale(1) rotateZ(0);
  }
  50% {
    transform: scale(${1.5*i[t].size}) rotateZ(180deg);
  }
  100% {
    transform: scale(1) rotateZ(360deg);
  }
}
  `}function t0(t){return`
@keyframes rotate-scale-down-${t} {
  0% {
    transform: scale(1) rotateZ(0);
  }
  50% {
    transform: scale(${.6*i[t].size}) rotateZ(180deg);
  }
  100% {
    transform: scale(1) rotateZ(360deg);
  }
}
`}const e0={"rotate-scale-up":jh,"rotate-scale-down":t0};function n0(t){return`
    @keyframes flash-${t} {
      from,
      50%,
      to {
        opacity: ${.8*i[t].size};
      }
      25%,
      75% {
        opacity: 0;
      }
    }
  `}const r0={flash:n0};var i0=Object.defineProperty,ol=Object.getOwnPropertySymbols,a0=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?i0(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(t,r)=>{for(var a in r||(r={}))a0.call(r,a)&&n(t,a,r[a]);if(ol)for(var a of ol(r))e.call(r,a)&&n(t,a,r[a]);return t};const i={mild:{size:.8,layout:.6},moderate:{size:1,layout:1},severe:{size:1.2,layout:1.5}},f=o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o(o({},pf),wf),Cf),jf),ud),pd),yd),Ad),kd),Rd),Hd),op),jr),Yn),hp),wp),Ip),xp),Dp),ju),ch),gh),wh),xh),Ph),Yh),Gh),Qh),e0),r0);function v(){const t=y.events.list.filter(u=>u.targetAttrAction===Nt.Animate&&u.targetValue!=="none");let r="";const a=document.createElement("style");try{t.forEach(u=>{const c=Object.assign(Ke,JSON.parse(u.targetActionEffect)),{taketime:b,easing:k,range:T}=c;if(!qr.includes(u.targetValue)&&(r+=f[u.targetValue](c.range),dc.some(S=>u.targetValue.includes(S)))){const S=`${b}ms ${k} 0s 1 normal both paused ${u.targetValue}-${T}`;r+=`
          #${u.targetCID} > .element {
            animation: ${S}
          }
        `}})}catch(u){}a.innerHTML=r,document.head.appendChild(a)}function A(){return L()?(M(),!0):!1}function L(){const{protocol:t}=document.location;return t==="file:"}function M(){const t=document.createDocumentFragment(),r=document.createElement("div"),a="rgb(243,240,243)";r.style.cssText=`   height:100vh; 
        width:100vw; 
        position:fixed; 
        z-index:999999;
        background-color:${a};
        padding: 15px
    `;const u=document.createElement("div");u.innerHTML="\u8BF7\u4F7F\u7528\u6D4B\u8BD5\u5DE5\u5177\uFF0C \u6216\u8005\u624B\u673A\u6D4F\u89C8\u5668\u6253\u5F00",u.style.cssText="font-weight: bold;";const c=document.createElement("div");c.innerHTML="Please use the test tool or mobile browser to open",c.style.cssText="font-weight: bold;margin: 5px auto";const b=document.createElement("div");b.innerHTML=G("yyyy-MM-dd hh:mm:ss"),r.appendChild(u),r.appendChild(c),r.appendChild(b),t.appendChild(r),document.body.insertBefore(t,document.body.childNodes[0])}function G(t){const r=new Date,a={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,String(r.getFullYear()).substr(4-RegExp.$1.length)));for(const u in a)new RegExp("("+u+")").test(t)&&(t=t.replace(RegExp.$1,RegExp.$1.length===1?a[u]:("00"+a[u]).substr(String(a[u]).length)));return t}var q=ae(574),J=ae.n(q),st=ae(187),vt={};vt.insert="head",vt.singleton=!1;var $t=J()(st.Z,vt);const Bt=st.Z.locals||{};var St=(t,r,a)=>new Promise((u,c)=>{var b=S=>{try{T(a.next(S))}catch(N){c(N)}},k=S=>{try{T(a.throw(S))}catch(N){c(N)}},T=S=>S.done?u(S.value):Promise.resolve(S.value).then(b,k);T((a=a.apply(t,r)).next())});const Mt=document.getElementById(ja);function Ut(){return St(this,null,function*(){try{if(A())return;Se.getState()==="ready"?(yield qe(),yield Be()):Se.addEventListener("ready",()=>{Se.getState(),qe().then(()=>{Be().catch(()=>{})}).catch(()=>{})})}catch(t){console.info(t)}})}function qe(){return St(this,null,function*(){xl(),v(),ir(),An(),Rc(),kc(),Ia(),Pl(),yield Jc();try{yield Kc()}catch(t){}})}function Be(){return St(this,null,function*(){(yield Se.isViewable())?yield me():Se.addEventListener("viewableChange",Ze)})}function Ze(t){t&&(me().catch(()=>{}),Se.removeEventListener("viewableChange",Ze))}function me(){return St(this,null,function*(){ir(),yield ef(),fu(Mt),pu();const t=Dn();t!==void 0&&!t.isOverlyingStageEnabled&&(yield Er(Qi().cid),j()),tf(),jc();try{yield ks()}catch(r){}})}const vn={Xm:!1};function Xn(t){y.config.isMuted=t.isMuted}function sl(){const t="onLiveMessage";window.addEventListener("message",r=>{const a=r.data,{action:u,payload:c}=a;if(u===t){const{type:b}=c;b==="gift"?y.handleManeger.publish(F.ReceiveGift,{liveMessage:a}):b==="text"&&y.handleManeger.publish(F.ReceiveBullet,{liveMessage:a})}},!1)}var T0=ae(689),I0=ae.n(T0);class A0{constructor(){this.keyingMap=new Map,this.thresholdTime=150}onKeyUp(r){if(this.keyingMap.has(r)){const a=this.keyingMap.get(r);let u;new Date().getTime()-a.timestamp<this.thresholdTime?u=F.Tap:u=F.Press,this.publish(r,u)}}publish(r,a){y.handleManeger.events.filter(c=>c.sourceAttrCondition===a&&c.sourceEventName===F.KeyboardInput&&c.sourceValue===r).forEach(c=>{const b={sourceAttr:c.sourceAttr,sourceAttrCondition:a,eventId:c.cid,key:r};y.handleManeger.publish(F.KeyboardInput,b)}),this.keyingMap.delete(r)}onKeyDown(r){this.keyingMap.has(r)||this.keyingMap.set(r,{timestamp:new Date().getTime()})}}function $0(){const t=new A0;y.events.list.filter(a=>a.sourceEventName===F.KeyboardInput).forEach(a=>{I0().bind(a.sourceValue,function(u){t.onKeyDown(a.sourceValue)},"keydown"),I0().bind(a.sourceValue,function(u){t.onKeyUp(a.sourceValue)},"keyup")})}Xn({isMuted:vn.Xm}),sl(),to({onEnterStage(t){},onStartLoadResource(){},onLoadResource(){$0()},onMouseEvent(t){},onJumpToLink(t){},onFinish(){}}),Ut().then(()=>{}).catch(t=>{})})()})();
