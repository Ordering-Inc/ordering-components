import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useCustomer } from '../../contexts/CustomerContext'
import { useValidationFields as useValidationsFieldsController } from '../../contexts/ValidationsFieldsContext'
import { useToast, ToastType } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage user form details behavior without UI component
 */
export const UserFormDetails = (props) => {
  const {
    UIComponent,
    useSessionUser,
    refreshSessionUser,
    useDefualtSessionManager,
    userId,
    user,
    useValidationFields,
    handleButtonUpdateClick,
    handleSuccessUpdate,
    isCustomerMode
  } = props

  const [ordering] = useApi()
  const [session, { changeUser }] = useSession()
  const [customer, { setUserCustomer }] = useCustomer()
  const [validationFields] = useValidationsFieldsController()
  const [isEdit, setIsEdit] = useState(false)
  const [userState, setUserState] = useState({ loading: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [, { showToast }] = useToast()
    const [, t] = useLanguage()
  const requestsState = {}

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  useEffect(() => {
    if ((userId || (useSessionUser && refreshSessionUser)) && !session.loading && !props.userData) {
      setUserState({ ...userState, loading: true })
      const source = {}
      requestsState.user = source
      ordering.setAccessToken(accessToken).users((useSessionUser && refreshSessionUser) ? session.user.id : userId).get({ cancelToken: source }).then((response) => {
        setUserState({ loading: false, result: response.content })
        if (response.content.result) {
          if (!isCustomerMode) {
            changeUser({
              ...session.user,
              ...response.content.result
            })
          } else {
            setUserCustomer({
              ...customer.user,
              ...response.content.result
            }, true)
          }
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

    return () => {
      if (requestsState.user) {
        requestsState.user.cancel()
      }
    }
  }, [session.loading])

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Default fuction for user profile workflow
   */
  const handleUpdateClick = async (changes, isImage, image) => {
    if (handleButtonUpdateClick) {
      return handleButtonUpdateClick(userState.result.result, formState.changes)
    }
    try {
      let response
      setFormState({ ...formState, loading: true })
      if (changes) {
        formState.changes = { ...formState.changes, ...changes }
      }
      if (isImage) {
        response = await ordering.users(props?.userData?.id || userState.result.result.id).save({ photo: image || formState.changes.photo }, {
          accessToken: accessToken
        })

        const { photo, ...changes } = formState.changes

        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : changes,
          result: response.content,
          loading: false
        })
      } else {
        response = await ordering.users(props?.userData?.id || userState.result.result.id).save(formState.changes, {
          accessToken: accessToken
        })
        setFormState({
          ...formState,
          changes: response.content.error ? formState.changes : {},
          result: response.content,
          loading: false
        })
      }

      if (!response.content.error) {
        setUserState({
          ...userState,
          result: {
            ...userState.result,
            ...response.content
          }
        })
        if (!isCustomerMode) {
          changeUser({
            ...session.user,
            ...response.content.result
          })
        } else {
          setUserCustomer({
            ...customer.user,
            ...response.content.result
          }, true)
        }

        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }

        if (!image) {
          setIsEdit(!isEdit)
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

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
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
    return !useValidationFields ||
      (!validationFields.loading && !validationFields.fields?.checkout[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.checkout[fieldName] &&
        validationFields.fields?.checkout[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return useValidationFields &&
      !validationFields.loading &&
      validationFields.fields?.checkout?.[fieldName] &&
      validationFields.fields?.checkout?.[fieldName]?.enabled &&
      validationFields.fields?.checkout?.[fieldName]?.required
  }

  const handleToggleAvalaibleStatusDriver = async (newValue) => {
    try {
      setUserState({ ...userState, loading: true })
      const response = await ordering
        .users(props?.userData?.id || userState.result.result.id)
        .save(
          { available: newValue },
          {
            accessToken: accessToken
          }
        )

      if (response.content.error) {
        setUserState({ ...userState, loading: false })
        showToast(
          ToastType.Error,
          t(response.content.result[0], 'Some error has ocurred')
        )
      }

      if (!response.content.error) {
        setUserState({
          ...userState,
          result: { ...response.content },
          loading: false
        })
        changeUser({
          ...session.user,
          ...response.content.result
        })
        showToast(
          ToastType.Success,
          t('AVAILABLE_STATE_IS_UPDATED', 'Available state is updated')
        )
      }
    } catch (err) {
      setUserState({
        loading: false,
        result: {
          error: true,
          result: err.message
        }
      })
      showToast(ToastType.Error, t(err.message, 'Some error has ocurred'))
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isEdit={isEdit}
          cleanFormState={cleanFormState}
          formState={formState}
          userState={userState}
          validationFields={validationFields}
          showField={showField}
          setFormState={setFormState}
          isRequiredField={isRequiredField}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handlechangeImage={handlechangeImage}
          toggleIsEdit={() => setIsEdit(!isEdit)}
          handleToggleAvalaibleStatusDriver={handleToggleAvalaibleStatusDriver}
        />
      )}
    </>
  )
}

UserFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Use session user to details
   */
  useSessionUser: (props, propName) => {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`boolean\`.`)
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
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`number\`.`)
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
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`object\`.`)
    }
    if (props.userId === undefined && !props.useSessionUser && !props[propName]) {
      return new Error(`Invalid prop \`${propName}\` must be true when \`useSessionUser\` and \`userId\` is not present.`)
    }
    if (props[propName] && (props.useSessionUser || props.userId !== undefined)) {
      return new Error(`Invalid prop \`${propName}\` must be without \`useSessionUser\` and \`userId\`.`)
    }
  },
  /**
   * Function to change default user details behavior
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
  useValidationFields: PropTypes.bool,
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
      return new Error(`Invalid prop \`${propName}\` of type \`${typeof props[propName]}\` supplied to \`UserFormDetails\`, expected \`object\`.`)
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error(`Invalid prop \`${propName}\` is required when \`useDefualtSessionManager\` is false.`)
    }
  },
  /**
   * Components types before user details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after user details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after user details form
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

UserFormDetails.defaultProps = {
  useValidationFields: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
