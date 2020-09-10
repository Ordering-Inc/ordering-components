import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'

export const AddressForm = (props) => {
  const {
    UIComponent,
    addressId,
    address,
    useValidationFileds,
    onSaveAddress
  } = props

  const [validationFields, setValidationFields] = useState({ loading: useValidationFileds, fields: {} })
  const [addressState, setAddressState] = useState({ loading: false, error: null, address: address || {}, dddd: address })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [{ auth, user, token }] = useSession()
  const [ordering] = useApi()
  const [, { changeAddress }] = useOrder()

  const userId = props.userId || user?.id
  const accessToken = props.accessToken || token

  // if (!userId) {
  //   throw new Error('`userId` must provide from props or use SessionProviver to wrappe the app.')
  // }

  // if (!accessToken) {
  //   throw new Error('`accessToken` must provide from props or use SessionProviver to wrappe the app.')
  // }

  /**
   * Load the validation fields
   */
  const loadValidationFields = async () => {
    try {
      setValidationFields({ ...validationFields, loading: true })
      const { content } = await ordering.validationFields().get({
        query: {
          where: [
            {
              attribute: 'validate',
              value: 'address'
            }
          ]
        }
      })
      const fields = {}
      if (!content.result.error) {
        content.result.forEach((field) => {
          fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field
        })
      }
      setValidationFields({
        ...validationFields,
        loading: false,
        fields
      })
    } catch (err) {
      setValidationFields({ ...validationFields, loading: false })
    }
  }

  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */
  const loadAddress = async (userId, addressId) => {
    try {
      setAddressState({ ...addressState, loading: true })
      const { content } = await ordering.users(userId).addresses(addressId).get({ accessToken })
      setAddressState({
        loading: false,
        error: content.error ? content.result : null,
        address: content.error ? {} : content.result
      })
    } catch (err) {
      setAddressState({
        loading: false,
        error: [err.message],
        address: {}
      })
    }
  }

  useEffect(() => {
    setAddressState({
      ...addressState,
      address: address || {}
    })
  }, [address])

  useEffect(() => {
    if (useValidationFileds) {
      loadValidationFields()
    }
    if (addressId && !address) {
      loadAddress(userId, addressId)
    }
  }, [])

  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */
  const hanldeChangeInput = (e) => {
    updateChanges({ [e.target.name]: e.target.value })
  }

  /**
   * Update address data
   * @param {object} changes object with changes
   */
  const updateChanges = (changes) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        ...changes
      }
    })
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

  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */
  const saveAddress = async () => {
    if (!auth) {
      changeAddress(formState.changes)
      onSaveAddress && onSaveAddress(formState.changes)
      return
    }
    setFormState({ ...formState, loading: true })
    try {
      const { content } = await ordering.users(userId).addresses(addressState.address?.id).save(formState.changes, { accessToken })
      setFormState({
        ...formState,
        loading: false,
        error: content.error ? content.result : null,
        changes: content.error ? formState.changes : {}
      })
      if (!content.error) {
        setAddressState({
          ...addressState,
          address: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: [err.message],
        address: {}
      })
    }
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            showField={showField}
            updateChanges={updateChanges}
            hanldeChangeInput={hanldeChangeInput}
            isRequiredField={isRequiredField}
            saveAddress={saveAddress}
            addressState={addressState}
            validationFields={validationFields}
          />
        )
      }
    </>
  )
}

AddressForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useValidationFileds: PropTypes.bool,
  /**
   * Address object to edit
   */
  address: PropTypes.object,
  /**
   * User id of the address to load from Ordering API
   * Omit if you use a SessionProvier context and the address is of the logged user
   */
  userId: PropTypes.number,
  /**
   * Address id to edit and load from Ordering API
   */
  addressId: PropTypes.number,
  /**
   * Address id to edit and load from Ordering API
   */
  onSaveAddress: PropTypes.number,
  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AddressForm.defaultProps = {
  useValidationFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
