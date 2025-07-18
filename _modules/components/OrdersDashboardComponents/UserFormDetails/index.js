"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _ValidationsFieldsContext = require("../../../contexts/ValidationsFieldsContext");
var _excluded = ["photo"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
    handleSuccessAdd = props.handleSuccessAdd,
    isProfessional = props.isProfessional;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    session = _useSession2[0],
    changeUser = _useSession2[1].changeUser;
  var _useValidationsFields = (0, _ValidationsFieldsContext.useValidationFields)(),
    _useValidationsFields2 = _slicedToArray(_useValidationsFields, 1),
    validationFields = _useValidationsFields2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEdit = _useState2[0],
    setIsEdit = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: false,
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
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDriverGroupIds = _useState8[0],
    setSelectedDriverGroupIds = _useState8[1];
  var requestsState = {};
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  (0, _react.useEffect)(function () {
    if (!user) return;
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
          result: response.content
        });
        if (response.content.result) {
          changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
        }
      }).catch(function (err) {
        if (err.constructor.name !== 'Cancel') {
          setUserState({
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
  }, [session.loading, user]);

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
      var response, content, _session$user, requestOptions, _response, _formState$changes, photo, _changes, _session$user2, _requestOptions, _response2, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!handleButtonUpdateClick) {
              _context.n = 1;
              break;
            }
            return _context.a(2, handleButtonUpdateClick(userState.result.result, formState.changes));
          case 1:
            _context.p = 1;
            content = {};
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            if (changes) {
              formState.changes = _objectSpread(_objectSpread({}, formState.changes), changes);
            }
            if (!isImage) {
              _context.n = 7;
              break;
            }
            if (!(((_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) !== 2)) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return ordering.users((user === null || user === void 0 ? void 0 : user.id) || userState.result.result.id).save({
              photo: image || formState.changes.photo
            }, {
              accessToken: accessToken
            });
          case 2:
            response = _context.v;
            content = response.content;
            _context.n = 6;
            break;
          case 3:
            requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                photo: image || formState.changes.photo
              })
            };
            _context.n = 4;
            return fetch("".concat(ordering.root, "/professionals/").concat((user === null || user === void 0 ? void 0 : user.id) || userState.result.result.id), requestOptions);
          case 4:
            _response = _context.v;
            _context.n = 5;
            return _response.json();
          case 5:
            content = _context.v;
          case 6:
            _formState$changes = formState.changes, photo = _formState$changes.photo, _changes = _objectWithoutProperties(_formState$changes, _excluded);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: content.error ? formState.changes : _changes,
              result: content,
              loading: false
            }));
            _context.n = 13;
            break;
          case 7:
            if (!(((_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) !== 2)) {
              _context.n = 9;
              break;
            }
            _context.n = 8;
            return ordering.users((user === null || user === void 0 ? void 0 : user.id) || userState.result.result.id).save(formState.changes, {
              accessToken: accessToken
            });
          case 8:
            response = _context.v;
            content = response.content;
            _context.n = 12;
            break;
          case 9:
            _requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify(formState.changes)
            };
            _context.n = 10;
            return fetch("".concat(ordering.root, "/professionals/").concat((user === null || user === void 0 ? void 0 : user.id) || userState.result.result.id), _requestOptions);
          case 10:
            _response2 = _context.v;
            _context.n = 11;
            return _response2.json();
          case 11:
            content = _context.v;
          case 12:
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: content.error ? formState.changes : {},
              result: content,
              loading: false
            }));
          case 13:
            if (!content.error) {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                result: _objectSpread(_objectSpread({}, userState.result), content)
              }));
              if (useSessionUser) {
                changeUser(_objectSpread(_objectSpread({}, session.user), content.result));
              }
              if (handleSuccessUpdate) {
                handleSuccessUpdate(content.result);
              }
            }
            _context.n = 15;
            break;
          case 14:
            _context.p = 14;
            _t = _context.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _t.message
              },
              loading: false
            }));
          case 15:
            return _context.a(2);
        }
      }, _callee, null, [[1, 14]]);
    }));
    return function handleUpdateClick(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleAddClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var changes, response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            changes = _objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes);
            if (isProfessional) Object.assign(changes, {
              level: 8
            });
            _context2.n = 1;
            return ordering.users().save(changes, {
              accessToken: accessToken
            });
          case 1:
            response = _context2.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              changes: response.content.error ? formState.changes : {},
              result: response.content,
              loading: false
            }));
            if (!response.content.error) {
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                result: _objectSpread(_objectSpread({}, userState.result), response.content)
              }));
              if (handleSuccessAdd) {
                handleSuccessAdd(response.content.result);
              }
              if (props.onClose) {
                props.onClose();
              }
            }
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              result: {
                error: true,
                result: _t2.message
              },
              loading: false
            }));
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function handleAddClick() {
      return _ref2.apply(this, arguments);
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
   * Update credential data
   * @param {string} type user filed name
   */
  var handleChangeSwtich = function handleChangeSwtich(type, value) {
    var currentChanges = _defineProperty({}, type, value);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };

  /**
   * Update credential data
   * @param {number} level user level
   */
  var handleChangeUserType = function handleChangeUserType(level) {
    var currentChanges = {
      level: level
    };
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
   * Update occupation id
   * @param {Number} id
   */
  var handleChangeOccupation = function handleChangeOccupation(id) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        occupation_id: id
      })
    }));
  };

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;
    return !useValidationFields || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && _validationFields$fie.checkout[fieldName]) || !validationFields.loading && ((_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.checkout[fieldName]) && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.checkout[fieldName].enabled);
  };

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie4, _validationFields$fie5, _validationFields$fie6;
    return useValidationFields && !validationFields.loading && ((_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.checkout[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.checkout[fieldName].enabled) && ((_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.checkout[fieldName].required);
  };
  var handleDriverGroupClick = function handleDriverGroupClick(groupId) {
    var updatedDriverGroupIds = [];
    if (selectedDriverGroupIds.includes(groupId)) {
      updatedDriverGroupIds = selectedDriverGroupIds.filter(function (id) {
        return id !== groupId;
      });
    } else {
      updatedDriverGroupIds = [].concat(_toConsumableArray(selectedDriverGroupIds), [groupId]);
    }
    setSelectedDriverGroupIds(updatedDriverGroupIds);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
        driver_groups_ids: updatedDriverGroupIds
      })
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isEdit: isEdit,
    cleanFormState: cleanFormState,
    formState: formState,
    userState: userState,
    validationFields: validationFields,
    showField: showField,
    setFormState: setFormState,
    handleChangeSwtich: handleChangeSwtich,
    isRequiredField: isRequiredField,
    handleChangeInput: handleChangeInput,
    handleButtonUpdateClick: handleUpdateClick,
    handleButtonAddClick: handleAddClick,
    handlechangeImage: handlechangeImage,
    toggleIsEdit: function toggleIsEdit() {
      return setIsEdit(!isEdit);
    },
    handleChangeUserType: handleChangeUserType,
    handleChangeOccupation: handleChangeOccupation,
    selectedDriverGroupIds: selectedDriverGroupIds,
    handleDriverGroupClick: handleDriverGroupClick
  })));
};
UserFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: _propTypes.default.bool,
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