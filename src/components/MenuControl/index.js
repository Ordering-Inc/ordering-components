import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export const MenuControl = (props) => {
  const {
    maxPreoderDays,
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
    const day = moment(date, 'YYYY-MM-DD').day()
    const lapses = menuSelected?.schedule[day]?.lapses
    setScheduleSelected({
      ...scheduleSelected,
      lapses
    })
    setStartDate(date)
    setDateSelected(moment(date).format('YYYY-MM-DD HH:mm'))
    props.handlerSelectDate(moment(date).format('YYYY-MM-DD HH:mm'))
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
  const formatScheduleTime = (menu) => {
    setMenuSelected(menu)
    const today = moment().day()
    return {
      lapses: menu?.schedule[today]?.lapses,
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

  /**
   * Method to calculate times based in schedule lapses range
   */
  const menuLapsesList = () => {
    const timesList = []
    const lapses = scheduleSelected?.lapses || []
    for (let i = 0; i < lapses.length; i++) {
      let start = `${lapses[i]?.open?.hour}:${lapses[i]?.open?.minute}`
      const end = `${lapses[i]?.close?.hour}:${lapses[i]?.close?.minute}`
      let diff = Math.round(moment.duration(moment(end, 'HH:mm').diff(moment(start, 'HH:mm'))).asHours())
      while (diff > 0) {
        const day = start
        timesList.push(moment(day, 'HH:mm').toDate())
        start = moment(day, 'HH:mm').add(15, 'minutes')
        diff = diff - 0.25
      }
    }
    return timesList
  }

  /**
   * Method to calculate an array of available dates in base with maxPreorderDays
   */
  const futureDaysToShow = () => {
    let futureDays = maxPreoderDays
    let today = moment().toDate()
    const datesToShow = []
    const isDisabledDays = disableDays.every(d => d === false)
    if (disableDays.length && !isDisabledDays) {
      while (futureDays > 0) {
        const date = today
        const day = moment(today).day()
        if (disableDays[day] === false) {
          datesToShow.push(moment(date).toDate())
          futureDays--
        }
        today = moment(moment(today).add(1, 'd')).toDate()
      }
    }
    if (disableDays.length && isDisabledDays) {
      for (let i = 1; i <= maxPreoderDays; i++) {
        datesToShow.push(moment(moment(today).add(i, 'd')).toDate())
      }
    }
    datesToShow.unshift(moment().toDate())
    return datesToShow
  }

  useEffect(() => {
    futureDaysToShow()
  }, [disableDays])

  useEffect(() => {
    generateDatesList()
  }, [])

  return (
    <>
      DATE SELECTED: {dateSelected}
      {UIComponent && (
        <UIComponent
          {...props}
          futureDaysToShow={futureDaysToShow}
          menuLapsesList={menuLapsesList}
          disableDays={disableDays}
          startDate={startDate}
          isDisabledDay={isDisabledDay}
          scheduleSelected={scheduleSelected}
          menuSelected={menuSelected?.id}
          handleMenuSelected={(val) => setScheduleSelected(formatScheduleTime(val))}
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
   * maxPreoderDays, limit days to show
   */
  maxPreoderDays: PropTypes.number,
  /**
   * Business, this must be containt all business information
   */
  business: PropTypes.object,
  /**
   * Handle schedule and menu selected by user
   */
  handleMenuInfo: PropTypes.func,
  /**
   * handlerSelectDate, method to returns a day selected
   */
  handlerSelectDate: PropTypes.func,
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
