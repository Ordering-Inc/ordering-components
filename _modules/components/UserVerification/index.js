"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserVerification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t5 in e) "default" !== _t5 && {}.hasOwnProperty.call(e, _t5) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t5)) && (i.get || i.set) ? o(f, _t5, i) : f[_t5] = e[_t5]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
 * Component to manage User Verification behavior without UI component
 */
var UserVerification = exports.UserVerification = function UserVerification(props) {
  var UIComponent = props.UIComponent;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    changeUser = _useSession2[1].changeUser;
  var _useState = (0, _react.useState)({
      loadingSendCode: false,
      resultSendCode: null,
      errorSendCode: null,
      loadingCheckCode: false,
      resultCheckCode: null,
      errorCheckCode: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    verifyEmailState = _useState2[0],
    setVerifyEmailState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loadingSendCode: false,
      resultSendCode: null,
      errorSendCode: null,
      loadingCheckCode: false,
      resultCheckCode: null,
      errorCheckCode: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    verifyPhoneState = _useState4[0],
    setVerifyPhoneState = _useState4[1];

  /**
   * function to send verify code for email
   * @param {Object} values object with type, channel, size, email values
   */
  var sendVerifyEmailCode = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(values) {
      var _values$type, _values$channel, _values$size, response, _yield$response$json, error, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
              loadingSendCode: true
            }));
            _context.n = 1;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                type: (_values$type = values === null || values === void 0 ? void 0 : values.type) !== null && _values$type !== void 0 ? _values$type : 3,
                channel: (_values$channel = values === null || values === void 0 ? void 0 : values.channel) !== null && _values$channel !== void 0 ? _values$channel : 1,
                size: (_values$size = values === null || values === void 0 ? void 0 : values.size) !== null && _values$size !== void 0 ? _values$size : 6,
                email: values === null || values === void 0 ? void 0 : values.email
              })
            });
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
              loadingSendCode: false,
              resultSendCode: error ? null : result,
              errorSendCode: error ? typeof result === 'string' ? [result] : result : null
            }));
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
              loadingSendCode: false,
              errorSendCode: [_t.message]
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function sendVerifyEmailCode(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * function to check code for verify user email
   * @param {Object} values object with channel and code values
   */
  var checkVerifyEmailCode = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values) {
      var _values$channel2, response, _yield$response$json2, error, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
              loadingCheckCode: true
            }));
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/verify"), {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                channel: (_values$channel2 = values === null || values === void 0 ? void 0 : values.channel) !== null && _values$channel2 !== void 0 ? _values$channel2 : 1,
                code: values === null || values === void 0 ? void 0 : values.code
              })
            });
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context2.v;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (result !== null && result !== void 0 && result.id && !error) {
              changeUser(_objectSpread(_objectSpread({}, user), result));
            }
            setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
              loadingCheckCode: false,
              resultCheckCode: error ? null : result,
              errorSendCode: error ? typeof result === 'string' ? [result] : result : null
            }));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
              loadingCheckCode: false,
              errorCheckCode: [_t2.message]
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function checkVerifyEmailCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * function for clean errors state
   */
  var cleanErrorsState = function cleanErrorsState(value) {
    if (value === 'phone') {
      setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
        errorCheckCode: null,
        errorSendCode: null
      }));
      return;
    }
    setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
      errorCheckCode: null,
      errorSendCode: null
    }));
  };

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      var _values$type2, _values$channel3, _values$size2, response, _yield$response$json3, error, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loadingSendCode: true,
              errorCheckCode: false
            }));
            _context3.n = 1;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                type: (_values$type2 = values === null || values === void 0 ? void 0 : values.type) !== null && _values$type2 !== void 0 ? _values$type2 : 2,
                channel: (_values$channel3 = values === null || values === void 0 ? void 0 : values.channel) !== null && _values$channel3 !== void 0 ? _values$channel3 : 2,
                size: (_values$size2 = values === null || values === void 0 ? void 0 : values.size) !== null && _values$size2 !== void 0 ? _values$size2 : 4,
                cellphone: values === null || values === void 0 ? void 0 : values.cellphone,
                country_phone_code: values === null || values === void 0 ? void 0 : values.country_phone_code
              })
            });
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.json();
          case 2:
            _yield$response$json3 = _context3.v;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loadingSendCode: false,
              resultSendCode: error ? null : result,
              errorSendCode: error ? typeof result === 'string' ? [result] : result : null
            }));
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loadingSendCode: false,
              errorSendCode: [_t3.message]
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 3]]);
    }));
    return function sendVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(values) {
      var _values$channel4, response, _yield$response$json4, error, result, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loadingCheckCode: true
            }));
            _context4.n = 1;
            return fetch("".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/verify"), {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                channel: (_values$channel4 = values === null || values === void 0 ? void 0 : values.channel) !== null && _values$channel4 !== void 0 ? _values$channel4 : 2,
                code: values === null || values === void 0 ? void 0 : values.code
              })
            });
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            _yield$response$json4 = _context4.v;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            if (result !== null && result !== void 0 && result.id && !error) {
              changeUser(_objectSpread(_objectSpread({}, user), result));
            }
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loadingCheckCode: false,
              resultCheckCode: error ? null : result,
              errorSendCode: error ? typeof result === 'string' ? [result] : result : null
            }));
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loadingCheckCode: false,
              errorCheckCode: [_t4.message]
            }));
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function checkVerifyPhoneCode(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    verifyEmailState: verifyEmailState,
    verifyPhoneState: verifyPhoneState,
    sendVerifyEmailCode: sendVerifyEmailCode,
    sendVerifyPhoneCode: sendVerifyPhoneCode,
    checkVerifyEmailCode: checkVerifyEmailCode,
    checkVerifyPhoneCode: checkVerifyPhoneCode,
    cleanErrorsState: cleanErrorsState
  })));
};