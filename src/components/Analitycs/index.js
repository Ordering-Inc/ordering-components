import React, { useEffect, useState } from 'react'
import { useEvent } from '../../contexts/EventContext'
import { useSession } from '../../contexts/SessionContext'
import PropTypes from 'prop-types'

export const Analytics = (props) => {
  const {
    trackId,
    googleTagManager,
    slug,
    children
  } = props

  const [events] = useEvent()
  const [analyticsReady, setAnalyticsReady] = useState(false)


  const formatForAnalytics = (str, limit, replaceSpace) => {
    let formattedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (replaceSpace) formattedStr = formattedStr.replaceAll(' ', '_');
    if (limit) formattedStr = formattedStr.substr(0, limit);
    return formattedStr;
  };

  useEffect(() => {
    if (!trackId) {
      return
    }
    if (window.document.getElementById('google-analytics-sdk')) {
      if (typeof ga !== 'undefined') {
        setAnalyticsReady(true)
      }
      return
    }

    const js = window.document.createElement('script')
    js.id = 'google-analytics-sdk'
    js.async = true
    js.defer = true
    js.src = 'https://www.google-analytics.com/analytics.js'
    js.onload = window?.ga && function () {
      setAnalyticsReady(true)
      window.ga('create', trackId)
      window.ga('require', 'ec')
      window.ga('set', 'page', window.location.pathname)
      window.ga('send', 'pageview')
    }

    window.document.body.appendChild(js)
    return () => {
      js.onload = null
    }
  }, [trackId])

  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */
  const handlechangeView = (pageName) => {
    if (window.ga) {
      window.ga('set', 'page', pageName?.page)
      window.ga('send', 'pageview')
    }
    // if (googleTagManager) {
    //   window.dataLayer.push({
    //     event: 'pageview',
    //     page: {
    //       title: pageName?.page
    //     }
    //   });
    // }
  }
  const handleClickProduct = (product) => {
    if (window.ga) {
      window.ga('ec:addProduct', {
        id: product.id,
        name: product.name,
        category: product.category_id,
        price: product.price
      })
      window.ga('ec:setAction', 'click')
      window.ga('send', 'event', 'UI', 'click', 'add to cart')
    }
    if (googleTagManager) {
      const digitalData = {
        'flow': 'MarketPlace '+slug,
				'ecommerce': {
					'click': {
						'products': [{
							'name': product.name,
							'id': product.sku ? product.sku : 'producto sin sku',
							'price': product.price.toString(),
							'brand': 'MarketPlace '+slug,
							'category': formatForAnalytics(product.category.name, 40),
							'variant': 'NA',
							'list': formatForAnalytics(product.category.name, 40),
							// 'position':
						}]
					}
				},
				event: "evProductClick",
			};
      console.log('evProductClick', digitalData)
      window.dataLayer.push(digitalData)
    }
  }
  const handleProductAdded = (product) => {
    if (window.ga) {
      window.ga('ec:addProduct', {
        id: product.id,
        name: product.name,
        category: product.category_id,
        price: product.price,
        quantity: product.quantity
      })
      window.ga('ec:setAction', 'add')
      window.ga('send', 'event', 'UI', 'click', 'add to cart')
    }
    if (googleTagManager) {
      const digitalData = {
        'flow': 'MarketPlace '+slug,
        'ecommerce': {
          'add': {
            'products': [{
              'name': formatForAnalytics(product.name, 40),
              'id': product.sku ? product.sku : 'producto sin sku',
              'price': product.price,
              'brand': 'MarketPlace '+slug,
              'category': product.categoryId,
              'quantity': product.quantity
            }]
          },
        },
        event: "evAddToCart",
      };
      console.log('evAddToCart', digitalData)
      window.dataLayer.push(digitalData)
    }
  }
  const handleLogin = (data) => {
    if (window.ga) {
      window.ga('set', 'userId', data.id)
    }
    if (googleTagManager) {
      let digitalData = null
      if (data?.bySocial) {
        digitalData = {
          action: "Exito",
          error: "NA",
          loginMethod: data?.bySocial,
          event: "evLogIn",
        };
      } else {
        digitalData = {
          action: "Exito",
          error: "NA",
          loginMethod: 'Sistema',
          event: "evLogIn",
        };
      }
      console.log('evLogIn', digitalData);
      window.dataLayer.push(digitalData);
    }
  }
  const handleOrderPlaced = (order) => {
    if (window.ga) {
      window.ga('ec:setAction', 'purchase', { // Transaction details are provided in an actionFieldObject.
        id: order.id, // (Required) Transaction id (string).
        affiliation: order.business?.name, // Affiliation (string).
        revenue: order.total, // Revenue (number).
        tax: order.tax_total, // Tax (number).
        shipping: order.delivery_zone_price // Shipping (number).
      })
    }
    if (googleTagManager) {
      let analyticsPaymethod = null;
      if (order.paymethod_id == 33 || order.paymethod_id == 2){
        analyticsPaymethod = 'Tarjeta';
      } else if (order.paymethod_id == 36) {
        analyticsPaymethod = 'Wow+';
      } else {
        analyticsPaymethod = 'Efectivo';
      }
      const productFormated = order.products.map((product) => {
            return {
              'name': formatForAnalytics(product.name, 40),
              'id': product.sku ? product.sku : 'producto sin sku',
              'price': product.price ? product.price.toString() : '0',
              'brand': 'MarketPlace '+slug,
              'category': formatForAnalytics(product.category_id, 40),
              'list': formatForAnalytics(product.category_id, 40),
              'quantity': product.quantity.toString(),
            }
      })
      const digitalData = {
        'metodoPago': analyticsPaymethod,
        'rewardsPoints': order.paymethod_id == 33 ? order.summary.total.toString() : '',
        'couponMoney': order.offer ? order.discount.toString() : '',
        'flow': 'MarketPlace '+slug,
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': order.integration_id,
              'affiliation': order.integration_id,
              'revenue': order.summary.total.toString(),
              'tax': order.summary.tax.toString(),
              'shipping': order.delivery_zone_price.toString(),
              'coupon': order.offer ? order.offer.coupon ? order.offer.coupon : 'NA' : 'NA',
            },
            'products': productFormated,
          }
        },
        event: "evPurchase",
      };
      console.log('evPageView', digitalData)
      window.dataLayer.push(digitalData)
    }
  }
  const handleSignUp = (user) => {
    console.log(user)
    if (googleTagManager) {
      const dlAnalytics = {
        action: 'Exito',
        signupMethod: "Sistema",
        error: 'NA',
        event: "evSignUp",
      };
      console.log('evSignUp', dlAnalytics)
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleRemoveProduct = (product, result) => {
    if (googleTagManager) {
      const digitalData = {
        'flow': 'MarketPlace '+slug,
        'ecommerce': {
          'remove': {
            'products': [{
              'name': formatForAnalytics(product.name),
              'id': product.sku ? product.sku : 'producto sin sku',
              'price': product.price.toString(),
              'brand': slug,
              'category': product.category_id,
              // 'variant': formatForAnalytics(variants, 40),
              'quantity': product.quantity,
            }]
          },
        },
        event: "evRemoveFromCart",
      };
      console.log('evRemoveFromCart', digitalData)
      window.dataLayer.push(digitalData)
    }
  }
  const handleGoToBusiness = (storeData) => {
    if (googleTagManager) {
      const dlAnalytics = {
        restaurant: formatForAnalytics(storeData?.params?.store),
        event: "evClickRestaurant",
      };
      console.log('evClickRestaurant', dlAnalytics)
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleGoToCheckout = (cartData) => {
    if (googleTagManager) {
      const dlAnalytics = {
        'flow': 'MarketPlace '+slug,
        'ecommerce': {
          'checkout': {
            'actionField': {'step': 1},
            'products': cartData.params.cart.products
          }
        },
        event: "evCheckout",
      };
      console.log('evCheckout', dlAnalytics)
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleAddressEvent = (addressEvent) => {
    if (googleTagManager) {
      let dlAnalytics = null
      if (addressEvent.page === 'new_address') {
        dlAnalytics = {
          actionType: "Agregar",
          action: "Exito",
          tag: addressEvent.params.tag ? addressEvent.params.tag : 'NA',
          error: "NA",
          event: "evDirectionActions"
        };
      }
      if (addressEvent.page === 'edit_address') {
        dlAnalytics = {
          actionType: "Editar",
          action: "Exito",
          tag: addressEvent.params.tag ? addressEvent.params.tag : 'NA',
          error: "NA",
          event: "evDirectionActions"
        }
      }
      console.log('evDirectionActions', dlAnalytics);
      dataLayer.push(dlAnalytics);
    }
  }
  const handleChangeOrderType = (orderTypeData) => {
    if (googleTagManager) {
      const dlAnalytics = {
        action: orderTypeData.params.type == 1 ? 'Entrega' : 'Recoger',
        event: "evClickOrderType",
      };
      console.log('evClickOrderType', dlAnalytics)
      window.dataLayer.push(dlAnalytics)
    }
  }
  useEffect(() => {
    console.log('Analytic Ready')
    if ((analyticsReady && window.ga) || googleTagManager) {
      events.on('change_view', handlechangeView)
      events.on('userLogin', handleLogin)
      events.on('product_clicked', handleClickProduct)
      events.on('product_added', handleProductAdded)
      events.on('order_placed', handleOrderPlaced)
      events.on('singup_user', handleSignUp)
      events.on('cart_product_removed', handleRemoveProduct)
      events.on('go_to_business', handleGoToBusiness)
      events.on('go_to_checkout', handleGoToCheckout)
      events.on('address_event', handleAddressEvent)
      events.on('order_type_change', handleChangeOrderType)
    }
    return () => {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView)
        events.off('userLogin', handleLogin)
        events.off('product_clicked', handleClickProduct)
        events.off('product_added', handleProductAdded)
        events.off('order_placed', handleOrderPlaced)
        events.off('singup_user', handleSignUp)
        events.off('cart_product_removed', handleRemoveProduct)
        events.off('go_to_business', handleGoToBusiness)
        events.off('go_to_checkout', handleGoToCheckout)
        events.off('address_event', handleAddressEvent)
        events.off('order_type_change', handleChangeOrderType)
      }
    }
  }, [analyticsReady])
  return (
    <>
      {children}
    </>
  )
}

Analytics.propTypes = {
  /**
   * Your Google Analytics trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  // trackId: PropTypes.string.isRequired
}

Analytics.defaultProps = {}
