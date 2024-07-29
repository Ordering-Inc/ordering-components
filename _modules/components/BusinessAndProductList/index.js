"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAndProductList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _OrderContext = require("../../contexts/OrderContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _ToastContext = require("../../contexts/ToastContext");
var _CustomerContext = require("../../contexts/CustomerContext");
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
_dayjs.default.extend(_utc.default);
var BusinessAndProductList = exports.BusinessAndProductList = function BusinessAndProductList(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _businessState$busine12, _orderState$options20, _orderState$options21, _orderState$options22;
  var isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    slug = props.slug,
    categoryId = props.categoryId,
    productId = props.productId,
    isInitialRender = props.isInitialRender,
    ordering = props.ordering,
    businessProps = props.businessProps,
    menusProps = props.menusProps,
    isGetMenus = props.isGetMenus,
    UIComponent = props.UIComponent,
    location = props.location,
    avoidProductDuplicate = props.avoidProductDuplicate,
    isApp = props.isApp,
    isFetchAllProducts = props.isFetchAllProducts,
    isCustomerMode = props.isCustomerMode;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    removeProduct = _useOrder2[1].removeProduct;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    languageState = _useLanguage2[0],
    t = _useLanguage2[1];
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    customerState = _useCustomer2[0];
  var _useState3 = (0, _react.useState)({
      id: null,
      name: t('ALL', 'All')
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    categorySelected = _useState4[0],
    setCategorySelected = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    sortByValue = _useState8[0],
    setSortByValue = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    filterByMenus = _useState10[0],
    setFilterByMenus = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    professionalSelected = _useState12[0],
    setProfessionalSelected = _useState12[1];
  var _useState13 = (0, _react.useState)({
      business: {},
      menus: null,
      loading: !props.avoidBusinessLoading,
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    businessState = _useState14[0],
    setBusinessState = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loadedFirstTime = _useState16[0],
    setLoadedFirstTime = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    categoriesState = _useState18[0],
    setCategoriesState = _useState18[1];
  var _useState19 = (0, _react.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    orderOptions = _useState20[0],
    setOrderOptions = _useState20[1];
  var _useState21 = (0, _react.useState)({
      product: null,
      loading: false,
      error: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    productModal = _useState22[0],
    setProductModal = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    notFound = _useState24[0],
    setNotFound = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    featuredProducts = _useState26[0],
    setFeaturedProducts = _useState26[1];
  var _useState27 = (0, _react.useState)({
      values: []
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    openCategories = _useState28[0],
    setOpenCategories = _useState28[1];
  var _useState29 = (0, _react.useState)({
      min: null,
      max: null
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    priceFilterValues = _useState30[0],
    setPriceFilterValues = _useState30[1];
  var requestsState = {};
  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: isApp ? 5 : 20,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };
  var _useState31 = (0, _react.useState)(categoryStateDefault),
    _useState32 = _slicedToArray(_useState31, 2),
    categoryState = _useState32[0],
    setCategoryState = _useState32[1];
  var _useState33 = (0, _react.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    errors = _useState34[0],
    setErrors = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    errorQuantityProducts = _useState36[0],
    setErrorQuantityProducts = _useState36[1];
  var categoryKey = searchValue ? 'search' : categorySelected.id === 'featured' ? 'featured' : categorySelected.id ? "categoryId:".concat(categorySelected.id) : 'all';
  var isUseParentCategory = (configs === null || configs === void 0 || (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 || (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1';

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  var handleChangeCategory = function handleChangeCategory(category) {
    var _category$subcategori;
    if (category !== null && category !== void 0 && (_category$subcategori = category.subcategories) !== null && _category$subcategori !== void 0 && _category$subcategori.length) {
      if (!(category !== null && category !== void 0 && category.parent_category_id) && !openCategories.values.includes(category.id)) {
        openCategories.values = [];
      }
      if (openCategories.values.includes(category.id)) {
        openCategories.values = openCategories.values.filter(function (categoryId) {
          return categoryId !== category.id;
        });
      } else {
        openCategories.values.push(category.id);
      }
      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: openCategories.values
      }));
    }
    if ((category === null || category === void 0 ? void 0 : category.id) === null) {
      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: []
      }));
    }
    setCategorySelected(category);
  };
  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  var handleChangeSortBy = function handleChangeSortBy(val) {
    setSortByValue(val);
  };
  var handleChangeFilterByMenus = function handleChangeFilterByMenus(val) {
    setFilterByMenus(val);
  };
  var handleChangePriceFilterValues = function handleChangePriceFilterValues(name, value) {
    setPriceFilterValues(_objectSpread(_objectSpread({}, priceFilterValues), {}, _defineProperty({}, name, value)));
  };
  var isMatchSearch = function isMatchSearch(name, description, price) {
    if (!searchValue && !(priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min) && !(priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max)) return true;
    return (searchValue ? name && name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByName : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min ? parseFloat(price) >= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min) : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max ? parseFloat(price) <= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max) : true) || (searchValue ? description && description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByDescription : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min ? parseFloat(price) >= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min) : true) && (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max ? parseFloat(price) <= parseFloat(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max) : true);
  };
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  var isFeaturedSearch = function isFeaturedSearch(product) {
    if (product.featured) {
      if (!searchValue) return true;
      return product.name && product.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByName || product.description && product.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(searchValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) && isSearchByDescription;
    }
    return false;
  };
  var sortProductsArray = function sortProductsArray(option, array) {
    var _array;
    if (option === 'rank' || option === null) {
      _array = array.sort(function (a, b) {
        return a.rank - b.rank;
      });
    }
    if (option === 'rank_desc') {
      _array = array.sort(function (a, b) {
        return b.rank - a.rank;
      });
    }
    if (option === 'a-z') {
      _array = array.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    }
    setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
      products: _array
    }));
  };
  var subCategoriesList = [];
  var _iterateCategories = function iterateCategories(categories) {
    return (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && (categories === null || categories === void 0 ? void 0 : categories.forEach(function (category) {
      subCategoriesList.push(category);
      _iterateCategories(category.subcategories);
    }));
  };

  /**
   * Method to change professional
   * @param {object} professional a professional info
   */
  var handleChangeProfessionalSelected = function handleChangeProfessionalSelected(professional) {
    setProfessionalSelected(professional);
  };
  var handleUpdateProducts = function handleUpdateProducts(productId, changes) {
    var _categoryState, _categoriesState$feat, _businessState$busine;
    var updatedProducts = (_categoryState = categoryState) === null || _categoryState === void 0 ? void 0 : _categoryState.products.map(function (product) {
      if ((product === null || product === void 0 ? void 0 : product.id) === productId) {
        return _objectSpread(_objectSpread({}, product), changes);
      }
      return product;
    });
    setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
      products: updatedProducts
    }));
    if (categoriesState !== null && categoriesState !== void 0 && (_categoriesState$feat = categoriesState.featured) !== null && _categoriesState$feat !== void 0 && _categoriesState$feat.products) {
      var _categoriesState$feat2;
      var updatedFeaturedProducts = categoriesState === null || categoriesState === void 0 || (_categoriesState$feat2 = categoriesState.featured) === null || _categoriesState$feat2 === void 0 ? void 0 : _categoriesState$feat2.products.map(function (product) {
        if ((product === null || product === void 0 ? void 0 : product.id) === productId) {
          return _objectSpread(_objectSpread({}, product), changes);
        }
        return product;
      });
      setCategoriesState(_objectSpread(_objectSpread({}, categoriesState), {}, {
        featured: _objectSpread(_objectSpread({}, categoriesState.featured), {}, {
          products: updatedFeaturedProducts
        })
      }));
    }
    var updatedCategories = businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 || (_businessState$busine = _businessState$busine.categories) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.map(function (_category) {
      var updatedProducts = _category === null || _category === void 0 ? void 0 : _category.products.map(function (_product) {
        if ((_product === null || _product === void 0 ? void 0 : _product.id) === productId) {
          return _objectSpread(_objectSpread({}, _product), changes);
        }
        return _product;
      });
      return _objectSpread(_objectSpread({}, _category), {}, {
        products: updatedProducts
      });
    });
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
        categories: updatedCategories
      })
    }));
  };
  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _categoryState$produc;
      var i, _ref2, _businessState$busine2, _businessState$busine3, _category$products, category, isFeatured, categoryState, _businessState$busine4, _ref3, _businessState$busine5, _businessState$busine6, _categories$find, _subCategoriesList$fi, _businessState$busine7, categoriesList, categories, parentCategory, categoryFinded, productsFiltered, _businessState$busine8, _productsFiltered, _businessState$busine10, _categoriesCustom, _businessState$busine9, customCategories, productsToFilter, _productsFiltered2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            i = 0;
          case 1:
            if (!((_ref2 = i < (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 || (_businessState$busine2 = _businessState$busine2.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.length)) !== null && _ref2 !== void 0 ? _ref2 : 0)) {
              _context.next = 10;
              break;
            }
            category = businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.categories[i];
            isFeatured = category === null || category === void 0 || (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.some(function (product) {
              return product.featured;
            });
            if (!isFeatured) {
              _context.next = 7;
              break;
            }
            setFeaturedProducts(isFeatured);
            return _context.abrupt("break", 10);
          case 7:
            i++;
            _context.next = 1;
            break;
          case 10:
            categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
              loading: false
            });
            if (categorySelected.id !== 'featured' && categorySelected.id !== null) {
              _iterateCategories(businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.categories);
              categoriesList = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.categories.map(function (category) {
                return category.children;
              })));
              categories = isUseParentCategory ? categoriesList : businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.categories;
              parentCategory = (_categories$find = categories === null || categories === void 0 ? void 0 : categories.find(function (category) {
                return category.category_id === categorySelected.id;
              })) !== null && _categories$find !== void 0 ? _categories$find : {};
              categoryFinded = (_subCategoriesList$fi = subCategoriesList.find(function (subCat) {
                return subCat.id === parentCategory.category_id;
              })) !== null && _subCategoriesList$fi !== void 0 ? _subCategoriesList$fi : {};
              productsFiltered = businessState === null || businessState === void 0 || (_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 || (_businessState$busine7 = _businessState$busine7.categories) === null || _businessState$busine7 === void 0 || (_businessState$busine7 = _businessState$busine7.find(function (category) {
                return category.id === (isUseParentCategory ? parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.parent_category_id : categorySelected.id);
              })) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.products.filter(function (product) {
                var _categoryFinded$child;
                return isUseParentCategory ? (categoryFinded === null || categoryFinded === void 0 || (_categoryFinded$child = categoryFinded.children) === null || _categoryFinded$child === void 0 ? void 0 : _categoryFinded$child.some(function (cat) {
                  return cat.category_id === (product === null || product === void 0 ? void 0 : product.category_id);
                })) && isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price) : isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price);
              });
              categoryState.products = productsFiltered || [];
            } else if (categorySelected.id === 'featured') {
              _productsFiltered = businessState === null || businessState === void 0 || (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 || (_businessState$busine8 = _businessState$busine8.categories) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.reduce(function (products, category) {
                return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
              }, []).filter(function (product) {
                return isFeaturedSearch(product);
              });
              categoryState.products = _productsFiltered || [];
            } else {
              _categoriesCustom = null;
              if (avoidProductDuplicate) {
                customCategories = ['favorites'];
                _categoriesCustom = businessState === null || businessState === void 0 || (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 || (_businessState$busine9 = _businessState$busine9.categories) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.filter(function (_ref4) {
                  var id = _ref4.id;
                  return !customCategories.includes(id);
                });
              }
              productsToFilter = avoidProductDuplicate ? _categoriesCustom : businessState === null || businessState === void 0 || (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.categories;
              _productsFiltered2 = productsToFilter === null || productsToFilter === void 0 ? void 0 : productsToFilter.reduce(function (products, category) {
                return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
              }, []).filter(function (product) {
                return isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price);
              });
              categoryState.products = _productsFiltered2 || [];
            }
            setErrorQuantityProducts(!((_categoryState$produc = categoryState.products) !== null && _categoryState$produc !== void 0 && _categoryState$produc.length));
            setCategoryState(_objectSpread({}, categoryState));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getProducts() {
      return _ref.apply(this, arguments);
    };
  }();
  var getLazyProducts = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref5) {
      var _orderState$options$t, _orderState$options, _orderState$options2, _orderState$options3, _where, _where2;
      var page, _ref5$pageSize, pageSize, parameters, _orderState$options4, moment, where, searchConditions, source, promises, functionFetch, productEndpoint, _where3;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            page = _ref5.page, _ref5$pageSize = _ref5.pageSize, pageSize = _ref5$pageSize === void 0 ? categoryStateDefault.pagination.pageSize : _ref5$pageSize;
            parameters = _objectSpread(_objectSpread(_objectSpread({
              type: (_orderState$options$t = (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) !== null && _orderState$options$t !== void 0 ? _orderState$options$t : 1
            }, !isFetchAllProducts && {
              page: page
            }), !isFetchAllProducts && {
              page_size: pageSize
            }), !isFetchAllProducts && {
              orderBy: 'rank'
            });
            if ((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.moment && isValidMoment((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            if (sortByValue) {
              parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue;
            }
            where = null;
            searchConditions = [];
            if (searchValue) {
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
            }
            if (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.min) {
              searchConditions.push({
                attribute: 'price',
                value: {
                  condition: '>=',
                  value: encodeURI(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.min)
                }
              });
            }
            if (priceFilterValues !== null && priceFilterValues !== void 0 && priceFilterValues.max) {
              searchConditions.push({
                attribute: 'price',
                value: {
                  condition: '<=',
                  value: encodeURI(priceFilterValues === null || priceFilterValues === void 0 ? void 0 : priceFilterValues.max)
                }
              });
            }
            where = {
              conditions: searchConditions,
              conector: 'OR'
            };
            if (categorySelected.id === 'featured') {
              parameters.params = 'features';
            }
            if (categorySelected.id === 'featured' && searchValue) {
              parameters.params = 'features';
              where = {
                conditions: [{
                  conditions: searchConditions,
                  conector: 'OR'
                }],
                conector: 'AND'
              };
            }
            source = {};
            requestsState.products = source;
            promises = [];
            functionFetch = categorySelected.id && categorySelected.id !== 'featured' ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products() : ((_where = where) === null || _where === void 0 || (_where = _where.conditions) === null || _where === void 0 ? void 0 : _where.length) === 0 ? ordering.businesses(businessState.business.id).categories() : ordering.businesses(businessState.business.id).products();
            productEndpoint = ((_where2 = where) === null || _where2 === void 0 || (_where2 = _where2.conditions) === null || _where2 === void 0 ? void 0 : _where2.length) > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
            _context2.t0 = promises;
            _context2.next = 20;
            return productEndpoint.get({
              cancelToken: source
            });
          case 20:
            _context2.t1 = _context2.sent;
            _context2.t0.push.call(_context2.t0, _context2.t1);
            if (!(isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured'))) {
              _context2.next = 30;
              break;
            }
            parameters.params = 'features';
            productEndpoint = ((_where3 = where) === null || _where3 === void 0 || (_where3 = _where3.conditions) === null || _where3 === void 0 ? void 0 : _where3.length) > 0 ? ordering.businesses(businessState.business.id).products().parameters(parameters).where(where) : ordering.businesses(businessState.business.id).products().parameters(parameters);
            _context2.t2 = promises;
            _context2.next = 28;
            return productEndpoint.get({
              cancelToken: source
            });
          case 28:
            _context2.t3 = _context2.sent;
            _context2.t2.push.call(_context2.t2, _context2.t3);
          case 30:
            return _context2.abrupt("return", promises);
          case 31:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getLazyProducts(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  var loadProducts = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _categoriesState$cate, _curCategoryState$pro, _businessState$busine11;
      var _ref8,
        newFetch,
        curCategoryState,
        isLazy,
        pageSize,
        _featuredRes$content,
        _featuredRes$content3,
        _yield$getLazyProduct,
        _yield$getLazyProduct2,
        lazyRes,
        featuredRes,
        content,
        error,
        result,
        pagination,
        errorsList,
        _featuredRes$content2,
        _featuredRes$content4,
        _featuredRes$content5,
        _featuredRes$content6,
        _featuredRes$content7,
        _oldFeatured$products,
        _featuredRes$content8,
        _featureState$product,
        oldFeatured,
        featureState,
        _newcategoryState$pro,
        _categoriesState$feat3,
        newcategoryState,
        isFeatured,
        _ref9,
        _featuredRes$content$,
        _featuredRes$content9,
        _categoriesState$feat4,
        _categoriesState$feat5,
        _curCategoryState$pag,
        _featuredRes$content10,
        _featuredRes$content11,
        _featuredRes$content12,
        _categoriesState$feat6,
        productsList,
        productsListFeatured,
        paginationData,
        _newcategoryState,
        _isFeatured,
        _err$constructor,
        _err$message,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref8 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, newFetch = _ref8.newFetch;
            setErrors(null);
            curCategoryState = (_categoriesState$cate = categoriesState[categoryKey]) !== null && _categoriesState$cate !== void 0 ? _categoriesState$cate : categoryStateDefault;
            if (!(!newFetch && (curCategoryState.pagination.currentPage > 0 && curCategoryState.pagination.currentPage === curCategoryState.pagination.totalPages || (curCategoryState === null || curCategoryState === void 0 || (_curCategoryState$pro = curCategoryState.products) === null || _curCategoryState$pro === void 0 ? void 0 : _curCategoryState$pro.length) > 0 && curCategoryState.pagination.totalPages > 0))) {
              _context3.next = 6;
              break;
            }
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: false
            }));
            return _context3.abrupt("return");
          case 6:
            isLazy = !!(businessState !== null && businessState !== void 0 && (_businessState$busine11 = businessState.business) !== null && _businessState$busine11 !== void 0 && _businessState$busine11.lazy_load_products_recommended);
            if (isLazy) {
              _context3.next = 10;
              break;
            }
            getProducts();
            return _context3.abrupt("return");
          case 10:
            pageSize = categoryStateDefault.pagination.pageSize;
            _context3.prev = 11;
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: true
            }));
            _context3.next = 15;
            return getLazyProducts({
              page: 1,
              pageSize: pageSize
            });
          case 15:
            _yield$getLazyProduct = _context3.sent;
            _yield$getLazyProduct2 = _slicedToArray(_yield$getLazyProduct, 2);
            lazyRes = _yield$getLazyProduct2[0];
            featuredRes = _yield$getLazyProduct2[1];
            content = lazyRes.content;
            error = content === null || content === void 0 ? void 0 : content.error;
            result = content === null || content === void 0 ? void 0 : content.result;
            pagination = content === null || content === void 0 ? void 0 : content.pagination;
            errorsList = [];
            if (error) {
              errorsList.push(result[0]);
            }
            if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content = featuredRes.content) !== null && _featuredRes$content !== void 0 && _featuredRes$content.error) {
              errorsList.push(featuredRes === null || featuredRes === void 0 || (_featuredRes$content2 = featuredRes.content) === null || _featuredRes$content2 === void 0 ? void 0 : _featuredRes$content2.result[0]);
            }
            if (!(errorsList !== null && errorsList !== void 0 && errorsList.length)) {
              _context3.next = 30;
              break;
            }
            setErrors(errorsList[0]);
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: false
            }));
            return _context3.abrupt("return");
          case 30:
            if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content3 = featuredRes.content) !== null && _featuredRes$content3 !== void 0 && (_featuredRes$content3 = _featuredRes$content3.result) !== null && _featuredRes$content3 !== void 0 && _featuredRes$content3.length) {
              oldFeatured = categoriesState === null || categoriesState === void 0 ? void 0 : categoriesState.featured;
              featureState = {
                pagination: _objectSpread(_objectSpread({}, oldFeatured === null || oldFeatured === void 0 ? void 0 : oldFeatured.pagination), {}, {
                  currentPage: featuredRes === null || featuredRes === void 0 || (_featuredRes$content4 = featuredRes.content) === null || _featuredRes$content4 === void 0 || (_featuredRes$content4 = _featuredRes$content4.pagination) === null || _featuredRes$content4 === void 0 ? void 0 : _featuredRes$content4.current_page,
                  totalItems: featuredRes === null || featuredRes === void 0 || (_featuredRes$content5 = featuredRes.content) === null || _featuredRes$content5 === void 0 || (_featuredRes$content5 = _featuredRes$content5.pagination) === null || _featuredRes$content5 === void 0 ? void 0 : _featuredRes$content5.total,
                  totalPages: featuredRes === null || featuredRes === void 0 || (_featuredRes$content6 = featuredRes.content) === null || _featuredRes$content6 === void 0 || (_featuredRes$content6 = _featuredRes$content6.pagination) === null || _featuredRes$content6 === void 0 ? void 0 : _featuredRes$content6.total_pages
                }),
                loading: false,
                products: newFetch ? _toConsumableArray(featuredRes === null || featuredRes === void 0 || (_featuredRes$content7 = featuredRes.content) === null || _featuredRes$content7 === void 0 ? void 0 : _featuredRes$content7.result) : oldFeatured === null || oldFeatured === void 0 || (_oldFeatured$products = oldFeatured.products) === null || _oldFeatured$products === void 0 ? void 0 : _oldFeatured$products.concat(featuredRes === null || featuredRes === void 0 || (_featuredRes$content8 = featuredRes.content) === null || _featuredRes$content8 === void 0 ? void 0 : _featuredRes$content8.result)
              };
              setErrorQuantityProducts(!((_featureState$product = featureState.products) !== null && _featureState$product !== void 0 && _featureState$product.length));
              categoriesState.featured = featureState;
            }
            if (categorySelected.id && categorySelected.id !== 'featured') {
              newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, curCategoryState.pagination), {}, {
                  currentPage: pagination.current_page,
                  totalItems: pagination.total,
                  totalPages: pagination.total_pages
                }),
                loading: false,
                products: result
              };
              setErrorQuantityProducts(!((_newcategoryState$pro = newcategoryState.products) !== null && _newcategoryState$pro !== void 0 && _newcategoryState$pro.length));
              categoriesState[categoryKey] = newcategoryState;
              categoryState = newcategoryState;
              setCategoryState(_objectSpread({}, newcategoryState));
              setCategoriesState(_objectSpread({}, categoriesState));
              isFeatured = categoriesState.all.products.some(function (product) {
                return product.featured;
              }) || (categoriesState === null || categoriesState === void 0 || (_categoriesState$feat3 = categoriesState.featured) === null || _categoriesState$feat3 === void 0 || (_categoriesState$feat3 = _categoriesState$feat3.products) === null || _categoriesState$feat3 === void 0 ? void 0 : _categoriesState$feat3.some(function (product) {
                return product.featured;
              }));
              setFeaturedProducts(isFeatured);
            }
            if (!(categorySelected.id && categorySelected.id !== 'featured')) {
              productsList = searchValue ? _toConsumableArray(result) : (_ref9 = []).concat.apply(_ref9, _toConsumableArray(result.map(function (category) {
                return category === null || category === void 0 ? void 0 : category.products;
              }))).filter(function (item) {
                return item;
              });
              productsListFeatured = (_featuredRes$content$ = featuredRes === null || featuredRes === void 0 || (_featuredRes$content9 = featuredRes.content) === null || _featuredRes$content9 === void 0 ? void 0 : _featuredRes$content9.result) !== null && _featuredRes$content$ !== void 0 ? _featuredRes$content$ : [];
              paginationData = categorySelected.id === 'featured' ? (_categoriesState$feat4 = categoriesState === null || categoriesState === void 0 || (_categoriesState$feat5 = categoriesState.featured) === null || _categoriesState$feat5 === void 0 ? void 0 : _categoriesState$feat5.pagination) !== null && _categoriesState$feat4 !== void 0 ? _categoriesState$feat4 : {} : (_curCategoryState$pag = curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.pagination) !== null && _curCategoryState$pag !== void 0 ? _curCategoryState$pag : {};
              _newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, paginationData), {}, {
                  currentPage: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content10 = featuredRes.content) === null || _featuredRes$content10 === void 0 || (_featuredRes$content10 = _featuredRes$content10.pagination) === null || _featuredRes$content10 === void 0 ? void 0 : _featuredRes$content10.current_page : pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                  totalItems: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content11 = featuredRes.content) === null || _featuredRes$content11 === void 0 || (_featuredRes$content11 = _featuredRes$content11.pagination) === null || _featuredRes$content11 === void 0 ? void 0 : _featuredRes$content11.total : pagination === null || pagination === void 0 ? void 0 : pagination.total,
                  totalPages: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content12 = featuredRes.content) === null || _featuredRes$content12 === void 0 || (_featuredRes$content12 = _featuredRes$content12.pagination) === null || _featuredRes$content12 === void 0 ? void 0 : _featuredRes$content12.total_pages : pagination === null || pagination === void 0 ? void 0 : pagination.total_pages
                }),
                loading: false,
                products: categorySelected.id === 'featured' ? productsListFeatured : searchValue ? [].concat(_toConsumableArray(productsListFeatured), _toConsumableArray(productsList)).filter(function (product, i, _hash) {
                  return _hash.findIndex(function (_product) {
                    return (_product === null || _product === void 0 ? void 0 : _product.id) === (product === null || product === void 0 ? void 0 : product.id);
                  }) === i;
                }) : [].concat(_toConsumableArray(productsListFeatured), _toConsumableArray(curCategoryState.products.concat(productsList)))
              };
              categoriesState[categoryKey] = _newcategoryState;
              setCategoryState(_objectSpread({}, _newcategoryState));
              setCategoriesState(_objectSpread({}, categoriesState));
              _isFeatured = categoriesState.all.products.some(function (product) {
                return product.featured;
              }) || (categoriesState === null || categoriesState === void 0 || (_categoriesState$feat6 = categoriesState.featured) === null || _categoriesState$feat6 === void 0 || (_categoriesState$feat6 = _categoriesState$feat6.products) === null || _categoriesState$feat6 === void 0 ? void 0 : _categoriesState$feat6.some(function (product) {
                return product.featured;
              }));
              setFeaturedProducts(_isFeatured);
            }
            _context3.next = 38;
            break;
          case 35:
            _context3.prev = 35;
            _context3.t0 = _context3["catch"](11);
            if ((_context3.t0 === null || _context3.t0 === void 0 || (_err$constructor = _context3.t0.constructor) === null || _err$constructor === void 0 ? void 0 : _err$constructor.name) !== 'Cancel') {
              setErrors([(_err$message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']);
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
            }
          case 38:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[11, 35]]);
    }));
    return function loadProducts() {
      return _ref7.apply(this, arguments);
    };
  }();
  var loadMoreProducts = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _categoriesState$cate2;
      var curCategoryState, _featuredRes$content13, _yield$getLazyProduct3, _yield$getLazyProduct4, lazyRes, featuredRes, content, error, result, pagination, errorsList, _featuredRes$content14, _featuredRes$content15, _featuredRes$content16, _featuredRes$content17, _oldFeatured$products2, _featuredRes$content$2, _featuredRes$content18, oldFeatured, featureState, _curCategoryState$pro2, _categoriesState$all, _categoriesState$feat7, newcategoryState, isFeatured, _ref11, _featuredRes$content$3, _featuredRes$content19, _categoriesState$feat8, _categoriesState$feat9, _curCategoryState$pag2, _featuredRes$content20, _featuredRes$content21, _featuredRes$content22, _curCategoryState$pro3, _curCategoryState$pro4, _categoriesState$all2, _categoriesState$feat10, productsList, productsListFeatured, paginationData, _newcategoryState2, _isFeatured2, _err$constructor2, _err$message2;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setErrors(null);
            curCategoryState = (_categoriesState$cate2 = categoriesState[categoryKey]) !== null && _categoriesState$cate2 !== void 0 ? _categoriesState$cate2 : categoryStateDefault;
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: true
            }));
            _context4.prev = 3;
            _context4.next = 6;
            return getLazyProducts({
              page: curCategoryState.pagination.currentPage + 1
            });
          case 6:
            _yield$getLazyProduct3 = _context4.sent;
            _yield$getLazyProduct4 = _slicedToArray(_yield$getLazyProduct3, 2);
            lazyRes = _yield$getLazyProduct4[0];
            featuredRes = _yield$getLazyProduct4[1];
            content = lazyRes.content;
            error = content === null || content === void 0 ? void 0 : content.error;
            result = content === null || content === void 0 ? void 0 : content.result;
            pagination = content === null || content === void 0 ? void 0 : content.pagination;
            errorsList = [];
            if (error) {
              errorsList.push(result[0]);
            }
            if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content13 = featuredRes.content) !== null && _featuredRes$content13 !== void 0 && _featuredRes$content13.error) {
              errorsList.push(featuredRes === null || featuredRes === void 0 || (_featuredRes$content14 = featuredRes.content) === null || _featuredRes$content14 === void 0 ? void 0 : _featuredRes$content14.result[0]);
            }
            if (!(errorsList !== null && errorsList !== void 0 && errorsList.length)) {
              _context4.next = 21;
              break;
            }
            setErrors(errorsList[0]);
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: false
            }));
            return _context4.abrupt("return");
          case 21:
            if (featuredRes) {
              oldFeatured = categoriesState === null || categoriesState === void 0 ? void 0 : categoriesState.featured;
              featureState = {
                pagination: _objectSpread(_objectSpread({}, oldFeatured === null || oldFeatured === void 0 ? void 0 : oldFeatured.pagination), {}, {
                  currentPage: featuredRes === null || featuredRes === void 0 || (_featuredRes$content15 = featuredRes.content) === null || _featuredRes$content15 === void 0 || (_featuredRes$content15 = _featuredRes$content15.pagination) === null || _featuredRes$content15 === void 0 ? void 0 : _featuredRes$content15.current_page,
                  totalItems: featuredRes === null || featuredRes === void 0 || (_featuredRes$content16 = featuredRes.content) === null || _featuredRes$content16 === void 0 || (_featuredRes$content16 = _featuredRes$content16.pagination) === null || _featuredRes$content16 === void 0 ? void 0 : _featuredRes$content16.total,
                  totalPages: featuredRes === null || featuredRes === void 0 || (_featuredRes$content17 = featuredRes.content) === null || _featuredRes$content17 === void 0 || (_featuredRes$content17 = _featuredRes$content17.pagination) === null || _featuredRes$content17 === void 0 ? void 0 : _featuredRes$content17.total_pages
                }),
                loading: false,
                products: [].concat(_toConsumableArray((_oldFeatured$products2 = oldFeatured === null || oldFeatured === void 0 ? void 0 : oldFeatured.products) !== null && _oldFeatured$products2 !== void 0 ? _oldFeatured$products2 : []), _toConsumableArray((_featuredRes$content$2 = featuredRes === null || featuredRes === void 0 || (_featuredRes$content18 = featuredRes.content) === null || _featuredRes$content18 === void 0 ? void 0 : _featuredRes$content18.result) !== null && _featuredRes$content$2 !== void 0 ? _featuredRes$content$2 : []))
              };
              categoriesState.featured = featureState;
            }
            if (categorySelected.id && categorySelected.id !== 'featured') {
              newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.pagination), {}, {
                  currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                  totalItems: pagination === null || pagination === void 0 ? void 0 : pagination.total,
                  totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.total_pages
                }),
                loading: false,
                products: [].concat(_toConsumableArray((_curCategoryState$pro2 = curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.products) !== null && _curCategoryState$pro2 !== void 0 ? _curCategoryState$pro2 : []), _toConsumableArray(result))
              };
              categoriesState[categoryKey] = newcategoryState;
              categoryState = _objectSpread(_objectSpread({}, categoryState), newcategoryState);
              setCategoryState(_objectSpread(_objectSpread({}, categoryState), newcategoryState));
              setCategoriesState(_objectSpread({}, categoriesState));
              isFeatured = (categoriesState === null || categoriesState === void 0 || (_categoriesState$all = categoriesState.all) === null || _categoriesState$all === void 0 || (_categoriesState$all = _categoriesState$all.products) === null || _categoriesState$all === void 0 ? void 0 : _categoriesState$all.some(function (product) {
                return product.featured;
              })) || (categoriesState === null || categoriesState === void 0 || (_categoriesState$feat7 = categoriesState.featured) === null || _categoriesState$feat7 === void 0 || (_categoriesState$feat7 = _categoriesState$feat7.products) === null || _categoriesState$feat7 === void 0 ? void 0 : _categoriesState$feat7.some(function (product) {
                return product.featured;
              }));
              setFeaturedProducts(isFeatured);
            }
            if (!(categorySelected.id && categorySelected.id !== 'featured')) {
              productsList = (_ref11 = []).concat.apply(_ref11, _toConsumableArray(result.map(function (category) {
                return category === null || category === void 0 ? void 0 : category.products;
              }))).filter(function (item) {
                return item;
              });
              productsListFeatured = (_featuredRes$content$3 = featuredRes === null || featuredRes === void 0 || (_featuredRes$content19 = featuredRes.content) === null || _featuredRes$content19 === void 0 ? void 0 : _featuredRes$content19.result) !== null && _featuredRes$content$3 !== void 0 ? _featuredRes$content$3 : [];
              paginationData = categorySelected.id === 'featured' ? (_categoriesState$feat8 = categoriesState === null || categoriesState === void 0 || (_categoriesState$feat9 = categoriesState.featured) === null || _categoriesState$feat9 === void 0 ? void 0 : _categoriesState$feat9.pagination) !== null && _categoriesState$feat8 !== void 0 ? _categoriesState$feat8 : {} : (_curCategoryState$pag2 = curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.pagination) !== null && _curCategoryState$pag2 !== void 0 ? _curCategoryState$pag2 : {};
              _newcategoryState2 = {
                pagination: _objectSpread(_objectSpread({}, paginationData), {}, {
                  currentPage: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content20 = featuredRes.content) === null || _featuredRes$content20 === void 0 || (_featuredRes$content20 = _featuredRes$content20.pagination) === null || _featuredRes$content20 === void 0 ? void 0 : _featuredRes$content20.current_page : pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                  totalItems: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content21 = featuredRes.content) === null || _featuredRes$content21 === void 0 || (_featuredRes$content21 = _featuredRes$content21.pagination) === null || _featuredRes$content21 === void 0 ? void 0 : _featuredRes$content21.total : pagination === null || pagination === void 0 ? void 0 : pagination.total,
                  totalPages: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content22 = featuredRes.content) === null || _featuredRes$content22 === void 0 || (_featuredRes$content22 = _featuredRes$content22.pagination) === null || _featuredRes$content22 === void 0 ? void 0 : _featuredRes$content22.total_pages : pagination === null || pagination === void 0 ? void 0 : pagination.total_pages
                }),
                loading: false,
                products: categorySelected.id === 'featured' ? productsListFeatured : [].concat(_toConsumableArray(productsListFeatured), _toConsumableArray((_curCategoryState$pro3 = curCategoryState === null || curCategoryState === void 0 || (_curCategoryState$pro4 = curCategoryState.products) === null || _curCategoryState$pro4 === void 0 ? void 0 : _curCategoryState$pro4.concat(productsList)) !== null && _curCategoryState$pro3 !== void 0 ? _curCategoryState$pro3 : []))
              };
              categoriesState[categoryKey] = _newcategoryState2;
              categoryState = _newcategoryState2;
              setCategoryState(_objectSpread({}, _newcategoryState2));
              setCategoriesState(_objectSpread({}, categoriesState));
              _isFeatured2 = (categoriesState === null || categoriesState === void 0 || (_categoriesState$all2 = categoriesState.all) === null || _categoriesState$all2 === void 0 || (_categoriesState$all2 = _categoriesState$all2.products) === null || _categoriesState$all2 === void 0 ? void 0 : _categoriesState$all2.some(function (product) {
                return product.featured;
              })) || (categoriesState === null || categoriesState === void 0 || (_categoriesState$feat10 = categoriesState.featured) === null || _categoriesState$feat10 === void 0 || (_categoriesState$feat10 = _categoriesState$feat10.products) === null || _categoriesState$feat10 === void 0 ? void 0 : _categoriesState$feat10.some(function (product) {
                return product.featured;
              }));
              setFeaturedProducts(_isFeatured2);
            }
            setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
              loading: false
            }));
            _context4.next = 30;
            break;
          case 27:
            _context4.prev = 27;
            _context4.t0 = _context4["catch"](3);
            if ((_context4.t0 === null || _context4.t0 === void 0 || (_err$constructor2 = _context4.t0.constructor) === null || _err$constructor2 === void 0 ? void 0 : _err$constructor2.name) !== 'Cancel') {
              setErrors([(_err$message2 = _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']);
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
            }
          case 30:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[3, 27]]);
    }));
    return function loadMoreProducts() {
      return _ref10.apply(this, arguments);
    };
  }();
  var getProduct = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _props$product, _props$product2, _props$product3;
      var _orderState$options5, _orderState$options6, _orderState$options7, _orderState$options8, _props$product4, _props$product5, _props$product6, source, parameters, _orderState$options9, moment, _yield$ordering$busin, result, product;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(categoryId && productId && businessState.business.id || (_props$product = props.product) !== null && _props$product !== void 0 && _props$product.businessId && (_props$product2 = props.product) !== null && _props$product2 !== void 0 && _props$product2.categoryId && (_props$product3 = props.product) !== null && _props$product3 !== void 0 && _props$product3.id)) {
              _context5.next = 19;
              break;
            }
            _context5.prev = 1;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            parameters = {
              type: ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) || 1,
              moment: ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.moment) || null
            };
            if ((_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.moment && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            _context5.next = 9;
            return ordering.businesses(businessState.business.id || ((_props$product4 = props.product) === null || _props$product4 === void 0 ? void 0 : _props$product4.businessId)).categories(categoryId || ((_props$product5 = props.product) === null || _props$product5 === void 0 ? void 0 : _props$product5.categoryId)).products(productId || ((_props$product6 = props.product) === null || _props$product6 === void 0 ? void 0 : _props$product6.id)).parameters(parameters).get({
              cancelToken: source
            });
          case 9:
            _yield$ordering$busin = _context5.sent;
            result = _yield$ordering$busin.content.result;
            product = Array.isArray(result) ? null : result;
            setNotFound(!result);
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              product: product,
              loading: false
            }));
            _context5.next = 19;
            break;
          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](1);
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: false,
              error: [_context5.t0]
            }));
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 16]]);
    }));
    return function getProduct() {
      return _ref12.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : _businessState$busine12.id), isInitialRender]);
  var getBusiness = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _orderState$options10, _orderState$options11, _orderState$options12, _orderState$options13, _orderState$options14, _orderState$options15, _customerState$user, _result$categories, source, parameters, _orderState$options16, moment, _customerState$user2, _yield$ordering$busin2, result, data, _yield$ordering$busin3, menus;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            source = {};
            requestsState.business = source;
            parameters = {
              version: 'v2',
              type: ((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type) || 1,
              location: location ? "".concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng) : (_orderState$options11 = orderState.options) !== null && _orderState$options11 !== void 0 && (_orderState$options11 = _orderState$options11.address) !== null && _orderState$options11 !== void 0 && _orderState$options11.location ? "".concat((_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 || (_orderState$options12 = _orderState$options12.address) === null || _orderState$options12 === void 0 || (_orderState$options12 = _orderState$options12.location) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.lat, ",").concat((_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 || (_orderState$options13 = _orderState$options13.address) === null || _orderState$options13 === void 0 || (_orderState$options13 = _orderState$options13.location) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.lng) : null
            };
            if ((_orderState$options14 = orderState.options) !== null && _orderState$options14 !== void 0 && _orderState$options14.moment && isValidMoment((_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            if (filterByMenus) {
              parameters.menu_id = filterByMenus;
            }
            if (professionalSelected) {
              parameters.professional_id = professionalSelected === null || professionalSelected === void 0 ? void 0 : professionalSelected.id;
            }
            if (isCustomerMode && customerState !== null && customerState !== void 0 && (_customerState$user = customerState.user) !== null && _customerState$user !== void 0 && _customerState$user.id) {
              parameters.user_id = customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id;
            }
            _context6.next = 11;
            return ordering.businesses(slug).select(businessProps).parameters(parameters).get({
              cancelToken: source
            });
          case 11:
            _yield$ordering$busin2 = _context6.sent;
            result = _yield$ordering$busin2.content.result;
            setErrorQuantityProducts(!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 || (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0);
            data = _objectSpread(_objectSpread({}, businessState), {}, {
              business: result,
              loading: false
            });
            if (!(menusProps && isGetMenus)) {
              _context6.next = 21;
              break;
            }
            _context6.next = 18;
            return ordering.businesses(result.id).menus().select(menusProps).get();
          case 18:
            _yield$ordering$busin3 = _context6.sent;
            menus = _yield$ordering$busin3.content.result;
            data.menus = menus;
          case 21:
            setBusinessState(data);
            setLoadedFirstTime(true);
            _context6.next = 29;
            break;
          case 25:
            _context6.prev = 25;
            _context6.t0 = _context6["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
            setLoadedFirstTime(true);
          case 29:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 25]]);
    }));
    return function getBusiness() {
      return _ref13.apply(this, arguments);
    };
  }();
  var multiRemoveProducts = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(unavailableProducts, carts) {
      var allPromise;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            allPromise = [];
            unavailableProducts.forEach(function (product) {
              allPromise.push(new Promise(function (resolve, reject) {
                resolve(removeProduct(product, carts));
              }));
            });
            _context7.next = 4;
            return Promise.all(allPromise);
          case 4:
            _context7.t0 = _context7.sent;
            if (!_context7.t0) {
              _context7.next = 7;
              break;
            }
            setAlertState({
              open: true,
              content: [t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.')]
            });
          case 7:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function multiRemoveProducts(_x2, _x3) {
      return _ref14.apply(this, arguments);
    };
  }();
  var handleUpdateProfessionals = function handleUpdateProfessionals(selectedProfessional) {
    var _businessState$busine13;
    var professionals = businessState === null || businessState === void 0 || (_businessState$busine13 = businessState.business) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.professionals.map(function (professional) {
      if ((selectedProfessional === null || selectedProfessional === void 0 ? void 0 : selectedProfessional.id) === (professional === null || professional === void 0 ? void 0 : professional.id)) {
        return _objectSpread(_objectSpread({}, professional), selectedProfessional);
      }
      return professional;
    });
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
        professionals: professionals
      })
    }));
  };
  var _updateCategories = function updateCategories(categories, result) {
    return categories.map(function (category) {
      if (category.id === result.id) {
        return _objectSpread(_objectSpread({}, category), result);
      }
      if (Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.length > 0) {
        return _objectSpread(_objectSpread({}, category), {}, {
          subcategories: _updateCategories(category.subcategories, result)
        });
      }
      return category;
    });
  };
  var updateStoreProduct = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(categoryId, productId) {
      var updateParams,
        _businessState$busine14,
        _yield$ordering$busin4,
        _yield$ordering$busin5,
        result,
        error,
        updatedProducts,
        _args8 = arguments;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            updateParams = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};
            _context8.prev = 1;
            _context8.next = 4;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 ? void 0 : _businessState$busine14.id).categories(categoryId).products(productId).save(updateParams);
          case 4:
            _yield$ordering$busin4 = _context8.sent;
            _yield$ordering$busin5 = _yield$ordering$busin4.content;
            result = _yield$ordering$busin5.result;
            error = _yield$ordering$busin5.error;
            if (!error) {
              updatedProducts = categoryState.products.map(function (product) {
                if (product.id === result.id) {
                  return _objectSpread(_objectSpread({}, product), result);
                }
                return product;
              });
              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                products: updatedProducts
              }));
              showToast(_ToastContext.ToastType.Success, result !== null && result !== void 0 && result.enabled ? t('ENABLED_PRODUCT', 'Enabled product') : t('DISABLED_PRODUCT', 'Disabled product'));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context8.next = 14;
            break;
          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](1);
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 11]]);
    }));
    return function updateStoreProduct(_x4, _x5) {
      return _ref15.apply(this, arguments);
    };
  }();
  var updateStoreCategory = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(categoryId) {
      var updateParams,
        _businessState$busine15,
        _yield$ordering$busin6,
        _yield$ordering$busin7,
        result,
        error,
        updatedCategories,
        updatedBusiness,
        _args9 = arguments;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            updateParams = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
            _context9.prev = 1;
            _context9.next = 4;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine15 = businessState.business) === null || _businessState$busine15 === void 0 ? void 0 : _businessState$busine15.id).categories(categoryId).save(updateParams);
          case 4:
            _yield$ordering$busin6 = _context9.sent;
            _yield$ordering$busin7 = _yield$ordering$busin6.content;
            result = _yield$ordering$busin7.result;
            error = _yield$ordering$busin7.error;
            if (!error) {
              updatedCategories = _updateCategories(businessState === null || businessState === void 0 ? void 0 : businessState.business.categories, result);
              updatedBusiness = _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
                categories: updatedCategories
              });
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: updatedBusiness
              }));
              showToast(_ToastContext.ToastType.Success, result !== null && result !== void 0 && result.enabled ? t('ENABLED_CATEGORY', 'Enabled category') : t('DISABLED_CATEGORY', 'Disabled category'));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context9.next = 14;
            break;
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](1);
            showToast(_ToastContext.ToastType.Error, _context9.t0.message);
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[1, 11]]);
    }));
    return function updateStoreCategory(_x6) {
      return _ref16.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!businessState.loading) {
      loadProducts({
        newFetch: true
      });
    }
  }, [businessState.loading]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: !!searchValue
    });
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: !!searchValue
    });
  }, [categorySelected.id]);
  (0, _react.useEffect)(function () {
    var _categoryState2;
    loadProducts({
      newFetch: !!searchValue
    });
    sortProductsArray(sortByValue, (_categoryState2 = categoryState) === null || _categoryState2 === void 0 ? void 0 : _categoryState2.products);
  }, [sortByValue]);
  (0, _react.useEffect)(function () {
    loadProducts();
  }, [slug]);
  (0, _react.useEffect)(function () {
    loadProducts({
      newFetch: true
    });
  }, [priceFilterValues]);
  (0, _react.useEffect)(function () {
    var _Object$keys;
    if (!orderState.loading && ((_Object$keys = Object.keys(orderOptions || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 && !languageState.loading && !props.avoidBusinessLoading) {
      getBusiness();
    }
  }, [JSON.stringify(orderOptions), languageState.loading, slug, filterByMenus, professionalSelected]);
  (0, _react.useEffect)(function () {
    var _Object$keys2;
    if (!orderState.loading && ((_Object$keys2 = Object.keys(orderOptions || {})) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.length) > 0 && !languageState.loading && !businessState.loading && props.avoidBusinessLoading) {
      getBusiness();
    }
  }, [JSON.stringify(orderOptions), languageState.loading, slug, filterByMenus, professionalSelected]);

  /**
   * getBusiness if orderState is loading the first time when is rendered
   */
  (0, _react.useEffect)(function () {
    var _Object$keys3;
    if (props.product && !orderState.loading && !((_Object$keys3 = Object.keys(businessState.business)) !== null && _Object$keys3 !== void 0 && _Object$keys3.length)) {
      getBusiness();
    }
  }, [orderState.loading]);

  /**
   * getProduct when login after guest
   */
  (0, _react.useEffect)(function () {
    var _props$product7, _props$product8, _props$product9;
    if ((_props$product7 = props.product) !== null && _props$product7 !== void 0 && _props$product7.businessId && (_props$product8 = props.product) !== null && _props$product8 !== void 0 && _props$product8.categoryId && (_props$product9 = props.product) !== null && _props$product9 !== void 0 && _props$product9.id && !orderState.loading) {
      getProduct();
    }
  }, [props.product]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading) {
      var _orderState$options17, _orderState$options18, _orderState$options19;
      setOrderOptions({
        type: orderState === null || orderState === void 0 || (_orderState$options17 = orderState.options) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.type,
        moment: orderState === null || orderState === void 0 || (_orderState$options18 = orderState.options) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.moment,
        location: orderState === null || orderState === void 0 || (_orderState$options19 = orderState.options) === null || _orderState$options19 === void 0 || (_orderState$options19 = _orderState$options19.address) === null || _orderState$options19 === void 0 ? void 0 : _orderState$options19.location
      });
    }
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.loading, orderState === null || orderState === void 0 || (_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.type, orderState === null || orderState === void 0 || (_orderState$options21 = orderState.options) === null || _orderState$options21 === void 0 ? void 0 : _orderState$options21.moment, JSON.stringify(orderState === null || orderState === void 0 || (_orderState$options22 = orderState.options) === null || _orderState$options22 === void 0 || (_orderState$options22 = _orderState$options22.address) === null || _orderState$options22 === void 0 ? void 0 : _orderState$options22.location)]);

  /**
   * Cancel business request
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.business]);

  /**
   * Cancel products request on unmount and pagination
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    sortByValue: sortByValue,
    filterByMenus: filterByMenus,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    openCategories: openCategories.values,
    featuredProducts: featuredProducts,
    errorQuantityProducts: errorQuantityProducts,
    categoriesState: categoriesState,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    handleChangeSortBy: handleChangeSortBy,
    handleChangeFilterByMenus: handleChangeFilterByMenus,
    getNextProducts: loadMoreProducts,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    },
    multiRemoveProducts: multiRemoveProducts,
    setAlertState: setAlertState,
    alertState: alertState,
    handleUpdateProducts: handleUpdateProducts,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected,
    priceFilterValues: priceFilterValues,
    handleChangePriceFilterValues: handleChangePriceFilterValues,
    handleUpdateProfessionals: handleUpdateProfessionals,
    notFound: notFound,
    setNotFound: setNotFound,
    updateStoreCategory: updateStoreCategory,
    updateStoreProduct: updateStoreProduct,
    loadedFirstTime: loadedFirstTime
  })));
};
BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessAndProductList.defaultProps = {};