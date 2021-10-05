"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CumulativeOrders = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var CumulativeOrders = function CumulativeOrders(props) {
  var UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings,
      firstFetch = props.firstFetch,
      sortBy = props.sortBy;
  var orderStatus = {
    pending: [0, 13],
    inProgress: [3, 4, 7, 8, 9, 14, 18, 19, 20, 21],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17]
  }; // Hooks

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1]; // States


  var _useState = (0, _react.useState)(Object.entries(orderStatus).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return total.concat(value);
  }, [])),
      _useState2 = _slicedToArray(_useState, 2),
      activeStatus = _useState2[0],
      setActiveStatus = _useState2[1];

  var _useState3 = (0, _react.useState)({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize
    },
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pending = _useState4[0],
      setPending = _useState4[1];

  var _useState5 = (0, _react.useState)({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize
    },
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      inProgress = _useState6[0],
      setInProgress = _useState6[1];

  var _useState7 = (0, _react.useState)({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize
    },
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      completed = _useState8[0],
      setCompleted = _useState8[1];

  var _useState9 = (0, _react.useState)({
    orders: [],
    pagination: {
      currentPage: paginationSettings.initialPage,
      pageSize: paginationSettings.pageSize
    },
    loading: false,
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      cancelled = _useState10[0],
      setCancelled = _useState10[1];

  var getPending = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(isNextPage) {
      var options, _yield$ordering$setAc, _yield$ordering$setAc2, result, pagination, error, hash;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setPending(_objectSpread(_objectSpread({}, pending), {}, {
                loading: true
              }));
              options = {
                query: {
                  orderBy: sortBy,
                  page_size: paginationSettings.pageSize,
                  page: isNextPage ? pending.pagination.currentPage + 1 : 1,
                  where: [{
                    attribute: 'status',
                    value: orderStatus.pending
                  }]
                }
              };
              _context.prev = 2;
              _context.next = 5;
              return ordering.setAccessToken(token).orders().asDashboard().get(options);

            case 5:
              _yield$ordering$setAc = _context.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              pagination = _yield$ordering$setAc2.pagination;
              error = _yield$ordering$setAc2.error;

              if (!error) {
                hash = {};
                setPending(_objectSpread(_objectSpread({}, pending), {}, {
                  orders: isNextPage ? pending.orders.concat(result).filter(function (order) {
                    return hash[order === null || order === void 0 ? void 0 : order.id] ? false : hash[order === null || order === void 0 ? void 0 : order.id] = true;
                  }) : result,
                  pagination: {
                    currentPage: pagination.current_page,
                    pageSize: pagination.page_size,
                    totalPages: pagination.total_pages,
                    total: pagination.total,
                    from: pagination.from,
                    to: pagination.to
                  },
                  loading: false
                }));
              } else {
                setPending(_objectSpread(_objectSpread({}, pending), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              setPending(_objectSpread(_objectSpread({}, pending), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));

    return function getPending(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getInProgress = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(isNextPage) {
      var options, _yield$ordering$setAc3, _yield$ordering$setAc4, result, pagination, error, hash;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setInProgress(_objectSpread(_objectSpread({}, inProgress), {}, {
                loading: true
              }));
              options = {
                query: {
                  orderBy: sortBy,
                  page_size: paginationSettings.pageSize,
                  page: isNextPage ? inProgress.pagination.currentPage + 1 : 1,
                  where: [{
                    attribute: 'status',
                    value: orderStatus.inProgress
                  }]
                }
              };
              _context2.prev = 2;
              _context2.next = 5;
              return ordering.setAccessToken(token).orders().asDashboard().get(options);

            case 5:
              _yield$ordering$setAc3 = _context2.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              result = _yield$ordering$setAc4.result;
              pagination = _yield$ordering$setAc4.pagination;
              error = _yield$ordering$setAc4.error;

              if (!error) {
                hash = {};
                setInProgress(_objectSpread(_objectSpread({}, inProgress), {}, {
                  orders: isNextPage ? inProgress.orders.concat(result).filter(function (order) {
                    return hash[order === null || order === void 0 ? void 0 : order.id] ? false : hash[order === null || order === void 0 ? void 0 : order.id] = true;
                  }) : result,
                  pagination: {
                    currentPage: pagination.current_page,
                    pageSize: pagination.page_size,
                    totalPages: pagination.total_pages,
                    total: pagination.total,
                    from: pagination.from,
                    to: pagination.to
                  },
                  loading: false
                }));
              } else {
                setInProgress(_objectSpread(_objectSpread({}, inProgress), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              setInProgress(_objectSpread(_objectSpread({}, inProgress), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13]]);
    }));

    return function getInProgress(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getCompleted = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(isNextPage) {
      var options, _yield$ordering$setAc5, _yield$ordering$setAc6, result, pagination, error, hash;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setCompleted(_objectSpread(_objectSpread({}, completed), {}, {
                loading: true
              }));
              options = {
                query: {
                  orderBy: sortBy,
                  page_size: paginationSettings.pageSize,
                  page: isNextPage ? completed.pagination.currentPage + 1 : 1,
                  where: [{
                    attribute: 'status',
                    value: orderStatus.completed
                  }]
                }
              };
              _context3.prev = 2;
              _context3.next = 5;
              return ordering.setAccessToken(token).orders().asDashboard().get(options);

            case 5:
              _yield$ordering$setAc5 = _context3.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              result = _yield$ordering$setAc6.result;
              pagination = _yield$ordering$setAc6.pagination;
              error = _yield$ordering$setAc6.error;

              if (!error) {
                hash = {};
                setCompleted(_objectSpread(_objectSpread({}, completed), {}, {
                  orders: isNextPage ? completed.orders.concat(result).filter(function (order) {
                    return hash[order === null || order === void 0 ? void 0 : order.id] ? false : hash[order === null || order === void 0 ? void 0 : order.id] = true;
                  }) : result,
                  pagination: {
                    currentPage: pagination.current_page,
                    pageSize: pagination.page_size,
                    totalPages: pagination.total_pages,
                    total: pagination.total,
                    from: pagination.from,
                    to: pagination.to
                  },
                  loading: false
                }));
              } else {
                setCompleted(_objectSpread(_objectSpread({}, completed), {}, {
                  loading: false,
                  error: result[0]
                }));
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](2);
              setCompleted(_objectSpread(_objectSpread({}, completed), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 13]]);
    }));

    return function getCompleted(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getCancelled = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(isNextPage) {
      var options, _yield$ordering$setAc7, _yield$ordering$setAc8, result, pagination, error, hash;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setCancelled(_objectSpread(_objectSpread({}, cancelled), {}, {
                loading: true
              }));
              options = {
                query: {
                  orderBy: sortBy,
                  page_size: paginationSettings.pageSize,
                  page: isNextPage ? cancelled.pagination.currentPage + 1 : 1,
                  where: [{
                    attribute: 'status',
                    value: orderStatus.cancelled
                  }]
                }
              };
              _context4.prev = 2;
              _context4.next = 5;
              return ordering.setAccessToken(token).orders().asDashboard().get(options);

            case 5:
              _yield$ordering$setAc7 = _context4.sent;
              _yield$ordering$setAc8 = _yield$ordering$setAc7.content;
              result = _yield$ordering$setAc8.result;
              pagination = _yield$ordering$setAc8.pagination;
              error = _yield$ordering$setAc8.error;

              if (!error) {
                hash = {};
                setCancelled(_objectSpread(_objectSpread({}, cancelled), {}, {
                  orders: isNextPage ? cancelled.orders.concat(result).filter(function (order) {
                    return hash[order === null || order === void 0 ? void 0 : order.id] ? false : hash[order === null || order === void 0 ? void 0 : order.id] = true;
                  }) : result,
                  pagination: {
                    currentPage: pagination.current_page,
                    pageSize: pagination.page_size,
                    totalPages: pagination.total_pages,
                    total: pagination.total,
                    from: pagination.from,
                    to: pagination.to
                  },
                  loading: false
                }));
              } else {
                setCancelled(_objectSpread(_objectSpread({}, cancelled), {}, {
                  loading: false,
                  error: [result]
                }));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](2);
              setCancelled(_objectSpread(_objectSpread({}, cancelled), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 13]]);
    }));

    return function getCancelled(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  var loadOrders = function loadOrders(tab, isNextPage, isRefresh) {
    var _pending$pagination, _inProgress$paginatio, _completed$pagination, _cancelled$pagination;

    if (isRefresh) {
      setActiveStatus(Object.entries(orderStatus).reduce(function (total, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            value = _ref8[1];

        return total.concat(value);
      }, []));
    }

    switch (tab) {
      case 'pending':
        if (isNextPage || isRefresh || !((_pending$pagination = pending.pagination) !== null && _pending$pagination !== void 0 && _pending$pagination.total)) {
          getPending(isNextPage);
        }

        break;

      case 'inProgress':
        if (isNextPage || isRefresh || !((_inProgress$paginatio = inProgress.pagination) !== null && _inProgress$paginatio !== void 0 && _inProgress$paginatio.total)) {
          getInProgress(isNextPage);
        }

        break;

      case 'completed':
        if (isNextPage || isRefresh || !((_completed$pagination = completed.pagination) !== null && _completed$pagination !== void 0 && _completed$pagination.total)) {
          getCompleted(isNextPage);
        }

        break;

      case 'cancelled':
        if (isNextPage || isRefresh || !((_cancelled$pagination = cancelled.pagination) !== null && _cancelled$pagination !== void 0 && _cancelled$pagination.total)) {
          getCancelled(isNextPage);
        }

        break;
    }
  };

  (0, _react.useEffect)(function () {
    loadOrders(firstFetch);
  }, []);
  (0, _react.useEffect)(function () {
    if (!user) return;
    var ordersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    socket.join(ordersRoom);
    socket.on('disconnect', function (reason) {
      socket.join((user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(user === null || user === void 0 ? void 0 : user.id));
    });
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, user]);
  var handleSetState = (0, _react.useCallback)(function (prevState, order, status) {
    var orders = prevState.orders;
    var newOrder = orders.find(function (_order, index) {
      if (_order.id === (order === null || order === void 0 ? void 0 : order.id)) {
        var _order$driver, _order$driver2;

        if (_order.status !== (order === null || order === void 0 ? void 0 : order.status)) {
          order === null || order === void 0 ? true : delete order.total;
          order === null || order === void 0 ? true : delete order.subtotal;
          Object.assign(_order, order);
        } else if ((_order === null || _order === void 0 ? void 0 : (_order$driver = _order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) !== (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.id) && (user === null || user === void 0 ? void 0 : user.level) === 4) {
          orders.splice(index, 1);
        }

        return true;
      }

      return false;
    });

    if (!newOrder && status.includes(order === null || order === void 0 ? void 0 : order.status)) {
      orders.unshift(order);
    }

    return _objectSpread(_objectSpread({}, prevState), {}, {
      orders: orders
    });
  }, []);
  var handleOrder = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(order, isRegister) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!isRegister) {
                showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id));
                setPending(function (prevState) {
                  return handleSetState(prevState, order, orderStatus.pending);
                });
                setInProgress(function (prevState) {
                  return handleSetState(prevState, order, orderStatus.inProgress);
                });
                setCompleted(function (prevState) {
                  return handleSetState(prevState, order, orderStatus.completed);
                });
                setCancelled(function (prevState) {
                  return handleSetState(prevState, order, orderStatus.cancelled);
                });
              } else {
                showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id));
                setPending(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    orders: [order].concat(_toConsumableArray(prevState.orders))
                  });
                });
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5, _x6) {
      return _ref9.apply(this, arguments);
    };
  }(), []);
  (0, _react.useEffect)(function () {
    socket.on('orders_register', function (order) {
      return handleOrder(order, true);
    });
    socket.on('update_order', function (order) {
      return handleOrder(order, false);
    });
    return function () {
      socket.off('orders_register', function (order) {
        return handleOrder(order, true);
      });
      socket.off('update_order', function (order) {
        return handleOrder(order, false);
      });
    };
  }, [socket, user]);
  return /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    pending: pending,
    inProgress: inProgress,
    completed: completed,
    cancelled: cancelled,
    activeStatus: activeStatus,
    setActiveStatus: setActiveStatus,
    loadOrders: loadOrders
  }));
};

exports.CumulativeOrders = CumulativeOrders;
CumulativeOrders.propTypes = {
  /**
   * UI Component, this must be contain all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

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
   * First data fetched
   */
  firstFetch: _propTypes.default.string,

  /**
   * String parameter to sort the fetch
   */
  sortBy: _propTypes.default.string
};
CumulativeOrders.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  firstFetch: 'pending',
  sortBy: '-id'
};