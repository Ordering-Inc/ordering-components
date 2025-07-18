"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment2 = _interopRequireDefault(require("moment"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _ApiContext = require("../../contexts/ApiContext");
var _EventContext = require("../../contexts/EventContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_dayjs.default.extend(_utc.default);
var ProductForm = exports.ProductForm = function ProductForm(props) {
  var _props$product, _props$productCart, _orderState$carts, _product$product, _product$product2, _product$product3, _product$product4;
  var UIComponent = props.UIComponent,
    useOrderContext = props.useOrderContext,
    onSave = props.onSave,
    handleCustomSave = props.handleCustomSave,
    isStarbucks = props.isStarbucks,
    isService = props.isService,
    isCartProduct = props.isCartProduct,
    productAddedToCartLength = props.productAddedToCartLength,
    professionalList = props.professionalList,
    handleUpdateProducts = props.handleUpdateProducts,
    handleUpdateProfessionals = props.handleUpdateProfessionals,
    handleChangeProfessional = props.handleChangeProfessional,
    setProductLoading = props.setProductLoading;
  var requestsState = {};
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    login = _useSession2[1].login;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  /**
   * Events context
  */
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  /**
   * Original product state
   */
  var availableLazyLoad = ((_props$product = props.product) === null || _props$product === void 0 ? void 0 : _props$product.load_type) === 'lazy' && props.businessId && props.categoryId && props.productId;
  var _useState = (0, _react.useState)({
      product: availableLazyLoad ? null : props.product,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];

  /**
   * Product cart state
   */
  var _useState3 = (0, _react.useState)({
      ingredients: {},
      options: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    productCart = _useState4[0],
    setProductCart = _useState4[1];

  /**
   * Errors state
   */
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];

  /**
   * Suboption by default when there is only one
   */
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    defaultSubOptions = _useState8[0],
    setDefaultSubOptions = _useState8[1];

  /**
   * Custom Suboption by default
   */
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    customDefaultSubOptions = _useState0[0],
    setCustomDefaultSubOptions = _useState0[1];

  /**
   * preselected and selected suboptions
   */
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedSuboptions = _useState10[0],
    setSelectedSuboptions = _useState10[1];

  /**
   * dictionary of respect_to suboptions
   */
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    dependsSuboptions = _useState12[0],
    setDependsSuboptions = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      professionals: [],
      error: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    professionalListState = _useState14[0],
    setProfessionalListState = _useState14[1];

  /**
   * Action status
   */
  var _useState15 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    actionStatus = _useState16[0],
    setActionStatus = _useState16[1];

  /**
   * pizza type and position
   */
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    pizzaState = _useState18[0],
    setPizzaState = _useState18[1];

  /**
   * Edit mode
   */
  var editMode = typeof ((_props$productCart = props.productCart) === null || _props$productCart === void 0 ? void 0 : _props$productCart.code) !== 'undefined';

  /**
   * Order context manager
   */
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    _useOrder2$ = _useOrder2[1],
    addProduct = _useOrder2$.addProduct,
    updateProduct = _useOrder2$.updateProduct,
    addMultiProduct = _useOrder2$.addMultiProduct;

  /**
   * Remove to balances in edit mode
   */
  var removeToBalance = editMode ? props.productCart.quantity : 0;

  /**
   * Current cart
   */
  var cart = (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(props.businessId)];

  /**
   * Total products in cart
   */
  var cartProducts = Object.values(orderState.carts).reduce(function (products, _cart) {
    return [].concat(_toConsumableArray(products), _toConsumableArray(_cart === null || _cart === void 0 ? void 0 : _cart.products));
  }, []);

  /**
   * Total the current product in cart
   */
  var productBalance = cartProducts.reduce(function (sum, _product) {
    return sum + (product.product && _product.id === product.product.id ? _product.quantity : 0);
  }, 0);

  /**
   * Total product in cart
   */
  var totalBalance = (productBalance || 0) - removeToBalance;

  /**
   * Config context manager
   */
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    stateConfig = _useConfig2[0];

  /**
   * Max total product in cart by config
   */
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;

  /**
   * Max total product in cart by config
   */
  var maxCartProductInventory = ((_product$product = product.product) !== null && _product$product !== void 0 && _product$product.inventoried ? (_product$product2 = product.product) === null || _product$product2 === void 0 ? void 0 : _product$product2.quantity : undefined) - totalBalance;

  /**
   * True if product is sold out
   */
  var isSoldOut = ((_product$product3 = product.product) === null || _product$product3 === void 0 ? void 0 : _product$product3.inventoried) && ((_product$product4 = product.product) === null || _product$product4 === void 0 ? void 0 : _product$product4.quantity) === 0;

  /**
   * Fix if maxCartProductInventory is not valid
   */
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;

  /**
   * Max product quantity
   */
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);

  /**
   * alsea validation
   */
  var isAlsea = ['alsea', 'alsea-staging'].includes(ordering.project);

  /**
   * alsea custom options
   */
  var quesoYSalsaOptions = ['queso y salsa', 'queso mozzarella y salsa'];

  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */
  var initProductCart = function initProductCart(product) {
    var _props$productCart2, _props$productCart3, _props$productCart4, _props$productCart5;
    var ingredients = {};
    for (var key in product.ingredients) {
      var ingredient = product.ingredients[key];
      ingredients["id:".concat(ingredient.id)] = {
        selected: true
      };
    }
    var quantity = productAddedToCartLength && product !== null && product !== void 0 && product.maximum_per_order ? (product === null || product === void 0 ? void 0 : product.maximum_per_order) - productAddedToCartLength : (_props$productCart2 = props.productCart) === null || _props$productCart2 === void 0 ? void 0 : _props$productCart2.quantity;
    var newProductCart = _objectSpread(_objectSpread({}, props.productCart), {}, {
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: ((_props$productCart3 = props.productCart) === null || _props$productCart3 === void 0 ? void 0 : _props$productCart3.ingredients) || ingredients,
      options: ((_props$productCart4 = props.productCart) === null || _props$productCart4 === void 0 ? void 0 : _props$productCart4.options) || {},
      comment: ((_props$productCart5 = props.productCart) === null || _props$productCart5 === void 0 ? void 0 : _props$productCart5.comment) || null,
      quantity: quantity || 1,
      favorite: product === null || product === void 0 ? void 0 : product.favorite
    });
    newProductCart.unitTotal = getUnitTotal(newProductCart);
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
    setProductCart(newProductCart);
  };

  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */
  var getUnitTotal = function getUnitTotal(productCart) {
    var _product$product7;
    var subtotal = 0;
    for (var i = 0; i < ((_product$product5 = product.product) === null || _product$product5 === void 0 || (_product$product5 = _product$product5.extras) === null || _product$product5 === void 0 ? void 0 : _product$product5.length); i++) {
      var _product$product5, _product$product6;
      var extra = (_product$product6 = product.product) === null || _product$product6 === void 0 ? void 0 : _product$product6.extras[i];
      for (var j = 0; j < ((_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.length); j++) {
        var _extra$options;
        var option = extra.options[j];
        for (var k = 0; k < ((_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length); k++) {
          var _option$suboptions, _productCart$options;
          var suboption = option.suboptions[k];
          if ((_productCart$options = productCart.options["id:".concat(option.id)]) !== null && _productCart$options !== void 0 && (_productCart$options = _productCart$options.suboptions["id:".concat(suboption.id)]) !== null && _productCart$options !== void 0 && _productCart$options.selected) {
            var suboptionState = productCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
            var quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1;
            var price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price;
            subtotal += price * quantity;
          }
        }
      }
    }
    return ((_product$product7 = product.product) === null || _product$product7 === void 0 ? void 0 : _product$product7.price) + subtotal;
  };
  /**
   * Method to add, remove favorite info for user from API
   */
  var handleFavoriteProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(productFav) {
      var isAdd,
        productId,
        changes,
        requestOptions,
        fetchEndpoint,
        response,
        content,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            isAdd = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            if (!(!product || !user)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'loading'));
            _context.p = 2;
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: true,
              error: null
            }));
            productId = productFav === null || productFav === void 0 ? void 0 : productFav.id;
            changes = {
              object_id: productId
            };
            requestOptions = _objectSpread({
              method: isAdd ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            }, isAdd && {
              body: JSON.stringify(changes)
            });
            fetchEndpoint = isAdd ? "".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/favorite_products") : "".concat(ordering.root, "/users/").concat(user.id, "/favorite_products/").concat(productId);
            _context.n = 3;
            return fetch(fetchEndpoint, requestOptions);
          case 3:
            response = _context.v;
            _context.n = 4;
            return response.json();
          case 4:
            content = _context.v;
            if (!content.error) {
              loadProductWithOptions();
              handleUpdateProducts && handleUpdateProducts(productId, {
                favorite: isAdd
              });
              showToast(_ToastContext.ToastType.Success, isAdd ? t('FAVORITE_ADDED', 'Favorite added') : t('FAVORITE_REMOVED', 'Favorite removed'));
            } else {
              setProduct(_objectSpread(_objectSpread({}, product), {}, {
                loading: false,
                error: content.result
              }));
              showToast(_ToastContext.ToastType.Error, content.result);
            }
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              error: [_t.message]
            }));
            showToast(_ToastContext.ToastType.Error, [_t.message]);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 5]]);
    }));
    return function handleFavoriteProduct(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  /**
   * Load product from API
   */
  var loadProductWithOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _orderState$options, _orderState$options2, _orderState$options3, source, parameters, _orderState$options4, _moment, _yield$ordering$busin, _yield$ordering$busin2, result, error, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            parameters = {
              version: 'v2',
              type: ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1
            };
            if ((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.moment && isValidMoment((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.moment, 'YYYY-MM-DD HH:mm:ss')) {
              _moment = _dayjs.default.utc((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = _moment;
            }
            _context2.n = 1;
            return ordering.businesses(props.businessId).categories(props.categoryId).products(props.productId).parameters(parameters).get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$busin = _context2.v;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (error) {
              _context2.n = 2;
              break;
            }
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              product: result
            }));
            return _context2.a(2);
          case 2:
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              error: [result]
            }));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              error: [_t2.message]
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function loadProductWithOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Remove related option by respect_to
   * @param {object} cart Current cart
   * @param {number} suboptionId Suboption id
   */
  var _removeRelatedOptions = function removeRelatedOptions(productCart, suboptionId) {
    product.product.extras.forEach(function (_extra) {
      _extra.options.forEach(function (_option) {
        if (_option.respect_to === suboptionId) {
          var _productCart$options2;
          var suboptions = (_productCart$options2 = productCart.options["id:".concat(_option.id)]) === null || _productCart$options2 === void 0 ? void 0 : _productCart$options2.suboptions;
          if (suboptions) {
            Object.keys(suboptions).map(function (suboptionKey) {
              return _removeRelatedOptions(productCart, parseInt(suboptionKey.split(':')[1]));
            });
          }
          if (productCart.options["id:".concat(_option.id)]) {
            productCart.options["id:".concat(_option.id)].suboptions = {};
            pizzaState["option:".concat(_option.id)] = {};
          }
        }
      });
    });
  };

  /**
   * Get changes for ingredients state
   * @param {object} state Current ingrediente state
   * @param {object} ingredient Current ingredient
   */
  var handleChangeIngredientState = function handleChangeIngredientState(state, ingredient) {
    productCart.ingredients["id:".concat(ingredient.id)] = state;
    setProductCart(_objectSpread(_objectSpread({}, productCart), {}, {
      ingredients: productCart.ingredients
    }));
  };

  /**
   * Change product state with new suboption state
   * @param {object} state New state with changes
   * @param {object} suboption Suboption object
   * @param {objecrt} option Option object
   * @param {object} product Product object
   */
  var handleChangeSuboptionState = function handleChangeSuboptionState(state, suboption, option) {
    var _newPizzaState;
    var newProductCart = JSON.parse(JSON.stringify(productCart));
    if (!newProductCart.options) {
      newProductCart.options = {};
    }
    if (!newProductCart.options["id:".concat(option.id)]) {
      newProductCart.options["id:".concat(option.id)] = {
        id: option.id,
        name: option.name,
        suboptions: {}
      };
    }
    var newPizzaState = {};
    if (!state.selected) {
      delete newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
      _removeRelatedOptions(newProductCart, suboption.id);
      newPizzaState = handleVerifyPizzaState(state, suboption, option);
    } else {
      if (option.min === option.max && option.min === 1) {
        var suboptions = newProductCart.options["id:".concat(option.id)].suboptions;
        if (suboptions) {
          Object.keys(suboptions).map(function (suboptionKey) {
            return _removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1]));
          });
        }
        if (newProductCart.options["id:".concat(option.id)]) {
          newProductCart.options["id:".concat(option.id)].suboptions = {};
        }
      }
      newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)] = state;
    }
    var suboptionsArray = [];
    var _selectedSuboptions = selectedSuboptions;
    if (state.selected) {
      var _iterator = _createForOfIteratorHelper(product.product.extras),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _extra2 = _step.value;
          var _iterator6 = _createForOfIteratorHelper(_extra2.options),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _Object$keys, _newProductCart$optio3;
              var _option3 = _step6.value;
              if (((_Object$keys = Object.keys((newProductCart === null || newProductCart === void 0 || (_newProductCart$optio3 = newProductCart.options["id:".concat(_option3 === null || _option3 === void 0 ? void 0 : _option3.id)]) === null || _newProductCart$optio3 === void 0 ? void 0 : _newProductCart$optio3.suboptions) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === 0) {
                newProductCart === null || newProductCart === void 0 || delete newProductCart.options["id:".concat(_option3 === null || _option3 === void 0 ? void 0 : _option3.id)];
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (newProductCart !== null && newProductCart !== void 0 && newProductCart.options) {
        var _iterator2 = _createForOfIteratorHelper(product.product.extras),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var extra = _step2.value;
            var _iterator3 = _createForOfIteratorHelper(extra.options),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _option2 = _step3.value;
                var _iterator4 = _createForOfIteratorHelper(_option2.suboptions),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _suboption = _step4.value;
                    if (newProductCart !== null && newProductCart !== void 0 && newProductCart.options["id:".concat(_option2 === null || _option2 === void 0 ? void 0 : _option2.id)]) {
                      var _newProductCart$optio;
                      if (newProductCart !== null && newProductCart !== void 0 && (_newProductCart$optio = newProductCart.options["id:".concat(_option2 === null || _option2 === void 0 ? void 0 : _option2.id)]) !== null && _newProductCart$optio !== void 0 && _newProductCart$optio.suboptions["id:".concat(_suboption === null || _suboption === void 0 ? void 0 : _suboption.id)]) {
                        _selectedSuboptions["suboption:".concat(_suboption.id)] = true;
                      } else {
                        _selectedSuboptions["suboption:".concat(_suboption.id)] = false;
                      }
                    } else {
                      var _option2$suboptions;
                      _selectedSuboptions["suboption:".concat(_suboption.id)] = (_suboption === null || _suboption === void 0 ? void 0 : _suboption.preselected) || (_option2 === null || _option2 === void 0 ? void 0 : _option2.max) === 1 && (_option2 === null || _option2 === void 0 ? void 0 : _option2.min) === 1 && (_option2 === null || _option2 === void 0 || (_option2$suboptions = _option2.suboptions) === null || _option2$suboptions === void 0 ? void 0 : _option2$suboptions.length) === 1;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var preselectedOptions = [];
      var preselectedSuboptions = [];
      var _iterator5 = _createForOfIteratorHelper(product.product.extras),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _extra3 = _step5.value;
          var _iterator7 = _createForOfIteratorHelper(_extra3.options),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _option4 = _step7.value;
              var _iterator8 = _createForOfIteratorHelper(_option4.suboptions),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _suboption2 = _step8.value;
                  if (_checkSuboptionsSelected(_suboption2 === null || _suboption2 === void 0 ? void 0 : _suboption2.id, _selectedSuboptions, dependsSuboptions)) {
                    preselectedOptions.push(_option4);
                    preselectedSuboptions.push(_suboption2);
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var states = preselectedSuboptions.map(function (suboption, i) {
        var _newProductCart$optio2, _preselectedOptions$i, _preselectedOptions$i2, _preselectedOptions$i3, _cartSuboption$quanti;
        var cartSuboption = (newProductCart === null || newProductCart === void 0 || (_newProductCart$optio2 = newProductCart.options["id:".concat((_preselectedOptions$i = preselectedOptions[i]) === null || _preselectedOptions$i === void 0 ? void 0 : _preselectedOptions$i.id)]) === null || _newProductCart$optio2 === void 0 ? void 0 : _newProductCart$optio2.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || suboption;
        var price = (_preselectedOptions$i2 = preselectedOptions[i]) !== null && _preselectedOptions$i2 !== void 0 && _preselectedOptions$i2.with_half_option && cartSuboption !== null && cartSuboption !== void 0 && cartSuboption.half_price && (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.position) !== 'whole' ? cartSuboption.half_price : cartSuboption.price;
        return {
          id: cartSuboption.id,
          name: cartSuboption.name,
          position: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state === null || state === void 0 ? void 0 : state.position : cartSuboption.position || 'whole',
          price: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state.price : price,
          quantity: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state.quantity : quesoYSalsaOptions.includes((_preselectedOptions$i3 = preselectedOptions[i]) === null || _preselectedOptions$i3 === void 0 || (_preselectedOptions$i3 = _preselectedOptions$i3.name) === null || _preselectedOptions$i3 === void 0 ? void 0 : _preselectedOptions$i3.toLowerCase()) && isAlsea ? (_cartSuboption$quanti = cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.quantity) !== null && _cartSuboption$quanti !== void 0 ? _cartSuboption$quanti : 1 : (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.quantity) || 1,
          selected: true,
          total: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state.total : price
        };
      });
      preselectedOptions.map(function (option, i) {
        var defaultSuboption = {
          option: option,
          suboption: preselectedSuboptions[i],
          state: states[i]
        };
        suboptionsArray = [].concat(_toConsumableArray(suboptionsArray), [defaultSuboption]);
      });
      newPizzaState = handleVerifyPizzaState(state, suboption, option, preselectedOptions, preselectedSuboptions, states);
    }
    var newBalance = Object.keys(newProductCart.options["id:".concat(option.id)].suboptions).length;
    if (option.limit_suboptions_by_max) {
      newBalance = Object.values(newProductCart.options["id:".concat(option.id)].suboptions).reduce(function (count, suboption) {
        return count + suboption.quantity;
      }, 0);
    }
    var hasPreselectedFlow = suboptionsArray.filter(function (state) {
      var _state$suboption;
      return state === null || state === void 0 || (_state$suboption = state.suboption) === null || _state$suboption === void 0 ? void 0 : _state$suboption.preselected;
    });
    if (newBalance <= option.max || ((_newPizzaState = newPizzaState) === null || _newPizzaState === void 0 || (_newPizzaState = _newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _newPizzaState === void 0 ? void 0 : _newPizzaState.value) <= option.max && option !== null && option !== void 0 && option.with_half_option) {
      newProductCart.options["id:".concat(option.id)].balance = newBalance;
      newProductCart.unitTotal = getUnitTotal(newProductCart);
      newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
      if (state.selected && (hasPreselectedFlow === null || hasPreselectedFlow === void 0 ? void 0 : hasPreselectedFlow.length) > 0) {
        handleChangeSuboptionDefault(suboptionsArray, newPizzaState);
        setSelectedSuboptions(_selectedSuboptions);
      } else {
        setProductCart(newProductCart);
      }
    }
  };
  var handleChangeSuboptionDefault = function handleChangeSuboptionDefault(defaultOptions, newPizzaState) {
    var newProductCart = JSON.parse(JSON.stringify(productCart));
    if (!newProductCart.options) {
      newProductCart.options = {};
    }
    defaultOptions.map(function (_ref3) {
      var _newPizzaState2;
      var option = _ref3.option,
        state = _ref3.state,
        suboption = _ref3.suboption;
      if (!newProductCart.options["id:".concat(option.id)]) {
        newProductCart.options["id:".concat(option.id)] = {
          id: option.id,
          name: option.name,
          suboptions: {}
        };
      }
      if (!(state !== null && state !== void 0 && state.selected)) {
        delete newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
        _removeRelatedOptions(newProductCart, suboption.id);
      } else {
        if (option.min === option.max && option.min === 1) {
          var suboptions = newProductCart.options["id:".concat(option.id)].suboptions;
          if (suboptions) {
            Object.keys(suboptions).map(function (suboptionKey) {
              return _removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1]));
            });
          }
          if (newProductCart.options["id:".concat(option.id)]) {
            newProductCart.options["id:".concat(option.id)].suboptions = {};
          }
        }
        newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)] = state;
      }
      var newBalance = Object.keys(newProductCart.options["id:".concat(option.id)].suboptions).length;
      if (option.limit_suboptions_by_max) {
        newBalance = Object.values(newProductCart.options["id:".concat(option.id)].suboptions).reduce(function (count, suboption) {
          return count + suboption.quantity;
        }, 0);
      }
      if (newBalance <= option.max || (newPizzaState === null || newPizzaState === void 0 || (_newPizzaState2 = newPizzaState["option:".concat(option.id)]) === null || _newPizzaState2 === void 0 ? void 0 : _newPizzaState2.value) <= option.max && option !== null && option !== void 0 && option.with_half_option) {
        newProductCart.options["id:".concat(option.id)].balance = newBalance;
        newProductCart.unitTotal = getUnitTotal(newProductCart);
        newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
      }
    });
    setProductCart(newProductCart);
  };

  /**
   * Change product state with new comment state
   * @param {object} e Product comment
   */
  var handleChangeCommentState = function handleChangeCommentState(e) {
    var _e$target$value;
    var comment = (_e$target$value = e.target.value) !== null && _e$target$value !== void 0 ? _e$target$value : '';
    productCart.comment = comment.trim();
    setProductCart(_objectSpread(_objectSpread({}, productCart), {}, {
      comment: comment.trim()
    }));
  };

  /**
   * Check options to get errors
   */
  var checkErrors = function checkErrors() {
    var _product$product8;
    var errors = {};
    if (!(product !== null && product !== void 0 && product.product)) {
      return errors;
    }
    product === null || product === void 0 || (_product$product8 = product.product) === null || _product$product8 === void 0 || (_product$product8 = _product$product8.extras) === null || _product$product8 === void 0 || _product$product8.forEach(function (extra) {
      var _extra$options2;
      extra === null || extra === void 0 || (_extra$options2 = extra.options) === null || _extra$options2 === void 0 || _extra$options2.map(function (option) {
        var _productCart$options3, _pizzaState, _Object$keys2, _option$suboptions3;
        var suboptions = (_productCart$options3 = productCart.options["id:".concat(option.id)]) === null || _productCart$options3 === void 0 ? void 0 : _productCart$options3.suboptions;
        var quantity = suboptions ? option !== null && option !== void 0 && option.with_half_option ? pizzaState === null || pizzaState === void 0 || (_pizzaState = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState === void 0 ? void 0 : _pizzaState.value : option.limit_suboptions_by_max ? Object.values(suboptions).reduce(function (count, suboption) {
          return count + suboption.quantity;
        }, 0) : (_Object$keys2 = Object.keys(suboptions)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.length : 0;
        var evaluateRespectTo = false;
        if (option.respect_to && productCart.options) {
          var options = productCart === null || productCart === void 0 ? void 0 : productCart.options;
          for (var key in options) {
            var _option$suboptions2;
            var _option = options[key];
            if ((_option$suboptions2 = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions2 !== void 0 && _option$suboptions2.selected) {
              evaluateRespectTo = true;
              break;
            }
          }
        }
        var evaluate = option.respect_to ? evaluateRespectTo : true;
        if ((option === null || option === void 0 || (_option$suboptions3 = option.suboptions) === null || _option$suboptions3 === void 0 ? void 0 : _option$suboptions3.length) > 0 && evaluate) {
          if (option.min > quantity) {
            errors["id:".concat(option.id)] = true;
          } else if (option.max < quantity && option !== null && option !== void 0 && option.with_half_option && isAlsea && option.max + 0.5 < quantity) {
            errors["id:".concat(option.id)] = true;
          }
        }
      });
    });
    setErrors(errors);
    return errors;
  };

  /**
   * Handle when click on save product
   */
  var handleSave = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      var _JSON$parse, _product$product9, _cart$metafields, _cart$metafields$find, _errors, isMultiProduct, hasAlreadyCoupon, successful, _values$professional, _values$serviceTime, _orderState$options5, _props$productCart6, _props$productCart7, changes, currentProduct, _product$product0, updatedProfessional, duration, _props$productCart8, _props$productCart9, _t3, _t4;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setProductLoading && setProductLoading(true);
            if (handleCustomSave) {
              handleCustomSave && handleCustomSave();
            }
            _errors = checkErrors();
            isMultiProduct = ((_JSON$parse = JSON.parse((product === null || product === void 0 || (_product$product9 = product.product) === null || _product$product9 === void 0 ? void 0 : _product$product9.meta) || '{}')) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.external_type) === 'coupon';
            hasAlreadyCoupon = (cart === null || cart === void 0 || (_cart$metafields = cart.metafields) === null || _cart$metafields === void 0 || (_cart$metafields$find = _cart$metafields.find) === null || _cart$metafields$find === void 0 || (_cart$metafields$find = _cart$metafields$find.call(_cart$metafields, function (meta) {
              return (meta === null || meta === void 0 ? void 0 : meta.key) === 'pulse_coupons';
            })) === null || _cart$metafields$find === void 0 ? void 0 : _cart$metafields$find.value) && isMultiProduct;
            if (!((Object.keys(_errors).length === 0 || isService) && !hasAlreadyCoupon)) {
              _context3.n = 8;
              break;
            }
            successful = true;
            if (!useOrderContext) {
              _context3.n = 7;
              break;
            }
            successful = false;
            changes = cart || {
              business_id: props.businessId
            };
            currentProduct = !isService ? _objectSpread({}, productCart) : _objectSpread(_objectSpread({}, productCart), {}, {
              professional_id: values === null || values === void 0 || (_values$professional = values.professional) === null || _values$professional === void 0 ? void 0 : _values$professional.id,
              service_start: (_values$serviceTime = values === null || values === void 0 ? void 0 : values.serviceTime) !== null && _values$serviceTime !== void 0 ? _values$serviceTime : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.moment
            });
            onSave(productCart, !((_props$productCart6 = props.productCart) !== null && _props$productCart6 !== void 0 && _props$productCart6.code));
            if ((_props$productCart7 = props.productCart) !== null && _props$productCart7 !== void 0 && _props$productCart7.code) {
              _context3.n = 5;
              break;
            }
            if (!isMultiProduct) {
              _context3.n = 2;
              break;
            }
            _context3.n = 1;
            return addMultiProduct(currentProduct, changes, false);
          case 1:
            _t3 = _context3.v;
            _context3.n = 4;
            break;
          case 2:
            _context3.n = 3;
            return addProduct(currentProduct, changes, false);
          case 3:
            _t3 = _context3.v;
          case 4:
            successful = _t3;
            _context3.n = 7;
            break;
          case 5:
            _context3.n = 6;
            return updateProduct(currentProduct, changes, false);
          case 6:
            successful = _context3.v;
            if (successful) {
              events.emit('product_edited', currentProduct);
            }
          case 7:
            if (successful) {
              if (isService) {
                updatedProfessional = JSON.parse(JSON.stringify(values === null || values === void 0 ? void 0 : values.professional));
                duration = product === null || product === void 0 || (_product$product0 = product.product) === null || _product$product0 === void 0 ? void 0 : _product$product0.duration;
                updatedProfessional.busy_times.push({
                  start: values === null || values === void 0 ? void 0 : values.serviceTime,
                  end: (0, _moment2.default)(values === null || values === void 0 ? void 0 : values.serviceTime).add(duration, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                  duration: duration
                });
                handleUpdateProfessionals && handleUpdateProfessionals(updatedProfessional);
                handleChangeProfessional && handleChangeProfessional(updatedProfessional);
              }
            } else {
              showToast(_ToastContext.ToastType.Error, !((_props$productCart8 = props.productCart) !== null && _props$productCart8 !== void 0 && _props$productCart8.code) ? t('FAILED_TO_ADD_PRODUCT', 'Failed to add product') : t('FAILED_TO_UPDATE_PRODUCT', 'Failed to update product'), 5000);
            }
          case 8:
            if (hasAlreadyCoupon) {
              showToast(_ToastContext.ToastType.Error, t('COUPON_ALREADY_ADDED', 'You have a coupon already added'));
            }
            setProductLoading && setProductLoading(false);
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t4 = _context3.v;
            showToast(_ToastContext.ToastType.Error, !((_props$productCart9 = props.productCart) !== null && _props$productCart9 !== void 0 && _props$productCart9.code) ? t('FAILED_TO_ADD_PRODUCT', 'Failed to add product') : t('FAILED_TO_UPDATE_PRODUCT', 'Failed to update product'));
            setProductLoading && setProductLoading(false);
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function handleSave(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleCreateGuestUser = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(values) {
      var _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, _t5;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context4.n = 1;
            return ordering.users().save(values);
          case 1:
            _yield$ordering$users = _context4.v;
            _yield$ordering$users2 = _yield$ordering$users.content;
            error = _yield$ordering$users2.error;
            result = _yield$ordering$users2.result;
            if (!error) {
              setActionStatus({
                error: null,
                loading: false
              });
              login({
                user: result,
                token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
              });
            } else {
              setActionStatus({
                error: result,
                loading: false
              });
            }
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t5 = _context4.v;
            setActionStatus({
              error: _t5.message,
              loading: false
            });
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    }));
    return function handleCreateGuestUser(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var increment = function increment() {
    if (maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity) {
      return;
    }
    productCart.quantity++;
    productCart.unitTotal = getUnitTotal(productCart);
    productCart.total = productCart.unitTotal * productCart.quantity;
    setProductCart(_objectSpread({}, productCart));
  };
  var decrement = function decrement() {
    if (productCart.quantity === 0) {
      return;
    }
    productCart.quantity--;
    productCart.unitTotal = getUnitTotal(productCart);
    productCart.total = productCart.unitTotal * productCart.quantity;
    setProductCart(_objectSpread({}, productCart));
  };
  var handleChangeProductCartQuantity = function handleChangeProductCartQuantity(quantity) {
    if (maxProductQuantity <= 0 || quantity > maxProductQuantity) {
      return;
    }
    productCart.quantity = quantity || 0;
    productCart.total = productCart.unitTotal * productCart.quantity;
    setProductCart(_objectSpread({}, productCart));
  };

  /**
   * Check if option must show
   * @param {object} option Option to check
   */
  var showOption = function showOption(option) {
    var _option$suboptions5;
    var showOption = true;
    if (option.respect_to) {
      showOption = false;
      if (productCart.options) {
        var options = productCart.options;
        for (var key in options) {
          var _option$suboptions4;
          var _option = options[key];
          if ((_option$suboptions4 = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions4 !== void 0 && _option$suboptions4.selected) {
            showOption = true;
            break;
          }
        }
      }
    }
    if ((option === null || option === void 0 || (_option$suboptions5 = option.suboptions) === null || _option$suboptions5 === void 0 ? void 0 : _option$suboptions5.length) === 0) showOption = false;
    return showOption;
  };

  /**
   * Load professionals from API
   */
  var getProfessionalList = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _yield$ordering$busin3, _yield$ordering$busin4, result, error, _result$professionals, _t6;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: true
            }));
            _context5.n = 1;
            return ordering.businesses(props.businessId).select(['id', 'professionals']).get();
          case 1:
            _yield$ordering$busin3 = _context5.v;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            result = _yield$ordering$busin4.result;
            error = _yield$ordering$busin4.error;
            if (error) {
              _context5.n = 2;
              break;
            }
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              professionals: (_result$professionals = result === null || result === void 0 ? void 0 : result.professionals) !== null && _result$professionals !== void 0 ? _result$professionals : []
            }));
            return _context5.a(2);
          case 2:
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              error: [result]
            }));
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t6 = _context5.v;
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              error: [_t6.message]
            }));
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
    return function getProfessionalList() {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * function to verify position of pizza ingredients
   * @param {object} newProductCart cart updated with suboptions
   */
  var handleVerifyPizzaState = function handleVerifyPizzaState(state, suboption, option, preselectedOptions, preselectedSuboptions, states) {
    var newPizzaState = {};
    if (state !== null && state !== void 0 && state.selected) {
      preselectedOptions.map(function (option, i) {
        if (option !== null && option !== void 0 && option.with_half_option) {
          var _newPizzaState3, _preselectedSuboption, _states$i, _states$i2, _states$i3, _states$i4;
          newPizzaState = _objectSpread(_objectSpread({}, newPizzaState), {}, _defineProperty({}, "option:".concat(option === null || option === void 0 ? void 0 : option.id), _objectSpread(_objectSpread({}, (_newPizzaState3 = newPizzaState) === null || _newPizzaState3 === void 0 ? void 0 : _newPizzaState3["option:".concat(option === null || option === void 0 ? void 0 : option.id)]), {}, _defineProperty({}, "suboption:".concat((_preselectedSuboption = preselectedSuboptions[i]) === null || _preselectedSuboption === void 0 ? void 0 : _preselectedSuboption.id), isAlsea ? (((_states$i = states[i]) === null || _states$i === void 0 ? void 0 : _states$i.position) === 'whole' ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i2 = states[i]) === null || _states$i2 === void 0 ? void 0 : _states$i2.position) === 'whole' ? 1 : 0.5) * states[i].quantity))));
          var suboptionValue = isAlsea ? (((_states$i3 = states[i]) === null || _states$i3 === void 0 ? void 0 : _states$i3.position) === 'whole' || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i4 = states[i]) === null || _states$i4 === void 0 ? void 0 : _states$i4.position) === 'whole' || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 ? 1 : 0.5) * states[i].quantity;
          var value = suboptionValue + (newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value || 0);
          newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value = value;
        }
      });
    } else {
      var _newPizzaState4, _Object$values, _newPizzaState5;
      newPizzaState = _objectSpread(_objectSpread({}, pizzaState), {}, _defineProperty({}, "option:".concat(option === null || option === void 0 ? void 0 : option.id), _objectSpread(_objectSpread({}, pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]), {}, {
        value: 0
      })));
      (_newPizzaState4 = newPizzaState) === null || _newPizzaState4 === void 0 || (_newPizzaState4 = _newPizzaState4["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _newPizzaState4 === void 0 || delete _newPizzaState4["suboption:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)];
      var value = Object === null || Object === void 0 || (_Object$values = Object.values(((_newPizzaState5 = newPizzaState) === null || _newPizzaState5 === void 0 ? void 0 : _newPizzaState5["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) || {})) === null || _Object$values === void 0 ? void 0 : _Object$values.reduce(function (acc, value) {
        return acc + value;
      }, 0);
      newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value = value;
    }
    setPizzaState(newPizzaState);
    return newPizzaState;
  };
  /**
   * Init product cart when product changed
   */
  (0, _react.useEffect)(function () {
    if (product.product) {
      initProductCart(product.product);
    }
  }, [product.product]);

  /**
   * Check error when product state changed
   */
  (0, _react.useEffect)(function () {
    checkErrors();
  }, [productCart]);

  /**
   * Listening product changes
   */
  (0, _react.useEffect)(function () {
    var _props$product2;
    if ((props === null || props === void 0 || (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.load_type) === 'lazy') return;
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      product: props.product
    }));
  }, [props.product]);

  /**
   * Check if there is an option required with one suboption
  */

  var _checkSuboptionsSelected = function checkSuboptionsSelected(suboptionId, _selectedSuboptions, _dependsSuboptions) {
    var _dependsSuboptions2;
    var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (count > 100) {
      return false;
    }
    if (!_selectedSuboptions["suboption:".concat(suboptionId)]) {
      return false;
    }
    var respectTo = (_dependsSuboptions2 = _dependsSuboptions["suboption:".concat(suboptionId)]) !== null && _dependsSuboptions2 !== void 0 ? _dependsSuboptions2 : null;
    if (respectTo === null) {
      return _selectedSuboptions["suboption:".concat(suboptionId)];
    }
    return _checkSuboptionsSelected(respectTo, _selectedSuboptions, _dependsSuboptions, count++);
  };
  (0, _react.useEffect)(function () {
    var _product$product1;
    if (!(product !== null && product !== void 0 && product.loading) && product !== null && product !== void 0 && product.product && ((_product$product1 = product.product) === null || _product$product1 === void 0 || (_product$product1 = _product$product1.extras) === null || _product$product1 === void 0 ? void 0 : _product$product1.length) > 0) {
      var _product$product10, _product$product11;
      var _selectedSuboptions = {};
      var _dependsSuboptions = {};
      var preselectedOptions = [];
      var preselectedSuboptions = [];
      var _iterator9 = _createForOfIteratorHelper(product === null || product === void 0 || (_product$product10 = product.product) === null || _product$product10 === void 0 ? void 0 : _product$product10.extras),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var extra = _step9.value;
          if (extra !== null && extra !== void 0 && extra.options) {
            var _iterator1 = _createForOfIteratorHelper(extra === null || extra === void 0 ? void 0 : extra.options),
              _step1;
            try {
              for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                var option = _step1.value;
                var _iterator10 = _createForOfIteratorHelper(option === null || option === void 0 ? void 0 : option.suboptions),
                  _step10;
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var _option$suboptions6, _props$productCart10;
                    var suboption = _step10.value;
                    _selectedSuboptions["suboption:".concat(suboption.id)] = (suboption.preselected || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 || (_option$suboptions6 = option.suboptions) === null || _option$suboptions6 === void 0 ? void 0 : _option$suboptions6.length) === 1) && (!editMode || !!((_props$productCart10 = props.productCart) !== null && _props$productCart10 !== void 0 && (_props$productCart10 = _props$productCart10.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) !== null && _props$productCart10 !== void 0 && _props$productCart10.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]));
                    _dependsSuboptions["suboption:".concat(suboption.id)] = option !== null && option !== void 0 && option.conditioned && (option === null || option === void 0 ? void 0 : option.respect_to) !== null ? option === null || option === void 0 ? void 0 : option.respect_to : null;
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }
            } catch (err) {
              _iterator1.e(err);
            } finally {
              _iterator1.f();
            }
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (editMode && props !== null && props !== void 0 && props.productCart) {
        var _Object$values2, _props$productCart0;
        (_Object$values2 = Object.values(props === null || props === void 0 || (_props$productCart0 = props.productCart) === null || _props$productCart0 === void 0 ? void 0 : _props$productCart0.options)) === null || _Object$values2 === void 0 || _Object$values2.map(function (option) {
          var _Object$values3;
          return (_Object$values3 = Object.values(option === null || option === void 0 ? void 0 : option.suboptions)) === null || _Object$values3 === void 0 ? void 0 : _Object$values3.map(function (suboption) {
            _selectedSuboptions["suboption:".concat(suboption.id)] = true;
          });
        });
      }
      var _iterator0 = _createForOfIteratorHelper(product === null || product === void 0 || (_product$product11 = product.product) === null || _product$product11 === void 0 ? void 0 : _product$product11.extras),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var _extra4 = _step0.value;
          if (_extra4 !== null && _extra4 !== void 0 && _extra4.options) {
            var _iterator11 = _createForOfIteratorHelper(_extra4 === null || _extra4 === void 0 ? void 0 : _extra4.options),
              _step11;
            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _option5 = _step11.value;
                var _iterator12 = _createForOfIteratorHelper(_option5 === null || _option5 === void 0 ? void 0 : _option5.suboptions),
                  _step12;
                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _suboption3 = _step12.value;
                    if (_checkSuboptionsSelected(_suboption3 === null || _suboption3 === void 0 ? void 0 : _suboption3.id, _selectedSuboptions, _dependsSuboptions)) {
                      preselectedOptions.push(_option5);
                      preselectedSuboptions.push(_suboption3);
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      setSelectedSuboptions(_selectedSuboptions);
      setDependsSuboptions(_dependsSuboptions);
      if (!(preselectedOptions !== null && preselectedOptions !== void 0 && preselectedOptions.length)) {
        return;
      }
      var states = {};
      if (editMode && props !== null && props !== void 0 && props.productCart) {
        var _Object$values4, _props$productCart1;
        var cartSuboptions = (_Object$values4 = Object.values(props === null || props === void 0 || (_props$productCart1 = props.productCart) === null || _props$productCart1 === void 0 ? void 0 : _props$productCart1.options)) === null || _Object$values4 === void 0 || (_Object$values4 = _Object$values4.map(function (option) {
          return Object.values(option === null || option === void 0 ? void 0 : option.suboptions);
        })) === null || _Object$values4 === void 0 ? void 0 : _Object$values4.flat();
        states = cartSuboptions.map(function (suboption, i) {
          var _preselectedOptions$i4;
          var price = (_preselectedOptions$i4 = preselectedOptions[i]) !== null && _preselectedOptions$i4 !== void 0 && _preselectedOptions$i4.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price: price,
            quantity: suboption.quantity,
            selected: true,
            total: price
          };
        });
      } else {
        states = preselectedSuboptions.map(function (suboption, i) {
          var _preselectedOptions$i5;
          var price = (_preselectedOptions$i5 = preselectedOptions[i]) !== null && _preselectedOptions$i5 !== void 0 && _preselectedOptions$i5.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price: price,
            quantity: 1,
            selected: true,
            total: price
          };
        });
      }
      var suboptionsArray = [];
      var newPizzaState = {};
      preselectedOptions.map(function (option, i) {
        var _states;
        var defaultSuboption = {
          option: option,
          suboption: preselectedSuboptions[i],
          state: (_states = states) === null || _states === void 0 ? void 0 : _states.find(function (state) {
            var _preselectedSuboption2;
            return (state === null || state === void 0 ? void 0 : state.id) === ((_preselectedSuboption2 = preselectedSuboptions[i]) === null || _preselectedSuboption2 === void 0 ? void 0 : _preselectedSuboption2.id);
          })
        };
        suboptionsArray = [].concat(_toConsumableArray(suboptionsArray), [defaultSuboption]);
        if (option !== null && option !== void 0 && option.with_half_option) {
          var _newPizzaState6, _preselectedSuboption3, _states$i5, _states$i6, _states$i7, _states$i8;
          newPizzaState = _objectSpread(_objectSpread({}, newPizzaState), {}, _defineProperty({}, "option:".concat(option === null || option === void 0 ? void 0 : option.id), _objectSpread(_objectSpread({}, (_newPizzaState6 = newPizzaState) === null || _newPizzaState6 === void 0 ? void 0 : _newPizzaState6["option:".concat(option === null || option === void 0 ? void 0 : option.id)]), {}, _defineProperty({}, "suboption:".concat((_preselectedSuboption3 = preselectedSuboptions[i]) === null || _preselectedSuboption3 === void 0 ? void 0 : _preselectedSuboption3.id), isAlsea ? (((_states$i5 = states[i]) === null || _states$i5 === void 0 ? void 0 : _states$i5.position) === 'whole' ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i6 = states[i]) === null || _states$i6 === void 0 ? void 0 : _states$i6.position) === 'whole' ? 1 : 0.5) * states[i].quantity))));
          var suboptionValue = isAlsea ? (((_states$i7 = states[i]) === null || _states$i7 === void 0 ? void 0 : _states$i7.position) === 'whole' || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i8 = states[i]) === null || _states$i8 === void 0 ? void 0 : _states$i8.position) === 'whole' || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 ? 1 : 0.5) * states[i].quantity;
          var value = suboptionValue + (newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value || 0);
          newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value = value;
        }
      });
      setPizzaState(newPizzaState);
      setDefaultSubOptions(suboptionsArray);
      setCustomDefaultSubOptions(suboptionsArray);
    }
  }, [JSON.stringify(product.product), product === null || product === void 0 ? void 0 : product.loading]);
  if (isStarbucks) {
    (0, _react.useEffect)(function () {
      if (product !== null && product !== void 0 && product.product && Object.keys(product === null || product === void 0 ? void 0 : product.product).length) {
        var _ref7, _product$product12, _ref8;
        var options = (_ref7 = []).concat.apply(_ref7, _toConsumableArray((_product$product12 = product.product) === null || _product$product12 === void 0 || (_product$product12 = _product$product12.extras) === null || _product$product12 === void 0 ? void 0 : _product$product12.map(function (extra) {
          var _extra$options3;
          return extra === null || extra === void 0 || (_extra$options3 = extra.options) === null || _extra$options3 === void 0 ? void 0 : _extra$options3.filter(function (option) {
            return option.name === 'Tamaño' && option.suboptions.filter(function (suboption) {
              return suboption.name === 'Grande (16oz - 437ml)';
            }).length === 1;
          });
        })));
        if (!(options !== null && options !== void 0 && options.length)) {
          return;
        }
        var suboptions = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(options.map(function (option) {
          return option.suboptions;
        }))).filter(function (suboption) {
          return suboption.name === 'Grande (16oz - 437ml)';
        });
        var states = suboptions.map(function (suboption, i) {
          var price = options[i].with_half_option && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price: price,
            quantity: 1,
            selected: true,
            total: price
          };
        });
        var defaultOptions = options.map(function (option, i) {
          return {
            option: option,
            suboption: suboptions[i],
            state: states[i]
          };
        });
        setDefaultSubOptions([].concat(_toConsumableArray(customDefaultSubOptions), _toConsumableArray(defaultOptions)));
      }
    }, [customDefaultSubOptions]);
  }
  /**
   * Check if defaultSubOption has content to set product Cart
   */
  (0, _react.useEffect)(function () {
    if (defaultSubOptions !== null && defaultSubOptions !== void 0 && defaultSubOptions.length) {
      handleChangeSuboptionDefault(defaultSubOptions);
    }
  }, [JSON.stringify(defaultSubOptions)]);

  /**
   * Load product on component mounted
   */
  (0, _react.useEffect)(function () {
    var _props$product3;
    if (!props.product && (!props.businessId || !props.categoryId || !props.productId)) {
      throw new Error('`businessId` && `categoryId` && `productId` are required if `product` was not provided.');
    }
    if (props.product && ((_props$product3 = props.product) === null || _props$product3 === void 0 ? void 0 : _props$product3.load_type) === 'lazy' && props.businessId && props.categoryId && props.productId || !props.product && props.businessId && props.categoryId && props.productId) {
      loadProductWithOptions();
    }
    return function () {
      if (requestsState.product) {
        requestsState.product.cancel();
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!isService) return;
    if (isCartProduct) {
      getProfessionalList();
    } else {
      setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
        professionals: professionalList
      }));
    }
  }, [isService, isCartProduct, professionalList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productObject: product,
    productCart: productCart,
    errors: errors,
    editMode: editMode,
    isSoldOut: isSoldOut,
    actionStatus: actionStatus,
    maxProductQuantity: maxProductQuantity,
    pizzaState: pizzaState,
    setPizzaState: setPizzaState,
    increment: increment,
    decrement: decrement,
    handleChangeProductCartQuantity: handleChangeProductCartQuantity,
    handleSave: handleSave,
    showOption: showOption,
    handleCreateGuestUser: handleCreateGuestUser,
    handleFavoriteProduct: handleFavoriteProduct,
    handleChangeIngredientState: handleChangeIngredientState,
    handleChangeSuboptionState: handleChangeSuboptionState,
    handleChangeCommentState: handleChangeCommentState,
    professionalListState: professionalListState,
    cart2: props.productCart,
    isAlsea: isAlsea,
    quesoYSalsaOptions: quesoYSalsaOptions
  })));
};
ProductForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * `businessId`
   */
  businessId: _propTypes.default.number.isRequired,
  /**
   * `categoryId` is required if `product` prop is not present
   */
  categoryId: _propTypes.default.number,
  /**
   * `productId` is required if `product` prop is not present
   */
  productId: _propTypes.default.number,
  /**
   * `product` is required if `businessId`, `categoryId` or `productId` is not present
   */
  product: _propTypes.default.object,
  /**
   * Product from cart
   */
  productCart: _propTypes.default.object,
  /**
   * useOrderContext
   */
  useOrderContext: _propTypes.default.bool,
  /**
   * Function to save event
   */
  onSave: _propTypes.default.func
};
ProductForm.defaultProps = {
  productCart: {},
  useOrderContext: true,
  balance: 0
};