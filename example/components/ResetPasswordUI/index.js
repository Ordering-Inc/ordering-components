import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export const ResetPasswordUI = (props) => {
  const {
    code,
    random,
    resetPasswordData,
    handleChangeInput,
    handleResetPassword,
    formState,
    beforeComponents,
    beforeElements,
    afterComponents,
    afterElements
  } = props

  const history = useHistory()

  const { handleSubmit, register, errors, watch } = useForm()

  const onSubmit = () => {
    if (code && random) {
      handleResetPassword()
    } else {
      history.push(`/password/reset?code=${resetPasswordData.code}&random=${resetPasswordData.random}`)
    }
  }

  const password = useRef({})

  password.current = watch('password', '')

  return (
    <>
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
      {code && random ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Reset Password</h2>
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
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {!random && (
            <>
              <h2>Please insert the random string</h2>
              <input name='random' placeholder='Random' onChange={handleChangeInput} ref={register({ required: true })} />
            </>
          )}
          {!code && (
            <>
              <h2>Please insert the code</h2>
              <input name='code' placeholder='Code' onChange={handleChangeInput} ref={register({ required: true })} />
            </>
          )}
          <div style={{ margin: '10px 0' }}>
            <button type='submit'>Submit</button>
          </div>
        </form>
      )}
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
    </>
  )
}
