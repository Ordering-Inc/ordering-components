"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Emitter = exports.Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
    this._events = {};
  }
  _createClass(Emitter, [{
    key: "on",
    value: function on(name, listener) {
      if (!this._events[name]) {
        this._events[name] = [];
      }
      this._events[name].push(listener);
    }
  }, {
    key: "off",
    value: function off(name, listenerToRemove) {
      if (!this._events[name]) {
        return;
      }
      var filterListeners = function filterListeners(listener) {
        return listener !== listenerToRemove;
      };
      this._events[name] = this._events[name].filter(filterListeners);
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }
      if (!this._events[name]) {
        return;
      }
      var fireCallbacks = function fireCallbacks(callback) {
        // eslint-disable-next-line standard/no-callback-literal
        callback.apply(void 0, data);
      };
      this._events[name].forEach(fireCallbacks);
    }
  }]);
  return Emitter;
}();