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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _credentials4, _window, _credentials, parsedNumber, cellphone, _yield$ordering$users, _yield$ordering$users2, error, result, level, session, accessToken, _yield$ordering$setAc, logoutResp, _result$session, _result$session2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!handleCustomLogin) {
              _context.next = 3;
              break;
            }
            handleCustomLogin(values || credentials, loginTab);
            return _context.abrupt("return");
          case 3:
            _context.prev = 3;
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
              _context.next = 13;
              break;
            }
            if (!((reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code) === '')) {
              _context.next = 11;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
              },
              loading: false
            });
            return _context.abrupt("return");
          case 11:
            _credentials.verification_code = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code;
            _credentials.recaptcha_type = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.version;
          case 13:
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
            _context.next = 19;
            return ordering.users().auth(_credentials);
          case 19:
            _yield$ordering$users = _context.sent;
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
              _context.next = 48;
              break;
            }
            if (!useDefualtSessionManager) {
              _context.next = 44;
              break;
            }
            if (!(allowedLevels && (allowedLevels === null || allowedLevels === void 0 ? void 0 : allowedLevels.length) > 0)) {
              _context.next = 43;
              break;
            }
            level = result.level, session = result.session;
            accessToken = session === null || session === void 0 ? void 0 : session.access_token;
            if (allowedLevels.includes(level)) {
              _context.next = 43;
              break;
            }
            _context.prev = 30;
            _context.next = 33;
            return ordering.setAccessToken(accessToken).users().logout();
          case 33:
            _yield$ordering$setAc = _context.sent;
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
            _context.next = 42;
            break;
          case 39:
            _context.prev = 39;
            _context.t0 = _context["catch"](30);
            setFormState({
              result: {
                error: true,
                result: _context.t0.message
              },
              loading: false
            });
          case 42:
            return _context.abrupt("return");
          case 43:
            if (values !== null && values !== void 0 && values.device_code) {
              login({
                user: result,
                token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token,
                device_code: values === null || values === void 0 ? void 0 : values.device_code
              });
            } else {
              login({
                user: result,
                token: (_result$session2 = result.session) === null || _result$session2 === void 0 ? void 0 : _result$session2.access_token
              });
            }
          case 44:
            events.emit('userLogin', result);
            if (handleSuccessLogin) {
              handleSuccessLogin(result);
            }
            if (urlToRedirect) {
              window.location.href = "".concat(window.location.origin).concat(urlToRedirect);
            }
            return _context.abrupt("return", true);
          case 48:
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            return _context.abrupt("return", false);
          case 52:
            _context.prev = 52;
            _context.t1 = _context["catch"](3);
            setFormState({
              result: {
                error: true,
                result: _context.t1.message
              },
              loading: false
            });
          case 55:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 52], [30, 39]]);
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var response, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: false
              }
            }));
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context2.next = 5;
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
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            res = _context2.sent;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _context2.t0.message
              }
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var body, _res$result, response, res, _res$result2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            body = _objectSpread({}, values);
            _context3.prev = 1;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true
            }));
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              body.notification_token = notificationState.notification_token;
              body.notification_app = notificationState.notification_app;
            }
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 6:
            response = _context3.sent;
            _context3.next = 9;
            return response.json();
          case 9:
            res = _context3.sent;
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
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _context3.t0.message
              }
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 14]]);
    }));
    return function checkVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            body = {
              type: 4,
              channel: otpType === 'email' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
            cellphone = cellphoneStartZero || (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.countryPhoneCode) || (values === null || values === void 0 ? void 0 : values.country_phone_code) || credentials.country_phone_code;
            _context4.prev = 4;
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
            _context4.next = 8;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 8:
            response = _context4.sent;
            _context4.next = 11;
            return response.json();
          case 11:
            _yield$response$json = _context4.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context4.next = 17;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                result: result,
                error: null
              }
            }));
            return _context4.abrupt("return");
          case 17:
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: result
              }
            }));
            _context4.next = 23;
            break;
          case 20:
            _context4.prev = 20;
            _context4.t0 = _context4["catch"](4);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: _context4.t0.message
              }
            }));
          case 23:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[4, 20]]);
    }));
    return function generateOtpCode(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleLoginSpoonity = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _result$session3, response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context5.next = 4;
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
          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context5.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (!error) {
              _context5.next = 13;
              break;
            }
            setFormState({
              result: {
                error: true,
                result: result
              },
              loading: false
            });
            return _context5.abrupt("return");
          case 13:
            login({
              user: result,
              token: result === null || result === void 0 || (_result$session3 = result.session) === null || _result$session3 === void 0 ? void 0 : _result$session3.access_token
            });
            setFormState({
              result: {
                error: error,
                result: result
              },
              loading: false
            });
            _context5.next = 20;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            setFormState({
              result: {
                error: true,
                result: _context5.t0.message
              },
              loading: false
            });
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 17]]);
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