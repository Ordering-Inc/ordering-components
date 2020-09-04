import React from 'react'

import { PaymentOptionCash } from '../../../src/components/PaymentOptionCash'
import { PaymentOptionCashUI } from '../PaymentOptionCashUI'

import { PaymentOptionStripe } from '../../../src/components/PaymentOptionStripe'
import { PaymentOptionStripeUI } from '../PaymentOptionStripeUI'

import { PaymentOptionStripeDirect } from '../../../src/components/PaymentOptionStripeDirect'
import { PaymentOptionStripeDirectUI } from '../PaymentOptionStripeDirectUI'

import { PaymentOptionPaypal } from '../../../src/components/PaymentOptionPaypal'
import { PaymentOptionPaypalUI } from '../PaymentOptionPaypalUI'

import { PaymentOptionStripeRedirect } from '../../../src/components/PaymentOptionStripeRedirect'
import { PaymentOptionStripeRedirectUI } from '../PaymentOptionStripeRedirectUI'

export const PaymentOptionsUI = (props) => {
  const {
    optionSelected,
    optionsList,
    handleClickOption,
    onChangePayment,
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

      <div className='payment-options'>
        <strong>Payment Method</strong><br /><br />
        {!optionsList.loading && !optionsList.error ? (
          <div style={{ marginBottom: '20px' }}>
            {optionsList.options && optionsList.options.length > 0 ? (
              optionsList.options.map(option => (
                <button
                  key={option.paymethod.id}
                  value={option.paymethod.id}
                  style={{ padding: '5px', marginRight: '5px' }}
                  onClick={() => handleClickOption(option.paymethod)}
                >
                  {option.paymethod.name} {optionSelected?.id === option.paymethod.id && <i>✔️</i>}
                </button>
              ))
            ) : (
              <p>❌ Not Found ❌</p>
            )}
          </div>
        ) : (
          <div>
            {optionsList.error && optionsList.error.length > 0 ? (
              optionsList.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </div>

      {optionSelected?.name === 'Cash' && (
        <PaymentOptionCash
          UIComponent={PaymentOptionCashUI}
          useOrderContext
          businessId={props.businessId}
          handlerSubmit={onChangePayment}
        />
      )}

      {(optionSelected?.name === 'Stripe' || optionSelected?.name === 'Stripe Connect') && (
        <PaymentOptionStripe
          UIComponent={PaymentOptionStripeUI}
          ordering={props.ordering}
          businessId={props.businessId}
          payType={optionSelected?.name}
          handlerSelectCard={onChangePayment}
        />
      )}

      {optionSelected?.name === 'Stripe Direct' && (
        <PaymentOptionStripeDirect
          UIComponent={PaymentOptionStripeDirectUI}
          businessId={props.businessId}
          handlerCreatedCard={onChangePayment}
        />
      )}

      {optionSelected?.name === 'Paypal Express' && (
        <PaymentOptionPaypal
          UIComponent={PaymentOptionPaypalUI}
          amount={props.orderTotal.toString()}
          clientID=''
          handlerChangePaypal={onChangePayment}
        />
      )}

      {optionSelected?.name === 'Stripe Redirect' && (
        <PaymentOptionStripeRedirect
          UIComponent={PaymentOptionStripeRedirectUI}
          businessId={props.businessId}
          ordering={props.ordering}
          currency='eur'
          paymentMethods={[{ name: 'Bancontact', value: 'bancontact' }]}
          handlerStripeSource={onChangePayment}
        />
      )}

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
