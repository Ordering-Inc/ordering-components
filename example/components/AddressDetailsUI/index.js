import React, { useState } from 'react'

import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'

import { AddressList } from '../../../src/components/AddressList'
import { AddressListUI } from '../../components/AddressListUI'
import { AddressForm } from '../../../src/components/AddressForm'
import { AddressFormUI } from '../../components/AddressFormUI'

import { useConfig } from '../../../src/contexts/ConfigContext'

export const AddressDetailsUI = (props) => {
  const {
    userAddress,
    orderType,
    googleMapsUrl,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [modalIsOpen, setIsOpen] = useState(false)
  const [curAddress, setCurAddress] = useState(null)
  const [{ loading }] = useConfig()

  const customStyles = {
    content: {
      padding: '20px',
      margin: '40px 30px',
      overflow: 'auto',
      backgroundColor: '#D1D1D1'
    }
  }

  const handleClick = (e) => {
    setIsOpen(e)
  }

  const handleSelectAddress = (address) => {
    setCurAddress(address)
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={{ display: 'flex' }}>
            <h3 style={{ margin: '0px 5px 10px 0px' }}>
              <strong>{userAddress}</strong>
            </h3>
            <div>
              {orderType === 1 &&
                <button onClick={() => handleClick(true)}>
                  ✏️
                </button>}
            </div>
          </div>
          <img src={googleMapsUrl} alt='google-maps-location' width='700' height='260' />
        </>
      )}

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={modalIsOpen}
        onAccept={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        title='Saved places'
      >
        <button onClick={() => setIsOpen(false)}>x</button>
        <AddressForm ordering={props.ordering} UIComponent={AddressFormUI} useValidationFileds address={curAddress} />
        <AddressList ordering={props.ordering} UIComponent={AddressListUI} changeOrderAddressWithDefault handleClickAddress={handleSelectAddress} />
        <br />
      </Popup>

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
