import React from 'react'
import { useForm } from 'react-hook-form'

export const ForgotPasswordFormUI = (props) => {
  const {
    formState,
    formData,
    defaultEmail,
    handleButtonForgotPasswordClick,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    linkToSignup,
    linkToLogin,
    elementLinkToSignup,
    elementLinkToLogin,
    hanldeChangeInput
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    handleButtonForgotPasswordClick(formData)
  }

  return (
    <>
      <h1>Forgot Password</h1>
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
      {
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name='email'
              type='text'
              placeholder='Email'
              style={{ borderColor: errors.email ? '#c10000' : null }}
              onChange={hanldeChangeInput}
              disabled={defaultEmail}
              value={defaultEmail ? formData.email : undefined}
              ref={register({
                required: 'Email is required'
              })}
            />
            {errors.email && <i style={{ color: '#c10000' }}>{errors.email.message}</i>}
          </div>
          <div>
            {formState.loading && <p>Loading...</p>}
            {!formState.loading && formState.result && formState.result.error && <p style={{ color: '#c10000' }}>{formState.result.result}</p>}
            {!formState.loading && <button type='submit'>Forgot password</button>}
          </div>
        </form>
      }
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
      {
        linkToSignup && <a href={linkToSignup}>Go to signup</a>
      }
      {
        linkToLogin && <a href={linkToLogin}>Go to forgot password</a>
      }
      {
        (elementLinkToSignup || elementLinkToLogin) && (
          <div>
            {
              elementLinkToSignup
            }
            {
              elementLinkToLogin
            }
          </div>
        )
      }
    </>
  )
}
