"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardOrdersList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _EventContext = require("../../../contexts/EventContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t6 in e) "default" !== _t6 && {}.hasOwnProperty.call(e, _t6) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t6)) && (i.get || i.set) ? o(f, _t6, i) : f[_t6] = e[_t6]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DashboardOrdersList = exports.DashboardOrdersList = function DashboardOrdersList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    orders = props.orders,
    isOnlyDelivery = props.isOnlyDelivery,
    driverId = props.driverId,
    customerId = props.customerId,
    businessId = props.businessId,
    franchiseId = props.franchiseId,
    orderIds = props.orderIds,
    deletedOrderIds = props.deletedOrderIds,
    orderStatus = props.orderStatus,
    orderBy = props.orderBy,
    orderDirection = props.orderDirection,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    filterValues = props.filterValues,
    searchValue = props.searchValue,
    isSearchByOrderId = props.isSearchByOrderId,
    isSearchByCustomerEmail = props.isSearchByCustomerEmail,
    isSearchByCustomerPhone = props.isSearchByCustomerPhone,
    isSearchByBusinessName = props.isSearchByBusinessName,
    isSearchByDriverName = props.isSearchByDriverName,
    orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate,
    timeStatus = props.timeStatus,
    driversList = props.driversList,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
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
  var sortOrdersArray = function sortOrdersArray(option, array) {
    if (option === 'id') {
      if (orderDirection === 'desc') {
        return array.sort(function (a, b) {
          return b.id - a.id;
        });
      }
      if (orderDirection === 'asc') {
        return array.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    }
    if (option === 'last_direct_message_at') {
      return array.sort(function (a, b) {
        return new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at);
      });
    }
    return array;
  };

  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(order) {
      var source, _yield$ordering$setAc, content, _orders2, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            source = {};
            requestsState.updateOrders = source;
            _context.n = 1;
            return ordering.setAccessToken(accessToken).orders(order === null || order === void 0 ? void 0 : order.id).save({
              status: order.newStatus
            }, {
              cancelToken: source
            });
          case 1:
            _yield$ordering$setAc = _context.v;
            content = _yield$ordering$setAc.content;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              _orders2 = orderList.orders.filter(function (_order) {
                return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
              });
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                orders: _orders2
              }));
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            setActionStatus({
              loading: false,
              error: [_t.message]
            });
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function handleUpdateOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get orders from API
   * @param {number} page page number
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(pageSize, page) {
      var where, conditions, options, getFilterStatusInOrderStatus, searchConditions, _filterValues$metafie, filterConditons, metafieldConditions, source, functionFetch;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            where = [];
            conditions = [];
            options = {
              query: {
                orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
                page: page,
                page_size: pageSize
              }
            };
            conditions.push({
              attribute: 'products',
              conditions: [{
                attribute: 'type',
                value: {
                  condition: '=',
                  value: 'item'
                }
              }]
            });
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
                // const checkInnerContain = filterValues.statuses.every((el) => {
                //   return orderStatus.indexOf(el) !== -1
                // })
                // const checkOutContain = orderStatus.every((el) => {
                //   return filterValues.statuses.indexOf(el) !== -1
                // })
                // if (checkInnerContain) conditions.push({ attribute: 'status', value: filterValues.statuses })
                // if (checkOutContain) {
                //   if (orderStatus) {
                //     conditions.push({ attribute: 'status', value: orderStatus })
                //   }
                // }
                getFilterStatusInOrderStatus = filterValues.statuses.filter(function (status) {
                  return orderStatus.includes(status);
                });
                conditions.push({
                  attribute: 'status',
                  value: getFilterStatusInOrderStatus
                });
              } else {
                if (orderStatus) {
                  conditions.push({
                    attribute: 'status',
                    value: orderStatus
                  });
                }
              }
            }
            if (isOnlyDelivery) {
              conditions.push({
                attribute: 'delivery_type',
                value: 1
              });
            }
            if (driverId) {
              conditions.push({
                attribute: 'driver_id',
                value: driverId
              });
            }
            if (customerId) {
              conditions.push({
                attribute: 'customer_id',
                value: customerId
              });
            }
            if (businessId) {
              conditions.push({
                attribute: 'business_id',
                value: businessId
              });
            }
            if (franchiseId) {
              conditions.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: franchiseId
                }]
              });
            }
            if (timeStatus) {
              conditions.push({
                attribute: 'time_status',
                value: timeStatus
              });
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
              if (isSearchByBusinessName) {
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
              }
              if (isSearchByDriverName) {
                searchConditions.push({
                  attribute: 'driver',
                  conditions: [{
                    attribute: 'name',
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
              if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                filterConditons.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                  }
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
                filterConditons.push({
                  attribute: 'external_id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 || (_filterValues$metafie = filterValues.metafield) === null || _filterValues$metafie === void 0 ? void 0 : _filterValues$metafie.length) > 0) {
                metafieldConditions = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
                  return {
                    attribute: 'metafields',
                    conditions: [{
                      attribute: 'key',
                      value: item === null || item === void 0 ? void 0 : item.key
                    }, {
                      attribute: 'value',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(item === null || item === void 0 ? void 0 : item.value, "%"))
                      }
                    }],
                    conector: 'AND'
                  };
                });
                filterConditons.push({
                  conector: 'OR',
                  conditions: metafieldConditions
                });
              }
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
              if (filterValues.driverGroupIds.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues.driverGroupIds
                });
              }
              if (filterValues.paymethodIds.length !== 0) {
                filterConditons.push({
                  attribute: 'paymethod_id',
                  value: filterValues.paymethodIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'city_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                  }]
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
            if (propsToFetch) {
              functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where);
            } else {
              functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().where(where);
            }
            _context2.n = 1;
            return functionFetch.get(options);
          case 1:
            return _context2.a(2, _context2.v);
        }
      }, _callee2);
    }));
    return function getOrders(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */
  var isFilteredOrder = function isFilteredOrder(order) {
    var filterCheck = true;
    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      if (!filterValues.driverIds.includes(order.driver_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false;
      }
    }
    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.statuses !== undefined && filterValues.statuses.length > 0) {
      if (!filterValues.statuses.includes(parseInt(order.status))) {
        filterCheck = false;
      }
    }
    return filterCheck;
  };
  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var response, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (session.token) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context3.n = 2;
            return getOrders(pagination.pageSize, 1);
          case 2:
            response = _context3.v;
            setOrderList({
              loading: false,
              orders: response.content.error ? [] : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t2 = _context3.v;
            if (_t2.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t2.message]
              }));
            }
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context4.p = 1;
            _context4.n = 2;
            return getOrders(pagination.pageSize, pagination.currentPage + 1);
          case 2:
            response = _context4.v;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t3 = _context4.v;
            if (_t3.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t3.message]
              }));
            }
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function loadMoreOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var getPageOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(pageSize, page) {
      var response, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context5.p = 1;
            _context5.n = 2;
            return getOrders(pageSize, page);
          case 2:
            response = _context5.v;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            if (_t4.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t4.message]
              }));
            }
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function getPageOrders(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
  * Method to handle drag drop
  */
  var handleDrop = function handleDrop(event, columnName) {
    var _allowColumns$transfe, _allowColumns$columnN;
    event.preventDefault();
    var transferColumnName = event.dataTransfer.getData('transferColumnName');
    if (columnName === transferColumnName) return;
    var transferColumnOrder = (_allowColumns$transfe = allowColumns[transferColumnName]) === null || _allowColumns$transfe === void 0 ? void 0 : _allowColumns$transfe.order;
    var currentColumnOrder = (_allowColumns$columnN = allowColumns[columnName]) === null || _allowColumns$columnN === void 0 ? void 0 : _allowColumns$columnN.order;
    var _ref6 = transferColumnOrder < currentColumnOrder ? [transferColumnOrder, currentColumnOrder] : [currentColumnOrder, transferColumnOrder],
      _ref7 = _slicedToArray(_ref6, 2),
      lessOrder = _ref7[0],
      greaterOrder = _ref7[1];
    var _remainAllowColumns = {};
    var shouldUpdateColumns = Object.keys(allowColumns).filter(function (col) {
      var _allowColumns$col, _allowColumns$col2;
      return col !== transferColumnName && ((_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.order) >= lessOrder && ((_allowColumns$col2 = allowColumns[col]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) <= greaterOrder;
    });
    shouldUpdateColumns.forEach(function (col) {
      var _allowColumns$col3;
      _remainAllowColumns[col] = _objectSpread(_objectSpread({}, allowColumns[col]), {}, {
        order: ((_allowColumns$col3 = allowColumns[col]) === null || _allowColumns$col3 === void 0 ? void 0 : _allowColumns$col3.order) + (transferColumnOrder < currentColumnOrder ? -1 : 1)
      });
    });
    var _allowColumnsUpdated = _objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, transferColumnName, _objectSpread(_objectSpread({}, allowColumns[transferColumnName]), {}, {
      order: currentColumnOrder
    })), _remainAllowColumns);
    saveUserSettings(_allowColumnsUpdated);
    setAllowColumns(_allowColumnsUpdated);
  };
  var saveUserSettings = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(allowColumnsUpdated) {
      var _session$user, _session$user2, _session$user3, _settings, _allowColumnsUpdated, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            if (session !== null && session !== void 0 && (_session$user = session.user) !== null && _session$user !== void 0 && _session$user.id) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            _settings = session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.settings;
            _allowColumnsUpdated = _objectSpread(_objectSpread({}, allowColumnsUpdated), {}, {
              timer: _objectSpread(_objectSpread({}, allowColumnsUpdated === null || allowColumnsUpdated === void 0 ? void 0 : allowColumnsUpdated.timer), {}, {
                visable: false
              })
            });
            _context6.n = 2;
            return ordering.users(session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id).save({
              settings: _objectSpread(_objectSpread({}, _settings), {}, {
                orderColumns: _allowColumnsUpdated
              })
            }, {
              accessToken: accessToken
            });
          case 2:
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t5 = _context6.v;
            console.warn(_t5, 'error');
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return function saveUserSettings(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Listening order id to update for unread_count parameter
   */
  (0, _react.useEffect)(function () {
    if (orderIdForUnreadCountUpdate === null || orderList.orders.length === 0) return;
    var _orders = orderList.orders.filter(function (order) {
      if ((order === null || order === void 0 ? void 0 : order.id) === orderIdForUnreadCountUpdate) {
        order.unread_count = 0;
        order.unread_general_count = 0;
        order.unread_direct_count = 0;
      }
      return true;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
  }, [orderIdForUnreadCountUpdate]);

  /**
   * Listening deleted order
   */
  (0, _react.useEffect)(function () {
    if (!deletedOrderIds) return;
    var totalDeletedCount = 0;
    var orders = orderList.orders.filter(function (_order) {
      if (deletedOrderIds.includes(_order === null || _order === void 0 ? void 0 : _order.id)) {
        totalDeletedCount = totalDeletedCount + 1;
        return false;
      } else {
        return true;
      }
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: orders
    }));
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.total) - totalDeletedCount
    }));
  }, [JSON.stringify(deletedOrderIds)]);

  /**
   * Listening sesssion and filter values change
   */
  (0, _react.useEffect)(function () {
    if (session !== null && session !== void 0 && session.loading) return;
    if (orders) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders
      }));
    } else {
      // if (Object.keys(filterValues).length > 0) {
      //   const checkInnerContain = filterValues.statuses.every((el) => {
      //     return orderStatus.indexOf(el) !== -1
      //   })

      //   const checkOutContain = orderStatus.every((el) => {
      //     return filterValues.statuses.indexOf(el) !== -1
      //   })

      //   if (!checkInnerContain && !checkOutContain) {
      //     setOrderList({ loading: false, orders: [], error: null })
      //     return
      //   }
      // }
      loadOrders();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [session, searchValue, orderBy, filterValues, isOnlyDelivery, driverId, customerId, businessId, orders, orderStatus, timeStatus]);
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
      if (isOnlyDelivery && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) return;
      if (!(order !== null && order !== void 0 && order.driver) && order !== null && order !== void 0 && order.driver_id) {
        var updatedDriver = driversList === null || driversList === void 0 ? void 0 : driversList.drivers.find(function (driver) {
          return driver.id === order.driver_id;
        });
        if (updatedDriver) {
          order.driver = _objectSpread({}, updatedDriver);
        }
      }
      var found = orderList.orders.find(function (_order) {
        return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
      });
      var orders = [];
      if (found) {
        orders = orderList.orders.filter(function (_order) {
          var valid = true;
          if ((_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id)) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
            valid = (orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status))) && isFilteredOrder(order);
            if (!valid) {
              pagination.total--;
              setPagination(_objectSpread({}, pagination));
            }
          }
          return valid;
        });
        var _orders = sortOrdersArray(orderBy, orders);
        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _orders
        }));
      } else {
        if (isFilteredOrder(order)) {
          var isOrderStatus = orderStatus.includes(parseInt(order.status));
          if (isOrderStatus) {
            orders = [].concat(_toConsumableArray(orderList.orders), [order]);
            var _orders3 = sortOrdersArray(orderBy, orders);
            pagination.total++;
            setPagination(_objectSpread({}, pagination));
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              orders: _orders3.slice(0, pagination.pageSize)
            }));
          }
        }
      }
    };
    var handleRegisterOrder = function handleRegisterOrder(order) {
      var _order$products;
      if ((order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 || (_order$products = _order$products[0]) === null || _order$products === void 0 ? void 0 : _order$products.type) === 'gift_card') return;
      if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
      if (isOnlyDelivery && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) return;
      var found = orderList.orders.find(function (_order) {
        return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
      });
      if (found) return;
      var orders = [];
      if (isFilteredOrder(order)) {
        if (orderStatus.includes(0) && order.status === 0 || orderStatus.includes(13) && order.status === 13) {
          orders = [order].concat(_toConsumableArray(orderList.orders));
          var _orders = sortOrdersArray(orderBy, orders);
          pagination.total++;
          setPagination(_objectSpread({}, pagination));
          setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
            orders: _orders.slice(0, pagination.pageSize)
          }));
        }
      }
    };
    var handleNewMessage = function handleNewMessage(message) {
      if (orderList.orders.length === 0) return;
      var found = orderList.orders.find(function (order) {
        var _message$order;
        return (order === null || order === void 0 ? void 0 : order.id) === ((_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id);
      });
      if (found) {
        var _orders = orderList.orders.filter(function (order) {
          var _message$order2;
          if ((order === null || order === void 0 ? void 0 : order.id) === ((_message$order2 = message.order) === null || _message$order2 === void 0 ? void 0 : _message$order2.id)) {
            if (order.last_message_at !== message.created_at) {
              if (message.type === 1) {
                order.last_general_message_at = message.created_at;
                if (message.author.level !== 0) {
                  order.unread_general_count = order.unread_general_count + 1;
                }
              } else {
                order.last_direct_message_at = message.created_at;
                if (message.author.level !== 0) {
                  order.unread_direct_count = order.unread_direct_count + 1;
                }
              }
              order.last_message_at = message.created_at;
              if (message.author.level !== 0) {
                order.unread_count = order.unread_count + 1;
              }
            }
          }
          return true;
        });
        var _sortedOrders = sortOrdersArray(orderBy, _orders);
        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _sortedOrders
        }));
      }
    };
    if (!orderList.loading && orderList.orders.length === 0) {
      if ((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) !== 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0) {
        if (Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize) >= (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage)) {
          getPageOrders(pagination.pageSize, pagination.currentPage);
        } else {
          getPageOrders(pagination.pageSize, pagination.currentPage - 1);
        }
      }
    }
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
      socket.off('message', handleNewMessage);
    };
  }, [orderList.orders, pagination, orderBy, socket, driversList, customerId]);

  // Listening for customer rating
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      var orders = orderList.orders.filter(function (_order) {
        if ((_order === null || _order === void 0 ? void 0 : _order.id) === review.order_id) {
          _order.user_review = review;
        }
        return true;
      });
      var _orders = sortOrdersArray(orderBy, orders);
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: _orders
      }));
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderList, orderBy]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    getPageOrders: getPageOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    handleDrop: handleDrop,
    saveUserSettings: saveUserSettings
  })));
};
DashboardOrdersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
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
   * id of order to update unread_count parameter
   */
  orderIdForUnreadCountUpdate: _propTypes.default.number,
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
DashboardOrdersList.defaultProps = {
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