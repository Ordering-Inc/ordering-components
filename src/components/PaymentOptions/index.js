import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const PaymentOptions = (props) => {
  const {
    optionDefault,
    UIComponent
  } = props

  const [optionSelected, setOptionSelected] = useState(optionDefault)

  const onChangeOption = (val) => {
    setOptionSelected(val)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          optionSelected={optionSelected}
          handleChangeOption={onChangeOption}
        />
      )}
    </>
  )
}

PaymentOptions.propTypes = {
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
   * Options, this must be containt an array of payment options
   */
  options: PropTypes.arrayOf(PropTypes.string),
  /**
   * optionDefault, this must be containt one default payment option
   */
  optionDefault: PropTypes.string,
  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Payment Options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
