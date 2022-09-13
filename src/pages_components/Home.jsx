import { useContext, useEffect } from "react"
import { Outlet } from "react-router-dom"
import RightSideBar from "../components/RightSideBar.jsx"
import { AllContext } from "../context/AllContext.jsx"

const Home = () => {
  const {setToggleSideBar} = useContext(AllContext)



  useEffect(()=>{
    setToggleSideBar(false)
    return ()=>{
        setToggleSideBar(false)
    }
},[])

    return (
        <>
            <Outlet/>  
            <div className = 'hidden lg:block'>
                <RightSideBar/>
            </div>
        </>    
  )
}

export default Home
