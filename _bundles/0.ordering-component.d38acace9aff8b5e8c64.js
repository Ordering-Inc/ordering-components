(window.webpackJsonpOrderingComponents=window.webpackJsonpOrderingComponents||[]).push([[0],{129:function(t,n,e){"use strict";function i(t,n){var e,i;return"boolean"==typeof(null==n?void 0:n.enabled)?n.enabled:null===(i=null===(e=null==t?void 0:t.__default)||void 0===e?void 0:e.enabled)||void 0===i||i}e.d(n,"a",(function(){return i}))},231:function(t,n,e){"use strict";e.r(n),e.d(n,"LegacyDestination",(function(){return w})),e.d(n,"ajsDestinations",(function(){return _}));var i=e(2),r=e(12),o=e(10),a=e(5),s=e(31),c=e(15),u=e(129),d=e(61),l=e(67),h=e(11),v=e(19),f=e(62),b=e(23),p=e(32);function g(t){return t.toLowerCase().replace(".","").replace(/\s+/g,"-")}function y(t,n){return void 0===n&&(n=!1),n?btoa(t).replace(/=/g,""):void 0}function j(t,n,e,r){return Object(i.b)(this,void 0,void 0,(function(){var o,a,s,c,u,d;return Object(i.d)(this,(function(l){switch(l.label){case 0:o=g(n),a=y(o,r),s=Object(b.b)(),c="".concat(s,"/integrations/").concat(null!=a?a:o,"/").concat(e,"/").concat(null!=a?a:o,".dynamic.js.gz"),l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Object(p.a)(c)];case 2:return l.sent(),function(t,n,e){var r,o;try{var a=(null!==(o=null===(r=null===window||void 0===window?void 0:window.performance)||void 0===r?void 0:r.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];a&&n.stats.gauge("legacy_destination_time",Math.round(a.duration),Object(i.f)([e],a.duration<100?["cached"]:[],!0))}catch(t){}}(c,t,n),[3,4];case 3:throw u=l.sent(),t.stats.gauge("legacy_destination_time",-1,["plugin:".concat(n),"failed"]),u;case 4:return d=window["".concat(o,"Deps")],[4,Promise.all(d.map((function(t){return Object(p.a)(s+t+".gz")})))];case 5:return l.sent(),window["".concat(o,"Loader")](),[2,window["".concat(o,"Integration")]]}}))}))}function O(t){return"object"===Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function m(t,n){return Object(i.b)(this,void 0,void 0,(function(){var e,r=this;return Object(i.d)(this,(function(s){switch(s.label){case 0:return e=[],Object(o.a)()?[2,n]:[4,Object(l.a)((function(){return n.length>0&&Object(o.b)()}),(function(){return Object(i.b)(r,void 0,void 0,(function(){var r,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return(r=n.pop())?[4,Object(c.a)(r,t)]:[2];case 1:return o=i.sent(),o instanceof a.a||e.push(r),[2]}}))}))}))];case 1:return s.sent(),e.map((function(t){return n.pushWithBackoff(t)})),[2,n]}}))}))}var w=function(){function t(t,n,e,r,o){void 0===e&&(e={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=n,this.settings=Object(i.a)({},e),this.disableAutoISOConversion=r.disableAutoISOConversion||!1,this.integrationSource=o,this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=r,this.buffer=r.disableClientPersistence?new h.b(4,[]):new v.a(4,"dest-".concat(t)),this.scheduleFlush()}return t.prototype.isLoaded=function(){return this._ready},t.prototype.ready=function(){var t;return null!==(t=this.onReady)&&void 0!==t?t:Promise.resolve()},t.prototype.load=function(t,n){var e;return Object(i.b)(this,void 0,void 0,(function(){var r,o,a=this;return Object(i.d)(this,(function(i){switch(i.label){case 0:return this._ready||void 0!==this.onReady?[2]:null===(e=this.integrationSource)||void 0===e?[3,1]:(o=e,[3,3]);case 1:return[4,j(t,this.name,this.version,this.options.obfuscate)];case 2:o=i.sent(),i.label=3;case 3:r=o,this.integration=function(t,n,e){var i;"Integration"in t?(t({user:function(){return e.user()},addIntegration:function(){}}),i=t.Integration):i=t;var r=new i(n);return r.analytics=e,r}(r,this.settings,n),this.onReady=new Promise((function(t){a.integration.once("ready",(function(){a._ready=!0,t(!0)}))})),this.onInitialize=new Promise((function(t){a.integration.on("initialize",(function(){a._initialized=!0,t(!0)}))}));try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(n){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),n}return[2]}}))}))},t.prototype.unload=function(t,n){return function(t,n,e){return Object(i.b)(this,void 0,void 0,(function(){var r,o,a,s;return Object(i.d)(this,(function(i){return r=Object(b.b)(),o=g(t),a=y(t,e),s="".concat(r,"/integrations/").concat(null!=a?a:o,"/").concat(n,"/").concat(null!=a?a:o,".dynamic.js.gz"),[2,Object(p.b)(s)]}))}))}(this.name,this.version,this.options.obfuscate)},t.prototype.addMiddleware=function(){for(var t,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];this.middleware=(t=this.middleware).concat.apply(t,n)},t.prototype.shouldBuffer=function(t){return"page"!==t.event.type&&(Object(o.a)()||!1===this._ready||!1===this._initialized)},t.prototype.send=function(t,n,e){var r,o;return Object(i.b)(this,void 0,void 0,(function(){var s,c,d,l,h,v;return Object(i.d)(this,(function(b){switch(b.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(s=null===(o=null===(r=this.options)||void 0===r?void 0:r.plan)||void 0===o?void 0:o.track,c=t.event.event,s&&c&&"Segment.io"!==this.name){if(d=s[c],!Object(u.a)(s,d))return t.updateEvent("integrations",Object(i.a)(Object(i.a)({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new a.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",Object(i.a)(Object(i.a)({},t.event.integrations),null==d?void 0:d.integrations)),(null==d?void 0:d.enabled)&&!1===(null==d?void 0:d.integrations[this.name]))return t.cancel(new a.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,Object(f.applyDestinationMiddleware)(this.name,t.event,this.middleware)];case 1:if(null===(l=b.sent()))return[2,t];h=new n(l,{traverse:!this.disableAutoISOConversion}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(e),"integration_name:".concat(this.name)]),b.label=2;case 2:return b.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,e,h)]:[3,4];case 3:b.sent(),b.label=4;case 4:return[3,6];case 5:throw v=b.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(e),"integration_name:".concat(this.name)]),v;case 6:return[2,t]}}))}))},t.prototype.track=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Track,"track")]}))}))},t.prototype.page=function(t){var n;return Object(i.b)(this,void 0,void 0,(function(){var e=this;return Object(i.d)(this,(function(i){return(null===(n=this.integration)||void 0===n?void 0:n._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return e.send(t,r.Page,"page")}))]}))}))},t.prototype.identify=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Identify,"identify")]}))}))},t.prototype.alias=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Alias,"alias")]}))}))},t.prototype.group=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Group,"group")]}))}))},t.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return Object(i.b)(t,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return this.flushing=!0,t=this,[4,m(this,this.buffer)];case 1:return t.buffer=n.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},t}();function _(t,n,e,r,o){var a,c;if(void 0===n&&(n={}),void 0===e&&(e={}),Object(s.b)())return[];t.plan&&((e=null!=e?e:{}).plan=t.plan);var u=null!==(c=null===(a=t.middlewareSettings)||void 0===a?void 0:a.routingRules)&&void 0!==c?c:[],l=t.integrations,h=e.integrations,v=Object(d.a)(t,null!=e?e:{}),f=null==o?void 0:o.reduce((function(t,n){var e;return Object(i.a)(Object(i.a)({},t),((e={})[function(t){return("Integration"in t?t.Integration:t).prototype.name}(n)]=n,e))}),{}),b=new Set(Object(i.f)(Object(i.f)([],Object.keys(l).filter((function(t){return function(t,n){var e,i=n.type,r=n.bundlingStatus,o=n.versionSettings,a="unbundled"!==r&&("browser"===i||(null===(e=null==o?void 0:o.componentTypes)||void 0===e?void 0:e.includes("browser")));return!t.startsWith("Segment")&&"Iterable"!==t&&a}(t,l[t])})),!0),Object.keys(f||{}).filter((function(t){return O(l[t])||O(null==h?void 0:h[t])})),!0));return Array.from(b).filter((function(t){return!function(t,n){var e=!1===n.All&&void 0===n[t];return!1===n[t]||e}(t,n)})).map((function(t){var n=function(t){var n,e,i,r;return null!==(r=null!==(e=null===(n=null==t?void 0:t.versionSettings)||void 0===n?void 0:n.override)&&void 0!==e?e:null===(i=null==t?void 0:t.versionSettings)||void 0===i?void 0:i.version)&&void 0!==r?r:"latest"}(l[t]),i=new w(t,n,v[t],e,null==f?void 0:f[t]);return u.filter((function(n){return n.destinationName===t})).length>0&&r&&i.addMiddleware(r),i}))}}}]);