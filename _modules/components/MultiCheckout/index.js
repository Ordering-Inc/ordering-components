"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _ToastContext = require("../../contexts/ToastContext");

var _LanguageContext = require("../../contexts/LanguageContext");

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
 * Component to manage Multi businesses checkout page behavior without UI component
 */
var MultiCheckout = function MultiCheckout(props) {
  var _cartGroup$result, _cartGroup$result$car, _openCarts$filter;

  var UIComponent = props.UIComponent,
      onPlaceOrderClick = props.onPlaceOrderClick,
      cartUuid = props.cartUuid,
      actionsBeforePlace = props.actionsBeforePlace;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * Session content
   */


  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      carts = _useOrder2[0].carts,
      placeMulitCarts = _useOrder2[1].placeMulitCarts;
  /**
  * Toast state
  */


  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];
  /**
  * Delivery Instructions options
  */


  var _useState = (0, _react.useState)({
    loading: false,
    result: [{
      id: null,
      enabled: true,
      name: t('EITHER_WAY', 'Either way')
    }],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      instructionsOptions = _useState2[0],
      setInstructionsOptions = _useState2[1];
  /**
  * Delivery instructions selected
  */


  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      deliveryOptionSelected = _useState4[0],
      setDeliveryOptionSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      placing = _useState6[0],
      setPlacing = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      paymethodSelected = _useState8[0],
      setPaymethodSelected = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: true,
    error: null,
    result: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      cartGroup = _useState10[0],
      setCartGroup = _useState10[1];

  var openCarts = (cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result = cartGroup.result) === null || _cartGroup$result === void 0 ? void 0 : (_cartGroup$result$car = _cartGroup$result.carts) === null || _cartGroup$result$car === void 0 ? void 0 : _cartGroup$result$car.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 1;
  })) || null || [];
  var totalCartsPrice = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && openCarts.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.total);
  }, 0);
  var totalCartsFee = (openCarts === null || openCarts === void 0 ? void 0 : openCarts.length) && (openCarts === null || openCarts === void 0 ? void 0 : (_openCarts$filter = openCarts.filter(function (cart) {
    return (cart === null || cart === void 0 ? void 0 : cart.status) !== 1 && (cart === null || cart === void 0 ? void 0 : cart.valid);
  })) === null || _openCarts$filter === void 0 ? void 0 : _openCarts$filter.reduce(function (total, cart) {
    return total + (cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount);
  }, 0));

  var handleGroupPlaceOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _paymethodSelected$pa, _cartGroup$result2, _result$paymethod_dat;

      var paymethodData, _paymethodSelected$pa2, payload, _paymethodSelected$pa3, _yield$placeMulitCart, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data;

              if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway)) {
                paymethodData = JSON.stringify({
                  source_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa2 = paymethodSelected.paymethod_data) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id
                });
              }

              payload = {
                amount: cartGroup === null || cartGroup === void 0 ? void 0 : (_cartGroup$result2 = cartGroup.result) === null || _cartGroup$result2 === void 0 ? void 0 : _cartGroup$result2.balance
              };

              if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  paymethod_id: (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa3 = paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.id) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id)
                });
              }

              if (paymethodData) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  paymethod_data: paymethodData
                });
              }

              if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  wallet_id: paymethodSelected.wallet_id,
                  wallet_data: paymethodSelected.wallet_data
                });
              }

              setPlacing(true);
              _context.next = 9;
              return placeMulitCarts(payload, cartUuid);

            case 9:
              _yield$placeMulitCart = _context.sent;
              error = _yield$placeMulitCart.error;
              result = _yield$placeMulitCart.result;

              if (!((result === null || result === void 0 ? void 0 : (_result$paymethod_dat = result.paymethod_data) === null || _result$paymethod_dat === void 0 ? void 0 : _result$paymethod_dat.status) === 2 && actionsBeforePlace)) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return actionsBeforePlace(paymethodSelected, result);

            case 15:
              setPlacing(false);

              if (!error) {
                // const orderUuids = result.carts.reduce((uuids, cart) => [...uuids, cart.order.uuid], [])
                onPlaceOrderClick && onPlaceOrderClick(result);
              }

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleGroupPlaceOrder() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSelectPaymethod = function handleSelectPaymethod(paymethod) {
    setPaymethodSelected(_objectSpread(_objectSpread(_objectSpread({}, paymethodSelected), paymethod), {}, {
      paymethod_data: paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_data
    }));
  };

  var handleSelectWallet = function handleSelectWallet(checked, wallet) {
    if (checked) {
      setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
        wallet_id: wallet.id,
        wallet_data: wallet.balance > totalCartsPrice ? totalCartsPrice : wallet.balance
      }));
    } else {
      var _paymethodSelected = _objectSpread({}, paymethodSelected);

      delete _paymethodSelected.wallet_id;
      delete _paymethodSelected.wallet_data;
      setPaymethodSelected(_paymethodSelected);
    }
  };

  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    setPaymethodSelected(_objectSpread(_objectSpread({}, paymethodSelected), {}, {
      paymethod_data: data
    }));
  };

  var getDeliveryOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var response, _yield$response$json, result, error;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(ordering.root, "/delivery_options"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "bearer ".concat(token),
                  'X-App-X': ordering.appId
                }
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context2.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;

              if (error) {
                _context2.next = 12;
                break;
              }

              setInstructionsOptions({
                loading: false,
                result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
              });
              return _context2.abrupt("return");

            case 12:
              setInstructionsOptions({
                loading: false,
                error: true,
                result: result
              });
              showToast(_ToastContext.ToastType.Error, result);
              _context2.next = 20;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setInstructionsOptions({
                loading: false,
                error: true,
                result: _context2.t0.message
              });
              showToast(_ToastContext.ToastType.Error, _context2.t0.message);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
    }));

    return function getDeliveryOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var multiHandleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(value, cartUuidArr) {
      var allPromise;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              allPromise = cartUuidArr.map(function (cartId) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, reject) {
                    var response, _yield$response$json2, result, error;

                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return fetch("".concat(ordering.root, "/carts/").concat(cartId), {
                              method: 'PUT',
                              headers: {
                                'Content-Type': 'application/json',
                                Authorization: "bearer ".concat(token),
                                'X-App-X': ordering.appId
                              },
                              body: JSON.stringify({
                                delivery_option_id: value
                              })
                            });

                          case 2:
                            response = _context3.sent;
                            _context3.next = 5;
                            return response.json();

                          case 5:
                            _yield$response$json2 = _context3.sent;
                            result = _yield$response$json2.result;
                            error = _yield$response$json2.error;

                            if (!error && (result === null || result === void 0 ? void 0 : result.delivery_option_id) === value) {
                              resolve(result);
                            } else {
                              reject(false);
                            }

                          case 9:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x3, _x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());
              });
              _context4.next = 4;
              return Promise.all(allPromise);

            case 4:
              _context4.t0 = _context4.sent;

              if (!_context4.t0) {
                _context4.next = 7;
                break;
              }

              setDeliveryOptionSelected(value);

            case 7:
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t1 = _context4["catch"](0);
              showToast(_ToastContext.ToastType.Error, _context4.t1.message);

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));

    return function multiHandleChangeDeliveryOption(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(value) {
      var cartUuidArr;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              cartUuidArr = openCarts.map(function (cart) {
                return cart === null || cart === void 0 ? void 0 : cart.uuid;
              });
              multiHandleChangeDeliveryOption(value, cartUuidArr);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleChangeDeliveryOption(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getMultiCart = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var response, _yield$response$json3, result, error;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;

              if (cartUuid) {
                _context6.next = 3;
                break;
              }

              return _context6.abrupt("return");

            case 3:
              setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
                loading: true
              }));
              _context6.next = 6;
              return fetch("".concat(ordering.root, "/cart_groups/").concat(cartUuid), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "bearer ".concat(token),
                  'X-App-X': ordering.appId
                }
              });

            case 6:
              response = _context6.sent;
              _context6.next = 9;
              return response.json();

            case 9:
              _yield$response$json3 = _context6.sent;
              result = _yield$response$json3.result;
              error = _yield$response$json3.error;
              setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
                loading: false,
                result: result,
                error: error
              }));
              _context6.next = 18;
              break;

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              setCartGroup(_objectSpread(_objectSpread({}, cartGroup), {}, {
                loading: false,
                error: _context6.t0.message
              }));

            case 18:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 15]]);
    }));

    return function getMultiCart() {
      return _ref6.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(null);
    }
  }, [instructionsOptions]);
  (0, _react.useEffect)(function () {
    getDeliveryOptions();
  }, []);
  (0, _react.useEffect)(function () {
    getMultiCart();
  }, [JSON.stringify(carts)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    placing: placing,
    openCarts: openCarts,
    totalCartsPrice: totalCartsPrice,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleGroupPlaceOrder: handleGroupPlaceOrder,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange,
    handleChangeDeliveryOption: handleChangeDeliveryOption,
    deliveryOptionSelected: deliveryOptionSelected,
    instructionsOptions: instructionsOptions,
    cartGroup: cartGroup,
    totalCartsFee: totalCartsFee
  })));
};

exports.MultiCheckout = MultiCheckout;
MultiCheckout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};