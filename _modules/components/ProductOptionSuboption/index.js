"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSuboption = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Component to render product option suboption
 */
var ProductOptionSuboption = exports.ProductOptionSuboption = function ProductOptionSuboption(props) {
  var _pizzaState;
  var UIComponent = props.UIComponent,
    balance = props.balance,
    option = props.option,
    suboption = props.suboption,
    onChange = props.onChange,
    isOrigin = props.isOrigin,
    pizzaState = props.pizzaState,
    isAlsea = props.isAlsea,
    quesoYSalsaOptions = props.quesoYSalsaOptions;

  /**
   * Predefine default values for suboption state
   */
  var selected = props.state.selected || props.state.quantity > 0;
  var quantity = 0;
  if (selected && props.state.quantity && props.state.quantity > 0) {
    quantity = props.state.quantity;
  } else if (selected) {
    var _option$name;
    quantity = quesoYSalsaOptions.includes(option === null || option === void 0 || (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.toLowerCase()) && isAlsea ? props.state.quantity : 1;
  }
  var position = props.state.position || 'whole';
  var price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price;
  var usePizzaValidation = (pizzaState === null || pizzaState === void 0 || (_pizzaState = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState === void 0 ? void 0 : _pizzaState.value) >= (option === null || option === void 0 ? void 0 : option.max) && !((option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1);

  /**
   * Set current state
   */
  var state = {
    id: suboption.id,
    name: suboption.name,
    price: price,
    selected: selected,
    quantity: quantity,
    position: position,
    total: price * quantity
  };

  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */
  var changeState = function changeState(newState) {
    onChange && onChange(newState, suboption, option);
  };

  /**
   * Select/unselect the suboption
   */
  var toggleSelect = function toggleSelect() {
    var _pizzaState2;
    var selectStatus = isOrigin ? !state.selected : state.selected;
    var minMaxValidation = option.with_half_option ? usePizzaValidation : balance === option.max && !((option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1);
    var canBeSelectedByHalf = (pizzaState === null || pizzaState === void 0 || (_pizzaState2 = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState2 === void 0 ? void 0 : _pizzaState2.value) === option.max - 0.5 && option.with_half_option;
    var shouldApplyHalfLogic = (option === null || option === void 0 ? void 0 : option.with_half_option) && (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && (option === null || option === void 0 ? void 0 : option.limit_suboptions_by_max);
    var remainingBalance = option.max - balance;
    var canOnlySelectHalf = shouldApplyHalfLogic && remainingBalance < 1 && remainingBalance > 0;
    if (selectStatus && (option.limit_suboptions_by_max || isAlsea) && minMaxValidation && !canBeSelectedByHalf) {
      return;
    }
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      quantity: state.selected ? 0 : 1,
      selected: !state.selected,
      position: canBeSelectedByHalf || canOnlySelectHalf ? 'left' : 'whole'
    }));
  };

  /**
   * Increment suboption quantity
   */
  var increment = function increment() {
    var shouldApplyHalfLogic = (option === null || option === void 0 ? void 0 : option.with_half_option) && (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && (option === null || option === void 0 ? void 0 : option.limit_suboptions_by_max);
    var maxByPosition = shouldApplyHalfLogic && state.position !== 'whole' ? suboption.max * 2 : suboption.max;

    // Validar si incrementar excedería el máximo de la opción cuando está en 'whole'
    if (shouldApplyHalfLogic && state.position === 'whole') {
      var _pizzaState3;
      var otherOptionsValue = pizzaState === null || pizzaState === void 0 || (_pizzaState3 = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState3 === void 0 ? void 0 : _pizzaState3.value;
      var wouldExceedMax = otherOptionsValue + 1 > option.max;
      if (wouldExceedMax) {
        return;
      }
    }
    if (!(option !== null && option !== void 0 && option.with_half_option) && option.limit_suboptions_by_max && (balance === option.max || state.quantity === suboption.max)) {
      return;
    }
    if (!(option !== null && option !== void 0 && option.with_half_option) && !option.limit_suboptions_by_max && state.quantity === suboption.max) {
      return;
    }
    if (shouldApplyHalfLogic && state.quantity === maxByPosition) {
      return;
    }
    if (option !== null && option !== void 0 && option.with_half_option && usePizzaValidation) {
      return;
    }
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      selected: state.quantity === 0 ? true : state.selected,
      quantity: state.quantity + 1,
      total: state.price * (state.quantity + 1)
    }));
  };

  /**
   * Decrement suboption quantity
   */
  var decrement = function decrement() {
    if (state.quantity === 0) {
      return;
    }
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      selected: state.quantity === 1 ? false : state.selected,
      quantity: state.quantity - 1,
      total: state.price * (state.quantity - 1)
    }));
  };

  /**
   * Change position of the suboption
   * @param {string} position Position of the suboption
   */
  var changePosition = function changePosition(position) {
    var price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price;
    var shouldApplyHalfLogic = (option === null || option === void 0 ? void 0 : option.with_half_option) && (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && (option === null || option === void 0 ? void 0 : option.limit_suboptions_by_max);
    if (shouldApplyHalfLogic && position === 'whole') {
      var _pizzaState4;
      var otherOptionsValue = pizzaState === null || pizzaState === void 0 || (_pizzaState4 = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState4 === void 0 ? void 0 : _pizzaState4.value;
      var additionalValue = position === 'whole' ? state.quantity / 2 : 0;
      var wouldExceedMax = otherOptionsValue + additionalValue > option.max;
      if (wouldExceedMax) {
        return;
      }
    }
    var newQuantity = state.quantity;
    if (shouldApplyHalfLogic && position === 'whole' && state.quantity > suboption.max) {
      newQuantity = suboption.max;
    }
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      position: position,
      price: price,
      quantity: newQuantity,
      total: price * newQuantity
    }));
  };

  /**
   * Change quantity of the suboption
   * @param {number} quantity Quantity of the suboption
   */
  var changeQuantity = function changeQuantity(quantity) {
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      quantity: quantity,
      total: state.price * quantity
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    state: state,
    usePizzaValidation: usePizzaValidation,
    changeQuantity: changeQuantity,
    increment: increment,
    decrement: decrement,
    changePosition: changePosition,
    toggleSelect: toggleSelect
  })));
};
ProductOptionSuboption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Current quantity options or suboptions selected
   */
  balance: _propTypes.default.number.isRequired,
  /**
   * Option object to render UI
   */
  option: _propTypes.default.object.isRequired,
  /**
   * Suboption object to render UI
   */
  suboption: _propTypes.default.object.isRequired,
  /**
   * Current state
   */
  state: _propTypes.default.shape({
    selected: _propTypes.default.bool,
    quantity: _propTypes.default.number,
    position: _propTypes.default.string
  }).isRequired,
  /**
   * Function to get suboption changes
   */
  onChange: _propTypes.default.func
};
ProductOptionSuboption.defaultProps = {
  state: {},
  balance: 0
};