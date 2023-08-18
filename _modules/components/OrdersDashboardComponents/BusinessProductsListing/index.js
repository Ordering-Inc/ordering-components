"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _EventContext = require("../../../contexts/EventContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var BusinessProductsListing = function BusinessProductsListing(props) {
  var _businessState$busine9;
  var isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    slug = props.slug,
    categoryId = props.categoryId,
    productId = props.productId,
    isAllCategoryProducts = props.isAllCategoryProducts,
    isInitialRender = props.isInitialRender,
    ordering = props.ordering,
    UIComponent = props.UIComponent;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    categorySelected = _useState2[0],
    setCategorySelected = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)({
      business: {},
      menus: null,
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    businessState = _useState6[0],
    setBusinessState = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    categoriesState = _useState8[0],
    setCategoriesState = _useState8[1];
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    requestsState = _useState10[0],
    setRequestsState = _useState10[1];
  var _useState11 = (0, _react.useState)({
      product: null,
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    productModal = _useState12[0],
    setProductModal = _useState12[1];
  var _useState13 = (0, _react.useState)({
      values: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    openCategories = _useState14[0],
    setOpenCategories = _useState14[1];
  var _useState15 = (0, _react.useState)(slug),
    _useState16 = _slicedToArray(_useState15, 2),
    businessSlug = _useState16[0],
    setBusinessSlug = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isUpdateMode = _useState18[0],
    setIsUpdateMode = _useState18[1];
  var _useState19 = (0, _react.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    taxes = _useState20[0],
    setTaxes = _useState20[1];
  var _useState21 = (0, _react.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    fees = _useState22[0],
    setFees = _useState22[1];
  var _useState23 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    formTaxState = _useState24[0],
    setFormTaxState = _useState24[1];
  var _useState25 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    formFeeState = _useState26[0],
    setFormFeeState = _useState26[1];
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    businessTypes = _useState28[0],
    setBusinessTypes = _useState28[1];
  var _useState29 = (0, _react.useState)({
      site: null,
      loading: false,
      error: null
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    siteState = _useState30[0],
    setSiteState = _useState30[1];
  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 10,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };
  var _useState31 = (0, _react.useState)(categoryStateDefault),
    _useState32 = _slicedToArray(_useState31, 2),
    categoryState = _useState32[0],
    setCategoryState = _useState32[1];
  var _useState33 = (0, _react.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    errors = _useState34[0],
    setErrors = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    errorQuantityProducts = _useState36[0],
    setErrorQuantityProducts = _useState36[1];

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  var handleChangeCategory = function handleChangeCategory(e, category) {
    var _e$target, _e$target2, _category$subcategori;
    if (e === null && category === null) {
      setCategorySelected(null);
    }
    var isInvalid = (e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest) && ((e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.closest('.business_enable_control')) || e.target.closest('.business_actions'));
    if (isInvalid || (category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) return;
    setIsUpdateMode(false);
    if (category !== null && category !== void 0 && (_category$subcategori = category.subcategories) !== null && _category$subcategori !== void 0 && _category$subcategori.length) {
      if (!(category !== null && category !== void 0 && category.parent_category_id)) {
        openCategories.values = [];
      }
      if (openCategories.values.includes(category === null || category === void 0 ? void 0 : category.id)) {
        openCategories.values = openCategories.values.filter(function (categoryId) {
          return categoryId !== (category === null || category === void 0 ? void 0 : category.id);
        });
      } else {
        openCategories.values.push(category === null || category === void 0 ? void 0 : category.id);
      }
      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: openCategories.values
      }));
    }
    if ((category === null || category === void 0 ? void 0 : category.id) === null) {
      setOpenCategories(_objectSpread(_objectSpread({}, openCategories), {}, {
        values: []
      }));
    }
    setCategorySelected(category);
  };

  /**
   * Change search value
   * @param {string} search search string
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  var isMatchSearch = function isMatchSearch(name, description) {
    if (!searchValue) return true;
    return name && name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || description && description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
  };
  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, currentPage, currentPageSize) {
      var _businessState$busine;
      var _categoryState, _businessState$busine2, _categoryFinded, _categoryFinded2, _productsFinded, categoryFinded, _categories, productsFinded, productsFiltered, _categorySelected$pro, _businessState$busine3, _businessState$busine4, _productsFiltered, categoryKey, categoryState, pagination, parameters, where, searchConditions, _businessState$busine5, _businessState$busine6, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.lazy_load_products_recommended) {
              _context.next = 5;
              break;
            }
            _categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
              loading: false
            });
            if (categorySelected) {
              _categories = _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.categories);
              _categories.forEach(function iterate(category) {
                if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) {
                  categoryFinded = category;
                }
                Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
              });
              productsFinded = _toConsumableArray((_categoryFinded = categoryFinded) === null || _categoryFinded === void 0 ? void 0 : _categoryFinded.products);
              if (categoryFinded && (_categoryFinded2 = categoryFinded) !== null && _categoryFinded2 !== void 0 && _categoryFinded2.subcategories) {
                categoryFinded.subcategories.forEach(function iterate(category) {
                  productsFinded = [].concat(_toConsumableArray(productsFinded), _toConsumableArray(category.products));
                  Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
                });
              }
              productsFiltered = (_productsFinded = productsFinded) === null || _productsFinded === void 0 ? void 0 : _productsFinded.filter(function (product) {
                return isMatchSearch(product.name, product.description);
              });
              if (!productsFiltered) {
                productsFiltered = categorySelected === null || categorySelected === void 0 ? void 0 : (_categorySelected$pro = categorySelected.products) === null || _categorySelected$pro === void 0 ? void 0 : _categorySelected$pro.filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
              }
              _categoryState.products = productsFiltered || [];
            } else {
              _productsFiltered = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : (_businessState$busine4 = _businessState$busine3.categories) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.reduce(function (products, category) {
                if (category.products) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }
                return _toConsumableArray(products);
              }, []).filter(function (product) {
                return isMatchSearch(product.name, product.description);
              });
              _categoryState.products = _productsFiltered || [];
            }
            setCategoryState(_objectSpread(_objectSpread({}, _categoryState), {}, {
              products: _toConsumableArray(new Map(_categoryState.products.map(function (item) {
                return [item.id, item];
              })).values())
            }));
            return _context.abrupt("return");
          case 5:
            categoryKey = searchValue ? 'search' : (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === 'featured' ? 'featured' : categorySelected !== null && categorySelected !== void 0 && categorySelected.id ? "categoryId:".concat(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) : 'all';
            categoryState = categoriesState[categoryKey] || categoryStateDefault;
            pagination = categoryState.pagination;
            if (!isUpdateMode) {
              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: true
              }));
            }
            parameters = {
              page: currentPage || (newFetch ? 1 : pagination.currentPage + 1),
              page_size: currentPageSize || pagination.pageSize
            };
            where = null;
            searchConditions = [];
            if (searchValue) {
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
            }
            where = {
              conditions: searchConditions,
              conector: 'OR'
            };
            _context.prev = 14;
            functionFetch = categorySelected !== null && categorySelected !== void 0 && categorySelected.id && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) !== 'featured' ? ordering.businesses((_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id).categories(categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id).products() : ordering.businesses((_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.id).products();
            source = {};
            requestsState.products = source;
            setRequestsState(_objectSpread({}, requestsState));
            productEndpoint = where.conditions.length > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
            _context.next = 22;
            return productEndpoint.get({
              cancelToken: source
            });
          case 22:
            _yield$productEndpoin = _context.sent;
            _yield$productEndpoin2 = _yield$productEndpoin.content;
            error = _yield$productEndpoin2.error;
            result = _yield$productEndpoin2.result;
            _pagination = _yield$productEndpoin2.pagination;
            if (!error) {
              newcategoryState = {
                pagination: _objectSpread(_objectSpread({}, categoryState.pagination), {}, {
                  pageSize: _pagination.page_size === 0 ? categoryState.pagination.pageSize : _pagination.page_size,
                  currentPage: _pagination.current_page,
                  totalItems: _pagination.total,
                  totalPages: _pagination.total_pages
                }),
                loading: false,
                products: newFetch ? _toConsumableArray(result) : [].concat(_toConsumableArray(categoryState.products), _toConsumableArray(result))
              };
              categoriesState[categoryKey] = newcategoryState;
              setCategoryState(_objectSpread(_objectSpread({}, newcategoryState), {}, {
                products: _toConsumableArray(new Map(newcategoryState.products.map(function (item) {
                  return [item.id, item];
                })).values())
              }));
              setCategoriesState(_objectSpread({}, categoriesState));
            } else {
              setErrors(result);
            }
            _context.next = 33;
            break;
          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](14);
            setErrors([_context.t0.message]);
          case 33:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[14, 30]]);
    }));
    return function getProducts(_x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  var getProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _businessState$busine7;
      var _businessState$busine8, source, _yield$ordering$busin, result, product;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(categoryId && productId && (_businessState$busine7 = businessState.business) !== null && _businessState$busine7 !== void 0 && _businessState$busine7.id)) {
              _context2.next = 16;
              break;
            }
            _context2.prev = 1;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: true
            }));
            source = {};
            requestsState.product = source;
            _context2.next = 7;
            return ordering.businesses((_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.id).categories(categoryId).products(productId).get({
              cancelToken: source
            });
          case 7:
            _yield$ordering$busin = _context2.sent;
            result = _yield$ordering$busin.content.result;
            product = Array.isArray(result) ? null : result;
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              product: product,
              loading: false
            }));
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
              loading: false,
              error: [_context2.t0]
            }));
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 13]]);
    }));
    return function getProduct() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getTaxes = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var taxesObject, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            taxesObject = {};
            setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
              loading: true
            }));
            _context3.next = 4;
            return fetch("".concat(ordering.root, "/taxes"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();
          case 7:
            _yield$response$json = _context3.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context3.next = 14;
              break;
            }
            result.forEach(function (tax) {
              return taxesObject["id:".concat(tax === null || tax === void 0 ? void 0 : tax.id)] = tax;
            });
            setTaxes(taxesObject);
            return _context3.abrupt("return");
          case 14:
            setFormTaxState(_objectSpread(_objectSpread({}, formTaxState), {}, {
              result: {
                error: true,
                result: taxesObject
              },
              loading: false
            }));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getTaxes() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getFees = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var feesObject, response, _yield$response$json2, error, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            feesObject = {};
            setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
              loading: true
            }));
            _context4.next = 4;
            return fetch("".concat(ordering.root, "/fees"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context4.sent;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (error) {
              _context4.next = 14;
              break;
            }
            result.forEach(function (fee) {
              return feesObject["id:".concat(fee === null || fee === void 0 ? void 0 : fee.id)] = fee;
            });
            setFees(feesObject);
            return _context4.abrupt("return");
          case 14:
            setFormFeeState(_objectSpread(_objectSpread({}, formFeeState), {}, {
              result: {
                error: true,
                result: feesObject
              },
              loading: false
            }));
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getFees() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Method to get the themes from API
   */
  var getSites = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var requestOptions, response, _yield$response$json3, error, result, site;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context5.next = 5;
            return fetch("".concat(ordering.root, "/sites"), requestOptions);
          case 5:
            response = _context5.sent;
            _context5.next = 8;
            return response.json();
          case 8:
            _yield$response$json3 = _context5.sent;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              site = result.find(function (site) {
                return site.code === 'website';
              });
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                site: site
              }));
            } else {
              setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
                loading: false,
                error: result
              }));
            }
            _context5.next = 17;
            break;
          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            setSiteState(_objectSpread(_objectSpread({}, siteState), {}, {
              loading: false,
              error: [_context5.t0.message]
            }));
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return function getSites() {
      return _ref5.apply(this, arguments);
    };
  }();
  var getBusinessTypes = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response, _yield$response$json4, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch("".concat(ordering.root, "/business_types?where=[{\"attribute\":\"enabled\",\"value\":true}]"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 3:
            response = _context6.sent;
            _context6.next = 6;
            return response.json();
          case 6:
            _yield$response$json4 = _context6.sent;
            error = _yield$response$json4.error;
            result = _yield$response$json4.result;
            if (!error) {
              setBusinessTypes(result);
            }
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message);
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 12]]);
    }));
    return function getBusinessTypes() {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine9 = businessState.business) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.id), isInitialRender]);
  (0, _react.useEffect)(function () {
    setBusinessSlug(slug);
  }, [slug]);
  var getBusiness = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var _result$categories, source, _yield$ordering$busin2, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            source = {};
            requestsState.business = source;
            setRequestsState(_objectSpread({}, requestsState));
            _context7.next = 7;
            return ordering.businesses(businessSlug).asDashboard().get();
          case 7:
            _yield$ordering$busin2 = _context7.sent;
            result = _yield$ordering$busin2.content.result;
            if (!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 ? void 0 : (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0) {
              setErrorQuantityProducts(true);
            }
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              business: result,
              loading: false
            }));
            _context7.next = 16;
            break;
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 13]]);
    }));
    return function getBusiness() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Method to update the business
   */
  var handleUpdateBusinessState = function handleUpdateBusinessState(result) {
    setIsUpdateMode(true);
    var business = _objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business);
    Object.assign(business, result);
    if (categorySelected) {
      business.categories.forEach(function iterate(category) {
        if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) {
          setCategorySelected(category);
        }
        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });
    }
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: business
    }));
  };

  /**
   * Method to update the category state
   */
  var handleUpdateCategoryState = function handleUpdateCategoryState(updatedCategory) {
    setCategoryState(updatedCategory);
  };
  var handleUpdateTaxesProducts = function handleUpdateTaxesProducts(_ref8) {
    var _businessState$busine10;
    var tax = _ref8.tax,
      isRemove = _ref8.isRemove,
      id = _ref8.id;
    var _categories = _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : _businessState$busine10.categories);
    var replaceSameTaxes = function replaceSameTaxes(categories, tax) {
      for (var i = 0; i < (categories === null || categories === void 0 ? void 0 : categories.length); i++) {
        var _category$subcategori2;
        var category = categories[i];
        for (var j = 0; j < category.products.length; j++) {
          var _product$tax, _product$tax2;
          var product = category.products[j];
          if (isRemove && ((_product$tax = product.tax) === null || _product$tax === void 0 ? void 0 : _product$tax.id) === (tax === null || tax === void 0 ? void 0 : tax.id)) {
            product.tax = null;
            product.tax_id = null;
          } else if (product.tax && ((_product$tax2 = product.tax) === null || _product$tax2 === void 0 ? void 0 : _product$tax2.id) === (tax === null || tax === void 0 ? void 0 : tax.id)) {
            Object.assign(product.tax, tax);
            product.tax_id = tax === null || tax === void 0 ? void 0 : tax.id;
          }
        }
        if (((_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0) {
          categories.subcategories = replaceSameTaxes(categories.subcategories, tax);
        }
      }
      return categories;
    };
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: replaceSameTaxes(_categories, tax)
      })
    }));
  };
  var handleUpdateFeesProducts = function handleUpdateFeesProducts(_ref9) {
    var _businessState$busine11;
    var fee = _ref9.fee,
      isRemove = _ref9.isRemove;
    var _categories = _toConsumableArray(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine11 = businessState.business) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.categories);
    var replaceSameFees = function replaceSameFees(categories, fee) {
      for (var i = 0; i < (categories === null || categories === void 0 ? void 0 : categories.length); i++) {
        var _category$subcategori3;
        var category = categories[i];
        for (var j = 0; j < category.products.length; j++) {
          var _product$fee, _product$fee2;
          var product = category.products[j];
          if (isRemove && ((_product$fee = product.fee) === null || _product$fee === void 0 ? void 0 : _product$fee.id) === (fee === null || fee === void 0 ? void 0 : fee.id)) {
            product.fee = null;
            product.fee_id = null;
          } else if (product.fee && ((_product$fee2 = product.fee) === null || _product$fee2 === void 0 ? void 0 : _product$fee2.id) === (fee === null || fee === void 0 ? void 0 : fee.id)) {
            Object.assign(product.fee, fee);
            product.fee_id = fee === null || fee === void 0 ? void 0 : fee.id;
          }
        }
        if (((_category$subcategori3 = category.subcategories) === null || _category$subcategori3 === void 0 ? void 0 : _category$subcategori3.length) > 0) {
          categories.subcategories = replaceSameFees(categories.subcategories, fee);
        }
      }
      return categories;
    };
    setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
      business: _objectSpread(_objectSpread({}, businessState.business), {}, {
        categories: replaceSameFees(_categories, fee)
      })
    }));
  };
  (0, _react.useEffect)(function () {
    if (businessState.loading) return;
    if (!businessState.loading && (categorySelected || isAllCategoryProducts)) {
      getProducts(true);
    }
  }, [businessState]);
  (0, _react.useEffect)(function () {
    if (searchValue !== null) getProducts(!!searchValue);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue, 1);
  }, [categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id]);
  (0, _react.useEffect)(function () {
    if (businessSlug) {
      getBusiness();
    } else {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        loading: false,
        business: {}
      }));
      setCategoriesState({});
      setCategoryState(_objectSpread(_objectSpread({}, categoryStateDefault), {}, {
        loading: false
      }));
      setCategorySelected(null);
    }
  }, [businessSlug]);
  (0, _react.useEffect)(function () {
    var _Object$keys;
    if (!(businessState !== null && businessState !== void 0 && businessState.business)) return;
    if (((_Object$keys = Object.keys(businessState === null || businessState === void 0 ? void 0 : businessState.business)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      events.on('tax_changed', handleUpdateTaxesProducts);
      events.on('fee_changed', handleUpdateFeesProducts);
      events.on('tax_deleted', handleUpdateTaxesProducts);
      events.on('fee_deleted', handleUpdateFeesProducts);
      return function () {
        events.off('tax_changed', handleUpdateTaxesProducts);
        events.off('fee_changed', handleUpdateFeesProducts);
        events.off('tax_deleted', handleUpdateFeesProducts);
        events.off('fee_deleted', handleUpdateFeesProducts);
      };
    }
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);

  /**
   * Cancel business request
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.business]);

  /**
   * Cancel products request on unmount and pagination
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.products]);
  (0, _react.useEffect)(function () {
    getTaxes();
    getFees();
    getBusinessTypes();
    getSites();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    errorQuantityProducts: errorQuantityProducts,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    getPageProducts: getProducts,
    getBusiness: getBusiness,
    setCategorySelected: setCategorySelected,
    setBusinessState: setBusinessState,
    handleUpdateBusinessState: handleUpdateBusinessState,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    },
    openCategories: openCategories.values,
    setOpenCategories: setOpenCategories,
    setBusinessSlug: setBusinessSlug,
    handleUpdateCategoryState: handleUpdateCategoryState,
    setFormTaxState: setFormTaxState,
    formTaxState: formTaxState,
    taxes: taxes,
    setTaxes: setTaxes,
    fees: fees,
    setFees: setFees,
    businessTypes: businessTypes,
    setBusinessTypes: setBusinessTypes,
    siteState: siteState
  })));
};
exports.BusinessProductsListing = BusinessProductsListing;
BusinessProductsListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByName: _propTypes.default.bool,
  /**
   * true, flag to decide search parmeter
   */
  isSearchByDescription: _propTypes.default.bool,
  /**
   * Slug from Store
   */
  slug: _propTypes.default.string,
  /**
   * True, flag to make initial API call
   */
  isInitialRender: _propTypes.default.bool
};
BusinessProductsListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};