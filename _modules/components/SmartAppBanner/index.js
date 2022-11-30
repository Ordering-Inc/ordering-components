"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmartAppBanner = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../../contexts/ConfigContext");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SmartAppBanner = function SmartAppBanner(props) {
  var UIComponent = props.UIComponent,
    storeAndroidId = props.storeAndroidId,
    storeAppleId = props.storeAppleId,
    storeKindleId = props.storeKindleId;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  (0, _react.useEffect)(function () {
    var _configs$android_app_, _configs$ios_app_id, _configs$kindle_app_i;
    if (!configs) return;
    var metas = [{
      name: 'google-play-app',
      id: storeAndroidId || (configs === null || configs === void 0 ? void 0 : (_configs$android_app_ = configs.android_app_id) === null || _configs$android_app_ === void 0 ? void 0 : _configs$android_app_.value)
    }, {
      name: 'apple-itunes-app',
      id: storeAppleId || (configs === null || configs === void 0 ? void 0 : (_configs$ios_app_id = configs.ios_app_id) === null || _configs$ios_app_id === void 0 ? void 0 : _configs$ios_app_id.value)
    }, {
      name: 'kindle-fire-app',
      id: storeKindleId || (configs === null || configs === void 0 ? void 0 : (_configs$kindle_app_i = configs.kindle_app_id) === null || _configs$kindle_app_i === void 0 ? void 0 : _configs$kindle_app_i.value)
    }];
    metas.filter(function (meta) {
      return meta === null || meta === void 0 ? void 0 : meta.id;
    }).map(function (meta) {
      var metaElement = document.createElement('meta');
      metaElement.name = meta.name;
      metaElement.content = "app-id=".concat(meta.id);
      document.getElementsByTagName('head')[0].appendChild(metaElement);
    });
  }, [configs]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};
exports.SmartAppBanner = SmartAppBanner;
SmartAppBanner.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * store android id
   */
  storeAndroidId: _propTypes.default.string,
  /**
   * store apple id
   */
  storeAppleId: _propTypes.default.string,
  /**
   * store kindle id
   */
  storeKindleId: _propTypes.default.string
};
SmartAppBanner.defaultProps = {
  storeAndroidId: '',
  storeAppleId: '',
  storeKindleId: ''
};