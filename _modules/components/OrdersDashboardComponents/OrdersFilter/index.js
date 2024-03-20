"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersFilter = exports.OrdersFilter = function OrdersFilter(props) {
  var UIComponent = props.UIComponent,
    driverGroupList = props.driverGroupList;

  /**
   * This property is used to set in state the current value
   */
  var _useState = (0, _react.useState)({
      orderId: null,
      externalId: null,
      groupTypes: [],
      dateType: null,
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      driverIds: [],
      driverGroupIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: [],
      countryCode: [],
      currency: [],
      metafield: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    filterValues = _useState2[0],
    setFilterValues = _useState2[1];

  /**
   * Changer order Id
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeOrderId = function handleChangeOrderId(e) {
    var orderId = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      orderId: orderId
    }));
  };

  /**
   * Changer external Id
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeExternalId = function handleChangeExternalId(e) {
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      externalId: e.target.value
    }));
  };

  /**
   * Changer filter value
   * @param {EventTarget} e Related HTML event
   */
  var handleChangeMetaFieldValue = function handleChangeMetaFieldValue(e, id) {
    var metafield = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
      if (id === item.id) {
        return _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, e.target.name, e.target.value));
      }
      return item;
    });
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      metafield: metafield
    }));
  };
  var handleAddMetaField = function handleAddMetaField(item) {
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      metafield: [].concat(_toConsumableArray(filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield), [item])
    }));
  };
  var handleDeleteMetafield = function handleDeleteMetafield(id) {
    var metafield = filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.filter(function (item) {
      return item.id !== id;
    });
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      metafield: metafield
    }));
  };

  /**
   * Change group type
   * * @param {object} groupType Group type
   */
  var handleChangeGroup = function handleChangeGroup(groupType) {
    var _groupTypes = _toConsumableArray(filterValues.groupTypes);
    if (!_groupTypes.includes(groupType)) {
      _groupTypes.push(groupType);
    } else {
      _groupTypes = _groupTypes.filter(function (type) {
        return type !== groupType;
      });
    }

    // setGroupDriverIds(_driverIds)
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      groupTypes: _groupTypes
    }));
  };
  /**
   * Change date type
   * * @param {string} dateType date type
  */
  var handleChangeDateType = function handleChangeDateType(dateType) {
    var now = (0, _dayjs.default)();
    switch (dateType) {
      case 'default':
        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          dateType: 'default',
          deliveryFromDatetime: null,
          deliveryEndDatetime: null
        }));
        break;
      case 'today':
        {
          var today = now.format('YYYY-MM-DD');
          var todayDatetime = (0, _dayjs.default)(today).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'today',
            deliveryFromDatetime: todayDatetime
          }));
          break;
        }
      case 'yesterday':
        {
          var yesterday = now.subtract('1', 'day').format('YYYY-MM-DD');
          var yesterdayDatetime = (0, _dayjs.default)(yesterday).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'yesterday',
            deliveryFromDatetime: yesterdayDatetime
          }));
          break;
        }
      case 'last7':
        {
          var last7day = now.subtract('7', 'day').format('YYYY-MM-DD');
          var last7Datetime = (0, _dayjs.default)(last7day).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'last7',
            deliveryFromDatetime: last7Datetime
          }));
          break;
        }
      case 'last30':
        {
          var last30day = now.subtract('30', 'day').format('YYYY-MM-DD');
          var last30Datetime = (0, _dayjs.default)(last30day).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'last30',
            deliveryFromDatetime: last30Datetime
          }));
          break;
        }
      case 'term':
        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          dateType: 'term',
          deliveryFromDatetime: null,
          deliveryEndDatetime: null
        }));
    }
  };
  /**
   * Change start date
   * * @param {date} fromDate start date
  */
  var handleChangeFromDate = function handleChangeFromDate(fromDate) {
    var fromDatetime;
    if (fromDate !== null) {
      fromDatetime = (0, _dayjs.default)(fromDate).format('YYYY-MM-DD HH:mm:ss');
    } else {
      fromDatetime = null;
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryFromDatetime: fromDatetime
    }));
  };
  /**
   * Change end date
   * * @param {date} endDate end date
  */
  var handleChangeEndDate = function handleChangeEndDate(endDate) {
    var endDatetime;
    if (endDate !== null) {
      endDatetime = (0, _dayjs.default)(endDate).format('YYYY-MM-DD HH:mm:ss');
    } else {
      endDatetime = null;
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryEndDatetime: endDatetime
    }));
  };
  /**
   * Change businesses
   * * @param {number} businessId business id
  */
  var handleChangeBusinesses = function handleChangeBusinesses(businessId) {
    var _businessIds = _toConsumableArray(filterValues.businessIds);
    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId);
    } else {
      _businessIds = _businessIds.filter(function (_businessId) {
        return _businessId !== businessId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      businessIds: _businessIds
    }));
  };
  /**
   * Change driver
   * * @param {number} driverId driver id
  */
  var handleChangeDriver = function handleChangeDriver(driverId) {
    var _driverIds = _toConsumableArray(filterValues.driverIds);
    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId);
    } else {
      _driverIds = _driverIds.filter(function (id) {
        return id !== driverId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverIds: _driverIds
    }));
  };
  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  var handleChangeCity = function handleChangeCity(cityId) {
    var _cityIds = _toConsumableArray(filterValues.cityIds);
    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId);
    } else {
      _cityIds = _cityIds.filter(function (_cityId) {
        return _cityId !== cityId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      cityIds: _cityIds
    }));
  };
  /**
   * Change country code
   * * @param {string} code code of country
  */
  var handleChangeCountryCode = function handleChangeCountryCode(code) {
    var _countryCode = _toConsumableArray(filterValues.countryCode);
    if (!_countryCode.includes(code)) {
      _countryCode.push(code);
    } else {
      _countryCode = _countryCode.filter(function (_code) {
        return _code !== code;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      countryCode: _countryCode
    }));
  };

  /**
   * Change currency
   * * @param {string} code code of country
  */
  var handleChangeCurrency = function handleChangeCurrency(code) {
    var _currency = _toConsumableArray(filterValues.currency);
    if (!_currency.includes(code)) {
      _currency.push(code);
    } else {
      _currency = _currency.filter(function (_code) {
        return _code !== code;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      currency: _currency
    }));
  };

  /**
   * Change order status
   * * @param {number} status status
  */
  var handleChangeOrderStatus = function handleChangeOrderStatus(status) {
    var _statuses = _toConsumableArray(filterValues.statuses);
    if (!_statuses.includes(status)) {
      _statuses.push(status);
    } else {
      _statuses = _statuses.filter(function (_status) {
        return _status !== status;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      statuses: _statuses
    }));
  };
  /**
   * Change delivery type
   * * @param {number} deliveryType delivery type
  */
  var handleChangeDeliveryType = function handleChangeDeliveryType(deliveryType) {
    var _deliveryTypes = _toConsumableArray(filterValues.deliveryTypes);
    if (!_deliveryTypes.includes(deliveryType)) {
      _deliveryTypes.push(deliveryType);
    } else {
      _deliveryTypes = _deliveryTypes.filter(function (_deliveryType) {
        return _deliveryType !== deliveryType;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryTypes: _deliveryTypes
    }));
  };
  /**
   * Change paymethod type
   * * @param {number} paymethodId paymethod Id
  */
  var handleChangePaymethodType = function handleChangePaymethodType(paymethodId) {
    var _paymethodIds = _toConsumableArray(filterValues.paymethodIds);
    if (!_paymethodIds.includes(paymethodId)) {
      _paymethodIds.push(paymethodId);
    } else {
      _paymethodIds = _paymethodIds.filter(function (_paymethodId) {
        return _paymethodId !== paymethodId;
      });
    }
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      paymethodIds: _paymethodIds
    }));
  };
  /**
   * Reset filter values
  */
  var handleResetFilterValues = function handleResetFilterValues() {
    setFilterValues({
      orderId: null,
      externalId: null,
      groupTypes: [],
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      driverIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: [],
      countryCode: [],
      currency: [],
      metafield: []
    });
  };
  (0, _react.useEffect)(function () {
    var groupDriverIds = [];
    if (filterValues.groupTypes.length > 0) {
      var _iterator = _createForOfIteratorHelper(filterValues.groupTypes),
        _step;
      try {
        var _loop = function _loop() {
          var groupId = _step.value;
          var selectedDriverGroup = driverGroupList.groups.find(function (group) {
            return group.id === groupId;
          });
          if (selectedDriverGroup) {
            groupDriverIds = [].concat(_toConsumableArray(groupDriverIds), _toConsumableArray(selectedDriverGroup === null || selectedDriverGroup === void 0 ? void 0 : selectedDriverGroup.drivers));
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    var uniqueDriverIds = groupDriverIds.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    });
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverGroupIds: uniqueDriverIds
    }));
  }, [filterValues.groupTypes]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    filterValues: filterValues,
    handleChangeOrderId: handleChangeOrderId,
    handleChangeGroup: handleChangeGroup,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate,
    handleChangeBusinesses: handleChangeBusinesses,
    handleChangeDriver: handleChangeDriver,
    handleChangeCity: handleChangeCity,
    handleChangeOrderStatus: handleChangeOrderStatus,
    handleChangeDeliveryType: handleChangeDeliveryType,
    handleChangePaymethodType: handleChangePaymethodType,
    handleResetFilterValues: handleResetFilterValues,
    handleChangeCountryCode: handleChangeCountryCode,
    handleChangeCurrency: handleChangeCurrency,
    handleChangeMetaFieldValue: handleChangeMetaFieldValue,
    handleAddMetaField: handleAddMetaField,
    handleDeleteMetafield: handleDeleteMetafield,
    handleChangeExternalId: handleChangeExternalId
  })));
};
OrdersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array that contains business types to filter
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrdersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};