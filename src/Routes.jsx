import './styles/App.css'
import Title from './Title'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import LoginButton from './LoginButton'
import SignUpButton from './SignupButton'
import React, {useState, useEffect} from 'react'
import { checkForToken } from './userAuthentication'
import SignOutButton from './SignOutButton'
import { BrowserRouter} from "react-router-dom"

function Routes () {
    const [loginStatus, setLoginStatus] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showSignUpForm, setShowSignUpForm] = useState(false)
    const [showPostForm, setShowPostForm] = useState(false)
    const [uploadedImage, setUploadedImage] = useState() // postForm
    const [userInfo, setUserInfo] = useState([]) // displaySearch
    const [displayPosts, setDisplayPosts] = useState([]) // postCard
    const [findUserinfo, setFindUserInfo] = useState('')
    const [userData, setUserData] = useState('')
    const [loggedInUserPosts, setLoggedInUserPosts] = useState([])

    const state = {
        'loginStatus': loginStatus,
        'setLoginStatus': setLoginStatus,
        'showLoginForm': showLoginForm,
        'setShowLoginForm': setShowLoginForm,
        'showSignUpForm' : showSignUpForm,
        'setShowSignUpForm' : setShowSignUpForm,
        'showPostForm' : showPostForm,
        'setShowPostForm' : setShowPostForm,
        'userInfo' : userInfo,
        'setUserInfo' : setUserInfo,
        'displayPosts' : displayPosts,
        'setDisplayPosts' : setDisplayPosts,
        'uploadedImage' : uploadedImage,
        'setUploadedImage' : setUploadedImage,
        'findUserinfo' : findUserinfo,
        'setFindUserInfo' : setFindUserInfo,
        'userData' : userData,
        'setUserData' : setUserData,
        'loggedInUserPosts' : loggedInUserPosts,
        'setLoggedInUserPosts' : setLoggedInUserPosts
    }

    useEffect(() => {
      checkForToken() ? setLoginStatus(true) : setLoginStatus(false)
    }, [loginStatus])

    return (
        <div className="App">
            <BrowserRouter>
                <div className='chatWindowContainer'> 
                    <Title state={state}/>
                    <MessageList state={state}/>
                    <MessageForm state={state}/>
                </div>
                <div>
                    {!loginStatus ? <LoginButton state={state} /> : null}
                    {!loginStatus ? <SignUpButton state={state} /> : null}
                    {loginStatus  ? <SignOutButton state={state} /> : null}
                </div>
                <div>
                    {showLoginForm ? <LoginForm state={state}/> : null}
                </div>
                <div>
                    {showSignUpForm ? <SignupForm state={state}/> : null}
                </div>
            </BrowserRouter>
        </div>
    )
}

 export default Routes