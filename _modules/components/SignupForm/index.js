"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _ValidationsFieldsContext = require("../../contexts/ValidationsFieldsContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage signup behavior without UI component
 */
var SignupForm = exports.SignupForm = function SignupForm(props) {
  var _configs$email_otp_si, _configs$phone_otp_si, _configs$full_details;
  var UIComponent = props.UIComponent,
    useChekoutFileds = props.useChekoutFileds,
    handleButtonSignupClick = props.handleButtonSignupClick,
    handleSuccessSignup = props.handleSuccessSignup,
    externalPhoneNumber = props.externalPhoneNumber,
    handleCustomSignup = props.handleCustomSignup,
    notificationState = props.notificationState,
    isCustomerMode = props.isCustomerMode,
    numOtpInputs = props.numOtpInputs,
    isGuest = props.isGuest;
  var requestsState = {};
  var CONDITIONAL_CODES = ['1787'];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    user = _useSession2[0].user,
    login = _useSession2[1].login;
  var _useValidationFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
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
      cellphone: externalPhoneNumber || '',
      password: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    signupData = _useState4[0],
    setSignupData = _useState4[1];
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
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    willVerifyOtpState = _useState10[0],
    setWillVerifyOtpState = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    otpState = _useState12[0],
    setOtpState = _useState12[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState13 = (0, _react.useState)({
      code: '',
      version: ''
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    reCaptchaValue = _useState14[0],
    setReCaptchaValue = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isReCaptchaEnable = _useState16[0],
    setIsReCaptchaEnable = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    promotionsEnabled = _useState18[0],
    setPromotionsEnabled = _useState18[1];
  var useSignUpOtpEmail = (configs === null || configs === void 0 || (_configs$email_otp_si = configs.email_otp_signup_enabled) === null || _configs$email_otp_si === void 0 ? void 0 : _configs$email_otp_si.value) === '1' && !isCustomerMode;
  var useSignUpOtpCellphone = (configs === null || configs === void 0 || (_configs$phone_otp_si = configs.phone_otp_signup_enabled) === null || _configs$phone_otp_si === void 0 ? void 0 : _configs$phone_otp_si.value) === '1' && !isCustomerMode;
  var useSignUpFullDetails = useSignUpOtpEmail || useSignUpOtpCellphone ? (configs === null || configs === void 0 || (_configs$full_details = configs.full_details_signup_enabled) === null || _configs$full_details === void 0 ? void 0 : _configs$full_details.value) === '1' : true;
  var defaultSignUpTab = useSignUpFullDetails ? 'default' : useSignUpOtpEmail ? 'otpEmail' : 'otpCellphone';
  var _useState19 = (0, _react.useState)(defaultSignUpTab),
    _useState20 = _slicedToArray(_useState19, 2),
    signUpTab = _useState20[0],
    setSignUpTab = _useState20[1];
  /**
   * Default fuction for signup workflow
   */
  var handleSignupClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var data, newData, parsedNumber, source, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!handleCustomSignup) {
              _context.next = 3;
              break;
            }
            handleCustomSignup(values || signupData);
            return _context.abrupt("return");
          case 3:
            data = values || signupData;
            if (isGuest && user !== null && user !== void 0 && user.guest_id) data.guest_token = user === null || user === void 0 ? void 0 : user.guest_id;
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
                result: [t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')]
              },
              loading: false
            });
            return _context.abrupt("return");
          case 11:
            data.verification_code = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code;
            data.recaptcha_type = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.version;
          case 13:
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              data.notification_token = notificationState.notification_token;
              data.notification_app = notificationState.notification_app;
            }
            if (promotionsEnabled) {
              data.settings = {
                notification: {
                  newsletter: true,
                  promotions: true
                },
                sms: {
                  newsletter: true,
                  promotions: true
                }
              };
            }
            if (isCustomerMode) {
              data.phone = data.cellphone;
            }
            newData = Object.fromEntries(Object.entries(data).filter(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                _ = _ref3[0],
                v = _ref3[1];
              return v !== '';
            }));
            if (!(newData !== null && newData !== void 0 && newData.country_code) && newData !== null && newData !== void 0 && newData.country_phone_code && newData !== null && newData !== void 0 && newData.cellphone) {
              parsedNumber = (0, _libphonenumberJs.default)("+".concat(newData === null || newData === void 0 ? void 0 : newData.country_phone_code).concat(newData === null || newData === void 0 ? void 0 : newData.cellphone));
              newData.country_code = parsedNumber.country;
            }
            if (CONDITIONAL_CODES.includes(newData === null || newData === void 0 ? void 0 : newData.country_phone_code)) {
              if ((newData === null || newData === void 0 ? void 0 : newData.country_code) === 'PR') {
                newData.cellphone = "787".concat(newData.cellphone);
                newData.country_phone_code = '1';
              }
            }
            _context.prev = 19;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            source = {};
            requestsState.signup = source;
            _context.next = 25;
            return ordering.users().save(newData, {
              cancelToken: source
            });
          case 25:
            response = _context.sent;
            setFormState({
              result: response.content,
              loading: false
            });
            if (!response.content.error) {
              events.emit('singup_user', response.content.result);
              if (handleSuccessSignup) {
                handleSuccessSignup(response.content.result);
              }
            }
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](19);
            if (_context.t0.constructor.name !== 'Cancel') {
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });
            }
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[19, 30]]);
    }));
    return function handleSignupClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};
    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }
    setSignupData(_objectSpread(_objectSpread({}, signupData), currentChanges));
  };

  /**
   * Update recaptcha value
   * @param {string} value of recaptcha
   */
  var setReCaptcha = function setReCaptcha(value) {
    setReCaptchaValue(value);
  };

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;
    return !useChekoutFileds || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.checkout) !== null && _validationFields$fie !== void 0 && _validationFields$fie[fieldName]) || !validationFields.loading && ((_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2[fieldName]) && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.checkout) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3[fieldName]) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled);
  };

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie4, _validationFields$fie5, _validationFields$fie6;
    return fieldName === 'password' || useChekoutFileds && !validationFields.loading && ((_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.checkout) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.checkout) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5[fieldName]) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && ((_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.checkout) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6[fieldName]) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required);
  };

  /**
  * function to send verify code with twilio
  * @param {Object} values object with cellphone and country code values
  */
  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var response, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context2.next = 4;
            return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
                cellphone: values.cellphone,
                country_phone_code: "+".concat(values.country_phone_code)
              }))
            });
          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.json();
          case 7:
            res = _context2.sent;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _context2.t0.message
              }
            }));
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function sendVerifyPhoneCode(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(isReCaptchaEnable && reCaptchaValue === null)) {
              _context3.next = 3;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              generate: true,
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
              }
            }));
            return _context3.abrupt("return");
          case 3:
            body = {
              type: 4,
              channel: signUpTab === 'otpEmail' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (signupData === null || signupData === void 0 ? void 0 : signupData.email);
            cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (signupData === null || signupData === void 0 ? void 0 : signupData.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.country_phone_code) || signupData.country_phone_code;
            setSignupData(_objectSpread(_objectSpread({}, signupData), {}, {
              email: email,
              cellphone: cellphone,
              country_phone_code: countryPhoneCode
            }));
            _context3.prev = 8;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true,
              result: {
                error: false,
                result: null
              }
            }));
            setWillVerifyOtpState(true);
            if (signUpTab === 'otpCellphone') {
              body.country_phone_code = countryPhoneCode;
              body.cellphone = cellphone;
            } else {
              body.email = email;
            }
            _context3.next = 14;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 14:
            response = _context3.sent;
            _context3.next = 17;
            return response.json();
          case 17:
            _yield$response$json = _context3.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context3.next = 23;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                result: result,
                error: null
              }
            }));
            return _context3.abrupt("return");
          case 23:
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              generate: true,
              result: {
                error: true,
                result: result
              }
            }));
            _context3.next = 29;
            break;
          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](8);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              generate: true,
              result: {
                error: true,
                result: _context3.t0.message
              }
            }));
          case 29:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[8, 26]]);
    }));
    return function generateOtpCode(_x3) {
      return _ref5.apply(this, arguments);
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
      var body, _res$result, response, res, _res$result2;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            body = _objectSpread({}, values);
            _context4.prev = 1;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true
            }));
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              body.notification_token = notificationState.notification_token;
              body.notification_app = notificationState.notification_app;
            }
            _context4.next = 6;
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
            response = _context4.sent;
            _context4.next = 9;
            return response.json();
          case 9:
            res = _context4.sent;
            if (!(res !== null && res !== void 0 && res.error) && res !== null && res !== void 0 && (_res$result = res.result) !== null && _res$result !== void 0 && _res$result.id) {
              login({
                user: res === null || res === void 0 ? void 0 : res.result,
                token: res === null || res === void 0 || (_res$result2 = res.result) === null || _res$result2 === void 0 || (_res$result2 = _res$result2.session) === null || _res$result2 === void 0 ? void 0 : _res$result2.access_token
              });
              if (handleSuccessSignup) {
                handleSuccessSignup(res === null || res === void 0 ? void 0 : res.result);
              }
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: res
            }));
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _context4.t0.message
              }
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 14]]);
    }));
    return function checkVerifyPhoneCode(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  var checkVerifyByOtpCode = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _signupData$country_p;
      var _credentials, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _credentials = signUpTab === 'otpEmail' ? {
              email: signupData === null || signupData === void 0 ? void 0 : signupData.email,
              one_time_password: otpState
            } : {
              country_phone_code: signupData === null || signupData === void 0 || (_signupData$country_p = signupData.country_phone_code) === null || _signupData$country_p === void 0 ? void 0 : _signupData$country_p.replace('+', ''),
              cellphone: signupData === null || signupData === void 0 ? void 0 : signupData.cellphone,
              one_time_password: otpState
            };
            if (!isReCaptchaEnable) {
              _context5.next = 8;
              break;
            }
            if (!(reCaptchaValue === null)) {
              _context5.next = 7;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
              }
            }));
            return _context5.abrupt("return");
          case 7:
            _credentials.verification_code = reCaptchaValue;
          case 8:
            _context5.prev = 8;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true,
              result: {
                error: false
              }
            }));
            _context5.next = 12;
            return ordering.users().auth(_credentials);
          case 12:
            _yield$ordering$users = _context5.sent;
            _yield$ordering$users2 = _yield$ordering$users.content;
            error = _yield$ordering$users2.error;
            result = _yield$ordering$users2.result;
            if (!error && result !== null && result !== void 0 && result.id) {
              login({
                user: result,
                token: result === null || result === void 0 || (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
              });
              if (handleSuccessSignup) {
                handleSuccessSignup(result);
              }
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  result: result,
                  error: false
                }
              }));
            } else {
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  result: result,
                  error: true
                }
              }));
            }
            _context5.next = 22;
            break;
          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](8);
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _context5.t0.message
              }
            }));
          case 22:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[8, 19]]);
    }));
    return function checkVerifyByOtpCode() {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * function to change promotions enabled
   */
  var handleChangePromotions = function handleChangePromotions() {
    setPromotionsEnabled(!promotionsEnabled);
  };
  (0, _react.useEffect)(function () {
    var _configs$security_rec;
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 || (_configs$security_rec = configs.security_recaptcha_signup) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');
  }, [configs]);
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      checkVerifyByOtpCode();
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    return function () {
      if (requestsState.signup) {
        requestsState.signup.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    validationFields: validationFields,
    signupData: signupData,
    showField: showField,
    isRequiredField: isRequiredField,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState,
    handleChangeInput: handleChangeInput,
    handleButtonSignupClick: handleButtonSignupClick || handleSignupClick,
    generateOtpCode: generateOtpCode,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode,
    enableReCaptcha: isReCaptchaEnable,
    handleReCaptcha: setReCaptcha,
    handleChangePromotions: handleChangePromotions,
    setOtpState: setOtpState,
    otpState: otpState,
    setSignUpTab: setSignUpTab,
    signUpTab: signUpTab,
    setWillVerifyOtpState: setWillVerifyOtpState,
    willVerifyOtpState: willVerifyOtpState,
    useSignUpFullDetails: useSignUpFullDetails,
    useSignUpOtpEmail: useSignUpOtpEmail,
    useSignUpOtpCellphone: useSignUpOtpCellphone
  })));
};
SignupForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to change default signup behavior
   */
  handleButtonSignupClick: _propTypes.default.func,
  /**
   * Function to get signup success event
   * @param {Object} user User with session data
   */
  handleSuccessSignup: _propTypes.default.func,
  /**
   * Function to continue as guest behavior
   */
  handleContinueAsGuest: _propTypes.default.func,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useChekoutFileds: _propTypes.default.bool,
  /**
   * Custom function
   */
  handleCustomSignup: _propTypes.default.func,
  /**
   * handleCustomClick, function to get click event and return reset password data without default behavior
   */
  handleCustomSendReview: _propTypes.default.func,
  /**
   * Components types before signup form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after signup form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: _propTypes.default.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: _propTypes.default.element
};
SignupForm.defaultProps = {
  useChekoutFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};