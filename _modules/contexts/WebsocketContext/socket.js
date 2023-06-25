"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;
var _socket = _interopRequireDefault(require("socket.io-client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Socket = /*#__PURE__*/function () {
  function Socket(_ref) {
    var url = _ref.url,
      project = _ref.project,
      accessToken = _ref.accessToken,
      hashKey = _ref.hashKey;
    _classCallCheck(this, Socket);
    this.url = url;
    this.project = project;
    this.accessToken = accessToken;
    this.queue = [];
    this.hashKey = hashKey;
  }
  _createClass(Socket, [{
    key: "connect",
    value: function connect() {
      var _this$socket,
        _this = this;
      this.socket = (0, _socket.default)(this.url, {
        extraHeaders: {
          Authorization: "Bearer ".concat(this.accessToken)
        },
        query: this.accessToken ? "token=".concat(this.accessToken, "&project=").concat(this.project) : this.hashKey ? "hash_key=".concat(this.hashKey, "&project=").concat(this.project) : "project=".concat(this.project),
        transports: ['websocket']
      });
      (_this$socket = this.socket) === null || _this$socket === void 0 ? void 0 : _this$socket.on('connect', function () {
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
      var _this$socket2;
      return (_this$socket2 = this.socket) === null || _this$socket2 === void 0 ? void 0 : _this$socket2.id;
    }
  }, {
    key: "close",
    value: function close() {
      var _this$socket3;
      if ((_this$socket3 = this.socket) !== null && _this$socket3 !== void 0 && _this$socket3.connected) {
        var _this$socket4;
        (_this$socket4 = this.socket) === null || _this$socket4 === void 0 ? void 0 : _this$socket4.close();
      }
    }
  }, {
    key: "join",
    value: function join(room) {
      if (typeof room === 'string') {
        var _this$socket5;
        if ((_this$socket5 = this.socket) !== null && _this$socket5 !== void 0 && _this$socket5.connected) {
          var _this$socket6;
          (_this$socket6 = this.socket) === null || _this$socket6 === void 0 ? void 0 : _this$socket6.emit('join', "".concat(this.project, "_").concat(room));
        } else {
          this.queue.push({
            action: 'join',
            room: room
          });
        }
      } else {
        var _this$socket7;
        (_this$socket7 = this.socket) === null || _this$socket7 === void 0 ? void 0 : _this$socket7.emit('join', room);
      }
      return this;
    }
  }, {
    key: "leave",
    value: function leave(room) {
      var _this$socket8;
      if ((_this$socket8 = this.socket) !== null && _this$socket8 !== void 0 && _this$socket8.connected) {
        var _this$socket9;
        (_this$socket9 = this.socket) === null || _this$socket9 === void 0 ? void 0 : _this$socket9.emit('leave', "".concat(this.project, "_").concat(room));
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
      var _this$socket10;
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if ((_this$socket10 = this.socket) !== null && _this$socket10 !== void 0 && _this$socket10.connected) {
        var _this$socket11;
        (_this$socket11 = this.socket) === null || _this$socket11 === void 0 ? void 0 : _this$socket11.on(event, func);
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
      var _this$socket12;
      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if ((_this$socket12 = this.socket) !== null && _this$socket12 !== void 0 && _this$socket12.connected) {
        var _this$socket13;
        (_this$socket13 = this.socket) === null || _this$socket13 === void 0 ? void 0 : _this$socket13.off(event, func);
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
  return Socket;
}();
exports.Socket = Socket;