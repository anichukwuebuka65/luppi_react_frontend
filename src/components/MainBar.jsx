import CreatePost from "./CreatePost.jsx"
import PostDetails from "./PostDetails.jsx"
import {useDispatch} from 'react-redux'
import  { memo, useEffect, useMemo, useRef, useState } from "react"
import { axiosInstance } from "../axios.js"

const MainBar = () => {
  const [posts, setPosts] = useState([])
  const [userId, setUserId] = useState()
  const ref = useRef(true)
  const dispatch = useDispatch()
  const [imageError, setImageError] = useState()

  const sortPosts = (posts) => {
    if(posts.length === 0) return []
    const postsCopy = []
    posts.map((post)=>postsCopy.push(post))
    return postsCopy.sort((a, b) =>  new Date(b.updatedAt) - new Date(a.updatedAt))
  }
  
  function updatePost(value){
    setPosts((prev) => ([value,...prev]))
    console.log(posts)
  }
  
  const PostList =  useMemo(()=>sortPosts(posts),[posts])
  
  useEffect(() => {
    const fetchUserPost = async() => {
      ref.current = false
      try {
        const {data} = await axiosInstance.get(`posts`)
        setPosts(data)
        } catch (error) {   
          //console.log(error)
      }
    }
     fetchUserPost() 
  },[userId])

  return (
    <>
        <CreatePost updatePost={updatePost} setImageError={setImageError}/>
        
        {imageError && <div className="text-center italic text-red-500">{imageError}</div>}
        { PostList.length > 0 ?  PostList.map(post => <PostDetails key={post.id} post={post}/>) :
        <div className='border-2 rounded opacity-90 p-2 shadow-md'>not post found</div>}
        
    </>
  )
}

export default memo(MainBar)