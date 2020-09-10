import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'

export const DriverTips = (props) => {
  const {
    UIComponent,
    businessId,
    useOrderContext
  } = props

  if (useOrderContext && !businessId) {
    throw new Error('`businessId` is required when `useOrderContext` is true.')
  }

  /**
   * Order context
   */
  const [orderState, { changeDriverTip }] = useOrder()

  /**
   * Save percentage selected by user
   */
  const [optionSelected, setOptionSelected] = useState(0)
  /**
   * Amount of driver tip, calculate with order.total and optionSelected
   */
  const [driverTipAmount, setDriverTipAmount] = useState(0)

  /**
   * handler when user change driver tip option
   * @param {number} val
   */
  const handlerChangeOption = (val) => {
    if (useOrderContext) {
      changeDriverTip(businessId, parseInt(val))
    }
    props.handlerChangeDriverOption(parseInt(val))
    setOptionSelected(parseInt(val))
  }

  useEffect(() => {
    const orderDriverTipRate = orderState.carts[`businessId:${businessId}`]?.driver_tip_rate || 0
    const orderDriverTip = orderState.carts[`businessId:${businessId}`]?.driver_tip || 0

    setOptionSelected(orderDriverTipRate)
    setDriverTipAmount(orderDriverTip)
  }, [orderState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driverTipAmount={driverTipAmount}
          optionSelected={optionSelected}
          handlerChangeOption={handlerChangeOption}
        />
      )}
    </>
  )
}

DriverTips.propTypes = {
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
   * Cart business id
   */
  businessId: PropTypes.number,
  /**
   * Switch to use order context
   */
  useOrderContext: PropTypes.bool,
  /**
   * driver tips options
   */
  driverTipsOptions: PropTypes.arrayOf(PropTypes.number),
  /**
   * method to get option selected
   */
  handlerChangeDriverOption: PropTypes.func,
  /**
   * Components types before driver tips
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after driver tips
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before driver tips
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after driver tips
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriverTips.defaultProps = {
  useOrderContext: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
