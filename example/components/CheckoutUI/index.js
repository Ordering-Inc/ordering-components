import React from 'react'

import { UserDetails } from '../../../src/components/UserDetails'
import { UserDetailsUI } from '../UserDetailsUI'

import { MomentOption } from '../../../src/components/MomentOption'
import { MomentOptionUI } from '../MomentOptionUI'

import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { PaymentOptionsUI } from '../PaymentOptionsUI'

import { DriverTips } from '../../../src/components/DriverTips'
import { DriverTipsUI } from '../DriverTipsUI'

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

      <UserDetails
        ordering={ordering}
        UIComponent={UserDetailsUI}
        businessId={41}
        userId={1}
        useValidationFields
        useDefualtSessionManager
        useSessionUser
        handlerCouponValue={handlerValues}
      />
      <hr />

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
