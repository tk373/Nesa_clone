import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login'
import Home from './Home'
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate, Navigate, useAsyncError} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>  
              <Route path='/Home' element={<Home />}/>
              <Route exact path="/" element={<Navigate to="/Login"/>} />
              <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
