"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _OrderContext = require("../../contexts/OrderContext");
var _ApiContext = require("../../contexts/ApiContext");
var _UtilsContext = require("../../contexts/UtilsContext");
var _SessionContext = require("../../contexts/SessionContext");
var _ToastContext = require("../../contexts/ToastContext");
var _LanguageContext = require("../../contexts/LanguageContext");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _isBetween = _interopRequireDefault(require("dayjs/plugin/isBetween"));
var _WebsocketContext = require("../../contexts/WebsocketContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t4 in e) "default" !== _t4 && {}.hasOwnProperty.call(e, _t4) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t4)) && (i.get || i.set) ? o(f, _t4, i) : f[_t4] = e[_t4]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
_dayjs.default.extend(_timezone.default);
_dayjs.default.extend(_isBetween.default);
var BusinessController = exports.BusinessController = function BusinessController(props) {
  var business = props.business,
    businessId = props.businessId,
    businessAttributes = props.businessAttributes,
    onBusinessClick = props.onBusinessClick,
    handleCustomClick = props.handleCustomClick,
    isDisabledInterval = props.isDisabledInterval,
    minutesToCloseSoon = props.minutesToCloseSoon,
    UIComponent = props.UIComponent,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    favoriteIds = props.favoriteIds,
    setFavoriteIds = props.setFavoriteIds;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];

  /**
   * This must be containt business object data
   */
  var _useState = (0, _react.useState)({
      business: business,
      loading: false,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessState = _useState2[0],
    setBusinessState = _useState2[1];
  /**
   * This must be containt a boolean to indicate if a business is close or not
   */
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isBusinessClose = _useState4[0],
    setIsBusinessClose = _useState4[1];
  /**
   * Order context data
   */
  var _useOrder = (0, _OrderContext.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  /**
   * formatPrice function
   */
  var _useUtils = (0, _UtilsContext.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  /**
   * timer in minutes when the business is going to close
   */

  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    businessWillCloseSoonMinutes = _useState6[0],
    setBusinessWillCloseSoonMinutes = _useState6[1];
  var _useState7 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    actionState = _useState8[0],
    setActionState = _useState8[1];

  /**
   * Method to get business from SDK
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            _context.p = 1;
            _context.n = 2;
            return ordering.businesses(businessId).select(businessAttributes).get();
          case 2:
            _yield$ordering$busin = _context.v;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error) {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: result,
                loading: false
              }));
            } else {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: result[0],
                loading: false,
                error: error
              }));
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: _t.message
            }));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to return business offert to show
   * @param {object} offer
   */
  var getBusinessOffer = function getBusinessOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return maxOffer.rate !== 0 ? (maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate_type) === 1 ? "".concat(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate, "%") : parsePrice(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate) : null;
  };
  /**
   * Method to return business max offer to show
   * @param {object} max offer
   */
  var getBusinessMaxOffer = function getBusinessMaxOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return maxOffer;
  };
  /**
   * Method to format date
   * @param {object} time
   */
  var formatDate = function formatDate(time) {
    var formatHour = (time === null || time === void 0 ? void 0 : time.hour) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.hour) : time === null || time === void 0 ? void 0 : time.hour;
    var formatMinute = (time === null || time === void 0 ? void 0 : time.minute) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.minute) : time === null || time === void 0 ? void 0 : time.minute;
    return time ? "".concat(formatHour, ":").concat(formatMinute) : 'none';
  };

  /**
   * Method to format numbers (only 2 decimals)
   * @param {number} num
   */
  var formatNumber = function formatNumber(num) {
    return Math.round(num * 1e2) / 1e2;
  };

  /**
   * Method to add, remove favorite info for user from API
   */
  var handleFavoriteBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var isAdd,
        _businessState$busine,
        _businessState$busine2,
        changes,
        requestOptions,
        fetchEndpoint,
        response,
        content,
        _businessState$busine3,
        _businessState$busine6,
        _businessState$busine4,
        updateIds,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            isAdd = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
            if (!(!(businessState !== null && businessState !== void 0 && businessState.business) || !user)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'loading'));
            _context2.p = 2;
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: true,
              error: null
            }));
            changes = {
              object_id: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.id
            };
            requestOptions = _objectSpread({
              method: isAdd ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            }, isAdd && {
              body: JSON.stringify(changes)
            });
            fetchEndpoint = isAdd ? "".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/favorite_businesses") : "".concat(ordering.root, "/users/").concat(user.id, "/favorite_businesses/").concat(businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.id);
            _context2.n = 3;
            return fetch(fetchEndpoint, requestOptions);
          case 3:
            response = _context2.v;
            _context2.n = 4;
            return response.json();
          case 4:
            content = _context2.v;
            if (!content.error) {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false
              }));
              handleUpdateBusinessList && handleUpdateBusinessList(businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id, {
                favorite: isAdd
              });
              if (favoriteIds) {
                updateIds = isAdd ? [].concat(_toConsumableArray(favoriteIds), [businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id]) : favoriteIds.filter(function (item) {
                  var _businessState$busine5;
                  return item !== (businessState === null || businessState === void 0 || (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.id);
                });
                setFavoriteIds(updateIds);
              }
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: _objectSpread(_objectSpread({}, businessState.business), {}, {
                  favorite: isAdd
                })
              }));
              props.handleCustomUpdate && props.handleCustomUpdate(businessState === null || businessState === void 0 || (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.id, {
                favorite: isAdd
              });
              showToast(_ToastContext.ToastType.Success, isAdd ? t('FAVORITE_ADDED', 'Favorite added') : t('FAVORITE_REMOVED', 'Favorite removed'));
            } else {
              setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
                loading: false,
                error: content.result
              }));
              showToast(_ToastContext.ToastType.Error, t(content.result, 'Error adding favorite'));
            }
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            setActionState(_objectSpread(_objectSpread({}, actionState), {}, {
              loading: false,
              error: [_t2.message]
            }));
            showToast(_ToastContext.ToastType.Error, [_t2.message]);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 5]]);
    }));
    return function handleFavoriteBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (!isDisabledInterval) {
      var _businessState$busine7, _businessState$busine8, _businessState$busine9;
      var timeout = null;
      var timeoutCloseSoon = null;
      if (!((_businessState$busine7 = businessState.business) !== null && _businessState$busine7 !== void 0 && _businessState$busine7.timezone)) return;
      var currentDate = (0, _dayjs.default)().tz((_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : _businessState$busine8.timezone);
      var lapse = null;
      if ((_businessState$busine9 = businessState.business) !== null && _businessState$busine9 !== void 0 && (_businessState$busine9 = _businessState$busine9.today) !== null && _businessState$busine9 !== void 0 && _businessState$busine9.enabled) {
        var _businessState$busine0;
        lapse = (_businessState$busine0 = businessState.business) === null || _businessState$busine0 === void 0 || (_businessState$busine0 = _businessState$busine0.today) === null || _businessState$busine0 === void 0 || (_businessState$busine0 = _businessState$busine0.lapses) === null || _businessState$busine0 === void 0 ? void 0 : _businessState$busine0.find(function (lapse) {
          var from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute);
          var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
          return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix();
        });
      }
      if (lapse) {
        var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
        var timeToClose = (to.unix() - currentDate.unix()) * 1000;
        if (timeToClose <= minutesToCloseSoon * 60000 && timeToClose > 0) {
          setBusinessWillCloseSoonMinutes(timeToClose / 60000);
        } else if (timeToClose > minutesToCloseSoon * 60000) {
          timeoutCloseSoon = setTimeout(function () {
            setBusinessWillCloseSoonMinutes(minutesToCloseSoon);
          }, timeToClose - minutesToCloseSoon * 60000);
        }
        timeout = setTimeout(function () {
          setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
            business: _objectSpread(_objectSpread({}, businessState.business), {}, {
              open: false
            })
          }));
          setIsBusinessClose(true);
        }, timeToClose);
      }
      return function () {
        timeout && clearTimeout(timeout);
        timeoutCloseSoon && clearTimeout(timeoutCloseSoon);
      };
    }
  }, []);
  (0, _react.useEffect)(function () {
    var timeout = null;
    if (businessWillCloseSoonMinutes) {
      timeout = setTimeout(function () {
        setBusinessWillCloseSoonMinutes(businessWillCloseSoonMinutes - 1);
      }, 60000);
    }
    return function () {
      timeout && clearTimeout(timeout);
    };
  }, [businessWillCloseSoonMinutes]);
  (0, _react.useEffect)(function () {
    if (business) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: business
      }));
    } else if (!business) {
      getBusiness();
    }
  }, [business]);
  var updateBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(businessId) {
      var updateParams,
        _yield$ordering$busin3,
        _yield$ordering$busin4,
        result,
        error,
        _args3 = arguments,
        _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            updateParams = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: true
            }));
            _context3.p = 1;
            _context3.n = 2;
            return ordering.businesses(businessId).save(updateParams);
          case 2:
            _yield$ordering$busin3 = _context3.v;
            _yield$ordering$busin4 = _yield$ordering$busin3.content;
            result = _yield$ordering$busin4.result;
            error = _yield$ordering$busin4.error;
            if (!error) {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: result,
                loading: false
              }));
            } else {
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                business: result[0],
                loading: false,
                error: error
              }));
            }
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
              loading: false,
              error: _t3.message
            }));
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function updateBusiness(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _businessState$busine1;
    if (!favoriteIds) return;
    if (favoriteIds !== null && favoriteIds !== void 0 && favoriteIds.includes(businessState === null || businessState === void 0 || (_businessState$busine1 = businessState.business) === null || _businessState$busine1 === void 0 ? void 0 : _businessState$busine1.id)) {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
          favorite: true
        })
      }));
    } else {
      setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
        business: _objectSpread(_objectSpread({}, businessState === null || businessState === void 0 ? void 0 : businessState.business), {}, {
          favorite: false
        })
      }));
    }
  }, [favoriteIds]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    updateBusiness: updateBusiness,
    orderState: orderState,
    isBusinessClose: isBusinessClose,
    businessState: businessState,
    business: businessState.business,
    formatDate: formatDate,
    formatNumber: formatNumber,
    getBusinessOffer: getBusinessOffer,
    getBusinessMaxOffer: getBusinessMaxOffer,
    handleClick: handleCustomClick || onBusinessClick,
    businessWillCloseSoonMinutes: businessWillCloseSoonMinutes,
    handleFavoriteBusiness: handleFavoriteBusiness
  })));
};
BusinessController.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Business, contains a object with all business properties
   */
  business: _propTypes.default.object,
  /**
   * businessId, this must be containt id or slug to get business from API
   */
  businessId: _propTypes.default.number,
  /**
   * businessAttributes, Array of attributes to get business from API
   */
  businessAttributes: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * onBusinessClick, function to get click event and return business object after default behavior
   */
  onBusinessClick: _propTypes.default.func,
  /**
   * handleCustomClick, function to get click event and return business object without default behavior
   */
  handleCustomClick: _propTypes.default.func,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessController.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  minutesToCloseSoon: 30
};