import CreatePost from "./CreatePost.jsx"
import PostDetails from "./PostDetails.jsx"
import {useDispatch, useSelector} from 'react-redux'
import  { memo, useEffect, useMemo, useRef } from "react"
import axios from 'axios'

const MainBar = () => {
  const posts = useSelector((state) => state.postFeed.posts)
  const ref = useRef(true)
  //const error = useSelector((state) => state.postFeed.error)
  const dispatch = useDispatch()
  
  const sortPosts = (posts) => {
    if(posts.length === 0) return []
    const postsCopy = []
    posts.map((post)=>postsCopy.push(post))
    return postsCopy.sort((a, b) =>  new Date(b.updatedAt) - new Date(a.updatedAt))
  }
  
  
  const PostList =  useMemo(()=>sortPosts(posts),[posts])

  useEffect(() => {

    //dispatch({type:'fetchPosts', payload: []})
    const fetchUserPost = async() => {
      ref.current = false
      try {
          const response = await axios.get('http://localhost:4000/posts?userId=13')
          dispatch({type:'fetchPosts', payload: response.data})
      } catch (error) {   
         dispatch({type:'fetchError', payload: error.message})
      }
     
    }
    if (ref.current === true) { fetchUserPost() } 
  },[])

  return (
    <>
        <CreatePost/>
        { PostList.length > 0 ?  PostList.map(post => <PostDetails key={post.id} post={post}/>) :
        <div className='border-2 rounded opacity-90 p-2 shadow-md'>not post found</div>}
        
    </>
  )
}

export default memo(MainBar)