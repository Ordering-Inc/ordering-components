"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _CustomerContext = require("../../contexts/CustomerContext");
var _ValidationsFieldsContext = require("../../contexts/ValidationsFieldsContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _ToastContext = require("../../contexts/ToastContext");
var _excluded = ["photo"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
var CONDITIONAL_CODES = ['1787'];

/**
 * Component to manage user form details behavior without UI component
 */
var UserFormDetails = exports.UserFormDetails = function UserFormDetails(props) {
  var UIComponent = props.UIComponent,
    useSessionUser = props.useSessionUser,
    refreshSessionUser = props.refreshSessionUser,
    useDefualtSessionManager = props.useDefualtSessionManager,
    userId = props.userId,
    user = props.user,
    useValidationFields = props.useValidationFields,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    handleSuccessUpdate = props.handleSuccessUpdate,
    isCustomerMode = props.isCustomerMode,
    isSuccess = props.isSuccess,
    onClose = props.onClose,
    dontToggleEditMode = props.dontToggleEditMode,
    isOrderTypeValidationField = props.isOrderTypeValidationField,
    checkoutFields = props.checkoutFields,
    setUserConfirmPhone = props.setUserConfirmPhone;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    session = _useSession2[0],
    changeUser = _useSession2[1].changeUser;
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    customer = _useCustomer2[0],
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useValidationsFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationsFields2 = _slicedToArray(_useValidationsFields, 1),
    validationFields = _useValidationsFields2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)(!!(props !== null && props !== void 0 && props.isEdit)),
    _useState2 = _slicedToArray(_useState, 2),
    isEdit = _useState2[0],
    setIsEdit = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      loadingDriver: false,
      result: {
        error: false
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    userState = _useState4[0],
    setUserState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formState = _useState6[0],
    setFormState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    notificationsGroup = _useState8[0],
    setNotificationsGroup = _useState8[1];
  var _useState9 = (0, _react.useState)({
      loading: false,
      changes: {},
      result: {
        error: false
      }
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    singleNotifications = _useState10[0],
    setSingleNotifications = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    verifyPhoneState = _useState12[0],
    setVerifyPhoneState = _useState12[1];
  var _useState13 = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    removeAccountState = _useState14[0],
    setAccountState = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    cellphoneStartZero = _useState16[0],
    setCellphoneStartZero = _useState16[1];
  var requestsState = {};
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  (0, _react.useEffect)(function () {
    if ((userId || useSessionUser && refreshSessionUser) && !session.loading && !props.userData) {
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        loading: true
      }));
      var source = {};
      requestsState.user = source;
      ordering.setAccessToken(accessToken).users(useSessionUser && refreshSessionUser ? session.user.id : userId).get({
        cancelToken: source
      }).then(function (response) {
        setUserState({
          loading: false,
          loadingDriver: false,
          result: response.content
        });
        if (response.content.result) {
          if (!isCustomerMode) {
            changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
          } else {
            setUserCustomer(_objectSpread(_objectSpread({}, customer.user), response.content.result), true);
          }
        }
      }).catch(function (err) {
        if (err.constructor.name !== 'Cancel') {
          setUserState({
            loadingDriver: false,
            loading: false,
            result: {
              error: true,
              result: err.message
            }
          });
        }
      });
    } else {
      setUserState({
        loading: false,
        loadingDriver: false,
        result: {
          error: false,
          result: useSessionUser && !refreshSessionUser ? session.user : user
        }
      });
    }
    return function () {
      if (requestsState.user) {
        requestsState.user.cancel();
      }
    };
  }, [session.loading, isSuccess]);

  /**
   * Clean formState
   */
  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };

  /**
   * Default fuction for user profile workflow
   */
  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(changes, isImage, image) {
      var options,
        response,
        _changes,
        parsedNumber,
        _props$userData,
        _formState$changes,
        photo,
        _changes2,
        _props$userData2,
        _userState$result$res,
        _props$userData3,
        _changes3,
        _changes$setCustomerI,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
            if (!handleButtonUpdateClick) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", handleButtonUpdateClick(userState.result.result, formState.changes));
          case 3:
            _context.prev = 3;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _changes = _objectSpread(_objectSpread({}, formState.changes), changes !== null && changes !== void 0 ? changes : {});
            if (!(_changes !== null && _changes !== void 0 && _changes.country_code) && _changes !== null && _changes !== void 0 && _changes.country_phone_code && _changes !== null && _changes !== void 0 && _changes.cellphone) {
              parsedNumber = (0, _libphonenumberJs.default)("+".concat(_changes === null || _changes === void 0 ? void 0 : _changes.country_phone_code).concat(_changes === null || _changes === void 0 ? void 0 : _changes.cellphone));
              _changes.country_code = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.country;
            }
            if (CONDITIONAL_CODES.includes(_changes === null || _changes === void 0 ? void 0 : _changes.country_phone_code)) {
              if ((_changes === null || _changes === void 0 ? void 0 : _changes.country_code) === 'PR') {
                _changes.cellphone = "787".concat(_changes.cellphone);
                _changes.country_phone_code = '1';
              }
            }
            if (cellphoneStartZero) {
              _changes.cellphone = cellphoneStartZero;
            }
            formState.changes = _changes;
            if (!isImage) {
              _context.next = 18;
              break;
            }
            _context.next = 13;
            return ordering.users((props === null || props === void 0 || (_props$userData = props.userData) === null || _props$userData === void 0 ? void 0 : _props$userData.id) || userState.result.result.id).save({
              photo: image || formState.changes.photo
            }, {
              accessToken: accessToken
            });
          case 13:
            response = _context.sent;
            _formState$changes = formState.changes, photo = _formState$changes.photo, _changes2 = _objectWithoutProperties(_formState$changes, _excluded);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : _changes2,
              result: response.content,
              loading: false
            }));
            _context.next = 24;
            break;
          case 18:
            _changes3 = formState.changes;
            if (props !== null && props !== void 0 && (_props$userData2 = props.userData) !== null && _props$userData2 !== void 0 && _props$userData2.guest_id || (_userState$result$res = userState.result.result) !== null && _userState$result$res !== void 0 && _userState$result$res.guest_id) {
              if (formState.changes.email) {
                _changes3 = _objectSpread(_objectSpread({}, _changes3), {}, {
                  guest_email: formState.changes.email
                });
              }
              if (formState.changes.cellphone) {
                _changes3 = _objectSpread(_objectSpread({}, _changes3), {}, {
                  guest_cellphone: formState.changes.cellphone
                });
              }
              delete _changes3.email;
              delete _changes3.cellphone;
            }
            _context.next = 22;
            return ordering.users((props === null || props === void 0 || (_props$userData3 = props.userData) === null || _props$userData3 === void 0 ? void 0 : _props$userData3.id) || userState.result.result.id).save(_changes3, {
              accessToken: accessToken
            });
          case 22:
            response = _context.sent;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : {},
              result: response.content,
              loading: !!(changes !== null && changes !== void 0 && changes.confirmDataLayout) || false
            }));
          case 24:
            if (!response.content.error) {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: false,
                result: _objectSpread(_objectSpread({}, userState.result), response.content)
              }));
              if (!isCustomerMode) {
                changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
              } else {
                setUserCustomer(_objectSpread(_objectSpread({}, customer.user), response.content.result), (_changes$setCustomerI = changes === null || changes === void 0 ? void 0 : changes.setCustomerInLocal) !== null && _changes$setCustomerI !== void 0 ? _changes$setCustomerI : true);
              }
              if (handleSuccessUpdate) {
                handleSuccessUpdate(response.content.result);
              }
              if (changes !== null && changes !== void 0 && changes.confirmDataLayout) {
                handleRequestCustomerAddress();
              }
              if (!(changes !== null && changes !== void 0 && changes.confirmDataLayout)) {
                onClose && onClose();
              }
              if (!image && !(options !== null && options !== void 0 && options.dontToggleEditMode)) {
                setIsEdit(!isEdit);
              }
            }
            _context.next = 30;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](3);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _context.t0.message
              },
              loading: false
            }));
          case 30:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 27]]);
    }));
    return function handleUpdateClick(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};
    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };

  /**
   * Update user photo data
   * @param {File} file Image to change user photo
   */
  var handlechangeImage = function handlechangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          photo: reader.result
        })
      }));
    };
    reader.onerror = function (error) {
      return console.log(error);
    };
  };

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;
    return !useValidationFields || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.checkout) !== null && _validationFields$fie !== void 0 && _validationFields$fie[fieldName]) || !validationFields.loading && ((_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2[fieldName]) && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.checkout) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3[fieldName]) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled);
  };

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  var isRequiredField = function isRequiredField(fieldName) {
    var _checkoutRequiredFiel, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6;
    var checkoutRequiredFields = null;
    if (isOrderTypeValidationField) {
      var _session$user, _checkoutFields$filte, _checkoutFields$filte2;
      checkoutRequiredFields = session !== null && session !== void 0 && (_session$user = session.user) !== null && _session$user !== void 0 && _session$user.guest_id ? checkoutFields === null || checkoutFields === void 0 || (_checkoutFields$filte = checkoutFields.filter(function (field) {
        return (field === null || field === void 0 ? void 0 : field.enabled) && (field === null || field === void 0 ? void 0 : field.required_with_guest);
      })) === null || _checkoutFields$filte === void 0 ? void 0 : _checkoutFields$filte.map(function (field) {
        var _field$validation_fie;
        return field === null || field === void 0 || (_field$validation_fie = field.validation_field) === null || _field$validation_fie === void 0 ? void 0 : _field$validation_fie.code;
      }) : checkoutFields === null || checkoutFields === void 0 || (_checkoutFields$filte2 = checkoutFields.filter(function (field) {
        return (field === null || field === void 0 ? void 0 : field.enabled) && (field === null || field === void 0 ? void 0 : field.required);
      })) === null || _checkoutFields$filte2 === void 0 ? void 0 : _checkoutFields$filte2.map(function (field) {
        var _field$validation_fie2;
        return field === null || field === void 0 || (_field$validation_fie2 = field.validation_field) === null || _field$validation_fie2 === void 0 ? void 0 : _field$validation_fie2.code;
      });
    }
    return isOrderTypeValidationField ? (_checkoutRequiredFiel = checkoutRequiredFields) === null || _checkoutRequiredFiel === void 0 ? void 0 : _checkoutRequiredFiel.includes(fieldName) : useValidationFields && !validationFields.loading && ((_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.checkout) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.checkout) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5[fieldName]) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && ((_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.checkout) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6[fieldName]) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required);
  };
  var handleToggleAvalaibleStatusDriver = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(newValue) {
      var _session$user2, response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setUserState(_objectSpread(_objectSpread({}, userState), {}, {
              loadingDriver: true
            }));
            _context2.next = 4;
            return ordering.users(session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id).save({
              available: newValue
            }, {
              accessToken: accessToken
            });
          case 4:
            response = _context2.sent;
            if (response.content.error) {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: false,
                result: _objectSpread(_objectSpread({}, userState.result), {}, {
                  error: response.content.result
                })
              }));
            }
            if (!response.content.error) {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: false,
                result: _objectSpread({}, response.content)
              }));
              changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
            }
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            if (_context2.t0.constructor.name !== 'Cancel') {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: false,
                result: {
                  error: true,
                  result: _context2.t0.message
                }
              }));
            }
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function handleToggleAvalaibleStatusDriver(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var body, response, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            body = {
              cellphone: cellphoneStartZero || values.cellphone,
              country_phone_code: parseInt(values.country_phone_code)
            };
            _context3.prev = 1;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context3.next = 5;
            return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 5:
            response = _context3.sent;
            _context3.next = 8;
            return response.json();
          case 8:
            res = _context3.sent;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _context3.t0.message
              }
            }));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 12]]);
    }));
    return function sendVerifyPhoneCode(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var updatePromotions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(change, setState, state) {
      var _props$userData4, response, _change$setCustomerIn;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return ordering.users((props === null || props === void 0 || (_props$userData4 = props.userData) === null || _props$userData4 === void 0 ? void 0 : _props$userData4.id) || userState.result.result.id).save(change, {
              accessToken: accessToken
            });
          case 3:
            response = _context4.sent;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              changes: response.content.error ? change : {},
              result: response.content,
              loading: false
            }));
            if (!response.content.error) {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: false,
                result: _objectSpread(_objectSpread({}, userState.result), response.content)
              }));
              if (!isCustomerMode) {
                changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
              } else {
                setUserCustomer(_objectSpread(_objectSpread({}, customer.user), response.content.result), (_change$setCustomerIn = change === null || change === void 0 ? void 0 : change.setCustomerInLocal) !== null && _change$setCustomerIn !== void 0 ? _change$setCustomerIn : true);
              }
              if (handleSuccessUpdate) {
                handleSuccessUpdate(response.content.result);
              }
            }
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            setState(_objectSpread(_objectSpread({}, state), {}, {
              result: {
                error: true,
                result: _context4.t0.message
              },
              loading: false
            }));
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function updatePromotions(_x6, _x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangePromotions = function handleChangePromotions(enabled) {
    var _ref5;
    var isSingle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _changes = {
      settings: {
        email: {
          newsletter: !isSingle ? enabled : enabled === null || enabled === void 0 ? void 0 : enabled.email,
          promotions: !isSingle ? enabled : enabled === null || enabled === void 0 ? void 0 : enabled.email
        },
        notification: {
          newsletter: !isSingle ? enabled : enabled === null || enabled === void 0 ? void 0 : enabled.notification,
          promotions: !isSingle ? enabled : enabled === null || enabled === void 0 ? void 0 : enabled.notification
        },
        sms: {
          newsletter: !isSingle ? enabled : enabled === null || enabled === void 0 ? void 0 : enabled.sms,
          promotions: !isSingle ? enabled : enabled === null || enabled === void 0 ? void 0 : enabled.sms
        }
      }
    };
    var state = {
      changes: _objectSpread(_objectSpread({}, (_ref5 = [isSingle ? singleNotifications : notificationsGroup]) === null || _ref5 === void 0 ? void 0 : _ref5.changes), _changes),
      loading: true
    };
    if (isSingle) {
      setSingleNotifications(_objectSpread(_objectSpread({}, singleNotifications), state));
      return;
    }
    setNotificationsGroup(_objectSpread(_objectSpread({}, notificationsGroup), state));
  };
  var handleChangeNotifications = function handleChangeNotifications(value) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
        settings: {
          email: {
            newsletter: value === null || value === void 0 ? void 0 : value.email,
            promotions: value === null || value === void 0 ? void 0 : value.email
          },
          notification: {
            newsletter: value === null || value === void 0 ? void 0 : value.notification,
            promotions: value === null || value === void 0 ? void 0 : value.notification
          },
          sms: {
            newsletter: value === null || value === void 0 ? void 0 : value.sms,
            promotions: value === null || value === void 0 ? void 0 : value.sms
          }
        }
      })
    }));
  };
  var handleRemoveAccount = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId) {
      var idToDelete, response, res;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            idToDelete = userId !== null && userId !== void 0 ? userId : session.user.id;
            _context5.prev = 1;
            setAccountState(_objectSpread(_objectSpread({}, removeAccountState), {}, {
              loading: true
            }));
            _context5.next = 5;
            return fetch("".concat(ordering.root, "/users/").concat(idToDelete), {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 5:
            response = _context5.sent;
            _context5.next = 8;
            return response.json();
          case 8:
            res = _context5.sent;
            setAccountState(_objectSpread(_objectSpread({}, removeAccountState), {}, {
              loading: false,
              result: res === null || res === void 0 ? void 0 : res.result,
              error: res === null || res === void 0 ? void 0 : res.error
            }));
            return _context5.abrupt("return", res.result);
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](1);
            setAccountState(_objectSpread(_objectSpread({}, removeAccountState), {}, {
              loading: false,
              error: _context5.t0.message
            }));
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 13]]);
    }));
    return function handleRemoveAccount(_x9) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleRequestCustomerAddress = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var _props$userData5, response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context6.next = 4;
            return fetch("".concat(ordering.root, "/actions/run/custom"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                action: 'request_customer_address',
                user_token_required: true,
                user_id: (props === null || props === void 0 || (_props$userData5 = props.userData) === null || _props$userData5 === void 0 ? void 0 : _props$userData5.id) || userState.result.result.id,
                user_token_expiration_time: 10
              })
            });
          case 4:
            response = _context6.sent;
            _context6.next = 7;
            return response.json();
          case 7:
            _yield$response$json = _context6.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (!error) {
              _context6.next = 14;
              break;
            }
            showToast(_ToastContext.ToastType.Error, result, 5000);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false
            }));
            return _context6.abrupt("return");
          case 14:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false
            }));
            setUserConfirmPhone && setUserConfirmPhone({
              result: result,
              open: false
            });
            _context6.next = 21;
            break;
          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](0);
            showToast(_ToastContext.ToastType.Error, _context6.t0.message, 5000);
          case 21:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 18]]);
    }));
    return function handleRequestCustomerAddress() {
      return _ref7.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    updatePromotions(singleNotifications !== null && singleNotifications !== void 0 && singleNotifications.loading ? singleNotifications === null || singleNotifications === void 0 ? void 0 : singleNotifications.changes : notificationsGroup === null || notificationsGroup === void 0 ? void 0 : notificationsGroup.changes, singleNotifications !== null && singleNotifications !== void 0 && singleNotifications.loading ? setSingleNotifications : setNotificationsGroup, singleNotifications !== null && singleNotifications !== void 0 && singleNotifications.loading ? singleNotifications : notificationsGroup);
  }, [notificationsGroup === null || notificationsGroup === void 0 ? void 0 : notificationsGroup.loading, singleNotifications === null || singleNotifications === void 0 ? void 0 : singleNotifications.loading]);
  (0, _react.useEffect)(function () {
    var handleUpdateDriver = function handleUpdateDriver(data) {
      var _data$changes;
      var changes = {};
      (_data$changes = data.changes) === null || _data$changes === void 0 || _data$changes.map(function (change) {
        return changes[change.attribute] = change.new;
      });
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        loadingDriver: false,
        result: _objectSpread(_objectSpread({}, userState === null || userState === void 0 ? void 0 : userState.result), changes)
      }));
      changeUser(_objectSpread(_objectSpread({}, session.user), changes));
    };
    socket.on('drivers_changes', handleUpdateDriver);
    return function () {
      socket.off('drivers_changes', handleUpdateDriver);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isEdit: isEdit,
    cleanFormState: cleanFormState,
    formState: formState,
    userState: userState,
    removeAccountState: removeAccountState,
    validationFields: validationFields,
    showField: showField,
    singleNotifications: singleNotifications,
    notificationsGroup: notificationsGroup,
    setFormState: setFormState,
    isRequiredField: isRequiredField,
    handleChangeInput: handleChangeInput,
    handleButtonUpdateClick: handleUpdateClick,
    handlechangeImage: handlechangeImage,
    toggleIsEdit: function toggleIsEdit() {
      return setIsEdit(!isEdit);
    },
    handleToggleAvalaibleStatusDriver: handleToggleAvalaibleStatusDriver,
    handleSendVerifyCode: sendVerifyPhoneCode,
    verifyPhoneState: verifyPhoneState,
    handleChangePromotions: handleChangePromotions,
    handleRemoveAccount: handleRemoveAccount,
    handleChangeNotifications: handleChangeNotifications,
    handleRequestCustomerAddress: handleRequestCustomerAddress,
    setCellphoneStartZero: setCellphoneStartZero
  })));
};
UserFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Use session user to details
   */
  useSessionUser: function useSessionUser(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `boolean`."));
    }
    if (props.user === undefined && props.userId === undefined && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `user` and `userId` is not present."));
    }
    if (props[propName] && (props.user !== undefined || props.userId !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `userId` and `user`."));
    }
  },
  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: _propTypes.default.bool,
  /**
   * User ID
   * If you provide the user id the component get user form Ordering API
   */
  userId: function userId(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'number') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `number`."));
    }
    if (props.user === undefined && !props.useSessionUser && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `user` and `useSessionUser` is not present."));
    }
    if (props[propName] && (props.useSessionUser || props.user !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `useSessionUser` and `user`."));
    }
  },
  /**
   * User object
   * If you provide user object the component not get user form Ordering API
   */
  user: function user(props, propName) {
    if (props[propName] !== undefined && _typeof(props[propName]) !== 'object') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `object`."));
    }
    if (props.userId === undefined && !props.useSessionUser && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `useSessionUser` and `userId` is not present."));
    }
    if (props[propName] && (props.useSessionUser || props.userId !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `useSessionUser` and `userId`."));
    }
  },
  /**
   * Function to change default user details behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
  handleButtonUpdateClick: _propTypes.default.func,
  /**
   * Function to get user update success event
   * @param {Object} user User with session data
   */
  handleSuccessUpdate: _propTypes.default.func,
  /**
   * Enable to get validation fields to show/hide fields from Ordering API
   */
  useValidationFields: _propTypes.default.bool,
  /**
   * Type of validation field to apply and get from API
   */
  validationFieldsType: _propTypes.default.string,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `object`."));
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },
  /**
   * Components types before user details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after user details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: _propTypes.default.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: _propTypes.default.element
};
UserFormDetails.defaultProps = {
  useValidationFields: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};