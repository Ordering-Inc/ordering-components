import React, { useEffect, useState } from 'react'

import { loadStripe } from '@stripe/stripe-js'

import { CheckoutUI } from '../../components/CheckoutUI'
import { Checkout } from '../../../src/components/Checkout'
import { TestComponent } from '../../components/TestComponent'
import { useSession } from '../../../src/contexts/SessionContext'
import { useOrder } from '../../../src/contexts/OrderContext'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useApi } from '../../../src/contexts/ApiContext'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const CheckoutExample = () => {
  const { cartUuid } = useParams()
  const query = useQuery()
  const history = useHistory()
  const [ordering] = useApi()

  const actionsBeforePlace = async (paymethod, cart) => {
    switch (paymethod.gateway) {
      case 'stripe':
      case 'stripe_connect':
      case 'stripe_direct': {
        const stripe = await loadStripe(paymethod.paymethod.credentials.publishable)
        await stripe.confirmCardPayment(cart.paymethod_data.result.client_secret)
        return true
      }
      case 'stripe_redirect': {
        const stripe = await loadStripe(paymethod.paymethod.credentials.publishable)
        stripe.confirmBancontactPayment(
          cart.paymethod_data.result.client_secret,
          {
            payment_method: {
              billing_details: cart.paymethod_data.data.owner
            },
            return_url: `http://localhost:8200/checkout/${cartUuid}`
          }
        ).then((result) => {
          console.log(result)
        })
        return true
      }
      default:
        return true
    }
  }

  const [{ token }] = useSession()
  const [{ carts }, { confirmCart }] = useOrder()

  // const [cartUuid, setCartUuid] = useState(params.cartUuid)
  const [cartState, setCartState] = useState({ loading: false, error: null, cart: null })

  const getOrder = async (cartId) => {
    setCartState({ ...cartState, loading: true })
    const response = await fetch(`${ordering.root}/carts/${cartId}`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
    const { error, result } = await response.json()
    if (result.status === 1 && result.order?.uuid) {
      alert(`REDIRECT TO /orders/${result.order.uuid}`)
      setCartState({ ...cartState, loading: false })
      history.push(`/order_details/${result.order.uuid}`)
    } else if (result.status === 2 && result.paymethod_data.gateway === 'stripe_redirect' && query.get('payment_intent')) {
      console.log('Confirm order')
      // const result = await confirmCart(cartUuid)
      // console.log(result)
    } else {
      setCartState({
        ...cartState,
        loading: false,
        cart: result
      })
    }
  }

  useEffect(() => {
    if (token && cartUuid && !cartState.cart) {
      getOrder(cartUuid)
    }
  }, [token, cartUuid])

  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: CheckoutUI,
    /**
     * Id for get business details from API
     */
    businessId: 41,
    actionsBeforePlace,
    // /**
    //  * handler values from other components
    //  */
    // handlerValues: (e) => { console.log(e) },
    /**
     * Custom method to receive props from checkout page
     */
    // handleCustomClick: (e) => { console.log('handleCustomClick', e) },
    /**
     * onPlaceOrderClick, function to get click event and return business object after default behavior
     */
    onPlaceOrderClick: (data, paymethod, cart) => {
      console.log('onPlaceOrderClick event', data, paymethod, cart)
      if (cart.order?.uuid) {
        alert(`REDIRECT TO /orders/${cart.order.uuid}`)
        history.push(`/order_details/${cart.order.uuid}`)
      }
    },
    /**
     * Components types before checkout
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after checkout
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before checkout
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after checkout
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }
  return (
    <>
      {!cartUuid && carts && Object.keys(carts).length === 0 && 'You not have carts'}
      {!cartUuid && carts && Object.values(carts).map(cart => (
        <button key={cart.uuid} onClick={() => history.push(`/checkout/${cart.uuid}`)} disabled={cartState.loading}>Checkout cart: {cart.uuid}</button>
      ))}
      {cartUuid && cartState.cart && cartState.cart?.status !== 1 && <Checkout {...props} cart={cartUuid} />}
    </>
  )
}
