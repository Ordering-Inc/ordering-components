import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage payment option stripe behavior without UI component
 */
export const PaymentOptionStripe = (props) => {
  const {
    businessId,
    UIComponent
  } = props

  const [{ token, user }] = useSession()

  const [ordering] = useApi()

  /**
   * Contains and object to save cards, handle loading and error
   */
  const [cardsList, setCardsList] = useState({ cards: [], loading: true, error: null })
  /**
   * save stripe public key
   */
  const [publicKey, setPublicKey] = useState(props.publicKey)

  const [cardSelected, setCardSelected] = useState(null)

  /**
   * method to get cards from API
   */
  const getCards = async () => {
    setCardsList({ ...cardsList, loading: true })
    // Replace for a sdk method
    try {
      const response = await fetch(`${ordering.root}/payments/stripe/cards?business_id=${businessId}&user_id=${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
      const { result } = await response.json()
      const defaultCart = result.find(card => card.default)
      if (defaultCart) {
        setCardSelected({
          id: defaultCart.id,
          type: 'card',
          card: {
            brand: defaultCart.brand,
            last4: defaultCart.last4
          }
        })
      }
      setCardsList({
        ...cardsList,
        loading: false,
        cards: result
      })
    } catch (error) {
      setCardsList({
        ...cardsList,
        loading: false,
        error
      })
    }
  }

  /**
   * method to get cards from API
   */
  const deleteCard = async (card) => {
    // Replace for a sdk method
    try {
      const body = JSON.stringify({
        business_id: -1,
        card_id: card.id,
        user_id: user.id
      })
      const response = await fetch(`${ordering.root}/payments/stripe/cards`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body })
      const { error } = await response.json()
      if (!error) {
        cardsList.cards = cardsList.cards.filter(_card => _card.id !== card.id)
        setCardsList({
          ...cardsList
        })
      }
    } catch (error) {
    }
  }

  /**
   * Method to get stripe credentials from API
   */
  const getCredentials = async () => {
    // Replace for a sdk method
    const response = await fetch(`${ordering.root}/payments/stripe/credentials`, { headers: { Authorization: `Bearer ${token}` } })
    const { result: { publishable } } = await response.json()
    setPublicKey(publishable)
  }

  const handleCardClick = (card) => {
    setCardSelected({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4
      }
    })
  }

  const handleNewCard = (card) => {
    cardsList.cards.push(card)
    setCardsList({
      ...cardsList
    })
    handleCardClick(card)
  }

  // useEffect(() => {
  //   getCards()
  // }, [createdCard])

  useEffect(() => {
    if (!token) return
    // getRequirements()
    getCards()
    if (!props.publicKey) {
      getCredentials()
    }
  }, [token])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cardSelected={cardSelected}
          cardsList={cardsList}
          handleCardClick={handleCardClick}
          publicKey={publicKey}
          handleNewCard={handleNewCard}
          deleteCard={deleteCard}
          // handlerCreateCard={(val) => setCreatedCard(val)}
        />
      )}
    </>
  )
}

PaymentOptionStripe.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: PropTypes.number,
  /**
   * User id to pass in endpoint to get cards from API,
   */
  userId: PropTypes.number,
  /**
   * Components types before payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionStripe.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
