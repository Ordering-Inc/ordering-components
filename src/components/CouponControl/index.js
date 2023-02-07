import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useCustomer } from '../../contexts/CustomerContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage coupon form behavior without UI component
 */
export const CouponControl = (props) => {
  const {
    businessId,
    businessIds,
    price,
    UIComponent
  } = props

  const [{ configs }] = useConfig()
  const [orderState, { applyCoupon, applyOffer }] = useOrder()
  const [confirm, setConfirm] = useState({ open: false, content: null, error: false })
  const [, t] = useLanguage()
  const [{ user }] = useCustomer()

  const couponDefault = (
    orderState?.carts &&
    businessId &&
    orderState?.carts?.[`businessId:${businessId}`]?.coupon
  ) || null

  const [couponInput, setCouponInput] = useState(null)

  /**
   * method to manage coupon apply button
   */
  const handleButtonApplyClick = () => {
    setCouponInput('')
    if (!configs?.advanced_offers_module?.value) {
      if (user?.id) { // Callcenter
        if (businessIds) {
          businessIds.map(businessId => (
            applyCoupon({
              business_id: businessId,
              coupon: couponInput
            }, {
              businessId,
              userId: user?.id
            })
          ))
          return
        }
        applyCoupon({
          business_id: businessId,
          coupon: couponInput
        }, {
          businessId,
          userId: user?.id
        })
      } else {
        if (businessIds) {
          businessIds.map(businessId => (
            applyCoupon({ business_id: businessId, coupon: couponInput })
          ))
          return
        }
        applyCoupon({
          business_id: businessId,
          coupon: couponInput
        })
      }
    } else {
      if (businessIds) {
        businessIds.forEach(businessId => {
          const dataOffer = {
            business_id: businessId,
            coupon: couponInput,
            force: true
          }
          if (user?.id) dataOffer.userId = user?.id // Callcenter
          applyOffer(dataOffer)
        })
        return
      }
      const dataOffer = {
        business_id: businessId,
        coupon: couponInput,
        force: true
      }
      if (user?.id) dataOffer.userId = user?.id // Callcenter
      applyOffer(dataOffer)
    }
  }

  /**
   * method to manage remove coupon assigned
   */
  const handleRemoveCouponClick = () => {
    if (businessIds) {
      businessIds.map(businessId => (
        applyCoupon({ business_id: businessId, coupon: null })
      ))
      return
    }
    applyCoupon({
      business_id: businessId,
      coupon: null
    })
  }

  useEffect(() => {
    if (price < 0) {
      handleRemoveCouponClick()
      setConfirm({ ...confirm, open: true, content: t('COUPON_TOTAL_ERROR', 'The total value of the cart with discount must be positive'), error: true })
    }
  }, [price])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          couponDefault={couponDefault}
          couponInput={couponInput}
          onChangeInputCoupon={(val => setCouponInput(val))}
          handleButtonApplyClick={handleButtonApplyClick}
          handleRemoveCouponClick={handleRemoveCouponClick}
          confirm={confirm}
          setConfirm={setConfirm}
        />
      )}
    </>
  )
}

CouponControl.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * isDisabled, flag to enable/disable coupon input
   */
  isDisabled: PropTypes.bool,
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
