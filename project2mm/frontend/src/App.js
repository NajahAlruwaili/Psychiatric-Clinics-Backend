import React from 'react'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';
import Videos from './Components/Videos/Videos';
import Setting from './Components/Setting/Setting';
import "./App.css"


export default function App() {
  return (
    <div>
    
      <div >
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="notification" element={<Notification />}></Route>
          <Route path="videos" element={<Videos />}></Route>
          <Route path="setting" element={<Setting />}></Route>
          
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
