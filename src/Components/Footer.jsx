import React from "react";


function Footer() {
  const style = {
    display: "flex",
    justifyContent: "center",
   }


    return (
        <div style={style}>
            <p>All Rights Reserved</p>
          &copy; {new Date().getFullYear()} Scorpion Cobra Studio
        </div>
      );
    }

export default Footer;