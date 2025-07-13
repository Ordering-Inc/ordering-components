"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _LanguageContext = require("../../contexts/LanguageContext");
var _ApiContext = require("../../contexts/ApiContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var LanguageSelector = exports.LanguageSelector = function LanguageSelector(props) {
  var _languageState$langua3;
  var currentLanguage = props.currentLanguage,
    languages = props.languages,
    UIComponent = props.UIComponent;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState = (0, _react.useState)({
      loading: !languages,
      languages: languages,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    languagesState = _useState2[0],
    setLanguageState = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 3),
    languageState = _useLanguage2[0],
    setLanguage = _useLanguage2[2];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    languageSelected = _useState4[0],
    setLanguageSelected = _useState4[1];
  var requestsState = {};

  /**
   * This method is used for change the current language
   */
  var onChangeLanguage = function onChangeLanguage(code) {
    var language = languagesState.languages.find(function (language) {
      return language.code === code;
    });
    if (props.handlerCustomChangeLanguage) {
      props.handlerCustomChangeLanguage(language);
      setLanguageSelected(language);
      return;
    }
    props.onChangeLanguage && props.onChangeLanguage(language);
    setLanguage(language);
  };

  /**
   * this method is used for load languages from API
   */
  var loadLanguages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var source, _yield$ordering$langu, _yield$ordering$langu2, error, result, language, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
              loading: true
            }));
            source = {};
            requestsState.languages = source;
            _context.n = 1;
            return ordering.languages().where([{
              attribute: 'enabled',
              value: true
            }]).get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$langu = _context.v;
            _yield$ordering$langu2 = _yield$ordering$langu.content;
            error = _yield$ordering$langu2.error;
            result = _yield$ordering$langu2.result;
            language = !error && currentLanguage && (result === null || result === void 0 ? void 0 : result.find(function (l) {
              return l.code === currentLanguage;
            }));
            if (language) {
              setLanguage(language);
              setLanguageSelected(language);
            }
            setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
              loading: false,
              languages: error ? [] : result
            }));
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
                loading: false,
                error: [_t]
              }));
            }
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadLanguages() {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if ((languages === null || languages === void 0 ? void 0 : languages.length) > 0) {
      setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
        loading: false,
        languages: languages
      }));
    } else {
      loadLanguages();
    }
    return function () {
      if (requestsState.languages) {
        requestsState.languages.cancel && requestsState.languages.cancel();
      }
    };
  }, []);

  /**
   * Selecting default if exist and there is not one in local storage
   */
  (0, _react.useEffect)(function () {
    var _languageState$langua;
    if (currentLanguage && (languages === null || languages === void 0 ? void 0 : languages.length) > 0) {
      var language = languages.find(function (language) {
        return language.code === currentLanguage;
      });
      setLanguage(language);
      setLanguageSelected(language);
    } else if (!(languageState !== null && languageState !== void 0 && (_languageState$langua = languageState.language) !== null && _languageState$langua !== void 0 && _languageState$langua.code) || !(languageSelected !== null && languageSelected !== void 0 && languageSelected.code)) {
      var _languageState$langua2, _languagesState$langu;
      var _language = languageState !== null && languageState !== void 0 && (_languageState$langua2 = languageState.language) !== null && _languageState$langua2 !== void 0 && _languageState$langua2.code ? languageState === null || languageState === void 0 ? void 0 : languageState.language : languagesState === null || languagesState === void 0 || (_languagesState$langu = languagesState.languages) === null || _languagesState$langu === void 0 ? void 0 : _languagesState$langu.find(function (language) {
        return language.default;
      });
      if (_language) {
        setLanguage(_language);
        setLanguageSelected(_language);
      }
    }
  }, [languages, languagesState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentLanguage: props.handlerCustomChangeLanguage ? languageSelected === null || languageSelected === void 0 ? void 0 : languageSelected.code : languageState === null || languageState === void 0 || (_languageState$langua3 = languageState.language) === null || _languageState$langua3 === void 0 ? void 0 : _languageState$langua3.code,
    languagesState: languagesState,
    handleChangeLanguage: onChangeLanguage
  })));
};
LanguageSelector.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * currentLanguage, this must be containt current language to show in the app
   */
  currentLanguage: _propTypes.default.string,
  /**
   * languages, this array must be containt a list of available languages
   */
  languages: _propTypes.default.arrayOf(_propTypes.default.object),
  /**
   * Return language selected
   */
  onChangeLanguage: _propTypes.default.func,
  /**
   * handlerCustomChangeLanguage, handler change behavior
   */
  handlerCustomChangeLanguage: _propTypes.default.func,
  /**
   * Components types before language selector
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after language selector
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
LanguageSelector.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};