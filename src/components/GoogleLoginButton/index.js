import React, { useState, useEffect } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useSession } from '../../contexts/SessionContext'

export const GoogleLoginButton = (props) => {
  const { ordering, UIComponent } = props
  console.log(ordering)
  // const [session, dispatcher] = useSession()
  const [name, setName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [email, setEmail] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [formState, setFormState] = useState({
    loading: false,
    result: { error: false }
  })
  const [googleStatus, setGoogleStatus] = useState({
    ready: false,
    logged: false
  })

  const error = (response) => {
    console.error(response); // eslint-disable-line
  }

  const success = (response) => {
    console.log(response); // eslint-disable-line
  }

  const insertGapiScript = () => {
    const js = window.document.createElement('script')
    js.id = 'google-login'
    js.src = 'https://apis.google.com/js/api.js'
    js.onload = () => {
      initializeGoogleSignIn()
    }
    window.document.head.appendChild(js)
  }

  const initializeGoogleSignIn = () => {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id:
          '813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile'
      })
      auth2.attachClickHandler('signin-button', { scope: 'profile email' }, onSuccess, onFailure)
      auth2.signIn().then(() => {
        console.log(auth2.currentUser.get())
        const idToken = auth2.getAuthResponse().id_token
        console.log(idToken)
      })
    })
    window.gapi.load('signin2', () => {
      window.gapi.signin2.render('loginButton', {
        scope: 'profile email',
        theme: 'dark',
        onsuccess: console.log('success'),
        onfailure: console.log('onFailure')
      })
    })
  }

  const onSuccess = (user) => {
    console.log('Signed in as ' + user.getBasicProfile().getName())
  }
  const onFailure = (error) => {
    console.log(error)
  }

  useEffect(() => {
    console.log('loading')
    insertGapiScript()
  }, [])

  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
    setName(response.profileObj.name)
    setFamilyName(response.profileObj.familyName)
    setEmail(response.profileObj.email)
  }

  const handleGoogleLogin = () => {
    setFormState({ ...formState, loading: true })
  }

  const Login = () => (
    /* <GoogleLogin
      clientId='813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com'
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy='single_host_origin'
    /> */
    <>
      <div id='signin-button'>sign</div>
      <div id='loginButton'>login</div>
      <GoogleLogout clientId='813628525689-v00sl2nrfdg1rnj79pqh994rvkkq0glt.apps.googleusercontent.com' />
    </>
  )

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          Login={Login}
          name={name}
          email={email}
          familyName={familyName}
        />
      )}
    </>
  )
}
