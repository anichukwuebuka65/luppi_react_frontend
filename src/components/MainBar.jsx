import CreatePost from "../components/CreatePost.jsx"
import PostDetails from "../components/PostDetails.jsx"
import {useDispatch, useSelector} from 'react-redux'
import  { memo, useEffect } from "react"
import axios from 'axios'

const MainBar = () => {
  const posts = useSelector((state) => state.postFeed.posts)
  const error = useSelector((state) => state.postFeed.error)
  const dispatch = useDispatch()


  const PostList =  posts.map((post) => (<PostDetails key={post.id} post={post}/>))
    
    console.log(posts)

  useEffect(() => {
    const fetchUserPost = async() => {
     try {
     const response = await axios.get('http://localhost:4000/posts?userId=13')
     //console.log(response.data) 
      dispatch({type:'fetchPosts', payload: response.data})

     } catch (error) {   
      dispatch({type:'fetchError', payload: error.message})
     } 
    }
    fetchUserPost()
  },[])

  return (
    <>
        <CreatePost/>
       {error ? error: PostList.length > 0 ? PostList:
        <div className='border-2 rounded opacity-90 p-2 shadow-md'>not post found</div>}
        
    </>
  )
}

export default memo(MainBar) 