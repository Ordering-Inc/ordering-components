import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useToast, ToastType } from '../../../contexts/ToastContext'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'

/**
 * Component to manage to send gift card behavior without UI component
 */
export const SendGiftCard = (props) => {
  const {
    UIComponent,
    giftCardId,
    setIsGiftCardSent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [actionState, setActionState] = useState({ loading: false, error: null })

  const handleSendGiftCard = async (values) => {
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
      const response = await fetch(`${ordering.root}/gift_cards/${giftCardId}/send`, requestOptions)
      const { error, result } = await response.json()
      setActionState({
        loading: false,
        error: error ? result : null
      })
      setIsGiftCardSent(true)
      if (props.showToastMsg) {
        showToast(
          error ? ToastType.Error : ToastType.Success,
          error
            ? t('ERROR', result[0])
            : t('GIFT_CARD_SENT', 'The gift card sent')
        )
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
          handleSendGiftCard={handleSendGiftCard}
        />
      )}
    </>
  )
}

SendGiftCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

SendGiftCard.defaultProps = {}
