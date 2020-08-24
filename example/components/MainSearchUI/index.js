import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../src/components/AddressForm'
import { AddressFormUI } from '../../components/AddressFormUI'

import { useOrder, ORDER_ACTIONS } from '../../../src/contexts/OrderContext'
import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { OrderTypeControlUI } from '../../components/OrderTypeControlUI'

export const MainSearchUI = (props) => {
  const { register } = useForm()
  const [, dispatchOrder] = useOrder()

  useEffect(() => {
    dispatchOrder({ type: ORDER_ACTIONS.CHANGE_BUSINESS, business: { id: 41, slug: 'mcbonalds' } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 111, quantity: 1 } })
    dispatchOrder({ type: ORDER_ACTIONS.ADD_PRODUCT, product: { id: 1296, quantity: 1 } })
  }, [])

  const orderTypes = [1, 2, 3, 4, 5]

  const {
    ordering,
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
        <AddressForm {...addressFormProps} address={null} />
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
          <button onClick={() => handleFindBusiness()}>Save</button>
        </div>)}

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
