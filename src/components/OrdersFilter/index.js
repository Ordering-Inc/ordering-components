import React, { useState, useEffect } from 'react'
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
    groupTypes: [],
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    isPendingOrder: false,
    isPreOrder: false,
    businessIds: [],
    driverIds: [],
    cityIds: [],
    statuses: [],
    deliveryTypes: [],
    paymethodIds: []
  })

  /**
   * Change group type
   * * @param {object} groupType Group type
   */
  const handleChangeGroup = (groupType) => {
    const _groupTypes = [...filterValues.groupTypes]
    if (!_groupTypes.includes(groupType)) {
      _groupTypes.push(groupType)
    } else {
      for (let i = 0; i < _groupTypes.length; i++) {
        if (_groupTypes[i] === groupType) {
          _groupTypes.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, groupTypes: _groupTypes })
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
    const _businessIds = [...filterValues.businessIds]
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
    const _driverIds = [...filterValues.driverIds]
    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId)
    } else {
      for (let i = 0; i < _driverIds.length; i++) {
        if (_driverIds[i] === driverId) {
          _driverIds.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, driverIds: _driverIds })
  }
  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  const handleChangeCity = (cityId) => {
    const _cityIds = [...filterValues.cityIds]
    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId)
    } else {
      for (let i = 0; i < _cityIds.length; i++) {
        if (_cityIds[i] === cityId) {
          _cityIds.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, cityIds: _cityIds })
  }
  /**
   * Change order status
   * * @param {number} status status
  */
  const handleChangeOrderStatus = (status) => {
    const _statuses = [...filterValues.statuses]
    if (!_statuses.includes(status)) {
      _statuses.push(status)
    } else {
      for (let i = 0; i < _statuses.length; i++) {
        if (_statuses[i] === status) {
          _statuses.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, statuses: _statuses })
  }
  /**
   * Change delivery type
   * * @param {number} deliveryType delivery type
  */
  const handleChangeDeliveryType = (deliveryType) => {
    const _deliveryTypes = [...filterValues.deliveryTypes]
    if (!_deliveryTypes.includes(deliveryType)) {
      _deliveryTypes.push(deliveryType)
    } else {
      for (let i = 0; i < _deliveryTypes.length; i++) {
        if (_deliveryTypes[i] === deliveryType) {
          _deliveryTypes.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, deliveryTypes: _deliveryTypes })
  }
  /**
   * Change paymethod type
   * * @param {number} paymethodId paymethod Id
  */
  const handleChangePaymethodType = (paymethodId) => {
    const _paymethodIds = [...filterValues.paymethodIds]
    if (!_paymethodIds.includes(paymethodId)) {
      _paymethodIds.push(paymethodId)
    } else {
      for (let i = 0; i < _paymethodIds.length; i++) {
        if (_paymethodIds[i] === paymethodId) {
          _paymethodIds.splice(i, 1)
          i--
        }
      }
    }
    setFilterValues({ ...filterValues, paymethodIds: _paymethodIds })
  }
  /**
   * Change isPendingOrder
   * */
  const handleChangeIsPendingOrder = () => {
    const _isPendingOrder = filterValues.isPendingOrder
    setFilterValues({ ...filterValues, isPendingOrder: !_isPendingOrder })
  }
  /**
   * Change isPreOrder
  */
  const handleChangeIsPreOrder = () => {
    setFilterValues({ ...filterValues, isPreOrder: !filterValues.isPreOrder })
  }
  /**
   * Reset filter values
  */
  const handleResetFilterValues = () => {
    setFilterValues({
      groupTypes: [],
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      isPendingOrder: false,
      isPreOrder: false,
      businessIds: [],
      driverIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: []
    })
  }

  useEffect(() => {
    const _statuses = [...filterValues.statuses]
    if (filterValues.isPreOrder || filterValues.isPreOrder) {
      if (!_statuses.includes(0)) {
        _statuses.push(0)
        setFilterValues({ ...filterValues, statuses: _statuses })
      }
    }
  }, [filterValues.isPendingOrder, filterValues.isPreOrder])

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
          handleChangeIsPendingOrder={handleChangeIsPendingOrder}
          handleChangeIsPreOrder={handleChangeIsPreOrder}
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
