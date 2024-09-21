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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
    brandId = props.brandId;
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
    _useState10 = _slicedToArray(_useState9, 2),
    termValue = _useState10[0],
    setTermValue = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    citiesState = _useState12[0],
    setCitiesState = _useState12[1];
  var showCities = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.business_listing_view) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.components) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.cities) !== null && _orderingTheme$theme !== void 0 && _orderingTheme$theme.hidden);
  (0, _react.useEffect)(function () {
    var _Object$keys, _orderState$options;
    !lazySearch && (((_Object$keys = Object.keys((orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 || defaultLocation) && handleSearchbusinessAndProducts(true);
  }, [filters, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : orderState.options)]);
  var handleChangeTermValue = function handleChangeTermValue(val) {
    setTermValue(val);
    if ((termValue === null || termValue === void 0 ? void 0 : termValue.length) === 0 || (termValue === null || termValue === void 0 ? void 0 : termValue.length) >= 2) {
      handleSearchbusinessAndProducts(true, {}, val);
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
            filtParams = (val === null || val === void 0 ? void 0 : val.length) >= 3 ? "&term=".concat(encodeURI("%".concat(val, "%"))) : '';
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