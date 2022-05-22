import ProfileImage from "./ProfileImage.jsx"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HideImageIcon from '@mui/icons-material/HideImage';
import ReportIcon from '@mui/icons-material/Report';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';

const PostDetails = () => {
  return (
    <div className="bg-slate-200 pb-5 mt-5 rounded ">
      <div className="p-2 relative ">
        <div className="flex justify-between ">

            <div className="flex  ">
                <ProfileImage/>
                <div className="font-semibold">
                  <div className="-mb-2 text-lg">Ani chukwuebuka</div>
                  <small >2 days ago</small>
                </div>
            </div>

            <div className="hover:cursor-pointer"><MoreHorizIcon/></div>

            <div className="absolute   top-12 right-2 rounded p-2 bg-slate-300">

              <div className=" relative flex content-center  pr-3 flex-col">
                <div className=" absolute right-2 -top-3 rotate-45 h-3 w-3 bg-slate-300"></div>
                <small className=""><span className="pr-2  opacity-50"><HideImageIcon/></span>Hide this post</small>
                <small><span className="pr-2 opacity-50"><ReportIcon/></span>Report post</small>
              </div>
              
            </div> 

        </div>
          <p className="my-2.5">This is my first post on luppi</p>
      </div>
        

        {/*image */}
        <div>
          <img className="w-full object-fill" src="guitar.jpg" alt="profileImage"/>
        </div>

        <div className="px-2">
          {/*likes and share */}
          <div className="flex justify-between py-2">
            <div className=" ">
              <small className="text-blue-500 mr-px"><ThumbUpIcon fontSize="small"/></small>
              <small className="text-red-400 mr-3"><FavoriteIcon fontSize="small"/></small>10
            </div>
            <div>15 comments<span className="ml-3">12 shares</span></div>
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
              <input className="rounded-full pl-2 bg-slate-400  focus:outline-none w-full "
               type="text" placeholder="Write Comments" />
          </div>

          <div className="flex p-px mt-5">
              <ProfileImage />
              <div className="w-4/5">
                    <div className=" p-2 bg-slate-400 rounded-2xl">
                      <p>This is a comment.thisis is a comment. this is a comment. this is a comment</p>
                    </div>
                    <div className="flex space-x-3">
                      <small>Like</small>
                      <small>Share</small>
                      <small>Reply</small>
                    </div>
              </div>

          </div>

        </div>  
  </div>      
  )
}

export default PostDetails