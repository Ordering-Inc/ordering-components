(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[5],{353:function(e,t,n){"use strict";n.r(t),n.d(t,"remoteMiddlewares",(function(){return o}));var r=n(2),c=n(41),i=n(42),a=n(32);function o(e,t,n){var o;return Object(r.b)(this,void 0,void 0,(function(){var s,u,d,l,b=this;return Object(r.d)(this,(function(w){switch(w.label){case 0:return Object(c.b)()?[2,[]]:(s=Object(a.b)(),u=null!==(o=t.enabledMiddleware)&&void 0!==o?o:{},d=Object.entries(u).filter((function(e){e[0];return e[1]})).map((function(e){return e[0]})),l=d.map((function(t){return Object(r.b)(b,void 0,void 0,(function(){var c,a,o,u;return Object(r.d)(this,(function(r){switch(r.label){case 0:c=t.replace("@segment/",""),a=c,n&&(a=btoa(c).replace(/=/g,"")),o="".concat(s,"/middleware/").concat(a,"/latest/").concat(a,".js.gz"),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Object(i.a)(o)];case 2:return r.sent(),[2,window["".concat(c,"Middleware")]];case 3:return u=r.sent(),e.log("error",u),e.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}}))}))})),[4,Promise.all(l)]);case 1:return[2,w.sent().filter(Boolean)]}}))}))}}}]);