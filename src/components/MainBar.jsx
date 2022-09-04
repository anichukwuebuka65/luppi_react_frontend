import CreatePost from "./CreatePost.jsx"
import PostDetails from "./PostDetails.jsx"
import {useDispatch} from 'react-redux'
import  { memo, useContext, useEffect, useMemo, useRef, useState } from "react"
import { AllContext } from "../context/AllContext.jsx"

const MainBar = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingNext, setIsLoadingNext] = useState(false)
  const [userId, setUserId] = useState()
  const ref = useRef(true)
  const ref2 = useRef(true)
  const dispatch = useDispatch()
  const [imageError, setImageError] = useState()
  const [postError, setpostError] = useState()
  const {axiosInstance} = useContext(AllContext)
  const [offset, setOffset] = useState(0)
  const [finished , setFinished] = useState(false)


  const sortPosts = (posts) => {
    if(posts.length === 0) return []
    const postsCopy = []
    posts.map((post)=>postsCopy.push(post))
    return postsCopy.sort((a, b) =>  new Date(b.updatedAt) - new Date(a.updatedAt))
  }
  
  function updatePost(value){
    setPosts((prev) => ([].concat(value, prev)))
  }
  
  const PostList =  useMemo(()=>sortPosts(posts),[posts])

  const fetchUserPost = async(offset) => {
      try {
          const {data} = await axiosInstance.get(`posts?offset=${offset}`)
          if (data.length == 0) setFinished(true)
          setPosts((post) => [].concat(post, data))
          setIsLoading(false)             
          setIsLoadingNext(false)
          setOffset((prev) => prev + 3)
        } 
        catch (error) { 
          setIsLoading(false)  
          console.log(error)
      }
  }


   function loadNextPosts(e){
     if (e.currentTarget) {
       const {scrollTop, clientHeight, scrollHeight} = e.currentTarget
       if ((scrollTop + clientHeight === scrollHeight) && ref2.current === true && !finished) {
              setIsLoadingNext(true)
              fetchUserPost(offset)
              ref2.current = false
              setTimeout(() => ref2.current = true, 500)
          }
      }
  }


  useEffect(() => {
    setIsLoading(true)
    if(ref.current === true){
          fetchUserPost(offset) 
    }
    ref.current = false
  },[userId])

  if (isLoading) return(<div className='italic text-2xl mt-5 text-center'>Loading...</div>)

  return (
    <div  className = 'col-span-2 w-full sm:w-2/3 lg:w-4/5 pl-3 mx-auto md:overflow-auto' onScroll={loadNextPosts} >
      <CreatePost updatePost={updatePost} setImageError={setImageError} setpostError={setpostError}/>
      {imageError && <div className="text-center italic text-red-500">{imageError}</div>}
      {postError &&  <div className="text-center italic text-red-500">{postError}</div>}
      { PostList.length > 0  ?  PostList.map(post => <PostDetails key={post.id} post={post}/>) :
        !isLoading && <div className='border-2 rounded opacity-90 p-2 shadow-md'>not post found</div>}
      { isLoadingNext && (<div className='italic text-xl mt-5 text-center'>Loading...</div>)}  
    </div>
  )
}

export default memo(MainBar)