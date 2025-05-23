"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderListGroups = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderListGroups = exports.OrderListGroups = function OrderListGroups(props) {
  var _props$combineTabs, _configs$combine_pend, _configs$logistic_mod, _configs$notification, _configs$notification2, _orderGroupStatusCust, _orderGroupStatusCust2, _orderGroupStatusCust3, _orderGroupStatusCust4, _orderGroupStatusCust5, _paginationSettings$p, _paginationSettings$p2, _ordersGroup$currentT12;
  var UIComponent = props.UIComponent,
    orderBy = props.orderBy,
    isIos = props.isIos,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    orderGroupStatusCustom = props.orderGroupStatusCustom,
    onOrdersDeleted = props.onOrdersDeleted,
    customOrderTypes = props.customOrderTypes,
    customPaymethods = props.customPaymethods,
    isDriverApp = props.isDriverApp;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _combineTabs = (_props$combineTabs = props.combineTabs) !== null && _props$combineTabs !== void 0 ? _props$combineTabs : (configs === null || configs === void 0 || (_configs$combine_pend = configs.combine_pending_and_progress_orders) === null || _configs$combine_pend === void 0 ? void 0 : _configs$combine_pend.value) === '1';
  var _useState = (0, _react.useState)(_combineTabs),
    _useState2 = _slicedToArray(_useState, 2),
    combineTabs = _useState2[0],
    setCombineTabsState = _useState2[1];
  var isLogisticActivated = configs === null || configs === void 0 || (_configs$logistic_mod = configs.logistic_module) === null || _configs$logistic_mod === void 0 ? void 0 : _configs$logistic_mod.value;
  var ordersStatusArray = combineTabs ? ['active', 'completed', 'cancelled'] : ['pending', 'inProgress', 'completed', 'cancelled'];
  var notificationStatusses = props.isDriverApp ? (configs === null || configs === void 0 || (_configs$notification = configs.notification_driver_states) === null || _configs$notification === void 0 ? void 0 : _configs$notification.value.split('|').map(function (value) {
    return Number(value);
  })) || [] : (configs === null || configs === void 0 || (_configs$notification2 = configs.notification_business_states) === null || _configs$notification2 === void 0 ? void 0 : _configs$notification2.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var ordersGroupStatus = {
    active: (_orderGroupStatusCust = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.active) !== null && _orderGroupStatusCust !== void 0 ? _orderGroupStatusCust : [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    pending: (_orderGroupStatusCust2 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.pending) !== null && _orderGroupStatusCust2 !== void 0 ? _orderGroupStatusCust2 : [0, 13],
    inProgress: (_orderGroupStatusCust3 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.inProgress) !== null && _orderGroupStatusCust3 !== void 0 ? _orderGroupStatusCust3 : [3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    completed: (_orderGroupStatusCust4 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.completed) !== null && _orderGroupStatusCust4 !== void 0 ? _orderGroupStatusCust4 : [1, 11, 15],
    cancelled: (_orderGroupStatusCust5 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.cancelled) !== null && _orderGroupStatusCust5 !== void 0 ? _orderGroupStatusCust5 : [2, 5, 6, 10, 12, 16, 17]
  };
  var orderStructure = {
    loading: false,
    error: null,
    orders: [],
    pagination: {
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }
  };
  var _useState3 = (0, _react.useState)({
      active: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.active,
        currentFilter: ordersGroupStatus.active,
        fetched: false
      }),
      pending: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.pending,
        currentFilter: ordersGroupStatus.pending,
        fetched: false
      }),
      inProgress: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.inProgress,
        currentFilter: ordersGroupStatus.inProgress,
        fetched: false
      }),
      completed: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.completed,
        currentFilter: ordersGroupStatus.completed,
        fetched: false
      }),
      cancelled: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.cancelled,
        currentFilter: ordersGroupStatus.cancelled,
        fetched: false
      })
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersGroup = _useState4[0],
    setOrdersGroup = _useState4[1];
  var _useState5 = (0, _react.useState)(combineTabs ? 'active' : 'pending'),
    _useState6 = _slicedToArray(_useState5, 2),
    currentTabSelected = _useState6[0],
    setCurrentTabSelected = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null,
      orders: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    logisticOrders = _useState8[0],
    setlogisticOrders = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      error: null,
      messages: []
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    messages = _useState0[0],
    setMessages = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    currentFilters = _useState10[0],
    setCurrentFilters = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    filtered = _useState12[0],
    setFiltered = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null,
      result: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    ordersDeleted = _useState14[0],
    setOrdersDeleted = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: true,
      error: null,
      paymethods: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    controlsState = _useState16[0],
    setControlsState = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    businessIDs = _useState18[0],
    setBusinessIDs = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    orderLogisticAdded = _useState20[0],
    setOrderLogisticAdded = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    orderLogisticUpdated = _useState22[0],
    setOrderLogisticUpdated = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    recentlyReceivedMessage = _useState24[0],
    setRecentlyReceivedMessage = _useState24[1];
  var _useState25 = (0, _react.useState)({
      orders: [],
      loading: false,
      error: null,
      pagination: {
        currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
        pageSize: (_paginationSettings$p2 = paginationSettings.pageSize) !== null && _paginationSettings$p2 !== void 0 ? _paginationSettings$p2 : 10,
        total: null
      }
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    ordersFiltered = _useState26[0],
    setOrdersFiltered = _useState26[1];
  var requestsState = {};
  var handleSelectCurrentTab = function handleSelectCurrentTab(value) {
    if (!isDriverApp) {
      setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, value, _objectSpread(_objectSpread({}, ordersGroup[value]), {}, {
        loading: true
      }))));
    }
    if (value === 'logisticOrders') {
      setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
        loading: true
      }));
    }
    setCurrentTabSelected(value);
  };
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _filtered$customer, _filtered$customer2, _filtered$date, _filtered$date3;
      var page, _ref$pageSize, pageSize, orderStatus, newFetch, options, _ordersGroup$currentT, _ordersGroup$currentT2, _paymethodResult, paymethodResult, _filtered$driver_grou, _filtered$customer3, _filtered$customer6, customerOptions, _filtered$customer4, _filtered$customer5, _filtered$customer7, _filtered$customer8, _filtered$date2, _filtered$date4, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            page = _ref.page, _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? paginationSettings.pageSize : _ref$pageSize, orderStatus = _ref.orderStatus, newFetch = _ref.newFetch;
            options = {
              query: {
                orderBy: orderBy,
                page: page,
                page_size: pageSize
              }
            };
            options.query.where = [];
            if (orderStatus) {
              if (!(filtered !== null && filtered !== void 0 && filtered.state)) {
                options.query.where.push({
                  attribute: 'status',
                  value: orderStatus
                });
              }
              if (((_ordersGroup$currentT = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT === void 0 || (_ordersGroup$currentT = _ordersGroup$currentT.orders) === null || _ordersGroup$currentT === void 0 ? void 0 : _ordersGroup$currentT.length) > 0 && !newFetch) {
                options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                  page: 1
                });
                if (!(filtered !== null && filtered !== void 0 && filtered.id)) {
                  options.query.where.push({
                    attribute: 'id',
                    value: {
                      condition: '!=',
                      value: (_ordersGroup$currentT2 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT2 === void 0 || (_ordersGroup$currentT2 = _ordersGroup$currentT2.orders) === null || _ordersGroup$currentT2 === void 0 ? void 0 : _ordersGroup$currentT2.map(function (o) {
                        return o.id;
                      })
                    }
                  });
                }
              }
            }
            if (filtered !== null && filtered !== void 0 && filtered.id) {
              options.query.where.push({
                attribute: 'id',
                value: {
                  condition: 'ilike',
                  value: isIos ? "%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.id, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.id, "%"))
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.external_id) {
              options.query.where.push({
                attribute: 'external_id',
                value: {
                  condition: 'ilike',
                  value: isIos ? "%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.external_id, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.external_id, "%"))
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.state) {
              options.query.where.push({
                attribute: 'status',
                value: filtered.state
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.city) {
              options.query.where.push({
                attribute: 'business',
                conditions: [{
                  attribute: 'city_id',
                  value: filtered === null || filtered === void 0 ? void 0 : filtered.city
                }]
              });
            }
            if (!(filtered !== null && filtered !== void 0 && filtered.paymethod || customPaymethods)) {
              _context.next = 15;
              break;
            }
            paymethodResult = controlsState;
            if (controlsState.paymethods.length) {
              _context.next = 14;
              break;
            }
            _context.next = 13;
            return getControls();
          case 13:
            paymethodResult = _context.sent;
          case 14:
            options.query.where.push({
              attribute: 'paymethod_id',
              value: !!(filtered !== null && filtered !== void 0 && filtered.paymethod) && (filtered === null || filtered === void 0 ? void 0 : filtered.paymethod) || ((_paymethodResult = paymethodResult) === null || _paymethodResult === void 0 ? void 0 : _paymethodResult.paymethods)
            });
          case 15:
            if (filtered !== null && filtered !== void 0 && filtered.driver) {
              options.query.where.push({
                attribute: 'driver_id',
                value: filtered === null || filtered === void 0 ? void 0 : filtered.driver
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.driver_groups) {
              options.query.where.push({
                attribute: 'driver_id',
                value: filtered === null || filtered === void 0 || (_filtered$driver_grou = filtered.driver_groups) === null || _filtered$driver_grou === void 0 ? void 0 : _filtered$driver_grou.drivers
              });
            }
            if (filtered !== null && filtered !== void 0 && (_filtered$customer = filtered.customer) !== null && _filtered$customer !== void 0 && _filtered$customer.email || filtered !== null && filtered !== void 0 && (_filtered$customer2 = filtered.customer) !== null && _filtered$customer2 !== void 0 && _filtered$customer2.phone) {
              customerOptions = [];
              if (filtered !== null && filtered !== void 0 && (_filtered$customer3 = filtered.customer) !== null && _filtered$customer3 !== void 0 && _filtered$customer3.email) {
                customerOptions.push({
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(filtered === null || filtered === void 0 || (_filtered$customer4 = filtered.customer) === null || _filtered$customer4 === void 0 ? void 0 : _filtered$customer4.email, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 || (_filtered$customer5 = filtered.customer) === null || _filtered$customer5 === void 0 ? void 0 : _filtered$customer5.email, "%"))
                  }
                });
              }
              if (filtered !== null && filtered !== void 0 && (_filtered$customer6 = filtered.customer) !== null && _filtered$customer6 !== void 0 && _filtered$customer6.phone) {
                customerOptions.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(filtered === null || filtered === void 0 || (_filtered$customer7 = filtered.customer) === null || _filtered$customer7 === void 0 ? void 0 : _filtered$customer7.phone, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 || (_filtered$customer8 = filtered.customer) === null || _filtered$customer8 === void 0 ? void 0 : _filtered$customer8.phone, "%"))
                  }
                });
              }
              options.query.where.push({
                attribute: 'customer',
                conditions: customerOptions
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.delivery_type || customOrderTypes) {
              options.query.where.push({
                attribute: 'delivery_type',
                value: !!(filtered !== null && filtered !== void 0 && filtered.delivery_type) && (filtered === null || filtered === void 0 ? void 0 : filtered.delivery_type) || customOrderTypes
              });
            }
            if (filtered !== null && filtered !== void 0 && (_filtered$date = filtered.date) !== null && _filtered$date !== void 0 && _filtered$date.from) {
              options.query.where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '>=',
                  value: filtered === null || filtered === void 0 || (_filtered$date2 = filtered.date) === null || _filtered$date2 === void 0 ? void 0 : _filtered$date2.from
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && (_filtered$date3 = filtered.date) !== null && _filtered$date3 !== void 0 && _filtered$date3.to) {
              options.query.where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '<=',
                  value: filtered === null || filtered === void 0 || (_filtered$date4 = filtered.date) === null || _filtered$date4 === void 0 ? void 0 : _filtered$date4.to
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.timeStatus) {
              options.query.where.push({
                attribute: 'time_status',
                value: filtered === null || filtered === void 0 ? void 0 : filtered.timeStatus
              });
            }
            if (!isDriverApp) {
              options.query.where.push({
                attribute: 'products',
                conditions: [{
                  attribute: 'type',
                  value: {
                    condition: '=',
                    value: 'item'
                  }
                }]
              });
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = asDashboard ? ordering.setAccessToken(session.token).orders().asDashboard() : ordering.setAccessToken(session.token).orders();
            _context.next = 29;
            return functionFetch.get(options);
          case 29:
            return _context.abrupt("return", _context.sent);
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getOrders(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getControls = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _result$paymethods, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, obj, _controlsState$error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setControlsState(_objectSpread(_objectSpread({}, controlsState), {}, {
              loading: true
            }));
            _context2.next = 4;
            return ordering.setAccessToken(session.token).controls().get();
          case 4:
            _yield$ordering$setAc = _context2.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            obj = _objectSpread(_objectSpread({}, controlsState), {}, {
              loading: false,
              paymethods: result === null || result === void 0 || (_result$paymethods = result.paymethods) === null || _result$paymethods === void 0 || (_result$paymethods = _result$paymethods.filter(function (p) {
                return customPaymethods === null || customPaymethods === void 0 ? void 0 : customPaymethods.includes(p.name);
              })) === null || _result$paymethods === void 0 ? void 0 : _result$paymethods.map(function (pay) {
                return pay.id;
              }),
              error: error ? result : null
            });
            setControlsState(obj);
            return _context2.abrupt("return", obj);
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            setControlsState(_objectSpread(_objectSpread({}, controlsState), {}, {
              loading: false,
              error: _context2.t0 !== null && _context2.t0 !== void 0 && _context2.t0.message ? (_controlsState$error = controlsState.error) === null || _controlsState$error === void 0 ? void 0 : _controlsState$error.push(_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) : ['ERROR']
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function getControls() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _ref5,
        newFetch,
        newFetchCurrent,
        options,
        _ordersGroup$currentT3,
        pageSize,
        _ordersGroup$currentT4,
        _ordersGroup$currentT5,
        _ordersGroup$currentT6,
        _yield$getOrders,
        _yield$getOrders$cont,
        error,
        result,
        pagination,
        _ordersCleaned,
        _err$message,
        _err$message2,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref5 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, newFetch = _ref5.newFetch, newFetchCurrent = _ref5.newFetchCurrent;
            options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            if (!(!(newFetch || newFetchCurrent) && ordersGroup[currentTabSelected].pagination.currentPage === ordersGroup[currentTabSelected].pagination.totalPages && ordersGroup[currentTabSelected].pagination.total !== null)) {
              _context3.next = 4;
              break;
            }
            return _context3.abrupt("return");
          case 4:
            if (newFetch) {
              ordersStatusArray === null || ordersStatusArray === void 0 || ordersStatusArray.map(function (tab) {
                ordersGroup = _objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, tab, _objectSpread(_objectSpread({}, orderStructure), {}, {
                  defaultFilter: ordersGroupStatus[tab],
                  currentFilter: ordersGroup[tab].currentFilter,
                  orders: ordersGroup[tab].orders
                })));
              });
            } else if (newFetchCurrent) {
              ordersGroup = _objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, orderStructure), {}, {
                defaultFilter: ordersGroupStatus[currentTabSelected],
                currentFilter: (_ordersGroup$currentT3 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT3 === void 0 ? void 0 : _ordersGroup$currentT3.currentFilter
              })));
            }
            pageSize = paginationSettings.pageSize;
            _context3.prev = 6;
            if (options !== null && options !== void 0 && options.allStatusses) {
              setOrdersFiltered(_objectSpread(_objectSpread({}, ordersFiltered), {}, {
                loading: true
              }));
            } else {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: true
              }))));
            }
            _context3.next = 10;
            return getOrders({
              page: 1,
              pageSize: pageSize,
              orderStatus: options !== null && options !== void 0 && options.allStatusses ? null : (_ordersGroup$currentT4 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT4 === void 0 ? void 0 : _ordersGroup$currentT4.currentFilter,
              newFetch: newFetch || newFetchCurrent
            });
          case 10:
            _yield$getOrders = _context3.sent;
            _yield$getOrders$cont = _yield$getOrders.content;
            error = _yield$getOrders$cont.error;
            result = _yield$getOrders$cont.result;
            pagination = _yield$getOrders$cont.pagination;
            _ordersCleaned = error ? newFetch || newFetchCurrent ? [] : sortOrders((_ordersGroup$currentT5 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT5 === void 0 ? void 0 : _ordersGroup$currentT5.orders) : newFetch || newFetchCurrent ? sortOrders(result) : sortOrders((_ordersGroup$currentT6 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT6 === void 0 ? void 0 : _ordersGroup$currentT6.orders.concat(result));
            if (!(options !== null && options !== void 0 && options.allStatusses)) {
              _context3.next = 19;
              break;
            }
            setOrdersFiltered({
              error: error,
              orders: formatOrdersGrouped(_ordersCleaned, {
                allStatusses: true
              }),
              pagination: _objectSpread(_objectSpread({}, ordersFiltered.pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              }),
              loading: false
            });
            return _context3.abrupt("return");
          case 19:
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              loading: false,
              orders: _ordersCleaned,
              error: error ? result : null,
              fetched: true,
              pagination: _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected].pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              })
            }))));
            _context3.next = 25;
            break;
          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](6);
            if (_context3.t0.constructor.name !== 'Cancel') {
              if (options !== null && options !== void 0 && options.allStatusses) {
                setOrdersFiltered(_objectSpread(_objectSpread({}, ordersFiltered), {}, {
                  loading: false,
                  error: [(_err$message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']
                }));
              } else {
                setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                  loading: false,
                  error: [(_err$message2 = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']
                }))));
              }
            }
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[6, 22]]);
    }));
    return function loadOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var options,
        _ordersGroup$currentT7,
        _ordersGroup$currentT8,
        _ordersGroup$currentT9,
        _yield$getOrders2,
        _yield$getOrders2$con,
        error,
        result,
        pagination,
        _ordersCleaned,
        _err$message3,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            options = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
            if (!(options !== null && options !== void 0 && options.allStatusses)) {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: true
              }))));
            } else {
              setOrdersFiltered(_objectSpread(_objectSpread({}, ordersFiltered), {}, {
                loading: true
              }));
            }
            _context4.prev = 2;
            _context4.next = 5;
            return getOrders({
              page: options !== null && options !== void 0 && options.allStatusses ? ordersFiltered.pagination.currentPage + 1 : ordersGroup[currentTabSelected].pagination.currentPage + 1,
              orderStatus: options !== null && options !== void 0 && options.allStatusses ? null : (_ordersGroup$currentT7 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT7 === void 0 ? void 0 : _ordersGroup$currentT7.currentFilter,
              newFetch: true
            });
          case 5:
            _yield$getOrders2 = _context4.sent;
            _yield$getOrders2$con = _yield$getOrders2.content;
            error = _yield$getOrders2$con.error;
            result = _yield$getOrders2$con.result;
            pagination = _yield$getOrders2$con.pagination;
            if (!(options !== null && options !== void 0 && options.allStatusses)) {
              _context4.next = 13;
              break;
            }
            setOrdersFiltered({
              error: error,
              orders: formatOrdersGrouped([].concat(_toConsumableArray(ordersFiltered === null || ordersFiltered === void 0 ? void 0 : ordersFiltered.orders), _toConsumableArray(sortOrders(result))), {
                allStatusses: true
              }),
              pagination: _objectSpread(_objectSpread({}, ordersFiltered.pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              }),
              loading: false
            });
            return _context4.abrupt("return");
          case 13:
            _ordersCleaned = error ? sortOrders((_ordersGroup$currentT8 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT8 === void 0 ? void 0 : _ordersGroup$currentT8.orders) : sortOrders((_ordersGroup$currentT9 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT9 === void 0 || (_ordersGroup$currentT9 = _ordersGroup$currentT9.orders) === null || _ordersGroup$currentT9 === void 0 ? void 0 : _ordersGroup$currentT9.concat(result));
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              loading: false,
              orders: _ordersCleaned,
              error: error ? result : null,
              pagination: !error ? _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected].pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              }) : ordersGroup[currentTabSelected].pagination
            }))));
            _context4.next = 20;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](2);
            if (_context4.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message3 = _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) !== null && _err$message3 !== void 0 ? _err$message3 : 'ERROR']
              }))));
            }
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 17]]);
    }));
    return function loadMoreOrders() {
      return _ref6.apply(this, arguments);
    };
  }();
  var loadMessages = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(orderId) {
      var url, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context5.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 5:
            response = _context5.sent;
            _context5.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context5.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setMessages({
                messages: result,
                loading: false,
                error: null
              });
            } else {
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: result
              }));
            }
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context5.t0.Messages]
            }));
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function loadMessages(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();
  var deleteOrders = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(orderIds) {
      var _ordersGroup$currentT0, _ordersGroup$currentT1, errorState, _yield$ordering$setAc3, error, _iterator, _step, id, _yield$ordering$setAc4, multiError, isError, idsDeleted, _err$message4;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setOrdersDeleted(_objectSpread(_objectSpread({}, ordersDeleted), {}, {
              loading: true
            }));
            errorState = [];
            if (!(orderIds.length === 1)) {
              _context6.next = 11;
              break;
            }
            _context6.next = 6;
            return ordering.setAccessToken(session.token).orders(orderIds[0]).delete();
          case 6:
            _yield$ordering$setAc3 = _context6.sent;
            error = _yield$ordering$setAc3.content.error;
            errorState.push({
              error: error,
              id: orderIds[0]
            });
            _context6.next = 32;
            break;
          case 11:
            if (!(orderIds.length > 1)) {
              _context6.next = 32;
              break;
            }
            _iterator = _createForOfIteratorHelper(orderIds);
            _context6.prev = 13;
            _iterator.s();
          case 15:
            if ((_step = _iterator.n()).done) {
              _context6.next = 24;
              break;
            }
            id = _step.value;
            _context6.next = 19;
            return ordering.setAccessToken(session.token).orders(id).delete();
          case 19:
            _yield$ordering$setAc4 = _context6.sent;
            multiError = _yield$ordering$setAc4.content.error;
            errorState.push({
              error: multiError,
              id: id
            });
          case 22:
            _context6.next = 15;
            break;
          case 24:
            _context6.next = 29;
            break;
          case 26:
            _context6.prev = 26;
            _context6.t0 = _context6["catch"](13);
            _iterator.e(_context6.t0);
          case 29:
            _context6.prev = 29;
            _iterator.f();
            return _context6.finish(29);
          case 32:
            isError = errorState.some(function (e) {
              return e.error;
            });
            idsDeleted = errorState === null || errorState === void 0 ? void 0 : errorState.map(function (obj) {
              return !obj.error && obj.id;
            });
            onOrdersDeleted && onOrdersDeleted({
              isError: isError,
              list: idsDeleted
            });
            setOrdersDeleted(_objectSpread(_objectSpread({}, ordersDeleted), {}, {
              loading: false
            }));
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              orders: idsDeleted.length ? sortOrders((_ordersGroup$currentT0 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT0 === void 0 || (_ordersGroup$currentT0 = _ordersGroup$currentT0.orders) === null || _ordersGroup$currentT0 === void 0 ? void 0 : _ordersGroup$currentT0.filter(function (order) {
                return !idsDeleted.includes(order.id);
              })) : sortOrders((_ordersGroup$currentT1 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT1 === void 0 ? void 0 : _ordersGroup$currentT1.orders)
            }))));
            _context6.next = 42;
            break;
          case 39:
            _context6.prev = 39;
            _context6.t1 = _context6["catch"](0);
            if (_context6.t1.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message4 = _context6.t1 === null || _context6.t1 === void 0 ? void 0 : _context6.t1.message) !== null && _err$message4 !== void 0 ? _err$message4 : 'ERROR']
              }))));
            }
          case 42:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 39], [13, 26, 29, 32]]);
    }));
    return function deleteOrders(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();
  var loadLogisticOrders = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(isAlreadyFetched) {
      var _session$user, url, response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/drivers/").concat((_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id, "/assign_requests");
            _context7.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context7.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context7.next = 14;
              break;
            }
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              loading: false,
              orders: result.filter(function (order) {
                var _order$order_group;
                return !(order !== null && order !== void 0 && order.order_group && (order === null || order === void 0 || (_order$order_group = order.order_group) === null || _order$order_group === void 0 || (_order$order_group = _order$order_group.orders) === null || _order$order_group === void 0 ? void 0 : _order$order_group.length) === 0);
              })
            }));
            return _context7.abrupt("return");
          case 14:
            setlogisticOrders({
              loading: false,
              orders: [],
              error: result
            });
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            setlogisticOrders({
              loading: false,
              orders: [],
              error: _context7.t0.message
            });
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 17]]);
    }));
    return function loadLogisticOrders(_x4) {
      return _ref9.apply(this, arguments);
    };
  }();
  var sortOrders = function sortOrders(orders) {
    var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    var ordersSorted = orders === null || orders === void 0 ? void 0 : orders.sort(function (a, b) {
      if (sortBy === 'desc') {
        return b.id - a.id;
      }
      return a.id - b.id;
    });
    return ordersSorted;
  };
  var filterByIdUnique = function filterByIdUnique(array, currentTabSelected) {
    var _ordersGroupStatus$cu;
    if (!array) return [];
    var tempObj = {};
    var status = (_ordersGroupStatus$cu = ordersGroupStatus[currentTabSelected]) !== null && _ordersGroupStatus$cu !== void 0 ? _ordersGroupStatus$cu : [];
    return array.map(function (element) {
      if (Array.isArray(element)) {
        var _array$;
        var _array = element[0][1].map(function (item) {
          if (!tempObj[item.id] && status.includes(item.status)) {
            tempObj[item.id] = true;
            return item;
          }
          return null;
        }).filter(function (item) {
          return item !== null;
        });
        return _array.length ? [[(_array$ = _array[0]) === null || _array$ === void 0 ? void 0 : _array$.cart_group_id.toString(), _array]] : null;
      } else {
        if (!tempObj[element.id] && status.includes(element.status)) {
          tempObj[element.id] = true;
          return element;
        }
        return null;
      }
    }).filter(function (item) {
      return Array.isArray(item) ? item.length : item;
    });
  };
  var formatOrdersGrouped = function formatOrdersGrouped(orders) {
    var _totalOrders;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var totalOrders = orders;
    var ordersGroupids = [];
    totalOrders = (_totalOrders = totalOrders) === null || _totalOrders === void 0 ? void 0 : _totalOrders.map(function (item) {
      if (!(item !== null && item !== void 0 && item.cart_group_id)) return item;
      var groupIds = totalOrders.filter(function (o) {
        return o.cart_group_id === (item === null || item === void 0 ? void 0 : item.cart_group_id);
      });
      var _item = !ordersGroupids.includes(item === null || item === void 0 ? void 0 : item.cart_group_id) ? Object.entries(_defineProperty({}, item === null || item === void 0 ? void 0 : item.cart_group_id, groupIds)) : '';
      if (_item) ordersGroupids.push(item === null || item === void 0 ? void 0 : item.cart_group_id);
      return _item;
    }).filter(function (item) {
      return item;
    });
    return options !== null && options !== void 0 && options.allStatusses ? totalOrders : filterByIdUnique(totalOrders, currentTabSelected);
  };
  var getStatusById = function getStatusById(id) {
    var _orderGroupStatusCust6, _orderGroupStatusCust7, _orderGroupStatusCust8, _orderGroupStatusCust9;
    if (!id && id !== 0) return;
    var active = (_orderGroupStatusCust6 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.active) !== null && _orderGroupStatusCust6 !== void 0 ? _orderGroupStatusCust6 : [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    var pending = (_orderGroupStatusCust7 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.pending) !== null && _orderGroupStatusCust7 !== void 0 ? _orderGroupStatusCust7 : [0, 13];
    var inProgress = (_orderGroupStatusCust8 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.inProgress) !== null && _orderGroupStatusCust8 !== void 0 ? _orderGroupStatusCust8 : [3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    var completed = (_orderGroupStatusCust9 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.completed) !== null && _orderGroupStatusCust9 !== void 0 ? _orderGroupStatusCust9 : [1, 11, 15];
    // const cancelled = orderGroupStatusCustom?.cancelled ?? [2, 5, 6, 10, 12, 16, 17]

    var status = pending.includes(id) ? 'pending' : inProgress.includes(id) ? 'inProgress' : completed.includes(id) ? 'completed' : 'cancelled';
    var combinedStatus = active.includes(id) ? 'active' : completed.includes(id) ? 'completed' : 'cancelled';
    return combineTabs ? combinedStatus : status;
  };
  var actionOrderToTab = function actionOrderToTab(orderAux, status, type) {
    setOrdersGroup(function (prevState) {
      var _prevState$status, _prevState$status2;
      if (!((_prevState$status = prevState[status]) !== null && _prevState$status !== void 0 && _prevState$status.orders)) return;
      var orderList = (_prevState$status2 = prevState[status]) === null || _prevState$status2 === void 0 ? void 0 : _prevState$status2.orders;
      var order = _objectSpread(_objectSpread({}, orderAux), {}, {
        showNotification: false
      });
      var updatedOrders;
      switch (type) {
        case 'update':
          updatedOrders = orderList.map(function (o) {
            return o.id === order.id ? _objectSpread(_objectSpread({}, order), {}, {
              action: "".concat(type).concat(order === null || order === void 0 ? void 0 : order.status)
            }) : o;
          });
          break;
        case 'add':
          updatedOrders = [_objectSpread(_objectSpread({}, order), {}, {
            action: "".concat(type).concat(order === null || order === void 0 ? void 0 : order.status)
          })].concat(_toConsumableArray(orderList));
          break;
        case 'remove':
          updatedOrders = orderList.filter(function (o) {
            return o.id !== order.id;
          });
          break;
      }
      var updatedPagination = _objectSpread(_objectSpread({}, prevState[status].pagination), {}, {
        total: prevState[status].pagination.total + (type === 'add' ? 1 : type === 'remove' ? -1 : 0)
      });
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, status, _objectSpread(_objectSpread({}, prevState[status]), {}, {
        orders: filterByIdUnique(sortOrders(updatedOrders), status),
        pagination: updatedPagination
      })));
    });
  };
  var handleClickOrder = function handleClickOrder(orderAux) {
    var _order$order_group2;
    var order = _objectSpread(_objectSpread({}, orderAux), {}, {
      showNotification: false
    });
    var ordersGroups = order === null || order === void 0 || (_order$order_group2 = order.order_group) === null || _order$order_group2 === void 0 ? void 0 : _order$order_group2.orders;
    if (!ordersGroups) {
      var _ordersGroup$status;
      var status = getStatusById(order === null || order === void 0 ? void 0 : order.status);
      var orderList = (_ordersGroup$status = ordersGroup[status]) === null || _ordersGroup$status === void 0 ? void 0 : _ordersGroup$status.orders;
      var indexToUpdate = orderList === null || orderList === void 0 ? void 0 : orderList.findIndex(function (o) {
        return (o === null || o === void 0 ? void 0 : o.id) === (order === null || order === void 0 ? void 0 : order.id);
      });
      orderList[indexToUpdate] = order;
      setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, status, _objectSpread(_objectSpread({}, ordersGroup[status]), {}, {
        orders: sortOrders(orderList)
      }))));
    } else {
      var _order$order_group3;
      var _status = getStatusById(order === null || order === void 0 || (_order$order_group3 = order.order_group) === null || _order$order_group3 === void 0 || (_order$order_group3 = _order$order_group3.orders) === null || _order$order_group3 === void 0 || (_order$order_group3 = _order$order_group3[0]) === null || _order$order_group3 === void 0 ? void 0 : _order$order_group3.status);
      var _orderList;
      ordersGroups === null || ordersGroups === void 0 || ordersGroups.map(function (order) {
        var _ordersGroup$_status, _orderList2;
        _orderList = (_ordersGroup$_status = ordersGroup[_status]) === null || _ordersGroup$_status === void 0 ? void 0 : _ordersGroup$_status.orders;
        var indexToUpdate = (_orderList2 = _orderList) === null || _orderList2 === void 0 ? void 0 : _orderList2.findIndex(function (o) {
          return (o === null || o === void 0 ? void 0 : o.id) === (order === null || order === void 0 ? void 0 : order.id);
        });
        _orderList[indexToUpdate] = order;
      });
      setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, _status, _objectSpread(_objectSpread({}, ordersGroup[_status]), {}, {
        orders: sortOrders(_orderList)
      }))));
    }
  };
  var handleClickLogisticOrder = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(status, orderId) {
      var _session$user2, _session$user3, response, _yield$response$json3, result, error, _logisticOrders$order, _logisticOrders$order2, order, newOrders, _order$order, _order$order$id, _order$order2, _order$order$id2, _order$order3;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return fetch("".concat(ordering.root, "/drivers/").concat((_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id, "/assign_requests/").concat(orderId), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                status: status,
                user_id: (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id
              })
            });
          case 3:
            response = _context8.sent;
            _context8.next = 6;
            return response.json();
          case 6:
            _yield$response$json3 = _context8.sent;
            result = _yield$response$json3.result;
            error = _yield$response$json3.error;
            if (error) {
              _context8.next = 15;
              break;
            }
            order = logisticOrders === null || logisticOrders === void 0 || (_logisticOrders$order = logisticOrders.orders) === null || _logisticOrders$order === void 0 ? void 0 : _logisticOrders$order.find(function (order) {
              return (order === null || order === void 0 ? void 0 : order.id) === orderId;
            });
            newOrders = sortOrders(logisticOrders === null || logisticOrders === void 0 || (_logisticOrders$order2 = logisticOrders.orders) === null || _logisticOrders$order2 === void 0 ? void 0 : _logisticOrders$order2.filter(function (_order) {
              return (_order === null || _order === void 0 ? void 0 : _order.id) !== orderId;
            }));
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              orders: newOrders
            }));
            if (status === 1) {
              handleClickOrder((_order$order = order === null || order === void 0 ? void 0 : order.order) !== null && _order$order !== void 0 ? _order$order : order);
              showToast(_ToastContext.ToastType.Success, t('SPECIFIC_ORDER_ACCEPTED', 'Your accepted the order number _NUMBER_').replace('_NUMBER_', (_order$order$id = order === null || order === void 0 || (_order$order2 = order.order) === null || _order$order2 === void 0 ? void 0 : _order$order2.id) !== null && _order$order$id !== void 0 ? _order$order$id : order === null || order === void 0 ? void 0 : order.id));
            } else {
              showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_REJECTED', 'Your rejected the order number _NUMBER_').replace('_NUMBER_', (_order$order$id2 = order === null || order === void 0 || (_order$order3 = order.order) === null || _order$order3 === void 0 ? void 0 : _order$order3.id) !== null && _order$order$id2 !== void 0 ? _order$order$id2 : order === null || order === void 0 ? void 0 : order.id));
            }
            return _context8.abrupt("return");
          case 15:
            showToast(_ToastContext.ToastType.Error, result);
            _context8.next = 22;
            break;
          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](0);
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              error: _context8.t0.message
            }));
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 22:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 18]]);
    }));
    return function handleClickLogisticOrder(_x5, _x6) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(status, orderIds) {
      var body,
        bodyToSend,
        setOrderStatus,
        result,
        _err$message5,
        _args0 = arguments;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            body = _args0.length > 2 && _args0[2] !== undefined ? _args0[2] : {};
            _context0.prev = 1;
            delete body.id;
            bodyToSend = Object.keys(body || {}).length > 0 ? body : {
              status: status
            };
            setOrderStatus = /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
                var _yield$ordering$setAc5, _yield$ordering$setAc6, _result, error;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).orders(id).save(_objectSpread(_objectSpread({}, bodyToSend), {}, {
                        id: id
                      }));
                    case 3:
                      _yield$ordering$setAc5 = _context9.sent;
                      _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
                      _result = _yield$ordering$setAc6.result;
                      error = _yield$ordering$setAc6.error;
                      return _context9.abrupt("return", error ? null : _result);
                    case 10:
                      _context9.prev = 10;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", null);
                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[0, 10]]);
              }));
              return function setOrderStatus(_x9) {
                return _ref10.apply(this, arguments);
              };
            }();
            _context0.next = 7;
            return Promise.all(orderIds === null || orderIds === void 0 ? void 0 : orderIds.map(function (id) {
              return setOrderStatus(id);
            }));
          case 7:
            result = _context0.sent;
            return _context0.abrupt("return", result);
          case 11:
            _context0.prev = 11;
            _context0.t0 = _context0["catch"](1);
            return _context0.abrupt("return", (_err$message5 = _context0.t0 === null || _context0.t0 === void 0 ? void 0 : _context0.t0.message) !== null && _err$message5 !== void 0 ? _err$message5 : _context0.t0);
          case 14:
          case "end":
            return _context0.stop();
        }
      }, _callee0, null, [[1, 11]]);
    }));
    return function handleChangeOrderStatus(_x7, _x8) {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleSendCustomerReview = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref11) {
      var customerId, orderIds, body, onClose, setCustomerReview, result, orders, _err$message6;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            customerId = _ref11.customerId, orderIds = _ref11.orderIds, body = _ref11.body, onClose = _ref11.onClose;
            _context10.prev = 1;
            setCustomerReview = /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(body) {
                var response, _yield$response$json4, _result2, error;
                return _regeneratorRuntime().wrap(function _callee1$(_context1) {
                  while (1) switch (_context1.prev = _context1.next) {
                    case 0:
                      _context1.prev = 0;
                      _context1.next = 3;
                      return fetch("".concat(ordering.root, "/users/").concat(customerId, "/user_reviews"), {
                        method: 'POST',
                        headers: {
                          Authorization: "Bearer ".concat(session.token),
                          'Content-Type': 'application/json',
                          'X-App-X': ordering.appId,
                          'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                        },
                        body: JSON.stringify(body)
                      });
                    case 3:
                      response = _context1.sent;
                      _context1.next = 6;
                      return response.json();
                    case 6:
                      _yield$response$json4 = _context1.sent;
                      _result2 = _yield$response$json4.result;
                      error = _yield$response$json4.error;
                      return _context1.abrupt("return", error ? null : _result2);
                    case 12:
                      _context1.prev = 12;
                      _context1.t0 = _context1["catch"](0);
                      return _context1.abrupt("return", null);
                    case 15:
                    case "end":
                      return _context1.stop();
                  }
                }, _callee1, null, [[0, 12]]);
              }));
              return function setCustomerReview(_x1) {
                return _ref13.apply(this, arguments);
              };
            }();
            _context10.next = 5;
            return Promise.all(orderIds === null || orderIds === void 0 ? void 0 : orderIds.map(function (id) {
              return setCustomerReview(_objectSpread(_objectSpread({}, body), {}, {
                order_id: id,
                user_id: customerId
              }));
            }));
          case 5:
            result = _context10.sent;
            if (result !== null && result !== void 0 && result.length) {
              orders = ordersGroup[currentTabSelected].orders;
              result === null || result === void 0 || result.map(function (order) {
                var orderFound = orders.find(function (o) {
                  return o.id === order.order_id;
                });
                var idxOrderFound = orders.findIndex(function (o) {
                  return o.id === order.order_id;
                });
                if (orderFound) {
                  orderFound = _objectSpread(_objectSpread({}, orderFound), {}, {
                    user_review: order
                  });
                  orders[idxOrderFound] = orderFound;
                  setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
                    orders: orders
                  }));
                }
              });
              showToast(_ToastContext.ToastType.Success, t('ORDERS_SUCCESSFULLY_REVIEWED', 'Orders successfully reviewed'));
            }
            onClose && onClose();
            return _context10.abrupt("return", result);
          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](1);
            return _context10.abrupt("return", (_err$message6 = _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message) !== null && _err$message6 !== void 0 ? _err$message6 : _context10.t0);
          case 14:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[1, 11]]);
    }));
    return function handleSendCustomerReview(_x0) {
      return _ref12.apply(this, arguments);
    };
  }();
  var getBusinessesIDs = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var propsToFetch, _yield$ordering$busin, _yield$ordering$busin2, error, result, _businessIDs, _err$message7;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            propsToFetch = ['id', 'name'];
            _context11.prev = 1;
            _context11.next = 4;
            return ordering.businesses().asDashboard().select(propsToFetch).get();
          case 4:
            _yield$ordering$busin = _context11.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              _businessIDs = result.length > 0 && result.map(function (_ref15) {
                var id = _ref15.id;
                return id;
              });
              setBusinessIDs(_businessIDs);
            }
            _context11.next = 14;
            break;
          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](1);
            if (_context11.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message7 = _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message) !== null && _err$message7 !== void 0 ? _err$message7 : 'ERROR']
              }))));
            }
          case 14:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[1, 11]]);
    }));
    return function getBusinessesIDs() {
      return _ref14.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _session$user4;
    if ((session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) !== 2) return;
    getBusinessesIDs();
  }, []);
  (0, _react.useEffect)(function () {
    var _ordersGroup$currentT10, _ordersGroup$currentT11;
    setCurrentFilters((_ordersGroup$currentT10 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT10 === void 0 ? void 0 : _ordersGroup$currentT10.currentFilter);
    if (currentTabSelected === 'logisticOrders') {
      loadLogisticOrders(!!(logisticOrders !== null && logisticOrders !== void 0 && logisticOrders.orders));
    } else if (!((_ordersGroup$currentT11 = ordersGroup[currentTabSelected]) !== null && _ordersGroup$currentT11 !== void 0 && _ordersGroup$currentT11.fetched) && props.isNetConnected) {
      loadOrders({
        newFetchCurrent: true
      });
    }
  }, [currentTabSelected, props.isNetConnected]);
  (0, _react.useEffect)(function () {
    if (currentFilters && !isDriverApp) {
      loadOrders({
        newFetchCurrent: true
      });
    }
  }, [currentFilters]);
  (0, _react.useEffect)(function () {
    if (!filtered) return;
    loadOrders({
      newFetch: true
    }, {
      allStatusses: true
    });
  }, [filtered]);
  var handleActionEvent = function handleActionEvent(event, value) {
    var evts = {
      order_added: 'order_added_notification',
      update_order: 'order_updated_notification',
      messages: 'message_added_notification',
      request_register: 'request_register_notification',
      request_update: 'request_update_notification'
    };
    events.emit(evts[event], value);
  };
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _order$products, _session$user5, _orderFound, _order$driver, _session$user6;
      var isGiftCard = order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.some(function (product) {
        return (product === null || product === void 0 ? void 0 : product.type) === 'gift_card';
      });
      if (isGiftCard && !isDriverApp) return;
      if ((session === null || session === void 0 || (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.level) === 2 && businessIDs.length > 0 && !businessIDs.includes(order.business_id)) return;
      events.emit('order_updated', order);
      var orderFound = null;
      for (var i = 0; i < ordersStatusArray.length; i++) {
        var status = ordersStatusArray[i];
        if (order !== null && order !== void 0 && order.products) {
          var _ordersGroup$status2;
          orderFound = (_ordersGroup$status2 = ordersGroup[status]) === null || _ordersGroup$status2 === void 0 || (_ordersGroup$status2 = _ordersGroup$status2.orders) === null || _ordersGroup$status2 === void 0 ? void 0 : _ordersGroup$status2.find(function (_order) {
            return _order.id === order.id;
          });
        }
        if (orderFound) break;
      }
      if (notificationStatusses.includes(order === null || order === void 0 ? void 0 : order.status)) {
        showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id), 1000);
      }
      if (!orderFound) {
        var _order$payment_events, _ordersGroup, _getStatusById;
        if (!(order !== null && order !== void 0 && order.products) || !(order !== null && order !== void 0 && order.summary) || typeof (order === null || order === void 0 ? void 0 : order.status) !== 'number' || !(order !== null && order !== void 0 && order.customer) || !(order !== null && order !== void 0 && order.business) || !(order !== null && order !== void 0 && order.paymethod) && !(order !== null && order !== void 0 && (_order$payment_events = order.payment_events) !== null && _order$payment_events !== void 0 && _order$payment_events.some(function (e) {
          return e.event === 'payment';
        })) && (order === null || order === void 0 ? void 0 : order.total) !== 0) {
          return;
        }
        delete order.total;
        delete order.subtotal;
        var currentFilter = (_ordersGroup = ordersGroup[(_getStatusById = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById !== void 0 ? _getStatusById : '']) === null || _ordersGroup === void 0 ? void 0 : _ordersGroup.currentFilter;
        !currentFilter.includes(order.status) ? actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'remove') : actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'add');
        return;
      }
      if (orderFound.id === order.id && ((_orderFound = orderFound) === null || _orderFound === void 0 || (_orderFound = _orderFound.driver) === null || _orderFound === void 0 ? void 0 : _orderFound.id) !== (order === null || order === void 0 || (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) && (session === null || session === void 0 || (_session$user6 = session.user) === null || _session$user6 === void 0 ? void 0 : _session$user6.level) === 4) {
        actionOrderToTab(orderFound, getStatusById(orderFound.status), 'remove');
      }
      if (orderFound.id === order.id) {
        delete order.total;
        delete order.subtotal;
      }
      if (!(order !== null && order !== void 0 && order.status) && (order === null || order === void 0 ? void 0 : order.status) !== 0) {
        Object.assign(orderFound, order);
      } else {
        var _getStatusById2, _getStatusById3, _orderFound2, _ordersGroup$newOrder;
        var newOrderStatus = (_getStatusById2 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById2 !== void 0 ? _getStatusById2 : '';
        var currentOrderStatus = (_getStatusById3 = getStatusById((_orderFound2 = orderFound) === null || _orderFound2 === void 0 ? void 0 : _orderFound2.status)) !== null && _getStatusById3 !== void 0 ? _getStatusById3 : '';
        var _currentFilter = (_ordersGroup$newOrder = ordersGroup[newOrderStatus]) === null || _ordersGroup$newOrder === void 0 ? void 0 : _ordersGroup$newOrder.currentFilter;
        Object.assign(orderFound, order);
        if (newOrderStatus !== currentOrderStatus) {
          var _ordersGroup$newOrder2;
          actionOrderToTab(orderFound, currentOrderStatus, 'remove');
          var total = (_ordersGroup$newOrder2 = ordersGroup[newOrderStatus].pagination.total) !== null && _ordersGroup$newOrder2 !== void 0 ? _ordersGroup$newOrder2 : null;
          if (_currentFilter.includes(orderFound.status) && total !== null) {
            actionOrderToTab(orderFound, newOrderStatus, 'add');
          }
        } else {
          var _orderFound3;
          !_currentFilter.includes(orderFound.status) || ((_orderFound3 = orderFound) === null || _orderFound3 === void 0 ? void 0 : _orderFound3.driver) === null && isDriverApp ? actionOrderToTab(orderFound, newOrderStatus, 'remove') : actionOrderToTab(orderFound, newOrderStatus, 'update');
        }
      }
    };
    var handleAddNewOrder = function handleAddNewOrder(order) {
      var _order$products2, _getStatusById4;
      var isGiftCard = order === null || order === void 0 || (_order$products2 = order.products) === null || _order$products2 === void 0 ? void 0 : _order$products2.some(function (product) {
        return (product === null || product === void 0 ? void 0 : product.type) === 'gift_card';
      });
      if (isGiftCard && !isDriverApp) return;
      events.emit('order_added', order);
      handleActionEvent('order_added', order);
      if (notificationStatusses.includes(order === null || order === void 0 ? void 0 : order.status)) {
        showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id), 1000);
      }
      var status = (_getStatusById4 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById4 !== void 0 ? _getStatusById4 : '';
      actionOrderToTab(order, status, 'add');
    };
    var handleReceiveMessage = function handleReceiveMessage(message) {
      if ((message === null || message === void 0 ? void 0 : message.id) !== (recentlyReceivedMessage === null || recentlyReceivedMessage === void 0 ? void 0 : recentlyReceivedMessage.id)) {
        handleActionEvent('messages', message);
        setRecentlyReceivedMessage(message);
      }
    };
    socket.on('orders_register', handleAddNewOrder);
    socket.on('order_assigned', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    socket.on('message', handleReceiveMessage);
    return function () {
      socket.off('orders_register', handleAddNewOrder);
      socket.off('order_assigned', handleAddNewOrder);
      socket.off('update_order', handleUpdateOrder);
      socket.off('message', handleReceiveMessage);
    };
  }, [JSON.stringify(ordersGroup), socket === null || socket === void 0 ? void 0 : socket.socket, session]);
  var handleAddAssignRequest = (0, _react.useCallback)(function (order) {
    var _order$order$id3, _order$order4;
    setOrderLogisticAdded(order);
    var isSameEvent = (orderLogisticAdded === null || orderLogisticAdded === void 0 ? void 0 : orderLogisticAdded.id) === (order === null || order === void 0 ? void 0 : order.id) && orderLogisticAdded.status === (order === null || order === void 0 ? void 0 : order.status);
    if (!(order !== null && order !== void 0 && order.locked) && !isSameEvent) {
      handleActionEvent('request_register', order);
    }
    setlogisticOrders(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: sortOrders([].concat(_toConsumableArray(prevState === null || prevState === void 0 ? void 0 : prevState.orders), [order]).filter(function (order, index, hash) {
          // remove possibles duplicates
          var val = JSON.stringify(order);
          return index === hash.findIndex(function (_order) {
            return JSON.stringify(_order) === val;
          });
        }))
      });
    });
    showToast(_ToastContext.ToastType.Info, t('SPECIFIC_LOGISTIC_ORDER_ORDERED', 'Logisitc order _NUMBER_ has been ordered').replace('_NUMBER_', (_order$order$id3 = order === null || order === void 0 || (_order$order4 = order.order) === null || _order$order4 === void 0 ? void 0 : _order$order4.id) !== null && _order$order$id3 !== void 0 ? _order$order$id3 : order.id), 1000);
  }, [logisticOrders]);
  var handleDeleteAssignRequest = (0, _react.useCallback)(function (order) {
    setlogisticOrders(function (prevState) {
      var _prevState$orders, _prevState$orders2, _prevState$orders3;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: prevState !== null && prevState !== void 0 && (_prevState$orders = prevState.orders) !== null && _prevState$orders !== void 0 && _prevState$orders.some(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        }) ? sortOrders([].concat(_toConsumableArray(prevState === null || prevState === void 0 || (_prevState$orders2 = prevState.orders) === null || _prevState$orders2 === void 0 ? void 0 : _prevState$orders2.filter(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
        })), [_objectSpread(_objectSpread({}, prevState === null || prevState === void 0 || (_prevState$orders3 = prevState.orders) === null || _prevState$orders3 === void 0 ? void 0 : _prevState$orders3.find(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        })), {}, {
          expired: true
        })])) : sortOrders(prevState === null || prevState === void 0 ? void 0 : prevState.orders)
      });
    });
  }, [logisticOrders]);
  var handleUpdateAssignRequest = (0, _react.useCallback)(function (order) {
    var _order$order$id4, _order$order5;
    setOrderLogisticUpdated(order);
    var isSameEvent = (orderLogisticUpdated === null || orderLogisticUpdated === void 0 ? void 0 : orderLogisticUpdated.id) === (order === null || order === void 0 ? void 0 : order.id) && orderLogisticUpdated.status === (order === null || order === void 0 ? void 0 : order.status);
    if (!(order !== null && order !== void 0 && order.locked) && !isSameEvent) {
      handleActionEvent('request_update', order);
    }
    setlogisticOrders(function (prevState) {
      var _prevState$orders4, _prevState$orders5, _prevState$orders6;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: prevState !== null && prevState !== void 0 && (_prevState$orders4 = prevState.orders) !== null && _prevState$orders4 !== void 0 && _prevState$orders4.some(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        }) ? sortOrders([].concat(_toConsumableArray(prevState === null || prevState === void 0 || (_prevState$orders5 = prevState.orders) === null || _prevState$orders5 === void 0 ? void 0 : _prevState$orders5.filter(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
        })), [_objectSpread(_objectSpread({}, prevState === null || prevState === void 0 || (_prevState$orders6 = prevState.orders) === null || _prevState$orders6 === void 0 ? void 0 : _prevState$orders6.find(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        })), order)])) : sortOrders(prevState === null || prevState === void 0 ? void 0 : prevState.orders)
      });
    });
    showToast(_ToastContext.ToastType.Info, t('SPECIFIC_LOGISTIC_ORDER_UPDATED', 'Your logisitc order number _NUMBER_ has updated').replace('_NUMBER_', (_order$order$id4 = order === null || order === void 0 || (_order$order5 = order.order) === null || _order$order5 === void 0 ? void 0 : _order$order5.id) !== null && _order$order$id4 !== void 0 ? _order$order$id4 : order.id), 1000);
  }, [logisticOrders]);
  (0, _react.useEffect)(function () {
    if (isLogisticActivated) {
      socket.on('request_register', handleAddAssignRequest);
      socket.on('request_update', handleUpdateAssignRequest);
      socket.on('request_cancel', handleDeleteAssignRequest);
    }
    return function () {
      socket.off('request_register');
      socket.off('request_update');
      socket.off('request_cancel');
    };
  }, [socket, session, isLogisticActivated]);
  (0, _react.useEffect)(function () {
    if (!session.user) return;
    var userId = session.user.id;
    var userLevel = session.user.level;
    var ordersRoom = userLevel === 0 ? 'orders' : "orders_".concat(userId);
    var requestsRoom = "requests_".concat(userId);
    var groupsRoom = "ordergroups_".concat(userId);
    var messagesOrdersRoom = userLevel === 0 ? 'messages_orders' : "messages_orders_".concat(userId);
    var joinRooms = function joinRooms() {
      socket.join(ordersRoom);
      socket.join(requestsRoom);
      socket.join(groupsRoom);
      socket.join(messagesOrdersRoom);
    };
    var leaveRooms = function leaveRooms() {
      socket.leave(ordersRoom);
      socket.leave(requestsRoom);
      socket.leave(groupsRoom);
      socket.leave(messagesOrdersRoom);
    };
    socket.on('disconnect', joinRooms);
    joinRooms();
    return function () {
      leaveRooms();
      socket.off('disconnect', joinRooms);
    };
  }, [socket, session]);
  (0, _react.useEffect)(function () {
    var request = requestsState === null || requestsState === void 0 ? void 0 : requestsState.orders;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState === null || requestsState === void 0 ? void 0 : requestsState.orders]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      var orderFound = null;
      for (var i = 0; i < ordersStatusArray.length; i++) {
        var _ordersGroup$status3;
        var status = ordersStatusArray[i];
        orderFound = (_ordersGroup$status3 = ordersGroup[status]) === null || _ordersGroup$status3 === void 0 || (_ordersGroup$status3 = _ordersGroup$status3.orders) === null || _ordersGroup$status3 === void 0 ? void 0 : _ordersGroup$status3.find(function (_order) {
          return _order.id === review.order_id;
        });
        if (orderFound) break;
      }
      if (orderFound) {
        var _getStatusById5, _orderFound4;
        var newOrderStatus = (_getStatusById5 = getStatusById((_orderFound4 = orderFound) === null || _orderFound4 === void 0 ? void 0 : _orderFound4.status)) !== null && _getStatusById5 !== void 0 ? _getStatusById5 : '';
        orderFound.user_review = review;
        actionOrderToTab(orderFound, newOrderStatus, 'update');
      }
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [ordersGroup]);
  (0, _react.useEffect)(function () {
    setCurrentTabSelected(combineTabs ? 'active' : 'pending');
  }, [combineTabs]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentFilters: currentFilters,
    setCurrentFilters: setCurrentFilters,
    currentTabSelected: currentTabSelected,
    setCurrentTabSelected: handleSelectCurrentTab,
    ordersGroup: ordersGroup,
    setOrdersGroup: setOrdersGroup,
    logisticOrders: logisticOrders,
    messages: messages,
    setCombineTabsState: setCombineTabsState,
    ordersDeleted: ordersDeleted,
    setOrdersDeleted: setOrdersDeleted,
    setMessages: setMessages,
    loadOrders: loadOrders,
    loadLogisticOrders: loadLogisticOrders,
    deleteOrders: deleteOrders,
    loadMessages: loadMessages,
    loadMoreOrders: loadMoreOrders,
    handleClickOrder: handleClickOrder,
    handleClickLogisticOrder: handleClickLogisticOrder,
    filtered: filtered,
    onFiltered: setFiltered,
    handleChangeOrderStatus: handleChangeOrderStatus,
    handleSendCustomerReview: handleSendCustomerReview,
    ordersFormatted: formatOrdersGrouped((_ordersGroup$currentT12 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT12 === void 0 ? void 0 : _ordersGroup$currentT12.orders),
    isLogisticActivated: isLogisticActivated,
    ordersFiltered: ordersFiltered
  })));
};
OrderListGroups.defaultProps = {
  orderBy: '-id',
  orderDirection: 'desc',
  isNetConnected: true,
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};