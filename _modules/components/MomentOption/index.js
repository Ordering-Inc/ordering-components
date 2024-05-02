"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _isSameOrAfter = _interopRequireDefault(require("dayjs/plugin/isSameOrAfter"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_isSameOrAfter.default);
_dayjs.default.extend(_utc.default);

/**
 * Component to manage moment option behavior without UI component
 */
var MomentOption = exports.MomentOption = function MomentOption(props) {
  var _orderStatus$options, _orderStatus$options4;
  var minDate = props.minDate,
    maxDate = props.maxDate,
    currentDate = props.currentDate,
    useOrderContext = props.useOrderContext,
    onChangeMoment = props.onChangeMoment,
    preorderSlotInterval = props.preorderSlotInterval,
    cateringPreorder = props.cateringPreorder,
    preorderLeadTime = props.preorderLeadTime,
    business = props.business,
    UIComponent = props.UIComponent,
    preorderTimeRange = props.preorderTimeRange,
    preorderMinimumDays = props.preorderMinimumDays;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderStatus = _useOrder2[0],
    changeMoment = _useOrder2[1].changeMoment;

  /**
   * Method to valid if a date is same of after current date
   * @param {String} date
   */
  var validDate = function validDate(date) {
    if (!date) return;
    var _date = (0, _dayjs.default)(date, 'YYYY-MM-DD HH:mm').isSameOrAfter((0, _dayjs.default)(), 'day') ? (0, _dayjs.default)(date).format('YYYY-MM-DD HH:mm') : (0, _dayjs.default)().format('YYYY-MM-DD HH:mm');
    return _date;
  };

  /**
   * Method to calculate diferrence between 2 dates
   * @param {moment} start
   * @param {moment} end
   */
  var calculateDiffDay = function calculateDiffDay(start, end) {
    var endVal = end !== null && end !== void 0 ? end : (0, _dayjs.default)();
    var days = (0, _dayjs.default)(start).diff((0, _dayjs.default)(endVal), 'day');
    return days;
  };

  /**
   * This must be containt schedule selected by user
   */
  var _currentDate = useOrderContext ? (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.moment : currentDate;
  var _useState = (0, _react.useState)(_currentDate ? _dayjs.default.utc(validDate(_currentDate)).local().format('YYYY-MM-DD HH:mm') : null),
    _useState2 = _slicedToArray(_useState, 2),
    scheduleSelected = _useState2[0],
    setScheduleSelected = _useState2[1];

  /**
   * Flag to know if user select asap time
   */
  var _useState3 = (0, _react.useState)(!scheduleSelected),
    _useState4 = _slicedToArray(_useState3, 2),
    isAsap = _useState4[0],
    setIsAsap = _useState4[1];

  /**
   * Arrays for save hours and dates lists
   */
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hoursList = _useState6[0],
    setHourList = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    datesList = _useState8[0],
    setDatesList = _useState8[1];
  var _useState9 = (0, _react.useState)((0, _dayjs.default)(validDate(_currentDate)).add(preorderMinimumDays || 0, 'day').format('YYYY-MM-DD')),
    _useState10 = _slicedToArray(_useState9, 2),
    dateSelected = _useState10[0],
    setDateSelected = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    timeSelected = _useState12[0],
    setTimeSelected = _useState12[1];
  var handleChangeDate = function handleChangeDate(date) {
    if (!date || date === dateSelected) return;
    setDateSelected(date);
    setTimeSelected(null);
    setIsAsap(false);
    onChangeMoment && onChangeMoment(null);
  };
  var handleChangeTime = function handleChangeTime(time) {
    if (!time || time === timeSelected) return;
    var _moment = (0, _dayjs.default)("".concat(dateSelected, " ").concat(time), 'YYYY-MM-DD HH:mm').toDate();
    setTimeSelected(time);
    setIsAsap(false);
    if (useOrderContext) {
      changeMoment(_moment);
    }
    onChangeMoment && onChangeMoment(_moment);
  };
  var handleAsap = function handleAsap() {
    if (isAsap || business && cateringPreorder) return;
    setIsAsap(true);
    if (useOrderContext) {
      changeMoment(null);
    }
    onChangeMoment && onChangeMoment(null);
  };
  (0, _react.useEffect)(function () {
    if (useOrderContext) {
      var _orderStatus$options2;
      if ((_orderStatus$options2 = orderStatus.options) !== null && _orderStatus$options2 !== void 0 && _orderStatus$options2.moment) {
        var _orderStatus$options3;
        var _currentDate2 = _dayjs.default.utc(validDate((_orderStatus$options3 = orderStatus.options) === null || _orderStatus$options3 === void 0 ? void 0 : _orderStatus$options3.moment)).local();
        setScheduleSelected(_currentDate2.format('YYYY-MM-DD HH:mm'));
        setDateSelected(_currentDate2.format('YYYY-MM-DD'));
        setTimeSelected(_currentDate2.format('HH:mm'));
        isAsap && setIsAsap(false);
      } else {
        dateSelected !== (0, _dayjs.default)().format('YYYY-MM-DD') && setDateSelected((0, _dayjs.default)().format('YYYY-MM-DD'));
        timeSelected !== null && setTimeSelected(null);
        scheduleSelected !== null && setScheduleSelected(null);
        !isAsap && setIsAsap(true);
      }
    } else {
      scheduleSelected !== null && setScheduleSelected(null);
      !isAsap && setIsAsap(true);
    }
  }, [(_orderStatus$options4 = orderStatus.options) === null || _orderStatus$options4 === void 0 ? void 0 : _orderStatus$options4.moment]);
  (0, _react.useEffect)(function () {
    if (!scheduleSelected) {
      return;
    }
    var selected = (0, _dayjs.default)(scheduleSelected, 'YYYY-MM-DD HH:mm');
    var now = (0, _dayjs.default)();
    var secondsDiff = selected.diff(now, 'seconds');
    if (secondsDiff <= 0) {
      handleAsap();
      return;
    }
    var checkTime = setTimeout(function () {
      handleAsap();
    }, secondsDiff * 1000);
    return function () {
      clearTimeout(checkTime);
    };
  }, [scheduleSelected]);
  var getActualSchedule = function getActualSchedule() {
    var _business$schedule, _business$schedule$fi;
    var dayNumber = (0, _dayjs.default)(dateSelected).day();
    var schedule = business === null || business === void 0 || (_business$schedule = business.schedule) === null || _business$schedule === void 0 || (_business$schedule$fi = _business$schedule.find) === null || _business$schedule$fi === void 0 ? void 0 : _business$schedule$fi.call(_business$schedule, function (s, i) {
      return dayNumber === i;
    });
    return (schedule === null || schedule === void 0 ? void 0 : schedule.enabled) && schedule;
  };
  (0, _react.useEffect)(function () {
    if (isAsap && datesList[0]) {
      setDateSelected(datesList[preorderMinimumDays || 0]);
      setTimeSelected(null);
    }
  }, [isAsap, datesList]);

  /**
   * generate a list of available hours
   */
  var generateHourList = function generateHourList(preorderLeadTime, preorderTimeRange, preorderSlotInterval) {
    var hoursAvailable = [];
    var isToday = dateSelected === (0, _dayjs.default)().format('YYYY-MM-DD');
    var isLastDate = dateSelected === (0, _dayjs.default)(maxDate).format('YYYY-MM-DD');
    var now = new Date();
    if (!cateringPreorder) {
      for (var hour = 0; hour < 24; hour++) {
        /**
         * Continue if is today and hour is smaller than current hour
        */
        if (isToday && hour < (now === null || now === void 0 ? void 0 : now.getHours())) continue;
        /**
        * Continue if is max date and hour is greater than max date hour
        */
        if (isLastDate && hour > (maxDate === null || maxDate === void 0 ? void 0 : maxDate.getHours())) continue;
        for (var minute = 0; minute < 59; minute += 15) {
          /**
           * Continue if is today and hour is equal to current hour and minutes is smaller than current minute
          */
          if (isToday && hour === (now === null || now === void 0 ? void 0 : now.getHours()) && minute <= now.getMinutes()) continue;
          /**
           * Continue if is today and hour is equal to max date hour and minutes is greater than max date minute
          */
          if (isLastDate && hour === (maxDate === null || maxDate === void 0 ? void 0 : maxDate.getHours()) && minute > maxDate.getMinutes()) continue;
          var _hour = hour < 10 ? "0".concat(hour) : hour;
          var startMinute = minute < 10 ? "0".concat(minute) : minute;
          var endMinute = minute + 14 < 10 ? "0".concat(minute + 14) : minute + 14;
          var startTime = "".concat(_hour, ":").concat(startMinute);
          var endTime = "".concat(_hour, ":").concat(endMinute);
          hoursAvailable.push({
            startTime: startTime,
            endTime: endTime
          });
        }
      }
    } else {
      var startTimeAcc = preorderLeadTime;
      var endTimeAcc = preorderTimeRange + preorderLeadTime;
      while (startTimeAcc >= 0 && (0, _dayjs.default)().startOf('day').add(startTimeAcc || 0, 'minute') < (0, _dayjs.default)().startOf('day').add(1, 'day')) {
        var _startTime = (0, _dayjs.default)().startOf('day').add(startTimeAcc || 0, 'minute').format('HH:mm');
        var _endTime = (0, _dayjs.default)().startOf('day').add(endTimeAcc, 'minute').format('HH:mm');
        startTimeAcc = startTimeAcc + preorderSlotInterval;
        endTimeAcc = endTimeAcc + preorderSlotInterval;
        hoursAvailable.push({
          startTime: _startTime,
          endTime: _endTime
        });
      }
    }
    setHourList(hoursAvailable);
  };

  /**
   * Generate a list of available dates
   */
  var generateDatesList = function generateDatesList() {
    var datesList = [];
    var diff = parseInt(calculateDiffDay(validDate(maxDate)), validDate(minDate));
    for (var i = 0; i < diff + 1; i++) {
      datesList.push((0, _dayjs.default)(validDate(minDate)).add(i, 'd').format('YYYY-MM-DD'));
    }
    setDatesList(datesList);
  };
  (0, _react.useEffect)(function () {
    if (!dateSelected) return;
    generateHourList(preorderLeadTime, preorderTimeRange, preorderSlotInterval);
  }, [dateSelected, preorderLeadTime, preorderTimeRange, preorderSlotInterval]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      var diff = (0, _dayjs.default)(dateSelected).diff((0, _dayjs.default)(currentDate), 'day');
      if (diff === 0) {
        generateHourList(preorderLeadTime, preorderTimeRange, preorderSlotInterval);
      }
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [dateSelected, preorderLeadTime, preorderTimeRange, preorderSlotInterval]);
  (0, _react.useEffect)(function () {
    generateDatesList();
  }, [maxDate, minDate]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAsap: isAsap,
    minDate: validDate(minDate),
    maxDate: validDate(maxDate),
    dateSelected: dateSelected,
    timeSelected: timeSelected,
    handleChangeDate: handleChangeDate,
    handleChangeTime: handleChangeTime,
    datesList: datesList,
    hoursList: hoursList,
    handleAsap: handleAsap,
    getActualSchedule: getActualSchedule,
    scheduleSelected: scheduleSelected
  })));
};
MomentOption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * minDate, this must be contains a custom date selected
   */
  minDate: _propTypes.default.instanceOf(Date),
  /**
   * maxDate, this must be contains a custom date selected
   */
  maxDate: _propTypes.default.instanceOf(Date).isRequired,
  /**
   * currentDate, this must be contains a custom date selected
   */
  currentDate: _propTypes.default.instanceOf(Date),
  /**
   * currentDate, this must be contains a custom date selected
   */
  useOrderContext: _propTypes.default.bool,
  /**
   * Method to return moment selection
   */
  onChangeMoment: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
MomentOption.defaultProps = {
  useOrderContext: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  preorderSlotInterval: 15,
  preorderLeadTime: 0,
  preorderTimeRange: 30
};