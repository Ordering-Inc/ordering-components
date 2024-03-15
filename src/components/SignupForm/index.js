import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'
import { useSession } from '../../contexts/SessionContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useEvent } from '../../contexts/EventContext'
import { useWebsocket } from '../../contexts/WebsocketContext'
import parsePhoneNumber from 'libphonenumber-js'

/**
 * Component to manage signup behavior without UI component
 */
export const SignupForm = (props) => {
  const {
    UIComponent,
    useChekoutFileds,
    handleButtonSignupClick,
    handleSuccessSignup,
    externalPhoneNumber,
    handleCustomSignup,
    notificationState,
    isCustomerMode,
    numOtpInputs,
    isGuest
  } = props
  const requestsState = {}
  const CONDITIONAL_CODES = ['1787']

  const [events] = useEvent()
  const [ordering] = useApi()
  const socket = useWebsocket()
  const [, t] = useLanguage()
  const [{ user }, { login }] = useSession()
  const [validationFields] = useValidationFields()

  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [signupData, setSignupData] = useState({ email: '', cellphone: externalPhoneNumber || '', password: '' })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)
  const [otpState, setOtpState] = useState('')
  const [{ configs }] = useConfig()
  const [reCaptchaValue, setReCaptchaValue] = useState({ code: '', version: '' })
  const [isReCaptchaEnable, setIsReCaptchaEnable] = useState(false)
  const [promotionsEnabled, setPromotionsEnabled] = useState(false)
  const [cellphoneStartZero, setCellphoneStartZero] = useState(null)

  const useSignUpOtpEmail = configs?.email_otp_signup_enabled?.value === '1' && !isCustomerMode
  const useSignUpOtpCellphone = configs?.phone_otp_signup_enabled?.value === '1' && !isCustomerMode
  const useSignUpFullDetails = (useSignUpOtpEmail || useSignUpOtpCellphone) ? configs?.full_details_signup_enabled?.value === '1' : true

  const defaultSignUpTab = useSignUpFullDetails ? 'default' : useSignUpOtpEmail ? 'otpEmail' : 'otpCellphone'
  const [signUpTab, setSignUpTab] = useState(defaultSignUpTab)
  /**
   * Default fuction for signup workflow
   */
  const handleSignupClick = async (values) => {
    if (handleCustomSignup) {
      handleCustomSignup(values || signupData)
      return
    }
    const data = values || signupData

    if (isGuest && user?.guest_id) data.guest_token = user?.guest_id

    if (isReCaptchaEnable) {
      if (reCaptchaValue?.code === '') {
        setFormState({
          result: {
            error: true,
            result: [t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')]
          },
          loading: false
        })
        return
      } else {
        data.verification_code = reCaptchaValue?.code
        data.recaptcha_type = reCaptchaValue?.version
      }
    }

    if (notificationState?.notification_token) {
      data.notification_token = notificationState.notification_token
      data.notification_app = notificationState.notification_app
    }

    if (promotionsEnabled) {
      data.settings = { notification: { newsletter: true, promotions: true }, sms: { newsletter: true, promotions: true } }
    }

    if (isCustomerMode) {
      data.phone = data.cellphone
    }
    const newData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== ''))

    if (!newData?.country_code && newData?.country_phone_code && newData?.cellphone) {
      const parsedNumber = parsePhoneNumber(`+${newData?.country_phone_code}${newData?.cellphone}`)
      newData.country_code = parsedNumber.country
    }

    if (CONDITIONAL_CODES.includes(newData?.country_phone_code)) {
      if (newData?.country_code === 'PR') {
        newData.cellphone = `787${newData.cellphone}`
        newData.country_phone_code = '1'
      }
    }

    if (cellphoneStartZero) {
      newData.cellphone = cellphoneStartZero
    }

    try {
      setFormState({ ...formState, loading: true })
      const source = {}
      requestsState.signup = source
      const response = await ordering.users().save(newData, { cancelToken: source })
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        events.emit('singup_user', response.content.result)
        if (handleSuccessSignup) {
          handleSuccessSignup(response.content.result)
        }
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setFormState({
          result: {
            error: true,
            result: err.message
          },
          loading: false
        })
      }
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }

    setSignupData({
      ...signupData,
      ...currentChanges
    })
  }

  /**
   * Update recaptcha value
   * @param {string} value of recaptcha
   */
  const setReCaptcha = (value) => {
    setReCaptchaValue(value)
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useChekoutFileds ||
      (!validationFields.loading && !validationFields.fields?.checkout?.[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.checkout?.[fieldName] &&
        validationFields.fields?.checkout?.[fieldName]?.enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return fieldName === 'password' || (useChekoutFileds &&
      !validationFields.loading &&
      validationFields.fields?.checkout?.[fieldName] &&
      validationFields.fields?.checkout?.[fieldName]?.enabled &&
      validationFields.fields?.checkout?.[fieldName]?.required)
  }

  /**
  * function to send verify code with twilio
  * @param {Object} values object with cellphone and country code values
  */
  const sendVerifyPhoneCode = async (values) => {
    try {
      setVerifyPhoneState({ ...verifyPhoneState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-App-X': ordering.appId,
          'X-Socket-Id-X': socket?.getId()
        },
        body: JSON.stringify({
          ...values,
          cellphone: cellphoneStartZero || values.cellphone,
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

  const generateOtpCode = async (values) => {
    if (isReCaptchaEnable && reCaptchaValue === null) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        generate: true,
        result: {
          error: true,
          result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.')
        }
      })
      return
    }
    const body = {
      type: 4,
      channel: signUpTab === 'otpEmail' ? 1 : 2,
      size: 6
    }
    const email = values?.email || signupData?.email
    const cellphone = cellphoneStartZero || values?.cellphone || signupData?.cellphone
    const countryPhoneCode = values?.country_phone_code || signupData.country_phone_code

    setSignupData({
      ...signupData,
      email: email,
      cellphone: cellphone,
      country_phone_code: countryPhoneCode
    })
    try {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: true,
        result: { error: false, result: null }
      })
      setWillVerifyOtpState(true)
      if (signUpTab === 'otpCellphone') {
        body.country_phone_code = countryPhoneCode
        body.cellphone = cellphone
      } else {
        body.email = email
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
        setCheckPhoneCodeState({
          ...checkPhoneCodeState,
          loading: false,
          result: { result: result, error: null }
        })
        return
      }
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        generate: true,
        result: { error: true, result: result }
      })
    } catch (err) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        generate: true,
        result: { error: true, result: err.message }
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
    if (isGuest && user?.guest_id) body.guest_token = user?.guest_id
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
        if (handleSuccessSignup) {
          handleSuccessSignup(res?.result)
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

  const checkVerifyByOtpCode = async () => {
    const _credentials = signUpTab === 'otpEmail' ? {
      email: signupData?.email,
      one_time_password: otpState
    } : {
      country_phone_code: signupData?.country_phone_code?.replace('+', ''),
      cellphone: signupData?.cellphone,
      one_time_password: otpState
    }

    if (isReCaptchaEnable) {
      if (reCaptchaValue === null) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: true, result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.') } })
        return
      } else {
        _credentials.verification_code = reCaptchaValue
      }
    }
    if (isGuest && user?.guest_id) _credentials.guest_token = user?.guest_id

    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true, result: { error: false } })
      const { content: { error, result } } = await ordering.users().auth(_credentials)
      if (!error && result?.id) {
        login({
          user: result,
          token: result?.session?.access_token
        })
        if (handleSuccessSignup) {
          handleSuccessSignup(result)
        }

        setCheckPhoneCodeState({
          ...checkPhoneCodeState,
          loading: false,
          result: {
            result: result,
            error: false
          }
        })
      } else {
        setCheckPhoneCodeState({
          ...checkPhoneCodeState,
          loading: false,
          result: {
            result: result,
            error: true
          }
        })
      }
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
  /**
   * function to change promotions enabled
   */
  const handleChangePromotions = () => {
    setPromotionsEnabled(!promotionsEnabled)
  }

  useEffect(() => {
    setIsReCaptchaEnable(props.isRecaptchaEnable && configs &&
      Object.keys(configs).length > 0 &&
      configs?.security_recaptcha_signup?.value === '1')
  }, [configs])

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      checkVerifyByOtpCode()
    }
  }, [otpState])

  useEffect(() => {
    return () => {
      if (requestsState.signup) {
        requestsState.signup.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          validationFields={validationFields}
          signupData={signupData}
          showField={showField}
          isRequiredField={isRequiredField}
          verifyPhoneState={verifyPhoneState}
          checkPhoneCodeState={checkPhoneCodeState}
          setCheckPhoneCodeState={handleSetCheckPhoneCodeState}
          handleChangeInput={handleChangeInput}
          handleButtonSignupClick={handleButtonSignupClick || handleSignupClick}
          generateOtpCode={generateOtpCode}
          handleSendVerifyCode={sendVerifyPhoneCode}
          handleCheckPhoneCode={checkVerifyPhoneCode}
          enableReCaptcha={isReCaptchaEnable}
          handleReCaptcha={setReCaptcha}
          handleChangePromotions={handleChangePromotions}
          setOtpState={setOtpState}
          otpState={otpState}
          setSignUpTab={setSignUpTab}
          signUpTab={signUpTab}
          setWillVerifyOtpState={setWillVerifyOtpState}
          setCellphoneStartZero={setCellphoneStartZero}
          willVerifyOtpState={willVerifyOtpState}
          useSignUpFullDetails={useSignUpFullDetails}
          useSignUpOtpEmail={useSignUpOtpEmail}
          useSignUpOtpCellphone={useSignUpOtpCellphone}
        />
      )}
    </>
  )
}

SignupForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default signup behavior
   */
  handleButtonSignupClick: PropTypes.func,
  /**
   * Function to get signup success event
   * @param {Object} user User with session data
   */
  handleSuccessSignup: PropTypes.func,
  /**
   * Function to continue as guest behavior
   */
  handleContinueAsGuest: PropTypes.func,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useChekoutFileds: PropTypes.bool,
  /**
   * Custom function
   */
  handleCustomSignup: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return reset password data without default behavior
   */
  handleCustomSendReview: PropTypes.func,
  /**
   * Components types before signup form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after signup form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: PropTypes.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: PropTypes.element
}

SignupForm.defaultProps = {
  useChekoutFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
