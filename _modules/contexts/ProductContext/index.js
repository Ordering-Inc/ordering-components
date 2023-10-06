"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProduct = exports.ProductProvider = exports.ProductContext = exports.PRODUCT_ACTIONS = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PRODUCT_ACTIONS = exports.PRODUCT_ACTIONS = {
  CHANGE_INGREDIENTS: 'change_ingredients',
  CHANGE_OPTIONS: 'change_options'
};

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
var ProductContext = exports.ProductContext = /*#__PURE__*/(0, _react.createContext)();
var defaultInitialState = {
  ingredients: [],
  options: []
};

/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */
var defaultReducer = function defaultReducer(state, action) {
  switch (action.type) {
    case PRODUCT_ACTIONS.CHANGE_INGREDIENTS:
      {
        window.localStorage.setItem('ingredients', JSON.stringify(action.ingredients));
        return _objectSpread(_objectSpread({}, state), {}, {
          ingredients: action.ingredients
        });
      }
    case PRODUCT_ACTIONS.CHANGE_OPTIONS:
      {
        window.localStorage.setItem('options', JSON.stringify(action.options));
        return _objectSpread(_objectSpread({}, state), {}, {
          options: action.options
        });
      }
    default:
      return state;
  }
};

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
var ProductProvider = exports.ProductProvider = function ProductProvider(_ref) {
  var _ref$reducer = _ref.reducer,
    reducer = _ref$reducer === void 0 ? defaultReducer : _ref$reducer,
    _ref$initialState = _ref.initialState,
    initialState = _ref$initialState === void 0 ? defaultInitialState : _ref$initialState,
    children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ProductContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};

/**
 * Hook to get and update order state
 */
var useProduct = exports.useProduct = function useProduct() {
  var productManager = (0, _react.useContext)(ProductContext);
  return productManager || [{}, function () {}];
};