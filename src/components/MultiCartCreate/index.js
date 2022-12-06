import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useSession } from '../../contexts/SessionContext'
import { useEvent } from '../../contexts/EventContext'

export const MultiCartCreate = (props) => {
  const {
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [formState, setFormState] = useState({ loading: true, error: null })
  const filtValidation = (cart) =>
    cart?.status !== 2 &&
    cart?.valid

  const cartsUuidForGroup = Object.values(orderState?.carts).filter(cart => filtValidation(cart)).map(cart => cart?.uuid)

  const createMultiCart = async () => {
    setFormState({
      ...formState,
      loading: true
    })
    const response = await fetch(`${ordering.root}/cart_groups`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-App-X': ordering.appId,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        carts: cartsUuidForGroup
      })
    })
    const { result, error } = await response.json()
    setFormState({
      ...formState,
      loading: false,
      result
    })
    if (!error) {
      events.emit('go_to_page', { page: 'multi_checkout', params: { cartUuid: result?.group?.uuid } })
    }
  }

  useEffect(() => {
    if (cartsUuidForGroup?.length > 1) {
      createMultiCart()
    } else if (cartsUuidForGroup?.length === 1) {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cartsUuidForGroup[0] } })
    }
  }, [cartsUuidForGroup])

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
