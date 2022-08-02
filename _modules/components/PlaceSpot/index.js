"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSpot = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

var _ToastContext = require("../../contexts/ToastContext");

var _SessionContext = require("../../contexts/SessionContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PlaceSpot = function PlaceSpot(props) {
  var _vehicleDefault$type, _vehicleDefault$model, _vehicleDefault$car_r, _vehicleDefault$color, _orderState$options2;

  var UIComponent = props.UIComponent,
      cart = props.cart,
      spotNumberDefault = props.spotNumberDefault,
      vehicleDefault = props.vehicleDefault,
      onRemoveSpotNumber = props.onRemoveSpotNumber;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useToast = (0, _ToastContext.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];
  /**
   * Places state (Curbside, eat in)
   */


  var _useState = (0, _react.useState)({
    loading: true,
    places: [],
    placeGroups: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      placesState = _useState2[0],
      setPlacesState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      spotState = _useState4[0],
      setSpotState = _useState4[1];

  var _useState5 = (0, _react.useState)(spotNumberDefault),
      _useState6 = _slicedToArray(_useState5, 2),
      spotNumber = _useState6[0],
      setSpotNumber = _useState6[1];

  var _useState7 = (0, _react.useState)({
    type: (_vehicleDefault$type = vehicleDefault === null || vehicleDefault === void 0 ? void 0 : vehicleDefault.type) !== null && _vehicleDefault$type !== void 0 ? _vehicleDefault$type : '',
    model: (_vehicleDefault$model = vehicleDefault === null || vehicleDefault === void 0 ? void 0 : vehicleDefault.model) !== null && _vehicleDefault$model !== void 0 ? _vehicleDefault$model : '',
    car_registration: (_vehicleDefault$car_r = vehicleDefault === null || vehicleDefault === void 0 ? void 0 : vehicleDefault.car_registration) !== null && _vehicleDefault$car_r !== void 0 ? _vehicleDefault$car_r : '',
    color: (_vehicleDefault$color = vehicleDefault === null || vehicleDefault === void 0 ? void 0 : vehicleDefault.color) !== null && _vehicleDefault$color !== void 0 ? _vehicleDefault$color : ''
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      vehicle = _useState8[0],
      setVehicle = _useState8[1];

  var orderTypesAllowed = [3, 4, 5];

  var getPlaces = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var responsePlaceGroups, _yield$responsePlaceG, resultPlaceGroups, errorPlaceGroups, responsePlaces, _yield$responsePlaces, resultPlaces, errorPlaces, placeGroupDefault;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setPlacesState(_objectSpread(_objectSpread({}, placesState), {}, {
                loading: true
              }));
              _context.next = 4;
              return fetch("".concat(ordering.root, "/business/").concat(cart === null || cart === void 0 ? void 0 : cart.business_id, "/place_groups"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 4:
              responsePlaceGroups = _context.sent;
              _context.next = 7;
              return responsePlaceGroups.json();

            case 7:
              _yield$responsePlaceG = _context.sent;
              resultPlaceGroups = _yield$responsePlaceG.result;
              errorPlaceGroups = _yield$responsePlaceG.error;
              _context.next = 12;
              return fetch("".concat(ordering.root, "/business/").concat(cart === null || cart === void 0 ? void 0 : cart.business_id, "/places"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 12:
              responsePlaces = _context.sent;
              _context.next = 15;
              return responsePlaces.json();

            case 15:
              _yield$responsePlaces = _context.sent;
              resultPlaces = _yield$responsePlaces.result;
              errorPlaces = _yield$responsePlaces.error;
              placeGroupDefault = {
                id: null,
                business_id: cart === null || cart === void 0 ? void 0 : cart.business_id,
                enabled: true,
                name: t('DEFAULT_PLACE_GROUP', 'Default place group')
              };

              if (!(!errorPlaces && !errorPlaceGroups)) {
                _context.next = 22;
                break;
              }

              if (resultPlaces.find(function (place) {
                return place.place_group_id === null;
              })) {
                setPlacesState({
                  places: resultPlaces,
                  placeGroups: [placeGroupDefault].concat(_toConsumableArray(resultPlaceGroups)),
                  loading: false,
                  error: null
                });
              } else {
                setPlacesState({
                  places: resultPlaces,
                  placeGroups: resultPlaceGroups,
                  loading: false,
                  error: null
                });
              }

              return _context.abrupt("return");

            case 22:
              setPlacesState({
                places: [],
                placeGroups: [],
                loading: false,
                error: errorPlaceGroups ? resultPlaceGroups : resultPlaces
              });
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](0);
              setPlacesState(_objectSpread(_objectSpread({}, placesState), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 25]]);
    }));

    return function getPlaces() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChangeSpot = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref2) {
      var _ref2$isCheckout, isCheckout, bodyToSend, id, endpointToFetch, _yield$endpointToFetc, _yield$endpointToFetc2, error, result, _cart$business;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref2$isCheckout = _ref2.isCheckout, isCheckout = _ref2$isCheckout === void 0 ? true : _ref2$isCheckout, bodyToSend = _ref2.bodyToSend;
              _context2.prev = 1;
              setSpotState(_objectSpread(_objectSpread({}, spotState), {}, {
                loading: true
              }));
              id = isCheckout ? cart === null || cart === void 0 ? void 0 : cart.uuid : cart === null || cart === void 0 ? void 0 : cart.id;
              endpointToFetch = isCheckout ? ordering.setAccessToken(token).carts(id).set(bodyToSend) : ordering.setAccessToken(token).orders(id).save(bodyToSend);
              _context2.next = 7;
              return endpointToFetch;

            case 7:
              _yield$endpointToFetc = _context2.sent;
              _yield$endpointToFetc2 = _yield$endpointToFetc.content;
              error = _yield$endpointToFetc2.error;
              result = _yield$endpointToFetc2.result;

              if (!error) {
                onRemoveSpotNumber && onRemoveSpotNumber(cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug);
              }

              if (props.showToastMsg) {
                showToast(error ? _ToastContext.ToastType.Error : _ToastContext.ToastType.Success, error ? t('ERROR', result[0]) : t('SPOT_CHANGE_SUCCESS_CONTENT', 'Changes applied correctly'));
              }

              setSpotState(_objectSpread(_objectSpread({}, spotState), {}, {
                loading: false,
                error: error ? result : null
              }));
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              setSpotState(_objectSpread(_objectSpread({}, spotState), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
    }));

    return function handleChangeSpot(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _orderState$options;

    if (orderTypesAllowed.includes(orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) && !props.isInputMode) {
      getPlaces();
    }
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type]);
  (0, _react.useEffect)(function () {
    if (spotNumberDefault && spotNumberDefault !== (cart === null || cart === void 0 ? void 0 : cart.spot_number)) {
      handleChangeSpot({
        bodyToSend: {
          spot_number: spotNumberDefault
        }
      });
    }
  }, [spotNumberDefault]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    vehicle: vehicle,
    spotState: spotState,
    spotNumber: spotNumber,
    placesState: placesState,
    setVehicle: setVehicle,
    setSpotState: setSpotState,
    setSpotNumber: setSpotNumber,
    handleChangeSpot: handleChangeSpot,
    getPlacesList: getPlaces
  })));
};

exports.PlaceSpot = PlaceSpot;
PlaceSpot.defaultProps = {
  showToastMsg: true
};