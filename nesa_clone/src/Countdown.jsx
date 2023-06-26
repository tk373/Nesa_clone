import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login'
import {BrowserRouter, Routes, Route, useNavigate, Navigate, useAsyncError} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./countdown.css"

function Countdown() {

    const [minutes, setMinutes] = useState(29);
    const minutesString = minutes.toString().padEnd(3, '\'');
    const [count, setCount] = useState(0);
    let i = 0;

     useEffect(() => {
       let a = 29;
       const timer = setInterval(() => {
           a = a - 1;
         setMinutes(a);
         clearInterval(0);
          setCount(0);
          i = 0;
       }, 60000);

       return () => {
         clearInterval(timer);
       };
     }, []);
    

    useEffect(() => {
        
        const interval = setInterval(() => {
            i = i + 5.654867;
          setCount(i);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  
    let circleAnimation = {
        strokeDashoffset: ` ${count}`,
        stroke: "rgb(230, 230, 230)",
    };
  
    return (
    <div className='timeholder'>
      <span className='spantimer'>{minutesString}</span>
        <svg width="24px" height="24px" viewBox="0 0 120 120" className='pipi'>
          <circle
            r="54px"
            cx="60px"
            cy="60px"
            fill="none"
            strokeWidth="12px"
            stroke="#fff"
            strokeDasharray= "339.291992px"
            style={circleAnimation}
          />
        </svg>
        </div>
    );
  };



export default Countdown