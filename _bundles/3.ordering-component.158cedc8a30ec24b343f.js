(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[3],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"applyDestinationMiddleware",(function(){return c})),t.d(n,"sourceMiddlewarePlugin",(function(){return u}));var r=t(2),i=t(5),o=t(23),a=t(46);function c(e,n,t){return Object(r.b)(this,void 0,void 0,(function(){function i(n,t){return Object(r.b)(this,void 0,void 0,(function(){var i,c,u;return Object(r.d)(this,(function(s){switch(s.label){case 0:return i=!1,c=null,[4,Object(o.a)(t({payload:Object(a.a)(n,{clone:!0,traverse:!1}),integration:e,next:function(e){i=!0,null===e&&(c=null),e&&(c=e.obj)}}))];case 1:return s.sent(),i||null===c||(c.integrations=Object(r.a)(Object(r.a)({},n.integrations),((u={})[e]=!1,u))),[2,c]}}))}))}var c,u,s,l;return Object(r.d)(this,(function(e){switch(e.label){case 0:c=0,u=t,e.label=1;case 1:return c<u.length?(s=u[c],[4,i(n,s)]):[3,4];case 2:if(null===(l=e.sent()))return[2,null];n=l,e.label=3;case 3:return c++,[3,1];case 4:return[2,n]}}))}))}function u(e,n){function t(t){return Object(r.b)(this,void 0,void 0,(function(){var c;return Object(r.d)(this,(function(r){switch(r.label){case 0:return c=!1,[4,Object(o.a)(e({payload:Object(a.a)(t.event,{clone:!0,traverse:!1}),integrations:null!=n?n:{},next:function(e){c=!0,e&&(t.event=e.obj)}}))];case 1:if(r.sent(),!c)throw new i.b({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,t]}}))}))}return{name:"Source Middleware ".concat(e.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(e){return Promise.resolve(e)},track:t,page:t,identify:t,alias:t,group:t}}}}]);