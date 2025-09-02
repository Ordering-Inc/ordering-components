"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutAction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
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
 * Component to manage logout behavior without UI component
 */
var LogoutAction = exports.LogoutAction = function LogoutAction(props) {
  var _configs$facebook_id3, _configs$google_login2;
  var UIComponent = props.UIComponent,
    handleSuccessLogout = props.handleSuccessLogout,
    token = props.token,
    isNative = props.isNative,
    useDefualtSessionManager = props.useDefualtSessionManager,
    handleCustomLogoutClick = props.handleCustomLogoutClick,
    isDriverApp = props.isDriverApp;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    data = _useSession2[0],
    logout = _useSession2[1].logout;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  (0, _react.useEffect)(function () {
    var _configs$facebook_id;
    if (configs !== null && configs !== void 0 && (_configs$facebook_id = configs.facebook_id) !== null && _configs$facebook_id !== void 0 && _configs$facebook_id.value && !isNative) {
      window.fbAsyncInit = function () {
        var _configs$facebook_id2;
        window.FB.init({
          appId: configs === null || configs === void 0 || (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value,
          cookie: true,
          xfbml: false,
          version: 'v7.0',
          status: true
        });
      };
      if (window.document.getElementById('facebook-jssdk')) {
        return;
      }
      var js = window.document.createElement('script');
      var fjs = window.document.getElementsByTagName('script')[0];
      js.id = 'facebook-jssdk';
      js.async = true;
      js.defer = true;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }
  }, [configs === null || configs === void 0 || (_configs$facebook_id3 = configs.facebook_id) === null || _configs$facebook_id3 === void 0 ? void 0 : _configs$facebook_id3.value]);
  (0, _react.useEffect)(function () {
    var _configs$google_login;
    if (configs !== null && configs !== void 0 && (_configs$google_login = configs.google_login_client_id) !== null && _configs$google_login !== void 0 && _configs$google_login.value && !isNative) {
      var js = window.document.createElement('script');
      js.id = 'google-login';
      js.src = 'https://apis.google.com/js/api.js';
      js.async = true;
      js.defer = true;
      js.onload = function () {
        window.gapi.load('auth2', function () {});
      };
      window.document.body.appendChild(js);
      return function () {
        var element = document.getElementById('google-login');
        if (element) {
          element.parentNode.removeChild(element);
        }
      };
    }
  }, [configs === null || configs === void 0 || (_configs$google_login2 = configs.google_login_client_id) === null || _configs$google_login2 === void 0 ? void 0 : _configs$google_login2.value]);

  /**
   * Default fuction for logout workflow
   */
  var handleLogoutClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(bodyParams) {
      var _response$content, _response$content2, response, _response$content3, _response$content4, accessToken, body, funtionFetch, _yield$funtionFetch, _yield$funtionFetch$c, error, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (handleCustomLogoutClick) {
              handleCustomLogoutClick && handleCustomLogoutClick();
            }
            _context.p = 1;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            if (!isDriverApp) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return getActiveOrders();
          case 2:
            response = _context.v;
            if (!(response !== null && response !== void 0 && (_response$content = response.content) !== null && _response$content !== void 0 && _response$content.error || response !== null && response !== void 0 && (_response$content2 = response.content) !== null && _response$content2 !== void 0 && (_response$content2 = _response$content2.result) !== null && _response$content2 !== void 0 && (_response$content2 = _response$content2[0]) !== null && _response$content2 !== void 0 && _response$content2.id)) {
              _context.n = 3;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: response !== null && response !== void 0 && (_response$content3 = response.content) !== null && _response$content3 !== void 0 && _response$content3.error ? response === null || response === void 0 || (_response$content4 = response.content) === null || _response$content4 === void 0 ? void 0 : _response$content4.result : t('ERROR_USER_LOGOUT_YOU_HAVE_ASSIGNED_ORDERS', 'Can\'t logout, You have assigned orders')
              },
              loading: false
            });
            return _context.a(2);
          case 3:
            accessToken = token || data.token;
            body = bodyParams && bodyParams !== null && bodyParams !== void 0 && bodyParams.notification_token ? {
              notification_app: bodyParams === null || bodyParams === void 0 ? void 0 : bodyParams.notification_app,
              notification_token: bodyParams === null || bodyParams === void 0 ? void 0 : bodyParams.notification_token,
              token_notification: bodyParams === null || bodyParams === void 0 ? void 0 : bodyParams.notification_token
            } : null;
            funtionFetch = body ? ordering.setAccessToken(accessToken).users().logout(body) : ordering.setAccessToken(accessToken).users().logout();
            _context.n = 4;
            return funtionFetch;
          case 4:
            _yield$funtionFetch = _context.v;
            _yield$funtionFetch$c = _yield$funtionFetch.content;
            error = _yield$funtionFetch$c.error;
            result = _yield$funtionFetch$c.result;
            if (error) {
              _context.n = 5;
              break;
            }
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            if (useDefualtSessionManager) {
              logout();
            }
            if (handleSuccessLogout) {
              handleSuccessLogout();
            }
            return _context.a(2, true);
          case 5:
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            return _context.a(2, false);
          case 6:
            _context.p = 6;
            _t = _context.v;
            setFormState({
              result: {
                error: true,
                result: _t.message
              },
              loading: false
            });
            return _context.a(2, false);
        }
      }, _callee, null, [[1, 6]]);
    }));
    return function handleLogoutClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getActiveOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var options, accessToken, orderStatus, propsToFetch, functionFetch, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            options = {
              query: {
                page: 1,
                page_size: 1
              }
            };
            accessToken = token || data.token;
            orderStatus = [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26];
            options.query.where = [];
            if (orderStatus) {
              options.query.where.push({
                attribute: 'status',
                value: orderStatus
              });
            }
            propsToFetch = ['id', 'status'];
            functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch);
            _context2.n = 1;
            return functionFetch.get(options);
          case 1:
            return _context2.a(2, _context2.v);
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setFormState({
              result: {
                error: true,
                result: _t2.message
              },
              loading: false
            });
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function getActiveOrders() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    handleLogoutClick: handleLogoutClick
  })));
};
LogoutAction.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to get logout success event
   */
  handleSuccessLogout: _propTypes.default.func,
  /**
   * Function to get logout error event
   */
  handleErrorLogout: _propTypes.default.func,
  /**
   * Provide token if you use custom session manager
   */
  token: _propTypes.default.string,
  /**
   * Enable/Disable default session manager
   * Remove user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Custom function
   */
  handleCustomLogoutClick: _propTypes.default.func
};
LogoutAction.defaultProps = {
  useDefualtSessionManager: true
};