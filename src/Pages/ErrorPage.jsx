import React from 'react';
import "../Styles/Errorpage.css";
import errorpage from '../Images/errorpage.jpeg';

function ErrorPage() {
    return (
      <div className="error-page">
      <img src={errorpage} alt="404 Not Found" className="background-image" />
    </div>
    );
  }




  export default ErrorPage;