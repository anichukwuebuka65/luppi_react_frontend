import React from 'react'
import GroupImage from './GroupImage'
import SearchBar from './SearchBar'

const GroupRightSideBar = () => {
  return (
    <>
        <div className="hidden lg:block">
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
    </>
  )
}

export default GroupRightSideBar