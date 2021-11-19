import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const PhoneAutocomplete = (props) => {
  const { UIComponent, isIos } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [phone, setPhone] = useState('')
  const [openModal, setOpenModal] = useState({ customer: false, signup: false })
  const [customerState, setCustomerState] = useState({ loading: false, result: { error: false } })
  const [customersPhones, setCustomersPhones] = useState({ users: [], loading: false, error: null })

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
