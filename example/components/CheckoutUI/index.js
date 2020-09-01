import React from 'react'

import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { OrderTypeControlUI } from '../OrderTypeControlUI'

import { UserDetails } from '../../../src/components/UserDetails'
import { UserDetailsUI } from '../UserDetailsUI'

import { AddressDetails } from '../../../src/components/AddressDetails'
import { AddressDetailsUI } from '../AddressDetailsUI'

import { MomentOption } from '../../../src/components/MomentOption'
import { MomentOptionUI } from '../MomentOptionUI'

import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { PaymentOptionsUI } from '../PaymentOptionsUI'

import { DriverTips } from '../../../src/components/DriverTips'
import { DriverTipsUI } from '../DriverTipsUI'

export const CheckoutUI = (props) => {
  const {
    orderState,
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

      <OrderTypeControl
        UIComponent={OrderTypeControlUI}
        orderTypes={[1, 2, 3, 4, 5]}
      />
      <hr />

      <UserDetails
        ordering={ordering}
        UIComponent={UserDetailsUI}
        businessId={41}
        useValidationFields
        useDefualtSessionManager
        useSessionUser
        handlerCouponValue={handlerValues}
      />
      <hr />

      <AddressDetails
        ordering={ordering}
        UIComponent={AddressDetailsUI}
        businessId={41}
        apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
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
      {orderState.options.type === 1 &&
        <DriverTips
          UIComponent={DriverTipsUI}
          driverTipsOptions={[0, 10, 15, 20, 25]}
          handlerChangeDriverOption={handlerValues}
        />}

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
