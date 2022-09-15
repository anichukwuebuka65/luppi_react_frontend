import GroupsIcon from '@mui/icons-material/Groups'
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfileImage from "./ProfileImage.jsx"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useContext } from 'react';
import { AllContext } from '../context/AllContext.jsx';
import LogoutIcon from '@mui/icons-material/Logout';
import {  useSelector } from 'react-redux';
//import { axiosInstance } from '../axios.js';
import GroupRightSideBar from './GroupRightSideBar.jsx';

const LeftSideBar = () => {
    const userId = useSelector(state => state.user.id)
    const {firstName, lastName} = useSelector(state => state.user)
    const {setToken,toggleChat,toggleSideBar,setToggleSideBar} = useContext(AllContext)
    let {pathname} = useLocation()
    const navigate = useNavigate()

     function logOut() {
        setToken("")
        navigate('/login')
       
    }

  return (
    <div className={`${!toggleSideBar && 'hidden' }
     ${(pathname ===  "/home/friends" || new RegExp(/\/home\/[0-9]+/).test(pathname)) && 'lg:block' } 
     ${pathname ===  "/home" && 'lg:block' } 
     w-72 z-20 absolute h-[calc(100vh-56px)]  left-0 top-0`}> 

        <div className='bg-slate-300 h-full -mt-2 shadow-lg md:shadow-none md:border-none border'>
            {pathname !== "/groups" &&
            <>
            {/*profileImage */}
            <div className='flex items-center p-2 hover:bg-slate-300 rounded'>
                <ProfileImage classAttr={"h-7 w-7"}/>
                <span className='font-semibold'><Link to={`/profilepage?Id=${userId}`}>{firstName} {lastName}</Link> </span>
            </div>

                {/*sidebarItems */}
            <Link to="/groups" className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-purple-800'><GroupsIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Groups</div>
            </Link>
            
            <Link to={`/ProfilePage?Id=${userId}`} className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-purple-800'><AccountBoxIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Profile</div>
            </Link>
            <Link to="/home/friends" className='flex items-center mb-2  hover:bg-slate-300 rounded pl-2 '>
                <span className='mr-3 text-purple-800'><PeopleIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Friends</div>
            </Link>
        
            <Link to="home" className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-purple-800'><ChatBubbleIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Marketplace</div>
            </Link>
            <div onClick={toggleChat} className='flex items-center hover:cursor-pointer mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-purple-800'><StoreIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Chats</div>
            </div>
            <div className='flex items-center mb-2 hover:bg-slate-300 hover:cursor-pointer rounded pl-2'>
                <span className='mr-3 text-purple-800'><LogoutIcon fontSize=''/></span>
                <div onClick={logOut} className='font-bold text-md text-emerald-700'>Logout</div>
            </div>
            </>
            }
             {pathname === "/groups" && <div className="p-2"><GroupRightSideBar/></div>}
        </div>
    </div>
  )
}

export default LeftSideBar