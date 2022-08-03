import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import imageKit from 'imagekit-javascript'


const CreatePost = () => {
    const [post, setPost] = useState("")
    const dispatch = useDispatch()
    const [imageFile, setImageFile] = useState()
    const imagekit = new imageKit({
        publicKey: 'public_Xd2RM8ChiA2AeLH5NTe7kHEl8JQ=',
        urlEndpoint: 'https://ik.imagekit.io/feov916dg',
        authenticationEndpoint: 'http://localhost:4000/auth'
    })

     async function uploadAll(){
        const imageResult = await uploadImage()
        console.log(imageResult)
    }

     function uploadImage(e){
    //     const result = await imagekit.upload({
    //         file: imageFile,
    //         filename: imageFile.name
    //     })
    //    return result 
          imagekit.upload({
            file: imageFile,
            fileName: imageFile.name
        },(err, result)=>{
            if (err) console.log(err) 
           console.log(result)
       })
    }

    const uploadPost = () => {  
        axios.post('http://localhost:4000/posts', {post: post, user: '13'})
        .then(response => { 
            dispatch({ type:'addPost', payload: response.data})
            setPost("")
        })     
        .catch(error => dispatch({type:'fetchError',payload: error.message}))
    }

  return (
    <div className=' border-2 rounded p-3 mb-5 bg-slate-200 shadow-md '>
        <div>
            <p className='font-semibold'>Ani Chukwuebuka</p>
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
            <button onClick={uploadImage} className='w-full rounded text-white hover:bg-blue-600 tracking-wide font-semibold bg-blue-700' >Share</button>
        </div>
    </div>
  )
}

export default CreatePost