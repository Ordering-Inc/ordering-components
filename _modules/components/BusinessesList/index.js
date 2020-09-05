"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _BusinessContext = require("../../contexts/BusinessContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var API = 'https://apiv4.ordering.co/v400/en/demo/business';
var SEARCH_OPTIONS = {
  type: 1,
  location: '40.7539143,-73.9810162',
  time: 'asap'
};
/**
 * Component to manage Businesses List behavior without UI component
 */

var BusinessesList = function BusinessesList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings;

  var _useBusiness = (0, _BusinessContext.useBusiness)(),
      _useBusiness2 = _slicedToArray(_useBusiness, 2),
      businessesList = _useBusiness2[0],
      dispatchBusiness = _useBusiness2[1];

  var _useState = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pagination = _useState2[0],
      setPagination = _useState2[1];
  /**
   * Method to get all businesses based on params and filter values
   * @param {Number} page
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page) {
      var type, location, time;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = SEARCH_OPTIONS.type, location = SEARCH_OPTIONS.location, time = SEARCH_OPTIONS.time;
              /**
               * In this moment, the API receive all params from search values
               */
              // const params = {
              //   page,
              //   ...businessesList.filterValues
              // }

              _context.next = 3;
              return window.fetch("".concat(API, "?type=").concat(type, "&location=").concat(location, "&time=").concat(time)).then(function (res) {
                return res.json();
              });

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBusinesses(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to load getBusiness method and manage business context
   * @param {Boolean} isLoad
   */


  var loadBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var isLoad,
          res,
          _res$content,
          _res$content$paginati,
          _res$content2,
          _res$content2$paginat,
          _res$content3,
          _res$content3$paginat,
          _res$content4,
          _res$content4$paginat,
          _res$content5,
          _res$content5$paginat,
          _res$content6,
          _res$content6$paginat,
          _args2 = arguments;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              isLoad = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
              dispatchBusiness({
                type: _BusinessContext.BUSINESS_ACTIONS.LOADING,
                loading: true
              });
              _context2.prev = 2;
              _context2.next = 5;
              return getBusinesses(pagination.currentPage + 1);

            case 5:
              res = _context2.sent;
              dispatchBusiness({
                type: _BusinessContext.BUSINESS_ACTIONS.FETCH_BUSINESSES,
                data: {
                  loading: false,
                  error: res.error,
                  isConcatArray: isLoad,
                  businesses: res.result
                }
              });

              if (!res.error) {
                setPagination({
                  currentPage: (_res$content = res.content) === null || _res$content === void 0 ? void 0 : (_res$content$paginati = _res$content.pagination) === null || _res$content$paginati === void 0 ? void 0 : _res$content$paginati.current_page,
                  pageSize: (_res$content2 = res.content) === null || _res$content2 === void 0 ? void 0 : (_res$content2$paginat = _res$content2.pagination) === null || _res$content2$paginat === void 0 ? void 0 : _res$content2$paginat.page_size,
                  totalPages: (_res$content3 = res.content) === null || _res$content3 === void 0 ? void 0 : (_res$content3$paginat = _res$content3.pagination) === null || _res$content3$paginat === void 0 ? void 0 : _res$content3$paginat.total_pages,
                  total: (_res$content4 = res.content) === null || _res$content4 === void 0 ? void 0 : (_res$content4$paginat = _res$content4.pagination) === null || _res$content4$paginat === void 0 ? void 0 : _res$content4$paginat.total,
                  from: (_res$content5 = res.content) === null || _res$content5 === void 0 ? void 0 : (_res$content5$paginat = _res$content5.pagination) === null || _res$content5$paginat === void 0 ? void 0 : _res$content5$paginat.from,
                  to: (_res$content6 = res.content) === null || _res$content6 === void 0 ? void 0 : (_res$content6$paginat = _res$content6.pagination) === null || _res$content6$paginat === void 0 ? void 0 : _res$content6$paginat.to
                });
              }

              _context2.next = 14;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              dispatchBusiness({
                type: _BusinessContext.BUSINESS_ACTIONS.LOADING,
                loading: false
              });
              dispatchBusiness({
                type: _BusinessContext.BUSINESS_ACTIONS.ERROR,
                error: [_context2.t0.message]
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10]]);
    }));

    return function loadBusinesses() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to handle/set page for pagination
   * @param {Number} param
   */


  var onLoadMoreBusinesses = function onLoadMoreBusinesses(param) {
    loadBusinesses(param);
  };
  /**
   * Method to set filter values to business context, used for get businesses from API
   * @param {Object} params
   */


  var onFilterValues = function onFilterValues(params) {
    dispatchBusiness({
      type: _BusinessContext.BUSINESS_ACTIONS.SET_FILTER_VALUES,
      filterValues: _objectSpread(_objectSpread({}, businessesList.filterValues), {}, _defineProperty({}, params.key, params.value))
    });
  };

  (0, _react.useEffect)(function () {
    loadBusinesses();
  }, [businessesList.filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessesList: businessesList,
    pagination: pagination,
    onLoadBusinesses: onLoadMoreBusinesses,
    onFilterValues: onFilterValues
  })));
};

exports.BusinessesList = BusinessesList;
BusinessesList.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: _propTypes.default.object.isRequired,

  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of businesses
   * This is used of first option to show list
   */
  businesses: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

  /**
   * Components types before businesses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after businesses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before businesses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after businesses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessesList.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};