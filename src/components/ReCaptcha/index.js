import React, { useEffect, useState, useCallback, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'
import PropTypes from 'prop-types'

export const ReCaptcha = (props) => {
  const {
    handleReCaptcha,
    reCaptchaVersion
  } = props

  const captchaRef = useRef(null)

  const [currVersion, setCurrVersion] = useState(reCaptchaVersion?.version)
  /**
   * Change reCaptcha
   */
  const onChange = useCallback((value) => {
    handleReCaptcha({ code: value, version: reCaptchaVersion?.version })
  }, [reCaptchaVersion])

  useEffect(() => {
    if (reCaptchaVersion?.siteKey === '') return
    if (currVersion !== reCaptchaVersion?.version && !!window.grecaptcha && captchaRef?.current !== null) {
      window.grecaptcha = undefined
    }
    setCurrVersion(reCaptchaVersion?.version)
  }, [reCaptchaVersion, captchaRef?.current])

  return (
    <>
      {(reCaptchaVersion?.version === 'v3' && currVersion === 'v3') && (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaVersion?.siteKey}>
          <GoogleReCaptcha onVerify={onChange} />
        </GoogleReCaptchaProvider>
      )}
      {(reCaptchaVersion?.version === 'v2' && currVersion === 'v2') && (
        <ReCAPTCHA
          sitekey={reCaptchaVersion?.siteKey}
          onChange={onChange}
          ref={captchaRef}
        />
      )}
    </>
  )
}

ReCaptcha.propTypes = {
  /**
   * Set reCaptcha value token when changes
   */
  handleReCaptcha: PropTypes.func
}
