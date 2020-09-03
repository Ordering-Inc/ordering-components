import React from 'react'

import {AppleLoginUI} from "../../components/AppleLoginUI"
import {AppleLogin} from "../../../src/components/AppleLogin"

export const AppleLoginExample = ({ordering}) => {
  const props = {
    ordering: ordering,

    UIComponent: AppleLoginUI
  }

  return <AppleLogin {...props}/>
}
