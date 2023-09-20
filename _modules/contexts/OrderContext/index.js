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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
var OrderContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */
exports.OrderContext = OrderContext;
var OrderProvider = function OrderProvider(_ref) {
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
    drivethru: 5
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _state$options, _state$options2, _res$content, _res$content2, countryCodeFromLocalStorage, customerFromLocalStorage, userCustomerId, options, countryCode, res, error, result, _options2$address, carts, _options2, _options2$address2, localOptions, _options3, _localOptions$address, conditions, userId, addressesResponse, address, _yield$ordering$setAc, _yield$ordering$setAc2, _error, _result, _err$message, message;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!state.loading) {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
            }
            _context.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCodeFromLocalStorage = _context.sent;
            _context.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context.sent;
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
            _context.next = 16;
            return ordering.setAccessToken(session.token).orderOptions().get(options);
          case 16:
            res = _context.sent;
            error = res === null || res === void 0 || (_res$content = res.content) === null || _res$content === void 0 ? void 0 : _res$content.error;
            result = res === null || res === void 0 || (_res$content2 = res.content) === null || _res$content2 === void 0 ? void 0 : _res$content2.result;
            if (error) {
              _context.next = 27;
              break;
            }
            carts = result.carts, _options2 = _objectWithoutProperties(result, _excluded);
            state.carts = {};
            carts.forEach(function (cart) {
              state.carts["businessId:".concat(cart.business_id)] = cart;
            });
            state.options = _objectSpread(_objectSpread({}, state.options), _options2);
            if (!(!countryCodeFromLocalStorage && _options2 !== null && _options2 !== void 0 && (_options2$address = _options2.address) !== null && _options2$address !== void 0 && _options2$address.country_code)) {
              _context.next = 27;
              break;
            }
            _context.next = 27;
            return updateOrderOptions({
              country_code: _options2 === null || _options2 === void 0 || (_options2$address2 = _options2.address) === null || _options2$address2 === void 0 ? void 0 : _options2$address2.country_code
            });
          case 27:
            if (error) {
              setAlert({
                show: true,
                content: result
              });
              if ((res === null || res === void 0 ? void 0 : res.status) === 401) {
                session.auth && logout();
              }
            }
            _context.next = 30;
            return strategy.getItem('options', true);
          case 30:
            localOptions = _context.sent;
            if (!localOptions) {
              _context.next = 63;
              break;
            }
            _options3 = {};
            if (!(Object.keys(localOptions.address).length > 0)) {
              _context.next = 54;
              break;
            }
            conditions = [{
              attribute: 'address',
              value: localOptions === null || localOptions === void 0 || (_localOptions$address = localOptions.address) === null || _localOptions$address === void 0 ? void 0 : _localOptions$address.address
            }];
            userId = userCustomerId || session.user.id;
            _context.next = 38;
            return ordering.setAccessToken(session.token).users(userId).addresses().where(conditions).get();
          case 38:
            addressesResponse = _context.sent;
            address = addressesResponse.content.result.find(function (address) {
              var _localOptions$address2, _localOptions$address3, _localOptions$address4, _address$location, _localOptions$address5, _address$location2, _localOptions$address6, _localOptions$address7, _localOptions$address8, _localOptions$address9;
              localOptions.address.internal_number = ((_localOptions$address2 = localOptions.address) === null || _localOptions$address2 === void 0 ? void 0 : _localOptions$address2.internal_number) || null;
              localOptions.address.zipcode = ((_localOptions$address3 = localOptions.address) === null || _localOptions$address3 === void 0 ? void 0 : _localOptions$address3.zipcode) || null;
              localOptions.address.address_notes = ((_localOptions$address4 = localOptions.address) === null || _localOptions$address4 === void 0 ? void 0 : _localOptions$address4.address_notes) || null;
              return (address === null || address === void 0 || (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat) === (localOptions === null || localOptions === void 0 || (_localOptions$address5 = localOptions.address) === null || _localOptions$address5 === void 0 ? void 0 : _localOptions$address5.location.lat) && (address === null || address === void 0 || (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng) === (localOptions === null || localOptions === void 0 || (_localOptions$address6 = localOptions.address) === null || _localOptions$address6 === void 0 || (_localOptions$address6 = _localOptions$address6.location) === null || _localOptions$address6 === void 0 ? void 0 : _localOptions$address6.lng) && (address === null || address === void 0 ? void 0 : address.internal_number) === (localOptions === null || localOptions === void 0 || (_localOptions$address7 = localOptions.address) === null || _localOptions$address7 === void 0 ? void 0 : _localOptions$address7.internal_number) && (address === null || address === void 0 ? void 0 : address.zipcode) === (localOptions === null || localOptions === void 0 || (_localOptions$address8 = localOptions.address) === null || _localOptions$address8 === void 0 ? void 0 : _localOptions$address8.zipcode) && (address === null || address === void 0 ? void 0 : address.address_notes) === (localOptions === null || localOptions === void 0 || (_localOptions$address9 = localOptions.address) === null || _localOptions$address9 === void 0 ? void 0 : _localOptions$address9.address_notes);
            });
            if (address) {
              _context.next = 51;
              break;
            }
            Object.keys(localOptions.address).forEach(function (key) {
              var _localOptions$address10, _localOptions$address11;
              return (localOptions === null || localOptions === void 0 || (_localOptions$address10 = localOptions.address) === null || _localOptions$address10 === void 0 ? void 0 : _localOptions$address10[key]) === null && (localOptions === null || localOptions === void 0 || (_localOptions$address11 = localOptions.address) === null || _localOptions$address11 === void 0 || delete _localOptions$address11[key]);
            });
            _context.next = 44;
            return ordering.setAccessToken(session.token).users(userId).addresses().save(localOptions.address);
          case 44:
            _yield$ordering$setAc = _context.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            _error = _yield$ordering$setAc2.error;
            _result = _yield$ordering$setAc2.result;
            if (!_error) {
              address = _result;
            }
            _context.next = 53;
            break;
          case 51:
            _context.next = 53;
            return ordering.setAccessToken(session.token).users(userId).addresses(address.id).save({
              default: true
            });
          case 53:
            address && (_options3.address_id = address.id);
          case 54:
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
            _context.next = 61;
            return strategy.removeItem('options');
          case 61:
            _context.next = 64;
            break;
          case 63:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 64:
            _context.next = 71;
            break;
          case 66:
            _context.prev = 66;
            _context.t0 = _context["catch"](0);
            message = _context.t0 !== null && _context.t0 !== void 0 && (_err$message = _context.t0.message) !== null && _err$message !== void 0 && _err$message.includes('Internal error') ? 'INTERNAL_ERROR' : !_context.t0.message ? t('NETWORK_ERROR', 'Network error') : _context.t0.message;
            setAlert({
              show: true,
              content: [message]
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 71:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 66]]);
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(addressId, params) {
      var _state$options8;
      var isCountryCodeChanged, optionsStorage, options, _state$options9, _params$address;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            isCountryCodeChanged = ((_state$options8 = state.options) === null || _state$options8 === void 0 || (_state$options8 = _state$options8.address) === null || _state$options8 === void 0 ? void 0 : _state$options8.country_code) !== (params === null || params === void 0 ? void 0 : params.country_code);
            if (!(_typeof(addressId) === 'object')) {
              _context2.next = 11;
              break;
            }
            _context2.next = 4;
            return strategy.getItem('options', true);
          case 4:
            optionsStorage = _context2.sent;
            options = _objectSpread(_objectSpread(_objectSpread({}, state.options), optionsStorage), {}, {
              address: _objectSpread(_objectSpread({}, optionsStorage === null || optionsStorage === void 0 ? void 0 : optionsStorage.address), addressId)
            });
            if (!session.auth) {
              options.type = state === null || state === void 0 || (_state$options9 = state.options) === null || _state$options9 === void 0 ? void 0 : _state$options9.type;
            }
            _context2.next = 9;
            return strategy.setItem('options', options, true);
          case 9:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: options
            }));
            return _context2.abrupt("return");
          case 11:
            if (!(params && params !== null && params !== void 0 && params.address && !checkAddress(params === null || params === void 0 ? void 0 : params.address))) {
              _context2.next = 16;
              break;
            }
            _context2.next = 14;
            return updateOrderOptions({
              address_id: params === null || params === void 0 || (_params$address = params.address) === null || _params$address === void 0 ? void 0 : _params$address.id,
              country_code: params === null || params === void 0 ? void 0 : params.country_code
            });
          case 14:
            if (isCountryCodeChanged) {
              events.emit('country_code_changed', params === null || params === void 0 ? void 0 : params.country_code);
            }
            return _context2.abrupt("return");
          case 16:
            if (!(params && params !== null && params !== void 0 && params.isEdit)) {
              _context2.next = 23;
              break;
            }
            if (!(addressId !== state.options.address_id)) {
              _context2.next = 19;
              break;
            }
            return _context2.abrupt("return");
          case 19:
            _context2.next = 21;
            return updateOrderOptions({
              address_id: addressId,
              country_code: params === null || params === void 0 ? void 0 : params.country_code
            });
          case 21:
            if (isCountryCodeChanged) {
              events.emit('country_code_changed', params === null || params === void 0 ? void 0 : params.country_code);
            }
            return _context2.abrupt("return");
          case 23:
            _context2.next = 25;
            return updateOrderOptions({
              address_id: addressId,
              country_code: params === null || params === void 0 ? void 0 : params.country_code
            });
          case 25:
            if (isCountryCodeChanged) {
              events.emit('country_code_changed', params === null || params === void 0 ? void 0 : params.country_code);
            }
          case 26:
          case "end":
            return _context2.stop();
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(type) {
      var _state$options10;
      var options, cityId, params, _options;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            options = _objectSpread(_objectSpread({}, state.options), {}, {
              type: type
            });
            if (!(state.options.type === type)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            cityId = (_state$options10 = state.options) === null || _state$options10 === void 0 ? void 0 : _state$options10.city_id;
            params = {
              type: type
            };
            if (cityId && type !== 2) {
              params.city_id = null;
            }
            if (session.auth) {
              _context3.next = 11;
              break;
            }
            _options = _objectSpread(_objectSpread({}, options), params);
            _context3.next = 10;
            return strategy.setItem('options', _options, true);
          case 10:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: _options
            }));
          case 11:
            updateOrderOptions(params);
          case 12:
          case "end":
            return _context3.stop();
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(moment) {
      var momentUnix, momentFormatted, options;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            momentUnix = moment ? moment.getTime() / 1000 : null;
            momentFormatted = momentUnix ? _dayjs.default.unix(momentUnix).utc().format('YYYY-MM-DD HH:mm:ss') : null;
            options = _objectSpread(_objectSpread({}, state.options), {}, {
              moment: momentFormatted
            });
            if (!(state.options.moment === momentFormatted)) {
              _context4.next = 5;
              break;
            }
            return _context4.abrupt("return");
          case 5:
            if (session.auth) {
              _context4.next = 9;
              break;
            }
            _context4.next = 8;
            return strategy.setItem('options', options, true);
          case 8:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: options
            }));
          case 9:
            updateOrderOptions({
              moment: momentUnix
            });
          case 10:
          case "end":
            return _context4.stop();
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var options;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            options = _objectSpread(_objectSpread({}, state.options), {}, {
              city_id: id
            });
            if (!(state.options.city_id === id)) {
              _context5.next = 3;
              break;
            }
            return _context5.abrupt("return");
          case 3:
            if (session.auth) {
              _context5.next = 7;
              break;
            }
            _context5.next = 6;
            return strategy.setItem('options', options, true);
          case 6:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              options: options
            }));
          case 7:
            updateOrderOptions({
              city_id: id
            });
          case 8:
          case "end":
            return _context5.stop();
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
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(changes) {
      var countryCodeFromLocalStorage, customerFromLocalStorage, userCustomerId, body, _state$options11, _ref8, _state$options12, options, countryCode, _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, carts, _options4, _err$message2, message;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!session.auth) {
              _context6.next = 40;
              break;
            }
            _context6.next = 3;
            return strategy.getItem('country-code');
          case 3:
            countryCodeFromLocalStorage = _context6.sent;
            _context6.next = 6;
            return strategy.getItem('user-customer', true);
          case 6:
            customerFromLocalStorage = _context6.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _objectSpread(_objectSpread({}, changes), {}, {
              user_id: userCustomerId || session.user.id
            });
            _context6.prev = 9;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            options = {};
            state.loading = true;
            options.headers = {
              'X-App-X': ordering.appId,
              'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
            };
            countryCode = changes !== null && changes !== void 0 && changes.country_code && (changes === null || changes === void 0 ? void 0 : changes.country_code) !== (state === null || state === void 0 || (_state$options11 = state.options) === null || _state$options11 === void 0 || (_state$options11 = _state$options11.address) === null || _state$options11 === void 0 ? void 0 : _state$options11.country_code) ? changes === null || changes === void 0 ? void 0 : changes.country_code : (_ref8 = countryCodeFromLocalStorage !== null && countryCodeFromLocalStorage !== void 0 ? countryCodeFromLocalStorage : changes === null || changes === void 0 ? void 0 : changes.country_code) !== null && _ref8 !== void 0 ? _ref8 : state === null || state === void 0 || (_state$options12 = state.options) === null || _state$options12 === void 0 || (_state$options12 = _state$options12.address) === null || _state$options12 === void 0 ? void 0 : _state$options12.country_code;
            if (!countryCode) {
              _context6.next = 19;
              break;
            }
            options.headers = _objectSpread(_objectSpread({}, options.headers), {}, {
              'X-Country-Code-X': countryCode
            });
            _context6.next = 19;
            return strategy.setItem('country-code', countryCode);
          case 19:
            if (franchiseId) {
              options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                franchise_id: franchiseId
              });
            }
            if (body !== null && body !== void 0 && body.country_code) {
              body === null || body === void 0 || delete body.country_code;
            }
            _context6.next = 23;
            return ordering.setAccessToken(session.token).orderOptions().save(body, options);
          case 23:
            _yield$ordering$setAc3 = _context6.sent;
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
            return _context6.abrupt("return", !error);
          case 33:
            _context6.prev = 33;
            _context6.t0 = _context6["catch"](9);
            message = _context6.t0 !== null && _context6.t0 !== void 0 && (_err$message2 = _context6.t0.message) !== null && _err$message2 !== void 0 && _err$message2.includes('Internal error') ? 'INTERNAL_ERROR' : _context6.t0.message;
            setAlert({
              show: true,
              content: [message]
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            state.loading = false;
            return _context6.abrupt("return", false);
          case 40:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[9, 33]]);
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
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(product, cart, isQuickAddProduct) {
      var isPlatformProduct,
        countryCode,
        customerFromLocalStorage,
        userCustomerId,
        body,
        _yield$ordering$setAc5,
        _yield$ordering$setAc6,
        error,
        result,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            isPlatformProduct = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : false;
            _context7.prev = 1;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context7.next = 5;
            return strategy.getItem('country-code');
          case 5:
            countryCode = _context7.sent;
            _context7.next = 8;
            return strategy.getItem('user-customer', true);
          case 8:
            customerFromLocalStorage = _context7.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
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
            _context7.next = 13;
            return ordering.setAccessToken(session.token).carts().addProduct(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 13:
            _yield$ordering$setAc5 = _context7.sent;
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
              _context7.next = 23;
              break;
            }
            return _context7.abrupt("return", {
              error: error,
              result: result
            });
          case 23:
            return _context7.abrupt("return", !error);
          case 24:
            _context7.next = 34;
            break;
          case 26:
            _context7.prev = 26;
            _context7.t0 = _context7["catch"](1);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            if (!isPlatformProduct) {
              _context7.next = 33;
              break;
            }
            return _context7.abrupt("return", {
              error: true,
              result: _context7.t0.message
            });
          case 33:
            return _context7.abrupt("return", false);
          case 34:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 26]]);
    }));
    return function addProduct(_x7, _x8, _x9) {
      return _ref9.apply(this, arguments);
    };
  }();

  /**
   * Remove product to cart
   */
  var removeProduct = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(product, cart) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc7, _yield$ordering$setAc8, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context8.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context8.sent;
            _context8.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context8.sent;
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
            _context8.next = 12;
            return ordering.setAccessToken(session.token).carts().removeProduct(body, {
              headers: {
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 12:
            _yield$ordering$setAc7 = _context8.sent;
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
            return _context8.abrupt("return", !error);
          case 21:
            _context8.prev = 21;
            _context8.t0 = _context8["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context8.abrupt("return", false);
          case 25:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 21]]);
    }));
    return function removeProduct(_x10, _x11) {
      return _ref10.apply(this, arguments);
    };
  }();

  /**
   * Clear products of cart
   */
  var clearCart = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(uuid) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context9.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context9.sent;
            _context9.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context9.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = JSON.stringify({
              uuid: uuid,
              user_id: userCustomerId || session.user.id
            });
            _context9.next = 12;
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
          case 12:
            response = _context9.sent;
            _context9.next = 15;
            return response.json();
          case 15:
            _yield$response$json = _context9.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
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
            return _context9.abrupt("return", {
              error: error,
              result: result
            });
          case 23:
            _context9.prev = 23;
            _context9.t0 = _context9["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context9.abrupt("return", false);
          case 27:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 23]]);
    }));
    return function clearCart(_x12) {
      return _ref11.apply(this, arguments);
    };
  }();

  /**
   * Update product to cart
   */
  var updateProduct = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(product, cart, isQuickAddProduct) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc9, _yield$ordering$setAc10, error, result;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context10.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context10.sent;
            _context10.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context10.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              product: product,
              business_id: cart.business_id,
              user_id: userCustomerId || session.user.id
            };
            _context10.next = 12;
            return ordering.setAccessToken(session.token).carts().updateProduct(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 12:
            _yield$ordering$setAc9 = _context10.sent;
            _yield$ordering$setAc10 = _yield$ordering$setAc9.content;
            error = _yield$ordering$setAc10.error;
            result = _yield$ordering$setAc10.result;
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
            return _context10.abrupt("return", !error);
          case 21:
            _context10.prev = 21;
            _context10.t0 = _context10["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context10.abrupt("return", false);
          case 25:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 21]]);
    }));
    return function updateProduct(_x13, _x14, _x15) {
      return _ref12.apply(this, arguments);
    };
  }();

  /**
   * Apply coupon to cart
   */
  var applyCoupon = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(couponData, customParams) {
      var _state$carts;
      var countryCode, response, _result2, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc11, content, result;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            if (couponData.business_id) {
              _context11.next = 2;
              break;
            }
            throw new Error('`business_id` is required.');
          case 2:
            if (!(typeof couponData.coupon === 'undefined')) {
              _context11.next = 4;
              break;
            }
            throw new Error('`coupon` is required.');
          case 4:
            if (!(((_state$carts = state.carts["businessId:".concat(couponData.business_id)]) === null || _state$carts === void 0 ? void 0 : _state$carts.coupon) === couponData.coupon)) {
              _context11.next = 6;
              break;
            }
            return _context11.abrupt("return");
          case 6:
            _context11.prev = 6;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context11.next = 10;
            return strategy.getItem('country-code');
          case 10:
            countryCode = _context11.sent;
            if (!(customParams && isAlsea)) {
              _context11.next = 22;
              break;
            }
            _context11.next = 14;
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
          case 14:
            response = _context11.sent;
            _context11.next = 17;
            return response.json();
          case 17:
            _result2 = _context11.sent;
            if (!(_result2.message !== "Cup\xF3n v\xE1lido")) {
              _context11.next = 22;
              break;
            }
            setAlert({
              show: true,
              content: _result2.message === 'Not found' ? ['ERROR_INVALID_COUPON'] : [_result2.message]
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context11.abrupt("return");
          case 22:
            _context11.next = 24;
            return strategy.getItem('user-customer', true);
          case 24:
            customerFromLocalStorage = _context11.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              business_id: couponData.business_id,
              coupon: couponData.coupon,
              user_id: userCustomerId || session.user.id
            };
            _context11.next = 29;
            return ordering.setAccessToken(session.token).carts().applyCoupon(body, {
              headers: {
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 29:
            _yield$ordering$setAc11 = _context11.sent;
            content = _yield$ordering$setAc11.content;
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
            return _context11.abrupt("return", !result.error);
          case 37:
            _context11.prev = 37;
            _context11.t0 = _context11["catch"](6);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context11.abrupt("return", false);
          case 41:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[6, 37]]);
    }));
    return function applyCoupon(_x16, _x17) {
      return _ref13.apply(this, arguments);
    };
  }();
  var applyOffer = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(offerData) {
      var _offerData$force, countryCode, response, result;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            if (offerData.business_id) {
              _context12.next = 2;
              break;
            }
            throw new Error('`business_id` is required.');
          case 2:
            if (!(typeof offerData.coupon === 'undefined')) {
              _context12.next = 4;
              break;
            }
            throw new Error('`coupon` is required.');
          case 4:
            _context12.prev = 4;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context12.next = 8;
            return strategy.getItem('country-code');
          case 8:
            countryCode = _context12.sent;
            _context12.next = 11;
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
          case 11:
            response = _context12.sent;
            _context12.next = 14;
            return response.json();
          case 14:
            result = _context12.sent;
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
            return _context12.abrupt("return", !result.error);
          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](4);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context12.abrupt("return", false);
          case 24:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[4, 20]]);
    }));
    return function applyOffer(_x18) {
      return _ref14.apply(this, arguments);
    };
  }();
  var removeOffer = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(offerData) {
      var countryCode, offerRemoveData, response, result;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            if (offerData.business_id) {
              _context13.next = 2;
              break;
            }
            throw new Error('`business_id` is required.');
          case 2:
            if (!(typeof offerData.offer_id === 'undefined')) {
              _context13.next = 4;
              break;
            }
            throw new Error('`offer_id` is required.');
          case 4:
            _context13.prev = 4;
            _context13.next = 7;
            return strategy.getItem('country-code');
          case 7:
            countryCode = _context13.sent;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            offerRemoveData = {
              business_id: offerData.business_id,
              offer_id: offerData.offer_id
            };
            if (offerData.user_id) offerRemoveData.user_id = offerData.user_id;
            _context13.next = 13;
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
          case 13:
            response = _context13.sent;
            _context13.next = 16;
            return response.json();
          case 16:
            result = _context13.sent;
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
            return _context13.abrupt("return", !result.error);
          case 22:
            _context13.prev = 22;
            _context13.t0 = _context13["catch"](4);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context13.abrupt("return", false);
          case 26:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[4, 22]]);
    }));
    return function removeOffer(_x19) {
      return _ref15.apply(this, arguments);
    };
  }();

  /**
   * Apply coupon to cart
   */
  var changeDriverTip = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(businessId) {
      var _state$carts2;
      var driverTipRate,
        isFixedPrice,
        _body,
        countryCode,
        customerFromLocalStorage,
        userCustomerId,
        body,
        _yield$ordering$setAc12,
        _yield$ordering$setAc13,
        error,
        result,
        _args14 = arguments;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            driverTipRate = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : 0;
            isFixedPrice = _args14.length > 2 ? _args14[2] : undefined;
            if (businessId) {
              _context14.next = 4;
              break;
            }
            throw new Error('`businessId` is required.');
          case 4:
            if (!(!driverTipRate && driverTipRate !== 0)) {
              _context14.next = 6;
              break;
            }
            throw new Error('`driverTipRate` is required.');
          case 6:
            if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts2 = state.carts["businessId:".concat(businessId)]) === null || _state$carts2 === void 0 ? void 0 : _state$carts2.driver_tip_rate) === driverTipRate)) {
              _context14.next = 8;
              break;
            }
            return _context14.abrupt("return");
          case 8:
            _context14.prev = 8;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context14.next = 12;
            return strategy.getItem('country-code');
          case 12:
            countryCode = _context14.sent;
            _context14.next = 15;
            return strategy.getItem('user-customer', true);
          case 15:
            customerFromLocalStorage = _context14.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = (_body = {
              business_id: businessId
            }, _defineProperty(_body, isFixedPrice ? 'driver_tip' : 'driver_tip_rate', driverTipRate), _defineProperty(_body, "user_id", userCustomerId || session.user.id), _body);
            _context14.next = 20;
            return ordering.setAccessToken(session.token).carts().changeDriverTip(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 20:
            _yield$ordering$setAc12 = _context14.sent;
            _yield$ordering$setAc13 = _yield$ordering$setAc12.content;
            error = _yield$ordering$setAc13.error;
            result = _yield$ordering$setAc13.result;
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
            return _context14.abrupt("return", !error);
          case 29:
            _context14.prev = 29;
            _context14.t0 = _context14["catch"](8);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context14.abrupt("return", false);
          case 33:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[8, 29]]);
    }));
    return function changeDriverTip(_x20) {
      return _ref16.apply(this, arguments);
    };
  }();

  /**
   * Change payment method
   */
  var changePaymethod = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(businessId, paymethodId, paymethodData) {
      var _state$carts3;
      var countryCode, customerFromLocalStorage, userCustomerId, body, _yield$ordering$setAc14, _yield$ordering$setAc15, error, result;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            if (businessId) {
              _context15.next = 2;
              break;
            }
            throw new Error('`businessId` is required.');
          case 2:
            if (paymethodId) {
              _context15.next = 4;
              break;
            }
            throw new Error('`paymethodId` is required.');
          case 4:
            if (paymethodData) {
              _context15.next = 6;
              break;
            }
            throw new Error('`paymethodData` is required.');
          case 6:
            if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts3 = state.carts["businessId:".concat(businessId)]) === null || _state$carts3 === void 0 ? void 0 : _state$carts3.paymethodId) === paymethodId)) {
              _context15.next = 8;
              break;
            }
            return _context15.abrupt("return");
          case 8:
            _context15.prev = 8;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context15.next = 12;
            return strategy.getItem('country-code');
          case 12:
            countryCode = _context15.sent;
            _context15.next = 15;
            return strategy.getItem('user-customer', true);
          case 15:
            customerFromLocalStorage = _context15.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = {
              business_id: businessId,
              paymethod_id: paymethodId,
              paymethod_data: paymethodData,
              user_id: userCustomerId !== null && userCustomerId !== void 0 ? userCustomerId : session.user.id
            };
            _context15.next = 20;
            return ordering.setAccessToken(session.token).carts().changePaymethod(body, {
              headers: {
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 20:
            _yield$ordering$setAc14 = _context15.sent;
            _yield$ordering$setAc15 = _yield$ordering$setAc14.content;
            error = _yield$ordering$setAc15.error;
            result = _yield$ordering$setAc15.result;
            if (!error) {
              state.carts["businessId:".concat(result.business_id)] = result;
              events.emit('cart_updated', result);
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context15.abrupt("return", !error);
          case 29:
            _context15.prev = 29;
            _context15.t0 = _context15["catch"](8);
            return _context15.abrupt("return", false);
          case 32:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[8, 29]]);
    }));
    return function changePaymethod(_x21, _x22, _x23) {
      return _ref17.apply(this, arguments);
    };
  }();

  /**
   * Place cart
   */
  var placeCart = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(cardId, data) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, headers, _yield$ordering$setAc16, _yield$ordering$setAc17, error, result, orderObject;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context16.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context16.sent;
            _context16.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context16.sent;
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
            _context16.next = 14;
            return ordering.setAccessToken(session.token).carts(cardId).place(body, {
              headers: headers
            });
          case 14:
            _yield$ordering$setAc16 = _context16.sent;
            _yield$ordering$setAc17 = _yield$ordering$setAc16.content;
            error = _yield$ordering$setAc17.error;
            result = _yield$ordering$setAc17.result;
            if (error) {
              _context16.next = 22;
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
            _context16.next = 25;
            break;
          case 22:
            setAlert({
              show: true,
              content: result
            });
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context16.abrupt("return");
          case 25:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context16.abrupt("return", {
              error: error,
              result: result
            });
          case 29:
            _context16.prev = 29;
            _context16.t0 = _context16["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context16.abrupt("return", {
              error: true,
              result: [_context16.t0.message]
            });
          case 33:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 29]]);
    }));
    return function placeCart(_x24, _x25) {
      return _ref18.apply(this, arguments);
    };
  }();

  /**
   * Place multi carts
   */
  var placeMultiCarts = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(data, cartUuid) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, requestOptions, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context17.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context17.sent;
            _context17.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context17.sent;
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
            _context17.next = 13;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid, "/place"), requestOptions);
          case 13:
            response = _context17.sent;
            _context17.next = 16;
            return response.json();
          case 16:
            _yield$response$json2 = _context17.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
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
            return _context17.abrupt("return", {
              error: error,
              result: result
            });
          case 24:
            _context17.prev = 24;
            _context17.t0 = _context17["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context17.abrupt("return", {
              error: true,
              result: [_context17.t0.message]
            });
          case 28:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 24]]);
    }));
    return function placeMultiCarts(_x26, _x27) {
      return _ref19.apply(this, arguments);
    };
  }();

  /**
   * Confirm cart
   */
  var confirmCart = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(cardId, data) {
      var countryCode, customerFromLocalStorage, userCustomerId, body, fetchurl, _fetchurl, _fetchurl$content, error, result, cart;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context18.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context18.sent;
            _context18.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context18.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            body = _objectSpread(_objectSpread({}, data), {}, {
              user_id: userCustomerId || session.user.id
            });
            if (!(body.user_id === userCustomerId || data)) {
              _context18.next = 16;
              break;
            }
            _context18.next = 13;
            return ordering.setAccessToken(session.token).carts(cardId).confirmWithData(body, {
              headers: {
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 13:
            fetchurl = _context18.sent;
            _context18.next = 19;
            break;
          case 16:
            _context18.next = 18;
            return ordering.setAccessToken(session.token).carts(cardId).confirm(body, {
              headers: {
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            });
          case 18:
            fetchurl = _context18.sent;
          case 19:
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
            return _context18.abrupt("return", {
              error: error,
              result: result
            });
          case 25:
            _context18.prev = 25;
            _context18.t0 = _context18["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context18.abrupt("return", {
              error: true,
              result: [_context18.t0.message]
            });
          case 29:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 25]]);
    }));
    return function confirmCart(_x28, _x29) {
      return _ref20.apply(this, arguments);
    };
  }();

  /**
  * Confirm multi carts
  */
  var confirmMultiCarts = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(cartUuid) {
      var countryCode, requestOptions, response, _yield$response$json3, result, error;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context19.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context19.sent;
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
            _context19.next = 8;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid, "/confirm"), requestOptions);
          case 8:
            response = _context19.sent;
            _context19.next = 11;
            return response.json();
          case 11:
            _yield$response$json3 = _context19.sent;
            result = _yield$response$json3.result;
            error = _yield$response$json3.error;
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
            return _context19.abrupt("return", {
              error: error,
              result: result
            });
          case 19:
            _context19.prev = 19;
            _context19.t0 = _context19["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context19.abrupt("return", {
              error: true,
              result: [_context19.t0.message]
            });
          case 23:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 19]]);
    }));
    return function confirmMultiCarts(_x30) {
      return _ref21.apply(this, arguments);
    };
  }();

  /**
   * Reorder an order and get cart
   */
  var reorder = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(orderId, offAlert) {
      var countryCode, customerFromLocalStorage, userCustomerId, query, options, _yield$ordering$setAc18, _yield$ordering$setAc19, error, result;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context20.next = 4;
            return strategy.getItem('country-code');
          case 4:
            countryCode = _context20.sent;
            _context20.next = 7;
            return strategy.getItem('user-customer', true);
          case 7:
            customerFromLocalStorage = _context20.sent;
            userCustomerId = customerFromLocalStorage === null || customerFromLocalStorage === void 0 ? void 0 : customerFromLocalStorage.id;
            query = userCustomerId ? {
              user_id: userCustomerId
            } : null;
            options = {
              headers: {
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId(),
                'X-Country-Code-X': countryCode
              }
            };
            if (query) {
              options.query = query;
            }
            _context20.next = 14;
            return ordering.setAccessToken(session.token).orders(orderId).reorder(options);
          case 14:
            _yield$ordering$setAc18 = _context20.sent;
            _yield$ordering$setAc19 = _yield$ordering$setAc18.content;
            error = _yield$ordering$setAc19.error;
            result = _yield$ordering$setAc19.result;
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
            return _context20.abrupt("return", {
              error: error,
              result: result
            });
          case 23:
            _context20.prev = 23;
            _context20.t0 = _context20["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
            return _context20.abrupt("return", {
              error: true,
              result: [_context20.t0.message]
            });
          case 27:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 23]]);
    }));
    return function reorder(_x31, _x32) {
      return _ref22.apply(this, arguments);
    };
  }();
  var setOptionFromLocalStorage = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var _configState$configs3, _state$options13;
      var optionsLocalStorage;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return strategy.getItem('options', true);
          case 2:
            optionsLocalStorage = _context21.sent;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              options: isDisabledDefaultOpts ? {
                type: null,
                moment: null
              } : {
                type: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.type) || orderTypes[configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.default_order_type) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value],
                moment: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.moment) || null,
                address: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.address) || (state === null || state === void 0 || (_state$options13 = state.options) === null || _state$options13 === void 0 ? void 0 : _state$options13.address) || {},
                city_id: (optionsLocalStorage === null || optionsLocalStorage === void 0 ? void 0 : optionsLocalStorage.city_id) || null
              }
            }));
          case 4:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }));
    return function setOptionFromLocalStorage() {
      return _ref23.apply(this, arguments);
    };
  }();

  /**
  * get Latest past Order that has no review
  */
  var getLastOrderHasNoReview = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var pastOrderTypes, where, options, _yield$ordering$setAc20, _yield$ordering$setAc21, result, error, _noRviewOrder, _options5, _yield$ordering$setAc22, _yield$ordering$setAc23, _result3, _error2, noReviewOrders;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            if (!(session !== null && session !== void 0 && session.token)) {
              _context22.next = 38;
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
            _context22.next = 9;
            return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).orders().get(options);
          case 9:
            _yield$ordering$setAc20 = _context22.sent;
            _yield$ordering$setAc21 = _yield$ordering$setAc20.content;
            result = _yield$ordering$setAc21.result;
            error = _yield$ordering$setAc21.error;
            if (!(!error && (result === null || result === void 0 ? void 0 : result.length) > 0)) {
              _context22.next = 35;
              break;
            }
            _noRviewOrder = result === null || result === void 0 ? void 0 : result.find(function (order) {
              return !(order !== null && order !== void 0 && order.review);
            });
            if (!(_noRviewOrder !== null && _noRviewOrder !== void 0 && _noRviewOrder.cart_group_id)) {
              _context22.next = 32;
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
            _context22.next = 20;
            return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).orders().get(_options5);
          case 20:
            _yield$ordering$setAc22 = _context22.sent;
            _yield$ordering$setAc23 = _yield$ordering$setAc22.content;
            _result3 = _yield$ordering$setAc23.result;
            _error2 = _yield$ordering$setAc23.error;
            if (_error2) {
              _context22.next = 29;
              break;
            }
            noReviewOrders = _result3.filter(function (order) {
              return !(order !== null && order !== void 0 && order.review);
            });
            return _context22.abrupt("return", noReviewOrders);
          case 29:
            return _context22.abrupt("return", null);
          case 30:
            _context22.next = 33;
            break;
          case 32:
            return _context22.abrupt("return", _noRviewOrder);
          case 33:
            _context22.next = 36;
            break;
          case 35:
            return _context22.abrupt("return", null);
          case 36:
            _context22.next = 39;
            break;
          case 38:
            return _context22.abrupt("return", null);
          case 39:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }));
    return function getLastOrderHasNoReview() {
      return _ref24.apply(this, arguments);
    };
  }();
  var setStateValues = function setStateValues(values) {
    setState(_objectSpread(_objectSpread({}, state), values));
  };
  var setUserCustomerOptions = /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(params) {
      var _params$options, _params$customer;
      var options;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            options = (_params$options = params.options) !== null && _params$options !== void 0 ? _params$options : {};
            _context23.next = 4;
            return setUserCustomer((_params$customer = params.customer) !== null && _params$customer !== void 0 ? _params$customer : {}, true);
          case 4:
            _context23.next = 6;
            return updateOrderOptions(options);
          case 6:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 7:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }));
    return function setUserCustomerOptions(_x33) {
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
      setAlert({
        show: true,
        title: t('INFORMATION', 'Information'),
        content: t('ORDER_TYPE_CHANGED', 'the order type config has changed')
      });
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
    confirmMultiCarts: confirmMultiCarts
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
exports.OrderProvider = OrderProvider;
var useOrder = function useOrder() {
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
exports.useOrder = useOrder;