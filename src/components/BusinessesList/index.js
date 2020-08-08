import React, { useEffect, useState } from 'react'
import PropTypes, { object } from 'prop-types'
import { useBusiness, BUSINESS_ACTIONS } from '../../contexts/BusinessContext'

const API = 'https://apiv4.ordering.co/v400/en/demo/business'
const SEARCH_OPTIONS = {
  type: 1,
  location: '40.7539143,-73.9810162',
  time: 'asap'
}

/**
 * Component to manage Businesses List behavior without UI component
 */
export const BusinessesList = (props) => {
  const {
    UIComponent,
    paginationSettings
  } = props

  const [businessesList, dispatchBusiness] = useBusiness()
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })

  const getBusinesses = async (page) => {
    const { type, location, time } = SEARCH_OPTIONS
    /**
     * In this moment, the API receive all params from search values
     */
    // const params = {
    //   page,
    //   ...businessesList.filterValues
    // }
    return await fetch(`${API}?type=${type}&location=${location}&time=${time}`).then(res => res.json())
  }

  const loadBusinesses = async (isLoad = false) => {
    dispatchBusiness({
      type: BUSINESS_ACTIONS.LOADING,
      loading: true
    })
    try {
      const res = await getBusinesses(pagination.currentPage + 1)
      dispatchBusiness({
        type: BUSINESS_ACTIONS.FETCH_BUSINESSES,
        data: {
          loading: false,
          error: res.error,
          isConcatArray: isLoad,
          businesses: res.result
        }
      })
      if (!res.error) {
        setPagination({
          currentPage: res.content?.pagination?.current_page,
          pageSize: res.content?.pagination?.page_size,
          totalPages: res.content?.pagination?.total_pages,
          total: res.content?.pagination?.total,
          from: res.content?.pagination?.from,
          to: res.content?.pagination?.to
        })
      }
    } catch (error) {
      dispatchBusiness({
        type: BUSINESS_ACTIONS.LOADING,
        loading: false
      })
      dispatchBusiness({
        type: BUSINESS_ACTIONS.ERROR,
        error: [error.message]
      })
    }
  }

  const onLoadMoreBusinesses = param => {
    loadBusinesses(param)
  }

  const onFilterValues = params => {
    dispatchBusiness({
      type: BUSINESS_ACTIONS.SET_FILTER_VALUES,
      filterValues: { ...businessesList.filterValues, [params.key]: params.value }
    })
  }

  useEffect(() => {
    loadBusinesses()
  }, [businessesList.filterValues])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessesList={businessesList}
          pagination={pagination}
          onLoadBusinesses={onLoadMoreBusinesses}
          onFilterValues={onFilterValues}
        />
      )}
    </>
  )
}

BusinessesList.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of businesses
   * This is used of first option to show list
   */
  businesses: PropTypes.arrayOf(object),
  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: PropTypes.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: PropTypes.number,
    pageSize: PropTypes.number,
    controlType: PropTypes.oneOf(['infinity', 'pages'])
  }),
  /**
   * Components types before businesses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after businesses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before businesses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after businesses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessesList.defaultProps = {
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
