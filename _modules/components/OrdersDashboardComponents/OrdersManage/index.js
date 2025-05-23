"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ConfigContext = require("../../../contexts/ConfigContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _ToastContext = require("../../../contexts/ToastContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersManage = exports.OrdersManage = function OrdersManage(props) {
  var UIComponent = props.UIComponent,
    statusGroup = props.statusGroup,
    driversPropsToFetch = props.driversPropsToFetch,
    driverId = props.driverId,
    customerId = props.customerId,
    businessId = props.businessId,
    franchiseId = props.franchiseId,
    isOnlyDelivery = props.isOnlyDelivery;
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
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var requestsState = {};
  var orderStatuesList = {
    pending: [0, 13],
    inProgress: [7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26],
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
    timeStatus = _useState8[0],
    setTimeStatus = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    updateStatus = _useState0[0],
    setUpdateStatus = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    startMulitOrderStatusChange = _useState10[0],
    setStartMulitOrderStatusChange = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    actionStatus = _useState12[0],
    setActionStatus = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    deletedOrderIds = _useState14[0],
    setDeletedOrderIds = _useState14[1];
  var _useState15 = (0, _react.useState)({
      result: null,
      loading: false,
      error: false
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    numberOfOrdersByStatus = _useState16[0],
    setNumberOfOrdersByStatus = _useState16[1];
  var allowColumnsModel = {
    slaBar: {
      visable: false,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: -2
    },
    orderNumber: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: -1
    },
    dateTime: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: 0
    },
    externalId: {
      visable: false,
      title: t('EXTERNAL_ID', 'External id'),
      className: 'externalId',
      draggable: true,
      colSpan: 1,
      order: 1
    },
    status: {
      visable: true,
      title: t('STATUS', 'Status'),
      className: 'statusInfo',
      draggable: true,
      colSpan: 1,
      order: 2
    },
    agent: {
      visable: false,
      title: t('AGENT', 'Agent'),
      className: 'agent',
      draggable: true,
      colSpan: 1,
      order: 3
    },
    cartGroupId: {
      visable: true,
      title: t('GROUP_ORDER', 'Group Order'),
      className: 'groupOrderId',
      draggable: true,
      colSpan: 1,
      order: 4
    },
    driverGroupId: {
      visable: true,
      title: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id'),
      className: 'driverGroupId',
      draggable: true,
      colSpan: 1,
      order: 5
    },
    business: {
      visable: true,
      title: t('BUSINESS', 'Business'),
      className: 'businessInfo',
      draggable: true,
      colSpan: 1,
      order: 6
    },
    customer: {
      visable: true,
      title: t('CUSTOMER', 'Customer'),
      className: 'customerInfo',
      draggable: true,
      colSpan: 1,
      order: 7
    },
    driver: {
      visable: true,
      title: t('DRIVER', 'Driver'),
      className: 'driverInfo',
      draggable: true,
      colSpan: 1,
      order: 8
    },
    advanced: {
      visable: true,
      title: t('ADVANCED_LOGISTICS', 'Advanced logistics'),
      className: 'advanced',
      draggable: true,
      colSpan: 3,
      order: 9
    },
    timer: {
      visable: false,
      title: t('SLA_TIMER', 'SLA’s timer'),
      className: 'timer',
      draggable: true,
      colSpan: 1,
      order: 10
    },
    eta: {
      visable: true,
      title: t('ETA', 'ETA'),
      className: 'eta',
      draggable: true,
      colSpan: 1,
      order: 11
    },
    total: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: 12
    }
  };
  var _useState17 = (0, _react.useState)(allowColumnsModel),
    _useState18 = _slicedToArray(_useState17, 2),
    allowColumns = _useState18[0],
    setAllowColumns = _useState18[1];

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
      all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(orderId) {
      var requestOptions, response, _yield$response$json, result, error, _ordersIds;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
            error = _yield$response$json.error;
            if (parseInt(result.status) === updateStatus) {
              _ordersIds = _toConsumableArray(selectedOrderIds);
              _ordersIds.shift();
              if (_ordersIds.length === 0) {
                setStartMulitOrderStatusChange(false);
              }
              setSelectedOrderIds(_ordersIds);
            }
            setActionStatus({
              loading: false,
              error: error ? result : null
            });
            _context.next = 19;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context.t0.message]
            });
            setStartMulitOrderStatusChange(false);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 15]]);
    }));
    return function handleChangeMultiOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Delete orders for orders selected
   */
  var handleDeleteMultiOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(code) {
      var payload, requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            payload = {
              orders_id: selectedOrderIds
            };
            if (code) {
              payload.deleted_action_code = code;
            }
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(payload)
            };
            _context2.next = 8;
            return fetch("".concat(ordering.root, "/orders"), requestOptions);
          case 8:
            response = _context2.sent;
            _context2.next = 11;
            return response.json();
          case 11:
            content = _context2.sent;
            if (!content.error) {
              setDeletedOrderIds(selectedOrderIds);
              setSelectedOrderIds([]);
              showToast(_ToastContext.ToastType.Success, t('ORDERS_DELETED', 'Orders deleted'));
            } else {
              setActionStatus({
                loading: true,
                error: content.result
              });
            }
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context2.t0.message]
            });
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 15]]);
    }));
    return function handleDeleteMultiOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var source, _yield$ordering$setAc, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
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
            _yield$ordering$setAc = _context3.sent;
            result = _yield$ordering$setAc.content.result;
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
      }, _callee3, null, [[0, 10]]);
    }));
    return function getDrivers() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getControlsOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
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
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var where, conditions, _filterValues$metafie, filterConditons, metafieldConditions, additionalConditions, searchConditions, requestOptions, response, content, _orderStatusNumbers;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            where = [];
            conditions = [];
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
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'city_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                  }]
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
            if (isOnlyDelivery) {
              additionalConditions.push({
                attribute: 'delivery_type',
                value: 1
              });
            }
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
              additionalConditions.push({
                attribute: 'time_status',
                value: timeStatus
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
            _context5.prev = 14;
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
            _context5.next = 19;
            return fetch("".concat(ordering.root, "/orders/dashboard?v=2&where=").concat(JSON.stringify(where)), requestOptions);
          case 19:
            response = _context5.sent;
            _context5.next = 22;
            return response.json();
          case 22:
            content = _context5.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              _orderStatusNumbers = Object.keys(orderStatuesList).reduce(function (sum, curr, index) {
                var _currRe = content === null || content === void 0 ? void 0 : content.result.filter(function (ele) {
                  return orderStatuesList[curr].indexOf(ele === null || ele === void 0 ? void 0 : ele.status) >= 0;
                });
                if (index === 1) {
                  var _sumRe$, _currRe$;
                  var _sumRe = content === null || content === void 0 ? void 0 : content.result.filter(function (ele) {
                    return orderStatuesList[sum].indexOf(ele === null || ele === void 0 ? void 0 : ele.status) >= 0;
                  });
                  return _defineProperty(_defineProperty({}, sum, _sumRe.length > 1 ? _sumRe.reduce(function (_sum, _curr) {
                    return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                  }) : ((_sumRe$ = _sumRe[0]) === null || _sumRe$ === void 0 ? void 0 : _sumRe$.quantity) || 0), curr, _currRe.length > 1 ? _currRe.reduce(function (_sum, _curr) {
                    return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                  }) : ((_currRe$ = _currRe[0]) === null || _currRe$ === void 0 ? void 0 : _currRe$.quantity) || 0);
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
            _context5.next = 29;
            break;
          case 26:
            _context5.prev = 26;
            _context5.t0 = _context5["catch"](14);
            setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 29:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[14, 26]]);
    }));
    return function getOrderNumbersByStatus() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleNewOrder = function handleNewOrder(order) {
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    if (!numberOfOrdersByStatus.result) return;
    var _orderStatusNumbers = numberOfOrdersByStatus.result;
    _orderStatusNumbers.pending += 1;
    setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
      loading: false,
      error: false,
      result: _orderStatusNumbers
    }));
  };
  var handleUpdateOrder = function handleUpdateOrder(order) {
    if (!(order !== null && order !== void 0 && order.history)) return;
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    var length = order.history.length;
    var lastHistoryData = order === null || order === void 0 ? void 0 : order.history[length - 1].data;
    var statusChange = lastHistoryData === null || lastHistoryData === void 0 ? void 0 : lastHistoryData.find(function (_ref7) {
      var attribute = _ref7.attribute;
      return attribute === 'status';
    });
    if (statusChange && numberOfOrdersByStatus.result) {
      var from = statusChange.old;
      var to = statusChange.new;
      var _orderStatusNumbers = numberOfOrdersByStatus.result;
      var fromTab = null;
      var toTab = null;
      Object.values(orderStatuesList).map(function (statusTabs, key) {
        if (statusTabs.includes(from)) {
          fromTab = Object.keys(orderStatuesList)[key];
          if (_orderStatusNumbers[fromTab] > 0) {
            _orderStatusNumbers[fromTab] -= 1;
          }
        }
        if (statusTabs.includes(to)) {
          toTab = Object.keys(orderStatuesList)[key];
          _orderStatusNumbers[toTab] += 1;
        }
      });
      setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
        loading: false,
        error: false,
        result: _orderStatusNumbers
      }));
    }
  };
  (0, _react.useEffect)(function () {
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleNewOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleNewOrder);
    };
  }, [socket, filterValues, searchValue, JSON.stringify(numberOfOrdersByStatus)]);

  /**
   * Listening multi orders action start to change status
   */
  (0, _react.useEffect)(function () {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return;
    handleChangeMultiOrderStatus(selectedOrderIds[0]);
  }, [selectedOrderIds, startMulitOrderStatusChange]);
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
    getOrderNumbersByStatus();
  }, [filterValues, searchValue, driverId, customerId, businessId, timeStatus]);
  (0, _react.useEffect)(function () {
    if (!user.id || configState !== null && configState !== void 0 && configState.loading) return;
    var getUser = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _result$settings, _configState$configs, _configState$configs2, response, _response$content, error, result, _result$settings2, _configState$configs3, _configState$configs4;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return ordering.users(user.id).select(['settings']).get();
            case 3:
              response = _context6.sent;
              _response$content = response.content, error = _response$content.error, result = _response$content.result;
              if (!(!error && (_result$settings = result.settings) !== null && _result$settings !== void 0 && _result$settings.orderColumns)) {
                _context6.next = 8;
                break;
              }
              setAllowColumns((_result$settings2 = result.settings) === null || _result$settings2 === void 0 ? void 0 : _result$settings2.orderColumns);
              return _context6.abrupt("return");
            case 8:
              setAllowColumns(_objectSpread(_objectSpread({}, allowColumnsModel), {}, {
                slaBar: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.slaBar), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_deadlines_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1'
                }),
                timer: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.timer), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.order_deadlines_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1'
                })
              }));
              _context6.next = 14;
              break;
            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](0);
              setAllowColumns(_objectSpread(_objectSpread({}, allowColumnsModel), {}, {
                slaBar: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.slaBar), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.order_deadlines_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1'
                }),
                timer: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.timer), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.order_deadlines_enabled) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) === '1'
                })
              }));
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 11]]);
      }));
      return function getUser() {
        return _ref8.apply(this, arguments);
      };
    }();
    getUser();
  }, [user, configState]);
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
    deletedOrderIds: deletedOrderIds,
    startMulitOrderStatusChange: startMulitOrderStatusChange,
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
    numberOfOrdersByStatus: numberOfOrdersByStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    timeStatus: timeStatus,
    setTimeStatus: setTimeStatus
  })));
};
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