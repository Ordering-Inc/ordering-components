import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useApi } from '../../../contexts/ApiContext'
import { useValidationFields as useValidationsFieldsController } from '../../../contexts/ValidationsFieldsContext'

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
    handleSuccessAdd,
    isProfessional
  } = props

  const [ordering] = useApi()
  const [session, { changeUser }] = useSession()
  const [validationFields] = useValidationsFieldsController()
  const [isEdit, setIsEdit] = useState(false)
  const [userState, setUserState] = useState({ loading: false, result: { error: false } })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [selectedDriverGroupIds, setSelectedDriverGroupIds] = useState([])
  const requestsState = {}

  const accessToken = useDefualtSessionManager ? session.token : props.accessToken

  useEffect(() => {
    if (!user) return
    if ((userId || (useSessionUser && refreshSessionUser)) && !session.loading && !props.userData) {
      setUserState({ ...userState, loading: true })
      const source = {}
      requestsState.user = source
      ordering.setAccessToken(accessToken).users((useSessionUser && refreshSessionUser) ? session.user.id : userId).get({ cancelToken: source }).then((response) => {
        setUserState({ loading: false, result: response.content })
        if (response.content.result) {
          changeUser({
            ...session.user,
            ...response.content.result
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

    return () => {
      if (requestsState.user) {
        requestsState.user.cancel()
      }
    }
  }, [session.loading, user])

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
      let content = {}
      setFormState({ ...formState, loading: true })
      if (changes) {
        formState.changes = { ...formState.changes, ...changes }
      }
      if (isImage) {
        if (session.user?.level !== 2) {
          response = await ordering.users(user?.id || userState.result.result.id).save({ photo: image || formState.changes.photo }, {
            accessToken: accessToken
          })
          content = response.content
        } else {
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session.token}`
            },
            body: JSON.stringify({ photo: image || formState.changes.photo })
          }
          const response = await fetch(`${ordering.root}/professionals/${(user?.id || userState.result.result.id)}`, requestOptions)
          content = await response.json()
        }

        const { photo, ...changes } = formState.changes

        setFormState({
          ...formState,
          changes: content.error ? formState.changes : changes,
          result: content,
          loading: false
        })
      } else {
        if (session.user?.level !== 2) {
          response = await ordering.users(user?.id || userState.result.result.id).save(formState.changes, {
            accessToken: accessToken
          })
          content = response.content
        } else {
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session.token}`
            },
            body: JSON.stringify(formState.changes)
          }
          const response = await fetch(`${ordering.root}/professionals/${(user?.id || userState.result.result.id)}`, requestOptions)
          content = await response.json()
        }

        setFormState({
          ...formState,
          changes: content.error ? formState.changes : {},
          result: content,
          loading: false
        })
      }

      if (!content.error) {
        setUserState({
          ...userState,
          result: {
            ...userState.result,
            ...content
          }
        })
        if (useSessionUser) {
          changeUser({
            ...session.user,
            ...content.result
          })
        }
        if (handleSuccessUpdate) {
          handleSuccessUpdate(content.result)
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

  const handleAddClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const changes = { ...formState?.changes }
      if (isProfessional) Object.assign(changes, { level: 8 })
      const response = await ordering.users().save(changes, {
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
        if (handleSuccessAdd) {
          handleSuccessAdd(response.content.result)
        }
        if (props.onClose) {
          props.onClose()
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
   * Update credential data
   * @param {string} type user filed name
   */
  const handleChangeSwtich = (type, value) => {
    const currentChanges = {
      [type]: value
    }
    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update credential data
   * @param {number} level user level
   */
  const handleChangeUserType = (level) => {
    const currentChanges = {
      level: level
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
   * Update occupation id
   * @param {Number} id
   */
  const handleChangeOccupation = (id) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        occupation_id: id
      }
    })
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
      validationFields.fields?.checkout[fieldName] &&
      validationFields.fields?.checkout[fieldName].enabled &&
      validationFields.fields?.checkout[fieldName].required
  }

  const handleDriverGroupClick = (groupId) => {
    let updatedDriverGroupIds = []
    if (selectedDriverGroupIds.includes(groupId)) {
      updatedDriverGroupIds = selectedDriverGroupIds.filter(id => id !== groupId)
    } else {
      updatedDriverGroupIds = [...selectedDriverGroupIds, groupId]
    }
    setSelectedDriverGroupIds(updatedDriverGroupIds)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        driver_groups_ids: updatedDriverGroupIds
      }
    })
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
          handleChangeSwtich={handleChangeSwtich}
          isRequiredField={isRequiredField}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handleButtonAddClick={handleAddClick}
          handlechangeImage={handlechangeImage}
          toggleIsEdit={() => setIsEdit(!isEdit)}
          handleChangeUserType={handleChangeUserType}
          handleChangeOccupation={handleChangeOccupation}
          selectedDriverGroupIds={selectedDriverGroupIds}
          handleDriverGroupClick={handleDriverGroupClick}
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
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: PropTypes.bool,
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
