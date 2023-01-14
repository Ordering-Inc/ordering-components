"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewOrderNotification = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _EventContext = require("../../contexts/EventContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

var _ConfigContext = require("../../contexts/ConfigContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NewOrderNotification = function NewOrderNotification(props) {
  var _configs$logistic_mod;

  var UIComponent = props.UIComponent;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var isLogisticActivated = configs === null || configs === void 0 ? void 0 : (_configs$logistic_mod = configs.logistic_module) === null || _configs$logistic_mod === void 0 ? void 0 : _configs$logistic_mod.value;

  var handleActionEvent = function handleActionEvent(event, value) {
    var evts = {
      messages: 'message_added_notification',
      order_added: 'order_added_notification',
      order_updated: 'order_updated_notification',
      request_register: 'request_register_notification',
      request_update: 'request_update_notification'
    };
    events.emit(evts[event], value);
  };

  (0, _react.useEffect)(function () {
    if (!token) return;
    socket.on('message', function (e) {
      return handleActionEvent('messages', e);
    });
    socket.on('orders_register', function (e) {
      return handleActionEvent('order_added', e);
    });
    socket.on('update_order', function (e) {
      return handleActionEvent('order_updated', e);
    });
    return function () {
      socket.off('message', function (e) {
        return handleActionEvent('messages', e);
      });
      socket.off('orders_register', function (e) {
        return handleActionEvent('order_added', e);
      });
      socket.off('update_order', function (e) {
        return handleActionEvent('order_updated', e);
      });
    };
  }, [socket, user]);
  (0, _react.useEffect)(function () {
    if (isLogisticActivated) {
      socket.on('request_register', function (e) {
        return handleActionEvent('request_register', e);
      });
      socket.on('request_update', function (e) {
        return handleActionEvent('request_update', e);
      });
    }

    return function () {
      socket.off('request_register');
      socket.off('request_update');
    };
  }, [socket, user, isLogisticActivated]);
  (0, _react.useEffect)(function () {
    if (!token) return;
    socket.on('disconnect', function () {
      socket.join((user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      socket.join((user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      socket.join("requests_".concat(user === null || user === void 0 ? void 0 : user.id));
      socket.join("ordergroups_".concat(user === null || user === void 0 ? void 0 : user.id));
    });
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    var ordersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    var requestsRoom = "requests_".concat(user === null || user === void 0 ? void 0 : user.id);
    var groupsRoom = "ordergroups_".concat(user === null || user === void 0 ? void 0 : user.id);
    socket.join(messagesOrdersRoom);
    socket.join(ordersRoom);
    socket.join(requestsRoom);
    socket.join(groupsRoom);
    return function () {
      socket.leave(messagesOrdersRoom);
      socket.leave(ordersRoom);
      socket.leave(requestsRoom);
      socket.leave(groupsRoom);
    };
  }, [socket, user]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};

exports.NewOrderNotification = NewOrderNotification;
NewOrderNotification.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
    * Components types after Payment Options
    * Array of type components, the parent props will pass to these components
    */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
    * Elements before Payment Options
    * Array of HTML/Components elements, these components will not get the parent props
    */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
    * Elements after Payment Options
    * Array of HTML/Components elements, these components will not get the parent props
    */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
NewOrderNotification.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};