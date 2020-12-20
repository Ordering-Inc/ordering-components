"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var OrderList = function OrderList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      orders = props.orders,
      orderIds = props.orderIds,
      orderStatus = props.orderStatus,
      pendingOrder = props.pendingOrder,
      preOrder = props.preOrder,
      orderBy = props.orderBy,
      orderDirection = props.orderDirection,
      useDefualtSessionManager = props.useDefualtSessionManager,
      paginationSettings = props.paginationSettings,
      asDashboard = props.asDashboard,
      filterValues = props.filterValues,
      searchValue = props.searchValue,
      isSearchByOrderId = props.isSearchByOrderId,
      isSearchByCustomerEmail = props.isSearchByCustomerEmail,
      isSearchByCustomerPhone = props.isSearchByCustomerPhone,
      deleteMultiOrderStatus = props.deleteMultiOrderStatus,
      handleResetDeleteMulitOrders = props.handleResetDeleteMulitOrders,
      changeMulitOrderStatus = props.changeMulitOrderStatus,
      multiOrderUpdateStatus = props.multiOrderUpdateStatus,
      handleResetChangeMultiOrder = props.handleResetChangeMultiOrder;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: !orders,
    error: null,
    orders: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderList = _useState2[0],
      setOrderList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      actionStatus = _useState6[0],
      setActionStatus = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      deleteActionStart = _useState8[0],
      setDeleteActionStart = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      updateActionStart = _useState10[0],
      setUpdateActionStart = _useState10[1];
  /**
   * Object to save selected order ids
   */


  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedOrderIds = _useState12[0],
      setSelectedOrderIds = _useState12[1];
  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */


  var handleSelectedOrderIds = function handleSelectedOrderIds(orderId) {
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
   * Method to delete order from API
   */


  var deleteOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(id) {
      var source, _yield$ordering$setAc, content, _orders2, _ordersIds;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.deleteOrder = source;
              _context.next = 6;
              return ordering.setAccessToken(accessToken).orders(id).delete({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              content = _yield$ordering$setAc.content;

              if (!content.error) {
                _orders2 = orderList.orders.filter(function (_order) {
                  return _order.id !== id;
                });
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  orders: _orders2
                }));
                _ordersIds = _toConsumableArray(selectedOrderIds);

                _ordersIds.shift();

                if (_ordersIds.length === 0) {
                  setDeleteActionStart(false);
                  handleResetDeleteMulitOrders();
                }

                setSelectedOrderIds(_ordersIds);
              }

              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context.t0.message]
              });
              setDeleteActionStart(false);
              handleResetDeleteMulitOrders();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function deleteOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var sortOrdersArray = function sortOrdersArray(option, array) {
    if (option === 'desc') {
      return array.sort(function (a, b) {
        return b.id - a.id;
      });
    }

    if (option === 'asc') {
      return array.sort(function (a, b) {
        return a.id - b.id;
      });
    }

    return array;
  };
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */


  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(order) {
      var source, _yield$ordering$setAc2, content, _orders3;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.updateOrders = source;
              _context2.next = 6;
              return ordering.setAccessToken(accessToken).orders(order.id).save({
                status: order.newStatus
              }, {
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc2 = _context2.sent;
              content = _yield$ordering$setAc2.content;
              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });

              if (!content.error) {
                _orders3 = orderList.orders.filter(function (_order) {
                  return _order.id !== order.id;
                });
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  orders: _orders3
                }));
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context2.t0.message]
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function handleUpdateOrderStatus(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to change multi orders status from API
   */


  var handleChangeMultiOrderStatus = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(orderId) {
      var requestOptions, response, _yield$response$json, result, _orders4, _ordersIds;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              })); //   const source = {}
              //   requestsState.updateOrder = source
              //   const { content } = await ordering.setAccessToken(accessToken).orders(orderId).save({ status: updateStatus }, { cancelToken: source })

              requestOptions = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                },
                body: JSON.stringify({
                  status: multiOrderUpdateStatus
                })
              };
              _context3.next = 5;
              return fetch("https://apiv4-dev.ordering.co/v400/en/luisv4/orders/".concat(orderId), requestOptions);

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context3.sent;
              result = _yield$response$json.result;

              if (parseInt(result.status) === multiOrderUpdateStatus) {
                _orders4 = orderList.orders.filter(function (_order) {
                  return _order.id !== orderId || _order.status === multiOrderUpdateStatus;
                });
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  orders: _orders4
                }));
                _ordersIds = _toConsumableArray(selectedOrderIds);

                _ordersIds.shift();

                if (_ordersIds.length === 0) {
                  setUpdateActionStart(false);
                  handleResetChangeMultiOrder();
                }

                setSelectedOrderIds(_ordersIds);
              }

              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false
              }));
              _context3.next = 19;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context3.t0.message]
              });
              setUpdateActionStart(false);
              handleResetChangeMultiOrder();

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function handleChangeMultiOrderStatus(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get orders from API
   * @param {number} page page number
   */


  var getOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(page) {
      var options, where, conditions, checkInnerContain, checkOutContain, searchConditions, filterConditons, source, functionFetch;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              options = null;
              where = [];
              conditions = [];

              if (!asDashboard) {
                options = {
                  query: {
                    orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
                    page: page,
                    page_size: paginationSettings.pageSize
                  }
                };
              } else {
                options = {
                  query: {
                    orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy
                  }
                };
              }

              if (orderIds) {
                conditions.push({
                  attribute: 'id',
                  value: orderIds
                });
              }

              if (Object.keys(filterValues).length === 0) {
                if (orderStatus) {
                  conditions.push({
                    attribute: 'status',
                    value: orderStatus
                  });
                }
              } else {
                if (filterValues.statuses.length > 0) {
                  checkInnerContain = filterValues.statuses.every(function (el) {
                    return orderStatus.indexOf(el) !== -1;
                  });
                  checkOutContain = orderStatus.every(function (el) {
                    return filterValues.statuses.indexOf(el) !== -1;
                  });
                  if (checkInnerContain) conditions.push({
                    attribute: 'status',
                    value: filterValues.statuses
                  });

                  if (checkOutContain) {
                    if (orderStatus) {
                      conditions.push({
                        attribute: 'status',
                        value: orderStatus
                      });
                    }
                  }
                } else {
                  if (orderStatus) {
                    conditions.push({
                      attribute: 'status',
                      value: orderStatus
                    });
                  }
                }
              }

              if (searchValue) {
                searchConditions = [];

                if (isSearchByOrderId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByCustomerEmail) {
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
                }

                if (isSearchByCustomerPhone) {
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
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (Object.keys(filterValues).length) {
                filterConditons = [];

                if (filterValues.deliveryFromDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '>=',
                      value: encodeURI(filterValues.deliveryFromDatetime)
                    }
                  });
                }

                if (filterValues.deliveryEndDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '<=',
                      value: filterValues.deliveryEndDatetime
                    }
                  });
                }

                if (filterValues.businessIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'business_id',
                    value: filterValues.businessIds
                  });
                }

                if (filterValues.driverIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: filterValues.driverIds
                  });
                }

                if (filterValues.deliveryTypes.length !== 0) {
                  filterConditons.push({
                    attribute: 'delivery_type',
                    value: filterValues.deliveryTypes
                  });
                }

                if (filterValues.paymethodIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'paymethod_id',
                    value: filterValues.paymethodIds
                  });
                }

                if (filterConditons.length) {
                  conditions.push({
                    conector: 'AND',
                    conditions: filterConditons
                  });
                }
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              source = {};
              requestsState.orders = source;
              options.cancelToken = source;
              functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard().where(where) : ordering.setAccessToken(accessToken).orders().where(where);
              _context4.next = 15;
              return functionFetch.get(options);

            case 15:
              return _context4.abrupt("return", _context4.sent);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getOrders(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var isPendingOrder = function isPendingOrder(createdAt, deliveryDatetime) {
    var date1 = (0, _dayjs.default)(createdAt);
    var date2 = (0, _dayjs.default)(deliveryDatetime);
    return date1.diff(date2, 'minute') < 60;
  };

  var isPreOrder = function isPreOrder(createdAt, deliveryDatetime) {
    var date1 = (0, _dayjs.default)(createdAt);
    var date2 = (0, _dayjs.default)(deliveryDatetime);
    return date1.diff(date2, 'minute') > 60;
  };

  var loadOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var response, filteredResult;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (session.token) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              _context5.prev = 2;
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context5.next = 6;
              return getOrders(pagination.currentPage + 1);

            case 6:
              response = _context5.sent;
              filteredResult = [];

              if (pendingOrder) {
                if (!response.content.error) {
                  filteredResult = response.content.result.filter(function (order) {
                    return isPendingOrder(order.created_at, order.delivery_datetime);
                  });
                }

                if (filterValues.isPreOrder) {
                  if (!filterValues.isPendingOrder) filteredResult = [];
                }
              }

              if (preOrder) {
                if (!response.content.error) {
                  filteredResult = response.content.result.filter(function (order) {
                    return isPreOrder(order.created_at, order.delivery_datetime);
                  });
                }

                if (filterValues.isPendingOrder) {
                  if (!filterValues.isPreOrder) filteredResult = [];
                }
              }

              if (pendingOrder || preOrder) {
                setOrderList({
                  loading: false,
                  orders: response.content.error ? [] : filteredResult,
                  error: response.content.error ? response.content.result : null
                });
              } else {
                setOrderList({
                  loading: false,
                  orders: response.content.error ? [] : response.content.result,
                  error: response.content.error ? response.content.result : null
                });
              }

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context5.next = 17;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](2);

              if (_context5.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context5.t0.message]
                }));
              }

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 14]]);
    }));

    return function loadOrders() {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Listening search value change
   */


  (0, _react.useEffect)(function () {
    if (searchValue === null) return;
    loadOrders();
  }, [searchValue]);
  /**
   * Listening sesssion and filter values change
   */

  (0, _react.useEffect)(function () {
    if (orders) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders
      }));
    } else {
      var checkInnerContain = false;
      var checkOutContain = false;

      if (Object.keys(filterValues).length > 0) {
        checkInnerContain = filterValues.statuses.every(function (el) {
          return orderStatus.indexOf(el) !== -1;
        });
        checkOutContain = orderStatus.every(function (el) {
          return filterValues.statuses.indexOf(el) !== -1;
        });

        if (!checkInnerContain && !checkOutContain) {
          setOrderList({
            loading: false,
            orders: [],
            error: null
          });
          return;
        }
      }

      loadOrders();
    }

    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [session, filterValues]);
  /**
   * Listening mulit orders delete action start
   */

  (0, _react.useEffect)(function () {
    if (!deleteMultiOrderStatus) return;

    if (selectedOrderIds.length === 0) {
      handleResetDeleteMulitOrders();
      return;
    }

    setDeleteActionStart(true);
  }, [deleteMultiOrderStatus]);
  (0, _react.useEffect)(function () {
    if (!deleteActionStart || selectedOrderIds.length === 0) return;
    deleteOrder(selectedOrderIds[0]);
  }, [selectedOrderIds, deleteActionStart]);
  /**
   * Listening multi orders action start to change status
   */

  (0, _react.useEffect)(function () {
    if (!updateActionStart || selectedOrderIds.length === 0) return;
    handleChangeMultiOrderStatus(selectedOrderIds[0]);
  }, [selectedOrderIds, updateActionStart]);
  (0, _react.useEffect)(function () {
    if (!changeMulitOrderStatus) return;

    if (selectedOrderIds.length === 0) {
      handleResetChangeMultiOrder();
      return;
    }

    setUpdateActionStart(true);
  }, [changeMulitOrderStatus]);
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      var orders = [];

      if (found) {
        orders = orderList.orders.filter(function (_order) {
          if (_order.id === order.id) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
          }

          var valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status));

          if (!valid) {
            pagination.total--;
            setPagination(_objectSpread({}, pagination));
          }

          return valid;
        });
        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: orders
        }));
      } else {
        var isOrderStatus = orderStatus.includes(parseInt(order.status));

        if (isOrderStatus) {
          orders = [].concat(_toConsumableArray(orderList.orders), [order]);

          var _orders = sortOrdersArray(orderDirection, orders);

          pagination.total++;
          setPagination(_objectSpread({}, pagination));
          setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
            orders: _orders
          }));
        }
      }
    };

    var handleRegisterOrder = function handleRegisterOrder(_order) {
      var order = _objectSpread(_objectSpread({}, _order), {}, {
        status: 0
      });

      var orders = [];

      if (orderStatus.includes(0)) {
        if (pendingOrder) {
          var isPending = isPendingOrder(order.created_at, order.delivery_datetime);

          if (isPending) {
            orders = [].concat(_toConsumableArray(orderList.orders), [order]);

            var _orders = sortOrdersArray(orderDirection, orders);

            pagination.total++;
            setPagination(_objectSpread({}, pagination));
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              orders: _orders
            }));
          }
        }

        if (preOrder) {
          var isPre = isPreOrder(order.created_at, order.delivery_datetime);

          if (isPre) {
            orders = [].concat(_toConsumableArray(orderList.orders), [order]);

            var _orders5 = sortOrdersArray(orderDirection, orders);

            pagination.total++;
            setPagination(_objectSpread({}, pagination));
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              orders: _orders5
            }));
          }
        }
      }
    };

    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
    };
  }, [orderList.orders, pagination, socket]);
  (0, _react.useEffect)(function () {
    if (!session.user) return;

    if (asDashboard) {
      socket.join('orders');
    } else {
      var _session$user;

      socket.join("orders_".concat(session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id));
    }

    return function () {
      if (asDashboard) {
        socket.leave('orders');
      } else {
        var _session$user2;

        socket.leave("orders_".concat(session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id));
      }
    };
  }, [socket, session]);

  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var response;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context6.prev = 1;
              _context6.next = 4;
              return getOrders(pagination.currentPage + 1);

            case 4:
              response = _context6.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);

              if (_context6.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context6.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 9]]);
    }));

    return function loadMoreOrders() {
      return _ref6.apply(this, arguments);
    };
  }();

  var goToPage = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(page) {
      var response;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context7.prev = 1;
              _context7.next = 4;
              return getOrders(page);

            case 4:
              response = _context7.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);

              if (_context7.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context7.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 9]]);
    }));

    return function goToPage(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderList: orderList,
    pagination: pagination,
    pendingOrder: pendingOrder,
    preOrder: preOrder,
    loadMoreOrders: loadMoreOrders,
    goToPage: goToPage,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    selectedOrderIds: selectedOrderIds,
    handleSelectedOrderIds: handleSelectedOrderIds
  })));
};

exports.OrderList = OrderList;
OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * new status to change status for several orders
   */
  multiOrderUpdateStatus: _propTypes.default.number,

  /**
   * notify to start for several orders delete action
   */
  deleteMultiOrderStatus: _propTypes.default.bool,

  /**
   * notify to start for several orders status change action
   */
  changeMulitOrderStatus: _propTypes.default.bool,

  /**
   * Function to initiate delete action status
   */
  handleResetDeleteMulitOrders: _propTypes.default.func,

  /**
   * Function to initiate multi order status change action
   */
  handleResetChangeMultiOrder: _propTypes.default.func,

  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,

  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};