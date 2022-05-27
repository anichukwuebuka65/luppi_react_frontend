import MainBar from "../components/MainBar.jsx"
import RightSideBar from "../components/RightSideBar.jsx"


const Home = () => {
    
  return (
      <>

        {/*center-bar */}
        <div className = 'col-span-2 w-4/5  mx-auto overflow-auto'>
           
            {/*mainbar */}
            <MainBar/>
         </div>

          {/*right-sidebar */}
        <div className = ''>
          <RightSideBar/>
        </div>
      </>    
  )
}

export default Home
