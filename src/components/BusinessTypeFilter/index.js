import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const BusinessTypeFilter = (props) => {
  const {
    businessTypes,
    onChangeBusinessType,
    defaultBusinessType,
    UIComponent
  } = props

  /**
   * This property is used to set in state the current value
   */
  const [typeSelected, setTypeSelected] = useState(defaultBusinessType)

  /**
   * Handle when select value changes
   */
  const handleChangeBusinessType = (businessType) => {
    setTypeSelected(businessType)
    onChangeBusinessType(businessType)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessTypes={businessTypes}
          currentTypeSelected={typeSelected}
          handleChangeBusinessType={handleChangeBusinessType}
        />
      )}
    </>
  )
}

BusinessTypeFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  businessTypes: PropTypes.arrayOf(PropTypes.object),
  /**
   * Default business type to show
   */
  defaultBusinessType: PropTypes.string,
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
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessTypeFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
