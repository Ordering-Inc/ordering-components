"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrderingTheme = exports.OrderingThemeProvider = exports.OrderingThemeContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../ApiContext");

var _OptimizationLoadContext = require("../OptimizationLoadContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * Create OrderingThemeContext
 * This context will manage the current themes and layouts
 */
var OrderingThemeContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to ordering themes and layouts manager
 * This provider has a reducer for manage themes and layouts state
 * @param {props} props
 */

exports.OrderingThemeContext = OrderingThemeContext;

var OrderingThemeProvider = function OrderingThemeProvider(_ref) {
  var children = _ref.children,
      settings = _ref.settings;

  var _useState = (0, _react.useState)({
    loading: true,
    theme: {},
    error: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOptimizationLoad = (0, _OptimizationLoadContext.useOptimizationLoad)(),
      _useOptimizationLoad2 = _slicedToArray(_useOptimizationLoad, 1),
      optimizationLoad = _useOptimizationLoad2[0];

  var getThemes = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var themes,
          requestOptions,
          _themes$error,
          _themes$result,
          error,
          result,
          response,
          res,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              themes = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
              requestOptions = {
                method: 'GET',
                headers: {
                  'X-App-X': settings.appId
                }
              };
              _context.prev = 2;
              error = (_themes$error = themes === null || themes === void 0 ? void 0 : themes.error) !== null && _themes$error !== void 0 ? _themes$error : null;
              result = (_themes$result = themes === null || themes === void 0 ? void 0 : themes.result) !== null && _themes$result !== void 0 ? _themes$result : null;

              if (themes) {
                _context.next = 14;
                break;
              }

              _context.next = 8;
              return fetch("".concat(ordering.root, "/theme"), requestOptions);

            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();

            case 11:
              res = _context.sent;
              error = res === null || res === void 0 ? void 0 : res.error;
              result = res === null || res === void 0 ? void 0 : res.result;

            case 14:
              if (error) {
                _context.next = 17;
                break;
              }

              setState(_objectSpread(_objectSpread({}, state), {}, {
                theme: result.values,
                loading: false,
                error: false
              }));
              return _context.abrupt("return");

            case 17:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                theme: {},
                loading: false,
                error: true
              }));
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](2);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                theme: {},
                loading: false,
                error: _context.t0
              }));

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 20]]);
    }));

    return function getThemes() {
      return _ref2.apply(this, arguments);
    };
  }();

  var refreshTheme = function refreshTheme() {
    getThemes();
  };

  (0, _react.useEffect)(function () {
    var _optimizationLoad$res;

    if (optimizationLoad.loading) return;

    var _themes = optimizationLoad.result ? {
      error: optimizationLoad.error,
      result: {
        values: (_optimizationLoad$res = optimizationLoad.result) === null || _optimizationLoad$res === void 0 ? void 0 : _optimizationLoad$res.theme
      }
    } : null;

    getThemes(_themes);
  }, [optimizationLoad]);
  var functions = {
    refreshTheme: refreshTheme
  };
  return /*#__PURE__*/_react.default.createElement(OrderingThemeContext.Provider, {
    value: [state, functions]
  }, children);
};
/**
 * Hook to get ordering theme
 */


exports.OrderingThemeProvider = OrderingThemeProvider;

var useOrderingTheme = function useOrderingTheme() {
  var orderingThemeManager = (0, _react.useContext)(OrderingThemeContext);

  var warningMessage = function warningMessage() {
    console.warn('Must use OrderingThemeProvider to wrappe the app.');
  };
  /**
   * Functions to avoid fails
   */


  var functionsPlaceholders = {
    refreshTheme: warningMessage
  };
  return orderingThemeManager || [{}, functionsPlaceholders];
};

exports.useOrderingTheme = useOrderingTheme;