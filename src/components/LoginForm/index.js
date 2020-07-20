import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { pickBy } from 'lodash'

/**
 * Component to manage login behavior without UI component
 */
export const LoginForm = (props) => {

  const {
    ordering,
    ComponentUI,
    handleButtonLoginClick,
    handleSuccessLogin,
    useLoginByEmail,
    useLoginByCellphone } = props

  let { defaultLoginTab } = props
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ error: false, result: null })
  const [credentials, setCredentials] = useState({ email: '', cellphone: '', password: '' })

  if (!useLoginByEmail && !useLoginByCellphone) {
    defaultLoginTab = 'none'
  } else if (defaultLoginTab === 'email' && !useLoginByEmail && useLoginByCellphone) {
    defaultLoginTab = 'cellphone'
  } else if (defaultLoginTab === 'cellphone' && !useLoginByCellphone && useLoginByEmail) {
    defaultLoginTab = 'email'
  }

  const [loginTab, setLoginTab] = useState(defaultLoginTab || (useLoginByCellphone && !useLoginByEmail ? 'cellphone' : 'email'))

  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */
  const handleLoginClick = async () => {
    try {
      const _credentials = pickBy(credentials, (value, key) => {
        return loginTab === 'email' && key !== 'cellphone'
                  || loginTab === 'cellphone' && key !== 'email'
      })
      console.log(_credentials)
      setLoading(true)
      const response = await ordering.users.auth(_credentials)
      setLoading(false)
      if (!response.content.error) {
        setError({ error: false, result: null })

        if (handleSuccessLogin) {
          handleSuccessLogin(response.content.result)
        }
      } else {
        setError(response.content)
      }
    } catch (err) {
      setLoading(false)
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
      <React.Fragment>
        { ComponentUI && (
            <ComponentUI {...props} 
              loading={loading}
              error={error}
              loginTab={loginTab}
              credentials={credentials}
              hanldeChangeInput={hanldeChangeInput}
              handleButtonLoginClick={ handleButtonLoginClick || handleLoginClick }
              hanldeChangeTab={hanldeChangeTab}
            />
          )
        }
      </React.Fragment>
  )
}

LoginForm.propTypes = {
  /**
   * Instace of Ordering Class
   * @see See (Ordering API SDK)[https://github.com/sergioaok/ordering-api-sdk]
   */
  ordering: PropTypes.object.isRequired,
  /**
   * Component UI for Login Form
   */
  ComponentUI: PropTypes.elementType,
  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: PropTypes.func,
  /**
   * Function to get login success event
   * @param {Object} user User logged
   */
  handleSuccessLogin: PropTypes.func,
  /**
   * Enable login by email
   */
  useLoginByEmail: PropTypes.bool,
  /**
   * Enable login by cellphone
   */
  useLoginByCellphone: PropTypes.bool,
  /**
   * Tab selected by default
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
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}