(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"25BE":function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return r}))},"4IlW":function(e,t,n){"use strict";var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};t["a"]=r},"8XRh":function(e,t,n){"use strict";var r=n("rePB"),o=n("VTBJ"),c=n("ODXe"),a=n("U8pU"),i=n("q1tI"),u=n("m+aA"),f=n("c+Xe"),s=n("TSYQ"),l=n.n(s),v=n("MNnm");function d(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}function b(e,t){var n={animationend:d("Animation","AnimationEnd"),transitionend:d("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var O=b(Object(v["a"])(),"undefined"!==typeof window?window:{}),E={};if(Object(v["a"])()){var m=document.createElement("div");E=m.style}var y={};function p(e){if(y[e])return y[e];var t=O[e];if(t)for(var n=Object.keys(t),r=n.length,o=0;o<r;o+=1){var c=n[o];if(Object.prototype.hasOwnProperty.call(t,c)&&c in E)return y[e]=t[c],y[e]}return""}var j=p("animationend"),S=p("transitionend"),A=!(!j||!S),N=j||"animationend",M=S||"transitionend";function T(e,t){if(!e)return null;if("object"===Object(a["a"])(e)){var n=t.replace(/-\w/g,(function(e){return e[1].toUpperCase()}));return e[n]}return"".concat(e,"-").concat(t)}var C="none",_="appear",h="enter",w="leave",U="none",I="prepare",L="start",R="active",P="end",k=n("dm2S"),g=n("wgJM"),F=function(){var e=i["useRef"](null);function t(){g["a"].cancel(e.current)}function n(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;t();var c=Object(g["a"])((function(){o<=1?r({isCanceled:function(){return c!==e.current}}):n(r,o-1)}));e.current=c}return i["useEffect"]((function(){return function(){t()}}),[]),[n,t]},K=Object(v["a"])()?i["useLayoutEffect"]:i["useEffect"],D=K,H=[I,L,R,P],$=!1,W=!0;function B(e){return e===R||e===P}var Q=function(e,t){var n=Object(k["a"])(U),r=Object(c["a"])(n,2),o=r[0],a=r[1],u=F(),f=Object(c["a"])(u,2),s=f[0],l=f[1];function v(){a(I,!0)}return D((function(){if(o!==U&&o!==P){var e=H.indexOf(o),n=H[e+1],r=t(o);r===$?a(n,!0):s((function(e){function t(){e.isCanceled()||a(n,!0)}!0===r?t():Promise.resolve(r).then(t)}))}}),[e,o]),i["useEffect"]((function(){return function(){l()}}),[]),[v,o]},V=function(e){var t=Object(i["useRef"])(),n=Object(i["useRef"])(e);n.current=e;var r=i["useCallback"]((function(e){n.current(e)}),[]);function o(e){e&&(e.removeEventListener(M,r),e.removeEventListener(N,r))}function c(e){t.current&&t.current!==e&&o(t.current),e&&e!==t.current&&(e.addEventListener(M,r),e.addEventListener(N,r),t.current=e)}return i["useEffect"]((function(){return function(){o(t.current)}}),[]),[c,o]};function G(e,t,n,a){var u=a.motionEnter,f=void 0===u||u,s=a.motionAppear,l=void 0===s||s,v=a.motionLeave,d=void 0===v||v,b=a.motionDeadline,O=a.motionLeaveImmediately,E=a.onAppearPrepare,m=a.onEnterPrepare,y=a.onLeavePrepare,p=a.onAppearStart,j=a.onEnterStart,S=a.onLeaveStart,A=a.onAppearActive,N=a.onEnterActive,M=a.onLeaveActive,T=a.onAppearEnd,U=a.onEnterEnd,P=a.onLeaveEnd,g=a.onVisibleChanged,F=Object(k["a"])(),K=Object(c["a"])(F,2),H=K[0],G=K[1],x=Object(k["a"])(C),Y=Object(c["a"])(x,2),X=Y[0],J=Y[1],z=Object(k["a"])(null),Z=Object(c["a"])(z,2),q=Z[0],ee=Z[1],te=Object(i["useRef"])(!1),ne=Object(i["useRef"])(null);function re(){return n()}var oe=Object(i["useRef"])(!1);function ce(e){var t=re();if(!e||e.deadline||e.target===t){var n,r=oe.current;X===_&&r?n=null===T||void 0===T?void 0:T(t,e):X===h&&r?n=null===U||void 0===U?void 0:U(t,e):X===w&&r&&(n=null===P||void 0===P?void 0:P(t,e)),X!==C&&r&&!1!==n&&(J(C,!0),ee(null,!0))}}var ae=V(ce),ie=Object(c["a"])(ae,1),ue=ie[0],fe=i["useMemo"]((function(){var e,t,n;switch(X){case _:return e={},Object(r["a"])(e,I,E),Object(r["a"])(e,L,p),Object(r["a"])(e,R,A),e;case h:return t={},Object(r["a"])(t,I,m),Object(r["a"])(t,L,j),Object(r["a"])(t,R,N),t;case w:return n={},Object(r["a"])(n,I,y),Object(r["a"])(n,L,S),Object(r["a"])(n,R,M),n;default:return{}}}),[X]),se=Q(X,(function(e){if(e===I){var t=fe[I];return t?t(re()):$}var n;de in fe&&ee((null===(n=fe[de])||void 0===n?void 0:n.call(fe,re(),null))||null);return de===R&&(ue(re()),b>0&&(clearTimeout(ne.current),ne.current=setTimeout((function(){ce({deadline:!0})}),b))),W})),le=Object(c["a"])(se,2),ve=le[0],de=le[1],be=B(de);oe.current=be,D((function(){G(t);var n,r=te.current;(te.current=!0,e)&&(!r&&t&&l&&(n=_),r&&t&&f&&(n=h),(r&&!t&&d||!r&&O&&!t&&d)&&(n=w),n&&(J(n),ve()))}),[t]),Object(i["useEffect"])((function(){(X===_&&!l||X===h&&!f||X===w&&!d)&&J(C)}),[l,f,d]),Object(i["useEffect"])((function(){return function(){te.current=!1,clearTimeout(ne.current)}}),[]),Object(i["useEffect"])((function(){void 0!==H&&X===C&&(null===g||void 0===g||g(H))}),[H,X]);var Oe=q;return fe[I]&&de===L&&(Oe=Object(o["a"])({transition:"none"},Oe)),[X,de,Oe,null!==H&&void 0!==H?H:t]}var x=n("1OyB"),Y=n("vuIU"),X=n("Ji7U"),J=n("LK+K"),z=function(e){Object(X["a"])(n,e);var t=Object(J["a"])(n);function n(){return Object(x["a"])(this,n),t.apply(this,arguments)}return Object(Y["a"])(n,[{key:"render",value:function(){return this.props.children}}]),n}(i["Component"]),Z=z;function q(e){var t=e;function n(e){return!(!e.motionName||!t)}"object"===Object(a["a"])(e)&&(t=e.transitionSupport);var s=i["forwardRef"]((function(e,t){var a=e.visible,s=void 0===a||a,v=e.removeOnLeave,d=void 0===v||v,b=e.forceRender,O=e.children,E=e.motionName,m=e.leavedClassName,y=e.eventProps,p=n(e),j=Object(i["useRef"])(),S=Object(i["useRef"])();function A(){try{return j.current instanceof HTMLElement?j.current:Object(u["a"])(S.current)}catch(e){return null}}var N=G(p,s,A,e),M=Object(c["a"])(N,4),_=M[0],h=M[1],w=M[2],U=M[3],R=i["useRef"](U);U&&(R.current=!0);var P,k=i["useCallback"]((function(e){j.current=e,Object(f["b"])(t,e)}),[t]),g=Object(o["a"])(Object(o["a"])({},y),{},{visible:s});if(O)if(_!==C&&n(e)){var F,K;h===I?K="prepare":B(h)?K="active":h===L&&(K="start"),P=O(Object(o["a"])(Object(o["a"])({},g),{},{className:l()(T(E,_),(F={},Object(r["a"])(F,T(E,"".concat(_,"-").concat(K)),K),Object(r["a"])(F,E,"string"===typeof E),F)),style:w}),k)}else P=U?O(Object(o["a"])({},g),k):!d&&R.current?O(Object(o["a"])(Object(o["a"])({},g),{},{className:m}),k):b?O(Object(o["a"])(Object(o["a"])({},g),{},{style:{display:"none"}}),k):null;else P=null;if(i["isValidElement"](P)&&Object(f["c"])(P)){var D=P,H=D.ref;H||(P=i["cloneElement"](P,{ref:k}))}return i["createElement"](Z,{ref:S},P)}));return s.displayName="CSSMotion",s}var ee=q(A),te=n("wx14"),ne=n("Ff2n"),re="add",oe="keep",ce="remove",ae="removed";function ie(e){var t;return t=e&&"object"===Object(a["a"])(e)&&"key"in e?e:{key:e},Object(o["a"])(Object(o["a"])({},t),{},{key:String(t.key)})}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(ie)}function fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=0,c=t.length,a=ue(e),i=ue(t);a.forEach((function(e){for(var t=!1,a=r;a<c;a+=1){var u=i[a];if(u.key===e.key){r<a&&(n=n.concat(i.slice(r,a).map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{status:re})}))),r=a),n.push(Object(o["a"])(Object(o["a"])({},u),{},{status:oe})),r+=1,t=!0;break}}t||n.push(Object(o["a"])(Object(o["a"])({},e),{},{status:ce}))})),r<c&&(n=n.concat(i.slice(r).map((function(e){return Object(o["a"])(Object(o["a"])({},e),{},{status:re})}))));var u={};n.forEach((function(e){var t=e.key;u[t]=(u[t]||0)+1}));var f=Object.keys(u).filter((function(e){return u[e]>1}));return f.forEach((function(e){n=n.filter((function(t){var n=t.key,r=t.status;return n!==e||r!==ce})),n.forEach((function(t){t.key===e&&(t.status=oe)}))})),n}var se=["component","children","onVisibleChanged"],le=["status"],ve=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function de(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee,n=function(e){Object(X["a"])(r,e);var n=Object(J["a"])(r);function r(){var e;Object(x["a"])(this,r);for(var t=arguments.length,c=new Array(t),a=0;a<t;a++)c[a]=arguments[a];return e=n.call.apply(n,[this].concat(c)),e.state={keyEntities:[]},e.removeKey=function(t){e.setState((function(e){var n=e.keyEntities;return{keyEntities:n.map((function(e){return e.key!==t?e:Object(o["a"])(Object(o["a"])({},e),{},{status:ae})}))}}))},e}return Object(Y["a"])(r,[{key:"render",value:function(){var e=this,n=this.state.keyEntities,r=this.props,o=r.component,c=r.children,a=r.onVisibleChanged,u=Object(ne["a"])(r,se),f=o||i["Fragment"],s={};return ve.forEach((function(e){s[e]=u[e],delete u[e]})),delete u.keys,i["createElement"](f,u,n.map((function(n){var r=n.status,o=Object(ne["a"])(n,le),u=r===re||r===oe;return i["createElement"](t,Object(te["a"])({},s,{key:o.key,visible:u,eventProps:o,onVisibleChanged:function(t){null===a||void 0===a||a(t,{key:o.key}),t||e.removeKey(o.key)}}),c)})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.keys,r=t.keyEntities,o=ue(n),c=fe(r,o);return{keyEntities:c.filter((function(e){var t=r.find((function(t){var n=t.key;return e.key===n}));return!t||t.status!==ae||e.status!==ce}))}}}]),r}(i["Component"]);return n.defaultProps={component:"div"},n}de(A),t["a"]=ee},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(e,t):void 0}}},DSFK:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("zLVn");function o(e,t){if(null==e)return{};var n,o,c=Object(r["a"])(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("a3WO");function o(e){if(Array.isArray(e))return Object(r["a"])(e)}var c=n("25BE"),a=n("BsWD");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return o(e)||Object(c["a"])(e)||Object(a["a"])(e)||i()}},Kwbf:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r={};function o(e,t){0}function c(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}function a(e,t){c(o,e,t)}t["a"]=a},MNnm:function(e,t,n){"use strict";function r(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}n.d(t,"a",(function(){return r}))},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("DSFK");function o(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0)if(c.push(r.value),t&&c.length===t)break}catch(u){i=!0,o=u}finally{try{a||null==n["return"]||n["return"]()}finally{if(i)throw o}}return c}}var c=n("BsWD"),a=n("PYwp");function i(e,t){return Object(r["a"])(e)||o(e,t)||Object(c["a"])(e,t)||Object(a["a"])()}},PYwp:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},Qfp8:function(e,t,n){"use strict";var r="function"===typeof Symbol&&Symbol["for"],o=r?Symbol["for"]("react.element"):60103,c=r?Symbol["for"]("react.portal"):60106,a=r?Symbol["for"]("react.fragment"):60107,i=r?Symbol["for"]("react.strict_mode"):60108,u=r?Symbol["for"]("react.profiler"):60114,f=r?Symbol["for"]("react.provider"):60109,s=r?Symbol["for"]("react.context"):60110,l=r?Symbol["for"]("react.async_mode"):60111,v=r?Symbol["for"]("react.concurrent_mode"):60111,d=r?Symbol["for"]("react.forward_ref"):60112,b=r?Symbol["for"]("react.suspense"):60113,O=r?Symbol["for"]("react.suspense_list"):60120,E=r?Symbol["for"]("react.memo"):60115,m=r?Symbol["for"]("react.lazy"):60116,y=r?Symbol["for"]("react.block"):60121,p=r?Symbol["for"]("react.fundamental"):60117,j=r?Symbol["for"]("react.responder"):60118,S=r?Symbol["for"]("react.scope"):60119;function A(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type,e){case l:case v:case a:case u:case i:case b:return e;default:switch(e=e&&e.$$typeof,e){case s:case d:case m:case E:case f:return e;default:return t}}case c:return t}}}function N(e){return A(e)===v}t.AsyncMode=l,t.ConcurrentMode=v,t.ContextConsumer=s,t.ContextProvider=f,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=m,t.Memo=E,t.Portal=c,t.Profiler=u,t.StrictMode=i,t.Suspense=b,t.isAsyncMode=function(e){return N(e)||A(e)===l},t.isConcurrentMode=N,t.isContextConsumer=function(e){return A(e)===s},t.isContextProvider=function(e){return A(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return A(e)===d},t.isFragment=function(e){return A(e)===a},t.isLazy=function(e){return A(e)===m},t.isMemo=function(e){return A(e)===E},t.isPortal=function(e){return A(e)===c},t.isProfiler=function(e){return A(e)===u},t.isStrictMode=function(e){return A(e)===i},t.isSuspense=function(e){return A(e)===b},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===v||e===u||e===i||e===b||e===O||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===E||e.$$typeof===f||e.$$typeof===s||e.$$typeof===d||e.$$typeof===p||e.$$typeof===j||e.$$typeof===S||e.$$typeof===y)},t.typeOf=A},YrtM:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(e,t,n){var o=r["useRef"]({});return"value"in o.current&&!n(o.current.condition,t)||(o.current.value=e(),o.current.condition=t),o.current.value}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"c+Xe":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var r=n("U8pU"),o=n("t6Hw");n("YrtM");function c(e,t){"function"===typeof e?e(t):"object"===Object(r["a"])(e)&&e&&"current"in e&&(e.current=t)}function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter((function(e){return e}));return r.length<=1?r[0]:function(e){t.forEach((function(t){c(t,e)}))}}function i(e){var t,n,r=Object(o["isMemo"])(e)?e.type.type:e.type;return!("function"===typeof r&&!(null===(t=r.prototype)||void 0===t?void 0:t.render))&&!("function"===typeof e&&!(null===(n=e.prototype)||void 0===n?void 0:n.render))}},dm2S:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ODXe"),o=n("q1tI");function c(e){var t=o["useRef"](!1),n=o["useState"](e),c=Object(r["a"])(n,2),a=c[0],i=c[1];function u(e,n){n&&t.current||i(e)}return o["useEffect"]((function(){return t.current=!1,function(){t.current=!0}}),[]),[a,u]}},"m+aA":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("i8i4"),o=n.n(r);function c(e){return e instanceof HTMLElement?e:o.a.findDOMNode(e)}},t6Hw:function(e,t,n){"use strict";e.exports=n("Qfp8")},wgJM:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=function(e){return+setTimeout(e,16)},o=function(e){return clearTimeout(e)};"undefined"!==typeof window&&"requestAnimationFrame"in window&&(r=function(e){return window.requestAnimationFrame(e)},o=function(e){return window.cancelAnimationFrame(e)});var c=0,a=new Map;function i(e){a["delete"](e)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;c+=1;var n=c;function o(t){if(0===t)i(n),e();else{var c=r((function(){o(t-1)}));a.set(n,c)}}return o(t),n}u.cancel=function(e){var t=a.get(e);return i(t),o(t)}}}]);