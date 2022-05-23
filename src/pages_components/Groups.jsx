import SearchBar from "../components/SearchBar"
import GroupImage from "../components/GroupImage"
import PostDetails from "../components/PostDetails"
const Groups = () => {
  return (
    <div>

        {/*body */}
        <div  className = "px-3 py-5 grid grid-cols-4  h-[calc(100vh-56px)] bg-slate-100">
            <div className="">
              <SearchBar placeholder="search for a group"/>
                <button className="rounded bg-blue-600 text-white p-2 w-full my-5">
                <span className="mr-2">&#43;</span>Create Group</button>
                <div className=" pl-4 font-bold"> Groups You Have joined</div>
                <div>
                  <div className="mt-4">
                    <div className="flex mt-3 hover:bg-slate-300 p-2 rounded font-semibold items-center">
                      <span className="mr-2"><GroupImage/></span>
                      <p>PH Developers</p>
                     </div>
                    <div className="flex mt-3  hover:bg-slate-300 p-2 rounded font-semibold items-center">
                      <span className="mr-2"><GroupImage/></span>
                      <p>Mathematics for you</p>
                     </div>
                    <div className="flex mt-3  hover:bg-slate-300 p-2 rounded font-semibold items-center">
                      <span className="mr-2"><GroupImage/></span>
                      <p>Algorithms and Data structures</p>
                    </div>
                  </div> 
                </div> 
                
            </div>
            <div className = 'col-span-2 w-4/5  mx-auto overflow-y-scroll'>
              <PostDetails/>
            </div>
            <div>
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