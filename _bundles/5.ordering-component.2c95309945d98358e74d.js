(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[5],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"remoteMiddlewares",(function(){return s}));var r=n(3),i=n(34),a=n(51),c=n(24);function s(e,t,n){var s;return Object(r.b)(this,void 0,void 0,(function(){var o,u,d,l,b=this;return Object(r.d)(this,(function(w){switch(w.label){case 0:return Object(i.b)()?[2,[]]:(o=Object(c.b)(),u=null!==(s=t.enabledMiddleware)&&void 0!==s?s:{},d=Object.entries(u).filter((function(e){e[0];return e[1]})).map((function(e){return e[0]})),l=d.map((function(t){return Object(r.b)(b,void 0,void 0,(function(){var i,c,s,u;return Object(r.d)(this,(function(r){switch(r.label){case 0:i=t.replace("@segment/",""),c=i,n&&(c=btoa(i).replace(/=/g,"")),s=o+"/middleware/"+c+"/latest/"+c+".js.gz",r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Object(a.a)(s)];case 2:return r.sent(),[2,window[i+"Middleware"]];case 3:return u=r.sent(),e.log("error",u),e.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}}))}))})),[4,Promise.all(l)]);case 1:return[2,w.sent().filter(Boolean)]}}))}))}}}]);