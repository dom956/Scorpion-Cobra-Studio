import React from "react";


function Copyright() {
   const style = {
    position: 'fixed',
    left: '50%',
    textAlign: 'center',
   }


    return (
        <div style={style}>
            <p>All Rights Reserved</p>
          &copy; {new Date().getFullYear()} Scorpion Cobra Studio
        </div>
      );
    }

export default Copyright;