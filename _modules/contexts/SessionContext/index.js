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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t5 in e) "default" !== _t5 && {}.hasOwnProperty.call(e, _t5) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t5)) && (i.get || i.set) ? o(f, _t5, i) : f[_t5] = e[_t5]); return f; })(e, t); }
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$getValuesFromL, auth, token, user, device_code;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return getValuesFromLocalStorage();
          case 1:
            _yield$getValuesFromL = _context.v;
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
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function setValuesFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getValuesFromLocalStorage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var auth, token, user, device_code, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return strategy.getItem('token');
          case 1:
            auth = _context2.v;
            _context2.n = 2;
            return strategy.getItem('token');
          case 2:
            token = _context2.v;
            _context2.n = 3;
            return strategy.getItem('user', true);
          case 3:
            user = _context2.v;
            _context2.n = 4;
            return strategy.getItem('device_code');
          case 4:
            device_code = _context2.v;
            return _context2.a(2, {
              auth: auth,
              token: token,
              user: user,
              device_code: device_code
            });
          case 5:
            _context2.p = 5;
            _t = _context2.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 5]]);
    }));
    return function getValuesFromLocalStorage() {
      return _ref3.apply(this, arguments);
    };
  }();
  var login = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return strategy.setItem('token', values === null || values === void 0 ? void 0 : values.token);
          case 1:
            _context3.n = 2;
            return strategy.setItem('user', values === null || values === void 0 ? void 0 : values.user, true);
          case 2:
            if (!(values !== null && values !== void 0 && values.device_code)) {
              _context3.n = 3;
              break;
            }
            _context3.n = 3;
            return strategy.setItem('device_code', values === null || values === void 0 ? void 0 : values.device_code);
          case 3:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              auth: true,
              user: values === null || values === void 0 ? void 0 : values.user,
              token: values === null || values === void 0 ? void 0 : values.token,
              loading: false,
              device_code: (values === null || values === void 0 ? void 0 : values.device_code) || null
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function login(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var logout = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var countryCodeFromLocalStorage;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return strategy.removeItem('token');
          case 1:
            _context4.n = 2;
            return strategy.removeItem('user');
          case 2:
            _context4.n = 3;
            return strategy.getItem('country-code');
          case 3:
            countryCodeFromLocalStorage = _context4.v;
            if (!countryCodeFromLocalStorage) {
              _context4.n = 4;
              break;
            }
            _context4.n = 4;
            return strategy.removeItem('country-code');
          case 4:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              auth: false,
              user: null,
              token: null,
              loading: false
            }));
          case 5:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function logout() {
      return _ref5.apply(this, arguments);
    };
  }();
  var changeUser = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(user) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return strategy.setItem('user', user, true);
          case 1:
            setState(_objectSpread(_objectSpread({}, state), {}, {
              user: user,
              loading: false
            }));
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function changeUser(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  var checkLocalStorage = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _yield$getValuesFromL2, token, user, _t2;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return getValuesFromLocalStorage();
          case 1:
            _yield$getValuesFromL2 = _context6.v;
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
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t2 = _context6.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return function checkLocalStorage() {
      return _ref7.apply(this, arguments);
    };
  }();
  var refreshUserInfo = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var _state$user, requestOptions, response, _yield$response$json, result, error, _t3;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            requestOptions = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(state.token),
                'X-App-X': ordering === null || ordering === void 0 ? void 0 : ordering.appId
              }
            };
            _context7.n = 1;
            return fetch("".concat(ordering.root, "/users/").concat((_state$user = state.user) === null || _state$user === void 0 ? void 0 : _state$user.id), requestOptions);
          case 1:
            response = _context7.v;
            _context7.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context7.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context7.n = 4;
              break;
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              user: result,
              loading: false
            }));
            _context7.n = 3;
            return strategy.setItem('user', result, true);
          case 3:
            _context7.n = 5;
            break;
          case 4:
            showToast(_ToastContext.ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'));
          case 5:
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t3 = _context7.v;
            showToast(_ToastContext.ToastType.Error, t('FAILED_TO_REFRESH_USER', 'Failed to refresh user'));
          case 7:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 6]]);
    }));
    return function refreshUserInfo() {
      return _ref8.apply(this, arguments);
    };
  }();
  var verifyTokenActive = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _state$user2;
      var requestOptions, response, _yield$response$json2, error, _t4;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            if (state !== null && state !== void 0 && state.auth && state !== null && state !== void 0 && state.token && state !== null && state !== void 0 && (_state$user2 = state.user) !== null && _state$user2 !== void 0 && _state$user2.mono_session) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            _context8.p = 1;
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(state === null || state === void 0 ? void 0 : state.token)
              }
            };
            _context8.n = 2;
            return fetch("".concat(ordering.root, "/users/me?params=id"), requestOptions);
          case 2:
            response = _context8.v;
            _context8.n = 3;
            return response.json();
          case 3:
            _yield$response$json2 = _context8.v;
            error = _yield$response$json2.error;
            if (error) {
              logout();
              showToast(_ToastContext.ToastType.Error, t('ACCOUNT_LOGGED_IN_OTHER_DEVICE', 'Account logged in other device', 5000));
            }
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t4 = _context8.v;
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 4]]);
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