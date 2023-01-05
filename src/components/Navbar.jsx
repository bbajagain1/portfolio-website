import React, { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img src={logo} alt="personal logo" className="nav-logo" />
      <div className={`nav-items ${isOpen && "open"}`}>
        {/* <a href="/home">Home</a>
        <a href="/education">Education</a>
        <a href="/experience">Experience</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a> */}
        {navLinks.map((nav) => (
          <a id={nav.id} href={nav.href}>
            {nav.title}
          </a>
        ))}
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
