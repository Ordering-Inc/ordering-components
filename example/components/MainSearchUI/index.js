import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const MainSearchUI = (props) => {
  const {
    countries,
    useOrderTypeControl,
    searchByAddress,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [cities, setCities] = useState([])
  const [isOrderType, setIsOrderType] = useState(useOrderTypeControl)
  const [addressInfo, setAddressInfo] = useState({ address: '', internal_number: '', address_notes: '', zip_code: '' })
  const [currentCountry, setCurrentCountry] = useState('')
  const [currentCity, setCurrentCity] = useState('')
  const [addressErrors, setAddressErrors] = useState(false)

  const onSubmit = values => {
    setAddressInfo({
      ...values
    })
    props.onClickFindBusiness({ ...values, isOrderType })
  }

  const handleOrderType = (val) => {
    setIsOrderType(val)
  }

  const handleChangeCountry = (val) => {
    const country = countries.find(country => Number(country.id) === Number(val))
    setCurrentCountry(country)
    setCurrentCity('')
    setCities(country?.cities)
  }

  const handleChangeCity = (val) => {
    const city = cities.find(city => Number(city.id) === Number(val))
    setCurrentCity(city)
  }

  const handleSaveAddress = () => {
    const isValid = currentCountry?.id && currentCity?.id
    if (isValid) {
      props.onClickFindBusiness({ country: currentCountry.id, city: currentCity.id, isOrderType })
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

      <select value={isOrderType} onChange={(e) => handleOrderType(e.target.value)}>
        <option value>Delivery</option>
        <option value={false}>Pickup</option>
      </select>
      <br />

      <h2>Add Address</h2>

      {searchByAddress ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name='address'
            type='text'
            placeholder='Address'
            ref={register({
              required: 'Address is required'
            })}
          />
          {errors.address && <i style={{ color: '#c10000' }}>{errors.address.message}</i>}
          <br />
          <input
            name='internal_number'
            type='text'
            placeholder='Internal number'
            ref={register({
              required: 'Internal number is required'
            })}
          />
          {errors.internal_number && <i style={{ color: '#c10000' }}>{errors.internal_number.message}</i>}
          <br />
          <input
            name='address_notes'
            type='text'
            placeholder='Address notes'
            ref={register({
              required: 'Address notes is required'
            })}
          />
          {errors.address_notes && <i style={{ color: '#c10000' }}>{errors.address_notes.message}</i>}
          <br />
          <input
            name='zip_code'
            type='text'
            placeholder='Zipcode'
            ref={register({
              required: 'Zipcode is required'
            })}
          />
          {errors.zip_code && <i style={{ color: '#c10000' }}>{errors.zip_code.message}</i>}
          <br />
          <button type='submit'>Save</button>
        </form>
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
          {addressErrors && <i style={{ color: '#c10000' }}>This fields are required</i>}
          <br />
          <button onClick={() => handleSaveAddress()}>Save</button>
        </div>)}

      <br />
      {searchByAddress ? (
        <div>
          {Object.keys(addressInfo).map((info, i) => (
            <span style={{ marginRight: '20px' }} key={i}>{info}:{addressInfo[info]}</span>
          ))}
        </div>
      ) : (
        <div>
          Country: {currentCountry.name}<br />
          city: {currentCity.name}
        </div>
      )}

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
