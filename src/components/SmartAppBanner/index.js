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
    const metas = [
      {
        name: 'google-play-app',
        id: storeAndroidId || configs?.android_app_id?.value
      },
      {
        name: 'apple-itunes-app',
        id: storeAppleId || configs?.ios_app_id?.value
      },
      {
        name: 'kindle-fire-app',
        id: storeKindleId || configs?.kindle_app_id?.value
      }
    ]
    metas.filter(meta => meta?.id).map(meta => {
      const metaElement = document.createElement('meta')
      metaElement.name = meta.name
      metaElement.content = `app-id=${meta.id}`
      document.getElementsByTagName('head')[0].appendChild(metaElement)
    })
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
