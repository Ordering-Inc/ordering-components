import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useBusiness } from '../../contexts/BusinessContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { CODES } from '../../constants/code-numbers'
import { TIMEZONES } from '../../constants/timezones'

export const PhoneAutocomplete = (props) => {
  const { UIComponent, isIos, businessSlug, urlPhone, propsToFetch, isFromUrlPhone } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const [orderState, { setUserCustomerOptions }] = useOrder()
  const [businessState] = useBusiness()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))

  const [phone, setPhone] = useState('')
  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState({ customer: false, signup: false, error: false })
  const [customerState, setCustomerState] = useState({ loading: false, result: { error: false } })
  const [customersPhones, setCustomersPhones] = useState({ users: userCustomer ? [userCustomer] : [], loading: !!urlPhone, error: null, fetched: false })
  const [businessAddress, setBusinessAddress] = useState(null)
  const [alertState, setAlertState] = useState({ open: true, content: [] })
  const [optionsState, setOptionsState] = useState({ loading: false })
  const [localPhoneCode, setLocalPhoneCode] = useState(null)

  const reqState = {}
  /**
   * Get users from API
   */
  const getUsers = async (_phone) => {
    const maxRetries = 3
    const waitTime = 60000
    const cellphone = _phone || phone || urlPhone
    const cellphoneString = cellphone?.toString?.()
    const cellphoneSplited = cellphoneString?.match?.(/.{1,7}/) || []
    for (let retryAttempt = 1; retryAttempt <= maxRetries; retryAttempt++) {
      try {
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
                condition: isFromUrlPhone ? '=' : 'like',
                value: isFromUrlPhone
                  ? cellphoneString
                  : isIos
                    ? `%${cellphoneSplited?.[0] || cellphoneString}%`
                    : encodeURI(`%${cellphoneSplited?.[0] || cellphoneString}%`)
              }
            },
            {
              attribute: 'phone',
              value: {
                condition: isFromUrlPhone ? '=' : 'like',
                value: isFromUrlPhone
                  ? cellphoneString
                  : isIos
                    ? `%${cellphoneSplited?.[0] || cellphoneString}%`
                    : encodeURI(`%${cellphoneSplited?.[0] || cellphoneString}%`)
              }
            }]
          }]
        }
        const source = {}
        reqState.users = source
        const request = ordering
          .setAccessToken(token)
          .users()
          .select(propsToFetch)
          .where(conditions)
          .get({ cancelToken: source })

        const timer = new Promise((resolve, reject) => {
          setTimeout(() => reject(new Error('Timeout exceeded')), waitTime)
        })

        const response = await Promise.race([request, timer])

        if (response.content && response.content.result) {
          const { result } = response.content
          const users = result.filter(user => user.cellphone?.includes(cellphoneString))
          setCustomersPhones({ ...customersPhones, users, loading: false, fetched: true })
          break
        } else {
          throw new Error('Error')
        }
      } catch {
        reqState.users?.cancel && reqState.users.cancel()
        if (retryAttempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, waitTime))
        }
        if (retryAttempt === maxRetries) {
          setCustomersPhones({
            ...customersPhones,
            loading: false,
            error: t('ERROR_MULTIPLE_FETCH', 'Exceeded the maximum number of retries. Reload the page.')
          })
        }
      }
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

      const options = { type }
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
    if (urlPhone) return
    if (
      phone &&
      phone.length >= 7 &&
      (customersPhones?.users?.length === 0 || phone.length === 7) &&
      !customersPhones.loading
    ) {
      getUsers()
    }
    if ((phone && phone.length < 7) || !phone) {
      setCustomersPhones({ ...customersPhones, users: userCustomer ? [userCustomer] : [] })
    }
  }, [phone])

  useEffect(() => {
    if (urlPhone) {
      getUsers()
      return
    }
    if ((urlPhone && urlPhone.length < 7)) {
      setOpenModal({ ...openModal, error: true })
      setCustomersPhones({ ...customersPhones, users: [], loading: false })
    }
  }, [urlPhone])

  useEffect(() => {
    if (businessSlug && !businessState?.business?.id) {
      getBusiness()
    }
  }, [businessSlug])

  useEffect(() => {
    if (!window.localStorage.getItem('local_phone_code')) {
      const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const localCountry = TIMEZONES[localTimezone]
      const localPhoneCode = CODES.find(code => code.countryName === localCountry)?.phoneCode
      window.localStorage.setItem('local_phone_code', `+${localPhoneCode}`)
      setLocalPhoneCode(`+${localPhoneCode}`)
    } else {
      setLocalPhoneCode(window.localStorage.getItem('local_phone_code'))
    }
  }, [])

  useEffect(() => {
    if (userCustomer?.id && orderState?.options?.user_id && userCustomer?.id !== orderState?.options?.user_id) {
      setUserCustomerOptions({
        options: {
          user_id: userCustomer?.id,
          type: orderState?.options?.type
        },
        customer: userCustomer
      })
    }
  }, [userCustomer?.id, orderState?.options?.user_id])

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
          localPhoneCode={localPhoneCode}
          getUsers={getUsers}
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
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'metadata']
}
