import React from 'react'
import PostMenu from "./postMenu"
import ProfileImage from "../ProfileImage"
import LikesWithShare from "./likesWithShare"

const PostBody = ({post, deleteFetch}) => {

  return (
    <>
        <div className=" shadow-md bg-white pb-5 rounded-sm ">
            <div className="p-2 relative ">
            <div className="flex justify-between ">
                <div className="flex  ">
                <ProfileImage image={post?.user?.user_profile?.profilepicture}/>
                <div className="font-semibold">
                <div className="-mb-1.5 text-md text-zinc-900">{post?.user?.firstName} {post?.user?.lastName}</div>
                <small className='text-sx pl-1.5 opacity-80'>2 days ago</small>
                </div>
                </div>
                <PostMenu deleteFetch={deleteFetch} id={post?.id}/>
            </div>
                {post?.post && <p className="my-2.5 rounded text-xs tracking-wide p-2"> {post?.post}</p>}
            </div>
            
            {/*image */}
            <div>
            { post?.image && post.image !== null && post.image.imageUrl &&
            <img className="w-full object-fill" 
            src={post.image.imageUrl} height="600" alt="profileImage" /> }
            </div>
            
            <div className="px-2">
            <LikesWithShare post={post} />
            </div> 
        </div>     
    </>
  )
}

export default PostBody