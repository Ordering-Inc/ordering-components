"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../contexts/SessionContext");
var _ApiContext = require("../../contexts/ApiContext");
var _OrderContext = require("../../contexts/OrderContext");
var _ValidationsFieldsContext = require("../../contexts/ValidationsFieldsContext");
var _CustomerContext = require("../../contexts/CustomerContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t5 in e) "default" !== _t5 && {}.hasOwnProperty.call(e, _t5) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t5)) && (i.get || i.set) ? o(f, _t5, i) : f[_t5] = e[_t5]); return f; })(e, t); }
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
var AddressForm = exports.AddressForm = function AddressForm(props) {
  var UIComponent = props.UIComponent,
    addressId = props.addressId,
    address = props.address,
    useValidationFileds = props.useValidationFileds,
    onSaveAddress = props.onSaveAddress,
    isSelectedAfterAdd = props.isSelectedAfterAdd,
    onSaveCustomAddress = props.onSaveCustomAddress,
    franchiseId = props.franchiseId,
    handleGoToLogin = props.handleGoToLogin,
    avoidRefreshUserInfo = props.avoidRefreshUserInfo;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useValidationFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useState = (0, _react.useState)({
      loading: false,
      error: null,
      address: address || {}
    }),
    _useState2 = _slicedToArray(_useState, 2),
    addressState = _useState2[0],
    setAddressState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      changes: {},
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    formState = _useState4[0],
    setFormState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    userByToken = _useState6[0],
    setUserByToken = _useState6[1];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user,
    token = _useSession2$.token,
    refreshUserInfo = _useSession2[1].refreshUserInfo;
  var requestsState = {};
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    options = _useOrder2[0].options,
    changeAddress = _useOrder2[1].changeAddress;
  var userId = props.userId || (user === null || user === void 0 ? void 0 : user.id);
  var accessToken = props.accessToken || token;
  var _useCustomer = (0, _CustomerContext.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isEdit = _useState8[0],
    _setIsEdit = _useState8[1];
  var _useState9 = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    businessesList = _useState0[0],
    setBusinessesList = _useState0[1];

  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */
  var loadAddress = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(userId, addressId) {
      var source, _yield$ordering$users, content, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
              loading: true
            }));
            source = {};
            requestsState.address = source;
            _context.n = 1;
            return ordering.users(userId).addresses(addressId).get({
              accessToken: accessToken,
              cancelToken: source
            });
          case 1:
            _yield$ordering$users = _context.v;
            content = _yield$ordering$users.content;
            setAddressState({
              loading: false,
              error: content.error ? content.result : null,
              address: content.error ? {} : content.result
            });
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            if (_t.constructor.name !== 'Cancel') {
              setAddressState({
                loading: false,
                error: [_t.message],
                address: {}
              });
            }
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function loadAddress(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    updateChanges(_defineProperty({}, e.target.name, e.target.value));
  };

  /**
   * Update address data
   * @param {object} changes object with changes
   */
  var updateChanges = function updateChanges(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;
    return !useValidationFileds || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.address) !== null && _validationFields$fie !== void 0 && _validationFields$fie[fieldName]) || !validationFields.loading && ((_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.address) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2[fieldName]) && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.address) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3[fieldName]) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled);
  };

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie4, _validationFields$fie5, _validationFields$fie6;
    return useValidationFileds && !validationFields.loading && ((_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.address) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.address) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5[fieldName]) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && ((_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.address) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6[fieldName]) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required);
  };

  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */
  var saveAddress = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values, userCustomerSetup) {
      var _userByToken$session;
      var _values$country_code, _formState$changes, _addressState$address, _userByToken$session2, data, _yield$ordering$users2, content, _content$result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!onSaveCustomAddress) {
              _context2.n = 1;
              break;
            }
            onSaveCustomAddress(values);
            return _context2.a(2);
          case 1:
            if (!(!auth && !(userByToken !== null && userByToken !== void 0 && (_userByToken$session = userByToken.session) !== null && _userByToken$session !== void 0 && _userByToken$session.token))) {
              _context2.n = 2;
              break;
            }
            changeAddress(_objectSpread(_objectSpread({}, values), formState.changes), {
              country_code: (_values$country_code = values === null || values === void 0 ? void 0 : values.country_code) !== null && _values$country_code !== void 0 ? _values$country_code : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.country_code
            });
            onSaveAddress && onSaveAddress(formState.changes);
            return _context2.a(2);
          case 2:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context2.p = 3;
            data = _objectSpread(_objectSpread({}, values), formState.changes);
            Object.keys(data).forEach(function (key) {
              if (data[key] === null) {
                delete data[key];
              }
            });
            _context2.n = 4;
            return ordering.users((userByToken === null || userByToken === void 0 ? void 0 : userByToken.id) || userId).addresses((_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.id).save(data, {
              accessToken: (userByToken === null || userByToken === void 0 || (_userByToken$session2 = userByToken.session) === null || _userByToken$session2 === void 0 ? void 0 : _userByToken$session2.token) || accessToken
            });
          case 4:
            _yield$ordering$users2 = _context2.v;
            content = _yield$ordering$users2.content;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              error: content.error ? content.result : null,
              result: content.result,
              changes: content.error ? formState.changes : {}
            }));
            if (content.error) {
              _context2.n = 6;
              break;
            }
            setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
              address: content.result
            }));
            if (!isSelectedAfterAdd) {
              _context2.n = 5;
              break;
            }
            _context2.n = 5;
            return changeAddress(content.result.id, {
              address: isEdit ? null : content.result,
              country_code: (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.country_code,
              type: options === null || options === void 0 ? void 0 : options.type,
              isEdit: isEdit
            });
          case 5:
            onSaveAddress && onSaveAddress(content.result);
          case 6:
            if (!userCustomerSetup) {
              _context2.n = 7;
              break;
            }
            _context2.n = 7;
            return setUserCustomer(userCustomerSetup, true);
          case 7:
            if (!avoidRefreshUserInfo) {
              refreshUserInfo();
            }
            _context2.n = 9;
            break;
          case 8:
            _context2.p = 8;
            _t2 = _context2.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false,
              error: [_t2.message],
              address: {}
            }));
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 8]]);
    }));
    return function saveAddress(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var getBusinessDeliveryZones = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(location) {
      var where, conditions, parameters, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (location) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true,
              businesses: []
            }));
            where = null;
            conditions = [];
            parameters = {
              location: "".concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng),
              type: 2,
              page: 1,
              page_size: 20
            };
            if (franchiseId) {
              conditions.push({
                attribute: 'franchise_id',
                value: franchiseId
              });
            }
            where = {
              conditions: conditions,
              conector: 'AND'
            };
            source = {};
            requestsState.businesses = source;
            fetchEndpoint = ordering.businesses().select(['delivery_zone', 'name', 'id', 'location', 'logo', 'slug', 'zones']).parameters(parameters).where(where);
            _context3.n = 2;
            return fetchEndpoint.get({
              cancelToken: source
            });
          case 2:
            _yield$fetchEndpoint$ = _context3.v;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: error,
              businesses: result.map(function (business) {
                return _objectSpread(_objectSpread({}, business === null || business === void 0 ? void 0 : business.location), {}, {
                  icon: business === null || business === void 0 ? void 0 : business.logo,
                  slug: business === null || business === void 0 ? void 0 : business.slug,
                  zones: business === null || business === void 0 ? void 0 : business.zones
                });
              }),
              result: result,
              fetched: true
            }));
            return _context3.a(2, result);
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            if (_t3.constructor.name !== 'Cancel') {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: true,
                fetched: true,
                result: [_t3.message]
              }));
            }
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function getBusinessDeliveryZones(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getUserByToken = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var requestOptions, response, _yield$response$json, error, result, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(props.accessToken)
              }
            };
            _context4.n = 1;
            return fetch("".concat(ordering.root, "/users/me"), requestOptions);
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context4.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (error) {
              _context4.n = 3;
              break;
            }
            setUserByToken(result);
            return _context4.a(2);
          case 3:
            handleGoToLogin && handleGoToLogin();
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            handleGoToLogin && handleGoToLogin();
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 4]]);
    }));
    return function getUserByToken() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
      address: address || {}
    }));
  }, [address]);
  (0, _react.useEffect)(function () {
    if (addressId && !address) {
      loadAddress(userId, addressId);
    }
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      if (requestsState.address) {
        requestsState.address.cancel();
      }
    };
  }, []);

  /**
  * Cancel businesses request
  */
  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);
  (0, _react.useEffect)(function () {
    if (props.confirmAddress) {
      getUserByToken();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    showField: showField,
    updateChanges: updateChanges,
    handleChangeInput: handleChangeInput,
    isRequiredField: isRequiredField,
    saveAddress: saveAddress,
    addressState: addressState,
    setIsEdit: function setIsEdit(val) {
      return _setIsEdit(val);
    },
    businessesList: businessesList,
    getBusinessDeliveryZones: getBusinessDeliveryZones
  })));
};
AddressForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Prop to set address after add
   */
  isSelectedAfterAdd: _propTypes.default.bool,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useValidationFileds: _propTypes.default.bool,
  /**
   * Address object to edit
   */
  address: _propTypes.default.object,
  /**
   * User id of the address to load from Ordering API
   * Omit if you use a SessionProvier context and the address is of the logged user
   */
  userId: _propTypes.default.number,
  /**
   * Address id to edit and load from Ordering API
   */
  addressId: _propTypes.default.number,
  /**
   * Address id to edit and load from Ordering API
   */
  onSaveAddress: _propTypes.default.func,
  /**
   * Custom function
   */
  onSaveCustomAddress: _propTypes.default.func,
  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressForm.defaultProps = {
  useValidationFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};