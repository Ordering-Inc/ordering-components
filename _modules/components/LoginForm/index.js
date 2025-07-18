"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _EventContext = require("../../contexts/EventContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
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
 * Component to manage login behavior without UI component
 */
var LoginForm = exports.LoginForm = function LoginForm(props) {
  var _configs$phone_passwo, _configs$opt_email_en, _configs$otp_cellphon, _configs$email_passwo, _configs$spoonity_ena, _configs$device_code_;
  var UIComponent = props.UIComponent,
    handleButtonLoginClick = props.handleButtonLoginClick,
    handleSuccessLogin = props.handleSuccessLogin,
    useDefualtSessionManager = props.useDefualtSessionManager,
    urlToRedirect = props.urlToRedirect,
    allowedLevels = props.allowedLevels,
    handleCustomLogin = props.handleCustomLogin,
    notificationState = props.notificationState,
    isGuest = props.isGuest;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var defaultLoginTab = props.defaultLoginTab;
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
      email: '',
      cellphone: '',
      password: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    credentials = _useState4[0],
    setCredentials = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    verifyPhoneState = _useState6[0],
    setVerifyPhoneState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    checkPhoneCodeState = _useState8[0],
    setCheckPhoneCodeState = _useState8[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState9 = (0, _react.useState)({
      code: '',
      version: ''
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    reCaptchaValue = _useState0[0],
    setReCaptchaValue = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isReCaptchaEnable = _useState10[0],
    setIsReCaptchaEnable = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    cellphoneStartZero = _useState12[0],
    setCellphoneStartZero = _useState12[1];
  var useLoginByCellphone = (configs === null || configs === void 0 || (_configs$phone_passwo = configs.phone_password_login_enabled) === null || _configs$phone_passwo === void 0 ? void 0 : _configs$phone_passwo.value) === '1';
  var useLoginOtpEmail = (configs === null || configs === void 0 || (_configs$opt_email_en = configs.opt_email_enabled) === null || _configs$opt_email_en === void 0 ? void 0 : _configs$opt_email_en.value) === '1';
  var useLoginOtpCellphone = (configs === null || configs === void 0 || (_configs$otp_cellphon = configs.otp_cellphone_enabled) === null || _configs$otp_cellphon === void 0 ? void 0 : _configs$otp_cellphon.value) === '1';
  var useLoginByEmail = useLoginByCellphone || useLoginOtpEmail || useLoginOtpCellphone ? (configs === null || configs === void 0 || (_configs$email_passwo = configs.email_password_login_enabled) === null || _configs$email_passwo === void 0 ? void 0 : _configs$email_passwo.value) === '1' : true;
  var useLoginSpoonity = (configs === null || configs === void 0 || (_configs$spoonity_ena = configs.spoonity_enabled) === null || _configs$spoonity_ena === void 0 ? void 0 : _configs$spoonity_ena.value) === '1';
  var useLoginOtp = useLoginOtpEmail || useLoginOtpCellphone;
  var isDeviceLoginEnabled = (configs === null || configs === void 0 || (_configs$device_code_ = configs.device_code_login_enabled) === null || _configs$device_code_ === void 0 ? void 0 : _configs$device_code_.value) === '1';
  defaultLoginTab = useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp';
  var _useState13 = (0, _react.useState)(defaultLoginTab),
    _useState14 = _slicedToArray(_useState13, 2),
    loginTab = _useState14[0],
    setLoginTab = _useState14[1];
  var _useState15 = (0, _react.useState)(!useLoginOtpEmail && useLoginOtpCellphone ? 'cellphone' : 'email'),
    _useState16 = _slicedToArray(_useState15, 2),
    otpType = _useState16[0],
    setOtpType = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    otpState = _useState18[0],
    setOtpState = _useState18[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    user = _useSession2[0].user,
    _useSession2$ = _useSession2[1],
    login = _useSession2$.login,
    logout = _useSession2$.logout;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  var handleLoginClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(values) {
      var _credentials4, _window, _credentials, parsedNumber, cellphone, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, level, session, accessToken, _yield$ordering$setAc, logoutResp, _t, _t2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!handleCustomLogin) {
              _context.n = 1;
              break;
            }
            handleCustomLogin(values || credentials, loginTab);
            return _context.a(2);
          case 1:
            _context.p = 1;
            if (isDeviceLoginEnabled && values !== null && values !== void 0 && values.device_code) {
              _credentials = {
                device_code: values === null || values === void 0 ? void 0 : values.device_code
              };
            } else if (loginTab === 'otp') {
              _credentials = _defineProperty(_defineProperty({}, otpType, values && values[otpType] || credentials[otpType]), "one_time_password", values && (values === null || values === void 0 ? void 0 : values.code) || otpState);
              if (otpType === 'cellphone') {
                _credentials = _objectSpread(_objectSpread({}, _credentials), {}, {
                  country_phone_code: values && (values === null || values === void 0 ? void 0 : values.country_phone_code) || (credentials === null || credentials === void 0 ? void 0 : credentials.country_phone_code)
                });
              }
            } else {
              _credentials = _defineProperty(_defineProperty({}, loginTab, values && values[loginTab] || credentials[loginTab]), "password", values && (values === null || values === void 0 ? void 0 : values.password) || credentials.password);
            }
            if (!isReCaptchaEnable) {
              _context.n = 3;
              break;
            }
            if (!((reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code) === '')) {
              _context.n = 2;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
              },
              loading: false
            });
            return _context.a(2);
          case 2:
            _credentials.verification_code = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code;
            _credentials.recaptcha_type = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.version;
          case 3:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            if ((_credentials4 = _credentials) !== null && _credentials4 !== void 0 && (_credentials4 = _credentials4.cellphone) !== null && _credentials4 !== void 0 && _credentials4.includes('+')) {
              parsedNumber = (0, _libphonenumberJs.default)(_credentials.cellphone);
              cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
              _credentials.cellphone = cellphone;
              if (cellphoneStartZero) {
                _credentials.cellphone = cellphoneStartZero;
              }
            }
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              _credentials.notification_app = notificationState.notification_app;
              _credentials.notification_token = notificationState.notification_token;
            }
            if (isGuest && user !== null && user !== void 0 && user.guest_id) _credentials.guest_token = user === null || user === void 0 ? void 0 : user.guest_id;
            _context.n = 4;
            return ordering.users().auth(_credentials);
          case 4:
            _yield$ordering$users = _context.v;
            _yield$ordering$users2 = _yield$ordering$users.content;
            error = _yield$ordering$users2.error;
            result = _yield$ordering$users2.result;
            if (isReCaptchaEnable && (_window = window) !== null && _window !== void 0 && _window.grecaptcha) {
              _credentials.recaptcha_type === 'v2' && window.grecaptcha.reset();
              setReCaptchaValue({
                code: '',
                version: ''
              });
            }
            if (error) {
              _context.n = 11;
              break;
            }
            if (!useDefualtSessionManager) {
              _context.n = 10;
              break;
            }
            if (!(allowedLevels && (allowedLevels === null || allowedLevels === void 0 ? void 0 : allowedLevels.length) > 0)) {
              _context.n = 9;
              break;
            }
            level = result.level, session = result.session;
            accessToken = session === null || session === void 0 ? void 0 : session.access_token;
            if (allowedLevels.includes(level)) {
              _context.n = 9;
              break;
            }
            _context.p = 5;
            _context.n = 6;
            return ordering.setAccessToken(accessToken).users().logout();
          case 6:
            _yield$ordering$setAc = _context.v;
            logoutResp = _yield$ordering$setAc.content;
            if (!logoutResp.error) {
              logout();
            }
            setFormState({
              result: {
                error: true,
                result: [t('YOU_DO_NOT_HAVE_PERMISSION', 'Your session have been closed')]
              },
              loading: false
            });
            _context.n = 8;
            break;
          case 7:
            _context.p = 7;
            _t = _context.v;
            setFormState({
              result: {
                error: true,
                result: _t.message
              },
              loading: false
            });
          case 8:
            return _context.a(2);
          case 9:
            login(_objectSpread({
              user: result,
              token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
            }, (values === null || values === void 0 ? void 0 : values.device_code) && {
              device_code: values === null || values === void 0 ? void 0 : values.device_code
            }));
          case 10:
            events.emit('userLogin', result);
            if (handleSuccessLogin) {
              handleSuccessLogin(result);
            }
            if (urlToRedirect) {
              window.location.href = "".concat(window.location.origin).concat(urlToRedirect);
            }
            return _context.a(2, true);
          case 11:
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            return _context.a(2, false);
          case 12:
            _context.p = 12;
            _t2 = _context.v;
            setFormState({
              result: {
                error: true,
                result: _t2.message
              },
              loading: false
            });
          case 13:
            return _context.a(2);
        }
      }, _callee, null, [[5, 7], [1, 12]]);
    }));
    return function handleLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _configs$security_rec;
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 || (_configs$security_rec = configs.security_recaptcha_auth) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');
    setOtpType(!useLoginOtpEmail && useLoginOtpCellphone ? 'cellphone' : 'email');
    setLoginTab(useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp');
  }, [configs]);

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  var handleChangeTab = function handleChangeTab(tab) {
    setLoginTab(tab);
  };

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values) {
      var response, res, _t3;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: false
              }
            }));
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                cellphone: cellphoneStartZero || values.cellphone,
                country_phone_code: "+".concat(values.country_phone_code)
              })
            });
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            res = _context2.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t3 = _context2.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _t3.message
              }
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function sendVerifyPhoneCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleSetCheckPhoneCodeState = function handleSetCheckPhoneCodeState(data) {
    var values = data || {
      loading: false,
      result: {
        error: false
      }
    };
    setCheckPhoneCodeState(values);
  };

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      var body, _res$result, response, res, _res$result2, _t4;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            body = _objectSpread({}, values);
            _context3.p = 1;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true
            }));
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              body.notification_token = notificationState.notification_token;
              body.notification_app = notificationState.notification_app;
            }
            _context3.n = 2;
            return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 2:
            response = _context3.v;
            _context3.n = 3;
            return response.json();
          case 3:
            res = _context3.v;
            if (!(res !== null && res !== void 0 && res.error) && res !== null && res !== void 0 && (_res$result = res.result) !== null && _res$result !== void 0 && _res$result.id) {
              login({
                user: res === null || res === void 0 ? void 0 : res.result,
                token: res === null || res === void 0 || (_res$result2 = res.result) === null || _res$result2 === void 0 || (_res$result2 = _res$result2.session) === null || _res$result2 === void 0 ? void 0 : _res$result2.access_token
              });
              if (handleSuccessLogin) {
                handleSuccessLogin(res === null || res === void 0 ? void 0 : res.result);
              }
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: res
            }));
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t4 = _context3.v;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _t4.message
              }
            }));
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 4]]);
    }));
    return function checkVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error, _t5;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            body = {
              type: 4,
              channel: otpType === 'email' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
            cellphone = cellphoneStartZero || (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.countryPhoneCode) || (values === null || values === void 0 ? void 0 : values.country_phone_code) || credentials.country_phone_code;
            _context4.p = 1;
            if (otpType === 'cellphone') {
              body.country_phone_code = countryPhoneCode;
              body.cellphone = cellphone;
              setCredentials({
                cellphone: cellphone,
                country_phone_code: countryPhoneCode
              });
            } else {
              body.email = email;
              setCredentials({
                email: email
              });
            }
            _context4.n = 2;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 2:
            response = _context4.v;
            _context4.n = 3;
            return response.json();
          case 3:
            _yield$response$json = _context4.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context4.n = 4;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                result: result,
                error: null
              }
            }));
            return _context4.a(2);
          case 4:
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: result
              }
            }));
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t5 = _context4.v;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: _t5.message
              }
            }));
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 5]]);
    }));
    return function generateOtpCode(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleLoginSpoonity = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _result$session2, response, _yield$response$json2, result, error, _t6;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context5.n = 1;
            return fetch("".concat(ordering.root, "/auth/spoonity"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
              })
            });
          case 1:
            response = _context5.v;
            _context5.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context5.v;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (!error) {
              _context5.n = 3;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: result
              },
              loading: false
            });
            return _context5.a(2);
          case 3:
            login({
              user: result,
              token: result === null || result === void 0 || (_result$session2 = result.session) === null || _result$session2 === void 0 ? void 0 : _result$session2.access_token
            });
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t6 = _context5.v;
            setFormState({
              result: {
                error: true,
                result: _t6.message
              },
              loading: false
            });
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 4]]);
    }));
    return function handleLoginSpoonity() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    loginTab: loginTab,
    credentials: credentials,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState,
    handleChangeInput: handleChangeInput,
    handleButtonLoginClick: handleButtonLoginClick || handleLoginClick,
    handleChangeTab: handleChangeTab,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode,
    enableReCaptcha: isReCaptchaEnable,
    handleReCaptcha: setReCaptchaValue,
    useLoginOtp: useLoginOtp,
    setOtpType: setOtpType,
    otpType: otpType,
    generateOtpCode: generateOtpCode,
    setOtpState: setOtpState,
    otpState: otpState,
    useLoginByEmail: useLoginByEmail,
    useLoginByCellphone: useLoginByCellphone,
    useLoginOtpEmail: useLoginOtpEmail,
    useLoginOtpCellphone: useLoginOtpCellphone,
    useLoginSpoonity: useLoginSpoonity,
    handleLoginSpoonity: handleLoginSpoonity,
    setCellphoneStartZero: setCellphoneStartZero
  })));
};
LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: _propTypes.default.func,
  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: _propTypes.default.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: _propTypes.default.bool,
  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: _propTypes.default.bool,
  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: _propTypes.default.string,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: _propTypes.default.string,
  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: _propTypes.default.string,
  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: _propTypes.default.element,
  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: _propTypes.default.element
};
LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};