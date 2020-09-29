import React from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'

export const UpsellingPage = (props) => {
  const { UIComponent, onSave } = props
  const [orderState, { addProduct }] = useOrder()

  /**
   * adding product to the cart from upselling
   * @param {object} product Product object
   */
  const handleAddProductUpselling = async (product) => {
    const successful = await addProduct(product)
    console.log(orderState)
    console.log(successful)
    if (successful) {
      onSave(product)
    }
  }

  return (
    <UIComponent {...props} handleAddProductUpselling={handleAddProductUpselling} />
  )
}

UpsellingPage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
    * upselling products that do not repeat in the cart
   */
  upsellingProducts: PropTypes.array,
  /**
   * Function to save event
   */
  onSave: PropTypes.func
}
