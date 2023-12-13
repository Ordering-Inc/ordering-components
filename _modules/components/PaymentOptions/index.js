"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _EventContext = require("../../contexts/EventContext");
var _SessionContext = require("../../contexts/SessionContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var paymethodsExisting = ['stripe', 'stripe_direct', 'stripe_connect', 'paypal', 'square'];
var paymethodsNotAllowed = ['paypal_express', 'authorize'];
var paymethodsCallcenterMode = ['cash', 'card_delivery', 'ivrpay', '100_coupon'];

/**
 * Component to manage payment options behavior without UI component
 */
var PaymentOptions = exports.PaymentOptions = function PaymentOptions(props) {
  var _orderState$carts;
  var isLoading = props.isLoading,
    paymethods = props.paymethods,
    businessId = props.businessId,
    isCustomerMode = props.isCustomerMode,
    onPaymentChange = props.onPaymentChange,
    paymethodsCustom = props.paymethodsCustom,
    UIComponent = props.UIComponent,
    isKiosk = props.isKiosk;
  var fetchPaymethods = isKiosk;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changePaymethod = _useOrder2[1].changePaymethod;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    device_code = _useSession2[0].device_code;
  var orderTotal = ((_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 || (_orderState$carts = _orderState$carts["businessId:".concat(businessId)]) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts.total) || 0;
  var _useState = (0, _react.useState)({
      paymethods: [],
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    paymethodsList = _useState2[0],
    setPaymethodsList = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    paymethodSelected = _useState4[0],
    setPaymethodsSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    paymethodData = _useState6[0],
    setPaymethodData = _useState6[1];
  var _useState7 = (0, _react.useState)({
      paymethod: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpenMethod = _useState8[0],
    setIsOpenMethod = _useState8[1];
  var parsePaymethods = function parsePaymethods(paymethods) {
    var _paymethods = paymethods && paymethods.filter(function (credentials) {
      var _credentials$paymetho, _credentials$paymetho2, _credentials$paymetho3;
      return isCustomerMode ? !paymethodsNotAllowed.includes(credentials === null || credentials === void 0 || (_credentials$paymetho = credentials.paymethod) === null || _credentials$paymetho === void 0 ? void 0 : _credentials$paymetho.gateway) && paymethodsCallcenterMode.includes(credentials === null || credentials === void 0 || (_credentials$paymetho2 = credentials.paymethod) === null || _credentials$paymetho2 === void 0 ? void 0 : _credentials$paymetho2.gateway) : !paymethodsNotAllowed.includes(credentials === null || credentials === void 0 || (_credentials$paymetho3 = credentials.paymethod) === null || _credentials$paymetho3 === void 0 ? void 0 : _credentials$paymetho3.gateway);
    }).map(function (credentials) {
      return _objectSpread(_objectSpread({}, credentials === null || credentials === void 0 ? void 0 : credentials.paymethod), {}, {
        sandbox: credentials === null || credentials === void 0 ? void 0 : credentials.sandbox,
        credentials: credentials === null || credentials === void 0 ? void 0 : credentials.data
      });
    });
    return _paymethods;
  };

  /**
   * Method to get payment options from API
   */
  var getPaymentOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var headers, _yield$ordering$busin, _yield$ordering$busin2, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: true
            }));
            headers = {
              'X-Physical-Device-Code-X': "".concat(device_code)
            };
            _context.prev = 2;
            _context.next = 5;
            return ordering.businesses(businessId).get(device_code ? {
              headers: headers
            } : {});
          case 5:
            _yield$ordering$busin = _context.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              paymethodsList.paymethods = parsePaymethods(result.paymethods);
            }
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: error ? result : null,
              paymethods: error ? [] : parsePaymethods(result.paymethods)
            }));
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 13]]);
    }));
    return function getPaymentOptions() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to set payment option selected by user
   * @param {Object} val object with information of payment method selected
   */
  var handlePaymethodClick = function handlePaymethodClick(paymethod, isPopupMethod) {
    var paymentsDirect = ['paypal', 'square'];
    events.emit('add_payment_option', paymethod);
    if (isPopupMethod) {
      if (paymentsDirect.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway)) {
        setPaymethodsSelected(paymethod);
      } else {
        setPaymethodsSelected(null);
      }
      setIsOpenMethod(_objectSpread(_objectSpread({}, isOpenMethod), {}, {
        paymethod: paymethod
      }));
      handlePaymethodDataChange({});
      return;
    }
    if (paymethodsCustom) {
      paymethodsCustom(paymethod);
    }
    setPaymethodsSelected(paymethod);
    setIsOpenMethod({
      paymethod: paymethod
    });
    handlePaymethodDataChange({});
  };
  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    setPaymethodData(data);
    if (Object.keys(data).length) {
      var _paymethod$credential;
      var paymethod = props.paySelected || isOpenMethod.paymethod;
      setPaymethodsSelected(paymethod);
      onPaymentChange && onPaymentChange({
        paymethodId: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id,
        id: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id,
        gateway: paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway,
        paymethod: paymethod,
        credentials: (_paymethod$credential = paymethod === null || paymethod === void 0 ? void 0 : paymethod.credentials) !== null && _paymethod$credential !== void 0 ? _paymethod$credential : null,
        data: data
      });
      return;
    }
    if (paymethodSelected) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        id: paymethodSelected.id,
        name: paymethodSelected.name,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data: data
      });
    } else {
      onPaymentChange && onPaymentChange(null);
    }
  };
  (0, _react.useEffect)(function () {
    if (paymethodSelected) {
      changePaymethod(businessId, paymethodSelected.id, JSON.stringify(paymethodData));
    }
  }, [paymethodSelected, paymethodData]);
  (0, _react.useEffect)(function () {
    if (paymethodSelected && (['card_delivery', 'cash', 'stripe_redirect'].includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) || !paymethodsExisting.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway))) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        id: paymethodSelected.id,
        name: paymethodSelected.name,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data: paymethodData
      });
    } else if (paymethodSelected === null && onPaymentChange) {
      onPaymentChange(null);
    }
  }, [paymethodSelected]);
  (0, _react.useEffect)(function () {
    if (fetchPaymethods) {
      getPaymentOptions();
      return;
    }
    if (paymethods) {
      setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
        loading: isLoading,
        paymethods: parsePaymethods(paymethods)
      }));
    } else {
      if (businessId) {
        if (businessId === -1) {
          setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
            loading: false,
            paymethods: [{
              gateway: 'stripe',
              name: 'Stripe',
              id: 1
            }]
          }));
        } else {
          getPaymentOptions();
        }
      }
    }
  }, [isLoading, businessId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderTotal: orderTotal,
    isOpenMethod: isOpenMethod,
    paymethodsList: paymethodsList,
    paymethodSelected: paymethodSelected,
    paymethodData: paymethodData,
    setPaymethodData: setPaymethodData,
    handlePaymethodClick: handlePaymethodClick,
    handlePaymethodDataChange: handlePaymethodDataChange
  })));
};
PaymentOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Options, this must be containt an array of payment options
   */
  paymethods: _propTypes.default.array,
  /**
   * businessId, this must be contains business id to fetch business from API
   */
  businessId: _propTypes.default.number,
  /**
   * Get option selected
   */
  onPaymentChange: _propTypes.default.func,
  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Payment Options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};