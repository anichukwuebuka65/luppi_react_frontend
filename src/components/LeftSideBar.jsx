import GroupsIcon from '@mui/icons-material/Groups'
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfileImage from "./ProfileImage.jsx"
import {Link, useLocation} from "react-router-dom"
import { useContext } from 'react';
import { AllContext } from '../context/AllContext.jsx';
import LogoutIcon from '@mui/icons-material/Logout';

const LeftSideBar = () => {
    const {toggleChat,toggleSideBar} = useContext(AllContext)
    let {pathname} = useLocation()
  return (
    <div className={`${toggleSideBar && 'hidden' }
     ${pathname ===  "/friends" && 'lg:block' } 
     ${pathname ===  "/" && 'lg:block' } 
  
     w-72 z-20 absolute h-[calc(100vh-56px)] left-0 top-0`}> 

        <div className='bg-slate-100 '>
            {/*profileImage */}
            <div className='flex items-center p-2 hover:bg-slate-300 rounded'>
                <ProfileImage classAttr={"h-7 w-7"}/>
                <span className='font-semibold'><Link to="/profile">Ani chukwuebuka</Link> </span>
            </div>

                {/*sidebarItems */}
            <Link to="/groups" className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-blue-500'><GroupsIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Groups</div>
            </Link>
            
            <Link to="/friends" className='flex items-center mb-2  hover:bg-slate-300 rounded pl-2 '>
                <span className='mr-3 text-blue-500'><PeopleIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Friends</div>
            </Link>
        
            <Link to="/" className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-blue-500'><ChatBubbleIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Marketplace</div>
            </Link>
            <div onClick={toggleChat} className='flex items-center hover:cursor-pointer mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-blue-500'><StoreIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Chats</div>
            </div>
            <Link to="/ProfilePage" className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
                <span className='mr-3 text-blue-500'><AccountBoxIcon fontSize='large'/></span>
                <div className='font-bold text-xl text-emerald-900'>Profile</div>
            </Link>
            <div className='flex items-center mb-2 hover:bg-slate-300 hover:cursor-pointer rounded pl-2'>
                <span className='mr-3 text-blue-500'><LogoutIcon fontSize=''/></span>
                <div className='font-bold text-md text-emerald-700'>Logout</div>
            </div>
            
        
        </div>
    </div>
  )
}

export default LeftSideBar