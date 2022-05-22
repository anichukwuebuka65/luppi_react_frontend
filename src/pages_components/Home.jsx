
import Header from "../components/Header.jsx"
import MainBar from "../components/MainBar.jsx"
import LeftSideBar from "../components/LeftSideBar.jsx"
import RightSideBar from "../components/RightSideBar.jsx"


const Home = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <div >
        <Header/>
      </div>

      {/* body starts here*/}

      <div  className = "px-3 py-5 grid grid-cols-4  h-[calc(100vh-56px)] bg-slate-100">

        {/* left-sidebar */}
        <div className = ''>
          <LeftSideBar/>
        </div>

        {/*center-bar */}
        <div className = 'col-span-2 w-4/5  mx-auto overflow-y-scroll'>
           <MainBar/>
         </div>

          {/*right-sidebar */}
        <div className = ''>
          <RightSideBar/>
        </div>
      </div>
        
    </div>
  )
}

export default Home
