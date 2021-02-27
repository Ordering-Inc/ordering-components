import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GoogleAutocompleteInput } from '../../../src/components/GoogleAutocompleteInput'
import { GoogleGpsButton } from '../../../src/components/GpsButton'
import { useConfig } from '../../../src/contexts/ConfigContext'
import { GpsButtonUI } from '../GpsButtonUI'

export const AddressFormUI = (props) => {
  const {
    formState,
    saveAddress,
    updateChanges,
    addressState,
    validationFields,
    beforeElements,
    beforeComponents,
    afterComponents,
    afterElements,
    showField,
    isRequiredField,
    hanldeChangeInput
  } = props

  const [{ loading, configs }] = useConfig()
  const { handleSubmit, register, errors } = useForm()
  const [state, setState] = useState({ selectedFromAutocomplete: true })

  const onSubmit = (values) => {
    saveAddress()
  }

  const inputs = [
    // { name: 'address', placeholder: 'Address', requiredMessage: 'Address is required', type: 'text' },
    { name: 'address_notes', placeholder: 'Address notes', requiredMessage: 'Address notes are required', type: 'textarea' },
    { name: 'internal_number', placeholder: 'Internal number', requiredMessage: 'Internal number is required', type: 'text' },
    { name: 'zipcode', placeholder: 'Zipcode', requiredMessage: 'Zipcode is required', type: 'text' }
  ]

  const handleChangeAddress = (address) => {
    setState({
      ...state,
      selectedFromAutocomplete: true
    })
    updateChanges(address)
  }

  const handleAddressKeyDown = () => {
    state.selectedFromAutocomplete && setState({
      ...state,
      selectedFromAutocomplete: false
    })
  }

  return (
    <>
      <h1>Address Form</h1>
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
        (validationFields?.loading || addressState?.loading || loading) && <p>Loading form...</p>
      }
      {
        !validationFields?.loading && !addressState.loading && !loading && (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <GoogleAutocompleteInput
                apiKey={configs?.google_maps_api_key?.value}
                name='address'
                placeholder='Address'
                onChangeAddress={handleChangeAddress}
                onKeyDown={handleAddressKeyDown}
                defaultValue={formState.changes?.address || addressState.address?.address}
                childRef={register({
                  required: isRequiredField('address') ? 'Address is required' : null
                })}
              />
              {errors.address && <i style={{ color: '#c10000' }}>{errors.address.message}</i>}
              {!state.selectedFromAutocomplete && <i style={{ color: '#c10000' }}>Select address from autocomplete.</i>}
              <GoogleGpsButton
                UIComponent={GpsButtonUI}
                IconButton
                IconLoadingButton
                apiKey={configs?.google_maps_api_key?.value}
                onAddress={handleChangeAddress}
              />
              {
                inputs.map((_input) => (
                  <React.Fragment key={_input.name}>
                    {
                      showField(_input.name) && _input.type === 'text' && (
                        <div>
                          <input
                            name={_input.name}
                            type={_input.type}
                            placeholder={_input.placeholder}
                            style={{ borderColor: errors[_input.name] ? '#c10000' : null }}
                            onChange={hanldeChangeInput}
                            defaultValue={formState.changes[_input.name] || addressState.address[_input.name] || ''}
                            ref={register({
                              required: isRequiredField(_input.name) ? _input.requiredMessage : null
                            })}
                          />
                          {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
                        </div>
                      )
                    }
                    {
                      showField(_input.name) && _input.type === 'textarea' && (
                        <div>
                          <textarea
                            name={_input.name}
                            type={_input.type}
                            placeholder={_input.placeholder}
                            style={{ borderColor: errors[_input.name] ? '#c10000' : null }}
                            onChange={hanldeChangeInput}
                            defaultValue={addressState.address[_input.name] || ''}
                            ref={register({
                              required: isRequiredField(_input.name) ? _input.requiredMessage : null
                            })}
                          />
                          {errors[_input.name] && <i style={{ color: '#c10000' }}>{errors[_input.name].message}</i>}
                        </div>
                      )
                    }
                  </React.Fragment>
                ))
              }
              {
                !formState.loading && formState.error && <p style={{ color: '#c10000' }}>{formState.error}</p>
              }
              {
                !addressState.address?.id && <button type='submit' disabled={formState.loading}>Add</button>
              }
              {
                addressState.address?.id && <button type='submit' disabled={formState.loading}>Update</button>
              }
            </form>
          </>
        )
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
