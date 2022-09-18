import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosInstance from "../axios";
import ProfileImage from "./ProfileImage"

const RightSideBar = () => {
    const onlineIcon = " absolute h-2.5 opacity-80 w-2.5 rounded-full bg-red-400 right-1.5 bottom-px border-black border-2";
    const [users, setUsers] = useState([])
    const axiosInstance = AxiosInstance()

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const {data} = await axiosInstance.get("users")
                setUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    },[])

  return (
    <div className="h-full md:ml-3 ">
        <div className="h-1/2 rounded bg-slate-200 bg-white p-3 mb-3">
            <h1 className="font-semibold">People You May Know</h1>

            { users.length > 0 ? users.map((user) => (
                 <Link to={`/profilepage?Id=${user.id}`} key={user.id} className="flex my-4 hover:bg-slate-300 rounded">
                    <ProfileImage onlineIcon={onlineIcon} image={user.user_profile?.profilepicture}/>
                    <p>{user.firstName} {user.lastName}</p>
                </Link>
            )) : <div> no users found</div>}
           
          
        </div>
        <div className="h-1/2  rounded  bg-slate-200 bg-white p-3">
            <h1  className="font-semibold">Online Friends</h1>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>sintia chinyere</p>
            </div>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>sintia chinyere</p>
            </div>
            
        </div>
    </div>
  )
}

export default RightSideBar