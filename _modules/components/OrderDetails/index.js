"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetails = function OrderDetails(props) {
  var _props$order, _props$order2, _orderState$order, _orderState$order11, _orderState$order12, _orderState$order13, _orderState$order20, _orderState$order21, _orderState$order22;
  var orderId = props.orderId,
    orderAssingId = props.orderAssingId,
    hashKey = props.hashKey,
    UIComponent = props.UIComponent,
    userCustomerId = props.userCustomerId,
    isFetchDrivers = props.isFetchDrivers,
    driverAndBusinessId = props.driverAndBusinessId,
    sendCustomMessage = props.sendCustomMessage,
    isDisabledOrdersRoom = props.isDisabledOrdersRoom,
    isDriverNotification = props.isDriverNotification;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var accessToken = props.accessToken || token;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    _useOrder2$ = _useOrder2[1],
    reorder = _useOrder2$.reorder,
    clearCart = _useOrder2$.clearCart;
  var _useState = (0, _react.useState)({
      order: (_props$order = props.order) !== null && _props$order !== void 0 ? _props$order : null,
      businessData: {},
      loading: !props.order,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderState = _useState2[0],
    setOrderState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      drivers: [],
      loadingDriver: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    drivers = _useState4[0],
    setDrivers = _useState4[1];
  var _useState5 = (0, _react.useState)({
      status: null,
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messageErrors = _useState6[0],
    setMessageErrors = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    messages = _useState8[0],
    setMessages = _useState8[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useState9 = (0, _react.useState)(((_props$order2 = props.order) === null || _props$order2 === void 0 || (_props$order2 = _props$order2.driver) === null || _props$order2 === void 0 ? void 0 : _props$order2.location) || ((_orderState$order = orderState.order) === null || _orderState$order === void 0 || (_orderState$order = _orderState$order.driver) === null || _orderState$order === void 0 ? void 0 : _orderState$order.location) || null),
    _useState10 = _slicedToArray(_useState9, 2),
    driverLocation = _useState10[0],
    setDriverLocation = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    messagesReadList = _useState12[0],
    setMessagesReadList = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null,
      newLocation: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    driverUpdateLocation = _useState14[0],
    setDriverUpdateLocation = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    forceUpdate = _useState16[0],
    setForceUpdate = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    reorderState = _useState18[0],
    setReorderState = _useState18[1];
  var _useState19 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    cartState = _useState20[0],
    setCartState = _useState20[1];
  /**
   * Method to accept or reject a logistic order
   */

  var handleClickLogisticOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(status, orderId, orders) {
      var response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(ordering.root, "/drivers/").concat(user === null || user === void 0 ? void 0 : user.id, "/assign_requests/").concat(orderId), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify({
                status: status,
                user_id: user === null || user === void 0 ? void 0 : user.id
              })
            });
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context.next = 12;
              break;
            }
            if (status === 1) {
              showToast(_ToastContext.ToastType.Success, t('SPECIFIC_ORDER_ACCEPTED', 'Your accepted the order number _NUMBER_').replace('_NUMBER_', orders === null || orders === void 0 ? void 0 : orders.id));
            } else {
              showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_REJECTED', 'Your rejected the order number _NUMBER_').replace('_NUMBER_', orders === null || orders === void 0 ? void 0 : orders.id));
            }
            return _context.abrupt("return");
          case 12:
            showToast(_ToastContext.ToastType.Error, result);
            _context.next = 18;
            break;
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context.t0.message);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 15]]);
    }));
    return function handleClickLogisticOrder(_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  var propsToFetch = ['header', 'slug'];
  var deliveryMessages = {
    delivery: {
      text: 'outside delivery area, insert reasons to force update',
      value: 11
    },
    pickup: {
      text: 'outside pickup area, insert reasons to force update',
      value: 9
    }
  };
  var requestsState = {};

  /**
   * Method to format a price number
   * @param {Number} price
   */
  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _orderState$order2, _orderState$order3, url, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = userCustomerId || driverAndBusinessId ? "".concat(ordering.root, "/orders/").concat((_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.id, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat((_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.id, "/messages");
            _context2.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 5:
            response = _context2.sent;
            _context2.next = 8;
            return response.json();
          case 8:
            _yield$response$json2 = _context2.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setMessages({
                messages: result,
                loading: false,
                error: null
              });
            } else {
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context2.t0.Messages]
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function loadMessages() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to send a message
   * @param {string} spot
   */
  var sendMessage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(spot) {
      var _orderState$order4, _orderState$order5, _yield$fetch, status;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!sendCustomMessage) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", sendCustomMessage(spot));
          case 2:
            _context3.prev = 2;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: true
            }));
            _context3.next = 6;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/messages"), {
              method: 'post',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                can_see: '0,2,3',
                comment: "I am on the parking number: ".concat(spot),
                order_id: (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.id,
                type: 2
              })
            });
          case 6:
            _yield$fetch = _context3.sent;
            status = _yield$fetch.status;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              status: status
            }));
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 11]]);
    }));
    return function sendMessage(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to update differents orders status
  */
  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(status) {
      var isAcceptOrReject,
        _orderState$order$id,
        _orderState$order6,
        bodyToSend,
        _yield$ordering$setAc,
        _yield$ordering$setAc2,
        result,
        error,
        selected,
        message,
        defaultMessage,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            isAcceptOrReject = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            _context4.prev = 1;
            bodyToSend = Object.keys(isAcceptOrReject || {}).length > 0 ? isAcceptOrReject : {
              status: status
            };
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            _context4.next = 6;
            return ordering.setAccessToken(token).orders((_orderState$order$id = (_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.id) !== null && _orderState$order$id !== void 0 ? _orderState$order$id : orderId).save(bodyToSend);
          case 6:
            _yield$ordering$setAc = _context4.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            result = _yield$ordering$setAc2.result;
            error = _yield$ordering$setAc2.error;
            if (!error) {
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                order: Object.assign(orderState.order, result),
                loading: false
              }));
            }
            if (error) {
              selected = result.includes(deliveryMessages.delivery.text) ? deliveryMessages.delivery : result.includes(deliveryMessages.pickup.text) ? deliveryMessages.pickup : null;
              if (selected) {
                setForceUpdate(null);
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  loading: false
                }));
                setForceUpdate(selected.value);
              } else {
                message = Array.isArray(result) ? result[0] : typeof result === 'string' ? result : 'INTERNAL_ERROR';
                defaultMessage = message !== 'INTERNAL_ERROR' ? message : t('INTERNAL_ERROR', 'Internal Error');
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  error: [defaultMessage],
                  loading: false
                }));
              }
            }
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) || t('NETWORK_ERROR', 'Network Error')]
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 14]]);
    }));
    return function handleChangeOrderStatus(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();
  var updateDriverPosition = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var newLocation,
        _yield$ordering$setAc3,
        _yield$ordering$setAc4,
        error,
        result,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            newLocation = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            _context5.prev = 1;
            setDriverLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
              loading: true
            }));
            _context5.next = 5;
            return ordering.setAccessToken(token).users(user === null || user === void 0 ? void 0 : user.id).driverLocations().save(newLocation);
          case 5:
            _yield$ordering$setAc3 = _context5.sent;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            if (error) {
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                error: [result[0] || result || t('ERROR_UPDATING_POSITION', 'Error updating position')]
              }));
            } else {
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                newLocation: _objectSpread(_objectSpread({}, newLocation), result)
              }));
            }
            _context5.next = 15;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
              loading: false,
              error: [(_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) || t('NETWORK_ERROR', 'Network Error')]
            }));
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 12]]);
    }));
    return function updateDriverPosition() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
     * Method to assign a driver for order
  */
  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(driverId) {
      var _orderState$order$id2, _orderState$order7, bodyToSend, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _drivers$error;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            bodyToSend = {
              driver_id: driverId
            };
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            _context6.next = 5;
            return ordering.setAccessToken(token).orders((_orderState$order$id2 = orderState === null || orderState === void 0 || (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.id) !== null && _orderState$order$id2 !== void 0 ? _orderState$order$id2 : orderId).save(bodyToSend);
          case 5:
            _yield$ordering$setAc5 = _context6.sent;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: Object.assign(orderState.order, result),
              error: error ? result : null
            }));
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: _context6.t0 !== null && _context6.t0 !== void 0 && _context6.t0.message ? (_drivers$error = drivers.error) === null || _drivers$error === void 0 ? void 0 : _drivers$error.push(_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message) : ['ERROR']
            }));
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function handleAssignDriver(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref7) {
    var spot = _ref7.spot;
    sendMessage(spot);
  };

  /**
   * Method to get order from API
   */
  var getOrder = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var source, options, _result, result, error, response, res, _yield$ordering$setAc7, content, order, err, businessData, _err, _yield$ordering$setAc8, _content, _e$message, _order$id, _e$message2;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            source = {};
            requestsState.order = source;
            requestsState.business = source;
            options = {};
            if (hashKey) {
              options.headers = {
                'X-uuid-access-X': hashKey
              };
            }
            if (userCustomerId || driverAndBusinessId) {
              options.query = {
                mode: 'dashboard'
              };
            }
            _context7.prev = 6;
            if (!orderAssingId) {
              _context7.next = 18;
              break;
            }
            _context7.next = 10;
            return fetch("".concat(ordering.root, "/drivers/").concat(user.id, "/assign_requests/").concat(orderAssingId), {
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 10:
            response = _context7.sent;
            _context7.next = 13;
            return response.json();
          case 13:
            res = _context7.sent;
            result = res.result;
            error = res.error;
            _context7.next = 24;
            break;
          case 18:
            _context7.next = 20;
            return ordering.setAccessToken(token).orders(orderId).get(_objectSpread(_objectSpread({}, options), {}, {
              cancelToken: source
            }));
          case 20:
            _yield$ordering$setAc7 = _context7.sent;
            content = _yield$ordering$setAc7.content;
            result = content.result;
            error = content.error;
          case 24:
            order = error ? null : ((_result = result) === null || _result === void 0 ? void 0 : _result.order) || result;
            err = error ? result : null;
            businessData = null;
            if (!err) {
              _context7.next = 30;
              break;
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_err = err) !== null && _err !== void 0 ? _err : 'ERROR']
            }));
            return _context7.abrupt("return");
          case 30:
            _context7.prev = 30;
            _context7.next = 33;
            return ordering.setAccessToken(token).businesses(order === null || order === void 0 ? void 0 : order.business_id).select(propsToFetch).get({
              cancelToken: source
            });
          case 33:
            _yield$ordering$setAc8 = _context7.sent;
            _content = _yield$ordering$setAc8.content;
            businessData = _content.result;
            _content.error && (err = _content.result[0]);
            _context7.next = 42;
            break;
          case 39:
            _context7.prev = 39;
            _context7.t0 = _context7["catch"](30);
            err = [(_e$message = _context7.t0.message) !== null && _e$message !== void 0 ? _e$message : 'ERROR'];
          case 42:
            if (isFetchDrivers) {
              getDrivers((_order$id = order === null || order === void 0 ? void 0 : order.id) !== null && _order$id !== void 0 ? _order$id : orderId);
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: order,
              businessData: businessData,
              error: err
            }));
            _context7.next = 49;
            break;
          case 46:
            _context7.prev = 46;
            _context7.t1 = _context7["catch"](6);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_e$message2 = _context7.t1.message) !== null && _e$message2 !== void 0 ? _e$message2 : 'ERROR']
            }));
          case 49:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[6, 46], [30, 39]]);
    }));
    return function getOrder() {
      return _ref8.apply(this, arguments);
    };
  }();
  var readMessages = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var _messages$messages, _messages$messages2;
      var messageId, _orderState$order8, _orderState$order9, response, _yield$response$json3, result;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            messageId = messages === null || messages === void 0 || (_messages$messages = messages.messages[(messages === null || messages === void 0 || (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
            if (messageId) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return");
          case 3:
            _context8.prev = 3;
            _context8.next = 6;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order8 = orderState.order) === null || _orderState$order8 === void 0 ? void 0 : _orderState$order8.id, "/messages/").concat(messageId, "/read"), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 6:
            response = _context8.sent;
            _context8.next = 9;
            return response.json();
          case 9:
            _yield$response$json3 = _context8.sent;
            result = _yield$response$json3.result;
            setMessagesReadList(result);
            events.emit('order_message_read', (_orderState$order9 = orderState.order) === null || _orderState$order9 === void 0 ? void 0 : _orderState$order9.id);
            _context8.next = 18;
            break;
          case 15:
            _context8.prev = 15;
            _context8.t0 = _context8["catch"](3);
            console.log(_context8.t0.message);
          case 18:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[3, 15]]);
    }));
    return function readMessages() {
      return _ref9.apply(this, arguments);
    };
  }();
  var getDrivers = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(orderId) {
      var _yield$ordering$setAc9, _yield$ordering$setAc10, error, result, _drivers$error2;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: true
            }));
            _context9.next = 4;
            return ordering.setAccessToken(token).controls(orderId).get();
          case 4:
            _yield$ordering$setAc9 = _context9.sent;
            _yield$ordering$setAc10 = _yield$ordering$setAc9.content;
            error = _yield$ordering$setAc10.error;
            result = _yield$ordering$setAc10.result;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: false,
              drivers: result.drivers,
              error: error ? result : null
            }));
            _context9.next = 14;
            break;
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: false,
              error: _context9.t0 !== null && _context9.t0 !== void 0 && _context9.t0.message ? (_drivers$error2 = drivers.error) === null || _drivers$error2 === void 0 ? void 0 : _drivers$error2.push(_context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message) : ['ERROR']
            }));
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 11]]);
    }));
    return function getDrivers(_x8) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleReorder = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(orderId) {
      var _yield$reorder, error, result;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (orderId) {
              _context10.next = 2;
              break;
            }
            return _context10.abrupt("return");
          case 2:
            _context10.prev = 2;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            _context10.next = 6;
            return reorder(orderId);
          case 6:
            _yield$reorder = _context10.sent;
            error = _yield$reorder.error;
            result = _yield$reorder.result;
            if (!error) {
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                result: result
              }));
            } else {
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: result
              }));
            }
            _context10.next = 15;
            break;
          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](2);
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message]
            }));
          case 15:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[2, 12]]);
    }));
    return function handleReorder(_x9) {
      return _ref11.apply(this, arguments);
    };
  }();

  /**
  * Method to remove products from cart
  */
  var handleRemoveCart = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var _carts;
      var uuid, content, _orderState$order10;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            uuid = (_carts = carts["businessId:".concat(orderState === null || orderState === void 0 ? void 0 : orderState.order.business_id)]) === null || _carts === void 0 ? void 0 : _carts.uuid;
            if (uuid) {
              _context11.next = 3;
              break;
            }
            return _context11.abrupt("return");
          case 3:
            _context11.prev = 3;
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            _context11.next = 7;
            return clearCart(uuid);
          case 7:
            content = _context11.sent;
            if (!(content !== null && content !== void 0 && content.error)) {
              handleReorder(orderState === null || orderState === void 0 || (_orderState$order10 = orderState.order) === null || _orderState$order10 === void 0 ? void 0 : _orderState$order10.id);
              setCartState({
                loading: false,
                error: null
              });
            } else {
              setCartState({
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              });
            }
            _context11.next = 14;
            break;
          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](3);
            setCartState({
              loading: false,
              error: [_context11.t0.message]
            });
          case 14:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[3, 11]]);
    }));
    return function handleRemoveCart() {
      return _ref12.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    !orderState.loading && loadMessages();
  }, [orderState === null || orderState === void 0 || (_orderState$order11 = orderState.order) === null || _orderState$order11 === void 0 ? void 0 : _orderState$order11.id, orderState === null || orderState === void 0 || (_orderState$order12 = orderState.order) === null || _orderState$order12 === void 0 ? void 0 : _orderState$order12.status, orderState.loading]);
  (0, _react.useEffect)(function () {
    if (props.order && !isDriverNotification) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        loading: false,
        order: props.order
      }));
      if (isFetchDrivers) {
        var _props$order$id, _props$order3;
        getDrivers((_props$order$id = (_props$order3 = props.order) === null || _props$order3 === void 0 ? void 0 : _props$order3.id) !== null && _props$order$id !== void 0 ? _props$order$id : orderId);
      }
    } else if (!orderState.order && !isDriverNotification) {
      getOrder();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, [props.order, (_orderState$order13 = orderState.order) === null || _orderState$order13 === void 0 ? void 0 : _orderState$order13.id]);
  (0, _react.useEffect)(function () {
    if (orderId && isDriverNotification) {
      getOrder();
    }
  }, [orderId, isDriverNotification]);
  (0, _react.useEffect)(function () {
    var _orderState$order16;
    if (orderState.loading || loading || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderState$order14;
      if ((order === null || order === void 0 ? void 0 : order.id) !== ((_orderState$order14 = orderState.order) === null || _orderState$order14 === void 0 ? void 0 : _orderState$order14.id)) return;
      showToast(_ToastContext.ToastType.Info, t('UPDATING_ORDER', 'Updating order...'), 1000);
      delete order.total;
      delete order.subtotal;
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
      events.emit('order_updated', Object.assign(orderState.order, order));
    };
    var handleTrackingDriver = function handleTrackingDriver(_ref13) {
      var _orderState$order15;
      var location = _ref13.location;
      var newLocation = location !== null && location !== void 0 ? location : {
        lat: -37.9722342,
        lng: 144.7729561
      };
      setDriverLocation(newLocation);
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          driver: _objectSpread(_objectSpread({}, (_orderState$order15 = orderState.order) === null || _orderState$order15 === void 0 ? void 0 : _orderState$order15.driver), {}, {
            location: newLocation
          })
        })
      }));
    };
    var ordersRoom = !token ? {
      room: 'orders',
      project: ordering.project,
      role: 'public',
      user_id: hashKey
    } : (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id));
    if (!isDisabledOrdersRoom) socket.join(ordersRoom);
    if ((_orderState$order16 = orderState.order) !== null && _orderState$order16 !== void 0 && _orderState$order16.driver_id) {
      var _orderState$order17;
      socket.join("drivers_".concat((_orderState$order17 = orderState.order) === null || _orderState$order17 === void 0 ? void 0 : _orderState$order17.driver_id));
    }
    socket.socket.on('connect', function () {
      var _orderState$order18;
      if (!isDisabledOrdersRoom) socket.join(ordersRoom);
      if ((_orderState$order18 = orderState.order) !== null && _orderState$order18 !== void 0 && _orderState$order18.driver_id) {
        var _orderState$order19;
        socket.join("drivers_".concat((_orderState$order19 = orderState.order) === null || _orderState$order19 === void 0 ? void 0 : _orderState$order19.driver_id));
      }
    });
    socket.on('tracking_driver', handleTrackingDriver);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      if (!isDisabledOrdersRoom) socket.leave(ordersRoom);
      // socket.leave(`drivers_${orderState.order?.driver_id}`)
      socket.off('update_order', handleUpdateOrder);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [orderState.order, socket === null || socket === void 0 ? void 0 : socket.socket, loading, userCustomerId, (_orderState$order20 = orderState.order) === null || _orderState$order20 === void 0 ? void 0 : _orderState$order20.driver_id, (_orderState$order21 = orderState.order) === null || _orderState$order21 === void 0 ? void 0 : _orderState$order21.id, hashKey]);
  (0, _react.useEffect)(function () {
    if (messages.loading) return;
    var handleNewMessage = function handleNewMessage(message) {
      var _messages$messages3;
      var actualChat = messages === null || messages === void 0 || (_messages$messages3 = messages.messages) === null || _messages$messages3 === void 0 ? void 0 : _messages$messages3.find(function (_message) {
        var _message$order;
        return (_message === null || _message === void 0 ? void 0 : _message.order_id) === (message === null || message === void 0 || (_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id);
      });
      var found = messages.messages.find(function (_message) {
        return _message.id === message.id;
      });
      if (!found && actualChat) {
        setMessages(_objectSpread(_objectSpread({}, messages), {}, {
          messages: [].concat(_toConsumableArray(messages.messages), [message])
        }));
      }
    };
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, (_orderState$order22 = orderState.order) === null || _orderState$order22 === void 0 ? void 0 : _orderState$order22.status, userCustomerId]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id));
    socket.join(messagesOrdersRoom);
    socket.socket.on('connect', function () {
      socket.join(messagesOrdersRoom);
    });
    return function () {
      // neccesary refactor
      if (!isDisabledOrdersRoom) socket.leave(messagesOrdersRoom);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, userCustomerId]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          user_review: review
        })
      }));
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    updateDriverPosition: updateDriverPosition,
    driverLocation: driverLocation,
    messageErrors: messageErrors,
    formatPrice: formatPrice,
    handleAssignDriver: handleAssignDriver,
    handlerSubmit: handlerSubmitSpotNumber,
    handleChangeOrderStatus: handleChangeOrderStatus,
    messages: messages,
    drivers: drivers,
    setMessages: setMessages,
    readMessages: readMessages,
    messagesReadList: messagesReadList,
    driverUpdateLocation: driverUpdateLocation,
    setDriverUpdateLocation: setDriverUpdateLocation,
    forceUpdate: forceUpdate,
    getOrder: getOrder,
    reorderState: reorderState,
    handleReorder: handleReorder,
    handleRemoveCart: handleRemoveCart,
    cartState: cartState,
    handleClickLogisticOrder: handleClickLogisticOrder
  })));
};
exports.OrderDetails = OrderDetails;
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};