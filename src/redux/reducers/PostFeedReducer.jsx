import { createReducer, createAction} from '@reduxjs/toolkit'

const fetchPosts = createAction('fetchPosts')
const fetchError = createAction('fetchError')

const initialState = {
    posts: [],
    error: ''
}

const postFeedReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(fetchPosts,(state, action) => {
        return {...state, posts: action.payload}
    })
    .addCase(fetchError,(state,action) => {
        return { ...state, error: action.payload} 
    })
})


export default postFeedReducer