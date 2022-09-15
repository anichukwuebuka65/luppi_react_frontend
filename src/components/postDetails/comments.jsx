import { useReducer, useRef } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../functions/useFetch'
import ProfileImage from '../ProfileImage'
import AddComment from './addComment'

function reducer(state,{type,payload}){
    switch(type){
        case "fetching":
            return {...state,loading:true}
        case "fetch_success":
            return {...state,comments:[].concat(payload,state.comments),loading:false}
        case "fetch_error":
            return {...state, error:payload,loading:false}
        case "clear_error":
            return {...state, error:""}
        default:
            return state
    }
}

function Comments({id}) {
    const {firstName, lastName, profilePicture } = useSelector((state) => state.user)
    const count = useSelector(state => state.posts.posts.find(post => post.id === parseInt(id)))
    const [state, dispatch] = useReducer(reducer,{comments:[],loading:false,error:"",offset:0})
    const {comments,loading,error,offset} = state
    const {getFetch, postFetch} = useFetch("comment")
    const ref = useRef(true)

    async function fetchComments(id){
        dispatch({type:"fetching"})
        const result = await getFetch(offset,id)
        if(result === "error"){
            dispatch({type:"fetch_error",error:"something went wrong, try again"})
            return dispatch({type:"clear_error"})
        }
        dispatch({type:"fetch_success",payload:result})
    }

    useEffect(() => {
      ref &&  fetchComments(id)
      ref.current = false
    },[])

  return (
    <>
        <div className="flex  mb-3 ml-4 pt-3">
            <ProfileImage />
            <AddComment dispatch={dispatch} postFetch={postFetch} id={id} />
        </div>
            {error && <div className="italic bg-red">{error}</div>}
            {loading && <div className="italic ">loading...</div>}
        {comments && comments.length !== "undefined" && comments?.length > 0 && comments.map((comment) =>{
        return(
            <div key={comment.id} className="flex pt-1.5 ml-6 pr-10">
                <ProfileImage image={comment?.user?.user_profile?.profilepicture ?? profilePicture} />
                <div className="w-4/5">
                    <div className=" leading-none inline-block py-1.5 p-2 bg-slate-300 border shadow-sm rounded-md">
                        <p className="font-bold mb-1.5">{comment?.user?.firstName ?? firstName} {comment?.user?.lastName ?? lastName}</p>
                        <p className="text-xs ">{comment.comments}</p>
                    </div>
                    <div className="flex space-x-2">
                        <small>Like</small>
                        <small>Share</small>
                        <small>Reply</small>
                    </div>
                </div>
            </div>
        )})}
        {count?.commentsCount > comments.length && <button onClick={()=>fetchComments(id)} 
        className="italic ml-10 font-bold opacity-90">load more comments..</button>}
    </>
  )
}

export default Comments;