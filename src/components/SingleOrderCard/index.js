import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useOrder } from '../../contexts/OrderContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const SingleOrderCard = (props) => {
  const {
    UIComponent,
    order,
    handleReorder,
    handleUpdateOrderList,
    isCustomerMode
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ user, token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [{ carts }, { clearCart }] = useOrder()

  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [cartState, setCartState] = useState({ loading: false, error: null })

  /**
   * Method to add, remove favorite info for user from API
   */
  const handleFavoriteOrder = async (isAdd = false) => {
    if (!order || !user) return

    try {
      showToast(ToastType.Info, t('LOADING', 'loading'))
      setActionState({ ...actionState, loading: true, error: null })
      const changes = { object_id: order?.id }
      const requestOptions = {
        method: isAdd ? 'POST' : 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        ...(isAdd && { body: JSON.stringify(changes) })
      }

      const fetchEndPoint = isAdd
        ? `${ordering.root}/users/${user?.id}/favorite_orders`
        : `${ordering.root}/users/${user.id}/favorite_orders/${order?.id}`
      const response = await fetch(fetchEndPoint, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateOrderList && handleUpdateOrderList(order?.id, { favorite: isAdd })
        showToast(ToastType.Success, isAdd ? t('FAVORITE_ADDED', 'Favorite added') : t('FAVORITE_REMOVED', 'Favorite removed'))
      } else {
        setActionState({
          ...actionState,
          loading: false,
          error: content.result
        })
        showToast(ToastType.Error, content.result)
      }
    } catch (error) {
      setActionState({
        ...actionState,
        loading: false,
        error: [error.message]
      })
      showToast(ToastType.Error, [error.message])
    }
  }

  /**
   * Method to remove products from cart
   */
  const handleRemoveCart = async (_order) => {
    const _businessIds = Array.isArray(_order?.business_id) ? _order?.business_id : [order?.business_id]
    const orderIds = Array.isArray(_order?.id) ? _order?.id : [order?.id]
    const uuids = _businessIds.map((b, index) => ({ uuid: carts[`businessId:${b}`]?.uuid, orderIdx: index })) ?? []

    if (!uuids?.length) return
    try {
      setCartState({ ...cartState, loading: true })
      const errors = []
      for (const item of uuids) {
        let _error = null
        if (item.uuid) {
          const disableLoading = isCustomerMode
          const { error, result } = await clearCart(item.uuid, { disableLoading })
          _error = error ? result[0] : false
        }
        _error && errors.push(_error)
      }
      handleReorder(orderIds)
      setCartState({ loading: false, error: errors })
    } catch (error) {
      setCartState({
        loading: false,
        error: [error.message]
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleFavoriteOrder={handleFavoriteOrder}
          actionState={actionState}
          cartState={cartState}
          handleRemoveCart={handleRemoveCart}
        />
      )}
    </>
  )
}

SingleOrderCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Order details to render
   */
  order: PropTypes.object.isRequired,
  /**
   * Components types before Single order card
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Single order card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Single order card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Single order card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleOrderCard.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
