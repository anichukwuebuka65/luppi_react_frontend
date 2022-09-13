import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imageKit from 'imagekit-javascript'
import { AllContext } from '../context/AllContext';
import {fetching,fetch_success,fetch_error,clear_error} from '../redux/reducers/PostSlice';


const CreatePost = ({setImageError, postFetch, loading, error,offset}) => {
    const dispatch = useDispatch()
    const [post, setPost] = useState("")
    const [clicked, setClicked] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const {firstName, lastName} = useSelector(state => state.user)
    const { capitalizeFirstLetter} = useContext(AllContext)
    const imagekit = new imageKit({
        publicKey: 'public_Xd2RM8ChiA2AeLH5NTe7kHEl8JQ=',
        urlEndpoint: 'https://ik.imagekit.io/feov916dg',
        //authenticationEndpoint: 'https://luppi.herokuapp.com/auth'
        authenticationEndpoint: 'http://localhost:5000/auth'
    })

    async function upload() {
        if (!post && !imageFile) return
        const capitalized = capitalizeFirstLetter(post)
        setClicked(true)
        setInterval(()=>setClicked(false),500)
            if (imageFile) {
                const imageResult = await uploadImage()
                setImageFile('')
                if (imageResult.url) {
                     addPosts({
                        imageUrl: imageResult.url,
                        post: capitalized,
                    })
                     setPost('')
                } else {
                    setImageError('unable to upload image, try again')
                }
            }
        
        if (!imageFile && post) {
            addPosts({post: capitalized})
            setPost("")
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

    async function addPosts(data){
        dispatch(fetching())
        const result = await postFetch(data)
        if (result === "error") {
          dispatch(fetch_error("something went wrong, try again"))
         return setTimeout(()=>dispatch(clear_error()),1000)
        }
        dispatch(fetch_success({result,offset}))
      }

  return (
    <div className=' border-2 rounded p-3 mb-5  bg-slate-200 shadow-md '>
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
            <textarea rows="4" value={post} onChange={(e)=>setPost(e.target.value)} className=" w-full  mt-2 rounded 
            focus:outline-none border-2 border-neutral-200 overflow-hidden
            focus:border-neutral-300 focus:bg-white bg-slate-50 px-1.5"></textarea>
        </div>
        <div className='float-right flex space-x-3 mb-1.5'>
            {imageFile && (<p className='rounded bg-slate-300 px-2 italic'>{imageFile.name}</p>)}
            <label className=' text-gray-500 mr-2 hover:cursor' htmlFor='imgInput'><i>photo</i><AddAPhotoIcon/></label>
            <input className="hidden" onChange={(e)=>{setImageFile(e.target.files[0])}} type="file" id="imgInput"/>
        </div>
        <div className='text-center' >
            <button onClick={upload} 
            className={`w-full rounded text-white  tracking-wide font-semibold ${!clicked && "hover:bg-blue-600 bg-blue-500"}
             ${clicked && " h-7"}`} 
            >Share</button>
        </div>
        {loading && <div className="italics opacity-70">loading...</div>}
    </div>
  )
}

export default CreatePost