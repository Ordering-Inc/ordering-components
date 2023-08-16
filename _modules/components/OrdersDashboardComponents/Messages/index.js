"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ConfigContext = require("../../../contexts/ConfigContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _UtilsContext = require("../../../contexts/UtilsContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var Messages = function Messages(props) {
  var _configState$configs;
  var UIComponent = props.UIComponent,
    orderId = props.orderId,
    customHandleSend = props.customHandleSend,
    orderMessages = props.messages,
    setOrderMessages = props.setMessages,
    asDashboard = props.asDashboard,
    order = props.order,
    handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getOrderState = _useUtils2[0].getOrderState;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var accessToken = props.accessToken || token;
  var _useState = (0, _react.useState)({
      business: true,
      administrator: true,
      driver: true,
      customer: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    canRead = _useState2[0],
    setCanRead = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messages = _useState6[0],
    setMessages = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    sendMessage = _useState8[0],
    setSendMessages = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    readMessages = _useState10[0],
    setReadMessages = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    image = _useState12[0],
    setImage = _useState12[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var getStaticMapByLocation = function getStaticMapByLocation(location, size) {
    if (!size) {
      size = '250x100';
    }
    var url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + location.lat + ',' + location.lng + '&zoom=14&size=' + size + '&markers=color:red%7C' + location.lat + ',' + location.lng + '&key=' + googleMapsApiKey;
    return url;
  };
  var getLogisticTagStatus = function getLogisticTagStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In Progress');
      case 2:
        return t('IN_QUEUE', 'In Queue');
      case 3:
        return t('EXPIRED', 'Logistic expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return status;
    }
  };
  var getVehicleSmmary = function getVehicleSmmary(vehicle) {
    return (vehicle === null || vehicle === void 0 ? void 0 : vehicle.type) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.model) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.car_registration) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.color);
  };
  var getHistoryComment = function getHistoryComment(message) {
    var _message$change;
    var comment = '';
    var changeAttribute = message === null || message === void 0 || (_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute;
    if (changeAttribute === 'distance') {
      comment = t('THE_DRIVER_IS_CLOSE') + ' <b>(' + message.driver.name + (message.driver.lastname ? ' ' + message.driver.lastname : '') + ')</b>';
    } else if (changeAttribute === 'status') {
      var _message$change2;
      if (message.change.new === 8 && message.change.estimated) {
        var estimatedDelivery = message.change.estimated;
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_DELIVERY_TIME').replace('_min_', estimatedDelivery);
      } else if (message.change.new === 7 && message.change.estimated) {
        var estimatedPreparation = message.change.estimated;
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_PREPARATION_TIME').replace('_min_', estimatedPreparation);
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>');
      }
      if (message !== null && message !== void 0 && (_message$change2 = message.change) !== null && _message$change2 !== void 0 && _message$change2.comment) {
        comment += '<br>' + '<b>' + t('COMMENT', '') + '</b>: ' + message.change.comment + '.';
      }
    } else if (changeAttribute === 'driver_id') {
      if (message.driver) {
        comment = t('DRIVER_ASSIGNED_AS_DRIVER').replace('_driver_', '<b>' + message.driver.name + ' ' + (message.driver.lastname ? message.driver.lastname : '') + '</b>');
      } else {
        comment = t('DRIVER_UNASSIGNED');
      }
    } else if (['prepared_in', 'delivered_in', 'delivery_datetime'].includes(changeAttribute)) {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + (message.change.old || 0) + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
    } else if (changeAttribute === 'logistic_status') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t('LOGISTIC_STATUS', 'logistic status') + '</b>').replace('_from_', '<b>' + getLogisticTagStatus(parseInt(message.change.old, 10)) + '</b>').replace('_to_', '<b>' + getLogisticTagStatus(parseInt(message.change.new, 10)) + '</b>');
    } else if (changeAttribute === 'vehicle') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getVehicleSmmary(message.change.old) + '</b>').replace('_to_', '<b>' + getVehicleSmmary(message.change.new) + '</b>');
    } else if (changeAttribute === 'reject_reason') {
      comment = t('ORDER_REJECT_REASON_IS', 'Order <b>reject reason</b> is _reject_reason_.').replace('_reject_reason_', '<b>' + t("REJECT_REASON_".concat(message.change.new.toUpperCase())) + '</b>');
    } else if (changeAttribute !== 'comment') {
      if (message.change.old) {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + message.change.old + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
      }
    }
    if (['status', 'reject_reason'].includes(changeAttribute)) {
      if (user.level === 0 || user.level === 2) {
        comment += '<br>-';
        if (message.app_id) comment += '<br><strong>' + t('APP_ID') + ':</strong> ' + message.app_id;
        comment += '<br><strong>' + t('AUTHOR') + ':</strong> ' + (message.author ? message.author.name + (message.author.lastname ? ' ' + message.author.lastname : '') : t('GUEST_USER'));
        if (message.user_agent) comment += '<br><strong>' + t('USER_AGENT') + ':</strong> ' + message.user_agent;
        if (message.location) comment += '<br><strong>' + t('LOCATION') + ':</strong> <img src="' + getStaticMapByLocation(message.location, '250x100') + '" />';
        comment += '<br><strong>' + t('IP') + ':</strong> ' + message.ip;
      }
    }
    return comment;
  };

  /**
   * Method to send message
   */
  var handleSend = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _canRead, body, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!customHandleSend) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", customHandleSend(message));
          case 2:
            _context.prev = 2;
            setSendMessages({
              loading: true,
              error: null
            });
            _canRead = [];
            if (canRead.customer) {
              _canRead.push(3);
            }
            if (canRead.administrator) {
              _canRead.push(0);
            }
            if (canRead.business) {
              _canRead.push(2);
            }
            if (canRead.driver) {
              _canRead.push(4);
            }
            body = {
              comment: message,
              type: 2,
              can_see: _canRead.join(',')
            };
            if (image) {
              body.type = 3;
              body.file = image;
            }
            _context.next = 13;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify(body)
            });
          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();
          case 16:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              if (setOrderMessages && orderMessages) {
                setOrderMessages(_objectSpread(_objectSpread({}, orderMessages), {}, {
                  messages: [].concat(_toConsumableArray(orderMessages.messages), [result])
                }));
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  messages: [].concat(_toConsumableArray(messages.messages), [result])
                }));
              }
            }
            setSendMessages({
              loading: false,
              error: error ? result : null
            });
            _context.next = 26;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](2);
            setSendMessages({
              loading: false,
              error: [_context.t0.Messages]
            });
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 23]]);
    }));
    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var functionFetch, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              messages: [],
              loading: true
            }));
            functionFetch = asDashboard ? "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat(orderId, "/messages");
            _context2.next = 5;
            return fetch(functionFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
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
   * Method to Load message for first time
   * @param {number} messageId order message Id
   */
  var handleReadMessages = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(messageId) {
      var functionFetch, response, _yield$response$json3, error, result, _messages;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(orderMessages && setOrderMessages)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
              loading: true
            }));
            functionFetch = "".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read?order_id=").concat(orderId, "&order_message_id=").concat(messageId);
            _context3.next = 7;
            return fetch(functionFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 7:
            response = _context3.sent;
            _context3.next = 10;
            return response.json();
          case 10:
            _yield$response$json3 = _context3.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              setReadMessages({
                messages: result,
                loading: false,
                error: null
              });
              if (messages.messages.length > 0) {
                _messages = messages.messages.filter(function (message) {
                  if (message.id === messageId) {
                    message.read = true;
                  }
                  return true;
                });
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  messages: _messages
                }));
              }
              handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(null);
              handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(orderId);
            } else {
              setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.next = 19;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](2);
            setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
              loading: false,
              error: [_context3.t0.Messages]
            }));
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 16]]);
    }));
    return function handleReadMessages(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (orderMessages && setOrderMessages) return;
    loadMessages();
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (messages.loading || orderMessages && setOrderMessages) return;
    var handleNewMessage = function handleNewMessage(message) {
      var _message$order;
      if (((_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id) === orderId) {
        var found = messages.messages.find(function (_message) {
          return _message.id === message.id;
        });
        if (!found) {
          setMessages(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              messages: [].concat(_toConsumableArray(prevState.messages), [message])
            });
          });
        }
      }
    };
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, order === null || order === void 0 ? void 0 : order.status]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    if (asDashboard) {
      socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
    } else {
      socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
    }
    socket.socket.on('connect', function () {
      if (asDashboard) {
        socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    });
    return function () {
      if (asDashboard) {
        socket.leave("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.leave("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    messages: messages,
    image: image,
    canRead: canRead,
    handleSend: handleSend,
    message: message,
    handleReadMessages: handleReadMessages,
    setMessage: setMessage,
    setCanRead: setCanRead,
    sendMessage: sendMessage,
    setImage: setImage,
    getHistoryComment: getHistoryComment
  })));
};
exports.Messages = Messages;
Messages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Custom Send messageS
   * @param {object} message Message to send
   */
  handleClickSetDefault: _propTypes.default.func,
  /**
   * @param {object} message
   * handleCustomClick, function to get click event and return message without default behavior
   */
  customHandleSend: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Messages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};