"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

_dayjs.default.extend(_utc.default);

var BusinessList = function BusinessList(props) {
  var UIComponent = props.UIComponent,
      allBusinesses = props.allBusinesses,
      isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription,
      reviewQuality = props.reviewQuality,
      propsToFetch = props.propsToFetch,
      onBusinessClick = props.onBusinessClick,
      paginationSettings = props.paginationSettings;

  var _useState = (0, _react.useState)({
    businesses: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessesList = _useState2[0],
      setBusinessesList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: 0,
    pageSize: (paginationSettings === null || paginationSettings === void 0 ? void 0 : paginationSettings.pageSize) ? paginationSettings === null || paginationSettings === void 0 ? void 0 : paginationSettings.pageSize : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationProps = _useState4[0],
      setPaginationProps = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      businessTypeSelected = _useState6[0],
      setBusinessTypeSelected = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      timeLimitValue = _useState10[0],
      setTimeLimitValue = _useState10[1];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      requestsState = _useState12[0],
      setRequestsState = _useState12[1];

  var isValidMoment = function isValidMoment(date, format) {
    return (0, _dayjs.default)(date, format).format(format) === date;
  };

  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);
  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */

  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newFetch) {
      var _orderState$options7, _orderState$options8, parameters, _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2, _orderState$options3, _orderState$options4, _orderState$options4$, _orderState$options4$2, _orderState$options5, _orderState$options5$, _orderState$options5$2, _orderState$options6, _orderState$options9, moment, where, conditions, timeLimitConditions, searchConditions, isSpecialCharacter, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, result, pagination, nextPageItems, remainingItems;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: true
              }));

              if (allBusinesses) {
                parameters = {
                  location: "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng),
                  type: ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) || 1
                };
              } else {
                parameters = {
                  location: "".concat((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : (_orderState$options4$2 = _orderState$options4$.location) === null || _orderState$options4$2 === void 0 ? void 0 : _orderState$options4$2.lat, ",").concat((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : (_orderState$options5$2 = _orderState$options5$.location) === null || _orderState$options5$2 === void 0 ? void 0 : _orderState$options5$2.lng),
                  type: ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type) || 1,
                  page: newFetch ? 1 : paginationProps.currentPage + 1,
                  page_size: paginationProps.pageSize
                };
              }

              if (((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.moment) && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              where = null;
              conditions = [];

              if (timeLimitValue) {
                timeLimitConditions = [];
                timeLimitConditions.push({
                  attribute: 'delivery_time',
                  value: {
                    condition: '<=',
                    value: '0:30'
                  }
                });
                timeLimitConditions.push({
                  attribute: 'pickup_time',
                  value: {
                    condition: '<=',
                    value: '0:30'
                  }
                });
                conditions.push({
                  conector: 'OR',
                  conditions: timeLimitConditions
                });
              }

              if (businessTypeSelected) {
                conditions.push({
                  attribute: businessTypeSelected,
                  value: true
                });
              }

              if (searchValue) {
                searchConditions = [];
                isSpecialCharacter = rex.test(searchValue);

                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: !isSpecialCharacter ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByDescription) {
                  searchConditions.push({
                    attribute: 'description',
                    value: {
                      condition: 'ilike',
                      value: !isSpecialCharacter ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              source = {};
              requestsState.businesses = source;
              setRequestsState(_objectSpread({}, requestsState));
              fetchEndpoint = where ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where) : ordering.businesses().select(propsToFetch).parameters(parameters);
              _context.next = 16;
              return fetchEndpoint.get({
                cancelToken: source
              });

            case 16:
              _yield$fetchEndpoint$ = _context.sent;
              _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
              result = _yield$fetchEndpoint$2.result;
              pagination = _yield$fetchEndpoint$2.pagination;

              if (allBusinesses) {
                result.sort(function (a, b) {
                  return b.reviews.quality - a.reviews.quality;
                });
                businessesList.businesses = _toConsumableArray(result);
              } else {
                businessesList.businesses = newFetch ? result : [].concat(_toConsumableArray(businessesList.businesses), _toConsumableArray(result));
              }

              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false
              }));
              nextPageItems = 0;

              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - businessesList.businesses.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }

              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                nextPageItems: nextPageItems
              }));
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 27]]);
    }));

    return function getBusinesses(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Cancel businesses request
   */


  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);
  /**
   * Listening order option and filter changes
   */

  (0, _react.useEffect)(function () {
    var _orderState$options10, _orderState$options11;

    if (orderState.loading || !((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : (_orderState$options11 = _orderState$options10.address) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.location)) return;
    getBusinesses(true);
  }, [JSON.stringify(orderState.options), businessTypeSelected, searchValue, timeLimitValue]);
  /**
   * Listening review quality change
   */

  (0, _react.useEffect)(function () {
    var _orderState$options12, _orderState$options13;

    if (orderState.loading || !((_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : (_orderState$options13 = _orderState$options12.address) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.location)) return;

    if (reviewQuality) {
      var _businesses = businessesList.businesses.filter(function (business) {
        return business.reviews.quality >= reviewQuality;
      });

      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: _businesses
      }));
    }
  }, [JSON.stringify(orderState.options), reviewQuality]);
  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */

  var handleBusinessClick = function handleBusinessClick(business) {
    onBusinessClick && onBusinessClick(business);
  };
  /**
   * Change business type
   * @param {object} businessType Business type
   */


  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };
  /**
   * Change text to search
   * @param {string} search Search value
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    if (!!search !== !!searchValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }

    setSearchValue(search);
  };
  /**
   * Change pickup time
   * @param {string} time Search value
   */


  var handleChangeTimeLimit = function handleChangeTimeLimit(time) {
    if (!!time !== !!timeLimitValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }

    setTimeLimitValue(time);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessesList: businessesList,
    paginationProps: paginationProps,
    searchValue: searchValue,
    getBusinesses: getBusinesses,
    handleChangeSearch: handleChangeSearch,
    handleChangeTimeLimit: handleChangeTimeLimit,
    handleBusinessClick: handleBusinessClick,
    handleChangeBusinessType: handleChangeBusinessType
  })));
};

exports.BusinessList = BusinessList;
BusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Function to get business clicked
   */
  onBusinessClick: _propTypes.default.func
};
BusinessList.defaultProps = {
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
};