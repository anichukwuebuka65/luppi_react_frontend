import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSideBar from './LeftSideBar'



const Layout = () => {
  return (
    <div  className=" relative px-3 py-5 grid grid-cols-4 overflow-y-hidden  h-[calc(100vh-56px)] bg-slate-100">
        <LeftSideBar/>
        <Outlet/>
    </div>
  )
}

export default Layout