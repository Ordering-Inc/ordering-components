import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const PageBanner = (props) => {
  const {
    UIComponent,
    position
  } = props

  const [ordering] = useApi()
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
          'X-App-X': ordering.appId
        }
      }
      const response = await fetch(`${ordering.root}/banner?position=${position}`, requestOptions)
      const { error, result } = await response.json()
      setPageBannerState({
        loading: false,
        banner: error ? null : result,
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
