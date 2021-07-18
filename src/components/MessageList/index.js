import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'

import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const MessageList = (props) => {
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
  } = props

  const [ordering] = useApi()
  const [orderList, setOrderList] = useState({ loading: !orders, error: null, orders: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [messages, setMessages] = useState({ loading: true, error: null, messages: [] })
  const [session] = useSession()
  const socket = useWebsocket()
  const [messagesReadList, setMessagesReadList] = useState(false)

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken
  const requestsState = {}

  const getOrders = async (page) => {
    const options = {
      query: {
        orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
        page: page,
        page_size: paginationSettings.pageSize
      }
    }
    if (orderIds || orderStatus) {
      options.query.where = []
      if (orderIds) {
        options.query.where.push({ attribute: 'id', value: orderIds })
      }
      if (orderStatus) {
        options.query.where.push({ attribute: 'status', value: orderStatus })
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

  const loadOrders = async () => {
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
      const response = await getOrders(pagination.currentPage + 1)
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
      if (found) {
        orders = orderList.orders.filter(_order => {
          if (_order.id === order.id) {
            delete order.total
            delete order.subtotal
            Object.assign(_order, order)
          }
          const valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status))
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

    /**
   * Method to Load message for first time
   */
     const loadMessages = async (orderId) => {
      try {
        setMessages({ ...messages, loading: true })
        const url = userCustomerId
          ? `${ordering.root}/orders/${orderId}/messages?mode=dashboard`
          : `${ordering.root}/orders/${orderId}/messages`
        const response = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
        const { error, result } = await response.json()
        console.log(result)
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
  
    /**
     * Method to send a message
     * @param {string} spot
     */
    const sendMessage = async (spot, orderId) => {
      if (sendCustomMessage) {
        return sendCustomMessage(spot)
      }
      try {
        setMessageErrors({
          ...messageErrors,
          loading: true
        })
        const { status } = await fetch(`${ordering.root}/orders/${orderId}/messages`, {
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            can_see: '0,2,3',
            comment: `I am on the parking number: ${spot}`,
            order_id: orderId,
            type: 2
          })
        })
        setMessageErrors({
          ...messageErrors,
          loading: false,
          status
        })
      } catch (e) {
        setMessageErrors({
          ...messageErrors,
          loading: false,
          error: [e.message]
        })
      }
    }


    const readMessages = async (orderId) => {
      const messageId = messages?.messages[messages?.messages?.length - 1]?.id
      try {
        const response = await fetch(`${ordering.root}/orders/${orderId}/messages/${messageId}/read`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        const { result } = await response.json()
  
        setMessagesReadList(result)
      } catch (e) {
        console.log(e.message)
      }
    }
  
      /**
   * handler send message with spot info
   * @param {number} param0
   */
  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderList={orderList}
          pagination={pagination}
          loadMoreOrders={loadMoreOrders}
          goToPage={goToPage}
          loadOrders={loadOrders}
          loadMessages={loadMessages}
          handlerSubmit={handlerSubmitSpotNumber}
          messages={messages}
          setMessages={setMessages}
          readMessages={readMessages}
          messagesReadList={messagesReadList}
        />
      )}
    </>
  )
}

MessageList.propTypes = {
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

MessageList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
