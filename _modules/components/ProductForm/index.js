"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductForm = function ProductForm(props) {
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
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
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
  var _useState11 = (0, _react.useState)({
      loading: false,
      professionals: [],
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    professionalListState = _useState12[0],
    setProfessionalListState = _useState12[1];

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
    for (var i = 0; i < ((_product$product5 = product.product) === null || _product$product5 === void 0 ? void 0 : (_product$product5$ext = _product$product5.extras) === null || _product$product5$ext === void 0 ? void 0 : _product$product5$ext.length); i++) {
      var _product$product5, _product$product5$ext, _product$product6;
      var extra = (_product$product6 = product.product) === null || _product$product6 === void 0 ? void 0 : _product$product6.extras[i];
      for (var j = 0; j < ((_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.length); j++) {
        var _extra$options;
        var option = extra.options[j];
        for (var k = 0; k < ((_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length); k++) {
          var _option$suboptions, _productCart$options, _productCart$options$;
          var suboption = option.suboptions[k];
          if ((_productCart$options = productCart.options["id:".concat(option.id)]) !== null && _productCart$options !== void 0 && (_productCart$options$ = _productCart$options.suboptions["id:".concat(suboption.id)]) !== null && _productCart$options$ !== void 0 && _productCart$options$.selected) {
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
    return function handleFavoriteProduct(_x2) {
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
      setProductCart(newProductCart);
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
    var _product$product8, _product$product8$ext;
    var errors = {};
    if (!(product !== null && product !== void 0 && product.product)) {
      return errors;
    }
    (_product$product8 = product.product) === null || _product$product8 === void 0 ? void 0 : (_product$product8$ext = _product$product8.extras) === null || _product$product8$ext === void 0 ? void 0 : _product$product8$ext.forEach(function (extra) {
      extra.options.map(function (option) {
        var _productCart$options3, _Object$keys, _option$suboptions3;
        var suboptions = (_productCart$options3 = productCart.options["id:".concat(option.id)]) === null || _productCart$options3 === void 0 ? void 0 : _productCart$options3.suboptions;
        var quantity = suboptions ? option.limit_suboptions_by_max ? Object.values(suboptions).reduce(function (count, suboption) {
          return count + suboption.quantity;
        }, 0) : (_Object$keys = Object.keys(suboptions)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length : 0;
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
        if ((option === null || option === void 0 ? void 0 : (_option$suboptions3 = option.suboptions) === null || _option$suboptions3 === void 0 ? void 0 : _option$suboptions3.length) > 0 && evaluate) {
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
            if (!(Object.keys(errors).length === 0)) {
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
              professional_id: values === null || values === void 0 ? void 0 : (_values$professional = values.professional) === null || _values$professional === void 0 ? void 0 : _values$professional.id,
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
                duration = product === null || product === void 0 ? void 0 : (_product$product9 = product.product) === null || _product$product9 === void 0 ? void 0 : _product$product9.duration;
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
    return function handleSave(_x3) {
      return _ref4.apply(this, arguments);
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
    if ((option === null || option === void 0 ? void 0 : (_option$suboptions5 = option.suboptions) === null || _option$suboptions5 === void 0 ? void 0 : _option$suboptions5.length) === 0) showOption = false;
    return showOption;
  };

  /**
   * Load professionals from API
   */
  var getProfessionalList = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _yield$ordering$busin3, _yield$ordering$busin4, result, error, _result$professionals;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: true
            }));
            _context4.next = 4;
            return ordering.businesses(props.businessId).select(['id', 'professionals']).get();
          case 4:
            _yield$ordering$busin3 = _context4.sent;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            result = _yield$ordering$busin4.result;
            error = _yield$ordering$busin4.error;
            if (error) {
              _context4.next = 11;
              break;
            }
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              professionals: (_result$professionals = result === null || result === void 0 ? void 0 : result.professionals) !== null && _result$professionals !== void 0 ? _result$professionals : []
            }));
            return _context4.abrupt("return");
          case 11:
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              error: [result]
            }));
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            setProfessionalListState(_objectSpread(_objectSpread({}, professionalListState), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function getProfessionalList() {
      return _ref5.apply(this, arguments);
    };
  }();

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
  var checkHasPreselected = function checkHasPreselected(options, option) {
    if (!(option !== null && option !== void 0 && option.respect_to)) return true;
    var selectedOption = options.filter(function (option1) {
      var _option1$suboptions;
      return (option1 === null || option1 === void 0 ? void 0 : (_option1$suboptions = option1.suboptions) === null || _option1$suboptions === void 0 ? void 0 : _option1$suboptions.filter(function (suboption) {
        return option.respect_to === (suboption === null || suboption === void 0 ? void 0 : suboption.id) && suboption.preselected;
      }).length) > 0;
    });
    if (!selectedOption) return false;
    checkHasPreselected(options, selectedOption);
  };

  /**
   * Check if there is an option required with one suboption
   */
  (0, _react.useEffect)(function () {
    var _product$product10, _product$product10$ex;
    if (product !== null && product !== void 0 && product.product && ((_product$product10 = product.product) === null || _product$product10 === void 0 ? void 0 : (_product$product10$ex = _product$product10.extras) === null || _product$product10$ex === void 0 ? void 0 : _product$product10$ex.length) > 0) {
      var _ref6, _ref7;
      var options = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(product.product.extras.map(function (extra) {
        return extra.options.filter(function (option) {
          var preselected = checkHasPreselected(extra.options, option);
          return (option.min === 1 && option.max === 1 && option.suboptions.filter(function (suboption) {
            return suboption.enabled;
          }).length === 1 || option.suboptions.filter(function (suboption) {
            return suboption.preselected;
          }).length > 0) && (!(option !== null && option !== void 0 && option.conditioned) || (option === null || option === void 0 ? void 0 : option.conditioned) && preselected);
        });
      })));
      if (!(options !== null && options !== void 0 && options.length)) {
        return;
      }
      var suboptions = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(options.map(function (option) {
        return option.suboptions;
      }))).filter(function (suboption) {
        return suboption.enabled;
      });
      var states = suboptions.map(function (suboption, i) {
        var _options$i;
        var price = (_options$i = options[i]) !== null && _options$i !== void 0 && _options$i.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
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
      options.map(function (option) {
        var defaultSuboptions = option.suboptions.filter(function (suboption) {
          var _option$suboptions6;
          return (suboption === null || suboption === void 0 ? void 0 : suboption.enabled) && ((suboption === null || suboption === void 0 ? void 0 : suboption.preselected) || (option === null || option === void 0 ? void 0 : (_option$suboptions6 = option.suboptions) === null || _option$suboptions6 === void 0 ? void 0 : _option$suboptions6.length) === 1);
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
      setDefaultSubOptions(suboptionsArray);
      setCustomDefaultSubOptions(suboptionsArray);
    }
  }, [product.product]);
  if (isStarbucks) {
    (0, _react.useEffect)(function () {
      if (product !== null && product !== void 0 && product.product && Object.keys(product === null || product === void 0 ? void 0 : product.product).length) {
        var _ref8, _ref9;
        var options = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(product.product.extras.map(function (extra) {
          return extra.options.filter(function (option) {
            return option.name === 'Tamaño' && option.suboptions.filter(function (suboption) {
              return suboption.name === 'Grande (16oz - 437ml)';
            }).length === 1;
          });
        })));
        if (!(options !== null && options !== void 0 && options.length)) {
          return;
        }
        var suboptions = (_ref9 = []).concat.apply(_ref9, _toConsumableArray(options.map(function (option) {
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
  }, [defaultSubOptions]);

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
    maxProductQuantity: maxProductQuantity,
    increment: increment,
    decrement: decrement,
    handleChangeProductCartQuantity: handleChangeProductCartQuantity,
    handleSave: handleSave,
    showOption: showOption,
    handleFavoriteProduct: handleFavoriteProduct,
    handleChangeIngredientState: handleChangeIngredientState,
    handleChangeSuboptionState: handleChangeSuboptionState,
    handleChangeCommentState: handleChangeCommentState,
    professionalListState: professionalListState
  })));
};
exports.ProductForm = ProductForm;
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