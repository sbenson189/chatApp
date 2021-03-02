import React from 'react'
import './styles/MessageForm.css'
import {getCurrentUser} from './userAuthentication'
import {handlePost} from './apiFunctions'

export const MessageForm = () => {
    // const user = getCurrentUser()
    
    const handleMessageSubmit = async (evt) => {
        const user = 'test'
        evt.preventDefault()
        const content = evt.target.chatMessage.value

        try {
             await handlePost(user, content)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='chatMessageFormContainer'>
            <form action="/post" className='chatMessageForm' onSubmit={handleMessageSubmit}>
                <input type="textarea" className='chatMessageFormTextArea' name='chatMessage'/>
                <button className='chatMessageFormSendButton'>Send</button>
            </form>
        </div>
    )  
}

export default MessageForm