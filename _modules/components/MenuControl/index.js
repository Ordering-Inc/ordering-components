"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
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
var MenuControl = function MenuControl(props) {
  var _menuSelected$schedul;
  var maxPreoderDays = props.maxPreoderDays,
    UIComponent = props.UIComponent;

  /**
   * This must be contain business schedule selected
   */
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    scheduleSelected = _useState2[0],
    setScheduleSelected = _useState2[1];

  /**
   * Menu selected by user
   */

  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    menuSelected = _useState4[0],
    setMenuSelected = _useState4[1];

  /**
   * This must be contain date selected (datepicker)
   */
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    dateSelected = _useState6[0],
    setDateSelected = _useState6[1];

  /**
   * Date used for component datePicker to set start date
   */
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    startDate = _useState8[0],
    setStartDate = _useState8[1];

  /**
   * Array that must be contain a list of dates
   */
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    setDatesList = _useState10[1];

  /**
   * Have a list of business schedules disabled
   */
  var disableDays = (menuSelected === null || menuSelected === void 0 ? void 0 : (_menuSelected$schedul = menuSelected.schedule) === null || _menuSelected$schedul === void 0 ? void 0 : _menuSelected$schedul.map(function (item, i) {
    return !item.enabled && i;
  })) || [];

  /**
   * method used on datePicker component to disable days of week
   * @param {string} date
   */
  var isDisabledDay = function isDisabledDay(date) {
    var day = (0, _dayjs.default)(date, 'YYYY-MM-DD').day();
    return disableDays.every(function (number) {
      return number !== day;
    });
  };

  /**
   * handler for set date selected by user
   * @param {string} date
   */
  var onDateSelected = function onDateSelected(date) {
    var _menuSelected$schedul2;
    var day = (0, _dayjs.default)(date, 'YYYY-MM-DD').day();
    var lapses = menuSelected === null || menuSelected === void 0 ? void 0 : (_menuSelected$schedul2 = menuSelected.schedule[day]) === null || _menuSelected$schedul2 === void 0 ? void 0 : _menuSelected$schedul2.lapses;
    setScheduleSelected(_objectSpread(_objectSpread({}, scheduleSelected), {}, {
      lapses: lapses
    }));
    setStartDate(date);
    setDateSelected((0, _dayjs.default)(date).format('YYYY-MM-DD HH:mm'));
    props.handlerSelectDate((0, _dayjs.default)(date).format('YYYY-MM-DD HH:mm'));
  };

  /**
   * Send to parent component Menu info and date selected
   */
  var handlerMenuInfo = function handlerMenuInfo() {
    var isValid = (scheduleSelected === null || scheduleSelected === void 0 ? void 0 : scheduleSelected.menuId) && dateSelected;
    if (isValid) {
      props.handleMenuInfo({
        menuId: scheduleSelected === null || scheduleSelected === void 0 ? void 0 : scheduleSelected.menuId,
        date: new Date(dateSelected)
      });
    }
  };

  /**
   * Method to format schedule selected by user
   * @param {object} param0
   */
  var formatScheduleTime = function formatScheduleTime(menu) {
    var _menu$schedule$today;
    setMenuSelected(menu);
    var today = (0, _dayjs.default)().day();
    return {
      lapses: menu === null || menu === void 0 ? void 0 : (_menu$schedule$today = menu.schedule[today]) === null || _menu$schedule$today === void 0 ? void 0 : _menu$schedule$today.lapses,
      menuId: menu.id
    };
  };

  /**
   * Generate a list of dates
   */
  var generateDatesList = function generateDatesList() {
    var list = [];
    var _start = (0, _dayjs.default)().format('YYYY-MM-DD');
    var _end = (0, _dayjs.default)().day(30).format('YYYY-MM-DD');
    var diff = (0, _dayjs.default)(_end, 'YYYY-MM-DD HH:mm').diff((0, _dayjs.default)(_start, 'YYYY-MM-DD HH:mm'), 'days');
    for (var i = 0; i <= diff; i++) {
      list.push({
        key: "".concat(i),
        date: (0, _dayjs.default)(_start).add(i, 'd').format('YYYY-MM-DD')
      });
    }
    setDatesList(list);
  };

  /**
   * Method to calculate times based in schedule lapses range
   */
  var menuLapsesList = function menuLapsesList() {
    var timesList = [];
    var lapses = (scheduleSelected === null || scheduleSelected === void 0 ? void 0 : scheduleSelected.lapses) || [];
    for (var i = 0; i < lapses.length; i++) {
      var _lapses$i, _lapses$i$open, _lapses$i2, _lapses$i2$open, _lapses$i3, _lapses$i3$close, _lapses$i4, _lapses$i4$close;
      var start = "".concat((_lapses$i = lapses[i]) === null || _lapses$i === void 0 ? void 0 : (_lapses$i$open = _lapses$i.open) === null || _lapses$i$open === void 0 ? void 0 : _lapses$i$open.hour, ":").concat((_lapses$i2 = lapses[i]) === null || _lapses$i2 === void 0 ? void 0 : (_lapses$i2$open = _lapses$i2.open) === null || _lapses$i2$open === void 0 ? void 0 : _lapses$i2$open.minute);
      var end = "".concat((_lapses$i3 = lapses[i]) === null || _lapses$i3 === void 0 ? void 0 : (_lapses$i3$close = _lapses$i3.close) === null || _lapses$i3$close === void 0 ? void 0 : _lapses$i3$close.hour, ":").concat((_lapses$i4 = lapses[i]) === null || _lapses$i4 === void 0 ? void 0 : (_lapses$i4$close = _lapses$i4.close) === null || _lapses$i4$close === void 0 ? void 0 : _lapses$i4$close.minute);
      var diff = (0, _dayjs.default)(end, 'HH:mm').diff((0, _dayjs.default)(start, 'HH:mm'), 'hour', true);
      while (diff > 0) {
        var day = start;
        timesList.push((0, _dayjs.default)(day, 'HH:mm').toDate());
        start = (0, _dayjs.default)(day, 'HH:mm').add(15, 'minutes');
        diff = diff - 0.25;
      }
    }
    return timesList;
  };

  /**
   * Method to calculate an array of available dates in base with maxPreorderDays
   */
  var futureDaysToShow = function futureDaysToShow() {
    var futureDays = maxPreoderDays;
    var today = (0, _dayjs.default)().toDate();
    var datesToShow = [];
    var isDisabledDays = disableDays.every(function (d) {
      return d === false;
    });
    if (disableDays.length && !isDisabledDays) {
      while (futureDays > 0) {
        var date = today;
        var day = (0, _dayjs.default)(today).day();
        if (disableDays[day] === false) {
          datesToShow.push((0, _dayjs.default)(date).toDate());
          futureDays--;
        }
        today = (0, _dayjs.default)((0, _dayjs.default)(today).add(1, 'd')).toDate();
      }
    }
    if (disableDays.length && isDisabledDays) {
      for (var i = 1; i <= maxPreoderDays; i++) {
        datesToShow.push((0, _dayjs.default)((0, _dayjs.default)(today).add(i, 'd')).toDate());
      }
    }
    datesToShow.unshift((0, _dayjs.default)().toDate());
    return datesToShow;
  };
  (0, _react.useEffect)(function () {
    futureDaysToShow();
  }, [disableDays]);
  (0, _react.useEffect)(function () {
    generateDatesList();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    futureDaysToShow: futureDaysToShow,
    menuLapsesList: menuLapsesList,
    disableDays: disableDays,
    startDate: startDate,
    isDisabledDay: isDisabledDay,
    scheduleSelected: scheduleSelected,
    menuSelected: menuSelected === null || menuSelected === void 0 ? void 0 : menuSelected.id,
    handleMenuSelected: function handleMenuSelected(val) {
      return setScheduleSelected(formatScheduleTime(val));
    },
    handleDate: onDateSelected,
    onSendMenuInfo: handlerMenuInfo,
    dateSelected: dateSelected
  })));
};
exports.MenuControl = MenuControl;
MenuControl.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * maxPreoderDays, limit days to show
   */
  maxPreoderDays: _propTypes.default.number,
  /**
   * Business, this must be containt all business information
   */
  business: _propTypes.default.object,
  /**
   * Handle schedule and menu selected by user
   */
  handleMenuInfo: _propTypes.default.func,
  /**
   * handlerSelectDate, method to returns a day selected
   */
  handlerSelectDate: _propTypes.default.func,
  /**
   * Components types before menu control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after menu control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before menu control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after menu control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
MenuControl.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};