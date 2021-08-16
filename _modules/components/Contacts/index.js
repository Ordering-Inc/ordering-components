"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchOrders = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchOrders = function SearchOrders(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      fetchAll = props.fetchAll,
      propsToFetch = props.propsToFetch,
      paramsToFetch = props.paramsToFetch,
      conditionsToFetch = props.conditionsToFetch,
      conditionsConectorType = props.conditionsConectorType;
  var where = {
    conditions: conditionsToFetch,
    conector: conditionsConectorType
  };

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    data: [],
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businesses = _useState2[0],
      setBusinesses = _useState2[1];

  var _useState3 = (0, _react.useState)({
    data: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      drivers = _useState4[0],
      setDrivers = _useState4[1];

  var _useState5 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      pagination = _useState6[0],
      setPagination = _useState6[1];
  /**
   * Method to get businesses from SDK
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: true,
                error: null
              }));
              _context.prev = 1;
              _context.next = 4;
              return ordering.businesses().select(propsToFetch).parameters(paramsToFetch).where(where).asDashboard().get();

            case 4:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              result = _yield$ordering$busin2.result;
              error = _yield$ordering$busin2.error;

              if (!error) {
                setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                  data: result,
                  loading: false
                }));
              } else {
                setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
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

    return function getBusinesses() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers from SDK
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, result, error;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                loading: true,
                error: null
              }));
              _context2.prev = 1;
              _context2.next = 4;
              return ordering.setAccessToken(token).users().get();

            case 4:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              error = _yield$ordering$setAc2.error;

              if (!error) {
                setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                  data: result,
                  loading: false
                }));
              } else {
                setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 11]]);
    }));

    return function getDrivers() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (fetchAll) {
      getBusinesses();
      getDrivers();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    options: {
      businesses: businesses,
      drivers: drivers
    },
    getBusinesses: getBusinesses,
    getDrivers: getDrivers,
    getCities: getCities
  })));
};

exports.SearchOrders = SearchOrders;
SearchOrders.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Boolean indicating whether to fetch all
   */
  fetchAll: _propTypes.default.bool,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Object of params to fetch
   */
  paramsToFetch: _propTypes.default.object,

  /**
   * Array of conditions to fetch
   */
  conditionsToFetch: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * String that indicates the conector type of the conditions to fetch
   */
  conditionsConectorType: _propTypes.default.string
};
SearchOrders.defaultProps = {
  fetchAll: false,
  propsToFetch: ['id', 'name', 'FALTAN PROPS'],
  paramsToFetch: {
    page: 1,
    page_size: 6,
    orderBy: 'last_direct_message_at',
    orderDirection: 'asc',
    controlType: 'infinity'
  },
  conditionsToFetch: [{
    attribute: 'enabled',
    value: {
      condition: '=',
      value: 'true'
    }
  }],
  conditionsConectorType: 'AND'
};