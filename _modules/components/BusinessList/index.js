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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(newFetch, specificPagination, prev) {
      var _configs$location_def, _configs$location_def2, _orderState$options3, _orderState$options4, _orderState$options5, _orderState$options6, _orderState$options1, _orderState$options10, _orderState$options14, defaultLatitude, defaultLongitude, isInvalidDefaultLocation, defaultLocation, parameters, _orderState$options7, _orderState$options8, _orderState$options9, _orderState$options0, paginationParams, _orderState$options11, moment, where, conditions, _orderState$options12, _orderState$options13, searchConditions, isSpecialCharacter, _orderState$options15, _paginationParams, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination, _result, offerBuesinesses, nextPageItems, remainingItems, businesses, fromIndex, toIndex, element, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
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
            _context.n = 1;
            return fetchEndpoint.get({
              cancelToken: source,
              advancedSearch: advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3
            });
          case 1:
            _yield$fetchEndpoint$ = _context.v;
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
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: true,
                fetched: true,
                result: [_t.message]
              }));
              setFirstLoad(true);
            }
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function getBusinesses(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Get franchise info from API
   */
  var getFranchise = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
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
            _context2.n = 1;
            return fetch(functionFetch, requestOptions);
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context2.v;
            result = _yield$response$json.result;
            if (result !== null && result !== void 0 && result.enabled) setFranchiseEnabled(result === null || result === void 0 ? void 0 : result.enabled);else setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function getFranchise() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var requestOptions, response, _yield$response$json2, result, error, pagination;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
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
            _context3.n = 1;
            return fetch("".concat(ordering.root, "/countries"), requestOptions);
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context3.v;
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
          case 3:
            return _context3.a(2);
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