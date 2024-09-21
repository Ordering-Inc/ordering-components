"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
var _BusinessContext = require("../../contexts/BusinessContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _codeNumbers = require("../../constants/code-numbers");
var _timezones = require("../../constants/timezones");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
var PhoneAutocomplete = exports.PhoneAutocomplete = function PhoneAutocomplete(props) {
  var _orderState$options5;
  var UIComponent = props.UIComponent,
    isIos = props.isIos,
    businessSlug = props.businessSlug,
    urlPhone = props.urlPhone,
    propsToFetch = props.propsToFetch,
    isFromUrlPhone = props.isFromUrlPhone;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    setUserCustomerOptions = _useOrder2[1].setUserCustomerOptions;
  var _useBusiness = (0, _BusinessContext.useBusiness)(),
    _useBusiness2 = _slicedToArray(_useBusiness, 1),
    businessState = _useBusiness2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    phone = _useState2[0],
    setPhone = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState3 = (0, _react.useState)({
      customer: false,
      signup: false,
      error: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    openModal = _useState4[0],
    setOpenModal = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    customerState = _useState6[0],
    setCustomerState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      users: userCustomer ? [userCustomer] : [],
      loading: !!urlPhone,
      error: null,
      fetched: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    customersPhones = _useState8[0],
    setCustomersPhones = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    businessAddress = _useState10[0],
    setBusinessAddress = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: true,
      content: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    alertState = _useState12[0],
    setAlertState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    optionsState = _useState14[0],
    setOptionsState = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    localPhoneCode = _useState16[0],
    setLocalPhoneCode = _useState16[1];
  var reqState = {};
  /**
   * Get users from API
   */
  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_phone) {
      var _cellphone$toString, _cellphoneString$matc;
      var maxRetries, waitTime, cellphone, cellphoneString, cellphoneSplited, retryAttempt, conditions, source, request, timer, response, result, users, _reqState$users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            maxRetries = 3;
            waitTime = 60000;
            cellphone = _phone || phone || urlPhone;
            cellphoneString = cellphone === null || cellphone === void 0 || (_cellphone$toString = cellphone.toString) === null || _cellphone$toString === void 0 ? void 0 : _cellphone$toString.call(cellphone);
            cellphoneSplited = (cellphoneString === null || cellphoneString === void 0 || (_cellphoneString$matc = cellphoneString.match) === null || _cellphoneString$matc === void 0 ? void 0 : _cellphoneString$matc.call(cellphoneString, /.{1,7}/)) || [];
            retryAttempt = 1;
          case 6:
            if (!(retryAttempt <= maxRetries)) {
              _context.next = 37;
              break;
            }
            _context.prev = 7;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: true
            }));
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: isIos ? true : encodeURI(true)
              }, {
                conector: 'OR',
                conditions: [{
                  attribute: 'cellphone',
                  value: {
                    condition: isFromUrlPhone ? '=' : 'like',
                    value: isFromUrlPhone ? cellphoneString : isIos ? "%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%") : encodeURI("%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%"))
                  }
                }, {
                  attribute: 'phone',
                  value: {
                    condition: isFromUrlPhone ? '=' : 'like',
                    value: isFromUrlPhone ? cellphoneString : isIos ? "%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%") : encodeURI("%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%"))
                  }
                }]
              }]
            };
            source = {};
            reqState.users = source;
            request = ordering.setAccessToken(token).users().select(propsToFetch).where(conditions).get({
              cancelToken: source
            });
            timer = new Promise(function (resolve, reject) {
              setTimeout(function () {
                return reject(new Error('Timeout exceeded'));
              }, waitTime);
            });
            _context.next = 16;
            return Promise.race([request, timer]);
          case 16:
            response = _context.sent;
            if (!(response.content && response.content.result)) {
              _context.next = 24;
              break;
            }
            result = response.content.result;
            users = result.filter(function (user) {
              var _user$cellphone;
              return (_user$cellphone = user.cellphone) === null || _user$cellphone === void 0 ? void 0 : _user$cellphone.includes(cellphoneString);
            });
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              users: users,
              loading: false,
              fetched: true
            }));
            return _context.abrupt("break", 37);
          case 24:
            throw new Error('Error');
          case 25:
            _context.next = 34;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](7);
            ((_reqState$users = reqState.users) === null || _reqState$users === void 0 ? void 0 : _reqState$users.cancel) && reqState.users.cancel();
            if (!(retryAttempt < maxRetries)) {
              _context.next = 33;
              break;
            }
            _context.next = 33;
            return new Promise(function (resolve) {
              return setTimeout(resolve, waitTime);
            });
          case 33:
            if (retryAttempt === maxRetries) {
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: false,
                error: t('ERROR_MULTIPLE_FETCH', 'Exceeded the maximum number of retries. Reload the page.')
              }));
            }
          case 34:
            retryAttempt++;
            _context.next = 6;
            break;
          case 37:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 27]]);
    }));
    return function getUsers(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * fetch business to get its address
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ordering.businesses('mcbonalds').select(['address', 'location', 'distance']).parameters().get();
          case 2:
            _yield$ordering$busin = _context2.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error) {
              _context2.next = 9;
              break;
            }
            setAlertState({
              open: true,
              content: result
            });
            return _context2.abrupt("return");
          case 9:
            setBusinessAddress(result);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  var checkAddress = function checkAddress(address1, address2) {
    var props = ['address', 'location'];
    var values = [];
    props.forEach(function (prop) {
      if (address1 && address1[prop]) {
        if (prop === 'location') {
          values.push(address2[prop].lat === address1[prop].lat && address2[prop].lng === address1[prop].lng);
        } else {
          values.push(address2[prop] === address1[prop]);
        }
      } else {
        values.push(!address2[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var setGuestOptions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
      var _businessState$busine;
      var customer, _ref3$type, type, onRedirect, businessObj, userObj, _addressSelected, _orderState$options, _yield$ordering$users, _yield$ordering$users2, resultAddresses, error, userAddressFinded, addressSelected, _response$content$res, _addressSelected2, response, addressResponse, options, _addressSelected3;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            customer = _ref3.customer, _ref3$type = _ref3.type, type = _ref3$type === void 0 ? 3 : _ref3$type, onRedirect = _ref3.onRedirect;
            businessObj = (_businessState$busine = businessState === null || businessState === void 0 ? void 0 : businessState.business) !== null && _businessState$busine !== void 0 ? _businessState$busine : businessAddress;
            userObj = customer !== null && customer !== void 0 ? customer : user;
            if (!(!businessObj || !(userObj !== null && userObj !== void 0 && userObj.id))) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return");
          case 5:
            _context3.prev = 5;
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: true
            }));
            _context3.next = 9;
            return ordering.users(userObj.id).addresses().get();
          case 9:
            _yield$ordering$users = _context3.sent;
            _yield$ordering$users2 = _yield$ordering$users.content;
            resultAddresses = _yield$ordering$users2.result;
            error = _yield$ordering$users2.error;
            if (!error) {
              _context3.next = 16;
              break;
            }
            setAlertState({
              open: true,
              content: resultAddresses
            });
            return _context3.abrupt("return");
          case 16:
            userAddressFinded = resultAddresses.find(function (address) {
              return (address === null || address === void 0 ? void 0 : address.location) && checkAddress(businessObj, address) && address;
            });
            addressSelected = userAddressFinded !== null && userAddressFinded !== void 0 ? userAddressFinded : null;
            if ((_addressSelected = addressSelected) !== null && _addressSelected !== void 0 && _addressSelected.id) {
              _context3.next = 32;
              break;
            }
            _context3.next = 21;
            return ordering.users(userObj.id).addresses().save({
              address: businessObj.address,
              location: businessObj.location
            });
          case 21:
            response = _context3.sent;
            if (!response.content.error) {
              _context3.next = 25;
              break;
            }
            setAlertState({
              open: true,
              content: response.content.result
            });
            return _context3.abrupt("return");
          case 25:
            addressSelected = (_response$content$res = response.content.result) !== null && _response$content$res !== void 0 ? _response$content$res : null;
            _context3.next = 28;
            return ordering.users(userObj.id).addresses((_addressSelected2 = addressSelected) === null || _addressSelected2 === void 0 ? void 0 : _addressSelected2.id).save({
              default: true
            });
          case 28:
            addressResponse = _context3.sent;
            if (!addressResponse.content.error) {
              _context3.next = 32;
              break;
            }
            setAlertState({
              open: true,
              content: addressResponse.content.result
            });
            return _context3.abrupt("return");
          case 32:
            options = {
              type: type
            };
            if (addressSelected && !checkAddress(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address, addressSelected)) {
              options.address_id = (_addressSelected3 = addressSelected) === null || _addressSelected3 === void 0 ? void 0 : _addressSelected3.id;
            }
            if (!(options !== null && options !== void 0 && options.address_id || (user === null || user === void 0 ? void 0 : user.id) !== (customer === null || customer === void 0 ? void 0 : customer.id))) {
              _context3.next = 37;
              break;
            }
            _context3.next = 37;
            return setUserCustomerOptions({
              options: options,
              customer: userObj
            });
          case 37:
            onRedirect && onRedirect();
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: false
            }));
            _context3.next = 45;
            break;
          case 41:
            _context3.prev = 41;
            _context3.t0 = _context3["catch"](5);
            setAlertState({
              open: true,
              content: _context3.t0.message
            });
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: false
            }));
          case 45:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 41]]);
    }));
    return function setGuestOptions(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _customersPhones$user;
    if (urlPhone) return;
    if (phone && phone.length >= 7 && ((customersPhones === null || customersPhones === void 0 || (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.length) === 0 || phone.length === 7) && !customersPhones.loading) {
      getUsers();
    }
    if (phone && phone.length < 7 || !phone) {
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: userCustomer ? [userCustomer] : []
      }));
    }
  }, [phone]);
  (0, _react.useEffect)(function () {
    if (urlPhone) {
      getUsers();
      return;
    }
    if (urlPhone && urlPhone.length < 7) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        error: true
      }));
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: [],
        loading: false
      }));
    }
  }, [urlPhone]);
  (0, _react.useEffect)(function () {
    var _businessState$busine2;
    if (businessSlug && !(businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && _businessState$busine2.id)) {
      getBusiness();
    }
  }, [businessSlug]);
  (0, _react.useEffect)(function () {
    if (!window.localStorage.getItem('local_phone_code')) {
      var _CODES$find, _CODES$find2;
      var countriesElevenPhoneLength = ['GB'];
      var countriesElevenPhone = countriesElevenPhoneLength.find(function (val) {
        var _configs$default_coun, _configs$default_coun2;
        return val === (configs === null || configs === void 0 || (_configs$default_coun = configs.default_country_code) === null || _configs$default_coun === void 0 || (_configs$default_coun = _configs$default_coun.value) === null || _configs$default_coun === void 0 || (_configs$default_coun2 = _configs$default_coun.toUpperCase) === null || _configs$default_coun2 === void 0 ? void 0 : _configs$default_coun2.call(_configs$default_coun));
      });
      var localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var localCountry = _timezones.TIMEZONES[localTimezone];
      var _localPhoneCode = countriesElevenPhone ? (_CODES$find = _codeNumbers.CODES.find(function (code) {
        return code.countryCode === countriesElevenPhone;
      })) === null || _CODES$find === void 0 ? void 0 : _CODES$find.phoneCode : (_CODES$find2 = _codeNumbers.CODES.find(function (code) {
        return code.countryName === localCountry;
      })) === null || _CODES$find2 === void 0 ? void 0 : _CODES$find2.phoneCode;
      window.localStorage.setItem('local_phone_code', "+".concat(_localPhoneCode));
      setLocalPhoneCode("+".concat(_localPhoneCode));
    } else {
      setLocalPhoneCode(window.localStorage.getItem('local_phone_code'));
    }
  }, []);
  (0, _react.useEffect)(function () {
    var _orderState$options2, _orderState$options3;
    if (userCustomer !== null && userCustomer !== void 0 && userCustomer.id && orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.user_id && (userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) !== (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.user_id)) {
      var _orderState$options4;
      setUserCustomerOptions({
        options: {
          user_id: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
          type: orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type
        },
        customer: userCustomer
      });
    }
  }, [userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id, orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.user_id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    phone: phone,
    customerState: customerState,
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    onChangeNumber: function onChangeNumber(phone) {
      return setPhone(phone);
    },
    openModal: openModal,
    setOpenModal: setOpenModal,
    setCustomerState: setCustomerState,
    setBusinessAddressToUser: setGuestOptions,
    alertState: alertState,
    optionsState: optionsState,
    checkAddress: checkAddress,
    localPhoneCode: localPhoneCode,
    getUsers: getUsers
  })));
};
PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'metadata']
};