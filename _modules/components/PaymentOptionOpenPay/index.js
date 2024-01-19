"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionOpenPay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

var _ConfigContext = require("../../contexts/ConfigContext");

var _EventContext = require("../../contexts/EventContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

/**
 * Component to manage payment option paypal behavior without UI component
 */
var PaymentOptionOpenPay = function PaymentOptionOpenPay(props) {
  var _configs$webview_chec, _configs$webview_chec2;

  var UIComponent = props.UIComponent,
      publicKey = props.publicKey,
      merchantId = props.merchantId,
      isSandbox = props.isSandbox,
      businessId = props.businessId,
      isApplyMasterCoupon = props.isApplyMasterCoupon,
      fromProfile = props.fromProfile,
      deUnaApiKey = props.deUnaApiKey;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var _useState = (0, _react.useState)({
    cards: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      cardsList = _useState2[0],
      setCardsList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSdkReady = _useState4[0],
      setIsSdkReady = _useState4[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      cardSelected = _useState6[0],
      setCardSelected = _useState6[1];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      _useOrder2$ = _useOrder2[1],
      applyCoupon = _useOrder2$.applyCoupon,
      applyOffer = _useOrder2$.applyOffer,
      removeOffer = _useOrder2$.removeOffer;

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var isDeUna = (configs === null || configs === void 0 ? void 0 : (_configs$webview_chec = configs.webview_checkout_deuna) === null || _configs$webview_chec === void 0 ? void 0 : _configs$webview_chec.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$webview_chec2 = configs.webview_checkout_deuna) === null || _configs$webview_chec2 === void 0 ? void 0 : _configs$webview_chec2.value) === true;
  var isAlsea = ordering.project === 'alsea';
  var DEUNA_URL = isAlsea ? 'https://api.deuna.com' : 'https://api.stg.deuna.io';
  (0, _react.useEffect)(function () {
    var _window, _window$OpenPay, _window$OpenPay$devic;

    if (!merchantId || !publicKey) return;
    var scripts = ['https://js.openpay.mx/openpay.v1.min.js', 'https://resources.openpay.mx/lib/openpay-data-js/1.2.38/openpay-data.v1.min.js'];
    scripts.forEach(function (s) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = s;
      script.defer = true;
      script.async = true;

      script.onload = function () {
        console.log('onload', isAlsea);
        window.OpenPay.setId(isAlsea ? merchantId : 'mdcd0jbyt3l0nptkyftl');
        window.OpenPay.setApiKey(isAlsea ? publicKey : 'pk_d076c726815841c3be83a3c7917c039b');
        window.OpenPay.Group.setId(isAlsea ? 'gquhxdrqw0eqdwtbcw0o' : 'gbuk3cxhqpapnqznndcg');
        window.OpenPay.Group.setApiKey(isAlsea ? 'pk_6fe12174eefa4930b4c17c5cfeec398e' : 'pk_fd69e364498d442f9e7340687c8eed90');
        window.OpenPay.setSandboxMode(!isAlsea);
        setIsSdkReady(true);
      };

      script.onerror = function () {
        throw new Error('Open pay SDK could not be loaded.');
      };

      document.body.appendChild(script);
    });

    if ((_window = window) !== null && _window !== void 0 && (_window$OpenPay = _window.OpenPay) !== null && _window$OpenPay !== void 0 && (_window$OpenPay$devic = _window$OpenPay.deviceData) !== null && _window$OpenPay$devic !== void 0 && _window$OpenPay$devic.setup) {
      setIsSdkReady(true);
    }
  }, [merchantId, publicKey]);

  var getCards = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _localDeUnaToken$user, _localDeUnaToken$user2, localDeUnaToken, fetchURL, params, response, result, _result$data, _result$data2;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true,
                error: null
              }));
              localDeUnaToken = JSON.parse(localStorage.getItem('de_una_token'));
              fetchURL = isDeUna ? "".concat(DEUNA_URL, "/users/").concat(localDeUnaToken === null || localDeUnaToken === void 0 ? void 0 : (_localDeUnaToken$user = localDeUnaToken.user_data) === null || _localDeUnaToken$user === void 0 ? void 0 : (_localDeUnaToken$user2 = _localDeUnaToken$user.user) === null || _localDeUnaToken$user2 === void 0 ? void 0 : _localDeUnaToken$user2.id, "/cards") : "https://alsea-plugins".concat(isAlsea ? '' : '-staging-development', ".ordering.co/alseaplatform/api/openpay/cards/cards.php?language=").concat(ordering.language, "&user_id=").concat(user === null || user === void 0 ? void 0 : user.id);
              params = {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId
                }
              };

              if (isDeUna) {
                params.headers = _objectSpread(_objectSpread({}, params), {}, {
                  'X-API-KEY': deUnaApiKey,
                  Authorization: "Bearer ".concat(localDeUnaToken.token)
                });
              }

              _context.next = 8;
              return fetch(fetchURL, params);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              result = _context.sent;

              if (!(result !== null && result !== void 0 && result.error)) {
                _context.next = 17;
                break;
              }

              setCardsList({
                loading: false,
                cards: [],
                error: result === null || result === void 0 ? void 0 : result.result
              });
              events.emit('general_errors', result === null || result === void 0 ? void 0 : result.result);
              _context.next = 24;
              break;

            case 17:
              if (!isDeUna) {
                _context.next = 23;
                break;
              }

              if (!((result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.length) === 0)) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return");

            case 20:
              setCardsList({
                loading: false,
                cards: result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.map(function (card) {
                  var cardData = {
                    id: card.id,
                    last4: card.last_four,
                    enabled: true,
                    brandCardName: card.company
                  };
                  return cardData;
                }),
                error: null
              });
              _context.next = 24;
              break;

            case 23:
              setCardsList({
                loading: false,
                cards: result === null || result === void 0 ? void 0 : result.result.map(function (card) {
                  var _window2;

                  return _objectSpread(_objectSpread({}, card), {}, {
                    data: {
                      card_id: card === null || card === void 0 ? void 0 : card.id,
                      device_session_id: (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.OpenPay.deviceData.setup()
                    }
                  });
                }),
                error: null
              });

            case 24:
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](0);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 26]]);
    }));

    return function getCards() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCardClick = function handleCardClick(card) {
    if (isDeUna) return;
    setCardSelected({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brandCardName,
        last4: card.last4
      },
      data: {
        card_id: card.id,
        device_session_id: window.OpenPay.deviceData.setup()
      }
    });

    if (card.brandCardName === 'mastercard' && isApplyMasterCoupon) {
      applyMasterCardCoupon();
    } else {
      var _props$cart, _props$cart2, _props$cart3;

      if (((props === null || props === void 0 ? void 0 : (_props$cart = props.cart) === null || _props$cart === void 0 ? void 0 : _props$cart.offers.length) > 0 || props !== null && props !== void 0 && (_props$cart2 = props.cart) !== null && _props$cart2 !== void 0 && _props$cart2.coupon) && (props === null || props === void 0 ? void 0 : (_props$cart3 = props.cart) === null || _props$cart3 === void 0 ? void 0 : _props$cart3.coupon) === 'DLVMASTER30') {
        var _configs$advanced_off;

        if (!(configs !== null && configs !== void 0 && (_configs$advanced_off = configs.advanced_offers_module) !== null && _configs$advanced_off !== void 0 && _configs$advanced_off.value)) {
          applyCoupon({
            business_id: businessId,
            coupon: null
          });
        } // else {
        //   removeOffer({
        //     business_id: businessId,
        //     offer_id: props?.cart?.offers[0].id
        //   })
        // }

      }
    }
  };

  var handleNewCard = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
      var _configs$payment_grou, response, result, deviceSessionId, CardData;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!isDeUna) {
                _context3.next = 3;
                break;
              }

              handleClick();
              return _context3.abrupt("return");

            case 3:
              _context3.prev = 3;
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true,
                error: null
              }));

              if (!((configs === null || configs === void 0 ? void 0 : (_configs$payment_grou = configs.payment_group_tokenization) === null || _configs$payment_grou === void 0 ? void 0 : _configs$payment_grou.value) !== '1')) {
                _context3.next = 19;
                break;
              }

              _context3.next = 8;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging-development', ".ordering.co/alseaplatform/api/openpay/cards/token.php"), {
                method: 'POST',
                body: JSON.stringify({
                  card_number: data.cardNumber,
                  cvv2: data.cardSecurityCode,
                  // expiry: data.expiry,
                  expiration_month: data.cardMonth,
                  expiration_year: data.cardYear,
                  holder_name: data.cardName
                }),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId
                }
              });

            case 8:
              response = _context3.sent;
              _context3.next = 11;
              return response.json();

            case 11:
              result = _context3.sent;

              if (!(_typeof(result) !== 'object' || result !== null && result !== void 0 && result.error)) {
                _context3.next = 15;
                break;
              }

              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: result === null || result === void 0 ? void 0 : result.result
              }));
              return _context3.abrupt("return");

            case 15:
              deviceSessionId = window.OpenPay.deviceData.setup();
              addCardPlugin(result === null || result === void 0 ? void 0 : result.id, deviceSessionId);
              _context3.next = 21;
              break;

            case 19:
              CardData = {
                card_number: data.cardNumber,
                cvv2: data.cardSecurityCode,
                // expiry: data.expiry,
                expiration_month: data.cardMonth,
                expiration_year: data.cardYear,
                holder_name: data.cardName
              };
              window.OpenPay.Group.token.create(CardData, /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(success) {
                  var _deviceSessionId;

                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (_typeof(success) === 'object') {
                            _deviceSessionId = window.OpenPay.deviceData.setup();
                            addCardPlugin(success.data.id, _deviceSessionId);
                          }

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }(), function (fallback) {
                var _fallback$data;

                setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                  loading: false,
                  error: fallback === null || fallback === void 0 ? void 0 : (_fallback$data = fallback.data) === null || _fallback$data === void 0 ? void 0 : _fallback$data.description
                }));
              });

            case 21:
              _context3.next = 27;
              break;

            case 23:
              _context3.prev = 23;
              _context3.t0 = _context3["catch"](3);
              events.emit('general_errors', _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 23]]);
    }));

    return function handleNewCard(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getBrandName = function getBrandName(company) {
    var cardsVisa = ['visa'];
    var cardsMaster = ['mastercard', 'master'];
    var cardsAmerica = ['american_express', 'amex'];

    if (cardsVisa.includes(company)) {
      return 'visa';
    } else if (cardsMaster.includes(company)) {
      return 'mastercard';
    } else if (cardsAmerica.includes(company)) {
      return 'american';
    } else {
      return 'unknown';
    }
  };

  var handleClick = function handleClick() {
    var VaultWidget = window.VaultWidget;
    var localDeUnaToken = JSON.parse(localStorage.getItem('de_una_token'));
    VaultWidget.config({
      checkoutConfig: {
        apiKey: deUnaApiKey,
        env: 'staging',
        userToken: localDeUnaToken.token
      },
      callbacks: {
        onSuccess: function onSuccess(payload) {
          console.log('onSuccess', payload);
          var cardData = {
            id: payload.data.cardId,
            last4: payload.data.lastFour,
            enabled: true,
            brandCardName: getBrandName(payload.data.company)
          };
          events.emit('deuna_vault_completed', {
            event: 'deuna_vault_completed',
            data: payload === null || payload === void 0 ? void 0 : payload.data
          });
          setCardsList({
            cards: [].concat(_toConsumableArray(cardsList === null || cardsList === void 0 ? void 0 : cardsList.cards), [cardData]),
            loading: false,
            error: null
          });
          VaultWidget.closeElements();
        },
        onFailure: function onFailure(error) {
          console.log('onFailure', error);
          events.emit('deuna_vault_failed', {
            event: 'deuna_vault_failed',
            data: error
          }); // MyAlert.show('Hubo un problema al crear la tarjeta')
        },
        onClose: function onClose() {
          console.log('onClose', VaultWidget);
          events.emit('deuna_vault_close', {
            event: 'deuna_vault_close',
            data: {
              onClose: true
            }
          });
        }
      }
    }).then(function () {
      VaultWidget.initElements({
        mode: 'modal',
        modalParams: {
          desktop: {
            size: 'container',
            modalPosition: 'center'
          },
          mobile: {
            size: 'container',
            modalPosition: 'center'
          }
        },
        elementType: 'vault'
      });
    });
  };

  var addCardPlugin = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tokenId, deviceSessionId) {
      var _resultCard$result;

      var responseCard, resultCard;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging-development', ".ordering.co/alseaplatform/api/openpay/cards/add.php"), {
                method: 'POST',
                body: JSON.stringify({
                  language: ordering.language,
                  user_id: user === null || user === void 0 ? void 0 : user.id,
                  token_id: tokenId,
                  device_session_id: deviceSessionId
                }),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId,
                  'Content-Type': 'application/json'
                }
              });

            case 2:
              responseCard = _context4.sent;
              _context4.next = 5;
              return responseCard.json();

            case 5:
              resultCard = _context4.sent;

              if (!resultCard.error) {
                _context4.next = 10;
                break;
              }

              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: resultCard === null || resultCard === void 0 ? void 0 : resultCard.result
              }));
              events.emit('general_errors', resultCard === null || resultCard === void 0 ? void 0 : resultCard.result);
              return _context4.abrupt("return");

            case 10:
              setCardsList({
                cards: [].concat(_toConsumableArray(cardsList.cards), [_objectSpread(_objectSpread({}, resultCard === null || resultCard === void 0 ? void 0 : resultCard.result), {}, {
                  brand: resultCard === null || resultCard === void 0 ? void 0 : resultCard.brandCardName
                })]),
                loading: false,
                error: null
              });
              handleCardClick(_objectSpread(_objectSpread({}, resultCard === null || resultCard === void 0 ? void 0 : resultCard.result), {}, {
                brand: resultCard === null || resultCard === void 0 ? void 0 : resultCard.brandCardName,
                type: 'card',
                card: {
                  brand: resultCard.brandCardName,
                  last4: resultCard === null || resultCard === void 0 ? void 0 : resultCard.last4
                },
                data: {
                  card_id: resultCard === null || resultCard === void 0 ? void 0 : (_resultCard$result = resultCard.result) === null || _resultCard$result === void 0 ? void 0 : _resultCard$result.id,
                  device_session_id: deviceSessionId
                }
              }));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function addCardPlugin(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var deleteCard = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(card) {
      var _localDeUnaToken$user3, _localDeUnaToken$user4, localDeUnaToken, fetchURL, params, response, result, _cardsList$cards, _cardsList$cards2;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true,
                error: null
              }));
              localDeUnaToken = JSON.parse(localStorage.getItem('de_una_token'));
              fetchURL = isDeUna ? "".concat(DEUNA_URL, "/users/").concat(localDeUnaToken === null || localDeUnaToken === void 0 ? void 0 : (_localDeUnaToken$user3 = localDeUnaToken.user_data) === null || _localDeUnaToken$user3 === void 0 ? void 0 : (_localDeUnaToken$user4 = _localDeUnaToken$user3.user) === null || _localDeUnaToken$user4 === void 0 ? void 0 : _localDeUnaToken$user4.id, "/cards/").concat(card === null || card === void 0 ? void 0 : card.id) : "https://alsea-plugins".concat(isAlsea ? '' : '-staging-development', ".ordering.co/alseaplatform/api/openpay/cards/delete.php");
              params = {
                method: 'POST',
                body: JSON.stringify({
                  language: ordering.language,
                  user_id: user === null || user === void 0 ? void 0 : user.id,
                  card_id: card === null || card === void 0 ? void 0 : card.id
                }),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId
                }
              };

              if (isDeUna) {
                delete params.body;
                params.method = 'DELETE';
                params.headers = _objectSpread(_objectSpread({}, params), {}, {
                  'X-API-KEY': deUnaApiKey,
                  Authorization: "Bearer ".concat(localDeUnaToken.token)
                });
              }

              _context5.next = 8;
              return fetch(fetchURL, params);

            case 8:
              response = _context5.sent;
              _context5.next = 11;
              return response.json();

            case 11:
              result = _context5.sent;

              if (!isDeUna) {
                _context5.next = 14;
                break;
              }

              return _context5.abrupt("return");

            case 14:
              if ((result === null || result === void 0 ? void 0 : result.result) === 'OK') {
                setCardsList({
                  cards: cardsList === null || cardsList === void 0 ? void 0 : (_cardsList$cards = cardsList.cards) === null || _cardsList$cards === void 0 ? void 0 : _cardsList$cards.filter(function (_card) {
                    return (_card === null || _card === void 0 ? void 0 : _card.id) !== (card === null || card === void 0 ? void 0 : card.id);
                  }),
                  loading: false,
                  error: null
                });
              } else {
                events.emit('general_errors', result === null || result === void 0 ? void 0 : result.result);
                setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                  loading: false,
                  error: [result === null || result === void 0 ? void 0 : result.result]
                }));
              }

              _context5.next = 24;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](0);

              if (!isDeUna) {
                _context5.next = 22;
                break;
              }

              setCardsList({
                cards: cardsList === null || cardsList === void 0 ? void 0 : (_cardsList$cards2 = cardsList.cards) === null || _cardsList$cards2 === void 0 ? void 0 : _cardsList$cards2.filter(function (_card) {
                  return (_card === null || _card === void 0 ? void 0 : _card.id) !== (card === null || card === void 0 ? void 0 : card.id);
                }),
                loading: false,
                error: null
              });
              return _context5.abrupt("return");

            case 22:
              events.emit('general_errors', _context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));

            case 24:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 17]]);
    }));

    return function deleteCard(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var applyMasterCardCoupon = function applyMasterCardCoupon() {
    var _configs$advanced_off2;

    if (!(configs !== null && configs !== void 0 && (_configs$advanced_off2 = configs.advanced_offers_module) !== null && _configs$advanced_off2 !== void 0 && _configs$advanced_off2.value)) {
      applyCoupon({
        business_id: businessId,
        coupon: 'DLVMASTER30'
      });
    } // else {
    //   applyOffer({
    //     business_id: businessId,
    //     coupon: 'DLVMASTER30',
    //     force: true
    //   })
    // }

  };

  (0, _react.useEffect)(function () {
    if (isSdkReady || fromProfile) {
      getCards();
    }
  }, [isSdkReady, fromProfile]);
  return UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cardSelected: cardSelected,
    getCards: getCards,
    cardsList: cardsList,
    handleNewCard: handleNewCard,
    handleCardClick: handleCardClick,
    deleteCard: deleteCard
  }));
};

exports.PaymentOptionOpenPay = PaymentOptionOpenPay;
PaymentOptionOpenPay.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
PaymentOptionOpenPay.defaultProps = {
  body: {},
  currency: 'USD',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};