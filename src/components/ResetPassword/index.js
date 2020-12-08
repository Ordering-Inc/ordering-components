import React, { useState } from 'react'

export const ResetPassword = (props) => {
  const {
    UIComponent,
    code,
    random,
    handleSuccessResetPassword
  } = props

  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [resetPasswordData, setResetPasswordData] = useState({ code: code, random: random, password: '' })

  // const requestsState = {}

  const handleResetPassword = async () => {
    try {
      setFormState({ ...formState, loading: true })
      // const source = {}
      // requestsState.reset = source
      const response = await fetch('https://apiv4.ordering.co/v400/en/demo/users/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: resetPasswordData.code,
          random: resetPasswordData.random,
          password: resetPasswordData.password
        })

      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.error(err)
        })
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (handleSuccessResetPassword) {
          handleSuccessResetPassword(response.content.result)
        }
      }
    } catch (error) {
      if (error.constructor.name !== 'Cancel') {
        setFormState({
          result: {
            error: true,
            result: error.message
          },
          loading: false
        })
      }
    }
  }

  const handleChangeInput = e => {
    setResetPasswordData({ ...resetPasswordData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleResetPassword={handleResetPassword}
          handleChangeInput={handleChangeInput}
          formState={formState}
        />
      )}
    </>
  )
}
