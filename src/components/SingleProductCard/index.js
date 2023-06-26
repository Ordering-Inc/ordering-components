import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import { useEvent } from '../../contexts/EventContext'

export const SingleProductCard = (props) => {
  const {
    UIComponent,
    product,
    handleUpdateProducts,
    isProductId
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [{ user, token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [events] = useEvent()

  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to add, remove favorite info for user from API
   */
  const handleFavoriteProduct = async (isAdd = false) => {
    if (!product || !user) return
    showToast(ToastType.Info, t('LOADING', 'loading'))
    try {
      setActionState({ ...actionState, loading: true, error: null })
      const productId = isProductId ? product?.product_id : product?.id
      const changes = { object_id: productId }
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

      const fetchEndpoint = isAdd
        ? `${ordering.root}/users/${user?.id}/favorite_products`
        : `${ordering.root}/users/${user.id}/favorite_products/${productId}`
      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateProducts && handleUpdateProducts(productId, { favorite: isAdd })
        if (isAdd) {
          events.emit('product_added_to_wishlist', product)
        } else {
          events.emit('product_removed_from_wishlist', product)
        }
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleFavoriteProduct={handleFavoriteProduct}
          actionState={actionState}
        />
      )}
    </>
  )
}

SingleProductCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: PropTypes.number,
  /**
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleProductCard.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
