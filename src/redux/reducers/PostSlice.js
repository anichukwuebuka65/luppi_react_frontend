import { createAction, createSlice } from "@reduxjs/toolkit"

const logOut = createAction("logout")

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
            state.loading = true
        },
        fetch_success(state, {payload}){
            return { 
                posts : [].concat(state.posts, payload.res), 
                offset:payload?.offset + payload?.res?.length,
                loading: false
            }
        },
        addPost_success(state, action){
            console.log(action.payload)
             return { 
                    posts : [].concat(action.payload.result,state.posts), 
                    offset: action.payload.offset,
                    loading: false
                }
        },
        fetch_error (state, {payload}) {
            console.log(payload)
            return {...state, error: payload, loading: false}
        },
        clear_error (state) {
            return {...state, error: ""}
        },
        incrementLike(state,{payload}){
            state.posts.map(post => {
                if(post.id === payload) return post.like.likes++
                return post
            })
        },
        delete_post(state,{payload}){
           state.posts = state.posts.filter(post => post.id !== payload)
        },
       
    },
    extraReducers:(builder) => {
        builder
        .addCase(logOut,(state)=>({}))
    }
})
export const postReducer = postSlice.reducer
export const {
    fetching,
    fetch_success,
    addPost_success,
    fetch_error,
    clear_error,
    incrementLike,
    delete_post} 
    = postSlice.actions
