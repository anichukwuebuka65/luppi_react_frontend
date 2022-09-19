import React, { useContext, useState } from 'react'
import { AllContext } from '../../context/AllContext'

function AddComment({dispatch, postFetch, id}) {
    const [comment, setComment] = useState("")
    const {capitalizeFirstLetter} = useContext(AllContext)

    async function addComment(e){
        e.preventDefault()
        const capitalized = await capitalizeFirstLetter(comment)
        dispatch({type:"fetching"})
        const result = await postFetch({postId: id,comment:capitalized})
        if(result === "error"){
            dispatch({type:"fetch_error",payload:"something went wrong, try again"})
            return dispatch({type:"clear_error"})
        }
        dispatch({type:"fetch_success",payload: result})
        setComment("")
    }

    return (
        <>
            <form className="flex w-full">
                <textarea onChange={(e)=>{setComment(e.target.value)}} 
                value={comment} 
                className=" placeholder:italic h-14 overflow-hidden shadow-sm px-2 border-slate-300 bg-slate-100  rounded-lg focus:border-slate-400 outline-none border-2  w-3/4"
                    type="text" placeholder="write something"/>
                <button onClick={addComment} className="bg-blue-400 shadow text-white p-2 mx-5 h-8 hover:bg-blue-600 rounded">Add</button>
            </form>
        </>      
    )
}

export default AddComment