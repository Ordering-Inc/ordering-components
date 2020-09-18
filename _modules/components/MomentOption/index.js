"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment2 = _interopRequireDefault(require("moment"));

var _OrderContext = require("../../contexts/OrderContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage moment option behavior without UI component
 */
var MomentOption = function MomentOption(props) {
  var minDate = props.minDate,
      maxDate = props.maxDate,
      currentDate = props.currentDate,
      useOrderContext = props.useOrderContext,
      onChangeMoment = props.onChangeMoment,
      UIComponent = props.UIComponent;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      changeMoment = _useOrder2[1].changeMoment;
  /**
   * Method to valid if a date is same of after current date
   * @param {String} date
   */


  var validDate = function validDate(date) {
    if (!date) return;
    return (0, _moment2.default)(date).isSameOrAfter((0, _moment2.default)(), 'day') ? (0, _moment2.default)(date).format('YYYY-MM-DD HH:mm') : (0, _moment2.default)().format('YYYY-MM-DD HH:mm');
  };
  /**
   * Method to calculate diferrence between 2 dates
   * @param {moment} start
   * @param {moment} end
   */


  var calculateDiffDay = function calculateDiffDay(start, end) {
    var endVal = end !== null && end !== void 0 ? end : (0, _moment2.default)();
    return _moment2.default.duration((0, _moment2.default)(start).diff((0, _moment2.default)(endVal).startOf('day'))).asDays();
  };
  /**
   * Method to get time depending on the start time
   */


  var getTimeFormat = function getTimeFormat(time) {
    var hour = Number(time.split(':')[0]);
    var minute = Number(time.split(':')[1]);

    if (minute >= 0 && minute <= 14) {
      return (0, _moment2.default)("".concat(hour, ":00"), 'HH:mm').format('HH:mm');
    }

    if (minute >= 15 && minute <= 29) {
      return (0, _moment2.default)("".concat(hour, ":15"), 'HH:mm').format('HH:mm');
    }

    if (minute >= 30 && minute <= 44) {
      return (0, _moment2.default)("".concat(hour, ":30"), 'HH:mm').format('HH:mm');
    }

    if (minute >= 45 && minute <= 59) {
      return (0, _moment2.default)("".concat(hour, ":45"), 'HH:mm').format('HH:mm');
    }
  };
  /**
   * Method to get current time formatted
   * @param {moment} value
   */


  var currentTimeFormatted = function currentTimeFormatted(value) {
    var date = value !== null && value !== void 0 ? value : minDate;
    return (0, _moment2.default)(validDate(date)).hour() >= (0, _moment2.default)().hour() ? (0, _moment2.default)(validDate(date)).format('HH:mm') : (0, _moment2.default)().format('HH:mm');
  };
  /**
   * This must be containt schedule selected by user
   */


  var _useState = (0, _react.useState)(currentDate ? (0, _moment2.default)(validDate(currentDate)).format('YYYY-MM-DD HH:mm') : null),
      _useState2 = _slicedToArray(_useState, 2),
      scheduleSelected = _useState2[0],
      setScheduleSelected = _useState2[1]; // const [scheduleSelected, setScheduleSelected] = useState(null)

  /**
   * Flag to know if user select asap time
   */


  var _useState3 = (0, _react.useState)(null),
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
  /**
   * Save the difference between dates
   */


  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      datesDiff = _useState10[0],
      setDatesDiff = _useState10[1];
  /**
   * Handler select changes
   * @param {object} param0
   */


  var handleCustomChangeDate = function handleCustomChangeDate(_ref) {
    var date = _ref.date,
        time = _ref.time,
        type = _ref.type;

    if ((date || time) && !((0, _moment2.default)(date, 'YYYY-MM-DD').isValid() || (0, _moment2.default)(time, 'HH:mm').isValid())) {
      return;
    }

    if (type === 'asap') {
      setIsAsap(!isAsap);
    }

    var currDate = (0, _moment2.default)(validDate(scheduleSelected)).format('YYYY-MM-DD');

    if (date) {
      setDatesDiff(parseInt(calculateDiffDay(date)));
    }

    var dateSelected = date !== null && date !== void 0 ? date : currDate;
    var timeSelected = time !== null && time !== void 0 ? time : (0, _moment2.default)(validDate(scheduleSelected)).hour() >= (0, _moment2.default)().hour() ? (0, _moment2.default)(validDate(scheduleSelected)).format('HH:mm') : (0, _moment2.default)().format('HH:mm');
    var dateToSend = type === 'asap' ? (0, _moment2.default)().format('YYYY-MM-DD HH:mm') : (0, _moment2.default)("".concat(dateSelected, " ").concat(timeSelected)).format('YYYY-MM-DD HH:mm');
    setScheduleSelected((0, _moment2.default)(dateToSend, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'));

    if (time || type === 'asap') {
      if (!isAsap) {
        var _moment = type === 'asap' ? null : (0, _moment2.default)(dateToSend).toDate();

        useOrderContext && changeMoment(_moment);
        onChangeMoment && onChangeMoment(_moment);
      }
    }
  };
  /**
   * generate a list of available hours
   */


  var generateHourList = function generateHourList() {
    var hoursAvailable = [];
    var iterator = 0;
    var defaultTime = (0, _moment2.default)('12:00 AM', 'h:mm A').format('HH:mm');
    var endHourTime = (0, _moment2.default)((0, _moment2.default)(validDate(maxDate)).add(-1, 'minute').format('HH:mm'), 'HH:mm').format('HH:mm');
    var startHour = currentTimeFormatted();
    startHour = datesDiff > 0 || parseInt(calculateDiffDay(validDate(minDate))) ? defaultTime : startHour;
    startHour = getTimeFormat((0, _moment2.default)(startHour, 'HH:mm').format('HH:mm'));

    var _startTime = (0, _moment2.default)(startHour, 'HH:mm').format('HH:mm');

    for (var i = (0, _moment2.default)(startHour, 'HH:mm').hour(); i < 24; i++) {
      for (var j = 0; j < 4; j++) {
        if (!iterator) {
          hoursAvailable.push({
            key: '0',
            startTime: _startTime,
            endTime: (0, _moment2.default)(_startTime, 'HH:mm').add(14, 'minutes').format('HH:mm')
          });
        } else {
          var startTime = (0, _moment2.default)(_startTime, 'HH:mm').add(15, 'minutes').format('HH:mm');
          var endTime = (0, _moment2.default)(startTime, 'HH:mm').add(14, 'minutes').format('HH:mm');
          hoursAvailable.push({
            key: "".concat(i).concat(j),
            startTime: startTime,
            endTime: endTime
          });
          _startTime = startTime;

          if ((0, _moment2.default)(scheduleSelected).format('YYYY-MM-DD') === (0, _moment2.default)(validDate(maxDate)).format('YYYY-MM-DD') && endTime >= endHourTime || endTime >= '23:59') {
            setHourList(hoursAvailable);
            return;
          }
        }

        iterator++;
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
      datesList.push({
        key: "".concat(i),
        date: (0, _moment2.default)(validDate(minDate)).add(i, 'd').format('YYYY-MM-DD')
      });
    }

    setDatesList(datesList);
  };

  (0, _react.useEffect)(function () {
    generateHourList();
    generateDatesList();
  }, [datesDiff, scheduleSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAsap: isAsap,
    minDate: validDate(minDate),
    maxDate: validDate(maxDate),
    currentDate: scheduleSelected ? (0, _moment2.default)(scheduleSelected).format('YYYY-MM-DD') : null,
    currentHour: scheduleSelected ? (0, _moment2.default)(currentTimeFormatted(scheduleSelected), 'HH:mm').format('HH:mm') : null,
    datesList: datesList,
    hoursList: hoursList,
    getTimeFormat: getTimeFormat,
    handleCustomChangeDate: handleCustomChangeDate
  })));
};

exports.MomentOption = MomentOption;
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
  maxDate: _propTypes.default.instanceOf(Date),

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
  afterElements: []
};