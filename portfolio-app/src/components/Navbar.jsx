import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { BsFillBriefcaseFill } from "react-icons/bs";
import "../styles/navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <BsFillBriefcaseFill />
      <ul>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-normal cursor-pointer text-[16px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-normal cursor-pointer text-[16px]  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
