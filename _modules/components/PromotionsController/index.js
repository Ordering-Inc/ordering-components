"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromotionsController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PromotionsController = function PromotionsController(props) {
  var _paginationSettings$p;

  var paramsToFetch = props.paramsToFetch,
      paginationSettings = props.paginationSettings,
      UIComponent = props.UIComponent;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: true,
    error: null,
    offers: [],
    pagination: {
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      offersState = _useState2[0],
      setOffersState = _useState2[1];

  var getOffers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
      var page, _ref$pageSize, pageSize, url, response;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _ref.page, _ref$pageSize = _ref.pageSize, pageSize = _ref$pageSize === void 0 ? paginationSettings.pageSize : _ref$pageSize;
              url = "".concat(ordering.root, "/offers?page=").concat(page, "&page_size=").concat(pageSize, "&params=").concat(paramsToFetch.join());
              _context.next = 4;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(session.token)
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              return _context.abrupt("return", _context.sent);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getOffers(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadOffers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _offersState$paginati, _offersState$paginati2, _offersState$paginati3;

      var _yield$getOffers, error, result, pagination, _err$message;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(((_offersState$paginati = offersState.pagination) === null || _offersState$paginati === void 0 ? void 0 : _offersState$paginati.currentPage) === ((_offersState$paginati2 = offersState.pagination) === null || _offersState$paginati2 === void 0 ? void 0 : _offersState$paginati2.totalPages) && ((_offersState$paginati3 = offersState.pagination) === null || _offersState$paginati3 === void 0 ? void 0 : _offersState$paginati3.total) !== null)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              setOffersState(_objectSpread(_objectSpread({}, offersState), {}, {
                loading: true
              }));
              _context2.next = 6;
              return getOffers({
                page: 1
              });

            case 6:
              _yield$getOffers = _context2.sent;
              error = _yield$getOffers.error;
              result = _yield$getOffers.result;
              pagination = _yield$getOffers.pagination;
              setOffersState(_objectSpread(_objectSpread({}, offersState), {}, {
                loading: false,
                error: error ? result : null,
                offers: error ? [] : result,
                pagination: !error ? _objectSpread(_objectSpread({}, offersState.pagination), {}, {
                  currentPage: pagination.current_page,
                  pageSize: pagination.page_size,
                  totalPages: pagination.total_pages,
                  total: pagination.total,
                  from: pagination.from,
                  to: pagination.to
                }) : offersState.pagination
              }));
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](2);
              setOffersState(_objectSpread(_objectSpread({}, offersState), {}, {
                loading: false,
                error: [(_err$message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _err$message !== void 0 ? _err$message : 'ERROR']
              }));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 13]]);
    }));

    return function loadOffers() {
      return _ref3.apply(this, arguments);
    };
  }();

  var loadMoreOffers = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _yield$getOffers2, error, result, pagination, _err$message2;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setOffersState(_objectSpread(_objectSpread({}, offersState), {}, {
                loading: true
              }));
              _context3.next = 4;
              return getOffers({
                page: offersState.pagination.currentPage + 1
              });

            case 4:
              _yield$getOffers2 = _context3.sent;
              error = _yield$getOffers2.error;
              result = _yield$getOffers2.result;
              pagination = _yield$getOffers2.pagination;
              setOffersState(_objectSpread(_objectSpread({}, offersState), {}, {
                loading: false,
                error: error ? result : null,
                offers: error ? offersState.offers : offersState.offers.concat(result),
                pagination: !error ? _objectSpread(_objectSpread({}, offersState.pagination), {}, {
                  currentPage: pagination.current_page,
                  pageSize: pagination.page_size,
                  totalPages: pagination.total_pages,
                  total: pagination.total,
                  from: pagination.from,
                  to: pagination.to
                }) : offersState.pagination
              }));
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setOffersState(_objectSpread(_objectSpread({}, offersState), {}, {
                loading: false,
                error: [(_err$message2 = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _err$message2 !== void 0 ? _err$message2 : 'ERROR']
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function loadMoreOffers() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    loadOffers();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    offersState: offersState,
    loadMoreOffers: loadMoreOffers
  })));
};

exports.PromotionsController = PromotionsController;
PromotionsController.defaultProps = {
  paramsToFetch: ['id', 'name', 'description', 'businesses', 'sites', 'image', 'end', 'start', 'paymethods', 'type', 'minimum', 'rate_type', 'rate', 'coupon', 'limit', 'enabled', 'label', 'rank', 'condition_type', 'target', 'max_discount', 'stackable', 'auto', 'public', 'limit_per_user', 'user_order_count', 'user_order_count_condition', 'valid_from_after_user_last_order_minutes', 'valid_until_after_user_last_order_minutes', 'include_products_with_offer'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};