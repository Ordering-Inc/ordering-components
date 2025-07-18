"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrder = exports.OrderProvider = exports.OrderContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../SessionContext");
var _ApiContext = require("../ApiContext");
var _WebsocketContext = require("../WebsocketContext");
var _LanguageContext = require("../LanguageContext");
var _EventContext = require("../EventContext");
var _ConfigContext = require("../ConfigContext");
var _CustomerContext = require("../CustomerContext");
var _ToastContext = require("../ToastContext");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _excluded = ["carts"],
  _excluded2 = ["carts"],
  _excluded3 = ["carts"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t17 in e) "default" !== _t17 && {}.hasOwnProperty.call(e, _t17) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t17)) && (i.get || i.set) ? o(f, _t17, i) : f[_t17] = e[_t17]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
_dayjs.default.extend(_utc.default);

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
var OrderContext = exports.OrderContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */
var OrderProvider = exports.OrderProvider = function OrderProvider(_ref) {
  var _configState$configs, _configState$configs2, _customerState$user5, _session$user5;
  var Alert = _ref.Alert,
    children = _ref.children,
    strategy = _ref.strategy,
    isAlsea = _ref.isAlsea,
    isDisableToast = _ref.isDisableToast,
    franchiseId = _ref.franchiseId,
    isDisabledDefaultOpts = _ref.isDisabledDefaultOpts,
    businessSlug = _ref.businessSlug,
    userAgent = _ref.userAgent;
  var _useState = (0, _react.useState)({
      show: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirmAlert = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)({
      show: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alert = _useState4[0],
    setAlert = _useState4[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    languageState = _useLanguage2[0],
    t = _useLanguage2[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    session = _useSession2[0],
    logout = _useSession2[1].logout;
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    customerState = _useCustomer2[0],
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var orderTypes = {
    delivery: 1,
    pickup: 2,
    eatin: 3,
    curbside: 4,
    drivethru: 5,
    catering_delivery: 7,
    catering_pickup: 8
  };
  var _useState5 = (0, _react.useState)({
      loading: true,
      options: isDisabledDefaultOpts ? {
        type: null,
        moment: null,
        city_id: null
      } : {
        type: orderTypes[configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.default_order_type) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value],
        moment: null,
        city_id: null
      },
      carts: {},
      confirmAlert: confirmAlert,
      alert: alert
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    state = _useState6[0],
    setState = _useState6[1];

  /**
   * Refresh order options and carts from API
   */
  var refreshOrderOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _state$options, _state$options2, _res$content, _res$content2, countryCodeFromLocalStorage, customerFromLocalStorage, userCustomerId, options, countryCode, res, error, result, _options2$address, carts, _options2, _options2$address2, localOptions, _options3, _localOptions$address, conditions, userId, addressesResponse, address, _yield$ordering$setAc, _yield$ordering$setAc2, _error, _result, _err$message, message, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            if (!state.loading) {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
            }
            _context.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCodeFromLocalStorage = _context.v;
            _context.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            options = {};
            if (userCustomerId) {
              options.query = {
                user_id: userCustomerId
              };
            }
            if (franchiseId) {
              options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                franchise_id: franchiseId
              });
            }
            countryCode = countryCodeFromLocalStorage && countryCodeFromLocalStorage !== (state === null || state === void 0 || (_state$options = state.options) === null || _state$options === void 0 || (_state$options = _state$options.address) === null || _state$options === void 0 ? void 0 : _state$options.country_code) ? countryCodeFromLocalStorage : state === null || state === void 0 || (_state$options2 = state.options) === null || _state$options2 === void 0 || (_state$options2 = _state$options2.address) === null || _state$options2 === void 0 ? void 0 : _state$options2.country_code;
            if (countryCode) {
              options.headers = {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              };
            }
            _context.n = 3;
            return ordering.setAccessToken(session.token).orderOptions().get(options);
          case 3:
            res = _context.v;
            error = res === null || res === void 0 || (_res$content = res.content) === null || _res$content === void 0 ? void 0 : _res$content.error;
            result = res === null || res === void 0 || (_res$content2 = res.content) === null || _res$content2 === void 0 ? void 0 : _res$content2.result;
            if (error) {
              _context.n = 4;
              break;
            }
            carts = result.carts, _options2 = _objectWithoutProperties(result, _excluded);
            state.carts = {};
            carts.forEach(function (cart) {
              state.carts["businessId:".concat(cart.business_id)] = cart;
            });
            state.options = _objectSpread(_objectSpread({}, state.options), _options2);
            if (!(!countryCodeFromLocalStorage && _options2 !== null && _options2 !== void 0 && (_options2$address = _options2.address) !== null && _options2$address !== void 0 && _options2$address.country_code)) {
              _context.n = 4;
              break;
            }
            _context.n = 4;
            return updateOrderOptions({
              country_code: _options2 === null || _options2 === void 0 || (_options2$address2 = _options2.address) === null || _options2$address2 === void 0 ? void 0 : _options2$address2.country_code
            });
          case 4:
            if (error) {
              setAlert({
                show: true,
                content: result
              });
              if ((res === null || res === void 0 ? void 0 : res.status) === 401) {
                session.auth && logout();
              }
            }
            _context.n = 5;
            return strategy.getItem('options', true);
          case 5:
            localOptions = _context.v;
            if (!localOptions) {
              _context.n = 12;
              break;
            }
            _options3 = {};
            if (!(Object.keys(localOptions.address).length > 0)) {
              _context.n = 10;
              break;
            }
            conditions = [{
              attribute: 'address',
              value: localOptions === null || localOptions === void 0 || (_localOptions$address = localOptions.address) === null || _localOptions$address === void 0 ? void 0 : _localOptions$address.address
            }];
            userId = userCustomerId || session.user.id;
            _context.n = 6;
            return ordering.setAccessToken(session.token).users(userId).addresses().where(conditions).get();
          case 6:
            addressesResponse = _context.v;
            address = addressesResponse.content.result.find(function (address) {
              var _localOptions$address2, _localOptions$address3, _localOptions$address4, _address$location, _localOptions$address5, _address$location2, _localOptions$address6, _localOptions$address7, _localOptions$address8, _localOptions$address9;
              localOptions.address.internal_number = ((_localOptions$address2 = localOptions.address) === null || _localOptions$address2 === void 0 ? void 0 : _localOptions$address2.internal_number) || null;
              localOptions.address.zipcode = ((_localOptions$address3 = localOptions.address) === null || _localOptions$address3 === void 0 ? void 0 : _localOptions$address3.zipcode) || null;
              localOptions.address.address_notes = ((_localOptions$address4 = localOptions.address) === null || _localOptions$address4 === void 0 ? void 0 : _localOptions$address4.address_notes) || null;
              return (address === null || address === void 0 || (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat) === (localOptions === null || localOptions === void 0 || (_localOptions$address5 = localOptions.address) === null || _localOptions$address5 === void 0 ? void 0 : _localOptions$address5.location.lat) && (address === null || address === void 0 || (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng) === (localOptions === null || localOptions === void 0 || (_localOptions$address6 = localOptions.address) === null || _localOptions$address6 === void 0 || (_localOptions$address6 = _localOptions$address6.location) === null || _localOptions$address6 === void 0 ? void 0 : _localOptions$address6.lng) && (address === null || address === void 0 ? void 0 : address.internal_number) === (localOptions === null || localOptions === void 0 || (_localOptions$address7 = localOptions.address) === null || _localOptions$address7 === void 0 ? void 0 : _localOptions$address7.internal_number) && (address === null || address === void 0 ? void 0 : address.zipcode) === (localOptions === null || localOptions === void 0 || (_localOptions$address8 = localOptions.address) === null || _localOptions$address8 === void 0 ? void 0 : _localOptions$address8.zipcode) && (address === null || address === void 0 ? void 0 : address.address_notes) === (localOptions === null || localOptions === void 0 || (_localOptions$address9 = localOptions.address) === null || _localOptions$address9 === void 0 ? void 0 : _localOptions$address9.address_notes);
            });
            if (address) {
              _context.n = 8;
              break;
            }
            Object.keys(localOptions.address).forEach(function (key) {
              var _localOptions$address0, _localOptions$address1;
              return (localOptions === null || localOptions === void 0 || (_localOptions$address0 = localOptions.address) === null || _localOptions$address0 === void 0 ? void 0 : _localOptions$address0[key]) === null && (localOptions === null || localOptions === void 0 || (_localOptions$address1 = localOptions.address) === null || _localOptions$address1 === void 0 || delete _localOptions$address1[key]);
            });
            _context.n = 7;
            return ordering.setAccessToken(session.token).users(userId).addresses().save(localOptions.address);
          case 7:
            _yield$ordering$setAc = _context.v;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            _error = _yield$ordering$setAc2.error;
            _result = _yield$ordering$setAc2.result;
            if (!_error) {
              address = _result;
            }
            _context.n = 9;
            break;
          case 8:
            _context.n = 9;
            return ordering.setAccessToken(session.token).users(userId).addresses(address.id).save({
              default: true
            });
          case 9:
            address && (_options3.address_id = address.id);
          case 10:
            if (localOptions.type) {
              _options3.type = localOptions.type;
            }
            if (localOptions.moment) {
              _options3.moment = _dayjs.default.utc(localOptions.moment, 'YYYY-MM-DD HH:mm:ss').unix();
            }
            if (localOptions !== null && localOptions !== void 0 && localOptions.address_id) {
              _options3.address_id = localOptions === null || localOptions === void 0 ? void 0 : localOptions.address_id;
            }
            if (localOptions !== null && localOptions !== void 0 && localOptions.city_id) {
              _options3.city_id = localOptions === null || localOptions === void 0 ? void 0 : localOptions.city_id;
            }
            if (_options3 && Object.keys(_options3).length > 0) {
              updateOrderOptions(_options3);
            } else {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
            }
            _context.n = 11;
            return strategy.removeItem('options');
          case 11:
            _context.n = 13;
            break;
          case 12:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 13:
            _context.n = 15;
            break;
          case 14:
            _context.p = 14;
            _t = _context.v;
            message = _t !== null && _t !== void 0 && (_err$message = _t.message) !== null && _err$message !== void 0 && _err$message.includes('Internal error') ? 'INTERNAL_ERROR' : !_t.message ? t('NETWORK_ERROR', 'Network error') : _t.message;
            setAlert({
              show: true,
              content: [message]
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 15:
            return _context.a(2);
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function refreshOrderOptions() {
      return _ref2.apply(this, arguments);
    };
  }();
  var checkAddress = function checkAddress(address) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    props.forEach(function (prop) {
      var _state$options3, _state$options4;
      if ((_state$options3 = state.options) !== null && _state$options3 !== void 0 && _state$options3.address && (_state$options4 = state.options) !== null && _state$options4 !== void 0 && (_state$options4 = _state$options4.address) !== null && _state$options4 !== void 0 && _state$options4[prop]) {
        if (prop === 'location') {
          var _address$prop, _state$options5, _address$prop2, _state$options6;
          values.push((address === null || address === void 0 || (_address$prop = address[prop]) === null || _address$prop === void 0 ? void 0 : _address$prop.lat) === ((_state$options5 = state.options) === null || _state$options5 === void 0 || (_state$options5 = _state$options5.address) === null || _state$options5 === void 0 || (_state$options5 = _state$options5[prop]) === null || _state$options5 === void 0 ? void 0 : _state$options5.lat) && (address === null || address === void 0 || (_address$prop2 = address[prop]) === null || _address$prop2 === void 0 ? void 0 : _address$prop2.lng) === ((_state$options6 = state.options) === null || _state$options6 === void 0 || (_state$options6 = _state$options6.address) === null || _state$options6 === void 0 || (_state$options6 = _state$options6[prop]) === null || _state$options6 === void 0 ? void 0 : _state$options6.lng));
        } else {
          var _state$options7;
          values.push((address === null || address === void 0 ? void 0 : address[prop]) === ((_state$options7 = state.options) === null || _state$options7 === void 0 || (_state$options7 = _state$options7.address) === null || _state$options7 === void 0 ? void 0 : _state$options7[prop]));
        }
      } else {
        values.push(!(address !== null && address !== void 0 && address[prop]));
      }
    });
    return values.every(function (value) {
      return value;
    });
  };

  /**
   * Change order address
   */
  var changeAddress = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(addressId, params) {
      var _state$options8;
      var isCountryCodeChanged, optionsStorage, options, _state$options9, _params, _params$address;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            isCountryCodeChanged = ((_state$options8 = state.options) === null || _state$options8 === void 0 || (_state$options8 = _state$options8.address) === null || _state$options8 === void 0 ? void 0 : _state$options8.country_code) !== (params === null || params === void 0 ? void 0 : params.country_code);
            if (!(_typeof(addressId) === 'object')) {
              _context2.n = 3;
              break;
            }
            _context2.n = 1;
            return strategy.getItem('options', true);
          case 1:
            optionsStorage = _context2.v;
            options = _objectSpread(_objectSpread(_objectSpread({}, state.options), optionsStorage), {}, {
              address: _objectSpread(_objectSpread({}, optionsStorage === null || optionsStorage === void 0 ? void 0 : optionsStorage.address), addressId)
            });
            if (!session.auth) {
              options.type = state === null || state === void 0 || (_state$options9 = state.options) === null || _state$options9 === void 0 ? void 0 : _state$options9.type;
            }
            _context2.n = 2;
            return strategy.setItem('options', options, true);
          case 2:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: options
            }));
            return _context2.a(2);
          case 3:
            _params = {
              country_code: params === null || params === void 0 ? void 0 : params.country_code
            };
            (params === null || params === void 0 ? void 0 : params.type) && (_params.type = params === null || params === void 0 ? void 0 : params.type);
            if (!(params && params !== null && params !== void 0 && params.address && !checkAddress(params === null || params === void 0 ? void 0 : params.address))) {
              _context2.n = 5;
              break;
            }
            _params.address_id = params === null || params === void 0 || (_params$address = params.address) === null || _params$address === void 0 ? void 0 : _params$address.id;
            _context2.n = 4;
            return updateOrderOptions(_params);
          case 4:
            if (isCountryCodeChanged) {
              events.emit('country_code_changed', params === null || params === void 0 ? void 0 : params.country_code);
            }
            return _context2.a(2);
          case 5:
            addressId && (_params.address_id = addressId);
            if (!(params && params !== null && params !== void 0 && params.isEdit)) {
              _context2.n = 8;
              break;
            }
            if (!(addressId !== state.options.address_id)) {
              _context2.n = 6;
              break;
            }
            return _context2.a(2);
          case 6:
            _context2.n = 7;
            return updateOrderOptions(_params);
          case 7:
            if (isCountryCodeChanged) {
              events.emit('country_code_changed', params === null || params === void 0 ? void 0 : params.country_code);
            }
            return _context2.a(2);
          case 8:
            _context2.n = 9;
            return updateOrderOptions(_params);
          case 9:
            if (isCountryCodeChanged) {
              events.emit('country_code_changed', params === null || params === void 0 ? void 0 : params.country_code);
            }
          case 10:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function changeAddress(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Change order type
   */
  var changeType = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(type) {
      var _state$options0;
      var options, cityId, params, _options;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            options = _objectSpread(_objectSpread({}, state.options), {}, {
              type: type
            });
            if (!(state.options.type === type)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            cityId = (_state$options0 = state.options) === null || _state$options0 === void 0 ? void 0 : _state$options0.city_id;
            params = {
              type: type
            };
            if (cityId && type !== 2) {
              params.city_id = null;
            }
            if (session.auth) {
              _context3.n = 3;
              break;
            }
            _options = _objectSpread(_objectSpread({}, options), params);
            _context3.n = 2;
            return strategy.setItem('options', _options, true);
          case 2:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: _options
            }));
          case 3:
            updateOrderOptions(params);
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function changeType(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Change order moment
   */
  var changeMoment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(moment) {
      var momentUnix, momentFormatted, options;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            momentUnix = moment ? moment.getTime() / 1000 : null;
            momentFormatted = momentUnix ? _dayjs.default.unix(momentUnix).utc().format('YYYY-MM-DD HH:mm:ss') : null;
            options = _objectSpread(_objectSpread({}, state.options), {}, {
              moment: momentFormatted
            });
            if (!(state.options.moment === momentFormatted)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            if (session.auth) {
              _context4.n = 3;
              break;
            }
            _context4.n = 2;
            return strategy.setItem('options', options, true);
          case 2:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: options
            }));
          case 3:
            updateOrderOptions({
              moment: momentUnix
            });
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function changeMoment(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Change order city
   */
  var changeCityFilter = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(id) {
      var options;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            options = _objectSpread(_objectSpread({}, state.options), {}, {
              city_id: id
            });
            if (!(state.options.city_id === id)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            if (session.auth) {
              _context5.n = 3;
              break;
            }
            _context5.n = 2;
            return strategy.setItem('options', options, true);
          case 2:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: options
            }));
          case 3:
            updateOrderOptions({
              city_id: id
            });
          case 4:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function changeCityFilter(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  var updateOrderOptions = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(changes) {
      var countryCodeFromLocalStorage, customerFromLocalStorage, userCustomerId, body, _state$options1, _ref8, _state$options10, options, countryCode, _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, carts, _options4, _err$message2, message, _t2;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!session.auth) {
              _context6.n = 7;
              break;
            }
            _context6.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCodeFromLocalStorage = _context6.v;
            _context6.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context6.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _objectSpread(_objectSpread({}, changes), {}, {
              user_id: userCustomerId || session.user.id
            });
            _context6.p = 3;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            options = {};
            state.loading = true;
            options.headers = {
              'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
            };
            countryCode = changes !== null && changes !== void 0 && changes.country_code && (changes === null || changes === void 0 ? void 0 : changes.country_code) !== (state === null || state === void 0 || (_state$options1 = state.options) === null || _state$options1 === void 0 || (_state$options1 = _state$options1.address) === null || _state$options1 === void 0 ? void 0 : _state$options1.country_code) ? changes === null || changes === void 0 ? void 0 : changes.country_code : (_ref8 = countryCodeFromLocalStorage !== null && countryCodeFromLocalStorage !== void 0 ? countryCodeFromLocalStorage : changes === null || changes === void 0 ? void 0 : changes.country_code) !== null && _ref8 !== void 0 ? _ref8 : state === null || state === void 0 || (_state$options10 = state.options) === null || _state$options10 === void 0 || (_state$options10 = _state$options10.address) === null || _state$options10 === void 0 ? void 0 : _state$options10.country_code;
            if (!countryCode) {
              _context6.n = 4;
              break;
            }
            options.headers = _objectSpread(_objectSpread({}, options.headers), {}, {
              'X-Country-Code-X': countryCode
            });
            _context6.n = 4;
            return strategy.setItem('country-code', countryCode);
          case 4:
            if (franchiseId) {
              options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                franchise_id: franchiseId
              });
            }
            if (body !== null && body !== void 0 && body.country_code) {
              body === null || body === void 0 || delete body.country_code;
            }
            _context6.n = 5;
            return ordering.setAccessToken(session.token).orderOptions().save(body, options);
          case 5:
            _yield$ordering$setAc3 = _context6.v;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            if (!error) {
              carts = result.carts, _options4 = _objectWithoutProperties(result, _excluded2);
              state.carts = {};
              carts.forEach(function (cart) {
                state.carts["businessId:".concat(cart.business_id)] = cart;
              });
              state.options = _objectSpread(_objectSpread({}, state.options), _options4);
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            state.loading = false;
            return _context6.a(2, !error);
          case 6:
            _context6.p = 6;
            _t2 = _context6.v;
            message = _t2 !== null && _t2 !== void 0 && (_err$message2 = _t2.message) !== null && _err$message2 !== void 0 && _err$message2.includes('Internal error') ? 'INTERNAL_ERROR' : _t2.message;
            setAlert({
              show: true,
              content: [message]
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            state.loading = false;
            return _context6.a(2, false);
          case 7:
            return _context6.a(2);
        }
      }, _callee6, null, [[3, 6]]);
    }));
    return function updateOrderOptions(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Add product to cart
   * @param {object} product product for add
   * @param {object} cart cart of the product
   * @param {boolean} isQuickAddProduct option to add product when clicks
   */
  var addProduct = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(product, cart, isQuickAddProduct) {
      var isPlatformProduct,
        countryCode,
        customerFromLocalStorage,
        userCustomerId,
        body,
        headers,
        _yield$ordering$setAc5,
        _yield$ordering$setAc6,
        error,
        result,
        _args7 = arguments,
        _t3;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            isPlatformProduct = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : false;
            _context7.p = 1;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context7.n = 2;
            return strategy.getItem('country-code');
          case 2:
            countryCode = _context7.v;
            _context7.n = 3;
            return strategy.getItem('user-customer', true);
          case 3:
            customerFromLocalStorage = _context7.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            headers = {
              'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
              'X-Country-Code-X': countryCode
            };
            if (!isPlatformProduct) {
              body = {
                product: product,
                business_id: cart.business_id,
                user_id: userCustomerId || session.user.id
              };
            } else {
              body = {
                platform_product: _objectSpread({}, product)
              };
            }
            _context7.n = 4;
            return ordering.setAccessToken(session.token).carts().addProduct(body, {
              headers: headers
            });
          case 4:
            _yield$ordering$setAc5 = _context7.v;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_product_added', product, result);
              if (product !== null && product !== void 0 && product.favorite) {
                events.emit('wishlist_product_added_to_cart', product, result);
              }
              events.emit('cart_updated', result);
              events.emit('product_added', product, result);
              isQuickAddProduct && !isDisableToast && showToast(_ToastContext.ToastType.Success, t('PRODUCT_ADDED_NOTIFICATION', 'Product _PRODUCT_ added succesfully').replace('_PRODUCT_', product.name));
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            if (!isPlatformProduct) {
              _context7.n = 5;
              break;
            }
            return _context7.a(2, {
              error: error,
              result: result
            });
          case 5:
            return _context7.a(2, !error);
          case 6:
            _context7.n = 9;
            break;
          case 7:
            _context7.p = 7;
            _t3 = _context7.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            if (!isPlatformProduct) {
              _context7.n = 8;
              break;
            }
            return _context7.a(2, {
              error: true,
              result: _t3.message
            });
          case 8:
            return _context7.a(2, false);
          case 9:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 7]]);
    }));
    return function addProduct(_x7, _x8, _x9) {
      return _ref9.apply(this, arguments);
    };
  }();

  /**
   * Add multi products to cart / (domino's)
   * @param {object} product product for add
   * @param {object} cart cart of the product
   * @param {boolean} isQuickAddProduct option to add product when clicks
   */
  var addMultiProduct = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(product, cart, isQuickAddProduct) {
      var countryCode, customerFromLocalStorage, userCustomerId, headers, body, response, _yield$response$json, result, error, _t4;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context8.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context8.v;
            _context8.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context8.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            headers = {
              'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
              'X-Country-Code-X': countryCode
            };
            body = {
              products: JSON.stringify(product),
              business_id: cart.business_id,
              user_id: userCustomerId || session.user.id
            };
            _context8.n = 3;
            return fetch("".concat(ordering.root, "/carts/multi_product"), {
              method: 'POST',
              body: JSON.stringify(_objectSpread(_objectSpread({}, body), {}, {
                products: JSON.stringify([product])
              })),
              headers: _objectSpread(_objectSpread({}, headers), {}, {
                Authorization: "Bearer ".concat(session.token),
                'Content-Type': 'application/json'
              })
            });
          case 3:
            response = _context8.v;
            _context8.n = 4;
            return response.json();
          case 4:
            _yield$response$json = _context8.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_product_added', product, result);
              if (product !== null && product !== void 0 && product.favorite) {
                events.emit('wishlist_product_added_to_cart', product, result);
              }
              events.emit('cart_updated', result);
              events.emit('product_added', product, result);
              isQuickAddProduct && !isDisableToast && showToast(_ToastContext.ToastType.Success, t('PRODUCT_ADDED_NOTIFICATION', 'Product _PRODUCT_ added succesfully').replace('_PRODUCT_', product.name));
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context8.a(2, !error);
          case 5:
            _context8.p = 5;
            _t4 = _context8.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context8.a(2, false);
        }
      }, _callee8, null, [[0, 5]]);
    }));
    return function addMultiProduct(_x0, _x1, _x10) {
      return _ref0.apply(this, arguments);
    };
  }();

  /**
   * Remove product to cart
   */
  var removeProduct = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(product, cart) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc7, _yield$ordering$setAc8, error, result, _t5;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context9.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context9.v;
            _context9.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context9.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              product: {
                id: product.id,
                code: product.code,
                business_id: product.business_id
              },
              business_id: cart.business_id,
              user_id: userCustomerId || session.user.id
            };
            _context9.n = 3;
            return ordering.setAccessToken(session.token).carts().removeProduct(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 3:
            _yield$ordering$setAc7 = _context9.v;
            _yield$ordering$setAc8 = _yield$ordering$setAc7.content;
            error = _yield$ordering$setAc8.error;
            result = _yield$ordering$setAc8.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_product_removed', product, result);
              events.emit('cart_updated', result);
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context9.a(2, !error);
          case 4:
            _context9.p = 4;
            _t5 = _context9.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context9.a(2, false);
        }
      }, _callee9, null, [[0, 4]]);
    }));
    return function removeProduct(_x11, _x12) {
      return _ref1.apply(this, arguments);
    };
  }();

  /**
   * Clear products of cart
   */
  var clearCart = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(uuid) {
      var configurations,
        countryCode,
        customerFromLocalStorage,
        userCustomerId,
        body,
        response,
        _yield$response$json2,
        error,
        result,
        _args0 = arguments,
        _t6;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            configurations = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : {};
            _context0.p = 1;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: !(configurations !== null && configurations !== void 0 && configurations.disableLoading)
            }));
            _context0.n = 2;
            return strategy.getItem('country-code');
          case 2:
            countryCode = _context0.v;
            _context0.n = 3;
            return strategy.getItem('user-customer', true);
          case 3:
            customerFromLocalStorage = _context0.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = JSON.stringify({
              uuid: uuid,
              user_id: userCustomerId || session.user.id
            });
            _context0.n = 4;
            return fetch("".concat(ordering.root, "/carts/clear"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              },
              body: body
            });
          case 4:
            response = _context0.v;
            _context0.n = 5;
            return response.json();
          case 5:
            _yield$response$json2 = _context0.v;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context0.a(2, {
              error: error,
              result: result
            });
          case 6:
            _context0.p = 6;
            _t6 = _context0.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context0.a(2, false);
        }
      }, _callee0, null, [[1, 6]]);
    }));
    return function clearCart(_x13) {
      return _ref10.apply(this, arguments);
    };
  }();

  /**
   * Update product to cart
   */
  var updateProduct = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(product, cart, isQuickAddProduct) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc9, _yield$ordering$setAc0, error, result, _t7;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            _context1.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context1.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context1.v;
            _context1.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context1.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              product: product,
              business_id: cart.business_id,
              user_id: userCustomerId || session.user.id
            };
            _context1.n = 3;
            return ordering.setAccessToken(session.token).carts().updateProduct(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 3:
            _yield$ordering$setAc9 = _context1.v;
            _yield$ordering$setAc0 = _yield$ordering$setAc9.content;
            error = _yield$ordering$setAc0.error;
            result = _yield$ordering$setAc0.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_product_updated', product, result);
              events.emit('cart_updated', result);
              isQuickAddProduct && !isDisableToast && showToast(_ToastContext.ToastType.Success, t('PRODUCT_UPDATED_NOTIFICATION', 'Product _PRODUCT_ updated succesfully').replace('_PRODUCT_', product.name));
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context1.a(2, !error);
          case 4:
            _context1.p = 4;
            _t7 = _context1.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context1.a(2, false);
        }
      }, _callee1, null, [[0, 4]]);
    }));
    return function updateProduct(_x14, _x15, _x16) {
      return _ref11.apply(this, arguments);
    };
  }();

  /**
   * Apply coupon to cart
   */
  var applyCoupon = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(couponData, customParams) {
      var _state$carts;
      var countryCode, response, _result2, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc1, content, result, _t8;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (couponData.business_id) {
              _context10.n = 1;
              break;
            }
            throw new Error('`business_id` is required.');
          case 1:
            if (!(typeof couponData.coupon === 'undefined')) {
              _context10.n = 2;
              break;
            }
            throw new Error('`coupon` is required.');
          case 2:
            if (!(((_state$carts = state.carts["businessId:".concat(couponData.business_id)]) === null || _state$carts === void 0 ? void 0 : _state$carts.coupon) === couponData.coupon)) {
              _context10.n = 3;
              break;
            }
            return _context10.a(2);
          case 3:
            _context10.p = 3;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context10.n = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context10.v;
            if (!(customParams && isAlsea)) {
              _context10.n = 7;
              break;
            }
            _context10.n = 5;
            return fetch('https://alsea-plugins.ordering.co/alseaplatform/vcoupon2.php', {
              method: 'POST',
              body: JSON.stringify({
                userId: customParams.userId,
                businessId: customParams.businessId,
                couponId: couponData.coupon
              }),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 5:
            response = _context10.v;
            _context10.n = 6;
            return response.json();
          case 6:
            _result2 = _context10.v;
            if (!(_result2.message !== "Cup\xF3n v\xE1lido")) {
              _context10.n = 7;
              break;
            }
            setAlert({
              show: true,
              content: _result2.message === 'Not found' ? ['ERROR_INVALID_COUPON'] : [_result2.message]
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context10.a(2);
          case 7:
            _context10.n = 8;
            return strategy.getItem('user-customer', true);
          case 8:
            customerFromLocalStorage = _context10.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              business_id: couponData.business_id,
              coupon: couponData.coupon,
              user_id: userCustomerId || session.user.id
            };
            _context10.n = 9;
            return ordering.setAccessToken(session.token).carts().applyCoupon(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 9:
            _yield$ordering$setAc1 = _context10.v;
            content = _yield$ordering$setAc1.content;
            result = content;
            if (!result.error) {
              state.carts["businessId:".concat(result.result.business_id)] = result.result;
              events.emit('cart_updated', result.result);
            } else {
              setAlert({
                show: true,
                content: result.result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context10.a(2, !result.error);
          case 10:
            _context10.p = 10;
            _t8 = _context10.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context10.a(2, false);
        }
      }, _callee10, null, [[3, 10]]);
    }));
    return function applyCoupon(_x17, _x18) {
      return _ref12.apply(this, arguments);
    };
  }();
  var applyOffer = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(offerData) {
      var _offerData$force, countryCode, response, result, _t9;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (offerData.business_id) {
              _context11.n = 1;
              break;
            }
            throw new Error('`business_id` is required.');
          case 1:
            if (!(typeof offerData.coupon === 'undefined')) {
              _context11.n = 2;
              break;
            }
            throw new Error('`coupon` is required.');
          case 2:
            _context11.p = 2;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context11.n = 3;
            return strategy.getItem('country-code');
          case 3:
            countryCode = _context11.v;
            _context11.n = 4;
            return fetch("".concat(ordering.root, "/carts/add_offer"), {
              method: 'POST',
              body: JSON.stringify({
                user_id: offerData.userId,
                business_id: offerData.business_id,
                coupon: offerData.coupon,
                force: (_offerData$force = offerData.force) !== null && _offerData$force !== void 0 ? _offerData$force : false
              }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 4:
            response = _context11.v;
            _context11.n = 5;
            return response.json();
          case 5:
            result = _context11.v;
            if (!result.error) {
              state.carts["businessId:".concat(result.result.business_id)] = result.result;
              events.emit('cart_updated', result.result);
              events.emit('offer_applied', _objectSpread(_objectSpread({}, result.result), offerData));
            } else {
              setAlert({
                show: true,
                content: result.result
              });
              events.emit('offer_denied', _objectSpread(_objectSpread({}, offerData), {}, {
                reason: result.result
              }));
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context11.a(2, !result.error);
          case 6:
            _context11.p = 6;
            _t9 = _context11.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context11.a(2, false);
        }
      }, _callee11, null, [[2, 6]]);
    }));
    return function applyOffer(_x19) {
      return _ref13.apply(this, arguments);
    };
  }();
  var removeOffer = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(offerData) {
      var countryCode, offerRemoveData, response, result, _t0;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (offerData.business_id) {
              _context12.n = 1;
              break;
            }
            throw new Error('`business_id` is required.');
          case 1:
            if (!(typeof offerData.offer_id === 'undefined')) {
              _context12.n = 2;
              break;
            }
            throw new Error('`offer_id` is required.');
          case 2:
            _context12.p = 2;
            _context12.n = 3;
            return strategy.getItem('country-code');
          case 3:
            countryCode = _context12.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            offerRemoveData = {
              business_id: offerData.business_id,
              offer_id: offerData.offer_id
            };
            if (offerData.user_id) offerRemoveData.user_id = offerData.user_id;
            _context12.n = 4;
            return fetch("".concat(ordering.root, "/carts/remove_offer"), {
              method: 'POST',
              body: JSON.stringify(offerRemoveData),
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 4:
            response = _context12.v;
            _context12.n = 5;
            return response.json();
          case 5:
            result = _context12.v;
            if (!result.error) {
              state.carts["businessId:".concat(result.result.business_id)] = result.result;
              events.emit('cart_updated', result.result);
              events.emit('offer_removed', offerData);
            } else {
              setAlert({
                show: true,
                content: result.result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context12.a(2, !result.error);
          case 6:
            _context12.p = 6;
            _t0 = _context12.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context12.a(2, false);
        }
      }, _callee12, null, [[2, 6]]);
    }));
    return function removeOffer(_x20) {
      return _ref14.apply(this, arguments);
    };
  }();

  /**
   * Apply coupon to cart
   */
  var changeDriverTip = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(businessId) {
      var _state$carts2;
      var driverTipRate,
        isFixedPrice,
        countryCode,
        customerFromLocalStorage,
        userCustomerId,
        body,
        _yield$ordering$setAc10,
        _yield$ordering$setAc11,
        error,
        result,
        _args13 = arguments,
        _t1;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            driverTipRate = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : 0;
            isFixedPrice = _args13.length > 2 ? _args13[2] : undefined;
            if (businessId) {
              _context13.n = 1;
              break;
            }
            throw new Error('`businessId` is required.');
          case 1:
            if (!(!driverTipRate && driverTipRate !== 0)) {
              _context13.n = 2;
              break;
            }
            throw new Error('`driverTipRate` is required.');
          case 2:
            if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts2 = state.carts["businessId:".concat(businessId)]) === null || _state$carts2 === void 0 ? void 0 : _state$carts2.driver_tip_rate) === driverTipRate)) {
              _context13.n = 3;
              break;
            }
            return _context13.a(2);
          case 3:
            _context13.p = 3;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context13.n = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context13.v;
            _context13.n = 5;
            return strategy.getItem('user-customer', true);
          case 5:
            customerFromLocalStorage = _context13.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _defineProperty(_defineProperty({
              business_id: businessId
            }, isFixedPrice ? 'driver_tip' : 'driver_tip_rate', driverTipRate), "user_id", userCustomerId || session.user.id);
            _context13.n = 6;
            return ordering.setAccessToken(session.token).carts().changeDriverTip(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 6:
            _yield$ordering$setAc10 = _context13.v;
            _yield$ordering$setAc11 = _yield$ordering$setAc10.content;
            error = _yield$ordering$setAc11.error;
            result = _yield$ordering$setAc11.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_updated', result);
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context13.a(2, !error);
          case 7:
            _context13.p = 7;
            _t1 = _context13.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context13.a(2, false);
        }
      }, _callee13, null, [[3, 7]]);
    }));
    return function changeDriverTip(_x21) {
      return _ref15.apply(this, arguments);
    };
  }();

  /**
   * Change payment method
   */
  var changePaymethod = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(businessId, paymethodId, paymethodData) {
      var _state$carts3;
      var countryCode, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc12, _yield$ordering$setAc13, error, result, _t10;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (businessId) {
              _context14.n = 1;
              break;
            }
            throw new Error('`businessId` is required.');
          case 1:
            if (paymethodId) {
              _context14.n = 2;
              break;
            }
            throw new Error('`paymethodId` is required.');
          case 2:
            if (paymethodData) {
              _context14.n = 3;
              break;
            }
            throw new Error('`paymethodData` is required.');
          case 3:
            if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts3 = state.carts["businessId:".concat(businessId)]) === null || _state$carts3 === void 0 ? void 0 : _state$carts3.paymethodId) === paymethodId)) {
              _context14.n = 4;
              break;
            }
            return _context14.a(2);
          case 4:
            _context14.p = 4;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context14.n = 5;
            return strategy.getItem('country-code');
          case 5:
            countryCode = _context14.v;
            _context14.n = 6;
            return strategy.getItem('user-customer', true);
          case 6:
            customerFromLocalStorage = _context14.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              business_id: businessId,
              paymethod_id: paymethodId,
              paymethod_data: paymethodData,
              user_id: userCustomerId !== null && userCustomerId !== void 0 ? userCustomerId : session.user.id
            };
            _context14.n = 7;
            return ordering.setAccessToken(session.token).carts().changePaymethod(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 7:
            _yield$ordering$setAc12 = _context14.v;
            _yield$ordering$setAc13 = _yield$ordering$setAc12.content;
            error = _yield$ordering$setAc13.error;
            result = _yield$ordering$setAc13.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_updated', result);
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context14.a(2, !error);
          case 8:
            _context14.p = 8;
            _t10 = _context14.v;
            refreshOrderOptions();
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context14.a(2, false);
        }
      }, _callee14, null, [[4, 8]]);
    }));
    return function changePaymethod(_x22, _x23, _x24) {
      return _ref16.apply(this, arguments);
    };
  }();

  /**
   * Place cart
   */
  var placeCart = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(cardId, data) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, headers, _yield$ordering$setAc14, _yield$ordering$setAc15, error, result, orderObject, _t11;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            _context15.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context15.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context15.v;
            _context15.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context15.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _objectSpread(_objectSpread({}, data), {}, {
              user_id: userCustomerId || session.user.id
            });
            headers = {
              'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
              'X-Country-Code-X': countryCode
            };
            if (userAgent) {
              headers = _objectSpread(_objectSpread({}, headers), {}, {
                'User-Agent': userAgent
              });
            }
            _context15.n = 3;
            return ordering.setAccessToken(session.token).carts(cardId).place(body, {
              headers: headers
            });
          case 3:
            _yield$ordering$setAc14 = _context15.v;
            _yield$ordering$setAc15 = _yield$ordering$setAc14.content;
            error = _yield$ordering$setAc15.error;
            result = _yield$ordering$setAc15.result;
            if (error) {
              _context15.n = 4;
              break;
            }
            if (result.status !== 1) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_updated', result);
            } else {
              delete state.carts["businessId:".concat(result.business_id)];
              orderObject = {
                id: result.order.uuid,
                business: {
                  name: result.business.name
                },
                total: result.total,
                tax_total: result.tax,
                delivery_zone_price: result.delivery_price,
                business_id: result.business_id,
                paymethod: result.paymethod_data.gateway
              };
              events.emit('order_placed', orderObject);
            }
            _context15.n = 5;
            break;
          case 4:
            setAlert({
              show: true,
              content: result
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context15.a(2);
          case 5:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context15.a(2, {
              error: error,
              result: result
            });
          case 6:
            _context15.p = 6;
            _t11 = _context15.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context15.a(2, {
              error: true,
              result: [_t11.message]
            });
        }
      }, _callee15, null, [[0, 6]]);
    }));
    return function placeCart(_x25, _x26) {
      return _ref17.apply(this, arguments);
    };
  }();

  /**
   * Place multi carts
   */
  var placeMultiCarts = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(data, cartUuid) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, requestOptions, response, _yield$response$json3, error, result, _t12;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            _context16.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context16.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context16.v;
            _context16.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context16.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _objectSpread(_objectSpread({}, data), {}, {
              user_id: userCustomerId || session.user.id
            });
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              },
              body: JSON.stringify(body)
            };
            _context16.n = 3;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid, "/place"), requestOptions);
          case 3:
            response = _context16.v;
            _context16.n = 4;
            return response.json();
          case 4:
            _yield$response$json3 = _context16.v;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              result.carts.forEach(function (cart) {
                delete state.carts["businessId:".concat(cart.business_id)];
                var orderObject = {
                  id: cart.uuid,
                  business: {
                    name: cart.business.name
                  },
                  total: cart.total,
                  tax_total: cart.tax,
                  delivery_zone_price: cart.delivery_price,
                  business_id: cart.business_id
                };
                events.emit('order_placed', orderObject);
              });
            } else {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context16.a(2, {
              error: error,
              result: result
            });
          case 5:
            _context16.p = 5;
            _t12 = _context16.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context16.a(2, {
              error: true,
              result: [_t12.message]
            });
        }
      }, _callee16, null, [[0, 5]]);
    }));
    return function placeMultiCarts(_x27, _x28) {
      return _ref18.apply(this, arguments);
    };
  }();

  /**
   * Confirm cart
   */
  var confirmCart = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(cardId, data) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, fetchurl, _fetchurl, _fetchurl$content, error, result, cart, _t13;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            _context17.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context17.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context17.v;
            _context17.n = 2;
            return strategy.getItem('user-customer', true);
          case 2:
            customerFromLocalStorage = _context17.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _objectSpread(_objectSpread({}, data), {}, {
              user_id: userCustomerId || session.user.id
            });
            if (!(body.user_id === userCustomerId || data)) {
              _context17.n = 4;
              break;
            }
            _context17.n = 3;
            return ordering.setAccessToken(session.token).carts(cardId).confirmWithData(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 3:
            fetchurl = _context17.v;
            _context17.n = 6;
            break;
          case 4:
            _context17.n = 5;
            return ordering.setAccessToken(session.token).carts(cardId).confirm(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 5:
            fetchurl = _context17.v;
          case 6:
            _fetchurl = fetchurl, _fetchurl$content = _fetchurl.content, error = _fetchurl$content.error, result = _fetchurl$content.result, cart = _fetchurl$content.cart;
            if (!error) {
              if (result.status !== 1) {
                state.carts["businessId:".concat(result.business_id)] = result;
                events.emit('cart_updated', result);
              } else {
                delete state.carts["businessId:".concat(result.business_id)];
              }
            } else if (cart) {
              state.carts["businessId:".concat(cart.business_id)] = cart;
              events.emit('cart_updated', cart);
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context17.a(2, {
              error: error,
              result: result
            });
          case 7:
            _context17.p = 7;
            _t13 = _context17.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context17.a(2, {
              error: true,
              result: [_t13.message]
            });
        }
      }, _callee17, null, [[0, 7]]);
    }));
    return function confirmCart(_x29, _x30) {
      return _ref19.apply(this, arguments);
    };
  }();

  /**
  * Confirm multi carts
  */
  var confirmMultiCarts = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(cartUuid) {
      var countryCode, requestOptions, response, _yield$response$json4, result, error, _t14;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            _context18.p = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context18.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context18.v;
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(session.token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            };
            _context18.n = 2;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid, "/confirm"), requestOptions);
          case 2:
            response = _context18.v;
            _context18.n = 3;
            return response.json();
          case 3:
            _yield$response$json4 = _context18.v;
            result = _yield$response$json4.result;
            error = _yield$response$json4.error;
            if (!error) {
              result.carts.forEach(function (cart) {
                if (result.status !== 'completed') {
                  state.carts["businessId:".concat(cart.business_id)] = result;
                  events.emit('cart_updated', result);
                } else {
                  delete state.carts["businessId:".concat(cart.business_id)];
                }
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context18.a(2, {
              error: error,
              result: result
            });
          case 4:
            _context18.p = 4;
            _t14 = _context18.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context18.a(2, {
              error: true,
              result: [_t14.message]
            });
        }
      }, _callee18, null, [[0, 4]]);
    }));
    return function confirmMultiCarts(_x31) {
      return _ref20.apply(this, arguments);
    };
  }();

  /**
   * Reorder an order and get cart
   */
  var reorder = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(orderId, offAlert) {
      var configurations,
        countryCode,
        customerFromLocalStorage,
        userCustomerId,
        query,
        options,
        _yield$ordering$setAc16,
        _yield$ordering$setAc17,
        error,
        result,
        _args19 = arguments,
        _t15;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            configurations = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : {};
            _context19.p = 1;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: !(configurations !== null && configurations !== void 0 && configurations.disableLoading)
            }));
            _context19.n = 2;
            return strategy.getItem('country-code');
          case 2:
            countryCode = _context19.v;
            _context19.n = 3;
            return strategy.getItem('user-customer', true);
          case 3:
            customerFromLocalStorage = _context19.v;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            query = userCustomerId ? {
              user_id: userCustomerId
            } : null;
            options = {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            };
            if (query) {
              options.query = query;
            }
            _context19.n = 4;
            return ordering.setAccessToken(session.token).orders(orderId).reorder(options);
          case 4:
            _yield$ordering$setAc16 = _context19.v;
            _yield$ordering$setAc17 = _yield$ordering$setAc16.content;
            error = _yield$ordering$setAc17.error;
            result = _yield$ordering$setAc17.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_added', result);
            } else if (!offAlert) {
              setAlert({
                show: true,
                content: result
              });
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context19.a(2, {
              error: error,
              result: result
            });
          case 5:
            _context19.p = 5;
            _t15 = _context19.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context19.a(2, {
              error: true,
              result: [_t15.message]
            });
        }
      }, _callee19, null, [[1, 5]]);
    }));
    return function reorder(_x32, _x33) {
      return _ref21.apply(this, arguments);
    };
  }();
  var setOptionFromLocalStorage = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      var _configState$configs3, _state$options11;
      var optionsLocalStorage;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            _context20.n = 1;
            return strategy.getItem('options', true);
          case 1:
            optionsLocalStorage = _context20.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              options: isDisabledDefaultOpts ? {
                type: null,
                moment: null
              } : {
                type: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.type) || orderTypes[configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.default_order_type) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value],
                moment: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.moment) || null,
                address: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.address) || (state === null || state === void 0 || (_state$options11 = state.options) === null || _state$options11 === void 0 ? void 0 : _state$options11.address) || {},
                city_id: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.city_id) || null
              }
            }));
          case 2:
            return _context20.a(2);
        }
      }, _callee20);
    }));
    return function setOptionFromLocalStorage() {
      return _ref22.apply(this, arguments);
    };
  }();

  /**
  * get Latest past Order that has no review
  */
  var getLastOrderHasNoReview = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
      var pastOrderTypes, where, options, _yield$ordering$setAc18, _yield$ordering$setAc19, result, error, _noRviewOrder, _options5, _yield$ordering$setAc20, _yield$ordering$setAc21, _result3, _error2, noReviewOrders;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            if (!(session !== null && session !== void 0 && session.token)) {
              _context21.n = 9;
              break;
            }
            pastOrderTypes = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
            where = [{
              attribute: 'status',
              value: pastOrderTypes
            }];
            if (franchiseId) {
              where.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: {
                    condition: '=',
                    value: franchiseId
                  }
                }]
              });
            }
            if (typeof businessSlug === 'number' && businessSlug) {
              where.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'id',
                  value: {
                    condition: '=',
                    value: businessSlug
                  }
                }]
              });
            }
            if (typeof businessSlug === 'string' && businessSlug) {
              where.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'slug',
                  value: {
                    condition: '=',
                    value: businessSlug
                  }
                }]
              });
            }
            options = {
              query: {
                orderBy: '-delivery_datetime',
                page: 1,
                page_size: 10,
                where: where
              }
            };
            _context21.n = 1;
            return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).orders().get(options);
          case 1:
            _yield$ordering$setAc18 = _context21.v;
            _yield$ordering$setAc19 = _yield$ordering$setAc18.content;
            result = _yield$ordering$setAc19.result;
            error = _yield$ordering$setAc19.error;
            if (!(!error && (result === null || result === void 0 ? void 0 : result.length) > 0)) {
              _context21.n = 7;
              break;
            }
            _noRviewOrder = result === null || result === void 0 ? void 0 : result.find(function (order) {
              return !(order !== null && order !== void 0 && order.review);
            });
            if (!(_noRviewOrder !== null && _noRviewOrder !== void 0 && _noRviewOrder.cart_group_id)) {
              _context21.n = 5;
              break;
            }
            where.push({
              attribute: 'cart_group_id',
              value: _noRviewOrder === null || _noRviewOrder === void 0 ? void 0 : _noRviewOrder.cart_group_id
            });
            _options5 = {
              query: {
                where: where,
                page: 1,
                page_size: 10
              }
            };
            _context21.n = 2;
            return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).orders().get(_options5);
          case 2:
            _yield$ordering$setAc20 = _context21.v;
            _yield$ordering$setAc21 = _yield$ordering$setAc20.content;
            _result3 = _yield$ordering$setAc21.result;
            _error2 = _yield$ordering$setAc21.error;
            if (_error2) {
              _context21.n = 3;
              break;
            }
            noReviewOrders = _result3.filter(function (order) {
              return !(order !== null && order !== void 0 && order.review);
            });
            return _context21.a(2, noReviewOrders);
          case 3:
            return _context21.a(2, null);
          case 4:
            _context21.n = 6;
            break;
          case 5:
            return _context21.a(2, _noRviewOrder);
          case 6:
            _context21.n = 8;
            break;
          case 7:
            return _context21.a(2, null);
          case 8:
            _context21.n = 10;
            break;
          case 9:
            return _context21.a(2, null);
          case 10:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    return function getLastOrderHasNoReview() {
      return _ref23.apply(this, arguments);
    };
  }();
  var setStateValues = function setStateValues(values) {
    setState(_objectSpread(_objectSpread({}, state), values));
  };
  var setUserCustomerOptions = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(params) {
      var _params$options, _params$customer;
      var options;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.n) {
          case 0:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            options = (_params$options = params.options) !== null && _params$options !== void 0 ? _params$options : {};
            _context22.n = 1;
            return setUserCustomer((_params$customer = params.customer) !== null && _params$customer !== void 0 ? _params$customer : {}, true);
          case 1:
            _context22.n = 2;
            return updateOrderOptions(options);
          case 2:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 3:
            return _context22.a(2);
        }
      }, _callee22);
    }));
    return function setUserCustomerOptions(_x34) {
      return _ref24.apply(this, arguments);
    };
  }();
  var handleOrderStateLoading = function handleOrderStateLoading(loading) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      loading: loading
    }));
  };
  var handleLogEvent = /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(events) {
      var countryCode, headers, _t16;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            _context23.p = 0;
            _context23.n = 1;
            return strategy.getItem('country-code');
          case 1:
            countryCode = _context23.v;
            headers = {
              'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
              'X-Country-Code-X': countryCode
            };
            _context23.n = 2;
            return fetch("".concat(ordering.root, "/tracking_events"), {
              method: 'POST',
              body: JSON.stringify({
                events: events
              }),
              headers: _objectSpread(_objectSpread({}, headers), {}, {
                Authorization: "Bearer ".concat(session.token),
                'Content-Type': 'application/json'
              })
            });
          case 2:
            _context23.n = 4;
            break;
          case 3:
            _context23.p = 3;
            _t16 = _context23.v;
          case 4:
            return _context23.a(2);
        }
      }, _callee23, null, [[0, 3]]);
    }));
    return function handleLogEvent(_x35) {
      return _ref25.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (session.loading || languageState.loading) return;
    if (session.auth) {
      refreshOrderOptions();
    }
  }, [session.auth, session.loading, languageState.loading]);
  (0, _react.useEffect)(function () {
    if (session.loading || configState.loading) return;
    if (!session.auth) {
      setOptionFromLocalStorage();
    }
  }, [session.auth, session.loading, configState]);
  (0, _react.useEffect)(function () {
    if ((configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 && state.options.type && !configTypes.includes(state.options.type)) {
      var _configState$configs4, _configState$configs5;
      var validDefaultValue = configTypes.includes(configState === null || configState === void 0 || (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.default_order_type) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.type);
      updateOrderOptions(validDefaultValue ? {
        type: configState === null || configState === void 0 || (_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.default_order_type) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.type
      } : {
        type: configTypes[0]
      });
      if (!session.auth && !(state !== null && state !== void 0 && state.loading)) {
        var _configState$configs6;
        changeType(validDefaultValue ? configState === null || configState === void 0 || (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 || (_configState$configs6 = _configState$configs6.default_order_type) === null || _configState$configs6 === void 0 ? void 0 : _configState$configs6.type : configTypes[0]);
      }
    }
  }, [configTypes === null || configTypes === void 0 ? void 0 : configTypes.length, state.options.type]);
  /**
   * Update carts from sockets
   */
  (0, _react.useEffect)(function () {
    var handleCartUpdate = function handleCartUpdate(cart) {
      if (!isDisableToast) {
        showToast(_ToastContext.ToastType.Info, t('UPDATING_CART_INFO', 'Updating cart information...'));
      }
      if (cart.status === 1) {
        if (state.carts["businessId:".concat(cart.business_id)]) {
          delete state.carts["businessId:".concat(cart.business_id)];
        }
      } else {
        var cartFinded = Object.values(state.carts).find(function (_cart) {
          return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === (cart === null || cart === void 0 ? void 0 : cart.uuid);
        });
        var oldBusinessId = cartFinded === null || cartFinded === void 0 ? void 0 : cartFinded.business_id;
        var newBusinessId = cart === null || cart === void 0 ? void 0 : cart.business_id;
        if (!oldBusinessId || oldBusinessId === newBusinessId) {
          state.carts["businessId:".concat(cart.business_id)] = _objectSpread(_objectSpread({}, state.carts["businessId:".concat(cart.business_id)]), cart);
        } else {
          delete state.carts["businessId:".concat(oldBusinessId)];
          state.carts["businessId:".concat(newBusinessId)] = cart;
        }
      }
    };
    var handleOrderOptionUpdate = function handleOrderOptionUpdate(_ref26) {
      var carts = _ref26.carts,
        options = _objectWithoutProperties(_ref26, _excluded3);
      if (!isDisableToast) {
        showToast(_ToastContext.ToastType.Info, t('UPDATING_ORDER_OPTIONS', 'Updating order options...'));
      }
      var newCarts = {};
      carts.forEach(function (cart) {
        newCarts["businessId:".concat(cart.business_id)] = cart;
      });
      var newState = _objectSpread(_objectSpread({}, state), {}, {
        options: _objectSpread(_objectSpread({}, state.options), options),
        carts: _objectSpread(_objectSpread({}, state.carts), newCarts)
      });
      setState(_objectSpread(_objectSpread({}, newState), {}, {
        loading: false
      }));
    };
    socket.on('carts_update', handleCartUpdate);
    socket.on('order_options_update', handleOrderOptionUpdate);
    return function () {
      socket.off('carts_update', handleCartUpdate);
      socket.off('order_options_update', handleOrderOptionUpdate);
    };
  }, [state, socket]);

  /**
   * Join to carts room
   */
  (0, _react.useEffect)(function () {
    var _customerState$user, _session$user, _customerState$user2, _session$user2;
    if (!session.auth || session.loading) return;
    socket.join("carts_".concat((customerState === null || customerState === void 0 || (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.id) || (session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id)));
    socket.join("orderoptions_".concat((customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id) || (session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id)));
    return function () {
      var _customerState$user3, _session$user3, _customerState$user4, _session$user4;
      socket.leave("carts_".concat((customerState === null || customerState === void 0 || (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id) || (session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id)));
      socket.leave("orderoptions_".concat((customerState === null || customerState === void 0 || (_customerState$user4 = customerState.user) === null || _customerState$user4 === void 0 ? void 0 : _customerState$user4.id) || (session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.id)));
    };
  }, [socket, session.auth, session.loading, customerState === null || customerState === void 0 || (_customerState$user5 = customerState.user) === null || _customerState$user5 === void 0 ? void 0 : _customerState$user5.id, session === null || session === void 0 || (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id]);
  var functions = {
    refreshOrderOptions: refreshOrderOptions,
    changeAddress: changeAddress,
    changeType: changeType,
    changeMoment: changeMoment,
    addProduct: addProduct,
    removeProduct: removeProduct,
    updateProduct: updateProduct,
    clearCart: clearCart,
    applyCoupon: applyCoupon,
    applyOffer: applyOffer,
    removeOffer: removeOffer,
    changeDriverTip: changeDriverTip,
    placeCart: placeCart,
    confirmCart: confirmCart,
    reorder: reorder,
    setAlert: setAlert,
    setConfirm: setConfirm,
    changePaymethod: changePaymethod,
    setUserCustomerOptions: setUserCustomerOptions,
    setStateValues: setStateValues,
    placeMultiCarts: placeMultiCarts,
    getLastOrderHasNoReview: getLastOrderHasNoReview,
    changeCityFilter: changeCityFilter,
    confirmMultiCarts: confirmMultiCarts,
    addMultiProduct: addMultiProduct,
    handleOrderStateLoading: handleOrderStateLoading,
    handleLogEvent: handleLogEvent
  };
  var copyState = JSON.parse(JSON.stringify(state));
  return /*#__PURE__*/_react.default.createElement(OrderContext.Provider, {
    value: [copyState, functions]
  }, Alert && /*#__PURE__*/_react.default.createElement(Alert, {
    open: alert.show,
    title: alert.title || t('ERROR', 'Error'),
    onAccept: function onAccept() {
      return setAlert({
        show: false
      });
    },
    onClose: function onClose() {
      return setAlert({
        show: false
      });
    },
    content: alert.content
  }), children);
};

/**
 * Hook to get and update order state
 */
var useOrder = exports.useOrder = function useOrder() {
  var orderManager = (0, _react.useContext)(OrderContext);
  var warningMessage = function warningMessage() {
    console.warn('Must use OrderProvider to wrappe the app.');
  };
  /**
   * Functions to avoid fails
   */
  var functionsPlaceholders = {
    refreshOrderOptions: warningMessage,
    changeAddress: warningMessage,
    changeType: warningMessage,
    changeMoment: warningMessage,
    addProduct: warningMessage,
    removeProduct: warningMessage,
    updateProduct: warningMessage,
    clearCart: warningMessage,
    applyCoupon: warningMessage,
    placeCart: warningMessage,
    confirmCart: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage,
    changeDriverTip: warningMessage,
    reorder: warningMessage,
    changePaymethod: warningMessage,
    setStateValues: warningMessage,
    getLastOrderHasNoReview: warningMessage
  };
  return orderManager || [{}, functionsPlaceholders];
};