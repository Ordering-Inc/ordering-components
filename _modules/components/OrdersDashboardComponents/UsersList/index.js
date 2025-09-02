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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t8 in e) "default" !== _t8 && {}.hasOwnProperty.call(e, _t8) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t8)) && (i.get || i.set) ? o(f, _t8, i) : f[_t8] = e[_t8]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(page, pageSize) {
      var _session$user, parameters, paginationParams, where, conditions, verifiedConditions, searchConditions, _filterValues$changes, _filterValues$changes2, filterConditions, _filterValues$changes3, _multiFilterValues$or, filterConditons, _multiFilterValues$or2, _multiFilterValues$or3, fetchEndpoint, content, response, requestOptions, _fetchEndpoint, _response, _content, result, pagination, error, nextPageItems, remainingItems, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
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
              _context.n = 2;
              break;
            }
            fetchEndpoint = where ? ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters).where(where) : ordering.setAccessToken(session.token).users().select(propsToFetch).parameters(parameters);
            _context.n = 1;
            return fetchEndpoint.get();
          case 1:
            response = _context.v;
            content = response.content;
            _context.n = 5;
            break;
          case 2:
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _fetchEndpoint = where ? "".concat(ordering.root, "/professionals?page=").concat(page, "&page_size=").concat(pageSize, "&&where=").concat(JSON.stringify(where)) : "".concat(ordering.root, "/professionals?page=").concat(page, "&page_size=").concat(pageSize);
            _context.n = 3;
            return fetch(_fetchEndpoint, requestOptions);
          case 3:
            _response = _context.v;
            _context.n = 4;
            return _response.json();
          case 4:
            content = _context.v;
          case 5:
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
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setUsersList(_objectSpread(_objectSpread({}, usersList), {}, {
                loading: false,
                error: [_t.message]
              }));
            }
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[0, 6]]);
    }));
    return function getUsers(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Get the occupations from API
   */
  var getOccupations = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var requestOptions, response, content, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
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
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/occupations"), requestOptions);
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            content = _context2.v;
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
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setOccupationsState(_objectSpread(_objectSpread({}, occupationsState), {}, {
              loading: false,
              error: [_t2.message]
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(user) {
      var requestsState, source, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, users, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestsState = {};
            source = {};
            requestsState.updateOrder = source;
            _context3.n = 1;
            return ordering.setAccessToken(session.token).users(user.id).save({
              level: user.level
            }, {
              cancelToken: source
            });
          case 1:
            _yield$ordering$setAc = _context3.v;
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
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t3.message]
            }));
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
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
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(user) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, users, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context4.n = 1;
            return ordering.setAccessToken(session.token).users(user.id).save({
              enabled: user.enabled
            });
          case 1:
            _yield$ordering$setAc3 = _context4.v;
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
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t4 = _context4.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t4.message]
            }));
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
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
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(userId) {
      var _yield$ordering$setAc5, content, users, _selectedUsers, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context5.n = 1;
            return ordering.setAccessToken(session.token).users(userId).delete();
          case 1:
            _yield$ordering$setAc5 = _context5.v;
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
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t5.message]
            }));
            if (deleteUsersActionState.loading) {
              setDeleteUsersActionState(_objectSpread(_objectSpread({}, deleteUsersActionState), {}, {
                loading: false,
                error: [_t5.message]
              }));
            }
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return function handleDeleteUser(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to delete several users from API
   */
  var handleDeleteSeveralUsers = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(code) {
      var payload, requestOptions, response, content, users, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
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
            _context6.n = 1;
            return fetch("".concat(ordering.root, "/users"), requestOptions);
          case 1:
            response = _context6.v;
            _context6.n = 2;
            return response.json();
          case 2:
            content = _context6.v;
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
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            setDeleteUsersActionState({
              loading: false,
              error: [_t6.message]
            });
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
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
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var requestOptions, response, content, _content$result, found, driverManagerGroups, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
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
            _context7.n = 1;
            return fetch("".concat(ordering.root, "/drivergroups"), requestOptions);
          case 1:
            response = _context7.v;
            _context7.n = 2;
            return response.json();
          case 2:
            content = _context7.v;
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
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t7 = _context7.v;
            setDriversGroupsState(_objectSpread(_objectSpread({}, driversGroupsState), {}, {
              loading: false,
              error: [_t7.message]
            }));
          case 4:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 3]]);
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