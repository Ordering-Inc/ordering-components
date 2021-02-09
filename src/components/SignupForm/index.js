import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'

/**
 * Component to manage signup behavior without UI component
 */
export const SignupForm = (props) => {
  const {
    UIComponent,
    useChekoutFileds,
    handleButtonSignupClick,
    handleSuccessSignup,
    externalPhoneNumber
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [signupData, setSignupData] = useState({ email: '', cellphone: externalPhoneNumber || '', password: '' })
  const requestsState = {}
  const [validationFields] = useValidationFields()

  /**
   * Default fuction for signup workflow
   */
  const handleSignupClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const source = {}
      requestsState.signup = source
      const response = await ordering.users().save(signupData, { cancelToken: source })
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
      if (err.constructor.name !== 'Cancel') {
        setFormState({
          result: {
            error: true,
            result: err.message
          },
          loading: false
        })
      }
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }

    setSignupData({
      ...signupData,
      ...currentChanges
    })
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useChekoutFileds ||
      (!validationFields.loading && !validationFields.fields?.checkout[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.checkout[fieldName] &&
        validationFields.fields?.checkout[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return fieldName === 'password' || (useChekoutFileds &&
      !validationFields.loading &&
      validationFields.fields?.checkout[fieldName] &&
      validationFields.fields?.checkout[fieldName].enabled &&
      validationFields.fields?.checkout[fieldName].required)
  }

  useEffect(() => {
    return () => {
      if (requestsState.signup) {
        requestsState.signup.cancel()
      }
    }
  }, [])

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
          handleChangeInput={handleChangeInput}
          handleButtonSignupClick={handleButtonSignupClick || handleSignupClick}
        />
      )}
    </>
  )
}

SignupForm.propTypes = {
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
