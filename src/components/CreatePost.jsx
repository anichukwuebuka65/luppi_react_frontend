import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imageKit from 'imagekit-javascript'


const CreatePost = ({setImageError}) => {
    const [post, setPost] = useState("")
    const [clicked, setClicked] = useState(false)
    const [imageFile, setImageFile] = useState()
    const {firstName, lastName} = useSelector(state => state.user)
    
    const dispatch = useDispatch()
    const imagekit = new imageKit({
        publicKey: 'public_Xd2RM8ChiA2AeLH5NTe7kHEl8JQ=',
        urlEndpoint: 'https://ik.imagekit.io/feov916dg',
        authenticationEndpoint: 'http://localhost:4000/auth'
    })

    async function upload() {
        setClicked(true)
        setInterval(()=>setClicked(false),500)

        if (imageFile) {
            const imageResult = await uploadImage()
            setImageFile('')
            if (imageResult.url) {
                const postResult = await uploadPost({
                    imageUrl: imageResult.url,
                    post, 
                })
                if (!postResult.data) {
                    dispatch({type:'fetchError',payload: 'unable to upload post, pls try again'}) 
                }
                if (postResult.data) dispatch({ type:'addPost', payload: postResult.data})
                setPost('')

            } else {
                setImageError('unable to upload image, try again')
            }
        }
       
       if (!imageFile && post) {
            const uploadResult = await uploadPost({post})
            console.log(uploadResult)
            if (!uploadResult.data) {
                dispatch({type:'fetchError',payload: 'unable to upload post, pls try again'})
                return 
            }
            if (uploadResult.data) dispatch({ type:'addPost', payload: uploadResult.data})
            setPost('')
       } 
    }

    async function uploadImage(e){
        try {
                const result = await imagekit.upload({
                    file: imageFile,
                    fileName: imageFile.name
                })
                return result
        } catch (error) {
                return error  
        }
    
    }

    const uploadPost = async(fetchparams) => { 
        try {
            const response = await axios.post('http://localhost:4000/posts', fetchparams)
            return response
            //dispatch({ type:'addPost', payload: response.data})
        } catch (error) {
             return error.message
            //dispatch({type:'fetchError',payload: error.message}))
        }
    }

  return (
    <div className=' border-2 rounded p-3 mb-5 bg-slate-200 shadow-md '>
        <div>
            <p className='font-semibold'>{firstName} {lastName}</p>
            <small>share with:
                <select className='focus:outline-none rounded outline-none'>
                    <option className='border-solid' value="">Public</option>
                    <option value="">Friends</option>
                </select>
            </small>
        </div>
        <div>
            <textarea value={post} onChange={(e)=> setPost(e.target.value)} className='h-20 w-full mt-2 rounded 
            focus:outline-none border-2 border-neutral-300
            focus:border-neutral-400 focus:bg-white bg-slate-50 px-1.5'></textarea>
        </div>
        <div className='float-right '>
            
            <label className=' text-gray-500 mr-2 hover:cursor' htmlFor='imgInput'><i>photo</i><AddAPhotoIcon/></label>
            <input className="hidden" multiple onChange={(e)=>{setImageFile(e.target.files[0])}} type="file" id="imgInput"/>
        </div>
        <div className='text-center' >
            <button onClick={upload} 
            className={`w-full rounded text-white  tracking-wide font-semibold ${!clicked && "hover:bg-blue-600 bg-blue-700"}
             ${clicked && "bg-blue-400 h-7"}`} 
            >Share</button>
        </div>
    </div>
  )
}

export default CreatePost