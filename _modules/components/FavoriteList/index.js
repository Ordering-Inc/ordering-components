"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _OrderContext = require("../../contexts/OrderContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FavoriteList = function FavoriteList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings,
      favoriteURL = props.favoriteURL,
      originalURL = props.originalURL,
      location = props.location,
      propsToFetch = props.propsToFetch;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      reorder = _useOrder2[1].reorder;

  var _useState = (0, _react.useState)({
    loading: false,
    favorites: [],
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      favoriteList = _useState2[0],
      setFavoriteList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    result: [],
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      reorderState = _useState4[0],
      setReorderState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    total: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      pagination = _useState6[0],
      setPagination = _useState6[1];
  /**
   * Method to update favorite list
   * @param {number} id business, order, product id
   * @param {object} changes favorite info
   */


  var handleUpdateFavoriteList = function handleUpdateFavoriteList(id, changes) {
    if (changes !== null && changes !== void 0 && changes.favorite) return;
    var updatedFavorites = favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.favorites.filter(function (item) {
      return (item === null || item === void 0 ? void 0 : item.id) !== id;
    });
    setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
      favorites: updatedFavorites
    }));
  };
  /**
   * Function to get favorite list from API
   */


  var getFavoriteList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page) {
      var pageSize,
          requestOptions,
          fetchEndpoint,
          response,
          content,
          _content$result,
          idList,
          _yield$getOriginalLis,
          error,
          result,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : paginationSettings.pageSize;

              if (!(!user || !favoriteURL || !originalURL)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              fetchEndpoint = "".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/").concat(favoriteURL, "?page=").concat(page, "&page_size=").concat(pageSize);
              _context.next = 9;
              return fetch(fetchEndpoint, requestOptions);

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              content = _context.sent;

              if (content.error) {
                _context.next = 24;
                break;
              }

              setPagination({
                currentPage: content.pagination.current_page,
                pageSize: content.pagination.page_size,
                totalPages: content.pagination.total_pages,
                total: content.pagination.total,
                from: content.pagination.from,
                to: content.pagination.to
              });
              idList = content === null || content === void 0 ? void 0 : (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.reduce(function (ids, product) {
                return [].concat(_toConsumableArray(ids), [product === null || product === void 0 ? void 0 : product.object_id]);
              }, []);
              _context.next = 18;
              return getOriginalList(idList);

            case 18:
              _yield$getOriginalLis = _context.sent;
              error = _yield$getOriginalLis.error;
              result = _yield$getOriginalLis.result;

              if (!error) {
                setFavoriteList({
                  loading: false,
                  favorites: [].concat(_toConsumableArray(favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.favorites), _toConsumableArray(result)),
                  error: null
                });
              } else {
                setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 25;
              break;

            case 24:
              setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
                loading: false,
                error: content.result
              }));

            case 25:
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](3);
              setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 27]]);
    }));

    return function getFavoriteList(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Function to get business, product, order list from API
   */


  var getOriginalList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(ids) {
      var where, conditions, requestOptions, fetchEndpoint, response;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              where = null;
              conditions = [];
              conditions.push({
                attribute: 'id',
                value: ids
              });

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              fetchEndpoint = "".concat(ordering.root, "/").concat(originalURL, "?where=").concat(JSON.stringify(where));
              if (location) fetchEndpoint = "".concat(fetchEndpoint, "&location=").concat(location);
              if (propsToFetch) fetchEndpoint = "".concat(fetchEndpoint, "&params=").concat(propsToFetch);
              _context2.next = 10;
              return fetch(fetchEndpoint, requestOptions);

            case 10:
              response = _context2.sent;
              _context2.next = 13;
              return response.json();

            case 13:
              return _context2.abrupt("return", _context2.sent);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getOriginalList(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleReorder = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(orderId) {
      var _yield$reorder, error, result, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, _businessData$content2, choosedOrder, _businessId, _businessData, _businessSlug;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (orderId) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: true
              }));
              _context3.next = 6;
              return reorder(orderId);

            case 6:
              _yield$reorder = _context3.sent;
              error = _yield$reorder.error;
              result = _yield$reorder.result;

              if (error) {
                _context3.next = 13;
                break;
              }

              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                result: _objectSpread(_objectSpread({}, result), {}, {
                  orderId: orderId
                })
              }));
              _context3.next = 22;
              break;

            case 13:
              choosedOrder = favoriteList.favorites.find(function (_order) {
                return (_order === null || _order === void 0 ? void 0 : _order.id) === orderId;
              });
              _businessId = (_choosedOrder$busines = choosedOrder === null || choosedOrder === void 0 ? void 0 : choosedOrder.business_id) !== null && _choosedOrder$busines !== void 0 ? _choosedOrder$busines : choosedOrder === null || choosedOrder === void 0 ? void 0 : (_choosedOrder$origina = choosedOrder.original) === null || _choosedOrder$origina === void 0 ? void 0 : _choosedOrder$origina.business_id;
              _context3.next = 17;
              return ordering.businesses(_businessId).select(['slug']).get();

            case 17:
              _businessData = _context3.sent;
              _context3.next = 20;
              return _businessData === null || _businessData === void 0 ? void 0 : (_businessData$content = _businessData.content) === null || _businessData$content === void 0 ? void 0 : (_businessData$content2 = _businessData$content.result) === null || _businessData$content2 === void 0 ? void 0 : _businessData$content2.slug;

            case 20:
              _businessSlug = _context3.sent;
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: _objectSpread(_objectSpread({}, result), {}, {
                  orderId: orderId,
                  business_id: _businessId,
                  business: {
                    slug: _businessSlug
                  }
                })
              }));

            case 22:
              _context3.next = 27;
              break;

            case 24:
              _context3.prev = 24;
              _context3.t0 = _context3["catch"](2);
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: [_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message]
              }));

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 24]]);
    }));

    return function handleReorder(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    getFavoriteList(1);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    favoriteList: favoriteList,
    handleUpdateFavoriteList: handleUpdateFavoriteList,
    pagination: pagination,
    getFavoriteList: getFavoriteList,
    handleReorder: handleReorder,
    reorderState: reorderState
  })));
};

exports.FavoriteList = FavoriteList;
FavoriteList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Default URL to get favorite list
   */
  favoriteURL: _propTypes.default.string.isRequired,

  /**
   * Default URL to get business, product, order list
   */
  originalURL: _propTypes.default.string.isRequired,

  /**
   * Info of location
   */
  location: _propTypes.default.string,

  /**
   * Components types before favorite listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after favorite listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before favorite listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after favorite listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
FavoriteList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};