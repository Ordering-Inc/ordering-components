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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
var stripeLink = 'stripe_link';
var paymethodsExisting = ['stripe', 'stripe_direct', 'stripe_connect', 'paypal', 'square'];
var paymethodsNotAllowed = ['paypal_express', 'authorize'];
var paymethodsCallcenterMode = ['cash', 'card_delivery', 'ivrpay', '100_coupon', stripeLink];

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
  var isAlsea = ['alsea', 'alsea-staging'].includes(ordering.project);
  var parsePaymethods = function parsePaymethods(paymethods) {
    var _paymethods = paymethods && paymethods.filter(function (credentials) {
      var _credentials$paymetho, _credentials$paymetho2, _credentials$paymetho3;
      return isCustomerMode ? !paymethodsNotAllowed.includes(credentials === null || credentials === void 0 || (_credentials$paymetho = credentials.paymethod) === null || _credentials$paymetho === void 0 ? void 0 : _credentials$paymetho.gateway) && (isAlsea || paymethodsCallcenterMode.includes(credentials === null || credentials === void 0 || (_credentials$paymetho2 = credentials.paymethod) === null || _credentials$paymetho2 === void 0 ? void 0 : _credentials$paymetho2.gateway)) : ![].concat(paymethodsNotAllowed, [stripeLink]).includes(credentials === null || credentials === void 0 || (_credentials$paymetho3 = credentials.paymethod) === null || _credentials$paymetho3 === void 0 ? void 0 : _credentials$paymetho3.gateway);
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var headers, _yield$ordering$busin, _yield$ordering$busin2, error, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: true
            }));
            headers = {
              'X-Physical-Device-Code-X': "".concat(device_code)
            };
            _context.p = 1;
            _context.n = 2;
            return ordering.businesses(businessId).get(device_code ? {
              headers: headers
            } : {});
          case 2:
            _yield$ordering$busin = _context.v;
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
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
              loading: false,
              error: [_t.message]
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
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