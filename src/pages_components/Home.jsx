import MainBar from "../components/MainBar.jsx"
import RightSideBar from "../components/RightSideBar.jsx"


const Home = () => {
    
  return (
      <>

        {/*center-bar */}
        <div className = 'col-span-2 md:w-2/3 lg:w-4/5 pr-2 mx-auto md:overflow-auto'>
           
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
