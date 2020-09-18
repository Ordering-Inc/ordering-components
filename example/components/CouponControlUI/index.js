import React from 'react'

export const CouponControlUI = (props) => {
  const {
    couponDefault,
    couponInput,
    handleButtonApplyClick,
    handleRemoveCouponClick,
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

      {couponDefault && (
        <>
          <p>You have the coupon <strong style={{ color: 'red', fontSize: '24px' }}>{couponDefault}</strong> assigned</p>
          <button onClick={() => handleRemoveCouponClick()}>
            Remove {couponDefault} coupon
          </button>
        </>
      )}

      {!couponDefault && (
        <>
          <input
            type='text'
            name='coupon'
            style={{ width: '50%' }}
            placeholder='Discount coupon'
            onChange={(e) => onChangeInputCoupon(e.target.value)}
          />
          <button type='button' disabled={!couponInput} onClick={handleButtonApplyClick}>
            Apply
          </button>
        </>
      )}

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
