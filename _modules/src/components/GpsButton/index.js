"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleGpsButton = exports.GpsButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WrapperGoogleMaps = require("../WrapperGoogleMaps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to get information from GPS
 * @param {object} props Props of GpsButton component
 */
var GpsButton = function GpsButton(props) {
  var IconButton = props.IconButton,
      googleReady = props.googleReady,
      onData = props.onData,
      onError = props.onError,
      onAddress = props.onAddress;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var isGoogleButton = typeof googleReady !== 'undefined';
  /**
   * Function to get location from GPS
   */

  var handleGPS = function handleGPS() {
    if (isGoogleButton && !googleReady || loading) {
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(function (geo) {
      var location = {
        lat: geo.coords.latitude,
        lng: geo.coords.longitude
      };

      if (isGoogleButton && onAddress) {
        var geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({
          location: location
        }, function (results, status) {
          setLoading(false);

          if (status === 'OK') {
            onAddress({
              address: results[0].formatted_address,
              location: location,
              utc_offset: new Date().getTimezoneOffset(),
              map_data: {
                library: 'google',
                place_id: results[0].place_id
              }
            });
          } else {
            onError(new Error('Error to get reault'));
          }
        });
      } else {
        setLoading(false);
        onData && onData({
          location: location,
          utc_offset: new Date().getTimezoneOffset()
        });
      }
    }, function (err) {
      setLoading(false);
      onError(new Error(err.message));
    }, {
      timeout: 5000,
      enableHighAccuracy: true
    });
  };

  return navigator.geolocation && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleGPS,
    disabled: isGoogleButton && !googleReady || loading
  }, IconButton ? /*#__PURE__*/_react.default.createElement(IconButton, null) : 'GPS');
};

exports.GpsButton = GpsButton;
GpsButton.propTypes = {
  /**
   * Function to get data from GPS
   * @param {object} data New address
   */
  onData: _propTypes.default.func,

  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};
var GoogleGpsButton = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GpsButton);
exports.GoogleGpsButton = GoogleGpsButton;
GoogleGpsButton.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,

  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: _propTypes.default.func,

  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};