"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MenuControl = exports.MenuControl = function MenuControl(props) {
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
  var disableDays = (menuSelected === null || menuSelected === void 0 || (_menuSelected$schedul = menuSelected.schedule) === null || _menuSelected$schedul === void 0 ? void 0 : _menuSelected$schedul.map(function (item, i) {
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
    var lapses = menuSelected === null || menuSelected === void 0 || (_menuSelected$schedul2 = menuSelected.schedule[day]) === null || _menuSelected$schedul2 === void 0 ? void 0 : _menuSelected$schedul2.lapses;
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
      lapses: menu === null || menu === void 0 || (_menu$schedule$today = menu.schedule[today]) === null || _menu$schedule$today === void 0 ? void 0 : _menu$schedule$today.lapses,
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
      var _lapses$i, _lapses$i2, _lapses$i3, _lapses$i4;
      var start = "".concat((_lapses$i = lapses[i]) === null || _lapses$i === void 0 || (_lapses$i = _lapses$i.open) === null || _lapses$i === void 0 ? void 0 : _lapses$i.hour, ":").concat((_lapses$i2 = lapses[i]) === null || _lapses$i2 === void 0 || (_lapses$i2 = _lapses$i2.open) === null || _lapses$i2 === void 0 ? void 0 : _lapses$i2.minute);
      var end = "".concat((_lapses$i3 = lapses[i]) === null || _lapses$i3 === void 0 || (_lapses$i3 = _lapses$i3.close) === null || _lapses$i3 === void 0 ? void 0 : _lapses$i3.hour, ":").concat((_lapses$i4 = lapses[i]) === null || _lapses$i4 === void 0 || (_lapses$i4 = _lapses$i4.close) === null || _lapses$i4 === void 0 ? void 0 : _lapses$i4.minute);
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