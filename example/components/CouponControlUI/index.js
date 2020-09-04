import React from 'react'
import './style.css'

export const CouponControlUI = (props) => {
  const {
    isDisabled,
    couponInput,
    coupon,
    handleButtonApplyClick,
    onChangeInputCoupon,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}
      <input
        type='text'
        name='coupon'
        disabled={!isDisabled}
        className={`
          ${coupon && coupon.error ? 'error' : ''}
          ${coupon && !coupon.loading && !coupon.error && coupon.coupon ? 'success' : ''}
        `}
        style={{ width: '50%' }}
        placeholder='Discount coupon'
        onChange={(e) => onChangeInputCoupon(e.target.value)}
      />
      <button type='button' disabled={!couponInput} onClick={handleButtonApplyClick}>{coupon.loading ? 'Loading...' : 'Apply'}</button>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
