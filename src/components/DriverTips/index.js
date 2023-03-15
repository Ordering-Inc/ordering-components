import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage driver tips behavior without UI component
 */
export const DriverTips = (props) => {
  const {
    UIComponent,
    businessId,
    businessIds,
    useOrderContext
  } = props

  if (useOrderContext && !businessId && !businessIds) {
    throw new Error('`businessId` is required when `useOrderContext` is true.')
  }

  /**
   * Order context
   */
  const [orderState, { changeDriverTip }] = useOrder()
  /**
   * Config context
   */
  const [{ configs }] = useConfig()
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
  const handlerChangeOption = (driverTip, isFixedPrice = props.isFixedPrice) => {
    driverTip = typeof driverTip === 'string' ? parseFloat(driverTip) : driverTip
    if (useOrderContext) {
      if (businessIds) {
        const _driveTip = isFixedPrice ? driverTip / businessIds?.length : driverTip
        Promise.all(businessIds.map(id => changeDriverTip(id, _driveTip, isFixedPrice)))
      } else {
        changeDriverTip(businessId, driverTip, isFixedPrice)
      }
    } else {
      setOptionSelected(driverTip)
    }
    props.handlerChangeDriverOption && props.handlerChangeDriverOption(driverTip)
  }

  useEffect(() => {
    const orderDriverTipRate = orderState.carts?.[`businessId:${businessId ?? businessIds?.[0]}`]?.driver_tip_rate || 0
    const orderDriverTip = orderState.carts?.[`businessId:${businessId ?? businessIds?.[0]}`]?.driver_tip || 0
    const isFixedPrice = parseInt(configs?.driver_tip_type?.value, 10) === 1 || !!parseInt(configs?.driver_tip_use_custom?.value, 10) // 1 - fixed, 2 - percentage

    setOptionSelected(isFixedPrice ? orderDriverTip : orderDriverTipRate)
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
