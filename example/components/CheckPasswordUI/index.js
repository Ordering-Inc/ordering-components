import React , { useState, useEffect } from 'react'

export const CheckPasswordUI = (props) => {
  const {
    checkPasswordStatus,
    handleChangePassword,
    getCheckPassword,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [password, setPassword] = useState('')
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    handleChangePassword(password)
  }, [password])

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

      <div className='check-password'>
        <p>Confirm password</p>
        <input type='password' name='password' value={password} onChange={(e) => handlePassword(e)} />
        <button onClick={() => getCheckPassword()}>Check</button>
      </div>
      <div className='check-result'>
        {!checkPasswordStatus.loading && !checkPasswordStatus.error ? (
          <div>
            {checkPasswordStatus?.result && (
              <div>STATUS: {checkPasswordStatus?.result}</div>
            )}
          </div>
        ) : (
          <div>
            {checkPasswordStatus.error && checkPasswordStatus.error.length > 0 ? (
              checkPasswordStatus.error.map((e, i) => (
                <p key={i}>ERROR: [{e}]</p>
              ))
            ) : (
              <p>checking...</p>
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
