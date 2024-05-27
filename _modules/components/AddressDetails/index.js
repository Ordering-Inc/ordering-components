"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to manage address details behavior without UI component
 */
var AddressDetails = exports.AddressDetails = function AddressDetails(props) {
  var _configs$google_maps_, _Object$values$find$b, _Object$values$find, _orderState$options2;
  var apiKey = props.apiKey,
    UIComponent = props.UIComponent,
    mapConfigs = props.mapConfigs,
    isMultiCheckout = props.isMultiCheckout,
    openCarts = props.openCarts,
    cart = props.cart,
    primaryColor = props.primaryColor;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var GM_API_KEY = apiKey || (configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value);
  var requestsState = {};

  /**
   * This must be contains an object with business location
   */
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    location = _useState2[0],
    setLocation = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    formatUrl = _useState4[0],
    setFormatUrl = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    logo = _useState6[0],
    setLogo = _useState6[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var businessId = props.uuid ? (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === props.uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {} : props.businessId;
  /**
   * Method to format google url for business location
   */

  var formatUrlMethod = function formatUrlMethod(businessLocation) {
    var _orderState$options, _mapConfigs$mapSize, _mapConfigs$mapSize2, _mapConfigs$mapSize3, _mapConfigs$mapSize4;
    var orderLocation = props.orderLocation || (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location);
    var businessesMarkers = '';
    var firstLetterBusinessName = '';
    if (isMultiCheckout) {
      openCarts.forEach(function (cart) {
        var _cart$business$name$c, _cart$business, _cart$business$toUppe, _cart$business2, _cart$business3;
        firstLetterBusinessName = (_cart$business$name$c = cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 || (_cart$business = _cart$business.name) === null || _cart$business === void 0 || (_cart$business = _cart$business.charAt(0)) === null || _cart$business === void 0 || (_cart$business$toUppe = _cart$business.toUpperCase) === null || _cart$business$toUppe === void 0 ? void 0 : _cart$business$toUppe.call(_cart$business)) !== null && _cart$business$name$c !== void 0 ? _cart$business$name$c : 'S';
        businessesMarkers += "&markers=label:".concat(firstLetterBusinessName, "%7Ccolor:").concat(primaryColor, "%7C").concat((_cart$business2 = cart.business) === null || _cart$business2 === void 0 || (_cart$business2 = _cart$business2.location) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.lat, ",").concat((_cart$business3 = cart.business) === null || _cart$business3 === void 0 || (_cart$business3 = _cart$business3.location) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.lng);
      });
    } else {
      var _cart$business$name$c2, _cart$business4, _cart$business4$toUpp, _cart$business$locati, _cart$business5, _businessLocation$loc, _cart$business$locati2, _cart$business6, _businessLocation$loc2;
      firstLetterBusinessName = (_cart$business$name$c2 = cart === null || cart === void 0 || (_cart$business4 = cart.business) === null || _cart$business4 === void 0 || (_cart$business4 = _cart$business4.name) === null || _cart$business4 === void 0 || (_cart$business4 = _cart$business4.charAt(0)) === null || _cart$business4 === void 0 || (_cart$business4$toUpp = _cart$business4.toUpperCase) === null || _cart$business4$toUpp === void 0 ? void 0 : _cart$business4$toUpp.call(_cart$business4)) !== null && _cart$business$name$c2 !== void 0 ? _cart$business$name$c2 : 'S';
      businessesMarkers = "&markers=label:".concat(firstLetterBusinessName, "%7Ccolor:").concat(primaryColor, "%7C").concat((_cart$business$locati = (_cart$business5 = cart.business) === null || _cart$business5 === void 0 || (_cart$business5 = _cart$business5.location) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.lat) !== null && _cart$business$locati !== void 0 ? _cart$business$locati : businessLocation === null || businessLocation === void 0 || (_businessLocation$loc = businessLocation.location) === null || _businessLocation$loc === void 0 ? void 0 : _businessLocation$loc.lat, ",").concat((_cart$business$locati2 = (_cart$business6 = cart.business) === null || _cart$business6 === void 0 || (_cart$business6 = _cart$business6.location) === null || _cart$business6 === void 0 ? void 0 : _cart$business6.lng) !== null && _cart$business$locati2 !== void 0 ? _cart$business$locati2 : businessLocation === null || businessLocation === void 0 || (_businessLocation$loc2 = businessLocation.location) === null || _businessLocation$loc2 === void 0 ? void 0 : _businessLocation$loc2.lng);
    }
    var staticmapUrl = isMultiCheckout ? "https://maps.googleapis.com/maps/api/staticmap?size=".concat((mapConfigs === null || mapConfigs === void 0 || (_mapConfigs$mapSize = mapConfigs.mapSize) === null || _mapConfigs$mapSize === void 0 ? void 0 : _mapConfigs$mapSize.width) || 500, "x").concat((mapConfigs === null || mapConfigs === void 0 || (_mapConfigs$mapSize2 = mapConfigs.mapSize) === null || _mapConfigs$mapSize2 === void 0 ? void 0 : _mapConfigs$mapSize2.height) || 190, "&scale=2&maptype=roadmap&markers=icon:%7Ccolor:red%7C").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lat, ",").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lng).concat(businessesMarkers, "&key=").concat(GM_API_KEY) : "https://maps.googleapis.com/maps/api/staticmap?size=".concat((mapConfigs === null || mapConfigs === void 0 || (_mapConfigs$mapSize3 = mapConfigs.mapSize) === null || _mapConfigs$mapSize3 === void 0 ? void 0 : _mapConfigs$mapSize3.width) || 500, "x").concat((mapConfigs === null || mapConfigs === void 0 || (_mapConfigs$mapSize4 = mapConfigs.mapSize) === null || _mapConfigs$mapSize4 === void 0 ? void 0 : _mapConfigs$mapSize4.height) || 190, "&scale=2&maptype=roadmap&markers=color:red%7C").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lat, ",").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lng).concat(businessesMarkers, "&key=").concat(GM_API_KEY);
    return staticmapUrl;
  };
  /**
   * Method to get business location from API
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var source, _yield$ordering$busin, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            source = {};
            requestsState.business = source;
            _context.next = 5;
            return ordering.businesses(businessId).select(['location', 'logo']).get({
              cancelToken: source
            });
          case 5:
            _yield$ordering$busin = _context.sent;
            result = _yield$ordering$busin.content.result;
            setLogo(result.logo);
            setLocation(result.location);
            _context.next = 13;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isMultiCheckout) return;
    if (props.location && props.businessLogo && !props.uuid) {
      setLocation(props.location);
      setLogo(props.businessLogo);
    } else {
      getBusiness();
    }
    return function () {
      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, [businessId, isMultiCheckout, props.location]);
  (0, _react.useEffect)(function () {
    if (!logo || !location) return;
    setFormatUrl(formatUrlMethod(location));
  }, [logo, JSON.stringify(location), JSON.stringify(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.address)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    googleMapsUrl: isMultiCheckout ? formatUrlMethod() : formatUrl
  })));
};
AddressDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * location, business location with lat, lng and zoom properties
   */
  business: _propTypes.default.object,
  /**
   * business, object with business info, should be contains address and locations property
   */
  businessId: _propTypes.default.number,
  /**
   * Components types before Address Details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Address Details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  primaryColor: 'red'
};