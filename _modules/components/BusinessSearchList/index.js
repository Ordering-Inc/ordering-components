"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSearchList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _OrderContext = require("../../contexts/OrderContext");
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
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessSearchList = exports.BusinessSearchList = function BusinessSearchList(props) {
  var _paginationSettings$p, _orderingTheme$theme, _orderState$options2;
  var UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings,
    lazySearch = props.lazySearch,
    defaultTerm = props.defaultTerm,
    defaultLocation = props.defaultLocation,
    brandId = props.brandId,
    isIos = props.isIos;
  var _useState = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null,
      lengthError: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessesSearchList = _useState2[0],
    setBusinessesSearchList = _useState2[1];
  /**
   * brandList, this must be contain a brands, loading and error to send UIComponent
   */
  var _useState3 = (0, _react.useState)({
      loading: true,
      brands: [],
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    brandList = _useState4[0],
    setBrandList = _useState4[1];
  var _useState5 = (0, _react.useState)({
      currentPage: 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    paginationProps = _useState6[0],
    setPaginationProps = _useState6[1];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrderingTheme = (0, _OrderingThemeContext.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useState7 = (0, _react.useState)({
      business_types: [],
      orderBy: 'distance',
      franchise_ids: [],
      price_level: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    filters = _useState8[0],
    setFilters = _useState8[1];
  var _useState9 = (0, _react.useState)(defaultTerm || ''),
    _useState0 = _slicedToArray(_useState9, 2),
    termValue = _useState0[0],
    setTermValue = _useState0[1];
  var _useState1 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    citiesState = _useState10[0],
    setCitiesState = _useState10[1];
  var showCities = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.business_listing_view) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.components) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.cities) !== null && _orderingTheme$theme !== void 0 && _orderingTheme$theme.hidden);
  (0, _react.useEffect)(function () {
    var _Object$keys, _orderState$options;
    !lazySearch && (((_Object$keys = Object.keys((orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 || defaultLocation) && handleSearchbusinessAndProducts(true);
  }, [filters, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : orderState.options)]);
  var handleChangeTermValue = function handleChangeTermValue(val) {
    var returnAllProductsValidation = (val === null || val === void 0 ? void 0 : val.length) < 2 && (termValue === null || termValue === void 0 ? void 0 : termValue.length) >= 2;
    setTermValue(val);
    if (returnAllProductsValidation || (val === null || val === void 0 ? void 0 : val.length) >= 2) {
      var valueLoweredCase = val.toLowerCase();
      handleSearchbusinessAndProducts(true, {}, valueLoweredCase);
    }
  };
  var cityId = orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.city_id;
  var handleChangeFilters = function handleChangeFilters(filterName, filterValue) {
    if (filterName === 'orderBy') {
      var ascdesc = filterValue === (filters === null || filters === void 0 ? void 0 : filters.orderBy) ? filterValue.includes('-') ? filterValue : "-".concat(filterValue) : filterValue;
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        orderBy: ascdesc
      }));
    } else {
      setFilters(_objectSpread(_objectSpread({}, filters), {}, _defineProperty({}, filterName, filterValue)));
    }
  };

  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */
  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    var updatedBusinesses = businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinessesSearchList(_objectSpread(_objectSpread({}, businessesSearchList), {}, {
      businesses: updatedBusinesses === null || updatedBusinesses === void 0 ? void 0 : updatedBusinesses.filter(function (_business) {
        return cityId ? (_business === null || _business === void 0 ? void 0 : _business.city_id) === cityId : _business;
      })
    }));
  };

  /**
   * Method to update business list
   * @param {number} productId product id
   * @param {number} categoryId category id
   * @param {number} businessId business id
   * @param {object} changes product info
   */
  var handleUpdateProducts = function handleUpdateProducts(productId, categoryId, businessId, changes) {
    var updatedBusinesses = businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        var updatedCategories = business === null || business === void 0 ? void 0 : business.categories.map(function (category) {
          if ((category === null || category === void 0 ? void 0 : category.id) === categoryId) {
            var updateProducts = category === null || category === void 0 ? void 0 : category.products.map(function (product) {
              if ((product === null || product === void 0 ? void 0 : product.id) === productId) {
                return _objectSpread(_objectSpread({}, product), changes);
              }
              return product;
            });
            return _objectSpread(_objectSpread({}, category), {}, {
              products: updateProducts
            });
          }
          return category;
        });
        return _objectSpread(_objectSpread({}, business), {}, {
          categories: updatedCategories
        });
      }
      return business;
    });
    setBusinessesSearchList(_objectSpread(_objectSpread({}, businessesSearchList), {}, {
      businesses: updatedBusinesses === null || updatedBusinesses === void 0 ? void 0 : updatedBusinesses.filter(function (_business) {
        return cityId ? (_business === null || _business === void 0 ? void 0 : _business.city_id) === cityId : _business;
      })
    }));
  };
  var handleSearchbusinessAndProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, options, val) {
      var _orderState$options3, _orderState$options4, _orderState$options5, _orderState$options6, filtParams, where, requestOptions, location, response, _yield$response$json, result, error, pagination, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            filtParams = (val === null || val === void 0 ? void 0 : val.length) >= 3 ? "&term=".concat(isIos ? val : encodeURI(val)) : '';
            Object.keys(filters).map(function (key) {
              var _filters$key;
              if (!filters[key] && filters[key] !== 0 || filters[key] === 'default' || ((_filters$key = filters[key]) === null || _filters$key === void 0 ? void 0 : _filters$key.length) === 0) return;
              Array.isArray(filters[key]) ? filtParams = filtParams + "&".concat(key, "=[").concat(filters[key], "]") : filtParams = filtParams + "&".concat(key, "=").concat(filters[key]);
            });
            filtParams = filtParams + ((orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 1 && defaultLocation ? '&max_distance=20000' : '');
            filtParams = filtParams + "&page=".concat(newFetch ? 1 : paginationProps.currentPage + 1, "&page_size=").concat(paginationProps.pageSize);
            brandId && (filtParams = filtParams + "&franchise_ids=[".concat(brandId, "]"));
            where = '';
            if (cityId) {
              where = {
                conditions: [{
                  attribute: 'city_id',
                  value: cityId
                }],
                conector: 'AND'
              };
              where = "&where=".concat(JSON.stringify(where));
            }
            setBusinessesSearchList(function (prevProps) {
              return _objectSpread(_objectSpread({}, prevProps), {}, {
                loading: true,
                lengthError: false
              });
            });
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            location = {
              lat: ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.location) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.lat) || (defaultLocation === null || defaultLocation === void 0 ? void 0 : defaultLocation.lat),
              lng: ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.location) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.lng) || (defaultLocation === null || defaultLocation === void 0 ? void 0 : defaultLocation.lng)
            };
            _context.next = 13;
            return fetch("".concat(ordering.root, "/search?order_type_id=").concat(orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type).concat(filtParams, "&location=").concat(JSON.stringify((options === null || options === void 0 ? void 0 : options.location) || location)).concat(where), requestOptions);
          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();
          case 16:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            pagination = _yield$response$json.pagination;
            if (!error) {
              _context.next = 23;
              break;
            }
            setBusinessesSearchList(function () {
              return {
                businesses: [],
                loading: false,
                error: result,
                lengthError: false
              };
            });
            return _context.abrupt("return");
          case 23:
            nextPageItems = 0;
            if (pagination.current_page !== pagination.total_pages) {
              remainingItems = pagination.total - result.length;
              nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
            }
            setPaginationProps(function (prevProps) {
              return _objectSpread(_objectSpread({}, prevProps), {}, {
                currentPage: pagination.current_page,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                nextPageItems: nextPageItems
              });
            });
            setBusinessesSearchList(function (prevProps) {
              var _ref2;
              return _objectSpread(_objectSpread({}, prevProps), {}, {
                businesses: cityId ? (_ref2 = newFetch ? result : [].concat(_toConsumableArray(prevProps === null || prevProps === void 0 ? void 0 : prevProps.businesses), _toConsumableArray(result))) === null || _ref2 === void 0 ? void 0 : _ref2.filter(function (_business) {
                  return (_business === null || _business === void 0 ? void 0 : _business.city_id) === cityId;
                }) : newFetch ? result : [].concat(_toConsumableArray(prevProps === null || prevProps === void 0 ? void 0 : prevProps.businesses), _toConsumableArray(result)),
                loading: false,
                lengthError: false
              });
            });
            _context.next = 32;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](0);
            setBusinessesSearchList(function () {
              return {
                businesses: [],
                loading: false,
                error: _context.t0.message,
                lengthError: false
              };
            });
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 29]]);
    }));
    return function handleSearchbusinessAndProducts(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
  * Function to get brand list from API
  */
  var getBrandList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            _context2.next = 5;
            return fetch("".concat(ordering.root, "/franchises"), requestOptions);
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            content = _context2.sent;
            if (!content.error) {
              setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
                loading: false,
                brands: content === null || content === void 0 ? void 0 : content.result,
                error: null
              }));
            } else {
              setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              }));
            }
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getBrandList() {
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
  (0, _react.useEffect)(function () {
    getBrandList();
  }, []);
  (0, _react.useEffect)(function () {
    if (showCities) {
      getCities();
    }
  }, [showCities]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    paginationProps: paginationProps,
    businessesSearchList: businessesSearchList,
    handleChangeFilters: handleChangeFilters,
    filters: filters,
    termValue: termValue,
    handleSearchbusinessAndProducts: handleSearchbusinessAndProducts,
    handleChangeTermValue: handleChangeTermValue,
    setFilters: setFilters,
    brandList: brandList,
    handleUpdateBusinessList: handleUpdateBusinessList,
    handleUpdateProducts: handleUpdateProducts,
    citiesState: citiesState
  })));
};
BusinessSearchList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessSearchList.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};