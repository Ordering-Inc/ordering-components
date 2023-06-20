import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../../contexts/ApiContext'

export const CountryList = (props) => {
  const {
    UIComponent,
    isSearchByName,
    countryCode,
    filterList,
    handleChangeFilterList,
    onClose,
    handleChangeCode
  } = props
  const [ordering] = useApi()

  const [countriesState, setCountriesState] = useState({ countries: [], loading: true, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [searchValue, setSearchValue] = useState(null)
  const [code, setCode] = useState(countryCode)

  const rex = new RegExp(/^[A-Za-z0-9\s]+$/g)

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = async () => {
    await getBusinessList()
    handleChangeCode(code)
    onClose && onClose()
  }

  /**
   * Method to get businessList
   */
  const getBusinessList = async () => {
    if (!code) {
      handleChangeFilterList({ ...filterList, businessIds: null })
      return
    }

    try {
      setActionState({ ...actionState, loading: true })
      const { content: { error, result } } = await ordering.businesses().asDashboard().get({ headers: { 'X-Country-Code-X': code } })
      if (!error) {
        const _businessIds = result.map(business => business.id)
        handleChangeFilterList({ ...filterList, businessIds: _businessIds })
      }
      setActionState({ loading: false, error: error ? result : null })
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  /**
   * Method to get the countries from API
   */
  const getCountries = async () => {
    try {
      setCountriesState({ ...countriesState, loading: true })
      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        const isSpecialCharacter = rex.test(searchValue)
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: !isSpecialCharacter ? `%${searchValue}%` : encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }
      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const fetchEndpoint = where
        ? ordering.countries().where(where)
        : ordering.countries()
      const { content: { error, result } } = await fetchEndpoint.get()
      if (!error) {
        setCountriesState({ ...countriesState, loading: false, countries: result })
      } else {
        setCountriesState({ ...countriesState, loading: false, error: result })
      }
    } catch (err) {
      setCountriesState({ ...countriesState, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    getCountries()
  }, [searchValue])

  useEffect(() => {
    if (!searchValue && !countriesState?.loading && countriesState?.countries?.length <= 1) {
      onClose && onClose()
    }
  }, [searchValue, countriesState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          countriesState={countriesState}
          onSearch={setSearchValue}
          handleClickFilterButton={handleClickFilterButton}
          code={code}
          setCode={setCode}
          actionState={actionState}
        />
      )}
    </>
  )
}

CountryList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before place list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after place list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after place list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CountryList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
