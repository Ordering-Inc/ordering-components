"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderVerticalList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _OrderContext = require("../../contexts/OrderContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
var OrderVerticalList = function OrderVerticalList(props) {
  var _orderGroupStatusCust, _orderGroupStatusCust2, _orderGroupStatusCust3, _orderGroupStatusCust4, _paginationSettings$p;
  var UIComponent = props.UIComponent,
    orderBy = props.orderBy,
    businessId = props.businessId,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    orderGroupStatusCustom = props.orderGroupStatusCustom,
    onNavigationRedirect = props.onNavigationRedirect;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    reorder = _useOrder2[1].reorder;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var ordersStatusArray = ['upcoming', 'active', 'past', 'all'];
  var ordersGroupStatus = {
    upcoming: (_orderGroupStatusCust = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.upcoming) !== null && _orderGroupStatusCust !== void 0 ? _orderGroupStatusCust : [13],
    active: (_orderGroupStatusCust2 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.active) !== null && _orderGroupStatusCust2 !== void 0 ? _orderGroupStatusCust2 : [0, 3, 4, 7, 8, 9, 14, 15, 18, 19, 20, 21],
    past: (_orderGroupStatusCust3 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.past) !== null && _orderGroupStatusCust3 !== void 0 ? _orderGroupStatusCust3 : [1, 2, 5, 6, 10, 11, 12, 16, 17],
    all: (_orderGroupStatusCust4 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.all) !== null && _orderGroupStatusCust4 !== void 0 ? _orderGroupStatusCust4 : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  };
  var orderObjDefault = {
    loading: true,
    error: null,
    pagination: {
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    reorderLoading = _useState2[0],
    setReorderLoading = _useState2[1];
  var _useState3 = (0, _react.useState)(_objectSpread(_objectSpread({}, orderObjDefault), {}, {
      all: {
        orders: []
      },
      upcoming: {
        orders: []
      },
      active: {
        orders: []
      },
      past: {
        orders: []
      }
    })),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersGroup = _useState4[0],
    setOrdersGroup = _useState4[1];
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var page, _ref$pageSize, pageSize, orderStatus, options, _ordersGroup, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            page = _ref.page, _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? paginationSettings.pageSize : _ref$pageSize, orderStatus = _ref.orderStatus;
            options = {
              query: {
                orderBy: orderBy,
                page: page,
                page_size: pageSize
              }
            };
            options.query.where = [];
            if (orderStatus) {
              options.query.where.push({
                attribute: 'status',
                value: orderStatus
              });
              options.query.where.push({
                attribute: 'id',
                value: {
                  condition: '!=',
                  value: (_ordersGroup = ordersGroup) === null || _ordersGroup === void 0 || (_ordersGroup = _ordersGroup.all) === null || _ordersGroup === void 0 || (_ordersGroup = _ordersGroup.orders) === null || _ordersGroup === void 0 ? void 0 : _ordersGroup.map(function (o) {
                    return o.id;
                  })
                }
              });
            }
            if (businessId) {
              options.query.where.push({
                attribute: 'business_id',
                value: businessId
              });
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard() : ordering.setAccessToken(accessToken).orders();
            _context.next = 11;
            return functionFetch.get(options);
          case 11:
            return _context.abrupt("return", _context.sent);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _ordersGroup$paginati;
      var _ref4,
        newFetch,
        options,
        pageSize,
        _yield$getOrders,
        _yield$getOrders$cont,
        error,
        result,
        pagination,
        tabOptions,
        _err$message,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, newFetch = _ref4.newFetch;
            if (!(!newFetch && ordersGroup.pagination.currentPage === ((_ordersGroup$paginati = ordersGroup.pagination) === null || _ordersGroup$paginati === void 0 ? void 0 : _ordersGroup$paginati.totalPages) && ordersGroup.pagination.total !== null)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            if (newFetch) {
              options = {};
              ordersStatusArray.map(function (tab) {
                options[tab] = {
                  orders: []
                };
              });
              ordersGroup = _objectSpread(_objectSpread({}, orderObjDefault), options);
            }
            pageSize = paginationSettings.pageSize;
            _context2.prev = 5;
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: true
            }));
            _context2.next = 9;
            return getOrders({
              page: 1,
              pageSize: pageSize,
              orderStatus: ordersGroupStatus.all,
              newFetch: newFetch
            });
          case 9:
            _yield$getOrders = _context2.sent;
            _yield$getOrders$cont = _yield$getOrders.content;
            error = _yield$getOrders$cont.error;
            result = _yield$getOrders$cont.result;
            pagination = _yield$getOrders$cont.pagination;
            tabOptions = {};
            ordersStatusArray.map(function (tab) {
              tabOptions[tab] = {
                orders: error ? newFetch ? [] : sortOrders(ordersGroup[tab].orders) : newFetch ? sortOrders(result.filter(function (order) {
                  return ordersGroupStatus[tab].includes(order.status);
                })) : sortOrders(ordersGroup[tab].orders.concat(result.filter(function (order) {
                  return ordersGroupStatus[tab].includes(order.status);
                })))
              };
            });
            setOrdersGroup(_objectSpread(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: false,
              error: error ? result : null
            }, tabOptions), {}, {
              pagination: _objectSpread(_objectSpread({}, ordersGroup.pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              })
            }));
            _context2.next = 22;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](5);
            if (_context2.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
                loading: false,
                error: [(_err$message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']
              }));
            }
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 19]]);
    }));
    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$getOrders2, _yield$getOrders2$con, error, result, pagination, tabOptions, _err$message2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: true
            }));
            _context3.next = 4;
            return getOrders({
              page: ordersGroup.pagination.currentPage + 1,
              orderStatus: ordersGroupStatus.all
            });
          case 4:
            _yield$getOrders2 = _context3.sent;
            _yield$getOrders2$con = _yield$getOrders2.content;
            error = _yield$getOrders2$con.error;
            result = _yield$getOrders2$con.result;
            pagination = _yield$getOrders2$con.pagination;
            tabOptions = {};
            ordersStatusArray.map(function (tab) {
              tabOptions[tab] = {
                orders: error ? sortOrders(ordersGroup[tab].orders) : sortOrders(ordersGroup[tab].orders.concat(result.filter(function (order) {
                  return ordersGroupStatus[tab].includes(order.status);
                })))
              };
            });
            setOrdersGroup(_objectSpread(_objectSpread(_objectSpread({}, ordersGroup), {}, {
              loading: false,
              error: error ? result : null
            }, tabOptions), {}, {
              pagination: !error ? _objectSpread(_objectSpread({}, ordersGroup.pagination), {}, {
                currentPage: pagination.current_page,
                pageSize: pagination.page_size,
                totalPages: pagination.total_pages,
                total: pagination.total,
                from: pagination.from,
                to: pagination.to
              }) : ordersGroup.pagination
            }));
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            if (_context3.t0.constructor.name !== 'Cancel') {
              setOrdersGroup(_objectSpread(_objectSpread({}, ordersGroup), {}, {
                loading: false,
                error: [(_err$message2 = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']
              }));
            }
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 14]]);
    }));
    return function loadMoreOrders() {
      return _ref5.apply(this, arguments);
    };
  }();
  var sortOrders = function sortOrders(orders) {
    var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    var ordersSorted = orders.sort(function (a, b) {
      if (sortBy === 'desc') {
        return b.id - a.id;
      }
      return a.id - b.id;
    });
    return ordersSorted;
  };
  var getStatusById = function getStatusById(id) {
    var _orderGroupStatusCust5, _orderGroupStatusCust6;
    if (!id && id !== 0) return;
    var upcoming = (_orderGroupStatusCust5 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.upcoming) !== null && _orderGroupStatusCust5 !== void 0 ? _orderGroupStatusCust5 : [13];
    var active = (_orderGroupStatusCust6 = orderGroupStatusCustom === null || orderGroupStatusCustom === void 0 ? void 0 : orderGroupStatusCustom.active) !== null && _orderGroupStatusCust6 !== void 0 ? _orderGroupStatusCust6 : [0, 3, 4, 7, 8, 9, 14, 15, 18, 19, 20, 21];
    var status = upcoming.includes(id) ? 'upcoming' : active.includes(id) ? 'active' : 'past';
    return status;
  };
  var actionOrderToTab = function actionOrderToTab(orderAux, status, type) {
    var orderList = ordersGroup[status].orders;
    var orders;
    var order = _objectSpread(_objectSpread({}, orderAux), {}, {
      showNotification: true
    });
    if (type === 'update') {
      var indexToUpdate = orderList.findIndex(function (o) {
        return o.id === order.id;
      });
      orderList[indexToUpdate] = order;
      orders = orderList;
    } else {
      orders = type === 'add' ? [order].concat(_toConsumableArray(orderList)) : orderList.filter(function (_order) {
        return _order.id !== order.id;
      });
    }
    ordersGroup[status].orders = sortOrders(orders);
    if (type !== 'update') {
      ordersGroup.pagination = _objectSpread(_objectSpread({}, ordersGroup.pagination), {}, {
        total: ordersGroup.pagination.total + (type === 'add' ? 1 : -1)
      });
    }
  };
  var handleReorder = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(orderId) {
      var _yield$reorder, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setReorderLoading(true);
            _context4.prev = 1;
            _context4.next = 4;
            return reorder(orderId);
          case 4:
            _yield$reorder = _context4.sent;
            error = _yield$reorder.error;
            result = _yield$reorder.result;
            if (error) {
              _context4.next = 11;
              break;
            }
            onNavigationRedirect && onNavigationRedirect('CheckoutNavigator', {
              cartUuid: result.uuid
            });
            setReorderLoading(false);
            return _context4.abrupt("return");
          case 11:
            setReorderLoading(false);
            _context4.next = 18;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            showToast(_ToastContext.ToastType.Error, t('ERROR', _context4.t0.message));
            setReorderLoading(false);
          case 18:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 14]]);
    }));
    return function handleReorder(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    loadOrders({
      newFetch: ordersGroup.pagination.total === null
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (ordersGroup.loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderFound, _order$driver, _session$user;
      events.emit('order_updated', order);
      var orderFound = null;
      for (var i = 0; i < ordersStatusArray.length; i++) {
        var status = ordersStatusArray[i];
        orderFound = ordersGroup[status].orders.find(function (_order) {
          return _order.id === order.id;
        });
        if (orderFound) break;
      }
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id), 1000);
      if (!orderFound) {
        if (!(order !== null && order !== void 0 && order.products) || !(order !== null && order !== void 0 && order.summary) || typeof (order === null || order === void 0 ? void 0 : order.status) !== 'number' || !(order !== null && order !== void 0 && order.customer) || !(order !== null && order !== void 0 && order.business) || !(order !== null && order !== void 0 && order.paymethod)) {
          return;
        }
        delete order.total;
        delete order.subtotal;
        actionOrderToTab(order, getStatusById(order === null || order === void 0 ? void 0 : order.status), 'add');
        return;
      }
      if (orderFound.id === order.id && ((_orderFound = orderFound) === null || _orderFound === void 0 || (_orderFound = _orderFound.driver) === null || _orderFound === void 0 ? void 0 : _orderFound.id) !== (order === null || order === void 0 || (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) && (session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 4) {
        actionOrderToTab(orderFound, getStatusById(orderFound.status), 'remove');
      }
      if (orderFound.id === order.id) {
        delete order.total;
        delete order.subtotal;
      }
      if (!(order !== null && order !== void 0 && order.status) && (order === null || order === void 0 ? void 0 : order.status) !== 0) {
        Object.assign(orderFound, order);
      } else {
        var _getStatusById, _getStatusById2, _orderFound2;
        var newOrderStatus = (_getStatusById = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById !== void 0 ? _getStatusById : '';
        var currentOrderStatus = (_getStatusById2 = getStatusById((_orderFound2 = orderFound) === null || _orderFound2 === void 0 ? void 0 : _orderFound2.status)) !== null && _getStatusById2 !== void 0 ? _getStatusById2 : '';
        Object.assign(orderFound, order);
        if (newOrderStatus !== currentOrderStatus) {
          var _ordersGroup$paginati2;
          actionOrderToTab(orderFound, currentOrderStatus, 'remove');
          var total = (_ordersGroup$paginati2 = ordersGroup.pagination.total) !== null && _ordersGroup$paginati2 !== void 0 ? _ordersGroup$paginati2 : null;
          if (total !== null) {
            actionOrderToTab(orderFound, newOrderStatus, 'add');
          }
        } else {
          actionOrderToTab(orderFound, newOrderStatus, 'update');
        }
      }
    };
    var handleAddNewOrder = function handleAddNewOrder(order) {
      var _getStatusById3;
      events.emit('order_added', order);
      showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id), 1000);
      var status = (_getStatusById3 = getStatusById(order === null || order === void 0 ? void 0 : order.status)) !== null && _getStatusById3 !== void 0 ? _getStatusById3 : '';
      actionOrderToTab(order, status, 'add');
      actionOrderToTab(order, 'all', 'add');
    };
    socket.on('orders_register', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      socket.off('orders_register', handleAddNewOrder);
      socket.off('update_order', handleUpdateOrder);
    };
  }, [ordersGroup, socket, session]);
  (0, _react.useEffect)(function () {
    var _session$user4, _session$user5;
    if (!session.user) return;
    socket.on('disconnect', function () {
      var _session$user2, _session$user3;
      var ordersRoom = (session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
      socket.join(ordersRoom);
    });
    var ordersRoom = (session === null || session === void 0 || (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 || (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id);
    socket.join(ordersRoom);
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, session]);
  (0, _react.useEffect)(function () {
    var request = requestsState.orders;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.orders]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    ordersGroup: ordersGroup,
    reorderLoading: reorderLoading,
    setOrdersGroup: setOrdersGroup,
    loadOrders: loadOrders,
    loadMoreOrders: loadMoreOrders,
    handleReorder: handleReorder
  })));
};
exports.OrderVerticalList = OrderVerticalList;
OrderVerticalList.defaultProps = {
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