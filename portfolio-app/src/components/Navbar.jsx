import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { BsFillBriefcaseFill } from "react-icons/bs";
import "../styles/navbar.css";

function Navbar() {
  
  

  // Create a condition that targets viewports at least 768px wide
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
      console.log('big devices');
    } else {
      console.log('small devices');
    }
  }

  // Register event listener
  mediaQuery.addListener(handleTabletChange);

  // Initial check
  handleTabletChange(mediaQuery);

  return(
    <>
      <p>Navbar</p>
      <button>Click</button>
    </>
  )
}

export default Navbar;