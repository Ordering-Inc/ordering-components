"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CouponControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _CustomerContext = require("../../contexts/CustomerContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage coupon form behavior without UI component
 */
var CouponControl = exports.CouponControl = function CouponControl(props) {
  var _orderState$carts;
  var businessId = props.businessId,
    businessIds = props.businessIds,
    price = props.price,
    UIComponent = props.UIComponent;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    _useOrder2$ = _useOrder2[1],
    applyCoupon = _useOrder2$.applyCoupon,
    applyOffer = _useOrder2$.applyOffer;
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      error: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var couponDefault = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && businessId && (orderState === null || orderState === void 0 || (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 || (_orderState$carts = _orderState$carts["businessId:".concat(businessId)]) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts.coupon) || null;
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    couponInput = _useState4[0],
    setCouponInput = _useState4[1];

  /**
   * method to manage coupon apply button
   */
  var handleButtonApplyClick = function handleButtonApplyClick() {
    var _configs$advanced_off;
    setCouponInput('');
    if (!(configs !== null && configs !== void 0 && (_configs$advanced_off = configs.advanced_offers_module) !== null && _configs$advanced_off !== void 0 && _configs$advanced_off.value)) {
      if (user !== null && user !== void 0 && user.id) {
        // Callcenter
        if (businessIds) {
          businessIds.map(function (businessId) {
            return applyCoupon({
              business_id: businessId,
              coupon: couponInput
            }, {
              businessId: businessId,
              userId: user === null || user === void 0 ? void 0 : user.id
            });
          });
          return;
        }
        applyCoupon({
          business_id: businessId,
          coupon: couponInput
        }, {
          businessId: businessId,
          userId: user === null || user === void 0 ? void 0 : user.id
        });
      } else {
        if (businessIds) {
          businessIds.map(function (businessId) {
            return applyCoupon({
              business_id: businessId,
              coupon: couponInput
            });
          });
          return;
        }
        applyCoupon({
          business_id: businessId,
          coupon: couponInput
        });
      }
    } else {
      if (businessIds) {
        businessIds.forEach(function (businessId) {
          var dataOffer = {
            business_id: businessId,
            coupon: couponInput,
            force: true
          };
          if (user !== null && user !== void 0 && user.id) dataOffer.userId = user === null || user === void 0 ? void 0 : user.id; // Callcenter
          applyOffer(dataOffer);
        });
        return;
      }
      var dataOffer = {
        business_id: businessId,
        coupon: couponInput,
        force: true
      };
      if (user !== null && user !== void 0 && user.id) dataOffer.userId = user === null || user === void 0 ? void 0 : user.id; // Callcenter
      applyOffer(dataOffer);
    }
  };

  /**
   * method to manage remove coupon assigned
   */
  var handleRemoveCouponClick = function handleRemoveCouponClick() {
    if (businessIds) {
      businessIds.map(function (businessId) {
        return applyCoupon({
          business_id: businessId,
          coupon: null
        });
      });
      return;
    }
    applyCoupon({
      business_id: businessId,
      coupon: null
    });
  };
  (0, _react.useEffect)(function () {
    if (price < 0) {
      handleRemoveCouponClick();
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: true,
        content: t('COUPON_TOTAL_ERROR', 'The total value of the cart with discount must be positive'),
        error: true
      }));
    }
  }, [price]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    couponDefault: couponDefault,
    couponInput: couponInput,
    onChangeInputCoupon: function onChangeInputCoupon(val) {
      return setCouponInput(val);
    },
    handleButtonApplyClick: handleButtonApplyClick,
    handleRemoveCouponClick: handleRemoveCouponClick,
    confirm: confirm,
    setConfirm: setConfirm
  })));
};
CouponControl.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * isDisabled, flag to enable/disable coupon input
   */
  isDisabled: _propTypes.default.bool,
  /**
   * Components types before coupon control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after coupon control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before coupon control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after coupon control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
CouponControl.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};