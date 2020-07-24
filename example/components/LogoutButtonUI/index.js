import React from 'react'
import { useSession } from '../../../src/contexts/SessionContext'

export const LogoutButtonUI = (props) => {
  const [{ auth, user }] = useSession()
  const {
    formState,
    handleLogoutClick
  } = props

  return (
    <>
      {
        auth && <button onClick={handleLogoutClick} disabled={formState.loading}>Logout as {user.name} {user.lastname}</button>
      }
      {
        !formState.loading && formState.result && formState.result.error && <p style={{ color: '#c10000' }}>{formState.result.result}</p>
      }
    </>
  )
}
