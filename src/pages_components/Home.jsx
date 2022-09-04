import { useContext, useEffect } from "react"
import MainBar from "../components/MainBar.jsx"
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
        {/*center-bar */}
          {/*mainbar */}
          <MainBar/>
          {/*right-sidebar */}
        <div className = 'hidden lg:block'>
          <RightSideBar/>
        </div>
      </>    
  )
}

export default Home
