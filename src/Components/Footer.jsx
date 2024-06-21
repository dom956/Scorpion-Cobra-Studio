import React from "react";


function Footer() {
  const style = {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    left: 0,
    right: 0,
   }


    return (
        <div style={style}>
            <p>All Rights Reserved</p>
          &copy; {new Date().getFullYear()} Scorpion Cobra Studio
        </div>
      );
    }

export default Footer;