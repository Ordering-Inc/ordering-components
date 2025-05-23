"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _ApiContext = require("../../../contexts/ApiContext");
var _SessionContext = require("../../../contexts/SessionContext");
var _ToastContext = require("../../../contexts/ToastContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _EventContext = require("../../../contexts/EventContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
var UsersList = exports.UsersList = function UsersList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    defaultUserActiveState = props.defaultUserActiveState,
    paginationSettings = props.paginationSettings,
    propsToFetch = props.propsToFetch,
    isSearchByUserId = props.isSearchByUserId,
    isSearchByUserEmail = props.isSearchByUserEmail,
    isSearchByUserPhone = props.isSearchByUserPhone,
    isSearchByUserName = props.isSearchByUserName,
    isBusinessOwners = props.isBusinessOwners,
    defaultUserTypesSelected = props.defaultUserTypesSelected,
    disabledActiveStateCondition = props.disabledActiveStateCondition,
    isDriver = props.isDriver,
    isProfessional = props.isProfessional;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)({
      users: [],
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    usersList = _useState2[0],
    setUsersList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      clear: false,
      changes: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    filterValues = _useState4[0],
    setFilterValues = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isVerified = _useState8[0],
    setIsVerified = _useState8[1];
  var _useState9 = (0, _react.useState)(defaultUserTypesSelected),
    _useState0 = _slicedToArray(_useState9, 2),
    userTypesSelected = _useState0[0],
    setUserTypesSelected = _useState0[1];
  var _useState1 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    paginationProps = _useState10[0],
    setPaginationProps = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    paginationDetail = _useState12[0],
    setPaginationDetail = _useState12[1];
  var _useState13 = (0, _react.useState)(defaultUserActiveState),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedUserActiveState = _useState14[0],
    setSelectedUserActiveState = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    actionStatus = _useState16[0],
    setActionStatus = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    selectedUsers = _useState18[0],
    setSelectedUsers = _useState18[1];
  var _useState19 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    deleteUsersActionState = _useState20[0],
    setDeleteUsersActionState = _useState20[1];
  var _useState21 = (0, _react.useState)({
      occupations: [],
      loading: false,
      error: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    occupationsState = _useState22[0],
    setOccupationsState = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    selectedOccupation = _useState24[0],
    setSelectedOccupation = _useState24[1];
  var _useState25 = (0, _react.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    orderFilterValue = _useState26[0],
    setOrderFilterValue = _useState26[1];
  var _useState27 = (0, _react.useState)({}),
    _useState28 = _slicedToArray(_useState27, 2),
    multiFilterValues = _useState28[0],
    setMultiFilterValues = _useState28[1];
  var _useState29 = (0, _react.useState)(true),
    _useState30 = _slicedToArray(_useState29, 2),
    actionDisabled = _useState30[0],
    setActionDisabled = _useState30[1];
  var _useState31 = (0, _react.useState)({
      groups: [],
      loading: false,
      error: null
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    driversGroupsState = _useState32[0],
    setDriversGroupsState = _useState32[1];

  /**
   * Save filter type values
   * @param {object} types
   */
  var handleChangeMultiFilterValues = function handleChangeMultiFilterValues(types) {
    setMultiFilterValues(types);
  };

  /**
   * Get users by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var _session$user, parameters, paginationParams, where, conditions, verifiedConditions, searchConditions, _filterValues$changes, _filterValues$changes2, filterConditions, _filterValues$changes3, _multiFilterValues$or, filterConditons, _multiFilterValues$or2, _multiFilterValues$or3, fetchEndpoint, content, response, requestOptions, _fetchEndpoint, _response, _content, result, pagination, error, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
              loading: true
            }));
            parameters = {};
            paginationParams = {
              page: page,
              page_size: pageSize || paginationProps.pageSize
            };
            if (!isBusinessOwners) {
              parameters = _objectSpread({}, paginationParams);
            }
            if (orderFilterValue !== null) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                orders_count_condition: orderFilterValue === 0 ? 'eq' : 'ge',
                orders_count_value: orderFilterValue
              });
            }
            where = null;
            conditions = [];
            if (!disabledActiveStateCondition) {
              conditions.push({
                attribute: 'enabled',
                value: selectedUserActiveState
              });
            }
            if (isVerified) {
              verifiedConditions = [];
              verifiedConditions.push({
                attribute: 'email_verified',
                value: true
              });
              verifiedConditions.push({
                attribute: 'phone_verified',
                value: true
              });
              conditions.push({
                conector: 'OR',
                conditions: verifiedConditions
              });
            }
            if (userTypesSelected.length > 0) {
              conditions.push({
                attribute: 'level',
                value: userTypesSelected
              });
            }
            if (selectedOccupation) {
              conditions.push({
                attribute: 'occupation_id',
                value: selectedOccupation
              });
            }
            if (searchValue) {
              searchConditions = [];
              if (isSearchByUserId) {
                searchConditions.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByUserEmail) {
                searchConditions.push({
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByUserPhone) {
                searchConditions.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByUserName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'lastname',
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
            if (Object.keys(filterValues.changes).length) {
              filterConditions = [];
              if (filterValues !== null && filterValues !== void 0 && (_filterValues$changes = filterValues.changes) !== null && _filterValues$changes !== void 0 && _filterValues$changes.name && (filterValues === null || filterValues === void 0 || (_filterValues$changes2 = filterValues.changes) === null || _filterValues$changes2 === void 0 ? void 0 : _filterValues$changes2.name) !== null) {
                filterConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 || (_filterValues$changes3 = filterValues.changes) === null || _filterValues$changes3 === void 0 ? void 0 : _filterValues$changes3.name, "%"))
                  }
                });
              }
              if (filterValues.changes.lastname && filterValues.changes.lastname !== null) {
                filterConditions.push({
                  attribute: 'lastname',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues.changes.lastname, "%"))
                  }
                });
              }
              if (filterValues.changes.email && filterValues.changes.email !== null) {
                filterConditions.push({
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues.changes.email, "%"))
                  }
                });
              }
              if (filterValues.changes.email_verified !== undefined) {
                filterConditions.push({
                  attribute: 'email_verified',
                  value: filterValues.changes.email_verified
                });
              }
              if (filterValues.changes.phone && filterValues.changes.phone !== null) {
                filterConditions.push({
                  attribute: 'phone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues.changes.phone, "%"))
                  }
                });
              }
              if (filterValues.changes.phone_verified !== undefined) {
                filterConditions.push({
                  attribute: 'phone_verified',
                  value: filterValues.changes.phone_verified
                });
              }
              if (filterValues.changes.id && parseInt(filterValues.changes.id) > 0) {
                filterConditions.push({
                  attribute: 'id',
                  value: parseInt(filterValues.changes.id)
                });
              }
              if (filterConditions.length) {
                conditions.push({
                  conector: 'AND',
                  conditions: filterConditions
                });
              }
            }
            if (Object.keys(multiFilterValues).length > 0) {
              filterConditons = [];
              if (multiFilterValues !== null && multiFilterValues !== void 0 && multiFilterValues.name && (multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.name) !== null) {
                filterConditons.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.name, "%"))
                  }
                });
              }
              if (multiFilterValues !== null && multiFilterValues !== void 0 && multiFilterValues.lastname && (multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.lastname) !== null) {
                filterConditons.push({
                  attribute: 'lastname',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.lastname, "%"))
                  }
                });
              }
              if (multiFilterValues !== null && multiFilterValues !== void 0 && multiFilterValues.email && (multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.email) !== null) {
                filterConditons.push({
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.email, "%"))
                  }
                });
              }
              if (multiFilterValues !== null && multiFilterValues !== void 0 && multiFilterValues.cellphone && (multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.cellphone) !== null) {
                filterConditons.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.cellphone, "%"))
                  }
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.countryPhoneCode) !== null) {
                filterConditons.push({
                  attribute: 'country_phone_code',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.countryPhoneCode, "%"))
                  }
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'city_id',
                  value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.cityIds
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.phoneVerified) !== null) {
                filterConditons.push({
                  attribute: 'phone_verified',
                  value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.phoneVerified
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 || (_multiFilterValues$or = multiFilterValues.ordersCount) === null || _multiFilterValues$or === void 0 ? void 0 : _multiFilterValues$or.value) !== '') {
                parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                  orders_count_condition: multiFilterValues === null || multiFilterValues === void 0 || (_multiFilterValues$or2 = multiFilterValues.ordersCount) === null || _multiFilterValues$or2 === void 0 ? void 0 : _multiFilterValues$or2.condition,
                  orders_count_value: multiFilterValues === null || multiFilterValues === void 0 || (_multiFilterValues$or3 = multiFilterValues.ordersCount) === null || _multiFilterValues$or3 === void 0 ? void 0 : _multiFilterValues$or3.value
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.emailVerified) !== null) {
                filterConditons.push({
                  attribute: 'email_verified',
                  value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.emailVerified
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.userType) !== null) {
                filterConditons.push({
                  attribute: 'level',
                  value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.userType
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.loyaltyLevel) !== null) {
                filterConditons.push({
                  attribute: 'loyalty_level_id',
                  value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.loyaltyLevel
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.enabled) !== null) {
                filterConditons.push({
                  attribute: 'enabled',
                  value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.enabled
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.deliveryFromDatetime) !== null) {
                filterConditons.push({
                  attribute: 'created_at',
                  value: {
                    condition: '>=',
                    value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.deliveryFromDatetime
                  }
                });
              }
              if ((multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.deliveryEndDatetime) !== null) {
                filterConditons.push({
                  attribute: 'created_at',
                  value: {
                    condition: '<=',
                    value: multiFilterValues === null || multiFilterValues === void 0 ? void 0 : multiFilterValues.deliveryEndDatetime
                  }
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
            fetchEndpoint = null;
            content = {};
            if (!(((_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) !== 2)) {
              _context.next = 26;
              break;
            }
            fetchEndpoint = where ? ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters).where(where) : ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters);
            _context.next = 22;
            return fetchEndpoint.get();
          case 22:
            response = _context.sent;
            content = response.content;
            _context.next = 34;
            break;
          case 26:
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _fetchEndpoint = where ? "".concat(ordering.root, "/professionals?page=").concat(page, "&page_size=").concat(pageSize, "&&where=").concat(JSON.stringify(where)) : "".concat(ordering.root, "/professionals?page=").concat(page, "&page_size=").concat(pageSize);
            _context.next = 30;
            return fetch(_fetchEndpoint, requestOptions);
          case 30:
            _response = _context.sent;
            _context.next = 33;
            return _response.json();
          case 33:
            content = _context.sent;
          case 34:
            _content = content, result = _content.result, pagination = _content.pagination, error = _content.error;
            if (error) {
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: false,
                error: result
              }));
            } else {
              usersList.users = result;
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: false
              }));
              nextPageItems = 0;
              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - usersList.users.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size === 0 ? paginationProps.pageSize : pagination.page_size,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                from: pagination.from,
                to: pagination.to,
                nextPageItems: nextPageItems
              }));
              setPaginationDetail(_objectSpread({}, pagination));
            }
            _context.next = 41;
            break;
          case 38:
            _context.prev = 38;
            _context.t0 = _context["catch"](0);
            if (_context.t0.constructor.name !== 'Cancel') {
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));
            }
          case 41:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 38]]);
    }));
    return function getUsers(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Get the occupations from API
   */
  var getOccupations = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setOccupationsState(_objectSpread(_objectSpread({}, occupationsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session === null || session === void 0 ? void 0 : session.token)
              }
            };
            _context2.next = 5;
            return fetch("".concat(ordering.root, "/occupations"), requestOptions);
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            content = _context2.sent;
            if (!content.error) {
              setOccupationsState({
                loading: false,
                occupations: content.result,
                error: null
              });
            } else {
              setOccupationsState(_objectSpread(_objectSpread({}, occupationsState), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setOccupationsState(_objectSpread(_objectSpread({}, occupationsState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getOccupations() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Change user type
   * @param {object} userType User type
   */
  var handleSelectedUserTypes = function handleSelectedUserTypes(userTypes) {
    setUserTypesSelected(userTypes);
  };

  /**
   * Method to change user active state for filter
   */
  var handleChangeUserActiveState = function handleChangeUserActiveState() {
    setSelectedUserActiveState(!selectedUserActiveState);
  };

  /**
   * Method to change user type from API
   * @param {Object} user user id and new type
   */
  var handleChangeUserType = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user) {
      var requestsState, source, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, users;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestsState = {};
            source = {};
            requestsState.updateOrder = source;
            _context3.next = 8;
            return ordering.setAccessToken(session.token).users(user.id).save({
              level: user.level
            }, {
              cancelToken: source
            });
          case 8:
            _yield$ordering$setAc = _context3.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              users = [];
              if (userTypesSelected.includes(user.level)) {
                users = usersList.users.filter(function (_user) {
                  if (_user.id === user.id) {
                    _user.level = user.level;
                  }
                  return true;
                });
              } else {
                users = usersList.users.filter(function (_user) {
                  return _user.id !== result.id;
                });
              }
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                users: users
              }));
              showToast(_ToastContext.ToastType.Success, t('UPDATED', 'Updated'));
            }
            _context3.next = 19;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 16]]);
    }));
    return function handleChangeUserType(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to change user enable/disable
   * @param {Object} user user id and enable state
   */

  var handleChangeActiveUser = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(user) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, users;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context4.next = 5;
            return ordering.setAccessToken(session.token).users(user.id).save({
              enabled: user.enabled
            });
          case 5:
            _yield$ordering$setAc3 = _context4.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: error ? result : null
            }));
            if (!error) {
              if (isDriver) {
                handleSuccessUpdate(result);
              } else if (!disabledActiveStateCondition) {
                users = _toConsumableArray(usersList === null || usersList === void 0 ? void 0 : usersList.users);
                if (!user.enabled && selectedUserActiveState || user !== null && user !== void 0 && user.enabled && !selectedUserActiveState) {
                  users = usersList.users.filter(function (_user) {
                    var valid = true;
                    if (_user.id === user.id) {
                      if (user.enabled === !selectedUserActiveState) {
                        valid = false;
                      }
                    }
                    return valid;
                  });
                } else {
                  users.push(user);
                }
                setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                  users: users
                }));
              }
              showToast(_ToastContext.ToastType.Success, t('UPDATED', 'Updated'));
            }
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }));
    return function handleChangeActiveUser(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to delete users from API
   * @param {Number} userId user id to delete
   */
  var handleDeleteUser = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId) {
      var _yield$ordering$setAc5, content, users, _selectedUsers;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context5.next = 4;
            return ordering.setAccessToken(session.token).users(userId).delete();
          case 4:
            _yield$ordering$setAc5 = _context5.sent;
            content = _yield$ordering$setAc5.content;
            if (!content.error) {
              users = usersList.users.filter(function (user) {
                return user.id !== userId;
              });
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                users: users
              }));
              if (deleteUsersActionState.loading) {
                _selectedUsers = _toConsumableArray(selectedUsers);
                _selectedUsers.shift();
                if (_selectedUsers.length === 0) {
                  setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
                    loading: false
                  }));
                }
                setSelectedUsers(_selectedUsers);
              }
              setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
                total: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) - 1
              }));
            }
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: content.error ? content.result : null
            }));
            _context5.next = 14;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
            if (deleteUsersActionState.loading) {
              setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
            }
          case 14:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 10]]);
    }));
    return function handleDeleteUser(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delete several users from API
   */
  var handleDeleteSeveralUsers = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(code) {
      var payload, requestOptions, response, content, users;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
              loading: true
            }));
            payload = {
              users_id: selectedUsers
            };
            if (code) {
              payload.deleted_action_code = code;
            }
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(payload)
            };
            _context6.next = 8;
            return fetch("".concat(ordering.root, "/users"), requestOptions);
          case 8:
            response = _context6.sent;
            _context6.next = 11;
            return response.json();
          case 11:
            content = _context6.sent;
            if (!content.error) {
              users = usersList.users.filter(function (user) {
                return !selectedUsers.includes(user.id);
              });
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                users: users
              }));
              setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
                total: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) - selectedUsers.length
              }));
              setSelectedUsers([]);
              setDeleteUsersActionState({
                loading: false,
                error: null
              });
              showToast(_ToastContext.ToastType.Success, t('USER_DELETED', 'User deleted'));
            } else {
              setDeleteUsersActionState({
                loading: false,
                error: content.result
              });
            }
            _context6.next = 18;
            break;
          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            setDeleteUsersActionState({
              loading: false,
              error: [_context6.t0.message]
            });
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 15]]);
    }));
    return function handleDeleteSeveralUsers(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Method to change selected users
   * @param {Number} userId user id to change selected state
   */
  var handleSelectedUsers = function handleSelectedUsers(userId) {
    var _selectedUsers;
    if (selectedUsers.includes(userId)) {
      _selectedUsers = selectedUsers.filter(function (id) {
        return id !== userId;
      });
    } else {
      _selectedUsers = [].concat(_toConsumableArray(selectedUsers), [userId]);
    }
    setSelectedUsers(_selectedUsers);
  };

  /**
   * Method to update users
   * @param {Object} updatedUser updated user
   */
  var handleSuccessUpdate = function handleSuccessUpdate(updatedUser) {
    var users = usersList.users.filter(function (user) {
      if (user.id === updatedUser.id) {
        Object.assign(user, updatedUser);
      }
      return true;
    });
    setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
      users: users
    }));
  };
  /**
   * Method to add user
   * @param {Object} newUser new user to add
   */
  var handleSuccessAddUser = function handleSuccessAddUser(newUser) {
    if (userTypesSelected.includes(newUser === null || newUser === void 0 ? void 0 : newUser.level)) {
      setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
        users: [].concat(_toConsumableArray(usersList.users), [newUser])
      }));
      setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
        total: paginationDetail !== null && paginationDetail !== void 0 && paginationDetail.total ? (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) + 1 : 1
      }));
    }
  };
  /**
   * Method to delete user
   * @param {Object} user new user to delete
   */
  var handleSuccessDeleteUser = function handleSuccessDeleteUser(user) {
    if (userTypesSelected.includes(user === null || user === void 0 ? void 0 : user.level)) {
      setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
        users: usersList.users.filter(function (_user) {
          return _user.id !== user.id;
        })
      }));
      setPaginationDetail(_objectSpread(_objectSpread({}, paginationDetail), {}, {
        total: (paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total) - 1
      }));
    }
  };
  /**
   * Method to update addresses of selected user
   * @param {number, Array} useId and addresses updated addresses
   */
  var handleSuccessAddressesUpdate = function handleSuccessAddressesUpdate(userId, addresses) {
    var users = usersList.users.filter(function (user) {
      if (user.id === userId) {
        user.addresses = _toConsumableArray(addresses);
      }
      return true;
    });
    setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
      users: users
    }));
  };

  /**
   * Method to get the drivers groups from API
   */
  var getDriversGroups = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var requestOptions, response, content, _content$result, found, driverManagerGroups;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context7.next = 5;
            return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);
          case 5:
            response = _context7.sent;
            _context7.next = 8;
            return response.json();
          case 8:
            content = _context7.sent;
            if (!content.error) {
              found = content.result.find(function (group) {
                var _session$user2;
                return (group === null || group === void 0 ? void 0 : group.administrator_id) === (session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id);
              });
              if (found) setActionDisabled(false);else setActionDisabled(true);
              driverManagerGroups = (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.filter(function (group) {
                var _session$user3;
                return group.administrator_id === (session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
              });
              setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
                groups: driverManagerGroups,
                loading: false
              }));
            }
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function getDriversGroups() {
      return _ref7.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _session$user4;
    if ((session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 5) {
      getDriversGroups();
    } else {
      setActionDisabled(false);
    }
  }, [session]);
  (0, _react.useEffect)(function () {
    if (usersList.loading) return;
    getUsers(1, null);
  }, [userTypesSelected, selectedUserActiveState, searchValue, isVerified, selectedOccupation]);
  (0, _react.useEffect)(function () {
    if ((Object.keys(filterValues === null || filterValues === void 0 ? void 0 : filterValues.changes).length > 0 || filterValues.clear) && !usersList.loading) getUsers(1, null);
  }, [filterValues]);
  (0, _react.useEffect)(function () {
    getUsers(1, null);
  }, [multiFilterValues]);
  (0, _react.useEffect)(function () {
    if (!usersList.loading) getUsers(1, null);
  }, [orderFilterValue]);
  (0, _react.useEffect)(function () {
    if (isProfessional) {
      getOccupations();
    }
  }, [isProfessional]);
  (0, _react.useEffect)(function () {
    events.on('occupations_update', function (data) {
      setOccupationsState(_objectSpread(_objectSpread({}, occupationsState), {}, {
        occupations: data
      }));
    });
    return function () {
      events.off('occupations_update');
    };
  }, [events]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    usersList: usersList,
    filterValues: filterValues,
    setFilterValues: setFilterValues,
    userTypesSelected: userTypesSelected,
    handleSelectedUserTypes: handleSelectedUserTypes,
    paginationProps: paginationProps,
    getUsers: getUsers,
    searchValue: searchValue,
    onSearch: setSearchValue,
    paginationDetail: paginationDetail,
    selectedUserActiveState: selectedUserActiveState,
    isVerified: isVerified,
    setIsVerified: setIsVerified,
    handleChangeUserActiveState: handleChangeUserActiveState,
    handleChangeUserType: handleChangeUserType,
    handleChangeActiveUser: handleChangeActiveUser,
    handleDeleteUser: handleDeleteUser,
    selectedUsers: selectedUsers,
    handleSelectedUsers: handleSelectedUsers,
    deleteUsersActionState: deleteUsersActionState,
    handleDeleteSeveralUsers: handleDeleteSeveralUsers,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessAddUser: handleSuccessAddUser,
    handleSuccessDeleteUser: handleSuccessDeleteUser,
    handleSuccessAddressesUpdate: handleSuccessAddressesUpdate,
    occupationsState: occupationsState,
    selectedOccupation: selectedOccupation,
    handleSelectOccupation: setSelectedOccupation,
    setSelectedUsers: setSelectedUsers,
    orderFilterValue: orderFilterValue,
    handleChangeOrderFilterValue: setOrderFilterValue,
    multiFilterValues: multiFilterValues,
    handleChangeMultiFilterValues: handleChangeMultiFilterValues,
    actionDisabled: actionDisabled,
    driversGroupsState: driversGroupsState
  })));
};
UsersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Enable/Disable search option
   * Search Users list by a user ID
   */
  isSearchByUserId: _propTypes.default.bool,
  /**
   * Enable/Disable search option
   * Search Users list by a user email
   */
  isSearchByUserEmail: _propTypes.default.bool,
  /**
   * Enable/Disable search option
   * Search Users list by a user phone
   */
  isSearchByUserPhone: _propTypes.default.bool,
  /**
   * Array of user props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string)
};
UsersList.defaultProps = {
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'schedule', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'max_days_in_future', 'address_notes', 'driver_zone_restriction', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'birthdate', 'drivergroups', 'created_at', 'timezone'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  defaultUserTypesSelected: [0, 1, 2, 3],
  defaultUserActiveState: true
};