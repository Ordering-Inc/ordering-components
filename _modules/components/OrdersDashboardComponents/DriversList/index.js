"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ToastContext = require("../../../contexts/ToastContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
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
var DriversList = exports.DriversList = function DriversList(props) {
  var drivers = props.drivers,
    UIComponent = props.UIComponent,
    propsToFetch = props.propsToFetch,
    isSearchByName = props.isSearchByName,
    isSearchByCellphone = props.isSearchByCellphone,
    isOrderDrivers = props.isOrderDrivers,
    orderId = props.orderId;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var requestsState = {};
  var _useState = (0, _react.useState)({
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    driverActionStatus = _useState2[0],
    setDriverActionStatus = _useState2[1];
  var _useState3 = (0, _react.useState)({
      loading: true,
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    companyActionStatus = _useState4[0],
    setCompanyActionStatus = _useState4[1];
  var socket = (0, _WebsocketContext.useWebsocket)();

  /**
   * Get session
   */
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];

  /**
   * Array to save drivers
   */
  var _useState5 = (0, _react.useState)({
      drivers: [],
      loading: true,
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    driversList = _useState6[0],
    setDriversList = _useState6[1];
  /**
   * Array to save companys
   */
  var _useState7 = (0, _react.useState)({
      companys: [],
      loading: true,
      error: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    companysList = _useState8[0],
    setCompanysList = _useState8[1];
  /**
   * Array to save online drivers
   */
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    onlineDrivers = _useState0[0],
    setOnlineDrivers = _useState0[1];
  /**
   * Array to save offline drivers
   */
  var _useState1 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    offlineDrivers = _useState10[0],
    setOfflineDrivers = _useState10[1];
  /**
   * state for drivers online / offline filter
   */
  var _useState11 = (0, _react.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    driversIsOnline = _useState12[0],
    setDriversIsOnline = _useState12[1];
  /**
   * state for drivers busy / not busy sub filter
   */
  var _useState13 = (0, _react.useState)({
      busy: true,
      notBusy: true
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    driversSubfilter = _useState14[0],
    setDriversSubfilter = _useState14[1];
  /**
   * search value
   */
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    searchValue = _useState16[0],
    setSearchValue = _useState16[1];

  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    if (search !== searchValue) {
      setSearchValue(search);
    }
  };

  /**
   * Method to assign driver to order from API
   * @param {object} assign assigned order id and driver id
   */
  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(assign) {
      var source, _yield$ordering$setAc, content, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setDriverActionStatus(_objectSpread(_objectSpread({}, driverActionStatus), {}, {
              loading: true
            }));
            source = {};
            requestsState.assignDriver = source;
            _context.n = 1;
            return ordering.setAccessToken(session.token).orders(assign.orderId).save({
              driver_id: assign.driverId
            }, {
              cancelToken: source
            });
          case 1:
            _yield$ordering$setAc = _context.v;
            content = _yield$ordering$setAc.content;
            setDriverActionStatus({
              loading: false,
              error: content.error ? content.result : null
            });
            if (!content.error) {
              if (assign.driverId) {
                showToast(_ToastContext.ToastType.Success, t('ORDER_DRIVER_ASSIGNED', 'Driver assigned to order'));
              } else {
                showToast(_ToastContext.ToastType.Success, t('ORDER_DRIVER_REMOVED', 'Driver removed from the order'));
              }
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            setDriverActionStatus(_objectSpread(_objectSpread({}, driverActionStatus), {}, {
              loading: false,
              error: [_t.message]
            }));
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function handleAssignDriver(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
  * Method to assign driver_company to order from API
  * @param {object} assign assigned order_id and driver_company_id
  */
  var handleAssignDriverCompany = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(assign) {
      var requestOptions, response, _yield$response$json, error, result, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setCompanyActionStatus(_objectSpread(_objectSpread({}, companyActionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              },
              body: JSON.stringify({
                driver_company_id: assign.companyId
              })
            };
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/orders/").concat(assign.orderId), requestOptions);
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context2.v;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            setCompanyActionStatus({
              loading: false,
              error: result.error ? result.result : null
            });
            if (!error) {
              if (assign.driverId) {
                showToast(_ToastContext.ToastType.Success, t('ORDER_COMPANY_ASSIGNED', 'Company assigned to order'));
              } else {
                showToast(_ToastContext.ToastType.Success, t('ORDER_COMPANY_REMOVED', 'Company removed from the order'));
              }
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setCompanyActionStatus(_objectSpread(_objectSpread({}, companyActionStatus), {}, {
              loading: false,
              error: [_t2.message]
            }));
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function handleAssignDriverCompany(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * change online state for drivers
   * @param {Boolean} isOnline
   */
  var handleChangeDriverIsOnline = function handleChangeDriverIsOnline(isOnline) {
    setDriversIsOnline(isOnline);
  };

  /**
   * sub filter for drivers
   * @param {Object} subFilter
   */
  var handleChangeDriversSubFilter = function handleChangeDriversSubFilter(subFilter) {
    setDriversSubfilter(subFilter);
  };

  /**
   * Method to get online/offline drivers
   * @param {Array} drivers
   */
  var getOnlineOfflineDrivers = function getOnlineOfflineDrivers(drivers) {
    var _onlineDrivers;
    var _offlineDrivers;
    if (driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && driver.available;
      });
      _offlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && !driver.available;
      });
    } else if (driversSubfilter.busy && !driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && driver.available && driver.busy;
      });
      _offlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && !driver.available && driver.busy;
      });
    } else if (!driversSubfilter.busy && driversSubfilter.notBusy) {
      _onlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && driver.available && !driver.busy;
      });
      _offlineDrivers = drivers.filter(function (driver) {
        return driver.enabled && !driver.available && !driver.busy;
      });
    } else {
      _onlineDrivers = [];
      _offlineDrivers = [];
    }
    setOnlineDrivers(_onlineDrivers);
    setOfflineDrivers(_offlineDrivers);
  };

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var source, where, conditions, searchConditions, _yield$ordering$setAc2, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: true
            }));
            source = {};
            requestsState.drivers = source;
            where = null;
            conditions = [];
            conditions.push({
              attribute: 'level',
              value: [4]
            });
            if (searchValue) {
              searchConditions = [];
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
                searchConditions.push({
                  attribute: 'lastname',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByCellphone) {
                searchConditions.push({
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            _context3.n = 1;
            return ordering.setAccessToken(session.token).users().select(propsToFetch).where(where).get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$setAc2 = _context3.v;
            result = _yield$ordering$setAc2.content.result;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              drivers: result
            }));
            getOnlineOfflineDrivers(result);
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t3 = _context3.v;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: _t3.message
            }));
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function getDrivers() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Method to get the drivers of order from API
   */
  var getOrderDrivers = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var requestOptions, response, _yield$response$json2, error, result, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: true
            }));
            setCompanysList(_objectSpread(_objectSpread({}, companysList), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(session.token)
              }
            };
            _context4.n = 1;
            return fetch("".concat(ordering.root, "/controls/orders/").concat(orderId), requestOptions);
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            _yield$response$json2 = _context4.v;
            error = _yield$response$json2.error;
            result = _yield$response$json2.result;
            setDriversList({
              loading: false,
              drivers: error ? [] : result === null || result === void 0 ? void 0 : result.drivers,
              error: error ? result : null
            });
            setCompanysList({
              loading: false,
              companys: error ? [] : result === null || result === void 0 ? void 0 : result.driver_companies,
              error: error ? result : null
            });
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              error: _t4.message
            }));
            setCompanysList(_objectSpread(_objectSpread({}, companysList), {}, {
              loading: false,
              error: _t4.message
            }));
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function getOrderDrivers() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * listen for busy/not busy filter
   */
  (0, _react.useEffect)(function () {
    getOnlineOfflineDrivers(driversList.drivers);
  }, [driversSubfilter]);
  (0, _react.useEffect)(function () {
    if (drivers) {
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers,
        loading: false
      }));
      getOnlineOfflineDrivers(drivers);
    } else {
      if (isOrderDrivers) {
        getOrderDrivers();
      } else {
        getDrivers();
      }
    }
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, [drivers, searchValue]);

  /**
   * Listening driver change
   */
  (0, _react.useEffect)(function () {
    if (session !== null && session !== void 0 && session.loading) return;
    var handleUpdateDriver = function handleUpdateDriver(driver) {
      var found = driversList.drivers.find(function (_driver) {
        return _driver.id === driver.id;
      });
      var _drivers = [];
      if (found) {
        _drivers = driversList.drivers.filter(function (_driver) {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver);
          }
          return true;
        });
      } else {
        if (!isOrderDrivers) {
          _drivers = [].concat(_toConsumableArray(driversList.drivers), [driver]);
        } else {
          _drivers = _toConsumableArray(driversList.drivers);
        }
      }
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: _drivers
      }));
    };
    var handleTrackingDriver = function handleTrackingDriver(trackingData) {
      var drivers = [];
      drivers = driversList.drivers.filter(function (_driver) {
        if (_driver.id === trackingData.driver_id) {
          if (typeof trackingData.location === 'string') {
            var trackingLocation = trackingData.location;
            var _location = trackingLocation.replaceAll('\\', '');
            var location = JSON.parse(_location);
            _driver.location = location;
          } else {
            _driver.location = trackingData.location;
          }
        }
        return true;
      });
      setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
        drivers: drivers
      }));
    };
    socket.on('drivers_update', handleUpdateDriver);
    socket.on('tracking_driver', handleTrackingDriver);
    return function () {
      socket.off('drivers_update', handleUpdateDriver);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [socket, session === null || session === void 0 ? void 0 : session.loading, driversList.drivers]);
  (0, _react.useEffect)(function () {
    getOnlineOfflineDrivers(driversList.drivers);
  }, [driversList.drivers]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    driversList: driversList,
    companysList: companysList,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    driverActionStatus: driverActionStatus,
    driversIsOnline: driversIsOnline,
    driversSubfilter: driversSubfilter,
    searchValue: searchValue,
    handleAssignDriverCompany: handleAssignDriverCompany,
    handleChangeSearch: handleChangeSearch,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    handleAssignDriver: handleAssignDriver
  })));
};
DriversList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
DriversList.defaultProps = {
  propsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};