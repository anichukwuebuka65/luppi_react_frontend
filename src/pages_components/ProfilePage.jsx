import React from 'react'
import PostDetails from '../components/PostDetails'
import {useSearchParams} from 'react-router-dom'
import { axiosInstance } from '../axios'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'

const ProfilePage = () => {
    const userId = useSelector(state => state.user.id)
    const [searchParams] = useSearchParams()
    const id = searchParams.get('Id')
    const [posts, setPosts] =useState([])
    const [profilepic, setProfilePic] = useState('')
    const [user, setUser] = useState({})
    const [friendsCount, setFriendsCount] = useState(0)    
    const [clicked, setClicked] = useState(false)
    const [addedStatus, setAddedStatus] = useState()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    async function addFriend(id) {
        setClicked(true)
        setInterval(()=>setClicked(false),500)
        const response = await axiosInstance.post('/friendrequest?status=add',{
            friendId: id,
            userId: userId
        })
        if(response.data === 'success') {
            setAddedStatus('request sent')
            setInterval(()=>setAddedStatus(""),500)
        } else {
            setAddedStatus('something went wrong, try again')
        }
    }
   
    useEffect(() => {
        async function fetchProfile() {
            try {
                const {data} = await axiosInstance.get(`/profile?id=${id}`)
                setPosts(data.userPosts)
                setUser(data.userPosts[0].user)
                setProfilePic(data.profile.profilepicture)
                setFriendsCount(data.friendsCount)
                setLoading(false)
            } catch (error) {
                setError("couldn't find profile")
            }
        }
        fetchProfile()
    },[id])
 
    if(error.length > 1) return <div>{error}</div>
    if (loading) return <div className='italic text-center'>loading...</div>
    return (
        <div className='lg:w-2/3 pb-4 mx-auto '>
            <div className='w-full -mb-10 '><img className="w-full h-80 rounded-b-3xl object-cover" 
            src={profilepic} alt="coverphoto"/>
            </div>
            <div className='md:flex mx-4 justify-between items-center'>
                <div className="flex items-center">
                    <div>
                        <img className='h-40 w-40 rounded-full border-4 border-slate-300' 
                        src={profilepic} alt="profilephoto"/>
                    </div>
                    <div>
                        <div className='text-3xl font-bold'>{user.firstName} {user.lastName}</div>
                        <div className='font-semibold text-zinc-800'>{friendsCount} friends</div>
                    </div>
                </div>
                <div className='relative'>
                    {userId !== parseInt(id) &&
                    <button onClick={() => addFriend(id)} 
                     className={`rounded ${clicked && 'h-8'} bg-blue-500 hover:bg-blue-400 p-1.5 mx-2 text-white font-semibold mt-2`}>
                        Add Friend 
                    </button> }
                    {userId === parseInt(id) && 
                    <>
                    <button className='rounded bg-blue-500 hover:bg-blue-400 p-1.5 mx-2 text-white font-semibold mt-2'>Add to Story</button>
                    <button className='rounded bg-blue-500 hover:bg-blue-400 p-1.5 mx-2 text-white font-semibold mt-2'>Edit Profile</button>
                    </>
                    }
                    {addedStatus && <small className='absolute top-12 left-3 border rounded opacity-90 italic border-slate-400 px-2'>{addedStatus}</small>}
                </div>
            </div>

            {/*line */}
            <div className="border-t my-1.5 opacity-20 border-black "></div>

            <div className=''>
                <ul className='mx-auto w-1/2 font-bold text-2xl opacity-90 list-style-none flex justify-center space-x-8'>
                    <li>Posts</li>
                    <li>Friends</li>
                    <li>Photos</li>
                    <li>About</li>
                </ul>
            </div>

            {/*line */}
            <div className="border-t my-1.5 opacity-20 border-black "></div>

            <div  className = 'col-span-2 lg:w-4/5 md:w-2/3 mx-auto overflow-auto'>
                { posts.map(post => (<PostDetails key={post.id} post={post} />))}
            </div>
            
        </div>
  )
}

export default ProfilePage