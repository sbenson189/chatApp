import React from 'react'
import './styles/LoginForm.css'
import {loginUser, checkForToken} from './userAuthentication'

export const LoginForm = ({state}) => {
   const {setShowLoginForm, setLoginStatus} = state

   const handleFormSubmit = async (evt) => {
    evt.preventDefault()
    const username = evt.target.username.value
    const password = evt.target.password.value
    await loginUser(username, password).then(() => checkForToken() ? (setLoginStatus(true), setShowLoginForm(false)) : setShowLoginForm(true))
}

    return (
        <div className='loginFormContainer'>
            <form  className="loginForm" action='/login' method='post' onSubmit={handleFormSubmit}>
                <h3>Login Below</h3>
                <input className='usernameInput' type="text" placeholder="Username" name='username' required/>
                <input className='passwordInput' type="password" placeholder="Password" name='password' required/>
                <button className='LoginModalLoginButton' type='submit'>Login</button>
                <button className='LoginModalCloseButton' type='button' onClick={() => setShowLoginForm(false)}>Close</button>
            </form>
        </div>
    )
}

export default LoginForm