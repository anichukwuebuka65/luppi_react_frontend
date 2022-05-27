import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./pages_components/Login.jsx";
import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
