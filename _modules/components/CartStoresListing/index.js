"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartStoresListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _OrderContext = require("../../contexts/OrderContext");

var _EventContext = require("../../contexts/EventContext");

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

var CartStoresListing = function CartStoresListing(props) {
  var UIComponent = props.UIComponent,
      cartuuid = props.cartuuid,
      cartStoresList = props.cartStoresList,
      pageChangeStore = props.pageChangeStore,
      isStore = props.isStore,
      handleCustomStoreRedirect = props.handleCustomStoreRedirect;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      setStateValues = _useOrder2[1].setStateValues;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      businessIdSelect = _useState4[0],
      setBusinessIdSelect = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: !cartStoresList,
    result: null,
    error: null,
    original: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      state = _useState6[0],
      setState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    result: null,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      changeStoreState = _useState8[0],
      setChangeStore = _useState8[1];

  var requestsState = {};

  var getCartStores = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$setAc, _yield$ordering$setAc2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              source = {};
              requestsState.businesses = source;
              _context.next = 6;
              return ordering.setAccessToken(token).carts(cartuuid).getBusinesses({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              error = _yield$ordering$setAc2.error;
              result = _yield$ordering$setAc2.result;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                result: error ? [error] : result,
                original: error ? [error] : result,
                error: error ? true : null,
                loading: false
              }));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                error: [_context.t0],
                loading: false
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function getCartStores() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCartStoreChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(businessId) {
      var _yield$ordering$setAc3, _yield$ordering$setAc4, error, result, _orderState$carts, carts, cartFinded, route, _result$business, _result$business2;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setBusinessIdSelect(businessId);
              _context2.prev = 1;
              setChangeStore(_objectSpread(_objectSpread({}, changeStoreState), {}, {
                loading: true
              }));
              _context2.next = 5;
              return ordering.setAccessToken(token).carts(cartuuid).set({
                business_id: businessId
              });

            case 5:
              _yield$ordering$setAc3 = _context2.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;

              if (!error) {
                carts = orderState.carts;
                cartFinded = Object.values((_orderState$carts = orderState === null || orderState === void 0 ? void 0 : orderState.carts) !== null && _orderState$carts !== void 0 ? _orderState$carts : {}).find(function (_cart) {
                  return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === result.uuid;
                });

                if (cartFinded) {
                  delete carts["businessId:".concat(cartFinded === null || cartFinded === void 0 ? void 0 : cartFinded.business_id)];
                }

                carts["businessId:".concat(result === null || result === void 0 ? void 0 : result.business_id)] = result;
                setStateValues({
                  carts: carts
                });
                route = window.location.pathname;

                if (isStore) {
                  if (handleCustomStoreRedirect) {
                    handleCustomStoreRedirect(result === null || result === void 0 ? void 0 : (_result$business = result.business) === null || _result$business === void 0 ? void 0 : _result$business.slug);
                  } else if (route.includes('/store/') && pageChangeStore) {
                    events.emit('go_to_page', {
                      page: pageChangeStore,
                      params: {
                        store: result === null || result === void 0 ? void 0 : (_result$business2 = result.business) === null || _result$business2 === void 0 ? void 0 : _result$business2.slug
                      }
                    });
                  }
                }
              }

              setChangeStore(_objectSpread(_objectSpread({}, state), {}, {
                result: error ? [error] : result,
                error: error ? true : null,
                loading: false
              }));

              if (!error) {
                props.onClose && props.onClose();
              }

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              setChangeStore(_objectSpread(_objectSpread({}, state), {}, {
                error: [_context2.t0],
                loading: false
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 14]]);
    }));

    return function handleCartStoreChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!cartStoresList) {
      getCartStores();
    } else {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        result: cartStoresList,
        error: null,
        loading: false
      }));
    }

    return function () {
      if (requestsState.businesses) {
        requestsState.businesses.cancel();
      }
    };
  }, [cartStoresList]);
  (0, _react.useEffect)(function () {
    if (!searchValue) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        result: state.original
      }));
    } else {
      var _state$original;

      setState(_objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        result: (_state$original = state.original) !== null && _state$original !== void 0 && _state$original.length ? state.original.filter(function (business) {
          return business.name.toLowerCase().includes(searchValue.toLowerCase());
        }) : null
      }));
    }
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    storesState: state,
    businessIdSelect: businessIdSelect,
    searchValue: searchValue,
    changeStoreState: changeStoreState,
    handleCartStoreChange: handleCartStoreChange,
    handleChangeSearch: setSearchValue
  }));
};

exports.CartStoresListing = CartStoresListing;
CartStoresListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * cartuuid to fetch allowed businesses
  */
  cartuuid: _propTypes.default.string.isRequired
};