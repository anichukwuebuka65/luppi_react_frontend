import { createReducer, createAction} from '@reduxjs/toolkit'

const fetchPosts = createAction('fetchPosts')
const addPost = createAction('addPost')
const fetchError = createAction('fetchError')

const initialState = { 
    posts: [],
    error: ''}

const postFeedReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(fetchPosts,(state, action) => {
        return {posts: action.payload}
    })
    .addCase(fetchError,(state, action) => {
        return {error : action.payload }
    })
    .addCase(addPost,(state, action) => {
       return { post: [state ,{
            id:action.payload.id,
             post: action.payload.post,
            updatedAt: Date()
            }
       ]}    
    })
})

export default postFeedReducer