import ProfileImage from "./ProfileImage.jsx"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HideImageIcon from '@mui/icons-material/HideImage';
import ReportIcon from '@mui/icons-material/Report';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { memo, useContext, useState } from "react";
//import {axiosInstance} from "../axios"
import { useSelector } from "react-redux";
import { AllContext } from "../context/AllContext.jsx";

const PostDetails = ({post}) => {
const [postOptions] = useState(false)
const [comments, setComments] = useState(post.comments)
const [comment, setComment] = useState("")
const [error, setError] = useState()
const [loading, setLoading] = useState(false)
const [likes, setLikes] = useState(post.like?.likes)
const [shares] = useState(post.share?.shares)
const profilePicture = useSelector((state) => state.user.profilepicture)
const {axiosInstance} = useContext(AllContext)


async function addLike(postId){
  try {

    setLikes((count) => count + 1)
    const response = await axiosInstance.post("like",{postId})
    if(!response.data) setLikes((count) => count - 1)
  } catch (error) {
    setLikes((count) => count - 1)
    //console.log(error)
  }
}

//  async function fetchComment(offset, postId){
//     setLoading(true)
//     try {
//       const response = await axiosInstance.get("comment",{offset,postId})
//       if(response.data !== "success" ) setComments((comments) => [response.data, ...comments])
//       console.log(response)
//       setLoading(false)
//     } catch (error) {
//       setError("couldnt fetch comments, try again")
//       setLoading(false)
//       setInterval(()=> setError(""),1000)

//     }  
//  }

 async function addComment( postId){
  setLoading(true)
    try {
      const response = await axiosInstance.post("comment",{comment,postId})
      if(response.data !== "success") setComments((comments) => [response.data, ...comments])
      setLoading(false)
      setComment("")
    } catch (error) {
      setError("unable to add comment, try again")
      setInterval(() => setError(""),1000)
      setLoading(false)
    }  
 }

  return (
    <div  className="bg-slate-50  border-2 shadow-lg pb-5 mt-3 rounded-lg ">
      <div className="p-2 relative ">
        <div className="flex justify-between ">
          
            <div className="flex  ">
                <ProfileImage/>
                <div className="font-semibold">
                <div className="-mb-2 text-lg">{post?.user.firstName} {post?.user.lastName}</div>
                <small>2 days ago</small>
                </div>
            </div>

            <div className="hover:cursor-pointer"><MoreHorizIcon/></div>

            { postOptions && <div className="absolute shadow-md  top-12 right-2 rounded  p-2 bg-white border-2">

              <div className=" relative flex content-center  pr-3 flex-col">
                <div className=" absolute right-2 -top-3 rotate-45 h-3 w-3  bg-white"></div>
                <small className="mb-1.5 "><span className="pr-2.5 opacity-90 "><HideImageIcon/></span>Hide this post</small>
                <small  className="mb-1.5 "><span className="pr-2.5 opacity-90 "><ReportIcon/></span>Report post</small>
              </div>
              
            </div> }

        </div>
          {post?.post && <p className="my-2.5 rounded  shadow p-2"> {post?.post}</p>}
      </div>
        

        {/*image */}
        <div>
          { post?.image && post.image !== null && post.image.imageUrl &&
           <img className="w-full object-fill" 
           src={post.image.imageUrl} alt="profileImage" /> }
        </div>
        
        <div className="px-2">
          {/*likes and share */}
          <div className="flex justify-between py-2">
            <div className=" ">
              <small className="text-blue-500 mr-px"><ThumbUpIcon fontSize="small"/></small>
              <small className="text-red-400 mr-3"><FavoriteIcon fontSize="small"/></small>
              <span>{likes ? likes : 0}</span>
            </div>
            <div>{comments?.length} comments<span className="ml-3">{shares ? shares : 0} {shares === 1 ? 'share' : 'shares'} </span></div>
          </div>
          {/*line */}
          <div className="border-t opacity-20 border-black "></div>

          <div className="flex justify-around py-2">
            <button onClick={()=>addLike(post.id)}><span className="mr-2 opacity-90"><ThumbUpIcon/></span>like</button>
            <div><span className="mr-2 opacity-80"><ChatBubbleOutlineOutlinedIcon/></span>comment</div>
            <div><span className="mr-2 opacity-80"><ShareIcon/></span>share</div>
          </div>

          {/*line */}
          <div className="border-t opacity-20 border-black "></div>

          {/*comments */}
          <div className="flex  mb-3 pt-3">
              <ProfileImage />
              <form className="flex w-full">
                <input onChange={(e)=>setComment(e.target.value)} value={comment} className="rounded-full shadow-sm px-2 border-2 border-slate-300 focus:bg-slate-100 focus:border-slate-400 border-2  focus:outline-none w-full "
                  type="text" placeholder="Write Comments" />
                <button onClick={(e)=> {e.preventDefault(); addComment(post.id)}} className="bg-blue-400 shadow text-white p-2 mx-3 hover:bg-blue-600 rounded">Add</button>
               </form>
          </div>
          {error && <div className="italic bg-red">{error}</div>}
          {loading && <div className="italic ">loading...</div>}
            {comments?.length > 0 && comments.map((comment) =>{
              
              return(
              <div key={comment.id} className="flex pt-1.5 ml-6 pr-10">
                <ProfileImage image={comment?.user?.user_profile?.profilepicture ?? profilePicture} />
                <div className="w-4/5">
                      <div className=" py-px px-2 bg-slate-100 border-slate-300 border-2 shadow-sm rounded-2xl">
                        <p className="text-sm  italic">{comment.comments}</p>
                      </div>
                      <div className="flex space-x-2">
                        <small>Like</small>
                        <small>Share</small>
                        <small>Reply</small>
                      </div>
                </div>
              </div>
            )})}
          

        </div>  
  </div>      
  )
}

export default memo(PostDetails )