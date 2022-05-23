import React from "react";
import Home from "./pages_components/Home.jsx";
import Groups from "./pages_components/Groups.jsx";
import Layout from "./pages_components/Layout.jsx";
import Friends from "./pages_components/Friends.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>  
            <Route index element={<Home/>} />
            <Route path="groups" element={<Groups/>} />
            <Route path="friends" element={<Friends/>} />
        </Route>
        
      </Routes>    
    </Router>
  </div>   
  )     
}

export default App