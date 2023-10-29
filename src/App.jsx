import React, { useState } from 'react';
import './App.css'
import Sign_up from './form.jsx'
import illustration_desktop from './assets/images/illustration-sign-up-desktop.svg'
function App() {
 

  return (
    <div className="screen">
    <div className="screen-content">
      
    <Sign_up />
    <img src={illustration_desktop}/>
    </div>

    <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">David berg</a>.
    </div>
    </div>
  );
}

export default App;
