"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderListGroups = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderListGroups = function OrderListGroups(props) {
  var _configs$logistic_mod, _orderGroupStatusCust, _orderGroupStatusCust2, _orderGroupStatusCust3, _orderGroupStatusCust4, _paginationSettings$p, _ordersGroup$currentT20;
  var UIComponent = props.UIComponent,
    orderBy = props.orderBy,
    isIos = props.isIos,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    orderGroupStatusCustom = props.orderGroupStatusCustom,
    onOrdersDeleted = props.onOrdersDeleted,
    customOrderTypes = props.customOrderTypes,
    customPaymethods = props.customPaymethods,
    isDriverApp = props.isDriverApp;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isLogisticActivated = configs === null || configs === void 0 ? void 0 : (_configs$logistic_mod = configs.logistic_module) === null || _configs$logistic_mod === void 0 ? void 0 : _configs$logistic_mod.value;
  var ordersStatusArray = ['pending', 'inProgress', 'completed', 'cancelled'];
  var ordersGroupStatus = {
    pending: (_orderGroupStatusCust = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.pending) !== null && _orderGroupStatusCust !== void 0 ? _orderGroupStatusCust : [0, 13],
    inProgress: (_orderGroupStatusCust2 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.inProgress) !== null && _orderGroupStatusCust2 !== void 0 ? _orderGroupStatusCust2 : [3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23],
    completed: (_orderGroupStatusCust3 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.completed) !== null && _orderGroupStatusCust3 !== void 0 ? _orderGroupStatusCust3 : [1, 11, 15],
    cancelled: (_orderGroupStatusCust4 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.cancelled) !== null && _orderGroupStatusCust4 !== void 0 ? _orderGroupStatusCust4 : [2, 5, 6, 10, 12, 16, 17]
  };
  var orderStructure = {
    loading: false,
    error: null,
    orders: [],
    pagination: {
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }
  };
  var _useState = (0, _react.useState)({
      pending: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.pending,
        currentFilter: ordersGroupStatus.pending
      }),
      inProgress: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.inProgress,
        currentFilter: ordersGroupStatus.inProgress
      }),
      completed: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.completed,
        currentFilter: ordersGroupStatus.completed
      }),
      cancelled: _objectSpread(_objectSpread({}, orderStructure), {}, {
        defaultFilter: ordersGroupStatus.cancelled,
        currentFilter: ordersGroupStatus.cancelled
      })
    }),
    _useState2 = _slicedToArray(_useState, 2),
    ordersGroup = _useState2[0],
    setOrdersGroup = _useState2[1];
  var _useState3 = (0, _react.useState)('pending'),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTabSelected = _useState4[0],
    setCurrentTabSelected = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null,
      orders: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    logisticOrders = _useState6[0],
    setlogisticOrders = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null,
      messages: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    messages = _useState8[0],
    setMessages = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    currentFilters = _useState10[0],
    setCurrentFilters = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    filtered = _useState12[0],
    setFiltered = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null,
      result: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    ordersDeleted = _useState14[0],
    setOrdersDeleted = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: true,
      error: null,
      paymethods: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    controlsState = _useState16[0],
    setControlsState = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    businessIDs = _useState18[0],
    setBusinessIDs = _useState18[1];
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var _filtered$customer, _filtered$customer2, _filtered$date, _filtered$date3;
      var page, _ref$pageSize, pageSize, orderStatus, newFetch, options, _ordersGroup$currentT, _ordersGroup$currentT2, _ordersGroup$currentT3, _ordersGroup$currentT4, _paymethodResult, paymethodResult, _filtered$driver_grou, _filtered$customer3, _filtered$customer6, customerOptions, _filtered$customer4, _filtered$customer5, _filtered$customer7, _filtered$customer8, _filtered$date2, _filtered$date4, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            page = _ref.page, _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? paginationSettings.pageSize : _ref$pageSize, orderStatus = _ref.orderStatus, newFetch = _ref.newFetch;
            options = {
              query: {
                orderBy: orderBy,
                page: page,
                page_size: pageSize
              }
            };
            options.query.where = [];
            if (orderStatus) {
              if (!(filtered !== null && filtered !== void 0 && filtered.state)) {
                options.query.where.push({
                  attribute: 'status',
                  value: orderStatus
                });
              }
              if (((_ordersGroup$currentT = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT === void 0 ? void 0 : (_ordersGroup$currentT2 = _ordersGroup$currentT.orders) === null || _ordersGroup$currentT2 === void 0 ? void 0 : _ordersGroup$currentT2.length) > 0 && !newFetch) {
                options.query = _objectSpread(_objectSpread({}, options.query), {}, {
                  page: 1
                });
                if (!(filtered !== null && filtered !== void 0 && filtered.id)) {
                  options.query.where.push({
                    attribute: 'id',
                    value: {
                      condition: '!=',
                      value: (_ordersGroup$currentT3 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT3 === void 0 ? void 0 : (_ordersGroup$currentT4 = _ordersGroup$currentT3.orders) === null || _ordersGroup$currentT4 === void 0 ? void 0 : _ordersGroup$currentT4.map(function (o) {
                        return o.id;
                      })
                    }
                  });
                }
              }
            }
            if (filtered !== null && filtered !== void 0 && filtered.id) {
              options.query.where.push({
                attribute: 'id',
                value: {
                  condition: 'ilike',
                  value: isIos ? "%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.id, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.id, "%"))
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.external_id) {
              options.query.where.push({
                attribute: 'external_id',
                value: {
                  condition: 'ilike',
                  value: isIos ? "%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.external_id, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : filtered.external_id, "%"))
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.state) {
              options.query.where.push({
                attribute: 'status',
                value: filtered.state
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.city) {
              options.query.where.push({
                attribute: 'business',
                conditions: [{
                  attribute: 'city_id',
                  value: filtered === null || filtered === void 0 ? void 0 : filtered.city
                }]
              });
            }
            if (!(filtered !== null && filtered !== void 0 && filtered.paymethod || customPaymethods)) {
              _context.next = 15;
              break;
            }
            paymethodResult = controlsState;
            if (controlsState.paymethods.length) {
              _context.next = 14;
              break;
            }
            _context.next = 13;
            return getControls();
          case 13:
            paymethodResult = _context.sent;
          case 14:
            options.query.where.push({
              attribute: 'paymethod_id',
              value: !!(filtered !== null && filtered !== void 0 && filtered.paymethod) && (filtered === null || filtered === void 0 ? void 0 : filtered.paymethod) || ((_paymethodResult = paymethodResult) === null || _paymethodResult === void 0 ? void 0 : _paymethodResult.paymethods)
            });
          case 15:
            if (filtered !== null && filtered !== void 0 && filtered.driver) {
              options.query.where.push({
                attribute: 'driver_id',
                value: filtered === null || filtered === void 0 ? void 0 : filtered.driver
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.driver_groups) {
              options.query.where.push({
                attribute: 'driver_id',
                value: filtered === null || filtered === void 0 ? void 0 : (_filtered$driver_grou = filtered.driver_groups) === null || _filtered$driver_grou === void 0 ? void 0 : _filtered$driver_grou.drivers
              });
            }
            if (filtered !== null && filtered !== void 0 && (_filtered$customer = filtered.customer) !== null && _filtered$customer !== void 0 && _filtered$customer.email || filtered !== null && filtered !== void 0 && (_filtered$customer2 = filtered.customer) !== null && _filtered$customer2 !== void 0 && _filtered$customer2.phone) {
              customerOptions = [];
              if (filtered !== null && filtered !== void 0 && (_filtered$customer3 = filtered.customer) !== null && _filtered$customer3 !== void 0 && _filtered$customer3.email) {
                customerOptions.push({
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(filtered === null || filtered === void 0 ? void 0 : (_filtered$customer4 = filtered.customer) === null || _filtered$customer4 === void 0 ? void 0 : _filtered$customer4.email, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : (_filtered$customer5 = filtered.customer) === null || _filtered$customer5 === void 0 ? void 0 : _filtered$customer5.email, "%"))
                  }
                });
              }
              if (filtered !== null && filtered !== void 0 && (_filtered$customer6 = filtered.customer) !== null && _filtered$customer6 !== void 0 && _filtered$customer6.phone) {
                customerOptions.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(filtered === null || filtered === void 0 ? void 0 : (_filtered$customer7 = filtered.customer) === null || _filtered$customer7 === void 0 ? void 0 : _filtered$customer7.phone, "%") : encodeURI("%".concat(filtered === null || filtered === void 0 ? void 0 : (_filtered$customer8 = filtered.customer) === null || _filtered$customer8 === void 0 ? void 0 : _filtered$customer8.phone, "%"))
                  }
                });
              }
              options.query.where.push({
                attribute: 'customer',
                conditions: customerOptions
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.delivery_type || customOrderTypes) {
              options.query.where.push({
                attribute: 'delivery_type',
                value: !!(filtered !== null && filtered !== void 0 && filtered.delivery_type) && (filtered === null || filtered === void 0 ? void 0 : filtered.delivery_type) || customOrderTypes
              });
            }
            if (filtered !== null && filtered !== void 0 && (_filtered$date = filtered.date) !== null && _filtered$date !== void 0 && _filtered$date.from) {
              options.query.where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '>=',
                  value: filtered === null || filtered === void 0 ? void 0 : (_filtered$date2 = filtered.date) === null || _filtered$date2 === void 0 ? void 0 : _filtered$date2.from
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && (_filtered$date3 = filtered.date) !== null && _filtered$date3 !== void 0 && _filtered$date3.to) {
              options.query.where.push({
                attribute: 'delivery_datetime',
                value: {
                  condition: '<=',
                  value: filtered === null || filtered === void 0 ? void 0 : (_filtered$date4 = filtered.date) === null || _filtered$date4 === void 0 ? void 0 : _filtered$date4.to
                }
              });
            }
            if (filtered !== null && filtered !== void 0 && filtered.timeStatus) {
              options.query.where.push({
                attribute: 'time_status',
                value: filtered === null || filtered === void 0 ? void 0 : filtered.timeStatus
              });
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard() : ordering.setAccessToken(accessToken).orders();
            _context.next = 28;
            return functionFetch.get(options);
          case 28:
            return _context.abrupt("return", _context.sent);
          case 29:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getControls = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _result$paymethods, _result$paymethods$fi, _yield$ordering$setAc, _yield$ordering$setAc2, error, result, obj, _controlsState$error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setControlsState(_objectSpread(_objectSpread({}, controlsState), {}, {
              loading: true
            }));
            _context2.next = 4;
            return ordering.setAccessToken(accessToken).controls().get();
          case 4:
            _yield$ordering$setAc = _context2.sent;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            obj = _objectSpread(_objectSpread({}, controlsState), {}, {
              loading: false,
              paymethods: result === null || result === void 0 ? void 0 : (_result$paymethods = result.paymethods) === null || _result$paymethods === void 0 ? void 0 : (_result$paymethods$fi = _result$paymethods.filter(function (p) {
                return customPaymethods === null || customPaymethods === void 0 ? void 0 : customPaymethods.includes(p.name);
              })) === null || _result$paymethods$fi === void 0 ? void 0 : _result$paymethods$fi.map(function (pay) {
                return pay.id;
              }),
              error: error ? result : null
            });
            setControlsState(obj);
            return _context2.abrupt("return", obj);
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            setControlsState(_objectSpread(_objectSpread({}, controlsState), {}, {
              loading: false,
              error: _context2.t0 !== null && _context2.t0 !== void 0 && _context2.t0.message ? (_controlsState$error = controlsState.error) === null || _controlsState$error === void 0 ? void 0 : _controlsState$error.push(_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) : ['ERROR']
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return function getControls() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _ref5,
        newFetch,
        newFetchCurrent,
        _ordersGroup$currentT5,
        pageSize,
        _ordersGroup$currentT6,
        _ordersGroup$currentT7,
        _ordersGroup$currentT8,
        _yield$getOrders,
        _yield$getOrders$cont,
        error,
        result,
        pagination,
        _ordersCleaned,
        _err$message,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref5 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, newFetch = _ref5.newFetch, newFetchCurrent = _ref5.newFetchCurrent;
            if (!(!(newFetch || newFetchCurrent) && ordersGroup[currentTabSelected].pagination.currentPage === ordersGroup[currentTabSelected].pagination.totalPages && ordersGroup[currentTabSelected].pagination.total !== null)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            if (newFetch) {
              ordersStatusArray === null || ordersStatusArray === void 0 ? void 0 : ordersStatusArray.map(function (tab) {
                ordersGroup = _objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, tab, _objectSpread(_objectSpread({}, orderStructure), {}, {
                  defaultFilter: ordersGroupStatus[tab],
                  currentFilter: ordersGroup[tab].currentFilter
                })));
              });
            } else if (newFetchCurrent) {
              ordersGroup = _objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, orderStructure), {}, {
                defaultFilter: ordersGroupStatus[currentTabSelected],
                currentFilter: (_ordersGroup$currentT5 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT5 === void 0 ? void 0 : _ordersGroup$currentT5.currentFilter
              })));
            }
            pageSize = paginationSettings.pageSize;
            _context3.prev = 5;
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              loading: true
            }))));
            _context3.next = 9;
            return getOrders({
              page: 1,
              pageSize: pageSize,
              orderStatus: (_ordersGroup$currentT6 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT6 === void 0 ? void 0 : _ordersGroup$currentT6.currentFilter,
              newFetch: newFetch
            });
          case 9:
            _yield$getOrders = _context3.sent;
            _yield$getOrders$cont = _yield$getOrders.content;
            error = _yield$getOrders$cont.error;
            result = _yield$getOrders$cont.result;
            pagination = _yield$getOrders$cont.pagination;
            _ordersCleaned = error ? newFetch || newFetchCurrent ? [] : sortOrders((_ordersGroup$currentT7 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT7 === void 0 ? void 0 : _ordersGroup$currentT7.orders) : newFetch || newFetchCurrent ? sortOrders(result) : sortOrders((_ordersGroup$currentT8 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT8 === void 0 ? void 0 : _ordersGroup$currentT8.orders.concat(result));
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              loading: false,
              orders: _ordersCleaned,
              error: error ? result : null,
              pagination: _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected].pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              })
            }))));
            _context3.next = 21;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](5);
            if (_context3.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']
              }))));
            }
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 18]]);
    }));
    return function loadOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _ordersGroup$currentT9, _ordersGroup$currentT10, _ordersGroup$currentT11, _ordersGroup$currentT12, _yield$getOrders2, _yield$getOrders2$con, error, result, pagination, _ordersCleaned, _err$message2;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              loading: true
            }))));
            _context4.prev = 1;
            _context4.next = 4;
            return getOrders({
              page: ordersGroup[currentTabSelected].pagination.currentPage + 1,
              orderStatus: (_ordersGroup$currentT9 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT9 === void 0 ? void 0 : _ordersGroup$currentT9.currentFilter,
              newFetch: true
            });
          case 4:
            _yield$getOrders2 = _context4.sent;
            _yield$getOrders2$con = _yield$getOrders2.content;
            error = _yield$getOrders2$con.error;
            result = _yield$getOrders2$con.result;
            pagination = _yield$getOrders2$con.pagination;
            _ordersCleaned = error ? sortOrders((_ordersGroup$currentT10 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT10 === void 0 ? void 0 : _ordersGroup$currentT10.orders) : sortOrders((_ordersGroup$currentT11 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT11 === void 0 ? void 0 : (_ordersGroup$currentT12 = _ordersGroup$currentT11.orders) === null || _ordersGroup$currentT12 === void 0 ? void 0 : _ordersGroup$currentT12.concat(result));
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              loading: false,
              orders: _ordersCleaned,
              error: error ? result : null,
              pagination: !error ? _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected].pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              }) : ordersGroup[currentTabSelected].pagination
            }))));
            _context4.next = 16;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](1);
            if (_context4.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message2 = _context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']
              }))));
            }
          case 16:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 13]]);
    }));
    return function loadMoreOrders() {
      return _ref6.apply(this, arguments);
    };
  }();
  var loadMessages = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(orderId) {
      var url, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context5.next = 5;
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
            response = _context5.sent;
            _context5.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context5.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
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
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context5.t0.Messages]
            }));
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function loadMessages(_x3) {
      return _ref7.apply(this, arguments);
    };
  }();
  var deleteOrders = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(orderIds) {
      var _ordersGroup$currentT13, _ordersGroup$currentT14, _ordersGroup$currentT15, errorState, _yield$ordering$setAc3, error, _iterator, _step, id, _yield$ordering$setAc4, multiError, isError, idsDeleted, _err$message3;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setOrdersDeleted(_objectSpread(_objectSpread({}, ordersDeleted), {}, {
              loading: true
            }));
            errorState = [];
            if (!(orderIds.length === 1)) {
              _context6.next = 11;
              break;
            }
            _context6.next = 6;
            return ordering.setAccessToken(accessToken).orders(orderIds[0]).delete();
          case 6:
            _yield$ordering$setAc3 = _context6.sent;
            error = _yield$ordering$setAc3.content.error;
            errorState.push({
              error: error,
              id: orderIds[0]
            });
            _context6.next = 32;
            break;
          case 11:
            if (!(orderIds.length > 1)) {
              _context6.next = 32;
              break;
            }
            _iterator = _createForOfIteratorHelper(orderIds);
            _context6.prev = 13;
            _iterator.s();
          case 15:
            if ((_step = _iterator.n()).done) {
              _context6.next = 24;
              break;
            }
            id = _step.value;
            _context6.next = 19;
            return ordering.setAccessToken(accessToken).orders(id).delete();
          case 19:
            _yield$ordering$setAc4 = _context6.sent;
            multiError = _yield$ordering$setAc4.content.error;
            errorState.push({
              error: multiError,
              id: id
            });
          case 22:
            _context6.next = 15;
            break;
          case 24:
            _context6.next = 29;
            break;
          case 26:
            _context6.prev = 26;
            _context6.t0 = _context6["catch"](13);
            _iterator.e(_context6.t0);
          case 29:
            _context6.prev = 29;
            _iterator.f();
            return _context6.finish(29);
          case 32:
            isError = errorState.some(function (e) {
              return e.error;
            });
            idsDeleted = errorState === null || errorState === void 0 ? void 0 : errorState.map(function (obj) {
              return !obj.error && obj.id;
            });
            onOrdersDeleted && onOrdersDeleted({
              isError: isError,
              list: idsDeleted
            });
            setOrdersDeleted(_objectSpread(_objectSpread({}, ordersDeleted), {}, {
              loading: false
            }));
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
              orders: idsDeleted.length ? sortOrders((_ordersGroup$currentT13 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT13 === void 0 ? void 0 : (_ordersGroup$currentT14 = _ordersGroup$currentT13.orders) === null || _ordersGroup$currentT14 === void 0 ? void 0 : _ordersGroup$currentT14.filter(function (order) {
                return !idsDeleted.includes(order.id);
              })) : sortOrders((_ordersGroup$currentT15 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT15 === void 0 ? void 0 : _ordersGroup$currentT15.orders)
            }))));
            _context6.next = 42;
            break;
          case 39:
            _context6.prev = 39;
            _context6.t1 = _context6["catch"](0);
            if (_context6.t1.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message3 = _context6.t1 === null || _context6.t1 === void 0 ? void 0 : _context6.t1.message) !== null && _err$message3 !== void 0 ? _err$message3 : 'ERROR']
              }))));
            }
          case 42:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 39], [13, 26, 29, 32]]);
    }));
    return function deleteOrders(_x4) {
      return _ref8.apply(this, arguments);
    };
  }();
  var loadLogisticOrders = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(isAlreadyFetched) {
      var _session$user, url, response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (!isAlreadyFetched) {
              _context7.next = 2;
              break;
            }
            return _context7.abrupt("return");
          case 2:
            _context7.prev = 2;
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/drivers/").concat((_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id, "/assign_requests");
            _context7.next = 7;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 7:
            response = _context7.sent;
            _context7.next = 10;
            return response.json();
          case 10:
            _yield$response$json2 = _context7.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context7.next = 16;
              break;
            }
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              loading: false,
              orders: result.filter(function (order) {
                var _order$order_group, _order$order_group$or;
                return !(order !== null && order !== void 0 && order.order_group && (order === null || order === void 0 ? void 0 : (_order$order_group = order.order_group) === null || _order$order_group === void 0 ? void 0 : (_order$order_group$or = _order$order_group.orders) === null || _order$order_group$or === void 0 ? void 0 : _order$order_group$or.length) === 0);
              })
            }));
            return _context7.abrupt("return");
          case 16:
            setlogisticOrders({
              loading: false,
              orders: [],
              error: result
            });
            _context7.next = 22;
            break;
          case 19:
            _context7.prev = 19;
            _context7.t0 = _context7["catch"](2);
            setlogisticOrders({
              loading: false,
              orders: [],
              error: _context7.t0.message
            });
          case 22:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[2, 19]]);
    }));
    return function loadLogisticOrders(_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
  var sortOrders = function sortOrders(orders) {
    var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    var ordersSorted = orders === null || orders === void 0 ? void 0 : orders.sort(function (a, b) {
      if (sortBy === 'desc') {
        return b.id - a.id;
      }
      return a.id - b.id;
    });
    return ordersSorted;
  };
  var filterByIdUnique = function filterByIdUnique(array) {
    var _ordersGroupStatus$cu;
    if (!array) return [];
    var tempObj = {};
    var status = (_ordersGroupStatus$cu = ordersGroupStatus[currentTabSelected]) !== null && _ordersGroupStatus$cu !== void 0 ? _ordersGroupStatus$cu : [];
    return array.map(function (element) {
      if (Array.isArray(element)) {
        var _array$;
        var _array = element[0][1].map(function (item) {
          if (!tempObj[item.id] && status.includes(item.status)) {
            tempObj[item.id] = true;
            return item;
          }
          return null;
        }).filter(function (item) {
          return item !== null;
        });
        return _array.length ? [[(_array$ = _array[0]) === null || _array$ === void 0 ? void 0 : _array$.cart_group_id.toString(), _array]] : null;
      } else {
        if (!tempObj[element.id] && status.includes(element.status)) {
          tempObj[element.id] = true;
          return element;
        }
        return null;
      }
    }).filter(function (item) {
      return Array.isArray(item) ? item.length : item;
    });
  };
  var formatOrdersGrouped = function formatOrdersGrouped(orders) {
    var _totalOrders;
    var totalOrders = orders;
    var ordersGroupids = [];
    totalOrders = (_totalOrders = totalOrders) === null || _totalOrders === void 0 ? void 0 : _totalOrders.map(function (item) {
      if (!(item !== null && item !== void 0 && item.cart_group_id)) return item;
      var groupIds = totalOrders.filter(function (o) {
        return o.cart_group_id === (item === null || item === void 0 ? void 0 : item.cart_group_id);
      });
      var _item = !ordersGroupids.includes(item === null || item === void 0 ? void 0 : item.cart_group_id) ? Object.entries(_defineProperty({}, item === null || item === void 0 ? void 0 : item.cart_group_id, groupIds)) : '';
      if (_item) ordersGroupids.push(item === null || item === void 0 ? void 0 : item.cart_group_id);
      return _item;
    }).filter(function (item) {
      return item;
    });
    return filterByIdUnique(totalOrders);
  };
  var getStatusById = function getStatusById(id) {
    var _orderGroupStatusCust5, _orderGroupStatusCust6, _orderGroupStatusCust7;
    if (!id && id !== 0) return;
    var pending = (_orderGroupStatusCust5 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.pending) !== null && _orderGroupStatusCust5 !== void 0 ? _orderGroupStatusCust5 : [0, 13];
    var inProgress = (_orderGroupStatusCust6 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.inProgress) !== null && _orderGroupStatusCust6 !== void 0 ? _orderGroupStatusCust6 : [3, 4, 7, 8, 9, 14, 18, 19, 20, 21];
    var completed = (_orderGroupStatusCust7 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.completed) !== null && _orderGroupStatusCust7 !== void 0 ? _orderGroupStatusCust7 : [1, 11, 15];
    // const cancelled = orderGroupStatusCustom?.cancelled ?? [2, 5, 6, 10, 12, 16, 17]

    var status = pending.includes(id) ? 'pending' : inProgress.includes(id) ? 'inProgress' : completed.includes(id) ? 'completed' : 'cancelled';
    return status;
  };
  var actionOrderToTab = function actionOrderToTab(orderAux, status, type) {
    var _ordersGroup$status;
    var orderList = (_ordersGroup$status = ordersGroup[status]) === null || _ordersGroup$status === void 0 ? void 0 : _ordersGroup$status.orders;
    var orders;
    var order = _objectSpread(_objectSpread({}, orderAux), {}, {
      showNotification: true
    });
    if (type === 'update') {
      var indexToUpdate = orderList.findIndex(function (o) {
        return o.id === order.id;
      });
      orderList[indexToUpdate] = _objectSpread(_objectSpread({}, order), {}, {
        action: type + (order === null || order === void 0 ? void 0 : order.status)
      });
      orders = orderList;
    } else {
      orders = type === 'add' ? [_objectSpread(_objectSpread({}, order), {}, {
        action: type + (order === null || order === void 0 ? void 0 : order.status)
      })].concat(_toConsumableArray(orderList)) : orderList.filter(function (_order) {
        return _order.id !== order.id;
      });
    }
    ordersGroup[status].orders = sortOrders(orders);
    var _pagination = ordersGroup[status].pagination;
    if (type !== 'update') {
      _pagination = _objectSpread(_objectSpread({}, ordersGroup[status].pagination), {}, {
        total: ordersGroup[status].pagination.total + (type === 'add' ? 1 : -1)
      });
      ordersGroup[status].pagination = _pagination;
    }
    setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
      orders: filterByIdUnique(sortOrders(orders)),
      pagination: _pagination
    }));
  };
  var handleClickOrder = function handleClickOrder(orderAux) {
    var _order$order_group2;
    var order = _objectSpread(_objectSpread({}, orderAux), {}, {
      showNotification: false
    });
    var ordersGroups = order === null || order === void 0 ? void 0 : (_order$order_group2 = order.order_group) === null || _order$order_group2 === void 0 ? void 0 : _order$order_group2.orders;
    if (!ordersGroups) {
      var _ordersGroup$status2;
      var status = getStatusById(order === null || order === void 0 ? void 0 : order.status);
      var orderList = (_ordersGroup$status2 = ordersGroup[status]) === null || _ordersGroup$status2 === void 0 ? void 0 : _ordersGroup$status2.orders;
      var indexToUpdate = orderList === null || orderList === void 0 ? void 0 : orderList.findIndex(function (o) {
        return (o === null || o === void 0 ? void 0 : o.id) === (order === null || order === void 0 ? void 0 : order.id);
      });
      orderList[indexToUpdate] = order;
      setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, status, _objectSpread(_objectSpread({}, ordersGroup[status]), {}, {
        orders: sortOrders(orderList)
      }))));
    } else {
      var _order$order_group3, _order$order_group3$o, _order$order_group3$o2;
      var _status = getStatusById(order === null || order === void 0 ? void 0 : (_order$order_group3 = order.order_group) === null || _order$order_group3 === void 0 ? void 0 : (_order$order_group3$o = _order$order_group3.orders) === null || _order$order_group3$o === void 0 ? void 0 : (_order$order_group3$o2 = _order$order_group3$o[0]) === null || _order$order_group3$o2 === void 0 ? void 0 : _order$order_group3$o2.status);
      var _orderList;
      ordersGroups === null || ordersGroups === void 0 ? void 0 : ordersGroups.map(function (order) {
        var _ordersGroup$_status, _orderList2;
        _orderList = (_ordersGroup$_status = ordersGroup[_status]) === null || _ordersGroup$_status === void 0 ? void 0 : _ordersGroup$_status.orders;
        var indexToUpdate = (_orderList2 = _orderList) === null || _orderList2 === void 0 ? void 0 : _orderList2.findIndex(function (o) {
          return (o === null || o === void 0 ? void 0 : o.id) === (order === null || order === void 0 ? void 0 : order.id);
        });
        _orderList[indexToUpdate] = order;
      });
      setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, _status, _objectSpread(_objectSpread({}, ordersGroup[_status]), {}, {
        orders: sortOrders(_orderList)
      }))));
    }
  };
  var handleClickLogisticOrder = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(status, orderId) {
      var _session$user2, _session$user3, response, _yield$response$json3, result, error, _logisticOrders$order, _logisticOrders$order2, order, newOrders, _order$order, _order$order$id, _order$order2, _order$order$id2, _order$order3;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return fetch("".concat(ordering.root, "/drivers/").concat((_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id, "/assign_requests/").concat(orderId), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify({
                status: status,
                user_id: (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id
              })
            });
          case 3:
            response = _context8.sent;
            _context8.next = 6;
            return response.json();
          case 6:
            _yield$response$json3 = _context8.sent;
            result = _yield$response$json3.result;
            error = _yield$response$json3.error;
            if (error) {
              _context8.next = 15;
              break;
            }
            order = logisticOrders === null || logisticOrders === void 0 ? void 0 : (_logisticOrders$order = logisticOrders.orders) === null || _logisticOrders$order === void 0 ? void 0 : _logisticOrders$order.find(function (order) {
              return (order === null || order === void 0 ? void 0 : order.id) === orderId;
            });
            newOrders = sortOrders(logisticOrders === null || logisticOrders === void 0 ? void 0 : (_logisticOrders$order2 = logisticOrders.orders) === null || _logisticOrders$order2 === void 0 ? void 0 : _logisticOrders$order2.filter(function (_order) {
              return (_order === null || _order === void 0 ? void 0 : _order.id) !== orderId;
            }));
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              orders: newOrders
            }));
            if (status === 1) {
              handleClickOrder((_order$order = order === null || order === void 0 ? void 0 : order.order) !== null && _order$order !== void 0 ? _order$order : order);
              showToast(_ToastContext.ToastType.Success, t('SPECIFIC_ORDER_ACCEPTED', 'Your accepted the order number _NUMBER_').replace('_NUMBER_', (_order$order$id = order === null || order === void 0 ? void 0 : (_order$order2 = order.order) === null || _order$order2 === void 0 ? void 0 : _order$order2.id) !== null && _order$order$id !== void 0 ? _order$order$id : order === null || order === void 0 ? void 0 : order.id));
            } else {
              showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_REJECTED', 'Your rejected the order number _NUMBER_').replace('_NUMBER_', (_order$order$id2 = order === null || order === void 0 ? void 0 : (_order$order3 = order.order) === null || _order$order3 === void 0 ? void 0 : _order$order3.id) !== null && _order$order$id2 !== void 0 ? _order$order$id2 : order === null || order === void 0 ? void 0 : order.id));
            }
            return _context8.abrupt("return");
          case 15:
            showToast(_ToastContext.ToastType.Error, result);
            _context8.next = 22;
            break;
          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](0);
            setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
              error: _context8.t0.message
            }));
            showToast(_ToastContext.ToastType.Error, _context8.t0.message);
          case 22:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 18]]);
    }));
    return function handleClickLogisticOrder(_x6, _x7) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(status, orderIds) {
      var body,
        bodyToSend,
        setOrderStatus,
        result,
        _err$message4,
        _args10 = arguments;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            body = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {};
            _context10.prev = 1;
            delete body.id;
            bodyToSend = Object.keys(body || {}).length > 0 ? body : {
              status: status
            };
            setOrderStatus = /*#__PURE__*/function () {
              var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
                var _yield$ordering$setAc5, _yield$ordering$setAc6, _result, error;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return ordering.setAccessToken(session === null || session === void 0 ? void 0 : session.token).orders(id).save(_objectSpread(_objectSpread({}, bodyToSend), {}, {
                        id: id
                      }));
                    case 3:
                      _yield$ordering$setAc5 = _context9.sent;
                      _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
                      _result = _yield$ordering$setAc6.result;
                      error = _yield$ordering$setAc6.error;
                      return _context9.abrupt("return", error ? null : _result);
                    case 10:
                      _context9.prev = 10;
                      _context9.t0 = _context9["catch"](0);
                      return _context9.abrupt("return", null);
                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[0, 10]]);
              }));
              return function setOrderStatus(_x10) {
                return _ref12.apply(this, arguments);
              };
            }();
            _context10.next = 7;
            return Promise.all(orderIds === null || orderIds === void 0 ? void 0 : orderIds.map(function (id) {
              return setOrderStatus(id);
            }));
          case 7:
            result = _context10.sent;
            return _context10.abrupt("return", result);
          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](1);
            return _context10.abrupt("return", (_err$message4 = _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message) !== null && _err$message4 !== void 0 ? _err$message4 : _context10.t0);
          case 14:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[1, 11]]);
    }));
    return function handleChangeOrderStatus(_x8, _x9) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleSendCustomerReview = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref13) {
      var customerId, orderIds, body, onClose, setCustomerReview, result, orders, _err$message5;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            customerId = _ref13.customerId, orderIds = _ref13.orderIds, body = _ref13.body, onClose = _ref13.onClose;
            _context12.prev = 1;
            setCustomerReview = /*#__PURE__*/function () {
              var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(body) {
                var response, _yield$response$json4, _result2, error;
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      _context11.next = 3;
                      return fetch("".concat(ordering.root, "/users/").concat(customerId, "/user_reviews"), {
                        method: 'POST',
                        headers: {
                          Authorization: "Bearer ".concat(session.token),
                          'Content-Type': 'application/json',
                          'X-App-X': ordering.appId,
                          'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                        },
                        body: JSON.stringify(body)
                      });
                    case 3:
                      response = _context11.sent;
                      _context11.next = 6;
                      return response.json();
                    case 6:
                      _yield$response$json4 = _context11.sent;
                      _result2 = _yield$response$json4.result;
                      error = _yield$response$json4.error;
                      return _context11.abrupt("return", error ? null : _result2);
                    case 12:
                      _context11.prev = 12;
                      _context11.t0 = _context11["catch"](0);
                      return _context11.abrupt("return", null);
                    case 15:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11, null, [[0, 12]]);
              }));
              return function setCustomerReview(_x12) {
                return _ref15.apply(this, arguments);
              };
            }();
            _context12.next = 5;
            return Promise.all(orderIds === null || orderIds === void 0 ? void 0 : orderIds.map(function (id) {
              return setCustomerReview(_objectSpread(_objectSpread({}, body), {}, {
                order_id: id,
                user_id: customerId
              }));
            }));
          case 5:
            result = _context12.sent;
            if (result !== null && result !== void 0 && result.length) {
              orders = ordersGroup[currentTabSelected].orders;
              result === null || result === void 0 ? void 0 : result.map(function (order) {
                var orderFound = orders.find(function (o) {
                  return o.id === order.order_id;
                });
                var idxOrderFound = orders.findIndex(function (o) {
                  return o.id === order.order_id;
                });
                if (orderFound) {
                  orderFound = _objectSpread(_objectSpread({}, orderFound), {}, {
                    user_review: order
                  });
                  orders[idxOrderFound] = orderFound;
                  setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
                    orders: orders
                  }));
                }
              });
              showToast(_ToastContext.ToastType.Success, t('ORDERS_SUCCESSFULLY_REVIEWED', 'Orders successfully reviewed'));
            }
            onClose && onClose();
            return _context12.abrupt("return", result);
          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](1);
            return _context12.abrupt("return", (_err$message5 = _context12.t0 === null || _context12.t0 === void 0 ? void 0 : _context12.t0.message) !== null && _err$message5 !== void 0 ? _err$message5 : _context12.t0);
          case 14:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[1, 11]]);
    }));
    return function handleSendCustomerReview(_x11) {
      return _ref14.apply(this, arguments);
    };
  }();
  var getBusinessesIDs = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var propsToFetch, _yield$ordering$busin, _yield$ordering$busin2, error, result, _businessIDs, _err$message6;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            propsToFetch = ['id', 'name'];
            _context13.prev = 1;
            _context13.next = 4;
            return ordering.businesses().asDashboard().select(propsToFetch).get();
          case 4:
            _yield$ordering$busin = _context13.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            error = _yield$ordering$busin2.error;
            result = _yield$ordering$busin2.result;
            if (!error) {
              _businessIDs = result.length > 0 && result.map(function (_ref17) {
                var id = _ref17.id;
                return id;
              });
              setBusinessIDs(_businessIDs);
            }
            _context13.next = 14;
            break;
          case 11:
            _context13.prev = 11;
            _context13.t0 = _context13["catch"](1);
            if (_context13.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, _defineProperty({}, currentTabSelected, _objectSpread(_objectSpread({}, ordersGroup[currentTabSelected]), {}, {
                loading: false,
                error: [(_err$message6 = _context13.t0 === null || _context13.t0 === void 0 ? void 0 : _context13.t0.message) !== null && _err$message6 !== void 0 ? _err$message6 : 'ERROR']
              }))));
            }
          case 14:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[1, 11]]);
    }));
    return function getBusinessesIDs() {
      return _ref16.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _session$user4;
    if ((session === null || session === void 0 ? void 0 : (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) !== 2) return;
    getBusinessesIDs();
  }, []);
  (0, _react.useEffect)(function () {
    var _ordersGroup$currentT16;
    setCurrentFilters((_ordersGroup$currentT16 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT16 === void 0 ? void 0 : _ordersGroup$currentT16.currentFilter);
    if (currentTabSelected === 'logisticOrders') {
      loadLogisticOrders(!!(logisticOrders !== null && logisticOrders !== void 0 && logisticOrders.orders));
    } else {
      var _ordersGroup$currentT17, _ordersGroup$currentT18;
      loadOrders({
        newFetchCurrent: ((_ordersGroup$currentT17 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT17 === void 0 ? void 0 : (_ordersGroup$currentT18 = _ordersGroup$currentT17.pagination) === null || _ordersGroup$currentT18 === void 0 ? void 0 : _ordersGroup$currentT18.total) === null
      });
    }
  }, [currentTabSelected]);
  (0, _react.useEffect)(function () {
    if (currentFilters && !isDriverApp) {
      loadOrders({
        newFetchCurrent: true
      });
    }
  }, [currentFilters]);
  (0, _react.useEffect)(function () {
    if (!filtered) return;
    loadOrders({
      newFetch: true
    });
  }, [filtered]);
  (0, _react.useEffect)(function () {
    var _ordersGroup$currentT19, _session$user7, _session$user8;
    if ((_ordersGroup$currentT19 = ordersGroup[currentTabSelected]) !== null && _ordersGroup$currentT19 !== void 0 && _ordersGroup$currentT19.loading || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _session$user5, _orderFound, _orderFound$driver, _order$driver, _session$user6;
      if ((session === null || session === void 0 ? void 0 : (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.level) === 2 && businessIDs.length > 0 && !businessIDs.includes(order.business_id)) return;
      events.emit('order_updated', order);
      var orderFound = null;
      for (var i = 0; i < ordersStatusArray.length; i++) {
        var status = ordersStatusArray[i];
        if (order !== null && order !== void 0 && order.products) {
          var _ordersGroup$status3, _ordersGroup$status3$;
          orderFound = (_ordersGroup$status3 = ordersGroup[status]) === null || _ordersGroup$status3 === void 0 ? void 0 : (_ordersGroup$status3$ = _ordersGroup$status3.orders) === null || _ordersGroup$status3$ === void 0 ? void 0 : _ordersGroup$status3$.find(function (_order) {
            return _order.id === order.id;
          });
        }
        if (orderFound) break;
      }
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id), 1000);
      if (!orderFound) {
        var _ordersGroup, _getStatusById;
        if (!(order !== null && order !== void 0 && order.products) || !(order !== null && order !== void 0 && order.summary) || typeof (order === null || order === void 0 ? void 0 : order.status) !== 'number' || !(order !== null && order !== void 0 && order.customer) || !(order !== null && order !== void 0 && order.business) || !(order !== null && order !== void 0 && order.paymethod)) {
          return;
        }
        delete order.total;
        delete order.subtotal;
        var currentFilter = (_ordersGroup = ordersGroup[(_getStatusById = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById !== void 0 ? _getStatusById : '']) === null || _ordersGroup === void 0 ? void 0 : _ordersGroup.currentFilter;
        !currentFilter.includes(order.status) ? actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'remove') : actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'add');
        return;
      }
      if (orderFound.id === order.id && ((_orderFound = orderFound) === null || _orderFound === void 0 ? void 0 : (_orderFound$driver = _orderFound.driver) === null || _orderFound$driver === void 0 ? void 0 : _orderFound$driver.id) !== (order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) && (session === null || session === void 0 ? void 0 : (_session$user6 = session.user) === null || _session$user6 === void 0 ? void 0 : _session$user6.level) === 4) {
        actionOrderToTab(orderFound, getStatusById(orderFound.status), 'remove');
      }
      if (orderFound.id === order.id) {
        delete order.total;
        delete order.subtotal;
      }
      if (!(order !== null && order !== void 0 && order.status) && (order === null || order === void 0 ? void 0 : order.status) !== 0) {
        Object.assign(orderFound, order);
      } else {
        var _getStatusById2, _getStatusById3, _orderFound2, _ordersGroup$newOrder;
        var newOrderStatus = (_getStatusById2 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById2 !== void 0 ? _getStatusById2 : '';
        var currentOrderStatus = (_getStatusById3 = getStatusById((_orderFound2 = orderFound) === null || _orderFound2 === void 0 ? void 0 : _orderFound2.status)) !== null && _getStatusById3 !== void 0 ? _getStatusById3 : '';
        var _currentFilter = (_ordersGroup$newOrder = ordersGroup[newOrderStatus]) === null || _ordersGroup$newOrder === void 0 ? void 0 : _ordersGroup$newOrder.currentFilter;
        Object.assign(orderFound, order);
        if (newOrderStatus !== currentOrderStatus) {
          var _ordersGroup$newOrder2;
          actionOrderToTab(orderFound, currentOrderStatus, 'remove');
          var total = (_ordersGroup$newOrder2 = ordersGroup[newOrderStatus].pagination.total) !== null && _ordersGroup$newOrder2 !== void 0 ? _ordersGroup$newOrder2 : null;
          if (_currentFilter.includes(orderFound.status) && total !== null) {
            actionOrderToTab(orderFound, newOrderStatus, 'add');
          }
        } else {
          !_currentFilter.includes(orderFound.status) ? actionOrderToTab(orderFound, newOrderStatus, 'remove') : actionOrderToTab(orderFound, newOrderStatus, 'update');
        }
      }
    };
    var handleAddNewOrder = function handleAddNewOrder(order) {
      var _getStatusById4, _ordersGroup$status4;
      events.emit('order_added', order);
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id), 1000);
      var status = (_getStatusById4 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById4 !== void 0 ? _getStatusById4 : '';
      var currentFilter = (_ordersGroup$status4 = ordersGroup[status]) === null || _ordersGroup$status4 === void 0 ? void 0 : _ordersGroup$status4.currentFilter;
      if (currentFilter !== null && currentFilter !== void 0 && currentFilter.includes(order === null || order === void 0 ? void 0 : order.status)) {
        actionOrderToTab(order, status, 'add');
      }
    };
    socket.on('orders_register', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    var ordersRoom = (session === null || session === void 0 ? void 0 : (_session$user7 = session.user) === null || _session$user7 === void 0 ? void 0 : _session$user7.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user8 = session.user) === null || _session$user8 === void 0 ? void 0 : _session$user8.id);
    socket.join(ordersRoom);
    socket.socket.on('connect', function () {
      socket.join(ordersRoom);
    });
    return function () {
      socket.off('orders_register', handleAddNewOrder);
      socket.off('update_order', handleUpdateOrder);
    };
  }, [ordersGroup, socket === null || socket === void 0 ? void 0 : socket.socket, session]);
  var handleAddAssignRequest = (0, _react.useCallback)(function (order) {
    var _order$order$id3, _order$order4;
    setlogisticOrders(_objectSpread(_objectSpread({}, logisticOrders), {}, {
      orders: sortOrders([].concat(_toConsumableArray(logisticOrders === null || logisticOrders === void 0 ? void 0 : logisticOrders.orders), [order]))
    }));
    showToast(_ToastContext.ToastType.Info, t('SPECIFIC_LOGISTIC_ORDER_ORDERED', 'Logisitc order _NUMBER_ has been ordered').replace('_NUMBER_', (_order$order$id3 = order === null || order === void 0 ? void 0 : (_order$order4 = order.order) === null || _order$order4 === void 0 ? void 0 : _order$order4.id) !== null && _order$order$id3 !== void 0 ? _order$order$id3 : order.id), 1000);
  }, []);
  var handleDeleteAssignRequest = (0, _react.useCallback)(function (order) {
    setlogisticOrders(function (prevState) {
      var _prevState$orders, _prevState$orders2, _prevState$orders3;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: prevState !== null && prevState !== void 0 && (_prevState$orders = prevState.orders) !== null && _prevState$orders !== void 0 && _prevState$orders.some(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        }) ? sortOrders([].concat(_toConsumableArray(prevState === null || prevState === void 0 ? void 0 : (_prevState$orders2 = prevState.orders) === null || _prevState$orders2 === void 0 ? void 0 : _prevState$orders2.filter(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
        })), [_objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : (_prevState$orders3 = prevState.orders) === null || _prevState$orders3 === void 0 ? void 0 : _prevState$orders3.find(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        })), {}, {
          expired: true
        })])) : sortOrders(prevState === null || prevState === void 0 ? void 0 : prevState.orders)
      });
    });
  }, []);
  var handleUpdateAssignRequest = (0, _react.useCallback)(function (order) {
    var _order$order$id4, _order$order5;
    setlogisticOrders(function (prevState) {
      var _prevState$orders4, _prevState$orders5, _prevState$orders6;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        orders: prevState !== null && prevState !== void 0 && (_prevState$orders4 = prevState.orders) !== null && _prevState$orders4 !== void 0 && _prevState$orders4.some(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        }) ? sortOrders([].concat(_toConsumableArray(prevState === null || prevState === void 0 ? void 0 : (_prevState$orders5 = prevState.orders) === null || _prevState$orders5 === void 0 ? void 0 : _prevState$orders5.filter(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
        })), [_objectSpread(_objectSpread({}, prevState === null || prevState === void 0 ? void 0 : (_prevState$orders6 = prevState.orders) === null || _prevState$orders6 === void 0 ? void 0 : _prevState$orders6.find(function (_order) {
          return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
        })), order)])) : sortOrders(prevState === null || prevState === void 0 ? void 0 : prevState.orders)
      });
    });
    showToast(_ToastContext.ToastType.Info, t('SPECIFIC_LOGISTIC_ORDER_UPDATED', 'Your logisitc order number _NUMBER_ has updated').replace('_NUMBER_', (_order$order$id4 = order === null || order === void 0 ? void 0 : (_order$order5 = order.order) === null || _order$order5 === void 0 ? void 0 : _order$order5.id) !== null && _order$order$id4 !== void 0 ? _order$order$id4 : order.id), 1000);
  }, []);
  (0, _react.useEffect)(function () {
    if (isLogisticActivated) {
      socket.on('request_register', handleAddAssignRequest);
      socket.on('request_update', handleUpdateAssignRequest);
      socket.on('request_cancel', handleDeleteAssignRequest);
    }
    return function () {
      socket.off('request_register');
      socket.off('request_update');
      socket.off('request_cancel');
    };
  }, [socket, session, isLogisticActivated]);
  (0, _react.useEffect)(function () {
    var _session$user13, _session$user14, _session$user15, _session$user16;
    if (!session.user) return;
    socket.on('disconnect', function () {
      var _session$user9, _session$user10, _session$user11, _session$user12;
      var ordersRoom = (session === null || session === void 0 ? void 0 : (_session$user9 = session.user) === null || _session$user9 === void 0 ? void 0 : _session$user9.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user10 = session.user) === null || _session$user10 === void 0 ? void 0 : _session$user10.id);
      socket.join(ordersRoom);
      var requestsRoom = "requests_".concat(session === null || session === void 0 ? void 0 : (_session$user11 = session.user) === null || _session$user11 === void 0 ? void 0 : _session$user11.id);
      socket.join(requestsRoom);
      var groupsRoom = "ordergroups_".concat(session === null || session === void 0 ? void 0 : (_session$user12 = session.user) === null || _session$user12 === void 0 ? void 0 : _session$user12.id);
      socket.join(groupsRoom);
    });
    var ordersRoom = (session === null || session === void 0 ? void 0 : (_session$user13 = session.user) === null || _session$user13 === void 0 ? void 0 : _session$user13.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user14 = session.user) === null || _session$user14 === void 0 ? void 0 : _session$user14.id);
    var requestsRoom = "requests_".concat(session === null || session === void 0 ? void 0 : (_session$user15 = session.user) === null || _session$user15 === void 0 ? void 0 : _session$user15.id);
    var groupsRoom = "ordergroups_".concat(session === null || session === void 0 ? void 0 : (_session$user16 = session.user) === null || _session$user16 === void 0 ? void 0 : _session$user16.id);
    socket.join(ordersRoom);
    socket.join(requestsRoom);
    socket.join(groupsRoom);
    return function () {
      socket.leave(ordersRoom);
      socket.leave(requestsRoom);
      socket.leave(groupsRoom);
    };
  }, [socket, session]);
  (0, _react.useEffect)(function () {
    var request = requestsState === null || requestsState === void 0 ? void 0 : requestsState.orders;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState === null || requestsState === void 0 ? void 0 : requestsState.orders]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      var orderFound = null;
      for (var i = 0; i < ordersStatusArray.length; i++) {
        var _ordersGroup$status5, _ordersGroup$status5$;
        var status = ordersStatusArray[i];
        orderFound = (_ordersGroup$status5 = ordersGroup[status]) === null || _ordersGroup$status5 === void 0 ? void 0 : (_ordersGroup$status5$ = _ordersGroup$status5.orders) === null || _ordersGroup$status5$ === void 0 ? void 0 : _ordersGroup$status5$.find(function (_order) {
          return _order.id === review.order_id;
        });
        if (orderFound) break;
      }
      if (orderFound) {
        var _getStatusById5, _orderFound3;
        var newOrderStatus = (_getStatusById5 = getStatusById((_orderFound3 = orderFound) === null || _orderFound3 === void 0 ? void 0 : _orderFound3.status)) !== null && _getStatusById5 !== void 0 ? _getStatusById5 : '';
        orderFound.user_review = review;
        actionOrderToTab(orderFound, newOrderStatus, 'update');
      }
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [ordersGroup]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentFilters: currentFilters,
    setCurrentFilters: setCurrentFilters,
    currentTabSelected: currentTabSelected,
    setCurrentTabSelected: setCurrentTabSelected,
    ordersGroup: ordersGroup,
    setOrdersGroup: setOrdersGroup,
    logisticOrders: logisticOrders,
    messages: messages,
    ordersDeleted: ordersDeleted,
    setOrdersDeleted: setOrdersDeleted,
    setMessages: setMessages,
    loadOrders: loadOrders,
    loadLogisticOrders: loadLogisticOrders,
    deleteOrders: deleteOrders,
    loadMessages: loadMessages,
    loadMoreOrders: loadMoreOrders,
    handleClickOrder: handleClickOrder,
    handleClickLogisticOrder: handleClickLogisticOrder,
    filtered: filtered,
    onFiltered: setFiltered,
    handleChangeOrderStatus: handleChangeOrderStatus,
    handleSendCustomerReview: handleSendCustomerReview,
    ordersFormatted: formatOrdersGrouped((_ordersGroup$currentT20 = ordersGroup[currentTabSelected]) === null || _ordersGroup$currentT20 === void 0 ? void 0 : _ordersGroup$currentT20.orders),
    isLogisticActivated: isLogisticActivated
  })));
};
exports.OrderListGroups = OrderListGroups;
OrderListGroups.defaultProps = {
  orderBy: '-id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};