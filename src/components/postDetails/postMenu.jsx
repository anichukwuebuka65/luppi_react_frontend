import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HideImageIcon from '@mui/icons-material/HideImage';
import ReportIcon from '@mui/icons-material/Report';
import { useState } from 'react';

function PostMenu({id, deleteFetch}) {
    const [postOptions, setPostOptions] = useState(false)
    
    return (
        <>
            <div onClick={()=>setPostOptions(state => !state)} className="hover:cursor-pointer"><MoreHorizIcon/></div>
            { postOptions && 
            <div className="absolute shadow-md  top-12 right-2 rounded  p-2 bg-white">
                <div className=" relative flex content-center  pr-3 flex-col">
                    <div className=" absolute right-2 -top-3 rotate-45 h-3 w-3  bg-white"></div>
                    <small className="mb-px pr-2.5 opacity-90 "><HideImageIcon sx={{fontSize:20}}/><button className='px-2 hover:bg-slate-200 rounded'>Hide this post</button></small>
                    <small  className="mb-px pr-2.5 opacity-90 "><ReportIcon sx={{fontSize:20}}/><button className='px-2 hover:bg-slate-200 rounded'>Report post</button></small>
                    <small  className="mb-px pr-2.5 opacity-90"><ReportIcon sx={{fontSize:20}}/><button onClick={()=>deleteFetch(id)} className='px-2 hover:bg-slate-200 rounded'>Delete post</button></small>
                </div> 
            </div> }
        </>
    )
}

export default PostMenu