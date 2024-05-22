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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    _useState10 = _slicedToArray(_useState9, 2),
    searchValue = _useState10[0],
    setSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedBusinessActiveState = _useState12[0],
    setSelectedBusinessActiveState = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    businessTypeSelected = _useState14[0],
    setBusinessTypeSelected = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    businessIds = _useState16[0],
    setBusinessIds = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValues = _useState18[0],
    setFilterValues = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    inActiveBusinesses = _useState20[0],
    setInActiveBusinesses = _useState20[1];

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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageSize, page, isInactive) {
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(pageSize, page) {
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
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(enabled) {
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
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
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