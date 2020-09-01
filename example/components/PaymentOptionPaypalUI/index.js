import React from 'react'
import { PaypalButton } from '../../../src/components/PaymentOptionPaypal/PaypalButton'

export const PaymentOptionPaypalUI = (props) => {
  const {
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

      <div style={{ width: '280px' }}>
        <PaypalButton
          clientID='AaMgophpAYpdvBlEtunjrZB7jHmmORNX2NzVGeLpOinbIdl6wlmaDbgC7IvyKDgExjet1rxbp4Vv-Wqd'
          amount='1.00'
          onError={onError}
          onSuccess={onSuccess}
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
