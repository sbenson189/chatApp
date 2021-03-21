import axios from 'axios'

const baseUrl = 'http://localhost:5000'
const loginEndpoint = '/login'

export const loginUser = async (username, password) => {
    await axios.post(`${baseUrl}${loginEndpoint}`, {
        username,
        password
    }).then(res => (localStorage.setItem('userToken', res.data.token), localStorage.setItem('currentUser', username)), res => res.status)
    return localStorage.userToken ? true : false
}

export const getCurrentUser = () => localStorage.currentUser

export const clearLocalStorage = () => localStorage.clear()

export const checkForToken = () => localStorage.userToken ? true : false

export default {loginUser, checkForToken, clearLocalStorage, getCurrentUser}