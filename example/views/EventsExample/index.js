import React, { useEffect } from 'react'
import { useEvent } from '../../../src/contexts/EventContext'

export const EventsExample = () => {
  const [events] = useEvent()

  useEffect(() => {
    events.on('event_test', (data) => {
      console.log('event_test >> ', data)
    })
    return () => {
      events.off('event_test')
    }
  }, [events])

  const handleClick = () => {
    events.emit('event_test', { test: 'TEST' })
  }

  return (
    <>
      <p>Events</p>
      <button onClick={handleClick}>Emit event</button>
    </>
  )
}
