"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _ApiContext = require("../../contexts/ApiContext");
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderingThemeContext = require("../../contexts/OrderingThemeContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
_dayjs.default.extend(_utc.default);
var BusinessList = exports.BusinessList = function BusinessList(props) {
  var _paginationSettings$p, _configs$advanced_bus, _ref, _orderingTheme$busine, _orderState$options, _configs$unaddressed_, _orderState$options2, _orderState$options18, _orderState$options19, _orderState$options20, _orderState$options21, _orderState$options22, _orderState$options23;
  var UIComponent = props.UIComponent,
    initialBuisnessType = props.initialBuisnessType,
    initialOrderType = props.initialOrderType,
    initialOrderByValue = props.initialOrderByValue,
    initialFilterKey = props.initialFilterKey,
    initialFilterValue = props.initialFilterValue,
    initialPricelevel = props.initialPricelevel,
    isOfferBusinesses = props.isOfferBusinesses,
    isSortByReview = props.isSortByReview,
    isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    isFeatured = props.isFeatured,
    isDoordash = props.isDoordash,
    asDashboard = props.asDashboard,
    paginationSettings = props.paginationSettings,
    customLocation = props.customLocation,
    propsToFetch = props.propsToFetch,
    onBusinessClick = props.onBusinessClick,
    windowPathname = props.windowPathname,
    currentPageParam = props.currentPageParam,
    franchiseId = props.franchiseId,
    businessId = props.businessId,
    cityId = props.cityId,
    actualSlug = props.actualSlug,
    searchValueCustom = props.searchValueCustom,
    isKiosk = props.isKiosk,
    isCustomerMode = props.isCustomerMode;
  var avoidFetchData = !token || isKiosk;
  var _useState = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessesList = _useState2[0],
    setBusinessesList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    paginationProps = _useState4[0],
    setPaginationProps = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    businessTypeSelected = _useState6[0],
    setBusinessTypeSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    priceLevelSelected = _useState8[0],
    setPriceLevelSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    searchValue = _useState0[0],
    setSearchValue = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    timeLimitValue = _useState10[0],
    setTimeLimitValue = _useState10[1];
  var _useState11 = (0, _react.useState)(initialOrderByValue !== null && initialOrderByValue !== void 0 ? initialOrderByValue : null),
    _useState12 = _slicedToArray(_useState11, 2),
    orderByValue = _useState12[0],
    setOrderByValue = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    maxDeliveryFee = _useState14[0],
    setMaxDeliveryFee = _useState14[1];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useOrderingTheme = (0, _OrderingThemeContext.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    token = _useSession2$.token,
    refreshUserInfo = _useSession2[1].refreshUserInfo;
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    requestsState = _useState16[0],
    setRequestsState = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    citiesState = _useState18[0],
    setCitiesState = _useState18[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    franchiseEnabled = _useState20[0],
    setFranchiseEnabled = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    firstLoad = _useState22[0],
    setFirstLoad = _useState22[1];
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);
  var advancedSearchEnabled = (configs === null || configs === void 0 || (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1';
  var showCities = (_ref = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$busine = orderingTheme.business_listing_view) !== null && _orderingTheme$busine !== void 0 && (_orderingTheme$busine = _orderingTheme$busine.components) !== null && _orderingTheme$busine !== void 0 && (_orderingTheme$busine = _orderingTheme$busine.cities) !== null && _orderingTheme$busine !== void 0 && _orderingTheme$busine.hidden) && (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 2 && !props.disabledCities) !== null && _ref !== void 0 ? _ref : false;
  var unaddressedTypes = (configs === null || configs === void 0 || (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isAllowUnaddressOrderType = unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type);
  var sortBusinesses = function sortBusinesses(array, option) {
    if (option === 'review') {
      return array.sort(function (a, b) {
        return b.reviews.total - a.reviews.total;
      });
    }
    return array;
  };
  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, specificPagination, prev) {
      var _configs$location_def, _configs$location_def2, _orderState$options3, _orderState$options4, _orderState$options5, _orderState$options6, _orderState$options1, _orderState$options10, _orderState$options14, defaultLatitude, defaultLongitude, isInvalidDefaultLocation, defaultLocation, parameters, _orderState$options7, _orderState$options8, _orderState$options9, _orderState$options0, paginationParams, _orderState$options11, moment, where, conditions, _orderState$options12, _orderState$options13, searchConditions, isSpecialCharacter, _orderState$options15, _paginationParams, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination, _result, offerBuesinesses, nextPageItems, remainingItems, businesses, fromIndex, toIndex, element;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true,
              businesses: newFetch ? [] : businessesList.businesses
            }));
            defaultLatitude = Number(configs === null || configs === void 0 || (_configs$location_def = configs.location_default_latitude) === null || _configs$location_def === void 0 ? void 0 : _configs$location_def.value);
            defaultLongitude = Number(configs === null || configs === void 0 || (_configs$location_def2 = configs.location_default_longitude) === null || _configs$location_def2 === void 0 ? void 0 : _configs$location_def2.value);
            isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
            defaultLocation = {
              lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
              lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
            };
            parameters = asDashboard ? {} : {
              location: !customLocation ? isAllowUnaddressOrderType && !((_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && (_orderState$options3 = _orderState$options3.address) !== null && _orderState$options3 !== void 0 && _orderState$options3.location) ? defaultLocation : "".concat((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.location) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.lat, ",").concat((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.location) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.lng) : "".concat(customLocation.lat, ",").concat(customLocation.lng),
              type: !initialOrderType ? ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type) || 1 : initialOrderType
            };
            if (isCustomerMode) {
              parameters.disabled_business = true;
            }
            if (orderByValue) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                orderBy: orderByValue
              });
            }
            if ((searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 && advancedSearchEnabled) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                term: searchValue,
                order_type_id: orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
                location: JSON.stringify(isAllowUnaddressOrderType && !((_orderState$options8 = orderState.options) !== null && _orderState$options8 !== void 0 && (_orderState$options8 = _orderState$options8.address) !== null && _orderState$options8 !== void 0 && _orderState$options8.location) ? defaultLocation : {
                  lat: (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 || (_orderState$options9 = _orderState$options9.address) === null || _orderState$options9 === void 0 || (_orderState$options9 = _orderState$options9.location) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.lat,
                  lng: (_orderState$options0 = orderState.options) === null || _orderState$options0 === void 0 || (_orderState$options0 = _orderState$options0.address) === null || _orderState$options0 === void 0 || (_orderState$options0 = _orderState$options0.location) === null || _orderState$options0 === void 0 ? void 0 : _orderState$options0.lng
                })
              });
            }
            if (!isSortByReview && !isOfferBusinesses) {
              paginationParams = {
                page: newFetch ? 1 : paginationProps.currentPage + 1,
                page_size: paginationProps.pageSize
              };
              parameters = _objectSpread(_objectSpread({}, parameters), paginationParams);
            }
            if ((_orderState$options1 = orderState.options) !== null && _orderState$options1 !== void 0 && _orderState$options1.moment && isValidMoment((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            where = null;
            conditions = [];
            if (initialBuisnessType || businessTypeSelected) {
              conditions.push({
                attribute: 'types',
                conditions: [{
                  attribute: 'id',
                  value: !initialBuisnessType ? businessTypeSelected : initialBuisnessType
                }]
              });
            }
            if (isFeatured) {
              conditions.push({
                attribute: 'featured',
                value: true
              });
            }
            if (franchiseId) {
              conditions.push({
                attribute: 'franchise_id',
                value: franchiseId
              });
            }
            if (priceLevelSelected || initialPricelevel) {
              conditions.push({
                attribute: 'price_level',
                value: initialPricelevel !== null && initialPricelevel !== void 0 ? initialPricelevel : priceLevelSelected
              });
            }
            if (businessId) {
              conditions.push({
                attribute: typeof businessId === 'string' ? 'slug' : 'id',
                value: businessId
              });
            }
            if (timeLimitValue) {
              if (((_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.type) === 1) {
                conditions.push({
                  attribute: 'delivery_time',
                  value: {
                    condition: '<=',
                    value: timeLimitValue
                  }
                });
              }
              if (((_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.type) === 2) {
                conditions.push({
                  attribute: 'pickup_time',
                  value: {
                    condition: '<=',
                    value: timeLimitValue
                  }
                });
              }
            }
            if (maxDeliveryFee) {
              conditions.push({
                attribute: 'delivery_price',
                value: {
                  condition: '<=',
                  value: maxDeliveryFee
                }
              });
            }
            if (searchValue) {
              searchConditions = [];
              isSpecialCharacter = rex.test(searchValue);
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (orderState !== null && orderState !== void 0 && (_orderState$options14 = orderState.options) !== null && _orderState$options14 !== void 0 && _orderState$options14.city_id || cityId) {
              conditions.push({
                attribute: 'city_id',
                value: cityId || (orderState === null || orderState === void 0 || (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.city_id)
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            if (specificPagination || currentPageParam) {
              _paginationParams = {
                page: specificPagination || currentPageParam,
                page_size: paginationProps.pageSize
              };
              parameters = _objectSpread(_objectSpread({}, parameters), _paginationParams);
            }
            source = {};
            requestsState.businesses = source;
            setRequestsState(_objectSpread({}, requestsState));
            fetchEndpoint = advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 || !where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters) : where && asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where).asDashboard() : where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where) : ordering.businesses().select(propsToFetch).parameters(parameters).asDashboard();
            _context.next = 31;
            return fetchEndpoint.get({
              cancelToken: source,
              advancedSearch: advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3
            });
          case 31:
            _yield$fetchEndpoint$ = _context.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            pagination = _yield$fetchEndpoint$2.pagination;
            if (!error) {
              if (isSortByReview) {
                _result = sortBusinesses(result, 'review');
                businessesList.businesses = _result;
              } else if (isOfferBusinesses) {
                offerBuesinesses = result.filter(function (_business) {
                  return (_business === null || _business === void 0 ? void 0 : _business.offers.length) > 0;
                });
                businessesList.businesses = offerBuesinesses;
              } else {
                businessesList.businesses = newFetch ? result : prev ? [].concat(_toConsumableArray(result), _toConsumableArray(businessesList.businesses)) : [].concat(_toConsumableArray(businessesList.businesses), _toConsumableArray(result));
              }
              nextPageItems = 0;
              if ((pagination === null || pagination === void 0 ? void 0 : pagination.current_page) !== (pagination === null || pagination === void 0 ? void 0 : pagination.total_pages)) {
                remainingItems = pagination.total - businessesList.businesses.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.total_pages,
                totalItems: pagination === null || pagination === void 0 ? void 0 : pagination.total,
                nextPageItems: nextPageItems
              }));
            }
            businesses = businessesList.businesses;
            if (actualSlug) {
              fromIndex = businesses.findIndex(function (business) {
                return business.slug === actualSlug;
              });
              toIndex = 0;
              if (fromIndex !== toIndex) {
                element = businesses.splice(fromIndex, 1)[0];
                businesses.splice(toIndex, 0, element);
              }
            }
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: error,
              businesses: businesses,
              result: result,
              fetched: true
            }));
            setFirstLoad(true);
            _context.next = 46;
            break;
          case 43:
            _context.prev = 43;
            _context.t0 = _context["catch"](0);
            if (_context.t0.constructor.name !== 'Cancel') {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: true,
                fetched: true,
                result: [_context.t0.message]
              }));
              setFirstLoad(true);
            }
          case 46:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 43]]);
    }));
    return function getBusinesses(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Get franchise info from API
   */
  var getFranchise = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setFranchiseEnabled(false);
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            functionFetch = "".concat(ordering.root, "/franchises/").concat(franchiseId);
            _context2.next = 6;
            return fetch(functionFetch, requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            _yield$response$json = _context2.sent;
            result = _yield$response$json.result;
            if (result !== null && result !== void 0 && result.enabled) setFranchiseEnabled(result === null || result === void 0 ? void 0 : result.enabled);else setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function getFranchise() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, _yield$response$json2, result, error, pagination;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            setCitiesState(_objectSpread(_objectSpread({}, citiesState), {}, {
              loading: true
            }));
            _context3.next = 4;
            return fetch("".concat(ordering.root, "/countries"), requestOptions);
          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context3.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            pagination = _yield$response$json2.pagination;
            if (!error) {
              setCitiesState(_objectSpread(_objectSpread({}, citiesState), {}, {
                loading: false,
                cities: result === null || result === void 0 ? void 0 : result.map(function (country) {
                  return country === null || country === void 0 ? void 0 : country.cities;
                }).flat(),
                pagination: pagination
              }));
            }
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getCities() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Cancel businesses request
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);

  /**
   * Listening order option and filter changes
   */
  (0, _react.useEffect)(function () {
    var _orderState$options16, _orderState$options17;
    if (orderState.loading || !((_orderState$options16 = orderState.options) !== null && _orderState$options16 !== void 0 && (_orderState$options16 = _orderState$options16.address) !== null && _orderState$options16 !== void 0 && _orderState$options16.location) && !isAllowUnaddressOrderType && !asDashboard && !customLocation || auth && !(orderState !== null && orderState !== void 0 && (_orderState$options17 = orderState.options) !== null && _orderState$options17 !== void 0 && _orderState$options17.user_id)) return;
    if (!isDoordash && !franchiseId) {
      getBusinesses(true, currentPageParam);
    }
  }, [(_orderState$options18 = orderState.options) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.type, (_orderState$options19 = orderState.options) === null || _orderState$options19 === void 0 ? void 0 : _orderState$options19.moment, (_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.city_id, (_orderState$options21 = orderState.options) === null || _orderState$options21 === void 0 ? void 0 : _orderState$options21.address_id, (_orderState$options22 = orderState.options) === null || _orderState$options22 === void 0 || (_orderState$options22 = _orderState$options22.address) === null || _orderState$options22 === void 0 ? void 0 : _orderState$options22.address, JSON.stringify((_orderState$options23 = orderState.options) === null || _orderState$options23 === void 0 || (_orderState$options23 = _orderState$options23.address) === null || _orderState$options23 === void 0 ? void 0 : _orderState$options23.location), ordering === null || ordering === void 0 ? void 0 : ordering.countryCode, orderState.loading, businessTypeSelected, priceLevelSelected, searchValue, initialPricelevel, initialBuisnessType, timeLimitValue, orderByValue, maxDeliveryFee, businessId]);
  (0, _react.useEffect)(function () {
    var _orderState$options24;
    if (orderState.loading || !((_orderState$options24 = orderState.options) !== null && _orderState$options24 !== void 0 && (_orderState$options24 = _orderState$options24.address) !== null && _orderState$options24 !== void 0 && _orderState$options24.location) && !isAllowUnaddressOrderType && !asDashboard && !customLocation) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
      return;
    }
    if (isDoordash || franchiseEnabled) {
      getBusinesses(true);
    }
  }, [JSON.stringify(orderState.options), orderState.loading, franchiseEnabled, businessTypeSelected, searchValue, priceLevelSelected, timeLimitValue, orderByValue, maxDeliveryFee, businessId]);
  (0, _react.useLayoutEffect)(function () {
    if (isDoordash) {
      getBusinesses(true);
    }
  }, [windowPathname]);
  (0, _react.useEffect)(function () {
    if (franchiseId) {
      getFranchise();
    }
  }, [franchiseId]);

  /**
   * Listening initial filter
   */
  (0, _react.useEffect)(function () {
    if (!initialFilterKey && !initialFilterValue) return;
    switch (initialFilterKey) {
      case 'category':
        handleChangeBusinessType(initialFilterValue);
        break;
      case 'timeLimit':
        handleChangeTimeLimit(initialFilterValue);
        break;
      case 'search':
        handleChangeSearch(initialFilterValue);
        break;
      case 'orderBy':
        handleChangeOrderBy(initialFilterValue);
        break;
      case 'maxDeliveryFee':
        handleChangeMaxDeliveryFee(initialFilterValue);
        break;
    }
  }, [initialFilterKey, initialFilterValue]);
  (0, _react.useEffect)(function () {
    if (citiesState.loading) return;
    if (showCities) {
      getCities();
    }
  }, [showCities]);
  (0, _react.useEffect)(function () {
    if (firstLoad) {
      handleChangeSearch(searchValueCustom);
    }
  }, [searchValueCustom]);

  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */
  var handleBusinessClick = function handleBusinessClick(business) {
    onBusinessClick && onBusinessClick(business);
  };

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };

  /**
   * Change price level
   * @param {string} priceLevel price level
   */
  var handleChangePriceLevel = function handleChangePriceLevel(priceLevel) {
    if (priceLevel === priceLevelSelected) {
      setPriceLevelSelected(null);
      return;
    }
    setPriceLevelSelected(priceLevel);
  };

  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    if (!!search !== !!searchValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    if (search !== undefined) {
      setSearchValue(search);
    }
  };

  /**
   * Change time limt value
   * @param {string} time time limt value (for example: 0:30)
   */
  var handleChangeTimeLimit = function handleChangeTimeLimit(time) {
    if (!!time !== !!timeLimitValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setTimeLimitValue(time);
  };

  /**
   * Change orderBy value
   * @param {string} orderBy orderBy value
   */
  var handleChangeOrderBy = function handleChangeOrderBy(orderBy) {
    if (orderBy !== orderByValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setOrderByValue(orderBy);
  };

  /**
   * Change max delivery fee
   * @param {number} deliveryFee max delivery fee
   */
  var handleChangeMaxDeliveryFee = function handleChangeMaxDeliveryFee(deliveryFee) {
    if (maxDeliveryFee !== deliveryFee) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setMaxDeliveryFee(deliveryFee);
  };

  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */
  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    var updatedBusinesses = businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
      businesses: updatedBusinesses
    }));
  };
  (0, _react.useEffect)(function () {
    if (avoidFetchData) return;
    refreshUserInfo();
  }, [auth]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessesList: businessesList,
    paginationProps: paginationProps,
    searchValue: searchValue,
    timeLimitValue: timeLimitValue,
    businessTypeSelected: businessTypeSelected,
    orderByValue: orderByValue,
    maxDeliveryFee: maxDeliveryFee,
    priceLevelSelected: priceLevelSelected,
    handleChangePriceLevel: handleChangePriceLevel,
    getBusinesses: getBusinesses,
    handleChangeSearch: handleChangeSearch,
    handleChangeTimeLimit: handleChangeTimeLimit,
    handleChangeOrderBy: handleChangeOrderBy,
    handleBusinessClick: handleBusinessClick,
    handleChangeBusinessType: handleChangeBusinessType,
    handleChangeMaxDeliveryFee: handleChangeMaxDeliveryFee,
    franchiseEnabled: franchiseEnabled,
    handleUpdateBusinessList: handleUpdateBusinessList,
    getCities: getCities,
    setPaginationProps: setPaginationProps,
    citiesState: citiesState
  })));
};
BusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Function to get business clicked
   */
  onBusinessClick: _propTypes.default.func
};
BusinessList.defaultProps = {
  propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'ribbon', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};