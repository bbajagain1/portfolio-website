import React from "react";
import "../index.css";
import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <BsFillBriefcaseFill />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white font-poppins font-normal cursor-pointer text-[16px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} 
            alt="menu"
            className="w-6 h-6 object-contain"
        />
      </div>
    </nav>
  );
}

export default Navbar;
