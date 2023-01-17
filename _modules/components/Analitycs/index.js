"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Analytics = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EventContext = require("../../contexts/EventContext");

var _SessionContext = require("../../contexts/SessionContext");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Analytics = function Analytics(props) {
  var trackId = props.trackId,
      googleTagManager = props.googleTagManager,
      slug = props.slug,
      children = props.children;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      analyticsReady = _useState2[0],
      setAnalyticsReady = _useState2[1];

  var formatForAnalytics = function formatForAnalytics(str, limit, replaceSpace) {
    var formattedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (replaceSpace) formattedStr = formattedStr.replaceAll(' ', '_');
    if (limit) formattedStr = formattedStr.substr(0, limit);
    return formattedStr;
  };

  (0, _react.useEffect)(function () {
    var _window;

    if (!trackId) {
      return;
    }

    if (window.document.getElementById('google-analytics-sdk')) {
      if (typeof ga !== 'undefined') {
        setAnalyticsReady(true);
      }

      return;
    }

    var js = window.document.createElement('script');
    js.id = 'google-analytics-sdk';
    js.async = true;
    js.defer = true;
    js.src = 'https://www.google-analytics.com/analytics.js';

    js.onload = ((_window = window) === null || _window === void 0 ? void 0 : _window.ga) && function () {
      setAnalyticsReady(true);
      window.ga('create', trackId);
      window.ga('require', 'ec');
      window.ga('set', 'page', window.location.pathname);
      window.ga('send', 'pageview');
    };

    window.document.body.appendChild(js);
    return function () {
      js.onload = null;
    };
  }, [trackId]);
  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */

  var handlechangeView = function handlechangeView(pageName) {
    if (window.ga) {
      window.ga('set', 'page', pageName === null || pageName === void 0 ? void 0 : pageName.page);
      window.ga('send', 'pageview');
    } // if (googleTagManager) {
    //   console.log('event: pageview', pageName?.page)
    //   window.dataLayer.push({
    //     event: 'pageview',
    //     page: {
    //       title: pageName?.page
    //     }
    //   });
    // }

  };

  var handleClickProduct = function handleClickProduct(product) {
    if (window.ga) {
      window.ga('ec:addProduct', {
        id: product.id,
        name: product.name,
        category: product.category_id,
        price: product.price
      });
      window.ga('ec:setAction', 'click');
      window.ga('send', 'event', 'UI', 'click', 'add to cart');
    }

    if (googleTagManager) {
      var digitalData = {
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'click': {
            'products': [{
              'name': product.name,
              'id': product.sku ? product.sku : 'producto sin sku',
              'price': product.price.toString(),
              'brand': 'MarketPlace ' + slug,
              'category': formatForAnalytics(product.category.name, 40),
              'variant': 'NA',
              'list': formatForAnalytics(product.category.name, 40) // 'position': 

            }]
          }
        },
        event: "evProductClick"
      };
      console.log('evPageView', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleProductAdded = function handleProductAdded(product) {
    if (window.ga) {
      window.ga('ec:addProduct', {
        id: product.id,
        name: product.name,
        category: product.category_id,
        price: product.price,
        quantity: product.quantity
      });
      window.ga('ec:setAction', 'add');
      window.ga('send', 'event', 'UI', 'click', 'add to cart');
    }

    if (googleTagManager) {
      var digitalData = {
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'add': {
            'products': [{
              'name': formatForAnalytics(product.name),
              'id': product.sku ? product.sku : 'producto sin sku',
              'price': product.price.toString(),
              'brand': 'MarketPlace ' + slug,
              'category': formatForAnalytics(product_category.name),
              'variant': formatForAnalytics(variants, 40),
              'quantity': "".concat(product.quantity)
            }]
          }
        },
        event: "evAddToCart"
      };
      console.log('evPageView', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleLogin = function handleLogin(data) {
    if (window.ga) {
      window.ga('set', 'userId', data.id);
    }

    if (googleTagManager) {
      var digitalData = {
        event: "evPageView",
        version: "1.0",
        page: {
          pageInfo: {
            hostName: location.protocol + "//" + location.hostname + "/",
            currentURL: location.href
          }
        },
        user: {
          profile: {
            statusLogged: user.id > 0 ? "Logged" : "NotLogged",
            languajeUser: "null",
            isGeoActive: "null",
            profileInfo: "NA",
            social: {
              network: 'NA'
            }
          }
        }
      };
      console.log('evPageView', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleOrderPlaced = function handleOrderPlaced(order) {
    if (window.ga) {
      var _order$business;

      window.ga('ec:setAction', 'purchase', {
        // Transaction details are provided in an actionFieldObject.
        id: order.id,
        // (Required) Transaction id (string).
        affiliation: (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name,
        // Affiliation (string).
        revenue: order.total,
        // Revenue (number).
        tax: order.tax_total,
        // Tax (number).
        shipping: order.delivery_zone_price // Shipping (number).

      });
    }

    if (googleTagManager) {
      var analyticsPaymethod = null;

      if (order.paymethod_id == 33 || order.paymethod_id == 2) {
        analyticsPaymethod = 'Tarjeta';
      } else if (order.paymethod_id == 36) {
        analyticsPaymethod = 'Wow+';
      } else {
        analyticsPaymethod = 'Efectivo';
      }

      var productFormated = order.products.map(function (product) {
        return {
          'name': formatForAnalytics(product.name, 40),
          'id': product.sku ? product.sku : 'producto sin sku',
          'price': product.price ? product.price.toString() : '0',
          'brand': 'MarketPlace ' + slug,
          'category': formatForAnalytics(product.category_id, 40),
          'list': formatForAnalytics(product.category_id, 40),
          'quantity': product.quantity.toString()
        };
      });
      var digitalData = {
        'metodoPago': analyticsPaymethod,
        'rewardsPoints': order.paymethod_id == 33 ? order.summary.total.toString() : '',
        'couponMoney': order.offer ? order.discount.toString() : '',
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': order.integration_id,
              'affiliation': order.integration_id,
              'revenue': order.summary.total.toString(),
              'tax': order.summary.tax.toString(),
              'shipping': order.delivery_zone_price.toString(),
              'coupon': order.offer ? order.offer.coupon ? order.offer.coupon : 'NA' : 'NA'
            },
            'products': productFormated
          }
        },
        event: "evPurchase"
      };
      console.log('evPageView', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  (0, _react.useEffect)(function () {
    console.log('Analytic Ready');

    if (analyticsReady && window.ga || googleTagManager) {
      events.on('change_view', handlechangeView);
      events.on('userLogin', handleLogin);
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('order_placed', handleOrderPlaced);
    }

    return function () {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView);
        events.off('userLogin', handleLogin);
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('order_placed', handleOrderPlaced);
      }
    };
  }, [analyticsReady]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

exports.Analytics = Analytics;
Analytics.propTypes = {
  /**
   * Your Google Analytics trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  // trackId: PropTypes.string.isRequired
};
Analytics.defaultProps = {};