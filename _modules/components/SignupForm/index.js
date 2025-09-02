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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t6 in e) "default" !== _t6 && {}.hasOwnProperty.call(e, _t6) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t6)) && (i.get || i.set) ? o(f, _t6, i) : f[_t6] = e[_t6]); return f; })(e, t); }
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
    _useState0 = _slicedToArray(_useState9, 2),
    willVerifyOtpState = _useState0[0],
    setWillVerifyOtpState = _useState0[1];
  var _useState1 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    otpState = _useState10[0],
    setOtpState = _useState10[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState11 = (0, _react.useState)({
      code: '',
      version: ''
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    reCaptchaValue = _useState12[0],
    setReCaptchaValue = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isReCaptchaEnable = _useState14[0],
    setIsReCaptchaEnable = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    promotionsEnabled = _useState16[0],
    setPromotionsEnabled = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    cellphoneStartZero = _useState18[0],
    setCellphoneStartZero = _useState18[1];
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(values) {
      var data, newData, parsedNumber, source, response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!handleCustomSignup) {
              _context.n = 1;
              break;
            }
            handleCustomSignup(values || signupData);
            return _context.a(2);
          case 1:
            data = values || signupData;
            if (isGuest && user !== null && user !== void 0 && user.guest_id) data.guest_token = user === null || user === void 0 ? void 0 : user.guest_id;
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
                result: [t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')]
              },
              loading: false
            });
            return _context.a(2);
          case 2:
            data.verification_code = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.code;
            data.recaptcha_type = reCaptchaValue === null || reCaptchaValue === void 0 ? void 0 : reCaptchaValue.version;
          case 3:
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
            if (cellphoneStartZero) {
              newData.cellphone = cellphoneStartZero;
            }
            _context.p = 4;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            source = {};
            requestsState.signup = source;
            _context.n = 5;
            return ordering.users().save(newData, {
              cancelToken: source
            });
          case 5:
            response = _context.v;
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
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setFormState({
                result: {
                  error: true,
                  result: _t.message
                },
                loading: false
              });
            }
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[4, 6]]);
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
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values) {
      var response, res, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
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
              body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
                cellphone: cellphoneStartZero || values.cellphone,
                country_phone_code: "+".concat(values.country_phone_code)
              }))
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
            _t2 = _context2.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _t2.message
              }
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function sendVerifyPhoneCode(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(isReCaptchaEnable && reCaptchaValue === null)) {
              _context3.n = 1;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              generate: true,
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
              }
            }));
            return _context3.a(2);
          case 1:
            body = {
              type: 4,
              channel: signUpTab === 'otpEmail' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (signupData === null || signupData === void 0 ? void 0 : signupData.email);
            cellphone = cellphoneStartZero || (values === null || values === void 0 ? void 0 : values.cellphone) || (signupData === null || signupData === void 0 ? void 0 : signupData.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.country_phone_code) || signupData.country_phone_code;
            setSignupData(_objectSpread(_objectSpread({}, signupData), {}, {
              email: email,
              cellphone: cellphone,
              country_phone_code: countryPhoneCode
            }));
            _context3.p = 2;
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
            _context3.n = 3;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 3:
            response = _context3.v;
            _context3.n = 4;
            return response.json();
          case 4:
            _yield$response$json = _context3.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context3.n = 5;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                result: result,
                error: null
              }
            }));
            return _context3.a(2);
          case 5:
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              generate: true,
              result: {
                error: true,
                result: result
              }
            }));
            _context3.n = 7;
            break;
          case 6:
            _context3.p = 6;
            _t3 = _context3.v;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              generate: true,
              result: {
                error: true,
                result: _t3.message
              }
            }));
          case 7:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 6]]);
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
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(values) {
      var body, _res$result, response, res, _res$result2, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            body = _objectSpread({}, values);
            if (isGuest && user !== null && user !== void 0 && user.guest_id) body.guest_token = user === null || user === void 0 ? void 0 : user.guest_id;
            _context4.p = 1;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true
            }));
            if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
              body.notification_token = notificationState.notification_token;
              body.notification_app = notificationState.notification_app;
            }
            _context4.n = 2;
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
            response = _context4.v;
            _context4.n = 3;
            return response.json();
          case 3:
            res = _context4.v;
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
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _t4.message
              }
            }));
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    return function checkVerifyPhoneCode(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  var checkVerifyByOtpCode = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _signupData$country_p;
      var _credentials, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
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
              _context5.n = 2;
              break;
            }
            if (!(reCaptchaValue === null)) {
              _context5.n = 1;
              break;
            }
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              result: {
                error: true,
                result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
              }
            }));
            return _context5.a(2);
          case 1:
            _credentials.verification_code = reCaptchaValue;
          case 2:
            if (isGuest && user !== null && user !== void 0 && user.guest_id) _credentials.guest_token = user === null || user === void 0 ? void 0 : user.guest_id;
            _context5.p = 3;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: true,
              result: {
                error: false
              }
            }));
            _context5.n = 4;
            return ordering.users().auth(_credentials);
          case 4:
            _yield$ordering$users = _context5.v;
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
            _context5.n = 6;
            break;
          case 5:
            _context5.p = 5;
            _t5 = _context5.v;
            setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
              loading: false,
              result: {
                error: _t5.message
              }
            }));
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[3, 5]]);
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
    setCellphoneStartZero: setCellphoneStartZero,
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