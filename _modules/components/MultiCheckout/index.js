"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
var MultiCheckout = function MultiCheckout(props) {
  var _Object$values;

  var UIComponent = props.UIComponent,
      onPlaceOrderClick = props.onPlaceOrderClick;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      carts = _useOrder2[0].carts,
      placeMulitCarts = _useOrder2[1].placeMulitCarts;

  var openCarts = ((_Object$values = Object.values(carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;

    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (cart === null || cart === void 0 ? void 0 : cart.valid_schedule) && (cart === null || cart === void 0 ? void 0 : cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.valid_maximum) && (cart === null || cart === void 0 ? void 0 : cart.valid_minimum);
  })) || null || [];
  var totalCartsPrice = openCarts && openCarts.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.total);
  }, 0);
  var cartsUuids = openCarts.reduce(function (uuids, cart) {
    return [].concat(_toConsumableArray(uuids), [cart.uuid]);
  }, []);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      placing = _useState2[0],
      setPlacing = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      paymethodSelected = _useState4[0],
      setPaymethodSelected = _useState4[1];

  var handleGroupPlaceOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _paymethodSelected$pa;

      var paymethodData, _paymethodSelected$pa2, payload, _paymethodSelected$pa3, _yield$placeMulitCart, error, result, orderUuids;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data;

              if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway)) {
                paymethodData = JSON.stringify({
                  source_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa2 = paymethodSelected.paymethod_data) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id
                });
              }

              payload = {
                carts: cartsUuids,
                amount: totalCartsPrice
              };

              if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  paymethod_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa3 = paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.id
                });
              }

              if (paymethodData) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  paymethod_data: paymethodData
                });
              }

              if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  wallet_id: paymethodSelected.wallet_id,
                  wallet_data: paymethodSelected.wallet_data
                });
              }

              setPlacing(true);
              _context.next = 9;
              return placeMulitCarts(payload);

            case 9:
              _yield$placeMulitCart = _context.sent;
              error = _yield$placeMulitCart.error;
              result = _yield$placeMulitCart.result;
              setPlacing(false);

              if (!error) {
                orderUuids = result.carts.reduce(function (uuids, cart) {
                  return [].concat(_toConsumableArray(uuids), [cart.order.uuid]);
                }, []);
                onPlaceOrderClick && onPlaceOrderClick(orderUuids);
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleGroupPlaceOrder() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSelectPaymethod = function handleSelectPaymethod(paymethod) {
    setPaymethodSelected(_objectSpread(_objectSpread(_objectSpread({}, paymethodSelected), paymethod), {}, {
      paymethod_data: null
    }));
  };

  var handleSelectWallet = function handleSelectWallet(checked, wallet) {
    if (checked) {
      setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
        wallet_id: wallet.id,
        wallet_data: wallet.balance > totalCartsPrice ? totalCartsPrice : wallet.balance
      }));
    } else {
      var _paymethodSelected = _objectSpread({}, paymethodSelected);

      delete _paymethodSelected.wallet_id;
      delete _paymethodSelected.wallet_data;
      setPaymethodSelected(_paymethodSelected);
    }
  };

  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
      paymethod_data: data
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    placing: placing,
    openCarts: openCarts,
    totalCartsPrice: totalCartsPrice,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleGroupPlaceOrder: handleGroupPlaceOrder,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange
  })));
};

exports.MultiCheckout = MultiCheckout;
MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};