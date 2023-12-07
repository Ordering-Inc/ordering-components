"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
var _BusinessContext = require("../../contexts/BusinessContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _codeNumbers = require("../../constants/code-numbers");
var _timezones = require("../../constants/timezones");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var PhoneAutocomplete = function PhoneAutocomplete(props) {
  var UIComponent = props.UIComponent,
    isIos = props.isIos,
    businessSlug = props.businessSlug,
    urlPhone = props.urlPhone,
    propsToFetch = props.propsToFetch;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    setUserCustomerOptions = _useOrder2[1].setUserCustomerOptions;
  var _useBusiness = (0, _BusinessContext.useBusiness)(),
    _useBusiness2 = _slicedToArray(_useBusiness, 1),
    businessState = _useBusiness2[0];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    phone = _useState2[0],
    setPhone = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState3 = (0, _react.useState)({
      customer: false,
      signup: false,
      error: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    openModal = _useState4[0],
    setOpenModal = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    customerState = _useState6[0],
    setCustomerState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      users: userCustomer ? [userCustomer] : [],
      loading: !!urlPhone,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    customersPhones = _useState8[0],
    setCustomersPhones = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    businessAddress = _useState10[0],
    setBusinessAddress = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: true,
      content: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    alertState = _useState12[0],
    setAlertState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    optionsState = _useState14[0],
    setOptionsState = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    localPhoneCode = _useState16[0],
    setLocalPhoneCode = _useState16[1];
  var reqState = {};
  /**
   * Get users from API
   */
  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var maxRetries, waitTime, retryAttempt, conditions, source, request, timer, response, result, _reqState$users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            maxRetries = 3;
            waitTime = 5000;
            retryAttempt = 1;
          case 3:
            if (!(retryAttempt <= maxRetries)) {
              _context.next = 33;
              break;
            }
            _context.prev = 4;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: true
            }));
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: isIos ? true : encodeURI(true)
              }, {
                conector: 'OR',
                conditions: [{
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(phone, "%") : encodeURI("%".concat(phone, "%"))
                  }
                }, {
                  attribute: 'phone',
                  value: {
                    condition: 'ilike',
                    value: isIos ? "%".concat(phone, "%") : encodeURI("%".concat(phone, "%"))
                  }
                }]
              }]
            };
            source = {};
            reqState.users = source;
            request = ordering.setAccessToken(token).users().select(propsToFetch).where(conditions).get({
              cancelToken: source
            });
            timer = new Promise(function (resolve, reject) {
              setTimeout(function () {
                return reject(new Error('Timeout exceeded'));
              }, waitTime);
            });
            _context.next = 13;
            return Promise.race([request, timer]);
          case 13:
            response = _context.sent;
            if (!(response.content && response.content.result)) {
              _context.next = 20;
              break;
            }
            result = response.content.result;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              users: result,
              loading: false
            }));
            return _context.abrupt("break", 33);
          case 20:
            throw new Error('Error');
          case 21:
            _context.next = 30;
            break;
          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](4);
            ((_reqState$users = reqState.users) === null || _reqState$users === void 0 ? void 0 : _reqState$users.cancel) && reqState.users.cancel();
            if (!(retryAttempt < maxRetries)) {
              _context.next = 29;
              break;
            }
            _context.next = 29;
            return new Promise(function (resolve) {
              return setTimeout(resolve, waitTime);
            });
          case 29:
            if (retryAttempt === maxRetries) {
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: false,
                error: t('ERROR_MULTIPLE_FETCH', 'Exceeded the maximum number of retries. Reload the page.')
              }));
            }
          case 30:
            retryAttempt++;
            _context.next = 3;
            break;
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 23]]);
    }));
    return function getUsers() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * fetch business to get its address
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ordering.businesses('mcbonalds').select(['address', 'location', 'distance']).parameters().get();
          case 2:
            _yield$ordering$busin = _context2.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error) {
              _context2.next = 9;
              break;
            }
            setAlertState({
              open: true,
              content: result
            });
            return _context2.abrupt("return");
          case 9:
            setBusinessAddress(result);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  var checkAddress = function checkAddress(address1, address2) {
    var props = ['address', 'location'];
    var values = [];
    props.forEach(function (prop) {
      if (address1 && address1[prop]) {
        if (prop === 'location') {
          values.push(address2[prop].lat === address1[prop].lat && address2[prop].lng === address1[prop].lng);
        } else {
          values.push(address2[prop] === address1[prop]);
        }
      } else {
        values.push(!address2[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var setGuestOptions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
      var _businessState$busine;
      var customer, _ref3$type, type, onRedirect, businessObj, userObj, _addressSelected, _orderState$options, _yield$ordering$users, _yield$ordering$users2, resultAddresses, error, userAddressFinded, addressSelected, _response$content$res, _addressSelected2, response, addressResponse, options, _addressSelected3;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            customer = _ref3.customer, _ref3$type = _ref3.type, type = _ref3$type === void 0 ? 3 : _ref3$type, onRedirect = _ref3.onRedirect;
            businessObj = (_businessState$busine = businessState === null || businessState === void 0 ? void 0 : businessState.business) !== null && _businessState$busine !== void 0 ? _businessState$busine : businessAddress;
            userObj = customer !== null && customer !== void 0 ? customer : user;
            if (!(!businessObj || !(userObj !== null && userObj !== void 0 && userObj.id))) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return");
          case 5:
            _context3.prev = 5;
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: true
            }));
            _context3.next = 9;
            return ordering.users(userObj.id).addresses().get();
          case 9:
            _yield$ordering$users = _context3.sent;
            _yield$ordering$users2 = _yield$ordering$users.content;
            resultAddresses = _yield$ordering$users2.result;
            error = _yield$ordering$users2.error;
            if (!error) {
              _context3.next = 16;
              break;
            }
            setAlertState({
              open: true,
              content: resultAddresses
            });
            return _context3.abrupt("return");
          case 16:
            userAddressFinded = resultAddresses.find(function (address) {
              return (address === null || address === void 0 ? void 0 : address.location) && checkAddress(businessObj, address) && address;
            });
            addressSelected = userAddressFinded !== null && userAddressFinded !== void 0 ? userAddressFinded : null;
            if ((_addressSelected = addressSelected) !== null && _addressSelected !== void 0 && _addressSelected.id) {
              _context3.next = 32;
              break;
            }
            _context3.next = 21;
            return ordering.users(userObj.id).addresses().save({
              address: businessObj.address,
              location: businessObj.location
            });
          case 21:
            response = _context3.sent;
            if (!response.content.error) {
              _context3.next = 25;
              break;
            }
            setAlertState({
              open: true,
              content: response.content.result
            });
            return _context3.abrupt("return");
          case 25:
            addressSelected = (_response$content$res = response.content.result) !== null && _response$content$res !== void 0 ? _response$content$res : null;
            _context3.next = 28;
            return ordering.users(userObj.id).addresses((_addressSelected2 = addressSelected) === null || _addressSelected2 === void 0 ? void 0 : _addressSelected2.id).save({
              default: true
            });
          case 28:
            addressResponse = _context3.sent;
            if (!addressResponse.content.error) {
              _context3.next = 32;
              break;
            }
            setAlertState({
              open: true,
              content: addressResponse.content.result
            });
            return _context3.abrupt("return");
          case 32:
            options = {
              type: type
            };
            if (addressSelected && !checkAddress(orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address, addressSelected)) {
              options.address_id = (_addressSelected3 = addressSelected) === null || _addressSelected3 === void 0 ? void 0 : _addressSelected3.id;
            }
            if (!(options !== null && options !== void 0 && options.address_id || (user === null || user === void 0 ? void 0 : user.id) !== (customer === null || customer === void 0 ? void 0 : customer.id))) {
              _context3.next = 37;
              break;
            }
            _context3.next = 37;
            return setUserCustomerOptions({
              options: options,
              customer: userObj
            });
          case 37:
            onRedirect && onRedirect();
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: false
            }));
            _context3.next = 45;
            break;
          case 41:
            _context3.prev = 41;
            _context3.t0 = _context3["catch"](5);
            setAlertState({
              open: true,
              content: _context3.t0.message
            });
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: false
            }));
          case 45:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 41]]);
    }));
    return function setGuestOptions(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _customersPhones$user;
    if (urlPhone) return;
    if (phone && phone.length >= 7 && ((customersPhones === null || customersPhones === void 0 ? void 0 : (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.length) === 0 || phone.length === 7)) {
      getUsers();
    }
    if (phone && phone.length < 7 || !phone) {
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: userCustomer ? [userCustomer] : []
      }));
    }
  }, [phone]);
  (0, _react.useEffect)(function () {
    if (urlPhone) {
      getUsers();
      return;
    }
    if (urlPhone && urlPhone.length < 7) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        error: true
      }));
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: [],
        loading: false
      }));
    }
  }, [urlPhone]);
  (0, _react.useEffect)(function () {
    var _businessState$busine2;
    if (businessSlug && !(businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && _businessState$busine2.id)) {
      getBusiness();
    }
  }, [businessSlug]);
  (0, _react.useEffect)(function () {
    if (!window.localStorage.getItem('local_phone_code')) {
      var _CODES$find;
      var localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var localCountry = _timezones.TIMEZONES[localTimezone];
      var _localPhoneCode = (_CODES$find = _codeNumbers.CODES.find(function (code) {
        return code.countryName === localCountry;
      })) === null || _CODES$find === void 0 ? void 0 : _CODES$find.phoneCode;
      window.localStorage.setItem('local_phone_code', "+".concat(_localPhoneCode));
      setLocalPhoneCode("+".concat(_localPhoneCode));
    } else {
      setLocalPhoneCode(window.localStorage.getItem('local_phone_code'));
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    phone: phone,
    customerState: customerState,
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    onChangeNumber: function onChangeNumber(phone) {
      return setPhone(phone);
    },
    openModal: openModal,
    setOpenModal: setOpenModal,
    setCustomerState: setCustomerState,
    setBusinessAddressToUser: setGuestOptions,
    alertState: alertState,
    optionsState: optionsState,
    checkAddress: checkAddress,
    localPhoneCode: localPhoneCode
  })));
};
exports.PhoneAutocomplete = PhoneAutocomplete;
PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'metadata']
};