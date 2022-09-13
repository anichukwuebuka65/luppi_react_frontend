import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../components/postDetails/comments'
import PostBody from '../components/postDetails/postBody'

const PostWithComments = () => {
    const {id} = useParams()
    const post = useSelector(state => state.posts.posts.find(post => post.id === parseInt(id)))

  return (
    <div className = 'col-span-2 w-full sm:w-2/3 lg:w-4/5 md:pl-3 mx-auto mb-4 md:overflow-auto overflow-scroll'>
        <PostBody post={post}/>
        <Comments id={id}/>
    </div>
  )
}

export default PostWithComments