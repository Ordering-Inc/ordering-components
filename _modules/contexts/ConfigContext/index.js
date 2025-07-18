"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfig = exports.ConfigProvider = exports.ConfigContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ApiContext = require("../ApiContext");
var _LanguageContext = require("../LanguageContext");
var _EventContext = require("../EventContext");
var _OptimizationLoadContext = require("../OptimizationLoadContext");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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

/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */
var ConfigContext = exports.ConfigContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */
var ConfigProvider = exports.ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children,
    strategy = _ref.strategy;
  var _useState = (0, _react.useState)({
      loading: true,
      configs: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 1),
    languageState = _useLanguage2[0];
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOptimizationLoad = (0, _OptimizationLoadContext.useOptimizationLoad)(),
    _useOptimizationLoad2 = _slicedToArray(_useOptimizationLoad, 2),
    optimizationLoad = _useOptimizationLoad2[0],
    handleUpdateOptimizationState = _useOptimizationLoad2[1].handleUpdateOptimizationState;
  var customConfigs = {
    max_days_preorder: {
      key: 'max_days_preorder',
      value: 6
    },
    meters_to_change_address: {
      key: 'meters_to_change_address',
      value: 500
    },
    default_order_type: {
      key: 'default_order_type',
      value: 'delivery'
    },
    order_types_allowed: {
      key: 'order_types_allowed',
      value: '1|2|3|4|5'
    },
    google_autocomplete_selection_required: {
      key: 'google_autocomplete_selection_required',
      value: 'true'
    },
    google_maps_api_key: {
      key: 'google_maps_api_key',
      value: null
    },
    country_autocomplete: {
      key: 'country_autocomplete',
      value: '*'
    },
    track_id_google_analytics: {
      key: 'track_id_google_analytics',
      value: 'UA-51635411-4'
    },
    guest_uuid_max_days: {
      key: 'guest_uuid_max_days',
      value: 3
    },
    guest_uuid_access: {
      key: 'guest_uuid_access',
      value: 1
    },
    location_default_latitude: {
      key: 'location_default_latitude',
      value: 40.7751052
    },
    location_default_longitude: {
      key: 'location_default_longitude',
      value: -73.9651148
    },
    driver_tip_type: {
      key: 'driver_tip_type',
      value: 2 // 1: fixed, 2: percetaje
    },
    driver_tip_options: {
      key: 'driver_tip_options',
      value: [0, 10, 15, 20, 25]
    },
    driver_tip_use_custom: {
      key: 'driver_tip_use_custom',
      value: 0 // 0: disabled, 1: enabled
    },
    validation_phone_number_lib: {
      key: 'validation_phone_number_lib',
      value: 1 // 0: disabled, 1: enabled
    },
    add_product_with_one_click: {
      key: 'add_product_with_one_click',
      value: false
    },
    use_parent_category1: {
      key: 'use_parent_category',
      value: '0'
    },
    android_app_id: {
      key: 'android_app_id',
      value: null
    },
    ios_app_id: {
      key: 'ios_app_id',
      value: null
    }
  };
  var refreshConfigs = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(newCountryCode) {
      var configs,
        _configs$error,
        _configs$result,
        _result,
        _result2,
        _result3,
        _result4,
        _result5,
        _result6,
        _data,
        _result7,
        _data2,
        countryCode,
        options,
        error,
        result,
        _yield$ordering$confi,
        content,
        data,
        response,
        conditionalConfigs,
        configsResult,
        _args = arguments,
        _t,
        _t2,
        _t3;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            configs = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            _context.p = 1;
            !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            if (!(newCountryCode !== null && newCountryCode !== void 0)) {
              _context.n = 2;
              break;
            }
            _t = newCountryCode;
            _context.n = 4;
            break;
          case 2:
            _context.n = 3;
            return strategy.getItem('country-code');
          case 3:
            _t = _context.v;
          case 4:
            countryCode = _t;
            options = {};
            if (countryCode) {
              options.headers = {
                'X-Country-Code-X': countryCode
              };
            }
            error = (_configs$error = configs === null || configs === void 0 ? void 0 : configs.error) !== null && _configs$error !== void 0 ? _configs$error : null;
            result = (_configs$result = configs === null || configs === void 0 ? void 0 : configs.result) !== null && _configs$result !== void 0 ? _configs$result : null;
            if (configs) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return ordering.configs().asDictionary().get(options);
          case 5:
            _yield$ordering$confi = _context.v;
            content = _yield$ordering$confi.content;
            error = content.error;
            result = content.result;
            handleUpdateOptimizationState('configs', result);
          case 6:
            data = null;
            _context.p = 7;
            _context.n = 8;
            return fetch('https://ipapi.co/json/');
          case 8:
            response = _context.v;
            if (!(response.status === 200)) {
              _context.n = 10;
              break;
            }
            _context.n = 9;
            return response.json();
          case 9:
            data = _context.v;
          case 10:
            _context.n = 12;
            break;
          case 11:
            _context.p = 11;
            _t2 = _context.v;
            data = null;
          case 12:
            conditionalConfigs = {
              dates_moment_format: {
                key: 'dates_moment_format',
                value: ((_result = result) === null || _result === void 0 || (_result = _result.dates_moment_format) === null || _result === void 0 ? void 0 : _result.value) || (((_result2 = result) === null || _result2 === void 0 || (_result2 = _result2.format_time) === null || _result2 === void 0 ? void 0 : _result2.value) === '24' ? 'MM/DD HH:mm' : 'MM/DD hh:mma')
              },
              dates_general_format: {
                key: 'dates_general_format',
                value: ((_result3 = result) === null || _result3 === void 0 || (_result3 = _result3.dates_general_format) === null || _result3 === void 0 ? void 0 : _result3.value) || (((_result4 = result) === null || _result4 === void 0 || (_result4 = _result4.format_time) === null || _result4 === void 0 ? void 0 : _result4.value) === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ssa')
              }
            };
            configsResult = _objectSpread(_objectSpread(_objectSpread({}, customConfigs), result), {}, {
              default_country_code: _objectSpread(_objectSpread({}, (_result5 = result) === null || _result5 === void 0 ? void 0 : _result5.default_country_code), {}, {
                value: ((_result6 = result) === null || _result6 === void 0 || (_result6 = _result6.default_country_code) === null || _result6 === void 0 ? void 0 : _result6.value) || data && ((_data = data) === null || _data === void 0 ? void 0 : _data.country_code) || 'US',
                calling_number: ((_result7 = result) === null || _result7 === void 0 || (_result7 = _result7.default_country_code) === null || _result7 === void 0 ? void 0 : _result7.calling_number) || data && ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.country_calling_code) || '+1'
              })
            }, conditionalConfigs);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              configs: error ? {} : configsResult
            }));
            _context.n = 14;
            break;
          case 13:
            _context.p = 13;
            _t3 = _context.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 14:
            return _context.a(2);
        }
      }, _callee, null, [[7, 11], [1, 13]]);
    }));
    return function refreshConfigs(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var functions = {
    refreshConfigs: refreshConfigs
  };
  (0, _react.useEffect)(function () {
    var _optimizationLoad$res, _optimizationLoad$res2;
    if (languageState.loading || optimizationLoad.loading) return;
    var _configs = optimizationLoad.result ? {
      error: optimizationLoad.error,
      result: _objectSpread(_objectSpread({}, (_optimizationLoad$res = optimizationLoad.result) === null || _optimizationLoad$res === void 0 ? void 0 : _optimizationLoad$res.configs), (_optimizationLoad$res2 = optimizationLoad.result) === null || _optimizationLoad$res2 === void 0 ? void 0 : _optimizationLoad$res2.features)
    } : null;
    refreshConfigs(null, _configs);
  }, [languageState, optimizationLoad]);
  (0, _react.useEffect)(function () {
    var handleUpdateConfigs = function handleUpdateConfigs(countryCode) {
      refreshConfigs(countryCode);
    };
    events.on('country_code_changed', handleUpdateConfigs);
    return function () {
      events.off('country_code_changed', handleUpdateConfigs);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!state.loading && ordering !== null && ordering !== void 0 && ordering.project) {
      refreshConfigs();
    }
  }, [ordering === null || ordering === void 0 ? void 0 : ordering.project]);
  return /*#__PURE__*/_react.default.createElement(ConfigContext.Provider, {
    value: [state, functions]
  }, children);
};

/**
 * Hook to get and update configs state
 */
var useConfig = exports.useConfig = function useConfig() {
  var configManager = (0, _react.useContext)(ConfigContext);
  return configManager || [{}, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2);
      }
    }, _callee2);
  }))];
};