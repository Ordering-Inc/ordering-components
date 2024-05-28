"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLanguage = exports.LanguageProvider = exports.LanguageContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ApiContext = require("../ApiContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
 * Create LanguageContext
 * This context will manage the current languages internally and provide an easy interface
 */
var LanguageContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
exports.LanguageContext = LanguageContext;
var LanguageProvider = function LanguageProvider(_ref) {
  var _state$language4;
  var settings = _ref.settings,
    children = _ref.children,
    strategy = _ref.strategy;
  var _useState = (0, _react.useState)({
      loading: true,
      dictionary: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  /**
   * Load language from localstorage and set state or load default language
   */
  var setLanguageFromLocalStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var language;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return strategy.getItem('language', true);
          case 2:
            language = _context.sent;
            if (!language) {
              loadDefaultLanguage();
            } else {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                language: language
              }));
              apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function setLanguageFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 2),
    ordering = _useApi2[0],
    apiHelper = _useApi2[1];
  var updateLanguageContext = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _language, dictionary, _yield$ordering$trans, _yield$ordering$trans2, errDict, resDict, _yield$ordering$langu, _yield$ordering$langu2, error, result, language;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context2.next = 4;
            return strategy.getItem('language', true);
          case 4:
            _language = _context2.sent;
            dictionary = {};
            _context2.next = 8;
            return ordering.translations().asDictionary().get();
          case 8:
            _yield$ordering$trans = _context2.sent;
            _yield$ordering$trans2 = _yield$ordering$trans.content;
            errDict = _yield$ordering$trans2.error;
            resDict = _yield$ordering$trans2.result;
            dictionary = errDict ? {} : resDict;
            _context2.next = 15;
            return ordering.languages().where([{
              attribute: _language ? _language === null || _language === void 0 ? void 0 : _language.code : 'default',
              value: true
            }]).get();
          case 15:
            _yield$ordering$langu = _context2.sent;
            _yield$ordering$langu2 = _yield$ordering$langu.content;
            error = _yield$ordering$langu2.error;
            result = _yield$ordering$langu2.result;
            language = {
              id: result[0].id,
              code: result[0].code,
              rtl: result[0].rtl
            };
            apiHelper.setLanguage(result[0].code);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              error: error ? typeof result === 'string' ? result : result === null || result === void 0 ? void 0 : result[0] : null,
              dictionary: dictionary,
              language: language
            }));
            _context2.next = 27;
            break;
          case 24:
            _context2.prev = 24;
            _context2.t0 = _context2["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 24]]);
    }));
    return function updateLanguageContext() {
      return _ref3.apply(this, arguments);
    };
  }();
  var refreshTranslations = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _yield$ordering$trans3, _yield$ordering$trans4, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context3.next = 4;
            return ordering.translations().asDictionary().get();
          case 4:
            _yield$ordering$trans3 = _context3.sent;
            _yield$ordering$trans4 = _yield$ordering$trans3.content;
            error = _yield$ordering$trans4.error;
            result = _yield$ordering$trans4.result;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              dictionary: error ? {} : result
            }));
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function refreshTranslations() {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadDefaultLanguage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _language, _yield$ordering$langu3, _yield$ordering$langu4, error, result, language;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return strategy.getItem('language', true);
          case 2:
            _language = _context4.sent;
            _context4.prev = 3;
            _context4.next = 6;
            return ordering.languages().where([{
              attribute: _language ? _language === null || _language === void 0 ? void 0 : _language.code : 'default',
              value: true
            }]).get();
          case 6:
            _yield$ordering$langu3 = _context4.sent;
            _yield$ordering$langu4 = _yield$ordering$langu3.content;
            error = _yield$ordering$langu4.error;
            result = _yield$ordering$langu4.result;
            if (!error) {
              _context4.next = 13;
              break;
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              error: typeof result === 'string' ? result : result === null || result === void 0 ? void 0 : result[0]
            }));
            return _context4.abrupt("return");
          case 13:
            language = {
              id: result[0].id,
              code: result[0].code,
              rtl: result[0].rtl
            };
            apiHelper.setLanguage(result[0].code);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              language: language
            }));
            _context4.next = 21;
            break;
          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](3);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 21:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[3, 18]]);
    }));
    return function loadDefaultLanguage() {
      return _ref5.apply(this, arguments);
    };
  }();
  var setLanguage = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(language) {
      var _state$language;
      var _language;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(!language || language.id === ((_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.id))) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            _language = {
              id: language.id,
              code: language.code,
              rtl: language.rtl
            };
            _context5.next = 5;
            return strategy.setItem('language', _language, true);
          case 5:
            apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true,
              language: _language
            }));
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function setLanguage(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Refresh translation when change language from ordering
   */
  (0, _react.useEffect)(function () {
    var checkLanguage = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _state$language2, _state$language3;
        var token;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!((_state$language2 = state.language) !== null && _state$language2 !== void 0 && _state$language2.code && ((_state$language3 = state.language) === null || _state$language3 === void 0 ? void 0 : _state$language3.code) === ordering.language)) {
                _context6.next = 5;
                break;
              }
              _context6.next = 3;
              return strategy.getItem('token');
            case 3:
              token = _context6.sent;
              settings !== null && settings !== void 0 && settings.use_root_point && settings !== null && settings !== void 0 && settings.force_update_lang && !token ? updateLanguageContext() : refreshTranslations();
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function checkLanguage() {
        return _ref7.apply(this, arguments);
      };
    }();
    checkLanguage();
  }, [(_state$language4 = state.language) === null || _state$language4 === void 0 ? void 0 : _state$language4.code, ordering]);
  (0, _react.useEffect)(function () {
    setLanguageFromLocalStorage();
  }, []);
  (0, _react.useEffect)(function () {
    var _state$language5, _state$language6;
    if (ordering.language !== (state === null || state === void 0 ? void 0 : (_state$language5 = state.language) === null || _state$language5 === void 0 ? void 0 : _state$language5.code)) return;
    apiHelper.setLanguage(state === null || state === void 0 ? void 0 : (_state$language6 = state.language) === null || _state$language6 === void 0 ? void 0 : _state$language6.code);
  }, [state.language]);
  var t = function t(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (state === null || state === void 0 ? void 0 : state.dictionary) && Object.keys(state === null || state === void 0 ? void 0 : state.dictionary).length > 0 && state.dictionary[key] || fallback || key;
  };
  return /*#__PURE__*/_react.default.createElement(LanguageContext.Provider, {
    value: [state, t, setLanguage, refreshTranslations, loadDefaultLanguage]
  }, children);
};

/**
 * Hook to get and update language state
 */
exports.LanguageProvider = LanguageProvider;
var useLanguage = function useLanguage() {
  var languageManager = (0, _react.useContext)(LanguageContext);
  return languageManager || [{}, function (key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return fallback || key;
  }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }))];
};
exports.useLanguage = useLanguage;