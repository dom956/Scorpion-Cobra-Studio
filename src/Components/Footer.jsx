import React, { useState, useEffect } from "react";

function Footer() {
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430); // Change 430px as per your requirement
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Default footer style (for larger screens)
  const style = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    marginTop: "auto",
  };

  // Mobile-specific footer style (fixed at bottom of the screen)
  const mobileStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    position: "relative",
    bottom: 0, // Aligns to the bottom of the screen
    left: 0,// Spans across the entire screen
  };

  return (
    <div style={isMobile ? mobileStyle : style}>
      <p>All Rights Reserved</p>
      &copy; {new Date().getFullYear()} Scorpion Cobra Studio
    </div>
  );
}

export default Footer;
