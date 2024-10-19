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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(nextPage) {
      var parameters, pageFetch, _yield$ordering$order, _yield$ordering$order2, result, error, pageConfig, hash;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
            _context.prev = 3;
            _context.next = 6;
            return ordering.orders().parameters(parameters).asDashboard().get({
              query: pageFetch
            });
          case 6:
            _yield$ordering$order = _context.sent;
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
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            setOrders(_objectSpread(_objectSpread({}, orders), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 14]]);
    }));
    return function getOrders(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to get businesses from SDK
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(nextPage) {
      var where, pageFetch, _yield$ordering$busin, _yield$ordering$busin2, result, error, pageConfig;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
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
            _context2.prev = 3;
            _context2.next = 6;
            return ordering.businesses().select(businessProps).parameters(params).where(where).asDashboard().get({
              query: pageFetch
            });
          case 6:
            _yield$ordering$busin = _context2.sent;
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
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
              loading: false,
              error: _context2.t0.message
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 14]]);
    }));
    return function getBusinesses(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get customers from SDK
   */
  var getCustomers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(nextPage) {
      var where, pageFetch, _yield$ordering$setAc, _yield$ordering$setAc2, result, error, pageConfig;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
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
            _context3.prev = 3;
            _context3.next = 6;
            return ordering.setAccessToken(token).users().where(where).get({
              query: pageFetch
            });
          case 6:
            _yield$ordering$setAc = _context3.sent;
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
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](3);
            setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
              loading: false,
              error: _context3.t0.message
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 14]]);
    }));
    return function getCustomers(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from SDK
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(nextPage) {
      var where, pageFetch, _yield$ordering$setAc3, _yield$ordering$setAc4, result, error, pageConfig;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
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
            _context4.prev = 3;
            _context4.next = 6;
            return ordering.setAccessToken(token).users().select(driverProps).where(where).get({
              query: pageFetch
            });
          case 6:
            _yield$ordering$setAc3 = _context4.sent;
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
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](3);
            setContacts(_objectSpread(_objectSpread({}, contacts), {}, {
              loading: false,
              error: _context4.t0.message
            }));
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[3, 14]]);
    }));
    return function getDrivers(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadMore = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(key) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = key;
            _context5.next = _context5.t0 === 2 ? 3 : _context5.t0 === 3 ? 5 : _context5.t0 === 4 ? 7 : 9;
            break;
          case 3:
            getBusinesses(true);
            return _context5.abrupt("break", 10);
          case 5:
            getCustomers(true);
            return _context5.abrupt("break", 10);
          case 7:
            getDrivers(true);
            return _context5.abrupt("break", 10);
          case 9:
            getOrders(true);
          case 10:
          case "end":
            return _context5.stop();
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
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(message) {
      var orderId, _yield$ordering$setAc5, _yield$ordering$setAc6, result, error;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            orderId = message.order_id;
            _context6.prev = 1;
            _context6.next = 4;
            return ordering.setAccessToken(token).orders(orderId).asDashboard().get();
          case 4:
            _yield$ordering$setAc5 = _context6.sent;
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
            _context6.next = 14;
            break;
          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6["catch"](1);
            return _context6.abrupt("return", null);
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 11]]);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }(), []);
  var handleOrder = (0, _react.useCallback)(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(order) {
      var id, status, driver;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
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
          case 2:
          case "end":
            return _context7.stop();
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