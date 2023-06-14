"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardOrdersList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
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
var DashboardOrdersList = function DashboardOrdersList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    orders = props.orders,
    orderIds = props.orderIds,
    deletedOrderId = props.deletedOrderId,
    orderStatus = props.orderStatus,
    orderBy = props.orderBy,
    orderDirection = props.orderDirection,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    filterValues = props.filterValues,
    searchValue = props.searchValue,
    isSearchByOrderId = props.isSearchByOrderId,
    isSearchByCustomerEmail = props.isSearchByCustomerEmail,
    isSearchByCustomerPhone = props.isSearchByCustomerPhone,
    orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)({
      loading: !orders,
      error: null,
      orders: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderList = _useState2[0],
    setOrderList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pagination = _useState4[0],
    setPagination = _useState4[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    actionStatus = _useState6[0],
    setActionStatus = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    registerOrderId = _useState8[0],
    setRegisterOrderId = _useState8[1];

  /**
   * Reset registerOrderId
   */
  var handleResetNotification = function handleResetNotification() {
    setRegisterOrderId(null);
  };
  var sortOrdersArray = function sortOrdersArray(option, array) {
    if (option === 'id') {
      if (orderDirection === 'desc') {
        return array.sort(function (a, b) {
          return b.id - a.id;
        });
      }
      if (orderDirection === 'asc') {
        return array.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    }
    if (option === 'last_direct_message_at') {
      return array.sort(function (a, b) {
        return new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at);
      });
    }
    return array;
  };

  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(order) {
      var source, _yield$ordering$setAc, content, _orders2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            source = {};
            requestsState.updateOrders = source;
            _context.next = 6;
            return ordering.setAccessToken(accessToken).orders(order === null || order === void 0 ? void 0 : order.id).save({
              status: order.newStatus
            }, {
              cancelToken: source
            });
          case 6:
            _yield$ordering$setAc = _context.sent;
            content = _yield$ordering$setAc.content;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              _orders2 = orderList.orders.filter(function (_order) {
                return (_order === null || _order === void 0 ? void 0 : _order.id) !== (order === null || order === void 0 ? void 0 : order.id);
              });
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                orders: _orders2
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setActionStatus({
              loading: false,
              error: [_context.t0.message]
            });
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function handleUpdateOrderStatus(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get orders from API
   * @param {number} page page number
   */
  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(page) {
      var options, where, conditions, checkInnerContain, checkOutContain, searchConditions, filterConditons, source, functionFetch;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            options = null;
            where = [];
            conditions = [];
            if (!asDashboard) {
              options = {
                query: {
                  orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
                  page: page,
                  page_size: paginationSettings.pageSize
                }
              };
            } else {
              options = {
                query: {
                  orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy
                }
              };
            }
            if (orderIds) {
              conditions.push({
                attribute: 'id',
                value: orderIds
              });
            }
            if (Object.keys(filterValues).length === 0) {
              if (orderStatus) {
                conditions.push({
                  attribute: 'status',
                  value: orderStatus
                });
              }
            } else {
              if (filterValues.statuses.length > 0) {
                checkInnerContain = filterValues.statuses.every(function (el) {
                  return orderStatus.indexOf(el) !== -1;
                });
                checkOutContain = orderStatus.every(function (el) {
                  return filterValues.statuses.indexOf(el) !== -1;
                });
                if (checkInnerContain) conditions.push({
                  attribute: 'status',
                  value: filterValues.statuses
                });
                if (checkOutContain) {
                  if (orderStatus) {
                    conditions.push({
                      attribute: 'status',
                      value: orderStatus
                    });
                  }
                }
              } else {
                if (orderStatus) {
                  conditions.push({
                    attribute: 'status',
                    value: orderStatus
                  });
                }
              }
            }
            if (searchValue) {
              searchConditions = [];
              if (isSearchByOrderId) {
                searchConditions.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByCustomerEmail) {
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
              }
              if (isSearchByCustomerPhone) {
                searchConditions.push({
                  attribute: 'customer',
                  conditions: [{
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  }]
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (Object.keys(filterValues).length) {
              filterConditons = [];
              if (filterValues.deliveryFromDatetime !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '>=',
                    value: encodeURI(filterValues.deliveryFromDatetime)
                  }
                });
              }
              if (filterValues.deliveryEndDatetime !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '<=',
                    value: filterValues.deliveryEndDatetime
                  }
                });
              }
              if (filterValues.businessIds.length !== 0) {
                filterConditons.push({
                  attribute: 'business_id',
                  value: filterValues.businessIds
                });
              }
              if (filterValues.driverIds.length !== 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues.driverIds
                });
              }
              if (filterValues.deliveryTypes.length !== 0) {
                filterConditons.push({
                  attribute: 'delivery_type',
                  value: filterValues.deliveryTypes
                });
              }
              if (filterValues.paymethodIds.length !== 0) {
                filterConditons.push({
                  attribute: 'paymethod_id',
                  value: filterValues.paymethodIds
                });
              }
              if (filterConditons.length) {
                conditions.push({
                  conector: 'AND',
                  conditions: filterConditons
                });
              }
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            if (propsToFetch) {
              functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where) : ordering.setAccessToken(accessToken).orders().select(propsToFetch).where(where);
            } else {
              functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard().where(where) : ordering.setAccessToken(accessToken).orders().where(where);
            }
            _context2.next = 15;
            return functionFetch.get(options);
          case 15:
            return _context2.abrupt("return", _context2.sent);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getOrders(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */
  var isFilteredOrder = function isFilteredOrder(order) {
    var filterCheck = true;
    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      if (!filterValues.driverIds.includes(order.driver_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false;
      }
    }
    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false;
      }
    }
    if (filterValues.statuses !== undefined && filterValues.statuses.length > 0) {
      if (!filterValues.statuses.includes(parseInt(order.status))) {
        filterCheck = false;
      }
    }
    return filterCheck;
  };
  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (session.token) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context3.next = 6;
            return getOrders(pagination.currentPage + 1);
          case 6:
            response = _context3.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? [] : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            if (_context3.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));
            }
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 11]]);
    }));
    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Listening order id to updatea for unread_count parameter
   */
  (0, _react.useEffect)(function () {
    if (orderIdForUnreadCountUpdate === null || orderList.orders.length === 0) return;
    var _orders = orderList.orders.filter(function (order) {
      if ((order === null || order === void 0 ? void 0 : order.id) === orderIdForUnreadCountUpdate) {
        order.unread_count = 0;
        order.unread_general_count = 0;
        order.unread_direct_count = 0;
      }
      return true;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
  }, [orderIdForUnreadCountUpdate]);
  /**
   * Listening orderBy value change
   */
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    var _orders = sortOrdersArray(orderBy, orderList.orders);
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
  }, [orderBy, orderList.orders]);

  /**
   * Listening deleted order
   */
  (0, _react.useEffect)(function () {
    if (deletedOrderId === null) return;
    var orders = orderList.orders.filter(function (_order) {
      return (_order === null || _order === void 0 ? void 0 : _order.id) !== deletedOrderId;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: orders
    }));
  }, [deletedOrderId]);

  /**
   * Listening search value change
   */
  (0, _react.useEffect)(function () {
    if (searchValue === null) return;
    loadOrders();
  }, [searchValue]);

  /**
   * Listening sesssion and filter values change
   */
  (0, _react.useEffect)(function () {
    if (orders) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders
      }));
    } else {
      var checkInnerContain = false;
      var checkOutContain = false;
      if (Object.keys(filterValues).length > 0) {
        checkInnerContain = filterValues.statuses.every(function (el) {
          return orderStatus.indexOf(el) !== -1;
        });
        checkOutContain = orderStatus.every(function (el) {
          return filterValues.statuses.indexOf(el) !== -1;
        });
        if (!checkInnerContain && !checkOutContain) {
          setOrderList({
            loading: false,
            orders: [],
            error: null
          });
          return;
        }
      }
      loadOrders();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [session, filterValues, orders]);
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var found = orderList.orders.find(function (_order) {
        return (_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id);
      });
      var orders = [];
      if (found) {
        orders = orderList.orders.filter(function (_order) {
          var valid = true;
          if ((_order === null || _order === void 0 ? void 0 : _order.id) === (order === null || order === void 0 ? void 0 : order.id)) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
            valid = (orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status))) && isFilteredOrder(order);
            if (!valid) {
              pagination.total--;
              setPagination(_objectSpread({}, pagination));
            }
          }
          return valid;
        });
        var _orders = sortOrdersArray(orderBy, orders);
        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _orders
        }));
      } else {
        if (isFilteredOrder(order)) {
          var isOrderStatus = orderStatus.includes(parseInt(order.status));
          if (isOrderStatus) {
            orders = [].concat(_toConsumableArray(orderList.orders), [order]);
            var _orders3 = sortOrdersArray(orderBy, orders);
            pagination.total++;
            setPagination(_objectSpread({}, pagination));
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              orders: _orders3
            }));
          }
        }
      }
    };
    var handleRegisterOrder = function handleRegisterOrder(_order) {
      setRegisterOrderId(_order === null || _order === void 0 ? void 0 : _order.id);
      var order = _objectSpread(_objectSpread({}, _order), {}, {
        status: 0
      });
      var orders = [];
      if (orderStatus.includes(0) && isFilteredOrder(_order)) {
        orders = [order].concat(_toConsumableArray(orderList.orders));
        var _orders = sortOrdersArray(orderBy, orders);
        pagination.total++;
        setPagination(_objectSpread({}, pagination));
        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _orders
        }));
      }
    };
    var handleNewMessage = function handleNewMessage(message) {
      if (orderList.orders.length === 0) return;
      var found = orderList.orders.find(function (order) {
        var _message$order;
        return (order === null || order === void 0 ? void 0 : order.id) === ((_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id);
      });
      if (found) {
        var _orders = orderList.orders.filter(function (order) {
          var _message$order2;
          if ((order === null || order === void 0 ? void 0 : order.id) === ((_message$order2 = message.order) === null || _message$order2 === void 0 ? void 0 : _message$order2.id)) {
            if (order.last_message_at !== message.created_at) {
              if (message.type === 1) {
                order.last_general_message_at = message.created_at;
                if (message.author.level !== 0) {
                  order.unread_general_count = order.unread_general_count + 1;
                }
              } else {
                order.last_direct_message_at = message.created_at;
                if (message.author.level !== 0) {
                  order.unread_direct_count = order.unread_direct_count + 1;
                }
              }
              order.last_message_at = message.created_at;
              if (message.author.level !== 0) {
                order.unread_count = order.unread_count + 1;
              }
            }
          }
          return true;
        });
        var _sortedOrders = sortOrdersArray(orderBy, _orders);
        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _sortedOrders
        }));
      }
    };
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
      socket.off('message', handleNewMessage);
    };
  }, [orderList.orders, pagination, orderBy, socket]);
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context4.prev = 1;
            _context4.next = 4;
            return getOrders(pagination.currentPage + 1);
          case 4:
            response = _context4.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            if (_context4.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 9]]);
    }));
    return function loadMoreOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  var goToPage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context5.prev = 1;
            _context5.next = 4;
            return getOrders(page);
          case 4:
            response = _context5.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? [] : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context5.next = 12;
            break;
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            if (_context5.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 9]]);
    }));
    return function goToPage(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderList: orderList,
    pagination: pagination,
    registerOrderId: registerOrderId,
    loadMoreOrders: loadMoreOrders,
    goToPage: goToPage,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    handleResetNotification: handleResetNotification
  })));
};
exports.DashboardOrdersList = DashboardOrdersList;
DashboardOrdersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),
  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),
  /**
   * id of order to update unread_count parameter
   */
  orderIdForUnreadCountUpdate: _propTypes.default.number,
  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),
  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,
  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),
  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DashboardOrdersList.defaultProps = {
  orderBy: 'id',
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