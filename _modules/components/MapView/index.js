"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ApiContext = require("../../contexts/ApiContext");
var _SessionContext = require("../../contexts/SessionContext");
var _EventContext = require("../../contexts/EventContext");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MapView = exports.MapView = function MapView(props) {
  var UIComponent = props.UIComponent;
  var _useApi = (0, _ApiContext.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _SessionContext.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _EventContext.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    businessMarkers = _useState2[0],
    setBusinessMarkers = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoadingBusinessMarkers = _useState4[0],
    setIsLoadingBusinessMakers = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    markerGroups = _useState6[0],
    setMarkerGroups = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    customerMarkerGroups = _useState8[0],
    setCustomerMarkerGroups = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: [],
      key: null
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    alertState = _useState0[0],
    setAlertState = _useState0[1];
  var getBusinessLocations = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var options, _yield$ordering$setAc, _yield$ordering$setAc2, result, error, markerGroupsObject, customerMarkerGroupsObject, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setIsLoadingBusinessMakers(true);
            options = {
              query: {
                where: [{
                  attribute: 'status',
                  value: [0, 13, 7, 4, 3, 8, 9, 14, 18, 19, 20, 21, 23, 26]
                }]
              }
            };
            _context.n = 1;
            return ordering.setAccessToken(session.token).orders().asDashboard().get(options);
          case 1:
            _yield$ordering$setAc = _context.v;
            _yield$ordering$setAc2 = _yield$ordering$setAc.content;
            result = _yield$ordering$setAc2.result;
            error = _yield$ordering$setAc2.error;
            if (error) {
              setAlertState(result);
            }
            markerGroupsObject = result.reduce(function (acc, order) {
              acc[order.business_id] = acc[order.business_id] ? [].concat(_toConsumableArray(acc[order.business_id]), [order]) : [order];
              return acc;
            }, {});
            customerMarkerGroupsObject = result.reduce(function (acc, order) {
              acc[order.customer_id] = acc[order.customer_id] ? [].concat(_toConsumableArray(acc[order.customer_id]), [order]) : [order];
              return acc;
            }, {});
            setMarkerGroups(markerGroupsObject);
            setCustomerMarkerGroups(customerMarkerGroupsObject);
            setBusinessMarkers(result);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            setAlertState({
              open: true,
              content: [_t.message]
            });
          case 3:
            _context.p = 3;
            setIsLoadingBusinessMakers(false);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }));
    return function getBusinessLocations() {
      return _ref.apply(this, arguments);
    };
  }();
  var setDriverLocation = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(location) {
      var _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return ordering.setAccessToken(session.token).users(session.user.id).driverLocations().save(location);
          case 1:
            _context2.n = 3;
            break;
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            console.log(_t2 === null || _t2 === void 0 ? void 0 : _t2.message);
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
    return function setDriverLocation(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var handleUpdateOrder = function handleUpdateOrder(order) {
      getBusinessLocations();
      // setIsLoadingBusinessMakers(true)
      // console.log('emited', order)
      // console.log('same driver', order?.driver_id, session?.user?.id)
      // const markers = markerGroups?.[order?.business_id] ?? []
      // const customerMakers = customerMarkerGroups?.[order?.customer_id] ?? []
      // console.log('groups', markerGroups)
      // setMarkerGroups({
      //   ...markerGroups,
      //   [order?.business_id]: order?.driver_id !== session?.user?.id ? markers.filter(_order => order?.id === _order?.id) : [...markers, order]
      // })
      // markerGroups[order?.business_id] = order?.driver_id !== session?.user?.id ? markers.filter(_order => order?.id === _order?.id) : [...markers, order]
      // setCustomerMarkerGroups({
      //   ...customerMarkerGroups,
      //   [order?.customer_id]: order?.driver_id !== session?.user?.id ? customerMakers.filter(_order => order?.id === _order?.id) : [...customerMakers, order]
      // })
      // customerMarkerGroups[order?.customer_id] = order?.driver_id !== session?.user?.id ? customerMakers.filter(_order => order?.id === _order?.id) : [...customerMakers, order]
      // setIsLoadingBusinessMakers(false)
    };
    events.on('order_updated', handleUpdateOrder);
    events.on('order_added', handleUpdateOrder);
    return function () {
      events.off('order_updated', handleUpdateOrder);
      events.off('order_added', handleUpdateOrder);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessMarkers: businessMarkers,
    customerMarkerGroups: customerMarkerGroups,
    isLoadingBusinessMarkers: isLoadingBusinessMarkers,
    markerGroups: markerGroups,
    getBusinessLocations: getBusinessLocations,
    setDriverLocation: setDriverLocation,
    alertState: alertState,
    setAlertState: setAlertState,
    setMarkerGroups: setMarkerGroups,
    setCustomerMarkerGroups: setCustomerMarkerGroups
  })));
};