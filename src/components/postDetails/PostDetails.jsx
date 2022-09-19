import { memo } from "react";
import { useNavigate } from "react-router-dom";
import PostBody from "./postBody";

const PostDetails = ({post,i}) => {
  const navigate = useNavigate()
  return (
    < div onClick={()=> navigate(`/home/${post.id}`)} >
       {i !== 0 && <div className='h-2 bg-stone-300'></div>}
        <PostBody post={post} />
    </div>      
  )
}

export default memo(PostDetails )