import React from 'react'
import PropTypes from 'prop-types'

export const BusinessOption = (props) => {
  const {
    optionToShow,
    UIComponent
  } = props

  const handleClickOption = (option) => {
    const val = option === optionToShow ? null : option
    props.handleChangeOption(val)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleClickOption={handleClickOption}
        />
      )}
    </>
  )
}

BusinessOption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Name to show in buttom
   */
  label: PropTypes.string,
  /**
   * Array of business schedule, photos or videos, depends of label type
   */
  contentData: PropTypes.arrayOf(PropTypes.object),
  /**
   * This must be containt all location info
   */
  locationData: PropTypes.object,
  /**
   * Components types before business opening time
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business opening time
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business opening time
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business opening time
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessOption.defaultProps = {
  contentData: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
