import GroupImage from "../components/GroupImage"
import PostDetails from "../components/postDetails/PostDetails"
import GroupRightSideBar from "../components/GroupRightSideBar"
const Groups = () => {
  const post = {
    id:1,
    post: 'This is a hardcodes post for tst purposes',
    updatedAt: Date(),
    comments: [],
    like: {likes: 10},
    share: {shares: 6},
    image: {
        imageUrl: 'https://ik.imagekit.io/feov916dg/images__1__uQYdFmxK6.jpg'
    },
    user: {
        firstName: 'love',
        lastName: 'paul',
    }
  }
  return (
    <div>

        {/*body */}
        <div  className = "px-3 py-5 lg:grid lg:grid-cols-4 overflow-hidden sm:h-[calc(100vh-56px)] bg-slate-100">
            <div className="hidden lg:block">
            <GroupRightSideBar/>
            </div>
            <div className = 'col-span-2 sm:w-4/5  mx-auto overflow-scroll'>
              <PostDetails post={post}/>
            </div>
            <div className="hidden lg:block">
                  <div className="font-semibold mb-4">Suggested Groups You May Like</div>
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="mr-2"><GroupImage/></span>
                      <p>Igbo Odinana</p> 
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="mr-2"><GroupImage/></span>
                      <p>Atlas comedy</p> 
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="mr-2"><GroupImage/></span>
                      <p>Bitcoin investment</p> 
                    </div>
                    
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Groups