import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/final-multi.jpg";
import { List, X } from "@phosphor-icons/react";

interface navText {
  to: string;
  text: string;
}

const navLinkText: navText[] = [
  { to: "/about-us", text: "About Us" },
  {
    to: "/events",
    text: "Events",
  },
  {
    to: "/gallery",
    text: "Gallery",
  },
  {
    to: "/membership",
    text: "Membership",
  },
  {
    to: "/donate",
    text: "Donate",
  },
];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 lg:px-12 border-b-[6px] border-main-blue relative">
      <NavLink to="/">
        <img src={logo} width={150} alt="The Las Vegas K-9 Foundation logo" />
      </NavLink>

      <button
        className="lg:hidden hover:text-main-blue h-fit"
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        {toggleMenu ? <X size={32} /> : <List size={32} />}
      </button>

      {/* Menu Nav Bar */}
      <ul
        className={`flex flex-col gap-8 p-8 w-full text-center absolute z-20 top-full right-0 
                    shadow-lg rounded-b-lg bg-main-white lg:hidden ${
                      !toggleMenu && "hidden"
                    }`}
      >
        {navLinkText.map(({ to, text }, index) => (
          <li key={index}>
            <NavLink
              to={to}
              className={`text-xl font-medium ${
                text === "Donate"
                  ? "transition bg-main-blue hover:text-main-white p-4 rounded-lg"
                  : "hover:text-main-blue"
              }`}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Regular Nav Bar */}
      <ul className="gap-12 justify-around items-center hidden lg:flex lg:flex-row">
        {navLinkText.map(({ to, text }, index) => (
          <li key={index}>
            <NavLink
              to={to}
              className={`text-xl font-medium ${
                text === "Donate"
                  ? "transition bg-main-blue hover:text-main-white p-3 rounded-lg"
                  : "hover:text-main-blue"
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
