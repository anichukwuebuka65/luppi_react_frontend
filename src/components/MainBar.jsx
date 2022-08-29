import CreatePost from "./CreatePost.jsx"
import PostDetails from "./PostDetails.jsx"
import {useDispatch} from 'react-redux'
import  { memo, useContext, useEffect, useMemo, useRef, useState } from "react"
import { axiosInstance } from "../axios"
import { AllContext } from "../context/AllContext.jsx"

const MainBar = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState()
  const ref = useRef(true)
  const dispatch = useDispatch()
  const [imageError, setImageError] = useState()
  const [postError, setpostError] = useState()
  const {axiosInstance} = useContext(AllContext)


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
  
  useEffect(() => {
    setIsLoading(true)
    const fetchUserPost = async() => {
      ref.current = false
      try {
        const {data} = await axiosInstance.get('posts')
        setIsLoading(false)
        setPosts(data)
        } 
        catch (error) { 
          setIsLoading(false)  
          console.log(error)
      }
    }
     fetchUserPost() 
  },[userId])

  if (isLoading) return(<div className='italic text-2xl mt-5 text-center'>Loading...</div>)

  return (
    <>
      <CreatePost updatePost={updatePost} setImageError={setImageError} setpostError={setpostError}/>
      {imageError && <div className="text-center italic text-red-500">{imageError}</div>}
      {postError &&  <div className="text-center italic text-red-500">{postError}</div>}
      { PostList.length > 0  ?  PostList.map(post => <PostDetails key={post.id} post={post}/>) :
        !isLoading &&
      <div className='border-2 rounded opacity-90 p-2 shadow-md'>not post found</div>}
        
    </>
  )
}

export default memo(MainBar)