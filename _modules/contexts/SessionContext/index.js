"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSession = exports.SessionProvider = exports.SessionContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ApiContext = require("../ApiContext");
var _ToastContext = require("../ToastContext");
var _LanguageContext = require("../LanguageContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
var SessionContext = exports.SessionContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
var SessionProvider = exports.SessionProvider = function SessionProvider(_ref) {
  var _state$user4;
  var children = _ref.children,
    strategy = _ref.strategy;
  var _useState = (0, _react.useState)({
      auth: null,
      token: null,
      user: null,
      loading: true,
      device_code: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var setValuesFromLocalStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$getValuesFromL, auth, token, user, device_code;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getValuesFromLocalStorage();
          case 2:
            _yield$getValuesFromL = _context.sent;
            auth = _yield$getValuesFromL.auth;
            token = _yield$getValuesFromL.token;
            user = _yield$getValuesFromL.user;
            device_code = _yield$getValuesFromL.device_code;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              auth: auth,
              token: token,
              user: user,
              loading: false,
              device_code: device_code
            }));
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function setValuesFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getValuesFromLocalStorage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var auth, token, user, device_code;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return strategy.getItem('token');
          case 3:
            auth = _context2.sent;
            _context2.next = 6;
            return strategy.getItem('token');
          case 6:
            token = _context2.sent;
            _context2.next = 9;
            return strategy.getItem('user', true);
          case 9:
            user = _context2.sent;
            _context2.next = 12;
            return strategy.getItem('device_code');
          case 12:
            device_code = _context2.sent;
            return _context2.abrupt("return", {
              auth: auth,
              token: token,
              user: user,
              device_code: device_code
            });
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 16]]);
    }));
    return function getValuesFromLocalStorage() {
      return _ref3.apply(this, arguments);
    };
  }();
  var login = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return strategy.setItem('token', values === null || values === void 0 ? void 0 : values.token);
          case 2:
            _context3.next = 4;
            return strategy.setItem('user', values === null || values === void 0 ? void 0 : values.user, true);
          case 4:
            if (!(values !== null && values !== void 0 && values.device_code)) {
              _context3.next = 7;
              break;
            }
            _context3.next = 7;
            return strategy.setItem('device_code', values === null || values === void 0 ? void 0 : values.device_code);
          case 7:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              auth: true,
              user: values === null || values === void 0 ? void 0 : values.user,
              token: values === null || values === void 0 ? void 0 : values.token,
              loading: false,
              device_code: (values === null || values === void 0 ? void 0 : values.device_code) || null
            }));
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function login(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var logout = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var countryCodeFromLocalStorage;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return strategy.removeItem('token');
          case 2:
            _context4.next = 4;
            return strategy.removeItem('user');
          case 4:
            _context4.next = 6;
            return strategy.getItem('country-code');
          case 6:
            countryCodeFromLocalStorage = _context4.sent;
            if (!countryCodeFromLocalStorage) {
              _context4.next = 10;
              break;
            }
            _context4.next = 10;
            return strategy.removeItem('country-code');
          case 10:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              auth: false,
              user: null,
              token: null,
              loading: false
            }));
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function logout() {
      return _ref5.apply(this, arguments);
    };
  }();
  var changeUser = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(user) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return strategy.setItem('user', user, true);
          case 2:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              user: user,
              loading: false
            }));
          case 3:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function changeUser(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  var checkLocalStorage = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _yield$getValuesFromL2, token, user;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return getValuesFromLocalStorage();
          case 3:
            _yield$getValuesFromL2 = _context6.sent;
            token = _yield$getValuesFromL2.token;
            user = _yield$getValuesFromL2.user;
            if (token && !state.token) {
              login({
                user: user,
                token: token
              });
            }
            if (!token && state.token || !(user !== null && user !== void 0 && user.enabled)) {
              logout();
            }
            _context6.next = 13;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 10]]);
    }));
    return function checkLocalStorage() {
      return _ref7.apply(this, arguments);
    };
  }();
  var refreshUserInfo = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _state$user, requestOptions, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            requestOptions = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(state.token),
                'X-App-X': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            };
            _context7.next = 4;
            return fetch("".concat(ordering.root, "/users/").concat((_state$user = state.user) === null || _state$user === void 0 ? void 0 : _state$user.id), requestOptions);
          case 4:
            response = _context7.sent;
            _context7.next = 7;
            return response.json();
          case 7:
            _yield$response$json = _context7.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context7.next = 16;
              break;
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              user: result,
              loading: false
            }));
            _context7.next = 14;
            return strategy.setItem('user', result, true);
          case 14:
            _context7.next = 17;
            break;
          case 16:
            showToast(_ToastContext.ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'));
          case 17:
            _context7.next = 22;
            break;
          case 19:
            _context7.prev = 19;
            _context7.t0 = _context7["catch"](0);
            showToast(_ToastContext.ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'));
          case 22:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 19]]);
    }));
    return function refreshUserInfo() {
      return _ref8.apply(this, arguments);
    };
  }();
  var verifyTokenActive = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _state$user2;
      var requestOptions, response, _yield$response$json2, error;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            if (state !== null && state !== void 0 && state.auth && state !== null && state !== void 0 && state.token && state !== null && state !== void 0 && (_state$user2 = state.user) !== null && _state$user2 !== void 0 && _state$user2.mono_session) {
              _context8.next = 2;
              break;
            }
            return _context8.abrupt("return");
          case 2:
            _context8.prev = 2;
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(state === null || state === void 0 ? void 0 : state.token)
              }
            };
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/users/me?params=id"), requestOptions);
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            _yield$response$json2 = _context8.sent;
            error = _yield$response$json2.error;
            if (error) {
              logout();
              showToast(_ToastContext.ToastType.Error, t('ACCOUNT_LOGGED_IN_OTHER_DEVICE', 'Account logged in other device', 5000));
            }
            _context8.next = 16;
            break;
          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](2);
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[2, 14]]);
    }));
    return function verifyTokenActive() {
      return _ref9.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      checkLocalStorage();
    }, 2000);
    return function () {
      return clearInterval(interval);
    };
  }, [JSON.stringify(state)]);
  (0, _react.useEffect)(function () {
    setValuesFromLocalStorage();
  }, []);
  (0, _react.useEffect)(function () {
    var _state$user3;
    var interval = null;
    if (state !== null && state !== void 0 && state.auth && state !== null && state !== void 0 && state.token && state !== null && state !== void 0 && (_state$user3 = state.user) !== null && _state$user3 !== void 0 && _state$user3.mono_session) {
      interval = setInterval(function () {
        verifyTokenActive();
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return function () {
      return clearInterval(interval);
    };
  }, [state === null || state === void 0 ? void 0 : state.auth, state === null || state === void 0 ? void 0 : state.token, state === null || state === void 0 || (_state$user4 = state.user) === null || _state$user4 === void 0 ? void 0 : _state$user4.mono_session]);
  var functions = {
    login: login,
    logout: logout,
    changeUser: changeUser,
    refreshUserInfo: refreshUserInfo
  };
  return /*#__PURE__*/_react.default.createElement(SessionContext.Provider, {
    value: [state, functions]
  }, children);
};

/**
 * Hook to get and update session state
 */
var useSession = exports.useSession = function useSession() {
  var sessionManager = (0, _react.useContext)(SessionContext);
  return sessionManager || [{}, function () {}];
};