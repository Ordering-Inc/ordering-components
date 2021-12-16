"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

var _OrderContext = require("../../contexts/OrderContext");

var _BusinessContext = require("../../contexts/BusinessContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PhoneAutocomplete = function PhoneAutocomplete(props) {
  var UIComponent = props.UIComponent,
      isIos = props.isIos,
      businessSlug = props.businessSlug;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      setUserCustomerOptions = _useOrder2[1].setUserCustomerOptions;

  var _useBusiness = (0, _BusinessContext.useBusiness)(),
      _useBusiness2 = _slicedToArray(_useBusiness, 1),
      businessState = _useBusiness2[0];

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      phone = _useState2[0],
      setPhone = _useState2[1];

  var _useState3 = (0, _react.useState)({
    customer: false,
    signup: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      openModal = _useState4[0],
      setOpenModal = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      customerState = _useState6[0],
      setCustomerState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    users: [],
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      customersPhones = _useState8[0],
      setCustomersPhones = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      businessAddress = _useState10[0],
      setBusinessAddress = _useState10[1];

  var _useState11 = (0, _react.useState)({
    open: true,
    content: []
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      alertState = _useState12[0],
      setAlertState = _useState12[1];

  var _useState13 = (0, _react.useState)({
    loading: false
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      optionsState = _useState14[0],
      setOptionsState = _useState14[1];
  /**
   * Get users from API
   */


  var getUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var conditions, _yield$ordering$setAc, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: true
              }));
              conditions = [{
                attribute: 'cellphone',
                value: {
                  condition: 'ilike',
                  value: isIos ? "%".concat(phone, "%") : encodeURI("%".concat(phone, "%"))
                }
              }, {
                attribute: 'phone',
                value: {
                  condition: 'ilike',
                  value: isIos ? "%".concat(phone, "%") : encodeURI("%".concat(phone, "%"))
                }
              }];
              _context.prev = 2;
              _context.next = 5;
              return ordering.setAccessToken(token).users().where({
                conditions: conditions,
                conector: 'OR'
              }).get();

            case 5:
              _yield$ordering$setAc = _context.sent;
              result = _yield$ordering$setAc.content.result;
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                users: result,
                loading: false
              }));
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: false,
                error: _context.t0.message
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function getUsers() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * fetch business to get its address
   */


  var getBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$busin, _yield$ordering$busin2, result, error;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ordering.businesses('mcbonalds').select(['address', 'location', 'distance']).parameters().get();

            case 2:
              _yield$ordering$busin = _context2.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              result = _yield$ordering$busin2.result;
              error = _yield$ordering$busin2.error;

              if (!error) {
                _context2.next = 9;
                break;
              }

              setAlertState({
                open: true,
                content: result
              });
              return _context2.abrupt("return");

            case 9:
              setBusinessAddress(result);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getBusiness() {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkAddress = function checkAddress(address1, address2) {
    var props = ['address', 'location'];
    var values = [];
    props.forEach(function (prop) {
      if (address1 && address1[prop]) {
        if (prop === 'location') {
          values.push(address2[prop].lat === address1[prop].lat && address2[prop].lng === address1[prop].lng);
        } else {
          values.push(address2[prop] === address1[prop]);
        }
      } else {
        values.push(!address2[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };

  var setGuestOptions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref3) {
      var _businessState$busine;

      var customer, _ref3$type, type, onRedirect, businessObj, userObj, _addressSelected, _orderState$options, _yield$ordering$users, _yield$ordering$users2, resultAddresses, error, userAddressFinded, addressSelected, _response$content$res, _addressSelected2, response, addressResponse, options, _addressSelected3;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              customer = _ref3.customer, _ref3$type = _ref3.type, type = _ref3$type === void 0 ? 3 : _ref3$type, onRedirect = _ref3.onRedirect;
              businessObj = (_businessState$busine = businessState === null || businessState === void 0 ? void 0 : businessState.business) !== null && _businessState$busine !== void 0 ? _businessState$busine : businessAddress;
              userObj = customer !== null && customer !== void 0 ? customer : user;

              if (!(!businessObj || !(userObj !== null && userObj !== void 0 && userObj.id))) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return");

            case 5:
              _context3.prev = 5;
              setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
                loading: true
              }));
              _context3.next = 9;
              return ordering.users(userObj.id).addresses().get();

            case 9:
              _yield$ordering$users = _context3.sent;
              _yield$ordering$users2 = _yield$ordering$users.content;
              resultAddresses = _yield$ordering$users2.result;
              error = _yield$ordering$users2.error;

              if (!error) {
                _context3.next = 16;
                break;
              }

              setAlertState({
                open: true,
                content: resultAddresses
              });
              return _context3.abrupt("return");

            case 16:
              userAddressFinded = resultAddresses.find(function (address) {
                return (address === null || address === void 0 ? void 0 : address.location) && checkAddress(businessObj, address) && address;
              });
              addressSelected = userAddressFinded !== null && userAddressFinded !== void 0 ? userAddressFinded : null;

              if ((_addressSelected = addressSelected) !== null && _addressSelected !== void 0 && _addressSelected.id) {
                _context3.next = 32;
                break;
              }

              _context3.next = 21;
              return ordering.users(userObj.id).addresses().save({
                address: businessObj.address,
                location: businessObj.location
              });

            case 21:
              response = _context3.sent;

              if (!response.content.error) {
                _context3.next = 25;
                break;
              }

              setAlertState({
                open: true,
                content: response.content.result
              });
              return _context3.abrupt("return");

            case 25:
              addressSelected = (_response$content$res = response.content.result) !== null && _response$content$res !== void 0 ? _response$content$res : null;
              _context3.next = 28;
              return ordering.users(userObj.id).addresses((_addressSelected2 = addressSelected) === null || _addressSelected2 === void 0 ? void 0 : _addressSelected2.id).save({
                default: true
              });

            case 28:
              addressResponse = _context3.sent;

              if (!addressResponse.content.error) {
                _context3.next = 32;
                break;
              }

              setAlertState({
                open: true,
                content: addressResponse.content.result
              });
              return _context3.abrupt("return");

            case 32:
              options = {
                type: type
              };

              if (addressSelected && !checkAddress(orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address, addressSelected)) {
                options.address_id = (_addressSelected3 = addressSelected) === null || _addressSelected3 === void 0 ? void 0 : _addressSelected3.id;
              }

              if (!(options !== null && options !== void 0 && options.address_id || (user === null || user === void 0 ? void 0 : user.id) !== (customer === null || customer === void 0 ? void 0 : customer.id))) {
                _context3.next = 37;
                break;
              }

              _context3.next = 37;
              return setUserCustomerOptions({
                options: options,
                customer: userObj
              });

            case 37:
              onRedirect && onRedirect();
              setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
                loading: false
              }));
              _context3.next = 45;
              break;

            case 41:
              _context3.prev = 41;
              _context3.t0 = _context3["catch"](5);
              setAlertState({
                open: true,
                content: _context3.t0.message
              });
              setOptionsState(_objectSpread(_objectSpread({}, optionsState), {}, {
                loading: false
              }));

            case 45:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 41]]);
    }));

    return function setGuestOptions(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _customersPhones$user;

    if (phone && phone.length === 7 && (customersPhones === null || customersPhones === void 0 ? void 0 : (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.length) === 0) {
      getUsers();
    }

    if (phone && phone.length < 7) {
      setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
        users: []
      }));
    }
  }, [phone]);
  (0, _react.useEffect)(function () {
    var _businessState$busine2;

    if (businessSlug && !(businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && _businessState$busine2.id)) {
      getBusiness();
    }
  }, [businessSlug]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    phone: phone,
    customerState: customerState,
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    onChangeNumber: function onChangeNumber(phone) {
      return setPhone(phone);
    },
    openModal: openModal,
    setOpenModal: setOpenModal,
    setCustomerState: setCustomerState,
    setBusinessAddressToUser: setGuestOptions,
    alertState: alertState,
    optionsState: optionsState,
    checkAddress: checkAddress
  })));
};

exports.PhoneAutocomplete = PhoneAutocomplete;
PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};