import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import parsePhoneNumber from 'libphonenumber-js'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useEvent } from '../../contexts/EventContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useLanguage } from '../../contexts/LanguageContext'

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
    setOtpDataUser,
    handleOpenSignup,
    isPFChangsLayout
  } = props

  const [ordering] = useApi()
  let { defaultLoginTab } = props
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [credentials, setCredentials] = useState({ email: '', cellphone: '', password: '' })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [reCaptchaValue, setReCaptchaValue] = useState({ code: '', version: '' })
  const [isReCaptchaEnable, setIsReCaptchaEnable] = useState(false)
  const isAlsea = ordering.project === 'alsea'

  const useLoginByCellphone = configs?.phone_password_login_enabled?.value === '1'
  const useLoginOtpEmail = configs?.opt_email_enabled?.value === '1'
  const useLoginOtpCellphone = configs?.otp_cellphone_enabled?.value === '1'
  const useLoginByEmail = (useLoginByCellphone || useLoginOtpEmail || useLoginOtpCellphone)
    ? configs?.email_password_login_enabled?.value === '1' : true

  const useLoginOtp = useLoginOtpEmail || useLoginOtpCellphone

  defaultLoginTab = defaultLoginTab || (useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp')
  const [loginTab, setLoginTab] = useState(defaultLoginTab)
  const [otpType, setOtpType] = useState(((!useLoginOtpEmail && useLoginOtpCellphone) || isPFChangsLayout) ? 'cellphone' : 'email')
  const [otpState, setOtpState] = useState('')
  const [createOtpUser, setCreateOtpUser] = useState(false)
  const [, { login, logout }] = useSession()
  const [, t] = useLanguage()

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async (values) => {
    if (handleCustomLogin) {
      handleCustomLogin(values || credentials, loginTab)
      return
    }
    try {
      let _credentials
      if (loginTab === 'otp') {
        _credentials = {
          [otpType]: (values && values[otpType]) || credentials[otpType],
          one_time_password: (values && values?.code) || otpState,
          country_code: (values && values?.country_phone_code) || credentials?.country_phone_code
        }
        if (otpType === 'cellphone') {
          _credentials = {
            ..._credentials,
            country_phone_code: (values && values?.country_phone_code) || credentials?.country_phone_code,
          }
        }
      } else {
        _credentials = {
          [loginTab]: (values && values[loginTab]) || credentials[loginTab],
          password: (values && values?.password) || credentials.password
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
                    result: ['YOU_DO_NOT_HAVE_PERMISSION']
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
          login({
            user: result,
            token: result.session?.access_token
          })
        }
        events.emit('userLogin', result)
        if (handleSuccessLogin) {
          handleSuccessLogin(result)
        }

        if (urlToRedirect) {
          window.location.href = `${window.location.origin}${urlToRedirect}`
        }
      }
      setFormState({
        result: {
          error,
          result
        },
        loading: false
      })
      events.emit('general_errors', result)
    } catch (err) {
      events.emit('general_errors', err?.message)
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

    if (useLoginOtpCellphone && !useLoginOtpEmail) {
      setOtpType('cellphone')
    }
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
          'X-App-X': ordering.appId
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
          'X-App-X': ordering.appId
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
          'X-App-X': ordering.appId
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

  const alseaOtpInitialize = async (values, type, social) => {
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true })
      setCreateOtpUser(false)
      const body = {
        type
      }
      if (social?.cellphone || otpType === 'cellphone') {
        body.user = values?.cellphone || credentials?.cellphone
        body.cellphone = values?.cellphone || credentials?.cellphone
        body.country_code = values?.countryPhoneCode
      }
      if ((social?.email && !social?.cellphone) || otpType === 'email') {
        body.email = values?.email || credentials?.email
        body.user = values?.email || credentials?.email
      }
      const requestParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
      const params = `pass=q7i1rcljnv3roqv72sleodqt9mi0udrrotqau4rhi81274q2ejt${body.cellphone ? `&cellphone=${body.cellphone}` : ''}${body.country_code ? `&country_phone_code=${body.country_code}` : ''}${body.email ? `&mail=${body.email}` : ''}`
      const result = await alseaOtpConsult(params, social)
      if (social) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: false })
        return
      }
      if (result === 'new_user') {
        if (otpType === 'cellphone') {
          const responseOtp = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/cellphone_new_user_code.php`, requestParams)
          const resultOtp = await responseOtp.json()
          if (resultOtp.error) {
            setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: resultOtp.result }, loading: false })
            return false
          }
          setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { result: resultOtp.result }, loading: false })
          setCreateOtpUser(true)
          return true
        } else {
          setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: t('EMAIL_DOES_NOT_EXIST', 'The email doesn\'t exist') }, loading: false })
          setOtpType('cellphone')
        }
      } else if (result === 'existing_user') {
        const responseOtp = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/otp_create.php`, requestParams)
        const resultOtp = await responseOtp.json()
        if (resultOtp.error) {
          setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: resultOtp.result }, loading: false })
          return false
        }
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { result: resultOtp.result }, loading: false })
        setCredentials({ ...credentials, country_phone_code: body.country_code })
        return true
      } else {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: result.result }, loading: false })
        return false
      }
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message }, loading: false })
    }
  }

  const alseaOtpConsult = async (params) => {
    try {
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/wow_search_recover.php?${params}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      const text = await response.text()
      if (text.toString() === 'Lo sentimos, estamos en mantenimiento.') {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: text } })
        return text
      }
      return text
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message } })
    }
  }

  const alseaOtpCreateUser = async (values) => {
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const body = {
        code: values.code
      }
      if (otpType === 'cellphone') {
        body.cellphone = values?.cellphone || credentials?.cellphone
        body.country_code = values?.country_code
      } else {
        body.email = values?.email || credentials?.email
      }
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/cellphone_new_user_signup.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const result = await response.json()
      if (result.error) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: result.result } })
        return
      }
      setOtpDataUser({
        email: body.email,
        cellphone: body.cellphone,
        country_code: body.country_code,
        id: result?.result?.id,
        token: result?.result?.session?.access_token
      })
      handleOpenSignup()
      setFormState({
        ...formState,
        loading: false
      })
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message } })
      setFormState({
        ...formState,
        loading: false
      })
    }
  }

  const handleLoginFacebookAlsea = async (fbdata) => {
    try {
      const fbBody = JSON.stringify({
        access_token: fbdata?.authResponse?.accessToken,
        social_id: fbdata?.social_id
      })
      const responsefb = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/api/facebook.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: fbBody
      })
      const { result, error, redirect } = await responsefb.json()
      if (error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
        return
      }
      if (redirect) {
        setOtpDataUser({
          ...result,
          social: true
        })
        handleOpenSignup()
      } else {
        login({
          user: result,
          token: result?.session?.access_token
        })
      }
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

  const handleLoginGoogleAlsea = async (user) => {
    let params = 'pass=q7i1rcljnv3roqv72sleodqt9mi0udrrotqau4rhi81274q2ejt'
    if (user.email) {
      params = params + `${user.email ? `&mail=${user.email}` : ''}`
    }
    if (user.cellphone && user.country_code) {
      params = params + `${user.cellphone ? `&cellphone=${user.cellphone}` : ''}${user.country_code ? `&country_phone_code=${user.country_code}` : ''}`
    }
    const response = await alseaOtpConsult(params)
    if (response === 'new_user') {
      setOtpDataUser({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        cellphone: user.cellphone,
        country_code: user.country_code,
        id: user?.id,
        token: user?.session?.access_token,
        social: true
      })
      handleOpenSignup()
    } else if (response === 'existing_user') {
      login({
        user,
        token: user?.session?.access_token
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
          alseaOtpInitialize={alseaOtpInitialize}
          createOtpUser={createOtpUser}
          alseaOtpCreateUser={alseaOtpCreateUser}
          // handleCheckFacebookInfo={handleCheckFacebookInfo}
          handleLoginFacebookAlsea={handleLoginFacebookAlsea}
          alseaOtpConsult={alseaOtpConsult}
          handleLoginGoogleAlsea={handleLoginGoogleAlsea}
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
