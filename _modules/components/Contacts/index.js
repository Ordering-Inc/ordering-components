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

var _WebsocketContext = require("../../contexts/WebsocketContext");

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

var Contacts = function Contacts(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      firstFetch = props.firstFetch,
      orderProps = props.orderProps,
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
    orderBy: (sortParams.direction === 'desc' ? '-' : '') + sortParams.param
  };

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useState = (0, _react.useState)(sortParams),
      _useState2 = _slicedToArray(_useState, 2),
      sortBy = _useState2[0],
      setSortBy = _useState2[1];

  var _useState3 = (0, _react.useState)({
    data: [],
    loading: true,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      orders = _useState4[0],
      setOrders = _useState4[1];

  var _useState5 = (0, _react.useState)({
    data: [],
    loading: true,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      contacts = _useState6[0],
      setContacts = _useState6[1];

  var _useState7 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.page && paginationSettings.page >= 1 ? paginationSettings.page - 1 : 1,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 6
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      pagination = _useState8[0],
      setPagination = _useState8[1];

  var getOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(nextPage) {
      var parameters, pageFetch, _yield$ordering$order, _yield$ordering$order2, result, error, pageConfig, hash;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setOrders({
                data: nextPage ? orders.data : [],
                loading: true,
                error: null
              });
              parameters = {
                orderBy: (sortBy.direction === 'desc' ? '-' : '') + sortBy.param
              };
              pageFetch = {
                page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
                page_size: pagination.pageSize || paginationSettings.pageSize
              };
              _context.prev = 3;
              _context.next = 6;
              return ordering.orders().parameters(parameters).asDashboard().get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$order = _context.sent;
              _yield$ordering$order2 = _yield$ordering$order.content;
              result = _yield$ordering$order2.result;
              error = _yield$ordering$order2.error;
              pageConfig = _yield$ordering$order2.pagination;

              if (!error) {
                hash = {};
                setOrders(_objectSpread(_objectSpread({}, orders), {}, {
                  data: nextPage ? orders.data.concat(result).filter(function (order) {
                    return hash[order === null || order === void 0 ? void 0 : order.id] ? false : hash[order === null || order === void 0 ? void 0 : order.id] = true;
                  }) : result,
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
                setOrders(_objectSpread(_objectSpread({}, orders), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](3);
              setOrders(_objectSpread(_objectSpread({}, orders), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 14]]);
    }));

    return function getOrders(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get businesses from SDK
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(nextPage) {
      var where, pageFetch, _yield$ordering$busin, _yield$ordering$busin2, result, error, pageConfig;

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
                conditions: businessConditions,
                conector: conditionsConector
              };
              pageFetch = {
                page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
                page_size: pagination.pageSize || paginationSettings.pageSize
              };
              _context2.prev = 3;
              _context2.next = 6;
              return ordering.businesses().select(businessProps).parameters(params).where(where).asDashboard().get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$busin = _context2.sent;
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

    return function getBusinesses(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get customers from SDK
   */


  var getCustomers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(nextPage) {
      var where, pageFetch, _yield$ordering$setAc, _yield$ordering$setAc2, result, error, pageConfig;

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
                conditions: customerConditions,
                conector: conditionsConector
              };
              pageFetch = {
                page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
                page_size: pagination.pageSize || paginationSettings.pageSize
              };
              _context3.prev = 3;
              _context3.next = 6;
              return ordering.setAccessToken(token).users().where(where).get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$setAc = _context3.sent;
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

    return function getCustomers(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get drivers from SDK
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(nextPage) {
      var where, pageFetch, _yield$ordering$setAc3, _yield$ordering$setAc4, result, error, pageConfig;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
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
              _context4.prev = 3;
              _context4.next = 6;
              return ordering.setAccessToken(token).users().select(driverProps).where(where).get({
                query: pageFetch
              });

            case 6:
              _yield$ordering$setAc3 = _context4.sent;
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

              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](3);
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 14]]);
    }));

    return function getDrivers(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var loadMore = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(key) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = key;
              _context5.next = _context5.t0 === 2 ? 3 : _context5.t0 === 3 ? 5 : _context5.t0 === 4 ? 7 : 9;
              break;

            case 3:
              getBusinesses(true);
              return _context5.abrupt("break", 10);

            case 5:
              getCustomers(true);
              return _context5.abrupt("break", 10);

            case 7:
              getDrivers(true);
              return _context5.abrupt("break", 10);

            case 9:
              getOrders(true);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function loadMore(_x5) {
      return _ref5.apply(this, arguments);
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
        getOrders();
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!orders.loading) {
      getOrders();
    }
  }, [sortBy]);
  (0, _react.useEffect)(function () {
    if (!token) return;
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    var ordersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    socket.join(messagesOrdersRoom);
    socket.join(ordersRoom);
    return function () {
      socket.leave(messagesOrdersRoom);
      socket.leave(ordersRoom);
    };
  }, [socket]);
  var handleMessage = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(message) {
      var orderId, _yield$ordering$setAc5, _yield$ordering$setAc6, result, error;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              orderId = message.order_id;
              _context6.prev = 1;
              _context6.next = 4;
              return ordering.setAccessToken(token).orders(orderId).asDashboard().get();

            case 4:
              _yield$ordering$setAc5 = _context6.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              result = _yield$ordering$setAc6.result;
              error = _yield$ordering$setAc6.error;

              if (!error) {
                setOrders(function (prevOrders) {
                  var data = prevOrders.data;
                  var order = prevOrders.data.find(function (order, index) {
                    if (order.id === parseInt(orderId)) {
                      data.splice(index, 1);
                      data.unshift(result);
                      return true;
                    }

                    return false;
                  });

                  if (!order) {
                    data.unshift(result);
                  }

                  return _objectSpread(_objectSpread({}, prevOrders), {}, {
                    data: data
                  });
                });
              }

              _context6.next = 14;
              break;

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](1);
              return _context6.abrupt("return", null);

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 11]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }(), []);
  var handleUpdateOrder = (0, _react.useCallback)(function (order) {
    var id = order.id,
        status = order.status;
    setOrders(function (prevOrders) {
      var data = prevOrders.data;
      data.forEach(function (_order) {
        if (_order.id === id && _order.status !== status) {
          delete order.total;
          delete order.subtotal;
          Object.assign(_order, order);
        }
      });
      return _objectSpread(_objectSpread({}, prevOrders), {}, {
        data: data
      });
    });
  }, []);
  (0, _react.useEffect)(function () {
    socket.on('message', handleMessage);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      socket.off('message', handleMessage);
      socket.off('update_order', handleUpdateOrder);
    };
  }, [socket]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orders: orders,
    setOrders: setOrders,
    setSortBy: setSortBy,
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
  orderProps: ['id', 'business', 'unread_count', 'delivery_datetime_utc', 'status'],
  businessProps: ['id', 'name', 'logo'],
  customerProps: ['id', 'name', 'lastname', 'photo', 'assigned_orders_count', 'qualification', // do not select qualification
  'level'],
  driverProps: ['id', 'name', 'lastname', 'photo', 'assigned_orders_count', 'level'],
  sortParams: {
    param: 'name',
    direction: 'asc'
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