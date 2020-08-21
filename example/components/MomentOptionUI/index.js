import React from 'react'
import moment from 'moment'

export const MomentOptionUI = (props) => {
  const {
    datesList,
    hoursList,
    currentDate,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const handleDateChange = ({ date, time, type }) => {
    const currDate = moment(currentDate).format('YYYY-MM-DD')
    const currTime = moment(currentDate).format('hh:mm A')
    const dateSelected = date ?? currDate
    const timeSelected = hoursList.find(hour => hour.key === time)?.startTime ?? currTime

    const dateToSend = type === 'asap'
      ? moment().format('YYYY-MM-DD hh:mm A')
      : moment(`${dateSelected} ${timeSelected}`).format('YYYY-MM-DD hh:mm A')
    props.handleCustomChangeDate(dateToSend)
  }

  return (
    <div className='moment-section'>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <h4>Select a Delivery date with time</h4>
      <select className='select-date' onChange={(e) => handleDateChange({ date: e.target.value })}>
        {datesList.length > 0 && datesList.map(date => (
          <option key={date.key} value={date.date}>{date.date}</option>
        ))}
      </select>&nbsp;

      <select className='select-hour' onChange={(e) => handleDateChange({ time: e.target.value })}>
        {hoursList.length > 0 && hoursList.map(hour => (
          <option key={hour.key} value={hour.key}>{hour.startTime} {hour.endTime}</option>
        ))}
      </select>
      <br />

      <h4>Desired Delivery Time</h4>
      <button onClick={() => handleDateChange({ type: 'asap' })}>
        As soon as possible
      </button><br /><br />

      <span>Current Date: {currentDate}</span>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </div>
  )
}
