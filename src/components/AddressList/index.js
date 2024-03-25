import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'
import { useCustomer } from '../../contexts/CustomerContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

/**
 * Component to control a address list
 * @param {object} props Props of AddressList component
 */
export const AddressList = (props) => {
  const {
    UIComponent,
    changeOrderAddressWithDefault,
    handleClickSetDefault,
    handleClickDelete,
    userCustomerSetup,
    setUserConfirmPhone
  } = props

  const [ordering] = useApi()
  const [{ user, token, auth }] = useSession()
  const [, { setUserCustomer }] = useCustomer()
  const socket = useWebsocket()
  const userId = props.userId || user?.id
  const accessToken = props.accessToken || token

  const [addressList, setAddressList] = useState({ loading: true, error: null, addresses: [] })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [{ options }, { changeAddress }] = useOrder()
  const requestsState = {}

  /**
   * Function to load addresses from API
   */
  const loadAddresses = async () => {
    try {
      setAddressList({ ...addressList, loading: true })
      const source = {}
      requestsState.list = source
      const { content } = await ordering.setAccessToken(accessToken).users(userId).addresses().get({ cancelToken: source })
      setAddressList({
        loading: false,
        error: content.error ? content.result : null,
        addresses: content.error ? [] : Array.isArray(content.result) ? content.result : []
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setAddressList({ ...addressList, loading: false, error: [err.message] })
      }
    }
  }

  useEffect(() => {
    loadAddresses()
    return () => {
      if (typeof requestsState.list.cancel === 'function') {
        requestsState.list.cancel()
      }
    }
  }, [userId])

  /**
   * Function to make an address as default address
   * @param {object} address Address to make as default
   */
  const handleSetDefault = async (address, userCustomerSetup, sameAddress, dontSetUserCustomer) => {
    if (userCustomerSetup && !dontSetUserCustomer) {
      setUserCustomer({
        ...userCustomerSetup,
        address: address?.address,
        address_notes: address?.address_notes,
        internal_number: address?.internal_number,
        zipcode: address?.zipcode
      }, true)
    }
    if (handleClickSetDefault) {
      return handleClickSetDefault(address)
    }
    if (sameAddress) {
      changeAddress(address?.id,
        {
          country_code: address?.country_code,
          type: options?.type
        }
      )
      return
    }
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content } = await ordering.setAccessToken(accessToken).users(userId).addresses(address.id).save({ default: true })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error && content.result.default) {
        addressList.addresses.map(_address => {
          _address.default = _address.id === address.id
          return _address
        })
        if (changeOrderAddressWithDefault) {
          changeAddress(content.result.id, {
            country_code: content.result?.country_code,
            type: options?.type
          })
        }
        setAddressList({ ...addressList })
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }
  /**
   * Function to delete an address
   * @param {object} address Address to delete
   */
  const handleDelete = async (address) => {
    if (handleClickDelete) {
      return handleClickDelete(address)
    }
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content } = await ordering.users(userId).addresses(address.id).delete({ accessToken })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        const addresses = addressList.addresses.filter(_address => {
          return _address.id !== address.id
        })
        setAddressList({ ...addressList, addresses })
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  const handleAddressRegister = async (address) => {
    if (address?.user_id !== userCustomerSetup?.id) return
    try {
      await setAddressList((prevProps) => ({
        ...prevProps,
        loading: false,
        addresses: [
          ...prevProps?.addresses,
          address
        ],
        addedBySocket: true
      }))
      setUserConfirmPhone && setUserConfirmPhone({ open: false, result: null })
    } catch (err) {
      setAddressList({ ...addressList, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (!userCustomerSetup?.id || !socket?.socket || !auth) return
    const room = {
      room: 'addresses',
      project: ordering.project,
      role: 'agent',
      user_id: user?.id
    }
    socket.on('addresses_register', handleAddressRegister)

    socket.socket.on('connect', () => {
      socket.join(room)
    })
    socket.join(room)
    return () => {
      socket.leave(room)
      socket.off('addresses_register', handleAddressRegister)
    }
  }, [socket?.socket, user?.id, userCustomerSetup?.id])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          addressList={addressList}
          setAddressList={setAddressList}
          actionStatus={actionStatus}
          handleSetDefault={handleSetDefault}
          handleDelete={handleDelete}
          loadAddresses={loadAddresses}
        />
      )}
    </>
  )
}

AddressList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Behavior when click on address
   * @param {object} address Addres that was clicked
   */
  handleClickAddress: PropTypes.func,
  /**
   * Custom set default address
   * @param {object} address Address to make to as default
   */
  handleClickSetDefault: PropTypes.func,
  /**
   * Custom delete address
   * @param {object} address Address to make to as default
   */
  handleClickDelete: PropTypes.func,
  /**
   * User id to get address from this user
   * If you don't provide one it is used by the current session by default
   */
  userId: PropTypes.number,
  /**
   * Access token to get addresses
   * If you don't provide one it is used by the current session by default
   */
  accessToken: PropTypes.string,
  /**
   * Components types before addresses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after addresses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AddressList.defaultProps = {
  changeOrderAddressWithDefault: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
