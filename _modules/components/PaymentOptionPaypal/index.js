"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionPaypal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage payment option paypal behavior without UI component
 */
var PaymentOptionPaypal = function PaymentOptionPaypal(props) {
  var _window, _window$paypal, _window$paypal$Button;

  var token = props.token,
      body = props.body,
      clientId = props.clientId,
      btnStyle = props.btnStyle,
      UIComponent = props.UIComponent,
      onButtonReady = props.onButtonReady;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSdkReady = _useState2[0],
      setIsSdkReady = _useState2[1];
  /**
   * Method to create script for paypal sdk
   */


  var addPaypalSdk = function addPaypalSdk() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://www.paypal.com/sdk/js?client-id=".concat(clientId);
    script.async = true;

    script.onload = function () {
      setIsSdkReady(true);
    };

    script.onerror = function () {
      throw new Error('Paypal SDK could not be loaded.');
    };

    document.body.appendChild(script);
  };

  (0, _react.useEffect)(function () {
    if (window !== undefined && window.paypal === undefined) {
      addPaypalSdk();
    } else if (window !== undefined && window.paypal !== undefined && onButtonReady) {
      onButtonReady();
    }
  }, []);

  var createOrder = function createOrder(data, actions) {
    var params = {
      paymethod_id: body.paymethod_id,
      amount: body.amount,
      delivery_zone_id: body.delivery_zone_id
    };
    var url = "".concat(ordering.root, "/carts/").concat(body.cartUuid, "/place");
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(token)
      },
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (res.error) {
        console.log(res.result);
        return null;
      } else {
        return res.result.pay_reference;
      }
    });
  };

  var onApprove = function onApprove(data, actions) {
    var url = "".concat(ordering.root, "/carts/").concat(body.cartUuid, "/confirm");
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log(res);
      return res;
    });
  };

  var onError = function onError(error) {
    console.log(error);
    return error;
  };
  /**
   * Assign paypal button to an instance of react dom
   */


  var Button = (_window = window) === null || _window === void 0 ? void 0 : (_window$paypal = _window.paypal) === null || _window$paypal === void 0 ? void 0 : (_window$paypal$Button = _window$paypal.Buttons) === null || _window$paypal$Button === void 0 ? void 0 : _window$paypal$Button.driver('react', {
    React: _react.default,
    ReactDOM: _reactDom.default
  });
  return UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isSdkReady: isSdkReady,
    PaypalButton: Button,
    paypalButtonProps: {
      createOrder: createOrder,
      onApprove: onApprove,
      onError: onError,
      style: btnStyle
    }
  }));
};

exports.PaymentOptionPaypal = PaymentOptionPaypal;
PaymentOptionPaypal.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * User token
   */
  token: _propTypes.default.string.isRequired,

  /**
   * Object with body data to place order
   */
  body: _propTypes.default.object.isRequired,

  /**
   * paypal ClientID
   */
  clientId: _propTypes.default.string.isRequired,

  /**
   * Method to get success response from paypal button
   */
  handlerChangePaypal: _propTypes.default.func,

  /**
   * Components types before Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Payment options paypal
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