"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapView = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MapView = function MapView(props) {
  var UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      businessMarkers = _useState2[0],
      setBusinessMarkers = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoadingBusinessMarkers = _useState4[0],
      setIsLoadingBusinessMakers = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      markerGroups = _useState6[0],
      setMarkerGroups = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      customerMarkerGroups = _useState8[0],
      setCustomerMarkerGroups = _useState8[1];

  var _useState9 = (0, _react.useState)({
    open: false,
    content: [],
    key: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      alertState = _useState10[0],
      setAlertState = _useState10[1];

  var getBusinessLocations = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var markerGroups, customerMarkerGroups, options, _yield$ordering$setAc, _yield$ordering$setAc2, result, error;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              markerGroups = {};
              customerMarkerGroups = {};
              setIsLoadingBusinessMakers(true);
              options = {
                query: {
                  where: [{
                    attribute: 'status',
                    value: [0, 13, 7, 4, 3, 8, 9, 14, 18, 19, 20, 21]
                  }]
                }
              };
              _context.next = 6;
              return ordering.setAccessToken(token).orders().asDashboard().get(options);

            case 6:
              _yield$ordering$setAc = _context.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              error = _yield$ordering$setAc2.error;

              if (!error) {
                result.map(function (order) {
                  markerGroups[order === null || order === void 0 ? void 0 : order.business_id] = markerGroups !== null && markerGroups !== void 0 && markerGroups[order === null || order === void 0 ? void 0 : order.business_id] ? [].concat(_toConsumableArray(markerGroups[order === null || order === void 0 ? void 0 : order.business_id]), [order]) : [order];
                  customerMarkerGroups[order === null || order === void 0 ? void 0 : order.customer_id] = customerMarkerGroups !== null && customerMarkerGroups !== void 0 && customerMarkerGroups[order === null || order === void 0 ? void 0 : order.customer_id] ? [].concat(_toConsumableArray(customerMarkerGroups[order === null || order === void 0 ? void 0 : order.customer_id]), [order]) : [order];
                });
                setMarkerGroups(markerGroups);
                setCustomerMarkerGroups(customerMarkerGroups);
                setIsLoadingBusinessMakers(false);
                setBusinessMarkers(result);
              } else {
                setAlertState(result);
                setIsLoadingBusinessMakers(false);
              }

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBusinessLocations() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessMarkers: businessMarkers,
    customerMarkerGroups: customerMarkerGroups,
    isLoadingBusinessMarkers: isLoadingBusinessMarkers,
    markerGroups: markerGroups,
    getBusinessLocations: getBusinessLocations,
    alertState: alertState,
    setAlertState: setAlertState
  })));
};

exports.MapView = MapView;