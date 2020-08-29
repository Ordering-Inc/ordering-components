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
  const validDate = (date) =>
    moment(date).isSameOrAfter(moment(), 'day')
      ? moment(date).format('YYYY-MM-DD HH:mm')
      : moment().format('YYYY-MM-DD HH:mm')

  /**
   * This must be containt schedule selected by user
   */
  const [scheduleSelected, setScheduleSelected] = useState(moment(validDate(currentDate)).format('YYYY-MM-DD HH:mm'))

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
   * Used to calculate current hour
   */
  const getHour = () => {
    return moment().minutes() > 30 ? moment().hour() + 1 : moment().hour()
  }

  /**
   * Handler select changes
   * @param {object} param0
   */
  const handleCustomChangeDate = ({ date, time, type }) => {
    if ((date || time) && !(moment(date, 'YYYY-MM-DD').isValid() || moment(time, 'HH:mm').isValid())) {
      return
    }
    if (type === 'asap') {
      const val = isAsap ? null : true
      setIsAsap(val)
    }
    const currDate = moment(validDate(scheduleSelected)).format('YYYY-MM-DD')
    if (date) {
      const diff = moment.duration(moment(date).diff(moment().startOf('day'))).asDays()
      setDatesDiff(parseInt(diff))
    }
    const dateSelected = date ?? currDate
    const timeSelected = time ?? `${getHour()}:00`

    const dateToSend = type === 'asap'
      ? moment().format('YYYY-MM-DD HH:mm')
      : moment(`${dateSelected} ${timeSelected}`).format('YYYY-MM-DD HH:mm')
    setScheduleSelected(moment(dateToSend, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'))
    if (time || type === 'asap') {
      if (!isAsap) {
        const _moment = type === 'asap' ? null : moment(dateToSend).toDate()
        useOrderContext && changeMoment(_moment)
        onChangeMoment(_moment)
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

    let startHour = moment().hour()
    const startMinutes = moment().minutes()

    startHour = startMinutes > 30
      ? moment(moment(scheduleSelected, 'YYYY-MM-DD h:mm').add(1, 'hour').format('HH:mm'), 'HH:mm').hour()
      : startHour

    startHour = datesDiff > 0 || moment(validDate(minDate)).isAfter(moment())
      ? moment(defaultTime, 'HH:mm').hour()
      : startHour

    let _startTime = moment(`${startHour}:00`, 'HH:mm').format('HH:mm')

    for (let i = startHour; i < 24; i++) {
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
    const diff = moment(validDate(maxDate), 'YYYY-MM-DD HH:mm').diff(moment(validDate(minDate), 'YYYY-MM-DD HH:mm'), 'days')

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
          currentDate={scheduleSelected}
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
