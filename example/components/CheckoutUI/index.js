import React from 'react'

import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { OrderTypeControlUI } from '../OrderTypeControlUI'

import { MomentOption } from '../../../src/components/MomentOption'
import { MomentOptionUI } from '../MomentOptionUI'

import { AddressDetails } from '../../../src/components/AddressDetails'
import { AddressDetailsUI } from '../AddressDetailsUI'

import { UserFormDetails } from '../../../src/components/UserFormDetails'
import { UserDetailsUI } from '../UserDetailsUI'

import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { PaymentOptionsUI } from '../PaymentOptionsUI'

import { DriverTips } from '../../../src/components/DriverTips'
import { DriverTipsUI } from '../DriverTipsUI'

import { CouponControl } from '../../../src/components/CouponControl'
import { CouponControlUI } from '../CouponControlUI'

import { Cart } from '../../../src/components/Cart'
import { CartUI } from '../../components/CartUI'
import { useConfig } from '../../../src/contexts/ConfigContext'

const styleButtonOrder = {
  padding: '10px 20px',
  color: 'white',
  borderRadius: '5px',
  background: '#4caf50',
  width: '50%',
  fontSize: '18px',
  cursor: 'pointer'
}

export const CheckoutUI = (props) => {
  const {
    cart,
    placing,
    orderOptions,
    businessDetails,
    paymethodSelected,
    handlePaymethodChange,
    handlerClickPlaceOrder,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [{ configs }] = useConfig()

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
      <hr style={{ marginBottom: '20px' }} />

      <MomentOption
        UIComponent={MomentOptionUI}
        // onChangeMoment={(value) => handlerValues({ field: 'moment', value })}
      />
      <hr />

      <AddressDetails
        UIComponent={AddressDetailsUI}
        businessId={props.businessId}
        apiKey={configs?.google_maps_api_key?.value}
      />
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <UserFormDetails
            UIComponent={UserDetailsUI}
            businessId={props.businessId}
            useValidationFields
            useDefualtSessionManager
            useSessionUser
          />
        </div>
        <div style={{ width: '50%' }}>
          <strong>Business Details</strong>
          {!businessDetails.loading && !businessDetails.error ? (
            <>
              {businessDetails.business && Object.keys(businessDetails.business).length > 0 ? (
                <div>
                  <p>{businessDetails.business.name}</p>
                  <p>{businessDetails.business.email}</p>
                  <p>{businessDetails.business.cellphone}</p>
                  <p>{businessDetails.business.address}</p>
                </div>
              ) : (
                <p>❌ Not Found ❌</p>
              )}
            </>
          ) : (
            <>
              {businessDetails.error && businessDetails.error.length > 0 ? (
                businessDetails.error.map((e, i) => (
                  <p key={i}>ERROR: [{e}]</p>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </div>
      </div>
      <hr />

      {
        businessDetails.business && (
          <PaymentOptions
            UIComponent={PaymentOptionsUI}
            businessId={props.businessId}
            paymethods={businessDetails.business.paymethods}
            onPaymentChange={handlePaymethodChange}
          />
        )
      }
      {paymethodSelected?.paymethod?.gateway}
      {
        ['stripe_direct', 'stripe', 'stripe_connect'].includes(paymethodSelected?.paymethod?.gateway) && paymethodSelected.data?.card && (
          <p>Card: **** **** **** {paymethodSelected.data?.card?.last4} ({paymethodSelected.data?.card?.brand})</p>
        )
      }
      <hr />

      {orderOptions.type === 1 &&
        <>
          <DriverTips
            UIComponent={DriverTipsUI}
            businessId={props.businessId}
            driverTipsOptions={[0, 10, 15, 20, 25]}
            useOrderContext
            // handlerChangeDriverOption={(value) => handlerValues({ field: 'driver_tips', value: value / 100 })}
          />
          <hr />
        </>}

      <CouponControl
        ordering={props.ordering}
        UIComponent={CouponControlUI}
        businessId={props.businessId}
      />
      <br /><br /><hr />

      <strong>Your Order</strong>
      <Cart
        UIComponent={CartUI}
      />
      <br /><br /><hr />

      {
        cart && !cart.valid_schedule && (
          <p style={{ backgroundColor: '#FFFF00', color: '#FF0000' }}>Business is closed now!</p>
        )
      }

      {
        cart && !cart.valid_address && (
          <p style={{ backgroundColor: '#FFFF00', color: '#FF0000' }}>Address is invalid!</p>
        )
      }

      {
        cart && !cart.valid_products && (
          <p style={{ backgroundColor: '#FFFF00', color: '#FF0000' }}>No valid products!</p>
        )
      }

      <button
        disabled={!cart?.valid || !paymethodSelected || placing}
        style={styleButtonOrder}
        onClick={() => handlerClickPlaceOrder()}
      >
        {placing ? 'Placing...' : 'Place Order'}
      </button>

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
