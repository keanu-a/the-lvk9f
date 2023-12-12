import { Link } from "react-router-dom";
import logo from "../assets/final-multi.jpg";

interface navText {
  to: string;
  text: string;
}

const companyLinks: navText[] = [
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

const contactInformation: string[] = [
  "+1 (702) 123-1234",
  "testemail@gmail.com",
];

export default function Footer() {
  return (
    <footer className="bg-main-blue">
      <div className="max-w-7xl flex flex-col mx-auto gap-4 justify-center items-center py-6 sm:flex-row sm:justify-around">
        <Link to="/">
          <img
            src={logo}
            alt="The Las Vegas K-9 Foundation logo"
            className="rounded-full w-2/5 mx-auto sm:w-32"
          />
        </Link>

        <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-3 gap-5">
          <div>
            <h2 className="text-md font-bold text-xl">Organization</h2>
            <ul className="flex flex-col gap-2">
              {companyLinks.map(({ to, text }, index) => (
                <li key={index}>
                  <Link
                    to={to}
                    className="text-xs hover:text-main-white transition sm:text-base"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-md font-bold text-xl">Get Involved</h2>
            <ul className="flex flex-col gap-2">
              {getInvolvedLinks.map(({ to, text }, index) => (
                <li key={index}>
                  <Link
                    to={to}
                    className="text-xs hover:text-main-white transition sm:text-base"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-md font-bold text-xl">Contact Us</h2>
            <ul className="flex flex-col gap-2">
              {contactInformation.map((info, index) => (
                <li key={index} className="text-xs sm:text-base">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-main-yellow flex text-center justify-center p-4 sm:p-2">
        <p className="text-xs">
          Copyright &copy; 2023 The Las Vegas K-9 Foundation. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
