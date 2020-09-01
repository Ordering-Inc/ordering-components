import React from 'react'
import { PaypalButton } from '../../../src/components/PaymentOptionPaypal/PaypalButton'

export const PaymentOptionPaypalUI = (props) => {
  const {
    style,
    amount,
    clientID,
    handlerChangePaypal,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const onSuccess = payment => {
    console.log(payment)
  }

  const onCancel = data => {
    console.log(data)
  }

  const onError = err => {
    console.log(err)
  }

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <div style={{ width: '500px' }}>
        <PaypalButton
          clientID={clientID}
          style={style}
          amount={amount}
          onError={onError}
          onSuccess={handlerChangePaypal || onSuccess}
          onCancel={onCancel}
        />
      </div>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
