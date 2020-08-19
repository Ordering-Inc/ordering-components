import React, { useEffect, useState } from 'react'
import PropTypes, { object, number } from 'prop-types'

import { useSession } from '../../contexts/SessionContext'

export const OrderList = (props) => {
  const {
    ordering,
    UIComponent,
    orders,
    orderIds,
    orderStatus,
    orderBy,
    orderDirection,
    useDefualtSessionManager,
    paginationSettings
  } = props

  const [orderList, setOrderList] = useState({ loading: false, error: null, orders: [] })
  const [pagination, setPagination] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10
  })
  const [session] = useSession()

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

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
    return await ordering.setAccessToken(accessToken).orders().get(options)
  }

  const loadOrders = async () => {
    setOrderList({ ...orderList, loading: true })
    try {
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
      setOrderList({ ...orderList, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (orders) {
      setOrderList({
        ...orderList,
        orders
      })
    } else {
      loadOrders()
    }
  }, [])

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
      setOrderList({ ...orderList, loading: false, error: [err.message] })
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
      setOrderList({ ...orderList, loading: false, error: [err.message] })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderList={orderList}
          pagination={pagination}
          loadMoreOrders={loadMoreOrders}
          goToPage={goToPage}
          // formState={formState}
          // userState={userState}
          // validationFields={validationFields}
          // showField={showField}
          // isRequiredField={isRequiredField}
          // hanldeChangeInput={hanldeChangeInput}
          // handlechangeImage={handlechangeImage}
          // handleButtonUpdateClick={handleUpdateClick}
        />
      )}
    </>
  )
}

OrderList.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
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
