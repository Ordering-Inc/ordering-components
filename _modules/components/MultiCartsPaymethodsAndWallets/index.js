"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCartsPaymethodsAndWallets = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _OrderContext = require("../../contexts/OrderContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
 * Component to manage Multi carts paymethods and wallets behavior without UI component
 */
var MultiCartsPaymethodsAndWallets = function MultiCartsPaymethodsAndWallets(props) {
  var UIComponent = props.UIComponent,
      openCarts = props.openCarts,
      propsToFetch = props.propsToFetch;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      cartsUuids = _useState2[0],
      setCartsUuids = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      businessIds = _useState4[0],
      setBusinessIds = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: true,
    paymethods: [],
    wallets: [],
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      paymethodsAndWallets = _useState6[0],
      setPaymethodsAndWallets = _useState6[1];

  var _useState7 = (0, _react.useState)({
    result: [],
    loading: true,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      walletsState = _useState8[0],
      setWalletsState = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: true,
    result: [],
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      businessPaymethods = _useState10[0],
      setBusinessPaymethods = _useState10[1];
  /**
   * Method to get available wallets and paymethods from API
   */


  var getPaymethodsAndWallets = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, content, _content$result, _content$result2;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setPaymethodsAndWallets(_objectSpread(_objectSpread({}, paymethodsAndWallets), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "bearer ".concat(token)
                },
                body: JSON.stringify({
                  carts: cartsUuids
                })
              };
              _context.next = 5;
              return fetch("".concat(ordering.root, "/carts/prepare_checkout"), requestOptions);

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              content = _context.sent;

              if (!content.error) {
                setPaymethodsAndWallets({
                  loading: false,
                  paymethods: ((_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.paymethods) || [],
                  wallets: ((_content$result2 = content.result) === null || _content$result2 === void 0 ? void 0 : _content$result2.wallets) || [],
                  error: null
                });
              } else {
                setPaymethodsAndWallets(_objectSpread(_objectSpread({}, paymethodsAndWallets), {}, {
                  loading: false,
                  error: content.result
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setPaymethodsAndWallets(_objectSpread(_objectSpread({}, paymethodsAndWallets), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getPaymethodsAndWallets() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
  * Method to get business from API
  */


  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _orderState$options, parameters, _yield$ordering$busin, _yield$ordering$busin2, result, error;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              parameters = {
                type: (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type
              };
              _context2.next = 4;
              return ordering.businesses(businessIds[0]).select(propsToFetch).parameters(parameters).get();

            case 4:
              _yield$ordering$busin = _context2.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              result = _yield$ordering$busin2.result;
              error = _yield$ordering$busin2.error;
              setBusinessPaymethods({
                loading: false,
                result: error ? [] : result === null || result === void 0 ? void 0 : result.paymethods,
                error: error ? result : null
              });
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setBusinessPaymethods(_objectSpread(_objectSpread({}, businessPaymethods), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function getBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get user wallets from API
   */


  var getUserWallets = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fetch("".concat(ordering.root, "/users/").concat(user.id, "/wallets"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context3.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;
              setWalletsState(_objectSpread(_objectSpread({}, walletsState), {}, {
                loading: false,
                error: error ? result : null,
                result: error ? null : result
              }));
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);

              if (_context3.t0.constructor.name !== 'Cancel') {
                setWalletsState(_objectSpread(_objectSpread({}, walletsState), {}, {
                  loading: false,
                  error: [_context3.t0.message]
                }));
              }

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function getUserWallets() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _cartsUuids = openCarts.reduce(function (uuids, cart) {
      return [].concat(_toConsumableArray(uuids), [cart.uuid]);
    }, []);

    setCartsUuids(_cartsUuids);

    var _businessIds = openCarts.reduce(function (uuids, cart) {
      return [].concat(_toConsumableArray(uuids), [cart.business_id]);
    }, []);

    setBusinessIds(_businessIds);
  }, [openCarts]);
  (0, _react.useEffect)(function () {
    getUserWallets();
  }, []);
  (0, _react.useEffect)(function () {
    if (!cartsUuids.length) return;
    getPaymethodsAndWallets();
    getBusiness();
  }, [JSON.stringify(cartsUuids), JSON.stringify(businessIds)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessIds: businessIds,
    paymethodsAndWallets: paymethodsAndWallets,
    walletsState: walletsState,
    businessPaymethods: businessPaymethods
  })));
};

exports.MultiCartsPaymethodsAndWallets = MultiCartsPaymethodsAndWallets;
MultiCartsPaymethodsAndWallets.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
MultiCartsPaymethodsAndWallets.defaultProps = {
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location', 'configs']
};