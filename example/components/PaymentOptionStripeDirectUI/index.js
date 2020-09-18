import React, { useState } from 'react'
import { useSession } from '../../../src/contexts/SessionContext'
import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'

import { StripeElementsForm } from '../../../src/components/StripeElementsForm'
import { StripeElementsFormUI } from '../StripeElementsFormUI'

export const PaymentOptionStripeDirectUI = (props) => {
  const {
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ token }] = useSession()
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      padding: '20px',
      margin: '40px 30px',
      overflow: 'auto',
      backgroundColor: '#D1D1D1'
    }
  }

  const handlerToken = (token) => {
    if (token) {
      setIsOpen(false)
      props.handlerCreatedCard({
        paymethodId: 28,
        gateway: 'stripe_direct',
        data: token
      })
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
        Stripe Direct
      </button>
      {!token && <strong style={{ color: 'red' }}>Sorry, you need to login to use this method</strong>}

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={modalIsOpen}
        onAccept={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        title='Pay with card'
      >
        <button onClick={() => setIsOpen(false)}>x</button>
        <div>
          <StripeElementsForm
            UIComponent={StripeElementsFormUI}
            businessId={props.businessId}
            stripePK={props.stripeKey}
            clientSecret={props.clientSecret}
            handlerToken={handlerToken}
          />
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
