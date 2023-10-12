"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEvent = exports.EventProvider = exports.EventContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Emitter = require("../../components/Emitter");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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