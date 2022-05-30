import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AllContext } from '../context/AllContext'
import LeftSideBar from './LeftSideBar'



const Layout = () => {
    const {setToggleSideBar} = useContext(AllContext)

  useEffect(() => {
    return () => {
      setToggleSideBar(true)
    }
  },[])
  return (
    <div  className=" relative px-3 py-5 grid lg:grid-cols-4  overflow-y-hidden  h-[calc(100vh-56px)] bg-slate-100">
        <div className='z-10'>
          
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout