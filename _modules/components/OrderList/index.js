"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _OrderContext = require("../../contexts/OrderContext");
var _EventContext = require("../../contexts/EventContext");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t8 in e) "default" !== _t8 && {}.hasOwnProperty.call(e, _t8) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t8)) && (i.get || i.set) ? o(f, _t8, i) : f[_t8] = e[_t8]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var OrderList = exports.OrderList = function OrderList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    orders = props.orders,
    orderIds = props.orderIds,
    orderStatus = props.orderStatus,
    orderBy = props.orderBy,
    orderDirection = props.orderDirection,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    customArray = props.customArray,
    userCustomerId = props.userCustomerId,
    activeOrders = props.activeOrders,
    isDynamicSort = props.isDynamicSort,
    businessId = props.businessId,
    franchiseId = props.franchiseId,
    businessesSearchList = props.businessesSearchList,
    setIsEmptyBusinesses = props.setIsEmptyBusinesses,
    businessOrderIds = props.businessOrderIds,
    setBusinessOrderIds = props.setBusinessOrderIds,
    propsToFetchBusiness = props.propsToFetchBusiness,
    isBusiness = props.isBusiness,
    noGiftCardOrders = props.noGiftCardOrders,
    propsToFetch = props.propsToFetch,
    handleRedirectToCheckout = props.handleRedirectToCheckout,
    isCustomerMode = props.isCustomerMode;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    reorder = _useOrder2[1].reorder;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
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
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pagination = _useState4[0],
    setPagination = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null,
      messages: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messages = _useState6[0],
    setMessages = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    updateOtherStatus = _useState8[0],
    setUpdateOtherStatus = _useState8[1];
  var _useState9 = (0, _react.useState)({
      param: orderBy,
      direction: orderDirection
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    sortBy = _useState0[0],
    setSortBy = _useState0[1];
  var _useState1 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    reorderState = _useState10[0],
    setReorderState = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    products = _useState12[0],
    setProducts = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    professionals = _useState14[0],
    setProfessionals = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    businesses = _useState16[0],
    setBusinesses = _useState16[1];
  var profileMessage = props.profileMessages;
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  var handleReorder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(value) {
      var orderId, _reordersArray$, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, disableLoading, fetchOrders, reordersArray, error, result, choosedOrder, _businessId, _businessData, _businessSlug, orderResult, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            orderId = Array.isArray(value) ? value : [value];
            if (orderId !== null && orderId !== void 0 && orderId.length) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            disableLoading = isCustomerMode;
            fetchOrders = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(ids) {
                var promises, data;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      promises = ids.map(/*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id) {
                          var res;
                          return _regenerator().w(function (_context) {
                            while (1) switch (_context.n) {
                              case 0:
                                _context.n = 1;
                                return reorder(id, (ids === null || ids === void 0 ? void 0 : ids.length) > 1, {
                                  disableLoading: disableLoading
                                });
                              case 1:
                                res = _context.v;
                                return _context.a(2, res);
                            }
                          }, _callee);
                        }));
                        return function (_x3) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                      _context2.n = 1;
                      return Promise.all(promises);
                    case 1:
                      data = _context2.v;
                      return _context2.a(2, data);
                  }
                }, _callee2);
              }));
              return function fetchOrders(_x2) {
                return _ref2.apply(this, arguments);
              };
            }();
            _context3.n = 2;
            return fetchOrders(orderId);
          case 2:
            reordersArray = _context3.v;
            error = reordersArray.length && reordersArray.every(function (obj) {
              return obj.error;
            }) && ((_reordersArray$ = reordersArray[0]) === null || _reordersArray$ === void 0 || (_reordersArray$ = _reordersArray$.result) === null || _reordersArray$ === void 0 ? void 0 : _reordersArray$[0]);
            result = reordersArray.length && reordersArray.map(function (obj) {
              var _obj$result$, _obj$result;
              return (_obj$result$ = (_obj$result = obj.result) === null || _obj$result === void 0 ? void 0 : _obj$result[0]) !== null && _obj$result$ !== void 0 ? _obj$result$ : obj.result;
            }).filter(function (o) {
              return typeof o !== 'string';
            });
            choosedOrder = orderList.orders.find(function (_order) {
              return (_order === null || _order === void 0 ? void 0 : _order.id) === orderId[0];
            });
            _businessId = (_choosedOrder$busines = choosedOrder === null || choosedOrder === void 0 ? void 0 : choosedOrder.business_id) !== null && _choosedOrder$busines !== void 0 ? _choosedOrder$busines : choosedOrder === null || choosedOrder === void 0 || (_choosedOrder$origina = choosedOrder.original) === null || _choosedOrder$origina === void 0 ? void 0 : _choosedOrder$origina.business_id;
            _context3.n = 3;
            return ordering.businesses(_businessId).select(['slug']).get();
          case 3:
            _businessData = _context3.v;
            _context3.n = 4;
            return _businessData === null || _businessData === void 0 || (_businessData$content = _businessData.content) === null || _businessData$content === void 0 || (_businessData$content = _businessData$content.result) === null || _businessData$content === void 0 ? void 0 : _businessData$content.slug;
          case 4:
            _businessSlug = _context3.v;
            orderResult = {
              orderId: orderId[0],
              business_id: _businessId,
              business: {
                slug: _businessSlug
              }
            };
            if (result[0].uuid) {
              handleRedirectToCheckout(result[0].uuid);
            }
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: error,
              result: error ? orderResult : _objectSpread(_objectSpread({}, result[0]), {}, {
                orderId: orderId[0]
              })
            }));
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t = _context3.v;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_t === null || _t === void 0 ? void 0 : _t.message]
            }));
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 5]]);
    }));
    return function handleReorder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(page) {
      var otherStatus,
        pageSize,
        searchConditions,
        options,
        searchByStatus,
        source,
        functionFetch,
        _args4 = arguments;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            otherStatus = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
            pageSize = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : paginationSettings.pageSize;
            searchConditions = [];
            options = {
              query: {
                orderBy: "".concat(sortBy.direction === 'desc' ? '-' : '').concat(sortBy.param),
                page: page,
                page_size: pageSize
              }
            };
            if (orderIds || orderStatus) {
              if (orderIds) {
                searchConditions.push({
                  attribute: 'id',
                  value: orderIds
                });
              }
              if (orderStatus) {
                searchByStatus = (otherStatus === null || otherStatus === void 0 ? void 0 : otherStatus.length) > 0 ? otherStatus : orderStatus;
                searchConditions.push({
                  attribute: 'status',
                  value: searchByStatus
                });
              }
            }
            if (userCustomerId) {
              searchConditions.push({
                attribute: 'customer_id',
                value: parseInt(userCustomerId, 10)
              });
            }
            if (businessId) {
              if (typeof businessId === 'string') {
                searchConditions.push({
                  attribute: 'ref_business',
                  conditions: [{
                    attribute: 'slug',
                    value: {
                      condition: 'ilike',
                      value: "%".concat(businessId, "%")
                    }
                  }]
                });
              } else {
                searchConditions.push({
                  attribute: 'business_id',
                  value: parseInt(businessId, 10)
                });
              }
            }
            if (franchiseId) {
              searchConditions.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: parseInt(franchiseId, 10)
                }]
              });
            }
            if (noGiftCardOrders) {
              searchConditions.push({
                conector: 'OR',
                conditions: [{
                  attribute: 'products',
                  conditions: [{
                    attribute: 'type',
                    value: {
                      condition: '=',
                      value: 'item'
                    }
                  }]
                }, {
                  attribute: 'products',
                  conditions: [{
                    attribute: 'type',
                    value: {
                      condition: '=',
                      value: 'service'
                    }
                  }]
                }]
              });
            }
            if (searchConditions.length) {
              options.query.where = {
                conditions: searchConditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch) : ordering.setAccessToken(accessToken).orders().select(propsToFetch);
            _context4.n = 1;
            return functionFetch.get(options);
          case 1:
            return _context4.a(2, _context4.v);
        }
      }, _callee4);
    }));
    return function getOrders(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(isNextPage, searchByOtherStatus) {
      var keepOrders,
        getFirstOrder,
        pageSize,
        _ref6,
        nextPage,
        response,
        businessIds,
        _args5 = arguments,
        _t2;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            keepOrders = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
            getFirstOrder = _args5.length > 3 ? _args5[3] : undefined;
            if (!((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== null && !getFirstOrder)) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            pageSize = keepOrders ? paginationSettings.pageSize * pagination.currentPage : paginationSettings.pageSize;
            if (session.token) {
              _context5.n = 2;
              break;
            }
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: false
            }));
            return _context5.a(2);
          case 2:
            _context5.p = 2;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            if (isBusiness) {
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: true
              }));
            }
            nextPage = !isNextPage ? pagination.currentPage + 1 : 1;
            _context5.n = 3;
            return getOrders(getFirstOrder && !asDashboard ? 0 : nextPage, searchByOtherStatus, pageSize);
          case 3:
            response = _context5.v;
            if (searchByOtherStatus) {
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)),
                error: response.content.error ? response.content.result : null
              });
            } else {
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });
            }
            setProfessionals([].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)).reduce(function (previousValue, currentValue) {
              var _currentValue$product;
              return previousValue.concat(currentValue === null || currentValue === void 0 || (_currentValue$product = currentValue.products) === null || _currentValue$product === void 0 || (_currentValue$product = _currentValue$product[0]) === null || _currentValue$product === void 0 || (_currentValue$product = _currentValue$product.calendar_event) === null || _currentValue$product === void 0 ? void 0 : _currentValue$product.professional);
            }, []).filter(function (professional, i, hash) {
              var _hash$map;
              return professional && (hash === null || hash === void 0 || (_hash$map = hash.map(function (_professional) {
                return _professional === null || _professional === void 0 ? void 0 : _professional.id;
              })) === null || _hash$map === void 0 ? void 0 : _hash$map.indexOf(professional === null || professional === void 0 ? void 0 : professional.id)) === i;
            }));
            businessIds = [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)).map(function (order) {
              return order.business_id;
            });
            setBusinessOrderIds && setBusinessOrderIds(businessIds);
            setProducts((_ref6 = [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders))) === null || _ref6 === void 0 || (_ref6 = _ref6.filter(function (order) {
              var _businessesSearchList;
              return !businessesSearchList || (businessesSearchList === null || businessesSearchList === void 0 || (_businessesSearchList = businessesSearchList.businesses) === null || _businessesSearchList === void 0 ? void 0 : _businessesSearchList.some(function (business) {
                return (order === null || order === void 0 ? void 0 : order.business_id) === (business === null || business === void 0 ? void 0 : business.id);
              }));
            })) === null || _ref6 === void 0 || (_ref6 = _ref6.map(function (order) {
              var _order$products;
              return order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.map(function (product) {
                return _objectSpread(_objectSpread({}, product), {}, {
                  business: order === null || order === void 0 ? void 0 : order.business,
                  businessId: order === null || order === void 0 ? void 0 : order.business_id
                });
              });
            })) === null || _ref6 === void 0 || (_ref6 = _ref6.flat()) === null || _ref6 === void 0 ? void 0 : _ref6.filter(function (product, i, hash) {
              return hash.map(function (_product) {
                return _product === null || _product === void 0 ? void 0 : _product.product_id;
              }).indexOf(product === null || product === void 0 ? void 0 : product.product_id) === i;
            }));
            if (isBusiness) {
              getBusinesses(businessIds);
            }
            if (!response.content.error) {
              setPagination({
                currentPage: keepOrders ? pagination.currentPage : response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: keepOrders ? pagination.totalPages : response.content.pagination.total_pages,
                total: keepOrders ? pagination.total : response.content.pagination.total,
                from: keepOrders ? 1 : response.content.pagination.from,
                to: keepOrders ? pagination.to : response.content.pagination.to
              });
            }
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t2 = _context5.v;
            if (_t2.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t2.message]
              }));
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: false
              }));
            }
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4]]);
    }));
    return function loadOrders(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleUpdateOrderList = function handleUpdateOrderList(orderId, changes) {
    var updatedOrders = orderList === null || orderList === void 0 ? void 0 : orderList.orders.map(function (order) {
      if ((order === null || order === void 0 ? void 0 : order.id) === orderId) {
        return _objectSpread(_objectSpread({}, order), changes);
      }
      return order;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: updatedOrders
    }));
  };
  var loadMessages = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(orderId) {
      var url, response, _yield$response$json, error, result, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context6.n = 1;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 1:
            response = _context6.v;
            _context6.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context6.v;
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
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t3 = _context6.v;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_t3.message]
            }));
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return function loadMessages(_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
  var getBusinesses = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(businessIds) {
      var _orderState$options, _orderState$options2, _orderState$options3, _orderState$options4, parameters, _orderState$options5, moment, where, conditions, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, _t4;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            parameters = {
              location: "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.location) === null || _orderState$options === void 0 ? void 0 : _orderState$options.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.location) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.lng)
            };
            if ((_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && _orderState$options3.moment && isValidMoment((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            where = null;
            conditions = [];
            if (businessIds) {
              conditions.push({
                attribute: typeof businessIds === 'string' ? 'slug' : 'id',
                value: businessIds
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.businesses = source;
            fetchEndpoint = ordering.businesses().select(propsToFetchBusiness).parameters(parameters).where(where);
            _context7.n = 1;
            return fetchEndpoint.get({
              cancelToken: source
            });
          case 1:
            _yield$fetchEndpoint$ = _context7.v;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            if (!error) {
              setBusinesses({
                result: result,
                error: null,
                loading: false
              });
            }
            _context7.n = 3;
            break;
          case 2:
            _context7.p = 2;
            _t4 = _context7.v;
            if (_t4.constructor.name !== 'Cancel') {
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                err: _t4.message,
                loading: false
              }));
            }
          case 3:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 2]]);
    }));
    return function getBusinesses(_x8) {
      return _ref8.apply(this, arguments);
    };
  }();

  // Function to update professional list
  var handleUpdateProfessionals = function handleUpdateProfessionals(id, changes) {
    var updateProfessionals = professionals.map(function (professional) {
      if ((professional === null || professional === void 0 ? void 0 : professional.id) === id) {
        return _objectSpread(_objectSpread({}, professional), changes);
      }
      return professional;
    });
    setProfessionals(updateProfessionals);
  };
  (0, _react.useEffect)(function () {
    if (orders || customArray) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: (orders === null || orders === void 0 ? void 0 : orders.lenght) > 0 ? orders : customArray || [],
        loading: false
      }));
    } else if (!businessesSearchList) {
      loadOrders(false, false, false, true);
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [isBusiness]);
  (0, _react.useEffect)(function () {
    var _session$user2, _session$user3, _socket$socket, _socket$socket2, _socket$socket3, _socket$socket4;
    if (orderList.loading || isCustomerMode || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      var orders = [];
      if (found) {
        showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id), 1000);
        orders = orderList.orders.filter(function (_order) {
          var _order$driver, _order$driver2, _session$user;
          if (_order.id === order.id && (_order === null || _order === void 0 || (_order$driver = _order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) !== (order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.id) && (session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 4) {
            return false;
          }
          if (_order.id === order.id) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
          }
          var valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status)) || updateOtherStatus.length === 0 || updateOtherStatus.includes(parseInt(_order.status));
          if (!valid) {
            pagination.total--;
            setPagination(_objectSpread({}, pagination));
          }
          return valid;
        });
      } else {
        orders = [order].concat(_toConsumableArray(orderList.orders));
        pagination.total++;
        setPagination(_objectSpread({}, pagination));
      }
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders,
        loading: false
      }));
    };
    var handleAddNewOrder = function handleAddNewOrder(order) {
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id));
      var newOrder = [order].concat(_toConsumableArray(orderList.orders));
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: newOrder,
        loading: false
      }));
    };
    var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
    socket.join(ordersRoom);
    if (!(socket !== null && socket !== void 0 && (_socket$socket = socket.socket) !== null && _socket$socket !== void 0 && (_socket$socket = _socket$socket._callbacks) !== null && _socket$socket !== void 0 && _socket$socket.$orders_register) || socket !== null && socket !== void 0 && (_socket$socket2 = socket.socket) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2._callbacks) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2.$orders_register) !== null && _socket$socket2 !== void 0 && _socket$socket2.find(function (func) {
      return (func === null || func === void 0 ? void 0 : func.name) !== 'handleAddNewOrder';
    })) {
      socket.on('orders_register', handleAddNewOrder);
    }
    if (!(socket !== null && socket !== void 0 && (_socket$socket3 = socket.socket) !== null && _socket$socket3 !== void 0 && (_socket$socket3 = _socket$socket3._callbacks) !== null && _socket$socket3 !== void 0 && _socket$socket3.$update_order) || socket !== null && socket !== void 0 && (_socket$socket4 = socket.socket) !== null && _socket$socket4 !== void 0 && (_socket$socket4 = _socket$socket4._callbacks) !== null && _socket$socket4 !== void 0 && (_socket$socket4 = _socket$socket4.$update_order) !== null && _socket$socket4 !== void 0 && _socket$socket4.find(function (func) {
      return (func === null || func === void 0 ? void 0 : func.name) !== 'handleUpdateOrder';
    })) {
      socket.on('update_order', handleUpdateOrder);
    }
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleAddNewOrder);
    };
  }, [orderList.loading, socket === null || socket === void 0 ? void 0 : socket.socket, session, isCustomerMode]);
  (0, _react.useEffect)(function () {
    var _session$user6, _session$user7;
    if (!session.user || isCustomerMode) return;
    socket.on('disconnect', function (reason) {
      var _session$user4, _session$user5;
      var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id);
      socket.join(ordersRoom);
    });
    var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 || (_session$user6 = session.user) === null || _session$user6 === void 0 ? void 0 : _session$user6.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user7 = session.user) === null || _session$user7 === void 0 ? void 0 : _session$user7.id);
    socket.join(ordersRoom);
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, session, userCustomerId, isCustomerMode]);
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(searchByOtherStatus) {
      var response, _t5;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context8.p = 1;
            _context8.n = 2;
            return getOrders(pagination.currentPage + 1, searchByOtherStatus);
          case 2:
            response = _context8.v;
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
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t5 = _context8.v;
            if (_t5.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t5.message]
              }));
            }
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return function loadMoreOrders(_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
  var goToPage = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(page) {
      var response, _t6;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context9.p = 1;
            _context9.n = 2;
            return getOrders(page);
          case 2:
            response = _context9.v;
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
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t6 = _context9.v;
            if (_t6.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t6.message]
              }));
            }
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    return function goToPage(_x0) {
      return _ref0.apply(this, arguments);
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
  var handleUpdateProducts = function handleUpdateProducts(productId, changes) {
    var updatedProducts = products === null || products === void 0 ? void 0 : products.map(function (product) {
      if ((product === null || product === void 0 ? void 0 : product.product_id) === productId) {
        return _objectSpread(_objectSpread({}, product), changes);
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  var handleUpdateBusinesses = function handleUpdateBusinesses(businessId, changes) {
    var _businesses$result;
    var updatedBusiness = businesses === null || businesses === void 0 || (_businesses$result = businesses.result) === null || _businesses$result === void 0 ? void 0 : _businesses$result.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
      result: updatedBusiness
    }));
  };
  var getPage = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(page, pageSize) {
      var response, _t7;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context0.p = 1;
            _context0.n = 2;
            return getOrders(page, pageSize);
          case 2:
            response = _context0.v;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : response.content.result,
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
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t7 = _context0.v;
            if (_t7.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_t7.message]
              }));
            }
          case 4:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 3]]);
    }));
    return function getPage(_x1, _x10) {
      return _ref1.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (profileMessage) return;
    if (!orderList.loading && orderBy !== 'last_direct_message_at') {
      var ordersSorted = orderList.orders.sort(function (a, b) {
        if (activeOrders) {
          return (0, _dayjs.default)(b.created_at).unix() - (0, _dayjs.default)(a.created_at).unix();
        }
        return (0, _dayjs.default)(a.created_at).unix() - (0, _dayjs.default)(b.created_at).unix();
      });
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: ordersSorted
      }));
    }
  }, [orderList.loading, orderBy]);

  /**
   * This effect is used to reload orders with dynamic params, using `isDynamicSort` as validation
   */
  (0, _react.useEffect)(function () {
    if (isDynamicSort) {
      loadOrders(true, []);
    }
  }, [sortBy]);
  (0, _react.useEffect)(function () {
    if (businessesSearchList && !(businessesSearchList !== null && businessesSearchList !== void 0 && businessesSearchList.loading)) {
      loadOrders(false, false, false, true);
    }
  }, [businessesSearchList, businessId]);
  (0, _react.useEffect)(function () {
    setIsEmptyBusinesses && setIsEmptyBusinesses((businessOrderIds === null || businessOrderIds === void 0 ? void 0 : businessOrderIds.length) === 0);
  }, [businessOrderIds]);
  (0, _react.useEffect)(function () {
    var handleOrderMessageRead = function handleOrderMessageRead(orderId) {
      var updatedOrders = orderList.orders.map(function (order) {
        if (order.id === orderId) {
          return _objectSpread(_objectSpread({}, order), {}, {
            unread_count: 0
          });
        }
        return order;
      });
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: updatedOrders
      }));
    };
    events.on('order_message_read', handleOrderMessageRead);
    return function () {
      events.off('order_message_read', handleOrderMessageRead);
    };
  }, [orderList.orders]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    sortOrders: sortOrders,
    setSortBy: setSortBy,
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    goToPage: goToPage,
    loadOrders: loadOrders,
    loadMessages: loadMessages,
    messages: messages,
    setMessages: setMessages,
    setUpdateOtherStatus: setUpdateOtherStatus,
    handleReorder: handleReorder,
    reorderState: reorderState,
    businessOrderIds: businessOrderIds,
    products: products,
    handleUpdateOrderList: handleUpdateOrderList,
    handleUpdateProducts: handleUpdateProducts,
    handleUpdateBusinesses: handleUpdateBusinesses,
    businesses: businesses,
    professionals: professionals,
    handleUpdateProfessionals: handleUpdateProfessionals,
    getPage: getPage
  })));
};
OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
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
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },
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
  afterElements: [],
  isAsCustomer: false,
  propsToFetchBusiness: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'ribbon', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id']
};