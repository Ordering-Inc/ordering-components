"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
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
 * Component to manage Checkout page behavior without UI component
 */
var Checkout = exports.Checkout = function Checkout(props) {
  var _Object$values$find$b, _Object$values$find, _orderState$carts, _orderState$carts2, _cartState$cart$spot_, _cartState$cart, _orderState$options3;
  var cartState = props.cartState,
    propsToFetch = props.propsToFetch,
    actionsBeforePlace = props.actionsBeforePlace,
    handleCustomClick = props.handleCustomClick,
    onPlaceOrderClick = props.onPlaceOrderClick,
    UIComponent = props.UIComponent,
    isApp = props.isApp,
    isKiosk = props.isKiosk,
    isCustomerMode = props.isCustomerMode,
    handleOrderRedirect = props.handleOrderRedirect;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    options = _useOrder2[0].options,
    refreshOrderOptions = _useOrder2[1].refreshOrderOptions;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 2),
    configs = _useConfig2[0].configs,
    refreshConfigs = _useConfig2[1].refreshConfigs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    placing = _useState2[0],
    setPlacing = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    alseaCheckPriceError = _useState6[0],
    setAlseaCheckpriceError = _useState6[1];
  /**
   * Language context
   */
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  /**
   * Order context
   */
  var _useOrder3 = (0, _OrderContext.useOrder)(),
    _useOrder4 = _slicedToArray(_useOrder3, 2),
    orderState = _useOrder4[0],
    placeCart = _useOrder4[1].placeCart;
  /**
   * Session content
   */
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    user = _useSession2$.user;
  /**
   * Toast state
   */
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  /**
   * Delivery Instructions options
   */
  var _useState7 = (0, _react.useState)({
      loading: false,
      result: [{
        id: null,
        enabled: true,
        name: t('EITHER_WAY', 'Either way')
      }],
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    instructionsOptions = _useState8[0],
    setInstructionsOptions = _useState8[1];
  /**
   * Delivery instructions selected
   */
  var _useState9 = (0, _react.useState)(undefined),
    _useState0 = _slicedToArray(_useState9, 2),
    deliveryOptionSelected = _useState0[0],
    setDeliveryOptionSelected = _useState0[1];
  /**
  * Comment state
  */
  var _useState1 = (0, _react.useState)({
      loading: false,
      result: null,
      error: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    commentState = _useState10[0],
    setCommentState = _useState10[1];
  /**
   * Object to save an object with business information
   */
  var _useState11 = (0, _react.useState)({
      business: null,
      loading: true,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    businessDetails = _useState12[0],
    setBusinessDetails = _useState12[1];
  /**
   * This must be contains an object with info about paymente selected
   */
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    paymethodSelected = _useState14[0],
    setPaymethodSelected = _useState14[1];
  /**
   * Loyalty plans state
   */
  var _useState15 = (0, _react.useState)({
      loading: true,
      error: null,
      result: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    loyaltyPlansState = _useState16[0],
    setLoyaltyPlansState = _useState16[1];
  var _useState17 = (0, _react.useState)({
      fields: [],
      loading: false,
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    checkoutFieldsState = _useState18[0],
    setCheckoutFieldsState = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isLoadingCheckprice = _useState20[0],
    setIsLoadingCheckprice = _useState20[1];
  var businessId = props.uuid ? (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === props.uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {} : props.businessId;
  /**
   * Current cart
   */
  var cart = businessId && typeof businessId === 'number' ? (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(businessId)] : (_orderState$carts2 = orderState.carts) === null || _orderState$carts2 === void 0 ? void 0 : _orderState$carts2['businessId:null'];
  /**
   * Place spot state from chackout
   */
  var _useState21 = (0, _react.useState)((_cartState$cart$spot_ = cartState === null || cartState === void 0 || (_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.spot_number) !== null && _cartState$cart$spot_ !== void 0 ? _cartState$cart$spot_ : cart === null || cart === void 0 ? void 0 : cart.spot_number),
    _useState22 = _slicedToArray(_useState21, 2),
    placeSpotNumber = _useState22[0],
    setPlaceSpotNumber = _useState22[1];
  /**
   * Timeout for update cart comment
   */
  var timeout = null;
  /**
   * Cart comment stagged
   */
  var previousComment;
  /**
   * order types delivery
   */
  var orderTypesDelivery = [1, 7];
  /**
   * Method to get business from API
   */

  var paymethodsWithoutSaveCard = ['credomatic'];
  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _orderState$options, _cartState$cart2, parameters, _yield$ordering$busin, _yield$ordering$busin2, result, error, _result$paymethods, _paymethodSelected$pa, _paymethodSelected, _paymethodSelected$pa2, _paymethodSelected$pa3, _paymethodSelected$pa4;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            refreshConfigs();
            _context.prev = 1;
            parameters = {
              type: (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type
            };
            _context.next = 5;
            return ordering.businesses(businessId).select(propsToFetch).parameters(parameters).get();
          case 5:
            _yield$ordering$busin = _context.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error && (_cartState$cart2 = cartState.cart) !== null && _cartState$cart2 !== void 0 && _cartState$cart2.paymethod_id) {
              _paymethodSelected = result === null || result === void 0 || (_result$paymethods = result.paymethods) === null || _result$paymethods === void 0 ? void 0 : _result$paymethods.find(function (paymethod) {
                var _cartState$cart3;
                return (paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_id) === ((_cartState$cart3 = cartState.cart) === null || _cartState$cart3 === void 0 ? void 0 : _cartState$cart3.paymethod_id);
              });
              if (_paymethodSelected !== null && _paymethodSelected !== void 0 && (_paymethodSelected$pa = _paymethodSelected.paymethod) !== null && _paymethodSelected$pa !== void 0 && _paymethodSelected$pa.id) {
                handlePaymethodChange({
                  paymethodId: _paymethodSelected === null || _paymethodSelected === void 0 || (_paymethodSelected$pa2 = _paymethodSelected.paymethod) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id,
                  gateway: _paymethodSelected === null || _paymethodSelected === void 0 || (_paymethodSelected$pa3 = _paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.gateway,
                  paymethod: _objectSpread(_objectSpread({}, _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : _paymethodSelected.paymethod), {}, {
                    credentials: _objectSpread({}, _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : _paymethodSelected.data)
                  }),
                  data: cart === null || cart === void 0 ? void 0 : cart.paymethod_data,
                  id: _paymethodSelected === null || _paymethodSelected === void 0 || (_paymethodSelected$pa4 = _paymethodSelected.paymethod) === null || _paymethodSelected$pa4 === void 0 ? void 0 : _paymethodSelected$pa4.id
                });
              }
            }
            setBusinessDetails(_objectSpread(_objectSpread({}, businessDetails), {}, {
              loading: false,
              business: result,
              error: error
            }));
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            setBusinessDetails(_objectSpread(_objectSpread({}, businessDetails), {}, {
              loading: false,
              error: _context.t0
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }));
    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to handle click on Place order
   */
  var handlerClickPlaceOrder = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(paymentOptions, payloadProps, confirmPayment, dismissPlatformPay) {
      var _paymethodSelected$pa5, _cart$balance, _orderState$options2, _paymethodSelected$pa6, _cartResult$paymethod, _result$result, _cartResult$paymethod2, _cartResult$paymethod3, _cartResult$paymethod4;
      var paymethodData, _paymethodSelected$da, payload, result, _paymethodSelected$pa7, cartResult, _result$result2, _yield$confirmPayment, confirmApplePayError;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!placing) {
              _context2.next = 3;
              break;
            }
            showToast(_ToastContext.ToastType.Info, t('CART_IN_PROGRESS', 'Cart in progress'));
            return _context2.abrupt("return");
          case 3:
            paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data;
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa5 = paymethodSelected.paymethod) === null || _paymethodSelected$pa5 === void 0 ? void 0 : _paymethodSelected$pa5.gateway)) {
              paymethodData = {
                source_id: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.id
              };
            }
            payload = {
              amount: (_cart$balance = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance !== void 0 ? _cart$balance : cart === null || cart === void 0 ? void 0 : cart.total
            };
            if (cart !== null && cart !== void 0 && cart.offer_id) payload.offer_id = cart === null || cart === void 0 ? void 0 : cart.offer_id;
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethodId,
                paymethod_data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data
              });
            }
            if (orderTypesDelivery.includes(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type)) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                delivery_zone_id: cart !== null && cart !== void 0 && cart.business_id ? cart.delivery_zone_id : 0
              });
            }
            if (!handleCustomClick) {
              _context2.next = 12;
              break;
            }
            handleCustomClick(payload, paymethodSelected, cart);
            return _context2.abrupt("return");
          case 12:
            if (cart) {
              _context2.next = 14;
              break;
            }
            return _context2.abrupt("return");
          case 14:
            payload = _objectSpread(_objectSpread(_objectSpread({}, payload), payloadProps), {}, {
              paymethod_data: _objectSpread(_objectSpread({}, paymethodData), paymentOptions)
            });
            setPlacing(true);
            _context2.next = 18;
            return onChangeSpot();
          case 18:
            if (paymethodsWithoutSaveCard.includes(paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa6 = paymethodSelected.paymethod) === null || _paymethodSelected$pa6 === void 0 ? void 0 : _paymethodSelected$pa6.gateway)) {
              delete payload.paymethod_data;
            }
            _context2.next = 21;
            return placeCart(cart.uuid, payload);
          case 21:
            result = _context2.sent;
            if (!(result !== null && result !== void 0 && result.error || !result)) {
              _context2.next = 30;
              break;
            }
            setErrors(result === null || result === void 0 ? void 0 : result.result);
            if (!(dismissPlatformPay && (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa7 = paymethodSelected.paymethod) === null || _paymethodSelected$pa7 === void 0 ? void 0 : _paymethodSelected$pa7.gateway) === 'apple_pay')) {
              _context2.next = 27;
              break;
            }
            _context2.next = 27;
            return dismissPlatformPay();
          case 27:
            refreshOrderOptions();
            setPlacing(false);
            return _context2.abrupt("return");
          case 30:
            cartResult = result === null || result === void 0 ? void 0 : result.result;
            if (!((cartResult === null || cartResult === void 0 || (_cartResult$paymethod = cartResult.paymethod_data) === null || _cartResult$paymethod === void 0 ? void 0 : _cartResult$paymethod.status) === 2 && actionsBeforePlace)) {
              _context2.next = 34;
              break;
            }
            _context2.next = 34;
            return actionsBeforePlace(paymethodSelected, result.result);
          case 34:
            if (!(confirmPayment && (result === null || result === void 0 || (_result$result = result.result) === null || _result$result === void 0 || (_result$result = _result$result.paymethod_data) === null || _result$result === void 0 ? void 0 : _result$result.gateway) === 'apple_pay')) {
              _context2.next = 40;
              break;
            }
            _context2.next = 37;
            return confirmPayment(result === null || result === void 0 || (_result$result2 = result.result) === null || _result$result2 === void 0 || (_result$result2 = _result$result2.paymethod_data) === null || _result$result2 === void 0 || (_result$result2 = _result$result2.result) === null || _result$result2 === void 0 ? void 0 : _result$result2.client_secret);
          case 37:
            _yield$confirmPayment = _context2.sent;
            confirmApplePayError = _yield$confirmPayment.error;
            if (confirmApplePayError) {
              setErrors(confirmApplePayError);
            }
          case 40:
            if (paymethodsWithoutSaveCard.includes(cartResult === null || cartResult === void 0 || (_cartResult$paymethod2 = cartResult.paymethod_data) === null || _cartResult$paymethod2 === void 0 ? void 0 : _cartResult$paymethod2.gateway) && cartResult !== null && cartResult !== void 0 && (_cartResult$paymethod3 = cartResult.paymethod_data) !== null && _cartResult$paymethod3 !== void 0 && (_cartResult$paymethod3 = _cartResult$paymethod3.result) !== null && _cartResult$paymethod3 !== void 0 && _cartResult$paymethod3.hash && (cartResult === null || cartResult === void 0 || (_cartResult$paymethod4 = cartResult.paymethod_data) === null || _cartResult$paymethod4 === void 0 ? void 0 : _cartResult$paymethod4.status) === 2 && !payloadProps.isNative) {
              handleConfirmCredomaticPage(cartResult, paymethodSelected);
            }
            setPlacing(false);
            onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult);
          case 43:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handlerClickPlaceOrder(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePaymethodChange = function handlePaymethodChange(paymethod) {
    setPaymethodSelected(paymethod);
  };
  var onRemoveSpotNumber = function onRemoveSpotNumber(businessSlug) {
    var _JSON$parse;
    var spotNumberFromStorage = window.localStorage.getItem('table_number');
    if (!spotNumberFromStorage) return;
    var slug = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.slug;
    if (businessSlug === slug) {
      window.localStorage.removeItem('table_number');
    }
  };

  /**
   * change place spot from checkout
   */
  var handleChangeSpot = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
      var _ref3$isCheckout, isCheckout, bodyToSend, id, endpointToFetch, _yield$endpointToFetc, _yield$endpointToFetc2, error, result, _cart$business;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$isCheckout = _ref3.isCheckout, isCheckout = _ref3$isCheckout === void 0 ? true : _ref3$isCheckout, bodyToSend = _ref3.bodyToSend;
            _context3.prev = 1;
            id = isCheckout ? cart === null || cart === void 0 ? void 0 : cart.uuid : cart === null || cart === void 0 ? void 0 : cart.id;
            endpointToFetch = isCheckout ? ordering.setAccessToken(token).carts(id).set(bodyToSend) : ordering.setAccessToken(token).orders(id).save(bodyToSend);
            _context3.next = 6;
            return endpointToFetch;
          case 6:
            _yield$endpointToFetc = _context3.sent;
            _yield$endpointToFetc2 = _yield$endpointToFetc.content;
            error = _yield$endpointToFetc2.error;
            result = _yield$endpointToFetc2.result;
            if (!error && !isApp) {
              onRemoveSpotNumber && onRemoveSpotNumber(cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug);
            }
            showToast(error ? _ToastContext.ToastType.Error : _ToastContext.ToastType.Success, error ? t('ERROR', result[0]) : t('SPOT_CHANGE_SUCCESS_CONTENT', 'Changes applied correctly'));
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 14]]);
    }));
    return function handleChangeSpot(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var onChangeSpot = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _cartState$cart4;
      var bodyToSend;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (options.type === 3 && !(cartState !== null && cartState !== void 0 && (_cartState$cart4 = cartState.cart) !== null && _cartState$cart4 !== void 0 && _cartState$cart4.spot_number) && !(cart !== null && cart !== void 0 && cart.spot_number)) {
              bodyToSend = {};
              placeSpotNumber && (bodyToSend.spot_number = placeSpotNumber);
              if (Object.keys(bodyToSend).length) {
                handleChangeSpot({
                  bodyToSend: bodyToSend
                });
              }
            }
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onChangeSpot() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * change comment for cart
   */
  var handleChangeComment = function handleChangeComment(value) {
    try {
      if (previousComment !== value) {
        clearTimeout(timeout);
        timeout = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var uuid, response, _yield$response$json, result, error;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                  loading: true
                }));
                uuid = cart === null || cart === void 0 ? void 0 : cart.uuid;
                _context5.next = 4;
                return fetch("".concat(ordering.root, "/carts/").concat(uuid), {
                  'Content-Type': 'application/json',
                  method: 'PUT',
                  body: JSON.stringify({
                    comment: value
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer ".concat(token),
                    'X-App-X': ordering.appId,
                    'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                  }
                });
              case 4:
                response = _context5.sent;
                _context5.next = 7;
                return response.json();
              case 7:
                _yield$response$json = _context5.sent;
                result = _yield$response$json.result;
                error = _yield$response$json.error;
                if (!error) {
                  _context5.next = 14;
                  break;
                }
                setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                  loading: false,
                  error: true,
                  result: result
                }));
                showToast(_ToastContext.ToastType.Error, result);
                return _context5.abrupt("return");
              case 14:
                setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                  loading: false,
                  error: null,
                  result: result
                }));
              case 15:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })), 750);
      }
      previousComment = value;
    } catch (err) {
      setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
        loading: false,
        error: true,
        result: err.message
      }));
      showToast(_ToastContext.ToastType.Error, err.message);
    }
  };
  var getDeliveryOptions = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch("".concat(ordering.root, "/delivery_options"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            response = _context6.sent;
            _context6.next = 6;
            return response.json();
          case 6:
            _yield$response$json2 = _context6.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context6.next = 12;
              break;
            }
            setInstructionsOptions({
              loading: false,
              result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
            });
            return _context6.abrupt("return");
          case 12:
            setInstructionsOptions({
              loading: false,
              error: true,
              result: result
            });
            showToast(_ToastContext.ToastType.Error, result);
            _context6.next = 20;
            break;
          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](0);
            setInstructionsOptions({
              loading: false,
              error: true,
              result: _context6.t0.message
            });
            showToast(_ToastContext.ToastType.Error, _context6.t0.message);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 16]]);
    }));
    return function getDeliveryOptions() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(value) {
      var response, _yield$response$json3, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return fetch("".concat(ordering.root, "/carts/").concat(cart === null || cart === void 0 ? void 0 : cart.uuid), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                delivery_option_id: value
              })
            });
          case 3:
            response = _context7.sent;
            _context7.next = 6;
            return response.json();
          case 6:
            _yield$response$json3 = _context7.sent;
            result = _yield$response$json3.result;
            error = _yield$response$json3.error;
            setDeliveryOptionSelected(result === null || result === void 0 ? void 0 : result.delivery_option_id);
            if (error) {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context7.next = 16;
            break;
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context7.t0.message);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 13]]);
    }));
    return function handleChangeDeliveryOption(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  var getLoyaltyPlans = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var req, _yield$req$json, error, result;
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
              result: error ? [] : result
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
      return _ref9.apply(this, arguments);
    };
  }();
  var handleConfirmCredomaticPage = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(cart, paymethodSelected) {
      var _configs$credomatic_i, _configs$credomatic_i2, _configs$credomatic_i3, _configs$credomatic_i4;
      var isSandbox, keyId, processorId, _cart$paymethod_data, _cart$paymethod_data2, _paymethodSelected$da2, _paymethodSelected$da3, _paymethodSelected$da4, _Object$keys, cartUuid, data, form, requestOptions;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            isSandbox = (configs === null || configs === void 0 || (_configs$credomatic_i = configs.credomatic_integration_sandbox) === null || _configs$credomatic_i === void 0 ? void 0 : _configs$credomatic_i.value) === '1';
            keyId = isSandbox ? configs === null || configs === void 0 || (_configs$credomatic_i2 = configs.credomatic_integration_public_sandbox_key) === null || _configs$credomatic_i2 === void 0 ? void 0 : _configs$credomatic_i2.value : configs === null || configs === void 0 || (_configs$credomatic_i3 = configs.credomatic_integration_public_production_key) === null || _configs$credomatic_i3 === void 0 ? void 0 : _configs$credomatic_i3.value;
            processorId = configs === null || configs === void 0 || (_configs$credomatic_i4 = configs.credomatic_integration_processor_id) === null || _configs$credomatic_i4 === void 0 ? void 0 : _configs$credomatic_i4.value;
            _context9.prev = 3;
            cartUuid = cart === null || cart === void 0 ? void 0 : cart.uuid;
            data = {
              type: 'auth',
              key_id: keyId,
              hash: cart === null || cart === void 0 || (_cart$paymethod_data = cart.paymethod_data) === null || _cart$paymethod_data === void 0 || (_cart$paymethod_data = _cart$paymethod_data.result) === null || _cart$paymethod_data === void 0 ? void 0 : _cart$paymethod_data.hash,
              time: cart === null || cart === void 0 || (_cart$paymethod_data2 = cart.paymethod_data) === null || _cart$paymethod_data2 === void 0 || (_cart$paymethod_data2 = _cart$paymethod_data2.result) === null || _cart$paymethod_data2 === void 0 ? void 0 : _cart$paymethod_data2.time,
              amount: cart === null || cart === void 0 ? void 0 : cart.total,
              orderid: cartUuid,
              ccnumber: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da2 = paymethodSelected.data) === null || _paymethodSelected$da2 === void 0 ? void 0 : _paymethodSelected$da2.ccnumber,
              cvv: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da3 = paymethodSelected.data) === null || _paymethodSelected$da3 === void 0 ? void 0 : _paymethodSelected$da3.cvv,
              ccexp: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da4 = paymethodSelected.data) === null || _paymethodSelected$da4 === void 0 ? void 0 : _paymethodSelected$da4.ccexp,
              redirect: window.location.href.replace(window.location.search, '')
            };
            if (processorId) {
              data.processor_id = processorId;
            }
            form = document.createElement('form');
            form.method = 'POST';
            form.action = 'https://credomatic.compassmerchantsolutions.com/api/transact.php';
            form.style.display = 'none';
            // eslint-disable-next-line no-unused-expressions
            (_Object$keys = Object.keys(data)) === null || _Object$keys === void 0 || _Object$keys.map(function (key) {
              var formInputName = document.createElement('input');
              formInputName.name = key;
              formInputName.value = data[key];
              form.appendChild(formInputName);
            });
            document.body.appendChild(form);
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                data: data,
                project_code: ordering.project,
                cart_uuid: cartUuid
              })
            };
            _context9.next = 16;
            return fetch('https://integrations.ordering.co/credomatic/log_generator.php', requestOptions);
          case 16:
            form.submit();
            _context9.next = 22;
            break;
          case 19:
            _context9.prev = 19;
            _context9.t0 = _context9["catch"](3);
            showToast(_ToastContext.ToastType.Error, _context9.t0.message);
          case 22:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[3, 19]]);
    }));
    return function handleConfirmCredomaticPage(_x7, _x8) {
      return _ref0.apply(this, arguments);
    };
  }();
  var getValidationFieldOrderTypes = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            _context0.prev = 0;
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
            _context0.next = 5;
            return fetch("".concat(ordering.root, "/validation_field_order_types"), requestOptions);
          case 5:
            response = _context0.sent;
            _context0.next = 8;
            return response.json();
          case 8:
            content = _context0.sent;
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
            _context0.next = 15;
            break;
          case 12:
            _context0.prev = 12;
            _context0.t0 = _context0["catch"](0);
            setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
              loading: false,
              error: [_context0.t0.message]
            }));
          case 15:
          case "end":
            return _context0.stop();
        }
      }, _callee0, null, [[0, 12]]);
    }));
    return function getValidationFieldOrderTypes() {
      return _ref1.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (businessId && typeof businessId === 'number') {
      getBusiness();
    }
  }, [businessId, (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type]);

  /**
   * Update carts from sockets
   */
  (0, _react.useEffect)(function () {
    if (cart && cart.status === 1) {
      var _cart$balance2;
      var data = {
        paymethod_id: paymethodSelected.paymethodId,
        paymethod_data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data,
        delivery_zone_id: cart.delivery_zone_id,
        amount: (_cart$balance2 = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance2 !== void 0 ? _cart$balance2 : cart === null || cart === void 0 ? void 0 : cart.total
      };
      if (cart !== null && cart !== void 0 && cart.offer_id) payload.offer_id = cart === null || cart === void 0 ? void 0 : cart.offer_id;
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart);
    }
  }, [cart]);
  (0, _react.useEffect)(function () {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(cart === null || cart === void 0 ? void 0 : cart.delivery_option_id);
    }
  }, [cart === null || cart === void 0 ? void 0 : cart.delivery_option_id]);
  (0, _react.useEffect)(function () {
    var _socket$socket;
    var handleCartUpdate = function handleCartUpdate(cart) {
      var _cart$order, _cart$order2;
      if ((cart === null || cart === void 0 ? void 0 : cart.status) !== 1 || !(cart !== null && cart !== void 0 && (_cart$order = cart.order) !== null && _cart$order !== void 0 && _cart$order.uuid)) return;
      handleOrderRedirect && handleOrderRedirect(cart === null || cart === void 0 || (_cart$order2 = cart.order) === null || _cart$order2 === void 0 ? void 0 : _cart$order2.uuid);
    };
    if (isCustomerMode && socket !== null && socket !== void 0 && (_socket$socket = socket.socket) !== null && _socket$socket !== void 0 && (_socket$socket = _socket$socket._callbacks) !== null && _socket$socket !== void 0 && _socket$socket.$carts_update) {
      socket.on('carts_update', handleCartUpdate);
    }
    return function () {
      var _socket$socket2;
      if (isCustomerMode && socket !== null && socket !== void 0 && (_socket$socket2 = socket.socket) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2._callbacks) !== null && _socket$socket2 !== void 0 && _socket$socket2.$carts_update) {
        socket.off('carts_update', handleCartUpdate);
      }
    };
  }, [socket, isCustomerMode]);
  (0, _react.useEffect)(function () {
    if (!isKiosk) {
      Promise.all([getDeliveryOptions(), getLoyaltyPlans()].map(function (promise) {
        return promise.then(function (value) {
          return Promise.reject(value);
        }, function (error) {
          return Promise.resolve(error);
        });
      }));
    }
    getValidationFieldOrderTypes();
  }, []);
  (0, _react.useEffect)(function () {
    var _cart$balance3;
    var alseaProjects = ['alsea', 'alsea-staging'];
    var amount = (_cart$balance3 = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance3 !== void 0 ? _cart$balance3 : cart === null || cart === void 0 ? void 0 : cart.total;
    if (!(alseaProjects.includes(ordering.project) && isCustomerMode)) return;
    var handleAlseaCheckPrice = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
        var customerFromLocalStorage, apiCheckprice, response, result;
        return _regeneratorRuntime().wrap(function _callee1$(_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _context1.prev = 0;
              setIsLoadingCheckprice(true);
              _context1.next = 4;
              return window.localStorage.getItem('user-customer', true);
            case 4:
              customerFromLocalStorage = _context1.sent;
              apiCheckprice = ordering.project === 'alsea' ? 'https://alsea-plugins.ordering.co/alseaplatform/api_checkprice.php' : 'https://alsea-plugins-staging.ordering.co/alseaplatform/api_checkprice.php';
              _context1.next = 8;
              return fetch(apiCheckprice, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-App-X': ordering.appId,
                  Authorization: "bearer ".concat(token)
                },
                body: JSON.stringify({
                  amount: amount !== null && amount !== void 0 ? amount : 0,
                  user_id: (customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id) || user.id,
                  uuid: cart.uuid
                })
              });
            case 8:
              response = _context1.sent;
              _context1.next = 11;
              return response.json();
            case 11:
              result = _context1.sent;
              if (!result.error) {
                _context1.next = 16;
                break;
              }
              setAlseaCheckpriceError(t(result === null || result === void 0 ? void 0 : result.result));
              _context1.next = 19;
              break;
            case 16:
              setAlseaCheckpriceError(null);
              _context1.next = 19;
              return refreshOrderOptions();
            case 19:
              setIsLoadingCheckprice(false);
              _context1.next = 26;
              break;
            case 22:
              _context1.prev = 22;
              _context1.t0 = _context1["catch"](0);
              setAlseaCheckpriceError(_context1.t0 === null || _context1.t0 === void 0 ? void 0 : _context1.t0.message);
              setIsLoadingCheckprice(false);
            case 26:
            case "end":
              return _context1.stop();
          }
        }, _callee1, null, [[0, 22]]);
      }));
      return function handleAlseaCheckPrice() {
        return _ref10.apply(this, arguments);
      };
    }();
    handleAlseaCheckPrice();
  }, [isCustomerMode, JSON.stringify(cart === null || cart === void 0 ? void 0 : cart.products)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cart: cart,
    placing: placing,
    errors: errors,
    loyaltyPlansState: loyaltyPlansState,
    orderOptions: orderState.options,
    paymethodSelected: paymethodSelected,
    businessDetails: businessDetails,
    commentState: commentState,
    placeSpotNumber: placeSpotNumber,
    setPlaceSpotNumber: setPlaceSpotNumber,
    instructionsOptions: instructionsOptions,
    deliveryOptionSelected: deliveryOptionSelected,
    handlePaymethodChange: handlePaymethodChange,
    handlerClickPlaceOrder: handlerClickPlaceOrder,
    handleChangeComment: handleChangeComment,
    handleChangeSpot: handleChangeSpot,
    onChangeSpot: onChangeSpot,
    handleChangeDeliveryOption: handleChangeDeliveryOption,
    handleConfirmCredomaticPage: handleConfirmCredomaticPage,
    checkoutFieldsState: checkoutFieldsState,
    alseaCheckPriceError: alseaCheckPriceError,
    isLoadingCheckprice: isLoadingCheckprice
  })));
};
Checkout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Custom method to receive props from checkout page
   */
  handleCustomClick: _propTypes.default.func,
  /**
   * onPlaceOrderClick, function to get click event and return business object after default behavior
   */
  onPlaceOrderClick: _propTypes.default.func,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'address_notes', 'paymethods', 'logo', 'location', 'configs']
};