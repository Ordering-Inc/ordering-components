import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { pickBy } from 'lodash'

/**
 * Component to manage signup behavior without UI component
 */
export const SignupForm = (props) => {
  const {
    ordering,
    UIComponent,
    useChekoutFileds,
    handleButtonSignupClick,
    handleSuccessSignup
  } = props

  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [signupData, setSignupData] = useState({ email: '', cellphone: '', password: '' })
  const [validationFields, setValidationFields] = useState({ loading: useChekoutFileds })

  if (useChekoutFileds) {
    useEffect(() => {
      ordering.validationFields.get().then((response) => {
        const fields = {}
        response.content.result.forEach((field) => {
          if (field.validate === 'checkout') {
            fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
          }
        })
        setValidationFields({ loading: false, fields })
      }).catch(() => {
        setValidationFields({ loading: false })
      })
    }, [])
  }

  /**
   * Default fuction for signup workflow
   */
  const handleSignupClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering.users.add(signupData)
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (handleSuccessSignup) {
          handleSuccessSignup(response.content.result)
        }
      }
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const hanldeChangeInput = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useChekoutFileds ||
              (!validationFields.loading && !validationFields.fields[fieldName]) ||
              (!validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return fieldName === 'password' || (useChekoutFileds &&
            !validationFields.loading &&
            validationFields.fields[fieldName] &&
            validationFields.fields[fieldName].enabled &&
            validationFields.fields[fieldName].required)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          validationFields={validationFields}
          signupData={signupData}
          showField={showField}
          isRequiredField={isRequiredField}
          hanldeChangeInput={hanldeChangeInput}
          handleButtonSignupClick={handleButtonSignupClick || handleSignupClick}
        />
      )}
    </>
  )
}

SignupForm.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default signup behavior
   */
  handleButtonSignupClick: PropTypes.func,
  /**
   * Function to get signup success event
   * @param {Object} user User with session data
   */
  handleSuccessSignup: PropTypes.func,
  /**
   * Function to continue as guest behavior
   */
  handleContinueAsGuest: PropTypes.func,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useChekoutFileds: PropTypes.bool,
  /**
   * Components types before signup form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after signup form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: PropTypes.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: PropTypes.element
}

SignupForm.defaultProps = {
  useChekoutFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
