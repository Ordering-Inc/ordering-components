"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionSquare = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LanguageContext = require("../../contexts/LanguageContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PaymentOptionSquare = exports.PaymentOptionSquare = function PaymentOptionSquare(props) {
  var UIComponent = props.UIComponent,
    cartTotal = props.cartTotal,
    onPlaceOrderClick = props.onPlaceOrderClick,
    body = props.body,
    data = props.data,
    setCreateOrder = props.setCreateOrder;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    _useOrder2$ = _useOrder2[1],
    confirmCart = _useOrder2$.confirmCart,
    placeCart = _useOrder2$.placeCart;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSquareReady = _useState2[0],
    setIsSquareReady = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    methodSelected = _useState4[0],
    setMethodSelected = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoadingMethod = _useState8[0],
    setIsLoadingMethod = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isLoadingPlace = _useState0[0],
    setIsLoadingPlace = _useState0[1];
  var _useState1 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    payments = _useState12[0],
    setPayments = _useState12[1];
  var _useState13 = (0, _react.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    paymentRequest = _useState14[0],
    setPaymentRequest = _useState14[1];
  var _useState15 = (0, _react.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    digitalWalletPaymethod = _useState16[0],
    setDigitalWalletPaymethod = _useState16[1];
  var paymentMethods = [{
    name: t('CARD_PAYMENTS', 'Card payments'),
    value: 'card_payments'
  }, {
    name: t('ACH_BANK_TRANSFER', 'ACH Back transfer'),
    value: 'ach_bank_transfer'
  },
  // { name: t('DIGITAL_WALLETS', 'Digital Wallets'), value: 'digital_wallets' },
  {
    name: t('GIFT_CARDS', 'Gift Cards'),
    value: 'gift_cards'
  }];
  var params = {
    paymethod_id: body.paymethod_id,
    amount: body.amount,
    delivery_zone_id: body.delivery_zone_id
  };
  (0, _react.useEffect)(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
    script.async = true;
    script.onload = function () {
      setIsLoading(false);
      setIsSquareReady(true);
      initPaymentObject();
    };
    script.onerror = function () {
      setIsLoading(false);
      throw new Error('Square could not be loaded.');
    };
    document.body.appendChild(script);
    return function () {
      script.onload = null;
      var cardButton = document.getElementById('card-button');
      cardButton && cardButton.removeEventListener('click');
      var achButton = document.getElementById('ach-button');
      achButton && achButton.removeEventListener('click');
      var giftCardButton = document.getElementById('gift-card-button');
      giftCardButton && giftCardButton.removeEventListener('click');
    };
  }, []);
  var initPaymentObject = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var payments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            payments = window.Square.payments(data === null || data === void 0 ? void 0 : data.application_id, data === null || data === void 0 ? void 0 : data.location_id);
            setPayments(payments);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function initPaymentObject() {
      return _ref.apply(this, arguments);
    };
  }();
  var initCardPayments = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var card, eventHandler, cardButton;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setIsLoadingMethod(true);
            _context3.next = 3;
            return payments.card();
          case 3:
            card = _context3.sent;
            _context3.next = 6;
            return card.attach('#card-container');
          case 6:
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                var result, response;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();
                      setIsLoadingPlace(true);
                      setCreateOrder && setCreateOrder(true);
                      _context2.prev = 3;
                      _context2.next = 6;
                      return card.tokenize();
                    case 6:
                      result = _context2.sent;
                      if (!(result.status === 'OK')) {
                        _context2.next = 16;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context2.next = 11;
                      return placeCart(body.cartUuid, params);
                    case 11:
                      response = _context2.sent;
                      if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                        _context2.next = 15;
                        break;
                      }
                      onPlaceOrderClick(null, null, response === null || response === void 0 ? void 0 : response.result);
                      return _context2.abrupt("return");
                    case 15:
                      if (response !== null && response !== void 0 && response.result) {
                        setAlertState({
                          open: true,
                          content: response === null || response === void 0 ? void 0 : response.result
                        });
                      }
                    case 16:
                      if (result.status === 'INVALID') {
                        setAlertState({
                          open: true,
                          content: result.errors.map(function () {
                            return "ValidationError: ".concat(result.errors[0].field, ": ").concat(result.errors[0].message);
                          })
                        });
                      }
                      _context2.next = 22;
                      break;
                    case 19:
                      _context2.prev = 19;
                      _context2.t0 = _context2["catch"](3);
                      setAlertState({
                        open: true,
                        content: _context2.t0.message
                      });
                    case 22:
                      setCreateOrder && setCreateOrder(false);
                      setIsLoadingPlace(false);
                    case 24:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, null, [[3, 19]]);
              }));
              return function eventHandler(_x) {
                return _ref3.apply(this, arguments);
              };
            }();
            cardButton = document.getElementById('card-button');
            cardButton.addEventListener('click', eventHandler);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function initCardPayments() {
      return _ref2.apply(this, arguments);
    };
  }();
  var initACHBankTransfer = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ach, eventHandler, achButton;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setIsLoadingMethod(true);
            _context5.next = 3;
            return payments.ach();
          case 3:
            ach = _context5.sent;
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
                var result, response, resultConfirm;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      e.preventDefault();
                      _context4.prev = 1;
                      _context4.next = 4;
                      return ach.tokenize({
                        accountHolderName: user === null || user === void 0 ? void 0 : user.name
                      });
                    case 4:
                      result = _context4.sent;
                      if (!(result.status === 'OK')) {
                        _context4.next = 22;
                        break;
                      }
                      setIsLoadingPlace(true);
                      setCreateOrder && setCreateOrder(true);
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context4.next = 11;
                      return placeCart(body.cartUuid, params);
                    case 11:
                      response = _context4.sent;
                      if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                        _context4.next = 21;
                        break;
                      }
                      _context4.next = 15;
                      return confirmCart(body.cartUuid);
                    case 15:
                      resultConfirm = _context4.sent;
                      if (!(!(resultConfirm !== null && resultConfirm !== void 0 && resultConfirm.error) && resultConfirm !== null && resultConfirm !== void 0 && resultConfirm.result)) {
                        _context4.next = 19;
                        break;
                      }
                      onPlaceOrderClick(null, null, resultConfirm === null || resultConfirm === void 0 ? void 0 : resultConfirm.result);
                      return _context4.abrupt("return");
                    case 19:
                      setAlertState({
                        open: true,
                        content: resultConfirm
                      });
                      return _context4.abrupt("return");
                    case 21:
                      if (response !== null && response !== void 0 && response.result) {
                        setAlertState({
                          open: true,
                          content: response === null || response === void 0 ? void 0 : response.result
                        });
                      }
                    case 22:
                      _context4.next = 27;
                      break;
                    case 24:
                      _context4.prev = 24;
                      _context4.t0 = _context4["catch"](1);
                      setAlertState({
                        open: true,
                        content: _context4.t0.message
                      });
                    case 27:
                      setIsLoadingPlace(false);
                      setCreateOrder && setCreateOrder(false);
                    case 29:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, null, [[1, 24]]);
              }));
              return function eventHandler(_x2) {
                return _ref5.apply(this, arguments);
              };
            }();
            achButton = document.getElementById('ach-button');
            achButton.addEventListener('click', eventHandler);
          case 8:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function initACHBankTransfer() {
      return _ref4.apply(this, arguments);
    };
  }();
  var initGiftCard = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var giftCard, eventHandler, giftCardButton;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            setIsLoadingMethod(true);
            _context7.next = 3;
            return payments.giftCard();
          case 3:
            giftCard = _context7.sent;
            _context7.next = 6;
            return giftCard.attach('#gift-card-container');
          case 6:
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                var result, response;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      e.preventDefault();
                      setIsLoadingPlace(true);
                      setCreateOrder && setCreateOrder(true);
                      _context6.prev = 3;
                      _context6.next = 6;
                      return giftCard.tokenize();
                    case 6:
                      result = _context6.sent;
                      if (!(result.status === 'OK')) {
                        _context6.next = 16;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context6.next = 11;
                      return placeCart(body.cartUuid, params);
                    case 11:
                      response = _context6.sent;
                      if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                        _context6.next = 15;
                        break;
                      }
                      onPlaceOrderClick(null, null, response === null || response === void 0 ? void 0 : response.result);
                      return _context6.abrupt("return");
                    case 15:
                      if (response !== null && response !== void 0 && response.result) {
                        setAlertState({
                          open: true,
                          content: response === null || response === void 0 ? void 0 : response.result
                        });
                      }
                    case 16:
                      _context6.next = 21;
                      break;
                    case 18:
                      _context6.prev = 18;
                      _context6.t0 = _context6["catch"](3);
                      setAlertState({
                        open: true,
                        content: _context6.t0.message
                      });
                    case 21:
                      setIsLoadingPlace(false);
                      setCreateOrder && setCreateOrder(false);
                    case 23:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, null, [[3, 18]]);
              }));
              return function eventHandler(_x3) {
                return _ref7.apply(this, arguments);
              };
            }();
            giftCardButton = document.getElementById('gift-card-button');
            giftCardButton.addEventListener('click', eventHandler);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function initGiftCard() {
      return _ref6.apply(this, arguments);
    };
  }();
  var initDigitalWallets = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var paymentRequest;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            // setIsLoadingMethod(true)
            paymentRequest = payments.paymentRequest({
              countryCode: 'US',
              currencyCode: 'USD',
              total: {
                amount: cartTotal.toString(),
                label: t('TOTAL', 'Total')
              }
            });
            console.log(paymentRequest);
            setPaymentRequest(paymentRequest);
          case 3:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function initDigitalWallets() {
      return _ref8.apply(this, arguments);
    };
  }();
  var applePay = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
      var applePay, eventHandler, applePayButtonTarget;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            _context0.next = 2;
            return payments.applePay(paymentRequest);
          case 2:
            applePay = _context0.sent;
            console.log(applePay);
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e) {
                var result, _yield$placeCart, error, resultApi;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      e.preventDefault();
                      _context9.prev = 1;
                      _context9.next = 4;
                      return applePay.tokenize();
                    case 4:
                      result = _context9.sent;
                      if (!(result.status === 'OK')) {
                        _context9.next = 14;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context9.next = 9;
                      return placeCart(body.cartUuid, params);
                    case 9:
                      _yield$placeCart = _context9.sent;
                      error = _yield$placeCart.error;
                      resultApi = _yield$placeCart.result;
                      console.log(resultApi);
                      if (!error) {
                        onPlaceOrderClick(null, null, resultApi);
                      }
                    case 14:
                      _context9.next = 19;
                      break;
                    case 16:
                      _context9.prev = 16;
                      _context9.t0 = _context9["catch"](1);
                      setAlertState({
                        open: true,
                        content: _context9.t0.message
                      });
                    case 19:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[1, 16]]);
              }));
              return function eventHandler(_x4) {
                return _ref0.apply(this, arguments);
              };
            }();
            applePayButtonTarget = document.getElementById('apple-pay-button');
            applePayButtonTarget.addEventListener('click', eventHandler);
          case 8:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    }));
    return function applePay() {
      return _ref9.apply(this, arguments);
    };
  }();
  var googlePay = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var googlePay, eventHandler, googlePayButtonTarget;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return payments.googlePay(paymentRequest);
          case 2:
            googlePay = _context10.sent;
            console.log(googlePay);
            _context10.next = 6;
            return googlePay.attach('#google-pay-button');
          case 6:
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(e) {
                var result, _yield$placeCart2, error, resultApi;
                return _regeneratorRuntime().wrap(function _callee1$(_context1) {
                  while (1) switch (_context1.prev = _context1.next) {
                    case 0:
                      e.preventDefault();
                      _context1.prev = 1;
                      _context1.next = 4;
                      return googlePay.tokenize();
                    case 4:
                      result = _context1.sent;
                      if (!(result.status === 'OK')) {
                        _context1.next = 14;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context1.next = 9;
                      return placeCart(body.cartUuid, params);
                    case 9:
                      _yield$placeCart2 = _context1.sent;
                      error = _yield$placeCart2.error;
                      resultApi = _yield$placeCart2.result;
                      console.log(resultApi);
                      if (!error) {
                        onPlaceOrderClick(null, null, resultApi);
                      }
                    case 14:
                      _context1.next = 19;
                      break;
                    case 16:
                      _context1.prev = 16;
                      _context1.t0 = _context1["catch"](1);
                      setAlertState({
                        open: true,
                        content: _context1.t0.message
                      });
                    case 19:
                    case "end":
                      return _context1.stop();
                  }
                }, _callee1, null, [[1, 16]]);
              }));
              return function eventHandler(_x5) {
                return _ref10.apply(this, arguments);
              };
            }();
            googlePayButtonTarget = document.getElementById('google-pay-button');
            googlePayButtonTarget.addEventListener('click', eventHandler);
          case 10:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return function googlePay() {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleChangeMethodSelected = function handleChangeMethodSelected(method) {
    setDigitalWalletPaymethod(null);
    setMethodSelected(method);
    method === 'card_payments' ? initCardPayments() : method === 'ach_bank_transfer' ? initACHBankTransfer() : method === 'digital_wallets' ? initDigitalWallets() : initGiftCard();
  };
  (0, _react.useEffect)(function () {
    if (methodSelected !== 'digital_wallets') return;
    if (digitalWalletPaymethod === 'apple_pay') applePay();
    if (digitalWalletPaymethod === 'google_pay') googlePay();
  }, [digitalWalletPaymethod]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isSquareReady: isSquareReady,
    isLoading: isLoading,
    isLoadingMethod: isLoadingMethod,
    paymentMethods: paymentMethods,
    methodSelected: methodSelected,
    alertState: alertState,
    digitalWalletPaymethod: digitalWalletPaymethod,
    initCardPayments: initCardPayments,
    setDigitalWalletPaymethod: setDigitalWalletPaymethod,
    handleChangeMethodSelected: handleChangeMethodSelected,
    setAlertState: setAlertState,
    applePay: applePay,
    isLoadingPlace: isLoadingPlace
  })));
};
PaymentOptionSquare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
PaymentOptionSquare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};