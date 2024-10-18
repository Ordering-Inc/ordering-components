"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessOption = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var BusinessOption = exports.BusinessOption = function BusinessOption(props) {
  var optionToShow = props.optionToShow,
    UIComponent = props.UIComponent;
  var handleClickOption = function handleClickOption(option) {
    var val = option === optionToShow ? null : option;
    props.handleChangeOption(val);
  };
  var formatUrlVideo = function formatUrlVideo(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    var id = match && match[7].length === 11 ? match[7] : false;
    return "https://www.youtube-nocookie.com/embed/".concat(id);
  };
  var openingTime = function openingTime(_ref) {
    var open = _ref.open,
      close = _ref.close;
    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };
    return "".concat(checkTime(open === null || open === void 0 ? void 0 : open.hour), ":").concat(checkTime(open === null || open === void 0 ? void 0 : open.minute), " - ").concat(checkTime(close === null || close === void 0 ? void 0 : close.hour), ":").concat(checkTime(close === null || close === void 0 ? void 0 : close.minute));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleClickOption: handleClickOption,
    formatUrlVideo: formatUrlVideo,
    openingTime: openingTime
  })));
};
BusinessOption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Name to show in buttom
   */
  label: _propTypes.default.string,
  /**
   * Array of business schedule, photos or videos, depends of label type
   */
  contentData: _propTypes.default.arrayOf(_propTypes.default.object),
  /**
   * This must be containt all location info
   */
  locationData: _propTypes.default.object,
  /**
   * Components types before business opening time
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after business opening time
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before business opening time
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after business opening time
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessOption.defaultProps = {
  contentData: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};