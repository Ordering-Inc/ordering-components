"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _EventContext = require("../../contexts/EventContext");
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t11 in e) "default" !== _t11 && {}.hasOwnProperty.call(e, _t11) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t11)) && (i.get || i.set) ? o(f, _t11, i) : f[_t11] = e[_t11]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderDetails = exports.OrderDetails = function OrderDetails(props) {
  var _props$order, _props$order2, _orderState$order, _orderState$order11, _orderState$order12, _orderState$order13, _orderState$order19, _orderState$order20, _orderState$order21;
  var orderId = props.orderId,
    orderAssingId = props.orderAssingId,
    hashKey = props.hashKey,
    UIComponent = props.UIComponent,
    userCustomerId = props.userCustomerId,
    isFetchDrivers = props.isFetchDrivers,
    driverAndBusinessId = props.driverAndBusinessId,
    sendCustomMessage = props.sendCustomMessage,
    isDisabledOrdersRoom = props.isDisabledOrdersRoom,
    isDriverNotification = props.isDriverNotification;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var accessToken = props.accessToken || token;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    _useOrder2$ = _useOrder2[1],
    reorder = _useOrder2$.reorder,
    clearCart = _useOrder2$.clearCart;
  var _useState = (0, _react.useState)({
      order: (_props$order = props.order) !== null && _props$order !== void 0 ? _props$order : null,
      businessData: {},
      loading: !props.order,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderState = _useState2[0],
    setOrderState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      drivers: [],
      loadingDriver: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    drivers = _useState4[0],
    setDrivers = _useState4[1];
  var _useState5 = (0, _react.useState)({
      status: null,
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messageErrors = _useState6[0],
    setMessageErrors = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    messages = _useState8[0],
    setMessages = _useState8[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useState9 = (0, _react.useState)(((_props$order2 = props.order) === null || _props$order2 === void 0 || (_props$order2 = _props$order2.driver) === null || _props$order2 === void 0 ? void 0 : _props$order2.location) || ((_orderState$order = orderState.order) === null || _orderState$order === void 0 || (_orderState$order = _orderState$order.driver) === null || _orderState$order === void 0 ? void 0 : _orderState$order.location) || null),
    _useState0 = _slicedToArray(_useState9, 2),
    driverLocation = _useState0[0],
    setDriverLocation = _useState0[1];
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    messagesReadList = _useState10[0],
    setMessagesReadList = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null,
      newLocation: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    driverUpdateLocation = _useState12[0],
    setDriverUpdateLocation = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    forceUpdate = _useState14[0],
    setForceUpdate = _useState14[1];
  var _useState15 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    reorderState = _useState16[0],
    setReorderState = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    cartState = _useState18[0],
    setCartState = _useState18[1];
  /**
   * Method to accept or reject a logistic order
   */

  var handleClickLogisticOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(status, orderId, orders) {
      var response, _yield$response$json, result, error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return fetch("".concat(ordering.root, "/drivers/").concat(user === null || user === void 0 ? void 0 : user.id, "/assign_requests/").concat(orderId), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify({
                status: status,
                user_id: user === null || user === void 0 ? void 0 : user.id
              })
            });
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context.n = 3;
              break;
            }
            if (status === 1) {
              showToast(_ToastContext.ToastType.Success, t('SPECIFIC_ORDER_ACCEPTED', 'Your accepted the order number _NUMBER_').replace('_NUMBER_', orders === null || orders === void 0 ? void 0 : orders.id));
            } else {
              showToast(_ToastContext.ToastType.Info, t('SPECIFIC_ORDER_REJECTED', 'Your rejected the order number _NUMBER_').replace('_NUMBER_', orders === null || orders === void 0 ? void 0 : orders.id));
            }
            return _context.a(2);
          case 3:
            showToast(_ToastContext.ToastType.Error, result);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            showToast(_ToastContext.ToastType.Error, _t.message);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 4]]);
    }));
    return function handleClickLogisticOrder(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var propsToFetch = ['header', 'slug'];
  var deliveryMessages = {
    delivery: {
      text: 'outside delivery area, insert reasons to force update',
      value: 11
    },
    pickup: {
      text: 'outside pickup area, insert reasons to force update',
      value: 9
    }
  };
  var requestsState = {};

  /**
   * Method to format a price number
   * @param {Number} price
   */
  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _orderState$order2, _orderState$order3, url, response, _yield$response$json2, error, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = userCustomerId || driverAndBusinessId ? "".concat(ordering.root, "/orders/").concat((_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.id, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat((_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.id, "/messages");
            _context2.n = 1;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context2.v;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error) {
              setMessages({
                messages: result,
                loading: false,
                error: null
              });
            } else {
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: result
              }));
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_t2.Messages]
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function loadMessages() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to send a message
   * @param {string} spot
   */
  var sendMessage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(spot) {
      var _orderState$order4, _orderState$order5, _yield$fetch, status, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!sendCustomMessage) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, sendCustomMessage(spot));
          case 1:
            _context3.p = 1;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: true
            }));
            _context3.n = 2;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/messages"), {
              method: 'post',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                can_see: '0,2,3',
                comment: "I am on the parking number: ".concat(spot),
                order_id: (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.id,
                type: 2
              })
            });
          case 2:
            _yield$fetch = _context3.v;
            status = _yield$fetch.status;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              status: status
            }));
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              error: [_t3.message]
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function sendMessage(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to update differents orders status
  */
  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(status) {
      var isAcceptOrReject,
        options,
        dataToSave,
        _orderState$order6,
        order,
        _orderState$order$id,
        _orderState$order7,
        bodyToSend,
        _yield$ordering$setAc,
        _yield$ordering$setAc2,
        result,
        error,
        selected,
        message,
        defaultMessage,
        _args4 = arguments,
        _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            isAcceptOrReject = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            options = _args4.length > 2 ? _args4[2] : undefined;
            dataToSave = options === null || options === void 0 ? void 0 : options.dataToSave;
            if (!dataToSave) {
              _context4.n = 1;
              break;
            }
            order = Object.assign(orderState.order, _objectSpread(_objectSpread({}, dataToSave), {}, {
              oldStatus: (_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.status
            }));
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              order: order
            }));
            return _context4.a(2, order);
          case 1:
            _context4.p = 1;
            bodyToSend = Object.keys(isAcceptOrReject || {}).length > 0 ? isAcceptOrReject : {
              status: status
            };
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            _context4.n = 2;
            return ordering.setAccessToken(token).orders((_orderState$order$id = (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.id) !== null && _orderState$order$id !== void 0 ? _orderState$order$id : orderId).save(bodyToSend);
          case 2:
            _yield$ordering$setAc = _context4.v;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            result = _yield$ordering$setAc2.result;
            error = _yield$ordering$setAc2.error;
            if (error) {
              _context4.n = 3;
              break;
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              order: Object.assign(orderState.order, result),
              loading: false
            }));
            return _context4.a(2, Object.assign(orderState.order, result));
          case 3:
            if (!error) {
              _context4.n = 4;
              break;
            }
            selected = result.includes(deliveryMessages.delivery.text) ? deliveryMessages.delivery : result.includes(deliveryMessages.pickup.text) ? deliveryMessages.pickup : null;
            if (selected) {
              setForceUpdate(null);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false
              }));
              setForceUpdate(selected.value);
            } else {
              message = Array.isArray(result) ? result[0] : typeof result === 'string' ? result : 'INTERNAL_ERROR';
              defaultMessage = message !== 'INTERNAL_ERROR' ? message : t('INTERNAL_ERROR', 'Internal Error');
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                error: [defaultMessage],
                loading: false
              }));
            }
            return _context4.a(2, null);
          case 4:
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t4 = _context4.v;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_t4 === null || _t4 === void 0 ? void 0 : _t4.message) || t('NETWORK_ERROR', 'Network Error')]
            }));
            return _context4.a(2, null);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 5]]);
    }));
    return function handleChangeOrderStatus(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var updateDriverPosition = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var newLocation,
        _yield$ordering$setAc3,
        _yield$ordering$setAc4,
        error,
        result,
        _args5 = arguments,
        _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            newLocation = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
            _context5.p = 1;
            setDriverLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
              loading: true
            }));
            _context5.n = 2;
            return ordering.setAccessToken(token).users(user === null || user === void 0 ? void 0 : user.id).driverLocations().save(newLocation);
          case 2:
            _yield$ordering$setAc3 = _context5.v;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            error = _yield$ordering$setAc4.error;
            result = _yield$ordering$setAc4.result;
            if (error) {
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                error: [result[0] || result || t('ERROR_UPDATING_POSITION', 'Error updating position')]
              }));
            } else {
              setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
                loading: false,
                newLocation: _objectSpread(_objectSpread({}, newLocation), result)
              }));
            }
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            setDriverUpdateLocation(_objectSpread(_objectSpread({}, driverUpdateLocation), {}, {
              loading: false,
              error: [(_t5 === null || _t5 === void 0 ? void 0 : _t5.message) || t('NETWORK_ERROR', 'Network Error')]
            }));
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 3]]);
    }));
    return function updateDriverPosition() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
     * Method to assign a driver for order
  */
  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(driverId) {
      var _orderState$order$id2, _orderState$order8, bodyToSend, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, _drivers$error, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            bodyToSend = {
              driver_id: driverId
            };
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            _context6.n = 1;
            return ordering.setAccessToken(token).orders((_orderState$order$id2 = orderState === null || orderState === void 0 || (_orderState$order8 = orderState.order) === null || _orderState$order8 === void 0 ? void 0 : _orderState$order8.id) !== null && _orderState$order$id2 !== void 0 ? _orderState$order$id2 : orderId).save(bodyToSend);
          case 1:
            _yield$ordering$setAc5 = _context6.v;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            error = _yield$ordering$setAc6.error;
            result = _yield$ordering$setAc6.result;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: Object.assign(orderState.order, result),
              error: error ? result : null
            }));
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t6 = _context6.v;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: _t6 !== null && _t6 !== void 0 && _t6.message ? (_drivers$error = drivers.error) === null || _drivers$error === void 0 ? void 0 : _drivers$error.push(_t6 === null || _t6 === void 0 ? void 0 : _t6.message) : ['ERROR']
            }));
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return function handleAssignDriver(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref7) {
    var spot = _ref7.spot;
    sendMessage(spot);
  };

  /**
   * Method to get order from API
   */
  var getOrder = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var source, options, _result, result, error, response, res, _yield$ordering$setAc7, content, order, err, businessData, _yield$ordering$setAc8, _content, _e$message, _order$id, _e$message2, _t7, _t8;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            source = {};
            requestsState.order = source;
            requestsState.business = source;
            options = {};
            if (hashKey) {
              options.headers = {
                'X-uuid-access-X': hashKey
              };
            }
            if (userCustomerId || driverAndBusinessId) {
              options.query = {
                mode: 'dashboard'
              };
            }
            _context7.p = 1;
            if (!orderAssingId) {
              _context7.n = 4;
              break;
            }
            _context7.n = 2;
            return fetch("".concat(ordering.root, "/drivers/").concat(user.id, "/assign_requests/").concat(orderAssingId), {
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 2:
            response = _context7.v;
            _context7.n = 3;
            return response.json();
          case 3:
            res = _context7.v;
            result = res.result;
            error = res.error;
            _context7.n = 6;
            break;
          case 4:
            _context7.n = 5;
            return ordering.setAccessToken(token).orders(orderId).get(_objectSpread(_objectSpread({}, options), {}, {
              cancelToken: source
            }));
          case 5:
            _yield$ordering$setAc7 = _context7.v;
            content = _yield$ordering$setAc7.content;
            result = content.result;
            error = content.error;
          case 6:
            order = error ? null : ((_result = result) === null || _result === void 0 ? void 0 : _result.order) || result;
            err = error ? Array.isArray(result) ? result[0] : result : null;
            businessData = null;
            if (!err) {
              _context7.n = 7;
              break;
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [err !== null && err !== void 0 ? err : 'ERROR']
            }));
            return _context7.a(2);
          case 7:
            _context7.p = 7;
            _context7.n = 8;
            return ordering.setAccessToken(token).businesses(order === null || order === void 0 ? void 0 : order.business_id).select(propsToFetch).get({
              cancelToken: source
            });
          case 8:
            _yield$ordering$setAc8 = _context7.v;
            _content = _yield$ordering$setAc8.content;
            businessData = _content.result;
            _content.error && (err = _content.result[0]);
            _context7.n = 10;
            break;
          case 9:
            _context7.p = 9;
            _t7 = _context7.v;
            err = [(_e$message = _t7.message) !== null && _e$message !== void 0 ? _e$message : 'ERROR'];
          case 10:
            if (isFetchDrivers) {
              getDrivers((_order$id = order === null || order === void 0 ? void 0 : order.id) !== null && _order$id !== void 0 ? _order$id : orderId);
            }
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: order,
              businessData: businessData,
              error: err
            }));
            _context7.n = 12;
            break;
          case 11:
            _context7.p = 11;
            _t8 = _context7.v;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [(_e$message2 = _t8.message) !== null && _e$message2 !== void 0 ? _e$message2 : 'ERROR']
            }));
          case 12:
            return _context7.a(2);
        }
      }, _callee7, null, [[7, 9], [1, 11]]);
    }));
    return function getOrder() {
      return _ref8.apply(this, arguments);
    };
  }();
  var readMessages = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _messages$messages, _messages$messages2;
      var messageId, _orderState$order9, _orderState$order0, response, _yield$response$json3, result, _t9;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            messageId = messages === null || messages === void 0 || (_messages$messages = messages.messages[(messages === null || messages === void 0 || (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
            if (messageId) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2);
          case 1:
            _context8.p = 1;
            _context8.n = 2;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order9 = orderState.order) === null || _orderState$order9 === void 0 ? void 0 : _orderState$order9.id, "/messages/").concat(messageId, "/read?order_id=").concat(orderId, "&order_message_id=").concat(messageId), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 2:
            response = _context8.v;
            _context8.n = 3;
            return response.json();
          case 3:
            _yield$response$json3 = _context8.v;
            result = _yield$response$json3.result;
            setMessagesReadList(result);
            events.emit('order_message_read', (_orderState$order0 = orderState.order) === null || _orderState$order0 === void 0 ? void 0 : _orderState$order0.id);
            _context8.n = 5;
            break;
          case 4:
            _context8.p = 4;
            _t9 = _context8.v;
            console.log(_t9.message);
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 4]]);
    }));
    return function readMessages() {
      return _ref9.apply(this, arguments);
    };
  }();
  var getDrivers = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(orderId) {
      var _yield$ordering$setAc9, _yield$ordering$setAc0, error, result, _drivers$error2, _t0;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: true
            }));
            _context9.n = 1;
            return ordering.setAccessToken(token).controls(orderId).get();
          case 1:
            _yield$ordering$setAc9 = _context9.v;
            _yield$ordering$setAc0 = _yield$ordering$setAc9.content;
            error = _yield$ordering$setAc0.error;
            result = _yield$ordering$setAc0.result;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: false,
              drivers: result.drivers,
              error: error ? result : null
            }));
            _context9.n = 3;
            break;
          case 2:
            _context9.p = 2;
            _t0 = _context9.v;
            setDrivers(_objectSpread(_objectSpread({}, drivers), {}, {
              loadingDriver: false,
              error: _t0 !== null && _t0 !== void 0 && _t0.message ? (_drivers$error2 = drivers.error) === null || _drivers$error2 === void 0 ? void 0 : _drivers$error2.push(_t0 === null || _t0 === void 0 ? void 0 : _t0.message) : ['ERROR']
            }));
          case 3:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 2]]);
    }));
    return function getDrivers(_x7) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleReorder = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(orderId) {
      var _yield$reorder, error, result, _t1;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (orderId) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            _context0.p = 1;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            _context0.n = 2;
            return reorder(orderId);
          case 2:
            _yield$reorder = _context0.v;
            error = _yield$reorder.error;
            result = _yield$reorder.result;
            if (!error) {
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                result: result
              }));
            } else {
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: result
              }));
            }
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t1 = _context0.v;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_t1 === null || _t1 === void 0 ? void 0 : _t1.message]
            }));
          case 4:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 3]]);
    }));
    return function handleReorder(_x8) {
      return _ref1.apply(this, arguments);
    };
  }();

  /**
  * Method to remove products from cart
  */
  var handleRemoveCart = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var _carts;
      var uuid, content, _orderState$order1, _t10;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            uuid = (_carts = carts["businessId:".concat(orderState === null || orderState === void 0 ? void 0 : orderState.order.business_id)]) === null || _carts === void 0 ? void 0 : _carts.uuid;
            if (uuid) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            _context1.p = 1;
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            _context1.n = 2;
            return clearCart(uuid);
          case 2:
            content = _context1.v;
            if (!(content !== null && content !== void 0 && content.error)) {
              handleReorder(orderState === null || orderState === void 0 || (_orderState$order1 = orderState.order) === null || _orderState$order1 === void 0 ? void 0 : _orderState$order1.id);
              setCartState({
                loading: false,
                error: null
              });
            } else {
              setCartState({
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              });
            }
            _context1.n = 4;
            break;
          case 3:
            _context1.p = 3;
            _t10 = _context1.v;
            setCartState({
              loading: false,
              error: [_t10.message]
            });
          case 4:
            return _context1.a(2);
        }
      }, _callee1, null, [[1, 3]]);
    }));
    return function handleRemoveCart() {
      return _ref10.apply(this, arguments);
    };
  }();

  /**
   * Method to get room socket
   * @param {String} roomType drivers, orders
   * @returns socket room
   */
  var getRoom = function getRoom(roomType) {
    var _orderState$order10;
    return !token ? {
      room: roomType,
      project: ordering.project,
      role: 'public',
      user_id: hashKey
    } : roomType === 'orders' ? (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id)) : "drivers_".concat((_orderState$order10 = orderState.order) === null || _orderState$order10 === void 0 ? void 0 : _orderState$order10.driver_id);
  };
  (0, _react.useEffect)(function () {
    !orderState.loading && loadMessages();
  }, [orderState === null || orderState === void 0 || (_orderState$order11 = orderState.order) === null || _orderState$order11 === void 0 ? void 0 : _orderState$order11.id, orderState === null || orderState === void 0 || (_orderState$order12 = orderState.order) === null || _orderState$order12 === void 0 ? void 0 : _orderState$order12.status, orderState.loading]);
  (0, _react.useEffect)(function () {
    if (props.order && !isDriverNotification) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        loading: false,
        order: props.order
      }));
      if (isFetchDrivers) {
        var _props$order$id, _props$order3;
        getDrivers((_props$order$id = (_props$order3 = props.order) === null || _props$order3 === void 0 ? void 0 : _props$order3.id) !== null && _props$order$id !== void 0 ? _props$order$id : orderId);
      }
    } else if (!orderState.order && !isDriverNotification) {
      getOrder();
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, [props.order, (_orderState$order13 = orderState.order) === null || _orderState$order13 === void 0 ? void 0 : _orderState$order13.id]);
  (0, _react.useEffect)(function () {
    if (orderId && isDriverNotification) {
      getOrder();
    }
  }, [orderId, isDriverNotification]);
  (0, _react.useEffect)(function () {
    var _orderState$order17, _socket$socket, _socket$socket2;
    if (orderState.loading || loading || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var handleUpdateOrderDetails = function handleUpdateOrderDetails(order) {
      var _orderState$order14;
      if ((order === null || order === void 0 ? void 0 : order.id) !== ((_orderState$order14 = orderState.order) === null || _orderState$order14 === void 0 ? void 0 : _orderState$order14.id)) return;
      showToast(_ToastContext.ToastType.Info, t('UPDATING_ORDER', 'Updating order...'), 1000);
      delete order.total;
      delete order.subtotal;
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
      events.emit('order_updated', Object.assign(orderState.order, order));
    };
    var handleTrackingDriver = function handleTrackingDriver(props) {
      var _orderState$order15, _orderState$order16;
      var location = props.location;
      var driverId = props.driver_id;
      if (driverId !== (orderState === null || orderState === void 0 || (_orderState$order15 = orderState.order) === null || _orderState$order15 === void 0 ? void 0 : _orderState$order15.driver_id)) return;
      var newLocation = location !== null && location !== void 0 ? location : {
        lat: -37.9722342,
        lng: 144.7729561
      };
      setDriverLocation(newLocation);
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          driver: _objectSpread(_objectSpread({}, (_orderState$order16 = orderState.order) === null || _orderState$order16 === void 0 ? void 0 : _orderState$order16.driver), {}, {
            location: newLocation
          })
        })
      }));
    };
    if (!isDisabledOrdersRoom) socket.join(getRoom('orders'));
    if ((_orderState$order17 = orderState.order) !== null && _orderState$order17 !== void 0 && _orderState$order17.driver_id) {
      socket.join(getRoom('drivers'));
    }
    socket.socket.on('connect', function () {
      var _orderState$order18;
      if (!isDisabledOrdersRoom) socket.join(getRoom('orders'));
      if ((_orderState$order18 = orderState.order) !== null && _orderState$order18 !== void 0 && _orderState$order18.driver_id) {
        socket.join(getRoom('drivers'));
      }
    });
    socket.on('tracking_driver', handleTrackingDriver);
    if (!(socket !== null && socket !== void 0 && (_socket$socket = socket.socket) !== null && _socket$socket !== void 0 && (_socket$socket = _socket$socket._callbacks) !== null && _socket$socket !== void 0 && _socket$socket.$update_order) || socket !== null && socket !== void 0 && (_socket$socket2 = socket.socket) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2._callbacks) !== null && _socket$socket2 !== void 0 && (_socket$socket2 = _socket$socket2.$update_order) !== null && _socket$socket2 !== void 0 && _socket$socket2.find(function (func) {
      return (func === null || func === void 0 ? void 0 : func.name) !== 'handleUpdateOrderDetails';
    })) {
      socket.on('update_order', handleUpdateOrderDetails);
    }
    return function () {
      if (!isDisabledOrdersRoom) socket.leave(getRoom('orders'));
      socket.off('update_order', handleUpdateOrderDetails);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [orderState === null || orderState === void 0 ? void 0 : orderState.loading, socket === null || socket === void 0 ? void 0 : socket.socket, loading, userCustomerId, (_orderState$order19 = orderState.order) === null || _orderState$order19 === void 0 ? void 0 : _orderState$order19.driver_id, (_orderState$order20 = orderState.order) === null || _orderState$order20 === void 0 ? void 0 : _orderState$order20.id, hashKey]);
  (0, _react.useEffect)(function () {
    if (messages.loading) return;
    var handleNewMessage = function handleNewMessage(message) {
      var _messages$messages3;
      var actualChat = messages === null || messages === void 0 || (_messages$messages3 = messages.messages) === null || _messages$messages3 === void 0 ? void 0 : _messages$messages3.find(function (_message) {
        var _message$order;
        return (_message === null || _message === void 0 ? void 0 : _message.order_id) === (message === null || message === void 0 || (_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id);
      });
      var found = messages.messages.find(function (_message) {
        return _message.id === message.id;
      });
      if (!found && actualChat) {
        setMessages(_objectSpread(_objectSpread({}, messages), {}, {
          messages: [].concat(_toConsumableArray(messages.messages), [message])
        }));
      }
    };
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, (_orderState$order21 = orderState.order) === null || _orderState$order21 === void 0 ? void 0 : _orderState$order21.status, userCustomerId]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id));
    socket.join(messagesOrdersRoom);
    socket.socket.on('connect', function () {
      socket.join(messagesOrdersRoom);
    });
    return function () {
      // neccesary refactor
      if (!isDisabledOrdersRoom) socket.leave(messagesOrdersRoom);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, userCustomerId]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          user_review: review
        })
      }));
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    updateDriverPosition: updateDriverPosition,
    driverLocation: driverLocation,
    messageErrors: messageErrors,
    formatPrice: formatPrice,
    handleAssignDriver: handleAssignDriver,
    handlerSubmit: handlerSubmitSpotNumber,
    handleChangeOrderStatus: handleChangeOrderStatus,
    messages: messages,
    drivers: drivers,
    setMessages: setMessages,
    readMessages: readMessages,
    messagesReadList: messagesReadList,
    driverUpdateLocation: driverUpdateLocation,
    setDriverUpdateLocation: setDriverUpdateLocation,
    forceUpdate: forceUpdate,
    getOrder: getOrder,
    reorderState: reorderState,
    handleReorder: handleReorder,
    handleRemoveCart: handleRemoveCart,
    cartState: cartState,
    handleClickLogisticOrder: handleClickLogisticOrder,
    loadMessages: loadMessages
  })));
};
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};