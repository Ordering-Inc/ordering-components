import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useSession } from '../../contexts/SessionContext'

export const BusinessSearchList = (props) => {
  const {
    UIComponent,
    paginationSettings,
    lazySearch
  } = props

  const [businessesSearchList, setBusinessesSearchList] = useState({ businesses: [], loading: true, error: null, lengthError: true })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: 1,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })
  const [orderState] = useOrder()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [filters, setFilters] = useState({ business_types: [], orderBy: 'distance' })
  const [termValue, setTermValue] = useState('')

  useEffect(() => {
    !lazySearch && handleSearchbusinessAndProducts(true)
  }, [filters])

  useEffect(() => {
    if (businessesSearchList?.loading) return
    if (termValue?.length === 0 || termValue?.length >= 3) {
      handleSearchbusinessAndProducts(true)
    }
  }, [termValue])

  const handleChangeTermValue = (val) => {
    setTermValue(val)
  }

  const handleChangeFilters = (filterName, filterValue) => {
    if (filterName === 'orderBy') {
      const ascdesc = filterValue === filters?.orderBy ? filterValue.includes('-') ? filterValue : `-${filterValue}` : filterValue
      setFilters({
        ...filters,
        orderBy: ascdesc
      })
    } else {
      setFilters({
        ...filters,
        [filterName]: filterValue
      })
    }
  }

  const handleSearchbusinessAndProducts = async (newFetch) => {
    try {
      let filtParams = termValue?.length >= 3 ? `&term=${termValue}` : ''
      Object.keys(filters).map(key => {
        if ((!filters[key] && filters[key] !== 0) || filters[key] === 'default' || filters[key]?.length === 0) return
        Array.isArray(filters[key]) ? filtParams = filtParams + `&${key}=[${filters[key]}]` : filtParams = filtParams + `&${key}=${filters[key]}`
      })
      filtParams = filtParams + `&page=${newFetch ? 1 : paginationProps.currentPage + 1}&page_size=${paginationProps.pageSize}`
      setBusinessesSearchList({
        ...businessesSearchList,
        loading: true,
        lengthError: false
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const location = { lat: orderState.options?.address?.location?.lat, lng: orderState.options?.address?.location?.lng }
      const response = await fetch(`${ordering.root}/search?order_type_id=${orderState?.options?.type}&location=${JSON.stringify(location)}${filtParams}`, requestOptions)
      const { result, error, pagination } = await response.json()
      if (error) {
        setBusinessesSearchList({
          businesses: [],
          loading: false,
          error: result,
          lengthError: false
        })
        return
      }
      let nextPageItems = 0
      if (pagination.current_page !== pagination.total_pages) {
        const remainingItems = pagination.total - result.length
        nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size
      }
      setPaginationProps({
        ...paginationProps,
        currentPage: pagination.current_page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
        nextPageItems
      })
      setBusinessesSearchList({
        ...businessesSearchList,
        businesses: newFetch ? result : [...businessesSearchList?.businesses, ...result],
        loading: false,
        lengthError: false
      })
    } catch (err) {
      setBusinessesSearchList({
        businesses: [],
        loading: false,
        error: err.message,
        lengthError: false
      })
    }
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            paginationProps={paginationProps}
            businessesSearchList={businessesSearchList}
            handleChangeFilters={handleChangeFilters}
            filters={filters}
            termValue={termValue}
            handleSearchbusinessAndProducts={handleSearchbusinessAndProducts}
            handleChangeTermValue={handleChangeTermValue}
            setFilters={setFilters}
          />
        )
      }
    </>
  )
}

BusinessSearchList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

BusinessSearchList.defaultProps = {
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
