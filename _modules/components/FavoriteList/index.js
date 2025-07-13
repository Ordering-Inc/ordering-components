"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var FavoriteList = exports.FavoriteList = function FavoriteList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings,
    favoriteURL = props.favoriteURL,
    originalURL = props.originalURL,
    location = props.location,
    propsToFetch = props.propsToFetch,
    isProduct = props.isProduct,
    isProfessional = props.isProfessional,
    franchiseId = props.franchiseId;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderStatus = _useOrder2[0],
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(page) {
      var pageSize,
        requestOptions,
        params,
        url,
        response,
        content,
        updatedProducts,
        updatedUsers,
        _content$result,
        idList,
        _yield$getOriginalLis,
        error,
        result,
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            pageSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : paginationSettings.pageSize;
            if (!(!user || !favoriteURL || !originalURL)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
              loading: true,
              error: null
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            params = {};
            if (franchiseId) {
              params = params + "&franchise_id=".concat(franchiseId);
            }
            url = "".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/").concat(favoriteURL, "?page=").concat(page, "&page_size=").concat(pageSize).concat(params);
            _context.n = 2;
            return fetch(url, requestOptions);
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            content = _context.v;
            if (content.error) {
              _context.n = 8;
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
            if (!isProduct) {
              _context.n = 4;
              break;
            }
            updatedProducts = content === null || content === void 0 ? void 0 : content.result.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.product;
            });
            setFavoriteList({
              loading: false,
              favorites: [].concat(_toConsumableArray(favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.favorites), _toConsumableArray(updatedProducts)),
              error: null
            });
            _context.n = 7;
            break;
          case 4:
            if (!isProfessional) {
              _context.n = 5;
              break;
            }
            updatedUsers = content === null || content === void 0 ? void 0 : content.result.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.user;
            });
            setFavoriteList({
              loading: false,
              favorites: [].concat(_toConsumableArray(favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.favorites), _toConsumableArray(updatedUsers)),
              error: null
            });
            _context.n = 7;
            break;
          case 5:
            idList = content === null || content === void 0 || (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.reduce(function (ids, product) {
              return [].concat(_toConsumableArray(ids), [product === null || product === void 0 ? void 0 : product.object_id]);
            }, []);
            _context.n = 6;
            return getOriginalList(idList);
          case 6:
            _yield$getOriginalLis = _context.v;
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
          case 7:
            _context.n = 9;
            break;
          case 8:
            setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
              loading: false,
              error: content.result
            }));
          case 9:
            _context.n = 11;
            break;
          case 10:
            _context.p = 10;
            _t = _context.v;
            setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
              loading: false,
              error: [_t.message]
            }));
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[1, 10]]);
    }));
    return function getFavoriteList(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Function to get business, product, order list from API
   */
  var getOriginalList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(ids) {
      var _orderStatus$options;
      var where, conditions, requestOptions, fetchEndpoint, response;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'id',
              value: ids
            });
            if (franchiseId) {
              conditions.push({
                attribute: 'franchise_id',
                value: franchiseId
              });
            }
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
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            fetchEndpoint = "".concat(ordering.root, "/").concat(originalURL, "?where=").concat(JSON.stringify(where));
            if (location) fetchEndpoint = "".concat(fetchEndpoint, "&location=").concat(location);
            if (propsToFetch) fetchEndpoint = "".concat(fetchEndpoint, "&params=").concat(propsToFetch);
            fetchEndpoint = "".concat(fetchEndpoint, "&type=").concat(orderStatus === null || orderStatus === void 0 || (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type);
            _context2.n = 1;
            return fetch(fetchEndpoint, requestOptions);
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            return _context2.a(2, _context2.v);
        }
      }, _callee2);
    }));
    return function getOriginalList(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleReorder = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(orderId) {
      var _yield$reorder, error, result, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, choosedOrder, _businessId, _businessData, _businessSlug, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (orderId) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            _context3.n = 2;
            return reorder(orderId);
          case 2:
            _yield$reorder = _context3.v;
            error = _yield$reorder.error;
            result = _yield$reorder.result;
            if (error) {
              _context3.n = 3;
              break;
            }
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              result: _objectSpread(_objectSpread({}, result), {}, {
                orderId: orderId
              })
            }));
            _context3.n = 6;
            break;
          case 3:
            choosedOrder = favoriteList.favorites.find(function (_order) {
              return (_order === null || _order === void 0 ? void 0 : _order.id) === orderId;
            });
            _businessId = (_choosedOrder$busines = choosedOrder === null || choosedOrder === void 0 ? void 0 : choosedOrder.business_id) !== null && _choosedOrder$busines !== void 0 ? _choosedOrder$busines : choosedOrder === null || choosedOrder === void 0 || (_choosedOrder$origina = choosedOrder.original) === null || _choosedOrder$origina === void 0 ? void 0 : _choosedOrder$origina.business_id;
            _context3.n = 4;
            return ordering.businesses(_businessId).select(['slug']).get();
          case 4:
            _businessData = _context3.v;
            _context3.n = 5;
            return _businessData === null || _businessData === void 0 || (_businessData$content = _businessData.content) === null || _businessData$content === void 0 || (_businessData$content = _businessData$content.result) === null || _businessData$content === void 0 ? void 0 : _businessData$content.slug;
          case 5:
            _businessSlug = _context3.v;
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
          case 6:
            _context3.n = 8;
            break;
          case 7:
            _context3.p = 7;
            _t2 = _context3.v;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_t2 === null || _t2 === void 0 ? void 0 : _t2.message]
            }));
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 7]]);
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