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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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