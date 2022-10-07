/*! For license information please see 7.ordering-component.cf701d58c99b0a3ab63a.js.LICENSE.txt */
(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[7,3],Array(125).concat([function(t,e,n){"use strict";var r,i=n(161),o=n(165),s=n(166);r=i()?s:o,t.exports=r},function(t,e,n){"use strict";function r(t,e){var n,r;return"boolean"==typeof(null==e?void 0:e.enabled)?e.enabled:null===(r=null===(n=null==t?void 0:t.__default)||void 0===n?void 0:n.enabled)||void 0===r||r}n.d(e,"a",(function(){return r}))},function(t,e,n){t.exports=function(t,e,n,r,i){for(e=e.split?e.split("."):e,r=0;r<e.length;r++)t=t?t[e[r]]:i;return t===i?n:t}},function(t,e,n){"use strict";var r,i=n(157),o=n(172),s=n(173);r=i()?o:s,t.exports=r},function(t,e,n){"use strict";var r,i=n(174),o=n(179),s=n(180);r=i()?o:s,t.exports=r},function(t,e,n){"use strict";var r=n(182);t.exports=r},function(t,e,n){"use strict";n.r(e),n.d(e,"applyDestinationMiddleware",(function(){return u})),n.d(e,"sourceMiddlewarePlugin",(function(){return c}));var r=n(2),i=n(5),o=n(24),s=n(47);function u(t,e,n){return Object(r.b)(this,void 0,void 0,(function(){function i(e,n){return Object(r.b)(this,void 0,void 0,(function(){var i,u,c;return Object(r.d)(this,(function(a){switch(a.label){case 0:return i=!1,u=null,[4,Object(o.a)(n({payload:Object(s.a)(e,{clone:!0,traverse:!1}),integration:t,next:function(t){i=!0,null===t&&(u=null),t&&(u=t.obj)}}))];case 1:return a.sent(),i||null===u||(u.integrations=Object(r.a)(Object(r.a)({},e.integrations),((c={})[t]=!1,c))),[2,u]}}))}))}var u,c,a,f;return Object(r.d)(this,(function(t){switch(t.label){case 0:u=0,c=n,t.label=1;case 1:return u<c.length?(a=c[u],[4,i(e,a)]):[3,4];case 2:if(null===(f=t.sent()))return[2,null];e=f,t.label=3;case 3:return u++,[3,1];case 4:return[2,e]}}))}))}function c(t,e){function n(n){return Object(r.b)(this,void 0,void 0,(function(){var u;return Object(r.d)(this,(function(r){switch(r.label){case 0:return u=!1,[4,Object(o.a)(t({payload:Object(s.a)(n.event,{clone:!0,traverse:!1}),integrations:null!=e?e:{},next:function(t){u=!0,t&&(n.event=t.obj)}}))];case 1:if(r.sent(),!u)throw new i.b({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,n]}}))}))}return{name:"Source Middleware ".concat(t.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(t){return Promise.resolve(t)},track:n,page:n,identify:n,alias:n,group:n}}},function(t,e,n){"use strict";var r=Number.POSITIVE_INFINITY;t.exports=r},function(t,e,n){"use strict";var r=n(146).NEGATIVE_INFINITY;t.exports=r},function(t,e,n){"use strict";t.exports=1023},function(t,e,n){"use strict";var r=n(151);t.exports=r},function(t,e,n){"use strict";var r=n(152);t.exports=r},function(t,e,n){"use strict";var r=n(155);t.exports=r},function(t,e,n){"use strict";var r=Object.prototype.toString;t.exports=r},function(t,e,n){"use strict";var r=n(202);t.exports=r},function(t,e,n){"use strict";var r=n(204);t.exports=r},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Store=e.matches=e.transform=void 0;var i=n(142);Object.defineProperty(e,"transform",{enumerable:!0,get:function(){return r(i).default}});var o=n(216);Object.defineProperty(e,"matches",{enumerable:!0,get:function(){return r(o).default}});var s=n(217);Object.defineProperty(e,"Store",{enumerable:!0,get:function(){return r(s).default}})},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(143)),o=r(n(127)),s=r(n(144)),u=n(23),c=n(215);function a(t,e){for(var n in e.drop)if(e.drop.hasOwnProperty(n)){var r=""===n?t:(0,o.default)(t,n);if("object"==typeof r&&null!==r)for(var i=0,s=e.drop[n];i<s.length;i++){delete r[s[i]]}}}function f(t,e){for(var n in e.allow)if(e.allow.hasOwnProperty(n)){var r=""===n?t:(0,o.default)(t,n);if("object"==typeof r&&null!==r)for(var i in r)r.hasOwnProperty(i)&&-1===e.allow[n].indexOf(i)&&delete r[i]}}function l(t,e){var n=JSON.parse(JSON.stringify(t));for(var r in e.map)if(e.map.hasOwnProperty(r)){var i=e.map[r],s=r.split("."),a=void 0;if(s.length>1?(s.pop(),a=(0,o.default)(n,s.join("."))):a=t,"object"==typeof a){if(i.copy){var f=(0,o.default)(n,i.copy);void 0!==f&&(0,u.dset)(t,r,f)}else if(i.move){var l=(0,o.default)(n,i.move);void 0!==l&&(0,u.dset)(t,r,l),(0,c.unset)(t,i.move)}else i.hasOwnProperty("set")&&(0,u.dset)(t,r,i.set);if(i.to_string){var p=(0,o.default)(t,r);if("string"==typeof p||"object"==typeof p&&null!==p)continue;void 0!==p?(0,u.dset)(t,r,JSON.stringify(p)):(0,u.dset)(t,r,"undefined")}}}}function p(t,e){return!(e.sample.percent<=0)&&(e.sample.percent>=1||(e.sample.path?function(t,e){var n=(0,o.default)(t,e.sample.path),r=(0,i.default)(JSON.stringify(n)),u=-64,c=[];d(r.slice(0,8),c);for(var a=0,f=0;f<64&&1!==c[f];f++)a++;if(0!==a){var l=[];d(r.slice(9,16),l),u-=a,c.splice(0,a),l.splice(64-a),c=c.concat(l)}return c[63]=0===c[63]?1:0,(0,s.default)(parseInt(c.join(""),2),u)<e.sample.percent}(t,e):(n=e.sample.percent,Math.random()<=n)));var n}function d(t,e){for(var n=0;n<8;n++)for(var r=t[n],i=128;i>=1;i/=2)r-i>=0?(r-=i,e.push(1)):e.push(0)}e.default=function(t,e){for(var n=t,r=0,i=e;r<i.length;r++){var o=i[r];switch(o.type){case"drop":return null;case"drop_properties":a(n,o.config);break;case"allow_properties":f(n,o.config);break;case"sample_event":if(p(n,o.config))break;return null;case"map_properties":l(n,o.config);break;case"hash_properties":break;default:throw new Error('Transformer of type "'.concat(o.type,'" is unsupported.'))}}return n}},function(t,e,n){"use strict";n.r(e);for(var r=[],i=0;i<64;)r[i]=0|4294967296*Math.sin(++i%Math.PI);e.default=function(t){var e,n,o,s=[e=1732584193,n=4023233417,~e,~n],u=[],c=unescape(encodeURI(t))+"",a=c.length;for(t=--a/4+2|15,u[--t]=8*a;~a;)u[a>>2]|=c.charCodeAt(a)<<8*a--;for(i=c=0;i<t;i+=16){for(a=s;c<64;a=[o=a[3],e+((o=a[0]+[e&n|~e&o,o&e|~o&n,e^n^o,n^(e|~o)][a=c>>4]+r[c]+~~u[i|15&[c,5*c+1,3*c+5,7*c][a]])<<(a=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*a+c++%4])|o>>>-a),e,n])e=0|a[1],n=a[2];for(c=4;c;)s[--c]+=a[c]}for(t="";c<32;)t+=(s[c>>3]>>4*(1^c++)&15).toString(16);return t}},function(t,e,n){"use strict";var r=n(145);t.exports=r},function(t,e,n){"use strict";var r=n(132),i=n(133),o=n(134),s=n(148),u=n(149),c=n(150),a=n(135),f=n(136),l=n(153),p=n(206),d=n(212),v=n(137),h=n(140),y=[0,0],b=[0,0];t.exports=function(t,e){var n,g;return 0===t||a(t)||f(t)?t:(p(y,t),e+=y[1],(e+=d(t=y[0]))<c?l(0,t):e>s?t<0?i:r:(e<=u?(e+=52,g=2220446049250313e-31):g=1,v(b,t),n=b[0],n&=2148532223,g*h(n|=e+o<<20,b[1])))}},function(t,e,n){"use strict";var r=n(147);t.exports=r},function(t,e,n){"use strict";t.exports=Number},function(t,e,n){"use strict";t.exports=1023},function(t,e,n){"use strict";t.exports=-1023},function(t,e,n){"use strict";t.exports=-1074},function(t,e,n){"use strict";t.exports=function(t){return t!=t}},function(t,e,n){"use strict";var r=n(132),i=n(133);t.exports=function(t){return t===r||t===i}},function(t,e,n){"use strict";var r=n(154);t.exports=r},function(t,e,n){"use strict";var r=n(137),i=n(139),o=n(140),s=[0,0];t.exports=function(t,e){var n,u;return r(s,t),n=s[0],n&=2147483647,u=i(e),o(n|=u&=2147483648,s[1])}},function(t,e,n){"use strict";var r=n(156);t.exports=function(t,e){return 1===arguments.length?r([0,0],t):r(t,e)}},function(t,e,n){"use strict";var r=n(128),i=n(129),o=n(181),s=new i(1),u=new r(s.buffer),c=o.HIGH,a=o.LOW;t.exports=function(t,e){return s[0]=e,t[0]=u[c],t[1]=u[a],t}},function(t,e,n){"use strict";var r=n(158);t.exports=r},function(t,e,n){"use strict";var r=n(159),i=n(170),o=n(171);t.exports=function(){var t,e;if("function"!=typeof o)return!1;try{e=new o(e=[1,3.14,-3.14,i+1,i+2]),t=r(e)&&1===e[0]&&3===e[1]&&e[2]===i-2&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}},function(t,e,n){"use strict";var r=n(160);t.exports=r},function(t,e,n){"use strict";var r=n(125),i="function"==typeof Uint32Array;t.exports=function(t){return i&&t instanceof Uint32Array||"[object Uint32Array]"===r(t)}},function(t,e,n){"use strict";var r=n(162);t.exports=r},function(t,e,n){"use strict";var r=n(163)();t.exports=function(){return r&&"symbol"==typeof Symbol.toStringTag}},function(t,e,n){"use strict";var r=n(164);t.exports=r},function(t,e,n){"use strict";t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},function(t,e,n){"use strict";var r=n(138);t.exports=function(t){return r.call(t)}},function(t,e,n){"use strict";var r=n(167),i=n(169),o=n(138);t.exports=function(t){var e,n,s;if(null==t)return o.call(t);n=t[i],e=r(t,i);try{t[i]=void 0}catch(e){return o.call(t)}return s=o.call(t),e?t[i]=n:delete t[i],s}},function(t,e,n){"use strict";var r=n(168);t.exports=r},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},function(t,e,n){"use strict";var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},function(t,e,n){"use strict";t.exports=4294967295},function(t,e,n){"use strict";var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=r},function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},function(t,e,n){"use strict";var r=n(175);t.exports=r},function(t,e,n){"use strict";var r=n(176),i=n(178);t.exports=function(){var t,e;if("function"!=typeof i)return!1;try{e=new i([1,3.14,-3.14,NaN]),t=r(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}},function(t,e,n){"use strict";var r=n(177);t.exports=r},function(t,e,n){"use strict";var r=n(125),i="function"==typeof Float64Array;t.exports=function(t){return i&&t instanceof Float64Array||"[object Float64Array]"===r(t)}},function(t,e,n){"use strict";var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Float64Array?Float64Array:void 0;t.exports=r},function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},function(t,e,n){"use strict";var r,i,o;!0===n(130)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},function(t,e,n){"use strict";var r,i,o=n(183);(i=new o.uint16(1))[0]=4660,r=52===new o.uint8(i.buffer)[0],t.exports=r},function(t,e,n){"use strict";var r=n(184),i={uint16:n(193),uint8:r};t.exports=i},function(t,e,n){"use strict";var r,i=n(185),o=n(191),s=n(192);r=i()?o:s,t.exports=r},function(t,e,n){"use strict";var r=n(186);t.exports=r},function(t,e,n){"use strict";var r=n(187),i=n(189),o=n(190);t.exports=function(){var t,e;if("function"!=typeof o)return!1;try{e=new o(e=[1,3.14,-3.14,i+1,i+2]),t=r(e)&&1===e[0]&&3===e[1]&&e[2]===i-2&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}},function(t,e,n){"use strict";var r=n(188);t.exports=r},function(t,e,n){"use strict";var r=n(125),i="function"==typeof Uint8Array;t.exports=function(t){return i&&t instanceof Uint8Array||"[object Uint8Array]"===r(t)}},function(t,e,n){"use strict";t.exports=255},function(t,e,n){"use strict";var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=r},function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},function(t,e,n){"use strict";var r,i=n(194),o=n(200),s=n(201);r=i()?o:s,t.exports=r},function(t,e,n){"use strict";var r=n(195);t.exports=r},function(t,e,n){"use strict";var r=n(196),i=n(198),o=n(199);t.exports=function(){var t,e;if("function"!=typeof o)return!1;try{e=new o(e=[1,3.14,-3.14,i+1,i+2]),t=r(e)&&1===e[0]&&3===e[1]&&e[2]===i-2&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}},function(t,e,n){"use strict";var r=n(197);t.exports=r},function(t,e,n){"use strict";var r=n(125),i="function"==typeof Uint16Array;t.exports=function(t){return i&&t instanceof Uint16Array||"[object Uint16Array]"===r(t)}},function(t,e,n){"use strict";t.exports=65535},function(t,e,n){"use strict";var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},function(t,e,n){"use strict";var r="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=r},function(t,e,n){"use strict";t.exports=function(){throw new Error("not implemented")}},function(t,e,n){"use strict";var r=n(128),i=n(129),o=n(203),s=new i(1),u=new r(s.buffer);t.exports=function(t){return s[0]=t,u[o]}},function(t,e,n){"use strict";var r;r=!0===n(130)?1:0,t.exports=r},function(t,e,n){"use strict";var r=n(128),i=n(129),o=n(205),s=new i(1),u=new r(s.buffer),c=o.HIGH,a=o.LOW;t.exports=function(t,e){return u[c]=t,u[a]=e,s[0]}},function(t,e,n){"use strict";var r,i,o;!0===n(130)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},function(t,e,n){"use strict";var r=n(207);t.exports=r},function(t,e,n){"use strict";var r=n(208);t.exports=function(t,e){return 1===arguments.length?r([0,0],t):r(t,e)}},function(t,e,n){"use strict";var r=n(209),i=n(136),o=n(135),s=n(210);t.exports=function(t,e){return o(e)||i(e)?(t[0]=e,t[1]=0,t):0!==e&&s(e)<r?(t[0]=4503599627370496*e,t[1]=-52,t):(t[0]=e,t[1]=0,t)}},function(t,e,n){"use strict";t.exports=22250738585072014e-324},function(t,e,n){"use strict";var r=n(211);t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return Math.abs(t)}},function(t,e,n){"use strict";var r=n(213);t.exports=r},function(t,e,n){"use strict";var r=n(139),i=n(214),o=n(134);t.exports=function(t){var e=r(t);return(e=(e&i)>>>20)-o|0}},function(t,e,n){"use strict";t.exports=2146435072},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.unset=void 0;var i=r(n(127));e.unset=function(t,e){if((0,i.default)(t,e)){for(var n=e.split("."),r=n.pop();n.length&&"\\"===n[n.length-1].slice(-1);)r=n.pop().slice(0,-1)+"."+r;for(;n.length;)t=t[e=n.shift()];return delete t[r]}return!0}},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(127));function o(t,e){if(!Array.isArray(t))return!0===s(t,e);var n=t[0];switch(n){case"!":return!o(t[1],e);case"or":for(var r=1;r<t.length;r++)if(o(t[r],e))return!0;return!1;case"and":for(r=1;r<t.length;r++)if(!o(t[r],e))return!1;return!0;case"=":case"!=":return function(t,e,n,r){u(t)&&(t=o(t,r));u(e)&&(e=o(e,r));"object"==typeof t&&"object"==typeof e&&(t=JSON.stringify(t),e=JSON.stringify(e));switch(n){case"=":return t===e;case"!=":return t!==e;default:throw new Error("Invalid operator in compareItems: ".concat(n))}}(s(t[1],e),s(t[2],e),n,e);case"<=":case"<":case">":case">=":return function(t,e,n,r){u(t)&&(t=o(t,r));u(e)&&(e=o(e,r));if("number"!=typeof t||"number"!=typeof e)return!1;switch(n){case"<=":return t<=e;case">=":return t>=e;case"<":return t<e;case">":return t>e;default:throw new Error("Invalid operator in compareNumbers: ".concat(n))}}(s(t[1],e),s(t[2],e),n,e);case"contains":return function(t,e){if("string"!=typeof t||"string"!=typeof e)return!1;return-1!==t.indexOf(e)}(s(t[1],e),s(t[2],e));case"match":return function(t,e){if("string"!=typeof t||"string"!=typeof e)return!1;return function(t,e){var n,r;t:for(;t.length>0;){var i=void 0,o=void 0;if(i=(n=c(t)).star,o=n.chunk,t=n.pattern,i&&""===o)return!0;var s=a(o,e),u=s.t,f=s.ok,l=s.err;if(l)return!1;if(!f||!(0===u.length||t.length>0)){if(i)for(var p=0;p<e.length;p++){if(u=(r=a(o,e.slice(p+1))).t,f=r.ok,l=r.err,f){if(0===t.length&&u.length>0)continue;e=u;continue t}if(l)return!1}return!1}e=u}return 0===e.length}(e,t)}(s(t[1],e),s(t[2],e));case"lowercase":var i=s(t[1],e);return"string"!=typeof i?null:i.toLowerCase();case"typeof":return typeof s(t[1],e);case"length":return function(t){if(null===t)return 0;if(!Array.isArray(t)&&"string"!=typeof t)return NaN;return t.length}(s(t[1],e));default:throw new Error("FQL IR could not evaluate for token: ".concat(n))}}function s(t,e){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,i.default)(e,t)}function u(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function c(t){for(var e={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),e.star=!0;var n,r=!1;t:for(n=0;n<t.length;n++)switch(t[n]){case"\\":n+1<t.length&&n++;break;case"[":r=!0;break;case"]":r=!1;break;case"*":if(!r)break t}return e.chunk=t.slice(0,n),e.pattern=t.slice(n),e}function a(t,e){for(var n,r,i={t:"",ok:!1,err:!1};t.length>0;){if(0===e.length)return i;switch(t[0]){case"[":var o=e[0];e=e.slice(1);var s=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(s=!1,t=t.slice(1));for(var u=!1,c=0;;){if(t.length>0&&"]"===t[0]&&c>0){t=t.slice(1);break}var a,l="";if(a=(n=f(t)).char,t=n.newChunk,n.err)return i;if(l=a,"-"===t[0]&&(l=(r=f(t.slice(1))).char,t=r.newChunk,r.err))return i;a<=o&&o<=l&&(u=!0),c++}if(u!==s)return i;break;case"?":e=e.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return i.err=!0,i;default:if(t[0]!==e[0])return i;e=e.slice(1),t=t.slice(1)}}return i.t=e,i.ok=!0,i.err=!1,i}function f(t){var e={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?(e.err=!0,e):(e.char=t[0],e.newChunk=t.slice(1),0===e.newChunk.length&&(e.err=!0),e)}e.default=function(t,e){if(!e)throw new Error("No matcher supplied!");switch(e.type){case"all":return!0;case"fql":return function(t,e){if(!t)return!1;try{t=JSON.parse(t)}catch(e){throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(e))}var n=o(t,e);if("boolean"!=typeof n)return!1;return n}(e.ir,t);default:throw new Error("Matcher of type ".concat(e.type," unsupported."))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var e=[],n=0,r=this.rules;n<r.length;n++){var i=r[n];i.destinationName!==t&&void 0!==i.destinationName||e.push(i)}return e},t}();e.default=r},,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"LegacyDestination",(function(){return x})),n.d(e,"ajsDestinations",(function(){return _}));var r=n(2),i=n(12),o=n(10),s=n(5),u=n(29),c=n(15),a=n(24),f=n(126),l=n(61),p=n(63),d=n(11),v=n(19),h=n(131),y=n(141),b=n(22),g=n(32);function m(t){return t.toLowerCase().replace(".","").replace(/\s+/g,"-")}function w(t,e){return void 0===e&&(e=!1),e?btoa(t).replace(/=/g,""):void 0}function j(t,e,n,i,o,s){return Object(r.b)(this,void 0,void 0,(function(){var u,c,a,f,l,p,d,v;return Object(r.d)(this,(function(h){switch(h.label){case 0:u=m(n),c=w(u,s),a=Object(b.b)(),f="".concat(a,"/integrations/").concat(null!=c?c:u,"/").concat(i,"/").concat(null!=c?c:u,".dynamic.js.gz"),h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Object(g.a)(f)];case 2:return h.sent(),function(t,e,n){var i,o;try{var s=(null!==(o=null===(i=null===window||void 0===window?void 0:window.performance)||void 0===i?void 0:i.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];s&&e.stats.gauge("legacy_destination_time",Math.round(s.duration),Object(r.f)([n],s.duration<100?["cached"]:[],!0))}catch(t){}}(f,t,n),[3,4];case 3:throw l=h.sent(),t.stats.gauge("legacy_destination_time",-1,["plugin:".concat(n),"failed"]),l;case 4:return p=window["".concat(u,"Deps")],[4,Promise.all(p.map((function(t){return Object(g.a)(a+t+".gz")})))];case 5:return h.sent(),window["".concat(u,"Loader")](),(d=window["".concat(u,"Integration")]).Integration&&(d({user:function(){return e.user()},addIntegration:function(){}}),d=d.Integration),(v=new d(o)).analytics=e,[2,v]}}))}))}function O(t,e){return Object(r.b)(this,void 0,void 0,(function(){var n,i=this;return Object(r.d)(this,(function(u){switch(u.label){case 0:return n=[],Object(o.a)()?[2,e]:[4,Object(p.a)((function(){return e.length>0&&Object(o.b)()}),(function(){return Object(r.b)(i,void 0,void 0,(function(){var i,o;return Object(r.d)(this,(function(r){switch(r.label){case 0:return(i=e.pop())?[4,Object(c.a)(i,t)]:[2];case 1:return o=r.sent(),o instanceof s.a||n.push(i),[2]}}))}))}))];case 1:return u.sent(),n.map((function(t){return e.pushWithBackoff(t)})),[2,e]}}))}))}var x=function(){function t(t,e,n,i){void 0===n&&(n={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=e,this.settings=Object(r.a)({},n),this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=i,this.buffer=i.disableClientPersistence?new d.b(4,[]):new v.a(4,"dest-".concat(t)),this.scheduleFlush()}return t.prototype.isLoaded=function(){return this._ready},t.prototype.ready=function(){var t;return null!==(t=this.onReady)&&void 0!==t?t:Promise.resolve()},t.prototype.load=function(t,e){return Object(r.b)(this,void 0,void 0,(function(){var n,i=this;return Object(r.d)(this,(function(r){switch(r.label){case 0:return this._ready||void 0!==this.onReady?[2]:(n=this,[4,j(t,e,this.name,this.version,this.settings,this.options.obfuscate)]);case 1:n.integration=r.sent(),this.onReady=new Promise((function(t){i.integration.once("ready",(function(){i._ready=!0,t(!0)}))})),this.onInitialize=new Promise((function(t){i.integration.on("initialize",(function(){i._initialized=!0,t(!0)}))}));try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(e){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),e}return[2]}}))}))},t.prototype.unload=function(t,e){return function(t,e,n){return Object(r.b)(this,void 0,void 0,(function(){var i,o,s,u;return Object(r.d)(this,(function(r){return i=Object(b.b)(),o=m(t),s=w(t,n),u="".concat(i,"/integrations/").concat(null!=s?s:o,"/").concat(e,"/").concat(null!=s?s:o,".dynamic.js.gz"),[2,Object(g.b)(u)]}))}))}(this.name,this.version,this.options.obfuscate)},t.prototype.addMiddleware=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this.middleware=(t=this.middleware).concat.apply(t,e)},t.prototype.shouldBuffer=function(t){return"page"!==t.event.type&&(Object(o.a)()||!1===this._ready||!1===this._initialized)},t.prototype.send=function(t,e,n){var i,o;return Object(r.b)(this,void 0,void 0,(function(){var u,c,l,p,d,v;return Object(r.d)(this,(function(y){switch(y.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(u=null===(o=null===(i=this.options)||void 0===i?void 0:i.plan)||void 0===o?void 0:o.track,c=t.event.event,u&&c&&"Segment.io"!==this.name){if(l=u[c],!Object(f.a)(u,l))return t.updateEvent("integrations",Object(r.a)(Object(r.a)({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new s.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",Object(r.a)(Object(r.a)({},t.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&!1===(null==l?void 0:l.integrations[this.name]))return t.cancel(new s.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,Object(h.applyDestinationMiddleware)(this.name,(b=t.event,JSON.parse(JSON.stringify(b))),this.middleware)];case 1:if(null===(p=y.sent()))return[2,t];d=new e(p,{}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(n),"integration_name:".concat(this.name)]),y.label=2;case 2:return y.trys.push([2,5,,6]),this.integration?[4,Object(a.a)(this.integration.invoke.call(this.integration,n,d))]:[3,4];case 3:y.sent(),y.label=4;case 4:return[3,6];case 5:throw v=y.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(n),"integration_name:".concat(this.name)]),v;case 6:return[2,t]}var b}))}))},t.prototype.track=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Track,"track")]}))}))},t.prototype.page=function(t){var e;return Object(r.b)(this,void 0,void 0,(function(){var n=this;return Object(r.d)(this,(function(r){return(null===(e=this.integration)||void 0===e?void 0:e._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return n.send(t,i.Page,"page")}))]}))}))},t.prototype.identify=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Identify,"identify")]}))}))},t.prototype.alias=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Alias,"alias")]}))}))},t.prototype.group=function(t){return Object(r.b)(this,void 0,void 0,(function(){return Object(r.d)(this,(function(e){return[2,this.send(t,i.Group,"group")]}))}))},t.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return Object(r.b)(t,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(e){switch(e.label){case 0:return this.flushing=!0,t=this,[4,O(this,this.buffer)];case 1:return t.buffer=e.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},t}();function _(t,e,n){var r,i;if(void 0===e&&(e={}),void 0===n&&(n={}),Object(u.b)())return[];t.plan&&((n=null!=n?n:{}).plan=t.plan);var o,s=null!==(i=null===(r=t.middlewareSettings)||void 0===r?void 0:r.routingRules)&&void 0!==i?i:[],c=(o=s,function(t){var e=t.payload,n=t.integration,r=t.next;new y.Store(o).getRulesByDestinationName(n).forEach((function(t){for(var n=t.matchers,i=t.transformers,o=0;o<n.length;o++)if(y.matches(e.obj,n[o])&&(e.obj=y.transform(e.obj,i[o]),null===e.obj))return r(null)})),r(e)}),a=Object(l.a)(t,null!=n?n:{});return Object.entries(t.integrations).map((function(t){var r,i=t[0],o=t[1];if(!i.startsWith("Segment")){var u=!1===e.All&&void 0===e[i];if(!1!==e[i]&&!u){var f=o.type,l=o.bundlingStatus,p=o.versionSettings;if(("unbundled"!==l&&("browser"===f||(null===(r=null==p?void 0:p.componentTypes)||void 0===r?void 0:r.includes("browser")))||"Segment.io"===i)&&"Iterable"!==i){var d=function(t){var e,n,r,i;return null!==(i=null!==(n=null===(e=t.versionSettings)||void 0===e?void 0:e.override)&&void 0!==n?n:null===(r=t.versionSettings)||void 0===r?void 0:r.version)&&void 0!==i?i:"latest"}(o),v=new x(i,d,a[i],n);return s.filter((function(t){return t.destinationName===i})).length>0&&v.addMiddleware(c),v}}}})).filter((function(t){return void 0!==t}))}}])]);