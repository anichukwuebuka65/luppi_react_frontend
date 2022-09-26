import React, { useContext, useEffect } from 'react'
import { Outlet, } from 'react-router-dom'
import { AllContext } from '../context/AllContext'


const Layout = () => {
    const {setToggleSideBar} = useContext(AllContext)

  useEffect(() => {
    return () => {
      setToggleSideBar(true)
    }
  },[setToggleSideBar])

  return (
    <div  className=" md:px-3 py-2  md:grid overflow:hidden md:grid-cols-4 h-[calc(100vh-60px)]">
        <div className=''></div>
        <Outlet/>
        
    </div>
  )
}

export default Layout