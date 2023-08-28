"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesMap = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _EventContext = require("../../contexts/EventContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesMap = function BusinessesMap(props) {
  var UIComponent = props.UIComponent,
    businessList = props.businessList,
    userLocation = props.userLocation,
    setErrors = props.setErrors,
    onBusinessCustomClick = props.onBusinessCustomClick;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    businessLocations = _useState2[0],
    setBusinessLocations = _useState2[1];

  /**
   * Getting necessary info for locate business on the map
   */
  var getBusinessListLocations = function getBusinessListLocations() {
    setBusinessLocations(businessList === null || businessList === void 0 ? void 0 : businessList.filter(function (business) {
      var _business$location, _business$location2;
      return (business === null || business === void 0 || (_business$location = business.location) === null || _business$location === void 0 ? void 0 : _business$location.lat) && (business === null || business === void 0 || (_business$location2 = business.location) === null || _business$location2 === void 0 ? void 0 : _business$location2.lng);
    }).map(function (business) {
      var _business$location3, _business$location4;
      return {
        lat: business === null || business === void 0 || (_business$location3 = business.location) === null || _business$location3 === void 0 ? void 0 : _business$location3.lat,
        lng: business === null || business === void 0 || (_business$location4 = business.location) === null || _business$location4 === void 0 ? void 0 : _business$location4.lng,
        icon: business.logo,
        slug: business.slug
      };
    }));
  };

  /**
   * @param {business_slug} slug
   * handler event when clicks business on the map
   */
  var onBusinessClick = function onBusinessClick(slug) {
    if (onBusinessCustomClick) {
      return onBusinessCustomClick(slug);
    }
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: slug
      }
    });
  };
  (0, _react.useEffect)(function () {
    getBusinessListLocations();
  }, [businessList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessLocations: businessLocations,
    userLocation: userLocation,
    onBusinessClick: onBusinessClick,
    setErrors: setErrors
  })));
};
exports.BusinessesMap = BusinessesMap;
BusinessesMap.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   *  Business list must contain location
   */
  businessList: _propTypes.default.array.isRequired,
  /**
    * User location is used for place center of the map
    */
  userLocation: _propTypes.default.object,
  /**
   * setter for map errors
   */
  setErrors: _propTypes.default.func,
  /**
   * handleCustomClick, function to get click event and return business slug without default behavior
   */
  onBusinessCustomClick: _propTypes.default.func,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessesMap.defaultProps = {
  businessList: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};