"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ConfigContext = require("../../../contexts/ConfigContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _UtilsContext = require("../../../contexts/UtilsContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var Messages = exports.Messages = function Messages(props) {
  var _configState$configs;
  var UIComponent = props.UIComponent,
    orderId = props.orderId,
    customHandleSend = props.customHandleSend,
    orderMessages = props.messages,
    setOrderMessages = props.setMessages,
    asDashboard = props.asDashboard,
    order = props.order,
    handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getOrderState = _useUtils2[0].getOrderState;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var accessToken = props.accessToken || token;
  var _useState = (0, _react.useState)({
      business: true,
      administrator: true,
      driver: true,
      customer: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    canRead = _useState2[0],
    setCanRead = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messages = _useState6[0],
    setMessages = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    sendMessage = _useState8[0],
    setSendMessages = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    readMessages = _useState0[0],
    setReadMessages = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    image = _useState10[0],
    setImage = _useState10[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var getStaticMapByLocation = function getStaticMapByLocation(location, size) {
    if (!size) {
      size = '250x100';
    }
    var url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + location.lat + ',' + location.lng + '&zoom=14&size=' + size + '&markers=color:red%7C' + location.lat + ',' + location.lng + '&key=' + googleMapsApiKey;
    return url;
  };
  var getLogisticTagStatus = function getLogisticTagStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In Progress');
      case 2:
        return t('IN_QUEUE', 'In Queue');
      case 3:
        return t('EXPIRED', 'Logistic expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return status;
    }
  };
  var getVehicleSmmary = function getVehicleSmmary(vehicle) {
    return (vehicle === null || vehicle === void 0 ? void 0 : vehicle.type) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.model) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.car_registration) + ' ' + (vehicle === null || vehicle === void 0 ? void 0 : vehicle.color);
  };
  var getHistoryComment = function getHistoryComment(message) {
    var _message$change;
    var comment = '';
    var changeAttribute = message === null || message === void 0 || (_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute;
    if (changeAttribute === 'distance') {
      comment = t('THE_DRIVER_IS_CLOSE') + ' <b>(' + message.driver.name + (message.driver.lastname ? ' ' + message.driver.lastname : '') + ')</b>';
    } else if (changeAttribute === 'status') {
      var _message$change2;
      if (message.change.new === 8 && message.change.estimated) {
        var estimatedDelivery = message.change.estimated;
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_DELIVERY_TIME').replace('_min_', estimatedDelivery);
      } else if (message.change.new === 7 && message.change.estimated) {
        var estimatedPreparation = message.change.estimated;
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>') + '<br>' + t('ESTIMATED_PREPARATION_TIME').replace('_min_', estimatedPreparation);
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getOrderState(message.change.old * 1) + '</b>').replace('_to_', '<b>' + getOrderState(message.change.new * 1) + '</b>');
      }
      if (message !== null && message !== void 0 && (_message$change2 = message.change) !== null && _message$change2 !== void 0 && _message$change2.comment) {
        comment += '<br>' + '<b>' + t('COMMENT', '') + '</b>: ' + message.change.comment + '.';
      }
    } else if (changeAttribute === 'driver_id') {
      if (message.driver) {
        comment = t('DRIVER_ASSIGNED_AS_DRIVER').replace('_driver_', '<b>' + message.driver.name + ' ' + (message.driver.lastname ? message.driver.lastname : '') + '</b>');
      } else {
        comment = t('DRIVER_UNASSIGNED');
      }
    } else if (['prepared_in', 'delivered_in', 'delivery_datetime'].includes(changeAttribute)) {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + (message.change.old || 0) + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
    } else if (changeAttribute === 'logistic_status') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t('LOGISTIC_STATUS', 'logistic status') + '</b>').replace('_from_', '<b>' + getLogisticTagStatus(parseInt(message.change.old, 10)) + '</b>').replace('_to_', '<b>' + getLogisticTagStatus(parseInt(message.change.new, 10)) + '</b>');
    } else if (changeAttribute === 'vehicle') {
      comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + getVehicleSmmary(message.change.old) + '</b>').replace('_to_', '<b>' + getVehicleSmmary(message.change.new) + '</b>');
    } else if (changeAttribute === 'reject_reason') {
      comment = t('ORDER_REJECT_REASON_IS', 'Order <b>reject reason</b> is _reject_reason_.').replace('_reject_reason_', '<b>' + t("REJECT_REASON_".concat(message.change.new.toUpperCase())) + '</b>');
    } else if (changeAttribute !== 'comment') {
      if (message.change.old) {
        comment = t('ORDER_ATTRIBUTE_CHANGED_FROM_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_from_', '<b>' + message.change.old + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
      } else {
        comment = t('ORDER_ATTRIBUTE_CHANGED_TO').replace('_attribute_', '<b>' + t(changeAttribute.toUpperCase()).toLowerCase() + '</b>').replace('_to_', '<b>' + message.change.new + '</b>');
      }
    }
    if (['status', 'reject_reason'].includes(changeAttribute)) {
      if (user.level === 0 || user.level === 2) {
        comment += '<br>-';
        if (message.app_id) comment += '<br><strong>' + t('APP_ID') + ':</strong> ' + message.app_id;
        comment += '<br><strong>' + t('AUTHOR') + ':</strong> ' + (message.author ? message.author.name + (message.author.lastname ? ' ' + message.author.lastname : '') : t('GUEST_USER'));
        if (message.user_agent) comment += '<br><strong>' + t('USER_AGENT') + ':</strong> ' + message.user_agent;
        if (message.location) comment += '<br><strong>' + t('LOCATION') + ':</strong> <img src="' + getStaticMapByLocation(message.location, '250x100') + '" />';
        comment += '<br><strong>' + t('IP') + ':</strong> ' + message.ip;
      }
    }
    return comment;
  };

  /**
   * Method to send message
   */
  var handleSend = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _canRead, body, response, _yield$response$json, error, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!customHandleSend) {
              _context.n = 1;
              break;
            }
            return _context.a(2, customHandleSend(message));
          case 1:
            _context.p = 1;
            setSendMessages({
              loading: true,
              error: null
            });
            _canRead = [];
            if (canRead.customer) {
              _canRead.push(3);
            }
            if (canRead.administrator) {
              _canRead.push(0);
            }
            if (canRead.business) {
              _canRead.push(2);
            }
            if (canRead.driver) {
              _canRead.push(4);
            }
            body = {
              comment: message,
              type: 2,
              can_see: _canRead.join(',')
            };
            if (image) {
              body.type = 3;
              body.file = image;
            }
            _context.n = 2;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              },
              body: JSON.stringify(body)
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            _yield$response$json = _context.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              if (setOrderMessages && orderMessages) {
                setOrderMessages(_objectSpread(_objectSpread({}, orderMessages), {}, {
                  messages: [].concat(_toConsumableArray(orderMessages.messages), [result])
                }));
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  messages: [].concat(_toConsumableArray(messages.messages), [result])
                }));
              }
            }
            setSendMessages({
              loading: false,
              error: error ? result : null
            });
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            setSendMessages({
              loading: false,
              error: [_t.Messages]
            });
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }));
    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var functionFetch, response, _yield$response$json2, error, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              messages: [],
              loading: true
            }));
            functionFetch = asDashboard ? "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat(orderId, "/messages");
            _context2.n = 1;
            return fetch(functionFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
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
   * Method to Load message for first time
   * @param {number} messageId order message Id
   */
  var handleReadMessages = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(messageId) {
      var functionFetch, response, _yield$response$json3, error, result, _messages, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(orderMessages && setOrderMessages)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
              loading: true
            }));
            functionFetch = "".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read?order_id=").concat(orderId, "&order_message_id=").concat(messageId);
            _context3.n = 2;
            return fetch(functionFetch, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 2:
            response = _context3.v;
            _context3.n = 3;
            return response.json();
          case 3:
            _yield$response$json3 = _context3.v;
            error = _yield$response$json3.error;
            result = _yield$response$json3.result;
            if (!error) {
              setReadMessages({
                messages: result,
                loading: false,
                error: null
              });
              if (messages.messages.length > 0) {
                _messages = messages.messages.filter(function (message) {
                  if (message.id === messageId) {
                    message.read = true;
                  }
                  return true;
                });
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  messages: _messages
                }));
              }
              handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(null);
              handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(orderId);
            } else {
              setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
                loading: false,
                error: result
              }));
            }
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
              loading: false,
              error: [_t3.Messages]
            }));
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 4]]);
    }));
    return function handleReadMessages(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (orderMessages && setOrderMessages) return;
    loadMessages();
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (messages.loading || orderMessages && setOrderMessages) return;
    var handleNewMessage = function handleNewMessage(message) {
      var _message$order;
      if (((_message$order = message.order) === null || _message$order === void 0 ? void 0 : _message$order.id) === orderId) {
        var found = messages.messages.find(function (_message) {
          return _message.id === message.id;
        });
        if (!found) {
          setMessages(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              messages: [].concat(_toConsumableArray(prevState.messages), [message])
            });
          });
        }
      }
    };
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, order === null || order === void 0 ? void 0 : order.status]);
  (0, _react.useEffect)(function () {
    if (!(socket !== null && socket !== void 0 && socket.socket)) return;
    if (asDashboard) {
      socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
    } else {
      socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
    }
    socket.socket.on('connect', function () {
      if (asDashboard) {
        socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    });
    return function () {
      if (asDashboard) {
        socket.leave("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.leave("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    messages: messages,
    image: image,
    canRead: canRead,
    handleSend: handleSend,
    message: message,
    handleReadMessages: handleReadMessages,
    setMessage: setMessage,
    setCanRead: setCanRead,
    sendMessage: sendMessage,
    setImage: setImage,
    getHistoryComment: getHistoryComment
  })));
};
Messages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Custom Send messageS
   * @param {object} message Message to send
   */
  handleClickSetDefault: _propTypes.default.func,
  /**
   * @param {object} message
   * handleCustomClick, function to get click event and return message without default behavior
   */
  customHandleSend: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Messages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};