import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ProductShare = (props) => {
  const { UIComponent } = props
  const [show, setShow] = useState(false)

  const shareButton = () => {
    // ID for the addThis
    const ID = 'ra-5f510bec3e657e9d'
    // url for the widget of addThis
    const js = '//s7.addthis.com/js/300/addthis_widget.js#pubid=' + ID

    const script = document.createElement('script')
    script.async = true
    script.src = js
    document.body.appendChild(script)

    // toggle the show of the share buttons
    setShow(!show)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent {...props} shareButton={shareButton} show={show} />
      )}
    </>
  )
}

ProductShare.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
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
