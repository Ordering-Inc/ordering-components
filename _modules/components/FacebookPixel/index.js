"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookPixel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ConfigContext = require("../../contexts/ConfigContext");
var _EventContext = require("../../contexts/EventContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var FacebookPixel = exports.FacebookPixel = function FacebookPixel(props) {
  var children = props.children,
    trackId = props.trackId;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    facebookPixelReady = _useState2[0],
    setFacebookPixelReady = _useState2[1];
  var init = function init() {
    /* eslint-disable */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', trackId);
    fbq('track', 'PageView');
    setFacebookPixelReady(true);
  };
  (0, _react.useEffect)(function () {
    if (trackId) {
      init();
    }
  }, [trackId]);
  var handleProductAdded = function handleProductAdded(product) {
    var _product$category, _configs$stripe_curre, _configs$stripe_curre2, _product$total;
    fbq('track', 'AddToCart', {
      content_category: product === null || product === void 0 || (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.name,
      content_ids: [product === null || product === void 0 ? void 0 : product.id],
      content_name: product === null || product === void 0 ? void 0 : product.name,
      currency: (_configs$stripe_curre = configs === null || configs === void 0 || (_configs$stripe_curre2 = configs.stripe_currency) === null || _configs$stripe_curre2 === void 0 ? void 0 : _configs$stripe_curre2.value) !== null && _configs$stripe_curre !== void 0 ? _configs$stripe_curre : 'USD',
      value: (_product$total = product === null || product === void 0 ? void 0 : product.total) !== null && _product$total !== void 0 ? _product$total : product === null || product === void 0 ? void 0 : product.price,
      quantity: product === null || product === void 0 ? void 0 : product.quantity
    });
  };
  var handleProductEdited = function handleProductEdited(product) {
    var _product$category2, _configs$stripe_curre3, _configs$stripe_curre4, _product$total2;
    fbq('track', 'CustomizeProduct', {
      content_category: product === null || product === void 0 || (_product$category2 = product.category) === null || _product$category2 === void 0 ? void 0 : _product$category2.name,
      content_ids: [product === null || product === void 0 ? void 0 : product.id],
      content_name: product === null || product === void 0 ? void 0 : product.name,
      currency: (_configs$stripe_curre3 = configs === null || configs === void 0 || (_configs$stripe_curre4 = configs.stripe_currency) === null || _configs$stripe_curre4 === void 0 ? void 0 : _configs$stripe_curre4.value) !== null && _configs$stripe_curre3 !== void 0 ? _configs$stripe_curre3 : 'USD',
      value: (_product$total2 = product === null || product === void 0 ? void 0 : product.total) !== null && _product$total2 !== void 0 ? _product$total2 : product === null || product === void 0 ? void 0 : product.price,
      quantity: product === null || product === void 0 ? void 0 : product.quantity
    });
  };
  var handleOrderPlaced = function handleOrderPlaced(order) {
    var _configs$stripe_curre5, _configs$stripe_curre6;
    fbq('track', 'Purchase', {
      content_ids: [order.id],
      value: order === null || order === void 0 ? void 0 : order.total,
      currency: (_configs$stripe_curre5 = configs === null || configs === void 0 || (_configs$stripe_curre6 = configs.stripe_currency) === null || _configs$stripe_curre6 === void 0 ? void 0 : _configs$stripe_curre6.value) !== null && _configs$stripe_curre5 !== void 0 ? _configs$stripe_curre5 : 'USD'
    });
  };
  var handleSignupUser = function handleSignupUser(user) {
    fbq('track', 'Lead', {
      content_name: "".concat(user === null || user === void 0 ? void 0 : user.name, " ").concat(user === null || user === void 0 ? void 0 : user.last_name),
      content_category: 'signup',
      value: user === null || user === void 0 ? void 0 : user.id
    });
  };
  var handleLoginUser = function handleLoginUser(user) {
    fbq('track', 'Lead', {
      content_name: "".concat(user === null || user === void 0 ? void 0 : user.name, " ").concat(user === null || user === void 0 ? void 0 : user.last_name),
      content_category: 'login',
      value: user === null || user === void 0 ? void 0 : user.id
    });
  };
  var handlePaymentInfo = function handlePaymentInfo(payment) {
    fbq('track', 'AddPaymentInfo', {
      content_category: payment === null || payment === void 0 ? void 0 : payment.gateway,
      content_ids: payment === null || payment === void 0 ? void 0 : payment.id
    });
  };
  var handlechangeView = function handlechangeView(pageName) {
    fbq('track', 'ViewContent', {
      content_name: pageName === null || pageName === void 0 ? void 0 : pageName.page,
      contents: [pageName === null || pageName === void 0 ? void 0 : pageName.params]
    });
  };
  (0, _react.useEffect)(function () {
    if (facebookPixelReady) {
      events.on('userLogin', handleLoginUser);
      events.on('change_view', handlechangeView);
      events.on('product_added', handleProductAdded);
      events.on('product_edited', handleProductEdited);
      events.on('order_placed', handleOrderPlaced);
      events.on('singup_user', handleSignupUser);
      events.on('add_payment_option', handlePaymentInfo);
    }
    return function () {
      if (facebookPixelReady) {
        events.off('userLogin', handleLoginUser);
        events.off('change_view', handlechangeView);
        events.off('product_added', handleProductAdded);
        events.off('product_edited', handleProductEdited);
        events.off('order_placed', handleOrderPlaced);
        events.off('singup_user', handleSignupUser);
        events.off('add_payment_option', handlePaymentInfo);
      }
    };
  }, [facebookPixelReady]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};
FacebookPixel.propTypes = {
  /**
   * Your Facebook pixels trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  trackId: _propTypes.default.string.isRequired
};
FacebookPixel.defaultProps = {};