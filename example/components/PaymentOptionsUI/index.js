import React from 'react'

export const PaymentOptionsUI = (props) => {
  const {
    optionsList,
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
            {optionsList.options && optionsList.options.length > 0 ? (
              optionsList.options.map((option, i) => (
                <div key={i}>
                  {option.paymethod.enabled && (
                    <div key={i} style={{ textTransform: 'capitalize' }}>
                      <input
                        type='radio'
                        name='payment_option'
                        value={option.paymethod.id}
                      /> {option.paymethod.name} <br />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>❌ Not Found ❌</p>
            )}
          </div>
        ) : (
          <div>
            {optionsList.error && optionsList.error.length > 0 ? (
              optionsList.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>Loading...</p>
            )}
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
