import React, { useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import useFetch from '../components/functions/useFetch'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Imagekit from '../components/functions/imagekit';


const EditProfile = () => {
  const [picture, setPicture] = useState()
  const [clicked ,setclicked] = useState(false)
  const id = useSelector(state => state.user.id)
  const {postFetch} = useFetch("profile")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const imagekit = Imagekit()

async function uploadImage(e){
  e.preventDefault()
    try {
            const {url} = await imagekit.upload({
                file: picture,
                fileName: picture.name
            })
            await postFetch({url})
            dispatch({type:"update_photo", payload:url})
            navigate(`/profilepage?Id=${id}`)

    } catch (error) {
            console.log(error)  
    }
}

  return (
    <form className='flex flex-col space-y-7 p-2 w-full mt-7 m-auto md:w-4/5'>
      <input onChange={(e) => setPicture(e.target.value) } 
      className=" placeholder:tracking-widest pl-3 h-10 rounded-md border-b-2 focus:outline-none border-purple-800" type="text" placeholder='age'/>
      <input onChange={(e) => setPicture(e.target.value) }
       className="placeholder:tracking-widest pl-3 h-10 rounded-md border-b-2 focus:outline-none border-purple-800" type="text" placeholder='gender'/>
      <input onChange={(e) => setPicture(e.target.value) } 
      className="placeholder:tracking-widest pl-3 h-10 rounded-md border-b-2 focus:outline-none border-purple-800" type="text" placeholder='country'/>
      <label className=' text-purple-900 mr-2 hover:cursor' htmlFor='upload'><AddAPhotoIcon/></label>
      <input onChange={(e)=> setPicture(e.target.files[0])} className="hidden" type="file" id="upload" />
      <button onClick={uploadImage} className={`w-full rounded text-white h-7 tracking-wide font-semibold ${!clicked && "hover:bg-purple-700 bg-purple-800"}
        ${clicked && " h-8"}`} 
      >submit</button>
    </form>
  )
}

export default EditProfile