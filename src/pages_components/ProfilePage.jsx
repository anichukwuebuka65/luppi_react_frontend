import React from 'react'
import PostDetails from '../components/PostDetails'

const ProfilePage = () => {
  return (
    <div className='lg:w-2/3 pb-4 mx-auto '>
        <div className='w-full -mb-10 '><img className="w-full h-80 rounded-b-3xl object-cover" 
            src="guitar.jpg" alt="coverphoto"/>
        </div>
        <div className='md:flex mx-4 justify-between items-center'>
            <div className="flex items-center">
                <div>
                    <img className='h-40 w-40 rounded-full border-4 border-slate-300' 
                    src="guitar.jpg" alt="profilephoto"/>
                </div>
                <div>
                    <div className='text-3xl font-bold'>Ani chukwuebuka</div>
                    <div className='font-semibold text-zinc-800'>400 friends</div>
                </div>
            </div>
            <div className=''>
                <button className='rounded bg-blue-500 p-1.5 mx-2 text-white font-semibold mt-2'>Add Friend</button>
                <button className='rounded bg-blue-500 p-1.5 mx-2 text-white font-semibold mt-2'>Add to Story</button>
                <button className='rounded bg-blue-500 p-1.5 mx-2 text-white font-semibold mt-2'>Edit Profile</button>
            </div>
        </div>

        {/*line */}
        <div className="border-t my-1.5 opacity-20 border-black "></div>

        <div className=''>
            <ul className='mx-auto w-1/2 font-bold text-2xl opacity-90 list-style-none flex justify-center space-x-8'>
                <li>Posts</li>
                <li>Friends</li>
                <li>Photos</li>
                <li>About</li>
            </ul>
        </div>

        {/*line */}
        <div className="border-t my-1.5 opacity-20 border-black "></div>

        <div  className = 'col-span-2 lg:w-4/5 md:w-2/3 mx-auto overflow-auto'>
            <PostDetails/>
        </div>
        
    </div>
  )
}

export default ProfilePage