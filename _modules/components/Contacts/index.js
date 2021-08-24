"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contacts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Contacts = function Contacts(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      firstFetch = props.firstFetch,
      businessProps = props.businessProps,
      customerProps = props.customerProps,
      driverProps = props.driverProps,
      businessConditions = props.businessConditions,
      customerConditions = props.customerConditions,
      driverConditions = props.driverConditions,
      sortParams = props.sortParams,
      paginationSettings = props.paginationSettings,
      conditionsConector = props.conditionsConector;
  var params = {
    orderBy: (sortParams.orderDirection === 'desc' ? '-' : '') + sortParams.orderBy
  };

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    data: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      contacts = _useState2[0],
      setContacts = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.page && paginationSettings.page >= 1 ? paginationSettings.page - 1 : 1,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 6
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];
  /**
   * Method to get businesses from SDK
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(nextPage) {
      var where, pageFetch, _yield$ordering$busin, _yield$ordering$busin2, result, error, pageConfig;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setContacts({
                data: nextPage ? contacts.data : [],
                loading: true,
                error: null
              });
              where = {
                conditions: businessConditions,
                conector: conditionsConector
              };
              pageFetch = {
                page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
                page_size: pagination.pageSize || paginationSettings.pageSize
              };
              _context.prev = 3;
              _context.next = 6;
              return ordering.businesses().select(businessProps).parameters(params).where(where).asDashboard().get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              result = _yield$ordering$busin2.result;
              error = _yield$ordering$busin2.error;
              pageConfig = _yield$ordering$busin2.pagination;

              if (!error) {
                setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                  data: nextPage ? contacts.data.concat(result) : result,
                  loading: false
                }));
                setPagination({
                  currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                  pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                  totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                  total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                  from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                  to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
                });
              } else {
                setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 14]]);
    }));

    return function getBusinesses(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get customers from SDK
   */


  var getCustomers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(nextPage) {
      var where, pageFetch, _yield$ordering$setAc, _yield$ordering$setAc2, result, error, pageConfig;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setContacts({
                data: nextPage ? contacts.data : [],
                loading: true,
                error: null
              });
              where = {
                conditions: customerConditions,
                conector: conditionsConector
              };
              pageFetch = {
                page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
                page_size: pagination.pageSize || paginationSettings.pageSize
              };
              _context2.prev = 3;
              _context2.next = 6;
              return ordering.setAccessToken(token).users().where(where).get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              error = _yield$ordering$setAc2.error;
              pageConfig = _yield$ordering$setAc2.pagination;

              if (!error) {
                setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                  data: nextPage ? contacts.data.concat(result) : result,
                  loading: false
                }));
                setPagination({
                  currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                  pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                  totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                  total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                  from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                  to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
                });
              } else {
                setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](3);
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 14]]);
    }));

    return function getCustomers(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers from SDK
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(nextPage) {
      var where, pageFetch, _yield$ordering$setAc3, _yield$ordering$setAc4, result, error, pageConfig;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setContacts({
                data: nextPage ? contacts.data : [],
                loading: true,
                error: null
              });
              where = {
                conditions: driverConditions,
                conector: conditionsConector
              };
              pageFetch = {
                page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
                page_size: pagination.pageSize || paginationSettings.pageSize
              };
              _context3.prev = 3;
              _context3.next = 6;
              return ordering.setAccessToken(token).users().select(driverProps).where(where).get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$setAc3 = _context3.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              result = _yield$ordering$setAc4.result;
              error = _yield$ordering$setAc4.error;
              pageConfig = _yield$ordering$setAc4.pagination;

              if (!error) {
                setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                  data: nextPage ? contacts.data.concat(result) : result,
                  loading: false
                }));
                setPagination({
                  currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                  pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                  totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                  total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                  from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                  to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
                });
              } else {
                setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](3);
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 14]]);
    }));

    return function getDrivers(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var loadMore = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(key) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = key;
              _context4.next = _context4.t0 === 2 ? 3 : _context4.t0 === 3 ? 5 : _context4.t0 === 4 ? 7 : 9;
              break;

            case 3:
              getBusinesses(true);
              return _context4.abrupt("break", 9);

            case 5:
              getCustomers(true);
              return _context4.abrupt("break", 9);

            case 7:
              getDrivers(true);
              return _context4.abrupt("break", 9);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function loadMore(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    switch (firstFetch) {
      case 'businesses':
        getBusinesses();
        break;

      case 'customers':
        getCustomers();
        break;

      case 'drivers':
        getDrivers();
        break;

      default:
        setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
          loading: false
        }));
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    contacts: contacts,
    pagination: pagination,
    getBusinesses: getBusinesses,
    getCustomers: getCustomers,
    getDrivers: getDrivers,
    loadMore: loadMore
  })));
};

exports.Contacts = Contacts;
Contacts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Initial page configuration
   */
  paginationSettings: _propTypes.default.object,

  /**
   * First data fetched
   */
  firstFetch: _propTypes.default.string,

  /**
   * Array of business props to fetch
   */
  businessProps: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Array of customer props to fetch
   */
  customerProps: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Array of driver props to fetch
   */
  driverProps: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Object parameters to sort the fetch
   */
  sortParams: _propTypes.default.object,

  /**
   * Array of conditions to fetch businesses
   */
  businessConditions: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Array of conditions to fetch customers
   */
  customerConditions: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Array of conditions to fetch drivers
   */
  driverConditions: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * String that indicates the conector type of the conditions to fetch
   */
  conditionsConector: _propTypes.default.string
};
Contacts.defaultProps = {
  paginationSettings: {
    page: 1,
    pageSize: 6,
    controlType: 'infinity'
  },
  firstFetch: 'businesses',
  businessProps: ['id', 'name', 'logo'],
  customerProps: ['id', 'name', 'lastname', 'photo', 'assigned_orders_count', 'qualification', // do not select qualification
  'level'],
  driverProps: ['id', 'name', 'lastname', 'photo', 'assigned_orders_count', 'level'],
  sortParams: {
    orderBy: 'name',
    orderDirection: 'asc'
  },
  businessConditions: [{
    attribute: 'enabled',
    value: {
      condition: '=',
      value: 'true'
    }
  }],
  customerConditions: [{
    attribute: 'level',
    value: [3]
  }],
  driverConditions: [{
    attribute: 'level',
    value: [4]
  }],
  conditionsConector: 'AND'
};