import React from 'react'
import { useForm } from 'react-hook-form'

export const ResetPasswordUI = (props) => {
  const { handleChangeInput, handleResetPassword } = props

  const { handleSubmit, register, errors } = useForm()

  const onSubmit = () => {
    handleResetPassword()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Reset Password</h2>
      <div>
        <input name='password' placeholder='New password' onChange={handleChangeInput} ref={register({ required: 'The password is required', minLength: { value: 8, message: 'The Password must be at least 8 characters.' } })} />
        <button type='submit'>
          Recover Password
        </button>
        {Object.values(errors).length > 0 && (
          <ul>
            {Object.values(errors).map(error => (
              <li key={error} style={{ color: 'red' }}>
                {error.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  )
}
