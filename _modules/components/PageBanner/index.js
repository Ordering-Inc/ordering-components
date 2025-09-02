"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBanner = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _ConfigContext = require("../../contexts/ConfigContext");
var _OrderContext = require("../../contexts/OrderContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_dayjs.default.extend(_utc.default);
var PageBanner = exports.PageBanner = function PageBanner(props) {
  var _configs$unaddressed_, _orderState$options, _orderState$options8, _orderState$options9, _orderState$options0;
  var UIComponent = props.UIComponent,
    position = props.position,
    businessId = props.businessId;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)({
      loading: true,
      banner: null,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    pageBannerState = _useState2[0],
    setPageBannerState = _useState2[1];
  var unaddressedTypes = (configs === null || configs === void 0 || (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isAllowUnaddressOrderType = unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type);
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };

  /**
   * Method to get the page banner from API
   */
  var handleGetPageBanner = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _orderState$options5, _orderState$options6, requestOptions, fetchEndpoint, _configs$location_def, _configs$location_def2, _orderState$options2, _orderState$options3, _orderState$options4, defaultLatitude, defaultLongitude, isInvalidDefaultLocation, defaultLocation, location, type, _orderState$options7, moment, response, _yield$response$json, error, result, totalItems, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setPageBannerState(_objectSpread(_objectSpread({}, pageBannerState), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            fetchEndpoint = "".concat(ordering.root, "/banner?position=").concat(position);
            if (position === 'web_business_listing' || position === 'app_business_listing') {
              defaultLatitude = Number(configs === null || configs === void 0 || (_configs$location_def = configs.location_default_latitude) === null || _configs$location_def === void 0 ? void 0 : _configs$location_def.value);
              defaultLongitude = Number(configs === null || configs === void 0 || (_configs$location_def2 = configs.location_default_longitude) === null || _configs$location_def2 === void 0 ? void 0 : _configs$location_def2.value);
              isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
              defaultLocation = {
                lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
                lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
              };
              location = isAllowUnaddressOrderType && !((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2 = _orderState$options2.address) !== null && _orderState$options2 !== void 0 && _orderState$options2.location) ? defaultLocation : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.location;
              type = ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) || 1;
              fetchEndpoint = "".concat(ordering.root, "/banner?position=").concat(position, "&location=").concat(JSON.stringify(location), "&order_type_id=").concat(type);
            }
            if (position === 'web_business_page' || position === 'app_business_page') {
              fetchEndpoint = "".concat(ordering.root, "/banner?position=").concat(position, "&business_id=").concat(businessId);
            }
            if ((_orderState$options5 = orderState.options) !== null && _orderState$options5 !== void 0 && _orderState$options5.moment && isValidMoment((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              fetchEndpoint += "&timestamp=".concat(moment);
            }
            _context.n = 1;
            return fetch(fetchEndpoint, requestOptions);
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            totalItems = result.reduce(function (items, banner) {
              return [].concat(_toConsumableArray(items), _toConsumableArray(banner === null || banner === void 0 ? void 0 : banner.items));
            }, []);
            setPageBannerState({
              loading: false,
              banner: error ? null : {
                items: totalItems
              },
              result: result,
              error: error ? result : null
            });
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setPageBannerState(_objectSpread(_objectSpread({}, pageBannerState), {}, {
              loading: false,
              error: [_t.message]
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function handleGetPageBanner() {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!position) return;
    handleGetPageBanner();
  }, [position, businessId, JSON.stringify((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 || (_orderState$options8 = _orderState$options8.address) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.location), orderState === null || orderState === void 0 || (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.type, (_orderState$options0 = orderState.options) === null || _orderState$options0 === void 0 ? void 0 : _orderState$options0.moment]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    pageBannerState: pageBannerState
  })));
};
PageBanner.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
PageBanner.defaultProps = {};