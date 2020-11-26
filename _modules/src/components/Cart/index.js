"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ConfigContext = require("../../contexts/ConfigContext");

var _ApiContext = require("../../contexts/ApiContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Cart = function Cart(props) {
  var _stateConfig$order;

  var UIComponent = props.UIComponent,
      handleEditProduct = props.handleEditProduct,
      useValidationFields = props.useValidationFields,
      validationFieldsType = props.validationFieldsType;
  var requestsState = {};
  /**
   * API context manager
   */

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * Order context manager
   */


  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      _useOrder2$ = _useOrder2[1],
      updateProduct = _useOrder2$.updateProduct,
      removeProduct = _useOrder2$.removeProduct,
      clearCart = _useOrder2$.clearCart;
  /**
   * Config context manager
   */


  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      stateConfig = _useConfig2[0];
  /**
   * Total product in cart
   */


  var totalBalance = ((_stateConfig$order = stateConfig.order) === null || _stateConfig$order === void 0 ? void 0 : _stateConfig$order.quantity) || 0;
  /**
   * Max total product in cart by config
   */

  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  /**
   * State to save validation fields
   */

  var _useState = (0, _react.useState)({
    loading: true,
    fields: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      validationFields = _useState2[0],
      setValidationFields = _useState2[1];
  /**
   * Calc balance by product id
   */


  var getProductMax = function getProductMax(product) {
    var productMax = product.inventoried ? product.stock : maxCartProductConfig;
    var max = product.quantity + productMax - product.balance;
    return max < product.quantity ? product.quantity : max;
  };
  /**
   * Calc balance by product id
   */


  var offsetDisabled = function offsetDisabled(product) {
    var productMax = product.inventoried ? product.stock : maxCartProductConfig;
    return productMax - (product.balance - product.quantity);
  };
  /**
   * Change product quantity of the cart
   */


  var changeQuantity = function changeQuantity(product, quantity) {
    if (quantity === 0) {
      removeProduct(product);
    } else {
      updateProduct({
        id: product.id,
        business_id: product.id,
        code: product.code,
        quantity: quantity
      });
    }
  };
  /**
   * Get validation fields from API
   */


  var getValidationFields = function getValidationFields() {
    var source = {};
    requestsState.validation = source;
    ordering.validationFields().toType(validationFieldsType).get({
      cancelToken: source
    }).then(function (response) {
      var fields = {};
      response.content.result.forEach(function (field) {
        fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field;
      });
      setValidationFields(_objectSpread(_objectSpread({}, validationFields), {}, {
        loading: false,
        fields: fields
      }));
    }).catch(function (err) {
      if (err.constructor.name !== 'Cancel') {
        setValidationFields(_objectSpread(_objectSpread({}, validationFields), {}, {
          loading: false
        }));
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (useValidationFields) {
      getValidationFields();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    carts: orderState.carts,
    orderState: orderState,
    clearCart: clearCart,
    removeProduct: removeProduct,
    validationFields: validationFields,
    changeQuantity: changeQuantity,
    getProductMax: getProductMax,
    offsetDisabled: offsetDisabled,
    handleEditProduct: handleEditProduct
  })));
};

exports.Cart = Cart;
Cart.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to edit product behavior
   */
  handleEditProduct: _propTypes.default.func,

  /**
   * Boolean to get validation fields from API
   */
  useValidationFields: _propTypes.default.bool,

  /**
   * String filter to fetch validation fields
   */
  validationFieldsType: _propTypes.default.string
};
Cart.defaultProps = {
  useValidationFields: true,
  validationFieldsType: 'checkout'
};