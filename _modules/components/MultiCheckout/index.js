"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
var MultiCheckout = exports.MultiCheckout = function MultiCheckout(props) {
  var _cartGroup$result, _cartGroup$result2, _openCarts$filter;
  var UIComponent = props.UIComponent,
    onPlaceOrderClick = props.onPlaceOrderClick,
    cartUuid = props.cartUuid,
    userId = props.userId,
    actionsBeforePlace = props.actionsBeforePlace;
  var qParams = userId ? "?user_id=".concat(userId) : '';
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  /**
   * Session content
   */
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    placeMultiCarts = _useOrder2[1].placeMultiCarts;
  /**
  * Toast state
  */
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  /**
  * Delivery Instructions options
  */
  var _useState = (0, _react.useState)({
      loading: false,
      result: [{
        id: null,
        enabled: true,
        name: t('EITHER_WAY', 'Either way')
      }],
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    instructionsOptions = _useState2[0],
    setInstructionsOptions = _useState2[1];
  /**
  * Delivery instructions selected
  */
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    deliveryOptionSelected = _useState4[0],
    setDeliveryOptionSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      error: null,
      result: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    loyaltyPlansState = _useState6[0],
    setLoyaltyPlansState = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    placing = _useState8[0],
    setPlacing = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    paymethodSelected = _useState0[0],
    setPaymethodSelected = _useState0[1];
  var _useState1 = (0, _react.useState)({
      loading: true,
      error: null,
      result: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    cartGroup = _useState10[0],
    setCartGroup = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    walletState = _useState12[0],
    setWalletState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      fields: [],
      loading: false,
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    checkoutFieldsState = _useState14[0],
    setCheckoutFieldsState = _useState14[1];
  var openCarts = (cartGroup === null || cartGroup === void 0 || (_cartGroup$result = cartGroup.result) === null || _cartGroup$result === void 0 || (_cartGroup$result = _cartGroup$result.carts) === null || _cartGroup$result === void 0 ? void 0 : _cartGroup$result.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.business_id);
  })) || null || [];
  var cartsInvalid = (cartGroup === null || cartGroup === void 0 || (_cartGroup$result2 = cartGroup.result) === null || _cartGroup$result2 === void 0 || (_cartGroup$result2 = _cartGroup$result2.carts) === null || _cartGroup$result2 === void 0 ? void 0 : _cartGroup$result2.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1;
  })) || null || [];
  var totalCartsPrice = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && openCarts.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.total);
  }, 0);
  var totalCartsFee = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && (openCarts === null || openCarts === void 0 || (_openCarts$filter = openCarts.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.valid);
  })) === null || _openCarts$filter === void 0 ? void 0 : _openCarts$filter.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount);
  }, 0));
  var handleGroupPlaceOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(confirmPayment) {
      var _paymethodSelected$pa, _cartGroup$result3, _result$paymethod_dat;
      var paymethodData, _paymethodSelected$pa2, payload, _paymethodSelected$pa3, _yield$placeMultiCart, error, result, _result$payment_event, _paymentEvent$data, paymentEvent, _paymentEvent$data2, _yield$confirmPayment, confirmApplePayError;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!placing) {
              _context.next = 3;
              break;
            }
            showToast(_ToastContext.ToastType.Info, t('CART_IN_PROGRESS', 'Cart in progress'));
            return _context.abrupt("return");
          case 3:
            paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data;
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway)) {
              paymethodData = JSON.stringify({
                source_id: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa2 = paymethodSelected.paymethod_data) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id
              });
            }
            payload = {
              amount: cartGroup === null || cartGroup === void 0 || (_cartGroup$result3 = cartGroup.result) === null || _cartGroup$result3 === void 0 ? void 0 : _cartGroup$result3.balance
            };
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_id: (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa3 = paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.id) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id)
              });
            }
            if (paymethodData) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_data: paymethodData
              });
            }
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                wallet_id: paymethodSelected.wallet_id,
                wallet_data: paymethodSelected.wallet_data
              });
            }
            setPlacing(true);
            _context.next = 12;
            return placeMultiCarts(payload, cartUuid);
          case 12:
            _yield$placeMultiCart = _context.sent;
            error = _yield$placeMultiCart.error;
            result = _yield$placeMultiCart.result;
            if (!error) {
              _context.next = 18;
              break;
            }
            setPlacing(false);
            return _context.abrupt("return");
          case 18:
            if (!((result === null || result === void 0 || (_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.status) === 2 && actionsBeforePlace)) {
              _context.next = 21;
              break;
            }
            _context.next = 21;
            return actionsBeforePlace(paymethodSelected, result);
          case 21:
            if (!(confirmPayment && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'global_apple_pay')) {
              _context.next = 31;
              break;
            }
            paymentEvent = result === null || result === void 0 || (_result$payment_event = result.payment_events) === null || _result$payment_event === void 0 ? void 0 : _result$payment_event.find(function (event) {
              var _event$data;
              return event === null || event === void 0 || (_event$data = event.data) === null || _event$data === void 0 || (_event$data = _event$data.extra) === null || _event$data === void 0 ? void 0 : _event$data.client_secret;
            });
            if (!(paymentEvent !== null && paymentEvent !== void 0 && (_paymentEvent$data = paymentEvent.data) !== null && _paymentEvent$data !== void 0 && (_paymentEvent$data = _paymentEvent$data.extra) !== null && _paymentEvent$data !== void 0 && _paymentEvent$data.client_secret)) {
              _context.next = 29;
              break;
            }
            _context.next = 26;
            return confirmPayment(paymentEvent === null || paymentEvent === void 0 || (_paymentEvent$data2 = paymentEvent.data) === null || _paymentEvent$data2 === void 0 || (_paymentEvent$data2 = _paymentEvent$data2.extra) === null || _paymentEvent$data2 === void 0 ? void 0 : _paymentEvent$data2.client_secret);
          case 26:
            _yield$confirmPayment = _context.sent;
            confirmApplePayError = _yield$confirmPayment.error;
            if (confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.message || confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.localizedMessage) {
              showToast(_ToastContext.ToastType.Error, (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.message) || (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.localizedMessage));
            }
          case 29:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 31:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleGroupPlaceOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSelectPaymethod = function handleSelectPaymethod(paymethod) {
    setPaymethodSelected(paymethod === null ? {} : _objectSpread(_objectSpread(_objectSpread({}, paymethodSelected), paymethod), {}, {
      paymethod_data: paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_data
    }));
  };
  var handleSelectWallet = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isChecked, wallet) {
      var _cartGroup$result4, _cartGroup$result5;
      var url, response, _yield$response$json, error, result, _err$message;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: true,
              error: null
            }));
            url = isChecked ? "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 || (_cartGroup$result4 = cartGroup.result) === null || _cartGroup$result4 === void 0 ? void 0 : _cartGroup$result4.uuid, "/wallets") : "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 || (_cartGroup$result5 = cartGroup.result) === null || _cartGroup$result5 === void 0 ? void 0 : _cartGroup$result5.uuid, "/wallets/").concat(wallet.id);
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(url, _objectSpread({
              method: isChecked ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            }, isChecked && {
              body: JSON.stringify({
                wallet_id: wallet.id
              })
            }));
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
                result: _objectSpread(_objectSpread({}, cartGroup.result), {}, {
                  wallets: result === null || result === void 0 ? void 0 : result.wallets,
                  payment_events: result === null || result === void 0 ? void 0 : result.payment_events,
                  balance: result === null || result === void 0 ? void 0 : result.balance
                })
              }));
            }
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: error ? result : null,
              result: error ? null : result
            }));
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](2);
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: (_err$message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _err$message !== void 0 ? _err$message : _context2.t0
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 15]]);
    }));
    return function handleSelectWallet(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
      paymethod_data: data
    }));
  };
  var getDeliveryOptions = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("".concat(ordering.root, "/delivery_options").concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();
          case 6:
            _yield$response$json2 = _context3.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context3.next = 12;
              break;
            }
            setInstructionsOptions({
              loading: false,
              result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
            });
            return _context3.abrupt("return");
          case 12:
            setInstructionsOptions({
              loading: false,
              error: true,
              result: result
            });
            showToast(_ToastContext.ToastType.Error, result);
            _context3.next = 20;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            setInstructionsOptions({
              loading: false,
              error: true,
              result: _context3.t0.message
            });
            showToast(_ToastContext.ToastType.Error, _context3.t0.message);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 16]]);
    }));
    return function getDeliveryOptions() {
      return _ref3.apply(this, arguments);
    };
  }();
  var multiHandleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(value, cartUuidArr) {
      var allPromise;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            allPromise = cartUuidArr.map(function (cartId) {
              return new Promise(/*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
                  var body, response, _yield$response$json3, result, error;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        body = {
                          delivery_option_id: value
                        };
                        if (userId) body.user_id = userId;
                        _context4.next = 4;
                        return fetch("".concat(ordering.root, "/carts/").concat(cartId), {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization: "bearer ".concat(token),
                            'X-App-X': ordering.appId,
                            'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                          },
                          body: JSON.stringify(body)
                        });
                      case 4:
                        response = _context4.sent;
                        _context4.next = 7;
                        return response.json();
                      case 7:
                        _yield$response$json3 = _context4.sent;
                        result = _yield$response$json3.result;
                        error = _yield$response$json3.error;
                        if (!error && (result === null || result === void 0 ? void 0 : result.delivery_option_id) === value) {
                          resolve(result);
                        } else {
                          reject(false);
                        }
                      case 11:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x6, _x7) {
                  return _ref5.apply(this, arguments);
                };
              }());
            });
            _context5.next = 4;
            return Promise.all(allPromise);
          case 4:
            _context5.t0 = _context5.sent;
            if (!_context5.t0) {
              _context5.next = 7;
              break;
            }
            setDeliveryOptionSelected(value);
          case 7:
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t1 = _context5["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context5.t1.message);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 9]]);
    }));
    return function multiHandleChangeDeliveryOption(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
      var cartUuidArr;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            cartUuidArr = openCarts.map(function (cart) {
              return cart === null || cart === void 0 ? void 0 : cart.uuid;
            });
            multiHandleChangeDeliveryOption(value, cartUuidArr);
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function handleChangeDeliveryOption(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getMultiCart = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response, _yield$response$json4, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (cartUuid) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return");
          case 3:
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: true
            }));
            _context7.next = 6;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid).concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 6:
            response = _context7.sent;
            _context7.next = 9;
            return response.json();
          case 9:
            _yield$response$json4 = _context7.sent;
            result = _yield$response$json4.result;
            error = _yield$response$json4.error;
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              result: result,
              error: error
            }));
            _context7.next = 18;
            break;
          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](0);
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              error: _context7.t0.message
            }));
          case 18:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 15]]);
    }));
    return function getMultiCart() {
      return _ref7.apply(this, arguments);
    };
  }();
  var getLoyaltyPlans = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _result$find$accumula, _result$find, req, _yield$req$json, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return fetch("".concat(ordering.root, "/loyalty_plans"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            req = _context8.sent;
            _context8.next = 6;
            return req.json();
          case 6:
            _yield$req$json = _context8.sent;
            error = _yield$req$json.error;
            result = _yield$req$json.result;
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: error ? [] : result,
              rewardRate: (_result$find$accumula = result === null || result === void 0 || (_result$find = result.find(function (loyal) {
                return loyal.type === 'credit_point';
              })) === null || _result$find === void 0 ? void 0 : _result$find.accumulation_rate) !== null && _result$find$accumula !== void 0 ? _result$find$accumula : 0
            }));
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: []
            }));
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 12]]);
    }));
    return function getLoyaltyPlans() {
      return _ref8.apply(this, arguments);
    };
  }();
  var getValidationFieldOrderTypes = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context9.next = 5;
            return fetch("".concat(ordering.root, "/validation_field_order_types"), requestOptions);
          case 5:
            response = _context9.sent;
            _context9.next = 8;
            return response.json();
          case 8:
            content = _context9.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              setCheckoutFieldsState({
                fields: content === null || content === void 0 ? void 0 : content.result,
                loading: false
              });
            } else {
              setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              }));
            }
            _context9.next = 15;
            break;
          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
              loading: false,
              error: [_context9.t0.message]
            }));
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 12]]);
    }));
    return function getValidationFieldOrderTypes() {
      return _ref9.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(null);
    }
  }, [instructionsOptions]);
  (0, _react.useEffect)(function () {
    Promise.any([getDeliveryOptions(), getLoyaltyPlans()]);
    getValidationFieldOrderTypes();
  }, []);
  (0, _react.useEffect)(function () {
    getMultiCart();
  }, [JSON.stringify(carts)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    placing: placing,
    openCarts: openCarts,
    rewardRate: loyaltyPlansState === null || loyaltyPlansState === void 0 ? void 0 : loyaltyPlansState.rewardRate,
    loyaltyPlansState: loyaltyPlansState,
    totalCartsPrice: totalCartsPrice,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleGroupPlaceOrder: handleGroupPlaceOrder,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange,
    handleChangeDeliveryOption: handleChangeDeliveryOption,
    deliveryOptionSelected: deliveryOptionSelected,
    instructionsOptions: instructionsOptions,
    cartGroup: cartGroup,
    walletState: walletState,
    totalCartsFee: totalCartsFee,
    cartsInvalid: cartsInvalid,
    checkoutFieldsState: checkoutFieldsState
  })));
};
MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};