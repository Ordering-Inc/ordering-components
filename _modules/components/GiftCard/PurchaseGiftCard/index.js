"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PurchaseGiftCard = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../../contexts/SessionContext");

var _ApiContext = require("../../../contexts/ApiContext");

var _OrderContext = require("../../../contexts/OrderContext");

var _EventContext = require("../../../contexts/EventContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage purchase gift card behavior without UI component
 */
var PurchaseGiftCard = function PurchaseGiftCard(props) {
  var UIComponent = props.UIComponent,
      handleCustomGoToCheckout = props.handleCustomGoToCheckout;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      _useOrder2$ = _useOrder2[1],
      addProduct = _useOrder2$.addProduct,
      removeProduct = _useOrder2$.removeProduct;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var giftCart = Object.values(orderState.carts).find(function (_cart) {
    return !(_cart !== null && _cart !== void 0 && _cart.business_id);
  });

  var _useState = (0, _react.useState)({
    loading: true,
    products: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      productsListState = _useState2[0],
      setProductsListState = _useState2[1];

  var _useState3 = (0, _react.useState)(giftCart ? giftCart === null || giftCart === void 0 ? void 0 : giftCart.products[0] : null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedProduct = _useState4[0],
      setSelectedProduct = _useState4[1];
  /**
   * Method to get the gift products from API
   */


  var getPlatformProductsList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var where, conditions, requestOptions, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              where = null;
              conditions = [];
              conditions.push({
                attribute: 'type',
                value: 'gift_card'
              });

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              setProductsListState(_objectSpread(_objectSpread({}, productsListState), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context.next = 9;
              return fetch("".concat(ordering.root, "/platform_products?where=").concat(JSON.stringify(where)), requestOptions);

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;
              setProductsListState({
                loading: false,
                products: error ? [] : result,
                error: error ? result : null
              });
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              setProductsListState(_objectSpread(_objectSpread({}, productsListState), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    return function getPlatformProductsList() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleAccept = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _giftCart$products$;

      var giftCard, _yield$addProduct, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              giftCard = {
                id: selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id,
                quantity: 1
              };

              if (!(giftCart && (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id) === ((_giftCart$products$ = giftCart.products[0]) === null || _giftCart$products$ === void 0 ? void 0 : _giftCart$products$.id))) {
                _context2.next = 5;
                break;
              }

              if (handleCustomGoToCheckout) {
                handleCustomGoToCheckout(giftCart.uuid);
              } else {
                events.emit('go_to_page', {
                  page: 'checkout',
                  params: {
                    cartUuid: giftCart.uuid
                  }
                });
              }

              _context2.next = 12;
              break;

            case 5:
              if (giftCart) {
                removeProduct(giftCart.products[0], giftCart);
              }

              _context2.next = 8;
              return addProduct(giftCard, null, null, true);

            case 8:
              _yield$addProduct = _context2.sent;
              error = _yield$addProduct.error;
              result = _yield$addProduct.result;

              if (!error) {
                if (handleCustomGoToCheckout) {
                  handleCustomGoToCheckout(result.uuid);
                } else {
                  events.emit('go_to_page', {
                    page: 'checkout',
                    params: {
                      cartUuid: result.uuid
                    }
                  });
                }
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleAccept() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getPlatformProductsList();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productsListState: productsListState,
    selectedProduct: selectedProduct,
    setSelectedProduct: setSelectedProduct,
    handleAccept: handleAccept
  })));
};

exports.PurchaseGiftCard = PurchaseGiftCard;
PurchaseGiftCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
PurchaseGiftCard.defaultProps = {};