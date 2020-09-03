import React from 'react'
import { Ordering } from 'ordering-api-sdk'

export const AppleLogin = (props) => {
  const {Ordering,UIComponent} = props
  return (
    <>
    {UIComponent && <UIComponent />}
    </>
  )
}
