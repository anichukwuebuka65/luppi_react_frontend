import { useState } from "react"
import { useContext, useEffect } from "react"
import FriendsSideBar from "../components/FriendsSideBar"
import { AllContext } from "../context/AllContext"
import {Link} from "react-router-dom"

const Friends = () => {
    const {setToggleSideBar, axiosInstance} = useContext(AllContext)
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        setToggleSideBar(false)
        axiosInstance.get("friends")
        .then(response => setFriends(response.data))
        .catch(error => console.log(error))
    },[])

  return (
    <>
       
        {/*center div */}
        <div className = 'col-span-2 w-4/5 bg-slate-200 border-zinc-300 border-2 rounded mx-auto overflow-auto'>
            <div className="text-3xl font-bold p-6">All Friends</div>
            {friends?.length > 0 && friends.map(friend => (
                <Link to={`/profilepage?Id=${friend?.id}`} key = {friend.id} className="flex space-x-3 p-3 hover:bg-slate-300 rounded">
                    <div>
                        <img className="rounded-full h-14 w-14" src={friend?.user_profile?.profilepicture} alt="friends_profile_photo" />
                    </div>
                    <div>
                        <div className="font-bold">{friend?.firstName} {friend?.lastName}</div>
                        <p className="italic">View Profile</p>
                    </div>
                </Link>
            ))}
            
        </div>

        {/*right div */}
        <div className="hidden lg:block">
           <FriendsSideBar/>
        </div>
    </>
  )
}

export default Friends