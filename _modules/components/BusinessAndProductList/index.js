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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t10 in e) "default" !== _t10 && {}.hasOwnProperty.call(e, _t10) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t10)) && (i.get || i.set) ? o(f, _t10, i) : f[_t10] = e[_t10]); return f; })(e, t); }
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
_dayjs.default.extend(_utc.default);
var BusinessAndProductList = exports.BusinessAndProductList = function BusinessAndProductList(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _businessState$busine10, _orderState$options18, _orderState$options19, _orderState$options20;
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
    _useState0 = _slicedToArray(_useState9, 2),
    filterByMenus = _useState0[0],
    setFilterByMenus = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    professionalSelected = _useState10[0],
    setProfessionalSelected = _useState10[1];
  var _useState11 = (0, _react.useState)({
      business: {},
      menus: null,
      loading: !props.avoidBusinessLoading,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    businessState = _useState12[0],
    setBusinessState = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loadedFirstTime = _useState14[0],
    setLoadedFirstTime = _useState14[1];
  var _useState15 = (0, _react.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    categoriesState = _useState16[0],
    setCategoriesState = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    orderOptions = _useState18[0],
    setOrderOptions = _useState18[1];
  var _useState19 = (0, _react.useState)({
      product: null,
      loading: false,
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    productModal = _useState20[0],
    setProductModal = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    notFound = _useState22[0],
    setNotFound = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    featuredProducts = _useState24[0],
    setFeaturedProducts = _useState24[1];
  var _useState25 = (0, _react.useState)({
      values: []
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    openCategories = _useState26[0],
    setOpenCategories = _useState26[1];
  var _useState27 = (0, _react.useState)({
      min: null,
      max: null
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    priceFilterValues = _useState28[0],
    setPriceFilterValues = _useState28[1];
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _categoryState$produc;
      var i, _ref2, _businessState$busine2, _businessState$busine3, _category$products, category, isFeatured, categoryState, _businessState$busine4, _ref3, _businessState$busine5, _businessState$busine6, _categories$find, _subCategoriesList$fi, _businessState$busine7, categoriesList, categories, parentCategory, categoryFinded, productsFiltered, _businessState$busine8, _productsFiltered, _businessState$busine0, _categoriesCustom, _businessState$busine9, customCategories, productsToFilter, _productsFiltered2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            i = 0;
          case 1:
            if (!((_ref2 = i < (businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 || (_businessState$busine2 = _businessState$busine2.categories) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.length)) !== null && _ref2 !== void 0 ? _ref2 : 0)) {
              _context.n = 3;
              break;
            }
            category = businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.categories[i];
            isFeatured = category === null || category === void 0 || (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.some(function (product) {
              return product.featured;
            });
            if (!isFeatured) {
              _context.n = 2;
              break;
            }
            setFeaturedProducts(isFeatured);
            return _context.a(3, 3);
          case 2:
            i++;
            _context.n = 1;
            break;
          case 3:
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
                return [].concat(_toConsumableArray(products), _toConsumableArray(category.products.map(function (product) {
                  return _objectSpread(_objectSpread({}, product), category.slug ? {
                    category: _objectSpread(_objectSpread({}, product === null || product === void 0 ? void 0 : product.category), {}, {
                      slug: category.slug
                    })
                  } : {});
                })));
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
              productsToFilter = avoidProductDuplicate ? _categoriesCustom : businessState === null || businessState === void 0 || (_businessState$busine0 = businessState.business) === null || _businessState$busine0 === void 0 ? void 0 : _businessState$busine0.categories;
              _productsFiltered2 = productsToFilter === null || productsToFilter === void 0 ? void 0 : productsToFilter.reduce(function (products, category) {
                return [].concat(_toConsumableArray(products), _toConsumableArray(category.products.map(function (product) {
                  return _objectSpread(_objectSpread({}, product), category.slug ? {
                    category: _objectSpread(_objectSpread({}, product === null || product === void 0 ? void 0 : product.category), {}, {
                      slug: category.slug
                    })
                  } : {});
                })));
              }, []).filter(function (product) {
                return isMatchSearch(product.name, product.description, product === null || product === void 0 ? void 0 : product.price);
              });
              categoryState.products = _productsFiltered2 || [];
            }
            setErrorQuantityProducts(!((_categoryState$produc = categoryState.products) !== null && _categoryState$produc !== void 0 && _categoryState$produc.length));
            setCategoryState(_objectSpread({}, categoryState));
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function getProducts() {
      return _ref.apply(this, arguments);
    };
  }();
  var getLazyProducts = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref5) {
      var _orderState$options$t, _orderState$options, _orderState$options2, _orderState$options3, _where, _where2;
      var page, _ref5$pageSize, pageSize, parameters, _orderState$options4, moment, where, searchConditions, source, promises, functionFetch, productEndpoint, _where3, _t, _t2, _t3, _t4;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            page = _ref5.page, _ref5$pageSize = _ref5.pageSize, pageSize = _ref5$pageSize === void 0 ? categoryStateDefault.pagination.pageSize : _ref5$pageSize;
            parameters = _objectSpread(_objectSpread(_objectSpread({
              version: 'v2',
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
            _t = promises;
            _context2.n = 1;
            return productEndpoint.get({
              cancelToken: source
            });
          case 1:
            _t2 = _context2.v;
            _t.push.call(_t, _t2);
            if (!(isUseParentCategory && (!categorySelected.id || categorySelected.id === 'featured'))) {
              _context2.n = 3;
              break;
            }
            parameters.params = 'features';
            productEndpoint = ((_where3 = where) === null || _where3 === void 0 || (_where3 = _where3.conditions) === null || _where3 === void 0 ? void 0 : _where3.length) > 0 ? ordering.businesses(businessState.business.id).products().parameters(parameters).where(where) : ordering.businesses(businessState.business.id).products().parameters(parameters);
            _t3 = promises;
            _context2.n = 2;
            return productEndpoint.get({
              cancelToken: source
            });
          case 2:
            _t4 = _context2.v;
            _t3.push.call(_t3, _t4);
          case 3:
            return _context2.a(2, promises);
        }
      }, _callee2);
    }));
    return function getLazyProducts(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  var loadProducts = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _categoriesState$cate, _curCategoryState$pro, _businessState$busine1;
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
        _featuredRes$content0,
        _featuredRes$content1,
        _featuredRes$content10,
        _categoriesState$feat6,
        productsList,
        productsListFeatured,
        paginationData,
        _newcategoryState,
        _isFeatured,
        _err$constructor,
        _err$message,
        _args3 = arguments,
        _t5;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _ref8 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, newFetch = _ref8.newFetch;
            setErrors(null);
            curCategoryState = (_categoriesState$cate = categoriesState[categoryKey]) !== null && _categoriesState$cate !== void 0 ? _categoriesState$cate : categoryStateDefault;
            if (!(!newFetch && (curCategoryState.pagination.currentPage > 0 && curCategoryState.pagination.currentPage === curCategoryState.pagination.totalPages || (curCategoryState === null || curCategoryState === void 0 || (_curCategoryState$pro = curCategoryState.products) === null || _curCategoryState$pro === void 0 ? void 0 : _curCategoryState$pro.length) > 0 && curCategoryState.pagination.totalPages > 0))) {
              _context3.n = 1;
              break;
            }
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: false
            }));
            return _context3.a(2);
          case 1:
            isLazy = !!(businessState !== null && businessState !== void 0 && (_businessState$busine1 = businessState.business) !== null && _businessState$busine1 !== void 0 && _businessState$busine1.lazy_load_products_recommended);
            if (isLazy) {
              _context3.n = 2;
              break;
            }
            getProducts();
            return _context3.a(2);
          case 2:
            pageSize = categoryStateDefault.pagination.pageSize;
            _context3.p = 3;
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: true
            }));
            _context3.n = 4;
            return getLazyProducts({
              page: 1,
              pageSize: pageSize
            });
          case 4:
            _yield$getLazyProduct = _context3.v;
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
              _context3.n = 5;
              break;
            }
            setErrors(errorsList[0]);
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: false
            }));
            return _context3.a(2);
          case 5:
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
                var _category$products2;
                return category === null || category === void 0 || (_category$products2 = category.products) === null || _category$products2 === void 0 ? void 0 : _category$products2.map(function (product) {
                  return _objectSpread(_objectSpread({}, product), category !== null && category !== void 0 && category.slug ? {
                    category: _objectSpread(_objectSpread({}, product.category), {}, {
                      slug: category.slug
                    })
                  } : {});
                });
              }))).filter(function (item) {
                return item;
              });
              productsListFeatured = (_featuredRes$content$ = featuredRes === null || featuredRes === void 0 || (_featuredRes$content9 = featuredRes.content) === null || _featuredRes$content9 === void 0 ? void 0 : _featuredRes$content9.result) !== null && _featuredRes$content$ !== void 0 ? _featuredRes$content$ : [];
              paginationData = categorySelected.id === 'featured' ? (_categoriesState$feat4 = categoriesState === null || categoriesState === void 0 || (_categoriesState$feat5 = categoriesState.featured) === null || _categoriesState$feat5 === void 0 ? void 0 : _categoriesState$feat5.pagination) !== null && _categoriesState$feat4 !== void 0 ? _categoriesState$feat4 : {} : (_curCategoryState$pag = curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.pagination) !== null && _curCategoryState$pag !== void 0 ? _curCategoryState$pag : {};
              _newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, paginationData), {}, {
                  currentPage: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content0 = featuredRes.content) === null || _featuredRes$content0 === void 0 || (_featuredRes$content0 = _featuredRes$content0.pagination) === null || _featuredRes$content0 === void 0 ? void 0 : _featuredRes$content0.current_page : pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                  totalItems: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content1 = featuredRes.content) === null || _featuredRes$content1 === void 0 || (_featuredRes$content1 = _featuredRes$content1.pagination) === null || _featuredRes$content1 === void 0 ? void 0 : _featuredRes$content1.total : pagination === null || pagination === void 0 ? void 0 : pagination.total,
                  totalPages: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content10 = featuredRes.content) === null || _featuredRes$content10 === void 0 || (_featuredRes$content10 = _featuredRes$content10.pagination) === null || _featuredRes$content10 === void 0 ? void 0 : _featuredRes$content10.total_pages : pagination === null || pagination === void 0 ? void 0 : pagination.total_pages
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
            _context3.n = 7;
            break;
          case 6:
            _context3.p = 6;
            _t5 = _context3.v;
            if ((_t5 === null || _t5 === void 0 || (_err$constructor = _t5.constructor) === null || _err$constructor === void 0 ? void 0 : _err$constructor.name) !== 'Cancel') {
              setErrors([(_err$message = _t5 === null || _t5 === void 0 ? void 0 : _t5.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']);
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
            }
          case 7:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 6]]);
    }));
    return function loadProducts() {
      return _ref7.apply(this, arguments);
    };
  }();
  var loadMoreProducts = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _categoriesState$cate2;
      var curCategoryState, _featuredRes$content11, _yield$getLazyProduct3, _yield$getLazyProduct4, lazyRes, featuredRes, content, error, result, pagination, errorsList, _featuredRes$content12, _featuredRes$content13, _featuredRes$content14, _featuredRes$content15, _oldFeatured$products2, _featuredRes$content$2, _featuredRes$content16, oldFeatured, featureState, _curCategoryState$pro2, _categoriesState$all, _categoriesState$feat7, newcategoryState, isFeatured, _ref1, _featuredRes$content$3, _featuredRes$content17, _categoriesState$feat8, _categoriesState$feat9, _curCategoryState$pag2, _featuredRes$content18, _featuredRes$content19, _featuredRes$content20, _curCategoryState$pro3, _curCategoryState$pro4, _categoriesState$all2, _categoriesState$feat0, productsList, productsListFeatured, paginationData, _newcategoryState2, _isFeatured2, _err$constructor2, _err$message2, _t6;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setErrors(null);
            curCategoryState = (_categoriesState$cate2 = categoriesState[categoryKey]) !== null && _categoriesState$cate2 !== void 0 ? _categoriesState$cate2 : categoryStateDefault;
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: true
            }));
            _context4.p = 1;
            _context4.n = 2;
            return getLazyProducts({
              page: curCategoryState.pagination.currentPage + 1
            });
          case 2:
            _yield$getLazyProduct3 = _context4.v;
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
            if (featuredRes !== null && featuredRes !== void 0 && (_featuredRes$content11 = featuredRes.content) !== null && _featuredRes$content11 !== void 0 && _featuredRes$content11.error) {
              errorsList.push(featuredRes === null || featuredRes === void 0 || (_featuredRes$content12 = featuredRes.content) === null || _featuredRes$content12 === void 0 ? void 0 : _featuredRes$content12.result[0]);
            }
            if (!(errorsList !== null && errorsList !== void 0 && errorsList.length)) {
              _context4.n = 3;
              break;
            }
            setErrors(errorsList[0]);
            setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
              loading: false
            }));
            return _context4.a(2);
          case 3:
            if (featuredRes) {
              oldFeatured = categoriesState === null || categoriesState === void 0 ? void 0 : categoriesState.featured;
              featureState = {
                pagination: _objectSpread(_objectSpread({}, oldFeatured === null || oldFeatured === void 0 ? void 0 : oldFeatured.pagination), {}, {
                  currentPage: featuredRes === null || featuredRes === void 0 || (_featuredRes$content13 = featuredRes.content) === null || _featuredRes$content13 === void 0 || (_featuredRes$content13 = _featuredRes$content13.pagination) === null || _featuredRes$content13 === void 0 ? void 0 : _featuredRes$content13.current_page,
                  totalItems: featuredRes === null || featuredRes === void 0 || (_featuredRes$content14 = featuredRes.content) === null || _featuredRes$content14 === void 0 || (_featuredRes$content14 = _featuredRes$content14.pagination) === null || _featuredRes$content14 === void 0 ? void 0 : _featuredRes$content14.total,
                  totalPages: featuredRes === null || featuredRes === void 0 || (_featuredRes$content15 = featuredRes.content) === null || _featuredRes$content15 === void 0 || (_featuredRes$content15 = _featuredRes$content15.pagination) === null || _featuredRes$content15 === void 0 ? void 0 : _featuredRes$content15.total_pages
                }),
                loading: false,
                products: [].concat(_toConsumableArray((_oldFeatured$products2 = oldFeatured === null || oldFeatured === void 0 ? void 0 : oldFeatured.products) !== null && _oldFeatured$products2 !== void 0 ? _oldFeatured$products2 : []), _toConsumableArray((_featuredRes$content$2 = featuredRes === null || featuredRes === void 0 || (_featuredRes$content16 = featuredRes.content) === null || _featuredRes$content16 === void 0 ? void 0 : _featuredRes$content16.result) !== null && _featuredRes$content$2 !== void 0 ? _featuredRes$content$2 : []))
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
              productsList = (_ref1 = []).concat.apply(_ref1, _toConsumableArray(result.map(function (category) {
                return category === null || category === void 0 ? void 0 : category.products;
              }))).filter(function (item) {
                return item;
              });
              productsListFeatured = (_featuredRes$content$3 = featuredRes === null || featuredRes === void 0 || (_featuredRes$content17 = featuredRes.content) === null || _featuredRes$content17 === void 0 ? void 0 : _featuredRes$content17.result) !== null && _featuredRes$content$3 !== void 0 ? _featuredRes$content$3 : [];
              paginationData = categorySelected.id === 'featured' ? (_categoriesState$feat8 = categoriesState === null || categoriesState === void 0 || (_categoriesState$feat9 = categoriesState.featured) === null || _categoriesState$feat9 === void 0 ? void 0 : _categoriesState$feat9.pagination) !== null && _categoriesState$feat8 !== void 0 ? _categoriesState$feat8 : {} : (_curCategoryState$pag2 = curCategoryState === null || curCategoryState === void 0 ? void 0 : curCategoryState.pagination) !== null && _curCategoryState$pag2 !== void 0 ? _curCategoryState$pag2 : {};
              _newcategoryState2 = {
                pagination: _objectSpread(_objectSpread({}, paginationData), {}, {
                  currentPage: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content18 = featuredRes.content) === null || _featuredRes$content18 === void 0 || (_featuredRes$content18 = _featuredRes$content18.pagination) === null || _featuredRes$content18 === void 0 ? void 0 : _featuredRes$content18.current_page : pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                  totalItems: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content19 = featuredRes.content) === null || _featuredRes$content19 === void 0 || (_featuredRes$content19 = _featuredRes$content19.pagination) === null || _featuredRes$content19 === void 0 ? void 0 : _featuredRes$content19.total : pagination === null || pagination === void 0 ? void 0 : pagination.total,
                  totalPages: categorySelected.id === 'featured' ? featuredRes === null || featuredRes === void 0 || (_featuredRes$content20 = featuredRes.content) === null || _featuredRes$content20 === void 0 || (_featuredRes$content20 = _featuredRes$content20.pagination) === null || _featuredRes$content20 === void 0 ? void 0 : _featuredRes$content20.total_pages : pagination === null || pagination === void 0 ? void 0 : pagination.total_pages
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
              })) || (categoriesState === null || categoriesState === void 0 || (_categoriesState$feat0 = categoriesState.featured) === null || _categoriesState$feat0 === void 0 || (_categoriesState$feat0 = _categoriesState$feat0.products) === null || _categoriesState$feat0 === void 0 ? void 0 : _categoriesState$feat0.some(function (product) {
                return product.featured;
              }));
              setFeaturedProducts(_isFeatured2);
            }
            setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
              loading: false
            }));
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t6 = _context4.v;
            if ((_t6 === null || _t6 === void 0 || (_err$constructor2 = _t6.constructor) === null || _err$constructor2 === void 0 ? void 0 : _err$constructor2.name) !== 'Cancel') {
              setErrors([(_err$message2 = _t6 === null || _t6 === void 0 ? void 0 : _t6.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']);
              setCategoryState(_objectSpread(_objectSpread({}, curCategoryState), {}, {
                loading: false
              }));
            }
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    return function loadMoreProducts() {
      return _ref0.apply(this, arguments);
    };
  }();
  var getProduct = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _props$product, _props$product2, _props$product3;
      var _orderState$options5, _orderState$options6, _orderState$options7, _orderState$options8, _props$product4, _props$product5, _props$product6, source, parameters, _orderState$options9, moment, _yield$ordering$busin, result, product, _t7;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (!(categoryId && productId && businessState.business.id || (_props$product = props.product) !== null && _props$product !== void 0 && _props$product.businessId && (_props$product2 = props.product) !== null && _props$product2 !== void 0 && _props$product2.categoryId && (_props$product3 = props.product) !== null && _props$product3 !== void 0 && _props$product3.id)) {
              _context5.n = 4;
              break;
            }
            _context5.p = 1;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            parameters = {
              type: ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) || 1,
              moment: ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.moment) || null,
              version: 'v2'
            };
            if ((_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.moment && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            _context5.n = 2;
            return ordering.businesses(businessState.business.id || ((_props$product4 = props.product) === null || _props$product4 === void 0 ? void 0 : _props$product4.businessId)).categories(categoryId || ((_props$product5 = props.product) === null || _props$product5 === void 0 ? void 0 : _props$product5.categoryId)).products(productId || ((_props$product6 = props.product) === null || _props$product6 === void 0 ? void 0 : _props$product6.id)).parameters(parameters).get({
              cancelToken: source
            });
          case 2:
            _yield$ordering$busin = _context5.v;
            result = _yield$ordering$busin.content.result;
            product = Array.isArray(result) ? null : result;
            setNotFound(!result);
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              product: product,
              loading: false
            }));
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t7 = _context5.v;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: false,
              error: [_t7]
            }));
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function getProduct() {
      return _ref10.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.id), isInitialRender]);
  var getBusiness = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _orderState$options0, _orderState$options1, _orderState$options10, _orderState$options11, _orderState$options12, _orderState$options13, _customerState$user, _result$categories, source, parameters, _orderState$options14, moment, _customerState$user2, _yield$ordering$busin2, result, data, _yield$ordering$busin3, menus, _t8;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            source = {};
            requestsState.business = source;
            parameters = {
              version: 'v2',
              type: ((_orderState$options0 = orderState.options) === null || _orderState$options0 === void 0 ? void 0 : _orderState$options0.type) || 1,
              location: location ? "".concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng) : (_orderState$options1 = orderState.options) !== null && _orderState$options1 !== void 0 && (_orderState$options1 = _orderState$options1.address) !== null && _orderState$options1 !== void 0 && _orderState$options1.location ? "".concat((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 || (_orderState$options10 = _orderState$options10.address) === null || _orderState$options10 === void 0 || (_orderState$options10 = _orderState$options10.location) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.lat, ",").concat((_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 || (_orderState$options11 = _orderState$options11.address) === null || _orderState$options11 === void 0 || (_orderState$options11 = _orderState$options11.location) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.lng) : null
            };
            if ((_orderState$options12 = orderState.options) !== null && _orderState$options12 !== void 0 && _orderState$options12.moment && isValidMoment((_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
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
            _context6.n = 1;
            return ordering.businesses(slug).select(businessProps).parameters(parameters).get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$busin2 = _context6.v;
            result = _yield$ordering$busin2.content.result;
            setErrorQuantityProducts(!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 || (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0);
            data = _objectSpread(_objectSpread({}, businessState), {}, {
              business: result,
              loading: false
            });
            if (!(menusProps && isGetMenus)) {
              _context6.n = 3;
              break;
            }
            _context6.n = 2;
            return ordering.businesses(result.id).menus().select(menusProps).get();
          case 2:
            _yield$ordering$busin3 = _context6.v;
            menus = _yield$ordering$busin3.content.result;
            data.menus = menus;
          case 3:
            setBusinessState(data);
            setLoadedFirstTime(true);
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t8 = _context6.v;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_t8.message]
            }));
            setLoadedFirstTime(true);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 4]]);
    }));
    return function getBusiness() {
      return _ref11.apply(this, arguments);
    };
  }();
  var multiRemoveProducts = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(unavailableProducts, carts) {
      var allPromise, _t9;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            allPromise = [];
            unavailableProducts.forEach(function (product) {
              allPromise.push(new Promise(function (resolve, reject) {
                resolve(removeProduct(product, carts));
              }));
            });
            _context7.n = 1;
            return Promise.all(allPromise);
          case 1:
            _t9 = _context7.v;
            if (!_t9) {
              _context7.n = 2;
              break;
            }
            setAlertState({
              open: true,
              content: [t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.')]
            });
          case 2:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function multiRemoveProducts(_x2, _x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var handleUpdateProfessionals = function handleUpdateProfessionals(selectedProfessional) {
    var _businessState$busine11;
    var professionals = businessState === null || businessState === void 0 || (_businessState$busine11 = businessState.business) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.professionals.map(function (professional) {
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
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(categoryId, productId) {
      var updateParams,
        _businessState$busine12,
        _yield$ordering$busin4,
        _yield$ordering$busin5,
        result,
        error,
        updatedProducts,
        _args8 = arguments,
        _t0;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            updateParams = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};
            _context8.p = 1;
            _context8.n = 2;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : _businessState$busine12.id).categories(categoryId).products(productId).save(updateParams);
          case 2:
            _yield$ordering$busin4 = _context8.v;
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
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t0 = _context8.v;
            showToast(_ToastContext.ToastType.Error, _t0.message);
          case 4:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return function updateStoreProduct(_x4, _x5) {
      return _ref13.apply(this, arguments);
    };
  }();
  var updateStoreCategory = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(categoryId) {
      var updateParams,
        _businessState$busine13,
        _yield$ordering$busin6,
        _yield$ordering$busin7,
        result,
        error,
        updatedCategories,
        updatedBusiness,
        _args9 = arguments,
        _t1;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            updateParams = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
            _context9.p = 1;
            _context9.n = 2;
            return ordering.businesses(businessState === null || businessState === void 0 || (_businessState$busine13 = businessState.business) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.id).categories(categoryId).save(updateParams);
          case 2:
            _yield$ordering$busin6 = _context9.v;
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
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t1 = _context9.v;
            showToast(_ToastContext.ToastType.Error, _t1.message);
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    return function updateStoreCategory(_x6) {
      return _ref14.apply(this, arguments);
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
      var _orderState$options15, _orderState$options16, _orderState$options17;
      setOrderOptions({
        type: orderState === null || orderState === void 0 || (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.type,
        moment: orderState === null || orderState === void 0 || (_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.moment,
        location: orderState === null || orderState === void 0 || (_orderState$options17 = orderState.options) === null || _orderState$options17 === void 0 || (_orderState$options17 = _orderState$options17.address) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.location
      });
    }
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.loading, orderState === null || orderState === void 0 || (_orderState$options18 = orderState.options) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.type, orderState === null || orderState === void 0 || (_orderState$options19 = orderState.options) === null || _orderState$options19 === void 0 ? void 0 : _orderState$options19.moment, JSON.stringify(orderState === null || orderState === void 0 || (_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 || (_orderState$options20 = _orderState$options20.address) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.location)]);

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