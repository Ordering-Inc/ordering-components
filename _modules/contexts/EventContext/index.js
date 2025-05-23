"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEvent = exports.EventProvider = exports.EventContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Emitter = require("../../components/Emitter");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/**
 * Create EventContext
 * This context will manage the app events and provide an interface
 */
var EventContext = exports.EventContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to events manager
 * This provider has a reducer for manage event state
 * @param {props} props
 */
var EventProvider = exports.EventProvider = function EventProvider(_ref) {
  var children = _ref.children;
  var events = new _Emitter.Emitter();
  return /*#__PURE__*/_react.default.createElement(EventContext.Provider, {
    value: [events]
  }, children);
};

/**
 * Hook to get and update events state
 */
var useEvent = exports.useEvent = function useEvent() {
  var configManager = (0, _react.useContext)(EventContext);
  return configManager || [new _Emitter.Emitter()];
};