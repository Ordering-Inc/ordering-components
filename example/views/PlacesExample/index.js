import React, { useState } from 'react'
import { useOrder } from '../../../src/contexts/OrderContext'
import { TestComponent } from '../../components/TestComponent'
// import { useSession } from '../../../src/contexts/SessionContext'
import { AddressList } from '../../../src/components/AddressList'
import { AddressListUI } from '../../components/AddressListUI'
import { AddressForm } from '../../../src/components/AddressForm'
import { AddressFormUI } from '../../components/AddressFormUI'

export const PlacesExample = () => {
  const [orderState] = useOrder()
  // const [{ user, token }] = useSession()
  const [curAddress, setCurAddress] = useState(null)

  const addressListProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AddressListUI,
    /**
     * Behavior when click on address
     * @param {object} address Address that was clicked
     */
    handleClickAddress: (address) => {
      console.log('Address was clicked', address)
      setCurAddress(address)
    },
    /**
     * Custom set default address
     * @param {object} address Address to make to as default
     */
    // handleClickSetDefault: (address) => {
    //   console.log('Address to make to as default', address)
    // },
    /**
     * Change order address with default
     * Change order address when default address changed, only work if component
     * is wrapped by OrderContext
     */
    changeOrderAddressWithDefault: true,
    /**
     * Components types before order type control
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after order type control
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before order type control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p>Test Element Before</p>],
    /**
     * Elements after order type control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p>Test Element After</p>]
  }

  const addressFormProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AddressFormUI,
    /**
     * Enable to get checkout fields to show/hide fields from Ordering API
     */
    useValidationFileds: true//,
    /**
     * Address object to edit
     */
    // address: { id: 3 },
    /**
     * User id of the address to load from Ordering API
     * Omit if you use a SessionProvier context and the address is of the logged user
     */
    // userId: PropTypes.number,
    /**
     * Address id to edit and load from Ordering API
     */
    // addressId: 3,
  }

  return (
    <>
      <p>Current order address: {orderState?.options?.address?.address} ({orderState?.options?.address?.location?.lat}, {orderState?.options?.address?.location?.lng})</p>
      <AddressForm {...addressFormProps} address={curAddress} />
      <AddressList {...addressListProps} />
    </>
  )
}
