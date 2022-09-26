import axios from 'axios'
import { useSelector } from 'react-redux'

function AxiosInstance(){
    const token = useSelector(state => state.user.token)
   return  axios.create({
        baseURL: 'https://luppi.herokuapp.com/',
        //baseURL: 'http://localhost:5000/',
        withCredentials: true,
        headers: {
          "Content-Type":"application/json",
          "Authorization": token
        }
     })
} 

export default AxiosInstance