import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to control a address list
 * @param {object} props Props of AddressList component
 */
export const AddressList = (props) => {
  const {
    UIComponent,
    changeOrderAddressWithDefault,
    handleClickSetDefault,
    handleClickDelete
  } = props

  const [ordering] = useApi()
  const [{ user, token }] = useSession()
  const userId = props.userId || user?.id
  const accessToken = props.accessToken || token

  if (!userId) {
    throw new Error('`userId` must provide from props or use SessionProviver to wrappe the app.')
  }

  if (!accessToken) {
    throw new Error('`accessToken` must provide from props or use SessionProviver to wrappe the app.')
  }

  const [addressList, setAddressList] = useState({ loading: false, error: null, addresses: [] })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [, { changeAddress }] = useOrder()

  /**
   * Function to load addresses from API
   */
  const loadAddresses = async () => {
    try {
      setAddressList({ ...addressList, loading: true })
      const { content } = await ordering.setAccessToken(accessToken).users(userId).addresses().get({ accessToken })
      setAddressList({
        loading: false,
        error: content.error ? content.result : null,
        addresses: content.error ? [] : content.result
      })
    } catch (err) {
      setAddressList({ ...addressList, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    loadAddresses()
  }, [])

  /**
   * Function to make an address as default address
   * @param {object} address Address to make as default
   */
  const handleSetDefault = async (address) => {
    if (handleClickSetDefault) {
      return handleClickSetDefault(address)
    }
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content } = await ordering.users(userId).addresses(address.id).save({ default: true }, { accessToken })
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
          changeAddress(content.result.id)
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

  return (
    <>
      {
        actionStatus.error && <p>Alert Error: {actionStatus.error}</p>
      }
      {UIComponent && (
        <UIComponent
          {...props}
          addressList={addressList}
          setAddressList={setAddressList}
          actionStatus={actionStatus}
          handleSetDefault={handleSetDefault}
          handleDelete={handleDelete}
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
  userId: PropTypes.elementType,
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
