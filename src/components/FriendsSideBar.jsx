import React from 'react'
import ProfileImage from './ProfileImage'

const FriendsSideBar = () => {
  return (
    <>
       <h1 className="pl-4 font-bold">Friends of Your Friends</h1>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>sintia chinyere</p>
            </div>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>Theresa May</p>
            </div>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>Anthony Frank</p>
            </div>
    </>
  )
}

export default FriendsSideBar