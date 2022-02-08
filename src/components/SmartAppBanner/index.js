import React, { useEffect } from 'react'
import { useConfig } from '../../contexts/ConfigContext'
import PropTypes from 'prop-types'

export const SmartAppBanner = (props) => {
  const {
    UIComponent,
    storeAndroidId,
    storeAppleId,
    storeKindleId
  } = props

  const [{ configs }] = useConfig()

  useEffect(() => {
    if (!configs) return
    if (storeAndroidId || configs?.android_app_id?.value) {
      const metaGoogle = document.createElement('meta')
      metaGoogle.name = 'google-play-app'
      metaGoogle.content = `app-id=${storeAndroidId || configs?.android_app_id?.value}`
      document.getElementsByTagName('head')[0].appendChild(metaGoogle)
    }
    if (storeAppleId || configs?.ios_app_id?.value) {
      const metaIos = document.createElement('meta')
      metaIos.name = 'apple-itunes-app'
      metaIos.content = `app-id=${storeAppleId || configs?.ios_app_id?.value}`
      document.getElementsByTagName('head')[0].appendChild(metaIos)
    }
    if (storeKindleId || configs?.kindle_app_id?.value) {
      const metaKindle = document.createElement('meta')
      metaKindle.name = 'kindle-fire-app'
      metaKindle.content = `app-id=${storeKindleId || configs?.kindle_app_id?.value}`
      document.getElementsByTagName('head')[0].appendChild(metaKindle)
    }
  }, [configs])

  return (
    <>
      {UIComponent && (
        <UIComponent {...props} />
      )}
    </>
  )
}

SmartAppBanner.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * store android id
   */
  storeAndroidId: PropTypes.string,
  /**
   * store apple id
   */
  storeAppleId: PropTypes.string,
  /**
   * store kindle id
   */
  storeKindleId: PropTypes.string
}

SmartAppBanner.defaultProps = {
  storeAndroidId: '',
  storeAppleId: '',
  storeKindleId: ''
}
