import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useApi } from '../../contexts/ApiContext'

export const Cart = (props) => {
  const {
    UIComponent,
    handleEditProduct,
    useValidationFields,
    validationFieldsType
  } = props

  const requestsState = {}

  /**
   * API context manager
   */
  const [ordering] = useApi()

  /**
   * Order context manager
   */
  const [orderState, { updateProduct, removeProduct, clearCart }] = useOrder()

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
   * State to save validation fields
   */
  const [validationFields, setValidationFields] = useState({ loading: true, fields: {} })

  /**
   * Calc balance by product id
   */
  const getProductMax = (product) => {
    const productMax = (product.inventoried ? product.stock : maxCartProductConfig)
    const max = product.quantity + productMax - product.balance
    return max < product.quantity ? product.quantity : max
  }

  /**
   * Calc balance by product id
   */
  const offsetDisabled = (product) => {
    const productMax = (product.inventoried ? product.stock : maxCartProductConfig)
    return productMax - (product.balance - product.quantity)
  }

  /**
   * Change product quantity of the cart
   */
  const changeQuantity = (product, quantity) => {
    if (quantity === 0) {
      removeProduct(product)
    } else {
      updateProduct({
        id: product.id,
        business_id: product.id,
        code: product.code,
        quantity: quantity
      })
    }
  }

  /**
   * Get validation fields from API
   */
  const getValidationFields = () => {
    const source = {}
    requestsState.validation = source
    ordering.validationFields().toType(validationFieldsType).get({ cancelToken: source }).then((response) => {
      const fields = {}
      response.content.result.forEach((field) => {
        fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
      })
      setValidationFields({
        ...validationFields,
        loading: false,
        fields
      })
    }).catch((err) => {
      if (err.constructor.name !== 'Cancel') {
        setValidationFields({
          ...validationFields,
          loading: false
        })
      }
    })
  }

  useEffect(() => {
    if (useValidationFields) {
      getValidationFields()
    }
    return () => {
      if (requestsState.validation) {
        requestsState.validation.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          carts={orderState.carts}
          orderState={orderState}
          clearCart={clearCart}
          removeProduct={removeProduct}
          validationFields={validationFields}
          changeQuantity={changeQuantity}
          getProductMax={getProductMax}
          offsetDisabled={offsetDisabled}
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
  handleEditProduct: PropTypes.func,
  /**
   * Boolean to get validation fields from API
   */
  useValidationFields: PropTypes.bool,
  /**
   * String filter to fetch validation fields
   */
  validationFieldsType: PropTypes.string
}

Cart.defaultProps = {
  useValidationFields: true,
  validationFieldsType: 'checkout'
}
