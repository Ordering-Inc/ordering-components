"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReCaptcha = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactGoogleRecaptcha = _interopRequireDefault(require("react-google-recaptcha"));
var _reactGoogleRecaptchaV = require("react-google-recaptcha-v3");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReCaptcha = exports.ReCaptcha = function ReCaptcha(props) {
  var handleReCaptcha = props.handleReCaptcha,
    reCaptchaVersion = props.reCaptchaVersion;
  var captchaRef = (0, _react.useRef)(null);
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
    if (currVersion !== (reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version) && !!window.grecaptcha && (captchaRef === null || captchaRef === void 0 ? void 0 : captchaRef.current) !== null) {
      window.grecaptcha = undefined;
    }
    setCurrVersion(reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version);
  }, [reCaptchaVersion, captchaRef === null || captchaRef === void 0 ? void 0 : captchaRef.current]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version) === 'v3' && currVersion === 'v3' && /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptchaV.GoogleReCaptchaProvider, {
    reCaptchaKey: reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.siteKey
  }, /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptchaV.GoogleReCaptcha, {
    onVerify: onChange
  })), (reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.version) === 'v2' && currVersion === 'v2' && /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptcha.default, {
    sitekey: reCaptchaVersion === null || reCaptchaVersion === void 0 ? void 0 : reCaptchaVersion.siteKey,
    onChange: onChange,
    ref: captchaRef
  }));
};
ReCaptcha.propTypes = {
  /**
   * Set reCaptcha value token when changes
   */
  handleReCaptcha: _propTypes.default.func
};