"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderListGroups = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _EventContext = require("../../contexts/EventContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderListGroups = function OrderListGroups(props) {
  var _orderGroupStatusCust, _orderGroupStatusCust2, _orderGroupStatusCust3, _orderGroupStatusCust4, _paginationSettings$p;

  var UIComponent = props.UIComponent,
      orderBy = props.orderBy,
      useDefualtSessionManager = props.useDefualtSessionManager,
      paginationSettings = props.paginationSettings,
      asDashboard = props.asDashboard,
      orderGroupStatusCustom = props.orderGroupStatusCustom,
      onOrdersDeleted = props.onOrdersDeleted,
      customOrderTypes = props.customOrderTypes,
      customPaymethods = props.customPaymethods;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var ordersStatusArray = ['pending', 'inProgress', 'completed', 'cancelled'];
  var ordersGroupStatus = {
    pending: (_orderGroupStatusCust = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.pending) !== null && _orderGroupStatusCust !== void 0 ? _orderGroupStatusCust : [0, 13],
    inProgress: (_orderGroupStatusCust2 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.inProgress) !== null && _orderGroupStatusCust2 !== void 0 ? _orderGroupStatusCust2 : [3, 4, 7, 8, 9, 14, 18, 19, 20, 21],
    completed: (_orderGroupStatusCust3 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.completed) !== null && _orderGroupStatusCust3 !== void 0 ? _orderGroupStatusCust3 : [1, 11, 15],
    cancelled: (_orderGroupStatusCust4 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.cancelled) !== null && _orderGroupStatusCust4 !== void 0 ? _orderGroupStatusCust4 : [2, 5, 6, 10, 12, 16, 17]
  };
  var orderStructure = {
    loading: false,
    error: null,
    orders: [],
    pagination: {
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }
  };

  var _useState = (0, _react.useState)({
    pending: _objectSpread(_objectSpread({}, orderStructure), {}, {
      defaultFilter: ordersGroupStatus.pending,
      currentFilter: ordersGroupStatus.pending
    }),
    inProgress: _objectSpread(_objectSpread({}, orderStructure), {}, {
      defaultFilter: ordersGroupStatus.inProgress,
      currentFilter: ordersGroupStatus.inProgress
    }),
    completed: _objectSpread(_objectSpread({}, orderStructure), {}, {
      defaultFilter: ordersGroupStatus.completed,
      currentFilter: ordersGroupStatus.completed
    }),
    cancelled: _objectSpread(_objectSpread({}, orderStructure), {}, {
      defaultFilter: ordersGroupStatus.cancelled,
      currentFilter: ordersGroupStatus.cancelled
    })
  }),
      _useState2 = _slicedToArray(_useState, 2),
      ordersGroup = _useState2[0],
      setOrdersGroup = _useState2[1];

  var _useState3 = (0, _react.useState)('pending'),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTabSelected = _useState4[0],
      setCurrentTabSelected = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null,
    messages: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      messages = _useState6[0],
      setMessages = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      currentFilters = _useState8[0],
      setCurrentFilters = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      filtered = _useState10[0],
      setFiltered = _useState10[1];

  var _useState11 = (0, _react.useState)({
    loading: false,
    error: null,
    result: []
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      ordersDeleted = _useState12[0],
      setOrdersDeleted = _useState12[1];

  var _useState13 = (0, _react.useState)({
    loading: true,
    error: null,
    paymethods: []
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      controlsState = _useState14[0],
      setControlsState = _useState14[1];

  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};

  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
      var _filtered$customer, _filtered$customer2, _filtered$date, _filtered$date3;

      var page, _ref$pageSize, pageSize, orderStatus, newFetch, options, _paymethodResult, paymethodResult, _filtered$driver_grou, _filtered$customer3, _filtered$customer5, customerOptions, _filtered$customer4, _filtered$customer6, _filtered$date2, _filtered$date4, source, functionFetch;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _ref.page, _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? paginationSettings.pageSize : _ref$pageSize, orderStatus = _ref.orderStatus, newFetch = _ref.newFetch;
              options = {
                query: {
                  orderBy: orderBy,
                  page: page,
                  page_size: pageSize
                }
              };
              options.query.where = [];

              if (orderStatus) {
                if (!(filtered !== null && filtered !== void 0 && filtered.state)) options.query.where.push({
                  attribute: 'status',
                  value: orderStatus
                });

                if (ordersGroup[currentTabSelected].orders.length > 0 && !newFetch) {
                  options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                    page: 1
                  });

                  if (!(filtered !== null && filtered !== void 0 && filtered.id)) {
                    options.query.where.push({
                      attribute: 'id',
                      value: {
                        condition: '!=',
                        value: ordersGroup[currentTabSelected].orders.map(function (o) {
                          return o.id;
                        })
                      }
                    });
                  }
                }
              }

              if (filtered !== null && filtered !== void 0 && filtered.id) {
                options.query.where.push({
                  attribute: 'id',
                  value: parseInt(filtered.id, 10)
                });
              }

              if (filtered !== null && filtered !== void 0 && filtered.state) {
                options.query.where.push({
                  attribute: 'status',
                  value: filtered.state
                });
              }

              if (filtered !== null && filtered !== void 0 && filtered.city) {
                options.query.where.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'city_id',
                    value: filtered === null || filtered === void 0 ? void 0 : filtered.city
                  }]
                });
              }

              if (!(filtered !== null && filtered !== void 0 && filtered.paymethod || customPaymethods)) {
                _context.next = 14;
                break;
              }

              paymethodResult = controlsState;

              if (controlsState.paymethods.length) {
                _context.next = 13;
                break;
              }

              _context.next = 12;
              return getControls();

            case 12:
              paymethodResult = _context.sent;

            case 13:
              options.query.where.push({
                attribute: 'paymethod_id',
                value: !!(filtered !== null && filtered !== void 0 && filtered.paymethod) && (filtered === null || filtered === void 0 ? void 0 : filtered.paymethod) || ((_paymethodResult = paymethodResult) === null || _paymethodResult === void 0 ? void 0 : _paymethodResult.paymethods)
              });

            case 14:
              if (filtered !== null && filtered !== void 0 && filtered.driver) {
                options.query.where.push({
                  attribute: 'driver_id',
                  value: filtered === null || filtered === void 0 ? void 0 : filtered.driver
                });
              }

              if (filtered !== null && filtered !== void 0 && filtered.driver_groups) {
                options.query.where.push({
                  attribute: 'driver_id',
                  value: filtered === null || filtered === void 0 ? void 0 : (_filtered$driver_grou = filtered.driver_groups) === null || _filtered$driver_grou === void 0 ? void 0 : _filtered$driver_grou.drivers
                });
              }

              if (filtered !== null && filtered !== void 0 && (_filtered$customer = filtered.customer) !== null && _filtered$customer !== void 0 && _filtered$customer.email || filtered !== null && filtered !== void 0 && (_filtered$customer2 = filtered.customer) !== null && _filtered$customer2 !== void 0 && _filtered$customer2.phone) {
                customerOptions = [];

                if (filtered !== null && filtered !== void 0 && (_filtered$customer3 = filtered.customer) !== null && _filtered$customer3 !== void 0 && _filtered$customer3.email) {
                  customerOptions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : (_filtered$customer4 = filtered.customer) === null || _filtered$customer4 === void 0 ? void 0 : _filtered$customer4.email, "%"))
                    }
                  });
                }

                if (filtered !== null && filtered !== void 0 && (_filtered$customer5 = filtered.customer) !== null && _filtered$customer5 !== void 0 && _filtered$customer5.phone) {
                  customerOptions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : (_filtered$customer6 = filtered.customer) === null || _filtered$customer6 === void 0 ? void 0 : _filtered$customer6.phone, "%"))
                    }
                  });
                }

                options.query.where.push({
                  attribute: 'customer',
                  conditions: customerOptions
                });
              }

              if (filtered !== null && filtered !== void 0 && filtered.delivery_type || customOrderTypes) {
                options.query.where.push({
                  attribute: 'delivery_type',
                  value: !!(filtered !== null && filtered !== void 0 && filtered.delivery_type) && (filtered === null || filtered === void 0 ? void 0 : filtered.delivery_type) || customOrderTypes
                });
              }

              if (filtered !== null && filtered !== void 0 && (_filtered$date = filtered.date) !== null && _filtered$date !== void 0 && _filtered$date.from) {
                options.query.where.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '>=',
                    value: filtered === null || filtered === void 0 ? void 0 : (_filtered$date2 = filtered.date) === null || _filtered$date2 === void 0 ? void 0 : _filtered$date2.from
                  }
                });
              }

              if (filtered !== null && filtered !== void 0 && (_filtered$date3 = filtered.date) !== null && _filtered$date3 !== void 0 && _filtered$date3.to) {
                options.query.where.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '<=',
                    value: filtered === null || filtered === void 0 ? void 0 : (_filtered$date4 = filtered.date) === null || _filtered$date4 === void 0 ? void 0 : _filtered$date4.to
                  }
                });
              }

              source = {};
              requestsState.orders = source;
              options.cancelToken = source;
              functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard() : ordering.setAccessToken(accessToken).orders();
              _context.next = 26;
              return functionFetch.get(options);

            case 26:
              return _context.abrupt("return", _context.sent);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getOrders(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getControls = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _result$paymethods, _result$paymethods$fi, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, obj, _controlsState$error;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setControlsState(_objectSpread(_objectSpread({}, controlsState), {}, {
                loading: true
              }));
              _context2.next = 4;
              return ordering.setAccessToken(accessToken).controls().get();

            case 4:
              _yield$ordering$setAc = _context2.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;
              obj = _objectSpread(_objectSpread({}, controlsState), {}, {
                loading: false,
                paymethods: result === null || result === void 0 ? void 0 : (_result$paymethods = result.paymethods) === null || _result$paymethods === void 0 ? void 0 : (_result$paymethods$fi = _result$paymethods.filter(function (p) {
                  return customPaymethods === null || customPaymethods === void 0 ? void 0 : customPaymethods.includes(p.name);
                })) === null || _result$paymethods$fi === void 0 ? void 0 : _result$paymethods$fi.map(function (pay) {
                  return pay.id;
                }),
                error: error ? result : null
              });
              setControlsState(obj);
              return _context2.abrupt("return", obj);

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setControlsState(_objectSpread(_objectSpread({}, controlsState), {}, {
                loading: false,
                error: _context2.t0 !== null && _context2.t0 !== void 0 && _context2.t0.message ? (_controlsState$error = controlsState.error) === null || _controlsState$error === void 0 ? void 0 : _controlsState$error.push(_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) : ['ERROR']
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function getControls() {
      return _ref3.apply(this, arguments);
    };
  }();

  var loadOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _ref5,
          newFetch,
          newFetchCurrent,
          pageSize,
          _yield$getOrders,
          _yield$getOrders$cont,
          error,
          result,
          pagination,
          _err$message,
          _args3 = arguments;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref5 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, newFetch = _ref5.newFetch, newFetchCurrent = _ref5.newFetchCurrent;

              if (!(!(newFetch || newFetchCurrent) && ordersGroup[currentTabSelected].pagination.currentPage === ordersGroup[currentTabSelected].pagination.totalPages && ordersGroup[currentTabSelected].pagination.total !== null)) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              if (newFetch) {
                ordersStatusArray.map(function (tab) {
                  ordersGroup = _objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, tab, _objectSpread(_objectSpread({}, orderStructure), {}, {
                    defaultFilter: ordersGroupStatus[tab],
                    currentFilter: ordersGroup[tab].currentFilter
                  })));
                });
              } else if (newFetchCurrent) {
                ordersGroup = _objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, orderStructure), {}, {
                  defaultFilter: ordersGroupStatus[currentTabSelected],
                  currentFilter: ordersGroup[currentTabSelected].currentFilter
                })));
              }

              pageSize = paginationSettings.pageSize;
              _context3.prev = 5;
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: true
              }))));
              _context3.next = 9;
              return getOrders({
                page: 1,
                pageSize: pageSize,
                orderStatus: ordersGroup[currentTabSelected].currentFilter,
                newFetch: newFetch
              });

            case 9:
              _yield$getOrders = _context3.sent;
              _yield$getOrders$cont = _yield$getOrders.content;
              error = _yield$getOrders$cont.error;
              result = _yield$getOrders$cont.result;
              pagination = _yield$getOrders$cont.pagination;
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                orders: error ? newFetch || newFetchCurrent ? [] : sortOrders(ordersGroup[currentTabSelected].orders) : newFetch || newFetchCurrent ? sortOrders(result) : sortOrders(ordersGroup[currentTabSelected].orders.concat(result)),
                error: error ? result : null,
                pagination: _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected].pagination), {}, {
                  currentPage: pagination.current_page,
                  pageSize: pagination.page_size,
                  totalPages: pagination.total_pages,
                  total: pagination.total,
                  from: pagination.from,
                  to: pagination.to
                })
              }))));
              _context3.next = 20;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](5);

              if (_context3.t0.constructor.name !== 'Cancel') {
                setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                  loading: false,
                  error: [(_err$message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']
                }))));
              }

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 17]]);
    }));

    return function loadOrders() {
      return _ref4.apply(this, arguments);
    };
  }();

  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$getOrders2, _yield$getOrders2$con, error, result, pagination, _err$message2;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: true
              }))));
              _context4.prev = 1;
              _context4.next = 4;
              return getOrders({
                page: ordersGroup[currentTabSelected].pagination.currentPage + 1,
                orderStatus: ordersGroup[currentTabSelected].currentFilter,
                newFetch: true
              });

            case 4:
              _yield$getOrders2 = _context4.sent;
              _yield$getOrders2$con = _yield$getOrders2.content;
              error = _yield$getOrders2$con.error;
              result = _yield$getOrders2$con.result;
              pagination = _yield$getOrders2$con.pagination;
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                orders: error ? sortOrders(ordersGroup[currentTabSelected].orders) : sortOrders(ordersGroup[currentTabSelected].orders.concat(result)),
                error: error ? result : null,
                pagination: !error ? _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected].pagination), {}, {
                  currentPage: pagination.current_page,
                  pageSize: pagination.page_size,
                  totalPages: pagination.total_pages,
                  total: pagination.total,
                  from: pagination.from,
                  to: pagination.to
                }) : ordersGroup[currentTabSelected].pagination
              }))));
              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.constructor.name !== 'Cancel') {
                setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                  loading: false,
                  error: [(_err$message2 = _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']
                }))));
              }

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 12]]);
    }));

    return function loadMoreOrders() {
      return _ref6.apply(this, arguments);
    };
  }();

  var loadMessages = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(orderId) {
      var url, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
              _context5.next = 5;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context5.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setMessages({
                  messages: result,
                  loading: false,
                  error: null
                });
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context5.next = 17;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context5.t0.Messages]
              }));

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 14]]);
    }));

    return function loadMessages(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();

  var deleteOrders = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(orderIds) {
      var errorState, _yield$ordering$setAc3, error, _iterator, _step, id, _yield$ordering$setAc4, multiError, isError, idsDeleted, _err$message3;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setOrdersDeleted(_objectSpread(_objectSpread({}, ordersDeleted), {}, {
                loading: true
              }));
              errorState = [];

              if (!(orderIds.length === 1)) {
                _context6.next = 11;
                break;
              }

              _context6.next = 6;
              return ordering.setAccessToken(accessToken).orders(orderIds[0]).delete();

            case 6:
              _yield$ordering$setAc3 = _context6.sent;
              error = _yield$ordering$setAc3.content.error;
              errorState.push({
                error: error,
                id: orderIds[0]
              });
              _context6.next = 32;
              break;

            case 11:
              if (!(orderIds.length > 1)) {
                _context6.next = 32;
                break;
              }

              _iterator = _createForOfIteratorHelper(orderIds);
              _context6.prev = 13;

              _iterator.s();

            case 15:
              if ((_step = _iterator.n()).done) {
                _context6.next = 24;
                break;
              }

              id = _step.value;
              _context6.next = 19;
              return ordering.setAccessToken(accessToken).orders(id).delete();

            case 19:
              _yield$ordering$setAc4 = _context6.sent;
              multiError = _yield$ordering$setAc4.content.error;
              errorState.push({
                error: multiError,
                id: id
              });

            case 22:
              _context6.next = 15;
              break;

            case 24:
              _context6.next = 29;
              break;

            case 26:
              _context6.prev = 26;
              _context6.t0 = _context6["catch"](13);

              _iterator.e(_context6.t0);

            case 29:
              _context6.prev = 29;

              _iterator.f();

              return _context6.finish(29);

            case 32:
              isError = errorState.some(function (e) {
                return e.error;
              });
              idsDeleted = errorState.map(function (obj) {
                return !obj.error && obj.id;
              });
              onOrdersDeleted && onOrdersDeleted({
                isError: isError,
                list: idsDeleted
              });
              setOrdersDeleted(_objectSpread(_objectSpread({}, ordersDeleted), {}, {
                loading: false
              }));
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                orders: idsDeleted.length ? sortOrders(ordersGroup[currentTabSelected].orders.filter(function (order) {
                  return !idsDeleted.includes(order.id);
                })) : sortOrders(ordersGroup[currentTabSelected].orders)
              }))));
              _context6.next = 42;
              break;

            case 39:
              _context6.prev = 39;
              _context6.t1 = _context6["catch"](0);

              if (_context6.t1.constructor.name !== 'Cancel') {
                setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                  loading: false,
                  error: [(_err$message3 = _context6.t1 === null || _context6.t1 === void 0 ? void 0 : _context6.t1.message) !== null && _err$message3 !== void 0 ? _err$message3 : 'ERROR']
                }))));
              }

            case 42:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 39], [13, 26, 29, 32]]);
    }));

    return function deleteOrders(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();

  var sortOrders = function sortOrders(orders) {
    var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    var ordersSorted = orders.sort(function (a, b) {
      if (sortBy === 'desc') {
        return b.id - a.id;
      }

      return a.id - b.id;
    });
    return ordersSorted;
  };

  var getStatusById = function getStatusById(id) {
    var _orderGroupStatusCust5, _orderGroupStatusCust6, _orderGroupStatusCust7, _orderGroupStatusCust8;

    if (!id && id !== 0) return;
    var pending = (_orderGroupStatusCust5 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.pending) !== null && _orderGroupStatusCust5 !== void 0 ? _orderGroupStatusCust5 : [0, 13];
    var inProgress = (_orderGroupStatusCust6 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.inProgress) !== null && _orderGroupStatusCust6 !== void 0 ? _orderGroupStatusCust6 : [3, 4, 7, 8, 9, 14, 18, 19, 20, 21];
    var completed = (_orderGroupStatusCust7 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.completed) !== null && _orderGroupStatusCust7 !== void 0 ? _orderGroupStatusCust7 : [1, 11, 15];
    var cancelled = (_orderGroupStatusCust8 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.cancelled) !== null && _orderGroupStatusCust8 !== void 0 ? _orderGroupStatusCust8 : [2, 5, 6, 10, 12, 16, 17];
    var status = pending.includes(id) ? 'pending' : inProgress.includes(id) ? 'inProgress' : completed.includes(id) ? 'completed' : 'cancelled';
    return status;
  };

  var actionOrderToTab = function actionOrderToTab(orderAux, status, type) {
    var orderList = ordersGroup[status].orders;
    var orders;

    var order = _objectSpread(_objectSpread({}, orderAux), {}, {
      showNotification: true
    });

    if (type === 'update') {
      var indexToUpdate = orderList.findIndex(function (o) {
        return o.id === order.id;
      });
      orderList[indexToUpdate] = order;
      orders = orderList;
    } else {
      orders = type === 'add' ? [order].concat(_toConsumableArray(orderList)) : orderList.filter(function (_order) {
        return _order.id !== order.id;
      });
    }

    ordersGroup[status].orders = sortOrders(orders);

    if (type !== 'update') {
      ordersGroup[status].pagination = _objectSpread(_objectSpread({}, ordersGroup[status].pagination), {}, {
        total: ordersGroup[status].pagination.total + (type === 'add' ? 1 : -1)
      });
    }
  };

  var handleClickOrder = function handleClickOrder(orderAux) {
    var order = _objectSpread(_objectSpread({}, orderAux), {}, {
      showNotification: false
    });

    var status = getStatusById(order === null || order === void 0 ? void 0 : order.status);
    var orderList = ordersGroup[status].orders;
    var indexToUpdate = orderList.findIndex(function (o) {
      return o.id === order.id;
    });
    orderList[indexToUpdate] = order;
    setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, status, _objectSpread(_objectSpread({}, ordersGroup[status]), {}, {
      orders: sortOrders(orderList)
    }))));
  };

  (0, _react.useEffect)(function () {
    var _ordersGroup$currentT, _ordersGroup$currentT2;

    loadOrders({
      newFetchCurrent: ((_ordersGroup$currentT = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT === void 0 ? void 0 : (_ordersGroup$currentT2 = _ordersGroup$currentT.pagination) === null || _ordersGroup$currentT2 === void 0 ? void 0 : _ordersGroup$currentT2.total) === null
    });
  }, [currentTabSelected]);
  (0, _react.useEffect)(function () {
    if (currentFilters) {
      loadOrders({
        newFetchCurrent: true
      });
    }
  }, [currentFilters]);
  (0, _react.useEffect)(function () {
    if (!filtered) return;
    loadOrders({
      newFetch: true
    });
  }, [filtered]);
  (0, _react.useEffect)(function () {
    if (ordersGroup[currentTabSelected].loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderFound, _orderFound$driver, _order$driver, _session$user;

      events.emit('order_updated', order);
      var orderFound = null;

      for (var i = 0; i < ordersStatusArray.length; i++) {
        var status = ordersStatusArray[i];
        orderFound = ordersGroup[status].orders.find(function (_order) {
          return _order.id === order.id;
        });
        if (orderFound) break;
      }

      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id));

      if (!orderFound) {
        var _getStatusById;

        if (!(order !== null && order !== void 0 && order.products) || !(order !== null && order !== void 0 && order.summary) || !(order !== null && order !== void 0 && order.status) || !(order !== null && order !== void 0 && order.customer) || !(order !== null && order !== void 0 && order.business) || !(order !== null && order !== void 0 && order.paymethod) || !(order !== null && order !== void 0 && order.total) || !(order !== null && order !== void 0 && order.subtotal)) return;
        delete order.total;
        delete order.subtotal;
        var currentFilter = ordersGroup[(_getStatusById = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById !== void 0 ? _getStatusById : ''].currentFilter;
        !currentFilter.includes(order.status) ? actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'remove') : actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'add');
        return;
      }

      if (orderFound.id === order.id && ((_orderFound = orderFound) === null || _orderFound === void 0 ? void 0 : (_orderFound$driver = _orderFound.driver) === null || _orderFound$driver === void 0 ? void 0 : _orderFound$driver.id) !== (order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) && (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 4) {
        actionOrderToTab(orderFound, getStatusById(orderFound.status), 'remove');
      }

      if (orderFound.id === order.id) {
        delete order.total;
        delete order.subtotal;
      }

      if (!(order !== null && order !== void 0 && order.status) && (order === null || order === void 0 ? void 0 : order.status) !== 0) {
        Object.assign(orderFound, order);
      } else {
        var _getStatusById2, _getStatusById3, _orderFound2;

        var newOrderStatus = (_getStatusById2 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById2 !== void 0 ? _getStatusById2 : '';
        var currentOrderStatus = (_getStatusById3 = getStatusById((_orderFound2 = orderFound) === null || _orderFound2 === void 0 ? void 0 : _orderFound2.status)) !== null && _getStatusById3 !== void 0 ? _getStatusById3 : '';
        var _currentFilter = ordersGroup[newOrderStatus].currentFilter;
        Object.assign(orderFound, order);

        if (newOrderStatus !== currentOrderStatus) {
          var _ordersGroup$newOrder;

          actionOrderToTab(orderFound, currentOrderStatus, 'remove');
          var total = (_ordersGroup$newOrder = ordersGroup[newOrderStatus].pagination.total) !== null && _ordersGroup$newOrder !== void 0 ? _ordersGroup$newOrder : null;

          if (_currentFilter.includes(orderFound.status) && total !== null) {
            actionOrderToTab(orderFound, newOrderStatus, 'add');
          }
        } else {
          !_currentFilter.includes(orderFound.status) ? actionOrderToTab(orderFound, newOrderStatus, 'remove') : actionOrderToTab(orderFound, newOrderStatus, 'update');
        }
      }
    };

    var handleAddNewOrder = function handleAddNewOrder(order) {
      var _getStatusById4;

      events.emit('order_added', order);
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id));
      var status = (_getStatusById4 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById4 !== void 0 ? _getStatusById4 : '';
      var currentFilter = ordersGroup[status].currentFilter;

      if (currentFilter.includes(order.status)) {
        actionOrderToTab(order, status, 'add');
      }
    };

    socket.on('orders_register', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      socket.off('orders_register', handleAddNewOrder);
      socket.off('update_order', handleUpdateOrder);
    };
  }, [ordersGroup, socket, session]);
  (0, _react.useEffect)(function () {
    var _session$user4, _session$user5;

    if (!session.user) return;
    socket.on('disconnect', function () {
      var _session$user2, _session$user3;

      var ordersRoom = (session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
      socket.join(ordersRoom);
    });
    var ordersRoom = (session === null || session === void 0 ? void 0 : (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id);
    socket.join(ordersRoom);
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, session]);
  (0, _react.useEffect)(function () {
    var request = requestsState.orders;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.orders]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentFilters: currentFilters,
    setCurrentFilters: setCurrentFilters,
    currentTabSelected: currentTabSelected,
    setCurrentTabSelected: setCurrentTabSelected,
    ordersGroup: ordersGroup,
    setOrdersGroup: setOrdersGroup,
    messages: messages,
    ordersDeleted: ordersDeleted,
    setOrdersDeleted: setOrdersDeleted,
    setMessages: setMessages,
    loadOrders: loadOrders,
    deleteOrders: deleteOrders,
    loadMessages: loadMessages,
    loadMoreOrders: loadMoreOrders,
    handleClickOrder: handleClickOrder,
    filtered: filtered,
    onFiltered: setFiltered
  })));
};

exports.OrderListGroups = OrderListGroups;
OrderListGroups.defaultProps = {
  orderBy: '-id',
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