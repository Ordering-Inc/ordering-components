import React from 'react'
import { useForm } from 'react-hook-form'

const errorStyle = {
  margin: '0px',
  color: 'red'
}

export const PaymentOptionCashUI = (props) => {
  const {
    total,
    handlerSubmit,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { handleSubmit, register, errors, formState } = useForm()

  const handleForm = ({ cash }) => {
    handlerSubmit({
      payType: 'cash',
      value: cash
    })
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

      <form onSubmit={handleSubmit(handleForm)}>
        <label>Don’t have exact amount? Let us know with how much will you pay </label>
        <input
          name='cash'
          placeholder='$0.00'
          style={{ borderColor: errors.cash && 'red', borderRadius: '20px', padding: '8px' }}
          ref={
            register({
              required: true,
              validate: value => value >= total
            })
          }
        />
        {errors.cash && errors.cash.type === 'required' && <p style={errorStyle}>This field is required</p>}
        {errors.cash && errors.cash.type === 'validate' && <p style={errorStyle}>This value must be greater than order total: {total}</p>}
        <button type='submit' disabled={formState.isSubmitting}>
          Send
        </button>
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
