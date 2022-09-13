import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { useContext, useState } from 'react';
import { AllContext } from '../../context/AllContext';
import { useDispatch, useSelector } from 'react-redux';
import {incrementLike} from "../../redux/reducers/PostSlice"

function LikesWithShare({ post }) {
    const {like} = useSelector(state => state.posts.posts.find(result => result.id == post.id))
    const [shares] = useState(post.share?.shares)
    const [ifLiked,setIfLiked] = useState(false)
    const {axiosInstance} = useContext(AllContext)
    const dispatch = useDispatch()

    async function addLike(event){
      event.stopPropagation()
      try {
        if(!ifLiked){
            setIfLiked(true)
            const response = await axiosInstance.post("like",{postId: post.id})
            dispatch(incrementLike(post.id))
            if(!response.data) {
              setIfLiked(false)
            }
          }
        } catch (error) {
          setIfLiked(false)
          //console.log(error)
        }
      }
      
    return (
        <>
            <div className="flex justify-between py-px">
                <div className=" ">
                <small className="text-blue-500 mr-px"><ThumbUpIcon sx={{fontSize:15}}/></small>
                <small className="text-red-400 mr-2"><FavoriteIcon sx={{fontSize:15}}/></small>
                <span>{like?.likes ? like.likes : 0}</span>
                </div>
                <div className="text-zinc-900">{post.commentsCount} comments<span className="ml-3 text-zinc-900">{shares ? shares : 0} {shares === 1 ? 'share' : 'shares'} </span></div>
            </div>
            {/*line */}
            <div className="border-t opacity-20 border-black "></div>

            <div className="flex justify-around py-px">
            <button onClick={addLike}><span className="mr-2 opacity-90"><ThumbUpIcon sx={{fontSize:20}}/></span>like</button>
            <div className="text-zinc-900"><span className="mr-2 opacity-70"><ChatBubbleOutlineOutlinedIcon sx={{fontSize:20}}/></span>comment</div>
            <div className="text-zinc-900"><span className="mr-2 opacity-70"><ShareIcon sx={{fontSize:20}}/></span>share</div>
            </div>

            {/*line */}
            <div className="border-t opacity-20 border-black "></div>
        </>
    )
}

export default LikesWithShare