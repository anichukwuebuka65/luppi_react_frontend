import  React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './pages_components/Login'
import Register from './pages_components/Register'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   
      <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/*" exact element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
