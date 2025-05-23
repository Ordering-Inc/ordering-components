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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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