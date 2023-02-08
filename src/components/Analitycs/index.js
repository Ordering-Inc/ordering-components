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

  const sha256 = (message) => {
    return new Promise(function(resolve, reject){
      // encode as UTF-8
      const msgBuffer = new TextEncoder().encode(message);
      // hash the message
      crypto.subtle.digest('SHA-256', msgBuffer).then(function(res){
        const hashBuffer = res;
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        // convert bytes to hex string
        const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
        if (hashHex){
          resolve(hashHex);
        } else {
          reject('error parsing ' + message + ' to hash')
        }
      });
    });
  }

  const isGeoActive = () => {
    return new Promise((resolve, reject) =>
      navigator.permissions ?

        // Permission API is implemented
        navigator.permissions.query({
          name: 'geolocation'
        }).then(permission =>
          // is geolocation granted?
          permission.state === "granted"
            ? resolve(true)
            : resolve(false)
        ) :

      // Permission API was not implemented
      reject(false)
    )
  }

  const formatForAnalytics = (str, limit, replaceSpace) => {
    let formattedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (replaceSpace) formattedStr = formattedStr.replaceAll(' ', '_');
    if (limit) formattedStr = formattedStr.substr(0, limit);
    return formattedStr;
  };

  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */
  const handlechangeView = (pageName) => {
    if (window.ga) {
      window.ga('set', 'page', pageName?.page)
      window.ga('send', 'pageview')
    }
    if (googleTagManager) {
      const userCustomer = JSON.parse(window.localStorage.getItem('user'))
      const language = JSON.parse(window.localStorage.getItem('language'))
      const digitalData = {
        event: "evPageView",
        version: "1.0",
        page: {
          pageInfo: {
            hostName: window.location.protocol + "//" + window.location.hostname + "/",
            currentURL: window.location.href,
          },
        },
        user: {
          profile: {
            statusLogged: userCustomer?.id > 0 ? "Logged" : "NotLogged",
            languajeUser: language ? language.code : "null",
            isGeoActive: isGeoActive() ? "Yes": "No",
            profileInfo: userCustomer?.id > 0 ?
              {
                segment_user_id: userCustomer?.wow_rewards_user_id ? userCustomer?.wow_rewards_user_id : "NA",
                email: sha256(userCustomer?.email),
                zipCode: userCustomer?.zipcode ? userCustomer?.zipcode : "null",
                city: userCustomer ? userCustomer?.locality ? formatForAnalytics(userCustomer?.locality, 40) : 'NA' : 'NA',
                municipio: userCustomer ? userCustomer?.administrative_area_level_3 ? formatForAnalytics(userCustomer?.administrative_area_level_3, 40) : 'NA' : 'NA',
                colonia: userCustomer ? userCustomer?.sublocality ? formatForAnalytics(userCustomer?.sublocality, 40) : 'NA' : 'NA',
              } :
              "NA",
            social: {
              network: 'NA',
            },
          }
        }
      };
      window.dataLayer.push(digitalData);
    }
  }
  const handleClickProduct = (product, productPosition) => {
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
							'position': productPosition ? productPosition : 'NA'
						}]
					}
				},
				event: "evProductClick",
			};
      window.dataLayer.push(digitalData)

      const dlAnalytics = {
        'flow': 'MarketPlace '+slug,
        'ecommerce': {
          'detail': {
            'products': [{
              'name': formatForAnalytics(product.name),
              'id': product.id ? product.id : 'producto sin sku',
              'price': product.price.toString(),
              'brand': 'MarketPlace '+slug,
              'category': formatForAnalytics(product.category.name),
              'variant': 'NA',
              'list': formatForAnalytics(product.category.name),
            }]
          }
        },
        event: "evProductDetail",
      };
      dataLayer.push(dlAnalytics);
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
              'id': product.id ? product.id : 'producto sin sku',
              'price': product.price,
              'brand': 'MarketPlace '+slug,
              'category': product.categoryId,
              'quantity': product.quantity
            }]
          },
        },
        event: "evAddToCart",
      };
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
      window.dataLayer.push(digitalData);
    }
  }
  const handleOrderPlaced = (order, orderD) => {
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
      if (orderD.paymethod_id === 33 || orderD.paymethod_id === 2){
        analyticsPaymethod = 'Tarjeta';
      } else if (orderD.paymethod_id === 36) {
        analyticsPaymethod = 'Wow+';
      } else {
        analyticsPaymethod = 'Efectivo';
      }
      const productFormated = orderD.products.map((product) => {
            return {
              'name': formatForAnalytics(product.name, 40),
              'id': product.sku ? product.sku : 'producto sin sku',
              'price': product.price ? product.price.toString() : '0',
              'brand': 'MarketPlace '+slug,
              'category': product.category_id,
              'list': product.category_id,
              'quantity': product.quantity.toString(),
            }
      })
      const digitalData = {
        'metodoPago': analyticsPaymethod,
        'rewardsPoints': orderD.paymethod_id === 33 ? orderD.total.toString() : '',
        'couponMoney': orderD.offer ? orderD.discount.toString() : '',
        'flow': 'MarketPlace '+slug,
        'ecommerce': {
          'purchase': {
            'actionField': {
              'id': orderD.integration_id || orderD.uuid,
              'affiliation': orderD.integration_id || orderD.uuid,
              'revenue': orderD.total.toString(),
              'tax': orderD.tax.toString(),
              'shipping': orderD.delivery_price.toString(),
              'coupon': orderD.offer ? orderD.offer.coupon ? orderD.offer.coupon : 'NA' : 'NA',
            },
            'products': productFormated,
          }
        },
        event: "evPurchase",
      };
      window.dataLayer.push(digitalData)
    }
  }
  const handleSignUp = (user) => {
    if (googleTagManager) {
      const dlAnalytics = {
        action: 'Exito',
        signupMethod: "Sistema",
        error: 'NA',
        event: "evSignUp",
      };
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
      window.dataLayer.push(digitalData)
    }
  }
  const handleGoToBusiness = (storeData) => {
    if (googleTagManager && storeData?.params?.store !== ':store' && storeData?.params?.store !== 'undefined') {
      const dlAnalytics = {
        restaurant: formatForAnalytics(storeData?.params?.store),
        event: "evClickRestaurant",
      };
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
      dataLayer.push(dlAnalytics);
    }
  }
  const handleChangeOrderType = (orderTypeData) => {
    if (googleTagManager) {
      const dlAnalytics = {
        action: orderTypeData.params.type == 1 ? 'Entrega' : 'Recoger',
        event: "evClickOrderType",
      };
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleCategorySelect = (data) => {
    if (googleTagManager) {
      const dlAnalytics = {
        menuRestaurantOption: formatForAnalytics(data?.params?.category.name),
        restaurant: formatForAnalytics(data?.params?.business),
        event: "evClickRestaurantMenu",
      };
      console.log('evClickRestaurantMenu', dlAnalytics)
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleGeneralError = (data) => {
    if (googleTagManager) {
      const dlAnalytics = {
       error: data,
       event: "evGeneralError",
      };
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleSocialMediaClick = (data) => {
    if (googleTagManager) {
      const dlAnalytics = {
				socialNetwork: data.social,
				event: "evClickSocialNetwork",
			};
      console.log('evClickSocialNetwork', dlAnalytics)
      window.dataLayer.push(dlAnalytics)
    }
  }
  const handleProductImpressions = (data) => {
    if (googleTagManager) {
      if (data.page === 'all') {
        let impressions = [];
        let positionList = 1;
        data?.params?.categories?.map((category) => {
          category.products.map((product) => {
            impressions.push({
              'name': formatForAnalytics(product.name, 40),
              'id': product.id ? product.id.toString() : 'producto sin sku',
              'price': product.price.toString(),
              'brand': 'MarketPlace '+slug,
              'category': formatForAnalytics(category.name, 40),
              'variant': 'NA',
              'list': formatForAnalytics(category.name, 40),
              'position': positionList
            })
            positionList += 1;
          })
        })
        while (impressions.length > 0) {
          const dlAnalytics = {
            'flow': 'MarketPlace '+slug,
            'ecommerce': {
              'impressions': impressions.slice(0,15),
            },
            event: "evProductImpression",
          };

          dataLayer.push(dlAnalytics);
          impressions = impressions.slice(15)
        }
      }
      if (data.page === 'categoryProducts') {
        let impressions = [];
        let positionList = 1;
        data.params.category.products.map((product) => {
          impressions.push({
            'name': formatForAnalytics(product.name, 40),
            'id': product.id ? product.id.toString() : 'producto sin sku',
            'price': product.price.toString(),
            'brand': 'MarketPlace '+slug,
            'category': formatForAnalytics(data.params.category.name, 40),
            'variant': 'NA',
            'list': formatForAnalytics(data.params.category.name, 40),
            'position': positionList
          })
          positionList += 1;
        })
        const dlAnalytics = {
          'flow': 'MarketPlace '+slug,
          'ecommerce': {
            'impressions': impressions.slice(0,15),
          },
          event: "evProductImpression",
        };
        dataLayer.push(dlAnalytics);
      }
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
      events.on('category_selected', handleCategorySelect)
      events.on('general_errors', handleGeneralError)
      events.on('social_media_click', handleSocialMediaClick)
      events.on('product-impressions', handleProductImpressions)
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
        events.off('category_selected', handleCategorySelect)
        events.off('general_errors', handleGeneralError)
        events.off('social_media_click', handleSocialMediaClick)
        events.off('product-impressions', handleProductImpressions)
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
