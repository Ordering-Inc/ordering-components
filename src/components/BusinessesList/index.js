import React, { useEffect, useState } from 'react'
import PropTypes, { object } from 'prop-types'

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
    businesses,
    UIComponent,
    paginationSettings
  } = props

  const [businessesList, setBusinessesList] = useState({ loading: true, error: null, businesses: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })

  const getBusinesses = async (page) => {
    const { type, location, time } = SEARCH_OPTIONS
    /**
     * options for pagination
     */

    // const options = {
    //   // accessToken: accessToken,
    //   query: {
    //     // orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
    //     page,
    //     page_size: paginationSettings.pageSize
    //   }
    // }
    return await fetch(`${API}?type=${type}&location=${location}&time=${time}`).then(res => res.json())
  }

  const loadBusinesses = async (isLoad = false) => {
    try {
      const res = await getBusinesses(pagination.currentPage + 1)
      setBusinessesList({
        loading: false,
        error: res.error,
        businesses: isLoad ? businessesList.businesses.concat(res.result) : res.result
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
      setBusinessesList({ ...businessesList, loading: false, error: [error.message] })
    }
  }

  const onLoadMoreBusinesses = param => {
    loadBusinesses(param)
  }

  useEffect(() => {
    console.log(businessesList)
    if (businesses) {
      console.log('1')
      setBusinessesList({ ...businessesList, businesses })
    } else {
      console.log('2')
      loadBusinesses()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessesList={businessesList}
          pagination={pagination}
          onLoadBusinesses={onLoadMoreBusinesses}
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
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login form
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
