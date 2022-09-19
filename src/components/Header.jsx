import HomeIcon from '@mui/icons-material/Home'
import Person from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchBar from "./SearchBar"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import Chat from "../components/Chat.jsx"
import InBox from "./InBox.jsx"
import { useState, useContext, useEffect } from "react"
import { AllContext } from '../context/AllContext'
import LeftSideBar from './LeftSideBar'
import AxiosInstance from '../axios'
//import { axiosInstance } from "../axios.js";


 const Header = () => {
    const [inbox, setInbox] = useState(false);
    const [messageCount] = useState()
    const axiosInstance = AxiosInstance()
    const {chat, 
           setChat,
           toggleChat,
           setToggleSideBar,
           reqCount,
           setReqCount} = useContext(AllContext)

    useEffect(() => {
        setToggleSideBar(false)
        setInbox(false) 
        setChat(false) 

        axiosInstance.get("friendrequest/count")
        .then((response) =>{ setReqCount(response.data)})
        .catch((error) => console.log("something went wrong"))

    },[])
    
    const toggleInbox = () => {
        setInbox(true)
    } 

    const toggleInboxOff = () => {
        setInbox(false)
    } 

  return (
    <div className='lg:grid  pt-1.5 lg:pt-0 justify-around lg:grid-cols-4 bg-purple-800 h-12 content-center shadow-lg '>
        <div className='pl-7 hidden lg:block text-white'>
            <div className='text-4xl font-bold '>
               <Link to="/home">luppi</Link> 
            </div>
        </div>

        <div className=' max-w-lg mx-auto lg:max-w-none lg:mx-0  lg:col-span-2 pr-9'>
            <ul className='  flex text-white justify-evenly items-center justify-items-center '>
                <li className='hover:bg-blue-500 p-1.5 rounded'>
                    <Link to='/home'>
                        <HomeIcon sx={{fontSize:30}}/>
                    </Link>
                </li>
                <li  className='relative hover:bg-blue-500 p-1.5  rounded'>
                    <Link to='friendrequest'>
                    <Person sx={{fontSize:30}} />
                    { reqCount > 0 && <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>{reqCount}</span>}
                    </Link>
                </li>
                <li  className='relative hover:cursor-pointer hover:bg-blue-500 p-1.5  rounded' onClick={() => toggleChat()}><span className=''><ChatIcon sx={{fontSize:30}}/></span>
                   {messageCount > 0 && <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>{messageCount}</span>}
                </li>
                <li  className='relative hover:bg-blue-500 p-1.5  rounded'>
                    <Link to="notifications">
                        <NotificationsIcon sx={{fontSize:30}}/>
                        <span className='w-6 h-6 text-center absolute top-0 left-6 rounded-full bg-red-800 '>2</span>
                    </Link>    
                </li>
                <li onClick={()=>setToggleSideBar(state=>!state)} className='md:hidden hover:bg-blue-500 p-1.5 rounded'>
                    <div >
                        <MenuIcon sx={{fontSize:30}}/>
                    </div>    
                </li>
                
            </ul>
        </div>

        <div className= "w-2/3 pl-4 hidden lg:block rounded-full pt-1.5 content-center">
            <SearchBar/> 
        </div>

         {/*chat component */}
        { chat && <div className="z-30  lg:w-2/5 w-72 absolute top-16 sm:right-1/4 right-0"><Chat toggleInbox={toggleInbox} /></div>}

        {/*chat component */}
        {inbox && <div className="z-50   w-80 absolute top-32 sm:right-20 right-0" ><InBox toggleInboxOff={toggleInboxOff}/></div>}
       <div className='absolute top-14 h-[calc(100vh-56px)]'>
           <LeftSideBar/>
       </div>
         
    </div>
  )}

  
export default Header