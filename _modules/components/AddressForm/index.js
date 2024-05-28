"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _OrderContext = require("../../contexts/OrderContext");
var _ValidationsFieldsContext = require("../../contexts/ValidationsFieldsContext");
var _CustomerContext = require("../../contexts/CustomerContext");
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
var AddressForm = function AddressForm(props) {
  var UIComponent = props.UIComponent,
    addressId = props.addressId,
    address = props.address,
    useValidationFileds = props.useValidationFileds,
    onSaveAddress = props.onSaveAddress,
    isSelectedAfterAdd = props.isSelectedAfterAdd,
    onSaveCustomAddress = props.onSaveCustomAddress,
    franchiseId = props.franchiseId,
    handleGoToLogin = props.handleGoToLogin,
    avoidRefreshUserInfo = props.avoidRefreshUserInfo;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useValidationFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useState = (0, _react.useState)({
      loading: false,
      error: null,
      address: address || {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    addressState = _useState2[0],
    setAddressState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      changes: {},
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    userByToken = _useState6[0],
    setUserByToken = _useState6[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user,
    token = _useSession2$.token,
    refreshUserInfo = _useSession2[1].refreshUserInfo;
  var requestsState = {};
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    options = _useOrder2[0].options,
    changeAddress = _useOrder2[1].changeAddress;
  var userId = props.userId || (user === null || user === void 0 ? void 0 : user.id);
  var accessToken = props.accessToken || token;
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isEdit = _useState8[0],
    _setIsEdit = _useState8[1];
  var _useState9 = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    businessesList = _useState10[0],
    setBusinessesList = _useState10[1];

  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */
  var loadAddress = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userId, addressId) {
      var source, _yield$ordering$users, content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
              loading: true
            }));
            source = {};
            requestsState.address = source;
            _context.next = 6;
            return ordering.users(userId).addresses(addressId).get({
              accessToken: accessToken,
              cancelToken: source
            });
          case 6:
            _yield$ordering$users = _context.sent;
            content = _yield$ordering$users.content;
            setAddressState({
              loading: false,
              error: content.error ? content.result : null,
              address: content.error ? {} : content.result
            });
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            if (_context.t0.constructor.name !== 'Cancel') {
              setAddressState({
                loading: false,
                error: [_context.t0.message],
                address: {}
              });
            }
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function loadAddress(_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    updateChanges(_defineProperty({}, e.target.name, e.target.value));
  };

  /**
   * Update address data
   * @param {object} changes object with changes
   */
  var updateChanges = function updateChanges(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _validationFields$fie7;
    return !useValidationFileds || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie2 = _validationFields$fie.address) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2[fieldName]) || !validationFields.loading && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.address) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.address) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6[fieldName]) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.enabled);
  };

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _validationFields$fie11, _validationFields$fie12, _validationFields$fie13, _validationFields$fie14, _validationFields$fie15;
    return useValidationFileds && !validationFields.loading && ((_validationFields$fie8 = validationFields.fields) === null || _validationFields$fie8 === void 0 ? void 0 : (_validationFields$fie9 = _validationFields$fie8.address) === null || _validationFields$fie9 === void 0 ? void 0 : _validationFields$fie9[fieldName]) && ((_validationFields$fie10 = validationFields.fields) === null || _validationFields$fie10 === void 0 ? void 0 : (_validationFields$fie11 = _validationFields$fie10.address) === null || _validationFields$fie11 === void 0 ? void 0 : (_validationFields$fie12 = _validationFields$fie11[fieldName]) === null || _validationFields$fie12 === void 0 ? void 0 : _validationFields$fie12.enabled) && ((_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 ? void 0 : (_validationFields$fie14 = _validationFields$fie13.address) === null || _validationFields$fie14 === void 0 ? void 0 : (_validationFields$fie15 = _validationFields$fie14[fieldName]) === null || _validationFields$fie15 === void 0 ? void 0 : _validationFields$fie15.required);
  };

  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */
  var saveAddress = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values, userCustomerSetup) {
      var _userByToken$session;
      var _values$country_code, _formState$changes, _addressState$address, _userByToken$session2, _yield$ordering$users2, content, _content$result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!onSaveCustomAddress) {
              _context2.next = 3;
              break;
            }
            onSaveCustomAddress(values);
            return _context2.abrupt("return");
          case 3:
            if (!(!auth && !(userByToken !== null && userByToken !== void 0 && (_userByToken$session = userByToken.session) !== null && _userByToken$session !== void 0 && _userByToken$session.token))) {
              _context2.next = 7;
              break;
            }
            changeAddress(_objectSpread(_objectSpread({}, values), formState.changes), {
              country_code: (_values$country_code = values === null || values === void 0 ? void 0 : values.country_code) !== null && _values$country_code !== void 0 ? _values$country_code : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.country_code
            });
            onSaveAddress && onSaveAddress(formState.changes);
            return _context2.abrupt("return");
          case 7:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context2.prev = 8;
            _context2.next = 11;
            return ordering.users((userByToken === null || userByToken === void 0 ? void 0 : userByToken.id) || userId).addresses((_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.id).save(_objectSpread(_objectSpread({}, values), formState.changes), {
              accessToken: (userByToken === null || userByToken === void 0 ? void 0 : (_userByToken$session2 = userByToken.session) === null || _userByToken$session2 === void 0 ? void 0 : _userByToken$session2.token) || accessToken
            });
          case 11:
            _yield$ordering$users2 = _context2.sent;
            content = _yield$ordering$users2.content;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              error: content.error ? content.result : null,
              changes: content.error ? formState.changes : {}
            }));
            if (!content.error) {
              setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
                address: content.result
              }));
              onSaveAddress && onSaveAddress(content.result);
              if (isSelectedAfterAdd) {
                changeAddress(content.result.id, {
                  address: isEdit ? null : content.result,
                  country_code: (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.country_code,
                  type: options === null || options === void 0 ? void 0 : options.type,
                  isEdit: isEdit
                });
              }
            }
            if (!userCustomerSetup) {
              _context2.next = 18;
              break;
            }
            _context2.next = 18;
            return setUserCustomer(userCustomerSetup, true);
          case 18:
            if (!avoidRefreshUserInfo) {
              refreshUserInfo();
            }
            _context2.next = 24;
            break;
          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](8);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              error: [_context2.t0.message],
              address: {}
            }));
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[8, 21]]);
    }));
    return function saveAddress(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getBusinessDeliveryZones = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(location) {
      var where, conditions, parameters, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (location) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true,
              businesses: []
            }));
            where = null;
            conditions = [];
            parameters = {
              location: "".concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng),
              type: 2,
              page: 1,
              page_size: 20
            };
            if (franchiseId) {
              conditions.push({
                attribute: 'franchise_id',
                value: franchiseId
              });
            }
            where = {
              conditions: conditions,
              conector: 'AND'
            };
            source = {};
            requestsState.businesses = source;
            fetchEndpoint = ordering.businesses().select(['delivery_zone', 'name', 'id', 'location', 'logo', 'slug', 'zones']).parameters(parameters).where(where);
            _context3.next = 14;
            return fetchEndpoint.get({
              cancelToken: source
            });
          case 14:
            _yield$fetchEndpoint$ = _context3.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: error,
              businesses: result.map(function (business) {
                return _objectSpread(_objectSpread({}, business === null || business === void 0 ? void 0 : business.location), {}, {
                  icon: business === null || business === void 0 ? void 0 : business.logo,
                  slug: business === null || business === void 0 ? void 0 : business.slug,
                  zones: business === null || business === void 0 ? void 0 : business.zones
                });
              }),
              result: result,
              fetched: true
            }));
            return _context3.abrupt("return", result);
          case 22:
            _context3.prev = 22;
            _context3.t0 = _context3["catch"](2);
            if (_context3.t0.constructor.name !== 'Cancel') {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: true,
                fetched: true,
                result: [_context3.t0.message]
              }));
            }
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 22]]);
    }));
    return function getBusinessDeliveryZones(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getUserByToken = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(props.accessToken)
              }
            };
            _context4.next = 4;
            return fetch("".concat(ordering.root, "/users/me"), requestOptions);
          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return response.json();
          case 7:
            _yield$response$json = _context4.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context4.next = 13;
              break;
            }
            setUserByToken(result);
            return _context4.abrupt("return");
          case 13:
            handleGoToLogin && handleGoToLogin();
            _context4.next = 19;
            break;
          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            handleGoToLogin && handleGoToLogin();
          case 19:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 16]]);
    }));
    return function getUserByToken() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
      address: address || {}
    }));
  }, [address]);
  (0, _react.useEffect)(function () {
    if (addressId && !address) {
      loadAddress(userId, addressId);
    }
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      if (requestsState.address) {
        requestsState.address.cancel();
      }
    };
  }, []);

  /**
  * Cancel businesses request
  */
  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);
  (0, _react.useEffect)(function () {
    if (props.confirmAddress) {
      getUserByToken();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    showField: showField,
    updateChanges: updateChanges,
    handleChangeInput: handleChangeInput,
    isRequiredField: isRequiredField,
    saveAddress: saveAddress,
    addressState: addressState,
    setIsEdit: function setIsEdit(val) {
      return _setIsEdit(val);
    },
    businessesList: businessesList,
    getBusinessDeliveryZones: getBusinessDeliveryZones
  })));
};
exports.AddressForm = AddressForm;
AddressForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Prop to set address after add
   */
  isSelectedAfterAdd: _propTypes.default.bool,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useValidationFileds: _propTypes.default.bool,
  /**
   * Address object to edit
   */
  address: _propTypes.default.object,
  /**
   * User id of the address to load from Ordering API
   * Omit if you use a SessionProvier context and the address is of the logged user
   */
  userId: _propTypes.default.number,
  /**
   * Address id to edit and load from Ordering API
   */
  addressId: _propTypes.default.number,
  /**
   * Address id to edit and load from Ordering API
   */
  onSaveAddress: _propTypes.default.func,
  /**
   * Custom function
   */
  onSaveCustomAddress: _propTypes.default.func,
  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressForm.defaultProps = {
  useValidationFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};