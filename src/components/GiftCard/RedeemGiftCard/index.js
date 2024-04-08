import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useEvent } from '../../../contexts/EventContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'

/**
 * Component to manage redeem gift card behavior without UI component
 */
export const RedeemGiftCard = (props) => {
  const {
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [events] = useEvent()

  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [redeemedGiftCard, setRedeemedGiftCard] = useState(null)

  const handleApply = async (values) => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify(values)
      }
      const response = await fetch(`${ordering.root}/gift_cards/redeem`, requestOptions)
      const { error, result } = await response.json()
      setActionState({
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        setRedeemedGiftCard(result)
        events.emit('gift_card_redeemed')
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionState={actionState}
          redeemedGiftCard={redeemedGiftCard}
          handleApply={handleApply}
          setRedeemedGiftCard={setRedeemedGiftCard}
        />
      )}
    </>
  )
}

RedeemGiftCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

RedeemGiftCard.defaultProps = {}
