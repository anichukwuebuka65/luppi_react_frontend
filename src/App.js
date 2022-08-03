import React, { useState } from "react";
import Home from "./pages_components/Home.jsx";
import Groups from "./pages_components/Groups.jsx";
import Friends from "./pages_components/Friends.jsx";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages_components/ProfilePage.jsx";
import FriendRequests from "./pages_components/FriendRequests.jsx";
import Notifications from "./pages_components/Notifications.jsx";
import { AllContext } from "./context/AllContext.jsx";
import Layout from "./components/Layout.jsx";
import PageNotFound from "./pages_components/PageNotFound.jsx";
import Layout2 from "./pages_components/Layout2.jsx";
import Login from './pages_components/Login'
import Register from './pages_components/Register'

const App = () => {
  const [chat, setChat] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false)   
   
  const toggleChat = (offOnly = false) => {
    if(offOnly) {
      setChat(false)
    }else{
      setChat((state)=>state=!state)
    }
  }
  
  const contextValues = {chat,
        setChat,
        toggleChat,
        toggleSideBar,
        setToggleSideBar}
  return (
  <div>
      <AllContext.Provider value={contextValues}> 
          <Routes>
            <Route exact path="/" element={<Layout2/>}>
              <Route path="home" element={<Layout/>} >
                  <Route index element={<Home/>} />
                  <Route path="friends" element={<Friends/>} />
              </Route>   
              <Route path="groups" element={<Groups/>} />
              <Route path="profilepage" element={<ProfilePage/>} />
              <Route path="friendrequest" element={<FriendRequests/>} />
              <Route path="notifications" element={<Notifications/>} />
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