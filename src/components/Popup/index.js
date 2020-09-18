import React, { useEffect, useRef } from 'react'
import PropTypes, { string } from 'prop-types'

/**
 * Component to manage login behavior without UI component
 */
export const Popup = (props) => {
  const {
    UIComponent,
    open,
    backdropClassName,
    closeOnBackdrop,
    closeWithKeyboard,
    onClose
  } = props

  const modalRef = useRef()

  /**
   * Use onClose function when esc key was pressed
   * @param {Event} e Event when keydown
   */
  const handleKeyDown = (e) => {
    closeWithKeyboard && e.keyCode === 27 && onClose && onClose()
  }

  /**
   * Use onClose function when backdrop was clicked
   * @param {Event} e Event when click in backdrop
   */
  const handleClick = (e) => {
    closeOnBackdrop && e.target.classList.contains('popup') && onClose && onClose()
  }

  useEffect(() => {
    if (!open) return
    let backdrop = document.querySelector('.popup-backdrop')
    const bodyOverflowBackup = document.body.style.overflow
    if (!backdrop) {
      backdrop = document.createElement('div')
      backdrop.className = 'popup-backdrop' + (backdropClassName ? ` ${backdropClassName}` : '')
      document.body.append(backdrop)
      document.body.style.overflow = 'hidden'
    }
    modalRef.current.focus()

    /**
     * Remove backdrop and enable scroll
     */
    return () => {
      const modals = document.querySelectorAll('.popup')
      modals.length > 0 && modals[modals.length - 1].focus()
      if (modals.length === 0) {
        document.querySelector('.popup-backdrop').remove()
        document.body.style.overflow = bodyOverflowBackup
      }
    }
  }, [open])

  const popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1001,
    outline: 'none'
  }

  return (
    <>
      {
        open && (
          <div className='popup' style={popupStyles} onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={-1} ref={modalRef} autoFocus>
            {
              UIComponent && <UIComponent {...props} />
            }
          </div>
        )
      }
    </>
  )
}

Popup.propTypes = {
  UIComponent: PropTypes.elementType,
  /**
   * Show or hide popup
   */
  open: PropTypes.bool,
  /**
   * Close popup when backdrop was clicked
   */
  closeOnBackdrop: PropTypes.bool,
  /**
   * Close popup when ESC key was pressed
   */
  closeWithKeyboard: PropTypes.bool,
  /**
   * Title of popup
   */
  title: PropTypes.string,
  /**
   * Content of popup
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(string),
    PropTypes.elementType,
    PropTypes.element
  ]),
  /**
   * Function when accept popup
   */
  onAccept: PropTypes.func,
  /**
   * Function when cancel popup
   */
  onCancel: PropTypes.func,
  /**
   * Function when close popup
   */
  onClose: PropTypes.func
}

Popup.defaultProps = {
  open: false,
  closeOnBackdrop: true,
  closeWithKeyboard: true
}
