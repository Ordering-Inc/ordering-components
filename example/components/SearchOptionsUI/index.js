import React from 'react'

import { MomentOptionUI } from '../MomentOptionUI'
import { MomentOption } from '../../../src/components/MomentOption'

import { AddressListUI } from '../../components/AddressListUI'
import { AddressList } from '../../../src/components/AddressList'
import { AddressFormUI } from '../../components/AddressFormUI'
import { AddressForm } from '../../../src/components/AddressForm'

import { OrderTypeControlUI } from '../../components/OrderTypeControlUI'
import { OrderTypeControl } from '../../../src/components/OrderTypeControl'

export const SearchOptionsUI = (props) => {
  const {
    optionSelected,
    momentProps,
    order,
    addressFormProps,
    addressListProps,
    orderTypes,
    handleClickOption
  } = props

  return (
    <div className='search-options'>
      <button onClick={() => handleClickOption('orderType')}>Order type</button>
      <button onClick={() => handleClickOption('moment')}>Moment</button>
      <button onClick={() => handleClickOption('address')}>Address</button>

      {optionSelected === 'orderType' && (
        <div className='order-section'>
          <p>Cart products: {order.products.length}</p>
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
          <p>Current order address: {order.address?.address} ({order.address?.location?.lat}, {order.address?.location?.lng})</p>
          <AddressForm
            {...addressFormProps}
            UIComponent={AddressFormUI}
          />
          <AddressList
            {...addressListProps}
            UIComponent={AddressListUI}
          />
        </div>)}
    </div>
  )
}
