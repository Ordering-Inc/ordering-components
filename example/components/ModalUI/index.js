import React from 'react'
import './style.css'

export const ModalUI = (props) => {
  const {
    title,
    onAccept,
    onCancel,
    onClose,
    children
  } = props

  return (
    <div className='popup-dialog'>
      {
        title && <h2>{title}</h2>
      }
      {children}
      {
        (onCancel || onAccept || onClose) && (
          <div>
            {
              onAccept && <button onClick={() => onAccept()}>Accept</button>
            }
            {
              onCancel && <button onClick={() => onCancel()}>Cancel</button>
            }
            {
              onClose && <button onClick={() => onClose()}>Close</button>
            }
          </div>
        )
      }
    </div>
  )
}
