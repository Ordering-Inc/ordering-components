"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderDetails = exports.OrderDetails = function OrderDetails(props) {
  var _props$order, _props$order2, _orderState$order, _orderState$order11, _orderState$order12, _orderState$order13, _orderState$order19, _orderState$order20, _orderState$order21;
  var orderId = props.orderId,
    orderAssingId = props.orderAssingId,
    hashKey = props.hashKey,
    UIComponent = props.UIComponent,
    userCustomerId = props.userCustomerId,
    isFetchDrivers = props.isFetchDrivers,
    driverAndBusinessId = props.driverAndBusinessId,
    sendCustomMessage = props.sendCustomMessage,
    isDisabledOrdersRoom = props.isDisabledOrdersRoom,
    isDriverNotification = props.isDriverNotification;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var accessToken = props.accessToken || token;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    _useOrder2$ = _useOrder2[1],
    reorder = _useOrder2$.reorder,
    clearCart = _useOrder2$.clearCart;
  var _useState = (0, _react.useState)({
      order: (_props$order = props.order) !== null && _props$order !== void 0 ? _props$order : null,
      businessData: {},
      loading: !props.order,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderState = _useState2[0],
    setOrderState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      drivers: [],
      loadingDriver: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    drivers = _useState4[0],
    setDrivers = _useState4[1];
  var _useState5 = (0, _react.useState)({
      status: null,
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messageErrors = _useState6[0],
    setMessageErrors = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    messages = _useState8[0],
    setMessages = _useState8[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useState9 = (0, _react.useState)(((_props$order2 = props.order) === null || _props$order2 === void 0 || (_props$order2 = _props$order2.driver) === null || _props$order2 === void 0 ? void 0 : _props$order2.location) || ((_orderState$order = orderState.order) === null || _orderState$order === void 0 || (_orderState$order = _orderState$order.driver) === null || _orderState$order === void 0 ? void 0 : _orderState$order.location) || null),
    _useState0 = _slicedToArray(_useState9, 2),
    driverLocation = _useState0[0],
    setDriverLocation = _useState0[1];
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    messagesReadList = _useState10[0],
    setMessagesReadList = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null,
      newLocation: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    driverUpdateLocation = _useState12[0],
    setDriverUpdateLocation = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    forceUpdate = _useState14[0],
    setForceUpdate = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    reorderState = _useState16[0],
    setReorderState = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    cartState = _useState18[0],
    setCartState = _useState18[1];
  /**
   * Method to accept or reject a logistic order
   */

  var handleClickLogisticOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(status, orderId, orders) {
      var response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(ordering.root, "/drivers/").concat(user === null || user === void 0 ? void 0 : user.id, "/assign_requests/").concat(orderId), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify({
                status: status,
                user_id: user === null || user === void 0 ? void 0 : user.id
              })
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context.next = 12;
              break;
            }
            if (status === 1) {
              showToast(_ToastContext.ToastType.Success, t('SPECIFIC_ORDER_ACCEPTED', 'Your accepted the order number _NUMBER_').replace('_NUMBER_', orders === null || orders === void 0 ? void 0 : orders.id));
            } else {
              showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_REJECTED', 'Your rejected the order number _NUMBER_').replace('_NUMBER_', orders === null || orders === void 0 ? void 0 : orders.id));
            }
            return _context.abrupt("return");
          case 12:
            showToast(_ToastContext.ToastType.Error, result);
            _context.next = 18;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context.t0.message);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 15]]);
    }));
    return function handleClickLogisticOrder(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var propsToFetch = ['header', 'slug'];
  var deliveryMessages = {
    delivery: {
      text: 'outside delivery area, insert reasons to force update',
      value: 11
    },
    pickup: {
      text: 'outside pickup area, insert reasons to force update',
      value: 9
    }
  };
  var requestsState = {};

  /**
   * Method to format a price number
   * @param {Number} price
   */
  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _orderState$order2, _orderState$order3, url, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = userCustomerId || driverAndBusinessId ? "".concat(ordering.root, "/orders/").concat((_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.id, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat((_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.id, "/messages");
            _context2.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
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
   * Method to send a message
   * @param {string} spot
   */
  var sendMessage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(spot) {
      var _orderState$order4, _orderState$order5, _yield$fetch, status;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!sendCustomMessage) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", sendCustomMessage(spot));
          case 2:
            _context3.prev = 2;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: true
            }));
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/messages"), {
              method: 'post',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                can_see: '0,2,3',
                comment: "I am on the parking number: ".concat(spot),
                order_id: (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.id,
                type: 2
              })
            });
          case 6:
            _yield$fetch = _context3.sent;
            status = _yield$fetch.status;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              status: status
            }));
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 11]]);
    }));
    return function sendMessage(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to update differents orders status
  */
  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(status) {
      var isAcceptOrReject,
        options,
        dataToSave,
        _orderState$order6,
        order,
        _orderState$order$id,
        _orderState$order7,
        bodyToSend,
        _yield$ordering$setAc,
        _yield$ordering$setAc2,
        result,
        error,
        selected,
        message,
        defaultMessage,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            isAcceptOrReject = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            options = _args4.length > 2 ? _args4[2] : undefined;
            dataToSave = options === null || options === void 0 ? void 0 : options.dataToSave;
            if (!dataToSave) {
              _context4.next = 7;
              break;
            }
            order = Object.assign(orderState.order, _objectSpread(_objectSpread({}, dataToSave), {}, {
              oldStatus: (_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.status
            }));
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              order: order
            }));
            return _context4.abrupt("return", order);
          case 7:
            _context4.prev = 7;
            bodyToSend = Object.keys(isAcceptOrReject || {}).length > 0 ? isAcceptOrReject : {
              status: status
            };
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            _context4.next = 12;
            return ordering.setAccessToken(token).orders((_orderState$order$id = (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.id) !== null && _orderState$order$id !== void 0 ? _orderState$order$id : orderId).save(bodyToSend);
          case 12:
            _yield$ordering$setAc = _context4.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            result = _yield$ordering$setAc2.result;
            error = _yield$ordering$setAc2.error;
            if (error) {
              _context4.next = 19;
              break;
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              order: Object.assign(orderState.order, result),
              loading: false
            }));
            return _context4.abrupt("return", Object.assign(orderState.order, result));
          case 19:
            if (!error) {
              _context4.next = 23;
              break;
            }
            selected = result.includes(deliveryMessages.delivery.text) ? deliveryMessages.delivery : result.includes(deliveryMessages.pickup.text) ? deliveryMessages.pickup : null;
            if (selected) {
              setForceUpdate(null);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false
              }));
              setForceUpdate(selected.value);
            } else {
              message = Array.isArray(result) ? result[0] : typeof result === 'string' ? result : 'INTERNAL_ERROR';
              defaultMessage = message !== 'INTERNAL_ERROR' ? message : t('INTERNAL_ERROR', 'Internal Error');
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                error: [defaultMessage],
                loading: false
              }));
            }
            return _context4.abrupt("return", null);
          case 23:
            _context4.next = 29;
            break;
          case 25:
            _context4.prev = 25;
            _context4.t0 = _context4["catch"](7);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) || t('NETWORK_ERROR', 'Network Error')]
            }));
            return _context4.abrupt("return", null);
          case 29:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[7, 25]]);
    }));
    return function handleChangeOrderStatus(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var updateDriverPosition = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var newLocation,
        _yield$ordering$setAc3,
        _yield$ordering$setAc4,
        error,
        result,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            newLocation = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            _context5.prev = 1;
            setDriverLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
              loading: true
            }));
            _context5.next = 5;
            return ordering.setAccessToken(token).users(user === null || user === void 0 ? void 0 : user.id).driverLocations().save(newLocation);
          case 5:
            _yield$ordering$setAc3 = _context5.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            if (error) {
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                error: [result[0] || result || t('ERROR_UPDATING_POSITION', 'Error updating position')]
              }));
            } else {
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                newLocation: _objectSpread(_objectSpread({}, newLocation), result)
              }));
            }
            _context5.next = 15;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
              loading: false,
              error: [(_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) || t('NETWORK_ERROR', 'Network Error')]
            }));
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 12]]);
    }));
    return function updateDriverPosition() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
     * Method to assign a driver for order
  */
  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(driverId) {
      var _orderState$order$id2, _orderState$order8, bodyToSend, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _drivers$error;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            bodyToSend = {
              driver_id: driverId
            };
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            _context6.next = 5;
            return ordering.setAccessToken(token).orders((_orderState$order$id2 = orderState === null || orderState === void 0 || (_orderState$order8 = orderState.order) === null || _orderState$order8 === void 0 ? void 0 : _orderState$order8.id) !== null && _orderState$order$id2 !== void 0 ? _orderState$order$id2 : orderId).save(bodyToSend);
          case 5:
            _yield$ordering$setAc5 = _context6.sent;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: Object.assign(orderState.order, result),
              error: error ? result : null
            }));
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: _context6.t0 !== null && _context6.t0 !== void 0 && _context6.t0.message ? (_drivers$error = drivers.error) === null || _drivers$error === void 0 ? void 0 : _drivers$error.push(_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message) : ['ERROR']
            }));
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function handleAssignDriver(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref7) {
    var spot = _ref7.spot;
    sendMessage(spot);
  };

  /**
   * Method to get order from API
   */
  var getOrder = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var source, options, _result, result, error, response, res, _yield$ordering$setAc7, content, order, err, businessData, _yield$ordering$setAc8, _content, _e$message, _order$id, _e$message2;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            source = {};
            requestsState.order = source;
            requestsState.business = source;
            options = {};
            if (hashKey) {
              options.headers = {
                'X-uuid-access-X': hashKey
              };
            }
            if (userCustomerId || driverAndBusinessId) {
              options.query = {
                mode: 'dashboard'
              };
            }
            _context7.prev = 6;
            if (!orderAssingId) {
              _context7.next = 18;
              break;
            }
            _context7.next = 10;
            return fetch("".concat(ordering.root, "/drivers/").concat(user.id, "/assign_requests/").concat(orderAssingId), {
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 10:
            response = _context7.sent;
            _context7.next = 13;
            return response.json();
          case 13:
            res = _context7.sent;
            result = res.result;
            error = res.error;
            _context7.next = 24;
            break;
          case 18:
            _context7.next = 20;
            return ordering.setAccessToken(token).orders(orderId).get(_objectSpread(_objectSpread({}, options), {}, {
              cancelToken: source
            }));
          case 20:
            _yield$ordering$setAc7 = _context7.sent;
            content = _yield$ordering$setAc7.content;
            result = content.result;
            error = content.error;
          case 24:
            order = error ? null : ((_result = result) === null || _result === void 0 ? void 0 : _result.order) || result;
            err = error ? Array.isArray(result) ? result[0] : result : null;
            businessData = null;
            if (!err) {
              _context7.next = 30;
              break;
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [err !== null && err !== void 0 ? err : 'ERROR']
            }));
            return _context7.abrupt("return");
          case 30:
            _context7.prev = 30;
            _context7.next = 33;
            return ordering.setAccessToken(token).businesses(order === null || order === void 0 ? void 0 : order.business_id).select(propsToFetch).get({
              cancelToken: source
            });
          case 33:
            _yield$ordering$setAc8 = _context7.sent;
            _content = _yield$ordering$setAc8.content;
            businessData = _content.result;
            _content.error && (err = _content.result[0]);
            _context7.next = 42;
            break;
          case 39:
            _context7.prev = 39;
            _context7.t0 = _context7["catch"](30);
            err = [(_e$message = _context7.t0.message) !== null && _e$message !== void 0 ? _e$message : 'ERROR'];
          case 42:
            if (isFetchDrivers) {
              getDrivers((_order$id = order === null || order === void 0 ? void 0 : order.id) !== null && _order$id !== void 0 ? _order$id : orderId);
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: order,
              businessData: businessData,
              error: err
            }));
            _context7.next = 49;
            break;
          case 46:
            _context7.prev = 46;
            _context7.t1 = _context7["catch"](6);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_e$message2 = _context7.t1.message) !== null && _e$message2 !== void 0 ? _e$message2 : 'ERROR']
            }));
          case 49:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[6, 46], [30, 39]]);
    }));
    return function getOrder() {
      return _ref8.apply(this, arguments);
    };
  }();
  var readMessages = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _messages$messages, _messages$messages2;
      var messageId, _orderState$order9, _orderState$order0, response, _yield$response$json3, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            messageId = messages === null || messages === void 0 || (_messages$messages = messages.messages[(messages === null || messages === void 0 || (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
            if (messageId) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return");
          case 3:
            _context8.prev = 3;
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order9 = orderState.order) === null || _orderState$order9 === void 0 ? void 0 : _orderState$order9.id, "/messages/").concat(messageId, "/read?order_id=").concat(orderId, "&order_message_id=").concat(messageId), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            _yield$response$json3 = _context8.sent;
            result = _yield$response$json3.result;
            setMessagesReadList(result);
            events.emit('order_message_read', (_orderState$order0 = orderState.order) === null || _orderState$order0 === void 0 ? void 0 : _orderState$order0.id);
            _context8.next = 18;
            break;
          case 15:
            _context8.prev = 15;
            _context8.t0 = _context8["catch"](3);
            console.log(_context8.t0.message);
          case 18:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[3, 15]]);
    }));
    return function readMessages() {
      return _ref9.apply(this, arguments);
    };
  }();
  var getDrivers = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(orderId) {
      var _yield$ordering$setAc9, _yield$ordering$setAc0, error, result, _drivers$error2;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: true
            }));
            _context9.next = 4;
            return ordering.setAccessToken(token).controls(orderId).get();
          case 4:
            _yield$ordering$setAc9 = _context9.sent;
            _yield$ordering$setAc0 = _yield$ordering$setAc9.content;
            error = _yield$ordering$setAc0.error;
            result = _yield$ordering$setAc0.result;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: false,
              drivers: result.drivers,
              error: error ? result : null
            }));
            _context9.next = 14;
            break;
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: false,
              error: _context9.t0 !== null && _context9.t0 !== void 0 && _context9.t0.message ? (_drivers$error2 = drivers.error) === null || _drivers$error2 === void 0 ? void 0 : _drivers$error2.push(_context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message) : ['ERROR']
            }));
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 11]]);
    }));
    return function getDrivers(_x7) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleReorder = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(orderId) {
      var _yield$reorder, error, result;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            if (orderId) {
              _context0.next = 2;
              break;
            }
            return _context0.abrupt("return");
          case 2:
            _context0.prev = 2;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            _context0.next = 6;
            return reorder(orderId);
          case 6:
            _yield$reorder = _context0.sent;
            error = _yield$reorder.error;
            result = _yield$reorder.result;
            if (!error) {
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                result: result
              }));
            } else {
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: result
              }));
            }
            _context0.next = 15;
            break;
          case 12:
            _context0.prev = 12;
            _context0.t0 = _context0["catch"](2);
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_context0.t0 === null || _context0.t0 === void 0 ? void 0 : _context0.t0.message]
            }));
          case 15:
          case "end":
            return _context0.stop();
        }
      }, _callee0, null, [[2, 12]]);
    }));
    return function handleReorder(_x8) {
      return _ref1.apply(this, arguments);
    };
  }();

  /**
  * Method to remove products from cart
  */
  var handleRemoveCart = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
      var _carts;
      var uuid, content, _orderState$order1;
      return _regeneratorRuntime().wrap(function _callee1$(_context1) {
        while (1) switch (_context1.prev = _context1.next) {
          case 0:
            uuid = (_carts = carts["businessId:".concat(orderState === null || orderState === void 0 ? void 0 : orderState.order.business_id)]) === null || _carts === void 0 ? void 0 : _carts.uuid;
            if (uuid) {
              _context1.next = 3;
              break;
            }
            return _context1.abrupt("return");
          case 3:
            _context1.prev = 3;
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            _context1.next = 7;
            return clearCart(uuid);
          case 7:
            content = _context1.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              handleReorder(orderState === null || orderState === void 0 || (_orderState$order1 = orderState.order) === null || _orderState$order1 === void 0 ? void 0 : _orderState$order1.id);
              setCartState({
                loading: false,
                error: null
              });
            } else {
              setCartState({
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              });
            }
            _context1.next = 14;
            break;
          case 11:
            _context1.prev = 11;
            _context1.t0 = _context1["catch"](3);
            setCartState({
              loading: false,
              error: [_context1.t0.message]
            });
          case 14:
          case "end":
            return _context1.stop();
        }
      }, _callee1, null, [[3, 11]]);
    }));
    return function handleRemoveCart() {
      return _ref10.apply(this, arguments);
    };
  }();

  /**
   * Method to get room socket
   * @param {String} roomType drivers, orders
   * @returns socket room
   */
  var getRoom = function getRoom(roomType) {
    var _orderState$order10;
    return !token ? {
      room: roomType,
      project: ordering.project,
      role: 'public',
      user_id: hashKey
    } : roomType === 'orders' ? (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id)) : "drivers_".concat((_orderState$order10 = orderState.order) === null || _orderState$order10 === void 0 ? void 0 : _orderState$order10.driver_id);
  };
  (0, _react.useEffect)(function () {
    !orderState.loading && loadMessages();
  }, [orderState === null || orderState === void 0 || (_orderState$order11 = orderState.order) === null || _orderState$order11 === void 0 ? void 0 : _orderState$order11.id, orderState === null || orderState === void 0 || (_orderState$order12 = orderState.order) === null || _orderState$order12 === void 0 ? void 0 : _orderState$order12.status, orderState.loading]);
  (0, _react.useEffect)(function () {
    if (props.order && !isDriverNotification) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        loading: false,
        order: props.order
      }));
      if (isFetchDrivers) {
        var _props$order$id, _props$order3;
        getDrivers((_props$order$id = (_props$order3 = props.order) === null || _props$order3 === void 0 ? void 0 : _props$order3.id) !== null && _props$order$id !== void 0 ? _props$order$id : orderId);
      }
    } else if (!orderState.order && !isDriverNotification) {
      getOrder();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, [props.order, (_orderState$order13 = orderState.order) === null || _orderState$order13 === void 0 ? void 0 : _orderState$order13.id]);
  (0, _react.useEffect)(function () {
    if (orderId && isDriverNotification) {
      getOrder();
    }
  }, [orderId, isDriverNotification]);
  (0, _react.useEffect)(function () {
    var _orderState$order17, _socket$socket, _socket$socket2;
    if (orderState.loading || loading || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var handleUpdateOrderDetails = function handleUpdateOrderDetails(order) {
      var _orderState$order14;
      if ((order === null || order === void 0 ? void 0 : order.id) !== ((_orderState$order14 = orderState.order) === null || _orderState$order14 === void 0 ? void 0 : _orderState$order14.id)) return;
      showToast(_ToastContext.ToastType.Info, t('UPDATING_ORDER', 'Updating order...'), 1000);
      delete order.total;
      delete order.subtotal;
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
      events.emit('order_updated', Object.assign(orderState.order, order));
    };
    var handleTrackingDriver = function handleTrackingDriver(props) {
      var _orderState$order15, _orderState$order16;
      var location = props.location;
      var driverId = props.driver_id;
      if (driverId !== (orderState === null || orderState === void 0 || (_orderState$order15 = orderState.order) === null || _orderState$order15 === void 0 ? void 0 : _orderState$order15.driver_id)) return;
      var newLocation = location !== null && location !== void 0 ? location : {
        lat: -37.9722342,
        lng: 144.7729561
      };
      setDriverLocation(newLocation);
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          driver: _objectSpread(_objectSpread({}, (_orderState$order16 = orderState.order) === null || _orderState$order16 === void 0 ? void 0 : _orderState$order16.driver), {}, {
            location: newLocation
          })
        })
      }));
    };
    if (!isDisabledOrdersRoom) socket.join(getRoom('orders'));
    if ((_orderState$order17 = orderState.order) !== null && _orderState$order17 !== void 0 && _orderState$order17.driver_id) {
      socket.join(getRoom('drivers'));
    }
    socket.socket.on('connect', function () {
      var _orderState$order18;
      if (!isDisabledOrdersRoom) socket.join(getRoom('orders'));
      if ((_orderState$order18 = orderState.order) !== null && _orderState$order18 !== void 0 && _orderState$order18.driver_id) {
        socket.join(getRoom('drivers'));
      }
    });
    socket.on('tracking_driver', handleTrackingDriver);
    if (!(socket !== null && socket !== void 0 && (_socket$socket = socket.socket) !== null && _socket$socket !== void 0 && (_socket$socket = _socket$socket._callbacks) !== null && _socket$socket !== void 0 && _socket$socket.$update_order) || socket !== null && socket !== void 0 && (_socket$socket2 = socket.socket) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2._callbacks) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2.$update_order) !== null && _socket$socket2 !== void 0 && _socket$socket2.find(function (func) {
      return (func === null || func === void 0 ? void 0 : func.name) !== 'handleUpdateOrderDetails';
    })) {
      socket.on('update_order', handleUpdateOrderDetails);
    }
    return function () {
      if (!isDisabledOrdersRoom) socket.leave(getRoom('orders'));
      socket.off('update_order', handleUpdateOrderDetails);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.loading, socket === null || socket === void 0 ? void 0 : socket.socket, loading, userCustomerId, (_orderState$order19 = orderState.order) === null || _orderState$order19 === void 0 ? void 0 : _orderState$order19.driver_id, (_orderState$order20 = orderState.order) === null || _orderState$order20 === void 0 ? void 0 : _orderState$order20.id, hashKey]);
  (0, _react.useEffect)(function () {
    if (messages.loading) return;
    var handleNewMessage = function handleNewMessage(message) {
      var _messages$messages3;
      var actualChat = messages === null || messages === void 0 || (_messages$messages3 = messages.messages) === null || _messages$messages3 === void 0 ? void 0 : _messages$messages3.find(function (_message) {
        var _message$order;
        return (_message === null || _message === void 0 ? void 0 : _message.order_id) === (message === null || message === void 0 || (_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id);
      });
      var found = messages.messages.find(function (_message) {
        return _message.id === message.id;
      });
      if (!found && actualChat) {
        setMessages(_objectSpread(_objectSpread({}, messages), {}, {
          messages: [].concat(_toConsumableArray(messages.messages), [message])
        }));
      }
    };
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, (_orderState$order21 = orderState.order) === null || _orderState$order21 === void 0 ? void 0 : _orderState$order21.status, userCustomerId]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id));
    socket.join(messagesOrdersRoom);
    socket.socket.on('connect', function () {
      socket.join(messagesOrdersRoom);
    });
    return function () {
      // neccesary refactor
      if (!isDisabledOrdersRoom) socket.leave(messagesOrdersRoom);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, userCustomerId]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          user_review: review
        })
      }));
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    updateDriverPosition: updateDriverPosition,
    driverLocation: driverLocation,
    messageErrors: messageErrors,
    formatPrice: formatPrice,
    handleAssignDriver: handleAssignDriver,
    handlerSubmit: handlerSubmitSpotNumber,
    handleChangeOrderStatus: handleChangeOrderStatus,
    messages: messages,
    drivers: drivers,
    setMessages: setMessages,
    readMessages: readMessages,
    messagesReadList: messagesReadList,
    driverUpdateLocation: driverUpdateLocation,
    setDriverUpdateLocation: setDriverUpdateLocation,
    forceUpdate: forceUpdate,
    getOrder: getOrder,
    reorderState: reorderState,
    handleReorder: handleReorder,
    handleRemoveCart: handleRemoveCart,
    cartState: cartState,
    handleClickLogisticOrder: handleClickLogisticOrder,
    loadMessages: loadMessages
  })));
};
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};