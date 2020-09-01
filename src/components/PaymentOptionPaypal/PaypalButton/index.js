import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export const PaypalButton = props => {
  const [sdkReady, setSdkReady] = useState(false)

  const addPaypalSdk = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${props.clientID}`
    script.async = true
    script.onload = () => {
      setSdkReady(true)
    }
    script.onerror = () => {
      throw new Error('Paypal SDK could not be loaded.')
    }

    document.body.appendChild(script)
  }

  useEffect(() => {
    if (window !== undefined && window.paypal === undefined) {
      addPaypalSdk()
    } else if (
      window !== undefined &&
      window.paypal !== undefined &&
      props.onButtonReady
    ) {
      props.onButtonReady()
    }
  }, [])

  // amount goes in the value field we will use props of the button for this
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: props.amount
          }
        }
      ]
    })
  }

  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then(details => {
        if (props.onSuccess) {
          return props.onSuccess(data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (!sdkReady && window.paypal === undefined) {
    return (
      <div>Loading...</div>
    )
  }

  const Button = window.paypal.Buttons.driver('react', {
    React,
    ReactDOM
  })

  return (
    <Button
      {...props}
      createOrder={
        props.amount && !createOrder
          ? (data, actions) => createOrder(data, actions)
          : (data, actions) => createOrder(data, actions)
      }
      onApprove={
        props.onSuccess
          ? (data, actions) => onApprove(data, actions)
          : (data, actions) => onApprove(data, actions)
      }
      style={props.style}
    />
  )
}
