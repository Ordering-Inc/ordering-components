import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'
import { useCustomer } from '../../contexts/CustomerContext'

export const AddressForm = (props) => {
  const {
    UIComponent,
    addressId,
    address,
    useValidationFileds,
    onSaveAddress,
    isSelectedAfterAdd,
    onSaveCustomAddress,
    franchiseId,
    handleGoToLogin,
    avoidRefreshUserInfo
  } = props

  const [ordering] = useApi()
  const [validationFields] = useValidationFields()
  const [addressState, setAddressState] = useState({ loading: false, error: null, address: address || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [userByToken, setUserByToken] = useState(null)
  const [{ auth, user, token }, { refreshUserInfo }] = useSession()
  const requestsState = {}
  const [{ options }, { changeAddress }] = useOrder()
  const userId = props.userId || user?.id
  const accessToken = props.accessToken || token
  const [, { setUserCustomer }] = useCustomer()

  const [isEdit, setIsEdit] = useState(false)
  const [businessesList, setBusinessesList] = useState({ businesses: [], loading: true, error: null })

  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */
  const loadAddress = async (userId, addressId) => {
    try {
      setAddressState({ ...addressState, loading: true })
      const source = {}
      requestsState.address = source
      const { content } = await ordering.users(userId).addresses(addressId).get({ accessToken, cancelToken: source })
      setAddressState({
        loading: false,
        error: content.error ? content.result : null,
        address: content.error ? {} : content.result
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setAddressState({
          loading: false,
          error: [err.message],
          address: {}
        })
      }
    }
  }

  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
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
      (!validationFields.loading && !validationFields.fields?.address?.[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.address?.[fieldName] &&
        validationFields.fields?.address?.[fieldName]?.enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return useValidationFileds &&
      !validationFields.loading &&
      validationFields.fields?.address?.[fieldName] &&
      validationFields.fields?.address?.[fieldName]?.enabled &&
      validationFields.fields?.address?.[fieldName]?.required
  }

  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */
  const saveAddress = async (values, userCustomerSetup) => {
    if (onSaveCustomAddress) {
      onSaveCustomAddress(values)
      return
    }
    if (!auth && !userByToken?.session?.token) {
      changeAddress(
        { ...values, ...formState.changes },
        { country_code: values?.country_code ?? formState.changes?.country_code }
      )
      onSaveAddress && onSaveAddress(formState.changes)
      return
    }

    setFormState({ ...formState, loading: true })
    try {
      const data = { ...values, ...formState.changes }
      Object.keys(data).forEach(key => {
        if (data[key] === null) {
          delete data[key]
        }
      })

      const { content } = await ordering
        .users(userByToken?.id || userId)
        .addresses(addressState.address?.id)
        .save(data, { accessToken: userByToken?.session?.token || accessToken })
      setFormState({
        ...formState,
        loading: false,
        error: content.error ? content.result : null,
        result: content.result,
        changes: content.error ? formState.changes : {}
      })
      if (!content.error) {
        setAddressState({
          ...addressState,
          address: content.result
        })
        if (isSelectedAfterAdd) {
          await changeAddress(content.result.id, {
            address: isEdit ? null : content.result,
            country_code: content.result?.country_code,
            type: options?.type,
            isEdit
          })
        }
        onSaveAddress && onSaveAddress(content.result)
      }
      if (userCustomerSetup) {
        await setUserCustomer(userCustomerSetup, true)
      }
      if (!avoidRefreshUserInfo) {
        refreshUserInfo()
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

  const getBusinessDeliveryZones = async (location) => {
    if (!location) return
    try {
      setBusinessesList({
        ...businessesList,
        loading: true,
        businesses: []
      })
      let where = null
      const conditions = []
      const parameters = {
        location: `${location?.lat},${location?.lng}`,
        type: 2,
        page: 1,
        page_size: 20
      }
      if (franchiseId) {
        conditions.push({ attribute: 'franchise_id', value: franchiseId })
      }
      where = {
        conditions,
        conector: 'AND'
      }
      const source = {}
      requestsState.businesses = source
      const fetchEndpoint = ordering
        .businesses()
        .select(['delivery_zone', 'name', 'id', 'location', 'logo', 'slug', 'zones'])
        .parameters(parameters)
        .where(where)
      const { content: { error, result } } = await fetchEndpoint.get({ cancelToken: source })
      setBusinessesList({
        ...businessesList,
        loading: false,
        error,
        businesses: result.map(business => ({
          ...business?.location,
          icon: business?.logo,
          slug: business?.slug,
          zones: business?.zones
        })),
        result,
        fetched: true
      })
      return result
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setBusinessesList({
          ...businessesList,
          loading: false,
          error: true,
          fetched: true,
          result: [err.message]
        })
      }
    }
  }

  const getUserByToken = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${props.accessToken}`
        }
      }
      const response = await fetch(`${ordering.root}/users/me`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setUserByToken(result)
        return
      }
      handleGoToLogin && handleGoToLogin()
    } catch (err) {
      handleGoToLogin && handleGoToLogin()
    }
  }

  useEffect(() => {
    setAddressState({
      ...addressState,
      address: address || {}
    })
  }, [address])

  useEffect(() => {
    if (addressId && !address) {
      loadAddress(userId, addressId)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (requestsState.address) {
        requestsState.address.cancel()
      }
    }
  }, [])

  /**
 * Cancel businesses request
 */
  useEffect(() => {
    const request = requestsState.businesses
    return () => {
      request && request.cancel()
    }
  }, [requestsState.businesses])

  useEffect(() => {
    if (props.confirmAddress) {
      getUserByToken()
    }
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            showField={showField}
            updateChanges={updateChanges}
            handleChangeInput={handleChangeInput}
            isRequiredField={isRequiredField}
            saveAddress={saveAddress}
            addressState={addressState}
            setIsEdit={(val) => setIsEdit(val)}
            businessesList={businessesList}
            getBusinessDeliveryZones={getBusinessDeliveryZones}
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
   * Prop to set address after add
   */
  isSelectedAfterAdd: PropTypes.bool,
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
  onSaveAddress: PropTypes.func,
  /**
   * Custom function
   */
  onSaveCustomAddress: PropTypes.func,
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
