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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
    brandId = props.brandId,
    isIos = props.isIos;
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
    _useState0 = _slicedToArray(_useState9, 2),
    termValue = _useState0[0],
    setTermValue = _useState0[1];
  var _useState1 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    citiesState = _useState10[0],
    setCitiesState = _useState10[1];
  var showCities = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.business_listing_view) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.components) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme = _orderingTheme$theme.cities) !== null && _orderingTheme$theme !== void 0 && _orderingTheme$theme.hidden);
  (0, _react.useEffect)(function () {
    var _Object$keys, _orderState$options;
    !lazySearch && (((_Object$keys = Object.keys((orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 || defaultLocation) && handleSearchbusinessAndProducts(true);
  }, [filters, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : orderState.options)]);
  var handleChangeTermValue = function handleChangeTermValue(val) {
    var returnAllProductsValidation = (val === null || val === void 0 ? void 0 : val.length) < 2 && (termValue === null || termValue === void 0 ? void 0 : termValue.length) >= 2;
    setTermValue(val);
    if (returnAllProductsValidation || (val === null || val === void 0 ? void 0 : val.length) >= 2) {
      var valueLoweredCase = val.toLowerCase();
      handleSearchbusinessAndProducts(true, {}, valueLoweredCase);
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(newFetch, options, val) {
      var _orderState$options3, _orderState$options4, _orderState$options5, _orderState$options6, filtParams, where, requestOptions, location, response, _yield$response$json, result, error, pagination, nextPageItems, remainingItems, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            filtParams = (val === null || val === void 0 ? void 0 : val.length) >= 3 ? "&term=".concat(isIos ? val : encodeURI(val)) : '';
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
            _context.n = 1;
            return fetch("".concat(ordering.root, "/search?order_type_id=").concat(orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type).concat(filtParams, "&location=").concat(JSON.stringify((options === null || options === void 0 ? void 0 : options.location) || location)).concat(where), requestOptions);
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            pagination = _yield$response$json.pagination;
            if (!error) {
              _context.n = 3;
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
            return _context.a(2);
          case 3:
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
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            setBusinessesSearchList(function () {
              return {
                businesses: [],
                loading: false,
                error: _t.message,
                lengthError: false
              };
            });
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 4]]);
    }));
    return function handleSearchbusinessAndProducts(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
  * Function to get brand list from API
  */
  var getBrandList = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var requestOptions, response, content, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
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
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/franchises"), requestOptions);
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            content = _context2.v;
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
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
              loading: false,
              error: _t2.message
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function getBrandList() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var requestOptions, response, _yield$response$json2, result, error, pagination;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
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
            _context3.n = 1;
            return fetch("".concat(ordering.root, "/countries"), requestOptions);
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context3.v;
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
          case 3:
            return _context3.a(2);
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