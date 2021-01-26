"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phone = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Phone = function Phone(props) {
  var UIComponent = props.UIComponent,
      phones = props.phones;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      phone = _useState2[0],
      setPhone = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openCustomer = _useState4[0],
      setOpenCustomer = _useState4[1];

  var _useState5 = (0, _react.useState)({
    dispatch: false,
    error: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      errorMinLength = _useState6[0],
      setErrorMinLength = _useState6[1];

  var onChangeNumber = function onChangeNumber(e) {
    var number = e.target.validity.valid ? e.target.value : phone;
    setPhone(number);
  };

  var autocomplete = function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener('input', function (evt) {
      var b;
      var i;
      var val = this.value;
      closeAllLists();

      if (!val) {
        return false;
      }

      currentFocus = -1;
      /* create a DIV element that will contain the items (values): */

      var a = document.createElement('DIV');
      a = document.createElement('DIV');
      a.setAttribute('id', this.id + 'autocomplete-list');
      a.setAttribute('class', 'autocomplete-items');
      /* append the DIV element as a child of the autocomplete container: */

      this.parentNode.appendChild(a);
      /* for each item in the array... */

      for (i = 0; i < arr.length; i++) {
        /* check if the item starts with the same letters as the text field value: */
        if (arr[i].phone.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /* create a DIV element for each matching element: */
          b = document.createElement('DIV');
          /* make the matching letters bold: */

          b.innerHTML = '<strong>' + arr[i].phone.substr(0, val.length) + '</strong>';
          b.innerHTML += arr[i].phone.substr(val.length); // insert name of the customer

          b.innerHTML += ' (' + arr[i].name + ')';
          /* insert a input field that will hold the current array item's value: */

          b.innerHTML += "<input type='hidden' value='" + arr[i].phone + "'>";
          /* execute a function when someone clicks on the item value (DIV element): */

          b.addEventListener('click', function (e) {
            /* insert the value for the autocomplete text field: */
            inp.value = this.getElementsByTagName('input')[0].value;
            setPhone(this.getElementsByTagName('input')[0].value);
            /* close the list of autocompleted values,
                (or any other open lists of autocompleted values: */

            closeAllLists();
          });
          a.appendChild(b);
        }
      }
      /* create a DIV element for add new users */


      b = document.createElement('DIV');
      b.innerHTML = '<strong>' + 'Create new customer' + '</strong>';
      b.innerHTML += "<input type='hidden' value='" + 'Create new customer' + "'>";
      b.addEventListener('click', function (e) {
        if (evt.target.value.length === 10) {
          setErrorMinLength({
            error: false,
            dispatch: false
          });
          setOpenCustomer(true);
        } else {
          setErrorMinLength({
            error: true,
            dispatch: true
          });
        }

        closeAllLists();
      });
      a.appendChild(b);
    });
    /* execute a function presses a key on the keyboard: */

    inp.addEventListener('keydown', function (e) {
      var x = document.getElementById(this.id + 'autocomplete-list');
      if (x) x = x.getElementsByTagName('div');

      if (e.keyCode === 40) {
        /* If the arrow DOWN key is pressed,
          increase the currentFocus variable: */
        currentFocus++;
        /* and and make the current item more visible: */

        addActive(x);
      } else if (e.keyCode === 38) {
        // up

        /* If the arrow UP key is pressed,
          decrease the currentFocus variable: */
        currentFocus--;
        /* and and make the current item more visible: */

        addActive(x);
      } else if (e.keyCode === 13) {
        /* If the ENTER key is pressed, prevent the form from being submitted, */
        e.preventDefault();

        if (currentFocus > -1) {
          /* and simulate a click on the "active" item: */
          if (x) x[currentFocus].click();
        }
      }
    });

    function addActive(x) {
      /* a function to classify an item as "active": */
      if (!x) return false;
      /* start by removing the "active" class on all items: */

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /* add class "autocomplete-active": */

      x[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(x) {
      /* a function to remove the "active" class from all autocomplete items: */
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active');
      }
    }

    function closeAllLists(elmnt) {
      /* close all autocomplete lists in the document,
      except the one passed as an argument: */
      var x = document.getElementsByClassName('autocomplete-items');

      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /* execute a function when someone clicks in the document: */


    document.addEventListener('click', function (e) {
      closeAllLists(e.target);
    });
  };

  (0, _react.useEffect)(function () {
    autocomplete(document.getElementById('phone-input'), phones);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    onChangeNumber: onChangeNumber,
    phone: phone,
    setErrorMinLength: setErrorMinLength,
    errorMinLength: errorMinLength,
    openCustomer: openCustomer,
    setOpenCustomer: setOpenCustomer
  })));
};

exports.Phone = Phone;
Phone.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Phone.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};