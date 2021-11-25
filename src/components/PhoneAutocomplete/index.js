import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'

export const PhoneAutocomplete = (props) => {
  const { UIComponent, isIos, businessSlug } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { setUserCustomerOptions }] = useOrder()
  const [phone, setPhone] = useState('')
  const [openModal, setOpenModal] = useState({ customer: false, signup: false })
  const [customerState, setCustomerState] = useState({ loading: false, result: { error: false } })
  const [customersPhones, setCustomersPhones] = useState({ users: [], loading: false, error: null })
  const [businessAddress, setBusinessAddress] = useState(null)
  const [alertState, setAlertState] = useState({ open: true, content: [] })
  /**
   * Get users from API
   */
  const getUsers = async () => {
    setCustomersPhones({ ...customersPhones, loading: true })
    const conditions = [{
      attribute: 'cellphone',
      value: {
        condition: 'ilike',
        value: isIos ? `%${phone}%` : encodeURI(`%${phone}%`)
      }
    },
    {
      attribute: 'phone',
      value: {
        condition: 'ilike',
        value: isIos ? `%${phone}%` : encodeURI(`%${phone}%`)
      }
    }]
    try {
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .where({
          conditions,
          conector: 'OR'
        })
        .get()
      setCustomersPhones({ ...customersPhones, users: result, loading: false })
    } catch (e) {
      setCustomersPhones({ ...customersPhones, loading: false, error: e.message })
    }
  }
  /**
   * fetch business to get its address
   */
  const getBusiness = async () => {
    const { content: { result, error } } = await ordering
      .businesses('mcbonalds')
      .select([
        'address',
        'location',
        'distance'
      ])
      .parameters()
      .get()
    if (error) {
      setAlertState({ open: true, content: result })
      return
    }
    setBusinessAddress(result)
  }

  const setBusinessAddressToUser = async (user, onRedirect) => {
    if (!businessAddress) return
    try {
      const { content: { result: resultAddresses, error } } = await ordering.users(user.id).addresses().get()
      if (error) {
        setAlertState({ open: true, content: resultAddresses })
        return
      }
      const userBusinessAddress = resultAddresses.find((address) => address.address === businessAddress.address || address.location === businessAddress.location)
      let addressId = userBusinessAddress?.id
      if (!userBusinessAddress) {
        const response = await ordering.users(user.id).addresses().save({ address: businessAddress.address, location: businessAddress.location })
        if (response.content.error) {
          setAlertState({ open: true, content: response.content.result })
          return
        }
        addressId = response.content.result.id
      }
      const addressResponse = await ordering.users(user.id).addresses(addressId).save({ default: true })
      if (addressResponse.content.error) {
        setAlertState({ open: true, content: addressResponse.content.result })
        return
      }
      await setUserCustomerOptions({ addressId: addressResponse.content.result.id, type: 3, customer: user })
      onRedirect && onRedirect()
    } catch (err) {
      setAlertState({
        open: true,
        content: err.message
      })
    }
  }

  useEffect(() => {
    if (
      phone &&
      phone.length === 7 &&
      customersPhones?.users?.length === 0
    ) {
      getUsers()
    }
    if (phone && phone.length < 7) {
      setCustomersPhones({ ...customersPhones, users: [] })
    }
  }, [phone])

  useEffect(() => {
    if (businessSlug) {
      getBusiness()
    }
  }, [businessSlug])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          phone={phone}
          customerState={customerState}
          customersPhones={customersPhones}
          setCustomersPhones={setCustomersPhones}
          onChangeNumber={(phone) => setPhone(phone)}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setCustomerState={setCustomerState}
          setBusinessAddressToUser={setBusinessAddressToUser}
          alertState={alertState}
        />
      )}
    </>
  )
}
PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
