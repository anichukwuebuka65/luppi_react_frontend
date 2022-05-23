import SearchBar from '../components/SearchBar'
import ProfileImage from '../components/ProfileImage'
import CloseIcon from '@mui/icons-material/Close';
const Chat = () => {
  return (
    <div className='absolute  right-0 h-4/5 rounded w-2/3 bg-slate-300 border-2 p-2 overflow-auto'>
            <div className='flex justify-between items-center '>
                <h1 className='text-2xl font-bold pt-2 pl-4 mb-3 opacity-90'>Chats</h1>
                <span className='hover:bg-slate-200 rounded-full'><CloseIcon/></span>
            </div>

            <div className='mb-2'><SearchBar placeholder="Search messager..."/></div>
            <div className='flex items-center py-1.5 px-1.5 hover:bg-slate-400 hover:cursor-pointer rounded'>
                <ProfileImage classAttr="h-14 w-14"/>
                <p className='font-semibold text-lg'>Tony hillary.</p>
            </div>
            <div className='flex items-center py-1.5 px-1.5 hover:bg-slate-400 hover:cursor-pointer rounded '>
                <ProfileImage classAttr="h-14 w-14"/>
                <p className='font-semibold text-lg'>Mary slessor.</p>
            </div>
            <div className='flex items-center py-1.5 px-1.5 hover:bg-slate-400 hover:cursor-pointer rounded '>
                <ProfileImage classAttr="h-14 w-14"/>
                <p className='font-semibold text-lg'>Trump kriss.</p>
            </div>
    </div>
  )
}

export default Chat