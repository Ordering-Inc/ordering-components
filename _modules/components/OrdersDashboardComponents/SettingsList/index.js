"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _ToastContext = require("../../../contexts/ToastContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _ConfigContext = require("../../../contexts/ConfigContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Component to manage Settings List page behavior without UI component
 */
var SettingsList = exports.SettingsList = function SettingsList(props) {
  var UIComponent = props.UIComponent,
    category = props.category,
    handleUpdateCategoryList = props.handleUpdateCategoryList,
    categoryList = props.categoryList,
    staticConfigs = props.staticConfigs,
    handleChangeStaic = props.handleChangeStaic;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    configs = _useState2[0],
    setConfigs = _useState2[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    loading = _useSession2$.loading,
    token = _useSession2$.token;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 2),
    refreshConfigs = _useConfig2[1].refreshConfigs;
  var _useState3 = (0, _react.useState)({
      changes: null,
      loading: false,
      result: {
        error: null
      },
      API: false,
      finalResult: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];

  /** Method to change checkbox status
   * @param {EventTarget} evt
   * @param {Boolean} index
   */
  var handleCheckBoxChange = function handleCheckBoxChange(evt, index, value) {
    var configId = parseInt(evt.target.getAttribute('data-id'));
    var changeValue;
    if (index) {
      // type = 3
      var str = value === '' ? [] : value.split('|');
      var position = str.indexOf(evt.target.name);
      if (position === -1 && evt.target.checked) str.push(evt.target.name);
      if (!evt.target.checked && position >= 0) str.splice(position, 1);
      changeValue = str.join('|');
    } else {
      // type = 4
      var array = _toConsumableArray(JSON.parse(value));
      var _position = array.indexOf(parseInt(evt.target.name));
      if (_position === -1 && evt.target.checked) array.push(parseInt(evt.target.name));
      if (!evt.target.checked && _position >= 0) array.splice(_position, 1);
      changeValue = JSON.stringify(array);
    }
    saveChanges(changeValue, configId);
  };

  /**
   * Method to save changes from settings items
   */
  var saveChanges = function saveChanges(changeValue, id) {
    var _formState$changes;
    var item = configs.find(function (config) {
      return config.id === id;
    });
    switch (item === null || item === void 0 ? void 0 : item.key) {
      case 'platform_fee_fixed':
      case 'platform_fee_percentage':
        if (isNaN(Number(changeValue) && changeValue !== '')) return;
        break;
      default:
        break;
    }
    var _configs = [];
    var found = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.find(function (item) {
      return item.id === id;
    });
    if (found) {
      _configs = formState === null || formState === void 0 ? void 0 : formState.changes.map(function (config) {
        return config.id === id ? _objectSpread(_objectSpread({}, config), {}, {
          value: changeValue
        }) : config;
      });
    } else {
      if (formState !== null && formState !== void 0 && formState.changes) _configs = _toConsumableArray(formState === null || formState === void 0 ? void 0 : formState.changes);
      _configs.push(_objectSpread(_objectSpread({}, item), {}, {
        value: changeValue
      }));
    }
    var defaultConfigs = configs.map(function (config) {
      return config.id === id ? _objectSpread(_objectSpread({}, config), {}, {
        value: changeValue
      }) : config;
    });
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _configs
    }));
    setConfigs(defaultConfigs);
  };

  /**
   * Method to update settings items
   */
  var handleClickUpdate = function handleClickUpdate() {
    var _formState$changes2;
    if (!(formState !== null && formState !== void 0 && formState.changes) || (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.length) === 0) return;
    var _changes = formState === null || formState === void 0 ? void 0 : formState.changes.map(function (item) {
      if (item.key === 'driver_tip_options') {
        return _objectSpread(_objectSpread({}, item), {}, {
          value: transformArray(item === null || item === void 0 ? void 0 : item.value)
        });
      }
      return item;
    });
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _toConsumableArray(_changes),
      API: true
    }));
  };
  var transformArray = function transformArray(values) {
    return '[' + values + ']';
  };

  /**
   * Method to update settings items
   * @param {Number} id config id to update a config
   * @param {Object} params key and value to change
   */
  var saveConfig = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id, params) {
      var _yield$ordering$setAc, _yield$ordering$setAc2, error, result, changes, _configs, _categories, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!loading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true,
              API: false
            }));
            _context.n = 2;
            return ordering.setAccessToken(token).configs(id).save(params);
          case 2:
            _yield$ordering$setAc = _context.v;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            error = _yield$ordering$setAc2.error;
            result = _yield$ordering$setAc2.result;
            if (!error) {
              changes = formState !== null && formState !== void 0 && formState.changes ? formState === null || formState === void 0 ? void 0 : formState.changes.filter(function (item) {
                return item.id !== result.id;
              }) : [];
              _configs = formState === null || formState === void 0 ? void 0 : formState.finalResult.map(function (config) {
                if (config.id === result.id) {
                  return _objectSpread(_objectSpread({}, config), {}, {
                    value: result === null || result === void 0 ? void 0 : result.value
                  });
                }
                return config;
              });
              if (changes.length > 0) {
                setFormState({
                  loading: false,
                  changes: changes,
                  result: {
                    error: false,
                    result: result
                  },
                  API: true,
                  finalResult: _configs
                });
              } else {
                setFormState({
                  loading: false,
                  changes: null,
                  result: {
                    error: false,
                    result: 'ok'
                  },
                  API: false,
                  finalResult: _configs
                });
                showToast(_ToastContext.ToastType.Success, t('SETTINGS_UPDATE', 'Settings updated'));
                if (handleUpdateCategoryList) {
                  _categories = categoryList === null || categoryList === void 0 ? void 0 : categoryList.categories.map(function (item) {
                    if (item.id === category.id) {
                      return _objectSpread(_objectSpread({}, item), {}, {
                        configs: _configs
                      });
                    }
                    return item;
                  });
                  handleUpdateCategoryList(_categories);
                }
                handleChangeStaic && handleChangeStaic(_toConsumableArray(_configs));
                refreshConfigs && refreshConfigs();
              }
            } else {
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                },
                API: false
              }));
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              result: {
                error: true,
                result: _t
              },
              API: false
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function saveConfig(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if ((category === null || category === void 0 ? void 0 : category.configs.length) > 0) {
      var _configs = _toConsumableArray(category === null || category === void 0 ? void 0 : category.configs);
      setConfigs(_configs);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        finalResult: _configs
      }));
    }
  }, [category === null || category === void 0 ? void 0 : category.configs]);
  (0, _react.useEffect)(function () {
    if (staticConfigs) {
      setConfigs(_toConsumableArray(staticConfigs));
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        finalResult: _toConsumableArray(staticConfigs)
      }));
    }
  }, [staticConfigs]);
  (0, _react.useEffect)(function () {
    var _formState$changes3;
    if (formState !== null && formState !== void 0 && formState.API && (formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.length) > 0) {
      var params = {
        key: formState === null || formState === void 0 ? void 0 : formState.changes[0].key,
        value: formState === null || formState === void 0 ? void 0 : formState.changes[0].value
      };
      saveConfig(formState === null || formState === void 0 ? void 0 : formState.changes[0].id, params);
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.API]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    settingsState: formState,
    configs: configs,
    handleInputChange: saveChanges,
    handleCheckBoxChange: handleCheckBoxChange,
    handleClickUpdate: handleClickUpdate,
    formState: formState,
    handleChangeFormState: setFormState,
    saveConfig: saveConfig
  })));
};
SettingsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
  * Category of configs
  */
  category: _propTypes.default.object,
  /**
   * Array of config
   */
  staticConfigs: _propTypes.default.arrayOf(_propTypes.object),
  /**
  * Object for a category
  */
  categoryList: _propTypes.default.object,
  /**
  * Function to set a category list
  */
  handleUpdateCategoryList: _propTypes.default.func,
  /**
   * Function to set a config
   */
  handleChangeStaic: _propTypes.default.func,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
SettingsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};