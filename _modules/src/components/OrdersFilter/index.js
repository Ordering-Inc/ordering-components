"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersFilter = function OrdersFilter(props) {
  var driversList = props.driversList,
      paymethodsList = props.paymethodsList,
      businessesList = props.businessesList,
      ordersStatusSelected = props.ordersStatusSelected,
      UIComponent = props.UIComponent;
  /**
   * This property is used to set in state the current value
   */

  var _useState = (0, _react.useState)({
    groupTypes: [],
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    isPendingOrder: false,
    isPreOrder: false,
    businessIds: [],
    driverIds: [],
    cityIds: [],
    statuses: [],
    deliveryTypes: [],
    paymethodIds: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      filterValues = _useState2[0],
      setFilterValues = _useState2[1];
  /**
   * Change group type
   * * @param {object} groupType Group type
   */


  var handleChangeGroup = function handleChangeGroup(groupType) {
    var _groupTypes = _toConsumableArray(filterValues.groupTypes);

    if (!_groupTypes.includes(groupType)) {
      _groupTypes.push(groupType);
    } else {
      for (var i = 0; i < _groupTypes.length; i++) {
        if (_groupTypes[i] === groupType) {
          _groupTypes.splice(i, 1);

          i--;
        }
      }
    }

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
    var fromDatetime = (0, _dayjs.default)(fromDate).format('YYYY-MM-DD HH:mm:ss');
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryFromDatetime: fromDatetime
    }));
  };
  /**
   * Change end date
   * * @param {date} endDate end date
  */


  var handleChangeEndDate = function handleChangeEndDate(endDate) {
    var endDatetime = (0, _dayjs.default)(endDate).format('YYYY-MM-DD HH:mm:ss');
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
      for (var i = 0; i < _businessIds.length; i++) {
        if (_businessIds[i] === businessId) {
          _businessIds.splice(i, 1);

          i--;
        }
      }
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
      for (var i = 0; i < _driverIds.length; i++) {
        if (_driverIds[i] === driverId) {
          _driverIds.splice(i, 1);

          i--;
        }
      }
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
      for (var i = 0; i < _cityIds.length; i++) {
        if (_cityIds[i] === cityId) {
          _cityIds.splice(i, 1);

          i--;
        }
      }
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      cityIds: _cityIds
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
      for (var i = 0; i < _statuses.length; i++) {
        if (_statuses[i] === status) {
          _statuses.splice(i, 1);

          i--;
        }
      }
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
      for (var i = 0; i < _deliveryTypes.length; i++) {
        if (_deliveryTypes[i] === deliveryType) {
          _deliveryTypes.splice(i, 1);

          i--;
        }
      }
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
      for (var i = 0; i < _paymethodIds.length; i++) {
        if (_paymethodIds[i] === paymethodId) {
          _paymethodIds.splice(i, 1);

          i--;
        }
      }
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      paymethodIds: _paymethodIds
    }));
  };
  /**
   * Change isPendingOrder
   * */


  var handleChangeIsPendingOrder = function handleChangeIsPendingOrder() {
    var _isPendingOrder = filterValues.isPendingOrder;
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      isPendingOrder: !_isPendingOrder
    }));
  };
  /**
   * Change isPreOrder
  */


  var handleChangeIsPreOrder = function handleChangeIsPreOrder() {
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      isPreOrder: !filterValues.isPreOrder
    }));
  };
  /**
   * Reset filter values
  */


  var handleResetFilterValues = function handleResetFilterValues() {
    setFilterValues({
      groupTypes: [],
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      isPendingOrder: false,
      isPreOrder: false,
      businessIds: [],
      driverIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: []
    });
  };

  (0, _react.useEffect)(function () {
    var _statuses = _toConsumableArray(filterValues.statuses);

    if (filterValues.isPreOrder || filterValues.isPreOrder) {
      if (!_statuses.includes(0)) {
        _statuses.push(0);

        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          statuses: _statuses
        }));
      }
    }
  }, [filterValues.isPendingOrder, filterValues.isPreOrder]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    filterValues: filterValues,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    ordersStatusSelected: ordersStatusSelected,
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
    handleChangeIsPendingOrder: handleChangeIsPendingOrder,
    handleChangeIsPreOrder: handleChangeIsPreOrder
  })));
};

exports.OrdersFilter = OrdersFilter;
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