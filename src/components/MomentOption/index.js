import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export const MomentOption = (props) => {
  const {
    minDate,
    maxDate,
    currentDate,
    UIComponent
  } = props

  /**
   * Set Current time
   */
  const [currentDateSelected, setCurrentDateSelected] = useState(moment(currentDate).format('YYYY-MM-DD hh:mm A'))

  /**
   * Array that contains a list of available hours
   */
  const [hoursList, setHourList] = useState([])
  const [datesList, setDatesList] = useState([])

  /**
   * Difference between two o more dates
   */
  const [datesDiff, setDatesDiff] = useState(0)

  /**
   * Event to handle custom behavior when change date
   */
  const handleCustomChangeDate = (date) => {
    const currentTime = moment(currentDate).format('YYYY-MM-DD hh:mm A')
    const diff = moment.duration(moment(date).diff(moment().startOf('day'))).asDays()
    parseInt(diff) === 0 ? setCurrentDateSelected(currentTime) : setCurrentDateSelected(date)
    setDatesDiff(parseInt(diff))
  }

  /**
   * Method to generate an array list of available hours
   */
  const generateHourList = () => {
    const defaultTime = moment('12:00 AM', 'HH:mm A').format('LTS')
    let startHour = moment().hour()
    const startMinutes = moment().minutes()

    startHour = startMinutes > 30 ? moment(currentDateSelected, 'YYYY-MM-DD HH:mm A').add(1, 'hour').hour() : startHour
    startHour = datesDiff > 0 ? moment(defaultTime, 'HH:mm A').hour() : startHour

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
    setHourList(hoursAvailable)
  }

  /**
   * Method to generate an array list of availables dates
   */
  const generateDatesList = () => {
    const datesList = []
    const diff = moment(maxDate, 'YYYY-MM-DD hh:mm A').diff(moment(minDate, 'YYYY-MM-DD hh:mm A'), 'days')

    for (let i = 0; i <= diff; i++) {
      datesList.push({
        key: `${i}`,
        date: moment(minDate).add(i, 'd').format('YYYY-MM-DD')
      })
    }
    setDatesList(datesList)
  }

  useEffect(() => {
    generateHourList()
    generateDatesList()
  }, [datesDiff, currentDateSelected])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          minDate={minDate}
          maxDate={maxDate}
          currentDate={currentDateSelected}
          datesList={datesList}
          hoursList={hoursList}
          handleCustomChangeDate={handleCustomChangeDate}
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
  ordering: PropTypes.object,
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * minDate, this must be contains a custom date selected
   */
  minDate: PropTypes.instanceOf(Date),
  /**
   * maxDate, this must be contains a custom date selected
   */
  maxDate: PropTypes.instanceOf(Date),
  /**
   * currentDate, this must be contains a custom date selected
   */
  currentDate: PropTypes.instanceOf(Date),
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
