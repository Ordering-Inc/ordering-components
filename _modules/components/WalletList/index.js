"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _EventContext = require("../../contexts/EventContext");
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
var WalletList = exports.WalletList = function WalletList(props) {
  var UIComponent = props.UIComponent,
    isWalletCashEnabled = props.isWalletCashEnabled,
    isWalletPointsEnabled = props.isWalletPointsEnabled;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    token = _useSession2$.token,
    user = _useSession2$.user;
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    walletSelected = _useState2[0],
    setWalletSelected = _useState2[1];
  var _useState3 = (0, _react.useState)({
      wallets: [],
      loading: true,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    state = _useState4[0],
    setState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      list: null,
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    transactions = _useState6[0],
    setTransactions = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: true,
      error: null,
      loyaltyLevel: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    userLoyaltyLevel = _useState8[0],
    setUserLoyaltyLevel = _useState8[1];
  var userProps = ['loyalty_level'];
  var getTransactions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(walletId) {
      var _transactions$list;
      var response, _yield$response$json, error, result, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!((_transactions$list = transactions.list) !== null && _transactions$list !== void 0 && _transactions$list["wallet:".concat(walletId)])) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            setTransactions(_objectSpread(_objectSpread({}, transactions), {}, {
              loading: true
            }));
            _context.n = 2;
            return fetch("".concat(ordering.root, "/users/").concat(user.id, "/wallets/").concat(walletId, "/events?orderBy=-id"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            _yield$response$json = _context.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            setTransactions(_objectSpread(_objectSpread({}, transactions), {}, {
              error: error ? result : null,
              list: _objectSpread(_objectSpread({}, transactions.list), {}, _defineProperty({}, "wallet:".concat(walletId), error ? null : result)),
              loading: false
            }));
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setTransactions(_objectSpread(_objectSpread({}, transactions), {}, {
                loading: false,
                error: [_t.message]
              }));
            }
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }));
    return function getTransactions(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var getWallets = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _yield$response$json2, error, result, cashWallet, pointsWallet, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/users/").concat(user.id, "/wallets"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context2.v;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            if (!error && (result === null || result === void 0 ? void 0 : result.length) > 0) {
              cashWallet = isWalletCashEnabled ? result.find(function (wallet) {
                return wallet.type === 'cash';
              }) : null;
              pointsWallet = isWalletPointsEnabled ? result.find(function (wallet) {
                return wallet.type === 'credit_point';
              }) : null;
              if (cashWallet) {
                getTransactions(cashWallet.id);
              } else if (pointsWallet) {
                getTransactions(pointsWallet.id);
              }
            }
            setState(_objectSpread(_objectSpread({}, state), {}, {
              loading: false,
              error: error ? result : null,
              wallets: error ? null : result
            }));
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            if (_t2.constructor.name !== 'Cancel') {
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false,
                error: [_t2.message]
              }));
            }
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function getWallets() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getUserLoyaltyLevel = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$ordering$users, _yield$ordering$users2, result, error, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return ordering.users(user.id).select(userProps).get();
          case 1:
            _yield$ordering$users = _context3.v;
            _yield$ordering$users2 = _yield$ordering$users.content;
            result = _yield$ordering$users2.result;
            error = _yield$ordering$users2.error;
            setUserLoyaltyLevel(_objectSpread(_objectSpread({}, userLoyaltyLevel), {}, {
              loading: false,
              loyaltyLevel: error ? null : result === null || result === void 0 ? void 0 : result.loyalty_level,
              error: error ? result : null
            }));
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            setUserLoyaltyLevel(_objectSpread(_objectSpread({}, userLoyaltyLevel), {}, {
              loading: false,
              error: _t3
            }));
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function getUserLoyaltyLevel() {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getUserLoyaltyLevel();
    getWallets();
  }, []);
  (0, _react.useEffect)(function () {
    if (walletSelected) {
      getTransactions(walletSelected);
    }
  }, [walletSelected]);
  (0, _react.useEffect)(function () {
    events.on('gift_card_redeemed', getWallets);
    return function () {
      events.off('gift_card_redeemed', getWallets);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    walletList: state,
    userLoyaltyLevel: userLoyaltyLevel,
    transactionsList: transactions,
    setWalletSelected: setWalletSelected,
    getWallets: getWallets
  })));
};
WalletList.defaultProps = {};