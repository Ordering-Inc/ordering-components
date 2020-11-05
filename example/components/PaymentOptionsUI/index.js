import React from 'react'

import { PaymentOptionCash } from '../../../src/components/PaymentOptionCash'
import { PaymentOptionCashUI } from '../PaymentOptionCashUI'

import { PaymentOptionStripe } from '../../../src/components/PaymentOptionStripe'
import { PaymentOptionStripeUI } from '../PaymentOptionStripeUI'

import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'
import { StripeElementsForm } from '../../../src/components/StripeElementsForm'
import { StripeElementsFormUI } from '../StripeElementsFormUI'
import { StripeRedirectForm } from '../../../src/components/PaymentOptionStripeRedirect/StripeRedirectForm'
import { StripeRedirectFormUI } from '../StripeRedirectFormUI'
import { useSession } from '../../../src/contexts/SessionContext'

export const PaymentOptionsUI = (props) => {
  const {
    orderTotal,
    paymethodSelected,
    paymethodData,
    paymethodsList,
    handlePaymethodClick,
    handlePaymethodDataChange,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ user }] = useSession()

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

      <div className='payment-options'>
        <strong>Payment Method</strong><br /><br />
        {!paymethodsList.loading && !paymethodsList.error ? (
          <div style={{ marginBottom: '20px' }}>
            {paymethodsList.paymethods.length > 0 ? (
              paymethodsList.paymethods.sort((a, b) => a.id - b.id).map(paymethod => (
                <button
                  key={paymethod.id}
                  value={paymethod.id}
                  style={{ padding: '5px', marginRight: '5px' }}
                  onClick={() => handlePaymethodClick(paymethod)}
                >
                  {paymethod.name} {paymethodSelected?.id === paymethod.id && <i>✔️</i>}
                </button>
              ))
            ) : (
              <p>❌ Not Found ❌</p>
            )}
          </div>
        ) : (
          <div>
            {paymethodsList.error && paymethodsList.error.length > 0 ? (
              paymethodsList.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </div>

      {paymethodSelected?.gateway === 'cash' && (
        <PaymentOptionCash
          UIComponent={PaymentOptionCashUI}
          paymethod={paymethodSelected}
          orderTotal={orderTotal}
          businessId={props.businessId}
          onChangeData={handlePaymethodDataChange}
        />
      )}

      {/* Stripe direct */}
      <Popup
        className='modal-info'
        UIComponent={ModalUI}
        open={paymethodSelected?.gateway === 'stripe_direct' && !paymethodData.id}
        onCancel={() => handlePaymethodClick(null)}
        onClose={() => handlePaymethodClick(null)}
        title='Add card'
      >
        <button onClick={() => handlePaymethodClick(null)}>x</button>
        {paymethodSelected?.gateway === 'stripe_direct' && (
          <div>
            <StripeElementsForm
              UIComponent={StripeElementsFormUI}
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.publishable}
              handleSource={handlePaymethodDataChange}
            />
          </div>
        )}
      </Popup>

      {/* Stripe */}
      <Popup
        className='modal-info'
        UIComponent={ModalUI}
        open={['stripe', 'stripe_connect'].includes(paymethodSelected?.gateway) && !paymethodData.id}
        onCancel={() => handlePaymethodClick(null)}
        onClose={() => handlePaymethodClick(null)}
        title='Select a card'
      >
        <button onClick={() => handlePaymethodClick(null)}>x</button>
        {['stripe', 'stripe_connect'].includes(paymethodSelected?.gateway) && (
          <div>
            <PaymentOptionStripe
              UIComponent={PaymentOptionStripeUI}
              paymethod={paymethodSelected}
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.publishable}
              payType={paymethodsList?.name}
              handleSelectCard={handlePaymethodDataChange}
            />
          </div>
        )}
      </Popup>

      {/* Stripe Redirect */}
      <Popup
        className='modal-info'
        // style={customStyles}
        UIComponent={ModalUI}
        open={['stripe_redirect'].includes(paymethodSelected?.gateway) && !paymethodData.type}
        onAccept={() => handlePaymethodClick(null)}
        onClose={() => handlePaymethodClick(null)}
        title='Stripe Redirect'
      >
        <button onClick={() => handlePaymethodClick(null)}>x</button>
        <div>
          {/* <Elements stripe={loadStripe(props.stripePK)}> */}
          <StripeRedirectForm
            UIComponent={StripeRedirectFormUI}
            businessId={props.businessId}
            user={user}
            currency={props.currency}
            paymethods={[{ name: 'Bancontact', value: 'bancontact' }]}
            handleStripeRedirect={handlePaymethodDataChange}
          />
          {/* </Elements> */}
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
