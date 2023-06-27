import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login'
import './Home.css'
import {BrowserRouter, Routes, Route, useNavigate, Navigate, useAsyncError} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header'

function Home() {
  
  useEffect(() => {
    document.title = "Nesa BWZR"; 
  }, []);

useEffect(() => {
    // Apply the desired background class
    document.body.classList.add('body-home'); 

    return () => {
      // Clean up the body class when the component unmounts
      document.body.classList.remove('body-home');
    };
  }, []);

    useEffect(() => {
        // Apply the desired background class
        document.body.classList.add('body-home'); 
    
        return () => {
          // Clean up the body class when the component unmounts
          document.body.classList.remove('body-home');
        };
      }, []);
    
  return (
    <>
      <div className='appHome'>
        <header className='homeHeader'>
            <Header />
        </header>
      </div>
    </>
  )
}

export default Home