import React from 'react'
import { useForm } from 'react-hook-form'

const inputStyle = {
  padding: '8px 10px',
  marginTop: '8px'
}

export const StripeRedirectFormUI = (props) => {
  const {
    user,
    paymentMethods,
    handleSubmitPaymentMethod,
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

      <form className='stripe' onSubmit={handleSubmit(handleSubmitPaymentMethod)}>
        <label>Select a payment method</label>
        <select
          style={inputStyle}
          name='type'
          ref={
            register({
              required: true
            })
          }
        >
          <option value=''>Select a payment method</option>
          {paymentMethods?.length > 0 && paymentMethods.map((paymethod, i) => (
            <option key={i} value={paymethod.value}>{paymethod.name}</option>
          ))}
        </select>
        {errors.type && errors.type.type === 'required' && <p style={{ color: 'red', margin: '0px' }}>This field is required</p>}
        <br />

        <label>Account holder</label>
        <input
          style={inputStyle}
          name='name'
          defaultValue={user.name}
          placeholder='Type an Account holder'
          ref={
            register({
              required: true
            })
          }
        />
        {errors.name && errors.name.type === 'required' && <p style={{ color: 'red', margin: '0px' }}>This field is required</p>}
        <br />

        <label>Email</label>
        <input
          style={inputStyle}
          name='email'
          type='email'
          defaultValue={user.email}
          placeholder='Type an email'
          ref={
            register({
              required: true
            })
          }
        />
        {errors.email && errors.email.type === 'required' && <p style={{ color: 'red', margin: '0px' }}>This field is required</p>}
        <br />
        <button type='submit' disabled={formState.isSubmitting}>
          {formState.isSubmitting ? 'Loading...' : 'OK'}
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
