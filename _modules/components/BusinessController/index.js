"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ApiContext = require("../../contexts/ApiContext");

var _UtilsContext = require("../../contexts/UtilsContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessController = function BusinessController(props) {
  var business = props.business,
      businessId = props.businessId,
      businessAttributes = props.businessAttributes,
      onBusinessClick = props.onBusinessClick,
      handleCustomClick = props.handleCustomClick,
      isDisabledInterval = props.isDisabledInterval,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * This must be containt business object data
   */


  var _useState = (0, _react.useState)({
    business: business,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessState = _useState2[0],
      setBusinessState = _useState2[1];
  /**
   * This must be containt local time for check if business is close
   */


  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTime = _useState4[0],
      setCurrentTime = _useState4[1];
  /**
   * This must be containt a boolean to indicate if a business is close or not
   */


  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isBusinessClose = _useState6[0],
      setIsBusinessClose = _useState6[1];
  /**
   * Order context data
   */


  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];
  /**
   * formatPrice function
   */


  var _useUtils = (0, _UtilsContext.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;
  /**
   * time when business is going to close
   */


  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      timeToClose = _useState8[0],
      setTimeToClose = _useState8[1];
  /**
   * timer in minutes when the business is going to close
   */


  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      businessWillCloseSoonMinutes = _useState10[0],
      setBusinessWillCloseSoonMinutes = _useState10[1];
  /**
   * Method to get business from SDK
   */


  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              _context.prev = 1;
              _context.next = 4;
              return ordering.businesses(businessId).select(businessAttributes).get();

            case 4:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              result = _yield$ordering$busin2.result;
              error = _yield$ordering$busin2.error;

              if (!error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result,
                  loading: false
                }));
              } else {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result[0],
                  loading: false,
                  error: error
                }));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to return business offert to show
   * @param {object} offer
   */


  var getBusinessOffer = function getBusinessOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return (maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate_type) === 1 ? "".concat(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate, "%") : parsePrice(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate);
  };
  /**
   * Method to return business max offer to show
   * @param {object} max offer
   */


  var getBusinessMaxOffer = function getBusinessMaxOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return maxOffer;
  };
  /**
   * Method to format date
   * @param {object} time
   */


  var formatDate = function formatDate(time) {
    var formatHour = (time === null || time === void 0 ? void 0 : time.hour) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.hour) : time === null || time === void 0 ? void 0 : time.hour;
    var formatMinute = (time === null || time === void 0 ? void 0 : time.minute) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.minute) : time === null || time === void 0 ? void 0 : time.minute;
    return time ? "".concat(formatHour, ":").concat(formatMinute) : 'none';
  };
  /**
   * Method to format numbers (only 2 decimals)
   * @param {number} num
   */


  var formatNumber = function formatNumber(num) {
    return Math.round(num * 1e2) / 1e2;
  };

  (0, _react.useEffect)(function () {
    var currentHour = currentTime === null || currentTime === void 0 ? void 0 : currentTime.split(':')[0];
    var currentMinute = currentTime === null || currentTime === void 0 ? void 0 : currentTime.split(':')[1];
    var hour = timeToClose === null || timeToClose === void 0 ? void 0 : timeToClose.split(':')[0];
    var minute = timeToClose === null || timeToClose === void 0 ? void 0 : timeToClose.split(':')[1];
    var result = currentHour > hour || currentHour === hour && currentMinute >= minute;
    var timeDifference = (new Date(null, null, null, hour, minute) - new Date(null, null, null, currentHour, currentMinute)) / 60000;
    setBusinessWillCloseSoonMinutes(timeDifference <= 30 && timeDifference > 0 ? timeDifference : null);

    if (timeToClose) {
      setIsBusinessClose(result);
    }
  }, [currentTime]);
  (0, _react.useEffect)(function () {
    if (!isDisabledInterval) {
      var interval = setInterval(function () {
        var currentHour = new Date().getHours();
        var currentMinute = new Date().getMinutes();
        var currentDay = new Date().getDate();
        var currentMonth = new Date().getMonth();
        var currentYear = new Date().getFullYear();
        setCurrentTime("".concat(currentHour, ":").concat(currentMinute));

        for (var i = 0; i < ((_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : (_businessState$busine2 = _businessState$busine.today) === null || _businessState$busine2 === void 0 ? void 0 : (_businessState$busine3 = _businessState$busine2.lapses) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.length); i++) {
          var _businessState$busine, _businessState$busine2, _businessState$busine3, _businessState$busine4, _businessState$busine5, _businessState$busine6, _businessState$busine7, _businessState$busine8, _businessState$busine9;

          var timeToOpenFormatted = formatDate(((_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : (_businessState$busine5 = _businessState$busine4.today) === null || _businessState$busine5 === void 0 ? void 0 : (_businessState$busine6 = _businessState$busine5.lapses[i]) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.open) || null);
          var timeToCloseFormatted = formatDate(((_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : (_businessState$busine8 = _businessState$busine7.today) === null || _businessState$busine8 === void 0 ? void 0 : (_businessState$busine9 = _businessState$busine8.lapses[i]) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.close) || null);
          var hourClose = timeToCloseFormatted === null || timeToCloseFormatted === void 0 ? void 0 : timeToCloseFormatted.split(':')[0];
          var minuteClose = timeToCloseFormatted === null || timeToCloseFormatted === void 0 ? void 0 : timeToCloseFormatted.split(':')[1];
          var hourOpen = timeToOpenFormatted === null || timeToOpenFormatted === void 0 ? void 0 : timeToOpenFormatted.split(':')[0];
          var minuteOpen = timeToOpenFormatted === null || timeToOpenFormatted === void 0 ? void 0 : timeToOpenFormatted.split(':')[1]; // range of most recent open-close business lapses

          if (new Date() < new Date(currentYear, currentMonth, currentDay, hourClose, minuteClose) && new Date() > new Date(currentYear, currentMonth, currentDay, hourOpen, minuteOpen)) {
            var _businessState$busine10, _businessState$busine11, _businessState$busine12;

            setTimeToClose(formatDate((_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : (_businessState$busine11 = _businessState$busine10.today) === null || _businessState$busine11 === void 0 ? void 0 : (_businessState$busine12 = _businessState$busine11.lapses[i]) === null || _businessState$busine12 === void 0 ? void 0 : _businessState$busine12.close));
          }
        }
      }, 1000);
      return function () {
        return clearInterval(interval);
      };
    }
  }, []);
  (0, _react.useEffect)(function () {
    var _businessState$busine13;

    if (business && (business === null || business === void 0 ? void 0 : business.id) !== (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine13 = businessState.business) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.id)) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: business
      }));
    } else if (!business) {
      getBusiness();
    }
  }, []);

  var updateBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(businessId) {
      var updateParams,
          _yield$ordering$busin3,
          _yield$ordering$busin4,
          result,
          error,
          _args2 = arguments;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              updateParams = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              _context2.prev = 2;
              _context2.next = 5;
              return ordering.businesses(businessId).save(updateParams);

            case 5:
              _yield$ordering$busin3 = _context2.sent;
              _yield$ordering$busin4 = _yield$ordering$busin3.content;
              result = _yield$ordering$busin4.result;
              error = _yield$ordering$busin4.error;

              if (!error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result,
                  loading: false
                }));
              } else {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result[0],
                  loading: false,
                  error: error
                }));
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 12]]);
    }));

    return function updateBusiness(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    updateBusiness: updateBusiness,
    orderState: orderState,
    isBusinessClose: isBusinessClose,
    businessState: businessState,
    business: businessState.business,
    formatDate: formatDate,
    formatNumber: formatNumber,
    getBusinessOffer: getBusinessOffer,
    getBusinessMaxOffer: getBusinessMaxOffer,
    handleClick: handleCustomClick || onBusinessClick,
    businessWillCloseSoonMinutes: businessWillCloseSoonMinutes
  })));
};

exports.BusinessController = BusinessController;
BusinessController.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business, contains a object with all business properties
   */
  business: _propTypes.default.object,

  /**
   * businessId, this must be containt id or slug to get business from API
   */
  businessId: _propTypes.default.number,

  /**
   * businessAttributes, Array of attributes to get business from API
   */
  businessAttributes: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * onBusinessClick, function to get click event and return business object after default behavior
   */
  onBusinessClick: _propTypes.default.func,

  /**
   * handleCustomClick, function to get click event and return business object without default behavior
   */
  handleCustomClick: _propTypes.default.func,

  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessController.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};