import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'

export const OrdersManage = (props) => {
  const {
    UIComponent,
    statusGroup,
    driversPropsToFetch,
    driverId,
    customerId,
    businessId
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ user, token, loading }] = useSession()

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
  const [updateStatus, setUpdateStatus] = useState(null)
  const [startMulitOrderStatusChange, setStartMulitOrderStatusChange] = useState(false)
  const [startMulitOrderDelete, setStartMulitOrderDelete] = useState(false)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [deletedOrderId, setDeletedOrderId] = useState(null)
  const [numberOfOrdersByStatus, setNumberOfOrdersByStatus] = useState({ result: null, loading: false, error: false })
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
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify({ status: updateStatus })
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}`, requestOptions)
      const { result } = await response.json()

      if (parseInt(result.status) === updateStatus) {
        const _ordersIds = [...selectedOrderIds]
        _ordersIds.shift()
        if (_ordersIds.length === 0) {
          setStartMulitOrderStatusChange(false)
        }
        setSelectedOrderIds(_ordersIds)
      }
      setActionStatus({ ...actionStatus, loading: false })
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
      setStartMulitOrderStatusChange(false)
    }
  }

  /**
   * Delete orders for orders selected
   */
  const handleDeleteMultiOrders = () => {
    setStartMulitOrderDelete(true)
  }
  /**
   * Method to delete order from API
   */
  const deleteOrder = async (id) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const source = {}
      requestsState.deleteOrder = source
      const { content } = await ordering.setAccessToken(token).orders(id).delete({ cancelToken: source })
      if (!content.error) {
        setDeletedOrderId(id)
        const _ordersIds = [...selectedOrderIds]
        _ordersIds.shift()
        if (_ordersIds.length === 0) {
          setStartMulitOrderDelete(false)
        }
        setSelectedOrderIds(_ordersIds)
      }
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
      setStartMulitOrderDelete(false)
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
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
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
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      }
      const response = await fetch(`${ordering.root}/orders/dashboard?where=${JSON.stringify(where)}`, requestOptions)
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

  const handleUpdateOrder = () => {
    getOrderNumbersByStatus()
  }
  useEffect(() => {
    socket.on('update_order', handleUpdateOrder)
    socket.on('orders_register', handleUpdateOrder)
    return () => {
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleUpdateOrder)
    }
  }, [socket, filterValues, searchValue, numberOfOrdersByStatus])

  useEffect(() => {
    if (!user) return
    socket.join('drivers')
    if (user.level === 0) {
      socket.join('orders')
      socket.join('messages_orders')
    } else {
      socket.join(`orders_${user?.id}`)
      socket.join(`messages_orders_${user?.id}`)
    }
  }, [socket, loading, user])

  /**
   * Listening multi orders action start to change status
   */
  useEffect(() => {
    if (!startMulitOrderStatusChange || selectedOrderIds.length === 0) return
    handleChangeMultiOrderStatus(selectedOrderIds[0])
  }, [selectedOrderIds, startMulitOrderStatusChange])

  /**
  * Listening mulit orders delete action start
  */
  useEffect(() => {
    if (!startMulitOrderDelete || selectedOrderIds.length === 0) return
    deleteOrder(selectedOrderIds[0])
  }, [selectedOrderIds, startMulitOrderDelete])

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
    if (!actionStatus?.error && !actionStatus?.loading) {
      getOrderNumbersByStatus()
    }
  }, [actionStatus, filterValues, searchValue, driverId, customerId, businessId])

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
          deletedOrderId={deletedOrderId}
          startMulitOrderStatusChange={startMulitOrderStatusChange}
          startMulitOrderDelete={startMulitOrderDelete}
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
