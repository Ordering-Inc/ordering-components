import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useOrder } from '../../contexts/OrderContext'

export const MomentOption = (props) => {
  const {
    minDate,
    maxDate,
    currentDate,
    useOrderContext,
    onChangeMoment,
    UIComponent
  } = props

  const [, { changeMoment }] = useOrder()

  /**
   * Method to valid if a date is same of after current date
   * @param {String} date
   */
  const validDate = (date) => {
    if (!date) return
    return moment(date).isSameOrAfter(moment(), 'day')
      ? moment(date).format('YYYY-MM-DD HH:mm')
      : moment().format('YYYY-MM-DD HH:mm')
  }

  const calculateDiffDay = (start, end) => {
    const endVal = end ?? moment()
    return moment.duration(moment(start).diff(moment(endVal).startOf('day'))).asDays()
  }

  const getTimeFormat = (time) => {
    const hour = Number(time.split(':')[0])
    const minute = Number(time.split(':')[1])
    if (minute >= 0 && minute <= 14) {
      return moment(`${hour}:00`, 'HH:mm').format('HH:mm')
    }
    if (minute >= 15 && minute <= 29) {
      return moment(`${hour}:15`, 'HH:mm').format('HH:mm')
    }
    if (minute >= 30 && minute <= 44) {
      return moment(`${hour}:30`, 'HH:mm').format('HH:mm')
    }
    if (minute >= 45 && minute <= 59) {
      return moment(`${hour}:45`, 'HH:mm').format('HH:mm')
    }
  }

  const currentTimeFormatted = (value) => {
    const date = value ?? minDate
    return moment(validDate(date)).hour() >= moment().hour() ? moment(validDate(date)).format('HH:mm') : moment().format('HH:mm')
  }

  /**
   * This must be containt schedule selected by user
   */
  const [scheduleSelected, setScheduleSelected] = useState(currentDate ? moment(validDate(currentDate)).format('YYYY-MM-DD HH:mm') : null)
  // const [scheduleSelected, setScheduleSelected] = useState(null)

  /**
   * Flag to know if user select asap time
   */
  const [isAsap, setIsAsap] = useState(null)

  /**
   * Arrays for save hours and dates lists
   */
  const [hoursList, setHourList] = useState([])
  const [datesList, setDatesList] = useState([])

  /**
   * Save the difference between dates
   */
  const [datesDiff, setDatesDiff] = useState(0)

  /**
   * Handler select changes
   * @param {object} param0
   */
  const handleCustomChangeDate = ({ date, time, type }) => {
    if ((date || time) && !(moment(date, 'YYYY-MM-DD').isValid() || moment(time, 'HH:mm').isValid())) {
      return
    }
    if (type === 'asap') {
      setIsAsap(!isAsap)
    }
    const currDate = moment(validDate(scheduleSelected)).format('YYYY-MM-DD')
    if (date) {
      setDatesDiff(parseInt(calculateDiffDay(date)))
    }
    const dateSelected = date ?? currDate
    const timeSelected = time ?? (moment(validDate(scheduleSelected)).hour() >= moment().hour() ? moment(validDate(scheduleSelected)).format('HH:mm') : moment().format('HH:mm'))

    const dateToSend = type === 'asap'
      ? moment().format('YYYY-MM-DD HH:mm')
      : moment(`${dateSelected} ${timeSelected}`).format('YYYY-MM-DD HH:mm')

    setScheduleSelected(moment(dateToSend, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'))

    if (time || type === 'asap') {
      if (!isAsap) {
        const _moment = type === 'asap' ? null : moment(dateToSend).toDate()
        useOrderContext && changeMoment(_moment)
        onChangeMoment && onChangeMoment(_moment)
      }
    }
  }

  /**
   * generate a list of available hours
   */
  const generateHourList = () => {
    const hoursAvailable = []
    let iterator = 0
    const defaultTime = moment('12:00 AM', 'h:mm A').format('HH:mm')
    const endHourTime = moment(moment(validDate(maxDate)).add(-1, 'minute').format('HH:mm'), 'HH:mm').format('HH:mm')

    let startHour = currentTimeFormatted()

    startHour = datesDiff > 0 || parseInt(calculateDiffDay(validDate(minDate)))
      ? defaultTime
      : startHour

    startHour = getTimeFormat(moment(startHour, 'HH:mm').format('HH:mm'))

    let _startTime = moment(startHour, 'HH:mm').format('HH:mm')

    for (let i = moment(startHour, 'HH:mm').hour(); i < 24; i++) {
      for (let j = 0; j < 4; j++) {
        if (!iterator) {
          hoursAvailable.push({
            key: '0',
            startTime: _startTime,
            endTime: moment(_startTime, 'HH:mm').add(14, 'minutes').format('HH:mm')
          })
        } else {
          const startTime = moment(_startTime, 'HH:mm').add(15, 'minutes').format('HH:mm')
          const endTime = moment(startTime, 'HH:mm').add(14, 'minutes').format('HH:mm')
          hoursAvailable.push({
            key: `${i}${j}`,
            startTime,
            endTime
          })
          _startTime = startTime
          if (
            (moment(scheduleSelected).format('YYYY-MM-DD') === moment(validDate(maxDate)).format('YYYY-MM-DD') &&
              endTime >= endHourTime) ||
              endTime >= '23:59'
          ) {
            setHourList(hoursAvailable)
            return
          }
        }
        iterator++
      }
    }
    setHourList(hoursAvailable)
  }

  /**
   * Generate a list of available dates
   */
  const generateDatesList = () => {
    const datesList = []
    const diff = parseInt(calculateDiffDay(validDate(maxDate)), validDate(minDate))

    for (let i = 0; i < diff + 1; i++) {
      datesList.push({
        key: `${i}`,
        date: moment(validDate(minDate)).add(i, 'd').format('YYYY-MM-DD')
      })
    }
    setDatesList(datesList)
  }

  useEffect(() => {
    generateHourList()
    generateDatesList()
  }, [datesDiff, scheduleSelected])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isAsap={isAsap}
          minDate={validDate(minDate)}
          maxDate={validDate(maxDate)}
          currentDate={scheduleSelected ? moment(scheduleSelected).format('YYYY-MM-DD') : null}
          currentHour={scheduleSelected ? moment(currentTimeFormatted(scheduleSelected), 'HH:mm').format('HH:mm') : null}
          datesList={datesList}
          hoursList={hoursList}
          getTimeFormat={getTimeFormat}
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
  ordering: PropTypes.object.isRequired,
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
   * currentDate, this must be contains a custom date selected
   */
  useOrderContext: PropTypes.bool,
  /**
   * Method to return moment selection
   */
  onChangeMoment: PropTypes.func,
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
  useOrderContext: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
