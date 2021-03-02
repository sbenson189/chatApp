import axios from 'axios'

const baseUrl = 'http://localhost:5000'
const getUserInfoEndpoint = '/user/'
const getUsersEndpoint = '/users'
const getPostsEndpoint = '/posts'
const registerEndpoint = '/register'

export const getPosts = async () => {
    return await axios.get(`${baseUrl}${getPostsEndpoint}`).then(res => res.data)
}

export const getUserPosts = async (user) => {
    return await axios.get(`${baseUrl}${getPostsEndpoint}/${user}`).then(res => res.data)
}

export const getUserInfo = async (user) => {
    const response = await axios.get(`${baseUrl}${getUserInfoEndpoint}${user}`).then(res => res)
    const returnedData = response.data
    const returnedStatusCode = response.status
    return returnedStatusCode === 200 ? returnedData : returnedStatusCode
}

export const handleSearch = async (enteredUsername) => {
    const response =  await axios.get(`${baseUrl}${getUserInfoEndpoint}${enteredUsername}`).then(res => res.data)
    return response
}

export const handleRegistrationFormSubmit = (evt) => { // signup form submit function
    evt.preventDefault()
    const username = evt.target.username.value
    const password = evt.target.password.value
    const confirmPassword = evt.target.confirmPassword.value
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    const phoneNumber = evt.target.phoneNumber.value
    const email = evt.target.email.value

    axios.post(`${baseUrl}${registerEndpoint}`, {
        "username": username,
        "password": password,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "phone_number": phoneNumber
    })
    console.log(username, password, confirmPassword, firstName, lastName, phoneNumber, email)
    if (password !== confirmPassword) {
        console.log('Passwords do not match!')
    }
}

export const getUserList = async () => {
    try {
        const response = await axios.get(`${baseUrl}${getUsersEndpoint}`).then(res => res.data)
        const allUsers = response.map(data => data.username)
        return allUsers
    } catch (error) {
        return error
    }
}

export const handlePost = async (user, content) => await axios.post(`${baseUrl}${getPostsEndpoint}`, {content, user}).then(res => (res.data))

export default {getPosts, handleSearch, getUserInfo, getUserPosts, getUserList, handleRegistrationFormSubmit, handlePost}