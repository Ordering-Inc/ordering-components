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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t6 in e) "default" !== _t6 && {}.hasOwnProperty.call(e, _t6) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t6)) && (i.get || i.set) ? o(f, _t6, i) : f[_t6] = e[_t6]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var payments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            payments = window.Square.payments(data === null || data === void 0 ? void 0 : data.application_id, data === null || data === void 0 ? void 0 : data.location_id);
            setPayments(payments);
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function initPaymentObject() {
      return _ref.apply(this, arguments);
    };
  }();
  var initCardPayments = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var card, eventHandler, cardButton;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            setIsLoadingMethod(true);
            _context3.n = 1;
            return payments.card();
          case 1:
            card = _context3.v;
            _context3.n = 2;
            return card.attach('#card-container');
          case 2:
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
                var result, response, _t;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.p = _context2.n) {
                    case 0:
                      e.preventDefault();
                      setIsLoadingPlace(true);
                      setCreateOrder && setCreateOrder(true);
                      _context2.p = 1;
                      _context2.n = 2;
                      return card.tokenize();
                    case 2:
                      result = _context2.v;
                      if (!(result.status === 'OK')) {
                        _context2.n = 5;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context2.n = 3;
                      return placeCart(body.cartUuid, params);
                    case 3:
                      response = _context2.v;
                      if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                        _context2.n = 4;
                        break;
                      }
                      onPlaceOrderClick(null, null, response === null || response === void 0 ? void 0 : response.result);
                      return _context2.a(2);
                    case 4:
                      if (response !== null && response !== void 0 && response.result) {
                        setAlertState({
                          open: true,
                          content: response === null || response === void 0 ? void 0 : response.result
                        });
                      }
                    case 5:
                      if (result.status === 'INVALID') {
                        setAlertState({
                          open: true,
                          content: result.errors.map(function () {
                            return "ValidationError: ".concat(result.errors[0].field, ": ").concat(result.errors[0].message);
                          })
                        });
                      }
                      _context2.n = 7;
                      break;
                    case 6:
                      _context2.p = 6;
                      _t = _context2.v;
                      setAlertState({
                        open: true,
                        content: _t.message
                      });
                    case 7:
                      setCreateOrder && setCreateOrder(false);
                      setIsLoadingPlace(false);
                    case 8:
                      return _context2.a(2);
                  }
                }, _callee2, null, [[1, 6]]);
              }));
              return function eventHandler(_x) {
                return _ref3.apply(this, arguments);
              };
            }();
            cardButton = document.getElementById('card-button');
            cardButton.addEventListener('click', eventHandler);
          case 3:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function initCardPayments() {
      return _ref2.apply(this, arguments);
    };
  }();
  var initACHBankTransfer = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var ach, eventHandler, achButton;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            setIsLoadingMethod(true);
            _context5.n = 1;
            return payments.ach();
          case 1:
            ach = _context5.v;
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
                var result, response, resultConfirm, _t2;
                return _regenerator().w(function (_context4) {
                  while (1) switch (_context4.p = _context4.n) {
                    case 0:
                      e.preventDefault();
                      _context4.p = 1;
                      _context4.n = 2;
                      return ach.tokenize({
                        accountHolderName: user === null || user === void 0 ? void 0 : user.name
                      });
                    case 2:
                      result = _context4.v;
                      if (!(result.status === 'OK')) {
                        _context4.n = 7;
                        break;
                      }
                      setIsLoadingPlace(true);
                      setCreateOrder && setCreateOrder(true);
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context4.n = 3;
                      return placeCart(body.cartUuid, params);
                    case 3:
                      response = _context4.v;
                      if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                        _context4.n = 6;
                        break;
                      }
                      _context4.n = 4;
                      return confirmCart(body.cartUuid);
                    case 4:
                      resultConfirm = _context4.v;
                      if (!(!(resultConfirm !== null && resultConfirm !== void 0 && resultConfirm.error) && resultConfirm !== null && resultConfirm !== void 0 && resultConfirm.result)) {
                        _context4.n = 5;
                        break;
                      }
                      onPlaceOrderClick(null, null, resultConfirm === null || resultConfirm === void 0 ? void 0 : resultConfirm.result);
                      return _context4.a(2);
                    case 5:
                      setAlertState({
                        open: true,
                        content: resultConfirm
                      });
                      return _context4.a(2);
                    case 6:
                      if (response !== null && response !== void 0 && response.result) {
                        setAlertState({
                          open: true,
                          content: response === null || response === void 0 ? void 0 : response.result
                        });
                      }
                    case 7:
                      _context4.n = 9;
                      break;
                    case 8:
                      _context4.p = 8;
                      _t2 = _context4.v;
                      setAlertState({
                        open: true,
                        content: _t2.message
                      });
                    case 9:
                      setIsLoadingPlace(false);
                      setCreateOrder && setCreateOrder(false);
                    case 10:
                      return _context4.a(2);
                  }
                }, _callee4, null, [[1, 8]]);
              }));
              return function eventHandler(_x2) {
                return _ref5.apply(this, arguments);
              };
            }();
            achButton = document.getElementById('ach-button');
            achButton.addEventListener('click', eventHandler);
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function initACHBankTransfer() {
      return _ref4.apply(this, arguments);
    };
  }();
  var initGiftCard = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var giftCard, eventHandler, giftCardButton;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            setIsLoadingMethod(true);
            _context7.n = 1;
            return payments.giftCard();
          case 1:
            giftCard = _context7.v;
            _context7.n = 2;
            return giftCard.attach('#gift-card-container');
          case 2:
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
                var result, response, _t3;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.p = _context6.n) {
                    case 0:
                      e.preventDefault();
                      setIsLoadingPlace(true);
                      setCreateOrder && setCreateOrder(true);
                      _context6.p = 1;
                      _context6.n = 2;
                      return giftCard.tokenize();
                    case 2:
                      result = _context6.v;
                      if (!(result.status === 'OK')) {
                        _context6.n = 5;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context6.n = 3;
                      return placeCart(body.cartUuid, params);
                    case 3:
                      response = _context6.v;
                      if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                        _context6.n = 4;
                        break;
                      }
                      onPlaceOrderClick(null, null, response === null || response === void 0 ? void 0 : response.result);
                      return _context6.a(2);
                    case 4:
                      if (response !== null && response !== void 0 && response.result) {
                        setAlertState({
                          open: true,
                          content: response === null || response === void 0 ? void 0 : response.result
                        });
                      }
                    case 5:
                      _context6.n = 7;
                      break;
                    case 6:
                      _context6.p = 6;
                      _t3 = _context6.v;
                      setAlertState({
                        open: true,
                        content: _t3.message
                      });
                    case 7:
                      setIsLoadingPlace(false);
                      setCreateOrder && setCreateOrder(false);
                    case 8:
                      return _context6.a(2);
                  }
                }, _callee6, null, [[1, 6]]);
              }));
              return function eventHandler(_x3) {
                return _ref7.apply(this, arguments);
              };
            }();
            giftCardButton = document.getElementById('gift-card-button');
            giftCardButton.addEventListener('click', eventHandler);
          case 3:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function initGiftCard() {
      return _ref6.apply(this, arguments);
    };
  }();
  var initDigitalWallets = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var paymentRequest;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
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
          case 1:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function initDigitalWallets() {
      return _ref8.apply(this, arguments);
    };
  }();
  var applePay = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var applePay, eventHandler, applePayButtonTarget;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return payments.applePay(paymentRequest);
          case 1:
            applePay = _context0.v;
            console.log(applePay);
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e) {
                var result, _yield$placeCart, error, resultApi, _t4;
                return _regenerator().w(function (_context9) {
                  while (1) switch (_context9.p = _context9.n) {
                    case 0:
                      e.preventDefault();
                      _context9.p = 1;
                      _context9.n = 2;
                      return applePay.tokenize();
                    case 2:
                      result = _context9.v;
                      if (!(result.status === 'OK')) {
                        _context9.n = 4;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context9.n = 3;
                      return placeCart(body.cartUuid, params);
                    case 3:
                      _yield$placeCart = _context9.v;
                      error = _yield$placeCart.error;
                      resultApi = _yield$placeCart.result;
                      console.log(resultApi);
                      if (!error) {
                        onPlaceOrderClick(null, null, resultApi);
                      }
                    case 4:
                      _context9.n = 6;
                      break;
                    case 5:
                      _context9.p = 5;
                      _t4 = _context9.v;
                      setAlertState({
                        open: true,
                        content: _t4.message
                      });
                    case 6:
                      return _context9.a(2);
                  }
                }, _callee9, null, [[1, 5]]);
              }));
              return function eventHandler(_x4) {
                return _ref0.apply(this, arguments);
              };
            }();
            applePayButtonTarget = document.getElementById('apple-pay-button');
            applePayButtonTarget.addEventListener('click', eventHandler);
          case 2:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function applePay() {
      return _ref9.apply(this, arguments);
    };
  }();
  var googlePay = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var googlePay, eventHandler, googlePayButtonTarget;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            _context10.n = 1;
            return payments.googlePay(paymentRequest);
          case 1:
            googlePay = _context10.v;
            console.log(googlePay);
            _context10.n = 2;
            return googlePay.attach('#google-pay-button');
          case 2:
            setIsLoadingMethod(false);
            eventHandler = /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(e) {
                var result, _yield$placeCart2, error, resultApi, _t5;
                return _regenerator().w(function (_context1) {
                  while (1) switch (_context1.p = _context1.n) {
                    case 0:
                      e.preventDefault();
                      _context1.p = 1;
                      _context1.n = 2;
                      return googlePay.tokenize();
                    case 2:
                      result = _context1.v;
                      if (!(result.status === 'OK')) {
                        _context1.n = 4;
                        break;
                      }
                      params.paymethod_data = {
                        token: result.token
                      };
                      _context1.n = 3;
                      return placeCart(body.cartUuid, params);
                    case 3:
                      _yield$placeCart2 = _context1.v;
                      error = _yield$placeCart2.error;
                      resultApi = _yield$placeCart2.result;
                      console.log(resultApi);
                      if (!error) {
                        onPlaceOrderClick(null, null, resultApi);
                      }
                    case 4:
                      _context1.n = 6;
                      break;
                    case 5:
                      _context1.p = 5;
                      _t5 = _context1.v;
                      setAlertState({
                        open: true,
                        content: _t5.message
                      });
                    case 6:
                      return _context1.a(2);
                  }
                }, _callee1, null, [[1, 5]]);
              }));
              return function eventHandler(_x5) {
                return _ref10.apply(this, arguments);
              };
            }();
            googlePayButtonTarget = document.getElementById('google-pay-button');
            googlePayButtonTarget.addEventListener('click', eventHandler);
          case 3:
            return _context10.a(2);
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