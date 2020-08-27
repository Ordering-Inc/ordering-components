import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const PaymentOptions = (props) => {
  const {
    ordering,
    options,
    businessId,
    optionDefault,
    UIComponent
  } = props

  const [optionsList, setOptionsList] = useState({ options: [], loading: true, error: null })
  const [optionSelected, setOptionSelected] = useState(optionDefault)

  const getOptions = async () => {
    try {
      const { content: { result } } = await ordering.businesses(businessId).get()
      setOptionsList({
        loading: false,
        options: result.paymethods
      })
    } catch (error) {
      setOptionsList({
        loading: false,
        error
      })
    }
  }

  const onChangeOption = (val) => {
    setOptionSelected(val)
    props.onChangePayment(val)
  }

  useEffect(() => {
    if (options) {
      setOptionsList({
        loading: false,
        options
      })
    } else {
      getOptions()
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          optionsList={optionsList}
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
  ordering: PropTypes.object,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Options, this must be containt an array of payment options
   */
  options: PropTypes.arrayOf(PropTypes.string),
  /**
   * businessId, this must be contains business id to fetch business from API
   */
  businessId: PropTypes.number,
  /**
   * Get option selected
   */
  onChangePayment: PropTypes.func,
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
