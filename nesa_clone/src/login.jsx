import React, { useState, useEffect } from 'react';
import './login.css';

const Login = () => {

  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    document.title = "Nesa BWZR"; // Replace with your desired title
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const dateTime = now.toLocaleString();
      setCurrentDateTime(dateTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function openDialog() {
    const dialog = document.getElementById('impressumDialog');
    dialog.showModal();
  }

  function closeDialog() {
    const dialog = document.getElementById('impressumDialog');
    dialog.close();
  }

  return (
    <div className="app">
      <header className="header">
        <div className='loginheader'>
            <div className='headertext-right'>
          Nesa BWZR<br></br>
         Rapperswil-Jona
         </div>
         <b className='headerTitle'>
              Kanton St.Gallen<br></br>
              Berufs- und Weiterbildungszentrum Rapperswil-Jona
            </b>
        </div> 
      </header>
      <div className="content">
        <div className='loginform'>
          <form>
            <div className='loginGrid'>
              <div className='usernameField'>
                <div className='usernameInput'>
                  <input type='text' id='user' className='usernameInputField'></input>
                  <label htmlFor='user' className='usernameInptLabel'>Benutzername</label>
                </div>
              </div>
              <div className='passwordField'>
                <div className='passwordInput'>
                  <input id='password' name='password' type='password' className='passwrdInputField'></input>
                  <label htmlFor='password' className='passrdInptLabel'>Passwort</label>
                </div>
              </div>
              <div className='ButtonField'>
                <input type='submit' value="Login" className='submitButton'></input>
                <a href='https://www.google.com' className='forgotPassword'>Passwort vergessen?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer">
       <div className='DatetimeFooter'>{currentDateTime}</div>
       <div className='InfosFooter'>
        <a href='#' onClick={openDialog}>Impressum</a>, 
        <a href="http://www.centerboard.ch/schulnetz"> Schulnetz</a>
        , Version schulNetz 5.7, Copyright 2004-2023,
          <a href="https://www.centerboard.ch" > Centerboard AG</a>
       </div>
        <dialog id="impressumDialog">
          <h2>Impressum</h2>
          <p>This is the content of the Impressum.</p>
          <button onClick={closeDialog}>Close</button>
        </dialog>
        </footer>
    </div>
    
  );
};

export default Login;