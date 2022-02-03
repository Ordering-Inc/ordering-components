import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useConfig } from '../../contexts/ConfigContext'
import { useEvent } from '../../contexts/EventContext'

export const FacebookPixel = (props) => {
  const {
    children,
    trackId
  } = props

  const [events] = useEvent()
  const [configs] = useConfig()
  const [facebookPixelReady, setFacebookPixelReady] = useState(false)

  const init = () => {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')

    fbq('init', trackId)
    fbq('track', 'PageView')
    setFacebookPixelReady(true)
  }

  useEffect(() => {
    if (trackId) {
      init()
    }
  }, [trackId])

  const handleProductAdded = (product) => {
    fbq('track', 'AddToCart', {
      content_category: product?.category?.name,
      content_ids: [product?.id],
      content_name: product?.name,
      currency: configs?.stripe_currency?.value ?? 'USD',
      value: product?.total ?? product?.price,
      quantity: product?.quantity
    })
  }

  
  const handleProductEdited = (product) => {
    fbq('track', 'CustomizeProduct', {
      content_category: product?.category?.name,
      content_ids: [product?.id],
      content_name: product?.name,
      currency: configs?.stripe_currency?.value ?? 'USD',
      value: product?.total ?? product?.price,
      quantity: product?.quantity
    })
  }

  const handleOrderPlaced = (order) => {
    fbq('track', 'Purchase', {
      content_ids: [order.id],
      value: order?.total,
      currency: configs?.stripe_currency?.value ?? 'USD',
    })
  }

  const handleSignupUser = (user) => {
    fbq('track', 'Lead', {
      content_name: `${user?.name} ${user?.last_name}`,
      content_category: 'signup',
      value: user?.id
    })
  }

  const handleLoginUser = (user) => {
    fbq('track', 'Lead', {
      content_name: `${user?.name} ${user?.last_name}`,
      content_category: 'login',
      value: user?.id
    })
  }

  const handlePaymentInfo = (payment) => {
    fbq('track', 'AddPaymentInfo', {
      content_category: payment?.gateway,
      content_ids: payment?.id
    })
  }

  const handlechangeView = (pageName) => {
    fbq('track', 'ViewContent', {
      content_name: pageName?.page,
      contents: [pageName?.params]
    })
  }

  useEffect(() => {
    if (facebookPixelReady) {
      events.on('userLogin', handleLoginUser)
      events.on('change_view', handlechangeView)
      events.on('product_added', handleProductAdded)
      events.on('product_edited', handleProductEdited)
      events.on('order_placed', handleOrderPlaced)
      events.on('singup_user', handleSignupUser)
      events.on('add_payment_option', handlePaymentInfo)
    }

    return () => {
      if (facebookPixelReady) {
        events.off('userLogin', handleLoginUser)
        events.off('change_view', handlechangeView)
        events.off('product_added', handleProductAdded)
        events.off('product_edited', handleProductEdited)
        events.off('order_placed', handleOrderPlaced)
        events.off('singup_user', handleSignupUser)
        events.off('add_payment_option', handlePaymentInfo)
      }
    }
  }, [facebookPixelReady])

  return (
    <>
      {children}
    </>
  )
}

FacebookPixel.propTypes = {
  /**
   * Your Facebook pixels trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  trackId: PropTypes.string.isRequired
}

FacebookPixel.defaultProps = {}
