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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(value) {
      var orderId, _reordersArray$, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, disableLoading, fetchOrders, reordersArray, error, result, choosedOrder, _businessId, _businessData, _businessSlug, orderResult;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            orderId = Array.isArray(value) ? value : [value];
            if (orderId !== null && orderId !== void 0 && orderId.length) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            _context3.prev = 3;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            disableLoading = isCustomerMode;
            fetchOrders = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ids) {
                var promises, data;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      promises = ids.map(/*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
                          var res;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return reorder(id, (ids === null || ids === void 0 ? void 0 : ids.length) > 1, {
                                  disableLoading: disableLoading
                                });
                              case 2:
                                res = _context.sent;
                                return _context.abrupt("return", res);
                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function (_x3) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                      _context2.next = 3;
                      return Promise.all(promises);
                    case 3:
                      data = _context2.sent;
                      return _context2.abrupt("return", data);
                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function fetchOrders(_x2) {
                return _ref2.apply(this, arguments);
              };
            }();
            _context3.next = 9;
            return fetchOrders(orderId);
          case 9:
            reordersArray = _context3.sent;
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
            _context3.next = 16;
            return ordering.businesses(_businessId).select(['slug']).get();
          case 16:
            _businessData = _context3.sent;
            _context3.next = 19;
            return _businessData === null || _businessData === void 0 || (_businessData$content = _businessData.content) === null || _businessData$content === void 0 || (_businessData$content = _businessData$content.result) === null || _businessData$content === void 0 ? void 0 : _businessData$content.slug;
          case 19:
            _businessSlug = _context3.sent;
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
            _context3.next = 28;
            break;
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](3);
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message]
            }));
          case 28:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 25]]);
    }));
    return function handleReorder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(page) {
      var otherStatus,
        pageSize,
        searchConditions,
        options,
        searchByStatus,
        source,
        functionFetch,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
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
            _context4.next = 16;
            return functionFetch.get(options);
          case 16:
            return _context4.abrupt("return", _context4.sent);
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getOrders(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(isNextPage, searchByOtherStatus) {
      var keepOrders,
        getFirstOrder,
        pageSize,
        _ref6,
        nextPage,
        response,
        businessIds,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            keepOrders = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
            getFirstOrder = _args5.length > 3 ? _args5[3] : undefined;
            if (!((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== null && !getFirstOrder)) {
              _context5.next = 4;
              break;
            }
            return _context5.abrupt("return");
          case 4:
            pageSize = keepOrders ? paginationSettings.pageSize * pagination.currentPage : paginationSettings.pageSize;
            if (session.token) {
              _context5.next = 8;
              break;
            }
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: false
            }));
            return _context5.abrupt("return");
          case 8:
            _context5.prev = 8;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            if (isBusiness) {
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: true
              }));
            }
            nextPage = !isNextPage ? pagination.currentPage + 1 : 1;
            _context5.next = 14;
            return getOrders(getFirstOrder && !asDashboard ? 0 : nextPage, searchByOtherStatus, pageSize);
          case 14:
            response = _context5.sent;
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
            _context5.next = 27;
            break;
          case 24:
            _context5.prev = 24;
            _context5.t0 = _context5["catch"](8);
            if (_context5.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: false
              }));
            }
          case 27:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[8, 24]]);
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
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(orderId) {
      var url, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context6.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 5:
            response = _context6.sent;
            _context6.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context6.sent;
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
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }));
    return function loadMessages(_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
  var getBusinesses = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(businessIds) {
      var _orderState$options, _orderState$options2, _orderState$options3, _orderState$options4, parameters, _orderState$options5, moment, where, conditions, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
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
            _context7.next = 12;
            return fetchEndpoint.get({
              cancelToken: source
            });
          case 12:
            _yield$fetchEndpoint$ = _context7.sent;
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
            _context7.next = 22;
            break;
          case 19:
            _context7.prev = 19;
            _context7.t0 = _context7["catch"](0);
            if (_context7.t0.constructor.name !== 'Cancel') {
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                err: _context7.t0.message,
                loading: false
              }));
            }
          case 22:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 19]]);
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
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(searchByOtherStatus) {
      var response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context8.prev = 1;
            _context8.next = 4;
            return getOrders(pagination.currentPage + 1, searchByOtherStatus);
          case 4:
            response = _context8.sent;
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
            _context8.next = 12;
            break;
          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            if (_context8.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context8.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 9]]);
    }));
    return function loadMoreOrders(_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
  var goToPage = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context9.prev = 1;
            _context9.next = 4;
            return getOrders(page);
          case 4:
            response = _context9.sent;
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
            _context9.next = 12;
            break;
          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](1);
            if (_context9.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context9.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[1, 9]]);
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
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(page, pageSize) {
      var response;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context0.prev = 1;
            _context0.next = 4;
            return getOrders(page, pageSize);
          case 4:
            response = _context0.sent;
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
            _context0.next = 12;
            break;
          case 9:
            _context0.prev = 9;
            _context0.t0 = _context0["catch"](1);
            if (_context0.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context0.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context0.stop();
        }
      }, _callee0, null, [[1, 9]]);
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