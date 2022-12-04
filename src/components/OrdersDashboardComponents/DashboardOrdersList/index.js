import React, { useEffect, useState } from 'react'
import PropTypes, { string, object, number } from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'
import { useEvent } from '../../../contexts/EventContext'
import { useConfig } from '../../../contexts/ConfigContext'
import { useLanguage } from '../../../contexts/LanguageContext'

export const DashboardOrdersList = (props) => {
  const {
    UIComponent,
    propsToFetch,
    orders,
    isOnlyDelivery,
    driverId,
    customerId,
    businessId,
    orderIds,
    deletedOrderId,
    orderStatus,
    orderBy,
    orderDirection,
    useDefualtSessionManager,
    paginationSettings,
    filterValues,
    searchValue,
    isSearchByOrderId,
    isSearchByCustomerEmail,
    isSearchByCustomerPhone,
    isSearchByBusinessName,
    orderIdForUnreadCountUpdate,
    timeStatus,
    driversList
  } = props

  const [ordering] = useApi()
  const [events] = useEvent()
  const [configState] = useConfig()
  const [, t] = useLanguage()

  const [orderList, setOrderList] = useState({ loading: !orders, error: null, orders: [] })
  const allowColumnsModel = {
    slaBar: { visable: false, title: '', className: '', draggable: false, colSpan: 1, order: -2 },
    orderNumber: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: -1 },
    status: { visable: true, title: t('STATUS', 'Status'), className: 'statusInfo', draggable: true, colSpan: 1, order: 1 },
    dateTime: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: 0 },
    business: { visable: true, title: t('BUSINESS', 'Business'), className: 'businessInfo', draggable: true, colSpan: 1, order: 2 },
    customer: { visable: true, title: t('CUSTOMER', 'Customer'), className: 'customerInfo', draggable: true, colSpan: 1, order: 3 },
    driver: { visable: true, title: t('DRIVER', 'Driver'), className: 'driverInfo', draggable: true, colSpan: 1, order: 4 },
    advanced: { visable: true, title: t('ADVANCED_LOGISTICS', 'Advanced logistics'), className: 'advanced', draggable: true, colSpan: 3, order: 5 },
    timer: { visable: false, title: t('SLA_TIMER', 'SLA’s timer'), className: 'timer', draggable: true, colSpan: 1, order: 6 },
    total: { visable: true, title: '', className: '', draggable: false, colSpan: 1, order: 10 }
  }

  const [allowColumns, setAllowColumns] = useState(null)
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [session] = useSession()
  const socket = useWebsocket()
  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  const requestsState = {}
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  const sortOrdersArray = (option, array) => {
    if (option === 'id') {
      if (orderDirection === 'desc') {
        return array.sort((a, b) => b.id - a.id)
      }
      if (orderDirection === 'asc') {
        return array.sort((a, b) => a.id - b.id)
      }
    }
    if (option === 'last_direct_message_at') {
      return array.sort((a, b) => new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at))
    }
    return array
  }

  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  const handleUpdateOrderStatus = async (order) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const source = {}
      requestsState.updateOrders = source
      const { content } = await ordering.setAccessToken(accessToken).orders(order?.id).save({ status: order.newStatus }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        const orders = orderList.orders.filter(_order => {
          return _order?.id !== order?.id
        })
        setOrderList({ ...orderList, orders })
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get orders from API
   * @param {number} page page number
   */
  const getOrders = async (pageSize, page) => {
    let where = []
    const conditions = []
    const options = {
      query: {
        orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
        page: page,
        page_size: pageSize
      }
    }

    if (orderIds) {
      conditions.push({ attribute: 'id', value: orderIds })
    }

    if (Object.keys(filterValues).length === 0) {
      if (orderStatus) {
        conditions.push({ attribute: 'status', value: orderStatus })
      }
    } else {
      if (filterValues.statuses.length > 0) {
        // const checkInnerContain = filterValues.statuses.every((el) => {
        //   return orderStatus.indexOf(el) !== -1
        // })

        // const checkOutContain = orderStatus.every((el) => {
        //   return filterValues.statuses.indexOf(el) !== -1
        // })

        // if (checkInnerContain) conditions.push({ attribute: 'status', value: filterValues.statuses })
        // if (checkOutContain) {
        //   if (orderStatus) {
        //     conditions.push({ attribute: 'status', value: orderStatus })
        //   }
        // }
        const getFilterStatusInOrderStatus = filterValues.statuses.filter(status => orderStatus.includes(status))
        conditions.push({ attribute: 'status', value: getFilterStatusInOrderStatus })
      } else {
        if (orderStatus) {
          conditions.push({ attribute: 'status', value: orderStatus })
        }
      }
    }

    if (isOnlyDelivery) {
      conditions.push(
        {
          attribute: 'delivery_type',
          value: 1
        }
      )
    }
    if (driverId) {
      conditions.push(
        {
          attribute: 'driver_id',
          value: driverId
        }
      )
    }

    if (customerId) {
      conditions.push(
        {
          attribute: 'customer_id',
          value: customerId
        }
      )
    }

    if (businessId) {
      conditions.push(
        {
          attribute: 'business_id',
          value: businessId
        }
      )
    }

    if (timeStatus) {
      conditions.push(
        {
          attribute: 'time_status',
          value: timeStatus
        }
      )
    }

    if (searchValue) {
      const searchConditions = []
      if (isSearchByOrderId) {
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
      if (isSearchByCustomerEmail) {
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
      }

      if (isSearchByCustomerPhone) {
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
      }

      if (isSearchByBusinessName) {
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
      }

      conditions.push({
        conector: 'OR',
        conditions: searchConditions
      })
    }

    if (Object.keys(filterValues).length) {
      const filterConditons = []
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
      if (filterValues.deliveryFromDatetime !== null) {
        filterConditons.push(
          {
            attribute: 'delivery_datetime',
            value: {
              condition: '>=',
              value: encodeURI(filterValues.deliveryFromDatetime)
            }
          }
        )
      }
      if (filterValues.deliveryEndDatetime !== null) {
        filterConditons.push(
          {
            attribute: 'delivery_datetime',
            value: {
              condition: '<=',
              value: filterValues.deliveryEndDatetime
            }
          }
        )
      }
      if (filterValues.businessIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'business_id',
            value: filterValues.businessIds
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
      if (filterValues.driverIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'driver_id',
            value: filterValues.driverIds
          }
        )
      }
      if (filterValues.deliveryTypes.length !== 0) {
        filterConditons.push(
          {
            attribute: 'delivery_type',
            value: filterValues.deliveryTypes
          }
        )
      }
      if (filterValues.driverGroupIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'driver_id',
            value: filterValues.driverGroupIds
          }
        )
      }
      if (filterValues.paymethodIds.length !== 0) {
        filterConditons.push(
          {
            attribute: 'paymethod_id',
            value: filterValues.paymethodIds
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

    const source = {}
    requestsState.orders = source
    options.cancelToken = source
    let functionFetch
    if (propsToFetch) {
      functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where)
    } else {
      functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().where(where)
    }
    return await functionFetch.get(options)
  }

  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */
  const isFilteredOrder = (order) => {
    let filterCheck = true
    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false
      }
    }
    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      if (!filterValues.driverIds.includes(order.driver_id)) {
        filterCheck = false
      }
    }
    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false
      }
    }
    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false
      }
    }
    if (filterValues.statuses !== undefined && filterValues.statuses.length > 0) {
      if (!filterValues.statuses.includes(parseInt(order.status))) {
        filterCheck = false
      }
    }
    return filterCheck
  }

  const loadOrders = async () => {
    if (!session.token) return
    try {
      setOrderList({ ...orderList, loading: true })
      const response = await getOrders(pagination.pageSize, 1)

      setOrderList({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
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
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }
  const loadMoreOrders = async () => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(pagination.pageSize, pagination.currentPage + 1)
      setOrderList({
        loading: false,
        orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
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
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }
  const getPageOrders = async (pageSize, page) => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(pageSize, page)
      setOrderList({
        loading: false,
        orders: response.content.error ? orderList.orders : response.content.result,
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
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }

  /**
 * Method to handle drag drop
 */
  const handleDrop = (event, columnName) => {
    event.preventDefault()
    const transferColumnName = event.dataTransfer.getData('transferColumnName')
    if (columnName === transferColumnName) return
    const transferColumnOrder = allowColumns[transferColumnName]?.order
    const currentColumnOrder = allowColumns[columnName]?.order

    const [lessOrder, greaterOrder] = transferColumnOrder < currentColumnOrder ? [transferColumnOrder, currentColumnOrder] : [currentColumnOrder, transferColumnOrder]
    const _remainAllowColumns = {}
    const shouldUpdateColumns = Object.keys(allowColumns).filter(col => col !== transferColumnName && allowColumns[col]?.order >= lessOrder && allowColumns[col]?.order <= greaterOrder)
    shouldUpdateColumns.forEach(col => {
      _remainAllowColumns[col] = {
        ...allowColumns[col],
        order: allowColumns[col]?.order + ((transferColumnOrder < currentColumnOrder) ? -1 : 1)
      }
    })

    const _allowColumnsUpdated = {
      ...allowColumns,
      [transferColumnName]: { ...allowColumns[transferColumnName], order: currentColumnOrder },
      ..._remainAllowColumns
    }
    saveUserSettings(_allowColumnsUpdated)
    setAllowColumns(_allowColumnsUpdated)
  }

  const saveUserSettings = async (allowColumnsUpdated) => {
    try {
      if (!session?.user?.id) return
      const _settings = session?.user?.settings
      const _allowColumnsUpdated = { ...allowColumnsUpdated, timer: { ...allowColumnsUpdated?.timer, visable: false } }
      await ordering.users(session?.user?.id).save({ settings: { ..._settings, orderColumns: _allowColumnsUpdated } }, {
        accessToken: accessToken
      })
    } catch (err) {
      console.warn(err, 'error')
    }
  }
  /**
   * Listening order id to update for unread_count parameter
   */
  useEffect(() => {
    if (orderIdForUnreadCountUpdate === null || orderList.orders.length === 0) return
    const _orders = orderList.orders.filter(order => {
      if (order?.id === orderIdForUnreadCountUpdate) {
        order.unread_count = 0
        order.unread_general_count = 0
        order.unread_direct_count = 0
      }
      return true
    })
    setOrderList({ ...orderList, orders: _orders })
  }, [orderIdForUnreadCountUpdate])

  /**
   * Listening deleted order
   */
  useEffect(() => {
    if (!deletedOrderId) return
    const orders = orderList.orders.filter(_order => {
      return _order?.id !== deletedOrderId
    })

    loadOrders()

    setOrderList({ ...orderList, orders })
  }, [deletedOrderId])

  /**
   * Listening sesssion and filter values change
   */
  useEffect(() => {
    if (session?.loading) return
    if (orders) {
      setOrderList({
        ...orderList,
        orders
      })
    } else {
      // if (Object.keys(filterValues).length > 0) {
      //   const checkInnerContain = filterValues.statuses.every((el) => {
      //     return orderStatus.indexOf(el) !== -1
      //   })

      //   const checkOutContain = orderStatus.every((el) => {
      //     return filterValues.statuses.indexOf(el) !== -1
      //   })

      //   if (!checkInnerContain && !checkOutContain) {
      //     setOrderList({ loading: false, orders: [], error: null })
      //     return
      //   }
      // }
      loadOrders()
    }
    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
    }
  }, [session, searchValue, orderBy, filterValues, isOnlyDelivery, driverId, customerId, businessId, orders, orderStatus, timeStatus])

  useEffect(() => {
    if (orderList.loading) return
    const handleUpdateOrder = (order) => {
      if (isOnlyDelivery && order?.delivery_type !== 1) return
      if (!order?.driver && order?.driver_id) {
        const updatedDriver = driversList?.drivers.find(driver => driver.id === order.driver_id)
        if (updatedDriver) {
          order.driver = { ...updatedDriver }
        }
      }
      const found = orderList.orders.find(_order => _order?.id === order?.id)
      let orders = []
      if (found) {
        orders = orderList.orders.filter(_order => {
          let valid = true
          if (_order?.id === order?.id) {
            delete order.total
            delete order.subtotal
            Object.assign(_order, order)
            valid = (orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status))) && isFilteredOrder(order)
            if (!valid) {
              pagination.total--
              setPagination({
                ...pagination
              })
            }
          }
          return valid
        })
        const _orders = sortOrdersArray(orderBy, orders)
        setOrderList({
          ...orderList,
          orders: _orders
        })
      } else {
        if (isFilteredOrder(order)) {
          const isOrderStatus = orderStatus.includes(parseInt(order.status))
          if (isOrderStatus) {
            orders = [...orderList.orders, order]
            const _orders = sortOrdersArray(orderBy, orders)
            pagination.total++
            setPagination({
              ...pagination
            })
            setOrderList({
              ...orderList,
              orders: _orders.slice(0, pagination.pageSize)
            })
          }
        }
      }
    }
    const handleRegisterOrder = (order) => {
      if (isOnlyDelivery && order?.delivery_type !== 1) return
      const found = orderList.orders.find(_order => _order?.id === order?.id)
      if (found) return
      let orders = []
      if (isFilteredOrder(order)) {
        if ((orderStatus.includes(0) && order.status === 0) || (orderStatus.includes(13) && order.status === 13)) {
          orders = [order, ...orderList.orders]
          const _orders = sortOrdersArray(orderBy, orders)
          pagination.total++
          setPagination({
            ...pagination
          })
          setOrderList({
            ...orderList,
            orders: _orders.slice(0, pagination.pageSize)
          })
        }
      }
    }

    const handleNewMessage = (message) => {
      if (orderList.orders.length === 0) return
      const found = orderList.orders.find(order => order?.id === message.order?.id)
      if (found) {
        const _orders = orderList.orders.filter(order => {
          if (order?.id === message.order?.id) {
            if (order.last_message_at !== message.created_at) {
              if (message.type === 1) {
                order.last_general_message_at = message.created_at
                if (message.author.level !== 0) {
                  order.unread_general_count = order.unread_general_count + 1
                }
              } else {
                order.last_direct_message_at = message.created_at
                if (message.author.level !== 0) {
                  order.unread_direct_count = order.unread_direct_count + 1
                }
              }
              order.last_message_at = message.created_at
              if (message.author.level !== 0) {
                order.unread_count = order.unread_count + 1
              }
            }
          }
          return true
        })
        const _sortedOrders = sortOrdersArray(orderBy, _orders)
        setOrderList({ ...orderList, orders: _sortedOrders })
      }
    }

    if (!orderList.loading && orderList.orders.length === 0) {
      if (pagination?.currentPage !== 0 && pagination?.total !== 0) {
        if (Math.ceil(pagination?.total / pagination.pageSize) >= pagination?.currentPage) {
          getPageOrders(pagination.pageSize, pagination.currentPage)
        } else {
          getPageOrders(pagination.pageSize, pagination.currentPage - 1)
        }
      }
    }
    socket.on('update_order', handleUpdateOrder)
    socket.on('orders_register', handleRegisterOrder)
    socket.on('message', handleNewMessage)
    return () => {
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleRegisterOrder)
      socket.off('message', handleNewMessage)
    }
  }, [orderList.orders, pagination, orderBy, socket, driversList])

  // Listening for customer rating
  useEffect(() => {
    const handleCustomerReviewed = (review) => {
      const orders = orderList.orders.filter(_order => {
        if (_order?.id === review.order_id) {
          _order.user_review = review
        }
        return true
      })
      const _orders = sortOrdersArray(orderBy, orders)
      setOrderList({
        ...orderList,
        orders: _orders
      })
    }
    events.on('customer_reviewed', handleCustomerReviewed)
    return () => {
      events.off('customer_reviewed', handleCustomerReviewed)
    }
  }, [orderList, orderBy])

  useEffect(() => {
    if (!session?.user.id || !configState || allowColumns) return
    const getUser = async () => {
      try {
        const response = await ordering.users(session?.user.id).select(['settings']).get()
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
  }, [session?.user, configState])
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderList={orderList}
          pagination={pagination}
          loadMoreOrders={loadMoreOrders}
          getPageOrders={getPageOrders}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
          allowColumns={allowColumns}
          setAllowColumns={setAllowColumns}
          handleDrop={handleDrop}
        />
      )}
    </>
  )
}

DashboardOrdersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: PropTypes.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: PropTypes.arrayOf(object),
  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: PropTypes.arrayOf(number),
  /**
   * id of order to update unread_count parameter
   */
  orderIdForUnreadCountUpdate: PropTypes.number,
  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: PropTypes.arrayOf(number),
  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: PropTypes.string,
  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: PropTypes.oneOf(['asc', 'desc']),
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
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DashboardOrdersList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
