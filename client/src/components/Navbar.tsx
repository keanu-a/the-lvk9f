import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/final-multi.jpg";
import { List, X } from "@phosphor-icons/react";

interface navText {
  to: string;
  text: string;
}

const navLinkText: navText[] = [
  {
    to: "/about-us",
    text: "About Us",
  },
  {
    to: "/events",
    text: "Events",
  },
  {
    to: "/gallery",
    text: "Gallery",
  },
  {
    to: "/become-a-supporter",
    text: "Become a Supporter",
  },
  {
    to: "/donate",
    text: "Donate",
  },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center pr-4 sm:px-4 lg:px-12 border-b-4 border-main-blue relative">
      <NavLink to="/">
        <img
          src={logo}
          className="w-24 sm:w-32"
          alt="The Las Vegas K-9 Foundation logo"
        />
      </NavLink>

      <button
        className="md:hidden hover:text-main-blue h-fit"
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        {toggleMenu ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
      </button>

      {/* Menu Nav Bar */}
      <ul
        className={`flex flex-col gap-4 p-8 w-full text-center absolute z-20 top-full right-0 
                    shadow-lg rounded-b-lg bg-main-white md:hidden ${
                      !toggleMenu && "hidden"
                    }`}
      >
        {navLinkText.map(({ to, text }, index) => (
          <li key={index}>
            <NavLink
              to={to}
              onClick={() => setToggleMenu(false)}
              className={`transition text-md font-medium  ${
                text === "Donate" ? "donate-btn" : "hover:text-main-blue"
              }`}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Regular Nav Bar */}
      <ul className="gap-12 justify-around items-center hidden md:flex md:flex-row">
        {navLinkText.map(({ to, text }, index) => (
          <li key={index}>
            <NavLink
              to={to}
              className={`transition text-xl font-medium ${
                text === "Donate" ? "donate-btn" : "hover:text-main-blue"
              }`}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
