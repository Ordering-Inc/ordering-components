import React, { useState } from 'react'
import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'
import { useSession } from '../../../src/contexts/SessionContext'

import { StripeElementsForm } from '../../../src/components/StripeElementsForm'
import { StripeElementsFormUI } from '../StripeElementsFormUI'

export const PaymentOptionStripeUI = (props) => {
  const {
    cardsList,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ token }] = useSession()

  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalCardIsOpen, setCardIsOpen] = useState(false)
  const [cardSelected, setCardSelected] = useState(null)

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
      setCardIsOpen(false)
      props.handlerCreateCard(token)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
    if (cardSelected) {
      props.handlerSelectCard(cardSelected)
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
        Stripe
      </button>
      {!token && <strong style={{ color: 'red' }}>Sorry, you need to login to use this method</strong>}

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={modalIsOpen}
        onAccept={() => closeModal()}
        onClose={() => setIsOpen(false)}
        title='Please choose your card (Required)'
      >
        <button onClick={() => setIsOpen(false)}>x</button>
        <div>
          {!cardsList.loading && !cardsList.error ? (
            <>
              {cardsList.cards && cardsList.cards.length > 0 ? (
                cardsList.cards.map((card, i) => (
                  <div key={i} style={{ padding: '5px' }}>
                    <input
                      type='radio'
                      name='card'
                      value={card.id}
                      style={{ marginLeft: '5px' }}
                      checked={card.id === cardSelected}
                      onChange={(e) => setCardSelected(e.target.value)}
                    />
                    <span>{`XXXX-XXXX-XXXX-${card.last4}`} ({card.brand})</span>
                  </div>
                ))
              ) : (
                <p>❌ Not Found ❌</p>
              )}
            </>
          ) : (
            <>
              {cardsList.error && cardsList.error.length > 0 ? (
                cardsList.error.map((e, i) => (
                  <p key={i}>ERROR: [{e}]</p>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </div>
        <button style={{ margin: '10px 0px' }} onClick={() => setCardIsOpen(true)}>Add card</button>
      </Popup>

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={modalCardIsOpen}
        onAccept={() => setCardIsOpen(false)}
        onClose={() => setCardIsOpen(false)}
        title='Add card'
      >
        <button onClick={() => setCardIsOpen(false)}>x</button>
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
