import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage login behavior without UI component
 */
export const LoginForm = (props) => {
  const {
    UIComponent,
    handleButtonLoginClick,
    handleSuccessLogin,
    useLoginByEmail,
    useLoginByCellphone,
    useDefualtSessionManager
  } = props

  const [ordering] = useApi()
  let { defaultLoginTab } = props
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [credentials, setCredentials] = useState({ email: '', cellphone: '', password: '' })

  if (!useLoginByEmail && !useLoginByCellphone) {
    defaultLoginTab = 'none'
  } else if (defaultLoginTab === 'email' && !useLoginByEmail && useLoginByCellphone) {
    defaultLoginTab = 'cellphone'
  } else if (defaultLoginTab === 'cellphone' && !useLoginByCellphone && useLoginByEmail) {
    defaultLoginTab = 'email'
  }

  const [loginTab, setLoginTab] = useState(defaultLoginTab || (useLoginByCellphone && !useLoginByEmail ? 'cellphone' : 'email'))
  const [, { login }] = useSession()

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async () => {
    try {
      const _credentials = {
        [loginTab]: credentials[loginTab],
        password: credentials.password
      }
      setFormState({ ...formState, loading: true })
      const response = await ordering.users().auth(_credentials)
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (useDefualtSessionManager) {
          login({
            user: response.content.result,
            token: response.content.result.session.access_token
          })
        }
        if (handleSuccessLogin) {
          handleSuccessLogin(response.content.result)
        }
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

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const hanldeChangeInput = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */
  const hanldeChangeTab = (tab) => {
    setLoginTab(tab)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          loginTab={loginTab}
          credentials={credentials}
          hanldeChangeInput={hanldeChangeInput}
          handleButtonLoginClick={handleButtonLoginClick || handleLoginClick}
          hanldeChangeTab={hanldeChangeTab}
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
