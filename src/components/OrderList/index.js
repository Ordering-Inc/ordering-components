import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'

import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const OrderList = (props) => {
  const {
    UIComponent,
    orders,
    orderIds,
    orderStatus,
    orderBy,
    orderDirection,
    useDefualtSessionManager,
    paginationSettings,
    asDashboard,
    customArray,
    userCustomerId,
    activeOrders,
    isDynamicSort
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const socket = useWebsocket()
  const [, t] = useLanguage()
  const [orderList, setOrderList] = useState({ loading: !orders, error: null, orders: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [messages, setMessages] = useState({ loading: false, error: null, messages: [] })
  const [updateOtherStatus, setUpdateOtherStatus] = useState([])
  const [sortBy, setSortBy] = useState({ param: orderBy, direction: orderDirection })

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken
  const requestsState = {}

  const getOrders = async (page, otherStatus = [], pageSize = paginationSettings.pageSize) => {
    const options = {
      query: {
        orderBy: `${(sortBy.direction === 'desc' ? '-' : '')}${sortBy.param}`,
        page: page,
        page_size: pageSize
      }
    }
    if (orderIds || orderStatus) {
      options.query.where = []
      if (orderIds) {
        options.query.where.push({ attribute: 'id', value: orderIds })
      }
      if (orderStatus) {
        const searchByStatus = otherStatus?.length > 0 ? otherStatus :  orderStatus
        options.query.where.push({ attribute: 'status', value: searchByStatus })
      }
    }
    if (userCustomerId) {
      options.query.where.push({ attribute: 'customer_id', value: parseInt(userCustomerId, 10) })
    }
    const source = {}
    requestsState.orders = source
    options.cancelToken = source
    const functionFetch = asDashboard
      ? ordering.setAccessToken(accessToken).orders().asDashboard()
      : ordering.setAccessToken(accessToken).orders()
    return await functionFetch.get(options)
  }

  const loadOrders = async (isNextPage, searchByOtherStatus, keepOrders = false) => {
    const pageSize = keepOrders ? paginationSettings.pageSize * pagination.currentPage : paginationSettings.pageSize
    if (!session.token) {
      setOrderList({
        ...orderList,
        loading: false
      })
      return
    }
    try {
      setOrderList({
        ...orderList,
        loading: true
      })
      const nextPage = !isNextPage ? pagination.currentPage + 1 : 1
      const response = await getOrders(nextPage, searchByOtherStatus, pageSize)
      setOrderList({
        loading: false,
        orders: response.content.error ? [] : response.content.result,
        error: response.content.error ? response.content.result : null
      })
      if (!response.content.error) {
        setPagination({
          currentPage: keepOrders ? pagination.currentPage : response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
          totalPages: keepOrders ? pagination.totalPages : response.content.pagination.total_pages,
          total: keepOrders ? pagination.total : response.content.pagination.total,
          from: keepOrders ? 1 : response.content.pagination.from,
          to: keepOrders ? pagination.to : response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderList({ ...orderList, loading: false, error: [err.message] })
      }
    }
  }


  const loadMessages = async (orderId) => {
    try {
      setMessages({ ...messages, loading: true })
      const url = `${ordering.root}/orders/${orderId}/messages?mode=dashboard`

      const response = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
      const { error, result } = await response.json()
      if (!error) {
        setMessages({
          messages: result,
          loading: false,
          error: null
        })
      } else {
        setMessages({
          ...messages,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setMessages({ ...messages, loading: false, error: [error.Messages] })
    }
  }

  useEffect(() => {
    if (orders || customArray) {
      setOrderList({
        ...orderList,
        orders: orders?.lenght > 0 ? orders : customArray || [],
        loading: false
      })
    } else {
      loadOrders()
    }

    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
    }
  }, [session])

  useEffect(() => {
    if (orderList.loading) return
    const handleUpdateOrder = (order) => {
      setOrderList({ ...orderList, loading: true })
      const found = orderList.orders.find(_order => _order.id === order.id)
      let orders = []
      showToast(ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id))
      if (found) {
        orders = orderList.orders.filter(_order => {
          if (_order.id === order.id) {
            delete order.total
            delete order.subtotal
            Object.assign(_order, order)
          }
          const valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status)) || updateOtherStatus.length === 0 || updateOtherStatus.includes(parseInt(_order.status))
          if (!valid) {
            pagination.total--
            setPagination({
              ...pagination
            })
          }
          return valid
        })
      } else {
        orders = [order, ...orderList.orders]
        pagination.total++
        setPagination({
          ...pagination
        })
      }
      setOrderList({
        ...orderList,
        orders,
        loading: false
      })
    }
    socket.on('update_order', handleUpdateOrder)
    return () => {
      socket.off('update_order', handleUpdateOrder)
    }
  }, [orderList.orders, pagination, socket])

  useEffect(() => {
    if (!session.user) return
    socket.join(`orders_${userCustomerId || session?.user?.id}`)
    return () => {
      socket.leave(`orders_${userCustomerId || session?.user?.id}`)
    }
  }, [socket, session, userCustomerId])

  const loadMoreOrders = async (searchByOtherStatus) => {
    setOrderList({ ...orderList, loading: true });
    try {
      const response = await getOrders(pagination.currentPage + 1, searchByOtherStatus)
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

  useEffect(() => {
    if (!orderList.loading) {
      const ordersSorted = orderList.orders.sort((a, b) => {
        if (activeOrders) {
          return new Date(b.created_at) - new Date(a.created_at)
        }
        return new Date(a.created_at) - new Date(b.created_at)
      })
      setOrderList({
        ...orderList,
        orders: ordersSorted
      })
    }
  }, [orderList.loading])

  /**
   * This effect is used to reload orders with dynamic params, using `isDynamicSort` as validation
   */
  useEffect(() => {
    if(isDynamicSort) {
      loadOrders(true, [])
    }
  }, [sortBy])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          setSortBy={setSortBy}
          orderList={orderList}
          pagination={pagination}
          loadMoreOrders={loadMoreOrders}
          goToPage={goToPage}
          loadOrders={loadOrders}
          loadMessages={loadMessages}
          messages={messages}
          setMessages={setMessages}
          setUpdateOtherStatus={setUpdateOtherStatus}
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
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`)
    }
  },
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
