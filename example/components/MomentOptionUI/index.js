import React from 'react'

export const MomentOptionUI = (props) => {
  const {
    isAsap,
    datesList,
    hoursList,
    dateSelected,
    timeSelected,
    handleAsap,
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
      Current datetime: {dateSelected} {timeSelected}
      {(
        <>
          <h4>Select a Delivery date with time</h4>
          <select className='select-date' value={dateSelected || ''} onChange={(e) => props.handleChangeDate(e.target.value)}>
            <option value='' disabled>Select a date</option>
            {datesList.length > 0 && datesList.map((date, i) => (
              <option key={i} value={date}>{date}</option>
            ))}
          </select>&nbsp;
          {dateSelected &&
            <select className='select-hour' value={timeSelected || ''} onChange={(e) => props.handleChangeTime(e.target.value)}>
              <option value='' disabled>Select a time</option>
              {hoursList.length > 0 && hoursList.map((hour, i) => (
                <option key={i} value={hour.startTime}>{hour.startTime} to {hour.endTime}</option>
              ))}
            </select>}
          <br />
        </>
      )}

      <h4>Desired Delivery Time</h4>
      {isAsap && (
        <span>✅ ASAP</span>
      )}&nbsp;
      <button onClick={() => handleAsap()}>
        {isAsap ? 'Select a range' : 'As soon as possible'}
      </button><br /><br />

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
