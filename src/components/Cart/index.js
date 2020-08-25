import React from 'react'
import PropTypes from 'prop-types'
import { useOrder, ORDER_ACTIONS } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'

export const Cart = (props) => {
  const {
    UIComponent,
    handleEditProduct
  } = props

  /**
   * Order context manager
   */
  const [orderState, dispatchOrder] = useOrder()

  /**
   * Config context manager
   */
  const [stateConfig] = useConfig()

  /**
   * Total product in cart
   */
  const totalBalance = stateConfig.order?.quantity || 0

  /**
   * Max total product in cart by config
   */
  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  /**
   * Calc balance by product id
   */
  const getProductBalance = (productId) => {
    const productBalance = (orderState.order?.products?.reduce((sum, product) => sum + (product && product.id === productId ? product.quantity : 0), 0) || 0)
    return productBalance
  }

  /**
   * Calc balance by product id
   */
  const getProductMax = (product) => {
    const productBalance = getProductBalance(product.id)
    const productMax = (product.inventoried ? product.stock : maxCartProductConfig)
    return product.quantity + productMax - productBalance
  }

  /**
   * Clear all product of the cart
   */
  const clearProducts = () => {
    dispatchOrder({ type: ORDER_ACTIONS.CLEAR_PRODUCTS })
  }

  /**
   * Remove a product of the cart
   */
  const removeProduct = (productCode) => {
    dispatchOrder({ type: ORDER_ACTIONS.REMOVE_PRODUCT, productCode })
  }

  /**
   * Change product quantity of the cart
   */
  const changeQuantity = (productCode, quantity) => {
    if (quantity === 0) {
      removeProduct(productCode)
    } else {
      dispatchOrder({ type: ORDER_ACTIONS.CHANGE_PRODUCT_QUANTITY, productCode, quantity })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState.order}
          clearProducts={clearProducts}
          removeProduct={removeProduct}
          changeQuantity={changeQuantity}
          getProductMax={getProductMax}
          handleEditProduct={handleEditProduct}
        />
      )}
    </>
  )
}

Cart.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to edit product behavior
   */
  handleEditProduct: PropTypes.func
}

Cart.defaultProps = {
}
