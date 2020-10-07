"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBusiness = exports.BusinessProvider = exports.BusinessContext = exports.BUSINESS_ACTIONS = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BUSINESS_ACTIONS = {
  SET_FILTER_VALUES: 'set_filter_values',
  FETCH_BUSINESSES: 'fetch_businesses',
  LOADING: 'loading',
  ERROR: 'error'
};
/**
 * Create BusinessContext
 * This context will manage the business internally and provide an easy interface
 */

exports.BUSINESS_ACTIONS = BUSINESS_ACTIONS;
var BusinessContext = /*#__PURE__*/(0, _react.createContext)();
exports.BusinessContext = BusinessContext;
var defaultInitialState = {
  filterValues: {
    search: '',
    sortBy: '',
    category: '',
    businessType: 'delivery_time'
  },
  businesses: [],
  loading: false,
  error: null
};
/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */

var defaultReducer = function defaultReducer(state, action) {
  var _action$data$business, _action$data$loading, _action$data$error;

  switch (action.type) {
    case BUSINESS_ACTIONS.SET_FILTER_VALUES:
      return _objectSpread(_objectSpread({}, state), {}, {
        filterValues: action.filterValues
      });

    case BUSINESS_ACTIONS.FETCH_BUSINESSES:
      return _objectSpread(_objectSpread({}, state), {}, {
        businesses: action.isConcatArray ? state.businesses.concat(action.data.businesses) : (_action$data$business = action.data.businesses) !== null && _action$data$business !== void 0 ? _action$data$business : [],
        loading: (_action$data$loading = action.data.loading) !== null && _action$data$loading !== void 0 ? _action$data$loading : false,
        error: (_action$data$error = action.data.error) !== null && _action$data$error !== void 0 ? _action$data$error : null
      });

    case BUSINESS_ACTIONS.LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: action.loading
      });

    case BUSINESS_ACTIONS.ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error
      });

    default:
      return state;
  }
};
/**
 * Custom provider to business manager
 * This provider has a reducer for manage business state
 * @param {props} props
 */


var BusinessProvider = function BusinessProvider(_ref) {
  var _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? defaultReducer : _ref$reducer,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? defaultInitialState : _ref$initialState,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(BusinessContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};
/**
 * Hook to get and update business state
 */


exports.BusinessProvider = BusinessProvider;

var useBusiness = function useBusiness() {
  var BusinessManager = (0, _react.useContext)(BusinessContext);
  return BusinessManager || [{}, function () {}];
};

exports.useBusiness = useBusiness;