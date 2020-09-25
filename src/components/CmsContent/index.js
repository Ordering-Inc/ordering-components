import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { CancelToken } from 'ordering-api-sdk'

/**
 * Component to manage login behavior without UI component
 */
export const CmsContent = (props) => {
  const {
    UIComponent,
    pageSlug,
    onNotFound
  } = props

  /**
   * Array to save the body of the page
   */
  const [body, setBody] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [ordering] = useApi()
  const requestsState = {}
  /**
   * Method used to get the page by slug
   */
  const getPage = async (slug) => {
    setLoading(true)
    try {
      const source = CancelToken.source()
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages(slug).get({ cancelToken: source.token })
      setLoading(false)
      if (!error) {
        setBody(result.body)
        setError(null)
      } else {
        setError(result)
        onNotFound && onNotFound(pageSlug)
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setLoading(false)
        setError([error.message])
      }
    }
  }

  useEffect(() => {
    getPage(pageSlug)
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          body={body}
          loading={loading}
          error={error}
        />
      )}
    </>
  )
}

CmsContent.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CmsContent.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
