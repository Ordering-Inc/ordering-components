import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements
} from '@stripe/react-stripe-js'

import { CardForm } from '../../../src/components/StripeElementsForm/CardForm'
import { CardFormUI } from './CardFormUI'

export const StripeElementsFormUI = (props) => {
  const {
    stripePK,
    handlerToken,
    clientSecret,
    businessId
  } = props

  return (
    <>
      {stripePK ? (
        <Elements stripe={loadStripe(stripePK)}>
          <CardForm
            UIComponent={CardFormUI}
            handlerToken={handlerToken}
            clientSecret={clientSecret}
            businessId={businessId}
          />
        </Elements>
      ) : (
        <p>Something is wrong :(</p>
      )}
    </>
  )
}
