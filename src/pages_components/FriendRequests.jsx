import React from 'react'

const FriendRequests = () => {
  return (
    <div className='w-1/2 mx-auto'>
        <div className='border-2 rounded p-2 mt-2'>
            <p className='text-2xl mb-3'><span className='font-bold text-3xl mr-2 '>Isaac</span>sent you a friend request.</p>
            <div className='flex space-x-6'>
                <button className='bg-blue-400 rounded text-white w-1/4'>Accept</button>
                <button className='bg-red-400 rounded text-white w-1/4'>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default FriendRequests