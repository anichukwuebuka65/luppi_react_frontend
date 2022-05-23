import  CloseIcon  from '@mui/icons-material/Close'
import React from 'react'
import ProfileImage from './ProfileImage'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const InBox = () => {
  return (
    <div className='absolute right-0 h-4/5 rounded w-2/3 bg-slate-300 border-2 p-2 overflow-auto'>

        <div className='h-16 px-2 bg-slate-400 rounded flex items-center justify-between'>
            <div className='flex space-x-px items-center'>
                <span><ProfileImage/></span>
                <h1 className='font-bold text-lg'>Tony flex</h1>
            </div>
            <div className='hover:bg-slate-200 rounded-full'>
                <CloseIcon/>
            </div>
        </div>
        <div className='bg-white my-2 h-2/3 flex flex-col overflow-auto'>
            <div className='p-2'>
                <p className='text-sm max-w-xxs  bg-slate-300 rounded pt-px px-1.5'>
                    helo chika this your friend from awka
                </p>
            </div>
            <div className='p-2 '>
                <p className='text-sm max-w-xxs  bg-slate-300 float-right rounded pt-px px-1.5 '>
                    helo emeka how are you
                </p>
            </div>
            <div className='p-2 basis-0'>
                <div className='text-sm max-w-xxs bg-slate-300 rounded pt-px px-1.5'>
                    whats up
                </div>
            </div>
           
        </div>
        <div className='flex justify-between h-9 mt-4'>
            <div className='w-4/5 rounded-full px-3 pt-px bg-white hover:border-slate-300 border-2 border-slate-400'>
                <input className='focus:outline-none ' 
                type="text" name='message' placeholder="write message"/>
                <label htmlFor='sendphoto' className='float-right opacity-50'><AddAPhotoIcon/></label>
                <input className='hidden' type="file" id="sendphoto" name="sendphoto"/>
            </div>
            <button className='bg-blue-600 text-white px-2 rounded hover:bg-blue-500'>Send</button>
        </div>

    </div>
  )
}

export default InBox