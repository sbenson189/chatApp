import React, {useState, useEffect} from 'react'
import './styles/MessageList.css'
import {getPosts} from './apiFunctions'

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    useEffect(async () => {
        setMessages(await getPosts())
    }, [messages])

    return (
        <div className='messageListContainer'>
            {messages === undefined ? null : messages.map(
                post => {
                    return(
                        <div className='messagesContainer'>
                            <p className='chatMessagesContent'>
                                <span className='messageUsername'>{post.username}: </span> 
                                <span className='messageText'>{post.content} </span>
                                <span> -- </span>
                                <span className='chatMessagesDate'> Posted: {post.post_date}</span>
                            </p>
                            
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default MessageList