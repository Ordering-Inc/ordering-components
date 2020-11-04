import React, { useState } from 'react'

import { MomentOptionUI } from '../MomentOptionUI'
import { MomentOption } from '../../../src/components/MomentOption'

import { AddressListUI } from '../../components/AddressListUI'
import { AddressList } from '../../../src/components/AddressList'
import { AddressFormUI } from '../../components/AddressFormUI'
import { AddressForm } from '../../../src/components/AddressForm'

import { OrderTypeControlUI } from '../../components/OrderTypeControlUI'
import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { useSession } from '../../../src/contexts/SessionContext'

export const SearchOptionsUI = (props) => {
  const [{ auth }] = useSession()
  const {
    orderState,
    optionSelected,
    momentProps,
    handleClickOption
  } = props

  const orderTypes = [1, 2, 3, 4, 5]

  const [curAddress, setCurAddress] = useState(null)

  const addressListProps = {
    handleClickAddress: (address) => {
      setCurAddress(address)
    },
    changeOrderAddressWithDefault: true
  }

  const addressFormProps = {
    useValidationFileds: true,
    address: curAddress
  }

  return (
    <div className='search-options'>
      <button onClick={() => handleClickOption('orderType')}>Order type</button>
      <button onClick={() => handleClickOption('moment')}>Moment</button>
      <button onClick={() => handleClickOption('address')}>Address</button>

      {optionSelected === 'orderType' && (
        <div className='order-section'>
          <OrderTypeControl
            orderTypes={orderTypes}
            UIComponent={OrderTypeControlUI}
          />
        </div>)}

      {optionSelected === 'moment' && (
        <MomentOption
          {...momentProps}
          UIComponent={MomentOptionUI}
        />)}

      {optionSelected === 'address' && (
        <div className='address-section'>
          {
            orderState.options?.address?.address && (
              <p>Current order address: {orderState.options?.address?.address} ({orderState.options?.address?.location?.lat}, {orderState.options?.address?.location?.lng})</p>
            )
          }
          <AddressForm
            {...addressFormProps}
            UIComponent={AddressFormUI}
          />
          {
            auth && (
              <AddressList
                {...addressListProps}
                UIComponent={AddressListUI}
              />
            )
          }
        </div>)}
    </div>
  )
}
