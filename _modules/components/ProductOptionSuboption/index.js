"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSuboption = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    pizzaState = props.pizzaState;

  /**
   * Predefine default values for suboption state
   */
  var selected = props.state.selected || props.state.quantity > 0;
  var quantity = 0;
  if (selected && props.state.quantity && props.state.quantity > 0) {
    quantity = props.state.quantity;
  } else if (selected) {
    quantity = 1;
  }
  var position = props.state.position || (option.with_half_option ? 'left' : 'whole');
  var price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price;
  var usePizzaValidation = (pizzaState === null || pizzaState === void 0 || (_pizzaState = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState === void 0 ? void 0 : _pizzaState.value) === (option === null || option === void 0 ? void 0 : option.max);

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
    var selectStatus = isOrigin ? !state.selected : state.selected;
    var minMaxValidation = option.with_half_option ? usePizzaValidation : balance === option.max && !((option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1);
    if (selectStatus && option.limit_suboptions_by_max && minMaxValidation) {
      return;
    }
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      quantity: state.selected ? 0 : 1,
      selected: !state.selected
    }));
  };

  /**
   * Increment suboption quantity
   */
  var increment = function increment() {
    if (!(option !== null && option !== void 0 && option.with_half_option) && option.limit_suboptions_by_max && (balance === option.max || state.quantity === suboption.max)) {
      return;
    }
    if (!(option !== null && option !== void 0 && option.with_half_option) && !option.limit_suboptions_by_max && state.quantity === suboption.max) {
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
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      position: position,
      price: price,
      total: price * state.quantity
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    state: state,
    usePizzaValidation: usePizzaValidation,
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