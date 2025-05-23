"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardBusinessList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _ApiContext = require("../../../contexts/ApiContext");
var _SessionContext = require("../../../contexts/SessionContext");
var _ToastContext = require("../../../contexts/ToastContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_dayjs.default.extend(_utc.default);
var DashboardBusinessList = exports.DashboardBusinessList = function DashboardBusinessList(props) {
  var _paginationSettings$p, _businessList$busines;
  var asDashboard = props.asDashboard,
    UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings,
    propsToFetch = props.propsToFetch,
    initialPageSize = props.initialPageSize,
    loadMorePageSize = props.loadMorePageSize,
    isSearchByBusinessId = props.isSearchByBusinessId,
    isSearchByBusinessName = props.isSearchByBusinessName,
    isSearchByBusinessEmail = props.isSearchByBusinessEmail,
    isSearchByBusinessPhone = props.isSearchByBusinessPhone,
    noActiveStatusCondition = props.noActiveStatusCondition;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var allowCodes = ['us', 'usa', 'united states', 'united states of american', 'ca', 'canada'];
  var _useState = (0, _react.useState)({
      loading: false,
      error: null,
      businesses: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessList = _useState2[0],
    setBusinessList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      countries: [],
      loading: true,
      error: null,
      enabled: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    countriesState = _useState4[0],
    setCountriesState = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    citiesList = _useState6[0],
    setCitiesList = _useState6[1];
  var _useState7 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    pagination = _useState8[0],
    setPagination = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    searchValue = _useState0[0],
    setSearchValue = _useState0[1];
  var _useState1 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedBusinessActiveState = _useState10[0],
    setSelectedBusinessActiveState = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    businessTypeSelected = _useState12[0],
    setBusinessTypeSelected = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    businessIds = _useState14[0],
    setBusinessIds = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    filterValues = _useState16[0],
    setFilterValues = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    inActiveBusinesses = _useState18[0],
    setInActiveBusinesses = _useState18[1];

  /**
   * Save filter type values
   * @param {object} types
   */
  var handleChangeFilterValues = function handleChangeFilterValues(types) {
    setFilterValues(types);
  };

  /**
   * Method to get businesses from API
   * @param {number, number} pageSize page
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageSize, page, isInactive) {
      var where, conditions, options, searchConditions, _filterValues$availab, _filterValues$menus, filterConditons, _filterValues$availab2, _filterValues$availab3, _filterValues$menus2, _filterValues$menus3, functionFetch;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            where = [];
            conditions = [];
            options = {
              query: {
                page: page,
                page_size: pageSize
              }
            };
            if (!noActiveStatusCondition || isInactive) {
              conditions.push({
                attribute: 'enabled',
                value: isInactive ? false : selectedBusinessActiveState
              });
            }
            if (businessTypeSelected) {
              conditions.push({
                attribute: 'types',
                conditions: [{
                  attribute: 'id',
                  value: businessTypeSelected
                }]
              });
            }
            if (searchValue) {
              searchConditions = [];
              if (isSearchByBusinessId) {
                searchConditions.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByBusinessName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByBusinessEmail) {
                searchConditions.push({
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByBusinessPhone) {
                searchConditions.push({
                  attribute: 'phone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (Object.keys(filterValues).length > 0) {
              filterConditons = [];
              if (filterValues !== null && filterValues !== void 0 && filterValues.name && (filterValues === null || filterValues === void 0 ? void 0 : filterValues.name) !== null) {
                filterConditons.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.name, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 || (_filterValues$availab = filterValues.availableMenus) === null || _filterValues$availab === void 0 ? void 0 : _filterValues$availab.value) !== '') {
                filterConditons.push({
                  attribute: 'available_menus_count',
                  value: {
                    condition: filterValues === null || filterValues === void 0 || (_filterValues$availab2 = filterValues.availableMenus) === null || _filterValues$availab2 === void 0 ? void 0 : _filterValues$availab2.condition,
                    value: filterValues === null || filterValues === void 0 || (_filterValues$availab3 = filterValues.availableMenus) === null || _filterValues$availab3 === void 0 ? void 0 : _filterValues$availab3.value
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 || (_filterValues$menus = filterValues.menus) === null || _filterValues$menus === void 0 ? void 0 : _filterValues$menus.value) !== '') {
                filterConditons.push({
                  attribute: 'menus_count',
                  value: {
                    condition: filterValues === null || filterValues === void 0 || (_filterValues$menus2 = filterValues.menus) === null || _filterValues$menus2 === void 0 ? void 0 : _filterValues$menus2.condition,
                    value: filterValues === null || filterValues === void 0 || (_filterValues$menus3 = filterValues.menus) === null || _filterValues$menus3 === void 0 ? void 0 : _filterValues$menus3.value
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'city_id',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.enabled) !== null) {
                filterConditons.push({
                  attribute: 'enabled',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.enabled
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.featured) !== null) {
                filterConditons.push({
                  attribute: 'featured',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.featured
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
            functionFetch = asDashboard ? ordering.setAccessToken(session.token).businesses().select(propsToFetch).asDashboard().where(where) : ordering.setAccessToken(session.token).businesses().select(propsToFetch).where(where);
            _context.next = 11;
            return functionFetch.get(options);
          case 11:
            return _context.abrupt("return", _context.sent);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getBusinesses(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get the countries from API
   */
  var getCountries = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$ordering$count, _yield$ordering$count2, error, result, enabled, cities, _iterator, _step, country;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
              loading: true
            }));
            _context2.next = 4;
            return ordering.countries().get();
          case 4:
            _yield$ordering$count = _context2.sent;
            _yield$ordering$count2 = _yield$ordering$count.content;
            error = _yield$ordering$count2.error;
            result = _yield$ordering$count2.result;
            if (!error) {
              enabled = result.filter(function (country) {
                return country === null || country === void 0 ? void 0 : country.enabled;
              }).some(function (country) {
                var _country$code, _country$name;
                return allowCodes.includes(country === null || country === void 0 || (_country$code = country.code) === null || _country$code === void 0 ? void 0 : _country$code.toLowerCase()) || allowCodes.includes(country === null || country === void 0 || (_country$name = country.name) === null || _country$name === void 0 ? void 0 : _country$name.toLowerCase());
              });
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                loading: false,
                countries: result,
                enabled: enabled
              }));
              cities = [];
              _iterator = _createForOfIteratorHelper(result);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  country = _step.value;
                  if (country !== null && country !== void 0 && country.enabled) {
                    cities = [].concat(_toConsumableArray(cities), _toConsumableArray(country === null || country === void 0 ? void 0 : country.cities));
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              setCitiesList(cities);
            } else {
              setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function getCountries() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to load businesses
   */
  var loadBusinesses = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, _err$constructor;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (session.token) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context3.next = 6;
            return getBusinesses(initialPageSize || pagination.pageSize, 1);
          case 6:
            response = _context3.sent;
            setBusinessList({
              loading: false,
              businesses: response.content.error ? [] : response.content.result,
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
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            if ((_context3.t0 === null || _context3.t0 === void 0 || (_err$constructor = _context3.t0.constructor) === null || _err$constructor === void 0 ? void 0 : _err$constructor.name) !== 'Cancel') {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));
            }
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 11]]);
    }));
    return function loadBusinesses() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses
   */
  var getInActiveBusinesses = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, _response$content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (session.token) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.prev = 2;
            _context4.next = 5;
            return getBusinesses(10, 1, true);
          case 5:
            response = _context4.sent;
            if (!response.content.error) {
              setInActiveBusinesses(response === null || response === void 0 || (_response$content = response.content) === null || _response$content === void 0 ? void 0 : _response$content.result);
            }
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 9]]);
    }));
    return function getInActiveBusinesses() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses more
   */
  var loadMoreBusinesses = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context5.prev = 1;
            _context5.next = 4;
            return getBusinesses(loadMorePageSize, Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.to) / loadMorePageSize) + 1);
          case 4:
            response = _context5.sent;
            setBusinessList({
              loading: false,
              businesses: response.content.error ? businessList.businesses : businessList.businesses.concat(response.content.result),
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
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            if (_context5.t0.constructor.name !== 'Cancel') {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 9]]);
    }));
    return function loadMoreBusinesses() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses for page and pageSize
   */
  var getPageBusinesses = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(pageSize, page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context6.prev = 1;
            _context6.next = 4;
            return getBusinesses(pageSize, page);
          case 4:
            response = _context6.sent;
            setBusinessList({
              loading: false,
              businesses: response.content.error ? businessList.businesses : response.content.result,
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
            _context6.next = 12;
            break;
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            if (_context6.t0.constructor.name !== 'Cancel') {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_context6.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 9]]);
    }));
    return function getPageBusinesses(_x4, _x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to change businesses enable/disable
   * @param {Boolean} enabled businesses enable state
   * @param {Boolean} isFeatured flag to check if featured or enabled
   */
  var handleEnableAllBusiness = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(enabled) {
      var isFeatured,
        changes,
        requestOptions,
        response,
        content,
        updatedBusinessList,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            isFeatured = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;
            _context7.prev = 1;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            changes = _objectSpread({
              businesses_id: businessIds
            }, isFeatured ? {
              featured: enabled
            } : {
              enabled: enabled
            });
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(changes)
            };
            _context7.next = 7;
            return fetch("".concat(ordering.root, "/business"), requestOptions);
          case 7:
            response = _context7.sent;
            _context7.next = 10;
            return response.json();
          case 10:
            content = _context7.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              updatedBusinessList = isFeatured ? businessList === null || businessList === void 0 ? void 0 : businessList.businesses.map(function (business) {
                return businessIds.includes(business === null || business === void 0 ? void 0 : business.id) ? _objectSpread(_objectSpread({}, business), {}, {
                  featured: enabled
                }) : business;
              }) : businessList === null || businessList === void 0 ? void 0 : businessList.businesses.filter(function (business) {
                return !businessIds.includes(business === null || business === void 0 ? void 0 : business.id);
              });
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                businesses: updatedBusinessList
              }));
              if (!isFeatured) setBusinessIds([]);
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'));
            } else {
              showToast(_ToastContext.ToastType.Error, content === null || content === void 0 ? void 0 : content.result);
            }
            _context7.next = 17;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](1);
            showToast(_ToastContext.ToastType.Error, _context7.t0.message);
          case 17:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 14]]);
    }));
    return function handleEnableAllBusiness(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to delete business list
   */
  var handleDeleteMultiBusinesses = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var requestOptions, response, content, updatedBusinessList;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                businesses_id: businessIds
              })
            };
            _context8.next = 5;
            return fetch("".concat(ordering.root, "/business"), requestOptions);
          case 5:
            response = _context8.sent;
            _context8.next = 8;
            return response.json();
          case 8:
            content = _context8.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              updatedBusinessList = businessList === null || businessList === void 0 ? void 0 : businessList.businesses.filter(function (business) {
                return !businessIds.includes(business === null || business === void 0 ? void 0 : business.id);
              });
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                businesses: updatedBusinessList
              }));
              setBusinessIds([]);
              showToast(_ToastContext.ToastType.Success, t('BUSINESS_DELETED', 'Business deleted'));
            } else {
              showToast(_ToastContext.ToastType.Error, content === null || content === void 0 ? void 0 : content.result);
            }
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 12]]);
    }));
    return function handleDeleteMultiBusinesses() {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Method to change user active state for filter
   */
  var handleChangeBusinessActiveState = function handleChangeBusinessActiveState() {
    setSelectedBusinessActiveState(!selectedBusinessActiveState);
  };

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };

  /**
   * Method to remove the business from business list
   * @param {Number} businessId business id to remove
   */
  var handleSucessRemoveBusiness = function handleSucessRemoveBusiness(businessId) {
    var businesses = businessList.businesses.filter(function (business) {
      return business.id !== businessId;
    });
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      to: (pagination === null || pagination === void 0 ? void 0 : pagination.to) - 1,
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.total) - 1
    }));
    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: businesses
    }));
  };

  /**
   * Method to add the business in the business list
   * @param {Object} business business to add
   */
  var handleSucessAddBusiness = function handleSucessAddBusiness(business) {
    var businesses = [].concat(_toConsumableArray(businessList.businesses), [business]);
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      to: (pagination === null || pagination === void 0 ? void 0 : pagination.to) + 1,
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.total) + 1
    }));
    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: businesses
    }));
  };

  /**
   * Method to update the business from the business list
   * @param {Object} business business to update
   */
  var handleSucessUpdateBusiness = function handleSucessUpdateBusiness(business) {
    var found = businessList.businesses.find(function (_business) {
      return _business.id === business.id;
    });
    if (found) {
      if (selectedBusinessActiveState === (business === null || business === void 0 ? void 0 : business.enabled)) {
        var businesses = businessList.businesses.filter(function (_business) {
          if (_business.id === business.id) {
            Object.assign(_business, business);
          }
          return true;
        });
        setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
          businesses: businesses
        }));
      } else {
        handleSucessRemoveBusiness(business.id);
      }
    } else {
      if (selectedBusinessActiveState === (business === null || business === void 0 ? void 0 : business.enabled)) {
        handleSucessAddBusiness(business);
      } else {
        handleSucessRemoveBusiness(business.id);
      }
    }
  };

  /**
  * Method to change selected businesses
  * @param {Number} businessId business id to change selected state
  */
  var handleChangeBusinessIds = function handleChangeBusinessIds(businessId) {
    var updatedBusinessIds = businessIds.includes(businessId) ? businessIds.filter(function (id) {
      return id !== businessId;
    }) : [].concat(_toConsumableArray(businessIds), [businessId]);
    setBusinessIds(updatedBusinessIds);
  };
  (0, _react.useEffect)(function () {
    if (businessList.loading || businessList.businesses.length > 0) return;
    if ((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) !== 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0) {
      if (Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize) >= (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage)) {
        getPageBusinesses(pagination.pageSize, pagination.currentPage);
      } else {
        getPageBusinesses(pagination.pageSize, pagination.currentPage - 1);
      }
    }
  }, [businessList.businesses]);

  /**
   * Listening session
   */
  (0, _react.useEffect)(function () {
    if (props.businesses) {
      setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
        businesses: props.businesses
      }));
    } else {
      loadBusinesses();
    }
  }, [session, searchValue, selectedBusinessActiveState, businessTypeSelected, filterValues]);
  (0, _react.useEffect)(function () {
    getCountries();
  }, []);
  (0, _react.useEffect)(function () {
    getInActiveBusinesses();
  }, [businessList === null || businessList === void 0 || (_businessList$busines = businessList.businesses) === null || _businessList$busines === void 0 ? void 0 : _businessList$busines.length]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    pagination: pagination,
    searchValue: searchValue,
    businessIds: businessIds,
    businessList: businessList,
    selectedBusinessActiveState: selectedBusinessActiveState,
    onSearch: setSearchValue,
    loadBusinesses: loadBusinesses,
    setBusinessIds: setBusinessIds,
    getPageBusinesses: getPageBusinesses,
    loadMoreBusinesses: loadMoreBusinesses,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleChangeBusinessIds: handleChangeBusinessIds,
    handleEnableAllBusiness: handleEnableAllBusiness,
    handleChangeBusinessType: handleChangeBusinessType,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleDeleteMultiBusinesses: handleDeleteMultiBusinesses,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState,
    countriesState: countriesState,
    filterValues: filterValues,
    handleChangeFilterValues: handleChangeFilterValues,
    businessTypeSelected: businessTypeSelected,
    inActiveBusinesses: inActiveBusinesses,
    citiesList: citiesList
  })));
};
DashboardBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business ID
   */
  isSearchByBusinessId: _propTypes.default.bool,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business email
   */
  isSearchByBusinessEmail: _propTypes.default.bool,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business phone
   */
  isSearchByBusinessPhone: _propTypes.default.bool,
  /**
   * Array of user props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string)
};
DashboardBusinessList.defaultProps = {
  loadMorePageSize: 10,
  propsToFetch: ['id', 'alcohol', 'city', 'delivery_price', 'distance', 'delivery_time', 'ribbon', 'enabled', 'featured', 'food', 'groceries', 'header', 'laundry', 'logo', 'minimum', 'name', 'pickup_time', 'slug', 'reviews'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};