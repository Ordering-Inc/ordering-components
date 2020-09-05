"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _lodash = require("lodash");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductsListing = function ProductsListing(props) {
  var _paginationSettings$p;

  var ordering = props.ordering,
      UIComponent = props.UIComponent,
      businessId = props.businessId,
      categories = props.categories,
      orderBy = props.orderBy,
      orderDirection = props.orderDirection,
      useDefaultSessionManager = props.useDefaultSessionManager,
      paginationSettings = props.paginationSettings;

  var _useState = (0, _react.useState)(categories[0]),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = (0, _react.useState)({
    category_id: 0,
    products: [],
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      productList = _useState4[0],
      setProducts = _useState4[1];

  var _useState5 = (0, _react.useState)({
    business_id: 0,
    categories: [],
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      categoryList = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      pagination = _useState8[0],
      setPagination = _useState8[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var accessToken = useDefaultSessionManager ? session.token : props.accessToken; //   const getProducts = async (page) => {
  //     const options = {
  //       accessToken: accessToken,
  //       query: {
  //         orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
  //         page: page,
  //         page_size: paginationSettings.pageSize
  //       }
  //     }
  //     if (category) {
  //       options.query.where = []
  //       options.query.where.push({ attribute: 'category_id', value: category.id })
  //     }
  //     return await ordering.products.all(options)
  //   }
  //   const loadProducts = async () => {
  //     setProducts({ ...products, loading: true })
  //     try {
  //       const response = await getProducts(pagination.currentPage + 1)
  //       setProducts({
  //         loading: false,
  //         orders: response.content.error ? [] : response.content.result,
  //         error: response.content.error ? response.content.result : null
  //       })
  //       if (!response.content.error) {
  //         setPagination({
  //           currentPage: response.content.pagination.current_page,
  //           pageSize: response.content.pagination.page_size,
  //           totalPages: response.content.pagination.total_pages,
  //           total: response.content.pagination.total,
  //           from: response.content.pagination.from,
  //           to: response.content.pagination.to
  //         })
  //       }
  //     } catch (err) {
  //         setProducts({ ...products, loading: false, error: [err.message] })
  //     }
  //   }

  var initCategory = function initCategory() {
    setCategories(_objectSpread(_objectSpread({
      business_id: businessId
    }, categoryList), {}, {
      loading: true,
      error: null
    }));

    try {
      var all = [];

      for (var c = 1; c < categories.length; c++) {
        var products = [];

        for (var i = 0; i < 100; i++) {
          var product = {
            id: i + 1,
            name: "Product ".concat(categories[c].id, "__").concat(i + 1),
            description: "Product description for test components --- ".concat(categories[c].id, "__description__").concat(i + 1),
            image: "https://picsum.photos/200?random=".concat(categories[c].id * (i + 1))
          };
          products.push(product);
          all.push(product);
        }

        categories[c].products = products;
      }

      categories[0].products = all;
      setCategories({
        business_id: businessId,
        categories: categories,
        loading: true,
        error: null
      });
    } catch (err) {
      setCategories(_objectSpread(_objectSpread({
        business_id: businessId
      }, categoryList), {}, {
        loading: false,
        error: err
      }));
    }
  };

  var loadProducts = function loadProducts(category) {
    setProducts(_objectSpread(_objectSpread({}, productList), {}, {
      loading: true,
      error: null
    }));

    try {
      var ary = [];

      for (var c = 0; c < categories.length; c++) {
        for (var i = 0; i < 100; i++) {
          var tmp = {
            id: i + 1,
            name: "Product ".concat(categories[c].id, "__").concat(i + 1),
            description: "Product description for test components --- ".concat(categories[c].id, "__description__").concat(i + 1),
            image: "https://picsum.photos/200?lock=".concat(categories[c].id * i + 1)
          };
          ary.push(tmp);
        }

        setProducts({
          loading: false,
          category_id: categories[c].id,
          products: ary,
          error: null
        });
      }
    } catch (err) {
      setProducts(_objectSpread(_objectSpread({}, productList), {}, {
        loading: false,
        error: err
      }));
    }
  };

  (0, _react.useEffect)(function () {
    initCategory();
  }, []);

  var onClickedCategory = function onClickedCategory(category) {
    setCategory(category);
  };

  var onSearchProduct = function onSearchProduct(inp_value) {
    console.log(inp_value);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    categories: categories,
    category: category,
    onClickedCategory: onClickedCategory,
    onSearchProduct: onSearchProduct,
    productList: productList,
    pagination: pagination //   loadMoreOrders={loadMoreOrders}

  })));
};

exports.ProductsListing = ProductsListing;
ProductsListing.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: _propTypes.default.object.isRequired,

  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefaultSessionManager: _propTypes.default.bool,

  /**
   * Access token to update user
   * Is required when `useDefaultSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }

    if (props[propName] === undefined && !props.useDefaultSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefaultSessionManager` is false."));
    }
  },

  /**
   * Array of orders
   * This is used of first option to show list
   */
  onSearchProduct: _propTypes.default.func,
  categories: _propTypes.default.arrayOf(_propTypes.object),
  onClickedCategory: _propTypes.default.func,

  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,

  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductsListing.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};