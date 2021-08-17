"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutAction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _ConfigContext = require("../../contexts/ConfigContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage logout behavior without UI component
 */
var LogoutAction = function LogoutAction(props) {
  var _configs$facebook_id3, _configs$google_login2;

  var UIComponent = props.UIComponent,
      handleSuccessLogout = props.handleSuccessLogout,
      token = props.token,
      isNative = props.isNative,
      useDefualtSessionManager = props.useDefualtSessionManager,
      handleCustomLogoutClick = props.handleCustomLogoutClick;

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
          appId: configs === null || configs === void 0 ? void 0 : (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value,
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
  }, [configs === null || configs === void 0 ? void 0 : (_configs$facebook_id3 = configs.facebook_id) === null || _configs$facebook_id3 === void 0 ? void 0 : _configs$facebook_id3.value]);
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
  }, [configs === null || configs === void 0 ? void 0 : (_configs$google_login2 = configs.google_login_client_id) === null || _configs$google_login2 === void 0 ? void 0 : _configs$google_login2.value]);
  /**
   * Default fuction for logout workflow
   */

  var handleLogoutClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(bodyParams) {
      var accessToken, body, funtionFetch, _yield$funtionFetch, _yield$funtionFetch$c, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (handleCustomLogoutClick) {
                handleCustomLogoutClick && handleCustomLogoutClick();
              }

              _context.prev = 1;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              accessToken = token || data.token;
              body = bodyParams && bodyParams !== null && bodyParams !== void 0 && bodyParams.notification_token ? {
                notification_app: bodyParams === null || bodyParams === void 0 ? void 0 : bodyParams.notification_app,
                notification_token: bodyParams === null || bodyParams === void 0 ? void 0 : bodyParams.notification_token,
                token_notification: bodyParams === null || bodyParams === void 0 ? void 0 : bodyParams.notification_token
              } : null;
              funtionFetch = body ? ordering.setAccessToken(accessToken).users().logout(body) : ordering.setAccessToken(accessToken).users().logout();
              _context.next = 8;
              return funtionFetch;

            case 8:
              _yield$funtionFetch = _context.sent;
              _yield$funtionFetch$c = _yield$funtionFetch.content;
              error = _yield$funtionFetch$c.error;
              result = _yield$funtionFetch$c.result;

              if (error) {
                _context.next = 17;
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

              return _context.abrupt("return", true);

            case 17:
              setFormState({
                result: {
                  error: error,
                  result: result
                },
                loading: false
              });
              return _context.abrupt("return", false);

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](1);
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });
              return _context.abrupt("return", false);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 21]]);
    }));

    return function handleLogoutClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    handleLogoutClick: handleLogoutClick
  })));
};

exports.LogoutAction = LogoutAction;
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