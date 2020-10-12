import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, SESSION_ACTIONS } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage user profile behavior without UI component
 */
export const UserProfileForm = (props) => {
  const {
    UIComponent,
    useSessionUser,
    refreshSessionUser,
    useDefualtSessionManager,
    userId,
    user,
    useValidationFileds,
    validationFieldsType,
    handleButtonUpdateClick,
    handleSuccessUpdate
  } = props

  const [ordering] = useApi()
  const [session, dispatchSession] = useSession()
  const [userState, setUserState] = useState({ loading: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [validationFields, setValidationFields] = useState({ loading: useValidationFileds })
  const requestsState = {}

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  useEffect(() => {
    if (userId || (useSessionUser && refreshSessionUser)) {
      setUserState({ ...userState, loading: true })
      const source = {}
      requestsState.user = source
      ordering.setAccessToken(accessToken).users((useSessionUser && refreshSessionUser) ? session.user.id : userId).get({ cancelToken: source }).then((response) => {
        setUserState({ loading: false, result: response.content })
        if (response.content.result) {
          dispatchSession({
            type: SESSION_ACTIONS.CHANGE_USER,
            user: {
              ...session.user,
              ...response.content.result
            }
          })
        }
      }).catch((err) => {
        if (err.constructor.name !== 'Cancel') {
          setUserState({
            loading: false,
            result: {
              error: true,
              result: err.message
            }
          })
        }
      })
    } else {
      setUserState({
        loading: false,
        result: {
          error: false,
          result: (useSessionUser && !refreshSessionUser) ? session.user : user
        }
      })
    }

    if (useValidationFileds) {
      const source = {}
      requestsState.validation = source
      ordering.validationFields().toType(validationFieldsType).get({ cancelToken: source }).then((response) => {
        const fields = {}
        response.content.result.forEach((field) => {
          fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
        })
        setValidationFields({ loading: false, fields })
      }).catch((err) => {
        console.log(err)
        if (err.constructor.name !== 'Cancel') {
          setValidationFields({ loading: false })
        }
      })
    }

    return () => {
      if (requestsState.user) {
        requestsState.user.cancel()
      }
      if (requestsState.validation) {
        requestsState.validation.cancel()
      }
    }
  }, [])

  /**
   * Default fuction for user profile workflow
   */
  const handleUpdateClick = async () => {
    if (handleButtonUpdateClick) {
      return handleButtonUpdateClick(userState.result.result, formState.changes)
    }
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering.users(userState.result.result.id).save(formState.changes, {
        accessToken: accessToken
      })
      setFormState({
        ...formState,
        changes: response.content.error ? formState.changes : {},
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        setUserState({
          ...userState,
          result: {
            ...userState.result,
            ...response.content
          }
        })
        dispatchSession({
          type: SESSION_ACTIONS.CHANGE_USER,
          user: {
            ...session.user,
            ...response.content.result
          }
        })
        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }
      }
    } catch (err) {
      setFormState({
        ...formState,
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
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }

  /**
   * Update user photo data
   * @param {File} file Image to change user photo
   */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          photo: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useValidationFileds ||
              (!validationFields.loading && !validationFields.fields[fieldName]) ||
              (!validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return useValidationFileds &&
            !validationFields.loading &&
            validationFields.fields[fieldName] &&
            validationFields.fields[fieldName].enabled &&
            validationFields.fields[fieldName].required
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          userState={userState}
          validationFields={validationFields}
          showField={showField}
          isRequiredField={isRequiredField}
          hanldeChangeInput={hanldeChangeInput}
          handlechangeImage={handlechangeImage}
          handleButtonUpdateClick={handleUpdateClick}
        />
      )}
    </>
  )
}

UserProfileForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Use session user to profile
   */
  useSessionUser: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`boolean\`.`)
    }
    if (props.user === undefined && props.userId === undefined && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`user\` and \`userId\` is not present.`)
    }
    if (props[propName] && (props.user !== undefined || props.userId !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`userId\` and \`user\`.`)
    }
  },
  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: PropTypes.bool,
  /**
   * User ID
   * If you provide the user id the component get user form Ordering API
   */
  userId: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'number') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`number\`.`)
    }
    if (props.user === undefined && !props.useSessionUser && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`user\` and \`useSessionUser\` is not present.`)
    }
    if (props[propName] && (props.useSessionUser || props.user !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`useSessionUser\` and \`user\`.`)
    }
  },
  /**
   * User object
   * If you provide user object the component not get user form Ordering API
   */
  user: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'object') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`object\`.`)
    }
    if (props.userId === undefined && !props.useSessionUser && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`useSessionUser\` and \`userId\` is not present.`)
    }
    if (props[propName] && (props.useSessionUser || props.userId !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`useSessionUser\` and \`userId\`.`)
    }
  },
  /**
   * Function to change default user profile behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
  handleButtonUpdateClick: PropTypes.func,
  /**
   * Function to get user update success event
   * @param {Object} user User with session data
   */
  handleSuccessUpdate: PropTypes.func,
  /**
   * Enable to get validation fields to show/hide fields from Ordering API
   */
  useValidationFileds: PropTypes.bool,
  /**
   * Type of validation field to apply and get from API
   */
  validationFieldsType: PropTypes.string,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserProfile\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`)
    }
  },
  /**
   * Components types before user profile form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after user profile form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before user profile form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after user profile form
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

UserProfileForm.defaultProps = {
  useValidationFileds: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  refreshSessionUser: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
