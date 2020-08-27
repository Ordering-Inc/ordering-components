import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export const MenuControl = (props) => {
  const {
    UIComponent
  } = props

  /**
   * This must be contain business schedule selected
   */
  const [scheduleSelected, setScheduleSelected] = useState(null)

  /**
   * Menu selected by user
   */

  const [menuSelected, setMenuSelected] = useState(null)

  /**
   * This must be contain date selected (datepicker)
   */
  const [dateSelected, setDateSelected] = useState(null)

  /**
   * Date used for component datePicker to set start date
   */
  const [startDate, setStartDate] = useState(null)

  /**
   * Array that must be contain a list of dates
   */
  const [datesList, setDatesList] = useState([])

  /**
   * Have a list of business schedules disabled
   */
  const disableDays = menuSelected?.schedule?.map((item, i) => !item.enabled && i) || []

  /**
   * method used on datePicker component to disable days of week
   * @param {string} date
   */
  const isDisabledDay = date => {
    const day = moment(date, 'YYYY-MM-DD').day()
    return disableDays.every(number => number !== day)
  }

  /**
   * handler for set date selected by user
   * @param {string} date
   */
  const onDateSelected = (date) => {
    setStartDate(date)
    setDateSelected(moment(date).format('YYYY-MM-DD HH:mm'))
  }

  /**
   * Send to parent component Menu info and date selected
   */
  const handlerMenuInfo = () => {
    const isValid = scheduleSelected?.menuId && dateSelected
    if (isValid) {
      props.handleMenuInfo({
        menuId: scheduleSelected?.menuId,
        date: dateSelected
      })
    }
  }

  /**
   * Method to format schedule selected by user
   * @param {object} param0
   */
  const formatScheduleTime = ({ lapses, day, menu }) => {
    setMenuSelected(menu)
    return {
      minDate: moment().day(day).format('YYYY-MM-DD'),
      maxDate: moment().day(6).format('YYYY-MM-DD'),
      lapses,
      menuId: menu.id
    }
  }

  /**
   * Generate a list of dates
   */
  const generateDatesList = () => {
    const list = []
    const _start = moment().format('YYYY-MM-DD')
    const _end = moment().day(30).format('YYYY-MM-DD')
    const diff = moment(_end, 'YYYY-MM-DD HH:mm').diff(moment(_start, 'YYYY-MM-DD HH:mm'), 'days')

    for (let i = 0; i <= diff; i++) {
      list.push({
        key: `${i}`,
        date: moment(_start).add(i, 'd').format('YYYY-MM-DD')
      })
    }

    setDatesList(list)
  }

  useEffect(() => {
    generateDatesList()
  }, [])

  return (
    <>
      DATE SELECTED: {dateSelected}
      {UIComponent && (
        <UIComponent
          {...props}
          startDate={startDate}
          isDisabledDay={isDisabledDay}
          scheduleSelected={scheduleSelected}
          handleSchedule={(val) => setScheduleSelected(formatScheduleTime(val))}
          handleDate={onDateSelected}
          onSendMenuInfo={handlerMenuInfo}
          // datesList={datesList}
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
   * Handle schedule and menu selected by user
   */
  handleMenuInfo: PropTypes.func,
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
