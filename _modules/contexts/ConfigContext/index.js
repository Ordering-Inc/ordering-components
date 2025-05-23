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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(newCountryCode) {
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
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            configs = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            _context.prev = 1;
            !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            if (!(newCountryCode !== null && newCountryCode !== void 0)) {
              _context.next = 7;
              break;
            }
            _context.t0 = newCountryCode;
            _context.next = 10;
            break;
          case 7:
            _context.next = 9;
            return strategy.getItem('country-code');
          case 9:
            _context.t0 = _context.sent;
          case 10:
            countryCode = _context.t0;
            options = {};
            if (countryCode) {
              options.headers = {
                'X-Country-Code-X': countryCode
              };
            }
            error = (_configs$error = configs === null || configs === void 0 ? void 0 : configs.error) !== null && _configs$error !== void 0 ? _configs$error : null;
            result = (_configs$result = configs === null || configs === void 0 ? void 0 : configs.result) !== null && _configs$result !== void 0 ? _configs$result : null;
            if (configs) {
              _context.next = 23;
              break;
            }
            _context.next = 18;
            return ordering.configs().asDictionary().get(options);
          case 18:
            _yield$ordering$confi = _context.sent;
            content = _yield$ordering$confi.content;
            error = content.error;
            result = content.result;
            handleUpdateOptimizationState('configs', result);
          case 23:
            data = null;
            _context.prev = 24;
            _context.next = 27;
            return fetch('https://ipapi.co/json/');
          case 27:
            response = _context.sent;
            if (!(response.status === 200)) {
              _context.next = 32;
              break;
            }
            _context.next = 31;
            return response.json();
          case 31:
            data = _context.sent;
          case 32:
            _context.next = 37;
            break;
          case 34:
            _context.prev = 34;
            _context.t1 = _context["catch"](24);
            data = null;
          case 37:
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
            _context.next = 45;
            break;
          case 42:
            _context.prev = 42;
            _context.t2 = _context["catch"](1);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 45:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 42], [24, 34]]);
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
  return configManager || [{}, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))];
};