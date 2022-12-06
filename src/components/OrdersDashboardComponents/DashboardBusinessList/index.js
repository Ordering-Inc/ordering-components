import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useApi } from '../../../contexts/ApiContext'
import { useSession } from '../../../contexts/SessionContext'

export const DashboardBusinessList = (props) => {
  const {
    asDashboard,
    UIComponent,
    paginationSettings,
    propsToFetch,
    initialPageSize,
    loadMorePageSize,
    isSearchByBusinessId,
    isSearchByBusinessName,
    isSearchByBusinessEmail,
    isSearchByBusinessPhone,
    noActiveStatusCondition
  } = props

  const [ordering] = useApi()
  const [session] = useSession()

  const [businessList, setBusinessList] = useState({ loading: false, error: null, businesses: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })

  const [searchValue, setSearchValue] = useState(null)
  const [selectedBusinessActiveState, setSelectedBusinessActiveState] = useState(true)
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)

  /**
   * Method to get businesses from API
   * @param {number, number} pageSize page
   */
  const getBusinesses = async (pageSize, page) => {
    let where = []
    const conditions = []
    const options = {
      query: {
        page: page,
        page_size: pageSize
      }
    }

    if (!noActiveStatusCondition) {
      conditions.push({ attribute: 'enabled', value: selectedBusinessActiveState })
    }

    if (businessTypeSelected) {
      conditions.push({
        attribute: 'types',
        conditions: [{
          attribute: 'id',
          value: businessTypeSelected
        }]
      })
    }

    if (searchValue) {
      const searchConditions = []
      if (isSearchByBusinessId) {
        searchConditions.push(
          {
            attribute: 'id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }

      if (isSearchByBusinessName) {
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

      if (isSearchByBusinessEmail) {
        searchConditions.push(
          {
            attribute: 'email',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }

      if (isSearchByBusinessPhone) {
        searchConditions.push(
          {
            attribute: 'phone',
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

    const functionFetch = asDashboard
      ? ordering.setAccessToken(session.token).businesses().select(propsToFetch).asDashboard().where(where)
      : ordering.setAccessToken(session.token).businesses().select(propsToFetch).where(where)

    return await functionFetch.get(options)
  }

  /**
   * Method to load businesses
   */
  const loadBusinesses = async () => {
    if (!session.token) return
    try {
      setBusinessList({ ...businessList, loading: true })
      const response = await getBusinesses((initialPageSize || pagination.pageSize), 1)

      setBusinessList({
        loading: false,
        businesses: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })

      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err?.constructor?.name !== 'Cancel') {
        setBusinessList({ ...businessList, loading: false, error: [err.message] })
      }
    }
  }

  /**
   * Method to get businesses more
   */
  const loadMoreBusinesses = async () => {
    setBusinessList({ ...businessList, loading: true })
    try {
      const response = await getBusinesses(loadMorePageSize, Math.ceil(pagination?.to / loadMorePageSize) + 1)
      setBusinessList({
        loading: false,
        businesses: response.content.error ? businessList.businesses : businessList.businesses.concat(response.content.result),
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessList({ ...businessList, loading: false, error: [err.message] })
      }
    }
  }

  /**
   * Method to get businesses for page and pageSize
   */
  const getPageBusinesses = async (pageSize, page) => {
    setBusinessList({ ...businessList, loading: true })
    try {
      const response = await getBusinesses(pageSize, page)
      setBusinessList({
        loading: false,
        businesses: response.content.error ? businessList.businesses : response.content.result,
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size === 0 ? pagination.pageSize : response.content.pagination.page_size,
          totalPages: response.content.pagination.total_pages,
          total: response.content.pagination.total,
          from: response.content.pagination.from,
          to: response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessList({ ...businessList, loading: false, error: [err.message] })
      }
    }
  }

  /**
   * Method to change user active state for filter
   */
  const handleChangeBusinessActiveState = () => {
    setSelectedBusinessActiveState(!selectedBusinessActiveState)
  }

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  const handleChangeBusinessType = (businessType) => {
    if (businessType !== businessTypeSelected) {
      setBusinessList({
        ...businessList,
        businesses: [],
        loading: true
      })
      setBusinessTypeSelected(businessType)
    }
  }

  /**
   * Method to remove the business from business list
   * @param {Number} businessId business id to remove
   */
  const handleSucessRemoveBusiness = (businessId) => {
    const businesses = businessList.businesses.filter(business => business.id !== businessId)
    setPagination({
      ...pagination,
      to: pagination?.to - 1,
      total: pagination?.total - 1
    })
    setBusinessList({ ...businessList, businesses })
  }

  /**
   * Method to add the business in the business list
   * @param {Object} business business to add
   */
  const handleSucessAddBusiness = (business) => {
    const businesses = [...businessList.businesses, business]
    setPagination({
      ...pagination,
      to: pagination?.to + 1,
      total: pagination?.total + 1
    })
    setBusinessList({ ...businessList, businesses })
  }

  /**
   * Method to update the business from the business list
   * @param {Object} business business to update
   */
  const handleSucessUpdateBusiness = (business) => {
    const found = businessList.businesses.find(_business => _business.id === business.id)
    if (found) {
      if (selectedBusinessActiveState === business?.enabled) {
        const businesses = businessList.businesses.filter(_business => {
          if (_business.id === business.id) {
            Object.assign(_business, business)
          }
          return true
        })
        setBusinessList({ ...businessList, businesses: businesses })
      } else {
        handleSucessRemoveBusiness(business.id)
      }
    } else {
      if (selectedBusinessActiveState === business?.enabled) {
        handleSucessAddBusiness(business)
      } else {
        handleSucessRemoveBusiness(business.id)
      }
    }
  }

  useEffect(() => {
    if (businessList.loading || businessList.businesses.length > 0) return
    if (pagination?.currentPage !== 0 && pagination?.total !== 0) {
      if (Math.ceil(pagination?.total / pagination.pageSize) >= pagination?.currentPage) {
        getPageBusinesses(pagination.pageSize, pagination.currentPage)
      } else {
        getPageBusinesses(pagination.pageSize, pagination.currentPage - 1)
      }
    }
  }, [businessList.businesses])

  /**
   * Listening session
   */
  useEffect(() => {
    if (props.businesses) {
      setBusinessList({
        ...businessList,
        businesses: props.businesses
      })
    } else {
      loadBusinesses()
    }
  }, [session, searchValue, selectedBusinessActiveState, businessTypeSelected])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessList={businessList}
            pagination={pagination}
            searchValue={searchValue}
            onSearch={setSearchValue}
            selectedBusinessActiveState={selectedBusinessActiveState}
            loadBusinesses={loadBusinesses}
            loadMoreBusinesses={loadMoreBusinesses}
            getPageBusinesses={getPageBusinesses}
            handleChangeBusinessActiveState={handleChangeBusinessActiveState}
            handleChangeBusinessType={handleChangeBusinessType}
            handleSucessRemoveBusiness={handleSucessRemoveBusiness}
            handleSucessAddBusiness={handleSucessAddBusiness}
            handleSucessUpdateBusiness={handleSucessUpdateBusiness}
          />
        )
      }
    </>
  )
}

DashboardBusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business ID
   */
  isSearchByBusinessId: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business email
   */
  isSearchByBusinessEmail: PropTypes.bool,
  /**
   * Enable/Disable search option
   * Search Businesses list by a business phone
   */
  isSearchByBusinessPhone: PropTypes.bool,
  /**
   * Array of user props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string)
}

DashboardBusinessList.defaultProps = {
  loadMorePageSize: 10,
  propsToFetch: ['id', 'alcohol', 'city', 'delivery_price', 'distance', 'delivery_time', 'ribbon', 'enabled', 'featured', 'food', 'groceries', 'header', 'laundry', 'logo', 'minimum', 'name', 'pickup_time', 'slug', 'reviews'],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
