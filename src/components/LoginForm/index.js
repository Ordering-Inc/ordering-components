import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import parsePhoneNumber from 'libphonenumber-js'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

/**
 * Component to manage login behavior without UI component
 */
export const LoginForm = (props) => {
  const {
    UIComponent,
    handleButtonLoginClick,
    handleSuccessLogin,
    useDefualtSessionManager,
    urlToRedirect,
    allowedLevels,
    handleCustomLogin,
    notificationState,
    isGuest
  } = props

  const [ordering] = useApi()
  const socket = useWebsocket()
  let { defaultLoginTab } = props
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [credentials, setCredentials] = useState({ email: '', cellphone: '', password: '' })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [reCaptchaValue, setReCaptchaValue] = useState({ code: '', version: '' })
  const [isReCaptchaEnable, setIsReCaptchaEnable] = useState(false)

  const useLoginByCellphone = configs?.phone_password_login_enabled?.value === '1'
  const useLoginOtpEmail = configs?.opt_email_enabled?.value === '1'
  const useLoginOtpCellphone = configs?.otp_cellphone_enabled?.value === '1'
  const useLoginByEmail = (useLoginByCellphone || useLoginOtpEmail || useLoginOtpCellphone)
    ? configs?.email_password_login_enabled?.value === '1' : true
  const useLoginSpoonity = configs?.spoonity_enabled?.value === '1'
  const useLoginOtp = useLoginOtpEmail || useLoginOtpCellphone
  const isDeviceLoginEnabled = configs?.device_code_login_enabled?.value === '1'

  defaultLoginTab = useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp'
  const [loginTab, setLoginTab] = useState(defaultLoginTab)
  const [otpType, setOtpType] = useState((!useLoginOtpEmail && useLoginOtpCellphone) ? 'cellphone' : 'email')
  const [otpState, setOtpState] = useState('')

  const [{ user }, { login, logout }] = useSession()
  const [, t] = useLanguage()

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async (values, reloadApp) => {
    if (handleCustomLogin) {
      handleCustomLogin(values || credentials, loginTab)
      return
    }
    try {
      let _credentials
      if (isDeviceLoginEnabled && values?.device_code) {
        _credentials = {
          device_code: values?.device_code
        }
      } else if (loginTab === 'otp') {
        _credentials = {
          [otpType]: values && values[otpType] || credentials[otpType],
          one_time_password: values && values?.code || otpState
        }
        if (otpType === 'cellphone') {
          _credentials = {
            ..._credentials,
            country_phone_code: values && values?.country_phone_code || credentials?.country_phone_code,
          }
        }
      } else {
        _credentials = {
          [loginTab]: values && values[loginTab] || credentials[loginTab],
          password: values && values?.password || credentials.password
        }
      }

      if (isReCaptchaEnable) {
        if (reCaptchaValue?.code === '') {
          setFormState({
            result: {
              error: true,
              result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
            },
            loading: false
          })
          return
        } else {
          _credentials.verification_code = reCaptchaValue?.code
          _credentials.recaptcha_type = reCaptchaValue?.version
        }
      }
      setFormState({ ...formState, loading: true })

      if (_credentials?.cellphone?.includes('+')) {
        const parsedNumber = parsePhoneNumber(_credentials.cellphone)
        const cellphone = parsedNumber?.nationalNumber

        _credentials.cellphone = cellphone
      }

      if (notificationState?.notification_token) {
        _credentials.notification_app = notificationState.notification_app
        _credentials.notification_token = notificationState.notification_token
      }

      if (isGuest && user?.guest_id) _credentials.guest_token = user?.guest_id

      const { content: { error, result } } = await ordering.users().auth(_credentials)

      if (isReCaptchaEnable && window?.grecaptcha) {
        _credentials.recaptcha_type === 'v2' && window.grecaptcha.reset()
        setReCaptchaValue({ code: '', version: '' })
      }

      if (!error) {
        if (useDefualtSessionManager) {
          if (allowedLevels && allowedLevels?.length > 0) {
            const { level, session } = result
            const accessToken = session?.access_token
            if (!allowedLevels.includes(level)) {
              try {
                const { content: logoutResp } = await ordering.setAccessToken(accessToken).users().logout()
                if (!logoutResp.error) {
                  logout()
                }
                setFormState({
                  result: {
                    error: true,
                    result: [t('YOU_DO_NOT_HAVE_PERMISSION', 'Your session have been closed')]
                  },
                  loading: false
                })
              } catch (error) {
                setFormState({
                  result: {
                    error: true,
                    result: error.message
                  },
                  loading: false
                })
              }
              return
            }
          }
          if (values?.device_code) {
            login({
              user: result,
              token: result.session?.access_token,
              device_code: values?.device_code
            })
          } else {
            login({
              user: result,
              token: result.session?.access_token
            }, reloadApp)
          }
        }
        events.emit('userLogin', result)
        if (handleSuccessLogin) {
          handleSuccessLogin(result)
        }

        if (urlToRedirect) {
          window.location.href = `${window.location.origin}${urlToRedirect}`
        }
        return true
      }
      setFormState({
        result: {
          error,
          result
        },
        loading: false
      })
      return false
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  useEffect(() => {
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs &&
      Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_auth?.value === '1')

    setOtpType((!useLoginOtpEmail && useLoginOtpCellphone) ? 'cellphone' : 'email')
    setLoginTab(useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp')
  }, [configs])

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  const handleChangeTab = (tab) => {
    setLoginTab(tab)
  }

  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */
  const sendVerifyPhoneCode = async (values) => {
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: false } })
      setVerifyPhoneState({ ...verifyPhoneState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify({
          cellphone: values.cellphone,
          country_phone_code: `+${values.country_phone_code}`
        })
      })
      const res = await response.json()
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: res
      })
    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const handleSetCheckPhoneCodeState = (data) => {
    const values = data || { loading: false, result: { error: false } }
    setCheckPhoneCodeState(values)
  }

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  const checkVerifyPhoneCode = async (values) => {
    const body = {
      ...values
    }
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true })
      if (notificationState?.notification_token) {
        body.notification_token = notificationState.notification_token
        body.notification_app = notificationState.notification_app
      }
      const response = await fetch(`${ordering.root}/auth/sms/twilio`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify(body)
      })
      const res = await response.json()
      if (!res?.error && res?.result?.id) {
        login({
          user: res?.result,
          token: res?.result?.session?.access_token
        })
        if (handleSuccessLogin) {
          handleSuccessLogin(res?.result)
        }
      }
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: res
      })
    } catch (error) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const generateOtpCode = async (values) => {
    const body = {
      type: 4,
      channel: otpType === 'email' ? 1 : 2,
      size: 6
    }
    const email = values?.email || credentials?.email
    const cellphone = values?.cellphone || credentials?.cellphone
    const countryPhoneCode = values?.countryPhoneCode || values?.country_phone_code || credentials.country_phone_code

    try {
      if (otpType === 'cellphone') {
        body.country_phone_code = countryPhoneCode
        body.cellphone = cellphone
        setCredentials({
          cellphone,
          country_phone_code: countryPhoneCode
        })
      } else {
        body.email = email
        setCredentials({
          email
        })
      }
      const response = await fetch(`${ordering.root}/codes/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify(body)
      })
      const { result, error } = await response.json()
      if (!error) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { result: result, error: null } })
        return
      }
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: result } })
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message } })
    }
  }

  const handleLoginSpoonity = async () => {
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const response = await fetch(`${ordering.root}/auth/spoonity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      })
      const { result, error } = await response.json()
      if (error) {
        setFormState({
          result: {
            error: true,
            result: result
          },
          loading: false
        })
        return
      }
      login({
        user: result,
        token: result?.session?.access_token
      })
      setFormState({
        result: {
          error,
          result
        },
        loading: false
      })
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          loginTab={loginTab}
          credentials={credentials}
          verifyPhoneState={verifyPhoneState}
          checkPhoneCodeState={checkPhoneCodeState}
          setCheckPhoneCodeState={handleSetCheckPhoneCodeState}
          handleChangeInput={handleChangeInput}
          handleButtonLoginClick={handleButtonLoginClick || handleLoginClick}
          handleChangeTab={handleChangeTab}
          handleSendVerifyCode={sendVerifyPhoneCode}
          handleCheckPhoneCode={checkVerifyPhoneCode}
          enableReCaptcha={isReCaptchaEnable}
          handleReCaptcha={setReCaptchaValue}
          useLoginOtp={useLoginOtp}
          setOtpType={setOtpType}
          otpType={otpType}
          generateOtpCode={generateOtpCode}
          setOtpState={setOtpState}
          otpState={otpState}
          useLoginByEmail={useLoginByEmail}
          useLoginByCellphone={useLoginByCellphone}
          useLoginOtpEmail={useLoginOtpEmail}
          useLoginOtpCellphone={useLoginOtpCellphone}
          useLoginSpoonity={useLoginSpoonity}
          handleLoginSpoonity={handleLoginSpoonity}
        />
      )}
    </>
  )
}

LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: PropTypes.func,
  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: PropTypes.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: PropTypes.bool,
  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: PropTypes.bool,
  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: PropTypes.string,
  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: PropTypes.string,
  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: PropTypes.string,
  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: PropTypes.element,
  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: PropTypes.element
}

LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
