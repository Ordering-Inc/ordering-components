"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _CustomerContext = require("../../contexts/CustomerContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to control a address list
 * @param {object} props Props of AddressList component
 */
var AddressList = exports.AddressList = function AddressList(props) {
  var UIComponent = props.UIComponent,
    changeOrderAddressWithDefault = props.changeOrderAddressWithDefault,
    handleClickSetDefault = props.handleClickSetDefault,
    handleClickDelete = props.handleClickDelete,
    userCustomerSetup = props.userCustomerSetup;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var socket = (0, _WebsocketContext.useWebsocket)();
  var userId = props.userId || (user === null || user === void 0 ? void 0 : user.id);
  var accessToken = props.accessToken || token;
  var _useState = (0, _react.useState)({
      loading: true,
      error: null,
      addresses: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    addressList = _useState2[0],
    setAddressList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    actionStatus = _useState4[0],
    setActionStatus = _useState4[1];
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    options = _useOrder2[0].options,
    changeAddress = _useOrder2[1].changeAddress;
  var requestsState = {};

  /**
   * Function to load addresses from API
   */
  var loadAddresses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var source, _yield$ordering$setAc, content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
              loading: true
            }));
            source = {};
            requestsState.list = source;
            _context.next = 6;
            return ordering.setAccessToken(accessToken).users(userId).addresses().get({
              cancelToken: source
            });
          case 6:
            _yield$ordering$setAc = _context.sent;
            content = _yield$ordering$setAc.content;
            setAddressList({
              loading: false,
              error: content.error ? content.result : null,
              addresses: content.error ? [] : Array.isArray(content.result) ? content.result : []
            });
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            if (_context.t0.constructor.name !== 'Cancel') {
              setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));
            }
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function loadAddresses() {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    loadAddresses();
    return function () {
      if (typeof requestsState.list.cancel === 'function') {
        requestsState.list.cancel();
      }
    };
  }, [userId]);

  /**
   * Function to make an address as default address
   * @param {object} address Address to make as default
   */
  var handleSetDefault = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address, userCustomerSetup, sameAddress, dontSetUserCustomer) {
      var _yield$ordering$setAc2, content, _content$result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (userCustomerSetup && !dontSetUserCustomer) {
              setUserCustomer(_objectSpread(_objectSpread({}, userCustomerSetup), {}, {
                address: address === null || address === void 0 ? void 0 : address.address,
                address_notes: address === null || address === void 0 ? void 0 : address.address_notes,
                internal_number: address === null || address === void 0 ? void 0 : address.internal_number,
                zipcode: address === null || address === void 0 ? void 0 : address.zipcode
              }), true);
            }
            if (!handleClickSetDefault) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", handleClickSetDefault(address));
          case 3:
            if (!sameAddress) {
              _context2.next = 6;
              break;
            }
            changeAddress(address === null || address === void 0 ? void 0 : address.id, {
              country_code: address === null || address === void 0 ? void 0 : address.country_code,
              type: options === null || options === void 0 ? void 0 : options.type
            });
            return _context2.abrupt("return");
          case 6:
            _context2.prev = 6;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context2.next = 10;
            return ordering.setAccessToken(accessToken).users(userId).addresses(address.id).save({
              default: true
            });
          case 10:
            _yield$ordering$setAc2 = _context2.sent;
            content = _yield$ordering$setAc2.content;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error && content.result.default) {
              addressList.addresses.map(function (_address) {
                _address.default = _address.id === address.id;
                return _address;
              });
              if (changeOrderAddressWithDefault) {
                changeAddress(content.result.id, {
                  country_code: (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.country_code,
                  type: options === null || options === void 0 ? void 0 : options.type
                });
              }
              setAddressList(_objectSpread({}, addressList));
            }
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](6);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context2.t0.message]
            }));
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[6, 16]]);
    }));
    return function handleSetDefault(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Function to delete an address
   * @param {object} address Address to delete
   */
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(address) {
      var _yield$ordering$users, content, addresses;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!handleClickDelete) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", handleClickDelete(address));
          case 2:
            _context3.prev = 2;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context3.next = 6;
            return ordering.users(userId).addresses(address.id).delete({
              accessToken: accessToken
            });
          case 6:
            _yield$ordering$users = _context3.sent;
            content = _yield$ordering$users.content;
            setActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              addresses = addressList.addresses.filter(function (_address) {
                return _address.id !== address.id;
              });
              setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
                addresses: addresses
              }));
            }
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_context3.t0.message]
            }));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 12]]);
    }));
    return function handleDelete(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleAddressRegister = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(address) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
              loading: false,
              addresses: [].concat(_toConsumableArray(addressList === null || addressList === void 0 ? void 0 : addressList.addresses), [address]),
              addedBySocket: true
            }));
            _context4.next = 4;
            return handleSetDefault(address, userCustomerSetup);
          case 4:
            _context4.next = 9;
            break;
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
              loading: false,
              error: [_context4.t0.message]
            }));
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 6]]);
    }));
    return function handleAddressRegister(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!(userCustomerSetup !== null && userCustomerSetup !== void 0 && userCustomerSetup.id) || !(socket !== null && socket !== void 0 && socket.socket)) return;
    var room = {
      room: 'addresses',
      project: ordering.project,
      role: 'manager',
      user_id: userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id
    };
    socket.socket.on('addresses_register', handleAddressRegister);
    socket.socket.on('disconnect', function () {
      socket.join(room);
    });
    socket.join(room);
    return function () {
      socket.leave(room);
      socket.off('addresses_register', handleAddressRegister);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    addressList: addressList,
    setAddressList: setAddressList,
    actionStatus: actionStatus,
    handleSetDefault: handleSetDefault,
    handleDelete: handleDelete,
    loadAddresses: loadAddresses
  })));
};
AddressList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Behavior when click on address
   * @param {object} address Addres that was clicked
   */
  handleClickAddress: _propTypes.default.func,
  /**
   * Custom set default address
   * @param {object} address Address to make to as default
   */
  handleClickSetDefault: _propTypes.default.func,
  /**
   * Custom delete address
   * @param {object} address Address to make to as default
   */
  handleClickDelete: _propTypes.default.func,
  /**
   * User id to get address from this user
   * If you don't provide one it is used by the current session by default
   */
  userId: _propTypes.default.number,
  /**
   * Access token to get addresses
   * If you don't provide one it is used by the current session by default
   */
  accessToken: _propTypes.default.string,
  /**
   * Components types before addresses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after addresses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressList.defaultProps = {
  changeOrderAddressWithDefault: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};