import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'
// import dayjs from 'dayjs'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const OrderList = (props) => {
  const {
    UIComponent,
    orders,
    orderIds,
    deletedOrderId,
    orderStatus,
    pendingOrder,
    preOrder,
    orderBy,
    orderDirection,
    useDefualtSessionManager,
    paginationSettings,
    asDashboard,
    filterValues,
    searchValue,
    isSearchByOrderId,
    isSearchByCustomerEmail,
    isSearchByCustomerPhone
  } = props

  const [ordering] = useApi()
  const [orderList, setOrderList] = useState({ loading: !orders, error: null, orders: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [session] = useSession()
  const socket = useWebsocket()
  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  const requestsState = {}
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [registerOrderId, setRegisterOrderId] = useState(null)

  /**
   * Reset registerOrderId
   */
  const handleResetNotification = () => {
    setRegisterOrderId(null)
  }

  const sortOrdersArray = (option, array) => {
    if (option === 'desc') {
      return array.sort((a, b) => b.id - a.id)
    }
    if (option === 'asc') {
      return array.sort((a, b) => a.id - b.id)
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
      const { content } = await ordering.setAccessToken(accessToken).orders(order.id).save({ status: order.newStatus }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        const orders = orderList.orders.filter(_order => {
          return _order.id !== order.id
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
  const getOrders = async (page) => {
    let options = null
    let where = []
    const conditions = []
    if (!asDashboard) {
      options = {
        query: {
          orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
          page: page,
          page_size: paginationSettings.pageSize
        }
      }
    } else {
      options = {
        query: {
          orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy
        }
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
        const checkInnerContain = filterValues.statuses.every((el) => {
          return orderStatus.indexOf(el) !== -1
        })

        const checkOutContain = orderStatus.every((el) => {
          return filterValues.statuses.indexOf(el) !== -1
        })

        if (checkInnerContain) conditions.push({ attribute: 'status', value: filterValues.statuses })
        if (checkOutContain) {
          if (orderStatus) {
            conditions.push({ attribute: 'status', value: orderStatus })
          }
        }
      } else {
        if (orderStatus) {
          conditions.push({ attribute: 'status', value: orderStatus })
        }
      }
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
      conditions.push({
        conector: 'OR',
        conditions: searchConditions
      })
    }

    if (Object.keys(filterValues).length) {
      const filterConditons = []
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
    const functionFetch = asDashboard
      ? ordering.setAccessToken(accessToken).orders().asDashboard().where(where)
      : ordering.setAccessToken(accessToken).orders().where(where)
    return await functionFetch.get(options)
  }
  //   const isPendingOrder = (createdAt, deliveryDatetimeUtc) => {
  //     if (deliveryDatetimeUtc === null || !deliveryDatetimeUtc) return true
  //     const date1 = dayjs(createdAt)
  //     const date2 = dayjs(deliveryDatetimeUtc)
  //     return Math.abs(date1.diff(date2, 'minute')) < 60
  //   }
  //   const isPreOrder = (createdAt, deliveryDatetimeUtc) => {
  //     if (deliveryDatetimeUtc === null || !deliveryDatetimeUtc) return false
  //     const date1 = dayjs(createdAt)
  //     const date2 = dayjs(deliveryDatetimeUtc)
  //     return Math.abs(date1.diff(date2, 'minute')) >= 60
  //   }
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
      const response = await getOrders(pagination.currentPage + 1)

      //   let filteredResult = []
      //   if (pendingOrder) {
      //     if (!response.content.error) {
      //       filteredResult = response.content.result.filter(order => isPendingOrder(order.created_at, order.delivery_datetime_utc))
      //     }
      //     if (filterValues.isPreOrder) {
      //       if (!filterValues.isPendingOrder) filteredResult = []
      //     }
      //   }
      //   if (preOrder) {
      //     if (!response.content.error) {
      //       filteredResult = response.content.result.filter((order) => isPreOrder(order.created_at, order.delivery_datetime_utc))
      //     }
      //     if (filterValues.isPendingOrder) {
      //       if (!filterValues.isPreOrder) filteredResult = []
      //     }
      //   }

      //   if (pendingOrder || preOrder) {
      //     setOrderList({
      //       loading: false,
      //       orders: response.content.error ? [] : filteredResult,
      //       error: response.content.error ? response.content.result : null
      //     })
      //   } else {
      setOrderList({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })
      //   }

      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
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
   * Listening deleted order
   */
  useEffect(() => {
    if (deletedOrderId === null) return
    const orders = orderList.orders.filter(_order => {
      return _order.id !== deletedOrderId
    })
    setOrderList({ ...orderList, orders })
  }, [deletedOrderId])

  /**
   * Listening search value change
   */
  useEffect(() => {
    if (searchValue === null) return
    loadOrders()
  }, [searchValue])
  /**
   * Listening sesssion and filter values change
   */
  useEffect(() => {
    if (orders) {
      setOrderList({
        ...orderList,
        orders
      })
    } else {
      let checkInnerContain = false
      let checkOutContain = false
      if (Object.keys(filterValues).length > 0) {
        checkInnerContain = filterValues.statuses.every((el) => {
          return orderStatus.indexOf(el) !== -1
        })

        checkOutContain = orderStatus.every((el) => {
          return filterValues.statuses.indexOf(el) !== -1
        })

        if (!checkInnerContain && !checkOutContain) {
          setOrderList({ loading: false, orders: [], error: null })
          return
        }
      }
      loadOrders()
    }
    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
    }
  }, [session, filterValues])

  useEffect(() => {
    if (orderList.loading) return
    const handleUpdateOrder = (order) => {
      const found = orderList.orders.find(_order => _order.id === order.id)
      let orders = []
      if (found) {
        orders = orderList.orders.filter(_order => {
          let valid = true
          if (_order.id === order.id) {
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
        setOrderList({
          ...orderList,
          orders
        })
      } else {
        if (isFilteredOrder(order)) {
          const isOrderStatus = orderStatus.includes(parseInt(order.status))
          if (isOrderStatus) {
            orders = [...orderList.orders, order]
            const _orders = sortOrdersArray(orderDirection, orders)
            pagination.total++
            setPagination({
              ...pagination
            })
            setOrderList({
              ...orderList,
              orders: _orders
            })
          }
        }
      }
    }
    const handleRegisterOrder = (_order) => {
      setRegisterOrderId(_order.id)
      const order = { ..._order, status: 0 }
      let orders = []
      if (orderStatus.includes(0) && isFilteredOrder(_order)) {
        // if (pendingOrder) {
        //   const isPending = isPendingOrder(order.created_at, order.delivery_datetime_utc)
        //   if (isPending) {
        orders = [...orderList.orders, order]
        // if (filterValues.isPreOrder) {
        //   if (!filterValues.isPendingOrder) orders = []
        // }
        const _orders = sortOrdersArray(orderDirection, orders)
        pagination.total++
        setPagination({
          ...pagination
        })
        setOrderList({
          ...orderList,
          orders: _orders
        })
        //   }
        // }
        // if (preOrder) {
        //   const isPre = isPreOrder(order.created_at, order.delivery_datetime_utc)
        //   if (isPre) {
        //     orders = [...orderList.orders, order]
        //     if (filterValues.isPendingOrder) {
        //       if (!filterValues.isPreOrder) orders = []
        //     }
        //     const _orders = sortOrdersArray(orderDirection, orders)
        //     pagination.total++
        //     setPagination({
        //       ...pagination
        //     })
        //     setOrderList({
        //       ...orderList,
        //       orders: _orders
        //     })
        //   }
        // }
      }
    }
    socket.on('update_order', handleUpdateOrder)
    socket.on('orders_register', handleRegisterOrder)
    return () => {
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleRegisterOrder)
    }
  }, [orderList.orders, pagination, socket])

  useEffect(() => {
    if (!session.user) return

    if (asDashboard) {
      socket.join('orders')
    } else {
      socket.join(`orders_${session?.user?.id}`)
    }
    return () => {
      if (asDashboard) {
        socket.leave('orders')
      } else {
        socket.leave(`orders_${session?.user?.id}`)
      }
    }
  }, [socket, session])

  const loadMoreOrders = async () => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(pagination.currentPage + 1)
      setOrderList({
        loading: false,
        orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
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

  const goToPage = async (page) => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(page)
      setOrderList({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderList={orderList}
          pagination={pagination}
          pendingOrder={pendingOrder}
          preOrder={preOrder}
          registerOrderId={registerOrderId}
          loadMoreOrders={loadMoreOrders}
          goToPage={goToPage}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
          handleResetNotification={handleResetNotification}
        />
      )}
    </>
  )
}

OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

OrderList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
