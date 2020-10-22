import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import dayjs from 'dayjs'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'

export const BusinessList = (props) => {
  const {
    UIComponent,
    isSearchByName,
    isSearchByDescription,
    propsToFetch,
    onBusinessClick
  } = props

  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  const [paginationProps, setPaginationProps] = useState({ currentPage: 0, pageSize: 10, totalItems: null, totalPages: null })
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  const [searchValue, setSearchValue] = useState(null)
  const [orderState] = useOrder()
  const [ordering] = useApi()
  const [requestsState, setRequestsState] = useState({})

  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  const getBusinesses = async (newFetch) => {
    try {
      setBusinessesList({ ...businessesList, loading: true })
      const parameters = {
        location: `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`,
        type: orderState.options?.type || 1,
        page: newFetch ? 1 : paginationProps.currentPage + 1,
        page_size: paginationProps.pageSize
      }

      if (orderState.options?.moment && dayjs(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
        const parts = orderState?.options?.moment?.split(' ')
        const dateParts = parts[0]?.split('-')
        const timeParts = parts[1]?.split(':')
        const moment = Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1], timeParts[2]) / 1000
        parameters.timestamp = moment
      }

      let where = null
      const conditions = []
      if (businessTypeSelected) {
        conditions.push({ attribute: businessTypeSelected, value: true })
      }

      if (searchValue) {
        const searchConditions = []
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByDescription) {
          searchConditions.push(
            {
              attribute: 'description',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const source = {}
      requestsState.businesses = source
      setRequestsState({ ...requestsState })
      const fetchEndpoint = where
        ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where)
        : ordering.businesses().select(propsToFetch).parameters(parameters)
      const { content: { result, pagination } } = await fetchEndpoint.get({ cancelToken: source })
      businessesList.businesses = newFetch ? result : [...businessesList.businesses, ...result]
      setBusinessesList({
        ...businessesList,
        loading: false
      })
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - businessesList.businesses.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        nextPageItems
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessesList({
          ...businessesList,
          loading: false,
          error: [err.message]
        })
      }
    }
  }

  /**
   * Cancel businesses request
   */
  useEffect(() => {
    const request = requestsState.businesses
    return () => {
      request && request.cancel()
    }
  }, [requestsState.businesses])

  /**
   * Listening order option and filter changes
   */
  useEffect(() => {
    if (orderState.loading || !orderState.options?.address?.location) return
    getBusinesses(true)
  }, [JSON.stringify(orderState.options), businessTypeSelected, searchValue])

  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */
  const handleBusinessClick = (business) => {
    onBusinessClick && onBusinessClick(business)
  }

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  const handleChangeBusinessType = (businessType) => {
    if (businessType !== businessTypeSelected) {
      setBusinessesList({
        ...businessesList,
        businesses: [],
        loading: true
      })
      setBusinessTypeSelected(businessType)
    }
  }

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setBusinessesList({
      ...businessesList,
      businesses: [],
      loading: true
    })
    setSearchValue(search)
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessesList={businessesList}
            paginationProps={paginationProps}
            searchValue={searchValue}
            getBusinesses={getBusinesses}
            handleChangeSearch={handleChangeSearch}
            handleBusinessClick={handleBusinessClick}
            handleChangeBusinessType={handleChangeBusinessType}
          />
        )
      }
    </>
  )
}

BusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Function to get business clicked
   */
  onBusinessClick: PropTypes.func
}

BusinessList.defaultProps = {
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
