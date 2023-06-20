import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const Schedule = (props) => {
  const {
    UIComponent,
    scheduleList,
    handleChangeScheduleState
  } = props

  const [scheduleState, setScheduleState] = useState([])
  const [isConflict, setIsConflict] = useState(false)
  const [isTimeChangeError, setIsTimeChangeError] = useState(false)
  const [addScheduleTime, setAddScheduleTime] = useState({
    open: { hour: 0, minute: 0 },
    close: { hour: 23, minute: 59 }
  })
  const [openAddSchedule, setOpenAddSchedule] = useState({})
  const [selectedCopyDays, setSelectedCopyDays] = useState([])

  /**
   * Clean selectedCopyDays
   */
  const cleanSelectedCopyDays = () => setSelectedCopyDays([])

  /**
   * Method to covert into minutes
   */
  const convertMinutes = ({ hour, minute }) => {
    return hour * 60 + minute
  }

  /**
   * Method to check contain conflict
   */
  const isCheckConflict = (lapses, newSchedule, index) => {
    const openNew = newSchedule.open.hour * 60 + newSchedule.open.minute
    const closeNew = newSchedule.close.hour * 60 + newSchedule.close.minute
    for (let i = 0; i < lapses.length; i++) {
      if (i !== index) {
        const openOld = lapses[i].open.hour * 60 + parseInt(lapses[i].open.minute / 15) * 15
        const closeOld = lapses[i].close.hour * 60 + parseInt(lapses[i].close.minute / 15) * 15

        if (openNew < openOld && closeNew > closeOld) return true
        if (openNew < openOld && closeNew > openOld) return true
        if (openNew > openOld && closeNew < closeOld) return true
        if (openNew < closeOld && closeNew > closeOld) return true
        if (closeNew === closeOld || openNew === openOld) return true
      }
    }

    return false
  }

  /**
   * Method to control the schedule
   */
  const handleEnabledSchedule = (daysOfWeekIndex, checked) => {
    const _schedule = [...scheduleState]
    _schedule[daysOfWeekIndex].enabled = checked
    setScheduleState(_schedule)
  }

  /**
   * Method to change the schedule time on the week day
   * @param {String} changeTime change time
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} lapseIndex lapse no
   * @param {Boolean} isOpen open or close
   */
  const handleChangeScheduleTime = (changeTime, daysOfWeekIndex, lapseIndex, isOpen) => {
    const _schedule = [...scheduleState]
    const currentLapses = [..._schedule[daysOfWeekIndex].lapses]

    const hour = parseInt(changeTime.split(':')[0])
    const minute = parseInt(changeTime.split(':')[1])

    let changeScheduleTime
    let _isTimeChangeError = false
    if (isOpen) {
      _isTimeChangeError = convertMinutes({ hour, minute }) >= convertMinutes(currentLapses[lapseIndex].close)
      if (_isTimeChangeError) {
        setIsTimeChangeError(true)
      } else {
        changeScheduleTime = {
          open: {
            hour: hour,
            minute: minute
          },
          close: currentLapses[lapseIndex].close
        }
      }
    } else {
      _isTimeChangeError = convertMinutes(currentLapses[lapseIndex].open) >= convertMinutes({ hour, minute })
      if (_isTimeChangeError) {
        setIsTimeChangeError(true)
      } else {
        changeScheduleTime = {
          open: currentLapses[lapseIndex].open,
          close: {
            hour: hour,
            minute: minute
          }
        }
      }
    }

    if (!_isTimeChangeError) {
      const conflict = isCheckConflict(currentLapses, changeScheduleTime, lapseIndex)
      if (conflict) {
        setIsConflict(true)
      } else {
        _schedule[daysOfWeekIndex].lapses[lapseIndex] = changeScheduleTime
        _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
        setScheduleState(_schedule)
      }
    }
  }

  /**
   * Method to delete the schedule time on the week day
   * @param {Number} daysOfWeekIndex week day
   * @param {Number} index lapse index
   */
  const handleDeleteSchedule = (daysOfWeekIndex, index) => {
    const _schedule = [...scheduleState]
    _schedule[daysOfWeekIndex].lapses.splice(index, 1)
    setScheduleState(_schedule)
  }

  const handleOpenAddSchedule = (daysOfWeekIndex) => {
    setAddScheduleTime({
      open: { hour: 0, minute: 0 },
      close: { hour: 23, minute: 59 }
    })
    setOpenAddSchedule({
      [daysOfWeekIndex]: true
    })
  }

  /**
   * Method to change the add schedule time
   * @param {String} changeTime change time
   * @param {Boolean} isOpen open or close
   */
  const handleChangeAddScheduleTime = (changeTime, isOpen) => {
    const hour = parseInt(changeTime.split(':')[0])
    const minute = parseInt(changeTime.split(':')[1])
    let _isTimeChangeError = false
    if (isOpen) {
      _isTimeChangeError = convertMinutes({ hour, minute }) >= convertMinutes(addScheduleTime.close)
      if (_isTimeChangeError) {
        setIsTimeChangeError(true)
      } else {
        setAddScheduleTime({
          ...addScheduleTime,
          open: { hour: hour, minute: minute }
        })
      }
    } else {
      _isTimeChangeError = convertMinutes(addScheduleTime.open) >= convertMinutes({ hour, minute })
      if (_isTimeChangeError) {
        setIsTimeChangeError(true)
      } else {
        setAddScheduleTime({
          ...addScheduleTime,
          close: { hour: hour, minute: minute }
        })
      }
    }
  }

  /**
   * Method to add new schedule on the week day
   * @param {Nuumber} daysOfWeekIndex week day
   */
  const handleAddSchedule = (daysOfWeekIndex) => {
    const _schedule = [...scheduleState]
    const currentLapses = [..._schedule[daysOfWeekIndex].lapses]
    const conflict = isCheckConflict(currentLapses, addScheduleTime, null)

    if (conflict) {
      setIsConflict(true)
    } else {
      _schedule[daysOfWeekIndex].lapses.push(addScheduleTime)
      _schedule[daysOfWeekIndex].lapses.sort((a, b) => convertMinutes(a.open) - convertMinutes(b.open))
      setScheduleState(_schedule)
      setOpenAddSchedule({
        [daysOfWeekIndex]: false
      })
    }
  }

  /**
   * Method to copy times
   * @param {Number} index selected index
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleSelectCopyTimes = (index) => {
    const _selectedCopyDays = selectedCopyDays.includes(index)
      ? selectedCopyDays.filter(day => day !== index)
      : [...selectedCopyDays, index]
    setSelectedCopyDays(_selectedCopyDays)
  }
  /**
   * Method to apply copy times
   * @param {Number} daysOfWeekIndex index of week days
   */
  const handleApplyScheduleCopyTimes = (daysOfWeekIndex) => {
    const _schedule = scheduleState.map((option, index) => {
      if (selectedCopyDays.includes(index)) {
        const lapses = [...scheduleState[daysOfWeekIndex].lapses]
        const original = {
          enabled: scheduleState[daysOfWeekIndex].enabled,
          lapses: lapses
        }
        return original
      }
      return option
    })
    setScheduleState(_schedule)
  }

  useEffect(() => {
    if (scheduleState.length === 0) return
    handleChangeScheduleState([...scheduleState])
  }, [scheduleState])

  useEffect(() => {
    if (scheduleList) {
      setScheduleState([...scheduleList])
    } else {
      const schedule = []
      for (var i = 0; i < 7; i++) {
        schedule.push({
          enabled: true,
          lapses: [
            {
              open: {
                hour: 0,
                minute: 0
              },
              close: {
                hour: 23,
                minute: 59
              }
            }
          ]
        })
      }
      setScheduleState(schedule)
    }
  }, [scheduleList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          scheduleState={scheduleState}
          isConflict={isConflict}
          setIsConflict={setIsConflict}
          isTimeChangeError={isTimeChangeError}
          addScheduleTime={addScheduleTime}
          openAddSchedule={openAddSchedule}
          setIsTimeChangeError={setIsTimeChangeError}
          handleEnabledSchedule={handleEnabledSchedule}
          handleChangeScheduleTime={handleChangeScheduleTime}
          handleDeleteSchedule={handleDeleteSchedule}
          handleOpenAddSchedule={handleOpenAddSchedule}
          handleChangeAddScheduleTime={handleChangeAddScheduleTime}
          handleAddSchedule={handleAddSchedule}
          selectedCopyDays={selectedCopyDays}
          cleanSelectedCopyDays={cleanSelectedCopyDays}
          handleSelectCopyTimes={handleSelectCopyTimes}
          handleApplyScheduleCopyTimes={handleApplyScheduleCopyTimes}
        />
      )}
    </>
  )
}

Schedule.propTypes = {
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

Schedule.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
