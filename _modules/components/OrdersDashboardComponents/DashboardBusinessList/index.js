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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t8 in e) "default" !== _t8 && {}.hasOwnProperty.call(e, _t8) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t8)) && (i.get || i.set) ? o(f, _t8, i) : f[_t8] = e[_t8]); return f; })(e, t); }
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(pageSize, page, isInactive) {
      var where, conditions, options, searchConditions, _filterValues$availab, _filterValues$menus, filterConditons, _filterValues$availab2, _filterValues$availab3, _filterValues$menus2, _filterValues$menus3, functionFetch;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
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
            _context.n = 1;
            return functionFetch.get(options);
          case 1:
            return _context.a(2, _context.v);
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$ordering$count, _yield$ordering$count2, error, result, enabled, cities, _iterator, _step, country, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
              loading: true
            }));
            _context2.n = 1;
            return ordering.countries().get();
          case 1:
            _yield$ordering$count = _context2.v;
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
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t = _context2.v;
            setCountriesState(_objectSpread(_objectSpread({}, countriesState), {}, {
              loading: false,
              error: [_t.message]
            }));
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function getCountries() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to load businesses
   */
  var loadBusinesses = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var response, _err$constructor, _t2;
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
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context3.n = 2;
            return getBusinesses(initialPageSize || pagination.pageSize, 1);
          case 2:
            response = _context3.v;
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
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t2 = _context3.v;
            if ((_t2 === null || _t2 === void 0 || (_err$constructor = _t2.constructor) === null || _err$constructor === void 0 ? void 0 : _err$constructor.name) !== 'Cancel') {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_t2.message]
              }));
            }
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function loadBusinesses() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses
   */
  var getInActiveBusinesses = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var response, _response$content, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (session.token) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.p = 1;
            _context4.n = 2;
            return getBusinesses(10, 1, true);
          case 2:
            response = _context4.v;
            if (!response.content.error) {
              setInActiveBusinesses(response === null || response === void 0 || (_response$content = response.content) === null || _response$content === void 0 ? void 0 : _response$content.result);
            }
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t3 = _context4.v;
            console.log(_t3);
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function getInActiveBusinesses() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses more
   */
  var loadMoreBusinesses = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var response, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context5.p = 1;
            _context5.n = 2;
            return getBusinesses(loadMorePageSize, Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.to) / loadMorePageSize) + 1);
          case 2:
            response = _context5.v;
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
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t4 = _context5.v;
            if (_t4.constructor.name !== 'Cancel') {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_t4.message]
              }));
            }
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function loadMoreBusinesses() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses for page and pageSize
   */
  var getPageBusinesses = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(pageSize, page) {
      var response, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            _context6.p = 1;
            _context6.n = 2;
            return getBusinesses(pageSize, page);
          case 2:
            response = _context6.v;
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
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t5 = _context6.v;
            if (_t5.constructor.name !== 'Cancel') {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: [_t5.message]
              }));
            }
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
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
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(enabled) {
      var isFeatured,
        changes,
        requestOptions,
        response,
        content,
        updatedBusinessList,
        _args7 = arguments,
        _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            isFeatured = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;
            _context7.p = 1;
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
            _context7.n = 2;
            return fetch("".concat(ordering.root, "/business"), requestOptions);
          case 2:
            response = _context7.v;
            _context7.n = 3;
            return response.json();
          case 3:
            content = _context7.v;
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
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t6 = _context7.v;
            showToast(_ToastContext.ToastType.Error, _t6.message);
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 4]]);
    }));
    return function handleEnableAllBusiness(_x6) {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to delete business list
   */
  var handleDeleteMultiBusinesses = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var requestOptions, response, content, updatedBusinessList, _t7;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
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
            _context8.n = 1;
            return fetch("".concat(ordering.root, "/business"), requestOptions);
          case 1:
            response = _context8.v;
            _context8.n = 2;
            return response.json();
          case 2:
            content = _context8.v;
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
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t7 = _context8.v;
            showToast(_ToastContext.ToastType.Error, _t7.message);
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 3]]);
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