import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../../contexts/SessionContext'
import { useWebsocket } from '../../../contexts/WebsocketContext'
import { useEvent } from '../../../contexts/EventContext'

export const OrderNotification = (props) => {
  const {
    UIComponent
  } = props

  const socket = useWebsocket()
  const [{ user, loading }] = useSession()
  const [events] = useEvent()

  useEffect(() => {
    if (!user) return
    const handleRegisterOrder = (order) => {
      events.emit('order_added', order)
    }
    socket.on('orders_register', handleRegisterOrder)
    return () => {
      socket.off('orders_register', handleRegisterOrder)
    }
  }, [socket, loading, user])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

OrderNotification.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Components types before my orders
  * Array of type components, the parent props will pass to these components
  */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after my orders
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before my orders
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after my orders
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderNotification.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
