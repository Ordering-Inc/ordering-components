"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _OrderContext = require("../../contexts/OrderContext");
var _SessionContext = require("../../contexts/SessionContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
var UpsellingPage = exports.UpsellingPage = function UpsellingPage(props) {
  var _Object$values$find$b, _Object$values$find;
  var UIComponent = props.UIComponent,
    useSuggestiveUpselling = props.useSuggestiveUpselling,
    products = props.products,
    cartProducts = props.cartProducts,
    onSave = props.onSave;
  var _useState = (0, _react.useState)({
      products: [],
      loading: true,
      error: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    upsellingProducts = _useState2[0],
    setUpsellingProducts = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    businessProducts = _useState4[0],
    setBusinessProducts = _useState4[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var currentCart = orderState.carts["businessId:".concat(props.businessId)];
  var businessId = props.uuid ? (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === props.uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {} : props.businessId;
  (0, _react.useEffect)(function () {
    if (products !== null && products !== void 0 && products.length || businessId) {
      if (products !== null && products !== void 0 && products.length && !props.uuid) {
        getUpsellingProducts(products);
      } else {
        if (useSuggestiveUpselling) {
          setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
            loading: false
          }));
        } else {
          getProducts();
        }
      }
    } else {
      setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
        error: true,
        message: 'BusinessId is required when products is not defined'
      }));
    }
  }, [businessId]);
  (0, _react.useEffect)(function () {
    if (useSuggestiveUpselling) return;
    if (!upsellingProducts.loading && !orderState.loading) {
      getUpsellingProducts(businessProducts);
    }
  }, [orderState.loading, upsellingProducts.loading]);
  (0, _react.useEffect)(function () {
    if (!(cartProducts !== null && cartProducts !== void 0 && cartProducts.length) || !useSuggestiveUpselling || upsellingProducts.loading || orderState.loading) return;
    getSuggestiveProducts();
  }, [cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length, orderState.loading, upsellingProducts.loading]);

  /**
   * getting products if array of product is not defined
   */
  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$ordering$busin, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return ordering.businesses(businessId).products().parameters({
              type: orderState.options.type,
              params: 'upsellings'
            }).get();
          case 1:
            _yield$ordering$busin = _context.v;
            result = _yield$ordering$busin.content.result;
            setBusinessProducts(result);
            getUpsellingProducts(result);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
              loading: false,
              error: _t
            }));
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function getProducts() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * getting suggestive products if useSuggestiveUpselling is true
   */
  var getSuggestiveProducts = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (currentCart !== null && currentCart !== void 0 && currentCart.uuid) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return ordering.setAccessToken(token).carts(currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid).getUpselling();
          case 2:
            _yield$ordering$setAc = _context2.v;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            if (!error) {
              setBusinessProducts(result);
              getUpsellingProducts(result, true);
            } else {
              setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
                loading: false,
                error: error
              }));
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
              loading: false,
              error: _t2
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function getSuggestiveProducts() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   *
   * filt products if they are already in the cart
   * @param {array} cartProducts
   */
  var getUpsellingProducts = function getUpsellingProducts(result) {
    var allowAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var upsellingProductsfiltered = result.filter(function (product) {
      return product.upselling || allowAll;
    });
    var repeatProducts = cartProducts !== null && cartProducts !== void 0 && cartProducts.length ? cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.filter(function (cartProduct) {
      return upsellingProductsfiltered.find(function (product) {
        return product.id === cartProduct.id;
      });
    }) : [];
    setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
      loading: false,
      products: repeatProducts !== null && repeatProducts !== void 0 && repeatProducts.length ? upsellingProductsfiltered === null || upsellingProductsfiltered === void 0 ? void 0 : upsellingProductsfiltered.filter(function (product) {
        return !product.inventoried && !repeatProducts.find(function (repeatProduct) {
          return repeatProduct.id === product.id;
        });
      }) : upsellingProductsfiltered
    }));
  };

  /**
   * Function for confirm that the productForm now can be displayed
   * @param {product} product
   */
  var handleFormProduct = function handleFormProduct(product) {
    onSave(product);
  };
  return /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    upsellingProducts: upsellingProducts,
    handleFormProduct: handleFormProduct,
    businessId: businessId
  }));
};
UpsellingPage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
    * upselling products that do not repeat in the cart
   */
  products: _propTypes.default.array,
  /**
   * BusinessId is required when products is not defined
   */
  businessId: _propTypes.default.number,
  /**
   * handleCustomClick, function to get click event and return product without default behavior
   */
  onSave: _propTypes.default.func
};