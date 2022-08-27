import React, { useContext, useEffect } from 'react'
import { Outlet, } from 'react-router-dom'
import { AllContext } from '../context/AllContext'


const Layout = () => {
    const {setToggleSideBar} = useContext(AllContext)
    const {isLoading} = useContext(AllContext)

  useEffect(() => {
    return () => {
      setToggleSideBar(true)
    }
  },[setToggleSideBar])


  if (isLoading) return <div className='italic text-2xl mt-5 text-center'>Loading...</div>

  return (
    <div  className=" relative px-3 py-5 grid lg:grid-cols-4  overflow-y-hidden  h-[calc(100vh-56px)] bg-slate-100">
        <div className=''>
          
        </div>
        <Outlet/>
        
    </div>
  )
}

export default Layout