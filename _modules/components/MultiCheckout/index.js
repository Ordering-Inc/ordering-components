"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage Multi businesses checkout page behavior without UI component
 */
var MultiCheckout = function MultiCheckout(props) {
  var _cartGroup$result, _cartGroup$result$car, _cartGroup$result2, _cartGroup$result2$ca, _openCarts$filter;
  var UIComponent = props.UIComponent,
    onPlaceOrderClick = props.onPlaceOrderClick,
    cartUuid = props.cartUuid,
    userId = props.userId,
    actionsBeforePlace = props.actionsBeforePlace;
  var qParams = userId ? "?user_id=".concat(userId) : '';
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  /**
   * Session content
   */
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    placeMultiCarts = _useOrder2[1].placeMultiCarts;
  /**
  * Toast state
  */
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  /**
  * Delivery Instructions options
  */
  var _useState = (0, _react.useState)({
      loading: false,
      result: [{
        id: null,
        enabled: true,
        name: t('EITHER_WAY', 'Either way')
      }],
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    instructionsOptions = _useState2[0],
    setInstructionsOptions = _useState2[1];
  /**
  * Delivery instructions selected
  */
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    deliveryOptionSelected = _useState4[0],
    setDeliveryOptionSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      error: null,
      result: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    loyaltyPlansState = _useState6[0],
    setLoyaltyPlansState = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    placing = _useState8[0],
    setPlacing = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    paymethodSelected = _useState10[0],
    setPaymethodSelected = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: true,
      error: null,
      result: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    cartGroup = _useState12[0],
    setCartGroup = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    walletState = _useState14[0],
    setWalletState = _useState14[1];
  var openCarts = (cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result = cartGroup.result) === null || _cartGroup$result === void 0 ? void 0 : (_cartGroup$result$car = _cartGroup$result.carts) === null || _cartGroup$result$car === void 0 ? void 0 : _cartGroup$result$car.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.business_id);
  })) || null || [];
  var cartsInvalid = (cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result2 = cartGroup.result) === null || _cartGroup$result2 === void 0 ? void 0 : (_cartGroup$result2$ca = _cartGroup$result2.carts) === null || _cartGroup$result2$ca === void 0 ? void 0 : _cartGroup$result2$ca.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1;
  })) || null || [];
  var totalCartsPrice = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && openCarts.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.total);
  }, 0);
  var totalCartsFee = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && (openCarts === null || openCarts === void 0 ? void 0 : (_openCarts$filter = openCarts.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.valid);
  })) === null || _openCarts$filter === void 0 ? void 0 : _openCarts$filter.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount);
  }, 0));
  var handleGroupPlaceOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(confirmPayment) {
      var _paymethodSelected$pa, _cartGroup$result3, _result$paymethod_dat;
      var paymethodData, _paymethodSelected$pa2, payload, _paymethodSelected$pa3, _yield$placeMultiCart, error, result, _result$payment_event, _paymentEvent$data, _paymentEvent$data$ex, paymentEvent, _paymentEvent$data2, _paymentEvent$data2$e, _yield$confirmPayment, confirmApplePayError;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data;
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway)) {
              paymethodData = JSON.stringify({
                source_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa2 = paymethodSelected.paymethod_data) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id
              });
            }
            payload = {
              amount: cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result3 = cartGroup.result) === null || _cartGroup$result3 === void 0 ? void 0 : _cartGroup$result3.balance
            };
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_id: (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa3 = paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.id) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id)
              });
            }
            if (paymethodData) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_data: paymethodData
              });
            }
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                wallet_id: paymethodSelected.wallet_id,
                wallet_data: paymethodSelected.wallet_data
              });
            }
            setPlacing(true);
            _context.next = 9;
            return placeMultiCarts(payload, cartUuid);
          case 9:
            _yield$placeMultiCart = _context.sent;
            error = _yield$placeMultiCart.error;
            result = _yield$placeMultiCart.result;
            if (!error) {
              _context.next = 14;
              break;
            }
            return _context.abrupt("return");
          case 14:
            if (!((result === null || result === void 0 ? void 0 : (_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.status) === 2 && actionsBeforePlace)) {
              _context.next = 17;
              break;
            }
            _context.next = 17;
            return actionsBeforePlace(paymethodSelected, result);
          case 17:
            if (!(confirmPayment && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'global_apple_pay')) {
              _context.next = 27;
              break;
            }
            paymentEvent = result === null || result === void 0 ? void 0 : (_result$payment_event = result.payment_events) === null || _result$payment_event === void 0 ? void 0 : _result$payment_event.find(function (event) {
              var _event$data, _event$data$extra;
              return event === null || event === void 0 ? void 0 : (_event$data = event.data) === null || _event$data === void 0 ? void 0 : (_event$data$extra = _event$data.extra) === null || _event$data$extra === void 0 ? void 0 : _event$data$extra.client_secret;
            });
            if (!(paymentEvent !== null && paymentEvent !== void 0 && (_paymentEvent$data = paymentEvent.data) !== null && _paymentEvent$data !== void 0 && (_paymentEvent$data$ex = _paymentEvent$data.extra) !== null && _paymentEvent$data$ex !== void 0 && _paymentEvent$data$ex.client_secret)) {
              _context.next = 25;
              break;
            }
            _context.next = 22;
            return confirmPayment(paymentEvent === null || paymentEvent === void 0 ? void 0 : (_paymentEvent$data2 = paymentEvent.data) === null || _paymentEvent$data2 === void 0 ? void 0 : (_paymentEvent$data2$e = _paymentEvent$data2.extra) === null || _paymentEvent$data2$e === void 0 ? void 0 : _paymentEvent$data2$e.client_secret);
          case 22:
            _yield$confirmPayment = _context.sent;
            confirmApplePayError = _yield$confirmPayment.error;
            if (confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.message || confirmApplePayError !== null && confirmApplePayError !== void 0 && confirmApplePayError.localizedMessage) {
              showToast(_ToastContext.ToastType.Error, (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.message) || (confirmApplePayError === null || confirmApplePayError === void 0 ? void 0 : confirmApplePayError.localizedMessage));
            }
          case 25:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 27:
            setPlacing(false);
            if (!error) {
              onPlaceOrderClick && onPlaceOrderClick(result);
            }
          case 29:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleGroupPlaceOrder(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSelectPaymethod = function handleSelectPaymethod(paymethod) {
    setPaymethodSelected(paymethod === null ? {} : _objectSpread(_objectSpread(_objectSpread({}, paymethodSelected), paymethod), {}, {
      paymethod_data: paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_data
    }));
  };
  var handleSelectWallet = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(isChecked, wallet) {
      var _cartGroup$result4, _cartGroup$result5;
      var url, response, _yield$response$json, error, result, _err$message;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: true,
              error: null
            }));
            url = isChecked ? "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result4 = cartGroup.result) === null || _cartGroup$result4 === void 0 ? void 0 : _cartGroup$result4.uuid, "/wallets") : "".concat(ordering.root, "/cart_groups/").concat(cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result5 = cartGroup.result) === null || _cartGroup$result5 === void 0 ? void 0 : _cartGroup$result5.uuid, "/wallets/").concat(wallet.id);
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(url, _objectSpread({
              method: isChecked ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            }, isChecked && {
              body: JSON.stringify({
                wallet_id: wallet.id
              })
            }));
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context2.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
                result: _objectSpread(_objectSpread({}, cartGroup.result), {}, {
                  wallets: result === null || result === void 0 ? void 0 : result.wallets,
                  payment_events: result === null || result === void 0 ? void 0 : result.payment_events,
                  balance: result === null || result === void 0 ? void 0 : result.balance
                })
              }));
            }
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: error ? result : null,
              result: error ? null : result
            }));
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](2);
            setWalletState(_objectSpread(_objectSpread({}, walletState), {}, {
              loading: false,
              error: (_err$message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _err$message !== void 0 ? _err$message : _context2.t0
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 15]]);
    }));
    return function handleSelectWallet(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
      paymethod_data: data
    }));
  };
  var getDeliveryOptions = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("".concat(ordering.root, "/delivery_options").concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.json();
          case 6:
            _yield$response$json2 = _context3.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context3.next = 12;
              break;
            }
            setInstructionsOptions({
              loading: false,
              result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
            });
            return _context3.abrupt("return");
          case 12:
            setInstructionsOptions({
              loading: false,
              error: true,
              result: result
            });
            showToast(_ToastContext.ToastType.Error, result);
            _context3.next = 20;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            setInstructionsOptions({
              loading: false,
              error: true,
              result: _context3.t0.message
            });
            showToast(_ToastContext.ToastType.Error, _context3.t0.message);
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 16]]);
    }));
    return function getDeliveryOptions() {
      return _ref3.apply(this, arguments);
    };
  }();
  var multiHandleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(value, cartUuidArr) {
      var allPromise;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            allPromise = cartUuidArr.map(function (cartId) {
              return new Promise( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
                  var body, response, _yield$response$json3, result, error;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        body = {
                          delivery_option_id: value
                        };
                        if (userId) body.user_id = userId;
                        _context4.next = 4;
                        return fetch("".concat(ordering.root, "/carts/").concat(cartId), {
                          method: 'PUT',
                          headers: {
                            'Content-Type': 'application/json',
                            Authorization: "bearer ".concat(token),
                            'X-App-X': ordering.appId,
                            'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                          },
                          body: JSON.stringify(body)
                        });
                      case 4:
                        response = _context4.sent;
                        _context4.next = 7;
                        return response.json();
                      case 7:
                        _yield$response$json3 = _context4.sent;
                        result = _yield$response$json3.result;
                        error = _yield$response$json3.error;
                        if (!error && (result === null || result === void 0 ? void 0 : result.delivery_option_id) === value) {
                          resolve(result);
                        } else {
                          reject(false);
                        }
                      case 11:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x7, _x8) {
                  return _ref5.apply(this, arguments);
                };
              }());
            });
            _context5.next = 4;
            return Promise.all(allPromise);
          case 4:
            _context5.t0 = _context5.sent;
            if (!_context5.t0) {
              _context5.next = 7;
              break;
            }
            setDeliveryOptionSelected(value);
          case 7:
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t1 = _context5["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context5.t1.message);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 9]]);
    }));
    return function multiHandleChangeDeliveryOption(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
      var cartUuidArr;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            cartUuidArr = openCarts.map(function (cart) {
              return cart === null || cart === void 0 ? void 0 : cart.uuid;
            });
            multiHandleChangeDeliveryOption(value, cartUuidArr);
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function handleChangeDeliveryOption(_x9) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getMultiCart = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var response, _yield$response$json4, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (cartUuid) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return");
          case 3:
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: true
            }));
            _context7.next = 6;
            return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid).concat(qParams), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 6:
            response = _context7.sent;
            _context7.next = 9;
            return response.json();
          case 9:
            _yield$response$json4 = _context7.sent;
            result = _yield$response$json4.result;
            error = _yield$response$json4.error;
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              result: result,
              error: error
            }));
            _context7.next = 18;
            break;
          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](0);
            setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
              loading: false,
              error: _context7.t0.message
            }));
          case 18:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 15]]);
    }));
    return function getMultiCart() {
      return _ref7.apply(this, arguments);
    };
  }();
  var getLoyaltyPlans = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _result$find$accumula, _result$find, req, _yield$req$json, error, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return fetch("".concat(ordering.root, "/loyalty_plans"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            req = _context8.sent;
            _context8.next = 6;
            return req.json();
          case 6:
            _yield$req$json = _context8.sent;
            error = _yield$req$json.error;
            result = _yield$req$json.result;
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: error ? [] : result,
              rewardRate: (_result$find$accumula = result === null || result === void 0 ? void 0 : (_result$find = result.find(function (loyal) {
                return loyal.type === 'credit_point';
              })) === null || _result$find === void 0 ? void 0 : _result$find.accumulation_rate) !== null && _result$find$accumula !== void 0 ? _result$find$accumula : 0
            }));
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            setLoyaltyPlansState(_objectSpread(_objectSpread({}, loyaltyPlansState), {}, {
              loading: false,
              result: []
            }));
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 12]]);
    }));
    return function getLoyaltyPlans() {
      return _ref8.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(null);
    }
  }, [instructionsOptions]);
  (0, _react.useEffect)(function () {
    Promise.any([getDeliveryOptions(), getLoyaltyPlans()]);
  }, []);
  (0, _react.useEffect)(function () {
    getMultiCart();
  }, [JSON.stringify(carts)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    placing: placing,
    openCarts: openCarts,
    rewardRate: loyaltyPlansState === null || loyaltyPlansState === void 0 ? void 0 : loyaltyPlansState.rewardRate,
    loyaltyPlansState: loyaltyPlansState,
    totalCartsPrice: totalCartsPrice,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleGroupPlaceOrder: handleGroupPlaceOrder,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange,
    handleChangeDeliveryOption: handleChangeDeliveryOption,
    deliveryOptionSelected: deliveryOptionSelected,
    instructionsOptions: instructionsOptions,
    cartGroup: cartGroup,
    walletState: walletState,
    totalCartsFee: totalCartsFee,
    cartsInvalid: cartsInvalid
  })));
};
exports.MultiCheckout = MultiCheckout;
MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};