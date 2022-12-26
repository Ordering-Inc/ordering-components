"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCartCreate = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

var _SessionContext = require("../../contexts/SessionContext");

var _EventContext = require("../../contexts/EventContext");

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

var MultiCartCreate = function MultiCartCreate(props) {
  var UIComponent = props.UIComponent,
      cartGroupFound = props.cartGroup,
      cartUuid = props.cartUuid,
      handleOnRedirectMultiCheckout = props.handleOnRedirectMultiCheckout,
      handleOnRedirectCheckout = props.handleOnRedirectCheckout;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      refreshOrderOptions = _useOrder2[1].refreshOrderOptions;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var filtValidation = function filtValidation(cart) {
    var _cart$group, _cart$group2;

    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (cart === null || cart === void 0 ? void 0 : cart.valid) && (cartGroupFound === 'create' ? !(cart !== null && cart !== void 0 && (_cart$group = cart.group) !== null && _cart$group !== void 0 && _cart$group.uuid) : (cart === null || cart === void 0 ? void 0 : (_cart$group2 = cart.group) === null || _cart$group2 === void 0 ? void 0 : _cart$group2.uuid) === cartGroupFound);
  };

  var createMultiCart = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var cartsUuidForGroup, response, _yield$response$json, result, error;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cartsUuidForGroup = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
                return filtValidation(cart);
              }).map(function (cart) {
                return cart === null || cart === void 0 ? void 0 : cart.uuid;
              });
              cartsUuidForGroup.push(cartUuid);

              if (!((cartsUuidForGroup === null || cartsUuidForGroup === void 0 ? void 0 : cartsUuidForGroup.length) === 1)) {
                _context.next = 8;
                break;
              }

              if (!handleOnRedirectCheckout) {
                _context.next = 6;
                break;
              }

              handleOnRedirectCheckout(cartsUuidForGroup[0]);
              return _context.abrupt("return");

            case 6:
              events.emit('go_to_page', {
                page: 'checkout',
                params: {
                  cartUuid: cartsUuidForGroup[0]
                }
              });
              return _context.abrupt("return");

            case 8:
              _context.next = 10;
              return fetch("".concat(ordering.root, "/cart_groups"), {
                method: 'POST',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-App-X': ordering.appId,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  carts: cartsUuidForGroup
                })
              });

            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();

            case 13:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;
              _context.next = 18;
              return refreshOrderOptions();

            case 18:
              if (error) {
                _context.next = 23;
                break;
              }

              if (!handleOnRedirectMultiCheckout) {
                _context.next = 22;
                break;
              }

              handleOnRedirectMultiCheckout(result === null || result === void 0 ? void 0 : result.uuid);
              return _context.abrupt("return");

            case 22:
              events.emit('go_to_page', {
                page: 'multi_checkout',
                params: {
                  cartUuid: result === null || result === void 0 ? void 0 : result.uuid
                }
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createMultiCart() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    createMultiCart();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};

exports.MultiCartCreate = MultiCartCreate;
MultiCartCreate.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
MultiCartCreate.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};