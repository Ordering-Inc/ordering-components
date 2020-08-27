import React from 'react'

export const PaymentOptionsUI = (props) => {
  const {
    optionsList,
    optionSelected,
    handleChangeOption,
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

      <div className='payment-options'>
        <h1>Payment Method</h1>
        {!optionsList.loading && !optionsList.error ? (
          <div onChange={(e) => handleChangeOption(e.target.value)}>
            {optionsList.options.length > 0 && optionsList.options.map((option, i) => (
              <div key={i} style={{ textTransform: 'capitalize' }}>
                <input
                  type='radio'
                  name='payment_option'
                  value={option}
                  defaultChecked={optionSelected === option}
                /> {option} <br />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {}
          </div>
        )}
      </div>

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
