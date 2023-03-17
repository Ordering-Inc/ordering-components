"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ApiContext = require("../../contexts/ApiContext");

var _UtilsContext = require("../../contexts/UtilsContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));

var _isBetween = _interopRequireDefault(require("dayjs/plugin/isBetween"));

var _WebsocketContext = require("../../contexts/WebsocketContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_dayjs.default.extend(_timezone.default);

_dayjs.default.extend(_isBetween.default);

var BusinessController = function BusinessController(props) {
  var business = props.business,
      businessId = props.businessId,
      businessAttributes = props.businessAttributes,
      onBusinessClick = props.onBusinessClick,
      handleCustomClick = props.handleCustomClick,
      isDisabledInterval = props.isDisabledInterval,
      minutesToCloseSoon = props.minutesToCloseSoon,
      UIComponent = props.UIComponent,
      handleUpdateBusinessList = props.handleUpdateBusinessList,
      favoriteIds = props.favoriteIds,
      setFavoriteIds = props.setFavoriteIds;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

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
  /**
   * This must be containt business object data
   */


  var _useState = (0, _react.useState)({
    business: business,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessState = _useState2[0],
      setBusinessState = _useState2[1];
  /**
   * This must be containt a boolean to indicate if a business is close or not
   */


  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isBusinessClose = _useState4[0],
      setIsBusinessClose = _useState4[1];
  /**
   * Order context data
   */


  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];
  /**
   * formatPrice function
   */


  var _useUtils = (0, _UtilsContext.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;
  /**
   * timer in minutes when the business is going to close
   */


  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      businessWillCloseSoonMinutes = _useState6[0],
      setBusinessWillCloseSoonMinutes = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      actionState = _useState8[0],
      setActionState = _useState8[1];
  /**
   * Method to get business from SDK
   */


  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              _context.prev = 1;
              _context.next = 4;
              return ordering.businesses(businessId).select(businessAttributes).get();

            case 4:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              result = _yield$ordering$busin2.result;
              error = _yield$ordering$busin2.error;

              if (!error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result,
                  loading: false
                }));
              } else {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result[0],
                  loading: false,
                  error: error
                }));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to return business offert to show
   * @param {object} offer
   */


  var getBusinessOffer = function getBusinessOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return (maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate_type) === 1 ? "".concat(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate, "%") : parsePrice(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate);
  };
  /**
   * Method to return business max offer to show
   * @param {object} max offer
   */


  var getBusinessMaxOffer = function getBusinessMaxOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return maxOffer;
  };
  /**
   * Method to format date
   * @param {object} time
   */


  var formatDate = function formatDate(time) {
    var formatHour = (time === null || time === void 0 ? void 0 : time.hour) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.hour) : time === null || time === void 0 ? void 0 : time.hour;
    var formatMinute = (time === null || time === void 0 ? void 0 : time.minute) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.minute) : time === null || time === void 0 ? void 0 : time.minute;
    return time ? "".concat(formatHour, ":").concat(formatMinute) : 'none';
  };
  /**
   * Method to format numbers (only 2 decimals)
   * @param {number} num
   */


  var formatNumber = function formatNumber(num) {
    return Math.round(num * 1e2) / 1e2;
  };
  /**
   * Method to add, remove favorite info for user from API
   */


  var handleFavoriteBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var isAdd,
          _businessState$busine,
          _businessState$busine2,
          changes,
          requestOptions,
          fetchEndpoint,
          response,
          content,
          _businessState$busine3,
          _businessState$busine6,
          _businessState$busine4,
          updateIds,
          _args2 = arguments;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              isAdd = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;

              if (!(!(businessState !== null && businessState !== void 0 && businessState.business) || !user)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'loading'));
              _context2.prev = 4;
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: true,
                error: null
              }));
              changes = {
                object_id: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.id
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
              fetchEndpoint = isAdd ? "".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/favorite_businesses") : "".concat(ordering.root, "/users/").concat(user.id, "/favorite_businesses/").concat(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id);
              _context2.next = 11;
              return fetch(fetchEndpoint, requestOptions);

            case 11:
              response = _context2.sent;
              _context2.next = 14;
              return response.json();

            case 14:
              content = _context2.sent;

              if (!content.error) {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false
                }));
                handleUpdateBusinessList && handleUpdateBusinessList(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id, {
                  favorite: isAdd
                });

                if (favoriteIds) {
                  updateIds = isAdd ? [].concat(_toConsumableArray(favoriteIds), [businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id]) : favoriteIds.filter(function (item) {
                    var _businessState$busine5;

                    return item !== (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id);
                  });
                  setFavoriteIds(updateIds);
                }

                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: _objectSpread(_objectSpread({}, businessState.business), {}, {
                    favorite: isAdd
                  })
                }));
                props.handleCustomUpdate && props.handleCustomUpdate(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.id, {
                  favorite: isAdd
                });
                showToast(_ToastContext.ToastType.Success, isAdd ? t('FAVORITE_ADDED', 'Favorite added') : t('FAVORITE_REMOVED', 'Favorite removed'));
              } else {
                setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                  loading: false,
                  error: content.result
                }));
                showToast(_ToastContext.ToastType.Error, content.result);
              }

              _context2.next = 22;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](4);
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));
              showToast(_ToastContext.ToastType.Error, [_context2.t0.message]);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 18]]);
    }));

    return function handleFavoriteBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!isDisabledInterval) {
      var _businessState$busine7, _businessState$busine8, _businessState$busine9, _businessState$busine10;

      var timeout = null;
      var timeoutCloseSoon = null;
      if (!((_businessState$busine7 = businessState.business) !== null && _businessState$busine7 !== void 0 && _businessState$busine7.timezone)) return;
      var currentDate = (0, _dayjs.default)().tz((_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.timezone);
      var lapse = null;

      if ((_businessState$busine9 = businessState.business) !== null && _businessState$busine9 !== void 0 && (_businessState$busine10 = _businessState$busine9.today) !== null && _businessState$busine10 !== void 0 && _businessState$busine10.enabled) {
        var _businessState$busine11, _businessState$busine12, _businessState$busine13;

        lapse = (_businessState$busine11 = businessState.business) === null || _businessState$busine11 === void 0 ? void 0 : (_businessState$busine12 = _businessState$busine11.today) === null || _businessState$busine12 === void 0 ? void 0 : (_businessState$busine13 = _businessState$busine12.lapses) === null || _businessState$busine13 === void 0 ? void 0 : _businessState$busine13.find(function (lapse) {
          var from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute);
          var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
          return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix();
        });
      }

      if (lapse) {
        var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
        var timeToClose = (to.unix() - currentDate.unix()) * 1000;

        if (timeToClose <= minutesToCloseSoon * 60000 && timeToClose > 0) {
          setBusinessWillCloseSoonMinutes(timeToClose / 60000);
        } else if (timeToClose > minutesToCloseSoon * 60000) {
          timeoutCloseSoon = setTimeout(function () {
            setBusinessWillCloseSoonMinutes(minutesToCloseSoon);
          }, timeToClose - minutesToCloseSoon * 60000);
        }

        timeout = setTimeout(function () {
          setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
            business: _objectSpread(_objectSpread({}, businessState.business), {}, {
              open: false
            })
          }));
          setIsBusinessClose(true);
        }, timeToClose);
      }

      return function () {
        timeout && clearTimeout(timeout);
        timeoutCloseSoon && clearTimeout(timeoutCloseSoon);
      };
    }
  }, []);
  (0, _react.useEffect)(function () {
    var timeout = null;

    if (businessWillCloseSoonMinutes) {
      timeout = setTimeout(function () {
        setBusinessWillCloseSoonMinutes(businessWillCloseSoonMinutes - 1);
      }, 60000);
    }

    return function () {
      timeout && clearTimeout(timeout);
    };
  }, [businessWillCloseSoonMinutes]);
  (0, _react.useEffect)(function () {
    if (business) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: business
      }));
    } else if (!business) {
      getBusiness();
    }
  }, [business]);

  var updateBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(businessId) {
      var updateParams,
          _yield$ordering$busin3,
          _yield$ordering$busin4,
          result,
          error,
          _args3 = arguments;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              updateParams = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              _context3.prev = 2;
              _context3.next = 5;
              return ordering.businesses(businessId).save(updateParams);

            case 5:
              _yield$ordering$busin3 = _context3.sent;
              _yield$ordering$busin4 = _yield$ordering$busin3.content;
              result = _yield$ordering$busin4.result;
              error = _yield$ordering$busin4.error;

              if (!error) {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result,
                  loading: false
                }));
              } else {
                setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                  business: result[0],
                  loading: false,
                  error: error
                }));
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](2);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 12]]);
    }));

    return function updateBusiness(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _businessState$busine14;

    if (!favoriteIds) return;

    if (favoriteIds !== null && favoriteIds !== void 0 && favoriteIds.includes(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine14 = businessState.business) === null || _businessState$busine14 === void 0 ? void 0 : _businessState$busine14.id)) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
          favorite: true
        })
      }));
    } else {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
          favorite: false
        })
      }));
    }
  }, [favoriteIds]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    updateBusiness: updateBusiness,
    orderState: orderState,
    isBusinessClose: isBusinessClose,
    businessState: businessState,
    business: businessState.business,
    formatDate: formatDate,
    formatNumber: formatNumber,
    getBusinessOffer: getBusinessOffer,
    getBusinessMaxOffer: getBusinessMaxOffer,
    handleClick: handleCustomClick || onBusinessClick,
    businessWillCloseSoonMinutes: businessWillCloseSoonMinutes,
    handleFavoriteBusiness: handleFavoriteBusiness
  })));
};

exports.BusinessController = BusinessController;
BusinessController.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business, contains a object with all business properties
   */
  business: _propTypes.default.object,

  /**
   * businessId, this must be containt id or slug to get business from API
   */
  businessId: _propTypes.default.number,

  /**
   * businessAttributes, Array of attributes to get business from API
   */
  businessAttributes: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * onBusinessClick, function to get click event and return business object after default behavior
   */
  onBusinessClick: _propTypes.default.func,

  /**
   * handleCustomClick, function to get click event and return business object without default behavior
   */
  handleCustomClick: _propTypes.default.func,

  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessController.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  minutesToCloseSoon: 30
};