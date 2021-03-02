import React from 'react'
import './styles/LoginButton.css'

export const LoginButton = ({state}) => {
    const {setShowLoginForm} = state

    return (
        <button className='loginButton' onClick={() => setShowLoginForm(true)}>Login</button>
    )
}

export default LoginButton