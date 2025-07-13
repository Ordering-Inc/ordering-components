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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t8 in e) "default" !== _t8 && {}.hasOwnProperty.call(e, _t8) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t8)) && (i.get || i.set) ? o(f, _t8, i) : f[_t8] = e[_t8]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(confirmPayment) {
      var _paymethodSelected$pa, _cartGroup$result3, _result$paymethod_dat;
      var paymethodData, _paymethodSelected$pa2, payload, _paymethodSelected$pa3, _yield$placeMultiCart, error, result, _result$payment_event, _paymentEvent$data, paymentEvent, _paymentEvent$data2, _yield$confirmPayment, confirmApplePayError;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!placing) {
              _context.n = 1;
              break;
            }
            showToast(_ToastContext.ToastType.Info, t('CART_IN_PROGRESS', 'Cart in progress'));
            return _context.a(2);
          case 1:
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
            _context.n = 2;
            return placeMultiCarts(payload, cartUuid);
          case 2:
            _yield$placeMultiCart = _context.v;
            error = _yield$placeMultiCart.error;
            result = _yield$placeMultiCart.result;
            if (!error) {
              _context.n = 3;
              break;
            }
            setPlacing(false);
            return _context.a(2);
          case 3:
            if (!((result === null || result === void 0 || (_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.status) === 2 && actionsBeforePlace)) {
              _context.n = 4;
              break;
            }
            _context.n = 4;
            return actionsBeforePlace(paymethodSelected, result);
          case 4:
            if (!(confirmPayment && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'global_apple_pay')) {
              _context.n = 7;
              break;
            }
            paymentEvent = result === null || result === void 0 || (_result$payment_event = result.payment_events) === null || _result$payment_event === void 0 ? void 0 : _result$payment_event.find(function (event) {
              var _event$data;
              return event === null || event === void 0 || (_event$data = event.data) === null || _event$data === void 0 || (_event$data = _event$data.extra) === null || _event$data === void 0 ? void 0 : _event$data.client_secret;
            });
            if (!(paymentEvent !== null && paymentEvent !== void 0 && (_paymentEvent$data = paymentEvent.data) !== null && _paymentEvent$data !== void 0 && (_paymentEvent$data = _paymentEvent$data.extra) !== null && _paymentEvent$data !== void 0 && _paymentEvent$data.client_secret)) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return confirmPayment(paymentEvent === null || paymentEvent === void 0 || (_paymentEvent$data2 = paymentEvent.data) === null || _paymentEvent$data2 === void 0 || (_paymentEvent$data2 = _paymentEvent$data2.extra) === null || _paymentEvent$data2 === void 0 ? void 0 : _paymentEvent$data2.client_secret);
          case 5:
            _yield$confirmPayment = _context.v;
            confirmApplePayError = _yield$confirmPayment.error;
            if (confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.message || confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.localizedMessage) {
              showToast(_ToastContext.ToastType.Error, (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.message) || (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.localizedMessage));
            }
          case 6:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 7:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 8:
            return _context.a(2);
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(isChecked, wallet) {
      var _cartGroup$result4, _cartGroup$result5;
      var url, response, _yield$response$json, error, result, _err$message, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: true,
              error: null
            }));
            url = isChecked ? "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 || (_cartGroup$result4 = cartGroup.result) === null || _cartGroup$result4 === void 0 ? void 0 : _cartGroup$result4.uuid, "/wallets") : "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 || (_cartGroup$result5 = cartGroup.result) === null || _cartGroup$result5 === void 0 ? void 0 : _cartGroup$result5.uuid, "/wallets/").concat(wallet.id);
            _context2.p = 1;
            _context2.n = 2;
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
          case 2:
            response = _context2.v;
            _context2.n = 3;
            return response.json();
          case 3:
            _yield$response$json = _context2.v;
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
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: (_err$message = _t === null || _t === void 0 ? void 0 : _t.message) !== null && _err$message !== void 0 ? _err$message : _t
            }));
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var response, _yield$response$json2, result, error, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return fetch("".concat(ordering.root, "/delivery_options").concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context3.v;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context3.n = 3;
              break;
            }
            setInstructionsOptions({
              loading: false,
              result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
            });
            return _context3.a(2);
          case 3:
            setInstructionsOptions({
              loading: false,
              error: true,
              result: result
            });
            showToast(_ToastContext.ToastType.Error, result);
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t2 = _context3.v;
            setInstructionsOptions({
              loading: false,
              error: true,
              result: _t2.message
            });
            showToast(_ToastContext.ToastType.Error, _t2.message);
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 4]]);
    }));
    return function getDeliveryOptions() {
      return _ref3.apply(this, arguments);
    };
  }();
  var multiHandleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(value, cartUuidArr) {
      var allPromise, _t3, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            allPromise = cartUuidArr.map(function (cartId) {
              return new Promise(/*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resolve, reject) {
                  var body, response, _yield$response$json3, result, error;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.n) {
                      case 0:
                        body = {
                          delivery_option_id: value
                        };
                        if (userId) body.user_id = userId;
                        _context4.n = 1;
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
                      case 1:
                        response = _context4.v;
                        _context4.n = 2;
                        return response.json();
                      case 2:
                        _yield$response$json3 = _context4.v;
                        result = _yield$response$json3.result;
                        error = _yield$response$json3.error;
                        if (!error && (result === null || result === void 0 ? void 0 : result.delivery_option_id) === value) {
                          resolve(result);
                        } else {
                          reject(false);
                        }
                      case 3:
                        return _context4.a(2);
                    }
                  }, _callee4);
                }));
                return function (_x6, _x7) {
                  return _ref5.apply(this, arguments);
                };
              }());
            });
            _context5.n = 1;
            return Promise.all(allPromise);
          case 1:
            _t3 = _context5.v;
            if (!_t3) {
              _context5.n = 2;
              break;
            }
            setDeliveryOptionSelected(value);
          case 2:
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            showToast(_ToastContext.ToastType.Error, _t4.message);
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    return function multiHandleChangeDeliveryOption(_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(value) {
      var cartUuidArr;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            cartUuidArr = openCarts.map(function (cart) {
              return cart === null || cart === void 0 ? void 0 : cart.uuid;
            });
            multiHandleChangeDeliveryOption(value, cartUuidArr);
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function handleChangeDeliveryOption(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getMultiCart = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var response, _yield$response$json4, result, error, _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            if (cartUuid) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: true
            }));
            _context7.n = 2;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid).concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 2:
            response = _context7.v;
            _context7.n = 3;
            return response.json();
          case 3:
            _yield$response$json4 = _context7.v;
            result = _yield$response$json4.result;
            error = _yield$response$json4.error;
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              result: result,
              error: error
            }));
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t5 = _context7.v;
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              error: _t5.message
            }));
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 4]]);
    }));
    return function getMultiCart() {
      return _ref7.apply(this, arguments);
    };
  }();
  var getLoyaltyPlans = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _result$find$accumula, _result$find, req, _yield$req$json, error, result, _t6;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            _context8.n = 1;
            return fetch("".concat(ordering.root, "/loyalty_plans"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 1:
            req = _context8.v;
            _context8.n = 2;
            return req.json();
          case 2:
            _yield$req$json = _context8.v;
            error = _yield$req$json.error;
            result = _yield$req$json.result;
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: error ? [] : result,
              rewardRate: (_result$find$accumula = result === null || result === void 0 || (_result$find = result.find(function (loyal) {
                return loyal.type === 'credit_point';
              })) === null || _result$find === void 0 ? void 0 : _result$find.accumulation_rate) !== null && _result$find$accumula !== void 0 ? _result$find$accumula : 0
            }));
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t6 = _context8.v;
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: []
            }));
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 3]]);
    }));
    return function getLoyaltyPlans() {
      return _ref8.apply(this, arguments);
    };
  }();
  var getValidationFieldOrderTypes = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var requestOptions, response, content, _t7;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
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
            _context9.n = 1;
            return fetch("".concat(ordering.root, "/validation_field_order_types"), requestOptions);
          case 1:
            response = _context9.v;
            _context9.n = 2;
            return response.json();
          case 2:
            content = _context9.v;
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
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t7 = _context9.v;
            setCheckoutFieldsState(_objectSpread(_objectSpread({}, checkoutFieldsState), {}, {
              loading: false,
              error: [_t7.message]
            }));
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 3]]);
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