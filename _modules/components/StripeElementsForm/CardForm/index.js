"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ValidationsFieldsContext = require("../../../contexts/ValidationsFieldsContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
 * Component to manage card form for stripe elements form behavior without UI component
 */
var CardForm = exports.CardForm = function CardForm(props) {
  var _validationFields$fie, _validationFields$fie2;
  var UIComponent = props.UIComponent,
    requirements = props.requirements,
    toSave = props.toSave,
    handleSource = props.handleSource,
    onNewCard = props.onNewCard,
    handleCustomSubmit = props.handleCustomSubmit,
    isSplitForm = props.isSplitForm,
    businessIds = props.businessIds;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useValidationFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var stripe = (0, _reactStripeJs.useStripe)();
  var elements = (0, _reactStripeJs.useElements)();
  var zipCodeRequired = validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.card) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.zipcode) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.required;
  var zipCodeEnabled = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.card) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.zipcode) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    errorExpiry = _useState4[0],
    setErrorExpiry = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    errorCvc = _useState6[0],
    setErrorCvc = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    zipcode = _useState8[0],
    setZipcode = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    errorZipcode = _useState0[0],
    setErrorZipcode = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  /**
   * POST the token ID to backend.
   * @param {*string} param0 payment method id
   * @param {*object} user object with user info from session provider
   * @param {*string} businessId string to know your business
   */
  var stripeTokenHandler = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(tokenId, user, businessId) {
      var isNewCard,
        result,
        response,
        _args = arguments;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            isNewCard = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;
            _context.n = 1;
            return fetch("".concat(ordering.root, "/payments/stripe/cards"), {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                business_id: businessId,
                gateway: 'stripe',
                token_id: tokenId,
                user_id: user === null || user === void 0 ? void 0 : user.id
              })
            });
          case 1:
            result = _context.v;
            _context.n = 2;
            return result.json();
          case 2:
            response = _context.v;
            isNewCard && onNewCard && onNewCard(_objectSpread(_objectSpread({}, response.result), {}, {
              zipcode: zipcode
            }));
            setZipcode(null);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function stripeTokenHandler(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Handle real-time validation errors from the card Element
   * @param {*event} event
   */
  var handleChange = function handleChange(event) {
    var _event$target;
    if (event.error) {
      (event.elementType === 'cardNumber' || 'card') && setError(event.error.message);
    } else if ((event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.name) === 'zipcode') {
      var _event$target2, _event$target3, _event$target4;
      event.target.value = event === null || event === void 0 || (_event$target2 = event.target) === null || _event$target2 === void 0 || (_event$target2 = _event$target2.value) === null || _event$target2 === void 0 ? void 0 : _event$target2.slice(0, 10);
      elements.update({
        value: {
          postalCode: event === null || event === void 0 || (_event$target3 = event.target) === null || _event$target3 === void 0 ? void 0 : _event$target3.value
        }
      });
      if (!event.target.value && zipCodeRequired && zipCodeEnabled) {
        setErrorZipcode(true);
      } else {
        setErrorZipcode(false);
      }
      setZipcode(event === null || event === void 0 || (_event$target4 = event.target) === null || _event$target4 === void 0 ? void 0 : _event$target4.value);
    } else {
      setError(null);
    }
  };
  var handleChangeExpiry = function handleChangeExpiry(event) {
    if (event.error) {
      setErrorExpiry(event.error.message);
    } else {
      setErrorExpiry(null);
    }
  };
  var handleChangeCvc = function handleChangeCvc(event) {
    if (event.error) {
      setErrorCvc(event.error.message);
    } else {
      setErrorCvc(null);
    }
  };

  /**
   * Handle form submission
   * @param {event} event
   */
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(event) {
      var _card, card, userName, userAddress, billingData, result, _result;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!handleCustomSubmit) {
              _context2.n = 1;
              break;
            }
            _card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardElement);
            return _context2.a(2, handleCustomSubmit(_card));
          case 1:
            setLoading(true);
            event.preventDefault();
            if (!(!zipcode && zipCodeRequired && zipCodeEnabled)) {
              _context2.n = 2;
              break;
            }
            setErrorZipcode(true);
            setLoading(false);
            return _context2.a(2);
          case 2:
            card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardElement);
            userName = user !== null && user !== void 0 && user.lastname ? "".concat(user === null || user === void 0 ? void 0 : user.name, " ").concat(user === null || user === void 0 ? void 0 : user.lastname) : user === null || user === void 0 ? void 0 : user.name;
            userAddress = ((user === null || user === void 0 ? void 0 : user.address) || zipcode) && {
              line1: user === null || user === void 0 ? void 0 : user.address,
              postal_code: zipcode
            };
            billingData = {
              email: user.email
            };
            userName && (billingData.name = userName);
            userAddress && (billingData.address = userAddress);
            if (isSplitForm) {
              card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardNumberElement);
            }
            if (requirements) {
              _context2.n = 5;
              break;
            }
            if (stripe) {
              _context2.n = 3;
              break;
            }
            setError(t('STRIPE_LOAD_ERROR', 'Failed to load Stripe properly'));
            return _context2.a(2);
          case 3:
            _context2.n = 4;
            return stripe.createPaymentMethod({
              type: 'card',
              card: card,
              billing_details: billingData
            });
          case 4:
            result = _context2.v;
            if (result.error) {
              setLoading(false);
              setError(result.error.message);
            } else {
              setLoading(false);
              setError(null);
              setErrorExpiry(null);
              setErrorCvc(null);
              handleSource && handleSource({
                id: result === null || result === void 0 ? void 0 : result.paymentMethod.id,
                type: 'card',
                card: {
                  zipcode: zipcode,
                  brand: result === null || result === void 0 ? void 0 : result.paymentMethod.card.brand,
                  last4: result === null || result === void 0 ? void 0 : result.paymentMethod.card.last4
                }
              });
            }
            _context2.n = 8;
            break;
          case 5:
            if (stripe) {
              _context2.n = 6;
              break;
            }
            setError(t('STRIPE_LOAD_ERROR', 'Faile to load Stripe properly'));
            return _context2.a(2);
          case 6:
            _context2.n = 7;
            return stripe.confirmCardSetup(requirements, {
              payment_method: {
                card: card,
                billing_details: billingData
              }
            });
          case 7:
            _result = _context2.v;
            if (_result.error) {
              setLoading(false);
              setError(_result.error.message);
            } else {
              setLoading(false);
              setError(null);
              setErrorExpiry(null);
              setErrorCvc(null);
              if (businessIds) {
                businessIds.forEach(function (_businessId, index) {
                  var _isNewCard = index === 0;
                  toSave && stripeTokenHandler(_result.setupIntent.payment_method, user, _businessId, _isNewCard);
                });
              } else {
                toSave && stripeTokenHandler(_result.setupIntent.payment_method, user, props.businessId);
              }
            }
          case 8:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function handleSubmit(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleSubmit: handleSubmit,
    error: error,
    errorExpiry: errorExpiry,
    errorCvc: errorCvc,
    loading: loading,
    zipcode: zipcode,
    errorZipcode: errorZipcode,
    handleChangeExpiry: handleChangeExpiry,
    handleChangeCvc: handleChangeCvc,
    handleChange: handleChange
  }));
};
CardForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: _propTypes.default.number,
  /**
   * Save client secret id used in stripe for create a payment method
   */
  clientSecret: _propTypes.default.string,
  /**
   * Autosave cart
   */
  autosave: _propTypes.default.bool,
  /**
   * method used for handle card token created
   */
  handlerToken: _propTypes.default.func,
  /**
   * handleCustomClick, function to get click event and return card selected without default behavior
   */
  handleCustomSubmit: _propTypes.default.func
};
CardForm.defaultProps = {
  autosave: true
};