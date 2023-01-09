"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../../../../src/contexts/ConfigContext");
var _SessionContext = require("../../../../src/contexts/SessionContext");
var _WebsocketContext = require("../../../../src/contexts/WebsocketContext");
var _OrderContext = require("../../../../src/contexts/OrderContext");
var _BusinessContext = require("../../../../src/contexts/BusinessContext");
var _LanguageContext = require("../../../../src/contexts/LanguageContext");
var _ApiContext = require("../../../../src/contexts/ApiContext");
var _EventContext = require("../../../../src/contexts/EventContext");
var _UtilsContext = require("../../../../src/contexts/UtilsContext");
var _ValidationsFieldsContext = require("../../../../src/contexts/ValidationsFieldsContext");
var _ToastContext = require("../../../../src/contexts/ToastContext");
var _CustomerContext = require("../../../../src/contexts/CustomerContext");
var _OptimizationLoadContext = require("../../../../src/contexts/OptimizationLoadContext");
var _OrderingThemeContext = require("../../../../src/contexts/OrderingThemeContext");
var _NativeStrategy = require("../../NativeStrategy");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  var _settings$franchiseSl, _settings$businessSlu;
  var Alert = _ref.Alert,
    settings = _ref.settings,
    children = _ref.children,
    isDisableToast = _ref.isDisableToast,
    isDisabledDefaultOpts = _ref.isDisabledDefaultOpts;
  var nativeStrategy = new _NativeStrategy.NativeStrategy();
  var restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    use_root_point: settings.use_root_point,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings === null || settings === void 0 ? void 0 : settings.useOptimizeLoad
  };
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_EventContext.EventProvider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_OptimizationLoadContext.OptimizationLoadProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderingThemeContext.OrderingThemeProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_UtilsContext.UtilsProviders, null, /*#__PURE__*/_react.default.createElement(_ToastContext.ToastProvider, null, /*#__PURE__*/_react.default.createElement(_ValidationsFieldsContext.ValidationFieldsProvider, null, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    strategy: nativeStrategy,
    settings: Object.assign(settings.socket, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_CustomerContext.CustomerProvider, {
    strategy: nativeStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, {
    isDisabledDefaultOpts: isDisabledDefaultOpts,
    strategy: nativeStrategy,
    Alert: Alert,
    isDisableToast: isDisableToast,
    franchiseId: (_settings$franchiseSl = settings === null || settings === void 0 ? void 0 : settings.franchiseSlug) !== null && _settings$franchiseSl !== void 0 ? _settings$franchiseSl : settings === null || settings === void 0 ? void 0 : settings.franchiseId,
    businessSlug: settings === null || settings === void 0 ? void 0 : settings.businessSlug
  }, /*#__PURE__*/_react.default.createElement(_BusinessContext.BusinessProvider, {
    businessId: (_settings$businessSlu = settings === null || settings === void 0 ? void 0 : settings.businessSlug) !== null && _settings$businessSlu !== void 0 ? _settings$businessSlu : settings === null || settings === void 0 ? void 0 : settings.businessId
  }, children)))))))))))))));
};
exports.OrderingProvider = OrderingProvider;