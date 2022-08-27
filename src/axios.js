import axios from 'axios'

export const axiosInstance = axios.create({
    //baseURL: 'https://luppi.herokuapp.com/',
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
})

