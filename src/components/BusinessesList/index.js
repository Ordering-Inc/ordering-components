import React from 'react'
import PropTypes from 'prop-types'
import {
  useBusinesses,
  BUSINESSES_ACTIONS
} from '../../contexts/BussinessesContext'

export const BusinessesList = (props) => {
  const { UIComponent } = props
  const [data, dispatcher] = useBusinesses()

  const handleSearch = (value) => {
    dispatcher({ type: BUSINESSES_ACTIONS.FILT_BY_SEARCH, search: value })
  }

  const handleCategory = (value) => {
    dispatcher({ type: BUSINESSES_ACTIONS.FILT_BY_CATEGORY, category: value })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          search={data.search}
          handleCategory={handleCategory}
          handleSearch={handleSearch}
          time={data.time}
          data={data}
        />
      )}
    </>
  )
}

BusinessesList.proptypes = {
  UIComponent: PropTypes.elementType,
  handleSearch: PropTypes.func,
  handleCategory: PropTypes.func
}
