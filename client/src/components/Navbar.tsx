import { NavLink } from "react-router-dom";

import logo from "../assets/final-multi.jpg";

export default function Navbar() {
  return (
    <nav className="flex">
      <img src={logo} width={150} />

      <ul className="flex">
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/membership">Membership</NavLink>
        </li>
        <li>
          <NavLink to="/donate">Donate</NavLink>
        </li>
      </ul>
    </nav>
  );
}
