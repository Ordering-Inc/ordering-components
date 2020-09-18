"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

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

var AddressForm = function AddressForm(props) {
  var UIComponent = props.UIComponent,
      addressId = props.addressId,
      address = props.address,
      useValidationFileds = props.useValidationFileds,
      onSaveAddress = props.onSaveAddress;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: useValidationFileds,
    fields: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      validationFields = _useState2[0],
      setValidationFields = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null,
    address: address || {},
    dddd: address
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      addressState = _useState4[0],
      setAddressState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      formState = _useState6[0],
      setFormState = _useState6[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user,
      token = _useSession2$.token;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      changeAddress = _useOrder2[1].changeAddress;

  var userId = props.userId || (user === null || user === void 0 ? void 0 : user.id);
  var accessToken = props.accessToken || token; // if (!userId) {
  //   throw new Error('`userId` must provide from props or use SessionProviver to wrappe the app.')
  // }
  // if (!accessToken) {
  //   throw new Error('`accessToken` must provide from props or use SessionProviver to wrappe the app.')
  // }

  /**
   * Load the validation fields
   */

  var loadValidationFields = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$valid, content, fields;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setValidationFields(_objectSpread(_objectSpread({}, validationFields), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.validationFields().get({
                query: {
                  where: [{
                    attribute: 'validate',
                    value: 'address'
                  }]
                }
              });

            case 4:
              _yield$ordering$valid = _context.sent;
              content = _yield$ordering$valid.content;
              fields = {};

              if (!content.result.error) {
                content.result.forEach(function (field) {
                  fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field;
                });
              }

              setValidationFields(_objectSpread(_objectSpread({}, validationFields), {}, {
                loading: false,
                fields: fields
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setValidationFields(_objectSpread(_objectSpread({}, validationFields), {}, {
                loading: false
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function loadValidationFields() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */


  var loadAddress = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(userId, addressId) {
      var _yield$ordering$users, content;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
                loading: true
              }));
              _context2.next = 4;
              return ordering.users(userId).addresses(addressId).get({
                accessToken: accessToken
              });

            case 4:
              _yield$ordering$users = _context2.sent;
              content = _yield$ordering$users.content;
              setAddressState({
                loading: false,
                error: content.error ? content.result : null,
                address: content.error ? {} : content.result
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              setAddressState({
                loading: false,
                error: [_context2.t0.message],
                address: {}
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function loadAddress(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
      address: address || {}
    }));
  }, [address]);
  (0, _react.useEffect)(function () {
    if (useValidationFileds) {
      loadValidationFields();
    }

    if (addressId && !address) {
      loadAddress(userId, addressId);
    }
  }, []);
  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */

  var hanldeChangeInput = function hanldeChangeInput(e) {
    updateChanges(_defineProperty({}, e.target.name, e.target.value));
  };
  /**
   * Update address data
   * @param {object} changes object with changes
   */


  var updateChanges = function updateChanges(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };
  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */


  var showField = function showField(fieldName) {
    return !useValidationFileds || !validationFields.loading && !validationFields.fields[fieldName] || !validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled;
  };
  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */


  var isRequiredField = function isRequiredField(fieldName) {
    return useValidationFileds && !validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled && validationFields.fields[fieldName].required;
  };
  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */


  var saveAddress = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _addressState$address, _yield$ordering$users2, content;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (auth) {
                _context3.next = 4;
                break;
              }

              changeAddress(formState.changes);
              onSaveAddress && onSaveAddress(formState.changes);
              return _context3.abrupt("return");

            case 4:
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context3.prev = 5;
              _context3.next = 8;
              return ordering.users(userId).addresses((_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.id).save(formState.changes, {
                accessToken: accessToken
              });

            case 8:
              _yield$ordering$users2 = _context3.sent;
              content = _yield$ordering$users2.content;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: content.error ? content.result : null,
                changes: content.error ? formState.changes : {}
              }));

              if (!content.error) {
                setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
                  address: content.result
                }));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](5);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context3.t0.message],
                address: {}
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[5, 14]]);
    }));

    return function saveAddress() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    showField: showField,
    updateChanges: updateChanges,
    hanldeChangeInput: hanldeChangeInput,
    isRequiredField: isRequiredField,
    saveAddress: saveAddress,
    addressState: addressState,
    validationFields: validationFields
  })));
};

exports.AddressForm = AddressForm;
AddressForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useValidationFileds: _propTypes.default.bool,

  /**
   * Address object to edit
   */
  address: _propTypes.default.object,

  /**
   * User id of the address to load from Ordering API
   * Omit if you use a SessionProvier context and the address is of the logged user
   */
  userId: _propTypes.default.number,

  /**
   * Address id to edit and load from Ordering API
   */
  addressId: _propTypes.default.number,

  /**
   * Address id to edit and load from Ordering API
   */
  onSaveAddress: _propTypes.default.number,

  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressForm.defaultProps = {
  useValidationFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};