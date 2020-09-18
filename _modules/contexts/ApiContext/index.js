"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApi = exports.ApiProvider = exports.ApiContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingApiSdk = require("ordering-api-sdk");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Create ApiContext
 * Context to use Ordering API on the app
 */
var ApiContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Api provider to manage api request
 * @param {props} props
 */

exports.ApiContext = ApiContext;

var ApiProvider = function ApiProvider(_ref) {
  var settings = _ref.settings,
      children = _ref.children;
  var ordering = new _orderingApiSdk.Ordering(settings);
  return /*#__PURE__*/_react.default.createElement(ApiContext.Provider, {
    value: [ordering]
  }, children);
};
/**
 * Hook to get api state
 */


exports.ApiProvider = ApiProvider;

var useApi = function useApi() {
  var apiManager = (0, _react.useContext)(ApiContext);
  return apiManager || [{}];
};

exports.useApi = useApi;