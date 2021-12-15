import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useBusiness } from '../../contexts/BusinessContext'

export const PhoneAutocomplete = (props) => {
  const { UIComponent, isIos, businessSlug } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [, { setUserCustomerOptions }] = useOrder()
  const [businessState] = useBusiness()

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

  const setGuestOptions = async ({ customer, type = 3, onRedirect }) => {
    const businessObj = businessState?.business ?? businessAddress
    const userObj = customer ?? user
    if (!businessObj || !userObj?.id) return
    try {
      const { content: { result: resultAddresses, error } } = await ordering.users(userObj.id).addresses().get()
      if (error) {
        setAlertState({ open: true, content: resultAddresses })
        return
      }
      const userAddressFinded = resultAddresses.find((address) => address.address === businessObj.address && address.location === businessObj.location)
      let addressId = userAddressFinded?.id
      if (!userAddressFinded) {
        const response = await ordering.users(userObj.id).addresses().save({ address: businessObj.address, location: businessObj.location })
        if (response.content.error) {
          setAlertState({ open: true, content: response.content.result })
          return
        }
        addressId = response.content.result.id
      }
      const addressResponse = await ordering.users(userObj.id).addresses(addressId).save({ default: true })
      if (addressResponse.content.error) {
        setAlertState({ open: true, content: addressResponse.content.result })
        return
      }
      await setUserCustomerOptions({ addressId: addressResponse.content.result.id, type, customer: userObj })
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
    if (businessSlug && !businessState?.business?.id) {
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
          setBusinessAddressToUser={setGuestOptions}
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
