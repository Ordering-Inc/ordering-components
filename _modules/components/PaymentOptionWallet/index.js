"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionWallet = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _OrderContext = require("../../contexts/OrderContext");

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

var PaymentOptionWallet = function PaymentOptionWallet(props) {
  var cart = props.cart,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      setStateValues = _useOrder2[1].setStateValues;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var requestsState = {};

  var _useState = (0, _react.useState)({
    result: [],
    loyaltyPlans: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      walletsState = _useState2[0],
      setWalletsState = _useState2[1];

  var getRedemptionRate = function getRedemptionRate(wallet, loyaltyPlans) {
    var _businessLoyaltyPlan$;

    if (wallet.type === 'cash') return 100;
    if (!(loyaltyPlans !== null && loyaltyPlans !== void 0 && loyaltyPlans.length)) return false;
    var loyaltyPlan = loyaltyPlans.find(function (plan) {
      return plan.type === wallet.type;
    });
    if (!loyaltyPlan) return false;
    var businessLoyaltyPlan = loyaltyPlan.businesses.find(function (business) {
      return business.business_id === cart.business_id;
    });
    if (!businessLoyaltyPlan && loyaltyPlan.businesses.length) return false;
    if (businessLoyaltyPlan && !businessLoyaltyPlan.redeems) return false;
    var redemptionRate = (_businessLoyaltyPlan$ = businessLoyaltyPlan === null || businessLoyaltyPlan === void 0 ? void 0 : businessLoyaltyPlan.redemption_rate) !== null && _businessLoyaltyPlan$ !== void 0 ? _businessLoyaltyPlan$ : loyaltyPlan === null || loyaltyPlan === void 0 ? void 0 : loyaltyPlan.redemption_rate;
    return redemptionRate;
  };

  var getWallets = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response, _yield$response$json, error, result, reqLoyalty, resLoyalty, wallets, loyaltyPlans;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(ordering.root, "/users/").concat(user.id, "/wallets"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;
              _context.next = 11;
              return fetch("".concat(ordering.root, "/loyalty_plans"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 11:
              reqLoyalty = _context.sent;
              _context.next = 14;
              return reqLoyalty.json();

            case 14:
              resLoyalty = _context.sent;
              wallets = [];

              if (!error) {
                loyaltyPlans = resLoyalty.result;
                wallets = result.map(function (wallet) {
                  var redemptionRate = getRedemptionRate(wallet, loyaltyPlans);

                  if (redemptionRate === false) {
                    wallet.valid = false;
                    wallet.redemption_rate = null;
                  } else {
                    wallet.valid = true;
                    wallet.redemption_rate = redemptionRate;
                  }

                  return wallet;
                });
              }

              setWalletsState(_objectSpread(_objectSpread({}, walletsState), {}, {
                loading: false,
                error: error ? result : null,
                result: error ? null : wallets,
                loyaltyPlans: resLoyalty !== null && resLoyalty !== void 0 && resLoyalty.error ? [] : resLoyalty === null || resLoyalty === void 0 ? void 0 : resLoyalty.result
              }));
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setWalletsState(_objectSpread(_objectSpread({}, walletsState), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 20]]);
    }));

    return function getWallets() {
      return _ref.apply(this, arguments);
    };
  }();

  var selectWallet = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(wallet) {
      var response, _yield$response$json2, error, result, carts;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("".concat(ordering.root, "/carts/").concat(cart.uuid, "/wallets"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  wallet_id: wallet.id,
                  amount: wallet.balance
                })
              });

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

              if (!error) {
                carts = orderState.carts;
                carts["businessId:".concat(result.business_id)] = _objectSpread(_objectSpread({}, carts["businessId:".concat(result.business_id)]), result);
                setStateValues({
                  carts: carts
                });
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);

              if (_context2.t0.constructor.name !== 'Cancel') {
                console.log(_context2.t0);
              }

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function selectWallet(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deletetWalletSelected = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(wallet) {
      var response, _yield$response$json3, error, result, carts;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fetch("".concat(ordering.root, "/carts/").concat(cart.uuid, "/wallets/").concat(wallet.id), {
                method: 'DELETE',
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
              _yield$response$json3 = _context3.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                carts = orderState.carts;
                carts["businessId:".concat(result.business_id)] = _objectSpread(_objectSpread({}, carts["businessId:".concat(result.business_id)]), result);
                setStateValues({
                  carts: carts
                });
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);

              if (_context3.t0.constructor.name !== 'Cancel') {
                console.log(_context3.t0);
              }

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function deletetWalletSelected(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getWallets();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    walletsState: walletsState,
    selectWallet: selectWallet,
    deletetWalletSelected: deletetWalletSelected
  })));
};

exports.PaymentOptionWallet = PaymentOptionWallet;
PaymentOptionWallet.defaultProps = {};