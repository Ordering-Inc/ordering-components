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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t5 in e) "default" !== _t5 && {}.hasOwnProperty.call(e, _t5) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t5)) && (i.get || i.set) ? o(f, _t5, i) : f[_t5] = e[_t5]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
/**
 * Component to control a address list
 * @param {object} props Props of AddressList component
 */
var AddressList = exports.AddressList = function AddressList(props) {
  var UIComponent = props.UIComponent,
    changeOrderAddressWithDefault = props.changeOrderAddressWithDefault,
    handleClickSetDefault = props.handleClickSetDefault,
    handleClickDelete = props.handleClickDelete,
    userCustomerSetup = props.userCustomerSetup,
    setUserConfirmPhone = props.setUserConfirmPhone;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    auth = _useSession2$.auth;
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var source, _yield$ordering$setAc, content, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
              loading: true
            }));
            source = {};
            requestsState.list = source;
            _context.n = 1;
            return ordering.setAccessToken(accessToken).users(userId).addresses().get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$setAc = _context.v;
            content = _yield$ordering$setAc.content;
            setAddressList({
              loading: false,
              error: content.error ? content.result : null,
              addresses: content.error ? [] : Array.isArray(content.result) ? content.result : []
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
                loading: false,
                error: [_t.message]
              }));
            }
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(address, userCustomerSetup, sameAddress, dontSetUserCustomer) {
      var _yield$ordering$setAc2, content, _content$result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
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
              _context2.n = 1;
              break;
            }
            return _context2.a(2, handleClickSetDefault(address));
          case 1:
            if (!sameAddress) {
              _context2.n = 2;
              break;
            }
            changeAddress(address === null || address === void 0 ? void 0 : address.id, {
              country_code: address === null || address === void 0 ? void 0 : address.country_code,
              type: options === null || options === void 0 ? void 0 : options.type
            });
            return _context2.a(2);
          case 2:
            _context2.p = 2;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context2.n = 3;
            return ordering.setAccessToken(accessToken).users(userId).addresses(address.id).save({
              default: true
            });
          case 3:
            _yield$ordering$setAc2 = _context2.v;
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
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t2.message]
            }));
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(address) {
      var _yield$ordering$users, content, addresses, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!handleClickDelete) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, handleClickDelete(address));
          case 1:
            _context3.p = 1;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            _context3.n = 2;
            return ordering.users(userId).addresses(address.id).delete({
              accessToken: accessToken
            });
          case 2:
            _yield$ordering$users = _context3.v;
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
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: false,
              error: [_t3.message]
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function handleDelete(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleAddressRegister = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(address) {
      var _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!((address === null || address === void 0 ? void 0 : address.user_id) !== (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id))) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.p = 1;
            _context4.n = 2;
            return setAddressList(function (prevProps) {
              return _objectSpread(_objectSpread({}, prevProps), {}, {
                loading: false,
                addresses: [].concat(_toConsumableArray(prevProps === null || prevProps === void 0 ? void 0 : prevProps.addresses), [address]),
                addedBySocket: true
              });
            });
          case 2:
            setUserConfirmPhone && setUserConfirmPhone({
              open: false,
              result: null
            });
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
              loading: false,
              error: [_t4.message]
            }));
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function handleAddressRegister(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!(userCustomerSetup !== null && userCustomerSetup !== void 0 && userCustomerSetup.id) || !(socket !== null && socket !== void 0 && socket.socket) || !auth) return;
    var room = {
      room: 'addresses',
      project: ordering.project,
      role: 'agent',
      user_id: user === null || user === void 0 ? void 0 : user.id
    };
    socket.on('addresses_register', handleAddressRegister);
    socket.socket.on('connect', function () {
      socket.join(room);
    });
    socket.join(room);
    return function () {
      socket.leave(room);
      socket.off('addresses_register', handleAddressRegister);
    };
  }, [socket === null || socket === void 0 ? void 0 : socket.socket, user === null || user === void 0 ? void 0 : user.id, userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id]);
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