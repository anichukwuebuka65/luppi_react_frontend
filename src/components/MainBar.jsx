import CreatePost from "./CreatePost.jsx"
import PostDetails from "./postDetails/PostDetails.jsx"
import  { memo, useContext, useEffect, useMemo, useRef, useState } from "react"
import useFetch from "./functions/useFetch.js"
import { useDispatch, useSelector } from "react-redux"
import {fetching,fetch_success,fetch_error,clear_error} from "../redux/reducers/PostSlice"
import { AllContext } from "../context/AllContext.jsx"


const MainBar = () => {
  const {posts, loading, error, offset} = useSelector(state => state.posts)
  const [imageError, setImageError] = useState()
  const dispatch = useDispatch()
  const postRef = useRef()
  const {getFetch, postFetch, deleteFetch} = useFetch("posts")
  const {position, ref} = useContext(AllContext)

 
  const sortPosts = (posts) => {
    if(posts.length === 0) return []
    const postsCopy = []
    posts.map((post)=>postsCopy.push(post))
    return postsCopy.sort((a, b) =>  new Date(b.updatedAt) - new Date(a.updatedAt))
  }
  
  const PostList =  useMemo(()=>sortPosts(posts),[posts])

  async function fetchPosts(){
    dispatch(fetching())
    const result = await getFetch(offset)
    if (result === "error") {
      dispatch(fetch_error("something went wrong, try again"))
      return setTimeout(()=>dispatch(clear_error()),1000)
    }
    dispatch(fetch_success({result,offset:posts.length}))
  }

  function loadNextPosts(e){
      let {clientHeight, scrollTop, scrollHeight} = postRef.current
        position.current = scrollTop
      if(clientHeight + scrollTop == scrollHeight) {
          fetchPosts()
          postRef.current.scrollTop -= 5 
      }  
  }

  useEffect(() => {
    if(ref.current === true) fetchPosts()
    ref.current = false
    postRef.current.scrollTop = position.current
 },[])

  return (
    <div ref={postRef} className = 'col-span-2 w-full sm:w-2/3 md:w-full lg:w-4/5 md:pl-3 mx-auto pb-4 pt-0 mb-4 md:overflow-auto overflow-y-scroll'
     onScroll={()=>loadNextPosts()} >
      <CreatePost 
        postFetch={postFetch} 
        loading={loading}
        setImageError={setImageError} 
        error={error}
        offset={posts.length}
        />
      {imageError && <div className="text-center italic text-red-500">{imageError}</div>}
      {error &&  <div className="text-center italic text-red-500">{error}</div>}
      { PostList.length > 0  ?  PostList.map((post) => <PostDetails key={post.id} post={post}/>) :
        !loading && <div className='text-center opacity-90 p-3 mt-5 italic tracking-wider shadow-md'>No post found</div>}
      { loading && (<div className='italic text-xl mt-5 text-center'>Loading...</div>)}  
    </div>
  )
}

export default memo(MainBar)