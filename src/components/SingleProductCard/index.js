import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const SingleProductCard = (props) => {
  const {
    UIComponent,
    product,
    handleUpdateProducts
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to add favorite info for user from API
   */
  const addFavoriteProduct = async () => {
    if (!product || !user) return
    showToast(ToastType.Info, t('LOADING', 'loading'))
    try {
      setActionState({ ...actionState, loading: true, error: null })
      const changes = { object_id: product?.id }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/users/${user?.id}/favorite_products`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateProducts && handleUpdateProducts(product?.id, { favorite: true })
        showToast(ToastType.Success, t('FAVORITE_ADDED', 'Favorite added'))
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
   * Method to delete favorite info for user from API
   */
  const deleteFavoriteProduct = async () => {
    if (!product || !user) return
    showToast(ToastType.Info, t('LOADING', 'loading'))

    try {
      setActionState({ ...actionState, loading: true })
      const response = await fetch(`${ordering.root}/users/${user.id}/favorite_products/${product?.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        handleUpdateProducts && handleUpdateProducts(product?.id, { favorite: false })
        showToast(ToastType.Success, t('FAVORITE_REMOVED', 'Favorite removed'))
      } else {
        setActionState({
          ...actionState,
          loading: false,
          error: content.result
        })
      }
    } catch (error) {
      setActionState({
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
          addFavoriteProduct={addFavoriteProduct}
          deleteFavoriteProduct={deleteFavoriteProduct}
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
