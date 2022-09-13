import { memo } from "react";
import { useNavigate } from "react-router-dom";
import PostBody from "./postBody";

const PostDetails = ({post, deleteFetch}) => {
  const navigate = useNavigate()
  return (
    < div onClick={()=> navigate(`/home/${post.id}`)} >
        <PostBody post={post} deleteFetch={deleteFetch} />
    </div>      
  )
}

export default memo(PostDetails )