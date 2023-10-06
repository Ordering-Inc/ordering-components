"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Schedule = exports.Schedule = function Schedule(props) {
  var UIComponent = props.UIComponent,
    scheduleList = props.scheduleList,
    handleChangeScheduleState = props.handleChangeScheduleState;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    scheduleState = _useState2[0],
    setScheduleState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isConflict = _useState4[0],
    setIsConflict = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isTimeChangeError = _useState6[0],
    setIsTimeChangeError = _useState6[1];
  var _useState7 = (0, _react.useState)({
      open: {
        hour: 0,
        minute: 0
      },
      close: {
        hour: 23,
        minute: 59
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    addScheduleTime = _useState8[0],
    setAddScheduleTime = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    openAddSchedule = _useState10[0],
    setOpenAddSchedule = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedCopyDays = _useState12[0],
    setSelectedCopyDays = _useState12[1];

  /**
   * Clean selectedCopyDays
   */
  var cleanSelectedCopyDays = function cleanSelectedCopyDays() {
    return setSelectedCopyDays([]);
  };

  /**
   * Method to covert into minutes
   */
  var convertMinutes = function convertMinutes(_ref) {
    var hour = _ref.hour,
      minute = _ref.minute;
    return hour * 60 + minute;
  };

  /**
   * Method to check contain conflict
   */
  var isCheckConflict = function isCheckConflict(lapses, newSchedule, index) {
    var openNew = newSchedule.open.hour * 60 + newSchedule.open.minute;
    var closeNew = newSchedule.close.hour * 60 + newSchedule.close.minute;
    for (var i = 0; i < lapses.length; i++) {
      if (i !== index) {
        var openOld = lapses[i].open.hour * 60 + parseInt(lapses[i].open.minute / 15) * 15;
        var closeOld = lapses[i].close.hour * 60 + parseInt(lapses[i].close.minute / 15) * 15;
        if (openNew < openOld && closeNew > closeOld) return true;
        if (openNew < openOld && closeNew > openOld) return true;
        if (openNew > openOld && closeNew < closeOld) return true;
        if (openNew < closeOld && closeNew > closeOld) return true;
        if (closeNew === closeOld || openNew === openOld) return true;
      }
    }
    return false;
  };

  /**
   * Method to control the schedule
   */
  var handleEnabledSchedule = function handleEnabledSchedule(daysOfWeekIndex, checked) {
    var _schedule = _toConsumableArray(scheduleState);
    _schedule[daysOfWeekIndex].enabled = checked;
    setScheduleState(_schedule);
  };

  /**
   * Method to change the schedule time on the week day
   * @param {String} changeTime change time
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} lapseIndex lapse no
   * @param {Boolean} isOpen open or close
   */
  var handleChangeScheduleTime = function handleChangeScheduleTime(changeTime, daysOfWeekIndex, lapseIndex, isOpen) {
    var _schedule = _toConsumableArray(scheduleState);
    var currentLapses = _toConsumableArray(_schedule[daysOfWeekIndex].lapses);
    var hour = parseInt(changeTime.split(':')[0]);
    var minute = parseInt(changeTime.split(':')[1]);
    var changeScheduleTime;
    var _isTimeChangeError = false;
    if (isOpen) {
      _isTimeChangeError = convertMinutes({
        hour: hour,
        minute: minute
      }) >= convertMinutes(currentLapses[lapseIndex].close);
      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        changeScheduleTime = {
          open: {
            hour: hour,
            minute: minute
          },
          close: currentLapses[lapseIndex].close
        };
      }
    } else {
      _isTimeChangeError = convertMinutes(currentLapses[lapseIndex].open) >= convertMinutes({
        hour: hour,
        minute: minute
      });
      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        changeScheduleTime = {
          open: currentLapses[lapseIndex].open,
          close: {
            hour: hour,
            minute: minute
          }
        };
      }
    }
    if (!_isTimeChangeError) {
      var conflict = isCheckConflict(currentLapses, changeScheduleTime, lapseIndex);
      if (conflict) {
        setIsConflict(true);
      } else {
        _schedule[daysOfWeekIndex].lapses[lapseIndex] = changeScheduleTime;
        _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
          return convertMinutes(a.open) - convertMinutes(b.open);
        });
        setScheduleState(_schedule);
      }
    }
  };

  /**
   * Method to delete the schedule time on the week day
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} index lapse index
   */
  var handleDeleteSchedule = function handleDeleteSchedule(daysOfWeekIndex, index) {
    var _schedule = _toConsumableArray(scheduleState);
    _schedule[daysOfWeekIndex].lapses.splice(index, 1);
    setScheduleState(_schedule);
  };
  var handleOpenAddSchedule = function handleOpenAddSchedule(daysOfWeekIndex) {
    setAddScheduleTime({
      open: {
        hour: 0,
        minute: 0
      },
      close: {
        hour: 23,
        minute: 59
      }
    });
    setOpenAddSchedule(_defineProperty({}, daysOfWeekIndex, true));
  };

  /**
   * Method to change the add schedule time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close
   */
  var handleChangeAddScheduleTime = function handleChangeAddScheduleTime(changeTime, isOpen) {
    var hour = parseInt(changeTime.split(':')[0]);
    var minute = parseInt(changeTime.split(':')[1]);
    var _isTimeChangeError = false;
    if (isOpen) {
      _isTimeChangeError = convertMinutes({
        hour: hour,
        minute: minute
      }) >= convertMinutes(addScheduleTime.close);
      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
          open: {
            hour: hour,
            minute: minute
          }
        }));
      }
    } else {
      _isTimeChangeError = convertMinutes(addScheduleTime.open) >= convertMinutes({
        hour: hour,
        minute: minute
      });
      if (_isTimeChangeError) {
        setIsTimeChangeError(true);
      } else {
        setAddScheduleTime(_objectSpread(_objectSpread({}, addScheduleTime), {}, {
          close: {
            hour: hour,
            minute: minute
          }
        }));
      }
    }
  };

  /**
   * Method to add new schedule on the week day
   * @param {Nuumber} daysOfWeekIndex week day
   */
  var handleAddSchedule = function handleAddSchedule(daysOfWeekIndex) {
    var _schedule = _toConsumableArray(scheduleState);
    var currentLapses = _toConsumableArray(_schedule[daysOfWeekIndex].lapses);
    var conflict = isCheckConflict(currentLapses, addScheduleTime, null);
    if (conflict) {
      setIsConflict(true);
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime);
      _schedule[daysOfWeekIndex].lapses.sort(function (a, b) {
        return convertMinutes(a.open) - convertMinutes(b.open);
      });
      setScheduleState(_schedule);
      setOpenAddSchedule(_defineProperty({}, daysOfWeekIndex, false));
    }
  };

  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */
  var handleSelectCopyTimes = function handleSelectCopyTimes(index) {
    var _selectedCopyDays = selectedCopyDays.includes(index) ? selectedCopyDays.filter(function (day) {
      return day !== index;
    }) : [].concat(_toConsumableArray(selectedCopyDays), [index]);
    setSelectedCopyDays(_selectedCopyDays);
  };
  /**
   * Method to apply copy times
   * @param {Number} daysOfWeekIndex index of week days
   */
  var handleApplyScheduleCopyTimes = function handleApplyScheduleCopyTimes(daysOfWeekIndex) {
    var _schedule = scheduleState.map(function (option, index) {
      if (selectedCopyDays.includes(index)) {
        var lapses = _toConsumableArray(scheduleState[daysOfWeekIndex].lapses);
        var original = {
          enabled: scheduleState[daysOfWeekIndex].enabled,
          lapses: lapses
        };
        return original;
      }
      return option;
    });
    setScheduleState(_schedule);
  };
  (0, _react.useEffect)(function () {
    if (scheduleState.length === 0) return;
    handleChangeScheduleState(_toConsumableArray(scheduleState));
  }, [scheduleState]);
  (0, _react.useEffect)(function () {
    if (scheduleList) {
      setScheduleState(_toConsumableArray(scheduleList));
    } else {
      var schedule = [];
      for (var i = 0; i < 7; i++) {
        schedule.push({
          enabled: true,
          lapses: [{
            open: {
              hour: 0,
              minute: 0
            },
            close: {
              hour: 23,
              minute: 59
            }
          }]
        });
      }
      setScheduleState(schedule);
    }
  }, [scheduleList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    scheduleState: scheduleState,
    isConflict: isConflict,
    setIsConflict: setIsConflict,
    isTimeChangeError: isTimeChangeError,
    addScheduleTime: addScheduleTime,
    openAddSchedule: openAddSchedule,
    setIsTimeChangeError: setIsTimeChangeError,
    handleEnabledSchedule: handleEnabledSchedule,
    handleChangeScheduleTime: handleChangeScheduleTime,
    handleDeleteSchedule: handleDeleteSchedule,
    handleOpenAddSchedule: handleOpenAddSchedule,
    handleChangeAddScheduleTime: handleChangeAddScheduleTime,
    handleAddSchedule: handleAddSchedule,
    selectedCopyDays: selectedCopyDays,
    cleanSelectedCopyDays: cleanSelectedCopyDays,
    handleSelectCopyTimes: handleSelectCopyTimes,
    handleApplyScheduleCopyTimes: handleApplyScheduleCopyTimes
  })));
};
Schedule.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
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
Schedule.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};