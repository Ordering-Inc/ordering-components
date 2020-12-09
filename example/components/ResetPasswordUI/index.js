import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

export const ResetPasswordUI = (props) => {
  const { handleChangeInput, handleResetPassword, formState, beforeComponents, beforeElements, afterComponents, afterElements } = props

  const { handleSubmit, register, errors, watch } = useForm()

  const onSubmit = () => {
    handleResetPassword()
  }

  const password = useRef({})

  password.current = watch('password', '')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Reset Password</h2>
      {
        beforeElements.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>
        ))
      }
      {
        beforeComponents.map((BeforeComponent, i) => <BeforeComponent key={i} {...props} />)
      }
      <div>
        <input
          name='password'
          placeholder='New password'
          type='password'
          onChange={handleChangeInput}
          ref={register({ required: 'The password is required', minLength: { value: 8, message: 'The Password must be at least 8 characters.' } })}
        />
        <input
          name='confirm-password'
          placeholder='Confirm password'
          type='password'
          onChange={handleChangeInput}
          ref={register({
            required: 'The password confirm is required',
            validate: value =>
              value === password.current || 'The passwords do not match'
          })}
        />
        <button type='submit'>
          Recover Password
        </button>
        {Object.values(errors).length > 0 && (
          <ul>
            {Object.values(errors).map((error, i) => (
              <li key={error + i} style={{ color: 'red' }}>
                {error.message}
              </li>
            ))}
          </ul>
        )}
        <ul>
          {formState.result?.result?.length > 0 && formState.result?.result?.map((res, i) => (
            <li key={i} style={{ color: 'green' }}>
              {res}
            </li>
          ))}
        </ul>
      </div>
      {
        afterComponents.map((AfterComponent, i) => <AfterComponent key={i} {...props} />)
      }
      {
        afterElements.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>
        ))
      }
    </form>
  )
}
