import HomeIcon from '@mui/icons-material/Home'
import Person from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'
import Chat from "../components/Chat.jsx"
import InBox from "./InBox.jsx"
import { useState, useContext } from "react"
import { AllContext } from '../context/AllContext'

 const Header = () => {
    const [inbox, setInbox] = useState(false);
    const {chat, toggleChat} = useContext(AllContext)
    
    const toggleInbox = () => {
    setInbox(true)
    } 

    const toggleInboxOff = () => {
    setInbox(false)
    } 

  return (
    <div className='grid grid-cols-3 bg-blue-700 h-14 content-center shadow-lg relative'>
        <div className='pl-7 text-white'>
            <div className='text-4xl font-bold '>
               <Link to="/">luppi</Link> 
            </div>
        </div>

        <div className=' '>
            <ul className=' grid grid-cols-4 text-white justify-evenly'>
                <li>
                    <Link to='/'>
                        <HomeIcon fontSize="large"/>
                    </Link>
                </li>
                <li  className='relative '>
                    <Link to='friendrequest'>
                    <Person fontSize="large" />
                    <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>2</span>
                    </Link>
                </li>
                <li  className='relative hover:cursor-pointer' onClick={toggleChat}><ChatIcon fontSize="large"/>
                    <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>7</span>
                </li>
                <li  className='relative'>
                    <Link to="notifications">
                        <NotificationsIcon fontSize="large"/>
                        <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>1</span>
                    </Link>    
                </li>
                
            </ul>
        </div>

        <div className= "w-2/3 pl-4 rounded-full pt-1.5 content-center">
            <SearchBar/> 
        </div>

         {/*chat component */}
        { chat && <div className="z-30  w-2/5 absolute top-16 right-1/4"><Chat toggleInbox={toggleInbox} /></div>}

        {/*chat component */}
        {inbox && <div className="z-50  w-2/5 absolute top-32 right-20"><InBox toggleInboxOff={toggleInboxOff}/></div>}


    </div>
  )}

  
export default Header