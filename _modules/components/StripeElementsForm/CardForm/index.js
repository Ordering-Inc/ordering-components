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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(tokenId, user, businessId) {
      var isNewCard,
        result,
        response,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isNewCard = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;
            _context.next = 3;
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
          case 3:
            result = _context.sent;
            _context.next = 6;
            return result.json();
          case 6:
            response = _context.sent;
            isNewCard && onNewCard && onNewCard(_objectSpread(_objectSpread({}, response.result), {}, {
              zipcode: zipcode
            }));
            setZipcode(null);
          case 9:
          case "end":
            return _context.stop();
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var _card, card, userName, userAddress, billingData, result, _result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!handleCustomSubmit) {
              _context2.next = 3;
              break;
            }
            _card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardElement);
            return _context2.abrupt("return", handleCustomSubmit(_card));
          case 3:
            setLoading(true);
            event.preventDefault();
            if (!(!zipcode && zipCodeRequired && zipCodeEnabled)) {
              _context2.next = 9;
              break;
            }
            setErrorZipcode(true);
            setLoading(false);
            return _context2.abrupt("return");
          case 9:
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
              _context2.next = 26;
              break;
            }
            if (stripe) {
              _context2.next = 20;
              break;
            }
            setError(t('STRIPE_LOAD_ERROR', 'Failed to load Stripe properly'));
            return _context2.abrupt("return");
          case 20:
            _context2.next = 22;
            return stripe.createPaymentMethod({
              type: 'card',
              card: card,
              billing_details: billingData
            });
          case 22:
            result = _context2.sent;
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
            _context2.next = 33;
            break;
          case 26:
            if (stripe) {
              _context2.next = 29;
              break;
            }
            setError(t('STRIPE_LOAD_ERROR', 'Faile to load Stripe properly'));
            return _context2.abrupt("return");
          case 29:
            _context2.next = 31;
            return stripe.confirmCardSetup(requirements, {
              payment_method: {
                card: card,
                billing_details: billingData
              }
            });
          case 31:
            _result = _context2.sent;
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
          case 33:
          case "end":
            return _context2.stop();
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