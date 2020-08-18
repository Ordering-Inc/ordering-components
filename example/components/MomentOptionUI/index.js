import React from 'react'

export const MomentOptionUI = (props) => {
  const {
    minSelectDate,
    minDatesList,
    minSelectedTime,
    minHoursList,
    maxSelectDate,
    maxDatesList,
    maxSelectedTime,
    maxHoursList,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const onDateChange = (key, isMaxChange = false) => {
    props.handleDateChange(key, isMaxChange)
  }

  const onHourChange = (key, isMaxChange = false) => {
    props.handleHourChange(key, isMaxChange)
  }

  const onASAPChange = () => {
    props.handleASAPChange(true)
  }

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <h4>Select a Delivery date with time</h4>

      <span>Min date:</span>&nbsp;&nbsp;&nbsp;
      <select onChange={(e) => onDateChange(e.target.value)} value={minSelectDate.key}>
        {minDatesList.length > 0 && minDatesList.map(date => (
          <option key={date.key} value={date.key}>{date.date}</option>
        ))}
      </select>&nbsp;
      <select onChange={(e) => onHourChange(e.target.value)} value={minSelectedTime.key}>
        {minHoursList.length > 0 && minHoursList.map(hour => (
          <option key={hour.key} value={hour.key}>{hour.startTime} {hour.endTime}</option>
        ))}
      </select>
      <br />

      <span>Max date:</span>&nbsp;&nbsp;&nbsp;
      <select onChange={(e) => onDateChange(e.target.value, true)} value={maxSelectDate.key}>
        {maxDatesList.length > 0 && maxDatesList.map(date => (
          <option key={date.key} value={date.key}>{date.date}</option>
        ))}
      </select>&nbsp;
      <select onChange={(e) => onHourChange(e.target.value, true)} value={maxSelectedTime.key}>
        {maxHoursList.length > 0 && maxHoursList.map(hour => (
          <option key={hour.key} value={hour.key}>{hour.startTime} {hour.endTime}</option>
        ))}
      </select>

      <h4>Desired Delivery Time</h4>
      <button onClick={() => onASAPChange()}>
        As soon as possible
      </button>&nbsp;

      <br /><br />

      <span>MixDate: {minSelectDate.date}- [{minSelectedTime.startTime}-{minSelectedTime.endTime}]</span><br />
      <span>MaxDate: {maxSelectDate.date}- [{maxSelectedTime.startTime}-{maxSelectedTime.endTime}]</span>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
