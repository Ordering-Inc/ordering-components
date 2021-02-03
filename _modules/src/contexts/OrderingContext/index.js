"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ConfigContext = require("../ConfigContext");

var _SessionContext = require("../SessionContext");

var _WebsocketContext = require("../WebsocketContext");

var _OrderContext = require("../OrderContext");

var _BusinessContext = require("../BusinessContext");

var _LanguageContext = require("../LanguageContext");

var _ApiContext = require("../ApiContext");

var _EventContext = require("../EventContext");

var _UtilsContext = require("../UtilsContext");

var _webStrategy = require("../../webStrategy");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
var OrderingContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */

exports.OrderingContext = OrderingContext;

var OrderingProvider = function OrderingProvider(_ref) {
  var Alert = _ref.Alert,
      settings = _ref.settings,
      children = _ref.children;
  var webStrategy = new _webStrategy.WebStrategy();

  var _useState = (0, _react.useState)(settings),
      _useState2 = _slicedToArray(_useState, 2),
      settingItems = _useState2[0],
      setSettingItems = _useState2[1];

  (0, _react.useEffect)(function () {
    console.log('ordering provider', settings);
    setSettingItems(settings);
  }, [settings]);
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_EventContext.EventProvider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: Object.assign(settingItems.api, {
      project: settingItems.project
    })
  }, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, null, /*#__PURE__*/_react.default.createElement(_UtilsContext.UtilsProviders, null, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    settings: Object.assign(settingItems.socket, {
      project: settingItems.project
    })
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, {
    strategy: webStrategy,
    Alert: Alert
  }, /*#__PURE__*/_react.default.createElement(_BusinessContext.BusinessProvider, null, children))))))))));
};

exports.OrderingProvider = OrderingProvider;