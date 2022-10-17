"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReCaptcha = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactGoogleRecaptcha = _interopRequireDefault(require("react-google-recaptcha"));
var _reactGoogleRecaptchaV = require("react-google-recaptcha-v3");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReCaptcha = function ReCaptcha(props) {
  var handleReCaptcha = props.handleReCaptcha,
    reCaptchaVersion = props.reCaptchaVersion;
  var _useState = (0, _react.useState)(reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version),
    _useState2 = _slicedToArray(_useState, 2),
    currVersion = _useState2[0],
    setCurrVersion = _useState2[1];
  /**
   * Change reCaptcha
   */
  var onChange = (0, _react.useCallback)(function (value) {
    handleReCaptcha({
      code: value,
      version: reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version
    });
  }, [reCaptchaVersion]);
  (0, _react.useEffect)(function () {
    if ((reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.siteKey) === '') return;
    if ((currVersion === null || currVersion === void 0 ? void 0 : currVersion.version) !== reCaptchaVersion && window.grecaptcha) {
      window.grecaptcha = undefined;
    }
    setCurrVersion(reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version);
  }, [reCaptchaVersion]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version) === 'v3' && currVersion === 'v3' && /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptchaV.GoogleReCaptchaProvider, {
    reCaptchaKey: reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.siteKey
  }, /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptchaV.GoogleReCaptcha, {
    onVerify: onChange
  })), (reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version) === 'v2' && currVersion === 'v2' && /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptcha.default, {
    sitekey: reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.siteKey,
    onChange: onChange
  }));
};
exports.ReCaptcha = ReCaptcha;
ReCaptcha.propTypes = {
  /**
   * Set reCaptcha value token when changes
   */
  handleReCaptcha: _propTypes.default.func
};