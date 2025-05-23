"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to manage login behavior without UI component
 */
var Popup = exports.Popup = function Popup(props) {
  var UIComponent = props.UIComponent,
    open = props.open,
    backdropClassName = props.backdropClassName,
    closeOnBackdrop = props.closeOnBackdrop,
    onClose = props.onClose,
    isSideBar = props.isSideBar;
  var modalRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    root = _useState2[0],
    setRoot = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultOverflow = _useState4[0],
    setDefaultOverflow = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    defaultPaddingRight = _useState6[0],
    setDefaultPaddingRight = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFirst = _useState8[0],
    setIsFirst = _useState8[1];

  /**
   * Use onClose function when esc key was pressed
   * @param {Event} e Event when keydown
   */
  var handleKeyDown = function handleKeyDown(e) {
    e.keyCode === 27 && e.target.classList.contains('popup-component') && onClose && onClose();
  };

  /**
   * Use onClose function when backdrop was clicked
   * @param {Event} e Event when click in backdrop
   */
  var handleClick = function handleClick(e) {
    closeOnBackdrop && e.target.classList.contains('popup-component') && onClose && onClose();
  };

  /**
   * Check backdrop on close or unmount
   */
  var checkRemoveBackdrop = function checkRemoveBackdrop() {
    var modals = document.querySelectorAll('.popup-component');
    /**
     * Focus next popup when close a popup
     */
    if (!open && modals.length > 1) {
      modals.length > 1 && modals[modals.length - 1].focus();
    }
    /**
     * Remove backdrop when close popup and modals quantity is 0
     * Remove backdrop when unmount and modals quantity is 1
     */

    if (isFirst) {
      var modalRoot = window.document.getElementById('app-modals');
      if (modalRoot) {
        if (isSideBar) {
          setTimeout(function () {
            modalRoot.remove();
          }, 250);
        } else {
          modalRoot.remove();
        }
      }
      window.document.body.style.overflow = defaultOverflow;
      window.document.body.style.paddingRight = defaultPaddingRight;
    }
  };
  (0, _react.useEffect)(function () {
    if (open) {
      var modalRoot = window.document.getElementById('app-modals');
      if (!modalRoot) {
        modalRoot = window.document.createElement('div');
        modalRoot.id = 'app-modals';
        modalRoot.className = 'popup-component-backdrop popup-backdrop' + (backdropClassName ? " ".concat(backdropClassName) : '');
        document.body.append(modalRoot);
        setRoot(modalRoot);
        setIsFirst(true);
        setDefaultOverflow(window.document.body.style.overflow);
        setDefaultPaddingRight(window.document.body.style.paddingRight);
      } else {
        setRoot(modalRoot);
      }
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
    /**
     * Remove backdrop
     */
    return checkRemoveBackdrop;
  }, [open, isFirst, defaultOverflow, defaultPaddingRight]);
  var popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 20001,
    outline: 'none'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && root && /*#__PURE__*/_reactDom.default.createPortal(/*#__PURE__*/_react.default.createElement("div", {
    className: "popup-component",
    style: popupStyles,
    onMouseDown: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    autoFocus: true,
    ref: modalRef
  }, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props)), root));
};
Popup.propTypes = {
  UIComponent: _propTypes.default.elementType,
  /**
   * Show or hide popup
   */
  open: _propTypes.default.bool,
  /**
   * Close popup when backdrop was clicked
   */
  closeOnBackdrop: _propTypes.default.bool,
  /**
   * Close popup when ESC key was pressed
   */
  closeWithKeyboard: _propTypes.default.bool,
  /**
   * Title of popup
   */
  title: _propTypes.default.string,
  /**
   * Content of popup
   */
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.string), _propTypes.default.elementType, _propTypes.default.element]),
  /**
   * Function when accept popup
   */
  onAccept: _propTypes.default.func,
  /**
   * Function when cancel popup
   */
  onCancel: _propTypes.default.func,
  /**
   * Function when close popup
   */
  onClose: _propTypes.default.func
};
Popup.defaultProps = {
  open: false,
  closeOnBackdrop: true,
  closeWithKeyboard: true
};