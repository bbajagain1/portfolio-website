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
        {navLinks.map((nav) => (
          <a id={nav.id} href={nav.href} className="active">
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
