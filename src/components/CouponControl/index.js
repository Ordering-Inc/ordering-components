import React, { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Component to manage coupon form behavior without UI component
 */
export const CouponControl = (props) => {
  const {
    onChangeCouponValue,
    businessId,
    UIComponent
  } = props

  const [coupon, setcoupon] = useState({ coupon: null, error: null, loading: false })
  const [couponInput, setCouponInput] = useState(null)

  /**
   * event to manage coupon apply button
   */
  const handleButtonApplyClick = async () => {
    setcoupon({
      ...coupon,
      loading: true,
      error: false
    })
    try {
      /**
       * Change this fetch with a SDK method
       */
      const response = await fetch(`https://apiv4.ordering.co/v400/en/demo/business/41/offers/${couponInput}?business_id=${businessId}`)
      const data = await response.json()
      setcoupon({
        loading: false,
        error: !data.result,
        coupon: data.result
      })
      if (data?.result?.name) {
        onChangeCouponValue(data.result)
      }
    } catch (error) {
      setcoupon({
        ...coupon,
        loading: false,
        error
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          coupon={coupon}
          couponInput={couponInput}
          onChangeInputCoupon={(val => setCouponInput(val))}
          handleButtonApplyClick={handleButtonApplyClick}
        />
      )}
    </>
  )
}

CouponControl.propTypes = {
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
   * isDisabled, flag to enable/disable coupon input
   */
  isDisabled: PropTypes.bool,
  /**
   * Handler coupon response
   */
  onChangeCouponValue: PropTypes.func,
  /**
   * Components types before coupon control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after coupon control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before coupon control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after coupon control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CouponControl.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
