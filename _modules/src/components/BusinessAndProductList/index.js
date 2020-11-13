"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAndProductList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _OrderContext = require("../../contexts/OrderContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_utc.default);

var BusinessAndProductList = function BusinessAndProductList(props) {
  var _businessState$busine5, _orderState$options14, _orderState$options15, _orderState$options16, _orderState$options17;

  var isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription,
      slug = props.slug,
      categoryId = props.categoryId,
      productId = props.productId,
      isInitialRender = props.isInitialRender,
      ordering = props.ordering,
      businessProps = props.businessProps,
      UIComponent = props.UIComponent;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    id: null,
    name: t('ALL', 'All')
  }),
      _useState2 = _slicedToArray(_useState, 2),
      categorySelected = _useState2[0],
      setCategorySelected = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var _useState5 = (0, _react.useState)({
    business: {},
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

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      orderOptions = _useState10[0],
      setOrderOptions = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      requestsState = _useState12[0],
      setRequestsState = _useState12[1];

  var _useState13 = (0, _react.useState)({
    product: null,
    loading: false,
    error: null
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      productModal = _useState14[0],
      setProductModal = _useState14[1];

  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 20,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };

  var _useState15 = (0, _react.useState)(categoryStateDefault),
      _useState16 = _slicedToArray(_useState15, 2),
      categoryState = _useState16[0],
      setCategoryState = _useState16[1];

  var _useState17 = (0, _react.useState)(null),
      _useState18 = _slicedToArray(_useState17, 2),
      errors = _useState18[0],
      setErrors = _useState18[1];
  /**
   * Change category selected
   * @param {Object} category Category object
   */


  var handleChangeCategory = function handleChangeCategory(category) {
    if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) return;
    setCategorySelected(category);
  };

  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };

  var isMatchSearch = function isMatchSearch(name, description) {
    if (!searchValue) return true;
    return name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
  };

  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newFetch) {
      var _businessState$busine, _orderState$options;

      var _categoryState, _businessState$busine2, _businessState$busine3, productsFiltered, _businessState$busine4, _productsFiltered, categoryKey, categoryState, pagination, parameters, where, conditions, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended) {
                _context.next = 5;
                break;
              }

              _categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
                loading: false
              });

              if (categorySelected.id) {
                productsFiltered = (_businessState$busine2 = businessState.business.categories) === null || _businessState$busine2 === void 0 ? void 0 : (_businessState$busine3 = _businessState$busine2.find(function (category) {
                  return category.id === categorySelected.id;
                })) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.products.filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
                _categoryState.products = productsFiltered || [];
              } else {
                _productsFiltered = (_businessState$busine4 = businessState.business.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.reduce(function (products, category) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }, []).filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
                _categoryState.products = _productsFiltered || [];
              }

              setCategoryState(_objectSpread({}, _categoryState));
              return _context.abrupt("return");

            case 5:
              categoryKey = searchValue ? 'search' : categorySelected.id ? "categoryId:".concat(categorySelected.id) : 'all';
              categoryState = categoriesState[categoryKey] || categoryStateDefault;
              pagination = categoryState.pagination;

              if (!(!newFetch && pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages)) {
                _context.next = 11;
                break;
              }

              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: false
              }));
              return _context.abrupt("return");

            case 11:
              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: true
              }));
              parameters = {
                type: ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1,
                page: newFetch ? 1 : pagination.currentPage + 1,
                page_size: pagination.pageSize
              };
              where = null;

              if (searchValue) {
                conditions = [];

                if (isSearchByName) {
                  conditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByDescription) {
                  conditions.push({
                    attribute: 'description',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                where = {
                  conditions: conditions,
                  conector: 'OR'
                };
              }

              _context.prev = 15;
              functionFetch = categorySelected.id ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products() : ordering.businesses(businessState.business.id).products();
              source = {};
              requestsState.products = source;
              setRequestsState(_objectSpread({}, requestsState));
              productEndpoint = where ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
              _context.next = 23;
              return productEndpoint.get({
                cancelToken: source
              });

            case 23:
              _yield$productEndpoin = _context.sent;
              _yield$productEndpoin2 = _yield$productEndpoin.content;
              error = _yield$productEndpoin2.error;
              result = _yield$productEndpoin2.result;
              _pagination = _yield$productEndpoin2.pagination;

              if (!error) {
                newcategoryState = {
                  pagination: _objectSpread(_objectSpread({}, categoryState.pagination), {}, {
                    currentPage: _pagination.current_page,
                    totalItems: _pagination.total,
                    totalPages: _pagination.total_pages
                  }),
                  loading: false,
                  products: newFetch ? _toConsumableArray(result) : [].concat(_toConsumableArray(categoryState.products), _toConsumableArray(result))
                };
                categoriesState[categoryKey] = newcategoryState;
                setCategoryState(_objectSpread({}, newcategoryState));
                setCategoriesState(_objectSpread({}, categoriesState));
              } else {
                setErrors(result);
              }

              _context.next = 34;
              break;

            case 31:
              _context.prev = 31;
              _context.t0 = _context["catch"](15);
              // if (err.constructor.name !== 'Cancel') {
              setErrors([_context.t0.message]); // }

            case 34:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[15, 31]]);
    }));

    return function getProducts(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _orderState$options2, source, parameters, _yield$ordering$busin, result, product;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(categoryId && productId && businessState.business.id)) {
                _context2.next = 17;
                break;
              }

              _context2.prev = 1;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: true
              }));
              source = {};
              requestsState.product = source;
              parameters = {
                type: ((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) || 1
              };
              _context2.next = 8;
              return ordering.businesses(businessState.business.id).categories(categoryId).products(productId).parameters(parameters).get({
                cancelToken: source
              });

            case 8:
              _yield$ordering$busin = _context2.sent;
              result = _yield$ordering$busin.content.result;
              product = Array.isArray(result) ? null : result;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                product: product,
                loading: false
              }));
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: false,
                error: [_context2.t0]
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 14]]);
    }));

    return function getProduct() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id)]);

  var isValidMoment = function isValidMoment(date, format) {
    return (0, _dayjs.default)(date, format).format(format) === date;
  };

  var getBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _orderState$options3, _orderState$options4, _orderState$options4$, _orderState$options5, _orderState$options5$, _orderState$options5$2, _orderState$options6, _orderState$options6$, _orderState$options6$2, _orderState$options7, _orderState$options8, source, parameters, _orderState$options9, moment, _yield$ordering$busin2, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              source = {};
              requestsState.business = source;
              setRequestsState(_objectSpread({}, requestsState));
              parameters = {
                type: ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) || 1,
                location: ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$.location) ? "".concat((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : (_orderState$options5$2 = _orderState$options5$.location) === null || _orderState$options5$2 === void 0 ? void 0 : _orderState$options5$2.lat, ",").concat((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : (_orderState$options6$2 = _orderState$options6$.location) === null || _orderState$options6$2 === void 0 ? void 0 : _orderState$options6$2.lng) : null
              };

              if (((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.moment) && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              _context3.next = 9;
              return ordering.businesses(slug).select(businessProps).parameters(parameters).get({
                cancelToken: source
              });

            case 9:
              _yield$ordering$busin2 = _context3.sent;
              result = _yield$ordering$busin2.content.result;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: result,
                loading: false
              }));
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              // if (err.constructor.name !== 'Cancel') {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: [_context3.t0.message]
              })); // }

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function getBusiness() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!businessState.loading) {
      getProducts(true);
    }
  }, [businessState]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [categorySelected.id]);
  (0, _react.useEffect)(function () {
    getProducts();
  }, [slug]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading && orderOptions && !languageState.loading) {
      getBusiness();
    }
  }, [orderOptions, languageState.loading, slug]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading) {
      var _orderState$options10, _orderState$options11, _orderState$options12, _orderState$options13;

      setOrderOptions({
        type: orderState === null || orderState === void 0 ? void 0 : (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type,
        moment: orderState === null || orderState === void 0 ? void 0 : (_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.moment,
        location: orderState === null || orderState === void 0 ? void 0 : (_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : (_orderState$options13 = _orderState$options12.address) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.location
      });
    }
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.type, orderState === null || orderState === void 0 ? void 0 : (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.moment, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : (_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : (_orderState$options17 = _orderState$options16.address) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.location)]);
  /**
   * Cancel business request
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.business]);
  /**
   * Cancel products request on unmount and pagination
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    getNextProducts: getProducts,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    }
  })));
};

exports.BusinessAndProductList = BusinessAndProductList;
BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessAndProductList.defaultProps = {};