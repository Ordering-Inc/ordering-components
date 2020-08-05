import React, { useEffect } from 'react'
import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'
import { TestComponent } from '../../components/TestComponent'
import { useSession } from '../../../src/contexts/SessionContext'
import { AddressList } from '../../../src/components/AddressList'
import { AddressListUI } from '../../components/AddressListUI'

export const PlacesExample = ({ ordering }) => {
  const [{ order }] = useOrder()
  const [{ user, token }] = useSession()

  const addressListProps = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after order type control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  return (
    <>
      <p>Current order address: {order.address?.address} ({order.address?.location?.lat}, {order.address?.location?.lng})</p>
      <AddressList {...addressListProps} />
    </>
  )
}
