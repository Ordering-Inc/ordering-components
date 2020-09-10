import React from 'react'

export const DriverTipsUI = (props) => {
  const {
    driverTipAmount,
    optionSelected,
    driverTipsOptions,
    handlerChangeOption,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

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

      <span>Driver tip: </span>
      <span>{driverTipAmount}</span><br /><br />

      <div className='tips-list' style={{ display: 'flex' }}>
        {driverTipsOptions?.length > 0 && driverTipsOptions.map((option, i) => (
          <div key={i} style={{ textTransform: 'capitalize', marginRight: '10px' }}>
            <input
              type='radio'
              name='driver_tip'
              value={option}
              checked={optionSelected === option}
              onChange={(e) => handlerChangeOption(e.target.value)}
            /> {option}%
          </div>
        ))}
      </div>
      <br />
      <span>100% of the tip goes to your driver</span>

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
