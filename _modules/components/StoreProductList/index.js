"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreProductList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StoreProductList = exports.StoreProductList = function StoreProductList(props) {
  var _paginationSettings$p;
  var isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    UIComponent = props.UIComponent,
    businessProps = props.businessProps,
    slug = props.slug,
    asDashboard = props.asDashboard,
    paginationSettings = props.paginationSettings,
    isIos = props.isIos;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    productSearch = _useState2[0],
    setProductSearch = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    categorySearch = _useState4[0],
    setCategorySearch = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    category = _useState6[0],
    setCategory = _useState6[1];
  var _useState7 = (0, _react.useState)({
      business: {},
      loading: true,
      error: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    businessState = _useState8[0],
    setBusinessState = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    categories = _useState10[0],
    setCategories = _useState10[1];
  var _useState11 = (0, _react.useState)({
      products: [],
      loading: false,
      error: false,
      pagination: {
        currentPage: 1,
        pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 15,
        totalItems: null,
        totalPages: null
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    productsList = _useState12[0],
    setProductsList = _useState12[1];

  /**
   * Method to get products from API
   */
  var getCategoryProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch) {
      var _productsList$paginat, _productsList$paginat2, _businessState$busine, _businessState$busine2, parameters, where, conditions, searchConditions, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, result, error, pagination;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (newFetch) {
              setProductsList(_objectSpread(_objectSpread({}, productsList), {}, {
                loading: true
              }));
            }
            parameters = {
              page: newFetch ? 1 : (productsList === null || productsList === void 0 || (_productsList$paginat = productsList.pagination) === null || _productsList$paginat === void 0 ? void 0 : _productsList$paginat.currentPage) + 1,
              page_size: productsList === null || productsList === void 0 || (_productsList$paginat2 = productsList.pagination) === null || _productsList$paginat2 === void 0 ? void 0 : _productsList$paginat2.pageSize
            };
            where = null;
            conditions = [];
            if (productSearch) {
              searchConditions = [];
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(productSearch, "%") : encodeURI("%".concat(productSearch, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(productSearch, "%") : encodeURI("%".concat(productSearch, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            fetchEndpoint = where ? ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.id).categories(category === null || category === void 0 ? void 0 : category.id).products().parameters(parameters).where(where) : ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id).categories(category === null || category === void 0 ? void 0 : category.id).products().parameters(parameters);
            _context.next = 10;
            return fetchEndpoint.get();
          case 10:
            _yield$fetchEndpoint$ = _context.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            result = _yield$fetchEndpoint$2.result;
            error = _yield$fetchEndpoint$2.error;
            pagination = _yield$fetchEndpoint$2.pagination;
            setProductsList({
              loading: false,
              error: error ? result : null,
              products: newFetch ? result : [].concat(_toConsumableArray(productsList === null || productsList === void 0 ? void 0 : productsList.products), _toConsumableArray(result)),
              pagination: _objectSpread(_objectSpread({}, productsList === null || productsList === void 0 ? void 0 : productsList.pagination), {}, {
                currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                totalItems: pagination === null || pagination === void 0 ? void 0 : pagination.total,
                totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.total_pages
              })
            });
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            setProductsList(_objectSpread(_objectSpread({}, productsList), {}, {
              loading: false,
              error: _context.t0
            }));
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 18]]);
    }));
    return function getCategoryProducts(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var fetchEndpoint, _yield$fetchEndpoint$3, _yield$fetchEndpoint$4, result, error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            fetchEndpoint = asDashboard ? ordering.businesses(slug).asDashboard().select(businessProps) : ordering.businesses(slug).select(businessProps);
            _context2.next = 5;
            return fetchEndpoint.get();
          case 5:
            _yield$fetchEndpoint$3 = _context2.sent;
            _yield$fetchEndpoint$4 = _yield$fetchEndpoint$3.content;
            result = _yield$fetchEndpoint$4.result;
            error = _yield$fetchEndpoint$4.error;
            setBusinessState({
              loading: false,
              error: error ? result : null,
              business: result
            });
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  var updateCategories = function updateCategories(categories, result) {
    return categories.map(function (category) {
      if (category.id === result.id) {
        return _objectSpread(_objectSpread({}, category), result);
      }
      if (Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.length > 0) {
        return _objectSpread(_objectSpread({}, category), {}, {
          subcategories: updateCategories(category.subcategories, result)
        });
      }
      return category;
    });
  };
  var updateStoreProduct = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(categoryId, productId) {
      var updateParams,
        _businessState$busine3,
        _yield$ordering$busin,
        _yield$ordering$busin2,
        result,
        error,
        updatedProducts,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            updateParams = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            _context3.prev = 1;
            _context3.next = 4;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id).categories(categoryId).products(productId).save(updateParams);
          case 4:
            _yield$ordering$busin = _context3.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error) {
              updatedProducts = productsList === null || productsList === void 0 ? void 0 : productsList.products.map(function (product) {
                if (product.id === result.id) {
                  return _objectSpread(_objectSpread({}, product), result);
                }
                return product;
              });
              setProductsList(_objectSpread(_objectSpread({}, productsList), {}, {
                products: updatedProducts
              }));
              showToast(_ToastContext.ToastType.Success, result !== null && result !== void 0 && result.enabled ? t('ENABLED_PRODUCT', 'Enabled product') : t('DISABLED_PRODUCT', 'Disabled product'));
            } else {
              showToast(_ToastContext.ToastType.Error, result);
            }
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](1);
            showToast(_ToastContext.ToastType.Error, _context3.t0.message);
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 11]]);
    }));
    return function updateStoreProduct(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var updateStoreCategory = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(categoryId) {
      var updateParams,
        _businessState$busine4,
        _yield$ordering$busin3,
        _yield$ordering$busin4,
        result,
        error,
        updatedCategories,
        updatedBusiness,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            updateParams = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            _context4.prev = 1;
            _context4.next = 4;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id).categories(categoryId).save(updateParams);
          case 4:
            _yield$ordering$busin3 = _context4.sent;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            result = _yield$ordering$busin4.result;
            error = _yield$ordering$busin4.error;
            if (!error) {
              updatedCategories = updateCategories(businessState === null || businessState === void 0 ? void 0 : businessState.business.categories, result);
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
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            showToast(_ToastContext.ToastType.Error, _context4.t0.message);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 11]]);
    }));
    return function updateStoreCategory(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var validCategory = function validCategory(cat, searchVal) {
    var _cat$subcategories, _cat$name, _cat$subcategories2;
    if ((cat === null || cat === void 0 || (_cat$subcategories = cat.subcategories) === null || _cat$subcategories === void 0 ? void 0 : _cat$subcategories.length) === 0) return;
    if (cat !== null && cat !== void 0 && (_cat$name = cat.name) !== null && _cat$name !== void 0 && _cat$name.toLowerCase().includes(searchVal)) return true;
    var subcategories = cat === null || cat === void 0 || (_cat$subcategories2 = cat.subcategories) === null || _cat$subcategories2 === void 0 ? void 0 : _cat$subcategories2.filter(function (subCat) {
      var _subCat$name;
      return (subCat === null || subCat === void 0 || (_subCat$name = subCat.name) === null || _subCat$name === void 0 || (_subCat$name = _subCat$name.toLowerCase()) === null || _subCat$name === void 0 ? void 0 : _subCat$name.includes(searchVal)) || validCategory(subCat, searchVal);
    });
    return (subcategories === null || subcategories === void 0 ? void 0 : subcategories.length) > 0;
  };
  (0, _react.useEffect)(function () {
    getBusiness();
  }, [slug]);
  (0, _react.useEffect)(function () {
    if (category !== null && category !== void 0 && category.id) getCategoryProducts(true);
  }, [category, productSearch]);
  (0, _react.useEffect)(function () {
    var _businessState$busine5;
    if ((businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 || (_businessState$busine5 = _businessState$busine5.categories) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.length) > 0) {
      var _businessState$busine6;
      var lowerCaseSearchVal = categorySearch.toLowerCase();
      var _updateCategories = businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 || (_businessState$busine6 = _businessState$busine6.categories) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.filter(function (cat) {
        var _cat$name2;
        if (cat !== null && cat !== void 0 && (_cat$name2 = cat.name) !== null && _cat$name2 !== void 0 && (_cat$name2 = _cat$name2.toLowerCase()) !== null && _cat$name2 !== void 0 && _cat$name2.includes(lowerCaseSearchVal)) return true;
        return validCategory(cat, lowerCaseSearchVal);
      });
      setCategories(_updateCategories);
    }
  }, [categorySearch, businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessState: businessState,
    productsList: productsList,
    productSearch: productSearch,
    categorySearch: categorySearch,
    handleChangeCategory: setCategory,
    handleChangeProductSearch: setProductSearch,
    handleChangeCategorySearch: setCategorySearch,
    updateStoreProduct: updateStoreProduct,
    updateStoreCategory: updateStoreCategory,
    getCategoryProducts: getCategoryProducts,
    categories: categories
  })));
};
StoreProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: _propTypes.default.number,
  /**
   * Enable/disable search by name
   */
  isSearchByName: _propTypes.default.bool,
  /**
   * Enable/disable search by description
   */
  isSearchByDescription: _propTypes.default.bool,
  /**
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
StoreProductList.defaultProps = {
  isSearchByName: true,
  isSearchByDescription: true,
  paginationSettings: {
    initialPage: 1,
    pageSize: 15,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};