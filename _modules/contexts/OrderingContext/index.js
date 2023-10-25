"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderingProvider = exports.OrderingContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../ConfigContext");
var _SiteContext = require("../SiteContext");
var _SessionContext = require("../SessionContext");
var _WebsocketContext = require("../WebsocketContext");
var _OrderContext = require("../OrderContext");
var _BusinessContext = require("../BusinessContext");
var _LanguageContext = require("../LanguageContext");
var _ApiContext = require("../ApiContext");
var _EventContext = require("../EventContext");
var _UtilsContext = require("../UtilsContext");
var _ValidationsFieldsContext = require("../ValidationsFieldsContext");
var _CustomerContext = require("../CustomerContext");
var _ToastContext = require("../ToastContext");
var _webStrategy = require("../../webStrategy");
var _OrderingThemeContext = require("../OrderingThemeContext");
var _OptimizationLoadContext = require("../OptimizationLoadContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
var OrderingContext = exports.OrderingContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
var OrderingProvider = exports.OrderingProvider = function OrderingProvider(_ref) {
  var _settings$franchiseSl;
  var Alert = _ref.Alert,
    settings = _ref.settings,
    isAlsea = _ref.isAlsea,
    children = _ref.children;
  var webStrategy = new _webStrategy.WebStrategy();
  var restOfSettings = {
    project: settings.project,
    appId: settings.app_id,
    countryCode: settings.countryCode,
    useOptimizeLoad: settings.useOptimizeLoad,
    use_root_point: settings.use_root_point,
    isAlsea: isAlsea
  };
  return /*#__PURE__*/_react.default.createElement(OrderingContext.Provider, null, /*#__PURE__*/_react.default.createElement(_EventContext.EventProvider, null, /*#__PURE__*/_react.default.createElement(_ApiContext.ApiProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_OptimizationLoadContext.OptimizationLoadProvider, {
    settings: Object.assign(settings.api, restOfSettings),
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_LanguageContext.LanguageProvider, {
    settings: Object.assign(settings.api, restOfSettings),
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_ConfigContext.ConfigProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderingThemeContext.OrderingThemeProvider, {
    settings: Object.assign(settings.api, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_SiteContext.SiteProvider, {
    appId: settings.app_id
  }, /*#__PURE__*/_react.default.createElement(_UtilsContext.UtilsProviders, null, /*#__PURE__*/_react.default.createElement(_ToastContext.ToastProvider, null, /*#__PURE__*/_react.default.createElement(_ValidationsFieldsContext.ValidationFieldsProvider, {
    appId: settings.app_id
  }, /*#__PURE__*/_react.default.createElement(_SessionContext.SessionProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_WebsocketContext.WebsocketProvider, {
    strategy: webStrategy,
    settings: Object.assign(settings.socket, restOfSettings)
  }, /*#__PURE__*/_react.default.createElement(_CustomerContext.CustomerProvider, {
    strategy: webStrategy
  }, /*#__PURE__*/_react.default.createElement(_OrderContext.OrderProvider, {
    strategy: webStrategy,
    Alert: Alert,
    isAlsea: isAlsea,
    franchiseId: (_settings$franchiseSl = settings === null || settings === void 0 ? void 0 : settings.franchiseSlug) !== null && _settings$franchiseSl !== void 0 ? _settings$franchiseSl : settings === null || settings === void 0 ? void 0 : settings.franchiseId,
    businessSlug: settings === null || settings === void 0 ? void 0 : settings.businessSlug
  }, /*#__PURE__*/_react.default.createElement(_BusinessContext.BusinessProvider, null, children))))))))))))))));
};