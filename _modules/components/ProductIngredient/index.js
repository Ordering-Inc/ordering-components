"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductIngredient = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Component to render product ingredient
 */
var ProductIngredient = exports.ProductIngredient = function ProductIngredient(props) {
  var UIComponent = props.UIComponent,
    ingredient = props.ingredient,
    onChange = props.onChange;

  /**
   * Set current state
   */
  var state = {
    id: ingredient.id,
    name: ingredient.name,
    selected: props.state.selected
  };

  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */
  var changeState = function changeState(newState) {
    onChange && onChange(newState, ingredient);
  };

  /**
   * Select/unselect the suboption
   */
  var toggleSelect = function toggleSelect() {
    changeState({
      selected: !state.selected
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    state: state,
    toggleSelect: toggleSelect
  })));
};
ProductIngredient.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Ingredient object to render UI
   */
  ingredient: _propTypes.default.object.isRequired,
  /**
   * Current state
   */
  state: _propTypes.default.shape({
    selected: _propTypes.default.bool
  }).isRequired,
  /**
   * Function to get ingredient changes
   */
  onChange: _propTypes.default.func
};
ProductIngredient.defaultProps = {
  state: {}
};