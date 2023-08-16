"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage coupon form behavior without UI component
 */
var CouponControl = function CouponControl(props) {
  var _orderState$carts, _orderState$carts2;
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
  var couponDefault = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && businessId && (orderState === null || orderState === void 0 ? void 0 : (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : (_orderState$carts2 = _orderState$carts["businessId:".concat(businessId)]) === null || _orderState$carts2 === void 0 ? void 0 : _orderState$carts2.coupon) || null;
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
exports.CouponControl = CouponControl;
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