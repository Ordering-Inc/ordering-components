"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyEmail = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

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
var VerifyEmail = function VerifyEmail(props) {
  var UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

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
  /**
   * function to send verify code for email
   * @param {Object} values object with type, channel, size, email values
   */


  var sendVerifyEmailCode = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(values) {
      var _values$type, _values$channel, _values$size, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
                loadingSendCode: true
              }));
              _context.next = 4;
              return fetch("".concat(ordering.root, "/codes/generate"), {
                method: 'POST',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  type: (_values$type = values === null || values === void 0 ? void 0 : values.type) !== null && _values$type !== void 0 ? _values$type : 3,
                  channel: (_values$channel = values === null || values === void 0 ? void 0 : values.channel) !== null && _values$channel !== void 0 ? _values$channel : 1,
                  size: (_values$size = values === null || values === void 0 ? void 0 : values.size) !== null && _values$size !== void 0 ? _values$size : 6,
                  email: values === null || values === void 0 ? void 0 : values.email
                })
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;
              setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
                loadingSendCode: false,
                resultSendCode: error ? null : result,
                errorSendCode: error ? typeof result === 'string' ? [result] : result : null
              }));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
                loadingSendCode: false,
                errorSendCode: [_context.t0.message]
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(values) {
      var _values$channel2, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
                loadingCheckCode: true
              }));
              _context2.next = 4;
              return fetch("".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/verify"), {
                method: 'POST',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  channel: (_values$channel2 = values === null || values === void 0 ? void 0 : values.channel) !== null && _values$channel2 !== void 0 ? _values$channel2 : 1,
                  code: values === null || values === void 0 ? void 0 : values.code
                })
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              _yield$response$json2 = _context2.sent;
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
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
                loadingCheckCode: false,
                errorCheckCode: [_context2.t0.message]
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function checkVerifyEmailCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * function for clean errors state
   */


  var cleanErrorsState = function cleanErrorsState() {
    setVerifyEmailState(_objectSpread(_objectSpread({}, verifyEmailState), {}, {
      errorCheckCode: null,
      errorSendCode: null
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    verifyEmailState: verifyEmailState,
    cleanErrorsState: cleanErrorsState,
    sendVerifyEmailCode: sendVerifyEmailCode,
    checkVerifyEmailCode: checkVerifyEmailCode
  })));
};

exports.VerifyEmail = VerifyEmail;