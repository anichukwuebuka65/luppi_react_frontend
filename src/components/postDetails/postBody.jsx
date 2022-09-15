import React from 'react'
import PostMenu from "./postMenu"
import ProfileImage from "../ProfileImage"
import LikesWithShare from "./likesWithShare"
import { useNavigate } from 'react-router-dom'

const PostBody = ({post, deleteFetch}) => {
    const navigate = useNavigate()

    if (!post) return navigate("/home")

  return (
    <>
        <div className="bg-slate-50 shadow-md pb-5 mt-5 rounded-sm ">
            <div className="p-2 relative ">
            <div className="flex justify-between ">
                <div className="flex  ">
                <ProfileImage image={post?.user?.user_profile?.profilepicture}/>
                <div className="font-semibold">
                <div className="-mb-2 text-lg text-zinc-900">{post?.user?.firstName} {post?.user?.lastName}</div>
                <small>2 days ago</small>
                </div>
                </div>
                <PostMenu deleteFetch={deleteFetch} id={post?.id}/>
            </div>
                {post?.post && <p className="my-2.5 rounded text-sm tracking-wide p-2"> {post?.post}</p>}
            </div>
            
            {/*image */}
            <div>
            { post?.image && post.image !== null && post.image.imageUrl &&
            <img className="w-full object-fill" 
            src={post.image.imageUrl} alt="profileImage" /> }
            </div>
            
            <div className="px-2">
            <LikesWithShare post={post} />
            </div> 
        </div>     
    </>
  )
}

export default PostBody