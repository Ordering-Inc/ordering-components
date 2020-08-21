import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const MenuControl = (props) => {
  const {
    UIComponent
  } = props

  const [timeSelected, setTimeSelected] = useState(null)

  const scheduleTime = ({ open, close }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(open?.hour)}:${checkTime(open?.minute)} - ${checkTime(close?.hour)}:${checkTime(close?.minute)}`
  }

  const onChangeSchedule = (val) => {
    setTimeSelected(scheduleTime(val))
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          timeSelected={timeSelected}
          handleSchedule={onChangeSchedule}
        />
      )}
    </>
  )
}

MenuControl.propTypes = {
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
   * Business, this must be containt all business information
   */
  business: PropTypes.object,
  /**
   * Components types before menu control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after menu control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before menu control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after menu control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

MenuControl.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
