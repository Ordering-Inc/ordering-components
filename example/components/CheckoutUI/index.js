import React from 'react'

import { DriverTips } from '../../../src/components/DriverTips'
import { DriverTipsUI } from '../DriverTipsUI'

import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { PaymentOptionsUI } from '../PaymentOptionsUI'

import { MomentOption } from '../../../src/components/MomentOption'
import { MomentOptionUI } from '../MomentOptionUI'

export const CheckoutUI = (props) => {
  const {
    ordering,
    handlerValues,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

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

      <MomentOption
        ordering={ordering}
        UIComponent={MomentOptionUI}
        onChangeMoment={handlerValues}
      />

      <hr />
      <PaymentOptions
        ordering={ordering}
        UIComponent={PaymentOptionsUI}
        businessId={41}
        onChangePayment={handlerValues}
      />
      <hr />
      <DriverTips
        UIComponent={DriverTipsUI}
        driverTipsOptions={[0, 10, 15, 20, 25]}
        handlerChangeDriverOption={handlerValues}
      />

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
