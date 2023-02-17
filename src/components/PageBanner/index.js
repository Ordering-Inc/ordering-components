import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const PageBanner = (props) => {
  const {
    UIComponent,
    position
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  const [pageBannerState, setPageBannerState] = useState({ loading: true, banner: null, error: null })

  /**
   * Method to get the page banner from API
   */
  const handleGetPageBanner = async () => {
    try {
      setPageBannerState({ ...pageBannerState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        }
      }
      const response = await fetch(`${ordering.root}/banner?position=${position}`, requestOptions)
      const { error, result } = await response.json()
      const totalItems = result.reduce((items, banner) => [...items, ...banner?.items], [])
      setPageBannerState({
        loading: false,
        banner: error ? null : { items: totalItems },
        result: result,
        error: error ? result : null
      })
    } catch (error) {
      setPageBannerState({
        ...pageBannerState,
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    if (!position) return
    handleGetPageBanner()
  }, [position])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          pageBannerState={pageBannerState}
        />
      )}
    </>
  )
}

PageBanner.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

PageBanner.defaultProps = {}
