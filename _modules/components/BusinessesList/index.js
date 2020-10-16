"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesList = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useBusiness, BUSINESS_ACTIONS } from '../../contexts/BusinessContext'
// import { useApi } from '../../contexts/ApiContext'
// const API = 'https://apiv4.ordering.co/v400/en/demo/business'
// const SEARCH_OPTIONS = {
//   type: 1,
//   location: '40.7539143,-73.9810162',
//   time: 'asap'
// }

/**
 * Component to manage Businesses List behavior without UI component
 */
var BusinessesList = function BusinessesList(props) {
  var UIComponent = props.UIComponent; // const [ordering] = useApi()
  // const [businessesList, dispatchBusiness] = useBusiness({ loading: false, error: null, businesses: [], filterValues: {} })
  // const [pagination, setPagination] = useState({
  //   currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
  //   pageSize: paginationSettings.pageSize ?? 10
  // })

  /**
   * Method to get all businesses based on params and filter values
   * @param {Number} page
   */
  // const getBusinesses = async (page) => {
  // const { type, location, time } = SEARCH_OPTIONS

  /**
   * In this moment, the API receive all params from search values
   */
  // const params = {
  //   page,
  //   ...businessesList.filterValues
  // }
  // return await window.fetch(`${API}?type=${type}&location=${location}&time=${time}`).then(res => res.json())
  // }

  /**
   * Method to load getBusiness method and manage business context
   * @param {Boolean} isLoad
   */
  // const loadBusinesses = async (isLoad = false) => {
  //   dispatchBusiness({
  //     type: BUSINESS_ACTIONS.LOADING,
  //     loading: true
  //   })
  //   try {
  //     const res = await getBusinesses(pagination.currentPage + 1)
  //     dispatchBusiness({
  //       type: BUSINESS_ACTIONS.FETCH_BUSINESSES,
  //       data: {
  //         loading: false,
  //         error: res.error,
  //         isConcatArray: isLoad,
  //         businesses: res.result
  //       }
  //     })
  //     if (!res.error) {
  //       setPagination({
  //         currentPage: res.content?.pagination?.current_page,
  //         pageSize: res.content?.pagination?.page_size,
  //         totalPages: res.content?.pagination?.total_pages,
  //         total: res.content?.pagination?.total,
  //         from: res.content?.pagination?.from,
  //         to: res.content?.pagination?.to
  //       })
  //     }
  //   } catch (error) {
  //     dispatchBusiness({
  //       type: BUSINESS_ACTIONS.LOADING,
  //       loading: false
  //     })
  //     dispatchBusiness({
  //       type: BUSINESS_ACTIONS.ERROR,
  //       error: [error.message]
  //     })
  //   }
  // }

  /**
   * Method to handle/set page for pagination
   * @param {Number} param
   */
  // const onLoadMoreBusinesses = param => {
  //   loadBusinesses(param)
  // }

  /**
   * Method to set filter values to business context, used for get businesses from API
   * @param {Object} params
   */
  // const onFilterValues = params => {
  //   dispatchBusiness({
  //     type: BUSINESS_ACTIONS.SET_FILTER_VALUES,
  //     filterValues: { ...businessesList.filterValues, [params.key]: params.value }
  //   })
  // }
  // useEffect(() => {
  //   loadBusinesses()
  // }, [businessesList.filterValues])

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};

exports.BusinessesList = BusinessesList;
BusinessesList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of businesses
   * This is used of first option to show list
   */
  businesses: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

  /**
   * Components types before businesses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after businesses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before businesses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after businesses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessesList.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};