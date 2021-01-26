import React from 'react'

export const PaymentOptionPaypalUI = (props) => {
  const {
    isSdkReady,
    PaypalButton,
    noAuthMessage,
    paypalButtonProps,
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

      <div style={{ width: '500px' }}>
        {noAuthMessage ? (
          <p>{noAuthMessage}</p>
        ) : (
          isSdkReady ? (
            PaypalButton && <PaypalButton {...paypalButtonProps} />
          ) : (
            <div>Loading...</div>
          )
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
