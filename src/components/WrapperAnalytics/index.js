import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

export const WrapperAnalytics = (Child) => (props) => {
  const [analyticsReady, setAnalyticsReady] = useState(false)

  useEffect(() => {
    if (window.document.getElementById('google-analytics-sdk')) {
      if (typeof ga !== 'undefined') {
        setAnalyticsReady(true)
      }
      return
    }

    const js = window.document.createElement('script')
    js.id = 'google-analytics-sdk'
    js.async = true
    js.defer = true
    js.src = 'https://www.google-analytics.com/analytics.js'
    js.onload = function () {
      setAnalyticsReady(true)
    }

    window.document.body.appendChild(js)
    return () => {
      js.onload = null
    }
  }, [])

  return (
    <Child {...props} analyticsReady={analyticsReady} />
  )
}

WrapperAnalytics.propTypes = {
}

WrapperAnalytics.defaultProps = {}
