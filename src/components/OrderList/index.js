import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'

import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useOrder } from '../../contexts/OrderContext'
import { useEvent } from '../../contexts/EventContext'
import dayjs from 'dayjs'

export const OrderList = props => {
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
    isDynamicSort,
    businessId,
    franchiseId,
    businessesSearchList,
    setIsEmptyBusinesses,
    businessOrderIds,
    setBusinessOrderIds,
    propsToFetchBusiness,
    isBusiness,
    noGiftCardOrders,
    propsToFetch,
    handleRedirectToCheckout
  } = props

  const [ordering] = useApi()
  const [socket] = useWebsocket()
  const [orderState, { reorder }] = useOrder()
  const [session] = useSession()
  const [events] = useEvent()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [orderList, setOrderList] = useState({
    loading: !orders,
    error: null,
    orders: []
  })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    total: null
  })
  const [messages, setMessages] = useState({ loading: false, error: null, messages: [] })
  const [updateOtherStatus, setUpdateOtherStatus] = useState([])
  const [sortBy, setSortBy] = useState({ param: orderBy, direction: orderDirection })
  const [reorderState, setReorderState] = useState({ loading: false, result: [], error: null })
  const [products, setProducts] = useState([])
  const [professionals, setProfessionals] = useState([])
  const [businesses, setBusinesses] = useState({ loading: false, result: [], error: null })

  const profileMessage = props.profileMessages
  const accessToken = useDefualtSessionManager ? session.token : props.accessToken
  const requestsState = {}
  const isValidMoment = (date, format) => dayjs.utc(date, format).format(format) === date

  const handleReorder = async (value) => {
    const orderId = Array.isArray(value) ? value : [value]
    if (!orderId?.length) return

    try {
      setReorderState({ ...reorderState, loading: true })

      const fetchOrders = async (ids) => {
        const promises = ids.map(async id => {
          const res = await reorder(id, ids?.length > 1)
          return res
        })
        const data = await Promise.all(promises)
        return data
      }

      const reordersArray = await fetchOrders(orderId)

      const error = reordersArray.length && reordersArray.every(obj => obj.error) && reordersArray[0]?.result?.[0]
      const result = reordersArray.length && reordersArray.map(obj => (obj.result?.[0] ?? obj.result)).filter(o => typeof o !== 'string')

      const choosedOrder = orderList.orders.find(_order => _order?.id === orderId[0])
      const _businessId = choosedOrder?.business_id ?? choosedOrder?.original?.business_id
      const _businessData = await ordering.businesses(_businessId).select(['slug']).get()
      const _businessSlug = await _businessData?.content?.result?.slug
      const orderResult = { orderId: orderId[0], business_id: _businessId, business: { slug: _businessSlug } }
      if (result[0].uuid) {
        handleRedirectToCheckout(result[0].uuid)
      }

      setReorderState({
        ...reorderState,
        loading: false,
        error,
        result: error ? orderResult : { ...(result[0]), orderId: orderId[0] }
      })
    } catch (err) {
      setReorderState({
        ...reorderState,
        loading: false,
        error: true,
        result: [err?.message]
      })
    }
  }

  const getOrders = async (page, otherStatus = [], pageSize = paginationSettings.pageSize) => {
    const options = {
      query: {
        orderBy: `${sortBy.direction === 'desc' ? '-' : ''}${sortBy.param}`,
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
        const searchByStatus = otherStatus?.length > 0 ? otherStatus : orderStatus
        options.query.where.push({ attribute: 'status', value: searchByStatus })
      }
    }
    if (userCustomerId) {
      options.query.where.push({ attribute: 'customer_id', value: parseInt(userCustomerId, 10) })
    }
    if (businessId) {
      options.query.where.push({ attribute: 'business_id', value: parseInt(businessId, 10) })
    }
    if (franchiseId) {
      options.query.where.push({ attribute: 'ref_business', conditions: [{ attribute: 'franchise_id', value: parseInt(franchiseId, 10) }] })
    }
    if (noGiftCardOrders) {
      options.query.where.push({
        attribute: 'products',
        conditions: [{
          attribute: 'type',
          value: {
            condition: '=',
            value: 'item'
          }
        }]
      })
    }

    const source = {}
    requestsState.orders = source
    options.cancelToken = source
    const functionFetch = asDashboard
      ? ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch)
      : ordering.setAccessToken(accessToken).orders().select(propsToFetch)
    return await functionFetch.get(options)
  }

  const loadOrders = async (
    isNextPage,
    searchByOtherStatus,
    keepOrders = false,
    getFirstOrder
  ) => {
    if (
      pagination?.currentPage === pagination?.totalPages &&
      pagination?.total !== null &&
      !getFirstOrder
    ) {
      return
    }

    const pageSize = keepOrders
      ? paginationSettings.pageSize * pagination.currentPage
      : paginationSettings.pageSize
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
      if (isBusiness) {
        setBusinesses({
          ...businesses,
          loading: true
        })
      }
      const nextPage = !isNextPage ? pagination.currentPage + 1 : 1
      const response = await getOrders(getFirstOrder ? 0 : nextPage, searchByOtherStatus, pageSize)

      if (searchByOtherStatus) {
        setOrderList({
          loading: false,
          orders: response.content.error
            ? []
            : [...response.content.result, ...orderList.orders],
          error: response.content.error ? response.content.result : null
        })
      } else {
        setOrderList({
          loading: false,
          orders: response.content.error ? [] : response.content.result,
          error: response.content.error ? response.content.result : null
        })
      }
      setProfessionals([...response.content.result, ...orderList.orders]
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue?.products?.[0]?.calendar_event?.professional), [])
        .filter((professional, i, hash) => professional && hash?.map(_professional => _professional?.id)?.indexOf(professional?.id) === i)
      )
      const businessIds = [...response.content.result, ...orderList.orders].map(order => order.business_id)
      setBusinessOrderIds && setBusinessOrderIds(businessIds)
      setProducts(
        [...response.content.result, ...orderList.orders]
          ?.filter(order => !businessesSearchList || businessesSearchList?.businesses?.some(business => order?.business_id === business?.id))
          ?.map(order => order?.products?.map(product => ({ ...product, business: order?.business, businessId: order?.business_id })))
          ?.flat()
          ?.filter((product, i, hash) => hash.map(_product => _product?.product_id).indexOf(product?.product_id) === i)
      )
      if (isBusiness) {
        getBusinesses(businessIds)
      }

      if (!response.content.error) {
        setPagination({
          currentPage: keepOrders
            ? pagination.currentPage
            : response.content.pagination.current_page,
          pageSize: response.content.pagination.page_size,
          totalPages: keepOrders
            ? pagination.totalPages
            : response.content.pagination.total_pages,
          total: keepOrders
            ? pagination.total
            : response.content.pagination.total,
          from: keepOrders ? 1 : response.content.pagination.from,
          to: keepOrders ? pagination.to : response.content.pagination.to
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderList({ ...orderList, loading: false, error: [err.message] })
        setBusinesses({
          ...businesses,
          loading: false
        })
      }
    }
  }

  const handleUpdateOrderList = (orderId, changes) => {
    const updatedOrders = orderList?.orders.map(order => {
      if (order?.id === orderId) {
        return {
          ...order,
          ...changes
        }
      }
      return order
    })
    setOrderList({
      ...orderList,
      orders: updatedOrders
    })
  }

  const loadMessages = async (orderId) => {
    try {
      setMessages({ ...messages, loading: true })
      const url = `${ordering.root}/orders/${orderId}/messages?mode=dashboard`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      })
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
    } catch (err) {
      setMessages({ ...messages, loading: false, error: [err.message] })
    }
  }

  const getBusinesses = async (businessIds) => {
    try {
      const parameters = {
        location: `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
      }

      if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
        const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
        parameters.timestamp = moment
      }

      let where = null
      const conditions = []

      if (businessIds) {
        conditions.push({
          attribute: typeof businessIds === 'string' ? 'slug' : 'id',
          value: businessIds
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }

      const source = {}
      requestsState.businesses = source

      const fetchEndpoint = ordering.businesses().select(propsToFetchBusiness).parameters(parameters).where(where)

      const { content: { error, result } } = await fetchEndpoint.get({ cancelToken: source })
      if (!error) {
        setBusinesses({
          result,
          error: null,
          loading: false
        })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinesses({
          ...businesses,
          err: err.message,
          loading: false
        })
      }
    }
  }

  // Function to update professional list
  const handleUpdateProfessionals = (id, changes) => {
    const updateProfessionals = professionals.map(professional => {
      if (professional?.id === id) {
        return {
          ...professional,
          ...changes
        }
      }
      return professional
    })
    setProfessionals(updateProfessionals)
  }

  useEffect(() => {
    if (orders || customArray) {
      setOrderList({
        ...orderList,
        orders: orders?.lenght > 0 ? orders : customArray || [],
        loading: false
      })
    } else if (!businessesSearchList) {
      loadOrders(false, false, false, true)
    }

    return () => {
      if (requestsState.orders) {
        requestsState.orders.cancel()
      }
    }
  }, [isBusiness])

  useEffect(() => {
    if (orderList.loading) return
    const handleUpdateOrder = (order) => {
      setOrderList({ ...orderList, loading: true })
      const found = orderList.orders.find(_order => _order.id === order.id)
      let orders = []
      showToast(ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id))
      if (found) {
        orders = orderList.orders.filter(_order => {
          if (_order.id === order.id && _order?.driver?.id !== order?.driver?.id && session?.user?.level === 4) {
            return false
          }

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

    const handleAddNewOrder = (order) => {
      setOrderList({
        ...orderList,
        loading: true
      })
      showToast(ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id))
      const newOrder = [order, ...orderList.orders]
      setOrderList({
        ...orderList,
        orders: newOrder,
        loading: false
      })
    }

    socket.on('orders_register', handleAddNewOrder)
    socket.on('update_order', handleUpdateOrder)
    const ordersRoom = !props.isAsCustomer && session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
    socket.join(ordersRoom)
    return () => {
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleAddNewOrder)
    }
  }, [orderList.orders, pagination, socket, session])

  useEffect(() => {
    if (!session.user) return
    socket.on('disconnect', (reason) => {
      const ordersRoom = !props.isAsCustomer && session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
      socket.join(ordersRoom)
    })
    const ordersRoom = !props.isAsCustomer && session?.user?.level === 0 ? 'orders' : `orders_${session?.user?.id}`
    socket.join(ordersRoom)
    return () => {
      socket.leave(ordersRoom)
    }
  }, [socket, session, userCustomerId])

  const loadMoreOrders = async (searchByOtherStatus) => {
    setOrderList({ ...orderList, loading: true })
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

  const goToPage = async page => {
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

  const sortOrders = (orders, sortBy = 'desc') => {
    const ordersSorted = orders.sort((a, b) => {
      if (sortBy === 'desc') {
        return b.id - a.id
      }
      return a.id - b.id
    })

    return ordersSorted
  }

  const handleUpdateProducts = (productId, changes) => {
    const updatedProducts = products?.map(product => {
      if (product?.product_id === productId) {
        return {
          ...product,
          ...changes
        }
      }
      return product
    })
    setProducts(updatedProducts)
  }

  const handleUpdateBusinesses = (businessId, changes) => {
    const updatedBusiness = businesses?.result?.map(business => {
      if (business?.id === businessId) {
        return {
          ...business,
          ...changes
        }
      }
      return business
    })
    setBusinesses({
      ...businesses,
      result: updatedBusiness
    })
  }

  const getPage = async (page, pageSize) => {
    setOrderList({ ...orderList, loading: true })
    try {
      const response = await getOrders(page, pageSize)
      setOrderList({
        loading: false,
        orders: response.content.error ? orderList.orders : response.content.result,
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
    if (profileMessage) return
    if (!orderList.loading && orderBy !== 'last_direct_message_at') {
      const ordersSorted = orderList.orders.sort((a, b) => {
        if (activeOrders) {
          return dayjs(b.created_at).unix() - dayjs(a.created_at).unix()
        }
        return dayjs(a.created_at).unix() - dayjs(b.created_at).unix()
      })
      setOrderList({
        ...orderList,
        orders: ordersSorted
      })
    }
  }, [orderList.loading, orderBy])

  /**
   * This effect is used to reload orders with dynamic params, using `isDynamicSort` as validation
   */
  useEffect(() => {
    if (isDynamicSort) {
      loadOrders(true, [])
    }
  }, [sortBy])

  useEffect(() => {
    if (businessesSearchList && !businessesSearchList?.loading) {
      loadOrders(false, false, false, true)
    }
  }, [businessesSearchList, businessId])

  useEffect(() => {
    setIsEmptyBusinesses && setIsEmptyBusinesses(businessOrderIds?.length === 0)
  }, [businessOrderIds])

  useEffect(() => {
    const handleOrderMessageRead = (orderId) => {
      const updatedOrders = orderList.orders.map(order => {
        if (order.id === orderId) {
          return { ...order, unread_count: 0 }
        }
        return order
      })
      setOrderList({
        ...orderList,
        orders: updatedOrders
      })
    }
    events.on('order_message_read', handleOrderMessageRead)
    return () => {
      events.off('order_message_read', handleOrderMessageRead)
    }
  }, [orderList.orders])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          sortOrders={sortOrders}
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
          handleReorder={handleReorder}
          reorderState={reorderState}
          businessOrderIds={businessOrderIds}
          products={products}
          handleUpdateOrderList={handleUpdateOrderList}
          handleUpdateProducts={handleUpdateProducts}
          handleUpdateBusinesses={handleUpdateBusinesses}
          businesses={businesses}
          professionals={professionals}
          handleUpdateProfessionals={handleUpdateProfessionals}
          getPage={getPage}
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
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof props[
        propName
        ]}\` supplied to \`UserProfile\`, expected \`object\`.`
      )
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(
        `Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`
      )
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
  afterElements: [],
  isAsCustomer: false,
  propsToFetchBusiness: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'ribbon', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id']
}
