"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsSegment = void 0;
var _react = _interopRequireWildcard(require("react"));
var _EventContext = require("../../contexts/EventContext");
var _analyticsNext = require("@segment/analytics-next");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AnalyticsSegment = exports.AnalyticsSegment = function AnalyticsSegment(props) {
  var writeKey = props.writeKey,
    children = props.children;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    analytics = _useState2[0],
    setAnalytics = _useState2[1];
  var handleClickProduct = function handleClickProduct(product) {
    analytics.track('Product Clicked', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      featured: product.featured
    });
  };
  var handleProductAdded = function handleProductAdded(product) {
    analytics.track('Product Added', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    });
  };
  var handleProductRemoved = function handleProductRemoved(product) {
    analytics.track('Product Removed', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    });
  };
  var handleOrderPlaced = function handleOrderPlaced(order) {
    var _order$business, _order$business2;
    analytics.track('Order Placed', {
      id: order.id,
      affiliation: (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
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
    analytics.track('Order Added', {
      id: order.id,
      affiliation: (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name,
      revenue: order.total,
      tax: order.tax_total,
      shipping: order.delivery_zone_price
    });
  };
  var handleLogin = function handleLogin(data) {
    analytics.identify(data.id, {
      email: data.email,
      name: data.name
    });
  };
  var handleChangeView = function handleChangeView(pageName) {
    analytics.track('Page View', {
      page: pageName === null || pageName === void 0 ? void 0 : pageName.page
    });
  };
  (0, _react.useEffect)(function () {
    if (analytics) {
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('userLogin', handleLogin);
      events.on('order_placed', handleOrderPlaced);
      events.on('order_updated', handleUpdateOrder);
      events.on('order_added', handleAddOrder);
      events.on('cart_product_removed', handleProductRemoved);
      events.on('change_view', handleChangeView);
    }
    return function () {
      if (analytics) {
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('userLogin', handleLogin);
        events.off('order_placed', handleOrderPlaced);
        events.off('order_updated', handleUpdateOrder);
        events.off('order_added', handleAddOrder);
        events.off('cart_product_removed', handleProductRemoved);
        events.off('change_view', handleChangeView);
      }
    };
  }, [analytics]);
  (0, _react.useEffect)(function () {
    var loadAnalytics = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$AnalyticsBrows, _yield$AnalyticsBrows2, response;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _analyticsNext.AnalyticsBrowser.load({
                writeKey: writeKey
              });
            case 1:
              _yield$AnalyticsBrows = _context.v;
              _yield$AnalyticsBrows2 = _slicedToArray(_yield$AnalyticsBrows, 1);
              response = _yield$AnalyticsBrows2[0];
              setAnalytics(response);
            case 2:
              return _context.a(2);
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
AnalyticsSegment.propTypes = {
  /**
   * Your Segment Write Key
   * @see writeKey What is Write Key ? https://segment.com/docs/getting-started/02-simple-install/#find-your-write-key
   */
  writeKey: _propTypes.default.string.isRequired
};
AnalyticsSegment.defaultProps = {};