"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverTips = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _decimal = _interopRequireDefault(require("decimal.js"));
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage driver tips behavior without UI component
 */
var DriverTips = exports.DriverTips = function DriverTips(props) {
  var UIComponent = props.UIComponent,
    businessId = props.businessId,
    businessIds = props.businessIds,
    useOrderContext = props.useOrderContext;
  if (useOrderContext && !businessId && !businessIds) {
    throw new Error('`businessId` is required when `useOrderContext` is true.');
  }

  /**
   * Order context
   */
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changeDriverTip = _useOrder2[1].changeDriverTip;
  /**
   * Config context
   */
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  /**
   * Save percentage selected by user
   */
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    optionSelected = _useState2[0],
    setOptionSelected = _useState2[1];
  /**
   * Amount of driver tip, calculate with order.total and optionSelected
   */
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    driverTipAmount = _useState4[0],
    setDriverTipAmount = _useState4[1];

  /**
   * handler when user change driver tip option
   * @param {number} val
   */
  var handlerChangeOption = function handlerChangeOption(driverTip) {
    var isFixedPrice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.isFixedPrice;
    driverTip = typeof driverTip === 'string' ? parseFloat(driverTip) : driverTip;
    if (useOrderContext) {
      if (businessIds) {
        var tip = new _decimal.default(driverTip);
        var tipPerCart = !isFixedPrice ? driverTip : parseFloat((Math.trunc(tip.dividedBy(businessIds === null || businessIds === void 0 ? void 0 : businessIds.length) * 100) / 100).toFixed(2));
        var correctionValue = !isFixedPrice ? 0 : parseFloat(tip.minus(new _decimal.default(tipPerCart).times(businessIds === null || businessIds === void 0 ? void 0 : businessIds.length)).toFixed(2));
        var tipsPerCart = businessIds.map(function (bid, idx) {
          return {
            bid: bid,
            value: parseFloat(new _decimal.default(tipPerCart).plus(idx === 0 ? correctionValue : 0).toFixed(2))
          };
        });
        Promise.all(tipsPerCart.map(function (tip) {
          return changeDriverTip(tip.bid, tip.value, isFixedPrice);
        }));
      } else {
        changeDriverTip(businessId, driverTip, isFixedPrice);
      }
    } else {
      setOptionSelected(driverTip);
    }
    props.handlerChangeDriverOption && props.handlerChangeDriverOption(driverTip);
  };
  (0, _react.useEffect)(function () {
    var _orderState$carts, _orderState$carts2, _configs$driver_tip_t, _configs$driver_tip_u;
    var orderDriverTipRate = ((_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 || (_orderState$carts = _orderState$carts["businessId:".concat(businessId !== null && businessId !== void 0 ? businessId : businessIds === null || businessIds === void 0 ? void 0 : businessIds[0])]) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts.driver_tip_rate) || 0;
    var orderDriverTip = ((_orderState$carts2 = orderState.carts) === null || _orderState$carts2 === void 0 || (_orderState$carts2 = _orderState$carts2["businessId:".concat(businessId !== null && businessId !== void 0 ? businessId : businessIds === null || businessIds === void 0 ? void 0 : businessIds[0])]) === null || _orderState$carts2 === void 0 ? void 0 : _orderState$carts2.driver_tip) || 0;
    var isFixedPrice = parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1 || !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10); // 1 - fixed, 2 - percentage

    setOptionSelected(isFixedPrice ? orderDriverTip : orderDriverTipRate);
    setDriverTipAmount(orderDriverTip);
  }, [orderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driverTipAmount: driverTipAmount,
    optionSelected: optionSelected,
    handlerChangeOption: handlerChangeOption
  })));
};
DriverTips.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Cart business id
   */
  businessId: _propTypes.default.number,
  /**
   * Switch to use order context
   */
  useOrderContext: _propTypes.default.bool,
  /**
   * driver tips options
   */
  driverTipsOptions: _propTypes.default.arrayOf(_propTypes.default.number),
  /**
   * method to get option selected
   */
  handlerChangeDriverOption: _propTypes.default.func,
  /**
   * Components types before driver tips
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after driver tips
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before driver tips
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after driver tips
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriverTips.defaultProps = {
  useOrderContext: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};