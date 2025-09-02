"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _OrderContext = require("../../contexts/OrderContext");
var _BusinessContext = require("../../contexts/BusinessContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _codeNumbers = require("../../constants/code-numbers");
var _timezones = require("../../constants/timezones");
var _ConfigContext = require("../../contexts/ConfigContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
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
var PhoneAutocomplete = exports.PhoneAutocomplete = function PhoneAutocomplete(props) {
  var _orderState$options5;
  var UIComponent = props.UIComponent,
    isIos = props.isIos,
    businessSlug = props.businessSlug,
    urlPhone = props.urlPhone,
    propsToFetch = props.propsToFetch,
    isFromUrlPhone = props.isFromUrlPhone;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    setUserCustomerOptions = _useOrder2[1].setUserCustomerOptions;
  var _useBusiness = (0, _BusinessContext.useBusiness)(),
    _useBusiness2 = _slicedToArray(_useBusiness, 1),
    businessState = _useBusiness2[0];
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    phone = _useState2[0],
    setPhone = _useState2[1];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState3 = (0, _react.useState)({
      customer: false,
      signup: false,
      error: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    openModal = _useState4[0],
    setOpenModal = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    customerState = _useState6[0],
    setCustomerState = _useState6[1];
  var _useState7 = (0, _react.useState)({
      users: userCustomer ? [userCustomer] : [],
      loading: !!urlPhone,
      error: null,
      fetched: false
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    customersPhones = _useState8[0],
    setCustomersPhones = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    businessAddress = _useState0[0],
    setBusinessAddress = _useState0[1];
  var _useState1 = (0, _react.useState)({
      open: true,
      content: []
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    optionsState = _useState12[0],
    setOptionsState = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    localPhoneCode = _useState14[0],
    setLocalPhoneCode = _useState14[1];
  var reqState = {};
  /**
   * Get users from API
   */
  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_phone) {
      var _cellphone$toString, _cellphoneString$matc;
      var maxRetries, waitTime, cellphone, cellphoneString, cellphoneSplited, retryAttempt, conditions, source, request, timer, response, result, users, _reqState$users, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            maxRetries = 3;
            waitTime = 60000;
            cellphone = _phone || phone || urlPhone;
            cellphoneString = cellphone === null || cellphone === void 0 || (_cellphone$toString = cellphone.toString) === null || _cellphone$toString === void 0 ? void 0 : _cellphone$toString.call(cellphone);
            cellphoneSplited = (cellphoneString === null || cellphoneString === void 0 || (_cellphoneString$matc = cellphoneString.match) === null || _cellphoneString$matc === void 0 ? void 0 : _cellphoneString$matc.call(cellphoneString, /.{1,7}/)) || [];
            retryAttempt = 1;
          case 1:
            if (!(retryAttempt <= maxRetries)) {
              _context.n = 9;
              break;
            }
            _context.p = 2;
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              loading: true
            }));
            conditions = {
              conector: 'AND',
              conditions: [{
                attribute: 'enabled',
                value: isIos ? true : encodeURI(true)
              }, {
                conector: 'OR',
                conditions: [{
                  attribute: 'cellphone',
                  value: {
                    condition: isFromUrlPhone ? '=' : 'like',
                    value: isFromUrlPhone ? cellphoneString : isIos ? "%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%") : encodeURI("%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%"))
                  }
                }, {
                  attribute: 'phone',
                  value: {
                    condition: isFromUrlPhone ? '=' : 'like',
                    value: isFromUrlPhone ? cellphoneString : isIos ? "%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%") : encodeURI("%".concat((cellphoneSplited === null || cellphoneSplited === void 0 ? void 0 : cellphoneSplited[0]) || cellphoneString, "%"))
                  }
                }]
              }]
            };
            source = {};
            reqState.users = source;
            request = ordering.setAccessToken(token).users().select(propsToFetch).where(conditions).get({
              cancelToken: source
            });
            timer = new Promise(function (resolve, reject) {
              setTimeout(function () {
                return reject(new Error('Timeout exceeded'));
              }, waitTime);
            });
            _context.n = 3;
            return Promise.race([request, timer]);
          case 3:
            response = _context.v;
            if (!(response.content && response.content.result)) {
              _context.n = 4;
              break;
            }
            result = response.content.result;
            users = result.filter(function (user) {
              var _user$cellphone;
              return (_user$cellphone = user.cellphone) === null || _user$cellphone === void 0 ? void 0 : _user$cellphone.includes(cellphoneString);
            });
            setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
              users: users,
              loading: false,
              fetched: true
            }));
            return _context.a(3, 9);
          case 4:
            throw new Error('Error');
          case 5:
            _context.n = 8;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            ((_reqState$users = reqState.users) === null || _reqState$users === void 0 ? void 0 : _reqState$users.cancel) && reqState.users.cancel();
            if (!(retryAttempt < maxRetries)) {
              _context.n = 7;
              break;
            }
            _context.n = 7;
            return new Promise(function (resolve) {
              return setTimeout(resolve, waitTime);
            });
          case 7:
            if (retryAttempt === maxRetries) {
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: false,
                error: t('ERROR_MULTIPLE_FETCH', 'Exceeded the maximum number of retries. Reload the page.')
              }));
            }
          case 8:
            retryAttempt++;
            _context.n = 1;
            break;
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[2, 6]]);
    }));
    return function getUsers(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * fetch business to get its address
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return ordering.businesses('mcbonalds').select(['address', 'location', 'distance']).parameters().get();
          case 1:
            _yield$ordering$busin = _context2.v;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error) {
              _context2.n = 2;
              break;
            }
            setAlertState({
              open: true,
              content: result
            });
            return _context2.a(2);
          case 2:
            setBusinessAddress(result);
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function getBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  var checkAddress = function checkAddress(address1, address2) {
    var props = ['address', 'location'];
    var values = [];
    props.forEach(function (prop) {
      if (address1 && address1[prop]) {
        if (prop === 'location') {
          values.push(address2[prop].lat === address1[prop].lat && address2[prop].lng === address1[prop].lng);
        } else {
          values.push(address2[prop] === address1[prop]);
        }
      } else {
        values.push(!address2[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var setGuestOptions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref3) {
      var _businessState$busine;
      var customer, _ref3$type, type, onRedirect, businessObj, userObj, _addressSelected, _orderState$options, _yield$ordering$users, _yield$ordering$users2, resultAddresses, error, userAddressFinded, addressSelected, _response$content$res, _addressSelected2, response, addressResponse, options, _addressSelected3, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            customer = _ref3.customer, _ref3$type = _ref3.type, type = _ref3$type === void 0 ? 3 : _ref3$type, onRedirect = _ref3.onRedirect;
            businessObj = (_businessState$busine = businessState === null || businessState === void 0 ? void 0 : businessState.business) !== null && _businessState$busine !== void 0 ? _businessState$busine : businessAddress;
            userObj = customer !== null && customer !== void 0 ? customer : user;
            if (!(!businessObj || !(userObj !== null && userObj !== void 0 && userObj.id))) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: true
            }));
            _context3.n = 2;
            return ordering.users(userObj.id).addresses().get();
          case 2:
            _yield$ordering$users = _context3.v;
            _yield$ordering$users2 = _yield$ordering$users.content;
            resultAddresses = _yield$ordering$users2.result;
            error = _yield$ordering$users2.error;
            if (!error) {
              _context3.n = 3;
              break;
            }
            setAlertState({
              open: true,
              content: resultAddresses
            });
            return _context3.a(2);
          case 3:
            userAddressFinded = resultAddresses.find(function (address) {
              return (address === null || address === void 0 ? void 0 : address.location) && checkAddress(businessObj, address) && address;
            });
            addressSelected = userAddressFinded !== null && userAddressFinded !== void 0 ? userAddressFinded : null;
            if ((_addressSelected = addressSelected) !== null && _addressSelected !== void 0 && _addressSelected.id) {
              _context3.n = 7;
              break;
            }
            _context3.n = 4;
            return ordering.users(userObj.id).addresses().save({
              address: businessObj.address,
              location: businessObj.location
            });
          case 4:
            response = _context3.v;
            if (!response.content.error) {
              _context3.n = 5;
              break;
            }
            setAlertState({
              open: true,
              content: response.content.result
            });
            return _context3.a(2);
          case 5:
            addressSelected = (_response$content$res = response.content.result) !== null && _response$content$res !== void 0 ? _response$content$res : null;
            _context3.n = 6;
            return ordering.users(userObj.id).addresses((_addressSelected2 = addressSelected) === null || _addressSelected2 === void 0 ? void 0 : _addressSelected2.id).save({
              default: true
            });
          case 6:
            addressResponse = _context3.v;
            if (!addressResponse.content.error) {
              _context3.n = 7;
              break;
            }
            setAlertState({
              open: true,
              content: addressResponse.content.result
            });
            return _context3.a(2);
          case 7:
            options = {
              type: type
            };
            if (addressSelected && !checkAddress(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address, addressSelected)) {
              options.address_id = (_addressSelected3 = addressSelected) === null || _addressSelected3 === void 0 ? void 0 : _addressSelected3.id;
            }
            if (!(options !== null && options !== void 0 && options.address_id || (user === null || user === void 0 ? void 0 : user.id) !== (customer === null || customer === void 0 ? void 0 : customer.id))) {
              _context3.n = 8;
              break;
            }
            _context3.n = 8;
            return setUserCustomerOptions({
              options: options,
              customer: userObj
            });
          case 8:
            onRedirect && onRedirect();
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: false
            }));
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t2 = _context3.v;
            setAlertState({
              open: true,
              content: _t2.message
            });
            setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
              loading: false
            }));
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 9]]);
    }));
    return function setGuestOptions(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _customersPhones$user;
    if (urlPhone) return;
    if (phone && phone.length >= 7 && ((customersPhones === null || customersPhones === void 0 || (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.length) === 0 || phone.length === 7) && !customersPhones.loading) {
      getUsers();
    }
    if (phone && phone.length < 7 || !phone) {
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: userCustomer ? [userCustomer] : []
      }));
    }
  }, [phone]);
  (0, _react.useEffect)(function () {
    if (urlPhone) {
      getUsers();
      return;
    }
    if (urlPhone && urlPhone.length < 7) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        error: true
      }));
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: [],
        loading: false
      }));
    }
  }, [urlPhone]);
  (0, _react.useEffect)(function () {
    var _businessState$busine2;
    if (businessSlug && !(businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && _businessState$busine2.id)) {
      getBusiness();
    }
  }, [businessSlug]);
  (0, _react.useEffect)(function () {
    if (!window.localStorage.getItem('local_phone_code')) {
      var _CODES$find, _CODES$find2;
      var countriesElevenPhoneLength = ['GB'];
      var countriesElevenPhone = countriesElevenPhoneLength.find(function (val) {
        var _configs$default_coun, _configs$default_coun2;
        return val === (configs === null || configs === void 0 || (_configs$default_coun = configs.default_country_code) === null || _configs$default_coun === void 0 || (_configs$default_coun = _configs$default_coun.value) === null || _configs$default_coun === void 0 || (_configs$default_coun2 = _configs$default_coun.toUpperCase) === null || _configs$default_coun2 === void 0 ? void 0 : _configs$default_coun2.call(_configs$default_coun));
      });
      var localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var localCountry = _timezones.TIMEZONES[localTimezone];
      var _localPhoneCode = countriesElevenPhone ? (_CODES$find = _codeNumbers.CODES.find(function (code) {
        return code.countryCode === countriesElevenPhone;
      })) === null || _CODES$find === void 0 ? void 0 : _CODES$find.phoneCode : (_CODES$find2 = _codeNumbers.CODES.find(function (code) {
        return code.countryName === localCountry;
      })) === null || _CODES$find2 === void 0 ? void 0 : _CODES$find2.phoneCode;
      window.localStorage.setItem('local_phone_code', "+".concat(_localPhoneCode));
      setLocalPhoneCode("+".concat(_localPhoneCode));
    } else {
      setLocalPhoneCode(window.localStorage.getItem('local_phone_code'));
    }
  }, []);
  (0, _react.useEffect)(function () {
    var _orderState$options2, _orderState$options3;
    if (userCustomer !== null && userCustomer !== void 0 && userCustomer.id && orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.user_id && (userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) !== (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.user_id)) {
      var _orderState$options4;
      setUserCustomerOptions({
        options: {
          user_id: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
          type: orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type
        },
        customer: userCustomer
      });
    }
  }, [userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id, orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.user_id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    phone: phone,
    customerState: customerState,
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    onChangeNumber: function onChangeNumber(phone) {
      return setPhone(phone);
    },
    openModal: openModal,
    setOpenModal: setOpenModal,
    setCustomerState: setCustomerState,
    setBusinessAddressToUser: setGuestOptions,
    alertState: alertState,
    optionsState: optionsState,
    checkAddress: checkAddress,
    localPhoneCode: localPhoneCode,
    getUsers: getUsers
  })));
};
PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'metadata']
};