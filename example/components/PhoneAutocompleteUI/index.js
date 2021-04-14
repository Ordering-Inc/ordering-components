import React, { useState, useEffect, useRef } from 'react'
import './styles.css'

export const PhoneAutocompleteUI = (props) => {
  const {
    beforeElements,
    beforeComponents,
    afterComponents,
    afterElements,
    phone,
    onChangeNumber
  } = props

  const [showError, setShowError] = useState(false)

  const inputAutocomplete = useRef()

  useEffect(() => {
    if (inputAutocomplete?.current?.value?.length !== 10) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }, [inputAutocomplete?.current?.value])

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
      <form autoComplete='off'>
        <div className='phone-autocomplete'>
          <input
            name='phone-input'
            id='phone-input'
            placeholder='Phone'
            className='phone-autocomplete-input'
            type='text'
            pattern='[0-9]*'
            onInput={onChangeNumber}
            value={phone}
            maxLength='10'
            onChange={() => {}}
            ref={inputAutocomplete}
          />
          <button id='phone-button' className='phone-button' type='button'>Phone Button</button>
        </div>
        {showError && <a style={{ color: 'red' }}>The Phone / Mobile must be 10 characters</a>}
      </form>
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
