import { NavLink } from "react-router-dom";

import logo from "../assets/final-multi.jpg";

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
  return (
    <nav className="flex justify-between px-12 border-b-[6px] border-main-blue">
      <NavLink to="/">
        <img src={logo} width={150} alt="The Las Vegas K-9 Foundation logo" />
      </NavLink>

      <ul className="flex gap-12 justify-around items-center -lg:hidden">
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
