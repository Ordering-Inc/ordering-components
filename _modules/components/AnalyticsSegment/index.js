"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsSegment = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EventContext = require("../../contexts/EventContext");

var _analyticsNext = require("@segment/analytics-next");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AnalyticsSegment = function AnalyticsSegment(props) {
  var writeKey = props.writeKey,
      children = props.children,
      customData = props.customData,
      debugMode = props.debugMode;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      analytics = _useState2[0],
      setAnalytics = _useState2[1];

  var handleClickProduct = function handleClickProduct(product) {
    if (debugMode) console.log('Segment Product Clicked', product);
    analytics.track('Product Clicked', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    });
  };

  var handleClickPromotionProduct = function handleClickPromotionProduct(product, featured) {
    if (debugMode) console.log('Promotion Clicked', product);
    analytics.track('Promotion Clicked', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    });
  };

  var handleProductAdded = function handleProductAdded(product) {
    if (debugMode) console.log('Segment Product Added', product);
    analytics.track('Product Added', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    });
  };

  var handleProductRemoved = function handleProductRemoved(product) {
    if (debugMode) console.log('Segment Product Removed', product);
    analytics.track('Product Removed', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    });
  };

  var handleOrderPlaced = function handleOrderPlaced(order) {
    var _order$customer, _order$customer2, _order$business, _order$business2;

    if (debugMode) console.log('Segment Order Placed', order);
    analytics.track('Order Placed', {
      total: order === null || order === void 0 ? void 0 : order.total,
      business_id: order === null || order === void 0 ? void 0 : order.business_id,
      customer_email: order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.email,
      customer_phone: order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.cellphone,
      coupon: (order === null || order === void 0 ? void 0 : order.coupon) || 'NA',
      coupon_price: (order === null || order === void 0 ? void 0 : order.offer) || 'NA',
      marca: order === null || order === void 0 ? void 0 : order.app_id,
      nombre_de_la_tienda: order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name,
      order: order === null || order === void 0 ? void 0 : order.id,
      products: order === null || order === void 0 ? void 0 : order.products
    });
    analytics.track('Payment Info Entered', {
      order: order.id,
      business: (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name,
      business_id: order.business_id,
      total: order.total,
      tax: order.tax_total,
      delivery: order.delivery_zone_price,
      paymethod: order.paymethod
    });
  };

  var handleUpdateOrder = function handleUpdateOrder(order) {
    var _order$business3;

    if (debugMode) console.log('Segment Order Updated', order);
    analytics.track('Order Updated', {
      id: order.id,
      affiliation: (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    });
  };

  var handleAddOrder = function handleAddOrder(order) {
    var _order$business4;

    if (debugMode) console.log('Segment Order Added', order);
    analytics.track('Order Added', {
      id: order.id,
      affiliation: (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    });
  };

  var handleLogin = function handleLogin(data) {
    if (debugMode) console.log('Segment Login', data);
    analytics.identify(data.id, {
      email: data.email,
      name: data.name
    });
  };

  var handleCategorySelect = function handleCategorySelect(data) {
    var _data$params;

    if (debugMode) console.log('Category Clicked', data);
    analytics.track('Category Clicked', {
      category: data === null || data === void 0 ? void 0 : (_data$params = data.params) === null || _data$params === void 0 ? void 0 : _data$params.category.name
    });
  };

  var handleInCheckout = function handleInCheckout(data) {
    var _data$business;

    if (debugMode) console.log('Checkout Started', data);
    analytics.track('Checkout Started', {
      nombre_de_la_tienda: data === null || data === void 0 ? void 0 : (_data$business = data.business) === null || _data$business === void 0 ? void 0 : _data$business.name,
      total: data === null || data === void 0 ? void 0 : data.total,
      products: data === null || data === void 0 ? void 0 : data.products
    });
  };

  var handleGoToBusiness = function handleGoToBusiness(storeData) {
    var _storeData$params, _storeData$params2;

    if ((storeData === null || storeData === void 0 ? void 0 : (_storeData$params = storeData.params) === null || _storeData$params === void 0 ? void 0 : _storeData$params.store) !== ':store' && (storeData === null || storeData === void 0 ? void 0 : (_storeData$params2 = storeData.params) === null || _storeData$params2 === void 0 ? void 0 : _storeData$params2.store) !== 'undefined') {
      var _storeData$params3;

      if (debugMode) console.log('Abrir negocio', storeData);
      analytics.track('Abrir negocio', {
        restaurant: storeData === null || storeData === void 0 ? void 0 : (_storeData$params3 = storeData.params) === null || _storeData$params3 === void 0 ? void 0 : _storeData$params3.store
      });
    }
  };

  var handleDeUnaEvents = function handleDeUnaEvents(deUna) {
    var _deUna$data;

    if (debugMode) console.log(deUna);
    analytics.track(deUna.event, (_deUna$data = deUna === null || deUna === void 0 ? void 0 : deUna.data) !== null && _deUna$data !== void 0 ? _deUna$data : 'NA');
  };

  (0, _react.useEffect)(function () {
    if (analytics && !customData) {
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('userLogin', handleLogin);
      events.on('order_placed', handleOrderPlaced);
      events.on('order_updated', handleUpdateOrder); // events.on('order_added', handleAddOrder)

      events.on('cart_product_removed', handleProductRemoved);
      events.on('category_selected', handleCategorySelect);
      events.on('product_promotion_clicked', handleClickPromotionProduct);
      events.on('in-checkout', handleInCheckout);
      events.on('go_to_business', handleGoToBusiness);
      events.on('deuna_checkout_completed', handleGoToBusiness);
      events.on('deuna_checkout_failed_launch', handleDeUnaEvents);
      events.on('deuna_checkout_callback_close', handleDeUnaEvents);
      events.on('deuna_checkout_tokenize_error', handleDeUnaEvents);
      events.on('deuna_vault_completed', handleDeUnaEvents);
      events.on('deuna_vault_failed', handleDeUnaEvents);
      events.on('deuna_vault_close', handleDeUnaEvents);
    }

    if (!customData || !analytics) return;
    var type = customData.type,
        data = customData.data;

    switch (type) {
      case 'Aplicar Cupon':
        if (debugMode) console.log('Segment Aplicar Cupon', data);
        analytics.track('Aplicar Cupon', {
          id: data.id,
          name: data.name
        });
        break;

      case 'Calificar Orden':
        if (debugMode) console.log('Segment Calificar Orden', data);
        analytics.track('Calificar Orden', {
          business_id: data.business_id,
          order_id: data.order_id,
          user_id: data.user_id
        });
        break;

      case 'Abrir banner':
        if (debugMode) console.log('Segment Abrir banner', data);
        analytics.track('Abrir banner', {
          type: data.type,
          brand: data.brand
        });
        break;

      case 'Abrir negocio':
        if (debugMode) console.log('Segment Abrir negocio', data);
        analytics.track('Abrir negocio', {
          id: data.id,
          name: data.name
        });
        break;

      default:
        break;
    }

    return function () {
      if (analytics) {
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('userLogin', handleLogin);
        events.off('order_placed', handleOrderPlaced);
        events.off('order_updated', handleUpdateOrder); // events.off('order_added', handleAddOrder)

        events.off('cart_product_removed', handleProductRemoved);
        events.off('category_selected', handleCategorySelect);
        events.off('product_promotion_clicked', handleClickPromotionProduct);
        events.off('in-checkout', handleInCheckout);
        events.off('go_to_business', handleGoToBusiness);
        events.off('deuna_checkout_completed', handleGoToBusiness);
        events.off('deuna_checkout_failed_launch', handleDeUnaEvents);
        events.off('deuna_checkout_callback_close', handleDeUnaEvents);
        events.off('deuna_checkout_tokenize_error', handleDeUnaEvents);
        events.off('deuna_vault_completed', handleDeUnaEvents);
        events.off('deuna_vault_failed', handleDeUnaEvents);
        events.off('deuna_vault_close', handleDeUnaEvents);
      }
    };
  }, [analytics, customData]);
  (0, _react.useEffect)(function () {
    var loadAnalytics = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$AnalyticsBrows, _yield$AnalyticsBrows2, response;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _analyticsNext.AnalyticsBrowser.load({
                  writeKey: writeKey
                });

              case 2:
                _yield$AnalyticsBrows = _context.sent;
                _yield$AnalyticsBrows2 = _slicedToArray(_yield$AnalyticsBrows, 1);
                response = _yield$AnalyticsBrows2[0];
                setAnalytics(response);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function loadAnalytics() {
        return _ref.apply(this, arguments);
      };
    }();

    loadAnalytics();
  }, [writeKey]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

exports.AnalyticsSegment = AnalyticsSegment;
AnalyticsSegment.propTypes = {
  /**
   * Your Segment Write Key
   * @see writeKey What is Write Key ? https://segment.com/docs/getting-started/02-simple-install/#find-your-write-key
   */
  writeKey: _propTypes.default.string.isRequired
};
AnalyticsSegment.defaultProps = {};