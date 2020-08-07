import React, { useEffect, useState } from 'react'
import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'
import { TestComponent } from '../../components/TestComponent'
import { useSession } from '../../../src/contexts/SessionContext'
import { AddressList } from '../../../src/components/AddressList'
import { AddressListUI } from '../../components/AddressListUI'
import { GoogleAutocompleteInput } from '../../../src/components/GoogleAutocompleteInput'
import { GpsButton, GoogleGpsButton } from '../../../src/components/GpsButton'
import { AddressForm } from '../../../src/components/AddressForm'
import { AddressFormUI } from '../../components/AddressFormUI'

export const PlacesExample = ({ ordering }) => {
  const [{ order }] = useOrder()
  const [{ user, token }] = useSession()
  const [curAddress, setCurAddress] = useState(null)

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
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after order type control
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }

  const googleInputProps = {
    /**
     * You Google Maps api key
     * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
     */
    apiKey: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk',
    /**
     * Fields for Google autocomplete
     * @see fields https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.fields
     */
    fields: ['place_id', 'formatted_address', 'geometry', 'utc_offset_minutes'],
    /**
     * types for Google autocomplete
     * @see types https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions.types
     */
    types: [],
    /**
     * types for Google autocomplete
     * @see countryCode https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#ComponentRestrictions.country
     */
    countryCode: '*',
    /**
     * Function to get address when this changed
     * @param {object} address New address
     */
    onChangeAddress: (address) => console.log('New address:', address)
  }

  const gpsButtonProps = {
    /**
     * Function to get data from GPS
     * @param {object} data New address
     */
    onData: (data) => console.log(data),
    /**
     * Function to get error from GPS
     * @param {object} address New address
     */
    onError: (err) => console.log(err)
  }

  const googleGpsButtonProps = {
    /**
     * You Google Maps api key
     * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
     */
    apiKey: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk',
    /**
     * Function to get address from GPS
     * @param {object} address New address
     */
    onAddress: (address) => console.log(address),
    /**
     * Function to get error from GPS
     * @param {object} address New address
     */
    onError: (err) => console.log(err)
  }

  const addressFormProps = {
    /**
     * Instace of Ordering Class
     * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
     */
    ordering: ordering,
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AddressFormUI,
    /**
     * Enable to get checkout fields to show/hide fields from Ordering API
     */
    useValidationFileds: true,
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
      <p>Current order address: {order.address?.address} ({order.address?.location?.lat}, {order.address?.location?.lng})</p>
      {/* <GoogleAutocompleteInput {...googleInputProps} placeholder='Address' />
      <GpsButton {...gpsButtonProps} />
      <GoogleGpsButton {...googleGpsButtonProps} /> */}
      <AddressForm {...addressFormProps} address={curAddress} />
      <AddressList {...addressListProps} />
    </>
  )
}
