
const ProfileImage = ({classAttr="h-9 w-9", onlineIcon=""}) => {

  return (
        <div className="relative">
            <img src="/guitar.jpg" alt="profile_picture"
             className={` ${classAttr} mr-2 object-cover rounded-full`}/>
            <p className={onlineIcon}></p>
        </div> 
  )
           
}

export default ProfileImage