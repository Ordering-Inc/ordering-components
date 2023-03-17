"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookPixel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfigContext = require("../../contexts/ConfigContext");

var _EventContext = require("../../contexts/EventContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FacebookPixel = function FacebookPixel(props) {
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
      content_category: product === null || product === void 0 ? void 0 : (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.name,
      content_ids: [product === null || product === void 0 ? void 0 : product.id],
      content_name: product === null || product === void 0 ? void 0 : product.name,
      currency: (_configs$stripe_curre = configs === null || configs === void 0 ? void 0 : (_configs$stripe_curre2 = configs.stripe_currency) === null || _configs$stripe_curre2 === void 0 ? void 0 : _configs$stripe_curre2.value) !== null && _configs$stripe_curre !== void 0 ? _configs$stripe_curre : 'USD',
      value: (_product$total = product === null || product === void 0 ? void 0 : product.total) !== null && _product$total !== void 0 ? _product$total : product === null || product === void 0 ? void 0 : product.price,
      quantity: product === null || product === void 0 ? void 0 : product.quantity
    });
  };

  var handleProductEdited = function handleProductEdited(product) {
    var _product$category2, _configs$stripe_curre3, _configs$stripe_curre4, _product$total2;

    fbq('track', 'CustomizeProduct', {
      content_category: product === null || product === void 0 ? void 0 : (_product$category2 = product.category) === null || _product$category2 === void 0 ? void 0 : _product$category2.name,
      content_ids: [product === null || product === void 0 ? void 0 : product.id],
      content_name: product === null || product === void 0 ? void 0 : product.name,
      currency: (_configs$stripe_curre3 = configs === null || configs === void 0 ? void 0 : (_configs$stripe_curre4 = configs.stripe_currency) === null || _configs$stripe_curre4 === void 0 ? void 0 : _configs$stripe_curre4.value) !== null && _configs$stripe_curre3 !== void 0 ? _configs$stripe_curre3 : 'USD',
      value: (_product$total2 = product === null || product === void 0 ? void 0 : product.total) !== null && _product$total2 !== void 0 ? _product$total2 : product === null || product === void 0 ? void 0 : product.price,
      quantity: product === null || product === void 0 ? void 0 : product.quantity
    });
  };

  var handleOrderPlaced = function handleOrderPlaced(order) {
    var _configs$stripe_curre5, _configs$stripe_curre6;

    fbq('track', 'Purchase', {
      content_ids: [order.id],
      value: order === null || order === void 0 ? void 0 : order.total,
      currency: (_configs$stripe_curre5 = configs === null || configs === void 0 ? void 0 : (_configs$stripe_curre6 = configs.stripe_currency) === null || _configs$stripe_curre6 === void 0 ? void 0 : _configs$stripe_curre6.value) !== null && _configs$stripe_curre5 !== void 0 ? _configs$stripe_curre5 : 'USD'
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

exports.FacebookPixel = FacebookPixel;
FacebookPixel.propTypes = {
  /**
   * Your Facebook pixels trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  trackId: _propTypes.default.string.isRequired
};
FacebookPixel.defaultProps = {};