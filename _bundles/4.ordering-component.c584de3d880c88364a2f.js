(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[4],{378:function(r,a,e){"use strict";function n(r,a){return Object.keys(a).reduce((function(e,n){n.startsWith(r)&&(e[n.substr(r.length)]=a[n]);return e}),{})}e.r(a),e.d(a,"queryString",(function(){return t}));var s=e(209);function t(r,a){var e=document.createElement("a");e.href=a;var t=e.search.slice(1).split("&").reduce((function(r,a){var e=a.split("="),n=e[0],t=e[1];return r[n]=Object(s.a)(t),r}),{}),i=[],u=t.ajs_uid,o=t.ajs_event;if(t.ajs_aid){var c=Array.isArray(t.ajs_aid)?t.ajs_aid[0]:t.ajs_aid;r.setAnonymousId(c)}if(u){var d=Array.isArray(t.ajs_uid)?t.ajs_uid[0]:t.ajs_uid,j=n("ajs_trait_",t);i.push(r.identify(d,j))}if(o){var _=Array.isArray(t.ajs_event)?t.ajs_event[0]:t.ajs_event,p=n("ajs_prop_",t);i.push(r.track(_,p))}return Promise.all(i)}}}]);