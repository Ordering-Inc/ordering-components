import React, { useEffect, useState } from 'react'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const OrderListGroups = (props) => {
  const {
    UIComponent,
    orderBy,
    useDefualtSessionManager,
    paginationSettings,
    asDashboard,
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const socket = useWebsocket()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const ordersStatusArray = ['pending', 'inProgress', 'completed', 'cancelled']

  const ordersGroupStatus = {
    pending: [0, 13],
    inProgress: [3, 4, 7, 8, 9, 14, 18, 19, 20, 21],
    completed: [1, 11, 15],
    cancelled: [2, 5, 6, 10, 12, 16, 17],
  };

  const orderStructure = {
    loading: false,
    error: null,
    orders: [],
    pagination: {
      currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1)
      ? paginationSettings.initialPage - 1
      : 0,
      pageSize: paginationSettings.pageSize ?? 10
    }
  }

  const [ordersGroup, setOrdersGroup] = useState<any>({
    pending: {
      ...orderStructure,
      defaultFilter: ordersGroupStatus['pending'],
      currentFilter: ordersGroupStatus['pending'],
    },
    inProgress: {
      ...orderStructure,
      defaultFilter: ordersGroupStatus['inProgress'],
      currentFilter: ordersGroupStatus['inProgress'],
    },
    completed: {
      ...orderStructure,
      defaultFilter: ordersGroupStatus['completed'],
      currentFilter: ordersGroupStatus['completed'],
    },
    cancelled: {
      ...orderStructure,
      defaultFilter: ordersGroupStatus['cancelled'],
      currentFilter: ordersGroupStatus['cancelled'],
    },
  })
  const [currentTabSelected, setCurrentTabSelected] = useState('pending')
  const [messages, setMessages] = useState<any>({ loading: false, error: null, messages: [] })
  const [currentFilters, setCurrentFilters] = useState(null)

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken
  const requestsState = {}

  const getOrders = async ({ page, pageSize = paginationSettings.pageSize, orderStatus }) => {
    const options = {
      query: {
        orderBy,
        page: page,
        page_size: pageSize
      }
    }
    if (orderStatus) {
      options.query.where = []
      options.query.where.push({ attribute: 'status', value: orderStatus })
    }

    const source = {}
    requestsState.orders = source
    options.cancelToken = source

    const functionFetch = asDashboard
      ? ordering.setAccessToken(accessToken).orders().asDashboard()
      : ordering.setAccessToken(accessToken).orders()
    return await functionFetch.get(options)
  }

  const loadOrders = async ({ isNextPage, newFetch } = {}) => {
    if (
      !newFetch &&
      (
        (ordersGroup[currentTabSelected].pagination.currentPage > 0 &&
        ordersGroup[currentTabSelected].pagination.currentPage === ordersGroup[currentTabSelected].pagination.totalPages) ||
        ordersGroup[currentTabSelected].orders.length > 0 &&
        ordersGroup[currentTabSelected].pagination?.totalPages > 0
      )
    ) {
      return
    }

    const pageSize = paginationSettings.pageSize

    try {
      setOrdersGroup({
        ...ordersGroup,
        [currentTabSelected]: {
          ...ordersGroup[currentTabSelected],
          loading: true
        }
      })
      const nextPage = !isNextPage ? ordersGroup[currentTabSelected].pagination.currentPage + 1 : 1
      const { content: { error, result, pagination } } = await getOrders({
        page: 1 ?? nextPage,
        pageSize,
        orderStatus: ordersGroup[currentTabSelected].currentFilter
      })
      console.log('load orders', error, result, pagination);

      setOrdersGroup({
        ...ordersGroup,
        [currentTabSelected]: {
          ...ordersGroup[currentTabSelected],
          loading: false,
          orders: error ? [] : result,
          error: error ? result : null,
          pagination: {
            ...ordersGroup[currentTabSelected].pagination,
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to
          }
        }
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrdersGroup({
          ...ordersGroup,
          [currentTabSelected]: {
            ...ordersGroup[currentTabSelected],
            loading: false,
            error: [err?.message ?? 'ERROR'],
          }
        })
      }
    }
  }

  const loadMoreOrders = async () => {
    setOrdersGroup({
      ...ordersGroup,
      [currentTabSelected]: {
        ...ordersGroup[currentTabSelected],
        loading: true
      }
    })
    try {
      const { content: { error, result, pagination } } = await getOrders({
        page: ordersGroup[currentTabSelected].pagination.currentPage + 1,
        orderStatus: ordersGroup[currentTabSelected].currentFilter
      })

      setOrdersGroup({
        ...ordersGroup,
        [currentTabSelected]: {
          ...ordersGroup[currentTabSelected],
          loading: false,
          orders: error
            ? ordersGroup[currentTabSelected].orders
            : ordersGroup[currentTabSelected].orders.concat(result),
          error: error ? result : null,
          pagination: !error
            ? {
              ...ordersGroup[currentTabSelected].pagination,
              currentPage: pagination.current_page,
              pageSize: pagination.page_size,
              totalPages: pagination.total_pages,
              total: pagination.total,
              from: pagination.from,
              to: pagination.to
            }
            : ordersGroup[currentTabSelected].pagination
        }
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrdersGroup({
          ...ordersGroup,
          [currentTabSelected]: {
            ...ordersGroup[currentTabSelected],
            loading: false,
            error: [err?.message ?? 'ERROR'],
          }
        })
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

  const sortOrders = (orders, sortBy = 'desc') => {
    const ordersSorted = orders.sort((a, b) => {
      if (sortBy === 'desc') {
        return b.id - a.id
      }
      return a.id - b.id
    })

    return ordersSorted
  }

  const getStatusById = (id) => {
    if (!id && id !== 0) return
    const pending = [0, 13]
    const inProgress = [3, 4, 7, 8, 9, 14, 18, 19, 20, 21]
    const completed = [1, 11, 15]
    const cancelled = [2, 5, 6, 10, 12, 16, 17]

    const status = pending.includes(id)
      ? 'pending'
      : inProgress.includes(id)
        ? 'inProgress'
        : completed.includes(id)
          ? 'completed'
          : 'cancelled'

    return status
  }

  const actionOrderToTab = (order, status, type) => {
    const orderList = ordersGroup[status].orders
    let orders = type === 'add'
      ? [order, ...orderList]
      : orderList.filter((_order) => _order.id !== order.id)

    ordersGroup[status].orders = sortOrders(orders)
    ordersGroup[status].pagination = {
      ...ordersGroup[status].pagination,
      total: ordersGroup[status].pagination.total + (type === 'add' ? 1 : -1)
    }
  }

  useEffect(() => {
    console.log('inside 1');
    loadOrders({ newFetch: !!currentFilters })
  }, [currentTabSelected])

  useEffect(() => {
    if (currentFilters) {
      loadOrders({ newFetch: !!currentFilters })
    }
  }, [currentFilters])

  useEffect(() => {
    if (ordersGroup[currentTabSelected].loading) return

    const handleUpdateOrder = (order) => {
      let orderFound = null

      for (let i = 0; i < ordersStatusArray.length; i++) {
        const status = ordersStatusArray[i];
        orderFound = ordersGroup[status].orders.find((_order) => _order.id === order.id)
        if (orderFound) break
      }

      if (!orderFound) return

      showToast(
        ToastType.Info,
        t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id)
      )

      if (
        orderFound.id === order.id &&
        orderFound?.driver?.id !== order?.driver?.id &&
        session?.user?.level === 4
      ) {
        actionOrderToTab(orderFound, getStatusById(orderFound.status), 'remove')
      }

      if (orderFound.id === order.id) {
        delete order.total
        delete order.subtotal
      }

      if (!order?.status && order?.status !== 0) {
        Object.assign(orderFound, order)
      } else {
        const newOrderStatus = getStatusById(order?.status)
        const currentOrderStatus = getStatusById(orderFound?.status)

        if (newOrderStatus !== currentOrderStatus) {
          Object.assign(orderFound, order)
          actionOrderToTab(orderFound, currentOrderStatus, 'remove')
          actionOrderToTab(orderFound, newOrderStatus, 'add')
        }
      }
    }

    const handleAddNewOrder = (order) => {
      console.log('handleAddNewOrder', order);
      showToast(
        ToastType.Info,
        t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id)
      )
      const status = getStatusById(order?.status)
      actionOrderToTab(order, status, 'add')
    }

    socket.on('orders_register', handleAddNewOrder)
    socket.on('update_order', handleUpdateOrder)
    return () => {
      socket.off('orders_register', handleAddNewOrder)
      socket.off('update_order', handleUpdateOrder)
    }
  }, [ordersGroup, socket, session])

  useEffect(() => {
    if (!session.user) return
    socket.on('disconnect', () => {
      const ordersRoom = session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
      socket.join(ordersRoom)
    })
    const ordersRoom = session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
    socket.join(ordersRoom)
    return () => {
      socket.leave(ordersRoom)
    }
  }, [socket, session])

  useEffect(() => {
    const request = requestsState.orders
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.orders])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          currentFilters={currentFilters}
          setCurrentFilters={setCurrentFilters}
          currentTabSelected={currentTabSelected}
          setCurrentTabSelected={setCurrentTabSelected}
          ordersGroup={ordersGroup}
          setOrdersGroup={setOrdersGroup}
          messages={messages}
          setMessages={setMessages}
          loadOrders={loadOrders}
          loadMessages={loadMessages}
          loadMoreOrders={loadMoreOrders}
        />
      )}
    </>
  )
}

OrderListGroups.defaultProps = {
  orderBy: '-id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
