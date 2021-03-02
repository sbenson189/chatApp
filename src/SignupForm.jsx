import React from 'react'
import './styles/SignupForm.css'
import {handleRegistrationFormSubmit} from './apiFunctions'

function SignupForm ({state}) {
    const {setShowSignUpForm} = state

    return (
        <div>
            <div className='signUpFormContainer'></div>
            <form className="signupForm" action='/register' methods='post' onSubmit={(evt) => handleRegistrationFormSubmit(evt)}>
                <h3>Create your account</h3>
                <div className='signupForm-username'><input type="text" placeholder="Username" name="username" required/></div>
                <div className='signupForm-password'><input type="text" placeholder="Password" name="password" required/></div>
                <div className='signupForm-confirm'><input type="text" placeholder="Confirm Password" name="confirmPassword" required/></div>
                <div className='signupForm-firstName'><input type="text" placeholder="First Name" name="firstName" required/></div>
                <div className='signupForm-lastName'><input type="text" placeholder="Last Name" name="lastName" required/></div>
                <div className='signupForm-phoneNumber'><input type="text" placeholder="Phone Number" name="phoneNumber" required/></div>
                <div className='signupForm-email'><input type="text" placeholder="Email" name="email" required/></div>
                <div className='signupForm-submit' type='submit'><button>Submit</button></div>
                <button className='signUpModalCloseButton' onClick={() => setShowSignUpForm(false)} type='button'>Close</button>
            </form>   
        </div> 
    )
}

export default SignupForm