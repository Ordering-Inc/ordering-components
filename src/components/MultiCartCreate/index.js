import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useSession } from '../../contexts/SessionContext'

export const MultiCartCreate = (props) => {
  const {
    UIComponent,
    handleOnRedirectCheckout,
    handleOnRedirectMultiCheckout
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [orderState, { refreshOrderOptions }] = useOrder()

  const createMultiCart = async () => {
    const cartList = Object.values(orderState?.carts).filter(cart => cart?.valid && cart?.status !== 2).map(cart => cart?.uuid)
    if (cartList?.length === 1) {
      handleOnRedirectCheckout &&
      handleOnRedirectCheckout(cartList[0]?.uuid)
    }
    const response = await fetch(`${ordering.root}/cart_groups`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-App-X': ordering.appId,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ carts: cartList })
    })
    const { result, error } = await response.json()
    await refreshOrderOptions()
    if (!error) {
      handleOnRedirectMultiCheckout &&
      handleOnRedirectMultiCheckout(result?.uuid)
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
