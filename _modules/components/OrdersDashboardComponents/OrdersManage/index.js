"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _SessionContext = require("../../../contexts/SessionContext");
var _ApiContext = require("../../../contexts/ApiContext");
var _WebsocketContext = require("../../../contexts/WebsocketContext");
var _ConfigContext = require("../../../contexts/ConfigContext");
var _LanguageContext = require("../../../contexts/LanguageContext");
var _ToastContext = require("../../../contexts/ToastContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersManage = exports.OrdersManage = function OrdersManage(props) {
  var UIComponent = props.UIComponent,
    statusGroup = props.statusGroup,
    driversPropsToFetch = props.driversPropsToFetch,
    driverId = props.driverId,
    customerId = props.customerId,
    businessId = props.businessId,
    franchiseId = props.franchiseId,
    isOnlyDelivery = props.isOnlyDelivery;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _WebsocketContext.useWebsocket)();
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token,
    loading = _useSession2$.loading;
  var _useConfig = (0, _ConfigContext.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useLanguage = (0, _LanguageContext.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useToast = (0, _ToastContext.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var requestsState = {};
  var orderStatuesList = {
    pending: [0, 13],
    inProgress: [7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17]
  };
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(statusGroup || 'pending'),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersStatusGroup = _useState4[0],
    setOrdersStatusGroup = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    filterValues = _useState6[0],
    setFilterValues = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    timeStatus = _useState8[0],
    setTimeStatus = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    updateStatus = _useState0[0],
    setUpdateStatus = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    startMulitOrderStatusChange = _useState10[0],
    setStartMulitOrderStatusChange = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    actionStatus = _useState12[0],
    setActionStatus = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    deletedOrderIds = _useState14[0],
    setDeletedOrderIds = _useState14[1];
  var _useState15 = (0, _react.useState)({
      result: null,
      loading: false,
      error: false
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    numberOfOrdersByStatus = _useState16[0],
    setNumberOfOrdersByStatus = _useState16[1];
  var allowColumnsModel = {
    slaBar: {
      visable: false,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: -2
    },
    orderNumber: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: -1
    },
    dateTime: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: 0
    },
    externalId: {
      visable: false,
      title: t('EXTERNAL_ID', 'External id'),
      className: 'externalId',
      draggable: true,
      colSpan: 1,
      order: 1
    },
    status: {
      visable: true,
      title: t('STATUS', 'Status'),
      className: 'statusInfo',
      draggable: true,
      colSpan: 1,
      order: 2
    },
    agent: {
      visable: false,
      title: t('AGENT', 'Agent'),
      className: 'agent',
      draggable: true,
      colSpan: 1,
      order: 3
    },
    cartGroupId: {
      visable: true,
      title: t('GROUP_ORDER', 'Group Order'),
      className: 'groupOrderId',
      draggable: true,
      colSpan: 1,
      order: 4
    },
    driverGroupId: {
      visable: true,
      title: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id'),
      className: 'driverGroupId',
      draggable: true,
      colSpan: 1,
      order: 5
    },
    business: {
      visable: true,
      title: t('BUSINESS', 'Business'),
      className: 'businessInfo',
      draggable: true,
      colSpan: 1,
      order: 6
    },
    customer: {
      visable: true,
      title: t('CUSTOMER', 'Customer'),
      className: 'customerInfo',
      draggable: true,
      colSpan: 1,
      order: 7
    },
    driver: {
      visable: true,
      title: t('DRIVER', 'Driver'),
      className: 'driverInfo',
      draggable: true,
      colSpan: 1,
      order: 8
    },
    advanced: {
      visable: true,
      title: t('ADVANCED_LOGISTICS', 'Advanced logistics'),
      className: 'advanced',
      draggable: true,
      colSpan: 3,
      order: 9
    },
    timer: {
      visable: false,
      title: t('SLA_TIMER', 'SLA’s timer'),
      className: 'timer',
      draggable: true,
      colSpan: 1,
      order: 10
    },
    eta: {
      visable: true,
      title: t('ETA', 'ETA'),
      className: 'eta',
      draggable: true,
      colSpan: 1,
      order: 11
    },
    total: {
      visable: true,
      title: '',
      className: '',
      draggable: false,
      colSpan: 1,
      order: 12
    }
  };
  var _useState17 = (0, _react.useState)(allowColumnsModel),
    _useState18 = _slicedToArray(_useState17, 2),
    allowColumns = _useState18[0],
    setAllowColumns = _useState18[1];

  /**
   * Object to save driver group list
   */
  var _useState19 = (0, _react.useState)({
      groups: [],
      loading: false,
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    driverGroupList = _useState20[0],
    setDriverGroupList = _useState20[1];
  /**
   * Object to save drivers
   */
  var _useState21 = (0, _react.useState)({
      drivers: [],
      loading: true,
      error: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    driversList = _useState22[0],
    setDriversList = _useState22[1];
  /**
   * Object to save paymethods
   */
  var _useState23 = (0, _react.useState)({
      paymethods: [],
      loading: true,
      error: null
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    paymethodsList = _useState24[0],
    setPaymethodsList = _useState24[1];
  /**
   * Object to save businesses
   */
  var _useState25 = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    businessesList = _useState26[0],
    setBusinessesList = _useState26[1];
  /**
   * Array to save the cities
   */
  var _useState27 = (0, _react.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    citiesList = _useState28[0],
    setCitiesList = _useState28[1];

  /**
   * Object to save selected order ids
   */
  var _useState29 = (0, _react.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    selectedOrderIds = _useState30[0],
    setSelectedOrderIds = _useState30[1];
  /**
   * Object to save order substatuses
   */
  var _useState31 = (0, _react.useState)({
      pending: orderStatuesList.pending,
      inProgress: orderStatuesList.inProgress,
      completed: orderStatuesList.completed,
      cancelled: orderStatuesList.cancelled,
      all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    selectedSubOrderStatus = _useState32[0],
    setSelectedSubOrderStatus = _useState32[1];

  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */
  var handleSelectedOrderIds = function handleSelectedOrderIds(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);
    if (!_ids.includes(orderId)) {
      _ids.push(orderId);
    } else {
      _ids = _ids.filter(function (_id) {
        return _id !== orderId;
      });
    }
    setSelectedOrderIds(_ids);
  };
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */
  var handleRemoveSelectedOrderId = function handleRemoveSelectedOrderId(orderId) {
    var _ids = _toConsumableArray(selectedOrderIds);
    _ids = _ids.filter(function (_id) {
      return _id !== orderId;
    });
    setSelectedOrderIds(_ids);
  };

  /**
   * Change orders filter by statuses selected
   * @param {string} ordersStatusGroup orders status
   */
  var handleOrdersStatusGroupFilter = function handleOrdersStatusGroupFilter(statusGroup) {
    if (statusGroup === ordersStatusGroup) return;
    setOrdersStatusGroup(statusGroup);
    setSelectedOrderIds([]);
  };
  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };
  /**
   * Save filter type values
   * @param {object} types
   */
  var handleChangeFilterValues = function handleChangeFilterValues(types) {
    setFilterValues(types);
  };

  /**
   * save status for multi orders selected
   * @param {number} status order status
   */
  var handleChangeMultiOrdersStatus = function handleChangeMultiOrdersStatus(status) {
    setUpdateStatus(status);
    setStartMulitOrderStatusChange(true);
  };
  /**
   * Method to change multi orders status from API
   */
  var handleChangeMultiOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(orderId) {
      var requestOptions, response, _yield$response$json, result, error, _ordersIds, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify({
                status: updateStatus
              })
            };
            _context.n = 1;
            return fetch("".concat(ordering.root, "/orders/").concat(orderId), requestOptions);
          case 1:
            response = _context.v;
            _context.n = 2;
            return response.json();
          case 2:
            _yield$response$json = _context.v;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (parseInt(result.status) === updateStatus) {
              _ordersIds = _toConsumableArray(selectedOrderIds);
              _ordersIds.shift();
              if (_ordersIds.length === 0) {
                setStartMulitOrderStatusChange(false);
              }
              setSelectedOrderIds(_ordersIds);
            }
            setActionStatus({
              loading: false,
              error: error ? result : null
            });
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setActionStatus({
              loading: false,
              error: [_t.message]
            });
            setStartMulitOrderStatusChange(false);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }));
    return function handleChangeMultiOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Delete orders for orders selected
   */
  var handleDeleteMultiOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(code) {
      var payload, requestOptions, response, content, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            showToast(_ToastContext.ToastType.Info, t('LOADING', 'Loading'));
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            payload = {
              orders_id: selectedOrderIds
            };
            if (code) {
              payload.deleted_action_code = code;
            }
            requestOptions = {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              },
              body: JSON.stringify(payload)
            };
            _context2.n = 1;
            return fetch("".concat(ordering.root, "/orders"), requestOptions);
          case 1:
            response = _context2.v;
            _context2.n = 2;
            return response.json();
          case 2:
            content = _context2.v;
            if (!content.error) {
              setDeletedOrderIds(selectedOrderIds);
              setSelectedOrderIds([]);
              showToast(_ToastContext.ToastType.Success, t('ORDERS_DELETED', 'Orders deleted'));
            } else {
              setActionStatus({
                loading: true,
                error: content.result
              });
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            setActionStatus({
              loading: false,
              error: [_t2.message]
            });
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 3]]);
    }));
    return function handleDeleteMultiOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Method to get drivers from API
   */
  var getDrivers = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var source, _yield$ordering$setAc, result, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            source = {};
            requestsState.drivers = source;
            _context3.n = 1;
            return ordering.setAccessToken(token).users().select(driversPropsToFetch).where([{
              attribute: 'level',
              value: [4]
            }]).get({
              cancelToken: source
            });
          case 1:
            _yield$ordering$setAc = _context3.v;
            result = _yield$ordering$setAc.content.result;
            setDriversList(_objectSpread(_objectSpread({}, driversList), {}, {
              loading: false,
              drivers: result
            }));
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
  var getControlsOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var requestOptions, response, content, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context4.n = 1;
            return fetch("".concat(ordering.root, "/controls/orders"), requestOptions);
          case 1:
            response = _context4.v;
            _context4.n = 2;
            return response.json();
          case 2:
            content = _context4.v;
            if (!content.error) {
              setCitiesList(content.result.cities);
              setDriverGroupList(_objectSpread(_objectSpread({}, driverGroupList), {}, {
                loading: false,
                groups: content.result.driver_groups
              }));
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                loading: false,
                paymethods: content.result.paymethods
              }));
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                businesses: content.result.businesses
              }));
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false
              }));
            } else {
              setActionStatus({
                loading: false,
                error: content === null || content === void 0 ? void 0 : content.result
              });
            }
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            setActionStatus({
              loading: false,
              error: [_t4.message]
            });
          case 4:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3]]);
    }));
    return function getControlsOrders() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Listening driver change
   */
  (0, _react.useEffect)(function () {
    if (loading) return;
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
        _drivers = [].concat(_toConsumableArray(driversList.drivers), [driver]);
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
  }, [socket, loading, driversList.drivers]);
  var getOrderNumbersByStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var where, conditions, _filterValues$metafie, filterConditons, metafieldConditions, additionalConditions, searchConditions, requestOptions, response, content, _orderStatusNumbers, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            where = [];
            conditions = [];
            conditions.push({
              attribute: 'products',
              conditions: [{
                attribute: 'type',
                value: {
                  condition: '=',
                  value: 'item'
                }
              }]
            });
            if (Object.keys(filterValues).length > 0) {
              filterConditons = [];
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.statuses.length) > 0) {
                filterConditons.push({
                  attribute: 'status',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.statuses
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                filterConditons.push({
                  attribute: 'id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                  }
                });
              }
              if (filterValues !== null && filterValues !== void 0 && filterValues.externalId) {
                filterConditons.push({
                  attribute: 'external_id',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId, "%"))
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 || (_filterValues$metafie = filterValues.metafield) === null || _filterValues$metafie === void 0 ? void 0 : _filterValues$metafie.length) > 0) {
                metafieldConditions = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
                  return {
                    attribute: 'metafields',
                    conditions: [{
                      attribute: 'key',
                      value: item === null || item === void 0 ? void 0 : item.key
                    }, {
                      attribute: 'value',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(item === null || item === void 0 ? void 0 : item.value, "%"))
                      }
                    }],
                    conector: 'AND'
                  };
                });
                filterConditons.push({
                  conector: 'OR',
                  conditions: metafieldConditions
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime) !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '>=',
                    value: encodeURI(filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryFromDatetime)
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime) !== null) {
                filterConditons.push({
                  attribute: 'delivery_datetime',
                  value: {
                    condition: '<=',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryEndDatetime
                  }
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.businessIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'business_id',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.businessIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode.length) !== 0) {
                filterConditons.push({
                  attribute: 'country_code',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryCode
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency.length) !== 0) {
                filterConditons.push({
                  attribute: 'currency',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.currency
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds.length) > 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryTypes.length) !== 0) {
                filterConditons.push({
                  attribute: 'delivery_type',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.deliveryTypes
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'business',
                  conditions: [{
                    attribute: 'city_id',
                    value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds
                  }]
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverGroupIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'driver_id',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.driverGroupIds
                });
              }
              if ((filterValues === null || filterValues === void 0 ? void 0 : filterValues.paymethodIds.length) !== 0) {
                filterConditons.push({
                  attribute: 'paymethod_id',
                  value: filterValues === null || filterValues === void 0 ? void 0 : filterValues.paymethodIds
                });
              }
              if (filterConditons.length) {
                conditions.push({
                  conector: 'AND',
                  conditions: filterConditons
                });
              }
            }
            additionalConditions = [];
            if (isOnlyDelivery) {
              additionalConditions.push({
                attribute: 'delivery_type',
                value: 1
              });
            }
            if (driverId) {
              additionalConditions.push({
                attribute: 'driver_id',
                value: driverId
              });
            }
            if (customerId) {
              additionalConditions.push({
                attribute: 'customer_id',
                value: customerId
              });
            }
            if (businessId) {
              additionalConditions.push({
                attribute: 'business_id',
                value: businessId
              });
            }
            if (franchiseId) {
              conditions.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: franchiseId
                }]
              });
            }
            if (timeStatus) {
              additionalConditions.push({
                attribute: 'time_status',
                value: timeStatus
              });
            }
            if (additionalConditions.length) {
              conditions.push({
                conector: 'AND',
                conditions: additionalConditions
              });
            }
            if (searchValue) {
              searchConditions = [];
              searchConditions.push({
                attribute: 'id',
                value: {
                  condition: 'ilike',
                  value: encodeURI("%".concat(searchValue, "%"))
                }
              });
              searchConditions.push({
                attribute: 'customer',
                conditions: [{
                  attribute: 'email',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                }]
              });
              searchConditions.push({
                attribute: 'customer',
                conditions: [{
                  attribute: 'cellphone',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                }]
              });
              searchConditions.push({
                attribute: 'business',
                conditions: [{
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                }]
              });
              searchConditions.push({
                attribute: 'driver',
                conditions: [{
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: encodeURI("%".concat(searchValue, "%"))
                  }
                }]
              });
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
            _context5.p = 1;
            setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
              loading: true
            }));
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            };
            _context5.n = 2;
            return fetch("".concat(ordering.root, "/orders/dashboard?v=2&where=").concat(JSON.stringify(where)), requestOptions);
          case 2:
            response = _context5.v;
            _context5.n = 3;
            return response.json();
          case 3:
            content = _context5.v;
            if (!(content !== null && content !== void 0 && content.error)) {
              _orderStatusNumbers = Object.keys(orderStatuesList).reduce(function (sum, curr, index) {
                var _currRe = content === null || content === void 0 ? void 0 : content.result.filter(function (ele) {
                  return orderStatuesList[curr].indexOf(ele === null || ele === void 0 ? void 0 : ele.status) >= 0;
                });
                if (index === 1) {
                  var _sumRe$, _currRe$;
                  var _sumRe = content === null || content === void 0 ? void 0 : content.result.filter(function (ele) {
                    return orderStatuesList[sum].indexOf(ele === null || ele === void 0 ? void 0 : ele.status) >= 0;
                  });
                  return _defineProperty(_defineProperty({}, sum, _sumRe.length > 1 ? _sumRe.reduce(function (_sum, _curr) {
                    return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                  }) : ((_sumRe$ = _sumRe[0]) === null || _sumRe$ === void 0 ? void 0 : _sumRe$.quantity) || 0), curr, _currRe.length > 1 ? _currRe.reduce(function (_sum, _curr) {
                    return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                  }) : ((_currRe$ = _currRe[0]) === null || _currRe$ === void 0 ? void 0 : _currRe$.quantity) || 0);
                } else {
                  var _currRe$2;
                  return _objectSpread(_objectSpread({}, sum), {}, _defineProperty({}, curr, _currRe.length > 1 ? _currRe.reduce(function (_sum, _curr) {
                    return Number((_sum === null || _sum === void 0 ? void 0 : _sum.quantity) || _sum || 0) + Number(_curr === null || _curr === void 0 ? void 0 : _curr.quantity);
                  }) : ((_currRe$2 = _currRe[0]) === null || _currRe$2 === void 0 ? void 0 : _currRe$2.quantity) || 0));
                }
              });
              setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
                loading: false,
                error: false,
                result: _orderStatusNumbers
              }));
            } else {
              setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
                loading: false,
                error: true
              }));
            }
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
              loading: false,
              error: [_t5.message]
            }));
          case 5:
            return _context5.a(2);
        }
      }, _callee5, null, [[1, 4]]);
    }));
    return function getOrderNumbersByStatus() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleNewOrder = function handleNewOrder(order) {
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    if (!numberOfOrdersByStatus.result) return;
    var _orderStatusNumbers = numberOfOrdersByStatus.result;
    _orderStatusNumbers.pending += 1;
    setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
      loading: false,
      error: false,
      result: _orderStatusNumbers
    }));
  };
  var handleUpdateOrder = function handleUpdateOrder(order) {
    if (!(order !== null && order !== void 0 && order.history)) return;
    if (customerId && (order === null || order === void 0 ? void 0 : order.customer_id) !== customerId) return;
    var length = order.history.length;
    var lastHistoryData = order === null || order === void 0 ? void 0 : order.history[length - 1].data;
    var statusChange = lastHistoryData === null || lastHistoryData === void 0 ? void 0 : lastHistoryData.find(function (_ref7) {
      var attribute = _ref7.attribute;
      return attribute === 'status';
    });
    if (statusChange && numberOfOrdersByStatus.result) {
      var from = statusChange.old;
      var to = statusChange.new;
      var _orderStatusNumbers = numberOfOrdersByStatus.result;
      var fromTab = null;
      var toTab = null;
      Object.values(orderStatuesList).map(function (statusTabs, key) {
        if (statusTabs.includes(from)) {
          fromTab = Object.keys(orderStatuesList)[key];
          if (_orderStatusNumbers[fromTab] > 0) {
            _orderStatusNumbers[fromTab] -= 1;
          }
        }
        if (statusTabs.includes(to)) {
          toTab = Object.keys(orderStatuesList)[key];
          _orderStatusNumbers[toTab] += 1;
        }
      });
      setNumberOfOrdersByStatus(_objectSpread(_objectSpread({}, numberOfOrdersByStatus), {}, {
        loading: false,
        error: false,
        result: _orderStatusNumbers
      }));
    }
  };
  (0, _react.useEffect)(function () {
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleNewOrder);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleNewOrder);
    };
  }, [socket, filterValues, searchValue, JSON.stringify(numberOfOrdersByStatus)]);

  /**
   * Listening multi orders action start to change status
   */
  (0, _react.useEffect)(function () {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return;
    handleChangeMultiOrderStatus(selectedOrderIds[0]);
  }, [selectedOrderIds, startMulitOrderStatusChange]);
  (0, _react.useEffect)(function () {
    if (loading) return;
    if ((user === null || user === void 0 ? void 0 : user.level) === 0 || (user === null || user === void 0 ? void 0 : user.level) === 2 || (user === null || user === void 0 ? void 0 : user.level) === 5) {
      getDrivers();
    }
    getControlsOrders();
    return function () {
      if (requestsState.drivers) {
        requestsState.drivers.cancel();
      }
    };
  }, [user, loading]);
  (0, _react.useEffect)(function () {
    getOrderNumbersByStatus();
  }, [filterValues, searchValue, driverId, customerId, businessId, timeStatus]);
  (0, _react.useEffect)(function () {
    if (!user.id || configState !== null && configState !== void 0 && configState.loading) return;
    var getUser = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _result$settings, _configState$configs, _configState$configs2, response, _response$content, error, result, _result$settings2, _configState$configs3, _configState$configs4, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return ordering.users(user.id).select(['settings']).get();
            case 1:
              response = _context6.v;
              _response$content = response.content, error = _response$content.error, result = _response$content.result;
              if (!(!error && (_result$settings = result.settings) !== null && _result$settings !== void 0 && _result$settings.orderColumns)) {
                _context6.n = 2;
                break;
              }
              setAllowColumns((_result$settings2 = result.settings) === null || _result$settings2 === void 0 ? void 0 : _result$settings2.orderColumns);
              return _context6.a(2);
            case 2:
              setAllowColumns(_objectSpread(_objectSpread({}, allowColumnsModel), {}, {
                slaBar: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.slaBar), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_deadlines_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1'
                }),
                timer: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.timer), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.order_deadlines_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1'
                })
              }));
              _context6.n = 4;
              break;
            case 3:
              _context6.p = 3;
              _t6 = _context6.v;
              setAllowColumns(_objectSpread(_objectSpread({}, allowColumnsModel), {}, {
                slaBar: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.slaBar), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.order_deadlines_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1'
                }),
                timer: _objectSpread(_objectSpread({}, allowColumnsModel === null || allowColumnsModel === void 0 ? void 0 : allowColumnsModel.timer), {}, {
                  visable: (configState === null || configState === void 0 || (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.order_deadlines_enabled) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) === '1'
                })
              }));
            case 4:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 3]]);
      }));
      return function getUser() {
        return _ref8.apply(this, arguments);
      };
    }();
    getUser();
  }, [user, configState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    searchValue: searchValue,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    citiesList: citiesList,
    ordersStatusGroup: ordersStatusGroup,
    filterValues: filterValues,
    multiOrderUpdateStatus: updateStatus,
    selectedOrderIds: selectedOrderIds,
    deletedOrderIds: deletedOrderIds,
    startMulitOrderStatusChange: startMulitOrderStatusChange,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedSubOrderStatus: setSelectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleRemoveSelectedOrderId: handleRemoveSelectedOrderId,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    handleOrdersStatusGroupFilter: handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    setSelectedOrderIds: setSelectedOrderIds,
    numberOfOrdersByStatus: numberOfOrdersByStatus,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    timeStatus: timeStatus,
    setTimeStatus: setTimeStatus
  })));
};
OrdersManage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
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
OrdersManage.defaultProps = {
  driversPropsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};