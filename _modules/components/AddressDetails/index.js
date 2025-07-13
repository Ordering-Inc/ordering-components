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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var source, _yield$ordering$busin, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            source = {};
            requestsState.business = source;
            _context.n = 1;
            return ordering.businesses(businessId).select(['location', 'logo']).get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$busin = _context.v;
            result = _yield$ordering$busin.content.result;
            setLogo(result.logo);
            setLocation(result.location);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
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