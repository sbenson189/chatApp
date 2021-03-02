import React from 'react'
import './styles/SignOutButton.css'
import {clearLocalStorage} from './userAuthentication'

export const SignOutButton = ({state}) => {
    const {setLoginStatus} = state

    return (
        <button className='signOutButton' onClick={() => (clearLocalStorage(), setLoginStatus(false))}>Sign Out</button>
    )
}

export default SignOutButton