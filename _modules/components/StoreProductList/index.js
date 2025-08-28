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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t5 in e) "default" !== _t5 && {}.hasOwnProperty.call(e, _t5) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t5)) && (i.get || i.set) ? o(f, _t5, i) : f[_t5] = e[_t5]); return f; })(e, t); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(newFetch) {
      var _productsList$paginat, _productsList$paginat2, _businessState$busine, _businessState$busine2, parameters, where, conditions, searchConditions, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, result, error, pagination, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
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
            _context.n = 1;
            return fetchEndpoint.get();
          case 1:
            _yield$fetchEndpoint$ = _context.v;
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
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            setProductsList(_objectSpread(_objectSpread({}, productsList), {}, {
              loading: false,
              error: _t
            }));
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function getCategoryProducts(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var fetchEndpoint, _yield$fetchEndpoint$3, _yield$fetchEndpoint$4, result, error, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            fetchEndpoint = asDashboard ? ordering.businesses(slug).asDashboard().select(businessProps) : ordering.businesses(slug).select(businessProps);
            _context2.n = 1;
            return fetchEndpoint.get();
          case 1:
            _yield$fetchEndpoint$3 = _context2.v;
            _yield$fetchEndpoint$4 = _yield$fetchEndpoint$3.content;
            result = _yield$fetchEndpoint$4.result;
            error = _yield$fetchEndpoint$4.error;
            setBusinessState({
              loading: false,
              error: error ? result : null,
              business: result
            });
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_t2.message]
            }));
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(categoryId, productId) {
      var updateParams,
        _businessState$busine3,
        _yield$ordering$busin,
        _yield$ordering$busin2,
        result,
        error,
        updatedProducts,
        _args3 = arguments,
        _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            updateParams = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
            _context3.p = 1;
            _context3.n = 2;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id).categories(categoryId).products(productId).save(updateParams);
          case 2:
            _yield$ordering$busin = _context3.v;
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
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            showToast(_ToastContext.ToastType.Error, _t3.message);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function updateStoreProduct(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var updateStoreCategory = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(categoryId) {
      var updateParams,
        _businessState$busine4,
        _yield$ordering$busin3,
        _yield$ordering$busin4,
        result,
        error,
        updatedCategories,
        updatedBusiness,
        _args4 = arguments,
        _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            updateParams = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            _context4.p = 1;
            _context4.n = 2;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id).categories(categoryId).save(updateParams);
          case 2:
            _yield$ordering$busin3 = _context4.v;
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
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            showToast(_ToastContext.ToastType.Error, _t4.message);
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
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