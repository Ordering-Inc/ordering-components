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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FavoriteList = exports.FavoriteList = function FavoriteList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings,
    favoriteURL = props.favoriteURL,
    originalURL = props.originalURL,
    location = props.location,
    propsToFetch = props.propsToFetch,
    isProduct = props.isProduct,
    isProfessional = props.isProfessional;
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page) {
      var pageSize,
        requestOptions,
        fetchEndpoint,
        response,
        content,
        updatedProducts,
        updatedUsers,
        _content$result,
        idList,
        _yield$getOriginalLis,
        error,
        result,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
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
              _context.next = 34;
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
              _context.next = 20;
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
            _context.next = 32;
            break;
          case 20:
            if (!isProfessional) {
              _context.next = 25;
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
            _context.next = 32;
            break;
          case 25:
            idList = content === null || content === void 0 || (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.reduce(function (ids, product) {
              return [].concat(_toConsumableArray(ids), [product === null || product === void 0 ? void 0 : product.object_id]);
            }, []);
            _context.next = 28;
            return getOriginalList(idList);
          case 28:
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
          case 32:
            _context.next = 35;
            break;
          case 34:
            setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
              loading: false,
              error: content.result
            }));
          case 35:
            _context.next = 40;
            break;
          case 37:
            _context.prev = 37;
            _context.t0 = _context["catch"](3);
            setFavoriteList(_objectSpread(_objectSpread({}, favoriteList), {}, {
              loading: false,
              error: [_context.t0.message]
            }));
          case 40:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 37]]);
    }));
    return function getFavoriteList(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Function to get business, product, order list from API
   */
  var getOriginalList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ids) {
      var _orderStatus$options;
      var where, conditions, requestOptions, fetchEndpoint, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
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
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            fetchEndpoint = "".concat(ordering.root, "/").concat(originalURL, "?where=").concat(JSON.stringify(where));
            if (location) fetchEndpoint = "".concat(fetchEndpoint, "&location=").concat(location);
            if (propsToFetch) fetchEndpoint = "".concat(fetchEndpoint, "&params=").concat(propsToFetch);
            fetchEndpoint = "".concat(fetchEndpoint, "&type=").concat(orderStatus === null || orderStatus === void 0 || (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type);
            _context2.next = 11;
            return fetch(fetchEndpoint, requestOptions);
          case 11:
            response = _context2.sent;
            _context2.next = 14;
            return response.json();
          case 14:
            return _context2.abrupt("return", _context2.sent);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getOriginalList(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleReorder = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(orderId) {
      var _yield$reorder, error, result, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, choosedOrder, _businessId, _businessData, _businessSlug;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
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
            _businessId = (_choosedOrder$busines = choosedOrder === null || choosedOrder === void 0 ? void 0 : choosedOrder.business_id) !== null && _choosedOrder$busines !== void 0 ? _choosedOrder$busines : choosedOrder === null || choosedOrder === void 0 || (_choosedOrder$origina = choosedOrder.original) === null || _choosedOrder$origina === void 0 ? void 0 : _choosedOrder$origina.business_id;
            _context3.next = 17;
            return ordering.businesses(_businessId).select(['slug']).get();
          case 17:
            _businessData = _context3.sent;
            _context3.next = 20;
            return _businessData === null || _businessData === void 0 || (_businessData$content = _businessData.content) === null || _businessData$content === void 0 || (_businessData$content = _businessData$content.result) === null || _businessData$content === void 0 ? void 0 : _businessData$content.slug;
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