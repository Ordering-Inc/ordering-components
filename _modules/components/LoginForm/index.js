"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _EventContext = require("../../contexts/EventContext");

var _ConfigContext = require("../../contexts/ConfigContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage login behavior without UI component
 */
var LoginForm = function LoginForm(props) {
  var _configs$phone_passwo, _configs$opt_email_en, _configs$otp_cellphon, _configs$email_passwo;

  var UIComponent = props.UIComponent,
      handleButtonLoginClick = props.handleButtonLoginClick,
      handleSuccessLogin = props.handleSuccessLogin,
      useDefualtSessionManager = props.useDefualtSessionManager,
      urlToRedirect = props.urlToRedirect,
      allowedLevels = props.allowedLevels,
      handleCustomLogin = props.handleCustomLogin,
      notificationState = props.notificationState;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

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
      _useState10 = _slicedToArray(_useState9, 2),
      reCaptchaValue = _useState10[0],
      setReCaptchaValue = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isReCaptchaEnable = _useState12[0],
      setIsReCaptchaEnable = _useState12[1];

  var useLoginByCellphone = (configs === null || configs === void 0 ? void 0 : (_configs$phone_passwo = configs.phone_password_login_enabled) === null || _configs$phone_passwo === void 0 ? void 0 : _configs$phone_passwo.value) === '1';
  var useLoginOtpEmail = (configs === null || configs === void 0 ? void 0 : (_configs$opt_email_en = configs.opt_email_enabled) === null || _configs$opt_email_en === void 0 ? void 0 : _configs$opt_email_en.value) === '1';
  var useLoginOtpCellphone = (configs === null || configs === void 0 ? void 0 : (_configs$otp_cellphon = configs.otp_cellphone_enabled) === null || _configs$otp_cellphon === void 0 ? void 0 : _configs$otp_cellphon.value) === '1';
  var useLoginByEmail = useLoginByCellphone || useLoginOtpEmail || useLoginOtpCellphone ? (configs === null || configs === void 0 ? void 0 : (_configs$email_passwo = configs.email_password_login_enabled) === null || _configs$email_passwo === void 0 ? void 0 : _configs$email_passwo.value) === '1' : true;
  var useLoginOtp = useLoginOtpEmail || useLoginOtpCellphone;
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(values) {
      var _credentials4, _credentials4$cellpho, _window, _credentials, _credentials2, _credentials3, parsedNumber, cellphone, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, level, session, accessToken, _yield$ordering$setAc, logoutResp;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleCustomLogin) {
                _context.next = 3;
                break;
              }

              handleCustomLogin(values || credentials, loginTab);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;

              if (loginTab === 'otp') {
                _credentials = (_credentials2 = {}, _defineProperty(_credentials2, otpType, values && values[otpType] || credentials[otpType]), _defineProperty(_credentials2, "one_time_password", values && (values === null || values === void 0 ? void 0 : values.code) || otpState), _credentials2);

                if (otpType === 'cellphone') {
                  _credentials = _objectSpread(_objectSpread({}, _credentials), {}, {
                    country_phone_code: values && (values === null || values === void 0 ? void 0 : values.country_phone_code) || (credentials === null || credentials === void 0 ? void 0 : credentials.country_phone_code)
                  });
                }
              } else {
                _credentials = (_credentials3 = {}, _defineProperty(_credentials3, loginTab, values && values[loginTab] || credentials[loginTab]), _defineProperty(_credentials3, "password", values && (values === null || values === void 0 ? void 0 : values.password) || credentials.password), _credentials3);
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

              if ((_credentials4 = _credentials) !== null && _credentials4 !== void 0 && (_credentials4$cellpho = _credentials4.cellphone) !== null && _credentials4$cellpho !== void 0 && _credentials4$cellpho.includes('+')) {
                parsedNumber = (0, _libphonenumberJs.default)(_credentials.cellphone);
                cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
                _credentials.cellphone = cellphone;
              }

              if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
                _credentials.notification_app = notificationState.notification_app;
                _credentials.notification_token = notificationState.notification_token;
              }

              _context.next = 18;
              return ordering.users().auth(_credentials);

            case 18:
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
                _context.next = 46;
                break;
              }

              if (!useDefualtSessionManager) {
                _context.next = 43;
                break;
              }

              if (!(allowedLevels && (allowedLevels === null || allowedLevels === void 0 ? void 0 : allowedLevels.length) > 0)) {
                _context.next = 42;
                break;
              }

              level = result.level, session = result.session;
              accessToken = session === null || session === void 0 ? void 0 : session.access_token;

              if (allowedLevels.includes(level)) {
                _context.next = 42;
                break;
              }

              _context.prev = 29;
              _context.next = 32;
              return ordering.setAccessToken(accessToken).users().logout();

            case 32:
              _yield$ordering$setAc = _context.sent;
              logoutResp = _yield$ordering$setAc.content;

              if (!logoutResp.error) {
                logout();
              }

              setFormState({
                result: {
                  error: true,
                  result: ['YOU_DO_NOT_HAVE_PERMISSION']
                },
                loading: false
              });
              _context.next = 41;
              break;

            case 38:
              _context.prev = 38;
              _context.t0 = _context["catch"](29);
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });

            case 41:
              return _context.abrupt("return");

            case 42:
              login({
                user: result,
                token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
              });

            case 43:
              events.emit('userLogin', result);

              if (handleSuccessLogin) {
                handleSuccessLogin(result);
              }

              if (urlToRedirect) {
                window.location.href = "".concat(window.location.origin).concat(urlToRedirect);
              }

            case 46:
              setFormState({
                result: {
                  error: error,
                  result: result
                },
                loading: false
              });
              _context.next = 52;
              break;

            case 49:
              _context.prev = 49;
              _context.t1 = _context["catch"](3);
              setFormState({
                result: {
                  error: true,
                  result: _context.t1.message
                },
                loading: false
              });

            case 52:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 49], [29, 38]]);
    }));

    return function handleLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _configs$security_rec;

    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 ? void 0 : (_configs$security_rec = configs.security_recaptcha_auth) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');

    if (useLoginOtpCellphone && !useLoginOtpEmail) {
      setOtpType('cellphone');
    }
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(values) {
      var response, res;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
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
                  'X-App-X': ordering.appId
                },
                body: JSON.stringify({
                  cellphone: values.cellphone,
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(values) {
      var body, _res$result, response, res, _res$result2, _res$result2$session;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
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
                  'X-App-X': ordering.appId
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
                  token: res === null || res === void 0 ? void 0 : (_res$result2 = res.result) === null || _res$result2 === void 0 ? void 0 : (_res$result2$session = _res$result2.session) === null || _res$result2$session === void 0 ? void 0 : _res$result2$session.access_token
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
        }
      }, _callee3, null, [[1, 14]]);
    }));

    return function checkVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var generateOtpCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = {
                type: 4,
                channel: otpType === 'email' ? 1 : 2,
                size: 6
              };
              email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
              cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
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
                  'X-App-X': ordering.appId
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
        }
      }, _callee4, null, [[4, 20]]);
    }));

    return function generateOtpCode(_x4) {
      return _ref4.apply(this, arguments);
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
    useLoginOtpCellphone: useLoginOtpCellphone
  })));
};

exports.LoginForm = LoginForm;
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