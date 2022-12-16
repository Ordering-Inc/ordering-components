import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useEvent } from '../../contexts/EventContext'

/**
 * Component to manage purchase gift card behavior without UI component
 */
export const PurchaseGiftCard = (props) => {
  const {
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [, { addProduct }] = useOrder()
  const [events] = useEvent()

  const [productsListState, setProductsListState] = useState({ loading: true, products: [], error: null })
  const [selectedProduct, setSelectedProduct] = useState(null)

  /**
   * Method to get the gift products from API
   */
  const getPlatformProductsList = async () => {
    try {
      let where = null
      const conditions = []
      conditions.push({
        attribute: 'type',
        value: 'gift_card'
      })
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      setProductsListState({
        ...productsListState,
        loading: true
      })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/platform_products?where=${JSON.stringify(where)}`, requestOptions)
      const { error, result } = await response.json()
      setProductsListState({
        loading: false,
        products: error ? [] : result,
        error: error ? result : null
      })
    } catch (error) {
      setProductsListState({
        ...productsListState,
        loading: false,
        error: [error.message]
      })
    }
  }

  const handleAccept = async () => {
    const giftCard = {
      id: selectedProduct?.id,
      quantity: 1
    }
    const { error, result } = await addProduct(giftCard, null, null, true)
    if (!error) {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: result.uuid } })
    }
  }

  useEffect(() => {
    getPlatformProductsList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productsListState={productsListState}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          handleAccept={handleAccept}
        />
      )}
    </>
  )
}

PurchaseGiftCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

PurchaseGiftCard.defaultProps = {}