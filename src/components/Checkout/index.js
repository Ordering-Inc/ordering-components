import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'

export const Checkout = (props) => {
  const {
    ordering,
    businessId,
    UIComponent
  } = props

  const [businessDetails, setBusinessDetails] = useState({ business: {}, loading: true, error: null })
  const [paymentSelected, setpaymentSelected] = useState(null)

  const getBusiness = async () => {
    try {
      const props = ['id', 'name', 'email', 'cellphone', 'address']
      const { content: { result } } = await ordering.businesses(businessId).select(props).get()
      setBusinessDetails({
        ...businessDetails,
        loading: false,
        business: result
      })
    } catch (error) {
      setBusinessDetails({
        ...businessDetails,
        loading: false,
        error
      })
    }
  }

  useEffect(() => {
    getBusiness()
  }, [])
  /**
   * Order context
   */
  const [orderState] = useOrder()

  const isOrderValid = {
    valid: orderState?.carts[`businessId:${businessId}`]?.valid || false,
    valid_address: orderState?.carts[`businessId:${businessId}`]?.valid_address || false,
    valid_products: orderState?.carts[`businessId:${businessId}`]?.valid_products || false
  }

  const handlerClickPlaceOrder = () => {
    if (props.handleCustomClick) {
      props.handleCustomClick(paymentSelected)
      return
    }

    props.onPlaceOrderClick(paymentSelected)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isOrderValid={isOrderValid}
          paymentSelected={paymentSelected}
          orderState={orderState}
          businessDetails={businessDetails}
          handlerPaymentMethod={(value) => setpaymentSelected(value)}
          handlerClickPlaceOrder={handlerClickPlaceOrder}
        />
      )}
    </>
  )
}

Checkout.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Custom method to receive props from checkout page
   */
  handleCustomClick: PropTypes.func,
  /**
   * onPlaceOrderClick, function to get click event and return business object after default behavior
   */
  onPlaceOrderClick: PropTypes.func,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
