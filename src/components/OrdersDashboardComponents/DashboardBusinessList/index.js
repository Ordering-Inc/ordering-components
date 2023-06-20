import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { useApi } from '../../../contexts/ApiContext'
import { useSession } from '../../../contexts/SessionContext'
import { ToastType, useToast } from '../../../contexts/ToastContext'
import { useLanguage } from '../../../contexts/LanguageContext'

dayjs.extend(utc)

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
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const allowCodes = ['us', 'usa', 'united states', 'united states of american', 'ca', 'canada']

  const [businessList, setBusinessList] = useState({ loading: false, error: null, businesses: [] })
  const [countriesState, setCountriesState] = useState({ countries: [], loading: true, error: null, enabled: false })
  const [citiesList, setCitiesList] = useState([])
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })

  const [searchValue, setSearchValue] = useState(null)
  const [selectedBusinessActiveState, setSelectedBusinessActiveState] = useState(true)
  const [businessTypeSelected, setBusinessTypeSelected] = useState(null)
  const [businessIds, setBusinessIds] = useState([])
  const [filterValues, setFilterValues] = useState({})
  const [inActiveBusinesses, setInActiveBusinesses] = useState([])

  /**
   * Save filter type values
   * @param {object} types
   */
  const handleChangeFilterValues = (types) => {
    setFilterValues(types)
  }

  /**
   * Method to get businesses from API
   * @param {number, number} pageSize page
   */
  const getBusinesses = async (pageSize, page, isInactive) => {
    let where = []
    const conditions = []
    const options = {
      query: {
        page: page,
        page_size: pageSize
      }
    }

    if (!noActiveStatusCondition || isInactive) {
      conditions.push({
        attribute: 'enabled',
        value: isInactive ? false : selectedBusinessActiveState
      })
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

    if (Object.keys(filterValues).length > 0) {
      const filterConditons = []

      if (filterValues?.name && filterValues?.name !== null) {
        filterConditons.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${filterValues?.name}%`)
            }
          }
        )
      }
      if (filterValues?.availableMenus?.value !== '') {
        filterConditons.push(
          {
            attribute: 'available_menus_count',
            value: {
              condition: filterValues?.availableMenus?.condition,
              value: filterValues?.availableMenus?.value
            }
          }
        )
      }
      if (filterValues?.menus?.value !== '') {
        filterConditons.push(
          {
            attribute: 'menus_count',
            value: {
              condition: filterValues?.menus?.condition,
              value: filterValues?.menus?.value
            }
          }
        )
      }
      if (filterValues?.cityIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'city_id',
            value: filterValues?.cityIds
          }
        )
      }
      if (filterValues?.enabled !== null) {
        filterConditons.push(
          {
            attribute: 'enabled',
            value: filterValues?.enabled
          }
        )
      }
      if (filterValues?.featured !== null) {
        filterConditons.push(
          {
            attribute: 'featured',
            value: filterValues?.featured
          }
        )
      }

      if (filterConditons.length) {
        conditions.push({
          conector: 'AND',
          conditions: filterConditons
        })
      }
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
   * Method to get the countries from API
   */
  const getCountries = async () => {
    try {
      setCountriesState({ ...countriesState, loading: true })
      const { content: { error, result } } = await ordering.countries().get()
      if (!error) {
        const enabled = result.filter(country => country?.enabled).some(country => (allowCodes.includes(country?.code?.toLowerCase()) || allowCodes.includes(country?.name?.toLowerCase())))
        setCountriesState({ ...countriesState, loading: false, countries: result, enabled })
        let cities = []
        for (const country of result) {
          if (country?.enabled) {
            cities = [...cities, ...country?.cities]
          }
        }
        setCitiesList(cities)
      } else {
        setCountriesState({ ...countriesState, loading: false, error: result })
      }
    } catch (err) {
      setCountriesState({ ...countriesState, loading: false, error: [err.message] })
    }
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
   * Method to get businesses
   */
  const getInActiveBusinesses = async () => {
    if (!session.token) return
    try {
      const response = await getBusinesses(10, 1, true)

      if (!response.content.error) {
        setInActiveBusinesses(response?.content?.result)
      }
    } catch (err) {
      console.log(err)
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
   * Method to change businesses enable/disable
   * @param {Boolean} enabled businesses enable state
   * @param {Boolean} isFeatured flag to check if featured or enabled
   */
  const handleEnableAllBusiness = async (enabled, isFeatured = false) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const changes = {
        businesses_id: businessIds,
        ...(isFeatured ? { featured: enabled } : { enabled })
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/business`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        const updatedBusinessList = isFeatured
          ? businessList?.businesses.map(business => (businessIds.includes(business?.id)) ? { ...business, featured: enabled } : business)
          : businessList?.businesses.filter(business => !businessIds.includes(business?.id))
        setBusinessList({
          ...businessList,
          businesses: updatedBusinessList
        })
        if (!isFeatured) setBusinessIds([])
        showToast(ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'))
      } else {
        showToast(ToastType.Error, content?.result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
    }
  }

  /**
   * Method to delete business list
   */
  const handleDeleteMultiBusinesses = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        },
        body: JSON.stringify({ businesses_id: businessIds })
      }
      const response = await fetch(`${ordering.root}/business`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        const updatedBusinessList = businessList?.businesses.filter(business => !businessIds.includes(business?.id))
        setBusinessList({
          ...businessList,
          businesses: updatedBusinessList
        })
        setBusinessIds([])
        showToast(ToastType.Success, t('BUSINESS_DELETED', 'Business deleted'))
      } else {
        showToast(ToastType.Error, content?.result)
      }
    } catch (err) {
      showToast(ToastType.Error, err.message)
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

  /**
 * Method to change selected businesses
 * @param {Number} businessId business id to change selected state
 */
  const handleChangeBusinessIds = (businessId) => {
    const updatedBusinessIds = businessIds.includes(businessId)
      ? businessIds.filter(id => id !== businessId)
      : [...businessIds, businessId]
    setBusinessIds(updatedBusinessIds)
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
  }, [session, searchValue, selectedBusinessActiveState, businessTypeSelected, filterValues])

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    getInActiveBusinesses()
  }, [businessList?.businesses?.length])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            pagination={pagination}
            searchValue={searchValue}
            businessIds={businessIds}
            businessList={businessList}
            selectedBusinessActiveState={selectedBusinessActiveState}
            onSearch={setSearchValue}
            loadBusinesses={loadBusinesses}
            setBusinessIds={setBusinessIds}
            getPageBusinesses={getPageBusinesses}
            loadMoreBusinesses={loadMoreBusinesses}
            handleSucessAddBusiness={handleSucessAddBusiness}
            handleChangeBusinessIds={handleChangeBusinessIds}
            handleEnableAllBusiness={handleEnableAllBusiness}
            handleChangeBusinessType={handleChangeBusinessType}
            handleSucessRemoveBusiness={handleSucessRemoveBusiness}
            handleSucessUpdateBusiness={handleSucessUpdateBusiness}
            handleDeleteMultiBusinesses={handleDeleteMultiBusinesses}
            handleChangeBusinessActiveState={handleChangeBusinessActiveState}
            countriesState={countriesState}
            filterValues={filterValues}
            handleChangeFilterValues={handleChangeFilterValues}
            businessTypeSelected={businessTypeSelected}
            inActiveBusinesses={inActiveBusinesses}
            citiesList={citiesList}
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
