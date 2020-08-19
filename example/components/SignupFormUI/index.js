import React from 'react'
import { useForm } from 'react-hook-form'

export const SignupFormUI = (props) => {
  const {
    formState,
    validationFields,
    useChekoutFileds,
    showField,
    isRequiredField,
    handleButtonSignupClick,
    handleContinueAsGuest,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    linkToLogin,
    elementLinkToLogin,
    hanldeChangeInput
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values) => {
    handleButtonSignupClick()
  }

  const inputs = [
    { name: 'name', placeholder: 'Firstname', requiredMessage: 'Name is required', type: 'text' },
    { name: 'middle_name', placeholder: 'Middlename', requiredMessage: 'Middle name is required', type: 'text' },
    { name: 'lastname', placeholder: 'Lastname', requiredMessage: 'Lastname is required', type: 'text' },
    { name: 'second_lastname', placeholder: 'Second lastname', requiredMessage: 'Second lastname is required', type: 'text' },
    { name: 'email', placeholder: 'Email', requiredMessage: 'Email is required', type: 'text' },
    { name: 'password', placeholder: 'Password', requiredMessage: 'Password is required', type: 'password' }
  ]

  return (
    <>
      <h1>Signup</h1>
      {
        useChekoutFileds && validationFields.loading && <p>Loading form ...</p>
      }
      {
        (!useChekoutFileds || !validationFields.loading) && (
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
            {
              <form onSubmit={handleSubmit(onSubmit)}>
                {
                  inputs.map((_input) => (
                    showField(_input.name) && (
                      <div key={_input.name}>
                        <input
                          name={_input.name}
                          type={_input.type}
                          placeholder={_input.placeholder}
                          style={{ borderColor: errors[_input.name] ? '#c10000' : null }}
                          onChange={hanldeChangeInput}
                          ref={register({
                            required: isRequiredField(_input.name) ? _input.requiredMessage : null
                          })}
                        />
                        {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
                      </div>
                    )
                  ))
                }
                <div>
                  {formState.loading && <p>Loading...</p>}
                  {!formState.loading && formState.result && formState.result.error && <p style={{ color: '#c10000' }}>{formState.result.result}</p>}
                  {!formState.loading && <button type='submit'>Signup</button>}
                </div>
              </form>
            }
            {
              handleContinueAsGuest && (
                <div>
                  <button onClick={() => handleContinueAsGuest()}>Continue as guest</button>
                </div>
              )
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
              linkToLogin && <a href={linkToLogin}>Go to login</a>
            }
            {
              elementLinkToLogin && (
                <div>
                  {
                    elementLinkToLogin
                  }
                </div>
              )
            }
          </>
        )
      }
    </>
  )
}
