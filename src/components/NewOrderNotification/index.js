import React from 'react'
import PropTypes from 'prop-types'
import { useConfig } from '../../contexts/ConfigContext'

export const NewOrderNotification = (props) => {
  const { UIComponent } = props
  const [{ configs }] = useConfig()

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderStatus={
            props.isBusinessApp
              ? configs?.notification_business_states?.value.split('|').map(value => Number(value)) || []
              : configs?.notification_driver_states?.value.split('|').map(value => Number(value)) || []
          }
        />
      )}
    </>
  )
}

NewOrderNotification.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}
