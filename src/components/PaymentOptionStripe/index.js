import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage payment option stripe behavior without UI component
 */
export const PaymentOptionStripe = (props) => {
  const {
    businessId,
    userId,
    UIComponent
  } = props

  const [{ token }] = useSession()

  /**
   * Contains and object to save cards, handle loading and error
   */
  const [cardsList, setCardsList] = useState({ cards: [], loading: true, error: null })
  /**
   * save stripe public key
   */
  const [stripePK, setStripePK] = useState(null)
  /**
   * Save client id used in stripe
   */
  const [requirements, setRequirements] = useState(null)
  /**
   * Save payment method id, used for call getCards method again
   */
  const [createdCard, setCreatedCard] = useState()

  /**
   * method to get cards from API
   */
  const getCards = async () => {
    setCardsList({
      ...cardsList,
      loading: true
    })
    // Replace for a sdk method
    try {
      const response = await fetch(
        `http://apiv4-features.ordering.co/v400/en/luisv4/payments/stripe/cards?business_id=${businessId}&user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const { result } = await response.json()
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
   * Method to get stripe credentials from API
   */
  const getCredentials = async () => {
    // Replace for a sdk method
    const response = await fetch(
      'http://apiv4-features.ordering.co/v400/en/luisv4/payments/stripe/credentials',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { result: { publishable } } = await response.json()
    setStripePK(publishable)
  }

  /**
   * Method to get client id for create stripe payment method
   */
  const getRequirements = async () => {
    // Replace for a sdk method
    const response = await fetch(
      'http://apiv4-features.ordering.co/v400/en/luisv4/payments/stripe/requirements?type=add_card',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { result } = await response.json()
    setRequirements(result)
  }

  useEffect(() => {
    getCards()
  }, [createdCard])

  useEffect(() => {
    getCredentials()
    getRequirements()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cardsList={cardsList}
          stripeKey={stripePK}
          clientSecret={requirements}
          handlerCreateCard={(val) => setCreatedCard(val)}
        />
      )}
    </>
  )
}

PaymentOptionStripe.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
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
