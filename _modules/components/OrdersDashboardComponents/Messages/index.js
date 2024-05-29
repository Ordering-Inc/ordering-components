"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ConfigContext = require("../../../contexts/ConfigContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _UtilsContext = require("../../../contexts/UtilsContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Messages = exports.Messages = function Messages(props) {
  var _configState$configs;
  var UIComponent = props.UIComponent,
    orderId = props.orderId,
    customHandleSend = props.customHandleSend,
    orderMessages = props.messages,
    setOrderMessages = props.setMessages,
    asDashboard = props.asDashboard,
    order = props.order,
    handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getOrderState = _useUtils2[0].getOrderState;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var accessToken = props.accessToken || token;
  var _useState = (0, _react.useState)({
      business: true,
      administrator: true,
      driver: true,
      customer: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    canRead = _useState2[0],
    setCanRead = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messages = _useState6[0],
    setMessages = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    sendMessage = _useState8[0],
    setSendMessages = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    readMessages = _useState10[0],
    setReadMessages = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    image = _useState12[0],
    setImage = _useState12[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var getStaticMapByLocation = function getStaticMapByLocation(location, size) {
    if (!size) {
      size = '250x100';
    }
    var url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + location.lat + ',' + location.lng + '&zoom=14&size=' + size + '&markers=color:red%7C' + location.lat + ',' + location.lng + '&key=' + googleMapsApiKey;
    return url;
  };
  var getLogisticTagStatus = function getLogisticTagStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In Progress');
      case 2:
        return t('IN_QUEUE', 'In Queue');
      case 3:
        return t('EXPIRED', 'Logistic expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return status;
    }
  };
  var getVehicleSmmary = function getVehicleSmmary(vehicle) {
    return (vehicle === null || vehicle === void 0 ? void 0 : vehicle.type) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.model) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.car_registration) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.color);
  };
  var getHistoryComment = function getHistoryComment(message) {
    var _message$change;
    var comment = '';
    var changeAttribute = message === null || message === void 0 || (_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute;
    if (changeAttribute === 'distance') {
      comment = t('THE_DRIVER_IS_CLOSE') + ' <b>(' + message.driver.name + (message.driver.lastname ? ' ' + message.driver.lastname : '') + ')</b>';
    } else if (changeAttribute === 'status') {
      var _message$change2;
      if (message.change.new === 8 && message.change.estimated) {
        var estimatedDelivery = message.change.estimated;
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_DELIVERY_TIME').replace('_min_', estimatedDelivery);
      } else if (message.change.new === 7 && message.change.estimated) {
        var estimatedPreparation = message.change.estimated;
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_PREPARATION_TIME').replace('_min_', estimatedPreparation);
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>');
      }
      if (message !== null && message !== void 0 && (_message$change2 = message.change) !== null && _message$change2 !== void 0 && _message$change2.comment) {
        comment += '<br>' + '<b>' + t('COMMENT', '') + '</b>: ' + message.change.comment + '.';
      }
    } else if (changeAttribute === 'driver_id') {
      if (message.driver) {
        comment = t('DRIVER_ASSIGNED_AS_DRIVER').replace('_driver_', '<b>' + message.driver.name + ' ' + (message.driver.lastname ? message.driver.lastname : '') + '</b>');
      } else {
        comment = t('DRIVER_UNASSIGNED');
      }
    } else if (['prepared_in', 'delivered_in', 'delivery_datetime'].includes(changeAttribute)) {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + (message.change.old || 0) + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
    } else if (changeAttribute === 'logistic_status') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t('LOGISTIC_STATUS', 'logistic status') + '</b>').replace('_from_', '<b>' + getLogisticTagStatus(parseInt(message.change.old, 10)) + '</b>').replace('_to_', '<b>' + getLogisticTagStatus(parseInt(message.change.new, 10)) + '</b>');
    } else if (changeAttribute === 'vehicle') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getVehicleSmmary(message.change.old) + '</b>').replace('_to_', '<b>' + getVehicleSmmary(message.change.new) + '</b>');
    } else if (changeAttribute === 'reject_reason') {
      comment = t('ORDER_REJECT_REASON_IS', 'Order <b>reject reason</b> is _reject_reason_.').replace('_reject_reason_', '<b>' + t("REJECT_REASON_".concat(message.change.new.toUpperCase())) + '</b>');
    } else if (changeAttribute !== 'comment') {
      if (message.change.old) {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + message.change.old + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
      }
    }
    if (['status', 'reject_reason'].includes(changeAttribute)) {
      if (user.level === 0 || user.level === 2) {
        comment += '<br>-';
        if (message.app_id) comment += '<br><strong>' + t('APP_ID') + ':</strong> ' + message.app_id;
        comment += '<br><strong>' + t('AUTHOR') + ':</strong> ' + (message.author ? message.author.name + (message.author.lastname ? ' ' + message.author.lastname : '') : t('GUEST_USER'));
        if (message.user_agent) comment += '<br><strong>' + t('USER_AGENT') + ':</strong> ' + message.user_agent;
        if (message.location) comment += '<br><strong>' + t('LOCATION') + ':</strong> <img src="' + getStaticMapByLocation(message.location, '250x100') + '" />';
        comment += '<br><strong>' + t('IP') + ':</strong> ' + message.ip;
      }
    }
    return comment;
  };

  /**
   * Method to send message
   */
  var handleSend = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _canRead, body, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!customHandleSend) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", customHandleSend(message));
          case 2:
            _context.prev = 2;
            setSendMessages({
              loading: true,
              error: null
            });
            _canRead = [];
            if (canRead.customer) {
              _canRead.push(3);
            }
            if (canRead.administrator) {
              _canRead.push(0);
            }
            if (canRead.business) {
              _canRead.push(2);
            }
            if (canRead.driver) {
              _canRead.push(4);
            }
            body = {
              comment: message,
              type: 2,
              can_see: _canRead.join(',')
            };
            if (image) {
              body.type = 3;
              body.file = image;
            }
            _context.next = 13;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify(body)
            });
          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();
          case 16:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              if (setOrderMessages && orderMessages) {
                setOrderMessages(_objectSpread(_objectSpread({}, orderMessages), {}, {
                  messages: [].concat(_toConsumableArray(orderMessages.messages), [result])
                }));
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  messages: [].concat(_toConsumableArray(messages.messages), [result])
                }));
              }
            }
            setSendMessages({
              loading: false,
              error: error ? result : null
            });
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](2);
            setSendMessages({
              loading: false,
              error: [_context.t0.Messages]
            });
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 23]]);
    }));
    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var functionFetch, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              messages: [],
              loading: true
            }));
            functionFetch = asDashboard ? "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat(orderId, "/messages");
            _context2.next = 5;
            return fetch(functionFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context2.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
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
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context2.t0.Messages]
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function loadMessages() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to Load message for first time
   * @param {number} messageId order message Id
   */
  var handleReadMessages = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(messageId) {
      var functionFetch, response, _yield$response$json3, error, result, _messages;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(orderMessages && setOrderMessages)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
              loading: true
            }));
            functionFetch = "".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read?order_id=").concat(orderId, "&order_message_id=").concat(messageId);
            _context3.next = 7;
            return fetch(functionFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 7:
            response = _context3.sent;
            _context3.next = 10;
            return response.json();
          case 10:
            _yield$response$json3 = _context3.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              setReadMessages({
                messages: result,
                loading: false,
                error: null
              });
              if (messages.messages.length > 0) {
                _messages = messages.messages.filter(function (message) {
                  if (message.id === messageId) {
                    message.read = true;
                  }
                  return true;
                });
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  messages: _messages
                }));
              }
              handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(null);
              handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(orderId);
            } else {
              setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 19;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](2);
            setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
              loading: false,
              error: [_context3.t0.Messages]
            }));
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 16]]);
    }));
    return function handleReadMessages(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (orderMessages && setOrderMessages) return;
    loadMessages();
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (messages.loading || orderMessages && setOrderMessages) return;
    var handleNewMessage = function handleNewMessage(message) {
      var _message$order;
      if (((_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id) === orderId) {
        var found = messages.messages.find(function (_message) {
          return _message.id === message.id;
        });
        if (!found) {
          setMessages(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              messages: [].concat(_toConsumableArray(prevState.messages), [message])
            });
          });
        }
      }
    };
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, order === null || order === void 0 ? void 0 : order.status]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    if (asDashboard) {
      socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
    } else {
      socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
    }
    socket.socket.on('connect', function () {
      if (asDashboard) {
        socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    });
    return function () {
      if (asDashboard) {
        socket.leave("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.leave("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    messages: messages,
    image: image,
    canRead: canRead,
    handleSend: handleSend,
    message: message,
    handleReadMessages: handleReadMessages,
    setMessage: setMessage,
    setCanRead: setCanRead,
    sendMessage: sendMessage,
    setImage: setImage,
    getHistoryComment: getHistoryComment
  })));
};
Messages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Custom Send messageS
   * @param {object} message Message to send
   */
  handleClickSetDefault: _propTypes.default.func,
  /**
   * @param {object} message
   * handleCustomClick, function to get click event and return message without default behavior
   */
  customHandleSend: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Messages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};