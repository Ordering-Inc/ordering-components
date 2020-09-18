import React, { useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { useSession } from '../../../src/contexts/SessionContext'
import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'

import { StripeRedirectForm } from '../../../src/components/PaymentOptionStripeRedirect/StripeRedirectForm'
import { StripeRedirectFormUI } from '../StripeRedirectFormUI'

export const PaymentOptionStripeRedirectUI = (props) => {
  const {
    modalName,
    paymentMethods,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ user, token }] = useSession()

  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      padding: '20px',
      margin: '40px 30px',
      overflow: 'auto',
      backgroundColor: '#D1D1D1'
    }
  }

  const handlerStripeRedirect = (srcToken) => {
    if (srcToken) {
      props.handlerStripeSource({
        paymethodId: 32,
        gateway: 'stripe_redirect',
        data: srcToken
      })
      setIsOpen(false)
    }
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

      <button onClick={() => setIsOpen(true)} disabled={!token}>
        Stripe Redirect
      </button>
      {!token && <strong style={{ color: 'red' }}>Sorry, you need to login to use this method</strong>}

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={modalIsOpen}
        onAccept={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        title={modalName}
      >
        <button onClick={() => setIsOpen(false)}>x</button>
        <div>
          <Elements stripe={loadStripe(props.stripePK)}>
            <StripeRedirectForm
              UIComponent={StripeRedirectFormUI}
              businessId={props.businessId}
              user={user}
              currency={props.currency}
              paymentMethods={paymentMethods}
              handlerStripeRedirect={handlerStripeRedirect}
            />
          </Elements>
        </div>
      </Popup>
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
