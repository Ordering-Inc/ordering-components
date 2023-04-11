"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Analytics = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EventContext = require("../../contexts/EventContext");

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
      children = props.children,
      debugMode = props.debugMode;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      analyticsReady = _useState2[0],
      setAnalyticsReady = _useState2[1];

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

  var sha256 = function sha256(message) {
    return new Promise(function (resolve, reject) {
      // encode as UTF-8
      var msgBuffer = new TextEncoder().encode(message); // hash the message

      crypto.subtle.digest('SHA-256', msgBuffer).then(function (res) {
        var hashBuffer = res; // convert ArrayBuffer to Array

        var hashArray = Array.from(new Uint8Array(hashBuffer)); // convert bytes to hex string

        var hashHex = hashArray.map(function (b) {
          return ('00' + b.toString(16)).slice(-2);
        }).join('');

        if (hashHex) {
          resolve(hashHex);
        } else {
          reject('error parsing ' + message + ' to hash');
        }
      });
    });
  };

  var isGeoActive = function isGeoActive() {
    return new Promise(function (resolve, reject) {
      return navigator.permissions ? // Permission API is implemented
      navigator.permissions.query({
        name: 'geolocation'
      }).then(function (permission) {
        return (// is geolocation granted?
          permission.state === 'granted' ? resolve(true) : resolve(false)
        );
      }) : // Permission API was not implemented
      reject(false);
    });
  };

  var formatForAnalytics = function formatForAnalytics(str, limit, replaceSpace) {
    var formattedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (replaceSpace) formattedStr = formattedStr.replaceAll(' ', '_');
    if (limit) formattedStr = formattedStr.substr(0, limit);
    return formattedStr;
  };
  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */


  var handlechangeView = function handlechangeView(pageName) {
    if (window.ga) {
      window.ga('set', 'page', pageName === null || pageName === void 0 ? void 0 : pageName.page);
      window.ga('send', 'pageview');
    }

    if (googleTagManager) {
      var userCustomer = JSON.parse(window.localStorage.getItem('user'));
      var language = JSON.parse(window.localStorage.getItem('language'));
      var digitalData = {
        event: 'evPageView',
        version: '1.0',
        page: {
          pageInfo: {
            hostName: window.location.protocol + '//' + window.location.hostname + '/',
            currentURL: window.location.href
          }
        },
        user: {
          profile: {
            statusLogged: (userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) > 0 ? 'Logged' : 'NotLogged',
            languajeUser: language ? language.code : 'null',
            isGeoActive: isGeoActive() ? 'Yes' : 'No',
            profileInfo: (userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) > 0 ? {
              segment_user_id: userCustomer !== null && userCustomer !== void 0 && userCustomer.wow_rewards_user_id ? userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.wow_rewards_user_id : 'NA',
              email: sha256(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.email),
              zipCode: userCustomer !== null && userCustomer !== void 0 && userCustomer.zipcode ? userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.zipcode : 'null',
              city: userCustomer ? userCustomer !== null && userCustomer !== void 0 && userCustomer.locality ? formatForAnalytics(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.locality, 40) : 'NA' : 'NA',
              municipio: userCustomer ? userCustomer !== null && userCustomer !== void 0 && userCustomer.administrative_area_level_3 ? formatForAnalytics(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.administrative_area_level_3, 40) : 'NA' : 'NA',
              colonia: userCustomer ? userCustomer !== null && userCustomer !== void 0 && userCustomer.sublocality ? formatForAnalytics(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.sublocality, 40) : 'NA' : 'NA'
            } : 'NA',
            social: {
              network: 'NA'
            }
          }
        }
      };
      if (debugMode) console.log('evPageView', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleClickProduct = function handleClickProduct(product, productPosition) {
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
              'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id : 'producto sin id',
              'price': product.price.toString(),
              'brand': 'MarketPlace ' + slug,
              'category': formatForAnalytics(product.category.name, 40),
              'variant': 'NA',
              'list': formatForAnalytics(product.category.name, 40),
              'position': productPosition ? productPosition : 'NA'
            }]
          }
        },
        event: 'evProductClick'
      };
      if (debugMode) console.log('evProductClick', digitalData);
      window.dataLayer.push(digitalData);
      var dlAnalytics = {
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'detail': {
            'products': [{
              'name': formatForAnalytics(product.name),
              'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id : 'producto sin id',
              'price': product.price.toString(),
              'brand': 'MarketPlace ' + slug,
              'category': formatForAnalytics(product.category.name),
              'variant': 'NA',
              'list': formatForAnalytics(product.category.name)
            }]
          }
        },
        event: 'evProductDetail'
      };
      if (debugMode) console.log('evProductDetail', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
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
              'name': formatForAnalytics(product.name, 40),
              'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id : 'producto sin id',
              'price': product.price,
              'brand': 'MarketPlace ' + slug,
              'category': product.categoryId,
              'quantity': product.quantity
            }]
          }
        },
        event: 'evAddToCart'
      };
      if (debugMode) console.log('evAddToCart', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleLogin = function handleLogin(data) {
    if (window.ga) {
      window.ga('set', 'userId', data.id);
    }

    if (googleTagManager) {
      var digitalData = null;

      if (data !== null && data !== void 0 && data.bySocial) {
        digitalData = {
          action: 'Exito',
          error: 'NA',
          loginMethod: data === null || data === void 0 ? void 0 : data.bySocial,
          event: 'evLogIn'
        };
      } else {
        digitalData = {
          action: 'Exito',
          error: 'NA',
          loginMethod: 'Sistema',
          event: 'evLogIn'
        };
      }

      if (debugMode) console.log('evLogIn', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleOrderPlaced = function handleOrderPlaced(order, orderD) {
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

      if (orderD.paymethod_id === 33 || orderD.paymethod_id === 2) {
        analyticsPaymethod = 'Tarjeta';
      } else if (orderD.paymethod_id === 36) {
        analyticsPaymethod = 'Wow+';
      } else {
        analyticsPaymethod = 'Efectivo';
      }

      var productFormated = orderD.products.map(function (product) {
        return {
          'name': formatForAnalytics(product.name, 40),
          'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id : 'producto sin id',
          'price': product.price ? product.price.toString() : '0',
          'brand': 'MarketPlace ' + slug,
          'category': product.category_id,
          'list': product.category_id,
          'quantity': product.quantity.toString()
        };
      });
      var digitalData = {
        'metodoPago': analyticsPaymethod,
        'rewardsPoints': orderD.paymethod_id === 33 ? orderD.total.toString() : '',
        'couponMoney': orderD.offer ? orderD.discount.toString() : '',
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': (orderD === null || orderD === void 0 ? void 0 : orderD.integration_id) || orderD.uuid,
              'affiliation': (orderD === null || orderD === void 0 ? void 0 : orderD.integration_id) || orderD.uuid,
              'revenue': orderD.total.toString(),
              'tax': orderD.tax.toString(),
              'shipping': orderD.delivery_price.toString(),
              'coupon': orderD.offer ? orderD.offer.coupon ? orderD.offer.coupon : 'NA' : 'NA'
            },
            'products': productFormated
          }
        },
        event: 'evPurchase'
      };
      if (debugMode) console.log('evPurchase', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleSignUp = function handleSignUp(user) {
    if (googleTagManager) {
      var dlAnalytics = {
        action: 'Exito',
        signupMethod: 'Sistema',
        error: 'NA',
        event: 'evSignUp'
      };
      if (debugMode) console.log('evSignUp', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleRemoveProduct = function handleRemoveProduct(product, result) {
    if (googleTagManager) {
      var digitalData = {
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'remove': {
            'products': [{
              'name': formatForAnalytics(product.name),
              'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id : 'producto sin id',
              'price': product.price.toString(),
              'brand': slug,
              'category': product.category_id,
              // 'variant': formatForAnalytics(variants, 40),
              'quantity': product.quantity
            }]
          }
        },
        event: 'evRemoveFromCart'
      };
      if (debugMode) console.log('evRemoveFromCart', digitalData);
      window.dataLayer.push(digitalData);
    }
  };

  var handleGoToBusiness = function handleGoToBusiness(storeData) {
    var _storeData$params, _storeData$params2;

    if (googleTagManager && (storeData === null || storeData === void 0 ? void 0 : (_storeData$params = storeData.params) === null || _storeData$params === void 0 ? void 0 : _storeData$params.store) !== ':store' && (storeData === null || storeData === void 0 ? void 0 : (_storeData$params2 = storeData.params) === null || _storeData$params2 === void 0 ? void 0 : _storeData$params2.store) !== 'undefined') {
      var _storeData$params3;

      var dlAnalytics = {
        restaurant: formatForAnalytics(storeData === null || storeData === void 0 ? void 0 : (_storeData$params3 = storeData.params) === null || _storeData$params3 === void 0 ? void 0 : _storeData$params3.store),
        event: 'evClickRestaurant'
      };
      if (debugMode) console.log('evClickRestaurant', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleGoToCheckout = function handleGoToCheckout(cartData) {
    if (googleTagManager) {
      var dlAnalytics = {
        'flow': 'MarketPlace ' + slug,
        'ecommerce': {
          'checkout': {
            'actionField': {
              'step': 1
            },
            'products': cartData.params.cart.products
          }
        },
        event: 'evCheckout'
      };
      if (debugMode) console.log('evCheckout', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleAddressEvent = function handleAddressEvent(addressEvent) {
    if (googleTagManager) {
      var dlAnalytics = null;

      if (addressEvent.page === 'new_address') {
        dlAnalytics = {
          actionType: 'Agregar',
          action: 'Exito',
          tag: addressEvent.params.tag ? addressEvent.params.tag : 'NA',
          error: 'NA',
          event: 'evDirectionActions'
        };
      }

      if (addressEvent.page === 'edit_address') {
        dlAnalytics = {
          actionType: 'Editar',
          action: 'Exito',
          tag: addressEvent.params.tag ? addressEvent.params.tag : 'NA',
          error: 'NA',
          event: 'evDirectionActions'
        };
      }

      if (debugMode) console.log('evDirectionActions', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleChangeOrderType = function handleChangeOrderType(orderTypeData) {
    if (googleTagManager) {
      var dlAnalytics = {
        action: orderTypeData.params.type == 1 ? 'Entrega' : 'Recoger',
        event: 'evClickOrderType'
      };
      if (debugMode) console.log('evClickOrderType', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleCategorySelect = function handleCategorySelect(data) {
    if (googleTagManager) {
      var _data$params, _data$params2;

      var dlAnalytics = {
        menuRestaurantOption: formatForAnalytics(data === null || data === void 0 ? void 0 : (_data$params = data.params) === null || _data$params === void 0 ? void 0 : _data$params.category.name),
        restaurant: formatForAnalytics(data === null || data === void 0 ? void 0 : (_data$params2 = data.params) === null || _data$params2 === void 0 ? void 0 : _data$params2.business),
        event: 'evClickRestaurantMenu'
      };
      if (debugMode) console.log('evClickRestaurantMenu', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleGeneralError = function handleGeneralError(data) {
    if (googleTagManager) {
      var dlAnalytics = {
        error: data,
        event: 'evGeneralError'
      };
      if (debugMode) console.log('evGeneralError', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleSocialMediaClick = function handleSocialMediaClick(data) {
    if (googleTagManager) {
      var dlAnalytics = {
        socialNetwork: data.social,
        event: 'evClickSocialNetwork'
      };
      if (debugMode) console.log('evClickSocialNetwork', dlAnalytics);
      window.dataLayer.push(dlAnalytics);
    }
  };

  var handleProductImpressions = function handleProductImpressions(data) {
    if (googleTagManager) {
      if (data.page === 'all') {
        var _data$params3, _data$params3$categor;

        var impressions = [];
        var positionList = 1;
        data === null || data === void 0 ? void 0 : (_data$params3 = data.params) === null || _data$params3 === void 0 ? void 0 : (_data$params3$categor = _data$params3.categories) === null || _data$params3$categor === void 0 ? void 0 : _data$params3$categor.map(function (category) {
          category.products.map(function (product) {
            impressions.push({
              'name': formatForAnalytics(product.name, 40),
              'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id.toString() : 'producto sin id',
              'price': product.price.toString(),
              'brand': 'MarketPlace ' + slug,
              'category': formatForAnalytics(category.name, 40),
              'variant': 'NA',
              'list': formatForAnalytics(category.name, 40),
              'position': positionList
            });
            positionList += 1;
          });
        });

        while (impressions.length > 0) {
          var dlAnalytics = {
            'flow': 'MarketPlace ' + slug,
            'ecommerce': {
              'impressions': impressions.slice(0, 15)
            },
            event: 'evProductImpression'
          };
          if (debugMode) console.log('evProductImpression', dlAnalytics);
          window.dataLayer.push(dlAnalytics);
          impressions = impressions.slice(15);
        }
      }

      if (data.page === 'categoryProducts') {
        var _impressions = [];
        var _positionList = 1;

        if (data.params.category.product && data.params.category.product.length > 0) {
          data.params.category.products.map(function (product) {
            _impressions.push({
              'name': formatForAnalytics(product.name, 40),
              'id': product !== null && product !== void 0 && product.integration_id ? product === null || product === void 0 ? void 0 : product.integration_id.toString() : 'producto sin id',
              'price': product.price.toString(),
              'brand': 'MarketPlace ' + slug,
              'category': formatForAnalytics(data.params.category.name, 40),
              'variant': 'NA',
              'list': formatForAnalytics(data.params.category.name, 40),
              'position': _positionList
            });

            _positionList += 1;
          });
          var _dlAnalytics = {
            'flow': 'MarketPlace ' + slug,
            'ecommerce': {
              'impressions': _impressions.slice(0, 15)
            },
            event: 'evProductImpression'
          };
          if (debugMode) console.log('evProductImpression', _dlAnalytics);
          window.dataLayer.push(_dlAnalytics);
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (debugMode) console.log('Analytic Ready');

    if (analyticsReady && window.ga || googleTagManager) {
      events.on('change_view', handlechangeView);
      events.on('userLogin', handleLogin);
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('order_placed', handleOrderPlaced);
      events.on('singup_user', handleSignUp);
      events.on('cart_product_removed', handleRemoveProduct);
      events.on('go_to_business', handleGoToBusiness);
      events.on('go_to_checkout', handleGoToCheckout);
      events.on('address_event', handleAddressEvent);
      events.on('order_type_change', handleChangeOrderType);
      events.on('category_selected', handleCategorySelect);
      events.on('general_errors', handleGeneralError);
      events.on('social_media_click', handleSocialMediaClick);
      events.on('product-impressions', handleProductImpressions);
    }

    return function () {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView);
        events.off('userLogin', handleLogin);
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('order_placed', handleOrderPlaced);
        events.off('singup_user', handleSignUp);
        events.off('cart_product_removed', handleRemoveProduct);
        events.off('go_to_business', handleGoToBusiness);
        events.off('go_to_checkout', handleGoToCheckout);
        events.off('address_event', handleAddressEvent);
        events.off('order_type_change', handleChangeOrderType);
        events.off('category_selected', handleCategorySelect);
        events.off('general_errors', handleGeneralError);
        events.off('social_media_click', handleSocialMediaClick);
        events.off('product-impressions', handleProductImpressions);
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