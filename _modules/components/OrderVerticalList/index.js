"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderVerticalList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderVerticalList = exports.OrderVerticalList = function OrderVerticalList(props) {
  var _orderGroupStatusCust, _orderGroupStatusCust2, _orderGroupStatusCust3, _orderGroupStatusCust4, _paginationSettings$p;
  var UIComponent = props.UIComponent,
    orderBy = props.orderBy,
    businessId = props.businessId,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    orderGroupStatusCustom = props.orderGroupStatusCustom,
    onNavigationRedirect = props.onNavigationRedirect;
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
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    reorder = _useOrder2[1].reorder;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var ordersStatusArray = ['upcoming', 'active', 'past', 'all'];
  var ordersGroupStatus = {
    upcoming: (_orderGroupStatusCust = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.upcoming) !== null && _orderGroupStatusCust !== void 0 ? _orderGroupStatusCust : [13],
    active: (_orderGroupStatusCust2 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.active) !== null && _orderGroupStatusCust2 !== void 0 ? _orderGroupStatusCust2 : [0, 3, 4, 7, 8, 9, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    past: (_orderGroupStatusCust3 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.past) !== null && _orderGroupStatusCust3 !== void 0 ? _orderGroupStatusCust3 : [1, 2, 5, 6, 10, 11, 12, 16, 17],
    all: (_orderGroupStatusCust4 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.all) !== null && _orderGroupStatusCust4 !== void 0 ? _orderGroupStatusCust4 : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
  };
  var orderObjDefault = {
    loading: true,
    error: null,
    pagination: {
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    reorderLoading = _useState2[0],
    setReorderLoading = _useState2[1];
  var _useState3 = (0, _react.useState)(_objectSpread(_objectSpread({}, orderObjDefault), {}, {
      all: {
        orders: []
      },
      upcoming: {
        orders: []
      },
      active: {
        orders: []
      },
      past: {
        orders: []
      }
    })),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersGroup = _useState4[0],
    setOrdersGroup = _useState4[1];
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
      var page, _ref$pageSize, pageSize, orderStatus, options, _ordersGroup, source, functionFetch;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            page = _ref.page, _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? paginationSettings.pageSize : _ref$pageSize, orderStatus = _ref.orderStatus;
            options = {
              query: {
                orderBy: orderBy,
                page: page,
                page_size: pageSize
              }
            };
            options.query.where = [];
            if (orderStatus) {
              options.query.where.push({
                attribute: 'status',
                value: orderStatus
              });
              options.query.where.push({
                attribute: 'id',
                value: {
                  condition: '!=',
                  value: (_ordersGroup = ordersGroup) === null || _ordersGroup === void 0 || (_ordersGroup = _ordersGroup.all) === null || _ordersGroup === void 0 || (_ordersGroup = _ordersGroup.orders) === null || _ordersGroup === void 0 ? void 0 : _ordersGroup.map(function (o) {
                    return o.id;
                  })
                }
              });
            }
            if (businessId) {
              options.query.where.push({
                attribute: 'business_id',
                value: businessId
              });
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard() : ordering.setAccessToken(accessToken).orders();
            _context.n = 1;
            return functionFetch.get(options);
          case 1:
            return _context.a(2, _context.v);
        }
      }, _callee);
    }));
    return function getOrders(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _ordersGroup$paginati;
      var _ref4,
        newFetch,
        options,
        pageSize,
        _yield$getOrders,
        _yield$getOrders$cont,
        error,
        result,
        pagination,
        tabOptions,
        _err$message,
        _args2 = arguments,
        _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _ref4 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, newFetch = _ref4.newFetch;
            if (!(!newFetch && ordersGroup.pagination.currentPage === ((_ordersGroup$paginati = ordersGroup.pagination) === null || _ordersGroup$paginati === void 0 ? void 0 : _ordersGroup$paginati.totalPages) && ordersGroup.pagination.total !== null)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            if (newFetch) {
              options = {};
              ordersStatusArray.map(function (tab) {
                options[tab] = {
                  orders: []
                };
              });
              ordersGroup = _objectSpread(_objectSpread({}, orderObjDefault), options);
            }
            pageSize = paginationSettings.pageSize;
            _context2.p = 2;
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: true
            }));
            _context2.n = 3;
            return getOrders({
              page: 1,
              pageSize: pageSize,
              orderStatus: ordersGroupStatus.all,
              newFetch: newFetch
            });
          case 3:
            _yield$getOrders = _context2.v;
            _yield$getOrders$cont = _yield$getOrders.content;
            error = _yield$getOrders$cont.error;
            result = _yield$getOrders$cont.result;
            pagination = _yield$getOrders$cont.pagination;
            tabOptions = {};
            ordersStatusArray.map(function (tab) {
              tabOptions[tab] = {
                orders: error ? newFetch ? [] : sortOrders(ordersGroup[tab].orders) : newFetch ? sortOrders(result.filter(function (order) {
                  return ordersGroupStatus[tab].includes(order.status);
                })) : sortOrders(ordersGroup[tab].orders.concat(result.filter(function (order) {
                  return ordersGroupStatus[tab].includes(order.status);
                })))
              };
            });
            setOrdersGroup(_objectSpread(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: false,
              error: error ? result : null
            }, tabOptions), {}, {
              pagination: _objectSpread(_objectSpread({}, ordersGroup.pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              })
            }));
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            if (_t.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
                loading: false,
                error: [(_err$message = _t === null || _t === void 0 ? void 0 : _t.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']
              }));
            }
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$getOrders2, _yield$getOrders2$con, error, result, pagination, tabOptions, _err$message2, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: true
            }));
            _context3.n = 1;
            return getOrders({
              page: ordersGroup.pagination.currentPage + 1,
              orderStatus: ordersGroupStatus.all
            });
          case 1:
            _yield$getOrders2 = _context3.v;
            _yield$getOrders2$con = _yield$getOrders2.content;
            error = _yield$getOrders2$con.error;
            result = _yield$getOrders2$con.result;
            pagination = _yield$getOrders2$con.pagination;
            tabOptions = {};
            ordersStatusArray.map(function (tab) {
              tabOptions[tab] = {
                orders: error ? sortOrders(ordersGroup[tab].orders) : sortOrders(ordersGroup[tab].orders.concat(result.filter(function (order) {
                  return ordersGroupStatus[tab].includes(order.status);
                })))
              };
            });
            setOrdersGroup(_objectSpread(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: false,
              error: error ? result : null
            }, tabOptions), {}, {
              pagination: !error ? _objectSpread(_objectSpread({}, ordersGroup.pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              }) : ordersGroup.pagination
            }));
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t2 = _context3.v;
            if (_t2.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
                loading: false,
                error: [(_err$message2 = _t2 === null || _t2 === void 0 ? void 0 : _t2.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']
              }));
            }
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function loadMoreOrders() {
      return _ref5.apply(this, arguments);
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
    var _orderGroupStatusCust5, _orderGroupStatusCust6;
    if (!id && id !== 0) return;
    var upcoming = (_orderGroupStatusCust5 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.upcoming) !== null && _orderGroupStatusCust5 !== void 0 ? _orderGroupStatusCust5 : [13];
    var active = (_orderGroupStatusCust6 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.active) !== null && _orderGroupStatusCust6 !== void 0 ? _orderGroupStatusCust6 : [0, 3, 4, 7, 8, 9, 14, 15, 18, 19, 20, 21, 23, 26];
    var status = upcoming.includes(id) ? 'upcoming' : active.includes(id) ? 'active' : 'past';
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
      ordersGroup.pagination = _objectSpread(_objectSpread({}, ordersGroup.pagination), {}, {
        total: ordersGroup.pagination.total + (type === 'add' ? 1 : -1)
      });
    }
  };
  var handleReorder = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(orderId) {
      var _yield$reorder, error, result, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setReorderLoading(true);
            _context4.p = 1;
            _context4.n = 2;
            return reorder(orderId);
          case 2:
            _yield$reorder = _context4.v;
            error = _yield$reorder.error;
            result = _yield$reorder.result;
            if (error) {
              _context4.n = 3;
              break;
            }
            onNavigationRedirect && onNavigationRedirect('CheckoutNavigator', {
              cartUuid: result.uuid
            });
            setReorderLoading(false);
            return _context4.a(2);
          case 3:
            setReorderLoading(false);
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t3 = _context4.v;
            showToast(_ToastContext.ToastType.Error, t('ERROR', _t3.message));
            setReorderLoading(false);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    return function handleReorder(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    loadOrders({
      newFetch: ordersGroup.pagination.total === null
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (ordersGroup.loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderFound, _order$driver, _session$user;
      events.emit('order_updated', order);
      var orderFound = null;
      for (var i = 0; i < ordersStatusArray.length; i++) {
        var status = ordersStatusArray[i];
        orderFound = ordersGroup[status].orders.find(function (_order) {
          return _order.id === order.id;
        });
        if (orderFound) break;
      }
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id), 1000);
      if (!orderFound) {
        if (!(order !== null && order !== void 0 && order.products) || !(order !== null && order !== void 0 && order.summary) || typeof (order === null || order === void 0 ? void 0 : order.status) !== 'number' || !(order !== null && order !== void 0 && order.customer) || !(order !== null && order !== void 0 && order.business) || !(order !== null && order !== void 0 && order.paymethod)) {
          return;
        }
        delete order.total;
        delete order.subtotal;
        actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'add');
        return;
      }
      if (orderFound.id === order.id && ((_orderFound = orderFound) === null || _orderFound === void 0 || (_orderFound = _orderFound.driver) === null || _orderFound === void 0 ? void 0 : _orderFound.id) !== (order === null || order === void 0 || (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) && (session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 4) {
        actionOrderToTab(orderFound, getStatusById(orderFound.status), 'remove');
      }
      if (orderFound.id === order.id) {
        delete order.total;
        delete order.subtotal;
      }
      if (!(order !== null && order !== void 0 && order.status) && (order === null || order === void 0 ? void 0 : order.status) !== 0) {
        Object.assign(orderFound, order);
      } else {
        var _getStatusById, _getStatusById2, _orderFound2;
        var newOrderStatus = (_getStatusById = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById !== void 0 ? _getStatusById : '';
        var currentOrderStatus = (_getStatusById2 = getStatusById((_orderFound2 = orderFound) === null || _orderFound2 === void 0 ? void 0 : _orderFound2.status)) !== null && _getStatusById2 !== void 0 ? _getStatusById2 : '';
        Object.assign(orderFound, order);
        if (newOrderStatus !== currentOrderStatus) {
          var _ordersGroup$paginati2;
          actionOrderToTab(orderFound, currentOrderStatus, 'remove');
          var total = (_ordersGroup$paginati2 = ordersGroup.pagination.total) !== null && _ordersGroup$paginati2 !== void 0 ? _ordersGroup$paginati2 : null;
          if (total !== null) {
            actionOrderToTab(orderFound, newOrderStatus, 'add');
          }
        } else {
          actionOrderToTab(orderFound, newOrderStatus, 'update');
        }
      }
    };
    var handleAddNewOrder = function handleAddNewOrder(order) {
      var _getStatusById3;
      events.emit('order_added', order);
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id), 1000);
      var status = (_getStatusById3 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById3 !== void 0 ? _getStatusById3 : '';
      actionOrderToTab(order, status, 'add');
      actionOrderToTab(order, 'all', 'add');
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
      var ordersRoom = (session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
      socket.join(ordersRoom);
    });
    var ordersRoom = (session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id);
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
    ordersGroup: ordersGroup,
    reorderLoading: reorderLoading,
    setOrdersGroup: setOrdersGroup,
    loadOrders: loadOrders,
    loadMoreOrders: loadMoreOrders,
    handleReorder: handleReorder
  })));
};
OrderVerticalList.defaultProps = {
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