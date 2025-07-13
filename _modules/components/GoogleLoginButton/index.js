"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleLoginButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var GoogleLoginButton = exports.GoogleLoginButton = function GoogleLoginButton(props) {
  var UIComponent = props.UIComponent,
    onSuccess = props.onSuccess,
    onFailure = props.onFailure,
    onRequest = props.onRequest,
    responseType = props.responseType,
    handleSuccessGoogleLogin = props.handleSuccessGoogleLogin,
    handleSuccessGoogleLogout = props.handleSuccessGoogleLogout,
    initParams = props.initParams,
    buttonStyle = props.buttonStyle,
    handleGoogleLoginClick = props.handleGoogleLoginClick;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loaded: false,
      logged: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    googleStatus = _useState4[0],
    setGoogleStatus = _useState4[1];
  var wasUnmounted = false;
  (0, _react.useEffect)(function () {
    var element = document.getElementById('google-login');
    if (element) {
      element.parentNode.removeChild(element);
    }
    insertGapiScript();
    return function () {
      wasUnmounted = true;
    };
  }, []);

  /**
   * loading script for the google's api
   */
  var insertGapiScript = function insertGapiScript() {
    var js = window.document.createElement('script');
    js.id = 'google-login';
    js.src = 'https://apis.google.com/js/api.js';
    js.async = true;
    js.defer = true;
    js.onload = function () {
      initializeGoogleSignIn();
    };
    window.document.body.appendChild(js);
  };

  /**
   * Start Login google
   */
  var initializeGoogleSignIn = function initializeGoogleSignIn() {
    window.gapi.load('auth2', function () {
      setGoogleStatus(_objectSpread(_objectSpread({}, googleStatus), {}, {
        loaded: true
      }));
      var GoogleAuth = window.gapi.auth2.getAuthInstance();
      if (!GoogleAuth) {
        window.gapi.auth2.init(initParams).then(/*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(res) {
            var signedIn;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  if (!wasUnmounted) {
                    signedIn = res.isSignedIn.get();
                    if (signedIn) {
                      handleSigninSuccess(res.currentUser.get());
                    }
                  }
                case 1:
                  return _context.a(2);
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(function () {});
      } else if (GoogleAuth.isSignedIn.get()) {
        if (!wasUnmounted) {
          handleSigninSuccess(GoogleAuth.currentUser.get());
        }
      }
    });
    if (buttonStyle) {
      window.gapi.load('signin2', function () {
        if (!wasUnmounted) {
          window.gapi.signin2.render('my-signin2', _objectSpread(_objectSpread({}, buttonStyle), {}, {
            onsuccess: onSuccess,
            onfailure: onFailure
          }));
        }
      });
    }
  };

  /**
   * handling response of google
   * @param {EventTarget} e Click button event
   */
  var signIn = function signIn(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }
    if (googleStatus.loaded) {
      var GoogleAuth = window.gapi.auth2.getAuthInstance();
      if (onRequest) {
        onRequest();
      }
      if (responseType === 'code') {
        GoogleAuth.grantOfflineAccess(initParams).then(function (res) {
          return onSuccess(res);
        }, function (err) {
          return onFailure(err);
        });
      } else {
        GoogleAuth.signIn(initParams).then(function (res) {
          setFormState({
            loading: false,
            result: {
              error: false
            }
          });
          setGoogleStatus(_objectSpread(_objectSpread({}, googleStatus), {}, {
            logged: true
          }));
          handleSigninSuccess(res);
        }, function (err) {
          setFormState({
            loading: false,
            result: {
              error: true,
              result: 'Error login with Google'
            }
          });
          if (onFailure) {
            onFailure(err);
          }
        });
      }
    }
  };
  var signOut = function signOut(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }
    if (googleStatus.loaded) {
      var GoogleAuth = window.gapi.auth2.getAuthInstance();
      GoogleAuth.signOut().then(GoogleAuth.disconnect().then(function () {
        setFormState({
          loading: false,
          result: {
            error: false
          }
        });
        setGoogleStatus(_objectSpread(_objectSpread({}, googleStatus), {}, {
          logged: false
        }));
        if (handleSuccessGoogleLogout) {
          handleSuccessGoogleLogout();
        }
      }));
    }
  };
  /**
   * Function that return token of the user
   * @param {object} res from Google
   */
  var handleSigninSuccess = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(res) {
      var authResponse, response, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!handleGoogleLoginClick) {
              _context2.n = 1;
              break;
            }
            handleGoogleLoginClick(res);
            return _context2.a(2);
          case 1:
            authResponse = res.getAuthResponse(); // login with backend
            _context2.p = 2;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context2.n = 3;
            return ordering.users().authGoogle({
              access_token: authResponse === null || authResponse === void 0 ? void 0 : authResponse.id_token
            });
          case 3:
            response = _context2.v;
            setFormState({
              result: response.content,
              loading: false
            });
            if (!response.content.error) {
              if (handleSuccessGoogleLogin) {
                handleSuccessGoogleLogin(response.content.result);
              }
              if (onSuccess) {
                onSuccess(response);
              }
            } else {
              signOut();
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            setFormState({
              result: {
                error: true,
                result: _t.message
              },
              loading: false
            });
            signOut();
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return function handleSigninSuccess(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    googleStatus: googleStatus,
    signIn: signIn,
    signOut: signOut
  })));
};
GoogleLoginButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
    * property to get response code if type "code"
    */
  responseType: _propTypes.default.string,
  /**
     * Function to get login with google success event
     * @param {object} user User logged
     */
  handleSuccessGoogleLogin: _propTypes.default.func,
  /**
     * handling response of google
     * @param {Object} result google response when the result is success
     */
  onSuccess: _propTypes.default.func,
  /**
     * handling response of google
     * @param {Object} result google response when the result is error
     */
  onFailure: _propTypes.default.func,
  /**
     * handling response of google
     * google response when the user is logging
     */
  onRequest: _propTypes.default.func,
  /**
   * loading script for the google's api
   */
  insertGapiScript: _propTypes.default.func,
  /**
   * Start Login google
   */
  initializeGoogleSignIn: _propTypes.default.func,
  /**
   * handling response of google
   */
  signIn: _propTypes.default.func,
  /**
   * Function that return token of the user
   */
  handleSigninSuccess: _propTypes.default.func,
  /**
   * @param {google_response} res
   * handleCustomClick, function to get click event and return google response without default behavior
   */
  handleGoogleLoginClick: _propTypes.default.func,
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleLoginButton.defaultProps = {
  responseType: '',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};