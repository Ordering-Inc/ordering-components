import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const MainSearch = (props) => {
  const {
    ordering,
    UIComponent
  } = props

  const [countries, setcountries] = useState([])

  const handleFindBusiness = (e) => {
    console.log(e)
  }

  const getContries = async () => {
    try {
      const { response } = await ordering.countries().get()
      setcountries(response?.data?.result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContries()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          countries={countries}
          onClickFindBusiness={handleFindBusiness}
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
   * useOrderTypeControl is used for enable/disable order type control
   */
  useOrderTypeControl: PropTypes.bool,
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
