import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const Checkout = (props) => {
  const {
    businessId,
    UIComponent
  } = props

  const [ordering] = useApi()

  /**
   * Order context
   */
  const [orderState] = useOrder()
  /**
   * Object to save an object with business information
   */
  const [businessDetails, setBusinessDetails] = useState({ business: null, loading: true, error: null })
  /**
   * This must be contains an object with info about paymente selected
   */
  const [paymethodSelected, setPaymethodSelected] = useState(null)
  /**
   * Current cart
   */
  const cart = orderState.carts[`businessId:${businessId}`]
  /**
   * Method to get business from API
   */
  const getBusiness = async () => {
    try {
      const props = ['id', 'name', 'email', 'cellphone', 'address', 'paymethods']
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
  /**
   * Method to handle click on Place order
   */
  const handlerClickPlaceOrder = () => {
    const data = {
      paymethod_id: paymethodSelected.paymethodId,
      paymethod_data: paymethodSelected.data,
      delivery_zone_id: cart.delivery_zone_id,
      offer_id: cart.offer_id,
      amount: cart.total
    }
    if (props.handleCustomClick) {
      props.handleCustomClick(data, paymethodSelected)
      return
    }

    props.onPlaceOrderClick(data, paymethodSelected)
  }

  const handlePaymethodChange = (paymehod) => {
    setPaymethodSelected(paymehod)
  }

  useEffect(() => {
    getBusiness()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cart={cart}
          orderOptions={orderState.options}
          paymethodSelected={paymethodSelected}
          businessDetails={businessDetails}
          handlePaymethodChange={handlePaymethodChange}
          handlerClickPlaceOrder={handlerClickPlaceOrder}
        />
      )}
    </>
  )
}

Checkout.propTypes = {
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
