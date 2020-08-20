import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../src/components/AddressForm'
import { AddressFormUI } from '../../components/AddressFormUI'

export const MainSearchUI = (props) => {
  const {
    ordering,
    countries,
    useOrderTypeControl,
    searchByAddress,
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

  const { register } = useForm()
  const [cities, setCities] = useState([])
  const [isOrderType, setIsOrderType] = useState(useOrderTypeControl)
  const [currentCountry, setCurrentCountry] = useState('')
  const [currentCity, setCurrentCity] = useState('')
  const [currentCityOption, setCurrentCityOption] = useState('')
  const [addressErrors, setAddressErrors] = useState(false)

  const handleOrderType = (val) => {
    setIsOrderType(val)
  }

  const handleChangeCountry = (val) => {
    const country = countries.find(country => Number(country.id) === Number(val))
    setCurrentCountry(country)
    setCurrentCity('')
    setCurrentCityOption('')
    setCities(country?.cities)
  }

  const handleChangeCity = (val) => {
    const city = cities.find(city => Number(city.id) === Number(val))
    setCurrentCity(city)
  }

  const handleChangeCityOption = (val) => {
    setCurrentCityOption(val)
  }

  const handleSaveAddress = () => {
    const useCityOption = currentCity?.options?.length > 0 ? currentCityOption : true
    const isValid = currentCountry?.id && currentCity?.id && useCityOption
    if (isValid) {
      props.onClickFindBusiness({ city: currentCity.id, city_option_id: currentCityOption, isOrderType })
    }
    setAddressErrors(!isValid)
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

      <select className='order-type-select' value={isOrderType} onChange={(e) => handleOrderType(e.target.value)}>
        <option value>Delivery</option>
        <option value={false}>Pickup</option>
      </select>
      <br />
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
            onChange={(e) => handleChangeCountry(e.target.value)}
          >
            <option defaultValue='asd'>select a country</option>
            {countries?.length && countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
          <br />

          <span>Select a city: </span>
          <select
            name='city'
            ref={register({
              required: 'City is required'
            })}
            onChange={(e) => handleChangeCity(e.target.value)}
          >
            <option>select a city</option>
            {cities?.length && cities.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select><br />

          {currentCity?.options?.length > 0 && currentCity?.options.map(option => (
            <div key={option.id}>
              <span>Select a city option: </span>
              <select
                name='city-option'
                ref={register({
                  required: 'City option is required'
                })}
                onChange={(e) => handleChangeCityOption(e.target.value)}
              >
                <option>select a city option</option>
                {currentCity?.options?.length && currentCity.options.map(city => (
                  <option key={city.id} value={city.city_id}>{city.name}</option>
                ))}
              </select><br />
            </div>
          ))}
          {addressErrors && <i style={{ color: '#c10000' }}>This fields are required</i>}
          <br />
          <button onClick={() => handleSaveAddress()}>Save</button>
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
