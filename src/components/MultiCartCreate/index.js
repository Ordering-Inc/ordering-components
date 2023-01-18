import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useSession } from '../../contexts/SessionContext'
import { useEvent } from '../../contexts/EventContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const MultiCartCreate = (props) => {
  const {
    UIComponent,
    cartGroup: cartGroupFound,
    cartUuid,
    handleOnRedirectMultiCheckout,
    handleOnRedirectCheckout
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [orderState, { refreshOrderOptions }] = useOrder()
  const [events] = useEvent()

  const filtValidation = (cart) =>
    cart?.status !== 2 &&
    cart?.valid &&
    (cartGroupFound === 'create' ? !cart?.group?.uuid : cart?.group?.uuid === cartGroupFound)

  const createMultiCart = async () => {
    const cartsUuidForGroup = Object.values(orderState?.carts).filter(cart => filtValidation(cart)).map(cart => cart?.uuid)
    cartsUuidForGroup.push(cartUuid)
    if (cartsUuidForGroup?.length === 1) {
      if (handleOnRedirectCheckout) {
        handleOnRedirectCheckout(cartsUuidForGroup[0])
        return
      }
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cartsUuidForGroup[0] } })
      return
    }
    const response = await fetch(`${ordering.root}/cart_groups`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-App-X': ordering.appId,
        'X-Socket-Id-X': socket?.getId(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        carts: cartsUuidForGroup
      })
    })
    const { result, error } = await response.json()
    await refreshOrderOptions()
    if (!error) {
      if (handleOnRedirectMultiCheckout) {
        handleOnRedirectMultiCheckout(result?.uuid)
        return
      }
      events.emit('go_to_page', { page: 'multi_checkout', params: { cartUuid: result?.uuid } })
    }
  }

  useEffect(() => {
    createMultiCart()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

MultiCartCreate.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

MultiCartCreate.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
