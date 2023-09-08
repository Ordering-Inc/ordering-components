"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _EventContext = require("../../../contexts/EventContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessProductsListing = function BusinessProductsListing(props) {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _businessState$busine8, _ref7;
  var isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    slug = props.slug,
    categoryId = props.categoryId,
    productId = props.productId,
    isAllCategoryProducts = props.isAllCategoryProducts,
    isInitialRender = props.isInitialRender,
    ordering = props.ordering,
    UIComponent = props.UIComponent;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    categorySelected = _useState2[0],
    setCategorySelected = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)({
      business: {},
      menus: null,
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    businessState = _useState6[0],
    setBusinessState = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    categoriesState = _useState8[0],
    setCategoriesState = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    requestsState = _useState10[0],
    setRequestsState = _useState10[1];
  var _useState11 = (0, _react.useState)({
      product: null,
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    productModal = _useState12[0],
    setProductModal = _useState12[1];
  var _useState13 = (0, _react.useState)({
      values: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    openCategories = _useState14[0],
    setOpenCategories = _useState14[1];
  var _useState15 = (0, _react.useState)(slug),
    _useState16 = _slicedToArray(_useState15, 2),
    businessSlug = _useState16[0],
    setBusinessSlug = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isUpdateMode = _useState18[0],
    setIsUpdateMode = _useState18[1];
  var _useState19 = (0, _react.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    taxes = _useState20[0],
    setTaxes = _useState20[1];
  var _useState21 = (0, _react.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    fees = _useState22[0],
    setFees = _useState22[1];
  var _useState23 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    formTaxState = _useState24[0],
    setFormTaxState = _useState24[1];
  var _useState25 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    formFeeState = _useState26[0],
    setFormFeeState = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    businessTypes = _useState28[0],
    setBusinessTypes = _useState28[1];
  var _useState29 = (0, _react.useState)({
      site: null,
      loading: false,
      error: null
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    siteState = _useState30[0],
    setSiteState = _useState30[1];
  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 10,
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

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  var handleChangeCategory = function handleChangeCategory(e, category) {
    var _e$target, _e$target2, _category$subcategori;
    if (e === null && category === null) {
      setCategorySelected(null);
    }
    var isInvalid = (e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest) && ((e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.closest('.business_enable_control')) || e.target.closest('.business_actions'));
    if (isInvalid || (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) return;
    setIsUpdateMode(false);
    if (category !== null && category !== void 0 && (_category$subcategori = category.subcategories) !== null && _category$subcategori !== void 0 && _category$subcategori.length) {
      if (!(category !== null && category !== void 0 && category.parent_category_id)) {
        openCategories.values = [];
      }
      if (openCategories.values.includes(category === null || category === void 0 ? void 0 : category.id)) {
        openCategories.values = openCategories.values.filter(function (categoryId) {
          return categoryId !== (category === null || category === void 0 ? void 0 : category.id);
        });
      } else {
        openCategories.values.push(category === null || category === void 0 ? void 0 : category.id);
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

  /**
   * Change search value
   * @param {string} search search string
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  var isMatchSearch = function isMatchSearch(name, description) {
    if (!searchValue) return true;
    return name && name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || description && description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
  };
  var getProducts = function getProducts(_x, _x2, _x3) {
    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, currentPage, currentPageSize) {
      var _businessState$busine;
      var _categoryState, _businessState$busine2, _categoryFinded, _categoryFinded2, _productsFinded, categoryFinded, _categories, productsFinded, productsFiltered, _categorySelected$pro, _businessState$busine3, _productsFiltered, categoryKey, categoryState, pagination, parameters, where, searchConditions, _businessState$busine4, _businessState$busine5, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.lazy_load_products_recommended) {
              _context.next = 5;
              break;
            }
            _categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
              loading: false
            });
            if (categorySelected) {
              _categories = _toConsumableArray(businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.categories);
              _categories.forEach(function iterate(category) {
                if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) {
                  categoryFinded = category;
                }
                Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
              });
              productsFinded = _toConsumableArray((_categoryFinded = categoryFinded) === null || _categoryFinded === void 0 ? void 0 : _categoryFinded.products);
              if (categoryFinded && (_categoryFinded2 = categoryFinded) !== null && _categoryFinded2 !== void 0 && _categoryFinded2.subcategories) {
                categoryFinded.subcategories.forEach(function iterate(category) {
                  productsFinded = [].concat(_toConsumableArray(productsFinded), _toConsumableArray(category.products));
                  Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                });
              }
              productsFiltered = (_productsFinded = productsFinded) === null || _productsFinded === void 0 ? void 0 : _productsFinded.filter(function (product) {
                return isMatchSearch(product.name, product.description);
              });
              if (!productsFiltered) {
                productsFiltered = categorySelected === null || categorySelected === void 0 || (_categorySelected$pro = categorySelected.products) === null || _categorySelected$pro === void 0 ? void 0 : _categorySelected$pro.filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
              }
              _categoryState.products = productsFiltered || [];
            } else {
              _productsFiltered = businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 || (_businessState$busine3 = _businessState$busine3.categories) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.reduce(function (products, category) {
                if (category.products) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }
                return _toConsumableArray(products);
              }, []).filter(function (product) {
                return isMatchSearch(product.name, product.description);
              });
              _categoryState.products = _productsFiltered || [];
            }
            setCategoryState(_objectSpread(_objectSpread({}, _categoryState), {}, {
              products: _toConsumableArray(new Map(_categoryState.products.map(function (item) {
                return [item.id, item];
              })).values())
            }));
            return _context.abrupt("return");
          case 5:
            categoryKey = searchValue ? 'search' : (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === 'featured' ? 'featured' : categorySelected !== null && categorySelected !== void 0 && categorySelected.id ? "categoryId:".concat(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) : 'all';
            categoryState = categoriesState[categoryKey] || categoryStateDefault;
            pagination = categoryState.pagination;
            if (!isUpdateMode) {
              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: true
              }));
            }
            parameters = {
              page: currentPage || (newFetch ? 1 : pagination.currentPage + 1),
              page_size: currentPageSize || pagination.pageSize
            };
            where = null;
            searchConditions = [];
            if (searchValue) {
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
            }
            where = {
              conditions: searchConditions,
              conector: 'OR'
            };
            _context.prev = 14;
            functionFetch = categorySelected !== null && categorySelected !== void 0 && categorySelected.id && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) !== 'featured' ? ordering.businesses((_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id).categories(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id).products() : ordering.businesses((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id).products();
            source = {};
            requestsState.products = source;
            setRequestsState(_objectSpread({}, requestsState));
            productEndpoint = where.conditions.length > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
            _context.next = 22;
            return productEndpoint.get({
              cancelToken: source
            });
          case 22:
            _yield$productEndpoin = _context.sent;
            _yield$productEndpoin2 = _yield$productEndpoin.content;
            error = _yield$productEndpoin2.error;
            result = _yield$productEndpoin2.result;
            _pagination = _yield$productEndpoin2.pagination;
            if (!error) {
              newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, categoryState.pagination), {}, {
                  pageSize: _pagination.page_size === 0 ? categoryState.pagination.pageSize : _pagination.page_size,
                  currentPage: _pagination.current_page,
                  totalItems: _pagination.total,
                  totalPages: _pagination.total_pages
                }),
                loading: false,
                products: newFetch ? _toConsumableArray(result) : [].concat(_toConsumableArray(categoryState.products), _toConsumableArray(result))
              };
              categoriesState[categoryKey] = newcategoryState;
              setCategoryState(_objectSpread(_objectSpread({}, newcategoryState), {}, {
                products: _toConsumableArray(new Map(newcategoryState.products.map(function (item) {
                  return [item.id, item];
                })).values())
              }));
              setCategoriesState(_objectSpread({}, categoriesState));
            } else {
              setErrors(result);
            }
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](14);
            setErrors([_context.t0.message]);
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[14, 30]]);
    }))).apply(this, arguments);
  };
  var getProduct = function getProduct() {
    return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _businessState$busine6;
      var _businessState$busine7, source, _yield$ordering$busin, result, product;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(categoryId && productId && (_businessState$busine6 = businessState.business) !== null && _businessState$busine6 !== void 0 && _businessState$busine6.id)) {
              _context2.next = 16;
              break;
            }
            _context2.prev = 1;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            _context2.next = 7;
            return ordering.businesses((_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.id).categories(categoryId).products(productId).get({
              cancelToken: source
            });
          case 7:
            _yield$ordering$busin = _context2.sent;
            result = _yield$ordering$busin.content.result;
            product = Array.isArray(result) ? null : result;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              product: product,
              loading: false
            }));
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: false,
              error: [_context2.t0]
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 13]]);
    }))).apply(this, arguments);
  };
  var getTaxes = function getTaxes() {
    return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var taxesObject, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            taxesObject = {};
            setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
              loading: true
            }));
            _context3.next = 4;
            return fetch("".concat(ordering.root, "/taxes"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();
          case 7:
            _yield$response$json = _context3.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context3.next = 14;
              break;
            }
            result.forEach(function (tax) {
              return taxesObject["id:".concat(tax === null || tax === void 0 ? void 0 : tax.id)] = tax;
            });
            setTaxes(taxesObject);
            return _context3.abrupt("return");
          case 14:
            setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
              result: {
                error: true,
                result: taxesObject
              },
              loading: false
            }));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))).apply(this, arguments);
  };
  var getFees = function getFees() {
    return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var feesObject, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            feesObject = {};
            setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
              loading: true
            }));
            _context4.next = 4;
            return fetch("".concat(ordering.root, "/fees"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context4.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (error) {
              _context4.next = 14;
              break;
            }
            result.forEach(function (fee) {
              return feesObject["id:".concat(fee === null || fee === void 0 ? void 0 : fee.id)] = fee;
            });
            setFees(feesObject);
            return _context4.abrupt("return");
          case 14:
            setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
              result: {
                error: true,
                result: feesObject
              },
              loading: false
            }));
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))).apply(this, arguments);
  };

  /**
   * Method to get the themes from API
   */
  var getSites = function getSites() {
    return (_ref5 = _ref5 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var requestOptions, response, _yield$response$json3, error, result, site;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context5.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context5.sent;
            _context5.next = 8;
            return response.json();
          case 8:
            _yield$response$json3 = _context5.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              site = result.find(function (site) {
                return site.code === 'website';
              });
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                site: site
              }));
            } else {
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                error: result
              }));
            }
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }))).apply(this, arguments);
  };
  var getBusinessTypes = function getBusinessTypes() {
    return (_ref6 = _ref6 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response, _yield$response$json4, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch("".concat(ordering.root, "/business_types?where=[{\"attribute\":\"enabled\",\"value\":true}]"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 3:
            response = _context6.sent;
            _context6.next = 6;
            return response.json();
          case 6:
            _yield$response$json4 = _context6.sent;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            if (!error) {
              setBusinessTypes(result);
            }
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message);
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }))).apply(this, arguments);
  };
  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.id), isInitialRender]);
  (0, _react.useEffect)(function () {
    setBusinessSlug(slug);
  }, [slug]);
  var getBusiness = function getBusiness() {
    return (_ref7 = _ref7 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _result$categories, source, _yield$ordering$busin2, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            source = {};
            requestsState.business = source;
            setRequestsState(_objectSpread({}, requestsState));
            _context7.next = 7;
            return ordering.businesses(businessSlug).asDashboard().get();
          case 7:
            _yield$ordering$busin2 = _context7.sent;
            result = _yield$ordering$busin2.content.result;
            if (!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 || (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0) {
              setErrorQuantityProducts(true);
            }
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              business: result,
              loading: false
            }));
            _context7.next = 16;
            break;
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 13]]);
    }))).apply(this, arguments);
  };

  /**
   * Method to update the business
   */
  var handleUpdateBusinessState = function handleUpdateBusinessState(result) {
    setIsUpdateMode(true);
    var business = _objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business);
    Object.assign(business, result);
    if (categorySelected) {
      business.categories.forEach(function iterate(category) {
        if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) {
          setCategorySelected(category);
        }
        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });
    }
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  };

  /**
   * Method to update the category state
   */
  var handleUpdateCategoryState = function handleUpdateCategoryState(updatedCategory) {
    setCategoryState(updatedCategory);
  };
  var handleUpdateTaxesProducts = function handleUpdateTaxesProducts(_ref8) {
    var _businessState$busine9;
    var tax = _ref8.tax,
      isRemove = _ref8.isRemove,
      id = _ref8.id;
    var _categories = _toConsumableArray(businessState === null || businessState === void 0 || (_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.categories);
    var replaceSameTaxes = function replaceSameTaxes(categories, tax) {
      for (var i = 0; i < (categories === null || categories === void 0 ? void 0 : categories.length); i++) {
        var _category$subcategori2;
        var category = categories[i];
        for (var j = 0; j < category.products.length; j++) {
          var _product$tax, _product$tax2;
          var product = category.products[j];
          if (isRemove && ((_product$tax = product.tax) === null || _product$tax === void 0 ? void 0 : _product$tax.id) === (tax === null || tax === void 0 ? void 0 : tax.id)) {
            product.tax = null;
            product.tax_id = null;
          } else if (product.tax && ((_product$tax2 = product.tax) === null || _product$tax2 === void 0 ? void 0 : _product$tax2.id) === (tax === null || tax === void 0 ? void 0 : tax.id)) {
            Object.assign(product.tax, tax);
            product.tax_id = tax === null || tax === void 0 ? void 0 : tax.id;
          }
        }
        if (((_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0) {
          categories.subcategories = replaceSameTaxes(categories.subcategories, tax);
        }
      }
      return categories;
    };
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: replaceSameTaxes(_categories, tax)
      })
    }));
  };
  var handleUpdateFeesProducts = function handleUpdateFeesProducts(_ref9) {
    var _businessState$busine10;
    var fee = _ref9.fee,
      isRemove = _ref9.isRemove;
    var _categories = _toConsumableArray(businessState === null || businessState === void 0 || (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.categories);
    var replaceSameFees = function replaceSameFees(categories, fee) {
      for (var i = 0; i < (categories === null || categories === void 0 ? void 0 : categories.length); i++) {
        var _category$subcategori3;
        var category = categories[i];
        for (var j = 0; j < category.products.length; j++) {
          var _product$fee, _product$fee2;
          var product = category.products[j];
          if (isRemove && ((_product$fee = product.fee) === null || _product$fee === void 0 ? void 0 : _product$fee.id) === (fee === null || fee === void 0 ? void 0 : fee.id)) {
            product.fee = null;
            product.fee_id = null;
          } else if (product.fee && ((_product$fee2 = product.fee) === null || _product$fee2 === void 0 ? void 0 : _product$fee2.id) === (fee === null || fee === void 0 ? void 0 : fee.id)) {
            Object.assign(product.fee, fee);
            product.fee_id = fee === null || fee === void 0 ? void 0 : fee.id;
          }
        }
        if (((_category$subcategori3 = category.subcategories) === null || _category$subcategori3 === void 0 ? void 0 : _category$subcategori3.length) > 0) {
          categories.subcategories = replaceSameFees(categories.subcategories, fee);
        }
      }
      return categories;
    };
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: replaceSameFees(_categories, fee)
      })
    }));
  };
  (0, _react.useEffect)(function () {
    if (businessState.loading) return;
    if (!businessState.loading && (categorySelected || isAllCategoryProducts)) {
      getProducts(true);
    }
  }, [businessState]);
  (0, _react.useEffect)(function () {
    if (searchValue !== null) getProducts(!!searchValue);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue, 1);
  }, [categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id]);
  (0, _react.useEffect)(function () {
    if (businessSlug) {
      getBusiness();
    } else {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        loading: false,
        business: {}
      }));
      setCategoriesState({});
      setCategoryState(_objectSpread(_objectSpread({}, categoryStateDefault), {}, {
        loading: false
      }));
      setCategorySelected(null);
    }
  }, [businessSlug]);
  (0, _react.useEffect)(function () {
    var _Object$keys;
    if (!(businessState !== null && businessState !== void 0 && businessState.business)) return;
    if (((_Object$keys = Object.keys(businessState === null || businessState === void 0 ? void 0 : businessState.business)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      events.on('tax_changed', handleUpdateTaxesProducts);
      events.on('fee_changed', handleUpdateFeesProducts);
      events.on('tax_deleted', handleUpdateTaxesProducts);
      events.on('fee_deleted', handleUpdateFeesProducts);
      return function () {
        events.off('tax_changed', handleUpdateTaxesProducts);
        events.off('fee_changed', handleUpdateFeesProducts);
        events.off('tax_deleted', handleUpdateFeesProducts);
        events.off('fee_deleted', handleUpdateFeesProducts);
      };
    }
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);

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
  (0, _react.useEffect)(function () {
    getTaxes();
    getFees();
    getBusinessTypes();
    getSites();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    errorQuantityProducts: errorQuantityProducts,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    getPageProducts: getProducts,
    getBusiness: getBusiness,
    setCategorySelected: setCategorySelected,
    setBusinessState: setBusinessState,
    handleUpdateBusinessState: handleUpdateBusinessState,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    },
    openCategories: openCategories.values,
    setOpenCategories: setOpenCategories,
    setBusinessSlug: setBusinessSlug,
    handleUpdateCategoryState: handleUpdateCategoryState,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees,
    businessTypes: businessTypes,
    setBusinessTypes: setBusinessTypes,
    siteState: siteState
  })));
};
exports.BusinessProductsListing = BusinessProductsListing;
BusinessProductsListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByName: _propTypes.default.bool,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByDescription: _propTypes.default.bool,
  /**
   * Slug from Store
   */
  slug: _propTypes.default.string,
  /**
   * True, flag to make initial API call
   */
  isInitialRender: _propTypes.default.bool
};
BusinessProductsListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};