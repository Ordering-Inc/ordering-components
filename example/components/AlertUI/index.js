import React from 'react'
import './style.css'

export const AlertUI = (props) => {
  const {
    title,
    content,
    onAccept,
    onCancel,
    onClose
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
      {
        (onCancel || onAccept || onClose) && (
          <div>
            {
              onCancel && <button onClick={() => onAccept()}>Accept</button>
            }
            {
              onCancel && <button onClick={() => onCancel()}>Cancel</button>
            }
            {
              onCancel && <button onClick={() => onClose()}>Close</button>
            }
          </div>
        )
      }
    </div>
  )
}
