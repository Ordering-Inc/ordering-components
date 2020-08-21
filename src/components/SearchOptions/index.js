import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'

export const SearchOptions = (props) => {
  const {
    ordering,
    UIComponent
  } = props

  const [{ order }, dispatchOrder] = useOrder()

  const [optionSelected, setOptionSelected] = useState(null)
  const [curAddress, setCurAddress] = useState(null)

  /**
   * Method to handle buttom clicks
   * @param {String} val
   */
  const onClickOption = (val) => {
    const value = val === optionSelected ? null : val
    setOptionSelected(value)
  }

  /**
   * Object that must be containt moment properties
   */
  const momentProps = {
    minDate: new Date('2020-08-21 04:00 PM'),
    maxDate: new Date('2020-08-27 04:00 PM'),
    currentDate: new Date()
  }

  /**
   * Object that must be containt address list properties
   */
  const addressListProps = {
    ordering: ordering,
    handleClickAddress: (address) => {
      console.log('Address was clicked', address)
      setCurAddress(address)
    },
    changeOrderAddressWithDefault: true
  }

  /**
   * Object that must be containt address form properties
   */
  const addressFormProps = {
    ordering: ordering,
    useValidationFileds: true,
    address: curAddress
  }

  useEffect(() => {
    dispatchOrder({ type: ORDER_ACTIONS.CHANGE_BUSINESS, business: { id: 41, slug: 'mcbonalds' } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 111, quantity: 1 } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 1296, quantity: 1 } })
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          optionSelected={optionSelected}
          momentProps={momentProps}
          order={order}
          addressFormProps={addressFormProps}
          addressListProps={addressListProps}
          orderTypes={[1, 2, 3, 4, 5]}
          handleClickOption={onClickOption}
        />
      )}
    </>
  )
}

SearchOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before search options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after search options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before search options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after search options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SearchOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
