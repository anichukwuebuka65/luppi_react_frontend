import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts : [], 
        loading: false,
        offset: 0, 
        error: null
        },
    reducers:{
        fetching(state){
            return {...state, loading: true}
        },
        fetch_success(state, {payload}){
            if (!Array.isArray(payload)){
                return { 
                    posts : [].concat(payload.result,state.posts), 
                    offset:payload.offset,
                    loading: false
                }
            }
            return { 
                posts : [].concat(state.posts, payload.result), 
                offset:payload.offset,
                loading: false
            }
        },
        fetch_error (state, {payload}) {
            return {...state, error: payload, loading: false}
        },
        clear_error (state) {
            return {...state, error: ""}
        },
        incrementLike(state,{payload}){
            state.posts.map(post => {
                if(post.id == payload) return post.like.likes++
                return post
            })
        }
    }
})
export const postReducer = postSlice.reducer
export const {fetching,fetch_success,fetch_error,clear_error,incrementLike} = postSlice.actions
