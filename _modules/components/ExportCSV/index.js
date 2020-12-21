"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportCSV = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ExportCSV = function ExportCSV(props) {
  var UIComponent = props.UIComponent,
      filterValues = props.filterValues;

  var _useState = (0, _react.useState)({
    token: null,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      tokenStatus = _useState2[0],
      setTokenStatus = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      actionStatus = _useState4[0],
      setActionStatus = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      filterApply = _useState6[0],
      setFilterApply = _useState6[1];
  /**
   * Method to get token from API
   */


  var getToken = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var requestOptions, response, _yield$response$json, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: 'superadmin@ordering.co',
                  password: 'super'
                })
              };
              _context.next = 4;
              return fetch('https://apiv4.ordering.co/v400/en/demo/auth', requestOptions);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              setTokenStatus(_objectSpread(_objectSpread({}, tokenStatus), {}, {
                token: result.session.access_token
              }));
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setTokenStatus(_objectSpread(_objectSpread({}, tokenStatus), {}, {
                error: _context.t0
              }));
              setActionStatus({
                loading: false,
                error: _context.t0
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getToken() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get csv from API
   */


  var getCSV = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, filterConditons, functionFetch, response, fileSuffix;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(tokenStatus.token)
                }
              };
              filterConditons = [];

              if (filterApply) {
                if (Object.keys(filterValues).length) {
                  if (filterValues.statuses.length > 0) {
                    filterConditons.push({
                      attribute: 'status',
                      value: filterValues.statuses
                    });
                  } else {
                    filterConditons.push({
                      attribute: 'status',
                      value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    });
                  }

                  if (filterValues.deliveryFromDatetime !== null) {
                    filterConditons.push({
                      attribute: 'delivery_datetime',
                      value: {
                        condition: '>=',
                        value: encodeURI(filterValues.deliveryFromDatetime)
                      }
                    });
                  }

                  if (filterValues.deliveryEndDatetime !== null) {
                    filterConditons.push({
                      attribute: 'delivery_datetime',
                      value: {
                        condition: '<=',
                        value: filterValues.deliveryEndDatetime
                      }
                    });
                  }

                  if (filterValues.businessIds.length !== 0) {
                    filterConditons.push({
                      attribute: 'business_id',
                      value: filterValues.businessIds
                    });
                  }

                  if (filterValues.driverIds.length !== 0) {
                    filterConditons.push({
                      attribute: 'driver_id',
                      value: filterValues.driverIds
                    });
                  }

                  if (filterValues.deliveryTypes.length !== 0) {
                    filterConditons.push({
                      attribute: 'delivery_type',
                      value: filterValues.deliveryTypes
                    });
                  }

                  if (filterValues.paymethodIds.length !== 0) {
                    filterConditons.push({
                      attribute: 'paymethod_id',
                      value: filterValues.paymethodIds
                    });
                  }
                }
              }

              functionFetch = filterApply ? "https://apiv4.ordering.co/v400/en/demo/orders.csv?mode=dashboard&orderBy=id&where=".concat(JSON.stringify(filterConditons)) : 'https://apiv4.ordering.co/v400/en/demo/orders.csv?mode=dashboard&orderBy=id';
              _context2.next = 7;
              return fetch(functionFetch, requestOptions);

            case 7:
              response = _context2.sent;
              fileSuffix = new Date().getTime();
              _context2.next = 11;
              return response.blob().then(function (blob) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "orders_".concat(fileSuffix, ".csv");
                a.click();
              });

            case 11:
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false
              }));
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setActionStatus({
                loading: false,
                error: _context2.t0
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function getCSV() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to start csv downloading
   */


  var handleGetCsvExport = function handleGetCsvExport() {
    setFilterApply(false);
    setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
      loading: true
    }));

    if (tokenStatus.token === null) {
      getToken();
    } else {
      getCSV();
    }
  };
  /**
   * Method to start csv downloading for filtered orders
   */


  var handleGetCsvFilteredExport = function handleGetCsvFilteredExport() {
    setFilterApply(true);
    setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
      loading: true
    }));

    if (tokenStatus.token === null) {
      getToken();
    } else {
      getCSV();
    }
  };

  (0, _react.useEffect)(function () {
    if (tokenStatus.token === null) return;
    getCSV();
  }, [tokenStatus]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    actionStatus: actionStatus,
    handleGetCsvExport: handleGetCsvExport,
    handleGetCsvFilteredExport: handleGetCsvFilteredExport
  })));
};

exports.ExportCSV = ExportCSV;
ExportCSV.propTypes = {
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
ExportCSV.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};