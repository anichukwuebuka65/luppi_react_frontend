import { memo } from "react";
import { useNavigate } from "react-router-dom";
import PostBody from "./postBody";

const PostDetails = ({post}) => {
  const navigate = useNavigate()
  return (
    < div onClick={()=> navigate(`/home/${post.id}`)} >
        <PostBody post={post} />
    </div>      
  )
}

export default memo(PostDetails )