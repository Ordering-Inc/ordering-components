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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
    _useState0 = _slicedToArray(_useState9, 2),
    readMessages = _useState0[0],
    setReadMessages = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    image = _useState10[0],
    setImage = _useState10[1];
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(messageId) {
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