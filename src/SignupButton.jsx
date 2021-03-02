import React from 'react'
import './styles/SignUpButton.css'

export const SignUpButton = ({state}) => {
    const {setShowSignUpForm} = state

    return (
        <button className='signUpButton' onClick={() => setShowSignUpForm(true)}>Sign-Up</button>
    )
}

export default SignUpButton