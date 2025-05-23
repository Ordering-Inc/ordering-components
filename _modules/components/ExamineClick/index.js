"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExamineClick = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var ExamineClick = exports.ExamineClick = function ExamineClick(_ref) {
  var onFiles = _ref.onFiles,
    childRef = _ref.childRef,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    accept = _ref.accept,
    disabled = _ref.disabled;
  var inputRef = (0, _react.useRef)(null);
  var handleClick = function handleClick(e) {
    if (!childRef) {
      inputRef.current.click();
    }
  };
  var handleChange = function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    onFiles(e.target.files);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    draggable: true,
    onClick: handleClick,
    style: style,
    className: className
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    onChange: handleChange,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    ref: function ref(e) {
      inputRef.current = e;
      childRef && childRef(e);
    },
    accept: accept,
    disabled: disabled
  }), children);
};