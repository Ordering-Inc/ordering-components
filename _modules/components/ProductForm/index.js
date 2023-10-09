"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
var Sentry = _interopRequireWildcard(require("@sentry/react"));
var _OrderContext = require("../../contexts/OrderContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _ApiContext = require("../../contexts/ApiContext");
var _EventContext = require("../../contexts/EventContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductForm = exports.ProductForm = function ProductForm(props) {
  var _props$productCart, _orderState$carts, _product$product, _product$product2, _product$product3, _product$product4;
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
    handleChangeProfessional = props.handleChangeProfessional;
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
  var _useState = (0, _react.useState)({
      product: props.product,
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
    _useState10 = _slicedToArray(_useState9, 2),
    customDefaultSubOptions = _useState10[0],
    setCustomDefaultSubOptions = _useState10[1];

  /**
   * preselected and selected suboptions
   */
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedSuboptions = _useState12[0],
    setSelectedSuboptions = _useState12[1];

  /**
   * dictionary of respect_to suboptions
   */
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    dependsSuboptions = _useState14[0],
    setDependsSuboptions = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      professionals: [],
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    professionalListState = _useState16[0],
    setProfessionalListState = _useState16[1];

  /**
   * Action status
   */
  var _useState17 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    actionStatus = _useState18[0],
    setActionStatus = _useState18[1];

  /**
   * pizza type and position
   */
  var _useState19 = (0, _react.useState)({
      type: '',
      left: false,
      right: false,
      center: false
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    pizzaType = _useState20[0],
    setPizzaType = _useState20[1];

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
    updateProduct = _useOrder2$.updateProduct;

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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(productFav) {
      var isAdd,
        productId,
        changes,
        requestOptions,
        fetchEndpoint,
        response,
        content,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isAdd = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            if (!(!product || !user)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'loading'));
            _context.prev = 4;
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
            _context.next = 12;
            return fetch(fetchEndpoint, requestOptions);
          case 12:
            response = _context.sent;
            _context.next = 15;
            return response.json();
          case 15:
            content = _context.sent;
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
            _context.next = 23;
            break;
          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
            showToast(_ToastContext.ToastType.Error, [_context.t0.message]);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 19]]);
    }));
    return function handleFavoriteProduct(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Load product from API
   */
  var loadProductWithOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var source, _yield$ordering$busin, _yield$ordering$busin2, result, error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            _context2.next = 6;
            return ordering.businesses(props.businessId).categories(props.categoryId).products(props.productId).get({
              cancelToken: source
            });
          case 6:
            _yield$ordering$busin = _context2.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (error) {
              _context2.next = 13;
              break;
            }
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              product: result
            }));
            return _context2.abrupt("return");
          case 13:
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              error: [result]
            }));
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            setProduct(_objectSpread(_objectSpread({}, product), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 16]]);
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
  var removeRelatedOptions = function removeRelatedOptions(productCart, suboptionId) {
    product.product.extras.forEach(function (_extra) {
      _extra.options.forEach(function (_option) {
        if (_option.respect_to === suboptionId) {
          var _productCart$options2;
          var suboptions = (_productCart$options2 = productCart.options["id:".concat(_option.id)]) === null || _productCart$options2 === void 0 ? void 0 : _productCart$options2.suboptions;
          if (suboptions) {
            Object.keys(suboptions).map(function (suboptionKey) {
              return removeRelatedOptions(productCart, parseInt(suboptionKey.split(':')[1]));
            });
          }
          if (productCart.options["id:".concat(_option.id)]) {
            productCart.options["id:".concat(_option.id)].suboptions = {};
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
    if (!state.selected) {
      delete newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
      removeRelatedOptions(newProductCart, suboption.id);
    } else {
      if (option.min === option.max && option.min === 1) {
        var suboptions = newProductCart.options["id:".concat(option.id)].suboptions;
        if (suboptions) {
          Object.keys(suboptions).map(function (suboptionKey) {
            return removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1]));
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
              var _Object$keys, _newProductCart$optio2;
              var _option3 = _step6.value;
              if (((_Object$keys = Object.keys((newProductCart === null || newProductCart === void 0 || (_newProductCart$optio2 = newProductCart.options["id:".concat(_option3 === null || _option3 === void 0 ? void 0 : _option3.id)]) === null || _newProductCart$optio2 === void 0 ? void 0 : _newProductCart$optio2.suboptions) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === 0) {
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
        // actualizacion del diccionario de options selected
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
                  if (checkSuboptionsSelected(_suboption2 === null || _suboption2 === void 0 ? void 0 : _suboption2.id, _selectedSuboptions, dependsSuboptions)) {
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
        var _preselectedOptions$i;
        var price = (_preselectedOptions$i = preselectedOptions[i]) !== null && _preselectedOptions$i !== void 0 && _preselectedOptions$i.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
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
      preselectedOptions.map(function (option) {
        var defaultSuboptions = option.suboptions.filter(function (suboption) {
          return states === null || states === void 0 ? void 0 : states.some(function (state) {
            return (state === null || state === void 0 ? void 0 : state.id) === (suboption === null || suboption === void 0 ? void 0 : suboption.id);
          });
        }).map(function (suboption) {
          return {
            option: option,
            suboption: suboption,
            state: states.find(function (state) {
              return (state === null || state === void 0 ? void 0 : state.id) === (suboption === null || suboption === void 0 ? void 0 : suboption.id);
            })
          };
        });
        suboptionsArray = [].concat(_toConsumableArray(suboptionsArray), _toConsumableArray(defaultSuboptions));
      });
    }
    var newBalance = Object.keys(newProductCart.options["id:".concat(option.id)].suboptions).length;
    if (option.limit_suboptions_by_max) {
      newBalance = Object.values(newProductCart.options["id:".concat(option.id)].suboptions).reduce(function (count, suboption) {
        return count + suboption.quantity;
      }, 0);
    }
    if (newBalance <= option.max) {
      var _suboptionsArray;
      newProductCart.options["id:".concat(option.id)].balance = newBalance;
      newProductCart.unitTotal = getUnitTotal(newProductCart);
      newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
      if (state.selected && ((_suboptionsArray = suboptionsArray) === null || _suboptionsArray === void 0 ? void 0 : _suboptionsArray.length) > 0) {
        handleChangeSuboptionDefault(suboptionsArray);
        setSelectedSuboptions(_selectedSuboptions);
      } else {
        setProductCart(newProductCart);
      }
    }
  };
  var handleChangeSuboptionDefault = function handleChangeSuboptionDefault(defaultOptions) {
    var newProductCart = JSON.parse(JSON.stringify(productCart));
    if (!newProductCart.options) {
      newProductCart.options = {};
    }
    defaultOptions.map(function (_ref3) {
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
      if (!state.selected) {
        delete newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
        removeRelatedOptions(newProductCart, suboption.id);
      } else {
        if (option.min === option.max && option.min === 1) {
          var suboptions = newProductCart.options["id:".concat(option.id)].suboptions;
          if (suboptions) {
            Object.keys(suboptions).map(function (suboptionKey) {
              return removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1]));
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
      if (newBalance <= option.max) {
        newProductCart.options["id:".concat(option.id)].balance = newBalance;
        newProductCart.unitTotal = getUnitTotal(newProductCart);
        newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
      }
    });
    handleVerifyPizzaType(newProductCart);
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
    (_product$product8 = product.product) === null || _product$product8 === void 0 || (_product$product8 = _product$product8.extras) === null || _product$product8 === void 0 || _product$product8.forEach(function (extra) {
      extra.options.map(function (option) {
        var _productCart$options3, _Object$keys2, _option$suboptions3;
        var suboptions = (_productCart$options3 = productCart.options["id:".concat(option.id)]) === null || _productCart$options3 === void 0 ? void 0 : _productCart$options3.suboptions;
        var quantity = suboptions ? option.limit_suboptions_by_max ? Object.values(suboptions).reduce(function (count, suboption) {
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
          } else if (option.max < quantity) {
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var errors, successful, _values$professional, _values$serviceTime, _orderState$options, _props$productCart6, changes, currentProduct, _props$productCart7, _product$product9, updatedProfessional, duration;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (handleCustomSave) {
              handleCustomSave && handleCustomSave();
            }
            errors = checkErrors();
            if (!(Object.keys(errors).length === 0 || isService)) {
              _context3.next = 19;
              break;
            }
            successful = true;
            if (!useOrderContext) {
              _context3.next = 18;
              break;
            }
            successful = false;
            changes = cart || {
              business_id: props.businessId
            };
            currentProduct = !isService ? _objectSpread({}, productCart) : _objectSpread(_objectSpread({}, productCart), {}, {
              professional_id: values === null || values === void 0 || (_values$professional = values.professional) === null || _values$professional === void 0 ? void 0 : _values$professional.id,
              service_start: (_values$serviceTime = values === null || values === void 0 ? void 0 : values.serviceTime) !== null && _values$serviceTime !== void 0 ? _values$serviceTime : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.moment
            });
            if ((_props$productCart6 = props.productCart) !== null && _props$productCart6 !== void 0 && _props$productCart6.code) {
              _context3.next = 14;
              break;
            }
            _context3.next = 11;
            return addProduct(currentProduct, changes, false);
          case 11:
            successful = _context3.sent;
            _context3.next = 18;
            break;
          case 14:
            _context3.next = 16;
            return updateProduct(currentProduct, changes, false);
          case 16:
            successful = _context3.sent;
            if (successful) {
              events.emit('product_edited', currentProduct);
            }
          case 18:
            if (successful) {
              onSave(productCart, !((_props$productCart7 = props.productCart) !== null && _props$productCart7 !== void 0 && _props$productCart7.code));
              if (isService) {
                updatedProfessional = JSON.parse(JSON.stringify(values === null || values === void 0 ? void 0 : values.professional));
                duration = product === null || product === void 0 || (_product$product9 = product.product) === null || _product$product9 === void 0 ? void 0 : _product$product9.duration;
                updatedProfessional.busy_times.push({
                  start: values === null || values === void 0 ? void 0 : values.serviceTime,
                  end: (0, _moment.default)(values === null || values === void 0 ? void 0 : values.serviceTime).add(duration, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                  duration: duration
                });
                handleUpdateProfessionals && handleUpdateProfessionals(updatedProfessional);
                handleChangeProfessional && handleChangeProfessional(updatedProfessional);
              }
            }
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleSave(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleCreateGuestUser = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
      var _yield$ordering$users, _yield$ordering$users2, error, result, _result$session;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context4.next = 4;
            return ordering.users().save(values);
          case 4:
            _yield$ordering$users = _context4.sent;
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
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            setActionStatus({
              error: _context4.t0.message,
              loading: false
            });
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _yield$ordering$busin3, _yield$ordering$busin4, result, error, _result$professionals;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: true
            }));
            _context5.next = 4;
            return ordering.businesses(props.businessId).select(['id', 'professionals']).get();
          case 4:
            _yield$ordering$busin3 = _context5.sent;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            result = _yield$ordering$busin4.result;
            error = _yield$ordering$busin4.error;
            if (error) {
              _context5.next = 11;
              break;
            }
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              professionals: (_result$professionals = result === null || result === void 0 ? void 0 : result.professionals) !== null && _result$professionals !== void 0 ? _result$professionals : []
            }));
            return _context5.abrupt("return");
          case 11:
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              error: [result]
            }));
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function getProfessionalList() {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * function to verify position of pizza ingredients
   * @param {object} newProductCart cart updated with suboptions
   */
  var handleVerifyPizzaType = function handleVerifyPizzaType(newProductCart) {
    var _Object$values, _Object$values$find;
    var pizzaTypeSubtoption = (_Object$values = Object.values((newProductCart === null || newProductCart === void 0 ? void 0 : newProductCart.options) || {})) === null || _Object$values === void 0 || (_Object$values = _Object$values.map(function (option) {
      return Object.values((option === null || option === void 0 ? void 0 : option.suboptions) || {});
    })) === null || _Object$values === void 0 || (_Object$values = _Object$values.flat()) === null || _Object$values === void 0 || (_Object$values$find = _Object$values.find) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.call(_Object$values, function (suboption) {
      var _suboption$name, _suboption$name$toLow, _suboption$name2, _suboption$name2$toLo;
      return (suboption === null || suboption === void 0 || (_suboption$name = suboption.name) === null || _suboption$name === void 0 || (_suboption$name$toLow = _suboption$name.toLowerCase) === null || _suboption$name$toLow === void 0 ? void 0 : _suboption$name$toLow.call(_suboption$name)) === 'completa' || (suboption === null || suboption === void 0 || (_suboption$name2 = suboption.name) === null || _suboption$name2 === void 0 || (_suboption$name2$toLo = _suboption$name2.toLowerCase) === null || _suboption$name2$toLo === void 0 ? void 0 : _suboption$name2$toLo.call(_suboption$name2)) === 'mitad y mitad';
    });
    if (pizzaTypeSubtoption) {
      var _Object$values2, _Object$values4, _Object$values5, _pizzaTypeSubtoption$, _pizzaTypeSubtoption$2, _pizzaTypeSubtoption$3, _pizzaTypeSubtoption$4, _pizzaTypeSubtoption$5, _pizzaTypeSubtoption$6;
      var option = (_Object$values2 = Object.values((newProductCart === null || newProductCart === void 0 ? void 0 : newProductCart.options) || {})) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.find(function (option) {
        var _option$name, _option$name$toLowerC, _Object$values3;
        return (option === null || option === void 0 || (_option$name = option.name) === null || _option$name === void 0 || (_option$name$toLowerC = _option$name.toLowerCase) === null || _option$name$toLowerC === void 0 ? void 0 : _option$name$toLowerC.call(_option$name)) === 'elige tus ingredientes' && ((_Object$values3 = Object.values(option === null || option === void 0 ? void 0 : option.suboptions)) === null || _Object$values3 === void 0 ? void 0 : _Object$values3.length) > 0;
      });
      var suboption1 = (_Object$values4 = Object.values((option === null || option === void 0 ? void 0 : option.suboptions) || {})) === null || _Object$values4 === void 0 || (_Object$values4 = _Object$values4.map(function (suboption) {
        return suboption;
      })) === null || _Object$values4 === void 0 ? void 0 : _Object$values4[0];
      var suboption2 = (_Object$values5 = Object.values((option === null || option === void 0 ? void 0 : option.suboptions) || {})) === null || _Object$values5 === void 0 || (_Object$values5 = _Object$values5.map(function (suboption) {
        return suboption;
      })) === null || _Object$values5 === void 0 ? void 0 : _Object$values5[1];
      setPizzaType(_objectSpread(_objectSpread({}, pizzaType), {}, {
        type: pizzaTypeSubtoption === null || pizzaTypeSubtoption === void 0 ? void 0 : pizzaTypeSubtoption.name,
        center: (pizzaTypeSubtoption === null || pizzaTypeSubtoption === void 0 || (_pizzaTypeSubtoption$ = pizzaTypeSubtoption.name) === null || _pizzaTypeSubtoption$ === void 0 || (_pizzaTypeSubtoption$2 = _pizzaTypeSubtoption$.toLowerCase) === null || _pizzaTypeSubtoption$2 === void 0 ? void 0 : _pizzaTypeSubtoption$2.call(_pizzaTypeSubtoption$)) === 'completa',
        left: (pizzaTypeSubtoption === null || pizzaTypeSubtoption === void 0 || (_pizzaTypeSubtoption$3 = pizzaTypeSubtoption.name) === null || _pizzaTypeSubtoption$3 === void 0 || (_pizzaTypeSubtoption$4 = _pizzaTypeSubtoption$3.toLowerCase) === null || _pizzaTypeSubtoption$4 === void 0 ? void 0 : _pizzaTypeSubtoption$4.call(_pizzaTypeSubtoption$3)) === 'mitad y mitad' && suboption1,
        right: (pizzaTypeSubtoption === null || pizzaTypeSubtoption === void 0 || (_pizzaTypeSubtoption$5 = pizzaTypeSubtoption.name) === null || _pizzaTypeSubtoption$5 === void 0 || (_pizzaTypeSubtoption$6 = _pizzaTypeSubtoption$5.toLowerCase) === null || _pizzaTypeSubtoption$6 === void 0 ? void 0 : _pizzaTypeSubtoption$6.call(_pizzaTypeSubtoption$5)) === 'mitad y mitad' && suboption2
      }));
    }
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
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      product: props.product
    }));
  }, [props.product]);

  /**
   * Check if there is an option required with one suboption
  */

  var checkSuboptionsSelected = function checkSuboptionsSelected(suboptionId, _selectedSuboptions, _dependsSuboptions) {
    var _dependsSuboptions2;
    var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (count > 100) {
      Sentry.captureMessage('Suboptions selected bucle, more than 100 iterations');
      return false;
    }
    if (!_selectedSuboptions["suboption:".concat(suboptionId)]) {
      return false;
    }
    var respectTo = (_dependsSuboptions2 = _dependsSuboptions["suboption:".concat(suboptionId)]) !== null && _dependsSuboptions2 !== void 0 ? _dependsSuboptions2 : null;
    if (respectTo === null) {
      return _selectedSuboptions["suboption:".concat(suboptionId)];
    }
    return checkSuboptionsSelected(respectTo, _selectedSuboptions, _dependsSuboptions, count++);
  };
  (0, _react.useEffect)(function () {
    var _product$product10;
    if (product !== null && product !== void 0 && product.product && ((_product$product10 = product.product) === null || _product$product10 === void 0 || (_product$product10 = _product$product10.extras) === null || _product$product10 === void 0 ? void 0 : _product$product10.length) > 0) {
      var _selectedSuboptions = {};
      var _dependsSuboptions = {};
      var preselectedOptions = [];
      var preselectedSuboptions = [];
      var _iterator9 = _createForOfIteratorHelper(product.product.extras),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var extra = _step9.value;
          var _iterator11 = _createForOfIteratorHelper(extra.options),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var option = _step11.value;
              var _iterator12 = _createForOfIteratorHelper(option.suboptions),
                _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _option$suboptions7;
                  var suboption = _step12.value;
                  _selectedSuboptions["suboption:".concat(suboption.id)] = suboption.preselected || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 || (_option$suboptions7 = option.suboptions) === null || _option$suboptions7 === void 0 ? void 0 : _option$suboptions7.length) === 1;
                  _dependsSuboptions["suboption:".concat(suboption.id)] = option !== null && option !== void 0 && option.conditioned && (option === null || option === void 0 ? void 0 : option.respect_to) !== null ? option === null || option === void 0 ? void 0 : option.respect_to : null;
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
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var _iterator10 = _createForOfIteratorHelper(product.product.extras),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _extra4 = _step10.value;
          var _iterator13 = _createForOfIteratorHelper(_extra4.options),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _option5 = _step13.value;
              var _iterator14 = _createForOfIteratorHelper(_option5.suboptions),
                _step14;
              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _suboption3 = _step14.value;
                  if (checkSuboptionsSelected(_suboption3 === null || _suboption3 === void 0 ? void 0 : _suboption3.id, _selectedSuboptions, _dependsSuboptions)) {
                    preselectedOptions.push(_option5);
                    preselectedSuboptions.push(_suboption3);
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      if (!(preselectedOptions !== null && preselectedOptions !== void 0 && preselectedOptions.length)) {
        return;
      }
      var states = preselectedSuboptions.map(function (suboption, i) {
        var _preselectedOptions$i2;
        var price = (_preselectedOptions$i2 = preselectedOptions[i]) !== null && _preselectedOptions$i2 !== void 0 && _preselectedOptions$i2.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
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
      var suboptionsArray = [];
      preselectedOptions.map(function (option) {
        var defaultSuboptions = option.suboptions.filter(function (suboption) {
          var _option$suboptions6;
          return (suboption === null || suboption === void 0 ? void 0 : suboption.enabled) && ((suboption === null || suboption === void 0 ? void 0 : suboption.preselected) || (option === null || option === void 0 || (_option$suboptions6 = option.suboptions) === null || _option$suboptions6 === void 0 ? void 0 : _option$suboptions6.length) === 1);
        }).map(function (suboption) {
          return {
            option: option,
            suboption: suboption,
            state: states.find(function (state) {
              return (state === null || state === void 0 ? void 0 : state.id) === (suboption === null || suboption === void 0 ? void 0 : suboption.id);
            })
          };
        });
        suboptionsArray = [].concat(_toConsumableArray(suboptionsArray), _toConsumableArray(defaultSuboptions));
      });
      setSelectedSuboptions(_selectedSuboptions);
      setDependsSuboptions(_dependsSuboptions);
      setDefaultSubOptions(suboptionsArray);
      setCustomDefaultSubOptions(suboptionsArray);
    }
  }, [product.product]);
  if (isStarbucks) {
    (0, _react.useEffect)(function () {
      if (product !== null && product !== void 0 && product.product && Object.keys(product === null || product === void 0 ? void 0 : product.product).length) {
        var _ref7, _ref8;
        var options = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(product.product.extras.map(function (extra) {
          return extra.options.filter(function (option) {
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
    if (!props.product && (!props.businessId || !props.categoryId || !props.productId)) {
      throw new Error('`businessId` && `categoryId` && `productId` are required if `product` was not provided.');
    }
    if (!props.product && props.businessId && props.categoryId && props.productId) {
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
    pizzaType: pizzaType,
    setPizzaType: setPizzaType,
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
    professionalListState: professionalListState
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