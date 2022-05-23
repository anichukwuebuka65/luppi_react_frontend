import HomeIcon from '@mui/icons-material/Home'
import Person from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchBar from "./SearchBar"
import { Link } from 'react-router-dom'

 const Header = () => {
  return (
    <div className='grid grid-cols-3 bg-blue-700 h-14 content-center shadow-lg'>
        <div className='pl-7 text-white'>
            <div className='text-4xl font-bold '>
               <Link to="/">luppi</Link> 
            </div>
        </div>

        <div className=' '>
            <ul className=' grid grid-cols-4 text-white justify-evenly'>
                <li><HomeIcon fontSize="large"/></li>
                <li  className='relative '><Person fontSize="large" />
                    <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>2</span>
                </li>
                <li  className='relative'><ChatIcon fontSize="large"/>
                    <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>7</span>
                </li>
                <li  className='relative'><NotificationsIcon fontSize="large"/>
                    <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>1</span>
                </li>
            </ul>
        </div>

        <div className= "w-2/3 pl-4 rounded-full pt-1.5 content-center">
            <SearchBar/> 
        </div>
    </div>
  )}

  
export default Header