"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardBusinessList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _ApiContext = require("../../../contexts/ApiContext");

var _SessionContext = require("../../../contexts/SessionContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var DashboardBusinessList = function DashboardBusinessList(props) {
  var _paginationSettings$p;

  var asDashboard = props.asDashboard,
      UIComponent = props.UIComponent,
      paginationSettings = props.paginationSettings,
      propsToFetch = props.propsToFetch,
      initialPageSize = props.initialPageSize,
      loadMorePageSize = props.loadMorePageSize,
      isSearchByBusinessId = props.isSearchByBusinessId,
      isSearchByBusinessName = props.isSearchByBusinessName,
      isSearchByBusinessEmail = props.isSearchByBusinessEmail,
      isSearchByBusinessPhone = props.isSearchByBusinessPhone,
      noActiveStatusCondition = props.noActiveStatusCondition;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useState = (0, _react.useState)({
    loading: false,
    error: null,
    businesses: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessList = _useState2[0],
      setBusinessList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      searchValue = _useState6[0],
      setSearchValue = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedBusinessActiveState = _useState8[0],
      setSelectedBusinessActiveState = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      businessTypeSelected = _useState10[0],
      setBusinessTypeSelected = _useState10[1];
  /**
   * Method to get businesses from API
   * @param {number, number} pageSize page
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(pageSize, page) {
      var where, conditions, options, searchConditions, functionFetch;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              where = [];
              conditions = [];
              options = {
                query: {
                  page: page,
                  page_size: pageSize
                }
              };

              if (!noActiveStatusCondition) {
                conditions.push({
                  attribute: 'enabled',
                  value: selectedBusinessActiveState
                });
              }

              if (businessTypeSelected) {
                conditions.push({
                  attribute: 'types',
                  conditions: [{
                    attribute: 'id',
                    value: businessTypeSelected
                  }]
                });
              }

              if (searchValue) {
                searchConditions = [];

                if (isSearchByBusinessId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByBusinessName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByBusinessEmail) {
                  searchConditions.push({
                    attribute: 'email',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByBusinessPhone) {
                  searchConditions.push({
                    attribute: 'phone',
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

              functionFetch = asDashboard ? ordering.setAccessToken(session.token).businesses().select(propsToFetch).asDashboard().where(where) : ordering.setAccessToken(session.token).businesses().select(propsToFetch).where(where);
              _context.next = 10;
              return functionFetch.get(options);

            case 10:
              return _context.abrupt("return", _context.sent);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBusinesses(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to load businesses
   */


  var loadBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var response, _err$constructor;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (session.token) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.prev = 2;
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: true
              }));
              _context2.next = 6;
              return getBusinesses(initialPageSize || pagination.pageSize, 1);

            case 6:
              response = _context2.sent;
              setBusinessList({
                loading: false,
                businesses: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);

              if ((_context2.t0 === null || _context2.t0 === void 0 ? void 0 : (_err$constructor = _context2.t0.constructor) === null || _err$constructor === void 0 ? void 0 : _err$constructor.name) !== 'Cancel') {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  error: [_context2.t0.message]
                }));
              }

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 11]]);
    }));

    return function loadBusinesses() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to get businesses more
   */


  var loadMoreBusinesses = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var response;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: true
              }));
              _context3.prev = 1;
              _context3.next = 4;
              return getBusinesses(loadMorePageSize, Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.to) / loadMorePageSize) + 1);

            case 4:
              response = _context3.sent;
              setBusinessList({
                loading: false,
                businesses: response.content.error ? businessList.businesses : businessList.businesses.concat(response.content.result),
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);

              if (_context3.t0.constructor.name !== 'Cancel') {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  error: [_context3.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));

    return function loadMoreBusinesses() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get businesses for page and pageSize
   */


  var getPageBusinesses = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(pageSize, page) {
      var response;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                loading: true
              }));
              _context4.prev = 1;
              _context4.next = 4;
              return getBusinesses(pageSize, page);

            case 4:
              response = _context4.sent;
              setBusinessList({
                loading: false,
                businesses: response.content.error ? businessList.businesses : response.content.result,
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.constructor.name !== 'Cancel') {
                setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
                  loading: false,
                  error: [_context4.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function getPageBusinesses(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to change user active state for filter
   */


  var handleChangeBusinessActiveState = function handleChangeBusinessActiveState() {
    setSelectedBusinessActiveState(!selectedBusinessActiveState);
  };
  /**
   * Change business type
   * @param {object} businessType Business type
   */


  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };
  /**
   * Method to remove the business from business list
   * @param {Number} businessId business id to remove
   */


  var handleSucessRemoveBusiness = function handleSucessRemoveBusiness(businessId) {
    var businesses = businessList.businesses.filter(function (business) {
      return business.id !== businessId;
    });
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      to: (pagination === null || pagination === void 0 ? void 0 : pagination.to) - 1,
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.total) - 1
    }));
    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to add the business in the business list
   * @param {Object} business business to add
   */


  var handleSucessAddBusiness = function handleSucessAddBusiness(business) {
    var businesses = [].concat(_toConsumableArray(businessList.businesses), [business]);
    setPagination(_objectSpread(_objectSpread({}, pagination), {}, {
      to: (pagination === null || pagination === void 0 ? void 0 : pagination.to) + 1,
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.total) + 1
    }));
    setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
      businesses: businesses
    }));
  };
  /**
   * Method to update the business from the business list
   * @param {Object} business business to update
   */


  var handleSucessUpdateBusiness = function handleSucessUpdateBusiness(business) {
    var found = businessList.businesses.find(function (_business) {
      return _business.id === business.id;
    });

    if (found) {
      if (selectedBusinessActiveState === (business === null || business === void 0 ? void 0 : business.enabled)) {
        var businesses = businessList.businesses.filter(function (_business) {
          if (_business.id === business.id) {
            Object.assign(_business, business);
          }

          return true;
        });
        setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
          businesses: businesses
        }));
      } else {
        handleSucessRemoveBusiness(business.id);
      }
    } else {
      if (selectedBusinessActiveState === (business === null || business === void 0 ? void 0 : business.enabled)) {
        handleSucessAddBusiness(business);
      } else {
        handleSucessRemoveBusiness(business.id);
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (businessList.loading || businessList.businesses.length > 0) return;

    if ((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) !== 0 && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0) {
      if (Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize) >= (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage)) {
        getPageBusinesses(pagination.pageSize, pagination.currentPage);
      } else {
        getPageBusinesses(pagination.pageSize, pagination.currentPage - 1);
      }
    }
  }, [businessList.businesses]);
  /**
   * Listening session
   */

  (0, _react.useEffect)(function () {
    if (props.businesses) {
      setBusinessList(_objectSpread(_objectSpread({}, businessList), {}, {
        businesses: props.businesses
      }));
    } else {
      loadBusinesses();
    }
  }, [session, searchValue, selectedBusinessActiveState, businessTypeSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessList: businessList,
    pagination: pagination,
    searchValue: searchValue,
    onSearch: setSearchValue,
    selectedBusinessActiveState: selectedBusinessActiveState,
    loadBusinesses: loadBusinesses,
    loadMoreBusinesses: loadMoreBusinesses,
    getPageBusinesses: getPageBusinesses,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState,
    handleChangeBusinessType: handleChangeBusinessType,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness
  })));
};

exports.DashboardBusinessList = DashboardBusinessList;
DashboardBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Enable/Disable search option
   * Search Businesses list by a business ID
   */
  isSearchByBusinessId: _propTypes.default.bool,

  /**
   * Enable/Disable search option
   * Search Businesses list by a business email
   */
  isSearchByBusinessEmail: _propTypes.default.bool,

  /**
   * Enable/Disable search option
   * Search Businesses list by a business phone
   */
  isSearchByBusinessPhone: _propTypes.default.bool,

  /**
   * Array of user props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string)
};
DashboardBusinessList.defaultProps = {
  loadMorePageSize: 10,
  propsToFetch: ['id', 'alcohol', 'city', 'delivery_price', 'distance', 'delivery_time', 'ribbon', 'enabled', 'featured', 'food', 'groceries', 'header', 'laundry', 'logo', 'minimum', 'name', 'pickup_time', 'slug', 'reviews'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};