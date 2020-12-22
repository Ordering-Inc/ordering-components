import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useEvent } from '../../../src/contexts/EventContext'

function ChangeView ({ history, children }) {
  const [events] = useEvent()
  useEffect(() => {
    const unlisten = history.listen(({ pathname }) => {
      console.log(pathname)
      events.emit('change_view', pathname)
    })
    return () => {
      unlisten()
    }
  }, [])
  return <>{children}</>
}

export default withRouter(ChangeView)
