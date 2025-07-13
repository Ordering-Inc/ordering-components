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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
    _useState0 = _slicedToArray(_useState9, 2),
    singleNotifications = _useState0[0],
    setSingleNotifications = _useState0[1];
  var _useState1 = (0, _react.useState)({
      loading: false,
      result: {
        error: false
      }
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    verifyPhoneState = _useState10[0],
    setVerifyPhoneState = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null,
      result: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    removeAccountState = _useState12[0],
    setAccountState = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    cellphoneStartZero = _useState14[0],
    setCellphoneStartZero = _useState14[1];
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(changes, isImage, image) {
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
        _args = arguments,
        _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
            if (!handleButtonUpdateClick) {
              _context.n = 1;
              break;
            }
            return _context.a(2, handleButtonUpdateClick(userState.result.result, formState.changes));
          case 1:
            _context.p = 1;
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
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return ordering.users((props === null || props === void 0 || (_props$userData = props.userData) === null || _props$userData === void 0 ? void 0 : _props$userData.id) || userState.result.result.id).save({
              photo: image || formState.changes.photo
            }, {
              accessToken: accessToken
            });
          case 2:
            response = _context.v;
            _formState$changes = formState.changes, photo = _formState$changes.photo, _changes2 = _objectWithoutProperties(_formState$changes, _excluded);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : _changes2,
              result: response.content,
              loading: false
            }));
            _context.n = 5;
            break;
          case 3:
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
            _context.n = 4;
            return ordering.users((props === null || props === void 0 || (_props$userData3 = props.userData) === null || _props$userData3 === void 0 ? void 0 : _props$userData3.id) || userState.result.result.id).save(_changes3, {
              accessToken: accessToken
            });
          case 4:
            response = _context.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : {},
              result: response.content,
              loading: !!(changes !== null && changes !== void 0 && changes.confirmDataLayout) || false
            }));
          case 5:
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
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _t.message
              },
              loading: false
            }));
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6]]);
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(newValue) {
      var _session$user2, response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setUserState(_objectSpread(_objectSpread({}, userState), {}, {
              loadingDriver: true
            }));
            _context2.n = 1;
            return ordering.users(session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.id).save({
              available: newValue
            }, {
              accessToken: accessToken
            });
          case 1:
            response = _context2.v;
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
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            if (_t2.constructor.name !== 'Cancel') {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: false,
                result: {
                  error: true,
                  result: _t2.message
                }
              }));
            }
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(values) {
      var body, response, res, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            body = {
              cellphone: cellphoneStartZero || values.cellphone,
              country_phone_code: parseInt(values.country_phone_code)
            };
            _context3.p = 1;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: true
            }));
            _context3.n = 2;
            return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify(body)
            });
          case 2:
            response = _context3.v;
            _context3.n = 3;
            return response.json();
          case 3:
            res = _context3.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: res
            }));
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
              loading: false,
              result: {
                error: _t3.message
              }
            }));
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 4]]);
    }));
    return function sendVerifyPhoneCode(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var updatePromotions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(change, setState, state) {
      var _props$userData4, response, _change$setCustomerIn, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return ordering.users((props === null || props === void 0 || (_props$userData4 = props.userData) === null || _props$userData4 === void 0 ? void 0 : _props$userData4.id) || userState.result.result.id).save(change, {
              accessToken: accessToken
            });
          case 1:
            response = _context4.v;
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
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t4 = _context4.v;
            setState(_objectSpread(_objectSpread({}, state), {}, {
              result: {
                error: true,
                result: _t4.message
              },
              loading: false
            }));
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
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
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(userId) {
      var idToDelete, response, res, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            idToDelete = userId !== null && userId !== void 0 ? userId : session.user.id;
            _context5.p = 1;
            setAccountState(_objectSpread(_objectSpread({}, removeAccountState), {}, {
              loading: true
            }));
            _context5.n = 2;
            return fetch("".concat(ordering.root, "/users/").concat(idToDelete), {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 2:
            response = _context5.v;
            _context5.n = 3;
            return response.json();
          case 3:
            res = _context5.v;
            setAccountState(_objectSpread(_objectSpread({}, removeAccountState), {}, {
              loading: false,
              result: res === null || res === void 0 ? void 0 : res.result,
              error: res === null || res === void 0 ? void 0 : res.error
            }));
            return _context5.a(2, res.result);
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            setAccountState(_objectSpread(_objectSpread({}, removeAccountState), {}, {
              loading: false,
              error: _t5.message
            }));
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 4]]);
    }));
    return function handleRemoveAccount(_x9) {
      return _ref6.apply(this, arguments);
    };
  }();
  var handleRequestCustomerAddress = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _props$userData5, response, _yield$response$json, result, error, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _context6.n = 1;
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
          case 1:
            response = _context6.v;
            _context6.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context6.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (!error) {
              _context6.n = 3;
              break;
            }
            showToast(_ToastContext.ToastType.Error, result, 5000);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false
            }));
            return _context6.a(2);
          case 3:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false
            }));
            setUserConfirmPhone && setUserConfirmPhone({
              result: result,
              open: false
            });
            _context6.n = 5;
            break;
          case 4:
            _context6.p = 4;
            _t6 = _context6.v;
            showToast(_ToastContext.ToastType.Error, _t6.message, 5000);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 4]]);
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