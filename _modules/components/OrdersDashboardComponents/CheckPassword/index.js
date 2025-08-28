"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckPassword = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApiContext = require("../../../contexts/ApiContext");
var _SessionContext = require("../../../contexts/SessionContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
var CheckPassword = exports.CheckPassword = function CheckPassword(props) {
  var UIComponent = props.UIComponent,
    defaultConfirmTab = props.defaultConfirmTab;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useState = (0, _react.useState)({
      result: null,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    checkPasswordStatus = _useState2[0],
    setCheckPasswordStatus = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    checkCodeState = _useState4[0],
    setCheckCodeState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      email: '',
      cellphone: '',
      password: ''
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    credentials = _useState6[0],
    setCredentials = _useState6[1];
  var _useState7 = (0, _react.useState)(defaultConfirmTab),
    _useState8 = _slicedToArray(_useState7, 2),
    confirmTab = _useState8[0],
    setConfirmTab = _useState8[1];
  var _useState9 = (0, _react.useState)('email'),
    _useState0 = _slicedToArray(_useState9, 2),
    otpType = _useState0[0],
    setOtpType = _useState0[1];
  var _useState1 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    otpState = _useState10[0],
    setOtpState = _useState10[1];

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  var handleChangeTab = function handleChangeTab(tab) {
    setConfirmTab(tab);
  };

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeInput = function handleChangeInput(e) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  /**
   * Update credential data
   */
  var handleChangeCredentials = function handleChangeCredentials(changes) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), changes));
  };

  /**
   * Method to confirm password from API
   */
  var getCheckPassword = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var requestOptions, response, content, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setCheckPasswordStatus(_objectSpread(_objectSpread({}, checkPasswordStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                password: credentials === null || credentials === void 0 ? void 0 : credentials.password
              })
            };
            _context.n = 1;
            return fetch("".concat(ordering.root, "/users/check_password"), requestOptions);
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            content = _context.v;
            if (!content.error) {
              setCheckPasswordStatus(_objectSpread(_objectSpread({}, checkPasswordStatus), {}, {
                loading: false,
                result: content.result,
                error: null
              }));
            } else {
              setCheckPasswordStatus(_objectSpread(_objectSpread({}, checkPasswordStatus), {}, {
                loading: false,
                error: content.result
              }));
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setCheckPasswordStatus(_objectSpread(_objectSpread({}, checkPasswordStatus), {}, {
              loading: false,
              error: _t
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function getCheckPassword() {
      return _ref.apply(this, arguments);
    };
  }();
  var generateOtpCode = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            body = {
              type: 5,
              channel: otpType === 'email' ? 1 : 2,
              size: 6
            };
            email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
            cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
            countryPhoneCode = (values === null || values === void 0 ? void 0 : values.countryPhoneCode) || (values === null || values === void 0 ? void 0 : values.country_phone_code) || credentials.country_phone_code;
            _context2.p = 1;
            if (otpType === 'cellphone') {
              body.country_phone_code = countryPhoneCode;
              body.cellphone = cellphone;
              setCredentials({
                cellphone: cellphone,
                country_phone_code: countryPhoneCode
              });
            } else {
              body.email = email;
              setCredentials({
                email: email
              });
            }
            _context2.n = 2;
            return fetch("".concat(ordering.root, "/codes/generate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(body)
            });
          case 2:
            response = _context2.v;
            _context2.n = 3;
            return response.json();
          case 3:
            _yield$response$json = _context2.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              _context2.n = 4;
              break;
            }
            setCheckCodeState(_objectSpread(_objectSpread({}, checkCodeState), {}, {
              result: {
                result: result,
                error: null
              }
            }));
            return _context2.a(2);
          case 4:
            setCheckCodeState(_objectSpread(_objectSpread({}, checkCodeState), {}, {
              result: {
                error: result
              }
            }));
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            setCheckCodeState(_objectSpread(_objectSpread({}, checkCodeState), {}, {
              result: {
                error: _t2.message
              }
            }));
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 5]]);
    }));
    return function generateOtpCode(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    checkPasswordStatus: checkPasswordStatus,
    getCheckPassword: getCheckPassword,
    confirmTab: confirmTab,
    setOtpType: setOtpType,
    otpType: otpType,
    handleChangeTab: handleChangeTab,
    setOtpState: setOtpState,
    otpState: otpState,
    generateOtpCode: generateOtpCode,
    checkCodeState: checkCodeState,
    credentials: credentials,
    handleChangeInput: handleChangeInput,
    handleChangeCredentials: handleChangeCredentials
  })));
};
CheckPassword.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
CheckPassword.defaultProps = {
  defaultConfirmTab: 'password',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};