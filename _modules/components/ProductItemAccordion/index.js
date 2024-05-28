"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductItemAccordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
 * Component to render product ingredient
 */
var ProductItemAccordion = function ProductItemAccordion(props) {
  var UIComponent = props.UIComponent,
    product = props.product,
    isCartProduct = props.isCartProduct;

  /**
   * Run productInfo to sort product options
   */
  var productInfo = function productInfo() {
    var _product$options;
    var options = JSON.parse(JSON.stringify(Object.values((_product$options = product.options) !== null && _product$options !== void 0 ? _product$options : {})));
    var extraGroups = options.reduce(function (acc, option) {
      var _option$extra$rank, _option$extra;
      var extraRank = (_option$extra$rank = option === null || option === void 0 ? void 0 : (_option$extra = option.extra) === null || _option$extra === void 0 ? void 0 : _option$extra.rank) !== null && _option$extra$rank !== void 0 ? _option$extra$rank : option === null || option === void 0 ? void 0 : option.rank;
      acc[extraRank] = acc[extraRank] || [];
      acc[extraRank].push(option);
      return acc;
    }, {});
    var sortedExtraGroups = Object.entries(extraGroups).sort(function (_ref, _ref2) {
      var _ref3 = _slicedToArray(_ref, 1),
        rankA = _ref3[0];
      var _ref4 = _slicedToArray(_ref2, 1),
        rankB = _ref4[0];
      return rankA - rankB;
    });
    sortedExtraGroups.forEach(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        _ = _ref6[0],
        group = _ref6[1];
      group.sort(function (a, b) {
        return a.rank - b.rank;
      });
    });
    options = sortedExtraGroups.flatMap(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        group = _ref8[1];
      return group;
    });
    if (isCartProduct) {
      var _product$ingredients;
      var ingredients = JSON.parse(JSON.stringify(Object.values((_product$ingredients = product.ingredients) !== null && _product$ingredients !== void 0 ? _product$ingredients : {})));
      options = options.map(function (option) {
        var _option$suboptions;
        option.suboptions = Object.values((_option$suboptions = option.suboptions) !== null && _option$suboptions !== void 0 ? _option$suboptions : {});
        return option;
      });
      return _objectSpread(_objectSpread({}, productInfo), {}, {
        ingredients: ingredients,
        options: options
      });
    }
    return _objectSpread(_objectSpread({}, product), {}, {
      options: options
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productInfo: productInfo()
  })));
};
exports.ProductItemAccordion = ProductItemAccordion;
ProductItemAccordion.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * product object to render UI
   */
  product: _propTypes.default.object.isRequired
};