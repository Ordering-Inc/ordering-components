import React, { useState } from 'react'
import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'
import { useSession } from '../../../src/contexts/SessionContext'

import { StripeElementsForm } from '../../../src/components/StripeElementsForm'
import { StripeElementsFormUI } from '../StripeElementsFormUI'

export const PaymentOptionStripeUI = (props) => {
  const {
    deleteCard,
    cardSelected,
    cardsList,
    handleSelectCard,
    handleCardClick,
    handleNewCard,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ token }] = useSession()

  const [addCartOpen, setAddCardOpen] = useState(false)

  const customStyles = {
    content: {
      padding: '20px',
      margin: '40px 30px',
      overflow: 'auto',
      backgroundColor: '#D1D1D1'
    }
  }

  const _handleNewCard = (card) => {
    setAddCardOpen(false)
    handleNewCard(card)
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

      {!token && <strong style={{ color: 'red' }}>Sorry, you need to login to use this method</strong>}

      {token && (
        <>
          <div>
            {!cardsList.loading && !cardsList.error ? (
              <>
                {cardsList.cards && cardsList.cards.length > 0 ? (
                  cardsList.cards.map((card, i) => (
                    <div key={i} style={{ padding: '5px' }} onClick={() => handleCardClick(card)}>
                      <input
                        type='radio'
                        name='card'
                        value={card.id}
                        style={{ marginLeft: '5px' }}
                        checked={card.id === cardSelected?.id}
                        readOnly
                      />
                      <span>{`XXXX-XXXX-XXXX-${card.last4}`} ({card.brand})</span>
                      <button onClick={() => deleteCard(card)}>Delete</button>
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
          {handleSelectCard && <button style={{ margin: '10px 0px' }} onClick={() => handleSelectCard(cardSelected)} disabled={!cardSelected}>Accept</button>}
          <button style={{ margin: '10px 0px' }} onClick={() => setAddCardOpen(true)}>Add card</button>
        </>
      )}

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={addCartOpen}
        onCancel={() => setAddCardOpen(false)}
        onClose={() => setAddCardOpen(false)}
        title='Add card'
      >
        <button onClick={() => setAddCardOpen(false)}>x</button>
        <div>
          <StripeElementsForm
            UIComponent={StripeElementsFormUI}
            businessId={props.businessId}
            publicKey={props.publicKey}
            toSave
            // clientSecret={props.clientSecret}
            onNewCard={_handleNewCard}
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
