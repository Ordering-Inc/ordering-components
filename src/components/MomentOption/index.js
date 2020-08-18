import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export const MomentOption = (props) => {
  const {
    UIComponent
  } = props

  /**
   * Current local time
   */
  const currentDate = moment().format('YYYY-MM-DD')
  const currentTime = moment().format('HH:mm A')

  /**
   * Array that contains a list of available hours
   */
  const [minHoursList, setMinHourList] = useState([])
  const [minDatesList, setMinDatesList] = useState([])

  /**
   * Array that contains a list of available dates
   */
  const [maxHoursList, setMaxHourList] = useState([])
  const [maxDatesList, setMaxDatesList] = useState([])

  /**
   * Min Date selected by user
   */
  const [minSelectDate, setMinSelectDate] = useState({ key: '0', date: currentDate })
  const [minSelectedTime, setMinSelectedTime] = useState({ key: '0', startTime: currentTime, endTime: currentTime })

  /**
   * Max Date selected by user
   */
  const [maxSelectDate, setMaxSelectDate] = useState({ key: '0', date: currentDate })
  const [maxSelectedTime, setMaxSelectedTime] = useState({ key: '0', startTime: currentTime, endTime: currentTime })

  /**
   * Difference between two o more dates
   */
  const [minDatesDiff, setMinDatesDiff] = useState(0)
  const [maxDatesDiff, setMaxDatesDiff] = useState(0)

  /**
   * Event to handle dates change
   */
  const onHandleDateChange = (key, isMaxChange = false) => {
    const list = isMaxChange ? maxDatesList : minDatesList
    const dateSelected = list.find(date => date.key === key)
    const diff = moment.duration(moment(dateSelected.date).diff(moment().startOf('day'))).asDays()

    if (isMaxChange) {
      setMaxSelectDate(dateSelected)
      setMaxDatesDiff(diff)
    } else {
      setMinSelectDate(dateSelected)
      setMinDatesDiff(diff)
    }
  }

  /**
   * Event to handle hours change
   */
  const onHandleHourChange = (key, isMaxChange = false) => {
    const list = isMaxChange ? maxHoursList : minHoursList
    const hourSelected = list.find(hour => hour.key === key)

    isMaxChange ? setMaxSelectedTime(hourSelected) : setMinSelectedTime(hourSelected)
  }

  /**
   * Event to handle ASAP change
   */
  const onHandleASAPChange = (e) => {
    setMinDatesDiff(0)
    setMaxDatesDiff(0)

    setMinSelectDate({ key: '0', date: currentDate })
    setMinSelectedTime({ key: '0', startTime: currentTime, endTime: currentTime })

    setMaxSelectDate({ key: '0', date: currentDate })
    setMaxSelectedTime({ key: '0', startTime: currentTime, endTime: currentTime })
  }

  /**
   * Method to generate an array list of available hours
   */
  const generateHourList = (dateDiff, type = '') => {
    const defaultTime = moment('12:00 AM', 'HH:mm A').format('LTS')

    let startHour = moment(currentTime, 'HH:mm A').hour()
    const startMinutes = moment(currentTime, 'HH:mm A').minutes()

    startHour = startMinutes > 30 ? moment(currentTime, 'HH:mm A').add(1, 'hour').hour() : startHour

    startHour = dateDiff > 0 ? moment(defaultTime, 'HH:mm A').hour() : startHour

    let startSelectedTime = moment(`${startHour}:00`, 'hh:mm A').format('LTS')

    const hoursAvailable = []
    let count = 0

    for (let i = startHour; i < 24; i++) {
      for (let j = 0; j < 4; j++) {
        if (!count) {
          hoursAvailable.push({
            key: '0',
            startTime: startSelectedTime,
            endTime: moment(startSelectedTime, 'hh:mm A').add(30, 'minutes').format('LTS')
          })
        } else {
          const startTime = moment(startSelectedTime, 'hh:mm A').add(15, 'minutes').format('LTS')
          const endTime = moment(startTime, 'hh:mm A').add(30, 'minutes').format('LTS')
          hoursAvailable.push({
            key: `${i}${j}`,
            startTime,
            endTime
          })
          startSelectedTime = startTime
          if (moment(endTime, ['hh:mm A']).format('hh:mm A') === '12:00 AM') {
            break
          }
        }
        count++
      }
    }
    type === 'min' ? setMinHourList(hoursAvailable) : setMaxHourList(hoursAvailable)
  }

  /**
   * Method to generate an array list of dates in future
   */
  const generateDatesList = (type = '') => {
    const datesList = []

    for (let i = 0; i < 30; i++) {
      datesList.push({
        key: `${i}`,
        date: moment().add(i, 'd').format('YYYY-MM-DD')
      })
    }
    type === 'min' ? setMinDatesList(datesList) : setMaxDatesList(datesList)
  }

  useEffect(() => {
    generateHourList(minDatesDiff, 'min')
    generateDatesList('min')
  }, [minDatesDiff, minSelectDate, minSelectedTime])

  useEffect(() => {
    generateHourList(maxDatesDiff, 'max')
    generateDatesList('max')
  }, [maxDatesDiff, maxSelectDate, maxSelectedTime])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleDateChange={onHandleDateChange}
          handleHourChange={onHandleHourChange}
          handleASAPChange={onHandleASAPChange}
          minSelectDate={minSelectDate}
          minDatesList={minDatesList}
          minSelectedTime={minSelectedTime}
          minHoursList={minHoursList}
          maxSelectDate={maxSelectDate}
          maxDatesList={maxDatesList}
          maxSelectedTime={maxSelectedTime}
          maxHoursList={maxHoursList}
        />
      )}
    </>
  )
}

MomentOption.propTypes = {
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
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

MomentOption.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
