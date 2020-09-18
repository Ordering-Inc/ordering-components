import React, { useState } from 'react'
import { Popup } from '../../../src/components/Popup'
import { ModalUI } from '../ModalUI'

export const ProductImagesUI = (props) => {
  const {
    hero,
    gallery,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const [modalIsOpen, setIsOpen] = useState(false)
  const [imageToOpen, setImageToOpen] = useState(null)

  const customStyles = {
    content: {
      padding: '20px',
      margin: '40px 30px',
      overflow: 'auto',
      backgroundColor: '#D1D1D1'
    }
  }

  const openModal = (img) => {
    setIsOpen(true)
    setImageToOpen(img)
  }

  const closeModal = () => {
    setIsOpen(false)
    setImageToOpen(null)
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

      <div id='product-image'>
        <img className='img-hero' src={hero} alt='hero' height='110' width='110' onClick={() => openModal(hero)} />&nbsp;
        {gallery.length && gallery.map((photo, i) => (
          <img className='img' key={i} src={photo} alt={`photo-${i}`} height='110' width='110' onClick={() => openModal(photo)} />
        ))}
      </div>

      <Popup
        className='modal-info'
        style={customStyles}
        UIComponent={ModalUI}
        open={modalIsOpen}
        onAccept={() => closeModal()}
        onClose={() => closeModal()}
        title='Product image'
      >
        <button onClick={closeModal}>x</button>
        <div className='image-modal' style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={imageToOpen} alt='img' height='510' width='510' />
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
