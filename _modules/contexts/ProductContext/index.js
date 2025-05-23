"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProduct = exports.ProductProvider = exports.ProductContext = exports.PRODUCT_ACTIONS = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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