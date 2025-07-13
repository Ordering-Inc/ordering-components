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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t6 in e) "default" !== _t6 && {}.hasOwnProperty.call(e, _t6) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t6)) && (i.get || i.set) ? o(f, _t6, i) : f[_t6] = e[_t6]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
var BusinessProductsListing = exports.BusinessProductsListing = function BusinessProductsListing(props) {
  var _businessState$busine8;
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
    _useState0 = _slicedToArray(_useState9, 2),
    requestsState = _useState0[0],
    setRequestsState = _useState0[1];
  var _useState1 = (0, _react.useState)({
      product: null,
      loading: false,
      error: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    productModal = _useState10[0],
    setProductModal = _useState10[1];
  var _useState11 = (0, _react.useState)({
      values: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    openCategories = _useState12[0],
    setOpenCategories = _useState12[1];
  var _useState13 = (0, _react.useState)(slug),
    _useState14 = _slicedToArray(_useState13, 2),
    businessSlug = _useState14[0],
    setBusinessSlug = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isUpdateMode = _useState16[0],
    setIsUpdateMode = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    taxes = _useState18[0],
    setTaxes = _useState18[1];
  var _useState19 = (0, _react.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    fees = _useState20[0],
    setFees = _useState20[1];
  var _useState21 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    formTaxState = _useState22[0],
    setFormTaxState = _useState22[1];
  var _useState23 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    formFeeState = _useState24[0],
    setFormFeeState = _useState24[1];
  var _useState25 = (0, _react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    businessTypes = _useState26[0],
    setBusinessTypes = _useState26[1];
  var _useState27 = (0, _react.useState)({
      site: null,
      loading: false,
      error: null
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    siteState = _useState28[0],
    setSiteState = _useState28[1];
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
  var _useState29 = (0, _react.useState)(categoryStateDefault),
    _useState30 = _slicedToArray(_useState29, 2),
    categoryState = _useState30[0],
    setCategoryState = _useState30[1];
  var _useState31 = (0, _react.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    errors = _useState32[0],
    setErrors = _useState32[1];
  var _useState33 = (0, _react.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    errorQuantityProducts = _useState34[0],
    setErrorQuantityProducts = _useState34[1];

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
  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(newFetch, currentPage, currentPageSize) {
      var _businessState$busine;
      var _categoryState, _businessState$busine2, _categoryFinded, _categoryFinded2, _productsFinded, categoryFinded, _categories, productsFinded, productsFiltered, _categorySelected$pro, _businessState$busine3, _productsFiltered, categoryKey, categoryState, pagination, parameters, where, searchConditions, _businessState$busine4, _businessState$busine5, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.lazy_load_products_recommended) {
              _context.n = 1;
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
            return _context.a(2);
          case 1:
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
            _context.p = 2;
            functionFetch = categorySelected !== null && categorySelected !== void 0 && categorySelected.id && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) !== 'featured' ? ordering.businesses((_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id).categories(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id).products() : ordering.businesses((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id).products();
            source = {};
            requestsState.products = source;
            setRequestsState(_objectSpread({}, requestsState));
            productEndpoint = where.conditions.length > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
            _context.n = 3;
            return productEndpoint.get({
              cancelToken: source
            });
          case 3:
            _yield$productEndpoin = _context.v;
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
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            setErrors([_t.message]);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function getProducts(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var getProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _businessState$busine6;
      var _businessState$busine7, source, _yield$ordering$busin, result, product, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(categoryId && productId && (_businessState$busine6 = businessState.business) !== null && _businessState$busine6 !== void 0 && _businessState$busine6.id)) {
              _context2.n = 4;
              break;
            }
            _context2.p = 1;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            _context2.n = 2;
            return ordering.businesses((_businessState$busine7 = businessState.business) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.id).categories(categoryId).products(productId).get({
              cancelToken: source
            });
          case 2:
            _yield$ordering$busin = _context2.v;
            result = _yield$ordering$busin.content.result;
            product = Array.isArray(result) ? null : result;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              product: product,
              loading: false
            }));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: false,
              error: [_t2]
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function getProduct() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getTaxes = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var taxesObject, response, _yield$response$json, error, result;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            taxesObject = {};
            setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
              loading: true
            }));
            _context3.n = 1;
            return fetch("".concat(ordering.root, "/taxes"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context3.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context3.n = 3;
              break;
            }
            result.forEach(function (tax) {
              return taxesObject["id:".concat(tax === null || tax === void 0 ? void 0 : tax.id)] = tax;
            });
            setTaxes(taxesObject);
            return _context3.a(2);
          case 3:
            setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
              result: {
                error: true,
                result: taxesObject
              },
              loading: false
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function getTaxes() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getFees = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var feesObject, response, _yield$response$json2, error, result;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            feesObject = {};
            setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
              loading: true
            }));
            _context4.n = 1;
            return fetch("".concat(ordering.root, "/fees"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context4.v;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (error) {
              _context4.n = 3;
              break;
            }
            result.forEach(function (fee) {
              return feesObject["id:".concat(fee === null || fee === void 0 ? void 0 : fee.id)] = fee;
            });
            setFees(feesObject);
            return _context4.a(2);
          case 3:
            setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
              result: {
                error: true,
                result: feesObject
              },
              loading: false
            }));
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function getFees() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get the themes from API
   */
  var getSites = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var requestOptions, response, _yield$response$json3, error, result, site, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
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
            _context5.n = 1;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 1:
            response = _context5.v;
            _context5.n = 2;
            return response.json();
          case 2:
            _yield$response$json3 = _context5.v;
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
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t3 = _context5.v;
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: false,
              error: [_t3.message]
            }));
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    return function getSites() {
      return _ref5.apply(this, arguments);
    };
  }();
  var getBusinessTypes = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var response, _yield$response$json4, error, result, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return fetch("".concat(ordering.root, "/business_types?where=[{\"attribute\":\"enabled\",\"value\":true}]"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 1:
            response = _context6.v;
            _context6.n = 2;
            return response.json();
          case 2:
            _yield$response$json4 = _context6.v;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            if (!error) {
              setBusinessTypes(result);
            }
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t4 = _context6.v;
            console.log(_t4 === null || _t4 === void 0 ? void 0 : _t4.message);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return function getBusinessTypes() {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.id), isInitialRender]);
  (0, _react.useEffect)(function () {
    setBusinessSlug(slug);
  }, [slug]);
  var getBusiness = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var _result$categories, source, _yield$ordering$busin2, result, _t5;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            source = {};
            requestsState.business = source;
            setRequestsState(_objectSpread({}, requestsState));
            _context7.n = 1;
            return ordering.businesses(businessSlug).asDashboard().get();
          case 1:
            _yield$ordering$busin2 = _context7.v;
            result = _yield$ordering$busin2.content.result;
            if (!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 || (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0) {
              setErrorQuantityProducts(true);
            }
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              business: result,
              loading: false
            }));
            _context7.n = 3;
            break;
          case 2:
            _context7.p = 2;
            _t5 = _context7.v;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_t5.message]
            }));
          case 3:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 2]]);
    }));
    return function getBusiness() {
      return _ref7.apply(this, arguments);
    };
  }();

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
    var _replaceSameTaxes = function replaceSameTaxes(categories, tax) {
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
          categories.subcategories = _replaceSameTaxes(categories.subcategories, tax);
        }
      }
      return categories;
    };
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: _replaceSameTaxes(_categories, tax)
      })
    }));
  };
  var handleUpdateFeesProducts = function handleUpdateFeesProducts(_ref9) {
    var _businessState$busine0;
    var fee = _ref9.fee,
      isRemove = _ref9.isRemove;
    var _categories = _toConsumableArray(businessState === null || businessState === void 0 || (_businessState$busine0 = businessState.business) === null || _businessState$busine0 === void 0 ? void 0 : _businessState$busine0.categories);
    var _replaceSameFees = function replaceSameFees(categories, fee) {
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
          categories.subcategories = _replaceSameFees(categories.subcategories, fee);
        }
      }
      return categories;
    };
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: _replaceSameFees(_categories, fee)
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