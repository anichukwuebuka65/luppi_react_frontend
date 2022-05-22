import GroupsIcon from '@mui/icons-material/Groups'
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ProfileImage from "./ProfileImage.jsx"

const LeftSideBar = () => {

  return (
    <div> 
        
        {/*profileImage */}
        <div className='flex items-center'>
            <ProfileImage/>
            <span className='font-semibold'>Ani chukwuebuka</span>
        </div>

            {/*sidebarItems */}
        <div className='flex items-center mb-2'>
            <span className='mr-3'><GroupsIcon fontSize='large'/></span>
            <div className='font-bold text-xl text-emerald-900'>Groups</div>
        </div>
        
        <div className='flex items-center mb-2 text-emerald-900'>
            <span className='mr-3'><PeopleIcon fontSize='large'/></span>
            <div className='font-bold text-xl'>Friends</div>
        </div>
       
        <div className='flex items-center mb-2 text-emerald-900'>
            <span className='mr-3'><ChatBubbleIcon fontSize='large'/></span>
            <div className='font-bold text-xl'>Chats</div>
        </div>
        <div className='flex items-center mb-2 text-emerald-900'>
            <span className='mr-3'><StoreIcon fontSize='large'/></span>
            <div className='font-bold text-xl'>Marketplace</div>
        </div>
        <div className='flex items-center mb-2 text-emerald-900'>
            <span className='mr-3'><AccountBoxIcon fontSize='large'/></span>
            <div className='font-bold text-xl'>Profile</div>
        </div>
       
       
    </div>
  )
}

export default LeftSideBar