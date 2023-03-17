"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../../contexts/SessionContext");

var _ApiContext = require("../../../contexts/ApiContext");

var _WebsocketContext = require("../../../contexts/WebsocketContext");

var _ToastContext = require("../../../contexts/ToastContext");

var _LanguageContext = require("../../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DriversList = function DriversList(props) {
  var drivers = props.drivers,
      UIComponent = props.UIComponent,
      propsToFetch = props.propsToFetch,
      isSearchByName = props.isSearchByName,
      isSearchByCellphone = props.isSearchByCellphone,
      asDashboard = props.asDashboard,
      isOrderDrivers = props.isOrderDrivers,
      orderId = props.orderId;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var requestsState = {};

  var _useState = (0, _react.useState)({
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      driverActionStatus = _useState2[0],
      setDriverActionStatus = _useState2[1];
  /**
   * Get session
   */


  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];
  /**
   * Array to save drivers
   */


  var _useState3 = (0, _react.useState)({
    drivers: [],
    loading: true,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      driversList = _useState4[0],
      setDriversList = _useState4[1];
  /**
   * Array to save online drivers
   */


  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      onlineDrivers = _useState6[0],
      setOnlineDrivers = _useState6[1];
  /**
   * Array to save offline drivers
   */


  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      offlineDrivers = _useState8[0],
      setOfflineDrivers = _useState8[1];
  /**
   * state for drivers online / offline filter
   */


  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      driversIsOnline = _useState10[0],
      setDriversIsOnline = _useState10[1];
  /**
   * state for drivers busy / not busy sub filter
   */


  var _useState11 = (0, _react.useState)({
    busy: true,
    notBusy: true
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      driversSubfilter = _useState12[0],
      setDriversSubfilter = _useState12[1];
  /**
   * search value
   */


  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      searchValue = _useState14[0],
      setSearchValue = _useState14[1];
  /**
   * Change text to search
   * @param {string} search Search value
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    if (search !== searchValue) {
      setSearchValue(search);
    }
  };
  /**
   * Method to assign driver to order from API
   * @param {object} assign assigned order id and driver id
   */


  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(assign) {
      var source, _yield$ordering$setAc, content;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setDriverActionStatus(_objectSpread(_objectSpread({}, driverActionStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.assignDriver = source;
              _context.next = 7;
              return ordering.setAccessToken(session.token).orders(assign.orderId).save({
                driver_id: assign.driverId
              }, {
                cancelToken: source
              });

            case 7:
              _yield$ordering$setAc = _context.sent;
              content = _yield$ordering$setAc.content;
              setDriverActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });

              if (!content.error) {
                if (assign.driverId) {
                  showToast(_ToastContext.ToastType.Success, t('ORDER_DRIVER_ASSIGNED', 'Driver assigned to order'));
                } else {
                  showToast(_ToastContext.ToastType.Success, t('ORDER_DRIVER_REMOVED', 'Driver removed from the order'));
                }
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setDriverActionStatus(_objectSpread(_objectSpread({}, driverActionStatus), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function handleAssignDriver(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * change online state for drivers
   * @param {Boolean} isOnline
   */


  var handleChangeDriverIsOnline = function handleChangeDriverIsOnline(isOnline) {
    setDriversIsOnline(isOnline);
  };
  /**
   * sub filter for drivers
   * @param {Object} subFilter
   */


  var handleChangeDriversSubFilter = function handleChangeDriversSubFilter(subFilter) {
    setDriversSubfilter(subFilter);
  };
  /**
   * Method to get online/offline drivers
   * @param {Array} drivers
   */


  var getOnlineOfflineDrivers = function getOnlineOfflineDrivers(drivers) {
    var _onlineDrivers;

    var _offlineDrivers;

    if (driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && driver.available;
      });
      _offlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && !driver.available;
      });
    } else if (driversSubfilter.busy && !driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && driver.available && driver.busy;
      });
      _offlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && !driver.available && driver.busy;
      });
    } else if (!driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && driver.available && !driver.busy;
      });
      _offlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && !driver.available && !driver.busy;
      });
    } else {
      _onlineDrivers = [];
      _offlineDrivers = [];
    }

    setOnlineDrivers(_onlineDrivers);
    setOfflineDrivers(_offlineDrivers);
  };
  /**
   * Method to get drivers from API
   */


  var getDrivers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var source, where, conditions, searchConditions, _yield$ordering$setAc2, result;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: true
              }));
              source = {};
              requestsState.drivers = source;
              where = null;
              conditions = [];
              conditions.push({
                attribute: 'level',
                value: [4]
              });

              if (searchValue) {
                searchConditions = [];

                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                  searchConditions.push({
                    attribute: 'lastname',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByCellphone) {
                  searchConditions.push({
                    attribute: 'cellphone',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              _context2.next = 11;
              return ordering.setAccessToken(session.token).users().select(propsToFetch).where(where).get({
                cancelToken: source
              });

            case 11:
              _yield$ordering$setAc2 = _context2.sent;
              result = _yield$ordering$setAc2.content.result;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                drivers: result
              }));
              getOnlineOfflineDrivers(result);
              _context2.next = 20;
              break;

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 17]]);
    }));

    return function getDrivers() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get the drivers of order from API
   */


  var getOrderDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, _yield$response$json, error, result;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token),
                  'X-App-X': ordering.appId,
                  'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                }
              };
              _context3.next = 5;
              return fetch("".concat(ordering.root, "/controls/orders/").concat(orderId), requestOptions);

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context3.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;
              setDriversList({
                loading: false,
                drivers: error ? [] : result === null || result === void 0 ? void 0 : result.drivers,
                error: error ? result : null
              });
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function getOrderDrivers() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * listen for busy/not busy filter
   */


  (0, _react.useEffect)(function () {
    getOnlineOfflineDrivers(driversList.drivers);
  }, [driversSubfilter]);
  (0, _react.useEffect)(function () {
    if (drivers) {
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers,
        loading: false
      }));
      getOnlineOfflineDrivers(drivers);
    } else {
      if (isOrderDrivers) {
        getOrderDrivers();
      } else {
        getDrivers();
      }
    }

    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, [drivers, searchValue]);
  /**
   * Listening driver change
   */

  (0, _react.useEffect)(function () {
    if (session !== null && session !== void 0 && session.loading) return;

    var handleUpdateDriver = function handleUpdateDriver(driver) {
      var found = driversList.drivers.find(function (_driver) {
        return _driver.id === driver.id;
      });
      var _drivers = [];

      if (found) {
        _drivers = driversList.drivers.filter(function (_driver) {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver);
          }

          return true;
        });
      } else {
        if (!isOrderDrivers) {
          _drivers = [].concat(_toConsumableArray(driversList.drivers), [driver]);
        } else {
          _drivers = _toConsumableArray(driversList.drivers);
        }
      }

      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: _drivers
      }));
    };

    var handleTrackingDriver = function handleTrackingDriver(trackingData) {
      var drivers = [];
      drivers = driversList.drivers.filter(function (_driver) {
        if (_driver.id === trackingData.driver_id) {
          if (typeof trackingData.location === 'string') {
            var trackingLocation = trackingData.location;

            var _location = trackingLocation.replaceAll('\\', '');

            var location = JSON.parse(_location);
            _driver.location = location;
          } else {
            _driver.location = trackingData.location;
          }
        }

        return true;
      });
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers
      }));
    };

    socket.on('drivers_update', handleUpdateDriver);
    socket.on('tracking_driver', handleTrackingDriver);
    return function () {
      socket.off('drivers_update', handleUpdateDriver);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [socket, session === null || session === void 0 ? void 0 : session.loading, driversList.drivers]);
  (0, _react.useEffect)(function () {
    if (!(session !== null && session !== void 0 && session.user) || drivers) return;
    socket.join('drivers');
  }, [socket, session === null || session === void 0 ? void 0 : session.user, asDashboard]);
  (0, _react.useEffect)(function () {
    getOnlineOfflineDrivers(driversList.drivers);
  }, [driversList.drivers]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversList: driversList,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    driverActionStatus: driverActionStatus,
    driversIsOnline: driversIsOnline,
    driversSubfilter: driversSubfilter,
    searchValue: searchValue,
    handleChangeSearch: handleChangeSearch,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    handleAssignDriver: handleAssignDriver
  })));
};

exports.DriversList = DriversList;
DriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversList.defaultProps = {
  propsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};