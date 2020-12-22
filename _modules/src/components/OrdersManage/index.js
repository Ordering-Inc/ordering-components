"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersManage = function OrdersManage(props) {
  var UIComponent = props.UIComponent,
      statusGroup = props.statusGroup,
      driversPropsToFetch = props.driversPropsToFetch,
      businessesPropsToFetch = props.businessesPropsToFetch;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var requestsState = {};

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)(statusGroup || 'pending'),
      _useState4 = _slicedToArray(_useState3, 2),
      ordersStatusGroup = _useState4[0],
      setOrdersStatusGroup = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      filterValues = _useState6[0],
      setFilterValues = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      updateStatus = _useState8[0],
      setUpdateStatus = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      changeMulitOrderStatus = _useState10[0],
      setChangeMultiOrderStatus = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      deleteMultiOrderStatus = _useState12[0],
      setDeleteMultiOrderStatus = _useState12[1];

  var _useState13 = (0, _react.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedOrderNumber = _useState14[0],
      setSelectedOrderNumber = _useState14[1];
  /**
   * Object to save api config list
   */


  var _useState15 = (0, _react.useState)({
    configList: [],
    loading: true,
    error: null
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      apiConfigList = _useState16[0],
      setApiConfigList = _useState16[1];
  /**
   * Object to save driver group list
   */


  var _useState17 = (0, _react.useState)({
    groups: [],
    loading: false,
    error: null
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      driverGroupList = _useState18[0],
      setDriverGroupList = _useState18[1];
  /**
   * Object to save drivers
   */


  var _useState19 = (0, _react.useState)({
    drivers: [],
    loading: true,
    error: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      driversList = _useState20[0],
      setDriversList = _useState20[1];
  /**
   * Object to save paymethods
   */


  var _useState21 = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      paymethodsList = _useState22[0],
      setPaymethodsList = _useState22[1];
  /**
   * Object to save businesses
   */


  var _useState23 = (0, _react.useState)({
    businesses: [],
    loading: true,
    error: null
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      businessesList = _useState24[0],
      setBusinessesList = _useState24[1];
  /**
   * Object to save driver orders
   */


  var _useState25 = (0, _react.useState)({
    id: null,
    orders: [],
    loading: true,
    error: null
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      driverOrdersModal = _useState26[0],
      setDriverOrdersModal = _useState26[1];
  /**
   * Object to save selected order ids
   */


  var _useState27 = (0, _react.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      selectedOrderIds = _useState28[0],
      setSelectedOrderIds = _useState28[1];
  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */


  var handleOrderIds = function handleOrderIds(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);

    if (!_ids.includes(orderId)) {
      _ids.push(orderId);
    } else {
      for (var i = 0; i < _ids.length; i++) {
        if (_ids[i] === orderId) {
          _ids.splice(i, 1);

          i--;
        }
      }
    }

    setSelectedOrderIds(_ids);
  };
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */


  var handleRemoveSelectedOrderId = function handleRemoveSelectedOrderId(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);

    for (var i = 0; i < _ids.length; i++) {
      if (_ids[i] === orderId) {
        _ids.splice(i, 1);

        i--;
      }
    }

    setSelectedOrderIds(_ids);
  };
  /**
   * Change orders filter by statuses selected
   * @param {string} ordersStatusGroup orders status
   */


  var handleOrdersStatusGroupFilter = function handleOrdersStatusGroupFilter(statusGroup) {
    if (statusGroup === ordersStatusGroup) return;
    setOrdersStatusGroup(statusGroup);
    setSelectedOrderIds([]);
  };
  /**
   * Change text to search
   * @param {string} search Search value
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  /**
   * Save filter type values
   * @param {object} types
   */


  var handleChangeFilterValues = function handleChangeFilterValues(types) {
    setFilterValues(types);
  };
  /**
   * Change driver id to get orders of a driver
   * @param {string} driverId driver id
   */


  var handleChangeDriverOrdersModal = function handleChangeDriverOrdersModal(driverId) {
    if (driverId !== driverOrdersModal.id) setDriverOrdersModal(_objectSpread(_objectSpread({}, driverOrdersModal), {}, {
      id: driverId
    }));
  };
  /**
   * save status for multi orders selected
   * @param {number} status order status
   */


  var handleChangeMultiOrdersStatus = function handleChangeMultiOrdersStatus(status) {
    setUpdateStatus(status);
    setChangeMultiOrderStatus(true);
  };

  var handleResetChangeMultiOrder = function handleResetChangeMultiOrder() {
    setChangeMultiOrderStatus(false);
  };
  /**
   * Delete orders for orders selected
   */


  var handleDeleteMultiOrders = function handleDeleteMultiOrders() {
    setDeleteMultiOrderStatus(true);
  };
  /**
   * Reset order delete action
   */


  var handleResetDeleteMulitOrders = function handleResetDeleteMulitOrders() {
    setDeleteMultiOrderStatus(false);
  };
  /**
   * Method to get api configure from API
   */


  var getApiConfig = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$setAc, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setApiConfigList(_objectSpread(_objectSpread({}, apiConfigList), {}, {
                loading: true
              }));
              source = {};
              requestsState.apiConfig = source;
              _context.next = 6;
              return ordering.setAccessToken(token).configs().asDictionary().get({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              result = _yield$ordering$setAc.content.result;
              setApiConfigList(_objectSpread(_objectSpread({}, apiConfigList), {}, {
                loading: false,
                configList: result
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setApiConfigList(_objectSpread(_objectSpread({}, apiConfigList), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getApiConfig() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get driver group from API
   */


  var getDriverGroup = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, where, response, _yield$response$json, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setDriverGroupList(_objectSpread(_objectSpread({}, driverGroupList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              where = [{
                attribute: 'enabled',
                value: {
                  condition: '=',
                  value: true
                }
              }];
              _context2.next = 6;
              return fetch("https://apiv4.ordering.co/v400/en/luisv4/drivergroups?params=id,name,drivers&where=".concat(JSON.stringify(where)), requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              _yield$response$json = _context2.sent;
              result = _yield$response$json.result;
              setDriverGroupList(_objectSpread(_objectSpread({}, driverGroupList), {}, {
                loading: false,
                groups: result
              }));
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setDriverGroupList(_objectSpread(_objectSpread({}, driverGroupList), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function getDriverGroup() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get paymethods from API
   */


  var getPaymethods = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var response, _yield$response$json2, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fetch("".concat(ordering.root, "/paymethods?params=id,name&where=[{%22attribute%22:%22enabled%22,%22value%22:true}]"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();

            case 6:
              _yield$response$json2 = _context3.sent;
              result = _yield$response$json2.result;
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: result
              }));
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function getPaymethods() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get businesses from API
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var source, _yield$ordering$setAc2, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              source = {};
              requestsState.business = source;
              _context4.next = 5;
              return ordering.setAccessToken(token).businesses().asDashboard().select(businessesPropsToFetch).get({
                cancelToken: source
              });

            case 5:
              _yield$ordering$setAc2 = _context4.sent;
              result = _yield$ordering$setAc2.content.result;
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: result
              }));
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function getBusinesses() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers from API
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var source, _yield$ordering$setAc3, result;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              source = {};
              requestsState.drivers = source;
              _context5.next = 5;
              return ordering.setAccessToken(token).users().select(driversPropsToFetch).where([{
                attribute: 'level',
                value: [4]
              }]).get({
                cancelToken: source
              });

            case 5:
              _yield$ordering$setAc3 = _context5.sent;
              result = _yield$ordering$setAc3.content.result;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                drivers: result
              }));
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: _context5.t0.message
              }));

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 10]]);
    }));

    return function getDrivers() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Method to get orders assigned for selected driver from API
   */


  var getDriverOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var where, conditions, source, _yield$ordering$setAc4, result;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setDriverOrdersModal(_objectSpread(_objectSpread({}, driverOrdersModal), {}, {
                loading: true
              }));
              where = null;
              conditions = [];
              conditions.push({
                attribute: 'status',
                value: [0, 3, 4, 7, 8, 9]
              });
              conditions.push({
                attribute: 'driver_id',
                value: driverOrdersModal.id
              });
              where = {
                conditions: conditions,
                conector: 'AND'
              };
              source = {};
              requestsState.driverOrders = source;
              _context6.next = 11;
              return ordering.setAccessToken(token).orders().asDashboard().where(where).get({
                cancelToken: source
              });

            case 11:
              _yield$ordering$setAc4 = _context6.sent;
              result = _yield$ordering$setAc4.content.result;
              setDriverOrdersModal(_objectSpread(_objectSpread({}, driverOrdersModal), {}, {
                id: null,
                loading: false,
                orders: result
              }));
              _context6.next = 19;
              break;

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](0);
              setDriverOrdersModal(_objectSpread(_objectSpread({}, driverOrdersModal), {}, {
                loading: false,
                error: _context6.t0.message
              }));

            case 19:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 16]]);
    }));

    return function getDriverOrders() {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Listening selected order id change
   */


  (0, _react.useEffect)(function () {
    setSelectedOrderNumber(selectedOrderIds.length);
  }, [selectedOrderIds]);
  /**
   * Listening driver change
   */

  (0, _react.useEffect)(function () {
    if (driversList.loading || loading) return;

    var handleUpdateDriver = function handleUpdateDriver(driver) {
      var found = driversList.drivers.find(function (_driver) {
        return _driver.id === driver.id;
      });
      var _drivers = [];

      if (found) {
        _drivers = driversList.drivers.filter(function (_driver) {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver);
          }

          return true;
        });
      } else {
        _drivers = [].concat(_toConsumableArray(driversList.drivers), [driver]);
      }

      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: _drivers
      }));
    };

    var handleTrackingDriver = function handleTrackingDriver(trackingData) {
      var drivers = [];
      drivers = driversList.drivers.filter(function (_driver) {
        if (_driver.id === trackingData.driver_id) {
          _driver.location = trackingData.location;
        }

        return true;
      });
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers
      }));
    };

    socket.join('drivers');
    socket.on('drivers_update', handleUpdateDriver);
    socket.on('tracking_driver', handleTrackingDriver);
    return function () {
      socket.leave('drivers');
      socket.off('drivers_update', handleUpdateDriver);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [socket, loading]);
  (0, _react.useEffect)(function () {
    if (driverOrdersModal.id === null) return;
    getDriverOrders();
  }, [driverOrdersModal.id]);
  (0, _react.useEffect)(function () {
    getApiConfig();
    getDriverGroup();
    getDrivers();
    getPaymethods();
    getBusinesses();
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    apiConfigList: apiConfigList,
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    driverOrders: driverOrdersModal,
    ordersStatusGroup: ordersStatusGroup,
    filterValues: filterValues,
    selectedOrderNumber: selectedOrderNumber,
    deleteMultiOrderStatus: deleteMultiOrderStatus,
    changeMulitOrderStatus: changeMulitOrderStatus,
    multiOrderUpdateStatus: updateStatus,
    handleOrderIds: handleOrderIds,
    handleRemoveSelectedOrderId: handleRemoveSelectedOrderId,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    handleOrdersStatusGroupFilter: handleOrdersStatusGroupFilter,
    handleChangeDriverOrdersModal: handleChangeDriverOrdersModal,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    handleResetDeleteMulitOrders: handleResetDeleteMulitOrders,
    handleResetChangeMultiOrder: handleResetChangeMultiOrder
  })));
};

exports.OrdersManage = OrdersManage;
OrdersManage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

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
OrdersManage.defaultProps = {
  driversPropsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  businessesPropsToFetch: ['id', 'name', 'logo', 'food', 'laundry', 'alcohol', 'groceries'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};