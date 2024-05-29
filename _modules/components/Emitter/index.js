"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Emitter = exports.Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
    this._events = {};
  }
  return _createClass(Emitter, [{
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
}();