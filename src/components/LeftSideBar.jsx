import GroupsIcon from '@mui/icons-material/Groups'
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfileImage from "./ProfileImage.jsx"
import {Link} from "react-router-dom"

const LeftSideBar = () => {

  return (
    <div> 
        
        {/*profileImage */}
        <div className='flex items-center p-2 hover:bg-slate-300 rounded'>
            <ProfileImage classAttr={"h-7 w-7"}/>
            <span className='font-semibold'><Link to="/profile">Ani chukwuebuka</Link> </span>
        </div>

            {/*sidebarItems */}
        <div className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
            <span className='mr-3 text-blue-500'><GroupsIcon fontSize='large'/></span>
            <div className='font-bold text-xl text-emerald-900'><Link to="/groups">Groups</Link></div>
        </div>
        
        <div className='flex items-center mb-2  hover:bg-slate-300 rounded pl-2 '>
            <span className='mr-3 text-blue-500'><PeopleIcon fontSize='large'/></span>
            <div className='font-bold text-xl text-emerald-900'><Link to="/friends">Friends</Link></div>
        </div>
       
        <div className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
            <span className='mr-3 text-blue-500'><ChatBubbleIcon fontSize='large'/></span>
            <div className='font-bold text-xl text-emerald-900'><Link to="/groups">Marketplace</Link>s</div>
        </div>
        <div className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
            <span className='mr-3 text-blue-500'><StoreIcon fontSize='large'/></span>
            <div className='font-bold text-xl text-emerald-900'><Link to="/groups">Chats</Link></div>
        </div>
        <div className='flex items-center mb-2 hover:bg-slate-300 rounded pl-2'>
            <span className='mr-3 text-blue-500'><AccountBoxIcon fontSize='large'/></span>
            <div className='font-bold text-xl text-emerald-900'><Link to="/groups">Profile</Link></div>
        </div>
       
       
    </div>
  )
}

export default LeftSideBar