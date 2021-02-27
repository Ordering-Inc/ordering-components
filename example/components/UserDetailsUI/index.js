import React from 'react'
import { useForm } from 'react-hook-form'

export const UserDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    userState,
    validationFields,
    useValidationFields,
    handleButtonUpdateClick,
    isRequiredField,
    handleChangeInput,
    onEditUserClick,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const { handleSubmit, register, errors } = useForm()

  const inputs = [
    { name: 'name', placeholder: 'Firstname', requiredMessage: 'Name is required', type: 'text' },
    { name: 'email', placeholder: 'Email', requiredMessage: 'Email is required', type: 'text' },
    { name: 'cellphone', placeholder: 'Cellphone', requiredMessage: 'Cellphone is required', type: 'text' }
  ]

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

      <strong>Customer Details</strong>&nbsp;

      {((useValidationFields && validationFields.loading) || userState.loading) && <p>Loading form ...</p>}

      {(useValidationFields || !validationFields.loading) && !userState.loading && userState.result && userState.result.error && (
        <p>{userState.result.result}</p>
      )}

      {(useValidationFields || !validationFields.loading) && !userState.loading && userState.result && !userState.result.error && userState.result.result && (
        <>
          <button className='btn-edit' onClick={() => onEditUserClick && onEditUserClick()}>
            {!isEdit ? '✏️' : '❌'}
          </button>
          <br />
          <br />
          <form onSubmit={handleSubmit(handleButtonUpdateClick)}>
            {inputs.map((_input) => (
              <div key={_input.name}>
                <input
                  name={_input.name}
                  type={_input.type}
                  placeholder={_input.placeholder}
                  style={{ borderColor: errors[_input.name] ? '#c10000' : null, width: '50%', marginBottom: '10px' }}
                  onChange={handleChangeInput}
                  defaultValue={userState.result.result[_input.name]}
                  disabled={!isEdit}
                  ref={register({
                    required: isRequiredField(_input.name) ? _input.requiredMessage : null
                  })}
                />
                {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
              </div>
            ))}
            <div>
              {formState.loading && <p>Loading...</p>}
              {!formState.loading && formState.result && formState.result.error && <p style={{ color: '#c10000' }}>{formState.result.result}</p>}
              {!formState.loading && <button type='submit' disabled={Object.keys(formState.changes).length === 0}>Update</button>}
            </div>
          </form>
        </>
      )}

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
