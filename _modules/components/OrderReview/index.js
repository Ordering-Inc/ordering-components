"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderReview = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _SessionContext = require("../../contexts/SessionContext");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderReview = function OrderReview(props) {
  var UIComponent = props.UIComponent,
      order = props.order;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      quality = _useState2[0],
      setQuality = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      punctiality = _useState4[0],
      setPunctiality = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      service = _useState6[0],
      setService = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      packaging = _useState8[0],
      setPackagaing = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      comment = _useState10[0],
      setComment = _useState10[1];
  /**
   * function that saves the state of quality
   */


  var handleQuality = function handleQuality(value) {
    setQuality(value);
  };
  /**
   * function that saves the state of punctiality
   */


  var handlePunctiality = function handlePunctiality(value) {
    setPunctiality(value);
  };
  /**
   * function that saves the state of service
   */


  var handleService = function handleService(value) {
    setService(value);
  };
  /**
   * function that saves the state of product packaging
   */


  var handlePackage = function handlePackage(value) {
    setPackagaing(value);
  };
  /**
   * function that saves the state of the comments
   */


  var handleComment = function handleComment(value) {
    setComment(value);
  }; // /**
  //  * function that saves the order that will be reviewed
  //  */
  // const handleOrder = (order) => {
  //   setBusinessId(order.business_id)
  //   setOrderId(order.id)
  // }

  /**
   * function that post the review
   */


  var handleSendReview = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {
      var body;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              body = {
                order_id: order.id,
                quality: quality,
                delivery: punctiality,
                service: service,
                package: packaging,
                comment: comment,
                user_id: session.user.id,
                business_id: order.business_id
              };
              _context.next = 4;
              return fetch("".concat(ordering.root, "/business/").concat(order.business_id, "/reviews"), {
                method: 'POST',
                headers: {
                  Authorization: "Bearer ".concat(session.token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSendReview(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleQuality: handleQuality,
    handlePunctiality: handlePunctiality,
    handleService: handleService,
    handlePackage: handlePackage,
    handleComment: handleComment,
    handleSendReview: handleSendReview // handleOrder={handleOrder}
    ,
    comment: comment,
    order: order
  })));
};

exports.OrderReview = OrderReview;
OrderReview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
  * Getting a order that can be reviewed
   */
  order: _propTypes.default.object,

  /**
   * function that saves the orders that can be reviewed
   */
  fetchOrders: _propTypes.default.func,

  /**
   * function that saves the state of quality
   */
  handleQuality: _propTypes.default.func,

  /**
   * function that saves the state of punctiality
   */
  handlePunctiality: _propTypes.default.func,

  /**
   * function that saves the state of service
   */
  handleService: _propTypes.default.func,

  /**
   * function that saves the state of product packaging
   */
  handlePackage: _propTypes.default.func,

  /**
   * function that saves the state of the comments
   */
  handleOrder: _propTypes.default.func,

  /**
   * function that saves the order that will be reviewed
   */
  handleSendReview: _propTypes.default.func
};
OrderReview.defaultProps = {
  order: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};