"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;
var _socket = _interopRequireDefault(require("socket.io-client"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Socket = exports.Socket = /*#__PURE__*/function () {
  function Socket(_ref) {
    var url = _ref.url,
      project = _ref.project,
      accessToken = _ref.accessToken;
    _classCallCheck(this, Socket);
    this.url = url;
    this.project = project;
    this.accessToken = accessToken;
    this.queue = [];
  }
  return _createClass(Socket, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      var options = {
        query: "project=".concat(this.project),
        transports: ['websocket']
      };
      if (this.accessToken) {
        options.extraHeaders = {
          Authorization: "Bearer ".concat(this.accessToken)
        };
        options.query = "".concat(options.query, "&token=").concat(this.accessToken);
      }
      this.socket = (0, _socket.default)(this.url, options);
      this.socket.on('connect', function () {
        var item;
        while ((item = _this.queue.shift()) !== undefined) {
          if (item.action === 'on') {
            _this.on(item.event, item.func);
          } else if (item.action === 'join') {
            _this.join(item.room);
          } else if (item.action === 'leave') {
            _this.leave(item.room);
          } else if (item.action === 'off') {
            _this.off(item.room);
          }
        }
      });
    }
  }, {
    key: "getId",
    value: function getId() {
      var _this$socket;
      return (_this$socket = this.socket) === null || _this$socket === void 0 ? void 0 : _this$socket.id;
    }
  }, {
    key: "close",
    value: function close() {
      var _this$socket2;
      if ((_this$socket2 = this.socket) !== null && _this$socket2 !== void 0 && _this$socket2.connected) {
        this.socket.close();
      }
    }
  }, {
    key: "join",
    value: function join(room) {
      var _this$socket3;
      if ((_this$socket3 = this.socket) !== null && _this$socket3 !== void 0 && _this$socket3.connected) {
        this.socket.emit('join', typeof room === 'string' ? "".concat(this.project, "_").concat(room) : room);
      } else {
        this.queue.push({
          action: 'join',
          room: room
        });
      }
      return this;
    }
  }, {
    key: "leave",
    value: function leave(room) {
      var _this$socket4;
      if ((_this$socket4 = this.socket) !== null && _this$socket4 !== void 0 && _this$socket4.connected) {
        this.socket.emit('leave', typeof room === 'string' ? "".concat(this.project, "_").concat(room) : room);
      } else {
        this.queue.push({
          action: 'leave',
          room: room
        });
      }
      return this;
    }
  }, {
    key: "on",
    value: function on(event) {
      var _this$socket5;
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if ((_this$socket5 = this.socket) !== null && _this$socket5 !== void 0 && _this$socket5.connected) {
        this.socket.on(event, func);
      } else {
        this.queue.push({
          action: 'on',
          event: event,
          func: func
        });
      }
      return this;
    }
  }, {
    key: "off",
    value: function off(event) {
      var _this$socket6;
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if ((_this$socket6 = this.socket) !== null && _this$socket6 !== void 0 && _this$socket6.connected) {
        this.socket.off(event, func);
      } else {
        this.queue.push({
          action: 'off',
          event: event,
          func: func
        });
      }
      return this;
    }
  }]);
}();