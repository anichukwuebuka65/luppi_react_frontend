import ProfileImage from "./ProfileImage.jsx"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HideImageIcon from '@mui/icons-material/HideImage';
import ReportIcon from '@mui/icons-material/Report';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { memo, useState } from "react";

const PostDetails = ({post}) => {
const [postOptions] = useState(false)
const [comments, setComments] = useState(post.comments)
const [likes, setLikes] = useState(post.like?.likes)
const [shares, setShares] = useState(post.share?.shares)

  return (
    <div  className="bg-slate-200 border-zinc-300 border-2 pb-5 mt-1 rounded ">
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
          <p className="my-2.5"> {post?.post}</p>
      </div>
        

        {/*image */}
        <div>
          { post?.image && post.image !== null &&
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
            <div><span className="mr-2 opacity-90"><ThumbUpIcon/></span>like</div>
            <div><span className="mr-2 opacity-80"><ChatBubbleOutlineOutlinedIcon/></span>comment</div>
            <div><span className="mr-2 opacity-80"><ShareIcon/></span>share</div>
          </div>

          {/*line */}
          <div className="border-t opacity-20 border-black "></div>

          {/*comments */}
          <div className="flex  pt-3">
              <ProfileImage />
              <input className="rounded-full pl-2 border-2 border-slate-300 focus:bg-slate-100 focus:border-slate-400 border-2  focus:outline-none w-full "
               type="text" placeholder="Write Comments" />
          </div>
            {comments?.length > 0 && comments.map((comment) => (
              <div key={comment.id} className="flex p-px mt-5">
                <ProfileImage />
                <div className="w-4/5">
                      <div className=" p-2 bg-slate-400 rounded-2xl">
                        <p>{comment.comments}</p>
                      </div>
                      <div className="flex space-x-3">
                        <small>Like</small>
                        <small>Share</small>
                        <small>Reply</small>
                      </div>
                </div>
              </div>
            ))}
          

        </div>  
  </div>      
  )
}

export default memo(PostDetails )