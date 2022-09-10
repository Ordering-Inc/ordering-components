import React, { useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useConfig } from '../../contexts/ConfigContext'
import PropTypes from 'prop-types'

export const ReCaptcha = (props) => {
  const {
    handleReCaptcha
  } = props

  const [{ configs }] = useConfig()
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: 'v2', siteKey: '' })
  const [score, setScore] = useState(0)

  /**
   * Change reCaptcha
   */
  const onChange = (value) => {
    handleReCaptcha(value)
    // score === 0 && getScore(value)
  }
  /**
   * get score
   */
  const getScore = async (value) => {
    setScore(1)
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: '6LcnFa4hAAAAADboq_iU3VBt5rg0wRqfeYapPILS',
        response: value
      })
    })
    const res = await response.json()
  }

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_type?.value === 'v3' &&
      configs?.security_recaptcha_score_v3?.value > 0 &&
      configs?.security_recaptcha_site_key_v3?.value
    ) {
      setRecaptchaVersion({ version: 'v3', siteKey: configs?.security_recaptcha_site_key_v3?.value })
      return
    }
    if (configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_site_key?.value) {
      setRecaptchaVersion({ version: 'v2', siteKey: configs?.security_recaptcha_site_key?.value })
      return
    }
    if (configs && Object.keys(configs).length > 0) {
      throw new Error('ReCaptcha component: the config doesn\'t have recaptcha site key')
    }
  }, [configs])

  return (
    <>
      {reCaptchaVersion?.version === 'v2' ? (
        <ReCAPTCHA
          sitekey={reCaptchaVersion?.siteKey}
          onChange={onChange}
        />
      ) : (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaVersion?.siteKey}>
          <GoogleReCaptcha onVerify={onChange} />
        </GoogleReCaptchaProvider>
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
