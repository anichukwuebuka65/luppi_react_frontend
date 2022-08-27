import {useSelector} from 'react-redux' 

const ProfileImage = ({classAttr="h-9 w-9", onlineIcon="",image}) => {
  const profilePics = useSelector(state => state.user.profilepicture)
  return (
        <div className="relative">
            <img src={image ? image : profilePics} alt="profile_picture"
             className={` ${classAttr} mr-2 object-cover rounded-full`}/>
            <p className={onlineIcon}></p>
        </div> 
  )
           
}

export default ProfileImage