import React from 'react'

export const MomentOptionUI = (props) => {
  const {
    isAsap,
    datesList,
    hoursList,
    currentDate,
    handleCustomChangeDate,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

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
      {!isAsap && (
        <>
          <h4>Select a Delivery date with time</h4>
          <select className='select-date' onChange={(e) => handleCustomChangeDate({ date: e.target.value })}>
            <option value={null} defaultValue>Select a date</option>
            {datesList.length > 0 && datesList.map(date => (
              <option key={date.key} value={date.date}>{date.date}</option>
            ))}
          </select>&nbsp;

          <select className='select-hour' onChange={(e) => handleCustomChangeDate({ time: e.target.value })}>
            <option>Select a time</option>
            {hoursList.length > 0 && hoursList.map(hour => (
              <option key={hour.key} value={hour.startTime}>{hour.startTime} to {hour.endTime}</option>
            ))}
          </select>
          <br />
        </>
      )}

      <h4>Desired Delivery Time</h4>
      {isAsap && (
        <span>✅ ASAP</span>
      )}&nbsp;
      <button onClick={() => handleCustomChangeDate({ type: 'asap' })}>
        {isAsap ? 'Select a range' : 'As soon as possible'}
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
