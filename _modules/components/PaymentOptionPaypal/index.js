"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionPaypal = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component to manage payment option paypal express behavior without UI component
 */
var PaymentOptionPaypal = function PaymentOptionPaypal(props) {
  var UIComponent = props.UIComponent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};

exports.PaymentOptionPaypal = PaymentOptionPaypal;
PaymentOptionPaypal.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: _propTypes.default.object,

  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Amount to charge on paypal method
   */
  amount: _propTypes.default.string.isRequired,

  /**
   * paypal ClientID
   */
  clientID: _propTypes.default.string.isRequired,

  /**
   * style, some properties to show paypal button, check out the docs https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/ for a complete documentation
   */
  style: _propTypes.default.object,

  /**
   * Method to get success response from paypal button
   */
  handlerChangePaypal: _propTypes.default.func,

  /**
   * Components types before payment option paypal
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after payment option paypal
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before payment option paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after payment option paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptionPaypal.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};