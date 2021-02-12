import React from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

export const PhoneAutocompleteUI = (props) => {
  const {
    beforeElements,
    beforeComponents,
    afterComponents,
    afterElements,
    phone,
    onChangeNumber,
    setModalOpen
  } = props

  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    setModalOpen(true)
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
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
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
            ref={register({
              minLength: {
                value: 10,
                message: 'The Phone / Mobile must be 10 characters'
              }
            })}
          />
        </div>
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
