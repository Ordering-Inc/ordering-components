"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUtils = exports.UtilsProviders = exports.UtilsContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ConfigContext = require("../ConfigContext");
var _LanguageContext = require("../LanguageContext");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));
var _updateLocale = _interopRequireDefault(require("dayjs/plugin/updateLocale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);
_dayjs.default.extend(_relativeTime.default);
_dayjs.default.extend(_updateLocale.default);
/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */

var UtilsContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to utils manager
 * This provider has a reducer for manage utils functions
 * @param {props} props
 */
exports.UtilsContext = UtilsContext;
var UtilsProviders = function UtilsProviders(_ref) {
  var children = _ref.children;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    languageState = _useLanguage2[0],
    t = _useLanguage2[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];

  // const [localObject, setLocalObject] = useState({})

  var refreshLocalObject = function refreshLocalObject() {
    var months = [t('MONTH1', 'January'), t('MONTH2', 'February'), t('MONTH3', 'March'), t('MONTH4', 'April'), t('MONTH5', 'May'), t('MONTH6', 'June'), t('MONTH7', 'July'), t('MONTH8', 'August'), t('MONTH9', 'September'), t('MONTH10', 'October'), t('MONTH11', 'November'), t('MONTH12', 'December')];
    var monthsShort = [t('MONTHSHORT1', 'Jan'), t('MONTHSHORT2', 'Feb'), t('MONTHSHORT3', 'Mar'), t('MONTHSHORT4', 'Apr'), t('MONTHSHORT5', 'May'), t('MONTHSHORT6', 'Jun'), t('MONTHSHORT7', 'Jul'), t('MONTHSHORT8', 'Aug'), t('MONTHSHORT9', 'Sep'), t('MONTHSHORT10', 'Oct'), t('MONTHSHORT11', 'Nov'), t('MONTHSHORT12', 'Dec')];
    var weekdays = [t('DAY7', 'Sunday'), t('DAY1', 'Monday'), t('DAY2', 'Tuesday'), t('DAY3', 'Wednesday'), t('DAY4', 'Thursday'), t('DAY5', 'Friday'), t('DAY6', 'Saturday')];
    var weekdaysShort = [t('DAYSHORT7', 'Sun'), t('DAYSHORT1', 'Mon'), t('DAYSHORT2', 'Tue'), t('DAYSHORT3', 'Wed'), t('DAYSHORT4', 'Thu'), t('DAYSHORT5', 'Fri'), t('DAYSHORT6', 'Sat')];
    var weekdaysMin = [t('DAYMIN7', 'Su'), t('DAYMIN1', 'Mo'), t('DAYMIN2', 'Tu'), t('DAYMIN3', 'We'), t('DAYMIN4', 'Th'), t('DAYMIN5', 'Fr'), t('DAYMIN6', 'Sa')];
    var localeObject = {
      name: 'auto',
      // name String
      months: months,
      // months Array
      monthsShort: monthsShort,
      // monthsShort Array
      weekdays: weekdays,
      // weekdays Array
      weekdaysShort: weekdaysShort,
      // weekdaysShort Array
      weekdaysMin: weekdaysMin,
      // weekdaysMin Array
      ordinal: function ordinal(n) {
        return "".concat(n, "\xBA");
      },
      // ordinal Function (number) => return number + output
      relativeTime: {
        // relative time format strings, keep %s %d as the same
        future: t('RELATIVE_TIME_IN', 'in %s'),
        // e.g. in 2 hours, %s been replaced with 2hours
        past: t('RELATIVE_TIME_AGO', '%s ago'),
        s: t('RELATIVE_TIME_FEW_SECONDS', 'a few seconds'),
        m: t('RELATIVE_TIME_MINUTES', 'a minute'),
        mm: t('RELATIVE_TIME_MINUTES', '%d minutes'),
        h: t('RELATIVE_TIME_HOUR', 'an hour'),
        hh: t('RELATIVE_TIME_HOURS', '%d hours'),
        // e.g. 2 hours, %d been replaced with 2
        d: t('RELATIVE_TIME_DAY', 'a day'),
        dd: t('RELATIVE_TIME_DAYS', '%d days'),
        M: t('RELATIVE_TIME_MONTH', 'a month'),
        MM: t('RELATIVE_TIME_MONTHS', '%d months'),
        y: t('RELATIVE_TIME_YEAR', 'a year'),
        yy: t('RELATIVE_TIME_YEARS', '%d years')
      },
      meridiem: function meridiem(hour, minute, isLowercase) {
        // OPTIONAL, AM/PM
        return hour >= 12 ? t('PM', 'PM') : t('AM', 'AM');
      }
    };
    _dayjs.default.locale('auto', localeObject);
    _dayjs.default.updateLocale('auto', localeObject);
  };
  var parsePrice = function parsePrice(value) {
    var _configState$configs$, _configState$configs$2, _configState$configs$3, _configState$configs$4, _configState$configs$5, _formatNumber$currenc;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatNumber = {
      decimal: (options === null || options === void 0 ? void 0 : options.decimal) || ((_configState$configs$ = configState.configs.format_number_decimal_length) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) || 2,
      separator: (options === null || options === void 0 ? void 0 : options.separator) || ((_configState$configs$2 = configState.configs.format_number_decimal_separator) === null || _configState$configs$2 === void 0 ? void 0 : _configState$configs$2.value) || ',',
      thousand: (options === null || options === void 0 ? void 0 : options.thousand) || ((_configState$configs$3 = configState.configs.format_number_thousand_separator) === null || _configState$configs$3 === void 0 ? void 0 : _configState$configs$3.value) || '.',
      currency: (options === null || options === void 0 ? void 0 : options.currency) || ((_configState$configs$4 = configState.configs.format_number_currency) === null || _configState$configs$4 === void 0 ? void 0 : _configState$configs$4.value) || '$',
      currencyPosition: (options === null || options === void 0 ? void 0 : options.currencyPosition) || ((_configState$configs$5 = configState.configs.currency_position) === null || _configState$configs$5 === void 0 ? void 0 : _configState$configs$5.value) || 'left',
      isTruncable: options === null || options === void 0 ? void 0 : options.isTruncable
    };
    var number = parseNumber(value, formatNumber);
    if (((_formatNumber$currenc = formatNumber.currencyPosition) === null || _formatNumber$currenc === void 0 ? void 0 : _formatNumber$currenc.toLowerCase()) === 'left') {
      number = formatNumber.currency + ' ' + number;
    } else {
      number = number + ' ' + formatNumber.currency;
    }
    return number;
  };
  var parseNumber = function parseNumber(value) {
    var _configState$configs$6, _configState$configs$7, _configState$configs$8;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    value = parseFloat(value) || 0;
    var formatNumber = {
      decimal: (options === null || options === void 0 ? void 0 : options.decimal) || ((_configState$configs$6 = configState.configs.format_number_decimal_length) === null || _configState$configs$6 === void 0 ? void 0 : _configState$configs$6.value) || 2,
      separator: (options === null || options === void 0 ? void 0 : options.separator) || ((_configState$configs$7 = configState.configs.format_number_decimal_separator) === null || _configState$configs$7 === void 0 ? void 0 : _configState$configs$7.value) || ',',
      thousand: (options === null || options === void 0 ? void 0 : options.thousand) || ((_configState$configs$8 = configState.configs.format_number_thousand_separator) === null || _configState$configs$8 === void 0 ? void 0 : _configState$configs$8.value) || '.'
    };
    var number = value;
    if (options !== null && options !== void 0 && options.isTruncable) {
      var _numberParts$;
      number = number.toString();
      var _numberParts = number.split(formatNumber.separator);
      var decimalPart = (_numberParts$ = _numberParts[1]) !== null && _numberParts$ !== void 0 ? _numberParts$ : '';
      decimalPart = decimalPart.padEnd(formatNumber.decimal, '0').substring(0, formatNumber.decimal);
      number = _numberParts[0] + '.' + decimalPart;
    } else {
      number = value.toFixed(formatNumber.decimal);
    }
    number = number.toString();
    if (number.indexOf('.')) {
      number = number.replace('.', formatNumber.separator);
    } else if (number.indexOf(',')) {
      number = number.replace(',', formatNumber.separator);
    }
    var numberParts = number.split(formatNumber.separator);
    numberParts[0] = numberParts[0].replace(/(.)(?=(\d{3})+$)/g, '$1' + formatNumber.thousand);
    number = numberParts.join(formatNumber.separator);
    return number;
  };
  var parseDate = function parseDate(date) {
    var _configState$configs$9, _configState$configs, _configState$configs$10;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_configState$configs$9 = configState.configs.format_time) === null || _configState$configs$9 === void 0 ? void 0 : _configState$configs$9.value) || '24';
    var formatDate = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || ((_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$10 = _configState$configs.dates_general_format) === null || _configState$configs$10 === void 0 ? void 0 : _configState$configs$10.value) || (formatTime === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ss A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };
    if (!(0, _dayjs.default)(date, formatDate.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }
    var _date = formatDate.utc ? _dayjs.default.utc(date, formatDate.inputFormat).local() : (0, _dayjs.default)(date, formatDate.inputFormat);
    return _date.format(formatDate.outputFormat);
  };
  var parseTime = function parseTime(time) {
    var _configState$configs$11;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!time) return '00:00';
    var _formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_configState$configs$11 = configState.configs.format_time) === null || _configState$configs$11 === void 0 ? void 0 : _configState$configs$11.value) || '24';
    var formatTime = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['HH:mm', 'hh:mm A', 'hh:mm'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || (_formatTime === '24' ? 'HH:mm' : 'hh:mm A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };
    if (!(0, _dayjs.default)(time, formatTime.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }
    var _date = formatTime.utc ? _dayjs.default.utc(time, formatTime.inputFormat).local() : (0, _dayjs.default)(time, formatTime.inputFormat);
    return _date.format(formatTime.outputFormat);
  };
  var parseShortenDistance = function parseShortenDistance(distance) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (distance >= 1000000000) {
      return "".concat((distance / 1000000000).toFixed(1).replace(/\.0$/, '')).concat(t('G', 'G'));
    }
    if (distance >= 1000000) {
      return "".concat((distance / 1000000).toFixed(1).replace(/\.0$/, '')).concat(t('M', 'M'));
    }
    if (distance >= 1000) {
      return "".concat((distance / 1000).toFixed(1).replace(/\.0$/, '')).concat(t('K', 'K'));
    }
  };
  var parseDistance = function parseDistance(distance) {
    var _configState$configs$12, _configState$configs$13;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    distance = parseFloat(distance) || 0;
    var unit = (options === null || options === void 0 ? void 0 : options.unit) || 'KM';
    if (((_configState$configs$12 = configState.configs.distance_unit_km) === null || _configState$configs$12 === void 0 ? void 0 : _configState$configs$12.value) === '1') {
      unit = 'KM';
    }
    if ((_configState$configs$13 = configState.configs.distance_unit) !== null && _configState$configs$13 !== void 0 && _configState$configs$13.value) {
      var _configState$configs$14;
      unit = (_configState$configs$14 = configState.configs.distance_unit) === null || _configState$configs$14 === void 0 ? void 0 : _configState$configs$14.value;
    }
    if (unit.toUpperCase() === 'MI') {
      var dist = distance * 0.621371;
      if (dist >= 1000) {
        return "".concat(parseShortenDistance(dist), " ").concat(t('MI', 'mi'));
      }
      return "".concat(parseNumber(dist, options), " ").concat(t('MI', 'mi'));
    } else {
      if (distance >= 1000) {
        return "".concat(parseShortenDistance(distance), " ").concat(t('KM', 'km'));
      }
      return "".concat(parseNumber(distance, options), " ").concat(t('KM', 'km'));
    }
  };
  var getTimeAgo = function getTimeAgo(dateTime, options) {
    if (!dateTime) return 'NN';
    var dateOptions = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };
    if (!(0, _dayjs.default)(dateTime, dateOptions.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }
    var _date = dateOptions.utc ? _dayjs.default.utc(dateTime, dateOptions.inputFormat).local() : (0, _dayjs.default)(dateTime, dateOptions.inputFormat);
    return _date.fromNow();
  };
  var getTimeTo = function getTimeTo(dateTime, options) {
    if (!dateTime) return 'NN';
    var dateOptions = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };
    if (!(0, _dayjs.default)(dateTime, dateOptions.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }
    var _date = dateOptions.utc ? _dayjs.default.utc(dateTime, dateOptions.inputFormat).local() : (0, _dayjs.default)(dateTime, dateOptions.inputFormat);
    return _date.toNow();
  };
  var optimizeImage = function optimizeImage(url, params, fallback) {
    if (!url && fallback) return fallback;
    return url;
  };
  var getOrderState = function getOrderState(num) {
    switch (num) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('COMPLETED_BY_ADMIN', 'Completed by admin');
      case 2:
        return t('REJECTED_BY_ADMIN', 'Rejected by admin');
      case 3:
        return t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business');
      case 4:
        return t('PREPARATION_COMPLETED', 'Preparation Completed');
      case 5:
        return t('REJECTED_BY_BUSINESS', 'Rejected by business');
      case 6:
        return t('REJECTED_BY_DRIVER', 'Rejected by driver');
      case 7:
        return t('ACCEPTED_BY_BUSINESS', 'Accepted by business');
      case 8:
        return t('ACCEPTED_BY_DRIVER', 'Accepted by driver');
      case 9:
        return t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver');
      case 10:
        return t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver');
      case 11:
        return t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver');
      case 12:
        return t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver');
      case 13:
        return t('PREORDER', 'Preorder');
      case 14:
        return t('ORDER_NOT_READY', 'Order not ready');
      case 15:
        return t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer');
      case 16:
        return t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer');
      case 17:
        return t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer');
      case 18:
        return t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business');
      case 19:
        return t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer');
      case 20:
        return t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business');
      case 21:
        return t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business');
      case 22:
        return t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver');
      case 23:
        return t('ORDER_DRIVER_ON_WAY', 'Driver on way');
      default:
        return 'N/A';
    }
  };
  var functions = {
    parsePrice: parsePrice,
    parseNumber: parseNumber,
    parseDate: parseDate,
    parseTime: parseTime,
    parseDistance: parseDistance,
    parseShortenDistance: parseShortenDistance,
    getTimeAgo: getTimeAgo,
    getTimeTo: getTimeTo,
    optimizeImage: optimizeImage,
    getOrderState: getOrderState
  };
  (0, _react.useEffect)(function () {
    if (!languageState.loading) {
      refreshLocalObject();
    }
  }, [languageState]);
  return /*#__PURE__*/_react.default.createElement(UtilsContext.Provider, {
    value: [functions]
  }, children);
};

/**
 * Hook to get utils functions
 */
exports.UtilsProviders = UtilsProviders;
var useUtils = function useUtils() {
  var utilsManager = (0, _react.useContext)(UtilsContext);
  return utilsManager || [{}, function () {}];
};
exports.useUtils = useUtils;