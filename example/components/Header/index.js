import React from 'react'
import { useSession } from '../../../src/contexts/SessionContext'

export const Header = () => {
  const [{ auth, user }] = useSession()
  return (
    <>
      <h1>Header Example</h1>
      {
        auth && <p>(Header) Your are {user.name} {user.lastname}</p>
      }
      {
        !auth && <p>(Header) Login to show your name</p>
      }
      <hr />
    </>
  )
}
