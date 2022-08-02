import { useState } from 'react'
import  { useContext, useEffect } from 'react'
import { axiosInstance } from '../axios'
import { AllContext } from '../context/AllContext'

const FriendRequests = () => {
  const {setToggleSideBar} = useContext(AllContext)
  const [requestDetails, setRequestDetails] = useState([])
  const [acceptError, setAcceptError] = useState('')

  async function acceptRequest(id){
    const response = await axiosInstance({
      method: 'post',
      url: '/friendrequest?status=accept',
      data: {
          userId: '13',
          allfriendId: id
      }
    })
    const filteredRequest = requestDetails.filter(item => item.id != id)
    response.data[0] == 1 ? setRequestDetails(filteredRequest) : setAcceptError('an error occured, try again')

  }
  async function declineRequest(id){
    const response = await axiosInstance({
      method: 'post',
      url: '/friendrequest?status=decline',
      data: {
          userId: '13',
          allfriendId: id
      }
    })
    console.log(response)
    const filteredRequest = requestDetails.filter(item => item.id != id)
    response.data == 1 ? setRequestDetails(filteredRequest) : setAcceptError('an error occured, try again')
  }

  useEffect(() => {
    axiosInstance.get('/friendrequest?userId=13')
    .then((response) => {
      setRequestDetails(response.data)
    })
    return () => {
      setToggleSideBar(true)
    }
  },[setToggleSideBar])

  return (
      <div className='  sm:w-3/4 lg:w-1/2 mx-auto '>
        {acceptError && acceptError}
        {requestDetails.length > 0 ? requestDetails.map((item) => (
          <div key = {item.id} className='border-2 rounded p-2 mt-2'>
              <p className='text-2xl mb-3'><span className='font-bold text-3xl mr-2 '>{item.firstname} {item.lastname}</span>sent you a friend request.</p>
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