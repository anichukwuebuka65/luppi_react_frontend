import { useContext, useEffect } from "react"
import { AllContext } from "../context/AllContext"

const Notifications = () => {
  const {setToggleSideBar} = useContext(AllContext)

  useEffect(() => {
    return () => {
      setToggleSideBar(false)
    }
  },[setToggleSideBar])
  return (
    <div className='lg:w-2/5 sm:w-3/4 rounded-2xl mt-3 mx-auto bg-slate-200 p-4'>
      <h1 className='text-2xl font-black '>Notifications</h1>
        <div className='flex space-x-4'>
          <button className='font-semibold '>All</button>
          <button className='font-semibold rounded-full bg-slate-300 p-2'>Unread</button>
        </div>
        <div className='border-2  mt-2 rounded flex items-center'>
           <img className='rounded-full h-16 w-16 mr-2' src="https://ik.imagekit.io/feov916dg/profile_image_Bm_zD2V7c.png" alt="user_notification_photo"/>
           <p className=''><span className=' text-xl font-bold pr-px '>Sunday kingsley</span> has birthday today.Let him know you are thinking about him.</p>
        </div>
        <div className='border-2 p-2 mt-2 rounded flex items-center'>
            <img className='rounded-full h-16 w-16 mr-2' src="https://ik.imagekit.io/feov916dg/profile_image_Bm_zD2V7c.png" alt="user_notification_photo"/>
            <p className=''><span className='text-xl font-bold pr-px'>Christian</span> added a new photo.See what people are saying about it.</p>
        </div>

    </div>
  )
}

export default Notifications