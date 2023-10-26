import { NavLink } from "react-router-dom";

import logo from "../assets/final-multi.jpg";

interface navText {
  to: string;
  text: string;
}

const navLinkText: navText[] = [
  { to: "/about-us", text: "ABOUT US" },
  {
    to: "/events",
    text: "EVENTS",
  },
  {
    to: "/gallery",
    text: "GALLERY",
  },
  {
    to: "/membership",
    text: "MEMBERSHIP",
  },
  {
    to: "/donate",
    text: "DONATE",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between px-12 border-b-[6px] border-main-blue">
      <NavLink to="/">
        <img src={logo} width={220} alt="The Las Vegas K-9 Foundation logo" />
      </NavLink>

      <ul className="flex gap-12 justify-around items-center">
        {navLinkText.map(({ to, text }, index) => (
          <li key={index}>
            <NavLink
              to={to}
              className={`text-2xl font-semibold  ${
                text === "DONATE"
                  ? "bg-main-blue hover:text-main-white p-3 rounded-lg"
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
