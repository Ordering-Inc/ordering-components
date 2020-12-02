import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

export const OrdersFilter = (props) => {
  const {
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusSelected,
    UIComponent
  } = props

  /**
   * This property is used to set in state the current value
   */
  const [filterValues, setFilterValues] = useState({
    groupType: null,
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    businessIds: [],
    driverId: null,
    cityId: null,
    status: null,
    deliveryType: null,
    paymethodId: null
  })

  /**
   * Change group type
   * * @param {object} groupType Group type
   */
  const handleChangeGroup = (groupType) => {
    setFilterValues({ ...filterValues, groupType: groupType })
  }
  /**
   * Change date type
   * * @param {string} dateType date type
  */
  const handleChangeDateType = (dateType) => {
    const now = dayjs()
    switch (dateType) {
      case 'default':
        setFilterValues({ ...filterValues, dateType: 'default', deliveryFromDatetime: null, deliveryEndDatetime: null })
        break
      case 'today': {
        const today = now.format('YYYY-MM-DD')
        const todayDatetime = dayjs(today).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'today', deliveryFromDatetime: todayDatetime })
        break
      }
      case 'yesterday': {
        const yesterday = now.subtract('1', 'day').format('YYYY-MM-DD')
        const yesterdayDatetime = dayjs(yesterday).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'yesterday', deliveryFromDatetime: yesterdayDatetime })
        break
      }
      case 'last7': {
        const last7day = now.subtract('7', 'day').format('YYYY-MM-DD')
        const last7Datetime = dayjs(last7day).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'last7', deliveryFromDatetime: last7Datetime })
        break
      }
      case 'last30': {
        const last30day = now.subtract('30', 'day').format('YYYY-MM-DD')
        const last30Datetime = dayjs(last30day).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'last30', deliveryFromDatetime: last30Datetime })
        break
      }
      case 'term':
        setFilterValues({ ...filterValues, dateType: 'term', deliveryFromDatetime: null, deliveryEndDatetime: null })
    }
  }
  /**
   * Change start date
   * * @param {date} fromDate start date
  */
  const handleChangeFromDate = (fromDate) => {
    const fromDatetime = dayjs(fromDate).format('YYYY-MM-DD HH:mm:ss')
    setFilterValues({ ...filterValues, deliveryFromDatetime: fromDatetime })
  }
  /**
   * Change end date
   * * @param {date} endDate end date
  */
  const handleChangeEndDate = (endDate) => {
    const endDatetime = dayjs(endDate).format('YYYY-MM-DD HH:mm:ss')
    setFilterValues({ ...filterValues, deliveryEndDatetime: endDatetime })
  }
  /**
   * Change businesses
   * * @param {number} businessId business id
  */
  const handleChangeBusinesses = (businessId) => {
    const _businessIds = filterValues.businessIds
    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId)
    } else {
      for (let i = 0; i < _businessIds.length; i++) {
        if (_businessIds[i] === businessId) {
          _businessIds.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, businessIds: _businessIds })
  }
  /**
   * Change driver
   * * @param {number} driverId driver id
  */
  const handleChangeDriver = (driverId) => {
    setFilterValues({ ...filterValues, driverId: driverId })
  }
  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  const handleChangeCity = (cityId) => {
    setFilterValues({ ...filterValues, cityId: cityId })
  }
  /**
   * Change order status
   * * @param {number} status status
  */
  const handleChangeOrderStatus = (status) => {
    setFilterValues({ ...filterValues, status: status })
  }
  /**
   * Change delivery type
   * * @param {number} deliveryType delivery type
  */
  const handleChangeDeliveryType = (deliveryType) => {
    setFilterValues({ ...filterValues, deliveryType: deliveryType })
  }
  /**
   * Change paymethod type
   * * @param {number} paymethodId paymethod Id
  */
  const handleChangePaymethodType = (paymethodId) => {
    setFilterValues({ ...filterValues, paymethodId: paymethodId })
  }
  /**
   * Reset filter values
  */
  const handleResetFilterValues = () => {
    setFilterValues({
      groupType: null,
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      driverId: null,
      cityId: null,
      status: null,
      deliveryType: null,
      paymethodId: null
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterValues={filterValues}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          ordersStatusSelected={ordersStatusSelected}
          handleChangeGroup={handleChangeGroup}
          handleChangeDateType={handleChangeDateType}
          handleChangeFromDate={handleChangeFromDate}
          handleChangeEndDate={handleChangeEndDate}
          handleChangeBusinesses={handleChangeBusinesses}
          handleChangeDriver={handleChangeDriver}
          handleChangeCity={handleChangeCity}
          handleChangeOrderStatus={handleChangeOrderStatus}
          handleChangeDeliveryType={handleChangeDeliveryType}
          handleChangePaymethodType={handleChangePaymethodType}
          handleResetFilterValues={handleResetFilterValues}
        />
      )}
    </>
  )
}

OrdersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrdersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
