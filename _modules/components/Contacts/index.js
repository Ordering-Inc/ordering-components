"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contacts = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
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
var Contacts = exports.Contacts = function Contacts(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    firstFetch = props.firstFetch,
    orderProps = props.orderProps,
    businessProps = props.businessProps,
    customerProps = props.customerProps,
    driverProps = props.driverProps,
    businessConditions = props.businessConditions,
    customerConditions = props.customerConditions,
    driverConditions = props.driverConditions,
    sortParams = props.sortParams,
    paginationSettings = props.paginationSettings,
    conditionsConector = props.conditionsConector;
  var params = {
    orderBy: (sortParams.direction === 'desc' ? '-' : '') + sortParams.param
  };
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    user = _useSession2$.user;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useState = (0, _react.useState)(sortParams),
    _useState2 = _slicedToArray(_useState, 2),
    sortBy = _useState2[0],
    setSortBy = _useState2[1];
  var _useState3 = (0, _react.useState)({
      data: [],
      loading: true,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    orders = _useState4[0],
    setOrders = _useState4[1];
  var _useState5 = (0, _react.useState)({
      data: [],
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    contacts = _useState6[0],
    setContacts = _useState6[1];
  var _useState7 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.page && paginationSettings.page >= 1 ? paginationSettings.page - 1 : 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 6
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    pagination = _useState8[0],
    setPagination = _useState8[1];
  var getOrders = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(nextPage) {
      var parameters, pageFetch, _yield$ordering$order, _yield$ordering$order2, result, error, pageConfig, hash, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setOrders({
              data: nextPage ? orders.data : [],
              loading: true,
              error: null
            });
            parameters = {
              orderBy: (sortBy.direction === 'desc' ? '-' : '') + sortBy.param
            };
            pageFetch = {
              page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
              page_size: pagination.pageSize || paginationSettings.pageSize
            };
            _context.p = 1;
            _context.n = 2;
            return ordering.orders().parameters(parameters).asDashboard().get({
              query: pageFetch
            });
          case 2:
            _yield$ordering$order = _context.v;
            _yield$ordering$order2 = _yield$ordering$order.content;
            result = _yield$ordering$order2.result;
            error = _yield$ordering$order2.error;
            pageConfig = _yield$ordering$order2.pagination;
            if (!error) {
              hash = {};
              setOrders(_objectSpread(_objectSpread({}, orders), {}, {
                data: nextPage ? orders.data.concat(result).filter(function (order) {
                  return hash[order === null || order === void 0 ? void 0 : order.id] ? false : hash[order === null || order === void 0 ? void 0 : order.id] = true;
                }) : result,
                loading: false
              }));
              setPagination({
                currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
              });
            } else {
              setOrders(_objectSpread(_objectSpread({}, orders), {}, {
                loading: false,
                error: result[0]
              }));
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setOrders(_objectSpread(_objectSpread({}, orders), {}, {
              loading: false,
              error: [_t.message]
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function getOrders(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses from SDK
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(nextPage) {
      var where, pageFetch, _yield$ordering$busin, _yield$ordering$busin2, result, error, pageConfig, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setContacts({
              data: nextPage ? contacts.data : [],
              loading: true,
              error: null
            });
            where = {
              conditions: businessConditions,
              conector: conditionsConector
            };
            pageFetch = {
              page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
              page_size: pagination.pageSize || paginationSettings.pageSize
            };
            _context2.p = 1;
            _context2.n = 2;
            return ordering.businesses().select(businessProps).parameters(params).where(where).asDashboard().get({
              query: pageFetch
            });
          case 2:
            _yield$ordering$busin = _context2.v;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            pageConfig = _yield$ordering$busin2.pagination;
            if (!error) {
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                data: nextPage ? contacts.data.concat(result) : result,
                loading: false
              }));
              setPagination({
                currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
              });
            } else {
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: result[0]
              }));
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
              loading: false,
              error: _t2.message
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function getBusinesses(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get customers from SDK
   */
  var getCustomers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(nextPage) {
      var where, pageFetch, _yield$ordering$setAc, _yield$ordering$setAc2, result, error, pageConfig, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            setContacts({
              data: nextPage ? contacts.data : [],
              loading: true,
              error: null
            });
            where = {
              conditions: customerConditions,
              conector: conditionsConector
            };
            pageFetch = {
              page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
              page_size: pagination.pageSize || paginationSettings.pageSize
            };
            _context3.p = 1;
            _context3.n = 2;
            return ordering.setAccessToken(token).users().where(where).get({
              query: pageFetch
            });
          case 2:
            _yield$ordering$setAc = _context3.v;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            result = _yield$ordering$setAc2.result;
            error = _yield$ordering$setAc2.error;
            pageConfig = _yield$ordering$setAc2.pagination;
            if (!error) {
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                data: nextPage ? contacts.data.concat(result) : result,
                loading: false
              }));
              setPagination({
                currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
              });
            } else {
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: result[0]
              }));
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
              loading: false,
              error: _t3.message
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function getCustomers(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from SDK
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(nextPage) {
      var where, pageFetch, _yield$ordering$setAc3, _yield$ordering$setAc4, result, error, pageConfig, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setContacts({
              data: nextPage ? contacts.data : [],
              loading: true,
              error: null
            });
            where = {
              conditions: driverConditions,
              conector: conditionsConector
            };
            pageFetch = {
              page: nextPage ? pagination.currentPage + 1 : paginationSettings.page,
              page_size: pagination.pageSize || paginationSettings.pageSize
            };
            _context4.p = 1;
            _context4.n = 2;
            return ordering.setAccessToken(token).users().select(driverProps).where(where).get({
              query: pageFetch
            });
          case 2:
            _yield$ordering$setAc3 = _context4.v;
            _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
            result = _yield$ordering$setAc4.result;
            error = _yield$ordering$setAc4.error;
            pageConfig = _yield$ordering$setAc4.pagination;
            if (!error) {
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                data: nextPage ? contacts.data.concat(result) : result,
                loading: false
              }));
              setPagination({
                currentPage: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.current_page,
                pageSize: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.page_size,
                totalPages: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total_pages,
                total: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.total,
                from: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.from,
                to: pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.to
              });
            } else {
              setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
                loading: false,
                error: result[0]
              }));
            }
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
              loading: false,
              error: _t4.message
            }));
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function getDrivers(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadMore = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(key) {
      var _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _t5 = key;
            _context5.n = _t5 === 2 ? 1 : _t5 === 3 ? 2 : _t5 === 4 ? 3 : 4;
            break;
          case 1:
            getBusinesses(true);
            return _context5.a(3, 5);
          case 2:
            getCustomers(true);
            return _context5.a(3, 5);
          case 3:
            getDrivers(true);
            return _context5.a(3, 5);
          case 4:
            getOrders(true);
          case 5:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function loadMore(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    switch (firstFetch) {
      case 'businesses':
        getBusinesses();
        break;
      case 'customers':
        getCustomers();
        break;
      case 'drivers':
        getDrivers();
        break;
      default:
        getOrders();
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!orders.loading) {
      getOrders();
    }
  }, [sortBy]);
  (0, _react.useEffect)(function () {
    if (!token || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var messagesOrdersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'messages_orders' : "messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    var ordersRoom = (user === null || user === void 0 ? void 0 : user.level) === 0 ? 'orders' : "orders_".concat(user === null || user === void 0 ? void 0 : user.id);
    socket.socket.on('connect', function () {
      socket.join(messagesOrdersRoom);
      socket.join(ordersRoom);
    });
    socket.join(messagesOrdersRoom);
    socket.join(ordersRoom);
    return function () {
      socket.leave(messagesOrdersRoom);
      socket.leave(ordersRoom);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, user]);
  var handleMessage = (0, _react.useCallback)(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(message) {
      var orderId, _yield$ordering$setAc5, _yield$ordering$setAc6, result, error, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            orderId = message.order_id;
            _context6.p = 1;
            _context6.n = 2;
            return ordering.setAccessToken(token).orders(orderId).asDashboard().get();
          case 2:
            _yield$ordering$setAc5 = _context6.v;
            _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
            result = _yield$ordering$setAc6.result;
            error = _yield$ordering$setAc6.error;
            if (!error) {
              setOrders(function (prevOrders) {
                var data = prevOrders.data;
                var order = data.find(function (order, index) {
                  if (order.id === parseInt(orderId)) {
                    data.splice(index, 1);
                    data.unshift(result);
                    return true;
                  }
                  return false;
                });
                if (!order) {
                  data.unshift(result);
                }
                return _objectSpread(_objectSpread({}, prevOrders), {}, {
                  data: data
                });
              });
            }
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            return _context6.a(2, null);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }(), []);
  var handleOrder = (0, _react.useCallback)(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(order) {
      var id, status, driver;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            id = order.id, status = order.status, driver = order.driver;
            setOrders(function (prevOrders) {
              var data = prevOrders.data;
              var newOrder = data.find(function (_order, index) {
                if (_order.id === id) {
                  var _order$driver;
                  if (_order.status !== status) {
                    delete order.total;
                    delete order.subtotal;
                    Object.assign(_order, order);
                  } else if ((_order === null || _order === void 0 || (_order$driver = _order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) !== (driver === null || driver === void 0 ? void 0 : driver.id) && (user === null || user === void 0 ? void 0 : user.level) === 4) {
                    data.splice(index, 1);
                  }
                  return true;
                }
                return false;
              });
              if (!newOrder) {
                data.unshift(order);
              }
              return _objectSpread(_objectSpread({}, prevOrders), {}, {
                data: data
              });
            });
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }(), []);
  (0, _react.useEffect)(function () {
    socket.on('message', handleMessage);
    socket.on('orders_register', handleOrder);
    socket.on('update_order', handleOrder);
    return function () {
      socket.off('message', handleMessage);
      socket.off('update_order', handleOrder);
    };
  }, [socket, user]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orders: orders,
    setOrders: setOrders,
    setSortBy: setSortBy,
    contacts: contacts,
    pagination: pagination,
    getBusinesses: getBusinesses,
    getCustomers: getCustomers,
    getDrivers: getDrivers,
    loadMore: loadMore,
    getOrders: getOrders
  })));
};
Contacts.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Initial page configuration
   */
  paginationSettings: _propTypes.default.object,
  /**
   * First data fetched
   */
  firstFetch: _propTypes.default.string,
  /**
   * Array of business props to fetch
   */
  businessProps: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Array of customer props to fetch
   */
  customerProps: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Array of driver props to fetch
   */
  driverProps: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Object parameters to sort the fetch
   */
  sortParams: _propTypes.default.object,
  /**
   * Array of conditions to fetch businesses
   */
  businessConditions: _propTypes.default.arrayOf(_propTypes.object),
  /**
   * Array of conditions to fetch customers
   */
  customerConditions: _propTypes.default.arrayOf(_propTypes.object),
  /**
   * Array of conditions to fetch drivers
   */
  driverConditions: _propTypes.default.arrayOf(_propTypes.object),
  /**
   * String that indicates the conector type of the conditions to fetch
   */
  conditionsConector: _propTypes.default.string
};
Contacts.defaultProps = {
  paginationSettings: {
    page: 1,
    pageSize: 6,
    controlType: 'infinity'
  },
  firstFetch: 'businesses',
  orderProps: ['id', 'business', 'unread_count', 'delivery_datetime_utc', 'status'],
  businessProps: ['id', 'name', 'logo'],
  customerProps: ['id', 'name', 'lastname', 'photo', 'assigned_orders_count', 'qualification',
  // do not select qualification
  'level'],
  driverProps: ['id', 'name', 'lastname', 'photo', 'assigned_orders_count', 'level'],
  sortParams: {
    param: 'name',
    direction: 'asc'
  },
  businessConditions: [{
    attribute: 'enabled',
    value: {
      condition: '=',
      value: 'true'
    }
  }],
  customerConditions: [{
    attribute: 'level',
    value: [3]
  }],
  driverConditions: [{
    attribute: 'level',
    value: [4]
  }],
  conditionsConector: 'AND'
};