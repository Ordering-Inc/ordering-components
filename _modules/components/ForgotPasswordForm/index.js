"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForgotPasswordForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

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
 * Component to manage forgot password behavior without UI component
 */
var ForgotPasswordForm = function ForgotPasswordForm(props) {
  var UIComponent = props.UIComponent,
      defaultEmail = props.defaultEmail,
      handleButtonForgotPasswordClick = props.handleButtonForgotPasswordClick,
      handleSuccessForgotPassword = props.handleSuccessForgotPassword,
      handleCustomForgotPasswordClick = props.handleCustomForgotPasswordClick;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

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
    email: defaultEmail || ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formData = _useState4[0],
      setFormData = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      reCaptchaValue = _useState6[0],
      setReCaptchaValue = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isReCaptchaEnable = _useState8[0],
      setIsReCaptchaEnable = _useState8[1];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];
  /**
   * Default fuction for forgot password workflow
   */


  var handleForgotPasswordClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {
      var values, _window, _values, response;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!isReCaptchaEnable) {
                _context.next = 4;
                break;
              }

              if (!(reCaptchaValue === null)) {
                _context.next = 4;
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

            case 4:
              if (!handleCustomForgotPasswordClick) {
                _context.next = 7;
                break;
              }

              values = data || formData;
              return _context.abrupt("return", handleCustomForgotPasswordClick(values));

            case 7:
              _context.prev = 7;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _values = data || formData;
              _context.next = 12;
              return ordering.users().forgotPassword(_values);

            case 12:
              response = _context.sent;
              setFormState({
                result: response.content,
                loading: false
              });

              if (isReCaptchaEnable && (_window = window) !== null && _window !== void 0 && _window.grecaptcha) {
                window.grecaptcha.reset();
                setReCaptchaValue(null);
              }

              if (!response.content.error) {
                if (handleSuccessForgotPassword) {
                  handleSuccessForgotPassword(formData.email);
                }
              }

              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](7);
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 18]]);
    }));

    return function handleForgotPasswordClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Update form data data
   * @param {EventTarget} e Related HTML event
   */


  var hanldeChangeInput = function hanldeChangeInput(e) {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  (0, _react.useEffect)(function () {
    var _configs$security_rec;

    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 ? void 0 : (_configs$security_rec = configs.security_recaptcha_auth) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');
  }, [configs]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    formData: formData,
    hanldeChangeInput: hanldeChangeInput,
    enableReCaptcha: isReCaptchaEnable,
    handleReCaptcha: setReCaptchaValue,
    reCaptchaValue: reCaptchaValue,
    handleButtonForgotPasswordClick: handleButtonForgotPasswordClick || handleForgotPasswordClick
  })));
};

exports.ForgotPasswordForm = ForgotPasswordForm;
ForgotPasswordForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to change default forgot password behavior
   */
  handleButtonForgotPasswordClick: _propTypes.default.func,

  /**
   * Function to get forgot password success event
   * @param {string} email Email to which it was sent
   */
  handleSuccessForgotPassword: _propTypes.default.func,

  /**
   * Default email to forgot password form
   */
  defaultEmail: _propTypes.default.string,

  /**
   * @param {form_data} data
   * handleCustomClick, function to get click event and return data without default behavior
   */
  handleCustomForgotPasswordClick: _propTypes.default.func,

  /**
   * Components types before forgot password form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after forgot password form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before forgot password form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after forgot password form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: _propTypes.default.string,

  /**
   * Url to login page
   * Url to create element link to login
   */
  linkToLogin: _propTypes.default.string,

  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: _propTypes.default.element,

  /**
   * Element to custo link to Login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: _propTypes.default.element
};
ForgotPasswordForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};