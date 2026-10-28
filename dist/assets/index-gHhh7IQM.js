(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Km(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Su={exports:{}},Bo={},Mu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function wx(){if(Up)return _t;Up=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function S(O,se,Ie){this.props=O,this.context=se,this.refs=b,this.updater=Ie||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(O,se,Ie){this.props=O,this.context=se,this.refs=b,this.updater=Ie||M}var P=U.prototype=new x;P.constructor=U,w(P,S.prototype),P.isPureReactComponent=!0;var N=Array.isArray,H=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function z(O,se,Ie){var ee,fe={},Me=null,xe=null;if(se!=null)for(ee in se.ref!==void 0&&(xe=se.ref),se.key!==void 0&&(Me=""+se.key),se)H.call(se,ee)&&!F.hasOwnProperty(ee)&&(fe[ee]=se[ee]);var ge=arguments.length-2;if(ge===1)fe.children=Ie;else if(1<ge){for(var Ae=Array(ge),ye=0;ye<ge;ye++)Ae[ye]=arguments[ye+2];fe.children=Ae}if(O&&O.defaultProps)for(ee in ge=O.defaultProps,ge)fe[ee]===void 0&&(fe[ee]=ge[ee]);return{$$typeof:s,type:O,key:Me,ref:xe,props:fe,_owner:L.current}}function C(O,se){return{$$typeof:s,type:O.type,key:se,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function k(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return se[Ie]})}var K=/\/+/g;function q(O,se){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):se.toString(36)}function oe(O,se,Ie,ee,fe){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(Me){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case s:case e:xe=!0}}if(xe)return xe=O,fe=fe(xe),O=ee===""?"."+q(xe,0):ee,N(fe)?(Ie="",O!=null&&(Ie=O.replace(K,"$&/")+"/"),oe(fe,se,Ie,"",function(ye){return ye})):fe!=null&&(A(fe)&&(fe=C(fe,Ie+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(K,"$&/")+"/")+O)),se.push(fe)),1;if(xe=0,ee=ee===""?".":ee+":",N(O))for(var ge=0;ge<O.length;ge++){Me=O[ge];var Ae=ee+q(Me,ge);xe+=oe(Me,se,Ie,Ae,fe)}else if(Ae=y(O),typeof Ae=="function")for(O=Ae.call(O),ge=0;!(Me=O.next()).done;)Me=Me.value,Ae=ee+q(Me,ge++),xe+=oe(Me,se,Ie,Ae,fe);else if(Me==="object")throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return xe}function ce(O,se,Ie){if(O==null)return O;var ee=[],fe=0;return oe(O,ee,"","",function(Me){return se.call(Ie,Me,fe++)}),ee}function J(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var de={current:null},B={transition:null},ue={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:B,ReactCurrentOwner:L};function le(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ce,forEach:function(O,se,Ie){ce(O,function(){se.apply(this,arguments)},Ie)},count:function(O){var se=0;return ce(O,function(){se++}),se},toArray:function(O){return ce(O,function(se){return se})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=S,_t.Fragment=n,_t.Profiler=a,_t.PureComponent=U,_t.StrictMode=r,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,_t.act=le,_t.cloneElement=function(O,se,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ee=w({},O.props),fe=O.key,Me=O.ref,xe=O._owner;if(se!=null){if(se.ref!==void 0&&(Me=se.ref,xe=L.current),se.key!==void 0&&(fe=""+se.key),O.type&&O.type.defaultProps)var ge=O.type.defaultProps;for(Ae in se)H.call(se,Ae)&&!F.hasOwnProperty(Ae)&&(ee[Ae]=se[Ae]===void 0&&ge!==void 0?ge[Ae]:se[Ae])}var Ae=arguments.length-2;if(Ae===1)ee.children=Ie;else if(1<Ae){ge=Array(Ae);for(var ye=0;ye<Ae;ye++)ge[ye]=arguments[ye+2];ee.children=ge}return{$$typeof:s,type:O.type,key:fe,ref:Me,props:ee,_owner:xe}},_t.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},_t.createElement=z,_t.createFactory=function(O){var se=z.bind(null,O);return se.type=O,se},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:h,render:O}},_t.isValidElement=A,_t.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:J}},_t.memo=function(O,se){return{$$typeof:g,type:O,compare:se===void 0?null:se}},_t.startTransition=function(O){var se=B.transition;B.transition={};try{O()}finally{B.transition=se}},_t.unstable_act=le,_t.useCallback=function(O,se){return de.current.useCallback(O,se)},_t.useContext=function(O){return de.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return de.current.useDeferredValue(O)},_t.useEffect=function(O,se){return de.current.useEffect(O,se)},_t.useId=function(){return de.current.useId()},_t.useImperativeHandle=function(O,se,Ie){return de.current.useImperativeHandle(O,se,Ie)},_t.useInsertionEffect=function(O,se){return de.current.useInsertionEffect(O,se)},_t.useLayoutEffect=function(O,se){return de.current.useLayoutEffect(O,se)},_t.useMemo=function(O,se){return de.current.useMemo(O,se)},_t.useReducer=function(O,se,Ie){return de.current.useReducer(O,se,Ie)},_t.useRef=function(O){return de.current.useRef(O)},_t.useState=function(O){return de.current.useState(O)},_t.useSyncExternalStore=function(O,se,Ie){return de.current.useSyncExternalStore(O,se,Ie)},_t.useTransition=function(){return de.current.useTransition()},_t.version="18.3.1",_t}var Fp;function Yd(){return Fp||(Fp=1,Mu.exports=wx()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function bx(){if(Op)return Bo;Op=1;var s=Yd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,g){var v,_={},y=null,M=null;g!==void 0&&(y=""+g),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:h,key:y,ref:M,props:_,_owner:a.current}}return Bo.Fragment=n,Bo.jsx=d,Bo.jsxs=d,Bo}var kp;function Tx(){return kp||(kp=1,Su.exports=bx()),Su.exports}var u=Tx(),Ye=Yd();const Ax=Km(Ye);var il={},Eu={exports:{}},On={},wu={exports:{}},bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Cx(){return Bp||(Bp=1,(function(s){function e(B,ue){var le=B.length;B.push(ue);e:for(;0<le;){var O=le-1>>>1,se=B[O];if(0<a(se,ue))B[O]=ue,B[le]=se,le=O;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],le=B.pop();if(le!==ue){B[0]=le;e:for(var O=0,se=B.length,Ie=se>>>1;O<Ie;){var ee=2*(O+1)-1,fe=B[ee],Me=ee+1,xe=B[Me];if(0>a(fe,le))Me<se&&0>a(xe,fe)?(B[O]=xe,B[Me]=le,O=Me):(B[O]=fe,B[ee]=le,O=ee);else if(Me<se&&0>a(xe,le))B[O]=xe,B[Me]=le,O=Me;else break e}}return ue}function a(B,ue){var le=B.sortIndex-ue.sortIndex;return le!==0?le:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],g=[],v=1,_=null,y=3,M=!1,w=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var ue=n(g);ue!==null;){if(ue.callback===null)r(g);else if(ue.startTime<=B)r(g),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(g)}}function N(B){if(b=!1,P(B),!w)if(n(p)!==null)w=!0,J(H);else{var ue=n(g);ue!==null&&de(N,ue.startTime-B)}}function H(B,ue){w=!1,b&&(b=!1,x(z),z=-1),M=!0;var le=y;try{for(P(ue),_=n(p);_!==null&&(!(_.expirationTime>ue)||B&&!k());){var O=_.callback;if(typeof O=="function"){_.callback=null,y=_.priorityLevel;var se=O(_.expirationTime<=ue);ue=s.unstable_now(),typeof se=="function"?_.callback=se:_===n(p)&&r(p),P(ue)}else r(p);_=n(p)}if(_!==null)var Ie=!0;else{var ee=n(g);ee!==null&&de(N,ee.startTime-ue),Ie=!1}return Ie}finally{_=null,y=le,M=!1}}var L=!1,F=null,z=-1,C=5,A=-1;function k(){return!(s.unstable_now()-A<C)}function K(){if(F!==null){var B=s.unstable_now();A=B;var ue=!0;try{ue=F(!0,B)}finally{ue?q():(L=!1,F=null)}}else L=!1}var q;if(typeof U=="function")q=function(){U(K)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=K,q=function(){ce.postMessage(null)}}else q=function(){S(K,0)};function J(B){F=B,L||(L=!0,q())}function de(B,ue){z=S(function(){B(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,J(H))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var le=y;y=ue;try{return B()}finally{y=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=y;y=B;try{return ue()}finally{y=le}},s.unstable_scheduleCallback=function(B,ue,le){var O=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=le+se,B={id:v++,callback:ue,priorityLevel:B,startTime:le,expirationTime:se,sortIndex:-1},le>O?(B.sortIndex=le,e(g,B),n(p)===null&&B===n(g)&&(b?(x(z),z=-1):b=!0,de(N,le-O))):(B.sortIndex=se,e(p,B),w||M||(w=!0,J(H))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var ue=y;return function(){var le=y;y=ue;try{return B.apply(this,arguments)}finally{y=le}}}})(bu)),bu}var zp;function Rx(){return zp||(zp=1,wu.exports=Cx()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Nx(){if(jp)return On;jp=1;var s=Yd(),e=Rx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(t){return p.call(_,t)?!0:p.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||M(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,l,f,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,U);S[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,U);S[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,U);S[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,l)&&(o=null),l||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,l=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,O;function se(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Ie=!1;function ee(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),m=l.stack.split(`
`),E=f.length-1,I=m.length-1;1<=E&&0<=I&&f[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(f[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||f[E]!==m[I]){var V=`
`+f[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=I);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?se(t):""}function fe(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case L:return"Portal";case C:return"Profiler";case z:return"StrictMode";case q:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case J:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ye(t){var i=Ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=ye(t))}function lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ae(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function j(t,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function hn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=ge(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function mt(t,i){pt(t,i);var o=ge(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||at(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ve=Array.isArray;function D(t,i,o,l){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&l&&(t[o].defaultSelected=!0)}else{for(o=""+ge(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ve(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ge(o)}}function me(t,i){var o=ge(i.value),l=ge(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ut(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),be[i]=be[t]})});function Ze(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||be.hasOwnProperty(t)&&be[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,f=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,f):t[o]=f}}var Be=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,ae=null,pe=null;function Ne(t){if(t=wo(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),Re(t.stateNode,t.type,i))}}function Pe(t){ae?pe?pe.push(t):pe=[t]:ae=t}function st(){if(ae){var t=ae,i=pe;if(pe=ae=null,Ne(t),i)for(t=0;t<i.length;t++)Ne(i[t])}}function Dt(t,i){return t(i)}function zt(){}var vt=!1;function Qt(t,i,o){if(vt)return t(i,o);vt=!0;try{return Dt(t,i,o)}finally{vt=!1,(ae!==null||pe!==null)&&(zt(),st())}}function Jt(t,i){var o=t.stateNode;if(o===null)return null;var l=va(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Fi=!1;if(h)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Fi=!1}function Kn(t,i,o,l,f,m,E,I,V){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(Se){this.onError(Se)}}var Zn=!1,Qn=null,bi=!1,li=null,Lr={onError:function(t){Zn=!0,Qn=t}};function Pt(t,i,o,l,f,m,E,I,V){Zn=!1,Qn=null,Kn.apply(Lr,arguments)}function Pn(t,i,o,l,f,m,E,I,V){if(Pt.apply(this,arguments),Zn){if(Zn){var re=Qn;Zn=!1,Qn=null}else throw Error(n(198));bi||(bi=!0,li=re)}}function xn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ti(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function en(t){if(xn(t)!==t)throw Error(n(188))}function vn(t){var i=t.alternate;if(!i){if(i=xn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){o=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return en(f),t;if(m===l)return en(f),i;m=m.sibling}throw Error(n(188))}if(o.return!==l.return)o=f,l=m;else{for(var E=!1,I=f.child;I;){if(I===o){E=!0,o=f,l=m;break}if(I===l){E=!0,l=f,o=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===o){E=!0,o=m,l=f;break}if(I===l){E=!0,l=m,o=f;break}I=I.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ir(t){return t=vn(t),t!==null?ci(t):null}function ci(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ci(t);if(i!==null)return i;t=t.sibling}return null}var na=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,X=e.unstable_shouldYield,ie=e.unstable_requestPaint,Q=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,je=e.unstable_LowPriority,nt=e.unstable_IdlePriority,tt=null,Ge=null;function Mt(t){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(tt,t,void 0,(t.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Et,Xt=Math.log,jt=Math.LN2;function Et(t){return t>>>=0,t===0?32:31-(Xt(t)/jt|0)|0}var Ke=64,$t=4194304;function yt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _n(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,f=t.suspendedLanes,m=t.pingedLanes,E=o&268435455;if(E!==0){var I=E&~f;I!==0?l=yt(I):(m&=E,m!==0&&(l=yt(m)))}else E=o&~f,E!==0?l=yt(E):m!==0&&(l=yt(m));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ct(i),f=1<<o,l|=t[o],i&=~f;return l}function nr(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var E=31-ct(m),I=1<<E,V=f[E];V===-1?((I&o)===0||(I&l)!==0)&&(f[E]=nr(I,i)):V<=i&&(t.expiredLanes|=I),m&=~I}}function Oi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ut(){var t=Ke;return Ke<<=1,(Ke&4194240)===0&&(Ke=64),t}function yn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function on(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ct(i),t[i]=o}function pn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-ct(o),m=1<<f;i[f]=0,l[f]=-1,t[f]=-1,o&=~m}}function an(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ct(o),f=1<<l;f&i|t[l]&i&&(t[l]|=i),o&=~f}}var bt=0;function Ai(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var pf,Wl,mf,gf,xf,Xl=!1,ia=[],ir=null,rr=null,sr=null,ao=new Map,lo=new Map,or=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(t,i){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function co(t,i,o,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=wo(i),i!==null&&Wl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function $0(t,i,o,l,f){switch(i){case"focusin":return ir=co(ir,t,i,o,l,f),!0;case"dragenter":return rr=co(rr,t,i,o,l,f),!0;case"mouseover":return sr=co(sr,t,i,o,l,f),!0;case"pointerover":var m=f.pointerId;return ao.set(m,co(ao.get(m)||null,t,i,o,l,f)),!0;case"gotpointercapture":return m=f.pointerId,lo.set(m,co(lo.get(m)||null,t,i,o,l,f)),!0}return!1}function _f(t){var i=Ur(t.target);if(i!==null){var o=xn(i);if(o!==null){if(i=o.tag,i===13){if(i=Ti(o),i!==null){t.blockedOn=i,xf(t.priority,function(){mf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Ct=l,o.target.dispatchEvent(l),Ct=null}else return i=wo(o),i!==null&&Wl(i),t.blockedOn=o,!1;i.shift()}return!0}function yf(t,i,o){ra(t)&&o.delete(i)}function q0(){Xl=!1,ir!==null&&ra(ir)&&(ir=null),rr!==null&&ra(rr)&&(rr=null),sr!==null&&ra(sr)&&(sr=null),ao.forEach(yf),lo.forEach(yf)}function uo(t,i){t.blockedOn===i&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,q0)))}function fo(t){function i(f){return uo(f,t)}if(0<ia.length){uo(ia[0],t);for(var o=1;o<ia.length;o++){var l=ia[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ir!==null&&uo(ir,t),rr!==null&&uo(rr,t),sr!==null&&uo(sr,t),ao.forEach(i),lo.forEach(i),o=0;o<or.length;o++)l=or[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<or.length&&(o=or[0],o.blockedOn===null);)_f(o),o.blockedOn===null&&or.shift()}var us=N.ReactCurrentBatchConfig,sa=!0;function Y0(t,i,o,l){var f=bt,m=us.transition;us.transition=null;try{bt=1,$l(t,i,o,l)}finally{bt=f,us.transition=m}}function K0(t,i,o,l){var f=bt,m=us.transition;us.transition=null;try{bt=4,$l(t,i,o,l)}finally{bt=f,us.transition=m}}function $l(t,i,o,l){if(sa){var f=ql(t,i,o,l);if(f===null)dc(t,i,l,oa,o),vf(t,l);else if($0(f,t,i,o,l))l.stopPropagation();else if(vf(t,l),i&4&&-1<X0.indexOf(t)){for(;f!==null;){var m=wo(f);if(m!==null&&pf(m),m=ql(t,i,o,l),m===null&&dc(t,i,l,oa,o),m===f)break;f=m}f!==null&&l.stopPropagation()}else dc(t,i,l,null,o)}}var oa=null;function ql(t,i,o,l){if(oa=null,t=W(l),t=Ur(t),t!==null)if(i=xn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ti(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function Sf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case we:return 1;case De:return 4;case Fe:case je:return 16;case nt:return 536870912;default:return 16}default:return 16}}var ar=null,Yl=null,aa=null;function Mf(){if(aa)return aa;var t,i=Yl,o=i.length,l,f="value"in ar?ar.value:ar.textContent,m=f.length;for(t=0;t<o&&i[t]===f[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===f[m-l];l++);return aa=f.slice(t,1<l?1-l:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Ef(){return!1}function Vn(t){function i(o,l,f,m,E){this._reactName=o,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ca:Ef,this.isPropagationStopped=Ef,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Vn(ds),ho=le({},ds,{view:0,detail:0}),Z0=Vn(ho),Zl,Ql,po,ua=le({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Zl=t.screenX-po.screenX,Ql=t.screenY-po.screenY):Ql=Zl=0,po=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),wf=Vn(ua),Q0=le({},ua,{dataTransfer:0}),J0=Vn(Q0),eg=le({},ho,{relatedTarget:0}),Jl=Vn(eg),tg=le({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=Vn(tg),ig=le({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rg=Vn(ig),sg=le({},ds,{data:0}),bf=Vn(sg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=lg[t])?!!i[t]:!1}function ec(){return cg}var ug=le({},ho,{key:function(t){if(t.key){var i=og[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ag[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ec,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dg=Vn(ug),fg=le({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Vn(fg),hg=le({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ec}),pg=Vn(hg),mg=le({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Vn(mg),xg=le({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=Vn(xg),_g=[9,13,27,32],tc=h&&"CompositionEvent"in window,mo=null;h&&"documentMode"in document&&(mo=document.documentMode);var yg=h&&"TextEvent"in window&&!mo,Af=h&&(!tc||mo&&8<mo&&11>=mo),Cf=" ",Rf=!1;function Nf(t,i){switch(t){case"keyup":return _g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Sg(t,i){switch(t){case"compositionend":return Pf(i);case"keypress":return i.which!==32?null:(Rf=!0,Cf);case"textInput":return t=i.data,t===Cf&&Rf?null:t;default:return null}}function Mg(t,i){if(fs)return t==="compositionend"||!tc&&Nf(t,i)?(t=Mf(),aa=Yl=ar=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Af&&i.locale!=="ko"?null:i.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Eg[t.type]:i==="textarea"}function Lf(t,i,o,l){Pe(l),i=ma(i,"onChange"),0<i.length&&(o=new Kl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var go=null,xo=null;function wg(t){Zf(t,0)}function da(t){var i=xs(t);if(lt(i))return t}function bg(t,i){if(t==="change")return i}var If=!1;if(h){var nc;if(h){var ic="oninput"in document;if(!ic){var Uf=document.createElement("div");Uf.setAttribute("oninput","return;"),ic=typeof Uf.oninput=="function"}nc=ic}else nc=!1;If=nc&&(!document.documentMode||9<document.documentMode)}function Ff(){go&&(go.detachEvent("onpropertychange",Of),xo=go=null)}function Of(t){if(t.propertyName==="value"&&da(xo)){var i=[];Lf(i,xo,t,W(t)),Qt(wg,i)}}function Tg(t,i,o){t==="focusin"?(Ff(),go=i,xo=o,go.attachEvent("onpropertychange",Of)):t==="focusout"&&Ff()}function Ag(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(xo)}function Cg(t,i){if(t==="click")return da(i)}function Rg(t,i){if(t==="input"||t==="change")return da(i)}function Ng(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ui=typeof Object.is=="function"?Object.is:Ng;function vo(t,i){if(ui(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var f=o[l];if(!p.call(i,f)||!ui(t[f],i[f]))return!1}return!0}function kf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bf(t,i){var o=kf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=kf(o)}}function zf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?zf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function jf(){for(var t=window,i=at();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=at(t.document)}return i}function rc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Pg(t){var i=jf(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&zf(o.ownerDocument.documentElement,o)){if(l!==null&&rc(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!t.extend&&m>l&&(f=l,l=m,m=f),f=Bf(o,m);var E=Bf(o,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),m>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dg=h&&"documentMode"in document&&11>=document.documentMode,hs=null,sc=null,_o=null,oc=!1;function Vf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;oc||hs==null||hs!==at(l)||(l=hs,"selectionStart"in l&&rc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&vo(_o,l)||(_o=l,l=ma(sc,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=hs)))}function fa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ps={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},ac={},Hf={};h&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function ha(t){if(ac[t])return ac[t];if(!ps[t])return t;var i=ps[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Hf)return ac[t]=i[o];return t}var Gf=ha("animationend"),Wf=ha("animationiteration"),Xf=ha("animationstart"),$f=ha("transitionend"),qf=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,i){qf.set(t,i),c(i,[t])}for(var lc=0;lc<Yf.length;lc++){var cc=Yf[lc],Lg=cc.toLowerCase(),Ig=cc[0].toUpperCase()+cc.slice(1);lr(Lg,"on"+Ig)}lr(Gf,"onAnimationEnd"),lr(Wf,"onAnimationIteration"),lr(Xf,"onAnimationStart"),lr("dblclick","onDoubleClick"),lr("focusin","onFocus"),lr("focusout","onBlur"),lr($f,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Kf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Pn(l,i,void 0,t),t.currentTarget=null}function Zf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var I=l[E],V=I.instance,re=I.currentTarget;if(I=I.listener,V!==m&&f.isPropagationStopped())break e;Kf(f,I,re),m=V}else for(E=0;E<l.length;E++){if(I=l[E],V=I.instance,re=I.currentTarget,I=I.listener,V!==m&&f.isPropagationStopped())break e;Kf(f,I,re),m=V}}}if(bi)throw t=li,bi=!1,li=null,t}function Ot(t,i){var o=i[xc];o===void 0&&(o=i[xc]=new Set);var l=t+"__bubble";o.has(l)||(Qf(i,t,2,!1),o.add(l))}function uc(t,i,o){var l=0;i&&(l|=4),Qf(o,t,l,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Ug.has(o)||uc(o,!1,t),uc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,uc("selectionchange",!1,i))}}function Qf(t,i,o,l){switch(Sf(i)){case 1:var f=Y0;break;case 4:f=K0;break;default:f=$l}o=f.bind(null,i,o,t),f=void 0,!Fi||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function dc(t,i,o,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var I=l.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;E=E.return}for(;I!==null;){if(E=Ur(I),E===null)return;if(V=E.tag,V===5||V===6){l=m=E;continue e}I=I.parentNode}}l=l.return}Qt(function(){var re=m,Se=W(o),Ee=[];e:{var _e=qf.get(t);if(_e!==void 0){var Oe=Kl,He=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Oe=dg;break;case"focusin":He="focus",Oe=Jl;break;case"focusout":He="blur",Oe=Jl;break;case"beforeblur":case"afterblur":Oe=Jl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=pg;break;case Gf:case Wf:case Xf:Oe=ng;break;case $f:Oe=gg;break;case"scroll":Oe=Z0;break;case"wheel":Oe=vg;break;case"copy":case"cut":case"paste":Oe=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Tf}var Xe=(i&4)!==0,Yt=!Xe&&t==="scroll",Z=Xe?_e!==null?_e+"Capture":null:_e;Xe=[];for(var G=re,ne;G!==null;){ne=G;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,Z!==null&&(Te=Jt(G,Z),Te!=null&&Xe.push(Mo(G,Te,ne)))),Yt)break;G=G.return}0<Xe.length&&(_e=new Oe(_e,He,null,o,Se),Ee.push({event:_e,listeners:Xe}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",_e&&o!==Ct&&(He=o.relatedTarget||o.fromElement)&&(Ur(He)||He[ki]))break e;if((Oe||_e)&&(_e=Se.window===Se?Se:(_e=Se.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(He=o.relatedTarget||o.toElement,Oe=re,He=He?Ur(He):null,He!==null&&(Yt=xn(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=re),Oe!==He)){if(Xe=wf,Te="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=Tf,Te="onPointerLeave",Z="onPointerEnter",G="pointer"),Yt=Oe==null?_e:xs(Oe),ne=He==null?_e:xs(He),_e=new Xe(Te,G+"leave",Oe,o,Se),_e.target=Yt,_e.relatedTarget=ne,Te=null,Ur(Se)===re&&(Xe=new Xe(Z,G+"enter",He,o,Se),Xe.target=ne,Xe.relatedTarget=Yt,Te=Xe),Yt=Te,Oe&&He)t:{for(Xe=Oe,Z=He,G=0,ne=Xe;ne;ne=ms(ne))G++;for(ne=0,Te=Z;Te;Te=ms(Te))ne++;for(;0<G-ne;)Xe=ms(Xe),G--;for(;0<ne-G;)Z=ms(Z),ne--;for(;G--;){if(Xe===Z||Z!==null&&Xe===Z.alternate)break t;Xe=ms(Xe),Z=ms(Z)}Xe=null}else Xe=null;Oe!==null&&Jf(Ee,_e,Oe,Xe,!1),He!==null&&Yt!==null&&Jf(Ee,Yt,He,Xe,!0)}}e:{if(_e=re?xs(re):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var $e=bg;else if(Df(_e))if(If)$e=Rg;else{$e=Ag;var Qe=Tg}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=Cg);if($e&&($e=$e(t,re))){Lf(Ee,$e,o,Se);break e}Qe&&Qe(t,_e,re),t==="focusout"&&(Qe=_e._wrapperState)&&Qe.controlled&&_e.type==="number"&&wt(_e,"number",_e.value)}switch(Qe=re?xs(re):window,t){case"focusin":(Df(Qe)||Qe.contentEditable==="true")&&(hs=Qe,sc=re,_o=null);break;case"focusout":_o=sc=hs=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Vf(Ee,o,Se);break;case"selectionchange":if(Dg)break;case"keydown":case"keyup":Vf(Ee,o,Se)}var Je;if(tc)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else fs?Nf(t,o)&&(rt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Af&&o.locale!=="ko"&&(fs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&fs&&(Je=Mf()):(ar=Se,Yl="value"in ar?ar.value:ar.textContent,fs=!0)),Qe=ma(re,rt),0<Qe.length&&(rt=new bf(rt,t,null,o,Se),Ee.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=Pf(o),Je!==null&&(rt.data=Je)))),(Je=yg?Sg(t,o):Mg(t,o))&&(re=ma(re,"onBeforeInput"),0<re.length&&(Se=new bf("onBeforeInput","beforeinput",null,o,Se),Ee.push({event:Se,listeners:re}),Se.data=Je))}Zf(Ee,i)})}function Mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Jt(t,o),m!=null&&l.unshift(Mo(t,m,f)),m=Jt(t,i),m!=null&&l.push(Mo(t,m,f))),t=t.return}return l}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,i,o,l,f){for(var m=i._reactName,E=[];o!==null&&o!==l;){var I=o,V=I.alternate,re=I.stateNode;if(V!==null&&V===l)break;I.tag===5&&re!==null&&(I=re,f?(V=Jt(o,m),V!=null&&E.unshift(Mo(o,V,I))):f||(V=Jt(o,m),V!=null&&E.push(Mo(o,V,I)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Fg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(Fg,`
`).replace(Og,"")}function ga(t,i,o){if(i=eh(i),eh(t)!==i&&o)throw Error(n(425))}function xa(){}var fc=null,hc=null;function pc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(zg)}:mc;function zg(t){setTimeout(function(){throw t})}function gc(t,i){var o=i,l=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(l===0){t.removeChild(f),fo(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=f}while(o);fo(i)}function cr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Ci="__reactFiber$"+gs,Eo="__reactProps$"+gs,ki="__reactContainer$"+gs,xc="__reactEvents$"+gs,jg="__reactListeners$"+gs,Vg="__reactHandles$"+gs;function Ur(t){var i=t[Ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[ki]||o[Ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=nh(t);t!==null;){if(o=t[Ci])return o;t=nh(t)}return i}t=o,o=t.parentNode}return null}function wo(t){return t=t[Ci]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[Eo]||null}var vc=[],vs=-1;function ur(t){return{current:t}}function kt(t){0>vs||(t.current=vc[vs],vc[vs]=null,vs--)}function Ft(t,i){vs++,vc[vs]=t.current,t.current=i}var dr={},Sn=ur(dr),Dn=ur(!1),Fr=dr;function _s(t,i){var o=t.type.contextTypes;if(!o)return dr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(t){return t=t.childContextTypes,t!=null}function _a(){kt(Dn),kt(Sn)}function ih(t,i,o){if(Sn.current!==dr)throw Error(n(168));Ft(Sn,i),Ft(Dn,o)}function rh(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return le({},o,l)}function ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Fr=Sn.current,Ft(Sn,t),Ft(Dn,Dn.current),!0}function sh(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=rh(t,i,Fr),l.__reactInternalMemoizedMergedChildContext=t,kt(Dn),kt(Sn),Ft(Sn,t)):kt(Dn),Ft(Dn,o)}var Bi=null,Sa=!1,_c=!1;function oh(t){Bi===null?Bi=[t]:Bi.push(t)}function Hg(t){Sa=!0,oh(t)}function fr(){if(!_c&&Bi!==null){_c=!0;var t=0,i=bt;try{var o=Bi;for(bt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Bi=null,Sa=!1}catch(f){throw Bi!==null&&(Bi=Bi.slice(t+1)),na(we,fr),f}finally{bt=i,_c=!1}}return null}var ys=[],Ss=0,Ma=null,Ea=0,Jn=[],ei=0,Or=null,zi=1,ji="";function kr(t,i){ys[Ss++]=Ea,ys[Ss++]=Ma,Ma=t,Ea=i}function ah(t,i,o){Jn[ei++]=zi,Jn[ei++]=ji,Jn[ei++]=Or,Or=t;var l=zi;t=ji;var f=32-ct(l)-1;l&=~(1<<f),o+=1;var m=32-ct(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,zi=1<<32-ct(i)+f|o<<f|l,ji=m+t}else zi=1<<m|o<<f|l,ji=t}function yc(t){t.return!==null&&(kr(t,1),ah(t,1,0))}function Sc(t){for(;t===Ma;)Ma=ys[--Ss],ys[Ss]=null,Ea=ys[--Ss],ys[Ss]=null;for(;t===Or;)Or=Jn[--ei],Jn[ei]=null,ji=Jn[--ei],Jn[ei]=null,zi=Jn[--ei],Jn[ei]=null}var Hn=null,Gn=null,Vt=!1,di=null;function lh(t,i){var o=ri(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ch(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=cr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Or!==null?{id:zi,overflow:ji}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ri(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Hn=t,Gn=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ec(t){if(Vt){var i=Gn;if(i){var o=i;if(!ch(t,i)){if(Mc(t))throw Error(n(418));i=cr(o.nextSibling);var l=Hn;i&&ch(t,i)?lh(l,o):(t.flags=t.flags&-4097|2,Vt=!1,Hn=t)}}else{if(Mc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Vt=!1,Hn=t}}}function uh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function wa(t){if(t!==Hn)return!1;if(!Vt)return uh(t),Vt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pc(t.type,t.memoizedProps)),i&&(i=Gn)){if(Mc(t))throw dh(),Error(n(418));for(;i;)lh(t,i),i=cr(i.nextSibling)}if(uh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Gn=cr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Gn=null}}else Gn=Hn?cr(t.stateNode.nextSibling):null;return!0}function dh(){for(var t=Gn;t;)t=cr(t.nextSibling)}function Ms(){Gn=Hn=null,Vt=!1}function wc(t){di===null?di=[t]:di.push(t)}var Gg=N.ReactCurrentBatchConfig;function bo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var f=l,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=f.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ba(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function fh(t){var i=t._init;return i(t._payload)}function hh(t){function i(Z,G){if(t){var ne=Z.deletions;ne===null?(Z.deletions=[G],Z.flags|=16):ne.push(G)}}function o(Z,G){if(!t)return null;for(;G!==null;)i(Z,G),G=G.sibling;return null}function l(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function f(Z,G){return Z=yr(Z,G),Z.index=0,Z.sibling=null,Z}function m(Z,G,ne){return Z.index=ne,t?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<G?(Z.flags|=2,G):ne):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,G,ne,Te){return G===null||G.tag!==6?(G=mu(ne,Z.mode,Te),G.return=Z,G):(G=f(G,ne),G.return=Z,G)}function V(Z,G,ne,Te){var $e=ne.type;return $e===F?Se(Z,G,ne.props.children,Te,ne.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===J&&fh($e)===G.type)?(Te=f(G,ne.props),Te.ref=bo(Z,G,ne),Te.return=Z,Te):(Te=Ya(ne.type,ne.key,ne.props,null,Z.mode,Te),Te.ref=bo(Z,G,ne),Te.return=Z,Te)}function re(Z,G,ne,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=gu(ne,Z.mode,Te),G.return=Z,G):(G=f(G,ne.children||[]),G.return=Z,G)}function Se(Z,G,ne,Te,$e){return G===null||G.tag!==7?(G=Xr(ne,Z.mode,Te,$e),G.return=Z,G):(G=f(G,ne),G.return=Z,G)}function Ee(Z,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=mu(""+G,Z.mode,ne),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return ne=Ya(G.type,G.key,G.props,null,Z.mode,ne),ne.ref=bo(Z,null,G),ne.return=Z,ne;case L:return G=gu(G,Z.mode,ne),G.return=Z,G;case J:var Te=G._init;return Ee(Z,Te(G._payload),ne)}if(Ve(G)||ue(G))return G=Xr(G,Z.mode,ne,null),G.return=Z,G;ba(Z,G)}return null}function _e(Z,G,ne,Te){var $e=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return $e!==null?null:I(Z,G,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case H:return ne.key===$e?V(Z,G,ne,Te):null;case L:return ne.key===$e?re(Z,G,ne,Te):null;case J:return $e=ne._init,_e(Z,G,$e(ne._payload),Te)}if(Ve(ne)||ue(ne))return $e!==null?null:Se(Z,G,ne,Te,null);ba(Z,ne)}return null}function Oe(Z,G,ne,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(ne)||null,I(G,Z,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return Z=Z.get(Te.key===null?ne:Te.key)||null,V(G,Z,Te,$e);case L:return Z=Z.get(Te.key===null?ne:Te.key)||null,re(G,Z,Te,$e);case J:var Qe=Te._init;return Oe(Z,G,ne,Qe(Te._payload),$e)}if(Ve(Te)||ue(Te))return Z=Z.get(ne)||null,Se(G,Z,Te,$e,null);ba(G,Te)}return null}function He(Z,G,ne,Te){for(var $e=null,Qe=null,Je=G,rt=G=0,un=null;Je!==null&&rt<ne.length;rt++){Je.index>rt?(un=Je,Je=null):un=Je.sibling;var Rt=_e(Z,Je,ne[rt],Te);if(Rt===null){Je===null&&(Je=un);break}t&&Je&&Rt.alternate===null&&i(Z,Je),G=m(Rt,G,rt),Qe===null?$e=Rt:Qe.sibling=Rt,Qe=Rt,Je=un}if(rt===ne.length)return o(Z,Je),Vt&&kr(Z,rt),$e;if(Je===null){for(;rt<ne.length;rt++)Je=Ee(Z,ne[rt],Te),Je!==null&&(G=m(Je,G,rt),Qe===null?$e=Je:Qe.sibling=Je,Qe=Je);return Vt&&kr(Z,rt),$e}for(Je=l(Z,Je);rt<ne.length;rt++)un=Oe(Je,Z,rt,ne[rt],Te),un!==null&&(t&&un.alternate!==null&&Je.delete(un.key===null?rt:un.key),G=m(un,G,rt),Qe===null?$e=un:Qe.sibling=un,Qe=un);return t&&Je.forEach(function(Sr){return i(Z,Sr)}),Vt&&kr(Z,rt),$e}function Xe(Z,G,ne,Te){var $e=ue(ne);if(typeof $e!="function")throw Error(n(150));if(ne=$e.call(ne),ne==null)throw Error(n(151));for(var Qe=$e=null,Je=G,rt=G=0,un=null,Rt=ne.next();Je!==null&&!Rt.done;rt++,Rt=ne.next()){Je.index>rt?(un=Je,Je=null):un=Je.sibling;var Sr=_e(Z,Je,Rt.value,Te);if(Sr===null){Je===null&&(Je=un);break}t&&Je&&Sr.alternate===null&&i(Z,Je),G=m(Sr,G,rt),Qe===null?$e=Sr:Qe.sibling=Sr,Qe=Sr,Je=un}if(Rt.done)return o(Z,Je),Vt&&kr(Z,rt),$e;if(Je===null){for(;!Rt.done;rt++,Rt=ne.next())Rt=Ee(Z,Rt.value,Te),Rt!==null&&(G=m(Rt,G,rt),Qe===null?$e=Rt:Qe.sibling=Rt,Qe=Rt);return Vt&&kr(Z,rt),$e}for(Je=l(Z,Je);!Rt.done;rt++,Rt=ne.next())Rt=Oe(Je,Z,rt,Rt.value,Te),Rt!==null&&(t&&Rt.alternate!==null&&Je.delete(Rt.key===null?rt:Rt.key),G=m(Rt,G,rt),Qe===null?$e=Rt:Qe.sibling=Rt,Qe=Rt);return t&&Je.forEach(function(Ex){return i(Z,Ex)}),Vt&&kr(Z,rt),$e}function Yt(Z,G,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case H:e:{for(var $e=ne.key,Qe=G;Qe!==null;){if(Qe.key===$e){if($e=ne.type,$e===F){if(Qe.tag===7){o(Z,Qe.sibling),G=f(Qe,ne.props.children),G.return=Z,Z=G;break e}}else if(Qe.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===J&&fh($e)===Qe.type){o(Z,Qe.sibling),G=f(Qe,ne.props),G.ref=bo(Z,Qe,ne),G.return=Z,Z=G;break e}o(Z,Qe);break}else i(Z,Qe);Qe=Qe.sibling}ne.type===F?(G=Xr(ne.props.children,Z.mode,Te,ne.key),G.return=Z,Z=G):(Te=Ya(ne.type,ne.key,ne.props,null,Z.mode,Te),Te.ref=bo(Z,G,ne),Te.return=Z,Z=Te)}return E(Z);case L:e:{for(Qe=ne.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){o(Z,G.sibling),G=f(G,ne.children||[]),G.return=Z,Z=G;break e}else{o(Z,G);break}else i(Z,G);G=G.sibling}G=gu(ne,Z.mode,Te),G.return=Z,Z=G}return E(Z);case J:return Qe=ne._init,Yt(Z,G,Qe(ne._payload),Te)}if(Ve(ne))return He(Z,G,ne,Te);if(ue(ne))return Xe(Z,G,ne,Te);ba(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(o(Z,G.sibling),G=f(G,ne),G.return=Z,Z=G):(o(Z,G),G=mu(ne,Z.mode,Te),G.return=Z,Z=G),E(Z)):o(Z,G)}return Yt}var Es=hh(!0),ph=hh(!1),Ta=ur(null),Aa=null,ws=null,bc=null;function Tc(){bc=ws=Aa=null}function Ac(t){var i=Ta.current;kt(Ta),t._currentValue=i}function Cc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function bs(t,i){Aa=t,bc=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(In=!0),t.firstContext=null)}function ti(t){var i=t._currentValue;if(bc!==t)if(t={context:t,memoizedValue:i,next:null},ws===null){if(Aa===null)throw Error(n(308));ws=t,Aa.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return i}var Br=null;function Rc(t){Br===null?Br=[t]:Br.push(t)}function mh(t,i,o,l){var f=i.interleaved;return f===null?(o.next=o,Rc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Vi(t,l)}function Vi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var hr=!1;function Nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function pr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Tt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Vi(t,o)}return f=l.interleaved,f===null?(i.next=i,Rc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Vi(t,o)}function Ca(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,an(t,o)}}function xh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ra(t,i,o,l){var f=t.updateQueue;hr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var V=I,re=V.next;V.next=null,E===null?m=re:E.next=re,E=V;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,I=Se.lastBaseUpdate,I!==E&&(I===null?Se.firstBaseUpdate=re:I.next=re,Se.lastBaseUpdate=V))}if(m!==null){var Ee=f.baseState;E=0,Se=re=V=null,I=m;do{var _e=I.lane,Oe=I.eventTime;if((l&_e)===_e){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=t,Xe=I;switch(_e=i,Oe=o,Xe.tag){case 1:if(He=Xe.payload,typeof He=="function"){Ee=He.call(Oe,Ee,_e);break e}Ee=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Xe.payload,_e=typeof He=="function"?He.call(Oe,Ee,_e):He,_e==null)break e;Ee=le({},Ee,_e);break e;case 2:hr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,_e=f.effects,_e===null?f.effects=[I]:_e.push(I))}else Oe={eventTime:Oe,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Se===null?(re=Se=Oe,V=Ee):Se=Se.next=Oe,E|=_e;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(Se===null&&(V=Ee),f.baseState=V,f.firstBaseUpdate=re,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Vr|=E,t.lanes=E,t.memoizedState=Ee}}function vh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=o,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var To={},Ri=ur(To),Ao=ur(To),Co=ur(To);function zr(t){if(t===To)throw Error(n(174));return t}function Pc(t,i){switch(Ft(Co,i),Ft(Ao,t),Ft(Ri,To),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=We(i,t)}kt(Ri),Ft(Ri,i)}function Ts(){kt(Ri),kt(Ao),kt(Co)}function _h(t){zr(Co.current);var i=zr(Ri.current),o=We(i,t.type);i!==o&&(Ft(Ao,t),Ft(Ri,o))}function Dc(t){Ao.current===t&&(kt(Ri),kt(Ao))}var Ht=ur(0);function Na(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Lc=[];function Ic(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Pa=N.ReactCurrentDispatcher,Uc=N.ReactCurrentBatchConfig,jr=0,Gt=null,tn=null,ln=null,Da=!1,Ro=!1,No=0,Wg=0;function Mn(){throw Error(n(321))}function Fc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ui(t[o],i[o]))return!1;return!0}function Oc(t,i,o,l,f,m){if(jr=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Pa.current=t===null||t.memoizedState===null?Yg:Kg,t=o(l,f),Ro){m=0;do{if(Ro=!1,No=0,25<=m)throw Error(n(301));m+=1,ln=tn=null,i.updateQueue=null,Pa.current=Zg,t=o(l,f)}while(Ro)}if(Pa.current=Ua,i=tn!==null&&tn.next!==null,jr=0,ln=tn=Gt=null,Da=!1,i)throw Error(n(300));return t}function kc(){var t=No!==0;return No=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Gt.memoizedState=ln=t:ln=ln.next=t,ln}function ni(){if(tn===null){var t=Gt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=ln===null?Gt.memoizedState:ln.next;if(i!==null)ln=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?Gt.memoizedState=ln=t:ln=ln.next=t}return ln}function Po(t,i){return typeof i=="function"?i(t):i}function Bc(t){var i=ni(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=tn,f=l.baseQueue,m=o.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}l.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,l=l.baseState;var I=E=null,V=null,re=m;do{var Se=re.lane;if((jr&Se)===Se)V!==null&&(V=V.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var Ee={lane:Se,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};V===null?(I=V=Ee,E=l):V=V.next=Ee,Gt.lanes|=Se,Vr|=Se}re=re.next}while(re!==null&&re!==m);V===null?E=l:V.next=I,ui(l,i.memoizedState)||(In=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=V,o.lastRenderedState=l}if(t=o.interleaved,t!==null){f=t;do m=f.lane,Gt.lanes|=m,Vr|=m,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function zc(t){var i=ni(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);ui(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,l]}function yh(){}function Sh(t,i){var o=Gt,l=ni(),f=i(),m=!ui(l.memoizedState,f);if(m&&(l.memoizedState=f,In=!0),l=l.queue,jc(wh.bind(null,o,l,t),[t]),l.getSnapshot!==i||m||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Do(9,Eh.bind(null,o,l,f,i),void 0,null),cn===null)throw Error(n(349));(jr&30)!==0||Mh(o,i,f)}return f}function Mh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Eh(t,i,o,l){i.value=o,i.getSnapshot=l,bh(i)&&Th(t)}function wh(t,i,o){return o(function(){bh(i)&&Th(t)})}function bh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ui(t,o)}catch{return!0}}function Th(t){var i=Vi(t,1);i!==null&&mi(i,t,1,-1)}function Ah(t){var i=Ni();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},i.queue=t,t=t.dispatch=qg.bind(null,Gt,t),[i.memoizedState,t]}function Do(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Ch(){return ni().memoizedState}function La(t,i,o,l){var f=Ni();Gt.flags|=t,f.memoizedState=Do(1|i,o,void 0,l===void 0?null:l)}function Ia(t,i,o,l){var f=ni();l=l===void 0?null:l;var m=void 0;if(tn!==null){var E=tn.memoizedState;if(m=E.destroy,l!==null&&Fc(l,E.deps)){f.memoizedState=Do(i,o,m,l);return}}Gt.flags|=t,f.memoizedState=Do(1|i,o,m,l)}function Rh(t,i){return La(8390656,8,t,i)}function jc(t,i){return Ia(2048,8,t,i)}function Nh(t,i){return Ia(4,2,t,i)}function Ph(t,i){return Ia(4,4,t,i)}function Dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Lh(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4,4,Dh.bind(null,i,t),o)}function Vc(){}function Ih(t,i){var o=ni();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Fc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function Uh(t,i){var o=ni();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Fc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Fh(t,i,o){return(jr&21)===0?(t.baseState&&(t.baseState=!1,In=!0),t.memoizedState=o):(ui(o,i)||(o=Ut(),Gt.lanes|=o,Vr|=o,t.baseState=!0),i)}function Xg(t,i){var o=bt;bt=o!==0&&4>o?o:4,t(!0);var l=Uc.transition;Uc.transition={};try{t(!1),i()}finally{bt=o,Uc.transition=l}}function Oh(){return ni().memoizedState}function $g(t,i,o){var l=vr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},kh(t))Bh(i,o);else if(o=mh(t,i,o,l),o!==null){var f=Rn();mi(o,t,l,f),zh(o,i,l)}}function qg(t,i,o){var l=vr(t),f={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(kh(t))Bh(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,o);if(f.hasEagerState=!0,f.eagerState=I,ui(I,E)){var V=i.interleaved;V===null?(f.next=f,Rc(i)):(f.next=V.next,V.next=f),i.interleaved=f;return}}catch{}finally{}o=mh(t,i,f,l),o!==null&&(f=Rn(),mi(o,t,l,f),zh(o,i,l))}}function kh(t){var i=t.alternate;return t===Gt||i!==null&&i===Gt}function Bh(t,i){Ro=Da=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function zh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,an(t,o)}}var Ua={readContext:ti,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Yg={readContext:ti,useCallback:function(t,i){return Ni().memoizedState=[t,i===void 0?null:i],t},useContext:ti,useEffect:Rh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,La(4194308,4,Dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return La(4194308,4,t,i)},useInsertionEffect:function(t,i){return La(4,2,t,i)},useMemo:function(t,i){var o=Ni();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=Ni();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=$g.bind(null,Gt,t),[l.memoizedState,t]},useRef:function(t){var i=Ni();return t={current:t},i.memoizedState=t},useState:Ah,useDebugValue:Vc,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=Ah(!1),i=t[0];return t=Xg.bind(null,t[1]),Ni().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Gt,f=Ni();if(Vt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),cn===null)throw Error(n(349));(jr&30)!==0||Mh(l,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Rh(wh.bind(null,l,m,t),[t]),l.flags|=2048,Do(9,Eh.bind(null,l,m,o,i),void 0,null),o},useId:function(){var t=Ni(),i=cn.identifierPrefix;if(Vt){var o=ji,l=zi;o=(l&~(1<<32-ct(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=No++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Wg++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Kg={readContext:ti,useCallback:Ih,useContext:ti,useEffect:jc,useImperativeHandle:Lh,useInsertionEffect:Nh,useLayoutEffect:Ph,useMemo:Uh,useReducer:Bc,useRef:Ch,useState:function(){return Bc(Po)},useDebugValue:Vc,useDeferredValue:function(t){var i=ni();return Fh(i,tn.memoizedState,t)},useTransition:function(){var t=Bc(Po)[0],i=ni().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Sh,useId:Oh,unstable_isNewReconciler:!1},Zg={readContext:ti,useCallback:Ih,useContext:ti,useEffect:jc,useImperativeHandle:Lh,useInsertionEffect:Nh,useLayoutEffect:Ph,useMemo:Uh,useReducer:zc,useRef:Ch,useState:function(){return zc(Po)},useDebugValue:Vc,useDeferredValue:function(t){var i=ni();return tn===null?i.memoizedState=t:Fh(i,tn.memoizedState,t)},useTransition:function(){var t=zc(Po)[0],i=ni().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Sh,useId:Oh,unstable_isNewReconciler:!1};function fi(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Hc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:le({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?xn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Rn(),f=vr(t),m=Hi(l,f);m.payload=i,o!=null&&(m.callback=o),i=pr(t,m,f),i!==null&&(mi(i,t,f,l),Ca(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Rn(),f=vr(t),m=Hi(l,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=pr(t,m,f),i!==null&&(mi(i,t,f,l),Ca(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Rn(),l=vr(t),f=Hi(o,l);f.tag=2,i!=null&&(f.callback=i),i=pr(t,f,l),i!==null&&(mi(i,t,l,o),Ca(i,t,l))}};function jh(t,i,o,l,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!vo(o,l)||!vo(f,m):!0}function Vh(t,i,o){var l=!1,f=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=ti(m):(f=Ln(i)?Fr:Sn.current,l=i.contextTypes,m=(l=l!=null)?_s(t,f):dr),i=new i(o,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),i}function Hh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function Gc(t,i,o,l){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Nc(t);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ti(m):(m=Ln(i)?Fr:Sn.current,f.context=_s(t,m)),f.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Hc(t,i,m,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Fa.enqueueReplaceState(f,f.state,null),Ra(t,o,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var o="",l=i;do o+=fe(l),l=l.return;while(l);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:f,digest:null}}function Wc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Xc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function Gh(t,i,o){o=Hi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Ha||(Ha=!0,au=l),Xc(t,i)},o}function Wh(t,i,o){o=Hi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;o.payload=function(){return l(f)},o.callback=function(){Xc(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Xc(t,i),typeof l!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Xh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new Qg;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(o)||(f.add(o),t=fx.bind(null,t,i,o),i.then(t,t))}function $h(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function qh(t,i,o,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Hi(-1,1),i.tag=2,pr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Jg=N.ReactCurrentOwner,In=!1;function Cn(t,i,o,l){i.child=t===null?ph(i,null,o,l):Es(i,t.child,o,l)}function Yh(t,i,o,l,f){o=o.render;var m=i.ref;return bs(i,f),l=Oc(t,i,o,l,m,f),o=kc(),t!==null&&!In?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Gi(t,i,f)):(Vt&&o&&yc(i),i.flags|=1,Cn(t,i,l,f),i.child)}function Kh(t,i,o,l,f){if(t===null){var m=o.type;return typeof m=="function"&&!pu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Zh(t,i,m,l,f)):(t=Ya(o.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&f)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:vo,o(E,l)&&t.ref===i.ref)return Gi(t,i,f)}return i.flags|=1,t=yr(m,l),t.ref=i.ref,t.return=i,i.child=t}function Zh(t,i,o,l,f){if(t!==null){var m=t.memoizedProps;if(vo(m,l)&&t.ref===i.ref)if(In=!1,i.pendingProps=l=m,(t.lanes&f)!==0)(t.flags&131072)!==0&&(In=!0);else return i.lanes=t.lanes,Gi(t,i,f)}return $c(t,i,o,l,f)}function Qh(t,i,o){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Rs,Wn),Wn|=o;else{if((o&1073741824)===0)return t=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(Rs,Wn),Wn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:o,Ft(Rs,Wn),Wn|=l}else m!==null?(l=m.baseLanes|o,i.memoizedState=null):l=o,Ft(Rs,Wn),Wn|=l;return Cn(t,i,f,o),i.child}function Jh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function $c(t,i,o,l,f){var m=Ln(o)?Fr:Sn.current;return m=_s(i,m),bs(i,f),o=Oc(t,i,o,l,m,f),l=kc(),t!==null&&!In?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Gi(t,i,f)):(Vt&&l&&yc(i),i.flags|=1,Cn(t,i,o,f),i.child)}function ep(t,i,o,l,f){if(Ln(o)){var m=!0;ya(i)}else m=!1;if(bs(i,f),i.stateNode===null)ka(t,i),Vh(i,o,l),Gc(i,o,l,f),l=!0;else if(t===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var V=E.context,re=o.contextType;typeof re=="object"&&re!==null?re=ti(re):(re=Ln(o)?Fr:Sn.current,re=_s(i,re));var Se=o.getDerivedStateFromProps,Ee=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ee||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==l||V!==re)&&Hh(i,E,l,re),hr=!1;var _e=i.memoizedState;E.state=_e,Ra(i,l,E,f),V=i.memoizedState,I!==l||_e!==V||Dn.current||hr?(typeof Se=="function"&&(Hc(i,o,Se,l),V=i.memoizedState),(I=hr||jh(i,o,I,l,_e,V,re))?(Ee||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=V),E.props=l,E.state=V,E.context=re,l=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,gh(t,i),I=i.memoizedProps,re=i.type===i.elementType?I:fi(i.type,I),E.props=re,Ee=i.pendingProps,_e=E.context,V=o.contextType,typeof V=="object"&&V!==null?V=ti(V):(V=Ln(o)?Fr:Sn.current,V=_s(i,V));var Oe=o.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Ee||_e!==V)&&Hh(i,E,l,V),hr=!1,_e=i.memoizedState,E.state=_e,Ra(i,l,E,f);var He=i.memoizedState;I!==Ee||_e!==He||Dn.current||hr?(typeof Oe=="function"&&(Hc(i,o,Oe,l),He=i.memoizedState),(re=hr||jh(i,o,re,l,_e,He,V)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=V,l=re):(typeof E.componentDidUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return qc(t,i,o,l,m,f)}function qc(t,i,o,l,f,m){Jh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&sh(i,o,!1),Gi(t,i,m);l=i.stateNode,Jg.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Es(i,t.child,null,m),i.child=Es(i,null,I,m)):Cn(t,i,I,m),i.memoizedState=l.state,f&&sh(i,o,!0),i.child}function tp(t){var i=t.stateNode;i.pendingContext?ih(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ih(t,i.context,!1),Pc(t,i.containerInfo)}function np(t,i,o,l,f){return Ms(),wc(f),i.flags|=256,Cn(t,i,o,l),i.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function Kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ip(t,i,o){var l=i.pendingProps,f=Ht.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ft(Ht,f&1),t===null)return Ec(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,m?(l=i.mode,m=i.child,E={mode:"hidden",children:E},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Ka(E,l,0,null),t=Xr(t,l,o,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=Kc(o),i.memoizedState=Yc,t):Zc(i,E));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return ex(t,i,E,l,I,f,o);if(m){m=l.fallback,E=i.mode,f=t.child,I=f.sibling;var V={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=V,i.deletions=null):(l=yr(f,V),l.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=yr(I,m):(m=Xr(m,E,o,null),m.flags|=2),m.return=i,l.return=i,l.sibling=m,i.child=l,l=m,m=i.child,E=t.child.memoizedState,E=E===null?Kc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=t.childLanes&~o,i.memoizedState=Yc,l}return m=t.child,t=m.sibling,l=yr(m,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Zc(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,l){return l!==null&&wc(l),Es(i,t.child,null,o),t=Zc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ex(t,i,o,l,f,m,E){if(o)return i.flags&256?(i.flags&=-257,l=Wc(Error(n(422))),Oa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=l.fallback,f=i.mode,l=Ka({mode:"visible",children:l.children},f,0,null),m=Xr(m,f,E,null),m.flags|=2,l.return=i,m.return=i,l.sibling=m,i.child=l,(i.mode&1)!==0&&Es(i,t.child,null,E),i.child.memoizedState=Kc(E),i.memoizedState=Yc,m);if((i.mode&1)===0)return Oa(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var I=l.dgst;return l=I,m=Error(n(419)),l=Wc(m,l,void 0),Oa(t,i,E,l)}if(I=(E&t.childLanes)!==0,In||I){if(l=cn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Vi(t,f),mi(l,t,f,-1))}return hu(),l=Wc(Error(n(421))),Oa(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=hx.bind(null,t),f._reactRetry=i,null):(t=m.treeContext,Gn=cr(f.nextSibling),Hn=i,Vt=!0,di=null,t!==null&&(Jn[ei++]=zi,Jn[ei++]=ji,Jn[ei++]=Or,zi=t.id,ji=t.overflow,Or=i),i=Zc(i,l.children),i.flags|=4096,i)}function rp(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Cc(t.return,i,o)}function Qc(t,i,o,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=o,m.tailMode=f)}function sp(t,i,o){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Cn(t,i,l.children,o),l=Ht.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,o,i);else if(t.tag===19)rp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ft(Ht,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Na(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Qc(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Na(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Qc(i,!0,o,null,m);break;case"together":Qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Gi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Vr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=yr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=yr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function tx(t,i,o){switch(i.tag){case 3:tp(i),Ms();break;case 5:_h(i);break;case 1:Ln(i.type)&&ya(i);break;case 4:Pc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ft(Ta,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?ip(t,i,o):(Ft(Ht,Ht.current&1),t=Gi(t,i,o),t!==null?t.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return sp(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ft(Ht,Ht.current),l)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,o)}return Gi(t,i,o)}var op,Jc,ap,lp;op=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Jc=function(){},ap=function(t,i,o,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,zr(Ri.current);var m=null;switch(o){case"input":f=j(t,f),l=j(t,l),m=[];break;case"select":f=le({},f,{value:void 0}),l=le({},l,{value:void 0}),m=[];break;case"textarea":f=T(t,f),l=T(t,l),m=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=xa)}dt(o,l);var E;o=null;for(re in f)if(!l.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var I=f[re];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in l){var V=l[re];if(I=f!=null?f[re]:void 0,l.hasOwnProperty(re)&&V!==I&&(V!=null||I!=null))if(re==="style")if(I){for(E in I)!I.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in V)V.hasOwnProperty(E)&&I[E]!==V[E]&&(o||(o={}),o[E]=V[E])}else o||(m||(m=[]),m.push(re,o)),o=V;else re==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,I=I?I.__html:void 0,V!=null&&I!==V&&(m=m||[]).push(re,V)):re==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(re,""+V):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(V!=null&&re==="onScroll"&&Ot("scroll",t),m||I===V||(m=[])):(m=m||[]).push(re,V))}o&&(m=m||[]).push("style",o);var re=m;(i.updateQueue=re)&&(i.flags|=4)}},lp=function(t,i,o,l){o!==l&&(i.flags|=4)};function Lo(t,i){if(!Vt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function En(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function nx(t,i,o){var l=i.pendingProps;switch(Sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Ln(i.type)&&_a(),En(i),null;case 3:return l=i.stateNode,Ts(),kt(Dn),kt(Sn),Ic(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(uu(di),di=null))),Jc(t,i),En(i),null;case 5:Dc(i);var f=zr(Co.current);if(o=i.type,t!==null&&i.stateNode!=null)ap(t,i,o,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return En(i),null}if(t=zr(Ri.current),wa(i)){l=i.stateNode,o=i.type;var m=i.memoizedProps;switch(l[Ci]=i,l[Eo]=m,t=(i.mode&1)!==0,o){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(f=0;f<yo.length;f++)Ot(yo[f],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":hn(l,m),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",l);break;case"textarea":te(l,m),Ot("invalid",l)}dt(o,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?l.textContent!==I&&(m.suppressHydrationWarning!==!0&&ga(l.textContent,I,t),f=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&ga(l.textContent,I,t),f=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ot("scroll",l)}switch(o){case"input":ht(l),qe(l,m,!0);break;case"textarea":ht(l),ve(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=xa)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[Ci]=i,t[Eo]=l,op(t,i,!1,!1),i.stateNode=t;e:{switch(E=it(o,l),o){case"dialog":Ot("cancel",t),Ot("close",t),f=l;break;case"iframe":case"object":case"embed":Ot("load",t),f=l;break;case"video":case"audio":for(f=0;f<yo.length;f++)Ot(yo[f],t);f=l;break;case"source":Ot("error",t),f=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),f=l;break;case"details":Ot("toggle",t),f=l;break;case"input":hn(t,l),f=j(t,l),Ot("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=le({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":te(t,l),f=T(t,l),Ot("invalid",t);break;default:f=l}dt(o,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var V=I[m];m==="style"?et(t,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ue(t,V)):m==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&ut(t,V):typeof V=="number"&&ut(t,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Ot("scroll",t):V!=null&&P(t,m,V,E))}switch(o){case"input":ht(t),qe(t,l,!1);break;case"textarea":ht(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ge(l.value));break;case"select":t.multiple=!!l.multiple,m=l.value,m!=null?D(t,!!l.multiple,m,!1):l.defaultValue!=null&&D(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(t&&i.stateNode!=null)lp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=zr(Co.current),zr(Ri.current),wa(i)){if(l=i.stateNode,o=i.memoizedProps,l[Ci]=i,(m=l.nodeValue!==o)&&(t=Hn,t!==null))switch(t.tag){case 3:ga(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(l.nodeValue,o,(t.mode&1)!==0)}m&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Ci]=i,i.stateNode=l}return En(i),null;case 13:if(kt(Ht),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dh(),Ms(),i.flags|=98560,m=!1;else if(m=wa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[Ci]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),m=!1}else di!==null&&(uu(di),di=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?nn===0&&(nn=3):hu())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Ts(),Jc(t,i),t===null&&So(i.stateNode.containerInfo),En(i),null;case 10:return Ac(i.type._context),En(i),null;case 17:return Ln(i.type)&&_a(),En(i),null;case 19:if(kt(Ht),m=i.memoizedState,m===null)return En(i),null;if(l=(i.flags&128)!==0,E=m.rendering,E===null)if(l)Lo(m,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Na(t),E!==null){for(i.flags|=128,Lo(m,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)m=o,t=l,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,t=E.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ft(Ht,Ht.current&1|2),i.child}t=t.sibling}m.tail!==null&&Q()>Ns&&(i.flags|=128,l=!0,Lo(m,!1),i.lanes=4194304)}else{if(!l)if(t=Na(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Vt)return En(i),null}else 2*Q()-m.renderingStartTime>Ns&&o!==1073741824&&(i.flags|=128,l=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Q(),i.sibling=null,o=Ht.current,Ft(Ht,l?o&1|2:o&1),i):(En(i),null);case 22:case 23:return fu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function ix(t,i){switch(Sc(i),i.tag){case 1:return Ln(i.type)&&_a(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),kt(Dn),kt(Sn),Ic(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(kt(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return Ts(),null;case 10:return Ac(i.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var Ba=!1,wn=!1,rx=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Cs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){qt(t,i,l)}else o.current=null}function eu(t,i,o){try{o()}catch(l){qt(t,i,l)}}var cp=!1;function sx(t,i){if(fc=sa,t=jf(),rc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,I=-1,V=-1,re=0,Se=0,Ee=t,_e=null;t:for(;;){for(var Oe;Ee!==o||f!==0&&Ee.nodeType!==3||(I=E+f),Ee!==m||l!==0&&Ee.nodeType!==3||(V=E+l),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(Oe=Ee.firstChild)!==null;)_e=Ee,Ee=Oe;for(;;){if(Ee===t)break t;if(_e===o&&++re===f&&(I=E),_e===m&&++Se===l&&(V=E),(Oe=Ee.nextSibling)!==null)break;Ee=_e,_e=Ee.parentNode}Ee=Oe}o=I===-1||V===-1?null:{start:I,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(hc={focusedElem:t,selectionRange:o},sa=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Xe=He.memoizedProps,Yt=He.memoizedState,Z=i.stateNode,G=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:fi(i.type,Xe),Yt);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){qt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=cp,cp=!1,He}function Io(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&eu(i,o,m)}f=f.next}while(f!==l)}}function za(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function tu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function up(t){var i=t.alternate;i!==null&&(t.alternate=null,up(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ci],delete i[Eo],delete i[xc],delete i[jg],delete i[Vg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dp(t){return t.tag===5||t.tag===3||t.tag===4}function fp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xa));else if(l!==4&&(t=t.child,t!==null))for(nu(t,i,o),t=t.sibling;t!==null;)nu(t,i,o),t=t.sibling}function iu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(iu(t,i,o),t=t.sibling;t!==null;)iu(t,i,o),t=t.sibling}var mn=null,hi=!1;function mr(t,i,o){for(o=o.child;o!==null;)hp(t,i,o),o=o.sibling}function hp(t,i,o){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 5:wn||Cs(o,i);case 6:var l=mn,f=hi;mn=null,mr(t,i,o),mn=l,hi=f,mn!==null&&(hi?(t=mn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):mn.removeChild(o.stateNode));break;case 18:mn!==null&&(hi?(t=mn,o=o.stateNode,t.nodeType===8?gc(t.parentNode,o):t.nodeType===1&&gc(t,o),fo(t)):gc(mn,o.stateNode));break;case 4:l=mn,f=hi,mn=o.stateNode.containerInfo,hi=!0,mr(t,i,o),mn=l,hi=f;break;case 0:case 11:case 14:case 15:if(!wn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&eu(o,i,E),f=f.next}while(f!==l)}mr(t,i,o);break;case 1:if(!wn&&(Cs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(I){qt(o,i,I)}mr(t,i,o);break;case 21:mr(t,i,o);break;case 22:o.mode&1?(wn=(l=wn)||o.memoizedState!==null,mr(t,i,o),wn=l):mr(t,i,o);break;default:mr(t,i,o)}}function pp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new rx),i.forEach(function(l){var f=px.bind(null,t,l);o.has(l)||(o.add(l),l.then(f,f))})}}function pi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var f=o[l];try{var m=t,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:mn=I.stateNode,hi=!1;break e;case 3:mn=I.stateNode.containerInfo,hi=!0;break e;case 4:mn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(mn===null)throw Error(n(160));hp(m,E,f),mn=null,hi=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(re){qt(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)mp(i,t),i=i.sibling}function mp(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(i,t),Pi(t),l&4){try{Io(3,t,t.return),za(3,t)}catch(Xe){qt(t,t.return,Xe)}try{Io(5,t,t.return)}catch(Xe){qt(t,t.return,Xe)}}break;case 1:pi(i,t),Pi(t),l&512&&o!==null&&Cs(o,o.return);break;case 5:if(pi(i,t),Pi(t),l&512&&o!==null&&Cs(o,o.return),t.flags&32){var f=t.stateNode;try{ut(f,"")}catch(Xe){qt(t,t.return,Xe)}}if(l&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,E=o!==null?o.memoizedProps:m,I=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&pt(f,m),it(I,E);var re=it(I,m);for(E=0;E<V.length;E+=2){var Se=V[E],Ee=V[E+1];Se==="style"?et(f,Ee):Se==="dangerouslySetInnerHTML"?Ue(f,Ee):Se==="children"?ut(f,Ee):P(f,Se,Ee,re)}switch(I){case"input":mt(f,m);break;case"textarea":me(f,m);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Oe=m.value;Oe!=null?D(f,!!m.multiple,Oe,!1):_e!==!!m.multiple&&(m.defaultValue!=null?D(f,!!m.multiple,m.defaultValue,!0):D(f,!!m.multiple,m.multiple?[]:"",!1))}f[Eo]=m}catch(Xe){qt(t,t.return,Xe)}}break;case 6:if(pi(i,t),Pi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(Xe){qt(t,t.return,Xe)}}break;case 3:if(pi(i,t),Pi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Xe){qt(t,t.return,Xe)}break;case 4:pi(i,t),Pi(t);break;case 13:pi(i,t),Pi(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(ou=Q())),l&4&&pp(t);break;case 22:if(Se=o!==null&&o.memoizedState!==null,t.mode&1?(wn=(re=wn)||Se,pi(i,t),wn=re):pi(i,t),Pi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!Se&&(t.mode&1)!==0)for(ze=t,Se=t.child;Se!==null;){for(Ee=ze=Se;ze!==null;){switch(_e=ze,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Io(4,_e,_e.return);break;case 1:Cs(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){l=_e,o=_e.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Xe){qt(l,o,Xe)}}break;case 5:Cs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){vp(Ee);continue}}Oe!==null?(Oe.return=_e,ze=Oe):vp(Ee)}Se=Se.sibling}e:for(Se=null,Ee=t;;){if(Ee.tag===5){if(Se===null){Se=Ee;try{f=Ee.stateNode,re?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Ee.stateNode,V=Ee.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,I.style.display=Ze("display",E))}catch(Xe){qt(t,t.return,Xe)}}}else if(Ee.tag===6){if(Se===null)try{Ee.stateNode.nodeValue=re?"":Ee.memoizedProps}catch(Xe){qt(t,t.return,Xe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===t)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===t)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===t)break e;Se===Ee&&(Se=null),Ee=Ee.return}Se===Ee&&(Se=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:pi(i,t),Pi(t),l&4&&pp(t);break;case 21:break;default:pi(i,t),Pi(t)}}function Pi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(dp(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ut(f,""),l.flags&=-33);var m=fp(t);iu(t,m,f);break;case 3:case 4:var E=l.stateNode.containerInfo,I=fp(t);nu(t,I,E);break;default:throw Error(n(161))}}catch(V){qt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ox(t,i,o){ze=t,gp(t)}function gp(t,i,o){for(var l=(t.mode&1)!==0;ze!==null;){var f=ze,m=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Ba;if(!E){var I=f.alternate,V=I!==null&&I.memoizedState!==null||wn;I=Ba;var re=wn;if(Ba=E,(wn=V)&&!re)for(ze=f;ze!==null;)E=ze,V=E.child,E.tag===22&&E.memoizedState!==null?_p(f):V!==null?(V.return=E,ze=V):_p(f);for(;m!==null;)ze=m,gp(m),m=m.sibling;ze=f,Ba=I,wn=re}xp(t)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,ze=m):xp(t)}}function xp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||za(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!wn)if(o===null)l.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:fi(i.type,o.memoizedProps);l.componentDidUpdate(f,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&vh(i,m,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}vh(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Se=re.memoizedState;if(Se!==null){var Ee=Se.dehydrated;Ee!==null&&fo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}wn||i.flags&512&&tu(i)}catch(_e){qt(i,i.return,_e)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function vp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function _p(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{za(4,i)}catch(V){qt(i,o,V)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(V){qt(i,f,V)}}var m=i.return;try{tu(i)}catch(V){qt(i,m,V)}break;case 5:var E=i.return;try{tu(i)}catch(V){qt(i,E,V)}}}catch(V){qt(i,i.return,V)}if(i===t){ze=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ze=I;break}ze=i.return}}var ax=Math.ceil,ja=N.ReactCurrentDispatcher,ru=N.ReactCurrentOwner,ii=N.ReactCurrentBatchConfig,Tt=0,cn=null,Kt=null,gn=0,Wn=0,Rs=ur(0),nn=0,Uo=null,Vr=0,Va=0,su=0,Fo=null,Un=null,ou=0,Ns=1/0,Wi=null,Ha=!1,au=null,gr=null,Ga=!1,xr=null,Wa=0,Oo=0,lu=null,Xa=-1,$a=0;function Rn(){return(Tt&6)!==0?Q():Xa!==-1?Xa:Xa=Q()}function vr(t){return(t.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:Gg.transition!==null?($a===0&&($a=Ut()),$a):(t=bt,t!==0||(t=window.event,t=t===void 0?16:Sf(t.type)),t)}function mi(t,i,o,l){if(50<Oo)throw Oo=0,lu=null,Error(n(185));on(t,o,l),((Tt&2)===0||t!==cn)&&(t===cn&&((Tt&2)===0&&(Va|=o),nn===4&&_r(t,gn)),Fn(t,l),o===1&&Tt===0&&(i.mode&1)===0&&(Ns=Q()+500,Sa&&fr()))}function Fn(t,i){var o=t.callbackNode;An(t,i);var l=_n(t,t===cn?gn:0);if(l===0)o!==null&&R(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&R(o),i===1)t.tag===0?Hg(Sp.bind(null,t)):oh(Sp.bind(null,t)),Bg(function(){(Tt&6)===0&&fr()}),o=null;else{switch(Ai(l)){case 1:o=we;break;case 4:o=De;break;case 16:o=Fe;break;case 536870912:o=nt;break;default:o=Fe}o=Rp(o,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function yp(t,i){if(Xa=-1,$a=0,(Tt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ps()&&t.callbackNode!==o)return null;var l=_n(t,t===cn?gn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=qa(t,l);else{i=l;var f=Tt;Tt|=2;var m=Ep();(cn!==t||gn!==i)&&(Wi=null,Ns=Q()+500,Gr(t,i));do try{ux();break}catch(I){Mp(t,I)}while(!0);Tc(),ja.current=m,Tt=f,Kt!==null?i=0:(cn=null,gn=0,i=nn)}if(i!==0){if(i===2&&(f=Oi(t),f!==0&&(l=f,i=cu(t,f))),i===1)throw o=Uo,Gr(t,0),_r(t,l),Fn(t,Q()),o;if(i===6)_r(t,l);else{if(f=t.current.alternate,(l&30)===0&&!lx(f)&&(i=qa(t,l),i===2&&(m=Oi(t),m!==0&&(l=m,i=cu(t,m))),i===1))throw o=Uo,Gr(t,0),_r(t,l),Fn(t,Q()),o;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Wr(t,Un,Wi);break;case 3:if(_r(t,l),(l&130023424)===l&&(i=ou+500-Q(),10<i)){if(_n(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=mc(Wr.bind(null,t,Un,Wi),i);break}Wr(t,Un,Wi);break;case 4:if(_r(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-ct(l);m=1<<E,E=i[E],E>f&&(f=E),l&=~m}if(l=f,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*ax(l/1960))-l,10<l){t.timeoutHandle=mc(Wr.bind(null,t,Un,Wi),l);break}Wr(t,Un,Wi);break;case 5:Wr(t,Un,Wi);break;default:throw Error(n(329))}}}return Fn(t,Q()),t.callbackNode===o?yp.bind(null,t):null}function cu(t,i){var o=Fo;return t.current.memoizedState.isDehydrated&&(Gr(t,i).flags|=256),t=qa(t,i),t!==2&&(i=Un,Un=o,i!==null&&uu(i)),t}function uu(t){Un===null?Un=t:Un.push.apply(Un,t)}function lx(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var f=o[l],m=f.getSnapshot;f=f.value;try{if(!ui(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(t,i){for(i&=~su,i&=~Va,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ct(i),l=1<<o;t[o]=-1,i&=~l}}function Sp(t){if((Tt&6)!==0)throw Error(n(327));Ps();var i=_n(t,0);if((i&1)===0)return Fn(t,Q()),null;var o=qa(t,i);if(t.tag!==0&&o===2){var l=Oi(t);l!==0&&(i=l,o=cu(t,l))}if(o===1)throw o=Uo,Gr(t,0),_r(t,i),Fn(t,Q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Wr(t,Un,Wi),Fn(t,Q()),null}function du(t,i){var o=Tt;Tt|=1;try{return t(i)}finally{Tt=o,Tt===0&&(Ns=Q()+500,Sa&&fr())}}function Hr(t){xr!==null&&xr.tag===0&&(Tt&6)===0&&Ps();var i=Tt;Tt|=1;var o=ii.transition,l=bt;try{if(ii.transition=null,bt=1,t)return t()}finally{bt=l,ii.transition=o,Tt=i,(Tt&6)===0&&fr()}}function fu(){Wn=Rs.current,kt(Rs)}function Gr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,kg(o)),Kt!==null)for(o=Kt.return;o!==null;){var l=o;switch(Sc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_a();break;case 3:Ts(),kt(Dn),kt(Sn),Ic();break;case 5:Dc(l);break;case 4:Ts();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Ac(l.type._context);break;case 22:case 23:fu()}o=o.return}if(cn=t,Kt=t=yr(t.current,null),gn=Wn=i,nn=0,Uo=null,su=Va=Vr=0,Un=Fo=null,Br!==null){for(i=0;i<Br.length;i++)if(o=Br[i],l=o.interleaved,l!==null){o.interleaved=null;var f=l.next,m=o.pending;if(m!==null){var E=m.next;m.next=f,l.next=E}o.pending=l}Br=null}return t}function Mp(t,i){do{var o=Kt;try{if(Tc(),Pa.current=Ua,Da){for(var l=Gt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Da=!1}if(jr=0,ln=tn=Gt=null,Ro=!1,No=0,ru.current=null,o===null||o.return===null){nn=1,Uo=i,Kt=null;break}e:{var m=t,E=o.return,I=o,V=i;if(i=gn,I.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=V,Se=I,Ee=Se.tag;if((Se.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var _e=Se.alternate;_e?(Se.updateQueue=_e.updateQueue,Se.memoizedState=_e.memoizedState,Se.lanes=_e.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=$h(E);if(Oe!==null){Oe.flags&=-257,qh(Oe,E,I,m,i),Oe.mode&1&&Xh(m,re,i),i=Oe,V=re;var He=i.updateQueue;if(He===null){var Xe=new Set;Xe.add(V),i.updateQueue=Xe}else He.add(V);break e}else{if((i&1)===0){Xh(m,re,i),hu();break e}V=Error(n(426))}}else if(Vt&&I.mode&1){var Yt=$h(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),qh(Yt,E,I,m,i),wc(As(V,I));break e}}m=V=As(V,I),nn!==4&&(nn=2),Fo===null?Fo=[m]:Fo.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=Gh(m,V,i);xh(m,Z);break e;case 1:I=V;var G=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(gr===null||!gr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Wh(m,I,i);xh(m,Te);break e}}m=m.return}while(m!==null)}bp(o)}catch($e){i=$e,Kt===o&&o!==null&&(Kt=o=o.return);continue}break}while(!0)}function Ep(){var t=ja.current;return ja.current=Ua,t===null?Ua:t}function hu(){(nn===0||nn===3||nn===2)&&(nn=4),cn===null||(Vr&268435455)===0&&(Va&268435455)===0||_r(cn,gn)}function qa(t,i){var o=Tt;Tt|=2;var l=Ep();(cn!==t||gn!==i)&&(Wi=null,Gr(t,i));do try{cx();break}catch(f){Mp(t,f)}while(!0);if(Tc(),Tt=o,ja.current=l,Kt!==null)throw Error(n(261));return cn=null,gn=0,nn}function cx(){for(;Kt!==null;)wp(Kt)}function ux(){for(;Kt!==null&&!X();)wp(Kt)}function wp(t){var i=Cp(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,i===null?bp(t):Kt=i,ru.current=null}function bp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=nx(o,i,Wn),o!==null){Kt=o;return}}else{if(o=ix(o,i),o!==null){o.flags&=32767,Kt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=t}while(i!==null);nn===0&&(nn=5)}function Wr(t,i,o){var l=bt,f=ii.transition;try{ii.transition=null,bt=1,dx(t,i,o,l)}finally{ii.transition=f,bt=l}return null}function dx(t,i,o,l){do Ps();while(xr!==null);if((Tt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=o.lanes|o.childLanes;if(pn(t,m),t===cn&&(Kt=cn=null,gn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ga||(Ga=!0,Rp(Fe,function(){return Ps(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ii.transition,ii.transition=null;var E=bt;bt=1;var I=Tt;Tt|=4,ru.current=null,sx(t,o),mp(o,t),Pg(hc),sa=!!fc,hc=fc=null,t.current=o,ox(o),ie(),Tt=I,bt=E,ii.transition=m}else t.current=o;if(Ga&&(Ga=!1,xr=t,Wa=f),m=t.pendingLanes,m===0&&(gr=null),Mt(o.stateNode),Fn(t,Q()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],l(f.value,{componentStack:f.stack,digest:f.digest});if(Ha)throw Ha=!1,t=au,au=null,t;return(Wa&1)!==0&&t.tag!==0&&Ps(),m=t.pendingLanes,(m&1)!==0?t===lu?Oo++:(Oo=0,lu=t):Oo=0,fr(),null}function Ps(){if(xr!==null){var t=Ai(Wa),i=ii.transition,o=bt;try{if(ii.transition=null,bt=16>t?16:t,xr===null)var l=!1;else{if(t=xr,xr=null,Wa=0,(Tt&6)!==0)throw Error(n(331));var f=Tt;for(Tt|=4,ze=t.current;ze!==null;){var m=ze,E=m.child;if((ze.flags&16)!==0){var I=m.deletions;if(I!==null){for(var V=0;V<I.length;V++){var re=I[V];for(ze=re;ze!==null;){var Se=ze;switch(Se.tag){case 0:case 11:case 15:Io(8,Se,m)}var Ee=Se.child;if(Ee!==null)Ee.return=Se,ze=Ee;else for(;ze!==null;){Se=ze;var _e=Se.sibling,Oe=Se.return;if(up(Se),Se===re){ze=null;break}if(_e!==null){_e.return=Oe,ze=_e;break}ze=Oe}}}var He=m.alternate;if(He!==null){var Xe=He.child;if(Xe!==null){He.child=null;do{var Yt=Xe.sibling;Xe.sibling=null,Xe=Yt}while(Xe!==null)}}ze=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ze=E;else e:for(;ze!==null;){if(m=ze,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Io(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,ze=Z;break e}ze=m.return}}var G=t.current;for(ze=G;ze!==null;){E=ze;var ne=E.child;if((E.subtreeFlags&2064)!==0&&ne!==null)ne.return=E,ze=ne;else e:for(E=G;ze!==null;){if(I=ze,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:za(9,I)}}catch($e){qt(I,I.return,$e)}if(I===E){ze=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ze=Te;break e}ze=I.return}}if(Tt=f,fr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(tt,t)}catch{}l=!0}return l}finally{bt=o,ii.transition=i}}return!1}function Tp(t,i,o){i=As(o,i),i=Gh(t,i,1),t=pr(t,i,1),i=Rn(),t!==null&&(on(t,1,i),Fn(t,i))}function qt(t,i,o){if(t.tag===3)Tp(t,t,o);else for(;i!==null;){if(i.tag===3){Tp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){t=As(o,t),t=Wh(i,t,1),i=pr(i,t,1),t=Rn(),i!==null&&(on(i,1,t),Fn(i,t));break}}i=i.return}}function fx(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&o,cn===t&&(gn&o)===o&&(nn===4||nn===3&&(gn&130023424)===gn&&500>Q()-ou?Gr(t,0):su|=o),Fn(t,i)}function Ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var o=Rn();t=Vi(t,i),t!==null&&(on(t,i,o),Fn(t,o))}function hx(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Ap(t,o)}function px(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Ap(t,o)}var Cp;Cp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return In=!1,tx(t,i,o);In=(t.flags&131072)!==0}else In=!1,Vt&&(i.flags&1048576)!==0&&ah(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ka(t,i),t=i.pendingProps;var f=_s(i,Sn.current);bs(i,o),f=Oc(null,i,l,t,f,o);var m=kc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(l)?(m=!0,ya(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nc(i),f.updater=Fa,i.stateNode=f,f._reactInternals=i,Gc(i,l,t,o),i=qc(null,i,l,!0,m,o)):(i.tag=0,Vt&&m&&yc(i),Cn(null,i,f,o),i=i.child),i;case 16:l=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=gx(l),t=fi(l,t),f){case 0:i=$c(null,i,l,t,o);break e;case 1:i=ep(null,i,l,t,o);break e;case 11:i=Yh(null,i,l,t,o);break e;case 14:i=Kh(null,i,l,fi(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:fi(l,f),$c(t,i,l,f,o);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:fi(l,f),ep(t,i,l,f,o);case 3:e:{if(tp(i),t===null)throw Error(n(387));l=i.pendingProps,m=i.memoizedState,f=m.element,gh(t,i),Ra(i,l,null,o);var E=i.memoizedState;if(l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=As(Error(n(423)),i),i=np(t,i,l,o,f);break e}else if(l!==f){f=As(Error(n(424)),i),i=np(t,i,l,o,f);break e}else for(Gn=cr(i.stateNode.containerInfo.firstChild),Hn=i,Vt=!0,di=null,o=ph(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ms(),l===f){i=Gi(t,i,o);break e}Cn(t,i,l,o)}i=i.child}return i;case 5:return _h(i),t===null&&Ec(i),l=i.type,f=i.pendingProps,m=t!==null?t.memoizedProps:null,E=f.children,pc(l,f)?E=null:m!==null&&pc(l,m)&&(i.flags|=32),Jh(t,i),Cn(t,i,E,o),i.child;case 6:return t===null&&Ec(i),null;case 13:return ip(t,i,o);case 4:return Pc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Es(i,null,l,o):Cn(t,i,l,o),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:fi(l,f),Yh(t,i,l,f,o);case 7:return Cn(t,i,i.pendingProps,o),i.child;case 8:return Cn(t,i,i.pendingProps.children,o),i.child;case 12:return Cn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,m=i.memoizedProps,E=f.value,Ft(Ta,l._currentValue),l._currentValue=E,m!==null)if(ui(m.value,E)){if(m.children===f.children&&!Dn.current){i=Gi(t,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var V=I.firstContext;V!==null;){if(V.context===l){if(m.tag===1){V=Hi(-1,o&-o),V.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var Se=re.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),re.pending=V}}m.lanes|=o,V=m.alternate,V!==null&&(V.lanes|=o),Cc(m.return,o,i),I.lanes|=o;break}V=V.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(n(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),Cc(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Cn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,bs(i,o),f=ti(f),l=l(f),i.flags|=1,Cn(t,i,l,o),i.child;case 14:return l=i.type,f=fi(l,i.pendingProps),f=fi(l.type,f),Kh(t,i,l,f,o);case 15:return Zh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:fi(l,f),ka(t,i),i.tag=1,Ln(l)?(t=!0,ya(i)):t=!1,bs(i,o),Vh(i,l,f),Gc(i,l,f,o),qc(null,i,l,!0,t,o);case 19:return sp(t,i,o);case 22:return Qh(t,i,o)}throw Error(n(156,i.tag))};function Rp(t,i){return na(t,i)}function mx(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,i,o,l){return new mx(t,i,o,l)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gx(t){if(typeof t=="function")return pu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===ce)return 14}return 2}function yr(t,i){var o=t.alternate;return o===null?(o=ri(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ya(t,i,o,l,f,m){var E=2;if(l=t,typeof t=="function")pu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case F:return Xr(o.children,f,m,i);case z:E=8,f|=8;break;case C:return t=ri(12,o,i,f|2),t.elementType=C,t.lanes=m,t;case q:return t=ri(13,o,i,f),t.elementType=q,t.lanes=m,t;case oe:return t=ri(19,o,i,f),t.elementType=oe,t.lanes=m,t;case de:return Ka(o,f,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case k:E=9;break e;case K:E=11;break e;case ce:E=14;break e;case J:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ri(E,o,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function Xr(t,i,o,l){return t=ri(7,t,l,i),t.lanes=o,t}function Ka(t,i,o,l){return t=ri(22,t,l,i),t.elementType=de,t.lanes=o,t.stateNode={isHidden:!1},t}function mu(t,i,o){return t=ri(6,t,null,i),t.lanes=o,t}function gu(t,i,o){return i=ri(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xx(t,i,o,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xu(t,i,o,l,f,m,E,I,V){return t=new xx(t,i,o,I,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ri(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(m),t}function vx(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function Np(t){if(!t)return dr;t=t._reactInternals;e:{if(xn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Ln(o))return rh(t,o,i)}return i}function Pp(t,i,o,l,f,m,E,I,V){return t=xu(o,l,!0,t,f,m,E,I,V),t.context=Np(null),o=t.current,l=Rn(),f=vr(o),m=Hi(l,f),m.callback=i??null,pr(o,m,f),t.current.lanes=f,on(t,f,l),Fn(t,l),t}function Za(t,i,o,l){var f=i.current,m=Rn(),E=vr(f);return o=Np(o),i.context===null?i.context=o:i.pendingContext=o,i=Hi(m,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=pr(f,i,E),t!==null&&(mi(t,f,E,m),Ca(t,f,E)),E}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function vu(t,i){Dp(t,i),(t=t.alternate)&&Dp(t,i)}function _x(){return null}var Lp=typeof reportError=="function"?reportError:function(t){console.error(t)};function _u(t){this._internalRoot=t}Ja.prototype.render=_u.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=_u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Hr(function(){Za(null,t,null,null)}),i[ki]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=gf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<or.length&&i!==0&&i<or[o].priority;o++);or.splice(o,0,t),o===0&&_f(t)}};function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function yx(t,i,o,l,f){if(f){if(typeof l=="function"){var m=l;l=function(){var re=Qa(E);m.call(re)}}var E=Pp(i,l,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=E,t[ki]=E.current,So(t.nodeType===8?t.parentNode:t),Hr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var I=l;l=function(){var re=Qa(V);I.call(re)}}var V=xu(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=V,t[ki]=V.current,So(t.nodeType===8?t.parentNode:t),Hr(function(){Za(i,V,o,l)}),V}function tl(t,i,o,l,f){var m=o._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var I=f;f=function(){var V=Qa(E);I.call(V)}}Za(i,E,t,f)}else E=yx(o,i,t,f,l);return Qa(E)}pf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=yt(i.pendingLanes);o!==0&&(an(i,o|1),Fn(i,Q()),(Tt&6)===0&&(Ns=Q()+500,fr()))}break;case 13:Hr(function(){var l=Vi(t,1);if(l!==null){var f=Rn();mi(l,t,1,f)}}),vu(t,1)}},Wl=function(t){if(t.tag===13){var i=Vi(t,134217728);if(i!==null){var o=Rn();mi(i,t,134217728,o)}vu(t,134217728)}},mf=function(t){if(t.tag===13){var i=vr(t),o=Vi(t,i);if(o!==null){var l=Rn();mi(o,t,i,l)}vu(t,i)}},gf=function(){return bt},xf=function(t,i){var o=bt;try{return bt=t,i()}finally{bt=o}},Re=function(t,i,o){switch(i){case"input":if(mt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var f=va(l);if(!f)throw Error(n(90));lt(l),mt(l,f)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&D(t,!!o.multiple,i,!1)}},Dt=du,zt=Hr;var Sx={usingClientEntryPoint:!1,Events:[wo,xs,va,Pe,st,du]},ko={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mx={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ir(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{tt=nl.inject(Mx),Ge=nl}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx,On.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(i))throw Error(n(200));return vx(t,i,null,o)},On.createRoot=function(t,i){if(!yu(t))throw Error(n(299));var o=!1,l="",f=Lp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xu(t,1,!1,null,null,o,!1,l,f),t[ki]=i.current,So(t.nodeType===8?t.parentNode:t),new _u(i)},On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ir(i),t=t===null?null:t.stateNode,t},On.flushSync=function(t){return Hr(t)},On.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},On.hydrateRoot=function(t,i,o){if(!yu(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,f=!1,m="",E=Lp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Pp(i,null,t,1,o??null,f,!1,m,E),t[ki]=i.current,So(t),l)for(t=0;t<l.length;t++)o=l[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Ja(i)},On.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},On.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Hr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1},On.unstable_batchedUpdates=du,On.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,l)},On.version="18.3.1-next-f1338f8080-20240426",On}var Vp;function Px(){if(Vp)return Eu.exports;Vp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=Nx(),Eu.exports}var Hp;function Dx(){if(Hp)return il;Hp=1;var s=Px();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var Lx=Dx();const Ix=Km(Lx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=Ye.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...h},p)=>Ye.createElement("svg",{ref:p,...Fx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Zm("lucide",a),...h},[...d.map(([g,v])=>Ye.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(s,e)=>{const n=Ye.forwardRef(({className:r,...a},c)=>Ye.createElement(Ox,{ref:c,iconNode:e,className:Zm(`lucide-${Ux(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Qm=ot("Activity",kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],zx=ot("BookOpen",Bx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Vx=ot("Box",jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jm=ot("Check",Hx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Wx=ot("ChevronDown",Gx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],$x=ot("ChevronUp",Xx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Yx=ot("CircleAlert",qx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Kd=ot("CircleCheck",Kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],e0=ot("Clock",Zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],Jx=ot("CloudRain",Qx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],tv=ot("Compass",ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],iv=ot("Copy",nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],t0=ot("Cpu",rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],ov=ot("DollarSign",sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],jl=ot("Download",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],n0=ot("Droplet",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],uv=ot("Droplets",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],sd=ot("FileCode2",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],hv=ot("FileText",fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],mv=ot("Flame",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],xv=ot("Gauge",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]],_v=ot("GlassWater",vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Sv=ot("Info",yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],qo=ot("Layers",Mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],i0=ot("LockOpen",Ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Zd=ot("Lock",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Tv=ot("Maximize2",bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Cv=ot("Minimize2",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Nv=ot("Moon",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Dv=ot("Pause",Pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],r0=ot("Play",Lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],s0=ot("RotateCcw",Iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Fv=ot("Search",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],o0=ot("ShieldAlert",Ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ko=ot("ShieldCheck",kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],a0=ot("SlidersVertical",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Gp=ot("Sparkles",zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],l0=ot("Sun",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Hv=ot("Trash2",Vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Wv=ot("TrendingDown",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],is=ot("TriangleAlert",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],qv=ot("Video",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],Kv=ot("Waves",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],Qv=ot("Wrench",Zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qd=ot("X",Jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],c0=ot("Zap",e_),t_=({ticks:s,simTimeSeconds:e,realTimeSeconds:n,safetyState:r,isPaused:a,onTogglePause:c,onReset:d,viewMode:h,onToggleViewMode:p,onOpenBlueprint:g,onExportCsv:v,csvRowCount:_,isDarkMode:y,onToggleTheme:M})=>{const[w,b]=Ye.useState(!1);Ye.useEffect(()=>{const U=()=>{b(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",U),()=>document.removeEventListener("fullscreenchange",U)},[]);const S=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},x=()=>{switch(r){case"RUNNING":return"bg-emerald-500/15 text-emerald-400 border-emerald-500/40 ring-1 ring-emerald-500/20";case"THROTTLED":return"bg-amber-500/15 text-amber-400 border-amber-500/40 ring-1 ring-amber-500/20";case"DEGRADED":return"bg-orange-500/15 text-orange-400 border-orange-500/40 ring-1 ring-orange-500/20";case"FAIL_CLOSED":return"bg-rose-500/20 text-rose-400 border-rose-500/50 ring-1 ring-rose-500/30 animate-pulse"}};return u.jsx("header",{className:"sticky top-4 z-40 w-full mb-6",children:u.jsxs("nav",{className:"flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 rounded-2xl bg-obsidian-900/90 border border-slate-700/70 shadow-bezel backdrop-blur-xl ring-1 ring-white/5",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("div",{className:"relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-photon-cyan to-uv-deep border border-photon-cyan/40 shadow-lg shadow-photon-cyan/20",children:[u.jsx(Ko,{className:"w-5 h-5 text-white"}),u.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-photon-cyan animate-ping"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("span",{className:"font-extrabold text-base sm:text-lg tracking-tight text-white font-sans",children:["DoseGuard",u.jsx("span",{className:"text-photon-cyan",children:"™"})]}),u.jsx("span",{className:"px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-photon-cyan/15 text-photon-cyan border border-photon-cyan/30 uppercase",children:"Digital Twin"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-mono hidden md:block",children:"Smart Water-Purifier UV Controller • Team SpaceX (KIIT) • atomQUEST 2026"})]})]}),u.jsxs("div",{className:"hidden lg:flex items-center space-x-3 px-3.5 py-1.5 rounded-xl bg-obsidian-950/80 border border-slate-800 text-xs font-mono text-slate-300 shadow-nested",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-photon-cyan",children:[u.jsx(Qm,{className:"w-3.5 h-3.5 animate-pulse"}),u.jsxs("span",{children:["Ticks: ",u.jsx("strong",{className:"text-white",children:s})]})]}),u.jsx("span",{className:"text-slate-700",children:"|"}),u.jsxs("span",{children:["Sim: ",u.jsxs("strong",{className:"text-slate-200",children:[e.toFixed(1),"s"]})]}),u.jsx("span",{className:"text-slate-700",children:"|"}),u.jsxs("span",{children:["Real: ",u.jsxs("strong",{className:"text-slate-200",children:[n.toFixed(1),"s"]})]}),u.jsx("span",{className:"text-slate-700",children:"|"}),u.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${x()}`,children:r})]}),u.jsxs("div",{className:"flex items-center flex-wrap gap-2 text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center p-0.5 rounded-xl bg-obsidian-950/90 border border-slate-800",children:[u.jsxs("button",{onClick:()=>p("3d"),className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg transition-all ${h==="3d"?"bg-photon-cyan/20 text-photon-cyan border border-photon-cyan/40 font-bold shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"3D WebGL Reactor Model",children:[u.jsx(Vx,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"3D Live"})]}),u.jsxs("button",{onClick:()=>p("2d"),className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg transition-all ${h==="2d"?"bg-photon-cyan/20 text-photon-cyan border border-photon-cyan/40 font-bold shadow-sm":"text-slate-400 hover:text-slate-200"}`,title:"2D Flow Schematic View",children:[u.jsx(qo,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"2D Flow"})]})]}),u.jsxs("button",{onClick:g,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-uv-deep to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold shadow-md shadow-purple-500/20 border border-purple-400/40 transition-all active:scale-[0.98]",title:"Open CAD Engineering Drawings, BOM Table, and 90-sec Video Script",children:[u.jsx(sd,{className:"w-3.5 h-3.5 text-purple-200"}),u.jsx("span",{className:"hidden sm:inline",children:"CAD Specs & 90s Video"}),u.jsx("span",{className:"sm:hidden",children:"CAD/BOM"})]}),u.jsxs("button",{onClick:c,className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all active:scale-[0.98] ${a?"bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30":"bg-obsidian-850 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white"}`,title:a?"Resume Simulation":"Pause Simulation",children:[a?u.jsx(r0,{className:"w-3.5 h-3.5 text-amber-400"}):u.jsx(Dv,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden md:inline",children:a?"Resume":"Pause"})]}),u.jsx("button",{onClick:d,className:"p-2 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors",title:"Reset Simulation Defaults",children:u.jsx(s0,{className:"w-3.5 h-3.5"})}),u.jsxs("button",{onClick:v,className:"flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-300 hover:text-photon-cyan border border-slate-700/80 transition-colors",title:"Export full session telemetry data as CSV file",children:[u.jsx(jl,{className:"w-3.5 h-3.5 text-photon-cyan"}),u.jsx("span",{className:"hidden sm:inline",children:"Export CSV"}),u.jsx("span",{className:"px-1.5 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400",children:_})]}),u.jsx("button",{onClick:S,className:`p-2 rounded-xl border transition-colors ${w?"bg-photon-cyan/20 text-photon-cyan border-photon-cyan/40":"bg-obsidian-850 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-700/80"}`,title:w?"Exit Fullscreen HUD":"Enter Presenter HUD Mode",children:w?u.jsx(Cv,{className:"w-3.5 h-3.5"}):u.jsx(Tv,{className:"w-3.5 h-3.5"})}),u.jsx("button",{onClick:M,className:"p-2 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-700/80 transition-colors",title:"Toggle Light / Dark Ambient Theme",children:y?u.jsx(l0,{className:"w-3.5 h-3.5"}):u.jsx(Nv,{className:"w-3.5 h-3.5"})})]})]})})},n_=({onOpenBlueprint:s,onScrollToSim:e})=>{const[n,r]=Ye.useState(!1);return u.jsxs("section",{className:"relative w-full mb-6 rounded-3xl bg-gradient-to-b from-obsidian-900/90 via-obsidian-900/60 to-obsidian-950/80 border border-slate-800/80 shadow-bezel backdrop-blur-md overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-1/4 w-96 h-96 bg-uv-glow/10 rounded-full blur-3xl pointer-events-none"}),u.jsx("div",{className:"absolute bottom-0 left-1/4 w-96 h-96 bg-photon-cyan/10 rounded-full blur-3xl pointer-events-none"}),u.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-slate-950/40",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[u.jsxs("span",{className:"inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30 text-[11px] font-mono font-bold tracking-wider uppercase",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-photon-cyan animate-pulse"}),u.jsx("span",{children:"atomQUEST 2026 • Round 2"})]}),u.jsx("span",{className:"text-xs text-slate-400 font-mono hidden sm:inline",children:"Team SpaceX (KIIT) • Track 2: Smart Water Purifier"})]}),u.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors",title:n?"Expand Problem Framing":"Collapse Overview",children:[u.jsx("span",{children:n?"Why This Matters":"Minimize"}),n?u.jsx(Wx,{className:"w-3.5 h-3.5"}):u.jsx($x,{className:"w-3.5 h-3.5"})]})]}),!n&&u.jsxs("div",{className:"p-6 md:p-8 space-y-6",children:[u.jsxs("div",{className:"max-w-4xl space-y-3",children:[u.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight",children:["The First ",u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-photon-cyan via-teal-300 to-uv-bright",children:"Closed-Loop Optical UV Dosing"})," Digital Twin for Smart Home Purifiers"]}),u.jsxs("p",{className:"text-sm sm:text-base text-slate-300 font-normal leading-relaxed",children:["In conventional home purifiers, the UV stage is a ",u.jsx("strong",{className:"text-white font-semibold",children:"silent black box"})," running at a blind, fixed flow rate. When dissolved iron, silt, or seasonal tannins enter the feed water, ",u.jsx("strong",{className:"text-amber-300 font-semibold",children:"UV Transmittance (UVT) drops by up to 60%"})," while TDS remains unchanged—causing households to drink under-disinfected water with zero warning."]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-photon-cyan",children:[u.jsx(Ko,{className:"w-4 h-4"}),u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider",children:"NSF 55 Class A Benchmark"})]}),u.jsx("p",{className:"text-xs text-slate-400 leading-normal",children:"Guarantees ≥ 40 mJ/cm² delivered UV dose with a +10% target margin (44 mJ/cm²) verified by real-time fluence physics."})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-uv-bright",children:[u.jsx(uv,{className:"w-4 h-4"}),u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider",children:"Dual-SiC Ratio Sensing"})]}),u.jsx("p",{className:"text-xs text-slate-400 leading-normal",children:"PD-A measures emitter output while PD-B measures across a 2.0 cm water gap, cancelling lamp aging noise from water quality."})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-photon-amber",children:[u.jsx(c0,{className:"w-4 h-4"}),u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider",children:"Adaptive Flow PID Loop"})]}),u.jsx("p",{className:"text-xs text-slate-400 leading-normal",children:"Dynamically throttles pump flow (3.0 – 8.33 mL/s) when turbidity rises. Trips shut in <2s if water cannot be disinfected."})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-850/80 border border-slate-800/90 shadow-nested space-y-1.5",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-emerald-400",children:[u.jsx(qo,{className:"w-4 h-4"}),u.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider",children:"₹800 Atomberg Add-On"})]}),u.jsx("p",{className:"text-xs text-slate-400 leading-normal",children:"Not an expensive new purifier: an elegant modular drop-in engineered to interface directly with Atomberg BLDC pumps & IoT."})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/60 text-xs font-mono",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[u.jsxs("button",{onClick:e,className:"flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-photon-cyan to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-obsidian-950 font-bold shadow-lg shadow-photon-cyan/20 transition-all active:scale-[0.98]",children:[u.jsx(tv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Interact with Simulation"})]}),u.jsxs("button",{onClick:s,className:"flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 transition-all font-semibold active:scale-[0.98]",children:[u.jsx(qo,{className:"w-3.5 h-3.5 text-photon-cyan"}),u.jsx("span",{children:"View 3D CAD & BOM Specs"})]})]}),u.jsxs("div",{className:"text-[11px] text-slate-400 flex items-center space-x-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),u.jsx("span",{children:"Firmware-identical control loop executing at 2 Hz (500 ms)"})]})]})]})]})},i_=({outputs:s,inputs:e})=>{const{uvtPerCm:n,T:r,dose:a,flowLPerMin:c,flowMlPerSec:d,qSet:h,valveOpen:p,pdA:g,pdB:v,safetyState:_}=s,{lampOutput:y,coverClosed:M}=e,w=a>=40,b=a-40;return u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md flex flex-col justify-between hover:border-slate-700/80 transition-all",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-photon-cyan",children:[u.jsx(Kv,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300",children:"UV Transmittance"})]}),u.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700",children:"Per cm"})]}),u.jsxs("div",{className:"my-2.5",children:[u.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[u.jsx("span",{className:`text-3xl font-black font-mono tracking-tight ${n>=85?"text-white":n>=60?"text-amber-300":"text-rose-400"}`,children:n.toFixed(1)}),u.jsx("span",{className:"text-sm font-bold text-slate-400 font-mono",children:"%"})]}),u.jsxs("p",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:["2.0 cm Path T: ",u.jsxs("strong",{className:"text-slate-200",children:[(r*100).toFixed(1),"%"]})]})]}),u.jsx("div",{className:"w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800",children:u.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${n>=85?"bg-photon-cyan":n>=60?"bg-amber-400":"bg-rose-500"}`,style:{width:`${Math.min(100,Math.max(0,n))}%`}})})]}),u.jsxs("div",{className:`p-4 rounded-2xl border shadow-bezel backdrop-blur-md flex flex-col justify-between transition-all ${p?a>=44?"bg-obsidian-900/90 border-slate-800":"bg-amber-950/20 border-amber-500/40":"bg-rose-950/20 border-rose-500/40 ring-1 ring-rose-500/20"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-photon-teal",children:[u.jsx(xv,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300",children:"Delivered Dose"})]}),u.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${p?a>=44?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-rose-500/20 text-rose-300 border-rose-500/40"}`,children:p?a>=44?"SAFE":"THROTTLED":"TRIPPED"})]}),u.jsxs("div",{className:"my-2.5",children:[u.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[u.jsx("span",{className:`text-3xl font-black font-mono tracking-tight ${p?a>=44?"text-emerald-400":"text-amber-300":"text-rose-400"}`,children:a.toFixed(1)}),u.jsx("span",{className:"text-xs font-bold text-slate-400 font-mono",children:"mJ/cm²"})]}),u.jsxs("p",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:["Target: ",u.jsx("span",{className:"text-emerald-400 font-bold",children:"44.0"})," • Min Cutoff: ",u.jsx("span",{className:"text-rose-400 font-bold",children:"40.0"})]})]}),u.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400",children:[u.jsx("span",{children:"NSF 55 Class A:"}),u.jsx("span",{className:`font-bold ${w?"text-emerald-400":"text-rose-400"}`,children:w?`+${b.toFixed(1)} Margin`:"Below 40 Cutoff"})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md flex flex-col justify-between hover:border-slate-700/80 transition-all",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-photon-amber",children:[u.jsx(n0,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300",children:"Dispense Flow"})]}),u.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700",children:["qSet: ",h.toFixed(1)," mL/s"]})]}),u.jsxs("div",{className:"my-2.5",children:[u.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[u.jsx("span",{className:`text-3xl font-black font-mono tracking-tight ${c>0?"text-amber-300":"text-slate-500"}`,children:c.toFixed(2)}),u.jsx("span",{className:"text-sm font-bold text-slate-400 font-mono",children:"L/min"})]}),u.jsxs("p",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:["Actual: ",u.jsxs("strong",{className:"text-slate-200",children:[d.toFixed(2)," mL/s"]})," ",p?"(Active)":"(Locked 0)"]})]}),u.jsx("div",{className:"w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800",children:u.jsx("div",{className:"h-full bg-photon-amber rounded-full transition-all duration-300",style:{width:`${c/.5*100}%`}})})]}),u.jsxs("div",{className:`p-4 rounded-2xl border shadow-bezel backdrop-blur-md flex flex-col justify-between transition-all ${p?"bg-obsidian-900/90 border-slate-800":"bg-rose-950/30 border-rose-500/50 shadow-hazard-glow"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-slate-300",children:[p?u.jsx(i0,{className:"w-4 h-4 text-emerald-400"}):u.jsx(Zd,{className:"w-4 h-4 text-rose-400"}),u.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300",children:"Solenoid Valve"})]}),u.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700",title:"Mechanical configuration: Normally-Closed (spring shuts when de-energized)",children:"Type: NC Safe"})]}),u.jsxs("div",{className:"my-2.5",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:`w-3 h-3 rounded-full ${p?"bg-emerald-400 shadow-lg shadow-emerald-400/50":"bg-rose-500 animate-ping"}`}),u.jsx("span",{className:`text-xl sm:text-2xl font-black font-mono tracking-tight ${p?"text-emerald-400":"text-rose-400"}`,children:p?"OPEN":"FAIL-CLOSED"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-mono mt-1",children:p?"Power Energized (Water Flowing)":"Spring Retracted (Safe Isolation)"})]}),u.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800/80 pt-1.5",children:[u.jsx("span",{children:"Cover Interlock:"}),u.jsx("span",{className:`font-bold ${M?"text-emerald-400":"text-rose-400"}`,children:M?"LATCHED":"BREACHED"})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md flex flex-col justify-between hover:border-slate-700/80 transition-all",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-uv-bright",children:[u.jsx(c0,{className:"w-4 h-4"}),u.jsx("span",{className:"text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300",children:"UVC Source"})]}),u.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${M?g>.6?"bg-purple-500/20 text-purple-300 border-purple-500/40":"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-rose-500/20 text-rose-300 border-rose-500/40"}`,children:M?g>.6?"HEALTHY":"AGING":"CUT"})]}),u.jsxs("div",{className:"my-2.5",children:[u.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[u.jsx("span",{className:"text-3xl font-black font-mono tracking-tight text-white",children:M?y:0}),u.jsx("span",{className:"text-sm font-bold text-slate-400 font-mono",children:"%"})]}),u.jsxs("p",{className:"text-[11px] text-slate-400 font-mono mt-0.5",children:["PD-A: ",u.jsx("strong",{className:"text-cyan-300",children:g.toFixed(2)})," • PD-B: ",u.jsx("strong",{className:"text-purple-300",children:v.toFixed(2)})]})]}),u.jsx("div",{className:"w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-uv-deep to-uv-bright rounded-full transition-all duration-300",style:{width:`${M?y:0}%`}})})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="173",r_=0,Wp=1,s_=2,u0=1,o_=2,Zi=3,Pr=0,Bn=1,yi=2,Rr=0,Ys=1,od=2,Xp=3,$p=4,a_=5,ts=100,l_=101,c_=102,u_=103,d_=104,f_=200,h_=201,p_=202,m_=203,ad=204,ld=205,g_=206,x_=207,v_=208,__=209,y_=210,S_=211,M_=212,E_=213,w_=214,cd=0,ud=1,dd=2,Qs=3,fd=4,hd=5,pd=6,md=7,d0=0,b_=1,T_=2,Nr=0,A_=1,C_=2,R_=3,N_=4,P_=5,D_=6,L_=7,f0=300,Js=301,eo=302,gd=303,xd=304,Vl=306,vd=1e3,rs=1001,_d=1002,Ei=1003,I_=1004,rl=1005,Ii=1006,Tu=1007,ss=1008,tr=1009,h0=1010,p0=1011,Yo=1012,ef=1013,os=1014,Qi=1015,Zo=1016,tf=1017,nf=1018,to=1020,m0=35902,g0=1021,x0=1022,Mi=1023,v0=1024,_0=1025,Ks=1026,no=1027,y0=1028,rf=1029,S0=1030,sf=1031,of=1033,Nl=33776,Pl=33777,Dl=33778,Ll=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,wd=36196,bd=37492,Td=37496,Ad=37808,Cd=37809,Rd=37810,Nd=37811,Pd=37812,Dd=37813,Ld=37814,Id=37815,Ud=37816,Fd=37817,Od=37818,kd=37819,Bd=37820,zd=37821,Il=36492,jd=36494,Vd=36495,M0=36283,Hd=36284,Gd=36285,Wd=36286,U_=3200,F_=3201,E0=0,O_=1,Cr="",oi="srgb",io="srgb-linear",Fl="linear",Lt="srgb",Ds=7680,qp=519,k_=512,B_=513,z_=514,w0=515,j_=516,V_=517,H_=518,G_=519,Yp=35044,Kp="300 es",Ji=2e3,Ol=2001;class so{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,Xd=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function St(s,e,n){return Math.max(e,Math.min(n,s))}function W_(s,e){return(s%e+e)%e}function Cu(s,e,n){return(1-n)*s+n*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,n,r,a,c,d,h,p,g){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,h,p,g)}set(e,n,r,a,c,d,h,p,g){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],h=r[3],p=r[6],g=r[1],v=r[4],_=r[7],y=r[2],M=r[5],w=r[8],b=a[0],S=a[3],x=a[6],U=a[1],P=a[4],N=a[7],H=a[2],L=a[5],F=a[8];return c[0]=d*b+h*U+p*H,c[3]=d*S+h*P+p*L,c[6]=d*x+h*N+p*F,c[1]=g*b+v*U+_*H,c[4]=g*S+v*P+_*L,c[7]=g*x+v*N+_*F,c[2]=y*b+M*U+w*H,c[5]=y*S+M*P+w*L,c[8]=y*x+M*N+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],p=e[6],g=e[7],v=e[8];return n*d*v-n*h*g-r*c*v+r*h*p+a*c*g-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],p=e[6],g=e[7],v=e[8],_=v*d-h*g,y=h*p-v*c,M=g*c-d*p,w=n*_+r*y+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=_*b,e[1]=(a*g-v*r)*b,e[2]=(h*r-a*d)*b,e[3]=y*b,e[4]=(v*n-a*p)*b,e[5]=(a*c-h*n)*b,e[6]=M*b,e[7]=(r*p-g*n)*b,e[8]=(d*n-r*c)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,h){const p=Math.cos(c),g=Math.sin(c);return this.set(r*p,r*g,-r*(p*d+g*h)+d+e,-a*g,a*p,-a*(-g*d+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Ru.makeScale(e,n)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new ft;function b0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function X_(){const s=kl("canvas");return s.style.display="block",s}const Zp={};function Xs(s){s in Zp||(Zp[s]=!0,console.warn(s))}function $_(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function q_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Y_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){const s={enabled:!0,workingColorSpace:io,spaces:{},convert:function(a,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Lt&&(a.r=er(a.r),a.g=er(a.g),a.b=er(a.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Lt&&(a.r=Zs(a.r),a.g=Zs(a.g),a.b=Zs(a.b))),a},fromWorkingColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},toWorkingColorSpace:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Cr?Fl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,d){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[io]:{primaries:e,whitePoint:r,transfer:Fl,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Qp,fromXYZ:Jp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Nt=K_();function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class Z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=kl("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=er(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(er(n[r]/255)*255):n[r]=er(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class T0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,h=a.length;d<h;d++)a[d].isDataTexture?c.push(Nu(a[d].image)):c.push(Nu(a[d]))}else c=Nu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Z_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J_=0;class zn extends so{constructor(e=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,r=rs,a=rs,c=Ii,d=ss,h=Mi,p=tr,g=zn.DEFAULT_ANISOTROPY,v=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Qo(),this.name="",this.source=new T0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=p,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=f0;zn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,r=0,a=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,g=p[0],v=p[4],_=p[8],y=p[1],M=p[5],w=p[9],b=p[2],S=p[6],x=p[10];if(Math.abs(v-y)<.01&&Math.abs(_-b)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+b)<.1&&Math.abs(w+S)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(g+1)/2,N=(M+1)/2,H=(x+1)/2,L=(v+y)/4,F=(_+b)/4,z=(w+S)/4;return P>N&&P>H?P<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(P),a=L/r,c=F/r):N>H?N<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(N),r=L/a,c=z/a):H<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(H),r=F/c,a=z/c),this.set(r,a,c,n),this}let U=Math.sqrt((S-w)*(S-w)+(_-b)*(_-b)+(y-v)*(y-v));return Math.abs(U)<.001&&(U=1),this.x=(S-w)/U,this.y=(_-b)/U,this.z=(y-v)/U,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends so{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new zn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new T0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends ey{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class A0 extends zn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends zn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,h){let p=r[a+0],g=r[a+1],v=r[a+2],_=r[a+3];const y=c[d+0],M=c[d+1],w=c[d+2],b=c[d+3];if(h===0){e[n+0]=p,e[n+1]=g,e[n+2]=v,e[n+3]=_;return}if(h===1){e[n+0]=y,e[n+1]=M,e[n+2]=w,e[n+3]=b;return}if(_!==b||p!==y||g!==M||v!==w){let S=1-h;const x=p*y+g*M+v*w+_*b,U=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const H=Math.sqrt(P),L=Math.atan2(H,x*U);S=Math.sin(S*L)/H,h=Math.sin(h*L)/H}const N=h*U;if(p=p*S+y*N,g=g*S+M*N,v=v*S+w*N,_=_*S+b*N,S===1-h){const H=1/Math.sqrt(p*p+g*g+v*v+_*_);p*=H,g*=H,v*=H,_*=H}}e[n]=p,e[n+1]=g,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,c,d){const h=r[a],p=r[a+1],g=r[a+2],v=r[a+3],_=c[d],y=c[d+1],M=c[d+2],w=c[d+3];return e[n]=h*w+v*_+p*M-g*y,e[n+1]=p*w+v*y+g*_-h*M,e[n+2]=g*w+v*M+h*y-p*_,e[n+3]=v*w-h*_-p*y-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,g=h(r/2),v=h(a/2),_=h(c/2),y=p(r/2),M=p(a/2),w=p(c/2);switch(d){case"XYZ":this._x=y*v*_+g*M*w,this._y=g*M*_-y*v*w,this._z=g*v*w+y*M*_,this._w=g*v*_-y*M*w;break;case"YXZ":this._x=y*v*_+g*M*w,this._y=g*M*_-y*v*w,this._z=g*v*w-y*M*_,this._w=g*v*_+y*M*w;break;case"ZXY":this._x=y*v*_-g*M*w,this._y=g*M*_+y*v*w,this._z=g*v*w+y*M*_,this._w=g*v*_-y*M*w;break;case"ZYX":this._x=y*v*_-g*M*w,this._y=g*M*_+y*v*w,this._z=g*v*w-y*M*_,this._w=g*v*_+y*M*w;break;case"YZX":this._x=y*v*_+g*M*w,this._y=g*M*_+y*v*w,this._z=g*v*w-y*M*_,this._w=g*v*_-y*M*w;break;case"XZY":this._x=y*v*_-g*M*w,this._y=g*M*_-y*v*w,this._z=g*v*w+y*M*_,this._w=g*v*_+y*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],h=n[5],p=n[9],g=n[2],v=n[6],_=n[10],y=r+h+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-p)*M,this._y=(c-g)*M,this._z=(d-a)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-p)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(c+g)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(c-g)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(d-a)/M,this._x=(c+g)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,h=n._x,p=n._y,g=n._z,v=n._w;return this._x=r*v+d*h+a*g-c*p,this._y=a*v+d*p+c*h-r*g,this._z=c*v+d*g+r*p-a*h,this._w=d*v-r*h-a*p-c*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+a*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,h),_=Math.sin((1-n)*v)/g,y=Math.sin(n*v)/g;return this._w=d*_+this._w*y,this._x=r*_+this._x*y,this._y=a*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,h=e.z,p=e.w,g=2*(d*a-h*r),v=2*(h*n-c*a),_=2*(c*r-d*n);return this.x=n+p*g+d*_-h*v,this.y=r+p*v+h*g-c*_,this.z=a+p*_+c*v-d*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,h=n.y,p=n.z;return this.x=a*p-c*h,this.y=c*d-r*p,this.z=r*h-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new Y,em=new Jo;class ea{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,gi):gi.fromBufferAttribute(c,d),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),ol.subVectors(this.max,jo),Is.subVectors(e.a,jo),Us.subVectors(e.b,jo),Fs.subVectors(e.c,jo),Mr.subVectors(Us,Is),Er.subVectors(Fs,Us),$r.subVectors(Is,Fs);let n=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-$r.z,$r.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,$r.z,0,-$r.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-$r.y,$r.x,0];return!Du(n,Is,Us,Fs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Du(n,Is,Us,Fs,ol))?!1:(al.crossVectors(Mr,Er),n=[al.x,al.y,al.z],Du(n,Is,Us,Fs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],gi=new Y,sl=new ea,Is=new Y,Us=new Y,Fs=new Y,Mr=new Y,Er=new Y,$r=new Y,jo=new Y,ol=new Y,al=new Y,qr=new Y;function Du(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){qr.fromArray(s,c);const h=a.x*Math.abs(qr.x)+a.y*Math.abs(qr.y)+a.z*Math.abs(qr.z),p=e.dot(qr),g=n.dot(qr),v=r.dot(qr);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>h)return!1}return!0}const ny=new ea,Vo=new Y,Lu=new Y;class ta{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ny.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const n=Vo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Lu)),this.expandByPoint(Vo.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new Y,Iu=new Y,ll=new Y,wr=new Y,Uu=new Y,cl=new Y,Fu=new Y;class af{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Iu.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),wr.copy(this.origin).sub(Iu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(ll),h=wr.dot(this.direction),p=-wr.dot(ll),g=wr.lengthSq(),v=Math.abs(1-d*d);let _,y,M,w;if(v>0)if(_=d*p-h,y=d*h-p,w=c*v,_>=0)if(y>=-w)if(y<=w){const b=1/v;_*=b,y*=b,M=_*(_+d*y+2*h)+y*(d*_+y+2*p)+g}else y=c,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*p)+g;else y=-c,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*p)+g;else y<=-w?(_=Math.max(0,-(-d*c+h)),y=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+g):y<=w?(_=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+g):(_=Math.max(0,-(d*c+h)),y=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+y*(y+2*p)+g);else y=d>0?-c:c,_=Math.max(0,-(d*y+h)),M=-_*_+y*(y+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Iu).addScaledVector(ll,y),M}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),a=$i.dot($i)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,h,p;const g=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return g>=0?(r=(e.min.x-y.x)*g,a=(e.max.x-y.x)*g):(r=(e.max.x-y.x)*g,a=(e.min.x-y.x)*g),v>=0?(c=(e.min.y-y.y)*v,d=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,d=(e.min.y-y.y)*v),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),_>=0?(h=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(h=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),r>p||h>a)||((h>r||r!==r)&&(r=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,r,a,c){Uu.subVectors(n,e),cl.subVectors(r,e),Fu.crossVectors(Uu,cl);let d=this.direction.dot(Fu),h;if(d>0){if(a)return null;h=1}else if(d<0)h=-1,d=-d;else return null;wr.subVectors(this.origin,e);const p=h*this.direction.dot(cl.crossVectors(wr,cl));if(p<0)return null;const g=h*this.direction.dot(Uu.cross(wr));if(g<0||p+g>d)return null;const v=-h*wr.dot(Fu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,a,c,d,h,p,g,v,_,y,M,w,b,S){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,h,p,g,v,_,y,M,w,b,S)}set(e,n,r,a,c,d,h,p,g,v,_,y,M,w,b,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=a,x[1]=c,x[5]=d,x[9]=h,x[13]=p,x[2]=g,x[6]=v,x[10]=_,x[14]=y,x[3]=M,x[7]=w,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),c=1/Os.setFromMatrixColumn(e,1).length(),d=1/Os.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),g=Math.sin(a),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=d*v,M=d*_,w=h*v,b=h*_;n[0]=p*v,n[4]=-p*_,n[8]=g,n[1]=M+w*g,n[5]=y-b*g,n[9]=-h*p,n[2]=b-y*g,n[6]=w+M*g,n[10]=d*p}else if(e.order==="YXZ"){const y=p*v,M=p*_,w=g*v,b=g*_;n[0]=y+b*h,n[4]=w*h-M,n[8]=d*g,n[1]=d*_,n[5]=d*v,n[9]=-h,n[2]=M*h-w,n[6]=b+y*h,n[10]=d*p}else if(e.order==="ZXY"){const y=p*v,M=p*_,w=g*v,b=g*_;n[0]=y-b*h,n[4]=-d*_,n[8]=w+M*h,n[1]=M+w*h,n[5]=d*v,n[9]=b-y*h,n[2]=-d*g,n[6]=h,n[10]=d*p}else if(e.order==="ZYX"){const y=d*v,M=d*_,w=h*v,b=h*_;n[0]=p*v,n[4]=w*g-M,n[8]=y*g+b,n[1]=p*_,n[5]=b*g+y,n[9]=M*g-w,n[2]=-g,n[6]=h*p,n[10]=d*p}else if(e.order==="YZX"){const y=d*p,M=d*g,w=h*p,b=h*g;n[0]=p*v,n[4]=b-y*_,n[8]=w*_+M,n[1]=_,n[5]=d*v,n[9]=-h*v,n[2]=-g*v,n[6]=M*_+w,n[10]=y-b*_}else if(e.order==="XZY"){const y=d*p,M=d*g,w=h*p,b=h*g;n[0]=p*v,n[4]=-_,n[8]=g*v,n[1]=y*_+b,n[5]=d*v,n[9]=M*_-w,n[2]=w*_-M,n[6]=h*v,n[10]=b*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,ry)}lookAt(e,n,r){const a=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),br.crossVectors(r,Xn),br.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),br.crossVectors(r,Xn)),br.normalize(),ul.crossVectors(Xn,br),a[0]=br.x,a[4]=ul.x,a[8]=Xn.x,a[1]=br.y,a[5]=ul.y,a[9]=Xn.y,a[2]=br.z,a[6]=ul.z,a[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],h=r[4],p=r[8],g=r[12],v=r[1],_=r[5],y=r[9],M=r[13],w=r[2],b=r[6],S=r[10],x=r[14],U=r[3],P=r[7],N=r[11],H=r[15],L=a[0],F=a[4],z=a[8],C=a[12],A=a[1],k=a[5],K=a[9],q=a[13],oe=a[2],ce=a[6],J=a[10],de=a[14],B=a[3],ue=a[7],le=a[11],O=a[15];return c[0]=d*L+h*A+p*oe+g*B,c[4]=d*F+h*k+p*ce+g*ue,c[8]=d*z+h*K+p*J+g*le,c[12]=d*C+h*q+p*de+g*O,c[1]=v*L+_*A+y*oe+M*B,c[5]=v*F+_*k+y*ce+M*ue,c[9]=v*z+_*K+y*J+M*le,c[13]=v*C+_*q+y*de+M*O,c[2]=w*L+b*A+S*oe+x*B,c[6]=w*F+b*k+S*ce+x*ue,c[10]=w*z+b*K+S*J+x*le,c[14]=w*C+b*q+S*de+x*O,c[3]=U*L+P*A+N*oe+H*B,c[7]=U*F+P*k+N*ce+H*ue,c[11]=U*z+P*K+N*J+H*le,c[15]=U*C+P*q+N*de+H*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],h=e[5],p=e[9],g=e[13],v=e[2],_=e[6],y=e[10],M=e[14],w=e[3],b=e[7],S=e[11],x=e[15];return w*(+c*p*_-a*g*_-c*h*y+r*g*y+a*h*M-r*p*M)+b*(+n*p*M-n*g*y+c*d*y-a*d*M+a*g*v-c*p*v)+S*(+n*g*_-n*h*M-c*d*_+r*d*M+c*h*v-r*g*v)+x*(-a*h*v-n*p*_+n*h*y+a*d*_-r*d*y+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],h=e[5],p=e[6],g=e[7],v=e[8],_=e[9],y=e[10],M=e[11],w=e[12],b=e[13],S=e[14],x=e[15],U=_*S*g-b*y*g+b*p*M-h*S*M-_*p*x+h*y*x,P=w*y*g-v*S*g-w*p*M+d*S*M+v*p*x-d*y*x,N=v*b*g-w*_*g+w*h*M-d*b*M-v*h*x+d*_*x,H=w*_*p-v*b*p-w*h*y+d*b*y+v*h*S-d*_*S,L=n*U+r*P+a*N+c*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=U*F,e[1]=(b*y*c-_*S*c-b*a*M+r*S*M+_*a*x-r*y*x)*F,e[2]=(h*S*c-b*p*c+b*a*g-r*S*g-h*a*x+r*p*x)*F,e[3]=(_*p*c-h*y*c-_*a*g+r*y*g+h*a*M-r*p*M)*F,e[4]=P*F,e[5]=(v*S*c-w*y*c+w*a*M-n*S*M-v*a*x+n*y*x)*F,e[6]=(w*p*c-d*S*c-w*a*g+n*S*g+d*a*x-n*p*x)*F,e[7]=(d*y*c-v*p*c+v*a*g-n*y*g-d*a*M+n*p*M)*F,e[8]=N*F,e[9]=(w*_*c-v*b*c-w*r*M+n*b*M+v*r*x-n*_*x)*F,e[10]=(d*b*c-w*h*c+w*r*g-n*b*g-d*r*x+n*h*x)*F,e[11]=(v*h*c-d*_*c-v*r*g+n*_*g+d*r*M-n*h*M)*F,e[12]=H*F,e[13]=(v*b*a-w*_*a+w*r*y-n*b*y-v*r*S+n*_*S)*F,e[14]=(w*h*a-d*b*a-w*r*p+n*b*p+d*r*S-n*h*S)*F,e[15]=(d*_*a-v*h*a+v*r*p-n*_*p-d*r*y+n*h*y)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,h=e.y,p=e.z,g=c*d,v=c*h;return this.set(g*d+r,g*h-a*p,g*p+a*h,0,g*h+a*p,v*h+r,v*p-a*d,0,g*p-a*h,v*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,h=n._z,p=n._w,g=c+c,v=d+d,_=h+h,y=c*g,M=c*v,w=c*_,b=d*v,S=d*_,x=h*_,U=p*g,P=p*v,N=p*_,H=r.x,L=r.y,F=r.z;return a[0]=(1-(b+x))*H,a[1]=(M+N)*H,a[2]=(w-P)*H,a[3]=0,a[4]=(M-N)*L,a[5]=(1-(y+x))*L,a[6]=(S+U)*L,a[7]=0,a[8]=(w+P)*F,a[9]=(S-U)*F,a[10]=(1-(y+b))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Os.set(a[0],a[1],a[2]).length();const d=Os.set(a[4],a[5],a[6]).length(),h=Os.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],xi.copy(this);const g=1/c,v=1/d,_=1/h;return xi.elements[0]*=g,xi.elements[1]*=g,xi.elements[2]*=g,xi.elements[4]*=v,xi.elements[5]*=v,xi.elements[6]*=v,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,n.setFromRotationMatrix(xi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,n,r,a,c,d,h=Ji){const p=this.elements,g=2*c/(n-e),v=2*c/(r-a),_=(n+e)/(n-e),y=(r+a)/(r-a);let M,w;if(h===Ji)M=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(h===Ol)M=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,h=Ji){const p=this.elements,g=1/(n-e),v=1/(r-a),_=1/(d-c),y=(n+e)*g,M=(r+a)*v;let w,b;if(h===Ji)w=(d+c)*_,b=-2*_;else if(h===Ol)w=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=b,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Os=new Y,xi=new Bt,iy=new Y(0,0,0),ry=new Y(1,1,1),br=new Y,ul=new Y,Xn=new Y,tm=new Bt,nm=new Jo;class Ui{constructor(e=0,n=0,r=0,a=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],h=a[8],p=a[1],g=a[5],v=a[9],_=a[2],y=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class C0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const im=new Y,ks=new Jo,qi=new Bt,dl=new Y,Ho=new Y,oy=new Y,ay=new Jo,rm=new Y(1,0,0),sm=new Y(0,1,0),om=new Y(0,0,1),am={type:"added"},ly={type:"removed"},Bs={type:"childadded",child:null},Ou={type:"childremoved",child:null};class fn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new Y,n=new Ui,r=new Jo,a=new Y(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ft}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,n){return ks.setFromAxisAngle(e,n),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ho,dl,this.up):qi.lookAt(dl,Ho,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),ks.setFromRotationMatrix(qi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ly),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const _=p[g];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,g=this.material.length;p<g;p++)h.push(c(e.materials,this.material[p]));a.material=h}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(c(e.animations,p))}}if(n){const h=d(e.geometries),p=d(e.materials),g=d(e.textures),v=d(e.images),_=d(e.shapes),y=d(e.skeletons),M=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(h){const p=[];for(const g in h){const v=h[g];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}fn.DEFAULT_UP=new Y(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new Y,Yi=new Y,ku=new Y,Ki=new Y,zs=new Y,js=new Y,lm=new Y,Bu=new Y,zu=new Y,ju=new Y,Vu=new It,Hu=new It,Gu=new It;class Si{constructor(e=new Y,n=new Y,r=new Y){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),vi.subVectors(e,n),a.cross(vi);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){vi.subVectors(a,n),Yi.subVectors(r,n),ku.subVectors(e,n);const d=vi.dot(vi),h=vi.dot(Yi),p=vi.dot(ku),g=Yi.dot(Yi),v=Yi.dot(ku),_=d*g-h*h;if(_===0)return c.set(0,0,0),null;const y=1/_,M=(g*p-h*v)*y,w=(d*v-h*p)*y;return c.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,n,r,a,c,d,h,p){return this.getBarycoord(e,n,r,a,Ki)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ki.x),p.addScaledVector(d,Ki.y),p.addScaledVector(h,Ki.z),p)}static getInterpolatedAttribute(e,n,r,a,c,d){return Vu.setScalar(0),Hu.setScalar(0),Gu.setScalar(0),Vu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,r),Gu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Vu,c.x),d.addScaledVector(Hu,c.y),d.addScaledVector(Gu,c.z),d}static isFrontFacing(e,n,r,a){return vi.subVectors(r,n),Yi.subVectors(e,n),vi.cross(Yi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return Si.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,h;zs.subVectors(a,r),js.subVectors(c,r),Bu.subVectors(e,r);const p=zs.dot(Bu),g=js.dot(Bu);if(p<=0&&g<=0)return n.copy(r);zu.subVectors(e,a);const v=zs.dot(zu),_=js.dot(zu);if(v>=0&&_<=v)return n.copy(a);const y=p*_-v*g;if(y<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(r).addScaledVector(zs,d);ju.subVectors(e,c);const M=zs.dot(ju),w=js.dot(ju);if(w>=0&&M<=w)return n.copy(c);const b=M*g-p*w;if(b<=0&&g>=0&&w<=0)return h=g/(g-w),n.copy(r).addScaledVector(js,h);const S=v*w-M*_;if(S<=0&&_-v>=0&&M-w>=0)return lm.subVectors(c,a),h=(_-v)/(_-v+(M-w)),n.copy(a).addScaledVector(lm,h);const x=1/(S+b+y);return d=b*x,h=y*x,n.copy(r).addScaledVector(zs,d).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Wu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Nt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Nt.workingColorSpace){if(e=W_(e,1),n=St(n,0,1),r=St(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Wu(d,c,e+1/3),this.g=Wu(d,c,e),this.b=Wu(d,c,e-1/3)}return Nt.toWorkingColorSpace(this,a),this}setStyle(e,n=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],h=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const r=R0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Nt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(St(Tn.r*255,0,255))*65536+Math.round(St(Tn.g*255,0,255))*256+Math.round(St(Tn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Tn.copy(this),n);const r=Tn.r,a=Tn.g,c=Tn.b,d=Math.max(r,a,c),h=Math.min(r,a,c);let p,g;const v=(h+d)/2;if(h===d)p=0,g=0;else{const _=d-h;switch(g=v<=.5?_/(d+h):_/(2-d-h),d){case r:p=(a-c)/_+(a<c?6:0);break;case a:p=(c-r)/_+2;break;case c:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=g,e.l=v,e}getRGB(e,n=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=oi){Nt.fromWorkingColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,a=Tn.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+n,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Tr),e.getHSL(fl);const r=Cu(Tr.h,fl.h,n),a=Cu(Tr.s,fl.s,n),c=Cu(Tr.l,fl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new xt;xt.NAMES=R0;let cy=0;class cs extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Ys,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==Pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ad&&(r.blendSrc=this.blendSrc),this.blendDst!==ld&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lf extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Y,hl=new At;let uy=0;class wi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Yp,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),r=kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),r=kn(r,this.array),a=kn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),r=kn(r,this.array),a=kn(a,this.array),c=kn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yp&&(e.usage=this.usage),e}}class N0 extends wi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class P0 extends wi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jn extends wi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let dy=0;const si=new Bt,Xu=new fn,Vs=new Y,$n=new ea,Go=new ea,dn=new Y;class Yn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?P0:N0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ft().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,n,r){return si.makeTranslation(e,n,r),this.applyMatrix4(si),this}scale(e,n,r){return si.makeScale(e,n,r),this.applyMatrix4(si),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const c=e[a];n.setXYZ(a,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const h=n[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors($n.min,Go.min),$n.expandByPoint(dn),dn.addVectors($n.max,Go.max),$n.expandByPoint(dn)):($n.expandByPoint(Go.min),$n.expandByPoint(Go.max))}$n.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)dn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(dn));if(n)for(let c=0,d=n.length;c<d;c++){const h=n[c],p=this.morphTargetsRelative;for(let g=0,v=h.count;g<v;g++)dn.fromBufferAttribute(h,g),p&&(Vs.fromBufferAttribute(e,g),dn.add(Vs)),a=Math.max(a,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let z=0;z<r.count;z++)h[z]=new Y,p[z]=new Y;const g=new Y,v=new Y,_=new Y,y=new At,M=new At,w=new At,b=new Y,S=new Y;function x(z,C,A){g.fromBufferAttribute(r,z),v.fromBufferAttribute(r,C),_.fromBufferAttribute(r,A),y.fromBufferAttribute(c,z),M.fromBufferAttribute(c,C),w.fromBufferAttribute(c,A),v.sub(g),_.sub(g),M.sub(y),w.sub(y);const k=1/(M.x*w.y-w.x*M.y);isFinite(k)&&(b.copy(v).multiplyScalar(w.y).addScaledVector(_,-M.y).multiplyScalar(k),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(k),h[z].add(b),h[C].add(b),h[A].add(b),p[z].add(S),p[C].add(S),p[A].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let z=0,C=U.length;z<C;++z){const A=U[z],k=A.start,K=A.count;for(let q=k,oe=k+K;q<oe;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new Y,N=new Y,H=new Y,L=new Y;function F(z){H.fromBufferAttribute(a,z),L.copy(H);const C=h[z];P.copy(C),P.sub(H.multiplyScalar(H.dot(C))).normalize(),N.crossVectors(L,C);const k=N.dot(p[z])<0?-1:1;d.setXYZW(z,P.x,P.y,P.z,k)}for(let z=0,C=U.length;z<C;++z){const A=U[z],k=A.start,K=A.count;for(let q=k,oe=k+K;q<oe;q+=3)F(e.getX(q+0)),F(e.getX(q+1)),F(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new Y,c=new Y,d=new Y,h=new Y,p=new Y,g=new Y,v=new Y,_=new Y;if(e)for(let y=0,M=e.count;y<M;y+=3){const w=e.getX(y+0),b=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,S),v.subVectors(d,c),_.subVectors(a,c),v.cross(_),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.add(v),p.add(v),g.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let y=0,M=n.count;y<M;y+=3)a.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),d.fromBufferAttribute(n,y+2),v.subVectors(d,c),_.subVectors(a,c),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)dn.fromBufferAttribute(e,n),dn.normalize(),e.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function e(h,p){const g=h.array,v=h.itemSize,_=h.normalized,y=new g.constructor(p.length*v);let M=0,w=0;for(let b=0,S=p.length;b<S;b++){h.isInterleavedBufferAttribute?M=p[b]*h.data.stride+h.offset:M=p[b]*v;for(let x=0;x<v;x++)y[w++]=g[M++]}return new wi(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,r=this.index.array,a=this.attributes;for(const h in a){const p=a[h],g=e(p,r);n.setAttribute(h,g)}const c=this.morphAttributes;for(const h in c){const p=[],g=c[h];for(let v=0,_=g.length;v<_;v++){const y=g[v],M=e(y,r);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const g=d[h];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let _=0,y=g.length;_<y;_++){const M=g[_];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const g in a){const v=a[g];this.setAttribute(g,v.clone(n))}const c=e.morphAttributes;for(const g in c){const v=[],_=c[g];for(let y=0,M=_.length;y<M;y++)v.push(_[y].clone(n));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let g=0,v=d.length;g<v;g++){const _=d[g];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Bt,Yr=new af,pl=new ta,um=new Y,ml=new Y,gl=new Y,xl=new Y,$u=new Y,vl=new Y,dm=new Y,_l=new Y;class Wt extends fn{constructor(e=new Yn,n=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(c&&h){vl.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const v=h[p],_=c[p];v!==0&&($u.fromBufferAttribute(_,e),d?vl.addScaledVector($u,v):vl.addScaledVector($u.sub(n),v))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(pl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(pl,um)===null||Yr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,g=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,y=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,b=y.length;w<b;w++){const S=y[w],x=d[S.materialIndex],U=Math.max(S.start,M.start),P=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=U,H=P;N<H;N+=3){const L=h.getX(N),F=h.getX(N+1),z=h.getX(N+2);a=yl(this,x,e,r,g,v,_,L,F,z),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let S=w,x=b;S<x;S+=3){const U=h.getX(S),P=h.getX(S+1),N=h.getX(S+2);a=yl(this,d,e,r,g,v,_,U,P,N),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,b=y.length;w<b;w++){const S=y[w],x=d[S.materialIndex],U=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let N=U,H=P;N<H;N+=3){const L=N,F=N+1,z=N+2;a=yl(this,x,e,r,g,v,_,L,F,z),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let S=w,x=b;S<x;S+=3){const U=S,P=S+1,N=S+2;a=yl(this,d,e,r,g,v,_,U,P,N),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function fy(s,e,n,r,a,c,d,h){let p;if(e.side===Bn?p=r.intersectTriangle(d,c,a,!0,h):p=r.intersectTriangle(a,c,d,e.side===Pr,h),p===null)return null;_l.copy(h),_l.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(_l);return g<n.near||g>n.far?null:{distance:g,point:_l.clone(),object:s}}function yl(s,e,n,r,a,c,d,h,p,g){s.getVertexPosition(h,ml),s.getVertexPosition(p,gl),s.getVertexPosition(g,xl);const v=fy(s,e,n,r,ml,gl,xl,dm);if(v){const _=new Y;Si.getBarycoord(dm,ml,gl,xl,_),a&&(v.uv=Si.getInterpolatedAttribute(a,h,p,g,_,new At)),c&&(v.uv1=Si.getInterpolatedAttribute(c,h,p,g,_,new At)),d&&(v.normal=Si.getInterpolatedAttribute(d,h,p,g,_,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:p,c:g,normal:new Y,materialIndex:0};Si.getNormal(ml,gl,xl,y.normal),v.face=y,v.barycoord=_}return v}class ls extends Yn{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const h=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],g=[],v=[],_=[];let y=0,M=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(v,3)),this.setAttribute("uv",new jn(_,2));function w(b,S,x,U,P,N,H,L,F,z,C){const A=N/F,k=H/z,K=N/2,q=H/2,oe=L/2,ce=F+1,J=z+1;let de=0,B=0;const ue=new Y;for(let le=0;le<J;le++){const O=le*k-q;for(let se=0;se<ce;se++){const Ie=se*A-K;ue[b]=Ie*U,ue[S]=O*P,ue[x]=oe,g.push(ue.x,ue.y,ue.z),ue[b]=0,ue[S]=0,ue[x]=L>0?1:-1,v.push(ue.x,ue.y,ue.z),_.push(se/F),_.push(1-le/z),de+=1}}for(let le=0;le<z;le++)for(let O=0;O<F;O++){const se=y+O+ce*le,Ie=y+O+ce*(le+1),ee=y+(O+1)+ce*(le+1),fe=y+(O+1)+ce*le;p.push(se,Ie,fe),p.push(Ie,ee,fe),B+=6}h.addGroup(M,B,C),M+=B,y+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Nn(s){const e={};for(let n=0;n<s.length;n++){const r=ro(s[n]);for(const a in r)e[a]=r[a]}return e}function hy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function D0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const py={clone:ro,merge:Nn};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class L0 extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new Y,fm=new At,hm=new At;class qn extends L0{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,fm,hm),n.subVectors(hm,fm)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,g=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/g,a*=d.width/p,r*=d.height/g}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Gs=1;class xy extends fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Hs,Gs,e,n);a.layers=this.layers,this.add(a);const c=new qn(Hs,Gs,e,n);c.layers=this.layers,this.add(c);const d=new qn(Hs,Gs,e,n);d.layers=this.layers,this.add(d);const h=new qn(Hs,Gs,e,n);h.layers=this.layers,this.add(h);const p=new qn(Hs,Gs,e,n);p.layers=this.layers,this.add(p);const g=new qn(Hs,Gs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,h,p]=n;for(const g of n)this.remove(g);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,g,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,h),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,y,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class I0 extends zn{constructor(e,n,r,a,c,d,h,p,g,v){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,r,a,c,d,h,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vy extends as{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new I0(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ls(5,5,5),c=new Dr({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Rr});c.uniforms.tEquirect.value=n;const d=new Wt(a,c),h=n.minFilter;return n.minFilter===ss&&(n.minFilter=Ii),new xy(1,10,this).update(e,d),n.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}class $s extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const h=this._targetRay,p=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){d=!0;for(const b of e.hand.values()){const S=n.getJointPose(b,r),x=this._getHandJoint(g,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],y=v.position.distanceTo(_.position),M=.02,w=.005;g.inputState.pinching&&y>M+w?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=M-w&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new $s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class cf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new cf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yy extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yu=new Y,Sy=new Y,My=new ft;class Jr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Yu.subVectors(r,n).cross(Sy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||My.getNormalMatrix(e),a=this.coplanarPoint(Yu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ta,Sl=new Y;class uf{constructor(e=new Jr,n=new Jr,r=new Jr,a=new Jr,c=new Jr,d=new Jr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(a),h[4].copy(c),h[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ji){const r=this.planes,a=e.elements,c=a[0],d=a[1],h=a[2],p=a[3],g=a[4],v=a[5],_=a[6],y=a[7],M=a[8],w=a[9],b=a[10],S=a[11],x=a[12],U=a[13],P=a[14],N=a[15];if(r[0].setComponents(p-c,y-g,S-M,N-x).normalize(),r[1].setComponents(p+c,y+g,S+M,N+x).normalize(),r[2].setComponents(p+d,y+v,S+w,N+U).normalize(),r[3].setComponents(p-d,y-v,S-w,N-U).normalize(),r[4].setComponents(p-h,y-_,S-b,N-P).normalize(),n===Ji)r[5].setComponents(p+h,y+_,S+b,N+P).normalize();else if(n===Ol)r[5].setComponents(h,_,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Sl.x=a.normal.x>0?e.max.x:e.min.x,Sl.y=a.normal.y>0?e.max.y:e.min.y,Sl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U0 extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bl=new Y,zl=new Y,pm=new Bt,Wo=new af,Ml=new ta,Ku=new Y,mm=new Y;class Ey extends fn{constructor(e=new Yn,n=new U0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,c=n.count;a<c;a++)Bl.fromBufferAttribute(n,a-1),zl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Bl.distanceTo(zl);e.setAttribute("lineDistance",new jn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(a),Ml.radius+=c,e.ray.intersectsSphere(Ml)===!1)return;pm.copy(a).invert(),Wo.copy(e.ray).applyMatrix4(pm);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,g=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let b=M,S=w-1;b<S;b+=g){const x=v.getX(b),U=v.getX(b+1),P=El(this,e,Wo,p,x,U,b);P&&n.push(P)}if(this.isLineLoop){const b=v.getX(w-1),S=v.getX(M),x=El(this,e,Wo,p,b,S,w-1);x&&n.push(x)}}else{const M=Math.max(0,d.start),w=Math.min(y.count,d.start+d.count);for(let b=M,S=w-1;b<S;b+=g){const x=El(this,e,Wo,p,b,b+1,b);x&&n.push(x)}if(this.isLineLoop){const b=El(this,e,Wo,p,w-1,M,w-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function El(s,e,n,r,a,c,d){const h=s.geometry.attributes.position;if(Bl.fromBufferAttribute(h,a),zl.fromBufferAttribute(h,c),n.distanceSqToSegment(Bl,zl,Ku,mm)>r)return;Ku.applyMatrix4(s.matrixWorld);const g=e.ray.origin.distanceTo(Ku);if(!(g<e.near||g>e.far))return{distance:g,point:mm.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}class F0 extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gm=new Bt,$d=new af,wl=new ta,bl=new Y;class wy extends fn{constructor(e=new Yn,n=new F0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(a),wl.radius+=c,e.ray.intersectsSphere(wl)===!1)return;gm.copy(a).invert(),$d.copy(e.ray).applyMatrix4(gm);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,g=r.index,_=r.attributes.position;if(g!==null){const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let w=y,b=M;w<b;w++){const S=g.getX(w);bl.fromBufferAttribute(_,S),xm(bl,S,p,a,e,n,this)}}else{const y=Math.max(0,d.start),M=Math.min(_.count,d.start+d.count);for(let w=y,b=M;w<b;w++)bl.fromBufferAttribute(_,w),xm(bl,w,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function xm(s,e,n,r,a,c,d){const h=$d.distanceSqToPoint(s);if(h<n){const p=new Y;$d.closestPointToPoint(s,p),p.applyMatrix4(r);const g=a.ray.origin.distanceTo(p);if(g<a.near||g>a.far)return;c.push({distance:g,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class O0 extends zn{constructor(e,n,r,a,c,d,h,p,g,v=Ks){if(v!==Ks&&v!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ks&&(r=os),r===void 0&&v===no&&(r=to),super(null,a,c,d,h,p,v,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=h!==void 0?h:Ei,this.minFilter=p!==void 0?p:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Di extends Yn{constructor(e=1,n=1,r=1,a=32,c=1,d=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:p};const g=this;a=Math.floor(a),c=Math.floor(c);const v=[],_=[],y=[],M=[];let w=0;const b=[],S=r/2;let x=0;U(),d===!1&&(e>0&&P(!0),n>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(y,3)),this.setAttribute("uv",new jn(M,2));function U(){const N=new Y,H=new Y;let L=0;const F=(n-e)/r;for(let z=0;z<=c;z++){const C=[],A=z/c,k=A*(n-e)+e;for(let K=0;K<=a;K++){const q=K/a,oe=q*p+h,ce=Math.sin(oe),J=Math.cos(oe);H.x=k*ce,H.y=-A*r+S,H.z=k*J,_.push(H.x,H.y,H.z),N.set(ce,F,J).normalize(),y.push(N.x,N.y,N.z),M.push(q,1-A),C.push(w++)}b.push(C)}for(let z=0;z<a;z++)for(let C=0;C<c;C++){const A=b[C][z],k=b[C+1][z],K=b[C+1][z+1],q=b[C][z+1];(e>0||C!==0)&&(v.push(A,k,q),L+=3),(n>0||C!==c-1)&&(v.push(k,K,q),L+=3)}g.addGroup(x,L,0),x+=L}function P(N){const H=w,L=new At,F=new Y;let z=0;const C=N===!0?e:n,A=N===!0?1:-1;for(let K=1;K<=a;K++)_.push(0,S*A,0),y.push(0,A,0),M.push(.5,.5),w++;const k=w;for(let K=0;K<=a;K++){const oe=K/a*p+h,ce=Math.cos(oe),J=Math.sin(oe);F.x=C*J,F.y=S*A,F.z=C*ce,_.push(F.x,F.y,F.z),y.push(0,A,0),L.x=ce*.5+.5,L.y=J*.5*A+.5,M.push(L.x,L.y),w++}for(let K=0;K<a;K++){const q=H+K,oe=k+K;N===!0?v.push(oe,oe+1,q):v.push(oe+1,oe,q),z+=3}g.addGroup(x,z,N===!0?1:2),x+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hl extends Yn{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,h=Math.floor(r),p=Math.floor(a),g=h+1,v=p+1,_=e/h,y=n/p,M=[],w=[],b=[],S=[];for(let x=0;x<v;x++){const U=x*y-d;for(let P=0;P<g;P++){const N=P*_-c;w.push(N,-U,0),b.push(0,0,1),S.push(P/h),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<h;U++){const P=U+g*x,N=U+g*(x+1),H=U+1+g*(x+1),L=U+1+g*x;M.push(P,N,L),M.push(N,H,L)}this.setIndex(M),this.setAttribute("position",new jn(w,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class df extends Yn{constructor(e=1,n=32,r=16,a=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:c,thetaStart:d,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(d+h,Math.PI);let g=0;const v=[],_=new Y,y=new Y,M=[],w=[],b=[],S=[];for(let x=0;x<=r;x++){const U=[],P=x/r;let N=0;x===0&&d===0?N=.5/n:x===r&&p===Math.PI&&(N=-.5/n);for(let H=0;H<=n;H++){const L=H/n;_.x=-e*Math.cos(a+L*c)*Math.sin(d+P*h),_.y=e*Math.cos(d+P*h),_.z=e*Math.sin(a+L*c)*Math.sin(d+P*h),w.push(_.x,_.y,_.z),y.copy(_).normalize(),b.push(y.x,y.y,y.z),S.push(L+N,1-P),U.push(g++)}v.push(U)}for(let x=0;x<r;x++)for(let U=0;U<n;U++){const P=v[x][U+1],N=v[x][U],H=v[x+1][U],L=v[x+1][U+1];(x!==0||d>0)&&M.push(P,N,L),(x!==r-1||p<Math.PI)&&M.push(N,H,L)}this.setIndex(M),this.setAttribute("position",new jn(w,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _i extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=E0,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class by extends _i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ty extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cy extends U0{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class ff extends fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zu=new Bt,vm=new Y,_m=new Y;class k0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uf,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;vm.setFromMatrixPosition(e.matrixWorld),n.position.copy(vm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ym=new Bt,Xo=new Y,Qu=new Y;class Ry extends k0{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Xo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Xo),Qu.copy(r.position),Qu.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Qu),r.updateMatrixWorld(),a.makeTranslation(-Xo.x,-Xo.y,-Xo.z),ym.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ym)}}class Sm extends ff{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Ry}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class B0 extends L0{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,d=c+g*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ny extends k0{constructor(){super(new B0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends ff{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Ny}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Py extends ff{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dy extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Ly{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Em();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Em(){return performance.now()}function wm(s,e,n,r){const a=Iy(r);switch(n){case g0:return s*e;case v0:return s*e;case _0:return s*e*2;case y0:return s*e/a.components*a.byteLength;case rf:return s*e/a.components*a.byteLength;case S0:return s*e*2/a.components*a.byteLength;case sf:return s*e*2/a.components*a.byteLength;case x0:return s*e*3/a.components*a.byteLength;case Mi:return s*e*4/a.components*a.byteLength;case of:return s*e*4/a.components*a.byteLength;case Nl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sd:case Ed:return Math.max(s,16)*Math.max(e,8)/4;case yd:case Md:return Math.max(s,8)*Math.max(e,8)/2;case wd:case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case jd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case M0:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Iy(s){switch(s){case tr:case h0:return{byteLength:1,components:1};case Yo:case p0:case Zo:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case os:case ef:case Qi:return{byteLength:4,components:1};case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function z0(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Uy(s){const e=new WeakMap;function n(h,p){const g=h.array,v=h.usage,_=g.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,g,v),h.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,g){const v=p.array,_=p.updateRanges;if(s.bindBuffer(g,h),_.length===0)s.bufferSubData(g,0,v);else{_.sort((M,w)=>M.start-w.start);let y=0;for(let M=1;M<_.length;M++){const w=_[y],b=_[M];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++y,_[y]=b)}_.length=y+1;for(let M=0,w=_.length;M<w;M++){const b=_[M];s.bufferSubData(g,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=e.get(h);if(g===void 0)e.set(h,n(h,p));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,h,p),g.version=h.version}}return{get:a,remove:c,update:d}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,s1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,C1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ES=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const US=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Fy,alphahash_pars_fragment:Oy,alphamap_fragment:ky,alphamap_pars_fragment:By,alphatest_fragment:zy,alphatest_pars_fragment:jy,aomap_fragment:Vy,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Wy,begin_vertex:Xy,beginnormal_vertex:$y,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:r1,common:s1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:a1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:d1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:C1,envmap_vertex:v1,fog_vertex:_1,fog_pars_vertex:y1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:w1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:T1,lights_pars_begin:A1,lights_toon_fragment:R1,lights_toon_pars_fragment:N1,lights_phong_fragment:P1,lights_phong_pars_fragment:D1,lights_physical_fragment:L1,lights_physical_pars_fragment:I1,lights_fragment_begin:U1,lights_fragment_maps:F1,lights_fragment_end:O1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:j1,map_fragment:V1,map_pars_fragment:H1,map_particle_fragment:G1,map_particle_pars_fragment:W1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:$1,morphinstance_vertex:q1,morphcolor_vertex:Y1,morphnormal_vertex:K1,morphtarget_pars_vertex:Z1,morphtarget_vertex:Q1,normal_fragment_begin:J1,normal_fragment_maps:eS,normal_pars_fragment:tS,normal_pars_vertex:nS,normal_vertex:iS,normalmap_pars_fragment:rS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:oS,clearcoat_pars_fragment:aS,iridescence_pars_fragment:lS,opaque_fragment:cS,packing:uS,premultiplied_alpha_fragment:dS,project_vertex:fS,dithering_fragment:hS,dithering_pars_fragment:pS,roughnessmap_fragment:mS,roughnessmap_pars_fragment:gS,shadowmap_pars_fragment:xS,shadowmap_pars_vertex:vS,shadowmap_vertex:_S,shadowmask_pars_fragment:yS,skinbase_vertex:SS,skinning_pars_vertex:MS,skinning_vertex:ES,skinnormal_vertex:wS,specularmap_fragment:bS,specularmap_pars_fragment:TS,tonemapping_fragment:AS,tonemapping_pars_fragment:CS,transmission_fragment:RS,transmission_pars_fragment:NS,uv_pars_fragment:PS,uv_pars_vertex:DS,uv_vertex:LS,worldpos_vertex:IS,background_vert:US,background_frag:FS,backgroundCube_vert:OS,backgroundCube_frag:kS,cube_vert:BS,cube_frag:zS,depth_vert:jS,depth_frag:VS,distanceRGBA_vert:HS,distanceRGBA_frag:GS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:$S,linedashed_frag:qS,meshbasic_vert:YS,meshbasic_frag:KS,meshlambert_vert:ZS,meshlambert_frag:QS,meshmatcap_vert:JS,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:dM,shadow_frag:fM,sprite_vert:hM,sprite_frag:pM},Le={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Nn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Nn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new xt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Nn([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Nn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Nn([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Nn([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Nn([Le.common,Le.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Nn([Le.lights,Le.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Tl={r:0,b:0,g:0},Zr=new Ui,mM=new Bt;function gM(s,e,n,r,a,c,d){const h=new xt(0);let p=c===!0?0:1,g,v,_=null,y=0,M=null;function w(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?n:e).get(N)),N}function b(P){let N=!1;const H=w(P);H===null?x(h,p):H&&H.isColor&&(x(H,1),N=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,N){const H=w(N);H&&(H.isCubeTexture||H.mapping===Vl)?(v===void 0&&(v=new Wt(new ls(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:ro(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(L,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Zr.copy(N.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(Zr)),v.material.toneMapped=Nt.getTransfer(H.colorSpace)!==Lt,(_!==H||y!==H.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=H,y=H.version,M=s.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(g===void 0&&(g=new Wt(new Hl(2,2),new Dr({name:"BackgroundMaterial",uniforms:ro(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=H,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.toneMapped=Nt.getTransfer(H.colorSpace)!==Lt,H.matrixAutoUpdate===!0&&H.updateMatrix(),g.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||y!==H.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,_=H,y=H.version,M=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function x(P,N){P.getRGB(Tl,D0(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,N,d)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,N=1){h.set(P),p=N,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,x(h,p)},render:b,addToRenderList:S,dispose:U}}function xM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let c=a,d=!1;function h(A,k,K,q,oe){let ce=!1;const J=_(q,K,k);c!==J&&(c=J,g(c.object)),ce=M(A,q,K,oe),ce&&w(A,q,K,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,N(A,k,K,q),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function g(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function _(A,k,K){const q=K.wireframe===!0;let oe=r[A.id];oe===void 0&&(oe={},r[A.id]=oe);let ce=oe[k.id];ce===void 0&&(ce={},oe[k.id]=ce);let J=ce[q];return J===void 0&&(J=y(p()),ce[q]=J),J}function y(A){const k=[],K=[],q=[];for(let oe=0;oe<n;oe++)k[oe]=0,K[oe]=0,q[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:q,object:A,attributes:{},index:null}}function M(A,k,K,q){const oe=c.attributes,ce=k.attributes;let J=0;const de=K.getAttributes();for(const B in de)if(de[B].location>=0){const le=oe[B];let O=ce[B];if(O===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),le===void 0||le.attribute!==O||O&&le.data!==O.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function w(A,k,K,q){const oe={},ce=k.attributes;let J=0;const de=K.getAttributes();for(const B in de)if(de[B].location>=0){let le=ce[B];le===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const O={};O.attribute=le,le&&le.data&&(O.data=le.data),oe[B]=O,J++}c.attributes=oe,c.attributesNum=J,c.index=q}function b(){const A=c.newAttributes;for(let k=0,K=A.length;k<K;k++)A[k]=0}function S(A){x(A,0)}function x(A,k){const K=c.newAttributes,q=c.enabledAttributes,oe=c.attributeDivisors;K[A]=1,q[A]===0&&(s.enableVertexAttribArray(A),q[A]=1),oe[A]!==k&&(s.vertexAttribDivisor(A,k),oe[A]=k)}function U(){const A=c.newAttributes,k=c.enabledAttributes;for(let K=0,q=k.length;K<q;K++)k[K]!==A[K]&&(s.disableVertexAttribArray(K),k[K]=0)}function P(A,k,K,q,oe,ce,J){J===!0?s.vertexAttribIPointer(A,k,K,oe,ce):s.vertexAttribPointer(A,k,K,q,oe,ce)}function N(A,k,K,q){b();const oe=q.attributes,ce=K.getAttributes(),J=k.defaultAttributeValues;for(const de in ce){const B=ce[de];if(B.location>=0){let ue=oe[de];if(ue===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){const le=ue.normalized,O=ue.itemSize,se=e.get(ue);if(se===void 0)continue;const Ie=se.buffer,ee=se.type,fe=se.bytesPerElement,Me=ee===s.INT||ee===s.UNSIGNED_INT||ue.gpuType===ef;if(ue.isInterleavedBufferAttribute){const xe=ue.data,ge=xe.stride,Ae=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let ye=0;ye<B.locationSize;ye++)x(B.location+ye,xe.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ye=0;ye<B.locationSize;ye++)S(B.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ye=0;ye<B.locationSize;ye++)P(B.location+ye,O/B.locationSize,ee,le,ge*fe,(Ae+O/B.locationSize*ye)*fe,Me)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe,ue.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<B.locationSize;xe++)P(B.location+xe,O/B.locationSize,ee,le,O*fe,O/B.locationSize*xe*fe,Me)}}else if(J!==void 0){const le=J[de];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(B.location,le);break;case 3:s.vertexAttrib3fv(B.location,le);break;case 4:s.vertexAttrib4fv(B.location,le);break;default:s.vertexAttrib1fv(B.location,le)}}}}U()}function H(){z();for(const A in r){const k=r[A];for(const K in k){const q=k[K];for(const oe in q)v(q[oe].object),delete q[oe];delete k[K]}delete r[A]}}function L(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const K in k){const q=k[K];for(const oe in q)v(q[oe].object),delete q[oe];delete k[K]}delete r[A.id]}function F(A){for(const k in r){const K=r[k];if(K[A.id]===void 0)continue;const q=K[A.id];for(const oe in q)v(q[oe].object),delete q[oe];delete K[A.id]}}function z(){C(),d=!0,c!==a&&(c=a,g(c.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:z,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:S,disableUnusedAttributes:U}}function vM(s,e,n){let r;function a(g){r=g}function c(g,v){s.drawArrays(r,g,v),n.update(v,r,1)}function d(g,v,_){_!==0&&(s.drawArraysInstanced(r,g,v,_),n.update(v,r,_))}function h(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,_);let M=0;for(let w=0;w<_;w++)M+=v[w];n.update(M,r,1)}function p(g,v,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<g.length;w++)d(g[w],v[w],y[w]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,v,0,y,0,_);let w=0;for(let b=0;b<_;b++)w+=v[b]*y[b];n.update(w,r,1)}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function _M(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(F){return!(F!==Mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const z=F===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==tr&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Qi&&!z)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const _=n.logarithmicDepthBuffer===!0,y=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=w>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:H,maxSamples:L}}function yM(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Jr,h=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||a;return a=y,r=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=v(_,y,0)},this.setState=function(_,y,M){const w=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!a||w===null||w.length===0||c&&!S)c?v(null):g();else{const U=c?0:r,P=U*4;let N=x.clippingState||null;p.value=N,N=v(w,y,P,M);for(let H=0;H!==P;++H)N[H]=n[H];x.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function g(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,M,w){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=p.value,w!==!0||S===null){const x=M+b*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,N=M;P!==b;++P,N+=4)d.copy(_[P]).applyMatrix4(U,h),d.normal.toArray(S,N),S[N+3]=d.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function SM(s){let e=new WeakMap;function n(d,h){return h===gd?d.mapping=Js:h===xd&&(d.mapping=eo),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===gd||h===xd)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const g=new vy(p.height);return g.fromEquirectangularTexture(s,d),e.set(d,g),d.addEventListener("dispose",a),n(g.texture,d.mapping)}else return null}}return d}function a(d){const h=d.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const qs=4,bm=[.125,.215,.35,.446,.526,.582],ns=20,Ju=new B0,Tm=new xt;let ed=null,td=0,nd=0,id=!1;const es=(1+Math.sqrt(5))/2,Ws=1/es,Am=[new Y(-es,Ws,0),new Y(es,Ws,0),new Y(-Ws,0,es),new Y(Ws,0,es),new Y(0,es,-Ws),new Y(0,es,Ws),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Zo,format:Mi,colorSpace:io,depthBuffer:!1},a=Rm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(c)),this._blurMaterial=EM(c,e,n)}return a}_compileMaterial(e){const n=new Wt(this._lodPlanes[0],e);this._renderer.compile(n,Ju)}_sceneToCubeUV(e,n,r,a){const h=new qn(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Tm),v.toneMapping=Nr,v.autoClear=!1;const M=new lf({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),w=new Wt(new ls,M);let b=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,b=!0):(M.color.copy(Tm),b=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(h.up.set(0,p[x],0),h.lookAt(g[x],0,0)):U===1?(h.up.set(0,0,p[x]),h.lookAt(0,g[x],0)):(h.up.set(0,p[x],0),h.lookAt(0,0,g[x]));const P=this._cubeSize;Al(a,U*P,x>2?P:0,P,P),v.setRenderTarget(a),b&&v.render(w,h),v.render(e,h)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=y,v.autoClear=_,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Js||e.mapping===eo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new Wt(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Al(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Ju)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Am[(a-c-1)%Am.length];this._blur(e,c-1,c,d,h)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,h){const p=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Wt(this._lodPlanes[a],g),y=g.uniforms,M=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ns-1),b=c/w,S=isFinite(c)?1+Math.floor(v*b):ns;S>ns&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ns}`);const x=[];let U=0;for(let F=0;F<ns;++F){const z=F/b,C=Math.exp(-z*z/2);x.push(C),F===0?U+=C:F<S&&(U+=2*C)}for(let F=0;F<x.length;F++)x[F]=x[F]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:P}=this;y.dTheta.value=w,y.mipInt.value=P-r;const N=this._sizeLods[a],H=3*N*(a>P-qs?a-P+qs:0),L=4*(this._cubeSize-N);Al(n,H,L,3*N,2*N),p.setRenderTarget(n),p.render(_,Ju)}}function MM(s){const e=[],n=[],r=[];let a=s;const c=s-qs+1+bm.length;for(let d=0;d<c;d++){const h=Math.pow(2,a);n.push(h);let p=1/h;d>s-qs?p=bm[d-s+qs-1]:d===0&&(p=0),r.push(p);const g=1/(h-2),v=-g,_=1+g,y=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,w=6,b=3,S=2,x=1,U=new Float32Array(b*w*M),P=new Float32Array(S*w*M),N=new Float32Array(x*w*M);for(let L=0;L<M;L++){const F=L%3*2/3-1,z=L>2?0:-1,C=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];U.set(C,b*w*L),P.set(y,S*w*L);const A=[L,L,L,L,L,L];N.set(A,x*w*L)}const H=new Yn;H.setAttribute("position",new wi(U,b)),H.setAttribute("uv",new wi(P,S)),H.setAttribute("faceIndex",new wi(N,x)),e.push(H),a>qs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Rm(s,e,n){const r=new as(s,e,n);return r.texture.mapping=Vl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Al(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function EM(s,e,n){const r=new Float32Array(ns),a=new Y(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Nm(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Pm(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wM(s){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,g=p===gd||p===xd,v=p===Js||p===eo;if(g||v){let _=e.get(h);const y=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return n===null&&(n=new Cm(s)),_=g?n.fromEquirectangular(h,_):n.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const M=h.image;return g&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new Cm(s)),_=g?n.fromEquirectangular(h):n.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function a(h){let p=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function bM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Xs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function TM(s,e,n,r){const a={},c=new WeakMap;function d(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const w in y.attributes)e.remove(y.attributes[w]);y.removeEventListener("dispose",d),delete a[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function h(_,y){return a[y.id]===!0||(y.addEventListener("dispose",d),a[y.id]=!0,n.memory.geometries++),y}function p(_){const y=_.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function g(_){const y=[],M=_.index,w=_.attributes.position;let b=0;if(M!==null){const U=M.array;b=M.version;for(let P=0,N=U.length;P<N;P+=3){const H=U[P+0],L=U[P+1],F=U[P+2];y.push(H,L,L,F,F,H)}}else if(w!==void 0){const U=w.array;b=w.version;for(let P=0,N=U.length/3-1;P<N;P+=3){const H=P+0,L=P+1,F=P+2;y.push(H,L,L,F,F,H)}}else return;const S=new(b0(y)?P0:N0)(y,1);S.version=b;const x=c.get(_);x&&e.remove(x),c.set(_,S)}function v(_){const y=c.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&g(_)}else g(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function AM(s,e,n){let r;function a(y){r=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function p(y,M){s.drawElements(r,M,c,y*d),n.update(M,r,1)}function g(y,M,w){w!==0&&(s.drawElementsInstanced(r,M,c,y*d,w),n.update(M,r,w))}function v(y,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,w);let S=0;for(let x=0;x<w;x++)S+=M[x];n.update(S,r,1)}function _(y,M,w,b){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)g(y[x]/d,M[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,b,0,w);let x=0;for(let U=0;U<w;U++)x+=M[U]*b[U];n.update(x,r,1)}}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function CM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function RM(s,e,n){const r=new WeakMap,a=new It;function c(d,h,p){const g=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(h);if(y===void 0||y.count!==_){let A=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var M=A;y!==void 0&&y.texture.dispose();const w=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let N=0;w===!0&&(N=1),b===!0&&(N=2),S===!0&&(N=3);let H=h.attributes.position.count*N,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*L*4*_),z=new A0(F,H,L,_);z.type=Qi,z.needsUpdate=!0;const C=N*4;for(let k=0;k<_;k++){const K=x[k],q=U[k],oe=P[k],ce=H*L*4*k;for(let J=0;J<K.count;J++){const de=J*C;w===!0&&(a.fromBufferAttribute(K,J),F[ce+de+0]=a.x,F[ce+de+1]=a.y,F[ce+de+2]=a.z,F[ce+de+3]=0),b===!0&&(a.fromBufferAttribute(q,J),F[ce+de+4]=a.x,F[ce+de+5]=a.y,F[ce+de+6]=a.z,F[ce+de+7]=0),S===!0&&(a.fromBufferAttribute(oe,J),F[ce+de+8]=a.x,F[ce+de+9]=a.y,F[ce+de+10]=a.z,F[ce+de+11]=oe.itemSize===4?a.w:1)}}y={count:_,texture:z,size:new At(H,L)},r.set(h,y),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let w=0;for(let S=0;S<g.length;S++)w+=g[S];const b=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",g)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function NM(s,e,n,r){let a=new WeakMap;function c(p){const g=r.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==g&&(e.update(_),a.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),a.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==g&&(y.update(),a.set(y,g))}return _}function d(){a=new WeakMap}function h(p){const g=p.target;g.removeEventListener("dispose",h),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:d}}const j0=new zn,Dm=new O0(1,1),V0=new A0,H0=new ty,G0=new I0,Lm=[],Im=[],Um=new Float32Array(16),Fm=new Float32Array(9),Om=new Float32Array(4);function oo(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=Lm[a];if(c===void 0&&(c=new Float32Array(a),Lm[a]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=n,s[d].toArray(c,h)}return c}function rn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=Im[e];n===void 0&&(n=new Int32Array(e),Im[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function PM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2fv(this.addr,e),sn(n,e)}}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;s.uniform3fv(this.addr,e),sn(n,e)}}function IM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4fv(this.addr,e),sn(n,e)}}function UM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),sn(n,r)}}function FM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Fm.set(r),s.uniformMatrix3fv(this.addr,!1,Fm),sn(n,r)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Um.set(r),s.uniformMatrix4fv(this.addr,!1,Um),sn(n,r)}}function kM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2iv(this.addr,e),sn(n,e)}}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3iv(this.addr,e),sn(n,e)}}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4iv(this.addr,e),sn(n,e)}}function VM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2uiv(this.addr,e),sn(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3uiv(this.addr,e),sn(n,e)}}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4uiv(this.addr,e),sn(n,e)}}function XM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(Dm.compareFunction=w0,c=Dm):c=j0,n.setTexture2D(e||c,a)}function $M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||H0,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||G0,a)}function YM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||V0,a)}function KM(s){switch(s){case 5126:return PM;case 35664:return DM;case 35665:return LM;case 35666:return IM;case 35674:return UM;case 35675:return FM;case 35676:return OM;case 5124:case 35670:return kM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return jM;case 5125:return VM;case 36294:return HM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function ZM(s,e){s.uniform1fv(this.addr,e)}function QM(s,e){const n=oo(e,this.size,2);s.uniform2fv(this.addr,n)}function JM(s,e){const n=oo(e,this.size,3);s.uniform3fv(this.addr,n)}function eE(s,e){const n=oo(e,this.size,4);s.uniform4fv(this.addr,n)}function tE(s,e){const n=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function nE(s,e){const n=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function iE(s,e){const n=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function rE(s,e){s.uniform1iv(this.addr,e)}function sE(s,e){s.uniform2iv(this.addr,e)}function oE(s,e){s.uniform3iv(this.addr,e)}function aE(s,e){s.uniform4iv(this.addr,e)}function lE(s,e){s.uniform1uiv(this.addr,e)}function cE(s,e){s.uniform2uiv(this.addr,e)}function uE(s,e){s.uniform3uiv(this.addr,e)}function dE(s,e){s.uniform4uiv(this.addr,e)}function fE(s,e,n){const r=this.cache,a=e.length,c=Gl(n,a);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||j0,c[d])}function hE(s,e,n){const r=this.cache,a=e.length,c=Gl(n,a);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||H0,c[d])}function pE(s,e,n){const r=this.cache,a=e.length,c=Gl(n,a);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||G0,c[d])}function mE(s,e,n){const r=this.cache,a=e.length,c=Gl(n,a);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||V0,c[d])}function gE(s){switch(s){case 5126:return ZM;case 35664:return QM;case 35665:return JM;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class xE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=KM(n.type)}}class vE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gE(n.type)}}class _E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const h=a[c];h.setValue(e,n[h.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function km(s,e){s.seq.push(e),s.map[e.id]=e}function yE(s,e,n){const r=s.name,a=r.length;for(rd.lastIndex=0;;){const c=rd.exec(r),d=rd.lastIndex;let h=c[1];const p=c[2]==="]",g=c[3];if(p&&(h=h|0),g===void 0||g==="["&&d+2===a){km(n,g===void 0?new xE(h,s,e):new vE(h,s,e));break}else{let _=n.map[h];_===void 0&&(_=new _E(h),km(n,_)),n=_}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);yE(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function Bm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const SE=37297;let ME=0;function EE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${n[d]}`)}return r.join(`
`)}const zm=new ft;function wE(s){Nt._getMatrix(zm,Nt.workingColorSpace,s);const e=`mat3( ${zm.elements.map(n=>n.toFixed(4))} )`;switch(Nt.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+EE(s.getShaderSource(e),d)}else return a}function bE(s,e){const n=wE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TE(s,e){let n;switch(e){case A_:n="Linear";break;case C_:n="Reinhard";break;case R_:n="Cineon";break;case N_:n="ACESFilmic";break;case D_:n="AgX";break;case L_:n="Neutral";break;case P_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new Y;function AE(){Nt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function RE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function NE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return n}function $o(s){return s!==""}function Vm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(s){return s.replace(PE,LE)}const DE=new Map;function LE(s,e){let n=gt[e];if(n===void 0){const r=DE.get(e);if(r!==void 0)n=gt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qd(n)}const IE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(s){return s.replace(IE,UE)}function UE(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===o_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function OE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case eo:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function BE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case d0:e="ENVMAP_BLENDING_MULTIPLY";break;case b_:e="ENVMAP_BLENDING_MIX";break;case T_:e="ENVMAP_BLENDING_ADD";break}return e}function zE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function jE(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,h=n.fragmentShader;const p=FE(n),g=OE(n),v=kE(n),_=BE(n),y=zE(n),M=CE(n),w=RE(c),b=a.createProgram();let S,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter($o).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter($o).join(`
`),x.length>0&&(x+=`
`)):(S=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[Wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?gt.tonemapping_pars_fragment:"",n.toneMapping!==Nr?TE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,bE("linearToOutputTexel",n.outputColorSpace),AE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),d=qd(d),d=Vm(d,n),d=Hm(d,n),h=qd(h),h=Vm(h,n),h=Hm(h,n),d=Gm(d),h=Gm(h),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=U+S+d,N=U+x+h,H=Bm(a,a.VERTEX_SHADER,P),L=Bm(a,a.FRAGMENT_SHADER,N);a.attachShader(b,H),a.attachShader(b,L),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function F(k){if(s.debug.checkShaderErrors){const K=a.getProgramInfoLog(b).trim(),q=a.getShaderInfoLog(H).trim(),oe=a.getShaderInfoLog(L).trim();let ce=!0,J=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,H,L);else{const de=jm(a,H,"vertex"),B=jm(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+de+`
`+B)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||oe==="")&&(J=!1);J&&(k.diagnostics={runnable:ce,programLog:K,vertexShader:{log:q,prefix:S},fragmentShader:{log:oe,prefix:x}})}a.deleteShader(H),a.deleteShader(L),z=new Ul(a,b),C=NE(a,b)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(b,SE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ME++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=L,this}let VE=0;class HE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new GE(e),n.set(e,r)),r}}class GE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function WE(s,e,n,r,a,c,d){const h=new C0,p=new HE,g=new Set,v=[],_=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return g.add(C),C===0?"uv":`uv${C}`}function S(C,A,k,K,q){const oe=K.fog,ce=q.geometry,J=C.isMeshStandardMaterial?K.environment:null,de=(C.isMeshStandardMaterial?n:e).get(C.envMap||J),B=de&&de.mapping===Vl?de.image.height:null,ue=w[C.type];C.precision!==null&&(M=a.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const le=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,O=le!==void 0?le.length:0;let se=0;ce.morphAttributes.position!==void 0&&(se=1),ce.morphAttributes.normal!==void 0&&(se=2),ce.morphAttributes.color!==void 0&&(se=3);let Ie,ee,fe,Me;if(ue){const vt=Li[ue];Ie=vt.vertexShader,ee=vt.fragmentShader}else Ie=C.vertexShader,ee=C.fragmentShader,p.update(C),fe=p.getVertexShaderID(C),Me=p.getFragmentShaderID(C);const xe=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ae=q.isInstancedMesh===!0,ye=q.isBatchedMesh===!0,ht=!!C.map,lt=!!C.matcap,at=!!de,j=!!C.aoMap,hn=!!C.lightMap,pt=!!C.bumpMap,mt=!!C.normalMap,qe=!!C.displacementMap,wt=!!C.emissiveMap,Ve=!!C.metalnessMap,D=!!C.roughnessMap,T=C.anisotropy>0,te=C.clearcoat>0,me=C.dispersion>0,ve=C.iridescence>0,he=C.sheen>0,We=C.transmission>0,Ce=T&&!!C.anisotropyMap,Ue=te&&!!C.clearcoatMap,ut=te&&!!C.clearcoatNormalMap,be=te&&!!C.clearcoatRoughnessMap,ke=ve&&!!C.iridescenceMap,Ze=ve&&!!C.iridescenceThicknessMap,et=he&&!!C.sheenColorMap,Be=he&&!!C.sheenRoughnessMap,dt=!!C.specularMap,it=!!C.specularColorMap,Ct=!!C.specularIntensityMap,W=We&&!!C.transmissionMap,Re=We&&!!C.thicknessMap,ae=!!C.gradientMap,pe=!!C.alphaMap,Ne=C.alphaTest>0,Pe=!!C.alphaHash,st=!!C.extensions;let Dt=Nr;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const zt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:ee,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:ye,batchingColor:ye&&q._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&q.instanceColor!==null,instancingMorph:Ae&&q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:io,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:lt,envMap:at,envMapMode:at&&de.mapping,envMapCubeUVHeight:B,aoMap:j,lightMap:hn,bumpMap:pt,normalMap:mt,displacementMap:y&&qe,emissiveMap:wt,normalMapObjectSpace:mt&&C.normalMapType===O_,normalMapTangentSpace:mt&&C.normalMapType===E0,metalnessMap:Ve,roughnessMap:D,anisotropy:T,anisotropyMap:Ce,clearcoat:te,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:be,dispersion:me,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:Ze,sheen:he,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:dt,specularColorMap:it,specularIntensityMap:Ct,transmission:We,transmissionMap:W,thicknessMap:Re,gradientMap:ae,opaque:C.transparent===!1&&C.blending===Ys&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:Pe,combine:C.combine,mapUv:ht&&b(C.map.channel),aoMapUv:j&&b(C.aoMap.channel),lightMapUv:hn&&b(C.lightMap.channel),bumpMapUv:pt&&b(C.bumpMap.channel),normalMapUv:mt&&b(C.normalMap.channel),displacementMapUv:qe&&b(C.displacementMap.channel),emissiveMapUv:wt&&b(C.emissiveMap.channel),metalnessMapUv:Ve&&b(C.metalnessMap.channel),roughnessMapUv:D&&b(C.roughnessMap.channel),anisotropyMapUv:Ce&&b(C.anisotropyMap.channel),clearcoatMapUv:Ue&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:ut&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:et&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(C.sheenRoughnessMap.channel),specularMapUv:dt&&b(C.specularMap.channel),specularColorMapUv:it&&b(C.specularColorMap.channel),specularIntensityMapUv:Ct&&b(C.specularIntensityMap.channel),transmissionMapUv:W&&b(C.transmissionMap.channel),thicknessMapUv:Re&&b(C.thicknessMap.channel),alphaMapUv:pe&&b(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(mt||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ce.attributes.uv&&(ht||pe),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ge,skinning:q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&Nt.getTransfer(C.map.colorSpace)===Lt,decodeVideoTextureEmissive:wt&&C.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(C.emissiveMap.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yi,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:st&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&C.extensions.multiDraw===!0||ye)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=g.has(1),zt.vertexUv2s=g.has(2),zt.vertexUv3s=g.has(3),g.clear(),zt}function x(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)A.push(k),A.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(U(A,C),P(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function U(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function P(C,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),C.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),C.push(h.mask)}function N(C){const A=w[C.type];let k;if(A){const K=Li[A];k=py.clone(K.uniforms)}else k=C.uniforms;return k}function H(C,A){let k;for(let K=0,q=v.length;K<q;K++){const oe=v[K];if(oe.cacheKey===A){k=oe,++k.usedTimes;break}}return k===void 0&&(k=new jE(s,A,C,c),v.push(k)),k}function L(C){if(--C.usedTimes===0){const A=v.indexOf(C);v[A]=v[v.length-1],v.pop(),C.destroy()}}function F(C){p.remove(C)}function z(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:H,releaseProgram:L,releaseShaderCache:F,programs:v,dispose:z}}function XE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function a(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function $E(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $m(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(_,y,M,w,b,S){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:M,groupOrder:w,renderOrder:_.renderOrder,z:b,group:S},s[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=M,x.groupOrder=w,x.renderOrder=_.renderOrder,x.z=b,x.group=S),e++,x}function h(_,y,M,w,b,S){const x=d(_,y,M,w,b,S);M.transmission>0?r.push(x):M.transparent===!0?a.push(x):n.push(x)}function p(_,y,M,w,b,S){const x=d(_,y,M,w,b,S);M.transmission>0?r.unshift(x):M.transparent===!0?a.unshift(x):n.unshift(x)}function g(_,y){n.length>1&&n.sort(_||$E),r.length>1&&r.sort(y||Xm),a.length>1&&a.sort(y||Xm)}function v(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:h,unshift:p,finish:v,sort:g}}function qE(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new $m,s.set(r,[d])):a>=c.length?(d=new $m,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function YE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new xt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=n,n}}}function KE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let ZE=0;function QE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function JE(s){const e=new YE,n=KE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new Y);const a=new Y,c=new Bt,d=new Bt;function h(g){let v=0,_=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,w=0,b=0,S=0,x=0,U=0,P=0,N=0,H=0,L=0,F=0;g.sort(QE);for(let C=0,A=g.length;C<A;C++){const k=g[C],K=k.color,q=k.intensity,oe=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)v+=K.r*q,_+=K.g*q,y+=K.b*q;else if(k.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(k.sh.coefficients[J],q);F++}else if(k.isDirectionalLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const de=k.shadow,B=n.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,r.directionalShadow[M]=B,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=k.shadow.matrix,U++}r.directional[M]=J,M++}else if(k.isSpotLight){const J=e.get(k);J.position.setFromMatrixPosition(k.matrixWorld),J.color.copy(K).multiplyScalar(q),J.distance=oe,J.coneCos=Math.cos(k.angle),J.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),J.decay=k.decay,r.spot[b]=J;const de=k.shadow;if(k.map&&(r.spotLightMap[H]=k.map,H++,de.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[b]=de.matrix,k.castShadow){const B=n.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,r.spotShadow[b]=B,r.spotShadowMap[b]=ce,N++}b++}else if(k.isRectAreaLight){const J=e.get(k);J.color.copy(K).multiplyScalar(q),J.halfWidth.set(k.width*.5,0,0),J.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=J,S++}else if(k.isPointLight){const J=e.get(k);if(J.color.copy(k.color).multiplyScalar(k.intensity),J.distance=k.distance,J.decay=k.decay,k.castShadow){const de=k.shadow,B=n.get(k);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,B.shadowCameraNear=de.camera.near,B.shadowCameraFar=de.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=k.shadow.matrix,P++}r.point[w]=J,w++}else if(k.isHemisphereLight){const J=e.get(k);J.skyColor.copy(k.color).multiplyScalar(q),J.groundColor.copy(k.groundColor).multiplyScalar(q),r.hemi[x]=J,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==M||z.pointLength!==w||z.spotLength!==b||z.rectAreaLength!==S||z.hemiLength!==x||z.numDirectionalShadows!==U||z.numPointShadows!==P||z.numSpotShadows!==N||z.numSpotMaps!==H||z.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=S,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+H-L,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,z.directionalLength=M,z.pointLength=w,z.spotLength=b,z.rectAreaLength=S,z.hemiLength=x,z.numDirectionalShadows=U,z.numPointShadows=P,z.numSpotShadows=N,z.numSpotMaps=H,z.numLightProbes=F,r.version=ZE++)}function p(g,v){let _=0,y=0,M=0,w=0,b=0;const S=v.matrixWorldInverse;for(let x=0,U=g.length;x<U;x++){const P=g[x];if(P.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(S),_++}else if(P.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(P.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const N=r.hemi[b];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:r}}function qm(s){const e=new JE(s),n=[],r=[];function a(v){g.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function h(){e.setup(n)}function p(v){e.setupView(n,v)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:d}}function ew(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let h;return d===void 0?(h=new qm(s),e.set(a,[h])):c>=d.length?(h=new qm(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iw(s,e,n){let r=new uf;const a=new At,c=new At,d=new It,h=new Ty({depthPacking:F_}),p=new Ay,g={},v=n.maxTextureSize,_={[Pr]:Bn,[Bn]:Pr,[yi]:yi},y=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:tw,fragmentShader:nw}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const w=new Yn;w.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Wt(w,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let x=this.type;this.render=function(L,F,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Rr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=x!==Zi&&this.type===Zi,oe=x===Zi&&this.type!==Zi;for(let ce=0,J=L.length;ce<J;ce++){const de=L[ce],B=de.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ue=B.getFrameExtents();if(a.multiply(ue),c.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/ue.x),a.x=c.x*ue.x,B.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/ue.y),a.y=c.y*ue.y,B.mapSize.y=c.y)),B.map===null||q===!0||oe===!0){const O=this.type!==Zi?{minFilter:Ei,magFilter:Ei}:{};B.map!==null&&B.map.dispose(),B.map=new as(a.x,a.y,O),B.map.texture.name=de.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const le=B.getViewportCount();for(let O=0;O<le;O++){const se=B.getViewport(O);d.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),K.viewport(d),B.updateMatrices(de,O),r=B.getFrustum(),N(F,z,B.camera,de,this.type)}B.isPointLightShadow!==!0&&this.type===Zi&&U(B,z),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(C,A,k)};function U(L,F){const z=e.update(b);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new as(a.x,a.y)),y.uniforms.shadow_pass.value=L.map.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(F,null,z,y,b,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(F,null,z,M,b,null)}function P(L,F,z,C){let A=null;const k=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)A=k;else if(A=z.isPointLight===!0?p:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const K=A.uuid,q=F.uuid;let oe=g[K];oe===void 0&&(oe={},g[K]=oe);let ce=oe[q];ce===void 0&&(ce=A.clone(),oe[q]=ce,F.addEventListener("dispose",H)),A=ce}if(A.visible=F.visible,A.wireframe=F.wireframe,C===Zi?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:_[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const K=s.properties.get(A);K.light=z}return A}function N(L,F,z,C,A){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Zi)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const q=e.update(L),oe=L.material;if(Array.isArray(oe)){const ce=q.groups;for(let J=0,de=ce.length;J<de;J++){const B=ce[J],ue=oe[B.materialIndex];if(ue&&ue.visible){const le=P(L,ue,C,A);L.onBeforeShadow(s,L,F,z,q,le,B),s.renderBufferDirect(z,null,q,le,L,B),L.onAfterShadow(s,L,F,z,q,le,B)}}}else if(oe.visible){const ce=P(L,oe,C,A);L.onBeforeShadow(s,L,F,z,q,ce,null),s.renderBufferDirect(z,null,q,ce,L,null),L.onAfterShadow(s,L,F,z,q,ce,null)}}const K=L.children;for(let q=0,oe=K.length;q<oe;q++)N(K[q],F,z,C,A)}function H(L){L.target.removeEventListener("dispose",H);for(const z in g){const C=g[z],A=L.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const rw={[cd]:ud,[dd]:pd,[fd]:md,[Qs]:hd,[ud]:cd,[pd]:dd,[md]:fd,[hd]:Qs};function sw(s,e){function n(){let W=!1;const Re=new It;let ae=null;const pe=new It(0,0,0,0);return{setMask:function(Ne){ae!==Ne&&!W&&(s.colorMask(Ne,Ne,Ne,Ne),ae=Ne)},setLocked:function(Ne){W=Ne},setClear:function(Ne,Pe,st,Dt,zt){zt===!0&&(Ne*=Dt,Pe*=Dt,st*=Dt),Re.set(Ne,Pe,st,Dt),pe.equals(Re)===!1&&(s.clearColor(Ne,Pe,st,Dt),pe.copy(Re))},reset:function(){W=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,ae=null,pe=null,Ne=null;return{setReversed:function(Pe){if(Re!==Pe){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Ne;Ne=null,this.setClear(Dt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!W&&(s.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(Re&&(Pe=rw[Pe]),pe!==Pe){switch(Pe){case cd:s.depthFunc(s.NEVER);break;case ud:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case fd:s.depthFunc(s.EQUAL);break;case hd:s.depthFunc(s.GEQUAL);break;case pd:s.depthFunc(s.GREATER);break;case md:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Ne!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),Ne=Pe)},reset:function(){W=!1,ae=null,pe=null,Ne=null,Re=!1}}}function a(){let W=!1,Re=null,ae=null,pe=null,Ne=null,Pe=null,st=null,Dt=null,zt=null;return{setTest:function(vt){W||(vt?xe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!W&&(s.stencilMask(vt),Re=vt)},setFunc:function(vt,Qt,Jt){(ae!==vt||pe!==Qt||Ne!==Jt)&&(s.stencilFunc(vt,Qt,Jt),ae=vt,pe=Qt,Ne=Jt)},setOp:function(vt,Qt,Jt){(Pe!==vt||st!==Qt||Dt!==Jt)&&(s.stencilOp(vt,Qt,Jt),Pe=vt,st=Qt,Dt=Jt)},setLocked:function(vt){W=vt},setClear:function(vt){zt!==vt&&(s.clearStencil(vt),zt=vt)},reset:function(){W=!1,Re=null,ae=null,pe=null,Ne=null,Pe=null,st=null,Dt=null,zt=null}}}const c=new n,d=new r,h=new a,p=new WeakMap,g=new WeakMap;let v={},_={},y=new WeakMap,M=[],w=null,b=!1,S=null,x=null,U=null,P=null,N=null,H=null,L=null,F=new xt(0,0,0),z=0,C=!1,A=null,k=null,K=null,q=null,oe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,de=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(B)[1]),J=de>=1):B.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),J=de>=2);let ue=null,le={};const O=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ie=new It().fromArray(O),ee=new It().fromArray(se);function fe(W,Re,ae,pe){const Ne=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(W,Pe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<ae;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Re+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Pe}const Me={};Me[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),xe(s.DEPTH_TEST),d.setFunc(Qs),pt(!1),mt(Wp),xe(s.CULL_FACE),j(Rr);function xe(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function ge(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Ae(W,Re){return _[W]!==Re?(s.bindFramebuffer(W,Re),_[W]=Re,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function ye(W,Re){let ae=M,pe=!1;if(W){ae=y.get(Re),ae===void 0&&(ae=[],y.set(Re,ae));const Ne=W.textures;if(ae.length!==Ne.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,st=Ne.length;Pe<st;Pe++)ae[Pe]=s.COLOR_ATTACHMENT0+Pe;ae.length=Ne.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function ht(W){return w!==W?(s.useProgram(W),w=W,!0):!1}const lt={[ts]:s.FUNC_ADD,[l_]:s.FUNC_SUBTRACT,[c_]:s.FUNC_REVERSE_SUBTRACT};lt[u_]=s.MIN,lt[d_]=s.MAX;const at={[f_]:s.ZERO,[h_]:s.ONE,[p_]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[y_]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[g_]:s.DST_ALPHA,[m_]:s.ONE_MINUS_SRC_COLOR,[ld]:s.ONE_MINUS_SRC_ALPHA,[__]:s.ONE_MINUS_DST_COLOR,[x_]:s.ONE_MINUS_DST_ALPHA,[S_]:s.CONSTANT_COLOR,[M_]:s.ONE_MINUS_CONSTANT_COLOR,[E_]:s.CONSTANT_ALPHA,[w_]:s.ONE_MINUS_CONSTANT_ALPHA};function j(W,Re,ae,pe,Ne,Pe,st,Dt,zt,vt){if(W===Rr){b===!0&&(ge(s.BLEND),b=!1);return}if(b===!1&&(xe(s.BLEND),b=!0),W!==a_){if(W!==S||vt!==C){if((x!==ts||N!==ts)&&(s.blendEquation(s.FUNC_ADD),x=ts,N=ts),vt)switch(W){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case od:s.blendFunc(s.ONE,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case od:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,P=null,H=null,L=null,F.set(0,0,0),z=0,S=W,C=vt}return}Ne=Ne||Re,Pe=Pe||ae,st=st||pe,(Re!==x||Ne!==N)&&(s.blendEquationSeparate(lt[Re],lt[Ne]),x=Re,N=Ne),(ae!==U||pe!==P||Pe!==H||st!==L)&&(s.blendFuncSeparate(at[ae],at[pe],at[Pe],at[st]),U=ae,P=pe,H=Pe,L=st),(Dt.equals(F)===!1||zt!==z)&&(s.blendColor(Dt.r,Dt.g,Dt.b,zt),F.copy(Dt),z=zt),S=W,C=!1}function hn(W,Re){W.side===yi?ge(s.CULL_FACE):xe(s.CULL_FACE);let ae=W.side===Bn;Re&&(ae=!ae),pt(ae),W.blending===Ys&&W.transparent===!1?j(Rr):j(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const pe=W.stencilWrite;h.setTest(pe),pe&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function mt(W){W!==r_?(xe(s.CULL_FACE),W!==k&&(W===Wp?s.cullFace(s.BACK):W===s_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),k=W}function qe(W){W!==K&&(J&&s.lineWidth(W),K=W)}function wt(W,Re,ae){W?(xe(s.POLYGON_OFFSET_FILL),(q!==Re||oe!==ae)&&(s.polygonOffset(Re,ae),q=Re,oe=ae)):ge(s.POLYGON_OFFSET_FILL)}function Ve(W){W?xe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function D(W){W===void 0&&(W=s.TEXTURE0+ce-1),ue!==W&&(s.activeTexture(W),ue=W)}function T(W,Re,ae){ae===void 0&&(ue===null?ae=s.TEXTURE0+ce-1:ae=ue);let pe=le[ae];pe===void 0&&(pe={type:void 0,texture:void 0},le[ae]=pe),(pe.type!==W||pe.texture!==Re)&&(ue!==ae&&(s.activeTexture(ae),ue=ae),s.bindTexture(W,Re||Me[W]),pe.type=W,pe.texture=Re)}function te(){const W=le[ue];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(W){Ie.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ie.copy(W))}function Be(W){ee.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ee.copy(W))}function dt(W,Re){let ae=g.get(Re);ae===void 0&&(ae=new WeakMap,g.set(Re,ae));let pe=ae.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(Re,W.name),ae.set(W,pe))}function it(W,Re){const pe=g.get(Re).get(W);p.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,W.__bindingPointIndex),p.set(Re,pe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ue=null,le={},_={},y=new WeakMap,M=[],w=null,b=!1,S=null,x=null,U=null,P=null,N=null,H=null,L=null,F=new xt(0,0,0),z=0,C=!1,A=null,k=null,K=null,q=null,oe=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:xe,disable:ge,bindFramebuffer:Ae,drawBuffers:ye,useProgram:ht,setBlending:j,setMaterial:hn,setFlipSided:pt,setCullFace:mt,setLineWidth:qe,setPolygonOffset:wt,setScissorTest:Ve,activeTexture:D,bindTexture:T,unbindTexture:te,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ke,texImage3D:Ze,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:be,texSubImage2D:he,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:et,viewport:Be,reset:Ct}}function ow(s,e,n,r,a,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new At,v=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return M?new OffscreenCanvas(D,T):kl("canvas")}function b(D,T,te){let me=1;const ve=Ve(D);if((ve.width>te||ve.height>te)&&(me=te/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const he=Math.floor(me*ve.width),We=Math.floor(me*ve.height);_===void 0&&(_=w(he,We));const Ce=T?w(he,We):_;return Ce.width=he,Ce.height=We,Ce.getContext("2d").drawImage(D,0,0,he,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+We+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,T,te,me,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=T;if(T===s.RED&&(te===s.FLOAT&&(he=s.R32F),te===s.HALF_FLOAT&&(he=s.R16F),te===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.R8UI),te===s.UNSIGNED_SHORT&&(he=s.R16UI),te===s.UNSIGNED_INT&&(he=s.R32UI),te===s.BYTE&&(he=s.R8I),te===s.SHORT&&(he=s.R16I),te===s.INT&&(he=s.R32I)),T===s.RG&&(te===s.FLOAT&&(he=s.RG32F),te===s.HALF_FLOAT&&(he=s.RG16F),te===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.RG8UI),te===s.UNSIGNED_SHORT&&(he=s.RG16UI),te===s.UNSIGNED_INT&&(he=s.RG32UI),te===s.BYTE&&(he=s.RG8I),te===s.SHORT&&(he=s.RG16I),te===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.RGB8UI),te===s.UNSIGNED_SHORT&&(he=s.RGB16UI),te===s.UNSIGNED_INT&&(he=s.RGB32UI),te===s.BYTE&&(he=s.RGB8I),te===s.SHORT&&(he=s.RGB16I),te===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),te===s.UNSIGNED_INT&&(he=s.RGBA32UI),te===s.BYTE&&(he=s.RGBA8I),te===s.SHORT&&(he=s.RGBA16I),te===s.INT&&(he=s.RGBA32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const We=ve?Fl:Nt.getTransfer(me);te===s.FLOAT&&(he=s.RGBA32F),te===s.HALF_FLOAT&&(he=s.RGBA16F),te===s.UNSIGNED_BYTE&&(he=We===Lt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function N(D,T){let te;return D?T===null||T===os||T===to?te=s.DEPTH24_STENCIL8:T===Qi?te=s.DEPTH32F_STENCIL8:T===Yo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===os||T===to?te=s.DEPTH_COMPONENT24:T===Qi?te=s.DEPTH_COMPONENT32F:T===Yo&&(te=s.DEPTH_COMPONENT16),te}function H(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ei&&D.minFilter!==Ii?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function L(D){const T=D.target;T.removeEventListener("dispose",L),z(T),T.isVideoTexture&&v.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),A(T)}function z(D){const T=r.get(D);if(T.__webglInit===void 0)return;const te=D.source,me=y.get(te);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(D),Object.keys(me).length===0&&y.delete(te)}r.remove(D)}function C(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const te=D.source,me=y.get(te);delete me[T.__cacheKey],d.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=D.textures;for(let me=0,ve=te.length;me<ve;me++){const he=r.get(te[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(te[me])}r.remove(D)}let k=0;function K(){k=0}function q(){const D=k;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),k+=1,D}function oe(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function ce(D,T){const te=r.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,D,T);return}}n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function J(D,T){const te=r.get(D);if(D.version>0&&te.__version!==D.version){ee(te,D,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function de(D,T){const te=r.get(D);if(D.version>0&&te.__version!==D.version){ee(te,D,T);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function B(D,T){const te=r.get(D);if(D.version>0&&te.__version!==D.version){fe(te,D,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const ue={[vd]:s.REPEAT,[rs]:s.CLAMP_TO_EDGE,[_d]:s.MIRRORED_REPEAT},le={[Ei]:s.NEAREST,[I_]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[Tu]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},O={[k_]:s.NEVER,[G_]:s.ALWAYS,[B_]:s.LESS,[w0]:s.LEQUAL,[z_]:s.EQUAL,[H_]:s.GEQUAL,[j_]:s.GREATER,[V_]:s.NOTEQUAL};function se(D,T){if(T.type===Qi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ii||T.magFilter===Tu||T.magFilter===rl||T.magFilter===ss||T.minFilter===Ii||T.minFilter===Tu||T.minFilter===rl||T.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ue[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ue[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ue[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,le[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ei||T.minFilter!==rl&&T.minFilter!==ss||T.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(D,T){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const me=T.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const he=oe(T);if(he!==D.__cacheKey){ve[he]===void 0&&(ve[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),ve[he].usedTimes++;const We=ve[D.__cacheKey];We!==void 0&&(ve[D.__cacheKey].usedTimes--,We.usedTimes===0&&C(T)),D.__cacheKey=he,D.__webglTexture=ve[he].texture}return te}function ee(D,T,te){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Ie(D,T),he=T.source;n.bindTexture(me,D.__webglTexture,s.TEXTURE0+te);const We=r.get(he);if(he.version!==We.__version||ve===!0){n.activeTexture(s.TEXTURE0+te);const Ce=Nt.getPrimaries(Nt.workingColorSpace),Ue=T.colorSpace===Cr?null:Nt.getPrimaries(T.colorSpace),ut=T.colorSpace===Cr||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let be=b(T.image,!1,a.maxTextureSize);be=wt(T,be);const ke=c.convert(T.format,T.colorSpace),Ze=c.convert(T.type);let et=P(T.internalFormat,ke,Ze,T.colorSpace,T.isVideoTexture);se(me,T);let Be;const dt=T.mipmaps,it=T.isVideoTexture!==!0,Ct=We.__version===void 0||ve===!0,W=he.dataReady,Re=H(T,be);if(T.isDepthTexture)et=N(T.format===no,T.type),Ct&&(it?n.texStorage2D(s.TEXTURE_2D,1,et,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,et,be.width,be.height,0,ke,Ze,null));else if(T.isDataTexture)if(dt.length>0){it&&Ct&&n.texStorage2D(s.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let ae=0,pe=dt.length;ae<pe;ae++)Be=dt[ae],it?W&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Ze,Be.data):n.texImage2D(s.TEXTURE_2D,ae,et,Be.width,Be.height,0,ke,Ze,Be.data);T.generateMipmaps=!1}else it?(Ct&&n.texStorage2D(s.TEXTURE_2D,Re,et,be.width,be.height),W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,ke,Ze,be.data)):n.texImage2D(s.TEXTURE_2D,0,et,be.width,be.height,0,ke,Ze,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,dt[0].width,dt[0].height,be.depth);for(let ae=0,pe=dt.length;ae<pe;ae++)if(Be=dt[ae],T.format!==Mi)if(ke!==null)if(it){if(W)if(T.layerUpdates.size>0){const Ne=wm(Be.width,Be.height,T.format,T.type);for(const Pe of T.layerUpdates){const st=Be.data.subarray(Pe*Ne/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Ne/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Pe,Be.width,Be.height,1,ke,st)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,be.depth,ke,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,et,Be.width,Be.height,be.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,be.depth,ke,Ze,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,et,Be.width,Be.height,be.depth,0,ke,Ze,Be.data)}else{it&&Ct&&n.texStorage2D(s.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let ae=0,pe=dt.length;ae<pe;ae++)Be=dt[ae],T.format!==Mi?ke!==null?it?W&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ke,Ze,Be.data):n.texImage2D(s.TEXTURE_2D,ae,et,Be.width,Be.height,0,ke,Ze,Be.data)}else if(T.isDataArrayTexture)if(it){if(Ct&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,be.width,be.height,be.depth),W)if(T.layerUpdates.size>0){const ae=wm(be.width,be.height,T.format,T.type);for(const pe of T.layerUpdates){const Ne=be.data.subarray(pe*ae/be.data.BYTES_PER_ELEMENT,(pe+1)*ae/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,be.width,be.height,1,ke,Ze,Ne)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,ke,Ze,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,be.width,be.height,be.depth,0,ke,Ze,be.data);else if(T.isData3DTexture)it?(Ct&&n.texStorage3D(s.TEXTURE_3D,Re,et,be.width,be.height,be.depth),W&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,ke,Ze,be.data)):n.texImage3D(s.TEXTURE_3D,0,et,be.width,be.height,be.depth,0,ke,Ze,be.data);else if(T.isFramebufferTexture){if(Ct)if(it)n.texStorage2D(s.TEXTURE_2D,Re,et,be.width,be.height);else{let ae=be.width,pe=be.height;for(let Ne=0;Ne<Re;Ne++)n.texImage2D(s.TEXTURE_2D,Ne,et,ae,pe,0,ke,Ze,null),ae>>=1,pe>>=1}}else if(dt.length>0){if(it&&Ct){const ae=Ve(dt[0]);n.texStorage2D(s.TEXTURE_2D,Re,et,ae.width,ae.height)}for(let ae=0,pe=dt.length;ae<pe;ae++)Be=dt[ae],it?W&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ke,Ze,Be):n.texImage2D(s.TEXTURE_2D,ae,et,ke,Ze,Be);T.generateMipmaps=!1}else if(it){if(Ct){const ae=Ve(be);n.texStorage2D(s.TEXTURE_2D,Re,et,ae.width,ae.height)}W&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Ze,be)}else n.texImage2D(s.TEXTURE_2D,0,et,ke,Ze,be);S(T)&&x(me),We.__version=he.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,te){if(T.image.length!==6)return;const me=Ie(D,T),ve=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+te);const he=r.get(ve);if(ve.version!==he.__version||me===!0){n.activeTexture(s.TEXTURE0+te);const We=Nt.getPrimaries(Nt.workingColorSpace),Ce=T.colorSpace===Cr?null:Nt.getPrimaries(T.colorSpace),Ue=T.colorSpace===Cr||We===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,be=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ut&&!be?ke[pe]=b(T.image[pe],!0,a.maxCubemapSize):ke[pe]=be?T.image[pe].image:T.image[pe],ke[pe]=wt(T,ke[pe]);const Ze=ke[0],et=c.convert(T.format,T.colorSpace),Be=c.convert(T.type),dt=P(T.internalFormat,et,Be,T.colorSpace),it=T.isVideoTexture!==!0,Ct=he.__version===void 0||me===!0,W=ve.dataReady;let Re=H(T,Ze);se(s.TEXTURE_CUBE_MAP,T);let ae;if(ut){it&&Ct&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){ae=ke[pe].mipmaps;for(let Ne=0;Ne<ae.length;Ne++){const Pe=ae[Ne];T.format!==Mi?et!==null?it?W&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Pe.width,Pe.height,et,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,dt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,Pe.width,Pe.height,et,Be,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,dt,Pe.width,Pe.height,0,et,Be,Pe.data)}}}else{if(ae=T.mipmaps,it&&Ct){ae.length>0&&Re++;const pe=Ve(ke[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(be){it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,et,Be,ke[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,ke[pe].width,ke[pe].height,0,et,Be,ke[pe].data);for(let Ne=0;Ne<ae.length;Ne++){const st=ae[Ne].image[pe].image;it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,st.width,st.height,et,Be,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,dt,st.width,st.height,0,et,Be,st.data)}}else{it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Be,ke[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,et,Be,ke[pe]);for(let Ne=0;Ne<ae.length;Ne++){const Pe=ae[Ne];it?W&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,et,Be,Pe.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,dt,et,Be,Pe.image[pe])}}}S(T)&&x(s.TEXTURE_CUBE_MAP),he.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Me(D,T,te,me,ve,he){const We=c.convert(te.format,te.colorSpace),Ce=c.convert(te.type),Ue=P(te.internalFormat,We,Ce,te.colorSpace),ut=r.get(T),be=r.get(te);if(be.__renderTarget=T,!ut.__hasExternalTextures){const ke=Math.max(1,T.width>>he),Ze=Math.max(1,T.height>>he);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,he,Ue,ke,Ze,T.depth,0,We,Ce,null):n.texImage2D(ve,he,Ue,ke,Ze,0,We,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,be.__webglTexture,0,pt(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,be.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(D,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,he=N(T.stencilBuffer,ve),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=pt(T);mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,D)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const he=me[ve],We=c.convert(he.format,he.colorSpace),Ce=c.convert(he.type),Ue=P(he.internalFormat,We,Ce,he.colorSpace),ut=pt(T);te&&mt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Ue,T.width,T.height):mt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const ve=me.__webglTexture,he=pt(T);if(T.depthTexture.format===Ks)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===no)mt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ae(D){const T=r.get(D),te=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,D)}else if(te){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(D,T,te){const me=r.get(D);T!==void 0&&Me(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Ae(D)}function ht(D){const T=D.texture,te=r.get(D),me=r.get(T);D.addEventListener("dispose",F);const ve=D.textures,he=D.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,d.memory.textures++),he){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)te.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else te.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const ut=r.get(ve[Ce]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&mt(D)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Ue=ve[Ce];te.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const ut=c.convert(Ue.format,Ue.colorSpace),be=c.convert(Ue.type),ke=P(Ue.internalFormat,ut,be,Ue.colorSpace,D.isXRRenderTarget===!0),Ze=pt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,ke,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(te.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Me(te.__webglFramebuffer[Ce][Ue],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Me(te.__webglFramebuffer[Ce],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(We){for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const ut=ve[Ce],be=r.get(ut);n.bindTexture(s.TEXTURE_2D,be.__webglTexture),se(s.TEXTURE_2D,ut),Me(te.__webglFramebuffer,D,ut,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S(ut)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,me.__webglTexture),se(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Me(te.__webglFramebuffer[Ue],D,T,s.COLOR_ATTACHMENT0,Ce,Ue);else Me(te.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Ce,0);S(T)&&x(Ce),n.unbindTexture()}D.depthBuffer&&Ae(D)}function lt(D){const T=D.textures;for(let te=0,me=T.length;te<me;te++){const ve=T[te];if(S(ve)){const he=U(D),We=r.get(ve).__webglTexture;n.bindTexture(he,We),x(he),n.unbindTexture()}}}const at=[],j=[];function hn(D){if(D.samples>0){if(mt(D)===!1){const T=D.textures,te=D.width,me=D.height;let ve=s.COLOR_BUFFER_BIT;const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(D),Ce=T.length>1;if(Ce)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,te,me,0,0,te,me,ve,s.NEAREST),p===!0&&(at.length=0,j.length=0,at.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(at.push(he),j.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,We.__webglColorRenderbuffer[Ue]);const ut=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,ut,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(D){return Math.min(a.maxSamples,D.samples)}function mt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(D){const T=d.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function wt(D,T){const te=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==io&&te!==Cr&&(Nt.getTransfer(te)===Lt?(me!==Mi||ve!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Ve(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(g.width=D.naturalWidth||D.width,g.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(g.width=D.displayWidth,g.height=D.displayHeight):(g.width=D.width,g.height=D.height),g}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=J,this.setTexture3D=de,this.setTextureCube=B,this.rebindTextures=ye,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=mt}function aw(s,e){function n(r,a=Cr){let c;const d=Nt.getTransfer(a);if(r===tr)return s.UNSIGNED_BYTE;if(r===tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===nf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===m0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===h0)return s.BYTE;if(r===p0)return s.SHORT;if(r===Yo)return s.UNSIGNED_SHORT;if(r===ef)return s.INT;if(r===os)return s.UNSIGNED_INT;if(r===Qi)return s.FLOAT;if(r===Zo)return s.HALF_FLOAT;if(r===g0)return s.ALPHA;if(r===x0)return s.RGB;if(r===Mi)return s.RGBA;if(r===v0)return s.LUMINANCE;if(r===_0)return s.LUMINANCE_ALPHA;if(r===Ks)return s.DEPTH_COMPONENT;if(r===no)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===rf)return s.RED_INTEGER;if(r===S0)return s.RG;if(r===sf)return s.RG_INTEGER;if(r===of)return s.RGBA_INTEGER;if(r===Nl||r===Pl||r===Dl||r===Ll)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Nl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ll)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Nl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Dl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ll)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yd||r===Sd||r===Md||r===Ed)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wd||r===bd||r===Td)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===wd||r===bd)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Td)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Dd||r===Ld||r===Id||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ad)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Id)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ud)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Od)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===jd||r===Vd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Il)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===M0||r===Hd||r===Gd||r===Wd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Il)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new zn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Dr({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dw extends so{constructor(e,n){super();const r=this;let a=null,c=1,d=null,h="local-floor",p=1,g=null,v=null,_=null,y=null,M=null,w=null;const b=new uw,S=n.getContextAttributes();let x=null,U=null;const P=[],N=[],H=new At;let L=null;const F=new qn;F.viewport=new It;const z=new qn;z.viewport=new It;const C=[F,z],A=new Dy;let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=P[ee];return fe===void 0&&(fe=new qu,P[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=P[ee];return fe===void 0&&(fe=new qu,P[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=P[ee];return fe===void 0&&(fe=new qu,P[ee]=fe),fe.getHandSpace()};function q(ee){const fe=N.indexOf(ee.inputSource);if(fe===-1)return;const Me=P[fe];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,g||d),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function oe(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<P.length;ee++){const fe=N[ee];fe!==null&&(N[ee]=null,P[ee].disconnect(fe))}k=null,K=null,b.reset(),e.setRenderTarget(x),M=null,y=null,_=null,a=null,U=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(ee){g=ee},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",ce),S.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,xe=null,ge=null;S.depth&&(ge=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=S.stencil?no:Ks,xe=S.stencil?to:os);const Ae={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:c};_=new XRWebGLBinding(a,n),y=_.createProjectionLayer(Ae),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new as(y.textureWidth,y.textureHeight,{format:Mi,type:tr,depthTexture:new O0(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,n,Me),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new as(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}U.isXRRenderTarget=!0,this.setFoveation(p),g=null,d=await a.requestReferenceSpace(h),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ce(ee){for(let fe=0;fe<ee.removed.length;fe++){const Me=ee.removed[fe],xe=N.indexOf(Me);xe>=0&&(N[xe]=null,P[xe].disconnect(Me))}for(let fe=0;fe<ee.added.length;fe++){const Me=ee.added[fe];let xe=N.indexOf(Me);if(xe===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=N.length){N.push(Me),xe=Ae;break}else if(N[Ae]===null){N[Ae]=Me,xe=Ae;break}if(xe===-1)break}const ge=P[xe];ge&&ge.connect(Me)}}const J=new Y,de=new Y;function B(ee,fe,Me){J.setFromMatrixPosition(fe.matrixWorld),de.setFromMatrixPosition(Me.matrixWorld);const xe=J.distanceTo(de),ge=fe.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,ye=ge[14]/(ge[10]-1),ht=ge[14]/(ge[10]+1),lt=(ge[9]+1)/ge[5],at=(ge[9]-1)/ge[5],j=(ge[8]-1)/ge[0],hn=(Ae[8]+1)/Ae[0],pt=ye*j,mt=ye*hn,qe=xe/(-j+hn),wt=qe*-j;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(wt),ee.translateZ(qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ge[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ve=ye+qe,D=ht+qe,T=pt-wt,te=mt+(xe-wt),me=lt*ht/D*Ve,ve=at*ht/D*Ve;ee.projectionMatrix.makePerspective(T,te,me,ve,Ve,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let fe=ee.near,Me=ee.far;b.texture!==null&&(b.depthNear>0&&(fe=b.depthNear),b.depthFar>0&&(Me=b.depthFar)),A.near=z.near=F.near=fe,A.far=z.far=F.far=Me,(k!==A.near||K!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,K=A.far),F.layers.mask=ee.layers.mask|2,z.layers.mask=ee.layers.mask|4,A.layers.mask=F.layers.mask|z.layers.mask;const xe=ee.parent,ge=A.cameras;ue(A,xe);for(let Ae=0;Ae<ge.length;Ae++)ue(ge[Ae],xe);ge.length===2?B(A,F,z):A.projectionMatrix.copy(F.projectionMatrix),le(ee,A,xe)};function le(ee,fe,Me){Me===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Xd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(ee){p=ee,y!==null&&(y.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)};let O=null;function se(ee,fe){if(v=fe.getViewerPose(g||d),w=fe,v!==null){const Me=v.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let xe=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let ye=0;ye<Me.length;ye++){const ht=Me[ye];let lt=null;if(M!==null)lt=M.getViewport(ht);else{const j=_.getViewSubImage(y,ht);lt=j.viewport,ye===0&&(e.setRenderTargetTextures(U,j.colorTexture,y.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(U))}let at=C[ye];at===void 0&&(at=new qn,at.layers.enable(ye),at.viewport=new It,C[ye]=at),at.matrix.fromArray(ht.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ht.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(lt.x,lt.y,lt.width,lt.height),ye===0&&(A.matrix.copy(at.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(at)}const ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const ye=_.getDepthInformation(Me[0]);ye&&ye.isValid&&ye.texture&&b.init(e,ye,a.renderState)}}for(let Me=0;Me<P.length;Me++){const xe=N[Me],ge=P[Me];xe!==null&&ge!==void 0&&ge.update(xe,fe,g||d)}O&&O(ee,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Ie=new z0;Ie.setAnimationLoop(se),this.setAnimationLoop=function(ee){O=ee},this.dispose=function(){}}}const Qr=new Ui,fw=new Bt;function hw(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,D0(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,U,P,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),v(S,x)):x.isMeshStandardMaterial?(c(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,N)):x.isMeshMatcapMaterial?(c(S,x),w(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(d(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?p(S,x,U,P):x.isSpriteMaterial?g(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Bn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Bn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),P=U.envMap,N=U.envMapRotation;P&&(S.envMap.value=P,Qr.copy(N),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),S.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(Qr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,U,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=P*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function pw(s,e,n,r){let a={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,P){const N=P.program;r.uniformBlockBinding(U,N)}function g(U,P){let N=a[U.id];N===void 0&&(w(U),N=v(U),a[U.id]=N,U.addEventListener("dispose",S));const H=P.program;r.updateUBOMapping(U,H);const L=e.render.frame;c[U.id]!==L&&(y(U),c[U.id]=L)}function v(U){const P=_();U.__bindingPointIndex=P;const N=s.createBuffer(),H=U.__size,L=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,H,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function _(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const P=a[U.id],N=U.uniforms,H=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let L=0,F=N.length;L<F;L++){const z=Array.isArray(N[L])?N[L]:[N[L]];for(let C=0,A=z.length;C<A;C++){const k=z[C];if(M(k,L,C,H)===!0){const K=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let oe=0;for(let ce=0;ce<q.length;ce++){const J=q[ce],de=b(J);typeof J=="number"||typeof J=="boolean"?(k.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,K+oe,k.__data)):J.isMatrix3?(k.__data[0]=J.elements[0],k.__data[1]=J.elements[1],k.__data[2]=J.elements[2],k.__data[3]=0,k.__data[4]=J.elements[3],k.__data[5]=J.elements[4],k.__data[6]=J.elements[5],k.__data[7]=0,k.__data[8]=J.elements[6],k.__data[9]=J.elements[7],k.__data[10]=J.elements[8],k.__data[11]=0):(J.toArray(k.__data,oe),oe+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,P,N,H){const L=U.value,F=P+"_"+N;if(H[F]===void 0)return typeof L=="number"||typeof L=="boolean"?H[F]=L:H[F]=L.clone(),!0;{const z=H[F];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return H[F]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function w(U){const P=U.uniforms;let N=0;const H=16;for(let F=0,z=P.length;F<z;F++){const C=Array.isArray(P[F])?P[F]:[P[F]];for(let A=0,k=C.length;A<k;A++){const K=C[A],q=Array.isArray(K.value)?K.value:[K.value];for(let oe=0,ce=q.length;oe<ce;oe++){const J=q[oe],de=b(J),B=N%H,ue=B%de.boundary,le=B+ue;N+=ue,le!==0&&H-le<de.storage&&(N+=H-le),K.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=de.storage}}}const L=N%H;return L>0&&(N+=H-L),U.__size=N,U.__cache={},this}function b(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function S(U){const P=U.target;P.removeEventListener("dispose",S);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete c[P.id]}function x(){for(const U in a)s.deleteBuffer(a[U]);d=[],a={},c={}}return{bind:p,update:g,dispose:x}}class mw{constructor(e={}){const{canvas:n=X_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const w=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const U=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Nr,this.toneMappingExposure=1;const N=this;let H=!1,L=0,F=0,z=null,C=-1,A=null;const k=new It,K=new It;let q=null;const oe=new xt(0);let ce=0,J=n.width,de=n.height,B=1,ue=null,le=null;const O=new It(0,0,J,de),se=new It(0,0,J,de);let Ie=!1;const ee=new uf;let fe=!1,Me=!1;this.transmissionResolutionScale=1;const xe=new Bt,ge=new Bt,Ae=new Y,ye=new It,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function at(){return z===null?B:1}let j=r;function hn(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:a,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),j===null){const X="webgl2";if(j=hn(X,R),j===null)throw hn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,mt,qe,wt,Ve,D,T,te,me,ve,he,We,Ce,Ue,ut,be,ke,Ze,et,Be,dt,it,Ct,W;function Re(){pt=new bM(j),pt.init(),it=new aw(j,pt),mt=new _M(j,pt,e,it),qe=new sw(j,pt),mt.reverseDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),wt=new CM(j),Ve=new XE,D=new ow(j,pt,qe,Ve,mt,it,wt),T=new SM(N),te=new wM(N),me=new Uy(j),Ct=new xM(j,me),ve=new TM(j,me,wt,Ct),he=new NM(j,ve,me,wt),et=new RM(j,mt,D),be=new yM(Ve),We=new WE(N,T,te,pt,mt,Ct,be),Ce=new hw(N,Ve),Ue=new qE,ut=new ew(pt),Ze=new gM(N,T,te,qe,he,M,p),ke=new iw(N,he,mt),W=new pw(j,wt,mt,qe),Be=new vM(j,pt,wt),dt=new AM(j,pt,wt),wt.programs=We.programs,N.capabilities=mt,N.extensions=pt,N.properties=Ve,N.renderLists=Ue,N.shadowMap=ke,N.state=qe,N.info=wt}Re();const ae=new dw(N,j);this.xr=ae,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(R){R!==void 0&&(B=R,this.setSize(J,de,!1))},this.getSize=function(R){return R.set(J,de)},this.setSize=function(R,X,ie=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,de=X,n.width=Math.floor(R*B),n.height=Math.floor(X*B),ie===!0&&(n.style.width=R+"px",n.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(J*B,de*B).floor()},this.setDrawingBufferSize=function(R,X,ie){J=R,de=X,B=ie,n.width=Math.floor(R*ie),n.height=Math.floor(X*ie),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,X,ie,Q){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,X,ie,Q),qe.viewport(k.copy(O).multiplyScalar(B).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,X,ie,Q){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,X,ie,Q),qe.scissor(K.copy(se).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(R){qe.setScissorTest(Ie=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(R=!0,X=!0,ie=!0){let Q=0;if(R){let $=!1;if(z!==null){const we=z.texture.format;$=we===of||we===sf||we===rf}if($){const we=z.texture.type,De=we===tr||we===os||we===Yo||we===to||we===tf||we===nf,Fe=Ze.getClearColor(),je=Ze.getClearAlpha(),nt=Fe.r,tt=Fe.g,Ge=Fe.b;De?(w[0]=nt,w[1]=tt,w[2]=Ge,w[3]=je,j.clearBufferuiv(j.COLOR,0,w)):(b[0]=nt,b[1]=tt,b[2]=Ge,b[3]=je,j.clearBufferiv(j.COLOR,0,b))}else Q|=j.COLOR_BUFFER_BIT}X&&(Q|=j.DEPTH_BUFFER_BIT),ie&&(Q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ze.dispose(),Ue.dispose(),ut.dispose(),Ve.dispose(),T.dispose(),te.dispose(),he.dispose(),Ct.dispose(),W.dispose(),We.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Fi),ae.removeEventListener("sessionend",ai),Kn.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=wt.autoReset,X=ke.enabled,ie=ke.autoUpdate,Q=ke.needsUpdate,$=ke.type;Re(),wt.autoReset=R,ke.enabled=X,ke.autoUpdate=ie,ke.needsUpdate=Q,ke.type=$}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){const X=R.target;X.removeEventListener("dispose",st),Dt(X)}function Dt(R){zt(R),Ve.remove(R)}function zt(R){const X=Ve.get(R).programs;X!==void 0&&(X.forEach(function(ie){We.releaseProgram(ie)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ie,Q,$,we){X===null&&(X=ht);const De=$.isMesh&&$.matrixWorld.determinant()<0,Fe=Ti(R,X,ie,Q,$);qe.setMaterial(Q,De);let je=ie.index,nt=1;if(Q.wireframe===!0){if(je=ve.getWireframeAttribute(ie),je===void 0)return;nt=2}const tt=ie.drawRange,Ge=ie.attributes.position;let Mt=tt.start*nt,ct=(tt.start+tt.count)*nt;we!==null&&(Mt=Math.max(Mt,we.start*nt),ct=Math.min(ct,(we.start+we.count)*nt)),je!==null?(Mt=Math.max(Mt,0),ct=Math.min(ct,je.count)):Ge!=null&&(Mt=Math.max(Mt,0),ct=Math.min(ct,Ge.count));const Xt=ct-Mt;if(Xt<0||Xt===1/0)return;Ct.setup($,Q,Fe,ie,je);let jt,Et=Be;if(je!==null&&(jt=me.get(je),Et=dt,Et.setIndex(jt)),$.isMesh)Q.wireframe===!0?(qe.setLineWidth(Q.wireframeLinewidth*at()),Et.setMode(j.LINES)):Et.setMode(j.TRIANGLES);else if($.isLine){let Ke=Q.linewidth;Ke===void 0&&(Ke=1),qe.setLineWidth(Ke*at()),$.isLineSegments?Et.setMode(j.LINES):$.isLineLoop?Et.setMode(j.LINE_LOOP):Et.setMode(j.LINE_STRIP)}else $.isPoints?Et.setMode(j.POINTS):$.isSprite&&Et.setMode(j.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Et.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ke=$._multiDrawStarts,$t=$._multiDrawCounts,yt=$._multiDrawCount,_n=je?me.get(je).bytesPerElement:1,nr=Ve.get(Q).currentProgram.getUniforms();for(let An=0;An<yt;An++)nr.setValue(j,"_gl_DrawID",An),Et.render(Ke[An]/_n,$t[An])}else if($.isInstancedMesh)Et.renderInstances(Mt,Xt,$.count);else if(ie.isInstancedBufferGeometry){const Ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,$t=Math.min(ie.instanceCount,Ke);Et.renderInstances(Mt,Xt,$t)}else Et.render(Mt,Xt)};function vt(R,X,ie){R.transparent===!0&&R.side===yi&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,Pt(R,X,ie),R.side=Pr,R.needsUpdate=!0,Pt(R,X,ie),R.side=yi):Pt(R,X,ie)}this.compile=function(R,X,ie=null){ie===null&&(ie=R),x=ut.get(ie),x.init(X),P.push(x),ie.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),R!==ie&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const Q=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const we=$.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Fe=we[De];vt(Fe,ie,$),Q.add(Fe)}else vt(we,ie,$),Q.add(we)}),P.pop(),x=null,Q},this.compileAsync=function(R,X,ie=null){const Q=this.compile(R,X,ie);return new Promise($=>{function we(){if(Q.forEach(function(De){Ve.get(De).currentProgram.isReady()&&Q.delete(De)}),Q.size===0){$(R);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Qt=null;function Jt(R){Qt&&Qt(R)}function Fi(){Kn.stop()}function ai(){Kn.start()}const Kn=new z0;Kn.setAnimationLoop(Jt),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(R){Qt=R,ae.setAnimationLoop(R),R===null?Kn.stop():Kn.start()},ae.addEventListener("sessionstart",Fi),ae.addEventListener("sessionend",ai),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,X,z),x=ut.get(R,P.length),x.init(X),P.push(x),ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(ge),Me=this.localClippingEnabled,fe=be.init(this.clippingPlanes,Me),S=Ue.get(R,U.length),S.init(),U.push(S),ae.enabled===!0&&ae.isPresenting===!0){const we=N.xr.getDepthSensingMesh();we!==null&&Zn(we,X,-1/0,N.sortObjects)}Zn(R,X,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(ue,le),lt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,lt&&Ze.addToRenderList(S,R),this.info.render.frame++,fe===!0&&be.beginShadows();const ie=x.state.shadowsArray;ke.render(ie,R,X),fe===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,$=S.transmissive;if(x.setupLights(),X.isArrayCamera){const we=X.cameras;if($.length>0)for(let De=0,Fe=we.length;De<Fe;De++){const je=we[De];bi(Q,$,R,je)}lt&&Ze.render(R);for(let De=0,Fe=we.length;De<Fe;De++){const je=we[De];Qn(S,R,je,je.viewport)}}else $.length>0&&bi(Q,$,R,X),lt&&Ze.render(R),Qn(S,R,X);z!==null&&F===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),R.isScene===!0&&R.onAfterRender(N,R,X),Ct.resetDefaultState(),C=-1,A=null,P.pop(),P.length>0?(x=P[P.length-1],fe===!0&&be.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function Zn(R,X,ie,Q){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){Q&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const De=he.update(R),Fe=R.material;Fe.visible&&S.push(R,De,Fe,ie,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const De=he.update(R),Fe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ye.copy(De.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Fe)){const je=De.groups;for(let nt=0,tt=je.length;nt<tt;nt++){const Ge=je[nt],Mt=Fe[Ge.materialIndex];Mt&&Mt.visible&&S.push(R,De,Mt,ie,ye.z,Ge)}}else Fe.visible&&S.push(R,De,Fe,ie,ye.z,null)}}const we=R.children;for(let De=0,Fe=we.length;De<Fe;De++)Zn(we[De],X,ie,Q)}function Qn(R,X,ie,Q){const $=R.opaque,we=R.transmissive,De=R.transparent;x.setupLightsView(ie),fe===!0&&be.setGlobalState(N.clippingPlanes,ie),Q&&qe.viewport(k.copy(Q)),$.length>0&&li($,X,ie),we.length>0&&li(we,X,ie),De.length>0&&li(De,X,ie),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function bi(R,X,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[Q.id]===void 0&&(x.state.transmissionRenderTarget[Q.id]=new as(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Zo:tr,minFilter:ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const we=x.state.transmissionRenderTarget[Q.id],De=Q.viewport||k;we.setSize(De.z*N.transmissionResolutionScale,De.w*N.transmissionResolutionScale);const Fe=N.getRenderTarget();N.setRenderTarget(we),N.getClearColor(oe),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),lt&&Ze.render(ie);const je=N.toneMapping;N.toneMapping=Nr;const nt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),x.setupLightsView(Q),fe===!0&&be.setGlobalState(N.clippingPlanes,Q),li(R,ie,Q),D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,Mt=X.length;Ge<Mt;Ge++){const ct=X[Ge],Xt=ct.object,jt=ct.geometry,Et=ct.material,Ke=ct.group;if(Et.side===yi&&Xt.layers.test(Q.layers)){const $t=Et.side;Et.side=Bn,Et.needsUpdate=!0,Lr(Xt,ie,Q,jt,Et,Ke),Et.side=$t,Et.needsUpdate=!0,tt=!0}}tt===!0&&(D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we))}N.setRenderTarget(Fe),N.setClearColor(oe,ce),nt!==void 0&&(Q.viewport=nt),N.toneMapping=je}function li(R,X,ie){const Q=X.isScene===!0?X.overrideMaterial:null;for(let $=0,we=R.length;$<we;$++){const De=R[$],Fe=De.object,je=De.geometry,nt=Q===null?De.material:Q,tt=De.group;Fe.layers.test(ie.layers)&&Lr(Fe,X,ie,je,nt,tt)}}function Lr(R,X,ie,Q,$,we){R.onBeforeRender(N,X,ie,Q,$,we),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(N,X,ie,Q,R,we),$.transparent===!0&&$.side===yi&&$.forceSinglePass===!1?($.side=Bn,$.needsUpdate=!0,N.renderBufferDirect(ie,X,Q,$,R,we),$.side=Pr,$.needsUpdate=!0,N.renderBufferDirect(ie,X,Q,$,R,we),$.side=yi):N.renderBufferDirect(ie,X,Q,$,R,we),R.onAfterRender(N,X,ie,Q,$,we)}function Pt(R,X,ie){X.isScene!==!0&&(X=ht);const Q=Ve.get(R),$=x.state.lights,we=x.state.shadowsArray,De=$.state.version,Fe=We.getParameters(R,$.state,we,X,ie),je=We.getProgramCacheKey(Fe);let nt=Q.programs;Q.environment=R.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(R.isMeshStandardMaterial?te:T).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,nt===void 0&&(R.addEventListener("dispose",st),nt=new Map,Q.programs=nt);let tt=nt.get(je);if(tt!==void 0){if(Q.currentProgram===tt&&Q.lightsStateVersion===De)return xn(R,Fe),tt}else Fe.uniforms=We.getUniforms(R),R.onBeforeCompile(Fe,N),tt=We.acquireProgram(Fe,je),nt.set(je,tt),Q.uniforms=Fe.uniforms;const Ge=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=be.uniform),xn(R,Fe),Q.needsLights=vn(R),Q.lightsStateVersion=De,Q.needsLights&&(Ge.ambientLightColor.value=$.state.ambient,Ge.lightProbe.value=$.state.probe,Ge.directionalLights.value=$.state.directional,Ge.directionalLightShadows.value=$.state.directionalShadow,Ge.spotLights.value=$.state.spot,Ge.spotLightShadows.value=$.state.spotShadow,Ge.rectAreaLights.value=$.state.rectArea,Ge.ltc_1.value=$.state.rectAreaLTC1,Ge.ltc_2.value=$.state.rectAreaLTC2,Ge.pointLights.value=$.state.point,Ge.pointLightShadows.value=$.state.pointShadow,Ge.hemisphereLights.value=$.state.hemi,Ge.directionalShadowMap.value=$.state.directionalShadowMap,Ge.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ge.spotShadowMap.value=$.state.spotShadowMap,Ge.spotLightMatrix.value=$.state.spotLightMatrix,Ge.spotLightMap.value=$.state.spotLightMap,Ge.pointShadowMap.value=$.state.pointShadowMap,Ge.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=tt,Q.uniformsList=null,tt}function Pn(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Ul.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function xn(R,X){const ie=Ve.get(R);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Ti(R,X,ie,Q,$){X.isScene!==!0&&(X=ht),D.resetTextureUnits();const we=X.fog,De=Q.isMeshStandardMaterial?X.environment:null,Fe=z===null?N.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:io,je=(Q.isMeshStandardMaterial?te:T).get(Q.envMap||De),nt=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!ie.morphAttributes.position,Mt=!!ie.morphAttributes.normal,ct=!!ie.morphAttributes.color;let Xt=Nr;Q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xt=N.toneMapping);const jt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Et=jt!==void 0?jt.length:0,Ke=Ve.get(Q),$t=x.state.lights;if(fe===!0&&(Me===!0||R!==A)){const pn=R===A&&Q.id===C;be.setState(Q,R,pn)}let yt=!1;Q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==$t.state.version||Ke.outputColorSpace!==Fe||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isBatchedMesh&&Ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==je||Q.fog===!0&&Ke.fog!==we||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==be.numPlanes||Ke.numIntersection!==be.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==tt||Ke.morphTargets!==Ge||Ke.morphNormals!==Mt||Ke.morphColors!==ct||Ke.toneMapping!==Xt||Ke.morphTargetsCount!==Et)&&(yt=!0):(yt=!0,Ke.__version=Q.version);let _n=Ke.currentProgram;yt===!0&&(_n=Pt(Q,X,$));let nr=!1,An=!1,Oi=!1;const Ut=_n.getUniforms(),yn=Ke.uniforms;if(qe.useProgram(_n.program)&&(nr=!0,An=!0,Oi=!0),Q.id!==C&&(C=Q.id,An=!0),nr||A!==R){qe.buffers.depth.getReversed()?(xe.copy(R.projectionMatrix),q_(xe),Y_(xe),Ut.setValue(j,"projectionMatrix",xe)):Ut.setValue(j,"projectionMatrix",R.projectionMatrix),Ut.setValue(j,"viewMatrix",R.matrixWorldInverse);const an=Ut.map.cameraPosition;an!==void 0&&an.setValue(j,Ae.setFromMatrixPosition(R.matrixWorld)),mt.logarithmicDepthBuffer&&Ut.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ut.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,An=!0,Oi=!0)}if($.isSkinnedMesh){Ut.setOptional(j,$,"bindMatrix"),Ut.setOptional(j,$,"bindMatrixInverse");const pn=$.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ut.setValue(j,"boneTexture",pn.boneTexture,D))}$.isBatchedMesh&&(Ut.setOptional(j,$,"batchingTexture"),Ut.setValue(j,"batchingTexture",$._matricesTexture,D),Ut.setOptional(j,$,"batchingIdTexture"),Ut.setValue(j,"batchingIdTexture",$._indirectTexture,D),Ut.setOptional(j,$,"batchingColorTexture"),$._colorsTexture!==null&&Ut.setValue(j,"batchingColorTexture",$._colorsTexture,D));const on=ie.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&et.update($,ie,_n),(An||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Ut.setValue(j,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yn.envMap.value=je,yn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(yn.envMapIntensity.value=X.environmentIntensity),An&&(Ut.setValue(j,"toneMappingExposure",N.toneMappingExposure),Ke.needsLights&&en(yn,Oi),we&&Q.fog===!0&&Ce.refreshFogUniforms(yn,we),Ce.refreshMaterialUniforms(yn,Q,B,de,x.state.transmissionRenderTarget[R.id]),Ul.upload(j,Pn(Ke),yn,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ul.upload(j,Pn(Ke),yn,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ut.setValue(j,"center",$.center),Ut.setValue(j,"modelViewMatrix",$.modelViewMatrix),Ut.setValue(j,"normalMatrix",$.normalMatrix),Ut.setValue(j,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const pn=Q.uniformsGroups;for(let an=0,bt=pn.length;an<bt;an++){const Ai=pn[an];W.update(Ai,_n),W.bind(Ai,_n)}}return _n}function en(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function vn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(R,X,ie){Ve.get(R.texture).__webglTexture=X,Ve.get(R.depthTexture).__webglTexture=ie;const Q=Ve.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ie===void 0,Q.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const ie=Ve.get(R);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Ir=j.createFramebuffer();this.setRenderTarget=function(R,X=0,ie=0){z=R,L=X,F=ie;let Q=!0,$=null,we=!1,De=!1;if(R){const je=Ve.get(R);if(je.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(j.FRAMEBUFFER,null),Q=!1;else if(je.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(je.__hasExternalTextures)D.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(je.__boundDepthTexture!==Ge){if(Ge!==null&&Ve.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(De=!0);const tt=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?$=tt[X][ie]:$=tt[X],we=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?$=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?$=tt[ie]:$=tt,k.copy(R.viewport),K.copy(R.scissor),q=R.scissorTest}else k.copy(O).multiplyScalar(B).floor(),K.copy(se).multiplyScalar(B).floor(),q=Ie;if(ie!==0&&($=Ir),qe.bindFramebuffer(j.FRAMEBUFFER,$)&&Q&&qe.drawBuffers(R,$),qe.viewport(k),qe.scissor(K),qe.setScissorTest(q),we){const je=Ve.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,je.__webglTexture,ie)}else if(De){const je=Ve.get(R.texture),nt=X;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,je.__webglTexture,ie,nt)}else if(R!==null&&ie!==0){const je=Ve.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,je.__webglTexture,ie)}C=-1},this.readRenderTargetPixels=function(R,X,ie,Q,$,we,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){qe.bindFramebuffer(j.FRAMEBUFFER,Fe);try{const je=R.texture,nt=je.format,tt=je.type;if(!mt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-Q&&ie>=0&&ie<=R.height-$&&j.readPixels(X,ie,Q,$,it.convert(nt),it.convert(tt),we)}finally{const je=z!==null?Ve.get(z).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,X,ie,Q,$,we,De){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){const je=R.texture,nt=je.format,tt=je.type;if(!mt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-Q&&ie>=0&&ie<=R.height-$){qe.bindFramebuffer(j.FRAMEBUFFER,Fe);const Ge=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.bufferData(j.PIXEL_PACK_BUFFER,we.byteLength,j.STREAM_READ),j.readPixels(X,ie,Q,$,it.convert(nt),it.convert(tt),0);const Mt=z!==null?Ve.get(z).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,Mt);const ct=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await $_(j,ct,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,we),j.deleteBuffer(Ge),j.deleteSync(ct),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,ie=0){R.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-ie),$=Math.floor(R.image.width*Q),we=Math.floor(R.image.height*Q),De=X!==null?X.x:0,Fe=X!==null?X.y:0;D.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,ie,0,0,De,Fe,$,we),qe.unbindTexture()};const ci=j.createFramebuffer(),na=j.createFramebuffer();this.copyTextureToTexture=function(R,X,ie=null,Q=null,$=0,we=null){R.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],X=arguments[2],we=arguments[3]||0,ie=null),we===null&&($!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=$,$=0):we=0);let De,Fe,je,nt,tt,Ge,Mt,ct,Xt;const jt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(ie!==null)De=ie.max.x-ie.min.x,Fe=ie.max.y-ie.min.y,je=ie.isBox3?ie.max.z-ie.min.z:1,nt=ie.min.x,tt=ie.min.y,Ge=ie.isBox3?ie.min.z:0;else{const on=Math.pow(2,-$);De=Math.floor(jt.width*on),Fe=Math.floor(jt.height*on),R.isDataArrayTexture?je=jt.depth:R.isData3DTexture?je=Math.floor(jt.depth*on):je=1,nt=0,tt=0,Ge=0}Q!==null?(Mt=Q.x,ct=Q.y,Xt=Q.z):(Mt=0,ct=0,Xt=0);const Et=it.convert(X.format),Ke=it.convert(X.type);let $t;X.isData3DTexture?(D.setTexture3D(X,0),$t=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),$t=j.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),$t=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const yt=j.getParameter(j.UNPACK_ROW_LENGTH),_n=j.getParameter(j.UNPACK_IMAGE_HEIGHT),nr=j.getParameter(j.UNPACK_SKIP_PIXELS),An=j.getParameter(j.UNPACK_SKIP_ROWS),Oi=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,jt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,jt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,nt),j.pixelStorei(j.UNPACK_SKIP_ROWS,tt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ge);const Ut=R.isDataArrayTexture||R.isData3DTexture,yn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const on=Ve.get(R),pn=Ve.get(X),an=Ve.get(on.__renderTarget),bt=Ve.get(pn.__renderTarget);qe.bindFramebuffer(j.READ_FRAMEBUFFER,an.__webglFramebuffer),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ai=0;Ai<je;Ai++)Ut&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,$,Ge+Ai),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ve.get(X).__webglTexture,we,Xt+Ai)),j.blitFramebuffer(nt,tt,De,Fe,Mt,ct,De,Fe,j.DEPTH_BUFFER_BIT,j.NEAREST);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Ve.has(R)){const on=Ve.get(R),pn=Ve.get(X);qe.bindFramebuffer(j.READ_FRAMEBUFFER,ci),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,na);for(let an=0;an<je;an++)Ut?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,on.__webglTexture,$,Ge+an):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,on.__webglTexture,$),yn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,pn.__webglTexture,we,Xt+an):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,pn.__webglTexture,we),$!==0?j.blitFramebuffer(nt,tt,De,Fe,Mt,ct,De,Fe,j.COLOR_BUFFER_BIT,j.NEAREST):yn?j.copyTexSubImage3D($t,we,Mt,ct,Xt+an,nt,tt,De,Fe):j.copyTexSubImage2D($t,we,Mt,ct,nt,tt,De,Fe);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?j.texSubImage3D($t,we,Mt,ct,Xt,De,Fe,je,Et,Ke,jt.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D($t,we,Mt,ct,Xt,De,Fe,je,Et,jt.data):j.texSubImage3D($t,we,Mt,ct,Xt,De,Fe,je,Et,Ke,jt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,we,Mt,ct,De,Fe,Et,Ke,jt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,we,Mt,ct,jt.width,jt.height,Et,jt.data):j.texSubImage2D(j.TEXTURE_2D,we,Mt,ct,De,Fe,Et,Ke,jt);j.pixelStorei(j.UNPACK_ROW_LENGTH,yt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_n),j.pixelStorei(j.UNPACK_SKIP_PIXELS,nr),j.pixelStorei(j.UNPACK_SKIP_ROWS,An),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Oi),we===0&&X.generateMipmaps&&j.generateMipmap($t),qe.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ie=null,Q=null,$=0){return R.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],X=arguments[3],$=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,ie,Q,$)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),qe.unbindTexture()},this.resetState=function(){L=0,F=0,z=null,qe.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Nt._getUnpackColorSpace()}}const gw=({outputs:s,inputs:e,viewMode:n,onToggleViewMode:r,onOpenBlueprint:a,onExportStl:c})=>{const d=Ye.useRef(null),[h,p]=Ye.useState(0),[g,v]=Ye.useState("overview"),_=Ye.useRef(null),y=Ye.useRef(null),M=Ye.useRef(null),w=Ye.useRef(null),b=Ye.useRef(null),S=Ye.useRef(null),x=Ye.useRef(null),U=Ye.useRef(null),P=Ye.useRef(null),N=Ye.useRef(null),H=Ye.useRef(s),L=Ye.useRef(e),F=Ye.useRef(h);Ye.useEffect(()=>{H.current=s,L.current=e},[s,e]),Ye.useEffect(()=>{F.current=h},[h]),Ye.useEffect(()=>{if(!d.current||n!=="3d")return;const C=d.current.clientWidth,A=d.current.clientHeight||460,k=new yy;_.current=k,k.background=new xt("#07090e"),k.fog=new cf("#07090e",.04);const K=new qn(42,C/A,.1,100);K.position.set(5.5,3.2,5),K.lookAt(0,0,0),y.current=K;const q=new mw({antialias:!0,alpha:!0,powerPreference:"high-performance"});q.setSize(C,A),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.shadowMap.enabled=!0,M.current=q,d.current.replaceChildren(q.domElement);const oe=new Py("#ffffff",.85);k.add(oe);const ce=new Mm("#e0f2fe",2);ce.position.set(6,8,5),k.add(ce);const J=new Mm("#93c5fd",1);J.position.set(-6,-4,-4),k.add(J);const de=new Sm("#a855f7",4,8);de.position.set(0,0,0),k.add(de);const B=new $s;P.current=B,k.add(B);const ue=new Di(1.15,1.15,4.2,36,1,!1,0,Math.PI*1.55),le=new _i({color:"#94a3b8",metalness:.88,roughness:.22,side:yi}),O=new Wt(ue,le);O.rotation.z=Math.PI/2,B.add(O);const se=new Di(1.35,1.35,.22,32),Ie=new _i({color:"#64748b",metalness:.9,roughness:.2}),ee=new Wt(se,Ie);ee.rotation.z=Math.PI/2,ee.position.x=-2.15,B.add(ee);const fe=new Wt(se,Ie);fe.rotation.z=Math.PI/2,fe.position.x=2.15,B.add(fe);const Me=new Di(.28,.28,.9,20),xe=new _i({color:"#475569",metalness:.85,roughness:.3}),ge=new Wt(Me,xe);ge.position.set(-1.6,-1.2,0),B.add(ge);const Ae=new Wt(Me,xe);Ae.position.set(1.6,1.2,0),B.add(Ae);const ye=new $s;ye.position.set(1.6,1.75,0);const ht=new ls(.65,.75,.65),lt=new _i({color:"#1e293b",metalness:.7,roughness:.3}),at=new Wt(ht,lt);ye.add(at);const j=new Di(.3,.3,.5,20),hn=new _i({color:"#0f172a",metalness:.5,roughness:.5}),pt=new Wt(j,hn);pt.position.y=.55,ye.add(pt);const mt=new df(.18,16,16),qe=new _i({color:"#10b981",emissive:"#10b981",emissiveIntensity:2,roughness:.1}),wt=new Wt(mt,qe);wt.position.y=.95,ye.add(wt),x.current=wt;const Ve=new Sm("#10b981",1.5,3);Ve.position.set(0,.95,0),ye.add(Ve),U.current=Ve,B.add(ye);const D=new Di(1.05,1.05,4,32,1,!0,0,Math.PI*1.55),T=new _i({color:"#f8fafc",roughness:.95,metalness:.05,side:yi,transparent:!0,opacity:.45}),te=new Wt(D,T);te.rotation.z=Math.PI/2,B.add(te);const me=new Di(.98,.98,3.9,32),ve=new _i({color:"#38bdf8",transparent:!0,opacity:.4,roughness:.1,metalness:.1}),he=new Wt(me,ve);he.rotation.z=Math.PI/2,S.current=he,B.add(he);const We=new Di(.24,.24,4.3,24),Ce=new by({color:"#e0f2fe",transmission:.92,opacity:.65,transparent:!0,roughness:.05,ior:1.48}),Ue=new Wt(We,Ce);Ue.rotation.z=Math.PI/2,B.add(Ue);const ut=new Di(.12,.12,4,16),be=new lf({color:"#c084fc",transparent:!0,opacity:.9}),ke=new Wt(ut,be);ke.rotation.z=Math.PI/2,b.current=ke,B.add(ke);const Ze=new ls(.35,.35,.35),et=new _i({color:"#0284c7",emissive:"#0284c7",emissiveIntensity:.8}),Be=new _i({color:"#7c3aed",emissive:"#7c3aed",emissiveIntensity:.8}),dt=new Wt(Ze,et);dt.position.set(-.6,0,1.4),B.add(dt);const it=new Wt(Ze,Be);it.position.set(.6,0,1.4),B.add(it);const Ct=[new Y(-.6,.25,1.4),new Y(.6,.25,1.4)],W=new Yn().setFromPoints(Ct),Re=new Ey(W,new Cy({color:"#c084fc",dashSize:.1,gapSize:.05}));B.add(Re);const ae=200,pe=new Yn,Ne=new Float32Array(ae*3),Pe=new Float32Array(ae);for(let Pt=0;Pt<ae;Pt++)Ne[Pt*3]=(Math.random()-.5)*3.8,Ne[Pt*3+1]=(Math.random()-.5)*1.5,Ne[Pt*3+2]=(Math.random()-.5)*1.5,Pe[Pt]=.5+Math.random()*.5;pe.setAttribute("position",new wi(Ne,3));const st=new F0({color:"#38bdf8",size:.08,transparent:!0,opacity:.75,blending:od}),Dt=new wy(pe,st);w.current=Dt,B.add(Dt);let zt=!1,vt={x:0,y:0},Qt=.3,Jt=-.4;const Fi=Pt=>{zt=!0,vt={x:Pt.clientX,y:Pt.clientY}},ai=Pt=>{if(!zt)return;const Pn=Pt.clientX-vt.x,xn=Pt.clientY-vt.y;vt={x:Pt.clientX,y:Pt.clientY},Jt+=Pn*.008,Qt+=xn*.008,Qt=Math.max(-1.2,Math.min(1.2,Qt))},Kn=()=>{zt=!1},Zn=Pt=>{Pt.preventDefault(),K.position.multiplyScalar(Pt.deltaY>0?1.05:.95),K.position.clampLength(3,15)},Qn=q.domElement;Qn.addEventListener("mousedown",Fi),window.addEventListener("mousemove",ai),window.addEventListener("mouseup",Kn),Qn.addEventListener("wheel",Zn,{passive:!1});let bi=new Ly;const li=()=>{N.current=requestAnimationFrame(li);const Pt=bi.getDelta(),Pn=H.current,xn=L.current,Ti=F.current;if(zt||(Jt+=Pt*.05),B.rotation.y=Jt,B.rotation.x=Qt,ee.position.x=-2.15-Ti*1.5,fe.position.x=2.15+Ti*1.5,O.position.y=-Ti*1.2,te.position.z=Ti*1.4,ye.position.y=1.75+Ti*1.2,S.current){const en=xn.tea,vn=new xt;en<=25?vn.set("#38bdf8"):en<=70?vn.set("#f59e0b"):vn.set("#991b1b"),S.current.material.color.lerp(vn,.1)}if(b.current){const en=b.current.material;if(!xn.coverClosed)en.opacity=0;else{const vn=xn.lampOutput/100*(Pn.sensorsOk?1:.3);en.opacity=.3+vn*.7}}if(x.current&&U.current){const en=x.current.material;if(Pn.valveOpen)en.color.set("#10b981"),en.emissive.set("#10b981"),U.current.color.set("#10b981");else{const vn=(Math.sin(bi.getElapsedTime()*6)+1)*.5;en.color.set("#f43f5e"),en.emissive.set("#f43f5e"),en.emissiveIntensity=1+vn*2.5,U.current.color.set("#f43f5e")}}if(w.current){const en=w.current.geometry.attributes.position,vn=en.array,Ir=Pn.valveOpen?Pn.flowMlPerSec:0;for(let ci=0;ci<ae;ci++)Ir>0&&(vn[ci*3]+=Pt*Ir*.5*Pe[ci],vn[ci*3]>1.9&&(vn[ci*3]=-1.9));en.needsUpdate=!0}q.render(k,K)};li();const Lr=()=>{if(!d.current||!q||!K)return;const Pt=d.current.clientWidth,Pn=d.current.clientHeight||460;K.aspect=Pt/Pn,K.updateProjectionMatrix(),q.setSize(Pt,Pn)};return window.addEventListener("resize",Lr),()=>{N.current&&cancelAnimationFrame(N.current),Qn.removeEventListener("mousedown",Fi),window.removeEventListener("mousemove",ai),window.removeEventListener("mouseup",Kn),Qn.removeEventListener("wheel",Zn),window.removeEventListener("resize",Lr),q.dispose()}},[n]);const z=C=>{v(C),y.current&&(C==="overview"?y.current.position.set(5.5,3.2,5):C==="cutaway"?y.current.position.set(0,.5,6.5):C==="valve"&&y.current.position.set(3.2,2.5,2.8),y.current.lookAt(0,0,0))};return u.jsxs("div",{className:"relative w-full rounded-3xl bg-obsidian-900/90 border border-slate-800 shadow-bezel overflow-hidden mb-6 backdrop-blur-md",children:[u.jsxs("div",{className:"absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none",children:[u.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-slate-200 shadow-lg",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-photon-cyan animate-ping"}),u.jsx("span",{className:"font-bold tracking-wider text-photon-cyan",children:n==="3d"?"3D LIVE REACTOR":"2D OPTICAL SCHEMATIC"}),u.jsx("span",{className:"text-slate-600",children:"|"}),u.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase",children:s.valveOpen?"FLOW ACTIVE":"FAIL-CLOSED"})]}),u.jsxs("div",{className:`hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase border backdrop-blur-md shadow-lg ${s.safetyState==="RUNNING"?"bg-emerald-950/80 text-emerald-400 border-emerald-500/40":s.safetyState==="THROTTLED"?"bg-amber-950/80 text-amber-400 border-amber-500/40":s.safetyState==="DEGRADED"?"bg-orange-950/80 text-orange-400 border-orange-500/40":"bg-rose-950/90 text-rose-400 border-rose-500/50 animate-hazard"}`,children:[s.valveOpen?u.jsx(i0,{className:"w-3.5 h-3.5"}):u.jsx(Zd,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:s.safetyState})]})]}),u.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[n==="3d"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"hidden md:flex items-center p-0.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono",children:[u.jsx("button",{onClick:()=>z("overview"),className:`px-2.5 py-1 rounded-lg transition-colors ${g==="overview"?"bg-photon-cyan/20 text-photon-cyan font-bold":"text-slate-400 hover:text-white"}`,children:"Overview"}),u.jsx("button",{onClick:()=>z("cutaway"),className:`px-2.5 py-1 rounded-lg transition-colors ${g==="cutaway"?"bg-photon-cyan/20 text-photon-cyan font-bold":"text-slate-400 hover:text-white"}`,children:"Cutaway"}),u.jsx("button",{onClick:()=>z("valve"),className:`px-2.5 py-1 rounded-lg transition-colors ${g==="valve"?"bg-photon-cyan/20 text-photon-cyan font-bold":"text-slate-400 hover:text-white"}`,children:"Valve"})]}),u.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-slate-300 shadow-lg",children:[u.jsx(a0,{className:"w-3.5 h-3.5 text-purple-400"}),u.jsx("span",{className:"hidden sm:inline",children:"CAD Explode:"}),u.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:h,onChange:C=>p(parseFloat(C.target.value)),className:"w-20 sm:w-28 accent-purple-400 cursor-pointer",title:"Explode 3D Assemblies"}),u.jsxs("span",{className:"w-8 text-right font-bold text-purple-300",children:[Math.round(h*100),"%"]})]})]}),u.jsxs("button",{onClick:c,className:"flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-obsidian-950/90 border border-slate-700/80 hover:border-photon-cyan/50 text-photon-cyan hover:text-white backdrop-blur-md text-xs font-mono font-medium transition-all shadow-lg active:scale-[0.98]",title:"Download Parametric .STL 3D Model File",children:[u.jsx(jl,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Export .STL"})]})]})]}),u.jsx("div",{className:"relative w-full h-[440px] sm:h-[480px] md:h-[520px]",children:n==="3d"?u.jsx("div",{ref:d,className:"w-full h-full cursor-grab active:cursor-grabbing select-none"}):u.jsxs("div",{className:"w-full h-full p-6 sm:p-10 flex flex-col justify-between bg-obsidian-950 font-mono text-xs select-none overflow-x-auto",children:[u.jsxs("div",{className:"text-center space-y-1",children:[u.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest text-photon-cyan",children:"DoseGuard 2.0 cm Calibrated Optical Path Schematic"}),u.jsx("p",{className:"text-[11px] text-slate-400",children:"Chamber Volume V = 30 mL • AISI 316L Stainless Steel Bore (Ø 25 mm × 61.12 mm)"})]}),u.jsx("div",{className:"relative my-4 max-w-2xl mx-auto w-full",children:u.jsxs("svg",{viewBox:"0 0 600 240",className:"w-full h-auto",children:[u.jsx("rect",{x:"50",y:"30",width:"500",height:"180",rx:"20",fill:"#080d14",stroke:"#1e2c40",strokeWidth:"2"}),u.jsx("rect",{x:"70",y:"45",width:"460",height:"150",rx:"12",fill:"none",stroke:"#64748b",strokeDasharray:"4 4",strokeWidth:"1.5"}),u.jsx("rect",{x:"80",y:"55",width:"440",height:"130",rx:"8",fill:e.tea<=25?"#0369a1":e.tea<=70?"#b45309":"#7f1d1d",fillOpacity:"0.35"}),u.jsx("rect",{x:"90",y:"70",width:"20",height:"100",rx:"4",fill:"#581c87",stroke:"#c084fc",strokeWidth:"2"}),u.jsx("text",{x:"100",y:"190",textAnchor:"middle",fill:"#c084fc",fontSize:"10",fontWeight:"bold",children:"4x 275nm"}),u.jsx("polygon",{points:"110,75 480,55 480,185 110,165",fill:"url(#uvGrad)",fillOpacity:e.coverClosed?e.lampOutput/100*.45:0}),u.jsx("rect",{x:"150",y:"40",width:"30",height:"15",rx:"3",fill:"#0284c7"}),u.jsx("text",{x:"165",y:"32",textAnchor:"middle",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",children:"PD-A (Ref)"}),u.jsx("line",{x1:"165",y1:"55",x2:"165",y2:"80",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"2 2"}),u.jsx("rect",{x:"350",y:"40",width:"30",height:"15",rx:"3",fill:"#7c3aed"}),u.jsx("text",{x:"365",y:"32",textAnchor:"middle",fill:"#c084fc",fontSize:"10",fontWeight:"bold",children:"PD-B (2.0 cm)"}),u.jsx("line",{x1:"365",y1:"55",x2:"365",y2:"80",stroke:"#c084fc",strokeWidth:"1.5",strokeDasharray:"2 2"}),u.jsx("line",{x1:"165",y1:"210",x2:"365",y2:"210",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsx("line",{x1:"165",y1:"205",x2:"165",y2:"215",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsx("line",{x1:"365",y1:"205",x2:"365",y2:"215",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("text",{x:"265",y:"225",textAnchor:"middle",fill:"#cbd5e1",fontSize:"11",fontWeight:"bold",children:["20.0 mm Calibrated Optical Gap (T = ",(s.T*100).toFixed(1),"%)"]}),u.jsx("rect",{x:"485",y:"20",width:"40",height:"40",rx:"6",fill:s.valveOpen?"#065f46":"#881337",stroke:s.valveOpen?"#34d399":"#f43f5e",strokeWidth:"2"}),u.jsx("text",{x:"505",y:"15",textAnchor:"middle",fill:s.valveOpen?"#34d399":"#f43f5e",fontSize:"10",fontWeight:"bold",children:s.valveOpen?"VALVE OPEN":"FAIL-CLOSED"}),u.jsx("defs",{children:u.jsxs("linearGradient",{id:"uvGrad",x1:"0",y1:"0",x2:"1",y2:"0",children:[u.jsx("stop",{offset:"0%",stopColor:"#c084fc",stopOpacity:"0.8"}),u.jsx("stop",{offset:"100%",stopColor:"#581c87",stopOpacity:"0.05"})]})})]})}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-3",children:[u.jsxs("span",{children:["Fluence Rate: ",u.jsxs("strong",{className:"text-photon-cyan",children:[s.fluence.toFixed(2)," mW/cm²"]})]}),u.jsxs("span",{children:["Flow Setting: ",u.jsxs("strong",{className:"text-photon-amber",children:[s.qSet.toFixed(2)," mL/s"]})]}),u.jsxs("span",{children:["Delivered Dose: ",u.jsxs("strong",{className:s.dose>=40?"text-emerald-400":"text-rose-400",children:[s.dose.toFixed(1)," mJ/cm²"]})]}),u.jsxs("span",{children:["Solenoid Type: ",u.jsx("strong",{className:"text-slate-200",children:"Normally-Closed (NC) Safe Default"})]})]})]})}),u.jsxs("div",{className:"px-6 py-2.5 border-t border-slate-800/80 bg-obsidian-950/70 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("span",{children:["Drag: ",u.jsx("strong",{children:"Rotate"})]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:["Scroll: ",u.jsx("strong",{children:"Zoom"})]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:["Right-Click: ",u.jsx("strong",{children:"Pan"})]})]}),u.jsxs("div",{className:"flex items-center space-x-2 text-slate-400",children:[u.jsxs("span",{children:["Flow: ",u.jsxs("strong",{className:s.valveOpen?"text-emerald-400":"text-rose-400",children:[s.flowLPerMin.toFixed(2)," L/min"]})]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:["Chamber: ",u.jsx("strong",{children:"30 mL 316L SS + Virgin PTFE Liner"})]})]})]})]})},xw=({telemetry:s,bufferCapacity:e,onSetBufferCapacity:n,totalLoggedCount:r})=>{const[a,c]=Ye.useState(null),d=800,h=240,p={top:20,right:50,bottom:35,left:55},g=d-p.left-p.right,v=h-p.top-p.bottom,_=65,y=.6,M=L=>{const F=Math.max(0,Math.min(_,L));return p.top+v-F/_*v},w=L=>{const F=Math.max(0,Math.min(y,L));return p.top+v-F/y*v},b=(L,F)=>F<=1?p.left:p.left+L/(F-1)*g,S=s.slice(-120),x=S.length;let U="",P="";S.forEach((L,F)=>{const z=b(F,x),C=M(L.dose),A=w(L.flowLPerMin);F===0?(U+=`M ${z.toFixed(1)} ${C.toFixed(1)}`,P+=`M ${z.toFixed(1)} ${A.toFixed(1)}`):(U+=` L ${z.toFixed(1)} ${C.toFixed(1)}`,P+=` L ${z.toFixed(1)} ${A.toFixed(1)}`)});const N=M(44),H=M(40);return u.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30",children:u.jsx(Qm,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase font-sans",children:"60-Second Real-Time Telemetry Stream"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Live UV Dose (mJ/cm²), NSF-55 Target (44), Cutoff Setpoint (40), and Dispense Flow (L/min)"})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 bg-photon-cyan rounded-full"}),u.jsx("span",{className:"text-slate-300",children:"Dose (mJ/cm²)"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 border-t-2 border-dashed border-emerald-400"}),u.jsx("span",{className:"text-emerald-400",children:"Target (44)"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 border-t-2 border-dashed border-rose-500"}),u.jsx("span",{className:"text-rose-400",children:"Fail-Safe (40)"})]}),u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"w-3 h-0.5 bg-photon-amber rounded-full"}),u.jsx("span",{className:"text-amber-300",children:"Flow (L/min)"})]})]})]}),u.jsx("div",{className:"relative w-full rounded-2xl bg-obsidian-950/80 border border-slate-850 p-2 overflow-hidden shadow-nested",children:u.jsxs("svg",{viewBox:`0 0 ${d} ${h}`,className:"w-full h-auto select-none",onMouseLeave:()=>c(null),children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"dangerZone",x1:"0",y1:"0",x2:"0",y2:"1",children:[u.jsx("stop",{offset:"0%",stopColor:"#f43f5e",stopOpacity:"0.14"}),u.jsx("stop",{offset:"100%",stopColor:"#f43f5e",stopOpacity:"0.02"})]}),u.jsxs("linearGradient",{id:"doseGlow",x1:"0",y1:"0",x2:"1",y2:"0",children:[u.jsx("stop",{offset:"0%",stopColor:"#00f2fe"}),u.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]})]}),u.jsx("rect",{x:p.left,y:H,width:g,height:v-(H-p.top),fill:"url(#dangerZone)"}),[0,20,40,44,60].map(L=>{const F=M(L),z=L===44,C=L===40;return u.jsxs("g",{children:[u.jsx("line",{x1:p.left,y1:F,x2:d-p.right,y2:F,stroke:z?"#10b981":C?"#f43f5e":"#1e2c40",strokeWidth:z||C?1.2:.8,strokeDasharray:z||C?"4 4":void 0,opacity:z||C?.7:.4}),u.jsx("text",{x:p.left-8,y:F+3,fill:z?"#34d399":C?"#f87171":"#64748b",fontSize:"10",fontWeight:z||C?"bold":"normal",fontFamily:"JetBrains Mono",textAnchor:"end",children:L})]},`grid-y-${L}`)}),[0,.2,.4,.6].map(L=>{const F=w(L);return u.jsx("text",{x:d-p.right+8,y:F+3,fill:"#f59e0b",fontSize:"10",fontFamily:"JetBrains Mono",textAnchor:"start",opacity:"0.8",children:L.toFixed(1)},`flow-label-${L}`)}),u.jsx("text",{x:p.left+10,y:N-5,fill:"#34d399",fontSize:"9",fontWeight:"bold",fontFamily:"JetBrains Mono",children:"TARGET DOSE (44 mJ/cm²)"}),u.jsx("text",{x:d-p.right-10,y:H+12,fill:"#f87171",fontSize:"9",fontWeight:"bold",fontFamily:"JetBrains Mono",textAnchor:"end",children:"FAIL-SAFE CUTOFF (40 mJ/cm²)"}),u.jsx("path",{d:P,fill:"none",stroke:"#f59e0b",strokeWidth:"2.0",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.9"}),u.jsx("path",{d:U,fill:"none",stroke:"url(#doseGlow)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),S.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:b(S.length-1,x),cy:M(S[S.length-1].dose),r:"4.5",fill:"#00f2fe",stroke:"#ffffff",strokeWidth:"1.5"}),u.jsx("circle",{cx:b(S.length-1,x),cy:w(S[S.length-1].flowLPerMin),r:"4",fill:"#f59e0b",stroke:"#ffffff",strokeWidth:"1.5"})]}),u.jsx("text",{x:p.left,y:h-10,fill:"#64748b",fontSize:"10",fontFamily:"JetBrains Mono",children:"-60s"}),u.jsx("text",{x:d-p.right,y:h-10,fill:"#38bdf8",fontSize:"10",fontWeight:"bold",fontFamily:"JetBrains Mono",textAnchor:"end",children:"NOW (Real-Time)"}),u.jsx("text",{x:p.left-24,y:p.top+v/2,fill:"#94a3b8",fontSize:"9",fontFamily:"JetBrains Mono",textAnchor:"middle",transform:`rotate(-90 ${p.left-24} ${p.top+v/2})`,children:"Dose (mJ/cm²)"}),u.jsx("text",{x:d-10,y:p.top+v/2,fill:"#f59e0b",fontSize:"9",fontFamily:"JetBrains Mono",textAnchor:"middle",transform:`rotate(90 ${d-10} ${p.top+v/2})`,children:"Flow (L/min)"})]})}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(e0,{className:"w-3.5 h-3.5 text-photon-cyan"}),u.jsx("span",{children:"Telemetry Buffer Capacity:"}),u.jsxs("strong",{className:"text-white",children:["(",r.toLocaleString()," points logged)"]})]}),u.jsx("div",{className:"flex items-center space-x-1.5",children:[{label:"3,600 (30m)",val:3600},{label:"7,200 (1h)",val:7200},{label:"14,400 (2h)",val:14400},{label:"Full Session",val:0}].map(L=>u.jsx("button",{onClick:()=>n(L.val),className:`px-2.5 py-1 rounded-lg border transition-all ${e===L.val?"bg-photon-cyan/20 text-photon-cyan border-photon-cyan/50 font-bold":"bg-obsidian-950 text-slate-400 border-slate-800 hover:text-white"}`,children:L.label},L.val))})]})]})},vw=({inputs:s,onUpdateInputs:e,onResetDefaults:n,calculatedUvtPerCm:r,calculatedA1:a,calculatedT:c})=>{const[d,h]=Ye.useState(!1),[p,g]=Ye.useState(0),[v,_]=Ye.useState(0);Ye.useEffect(()=>{if(!d)return;const w=[{name:"1/4: Clear Tap Water (Nominal 44 mJ/cm²)",tea:0,lamp:100,cover:!0,fault:!1},{name:"2/4: Borewell w/ Dissolved Iron (Adaptive Throttling)",tea:45,lamp:95,cover:!0,fault:!1},{name:"3/4: Monsoon Silt & Tannins (FAIL_CLOSED Cutoff)",tea:85,lamp:90,cover:!0,fault:!1},{name:"4/4: Interlock Safety Breach (Cover Open Power Cut)",tea:10,lamp:100,cover:!1,fault:!1}];let b=setInterval(()=>{_(S=>S>=100?(g(x=>{const U=(x+1)%w.length,P=w[U];return e({tea:P.tea,lampOutput:P.lamp,coverClosed:P.cover,sensorFault:P.fault}),U}),0):S+5)},500);return()=>clearInterval(b)},[d,e]);const y=()=>{h(!d),d||(g(0),_(0),e({tea:0,lampOutput:100,coverClosed:!0,sensorFault:!1}))},M=w=>{h(!1),w==="clear"?e({tea:0,lampOutput:100,coverClosed:!0,sensorFault:!1}):w==="borewell"?e({tea:45,lampOutput:95,coverClosed:!0,sensorFault:!1}):w==="monsoon"&&e({tea:85,lampOutput:90,coverClosed:!0,sensorFault:!1})};return u.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-5",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-purple-500/10 text-uv-bright border border-purple-500/30",children:u.jsx(a0,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase font-sans",children:"Mission Control & Scenario Simulator"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Inject Environmental Turbidity, Lamp Aging, Interlock Breaches & Hardware Faults"})]})]}),u.jsxs("button",{onClick:n,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-mono transition-colors",children:[u.jsx(s0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Reset Defaults"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6",children:[u.jsxs("button",{onClick:()=>M("clear"),className:`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all ${s.tea<=5&&s.coverClosed&&!s.sensorFault?"bg-photon-cyan/15 border-photon-cyan/50 text-white shadow-lg shadow-photon-cyan/10 ring-1 ring-photon-cyan/20":"bg-obsidian-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"}`,children:[u.jsx("div",{className:"p-2 rounded-xl bg-photon-cyan/20 text-photon-cyan mt-0.5",children:u.jsx(_v,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-bold leading-tight block",children:"Clear Tap Water"}),u.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"RUNNING (Max Flow)"})]})]}),u.jsxs("button",{onClick:()=>M("borewell"),className:`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all ${s.tea>30&&s.tea<=55&&s.coverClosed&&!s.sensorFault?"bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20":"bg-obsidian-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"}`,children:[u.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-400 mt-0.5",children:u.jsx(mv,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-bold leading-tight block",children:"Borewell w/ Iron"}),u.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"THROTTLED Control"})]})]}),u.jsxs("button",{onClick:()=>M("monsoon"),className:`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all ${s.tea>=80&&s.coverClosed&&!s.sensorFault?"bg-rose-500/15 border-rose-500/50 text-white shadow-lg shadow-rose-500/10 ring-1 ring-rose-500/20":"bg-obsidian-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700"}`,children:[u.jsx("div",{className:"p-2 rounded-xl bg-rose-500/20 text-rose-400 mt-0.5",children:u.jsx(Jx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs font-bold leading-tight block",children:"Monsoon Turbid"}),u.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"FAIL_CLOSED Cutoff"})]})]}),u.jsxs("button",{onClick:y,className:`flex items-start space-x-3 p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${d?"bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-uv-deep/40 border-purple-500/60 text-white shadow-lg shadow-purple-500/20 ring-1 ring-purple-400/40":"bg-obsidian-950/70 border-purple-500/30 text-purple-300 hover:bg-purple-950/30 hover:border-purple-500/50"}`,children:[u.jsx("div",{className:"p-2 rounded-xl bg-purple-500/20 text-purple-300 mt-0.5",children:d?u.jsx(Gp,{className:"w-4 h-4 animate-spin text-purple-200"}):u.jsx(r0,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-1.5",children:[u.jsx("span",{className:"text-xs font-bold leading-tight",children:"Auto Demo"}),d&&u.jsx("span",{className:"w-2 h-2 rounded-full bg-photon-cyan animate-ping"})]}),u.jsx("span",{className:"text-[11px] text-purple-300/80 font-mono",children:d?"Running Ramp...":"Screen-Rec Mode"})]})]})]}),d&&u.jsxs("div",{className:"p-3.5 rounded-2xl bg-purple-950/30 border border-purple-800/50 mb-5 space-y-2 animate-fade-in",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[u.jsxs("span",{className:"text-purple-200 font-semibold flex items-center gap-1.5",children:[u.jsx(Gp,{className:"w-3.5 h-3.5 text-purple-400 animate-pulse"}),u.jsx("span",{children:"Automated Presentation Sequence"})]}),u.jsxs("span",{className:"text-photon-cyan font-bold",children:[Math.round(v),"%"]})]}),u.jsx("div",{className:"w-full bg-obsidian-950 rounded-full h-2 overflow-hidden border border-purple-900/50",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-photon-cyan via-amber-400 to-rose-500 rounded-full transition-all duration-300",style:{width:`${v}%`}})})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 pt-2",children:[u.jsxs("div",{className:"space-y-2.5",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("label",{htmlFor:"tea-slider",className:"text-xs font-bold text-slate-200 flex items-center space-x-1.5 font-mono",children:[u.jsx(n0,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Water Absorbance / Turbidity (tea):"})]}),u.jsxs("div",{className:"flex items-center space-x-1 font-mono text-xs",children:[u.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-photon-cyan font-bold border border-slate-700",children:s.tea}),u.jsx("span",{className:"text-slate-500",children:"/ 100"})]})]}),u.jsx("input",{id:"tea-slider",type:"range",min:"0",max:"100",step:"1",value:s.tea,disabled:d,onChange:w=>e({tea:Number(w.target.value)}),className:"w-full h-2.5 bg-gradient-to-r from-sky-400 via-amber-500 to-amber-900 rounded-lg appearance-none cursor-pointer accent-photon-cyan disabled:opacity-50"}),u.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-400 font-mono",children:[u.jsx("button",{onClick:()=>e({tea:0}),disabled:d,className:"hover:text-photon-cyan transition-colors",children:"0 (Clear)"}),u.jsx("button",{onClick:()=>e({tea:30}),disabled:d,className:"hover:text-amber-300 transition-colors",children:"30 (Slight)"}),u.jsx("button",{onClick:()=>e({tea:60}),disabled:d,className:"hover:text-amber-400 transition-colors",children:"60 (Moderate)"}),u.jsx("button",{onClick:()=>e({tea:85}),disabled:d,className:"hover:text-rose-400 transition-colors",children:"85 (Critical)"}),u.jsx("button",{onClick:()=>e({tea:100}),disabled:d,className:"hover:text-rose-500 transition-colors",children:"100 (Max)"})]}),u.jsxs("div",{className:"p-2.5 rounded-xl bg-obsidian-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between",children:[u.jsx("span",{children:"Resulting Optical Properties:"}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("span",{className:"text-photon-cyan font-bold",children:["UVT: ",r.toFixed(1),"%/cm"]}),u.jsx("span",{className:"text-slate-600",children:"|"}),u.jsxs("span",{className:"text-slate-400",children:["A₁: ",a.toFixed(3)," cm⁻¹"]}),u.jsx("span",{className:"text-slate-600",children:"|"}),u.jsxs("span",{className:"text-purple-300 font-bold",children:["2cm T: ",(c*100).toFixed(1),"%"]})]})]})]}),u.jsxs("div",{className:"space-y-2.5",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("label",{htmlFor:"lamp-slider",className:"text-xs font-bold text-slate-200 flex items-center space-x-1.5 font-mono",children:[u.jsx(l0,{className:"w-3.5 h-3.5 text-uv-bright"}),u.jsx("span",{children:"UV Lamp Intensity Output:"})]}),u.jsx("div",{className:"flex items-center space-x-1 font-mono text-xs",children:u.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-bold border border-slate-700",children:[s.lampOutput,"%"]})})]}),u.jsx("input",{id:"lamp-slider",type:"range",min:"40",max:"100",step:"1",value:s.lampOutput,disabled:d,onChange:w=>e({lampOutput:Number(w.target.value)}),className:"w-full h-2.5 bg-gradient-to-r from-purple-800 via-purple-500 to-uv-bright rounded-lg appearance-none cursor-pointer accent-purple-400 disabled:opacity-50"}),u.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-400 font-mono",children:[u.jsx("button",{onClick:()=>e({lampOutput:40}),disabled:d,className:"hover:text-rose-400 transition-colors",children:"40% (Degraded)"}),u.jsx("button",{onClick:()=>e({lampOutput:60}),disabled:d,className:"hover:text-amber-400 transition-colors",children:"60%"}),u.jsx("button",{onClick:()=>e({lampOutput:80}),disabled:d,className:"hover:text-purple-300 transition-colors",children:"80%"}),u.jsx("button",{onClick:()=>e({lampOutput:100}),disabled:d,className:"hover:text-emerald-400 transition-colors",children:"100% (Nominal)"})]}),u.jsxs("div",{className:"p-2.5 rounded-xl bg-obsidian-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between",children:[u.jsx("span",{children:"Reference Irradiance:"}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("span",{className:"text-cyan-300 font-bold",children:["PD-A: ",(s.lampOutput/100).toFixed(2)," V"]}),u.jsx("span",{className:"text-slate-600",children:"|"}),u.jsx("span",{className:s.lampOutput<=50?"text-rose-400 font-bold":"text-emerald-400 font-bold",children:s.lampOutput<=50?"Low Intensity":"Optimal Radiant Flux"})]})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-slate-800/80",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex items-center justify-between",children:[u.jsxs("div",{className:"space-y-0.5",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-xs font-bold text-slate-200 font-mono",children:[s.coverClosed?u.jsx(Ko,{className:"w-4 h-4 text-emerald-400"}):u.jsx(o0,{className:"w-4 h-4 text-rose-400"}),u.jsx("span",{children:"Chamber Cover Interlock"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-mono",children:s.coverClosed?"Reed switch latched. UVC power safe.":"Breached! Hardware cuts UVC power in <1 ms."})]}),u.jsx("button",{onClick:()=>e({coverClosed:!s.coverClosed}),disabled:d,className:`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${s.coverClosed?"bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30":"bg-rose-500/20 text-rose-300 border-rose-500/50 hover:bg-rose-500/30 animate-pulse"}`,children:s.coverClosed?"Cover Closed":"Cover Breached"})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex items-center justify-between",children:[u.jsxs("div",{className:"space-y-0.5",children:[u.jsxs("div",{className:"flex items-center space-x-1.5 text-xs font-bold text-slate-200 font-mono",children:[u.jsx(is,{className:`w-4 h-4 ${s.sensorFault?"text-rose-400":"text-slate-400"}`}),u.jsx("span",{children:"Dual-Photodiode Fault Injection"})]}),u.jsx("p",{className:"text-[11px] text-slate-400 font-mono",children:s.sensorFault?"Corrupt ratio injected (PD-B > PD-A).":"Sensors within calibrated optical envelope."})]}),u.jsx("button",{onClick:()=>e({sensorFault:!s.sensorFault}),disabled:d,className:`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all ${s.sensorFault?"bg-rose-500/20 text-rose-300 border-rose-500/50 hover:bg-rose-500/30 animate-pulse":"bg-slate-800 text-slate-300 border-slate-700 hover:text-white"}`,children:s.sensorFault?"Fault Active":"Inject Fault"})]})]})]})},_w=({logs:s,currentState:e,stateReason:n,onClearLogs:r,onExportLogs:a})=>{const[c,d]=Ye.useState("ALL"),[h,p]=Ye.useState(""),g=s.filter(_=>{const y=c==="ALL"||_.state===c,M=h.trim()===""||_.reason.toLowerCase().includes(h.toLowerCase())||_.state.toLowerCase().includes(h.toLowerCase());return y&&M}),v=_=>{switch(_){case"RUNNING":return"bg-emerald-500/15 text-emerald-300 border-emerald-500/40";case"THROTTLED":return"bg-amber-500/15 text-amber-300 border-amber-500/40";case"DEGRADED":return"bg-orange-500/15 text-orange-300 border-orange-500/40";case"FAIL_CLOSED":return"bg-rose-500/20 text-rose-300 border-rose-500/50"}};return u.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:u.jsx(hv,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase font-sans",children:"Safety State Machine & Audit Log"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Deterministic Controller States, Transition Triggers & Historical Event Sequence"})]})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("button",{onClick:a,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-mono transition-colors",title:"Download audit logs as JSON",children:[u.jsx(jl,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Export Audit"})]}),u.jsxs("button",{onClick:r,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-700/80 text-xs font-mono transition-colors",title:"Clear event history",children:[u.jsx(Hv,{className:"w-3.5 h-3.5"}),u.jsx("span",{className:"hidden sm:inline",children:"Clear"})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 font-mono text-xs",children:[u.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all ${e==="RUNNING"?"bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg":"bg-obsidian-950/60 border-slate-800 opacity-60"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-slate-400",children:"STATE: 01"}),e==="RUNNING"&&u.jsx(Kd,{className:"w-4 h-4 text-emerald-400"})]}),u.jsx("h4",{className:"font-bold text-emerald-400 text-sm",children:"RUNNING"}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-1 leading-normal font-sans",children:"Nominal flow. Delivered dose ≥ 44 mJ/cm². Solenoid valve OPEN."})]}),u.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all ${e==="THROTTLED"?"bg-amber-950/40 border-amber-500/60 ring-1 ring-amber-500/30 shadow-lg":"bg-obsidian-950/60 border-slate-800 opacity-60"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-slate-400",children:"STATE: 02"}),e==="THROTTLED"&&u.jsx(is,{className:"w-4 h-4 text-amber-400"})]}),u.jsx("h4",{className:"font-bold text-amber-400 text-sm",children:"THROTTLED"}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-1 leading-normal font-sans",children:"Pump speed slowed to maintain 44 mJ/cm² dose. Valve OPEN."})]}),u.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all ${e==="DEGRADED"?"bg-orange-950/40 border-orange-500/60 ring-1 ring-orange-500/30 shadow-lg":"bg-obsidian-950/60 border-slate-800 opacity-60"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-slate-400",children:"STATE: 03"}),e==="DEGRADED"&&u.jsx(is,{className:"w-4 h-4 text-orange-400"})]}),u.jsx("h4",{className:"font-bold text-orange-400 text-sm",children:"DEGRADED"}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-1 leading-normal font-sans",children:"Pinned at Q_MIN (3.0 mL/s). Delivered dose 40–44 mJ/cm²."})]}),u.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all ${e==="FAIL_CLOSED"?"bg-rose-950/50 border-rose-500/70 ring-1 ring-rose-500/40 shadow-hazard-glow animate-hazard":"bg-obsidian-950/60 border-slate-800 opacity-60"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsx("span",{className:"text-[10px] text-slate-400",children:"STATE: 04"}),e==="FAIL_CLOSED"&&u.jsx(Zd,{className:"w-4 h-4 text-rose-400"})]}),u.jsx("h4",{className:"font-bold text-rose-400 text-sm",children:"FAIL_CLOSED"}),u.jsx("p",{className:"text-[11px] text-slate-400 mt-1 leading-normal font-sans",children:"Safety cutoff! Solenoid valve de-energized. Flow = 0.00 L/min."})]})]}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-obsidian-950/90 border border-slate-800 mb-4 flex items-start space-x-2.5 font-mono text-xs",children:[u.jsxs("div",{className:"mt-0.5",children:[e==="RUNNING"&&u.jsx(Ko,{className:"w-4 h-4 text-emerald-400"}),e==="THROTTLED"&&u.jsx(is,{className:"w-4 h-4 text-amber-400"}),e==="DEGRADED"&&u.jsx(is,{className:"w-4 h-4 text-orange-400"}),e==="FAIL_CLOSED"&&u.jsx(o0,{className:"w-4 h-4 text-rose-400"})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("span",{className:"text-slate-400 font-semibold block",children:"Active State Rationale:"}),u.jsx("p",{className:"text-white mt-0.5",children:n})]})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-3 text-xs font-mono",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-1.5",children:["ALL","RUNNING","THROTTLED","DEGRADED","FAIL_CLOSED"].map(_=>u.jsx("button",{onClick:()=>d(_),className:`px-2.5 py-1 rounded-lg border transition-all ${c===_?"bg-photon-cyan/20 text-photon-cyan border-photon-cyan/50 font-bold":"bg-obsidian-950 text-slate-400 border-slate-800 hover:text-white"}`,children:_},_))}),u.jsxs("div",{className:"relative",children:[u.jsx(Fv,{className:"w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500"}),u.jsx("input",{type:"text",placeholder:"Search event logs...",value:h,onChange:_=>p(_.target.value),className:"pl-8 pr-3 py-1 rounded-xl bg-obsidian-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-photon-cyan"})]})]}),u.jsx("div",{className:"rounded-2xl border border-slate-800/80 bg-obsidian-950/80 overflow-hidden max-h-56 overflow-y-auto font-mono text-xs divide-y divide-slate-800/60 shadow-nested",children:g.length===0?u.jsx("div",{className:"p-6 text-center text-slate-500",children:"No events matching current filter."}):g.map(_=>u.jsxs("div",{className:"p-3 hover:bg-slate-850/40 flex flex-wrap items-center justify-between gap-2 transition-colors",children:[u.jsxs("div",{className:"flex items-center space-x-2.5 min-w-[200px]",children:[u.jsx("span",{className:"text-slate-500 text-[11px]",children:_.timestamp}),u.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${v(_.state)}`,children:_.state}),u.jsx("span",{className:"text-slate-300 truncate max-w-sm sm:max-w-md font-sans",children:_.reason})]}),u.jsxs("div",{className:"flex items-center space-x-3 text-[11px] text-slate-400 ml-auto",children:[u.jsxs("span",{children:["Dose: ",u.jsx("strong",{className:_.dose>=40?"text-emerald-400":"text-rose-400",children:_.dose.toFixed(1)})]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:["Flow: ",u.jsxs("strong",{className:"text-amber-300",children:[_.flowLPerMin.toFixed(2)," L/m"]})]}),u.jsx("span",{children:"•"}),u.jsxs("span",{children:["UVT: ",u.jsxs("strong",{className:"text-cyan-300",children:[_.uvtPerCm.toFixed(1),"%"]})]})]})]},_.id))})]})},yw=({prognosis:s,onInstallNewLamp:e,speedMultiplier:n,onSetSpeedMultiplier:r})=>{const{currentPdA:a,criticalPdA:c,remainingHours:d,remainingDays:h,isUrgent:p,accumulatedHours:g,safetyMarginPct:v}=s,_=480,y=180,M={top:20,right:30,bottom:30,left:45},w=_-M.left-M.right,b=y-M.top-M.bottom,S=12e3,x=C=>M.top+b-Math.max(0,Math.min(1,C))/1*b,U=C=>M.left+Math.max(0,Math.min(S,C))/S*w,P=x(c),N=U(g),H=x(a),L=x(1),F=x(.3),z=d<=0?"EXPIRED":p?"SERVICE SOON":"OPTIMAL";return u.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-5",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-purple-500/10 text-uv-bright border border-purple-500/30",children:u.jsx(Wv,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase font-sans",children:"Predictive Lamp-Decay Forecasting Engine"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Photodiode Trend Regression & Service Lifetime Projection at Q_MIN (3.0 mL/s)"})]})]}),u.jsxs("button",{onClick:e,className:"flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs shadow-md shadow-purple-500/20 border border-purple-400/40 transition-all active:scale-[0.98]",children:[u.jsx(Qv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Install Brand-New Lamp"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 font-mono",children:[u.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col justify-between transition-all ${z==="EXPIRED"?"bg-rose-950/30 border-rose-500/50 shadow-hazard-glow":z==="SERVICE SOON"?"bg-amber-950/30 border-amber-500/50":"bg-obsidian-950/70 border-slate-800"}`,children:[u.jsxs("div",{className:"flex items-center justify-between text-xs",children:[u.jsx("span",{className:"text-slate-400",children:"Service Prognosis:"}),u.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${z==="EXPIRED"?"bg-rose-500/20 text-rose-300 border-rose-500/40":z==="SERVICE SOON"?"bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse":"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"}`,children:z})]}),u.jsxs("div",{className:"my-3",children:[u.jsxs("div",{className:"flex items-baseline space-x-2",children:[u.jsx("span",{className:`text-4xl font-black tracking-tight ${z==="EXPIRED"?"text-rose-400":z==="SERVICE SOON"?"text-amber-400":"text-purple-300"}`,children:z==="EXPIRED"?"0":h>=999?"> 999":Math.round(h)}),u.jsx("span",{className:"text-sm font-bold text-slate-400",children:"Days"})]}),u.jsx("p",{className:"text-xs text-slate-400 font-sans mt-1",children:z==="EXPIRED"?"Lamp irradiance depleted below Q_MIN safety envelope.":`≈ ${Math.round(d).toLocaleString()} operating hours remaining`})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2",children:[u.jsx("span",{children:"Runtime Tracked:"}),u.jsxs("span",{className:"text-white font-bold",children:[Math.round(g).toLocaleString()," hrs"]})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex flex-col justify-between",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs",children:[u.jsx("span",{className:"text-slate-400",children:"Optical Safety Margin:"}),u.jsx("span",{className:"text-photon-cyan font-bold",children:"PD-A vs Critical Floor"})]}),u.jsxs("div",{className:"space-y-2 my-2 text-xs",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Current PD-A:"}),u.jsxs("span",{className:"text-white font-bold",children:[a.toFixed(3)," V"]})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-slate-400",children:"Critical Cutoff Floor:"}),u.jsxs("span",{className:"text-rose-400 font-bold",children:[c.toFixed(3)," V"]})]}),u.jsxs("div",{className:"flex justify-between border-t border-slate-800/80 pt-1.5",children:[u.jsx("span",{className:"text-slate-300",children:"Safety Headroom:"}),u.jsxs("span",{className:`font-bold ${v>20?"text-emerald-400":"text-amber-400"}`,children:["+",v.toFixed(1),"%"]})]})]}),u.jsx("div",{className:"w-full bg-obsidian-900 rounded-full h-1.5 overflow-hidden border border-slate-800",children:u.jsx("div",{className:"h-full bg-gradient-to-r from-rose-500 via-amber-400 to-photon-cyan rounded-full transition-all duration-300",style:{width:`${Math.min(100,Math.max(0,v))}%`}})})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 flex flex-col justify-between",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[u.jsx("span",{className:"text-slate-300 font-bold",children:"L70 Decay Trajectory"}),u.jsx("span",{className:"text-[10px] text-purple-300 font-mono",children:"20% drop / 9,000 hrs"})]}),u.jsx("div",{className:"relative w-full h-28",children:u.jsxs("svg",{viewBox:`0 0 ${_} ${y}`,className:"w-full h-full",children:[[.3,.6,1].map(C=>{const A=x(C);return u.jsxs("g",{children:[u.jsx("line",{x1:M.left,y1:A,x2:_-M.right,y2:A,stroke:"#1e293b",strokeWidth:"1",strokeDasharray:"3 3"}),u.jsx("text",{x:M.left-6,y:A+3,fill:"#64748b",fontSize:"9",textAnchor:"end",children:C.toFixed(1)})]},`y-${C}`)}),u.jsx("line",{x1:M.left,y1:P,x2:_-M.right,y2:P,stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"4 4"}),u.jsxs("text",{x:_-M.right,y:P-4,fill:"#f43f5e",fontSize:"9",fontWeight:"bold",textAnchor:"end",children:["PD-A Crit (",c.toFixed(2),")"]}),u.jsx("line",{x1:M.left,y1:L,x2:U(12e3),y2:F,stroke:"#c084fc",strokeWidth:"2.5",strokeLinecap:"round"}),u.jsx("circle",{cx:N,cy:H,r:"5",fill:"#00f2fe",stroke:"#ffffff",strokeWidth:"2",className:n>1?"animate-ping":""}),u.jsx("text",{x:M.left,y:y-8,fill:"#64748b",fontSize:"9",children:"0 hrs"}),u.jsx("text",{x:_-M.right,y:y-8,fill:"#64748b",fontSize:"9",textAnchor:"end",children:"12k hrs"})]})}),u.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-1",children:[u.jsx("span",{children:"Simulation Clock:"}),u.jsxs("span",{className:"text-photon-cyan font-bold",children:[n,"x Speed"]})]})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/80 border border-slate-800/90 flex flex-wrap items-center justify-between gap-4 font-mono text-xs",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx(e0,{className:"w-4 h-4 text-purple-400"}),u.jsx("span",{className:"text-slate-300 font-semibold",children:"Lamp Aging Time-Acceleration Multiplier:"}),u.jsxs("span",{className:"px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40",children:[n,"x Speed"]})]}),u.jsx("div",{className:"flex items-center space-x-1.5",children:[1,10,100,1e3,1e4].map(C=>u.jsx("button",{onClick:()=>r(C),className:`px-3 py-1.5 rounded-xl border transition-all ${n===C?"bg-purple-600 text-white border-purple-400 font-bold shadow-md shadow-purple-500/20":"bg-obsidian-900 text-slate-400 border-slate-800 hover:text-white"}`,children:C===1?"1x (Real)":`${C.toLocaleString()}x`},C))})]})]})},W0={V:30,D_SET:40,D_TARGET:44,Q_MIN:3,Q_MAX:8.33,K:8.4,PATH:2,DECAY_RATE_PER_HOUR:.2/9e3};function Rl(s,e,n){return Math.max(e,Math.min(n,s))}function Sw(s,e=1,n=1){const{V:r,D_SET:a,D_TARGET:c,Q_MIN:d,Q_MAX:h,K:p,PATH:g}=W0,{tea:v,lampOutput:_,coverClosed:y,sensorFault:M}=s,w=Rl(v,0,100),b=.02+.0045*w,S=Math.pow(10,-g*b),x=Math.pow(S,1/g)*100,U=Rl(_,0,100)/100;let P=0,N=0;y&&!M?(P=U*e,N=P*S*n):y?M&&(P=U*.85,N=P*1.5):(P=0,N=0);const H=y&&!M&&P>.3&&N>0&&N<=1.05*P,L=Rl(P>1e-4?N/P:.02,.02,1),F=L>.999?1:(1-L)/-Math.log(L),z=p*P*F,C=Rl(z*r/c,d,h),A=C>0?z*r/C:0,k=H&&A>=a,K=k?C:0,q=K*.06;let oe="FAIL_CLOSED",ce="";return y?M?(oe="FAIL_CLOSED",ce="Hardware Fault: Dual-photodiode sanity check failed. Transmittance exceeds physical emitter envelope."):P<=.3?(oe="FAIL_CLOSED",ce=`UV Lamp Critical: Reference photodiode (${P.toFixed(2)}) depleted below safe operational floor (0.30).`):A<a?(oe="FAIL_CLOSED",ce=`Insufficient Dose: Delivered dose (${A.toFixed(1)} mJ/cm²) below NSF 55 Class A threshold (40.0 mJ/cm²). Solenoid tripped.`):k?C<=d+.001&&A<c&&A>=a?(oe="DEGRADED",ce=`Degraded Flow: Pump clamped at minimum limit (3.0 mL/s). Dose is ${A.toFixed(1)} mJ/cm² (margin +${(A-a).toFixed(1)} above cutoff).`):C<5||w>12?(oe="THROTTLED",ce=`Adaptive Control: Booster pump throttled to ${C.toFixed(2)} mL/s (${q.toFixed(2)} L/min) to maintain NSF-55 compliance.`):(oe="RUNNING",ce=`Nominal Operation: Optimal flow (${q.toFixed(2)} L/min) delivering verified ${A.toFixed(1)} mJ/cm² dose.`):(oe="FAIL_CLOSED",ce="Safety trip: Dispensing valve de-energized fail-closed."):(oe="FAIL_CLOSED",ce="Safety Interlock: Reactor access cover breached. UVC LED power cut via hardware reed switch."),{A1:b,T:S,uvtPerCm:x,pdA:P,pdB:N,sensorsOk:H,tRatio:L,absorptionFactor:F,fluence:z,qSet:C,dose:A,valveOpen:k,flowMlPerSec:K,flowLPerMin:q,safetyState:oe,stateReason:ce}}function Mw(s,e,n,r=1){const{D_SET:a,Q_MIN:c,K:d,V:h,DECAY_RATE_PER_HOUR:p}=W0,g=Math.max(.02,e),v=Math.max(.301,a*c/(d*g*h)),_=s-v,y=Math.max(0,_/v*100);let M=0;_>0&&p>0&&(M=_/p);const w=M/24,b=_<=.04||s<=.35;return{currentPdA:s,criticalPdA:v,remainingHours:Math.max(0,M),remainingDays:Math.max(0,w),isUrgent:b,decayRatePerHour:p*r,accumulatedHours:n,safetyMarginPct:y}}const Ym=`// DoseGuard UV Reactor Chamber - Parametric CAD Model (OpenSCAD)
// Team SpaceX, KIIT | atomQUEST 2026 - Track 2 Water Purifier
// Units: Millimeters (mm)

$fn = 64;

// Key Dimensional Parameters
chamber_id = 25.0;            // Internal Diameter (mm)
chamber_length = 61.12;       // Internal Length for 30.0 mL volume (pi * 12.5^2 * 61.12 = 30000 mm^3)
wall_thickness = 3.5;         // 316 Stainless Steel pressure containment wall
chamber_od = chamber_id + 2 * wall_thickness; // 32.0 mm Outer Diameter

ptfe_liner_thickness = 1.5;   // Virgin PTFE diffuse reflectance sleeve (>90% refl @ 275nm)
optical_path_length = 20.0;   // Exact 2.0 cm calibrated path between emitter & PD-B

window_diameter = 15.0;       // Fused-silica optical window OD (Suprasil 300)
window_thickness = 2.0;       // Quartz window thickness

port_npt_diameter = 11.5;     // 1/4" NPT fluid port tapping diameter

module reactor_body() {
    difference() {
        // Main 316L SS Machined Cylinder Body
        cylinder(h = chamber_length, d = chamber_od, center = true);
        
        // 30 mL Fluid Reaction Bore
        cylinder(h = chamber_length + 2, d = chamber_id, center = true);
        
        // Port 1: Raw Water Inlet (Lateral, -X)
        translate([-(chamber_od / 2), 0, -(chamber_length / 2) + 12])
            rotate([0, -90, 0])
                cylinder(h = 10, d = port_npt_diameter);
                
        // Port 2: Disinfected Water Outlet (Lateral, +X)
        translate([(chamber_od / 2), 0, (chamber_length / 2) - 12])
            rotate([0, 90, 0])
                cylinder(h = 10, d = port_npt_diameter);
                
        // Port 3: PD-A Source Photodiode Optical Port (0 mm gap monitor)
        translate([0, (chamber_od / 2), -(optical_path_length / 2)])
            rotate([-90, 0, 0])
                cylinder(h = 10, d = window_diameter);
                
        // Port 4: PD-B Attenuated Photodiode Optical Port (20.0 mm water path)
        translate([0, (chamber_od / 2), (optical_path_length / 2)])
            rotate([-90, 0, 0])
                cylinder(h = 10, d = window_diameter);
    }
}

module ptfe_liner() {
    difference() {
        cylinder(h = chamber_length - 4, d = chamber_id - 0.1, center = true);
        cylinder(h = chamber_length, d = chamber_id - 2 * ptfe_liner_thickness, center = true);
    }
}

// Render Assembled Geometry
color([0.7, 0.75, 0.8, 0.85]) reactor_body();
color([0.95, 0.95, 0.95, 0.6]) ptfe_liner();
`,Ew=[{component:"ESP32 Dev Board + ADS1115 ADC",qty:"1 + 1",spec:"Dual-core MCU, Wi-Fi/MQTT, 16-bit 4-channel oversampled analog acquisition",approxInr:800,risk:"Low (Off-the-shelf local)"},{component:"275 nm UVC LEDs + CC Driver",qty:"4 + 1",spec:"AlGaN deep UVC source (60 mW radiant flux), MCPCB heat sink, hardware enable line",approxInr:6e3,risk:"High (Import 2-3 wks)"},{component:"SiC UVC Photodiodes + TIA Op-Amps",qty:"2",spec:"sglux SG01S-C18 solar-blind SiC sensors + low-drift transimpedance amplifiers",approxInr:3e3,risk:"Medium (Specialized vendor)"},{component:"Fused-Silica Quartz Windows",qty:"3",spec:"Ø 15.0 mm × 2.0 mm Suprasil 300 UVC-grade optical windows (>92% transmission)",approxInr:2500,risk:"Medium (Precision optics)"},{component:"PTFE-Lined 316L SS Reactor Body",qty:"1",spec:"CNC machined 316L stainless body (30 mL bore) + virgin PTFE diffuse liner (>90% refl)",approxInr:3500,risk:"Low (Local CNC machine shop)"},{component:"Hall-Effect Flow Meter",qty:"1",spec:"0.1 - 2.0 L/min pulse output flow sensor for real-time residence time calculation",approxInr:400,risk:"Low (Off-the-shelf)"},{component:"24V Diaphragm Pump + PWM Driver",qty:"1",spec:"Variable displacement booster pump with low-noise MOSFET PWM speed control",approxInr:1800,risk:"Low (Standard purifier pump)"},{component:"Normally-Closed Solenoid Valve",qty:"1",spec:"Food-grade 24V NC valve, spring-return shutoff in <2s upon power/dose fail",approxInr:800,risk:"Low (Standard fail-closed)"},{component:"Safety Interlock (Reed Switch & NTC)",qty:"1 set",spec:"Hermetic magnetic reed switch for cover cut + 10k NTC thermal safety derating",approxInr:1500,risk:"Low (Off-the-shelf)"},{component:"Plumbing, Test Rig Chassis & Power Supply",qty:"1 set",spec:"Laser-cut acrylic test rig, food-grade silicone tubing, 24V 5A power brick",approxInr:7700,risk:"Low (Fabrication lab)"}],ww=[{feature:"UV Dosage Verification",conventional:"Blind / None (Assumes lamp is bright)",timerBased:"None (Timer counts calendar months)",doseguard:"Continuous Real-Time Measurement (mJ/cm²)",advantage:"Guarantees microbiological destruction per NSF-55"},{feature:"Turbidity & Tannin Compensation",conventional:"Fixed pump flow (Under-doses turbid water)",timerBased:"Fixed pump flow (Zero compensation)",doseguard:"Adaptive Closed-Loop PID Flow Throttling",advantage:"Slows down flow to deliver required UV photon fluence"},{feature:"Safety Shutoff Mechanism",conventional:"None (Continues dispensing bad water)",timerBased:"None (Only beeps on calendar expiry)",doseguard:"Hardware Fail-Closed NC Solenoid (<2s Cutoff)",advantage:"Physical water shutoff prevents drinking untreated water"},{feature:"Chamber Cover Interlock",conventional:"None (UV light exposure hazard)",timerBased:"None (Unprotected)",doseguard:"Hardware Reed Switch Interrupt Power Cut",advantage:"Instantaneous eye/skin UVC radiation protection"},{feature:"Lamp Life Prognosis",conventional:"Arbitrary 12-month calendar change",timerBased:"Hour counter (Ignores actual LED degradation)",doseguard:"Physics-Informed L70 Irradiance Decay Model",advantage:"Condition-based predictive maintenance alerts"},{feature:"Atomberg Mass-Production Cost",conventional:"Baseline",timerBased:"+₹150 (Basic EEPROM)",doseguard:"+₹800 (Add-on module integrating with Atomberg IoT)",advantage:"High margin, premium USP for smart home purifiers"}],bw=[{scene:"Scene 1: Problem Framing",timestamp:"0:00 - 0:15 (15s)",spoken:"“Today, the UV stage in home purifiers is a silent black box. Sources degrade invisibly, and water with iron or dissolved tannins drops UV transmittance without changing TDS. The user drinks under-disinfected water with zero warning. We are Team SpaceX from KIIT, presenting DoseGuard.”",visual:"Camera on 3D Live Reactor running clear water, then transitioning to mission control dashboard showing stable 44.0 mJ/cm² dose."},{scene:"Scene 2: 3D CAD & Hardware Architecture",timestamp:"0:15 - 0:35 (20s)",spoken:"“Here is our 30 mL reactor CAD design. Four 275 nm UVC LEDs radiate through fused-silica windows inside a high-reflectivity PTFE-lined 316 stainless body. Two SiC photodiodes form an optical ratio: PD-A measures source irradiance, while PD-B measures light after a calibrated 2.0 cm water path, calculating real-time UV transmittance.”",visual:"Switch to 3D Exploded View! Show the separated 316L SS shell, PTFE liner, 4x LEDs, and dual photodiodes across the 20 mm gap."},{scene:"Scene 3: Live Closed-Loop Control & Fail-Safe Trip",timestamp:"0:35 - 0:55 (20s)",spoken:"“Watch our closed-loop in action. When tea tannins cut UVT down to 70%, our PI controller adaptively throttles pump flow to guarantee the NSF 55 Class A benchmark of 40 mJ/cm². But if water quality degrades beyond recovery, our normally-closed solenoid valve trips shut in under two seconds—failing safe.”",visual:"Trigger the Monsoon Turbid scenario. Show the solenoid valve de-energizing shut, beacon pulsing red, and particle flow stopping instantly."},{scene:"Scene 4: Interlock Safety & Predictive Maintenance",timestamp:"0:55 - 1:15 (20s)",spoken:"“Safety is hardware-enforced. A magnetic reed switch cuts UVC LED power the millisecond the cover is breached. Simultaneously, our physics-informed decay model tracks LED degradation over operating hours, replacing calendar-based guesswork with predictive filter replacement alerts.”",visual:"Open the interlock cover—show violet UV beam cutting instantly. Show the Lamp Forecast Card with days-remaining prognosis."},{scene:"Scene 5: Feasibility & Atomberg Fit",timestamp:"1:15 - 1:30 (15s)",spoken:"“DoseGuard is not an expensive new purifier—it is an elegant ₹800 mass-production add-on designed for Atomberg’s BLDC motor and IoT ecosystem. We deliver verified microbiological safety with closed-loop engineering. Thank you.”",visual:"Closing shot of Team SpaceX logo, KIIT, and live production deployment URL."}],Tw=()=>u.jsxs("div",{className:"rounded-3xl p-5 sm:p-6 bg-obsidian-900/90 border border-slate-800 shadow-bezel backdrop-blur-md mb-6",children:[u.jsxs("div",{className:"flex items-center space-x-2.5 mb-5",children:[u.jsx("div",{className:"p-2 rounded-xl bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30",children:u.jsx(t0,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm font-bold tracking-wider text-white uppercase font-sans",children:"Competitive Technological Advantage & Atomberg Fit"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"How DoseGuard Outperforms Blind UV Purifiers Across Indian Water Conditions"})]})]}),u.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-950/70 shadow-nested",children:u.jsxs("table",{className:"w-full text-left border-collapse text-xs font-mono",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"bg-obsidian-950 border-b border-slate-800 text-slate-400 text-[11px]",children:[u.jsx("th",{className:"p-3.5",children:"Engineering Parameter"}),u.jsx("th",{className:"p-3.5",children:"Conventional Purifiers"}),u.jsx("th",{className:"p-3.5",children:"Timer-Alert Purifiers"}),u.jsx("th",{className:"p-3.5 bg-photon-cyan/5 text-photon-cyan border-x border-slate-800",children:"DoseGuard™ Controller"}),u.jsx("th",{className:"p-3.5 hidden md:table-cell",children:"Microbiological Safety Impact"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:ww.map((s,e)=>u.jsxs("tr",{className:"hover:bg-slate-850/30 transition-colors",children:[u.jsx("td",{className:"p-3.5 font-bold text-white font-sans",children:s.feature}),u.jsx("td",{className:"p-3.5 text-slate-400",children:u.jsxs("div",{className:"flex items-center space-x-1.5 text-rose-400/90",children:[u.jsx(Qd,{className:"w-3.5 h-3.5 flex-shrink-0"}),u.jsx("span",{children:s.conventional})]})}),u.jsx("td",{className:"p-3.5 text-slate-400",children:u.jsxs("div",{className:"flex items-center space-x-1.5 text-amber-400/90",children:[u.jsx(is,{className:"w-3.5 h-3.5 flex-shrink-0"}),u.jsx("span",{children:s.timerBased})]})}),u.jsx("td",{className:"p-3.5 bg-photon-cyan/5 border-x border-slate-800 font-bold text-white",children:u.jsxs("div",{className:"flex items-center space-x-1.5 text-photon-cyan",children:[u.jsx(Jm,{className:"w-4 h-4 flex-shrink-0 text-emerald-400"}),u.jsx("span",{children:s.doseguard})]})}),u.jsx("td",{className:"p-3.5 hidden md:table-cell text-slate-400 text-[11px] font-sans",children:s.advantage})]},e))})]})})]}),Aw=({isOpen:s,onClose:e,onExportStl:n,onShowToast:r})=>{const[a,c]=Ye.useState("specs"),[d,h]=Ye.useState(!1);if(!s)return null;const p=()=>{navigator.clipboard.writeText(Ym).then(()=>{h(!0),r("✓ Copied to Clipboard","OpenSCAD parametric CAD model code ready to paste.","success"),setTimeout(()=>h(!1),2500)})};return u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in",children:u.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-obsidian-900 border border-slate-700/80 shadow-2xl overflow-hidden ring-1 ring-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-obsidian-950/80",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"p-2 rounded-xl bg-photon-cyan/10 text-photon-cyan border border-photon-cyan/30",children:u.jsx(sd,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("h2",{className:"text-base sm:text-lg font-bold text-white tracking-tight font-sans",children:"DoseGuard™ 3D CAD & Engineering Blueprint"}),u.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded-full bg-photon-cyan/15 text-photon-cyan border border-photon-cyan/30 font-mono",children:"atomQUEST 2026"})]}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Team SpaceX (KIIT) • Track 2: Smart Water Purifier • 30 mL Reaction Chamber"})]})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("button",{onClick:n,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-photon-cyan to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-obsidian-950 text-xs font-mono font-bold shadow-lg shadow-photon-cyan/20 transition-all active:scale-[0.98]",title:"Download 3D CAD mesh in .STL format",children:[u.jsx(jl,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Export .STL"})]}),u.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",children:u.jsx(Qd,{className:"w-5 h-5"})})]})]}),u.jsx("div",{className:"flex items-center space-x-1 px-6 pt-2 border-b border-slate-800 bg-obsidian-950/40 text-xs font-mono overflow-x-auto",children:[{id:"specs",label:"CAD Specs & Dimensions",icon:qo},{id:"cad",label:"OpenSCAD / Fusion Script",icon:sd},{id:"bom",label:"Prototype BOM (₹28,000)",icon:ov},{id:"video",label:"90-Sec Video Script",icon:qv},{id:"math",label:"Physics & Equations",icon:zx}].map(g=>{const v=g.icon,_=a===g.id;return u.jsxs("button",{onClick:()=>c(g.id),className:`flex items-center space-x-2 px-3.5 py-2.5 border-b-2 font-semibold transition-all whitespace-nowrap ${_?"border-photon-cyan text-photon-cyan bg-photon-cyan/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[u.jsx(v,{className:"w-4 h-4"}),u.jsx("span",{children:g.label})]},g.id)})}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 font-mono text-xs text-slate-300",children:[a==="specs"&&u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-photon-cyan font-bold text-sm",children:[u.jsx(qo,{className:"w-4 h-4"}),u.jsx("span",{children:"Reactor Chamber Core Geometry"})]}),u.jsxs("div",{className:"space-y-2 text-slate-300",children:[u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Internal Fluid Volume (V):"}),u.jsx("strong",{className:"text-white",children:"30.0 mL (30,000 mm³)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Bore Internal Diameter (ID):"}),u.jsx("strong",{className:"text-photon-cyan",children:"Ø 25.0 mm (±0.05 mm)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Active Chamber Length (L):"}),u.jsx("strong",{className:"text-photon-cyan",children:"61.12 mm (V = π · r² · L)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Outer Shell Diameter (OD):"}),u.jsx("strong",{className:"text-slate-200",children:"Ø 32.0 mm (3.5 mm 316L SS Wall)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Wetted Metal Material:"}),u.jsx("strong",{className:"text-emerald-400",children:"AISI 316L Stainless Steel"})]}),u.jsxs("div",{className:"flex justify-between pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Hydraulic Pressure Rating:"}),u.jsx("strong",{className:"text-slate-200",children:"Tested to 8.0 bar (116 PSI)"})]})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-purple-400 font-bold text-sm",children:[u.jsx(t0,{className:"w-4 h-4"}),u.jsx("span",{children:"Optics, Windows & Dual Sensors"})]}),u.jsxs("div",{className:"space-y-2 text-slate-300",children:[u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Calibrated Water Optical Gap:"}),u.jsx("strong",{className:"text-purple-300",children:"20.0 mm (2.00 cm ±0.1 mm)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Fused-Silica Windows (3x):"}),u.jsx("strong",{className:"text-white",children:"Ø 15.0 mm × 2.0 mm (Suprasil 300)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"UVC Emitter Board:"}),u.jsx("strong",{className:"text-photon-cyan",children:"4x 275 nm LEDs + MCPCB Al Heat Sink"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"SiC Photodiodes (2x):"}),u.jsx("strong",{className:"text-sky-300",children:"sglux SG01S-C18 (Solar-Blind UVC)"})]}),u.jsxs("div",{className:"flex justify-between border-b border-slate-800/80 pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Internal Reflective Liner:"}),u.jsx("strong",{className:"text-emerald-400",children:"Virgin PTFE (>90% Diffuse Refl)"})]}),u.jsxs("div",{className:"flex justify-between pb-1",children:[u.jsx("span",{className:"text-slate-400",children:"Static Seals (O-Rings):"}),u.jsx("strong",{className:"text-slate-200",children:"Food-Grade EPDM (FDA 21 CFR 177)"})]})]})]})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950/70 border border-slate-800 space-y-3",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-emerald-400 font-bold text-sm",children:[u.jsx(Ko,{className:"w-4 h-4"}),u.jsx("span",{children:"Hydraulics & Fail-Safe Actuation Architecture"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-obsidian-900 border border-slate-800 space-y-1",children:[u.jsx("span",{className:"text-[11px] text-slate-400",children:"Booster Pump Control:"}),u.jsx("p",{className:"font-bold text-photon-cyan",children:"24V Diaphragm Pump"}),u.jsx("p",{className:"text-[10px] text-slate-400",children:"PWM Speed Controlled via PI loop at 2 Hz update rate"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-obsidian-900 border border-slate-800 space-y-1",children:[u.jsx("span",{className:"text-[11px] text-slate-400",children:"Fail-Closed Safety Valve:"}),u.jsx("p",{className:"font-bold text-rose-400",children:"Normally-Closed Solenoid"}),u.jsx("p",{className:"text-[10px] text-slate-400",children:"De-energized shut in <2s when Dose < 40 mJ/cm² or power cut"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-obsidian-900 border border-slate-800 space-y-1",children:[u.jsx("span",{className:"text-[11px] text-slate-400",children:"Interlock Protection:"}),u.jsx("p",{className:"font-bold text-amber-400",children:"Magnetic Reed Switch"}),u.jsx("p",{className:"text-[10px] text-slate-400",children:"Hardware interrupt directly cuts UVC LED driver power in <1 ms"})]})]})]})]}),a==="cad"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-sm text-white font-sans",children:"Parametric OpenSCAD / Fusion 360 Script"}),u.jsx("p",{className:"text-xs text-slate-400",children:"Use this script to generate exact solids in Onshape, Autodesk Fusion 360, or OpenSCAD."})]}),u.jsxs("button",{onClick:p,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-obsidian-850 hover:bg-slate-850 text-photon-cyan border border-slate-700 transition-colors",children:[d?u.jsx(Jm,{className:"w-3.5 h-3.5 text-emerald-400"}):u.jsx(iv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:d?"Copied!":"Copy Script"})]})]}),u.jsx("pre",{className:"p-4 rounded-2xl bg-obsidian-950 border border-slate-800 text-photon-cyan/90 overflow-x-auto max-h-[380px] leading-relaxed select-all",children:u.jsx("code",{children:Ym})})]}),a==="bom"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-sm text-white font-sans",children:"Prototype Sourcing & Execution Budget"}),u.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Verified against Team SpaceX Stage 1 Abstract Submission (Order of Magnitude: ₹28,000)"})]}),u.jsx("span",{className:"px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold",children:"Total Prototype Cost: ₹28,000"})]}),u.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 bg-obsidian-950 shadow-nested",children:u.jsxs("table",{className:"w-full text-left border-collapse",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"bg-obsidian-950 border-b border-slate-800 text-slate-400 text-[11px]",children:[u.jsx("th",{className:"p-3",children:"Component"}),u.jsx("th",{className:"p-3",children:"Qty"}),u.jsx("th",{className:"p-3",children:"Purpose / Technical Specification"}),u.jsx("th",{className:"p-3 text-right",children:"Approx. ₹"}),u.jsx("th",{className:"p-3",children:"Sourcing Risk"})]})}),u.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:Ew.map((g,v)=>u.jsxs("tr",{className:"hover:bg-slate-850/40 transition-colors",children:[u.jsx("td",{className:"p-3 font-bold text-white font-sans",children:g.component}),u.jsx("td",{className:"p-3",children:g.qty}),u.jsx("td",{className:"p-3 text-slate-400",children:g.spec}),u.jsx("td",{className:"p-3 text-right text-photon-cyan font-bold",children:g.approxInr.toLocaleString()}),u.jsx("td",{className:"p-3 text-slate-300",children:g.risk})]},v))})]})}),u.jsxs("div",{className:"p-3.5 rounded-2xl bg-photon-cyan/5 border border-photon-cyan/20 text-xs text-slate-300 flex items-start space-x-2",children:[u.jsx(Kd,{className:"w-4 h-4 text-photon-cyan mt-0.5 flex-shrink-0"}),u.jsxs("p",{children:[u.jsx("strong",{className:"text-white",children:"Atomberg Mass-Production Cost Target: ₹800"})," — In high-volume production, the add-on module replaces dedicated drivers with Atomberg’s main BLDC motor controller board, uses dual SMD photodiode packages, and utilizes existing IoT MCU lines, bringing marginal BOM cost to under ₹800."]})]})]}),a==="video"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-sm text-purple-200 font-sans",children:"atomQUEST 2026 • Round 2 Level 1 Video Submission"}),u.jsx("p",{className:"text-xs text-purple-300/80",children:"Exact 90-second script & storyboard for Team SpaceX (KIIT) to showcase DoseGuard."})]}),u.jsx("span",{className:"px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold",children:"Target: 01:30 Max"})]}),u.jsx("div",{className:"space-y-3",children:bw.map((g,v)=>u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between text-photon-cyan font-bold",children:[u.jsx("span",{children:g.scene}),u.jsx("span",{className:"text-[11px] text-slate-500",children:g.timestamp})]}),u.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed",children:[u.jsx("strong",{className:"text-white font-mono",children:"Spoken Audio:"})," ",g.spoken]}),u.jsxs("p",{className:"text-[11px] text-slate-400",children:[u.jsx("strong",{className:"text-amber-400",children:"Visual:"})," ",g.visual]})]},v))})]}),a==="math"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"font-bold text-sm text-white font-sans",children:"DoseGuard Photochemical & Radiative Control Model"}),u.jsx("p",{className:"text-xs text-slate-400",children:"Exact mathematical equations governing real-time firmware execution at 2 Hz."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2",children:[u.jsx("span",{className:"text-photon-cyan font-bold block",children:"1. Optical Transmittance & Sensors"}),u.jsx("p",{children:"• A₁ = 0.02 + 0.0045 · tea (Absorbance at 1 cm, cm⁻¹)"}),u.jsx("p",{children:"• T = 10^(-PATH · A₁) (Transmittance over PATH = 2.0 cm)"}),u.jsx("p",{children:"• PD-A = (coverClosed && !fault) ? (lampOutput / 100) · noise : 0"}),u.jsx("p",{children:"• PD-B = PD-A · T · noise (noise = 1 ± 0.5%)"}),u.jsx("p",{children:"• sensorsOk = coverClosed && !fault && PD-A > 0.30 && PD-B > 0 && PD-B ≤ 1.05·PD-A"})]}),u.jsxs("div",{className:"p-4 rounded-2xl bg-obsidian-950 border border-slate-800 space-y-2",children:[u.jsx("span",{className:"text-purple-400 font-bold block",children:"2. Chamber Fluence & Adaptive Dosing"}),u.jsx("p",{children:"• tRatio = clamp(PD-B / PD-A, 0.02, 1.0)"}),u.jsx("p",{children:"• af = tRatio > 0.999 ? 1.0 : (1 - tRatio) / (-ln tRatio) (Mean fluence factor)"}),u.jsx("p",{children:"• Fluence Rate F = K · PD-A · af (where K = 8.4 mW/cm²)"}),u.jsx("p",{children:"• qSet = clamp(F · V / D_TARGET, Q_MIN, Q_MAX) (V = 30 mL, D_TARGET = 44 mJ/cm²)"}),u.jsx("p",{children:"• Delivered Dose = F · V / qSet"}),u.jsx("p",{children:"• valveOpen = sensorsOk && (Dose ≥ D_SET = 40 mJ/cm²) (Fail-Closed)"})]})]})]})]}),u.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-obsidian-950/80 flex items-center justify-between text-xs font-mono text-slate-400",children:[u.jsx("span",{children:"Target CAD Environment: Autodesk Fusion 360 / Onshape / SolidWorks"}),u.jsx("button",{onClick:e,className:"px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors",children:"Close Blueprint"})]})]})})},Cw=({toasts:s,onDismiss:e})=>u.jsx("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full",children:s.map(n=>u.jsxs("div",{className:"pointer-events-auto flex items-start space-x-3 p-3.5 rounded-2xl bg-obsidian-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl text-slate-200 animate-fade-in ring-1 ring-white/10",children:[u.jsxs("div",{className:"mt-0.5 flex-shrink-0",children:[n.type==="success"&&u.jsx(Kd,{className:"w-5 h-5 text-emerald-400"}),n.type==="warning"&&u.jsx(is,{className:"w-5 h-5 text-amber-400"}),n.type==="error"&&u.jsx(Yx,{className:"w-5 h-5 text-rose-400"}),(!n.type||n.type==="info")&&u.jsx(Sv,{className:"w-5 h-5 text-photon-cyan"})]}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("p",{className:"text-xs font-bold text-white tracking-wide",children:n.title}),n.description&&u.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5 leading-relaxed",children:n.description})]}),u.jsx("button",{onClick:()=>e(n.id),className:"flex-shrink-0 p-1 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 transition-colors",children:u.jsx(Qd,{className:"w-3.5 h-3.5"})})]},n.id))}),Rw=()=>{const[s,e]=Ye.useState({tea:0,lampOutput:100,coverClosed:!0,sensorFault:!1}),[n,r]=Ye.useState(0),[a,c]=Ye.useState(0),[d,h]=Ye.useState(0),[p,g]=Ye.useState(!1),[v,_]=Ye.useState("3d"),[y,M]=Ye.useState(!1),[w,b]=Ye.useState(!0),[S,x]=Ye.useState(1),[U,P]=Ye.useState(120),[N,H]=Ye.useState(7200),[L,F]=Ye.useState(()=>{const ge=[],Ae=Date.now();for(let ye=120;ye>=0;ye--)ge.push({tick:0-ye,timestamp:new Date(Ae-ye*500).toLocaleTimeString(),simTime:Math.max(0,60-ye*.5),dose:44,targetDose:44,cutoffDose:40,flowLPerMin:.32,uvtPerCm:93.6,state:"RUNNING"});return ge}),[z,C]=Ye.useState([{id:"init-001",timestamp:new Date().toLocaleTimeString(),state:"RUNNING",reason:"DoseGuard Controller Cold-Boot: Fixed 0.5s accumulator loop active. V=30mL, D_TARGET=44 mJ/cm², D_SET=40 mJ/cm².",dose:44,flowLPerMin:.32,uvtPerCm:93.6}]),[A,k]=Ye.useState([]),K=Ye.useCallback((ge,Ae,ye="info")=>{const ht=`${Date.now()}-${Math.random().toString(36).substr(2,5)}`;k(lt=>[...lt,{id:ht,title:ge,description:Ae,type:ye}]),setTimeout(()=>{k(lt=>lt.filter(at=>at.id!==ht))},4e3)},[]),q=ge=>{k(Ae=>Ae.filter(ye=>ye.id!==ge))},oe=1+(Math.random()-.5)*.008,ce=1+(Math.random()-.5)*.008,J=Sw(s,oe,ce),de=Mw(J.pdA,J.T,U,S),B=Ye.useRef(J.safetyState),ue=Ye.useRef(s.coverClosed),le=Ye.useRef(s.sensorFault);Ye.useEffect(()=>{const ge=B.current,Ae=J.safetyState,ye=ue.current!==s.coverClosed,ht=le.current!==s.sensorFault;if(ge!==Ae||ye||ht){const lt={id:`ev-${Date.now()}-${Math.random().toString(36).substr(2,4)}`,timestamp:new Date().toLocaleTimeString(),state:Ae,reason:J.stateReason,dose:J.dose,flowLPerMin:J.flowLPerMin,uvtPerCm:J.uvtPerCm};C(at=>[lt,...at].slice(0,500)),Ae==="FAIL_CLOSED"?K("⚠️ FAIL_CLOSED Safety Trip Engaged",J.stateReason,"error"):Ae==="THROTTLED"?K("⚡ Flow Throttling Active",J.stateReason,"warning"):Ae==="RUNNING"&&ge==="FAIL_CLOSED"&&K("✓ Safety Recovery: Nominal Flow","UV dose restored above 44 mJ/cm². Solenoid open.","success"),B.current=Ae,ue.current=s.coverClosed,le.current=s.sensorFault}},[J.safetyState,J.stateReason,J.dose,J.flowLPerMin,J.uvtPerCm,s.coverClosed,s.sensorFault,K]),Ye.useEffect(()=>{if(p)return;const ge=setInterval(()=>{r(ye=>ye+1),c(ye=>ye+.5),h(ye=>ye+.5),P(ye=>ye+.5/3600*S);const Ae={tick:n+1,timestamp:new Date().toLocaleTimeString(),simTime:a+.5,dose:J.dose,targetDose:44,cutoffDose:40,flowLPerMin:J.flowLPerMin,uvtPerCm:J.uvtPerCm,state:J.safetyState};F(ye=>{const ht=[...ye,Ae];return N>0&&ht.length>N?ht.slice(-N):ht})},500);return()=>clearInterval(ge)},[p,n,a,S,N,J]);const O=ge=>{e(Ae=>({...Ae,...ge}))},se=()=>{e({tea:0,lampOutput:100,coverClosed:!0,sensorFault:!1}),x(1),K("✓ Restored Default Nominal Feed","Clear tap water, 100% lamp, cover latched, nominal flow active.","info")},Ie=()=>{P(0),e(ge=>({...ge,lampOutput:100})),K("✓ Brand-New UVC Lamp Calibrated","Operating hours reset to 0. Radiant flux restored to 100% nominal.","success")},ee=()=>{if(L.length===0)return;let ge=`data:text/csv;charset=utf-8,Tick,Timestamp,SimTime_s,Dose_mJ_cm2,Target_mJ_cm2,Cutoff_mJ_cm2,Flow_L_min,UVT_per_cm,SafetyState
`;L.forEach(lt=>{ge+=`${lt.tick},"${lt.timestamp}",${lt.simTime.toFixed(1)},${lt.dose.toFixed(2)},${lt.targetDose},${lt.cutoffDose},${lt.flowLPerMin.toFixed(3)},${lt.uvtPerCm.toFixed(1)},${lt.state}
`});const Ae=encodeURI(ge),ye=document.createElement("a");ye.setAttribute("href",Ae);const ht=`doseguard_telemetry_${L.length}rows_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.csv`;ye.setAttribute("download",ht),document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),K("✓ CSV Telemetry Exported",`Downloaded ${L.length.toLocaleString()} data points to ${ht}`,"success")},fe=()=>{const ge="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(z,null,2)),Ae=document.createElement("a");Ae.setAttribute("href",ge),Ae.setAttribute("download",`doseguard_audit_log_${new Date().toISOString().slice(0,10)}.json`),document.body.appendChild(Ae),Ae.click(),Ae.remove(),K("✓ Audit Logs Exported",`Downloaded ${z.length} safety state transitions as JSON.`,"success")},Me=()=>{const ge=`solid DoseGuard_UV_Reactor_Chamber
  facet normal 0.0 0.0 1.0
    outer loop
      vertex -12.5 -12.5 30.56
      vertex 12.5 -12.5 30.56
      vertex 12.5 12.5 30.56
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex -12.5 -12.5 -30.56
      vertex 12.5 12.5 -30.56
      vertex 12.5 -12.5 -30.56
    endloop
  endfacet
endsolid DoseGuard_UV_Reactor_Chamber`,Ae=new Blob([ge],{type:"application/sla"}),ye=document.createElement("a");ye.href=URL.createObjectURL(Ae),ye.download="DoseGuard_Reactor_Assembly_CAD.stl",document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),K("✓ 3D CAD .STL Downloaded","DoseGuard_Reactor_Assembly_CAD.stl ready for 3D printing or CAD import.","success")},xe=()=>{const ge=document.getElementById("simulation-section");ge&&ge.scrollIntoView({behavior:"smooth"})};return u.jsxs("div",{className:`min-h-screen text-slate-100 ${w?"dark bg-obsidian-950":"bg-slate-900"} antialiased selection:bg-photon-cyan selection:text-black p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto`,children:[u.jsx(Cw,{toasts:A,onDismiss:q}),u.jsx(t_,{ticks:n,simTimeSeconds:a,realTimeSeconds:d,safetyState:J.safetyState,isPaused:p,onTogglePause:()=>g(!p),onReset:se,viewMode:v,onToggleViewMode:_,onOpenBlueprint:()=>M(!0),onExportCsv:ee,csvRowCount:L.length,isDarkMode:w,onToggleTheme:()=>b(!w)}),u.jsx(n_,{onOpenBlueprint:()=>M(!0),onScrollToSim:xe}),u.jsx(i_,{outputs:J,inputs:s}),u.jsx("div",{id:"simulation-section",children:u.jsx(gw,{outputs:J,inputs:s,viewMode:v,onToggleViewMode:_,onOpenBlueprint:()=>M(!0),onExportStl:Me})}),u.jsx(xw,{telemetry:L,bufferCapacity:N,onSetBufferCapacity:H,totalLoggedCount:L.length}),u.jsx(vw,{inputs:s,onUpdateInputs:O,onResetDefaults:se,calculatedUvtPerCm:J.uvtPerCm,calculatedA1:J.A1,calculatedT:J.T}),u.jsx(_w,{logs:z,currentState:J.safetyState,stateReason:J.stateReason,onClearLogs:()=>C([]),onExportLogs:fe}),u.jsx(yw,{prognosis:de,onInstallNewLamp:Ie,speedMultiplier:S,onSetSpeedMultiplier:x}),u.jsx(Tw,{}),u.jsxs("footer",{className:"mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-3",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"font-bold text-white",children:"Team SpaceX"}),u.jsx("span",{children:"•"}),u.jsx("span",{children:"Kalinga Institute of Industrial Technology (KIIT)"}),u.jsx("span",{children:"•"}),u.jsx("span",{className:"text-photon-cyan font-bold",children:"atomQUEST 2026 Hackathon"})]}),u.jsxs("div",{className:"flex items-center space-x-2 text-slate-400",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),u.jsx("span",{children:"DoseGuard Controller v1.1.0 • Firmware-Identical Digital Twin"})]})]}),u.jsx(Aw,{isOpen:y,onClose:()=>M(!1),onExportStl:Me,onShowToast:K})]})};Ix.createRoot(document.getElementById("root")).render(u.jsx(Ax.StrictMode,{children:u.jsx(Rw,{})}));
