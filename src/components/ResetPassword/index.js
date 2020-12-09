import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
      const result = await response.json()
      setFormState({
        result: result,
        loading: false
      })
      if (!result.error) {
        if (handleSuccessResetPassword) {
          handleSuccessResetPassword(result.result)
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

ResetPassword.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   *  Code is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
   */
  code: PropTypes.string.isRequired,
  /**
   *  Random is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
   */
  random: PropTypes.string.isRequired,
  /**
   * Components types before products list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ResetPassword.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
