import React from "react";


function Footer() {
  const style = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    marginTop: "auto", 
   }

    return (
        <div style={style}>
            <p>All Rights Reserved</p>
          &copy; {new Date().getFullYear()} Scorpion Cobra Studio
        </div>
      );
    }

export default Footer;