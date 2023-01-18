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
  const [orderState, { setUserCustomerOptions }] = useOrder()
  const [businessState] = useBusiness()

  const [phone, setPhone] = useState('')
  const [openModal, setOpenModal] = useState({ customer: false, signup: false })
  const [customerState, setCustomerState] = useState({ loading: false, result: { error: false } })
  const [customersPhones, setCustomersPhones] = useState({ users: [], loading: false, error: null })
  const [businessAddress, setBusinessAddress] = useState(null)
  const [alertState, setAlertState] = useState({ open: true, content: [] })
  const [optionsState, setOptionsState] = useState({ loading: false })
  /**
   * Get users from API
   */
  const getUsers = async () => {
    setCustomersPhones({ ...customersPhones, loading: true })
    const conditions = {
      conector: 'AND',
      conditions: [{
        attribute: 'enabled',
        value: isIos ? true : encodeURI(true)
      },
      {
        conector: 'OR',
        conditions: [{
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
      }]
    }
    try {
      const { content: { result } } = await ordering
        .setAccessToken(token)
        .users()
        .where(conditions)
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

  const checkAddress = (address1, address2) => {
    const props = ['address', 'location']
    const values = []
    props.forEach(prop => {
      if (address1 && address1[prop]) {
        if (prop === 'location') {
          values.push(address2[prop].lat === address1[prop].lat &&
            address2[prop].lng === address1[prop].lng)
        } else {
          values.push(address2[prop] === address1[prop])
        }
      } else {
        values.push(!address2[prop])
      }
    })
    return values.every(value => value)
  }

  const setGuestOptions = async ({ customer, type = 3, onRedirect }) => {
    const businessObj = businessState?.business ?? businessAddress
    const userObj = customer ?? user
    if (!businessObj || !userObj?.id) return
    try {
      setOptionsState({ ...optionsState, loading: true })
      const { content: { result: resultAddresses, error } } = await ordering.users(userObj.id).addresses().get()
      if (error) {
        setAlertState({ open: true, content: resultAddresses })
        return
      }
      const userAddressFinded = resultAddresses.find((address) => address?.location && checkAddress(businessObj, address) && address)
      let addressSelected = userAddressFinded ?? null

      if (!addressSelected?.id) {
        const response = await ordering.users(userObj.id).addresses().save({ address: businessObj.address, location: businessObj.location })
        if (response.content.error) {
          setAlertState({ open: true, content: response.content.result })
          return
        }
        addressSelected = response.content.result ?? null
        const addressResponse = await ordering.users(userObj.id).addresses(addressSelected?.id).save({ default: true })
        if (addressResponse.content.error) {
          setAlertState({ open: true, content: addressResponse.content.result })
          return
        }
      }

      let options = { type }
      if (addressSelected && !checkAddress(orderState?.options?.address, addressSelected)) {
        options.address_id = addressSelected?.id
      }

      if (options?.address_id || user?.id !== customer?.id) {
        await setUserCustomerOptions({ options, customer: userObj })
      }
      onRedirect && onRedirect()
      setOptionsState({ ...optionsState, loading: false })
    } catch (err) {
      setAlertState({
        open: true,
        content: err.message
      })
      setOptionsState({ ...optionsState, loading: false })
    }
  }

  useEffect(() => {
    if (
      phone &&
      phone.length >= 7 &&
      (customersPhones?.users?.length === 0 || phone.length === 7)
    ) {
      getUsers()
    }
    if ((phone && phone.length < 7) || !phone) {
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
          optionsState={optionsState}
          checkAddress={checkAddress}
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
