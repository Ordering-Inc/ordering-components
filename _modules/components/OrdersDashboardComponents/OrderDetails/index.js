"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _EventContext = require("../../../contexts/EventContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _ToastContext = require("../../../contexts/ToastContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t8 in e) "default" !== _t8 && {}.hasOwnProperty.call(e, _t8) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t8)) && (i.get || i.set) ? o(f, _t8, i) : f[_t8] = e[_t8]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderDetails = exports.OrderDetails = function OrderDetails(props) {
  var orderId = props.orderId,
    propsToFetch = props.propsToFetch,
    asDashboard = props.asDashboard,
    hashKey = props.hashKey,
    userCustomerId = props.userCustomerId,
    isDisableLoadMessages = props.isDisableLoadMessages,
    drivers = props.drivers,
    UIComponent = props.UIComponent;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)({
      order: null,
      loading: !props.order,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderState = _useState2[0],
    setOrderState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      status: null,
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    messageErrors = _useState4[0],
    setMessageErrors = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    actionStatus = _useState6[0],
    setActionStatus = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    messages = _useState8[0],
    setMessages = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    messagesReadList = _useState0[0],
    setMessagesReadList = _useState0[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = props.accessToken || token;

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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var url, response, _yield$response$json, error, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context.n = 1;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
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
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_t.Messages]
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function loadMessages() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to send a message
   * @param {string} spot
   */
  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(spot) {
      var _yield$fetch, status, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: true
            }));
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
              method: 'post',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                can_see: '0,2,3',
                comment: "I am on the parking number: ".concat(spot),
                order_id: orderId,
                type: 2
              })
            });
          case 1:
            _yield$fetch = _context2.v;
            status = _yield$fetch.status;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              status: status
            }));
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              error: [_t2.message]
            }));
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function sendMessage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref3) {
    var spot = _ref3.spot;
    sendMessage(spot);
  };

  /**
   * Method to get order from API
   */
  var getOrder = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var options, functionFetch, _yield$functionFetch$, result, order, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            options = {};
            if (hashKey) {
              options.headers = {
                'X-uuid-access-X': hashKey
              };
            }
            if (userCustomerId) {
              options.query = {
                mode: 'dashboard'
              };
            }
            _context3.p = 1;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            if (propsToFetch) {
              functionFetch = asDashboard ? ordering.setAccessToken(token).orders(orderId).asDashboard().select(propsToFetch) : ordering.setAccessToken(token).orders(orderId).select(propsToFetch);
            } else {
              functionFetch = asDashboard ? ordering.setAccessToken(token).orders(orderId).asDashboard() : ordering.setAccessToken(token).orders(orderId);
            }
            _context3.n = 2;
            return functionFetch.get();
          case 2:
            _yield$functionFetch$ = _context3.v;
            result = _yield$functionFetch$.content.result;
            order = Array.isArray(result) ? null : result;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: order
            }));
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [_t3.message]
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function getOrder() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(order) {
      var response, content, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context4.n = 1;
            return fetch("".concat(ordering.root, "/orders/").concat(order === null || order === void 0 ? void 0 : order.id), {
              method: 'PUT',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                status: order.newStatus
              })
            });
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            content = _context4.v;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t4.message]
            }));
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function handleUpdateOrderStatus(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var readMessages = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _messages$messages, _messages$messages2;
      var messageId, response, _yield$response$json2, result, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            messageId = messages === null || messages === void 0 || (_messages$messages = messages.messages[(messages === null || messages === void 0 || (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
            _context5.p = 1;
            _context5.n = 2;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read"), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              }
            });
          case 2:
            response = _context5.v;
            _context5.n = 3;
            return response.json();
          case 3:
            _yield$response$json2 = _context5.v;
            result = _yield$response$json2.result;
            setMessagesReadList(result);
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            console.log(_t5.message);
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 4]]);
    }));
    return function readMessages() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleRefundPaymentsStripe = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _orderState$order, _orderState$order2, _orderState$order3, requestOption, response, content, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOption = {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                order_id: (_orderState$order = orderState.order) === null || _orderState$order === void 0 ? void 0 : _orderState$order.id,
                business_id: (_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.business_id,
                gateway: (_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 || (_orderState$order3 = _orderState$order3.paymethod) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.gateway
              })
            };
            _context6.n = 1;
            return fetch("".concat(ordering.root, "/payments/stripe/refund"), requestOption);
          case 1:
            response = _context6.v;
            _context6.n = 2;
            return response.json();
          case 2:
            content = _context6.v;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                order: _objectSpread(_objectSpread({}, orderState.order), {}, {
                  refund_data: content.result
                })
              }));
              showToast(_ToastContext.ToastType.Success, t('ORDER_REFUNDED', 'Order refunded'));
            }
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t6.message]
            }));
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }));
    return function handleRefundPaymentsStripe() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleOrderRefund = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(data) {
      var _orderState$order4, requestOption, response, content, _orderState$order6, refundData, _orderState$order5, stripeEvent, updatedPaymentEvents, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOption = {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            };
            _context7.n = 1;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/refund"), requestOption);
          case 1:
            response = _context7.v;
            _context7.n = 2;
            return response.json();
          case 2:
            content = _context7.v;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              refundData = _toConsumableArray(content.result);
              if (data !== null && data !== void 0 && data.order_payment_event_id) {
                stripeEvent = orderState === null || orderState === void 0 || (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 || (_orderState$order5 = _orderState$order5.payment_events) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.find(function (event) {
                  return (event === null || event === void 0 ? void 0 : event.id) === data.order_payment_event_id;
                });
                if (stripeEvent) {
                  refundData.map(function (item) {
                    if ((item === null || item === void 0 ? void 0 : item.order_payment_event_id) === (data === null || data === void 0 ? void 0 : data.order_payment_event_id)) {
                      item.paymethod = stripeEvent === null || stripeEvent === void 0 ? void 0 : stripeEvent.paymethod;
                    }
                    return item;
                  });
                }
              }
              updatedPaymentEvents = [].concat(_toConsumableArray((_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.payment_events), _toConsumableArray(refundData));
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                order: _objectSpread(_objectSpread({}, orderState.order), {}, {
                  payment_events: updatedPaymentEvents
                })
              }));
              showToast(_ToastContext.ToastType.Success, t('ORDER_REFUNDED', 'Order refunded'));
            }
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t7 = _context7.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t7.message]
            }));
          case 4:
            return _context7.a(2);
        }
      }, _callee7, null, [[0, 3]]);
    }));
    return function handleOrderRefund(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (props.order) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: props.order
      }));
    } else {
      getOrder();
    }
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (orderState.loading || loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderState$order7;
      if ((order === null || order === void 0 ? void 0 : order.id) !== (orderState === null || orderState === void 0 || (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.id)) return;
      delete order.total;
      delete order.subtotal;
      if (!(order !== null && order !== void 0 && order.driver) && order !== null && order !== void 0 && order.driver_id) {
        var updatedDriver = drivers.find(function (driver) {
          return driver.id === order.driver_id;
        });
        if (updatedDriver) {
          order.driver = _objectSpread({}, updatedDriver);
        }
      }
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
    };
    socket.on('update_order', handleUpdateOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
    };
  }, [orderState.order, socket, loading, drivers]);
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
  (0, _react.useEffect)(function () {
    if (!isDisableLoadMessages) {
      loadMessages();
    }
  }, [orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    messageErrors: messageErrors,
    actionStatus: actionStatus,
    formatPrice: formatPrice,
    handlerSubmit: handlerSubmitSpotNumber,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    messages: messages,
    setMessages: setMessages,
    messagesReadList: messagesReadList,
    readMessages: readMessages,
    handleRefundPaymentsStripe: handleRefundPaymentsStripe,
    handleOrderRefund: handleOrderRefund
  })));
};
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
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