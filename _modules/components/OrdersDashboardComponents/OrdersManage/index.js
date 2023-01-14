"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../../contexts/SessionContext");

var _ApiContext = require("../../../contexts/ApiContext");

var _WebsocketContext = require("../../../contexts/WebsocketContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersManage = function OrdersManage(props) {
  var UIComponent = props.UIComponent,
      statusGroup = props.statusGroup,
      driversPropsToFetch = props.driversPropsToFetch,
      driverId = props.driverId,
      customerId = props.customerId,
      businessId = props.businessId;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var requestsState = {};
  var orderStatuesList = {
    pending: [0, 13],
    inProgress: [7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17]
  };

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
      startMulitOrderStatusChange = _useState10[0],
      setStartMulitOrderStatusChange = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      startMulitOrderDelete = _useState12[0],
      setStartMulitOrderDelete = _useState12[1];

  var _useState13 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      actionStatus = _useState14[0],
      setActionStatus = _useState14[1];

  var _useState15 = (0, _react.useState)(null),
      _useState16 = _slicedToArray(_useState15, 2),
      deletedOrderId = _useState16[0],
      setDeletedOrderId = _useState16[1];

  var _useState17 = (0, _react.useState)({
    result: null,
    loading: false,
    error: false
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      numberOfOrdersByStatus = _useState18[0],
      setNumberOfOrdersByStatus = _useState18[1];
  /**
   * Object to save driver group list
   */


  var _useState19 = (0, _react.useState)({
    groups: [],
    loading: false,
    error: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      driverGroupList = _useState20[0],
      setDriverGroupList = _useState20[1];
  /**
   * Object to save drivers
   */


  var _useState21 = (0, _react.useState)({
    drivers: [],
    loading: true,
    error: null
  }),
      _useState22 = _slicedToArray(_useState21, 2),
      driversList = _useState22[0],
      setDriversList = _useState22[1];
  /**
   * Object to save paymethods
   */


  var _useState23 = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState24 = _slicedToArray(_useState23, 2),
      paymethodsList = _useState24[0],
      setPaymethodsList = _useState24[1];
  /**
   * Object to save businesses
   */


  var _useState25 = (0, _react.useState)({
    businesses: [],
    loading: true,
    error: null
  }),
      _useState26 = _slicedToArray(_useState25, 2),
      businessesList = _useState26[0],
      setBusinessesList = _useState26[1];
  /**
   * Array to save the cities
   */


  var _useState27 = (0, _react.useState)([]),
      _useState28 = _slicedToArray(_useState27, 2),
      citiesList = _useState28[0],
      setCitiesList = _useState28[1];
  /**
   * Object to save selected order ids
   */


  var _useState29 = (0, _react.useState)([]),
      _useState30 = _slicedToArray(_useState29, 2),
      selectedOrderIds = _useState30[0],
      setSelectedOrderIds = _useState30[1];
  /**
   * Object to save order substatuses
   */


  var _useState31 = (0, _react.useState)({
    pending: orderStatuesList.pending,
    inProgress: orderStatuesList.inProgress,
    completed: orderStatuesList.completed,
    cancelled: orderStatuesList.cancelled,
    all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  }),
      _useState32 = _slicedToArray(_useState31, 2),
      selectedSubOrderStatus = _useState32[0],
      setSelectedSubOrderStatus = _useState32[1];
  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */


  var handleSelectedOrderIds = function handleSelectedOrderIds(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);

    if (!_ids.includes(orderId)) {
      _ids.push(orderId);
    } else {
      _ids = _ids.filter(function (_id) {
        return _id !== orderId;
      });
    }

    setSelectedOrderIds(_ids);
  };
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */


  var handleRemoveSelectedOrderId = function handleRemoveSelectedOrderId(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);

    _ids = _ids.filter(function (_id) {
      return _id !== orderId;
    });
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
   * save status for multi orders selected
   * @param {number} status order status
   */


  var handleChangeMultiOrdersStatus = function handleChangeMultiOrdersStatus(status) {
    setUpdateStatus(status);
    setStartMulitOrderStatusChange(true);
  };
  /**
   * Method to change multi orders status from API
   */


  var handleChangeMultiOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(orderId) {
      var requestOptions, response, _yield$response$json, result, _ordersIds;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  status: updateStatus
                })
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/orders/").concat(orderId), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;

              if (parseInt(result.status) === updateStatus) {
                _ordersIds = _toConsumableArray(selectedOrderIds);

                _ordersIds.shift();

                if (_ordersIds.length === 0) {
                  setStartMulitOrderStatusChange(false);
                }

                setSelectedOrderIds(_ordersIds);
              }

              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false
              }));
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context.t0.message]
              });
              setStartMulitOrderStatusChange(false);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function handleChangeMultiOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Delete orders for orders selected
   */


  var handleDeleteMultiOrders = function handleDeleteMultiOrders() {
    setStartMulitOrderDelete(true);
  };
  /**
   * Method to delete order from API
   */


  var deleteOrder = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
      var source, _yield$ordering$setAc, content, _ordersIds;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.deleteOrder = source;
              _context2.next = 6;
              return ordering.setAccessToken(token).orders(id).delete({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context2.sent;
              content = _yield$ordering$setAc.content;

              if (!content.error) {
                setDeletedOrderId(id);
                _ordersIds = _toConsumableArray(selectedOrderIds);

                _ordersIds.shift();

                if (_ordersIds.length === 0) {
                  setStartMulitOrderDelete(false);
                }

                setSelectedOrderIds(_ordersIds);
              }

              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context2.t0.message]
              });
              setStartMulitOrderDelete(false);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function deleteOrder(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers from API
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var source, _yield$ordering$setAc2, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              source = {};
              requestsState.drivers = source;
              _context3.next = 5;
              return ordering.setAccessToken(token).users().select(driversPropsToFetch).where([{
                attribute: 'level',
                value: [4]
              }]).get({
                cancelToken: source
              });

            case 5:
              _yield$ordering$setAc2 = _context3.sent;
              result = _yield$ordering$setAc2.content.result;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                drivers: result
              }));
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function getDrivers() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getControlsOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var requestOptions, response, content;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context4.next = 5;
              return fetch("".concat(ordering.root, "/controls/orders"), requestOptions);

            case 5:
              response = _context4.sent;
              _context4.next = 8;
              return response.json();

            case 8:
              content = _context4.sent;

              if (!content.error) {
                setCitiesList(content.result.cities);
                setDriverGroupList(_objectSpread(_objectSpread({}, driverGroupList), {}, {
                  loading: false,
                  groups: content.result.driver_groups
                }));
                setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                  loading: false,
                  paymethods: content.result.paymethods
                }));
                setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                  loading: false,
                  businesses: content.result.businesses
                }));
                setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                  loading: false
                }));
              } else {
                setActionStatus({
                  loading: false,
                  error: content === null || content === void 0 ? void 0 : content.result
                });
              }

              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context4.t0.message]
              });

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));

    return function getControlsOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Listening driver change
   */


  (0, _react.useEffect)(function () {
    if (loading) return;

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
          if (typeof trackingData.location === 'string') {
            var trackingLocation = trackingData.location;

            var _location = trackingLocation.replaceAll('\\', '');

            var location = JSON.parse(_location);
            _driver.location = location;
          } else {
            _driver.location = trackingData.location;
          }
        }

        return true;
      });
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers
      }));
    };

    socket.on('drivers_update', handleUpdateDriver);
    socket.on('tracking_driver', handleTrackingDriver);
    return function () {
      socket.off('drivers_update', handleUpdateDriver);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [socket, loading, driversList.drivers]);

  var getOrderNumbersByStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var where, conditions, filterConditons, additionalConditions, searchConditions, requestOptions, response, content, _orderStatusNumbers;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              where = [];
              conditions = [];

              if (Object.keys(filterValues).length > 0) {
                filterConditons = [];

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.statuses.length) > 0) {
                  filterConditons.push({
                    attribute: 'status',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.statuses
                  });
                }

                if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                  filterConditons.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                    }
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime) !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '>=',
                      value: encodeURI(filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime)
                    }
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime) !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '<=',
                      value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime
                    }
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.businessIds.length) !== 0) {
                  filterConditons.push({
                    attribute: 'business_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.businessIds
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode.length) !== 0) {
                  filterConditons.push({
                    attribute: 'country_code',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency.length) !== 0) {
                  filterConditons.push({
                    attribute: 'currency',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds.length) > 0) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryTypes.length) !== 0) {
                  filterConditons.push({
                    attribute: 'delivery_type',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryTypes
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverGroupIds.length) !== 0) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverGroupIds
                  });
                }

                if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.paymethodIds.length) !== 0) {
                  filterConditons.push({
                    attribute: 'paymethod_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.paymethodIds
                  });
                }

                if (filterConditons.length) {
                  conditions.push({
                    conector: 'AND',
                    conditions: filterConditons
                  });
                }
              }

              additionalConditions = [];

              if (driverId) {
                additionalConditions.push({
                  attribute: 'driver_id',
                  value: driverId
                });
              }

              if (customerId) {
                additionalConditions.push({
                  attribute: 'customer_id',
                  value: customerId
                });
              }

              if (businessId) {
                additionalConditions.push({
                  attribute: 'business_id',
                  value: businessId
                });
              }

              if (additionalConditions.length) {
                conditions.push({
                  conector: 'AND',
                  conditions: additionalConditions
                });
              }

              if (searchValue) {
                searchConditions = [];
                searchConditions.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
                searchConditions.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              _context5.prev = 10;
              setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context5.next = 15;
              return fetch("".concat(ordering.root, "/orders/dashboard?where=").concat(JSON.stringify(where)), requestOptions);

            case 15:
              response = _context5.sent;
              _context5.next = 18;
              return response.json();

            case 18:
              content = _context5.sent;

              if (!(content !== null && content !== void 0 && content.error)) {
                _orderStatusNumbers = Object.keys(orderStatuesList).reduce(function (sum, curr, index) {
                  var _currRe = content === null || content === void 0 ? void 0 : content.result.filter(function (ele) {
                    return orderStatuesList[curr].indexOf(ele === null || ele === void 0 ? void 0 : ele.status) >= 0;
                  });

                  if (index === 1) {
                    var _sumRe$, _currRe$, _ref6;

                    var _sumRe = content === null || content === void 0 ? void 0 : content.result.filter(function (ele) {
                      return orderStatuesList[sum].indexOf(ele === null || ele === void 0 ? void 0 : ele.status) >= 0;
                    });

                    return _ref6 = {}, _defineProperty(_ref6, sum, _sumRe.length > 1 ? _sumRe.reduce(function (_sum, _curr) {
                      return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                    }) : ((_sumRe$ = _sumRe[0]) === null || _sumRe$ === void 0 ? void 0 : _sumRe$.quantity) || 0), _defineProperty(_ref6, curr, _currRe.length > 1 ? _currRe.reduce(function (_sum, _curr) {
                      return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                    }) : ((_currRe$ = _currRe[0]) === null || _currRe$ === void 0 ? void 0 : _currRe$.quantity) || 0), _ref6;
                  } else {
                    var _currRe$2;

                    return _objectSpread(_objectSpread({}, sum), {}, _defineProperty({}, curr, _currRe.length > 1 ? _currRe.reduce(function (_sum, _curr) {
                      return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                    }) : ((_currRe$2 = _currRe[0]) === null || _currRe$2 === void 0 ? void 0 : _currRe$2.quantity) || 0));
                  }
                });
                setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
                  loading: false,
                  error: false,
                  result: _orderStatusNumbers
                }));
              } else {
                setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
                  loading: false,
                  error: true
                }));
              }

              _context5.next = 25;
              break;

            case 22:
              _context5.prev = 22;
              _context5.t0 = _context5["catch"](10);
              setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));

            case 25:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[10, 22]]);
    }));

    return function getOrderNumbersByStatus() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleUpdateOrder = function handleUpdateOrder() {
    getOrderNumbersByStatus();
  };

  (0, _react.useEffect)(function () {
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleUpdateOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleUpdateOrder);
    };
  }, [socket, filterValues, searchValue, numberOfOrdersByStatus]);
  (0, _react.useEffect)(function () {
    if (!user) return;
    socket.join('drivers');

    if (user.level === 0) {
      socket.join('orders');
      socket.join('messages_orders');
    } else {
      socket.join("orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
    }
  }, [socket, loading, user]);
  /**
   * Listening multi orders action start to change status
   */

  (0, _react.useEffect)(function () {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return;
    handleChangeMultiOrderStatus(selectedOrderIds[0]);
  }, [selectedOrderIds, startMulitOrderStatusChange]);
  /**
  * Listening mulit orders delete action start
  */

  (0, _react.useEffect)(function () {
    if (!startMulitOrderDelete || selectedOrderIds.length === 0) return;
    deleteOrder(selectedOrderIds[0]);
  }, [selectedOrderIds, startMulitOrderDelete]);
  (0, _react.useEffect)(function () {
    if (loading) return;

    if ((user === null || user === void 0 ? void 0 : user.level) === 0 || (user === null || user === void 0 ? void 0 : user.level) === 2 || (user === null || user === void 0 ? void 0 : user.level) === 5) {
      getDrivers();
    }

    getControlsOrders();
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, [user, loading]);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.error) && !(actionStatus !== null && actionStatus !== void 0 && actionStatus.loading)) {
      getOrderNumbersByStatus();
    }
  }, [actionStatus, filterValues, searchValue, driverId, customerId, businessId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    citiesList: citiesList,
    ordersStatusGroup: ordersStatusGroup,
    filterValues: filterValues,
    multiOrderUpdateStatus: updateStatus,
    selectedOrderIds: selectedOrderIds,
    deletedOrderId: deletedOrderId,
    startMulitOrderStatusChange: startMulitOrderStatusChange,
    startMulitOrderDelete: startMulitOrderDelete,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedSubOrderStatus: setSelectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleRemoveSelectedOrderId: handleRemoveSelectedOrderId,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    handleOrdersStatusGroupFilter: handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    setSelectedOrderIds: setSelectedOrderIds,
    numberOfOrdersByStatus: numberOfOrdersByStatus
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
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};