import { memo } from "react";
import { useNavigate } from "react-router-dom";
import PostBody from "./postBody";

const PostDetails = ({post}) => {
  const navigate = useNavigate()
  return (
    < div onClick={()=> navigate(`/home/${post.id}`)} >
        <div className='h-3 bg-stone-300'></div>
        <PostBody post={post} />
    </div>      
  )
}

export default memo(PostDetails )