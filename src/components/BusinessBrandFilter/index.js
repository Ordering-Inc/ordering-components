import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const BusinessBrandFilter = (props) => {
  const {
    brands,
    isEnabledList,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  /**
   * brandList, this must be contain a brands, loading and error to send UIComponent
   */
  const [brandList, setBrandList] = useState({ loading: true, brands: [], error: null })

  /**
   * Function to get brand list from API
   */
  const getBrandList = async () => {
    try {
      setBrandList({ ...brandList, loading: true })

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const response = await fetch(`${ordering.root}/franchises`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setBrandList({
          ...brandList,
          loading: false,
          brands: !isEnabledList ? content?.result : content?.result.filter(brand => brand?.enabled),
          error: null
        })
      } else {
        setBrandList({
          ...brandList,
          loading: false,
          error: content?.result
        })
      }
    } catch (error) {
      setBrandList({
        ...brandList,
        loading: false,
        error: error.message
      })
    }
  }

  useEffect(() => {
    if (brands) {
      setBrandList({
        ...brandList,
        loading: false,
        brands: brands
      })
    } else {
      getBrandList()
    }
  }, [brands])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          brandList={brandList}
        />
      )}
    </>
  )
}

BusinessBrandFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * flag to filter enabled brand list
   */
  isEnabledList: PropTypes.bool,
  /**
   * Array of brand
   */
  brands: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components types before business brand filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business brand filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business brand filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business brand filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessBrandFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
