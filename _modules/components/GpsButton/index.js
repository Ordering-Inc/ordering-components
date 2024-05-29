"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GpsButton = exports.GoogleGpsButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _WrapperGoogleMaps = require("../WrapperGoogleMaps");
var _LanguageContext = require("../../contexts/LanguageContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to get information from GPS
 * @param {object} props Props of GpsButton component
 */
var GpsButton = exports.GpsButton = function GpsButton(props) {
  var UIComponent = props.UIComponent,
    googleReady = props.googleReady,
    onData = props.onData,
    onError = props.onError,
    onAddress = props.onAddress;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var isGoogleButton = typeof googleReady !== 'undefined';

  /**
   * Function to get location from GPS
   */
  var handleGPS = function handleGPS() {
    if (isGoogleButton && !googleReady || isLoading) {
      return;
    }
    setIsLoading(true);
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
          var _results$;
          setIsLoading(false);
          var postalCode = null;
          if (results !== null && results !== void 0 && (_results$ = results[0]) !== null && _results$ !== void 0 && _results$.address_components) {
            var _iterator = _createForOfIteratorHelper(results[0].address_components),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var component = _step.value;
                var addressType = component.types[0];
                if (addressType === 'postal_code') {
                  postalCode = component.short_name;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (status === 'OK') {
              onAddress({
                address: results[0].formatted_address,
                location: location,
                utc_offset: new Date().getTimezoneOffset(),
                zipcode: postalCode,
                map_data: {
                  library: 'google',
                  place_id: results[0].place_id
                }
              });
            } else {
              onError && onError(t('ERROR_GPS_BUTTON', 'Error to get result with gps button'));
            }
          } else {
            onError && onError(t('ERROR_NOT_FOUND_ADDRESS', 'The Address was not found'));
          }
        });
      } else {
        setIsLoading(false);
        onData && onData({
          location: location,
          utc_offset: new Date().getTimezoneOffset()
        });
      }
    }, function (err) {
      setIsLoading(false);
      onError && onError(t('ERROR_GPS_BUTTON', err.message));
    }, {
      timeout: 5000,
      enableHighAccuracy: true
    });
  };
  return navigator.geolocation && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleGPS: handleGPS,
    isGoogleButton: isGoogleButton,
    googleReady: googleReady,
    isLoading: isLoading
  }));
};
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
var GoogleGpsButton = exports.GoogleGpsButton = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GpsButton);
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