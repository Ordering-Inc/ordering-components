import React from 'react'
import { range } from 'lodash'

export const ActiveOrdersUI = (props) => {
  const {
    orderList,
    pagination,
    onOrderClick,
    goToPage,
    loadMoreOrders,
    paginationSettings
  } = props

  return (
    <>
      <h1>ActiveOrderList! {!orderList.loading && !orderList.error && <small>({pagination.total})</small>}</h1>
      {
        orderList.loading && <p>Loading orders...</p>
      }
      {
        !orderList.loading && orderList.error && <p>{orderList.error}</p>
      }
      {
        !orderList.loading && !orderList.error && !orderList.orders.length && <p>No have orders</p>
      }
      {
        !orderList.error && orderList.orders.map(order => (
          <div className='order' key={order.id}>
            <strong>Order #{order.id}</strong>
            <br />
            {
              order.business && <>Business name: {order.business.name}<br /></>
            }
            {
              order.delivery_datetime && <>Datetime: {order.delivery_datetime}<br /></>
            }
            {
              order.status !== undefined && <>Status: {order.status}<br /></>
            }
            {
              order.products && order.total && <>Order: {order.total}<br /></>
            }
            <button type='button' onClick={() => onOrderClick(order)}>View order</button>
            <hr />
          </div>
        ))
      }
      {
        paginationSettings.controlType === 'infinity' && (
          <div>
            Load more control:{' '}
            {
              pagination.totalPages && pagination.currentPage < pagination.totalPages && <button type='button' onClick={loadMoreOrders}>Load more</button>
            }
          </div>
        )
      }
      {
        paginationSettings.controlType === 'pages' && (
          <div>
            Pagination control:{' '}
            {
              pagination.totalPages && pagination.currentPage < pagination.totalPages && range(1, pagination.totalPages).map(i => (
                <button key={i} type='button' onClick={() => goToPage(i)}>Page {i} {i === pagination.currentPage && '(Current)'}</button>
              ))
            }
          </div>
        )
      }
    </>
  )
}
