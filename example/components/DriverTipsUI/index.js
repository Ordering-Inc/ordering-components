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

  const selectOption = {
    background: 'red',
    color: 'white'
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

      <span>Driver tip: </span>
      <span className='result'>{driverTipAmount}</span><br /><br />

      <div className='tips-list' style={{ display: 'flex' }}>
        {driverTipsOptions?.length > 0 && driverTipsOptions.map((option, i) => (
          <div key={i} style={{ textTransform: 'capitalize', marginRight: '10px' }}>
            <button style={option === optionSelected ? selectOption : {}} onClick={() => handlerChangeOption(option)}>
              {option}%
            </button>
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
