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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);

/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */
var ConfigContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */
exports.ConfigContext = ConfigContext;
var ConfigProvider = function ConfigProvider(_ref) {
  var _ref2;
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
  var refreshConfigs = function refreshConfigs(_x) {
    return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newCountryCode) {
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
    }))).apply(this, arguments);
  };
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
exports.ConfigProvider = ConfigProvider;
var useConfig = function useConfig() {
  var configManager = (0, _react.useContext)(ConfigContext);
  return configManager || [{}, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))];
};
exports.useConfig = useConfig;