import { Link } from "react-router-dom";
import logo from "../assets/final-multi.jpg";
import linkedIn from "../assets/icons8-linkedin-48.png";
import facebook from "../assets/icons8-facebook-48.png";
import youtube from "../assets/icons8-youtube-48.png";

interface navText {
  to: string;
  text: string;
}

const companyLinks: navText[] = [
  { to: "/about-us", text: "About Us" },
  {
    to: "/events",
    text: "Events",
  },
  {
    to: "/gallery",
    text: "Gallery",
  },
];

const getInvolvedLinks: navText[] = [
  {
    to: "/membership",
    text: "Membership",
  },
  {
    to: "/donate",
    text: "Donate",
  },
];

export default function Footer() {
  return (
    <footer className="max-w-7xl h-[18rem] flex flex-col justify-between mx-auto border-t-[6px] border-main-blue">
      <div className="flex justify-around px-8 items-center">
        <Link to="/">
          <img src={logo} width={150} alt="The Las Vegas K-9 Foundation logo" />
        </Link>

        <div className="flex gap-16">
          <div>
            <h3>Company</h3>
            <ul>
              {companyLinks.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Get Involved</h3>
            <ul>
              {getInvolvedLinks.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex">
          <a href="/">
            <img src={linkedIn} width={30} />
          </a>
          <a href="/">
            <img src={facebook} width={30} />
          </a>
          <a href="/">
            <img src={youtube} width={30} />
          </a>
        </div>
      </div>

      <div className="flex justify-between p-1">
        <h4>&copy; 2023 The Las Vegas K-9 Foundation. All Rights Reserved.</h4>
        <h4>Las Vegas</h4>
      </div>
    </footer>
  );
}
