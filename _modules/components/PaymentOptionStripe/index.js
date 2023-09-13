"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionStripe = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage payment option stripe behavior without UI component
 */
var PaymentOptionStripe = function PaymentOptionStripe(props) {
  var _ref, _ref2, _ref3, _ref4;
  var businessId = props.businessId,
    UIComponent = props.UIComponent,
    setCardList = props.setCardList,
    gateway = props.gateway,
    onPaymentChange = props.onPaymentChange,
    paySelected = props.paySelected,
    newCardAdded = props.newCardAdded;
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    user = _useSession2$.user;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  /**
   * Contains and object to save cards, handle loading and error
   */
  var _useState = (0, _react.useState)({
      cards: [],
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    cardsList = _useState2[0],
    setCardsList = _useState2[1];
  /**
   * save stripe public key
   */
  var _useState3 = (0, _react.useState)(props.publicKey),
    _useState4 = _slicedToArray(_useState3, 2),
    publicKey = _useState4[0],
    setPublicKey = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    cardSelected = _useState6[0],
    setCardSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cardDefault = _useState8[0],
    setCardDefault = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    defaultCardSetActionStatus = _useState10[0],
    setDefaultCardSetActionStatus = _useState10[1];
  var requestState = {};
  var paymethodsWithoutSaveCards = ['credomatic'];

  /**
   * method to get cards from API
   */
  var getCards = function getCards() {
    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var source, _yield$ordering$setAc, result, defaultCard;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!paymethodsWithoutSaveCards.includes(gateway)) {
              _context.next = 4;
              break;
            }
            setCardsList({
              cards: [],
              loading: false,
              error: null
            });
            setCardList({
              cards: [],
              loading: false,
              error: null
            });
            return _context.abrupt("return");
          case 4:
            setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
              loading: true
            }));
            _context.prev = 5;
            source = {};
            requestState.paymentCards = source;
            // The order of paymentCards params is businessId, userId. This sdk needs to be improved in the future,
            _context.next = 10;
            return ordering.setAccessToken(token).paymentCards(businessId, user.id).get({
              cancelToken: source
            });
          case 10:
            _yield$ordering$setAc = _context.sent;
            result = _yield$ordering$setAc.content.result;
            defaultCard = result === null || result === void 0 ? void 0 : result.find(function (card) {
              return card.default;
            });
            if (defaultCard) {
              setCardDefault({
                id: defaultCard.id,
                type: 'card',
                card: {
                  brand: defaultCard.brand,
                  last4: defaultCard.last4,
                  zipcode: defaultCard === null || defaultCard === void 0 ? void 0 : defaultCard.zipcode
                }
              });
            }
            setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
              loading: false,
              cards: result
            }));
            setCardList && setCardList(_objectSpread(_objectSpread({}, cardsList), {}, {
              loading: false,
              cards: result
            }));
            _context.next = 22;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](5);
            setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
              loading: false,
              error: _context.t0
            }));
            setCardList && setCardList(_objectSpread(_objectSpread({}, cardsList), {}, {
              loading: false,
              error: _context.t0
            }));
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 18]]);
    }))).apply(this, arguments);
  };

  /**
   * method to get cards from API
   */
  var deleteCard = function deleteCard(_x) {
    return (_ref2 = _ref2 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(card) {
      var _yield$ordering$payme, error;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!paymethodsWithoutSaveCards.includes(gateway)) {
              _context2.next = 6;
              break;
            }
            setCardsList({
              cards: [],
              loading: false,
              error: null
            });
            setCardSelected(null);
            setCardList({
              cards: [],
              loading: false,
              error: null
            });
            return _context2.abrupt("return");
          case 6:
            _context2.next = 8;
            return ordering.paymentCards(-1, user.id, card.id).delete();
          case 8:
            _yield$ordering$payme = _context2.sent;
            error = _yield$ordering$payme.content.error;
            if (!error) {
              cardsList.cards = cardsList.cards.filter(function (_card) {
                return _card.id !== card.id;
              });
              setCardsList(_objectSpread({}, cardsList));
              if ((cardSelected === null || cardSelected === void 0 ? void 0 : cardSelected.id) === (card === null || card === void 0 ? void 0 : card.id)) {
                setCardSelected(null);
                onPaymentChange && onPaymentChange(null);
              }
              getCards();
            }
            _context2.next = 16;
            break;
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0.message);
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    }))).apply(this, arguments);
  };
  /**
   * method to set card as default
   */
  var setDefaultCard = function setDefaultCard(_x2) {
    return (_ref3 = _ref3 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(card) {
      var requestOptions, functionFetch, response, content;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!paymethodsWithoutSaveCards.includes(gateway)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            setDefaultCardSetActionStatus(_objectSpread(_objectSpread({}, defaultCardSetActionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                business_id: businessId,
                user_id: user.id,
                card_id: card.id
              })
            };
            functionFetch = "".concat(ordering.root, "/payments/stripe/cards/default");
            _context3.next = 8;
            return fetch(functionFetch, requestOptions);
          case 8:
            response = _context3.sent;
            _context3.next = 11;
            return response.json();
          case 11:
            content = _context3.sent;
            if (!content.error) {
              setCardDefault({
                id: card.id,
                type: 'card',
                card: {
                  brand: card.brand,
                  last4: card.last4,
                  zipcode: card.zipcode
                }
              });
              setDefaultCardSetActionStatus({
                loading: false,
                error: null
              });
            } else {
              setDefaultCardSetActionStatus({
                loading: false,
                error: content.result
              });
            }
            _context3.next = 18;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](2);
            setDefaultCardSetActionStatus({
              loading: false,
              error: _context3.t0
            });
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 15]]);
    }))).apply(this, arguments);
  };
  /**
   * Method to get stripe credentials from API
   */
  var getCredentials = function getCredentials() {
    return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _yield$ordering$setAc2, result;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!paymethodsWithoutSaveCards.includes(gateway)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.prev = 2;
            _context4.next = 5;
            return ordering.setAccessToken(token).paymentCards().getCredentials();
          case 5:
            _yield$ordering$setAc2 = _context4.sent;
            result = _yield$ordering$setAc2.content.result;
            setPublicKey(result.publishable);
            _context4.next = 13;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](2);
            console.error(_context4.t0.message);
          case 13:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 10]]);
    }))).apply(this, arguments);
  };
  var handleCardClick = function handleCardClick(card) {
    if (paymethodsWithoutSaveCards.includes(gateway)) {
      setCardSelected(card);
    } else {
      setCardSelected({
        id: card.id,
        type: 'card',
        card: {
          brand: card.brand,
          last4: card.last4,
          zipcode: card.zipcode
        }
      });
    }
  };
  var handleNewCard = function handleNewCard(card) {
    cardsList.cards.push(card);
    setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
      card: card
    }));
    if (paymethodsWithoutSaveCards.includes(gateway)) {
      setCardList(_objectSpread(_objectSpread({}, cardsList), {}, {
        card: card
      }));
    }
    handleCardClick(card);
  };
  (0, _react.useEffect)(function () {
    if (token) {
      getCards();
      if (!props.publicKey) {
        getCredentials();
      }
    }
    return function () {
      if (requestState.paymentCards && requestState.paymentCards.cancel) {
        requestState.paymentCards.cancel();
      }
    };
  }, [token, businessId, paySelected === null || paySelected === void 0 ? void 0 : paySelected.data]);
  (0, _react.useEffect)(function () {
    if (newCardAdded) {
      getCards();
    }
  }, [JSON.stringify(newCardAdded)]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cardSelected: cardSelected,
    cardDefault: cardDefault,
    cardsList: cardsList,
    setCardsList: setCardsList,
    handleCardClick: handleCardClick,
    publicKey: publicKey,
    handleNewCard: handleNewCard,
    deleteCard: deleteCard,
    setDefaultCard: setDefaultCard,
    defaultCardSetActionStatus: defaultCardSetActionStatus,
    paymethodsWithoutSaveCards: paymethodsWithoutSaveCards
  })));
};
exports.PaymentOptionStripe = PaymentOptionStripe;
PaymentOptionStripe.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: _propTypes.default.number.isRequired,
  /**
   * User id to pass in endpoint to get cards from API,
   */
  userId: _propTypes.default.number,
  /**
   * Components types before payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptionStripe.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};