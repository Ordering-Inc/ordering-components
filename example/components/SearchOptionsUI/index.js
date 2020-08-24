import React, { useState, useEffect } from 'react'

import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'

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
    ordering,
    optionSelected,
    momentProps,
    handleClickOption
  } = props

  const orderTypes = [1, 2, 3, 4, 5]

  const [curAddress, setCurAddress] = useState(null)
  const [{ order }, dispatchOrder] = useOrder()

  const addressListProps = {
    ordering: ordering,
    handleClickAddress: (address) => {
      console.log('Address was clicked', address)
      setCurAddress(address)
    },
    changeOrderAddressWithDefault: true
  }

  const addressFormProps = {
    ordering: ordering,
    useValidationFileds: true,
    address: curAddress
  }

  useEffect(() => {
    dispatchOrder({ type: ORDER_ACTIONS.CHANGE_BUSINESS, business: { id: 41, slug: 'mcbonalds' } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 111, quantity: 1 } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 1296, quantity: 1 } })
  }, [])

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
