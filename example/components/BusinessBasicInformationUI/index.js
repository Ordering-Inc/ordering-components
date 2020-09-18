import React, { useState } from 'react'
import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'

export const BusinessBasicInformationUI = (props) => {
  const {
    business,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      padding: '20px',
      margin: '10px 30px',
      overflow: 'auto',
      backgroundColor: '#D1D1D1'
    }
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
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
      <div className='bus-basic'>
        <div className='header'>
          {
            business.header && (
              <>
                <img src={business.header} alt='header' width='500' height='200' /><br />
              </>
            )
          }
          {
            business.logo && (
              <>
                <img src={business.logo} alt='logo' width='62' height='62' />
              </>
            )
          }
        </div>
        <div className='information-block'>
          <h1>{business.name}</h1>
          <p>{business.description}</p>
          <p>{business.reviews?.total} ratings</p>
          <button onClick={openModal}>
            More information
          </button>
        </div>
      </div>

      <Popup
        className='modal-info'
        UIComponent={ModalUI}
        open={modalIsOpen}
        onAccept={() => closeModal()}
        onClose={() => closeModal()}
        style={customStyles}
        title='Example Modal'
      >
        <button onClick={closeModal}>close</button>
        <div>
          <img src={business.header} alt='header' width='500' height='200' /><br />
          <img src={business.logo} alt='logo' width='62' height='62' />
          <h1>{business.name}</h1>
          <p>Description: {business.description}</p>
          <p>{business.today}</p>
          <p>Delivery Fee: {business.delivery_price}</p>
          <p>Minimum order: {business.minimum}</p>
          <p>Distance: {business.distance}</p>
          <p>Order type time:</p>
          <p>Delivery Time: {business.delivery_time}</p>
          <p>Pickup Time: {business.pickup_time}</p>
        </div>
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
