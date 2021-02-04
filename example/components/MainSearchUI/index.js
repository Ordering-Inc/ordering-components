import React from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../src/components/AddressForm'
import { AddressFormUI } from '../../components/AddressFormUI'

import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { OrderTypeControlUI } from '../../components/OrderTypeControlUI'

export const MainSearchUI = (props) => {
  const { register } = useForm()

  const orderTypes = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 }
  ]

  const {
    orderState,
    allListValues,
    isFormErrors,
    searchByAddress,
    handleFindBusiness,
    handleChangeValue,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const addressFormProps = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AddressFormUI,
    /**
     * Enable to get checkout fields to show/hide fields from Ordering API
     */
    useValidationFileds: true
  }

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}
      <OrderTypeControl
        UIComponent={OrderTypeControlUI}
        orderTypes={orderTypes}
      />
      <br />
      <hr />
      {searchByAddress ? (
        <>
          <input type='text' defaultValue={orderState.options.address?.address || ''} readOnly onClick={() => console.log('focus')} />
          <AddressForm {...addressFormProps} address={null} />
        </>
      ) : (
        <div>
          <span>Select a country: </span>
          <select
            name='country'
            ref={register({
              required: 'Country is required'
            })}
            onChange={(e) => handleChangeValue(e.target)}
          >
            <option value={null}>select a country</option>
            {allListValues?.countries?.length && allListValues?.countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
          <br />

          <span>Select a city: </span>
          <select
            name='cityId'
            ref={register({
              required: 'City is required'
            })}
            onChange={(e) => handleChangeValue(e.target)}
          >
            <option value={null}>select a city</option>
            {allListValues.cities?.length && allListValues.cities.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select><br />

          {allListValues.citiesOptions?.length > 0 && allListValues.citiesOptions?.map(option => (
            <div key={option.id}>
              <span>Select a city option: </span>
              <select
                name='dropdownOptionId'
                ref={register({
                  required: 'City option is required'
                })}
                onChange={(e) => handleChangeValue(e.target)}
              >
                <option value={null}>select a city option</option>
                {allListValues.citiesOptions?.length && allListValues.citiesOptions.map(city => (
                  <option key={city.id} value={city.city_id}>{city.name}</option>
                ))}
              </select><br />
            </div>
          ))}
          {isFormErrors && <i style={{ color: '#c10000' }}>This fields are required</i>}
          <br />
        </div>)}
      <br />
      <button onClick={() => handleFindBusiness()}>Save</button>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
