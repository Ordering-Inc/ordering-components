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

      <h1>Order Total: {total}</h1>

      <form onSubmit={handleSubmit(handlerSubmit)}>
        <input
          name='cash'
          placeholder='Don’t have exact amount? Let us know with how much will you pay'
          style={{ borderColor: errors.cash && 'red', width: '60%' }}
          ref={
            register({
              required: true,
              validate: value => value >= total
            })
          }
        />
        {errors.cash && errors.cash.type === 'required' && <p className='error' style={errorStyle}>This field is required</p>}
        {errors.cash && errors.cash.type === 'validate' && <p className='error' style={errorStyle}>This value must be greater than order total</p>}
        <br />
        <br />
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
