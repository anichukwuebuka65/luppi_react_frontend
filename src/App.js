import { useState, useEffect, useRef } from "react";
import Home from "./pages_components/Home.jsx";
import Groups from "./pages_components/Groups.jsx";
import Friends from "./pages_components/Friends.jsx";
import { Routes, Route,useNavigate } from "react-router-dom";
import ProfilePage from "./pages_components/ProfilePage.jsx";
import FriendRequests from "./pages_components/FriendRequests.jsx";
import Notifications from "./pages_components/Notifications.jsx";
import { AllContext } from "./context/AllContext.jsx";
import Layout from "./components/Layout.jsx";
import PageNotFound from "./pages_components/PageNotFound.jsx";
import Layout2 from "./pages_components/Layout2.jsx";
import Login from './pages_components/login.jsx'
import Register from './pages_components/Register.jsx'
import { useDispatch, useSelector} from "react-redux";
import PostWithComments from "./pages_components/PostWithComments.jsx";
import MainBar from "./components/MainBar.jsx";
import EditProfile from "./pages_components/EditProfile.jsx";

const App = () => {
  const token = useSelector(state => state.user.token)
  const [chat, setChat] = useState(false)
  const [toggleSideBar, setToggleSideBar] = useState(false)
  const [requestDetails, setRequestDetails] = useState([]) 
  const [reqCount, setReqCount] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const position = useRef(0)

 const capitalizeFirstLetter = (word) => {
  return word.substring(0,1).toUpperCase() + word.substring(1)
}

const toggleChat = (offOnly = false) => {
  if(offOnly) {
    setChat(false)
  }
  else{
    setChat((state)=>state=!state)
  }
}

 const contextValues = {
  chat,
  setChat,
  toggleChat,
  toggleSideBar,
  setToggleSideBar,
  reqCount,
  setReqCount,
  requestDetails,
  setRequestDetails,
  capitalizeFirstLetter,
  position,
}         

  useEffect(() => {
    const checkAuth = () => {
      const data = JSON.parse(sessionStorage.getItem("user"))
      if(data) {
        dispatch({type:'fetchUser', payload: data }) 
      } else {
        navigate("/login")
      } 
    }
    checkAuth();
  },[])

  return (
  <div >
      <AllContext.Provider value={contextValues}> 
            <Routes>
              <Route element={ token ? <Layout2 /> : <Login/>}>
                <Route index element={<Layout/>} />
                <Route element={<Layout/>} >
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}>
                      <Route index element={<MainBar/>}/>
                      <Route path=":id" element={<PostWithComments/>}/>
                    </Route>
                    <Route path="friends" element={<Friends/>} />
                </Route>   
                <Route path="groups" element={<Groups/>} />
                <Route path="profilepage" element={<ProfilePage/>} />
                <Route path="friendrequest" element={<FriendRequests/>} />
                <Route path="notifications" element={<Notifications/>} />
                <Route path="editprofile" element={<EditProfile/>} />
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes> 
      </AllContext.Provider>    
  </div>   
  )     
}

export default App