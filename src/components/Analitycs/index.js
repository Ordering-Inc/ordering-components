import React, { useEffect, useState } from 'react'
import { useEvent } from '../../contexts/EventContext'

// import PropTypes from 'prop-types'

export const Analytics = (props) => {
  const {
    trackId,
    children
  } = props

  const [events] = useEvent()
  const [analyticsReady, setAnalyticsReady] = useState(false)

  useEffect(() => {
    if (!trackId) {
      return
    }
    if (window.document.getElementById('google-analytics-sdk')) {
      events.on('change_view', (data) => {
        console.log('Data', data)
      })
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
      window.ga('create', trackId)
      window.ga('set', 'page', window.location.pathname)
      window.ga('send', 'pageview')
    }

    window.document.body.appendChild(js)
    return () => {
      js.onload = null
    }
  }, [trackId])
  const handlechangeView = (pageName) => {
    console.log('Data', pageName)
    window.ga('set', 'page', pageName)
    window.ga('send', 'pageview')
  }
  useEffect(() => {
    console.log('Analytic Ready')
    if (analyticsReady && window.ga) {
      events.on('change_view', handlechangeView)
    }
    return () => {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView)
      }
    }
  }, [analyticsReady])
  return (
    <>
      {children}
    </>
  )
}

Analytics.propTypes = {
}

Analytics.defaultProps = {}
