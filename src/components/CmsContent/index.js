import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Component to manage login behavior without UI component
 */
export const CmsContent = (props) => {
  const {
    // ordering,
    UIComponent,
    pageSlug
  } = props

  /**
   * Array to save current order
   */
  const [body, setBody] = useState('')

  /**
   * Method used to get the page by slug
   */
  const getPage = async (slug) => {
    const response = await fetch(`https://apiv4.ordering.co/v400/en/demo/pages/${slug}`)
    const data = await response.json()
    setBody(data.result.body)
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
