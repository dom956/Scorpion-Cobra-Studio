import React from 'react';
import "../Styles/Home.css";
import splashscreen from "../Images/splashscreen.png";


function Home() {
    return (
      <div className='parent-container'>
       <h1>Escape The Humans</h1>
       <img
          src={splashscreen}
          alt="img"
          className="splash-screen"
        />
      </div>
    );
  }




  export default Home;