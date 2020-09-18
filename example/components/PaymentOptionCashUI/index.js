import React from 'react'
import { useForm } from 'react-hook-form'

const errorStyle = {
  margin: '0px',
  color: 'red'
}

export const PaymentOptionCashUI = (props) => {
  const {
    total,
    requireCash,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    onChangeData
  } = props

  const { handleSubmit, register, errors } = useForm()

  const handleChangeCash = (e) => {
    let cash = parseFloat(e.target.value)
    cash = isNaN(cash) ? null : cash
    onChangeData && onChangeData({ cash })
    handleSubmit(() => {})(e)
  }

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

      <form onSubmit={handleSubmit(() => {})}>
        <label>Don’t have exact amount? Let us know with how much will you pay </label>
        <input
          name='cash'
          type='number'
          placeholder='$0.00'
          style={{ borderColor: errors.cash && 'red', borderRadius: '20px', padding: '8px' }}
          onChange={handleChangeCash}
          ref={
            register({
              required: requireCash,
              validate: value => {
                return value === '' || value >= total
              }
            })
          }
        />
        {errors.cash && errors.cash.type === 'required' && <p style={errorStyle}>This field is required</p>}
        {errors.cash && errors.cash.type === 'validate' && <p style={errorStyle}>This value must be greater than order total: {total}</p>}
      </form>

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
