import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage moment option behavior without UI component
 */
export const MomentOption = (props) => {
  const {
    minDate,
    maxDate,
    currentDate,
    useOrderContext,
    onChangeMoment,
    UIComponent
  } = props

  const [orderStatus, { changeMoment }] = useOrder()

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

  /**
   * Method to calculate diferrence between 2 dates
   * @param {moment} start
   * @param {moment} end
   */
  const calculateDiffDay = (start, end) => {
    const endVal = end ?? moment()
    return moment.duration(moment(start).diff(moment(endVal).startOf('day'))).asDays()
  }

  // /**
  //  * Method to get time depending on the start time
  //  */
  // const getTimeFormat = (time, today) => {
  //   let hour = Number(time.split(':')[0])
  //   let minute = Number(time.split(':')[1]) + (today ? 15 : 0)
  //   if (minute > 59) {
  //     hour++
  //     minute = minute - 59
  //   }
  //   if (minute >= 0 && minute <= 14) {
  //     return moment(`${hour}:00`, 'HH:mm').format('HH:mm')
  //   }
  //   if (minute >= 15 && minute <= 29) {
  //     return moment(`${hour}:15`, 'HH:mm').format('HH:mm')
  //   }
  //   if (minute >= 30 && minute <= 44) {
  //     return moment(`${hour}:30`, 'HH:mm').format('HH:mm')
  //   }
  //   if (minute >= 45 && minute <= 59) {
  //     return moment(`${hour}:45`, 'HH:mm').format('HH:mm')
  //   }
  // }

  // /**
  //  * Method to get current time formatted
  //  * @param {moment} value
  //  */
  // const currentTimeFormatted = (value) => {
  //   const date = value ?? scheduleSelected ?? minDate
  //   const current = moment(validDate(date))
  //   const now = moment()
  //   return (current.day() !== now.day() || current.hour() >= now.hour()) ? current.format('HH:mm') : now.format('HH:mm')
  // }

  /**
   * This must be containt schedule selected by user
   */
  const _currentDate = useOrderContext ? orderStatus.options.moment : currentDate
  const [scheduleSelected, setScheduleSelected] = useState(_currentDate ? moment(validDate(_currentDate)).format('YYYY-MM-DD HH:mm') : null)

  /**
   * Flag to know if user select asap time
   */
  const [isAsap, setIsAsap] = useState(!scheduleSelected)

  /**
   * Arrays for save hours and dates lists
   */
  const [hoursList, setHourList] = useState([])
  const [datesList, setDatesList] = useState([])

  const [dateSelected, setDateSelected] = useState(moment(validDate(_currentDate)).format('YYYY-MM-DD'))
  const [timeSelected, setTimeSelected] = useState(null)

  const handleChangeDate = (date) => {
    if (!date || date === dateSelected) return
    setDateSelected(date)
    setTimeSelected(null)
    setIsAsap(false)
  }

  const handleChangeTime = (time) => {
    if (!time || time === timeSelected) return
    const _moment = moment(`${dateSelected} ${time}`, 'YYYY-MM-DD HH:mm').toDate()
    if (!useOrderContext) {
      setTimeSelected(time)
      setIsAsap(false)
    } else {
      changeMoment(_moment)
    }
    onChangeMoment && onChangeMoment(_moment)
  }

  const handleAsap = () => {
    if (isAsap) return
    if (useOrderContext) {
      changeMoment(null)
    } else {
      setIsAsap(true)
    }
    onChangeMoment && onChangeMoment(null)
  }

  useEffect(() => {
    if (orderStatus.loading) return
    if (useOrderContext) {
      if (orderStatus.options?.moment) {
        const _currentDate = moment.utc(validDate(orderStatus.options.moment)).local()
        setScheduleSelected(_currentDate.format('YYYY-MM-DD HH:mm'))
        setDateSelected(_currentDate.format('YYYY-MM-DD'))
        setTimeSelected(_currentDate.format('HH:mm'))
        isAsap && setIsAsap(false)
      } else {
        dateSelected !== moment().format('YYYY-MM-DD') && setDateSelected(moment().format('YYYY-MM-DD'))
        timeSelected !== null && setTimeSelected(null)
        scheduleSelected !== null && setScheduleSelected(null)
        !isAsap && setIsAsap(true)
      }
    } else {
      scheduleSelected !== null && setScheduleSelected(null)
      !isAsap && setIsAsap(true)
    }
  }, [orderStatus])

  useEffect(() => {
    if (!scheduleSelected) {
      return
    }
    const selected = moment(scheduleSelected, 'YYYY-MM-DD HH:mm')
    const now = moment()
    const secondsDiff = selected.diff(now, 'seconds')
    if (secondsDiff <= 0) {
      handleAsap()
      return
    }
    const checkTime = setTimeout(() => {
      handleAsap()
    }, secondsDiff * 1000)
    return () => {
      clearTimeout(checkTime)
    }
  }, [scheduleSelected])

  useEffect(() => {
    if (isAsap) {
      setDateSelected(datesList[0])
      setTimeSelected(null)
    }
  }, [isAsap])

  /**
   * generate a list of available hours
   */
  const generateHourList = () => {
    const hoursAvailable = []

    const isToday = dateSelected === moment().format('YYYY-MM-DD')
    const isLastDate = dateSelected === moment(maxDate).format('YYYY-MM-DD')
    const now = new Date()
    for (let hour = 0; hour < 24; hour++) {
      /**
       * Continue if is today and hour is smaller than current hour
       */
      if (isToday && hour < now.getHours()) continue
      /**
       * Continue if is max date and hour is greater than max date hour
       */
      if (isLastDate && hour > maxDate.getHours()) continue
      for (let minute = 0; minute < 59; minute += 15) {
        /**
         * Continue if is today and hour is equal to current hour and minutes is smaller than current minute
         */
        if (isToday && hour === now.getHours() && minute <= now.getMinutes()) continue
        /**
         * Continue if is today and hour is equal to max date hour and minutes is greater than max date minute
         */
        if (isLastDate && hour === maxDate.getHours() && minute > maxDate.getMinutes()) continue
        const _hour = hour < 10 ? `0${hour}` : hour
        const startMinute = minute < 10 ? `0${minute}` : minute
        const endMinute = (minute + 14) < 10 ? `0${minute + 14}` : minute + 14
        const startTime = `${_hour}:${startMinute}`
        const endTime = `${_hour}:${endMinute}`
        hoursAvailable.push({
          startTime,
          endTime
        })
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
      datesList.push(moment(validDate(minDate)).add(i, 'd').format('YYYY-MM-DD'))
    }
    setDatesList(datesList)
  }

  useEffect(() => {
    if (!dateSelected) return
    generateHourList()
  }, [dateSelected])

  useEffect(() => {
    generateDatesList()
  }, [maxDate, minDate])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          isAsap={isAsap}
          minDate={validDate(minDate)}
          maxDate={validDate(maxDate)}
          dateSelected={dateSelected}
          timeSelected={timeSelected}
          handleChangeDate={handleChangeDate}
          handleChangeTime={handleChangeTime}
          datesList={datesList}
          hoursList={hoursList}
          handleAsap={handleAsap}
        />
      )}
    </>
  )
}

MomentOption.propTypes = {
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
  maxDate: PropTypes.instanceOf(Date).isRequired,
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
