import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../../src/contexts/OrderContext'

export const MainSearch = (props) => {
  const {
    ordering,
    UIComponent
  } = props
  const [{ order }] = useOrder()

  /**
   * Object to save all arrays to use
   */
  const [allListValues, setAllListValues] = useState({ countries: [], cities: [], citiesOptions: [] })
  /**
   * Object to save current values about country selection
   */
  const [countryValues, setCountryValues] = useState({ cityId: null, dropdownOptionId: null, orderType: order.type })
  /**
   * Handle form error
   */
  const [countryFormErrors, setCountryFormErrors] = useState(false)
  /**
   * Method to get countries from SDK
   */
  const getContries = async () => {
    try {
      const { response } = await ordering.countries().get()
      setAllListValues({ ...allListValues, countries: response?.data?.result })
    } catch (error) {
      console.log(error)
    }
  }
  /**
   * Method to handle change values when searchByAddres is false
   * @param {object} e
   */
  const onChangeValue = ({ name, value }) => {
    switch (name) {
      case 'country': {
        const country = allListValues?.countries.find(country => Number(country.id) === Number(value))
        setAllListValues({ ...allListValues, cities: country?.cities })
        setCountryValues({
          ...countryValues,
          cityId: null
        })
        break
      }
      case 'cityId': {
        const city = allListValues.cities.find(city => Number(city.id) === Number(value))
        setAllListValues({ ...allListValues, citiesOptions: city?.options })
        setCountryValues({
          ...countryValues,
          cityId: value,
          dropdownOptionId: null
        })
        break
      }
      case 'dropdownOptionId': {
        setCountryValues({
          ...countryValues,
          dropdownOptionId: value
        })
        break
      }
    }
  }
  /**
   * Method to valid if all countries values are valid
   */
  const onClickFindBusiness = () => {
    const isCityOption = allListValues.citiesOptions.length > 0 ? !!countryValues.dropdownOptionId : true
    const isValid = countryValues.cityId && isCityOption
    if (isValid) {
      console.log('VALID', countryValues)
    }
    setCountryFormErrors(!isValid)
  }

  useEffect(() => {
    getContries()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          allListValues={allListValues}
          currentValues={countryValues}
          isFormErrors={countryFormErrors}
          handleChangeValue={onChangeValue}
          handleFindBusiness={onClickFindBusiness}
        />
      )}
    </>
  )
}

MainSearch.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * searchByAddress is used to validate if use address list and address form or dropdown options
   */
  searchByAddress: PropTypes.bool,
  /**
   * Components types before main search
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after main search
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before main search
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after main search
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

MainSearch.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
