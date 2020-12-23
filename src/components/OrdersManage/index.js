import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const OrdersManage = (props) => {
  const {
    UIComponent,
    statusGroup,
    driversPropsToFetch,
    businessesPropsToFetch
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ token, loading }] = useSession()

  const requestsState = {}
  const [searchValue, setSearchValue] = useState(null)
  const [ordersStatusGroup, setOrdersStatusGroup] = useState(statusGroup || 'pending')
  const [filterValues, setFilterValues] = useState({})
  const [updateStatus, setUpdateStatus] = useState(null)
  const [startMulitOrderStatusChange, setStartMulitOrderStatusChange] = useState(false)
  const [startMulitOrderDelete, setStartMulitOrderDelete] = useState(false)
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [deletedOrderId, setDeletedOrderId] = useState(null)
  /**
   * Object to save api config list
   */
  const [apiConfigList, setApiConfigList] = useState({ configList: [], loading: true, error: null })
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
   * Object to save driver orders
   */
  const [driverOrdersModal, setDriverOrdersModal] = useState({ id: null, orders: [], loading: true, error: null })

  /**
   * Object to save selected order ids
   */
  const [selectedOrderIds, setSelectedOrderIds] = useState([])

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
   * Change driver id to get orders of a driver
   * @param {string} driverId driver id
   */
  const handleChangeDriverOrdersModal = (driverId) => {
    if (driverId !== driverOrdersModal.id) setDriverOrdersModal({ ...driverOrdersModal, id: driverId })
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
   * Method to get api configure from API
   */
  const getApiConfig = async () => {
    try {
      setApiConfigList({ ...apiConfigList, loading: true })
      const source = {}
      requestsState.apiConfig = source
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .configs()
        .asDictionary()
        .get({ cancelToken: source })
      setApiConfigList({ ...apiConfigList, loading: false, configList: result })
    } catch (err) {
      setApiConfigList({ ...apiConfigList, loading: false, error: err.message })
    }
  }
  /**
   * Method to get driver group from API
   */
  const getDriverGroup = async () => {
    try {
      setDriverGroupList({ ...driverGroupList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const where = [{ attribute: 'enabled', value: { condition: '=', value: true } }]
      const response = await fetch(`${ordering.root}/drivergroups?params=id,name,drivers&where=${JSON.stringify(where)}`, requestOptions)
      const { result } = await response.json()
      setDriverGroupList({ ...driverGroupList, loading: false, groups: result })
    } catch (err) {
      setDriverGroupList({ ...driverGroupList, loading: false, error: err.message })
    }
  }
  /**
   * Method to get paymethods from API
   */
  const getPaymethods = async () => {
    try {
      const response = await fetch(`${ordering.root}/paymethods?params=id,name&where=[{%22attribute%22:%22enabled%22,%22value%22:true}]`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      const { result } = await response.json()
      setPaymethodsList({ ...paymethodsList, loading: false, paymethods: result })
    } catch (err) {
      setPaymethodsList({ ...paymethodsList, loading: false, error: err.message })
    }
  }
  /**
   * Method to get businesses from API
   */
  const getBusinesses = async () => {
    try {
      const source = {}
      requestsState.business = source
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .businesses()
        .asDashboard()
        .select(businessesPropsToFetch)
        .get({ cancelToken: source })
      setBusinessesList({ ...businessesList, loading: false, businesses: result })
    } catch (err) {
      setBusinessesList({ ...businessesList, loading: false, error: err.message })
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
  /**
   * Method to get orders assigned for selected driver from API
   */
  const getDriverOrders = async () => {
    try {
      setDriverOrdersModal({ ...driverOrdersModal, loading: true })

      let where = null
      const conditions = []

      conditions.push({ attribute: 'status', value: [0, 3, 4, 7, 8, 9] })
      conditions.push({ attribute: 'driver_id', value: driverOrdersModal.id })

      where = {
        conditions,
        conector: 'AND'
      }
      const source = {}
      requestsState.driverOrders = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().asDashboard().where(where).get({ cancelToken: source })
      setDriverOrdersModal({
        ...driverOrdersModal,
        id: null,
        loading: false,
        orders: result
      })
    } catch (err) {
      setDriverOrdersModal({
        ...driverOrdersModal,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Listening driver change
   */
  useEffect(() => {
    if (driversList.loading || loading) return
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
          _driver.location = trackingData.location
        }
        return true
      })
      setDriversList({ ...driversList, drivers: drivers })
    }
    socket.join('drivers')
    socket.on('drivers_update', handleUpdateDriver)
    socket.on('tracking_driver', handleTrackingDriver)
    return () => {
      socket.leave('drivers')
      socket.off('drivers_update', handleUpdateDriver)
      socket.off('tracking_driver', handleTrackingDriver)
    }
  }, [socket, loading])

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
    if (driverOrdersModal.id === null) return
    getDriverOrders()
  }, [driverOrdersModal.id])

  useEffect(() => {
    getApiConfig()
    getDriverGroup()
    getDrivers()
    getPaymethods()
    getBusinesses()

    return () => {
      if (requestsState.drivers) {
        requestsState.drivers.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          apiConfigList={apiConfigList}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          driverOrders={driverOrdersModal}
          ordersStatusGroup={ordersStatusGroup}
          filterValues={filterValues}
          multiOrderUpdateStatus={updateStatus}
          selectedOrderIds={selectedOrderIds}
          deletedOrderId={deletedOrderId}
          startMulitOrderStatusChange={startMulitOrderStatusChange}
          startMulitOrderDelete={startMulitOrderDelete}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleRemoveSelectedOrderId={handleRemoveSelectedOrderId}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          handleOrdersStatusGroupFilter={handleOrdersStatusGroupFilter}
          handleChangeDriverOrdersModal={handleChangeDriverOrdersModal}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
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
  businessesPropsToFetch: ['id', 'name', 'logo', 'food', 'laundry', 'alcohol', 'groceries'],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
