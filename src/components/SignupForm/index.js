import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'
import { useSession } from '../../contexts/SessionContext'
import { useConfig } from '../../contexts/ConfigContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useEvent } from '../../contexts/EventContext'
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
    otpDataUser
  } = props
  const requestsState = {}

  const [events] = useEvent()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [, { login }] = useSession()
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
  const [confirmDeleteUser, setConfirmDeleteUser] = useState(true)
  const [openOtpOptions, setOpenOtpOptions] = useState(false)
  const useSignUpOtpEmail = configs?.email_otp_signup_enabled?.value === '1'
  const useSignUpOtpCellphone = configs?.phone_otp_signup_enabled?.value === '1'
  const useSignUpFullDetails = (useSignUpOtpEmail || useSignUpOtpCellphone) ? configs?.full_details_signup_enabled?.value === '1' : true

  const defaultSignUpTab = useSignUpFullDetails ? 'default' : useSignUpOtpEmail ? 'otpEmail' : 'otpCellphone'
  const isAlsea = ordering.project === 'alsea'
  const [signUpTab, setSignUpTab] = useState(defaultSignUpTab)
  /**
   * Default fuction for signup workflow
   */
  const handleSignupClick = async (values, aditionalValues) => {
    if (handleCustomSignup) {
      handleCustomSignup(values || signupData)
      return
    }
    const data = values || signupData
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
      delete data.country_phone_code
    }
    if (otpDataUser.email) {
      delete data.email
    }
    if (otpDataUser.cellphone) {
      delete data.cellphone
      delete data.country_phone_code
    }

    const newData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== ''))
    try {
      setFormState({ ...formState, loading: true })
      const source = {}
      requestsState.signup = source
      let response
      if (otpDataUser?.id || aditionalValues?.id) {
        response = await ordering.setAccessToken(otpDataUser?.token || aditionalValues?.session?.access_token).users(otpDataUser?.id || aditionalValues?.id).save(Object.keys(newData).length > 0 ? newData : otpDataUser, { cancelToken: source })
        if (!response.content.error) {
          setConfirmDeleteUser(false)
        }
      } else {
        response = await ordering.users().save(newData, { cancelToken: source })
      }
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
          'Content-Type': 'application/json', 'X-App-X': ordering.appId
        },
        body: JSON.stringify({
          ...values,
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

  const generateOtpCode = async (values) => {
    if (isReCaptchaEnable && reCaptchaValue === null) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: true, result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.') } })
      return
    }
    const body = {
      type: 4,
      channel: signUpTab === 'otpEmail' ? 1 : 2,
      size: 6
    }
    const email = values?.email || signupData?.email
    const cellphone = values?.cellphone || signupData?.cellphone
    const countryPhoneCode = values?.country_phone_code || signupData.country_phone_code

    setSignupData({
      ...signupData,
      email: email,
      cellphone: cellphone,
      country_phone_code: countryPhoneCode
    })
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true, result: { error: false, result: null } })
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
          'Content-Type': 'application/json', 'X-App-X': ordering.appId
        },
        body: JSON.stringify(body)
      })
      const { result, error } = await response.json()
      if (!error) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: false, result: { result: result, error: null } })
        return
      }
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: false, result: { error: true, result: result } })
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: false, result: { error: true, result: err.message } })
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
          'Content-Type': 'application/json', 'X-App-X': ordering.appId
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
      one_time_password: otpState,
      country_code: signupData?.country_phone_code?.replace('+', '')
    }

    if (isReCaptchaEnable) {
      if (reCaptchaValue === null) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: true, result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The ReCaptcha validation is required.') } })
        return
      } else {
        _credentials.verification_code = reCaptchaValue
      }
    }

    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true, result: { error: false } })
      const { content: { error, result } } = await ordering.users().auth(_credentials)
      if (!error && result?.id) {
        if (otpDataUser.social) {
          await login({
            user: {
              ...result,
              ...otpDataUser
            },
            token: result?.session?.access_token
          })
          await handleSignupClick({}, result)
        } else {
          login({
            user: result,
            token: result?.session?.access_token
          })
        }
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

  const deleteOtpUser = async () => {
    try {
      await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/delete_new_user.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: otpDataUser.id,
          token: otpDataUser.token
        })
      })
    } catch (err) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: {
          error: err.message
        }
      })
    }
  }

  const alseaOtpConsult = async (params, type) => {
    try {
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform//wow_search_recover.php?${params}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      const text = await response.text()
      if (otpDataUser.social) {
        if (text === 'new_user') {
          return text
        } else if (text === 'existing_user') {
          setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: type === 'email' ? t('EMAIL_ALREADY_TAKEN', 'Email already taken') : t('CELLPHONE_ALREADY_EXISTS', 'The cellphone already exists') }, loading: false })
          setOpenOtpOptions(false)
        } else {
          setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: t('ATENTION', 'Atención') }, loading: false })
        }
      }
      return text
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message } })
    }
  }

  const signUpOtpUser = async () => {
    setFormState({ ...formState, loading: true })
    let params
    const alseaPass = 'q7i1rcljnv3roqv72sleodqt9mi0udrrotqau4rhi81274q2ejt'
    params = `pass=${alseaPass}&mail=${signupData.email}`
    if (otpDataUser.social) {
      if (!otpDataUser?.email) {
        await alseaOtpConsult(params, 'email')
      }
      if (!otpDataUser?.cellphone) {
        params = `pass=${alseaPass}${signupData.cellphone ? `&cellphone=${signupData.cellphone}` : ''}${signupData.country_phone_code ? `&country_phone_code=${signupData.country_phone_code}` : ''}`
        const text = await alseaOtpConsult(params, 'cellphone')
        if (text === 'new_user') setOpenOtpOptions(true)
      }
      setFormState({ ...formState, loading: false })
      return
    }
    const result = await alseaOtpConsult(params)
    if (result === 'new_user') {
      handleSignupClick(signupData)
    } else if (result === 'existing_user') {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: t('EMAIL_ALREADY_TAKEN', 'Email already taken') } })
    } else {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: result } })
    }
    setFormState({ ...formState, loading: false })
  }

  const socialOtpUser = async (values, type) => {
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true })
      const body = {
        type,
        user: values?.cellphone || signupData?.cellphone,
        cellphone: values?.cellphone || signupData?.cellphone,
        country_code: signupData?.country_phone_code
      }

      const requestParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
      const responseOtp = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/cellphone_new_user_code.php`, requestParams)
      const resultOtp = await responseOtp.json()
      if (resultOtp.error) {
        setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: resultOtp.result }, loading: false })
        return false
      }
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { result: resultOtp.result }, loading: false })
      return true
    } catch (err) {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, result: { error: err.message }, loading: false })
    }
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
          willVerifyOtpState={willVerifyOtpState}
          useSignUpFullDetails={useSignUpFullDetails}
          useSignUpOtpEmail={useSignUpOtpEmail}
          useSignUpOtpCellphone={useSignUpOtpCellphone}
          deleteOtpUser={deleteOtpUser}
          confirmDeleteUser={confirmDeleteUser}
          signUpOtpUser={signUpOtpUser}
          openOtpOptions={openOtpOptions}
          socialOtpUser={socialOtpUser}
          setOpenOtpOptions={setOpenOtpOptions}
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
