import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ProductShare = (props) => {
  const { UIComponent, url, addtoanySrc } = props
  const [show, setShow] = useState(false)

  const addToAnyScript = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = addtoanySrc
    script.async = true
    script.id = 'addthis_widget'
    document.body.appendChild(script)
  }

  const shareButton = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (window.document.getElementById('addthis_widget')) {
      return
    }
    addToAnyScript()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          shareButton={shareButton}
          show={show}
          url={url}
        />
      )}
    </>
  )
}

ProductShare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   *  function that create the script for share
   */
  shareButton: PropTypes.func,
  /**
   * Example url to display the name, description and image properly in any social red
   */
  url: PropTypes.string.isRequired,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element)
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
}

ProductShare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
