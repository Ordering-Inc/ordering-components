import React from 'react'
import { useForm } from 'react-hook-form'
import { CODES } from '../../../src/constants/code-numbers'
import { DragAndDrop } from '../../../src/components/DragAndDrop'
import { ExamineClick } from '../../../src/components/ExamineClick'

export const UserProfileUI = (props) => {
  const {
    formState,
    userState,
    validationFields,
    useValidationFileds,
    handleButtonUpdateClick,
    showField,
    isRequiredField,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    hanldeChangeInput,
    handlechangeImage
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = (values) => {
    handleButtonUpdateClick()
  }

  const inputs = [
    { name: 'name', placeholder: 'Firstname', requiredMessage: 'Name is required', type: 'text' },
    { name: 'middle_name', placeholder: 'Middlename', requiredMessage: 'Middle name is required', type: 'text' },
    { name: 'lastname', placeholder: 'Lastname', requiredMessage: 'Lastname is required', type: 'text' },
    { name: 'second_lastname', placeholder: 'Second lastname', requiredMessage: 'Second lastname is required', type: 'text' },
    { name: 'email', placeholder: 'Email', requiredMessage: 'Email is required', type: 'text' },
    { name: 'country_phone_code', placeholder: 'Select a country code', requiredMessage: 'Cellphone is required', type: 'select' },
    { name: 'cellphone', placeholder: 'Cellphone', requiredMessage: 'Cellphone is required', type: 'text' },
    { name: 'password', placeholder: 'Password', requiredMessage: 'Password is required', type: 'password' }
  ]

  const handleFiles = (files) => {
    if (files.length === 1) {
      handlechangeImage(files[0])
    }
  }

  return (
    <>
      <h1>Profile</h1>
      {
        ((useValidationFileds && validationFields.loading) || userState.loading) && <p>Loading form ...</p>
      }
      {
        (useValidationFileds || !validationFields.loading) && !userState.loading && userState.result && userState.result.error && (
          <p>{userState.result.result}</p>
        )
      }
      {
        (useValidationFileds || !validationFields.loading) && !userState.loading && userState.result && !userState.result.error && userState.result.result && (
          <>
            {
              beforeElements.map((BeforeElement, i) => (
                <React.Fragment key={i}>
                  {BeforeElement}
                </React.Fragment>
              ))
            }
            {
              beforeComponents.map((BeforeComponent, i) => <BeforeComponent key={i} {...props} />)
            }
            {
              <>
                <ExamineClick onFiles={handleFiles}>
                  <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} style={{ width: '200px' }}>
                    <div style={{ backgroundColor: '#ccc' }}>
                      {
                        !formState.changes.photo && userState.result.result.photo && <img src={userState.result.result.photo} width='200' />
                      }
                      {
                        formState.changes.photo && <img src={formState.changes.photo} width='200' />
                      }
                      <p>Drag and drop new photo</p>
                    </div>
                  </DragAndDrop>
                </ExamineClick>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {
                    inputs.map((_input) => (
                      <React.Fragment key={_input.name}>
                        {
                          showField(_input.name) && _input.type !== 'select' && (
                            <div>
                              <input
                                name={_input.name}
                                type={_input.type}
                                placeholder={_input.placeholder}
                                style={{ borderColor: errors[_input.name] ? '#c10000' : null }}
                                onChange={hanldeChangeInput}
                                defaultValue={userState.result.result[_input.name]}
                                ref={register({
                                  required: isRequiredField(_input.name) ? _input.requiredMessage : null
                                })}
                              />
                              {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
                            </div>
                          )
                        }
                        {
                          showField(_input.name) && _input.type === 'select' && (
                            <div>
                              <select
                                name={_input.name}
                                defaultValue={userState.result.result[_input.name] || ''}
                                style={{ borderColor: errors[_input.name] ? '#c10000' : null }}
                                onChange={hanldeChangeInput}
                                ref={register({
                                  required: isRequiredField(_input.name) ? _input.requiredMessage : null
                                })}
                              >
                                <option value='' disabled>{_input.placeholder}</option>
                                {
                                  _input.name === 'country_phone_code' && CODES.map(code => (
                                    <option key={code.phoneCode + '-' + code.countryCode} value={code.phoneCode}>({code.phoneCode}) {code.countryName}</option>
                                  ))
                                }
                              </select>
                              {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
                            </div>
                          )
                        }
                      </React.Fragment>
                    ))
                  }
                  <div>
                    {formState.loading && <p>Loading...</p>}
                    {!formState.loading && formState.result && formState.result.error && <p style={{ color: '#c10000' }}>{formState.result.result}</p>}
                    {!formState.loading && <button type='submit' disabled={Object.keys(formState.changes).length === 0}>Update</button>}
                  </div>
                </form>
              </>
            }
            {
              afterComponents.map((AfterComponent, i) => <AfterComponent key={i} {...props} />)
            }
            {
              afterElements.map((AfterElement, i) => (
                <React.Fragment key={i}>
                  {AfterElement}
                </React.Fragment>
              ))
            }
          </>
        )
      }
    </>
  )
}
