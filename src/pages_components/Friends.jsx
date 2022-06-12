import FriendsSideBar from "../components/FriendsSideBar"

const Friends = () => {
  return (
    <>
       
        {/*center div */}
        <div className = 'col-span-2 w-4/5 bg-slate-200 border-zinc-300 border-2 rounded mx-auto overflow-auto'>
            <div className="text-3xl font-bold p-6">All Friends</div>
            <div className="flex space-x-3 p-3 hover:bg-slate-300 rounded">
                <div>
                    <img className="rounded-full h-14 w-14" src="/guitar.jpg" alt="friends_profile_photo" />
                </div>
                 <div>
                    <div className="font-bold"> Judith Onyinye</div>
                    <small>View Profile</small>
                </div>
            </div>
            <div className="flex space-x-3 p-3 hover:bg-slate-300 rounded">
                <div>
                    <img className="rounded-full h-14 w-14" src="/guitar.jpg" alt="friends_profile_photo" />
                </div>
                 <div>
                    <div className="font-bold"> Judith Onyinye</div>
                    <small>View Profile</small>
                </div>
            </div>
            <div className="flex space-x-3 p-3 hover:bg-slate-300 rounded">
                <div>
                    <img className="rounded-full h-14 w-14" src="/guitar.jpg" alt="friends_profile_photo" />
                </div>
                 <div>
                    <div className="font-bold"> Chris Tuck</div>
                    <small>View Profile</small>
                </div>
            </div>
            <div className="flex space-x-3 p-3 hover:bg-slate-300 rounded">
                <div>
                    <img className="rounded-full h-14 w-14" src="/guitar.jpg" alt="friends_profile_photo" />
                </div>
                 <div>
                    <div className="font-bold"> Felix Darlington</div>
                    <small>View Profile</small>
                </div>
            </div>
            <div className="flex space-x-3 p-3 hover:bg-slate-300 rounded">
                <div>
                    <img className="rounded-full h-14 w-14" src="/guitar.jpg" alt="friends_profile_photo" />
                </div>
                 <div>
                    <div className="font-bold"> Alex John</div>
                    <small>View Profile</small>
                </div>
            </div>   
        </div>

        {/*right div */}
        <div className="hidden lg:block">
           <FriendsSideBar/>
        </div>
    </>
  )
}

export default Friends