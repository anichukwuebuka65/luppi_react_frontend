import {useSelector} from 'react-redux' 

const ProfileImage = ({classAttr="h-9 w-9", onlineIcon=""}) => {
  const profilePics = useSelector(state => state.user.profilepic)
  return (
        <div className="relative">
            <img src={profilePics} alt="profile_picture"
             className={` ${classAttr} mr-2 object-cover rounded-full`}/>
            <p className={onlineIcon}></p>
        </div> 
  )
           
}

export default ProfileImage