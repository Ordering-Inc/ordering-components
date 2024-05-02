"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _EventContext = require("../../../contexts/EventContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _ToastContext = require("../../../contexts/ToastContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetails = exports.OrderDetails = function OrderDetails(props) {
  var orderId = props.orderId,
    propsToFetch = props.propsToFetch,
    asDashboard = props.asDashboard,
    hashKey = props.hashKey,
    userCustomerId = props.userCustomerId,
    isDisableLoadMessages = props.isDisableLoadMessages,
    drivers = props.drivers,
    UIComponent = props.UIComponent;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)({
      order: null,
      loading: !props.order,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderState = _useState2[0],
    setOrderState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      status: null,
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    messageErrors = _useState4[0],
    setMessageErrors = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    actionStatus = _useState6[0],
    setActionStatus = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      error: null,
      messages: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    messages = _useState8[0],
    setMessages = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    messagesReadList = _useState10[0],
    setMessagesReadList = _useState10[1];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = props.accessToken || token;

  /**
   * Method to format a price number
   * @param {Number} price
   */
  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };

  /**
   * Method to Load message for first time
   */
  var loadMessages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken)
              }
            });
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setMessages({
                messages: result,
                loading: false,
                error: null
              });
            } else {
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: result
              }));
            }
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context.t0.Messages]
            }));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function loadMessages() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to send a message
   * @param {string} spot
   */
  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(spot) {
      var _yield$fetch, status;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: true
            }));
            _context2.next = 4;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
              method: 'post',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                can_see: '0,2,3',
                comment: "I am on the parking number: ".concat(spot),
                order_id: orderId,
                type: 2
              })
            });
          case 4:
            _yield$fetch = _context2.sent;
            status = _yield$fetch.status;
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              status: status
            }));
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function sendMessage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref3) {
    var spot = _ref3.spot;
    sendMessage(spot);
  };

  /**
   * Method to get order from API
   */
  var getOrder = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var options, functionFetch, _yield$functionFetch$, result, order;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            options = {};
            if (hashKey) {
              options.headers = {
                'X-uuid-access-X': hashKey
              };
            }
            if (userCustomerId) {
              options.query = {
                mode: 'dashboard'
              };
            }
            _context3.prev = 3;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: true
            }));
            if (propsToFetch) {
              functionFetch = asDashboard ? ordering.setAccessToken(token).orders(orderId).asDashboard().select(propsToFetch) : ordering.setAccessToken(token).orders(orderId).select(propsToFetch);
            } else {
              functionFetch = asDashboard ? ordering.setAccessToken(token).orders(orderId).asDashboard() : ordering.setAccessToken(token).orders(orderId);
            }
            _context3.next = 8;
            return functionFetch.get();
          case 8:
            _yield$functionFetch$ = _context3.sent;
            result = _yield$functionFetch$.content.result;
            order = Array.isArray(result) ? null : result;
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              order: order
            }));
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](3);
            setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 14]]);
    }));
    return function getOrder() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(order) {
      var response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context4.next = 4;
            return fetch("".concat(ordering.root, "/orders/").concat(order === null || order === void 0 ? void 0 : order.id), {
              method: 'PUT',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                status: order.newStatus
              })
            });
          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return response.json();
          case 7:
            content = _context4.sent;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            _context4.next = 14;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return function handleUpdateOrderStatus(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var readMessages = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _messages$messages, _messages$messages2;
      var messageId, response, _yield$response$json2, result;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            messageId = messages === null || messages === void 0 || (_messages$messages = messages.messages[(messages === null || messages === void 0 || (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
            _context5.prev = 1;
            _context5.next = 4;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read"), {
              method: 'GET',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              }
            });
          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context5.sent;
            result = _yield$response$json2.result;
            setMessagesReadList(result);
            _context5.next = 15;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0.message);
          case 15:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 12]]);
    }));
    return function readMessages() {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleRefundPaymentsStripe = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _orderState$order, _orderState$order2, _orderState$order3, requestOption, response, content;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOption = {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                order_id: (_orderState$order = orderState.order) === null || _orderState$order === void 0 ? void 0 : _orderState$order.id,
                business_id: (_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.business_id,
                gateway: (_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 || (_orderState$order3 = _orderState$order3.paymethod) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.gateway
              })
            };
            _context6.next = 6;
            return fetch("".concat(ordering.root, "/payments/stripe/refund"), requestOption);
          case 6:
            response = _context6.sent;
            _context6.next = 9;
            return response.json();
          case 9:
            content = _context6.sent;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                order: _objectSpread(_objectSpread({}, orderState.order), {}, {
                  refund_data: content.result
                })
              }));
              showToast(_ToastContext.ToastType.Success, t('ORDER_REFUNDED', 'Order refunded'));
            }
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }));
    return function handleRefundPaymentsStripe() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleOrderRefund = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
      var _orderState$order4, requestOption, response, content, _orderState$order6, refundData, _orderState$order5, stripeEvent, updatedPaymentEvents;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOption = {
              method: 'POST',
              headers: {
                Authorization: "Bearer ".concat(token),
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            };
            _context7.next = 6;
            return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/refund"), requestOption);
          case 6:
            response = _context7.sent;
            _context7.next = 9;
            return response.json();
          case 9:
            content = _context7.sent;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              refundData = _toConsumableArray(content.result);
              if (data !== null && data !== void 0 && data.order_payment_event_id) {
                stripeEvent = orderState === null || orderState === void 0 || (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 || (_orderState$order5 = _orderState$order5.payment_events) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.find(function (event) {
                  return (event === null || event === void 0 ? void 0 : event.id) === data.order_payment_event_id;
                });
                if (stripeEvent) {
                  refundData.map(function (item) {
                    if ((item === null || item === void 0 ? void 0 : item.order_payment_event_id) === (data === null || data === void 0 ? void 0 : data.order_payment_event_id)) {
                      item.paymethod = stripeEvent === null || stripeEvent === void 0 ? void 0 : stripeEvent.paymethod;
                    }
                    return item;
                  });
                }
              }
              updatedPaymentEvents = [].concat(_toConsumableArray((_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.payment_events), _toConsumableArray(refundData));
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                order: _objectSpread(_objectSpread({}, orderState.order), {}, {
                  payment_events: updatedPaymentEvents
                })
              }));
              showToast(_ToastContext.ToastType.Success, t('ORDER_REFUNDED', 'Order refunded'));
            }
            _context7.next = 17;
            break;
          case 14:
            _context7.prev = 14;
            _context7.t0 = _context7["catch"](0);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context7.t0.message]
            }));
          case 17:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 14]]);
    }));
    return function handleOrderRefund(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (props.order) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: props.order
      }));
    } else {
      getOrder();
    }
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (orderState.loading || loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderState$order7;
      if ((order === null || order === void 0 ? void 0 : order.id) !== (orderState === null || orderState === void 0 || (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.id)) return;
      delete order.total;
      delete order.subtotal;
      if (!(order !== null && order !== void 0 && order.driver) && order !== null && order !== void 0 && order.driver_id) {
        var updatedDriver = drivers.find(function (driver) {
          return driver.id === order.driver_id;
        });
        if (updatedDriver) {
          order.driver = _objectSpread({}, updatedDriver);
        }
      }
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
    };
    socket.on('update_order', handleUpdateOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
    };
  }, [orderState.order, socket, loading, drivers]);
  (0, _react.useEffect)(function () {
    var handleCustomerReviewed = function handleCustomerReviewed(review) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: _objectSpread(_objectSpread({}, orderState.order), {}, {
          user_review: review
        })
      }));
    };
    events.on('customer_reviewed', handleCustomerReviewed);
    return function () {
      events.off('customer_reviewed', handleCustomerReviewed);
    };
  }, [orderState]);
  (0, _react.useEffect)(function () {
    if (!isDisableLoadMessages) {
      loadMessages();
    }
  }, [orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    messageErrors: messageErrors,
    actionStatus: actionStatus,
    formatPrice: formatPrice,
    handlerSubmit: handlerSubmitSpotNumber,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    messages: messages,
    setMessages: setMessages,
    messagesReadList: messagesReadList,
    readMessages: readMessages,
    handleRefundPaymentsStripe: handleRefundPaymentsStripe,
    handleOrderRefund: handleOrderRefund
  })));
};
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,
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
OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};