"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrder = exports.OrderProvider = exports.OrderContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _SessionContext = require("../SessionContext");

var _Popup = require("../../components/Popup");

var _ApiContext = require("../ApiContext");

var _WebsocketContext = require("../WebsocketContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
var OrderContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */

exports.OrderContext = OrderContext;

var OrderProvider = function OrderProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)({
    show: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirmAlert = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)({
    show: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alert = _useState4[0],
      setAlert = _useState4[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useState5 = (0, _react.useState)({
    loading: true,
    options: {
      type: 1
    },
    carts: {},
    confirmAlert: confirmAlert,
    alert: alert
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];
  /**
   * Refresh order options and carts from API
   */


  var refreshOrderOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response, _yield$response$json, error, result, carts, options, localOptions, conditions, addressesResponse, address, addressResponse;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!state.loading) {
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  loading: true
                }));
              }

              _context.next = 4;
              return fetch("".concat(ordering.root, "/order_options"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                carts = result.carts, options = _objectWithoutProperties(result, ["carts"]);
                state.carts = {};
                carts.forEach(function (cart) {
                  state.carts["businessId:".concat(cart.business_id)] = cart;
                });
                state.options = _objectSpread(_objectSpread({}, state.options), options);
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              localOptions = JSON.parse(window.localStorage.getItem('options'));

              if (!localOptions) {
                _context.next = 28;
                break;
              }

              if (!localOptions.address) {
                _context.next = 26;
                break;
              }

              conditions = [{
                attribute: 'address',
                value: localOptions.address.address
              }];
              _context.next = 18;
              return ordering.setAccessToken(session.token).users(session.user.id).addresses().where(conditions).get();

            case 18:
              addressesResponse = _context.sent;
              address = addressesResponse.content.result.find(function (address) {
                return address.address_notes === localOptions.address.address_notes && address.internal_number === localOptions.address.internal_number;
              });

              if (address) {
                _context.next = 25;
                break;
              }

              _context.next = 23;
              return ordering.setAccessToken(session.token).users(session.user.id).addresses().save(localOptions.address);

            case 23:
              addressResponse = _context.sent;

              if (!addressResponse.content.error) {
                address = addressResponse.content.result;
              }

            case 25:
              if (address) {
                localOptions.address_id = address.id;
              }

            case 26:
              updateOrderOptions(localOptions);
              window.localStorage.removeItem('options');

            case 28:
              _context.next = 33;
              break;

            case 30:
              _context.prev = 30;
              _context.t0 = _context["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 30]]);
    }));

    return function refreshOrderOptions() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Change order address
   */


  var changeAddress = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(addressId) {
      var options;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_typeof(addressId) === 'object')) {
                _context2.next = 5;
                break;
              }

              options = _objectSpread(_objectSpread({}, state.options), {}, {
                address: addressId
              });
              window.localStorage.setItem('options', JSON.stringify(options));
              setState(_objectSpread(_objectSpread({}, state), {}, {
                options: options
              }));
              return _context2.abrupt("return");

            case 5:
              if (!(state.options.address_id === addressId)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return");

            case 7:
              updateOrderOptions({
                address_id: addressId
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function changeAddress(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Change order type
   */


  var changeType = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(type) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(state.options.type === type)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              updateOrderOptions({
                type: type
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function changeType(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Change order moment
   */


  var changeMoment = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(moment) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              moment = !moment ? null : Math.floor(moment.getTime() / 1000);

              if (!(state.options.moment === moment)) {
                _context4.next = 3;
                break;
              }

              return _context4.abrupt("return");

            case 3:
              updateOrderOptions({
                moment: moment
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function changeMoment(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  // const _updateOrderOptions = async (changes) => {
  //   if (session.auth) {
  //     try {
  //       setState({ ...state, loading: true })
  //       const response = await fetch(`${ordering.root}/order_options/verify_changes`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` }, body: JSON.stringify(changes) })
  //       const { error, result } = await response.json()
  //       if (!error) {
  //         return await applyChanges(changes)
  //       } else {
  //         setConfirm({
  //           show: true,
  //           content: result,
  //           onConfirm: () => {
  //             setConfirm({ show: false })
  //             applyChanges(changes)
  //           }
  //         })
  //       }
  //     } catch (err) {
  //       setState({ ...state, loading: false })
  //       return false
  //     }
  //   } else {
  //     const options = {
  //       ...state.options,
  //       ...changes
  //     }
  //     localStorage.setItem('options', JSON.stringify(options))
  //     setState({
  //       ...state,
  //       options
  //     })
  //     return true
  //   }
  // }

  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */


  var updateOrderOptions = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(changes) {
      var response, _yield$response$json2, error, result, carts, options;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!session.auth) {
                _context5.next = 20;
                break;
              }

              _context5.prev = 1;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context5.next = 5;
              return fetch("".concat(ordering.root, "/order_options"), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: JSON.stringify(changes)
              });

            case 5:
              response = _context5.sent;
              _context5.next = 8;
              return response.json();

            case 8:
              _yield$response$json2 = _context5.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                carts = result.carts, options = _objectWithoutProperties(result, ["carts"]);
                state.carts = {};
                carts.forEach(function (cart) {
                  state.carts["businessId:".concat(cart.business_id)] = cart;
                });
                state.options = _objectSpread(_objectSpread({}, state.options), options);
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context5.abrupt("return", !error);

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](1);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context5.abrupt("return", false);

            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 16]]);
    }));

    return function updateOrderOptions(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Add product to cart
   */


  var addProduct = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(product) {
      var body, response, _yield$response$json3, error, result;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify({
                product: JSON.stringify(product)
              });
              _context6.next = 5;
              return fetch("".concat(ordering.root, "/carts/add_product"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 5:
              response = _context6.sent;
              _context6.next = 8;
              return response.json();

            case 8:
              _yield$response$json3 = _context6.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context6.abrupt("return", !error);

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context6.abrupt("return", false);

            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 16]]);
    }));

    return function addProduct(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Remove product to cart
   */


  var removeProduct = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(product) {
      var body, response, _yield$response$json4, error, result;

      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify({
                product: JSON.stringify({
                  id: product.id,
                  code: product.code,
                  business_id: product.business_id
                })
              });
              _context7.next = 5;
              return fetch("".concat(ordering.root, "/carts/remove_product"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 5:
              response = _context7.sent;
              _context7.next = 8;
              return response.json();

            case 8:
              _yield$response$json4 = _context7.sent;
              error = _yield$response$json4.error;
              result = _yield$response$json4.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context7.abrupt("return", !error);

            case 16:
              _context7.prev = 16;
              _context7.t0 = _context7["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context7.abrupt("return", false);

            case 20:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 16]]);
    }));

    return function removeProduct(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  /**
   * Clear products of cart
   */


  var clearCart = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(uuid) {
      var body, response, _yield$response$json5, error, result;

      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify({
                uuid: uuid
              });
              _context8.next = 5;
              return fetch("".concat(ordering.root, "/carts/clear"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 5:
              response = _context8.sent;
              _context8.next = 8;
              return response.json();

            case 8:
              _yield$response$json5 = _context8.sent;
              error = _yield$response$json5.error;
              result = _yield$response$json5.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context8.abrupt("return", !error);

            case 16:
              _context8.prev = 16;
              _context8.t0 = _context8["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context8.abrupt("return", false);

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 16]]);
    }));

    return function clearCart(_x7) {
      return _ref9.apply(this, arguments);
    };
  }();
  /**
   * Update product to cart
   */


  var updateProduct = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(product) {
      var body, response, _yield$response$json6, error, result;

      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify({
                product: JSON.stringify(product)
              });
              _context9.next = 5;
              return fetch("".concat(ordering.root, "/carts/update_product"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 5:
              response = _context9.sent;
              _context9.next = 8;
              return response.json();

            case 8:
              _yield$response$json6 = _context9.sent;
              error = _yield$response$json6.error;
              result = _yield$response$json6.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context9.abrupt("return", !error);

            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context9.abrupt("return", false);

            case 20:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[0, 16]]);
    }));

    return function updateProduct(_x8) {
      return _ref10.apply(this, arguments);
    };
  }();
  /**
   * Apply coupon to cart
   */


  var applyCoupon = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10(couponData) {
      var _state$carts$;

      var body, response, _yield$response$json7, error, result;

      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (couponData.business_id) {
                _context10.next = 2;
                break;
              }

              throw new Error('`business_id` is required.');

            case 2:
              if (!(typeof couponData.coupon === 'undefined')) {
                _context10.next = 4;
                break;
              }

              throw new Error('`coupon` is required.');

            case 4:
              if (!(((_state$carts$ = state.carts["businessId:".concat(couponData.business_id)]) === null || _state$carts$ === void 0 ? void 0 : _state$carts$.coupon) === couponData.coupon)) {
                _context10.next = 6;
                break;
              }

              return _context10.abrupt("return");

            case 6:
              _context10.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify({
                business_id: couponData.business_id,
                coupon: couponData.coupon
              });
              _context10.next = 11;
              return fetch("".concat(ordering.root, "/carts/apply_coupon"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 11:
              response = _context10.sent;
              _context10.next = 14;
              return response.json();

            case 14:
              _yield$response$json7 = _context10.sent;
              error = _yield$response$json7.error;
              result = _yield$response$json7.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return", !error);

            case 22:
              _context10.prev = 22;
              _context10.t0 = _context10["catch"](6);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context10.abrupt("return", false);

            case 26:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[6, 22]]);
    }));

    return function applyCoupon(_x9) {
      return _ref11.apply(this, arguments);
    };
  }();
  /**
   * Apply coupon to cart
   */


  var changeDriverTip = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(businessId, driverTipRate) {
      var _state$carts$2;

      var body, response, _yield$response$json8, error, result;

      return _regenerator.default.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (businessId) {
                _context11.next = 2;
                break;
              }

              throw new Error('`businessId` is required.');

            case 2:
              if (!(!driverTipRate && driverTipRate !== 0)) {
                _context11.next = 4;
                break;
              }

              throw new Error('`driverTipRate` is required.');

            case 4:
              if (!(!state.carts["businessId:".concat(businessId)] || ((_state$carts$2 = state.carts["businessId:".concat(businessId)]) === null || _state$carts$2 === void 0 ? void 0 : _state$carts$2.driver_tip_rate) === driverTipRate)) {
                _context11.next = 6;
                break;
              }

              return _context11.abrupt("return");

            case 6:
              _context11.prev = 6;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify({
                business_id: businessId,
                driver_tip_rate: driverTipRate
              });
              _context11.next = 11;
              return fetch("".concat(ordering.root, "/carts/change_driver_tip"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 11:
              response = _context11.sent;
              _context11.next = 14;
              return response.json();

            case 14:
              _yield$response$json8 = _context11.sent;
              error = _yield$response$json8.error;
              result = _yield$response$json8.result;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                setAlert({
                  show: true,
                  content: result
                });
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context11.abrupt("return", !error);

            case 22:
              _context11.prev = 22;
              _context11.t0 = _context11["catch"](6);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context11.abrupt("return", false);

            case 26:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[6, 22]]);
    }));

    return function changeDriverTip(_x10, _x11) {
      return _ref12.apply(this, arguments);
    };
  }();
  /**
   * Place cart
   */


  var placeCart = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12(cardId, data) {
      var body, response, _yield$response$json9, error, result, cart;

      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              data.paymethod_data = JSON.stringify(data.paymethod_data);
              body = JSON.stringify(data);
              _context12.next = 6;
              return fetch("".concat(ordering.root, "/carts/").concat(cardId, "/place"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 6:
              response = _context12.sent;
              _context12.next = 9;
              return response.json();

            case 9:
              _yield$response$json9 = _context12.sent;
              error = _yield$response$json9.error;
              result = _yield$response$json9.result;
              cart = _yield$response$json9.cart;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                state.carts["businessId:".concat(cart.business_id)] = cart;
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return", {
                error: error,
                result: result
              });

            case 18:
              _context12.prev = 18;
              _context12.t0 = _context12["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context12.abrupt("return", {
                error: true,
                result: [_context12.t0.message]
              });

            case 22:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[0, 18]]);
    }));

    return function placeCart(_x12, _x13) {
      return _ref13.apply(this, arguments);
    };
  }();
  /**
   * Confirm cart
   */


  var confirmCart = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13(cardId, data) {
      var body, response, _yield$response$json10, error, result, cart;

      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              body = JSON.stringify(data);
              _context13.next = 5;
              return fetch("".concat(ordering.root, "/carts/").concat(cardId, "/confirm"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                },
                body: body
              });

            case 5:
              response = _context13.sent;
              _context13.next = 8;
              return response.json();

            case 8:
              _yield$response$json10 = _context13.sent;
              error = _yield$response$json10.error;
              result = _yield$response$json10.result;
              cart = _yield$response$json10.cart;

              if (!error) {
                state.carts["businessId:".concat(result.business_id)] = result;
              } else {
                state.carts["businessId:".concat(cart.business_id)] = cart;
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context13.abrupt("return", {
                error: error,
                result: result
              });

            case 17:
              _context13.prev = 17;
              _context13.t0 = _context13["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));
              return _context13.abrupt("return", {
                error: true,
                result: [_context13.t0.message]
              });

            case 21:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[0, 17]]);
    }));

    return function confirmCart(_x14, _x15) {
      return _ref14.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (session.auth) {
      refreshOrderOptions();
    } else {
      var options = JSON.parse(localStorage.getItem('options'));
      setState(_objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        options: {
          type: (options === null || options === void 0 ? void 0 : options.type) || 1,
          moment: (options === null || options === void 0 ? void 0 : options.type) || null,
          address: (options === null || options === void 0 ? void 0 : options.address) || {}
        }
      }));
    }
  }, [session]);
  /**
   * Update carts from sockets
   */

  (0, _react.useEffect)(function () {
    var handleCartUpdate = function handleCartUpdate(cart) {
      state.carts["businessId:".concat(cart.business_id)] = _objectSpread(_objectSpread({}, state.carts["businessId:".concat(cart.business_id)]), cart);
      setState(_objectSpread({}, state));
    };

    socket.on('carts_update', handleCartUpdate);
    return function () {
      socket.off('carts_update', handleCartUpdate);
    };
  }, [state, socket]);
  /**
   * Join to carts room
   */

  (0, _react.useEffect)(function () {
    if (!session.auth) return;
    socket.join("carts_".concat(session.user.id));
    return function () {
      socket.leave("carts_".concat(session.user.id));
    };
  }, [socket]);
  var functions = {
    refreshOrderOptions: refreshOrderOptions,
    changeAddress: changeAddress,
    changeType: changeType,
    changeMoment: changeMoment,
    addProduct: addProduct,
    removeProduct: removeProduct,
    updateProduct: updateProduct,
    clearCart: clearCart,
    applyCoupon: applyCoupon,
    changeDriverTip: changeDriverTip,
    placeCart: placeCart,
    confirmCart: confirmCart,
    setAlert: setAlert,
    setConfirm: setConfirm
  };
  var copyState = JSON.parse(JSON.stringify(state));
  return /*#__PURE__*/_react.default.createElement(OrderContext.Provider, {
    value: [copyState, functions]
  }, /*#__PURE__*/_react.default.createElement(_Popup.Popup // UIComponent={AlertUI}
  , {
    open: confirmAlert.show,
    title: "Confirm",
    onAccept: function onAccept() {
      return confirmAlert.onConfirm();
    },
    onCancel: function onCancel() {
      return setConfirm({
        show: false
      });
    },
    onClose: function onClose() {
      return setConfirm({
        show: false
      });
    },
    content: confirmAlert.content
  }), /*#__PURE__*/_react.default.createElement(_Popup.Popup // UIComponent={AlertUI}
  , {
    open: alert.show,
    title: "Error",
    onAccept: function onAccept() {
      return setAlert({
        show: false
      });
    },
    onClose: function onClose() {
      return setAlert({
        show: false
      });
    },
    content: alert.content
  }), children);
};
/**
 * Hook to get and update order state
 */


exports.OrderProvider = OrderProvider;

var useOrder = function useOrder() {
  var orderManager = (0, _react.useContext)(OrderContext);

  var warningMessage = function warningMessage() {
    console.warn('Must use OrderProvider to wrappe the app.');
  };
  /**
   * Functions to avoid fails
   */


  var functionsPlaceholders = {
    refreshOrderOptions: warningMessage,
    changeAddress: warningMessage,
    changeType: warningMessage,
    changeMoment: warningMessage,
    addProduct: warningMessage,
    removeProduct: warningMessage,
    updateProduct: warningMessage,
    clearCart: warningMessage,
    applyCoupon: warningMessage,
    placeCart: warningMessage,
    confirmCart: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage,
    changeDriverTip: warningMessage
  };
  return orderManager || [{}, functionsPlaceholders];
};

exports.useOrder = useOrder;