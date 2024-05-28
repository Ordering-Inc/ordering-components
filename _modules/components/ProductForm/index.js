"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
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
  var _useState19 = (0, _react.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    pizzaState = _useState20[0],
    setPizzaState = _useState20[1];

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
    var _newPizzaState, _newPizzaState2;
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
      removeRelatedOptions(newProductCart, suboption.id);
      newPizzaState = handleVerifyPizzaState(state, suboption, option);
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
              var _Object$keys, _newProductCart$optio3;
              var _option3 = _step6.value;
              if (((_Object$keys = Object.keys((newProductCart === null || newProductCart === void 0 ? void 0 : (_newProductCart$optio3 = newProductCart.options["id:".concat(_option3 === null || _option3 === void 0 ? void 0 : _option3.id)]) === null || _newProductCart$optio3 === void 0 ? void 0 : _newProductCart$optio3.suboptions) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) === 0) {
                newProductCart === null || newProductCart === void 0 ? true : delete newProductCart.options["id:".concat(_option3 === null || _option3 === void 0 ? void 0 : _option3.id)];
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
                      _selectedSuboptions["suboption:".concat(_suboption.id)] = (_suboption === null || _suboption === void 0 ? void 0 : _suboption.preselected) || (_option2 === null || _option2 === void 0 ? void 0 : _option2.max) === 1 && (_option2 === null || _option2 === void 0 ? void 0 : _option2.min) === 1 && (_option2 === null || _option2 === void 0 ? void 0 : (_option2$suboptions = _option2.suboptions) === null || _option2$suboptions === void 0 ? void 0 : _option2$suboptions.length) === 1;
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
        var _newProductCart$optio2, _preselectedOptions$i, _preselectedOptions$i2, _preselectedOptions$i3, _preselectedOptions$i4, _cartSuboption$quanti;
        var cartSuboption = (newProductCart === null || newProductCart === void 0 ? void 0 : (_newProductCart$optio2 = newProductCart.options["id:".concat((_preselectedOptions$i = preselectedOptions[i]) === null || _preselectedOptions$i === void 0 ? void 0 : _preselectedOptions$i.id)]) === null || _newProductCart$optio2 === void 0 ? void 0 : _newProductCart$optio2.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || suboption;
        var price = (_preselectedOptions$i2 = preselectedOptions[i]) !== null && _preselectedOptions$i2 !== void 0 && _preselectedOptions$i2.with_half_option && cartSuboption !== null && cartSuboption !== void 0 && cartSuboption.half_price && (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.position) !== 'whole' ? cartSuboption.half_price : cartSuboption.price;
        return {
          id: cartSuboption.id,
          name: cartSuboption.name,
          position: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state === null || state === void 0 ? void 0 : state.position : cartSuboption.position || 'whole',
          price: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state.price : price,
          quantity: (state === null || state === void 0 ? void 0 : state.id) === (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.id) ? state.quantity : quesoYSalsaOptions.includes((_preselectedOptions$i3 = preselectedOptions[i]) === null || _preselectedOptions$i3 === void 0 ? void 0 : (_preselectedOptions$i4 = _preselectedOptions$i3.name) === null || _preselectedOptions$i4 === void 0 ? void 0 : _preselectedOptions$i4.toLowerCase()) && isAlsea ? (_cartSuboption$quanti = cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.quantity) !== null && _cartSuboption$quanti !== void 0 ? _cartSuboption$quanti : 1 : (cartSuboption === null || cartSuboption === void 0 ? void 0 : cartSuboption.quantity) || 1,
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
      return state === null || state === void 0 ? void 0 : (_state$suboption = state.suboption) === null || _state$suboption === void 0 ? void 0 : _state$suboption.preselected;
    });
    if (newBalance <= option.max || ((_newPizzaState = newPizzaState) === null || _newPizzaState === void 0 ? void 0 : (_newPizzaState2 = _newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _newPizzaState2 === void 0 ? void 0 : _newPizzaState2.value) <= option.max && option !== null && option !== void 0 && option.with_half_option) {
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
      var _newPizzaState3;
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
      if (newBalance <= option.max || (newPizzaState === null || newPizzaState === void 0 ? void 0 : (_newPizzaState3 = newPizzaState["option:".concat(option.id)]) === null || _newPizzaState3 === void 0 ? void 0 : _newPizzaState3.value) <= option.max && option !== null && option !== void 0 && option.with_half_option) {
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
        var _productCart$options3, _pizzaState, _Object$keys2, _option$suboptions3;
        var suboptions = (_productCart$options3 = productCart.options["id:".concat(option.id)]) === null || _productCart$options3 === void 0 ? void 0 : _productCart$options3.suboptions;
        var quantity = suboptions ? option !== null && option !== void 0 && option.with_half_option ? pizzaState === null || pizzaState === void 0 ? void 0 : (_pizzaState = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState === void 0 ? void 0 : _pizzaState.value : option.limit_suboptions_by_max ? Object.values(suboptions).reduce(function (count, suboption) {
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
        if ((option === null || option === void 0 ? void 0 : (_option$suboptions3 = option.suboptions) === null || _option$suboptions3 === void 0 ? void 0 : _option$suboptions3.length) > 0 && evaluate) {
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var _JSON$parse, _product$product9, _cart$metafields, _cart$metafields$find, _cart$metafields$find2, _errors, isMultiProduct, hasAlreadyCoupon, successful, _values$professional, _values$serviceTime, _orderState$options, _props$productCart6, _props$productCart7, changes, currentProduct, _product$product10, updatedProfessional, duration, _props$productCart8, _props$productCart9;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setProductLoading && setProductLoading(true);
            if (handleCustomSave) {
              handleCustomSave && handleCustomSave();
            }
            _errors = checkErrors();
            isMultiProduct = ((_JSON$parse = JSON.parse((product === null || product === void 0 ? void 0 : (_product$product9 = product.product) === null || _product$product9 === void 0 ? void 0 : _product$product9.meta) || '{}')) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.external_type) === 'coupon';
            hasAlreadyCoupon = (cart === null || cart === void 0 ? void 0 : (_cart$metafields = cart.metafields) === null || _cart$metafields === void 0 ? void 0 : (_cart$metafields$find = _cart$metafields.find) === null || _cart$metafields$find === void 0 ? void 0 : (_cart$metafields$find2 = _cart$metafields$find.call(_cart$metafields, function (meta) {
              return (meta === null || meta === void 0 ? void 0 : meta.key) === 'pulse_coupons';
            })) === null || _cart$metafields$find2 === void 0 ? void 0 : _cart$metafields$find2.value) && isMultiProduct;
            if (!((Object.keys(_errors).length === 0 || isService) && !hasAlreadyCoupon)) {
              _context3.next = 31;
              break;
            }
            successful = true;
            if (!useOrderContext) {
              _context3.next = 30;
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
            onSave(productCart, !((_props$productCart6 = props.productCart) !== null && _props$productCart6 !== void 0 && _props$productCart6.code));
            if ((_props$productCart7 = props.productCart) !== null && _props$productCart7 !== void 0 && _props$productCart7.code) {
              _context3.next = 26;
              break;
            }
            if (!isMultiProduct) {
              _context3.next = 20;
              break;
            }
            _context3.next = 17;
            return addMultiProduct(currentProduct, changes, false);
          case 17:
            _context3.t0 = _context3.sent;
            _context3.next = 23;
            break;
          case 20:
            _context3.next = 22;
            return addProduct(currentProduct, changes, false);
          case 22:
            _context3.t0 = _context3.sent;
          case 23:
            successful = _context3.t0;
            _context3.next = 30;
            break;
          case 26:
            _context3.next = 28;
            return updateProduct(currentProduct, changes, false);
          case 28:
            successful = _context3.sent;
            if (successful) {
              events.emit('product_edited', currentProduct);
            }
          case 30:
            if (successful) {
              if (isService) {
                updatedProfessional = JSON.parse(JSON.stringify(values === null || values === void 0 ? void 0 : values.professional));
                duration = product === null || product === void 0 ? void 0 : (_product$product10 = product.product) === null || _product$product10 === void 0 ? void 0 : _product$product10.duration;
                updatedProfessional.busy_times.push({
                  start: values === null || values === void 0 ? void 0 : values.serviceTime,
                  end: (0, _moment.default)(values === null || values === void 0 ? void 0 : values.serviceTime).add(duration, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                  duration: duration
                });
                handleUpdateProfessionals && handleUpdateProfessionals(updatedProfessional);
                handleChangeProfessional && handleChangeProfessional(updatedProfessional);
              }
            } else {
              showToast(_ToastContext.ToastType.Error, !((_props$productCart8 = props.productCart) !== null && _props$productCart8 !== void 0 && _props$productCart8.code) ? t('FAILED_TO_ADD_PRODUCT', 'Failed to add product') : t('FAILED_TO_UPDATE_PRODUCT', 'Failed to update product'), 5000);
            }
          case 31:
            if (hasAlreadyCoupon) {
              showToast(_ToastContext.ToastType.Error, t('COUPON_ALREADY_ADDED', 'You have a coupon already added'));
            }
            setProductLoading && setProductLoading(false);
            _context3.next = 39;
            break;
          case 35:
            _context3.prev = 35;
            _context3.t1 = _context3["catch"](0);
            showToast(_ToastContext.ToastType.Error, !((_props$productCart9 = props.productCart) !== null && _props$productCart9 !== void 0 && _props$productCart9.code) ? t('FAILED_TO_ADD_PRODUCT', 'Failed to add product') : t('FAILED_TO_UPDATE_PRODUCT', 'Failed to update product'));
            setProductLoading && setProductLoading(false);
          case 39:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 35]]);
    }));
    return function handleSave(_x3) {
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
    return function handleCreateGuestUser(_x4) {
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
    if ((option === null || option === void 0 ? void 0 : (_option$suboptions5 = option.suboptions) === null || _option$suboptions5 === void 0 ? void 0 : _option$suboptions5.length) === 0) showOption = false;
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
  var handleVerifyPizzaState = function handleVerifyPizzaState(state, suboption, option, preselectedOptions, preselectedSuboptions, states) {
    var newPizzaState = {};
    if (state !== null && state !== void 0 && state.selected) {
      preselectedOptions.map(function (option, i) {
        if (option !== null && option !== void 0 && option.with_half_option) {
          var _newPizzaState4, _preselectedSuboption, _states$i, _states$i2, _states$i3, _states$i4;
          newPizzaState = _objectSpread(_objectSpread({}, newPizzaState), {}, _defineProperty({}, "option:".concat(option === null || option === void 0 ? void 0 : option.id), _objectSpread(_objectSpread({}, (_newPizzaState4 = newPizzaState) === null || _newPizzaState4 === void 0 ? void 0 : _newPizzaState4["option:".concat(option === null || option === void 0 ? void 0 : option.id)]), {}, _defineProperty({}, "suboption:".concat((_preselectedSuboption = preselectedSuboptions[i]) === null || _preselectedSuboption === void 0 ? void 0 : _preselectedSuboption.id), isAlsea ? (((_states$i = states[i]) === null || _states$i === void 0 ? void 0 : _states$i.position) === 'whole' ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i2 = states[i]) === null || _states$i2 === void 0 ? void 0 : _states$i2.position) === 'whole' ? 1 : 0.5) * states[i].quantity))));
          var suboptionValue = isAlsea ? (((_states$i3 = states[i]) === null || _states$i3 === void 0 ? void 0 : _states$i3.position) === 'whole' || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i4 = states[i]) === null || _states$i4 === void 0 ? void 0 : _states$i4.position) === 'whole' || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 ? 1 : 0.5) * states[i].quantity;
          var value = suboptionValue + (newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value || 0);
          newPizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)].value = value;
        }
      });
    } else {
      var _newPizzaState5, _newPizzaState6, _Object$values, _newPizzaState7;
      newPizzaState = _objectSpread(_objectSpread({}, pizzaState), {}, _defineProperty({}, "option:".concat(option === null || option === void 0 ? void 0 : option.id), _objectSpread(_objectSpread({}, pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]), {}, {
        value: 0
      })));
      (_newPizzaState5 = newPizzaState) === null || _newPizzaState5 === void 0 ? true : (_newPizzaState6 = _newPizzaState5["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _newPizzaState6 === void 0 ? true : delete _newPizzaState6["suboption:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)];
      var value = Object === null || Object === void 0 ? void 0 : (_Object$values = Object.values(((_newPizzaState7 = newPizzaState) === null || _newPizzaState7 === void 0 ? void 0 : _newPizzaState7["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) || {})) === null || _Object$values === void 0 ? void 0 : _Object$values.reduce(function (acc, value) {
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
    if ((props === null || props === void 0 ? void 0 : (_props$product2 = props.product) === null || _props$product2 === void 0 ? void 0 : _props$product2.load_type) === 'lazy') return;
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
    var _product$product11, _product$product11$ex;
    if (!(product !== null && product !== void 0 && product.loading) && product !== null && product !== void 0 && product.product && ((_product$product11 = product.product) === null || _product$product11 === void 0 ? void 0 : (_product$product11$ex = _product$product11.extras) === null || _product$product11$ex === void 0 ? void 0 : _product$product11$ex.length) > 0) {
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
                  var _option$suboptions6, _props$productCart12, _props$productCart12$;
                  var suboption = _step12.value;
                  _selectedSuboptions["suboption:".concat(suboption.id)] = (suboption.preselected || (option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : (_option$suboptions6 = option.suboptions) === null || _option$suboptions6 === void 0 ? void 0 : _option$suboptions6.length) === 1) && (!editMode || !!((_props$productCart12 = props.productCart) !== null && _props$productCart12 !== void 0 && (_props$productCart12$ = _props$productCart12.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) !== null && _props$productCart12$ !== void 0 && _props$productCart12$.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]));
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
      if (editMode && props !== null && props !== void 0 && props.productCart) {
        var _Object$values2, _props$productCart10;
        (_Object$values2 = Object.values(props === null || props === void 0 ? void 0 : (_props$productCart10 = props.productCart) === null || _props$productCart10 === void 0 ? void 0 : _props$productCart10.options)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.map(function (option) {
          var _Object$values3;
          return (_Object$values3 = Object.values(option === null || option === void 0 ? void 0 : option.suboptions)) === null || _Object$values3 === void 0 ? void 0 : _Object$values3.map(function (suboption) {
            _selectedSuboptions["suboption:".concat(suboption.id)] = true;
          });
        });
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
      setSelectedSuboptions(_selectedSuboptions);
      setDependsSuboptions(_dependsSuboptions);
      if (!(preselectedOptions !== null && preselectedOptions !== void 0 && preselectedOptions.length)) {
        return;
      }
      var states = {};
      if (editMode && props !== null && props !== void 0 && props.productCart) {
        var _Object$values4, _Object$values4$map, _props$productCart11;
        var cartSuboptions = (_Object$values4 = Object.values(props === null || props === void 0 ? void 0 : (_props$productCart11 = props.productCart) === null || _props$productCart11 === void 0 ? void 0 : _props$productCart11.options)) === null || _Object$values4 === void 0 ? void 0 : (_Object$values4$map = _Object$values4.map(function (option) {
          return Object.values(option === null || option === void 0 ? void 0 : option.suboptions);
        })) === null || _Object$values4$map === void 0 ? void 0 : _Object$values4$map.flat();
        states = cartSuboptions.map(function (suboption, i) {
          var _preselectedOptions$i5;
          var price = (_preselectedOptions$i5 = preselectedOptions[i]) !== null && _preselectedOptions$i5 !== void 0 && _preselectedOptions$i5.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
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
          var _preselectedOptions$i6;
          var price = (_preselectedOptions$i6 = preselectedOptions[i]) !== null && _preselectedOptions$i6 !== void 0 && _preselectedOptions$i6.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
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
          var _newPizzaState8, _preselectedSuboption3, _states$i5, _states$i6, _states$i7, _states$i8;
          newPizzaState = _objectSpread(_objectSpread({}, newPizzaState), {}, _defineProperty({}, "option:".concat(option === null || option === void 0 ? void 0 : option.id), _objectSpread(_objectSpread({}, (_newPizzaState8 = newPizzaState) === null || _newPizzaState8 === void 0 ? void 0 : _newPizzaState8["option:".concat(option === null || option === void 0 ? void 0 : option.id)]), {}, _defineProperty({}, "suboption:".concat((_preselectedSuboption3 = preselectedSuboptions[i]) === null || _preselectedSuboption3 === void 0 ? void 0 : _preselectedSuboption3.id), isAlsea ? (((_states$i5 = states[i]) === null || _states$i5 === void 0 ? void 0 : _states$i5.position) === 'whole' ? 1 : 0.5) + (states[i].quantity >= 2 ? 0.5 : 0) : (((_states$i6 = states[i]) === null || _states$i6 === void 0 ? void 0 : _states$i6.position) === 'whole' ? 1 : 0.5) * states[i].quantity))));
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