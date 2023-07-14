import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'
import { useConfig } from '../../../contexts/ConfigContext'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useToast, ToastType } from '../../../contexts/ToastContext'

export const OrdersManage = (props) => {
  const {
    UIComponent,
    statusGroup,
    driversPropsToFetch,
    driverId,
    customerId,
    businessId,
    franchiseId,
    isOnlyDelivery
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ user, token, loading }] = useSession()
  const [configState] = useConfig()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const requestsState = {}
  const orderStatuesList = {
    pending: [0, 13],
    inProgress: [7, 8, 4, 9, 3, 14, 18, 19, 20, 21, 22, 23],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17]
  }

  const [searchValue, setSearchValue] = useState(null)
  const [ordersStatusGroup, setOrdersStatusGroup] = useState(statusGroup || 'pending')
  const [filterValues, setFilterValues] = useState({})
  const [timeStatus, setTimeStatus] = useState(null)
  const [updateStatus, setUpdateStatus] = useState(null)
  const [startMulitOrderStatusChange, setStartMulitOrderStatusChange] = useState(false)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [deletedOrderIds, setDeletedOrderIds] = useState([])
  const [numberOfOrdersByStatus, setNumberOfOrdersByStatus] = useState({ result: null, loading: false, error: false })
  const allowColumnsModel = {
    slaBar: { visable: false, title: '', className: '', draggable: false, colSpan: 1, order: -2 },
    orderNumber: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: -1 },
    dateTime: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: 0 },
    externalId: { visable: false, title: t('EXTERNAL_ID', 'External id'), className: 'externalId', draggable: true, colSpan: 1, order: 1 },
    status: { visable: true, title: t('STATUS', 'Status'), className: 'statusInfo', draggable: true, colSpan: 1, order: 2 },
    cartGroupId: { visable: true, title: t('GROUP_ORDER', 'Group Order'), className: 'groupOrderId', draggable: true, colSpan: 1, order: 3 },
    driverGroupId: { visable: true, title: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id'), className: 'driverGroupId', draggable: true, colSpan: 1, order: 4 },
    business: { visable: true, title: t('BUSINESS', 'Business'), className: 'businessInfo', draggable: true, colSpan: 1, order: 5 },
    customer: { visable: true, title: t('CUSTOMER', 'Customer'), className: 'customerInfo', draggable: true, colSpan: 1, order: 6 },
    driver: { visable: true, title: t('DRIVER', 'Driver'), className: 'driverInfo', draggable: true, colSpan: 1, order: 7 },
    advanced: { visable: true, title: t('ADVANCED_LOGISTICS', 'Advanced logistics'), className: 'advanced', draggable: true, colSpan: 3, order: 8 },
    timer: { visable: false, title: t('SLA_TIMER', 'SLA’s timer'), className: 'timer', draggable: true, colSpan: 1, order: 9 },
    eta: { visable: true, title: t('ETA', 'ETA'), className: 'eta', draggable: true, colSpan: 1, order: 10 },
    total: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: 11 }
  }
  const [allowColumns, setAllowColumns] = useState(allowColumnsModel)

  /**
   * Object to save driver group list
   */
  const [driverGroupList, setDriverGroupList] = useState({ groups: [], loading: false, error: null })
  /**
   * Object to save drivers
   */
  const [driversList, setDriversList] = useState({ drivers: [], loading: true, error: null })
  /**
   * Object to save paymethods
   */
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  /**
   * Object to save businesses
   */
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })
  /**
   * Array to save the cities
   */
  const [citiesList, setCitiesList] = useState([])

  /**
   * Object to save selected order ids
   */
  const [selectedOrderIds, setSelectedOrderIds] = useState([])
  /**
   * Object to save order substatuses
   */
  const [selectedSubOrderStatus, setSelectedSubOrderStatus] = useState({
    pending: orderStatuesList.pending,
    inProgress: orderStatuesList.inProgress,
    completed: orderStatuesList.completed,
    cancelled: orderStatuesList.cancelled,
    all: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  })

  /**
   * Save ids of orders selected
   * @param {string} orderId order id
   */
  const handleSelectedOrderIds = (orderId) => {
    let _ids = [...selectedOrderIds]
    if (!_ids.includes(orderId)) {
      _ids.push(orderId)
    } else {
      _ids = _ids.filter((_id) => _id !== orderId)
    }
    setSelectedOrderIds(_ids)
  }
  /**
   * Remove id of order updated or delected
   * @param {string} orderId order id
   */
  const handleRemoveSelectedOrderId = (orderId) => {
    let _ids = [...selectedOrderIds]
    _ids = _ids.filter((_id) => _id !== orderId)
    setSelectedOrderIds(_ids)
  }

  /**
   * Change orders filter by statuses selected
   * @param {string} ordersStatusGroup orders status
   */
  const handleOrdersStatusGroupFilter = (statusGroup) => {
    if (statusGroup === ordersStatusGroup) return
    setOrdersStatusGroup(statusGroup)
    setSelectedOrderIds([])
  }
  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }
  /**
   * Save filter type values
   * @param {object} types
   */
  const handleChangeFilterValues = (types) => {
    setFilterValues(types)
  }

  /**
   * save status for multi orders selected
   * @param {number} status order status
   */
  const handleChangeMultiOrdersStatus = (status) => {
    setUpdateStatus(status)
    setStartMulitOrderStatusChange(true)
  }
  /**
   * Method to change multi orders status from API
   */
  const handleChangeMultiOrderStatus = async (orderId) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: updateStatus })
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}`, requestOptions)
      const { result, error } = await response.json()

      if (parseInt(result.status) === updateStatus) {
        const _ordersIds = [...selectedOrderIds]
        _ordersIds.shift()
        if (_ordersIds.length === 0) {
          setStartMulitOrderStatusChange(false)
        }
        setSelectedOrderIds(_ordersIds)
      }
      setActionStatus({
        loading: false,
        error: error ? result : null
      })
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
      setStartMulitOrderStatusChange(false)
    }
  }

  /**
   * Delete orders for orders selected
   */
  const handleDeleteMultiOrders = async (code) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ ...actionStatus, loading: true })

      const payload = {
        orders_id: selectedOrderIds
      }
      if (code) {
        payload.deleted_action_code = code
      }
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      }
      const response = await fetch(`${ordering.root}/orders`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setDeletedOrderIds(selectedOrderIds)
        setSelectedOrderIds([])
        showToast(ToastType.Success, t('ORDERS_DELETED', 'Orders deleted'))
      } else {
        setActionStatus({
          loading: true,
          error: content.result
        })
      }
    } catch (error) {
      setActionStatus({ loading: false, error: [error.message] })
    }
  }

  /**
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      const source = {}
      requestsState.drivers = source

      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .select(driversPropsToFetch)
        .where([{ attribute: 'level', value: [4] }])
        .get({ cancelToken: source })

      setDriversList({
        ...driversList,
        loading: false,
        drivers: result
      })
    } catch (err) {
      setDriversList({
        ...driversList,
        loading: false,
        error: err.message
      })
    }
  }

  const getControlsOrders = async () => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/controls/orders`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCitiesList(content.result.cities)
        setDriverGroupList({
          ...driverGroupList,
          loading: false,
          groups: content.result.driver_groups
        })
        setPaymethodsList({
          ...paymethodsList,
          loading: false,
          paymethods: content.result.paymethods
        })
        setBusinessesList({
          ...businessesList,
          loading: false,
          businesses: content.result.businesses
        })
        setActionStatus({ ...actionStatus, loading: false })
      } else {
        setActionStatus({ loading: false, error: content?.result })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  /**
   * Listening driver change
   */
  useEffect(() => {
    if (loading) return
    const handleUpdateDriver = (driver) => {
      const found = driversList.drivers.find(_driver => _driver.id === driver.id)
      let _drivers = []
      if (found) {
        _drivers = driversList.drivers.filter(_driver => {
          if (_driver.id === driver.id) {
            Object.assign(_driver, driver)
          }
          return true
        })
      } else {
        _drivers = [...driversList.drivers, driver]
      }
      setDriversList({
        ...driversList,
        drivers: _drivers
      })
    }
    const handleTrackingDriver = (trackingData) => {
      let drivers = []
      drivers = driversList.drivers.filter(_driver => {
        if (_driver.id === trackingData.driver_id) {
          if (typeof trackingData.location === 'string') {
            const trackingLocation = trackingData.location
            const _location = trackingLocation.replaceAll('\\', '')
            const location = JSON.parse(_location)
            _driver.location = location
          } else {
            _driver.location = trackingData.location
          }
        }
        return true
      })
      setDriversList({ ...driversList, drivers: drivers })
    }
    socket.on('drivers_update', handleUpdateDriver)
    socket.on('tracking_driver', handleTrackingDriver)
    return () => {
      socket.off('drivers_update', handleUpdateDriver)
      socket.off('tracking_driver', handleTrackingDriver)
    }
  }, [socket, loading, driversList.drivers])

  const getOrderNumbersByStatus = async () => {
    let where = []
    const conditions = []
    conditions.push({
      attribute: 'products',
      conditions: [{
        attribute: 'type',
        value: {
          condition: '=',
          value: 'item'
        }
      }]
    })
    if (Object.keys(filterValues).length > 0) {
      const filterConditons = []
      if (filterValues?.statuses.length > 0) {
        filterConditons.push({ attribute: 'status', value: filterValues?.statuses })
      }

      if (filterValues?.orderId) {
        filterConditons.push(
          {
            attribute: 'id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${filterValues?.orderId}%`)
            }
          }
        )
      }
      if (filterValues?.externalId) {
        filterConditons.push(
          {
            attribute: 'external_id',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${filterValues?.externalId}%`)
            }
          }
        )
      }
      if (filterValues?.metafield?.length > 0) {
        const metafieldConditions = filterValues?.metafield.map(item => (
          {
            attribute: 'metafields',
            conditions: [
              {
                attribute: 'key',
                value: item?.key
              },
              {
                attribute: 'value',
                value: {
                  condition: 'ilike',
                  value: encodeURI(`%${item?.value}%`)
                }
              }
            ],
            conector: 'AND'
          }
        ))
        filterConditons.push({
          conector: 'OR',
          conditions: metafieldConditions
        })
      }
      if (filterValues?.deliveryFromDatetime !== null) {
        filterConditons.push(
          {
            attribute: 'delivery_datetime',
            value: {
              condition: '>=',
              value: encodeURI(filterValues?.deliveryFromDatetime)
            }
          }
        )
      }
      if (filterValues?.deliveryEndDatetime !== null) {
        filterConditons.push(
          {
            attribute: 'delivery_datetime',
            value: {
              condition: '<=',
              value: filterValues?.deliveryEndDatetime
            }
          }
        )
      }
      if (filterValues?.businessIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'business_id',
            value: filterValues?.businessIds
          }
        )
      }
      if (filterValues?.countryCode.length !== 0) {
        filterConditons.push(
          {
            attribute: 'country_code',
            value: filterValues?.countryCode
          }
        )
      }
      if (filterValues?.currency.length !== 0) {
        filterConditons.push(
          {
            attribute: 'currency',
            value: filterValues?.currency
          }
        )
      }
      if (filterValues?.driverIds.length > 0) {
        filterConditons.push(
          {
            attribute: 'driver_id',
            value: filterValues?.driverIds
          }
        )
      }
      if (filterValues?.deliveryTypes.length !== 0) {
        filterConditons.push(
          {
            attribute: 'delivery_type',
            value: filterValues?.deliveryTypes
          }
        )
      }
      if (filterValues?.cityIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'business',
            conditions: [
              {
                attribute: 'city_id',
                value: filterValues?.cityIds
              }
            ]
          }
        )
      }
      if (filterValues?.driverGroupIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'driver_id',
            value: filterValues?.driverGroupIds
          }
        )
      }
      if (filterValues?.paymethodIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'paymethod_id',
            value: filterValues?.paymethodIds
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

    const additionalConditions = []

    if (isOnlyDelivery) {
      additionalConditions.push({
        attribute: 'delivery_type',
        value: 1
      })
    }

    if (driverId) {
      additionalConditions.push({
        attribute: 'driver_id',
        value: driverId
      })
    }
    if (customerId) {
      additionalConditions.push({
        attribute: 'customer_id',
        value: customerId
      })
    }
    if (businessId) {
      additionalConditions.push({
        attribute: 'business_id',
        value: businessId
      })
    }
    if (franchiseId) {
      conditions.push({
        attribute: 'ref_business',
        conditions: [{
          attribute: 'franchise_id',
          value: franchiseId
        }]
      })
    }
    if (timeStatus) {
      additionalConditions.push(
        {
          attribute: 'time_status',
          value: timeStatus
        }
      )
    }
    if (additionalConditions.length) {
      conditions.push({
        conector: 'AND',
        conditions: additionalConditions
      })
    }

    if (searchValue) {
      const searchConditions = []
      searchConditions.push(
        {
          attribute: 'id',
          value: {
            condition: 'ilike',
            value: encodeURI(`%${searchValue}%`)
          }
        }
      )

      searchConditions.push(
        {
          attribute: 'customer',
          conditions: [
            {
              attribute: 'email',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          ]
        }
      )

      searchConditions.push(
        {
          attribute: 'customer',
          conditions: [
            {
              attribute: 'cellphone',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          ]
        }
      )

      searchConditions.push(
        {
          attribute: 'business',
          conditions: [
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          ]
        }
      )

      searchConditions.push(
        {
          attribute: 'driver',
          conditions: [
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          ]
        }
      )

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
    try {
      setNumberOfOrdersByStatus({ ...numberOfOrdersByStatus, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/orders/dashboard?v=2&where=${JSON.stringify(where)}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        const _orderStatusNumbers = Object.keys(orderStatuesList).reduce((sum, curr, index) => {
          const _currRe = content?.result.filter(ele => orderStatuesList[curr].indexOf(ele?.status) >= 0)
          if (index === 1) {
            const _sumRe = content?.result.filter(ele => orderStatuesList[sum].indexOf(ele?.status) >= 0)
            return {
              [sum]: _sumRe.length > 1 ? _sumRe.reduce((_sum, _curr) => Number(_sum?.quantity || _sum || 0) + Number(_curr?.quantity)) : _sumRe[0]?.quantity || 0,
              [curr]: _currRe.length > 1 ? _currRe.reduce((_sum, _curr) => Number(_sum?.quantity || _sum || 0) + Number(_curr?.quantity)) : _currRe[0]?.quantity || 0
            }
          } else {
            return { ...sum, [curr]: _currRe.length > 1 ? _currRe.reduce((_sum, _curr) => Number(_sum?.quantity || _sum || 0) + Number(_curr?.quantity)) : _currRe[0]?.quantity || 0 }
          }
        })

        setNumberOfOrdersByStatus({
          ...numberOfOrdersByStatus,
          loading: false,
          error: false,
          result: _orderStatusNumbers
        })
      } else {
        setNumberOfOrdersByStatus({
          ...numberOfOrdersByStatus,
          loading: false,
          error: true
        })
      }
    } catch (err) {
      setNumberOfOrdersByStatus({
        ...numberOfOrdersByStatus,
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleNewOrder = (order) => {
    if (customerId && order?.customer_id !== customerId) return
    if (!numberOfOrdersByStatus.result) return
    const _orderStatusNumbers = numberOfOrdersByStatus.result
    _orderStatusNumbers.pending += 1
    setNumberOfOrdersByStatus({
      ...numberOfOrdersByStatus,
      loading: false,
      error: false,
      result: _orderStatusNumbers
    })
  }

  const handleUpdateOrder = (order) => {
    if (!order?.history) return
    if (customerId && order?.customer_id !== customerId) return
    const length = order.history.length
    const lastHistoryData = order?.history[length - 1].data
    const statusChange = lastHistoryData?.find(({ attribute }) => (attribute === 'status'))
    if (statusChange && numberOfOrdersByStatus.result) {
      const from = statusChange.old
      const to = statusChange.new
      const _orderStatusNumbers = numberOfOrdersByStatus.result
      let fromTab = null
      let toTab = null

      Object.values(orderStatuesList).map((statusTabs, key) => {
        if (statusTabs.includes(from)) {
          fromTab = Object.keys(orderStatuesList)[key]
          if (_orderStatusNumbers[fromTab] > 0) {
            _orderStatusNumbers[fromTab] -= 1
          }
        }
        if (statusTabs.includes(to)) {
          toTab = Object.keys(orderStatuesList)[key]
          _orderStatusNumbers[toTab] += 1
        }
      })
      setNumberOfOrdersByStatus({
        ...numberOfOrdersByStatus,
        loading: false,
        error: false,
        result: _orderStatusNumbers
      })
    }
  }

  useEffect(() => {
    socket.on('update_order', handleUpdateOrder)
    socket.on('orders_register', handleNewOrder)
    return () => {
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleNewOrder)
    }
  }, [socket, filterValues, searchValue, JSON.stringify(numberOfOrdersByStatus)])

  /**
   * Listening multi orders action start to change status
   */
  useEffect(() => {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return
    handleChangeMultiOrderStatus(selectedOrderIds[0])
  }, [selectedOrderIds, startMulitOrderStatusChange])

  useEffect(() => {
    if (loading) return
    if (user?.level === 0 || user?.level === 2 || user?.level === 5) {
      getDrivers()
    }
    getControlsOrders()

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [user, loading])

  useEffect(() => {
    getOrderNumbersByStatus()
  }, [filterValues, searchValue, driverId, customerId, businessId, timeStatus])

  useEffect(() => {
    if (!user.id || configState?.loading) return
    const getUser = async () => {
      try {
        const response = await ordering.users(user.id).select(['settings']).get()
        const { content: { error, result } } = response
        if (!error && result.settings?.orderColumns) {
          setAllowColumns(result.settings?.orderColumns)
          return
        }

        setAllowColumns({
          ...allowColumnsModel,
          slaBar: { ...allowColumnsModel?.slaBar, visable: configState?.configs?.order_deadlines_enabled?.value === '1' },
          timer: { ...allowColumnsModel?.timer, visable: configState?.configs?.order_deadlines_enabled?.value === '1' }
        })
      } catch (err) {
        setAllowColumns({
          ...allowColumnsModel,
          slaBar: { ...allowColumnsModel?.slaBar, visable: configState?.configs?.order_deadlines_enabled?.value === '1' },
          timer: { ...allowColumnsModel?.timer, visable: configState?.configs?.order_deadlines_enabled?.value === '1' }
        })
      }
    }
    getUser()
  }, [user, configState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          citiesList={citiesList}
          ordersStatusGroup={ordersStatusGroup}
          filterValues={filterValues}
          multiOrderUpdateStatus={updateStatus}
          selectedOrderIds={selectedOrderIds}
          deletedOrderIds={deletedOrderIds}
          startMulitOrderStatusChange={startMulitOrderStatusChange}
          selectedSubOrderStatus={selectedSubOrderStatus}
          handleSelectedSubOrderStatus={setSelectedSubOrderStatus}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleRemoveSelectedOrderId={handleRemoveSelectedOrderId}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          handleOrdersStatusGroupFilter={handleOrdersStatusGroupFilter}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          setSelectedOrderIds={setSelectedOrderIds}
          numberOfOrdersByStatus={numberOfOrdersByStatus}
          allowColumns={allowColumns}
          setAllowColumns={setAllowColumns}
          timeStatus={timeStatus}
          setTimeStatus={setTimeStatus}
        />
      )}
    </>
  )
}

OrdersManage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrdersManage.defaultProps = {
  driversPropsToFetch: ['id', 'name', 'lastname', 'assigned_orders_count', 'available', 'phone', 'cellphone', 'location', 'photo', 'qualification', 'last_order_assigned_at'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
