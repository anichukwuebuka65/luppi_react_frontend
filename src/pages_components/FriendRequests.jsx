import { useState } from 'react'
import  { useContext, useEffect } from 'react'
//import { axiosInstance } from '../axios'
import { AllContext } from '../context/AllContext'
import { useNavigate } from 'react-router-dom'
import AxiosInstance from '../axios'

const FriendRequests = () => {
  const {setToggleSideBar,
    requestDetails, 
    setRequestDetails,
    setReqCount} = useContext(AllContext)
  const [acceptError, setAcceptError] = useState('')
  const [fetchError, setFetchError] = useState('')
  const navigate = useNavigate()
  const axiosInstance = AxiosInstance()


  async function acceptRequest(id){
    const response = await axiosInstance({
      method: 'post',
      url: 'friendrequest?status=accept',
      data: {
          friendId: id
      }
    })
    const filteredRequest = requestDetails.filter(item => item.id != id)
    response.data[0] >= 1 ? setRequestDetails(filteredRequest) : setAcceptError('an error occured, try again')
    setReqCount(filteredRequest.length)
  }

  async function declineRequest(id){
    const response = await axiosInstance({
      method: 'post',
      url: 'friendrequest?status=decline',
      data: {
          userId: '13',
          friendId: id
      }
    })
    const filteredRequest = requestDetails.filter(item => item.id != id)
    response.data == 1 ? setRequestDetails(filteredRequest) : setAcceptError('an error occured, try again')
    setReqCount(filteredRequest.length)

  }

  useEffect(() => {

    axiosInstance.get('friendrequest',)
    .then((response) => {
      if(response.data !== 'invalid token') {
        setRequestDetails(response.data)
      }else{
        navigate('/login',{replace: true})
      }
    }).catch((error)=>{
      console.log(error)
    setFetchError(error.message)//'Something went wrong, try again later')
    })

    return () => {
      setToggleSideBar(false)
    }
  },[setToggleSideBar])
  if (fetchError) return <div>{fetchError}</div>
  return (
      <div className='  sm:w-3/4 lg:w-1/2 mx-auto '>
        {acceptError && acceptError}
        {requestDetails.length > 0 ? requestDetails.map((item) => (
          <div key = {item.id} className='border shadow-md rounded p-2 m-4'>
              <p className='text-lg mb-3'><span className='font-bold text-2xl mr-2 '>{item.firstName} {item.lastName}</span>sent you a friend request.</p>
              <div className='flex space-x-6'>
                  <button onClick={()=>{acceptRequest(item.id)}} className='bg-blue-400 rounded text-white w-1/4'>Accept</button>
                  <button onClick={()=>{declineRequest(item.id)}} className='bg-red-400 rounded text-white w-1/4'>Reject</button>
              </div>
          </div>
        )) : <div className='border-2 rounded p-2 mt-2 opacity-90'>No friendRequests</div>}    
      </div>
  )
}

export default FriendRequests