import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Component to manage login behavior without UI component
 */
export const CmsContent = (props) => {
  const {
    ordering,
    UIComponent,
    pageSlug
  } = props

  /**
   * Array to save the body of the page
   */
  const [body, setBody] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  /**
   * Method used to get the page by slug
   */
  const getPage = async (slug) => {
    setLoading(true)
    try {
      const { content: { error, result } } = await ordering.pages(slug).get()
      setLoading(false)
      if (!error) {
        setBody(result.body)
        setError(null)
      } else {
        setError(result)
      }
    } catch (error) {
      setLoading(false)
      setError([error.message])
    }
  }

  useEffect(() => {
    getPage(pageSlug)
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
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  // ordering: PropTypes.object.isRequired,
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
