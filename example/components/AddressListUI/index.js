import React from 'react'

export const AddressListUI = (props) => {
  const {
    addressList,
    actionStatus,
    handleClickAddress,
    handleSetDefault
  } = props

  return (
    <>
      <h1>Addresses</h1>
      {
        addressList.addresses.map(address => (
          <div key={address.id} style={{ backgroundColor: address.default ? '#00c100' : '#ffffff' }}>
            {address.id}. {address.address} {address.default ? ' (Default)' : ''}
            <button type='button' onClick={() => handleClickAddress(address)} disabled={actionStatus.loading}>Click</button>
            {
              !address.default && <button type='button' onClick={() => handleSetDefault(address)} disabled={actionStatus.loading}>Default</button>
            }
          </div>
        ))
      }
    </>
  )
}
