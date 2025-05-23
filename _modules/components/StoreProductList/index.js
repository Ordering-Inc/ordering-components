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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
    _useState0 = _slicedToArray(_useState9, 2),
    categories = _useState0[0],
    setCategories = _useState0[1];
  var _useState1 = (0, _react.useState)({
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
    _useState10 = _slicedToArray(_useState1, 2),
    productsList = _useState10[0],
    setProductsList = _useState10[1];

  /**
   * Method to get products from API
   */
  var getCategoryProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch) {
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(categoryId, productId) {
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
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(categoryId) {
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
  var _validCategory = function validCategory(cat, searchVal) {
    var _cat$subcategories, _cat$name, _cat$subcategories2;
    if ((cat === null || cat === void 0 || (_cat$subcategories = cat.subcategories) === null || _cat$subcategories === void 0 ? void 0 : _cat$subcategories.length) === 0) return;
    if (cat !== null && cat !== void 0 && (_cat$name = cat.name) !== null && _cat$name !== void 0 && _cat$name.toLowerCase().includes(searchVal)) return true;
    var subcategories = cat === null || cat === void 0 || (_cat$subcategories2 = cat.subcategories) === null || _cat$subcategories2 === void 0 ? void 0 : _cat$subcategories2.filter(function (subCat) {
      var _subCat$name;
      return (subCat === null || subCat === void 0 || (_subCat$name = subCat.name) === null || _subCat$name === void 0 || (_subCat$name = _subCat$name.toLowerCase()) === null || _subCat$name === void 0 ? void 0 : _subCat$name.includes(searchVal)) || _validCategory(subCat, searchVal);
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
      var updateCategories = businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 || (_businessState$busine6 = _businessState$busine6.categories) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.filter(function (cat) {
        var _cat$name2;
        if (cat !== null && cat !== void 0 && (_cat$name2 = cat.name) !== null && _cat$name2 !== void 0 && (_cat$name2 = _cat$name2.toLowerCase()) !== null && _cat$name2 !== void 0 && _cat$name2.includes(lowerCaseSearchVal)) return true;
        return _validCategory(cat, lowerCaseSearchVal);
      });
      setCategories(updateCategories);
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