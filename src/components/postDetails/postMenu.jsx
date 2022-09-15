import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import useFetch from "../functions/useFetch"
import { useDispatch } from 'react-redux';
import {delete_post, fetch_error} from "../../redux/reducers/PostSlice"


function PostMenu({id}) {
    const [postOptions, setPostOptions] = useState(false)
    const {deleteFetch} = useFetch("posts")
    const dispatch = useDispatch()

    function deletePost(event){
        event.stopPropagation()
        deleteFetch(id)
        .then(() => dispatch(delete_post(id)))
        .catch(() => dispatch(fetch_error("something went wrong")))
    }
    
    return (
        <>
            <div onClick={(event)=>{event.stopPropagation(); setPostOptions(state => !state)}} className="hover:cursor-pointer"><MoreHorizIcon/></div>
            { postOptions && 
            <div className="absolute shadow-md  top-12 right-2 rounded  p-2 bg-white">
                <div className=" relative flex content-center  pr-3 flex-col">
                    <div className=" absolute right-2 -top-3 rotate-45 h-3 w-3  bg-white"></div>
                    <small className="mb-px pr-2.5 opacity-90 "><HideImageOutlinedIcon sx={{fontSize:20}}/><button className='px-2 hover:bg-slate-200 rounded'>Hide this post</button></small>
                    <small  className="mb-px pr-2.5 opacity-90 "><ReportOutlinedIcon sx={{fontSize:20}}/><button className='px-2 hover:bg-slate-200 rounded'>Report post</button></small>
                    <small  className="mb-px pr-2.5 opacity-90"><DeleteOutlineIcon sx={{fontSize:20}}/><button onClick={deletePost} className='px-2 hover:bg-slate-200 rounded'>Delete post</button></small>
                </div> 
            </div> }
        </>
    )
}

export default PostMenu