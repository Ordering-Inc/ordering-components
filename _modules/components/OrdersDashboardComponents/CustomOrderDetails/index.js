"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomOrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _OrderContext = require("../../../contexts/OrderContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _ToastContext = require("../../../contexts/ToastContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
/**
 * Component to manage custom order details behavior without UI component
 */
var CustomOrderDetails = exports.CustomOrderDetails = function CustomOrderDetails(props) {
  var UIComponent = props.UIComponent,
    businessPropsToFetch = props.businessPropsToFetch;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    updateProduct = _useOrder2[1].updateProduct;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedUser = _useState2[0],
    setSelectedUser = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBusiness = _useState4[0],
    setSelectedBusiness = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    phone = _useState6[0],
    setPhone = _useState6[1];
  var _useState7 = (0, _react.useState)({
      users: [],
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    customersPhones = _useState8[0],
    setCustomersPhones = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      businesses: [],
      error: null
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    businessList = _useState0[0],
    setBusinessList = _useState0[1];
  var _useState1 = (0, _react.useState)({
      loading: false,
      products: [],
      error: null
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    productList = _useState10[0],
    setProductList = _useState10[1];
  var cart = (0, _react.useMemo)(function () {
    if (!carts || !(selectedBusiness !== null && selectedBusiness !== void 0 && selectedBusiness.id)) return null;
    return carts["businessId:".concat(selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id)];
  }, [carts, selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id]);

  /**
   * Get users from API
   */
  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var conditions, _yield$ordering$setAc, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: true
            }));
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: encodeURI(true)
              }, {
                conector: 'OR',
                conditions: [{
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(phone, "%"))
                  }
                }, {
                  attribute: 'phone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(phone, "%"))
                  }
                }]
              }]
            };
            _context.p = 1;
            _context.n = 2;
            return ordering.setAccessToken(token).users().where(conditions).get();
          case 2:
            _yield$ordering$setAc = _context.v;
            result = _yield$ordering$setAc.content.result;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              users: result,
              loading: false
            }));
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: false,
              error: _t.message
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function getUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get business list from API
   */
  var getBusinessList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(location) {
      var parameters, conditions, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: true
            }));
            parameters = {
              location: location
            };
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: encodeURI(true)
              }]
            };
            fetchEndpoint = ordering.businesses().where(conditions).select(businessPropsToFetch).parameters(parameters);
            _context2.n = 1;
            return fetchEndpoint.get();
          case 1:
            _yield$fetchEndpoint$ = _context2.v;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            if (!error) {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                businesses: result
              }));
            } else {
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
              loading: false,
              error: [_t2 === null || _t2 === void 0 ? void 0 : _t2.message]
            }));
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function getBusinessList(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get products list from API
   */
  var getProducts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(searchValue) {
      var where, searchConditions, _yield$ordering$busin, _yield$ordering$busin2, error, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setProductList(_objectSpread(_objectSpread({}, productList), {}, {
              loading: true
            }));
            where = null;
            searchConditions = [];
            if (searchValue) {
              searchConditions.push({
                attribute: 'name',
                value: {
                  condition: 'ilike',
                  value: encodeURI("%".concat(searchValue, "%"))
                }
              });
            }
            where = {
              conditions: searchConditions,
              conector: 'OR'
            };
            _context3.n = 1;
            return ordering.businesses(selectedBusiness.id).products().where(where).get();
          case 1:
            _yield$ordering$busin = _context3.v;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              setProductList(_objectSpread(_objectSpread({}, productList), {}, {
                loading: false,
                products: result
              }));
            } else {
              setProductList(_objectSpread(_objectSpread({}, productList), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            setProductList(_objectSpread(_objectSpread({}, productList), {}, {
              loading: false,
              error: [_t3 === null || _t3 === void 0 ? void 0 : _t3.message]
            }));
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function getProducts(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to update product cart
   */
  var handeUpdateProductCart = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(product, increament) {
      var successful, cartProduct;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            successful = true;
            cartProduct = _objectSpread(_objectSpread({}, product), {}, {
              quantity: increament ? product.quantity + 1 : product.quantity - 1
            });
            _context4.n = 1;
            return updateProduct(cartProduct, selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.id, selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.id);
          case 1:
            successful = _context4.v;
            if (successful) {
              showToast(_ToastContext.ToastType.Success, t('PRODUCT_UPDATE', 'Product updated'));
            }
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function handeUpdateProductCart(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (phone && phone.length >= 7) {
      getUsers();
    }
    if (phone && phone.length < 7 || !phone) {
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: []
      }));
    }
  }, [phone]);
  (0, _react.useEffect)(function () {
    if (selectedBusiness) {
      setProductList({
        loading: false,
        products: [],
        error: null
      });
    }
  }, [selectedBusiness]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    selectedUser: selectedUser,
    setSelectedUser: setSelectedUser,
    selectedBusiness: selectedBusiness,
    setSelectedBusiness: setSelectedBusiness,
    phone: phone,
    onChangeNumber: function onChangeNumber(val) {
      return setPhone(val);
    },
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    businessList: businessList,
    getBusinessList: getBusinessList,
    productList: productList,
    getProducts: getProducts,
    handeUpdateProductCart: handeUpdateProductCart,
    cart: cart
  })));
};
CustomOrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
CustomOrderDetails.defaultProps = {
  businessPropsToFetch: ['id', 'name', 'location', 'logo', 'slug']
};