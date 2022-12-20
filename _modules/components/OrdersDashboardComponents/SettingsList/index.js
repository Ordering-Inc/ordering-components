"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _SessionContext = require("../../../contexts/SessionContext");

var _ApiContext = require("../../../contexts/ApiContext");

var _ToastContext = require("../../../contexts/ToastContext");

var _LanguageContext = require("../../../contexts/LanguageContext");

var _ConfigContext = require("../../../contexts/ConfigContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage Settings List page behavior without UI component
 */
var SettingsList = function SettingsList(props) {
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
      loading = _useSession2[0].loading;

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
    var found = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.find(function (item) {
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

    if (!(formState !== null && formState !== void 0 && formState.changes) || (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.length) === 0) return;

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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(id, params) {
      var _yield$ordering$confi, _yield$ordering$confi2, error, result, changes, _configs, _categories;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loading) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true,
                API: false
              }));
              _context.next = 7;
              return ordering.configs(id).save(params);

            case 7:
              _yield$ordering$confi = _context.sent;
              _yield$ordering$confi2 = _yield$ordering$confi.content;
              error = _yield$ordering$confi2.error;
              result = _yield$ordering$confi2.result;

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

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: _context.t0
                },
                API: false
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 14]]);
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

    if (formState !== null && formState !== void 0 && formState.API && (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.length) > 0) {
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

exports.SettingsList = SettingsList;
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