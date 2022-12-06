import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useToast, ToastType } from '../../../contexts/ToastContext'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useConfig } from '../../../contexts/ConfigContext'

export const GoogleMapsApiKeySetting = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [configState, { refreshConfigs }] = useConfig()
  const apiKeyConfigId = configState?.configs?.google_maps_api_key?.id

  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to save the Google Maps API Key
   */
  const handleSaveApiKey = async (apiKeyValue) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          key: 'google_maps_api_key',
          value: apiKeyValue
        })
      }
      const response = await fetch(`${ordering.root}/configs/${apiKeyConfigId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        await refreshConfigs()
        setActionState({ ...actionState, loading: false })
        showToast(ToastType.Success, t('APIKEY_ADDED', 'API key added'))
      }
      setActionState({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionState={actionState}
          handleSaveApiKey={handleSaveApiKey}
        />
      )}
    </>
  )
}

GoogleMapsApiKeySetting.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

GoogleMapsApiKeySetting.defaultProps = {}
