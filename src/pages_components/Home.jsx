import MainBar from "../components/MainBar.jsx"
import LeftSideBar from "../components/LeftSideBar.jsx"
import RightSideBar from "../components/RightSideBar.jsx"
import Chat from "../components/Chat.jsx"
import InBox from "../components/InBox.jsx"

const Home = () => {
  return (
      <div  className=" relative px-3 py-5 grid grid-cols-4  h-[calc(100vh-56px)] bg-slate-100">
        
        {/*chat component */}
        <div className="z-30 h-full w-2/5 absolute top-5 right-1/4"><Chat/></div>

        {/*chat component */}
        <div className="z-50 h-full w-2/5 absolute top-20 right-20"><InBox/></div>


        {/* left-sidebar */}
        <div className = ''>
          <LeftSideBar/>
        </div>

        {/*center-bar */}
        <div className = 'col-span-2 w-4/5  mx-auto overflow-auto'>
           
            {/*mainbar */}
            <MainBar/>
         </div>

          {/*right-sidebar */}
        <div className = ''>
          <RightSideBar/>
        </div>
      </div>    
  )
}

export default Home
