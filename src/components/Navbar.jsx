import React, { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Bibek Bajagain portfolio</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/education">Education</a>
        <a href="/experience">Experience</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
