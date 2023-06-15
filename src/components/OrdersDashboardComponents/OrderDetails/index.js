import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'
import { useEvent } from '../../../contexts/EventContext'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useToast, ToastType } from '../../../contexts/ToastContext'

export const OrderDetails = (props) => {
  const {
    orderId,
    propsToFetch,
    asDashboard,
    hashKey,
    userCustomerId,
    isDisableLoadMessages,
    drivers,
    UIComponent
  } = props

  const [{ token, loading }] = useSession()
  const [ordering] = useApi()
  const [events] = useEvent()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [orderState, setOrderState] = useState({ order: null, loading: !props.order, error: null })
  const [messageErrors, setMessageErrors] = useState({ status: null, loading: false, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [messages, setMessages] = useState({ loading: true, error: null, messages: [] })
  const [messagesReadList, setMessagesReadList] = useState(false)

  const socket = useWebsocket()

  const accessToken = props.accessToken || token

  /**
   * Method to format a price number
   * @param {Number} price
   */
  const formatPrice = price => price && `$ ${price.toFixed(2)}`

  /**
   * Method to Load message for first time
   */
  const loadMessages = async () => {
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

  /**
   * Method to send a message
   * @param {string} spot
   */
  const sendMessage = async (spot) => {
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

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  /**
   * Method to get order from API
   */
  const getOrder = async () => {
    const options = {}
    if (hashKey) {
      options.headers = {
        'X-uuid-access-X': hashKey
      }
    }
    if (userCustomerId) {
      options.query = {
        mode: 'dashboard'
      }
    }
    try {
      setOrderState({
        ...orderState,
        loading: true
      })
      let functionFetch
      if (propsToFetch) {
        functionFetch = asDashboard
          ? ordering.setAccessToken(token).orders(orderId).asDashboard().select(propsToFetch)
          : ordering.setAccessToken(token).orders(orderId).select(propsToFetch)
      } else {
        functionFetch = asDashboard
          ? ordering.setAccessToken(token).orders(orderId).asDashboard()
          : ordering.setAccessToken(token).orders(orderId)
      }
      const { content: { result } } = await functionFetch.get()
      const order = Array.isArray(result) ? null : result
      setOrderState({
        ...orderState,
        loading: false,
        order
      })
    } catch (e) {
      setOrderState({
        ...orderState,
        loading: false,
        error: [e.message]
      })
    }
  }
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  const handleUpdateOrderStatus = async (order) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const response = await fetch(`${ordering.root}/orders/${order?.id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: order.newStatus })
      })
      const content = await response.json()
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  const readMessages = async () => {
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

  const handleRefundPaymentsStripe = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ ...actionStatus, loading: true })
      const requestOption = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_id: orderState.order?.id,
          business_id: orderState.order?.business_id,
          gateway: orderState.order?.paymethod?.gateway
        })
      }
      const response = await fetch(`${ordering.root}/payments/stripe/refund`, requestOption)
      const content = await response.json()
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        setOrderState({
          ...orderState,
          order: { ...orderState.order, refund_data: content.result }
        })
        showToast(ToastType.Success, t('ORDER_REFUNDED', 'Order refunded'))
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  const handleOrderRefund = async (data) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ ...actionStatus, loading: true })
      const requestOption = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(`${ordering.root}/orders/${orderState.order?.id}/refund`, requestOption)
      const content = await response.json()
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        const refundData = [...content.result]
        if (data?.order_payment_event_id) {
          const stripeEvent = orderState?.order?.payment_events?.find(event => event?.id === data.order_payment_event_id)
          if (stripeEvent) {
            refundData.map(item => {
              if (item?.order_payment_event_id === data?.order_payment_event_id) {
                item.paymethod = stripeEvent?.paymethod
              }
              return item
            })
          }
        }
        const updatedPaymentEvents = [...orderState.order?.payment_events, ...refundData]
        setOrderState({
          ...orderState,
          order: { ...orderState.order, payment_events: updatedPaymentEvents }
        })
        showToast(ToastType.Success, t('ORDER_REFUNDED', 'Order refunded'))
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (props.order) {
      setOrderState({
        ...orderState,
        order: props.order
      })
    } else {
      getOrder()
    }
  }, [orderId])

  useEffect(() => {
    if (orderState.loading || loading) return
    const handleUpdateOrder = (order) => {
      if (order?.id !== orderState?.order?.id) return
      delete order.total
      delete order.subtotal
      if (!order?.driver && order?.driver_id) {
        const updatedDriver = drivers.find(driver => driver.id === order.driver_id)
        if (updatedDriver) {
          order.driver = { ...updatedDriver }
        }
      }
      setOrderState({
        ...orderState,
        order: Object.assign(orderState.order, order)
      })
    }
    socket.on('update_order', handleUpdateOrder)
    return () => {
      socket.off('update_order', handleUpdateOrder)
    }
  }, [orderState.order, socket, loading, drivers])

  useEffect(() => {
    const handleCustomerReviewed = (review) => {
      setOrderState({
        ...orderState,
        order: { ...orderState.order, user_review: review }
      })
    }
    events.on('customer_reviewed', handleCustomerReviewed)
    return () => {
      events.off('customer_reviewed', handleCustomerReviewed)
    }
  }, [orderState])

  useEffect(() => {
    if (!isDisableLoadMessages) {
      loadMessages()
    }
  }, [orderId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState}
          messageErrors={messageErrors}
          actionStatus={actionStatus}
          formatPrice={formatPrice}
          handlerSubmit={handlerSubmitSpotNumber}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
          messages={messages}
          setMessages={setMessages}
          messagesReadList={messagesReadList}
          readMessages={readMessages}
          handleRefundPaymentsStripe={handleRefundPaymentsStripe}
          handleOrderRefund={handleOrderRefund}
        />
      )}
    </>
  )
}

OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * This must be contains orderId to fetch
   */
  orderId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
