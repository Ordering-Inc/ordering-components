import React, { useEffect, useState } from 'react'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useEvent } from '../../contexts/EventContext'
import { useOrder } from '../../contexts/OrderContext'

export const OrderVerticalList = (props) => {
  const {
    UIComponent,
    orderBy,
    businessId,
    useDefualtSessionManager,
    paginationSettings,
    asDashboard,
    orderGroupStatusCustom,
    onNavigationRedirect
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [events] = useEvent()
  const [socket] = useWebsocket()
  const [, t] = useLanguage()
  const [, { reorder }] = useOrder()
  const [, { showToast }] = useToast()

  const ordersStatusArray = ['upcoming', 'active', 'past', 'all']

  const ordersGroupStatus = {
    upcoming: orderGroupStatusCustom?.upcoming ?? [13],
    active: orderGroupStatusCustom?.active ?? [0, 3, 4, 7, 8, 9, 14, 15, 18, 19, 20, 21],
    past: orderGroupStatusCustom?.past ?? [1, 2, 5, 6, 10, 11, 12, 16, 17],
    all: orderGroupStatusCustom?.all ?? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
  }

  const orderObjDefault = {
    loading: true,
    error: null,
    pagination: {
      currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1)
        ? paginationSettings.initialPage - 1
        : 0,
      pageSize: paginationSettings.pageSize ?? 10,
      total: null
    }
  }

  const [reorderLoading, setReorderLoading] = useState(false)
  let [ordersGroup, setOrdersGroup] = useState({
    ...orderObjDefault,
    all: { orders: [] },
    upcoming: { orders: [] },
    active: { orders: [] },
    past: { orders: [] },
  })

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

    options.query.where = []
    if (orderStatus) {
      options.query.where.push({ attribute: 'status', value: orderStatus })

      options.query.where.push({
        attribute: 'id',
        value: {
          condition: '!=',
          value: ordersGroup?.all?.orders?.map((o) => o.id)
        }
      })
    }

    if (businessId) {
      options.query.where.push({ attribute: 'business_id', value: businessId })
    }

    const source = {}
    requestsState.orders = source
    options.cancelToken = source

    const functionFetch = asDashboard
      ? ordering.setAccessToken(accessToken).orders().asDashboard()
      : ordering.setAccessToken(accessToken).orders()
    return await functionFetch.get(options)
  }

  const loadOrders = async ({ newFetch } = {}) => {
    if (
      !newFetch &&
      ordersGroup.pagination.currentPage === ordersGroup.pagination?.totalPages &&
      ordersGroup.pagination.total !== null
    ) {
      return
    }

    if (newFetch) {
      const options = {}
      ordersStatusArray.map(tab => {
        options[tab] = { orders: [] }
      })
      ordersGroup = { ...orderObjDefault, ...options }
    }

    const pageSize = paginationSettings.pageSize

    try {
      setOrdersGroup({ ...ordersGroup, loading: true })
      const { content: { error, result, pagination } } = await getOrders({
        page: 1,
        pageSize,
        orderStatus: ordersGroupStatus.all,
        newFetch
      })

      const tabOptions = {}
      ordersStatusArray.map(tab => {
        tabOptions[tab] = {
          orders: error
            ? newFetch
              ? []
              : sortOrders(ordersGroup[tab].orders)
            : newFetch
              ? sortOrders(result.filter((order) => ordersGroupStatus[tab].includes(order.status)))
              : sortOrders(ordersGroup[tab].orders.concat(result.filter(order => ordersGroupStatus[tab].includes(order.status))))
        }
      })

      setOrdersGroup({
        ...ordersGroup,
        loading: false,
        error: error ? result : null,
        ...tabOptions,
        pagination: {
          ...ordersGroup.pagination,
          currentPage: pagination.current_page,
          pageSize: pagination.page_size,
          totalPages: pagination.total_pages,
          total: pagination.total,
          from: pagination.from,
          to: pagination.to
        }
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrdersGroup({
          ...ordersGroup,
          loading: false,
          error: [err?.message ?? 'ERROR']
        })
      }
    }
  }

  const loadMoreOrders = async () => {
    try {
      setOrdersGroup({ ...ordersGroup, loading: true })
      const { content: { error, result, pagination } } = await getOrders({
        page: ordersGroup.pagination.currentPage + 1,
        orderStatus: ordersGroupStatus.all,
      })

      const tabOptions = {}
      ordersStatusArray.map(tab => {
        tabOptions[tab] = {
          orders: error
            ? sortOrders(ordersGroup[tab].orders)
            : sortOrders(ordersGroup[tab].orders.concat(result.filter(order => ordersGroupStatus[tab].includes(order.status)))),
        }
      })

      setOrdersGroup({
        ...ordersGroup,
        loading: false,
        error: error ? result : null,
        ...tabOptions,
        pagination: !error
          ? {
            ...ordersGroup.pagination,
            currentPage: pagination.current_page,
            pageSize: pagination.page_size,
            totalPages: pagination.total_pages,
            total: pagination.total,
            from: pagination.from,
            to: pagination.to
          }
          : ordersGroup.pagination
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrdersGroup({
          ...ordersGroup,
          loading: false,
          error: [err?.message ?? 'ERROR']
        })
      }
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
    const upcoming = orderGroupStatusCustom?.upcoming ?? [13]
    const active = orderGroupStatusCustom?.active ?? [0, 3, 4, 7, 8, 9, 14, 15, 18, 19, 20, 21]

    const status = upcoming.includes(id)
      ? 'upcoming'
      : active.includes(id)
        ? 'active'
        : 'past'

    return status
  }

  const actionOrderToTab = (orderAux, status, type) => {
    const orderList = ordersGroup[status].orders
    let orders
    const order = {
      ...orderAux,
      showNotification: true
    }
    if (type === 'update') {
      const indexToUpdate = orderList.findIndex((o) => o.id === order.id)
      orderList[indexToUpdate] = order
      orders = orderList
    } else {
      orders = type === 'add'
        ? [order, ...orderList]
        : orderList.filter((_order) => _order.id !== order.id)
    }

    ordersGroup[status].orders = sortOrders(orders)

    if (type !== 'update') {
      ordersGroup.pagination = {
        ...ordersGroup.pagination,
        total: ordersGroup.pagination.total + (type === 'add' ? 1 : -1)
      }
    }
  }

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        onNavigationRedirect && onNavigationRedirect('CheckoutNavigator', { cartUuid: result.uuid })
        setReorderLoading(false)
        return
      }
      setReorderLoading(false)

    } catch (err) {
      showToast(ToastType.Error, t('ERROR', err.message))
      setReorderLoading(false)
    }
  }

  useEffect(() => {
    loadOrders({newFetch: ordersGroup.pagination.total === null })
  }, [])

  useEffect(() => {
    if (ordersGroup.loading) return

    const handleUpdateOrder = (order) => {
      events.emit('order_updated', order)
      let orderFound = null

      for (let i = 0; i < ordersStatusArray.length; i++) {
        const status = ordersStatusArray[i]
        orderFound = ordersGroup[status].orders.find((_order) => _order.id === order.id)
        if (orderFound) break
      }

      showToast(
        ToastType.Info,
        t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id),
        1000
      )

      if (!orderFound) {
        if (
          !order?.products ||
          !order?.summary ||
          typeof order?.status !== 'number' ||
          !order?.customer ||
          !order?.business ||
          !order?.paymethod
        ) {
          return
        }
        delete order.total
        delete order.subtotal

        actionOrderToTab(order, getStatusById(order?.status), 'add')

        return
      }

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
        const newOrderStatus = getStatusById(order?.status) ?? ''
        const currentOrderStatus = getStatusById(orderFound?.status) ?? ''

        Object.assign(orderFound, order)

        if (newOrderStatus !== currentOrderStatus) {
          actionOrderToTab(orderFound, currentOrderStatus, 'remove')

          const total = ordersGroup.pagination.total ?? null

          if (total !== null) {
            actionOrderToTab(orderFound, newOrderStatus, 'add')
          }
        } else {
          actionOrderToTab(orderFound, newOrderStatus, 'update')
        }
      }
    }

    const handleAddNewOrder = (order) => {
      events.emit('order_added', order)
      showToast(
        ToastType.Info,
        t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id),
        1000
      )
      const status = getStatusById(order?.status) ?? ''
      actionOrderToTab(order, status, 'add')
      actionOrderToTab(order, 'all', 'add')
    }

    socket?.on('orders_register', handleAddNewOrder)
    socket?.on('update_order', handleUpdateOrder)
    return () => {
      socket?.off('orders_register', handleAddNewOrder)
      socket?.off('update_order', handleUpdateOrder)
    }
  }, [ordersGroup, socket, session])

  useEffect(() => {
    if (!session.user) return
    socket?.on('disconnect', () => {
      const ordersRoom = session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
      socket?.join(ordersRoom)
    })
    const ordersRoom = session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
    socket?.join(ordersRoom)
    return () => {
      socket?.leave(ordersRoom)
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
          ordersGroup={ordersGroup}
          reorderLoading={reorderLoading}
          setOrdersGroup={setOrdersGroup}
          loadOrders={loadOrders}
          loadMoreOrders={loadMoreOrders}
          handleReorder={handleReorder}
        />
      )}
    </>
  )
}

OrderVerticalList.defaultProps = {
  orderBy: '-id',
  orderDirection: 'desc',
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
