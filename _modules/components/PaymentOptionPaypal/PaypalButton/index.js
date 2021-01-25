"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaypalButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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
 * Component to manage paypal button without UI component
 */
var PaypalButton = function PaypalButton(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      sdkReady = _useState2[0],
      setSdkReady = _useState2[1];
  /**
   * Method to create script for paypal sdk
   */


  var addPaypalSdk = function addPaypalSdk() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://www.paypal.com/sdk/js?client-id=".concat(props.clientID);
    script.async = true;
    script.defer = true;

    script.onload = function () {
      setSdkReady(true);
    };

    script.onerror = function () {
      throw new Error('Paypal SDK could not be loaded.');
    };

    document.body.appendChild(script);
  };

  (0, _react.useEffect)(function () {
    if (window !== undefined && window.paypal === undefined) {
      addPaypalSdk();
    } else if (window !== undefined && window.paypal !== undefined && props.onButtonReady) {
      props.onButtonReady();
    }
  }, []); // amount goes in the value field we will use props of the button for this

  var createOrder = function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: props.amount
        }
      }]
    });
  };

  var onApprove = function onApprove(data, actions) {
    return actions.order.capture().then(function (details) {
      if (props.onSuccess) {
        return props.onSuccess(data);
      }
    }).catch(function (err) {
      console.log(err);
    });
  };
  /**
   * Loading definition
   */


  if (!sdkReady && window.paypal === undefined) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  }
  /**
   * Assign paypal button to an instance of react dom
   */


  var Button = window.paypal.Buttons.driver('react', {
    React: _react.default,
    ReactDOM: _reactDom.default
  });
  return /*#__PURE__*/_react.default.createElement(Button, _extends({}, props, {
    createOrder: props.amount && !createOrder ? function (data, actions) {
      return createOrder(data, actions);
    } : function (data, actions) {
      return createOrder(data, actions);
    },
    onApprove: props.onSuccess ? function (data, actions) {
      return onApprove(data, actions);
    } : function (data, actions) {
      return onApprove(data, actions);
    },
    style: props.style
  }));
};

exports.PaypalButton = PaypalButton;