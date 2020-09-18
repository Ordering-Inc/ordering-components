"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Component to manage login behavior without UI component
 */
var Popup = function Popup(props) {
  var UIComponent = props.UIComponent,
      open = props.open,
      backdropClassName = props.backdropClassName,
      closeOnBackdrop = props.closeOnBackdrop,
      closeWithKeyboard = props.closeWithKeyboard,
      onClose = props.onClose;
  var modalRef = (0, _react.useRef)();
  /**
   * Use onClose function when esc key was pressed
   * @param {Event} e Event when keydown
   */

  var handleKeyDown = function handleKeyDown(e) {
    closeWithKeyboard && e.keyCode === 27 && onClose && onClose();
  };
  /**
   * Use onClose function when backdrop was clicked
   * @param {Event} e Event when click in backdrop
   */


  var handleClick = function handleClick(e) {
    closeOnBackdrop && e.target.classList.contains('popup') && onClose && onClose();
  };

  (0, _react.useEffect)(function () {
    if (!open) return;
    var backdrop = document.querySelector('.popup-backdrop');
    var bodyOverflowBackup = document.body.style.overflow;

    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'popup-backdrop' + (backdropClassName ? " ".concat(backdropClassName) : '');
      document.body.append(backdrop);
      document.body.style.overflow = 'hidden';
    }

    modalRef.current.focus();
    /**
     * Remove backdrop and enable scroll
     */

    return function () {
      var modals = document.querySelectorAll('.popup');
      modals.length > 0 && modals[modals.length - 1].focus();

      if (modals.length === 0) {
        document.querySelector('.popup-backdrop').remove();
        document.body.style.overflow = bodyOverflowBackup;
      }
    };
  }, [open]);
  var popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1001,
    outline: 'none'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && /*#__PURE__*/_react.default.createElement("div", {
    className: "popup",
    style: popupStyles,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    ref: modalRef,
    autoFocus: true
  }, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props)));
};

exports.Popup = Popup;
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