import React from 'react'
import './style.css'

export const AlertUI = (props) => {
  const {
    title,
    content,
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
      {
        content && typeof content === 'string' && content
      }
      {
        content && typeof content === 'object' && Array.isArray(content) && content
      }
      {
        content && React.isValidElement(content) && content
      }
      {
        content && typeof content === 'function' && String(content).includes('createElement') && <props.content />
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
