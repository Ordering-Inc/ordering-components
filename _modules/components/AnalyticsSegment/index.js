"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsSegment = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _EventContext = require("../../contexts/EventContext");

var _analyticsNext = require("@segment/analytics-next");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      price: product.price
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

  (0, _react.useEffect)(function () {
    if (analytics) {
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('order_placed', handleOrderPlaced);
      events.on('order_updated', handleUpdateOrder);
      events.on('order_added', handleAddOrder);
      events.on('cart_product_removed', handleProductRemoved);
    }

    return function () {
      if (analytics) {
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('order_placed', handleOrderPlaced);
        events.off('order_updated', handleUpdateOrder);
        events.off('order_added', handleAddOrder);
        events.off('cart_product_removed', handleProductRemoved);
      }
    };
  }, [analytics]);
  (0, _react.useEffect)(function () {
    var loadAnalytics = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _yield$AnalyticsBrows, _yield$AnalyticsBrows2, response;

        return _regenerator.default.wrap(function _callee$(_context) {
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