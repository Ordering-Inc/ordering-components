import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useEvent } from '../../contexts/EventContext'
/**
 * Component to manage payment option paypal behavior without UI component
 */
export const PaymentOptionOpenPay = (props) => {
  const {
    UIComponent,
    publicKey,
    merchantId,
    isSandbox,
    businessId,
    isApplyMasterCoupon
  } = props

  const [{ token, user }] = useSession()
  const [cardsList, setCardsList] = useState({ cards: [], loading: true, error: null })
  const [isSdkReady, setIsSdkReady] = useState(false)
  const [ordering] = useApi()
  const [cardSelected, setCardSelected] = useState(null)
  const [, { applyCoupon, applyOffer, removeOffer }] = useOrder()
  const [{ configs }] = useConfig()
  const [events] = useEvent()

  const isAlsea = ordering.project === 'alsea'

  useEffect(() => {
    if (!merchantId || !publicKey) return
    if (window?.OpenPay?.deviceData?.setup) {
      setIsSdkReady(true)
      return
    }
    const scripts = [
      'https://js.openpay.mx/openpay.v1.min.js',
      'https://resources.openpay.mx/lib/openpay-data-js/1.2.38/openpay-data.v1.min.js'
    ]
    scripts.forEach(s => {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = s
      script.defer = true
      script.async = true
      script.onload = () => {
        console.log('onload', isAlsea)
        window.OpenPay.setId(isAlsea ? merchantId : 'mdcd0jbyt3l0nptkyftl')
        window.OpenPay.setApiKey(isAlsea ? publicKey : 'pk_d076c726815841c3be83a3c7917c039b')
        window.OpenPay.Group.setId(isAlsea ? 'gquhxdrqw0eqdwtbcw0o' : 'gbuk3cxhqpapnqznndcg')
        window.OpenPay.Group.setApiKey(isAlsea ? 'pk_6fe12174eefa4930b4c17c5cfeec398e' : 'pk_fd69e364498d442f9e7340687c8eed90')
        window.OpenPay.setSandboxMode(!isAlsea)
        setIsSdkReady(true)
      }
      script.onerror = () => {
        throw new Error('Open pay SDK could not be loaded.')
      }
      document.body.appendChild(script)
    })
  }, [merchantId, publicKey])

  const getCards = async () => {
    try {
      setCardsList({
        ...cardsList,
        loading: true,
        error: null
      })
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/api/openpay/cards/cards.php?language=${ordering.language}&user_id=${user?.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      if (result.error) {
        setCardsList({
          loading: false,
          cards: [],
          error: result?.result
        })
        events.emit('general_errors', result?.result)
      } else {
        setCardsList({
          loading: false,
          cards: result?.result.map(card => ({
            ...card,
            data: {
              card_id: card?.id,
              device_session_id: window.OpenPay.deviceData.setup()
            }
          })),
          error: null
        })
      }
    } catch (err) {
      setCardsList({
        ...cardsList,
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleCardClick = (card) => {
    setCardSelected({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brandCardName,
        last4: card.last4
      },
      data: {
        card_id: card.id,
        device_session_id: window.OpenPay.deviceData.setup()
      }
    })
    if (card.brandCardName === 'mastercard' && isApplyMasterCoupon) {
      applyMasterCardCoupon()
    } else {
      if ((props?.cart?.offers.length > 0 || props?.cart?.coupon) && props?.cart?.coupon === 'DLVMASTER30') {
        if (!configs?.advanced_offers_module?.value) {
          applyCoupon({
            business_id: businessId,
            coupon: null
          })
        }
        // else {
        //   removeOffer({
        //     business_id: businessId,
        //     offer_id: props?.cart?.offers[0].id
        //   })
        // }
      }
    }
  }

  const handleNewCard = async (data) => {
    try {
      setCardsList({
        ...cardsList,
        loading: true,
        error: null
      })
      if (configs?.payment_group_tokenization?.value !== '1') {
        const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/api/openpay/cards/token.php`, {
          method: 'POST',
          body: JSON.stringify({
            card_number: data.cardNumber,
            cvv2: data.cardSecurityCode,
            // expiry: data.expiry,
            expiration_month: data.cardMonth,
            expiration_year: data.cardYear,
            holder_name: data.cardName
          }),
          headers: {
            Authorization: `Bearer ${token}`,
            'X-APP-X': ordering.appId
          }
        })
        const result = await response.json()
        if (typeof result !== 'object' || result?.error) {
          setCardsList({
            ...cardsList,
            loading: false,
            error: result?.result
          })
          return
        }
        const deviceSessionId = window.OpenPay.deviceData.setup()
        addCardPlugin(result?.id, deviceSessionId)
      } else {
        const CardData = {
          card_number: data.cardNumber,
          cvv2: data.cardSecurityCode,
          // expiry: data.expiry,
          expiration_month: data.cardMonth,
          expiration_year: data.cardYear,
          holder_name: data.cardName
        }
        window.OpenPay.Group.token.create(CardData, async (success) => {
          if (typeof success === 'object') {
            const deviceSessionId = window.OpenPay.deviceData.setup()
            addCardPlugin(success.data.id, deviceSessionId)
          }
        }, (fallback) => {
          setCardsList({
            ...cardsList,
            loading: false,
            error: fallback?.data?.description
          })
        })
      }
    } catch (err) {
      events.emit('general_errors', err?.message)
      setCardsList({
        ...cardsList,
        loading: false,
        error: [err.message]
      })
    }
  }

  const addCardPlugin = async (tokenId, deviceSessionId) => {
    const responseCard = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/api/openpay/cards/add.php`, {
      method: 'POST',
      body: JSON.stringify({
        language: ordering.language,
        user_id: user?.id,
        token_id: tokenId,
        device_session_id: deviceSessionId
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        'X-APP-X': ordering.appId,
        'Content-Type': 'application/json'
      }
    })
    const resultCard = await responseCard.json()
    if (resultCard.error) {
      setCardsList({
        ...cardsList,
        loading: false,
        error: resultCard?.result
      })
      events.emit('general_errors', resultCard?.result)
      return
    }
    setCardsList({
      cards: [
        ...cardsList.cards,
        {
          ...resultCard?.result,
          brand: resultCard?.brandCardName
        }
      ],
      loading: false,
      error: null
    })
    handleCardClick({
      ...resultCard?.result,
      brand: resultCard?.brandCardName,
      type: 'card',
      card: {
        brand: resultCard.brandCardName,
        last4: resultCard?.last4
      },
      data: {
        card_id: resultCard?.result?.id,
        device_session_id: deviceSessionId
      }
    })
  }

  const deleteCard = async (card) => {
    try {
      setCardsList({
        ...cardsList,
        loading: true,
        error: null
      })
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/api/openpay/cards/delete.php`, {
        method: 'POST',
        body: JSON.stringify({
          language: ordering.language,
          user_id: user?.id,
          card_id: card?.id
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'X-APP-X': ordering.appId
        }
      })
      const result = await response.json()
      if (result?.result === 'OK') {
        setCardsList({
          cards: cardsList?.cards?.filter(_card => _card?.id !== card?.id),
          loading: false,
          error: null
        })
      } else {
        events.emit('general_errors', result?.result)
        setCardsList({
          ...cardsList,
          loading: false,
          error: [result?.result]
        })
      }
    } catch (err) {
      events.emit('general_errors', err?.message)
      setCardsList({
        ...cardsList,
        loading: false,
        error: [err.message]
      })
    }
  }

  const applyMasterCardCoupon = () => {
    if (!configs?.advanced_offers_module?.value) {
      applyCoupon({
        business_id: businessId,
        coupon: 'DLVMASTER30'
      })
    }
    // else {
    //   applyOffer({
    //     business_id: businessId,
    //     coupon: 'DLVMASTER30',
    //     force: true
    //   })
    // }
  }

  useEffect(() => {
    if (isSdkReady) {
      getCards()
    }
  }, [isSdkReady])

  return (
    UIComponent && (
      <UIComponent
        {...props}
        cardSelected={cardSelected}
        getCards={getCards}
        cardsList={cardsList}
        handleNewCard={handleNewCard}
        handleCardClick={handleCardClick}
        deleteCard={deleteCard}
      />
    )
  )
}

PaymentOptionOpenPay.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

PaymentOptionOpenPay.defaultProps = {
  body: {},
  currency: 'USD',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
