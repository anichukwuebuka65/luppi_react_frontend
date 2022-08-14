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
        <div className = 'col-span-2 w-full sm:w-2/3 lg:w-4/5 pl-3 mx-auto md:overflow-auto'>
           
            {/*mainbar */}
            <MainBar/>
        </div>

          {/*right-sidebar */}
        <div className = 'hidden lg:block'>
          <RightSideBar/>
        </div>
      </>    
  )
}

export default Home
