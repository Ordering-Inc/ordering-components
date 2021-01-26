import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage payment option paypal behavior without UI component
 */
export const PaymentOptionPaypal = (props) => {
  const {
    token,
    body,
    clientId,
    btnStyle,
    UIComponent,
    onButtonReady
  } = props

  const [ordering] = useApi()
  const [isSdkReady, setIsSdkReady] = useState(false)

  /**
   * Method to create script for paypal sdk
   */
  const addPaypalSdk = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    script.async = true
    script.onload = () => {
      setIsSdkReady(true)
    }
    script.onerror = () => {
      throw new Error('Paypal SDK could not be loaded.')
    }

    document.body.appendChild(script)
  }

  useEffect(() => {
    if (window !== undefined && window.paypal === undefined) {
      addPaypalSdk()
    } else if (window !== undefined && window.paypal !== undefined && onButtonReady) {
      onButtonReady()
    }
  }, [])

  const createOrder = (data, actions) => {
    const params = {
      paymethod_id: body.paymethod_id,
      amount: body.amount,
      delivery_zone_id: body.delivery_zone_id
    }
    const url = `${ordering.root}/carts/${body.cartUuid}/place`
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json()
    }).then(function (res) {
      if (res.error) {
        console.log(res.result)
        return null
      } else {
        return res.result.pay_reference
      }
    })
  }

  const onApprove = (data, actions) => {
    const url = `${ordering.root}/carts/${body.cartUuid}/confirm`
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }).then(function (res) {
      return res.json()
    }).then(function (res) {
      console.log(res)
      return res
    })
  }

  const onError = (error) => {
    console.log(error)
    return error
  }

  /**
   * Assign paypal button to an instance of react dom
   */
  const Button = window?.paypal?.Buttons?.driver('react', {
    React,
    ReactDOM
  })

  return (
    UIComponent && (
      <UIComponent
        {...props}
        isSdkReady={isSdkReady}
        PaypalButton={Button}
        paypalButtonProps={{
          createOrder,
          onApprove,
          onError,
          style: btnStyle
        }}
      />
    )
  )
}

PaymentOptionPaypal.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * User token
   */
  token: PropTypes.string.isRequired,
  /**
   * Object with body data to place order
   */
  body: PropTypes.object.isRequired,
  /**
   * paypal ClientID
   */
  clientId: PropTypes.string.isRequired,
  /**
   * Method to get success response from paypal button
   */
  handlerChangePaypal: PropTypes.func,
  /**
   * Components types before Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionPaypal.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
