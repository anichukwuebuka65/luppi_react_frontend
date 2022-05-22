
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const CreatePost = () => {
  return (
    <div className=' border-2 rounded p-3 bg-slate-200 shadow-md '>
        <div>
            <p>Ani Chukwuebuka</p>
            <small>share with:
                <select className='focus:outline-none rounded outline-none'>
                    <option className='border-solid' value="">Public</option>
                    <option value="">Friends</option>
                </select>
            </small>
        </div>
        <div>
            <textarea className='h-20 w-full mt-2 rounded 
            focus:outline-none border-2 border-neutral-300
            focus:border-neutral-400 bg-slate-300'></textarea>
        </div>
        <div className='float-right '>
            
            <label className=' text-gray-500 mr-2 hover:cursor' htmlFor='imgInput'><i>photo</i><AddAPhotoIcon/></label>
            <input className=" hidden" type="file" id="imgInput"/>
        </div>
        <div className='text-center' >
            <button className='w-full rounded text-white tracking-wide font-semibold bg-blue-700' >Share</button>
        </div>
    </div>
  )
}

export default CreatePost