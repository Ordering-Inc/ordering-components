import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import { useApi } from '../../contexts/ApiContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage payment option stripe link behavior UI component
 */
export const PaymentOptionStripeLink = (props) => {
  const {
    UIComponent,
    paymentURL
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [stripeLinkState, setStripeLinkState] = useState({ loading: true, error: null, paymentURL: null })
  const [userInfo, setUserInfo] = useState({})

  const handleChangeUserInfo = (changes) => {
    setUserInfo({ ...userInfo, ...changes })
  }

  const handleSendStripeLink = async (type, callback) => {
    try {
      setStripeLinkState({ ...stripeLinkState, loading: true })
      const data = {
        type,
        provider: ordering?.project === 'pizzahutmexico' ? 'custom' : 'twilio',
        country_phone_code: userInfo.country_phone_code,
        cellphone: userInfo.cellphone,
        message: t('LINK_TO_PAY_MESSAGE',
          'Hello there _name_ _lastname_, click on the following link to complete the payment: _link_')
          .replace('_name_', userInfo?.name)
          .replace('_lastname_', userInfo?.lastname)
          .replace('_link_', paymentURL)
      }
      const response = await fetch(`${ordering.root}/text_messages/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-App-X': ordering.appId
        },
        body: JSON.stringify(data)
      })
      const { result, error } = await response.json()
      if (error) {
        setStripeLinkState({ ...stripeLinkState, loading: false, error: result })
        return
      }
      setStripeLinkState({ ...stripeLinkState, loading: false })
      callback && callback()
      showToast(ToastType.Success, t('MESSAGE_SENT_SUCCESSFULLY', 'The link has been sent'))
    } catch (error) {
      setStripeLinkState({ ...stripeLinkState, loading: false, error })
    }
  }

  useEffect(() => {
    if (!paymentURL) return
    setStripeLinkState({ ...stripeLinkState, loading: false, paymentURL })
  }, [paymentURL])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          userInfo={userInfo}
          stripeLinkState={stripeLinkState}
          setStripeLinkState={setStripeLinkState}
          handleSendStripeLink={handleSendStripeLink}
          handleChangeUserInfo={handleChangeUserInfo}
        />
      )}
    </>
  )
}

PaymentOptionStripeLink.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
