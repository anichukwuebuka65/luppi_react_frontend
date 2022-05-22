import ProfileImage from "./ProfileImage"

const RightSideBar = () => {
    const onlineIcon= " absolute h-3 w-3 rounded-full bg-red-400 right-1.5 bottom-px border-white";

  return (
    <div className="h-full">
        <div className="h-1/2 rounded bg-slate-200 p-3 mb-3">
            <h1 className="font-semibold">People You May Know</h1>
            <div className="flex my-4">
                <ProfileImage onlineIcon={onlineIcon}/>
                <p>sintia chinyere</p>
            </div>
            <div className="flex my-4">
                <ProfileImage onlineIcon={onlineIcon} />
                <p>sintia chinyere</p>
           </div>
        </div>
        <div className="h-1/2  rounded bg-slate-200 p-3">
            <h1  className="font-semibold">Online Friends</h1>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>sintia chinyere</p>
            </div>
            <div className="flex my-4">
                  <ProfileImage/>
                  <p>sintia chinyere</p>
            </div>
            
        </div>
    </div>
  )
}

export default RightSideBar