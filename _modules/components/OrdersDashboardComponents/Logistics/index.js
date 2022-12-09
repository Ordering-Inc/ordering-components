"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logistics = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../../contexts/SessionContext");

var _ApiContext = require("../../../contexts/ApiContext");

var _LanguageContext = require("../../../contexts/LanguageContext");

var _UtilsContext = require("../../../contexts/UtilsContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Logistics = function Logistics(props) {
  var orderId = props.orderId,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _UtilsContext.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      getOrderState = _useUtils2$.getOrderState,
      parseDistance = _useUtils2$.parseDistance;
  /**
   * Array to save logistics
   */


  var _useState = (0, _react.useState)({
    logs: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      logisticList = _useState2[0],
      setLogisticList = _useState2[1];
  /**
   * Method to get logistics from API
   */


  var getLogistics = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, _yield$response$json, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLogisticList(_objectSpread(_objectSpread({}, logisticList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/logs?order_id=").concat(orderId), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              setLogisticList(_objectSpread(_objectSpread({}, logisticList), {}, {
                loading: false,
                logs: result
              }));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setLogisticList(_objectSpread(_objectSpread({}, logisticList), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function getLogistics() {
      return _ref.apply(this, arguments);
    };
  }();

  var parseLog = function parseLog(log) {
    var driverEvents = ['logistic_driver_found', 'logistic_driver_found_group', 'logistic_driver_not_found', 'logistic_driver_not_found_group', 'logistic_driver_found_in_coverage', 'logistic_driver_found_in_coverage_group', 'logistic_driver_found_out_coverage', 'logistic_driver_found_out_coverage_group', 'logistic_driver_autoaccepted', 'logistic_driver_autoaccepted_group', 'logistic_request_autorejected', 'logistic_request_autorejected_group', 'logistic_assign_request_accepted', 'logistic_assign_request_accepted_group', 'logistic_assign_request_rejected', 'logistic_assign_request_rejected_group', 'logistic_manual_driver_assignment', 'logistic_manual_driver_unassignment', 'logistic_driver_autoassigned_group'];
    var generalEvents = ['logistic_started', 'logistic_finished', 'logistic_expired', 'logistic_resolved', 'logistic_reset', 'logistic_grouped', 'logistic_cancelled', 'logistic_not_grouped', 'logistic_order_queued', 'logistic_order_out_queued', 'logistic_driver_company_not_found'];

    var parseLogData = function parseLogData(eventName, data) {
      var message = t('LOG_' + eventName.toUpperCase());

      for (var key in data) {
        var replaceBy = data[key];

        if (key === 'distance' || key === 'coverage') {
          replaceBy = parseDistance(data[key]);
        } else if (key === 'with_orders') {
          replaceBy = data[key].join(', ');
          key = 'orders';
        } else if (key === 'status') {
          replaceBy = getOrderState(data[key]);
        }

        message = message.replace('_' + key + '_', replaceBy);
      }

      return message;
    };

    var logData = log.data ? log.data : {};

    if (driverEvents.indexOf(log.event) !== -1 || log.driver_id) {
      if (log.driver) {
        logData.driver = log.driver.name + (log.driver.lastname ? log.driver.lastname : '');
      }

      return parseLogData(log.event, logData);
    } else if (log.driver_company_id || log.external_driver_id) {
      if (log.driver_company) {
        logData.driver_company = log.driver_company.name;
      }

      if (log.external_driver) {
        logData.external_driver = log.external_driver.name;
      }

      return parseLogData(log.event, logData);
    } else if (generalEvents.indexOf(log.event) !== -1) {
      return parseLogData(log.event, logData);
    }

    return t(log.event.toUpperCase()) + '<br />' + JSON.stringify(log.data);
  };

  (0, _react.useEffect)(function () {
    getLogistics();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    logisticList: logisticList,
    parseLog: parseLog
  })));
};

exports.Logistics = Logistics;
Logistics.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Logistics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};