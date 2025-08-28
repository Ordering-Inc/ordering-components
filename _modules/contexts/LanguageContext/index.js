"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLanguage = exports.LanguageProvider = exports.LanguageContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ApiContext = require("../ApiContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
/**
 * Create LanguageContext
 * This context will manage the current languages internally and provide an easy interface
 */
var LanguageContext = exports.LanguageContext = /*#__PURE__*/(0, _react.createContext)();

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
var LanguageProvider = exports.LanguageProvider = function LanguageProvider(_ref) {
  var _state$language4;
  var settings = _ref.settings,
    children = _ref.children,
    strategy = _ref.strategy;
  var _useState = (0, _react.useState)({
      loading: true,
      dictionary: {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  /**
   * Load language from localstorage and set state or load default language
   */
  var setLanguageFromLocalStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var language;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return strategy.getItem('language', true);
          case 1:
            language = _context.v;
            if (!language) {
              loadDefaultLanguage();
            } else {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                language: language
              }));
              apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);
            }
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function setLanguageFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 2),
    ordering = _useApi2[0],
    apiHelper = _useApi2[1];
  var updateLanguageContext = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _language, dictionary, _yield$ordering$trans, _yield$ordering$trans2, errDict, resDict, _yield$ordering$langu, _yield$ordering$langu2, error, result, language, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context2.n = 1;
            return strategy.getItem('language', true);
          case 1:
            _language = _context2.v;
            dictionary = {};
            _context2.n = 2;
            return ordering.translations().asDictionary().get();
          case 2:
            _yield$ordering$trans = _context2.v;
            _yield$ordering$trans2 = _yield$ordering$trans.content;
            errDict = _yield$ordering$trans2.error;
            resDict = _yield$ordering$trans2.result;
            dictionary = errDict ? {} : resDict;
            _context2.n = 3;
            return ordering.languages().where([{
              attribute: _language ? _language === null || _language === void 0 ? void 0 : _language.code : 'default',
              value: true
            }]).get();
          case 3:
            _yield$ordering$langu = _context2.v;
            _yield$ordering$langu2 = _yield$ordering$langu.content;
            error = _yield$ordering$langu2.error;
            result = _yield$ordering$langu2.result;
            language = {
              id: result[0].id,
              code: result[0].code,
              rtl: result[0].rtl
            };
            apiHelper.setLanguage(result[0].code);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              error: error ? typeof result === 'string' ? result : result === null || result === void 0 ? void 0 : result[0] : null,
              dictionary: dictionary,
              language: language
            }));
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 4]]);
    }));
    return function updateLanguageContext() {
      return _ref3.apply(this, arguments);
    };
  }();
  var refreshTranslations = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$ordering$trans3, _yield$ordering$trans4, error, result, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true
            }));
            _context3.n = 1;
            return ordering.translations().asDictionary().get();
          case 1:
            _yield$ordering$trans3 = _context3.v;
            _yield$ordering$trans4 = _yield$ordering$trans3.content;
            error = _yield$ordering$trans4.error;
            result = _yield$ordering$trans4.result;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              dictionary: error ? {} : result
            }));
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t2 = _context3.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function refreshTranslations() {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadDefaultLanguage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _language, _yield$ordering$langu3, _yield$ordering$langu4, error, result, language, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.n = 1;
            return strategy.getItem('language', true);
          case 1:
            _language = _context4.v;
            _context4.p = 2;
            _context4.n = 3;
            return ordering.languages().where([{
              attribute: _language ? _language === null || _language === void 0 ? void 0 : _language.code : 'default',
              value: true
            }]).get();
          case 3:
            _yield$ordering$langu3 = _context4.v;
            _yield$ordering$langu4 = _yield$ordering$langu3.content;
            error = _yield$ordering$langu4.error;
            result = _yield$ordering$langu4.result;
            if (!error) {
              _context4.n = 4;
              break;
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              error: typeof result === 'string' ? result : result === null || result === void 0 ? void 0 : result[0]
            }));
            return _context4.a(2);
          case 4:
            language = {
              id: result[0].id,
              code: result[0].code,
              rtl: result[0].rtl
            };
            apiHelper.setLanguage(result[0].code);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              language: language
            }));
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t3 = _context4.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false
            }));
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 5]]);
    }));
    return function loadDefaultLanguage() {
      return _ref5.apply(this, arguments);
    };
  }();
  var setLanguage = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(language) {
      var _state$language;
      var _language;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (!(!language || language.id === ((_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.id))) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            _language = {
              id: language.id,
              code: language.code,
              rtl: language.rtl
            };
            _context5.n = 2;
            return strategy.setItem('language', _language, true);
          case 2:
            apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: true,
              language: _language
            }));
          case 3:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function setLanguage(_x) {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Refresh translation when change language from ordering
   */
  (0, _react.useEffect)(function () {
    var checkLanguage = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _state$language2, _state$language3;
        var token;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (!((_state$language2 = state.language) !== null && _state$language2 !== void 0 && _state$language2.code && ((_state$language3 = state.language) === null || _state$language3 === void 0 ? void 0 : _state$language3.code) === ordering.language)) {
                _context6.n = 2;
                break;
              }
              _context6.n = 1;
              return strategy.getItem('token');
            case 1:
              token = _context6.v;
              settings !== null && settings !== void 0 && settings.use_root_point && settings !== null && settings !== void 0 && settings.force_update_lang && !token ? updateLanguageContext() : refreshTranslations();
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }));
      return function checkLanguage() {
        return _ref7.apply(this, arguments);
      };
    }();
    checkLanguage();
  }, [(_state$language4 = state.language) === null || _state$language4 === void 0 ? void 0 : _state$language4.code, ordering]);
  (0, _react.useEffect)(function () {
    setLanguageFromLocalStorage();
  }, []);
  (0, _react.useEffect)(function () {
    var _state$language5, _state$language6;
    if (ordering.language !== (state === null || state === void 0 || (_state$language5 = state.language) === null || _state$language5 === void 0 ? void 0 : _state$language5.code)) return;
    apiHelper.setLanguage(state === null || state === void 0 || (_state$language6 = state.language) === null || _state$language6 === void 0 ? void 0 : _state$language6.code);
  }, [state.language]);
  var t = function t(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (state === null || state === void 0 ? void 0 : state.dictionary) && Object.keys(state === null || state === void 0 ? void 0 : state.dictionary).length > 0 && state.dictionary[key] || fallback || key;
  };
  return /*#__PURE__*/_react.default.createElement(LanguageContext.Provider, {
    value: [state, t, setLanguage, refreshTranslations, loadDefaultLanguage]
  }, children);
};

/**
 * Hook to get and update language state
 */
var useLanguage = exports.useLanguage = function useLanguage() {
  var languageManager = (0, _react.useContext)(LanguageContext);
  return languageManager || [{}, function (key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return fallback || key;
  }, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          return _context7.a(2);
      }
    }, _callee7);
  })), /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          return _context8.a(2);
      }
    }, _callee8);
  }))];
};