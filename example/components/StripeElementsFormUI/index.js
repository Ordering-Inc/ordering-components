import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements
} from '@stripe/react-stripe-js'

import { CardForm } from '../../../src/components/StripeElementsForm/CardForm'
import { CardFormUI } from './CardFormUI'

export const StripeElementsFormUI = (props) => {
  const {
    publicKey,
    handleSource,
    businessId,
    requirements,
    onNewCard,
    toSave
  } = props

  return (
    <>
      {publicKey ? (
        <Elements stripe={loadStripe(publicKey)}>
          <CardForm
            UIComponent={CardFormUI}
            handleSource={handleSource}
            onNewCard={onNewCard}
            toSave={toSave}
            requirements={requirements}
            businessId={businessId}
          />
        </Elements>
      ) : (
        <p>Something is wrong :(</p>
      )}
    </>
  )
}
